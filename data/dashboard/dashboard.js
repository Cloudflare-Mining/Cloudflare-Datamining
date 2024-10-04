! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1932aeb4-b280-5b4d-9766-10ddb0c83992")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				J8: function() {
					return a
				},
				Jd: function() {
					return i
				},
				QY: function() {
					return p
				},
				Qw: function() {
					return l
				},
				ki: function() {
					return d
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/utils/url.ts"),
				c = n("../node_modules/query-string/query-string.js"),
				g = n.n(c),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f;
			const l = () => Object.keys(s.Z).reduce((E, T) => (T.indexOf("cf_beta.") === 0 && s.Z.get(T) === "true" && E.push(T.split(".").slice(1).join(".")), E), []),
				d = () => {
					var E, T, h;
					return ((E = window) === null || E === void 0 || (T = E.bootstrap) === null || T === void 0 || (h = T.data) === null || h === void 0 ? void 0 : h.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((f = window) === null || f === void 0 ? void 0 : f.location) && s.Z) {
				const E = g().parse(window.location.search);
				E.beta_on && s.Z.set(`cf_beta.${E.beta_on}`, !0), E.beta_off && s.Z.set(`cf_beta.${E.beta_off}`, !1)
			}
			const v = {},
				t = E => {
					var T, h, C;
					return Object.prototype.hasOwnProperty.call(v, E) ? v[E] : ((T = window) === null || T === void 0 || (h = T.bootstrap) === null || h === void 0 || (C = h.data) === null || C === void 0 ? void 0 : C.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(D => D === E) ? (v[E] = !0, !0) : (v[E] = !1, !1)
				},
				r = E => s.Z ? s.Z.get(`cf_beta.${E}`) === !0 : !1,
				a = E => r(E) || t(E),
				u = () => !0,
				i = () => {
					var E, T, h;
					return ((E = window) === null || E === void 0 || (T = E.bootstrap) === null || T === void 0 || (h = T.data) === null || h === void 0 ? void 0 : h.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				p = E => {
					const T = (0, e.uF)(E),
						h = (T == null ? void 0 : T.roles) || [];
					return (0, o.qR)(location.pathname) && h.length === 1 && h.some(C => C === "Administrator Read Only")
				}
		},
		"../init.ts": function(H, y, n) {
			"use strict";
			n.r(y);
			var e = n("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = n("../../../../node_modules/url-search-params-polyfill/index.js"),
				c = n("../libs/init/initGlobal.ts"),
				g = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				s = n("../../../../node_modules/fetch-intercept/lib/browser.js");

			function f(A) {
				for (var R = 1; R < arguments.length; R++) {
					var V = arguments[R] != null ? Object(arguments[R]) : {},
						oe = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(V).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(V, ue).enumerable
					})), oe.forEach(function(ue) {
						l(A, ue, V[ue])
					})
				}
				return A
			}

			function l(A, R, V) {
				return R = d(R), R in A ? Object.defineProperty(A, R, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[R] = V, A
			}

			function d(A) {
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
				return V.append("X-Cross-Site-Security", "dash"), f({}, A, {
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
				u = n("../react/app/providers/storeContainer.js");
			let i = "";
			const p = 61;

			function E(A) {
				const R = A.substr(1);
				if (R && i !== R) {
					const V = document.getElementById(R);
					if (V) {
						const oe = V.getBoundingClientRect().top;
						if (oe > 0) {
							const ue = oe - p;
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
				z = "deploymentPreview",
				j = "fragmentPreview",
				$ = A => A === _ ? Z() : k(),
				Z = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				k = (A = 72) => {
					const R = 36e5;
					return new Date(Date.now() + A * R)
				},
				x = A => {
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
				te = (A, R = !1) => {
					var V;
					const oe = x(A),
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
						be = R ? `
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
					return ue + be
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

			function ee(A) {
				var R;
				const V = document.getElementById("loading-state"),
					oe = !!((R = h.parse(document.cookie)) === null || R === void 0 ? void 0 : R[D]);
				!V || (V.innerHTML = te(A == null ? void 0 : A.code, oe))
			}
			var pe = n("../utils/initStyles.ts"),
				W = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				U = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				w = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				K = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				q = n("../../../../node_modules/history/esm/history.js"),
				N = (0, q.lX)(),
				P = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				O = n("../react/utils/url.ts");
			const I = (0, P.Rf)();
			let G;

			function X(A) {
				return J(A, "react-router-v5")
			}

			function J(A, R) {
				return (V, oe = !0, ue = !0) => {
					oe && I && I.location && (G = V({
						name: (0, O.Fl)(I.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": R
						}
					})), ue && A.listen && A.listen((be, ve) => {
						if (ve && (ve === "PUSH" || ve === "POP")) {
							G && G.finish();
							const je = {
								"routing.instrumentation": R
							};
							G = V({
								name: (0, O.Fl)(be.pathname),
								op: "navigation",
								tags: je
							})
						}
					})
				}
			}
			var ge = n("../react/common/selectors/languagePreferenceSelector.ts"),
				Le = n("../flags.ts"),
				Oe = n("../utils/getDashVersion.ts"),
				F = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				se = n.n(F),
				Te = n("../../../common/intl/intl-core/src/errors.ts"),
				Ze = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				Ne = n("../react/common/middleware/sparrow/errors.ts");
			const Ge = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				Ve = !0,
				Ye = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				st = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function He(A, R, V) {
				return R = Ue(R), R in A ? Object.defineProperty(A, R, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[R] = V, A
			}

			function Ue(A) {
				var R = tt(A, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function tt(A, R) {
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
					He(this, "name", $e.id)
				}
				setupOnce() {
					n.g.console && (0, Ze.hl)(n.g.console, "error", R => (...V) => {
						const oe = V.find(ue => ue instanceof Error);
						if (Ge && oe) {
							let ue, be = !0;
							if (oe instanceof Ne.ez) {
								const ve = oe instanceof Ne.oV ? oe.invalidProperties : void 0;
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
								}, be = !1
							} else if (oe instanceof F.SparrowIdCookieError) ue = {
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
							} else oe instanceof Te.YB && (ue = {
								fingerprint: ["TranslatorError", oe.translationKey]
							});
							be && r.Tb(oe, ue)
						}
						typeof R == "function" && R.apply(n.g.console, V)
					})
				}
			}
			He($e, "id", "ConsoleErrorIntegration");
			var Qe = null,
				Xe = n("../utils/sentry/lastSentEventId.ts"),
				Ke = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				nt = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const Je = A => {
					const R = async V => {
						var oe, ue;
						const be = {
							envelope: V.body,
							url: A.url,
							isPreviewDeploy: (oe = window) === null || oe === void 0 || (ue = oe.build) === null || ue === void 0 ? void 0 : ue.isPreviewDeploy,
							release: (0, Oe.t)()
						};
						try {
							const ve = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(be)
							});
							return {
								statusCode: ve.status,
								headers: {
									"x-sentry-rate-limits": ve.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": ve.headers.get("Retry-After")
								}
							}
						} catch (ve) {
							return console.log(ve), (0, nt.$2)(ve)
						}
					};
					return Ke.q(A, R)
				},
				ot = () => {
					if (Ge && Ve) {
						var A, R, V, oe, ue, be, ve, je, rt, it;
						let vt = "production";
						((A = window) === null || A === void 0 || (R = A.build) === null || R === void 0 ? void 0 : R.isPreviewDeploy) && (vt += "-preview"), U.S({
							dsn: Ge,
							release: (0, Oe.t)(),
							environment: vt,
							ignoreErrors: st,
							allowUrls: Ye,
							autoSessionTracking: !1,
							integrations: [new w.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new $e, new K.jK.BrowserTracing({
								routingInstrumentation: X(N)
							})],
							tracesSampleRate: 0,
							transport: Je,
							beforeSend: Nt => (Xe.e.setEventId(Nt.event_id), Nt)
						});
						const Wt = (0, u.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, Le.Qw)(),
							USER_BETA_FLAGS: (0, Le.ki)(),
							meta: {
								connection: {
									type: (V = window) === null || V === void 0 || (oe = V.navigator) === null || oe === void 0 || (ue = oe.connection) === null || ue === void 0 ? void 0 : ue.effectiveType,
									bandwidth: (be = window) === null || be === void 0 || (ve = be.navigator) === null || ve === void 0 || (je = ve.connection) === null || je === void 0 ? void 0 : je.downlink
								},
								languagePreference: (0, ge.r)(Wt),
								isPreviewDeploy: (rt = window) === null || rt === void 0 || (it = rt.build) === null || it === void 0 ? void 0 : it.isPreviewDeploy
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
			var Q = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				De = () => {
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
					Q.Z.set("mfe-remotes", JSON.stringify(V))
				},
				ie = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				le = n("../node_modules/uuid/dist/esm-browser/v4.js");
			const me = "ANON_USER_ID";

			function Ee() {
				var A, R, V, oe;
				let ue = (A = n.g) === null || A === void 0 || (R = A.bootstrap) === null || R === void 0 || (V = R.data) === null || V === void 0 || (oe = V.user) === null || oe === void 0 ? void 0 : oe.id;
				if (!ue) {
					let be = Q.Z.get(me);
					if (!be) {
						let ve = (0, le.Z)();
						Q.Z.set(me, ve), be = ve
					}
					return be
				}
				return ue
			}
			async function Ce() {
				const A = (0, u.bh)();
				A.dispatch((0, ie.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await A.dispatch((0, W.UL)({
					userId: Ee()
				}))
			}
			var Be = n("../libs/init/initBootstrap.ts"),
				Ie = n("webpack/sharing/consume/default/react/react"),
				_e = n.n(Ie),
				we = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				Me = n("webpack/sharing/consume/default/react-dom/react-dom"),
				qe = n("webpack/sharing/consume/default/react-redux/react-redux"),
				at = n("../../../../node_modules/swr/core/dist/index.mjs"),
				We = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				M = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				ne = n("../react/shims/focus-visible.js"),
				de = n("../react/app/components/DeepLink/index.ts"),
				ye = n("../../../../node_modules/prop-types/index.js"),
				Pe = n.n(ye),
				Re = n("../react/utils/translator.tsx"),
				et = n("../../../common/intl/intl-react/src/index.ts"),
				Ae = n("../../../dash/intl/intl-translations/src/index.ts"),
				Dt = n("../node_modules/query-string/query-string.js"),
				ct = n.n(Dt),
				St = n("../react/common/actions/userActions.ts"),
				ut = n("../react/common/selectors/userSelectors.ts"),
				xe = n("../react/utils/i18n.ts"),
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
					const R = (0, ht.$8)() ? [(0, Ae.Fy)(Ae.if.changes), (0, Ae.Fy)(Ae.if.common), (0, Ae.Fy)(Ae.if.navigation), (0, Ae.Fy)(Ae.if.overview), (0, Ae.Fy)(Ae.if.onboarding), (0, Ae.Fy)(Ae.if.invite), (0, Ae.Fy)(Ae.if.login), (0, Ae.Fy)(Ae.if.dns), (0, Ae.Fy)(Ae.n4.ssl_tls), (0, Ae.Fy)(Ae.if.message_inbox)] : [(0, Ae.Fy)(Ae.if.common), (0, Ae.Fy)(Ae.if.invite), (0, Ae.Fy)(Ae.if.login), (0, Ae.Fy)(Ae.if.onboarding)];
					Fe.lang ? bt(A) : Q.Z.get(xe.th) && Tt(A, Q.Z.get(xe.ly));
					const V = async oe => (await Promise.all(R.map(be => be(oe)))).reduce((be, ve) => wt({}, be, ve), {});
					return _e().createElement(et.RD.Provider, {
						value: A.languagePreference
					}, _e().createElement(et.bd, {
						translator: Re.Vb,
						locale: A.languagePreference
					}, _e().createElement(et.lm, {
						loadPhrases: V
					}, A.children)))
				},
				bt = async A => {
					let R = Fe.lang.substring(0, Fe.lang.length - 2) + Fe.lang.substring(Fe.lang.length - 2, Fe.lang.length).toUpperCase();
					if (!(0, ge.v)(R)) {
						console.warn(`${R} is not a supported locale.`), delete Fe.lang, A.history.replace({
							search: ct().stringify(Fe)
						});
						return
					}
					Q.Z.set(xe.ly, R), delete Fe.lang, Tt(A, R), A.isAuthenticated || A.history.replace({
						search: ct().stringify(Fe)
					})
				}, Tt = async (A, R) => {
					if (A.isAuthenticated) try {
						await A.setUserCommPreferences({
							"language-locale": R
						}, {
							hideErrorAlert: !0
						}), Q.Z.remove(xe.th), A.history.replace({
							search: ct().stringify(Fe)
						})
					} catch (V) {
						Q.Z.set(xe.th, !0), console.error(V)
					} else Q.Z.set(xe.th, !0)
				}, m = A => {
					const R = (0, ut.PR)(A);
					return {
						isAuthenticated: !!(R && R.id),
						languagePreference: Q.Z.get(xe.ly) || (0, ge.r)(A)
					}
				}, L = {
					setUserCommPreferences: St.V_
				};
			var ce = (0, we.withRouter)((0, qe.connect)(m, L)(Ct));
			Ct.propTypes = {
				history: Pe().object,
				languagePreference: Pe().string.isRequired,
				children: Pe().node.isRequired,
				isAuthenticated: Pe().bool,
				setUserCommPreferences: Pe().func.isRequired
			};
			var he = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				ke = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let ze;
			const mt = ({
				selectorPrefix: A = "c_"
			} = {}) => (ze || (ze = (0, ke.Z)({
				dev: !1,
				selectorPrefix: A
			})), ze);
			var gt = n("../react/common/components/ModalManager.tsx"),
				ft = n("../react/app/components/ErrorBoundary.tsx"),
				Et = n("../react/common/actions/notificationsActions.ts");
			const dt = (n.g.bootstrap || {}).data || {};
			class pt extends _e().Component {
				componentDidMount() {
					dt.messages && this.dispatchNotificationActions(dt.messages)
				}
				dispatchNotificationActions(R) {
					R.forEach(V => {
						const {
							type: oe,
							message: ue,
							persist: be
						} = V;
						["success", "info", "warn", "error"].includes(oe) && this.props.notifyAdd(oe, (0, Re.ZP)(ue), {
							persist: !!be
						})
					})
				}
				render() {
					return null
				}
			}
			var _t = (0, we.withRouter)((0, qe.connect)(null, {
				notifyAdd: Et.IH
			})(pt));
			pt.propTypes = {
				notifyAdd: Pe().func.isRequired
			};
			var Se = n("../react/app/redux/index.ts");

			function Ot() {
				var A;
				const R = (0, Se.p4)(ut.PR),
					V = (R == null || (A = R.email) === null || A === void 0 ? void 0 : A.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					oe = (0, ie.Yc)();
				(0, Ie.useEffect)(() => {
					oe({
						userType: V
					})
				}, [V, oe])
			}
			var Bt = n("../react/common/selectors/entitlementsSelectors.ts"),
				jt = n("../react/common/selectors/accountSelectors.ts");
			const zt = ["accountId", "is_ent"];

			function Gt() {
				const A = (0, ie.f7)(),
					R = (0, we.useHistory)(),
					V = (0, O.uW)(R.location.pathname),
					oe = (0, ie.Yc)(),
					ue = (0, ie.O$)(),
					be = (0, Se.p4)(Bt.u1),
					ve = !be.isRequesting && !!be.data,
					je = (0, Se.p4)(Bt.p1),
					rt = (0, Se.p4)(jt.Xu),
					it = (0, Se.p4)(jt.uF),
					vt = !rt.isRequesting && !!rt.data;
				(0, Ie.useEffect)(() => {
					V && vt && it && ve && V === it.account.id ? oe({
						accountId: it.account.id,
						is_ent: je
					}) : (!V || V in A && A.accountId !== V) && ue(zt)
				}, [vt, it, oe, ue, ve, je, V, A])
			}
			var Ht = n("../react/common/selectors/zoneSelectors.ts");

			function Kt() {
				const A = (0, Se.p4)(Ht.nA),
					R = (0, ie.Yc)();
				(0, Ie.useEffect)(() => {
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
			const Xt = _e().lazy(() => Promise.all([n.e(85608), n.e(2480), n.e(10008), n.e(49146), n.e(94012), n.e(13142), n.e(72019), n.e(73562), n.e(5668), n.e(60091), n.e(89263), n.e(77216), n.e(39760), n.e(94923), n.e(60734), n.e(40758), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var Jt = () => _e().createElement(Qt.Z, null, _e().createElement(Xt, null));
			const qt = () => (Ie.useEffect(() => re, []), null);
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
					const A = (0, Se.p4)(ge.r);
					(0, Ie.useEffect)(() => {
						const R = tn(A);
						R !== Ut().locale() && Ut().locale(R), document.documentElement.lang = A
					}, [A])
				},
				on = () => {
					(0, Ie.useEffect)(() => {
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
					const R = (0, we.useLocation)(),
						[V, oe] = (0, Ie.useState)(((A = window) === null || A === void 0 ? void 0 : A.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Ie.useEffect)(() => {
						const ue = ct().parse(R.search);
						if (ue.pt && Q.Z.set(rn.sJ, ue.pt), ue == null ? void 0 : ue.devPanel) {
							var be, ve;
							(be = window) === null || be === void 0 || (ve = be.localStorage) === null || ve === void 0 || ve.setItem("gates_devtools_ui_gates_controller_enabled", "true"), oe(!0)
						}
					}, [R.search]), {
						devPanelEnabled: V
					}
				},
				sn = _e().lazy(() => Promise.all([n.e(85608), n.e(2480), n.e(10008), n.e(49146), n.e(94012), n.e(13142), n.e(72019), n.e(73562), n.e(14696), n.e(12770), n.e(60091), n.e(89263), n.e(77216), n.e(39760), n.e(94923), n.e(60734), n.e(40758), n.e(88846), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				cn = _e().lazy(() => Promise.all([n.e(83741), n.e(65447), n.e(85608), n.e(13142), n.e(14696), n.e(26337), n.e(60091), n.e(60734), n.e(69088), n.e(88846), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var ln = ({
					userIsAuthed: A
				}) => {
					nn(), on();
					const {
						devPanelEnabled: R
					} = an();
					return _e().createElement(Ie.Suspense, {
						fallback: _e().createElement(qt, null)
					}, _e().createElement(we.Switch, null, !A && !0 && _e().createElement(we.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, _e().createElement(cn, null)), _e().createElement(we.Route, {
						render: () => _e().createElement(Yt.ZC, {
							minHeight: "100vh"
						}, _e().createElement(sn, null))
					})), R && _e().createElement(Jt, null))
				},
				It = n("../../../../node_modules/yup/es/index.js"),
				un = n("../../../common/util/types/src/utils/index.ts");
			const xt = {
				cfEmail: () => It.Z_().email((0, Re.ZP)("common.validation.email")).required((0, Re.ZP)("common.validation.email")),
				cfPassword: () => It.Z_().required((0, Re.ZP)("common.validation.required"))
			};
			(0, un.Yd)(xt).forEach(A => {
				It.kM(It.Z_, A, xt[A])
			});
			const Ft = _e().lazy(() => Promise.all([n.e(10008), n.e(94012), n.e(6368), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				dn = () => {
					const A = (0, ht.$8)(),
						[R, V] = (0, Ie.useState)(A ? Ft : _e().Fragment),
						[oe, ue] = (0, Ie.useState)((0, C.Yc)());
					(0, Ie.useEffect)(() => {
						(0, C.fF)(() => ue((0, C.Yc)()))
					}, []);
					const be = ve => {
						ue(ve), (0, C.C8)(ve)
					};
					return (0, Ie.useEffect)(() => {
						V(A ? Ft : _e().Fragment)
					}, [A]), (0, Ie.useEffect)(() => {
						const ve = () => be(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", ve), () => {
							window.removeEventListener("storage", ve)
						}
					}, []), _e().createElement(Ie.Suspense, {
						fallback: null
					}, _e().createElement(qe.Provider, {
						store: (0, u.bh)()
					}, _e().createElement(we.Router, {
						history: N
					}, _e().createElement(R, null, _e().createElement(he.Z, {
						renderer: mt()
					}, _e().createElement(ce, null, _e().createElement(ft.Z, {
						sentryTag: "Root"
					}, _e().createElement(at.J$, {
						value: {
							fetcher: ve => fetch(ve).then(je => je.json())
						}
					}, _e().createElement(Zt, null), _e().createElement(_t, null), _e().createElement(Vt.Z_, {
						onDarkModeChangeCb: be
					}, _e().createElement(de.ZP, null, _e().createElement(ln, {
						userIsAuthed: A
					}))), _e().createElement(gt.ZP, null), _e().createElement(We.F0, null)))))))))
				},
				pn = () => {
					(0, Me.render)(_e().createElement(dn, null), document.getElementById("react-app"))
				};
			var lt = n("../utils/initSparrow.ts"),
				yt = n("../utils/zaraz.ts");
			const mn = () => {
					const A = (0, ut.PR)((0, u.bh)().getState());
					gn(), (0, lt.Ug)(), (0, yt.bM)(), (A == null ? void 0 : A.id) && se().setUserId(A == null ? void 0 : A.id), (0, lt.yV)(), !(0, lt.Wi)() && (0, lt.IM)(), A ? (0, yt.yn)(A) : (0, yt.Ro)()
				},
				gn = () => {
					var A, R;
					(A = window) === null || A === void 0 || (R = A.OneTrust) === null || R === void 0 || R.OnConsentChanged(() => {
						const V = (0, ut.PR)((0, u.bh)().getState());
						(0, lt.Wi)() ? (se().setEnabled(!0), (V == null ? void 0 : V.id) ? (se().setUserId(V.id), (0, yt.yn)(V)) : (0, yt.Ro)(), (0, lt.yV)()) : (se().setEnabled(!1), (0, lt.IM)())
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
					}), ee(A)
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
						commit: "c8a8a58da5d4fa46d602a738aab19a0b501ac2a5",
						dashVersion: "27746007",
						env: "production",
						builtAt: 1728043643259,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, Oe.p)()
					}), ot();
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
						fn: De,
						tag: "mfePreviewData"
					}];
					for (const rt of oe)
						if (!await Lt(rt.fn, rt.tag)) return;
					let ue;
					if (!await Lt(async () => {
							ue = await (0, Be.k)()
						}, "bootstrap")) return;
					const be = (0, u.bh)(),
						ve = ((A = ue) === null || A === void 0 ? void 0 : A.data) || {};
					be.dispatch((0, a.mW)("user", ve == null ? void 0 : ve.user));
					const je = (R = ue) === null || R === void 0 || (V = R.data) === null || V === void 0 ? void 0 : V.user;
					return n.g.bootstrap = ue, je && je.id && B(je.id), !await Lt(Ce, "gates") || !await Lt(mn, "tracking") ? void 0 : pn()
				} catch (oe) {
					$t(oe, "global")
				}
			})()
		},
		"../libs/init/initBootstrap.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				k: function() {
					return g
				}
			});
			var e = n("../../../../node_modules/@sentry/core/esm/exports.js");
			class o extends Error {
				constructor(f, l) {
					super(l);
					this.name = `${f} ${l}`
				}
			}
			const c = () => {
					document.cookie.split(";").forEach(f => {
						const [l] = f.trim().split("=");
						document.cookie = `${l}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				g = async () => {
					let s = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!s.ok) throw s.headers.get("content-type") === "text/html" && (await s.text()).toLowerCase().includes("cookie too large") && (e.$e(function(v) {
						v.setTag("init", "cookieTooLarge"), e.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), c(), window.location.reload()), new o("Bootstrap API Failure", s == null ? void 0 : s.status);
					return (await s.json()).result.data
				}
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(H, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../react/app/redux/index.ts"),
				g = n("../react/common/selectors/userSelectors.ts"),
				s = n("../react/common/selectors/zoneSelectors.ts"),
				f = n("../react/common/selectors/accountSelectors.ts"),
				l = n("../react/common/utils/isGuards.ts"),
				d = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				v = n.n(d);

			function t() {
				return t = Object.assign ? Object.assign.bind() : function(u) {
					for (var i = 1; i < arguments.length; i++) {
						var p = arguments[i];
						for (var E in p) Object.prototype.hasOwnProperty.call(p, E) && (u[E] = p[E])
					}
					return u
				}, t.apply(this, arguments)
			}
			const r = u => {
				function i(p) {
					const E = (0, c.UM)(),
						T = (0, d.useHistory)(),
						h = (0, d.useLocation)(),
						C = (0, d.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						D = (0, c.p4)(g.PR) || null,
						b = (0, c.p4)(s.nA) || null,
						_ = (0, c.p4)(f.uF),
						S = _ ? _.account : null;
					if (!C) return null;
					const {
						accountId: z,
						app: j,
						tab: $
					} = C.params, Z = C.params.zoneName && ((0, l.v5)(C.params.zoneName) || C.params.zoneName.indexOf(".") > 0) ? C.params.zoneName : void 0;
					return o().createElement(u, t({
						dispatch: E,
						history: T,
						location: h,
						match: C,
						user: D,
						membership: z ? _ : null,
						account: z ? S : null,
						accountId: z || null,
						zone: Z ? b : null,
						zoneName: Z || null,
						app: Z ? j : null,
						tab: Z ? $ : null
					}, p))
				}
				return i.displayName = `withEntities(${a(u)})`, i
			};

			function a(u) {
				return u.displayName || u.name || "Component"
			}
			y.Z = r
		},
		"../react/app/components/DeepLink/actions.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				BQ: function() {
					return d
				},
				Bh: function() {
					return f
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
					return l
				},
				fj: function() {
					return r
				},
				r4: function() {
					return g
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
				c = (0, e.R)(o.ADD_SITE, u => ({
					payload: u
				})),
				g = (0, e.R)(o.RESOLVING_START),
				s = (0, e.R)(o.RESOLVING_COMPLETE),
				f = (0, e.R)(o.SELECT_ZONE, u => ({
					payload: u
				})),
				l = (0, e.R)(o.SELECT_ACCOUNT, u => ({
					payload: u
				})),
				d = (0, e.R)(o.SELECT_PAGES_PROJECT, u => ({
					payload: u
				})),
				v = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, u => ({
					payload: u
				})),
				t = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, u => ({
					accountIds: u
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				a = (0, e.R)(o.SELECT_WORKER, u => ({
					payload: u
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				BV: function() {
					return e
				},
				Dz: function() {
					return v
				},
				Fj: function() {
					return g
				},
				Kt: function() {
					return f
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
					return c
				},
				s$: function() {
					return l
				}
			});
			const e = "to",
				o = "_gl",
				c = "freeTrial",
				g = "deepLinkQueryParams",
				s = "resolvedDeepLinkQueryParams",
				f = "add",
				l = "multiSkuProducts",
				d = "/:account/billing/checkout",
				v = "/:account/:zone/billing/checkout",
				t = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				ZP: function() {
					return $
				},
				U: function() {
					return l.U
				},
				dd: function() {
					return l.dd
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
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				g = n("../react/app/components/DeepLink/utils.ts"),
				s = n("../react/utils/bootstrap.ts"),
				f = n("../react/app/components/DeepLink/actions.ts"),
				l = n("../react/app/components/DeepLink/selectors.ts"),
				d = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				v = n.n(d);

			function t(Z) {
				for (var k = 1; k < arguments.length; k++) {
					var x = arguments[k] != null ? Object(arguments[k]) : {},
						te = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(x).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(x, Y).enumerable
					})), te.forEach(function(Y) {
						r(Z, Y, x[Y])
					})
				}
				return Z
			}

			function r(Z, k, x) {
				return k = a(k), k in Z ? Object.defineProperty(Z, k, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[k] = x, Z
			}

			function a(Z) {
				var k = u(Z, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function u(Z, k) {
				if (typeof Z != "object" || Z === null) return Z;
				var x = Z[Symbol.toPrimitive];
				if (x !== void 0) {
					var te = x.call(Z, k || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(Z)
			}
			class i {
				constructor(k, x) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", te => {
						this.resolvers.set(te, {
							name: te,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", te => {
						const Y = this.resolvers.get(te);
						Y && (Y.endTime = Date.now(), this.resolvers.set(te, Y))
					}), r(this, "resolverCancel", te => {
						this.resolverDone(te), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", te => {
						const Y = "NO_ACTION",
							re = {
								actionType: Y,
								startTime: 0
							};
						return {
							start: (ee = Y) => {
								const pe = this.resolvers.get(te);
								re.actionType = ee, re.startTime = Date.now(), pe && pe.userActions.push(re)
							},
							finish: (ee = Y) => {
								re.actionType = ee, re.endTime = Date.now()
							},
							cancel: (ee = Y) => {
								re.actionType = ee, re.endTime = Date.now(), this.resolverCancel(te)
							}
						}
					}), this.deepLink = k, this.legacyDeepLink = x, this.resolvers = new Map
				}
				track(k) {
					try {
						if (this._done) return;
						this._done = !0;
						const x = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: p(this.startTime, this.endTime),
								totalCpuTime: p(this.startTime, this.endTime)
							},
							te = this.resolvers.size === 0 ? x : Array.from(this.resolvers.values()).reduce((Y, re) => {
								const ee = p(re.startTime, re.endTime),
									pe = re.userActions.reduce((U, w) => {
										const K = p(w.startTime, w.endTime);
										return {
											totalTime: U.totalTime + K,
											actions: U.actions.set(w.actionType, K)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									W = ee - pe.totalTime;
								return t({}, Y, {
									totalTime: Y.totalTime + ee,
									totalUserActionsTime: Y.totalUserActionsTime + pe.totalTime,
									totalCpuTime: Y.totalCpuTime + W,
									[`${re.name}ResolverTotalTime`]: ee,
									[`${re.name}ResolverTotalCpuTime`]: W,
									[`${re.name}ResolverTotalUserActionsTime`]: pe.totalTime
								}, Array.from(pe.actions.keys()).reduce((U, w) => t({}, U, {
									[`${re.name}Resolver/${w}`]: pe.actions.get(w)
								}), {}))
							}, t({}, x, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						v().sendEvent(k, te)
					} catch (x) {
						console.error(x)
					}
				}
			}

			function p(Z = Date.now(), k = Date.now()) {
				return (k - Z) / 1e3
			}
			var E = n("../react/app/components/DeepLink/constants.ts"),
				T = n("../react/common/hooks/useCachedState.ts"),
				h = n("../react/common/hooks/usePrevious.ts");

			function C(Z) {
				for (var k = 1; k < arguments.length; k++) {
					var x = arguments[k] != null ? Object(arguments[k]) : {},
						te = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(x).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(x, Y).enumerable
					})), te.forEach(function(Y) {
						D(Z, Y, x[Y])
					})
				}
				return Z
			}

			function D(Z, k, x) {
				return k = b(k), k in Z ? Object.defineProperty(Z, k, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[k] = x, Z
			}

			function b(Z) {
				var k = _(Z, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function _(Z, k) {
				if (typeof Z != "object" || Z === null) return Z;
				var x = Z[Symbol.toPrimitive];
				if (x !== void 0) {
					var te = x.call(Z, k || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(Z)
			}
			var z = ({
					children: Z
				}) => {
					const k = (0, o.TZ)(),
						x = (0, c.useHistory)(),
						te = (0, h.Z)(x.location.pathname),
						Y = (0, o.p4)(l.dd),
						[re, ee] = (0, e.useState)(!0),
						[pe, W] = (0, T.j)(void 0, {
							key: E.Fj
						}),
						[U, w] = (0, T.j)(void 0, {
							key: E.O5
						}),
						[K, q] = (0, T.j)(void 0, {
							key: E.s$
						}),
						ae = (0, s.$8)();
					let N = new URLSearchParams(x.location.search);
					const P = (0, g.mL)(x.location.pathname, N);
					let O = null,
						I = null;
					if (N.has(E.Tc) && N.delete(E.Tc), N.get(E.BV)) O = N.get(E.BV), x.location.hash && (I = x.location.hash);
					else if (pe) {
						const X = new URLSearchParams(pe);
						X.get(E.BV) && (O = X.get(E.BV), N = X)
					} else P && (N.set(E.BV, P), O = P);
					if (O && E._h.test(O)) {
						const X = N.getAll(E.Kt),
							J = JSON.stringify(X);
						X.length && J !== K && q(J), N.has(E.Tc) && N.delete(E.Tc), N.delete(E.Kt)
					}!ae && pe === void 0 && O && W(N.toString());
					const G = async () => {
						try {
							if ((0, g.I3)(O) && ae && !Y) {
								pe && W(void 0), k.dispatch((0, f.r4)()), ee(!0), O && O !== U && w(O);
								const X = await (0, g.py)(O, ee, k, x, te, new i(O, P ? `${x.location.pathname}${x.location.search}` : void 0));
								N.delete(E.BV);
								const J = N.toString();
								x.replace(C({}, x.location, {
									pathname: X,
									search: J
								}, I ? {
									hash: I
								} : {})), k.dispatch((0, f.WF)())
							}
						} catch (X) {
							k.dispatch((0, f.WF)()), console.error(X)
						} finally {
							ee(!1)
						}
					};
					return (0, e.useEffect)(() => {
						G()
					}, [x.location.pathname, x.location.search, Y]), (re || (0, g.I3)(O)) && ae ? null : Z
				},
				j = n("../react/app/components/DeepLink/reducer.ts"),
				$ = z
		},
		"../react/app/components/DeepLink/reducer.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				E: function() {
					return g
				},
				r: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				c = n("../react/app/components/DeepLink/actions.ts");
			const g = null,
				s = o().from({
					lastAction: g,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function f(l = s, d) {
				if (d.type === c.MF.RESOLVING_COMPLETE) return s;
				if (d.type === c.MF.RESOLVING_START) return l.set("isResolving", !0);
				if (l.isResolving) {
					if (d.type === c.MF.RESOLVING_COMPLETE) return l.set("isResolving", !1);
					if (d.type === c.MF.SET_FILTERED_ACCOUNT_IDS) return l.set("filteredAccountIds", d.accountIds);
					if (d.type === c.MF.DELETE_FILTERED_ACCOUNT_IDS) return l.set("filteredAccountIds", void 0);
					{
						let v = l;
						try {
							v = l.set("lastAction", d)
						} catch {
							v = l.set("lastAction", {
								type: d.type
							})
						}
						return v
					}
				} else return l
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
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
			const e = g => g.deepLink.lastAction,
				o = g => g.deepLink.isResolving,
				c = g => g.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				I3: function() {
					return u
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
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const g = C => C.replace(c.default.endsWithSlash, ""),
				s = C => {
					const D = g(C).split("/").slice(3);
					return D.length ? "/" + D.join("/") : ""
				},
				f = C => {
					const D = g(C).split("/").slice(2);
					return D.length ? `apps/${D.join("/")}` : "apps"
				};
			var l = n("../react/app/components/DeepLink/selectors.ts"),
				d = n("../react/app/components/DeepLink/constants.ts"),
				v = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const r = C => (0, v.Lb)(C) && (C.split(".").length > 1 || (0, t.v5)(C)),
				a = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				u = C => typeof C == "string" && C.startsWith("/"),
				i = (C, D) => b => new Promise((_, S) => {
					D.start();
					const z = C.subscribe(() => {
						const j = (0, l.yI)(C.getState());
						j === o.E ? (D.cancel(), z(), S("DeepLink: waitForAction out of context.")) : b(j) && (D.finish(j.type), z(), _(j))
					})
				}),
				p = (C, D, b) => (_, S) => new Promise((z, j) => {
					b.start();
					const $ = D.location.pathname;
					_ = new URL(_, window.location.href).pathname, $ !== _ && (b.cancel(), j(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${_}", but on "${$}". You need to redirect to "${_}", and unblockRouter in your Resolver, before you use this function.`));
					const Z = C.subscribe(() => {
						const k = (0, l.yI)(C.getState()),
							x = D.location.pathname,
							Y = new URLSearchParams(D.location.search).get(d.BV);
						(x !== _ || !!Y) && (b.cancel(), Z(), j(`DeepLink: waitForPageAction user navigated away from "${_}" to "${x}${Y?D.location.search:""}"`)), k === o.E ? (b.cancel(), Z(), j("DeepLink: waitForPageAction out of context.")) : S(k) && (b.finish(k.type), Z(), z(k))
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
			async function T(C, D, b, _, S, z) {
				z.start();
				const j = E(C),
					Z = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(60091), n.e(94923), n.e(8756)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					k = {};
				let x = "";
				for (const [te, Y] of j.entries())
					if (Y.type === "static") x = [x, Y.value].join("/");
					else if (Y.type === "dynamic" && a.is(Y.value) && Y.value in Z) {
					z.resolverStart(Y.value);
					const re = await Z[Y.value]({
						deepLink: C,
						blockRouter: () => D(!0),
						unblockRouter: () => D(!1),
						routerHistory: _,
						resolvedValues: k,
						store: b,
						referringRoute: S,
						uri: {
							currentPartIdx: te,
							parts: j
						},
						waitForAction: i(b, z.createUserActionTracker(Y.value)),
						waitForPageAction: p(b, _, z.createUserActionTracker(Y.value))
					});
					z.resolverDone(Y.value), x = [x, re].join("/"), k[Y.value] = re
				} else throw z.cancel(), new Error(`DeepLink: Resolver with name '${Y.value}' is not supported.`);
				return z.done(), x
			}

			function h(C, D) {
				const b = ":account",
					_ = ":zone",
					S = D.get("zone");
				if (S) return D.delete("zone"), `/${b}/${_}/${S}`;
				const z = D.get("account");
				if (z) return D.delete("account"), `/${b}/${z}`;
				if (C === "/overview") return `/${b}/${_}`;
				if (C === "/apps") return `/${b}/${_}/${f(C)}`;
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
		"../react/app/components/ErrorBoundary.tsx": function(H, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				g = n("../react/app/components/SomethingWrong.jsx"),
				s = n("../utils/sentry/lastSentEventId.ts"),
				f = n("../react/utils/zaraz.ts"),
				l = n("../react/utils/url.ts");
			const d = ({
				sentryTag: v,
				children: t
			}) => o().createElement(c.SV, {
				beforeCapture: r => {
					v && r.setTag("errorBoundary", v), f.tg === null || f.tg === void 0 || f.tg.track("page-error", {
						page: (0, l.Fl)(window.location.pathname)
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
					const u = s.e.getEventId() || a;
					return o().createElement(g.Z, {
						type: "page",
						error: r,
						eventId: u
					})
				}
			}, t);
			y.Z = d
		},
		"../react/app/components/Footer.tsx": function(H, y, n) {
			"use strict";
			n.d(y, {
				Z: function() {
					return P
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				g = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = n("../node_modules/@cloudflare/elements/es/index.js"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				d = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				v = n.n(d),
				t = n("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				r = n("../react/common/components/Apple/utils.tsx"),
				a = n("../react/utils/translator.tsx"),
				u = n("../../../../node_modules/moment/moment.js"),
				i = n.n(u);
			const p = () => {
					const O = i()().format("YYYY"),
						I = G => {
							v().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: G
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
				E = (0, f.createComponent)(({
					theme: O,
					marginTop: I
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: I
				})),
				T = (0, f.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				h = (0, f.createComponent)(({
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
				C = (0, f.createComponent)(({
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
				D = (0, f.createComponent)(({
					theme: O
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: O.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				b = (0, f.createComponent)(({
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
				_ = (0, f.createStyledComponent)(({
					theme: O
				}) => ({
					textDecoration: "none",
					color: O.colors.white,
					"&:hover": {
						color: O.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var S = p,
				z = n("../react/common/hooks/useGate.ts"),
				j = n("../react/pages/welcome/routes.ts"),
				$ = n("../react/utils/cookiePreferences.ts"),
				Z = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				x = () => {
					const [O, I] = (0, e.useState)(!1), G = (0, $.wV)(), X = () => {
						I(!0)
					}, J = () => {
						I(!1)
					}, ge = G && G === "US" ? (0, a.ZP)("footer.cpra_cta.privacy_choices") : (0, a.ZP)("footer.cpra_cta.cookie_preferences"), Le = {
						background: "transparent",
						borderRadius: "none",
						color: O ? (0, l.Yc)() ? "#ee730a" : "#003681" : (0, l.Yc)() ? "#4693ff" : "#0051c3",
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
						onMouseEnter: X,
						onMouseLeave: J
					}, o().createElement(s.Ei, {
						height: 15,
						src: Z,
						mr: 2,
						alt: ge
					}), ge)
				};

			function te() {
				return te = Object.assign ? Object.assign.bind() : function(O) {
					for (var I = 1; I < arguments.length; I++) {
						var G = arguments[I];
						for (var X in G) Object.prototype.hasOwnProperty.call(G, X) && (O[X] = G[X])
					}
					return O
				}, te.apply(this, arguments)
			}

			function Y(O, I) {
				if (O == null) return {};
				var G = re(O, I),
					X, J;
				if (Object.getOwnPropertySymbols) {
					var ge = Object.getOwnPropertySymbols(O);
					for (J = 0; J < ge.length; J++) X = ge[J], !(I.indexOf(X) >= 0) && (!Object.prototype.propertyIsEnumerable.call(O, X) || (G[X] = O[X]))
				}
				return G
			}

			function re(O, I) {
				if (O == null) return {};
				var G = {},
					X = Object.keys(O),
					J, ge;
				for (ge = 0; ge < X.length; ge++) J = X[ge], !(I.indexOf(J) >= 0) && (G[J] = O[J]);
				return G
			}
			const ee = 24,
				pe = (0, f.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,l.Yc)()?l.rS.colors.orange[6]:l.rS.colors.blue[4]}`
					}
				}), s.A),
				W = (0, f.createStyledComponent)(({
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
					} = O, G = Y(O, ["onClick"]);
					return o().createElement(pe, te({
						onClick: X => {
							v().sendEvent("navigate footer nav", {
								destinationPage: G.href
							}), I && I(X)
						}
					}, G))
				},
				w = O => {
					let {
						children: I,
						target: G,
						rel: X
					} = O, J = Y(O, ["children", "target", "rel"]);
					return o().createElement(U, te({
						target: G || "_blank",
						rel: X || "noopener noreferrer"
					}, J), I, o().createElement(g.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				},
				K = O => {
					let {
						children: I,
						target: G,
						rel: X
					} = O, J = Y(O, ["children", "target", "rel"]);
					return o().createElement(W, te({
						target: G || "_blank",
						rel: X || "noopener noreferrer"
					}, J), I)
				},
				q = (0, f.createStyledComponent)(({
					theme: O
				}) => ({
					flex: 1,
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					flexWrap: "wrap",
					marginLeft: 0,
					"& > li": {
						fontSize: O.fontSizes[2],
						display: "contents",
						"&:not(:first-child)": {
							"&::before": {
								content: "'|'",
								color: O.colors.gray[4],
								marginTop: (0, t.tq)() ? "8px" : 0,
								paddingLeft: "8px",
								paddingRight: "8px"
							}
						},
						"& > button": {
							marginTop: (0, t.tq)() ? "8px" : 0
						}
					}
				}), s.Ul),
				ae = (0, f.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, t.tq)() ? "column" : "row",
					justifyContent: "space-between"
				}), s.ZC);
			var P = () => {
				var O, I;
				const G = [j.d.root.pattern].some(Oe => (0, c.matchPath)(location.pathname, {
						path: Oe
					})),
					X = location.pathname === "/sign-up",
					J = (0, z.Z)("dx-footer-simplify") === "experiment",
					ge = (0, z.Z)("prg-signup-next-steps-experiment") === "experiment" && X;
				if ((0, r.PP)()) return o().createElement(S, null);
				if (G) return null;
				const Le = new Date().getFullYear();
				return o().createElement(s.$_, te({
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: J ? "19px" : 4,
					px: [4, 3, 3],
					mt: ge ? 0 : "auto"
				}, ge && J && {
					height: "10vh"
				}), J ? o().createElement(ae, null, o().createElement(q, null, o().createElement(s.Li, null, o().createElement(K, {
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
				}, (0, a.ZP)("footer.privacy_policy"))), o().createElement(s.Li, null, o().createElement(x, null))), o().createElement(s.ZC, {
					display: "flex",
					justifyContent: "center",
					mt: (0, t.tq)() ? 2 : 0
				}, o().createElement(s.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", Le, " Cloudflare, Inc."))) : o().createElement(s.ZC, {
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
					height: `${ee}px`
				}, o().createElement(g.J, {
					type: "twitter",
					size: ee
				})), o().createElement(U, {
					"aria-label": (0, a.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${ee}px`
				}, o().createElement(g.J, {
					type: "facebook",
					size: ee
				})), o().createElement(U, {
					"aria-label": (0, a.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${ee}px`
				}, o().createElement(g.J, {
					type: "linkedin",
					size: ee
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
				}, (0, a.ZP)("footer.privacy_policy"))))), o().createElement(x, null)))
			}
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(H, y, n) {
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
				c = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				g = n("../node_modules/@cloudflare/elements/es/index.js"),
				s = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = n("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				d = n("../react/common/components/AccessControl/index.js"),
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
				u = [{
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
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = n.n(p);

			function T(N) {
				for (var P = 1; P < arguments.length; P++) {
					var O = arguments[P] != null ? Object(arguments[P]) : {},
						I = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(O).filter(function(G) {
						return Object.getOwnPropertyDescriptor(O, G).enumerable
					})), I.forEach(function(G) {
						h(N, G, O[G])
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
					I, G;
				if (Object.getOwnPropertySymbols) {
					var X = Object.getOwnPropertySymbols(N);
					for (G = 0; G < X.length; G++) I = X[G], !(P.indexOf(I) >= 0) && (!Object.prototype.propertyIsEnumerable.call(N, I) || (O[I] = N[I]))
				}
				return O
			}

			function S(N, P) {
				if (N == null) return {};
				var O = {},
					I = Object.keys(N),
					G, X;
				for (X = 0; X < I.length; X++) G = I[X], !(P.indexOf(G) >= 0) && (O[G] = N[G]);
				return O
			}
			const z = N => {
					let {
						title: P,
						trackingEvent: O,
						icon: I,
						url: G,
						description: X,
						disabled: J
					} = N, ge = _(N, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(j, b({
						to: !J && G || "#",
						"aria-disabled": J,
						onClick: () => {
							E().sendEvent(O, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, ge), o().createElement(g.ZC, {
						display: "flex"
					}, o().createElement(c.J, {
						type: I,
						size: 24,
						mr: 2
					}), o().createElement(g.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(g.ZC, {
						fontSize: 3
					}, o().createElement(r.cC, P)), o().createElement(g.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(r.cC, X)))))
				},
				j = (0, f.createStyledComponent)(({
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
			var $ = z,
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

			function x(N) {
				for (var P = 1; P < arguments.length; P++) {
					var O = arguments[P] != null ? Object(arguments[P]) : {},
						I = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(O).filter(function(G) {
						return Object.getOwnPropertyDescriptor(O, G).enumerable
					})), I.forEach(function(G) {
						te(N, G, O[G])
					})
				}
				return N
			}

			function te(N, P, O) {
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

			function ee(N, P) {
				if (N == null) return {};
				var O = pe(N, P),
					I, G;
				if (Object.getOwnPropertySymbols) {
					var X = Object.getOwnPropertySymbols(N);
					for (G = 0; G < X.length; G++) I = X[G], !(P.indexOf(I) >= 0) && (!Object.prototype.propertyIsEnumerable.call(N, I) || (O[I] = N[I]))
				}
				return O
			}

			function pe(N, P) {
				if (N == null) return {};
				var O = {},
					I = Object.keys(N),
					G, X;
				for (X = 0; X < I.length; X++) G = I[X], !(P.indexOf(G) >= 0) && (O[G] = N[G]);
				return O
			}
			const W = "GLOBAL_ADD_DROPDOWN",
				U = ({
					disableProducts: N
				}) => {
					const P = (0, Z.Z)("dashon-18-reduced-add-button-on-mobile") === "experiment" && (0, l.tq)();
					return o().createElement(w, {
						role: "group",
						"data-testid": W
					}, o().createElement(t.Lt, {
						trigger: o().createElement(K, null, o().createElement(c.J, {
							label: "plus",
							type: "plus"
						}), !P && o().createElement(o().Fragment, null, o().createElement(r.cC, {
							id: "common.add"
						}), " ", o().createElement(c.J, {
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
						}, u.map(O => {
							const I = O || {},
								{
									disableOn: G,
									permissionCheck: X
								} = I,
								J = ee(I, ["disableOn", "permissionCheck"]),
								ge = G && N[G],
								Le = x({}, J, {
									disabled: ge
								});
							return X ? o().createElement(d.Z, {
								key: O.title.id,
								edit: X
							}, ({
								isEditable: Oe
							}) => Oe && o().createElement($, Le)) : o().createElement($, k({
								key: O.url
							}, Le))
						}))
					}))
				},
				w = (0, f.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				K = (0, f.createStyledComponent)(({
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
				}), g.zx);
			var q = U,
				ae = q
		},
		"../react/app/components/LoadingSuspense.tsx": function(H, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				g = n("../node_modules/@cloudflare/elements/es/index.js"),
				s = n("../react/utils/translator.tsx"),
				f = n("../react/app/components/ErrorStatus.tsx"),
				l = n("../react/common/components/EmptyPage.jsx"),
				d = n("../react/common/hooks/suspenseHelpers.ts");

			function v(a) {
				const [u, i] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const p = window.setTimeout(() => i(!0), a);
					return () => window.clearTimeout(p)
				}, []), u
			}
			const t = ({
					loadingTimeout: a = 1e3,
					stillLoadingTimeout: u = 9e3
				}) => {
					const i = v(a),
						p = v(u);
					if ((0, d.nW)(), !i && !p) return o().createElement(l.Z, null);
					const E = p ? o().createElement(s.cC, {
						id: "common.still_loading"
					}) : i ? o().createElement(s.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(f.Z, {
						size: 5
					}, o().createElement(g.ZC, {
						mr: 3
					}, o().createElement(c.g, {
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
		"../react/app/components/Persistence/api.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				C8: function() {
					return d
				},
				d3: function() {
					return l
				},
				dr: function() {
					return s
				},
				lt: function() {
					return f
				},
				m6: function() {
					return t
				},
				n: function() {
					return v
				},
				yl: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const c = "/persistence/user",
				g = async () => {
					try {
						return await (await e.get(c, {
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
				}, f = async (r, a) => {
					try {
						return await (await e.post(`${c}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: r,
								accountId: a
							}),
							hideErrorAlert: !0
						})).body
					} catch (u) {
						return console.error(u), []
					}
				}, l = async (r, a) => {
					try {
						return await e.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: a
							}),
							hideErrorAlert: !0
						}), !0
					} catch (u) {
						return console.error(u), !1
					}
				}, d = async r => {
					try {
						return await (await e.post(c, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (a) {
						console.error(a)
					}
				}, v = async r => {
					try {
						return await (await e.post(`${c}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, t = async r => {
					try {
						return await (await e.post(`${c}/viewed-changes`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						throw console.error(a), a
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(H, y, n) {
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
				c = n("../react/app/redux/index.ts"),
				g = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = n.n(g),
				f = n("../react/utils/bootstrap.ts"),
				l = n("../react/common/selectors/zoneSelectors.ts"),
				d = n("../react/app/components/Persistence/api.ts");
			const v = 10;

			function t(U) {
				for (var w = 1; w < arguments.length; w++) {
					var K = arguments[w] != null ? Object(arguments[w]) : {},
						q = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(K).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(K, ae).enumerable
					})), q.forEach(function(ae) {
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
				var w = u(U, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function u(U, w) {
				if (typeof U != "object" || U === null) return U;
				var K = U[Symbol.toPrimitive];
				if (K !== void 0) {
					var q = K.call(U, w || "default");
					if (typeof q != "object") return q;
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
				p = t({}, i, {
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
				E = (0, e.createContext)(p),
				T = E.Consumer,
				h = ({
					children: U,
					onDarkModeChangeCb: w
				}) => {
					const [K, q] = (0, e.useState)(i), [ae, N] = (0, e.useState)(p.isLoading), P = (0, f.$8)(), O = (0, c.p4)(X => (0, l.wH)(X));
					(0, e.useEffect)(() => {
						P ? (0, d.yl)().then(X => {
							X && (q(X), w(X.darkMode))
						}).finally(() => N(!1)) : N(!1)
					}, [P]);
					const I = (X, J) => !!K.favorites.find(ge => ge.type === "zone" && ge.name === X && ge.accountId === J),
						G = X => K.favorites.filter(ge => ge.type === "zone" && ge.accountId === X).length < v;
					return o().createElement(E.Provider, {
						value: t({}, K, {
							isLoading: ae,
							actions: {
								canAccountStarZone: G,
								isZoneStarred: I,
								starZone: async (X, J) => {
									var ge;
									const Le = !I(X, J),
										Oe = G(J);
									if (Le && !Oe) {
										console.log("can not star zone - account is at limit");
										return
									}
									const F = await (0, d.lt)(X, J);
									s().sendEvent("click star zone", {
										isStarring: Le,
										totalStarredZones: F.filter(se => se.accountId === J && se.type === "zone").length,
										totalZones: O == null || (ge = O.paginationData) === null || ge === void 0 ? void 0 : ge.info.total_count
									}), q(t({}, K, {
										favorites: F
									}))
								},
								setDarkMode: async X => {
									const J = await (0, d.C8)(X);
									q(J), w(J.darkMode)
								},
								logRouteVisited: async X => {
									var J;
									const ge = await (0, d.n)(X);
									q((J = ge) !== null && J !== void 0 ? J : t({}, K))
								},
								viewChange: async X => {
									const J = await (0, d.m6)(X);
									q(t({}, K, {
										viewedChanges: J
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
						for (var q in K) Object.prototype.hasOwnProperty.call(K, q) && (U[q] = K[q])
					}
					return U
				}, _.apply(this, arguments)
			}

			function S(U, w) {
				if (U == null) return {};
				var K = z(U, w),
					q, ae;
				if (Object.getOwnPropertySymbols) {
					var N = Object.getOwnPropertySymbols(U);
					for (ae = 0; ae < N.length; ae++) q = N[ae], !(w.indexOf(q) >= 0) && (!Object.prototype.propertyIsEnumerable.call(U, q) || (K[q] = U[q]))
				}
				return K
			}

			function z(U, w) {
				if (U == null) return {};
				var K = {},
					q = Object.keys(U),
					ae, N;
				for (N = 0; N < q.length; N++) ae = q[N], !(w.indexOf(ae) >= 0) && (K[ae] = U[ae]);
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
					} = U, q = S(U, ["isStarred", "size"]);
					const ae = j[(0, D.Yc)() ? "dark" : "light"];
					return o().createElement(b.J, _({
						type: w ? "star" : "star-outline",
						color: w ? ae.gold : ae.gray,
						size: K
					}, q))
				},
				k = n("../node_modules/@cloudflare/elements/es/index.js");

			function x(U) {
				for (var w = 1; w < arguments.length; w++) {
					var K = arguments[w] != null ? Object(arguments[w]) : {},
						q = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(K).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(K, ae).enumerable
					})), q.forEach(function(ae) {
						te(U, ae, K[ae])
					})
				}
				return U
			}

			function te(U, w, K) {
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
					var q = K.call(U, w || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(U)
			}
			const ee = {
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
				isDisabled: q,
				testId: ae,
				buttonText: N,
				size: P = "large"
			}, O) => {
				const I = ee[(0, D.Yc)() ? "dark" : "light"][w && !U ? "active" : "default"],
					G = x({}, P === "large" && {
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
					pr: G.paddingRight,
					gap: 1,
					pl: G.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: U || q ? "default" : "pointer",
					backgroundColor: I.bg,
					color: I.text,
					borderColor: I.border,
					onClick: K,
					opacity: q ? .5 : 1,
					disabled: q,
					fontSize: G.fontSize,
					height: G.height,
					"data-testid": ae
				}, o().createElement(Z, {
					isStarred: U ? !1 : w,
					size: G.starIconSize
				}), N)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(H, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				g = n.n(c),
				s = n("../../../common/intl/intl-react/src/index.ts"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = n("../node_modules/@cloudflare/component-button/es/index.js"),
				d = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				v = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				r = n.n(t),
				a = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				u = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				i = n("../react/app/components/Footer.tsx"),
				p = n("../react/utils/url.ts");

			function E(x) {
				for (var te = 1; te < arguments.length; te++) {
					var Y = arguments[te] != null ? Object(arguments[te]) : {},
						re = Object.keys(Y);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(Y).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(Y, ee).enumerable
					})), re.forEach(function(ee) {
						T(x, ee, Y[ee])
					})
				}
				return x
			}

			function T(x, te, Y) {
				return te = h(te), te in x ? Object.defineProperty(x, te, {
					value: Y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[te] = Y, x
			}

			function h(x) {
				var te = C(x, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function C(x, te) {
				if (typeof x != "object" || x === null) return x;
				var Y = x[Symbol.toPrimitive];
				if (Y !== void 0) {
					var re = Y.call(x, te || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(x)
			}
			const D = (0, f.createComponent)(({
					type: x
				}) => ({
					height: x !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				b = (0, f.createComponent)(({
					theme: x,
					margin: te,
					size: Y = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: x.colors.gray[3],
					height: te ? "auto" : "100%",
					padding: te ? 0 : x.space[Y > 1 ? Y - 2 : 0],
					margin: te,
					justifyContent: "center",
					alignItems: "center"
				})),
				_ = (0, f.createComponent)(() => ({
					textAlign: "left"
				})),
				S = (0, f.createComponent)(() => ({
					textAlign: "right"
				})),
				z = (0, f.createComponent)(({
					theme: x
				}) => ({
					fontSize: x.fontSizes[6]
				})),
				j = (0, f.createComponent)(({
					theme: x
				}) => ({
					fontSize: x.fontSizes[4]
				})),
				$ = (0, f.createComponent)(({
					theme: x
				}) => ({
					fontSize: x.fontSizes[3]
				})),
				Z = (0, f.createComponent)(({
					theme: x
				}) => ({
					width: "100%",
					height: 125,
					marginTop: x.space[4],
					padding: x.space[2]
				}), "textarea");
			class k extends o().Component {
				constructor(...te) {
					super(...te);
					T(this, "state", {
						value: "",
						submitted: !1
					}), T(this, "handleTextareaChange", Y => {
						this.setState({
							value: Y.target.value
						})
					}), T(this, "sendErrToSentry10", async () => {
						try {
							var Y, re, ee, pe;
							const W = ((Y = window) === null || Y === void 0 || (re = Y.bootstrap) === null || re === void 0 || (ee = re.data) === null || ee === void 0 || (pe = ee.user) === null || pe === void 0 ? void 0 : pe.id) || "Unknown",
								U = this.props.eventId || d.eW(),
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
					}, o().createElement(b, null, o().createElement(_, null, o().createElement(z, null, re.t("error.internal_issues")), o().createElement(j, null, re.t("error.help_us")), o().createElement(Z, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: ee => this.handleTextareaChange(ee),
						disabled: this.state.submitted,
						placeholder: re.t("error.give_feedback")
					}), o().createElement(S, null, !this.state.submitted && o().createElement(l.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, re.t("common.submit")), this.state.submitted && o().createElement($, null, re.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const te = this.props.error;
					console.error(`SomethingWrong: ${te}`), v.YA("user_feedback_form_displayed", "yes"), v.YA("normalizedPath", (0, p.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: te
					} = this.props;
					return te === "fullscreen" ? o().createElement("div", null, o().createElement(a.h4, null, o().createElement(t.Link, {
						to: "/"
					}, o().createElement(u.TR, null))), this.renderContent(te), o().createElement(i.Z, null)) : this.renderContent(te)
				}
			}
			k.propTypes = {
				type: g().oneOf(["fullscreen", "page"]),
				error: g().oneOfType([g().string, g().object]),
				eventId: g().string
			}, y.Z = k
		},
		"../react/app/redux/index.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				TZ: function() {
					return c
				},
				UM: function() {
					return s
				},
				ZS: function() {
					return g
				},
				p4: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e);
			const c = () => (0, e.useStore)(),
				g = () => c().getState(),
				s = () => (0, e.useDispatch)(),
				f = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(H, y, n) {
			"use strict";
			n.d(y, {
				P1: function() {
					return v
				},
				jQ: function() {
					return l
				},
				qR: function() {
					return t
				},
				uc: function() {
					return d
				}
			});
			var e = n("../react/pages/home/alerts/config.tsx"),
				o = n("../react/pages/workers/entityTypes.ts"),
				c = n("../react/pages/email/types.ts"),
				g = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				s = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				f = n.n(s);
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
				d = r => r.entities,
				v = (...r) => (0, g.P1)(l, d, ...r),
				t = (0, g.QB)(l)
		},
		"../react/app/redux/utils.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				F: function() {
					return c
				},
				_: function() {
					return o
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const o = g => (s, f, l) => (0, e.SC)(s, f, l, {
					hideErrorAlert: !0
				}).catch(g),
				c = g => s => {
					if (s.status === g) return s;
					throw s
				}
		},
		"../react/common/actionTypes.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Cm: function() {
					return f
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return l
				},
				Li: function() {
					return v
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
					return g
				},
				lV: function() {
					return s
				},
				s1: function() {
					return d
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				c = "MODAL_OPEN",
				g = "MODAL_CLOSE",
				s = "TOGGLE_ON",
				f = "TOGGLE_OFF",
				l = "SET_ACTIVE",
				d = "CLEAR_ACTIVE",
				v = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(a) {
				return a.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", a.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", a.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", a.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", a.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", a.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", a.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", a.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", a.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", a
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				AX: function() {
					return a
				},
				YT: function() {
					return v
				},
				ct: function() {
					return l
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

			function c(u) {
				for (var i = 1; i < arguments.length; i++) {
					var p = arguments[i] != null ? Object(arguments[i]) : {},
						E = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(p).filter(function(T) {
						return Object.getOwnPropertyDescriptor(p, T).enumerable
					})), E.forEach(function(T) {
						g(u, T, p[T])
					})
				}
				return u
			}

			function g(u, i, p) {
				return i = s(i), i in u ? Object.defineProperty(u, i, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[i] = p, u
			}

			function s(u) {
				var i = f(u, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function f(u, i) {
				if (typeof u != "object" || u === null) return u;
				var p = u[Symbol.toPrimitive];
				if (p !== void 0) {
					var E = p.call(u, i || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(u)
			}
			const l = u => {
					const i = u.payload.map(p => c({}, p, {
						membershipId: p.id,
						id: p.account.id
					}));
					return c({}, u, {
						payload: i
					})
				},
				d = u => {
					const i = l(u);
					return Array.isArray(i.payload) ? c({}, u, {
						payload: i.payload[0]
					}) : c({}, u, {
						payload: null
					})
				},
				v = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", l),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...u) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: u
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", d)
		},
		"../react/common/actions/modalActions.ts": function(H, y, n) {
			"use strict";
			n.r(y), n.d(y, {
				closeModal: function() {
					return g
				},
				openModal: function() {
					return c
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function c(s, f, l = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: s,
						props: f
					},
					options: l
				}
			}

			function g(s) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: s
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				IH: function() {
					return s
				},
				Vp: function() {
					return f
				},
				ZK: function() {
					return d
				},
				um: function() {
					return l
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

			function c(t) {
				return {
					type: e.Cz,
					notificationId: t
				}
			}
			let g = 0;

			function s(t, r, a = {}) {
				return a = a || {},
					function(u) {
						let i = g++,
							p = {
								id: i,
								type: t,
								message: r,
								delay: a.delay,
								persist: a.persist === void 0 ? !1 : a.persist,
								closable: a.closable === void 0 ? !0 : a.closable,
								onClose() {
									u(c(i)), a.onClose && a.onClose.apply(null, arguments)
								}
							};
						u(o(p))
					}
			}

			function f(t, r) {
				return s("success", t, r)
			}

			function l(t, r) {
				return s("info", t, r)
			}

			function d(t, r) {
				return s("warning", t, r)
			}

			function v(t, r) {
				return s("error", t, r)
			}
		},
		"../react/common/actions/userActions.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				BT: function() {
					return l
				},
				Ut: function() {
					return T
				},
				V_: function() {
					return h
				},
				Y9: function() {
					return p
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

			function c(b) {
				for (var _ = 1; _ < arguments.length; _++) {
					var S = arguments[_] != null ? Object(arguments[_]) : {},
						z = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(S).filter(function(j) {
						return Object.getOwnPropertyDescriptor(S, j).enumerable
					})), z.forEach(function(j) {
						g(b, j, S[j])
					})
				}
				return b
			}

			function g(b, _, S) {
				return _ = s(_), _ in b ? Object.defineProperty(b, _, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[_] = S, b
			}

			function s(b) {
				var _ = f(b, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function f(b, _) {
				if (typeof b != "object" || b === null) return b;
				var S = b[Symbol.toPrimitive];
				if (S !== void 0) {
					var z = S.call(b, _ || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(b)
			}
			const l = (0, e.C)("user").get`/user`,
				d = (0, e.C)("user").patch`/user`,
				v = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				u = (0, e.C)("user").delete`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/email`;

			function p(...b) {
				return i(...b)
			}
			const E = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				T = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(b => c({}, b, {
					body: c({}, b.body, {
						result: {}
					})
				}))),
				h = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				C = (0, e.C)("userDetails").get`/user/details`,
				D = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(H, y, n) {
			"use strict";
			n.d(y, {
				a: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e),
				c = n("../react/common/selectors/accountSelectors.ts");
			const g = f => {
					if (typeof f != "string") throw new Error("invalid Param Type provided");
					const l = f.slice(1).split(":");
					if (l.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: l[0],
						value: l[1]
					}
				},
				s = (f, l) => {
					const {
						resourceId: d,
						accountId: v,
						legacyPermission: t
					} = l;
					let {
						read: r,
						edit: a
					} = l;
					const u = {};
					t && (a = `#${t}:edit`, r = `#${t}:read`);
					const i = d || v;
					if (r) {
						const p = Array.isArray(r) ? r : [r];
						u.isReadable = p.some(E => {
							const T = g(E);
							return (0, c.DT)(f, i, h => !!(h[T.key] && h[T.key][T.value]))
						})
					}
					if (a) {
						const p = Array.isArray(a) ? a : [a];
						u.isEditable = p.some(E => {
							const T = g(E);
							return (0, c.DT)(f, i, h => !!(h[T.key] && h[T.key][T.value]))
						})
					}
					return u
				};
			y.Z = (0, e.connect)(s)
		},
		"../react/common/components/AccessControl/index.js": function(H, y, n) {
			"use strict";
			var e = n("../../../../node_modules/prop-types/index.js"),
				o = n.n(e),
				c = n("../react/app/HoCs/withEntities.tsx"),
				g = n("../react/common/components/AccessControl/SAAConnect.js");

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var u = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(u).filter(function(p) {
						return Object.getOwnPropertyDescriptor(u, p).enumerable
					})), i.forEach(function(p) {
						f(r, p, u[p])
					})
				}
				return r
			}

			function f(r, a, u) {
				return a = l(a), a in r ? Object.defineProperty(r, a, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = u, r
			}

			function l(r) {
				var a = d(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function d(r, a) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var i = u.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}

			function v(r) {
				const u = ["isReadable", "isEditable"].reduce((i, p) => r.hasOwnProperty(p) ? s({}, i, {
					[p]: r[p]
				}) : i, {});
				return r.children(u)
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
			const t = (0, c.Z)((0, g.Z)(v));
			t.displayName = "AccessControl", y.Z = t
		},
		"../react/common/components/Apple/utils.tsx": function(H, y, n) {
			"use strict";
			n.d(y, {
				PP: function() {
					return r
				},
				RJ: function() {
					return l
				},
				tz: function() {
					return a
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				g = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				s = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const f = () => d.test(window.location.pathname) || c.E.has(g.Qq),
				l = () => c.E.get(g.Qq),
				d = /^\/login\/apple(\/)?/,
				t = [d, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let u = !1;
					t.forEach(p => {
						if (p.test(window.location.pathname)) {
							u = !0;
							return
						}
					});
					const i = f() && u;
					return i && (0, s.C8)(s.LF.OFF), i
				},
				a = u => {
					u && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let i = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					u && (i = i + `&jwt=${u}`), window.location.href = i
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(H, y, n) {
			"use strict";
			n.d(y, {
				oG: function() {
					return u
				},
				sN: function() {
					return l.sN
				},
				v2: function() {
					return l.v2
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../node_modules/@cloudflare/component-button/es/index.js"),
				g = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = n("../../../common/intl/intl-react/src/index.ts"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = n("../react/common/components/Dropdown/index.tsx"),
				d = n("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function v() {
				return v = Object.assign ? Object.assign.bind() : function(i) {
					for (var p = 1; p < arguments.length; p++) {
						var E = arguments[p];
						for (var T in E) Object.prototype.hasOwnProperty.call(E, T) && (i[T] = E[T])
					}
					return i
				}, v.apply(this, arguments)
			}

			function t(i, p) {
				if (i == null) return {};
				var E = r(i, p),
					T, h;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(i);
					for (h = 0; h < C.length; h++) T = C[h], !(p.indexOf(T) >= 0) && (!Object.prototype.propertyIsEnumerable.call(i, T) || (E[T] = i[T]))
				}
				return E
			}

			function r(i, p) {
				if (i == null) return {};
				var E = {},
					T = Object.keys(i),
					h, C;
				for (C = 0; C < T.length; C++) h = T[C], !(p.indexOf(h) >= 0) && (E[h] = i[h]);
				return E
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
					color: (0, d.Yc)() ? i.colors.text : void 0
				},
				"& button:hover": {
					color: (0, d.Yc)() ? i.colors.text : void 0
				}
			}));

			function u(i) {
				let {
					menu: p,
					containerProps: E,
					disabled: T,
					disabledDropdown: h = T
				} = i, C = t(i, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: D
				} = (0, s.QT)();
				return o().createElement(a, v({}, E, {
					role: "group"
				}), o().createElement(c.zx, v({}, C, {
					disabled: T
				})), o().createElement(l.Lt, {
					trigger: o().createElement(c.zx, {
						type: C.type,
						"aria-haspopup": "menu",
						disabled: h
					}, o().createElement(g.J, {
						type: "caret-down",
						label: D("common.more"),
						size: 12
					})),
					menu: p
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(H, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				g = n.n(c),
				s = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const f = ({
				children: l
			}) => o().createElement(s.xu, {
				height: 411
			}, l);
			f.propTypes = {
				children: g().node
			}, y.Z = f
		},
		"../react/common/components/ModalManager.tsx": function(H, y, n) {
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
				c = n("webpack/sharing/consume/default/react-redux/react-redux");
			const g = p => p.application.modals;
			var s = n("../react/common/actions/modalActions.ts"),
				f = n("../../../../node_modules/swr/core/dist/index.mjs"),
				l = n("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function d() {
				return d = Object.assign ? Object.assign.bind() : function(p) {
					for (var E = 1; E < arguments.length; E++) {
						var T = arguments[E];
						for (var h in T) Object.prototype.hasOwnProperty.call(T, h) && (p[h] = T[h])
					}
					return p
				}, d.apply(this, arguments)
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
						}, o().createElement(f.J$, {
							value: l.ZP
						}, o().createElement(h, d({}, C, {
							isOpen: !0,
							closeModal: b
						}))))
					}))
				}
			}

			function r() {
				const p = o().useContext(v);
				if (!p) throw new Error("useModalContext must be used within a ModalContext");
				return p
			}

			function a() {
				const p = (0, c.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...E) {
						return p(s.openModal(...E))
					}, [p]),
					closeModal: (0, e.useCallback)(function(...E) {
						return p(s.closeModal(...E))
					}, [p])
				}
			}
			var i = (0, c.connect)(p => ({
				modals: g(p)
			}), s)(t)
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				BQ: function() {
					return t
				},
				Gn: function() {
					return d
				},
				JR: function() {
					return v
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return f
				},
				ZI: function() {
					return s
				},
				if: function() {
					return o
				},
				q6: function() {
					return c
				},
				w_: function() {
					return g
				},
				zl: function() {
					return l
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				c = "date-from",
				g = "date-to",
				s = "from",
				f = "to",
				l = "all",
				d = {
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
		"../react/common/constants/analytics/botScoreSrc.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				EG: function() {
					return c
				},
				Me: function() {
					return s
				},
				sk: function() {
					return g
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/index.js"),
				o = n("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let c = function(f) {
				return f.NOT_COMPUTED = "not_computed", f.MACHINE_LEARNING = "machine_learning", f.HEURISTICS = "heuristics", f.BEHAVIORAL_ANALYSIS = "behavioral_analysis", f.JS_FINGERPRINTING = "js_fingerprinting", f.VERIFIED_BOT = "verified_bot", f.CLOUDFLARE_SERVICE = "cloudflare_service", f
			}({});
			const g = {
					[c.NOT_COMPUTED]: "Not Computed",
					[c.MACHINE_LEARNING]: "Machine Learning",
					[c.HEURISTICS]: "Heuristics",
					[c.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[c.JS_FINGERPRINTING]: "JS Fingerprinting",
					[c.VERIFIED_BOT]: "Verified Bot",
					[c.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				s = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [c.NOT_COMPUTED, c.MACHINE_LEARNING, c.HEURISTICS, c.BEHAVIORAL_ANALYSIS, c.JS_FINGERPRINTING, c.VERIFIED_BOT, c.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Gq: function() {
					return g
				},
				g$: function() {
					return c
				},
				WX: function() {
					return e
				},
				E0: function() {
					return v
				},
				Hw: function() {
					return f
				},
				Ed: function() {
					return s
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return u
				},
				hQ: function() {
					return l
				},
				SP: function() {
					return d
				}
			});
			let e = function(i) {
				return i.page_rules = "page_rules", i.automatic_platform_optimization = "automatic_platform_optimization", i
			}({});
			const o = "page_rules",
				c = "automatic_platform_optimization",
				g = {
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
				f = {
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
				d = {
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
			const u = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				FP: function() {
					return e
				},
				Nl: function() {
					return s
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
				g = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				s = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Dk: function() {
					return u
				},
				Dy: function() {
					return i
				},
				E_: function() {
					return f
				},
				K$: function() {
					return h
				},
				Lv: function() {
					return p
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
					return l
				},
				p6: function() {
					return d
				},
				q0: function() {
					return g
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
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const g = "healthy",
				s = "degraded",
				f = "critical",
				l = "unknown",
				d = "not-monitored",
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
				u = () => {
					const C = c.Z.get(a);
					if (!!C) return r[C]
				},
				i = ["gov"],
				p = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				E = "banner-notification-interactions",
				T = null;
			let h = function(C) {
				return C.SUPER_ADMIN = "Super Administrator - All Privileges", C.ADMIN = "Administrator", C.ADMIN_READ_ONLY = "Administrator Read Only", C
			}({})
		},
		"../react/common/constants/index.ts": function(H, y, n) {
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
		"../react/common/hooks/suspenseHelpers.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				bt: function() {
					return l
				},
				nW: function() {
					return s
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const g = "suspenseComplete";

			function s() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(g))
				}, [])
			}

			function f(d) {
				(0, c.OR)(g, () => {
					window.setTimeout(d, 0)
				}, {
					target: window
				})
			}

			function l(...d) {
				const [v, t] = d;
				o().useLayoutEffect(v, t), f(v)
			}
		},
		"../react/common/hooks/useAccountId.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				F: function() {
					return s
				}
			});
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/accountSelectors.ts"),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				g = n.n(c);

			function s() {
				var f;
				const {
					accountId: l
				} = (0, c.useParams)(), d = (0, e.p4)(o.D0);
				if (l === void 0 && !d) throw new Error("Account ID not found in URL params");
				return (f = l) !== null && f !== void 0 ? f : d == null ? void 0 : d.id
			}
		},
		"../react/common/hooks/useCachedState.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				j: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function g(s, {
				key: f,
				cache: l = c.E
			} = {}) {
				const d = f !== void 0 && l.get(f),
					[v, t] = (0, e.useState)(d || s);
				return [v, a => {
					t(u => (a instanceof Function && (a = a(u)), f !== void 0 && l.set(f, a), a))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(H, y, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(c) {
				return (0, e.qf)(c)
			}
			y.Z = o
		},
		"../react/common/hooks/usePrevious.ts": function(H, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function c(g) {
				const s = (0, e.useRef)(g);
				return (0, e.useEffect)(() => {
					s.current = g
				}, [g]), s.current
			}
			y.Z = c
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(H, y, n) {
			"use strict";
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/entitlementsSelectors.ts");

			function c(g) {
				return (0, e.p4)(s => (0, o.rV)(s, g))
			}
			y.Z = c
		},
		"../react/common/middleware/sparrow/errors.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Uh: function() {
					return s
				},
				ez: function() {
					return g
				},
				oV: function() {
					return f
				}
			});

			function e(l, d, v) {
				return d = o(d), d in l ? Object.defineProperty(l, d, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[d] = v, l
			}

			function o(l) {
				var d = c(l, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function c(l, d) {
				if (typeof l != "object" || l === null) return l;
				var v = l[Symbol.toPrimitive];
				if (v !== void 0) {
					var t = v.call(l, d || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(l)
			}
			class g extends Error {
				constructor(d, v) {
					super(v);
					e(this, "eventName", void 0), this.eventName = d, this.name = "SparrowValidationError"
				}
			}
			class s extends g {
				constructor(d) {
					super(d, `Event not allowed: "${d}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class f extends g {
				constructor(d, v) {
					super(d, `Found invalid properties on event: "${d}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = v
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				AC: function() {
					return Qe
				},
				Au: function() {
					return B
				},
				B: function() {
					return Ve
				},
				B3: function() {
					return Ue
				},
				BG: function() {
					return z
				},
				Bp: function() {
					return qe
				},
				D0: function() {
					return D
				},
				DT: function() {
					return G
				},
				EL: function() {
					return N
				},
				GE: function() {
					return Ie
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
					return tt
				},
				Ou: function() {
					return w
				},
				Py: function() {
					return Xe
				},
				QI: function() {
					return Ce
				},
				RO: function() {
					return Ne
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
					return me
				},
				Xo: function() {
					return nt
				},
				Xu: function() {
					return pe
				},
				Yi: function() {
					return at
				},
				Yj: function() {
					return O
				},
				Zu: function() {
					return P
				},
				bC: function() {
					return ge
				},
				f8: function() {
					return Y
				},
				hI: function() {
					return We
				},
				hN: function() {
					return $
				},
				hX: function() {
					return Ge
				},
				iq: function() {
					return He
				},
				nE: function() {
					return j
				},
				oD: function() {
					return q
				},
				oI: function() {
					return te
				},
				oJ: function() {
					return ot
				},
				tM: function() {
					return K
				},
				uF: function() {
					return W
				},
				ut: function() {
					return Ke
				},
				vU: function() {
					return _e
				},
				wQ: function() {
					return F
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				o = n("../../../../node_modules/lodash/get.js"),
				c = n.n(o),
				g = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				s = n.n(g),
				f = n("../../../../node_modules/reselect/lib/index.js"),
				l = n("../../../../node_modules/moment/moment.js"),
				d = n.n(l),
				v = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				r = n("../react/common/selectors/userSelectors.ts"),
				a = n("../react/common/selectors/entitlementsSelectors.ts"),
				u = n("../react/app/components/DeepLink/selectors.ts"),
				i = n("../react/common/constants/index.ts"),
				p = n("../react/common/utils/hasRole.ts");

			function E(M) {
				for (var ne = 1; ne < arguments.length; ne++) {
					var de = arguments[ne] != null ? Object(arguments[ne]) : {},
						ye = Object.keys(de);
					typeof Object.getOwnPropertySymbols == "function" && ye.push.apply(ye, Object.getOwnPropertySymbols(de).filter(function(Pe) {
						return Object.getOwnPropertyDescriptor(de, Pe).enumerable
					})), ye.forEach(function(Pe) {
						T(M, Pe, de[Pe])
					})
				}
				return M
			}

			function T(M, ne, de) {
				return ne = h(ne), ne in M ? Object.defineProperty(M, ne, {
					value: de,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[ne] = de, M
			}

			function h(M) {
				var ne = C(M, "string");
				return typeof ne == "symbol" ? ne : String(ne)
			}

			function C(M, ne) {
				if (typeof M != "object" || M === null) return M;
				var de = M[Symbol.toPrimitive];
				if (de !== void 0) {
					var ye = de.call(M, ne || "default");
					if (typeof ye != "object") return ye;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ne === "string" ? String : Number)(M)
			}
			const D = M => {
					const ne = W(M);
					return ne == null ? void 0 : ne.account
				},
				b = M => {
					const ne = (0, r.PR)(M);
					if (ne) {
						const de = ne.id;
						return M.accountAccess[de] || {}
					}
					return {}
				},
				_ = M => M.accountsDetailed,
				S = (0, t.P1)("accountsDetailed", _),
				z = M => M.memberships,
				j = (0, f.P1)((0, t.P1)("memberships", z), u.U, (M, ne) => !!ne && !!M ? M.filter(de => ne.includes(de.id)) : M),
				$ = M => M.accountFlags && M.accountFlags.data,
				Z = M => M.accountFlags,
				k = (M, ne, de) => {
					const ye = $(M);
					return !ye || !ye[ne] ? null : ye[ne][de]
				},
				x = M => M.accountFlags.isRequesting,
				te = (M, ...ne) => c()(M, ["accountFlagsChanges", "data", ...ne]),
				Y = M => M.accountFlagsChanges.isRequesting,
				re = (0, f.P1)($, Z, (M, ne) => ({
					data: M,
					meta: ne
				})),
				ee = (M, ne, de) => !!(isEnterpriseSSEnabledSelector(M) && k(M, ne, de)),
				pe = M => M.membership,
				W = (0, t.P1)("membership", pe),
				U = (0, f.P1)(W, pe, (M, ne) => ({
					data: M,
					meta: ne
				})),
				w = M => {
					const {
						roles: ne = []
					} = W(M) || {};
					return Boolean(ne.find(de => de === "Super Administrator - All Privileges" || de === "Billing"))
				},
				K = M => {
					const ne = [i.K$.SUPER_ADMIN];
					return (0, p.n)(M, ne)
				},
				q = M => {
					const ne = b(M),
						de = Me.getMemberships(M) ? s().asMutable(Me.getMemberships(M)) : [];
					if (!!de) return s().from(de.map(ye => E({}, ye, {
						lastSeen: ne[ye.account.id] ? ne[ye.account.id].lastSeen : null
					})).sort((ye, Pe) => ye.lastSeen && Pe.lastSeen ? Pe.lastSeen - ye.lastSeen : 0))
				},
				ae = M => M.filteredMemberships,
				N = (0, t.P1)("filteredMemberships", ae),
				P = (0, f.P1)(W, M => M == null ? void 0 : M.permissions),
				O = (0, f.P1)(P, M => (0, e.Z)(ne => {
					var de;
					return (de = M == null ? void 0 : M[ne]) !== null && de !== void 0 ? de : {
						read: !1,
						edit: !1
					}
				})),
				I = (0, f.P1)(W, M => M == null ? void 0 : M.policies),
				G = (M, ne, de) => {
					let ye = Me.getMembership(M);
					if (!ye) {
						const Pe = Me.getMemberships(M);
						if (!Pe || !ne) return !1;
						ye = Pe.find(Re => Re.account.id === ne)
					}
					if (!ye || !de) return !1;
					try {
						return de(ye.permissions)
					} catch {
						return !1
					}
				},
				X = M => {
					var ne, de;
					return (ne = (de = D(M)) === null || de === void 0 ? void 0 : de.meta.has_pro_zones) !== null && ne !== void 0 ? ne : !1
				},
				J = M => {
					var ne, de;
					return (ne = (de = D(M)) === null || de === void 0 ? void 0 : de.meta.has_business_zones) !== null && ne !== void 0 ? ne : !1
				},
				ge = M => J(M) || X(M),
				Le = (M, ne) => {
					const de = Oe(M, ne);
					return !!de && !!de.enabled
				},
				Oe = (M, ne) => {
					const de = Me.getMembership(M),
						ye = de && de.account;
					return ye && ye.legacy_flags && ye.legacy_flags[ne]
				},
				F = M => Le(M, "custom_pages"),
				se = M => !!M && M["webhooks.webhooks.enabled"],
				Te = M => k(M, "bots", "enabled"),
				Ze = M => k(M, "billing", "annual_subscriptions_enable"),
				Ne = M => M ? Boolean(k(M, "ConstellationAI", "v2_ui")) : !1,
				Ge = M => M ? Boolean(k(M, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Ve = M => M ? Boolean(k(M, "AIgateway", "enabled")) : !1,
				Ye = M => Oe(M, "enterprise_zone_quota"),
				st = M => {
					const ne = Ye(M);
					return !ne || !ne.available ? -1 : ne.available
				},
				He = M => M.accountMembers,
				Ue = (0, t.P1)("accountMembers", He),
				tt = M => M.accountMember && M.accountMember.isRequesting,
				$e = M => M.accountRoles,
				Qe = (0, t.P1)("accountRoles", $e),
				Xe = (M, ne) => {
					const de = Me.getMemberships(M),
						ye = de && de.find(et => et.account.id === ne);
					if (ye) return ye.account.name.replace(" Account", " account");
					const Pe = Me.getMembership(M),
						Re = Pe && Pe.account;
					return Re && Re.id === ne ? Re.name : null
				},
				Ke = (M, ne) => {
					const de = Me.getMemberships(M),
						ye = de && de.find(et => et.account.id === ne);
					if (ye) return ye.account.settings.access_approval_expiry;
					const Pe = Me.getMembership(M),
						Re = Pe && Pe.account;
					return Re && Re.id === ne ? Re.settings.access_approval_expiry : null
				},
				nt = (M, ne) => {
					const de = Ke(M, ne);
					return de ? d().utc(de).isAfter() : !1
				},
				Je = (M, ne, de) => {
					const ye = Ke(M, ne);
					let Pe = ye ? d().utc(ye) : null;
					return !Pe || !Pe.isAfter() ? "" : Pe && Pe.year() === 3e3 ? de("account.access_approval.card_expiration_forever") : de("account.access_approval.card_expiration_text", {
						expiryTimestamp: Pe.local().format(v.U.DateTime)
					})
				},
				ot = M => M && M.member && M.member.edit,
				B = (M, ne) => {
					const de = Me.getMembership(M),
						ye = de && de.account;
					return ye ? ye.id !== ne : !1
				},
				Q = M => M.dpa,
				fe = (0, t.P1)("dpa", Q),
				De = M => M.webhook,
				ie = M => M.webhooks,
				le = (0, t.P1)("webhook", ie),
				me = M => M.accountLegoContract,
				Ee = (0, t.P1)("accountLegoContract", me),
				Ce = M => {
					const ne = Ee(M);
					return (ne == null ? void 0 : ne.lego_state) ? ne.lego_state : ""
				},
				Be = M => Ce(M) === "signed",
				Ie = M => me(M).isRequesting,
				_e = M => {
					const ne = Ee(M);
					return ne && ne.subscription_type ? ne.subscription_type : ""
				},
				we = M => _e(M) !== "",
				Me = {
					getMembership: W,
					getMemberships: j,
					getFilteredMemberships: N,
					getAccountMembers: Ue,
					getAccountRoles: Qe
				},
				qe = M => M.accountSingle,
				at = (0, t.P1)("accountSingle", qe),
				We = M => {
					const ne = [i.K$.SUPER_ADMIN, i.K$.ADMIN];
					return (0, p.n)(M, ne)
				}
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				$f: function() {
					return i
				},
				AD: function() {
					return s
				},
				BF: function() {
					return u
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
					return Oe
				},
				Ms: function() {
					return S
				},
				Q2: function() {
					return f
				},
				Td: function() {
					return h
				},
				Z: function() {
					return G
				},
				a: function() {
					return C
				},
				a5: function() {
					return J
				},
				du: function() {
					return d
				},
				ec: function() {
					return Y
				},
				f: function() {
					return Le
				},
				hL: function() {
					return X
				},
				ji: function() {
					return O
				},
				jo: function() {
					return z
				},
				k4: function() {
					return ge
				},
				lI: function() {
					return g
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
					return l
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

			function o(F, se) {
				return F && F[se]
			}
			const c = F => !g(F).isRequesting;

			function g(F) {
				return F.entitlements.zone
			}

			function s(F) {
				return g(F).data
			}
			const f = F => {
				var se, Te;
				return ((se = g(F).paginationData) === null || se === void 0 || (Te = se.options) === null || Te === void 0 ? void 0 : Te.editedDate) || {}
			};

			function l(F, se) {
				const Te = s(F);
				return Te ? o(Te, se) : void 0
			}
			const d = (F, se) => l(F, se) === !0;

			function v(F) {
				return F.entitlements.account
			}

			function t(F) {
				return v(F).data
			}
			const r = F => {
				var se, Te;
				return ((se = v(F).paginationData) === null || se === void 0 || (Te = se.options) === null || Te === void 0 ? void 0 : Te.editedDate) || {}
			};

			function a(F) {
				return !v(F).isRequesting
			}

			function u(F, se) {
				const Te = t(F);
				return Te ? o(Te, se) : void 0
			}

			function i(F, se) {
				return u(F, se) === !0
			}

			function p(F, se) {
				return se.every(Te => i(F, Te))
			}

			function E(F) {
				return i(F, "contract.customer_enabled")
			}

			function T(F) {
				return i(F, "contract.self_service_allowed")
			}

			function h(F) {
				return i(F, "billing.partners_managed")
			}
			const C = F => E(F) && T(F),
				D = F => i(F, "enterprise.ecp_allowed");

			function b(F) {
				return _(F) || i(F, "argo.allow_smart_routing") || i(F, "argo.allow_tiered_caching") || i(F, "rate_limiting.enabled") || i(F, "ctm.enabled") || i(F, "workers.enabled") || i(F, "workers.kv_store.enabled") || i(F, "stream.enabled")
			}
			const _ = F => d(F, "argo.allow_smart_routing") || d(F, "argo.allow_tiered_caching"),
				S = F => i(F, "zone.cname_setup_allowed") || i(F, "zone.partial_setup_allowed") || d(F, "zone.partial_setup_allowed"),
				z = F => i(F, "argo.allow_smart_routing") || d(F, "argo.allow_smart_routing"),
				j = F => i(F, "argo.allow_tiered_caching") || d(F, "argo.allow_tiered_caching"),
				$ = F => z(F) || j(F),
				Z = F => i(F, "ctm.enabled"),
				k = F => {
					const se = u(F, "ctm.load_balancers");
					return typeof se == "number" ? se : 0
				},
				x = F => {
					const se = u(F, "ctm.pools");
					return typeof se == "number" ? se : 0
				},
				te = F => {
					const se = u(F, "ctm.origins");
					return typeof se == "number" ? se : 0
				},
				Y = F => i(F, "workers.enabled"),
				re = F => i(F, "stream.enabled"),
				ee = F => {
					const se = u(F, "access.users_allowed");
					return typeof se == "number" ? se : 0
				},
				pe = F => ee(F) > 0,
				W = F => {
					const se = l(F, "dedicated_certificates");
					return typeof se == "number" ? se : 0
				},
				U = F => W(F) > 0,
				w = F => {
					const se = l(F, "rate_limiting.max_rules");
					return typeof se == "number" ? se : 0
				},
				K = F => i(F, "rate_limiting.enabled"),
				q = F => {
					const se = l(F, "page_rules");
					return typeof se == "number" ? se : 0
				},
				ae = F => q(F) > 0,
				N = F => {
					const se = u(F, "dns_firewall.max_clusters_allowed");
					return typeof se == "number" ? se : 0
				},
				P = F => N(F) > 0,
				O = F => d(F, "zone.advanced_certificate_manager") || i(F, "zone.advanced_certificate_manager"),
				I = F => l(F, "authoritative_dns.proxy_record_allowed") === !1 || u(F, "authoritative_dns.proxy_record_allowed") === !1,
				G = F => i(F, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				X = F => l(F, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				J = F => {
					const se = l(F, "authoritative_dns.min_record_ttl_allowed");
					return typeof se == "number" && se > 1 ? se : 60
				},
				ge = F => i(F, "foundation_dns.advanced_nameservers_allowed") || d(F, "foundation_dns.advanced_nameservers_allowed"),
				Le = (F, se) => ((0, e.el)(window.location.pathname) ? l : u)(F, se),
				Oe = F => i(F, "authoritative_dns.multi_provider_allowed") || d(F, "authoritative_dns.multi_provider_allowed")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				r: function() {
					return g
				},
				v: function() {
					return s
				}
			});
			var e = n("../react/utils/i18n.ts"),
				o = n("../../../common/intl/intl-types/src/index.ts"),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const g = f => {
				const l = f.userCommPreferences.data;
				if (l == null ? void 0 : l["language-locale"]) return c.Z.set(e.ly, l["language-locale"]), l["language-locale"];
				{
					c.Z.has(e.ly) || c.Z.set(e.ly, e.ZW);
					const d = c.Z.get(e.ly);
					return s(d) ? d : e.ZW
				}
			};

			function s(f) {
				const l = Object.keys(o.Q).find(d => o.Q[d] === f);
				return !!f && typeof f == "string" && l != null && (0, e.S8)(l)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(H, y, n) {
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
					return c
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
					return l
				},
				mV: function() {
					return p
				},
				vW: function() {
					return f
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const o = b => b.user,
				c = (0, e.P1)("user", o),
				g = b => {
					var _;
					return (_ = c(b)) === null || _ === void 0 ? void 0 : _.email.endsWith("@cloudflare.com")
				},
				s = b => {
					var _;
					return !!((_ = c(b)) === null || _ === void 0 ? void 0 : _.id)
				},
				f = b => {
					const _ = c(b);
					if (!!_) return _.first_name && _.last_name ? `${_.first_name} ${_.last_name}` : _.email
				},
				l = b => {
					const _ = c(b);
					return _ && _.has_enterprise_zones
				},
				d = b => b.userCommPreferences,
				v = (0, e.P1)("userCommPreferences", d),
				t = b => {
					const _ = c(b);
					return _ && _.email_verified
				},
				r = b => {
					const _ = v(b);
					return _ && _.preferences.marketing_communication
				},
				a = b => b.userDetails,
				u = (0, e.P1)("userDetails", a),
				i = b => {
					const _ = u(b);
					return _ && _["2FA-RECOVERY"] === "scheduled"
				},
				p = b => {
					const _ = u(b);
					return _ && _["2FA-RECOVERY"] === "interrupted"
				},
				E = b => {
					const _ = u(b);
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
		"../react/common/selectors/zoneSelectors.ts": function(H, y, n) {
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
					return Ge
				},
				Le: function() {
					return se
				},
				Ly: function() {
					return P
				},
				M3: function() {
					return Ue
				},
				N8: function() {
					return He
				},
				NY: function() {
					return X
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
					return J
				},
				Tr: function() {
					return Ne
				},
				U: function() {
					return h
				},
				Ug: function() {
					return b
				},
				V6: function() {
					return tt
				},
				WR: function() {
					return ot
				},
				Xg: function() {
					return p
				},
				ZB: function() {
					return F
				},
				_y: function() {
					return q
				},
				cU: function() {
					return Ve
				},
				cg: function() {
					return ge
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
					return z
				},
				kf: function() {
					return $e
				},
				ko: function() {
					return W
				},
				mK: function() {
					return Ke
				},
				nA: function() {
					return i
				},
				oY: function() {
					return Z
				},
				qM: function() {
					return Te
				},
				rq: function() {
					return G
				},
				tS: function() {
					return _
				},
				tU: function() {
					return te
				},
				vB: function() {
					return nt
				},
				vM: function() {
					return x
				},
				wH: function() {
					return D
				},
				wn: function() {
					return Oe
				},
				xU: function() {
					return Y
				},
				xw: function() {
					return Ze
				},
				z5: function() {
					return w
				},
				zO: function() {
					return Ye
				},
				zW: function() {
					return Qe
				},
				zh: function() {
					return ee
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				o = n("../react/app/redux/normalizer.js"),
				c = n("../../../../node_modules/lodash/get.js"),
				g = n.n(c),
				s = n("../../../../node_modules/moment/moment.js"),
				f = n.n(s),
				l = n("../react/common/constants/billing/index.ts");

			function d(B) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var fe = arguments[Q] != null ? Object(arguments[Q]) : {},
						De = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && De.push.apply(De, Object.getOwnPropertySymbols(fe).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(fe, ie).enumerable
					})), De.forEach(function(ie) {
						v(B, ie, fe[ie])
					})
				}
				return B
			}

			function v(B, Q, fe) {
				return Q = t(Q), Q in B ? Object.defineProperty(B, Q, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[Q] = fe, B
			}

			function t(B) {
				var Q = r(B, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function r(B, Q) {
				if (typeof B != "object" || B === null) return B;
				var fe = B[Symbol.toPrimitive];
				if (fe !== void 0) {
					var De = fe.call(B, Q || "default");
					if (typeof De != "object") return De;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(B)
			}
			const a = (0, o.P1)("zone", B => B.zone),
				u = B => {
					var Q;
					return (Q = B.zoneVersioning) === null || Q === void 0 ? void 0 : Q.zoneVersionSelector
				},
				i = (0, e.P1)(a, u, (B, Q) => {
					var fe, De, ie;
					let le;
					if (Array.isArray(B) && B.length === 1 ? le = B[0] : B && !Array.isArray(B) && (le = B), !le) return;
					const me = !!(Q == null ? void 0 : Q.enabled);
					return d({}, le, le.name && {
						name: me ? Q.rootZoneName : le.name
					}, {
						versioning: {
							enabled: me,
							isRoot: !((fe = le.name) === null || fe === void 0 ? void 0 : fe.endsWith(".config.cfdata.org")),
							version: me ? Q.selectedVersion : 0,
							rootZoneId: me ? Q.rootZoneId : (De = (ie = le) === null || ie === void 0 ? void 0 : ie.id) !== null && De !== void 0 ? De : ""
						}
					})
				}),
				p = B => B.zone,
				E = (0, e.P1)(i, p, (B, Q) => ({
					data: B,
					meta: Q
				})),
				T = B => {
					var Q, fe;
					return (Q = (fe = i(B)) === null || fe === void 0 ? void 0 : fe.id) !== null && Q !== void 0 ? Q : ""
				},
				h = B => B.zones,
				C = B => B.zonesRoot,
				D = B => B.zonesAccount,
				b = (0, o.P1)("zones", h),
				_ = (0, o.P1)("zonesRoot", C),
				S = (0, o.P1)("zonesAccount", D);

			function z(B) {
				const Q = i(B);
				return Q ? Q.created_on : null
			}

			function j(B, Q, fe) {
				const De = z(B);
				if (!De) return;
				const ie = f().duration(Q, fe),
					le = new Date(De),
					me = new Date(new Date().getTime() - ie.asMilliseconds());
				return le.getTime() > me.getTime()
			}

			function $(B) {
				const Q = i(B);
				return Q ? Q.status : null
			}

			function Z(B) {
				const Q = i(B);
				return Q ? Q.type : null
			}

			function k(B) {
				return B.plan_pending ? B.plan_pending : B.plan
			}

			function x(B) {
				const Q = i(B);
				if (!Q) return;
				const fe = k(Q);
				return fe && fe.legacy_id
			}

			function te(B, Q) {
				const fe = k(B);
				return !!fe && l.Gs.indexOf(fe.legacy_id) >= l.Gs.indexOf(Q)
			}

			function Y(B) {
				return !!B && B.status === "initializing"
			}

			function re(B) {
				return !!B && B.status === "pending"
			}

			function ee(B) {
				return !!B && B.status === "active"
			}

			function pe(B, Q) {
				if (!B) return !1;
				const fe = k(B);
				return !!fe && fe.legacy_id === Q
			}

			function W(B) {
				return pe(B, "enterprise")
			}
			const U = B => W(i(B));

			function w(B) {
				return pe(B, "business")
			}
			const K = B => w(i(B));

			function q(B) {
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

			function I(B, Q) {
				const fe = O(Q);
				return !!fe && fe.type === "user" && fe.id === B.id
			}

			function G(B) {
				const Q = i(B);
				return !!Q && Q.type === "partial"
			}

			function X(B) {
				const Q = i(B);
				return !!Q && Q.type === "secondary"
			}

			function J(B) {
				const Q = i(B);
				return Q && G(B) && Q.host
			}
			const ge = B => {
					var Q;
					const fe = i(B);
					return !!(fe == null ? void 0 : fe.host) && !!((Q = fe.plan) === null || Q === void 0 ? void 0 : Q.externally_managed)
				},
				Le = B => {
					const Q = b(B);
					return Q && Q.some(W)
				},
				Oe = (B, Q) => {
					const fe = i(B);
					return fe && fe.betas ? fe.betas.includes(Q) : !1
				},
				F = (B, ...Q) => g()(B, ["zoneFlags", "data", ...Q]),
				se = (B, ...Q) => g()(B, ["accountFlags", "data", ...Q]),
				Te = B => B.accountFlags.isRequesting,
				Ze = B => B.zoneFlags.isRequesting,
				Ne = (B, ...Q) => g()(B, ["zoneFlagsChanges", "data", ...Q]),
				Ge = B => B.zoneFlagsChanges.isRequesting,
				Ve = B => B.zoneFlags && B.zoneFlags.data,
				Ye = B => B.zoneFlags,
				st = (0, e.P1)(Ve, Ye, (B, Q) => ({
					data: B,
					meta: Q
				})),
				He = (0, o.P1)("abuseUrls", B => B.overview.abuseUrls),
				Ue = B => {
					const Q = i(B);
					return Q ? `/${Q.account.id}/${Q.name}` : null
				},
				tt = B => B.zoneMarketingCampaigns,
				$e = B => B.overview.zoneBlocks.data,
				Qe = B => B.overview.zoneBlocks.isRequesting,
				Xe = B => B.overview.zoneBlocks.hasData,
				Ke = B => {
					var Q, fe;
					return (B == null || (Q = B.overview.zoneBlocks) === null || Q === void 0 || (fe = Q.paginationData) === null || fe === void 0 ? void 0 : fe.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				nt = B => B.overview.zoneBlocksReview.isRequesting,
				Je = B => B.overview.zoneHold,
				ot = (0, o.P1)("zoneHold", Je)
		},
		"../react/common/utils/formatDate.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			y.Z = (o, c, g = !1) => (0, e.p6)(o, c, g)
		},
		"../react/common/utils/hasRole.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				n: function() {
					return o
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts");
			const o = (c, g) => {
				const {
					roles: s = []
				} = (0, e.uF)(c) || {};
				return g.some(f => s.includes(f))
			}
		},
		"../react/common/utils/isGuards.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Q$: function() {
					return c
				},
				t: function() {
					return f
				},
				v5: function() {
					return g
				},
				zE: function() {
					return s
				}
			});
			var e = n("../react/common/constants/index.ts"),
				o = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const c = l => l ? ["page", "per_page", "count", "total_count"].every(v => v in l && l[v]) : !1,
				g = (l = "") => e.Dy.includes(l.toLowerCase()),
				s = l => l !== null && typeof l == "object" && "name" in l && "size" in l && "type" in l && typeof l.slice == "function",
				f = l => (0, o.Z)(l)
		},
		"../react/common/utils/useQueryCache.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				o: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/react-query/es/index.js");

			function o(l) {
				for (var d = 1; d < arguments.length; d++) {
					var v = arguments[d] != null ? Object(arguments[d]) : {},
						t = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && t.push.apply(t, Object.getOwnPropertySymbols(v).filter(function(r) {
						return Object.getOwnPropertyDescriptor(v, r).enumerable
					})), t.forEach(function(r) {
						c(l, r, v[r])
					})
				}
				return l
			}

			function c(l, d, v) {
				return d = g(d), d in l ? Object.defineProperty(l, d, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[d] = v, l
			}

			function g(l) {
				var d = s(l, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function s(l, d) {
				if (typeof l != "object" || l === null) return l;
				var v = l[Symbol.toPrimitive];
				if (v !== void 0) {
					var t = v.call(l, d || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(l)
			}
			const f = l => {
				const d = (0, e.useQueryClient)(),
					v = h => {
						var C;
						return d.getQueriesData((C = h) !== null && C !== void 0 ? C : l)
					},
					t = h => {
						var C;
						return d.getQueryData((C = h) !== null && C !== void 0 ? C : l)
					},
					r = h => {
						var C;
						return d.getQueriesData({
							queryKey: (C = h) !== null && C !== void 0 ? C : l,
							stale: !0
						})
					},
					a = (h, C) => {
						var D;
						d.setQueryData((D = C) !== null && D !== void 0 ? D : l, h)
					},
					u = async (h, C) => {
						var D, b;
						await d.invalidateQueries((D = h) !== null && D !== void 0 ? D : l, o({
							refetchActive: !1
						}, (b = C) !== null && b !== void 0 ? b : {}))
					}, i = async (h, C) => {
						const D = h || (b => {
							var _;
							return (b == null || (_ = b.queryKey) === null || _ === void 0 ? void 0 : _[0]) === l
						});
						await d.invalidateQueries(o({
							predicate: D,
							refetchActive: !1,
							refetchInactive: !1
						}, C))
					};
				return {
					cancelData: async () => {
						await d.cancelQueries(l)
					},
					invalidate: u,
					setData: a,
					getDataStale: r,
					getData: v,
					prefetchQuery: (h, C) => {
						var D;
						return d.prefetchQuery((D = C) !== null && D !== void 0 ? D : l, h)
					},
					getQueryData: t,
					predicateInvalidate: i,
					batchInvalidate: async ({
						queryKeysToInvalidate: h = [],
						queryKeysToPredicateInvalidate: C = [],
						refetchActive: D = !1,
						refetchInactive: b = !1
					}) => {
						const _ = h.map(z => u(z)),
							S = C.map(z => i(j => {
								var $;
								return (j == null || ($ = j.queryKey) === null || $ === void 0 ? void 0 : $[0]) === z
							}, {
								refetchActive: D,
								refetchInactive: b
							}));
						await Promise.all([..._, ...S])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(H, y, n) {
			"use strict";
			n.d(y, {
				K2: function() {
					return o
				},
				Lb: function() {
					return c
				},
				XI: function() {
					return g
				},
				bK: function() {
					return d
				},
				jk: function() {
					return l
				},
				wb: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = v => /^https?:\/\/(.*)/.test(v),
				c = v => e.default.hostname.test(v),
				g = v => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(v),
				s = v => /^[!-~]+$/.test(v),
				f = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				l = v => f.test(v),
				d = v => !!v && !!v.length && /^[ -~]+$/.test(v)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(H, y, n) {
			"use strict";
			n.d(y, {
				DZ: function() {
					return g
				},
				GA: function() {
					return v
				},
				hT: function() {
					return f
				},
				p6: function() {
					return c
				},
				qc: function() {
					return s
				},
				w9: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e);
			const c = a => o().utc(a).format("YYYY-MM-DD"),
				g = a => o().utc(a).format(),
				s = a => o().utc(a).startOf("minute").format(),
				f = a => new Date(a),
				l = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				d = a => {
					const u = a / 60 / 60 / 1e3;
					return l[Object.keys(l).sort((i, p) => p - i).find(i => u >= i)]
				},
				v = (a, u = i => i.avg && i.avg.sampleInterval ? i.avg.sampleInterval : 1) => a.length === 0 ? 1 : a.reduce((i, p) => i + u(p), 0) / a.length,
				t = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = a => t[a]
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Jz: function() {
					return v
				},
				OK: function() {
					return s
				},
				_Y: function() {
					return l
				},
				fD: function() {
					return r
				},
				h_: function() {
					return d
				},
				w6: function() {
					return a
				},
				yc: function() {
					return t
				}
			});

			function e(i) {
				for (var p = 1; p < arguments.length; p++) {
					var E = arguments[p] != null ? Object(arguments[p]) : {},
						T = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(E).filter(function(h) {
						return Object.getOwnPropertyDescriptor(E, h).enumerable
					})), T.forEach(function(h) {
						o(i, h, E[h])
					})
				}
				return i
			}

			function o(i, p, E) {
				return p = c(p), p in i ? Object.defineProperty(i, p, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[p] = E, i
			}

			function c(i) {
				var p = g(i, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function g(i, p) {
				if (typeof i != "object" || i === null) return i;
				var E = i[Symbol.toPrimitive];
				if (E !== void 0) {
					var T = E.call(i, p || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(i)
			}
			let s = function(i) {
					return i.Sending = "sending", i.Success = "success", i.Failed = "failed", i.Latent = "latent", i
				}({}),
				f = function(i) {
					return i[i.Success = 200] = "Success", i[i.BadRequest = 400] = "BadRequest", i
				}({});
			const l = {
					status: s.Latent,
					statusCode: void 0
				},
				d = {
					status: s.Sending
				},
				v = {
					status: s.Success,
					statusCode: f.Success
				},
				t = {
					status: s.Failed,
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
					}, l),
					installsList: e({
						value: []
					}, l),
					categoriesList: e({
						value: []
					}, l),
					recommendedAppsList: e({
						value: []
					}, l),
					metadata: e({
						value: null
					}, l),
					app: e({
						value: null
					}, l),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, l)
				},
				u = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Dl: function() {
					return a
				},
				Ux: function() {
					return u
				},
				cz: function() {
					return p
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
				c = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function g(h) {
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
				return C = f(C), C in h ? Object.defineProperty(h, C, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[C] = D, h
			}

			function f(h) {
				var C = l(h, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function l(h, C) {
				if (typeof h != "object" || h === null) return h;
				var D = h[Symbol.toPrimitive];
				if (D !== void 0) {
					var b = D.call(h, C || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(h)
			}
			const d = h => h.test(window.location.hostname),
				v = () => d(c.j9),
				t = () => d(MARKETPLACE_LOCAL_URL_REGEXP),
				r = (h, C) => {
					const D = random(0, 1) ? -1 : 1;
					return h.points === C.points || h.points >= APP_POINTS_THRESHOLD && C.points >= APP_POINTS_THRESHOLD ? D : h.points < 0 || C.points < 0 || h.points >= APP_POINTS_THRESHOLD || C.points >= APP_POINTS_THRESHOLD ? C.points - h.points : D
				},
				a = (h, C, D) => {
					const b = (0, e.Z)(C, D),
						_ = (0, e.Z)(h, D);
					return b && !(0, o.Z)(b, _)
				},
				u = {
					transformers: {
						transformAppIdsToApps: (h, C) => C.map(D => h.find(b => b.id === D)),
						addAppVersionInfo: (h, C) => g({}, C, {
							currentVersion: C.versions.find(D => D.tag === h.versionTag),
							latestVersion: C.versions.find(D => D.tag === C.infoVersion)
						}),
						addCurrentSiteInstall: (h, C) => g({}, C, {
							currentSiteInstall: h.find(D => D.appId === C.id)
						})
					}
				},
				i = (h, C, D) => g({}, h, C, D ? {
					value: D
				} : {}),
				p = h => h.map(C => C.status),
				E = h => h.apps ? h.apps : h,
				T = h => {
					let C = ["by-cloudflare"];
					return h.filter(D => !C.includes(D.id) && D.visible).sort((D, b) => D.points < b.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(H, y, n) {
			"use strict";
			n.r(y), n.d(y, {
				categorySlugTranslationKey: function() {
					return s
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return g
				},
				translations: function() {
					return c
				}
			});
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: c,
				namespace: g
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

			function s(f) {
				const l = f.replace(/-/g, "_");
				return Object.keys(o).includes(l) ? l : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				L: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/url-join/lib/url-join.js"),
				o = n.n(e),
				c = n("../../../../node_modules/lodash-es/defaults.js"),
				g = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function s(u) {
				for (var i = 1; i < arguments.length; i++) {
					var p = arguments[i] != null ? Object(arguments[i]) : {},
						E = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(p).filter(function(T) {
						return Object.getOwnPropertyDescriptor(p, T).enumerable
					})), E.forEach(function(T) {
						d(u, T, p[T])
					})
				}
				return u
			}

			function f(u, i) {
				if (u == null) return {};
				var p = l(u, i),
					E, T;
				if (Object.getOwnPropertySymbols) {
					var h = Object.getOwnPropertySymbols(u);
					for (T = 0; T < h.length; T++) E = h[T], !(i.indexOf(E) >= 0) && (!Object.prototype.propertyIsEnumerable.call(u, E) || (p[E] = u[E]))
				}
				return p
			}

			function l(u, i) {
				if (u == null) return {};
				var p = {},
					E = Object.keys(u),
					T, h;
				for (h = 0; h < E.length; h++) T = E[h], !(i.indexOf(T) >= 0) && (p[T] = u[T]);
				return p
			}

			function d(u, i, p) {
				return i = v(i), i in u ? Object.defineProperty(u, i, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[i] = p, u
			}

			function v(u) {
				var i = t(u, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function t(u, i) {
				if (typeof u != "object" || u === null) return u;
				var p = u[Symbol.toPrimitive];
				if (p !== void 0) {
					var E = p.call(u, i || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(u)
			}
			class r {
				constructor(i) {
					d(this, "token", void 0), d(this, "options", void 0), d(this, "setAuthHeader", p => {
						this.token = p
					}), this.token = "", this.options = (0, c.Z)(i, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(i = "GET", p, E = {}) {
					const {
						body: T
					} = E, h = f(E, ["body"]);
					return fetch(o()(this.options.baseUrl, p), s({
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
				async fetchJSON(i, p = {}) {
					const E = await this.request("GET", i, p);
					return this.parseJSONResponse(E)
				}
				async postJSON(i, p = {}) {
					const E = await this.request("POST", i, s({}, p, {
						headers: s({}, p.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(E)
				}
				parseJSONResponse(i) {
					return i.json()
				}
			}
			d(r, "defaults", {
				baseUrl: (0, g.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const a = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				JX: function() {
					return v
				},
				Jb: function() {
					return r
				},
				RX: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/lodash-es/upperFirst.js"),
				o = n("../../../../node_modules/lodash-es/isEmpty.js"),
				c = n("../node_modules/query-string/query-string.js"),
				g = n.n(c),
				s = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				f = n("../react/pages/apps/marketplace/requests/Requester.ts"),
				l = n("../react/pages/apps/marketplace/libraries/resource.ts");

			function* d(i, p, E, T) {
				const h = (0, e.Z)(p),
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

			function* v(i, p, E, T) {
				const h = (0, e.Z)(p),
					C = `get${h}Sending`,
					D = `get${h}Success`,
					b = `get${h}Failed`;
				try {
					yield(0, s.gz)(i[C]());
					const _ = yield(0, s.RE)(u, {
						url: E,
						data: T
					});
					return yield(0, s.gz)(i[D](_)), _
				} catch {
					yield(0, s.gz)(i[b]())
				}
			}
			const t = i => (0, o.Z)(i) ? "" : `?${c.stringify(i)}`,
				r = {
					app: new l.c({
						name: "app",
						url: (i, p) => `apps/${i}${t(p)}`
					}),
					apps: new l.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new l.c({
							name: "installs",
							url: i => `sites/${i}/installs`
						}),
						delete: new l.c({
							name: "installs",
							url: i => `installs/${i}`
						})
					},
					categories: new l.c({
						name: "categories",
						url: (i = {}) => "categories" + t(i)
					}),
					metadata: {
						get: new l.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						}),
						post: new l.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						})
					},
					ratings: {
						default: new l.c({
							name: "ratings",
							url: (i = {}) => "ratings" + t(i)
						}),
						delete: new l.c({
							name: "ratings",
							url: i => `ratings/${i}`
						})
					},
					recommendedApps: new l.c({
						name: "recommendedApps",
						url: (i = {}) => "apps/recommend" + t(i)
					}),
					developedApps: new l.c({
						name: "developedApps",
						url: i => `user/${i}/apps`
					})
				},
				a = async i => f.L.fetchJSON(i), u = async i => {
					const {
						url: p,
						data: E
					} = i;
					return f.L.postJSON(p, {
						body: E
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Nw: function() {
					return d
				},
				U4: function() {
					return l
				},
				XO: function() {
					return f
				},
				ZP: function() {
					return v
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts");

			function o(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), u.forEach(function(i) {
						c(t, i, a[i])
					})
				}
				return t
			}

			function c(t, r, a) {
				return r = g(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function g(t) {
				var r = s(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function s(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var u = a.call(t, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let f = function(t) {
					return t.SetCurrentUser = "user.set", t
				}({}),
				l = function(t) {
					return t.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", t.SetZone = "MARKETPLACE/AUTH/SET_ZONE", t.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", t.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", t.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", t.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", t.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", t.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", t.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", t.ResetState = "MARKETPLACE/AUTH/RESET_STATE", t
				}({});
			const d = {
				resetState: () => ({
					type: l.ResetState
				}),
				initSaga: t => ({
					type: l.InitSaga,
					zoneId: t
				}),
				setZone: t => ({
					type: l.SetZone,
					zone: t
				}),
				setToken: t => ({
					type: l.SetToken,
					token: t
				}),
				clearToken: () => ({
					type: l.ClearToken
				}),
				setTokenValid: t => ({
					type: l.SetTokenValid,
					isTokenValid: t
				}),
				getCurrentUserSaga: () => ({
					type: l.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: l.CurrentUserSending
				}),
				getCurrentUserSuccess: t => ({
					type: l.CurrentUserSuccess,
					user: t
				}),
				getCurrentUserFailed: () => ({
					type: l.CurrentUserFailed
				})
			};

			function v(t = e.fD, r) {
				switch (r.type) {
					case l.ResetState:
						return o({}, e.fD);
					case l.CurrentUserSending:
						return o({}, t);
					case l.CurrentUserSuccess:
						const {
							user: a
						} = r;
						return o({}, t, {
							user: a
						});
					case l.CurrentUserFailed:
						return o({}, t);
					case l.SetZone:
						const {
							zone: u
						} = r;
						return o({}, t, {
							zone: u
						});
					case l.SetToken:
						const {
							token: i
						} = r;
						return o({}, t, {
							token: i
						});
					case l.ClearToken:
						return o({}, t, {
							token: null
						});
					case l.SetTokenValid:
						const {
							isTokenValid: p
						} = r;
						return o({}, t, {
							isTokenValid: p
						});
					default:
						return t
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Nw: function() {
					return v
				},
				U4: function() {
					return d
				},
				ZP: function() {
					return t
				},
				dg: function() {
					return l
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function c(r) {
				for (var a = 1; a < arguments.length; a++) {
					var u = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(u).filter(function(p) {
						return Object.getOwnPropertyDescriptor(u, p).enumerable
					})), i.forEach(function(p) {
						g(r, p, u[p])
					})
				}
				return r
			}

			function g(r, a, u) {
				return a = s(a), a in r ? Object.defineProperty(r, a, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = u, r
			}

			function s(r) {
				var a = f(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(r, a) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var i = u.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let l = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				d = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const v = {
				resetState: () => ({
					type: d.ResetState
				}),
				zoneChangedSaga: () => ({
					type: d.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (r, a) => ({
					type: d.GetHomePageAssetsSaga,
					zoneId: r,
					currentResources: a
				}),
				getInstalledAppsAssetsSaga: r => ({
					type: d.GetInstalledAppsAssetsSaga,
					zoneId: r
				}),
				getDevelopedAppsAssetsSaga: (r, a) => ({
					type: d.GetDevelopedAppsAssetsSaga,
					userId: r,
					zoneId: a
				}),
				getDevelopedAppsSending: () => ({
					type: d.GetDevelopedAppsSending
				}),
				getDevelopedAppsSuccess: r => ({
					type: d.GetDevelopedAppsSuccess,
					developedApps: r
				}),
				getDevelopedAppsFailed: () => ({
					type: d.GetDevelopedAppsFailed
				}),
				getAppInfoAssetsSaga: (r, a, u) => ({
					type: d.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: a,
					version: u
				}),
				setUpdatableInstalls: r => ({
					type: d.SetUpdatableInstalls,
					updatableInstallsList: r
				}),
				getAppSaga: r => ({
					type: d.GetAppSaga,
					appIdentifier: r
				}),
				getAppSending: () => ({
					type: d.GetAppSending
				}),
				getAppSuccess: r => ({
					type: d.GetAppSuccess,
					app: r
				}),
				getAppFailed: () => ({
					type: d.GetAppFailed
				}),
				clearApp: () => ({
					type: d.ClearApp
				}),
				getAppsSaga: () => ({
					type: d.GetAppsSaga
				}),
				getAppsSending: () => ({
					type: d.GetAppsSending
				}),
				getAppsSuccess: r => ({
					type: d.GetAppsSuccess,
					appsList: r
				}),
				getAppsFailed: () => ({
					type: d.GetAppsFailed
				}),
				getInstallsSaga: r => ({
					type: d.GetInstallsSaga,
					zoneId: r
				}),
				getInstallsSending: () => ({
					type: d.GetInstallsSending
				}),
				getInstallsSuccess: r => ({
					type: d.GetInstallsSuccess,
					installsList: r
				}),
				getInstallsFailed: () => ({
					type: d.GetInstallsFailed
				}),
				getCategoriesSaga: r => ({
					type: d.GetCategoriesSaga,
					queryParams: r
				}),
				getCategoriesSending: () => ({
					type: d.GetCategoriesSending
				}),
				getCategoriesSuccess: r => ({
					type: d.GetCategoriesSuccess,
					categoriesList: r
				}),
				getCategoriesFailed: () => ({
					type: d.GetCategoriesFailed
				}),
				getMetadataSaga: r => ({
					type: d.GetMetadataSaga,
					zoneId: r
				}),
				getMetadataSending: () => ({
					type: d.GetMetadataSending
				}),
				getMetadataSuccess: r => ({
					type: d.GetMetadataSuccess,
					metadata: r
				}),
				getMetadataFailed: () => ({
					type: d.GetMetadataFailed
				}),
				postMetadataSaga: (r, a) => ({
					type: d.PostMetadataSaga,
					zoneId: r,
					data: a
				}),
				postMetadataSending: () => ({
					type: d.PostMetadataSending
				}),
				postMetadataSuccess: r => ({
					type: d.PostMetadataSuccess,
					metadata: r
				}),
				postMetadataFailed: () => ({
					type: d.PostMetadataFailed
				}),
				getRecommendedAppsSaga: (r, a, u) => ({
					type: d.GetRecommendedAppsSaga,
					appsList: r,
					installsList: a,
					metadata: u
				}),
				getRecommendedAppsSending: () => ({
					type: d.GetRecommendedAppsSending
				}),
				getRecommendedAppsSuccess: r => ({
					type: d.GetRecommendedAppsSuccess,
					recommendedAppsList: r
				}),
				getRecommendedAppsFailed: () => ({
					type: d.GetRecommendedAppsFailed
				})
			};

			function t(r = e.w6, a) {
				switch (a.type) {
					case d.ResetState:
						return c({}, e.w6);
					case d.ZoneChangedSaga:
						return c({}, r, {
							installsList: c({}, e.w6.installsList),
							recommendedAppsList: c({}, e.w6.recommendedAppsList),
							metadata: c({}, e.w6.metadata)
						});
					case d.GetAppsSending:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.h_))
						});
					case d.GetAppsSuccess:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.Jz, a.appsList))
						});
					case d.GetAppsFailed:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.yc))
						});
					case d.GetInstallsSending:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.h_))
						});
					case d.GetInstallsSuccess:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.Jz, a.installsList))
						});
					case d.GetInstallsFailed:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.yc))
						});
					case d.GetCategoriesSending:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case d.GetCategoriesSuccess:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.Jz, a.categoriesList))
						});
					case d.GetCategoriesFailed:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case d.GetMetadataSending:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.h_))
						});
					case d.GetMetadataSuccess:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case d.GetMetadataFailed:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.yc))
						});
					case d.PostMetadataSending:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.h_))
						});
					case d.PostMetadataSuccess:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case d.PostMetadataFailed:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.yc))
						});
					case d.GetRecommendedAppsSending:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case d.GetRecommendedAppsSuccess:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.Jz, a.recommendedAppsList))
						});
					case d.GetRecommendedAppsFailed:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case d.GetAppSending:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.h_))
						});
					case d.GetAppSuccess:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.Jz, a.app))
						});
					case d.GetAppFailed:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.yc))
						});
					case d.ClearApp:
						return c({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case d.SetUpdatableInstalls:
						return c({}, r, {
							updatableInstallsList: a.updatableInstallsList
						});
					case d.GetDevelopedAppsSending:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case d.GetDevelopedAppsSuccess:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.Jz, a.developedApps))
						});
					case d.GetDevelopedAppsFailed:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/caching/tracking.tsx": function(H, y, n) {
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
		"../react/pages/dns/dns-records/tracking.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
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
		"../react/pages/email/types.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
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
			let c = function(s) {
				return s[s.Verified = 0] = "Verified", s[s.Pending = 1] = "Pending", s[s.Missing = 2] = "Missing", s[s.WorkerNotFound = 3] = "WorkerNotFound", s[s.Unknown = 4] = "Unknown", s[s.Loading = 5] = "Loading", s
			}({});
			const g = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/firewall/api-shield/tracking.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Fj: function() {
					return d
				},
				kq: function() {
					return l
				},
				xr: function() {
					return v
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), u.forEach(function(i) {
						g(t, i, a[i])
					})
				}
				return t
			}

			function g(t, r, a) {
				return r = s(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function s(t) {
				var r = f(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function f(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var u = a.call(t, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let l = function(t) {
				return t.MAIN = "API Shield", t.SCHEMA_VALIDATION = "Schema Validation", t.JWT_VALIDATION = "JWT Validation", t.SEQUENCE_ANALYTICS = "Sequence Analytics", t.SEQUENCE_RULES = "Sequence Rules", t.ENDPOINT_MANAGEMENT = "Endpoint Management", t.API_DISCOVERY = "API Discovery", t.SETTINGS = "Settings", t
			}({});
			const d = {
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
				v = ({
					name: t,
					category: r = "user journey",
					product: a = l.MAIN,
					productName: u,
					additionalData: i
				}) => {
					o().sendEvent(t, c({
						category: r,
						product: a,
						productName: u
					}, i || {}))
				}
		},
		"../react/pages/firewall/bots/tracking.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
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
			let e = function(g) {
					return g.INITIAL_FETCH_SCORES = "view bots scores distribution", g.FETCH_CONFIGURATION = "view bots configuration page", g.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", g.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", g.UPDATE_SETTINGS = "update bots settings", g.DELETE_RULE = "delete bots ruleset", g.UPDATE_RULE = "update bots ruleset", g.FETCH_RULES = "view bots ruleset", g.CONFIGURE_BOT_MANAGEMENT = "view bots management", g.WAF_RULES_REDIRECT = "redirect waf rules", g
				}({}),
				o = function(g) {
					return g.PROVIDED_TEMPLATE = "provided template link in detection card", g.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", g.USE_TEMPLATE = "use template", g.CREATE_FIREWALL_RULE = "create firewall rule", g.WAF_RULES = "waf rules", g
				}({});
			const c = "user journey"
		},
		"../react/pages/firewall/page-shield/tracking.ts": function(H, y, n) {
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
		"../react/pages/firewall/rulesets/tracking.tsx": function(H, y, n) {
			"use strict";
			n.d(y, {
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
					return g
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
				c = (s, f) => {
					var l;
					return `${f} ${(l=o[s])!==null&&l!==void 0?l:s} rule${f===e.GET?"s":""}`
				},
				g = () => {
					var s, f;
					return (s = Object.keys(o)) === null || s === void 0 || (f = s.map(l => {
						var d;
						return (d = Object.values(e)) === null || d === void 0 ? void 0 : d.map(v => c(l, v))
					})) === null || f === void 0 ? void 0 : f.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				AS: function() {
					return f
				},
				IK: function() {
					return r
				},
				Ki: function() {
					return c
				},
				Lz: function() {
					return a
				},
				nT: function() {
					return d
				},
				o4: function() {
					return u
				},
				oY: function() {
					return g
				},
				qH: function() {
					return t
				},
				x3: function() {
					return l
				}
			});
			var e = n("../react/pages/firewall/analytics/labels.ts"),
				o = n("../react/common/constants/analytics/botScoreSrc.ts");
			const c = ["block", "challenge", "jschallenge", "managedChallenge"],
				g = ["miss", "expired", "bypass", "dynamic"],
				s = i => Object.fromEntries(Object.entries(i).map(([p, E]) => [E, p])),
				f = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				l = s(f),
				d = {
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
				v = s(d),
				t = s(o.EG);
			let r = function(i) {
				return i.SAMPLED = "sampled", i.RAW = "raw", i
			}({});
			const a = "security-analytics-log-explorer";
			let u = function(i) {
				return i.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', i.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', i.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', i.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', i.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', i
			}({})
		},
		"../react/pages/firewall/settings/cards/security-txt/helpers.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				$E: function() {
					return t
				},
				Mb: function() {
					return r
				},
				Q4: function() {
					return u
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
				c = n("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				g = n("../react/pages/analytics/common/utils/gqlUtils.js");

			function s(p) {
				for (var E = 1; E < arguments.length; E++) {
					var T = arguments[E] != null ? Object(arguments[E]) : {},
						h = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(T).filter(function(C) {
						return Object.getOwnPropertyDescriptor(T, C).enumerable
					})), h.forEach(function(C) {
						f(p, C, T[C])
					})
				}
				return p
			}

			function f(p, E, T) {
				return E = l(E), E in p ? Object.defineProperty(p, E, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[E] = T, p
			}

			function l(p) {
				var E = d(p, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function d(p, E) {
				if (typeof p != "object" || p === null) return p;
				var T = p[Symbol.toPrimitive];
				if (T !== void 0) {
					var h = T.call(p, E || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(p)
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
				r = p => o.Ry({
					[e.T.CONTACT]: o.IX().of(o.Z_().required(p("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, p("security_txt.fields.contact.format_error"))),
					[e.T.EXPIRES]: o.hT().required(p("common.required")).min(new Date, p("security_txt.fields.expires.min_error"))
				}),
				a = p => {
					const E = {};
					for (const T in p) E[T] = Array.isArray(p[T]) ? p[T].filter(h => !!h) : p[T];
					return s({}, E, {
						expires: (0, g.DZ)(p.expires)
					})
				},
				u = (p, E, T) => {
					const h = [...new Set([e.T.CONTACT, e.T.EXPIRES, ...Object.values(e.T)])],
						C = Object.entries(p).sort(([D], [b]) => h.indexOf(D) - h.indexOf(b)).filter(([D, b]) => !!t[D] && !!b && (!Array.isArray(b) || !!b.length)).map(([D, b]) => Array.isArray(b) ? b.map(_ => `${T(t[D].label)}: ${_}`).join(`
`) : `${T(t[D].label)}: ${b}`).join(`
`);
					(0, c.yH)(`Cloudflare_${E}_security.txt`, C, "text/plain;charset=utf-8")
				};
			let i = function(p) {
				return p.CREATED = "created security.txt", p.ENABLED = "enabled security.txt", p.DISABLED = "disabled security.txt", p.DOWNLOADED = "downloaded security.txt", p.UPDATED = "updated security.txt", p.DELETED = "deleted security.txt", p
			}({})
		},
		"../react/pages/firewall/settings/cards/security-txt/types.ts": function(H, y, n) {
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
		"../react/pages/firewall/settings/labels/api/helpers.ts": function(H, y, n) {
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
				c = n("../react/common/utils/useQueryCache.ts"),
				g = n("../react/pages/firewall/settings/resources/constants/index.ts"),
				s = n("../react/common/hooks/useAccountId.ts"),
				f = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				l = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const d = {
				labels: (0, l.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, l.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, l.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, l.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, l.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, l.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, l.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, l.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var v = n("../../../../node_modules/lodash/lodash.js"),
				t = n("../react/pages/firewall/settings/resources/utils/index.ts"),
				r = n("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(b, _) {
				if (b == null) return {};
				var S = u(b, _),
					z, j;
				if (Object.getOwnPropertySymbols) {
					var $ = Object.getOwnPropertySymbols(b);
					for (j = 0; j < $.length; j++) z = $[j], !(_.indexOf(z) >= 0) && (!Object.prototype.propertyIsEnumerable.call(b, z) || (S[z] = b[z]))
				}
				return S
			}

			function u(b, _) {
				if (b == null) return {};
				var S = {},
					z = Object.keys(b),
					j, $;
				for ($ = 0; $ < z.length; $++) j = z[$], !(_.indexOf(j) >= 0) && (S[j] = b[j]);
				return S
			}

			function i(b) {
				for (var _ = 1; _ < arguments.length; _++) {
					var S = arguments[_] != null ? Object(arguments[_]) : {},
						z = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(S).filter(function(j) {
						return Object.getOwnPropertyDescriptor(S, j).enumerable
					})), z.forEach(function(j) {
						p(b, j, S[j])
					})
				}
				return b
			}

			function p(b, _, S) {
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
					var z = S.call(b, _ || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(b)
			}
			const h = b => {
					const _ = (0, e.p4)(o.Cu),
						S = (0, s.F)(),
						z = D.labels(i({
							accountId: S,
							zoneId: _
						}, b ? i({}, b) : {})),
						j = (0, c.o)(z);
					return i({
						zoneId: _,
						queryKey: z,
						batchInvalidateLabels: async () => {
							await j.batchInvalidate({
								queryKeysToPredicateInvalidate: [g.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, j)
				},
				C = {
					getLabels: async b => {
						var _, S, z, j;
						let {
							zoneId: $,
							hideErrorAlert: Z = !0
						} = b, k = a(b, ["zoneId", "hideErrorAlert"]);
						return (await f.get(d.labels.toUrl({
							zoneId: $
						}), {
							parameters: {
								page: k == null ? void 0 : k.page,
								per_page: k == null ? void 0 : k.per_page,
								with_mapped_resource_counts: k == null ? void 0 : k.with_mapped_resource_counts,
								filter: k == null || (_ = k.filters) === null || _ === void 0 ? void 0 : _.search,
								source: (0, t.sQ)(k == null || (S = k.filters) === null || S === void 0 ? void 0 : S.source),
								order: k == null || (z = k.sort) === null || z === void 0 ? void 0 : z.id,
								direction: (k == null ? void 0 : k.sort) ? (k == null || (j = k.sort) === null || j === void 0 ? void 0 : j.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: Z
						})).body
					},
					getLabel: async b => {
						let {
							zoneId: _,
							labelName: S,
							hideErrorAlert: z = !0
						} = b, j = a(b, ["zoneId", "labelName", "hideErrorAlert"]);
						const $ = (0, t.mm)(S) ? d.managedLabel.toUrl({
							zoneId: _,
							labelName: S
						}) : d.userLabel.toUrl({
							zoneId: _,
							labelName: S
						});
						return (await f.get($, {
							parameters: {
								with_mapped_resource_counts: j == null ? void 0 : j.with_mapped_resource_counts
							},
							hideErrorAlert: z
						})).body
					},
					editLabel: async ({
						zoneId: b,
						label: _,
						replace: S
					}) => {
						const {
							name: z
						} = _, j = a(_, ["name"]);
						return (await (S ? f.put : f.patch)(d.userLabel.toUrl({
							zoneId: b,
							labelName: _.name
						}), {
							body: j
						})).body
					},
					deleteLabel: async ({
						zoneId: b,
						labelName: _
					}) => (await f.del(d.userLabel.toUrl({
						zoneId: b,
						labelName: _
					}))).body,
					createLabel: async b => {
						let {
							zoneId: _
						} = b, S = a(b, ["zoneId"]);
						const {
							product: z
						} = S, j = a(S, ["product"]);
						return (await f.post(d.userLabels.toUrl({
							zoneId: _
						}), {
							body: [j]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: b,
						user: _,
						managed: S,
						operationIds: z,
						replace: j
					}) => (await (j ? f.put : f.post)(d.operationsLinkedToLabels.toUrl({
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
									operation_ids: z
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: b,
						labelName: _,
						operationIds: S
					}) => {
						const z = (0, t.mm)(_) ? d.managedLabelOperations.toUrl({
							zoneId: b,
							labelName: _
						}) : d.userLabelOperations.toUrl({
							zoneId: b,
							labelName: _
						});
						return (await f.put(z, {
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
						} = b, z = a(b, ["accountId", "zoneId"]);
						return [g.IQ.LABELS, _, S, ...(0, v.isEmpty)(z) ? [] : [z]]
					}
				}
		},
		"../react/pages/firewall/settings/labels/api/hooks/useGetLabel.ts": function(H, y, n) {
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
				c = n("../../../../node_modules/react-query/es/index.js"),
				g = n("../react/pages/firewall/settings/labels/api/helpers.ts");

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var u = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(u).filter(function(p) {
						return Object.getOwnPropertyDescriptor(u, p).enumerable
					})), i.forEach(function(p) {
						f(r, p, u[p])
					})
				}
				return r
			}

			function f(r, a, u) {
				return a = l(a), a in r ? Object.defineProperty(r, a, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = u, r
			}

			function l(r) {
				var a = d(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function d(r, a) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var i = u.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const v = r => {
					const {
						queryKey: a,
						zoneId: u
					} = (0, g.hL)(r), {
						isLoading: i,
						isError: p,
						isSuccess: E,
						data: T,
						refetch: h,
						isRefetching: C
					} = (0, c.useQuery)({
						queryKey: a,
						queryFn: () => g.Mi.getLabel(s({
							zoneId: u
						}, r)),
						enabled: !!(r == null ? void 0 : r.labelName)
					});
					return {
						data: T == null ? void 0 : T.result,
						errors: T == null ? void 0 : T.errors,
						paginationData: T == null ? void 0 : T.result_info,
						isLoading: i,
						isError: p,
						isSuccess: E,
						refetch: h,
						isRefetching: C
					}
				},
				t = r => {
					const a = (0, c.useQueryClient)(),
						{
							queryKey: u,
							zoneId: i
						} = (0, g.hL)(r),
						p = (0, e.useCallback)(async ({
							labelName: T
						}) => {
							if (!T) throw new Error("Error: unable to get label; missing label name");
							return await g.Mi.getLabel(s({
								zoneId: i,
								labelName: T
							}, r))
						}, [i, r]);
					return {
						getLabel: (0, e.useCallback)(async ({
							labelName: T
						}) => await a.fetchQuery(u, () => p({
							labelName: T
						}), {
							staleTime: 0,
							cacheTime: 0
						}), [a, u, p])
					}
				}
		},
		"../react/pages/firewall/settings/resources/constants/constants.tsx": function(H, y, n) {
			"use strict";
			n.d(y, {
				DG: function() {
					return i
				},
				GE: function() {
					return b
				},
				IQ: function() {
					return g
				},
				KV: function() {
					return f
				},
				QH: function() {
					return r
				},
				V: function() {
					return h
				},
				W3: function() {
					return c
				},
				_8: function() {
					return v
				},
				_c: function() {
					return C
				},
				aW: function() {
					return p
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
			const c = "all";
			let g = function(S) {
					return S.LABELS = "labels", S
				}({}),
				s = function(S) {
					return S.USER = "user", S.MANAGED = "managed", S
				}({}),
				f = function(S) {
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
						[f.SOURCE]: c
					}
				},
				filters: f,
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
				u = /^[\x20-\x7E]+$/,
				i = /^[A-Za-z0-9-]+$/,
				p = /^cf-/;
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
		"../react/pages/firewall/settings/resources/constants/index.ts": function(H, y, n) {
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
					return g
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
					return c
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
			let c = function(s) {
					return s.ENDPOINT = "endpoint", s.METHOD = "method", s.OPERATION_ID = "operationId", s
				}({}),
				g = function(s) {
					return s.NAME = "name", s.SOURCE = "source", s.NEW_LABEL_NAME = "newLabelName", s
				}({})
		},
		"../react/pages/firewall/settings/resources/constants/labelsTableProperties.tsx": function(H, y, n) {
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
		"../react/pages/firewall/settings/resources/utils/index.ts": function(H, y, n) {
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
					return g
				},
				m8: function() {
					return s.m8
				},
				sQ: function() {
					return c
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
				c = _ => _ === e.W3 ? void 0 : _,
				g = _ => e.aW.test(_);
			var s = n("../react/pages/firewall/settings/resources/utils/tracking.ts"),
				f = n("webpack/sharing/consume/default/react/react"),
				l = n("../../../../node_modules/lodash/lodash.js"),
				d = n("../react/pages/firewall/settings/labels/api/hooks/useGetLabel.ts");
			const v = () => {
					const [_, S] = (0, f.useState)(!0), [z, j] = (0, f.useState)(!1), [$, Z] = (0, f.useState)(!1), {
						getLabel: k
					} = (0, d.V)(), x = (0, f.useRef)(null), te = (0, f.useRef)(""), Y = (0, f.useCallback)(async W => {
						j(!0);
						try {
							const {
								success: U
							} = await k({
								labelName: W
							});
							S(!U), te.current = W
						} catch {
							S(!0)
						} finally {
							j(!1), Z(!1)
						}
					}, [k]), re = (0, f.useCallback)(W => {
						x.current || (x.current = (0, l.debounce)(Y, 400)), Z(!0), x.current(W)
					}, [Y]), ee = (0, f.useCallback)(W => {
						const {
							value: U
						} = W.target;
						re(U)
					}, [re]), pe = (0, f.useCallback)(async W => {
						($ || W !== te.current) && (x.current && x.current.cancel(), await Y(W))
					}, [$, Y]);
					return {
						isLabelUnique: _,
						setIsLabelUnique: S,
						handleInputChange: ee,
						isLoading: z,
						isCheckPending: $,
						ensureChecked: pe
					}
				},
				t = ({
					modalHeaderFixedHeight: _ = 62,
					modalDefaultPaddings: S = 16
				} = {}) => {
					const z = (0, f.useRef)(null),
						j = (0, f.useRef)(null),
						[$, Z] = (0, f.useState)(0),
						[k, x] = (0, f.useState)(0),
						te = `calc(100vh - ${$}px - ${k}px - ${S}px)`,
						[Y, re] = (0, f.useState)("");
					return (0, f.useEffect)(() => {
						const ee = () => {
							var pe, W, U, w;
							const K = z == null || (pe = z.current) === null || pe === void 0 ? void 0 : pe.offsetHeight,
								q = j == null || (W = j.current) === null || W === void 0 ? void 0 : W.offsetHeight,
								ae = ((U = K) !== null && U !== void 0 ? U : 0) + _,
								N = (w = q) !== null && w !== void 0 ? w : 0;
							Z(ae), x(N)
						};
						return ee(), window.addEventListener("resize", ee), () => window.removeEventListener("resize", ee)
					}, []), {
						searchTerm: Y,
						setSearchTerm: re,
						scrollableSectionMaxHeight: te,
						topMenuRef: z,
						bottomMenuRef: j
					}
				};
			var r = n("../react/common/hooks/useZoneEntitlement.ts"),
				a = n("../react/common/hooks/useGate.ts");
			const u = "central_endpoint_list.endpoint_labels_allowed",
				i = "system-and-user-generated-labels",
				p = () => !!(0, a.Z)(i),
				E = () => !!(0, r.Z)(u),
				T = () => {
					const _ = p(),
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
				} = (0, C.QT)(), S = h.Z_().required(_("common.field_is_required")).max(24, _("labels.apply.form.name.error.max_characters")).matches(D.DG, _("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", _("labels.apply.form.name.error.cf_forbidden"), $ => !D.aW.test($)), z = {
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
					LABELS_APPLY_FORM: z,
					EDIT_LABELS_MODAL_FORM: j
				}
			}
		},
		"../react/pages/firewall/settings/resources/utils/tracking.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Iv: function() {
					return d
				},
				QJ: function() {
					return a
				},
				R: function() {
					return l
				},
				Tf: function() {
					return u
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

			function c(p) {
				for (var E = 1; E < arguments.length; E++) {
					var T = arguments[E] != null ? Object(arguments[E]) : {},
						h = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(T).filter(function(C) {
						return Object.getOwnPropertyDescriptor(T, C).enumerable
					})), h.forEach(function(C) {
						g(p, C, T[C])
					})
				}
				return p
			}

			function g(p, E, T) {
				return E = s(E), E in p ? Object.defineProperty(p, E, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[E] = T, p
			}

			function s(p) {
				var E = f(p, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function f(p, E) {
				if (typeof p != "object" || p === null) return p;
				var T = p[Symbol.toPrimitive];
				if (T !== void 0) {
					var h = T.call(p, E || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(p)
			}
			let l = function(p) {
					return p.LABELS_LIST = "Labels List page", p.LABELS_APPLY = "Labels Apply page", p.LABELS_SIDE_MODAL = "Labels Side Modal", p.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", p.LABELS_OPERATION_DETAILS = "Operation Details page", p
				}({}),
				d = function(p) {
					return p.API_SHIELD = "API Shield", p.SECURITY_SETTINGS = "Security Settings", p
				}({}),
				v = function(p) {
					return p.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", p.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", p.OPERATIONS_TABLE_ROW = "Operations table row", p.OPERATION_DETAILS_PAGE = "Operation details page", p
				}({}),
				t = function(p) {
					return p.UPSERT = "upsert", p.OVERWRITE = "overwrite", p
				}({}),
				r = function(p) {
					return p.SINGLE = "single", p.MULTIPLE = "multiple", p
				}({}),
				a = function(p) {
					return p.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", p.DELETE_LABEL = "delete a user label in the settings page", p.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", p.CREATE_LABEL_CLICKED = "click create label button in the settings page", p.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", p.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", p.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", p.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", p.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", p.OPEN_LABELS_SIDE_MODAL = "open labels side modal", p.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", p.CREATE_NEW_LABEL = "create a new label", p
				}({});
			const u = ({
					name: p,
					product: E,
					category: T = "user journey",
					pageName: h,
					from: C,
					write_strategy: D,
					type: b,
					target: _
				}) => {
					o().sendEvent(p, c({
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
					var p;
					return (p = Object.values(a)) === null || p === void 0 ? void 0 : p.flat()
				}
		},
		"../react/pages/home/alerts/config.tsx": function(H, y, n) {
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
				c = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				g = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function s(C) {
				for (var D = 1; D < arguments.length; D++) {
					var b = arguments[D] != null ? Object(arguments[D]) : {},
						_ = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(b).filter(function(S) {
						return Object.getOwnPropertyDescriptor(b, S).enumerable
					})), _.forEach(function(S) {
						f(C, S, b[S])
					})
				}
				return C
			}

			function f(C, D, b) {
				return D = l(D), D in C ? Object.defineProperty(C, D, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[D] = b, C
			}

			function l(C) {
				var D = d(C, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function d(C, D) {
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
				u = (0, e.BC)`${a}/destinations`,
				i = (0, e.BC)`${a}/create`,
				p = (0, e.BC)`${i}/${"alertType"}`,
				E = (0, e.BC)`${a}/edit/${"alertId"}`,
				T = s({
					account: r,
					alerts: a,
					destinations: u,
					createAlert: i,
					createAlertWithSelection: p,
					editAlert: E
				}, o._j, c._j),
				h = s({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, g.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				_j: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				c = (0, e.BC)`${o}/pagerduty/connect`,
				g = (0, e.BC)`${o}/pagerduty/register`,
				s = (0, e.BC)`${o}/pagerduty`,
				f = {
					pagerDutyConnect: c,
					pagerDutyRegister: g,
					pagerDutyList: s
				};
			var l = null
		},
		"../react/pages/home/alerts/tracking.ts": function(H, y, n) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(H, y, n) {
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
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(H, y, n) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				AA: function() {
					return X
				},
				AN: function() {
					return ye
				},
				AY: function() {
					return Ae
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
					return De
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
					return we
				},
				Hc: function() {
					return Tt
				},
				IO: function() {
					return ne
				},
				JK: function() {
					return Ye
				},
				K: function() {
					return _
				},
				LI: function() {
					return We
				},
				LX: function() {
					return Q
				},
				L_: function() {
					return tt
				},
				Ly: function() {
					return Mt
				},
				M9: function() {
					return Ce
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
					return Te
				},
				Pd: function() {
					return Fe
				},
				Pk: function() {
					return Ne
				},
				Pp: function() {
					return Xe
				},
				Q1: function() {
					return Z
				},
				Qr: function() {
					return fe
				},
				Qv: function() {
					return Ze
				},
				Rp: function() {
					return wt
				},
				Sh: function() {
					return St
				},
				TZ: function() {
					return G
				},
				Tg: function() {
					return st
				},
				Tp: function() {
					return _e
				},
				Uy: function() {
					return bt
				},
				Vw: function() {
					return te
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
					return Ee
				},
				ZB: function() {
					return $
				},
				Zs: function() {
					return Ue
				},
				_f: function() {
					return ie
				},
				_k: function() {
					return Ie
				},
				b4: function() {
					return ge
				},
				c2: function() {
					return q
				},
				cE: function() {
					return ht
				},
				dh: function() {
					return Qe
				},
				fE: function() {
					return $e
				},
				g7: function() {
					return se
				},
				hO: function() {
					return nt
				},
				hV: function() {
					return Ct
				},
				hk: function() {
					return C
				},
				hr: function() {
					return J
				},
				it: function() {
					return Ke
				},
				jG: function() {
					return me
				},
				jN: function() {
					return Ve
				},
				m8: function() {
					return W
				},
				nm: function() {
					return ut
				},
				oW: function() {
					return et
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
					return Me
				},
				sO: function() {
					return Be
				},
				sg: function() {
					return xe
				},
				tB: function() {
					return E
				},
				tN: function() {
					return F
				},
				vV: function() {
					return le
				},
				vc: function() {
					return Ge
				}
			});
			var e = n("../../../../node_modules/lodash/lodash.js"),
				o = n.n(e),
				c = n("../../../../node_modules/moment/moment.js"),
				g = n.n(c),
				s = n("../../../common/util/types/src/api/domain.ts"),
				f = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				l = n("../react/utils/translator.tsx"),
				d = n("../react/utils/url.ts"),
				v = n("../react/pages/home/domain-registration/config.ts"),
				t = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = n("../react/pages/home/domain-registration/types.ts");

			function a(m) {
				for (var L = 1; L < arguments.length; L++) {
					var ce = arguments[L] != null ? Object(arguments[L]) : {},
						he = Object.keys(ce);
					typeof Object.getOwnPropertySymbols == "function" && he.push.apply(he, Object.getOwnPropertySymbols(ce).filter(function(ke) {
						return Object.getOwnPropertyDescriptor(ce, ke).enumerable
					})), he.forEach(function(ke) {
						u(m, ke, ce[ke])
					})
				}
				return m
			}

			function u(m, L, ce) {
				return L = i(L), L in m ? Object.defineProperty(m, L, {
					value: ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[L] = ce, m
			}

			function i(m) {
				var L = p(m, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function p(m, L) {
				if (typeof m != "object" || m === null) return m;
				var ce = m[Symbol.toPrimitive];
				if (ce !== void 0) {
					var he = ce.call(m, L || "default");
					if (typeof he != "object") return he;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(m)
			}

			function E(m) {
				return m.filter(L => L.isSelected).reduce((L, {
					fees: ce,
					isZoneEntitlementPresent: he
				}) => he || !(0, e.isNumber)(ce == null ? void 0 : ce.transfer_fee) ? L : L + (ce == null ? void 0 : ce.transfer_fee), 0)
			}

			function T(m) {
				return m.filter(L => L.registrar.toLowerCase() === "godaddy")
			}
			const h = "MMM D, YYYY";

			function C(m, L, ce, he) {
				var ke, ze, mt, gt, ft, Et, Pt, dt, pt, At, _t;
				const Se = m[L.name];
				return {
					name: L.name,
					zone: Se,
					entitlements: ce,
					registryCheck: he,
					nameservers: L.name_servers,
					isAvailable: L.available,
					lastKnownStatus: L.last_known_status,
					authCode: L.auth_code,
					isEnterpriseZone: (Se == null || (ke = Se.plan) === null || ke === void 0 ? void 0 : ke.legacy_id) === "enterprise",
					isActiveZone: (Se == null ? void 0 : Se.status) === "active",
					corResponsesPending: L.cor_responses_pending,
					isCorLocked: L.cor_locked,
					corLockedUntil: L.cor_locked_until ? g()(L.cor_locked_until).format(h) : null,
					isFullZone: (Se == null ? void 0 : Se.type) == r.xd.Full,
					isLocked: L.locked,
					registrar: L.current_registrar || v.JM,
					zoneId: Se == null ? void 0 : Se.id,
					currentExpiration: g()(L.expires_at).format(h),
					newExpiration: g()(L.expires_at).add(1, "year").format(h),
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
					paymentExpiresAt: g()(L.payment_expires_at).isValid() ? g()(L.payment_expires_at) : g()(L.expires_at).isValid() ? g()(L.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (ze = L.contacts) === null || ze === void 0 || (mt = ze.administrator) === null || mt === void 0 ? void 0 : mt.id,
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

			function b(m) {
				switch (m.enter_auth_code) {
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

			function _(m) {
				let L = m.extensions;
				(L == null ? void 0 : L.application_purpose) && (L == null ? void 0 : L.nexus_category) && (m.extensions = {
					nexusCategory: L.nexus_category,
					applicationPurpose: L.application_purpose
				});
				let ce = a({}, typeof m.id == "string" ? {
					id: m.id
				} : {}, {
					first_name: m.firstName,
					organization: m.organization,
					address: m.address1,
					city: m.city,
					state: m.state || "N/A",
					zip: m.zip,
					country: m.country,
					phone: m.phone,
					email: m.email,
					fax: "",
					last_name: m.lastName,
					address2: m.address2,
					email_verified: m.emailVerified
				}, m.extensions ? {
					extensions: {
						nexus_category: m.extensions.nexusCategory,
						application_purpose: m.extensions.applicationPurpose
					}
				} : {});
				return He(ce)
			}

			function S(m) {
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
				for (const he in m) {
					const ke = m[he],
						ze = ce[ke];
					L.push(ze)
				}
				return L
			}
			const z = m => {
				if (!m) return null;
				let L = m;
				return m.includes("C31") && (L = "C31"), m.includes("C32") && (L = "C32"), L
			};

			function j(m) {
				return a({}, typeof m.id == "string" ? {
					id: m.id
				} : {}, {
					firstName: m.first_name,
					organization: m.organization,
					address1: m.address,
					city: m.city,
					state: m.state,
					zip: m.zip,
					country: m.country,
					phone: m.phone.trim(),
					email: m.email.trim(),
					lastName: m.last_name,
					address2: m.address2,
					emailVerified: m.email_verified
				}, m.extensions ? {
					extensions: {
						nexusCategory: z(m.extensions.nexus_category),
						applicationPurpose: m.extensions.application_purpose
					}
				} : {})
			}

			function $(m = {}) {
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
						}, m.zone && m.zone.plan || {}),
						type: r.xd.Full
					}, m.zone || {}),
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
					}, m.transferConditions || {}),
					transferIn: a({
						unlock_domain: r.lW.UNKNOWN,
						disable_privacy: r.lW.UNKNOWN,
						enter_auth_code: r.lW.UNKNOWN,
						approve_transfer: r.lW.UNKNOWN,
						accept_foa: r.lW.UNKNOWN,
						can_cancel_transfer: !1
					}, m.transferIn || {}),
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
				return Object.assign(L, m)
			}

			function Z(m = {}) {
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
				}, m)
			}

			function k(m) {
				const L = v.Py.concat(v.ui).reduce((ce, he) => a({}, ce, {
					[he]: []
				}), {});
				return m.forEach(ce => {
					let he = x(ce.registrar);
					he in L || (he = v.ui), xe(ce.name) && (he = "uk"), L[he].push(ce)
				}), Object.keys(L).sort((ce, he) => ce.localeCompare(he)).map(ce => ({
					registrar: ce,
					domains: L[ce]
				})).filter(ce => ce.domains.length > 0)
			}

			function x(m) {
				return m == null ? void 0 : m.toLowerCase().replace(/\s|,|\./g, "")
			}

			function te(m) {
				if (!m || !m.registrar) return "unknown";
				if (xe(m.name)) return "uk";
				const L = x(m.registrar);
				return L in v.gM ? L : "unknown"
			}
			const Y = [];

			function re(m) {
				return Y.some(L => m.endsWith("." + L))
			}

			function ee(m) {
				return !m.isEnterpriseZone || !Array.isArray(m.entitlements) ? !1 : !!m.entitlements.find(({
					id: L,
					allocation: ce
				}) => L === v.g5 && ce.value === !0)
			}

			function pe(m) {
				var L;
				const ce = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let he = !1,
					ke = null;
				return (L = m.registryStatuses) === null || L === void 0 || L.some(ze => {
					ce.includes(ze) && (ke = ze, he = !0)
				}), [he, ke]
			}

			function W(m, L = !1) {
				if (!m) return [!1, t.keys.cannot_transfer_default];
				if (m.zone.status !== "active") return [!1, t.keys.cannot_transfer_zone_not_active];
				if (!m.isFullZone && !ee(m)) return [!1, t.keys.cannot_transfer_zone_not_eligible];
				if (m.registrar === "Cloudflare") return [!1, t.keys.cannot_transfer_domain_on_cf];
				if (m.isAvailable) return [!1, t.keys.cannot_transfer_domain_available];
				if (!m.transferConditions) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (!L && bt(m == null ? void 0 : m.premiumType)) return [!1, t.keys.cannot_transfer_domain_premium];
				if (U(m)) return [!1, t.keys.cannot_transfer_domain_transfer_in_progress];
				let ce;
				for (ce in m.transferConditions)
					if (ce !== "not_premium" && !m.transferConditions[ce]) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (re(m.name)) return [!1, t.keys.cannot_transfer_domain_tld_not_supported];
				const [he, ke] = pe(m);
				return he && ke ? [!1, t.keys.cannot_transfer_domain_registry_status[ke]] : [!0, ""]
			}

			function U(m) {
				var L, ce;
				return !!m.transferIn && !((L = m.transferConditions) === null || L === void 0 ? void 0 : L.not_started) && !!(xe(m.name) || ((ce = m.registryStatuses) === null || ce === void 0 ? void 0 : ce.includes(r.rj.PENDING_TRANSFER)))
			}

			function w(m) {
				return !!m.registrar && !!m.currentExpiration
			}

			function K(m, L = !1) {
				const [ce] = W(m, L);
				return w(m) ? Oe(m) ? r.M5.InProgressOrOnCF : ce ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function q(m) {
				return m.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(m.transferIn.enter_auth_code) || !1
			}

			function ae(m) {
				return m.registrar === "Cloudflare"
			}

			function N(m) {
				return !!(m == null ? void 0 : m.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function P(m) {
				return !!(m == null ? void 0 : m.includes(r.rj.PENDING_TRANSFER))
			}
			const O = "Invalid date";

			function I(m) {
				return m.newExpiration === O ? "Unavailable" : m.newExpiration
			}

			function G(m) {
				return m.currentExpiration === O ? "Unavailable" : m.currentExpiration
			}

			function X(m) {
				return m.substring(m.indexOf("."))
			}

			function J(m) {
				return m.map(L => L.name).map(L => X(L)).filter((L, ce, he) => !he.includes(L, ce + 1))
			}

			function ge(m) {
				if (v.no) return [!0, ""];
				if (!ae(m)) return [!1, r.ok.NotOnCF];
				if (m.isCorLocked) return [!1, m.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (m.lastTransferredAt) {
					const L = g()(m.lastTransferredAt),
						ce = g().duration(g()().diff(L)).as("days"),
						he = xe(m.name);
					if (ce < (he ? 1 : 60)) return [!1, he ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (m.createdAt) {
					const L = g()(m.createdAt);
					if (g().duration(g()().diff(L)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function Le(m) {
				return !!(v.Bc || m.transferOut)
			}

			function Oe(m) {
				return se(m) || ae(m)
			}

			function F(m) {
				return !se(m) && ae(m)
			}

			function se(m) {
				return !m || m.lastKnownStatus === "pendingTransfer" || m.lastKnownStatus === "transferFOAPending" || !ae(m) && m.transferConditions && !m.transferConditions.not_started || !1
			}

			function Te(m) {
				return !(re(m.name) || m.transferConditions && !m.transferConditions.supported_tld)
			}

			function Ze(m) {
				return (m == null ? void 0 : m.includes("/")) ? !0 : m.split("").some(L => L.charCodeAt(0) > 123)
			}

			function Ne(m) {
				switch (m) {
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

			function Ge(m) {
				return g()(m.paymentExpiresAt).isBefore(g()())
			}

			function Ve(m) {
				return m.transferIn && m.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function Ye(m) {
				const L = ["CU", "KP", "IR", "SY"];
				return m.filter(ce => !L.includes(ce.code))
			}

			function st(m) {
				if (!!m) return `${m.charAt(0).toUpperCase()}${m.slice(1)}${m.charAt(m.length-1)==="."?"":"."}`
			}

			function He(m) {
				const L = {};
				for (const [ce, he] of Object.entries(m)) {
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

			function Ue(m) {
				return g()(m).add(40, "days")
			}

			function tt(m) {
				const L = m.paymentExpiresAt || m.payment_expires_at,
					ce = Ue(L);
				return g()().isBetween(L, ce)
			}

			function $e(m) {
				var L;
				return !(m == null ? void 0 : m.registryStatuses) || !Array.isArray(m == null ? void 0 : m.registryStatuses) && !(0, e.isString)(m == null ? void 0 : m.registryStatuses) ? !1 : (L = m.registryStatuses) === null || L === void 0 ? void 0 : L.includes(r.rj.REDEMPTION_PERIOD)
			}

			function Qe(m) {
				var L;
				return !(m == null ? void 0 : m.registryStatuses) || !Array.isArray(m == null ? void 0 : m.registryStatuses) && !(0, e.isString)(m == null ? void 0 : m.registryStatuses) ? !1 : (L = m.registryStatuses) === null || L === void 0 ? void 0 : L.includes(r.rj.PENDING_DELETE)
			}

			function Xe(m) {
				return [".us"].includes(m)
			}

			function Ke(m) {
				return [".us"].includes(m)
			}

			function nt(m) {
				switch (m) {
					case ".us":
						return B();
					default:
						return []
				}
			}

			function Je(m) {
				switch (m) {
					case ".us":
						return ot;
					default:
						return {}
				}
			}
			const ot = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function B() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([m, L]) => ({
						value: m,
						label: L
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([m, L]) => ({
						value: m,
						label: L
					}))
				}]
			}

			function Q(m, L, ce) {
				return L[L.length - 1][ce] === m[ce]
			}

			function fe(m) {
				return Boolean(Object.keys(m).length === 0)
			}

			function De(m) {
				return g()().add(m, "year").format(h)
			}

			function ie({
				accountName: m
			}) {
				var L;
				const ce = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((L = m.toLowerCase().match(ce)) === null || L === void 0 ? void 0 : L[0]) || ""
			}

			function le(m) {
				return !!m.match(f.default.email)
			}

			function me(m) {
				return m === "Registration banned zone error"
			}

			function Ee(m) {
				return m == null ? void 0 : m.startsWith("Quote error")
			}

			function Ce(m) {
				return m == null ? void 0 : m.startsWith("Invalid acknowledgement")
			}

			function Be(m) {
				return m === (0, l.ZP)(t.keys.registration_checkout_trademark_notice_error_message)
			}

			function Ie(m) {
				return m === "DNS conflict"
			}

			function _e(m) {
				return m === s.W7.PENDING_UPDATE
			}

			function we(m) {
				return m ? Object.values(s.wR).filter(L => L !== s.wR.OFFBOARDED).includes(m) : !1
			}

			function Me(m) {
				return m ? [s.wR.LOCKED, s.wR.ONBOARDED, s.wR.ONBOARDING_INITIATED, s.wR.PENDING_REGISTRY_LOCK, s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(m) : !1
			}

			function qe(m) {
				return m ? s.wR.UNLOCKED === m : !1
			}

			function at(m) {
				return m ? s.wR.LOCKED === m : !1
			}

			function We(m) {
				return m ? s.wR.PENDING_REGISTRY_LOCK === m : !1
			}

			function M(m) {
				return m ? [s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(m) : !1
			}

			function ne(m) {
				var L;
				return !1
			}

			function de(m) {
				var L;
				return !1
			}

			function ye(m) {
				var L;
				return !1
			}

			function Pe(m) {
				var L;
				return !1
			}

			function Re(m) {
				var L;
				return !1
			}

			function et(m) {
				return Object.keys(s.wR).find(L => s.wR[L].toLowerCase() === m.toLowerCase())
			}

			function Ae(m) {
				var L;
				const ce = (L = et(m)) === null || L === void 0 ? void 0 : L.toLowerCase();
				return ce ? t.keys.protection_status[ce] : t.keys.protection_status.unknown
			}

			function Dt(m) {
				return ["com", "net"].includes(m)
			}

			function ct(m) {
				const L = (0, d.pu)(m);
				return Dt(L) ? s.wR.PENDING_REGISTRY_LOCK : s.wR.LOCKED
			}

			function St(m) {
				return (0, d.pu)(m) === "co" ? 5 : 10
			}

			function ut(m, L) {
				return L ? 1 : (0, d.pu)(m) === "co" ? 5 : (0, d.pu)(m) === "org" ? 1 : 10
			}

			function xe(m) {
				return (0, d.pu)(m) === "uk"
			}

			function ht(m) {
				return (0, d.pu)(m) === "us"
			}

			function wt(m) {
				return g()(m).isValid()
			}

			function Mt(m) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(m)
			}

			function kt(m) {
				return !!(m == null ? void 0 : m.id)
			}

			function Rt(m) {
				return m ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(m) : !1
			}

			function Fe(m) {
				return m ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(m) : !1
			}

			function Ct(m) {
				var L;
				return (m == null ? void 0 : m.lastKnownStatus) ? (L = m.lastKnownStatus) === null || L === void 0 ? void 0 : L.includes("deletionIrredeemable") : !1
			}

			function bt(m) {
				switch (m) {
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

			function Tt(m) {
				if (!m || !m.message) return r.OJ.DEFAULT;
				const {
					message: L
				} = m;
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
		"../react/pages/home/domain-registration/config.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Bc: function() {
					return v
				},
				Hv: function() {
					return re
				},
				JM: function() {
					return c
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
					return s
				},
				gf: function() {
					return d
				},
				jk: function() {
					return Y
				},
				no: function() {
					return t
				},
				uY: function() {
					return l
				},
				ui: function() {
					return g
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../flags.ts");
			const c = "Unknown",
				g = "unknown",
				s = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				f = Object.keys(s),
				l = !0,
				d = (0, o.J8)("registrar_mock_data") || !1,
				v = (0, o.J8)("registrar_mock_transfer_out") || !1,
				t = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				a = "cf_registrar.enabled",
				u = "@abcABC1234567890123456",
				i = (0, e.BC)`/${"accountId"}`,
				p = (0, e.BC)`${i}/add-site`,
				E = (0, e.BC)`${i}/domains`,
				T = (0, e.BC)`${E}/${"zoneName"}`,
				h = (0, e.BC)`${T}/configuration`,
				C = (0, e.BC)`${T}/contacts`,
				D = (0, e.BC)`${E}/pricing`,
				b = (0, e.BC)`${E}/protection`,
				_ = (0, e.BC)`${E}/register`,
				S = (0, e.BC)`${_}/checkout`,
				z = (0, e.BC)`${_}/success`,
				j = (0, e.BC)`${E}/tlds`,
				$ = (0, e.BC)`${E}/transfer`,
				Z = (0, e.BC)`${E}/transfer/${"zoneName"}`,
				k = (0, e.BC)`/registrar/accounts/verify_email`,
				x = (0, e.BC)`/registrar/domains/verify_email`,
				te = (0, e.BC)`${E}/verify-email`,
				Y = {
					addSite: p,
					domains: E,
					domainsDomain: T,
					domainsDomainConfiguration: h,
					domainsDomainContacts: C,
					domainsPricing: D,
					domainsProtection: b,
					domainsRegister: _,
					domainsRegisterCheckout: S,
					domainsRegisterSuccess: z,
					domainsTlds: j,
					domainsTransfer: $,
					domainsTransferZone: Z,
					registrarAccountsVerifyEmail: k,
					registrarDomainsVerifyEmail: x,
					verifyEmail: te
				},
				re = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(H, y, n) {
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
				c = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = n.n(c),
				s = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function f(a) {
				for (var u = 1; u < arguments.length; u++) {
					var i = arguments[u] != null ? Object(arguments[u]) : {},
						p = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(i).filter(function(E) {
						return Object.getOwnPropertyDescriptor(i, E).enumerable
					})), p.forEach(function(E) {
						l(a, E, i[E])
					})
				}
				return a
			}

			function l(a, u, i) {
				return u = d(u), u in a ? Object.defineProperty(a, u, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[u] = i, a
			}

			function d(a) {
				var u = v(a, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function v(a, u) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var p = i.call(a, u || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(a)
			}
			let t = function(a) {
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a
			}({});

			function r(a, u, i) {
				if (!(u == null ? void 0 : u.name)) return null;
				g().sendEvent(a, f({
					domain: {
						name: u.name,
						premium: (0, s.Uy)(u == null ? void 0 : u.premiumType),
						paymentExpiresAt: o()(u == null ? void 0 : u.paymentExpiresAt).format()
					},
					category: "registrar"
				}, i))
			}
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(H, y, n) {
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
		"../react/pages/hyperdrive/tracking.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				KO: function() {
					return l
				},
				L9: function() {
					return t
				},
				N3: function() {
					return v
				},
				zE: function() {
					return d
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(r) {
				for (var a = 1; a < arguments.length; a++) {
					var u = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(u).filter(function(p) {
						return Object.getOwnPropertyDescriptor(u, p).enumerable
					})), i.forEach(function(p) {
						g(r, p, u[p])
					})
				}
				return r
			}

			function g(r, a, u) {
				return a = s(a), a in r ? Object.defineProperty(r, a, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = u, r
			}

			function s(r) {
				var a = f(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(r, a) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var i = u.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let l = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r
				}({}),
				d = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				v = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const t = (r, a = {}) => {
				o().sendEvent(r, c({}, a, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/magic/constants.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				GF: function() {
					return a
				},
				H3: function() {
					return l
				},
				H8: function() {
					return s
				},
				J: function() {
					return i
				},
				Nz: function() {
					return d
				},
				UQ: function() {
					return E
				},
				Up: function() {
					return g
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
					return c
				},
				a4: function() {
					return u
				},
				jS: function() {
					return p
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
			const c = {
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
				g = () => [{
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
				f = h => [{
					value: "request",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				l = h => [{
					value: "unidirectional",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				d = "magic-transit",
				v = "magic-wan",
				t = "gre_tunnel",
				r = "ipsec_tunnel",
				a = 64,
				u = 1476,
				i = "mid",
				p = "reply",
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
		"../react/pages/magic/network-monitoring/constants.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
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
		"../react/pages/magic/overview/tracking.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				VZ: function() {
					return g
				},
				lC: function() {
					return c
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
				c = "user journey",
				g = {
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
		"../react/pages/magic/packet-captures/constants.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(H, y, n) {
			"use strict";
			n.d(y, {
				gb: function() {
					return t
				},
				iP: function() {
					return z
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
					return f
				},
				lW: function() {
					return d
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
				c = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				s = n("../node_modules/@cloudflare/elements/es/index.js");
			const f = () => o().createElement(l, null, o().createElement("svg", {
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
				l = (0, c.createComponent)(({
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
				d = () => o().createElement(v, null, o().createElement("svg", {
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
				v = (0, c.createComponent)(({
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
					src: g,
					width: "85%"
				})),
				r = (0, c.createComponent)(({
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
				a = () => o().createElement(u, null, o().createElement("svg", {
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
				u = (0, c.createComponent)(({
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
				i = () => o().createElement(p, null, o().createElement("svg", {
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
				p = (0, c.createComponent)(({
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
				T = (0, c.createComponent)(({
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
				C = (0, c.createComponent)(({
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
				b = (0, c.createComponent)(({
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
				S = (0, c.createComponent)(({
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
				z = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				A2: function() {
					return l
				},
				He: function() {
					return s
				},
				N$: function() {
					return f
				},
				Qq: function() {
					return c
				},
				ST: function() {
					return g
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
				g = "cf-test",
				s = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				f = d => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: d ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: d ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: d ? e.rD : e.PJ
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
		"../react/pages/page-rules/tracking.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				_: function() {
					return c
				},
				c: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);
			let c = function(s) {
				return s.TEMPLATE_SELECTED = "template selected", s.TEMPLATE_PRODUCT_SELECTED = "template product selected", s.TEMPLATE_SAVE_DRAFT = "template save draft", s.TEMPLATE_CANCEL = "template cancel", s.TEMPLATE_DEPLOY = "template deploy", s
			}({});
			const g = (s, f) => o().sendEvent(s, {
				template_name: f
			})
		},
		"../react/pages/pages/constants.ts": function(H, y, n) {
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
					return c
				},
				Li: function() {
					return p
				},
				Ni: function() {
					return S
				},
				OG: function() {
					return Y
				},
				QF: function() {
					return x
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
					return l
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
					return g
				},
				wJ: function() {
					return d
				},
				wp: function() {
					return u
				},
				yu: function() {
					return t
				},
				zG: function() {
					return z
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-workers-and-pages",
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
				g = "Allow Members - Cloudflare Pages",
				s = 58,
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
				l = "production",
				d = 2e3,
				v = 100,
				t = 350,
				r = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				u = 10,
				i = "_headers",
				p = "_redirects",
				E = "_routes.json",
				T = "_worker.js",
				h = "do-a-barrel-roll",
				C = [i, p, E, T],
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
				z = 75e3,
				j = "workers",
				$ = "cloudflare_pages_build_caching",
				Z = 2;
			let k = function(re) {
				return re[re.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", re[re.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", re[re.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", re[re.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", re[re.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", re[re.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", re
			}({});
			const x = 1,
				te = 2,
				Y = 2
		},
		"../react/pages/pages/routes.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Hv: function() {
					return c
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
				g = s => `${s.subdomain}.pages.dev`
		},
		"../react/pages/pipelines/tracking.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				KO: function() {
					return l
				},
				L9: function() {
					return v
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), u.forEach(function(i) {
						g(t, i, a[i])
					})
				}
				return t
			}

			function g(t, r, a) {
				return r = s(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function s(t) {
				var r = f(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function f(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var u = a.call(t, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let l = function(t) {
					return t.LIST_PIPELINES = "list pipelines", t.CREATE_PIPELINE = "create pipeline", t.VIEW_PIPELINE = "view pipeline details", t.DELETE_PIPELINE = "delete pipeline", t.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", t.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", t.CLICK_QUICK_LINK = "click pipeline quick link", t
				}({}),
				d = function(t) {
					return t[t.success = 0] = "success", t[t.failure = 1] = "failure", t
				}({});
			const v = (t, r = {}) => {
				o().sendEvent(t, c({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Hv: function() {
					return c
				},
				Jg: function() {
					return f
				},
				_j: function() {
					return o
				},
				pZ: function() {
					return l
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
				g = t => {
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
					const a = g(r);
					return `https://${t}.${a}`
				},
				f = (t, r, a) => `${s(t,r)}/${a}`,
				l = () => "r2.dev",
				d = t => {
					const r = l();
					return `https://${t}.${r}`
				},
				v = (t, r) => `${d(t)}/${r}`
		},
		"../react/pages/security-center/tracking.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
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
		"../react/pages/shared-config/sparrowEvents.tsx": function(H, y, n) {
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
		"../react/pages/spectrum/tracking.tsx": function(H, y, n) {
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
		"../react/pages/traffic/argo/tracking.ts": function(H, y, n) {
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
		"../react/pages/traffic/load-balancing/tracking.ts": function(H, y, n) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(H, y, n) {
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
		"../react/pages/turnstile/tracking.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				N3: function() {
					return d
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

			function c(r) {
				for (var a = 1; a < arguments.length; a++) {
					var u = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(u).filter(function(p) {
						return Object.getOwnPropertyDescriptor(u, p).enumerable
					})), i.forEach(function(p) {
						g(r, p, u[p])
					})
				}
				return r
			}

			function g(r, a, u) {
				return a = s(a), a in r ? Object.defineProperty(r, a, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = u, r
			}

			function s(r) {
				var a = f(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(r, a) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var i = u.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const l = "TURNSTILE";
			let d = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const v = ({
					name: r,
					product: a = l,
					category: u = "user journey",
					page: i,
					additionalData: p = {}
				}) => {
					o().sendEvent(r, c({
						category: u,
						page: i,
						product: a
					}, p || {}))
				},
				t = () => {
					var r;
					return (r = Object.values(d)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(H, y, n) {
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
		"../react/pages/zoneless-workers/constants.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				$2: function() {
					return b
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
				Oj: function() {
					return a
				},
				QV: function() {
					return u
				},
				X$: function() {
					return T
				},
				X6: function() {
					return v
				},
				fE: function() {
					return d
				},
				im: function() {
					return p
				},
				rL: function() {
					return t
				},
				wW: function() {
					return f
				}
			});

			function e(_) {
				for (var S = 1; S < arguments.length; S++) {
					var z = arguments[S] != null ? Object(arguments[S]) : {},
						j = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(z).filter(function($) {
						return Object.getOwnPropertyDescriptor(z, $).enumerable
					})), j.forEach(function($) {
						o(_, $, z[$])
					})
				}
				return _
			}

			function o(_, S, z) {
				return S = c(S), S in _ ? Object.defineProperty(_, S, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[S] = z, _
			}

			function c(_) {
				var S = g(_, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function g(_, S) {
				if (typeof _ != "object" || _ === null) return _;
				var z = _[Symbol.toPrimitive];
				if (z !== void 0) {
					var j = z.call(_, S || "default");
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
				f = 800,
				l = "40rem",
				d = {
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
				u = {
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
				p = "YYYY-MM-DD HH:mm:SS ZZ",
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
		"../react/pages/zoneless-workers/routes.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Hv: function() {
					return l
				},
				L: function() {
					return c
				},
				Q9: function() {
					return g
				},
				_j: function() {
					return s
				},
				ky: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = d => `${d}.workers.dev`,
				c = (d, v, t) => `${t?`${t}.`:""}${d}.${o(v)}`,
				g = (d, v, t) => `https://${c(d,v,t)}`,
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
				f = "https://cron-triggers.cloudflareworkers.com",
				l = {
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				MN: function() {
					return c
				},
				Yg: function() {
					return s
				},
				i$: function() {
					return g
				},
				l3: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const c = async ([l, d]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: l,
					variables: d
				})
			})).body, g = async (...l) => (await e.get(...l)).body, s = l => async (d, v) => {
				const t = await fetch(d, v).then(r => r.json());
				return l.assertDecode(t)
			}, f = async (...l) => (await g(...l)).result;
			y.ZP = {
				fetcher: l => Array.isArray(l) ? f(...l) : f(l)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(H, y) {
				y()
			})(this, function() {
				"use strict";

				function H() {
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

					function g(E) {
						return !!(E && E !== document && E.nodeName !== "HTML" && E.nodeName !== "BODY" && "classList" in E && "contains" in E.classList)
					}

					function s(E) {
						var T = E.type,
							h = E.tagName;
						return !!(h == "INPUT" && c[T] && !E.readOnly || h == "TEXTAREA" && !E.readOnly || E.isContentEditable)
					}

					function f(E) {
						E.getAttribute("is-focus-visible") !== "" && E.setAttribute("is-focus-visible", "")
					}

					function l(E) {
						E.getAttribute("is-focus-visible") === "" && E.removeAttribute("is-focus-visible")
					}

					function d(E) {
						g(document.activeElement) && f(document.activeElement), n = !0
					}

					function v(E) {
						n = !1
					}

					function t(E) {
						!g(E.target) || (n || s(E.target)) && f(E.target)
					}

					function r(E) {
						!g(E.target) || E.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), l(E.target))
					}

					function a(E) {
						document.visibilityState == "hidden" && (e && (n = !0), u())
					}

					function u() {
						document.addEventListener("mousemove", p), document.addEventListener("mousedown", p), document.addEventListener("mouseup", p), document.addEventListener("pointermove", p), document.addEventListener("pointerdown", p), document.addEventListener("pointerup", p), document.addEventListener("touchmove", p), document.addEventListener("touchstart", p), document.addEventListener("touchend", p)
					}

					function i() {
						document.removeEventListener("mousemove", p), document.removeEventListener("mousedown", p), document.removeEventListener("mouseup", p), document.removeEventListener("pointermove", p), document.removeEventListener("pointerdown", p), document.removeEventListener("pointerup", p), document.removeEventListener("touchmove", p), document.removeEventListener("touchstart", p), document.removeEventListener("touchend", p)
					}

					function p(E) {
						E.target.nodeName.toLowerCase() !== "html" && (n = !1, i())
					}
					document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", v, !0), document.addEventListener("pointerdown", v, !0), document.addEventListener("touchstart", v, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", a, !0), u(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function y(n) {
					var e;

					function o() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && y(H)
			})
		},
		"../react/utils/bootstrap.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				$8: function() {
					return o
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return g
				},
				gm: function() {
					return c
				}
			});
			const e = () => {
					var s, f, l;
					return (s = window) === null || s === void 0 || (f = s.bootstrap) === null || f === void 0 || (l = f.data) === null || l === void 0 ? void 0 : l.security_token
				},
				o = () => {
					var s, f, l;
					return !!((s = n.g.bootstrap) === null || s === void 0 || (f = s.data) === null || f === void 0 || (l = f.user) === null || l === void 0 ? void 0 : l.id)
				},
				c = () => {
					var s, f;
					return !!((s = n.g.bootstrap) === null || s === void 0 || (f = s.data) === null || f === void 0 ? void 0 : f.is_kendo)
				},
				g = () => {
					var s, f, l, d;
					return (s = window) === null || s === void 0 || (f = s.bootstrap) === null || f === void 0 || (l = f.data) === null || l === void 0 || (d = l.user) === null || d === void 0 ? void 0 : d.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				O5: function() {
					return g
				},
				Xm: function() {
					return c
				},
				kT: function() {
					return l
				},
				wV: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var t;
					return ((t = window) === null || t === void 0 ? void 0 : t.OnetrustActiveGroups) || ""
				},
				c = () => (o() || "").indexOf("C0002") !== -1,
				g = () => (o() || "").indexOf("C0003") !== -1,
				s = () => (o() || "").indexOf("C0004") !== -1,
				f = () => (o() || "").indexOf("C0005") !== -1,
				l = t => {
					const r = ".cloudflare.com";
					document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				d = () => {
					var t;
					const r = (t = window.OneTrust) === null || t === void 0 ? void 0 : t.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				v = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				AI: function() {
					return p
				},
				S8: function() {
					return i
				},
				ZW: function() {
					return f
				},
				ay: function() {
					return E
				},
				fh: function() {
					return T
				},
				ly: function() {
					return d
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
				c = n("../../../common/intl/intl-types/src/index.ts"),
				g = n("../../../common/util/types/src/utils/index.ts");
			const s = "cf-sync-locale-with-cps",
				f = c.Q.en_US,
				l = "en_US",
				d = "cf-locale",
				v = D => (0, g.Yd)(c.Q).find(b => c.Q[b] === D) || l,
				t = [],
				r = [],
				a = [c.Q.de_DE, c.Q.en_US, c.Q.es_ES, c.Q.fr_FR, c.Q.it_IT, c.Q.pt_BR, c.Q.ko_KR, c.Q.ja_JP, c.Q.zh_CN, c.Q.zh_TW],
				u = {
					test: [...a, ...r, ...t],
					development: [...a, ...r, ...t],
					staging: [...a, ...r, ...t],
					production: [...a, ...r]
				},
				i = D => {
					const b = c.Q[D];
					return u.production.includes(b)
				},
				p = () => Object.keys(c.Q).filter(D => i(D)),
				E = D => {
					const b = c.Q[D];
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
		"../react/utils/translator.tsx": function(H, y, n) {
			"use strict";
			n.d(y, {
				QT: function() {
					return u
				},
				Vb: function() {
					return l
				},
				Yi: function() {
					return v
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
				c = n("../../../common/intl/intl-react/src/index.ts"),
				g = n("../flags.ts");
			const s = new o.Z({
				pseudoLoc: (0, g.J8)("is_pseudo_loc")
			});

			function f(i, ...p) {
				return s.t(i, ...p)
			}
			const l = s;

			function d(i, ...p) {
				return markdown(f(i, p))
			}

			function v(i) {
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

			function t(i, p) {
				return i in p ? p[i] : void 0
			}
			const r = c.cC,
				a = c.oc,
				u = c.QT
		},
		"../react/utils/url.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Ct: function() {
					return D
				},
				Fl: function() {
					return q
				},
				KT: function() {
					return N
				},
				NF: function() {
					return p
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
					return te
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
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				g = n("../react/pages/stream/routes.ts"),
				s = n("../react/pages/r2/routes.ts"),
				f = n("../react/pages/zoneless-workers/routes.ts"),
				l = n("../react/pages/pages/routes.ts");

			function d(P) {
				for (var O = 1; O < arguments.length; O++) {
					var I = arguments[O] != null ? Object(arguments[O]) : {},
						G = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(I).filter(function(X) {
						return Object.getOwnPropertyDescriptor(I, X).enumerable
					})), G.forEach(function(X) {
						v(P, X, I[X])
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
					var G = I.call(P, O || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(P)
			}
			const {
				endsWithSlash: a
			} = c.default, u = (P, O) => {
				const I = P.replace(a, "").split("/");
				return I.slice(0, 2).concat([O]).concat(I.slice(3)).join("/")
			}, i = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), p = P => `/${P.replace(a,"").replace(/^\//,"")}`, E = P => h("add-site", P), T = P => h("billing", P), h = (P, O) => O ? `/${O}${P?`/${P}`:""}` : `/?to=/:account/${P}`, C = () => {
				const P = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return P ? P[1] : null
			}, D = (P, O) => o().stringify(d({}, o().parse(P), O)), b = (P = "") => P.toString().replace(/([\/]{1,})$/, ""), _ = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], S = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, z = /^\/(\w{32,})(\/[^.]*)?/, j = P => _.includes(P), $ = P => !j(P), Z = P => !j(P) && z.test(P), k = P => !j(P) && S.test(P), x = P => S.exec(P), te = P => {
				if (k(P)) return P.split("/").filter(O => O.length > 0)[1]
			}, Y = P => z.exec(P), re = P => {
				if (Z(P)) {
					const O = Y(P);
					if (O) return O[1]
				}
			}, ee = P => Z(P) && P.split("/")[2] === "register-domain", pe = P => ee(P) ? P.split("/") : null, W = P => {
				if (k(P)) {
					const [, , , O, I, G, X, J] = P.split("/");
					return O === "traffic" && I === "load-balancing" && G === "pools" && X === "edit" && J
				}
			}, U = P => {
				const O = pe(P);
				if (O) return O[3]
			}, w = (P, O) => {
				var I, G;
				return ((I = P.pattern.match(/\:/g)) !== null && I !== void 0 ? I : []).length - ((G = O.pattern.match(/\:/g)) !== null && G !== void 0 ? G : []).length
			}, K = [...Object.values(g.C), ...Object.values(s._j), ...Object.values(f._j), ...Object.values(l._j)].sort(w);

			function q(P) {
				if (!$(P)) return P;
				for (const J of K)
					if (J.expression.test(P)) return J.pattern;
				const O = pe(P);
				if (O) {
					const [, , J, , ...ge] = O;
					return `/:accountId/${J}/:domainName/${ge.join("/")}`
				}
				if (W(P)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const G = x(P);
				if (G) {
					const [, , , , J] = G;
					return `/:accountId/:zoneName${J||""}`
				}
				const X = Y(P);
				if (X) {
					const [, , J] = X;
					return `/:accountId${J||""}`
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
						G = new URL(O);
					if (I.origin === G.origin) return `${I.pathname}${I.search}${I.hash}`
				} catch {}
			}
		},
		"../react/utils/zaraz.ts": function(H, y, n) {
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
		"../utils/getDashVersion.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				p: function() {
					return c
				},
				t: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var g, s;
					return (g = window) === null || g === void 0 || (s = g.build) === null || s === void 0 ? void 0 : s.dashVersion
				},
				c = () => {
					var g;
					return ((0, e.parse)((g = document) === null || g === void 0 ? void 0 : g.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Wi: function() {
					return De
				},
				IM: function() {
					return fe
				},
				yV: function() {
					return B
				},
				Ug: function() {
					return ot
				},
				v_: function() {
					return Q
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				c = n("../react/utils/bootstrap.ts"),
				g = n("../react/app/providers/storeContainer.js"),
				s = n("../react/common/selectors/languagePreferenceSelector.ts"),
				f = n("../flags.ts"),
				l = n("../../../../node_modules/cookie/index.js"),
				d = n("../react/utils/url.ts"),
				v = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../../../../node_modules/lodash-es/memoize.js"),
				a = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				u = n("../utils/getDashVersion.ts"),
				i = n("../react/common/selectors/accountSelectors.ts");

			function p(ie) {
				for (var le = 1; le < arguments.length; le++) {
					var me = arguments[le] != null ? Object(arguments[le]) : {},
						Ee = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && Ee.push.apply(Ee, Object.getOwnPropertySymbols(me).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(me, Ce).enumerable
					})), Ee.forEach(function(Ce) {
						E(ie, Ce, me[Ce])
					})
				}
				return ie
			}

			function E(ie, le, me) {
				return le = T(le), le in ie ? Object.defineProperty(ie, le, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ie[le] = me, ie
			}

			function T(ie) {
				var le = h(ie, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function h(ie, le) {
				if (typeof ie != "object" || ie === null) return ie;
				var me = ie[Symbol.toPrimitive];
				if (me !== void 0) {
					var Ee = me.call(ie, le || "default");
					if (typeof Ee != "object") return Ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(ie)
			}
			const C = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				D = (0, r.Z)(ie => {
					try {
						return C.assertDecode((0, l.parse)(ie))
					} catch (le) {
						return console.error(le), {}
					}
				}),
				b = ie => (le, me, Ee) => {
					try {
						const we = window.location.pathname,
							Me = (0, g.bh)().getState(),
							qe = D(document.cookie),
							at = p({
								page: (0, d.Fl)(Ee.page || window.location.pathname),
								dashVersion: (0, u.t)()
							}, qe);
						if (le === "identify") {
							var Ce, Be;
							const We = {
								gates: (0, a.T2)(Me) || {},
								country: (Ce = n.g) === null || Ce === void 0 || (Be = Ce.bootstrap) === null || Be === void 0 ? void 0 : Be.ip_country
							};
							return ie(le, me, p({}, at, We, Ee))
						} else {
							const We = {
								accountId: (0, d.uW)(we),
								zoneName: (0, d.hW)(we),
								domainName: (0, d.Uh)(we)
							};
							if ((0, d.qR)(we)) {
								var Ie;
								const M = (0, i.D0)(Me);
								We.isEntAccount = M == null || (Ie = M.meta) === null || Ie === void 0 ? void 0 : Ie.has_enterprise_zones
							}
							if ((0, d.el)(we)) {
								var _e;
								const M = (0, v.nA)(Me);
								We.zoneId = M == null ? void 0 : M.id, We.plan = M == null || (_e = M.plan) === null || _e === void 0 ? void 0 : _e.legacy_id
							}
							return ie(le, me, p({}, at, We, Ee))
						}
					} catch (we) {
						return console.error(we), ie(le, me, Ee)
					}
				},
				_ = ie => async (le, me, Ee) => {
					try {
						return await ie(le, me, Ee)
					} catch (Ce) {
						if (console.error(Ce), !Q()) throw Ce;
						return {
							status: "rejected",
							reason: Ce
						}
					}
				};
			var S = n("../react/common/middleware/sparrow/errors.ts"),
				z = n("../react/pages/firewall/bots/tracking.ts"),
				j = n("../react/pages/caching/tracking.tsx"),
				$ = n("../react/pages/turnstile/tracking.ts"),
				Z = n("../react/pages/firewall/settings/resources/utils/index.ts"),
				k = n("../react/pages/magic/packet-captures/constants.ts"),
				x = n("../react/pages/firewall/page-shield/tracking.ts"),
				te = n("../react/pages/firewall/rulesets/tracking.tsx"),
				Y = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				re = n("../react/pages/spectrum/tracking.tsx"),
				ee = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				pe = n("../react/pages/security-center/tracking.ts"),
				W = n("../react/pages/firewall/api-shield/tracking.ts"),
				U = n("../react/pages/home/configurations/lists/tracking.ts"),
				w = n("../react/pages/traffic/load-balancing/tracking.ts"),
				K = n("../react/pages/home/alerts/tracking.ts"),
				q = n("../react/pages/dns/dns-records/tracking.ts"),
				ae = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				N = n("../react/pages/traffic/argo/tracking.ts"),
				P = n("../react/pages/magic/network-monitoring/constants.ts"),
				O = n("../react/pages/firewall/security-analytics/logs/constants.ts"),
				I = n("../react/pages/magic/overview/tracking.ts"),
				G = n("../react/pages/hyperdrive/tracking.ts"),
				X = n("../react/pages/pipelines/tracking.ts"),
				J = n("../react/pages/home/domain-registration/tracking.ts"),
				ge = n("../react/pages/zoneless-workers/constants.ts"),
				Le = n("../react/pages/pages/constants.ts"),
				Oe = n("../react/pages/page-rules/tracking.ts"),
				F = n("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				se = n("../react/pages/shared-config/sparrowEvents.tsx"),
				Te = n("../react/pages/firewall/settings/cards/security-txt/helpers.ts");
			const Ne = ((ie, le, ...me) => t.eg.union([t.eg.literal(ie), t.eg.literal(le), ...me.map(Ee => t.eg.literal(Ee))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on edit snippet", "click on exposed_credentials", "click on content_scanning", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "Explore demo button click", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "Request trial button click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table traffic chart click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "zones table insights click", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", ge.QV.clickedDownloadAnalytics, ge.QV.clickedPrintAnalytics, ge.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Le.QV.toggledPagesSmartPlacement, Le.QV.downloadDemoProject, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", z.N3.INITIAL_FETCH_SCORES, z.N3.FETCH_CONFIGURATION, z.N3.INITIAL_FETCH_TIME_SERIES, z.N3.INITIAL_FETCH_ATTRIBUTES, z.N3.UPDATE_SETTINGS, z.N3.DELETE_RULE, z.N3.UPDATE_RULE, z.N3.FETCH_RULES, z.N3.CONFIGURE_BOT_MANAGEMENT, z.N3.WAF_RULES_REDIRECT, ee.F.TOGGLE_TCP_PROTECTION, ee.F.GET_TCP_PROTECTION_PREFIXES, ee.F.CREATE_TCP_PROTECTION_PREFIXES, ee.F.CREATE_TCP_PROTECTION_PREFIX, ee.F.UPDATE_TCP_PROTECTION_PREFIX, ee.F.DELETE_TCP_PROTECTION_PREFIX, ee.F.DELETE_TCP_PROTECTION_PREFIXES, ee.F.GET_TCP_PROTECTION_ALLOWLIST, ee.F.CREATE_TCP_PROTECTION_ALLOWLIST, ee.F.UPDATE_TCP_PROTECTION_ALLOWLIST, ee.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, ee.F.DELETE_TCP_PROTECTION_ALLOWLIST, ee.F.GET_SYN_PROTECTION_RULES, ee.F.GET_SYN_PROTECTION_RULE, ee.F.CREATE_SYN_PROTECTION_RULE, ee.F.UPDATE_SYN_PROTECTION_RULE, ee.F.DELETE_SYN_PROTECTION_RULE, ee.F.GET_TCP_FLOW_PROTECTION_RULES, ee.F.GET_TCP_FLOW_PROTECTION_RULE, ee.F.CREATE_TCP_FLOW_PROTECTION_RULE, ee.F.UPDATE_TCP_FLOW_PROTECTION_RULE, ee.F.DELETE_TCP_FLOW_PROTECTION_RULE, ee.F.GET_SYN_PROTECTION_FILTERS, ee.F.GET_SYN_PROTECTION_FILTER, ee.F.CREATE_SYN_PROTECTION_FILTER, ee.F.UPDATE_SYN_PROTECTION_FILTER, ee.F.DELETE_SYN_PROTECTION_FILTER, ee.F.GET_TCP_FLOW_PROTECTION_FILTERS, ee.F.GET_TCP_FLOW_PROTECTION_FILTER, ee.F.CREATE_TCP_FLOW_PROTECTION_FILTER, ee.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, ee.F.DELETE_TCP_FLOW_PROTECTION_FILTER, ee.F.GET_DNS_PROTECTION_RULES, ee.F.GET_DNS_PROTECTION_RULE, ee.F.CREATE_DNS_PROTECTION_RULE, ee.F.UPDATE_DNS_PROTECTION_RULE, ee.F.DELETE_DNS_PROTECTION_RULE, x.F.MANAGE_PAGE_SHIELD_POLICY, x.F.CONFIGURE_PAGE_SHIELD, x.F.VIEW_DETECTED_CONNECTIONS, x.F.VIEW_DETECTED_SCRIPTS, x.F.VIEW_PAGE_SHIELD_POLICIES, x.F.VIEW_PAGE_SHIELD_SETTINGS, U.y.CREATE_LIST, U.y.DELETE_LIST, U.y.ADD_LIST_ITEM, U.y.DELETE_LIST_ITEM, G.KO.PURCHASE_WORKERS_PAID, G.KO.LIST_CONFIGS, G.KO.CREATE_HYPERDRIVE_CONFIG, G.KO.VIEW_CONFIG_DETAILS, G.KO.UPDATE_CACHING_SETTINGS, G.KO.DELETE_HYPERDRIVE_CONFIG, G.KO.CLICK_HYPERDRIVE_DOCUMENTATION, G.KO.CLICK_GET_STARTED_GUIDE, G.KO.CLICK_CONNECTIVITY_GUIDES, G.KO.CLICK_QUICK_LINK, re.N.CNAME, re.N.IP_ADDRESS, re.N.LB, re.N.UPDATE_CNAME, re.N.UPDATE_IP_ADDRESS, re.N.UPDATE_LB, re.N.DISABLE, j.N.TIERED_CACHE, j.N.CACHE_PURGE, j.N.CACHE_ANALYTICS, ...(0, $.P)(), ...(0, te.x4)(), ...(0, Z.m8)(), Y.N.CREATE, Y.N.EVENTS, Y.N.ANALYTICS, Y.N.UPDATE, Y.N.GENERATE_PREVIEW, pe.R.INITIATE_URL_SCAN, pe.R.LOAD_SCAN_INFO, pe.v.EXPAND_INSIGHT_ROW, pe.v.CLICK_RESOLVE_BUTTON, pe.v.FOLLOW_RESOLVE_URL, pe.v.MANAGE_INSIGHT, pe.v.CLICK_SCAN_NOW, pe.v.CLICK_EXPORT_INSIGHTS, pe.v.BULK_ARCHIVE, W.Fj[W.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, W.Fj[W.kq.ENDPOINT_MANAGEMENT].detailedMetrics, W.Fj[W.kq.ENDPOINT_MANAGEMENT].createEndpoint, W.Fj[W.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, W.Fj[W.kq.ENDPOINT_MANAGEMENT].deployRouting, W.Fj[W.kq.ENDPOINT_MANAGEMENT].deleteRouting, W.Fj[W.kq.API_DISCOVERY].viewDiscoveredEndpoints, W.Fj[W.kq.API_DISCOVERY].saveDiscoveredEndpoint, W.Fj[W.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, W.Fj[W.kq.SCHEMA_VALIDATION].viewSchemasList, W.Fj[W.kq.SCHEMA_VALIDATION].uploadSchema, W.Fj[W.kq.SCHEMA_VALIDATION].viewSchemaAdoption, W.Fj[W.kq.SCHEMA_VALIDATION].downloadSchema, W.Fj[W.kq.SCHEMA_VALIDATION].deleteSchema, W.Fj[W.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, W.Fj[W.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, W.Fj[W.kq.SEQUENCE_ANALYTICS].viewSequencesPage, W.Fj[W.kq.JWT_VALIDATION].viewJWTRules, W.Fj[W.kq.JWT_VALIDATION].addJWTRule, W.Fj[W.kq.JWT_VALIDATION].editJWTRule, W.Fj[W.kq.JWT_VALIDATION].deleteJWTRule, W.Fj[W.kq.JWT_VALIDATION].reprioritizeJWTRule, W.Fj[W.kq.JWT_VALIDATION].viewJWTConfigs, W.Fj[W.kq.JWT_VALIDATION].addJWTConfig, W.Fj[W.kq.JWT_VALIDATION].editJWTConfig, W.Fj[W.kq.JWT_VALIDATION].deleteJWTConfig, W.Fj[W.kq.SETTINGS].redirectToFirewallRulesTemplate, W.Fj[W.kq.SETTINGS].redirectToPages, W.Fj[W.kq.SETTINGS].listSessionIdentifiers, W.Fj[W.kq.SETTINGS].listRequestsContainingSessionIdentifiers, W.Fj[W.kq.SETTINGS].addOrRemoveSessionIdentifiers, W.Fj[W.kq.SETTINGS].redirectToCustomRules, W.Fj[W.kq.SETTINGS].listAllFallthroughSchemas, W.Fj[W.kq.SEQUENCE_RULES].listSequenceRules, W.Fj[W.kq.SEQUENCE_RULES].deleteSequenceRule, W.Fj[W.kq.SEQUENCE_RULES].reorderSequenceRule, W.Fj[W.kq.SEQUENCE_RULES].createSequenceRule, W.Fj[W.kq.SEQUENCE_RULES].editSequenceRule, w.Z.CREATE_AND_DEPLOY, w.Z.ANALYTICS, K.y.SECONDARY_DNS_NOTIFICATION_CREATE, K.y.SECONDARY_DNS_NOTIFICATION_UPDATE, K.y.SECONDARY_DNS_NOTIFICATION_DELETE, q.U.ZONE_TRANSFER_SUCCESS, q.U.DNS_RECORD_CREATE, q.U.DNS_RECORD_UPDATE, q.U.DNS_RECORD_DELETE, ae.Y.PEER_DNS_CREATE, ae.Y.PEER_DNS_UPDATE, ae.Y.PEER_DNS_DELETE, ae.Y.ZONE_TRANSFER_ENABLE, ae.Y.ZONE_TRANSFER_DISABLE, N.V.ARGO_ENABLEMENT, N.V.ARGO_GEO_ANALYTICS_FETCH, N.V.ARGO_GLOBAL_ANALYTICS_FETCH, k.X.VIEW_BUCKETS_LIST, k.X.CREATE_BUCKET, k.X.VALIDATE_BUCKET, k.X.DELETE_BUCKET, k.X.VIEW_CAPTURES_LIST, k.X.CREATE_SIMPLE_CAPTURE, k.X.CREATE_FULL_CAPTURE, k.X.VIEW_FULL_CAPTURE, k.X.DOWNLOAD_SIMPLE_CAPTURE, P.bK.VIEW_RULES, P.bK.CREATE_RULE, P.bK.UPDATE_RULE, P.bK.DELETE_RULE, P.bK.VIEW_CONFIGURATION, P.bK.CREATE_CONFIGURATION, P.bK.UPDATE_CONFIGURATION, P.bK.DELETE_CONFIGURATION, I.r8.VIEW_ALERTS, I.r8.VIEW_ALERTS_HISTORY, I.r8.MAGIC_OVERVIEW_ANALYTICS, I.VZ.CREATE_SITE, I.VZ.CREATE_TUNNEL, I.VZ.CREATE_STATIC_ROUTE, O.o4.CLICK_ADAPTIVE_SAMPLING, O.o4.CLICK_TO_LOG_EXPLORER_BANNER, O.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, O.o4.CLICK_SWITCH_TO_RAW_LOGS, O.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", J.U.REGISTER_DOMAIN_SEARCH_SUBMIT, J.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, J.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, J.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, J.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, J.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, J.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, J.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, J.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, J.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, J.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, J.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, J.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, J.U.REGISTER_DOMAIN_CHECKOUT_ERROR, J.U.TRANSFER_DOMAIN_CHANGE_STEP, J.U.RENEW_DOMAIN_COMPLETED, J.U.RESTORE_DOMAIN_INIT, J.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, J.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, J.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, J.U.RESTORE_DOMAIN_FAILURE, J.U.RESTORE_DOMAIN_COMPLETED, J.U.DOMAIN_DELETE_INIT, J.U.DOMAIN_DELETE_COMPLETED, J.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, J.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, J.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, J.U.DOMAIN_DELETE_CONFIRM_DELETE, J.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, J.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, J.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, J.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, J.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, X.KO.CLICK_GET_STARTED_GUIDE, X.KO.CLICK_PIPELINE_DOCUMENTATION, X.KO.CLICK_QUICK_LINK, X.KO.CREATE_PIPELINE, X.KO.DELETE_PIPELINE, X.KO.LIST_PIPELINES, X.KO.VIEW_PIPELINE, F.S.EXISTING_DOMAIN, F.S.NEW_DOMAIN, F.S.WAF_RULESET, F.S.WORKERS, F.S.PAGES, F.S.R2, F.S.ACCOUNT_MEMBERS, Oe._.TEMPLATE_PRODUCT_SELECTED, Oe._.TEMPLATE_SELECTED, Oe._.TEMPLATE_SAVE_DRAFT, Oe._.TEMPLATE_CANCEL, Oe._.TEMPLATE_DEPLOY, se.D.CLICK_GO_BACK_SHARE_MODAL, se.D.CLICK_MENU_ITEM_SHARE, se.D.CLICK_ON_CANCEL_SHARE_MODAL, se.D.CLICK_ON_CLOSE_SHARE_MODAL, se.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, se.D.CLICK_ON_DELETE_RULESET, se.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, se.D.CLICK_ON_EDIT_SHARE_PERMISSION, se.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, se.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, Te.vc.CREATED, Te.vc.ENABLED, Te.vc.DISABLED, Te.vc.DELETED, Te.vc.UPDATED, Te.vc.DOWNLOADED),
				Ge = t.eg.exactStrict(t.eg.object({
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
				Ve = (ie, le) => {
					const [me, Ee] = Ye(le);
					let Ce, Be;
					return (0, t.nM)(Ne.decode(ie)) && (Ce = new S.Uh(ie)), Ee && Ee.length > 0 && (Be = new S.oV(ie, Ee)), [me, Ce, Be]
				},
				Ye = ie => {
					const le = Ge.decode(ie);
					if ((0, t.nM)(le)) {
						const me = le.left.map(({
							context: Ee
						}) => Ee.map(({
							key: Ce
						}) => Ce)).reduce((Ee, Ce) => Ee.concat(Ce), []).filter(Ee => Ee in ie);
						return [st(me, ie), me]
					}
					return [ie, []]
				},
				st = (ie, le) => Object.entries(le).reduce((me, [Ee, Ce]) => (ie.includes(Ee) || (me[Ee] = Ce), me), {}),
				He = ie => (le, me, Ee) => {
					const [Ce, Be, Ie] = Ve(me, Ee);
					if (Be) throw Be;
					return Ie && console.error(Ie), ie(le, me, Ce)
				};
			var Ue = n("../react/utils/zaraz.ts");
			const tt = {
					identify: !0
				},
				$e = ie => (le, me, Ee) => (tt[me] || Ue.tg === null || Ue.tg === void 0 || Ue.tg.track(me, Ee), ie(le, me, Ee));
			var Qe = n("../react/utils/cookiePreferences.ts");

			function Xe(ie) {
				for (var le = 1; le < arguments.length; le++) {
					var me = arguments[le] != null ? Object(arguments[le]) : {},
						Ee = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && Ee.push.apply(Ee, Object.getOwnPropertySymbols(me).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(me, Ce).enumerable
					})), Ee.forEach(function(Ce) {
						Ke(ie, Ce, me[Ce])
					})
				}
				return ie
			}

			function Ke(ie, le, me) {
				return le = nt(le), le in ie ? Object.defineProperty(ie, le, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ie[le] = me, ie
			}

			function nt(ie) {
				var le = Je(ie, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function Je(ie, le) {
				if (typeof ie != "object" || ie === null) return ie;
				var me = ie[Symbol.toPrimitive];
				if (me !== void 0) {
					var Ee = me.call(ie, le || "default");
					if (typeof Ee != "object") return Ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(ie)
			}
			const ot = ie => {
					o().init(Xe({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Q() && !(0, c.gm)() && De(),
						middlewares: [_, He, b, $e]
					}, ie))
				},
				B = () => {
					o().identify(Xe({}, (0, e.getAttribution)(), {
						locale: (0, s.r)((0, g.bh)().getState()),
						isCloudflare: !!(0, f.Jd)()
					}))
				},
				Q = () => !0,
				fe = () => {
					(0, Qe.kT)("sparrow_id")
				},
				De = () => (0, Qe.Xm)()
		},
		"../utils/initStyles.ts": function(H, y, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../react/app/providers/storeContainer.js");
			const c = "cfBaseStyles",
				g = document.head || document.getElementsByTagName("head")[0],
				s = l => {
					const d = [];
					for (let v in l.colors) {
						const t = l.colors[v];
						if (Array.isArray(t) && v !== "categorical")
							for (let r = 0; r < t.length; ++r) d.push(`--cf-${v}-${r}:${t[r]};`)
					}
					return d.join(`
`)
				},
				f = () => {
					const l = (0, e.Yc)(),
						d = `
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
					let v = document.getElementById(c);
					v ? v.innerText = "" : (v = document.createElement("style"), v.id = c, g.appendChild(v)), v.appendChild(document.createTextNode(d)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(f), y.Z = f
		},
		"../utils/sentry/lastSentEventId.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let c = "";
				return {
					setEventId: f => (!f || typeof f != "string" || (c = f), c),
					getEventId: () => c
				}
			})()
		},
		"../utils/zaraz.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Ro: function() {
					return r
				},
				bM: function() {
					return d
				},
				tg: function() {
					return l
				},
				yn: function() {
					return t
				}
			});

			function e(a) {
				for (var u = 1; u < arguments.length; u++) {
					var i = arguments[u] != null ? Object(arguments[u]) : {},
						p = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(i).filter(function(E) {
						return Object.getOwnPropertyDescriptor(i, E).enumerable
					})), p.forEach(function(E) {
						o(a, E, i[E])
					})
				}
				return a
			}

			function o(a, u, i) {
				return u = c(u), u in a ? Object.defineProperty(a, u, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[u] = i, a
			}

			function c(a) {
				var u = g(a, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function g(a, u) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var p = i.call(a, u || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(a)
			}
			const s = {
					track: (a, u) => null,
					set: (a, u) => console.log(`zaraz.set(${a}, ${u})`)
				},
				f = {
					track: (a, u) => {
						var i;
						(i = window.zaraz) === null || i === void 0 || i.track(a, e({}, u, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (a, u) => {
						var i;
						return (i = window.zaraz) === null || i === void 0 ? void 0 : i.set(a, u)
					}
				};
			let l;
			const d = () => {
					window.zaraz, l = f
				},
				v = ["email", "first_name", "last_name"],
				t = a => {
					v.forEach(u => {
						var i;
						(i = l) === null || i === void 0 || i.set(u, a[u])
					})
				},
				r = () => {
					t({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(H, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				g = n.n(c),
				s = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = n("../../../common/intl/intl-react/src/index.ts"),
				l = n("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				d = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				v = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				t = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				r = n("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				a = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				u = n("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				i = n("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				p = n("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				E = n("../../../common/component/component-filter-bar/src/constants.js"),
				T = n("../../../common/component/component-filter-bar/src/utils.js");

			function h(U) {
				for (var w = 1; w < arguments.length; w++) {
					var K = arguments[w] != null ? Object(arguments[w]) : {},
						q = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(K).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(K, ae).enumerable
					})), q.forEach(function(ae) {
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
					var q = K.call(U, w || "default");
					if (typeof q != "object") return q;
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
				z = (0, s.createStyledComponent)(() => ({
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
				x = (0, s.createStyledComponent)(({
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
				}, U), d.zx),
				te = (0, s.createStyledComponent)(() => ({
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
				ee = U => U.current ? [...U.current.children].reduce((w, K) => (K.offsetTop >= _ && w++, w), 0) : 0;
			let pe = 0;
			class W extends e.Component {
				constructor() {
					super();
					C(this, "overflowWrapper", (0, e.createRef)()), C(this, "hasOverflowed", w => {
						const K = ee(this.overflowWrapper);
						w.scrollHeight > _ && K >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (w.scrollHeight < _ || K === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), C(this, "addNewFilter", () => {
						const {
							filterDefinitions: w
						} = this.props, K = (0, T.TE)(w), q = Object.keys(K)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: q,
								operator: (0, T.uv)(q, K),
								value: (0, T.TT)(q, K)
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
						} = this.props, q = [...this.props.filters], ae = q[w];
						q.splice(w, 1), K(q), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
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
							filterChanges: q
						} = this.state, ae = typeof K[q.key].parse == "function" ? Array.isArray(q.value) ? q.value.map(K[q.key].parse) : K[q.key].parse(q.value) : q.value;
						if (K[q.key].validate && (Array.isArray(ae) ? !ae.every(K[q.key].validate) : !K[q.key].validate(ae))) return this.setState({
							invalid: !0
						});
						const N = [...this.props.filters],
							P = h({}, q, {
								value: ae
							}),
							O = !N[this.state.openFilter];
						O ? N.push(P) : N[this.state.openFilter] = h({}, q), this.props.handleFiltersChange(N, P), (O ? this.props.onAddFilter : this.props.onEditFilter)({
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
							var q, ae;
							((q = this.state.filterChanges) === null || q === void 0 ? void 0 : q.value) && !Array.isArray((ae = this.state.filterChanges) === null || ae === void 0 ? void 0 : ae.value) && (K.value = [this.state.filterChanges.value])
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
						filterDefinitions: q
					} = this.props, {
						operator: ae
					} = this.state.filterChanges, N = q[this.state.filterChanges.key], P = this.state.filterChanges.value, O = I => Array.isArray(I) ? I.map(G => G.value) : (I == null ? void 0 : I.value) || null;
					if (N.renderValueComponent) return N.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (N.type) {
						case E.k.select:
							return (0, T.dr)(ae) ? o().createElement(u.Z, {
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
								placeholder: o().createElement(f.cC, {
									id: N.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: N.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: I => {
									this.handlePendingValueChange(O(I))
								},
								isValidNewOption: I => {
									const G = N.validate;
									return !G && I || I && G([I])
								},
								getNewOptionData: (I, G) => ({
									value: I,
									label: G
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
							return (0, T.dr)(ae) ? o().createElement(u.Z, {
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
									example: q[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: I => {
									this.handlePendingValueChange(O(I))
								},
								isValidNewOption: I => {
									const G = N.validate;
									return !G && I || I && G([I])
								},
								getNewOptionData: (I, G) => ({
									value: I,
									label: G
								}),
								formatCreateLabel: I => w.t("filter_editor.value_create_label", {
									value: I
								})
							}) : o().createElement(f.oc, null, I => o().createElement(l.I, {
								value: this.state.filterChanges.value,
								onChange: G => this.handlePendingValueChange(G.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: I.t("analytics.report.filters.labels.placeholder", {
									example: q[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: w,
						filterDefinitions: K,
						modalStyles: q,
						filterIconType: ae,
						buttonStyle: N
					} = this.props, P = ee(this.overflowWrapper), O = `filterPanel${this.state.id}`, I = this.state.openFilter !== null;
					return o().createElement(f.oc, null, G => o().createElement(a.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(re, null, o().createElement(x, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": I,
						"aria-controls": O,
						inverted: !0,
						buttonStyle: N
					}, o().createElement(v.J, {
						type: ae || "add",
						mr: 1,
						label: G.t("common.add", {
							_: "Add"
						})
					}), o().createElement(f.cC, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(te, null, o().createElement(f.cC, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(S, {
						innerRef: this.overflowWrapper,
						overflowLimit: _,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((X, J) => {
						const {
							key: ge,
							operator: Le,
							value: Oe
						} = X, F = K[ge].ignoreLabelTranslation ? K[ge].label : G.t(K[ge].label), se = G.t(`analytics.report.filters.operators.${Le}`), Te = Array.isArray(Oe) ? Oe.map(Ne => w(ge, Ne, G)).join(", ") : w(ge, Oe, G), Ze = `${F} ${se} ${Te}`;
						return o().createElement(z, {
							key: `${ge}-${Le}-${Oe}`,
							title: Ze
						}, o().createElement(j, {
							onClick: () => this.handleOpenFilterEdit(J)
						}, o().createElement(a.ZC, {
							display: "flex"
						}, o().createElement($, null, F), o().createElement(Z, null, se), o().createElement(k, null, Te), (0, T.oN)(X, K) ? o().createElement(t.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(Y, {
							onClick: Ne => this.handleRemoveFilterClick(Ne, J),
							"aria-label": "remove"
						}, o().createElement(v.J, {
							type: "remove"
						})))))
					})), I && o().createElement(p.Z, {
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
						modalStyles: q
					}), this.state.hasOverflowed && o().createElement(i.Z, {
						count: P,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			C(W, "propTypes", {
				filterDefinitions: g().shape({}),
				filters: g().arrayOf(g().shape({
					key: g().string,
					operator: g().string,
					value: g().string
				})),
				handleFiltersChange: g().func.isRequired,
				formatLabel: g().func.isRequired,
				onAddFilter: g().func,
				onEditFilter: g().func,
				onRemoveFilter: g().func,
				children: g().node,
				modalStyles: g().object,
				filterIconType: g().string,
				buttonStyle: g().object
			}), y.Z = W
		},
		"../../../common/component/component-filter-bar/src/index.js": function(H, y, n) {
			"use strict";
			n.d(y, {
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
					return g.oN
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = n("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				c = n("../../../common/component/component-filter-bar/src/constants.js"),
				g = n("../../../common/component/component-filter-bar/src/utils.js")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				OZ: function() {
					return s
				},
				YB: function() {
					return g
				}
			});

			function e(l, d, v) {
				return d = o(d), d in l ? Object.defineProperty(l, d, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[d] = v, l
			}

			function o(l) {
				var d = c(l, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function c(l, d) {
				if (typeof l != "object" || l === null) return l;
				var v = l[Symbol.toPrimitive];
				if (v !== void 0) {
					var t = v.call(l, d || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(l)
			}
			class g extends Error {
				constructor(d, v) {
					super(v);
					e(this, "translationKey", void 0), this.translationKey = d, this.name = "TranslatorError"
				}
			}
			class s extends g {
				constructor(d) {
					super(d, `Translation key not found: ${d}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var f = null
		},
		"../../../common/intl/intl-react/src/I18nProvider.tsx": function(H, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(v) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (v[a] = r[a])
					}
					return v
				}, g.apply(this, arguments)
			}

			function s(v, t) {
				if (v == null) return {};
				var r = f(v, t),
					a, u;
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(v);
					for (u = 0; u < i.length; u++) a = i[u], !(t.indexOf(a) >= 0) && (!Object.prototype.propertyIsEnumerable.call(v, a) || (r[a] = v[a]))
				}
				return r
			}

			function f(v, t) {
				if (v == null) return {};
				var r = {},
					a = Object.keys(v),
					u, i;
				for (i = 0; i < a.length; i++) u = a[i], !(t.indexOf(u) >= 0) && (r[u] = v[u]);
				return r
			}
			class l extends e.Component {
				constructor(t) {
					super(t);
					const {
						locale: r,
						phrases: a,
						translator: u
					} = t;
					r && u.locale(r), a && u.extend(a)
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
			const d = v => {
				let {
					translator: t
				} = v, r = s(v, ["translator"]);
				const a = () => e.createElement(c.oc, null, u => e.createElement(l, g({
					translator: u
				}, r)));
				return t ? (t.locale(r.locale), e.createElement(c.bd, {
					value: t
				}, a())) : a()
			};
			y.Z = d
		},
		"../../../common/intl/intl-react/src/index.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				oc: function() {
					return d.oc
				},
				lm: function() {
					return o.Z
				},
				bd: function() {
					return e.Z
				},
				RD: function() {
					return z
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
				c = n("webpack/sharing/consume/default/react/react"),
				g = n.n(c),
				s = n("../../../../node_modules/lodash/escape.js"),
				f = n.n(s),
				l = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				d = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function v(j) {
				for (var $ = 1; $ < arguments.length; $++) {
					var Z = arguments[$] != null ? Object(arguments[$]) : {},
						k = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(Z).filter(function(x) {
						return Object.getOwnPropertyDescriptor(Z, x).enumerable
					})), k.forEach(function(x) {
						t(j, x, Z[x])
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

			function u() {
				return u = Object.assign ? Object.assign.bind() : function(j) {
					for (var $ = 1; $ < arguments.length; $++) {
						var Z = arguments[$];
						for (var k in Z) Object.prototype.hasOwnProperty.call(Z, k) && (j[k] = Z[k])
					}
					return j
				}, u.apply(this, arguments)
			}
			const i = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				p = /(?:\r\n|\r|\n)/g;

			function E(j, $, Z) {
				return c.createElement("span", {
					key: j,
					"data-testid": Z,
					dangerouslySetInnerHTML: {
						__html: $
					}
				})
			}

			function T(j, $ = [], Z = [], k) {
				let x = 0;
				const te = j.replace(p, "").split(i);
				if (te.length === 1) return [E(x, j, k)];
				const Y = [],
					re = te.shift();
				if (re) {
					const ee = E(x, re, k);
					Y.push(ee), typeof ee != "string" && x++
				}
				for (const [ee, pe, W] of h(te)) {
					$[ee] || window.console && console.warn(`Missing Component for translation key: ${j}, index: ${ee}. Fragment will be used.`);
					const U = $[ee] || c.Fragment,
						w = Z[ee] || {},
						K = E(0, pe);
					if (Y.push(c.createElement(U, u({
							key: x
						}, w), K)), x++, W) {
						const q = E(x, W);
						Y.push(q), typeof q != "string" && x++
					}
				}
				return Y
			}

			function h(j) {
				if (!j.length) return [];
				const [$, Z, k, x] = j.slice(0, 4);
				return [
					[parseInt($ || k), Z || "", x]
				].concat(h(j.slice(4, j.length)))
			}

			function C({
				id: j = "",
				smartCount: $,
				_: Z,
				values: k,
				applyMarkdown: x,
				Components: te,
				componentProps: Y,
				testId: re
			}) {
				return c.createElement(d.oc, null, ee => {
					k && Object.keys(k).forEach(w => k[w] = f()(k[w])), Y && Y.forEach(w => {
						Object.keys(w).forEach(K => {
							typeof w[K] == "string" && (w[K] = f()(w[K]))
						})
					});
					const pe = v({
							smart_count: $,
							_: Z
						}, k),
						W = x ? (0, l.Z)(ee.t(j.toString(), pe), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : ee.t(j.toString(), pe),
						U = T(W, te, Y, re);
					return U.length > 1 ? c.createElement(c.Fragment, null, U) : U[0]
				})
			}
			var D = C,
				b = n("../../../common/intl/intl-react/src/withTranslator.tsx"),
				_ = n("../../../common/intl/intl-react/src/useI18n.tsx"),
				S = n("../../../common/intl/intl-types/src/index.ts"),
				z = g().createContext(S.Q.en_US)
		},
		"../../../common/util/types/src/api/domain.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
				Aw: function() {
					return S
				},
				Ib: function() {
					return b
				},
				Ks: function() {
					return z
				},
				MS: function() {
					return _
				},
				PN: function() {
					return p
				},
				Pp: function() {
					return g
				},
				Q3: function() {
					return u
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
				c = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				g = e.eg.object({
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
				f = e.eg.object({
					registrant: g.optional,
					technical: g.optional,
					administrator: g.optional,
					billing: g.optional
				}),
				l = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: f.optional,
					years: e.eg.number
				}),
				d = e.eg.object({
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
					fees: d.optional,
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
				u = e.eg.object({
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
			let p = function($) {
				return $.PENDING = "pending", $.VERIFIED = "verified", $.REJECTED = "rejected", $.PENDING_DELETE = "pending_delete", $.DELETED = "deleted", $
			}({});
			const E = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(p),
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
				z = e.eg.object({
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
		"../../../common/util/types/src/utils/index.ts": function(H, y, n) {
			"use strict";
			n.d(y, {
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
			const o = (c, g) => {
				if (g !== void 0) throw new Error("Unexpected object: " + c);
				return g
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(H, y, n) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(c) {
				if (!n.o(e, c)) return Promise.resolve().then(function() {
					var f = new Error("Cannot find module '" + c + "'");
					throw f.code = "MODULE_NOT_FOUND", f
				});
				var g = e[c],
					s = g[0];
				return n.e(g[1]).then(function() {
					return n.t(s, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", H.exports = o
		}
	}
]);

//# debugId=1932aeb4-b280-5b4d-9766-10ddb0c83992