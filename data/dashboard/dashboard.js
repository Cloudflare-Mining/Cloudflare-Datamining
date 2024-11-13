! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ea884da3-1585-5017-8d4d-df79442da4b0")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				J8: function() {
					return a
				},
				Jd: function() {
					return i
				},
				QY: function() {
					return c
				},
				Qw: function() {
					return u
				},
				ki: function() {
					return p
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/utils/url.ts"),
				l = t("../../../../node_modules/query-string/query-string.js"),
				_ = t.n(l),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f;
			const u = () => Object.keys(s.Z).reduce((g, v) => (v.indexOf("cf_beta.") === 0 && s.Z.get(v) === "true" && g.push(v.split(".").slice(1).join(".")), g), []),
				p = () => {
					var g, v, y;
					return ((g = window) === null || g === void 0 || (v = g.bootstrap) === null || v === void 0 || (y = v.data) === null || y === void 0 ? void 0 : y.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((f = window) === null || f === void 0 ? void 0 : f.location) && s.Z) {
				const g = _().parse(window.location.search);
				g.beta_on && s.Z.set(`cf_beta.${g.beta_on}`, !0), g.beta_off && s.Z.set(`cf_beta.${g.beta_off}`, !1)
			}
			const h = {},
				n = g => {
					var v, y, P;
					return Object.prototype.hasOwnProperty.call(h, g) ? h[g] : ((v = window) === null || v === void 0 || (y = v.bootstrap) === null || y === void 0 || (P = y.data) === null || P === void 0 ? void 0 : P.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(S => S === g) ? (h[g] = !0, !0) : (h[g] = !1, !1)
				},
				r = g => s.Z ? s.Z.get(`cf_beta.${g}`) === !0 : !1,
				a = g => r(g) || n(g),
				d = () => !0,
				i = () => {
					var g, v, y;
					return ((g = window) === null || g === void 0 || (v = g.bootstrap) === null || v === void 0 || (y = v.data) === null || y === void 0 ? void 0 : y.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				c = g => {
					const v = (0, e.uF)(g),
						y = (v == null ? void 0 : v.roles) || [];
					return (0, o.qR)(location.pathname) && y.length === 1 && y.some(P => P === "Administrator Read Only")
				}
		},
		"../init.ts": function(x, E, t) {
			"use strict";
			t.r(E);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				l = t("../libs/init/initGlobal.ts"),
				_ = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				s = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function f(T) {
				for (var D = 1; D < arguments.length; D++) {
					var G = arguments[D] != null ? Object(arguments[D]) : {},
						te = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(G).filter(function(le) {
						return Object.getOwnPropertyDescriptor(G, le).enumerable
					})), te.forEach(function(le) {
						u(T, le, G[le])
					})
				}
				return T
			}

			function u(T, D, G) {
				return D = p(D), D in T ? Object.defineProperty(T, D, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[D] = G, T
			}

			function p(T) {
				var D = h(T, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function h(T, D) {
				if (typeof T != "object" || T === null) return T;
				var G = T[Symbol.toPrimitive];
				if (G !== void 0) {
					var te = G.call(T, D || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(T)
			}
			const n = T => {
				const D = T && T.headers || {},
					G = new Headers(D);
				return G.append("X-Cross-Site-Security", "dash"), f({}, T, {
					headers: G
				})
			};
			(0, s.register)({
				request: (T, D) => {
					try {
						return new URL(T), T === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", D] : [T, D]
					} catch {
						return [T, n(D)]
					}
				}
			});
			var r = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				a = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				d = t("../react/app/providers/storeContainer.js");
			let i = "";
			const c = 61;

			function g(T) {
				const D = T.substr(1);
				if (D && i !== D) {
					const G = document.getElementById(D);
					if (G) {
						const te = G.getBoundingClientRect().top;
						if (te > 0) {
							const le = te - c;
							document.documentElement.scrollTop = le
						}
					}
				}
				i = D
			}

			function v(T) {
				T.listen(D => g(D.hash))
			}
			var y = t("../../../../node_modules/cookie/index.js"),
				P = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const S = "CF_dash_version",
				A = "cf_fv_preview",
				b = "current",
				I = "hash",
				F = "deploymentPreview",
				z = "fragmentPreview",
				V = T => T === b ? ee() : j(),
				ee = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				j = (T = 72) => {
					const D = 36e5;
					return new Date(Date.now() + T * D)
				},
				oe = T => {
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
				ne = (T, D = !1) => {
					var G;
					const te = oe(T),
						le = `
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
    <h1 id="error-title">${te.title}</h1>
    <p id="error-description">${te.description}</p>
  </div>
  `,
						he = D ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${P.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(G=window.build)===null||G===void 0?void 0:G.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return le + he
				},
				Z = T => {
					var D;
					const G = document.getElementById(T);
					!G || (D = G.parentNode) === null || D === void 0 || D.removeChild(G)
				};

			function se() {
				const T = document.getElementById("loading-state");
				T == null || T.classList.add("hide"), T == null || T.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(Z)
				})
			}

			function J(T) {
				var D;
				const G = document.getElementById("loading-state"),
					te = !!((D = y.parse(document.cookie)) === null || D === void 0 ? void 0 : D[S]);
				!G || (G.innerHTML = ne(T == null ? void 0 : T.code, te))
			}
			var ie = t("../utils/initStyles.ts"),
				$ = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				X = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				U = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				W = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				Y = t("../../../../node_modules/history/esm/history.js"),
				k = (0, Y.lX)(),
				L = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				O = t("../react/utils/url.ts");
			const R = (0, L.Rf)();
			let M;

			function H(T) {
				return K(T, "react-router-v5")
			}

			function K(T, D) {
				return (G, te = !0, le = !0) => {
					te && R && R.location && (M = G({
						name: (0, O.Fl)(R.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": D
						}
					})), le && T.listen && T.listen((he, ve) => {
						if (ve && (ve === "PUSH" || ve === "POP")) {
							M && M.finish();
							const je = {
								"routing.instrumentation": D
							};
							M = G({
								name: (0, O.Fl)(he.pathname),
								op: "navigation",
								tags: je
							})
						}
					})
				}
			}
			var ge = t("../react/common/selectors/languagePreferenceSelector.ts"),
				Ie = t("../flags.ts"),
				Le = t("../utils/getDashVersion.ts"),
				De = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				B = t.n(De),
				de = t("../../../common/intl/intl-core/src/errors.ts"),
				Oe = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				ze = t("../react/common/middleware/sparrow/errors.ts");
			const Be = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				Ve = !0,
				Ze = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				st = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function He(T, D, G) {
				return D = Ye(D), D in T ? Object.defineProperty(T, D, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[D] = G, T
			}

			function Ye(T) {
				var D = Ke(T, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function Ke(T, D) {
				if (typeof T != "object" || T === null) return T;
				var G = T[Symbol.toPrimitive];
				if (G !== void 0) {
					var te = G.call(T, D || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(T)
			}
			class xe {
				constructor() {
					He(this, "name", xe.id)
				}
				setupOnce() {
					t.g.console && (0, Oe.hl)(t.g.console, "error", D => (...G) => {
						const te = G.find(le => le instanceof Error);
						if (Be && te) {
							let le, he = !0;
							if (te instanceof ze.ez) {
								const ve = te instanceof ze.oV ? te.invalidProperties : void 0;
								le = {
									tags: {
										"sparrow.eventName": te.eventName
									},
									extra: {
										sparrow: {
											eventName: te.eventName,
											invalidProperties: ve
										}
									},
									fingerprint: [te.name ? te.name : "SparrowValidationError"]
								}, he = !1
							} else if (te instanceof De.SparrowIdCookieError) le = {
								extra: {
									sparrowIdCookie: te.cookie
								},
								fingerprint: [te.name ? te.name : "SparrowIdCookieError"]
							};
							else if (te.name === "ChunkLoadError") {
								le = {
									fingerprint: [te.name]
								};
								try {
									le.tags = {
										chunkId: te.message.split(" ")[2],
										chunkUrl: te.request
									}
								} catch {}
							} else te instanceof de.YB && (le = {
								fingerprint: ["TranslatorError", te.translationKey]
							});
							he && r.Tb(te, le)
						}
						typeof D == "function" && D.apply(t.g.console, G)
					})
				}
			}
			He(xe, "id", "ConsoleErrorIntegration");
			var Je = null,
				Qe = t("../utils/sentry/lastSentEventId.ts"),
				Ge = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				qe = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const Xe = T => {
					const D = async G => {
						var te, le;
						const he = {
							envelope: G.body,
							url: T.url,
							isPreviewDeploy: (te = window) === null || te === void 0 || (le = te.build) === null || le === void 0 ? void 0 : le.isPreviewDeploy,
							release: (0, Le.t)()
						};
						try {
							const ve = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(he)
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
					return Ge.q(T, D)
				},
				et = () => {
					if (Be && Ve) {
						var T, D, G, te, le, he, ve, je, ot, it;
						let Ot = "production";
						((T = window) === null || T === void 0 || (D = T.build) === null || D === void 0 ? void 0 : D.isPreviewDeploy) && (Ot += "-preview"), X.S({
							dsn: Be,
							release: (0, Le.t)(),
							environment: Ot,
							ignoreErrors: st,
							allowUrls: Ze,
							autoSessionTracking: !1,
							integrations: [new U.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new xe, new W.jK.BrowserTracing({
								routingInstrumentation: H(k)
							})],
							tracesSampleRate: 0,
							transport: Xe,
							beforeSend: Kt => (Qe.e.setEventId(Kt.event_id), Kt)
						});
						const qt = (0, d.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, Ie.Qw)(),
							USER_BETA_FLAGS: (0, Ie.ki)(),
							meta: {
								connection: {
									type: (G = window) === null || G === void 0 || (te = G.navigator) === null || te === void 0 || (le = te.connection) === null || le === void 0 ? void 0 : le.effectiveType,
									bandwidth: (he = window) === null || he === void 0 || (ve = he.navigator) === null || ve === void 0 || (je = ve.connection) === null || je === void 0 ? void 0 : je.downlink
								},
								languagePreference: (0, ge.r)(qt),
								isPreviewDeploy: (ot = window) === null || ot === void 0 || (it = ot.build) === null || it === void 0 ? void 0 : it.isPreviewDeploy
							},
							utilGates: (0, $.T2)(qt)
						}), window.addEventListener("unhandledrejection", function(Kt) {})
					}
				},
				N = T => {
					T ? r.av({
						id: T
					}) : r.av(null)
				};
			var q = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Me = () => {
					let T;
					try {
						T = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), T = window.location.search
					}
					if (!T.includes("remote[")) return;
					const D = new URLSearchParams(T),
						G = {};
					for (let [te, le] of D) te.includes("remote") && (G[te.replace(/remote\[|\]/g, "")] = le);
					q.Z.set("mfe-remotes", JSON.stringify(G))
				},
				Se = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				ce = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const ue = "ANON_USER_ID";

			function fe() {
				var T, D, G, te;
				let le = (T = t.g) === null || T === void 0 || (D = T.bootstrap) === null || D === void 0 || (G = D.data) === null || G === void 0 || (te = G.user) === null || te === void 0 ? void 0 : te.id;
				if (!le) {
					let he = q.Z.get(ue);
					if (!he) {
						let ve = (0, ce.Z)();
						q.Z.set(ue, ve), he = ve
					}
					return he
				}
				return le
			}
			async function Ee() {
				const T = (0, d.bh)();
				T.dispatch((0, Se.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await T.dispatch((0, $.UL)({
					userId: fe()
				}))
			}
			var be = t("../libs/init/initBootstrap.ts"),
				Pe = t("webpack/sharing/consume/default/react/react"),
				_e = t.n(Pe),
				Ue = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				we = t("webpack/sharing/consume/default/react-dom/react-dom"),
				$e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				rt = t("../../../../node_modules/swr/core/dist/index.mjs"),
				at = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				w = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Q = t("../react/shims/focus-visible.js"),
				pe = t("../react/app/components/DeepLink/index.ts"),
				ye = t("../../../../node_modules/prop-types/index.js"),
				Te = t.n(ye),
				Re = t("../react/utils/translator.tsx"),
				tt = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				Ae = t("../../../dash/intl/intl-translations/src/index.ts"),
				Pt = t("../../../../node_modules/query-string/query-string.js"),
				ct = t.n(Pt),
				Nt = t("../react/common/actions/userActions.ts"),
				dt = t("../react/common/selectors/userSelectors.ts"),
				nt = t("../react/utils/i18n.ts"),
				It = t("../react/utils/bootstrap.ts");

			function lt(T) {
				for (var D = 1; D < arguments.length; D++) {
					var G = arguments[D] != null ? Object(arguments[D]) : {},
						te = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(G).filter(function(le) {
						return Object.getOwnPropertyDescriptor(G, le).enumerable
					})), te.forEach(function(le) {
						Bt(T, le, G[le])
					})
				}
				return T
			}

			function Bt(T, D, G) {
				return D = Ut(D), D in T ? Object.defineProperty(T, D, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[D] = G, T
			}

			function Ut(T) {
				var D = Ft(T, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function Ft(T, D) {
				if (typeof T != "object" || T === null) return T;
				var G = T[Symbol.toPrimitive];
				if (G !== void 0) {
					var te = G.call(T, D || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(T)
			}
			let We = ct().parse(location.search);
			const Lt = T => {
					const D = (0, It.$8)() ? [(0, Ae.Fy)(Ae.if.changes), (0, Ae.Fy)(Ae.if.common), (0, Ae.Fy)(Ae.if.navigation), (0, Ae.Fy)(Ae.if.overview), (0, Ae.Fy)(Ae.if.onboarding), (0, Ae.Fy)(Ae.if.invite), (0, Ae.Fy)(Ae.if.login), (0, Ae.Fy)(Ae.if.dns), (0, Ae.Fy)(Ae.n4.ssl_tls), (0, Ae.Fy)(Ae.if.message_inbox), (0, Ae.Fy)(Ae.if.welcome)] : [(0, Ae.Fy)(Ae.if.common), (0, Ae.Fy)(Ae.if.invite), (0, Ae.Fy)(Ae.if.login), (0, Ae.Fy)(Ae.if.onboarding)];
					We.lang ? jt(T) : q.Z.get(nt.th) && Dt(T, (0, nt.Kd)());
					const G = async te => (await Promise.all(D.map(he => he(te)))).reduce((he, ve) => lt({}, he, ve), {});
					return _e().createElement(tt.LocaleContext.Provider, {
						value: T.languagePreference
					}, _e().createElement(tt.I18nProvider, {
						translator: Re.Vb,
						locale: T.languagePreference
					}, _e().createElement(tt.I18nLoader, {
						loadPhrases: G
					}, T.children)))
				},
				jt = async T => {
					let D = We.lang.substring(0, We.lang.length - 2) + We.lang.substring(We.lang.length - 2, We.lang.length).toUpperCase();
					if (!(0, ge.v)(D)) {
						console.warn(`${D} is not a supported locale.`), delete We.lang, T.history.replace({
							search: ct().stringify(We)
						});
						return
					}(0, nt.i_)(D), delete We.lang, Dt(T, D), T.isAuthenticated || T.history.replace({
						search: ct().stringify(We)
					})
				}, Dt = async (T, D) => {
					if (T.isAuthenticated) try {
						await T.setUserCommPreferences({
							"language-locale": D
						}, {
							hideErrorAlert: !0
						}), q.Z.remove(nt.th), T.history.replace({
							search: ct().stringify(We)
						})
					} catch (G) {
						q.Z.set(nt.th, !0), console.error(G)
					} else q.Z.set(nt.th, !0)
				}, St = T => {
					const D = (0, dt.PR)(T);
					return {
						isAuthenticated: !!(D && D.id),
						languagePreference: (0, nt.Kd)() || (0, ge.r)(T)
					}
				}, xt = {
					setUserCommPreferences: Nt.V_
				};
			var gt = (0, Ue.withRouter)((0, $e.connect)(St, xt)(Lt));
			Lt.propTypes = {
				history: Te().object,
				languagePreference: Te().string.isRequired,
				children: Te().node.isRequired,
				isAuthenticated: Te().bool,
				setUserCommPreferences: Te().func.isRequired
			};
			var $t = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Wt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let ft;
			const zt = ({
				selectorPrefix: T = "c_"
			} = {}) => (ft || (ft = (0, Wt.Z)({
				dev: !1,
				selectorPrefix: T
			})), ft);
			var wt = t("../react/common/components/ModalManager.tsx"),
				Gt = t("../react/app/components/ErrorBoundary.tsx"),
				Ht = t("../react/common/actions/notificationsActions.ts");
			const C = (t.g.bootstrap || {}).data || {};
			class ae extends _e().Component {
				componentDidMount() {
					C.messages && this.dispatchNotificationActions(C.messages)
				}
				dispatchNotificationActions(D) {
					D.forEach(G => {
						const {
							type: te,
							message: le,
							persist: he
						} = G;
						["success", "info", "warn", "error"].includes(te) && this.props.notifyAdd(te, (0, Re.ZP)(le), {
							persist: !!he
						})
					})
				}
				render() {
					return null
				}
			}
			var ke = (0, Ue.withRouter)((0, $e.connect)(null, {
				notifyAdd: Ht.IH
			})(ae));
			ae.propTypes = {
				notifyAdd: Te().func.isRequired
			};
			var Ne = t("../react/app/redux/index.ts");

			function _t() {
				var T;
				const D = (0, Ne.p4)(dt.PR),
					G = (D == null || (T = D.email) === null || T === void 0 ? void 0 : T.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					te = (0, Se.Yc)();
				(0, Pe.useEffect)(() => {
					te({
						userType: G
					})
				}, [G, te])
			}
			var pt = t("../react/common/selectors/entitlementsSelectors.ts"),
				mt = t("../react/common/selectors/accountSelectors.ts");
			const Et = ["accountId", "is_ent"];

			function yt() {
				const T = (0, Se.f7)(),
					D = (0, Ue.useHistory)(),
					G = (0, O.uW)(D.location.pathname),
					te = (0, Se.Yc)(),
					le = (0, Se.O$)(),
					he = (0, Ne.p4)(pt.u1),
					ve = !he.isRequesting && !!he.data,
					je = (0, Ne.p4)(pt.p1),
					ot = (0, Ne.p4)(mt.Xu),
					it = (0, Ne.p4)(mt.uF),
					Ot = !ot.isRequesting && !!ot.data;
				(0, Pe.useEffect)(() => {
					G && Ot && it && ve && G === it.account.id ? te({
						accountId: it.account.id,
						is_ent: je
					}) : (!G || G in T && T.accountId !== G) && le(Et)
				}, [Ot, it, te, le, ve, je, G, T])
			}
			var vt = t("../react/common/selectors/zoneSelectors.ts");

			function ht() {
				const T = (0, Ne.p4)(vt.nA),
					D = (0, Se.Yc)();
				(0, Pe.useEffect)(() => {
					var G;
					D({
						zone_id: T == null ? void 0 : T.id,
						zone_plan: T == null || (G = T.plan) === null || G === void 0 ? void 0 : G.legacy_id
					})
				}, [T, D])
			}
			const Ct = () => (_t(), yt(), ht(), null);
			var bt = t("../react/app/components/Persistence/index.tsx"),
				Tt = t("../node_modules/@cloudflare/elements/es/index.js"),
				Fe = t("../react/app/components/LoadingSuspense.tsx");
			const Mt = _e().lazy(() => Promise.all([t.e(85175), t.e(2480), t.e(10008), t.e(39957), t.e(94012), t.e(97999), t.e(72019), t.e(26341), t.e(5668), t.e(60091), t.e(45616), t.e(77216), t.e(39760), t.e(94923), t.e(60734), t.e(40758), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var en = () => _e().createElement(Fe.Z, null, _e().createElement(Mt, null));
			const tn = () => (Pe.useEffect(() => se, []), null);
			var nn = t("../../../../node_modules/moment/moment.js"),
				Vt = t.n(nn);
			const on = T => {
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
				rn = () => {
					const T = (0, Ne.p4)(ge.r);
					(0, Pe.useEffect)(() => {
						const D = on(T);
						D !== Vt().locale() && Vt().locale(D), document.documentElement.lang = T
					}, [T])
				},
				an = () => {
					(0, Pe.useEffect)(() => {
						async function T() {
							var D, G;
							let te;
							if (((D = window) === null || D === void 0 || (G = D.build) === null || G === void 0 ? void 0 : G.isPreviewDeploy) && (te = "cookie"), !!te) try {
								const le = document.head.querySelector("link[rel=icon]");
								le && (le.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${te}.ico`)).default)
							} catch {}
						}
						T()
					}, [])
				};
			var sn = t("../react/common/constants/constants.ts");
			const cn = () => {
					var T;
					const D = (0, Ue.useLocation)(),
						[G, te] = (0, Pe.useState)(((T = window) === null || T === void 0 ? void 0 : T.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Pe.useEffect)(() => {
						const le = ct().parse(D.search);
						if (le.pt && q.Z.set(sn.sJ, le.pt), le == null ? void 0 : le.devPanel) {
							var he, ve;
							(he = window) === null || he === void 0 || (ve = he.localStorage) === null || ve === void 0 || ve.setItem("gates_devtools_ui_gates_controller_enabled", "true"), te(!0)
						}
					}, [D.search]), {
						devPanelEnabled: G
					}
				},
				ln = ({
					id: T,
					customDataLayer: D,
					dataLayerName: G = "dataLayer"
				}) => {
					const te = `<iframe src="https://www.googletagmanager.com/ns.html?id=${T}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						le = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${G}', '${T}')`,
						he = `
    window.${G} = window.${G} || [];
    window.${G}.push(${JSON.stringify(D)})
  `;
					return {
						iframe: te,
						script: le,
						dataLayerHTML: he
					}
				},
				un = T => {
					const D = document.createElement("script");
					return D.innerHTML = T, D.async = !0, D
				},
				dn = T => {
					const D = document.createElement("noscript");
					return D.innerHTML = T, D
				},
				Zt = T => {
					const D = document.createElement("script");
					return D.innerHTML = T, D
				},
				Dn = ({
					dataLayer: T,
					dataLayerName: D
				}) => {
					if (window[D]) return window[D].push(T);
					const G = `
      window.${D} = window.${D} || [];
      window.${D}.push(${JSON.stringify(T)})`,
						te = Zt(G);
					document.head.insertBefore(te, document.head.childNodes[0])
				},
				pn = ({
					containerId: T,
					customDataLayer: D,
					gtmFeatureFlag: G = !0
				}) => {
					(0, Pe.useEffect)(() => {
						(() => {
							if (!G) return null;
							const {
								iframe: le,
								script: he,
								dataLayerHTML: ve
							} = ln({
								id: T,
								customDataLayer: D
							});
							D && document.head.appendChild(Zt(ve)), document.head.insertBefore(un(he), document.head.childNodes[0]), document.body.insertBefore(dn(le), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const mn = ({
					isDev: T,
					gtmFeatureFlag: D
				}) => {
					(0, Pe.useEffect)(() => {
						(() => {
							if (!D) return null;
							let te;
							T ? te = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : te = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
							const le = document.createElement("script");
							le.async = !0, le.src = te, document.head.insertBefore(le, document.head.childNodes[0])
						})()
					}, [])
				},
				gn = "GTM-NDGPDFZ",
				fn = _e().lazy(() => Promise.all([t.e(85175), t.e(2480), t.e(10008), t.e(39957), t.e(94012), t.e(97999), t.e(72019), t.e(26341), t.e(16339), t.e(91167), t.e(60091), t.e(45616), t.e(77216), t.e(39760), t.e(94923), t.e(60734), t.e(40758), t.e(64124), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				_n = _e().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(85175), t.e(97999), t.e(16339), t.e(60091), t.e(60734), t.e(69088), t.e(64124), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var En = ({
					userIsAuthed: T
				}) => {
					rn(), an();
					const {
						devPanelEnabled: D
					} = cn();
					return pn({
						containerId: gn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), mn({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), _e().createElement(Pe.Suspense, {
						fallback: _e().createElement(tn, null)
					}, _e().createElement(Ue.Switch, null, !T && !0 && _e().createElement(Ue.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, _e().createElement(_n, null)), _e().createElement(Ue.Route, {
						render: () => _e().createElement(Tt.ZC, {
							minHeight: "100vh"
						}, _e().createElement(fn, null))
					})), D && _e().createElement(en, null))
				},
				kt = t("../../../../node_modules/yup/es/index.js"),
				yn = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => kt.Z_().email((0, Re.ZP)("common.validation.email")).required((0, Re.ZP)("common.validation.email")),
				cfPassword: () => kt.Z_().required((0, Re.ZP)("common.validation.required"))
			};
			(0, yn.Yd)(Qt).forEach(T => {
				kt.kM(kt.Z_, T, Qt[T])
			});
			const Xt = _e().lazy(() => Promise.all([t.e(10008), t.e(94012), t.e(6368), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx"))),
				vn = () => {
					const T = (0, It.$8)(),
						[D, G] = (0, Pe.useState)(T ? Xt : _e().Fragment),
						[te, le] = (0, Pe.useState)((0, P.Yc)());
					(0, Pe.useEffect)(() => {
						(0, P.fF)(() => le((0, P.Yc)()))
					}, []);
					const he = ve => {
						le(ve), (0, P.C8)(ve), document.cookie = `dark-mode=${ve};Path=/;Max-Age=31536000`
					};
					return (0, Pe.useEffect)(() => {
						G(T ? Xt : _e().Fragment)
					}, [T]), (0, Pe.useEffect)(() => {
						const ve = () => he(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", ve), () => {
							window.removeEventListener("storage", ve)
						}
					}, []), _e().createElement(Pe.Suspense, {
						fallback: null
					}, _e().createElement($e.Provider, {
						store: (0, d.bh)()
					}, _e().createElement(Ue.Router, {
						history: k
					}, _e().createElement(D, null, _e().createElement($t.Z, {
						renderer: zt()
					}, _e().createElement(gt, null, _e().createElement(Gt.Z, {
						sentryTag: "Root"
					}, _e().createElement(rt.J$, {
						value: {
							fetcher: ve => fetch(ve).then(je => je.json())
						}
					}, _e().createElement(Ct, null), _e().createElement(ke, null), _e().createElement(bt.Z_, {
						onDarkModeChangeCb: he
					}, _e().createElement(pe.ZP, null, _e().createElement(En, {
						userIsAuthed: T
					}))), _e().createElement(wt.ZP, null), _e().createElement(at.F0, null)))))))))
				},
				hn = () => {
					(0, we.render)(_e().createElement(vn, null), document.getElementById("react-app"))
				};
			var ut = t("../utils/initSparrow.ts"),
				At = t("../utils/zaraz.ts");
			const Cn = () => {
					const T = (0, dt.PR)((0, d.bh)().getState());
					bn(), (0, ut.Ug)(), (0, At.bM)(), (T == null ? void 0 : T.id) && B().setUserId(T == null ? void 0 : T.id), (0, ut.yV)(), !(0, ut.Wi)() && (0, ut.IM)(), T ? (0, At.yn)(T) : (0, At.Ro)()
				},
				bn = () => {
					var T, D;
					(T = window) === null || T === void 0 || (D = T.OneTrust) === null || D === void 0 || D.OnConsentChanged(() => {
						const G = (0, dt.PR)((0, d.bh)().getState());
						(0, ut.Wi)() ? (B().setEnabled(!0), (G == null ? void 0 : G.id) ? (B().setUserId(G.id), (0, At.yn)(G)) : (0, At.Ro)(), (0, ut.yV)()) : (B().setEnabled(!1), (0, ut.IM)())
					})
				};

			function Tn(T) {
				for (var D = 1; D < arguments.length; D++) {
					var G = arguments[D] != null ? Object(arguments[D]) : {},
						te = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(G).filter(function(le) {
						return Object.getOwnPropertyDescriptor(G, le).enumerable
					})), te.forEach(function(le) {
						An(T, le, G[le])
					})
				}
				return T
			}

			function An(T, D, G) {
				return D = On(D), D in T ? Object.defineProperty(T, D, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[D] = G, T
			}

			function On(T) {
				var D = Pn(T, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function Pn(T, D) {
				if (typeof T != "object" || T === null) return T;
				var G = T[Symbol.toPrimitive];
				if (G !== void 0) {
					var te = G.call(T, D || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(T)
			}
			const In = "init",
				Jt = (T, D) => {
					r.$e(function(G) {
						G.setTag(In, D), r.Tb(T)
					}), J(T)
				},
				Rt = async (T, D) => {
					try {
						return await T(), !0
					} catch (G) {
						return Jt(G, D), !1
					}
				};
			(async () => {
				try {
					var T, D, G;
					t.g.build = Tn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "ebbf1529469da1a971324be4e10b14b9769f29ac",
						dashVersion: "28946259",
						env: "production",
						builtAt: 1731540098661,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, Le.p)()
					}), et();
					const te = [{
						fn: () => t.e(4374).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => v(k),
						tag: "hashScroll"
					}, {
						fn: ie.Z,
						tag: "styles"
					}, {
						fn: Me,
						tag: "mfePreviewData"
					}];
					for (const ot of te)
						if (!await Rt(ot.fn, ot.tag)) return;
					let le;
					if (!await Rt(async () => {
							le = await (0, be.k)()
						}, "bootstrap")) return;
					const he = (0, d.bh)(),
						ve = ((T = le) === null || T === void 0 ? void 0 : T.data) || {};
					he.dispatch((0, a.mW)("user", ve == null ? void 0 : ve.user));
					const je = (D = le) === null || D === void 0 || (G = D.data) === null || G === void 0 ? void 0 : G.user;
					return t.g.bootstrap = le, je && je.id && N(je.id), !await Rt(Ee, "gates") || !await Rt(Cn, "tracking") ? void 0 : hn()
				} catch (te) {
					Jt(te, "global")
				}
			})()
		},
		"../libs/init/initBootstrap.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				k: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/@sentry/core/esm/exports.js");
			class o extends Error {
				constructor(f, u) {
					super(u);
					this.name = `${f} ${u}`
				}
			}
			const l = () => {
					document.cookie.split(";").forEach(f => {
						const [u] = f.trim().split("=");
						document.cookie = `${u}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				_ = async () => {
					let s = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!s.ok) throw s.headers.get("content-type") === "text/html" && (await s.text()).toLowerCase().includes("cookie too large") && (e.$e(function(h) {
						h.setTag("init", "cookieTooLarge"), e.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), l(), window.location.reload()), new o("Bootstrap API Failure", s == null ? void 0 : s.status);
					return (await s.json()).result.data
				}
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(x, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				l = t("../react/app/redux/index.ts"),
				_ = t("../react/common/selectors/userSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				f = t("../react/common/selectors/accountSelectors.ts"),
				u = t("../react/common/utils/isGuards.ts"),
				p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				h = t.n(p);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(d) {
					for (var i = 1; i < arguments.length; i++) {
						var c = arguments[i];
						for (var g in c) Object.prototype.hasOwnProperty.call(c, g) && (d[g] = c[g])
					}
					return d
				}, n.apply(this, arguments)
			}
			const r = d => {
				function i(c) {
					const g = (0, l.UM)(),
						v = (0, p.useHistory)(),
						y = (0, p.useLocation)(),
						P = (0, p.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						S = (0, l.p4)(_.PR) || null,
						A = (0, l.p4)(s.nA) || null,
						b = (0, l.p4)(f.uF),
						I = b ? b.account : null;
					if (!P) return null;
					const {
						accountId: F,
						app: z,
						tab: V
					} = P.params, ee = P.params.zoneName && ((0, u.v5)(P.params.zoneName) || P.params.zoneName.indexOf(".") > 0) ? P.params.zoneName : void 0;
					return o().createElement(d, n({
						dispatch: g,
						history: v,
						location: y,
						match: P,
						user: S,
						membership: F ? b : null,
						account: F ? I : null,
						accountId: F || null,
						zone: ee ? A : null,
						zoneName: ee || null,
						app: ee ? z : null,
						tab: ee ? V : null
					}, c))
				}
				return i.displayName = `withEntities(${a(d)})`, i
			};

			function a(d) {
				return d.displayName || d.name || "Component"
			}
			E.Z = r
		},
		"../react/app/components/DeepLink/actions.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				BQ: function() {
					return p
				},
				Bh: function() {
					return f
				},
				CM: function() {
					return h
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
					return n
				},
				bk: function() {
					return u
				},
				fj: function() {
					return r
				},
				r4: function() {
					return _
				},
				zq: function() {
					return l
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
				l = (0, e.R)(o.ADD_SITE, d => ({
					payload: d
				})),
				_ = (0, e.R)(o.RESOLVING_START),
				s = (0, e.R)(o.RESOLVING_COMPLETE),
				f = (0, e.R)(o.SELECT_ZONE, d => ({
					payload: d
				})),
				u = (0, e.R)(o.SELECT_ACCOUNT, d => ({
					payload: d
				})),
				p = (0, e.R)(o.SELECT_PAGES_PROJECT, d => ({
					payload: d
				})),
				h = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, d => ({
					payload: d
				})),
				n = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, d => ({
					accountIds: d
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				a = (0, e.R)(o.SELECT_WORKER, d => ({
					payload: d
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				BV: function() {
					return e
				},
				Dz: function() {
					return h
				},
				Fj: function() {
					return _
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
					return n
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
				_ = "deepLinkQueryParams",
				s = "resolvedDeepLinkQueryParams",
				f = "add",
				u = "multiSkuProducts",
				p = "/:account/billing/checkout",
				h = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return V
				},
				U: function() {
					return u.U
				},
				dd: function() {
					return u.dd
				},
				bk: function() {
					return f.bk
				},
				Bh: function() {
					return f.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../react/app/redux/index.ts"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				_ = t("../react/app/components/DeepLink/utils.ts"),
				s = t("../react/utils/bootstrap.ts"),
				f = t("../react/app/components/DeepLink/actions.ts"),
				u = t("../react/app/components/DeepLink/selectors.ts"),
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				h = t.n(p);

			function n(ee) {
				for (var j = 1; j < arguments.length; j++) {
					var oe = arguments[j] != null ? Object(arguments[j]) : {},
						ne = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(oe).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(oe, Z).enumerable
					})), ne.forEach(function(Z) {
						r(ee, Z, oe[Z])
					})
				}
				return ee
			}

			function r(ee, j, oe) {
				return j = a(j), j in ee ? Object.defineProperty(ee, j, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ee[j] = oe, ee
			}

			function a(ee) {
				var j = d(ee, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function d(ee, j) {
				if (typeof ee != "object" || ee === null) return ee;
				var oe = ee[Symbol.toPrimitive];
				if (oe !== void 0) {
					var ne = oe.call(ee, j || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(ee)
			}
			class i {
				constructor(j, oe) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", ne => {
						this.resolvers.set(ne, {
							name: ne,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", ne => {
						const Z = this.resolvers.get(ne);
						Z && (Z.endTime = Date.now(), this.resolvers.set(ne, Z))
					}), r(this, "resolverCancel", ne => {
						this.resolverDone(ne), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", ne => {
						const Z = "NO_ACTION",
							se = {
								actionType: Z,
								startTime: 0
							};
						return {
							start: (J = Z) => {
								const ie = this.resolvers.get(ne);
								se.actionType = J, se.startTime = Date.now(), ie && ie.userActions.push(se)
							},
							finish: (J = Z) => {
								se.actionType = J, se.endTime = Date.now()
							},
							cancel: (J = Z) => {
								se.actionType = J, se.endTime = Date.now(), this.resolverCancel(ne)
							}
						}
					}), this.deepLink = j, this.legacyDeepLink = oe, this.resolvers = new Map
				}
				track(j) {
					try {
						if (this._done) return;
						this._done = !0;
						const oe = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: c(this.startTime, this.endTime),
								totalCpuTime: c(this.startTime, this.endTime)
							},
							ne = this.resolvers.size === 0 ? oe : Array.from(this.resolvers.values()).reduce((Z, se) => {
								const J = c(se.startTime, se.endTime),
									ie = se.userActions.reduce((X, U) => {
										const W = c(U.startTime, U.endTime);
										return {
											totalTime: X.totalTime + W,
											actions: X.actions.set(U.actionType, W)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									$ = J - ie.totalTime;
								return n({}, Z, {
									totalTime: Z.totalTime + J,
									totalUserActionsTime: Z.totalUserActionsTime + ie.totalTime,
									totalCpuTime: Z.totalCpuTime + $,
									[`${se.name}ResolverTotalTime`]: J,
									[`${se.name}ResolverTotalCpuTime`]: $,
									[`${se.name}ResolverTotalUserActionsTime`]: ie.totalTime
								}, Array.from(ie.actions.keys()).reduce((X, U) => n({}, X, {
									[`${se.name}Resolver/${U}`]: ie.actions.get(U)
								}), {}))
							}, n({}, oe, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						h().sendEvent(j, ne)
					} catch (oe) {
						console.error(oe)
					}
				}
			}

			function c(ee = Date.now(), j = Date.now()) {
				return (j - ee) / 1e3
			}
			var g = t("../react/app/components/DeepLink/constants.ts"),
				v = t("../react/common/hooks/useCachedState.ts"),
				y = t("../react/common/hooks/usePrevious.ts");

			function P(ee) {
				for (var j = 1; j < arguments.length; j++) {
					var oe = arguments[j] != null ? Object(arguments[j]) : {},
						ne = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(oe).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(oe, Z).enumerable
					})), ne.forEach(function(Z) {
						S(ee, Z, oe[Z])
					})
				}
				return ee
			}

			function S(ee, j, oe) {
				return j = A(j), j in ee ? Object.defineProperty(ee, j, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ee[j] = oe, ee
			}

			function A(ee) {
				var j = b(ee, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function b(ee, j) {
				if (typeof ee != "object" || ee === null) return ee;
				var oe = ee[Symbol.toPrimitive];
				if (oe !== void 0) {
					var ne = oe.call(ee, j || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(ee)
			}
			var F = ({
					children: ee
				}) => {
					const j = (0, o.TZ)(),
						oe = (0, l.useHistory)(),
						ne = (0, y.Z)(oe.location.pathname),
						Z = (0, o.p4)(u.dd),
						[se, J] = (0, e.useState)(!0),
						[ie, $] = (0, v.j)(void 0, {
							key: g.Fj
						}),
						[X, U] = (0, v.j)(void 0, {
							key: g.O5
						}),
						[W, Y] = (0, v.j)(void 0, {
							key: g.s$
						}),
						re = (0, s.$8)();
					let k = new URLSearchParams(oe.location.search);
					const L = (0, _.mL)(oe.location.pathname, k);
					let O = null,
						R = null;
					if (k.has(g.Tc) && k.delete(g.Tc), k.get(g.BV)) O = k.get(g.BV), oe.location.hash && (R = oe.location.hash);
					else if (ie) {
						const H = new URLSearchParams(ie);
						H.get(g.BV) && (O = H.get(g.BV), k = H)
					} else L && (k.set(g.BV, L), O = L);
					if (O && g._h.test(O)) {
						const H = k.getAll(g.Kt),
							K = JSON.stringify(H);
						H.length && K !== W && Y(K), k.has(g.Tc) && k.delete(g.Tc), k.delete(g.Kt)
					}!re && ie === void 0 && O && $(k.toString());
					const M = async () => {
						try {
							if ((0, _.I3)(O) && re && !Z) {
								ie && $(void 0), j.dispatch((0, f.r4)()), J(!0), O && O !== X && U(O);
								const H = await (0, _.py)(O, J, j, oe, ne, new i(O, L ? `${oe.location.pathname}${oe.location.search}` : void 0));
								k.delete(g.BV);
								const K = k.toString();
								oe.replace(P({}, oe.location, {
									pathname: H,
									search: K
								}, R ? {
									hash: R
								} : {})), j.dispatch((0, f.WF)())
							}
						} catch (H) {
							j.dispatch((0, f.WF)()), console.error(H)
						} finally {
							J(!1)
						}
					};
					return (0, e.useEffect)(() => {
						M()
					}, [oe.location.pathname, oe.location.search, Z]), (se || (0, _.I3)(O)) && re ? null : ee
				},
				z = t("../react/app/components/DeepLink/reducer.ts"),
				V = F
		},
		"../react/app/components/DeepLink/reducer.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				E: function() {
					return _
				},
				r: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				l = t("../react/app/components/DeepLink/actions.ts");
			const _ = null,
				s = o().from({
					lastAction: _,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function f(u = s, p) {
				if (p.type === l.MF.RESOLVING_COMPLETE) return s;
				if (p.type === l.MF.RESOLVING_START) return u.set("isResolving", !0);
				if (u.isResolving) {
					if (p.type === l.MF.RESOLVING_COMPLETE) return u.set("isResolving", !1);
					if (p.type === l.MF.SET_FILTERED_ACCOUNT_IDS) return u.set("filteredAccountIds", p.accountIds);
					if (p.type === l.MF.DELETE_FILTERED_ACCOUNT_IDS) return u.set("filteredAccountIds", void 0);
					{
						let h = u;
						try {
							h = u.set("lastAction", p)
						} catch {
							h = u.set("lastAction", {
								type: p.type
							})
						}
						return h
					}
				} else return u
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
			const e = _ => _.deepLink.lastAction,
				o = _ => _.deepLink.isResolving,
				l = _ => _.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				I3: function() {
					return d
				},
				X1: function() {
					return r
				},
				mL: function() {
					return y
				},
				py: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/components/DeepLink/reducer.ts"),
				l = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const _ = P => P.replace(l.default.endsWithSlash, ""),
				s = P => {
					const S = _(P).split("/").slice(3);
					return S.length ? "/" + S.join("/") : ""
				},
				f = P => {
					const S = _(P).split("/").slice(2);
					return S.length ? `apps/${S.join("/")}` : "apps"
				};
			var u = t("../react/app/components/DeepLink/selectors.ts"),
				p = t("../react/app/components/DeepLink/constants.ts"),
				h = t("../react/common/validators/index.js"),
				n = t("../react/common/utils/isGuards.ts");
			const r = P => (0, h.Lb)(P) && (P.split(".").length > 1 || (0, n.v5)(P)),
				a = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				d = P => typeof P == "string" && P.startsWith("/"),
				i = (P, S) => A => new Promise((b, I) => {
					S.start();
					const F = P.subscribe(() => {
						const z = (0, u.yI)(P.getState());
						z === o.E ? (S.cancel(), F(), I("DeepLink: waitForAction out of context.")) : A(z) && (S.finish(z.type), F(), b(z))
					})
				}),
				c = (P, S, A) => (b, I) => new Promise((F, z) => {
					A.start();
					const V = S.location.pathname;
					b = new URL(b, window.location.href).pathname, V !== b && (A.cancel(), z(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${b}", but on "${V}". You need to redirect to "${b}", and unblockRouter in your Resolver, before you use this function.`));
					const ee = P.subscribe(() => {
						const j = (0, u.yI)(P.getState()),
							oe = S.location.pathname,
							Z = new URLSearchParams(S.location.search).get(p.BV);
						(oe !== b || !!Z) && (A.cancel(), ee(), z(`DeepLink: waitForPageAction user navigated away from "${b}" to "${oe}${Z?S.location.search:""}"`)), j === o.E ? (A.cancel(), ee(), z("DeepLink: waitForPageAction out of context.")) : I(j) && (A.finish(j.type), ee(), F(j))
					})
				});

			function g(P) {
				const S = [],
					A = P.split("?")[0].split("/");
				for (let b of A) b.length !== 0 && (b.startsWith(":") ? S.push({
					value: b.substring(1),
					type: "dynamic"
				}) : S.push({
					value: b,
					type: "static"
				}));
				return S
			}
			async function v(P, S, A, b, I, F) {
				F.start();
				const z = g(P),
					ee = await (await Promise.all([t.e(32375), t.e(72019), t.e(78839), t.e(60091), t.e(94923), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					j = {};
				let oe = "";
				for (const [ne, Z] of z.entries())
					if (Z.type === "static") oe = [oe, Z.value].join("/");
					else if (Z.type === "dynamic" && a.is(Z.value) && Z.value in ee) {
					F.resolverStart(Z.value);
					const se = await ee[Z.value]({
						deepLink: P,
						blockRouter: () => S(!0),
						unblockRouter: () => S(!1),
						routerHistory: b,
						resolvedValues: j,
						store: A,
						referringRoute: I,
						uri: {
							currentPartIdx: ne,
							parts: z
						},
						waitForAction: i(A, F.createUserActionTracker(Z.value)),
						waitForPageAction: c(A, b, F.createUserActionTracker(Z.value))
					});
					F.resolverDone(Z.value), oe = [oe, se].join("/"), j[Z.value] = se
				} else throw F.cancel(), new Error(`DeepLink: Resolver with name '${Z.value}' is not supported.`);
				return F.done(), oe
			}

			function y(P, S) {
				const A = ":account",
					b = ":zone",
					I = S.get("zone");
				if (I) return S.delete("zone"), `/${A}/${b}/${I}`;
				const F = S.get("account");
				if (F) return S.delete("account"), `/${A}/${F}`;
				if (P === "/overview") return `/${A}/${b}`;
				if (P === "/apps") return `/${A}/${b}/${f(P)}`;
				const z = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const V of z) {
					const ee = V.length;
					if (P.startsWith(V) && (P.length === ee || P[ee] === "/")) return `/${A}/${b}${P}`
				}
				switch (P) {
					case "/account/billing":
						return `/${A}/billing`;
					case "/account/subscriptions":
						return `/${A}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${A}/dns-firewall`;
					case "/account/audit-log":
						return `/${A}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(x, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				l = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				_ = t("../react/app/components/SomethingWrong.jsx"),
				s = t("../utils/sentry/lastSentEventId.ts"),
				f = t("../react/utils/zaraz.ts"),
				u = t("../react/utils/url.ts");
			const p = ({
				sentryTag: h,
				children: n
			}) => o().createElement(l.SV, {
				beforeCapture: r => {
					h && r.setTag("errorBoundary", h), f.tg === null || f.tg === void 0 || f.tg.track("page-error", {
						page: (0, u.Fl)(window.location.pathname)
					})
				},
				onError: r => {
					({
						REDUX_LOGGER: void 0
					}).TESTING && t.g.logAppError(r)
				},
				fallback: ({
					error: r,
					eventId: a
				}) => {
					const d = s.e.getEventId() || a;
					return o().createElement(_.Z, {
						type: "page",
						error: r,
						eventId: d
					})
				}
			}, n);
			E.Z = p
		},
		"../react/app/components/Footer.tsx": function(x, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return L
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				_ = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = t("../node_modules/@cloudflare/elements/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				h = t.n(p),
				n = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				r = t("../react/common/components/Apple/utils.tsx"),
				a = t("../react/utils/translator.tsx"),
				d = t("../../../../node_modules/moment/moment.js"),
				i = t.n(d);
			const c = () => {
					const O = i()().format("YYYY"),
						R = M => {
							h().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: M
							})
						};
					return o().createElement(g, {
						marginTop: "auto"
					}, o().createElement(v, null, o().createElement(y, null, o().createElement(P, null, "\xA9 ", O, " Cloudflare, Inc."), o().createElement(P, null, o().createElement(S, null, o().createElement(A, {
						showOnDeskTop: !1
					}, o().createElement(b, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => R("Support")
					}, o().createElement(a.cC, {
						id: "common.support"
					}))), o().createElement(A, null, o().createElement(b, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => R("Privacy Policy")
					}, o().createElement(a.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(A, null, o().createElement(b, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => R("Terms of Use")
					}, o().createElement(a.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(A, null, o().createElement(b, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => R("Cookie Preferences")
					}, o().createElement(a.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(A, null, o().createElement(b, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => R("Trademark")
					}, o().createElement(a.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(S, null, o().createElement(A, null, o().createElement(b, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => R("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(a.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				g = (0, f.createComponent)(({
					theme: O,
					marginTop: R
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: R
				})),
				v = (0, f.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				y = (0, f.createComponent)(({
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
				P = (0, f.createComponent)(({
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
				S = (0, f.createComponent)(({
					theme: O
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: O.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				A = (0, f.createComponent)(({
					showOnDeskTop: O = !0,
					theme: R
				}) => ({
					color: R.colors.white,
					fontSize: R.fontSizes[1],
					height: "20px",
					display: O ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: R.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: R.space[3],
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
				b = (0, f.createStyledComponent)(({
					theme: O
				}) => ({
					textDecoration: "none",
					color: O.colors.white,
					"&:hover": {
						color: O.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var I = c,
				F = t("../react/common/hooks/useGate.ts"),
				z = t("../react/pages/welcome/routes.ts"),
				V = t("../react/utils/cookiePreferences.ts"),
				ee = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				oe = () => {
					const [O, R] = (0, e.useState)(!1), M = (0, V.wV)(), H = () => {
						R(!0)
					}, K = () => {
						R(!1)
					}, ge = M && M === "US" ? (0, a.ZP)("footer.cpra_cta.privacy_choices") : (0, a.ZP)("footer.cpra_cta.cookie_preferences"), Ie = {
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
						style: Ie,
						onMouseEnter: H,
						onMouseLeave: K
					}, o().createElement(s.Ei, {
						height: 15,
						src: ee,
						mr: 2,
						alt: ge
					}), ge)
				};

			function ne() {
				return ne = Object.assign ? Object.assign.bind() : function(O) {
					for (var R = 1; R < arguments.length; R++) {
						var M = arguments[R];
						for (var H in M) Object.prototype.hasOwnProperty.call(M, H) && (O[H] = M[H])
					}
					return O
				}, ne.apply(this, arguments)
			}

			function Z(O, R) {
				if (O == null) return {};
				var M = se(O, R),
					H, K;
				if (Object.getOwnPropertySymbols) {
					var ge = Object.getOwnPropertySymbols(O);
					for (K = 0; K < ge.length; K++) H = ge[K], !(R.indexOf(H) >= 0) && (!Object.prototype.propertyIsEnumerable.call(O, H) || (M[H] = O[H]))
				}
				return M
			}

			function se(O, R) {
				if (O == null) return {};
				var M = {},
					H = Object.keys(O),
					K, ge;
				for (ge = 0; ge < H.length; ge++) K = H[ge], !(R.indexOf(K) >= 0) && (M[K] = O[K]);
				return M
			}
			const J = 24,
				ie = (0, f.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,u.Yc)()?u.rS.colors.orange[6]:u.rS.colors.blue[4]}`
					}
				}), s.A),
				$ = (0, f.createStyledComponent)(({
					theme: O
				}) => ({
					color: O.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, n.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: O.colors.gray[4]
					}
				}), s.A),
				X = O => {
					let {
						onClick: R
					} = O, M = Z(O, ["onClick"]);
					return o().createElement(ie, ne({
						onClick: H => {
							h().sendEvent("navigate footer nav", {
								destinationPage: M.href
							}), R && R(H)
						}
					}, M))
				},
				U = O => {
					let {
						children: R,
						target: M,
						rel: H
					} = O, K = Z(O, ["children", "target", "rel"]);
					return o().createElement(X, ne({
						target: M || "_blank",
						rel: H || "noopener noreferrer"
					}, K), R, o().createElement(_.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				},
				W = O => {
					let {
						children: R,
						target: M,
						rel: H
					} = O, K = Z(O, ["children", "target", "rel"]);
					return o().createElement($, ne({
						target: M || "_blank",
						rel: H || "noopener noreferrer"
					}, K), R)
				},
				Y = (0, f.createStyledComponent)(({
					theme: O
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, n.tq)() ? "8px" : "16px",
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
				re = (0, f.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, n.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), s.ZC);
			var L = () => {
				var O, R;
				const M = [z.d.root.pattern].some(Le => (0, l.matchPath)(location.pathname, {
						path: Le
					})),
					H = location.pathname === "/sign-up",
					K = (0, F.Z)("dx-footer-simplify") === "experiment",
					ge = (0, F.Z)("prg-signup-next-steps-experiment") === "experiment" && H;
				if ((0, r.PP)()) return o().createElement(I, null);
				if (M) return null;
				const Ie = new Date().getFullYear();
				return o().createElement(s.$_, ne({
					height: (0, n.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: K ? "19px" : 4,
					pb: 0,
					px: [4, 3, 3],
					mt: ge ? 0 : "auto"
				}, ge && K && {
					height: "10vh"
				}), K ? o().createElement(re, null, o().createElement(Y, null, o().createElement(s.Li, null, o().createElement(W, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("common.support"))), o().createElement(s.Li, null, o().createElement(W, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(s.Dr, {
					textTransform: "capitalize"
				}, (0, a.ZP)("footer.system_status")))), o().createElement(s.Li, null, o().createElement(W, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, a.ZP)("footer.careers"))), o().createElement(s.Li, null, o().createElement(W, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos_reduced"))), o().createElement(s.Li, null, o().createElement(W, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, a.ZP)("footer.security_issues"))), o().createElement(s.Li, null, o().createElement(W, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))), o().createElement(s.Li, null, o().createElement(oe, null)), o().createElement(s.Li, null, o().createElement(s.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", Ie, " Cloudflare, Inc.")))) : o().createElement(s.ZC, {
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
				}, o().createElement(U, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.contact_support"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, a.ZP)("footer.contact_sales"))), o().createElement(s.Dd, {
					mt: 3
				}, o().createElement(s.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, o().createElement(X, {
					"aria-label": (0, a.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${J}px`
				}, o().createElement(_.J, {
					type: "twitter",
					size: J
				})), o().createElement(X, {
					"aria-label": (0, a.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${J}px`
				}, o().createElement(_.J, {
					type: "facebook",
					size: J
				})), o().createElement(X, {
					"aria-label": (0, a.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${J}px`
				}, o().createElement(_.J, {
					type: "linkedin",
					size: J
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
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/plans"
				}, (0, a.ZP)("footer.plans"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/overview"
				}, (0, a.ZP)("footer.about"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
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
				}, o().createElement(U, {
					href: "https://developers.cloudflare.com"
				}, (0, a.ZP)("footer.product_docs"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://blog.cloudflare.com"
				}, (0, a.ZP)("footer.blog"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, a.ZP)("footer.testimonials"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://partners.cloudflare.com"
				}, (0, a.ZP)("footer.hosting_partners"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://api.cloudflare.com"
				}, (0, a.ZP)("footer.api"))))), o().createElement(s.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement("div", {
					"aria-hidden": "true",
					title: `Current version: ${((O=window)===null||O===void 0||(R=O.build)===null||R===void 0?void 0:R.dashVersion)||"unknown"}`
				}), o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.support")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.help_center"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://community.cloudflare.com"
				}, (0, a.ZP)("footer.community"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflarestatus.com"
				}, (0, a.ZP)("footer.system_status"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
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
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/people"
				}, (0, a.ZP)("footer.team"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/careers"
				}, (0, a.ZP)("footer.careers"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, a.ZP)("footer.press"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, a.ZP)("footer.subs_agreement"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))))), o().createElement(oe, null)))
			}
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(x, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return a
				},
				Z: function() {
					return re
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				l = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				_ = t("../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				p = t("../react/common/components/AccessControl/index.js"),
				h = t("../react/common/components/ButtonWithDropdown.tsx"),
				n = t("../react/common/components/Dropdown/index.tsx"),
				r = t("../react/utils/translator.tsx");
			const a = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				d = [{
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
			var i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = t.n(c);

			function v(k) {
				for (var L = 1; L < arguments.length; L++) {
					var O = arguments[L] != null ? Object(arguments[L]) : {},
						R = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(O).filter(function(M) {
						return Object.getOwnPropertyDescriptor(O, M).enumerable
					})), R.forEach(function(M) {
						y(k, M, O[M])
					})
				}
				return k
			}

			function y(k, L, O) {
				return L = P(L), L in k ? Object.defineProperty(k, L, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[L] = O, k
			}

			function P(k) {
				var L = S(k, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function S(k, L) {
				if (typeof k != "object" || k === null) return k;
				var O = k[Symbol.toPrimitive];
				if (O !== void 0) {
					var R = O.call(k, L || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(k)
			}

			function A() {
				return A = Object.assign ? Object.assign.bind() : function(k) {
					for (var L = 1; L < arguments.length; L++) {
						var O = arguments[L];
						for (var R in O) Object.prototype.hasOwnProperty.call(O, R) && (k[R] = O[R])
					}
					return k
				}, A.apply(this, arguments)
			}

			function b(k, L) {
				if (k == null) return {};
				var O = I(k, L),
					R, M;
				if (Object.getOwnPropertySymbols) {
					var H = Object.getOwnPropertySymbols(k);
					for (M = 0; M < H.length; M++) R = H[M], !(L.indexOf(R) >= 0) && (!Object.prototype.propertyIsEnumerable.call(k, R) || (O[R] = k[R]))
				}
				return O
			}

			function I(k, L) {
				if (k == null) return {};
				var O = {},
					R = Object.keys(k),
					M, H;
				for (H = 0; H < R.length; H++) M = R[H], !(L.indexOf(M) >= 0) && (O[M] = k[M]);
				return O
			}
			const F = k => {
					let {
						title: L,
						trackingEvent: O,
						icon: R,
						url: M,
						description: H,
						disabled: K
					} = k, ge = b(k, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(z, A({
						to: !K && M || "#",
						"aria-disabled": K,
						onClick: () => {
							g().sendEvent(O, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, ge), o().createElement(_.ZC, {
						display: "flex"
					}, o().createElement(l.J, {
						type: R,
						size: 24,
						mr: 2
					}), o().createElement(_.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(_.ZC, {
						fontSize: 3
					}, o().createElement(r.cC, L)), o().createElement(_.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(r.cC, H)))))
				},
				z = (0, f.createStyledComponent)(({
					theme: k
				}) => {
					const L = {
						cursor: "pointer",
						backgroundColor: (0, s.Yc)() ? k.colors.gray[8] : k.colors.gray[9],
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
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': L,
						':focus-within:not([aria-disabled="true"])': v({}, L, {
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
			var V = F,
				ee = t("../react/common/hooks/useGate.ts");

			function j() {
				return j = Object.assign ? Object.assign.bind() : function(k) {
					for (var L = 1; L < arguments.length; L++) {
						var O = arguments[L];
						for (var R in O) Object.prototype.hasOwnProperty.call(O, R) && (k[R] = O[R])
					}
					return k
				}, j.apply(this, arguments)
			}

			function oe(k) {
				for (var L = 1; L < arguments.length; L++) {
					var O = arguments[L] != null ? Object(arguments[L]) : {},
						R = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(O).filter(function(M) {
						return Object.getOwnPropertyDescriptor(O, M).enumerable
					})), R.forEach(function(M) {
						ne(k, M, O[M])
					})
				}
				return k
			}

			function ne(k, L, O) {
				return L = Z(L), L in k ? Object.defineProperty(k, L, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[L] = O, k
			}

			function Z(k) {
				var L = se(k, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function se(k, L) {
				if (typeof k != "object" || k === null) return k;
				var O = k[Symbol.toPrimitive];
				if (O !== void 0) {
					var R = O.call(k, L || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(k)
			}

			function J(k, L) {
				if (k == null) return {};
				var O = ie(k, L),
					R, M;
				if (Object.getOwnPropertySymbols) {
					var H = Object.getOwnPropertySymbols(k);
					for (M = 0; M < H.length; M++) R = H[M], !(L.indexOf(R) >= 0) && (!Object.prototype.propertyIsEnumerable.call(k, R) || (O[R] = k[R]))
				}
				return O
			}

			function ie(k, L) {
				if (k == null) return {};
				var O = {},
					R = Object.keys(k),
					M, H;
				for (H = 0; H < R.length; H++) M = R[H], !(L.indexOf(M) >= 0) && (O[M] = k[M]);
				return O
			}
			const $ = "GLOBAL_ADD_DROPDOWN",
				X = ({
					disableProducts: k
				}) => {
					const L = (0, ee.Z)("dashon-18-reduced-add-button-on-mobile") === "experiment" && (0, u.tq)();
					return o().createElement(U, {
						role: "group",
						"data-testid": $
					}, o().createElement(n.Lt, {
						trigger: o().createElement(W, null, o().createElement(l.J, {
							label: "plus",
							type: "plus"
						}), !L && o().createElement(o().Fragment, null, o().createElement(r.cC, {
							id: "common.add"
						}), " ", o().createElement(l.J, {
							label: "arrow",
							type: "caret-down"
						}))),
						menu: o().createElement(h.v2, {
							overflow: "auto",
							maxHeight: "80vh",
							width: "min(50vw, 340px)",
							whiteSpace: "normal",
							mr: 1,
							p: "8px 0",
							bottom: "auto",
							zIndex: 1200
						}, d.map(O => {
							const R = O || {},
								{
									disableOn: M,
									permissionCheck: H
								} = R,
								K = J(R, ["disableOn", "permissionCheck"]),
								ge = M && k[M],
								Ie = oe({}, K, {
									disabled: ge
								});
							return H ? o().createElement(p.Z, {
								key: O.title.id,
								edit: H
							}, ({
								isEditable: Le
							}) => Le && o().createElement(V, Ie)) : o().createElement(V, j({
								key: O.url
							}, Ie))
						}))
					}))
				},
				U = (0, f.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				W = (0, f.createStyledComponent)(({
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
					color: (0, s.Yc)() ? k.colors.gray[1] : k.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, s.Yc)() ? k.colors.gray[8] : k.colors.gray[9]
					}
				}), _.zx);
			var Y = X,
				re = Y
		},
		"../react/app/components/LoadingSuspense.tsx": function(x, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				l = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				_ = t("../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../react/utils/translator.tsx"),
				f = t("../react/app/components/ErrorStatus.tsx"),
				u = t("../react/common/components/EmptyPage.jsx"),
				p = t("../react/common/hooks/suspenseHelpers.ts");

			function h(a) {
				const [d, i] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const c = window.setTimeout(() => i(!0), a);
					return () => window.clearTimeout(c)
				}, []), d
			}
			const n = ({
					loadingTimeout: a = 1e3,
					stillLoadingTimeout: d = 9e3
				}) => {
					const i = h(a),
						c = h(d);
					if ((0, p.nW)(), !i && !c) return o().createElement(u.Z, null);
					const g = c ? o().createElement(s.cC, {
						id: "common.still_loading"
					}) : i ? o().createElement(s.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(f.Z, {
						size: 5
					}, o().createElement(_.ZC, {
						mr: 3
					}, o().createElement(l.g, {
						size: "2x"
					})), g)
				},
				r = ({
					children: a
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(n, null)
				}, a);
			E.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				C8: function() {
					return p
				},
				dr: function() {
					return s
				},
				lt: function() {
					return f
				},
				m6: function() {
					return n
				},
				n: function() {
					return h
				},
				yl: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const l = "/persistence/user",
				_ = async () => {
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
				}, f = async (r, a) => {
					try {
						return await (await e.post(`${l}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: r,
								accountId: a
							}),
							hideErrorAlert: !0
						})).body
					} catch (d) {
						return console.error(d), []
					}
				}, u = async (r, a) => {
					try {
						return await http.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: a
							}),
							hideErrorAlert: !0
						}), !0
					} catch (d) {
						return console.error(d), !1
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
				}, h = async r => {
					try {
						return await (await e.post(`${l}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, n = async r => {
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
		"../react/app/components/Persistence/index.tsx": function(x, E, t) {
			"use strict";
			t.d(E, {
				Wl: function() {
					return h
				},
				lp: function() {
					return g
				},
				Z_: function() {
					return y
				},
				r7: function() {
					return ee
				},
				Tv: function() {
					return $
				},
				yZ: function() {
					return P
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				l = t("../react/app/redux/index.ts"),
				_ = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(_),
				f = t("../react/utils/bootstrap.ts"),
				u = t("../react/common/selectors/zoneSelectors.ts"),
				p = t("../react/app/components/Persistence/api.ts");
			const h = 10;

			function n(X) {
				for (var U = 1; U < arguments.length; U++) {
					var W = arguments[U] != null ? Object(arguments[U]) : {},
						Y = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(W).filter(function(re) {
						return Object.getOwnPropertyDescriptor(W, re).enumerable
					})), Y.forEach(function(re) {
						r(X, re, W[re])
					})
				}
				return X
			}

			function r(X, U, W) {
				return U = a(U), U in X ? Object.defineProperty(X, U, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : X[U] = W, X
			}

			function a(X) {
				var U = d(X, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function d(X, U) {
				if (typeof X != "object" || X === null) return X;
				var W = X[Symbol.toPrimitive];
				if (W !== void 0) {
					var Y = W.call(X, U || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(X)
			}
			const i = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				c = n({}, i, {
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
				g = (0, e.createContext)(c),
				v = g.Consumer,
				y = ({
					children: X,
					onDarkModeChangeCb: U
				}) => {
					const [W, Y] = (0, e.useState)(i), [re, k] = (0, e.useState)(c.isLoading), L = (0, f.$8)(), O = (0, l.p4)(H => (0, u.wH)(H));
					(0, e.useEffect)(() => {
						L ? (0, p.yl)().then(H => {
							H && (Y(H), U(H.darkMode))
						}).finally(() => k(!1)) : k(!1)
					}, [L]);
					const R = (H, K) => !!W.favorites.find(ge => ge.type === "zone" && ge.name === H && ge.accountId === K),
						M = H => W.favorites.filter(ge => ge.type === "zone" && ge.accountId === H).length < h;
					return o().createElement(g.Provider, {
						value: n({}, W, {
							isLoading: re,
							actions: {
								canAccountStarZone: M,
								isZoneStarred: R,
								starZone: async (H, K) => {
									var ge;
									const Ie = !R(H, K),
										Le = M(K);
									if (Ie && !Le) {
										console.log("can not star zone - account is at limit");
										return
									}
									const De = await (0, p.lt)(H, K);
									s().sendEvent("click star zone", {
										isStarring: Ie,
										totalStarredZones: De.filter(B => B.accountId === K && B.type === "zone").length,
										totalZones: O == null || (ge = O.paginationData) === null || ge === void 0 ? void 0 : ge.info.total_count
									}), Y(n({}, W, {
										favorites: De
									}))
								},
								setDarkMode: async H => {
									const K = await (0, p.C8)(H);
									Y(K), U(K.darkMode)
								},
								logRouteVisited: async H => {
									var K;
									const ge = await (0, p.n)(H);
									Y((K = ge) !== null && K !== void 0 ? K : n({}, W))
								},
								viewChange: async H => {
									const K = await (0, p.m6)(H);
									Y(n({}, W, {
										viewedChanges: K
									}))
								}
							}
						})
					}, X)
				},
				P = () => (0, e.useContext)(g);
			var S = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				A = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function b() {
				return b = Object.assign ? Object.assign.bind() : function(X) {
					for (var U = 1; U < arguments.length; U++) {
						var W = arguments[U];
						for (var Y in W) Object.prototype.hasOwnProperty.call(W, Y) && (X[Y] = W[Y])
					}
					return X
				}, b.apply(this, arguments)
			}

			function I(X, U) {
				if (X == null) return {};
				var W = F(X, U),
					Y, re;
				if (Object.getOwnPropertySymbols) {
					var k = Object.getOwnPropertySymbols(X);
					for (re = 0; re < k.length; re++) Y = k[re], !(U.indexOf(Y) >= 0) && (!Object.prototype.propertyIsEnumerable.call(X, Y) || (W[Y] = X[Y]))
				}
				return W
			}

			function F(X, U) {
				if (X == null) return {};
				var W = {},
					Y = Object.keys(X),
					re, k;
				for (k = 0; k < Y.length; k++) re = Y[k], !(U.indexOf(re) >= 0) && (W[re] = X[re]);
				return W
			}
			const z = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var ee = X => {
					let {
						isStarred: U,
						size: W = 16
					} = X, Y = I(X, ["isStarred", "size"]);
					const re = z[(0, S.Yc)() ? "dark" : "light"];
					return o().createElement(A.J, b({
						type: U ? "star" : "star-outline",
						color: U ? re.gold : re.gray,
						size: W
					}, Y))
				},
				j = t("../node_modules/@cloudflare/elements/es/index.js");

			function oe(X) {
				for (var U = 1; U < arguments.length; U++) {
					var W = arguments[U] != null ? Object(arguments[U]) : {},
						Y = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(W).filter(function(re) {
						return Object.getOwnPropertyDescriptor(W, re).enumerable
					})), Y.forEach(function(re) {
						ne(X, re, W[re])
					})
				}
				return X
			}

			function ne(X, U, W) {
				return U = Z(U), U in X ? Object.defineProperty(X, U, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : X[U] = W, X
			}

			function Z(X) {
				var U = se(X, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function se(X, U) {
				if (typeof X != "object" || X === null) return X;
				var W = X[Symbol.toPrimitive];
				if (W !== void 0) {
					var Y = W.call(X, U || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(X)
			}
			const J = {
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
			var $ = (0, e.forwardRef)(({
				featurePreview: X = !1,
				isStarred: U,
				onClickFn: W,
				isDisabled: Y,
				testId: re,
				buttonText: k,
				size: L = "large"
			}, O) => {
				const R = J[(0, S.Yc)() ? "dark" : "light"][U && !X ? "active" : "default"],
					M = oe({}, L === "large" && {
						starIconSize: 16,
						fontSize: 3,
						height: "auto",
						paddingLeft: "12px",
						paddingRight: 3
					}, L === "small" && {
						starIconSize: 14,
						fontSize: 1,
						height: "1.5rem",
						paddingLeft: "6px",
						paddingRight: 2
					});
				return o().createElement(j.zx, {
					innerRef: O,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: M.paddingRight,
					gap: 1,
					pl: M.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: X || Y ? "default" : "pointer",
					backgroundColor: R.bg,
					color: R.text,
					borderColor: R.border,
					onClick: W,
					opacity: Y ? .5 : 1,
					disabled: Y,
					fontSize: M.fontSize,
					height: M.height,
					"data-testid": re
				}, o().createElement(ee, {
					isStarred: X ? !1 : U,
					size: M.starIconSize
				}), k)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(x, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				l = t("../../../../node_modules/prop-types/index.js"),
				_ = t.n(l),
				s = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				f = t.n(s),
				u = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = t("../node_modules/@cloudflare/component-button/es/index.js"),
				h = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				n = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				r = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				a = t.n(r),
				d = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				c = t("../react/app/components/Footer.tsx"),
				g = t("../react/utils/url.ts");

			function v(ne) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var se = arguments[Z] != null ? Object(arguments[Z]) : {},
						J = Object.keys(se);
					typeof Object.getOwnPropertySymbols == "function" && J.push.apply(J, Object.getOwnPropertySymbols(se).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(se, ie).enumerable
					})), J.forEach(function(ie) {
						y(ne, ie, se[ie])
					})
				}
				return ne
			}

			function y(ne, Z, se) {
				return Z = P(Z), Z in ne ? Object.defineProperty(ne, Z, {
					value: se,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[Z] = se, ne
			}

			function P(ne) {
				var Z = S(ne, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function S(ne, Z) {
				if (typeof ne != "object" || ne === null) return ne;
				var se = ne[Symbol.toPrimitive];
				if (se !== void 0) {
					var J = se.call(ne, Z || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(ne)
			}
			const A = (0, u.createComponent)(({
					type: ne
				}) => ({
					height: ne !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				b = (0, u.createComponent)(({
					theme: ne,
					margin: Z,
					size: se = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: ne.colors.gray[3],
					height: Z ? "auto" : "100%",
					padding: Z ? 0 : ne.space[se > 1 ? se - 2 : 0],
					margin: Z,
					justifyContent: "center",
					alignItems: "center"
				})),
				I = (0, u.createComponent)(() => ({
					textAlign: "left"
				})),
				F = (0, u.createComponent)(() => ({
					textAlign: "right"
				})),
				z = (0, u.createComponent)(({
					theme: ne
				}) => ({
					fontSize: ne.fontSizes[6]
				})),
				V = (0, u.createComponent)(({
					theme: ne
				}) => ({
					fontSize: ne.fontSizes[4]
				})),
				ee = (0, u.createComponent)(({
					theme: ne
				}) => ({
					fontSize: ne.fontSizes[3]
				})),
				j = (0, u.createComponent)(({
					theme: ne
				}) => ({
					width: "100%",
					height: 125,
					marginTop: ne.space[4],
					padding: ne.space[2]
				}), "textarea");
			class oe extends o().Component {
				constructor(...Z) {
					super(...Z);
					y(this, "state", {
						value: "",
						submitted: !1
					}), y(this, "handleTextareaChange", se => {
						this.setState({
							value: se.target.value
						})
					}), y(this, "sendErrToSentry10", async () => {
						try {
							var se, J, ie, $;
							const X = ((se = window) === null || se === void 0 || (J = se.bootstrap) === null || J === void 0 || (ie = J.data) === null || ie === void 0 || ($ = ie.user) === null || $ === void 0 ? void 0 : $.id) || "Unknown",
								U = this.props.eventId || h.eW(),
								W = {
									name: X,
									email: `${X}@userid.com`,
									comments: this.state.value,
									eventId: U,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: v({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(W)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (X) {
							console.error(X)
						}
					}), y(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), y(this, "renderContent", se => o().createElement(s.I18n, null, J => o().createElement(A, {
						type: se
					}, o().createElement(b, null, o().createElement(I, null, o().createElement(z, null, J.t("error.internal_issues")), o().createElement(V, null, J.t("error.help_us")), o().createElement(j, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: ie => this.handleTextareaChange(ie),
						disabled: this.state.submitted,
						placeholder: J.t("error.give_feedback")
					}), o().createElement(F, null, !this.state.submitted && o().createElement(p.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, J.t("common.submit")), this.state.submitted && o().createElement(ee, null, J.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const Z = this.props.error;
					console.error(`SomethingWrong: ${Z}`), n.YA("user_feedback_form_displayed", "yes"), n.YA("normalizedPath", (0, g.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: Z
					} = this.props;
					return Z === "fullscreen" ? o().createElement("div", null, o().createElement(d.h4, null, o().createElement(r.Link, {
						to: "/"
					}, o().createElement(i.TR, null))), this.renderContent(Z), o().createElement(c.Z, null)) : this.renderContent(Z)
				}
			}
			oe.propTypes = {
				type: _().oneOf(["fullscreen", "page"]),
				error: _().oneOfType([_().string, _().object]),
				eventId: _().string
			}, E.Z = oe
		},
		"../react/app/redux/index.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				TZ: function() {
					return l
				},
				UM: function() {
					return s
				},
				ZS: function() {
					return _
				},
				p4: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e);
			const l = () => (0, e.useStore)(),
				_ = () => l().getState(),
				s = () => (0, e.useDispatch)(),
				f = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(x, E, t) {
			"use strict";
			t.d(E, {
				P1: function() {
					return h
				},
				jQ: function() {
					return u
				},
				qR: function() {
					return n
				},
				uc: function() {
					return p
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				o = t("../react/pages/workers/entityTypes.ts"),
				l = t("../react/pages/email/types.ts"),
				_ = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				s = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				f = t.n(s);
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
				h = (...r) => (0, _.P1)(u, p, ...r),
				n = (0, _.QB)(u)
		},
		"../react/app/redux/utils.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return l
				},
				_: function() {
					return o
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const o = _ => (s, f, u) => (0, e.SC)(s, f, u, {
					hideErrorAlert: !0
				}).catch(_),
				l = _ => s => {
					if (s.status === _) return s;
					throw s
				}
		},
		"../react/common/actionTypes.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Cm: function() {
					return f
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return u
				},
				Li: function() {
					return h
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
					return _
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
				_ = "MODAL_CLOSE",
				s = "TOGGLE_ON",
				f = "TOGGLE_OFF",
				u = "SET_ACTIVE",
				p = "CLEAR_ACTIVE",
				h = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(a) {
				return a.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", a.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", a.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", a.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", a.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", a.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", a.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", a.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", a.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", a
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				AX: function() {
					return a
				},
				YT: function() {
					return h
				},
				ct: function() {
					return u
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

			function l(d) {
				for (var i = 1; i < arguments.length; i++) {
					var c = arguments[i] != null ? Object(arguments[i]) : {},
						g = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(c).filter(function(v) {
						return Object.getOwnPropertyDescriptor(c, v).enumerable
					})), g.forEach(function(v) {
						_(d, v, c[v])
					})
				}
				return d
			}

			function _(d, i, c) {
				return i = s(i), i in d ? Object.defineProperty(d, i, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[i] = c, d
			}

			function s(d) {
				var i = f(d, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function f(d, i) {
				if (typeof d != "object" || d === null) return d;
				var c = d[Symbol.toPrimitive];
				if (c !== void 0) {
					var g = c.call(d, i || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(d)
			}
			const u = d => {
					const i = d.payload.map(c => l({}, c, {
						membershipId: c.id,
						id: c.account.id
					}));
					return l({}, d, {
						payload: i
					})
				},
				p = d => {
					const i = u(d);
					return Array.isArray(i.payload) ? l({}, d, {
						payload: i.payload[0]
					}) : l({}, d, {
						payload: null
					})
				},
				h = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", u),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...d) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: d
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", p)
		},
		"../react/common/actions/modalActions.ts": function(x, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				closeModal: function() {
					return _
				},
				openModal: function() {
					return l
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function l(s, f, u = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: s,
						props: f
					},
					options: u
				}
			}

			function _(s) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: s
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				IH: function() {
					return s
				},
				Vp: function() {
					return f
				},
				ZK: function() {
					return p
				},
				um: function() {
					return u
				},
				vU: function() {
					return h
				}
			});
			var e = t("../react/common/actionTypes.ts");

			function o(n) {
				return {
					type: e.Ng,
					notification: n
				}
			}

			function l(n) {
				return {
					type: e.Cz,
					notificationId: n
				}
			}
			let _ = 0;

			function s(n, r, a = {}) {
				return a = a || {},
					function(d) {
						let i = _++,
							c = {
								id: i,
								type: n,
								message: r,
								delay: a.delay,
								persist: a.persist === void 0 ? !1 : a.persist,
								closable: a.closable === void 0 ? !0 : a.closable,
								onClose() {
									d(l(i)), a.onClose && a.onClose.apply(null, arguments)
								}
							};
						d(o(c))
					}
			}

			function f(n, r) {
				return s("success", n, r)
			}

			function u(n, r) {
				return s("info", n, r)
			}

			function p(n, r) {
				return s("warning", n, r)
			}

			function h(n, r) {
				return s("error", n, r)
			}
		},
		"../react/common/actions/userActions.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				BT: function() {
					return u
				},
				Ut: function() {
					return v
				},
				V_: function() {
					return y
				},
				Y9: function() {
					return c
				},
				Z0: function() {
					return S
				},
				mp: function() {
					return g
				},
				r3: function() {
					return P
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/app/redux/utils.ts");

			function l(A) {
				for (var b = 1; b < arguments.length; b++) {
					var I = arguments[b] != null ? Object(arguments[b]) : {},
						F = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols(I).filter(function(z) {
						return Object.getOwnPropertyDescriptor(I, z).enumerable
					})), F.forEach(function(z) {
						_(A, z, I[z])
					})
				}
				return A
			}

			function _(A, b, I) {
				return b = s(b), b in A ? Object.defineProperty(A, b, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[b] = I, A
			}

			function s(A) {
				var b = f(A, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function f(A, b) {
				if (typeof A != "object" || A === null) return A;
				var I = A[Symbol.toPrimitive];
				if (I !== void 0) {
					var F = I.call(A, b || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(A)
			}
			const u = (0, e.C)("user").get`/user`,
				p = (0, e.C)("user").patch`/user`,
				h = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				d = (0, e.C)("user").delete`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/email`;

			function c(...A) {
				return i(...A)
			}
			const g = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				v = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(A => l({}, A, {
					body: l({}, A.body, {
						result: {}
					})
				}))),
				y = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				P = (0, e.C)("userDetails").get`/user/details`,
				S = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(x, E, t) {
			"use strict";
			t.d(E, {
				a: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e),
				l = t("../react/common/selectors/accountSelectors.ts");
			const _ = f => {
					if (typeof f != "string") throw new Error("invalid Param Type provided");
					const u = f.slice(1).split(":");
					if (u.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: u[0],
						value: u[1]
					}
				},
				s = (f, u) => {
					const {
						resourceId: p,
						accountId: h,
						legacyPermission: n
					} = u;
					let {
						read: r,
						edit: a
					} = u;
					const d = {};
					n && (a = `#${n}:edit`, r = `#${n}:read`);
					const i = p || h;
					if (r) {
						const c = Array.isArray(r) ? r : [r];
						d.isReadable = c.some(g => {
							const v = _(g);
							return (0, l.DT)(f, i, y => !!(y[v.key] && y[v.key][v.value]))
						})
					}
					if (a) {
						const c = Array.isArray(a) ? a : [a];
						d.isEditable = c.some(g => {
							const v = _(g);
							return (0, l.DT)(f, i, y => !!(y[v.key] && y[v.key][v.value]))
						})
					}
					return d
				};
			E.Z = (0, e.connect)(s)
		},
		"../react/common/components/AccessControl/index.js": function(x, E, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				o = t.n(e),
				l = t("../react/app/HoCs/withEntities.tsx"),
				_ = t("../react/common/components/AccessControl/SAAConnect.js");

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var d = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(d).filter(function(c) {
						return Object.getOwnPropertyDescriptor(d, c).enumerable
					})), i.forEach(function(c) {
						f(r, c, d[c])
					})
				}
				return r
			}

			function f(r, a, d) {
				return a = u(a), a in r ? Object.defineProperty(r, a, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = d, r
			}

			function u(r) {
				var a = p(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function p(r, a) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var i = d.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}

			function h(r) {
				const d = ["isReadable", "isEditable"].reduce((i, c) => r.hasOwnProperty(c) ? s({}, i, {
					[c]: r[c]
				}) : i, {});
				return r.children(d)
			}
			h.propTypes = {
				resourceType: o().string,
				resourceId: o().string,
				read: o().oneOfType([o().string, o().array]),
				edit: o().oneOfType([o().string, o().array]),
				accountId: o().string,
				isReadable: o().bool,
				isEditable: o().bool,
				children: o().func
			};
			const n = (0, l.Z)((0, _.Z)(h));
			n.displayName = "AccessControl", E.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(x, E, t) {
			"use strict";
			t.d(E, {
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
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				_ = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				s = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const f = () => p.test(window.location.pathname) || l.E.has(_.Qq),
				u = () => l.E.get(_.Qq),
				p = /^\/login\/apple(\/)?/,
				n = [p, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let d = !1;
					n.forEach(c => {
						if (c.test(window.location.pathname)) {
							d = !0;
							return
						}
					});
					const i = f() && d;
					return i && (0, s.C8)(s.LF.OFF), i
				},
				a = d => {
					d && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let i = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					d && (i = i + `&jwt=${d}`), window.location.href = i
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(x, E, t) {
			"use strict";
			t.d(E, {
				oG: function() {
					return i
				},
				sN: function() {
					return p.sN
				},
				v2: function() {
					return p.v2
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				l = t("../node_modules/@cloudflare/component-button/es/index.js"),
				_ = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				f = t.n(s),
				u = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = t("../react/common/components/Dropdown/index.tsx"),
				h = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(c) {
					for (var g = 1; g < arguments.length; g++) {
						var v = arguments[g];
						for (var y in v) Object.prototype.hasOwnProperty.call(v, y) && (c[y] = v[y])
					}
					return c
				}, n.apply(this, arguments)
			}

			function r(c, g) {
				if (c == null) return {};
				var v = a(c, g),
					y, P;
				if (Object.getOwnPropertySymbols) {
					var S = Object.getOwnPropertySymbols(c);
					for (P = 0; P < S.length; P++) y = S[P], !(g.indexOf(y) >= 0) && (!Object.prototype.propertyIsEnumerable.call(c, y) || (v[y] = c[y]))
				}
				return v
			}

			function a(c, g) {
				if (c == null) return {};
				var v = {},
					y = Object.keys(c),
					P, S;
				for (S = 0; S < y.length; S++) P = y[S], !(g.indexOf(P) >= 0) && (v[P] = c[P]);
				return v
			}
			const d = (0, u.createStyledComponent)(({
				theme: c
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${c.radii[2]}px 0 0 ${c.radii[2]}px`,
					borderRight: `1px solid ${c.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${c.radii[2]}px ${c.radii[2]}px 0`,
					paddingRight: c.space[2],
					paddingLeft: c.space[2]
				},
				"& button": {
					color: (0, h.Yc)() ? c.colors.text : void 0
				},
				"& button:hover": {
					color: (0, h.Yc)() ? c.colors.text : void 0
				}
			}));

			function i(c) {
				let {
					menu: g,
					containerProps: v,
					disabled: y,
					disabledDropdown: P = y
				} = c, S = r(c, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: A
				} = (0, s.useI18n)();
				return o().createElement(d, n({}, v, {
					role: "group"
				}), o().createElement(l.zx, n({}, S, {
					disabled: y
				})), o().createElement(p.Lt, {
					trigger: o().createElement(l.zx, {
						type: S.type,
						"aria-haspopup": "menu",
						disabled: P
					}, o().createElement(_.J, {
						type: "caret-down",
						label: A("common.more"),
						size: 12
					})),
					menu: g
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(x, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				l = t("../../../../node_modules/prop-types/index.js"),
				_ = t.n(l),
				s = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const f = ({
				children: u
			}) => o().createElement(s.xu, {
				height: 411
			}, u);
			f.propTypes = {
				children: _().node
			}, E.Z = f
		},
		"../react/common/components/ModalManager.tsx": function(x, E, t) {
			"use strict";
			t.d(E, {
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
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				l = t("webpack/sharing/consume/default/react-redux/react-redux");
			const _ = c => c.application.modals;
			var s = t("../react/common/actions/modalActions.ts"),
				f = t("../../../../node_modules/swr/core/dist/index.mjs"),
				u = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function p() {
				return p = Object.assign ? Object.assign.bind() : function(c) {
					for (var g = 1; g < arguments.length; g++) {
						var v = arguments[g];
						for (var y in v) Object.prototype.hasOwnProperty.call(v, y) && (c[y] = v[y])
					}
					return c
				}, p.apply(this, arguments)
			}
			const h = o().createContext(null);
			class n extends o().Component {
				render() {
					const {
						modals: g,
						closeModal: v
					} = this.props;
					return o().createElement(o().Fragment, null, g.map(({
						ModalComponent: y,
						props: P = {},
						id: S
					}) => {
						const A = () => {
							typeof P.onClose == "function" && P.onClose(), v(y)
						};
						return o().createElement(h.Provider, {
							key: S,
							value: {
								closeModal: A
							}
						}, o().createElement(f.J$, {
							value: u.ZP
						}, o().createElement(y, p({}, P, {
							isOpen: !0,
							closeModal: A
						}))))
					}))
				}
			}

			function r() {
				const c = o().useContext(h);
				if (!c) throw new Error("useModalContext must be used within a ModalContext");
				return c
			}

			function a() {
				const c = (0, l.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...g) {
						return c(s.openModal(...g))
					}, [c]),
					closeModal: (0, e.useCallback)(function(...g) {
						return c(s.closeModal(...g))
					}, [c])
				}
			}
			var i = (0, l.connect)(c => ({
				modals: _(c)
			}), s)(n)
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				BQ: function() {
					return n
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
					return f
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
					return _
				},
				zl: function() {
					return u
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				l = "date-from",
				_ = "date-to",
				s = "from",
				f = "to",
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
			let h = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				n = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/constants/analytics/botScoreSrc.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				EG: function() {
					return l
				},
				Me: function() {
					return s
				},
				sk: function() {
					return _
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let l = function(f) {
				return f.NOT_COMPUTED = "not_computed", f.MACHINE_LEARNING = "machine_learning", f.HEURISTICS = "heuristics", f.BEHAVIORAL_ANALYSIS = "behavioral_analysis", f.JS_FINGERPRINTING = "js_fingerprinting", f.VERIFIED_BOT = "verified_bot", f.CLOUDFLARE_SERVICE = "cloudflare_service", f
			}({});
			const _ = {
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
		"../react/common/constants/billing/index.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Gq: function() {
					return _
				},
				g$: function() {
					return l
				},
				WX: function() {
					return e
				},
				E0: function() {
					return h
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
					return d
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
				_ = {
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
			var n = t("../react/common/constants/billing/tax.ts"),
				r = t("../react/common/constants/billing/tracking.ts"),
				a = t("../react/common/constants/billing/workers.ts");
			const d = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
				_ = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				s = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Dk: function() {
					return d
				},
				Dy: function() {
					return i
				},
				E_: function() {
					return f
				},
				K$: function() {
					return y
				},
				Lv: function() {
					return c
				},
				S4: function() {
					return s
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return h
				},
				Y1: function() {
					return u
				},
				p6: function() {
					return p
				},
				q0: function() {
					return _
				},
				rg: function() {
					return g
				},
				sJ: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const _ = "healthy",
				s = "degraded",
				f = "critical",
				u = "unknown",
				p = "not-monitored",
				h = o().from({
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
					f: h.FREE,
					p: h.PRO,
					b: h.BIZ
				},
				a = "marketing-pt",
				d = () => {
					const P = l.Z.get(a);
					if (!!P) return r[P]
				},
				i = ["gov"],
				c = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				g = "banner-notification-interactions",
				v = null;
			let y = function(P) {
				return P.SUPER_ADMIN = "Super Administrator - All Privileges", P.ADMIN = "Administrator", P.ADMIN_READ_ONLY = "Administrator Read Only", P
			}({})
		},
		"../react/common/constants/index.ts": function(x, E, t) {
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
			var e = t("../react/common/constants/constants.ts"),
				o = t("../react/common/constants/billing/index.ts")
		},
		"../react/common/hooks/suspenseHelpers.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				bt: function() {
					return u
				},
				nW: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				l = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const _ = "suspenseComplete";

			function s() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(_))
				}, [])
			}

			function f(p) {
				(0, l.OR)(_, () => {
					window.setTimeout(p, 0)
				}, {
					target: window
				})
			}

			function u(...p) {
				const [h, n] = p;
				o().useLayoutEffect(h, n), f(h)
			}
		},
		"../react/common/hooks/useAccountId.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return s
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				_ = t.n(l);

			function s() {
				var f;
				const {
					accountId: u
				} = (0, l.useParams)(), p = (0, e.p4)(o.D0);
				if (u === void 0 && !p) throw new Error("Account ID not found in URL params");
				return (f = u) !== null && f !== void 0 ? f : p == null ? void 0 : p.id
			}
		},
		"../react/common/hooks/useCachedState.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				j: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function _(s, {
				key: f,
				cache: u = l.E,
				ttl: p
			} = {}) {
				var h;
				const n = f !== void 0 && u.get(f),
					[r, a] = (0, e.useState)((h = n) !== null && h !== void 0 ? h : s);
				return [r, i => {
					a(c => (i instanceof Function && (i = i(c)), f !== void 0 && u.set(f, i, p), i))
				}]
			}
		},
		"../react/common/hooks/usePrevious.ts": function(x, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function l(_) {
				const s = (0, e.useRef)(_);
				return (0, e.useEffect)(() => {
					s.current = _
				}, [_]), s.current
			}
			E.Z = l
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(x, E, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function l(_) {
				return (0, e.p4)(s => (0, o.rV)(s, _))
			}
			E.Z = l
		},
		"../react/common/middleware/sparrow/errors.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Uh: function() {
					return s
				},
				ez: function() {
					return _
				},
				oV: function() {
					return f
				}
			});

			function e(u, p, h) {
				return p = o(p), p in u ? Object.defineProperty(u, p, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[p] = h, u
			}

			function o(u) {
				var p = l(u, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function l(u, p) {
				if (typeof u != "object" || u === null) return u;
				var h = u[Symbol.toPrimitive];
				if (h !== void 0) {
					var n = h.call(u, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(u)
			}
			class _ extends Error {
				constructor(p, h) {
					super(h);
					e(this, "eventName", void 0), this.eventName = p, this.name = "SparrowValidationError"
				}
			}
			class s extends _ {
				constructor(p) {
					super(p, `Event not allowed: "${p}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class f extends _ {
				constructor(p, h) {
					super(p, `Found invalid properties on event: "${p}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = h
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				AC: function() {
					return Je
				},
				Au: function() {
					return N
				},
				B: function() {
					return Ve
				},
				B3: function() {
					return Ye
				},
				BG: function() {
					return F
				},
				Bp: function() {
					return $e
				},
				D0: function() {
					return S
				},
				DT: function() {
					return M
				},
				EL: function() {
					return k
				},
				EU: function() {
					return K
				},
				GE: function() {
					return Pe
				},
				Ko: function() {
					return R
				},
				Kx: function() {
					return ee
				},
				Le: function() {
					return j
				},
				O4: function() {
					return Ke
				},
				Ou: function() {
					return U
				},
				Py: function() {
					return Qe
				},
				QI: function() {
					return Ee
				},
				RO: function() {
					return ze
				},
				T3: function() {
					return Xe
				},
				T8: function() {
					return I
				},
				UX: function() {
					return re
				},
				VP: function() {
					return ue
				},
				Xo: function() {
					return qe
				},
				Xu: function() {
					return ie
				},
				Yi: function() {
					return rt
				},
				Yj: function() {
					return O
				},
				Zu: function() {
					return L
				},
				bC: function() {
					return ge
				},
				f8: function() {
					return Z
				},
				hI: function() {
					return at
				},
				hN: function() {
					return V
				},
				hX: function() {
					return Be
				},
				iq: function() {
					return He
				},
				nE: function() {
					return z
				},
				oD: function() {
					return Y
				},
				oI: function() {
					return ne
				},
				oJ: function() {
					return et
				},
				tM: function() {
					return W
				},
				uF: function() {
					return $
				},
				ut: function() {
					return Ge
				},
				vU: function() {
					return _e
				},
				wQ: function() {
					return De
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				l = t.n(o),
				_ = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				s = t.n(_),
				f = t("../../../../node_modules/reselect/lib/index.js"),
				u = t("../../../../node_modules/moment/moment.js"),
				p = t.n(u),
				h = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				r = t("../react/common/selectors/userSelectors.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				d = t("../react/app/components/DeepLink/selectors.ts"),
				i = t("../react/common/constants/index.ts"),
				c = t("../react/common/utils/hasRole.ts");

			function g(w) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var pe = arguments[Q] != null ? Object(arguments[Q]) : {},
						ye = Object.keys(pe);
					typeof Object.getOwnPropertySymbols == "function" && ye.push.apply(ye, Object.getOwnPropertySymbols(pe).filter(function(Te) {
						return Object.getOwnPropertyDescriptor(pe, Te).enumerable
					})), ye.forEach(function(Te) {
						v(w, Te, pe[Te])
					})
				}
				return w
			}

			function v(w, Q, pe) {
				return Q = y(Q), Q in w ? Object.defineProperty(w, Q, {
					value: pe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[Q] = pe, w
			}

			function y(w) {
				var Q = P(w, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function P(w, Q) {
				if (typeof w != "object" || w === null) return w;
				var pe = w[Symbol.toPrimitive];
				if (pe !== void 0) {
					var ye = pe.call(w, Q || "default");
					if (typeof ye != "object") return ye;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(w)
			}
			const S = w => {
					const Q = $(w);
					return Q == null ? void 0 : Q.account
				},
				A = w => {
					const Q = (0, r.PR)(w);
					if (Q) {
						const pe = Q.id;
						return w.accountAccess[pe] || {}
					}
					return {}
				},
				b = w => w.accountsDetailed,
				I = (0, n.P1)("accountsDetailed", b),
				F = w => w.memberships,
				z = (0, f.P1)((0, n.P1)("memberships", F), d.U, (w, Q) => !!Q && !!w ? w.filter(pe => Q.includes(pe.id)) : w),
				V = w => w.accountFlags && w.accountFlags.data,
				ee = w => w.accountFlags,
				j = (w, Q, pe) => {
					const ye = V(w);
					return !ye || !ye[Q] ? null : ye[Q][pe]
				},
				oe = w => w.accountFlags.isRequesting,
				ne = (w, ...Q) => l()(w, ["accountFlagsChanges", "data", ...Q]),
				Z = w => w.accountFlagsChanges.isRequesting,
				se = (0, f.P1)(V, ee, (w, Q) => ({
					data: w,
					meta: Q
				})),
				J = (w, Q, pe) => !!(isEnterpriseSSEnabledSelector(w) && j(w, Q, pe)),
				ie = w => w.membership,
				$ = (0, n.P1)("membership", ie),
				X = (0, f.P1)($, ie, (w, Q) => ({
					data: w,
					meta: Q
				})),
				U = w => {
					const {
						roles: Q = []
					} = $(w) || {};
					return Boolean(Q.find(pe => pe === "Super Administrator - All Privileges" || pe === "Billing"))
				},
				W = w => {
					const Q = [i.K$.SUPER_ADMIN];
					return (0, c.n)(w, Q)
				},
				Y = w => {
					const Q = A(w),
						pe = we.getMemberships(w) ? s().asMutable(we.getMemberships(w)) : [];
					if (!!pe) return s().from(pe.map(ye => g({}, ye, {
						lastSeen: Q[ye.account.id] ? Q[ye.account.id].lastSeen : null
					})).sort((ye, Te) => ye.lastSeen && Te.lastSeen ? Te.lastSeen - ye.lastSeen : 0))
				},
				re = w => w.filteredMemberships,
				k = (0, n.P1)("filteredMemberships", re),
				L = (0, f.P1)($, w => w == null ? void 0 : w.permissions),
				O = (0, f.P1)(L, w => (0, e.Z)(Q => {
					var pe;
					return (pe = w == null ? void 0 : w[Q]) !== null && pe !== void 0 ? pe : {
						read: !1,
						edit: !1
					}
				})),
				R = (0, f.P1)($, w => w == null ? void 0 : w.policies),
				M = (w, Q, pe) => {
					let ye = we.getMembership(w);
					if (!ye) {
						const Te = we.getMemberships(w);
						if (!Te || !Q) return !1;
						ye = Te.find(Re => Re.account.id === Q)
					}
					if (!ye || !pe) return !1;
					try {
						return pe(ye.permissions)
					} catch {
						return !1
					}
				},
				H = w => {
					var Q, pe;
					return (Q = (pe = S(w)) === null || pe === void 0 ? void 0 : pe.meta.has_pro_zones) !== null && Q !== void 0 ? Q : !1
				},
				K = w => {
					var Q, pe;
					return (Q = (pe = S(w)) === null || pe === void 0 ? void 0 : pe.meta.has_business_zones) !== null && Q !== void 0 ? Q : !1
				},
				ge = w => K(w) || H(w),
				Ie = (w, Q) => {
					const pe = Le(w, Q);
					return !!pe && !!pe.enabled
				},
				Le = (w, Q) => {
					const pe = we.getMembership(w),
						ye = pe && pe.account;
					return ye && ye.legacy_flags && ye.legacy_flags[Q]
				},
				De = w => Ie(w, "custom_pages"),
				B = w => !!w && w["webhooks.webhooks.enabled"],
				de = w => j(w, "bots", "enabled"),
				Oe = w => j(w, "billing", "annual_subscriptions_enable"),
				ze = w => w ? Boolean(j(w, "ConstellationAI", "v2_ui")) : !1,
				Be = w => w ? Boolean(j(w, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Ve = w => w ? Boolean(j(w, "AIgateway", "enabled")) : !1,
				Ze = w => Le(w, "enterprise_zone_quota"),
				st = w => {
					const Q = Ze(w);
					return !Q || !Q.available ? -1 : Q.available
				},
				He = w => w.accountMembers,
				Ye = (0, n.P1)("accountMembers", He),
				Ke = w => w.accountMember && w.accountMember.isRequesting,
				xe = w => w.accountRoles,
				Je = (0, n.P1)("accountRoles", xe),
				Qe = (w, Q) => {
					const pe = we.getMemberships(w),
						ye = pe && pe.find(tt => tt.account.id === Q);
					if (ye) return ye.account.name.replace(" Account", " account");
					const Te = we.getMembership(w),
						Re = Te && Te.account;
					return Re && Re.id === Q ? Re.name : null
				},
				Ge = (w, Q) => {
					const pe = we.getMemberships(w),
						ye = pe && pe.find(tt => tt.account.id === Q);
					if (ye) return ye.account.settings.access_approval_expiry;
					const Te = we.getMembership(w),
						Re = Te && Te.account;
					return Re && Re.id === Q ? Re.settings.access_approval_expiry : null
				},
				qe = (w, Q) => {
					const pe = Ge(w, Q);
					return pe ? p().utc(pe).isAfter() : !1
				},
				Xe = (w, Q, pe) => {
					const ye = Ge(w, Q);
					let Te = ye ? p().utc(ye) : null;
					return !Te || !Te.isAfter() ? "" : Te && Te.year() === 3e3 ? pe("account.access_approval.card_expiration_forever") : pe("account.access_approval.card_expiration_text", {
						expiryTimestamp: Te.local().format(h.U.DateTime)
					})
				},
				et = w => w && w.member && w.member.edit,
				N = (w, Q) => {
					const pe = we.getMembership(w),
						ye = pe && pe.account;
					return ye ? ye.id !== Q : !1
				},
				q = w => w.dpa,
				me = (0, n.P1)("dpa", q),
				Me = w => w.webhook,
				Se = w => w.webhooks,
				ce = (0, n.P1)("webhook", Se),
				ue = w => w.accountLegoContract,
				fe = (0, n.P1)("accountLegoContract", ue),
				Ee = w => {
					const Q = fe(w);
					return (Q == null ? void 0 : Q.lego_state) ? Q.lego_state : ""
				},
				be = w => Ee(w) === "signed",
				Pe = w => ue(w).isRequesting,
				_e = w => {
					const Q = fe(w);
					return Q && Q.subscription_type ? Q.subscription_type : ""
				},
				Ue = w => _e(w) !== "",
				we = {
					getMembership: $,
					getMemberships: z,
					getFilteredMemberships: k,
					getAccountMembers: Ye,
					getAccountRoles: Je
				},
				$e = w => w.accountSingle,
				rt = (0, n.P1)("accountSingle", $e),
				at = w => {
					const Q = [i.K$.SUPER_ADMIN, i.K$.ADMIN];
					return (0, c.n)(w, Q)
				}
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				$f: function() {
					return i
				},
				AD: function() {
					return s
				},
				BF: function() {
					return d
				},
				Bs: function() {
					return S
				},
				Ci: function() {
					return L
				},
				E6: function() {
					return a
				},
				Gy: function() {
					return De
				},
				Hq: function() {
					return Le
				},
				Ms: function() {
					return I
				},
				Q2: function() {
					return f
				},
				Qq: function() {
					return ge
				},
				Td: function() {
					return y
				},
				Z: function() {
					return M
				},
				a: function() {
					return P
				},
				a5: function() {
					return K
				},
				du: function() {
					return p
				},
				ec: function() {
					return Z
				},
				f: function() {
					return Ie
				},
				hL: function() {
					return H
				},
				ji: function() {
					return O
				},
				jo: function() {
					return F
				},
				lI: function() {
					return _
				},
				p1: function() {
					return g
				},
				pf: function() {
					return n
				},
				qR: function() {
					return v
				},
				rV: function() {
					return u
				},
				u1: function() {
					return h
				},
				w4: function() {
					return r
				},
				yD: function() {
					return R
				}
			});
			var e = t("../react/utils/url.ts");

			function o(B, de) {
				return B && B[de]
			}
			const l = B => !_(B).isRequesting;

			function _(B) {
				return B.entitlements.zone
			}

			function s(B) {
				return _(B).data
			}
			const f = B => {
				var de, Oe;
				return ((de = _(B).paginationData) === null || de === void 0 || (Oe = de.options) === null || Oe === void 0 ? void 0 : Oe.editedDate) || {}
			};

			function u(B, de) {
				const Oe = s(B);
				return Oe ? o(Oe, de) : void 0
			}
			const p = (B, de) => u(B, de) === !0;

			function h(B) {
				return B.entitlements.account
			}

			function n(B) {
				return h(B).data
			}
			const r = B => {
				var de, Oe;
				return ((de = h(B).paginationData) === null || de === void 0 || (Oe = de.options) === null || Oe === void 0 ? void 0 : Oe.editedDate) || {}
			};

			function a(B) {
				return !h(B).isRequesting
			}

			function d(B, de) {
				const Oe = n(B);
				return Oe ? o(Oe, de) : void 0
			}

			function i(B, de) {
				return d(B, de) === !0
			}

			function c(B, de) {
				return de.every(Oe => i(B, Oe))
			}

			function g(B) {
				return i(B, "contract.customer_enabled")
			}

			function v(B) {
				return i(B, "contract.self_service_allowed")
			}

			function y(B) {
				return i(B, "billing.partners_managed")
			}
			const P = B => g(B) && v(B),
				S = B => i(B, "enterprise.ecp_allowed");

			function A(B) {
				return b(B) || i(B, "argo.allow_smart_routing") || i(B, "argo.allow_tiered_caching") || i(B, "rate_limiting.enabled") || i(B, "ctm.enabled") || i(B, "workers.enabled") || i(B, "workers.kv_store.enabled") || i(B, "stream.enabled")
			}
			const b = B => p(B, "argo.allow_smart_routing") || p(B, "argo.allow_tiered_caching"),
				I = B => i(B, "zone.cname_setup_allowed") || i(B, "zone.partial_setup_allowed") || p(B, "zone.partial_setup_allowed"),
				F = B => i(B, "argo.allow_smart_routing") || p(B, "argo.allow_smart_routing"),
				z = B => i(B, "argo.allow_tiered_caching") || p(B, "argo.allow_tiered_caching"),
				V = B => F(B) || z(B),
				ee = B => i(B, "ctm.enabled"),
				j = B => {
					const de = d(B, "ctm.load_balancers");
					return typeof de == "number" ? de : 0
				},
				oe = B => {
					const de = d(B, "ctm.pools");
					return typeof de == "number" ? de : 0
				},
				ne = B => {
					const de = d(B, "ctm.origins");
					return typeof de == "number" ? de : 0
				},
				Z = B => i(B, "workers.enabled"),
				se = B => i(B, "stream.enabled"),
				J = B => {
					const de = d(B, "access.users_allowed");
					return typeof de == "number" ? de : 0
				},
				ie = B => J(B) > 0,
				$ = B => {
					const de = u(B, "dedicated_certificates");
					return typeof de == "number" ? de : 0
				},
				X = B => $(B) > 0,
				U = B => {
					const de = u(B, "rate_limiting.max_rules");
					return typeof de == "number" ? de : 0
				},
				W = B => i(B, "rate_limiting.enabled"),
				Y = B => {
					const de = u(B, "page_rules");
					return typeof de == "number" ? de : 0
				},
				re = B => Y(B) > 0,
				k = B => {
					const de = d(B, "dns_firewall.max_clusters_allowed");
					return typeof de == "number" ? de : 0
				},
				L = B => k(B) > 0,
				O = B => p(B, "zone.advanced_certificate_manager") || i(B, "zone.advanced_certificate_manager"),
				R = B => u(B, "authoritative_dns.proxy_record_allowed") === !1 || d(B, "authoritative_dns.proxy_record_allowed") === !1,
				M = B => i(B, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				H = B => u(B, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				K = B => {
					const de = u(B, "authoritative_dns.min_record_ttl_allowed");
					return typeof de == "number" && de > 1 ? de : 60
				},
				ge = B => i(B, "foundation_dns.advanced_nameservers_allowed") || p(B, "foundation_dns.advanced_nameservers_allowed"),
				Ie = (B, de) => ((0, e.el)(window.location.pathname) ? u : d)(B, de),
				Le = B => i(B, "authoritative_dns.multi_provider_allowed") || p(B, "authoritative_dns.multi_provider_allowed"),
				De = B => p(B, "authoritative_dns.cname_flattening_allowed")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				r: function() {
					return l
				},
				v: function() {
					return _
				}
			});
			var e = t("../react/utils/i18n.ts"),
				o = t("../../../common/intl/intl-types/src/index.ts");
			const l = s => {
				const f = s.userCommPreferences.data;
				if (f == null ? void 0 : f["language-locale"]) return (0, e.i_)(f["language-locale"]), f["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const u = (0, e.Kd)();
					return _(u) ? u : e.ZW
				}
			};

			function _(s) {
				const f = Object.keys(o.Q).find(u => o.Q[u] === s);
				return !!s && typeof s == "string" && f != null && (0, e.S8)(f)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				$8: function() {
					return s
				},
				BG: function() {
					return h
				},
				BY: function() {
					return P
				},
				GP: function() {
					return i
				},
				GU: function() {
					return S
				},
				PR: function() {
					return l
				},
				h$: function() {
					return v
				},
				h8: function() {
					return n
				},
				kk: function() {
					return g
				},
				l8: function() {
					return u
				},
				mV: function() {
					return c
				},
				vW: function() {
					return f
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const o = A => A.user,
				l = (0, e.P1)("user", o),
				_ = A => {
					var b;
					return (b = l(A)) === null || b === void 0 ? void 0 : b.email.endsWith("@cloudflare.com")
				},
				s = A => {
					var b;
					return !!((b = l(A)) === null || b === void 0 ? void 0 : b.id)
				},
				f = A => {
					const b = l(A);
					if (!!b) return b.first_name && b.last_name ? `${b.first_name} ${b.last_name}` : b.email
				},
				u = A => {
					const b = l(A);
					return b && b.has_enterprise_zones
				},
				p = A => A.userCommPreferences,
				h = (0, e.P1)("userCommPreferences", p),
				n = A => {
					const b = l(A);
					return b && b.email_verified
				},
				r = A => {
					const b = h(A);
					return b && b.preferences.marketing_communication
				},
				a = A => A.userDetails,
				d = (0, e.P1)("userDetails", a),
				i = A => {
					const b = d(A);
					return b && b["2FA-RECOVERY"] === "scheduled"
				},
				c = A => {
					const b = d(A);
					return b && b["2FA-RECOVERY"] === "interrupted"
				},
				g = A => {
					const b = d(A);
					return b == null ? void 0 : b["NEW-USER-EMAIL"]
				},
				v = A => A.gates.assignments,
				y = (A, b) => A && A[b];

			function P(A, b) {
				const I = v(A);
				return I ? y(I, b) : void 0
			}
			const S = (A, b) => P(A, b) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				$4: function() {
					return I
				},
				$t: function() {
					return Qe
				},
				A4: function() {
					return g
				},
				Cu: function() {
					return v
				},
				DQ: function() {
					return Ie
				},
				Ej: function() {
					return z
				},
				FH: function() {
					return P
				},
				ID: function() {
					return W
				},
				Ko: function() {
					return Be
				},
				Le: function() {
					return B
				},
				Ly: function() {
					return L
				},
				M3: function() {
					return Ye
				},
				N8: function() {
					return He
				},
				NY: function() {
					return H
				},
				Ns: function() {
					return re
				},
				Ox: function() {
					return Xe
				},
				P4: function() {
					return V
				},
				RO: function() {
					return X
				},
				SX: function() {
					return K
				},
				Tr: function() {
					return ze
				},
				U: function() {
					return y
				},
				Ug: function() {
					return A
				},
				V6: function() {
					return Ke
				},
				WR: function() {
					return et
				},
				Xg: function() {
					return c
				},
				ZB: function() {
					return De
				},
				_y: function() {
					return Y
				},
				cU: function() {
					return Ve
				},
				cg: function() {
					return ge
				},
				d2: function() {
					return se
				},
				il: function() {
					return k
				},
				jN: function() {
					return j
				},
				jg: function() {
					return R
				},
				kC: function() {
					return F
				},
				kf: function() {
					return xe
				},
				ko: function() {
					return $
				},
				mK: function() {
					return Ge
				},
				nA: function() {
					return i
				},
				oY: function() {
					return ee
				},
				qM: function() {
					return de
				},
				rq: function() {
					return M
				},
				tS: function() {
					return b
				},
				tU: function() {
					return ne
				},
				vB: function() {
					return qe
				},
				vM: function() {
					return oe
				},
				wH: function() {
					return S
				},
				wn: function() {
					return Le
				},
				xU: function() {
					return Z
				},
				xw: function() {
					return Oe
				},
				z5: function() {
					return U
				},
				zO: function() {
					return Ze
				},
				zW: function() {
					return Je
				},
				zh: function() {
					return J
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/app/redux/normalizer.js"),
				l = t("../../../../node_modules/lodash/get.js"),
				_ = t.n(l),
				s = t("../../../../node_modules/moment/moment.js"),
				f = t.n(s),
				u = t("../react/common/constants/billing/index.ts");

			function p(N) {
				for (var q = 1; q < arguments.length; q++) {
					var me = arguments[q] != null ? Object(arguments[q]) : {},
						Me = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && Me.push.apply(Me, Object.getOwnPropertySymbols(me).filter(function(Se) {
						return Object.getOwnPropertyDescriptor(me, Se).enumerable
					})), Me.forEach(function(Se) {
						h(N, Se, me[Se])
					})
				}
				return N
			}

			function h(N, q, me) {
				return q = n(q), q in N ? Object.defineProperty(N, q, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[q] = me, N
			}

			function n(N) {
				var q = r(N, "string");
				return typeof q == "symbol" ? q : String(q)
			}

			function r(N, q) {
				if (typeof N != "object" || N === null) return N;
				var me = N[Symbol.toPrimitive];
				if (me !== void 0) {
					var Me = me.call(N, q || "default");
					if (typeof Me != "object") return Me;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (q === "string" ? String : Number)(N)
			}
			const a = (0, o.P1)("zone", N => N.zone),
				d = N => {
					var q;
					return (q = N.zoneVersioning) === null || q === void 0 ? void 0 : q.zoneVersionSelector
				},
				i = (0, e.P1)(a, d, (N, q) => {
					var me, Me, Se;
					let ce;
					if (Array.isArray(N) && N.length === 1 ? ce = N[0] : N && !Array.isArray(N) && (ce = N), !ce) return;
					const ue = !!(q == null ? void 0 : q.enabled);
					return p({}, ce, ce.name && {
						name: ue ? q.rootZoneName : ce.name
					}, {
						versioning: {
							enabled: ue,
							isRoot: !((me = ce.name) === null || me === void 0 ? void 0 : me.endsWith(".config.cfdata.org")),
							version: ue ? q.selectedVersion : 0,
							rootZoneId: ue ? q.rootZoneId : (Me = (Se = ce) === null || Se === void 0 ? void 0 : Se.id) !== null && Me !== void 0 ? Me : ""
						}
					})
				}),
				c = N => N.zone,
				g = (0, e.P1)(i, c, (N, q) => ({
					data: N,
					meta: q
				})),
				v = N => {
					var q, me;
					return (q = (me = i(N)) === null || me === void 0 ? void 0 : me.id) !== null && q !== void 0 ? q : ""
				},
				y = N => N.zones,
				P = N => N.zonesRoot,
				S = N => N.zonesAccount,
				A = (0, o.P1)("zones", y),
				b = (0, o.P1)("zonesRoot", P),
				I = (0, o.P1)("zonesAccount", S);

			function F(N) {
				const q = i(N);
				return q ? q.created_on : null
			}

			function z(N, q, me) {
				const Me = F(N);
				if (!Me) return;
				const Se = f().duration(q, me),
					ce = new Date(Me),
					ue = new Date(new Date().getTime() - Se.asMilliseconds());
				return ce.getTime() > ue.getTime()
			}

			function V(N) {
				const q = i(N);
				return q ? q.status : null
			}

			function ee(N) {
				const q = i(N);
				return q ? q.type : null
			}

			function j(N) {
				return N.plan_pending ? N.plan_pending : N.plan
			}

			function oe(N) {
				const q = i(N);
				if (!q) return;
				const me = j(q);
				return me && me.legacy_id
			}

			function ne(N, q) {
				const me = j(N);
				return !!me && u.Gs.indexOf(me.legacy_id) >= u.Gs.indexOf(q)
			}

			function Z(N) {
				return !!N && N.status === "initializing"
			}

			function se(N) {
				return !!N && N.status === "pending"
			}

			function J(N) {
				return !!N && N.status === "active"
			}

			function ie(N, q) {
				if (!N) return !1;
				const me = j(N);
				return !!me && me.legacy_id === q
			}

			function $(N) {
				return ie(N, "enterprise")
			}
			const X = N => $(i(N));

			function U(N) {
				return ie(N, "business")
			}
			const W = N => U(i(N));

			function Y(N) {
				return ie(N, "pro")
			}

			function re(N) {
				return ie(N, "free")
			}
			const k = N => re(i(N));

			function L(N) {
				return !$(N)
			}

			function O(N) {
				return N && N.owner
			}

			function R(N, q) {
				const me = O(q);
				return !!me && me.type === "user" && me.id === N.id
			}

			function M(N) {
				const q = i(N);
				return !!q && q.type === "partial"
			}

			function H(N) {
				const q = i(N);
				return !!q && q.type === "secondary"
			}

			function K(N) {
				const q = i(N);
				return q && M(N) && q.host
			}
			const ge = N => {
					var q;
					const me = i(N);
					return !!(me == null ? void 0 : me.host) && !!((q = me.plan) === null || q === void 0 ? void 0 : q.externally_managed)
				},
				Ie = N => {
					const q = A(N);
					return q && q.some($)
				},
				Le = (N, q) => {
					const me = i(N);
					return me && me.betas ? me.betas.includes(q) : !1
				},
				De = (N, ...q) => _()(N, ["zoneFlags", "data", ...q]),
				B = (N, ...q) => _()(N, ["accountFlags", "data", ...q]),
				de = N => N.accountFlags.isRequesting,
				Oe = N => N.zoneFlags.isRequesting,
				ze = (N, ...q) => _()(N, ["zoneFlagsChanges", "data", ...q]),
				Be = N => N.zoneFlagsChanges.isRequesting,
				Ve = N => N.zoneFlags && N.zoneFlags.data,
				Ze = N => N.zoneFlags,
				st = (0, e.P1)(Ve, Ze, (N, q) => ({
					data: N,
					meta: q
				})),
				He = (0, o.P1)("abuseUrls", N => N.overview.abuseUrls),
				Ye = N => {
					const q = i(N);
					return q ? `/${q.account.id}/${q.name}` : null
				},
				Ke = N => N.zoneMarketingCampaigns,
				xe = N => N.overview.zoneBlocks.data,
				Je = N => N.overview.zoneBlocks.isRequesting,
				Qe = N => N.overview.zoneBlocks.hasData,
				Ge = N => {
					var q, me;
					return (N == null || (q = N.overview.zoneBlocks) === null || q === void 0 || (me = q.paginationData) === null || me === void 0 ? void 0 : me.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				qe = N => N.overview.zoneBlocksReview.isRequesting,
				Xe = N => N.overview.zoneHold,
				et = (0, o.P1)("zoneHold", Xe)
		},
		"../react/common/utils/formatDate.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			E.Z = (o, l, _ = !1) => (0, e.p6)(o, l, _)
		},
		"../react/common/utils/hasRole.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				n: function() {
					return o
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const o = (l, _) => {
				const {
					roles: s = []
				} = (0, e.uF)(l) || {};
				return _.some(f => s.includes(f))
			}
		},
		"../react/common/utils/isGuards.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Q$: function() {
					return l
				},
				t: function() {
					return f
				},
				v5: function() {
					return _
				},
				zE: function() {
					return s
				}
			});
			var e = t("../react/common/constants/index.ts"),
				o = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const l = u => u ? ["page", "per_page", "count", "total_count"].every(h => h in u && u[h]) : !1,
				_ = (u = "") => e.Dy.includes(u.toLowerCase()),
				s = u => u !== null && typeof u == "object" && "name" in u && "size" in u && "type" in u && typeof u.slice == "function",
				f = u => (0, o.Z)(u)
		},
		"../react/common/utils/useQueryCache.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				o: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function o(u) {
				for (var p = 1; p < arguments.length; p++) {
					var h = arguments[p] != null ? Object(arguments[p]) : {},
						n = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(h).filter(function(r) {
						return Object.getOwnPropertyDescriptor(h, r).enumerable
					})), n.forEach(function(r) {
						l(u, r, h[r])
					})
				}
				return u
			}

			function l(u, p, h) {
				return p = _(p), p in u ? Object.defineProperty(u, p, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[p] = h, u
			}

			function _(u) {
				var p = s(u, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function s(u, p) {
				if (typeof u != "object" || u === null) return u;
				var h = u[Symbol.toPrimitive];
				if (h !== void 0) {
					var n = h.call(u, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(u)
			}
			const f = u => {
				const p = (0, e.useQueryClient)(),
					h = y => {
						var P;
						return p.getQueriesData((P = y) !== null && P !== void 0 ? P : u)
					},
					n = y => {
						var P;
						return p.getQueryData((P = y) !== null && P !== void 0 ? P : u)
					},
					r = y => {
						var P;
						return p.getQueriesData({
							queryKey: (P = y) !== null && P !== void 0 ? P : u,
							stale: !0
						})
					},
					a = (y, P) => {
						var S;
						p.setQueryData((S = P) !== null && S !== void 0 ? S : u, y)
					},
					d = async (y, P) => {
						var S, A;
						await p.invalidateQueries((S = y) !== null && S !== void 0 ? S : u, o({
							refetchActive: !1
						}, (A = P) !== null && A !== void 0 ? A : {}))
					}, i = async (y, P) => {
						const S = y || (A => {
							var b;
							return (A == null || (b = A.queryKey) === null || b === void 0 ? void 0 : b[0]) === u
						});
						await p.invalidateQueries(o({
							predicate: S,
							refetchActive: !1,
							refetchInactive: !1
						}, P))
					};
				return {
					cancelData: async () => {
						await p.cancelQueries(u)
					},
					invalidate: d,
					setData: a,
					getDataStale: r,
					getData: h,
					prefetchQuery: (y, P) => {
						var S;
						return p.prefetchQuery((S = P) !== null && S !== void 0 ? S : u, y)
					},
					getQueryData: n,
					predicateInvalidate: i,
					batchInvalidate: async ({
						queryKeysToInvalidate: y = [],
						queryKeysToPredicateInvalidate: P = [],
						refetchActive: S = !1,
						refetchInactive: A = !1
					}) => {
						const b = y.map(F => d(F)),
							I = P.map(F => i(z => {
								var V;
								return (z == null || (V = z.queryKey) === null || V === void 0 ? void 0 : V[0]) === F
							}, {
								refetchActive: S,
								refetchInactive: A
							}));
						await Promise.all([...b, ...I])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(x, E, t) {
			"use strict";
			t.d(E, {
				K2: function() {
					return o
				},
				Lb: function() {
					return l
				},
				XI: function() {
					return _
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
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = h => /^https?:\/\/(.*)/.test(h),
				l = h => e.default.hostname.test(h),
				_ = h => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(h),
				s = h => /^[!-~]+$/.test(h),
				f = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				u = h => f.test(h),
				p = h => !!h && !!h.length && /^[ -~]+$/.test(h)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(x, E, t) {
			"use strict";
			t.d(E, {
				DZ: function() {
					return _
				},
				GA: function() {
					return h
				},
				hT: function() {
					return f
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
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e);
			const l = a => o().utc(a).format("YYYY-MM-DD"),
				_ = a => o().utc(a).format(),
				s = a => o().utc(a).startOf("minute").format(),
				f = a => new Date(a),
				u = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				p = a => {
					const d = a / 60 / 60 / 1e3;
					return u[Object.keys(u).sort((i, c) => c - i).find(i => d >= i)]
				},
				h = (a, d = i => i.avg && i.avg.sampleInterval ? i.avg.sampleInterval : 1) => a.length === 0 ? 1 : a.reduce((i, c) => i + d(c), 0) / a.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = a => n[a]
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Jz: function() {
					return h
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
					return n
				}
			});

			function e(i) {
				for (var c = 1; c < arguments.length; c++) {
					var g = arguments[c] != null ? Object(arguments[c]) : {},
						v = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(g).filter(function(y) {
						return Object.getOwnPropertyDescriptor(g, y).enumerable
					})), v.forEach(function(y) {
						o(i, y, g[y])
					})
				}
				return i
			}

			function o(i, c, g) {
				return c = l(c), c in i ? Object.defineProperty(i, c, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[c] = g, i
			}

			function l(i) {
				var c = _(i, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function _(i, c) {
				if (typeof i != "object" || i === null) return i;
				var g = i[Symbol.toPrimitive];
				if (g !== void 0) {
					var v = g.call(i, c || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(i)
			}
			let s = function(i) {
					return i.Sending = "sending", i.Success = "success", i.Failed = "failed", i.Latent = "latent", i
				}({}),
				f = function(i) {
					return i[i.Success = 200] = "Success", i[i.BadRequest = 400] = "BadRequest", i
				}({});
			const u = {
					status: s.Latent,
					statusCode: void 0
				},
				p = {
					status: s.Sending
				},
				h = {
					status: s.Success,
					statusCode: f.Success
				},
				n = {
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
				d = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Ux: function() {
					return r
				},
				cz: function() {
					return d
				},
				im: function() {
					return u
				},
				pG: function() {
					return a
				},
				t$: function() {
					return i
				}
			});
			var e = t("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(g) {
				for (var v = 1; v < arguments.length; v++) {
					var y = arguments[v] != null ? Object(arguments[v]) : {},
						P = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(y).filter(function(S) {
						return Object.getOwnPropertyDescriptor(y, S).enumerable
					})), P.forEach(function(S) {
						l(g, S, y[S])
					})
				}
				return g
			}

			function l(g, v, y) {
				return v = _(v), v in g ? Object.defineProperty(g, v, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[v] = y, g
			}

			function _(g) {
				var v = s(g, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function s(g, v) {
				if (typeof g != "object" || g === null) return g;
				var y = g[Symbol.toPrimitive];
				if (y !== void 0) {
					var P = y.call(g, v || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(g)
			}
			const f = g => g.test(window.location.hostname),
				u = () => f(e.j9),
				p = () => f(MARKETPLACE_LOCAL_URL_REGEXP),
				h = (g, v) => {
					const y = random(0, 1) ? -1 : 1;
					return g.points === v.points || g.points >= APP_POINTS_THRESHOLD && v.points >= APP_POINTS_THRESHOLD ? y : g.points < 0 || v.points < 0 || g.points >= APP_POINTS_THRESHOLD || v.points >= APP_POINTS_THRESHOLD ? v.points - g.points : y
				},
				n = (g, v, y) => {
					const P = get(v, y),
						S = get(g, y);
					return P && !isEqual(P, S)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (g, v) => v.map(y => g.find(P => P.id === y)),
						addAppVersionInfo: (g, v) => o({}, v, {
							currentVersion: v.versions.find(y => y.tag === g.versionTag),
							latestVersion: v.versions.find(y => y.tag === v.infoVersion)
						}),
						addCurrentSiteInstall: (g, v) => o({}, v, {
							currentSiteInstall: g.find(y => y.appId === v.id)
						})
					}
				},
				a = (g, v, y) => o({}, g, v, y ? {
					value: y
				} : {}),
				d = g => g.map(v => v.status),
				i = g => g.apps ? g.apps : g,
				c = g => {
					let v = ["by-cloudflare"];
					return g.filter(y => !v.includes(y.id) && y.visible).sort((y, P) => y.points < P.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(x, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				categorySlugTranslationKey: function() {
					return s
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return _
				},
				translations: function() {
					return l
				}
			});
			var e = t("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: l,
				namespace: _
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
				const u = f.replace(/-/g, "_");
				return Object.keys(o).includes(u) ? u : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				L: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/url-join/lib/url-join.js"),
				o = t.n(e),
				l = t("../../../../node_modules/lodash-es/defaults.js"),
				_ = t("../react/pages/apps/marketplace/libraries/helpers.ts");

			function s(d) {
				for (var i = 1; i < arguments.length; i++) {
					var c = arguments[i] != null ? Object(arguments[i]) : {},
						g = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(c).filter(function(v) {
						return Object.getOwnPropertyDescriptor(c, v).enumerable
					})), g.forEach(function(v) {
						p(d, v, c[v])
					})
				}
				return d
			}

			function f(d, i) {
				if (d == null) return {};
				var c = u(d, i),
					g, v;
				if (Object.getOwnPropertySymbols) {
					var y = Object.getOwnPropertySymbols(d);
					for (v = 0; v < y.length; v++) g = y[v], !(i.indexOf(g) >= 0) && (!Object.prototype.propertyIsEnumerable.call(d, g) || (c[g] = d[g]))
				}
				return c
			}

			function u(d, i) {
				if (d == null) return {};
				var c = {},
					g = Object.keys(d),
					v, y;
				for (y = 0; y < g.length; y++) v = g[y], !(i.indexOf(v) >= 0) && (c[v] = d[v]);
				return c
			}

			function p(d, i, c) {
				return i = h(i), i in d ? Object.defineProperty(d, i, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[i] = c, d
			}

			function h(d) {
				var i = n(d, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function n(d, i) {
				if (typeof d != "object" || d === null) return d;
				var c = d[Symbol.toPrimitive];
				if (c !== void 0) {
					var g = c.call(d, i || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(d)
			}
			class r {
				constructor(i) {
					p(this, "token", void 0), p(this, "options", void 0), p(this, "setAuthHeader", c => {
						this.token = c
					}), this.token = "", this.options = (0, l.Z)(i, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(i = "GET", c, g = {}) {
					const {
						body: v
					} = g, y = f(g, ["body"]);
					return fetch(o()(this.options.baseUrl, c), s({
						method: i
					}, y, v ? {
						body: JSON.stringify(v)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(s({
							Accept: "application/json, text/plain, */*"
						}, g.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(i, c = {}) {
					const g = await this.request("GET", i, c);
					return this.parseJSONResponse(g)
				}
				async postJSON(i, c = {}) {
					const g = await this.request("POST", i, s({}, c, {
						headers: s({}, c.headers, {
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
				baseUrl: (0, _.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const a = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
			var e = t("../../../../node_modules/lodash-es/upperFirst.js"),
				o = t("../../../../node_modules/lodash-es/isEmpty.js"),
				l = t("../../../../node_modules/query-string/query-string.js"),
				_ = t.n(l),
				s = t("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				f = t("../react/pages/apps/marketplace/requests/Requester.ts"),
				u = t("../react/pages/apps/marketplace/libraries/resource.ts");

			function* p(i, c, g, v) {
				const y = (0, e.Z)(c),
					[P, S, A] = [`get${y}Sending`, `get${y}Success`, `get${y}Failed`];
				try {
					yield(0, s.gz)(i[P]());
					const b = yield(0, s.RE)(a, g);
					let I = b;
					if (I.error) {
						yield(0, s.gz)(i[A]());
						return
					}
					return v && (I = yield v(b)), yield(0, s.gz)(i[S](I)), I
				} catch {
					yield(0, s.gz)(i[A]())
				}
			}

			function* h(i, c, g, v) {
				const y = (0, e.Z)(c),
					P = `get${y}Sending`,
					S = `get${y}Success`,
					A = `get${y}Failed`;
				try {
					yield(0, s.gz)(i[P]());
					const b = yield(0, s.RE)(d, {
						url: g,
						data: v
					});
					return yield(0, s.gz)(i[S](b)), b
				} catch {
					yield(0, s.gz)(i[A]())
				}
			}
			const n = i => (0, o.Z)(i) ? "" : `?${l.stringify(i)}`,
				r = {
					app: new u.c({
						name: "app",
						url: (i, c) => `apps/${i}${n(c)}`
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
						url: (i = {}) => "categories" + n(i)
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
							url: (i = {}) => "ratings" + n(i)
						}),
						delete: new u.c({
							name: "ratings",
							url: i => `ratings/${i}`
						})
					},
					recommendedApps: new u.c({
						name: "recommendedApps",
						url: (i = {}) => "apps/recommend" + n(i)
					}),
					developedApps: new u.c({
						name: "developedApps",
						url: i => `user/${i}/apps`
					})
				},
				a = async i => f.L.fetchJSON(i), d = async i => {
					const {
						url: c,
						data: g
					} = i;
					return f.L.postJSON(c, {
						body: g
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Nw: function() {
					return p
				},
				U4: function() {
					return u
				},
				XO: function() {
					return f
				},
				ZP: function() {
					return h
				}
			});
			var e = t("../react/pages/apps/marketplace/config/initialState.ts");

			function o(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						d = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), d.forEach(function(i) {
						l(n, i, a[i])
					})
				}
				return n
			}

			function l(n, r, a) {
				return r = _(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function _(n) {
				var r = s(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function s(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var d = a.call(n, r || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let f = function(n) {
					return n.SetCurrentUser = "user.set", n
				}({}),
				u = function(n) {
					return n.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", n.SetZone = "MARKETPLACE/AUTH/SET_ZONE", n.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", n.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", n.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", n.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", n.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", n.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", n.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", n.ResetState = "MARKETPLACE/AUTH/RESET_STATE", n
				}({});
			const p = {
				resetState: () => ({
					type: u.ResetState
				}),
				initSaga: n => ({
					type: u.InitSaga,
					zoneId: n
				}),
				setZone: n => ({
					type: u.SetZone,
					zone: n
				}),
				setToken: n => ({
					type: u.SetToken,
					token: n
				}),
				clearToken: () => ({
					type: u.ClearToken
				}),
				setTokenValid: n => ({
					type: u.SetTokenValid,
					isTokenValid: n
				}),
				getCurrentUserSaga: () => ({
					type: u.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: u.CurrentUserSending
				}),
				getCurrentUserSuccess: n => ({
					type: u.CurrentUserSuccess,
					user: n
				}),
				getCurrentUserFailed: () => ({
					type: u.CurrentUserFailed
				})
			};

			function h(n = e.fD, r) {
				switch (r.type) {
					case u.ResetState:
						return o({}, e.fD);
					case u.CurrentUserSending:
						return o({}, n);
					case u.CurrentUserSuccess:
						const {
							user: a
						} = r;
						return o({}, n, {
							user: a
						});
					case u.CurrentUserFailed:
						return o({}, n);
					case u.SetZone:
						const {
							zone: d
						} = r;
						return o({}, n, {
							zone: d
						});
					case u.SetToken:
						const {
							token: i
						} = r;
						return o({}, n, {
							token: i
						});
					case u.ClearToken:
						return o({}, n, {
							token: null
						});
					case u.SetTokenValid:
						const {
							isTokenValid: c
						} = r;
						return o({}, n, {
							isTokenValid: c
						});
					default:
						return n
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Nw: function() {
					return h
				},
				U4: function() {
					return p
				},
				ZP: function() {
					return n
				},
				dg: function() {
					return u
				}
			});
			var e = t("../react/pages/apps/marketplace/config/initialState.ts"),
				o = t("../react/pages/apps/marketplace/libraries/helpers.ts");

			function l(r) {
				for (var a = 1; a < arguments.length; a++) {
					var d = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(d).filter(function(c) {
						return Object.getOwnPropertyDescriptor(d, c).enumerable
					})), i.forEach(function(c) {
						_(r, c, d[c])
					})
				}
				return r
			}

			function _(r, a, d) {
				return a = s(a), a in r ? Object.defineProperty(r, a, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = d, r
			}

			function s(r) {
				var a = f(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(r, a) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var i = d.call(r, a || "default");
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
			const h = {
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
				getAppInfoAssetsSaga: (r, a, d) => ({
					type: p.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: a,
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
				getRecommendedAppsSaga: (r, a, d) => ({
					type: p.GetRecommendedAppsSaga,
					appsList: r,
					installsList: a,
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

			function n(r = e.w6, a) {
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
		"../react/pages/caching/tracking.tsx": function(x, E, t) {
			"use strict";
			t.d(E, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o
			}({})
		},
		"../react/pages/dns/dns-records/tracking.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/email/types.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
			const _ = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/firewall/analytics/labels.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				AU: function() {
					return l
				},
				Bc: function() {
					return o
				},
				Bt: function() {
					return e
				},
				e_: function() {
					return _
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
				l = {
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
				_ = {
					[l.ASN]: "firewall.analytics.services.labels.asn",
					[l.COUNTRY]: "firewall.analytics.services.labels.country",
					[l.IP]: "firewall.analytics.services.labels.ip",
					[l.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[l.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[l.VALIDATION]: "firewall.analytics.services.labels.validation",
					[l.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[l.WAF]: "firewall.analytics.services.labels.waf",
					[l.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[l.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[l.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[l.BIC]: "firewall.analytics.services.labels.bic",
					[l.HOT]: "firewall.analytics.services.labels.hot",
					[l.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[l.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[l.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[l.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[l.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[l.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[l.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[l.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[l.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[l.DLP]: "firewall.analytics.services.labels.dlp",
					[l.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				}
		},
		"../react/pages/firewall/api-shield/tracking.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Fj: function() {
					return p
				},
				kq: function() {
					return u
				},
				xr: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function l(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						d = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), d.forEach(function(i) {
						_(n, i, a[i])
					})
				}
				return n
			}

			function _(n, r, a) {
				return r = s(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function s(n) {
				var r = f(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function f(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var d = a.call(n, r || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let u = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
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
				h = ({
					name: n,
					category: r = "user journey",
					product: a = u.MAIN,
					productName: d,
					additionalData: i
				}) => {
					o().sendEvent(n, l({
						category: r,
						product: a,
						productName: d
					}, i || {}))
				}
		},
		"../react/pages/firewall/bots/tracking.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
			let e = function(_) {
					return _.INITIAL_FETCH_SCORES = "view bots scores distribution", _.FETCH_CONFIGURATION = "view bots configuration page", _.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", _.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", _.UPDATE_SETTINGS = "update bots settings", _.DELETE_RULE = "delete bots ruleset", _.UPDATE_RULE = "update bots ruleset", _.FETCH_RULES = "view bots ruleset", _.CONFIGURE_BOT_MANAGEMENT = "view bots management", _.WAF_RULES_REDIRECT = "redirect waf rules", _
				}({}),
				o = function(_) {
					return _.PROVIDED_TEMPLATE = "provided template link in detection card", _.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", _.USE_TEMPLATE = "use template", _.CREATE_FIREWALL_RULE = "create firewall rule", _.WAF_RULES = "waf rules", _
				}({});
			const l = "user journey"
		},
		"../react/pages/firewall/page-shield/tracking.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
				VIEW_PAGE_SHIELD_POLICIES: "view page shield policies",
				SHOW_MUTABLE_VERSION_TOOLTIP: "show mutable version warning tooltip",
				OPEN_MUTABLE_VERSION_TOOLTIP: "open mutable version warning tooltip"
			}
		},
		"../react/pages/firewall/rulesets/tracking.tsx": function(x, E, t) {
			"use strict";
			t.d(E, {
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
					return _
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
				l = (s, f) => {
					var u;
					return `${f} ${(u=o[s])!==null&&u!==void 0?u:s} rule${f===e.GET?"s":""}`
				},
				_ = () => {
					var s, f;
					return (s = Object.keys(o)) === null || s === void 0 || (f = s.map(u => {
						var p;
						return (p = Object.values(e)) === null || p === void 0 ? void 0 : p.map(h => l(u, h))
					})) === null || f === void 0 ? void 0 : f.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				AS: function() {
					return f
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
					return d
				},
				oY: function() {
					return _
				},
				qH: function() {
					return n
				},
				x3: function() {
					return u
				}
			});
			var e = t("../react/pages/firewall/analytics/labels.ts"),
				o = t("../react/common/constants/analytics/botScoreSrc.ts");
			const l = ["block", "challenge", "jschallenge", "managedChallenge"],
				_ = ["miss", "expired", "bypass", "dynamic"],
				s = i => Object.fromEntries(Object.entries(i).map(([c, g]) => [g, c])),
				f = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				u = s(f),
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
				h = s(p),
				n = s(o.EG);
			let r = function(i) {
				return i.SAMPLED = "sampled", i.RAW = "raw", i
			}({});
			const a = "security-analytics-log-explorer";
			let d = function(i) {
				return i.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', i.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', i.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', i.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', i.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', i
			}({})
		},
		"../react/pages/firewall/settings/cards/security-txt/helpers.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				$E: function() {
					return n
				},
				Mb: function() {
					return r
				},
				Q4: function() {
					return d
				},
				QF: function() {
					return h
				},
				Wv: function() {
					return a
				},
				vc: function() {
					return i
				}
			});
			var e = t("../react/pages/firewall/settings/cards/security-txt/types.ts"),
				o = t("../../../../node_modules/yup/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				_ = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function s(c) {
				for (var g = 1; g < arguments.length; g++) {
					var v = arguments[g] != null ? Object(arguments[g]) : {},
						y = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(v).filter(function(P) {
						return Object.getOwnPropertyDescriptor(v, P).enumerable
					})), y.forEach(function(P) {
						f(c, P, v[P])
					})
				}
				return c
			}

			function f(c, g, v) {
				return g = u(g), g in c ? Object.defineProperty(c, g, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[g] = v, c
			}

			function u(c) {
				var g = p(c, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function p(c, g) {
				if (typeof c != "object" || c === null) return c;
				var v = c[Symbol.toPrimitive];
				if (v !== void 0) {
					var y = v.call(c, g || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(c)
			}
			const h = {
					[e.T.ENABLED]: !0,
					[e.T.CONTACT]: [""],
					[e.T.EXPIRES]: ""
				},
				n = {
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
				r = c => o.Ry({
					[e.T.CONTACT]: o.IX().of(o.Z_().required(c("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, c("security_txt.fields.contact.format_error"))),
					[e.T.EXPIRES]: o.hT().required(c("common.required")).min(new Date, c("security_txt.fields.expires.min_error"))
				}),
				a = c => {
					const g = {};
					for (const v in c) g[v] = Array.isArray(c[v]) ? c[v].filter(y => !!y) : c[v];
					return s({}, g, {
						expires: (0, _.DZ)(c.expires)
					})
				},
				d = (c, g, v) => {
					const y = [...new Set([e.T.CONTACT, e.T.EXPIRES, ...Object.values(e.T)])],
						P = Object.entries(c).sort(([S], [A]) => y.indexOf(S) - y.indexOf(A)).filter(([S, A]) => !!n[S] && !!A && (!Array.isArray(A) || !!A.length)).map(([S, A]) => Array.isArray(A) ? A.map(b => `${v(n[S].label)}: ${b}`).join(`
`) : `${v(n[S].label)}: ${A}`).join(`
`);
					(0, l.yH)(`Cloudflare_${g}_security.txt`, P, "text/plain;charset=utf-8")
				};
			let i = function(c) {
				return c.CREATED = "created security.txt", c.ENABLED = "enabled security.txt", c.DISABLED = "disabled security.txt", c.DOWNLOADED = "downloaded security.txt", c.UPDATED = "updated security.txt", c.DELETED = "deleted security.txt", c
			}({})
		},
		"../react/pages/firewall/settings/cards/security-txt/types.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				T: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ENABLED = "enabled", o.CONTACT = "contact", o.EXPIRES = "expires", o.ENCRYPTION = "encryption", o.ACKNOWLEDGMENTS = "acknowledgments", o.CANONICAL = "canonical", o.HIRING = "hiring", o.POLICY = "policy", o.PREFERRED_LANGUAGES = "preferred_languages", o
			}({})
		},
		"../react/pages/firewall/settings/labels/api/helpers.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Mi: function() {
					return P
				},
				hL: function() {
					return y
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				l = t("../react/common/utils/useQueryCache.ts"),
				_ = t("../react/pages/firewall/settings/resources/constants/index.ts"),
				s = t("../react/common/hooks/useAccountId.ts"),
				f = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				u = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
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
			var h = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/firewall/settings/resources/utils/index.ts"),
				r = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(A, b) {
				if (A == null) return {};
				var I = d(A, b),
					F, z;
				if (Object.getOwnPropertySymbols) {
					var V = Object.getOwnPropertySymbols(A);
					for (z = 0; z < V.length; z++) F = V[z], !(b.indexOf(F) >= 0) && (!Object.prototype.propertyIsEnumerable.call(A, F) || (I[F] = A[F]))
				}
				return I
			}

			function d(A, b) {
				if (A == null) return {};
				var I = {},
					F = Object.keys(A),
					z, V;
				for (V = 0; V < F.length; V++) z = F[V], !(b.indexOf(z) >= 0) && (I[z] = A[z]);
				return I
			}

			function i(A) {
				for (var b = 1; b < arguments.length; b++) {
					var I = arguments[b] != null ? Object(arguments[b]) : {},
						F = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols(I).filter(function(z) {
						return Object.getOwnPropertyDescriptor(I, z).enumerable
					})), F.forEach(function(z) {
						c(A, z, I[z])
					})
				}
				return A
			}

			function c(A, b, I) {
				return b = g(b), b in A ? Object.defineProperty(A, b, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[b] = I, A
			}

			function g(A) {
				var b = v(A, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function v(A, b) {
				if (typeof A != "object" || A === null) return A;
				var I = A[Symbol.toPrimitive];
				if (I !== void 0) {
					var F = I.call(A, b || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(A)
			}
			const y = A => {
					const b = (0, e.p4)(o.Cu),
						I = (0, s.F)(),
						F = S.labels(i({
							accountId: I,
							zoneId: b
						}, A ? i({}, A) : {})),
						z = (0, l.o)(F);
					return i({
						zoneId: b,
						queryKey: F,
						batchInvalidateLabels: async () => {
							await z.batchInvalidate({
								queryKeysToPredicateInvalidate: [_.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, z)
				},
				P = {
					getLabels: async A => {
						var b, I, F, z;
						let {
							zoneId: V,
							hideErrorAlert: ee = !0
						} = A, j = a(A, ["zoneId", "hideErrorAlert"]);
						return (await f.get(p.labels.toUrl({
							zoneId: V
						}), {
							parameters: {
								page: j == null ? void 0 : j.page,
								per_page: j == null ? void 0 : j.per_page,
								with_mapped_resource_counts: j == null ? void 0 : j.with_mapped_resource_counts,
								filter: j == null || (b = j.filters) === null || b === void 0 ? void 0 : b.search,
								source: (0, n.sQ)(j == null || (I = j.filters) === null || I === void 0 ? void 0 : I.source),
								order: j == null || (F = j.sort) === null || F === void 0 ? void 0 : F.id,
								direction: (j == null ? void 0 : j.sort) ? (j == null || (z = j.sort) === null || z === void 0 ? void 0 : z.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: ee
						})).body
					},
					getLabel: async A => {
						let {
							zoneId: b,
							labelName: I,
							hideErrorAlert: F = !0
						} = A, z = a(A, ["zoneId", "labelName", "hideErrorAlert"]);
						const V = (0, n.mm)(I) ? p.managedLabel.toUrl({
							zoneId: b,
							labelName: I
						}) : p.userLabel.toUrl({
							zoneId: b,
							labelName: I
						});
						return (await f.get(V, {
							parameters: {
								with_mapped_resource_counts: z == null ? void 0 : z.with_mapped_resource_counts
							},
							hideErrorAlert: F
						})).body
					},
					editLabel: async ({
						zoneId: A,
						label: b,
						replace: I
					}) => {
						const {
							name: F
						} = b, z = a(b, ["name"]);
						return (await (I ? f.put : f.patch)(p.userLabel.toUrl({
							zoneId: A,
							labelName: b.name
						}), {
							body: z
						})).body
					},
					deleteLabel: async ({
						zoneId: A,
						labelName: b
					}) => (await f.del(p.userLabel.toUrl({
						zoneId: A,
						labelName: b
					}))).body,
					createLabel: async A => {
						let {
							zoneId: b
						} = A, I = a(A, ["zoneId"]);
						const {
							product: F
						} = I, z = a(I, ["product"]);
						return (await f.post(p.userLabels.toUrl({
							zoneId: b
						}), {
							body: [z]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: A,
						user: b,
						managed: I,
						operationIds: F,
						replace: z
					}) => (await (z ? f.put : f.post)(p.operationsLinkedToLabels.toUrl({
						zoneId: A
					}), {
						body: i({}, b ? {
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
									operation_ids: F
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: A,
						labelName: b,
						operationIds: I
					}) => {
						const F = (0, n.mm)(b) ? p.managedLabelOperations.toUrl({
							zoneId: A,
							labelName: b
						}) : p.userLabelOperations.toUrl({
							zoneId: A,
							labelName: b
						});
						return (await f.put(F, {
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
				S = {
					labels: A => {
						let {
							accountId: b,
							zoneId: I
						} = A, F = a(A, ["accountId", "zoneId"]);
						return [_.IQ.LABELS, b, I, ...(0, h.isEmpty)(F) ? [] : [F]]
					}
				}
		},
		"../react/pages/firewall/settings/labels/api/hooks/useGetLabel.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				E: function() {
					return h
				},
				V: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				l = t("../../../../node_modules/react-query/es/index.js"),
				_ = t("../react/pages/firewall/settings/labels/api/helpers.ts");

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var d = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(d).filter(function(c) {
						return Object.getOwnPropertyDescriptor(d, c).enumerable
					})), i.forEach(function(c) {
						f(r, c, d[c])
					})
				}
				return r
			}

			function f(r, a, d) {
				return a = u(a), a in r ? Object.defineProperty(r, a, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = d, r
			}

			function u(r) {
				var a = p(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function p(r, a) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var i = d.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const h = r => {
					const {
						queryKey: a,
						zoneId: d
					} = (0, _.hL)(r), {
						isLoading: i,
						isError: c,
						isSuccess: g,
						data: v,
						refetch: y,
						isRefetching: P
					} = (0, l.useQuery)({
						queryKey: a,
						queryFn: () => _.Mi.getLabel(s({
							zoneId: d
						}, r)),
						enabled: !!(r == null ? void 0 : r.labelName)
					});
					return {
						data: v == null ? void 0 : v.result,
						errors: v == null ? void 0 : v.errors,
						paginationData: v == null ? void 0 : v.result_info,
						isLoading: i,
						isError: c,
						isSuccess: g,
						refetch: y,
						isRefetching: P
					}
				},
				n = r => {
					const a = (0, l.useQueryClient)(),
						{
							queryKey: d,
							zoneId: i
						} = (0, _.hL)(r),
						c = (0, e.useCallback)(async ({
							labelName: v
						}) => {
							if (!v) throw new Error("Error: unable to get label; missing label name");
							return await _.Mi.getLabel(s({
								zoneId: i,
								labelName: v
							}, r))
						}, [i, r]);
					return {
						getLabel: (0, e.useCallback)(async ({
							labelName: v
						}) => await a.fetchQuery(d, () => c({
							labelName: v
						}), {
							staleTime: 0,
							cacheTime: 0
						}), [a, d, c])
					}
				}
		},
		"../react/pages/firewall/settings/resources/constants/constants.tsx": function(x, E, t) {
			"use strict";
			t.d(E, {
				DG: function() {
					return i
				},
				GE: function() {
					return A
				},
				IQ: function() {
					return _
				},
				KV: function() {
					return f
				},
				QH: function() {
					return r
				},
				V: function() {
					return y
				},
				W3: function() {
					return l
				},
				_8: function() {
					return h
				},
				_c: function() {
					return P
				},
				aW: function() {
					return c
				},
				gY: function() {
					return S
				},
				jz: function() {
					return a
				},
				n5: function() {
					return g
				},
				pZ: function() {
					return n
				},
				wq: function() {
					return s
				},
				zF: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				o = t("../react/pages/firewall/settings/resources/constants/labelsTableProperties.tsx");
			const l = "all";
			let _ = function(I) {
					return I.LABELS = "labels", I
				}({}),
				s = function(I) {
					return I.USER = "user", I.MANAGED = "managed", I
				}({}),
				f = function(I) {
					return I.SOURCE = "source", I
				}({});
			const h = {
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
						[f.SOURCE]: l
					}
				},
				filters: f,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					autoClearQs: !0
				}
			};
			let n = function(I) {
				return I.CREATED_LABEL = "createdLabel", I.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", I.DELETED_LABEL = "deletedLabel", I.APPLIED_LABEL = "appliedLabel", I.EDITED_LABEL = "editedLabel", I.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", I
			}({});
			const r = "650px",
				a = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				d = /^[\x20-\x7E]+$/,
				i = /^[A-Za-z0-9-]+$/,
				c = /^cf-/;
			let g = function(I) {
				return I.NAME = "name", I.DESCRIPTION = "description", I
			}({});
			const v = "all";
			let y = function(I) {
				return I.METHOD = "method", I.HOSTNAME = "hostname", I
			}({});
			const P = {
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
						[y.METHOD]: v,
						[y.HOSTNAME]: v
					}
				},
				filters: y
			};
			let S = function(I) {
				return I.TITLE = "title", I.DESCRIPTION = "description", I.SUBMIT = "submit", I
			}({});
			const A = 1e3,
				b = {
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
		"../react/pages/firewall/settings/resources/constants/index.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
					return _
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
			var e = t("../react/pages/firewall/settings/resources/constants/constants.tsx"),
				o = t("../react/pages/firewall/settings/resources/constants/labelsTableProperties.tsx");
			let l = function(s) {
					return s.ENDPOINT = "endpoint", s.METHOD = "method", s.OPERATION_ID = "operationId", s
				}({}),
				_ = function(s) {
					return s.NAME = "name", s.SOURCE = "source", s.NEW_LABEL_NAME = "newLabelName", s
				}({})
		},
		"../react/pages/firewall/settings/resources/constants/labelsTableProperties.tsx": function(x, E, t) {
			"use strict";
			t.d(E, {
				o: function() {
					return e
				}
			});
			let e = function(o) {
				return o.NAME = "name", o.MAPPED_RESOURCES = "mapped_resources.operations", o.SOURCE = "source", o.APPLY = "apply", o
			}({})
		},
		"../react/pages/firewall/settings/resources/utils/index.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
					return _
				},
				m8: function() {
					return s.m8
				},
				sQ: function() {
					return l
				},
				vU: function() {
					return n
				},
				vE: function() {
					return v
				},
				u_: function() {
					return A
				},
				rP: function() {
					return h
				}
			});
			var e = t("../react/pages/firewall/settings/resources/constants/index.ts");
			const o = b => (b == null ? void 0 : b.source) === e.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (b == null ? void 0 : b.source) === e.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				l = b => b === e.W3 ? void 0 : b,
				_ = b => e.aW.test(b);
			var s = t("../react/pages/firewall/settings/resources/utils/tracking.ts"),
				f = t("webpack/sharing/consume/default/react/react"),
				u = t("../../../../node_modules/lodash/lodash.js"),
				p = t("../react/pages/firewall/settings/labels/api/hooks/useGetLabel.ts");
			const h = () => {
					const [b, I] = (0, f.useState)(!0), [F, z] = (0, f.useState)(!1), [V, ee] = (0, f.useState)(!1), {
						getLabel: j
					} = (0, p.V)(), oe = (0, f.useRef)(null), ne = (0, f.useRef)(""), Z = (0, f.useCallback)(async $ => {
						z(!0);
						try {
							const {
								success: X
							} = await j({
								labelName: $
							});
							I(!X), ne.current = $
						} catch {
							I(!0)
						} finally {
							z(!1), ee(!1)
						}
					}, [j]), se = (0, f.useCallback)($ => {
						oe.current || (oe.current = (0, u.debounce)(Z, 400)), ee(!0), oe.current($)
					}, [Z]), J = (0, f.useCallback)($ => {
						const {
							value: X
						} = $.target;
						se(X)
					}, [se]), ie = (0, f.useCallback)(async $ => {
						(V || $ !== ne.current) && (oe.current && oe.current.cancel(), await Z($))
					}, [V, Z]);
					return {
						isLabelUnique: b,
						setIsLabelUnique: I,
						handleInputChange: J,
						isLoading: F,
						isCheckPending: V,
						ensureChecked: ie
					}
				},
				n = ({
					modalHeaderFixedHeight: b = 62,
					modalDefaultPaddings: I = 16
				} = {}) => {
					const F = (0, f.useRef)(null),
						z = (0, f.useRef)(null),
						[V, ee] = (0, f.useState)(0),
						[j, oe] = (0, f.useState)(0),
						ne = `calc(100vh - ${V}px - ${j}px - ${I}px)`,
						[Z, se] = (0, f.useState)("");
					return (0, f.useEffect)(() => {
						const J = () => {
							var ie, $, X, U;
							const W = F == null || (ie = F.current) === null || ie === void 0 ? void 0 : ie.offsetHeight,
								Y = z == null || ($ = z.current) === null || $ === void 0 ? void 0 : $.offsetHeight,
								re = ((X = W) !== null && X !== void 0 ? X : 0) + b,
								k = (U = Y) !== null && U !== void 0 ? U : 0;
							ee(re), oe(k)
						};
						return J(), window.addEventListener("resize", J), () => window.removeEventListener("resize", J)
					}, []), {
						searchTerm: Z,
						setSearchTerm: se,
						scrollableSectionMaxHeight: ne,
						topMenuRef: F,
						bottomMenuRef: z
					}
				};
			var r = t("../react/common/hooks/useZoneEntitlement.ts"),
				a = t("../react/common/hooks/useGate.ts");
			const d = "central_endpoint_list.endpoint_labels_allowed",
				i = "system-and-user-generated-labels",
				c = () => !!(0, a.Z)(i),
				g = () => !!(0, r.Z)(d),
				v = () => {
					const b = c(),
						I = g();
					return {
						isLabelsGateOpen: b,
						hasEndpointLabelsEntitlement: I,
						hasLabels: b && I
					}
				};
			var y = t("../../../../node_modules/yup/es/index.js"),
				P = t("../react/utils/translator.tsx"),
				S = t("../react/pages/firewall/settings/resources/constants/constants.tsx");
			const A = () => {
				const {
					t: b
				} = (0, P.QT)(), I = y.Z_().required(b("common.field_is_required")).max(24, b("labels.apply.form.name.error.max_characters")).matches(S.DG, b("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", b("labels.apply.form.name.error.cf_forbidden"), V => !S.aW.test(V)), F = {
					NAMES: {
						CREATE: "labels-create-form",
						EDIT: "labels-edit-form",
						APPLY: "labels-apply-form"
					},
					INITIAL_VALUES: {
						name: "",
						description: ""
					},
					VALIDATION_SCHEMA: V => y.Ry().shape({
						[S.n5.NAME]: V ? y.Z_() : I,
						[S.n5.DESCRIPTION]: V ? y.Z_().optional() : y.Z_().max(150, b("labels.apply.form.description.error.max_characters"))
					})
				}, z = {
					NAME: "edit-labels-modal-form",
					INITIAL_VALUES: {
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.NAME]: "",
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.SOURCE]: S.W3,
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.NEW_LABEL_NAME]: ""
					},
					VALIDATION_SCHEMA: () => y.Ry().shape({
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.NEW_LABEL_NAME]: I
					})
				};
				return {
					LABELS_APPLY_FORM: F,
					EDIT_LABELS_MODAL_FORM: z
				}
			}
		},
		"../react/pages/firewall/settings/resources/utils/tracking.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
					return d
				},
				ZF: function() {
					return h
				},
				eC: function() {
					return r
				},
				m8: function() {
					return i
				},
				tR: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function l(c) {
				for (var g = 1; g < arguments.length; g++) {
					var v = arguments[g] != null ? Object(arguments[g]) : {},
						y = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(v).filter(function(P) {
						return Object.getOwnPropertyDescriptor(v, P).enumerable
					})), y.forEach(function(P) {
						_(c, P, v[P])
					})
				}
				return c
			}

			function _(c, g, v) {
				return g = s(g), g in c ? Object.defineProperty(c, g, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[g] = v, c
			}

			function s(c) {
				var g = f(c, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function f(c, g) {
				if (typeof c != "object" || c === null) return c;
				var v = c[Symbol.toPrimitive];
				if (v !== void 0) {
					var y = v.call(c, g || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(c)
			}
			let u = function(c) {
					return c.LABELS_LIST = "Labels List page", c.LABELS_APPLY = "Labels Apply page", c.LABELS_SIDE_MODAL = "Labels Side Modal", c.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", c.LABELS_OPERATION_DETAILS = "Operation Details page", c
				}({}),
				p = function(c) {
					return c.API_SHIELD = "API Shield", c.SECURITY_SETTINGS = "Security Settings", c
				}({}),
				h = function(c) {
					return c.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", c.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", c.OPERATIONS_TABLE_ROW = "Operations table row", c.OPERATION_DETAILS_PAGE = "Operation details page", c
				}({}),
				n = function(c) {
					return c.UPSERT = "upsert", c.OVERWRITE = "overwrite", c
				}({}),
				r = function(c) {
					return c.SINGLE = "single", c.MULTIPLE = "multiple", c
				}({}),
				a = function(c) {
					return c.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", c.DELETE_LABEL = "delete a user label in the settings page", c.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", c.CREATE_LABEL_CLICKED = "click create label button in the settings page", c.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", c.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", c.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", c.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", c.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", c.OPEN_LABELS_SIDE_MODAL = "open labels side modal", c.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", c.CREATE_NEW_LABEL = "create a new label", c
				}({});
			const d = ({
					name: c,
					product: g,
					category: v = "user journey",
					pageName: y,
					from: P,
					write_strategy: S,
					type: A,
					target: b
				}) => {
					o().sendEvent(c, l({
						category: v,
						pageName: y,
						product: g
					}, P ? {
						from: P
					} : {}, S ? {
						write_strategy: S
					} : {}, A ? {
						type: A
					} : {}, b ? {
						target: b
					} : {}))
				},
				i = () => {
					var c;
					return (c = Object.values(a)) === null || c === void 0 ? void 0 : c.flat()
				}
		},
		"../react/pages/home/alerts/config.tsx": function(x, E, t) {
			"use strict";
			t.d(E, {
				jk: function() {
					return v
				},
				w8: function() {
					return y
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				l = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				_ = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function s(P) {
				for (var S = 1; S < arguments.length; S++) {
					var A = arguments[S] != null ? Object(arguments[S]) : {},
						b = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(A).filter(function(I) {
						return Object.getOwnPropertyDescriptor(A, I).enumerable
					})), b.forEach(function(I) {
						f(P, I, A[I])
					})
				}
				return P
			}

			function f(P, S, A) {
				return S = u(S), S in P ? Object.defineProperty(P, S, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[S] = A, P
			}

			function u(P) {
				var S = p(P, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function p(P, S) {
				if (typeof P != "object" || P === null) return P;
				var A = P[Symbol.toPrimitive];
				if (A !== void 0) {
					var b = A.call(P, S || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(P)
			}
			const h = "Notifications",
				n = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				d = (0, e.BC)`${a}/destinations`,
				i = (0, e.BC)`${a}/create`,
				c = (0, e.BC)`${i}/${"alertType"}`,
				g = (0, e.BC)`${a}/edit/${"alertId"}`,
				v = s({
					account: r,
					alerts: a,
					destinations: d,
					createAlert: i,
					createAlertWithSelection: c,
					editAlert: g
				}, o._j, l._j),
				y = s({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, _.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				_j: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				l = (0, e.BC)`${o}/pagerduty/connect`,
				_ = (0, e.BC)`${o}/pagerduty/register`,
				s = (0, e.BC)`${o}/pagerduty`,
				f = {
					pagerDutyConnect: l,
					pagerDutyRegister: _,
					pagerDutyList: s
				};
			var u = null
		},
		"../react/pages/home/alerts/tracking.ts": function(x, E, t) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(x, E, t) {
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
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(x, E, t) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				AA: function() {
					return K
				},
				AN: function() {
					return Re
				},
				AY: function() {
					return ct
				},
				Am: function() {
					return y
				},
				B2: function() {
					return Y
				},
				BB: function() {
					return V
				},
				BF: function() {
					return ce
				},
				BQ: function() {
					return pe
				},
				E8: function() {
					return Ae
				},
				Fl: function() {
					return dt
				},
				Fu: function() {
					return oe
				},
				Gc: function() {
					return $e
				},
				Hc: function() {
					return xt
				},
				IO: function() {
					return ye
				},
				JK: function() {
					return He
				},
				K: function() {
					return I
				},
				LI: function() {
					return Q
				},
				LX: function() {
					return Me
				},
				L_: function() {
					return Je
				},
				Ly: function() {
					return Ft
				},
				MR: function() {
					return k
				},
				Mj: function() {
					return O
				},
				NB: function() {
					return Lt
				},
				Oe: function() {
					return zt
				},
				Or: function() {
					return M
				},
				P5: function() {
					return We
				},
				PE: function() {
					return ze
				},
				Pd: function() {
					return jt
				},
				Pk: function() {
					return Ve
				},
				Pp: function() {
					return qe
				},
				Q1: function() {
					return j
				},
				Qr: function() {
					return Se
				},
				Qv: function() {
					return Be
				},
				Rp: function() {
					return Ut
				},
				S7: function() {
					return gt
				},
				Sh: function() {
					return nt
				},
				Sl: function() {
					return ft
				},
				TZ: function() {
					return H
				},
				Tg: function() {
					return Ye
				},
				Tp: function() {
					return we
				},
				Uy: function() {
					return St
				},
				Vw: function() {
					return Z
				},
				W3: function() {
					return N
				},
				WR: function() {
					return Te
				},
				WX: function() {
					return De
				},
				XF: function() {
					return tt
				},
				Xb: function() {
					return ge
				},
				ZB: function() {
					return ee
				},
				Zs: function() {
					return xe
				},
				_f: function() {
					return ue
				},
				_k: function() {
					return Ue
				},
				b4: function() {
					return Le
				},
				c2: function() {
					return re
				},
				cE: function() {
					return Bt
				},
				dh: function() {
					return Ge
				},
				fE: function() {
					return Qe
				},
				g7: function() {
					return Oe
				},
				hO: function() {
					return et
				},
				hV: function() {
					return Dt
				},
				hk: function() {
					return P
				},
				hr: function() {
					return Ie
				},
				it: function() {
					return Xe
				},
				j3: function() {
					return $t
				},
				jN: function() {
					return st
				},
				jo: function() {
					return Gt
				},
				k3: function() {
					return Wt
				},
				m8: function() {
					return X
				},
				nm: function() {
					return It
				},
				oW: function() {
					return Pt
				},
				oc: function() {
					return v
				},
				pH: function() {
					return U
				},
				pi: function() {
					return $
				},
				rI: function() {
					return L
				},
				s7: function() {
					return rt
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
					return de
				},
				u_: function() {
					return Ht
				},
				vV: function() {
					return fe
				},
				vc: function() {
					return Ze
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				l = t("../../../../node_modules/moment/moment.js"),
				_ = t.n(l),
				s = t("../../../common/util/types/src/api/domain.ts"),
				f = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				u = t("../react/utils/translator.tsx"),
				p = t("../react/utils/url.ts"),
				h = t("../react/pages/home/domain-registration/config.ts"),
				n = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = t("../react/pages/home/domain-registration/types.ts");

			function a(m) {
				for (var C = 1; C < arguments.length; C++) {
					var ae = arguments[C] != null ? Object(arguments[C]) : {},
						Ce = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && Ce.push.apply(Ce, Object.getOwnPropertySymbols(ae).filter(function(ke) {
						return Object.getOwnPropertyDescriptor(ae, ke).enumerable
					})), Ce.forEach(function(ke) {
						d(m, ke, ae[ke])
					})
				}
				return m
			}

			function d(m, C, ae) {
				return C = i(C), C in m ? Object.defineProperty(m, C, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[C] = ae, m
			}

			function i(m) {
				var C = c(m, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function c(m, C) {
				if (typeof m != "object" || m === null) return m;
				var ae = m[Symbol.toPrimitive];
				if (ae !== void 0) {
					var Ce = ae.call(m, C || "default");
					if (typeof Ce != "object") return Ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(m)
			}

			function g(m) {
				return m.filter(C => C.isSelected).reduce((C, {
					fees: ae,
					isZoneEntitlementPresent: Ce
				}) => Ce || !(0, e.isNumber)(ae == null ? void 0 : ae.transfer_fee) ? C : C + (ae == null ? void 0 : ae.transfer_fee), 0)
			}

			function v(m) {
				return m.filter(C => C.registrar.toLowerCase() === "godaddy")
			}
			const y = "MMM D, YYYY";

			function P(m, C, ae, Ce) {
				var ke, Ne, _t, pt, mt, Et, yt, vt, ht, Ct, bt, Tt;
				const Fe = m[C.name];
				return a({
					name: C.name,
					zone: Fe,
					entitlements: ae,
					registryCheck: Ce,
					nameservers: C.name_servers,
					isAvailable: C.available,
					lastKnownStatus: C.last_known_status,
					authCode: C.auth_code,
					isEnterpriseZone: (Fe == null || (ke = Fe.plan) === null || ke === void 0 ? void 0 : ke.legacy_id) === "enterprise",
					isActiveZone: (Fe == null ? void 0 : Fe.status) === "active",
					corResponsesPending: C.cor_responses_pending,
					isCorLocked: C.cor_locked,
					corLockedUntil: C.cor_locked_until ? _()(C.cor_locked_until).format(y) : null,
					isFullZone: (Fe == null ? void 0 : Fe.type) == r.xd.Full,
					isLocked: C.locked,
					registrar: C.current_registrar || h.JM,
					zoneId: Fe == null ? void 0 : Fe.id,
					currentExpiration: _()(C.expires_at).format(y),
					newExpiration: _()(C.expires_at).add(1, "year").format(y),
					lastEntitledAt: C.last_entitled_at ? new Date(C.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(ae) && !!ae.find(Mt => Mt.id === h.g5 && Mt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: C.transfer_in && b(C.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: C.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: C.transfer_in,
					transferOut: C.transfer_out,
					autoRenew: C.auto_renew === !0,
					lastTransferredAt: C.last_transferred_at,
					createdAt: C.created_at,
					paymentExpiresAt: _()(C.payment_expires_at).isValid() ? _()(C.payment_expires_at) : _()(C.expires_at).isValid() ? _()(C.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (Ne = C.contacts) === null || Ne === void 0 || (_t = Ne.administrator) === null || _t === void 0 ? void 0 : _t.id,
						[r.l2.Billing]: (pt = C.contacts) === null || pt === void 0 || (mt = pt.billing) === null || mt === void 0 ? void 0 : mt.id,
						[r.l2.Registrant]: (Et = C.contacts) === null || Et === void 0 || (yt = Et.registrant) === null || yt === void 0 ? void 0 : yt.id,
						[r.l2.Technical]: (vt = C.contacts) === null || vt === void 0 || (ht = vt.technical) === null || ht === void 0 ? void 0 : ht.id
					},
					landing: C.landing,
					whois: C.whois,
					emailVerified: C.email_verified,
					materialChanges: F(C.material_changes),
					corChanges: C.cor_changes ? V(Object.assign(a({}, A), C.cor_changes)) : {},
					registryStatuses: C.registry_statuses ? C.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Ct = C.domain_protection_services) === null || Ct === void 0 ? void 0 : Ct.status
					},
					deletion: {
						isDeletable: C == null || (bt = C.deletion) === null || bt === void 0 ? void 0 : bt.is_deletable
					},
					premiumType: C == null ? void 0 : C.premium_type,
					fees: C == null ? void 0 : C.fees
				}, C.domain_move && {
					domainMove: {
						ineligibilityReasons: (Tt = C.domain_move) === null || Tt === void 0 ? void 0 : Tt.ineligibility_reasons
					}
				}, C.actionable_metadata && {
					actionableMetadata: S(C.actionable_metadata)
				}, C.policies && {
					policies: a({}, C.policies.suspension && {
						suspension: {
							parked: C.policies.suspension.parked,
							parkingReason: C.policies.suspension.parking_reason,
							paymentExpired: C.policies.suspension.payment_expired
						}
					})
				})
			}

			function S(m) {
				return m.map(C => ({
					accountContext: C.account_context,
					createdAt: C.created_at,
					expiresAt: C.expires_at,
					sentAt: C.sent_at,
					status: C.status,
					type: C.type
				}))
			}
			const A = {
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

			function I(m) {
				let C = m.extensions;
				(C == null ? void 0 : C.application_purpose) && (C == null ? void 0 : C.nexus_category) && (m.extensions = {
					nexusCategory: C.nexus_category,
					applicationPurpose: C.application_purpose
				});
				let ae = a({}, typeof m.id == "string" ? {
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
				return Ke(ae)
			}

			function F(m) {
				let C = [];
				const ae = {
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
				for (const Ce in m) {
					const ke = m[Ce],
						Ne = ae[ke];
					C.push(Ne)
				}
				return C
			}
			const z = m => {
				if (!m) return null;
				let C = m;
				return m.includes("C31") && (C = "C31"), m.includes("C32") && (C = "C32"), C
			};

			function V(m) {
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

			function ee(m = {}) {
				const C = {
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
					fees: null,
					policies: {
						suspension: {
							parked: !1,
							parkingReason: null,
							paymentExpired: !1
						}
					}
				};
				return Object.assign(C, m)
			}

			function j(m = {}) {
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

			function oe(m) {
				const C = h.Py.concat(h.ui).reduce((ae, Ce) => a({}, ae, {
					[Ce]: []
				}), {});
				return m.forEach(ae => {
					let Ce = ne(ae.registrar);
					Ce in C || (Ce = h.ui), lt(ae.name) && (Ce = "uk"), C[Ce].push(ae)
				}), Object.keys(C).sort((ae, Ce) => ae.localeCompare(Ce)).map(ae => ({
					registrar: ae,
					domains: C[ae]
				})).filter(ae => ae.domains.length > 0)
			}

			function ne(m) {
				return m == null ? void 0 : m.toLowerCase().replace(/\s|,|\./g, "")
			}

			function Z(m) {
				if (!m || !m.registrar) return "unknown";
				if (lt(m.name)) return "uk";
				const C = ne(m.registrar);
				return C in h.gM ? C : "unknown"
			}
			const se = [];

			function J(m) {
				return se.some(C => m.endsWith("." + C))
			}

			function ie(m) {
				return !m.isEnterpriseZone || !Array.isArray(m.entitlements) ? !1 : !!m.entitlements.find(({
					id: C,
					allocation: ae
				}) => C === h.g5 && ae.value === !0)
			}

			function $(m) {
				var C;
				const ae = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let Ce = !1,
					ke = null;
				return (C = m.registryStatuses) === null || C === void 0 || C.some(Ne => {
					ae.includes(Ne) && (ke = Ne, Ce = !0)
				}), [Ce, ke]
			}

			function X(m, C = !1) {
				if (!m) return [!1, n.keys.cannot_transfer_default];
				if (m.zone.status !== "active") return [!1, n.keys.cannot_transfer_zone_not_active];
				if (!m.isFullZone && !ie(m)) return [!1, n.keys.cannot_transfer_zone_not_eligible];
				if (m.registrar === "Cloudflare") return [!1, n.keys.cannot_transfer_domain_on_cf];
				if (m.isAvailable) return [!1, n.keys.cannot_transfer_domain_available];
				if (!m.transferConditions) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (!C && St(m == null ? void 0 : m.premiumType)) return [!1, n.keys.cannot_transfer_domain_premium];
				if (U(m)) return [!1, n.keys.cannot_transfer_domain_transfer_in_progress];
				let ae;
				for (ae in m.transferConditions)
					if (ae !== "not_premium" && !m.transferConditions[ae]) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (J(m.name)) return [!1, n.keys.cannot_transfer_domain_tld_not_supported];
				const [Ce, ke] = $(m);
				return Ce && ke ? [!1, n.keys.cannot_transfer_domain_registry_status[ke]] : [!0, ""]
			}

			function U(m) {
				var C, ae;
				return !!m.transferIn && !((C = m.transferConditions) === null || C === void 0 ? void 0 : C.not_started) && !!(lt(m.name) || ((ae = m.registryStatuses) === null || ae === void 0 ? void 0 : ae.includes(r.rj.PENDING_TRANSFER)))
			}

			function W(m) {
				return !!m.registrar && !!m.currentExpiration
			}

			function Y(m, C = !1) {
				const [ae] = X(m, C);
				return W(m) ? B(m) ? r.M5.InProgressOrOnCF : ae ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function re(m) {
				return m.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(m.transferIn.enter_auth_code) || !1
			}

			function k(m) {
				return m.registrar === "Cloudflare"
			}

			function L(m) {
				return !!(m == null ? void 0 : m.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function O(m) {
				return !!(m == null ? void 0 : m.includes(r.rj.PENDING_TRANSFER))
			}
			const R = "Invalid date";

			function M(m) {
				return m.newExpiration === R ? "Unavailable" : m.newExpiration
			}

			function H(m) {
				return m.currentExpiration === R ? "Unavailable" : m.currentExpiration
			}

			function K(m) {
				return m.substring(m.indexOf("."))
			}

			function ge(m = "") {
				return m.indexOf(".") !== -1 ? m.substring(0, m.indexOf(".")) : m
			}

			function Ie(m) {
				return m.map(C => C.name).map(C => K(C)).filter((C, ae, Ce) => !Ce.includes(C, ae + 1))
			}

			function Le(m) {
				if (h.no) return [!0, ""];
				if (!k(m)) return [!1, r.ok.NotOnCF];
				if (m.isCorLocked) return [!1, m.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (m.lastTransferredAt) {
					const C = _()(m.lastTransferredAt),
						ae = _().duration(_()().diff(C)).as("days"),
						Ce = lt(m.name);
					if (ae < (Ce ? 1 : 60)) return [!1, Ce ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (m.createdAt) {
					const C = _()(m.createdAt);
					if (_().duration(_()().diff(C)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function De(m) {
				return !!(h.Bc || m.transferOut)
			}

			function B(m) {
				return Oe(m) || k(m)
			}

			function de(m) {
				return !Oe(m) && k(m)
			}

			function Oe(m) {
				return !m || m.lastKnownStatus === "pendingTransfer" || m.lastKnownStatus === "transferFOAPending" || !k(m) && m.transferConditions && !m.transferConditions.not_started || !1
			}

			function ze(m) {
				return !(J(m.name) || m.transferConditions && !m.transferConditions.supported_tld)
			}

			function Be(m) {
				return (m == null ? void 0 : m.includes("/")) ? !0 : m.split("").some(C => C.charCodeAt(0) > 123)
			}

			function Ve(m) {
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

			function Ze(m) {
				return _()(m.paymentExpiresAt).isBefore(_()())
			}

			function st(m) {
				return m.transferIn && m.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function He(m) {
				const C = ["CU", "KP", "IR", "SY"];
				return m.filter(ae => !C.includes(ae.code))
			}

			function Ye(m) {
				if (!!m) return `${m.charAt(0).toUpperCase()}${m.slice(1)}${m.charAt(m.length-1)==="."?"":"."}`
			}

			function Ke(m) {
				const C = {};
				for (const [ae, Ce] of Object.entries(m)) {
					if (Ce && typeof Ce == "string") {
						Object.assign(C, {
							[ae]: Ce.trim()
						});
						continue
					}
					Object.assign(C, {
						[ae]: Ce
					})
				}
				return C
			}

			function xe(m) {
				return _()(m).add(40, "days")
			}

			function Je(m) {
				const C = m.paymentExpiresAt || m.payment_expires_at,
					ae = xe(C);
				return _()().isBetween(C, ae)
			}

			function Qe(m) {
				var C;
				return !(m == null ? void 0 : m.registryStatuses) || !Array.isArray(m == null ? void 0 : m.registryStatuses) && !(0, e.isString)(m == null ? void 0 : m.registryStatuses) ? !1 : (C = m.registryStatuses) === null || C === void 0 ? void 0 : C.includes(r.rj.REDEMPTION_PERIOD)
			}

			function Ge(m) {
				var C;
				return !(m == null ? void 0 : m.registryStatuses) || !Array.isArray(m == null ? void 0 : m.registryStatuses) && !(0, e.isString)(m == null ? void 0 : m.registryStatuses) ? !1 : (C = m.registryStatuses) === null || C === void 0 ? void 0 : C.includes(r.rj.PENDING_DELETE)
			}

			function qe(m) {
				return [".us"].includes(m)
			}

			function Xe(m) {
				return [".us"].includes(m)
			}

			function et(m) {
				switch (m) {
					case ".us":
						return me();
					default:
						return []
				}
			}

			function N(m) {
				switch (m) {
					case ".us":
						return q;
					default:
						return {}
				}
			}
			const q = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function me() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([m, C]) => ({
						value: m,
						label: C
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([m, C]) => ({
						value: m,
						label: C
					}))
				}]
			}

			function Me(m, C, ae) {
				return C[C.length - 1][ae] === m[ae]
			}

			function Se(m) {
				return Boolean(Object.keys(m).length === 0)
			}

			function ce(m) {
				return _()().add(m, "year").format(y)
			}

			function ue({
				accountName: m
			}) {
				var C;
				const ae = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((C = m.toLowerCase().match(ae)) === null || C === void 0 ? void 0 : C[0]) || ""
			}

			function fe(m) {
				return !!m.match(f.default.email)
			}

			function Ee(m) {
				return m === "Registration banned zone error"
			}

			function be(m) {
				return m == null ? void 0 : m.startsWith("Quote error")
			}

			function Pe(m) {
				return m == null ? void 0 : m.startsWith("Invalid acknowledgement")
			}

			function _e(m) {
				return m === (0, u.ZP)(n.keys.registration_checkout_trademark_notice_error_message)
			}

			function Ue(m) {
				return m === "DNS conflict"
			}

			function we(m) {
				return m === s.W7.PENDING_UPDATE
			}

			function $e(m) {
				return m ? Object.values(s.wR).filter(C => C !== s.wR.OFFBOARDED).includes(m) : !1
			}

			function rt(m) {
				return m ? [s.wR.LOCKED, s.wR.ONBOARDED, s.wR.ONBOARDING_INITIATED, s.wR.PENDING_REGISTRY_LOCK, s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(m) : !1
			}

			function at(m) {
				return m ? s.wR.UNLOCKED === m : !1
			}

			function w(m) {
				return m ? s.wR.LOCKED === m : !1
			}

			function Q(m) {
				return m ? s.wR.PENDING_REGISTRY_LOCK === m : !1
			}

			function pe(m) {
				return m ? [s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(m) : !1
			}

			function ye(m) {
				var C;
				return !1
			}

			function Te(m) {
				var C;
				return !1
			}

			function Re(m) {
				var C;
				return !1
			}

			function tt(m) {
				var C;
				return !1
			}

			function Ae(m) {
				var C;
				return !1
			}

			function Pt(m) {
				return Object.keys(s.wR).find(C => s.wR[C].toLowerCase() === m.toLowerCase())
			}

			function ct(m) {
				var C;
				const ae = (C = Pt(m)) === null || C === void 0 ? void 0 : C.toLowerCase();
				return ae ? n.keys.protection_status[ae] : n.keys.protection_status.unknown
			}

			function Nt(m) {
				return ["com", "net"].includes(m)
			}

			function dt(m) {
				const C = (0, p.pu)(m);
				return Nt(C) ? s.wR.PENDING_REGISTRY_LOCK : s.wR.LOCKED
			}

			function nt(m) {
				return (0, p.pu)(m) === "co" ? 5 : 10
			}

			function It(m, C) {
				return C ? 1 : (0, p.pu)(m) === "co" ? 5 : (0, p.pu)(m) === "org" ? 1 : 10
			}

			function lt(m) {
				return (0, p.pu)(m) === "uk"
			}

			function Bt(m) {
				return (0, p.pu)(m) === "us"
			}

			function Ut(m) {
				return _()(m).isValid()
			}

			function Ft(m) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(m)
			}

			function We(m) {
				return !!(m == null ? void 0 : m.id)
			}

			function Lt(m) {
				return m ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(m) : !1
			}

			function jt(m) {
				return m ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(m) : !1
			}

			function Dt(m) {
				var C;
				return (m == null ? void 0 : m.lastKnownStatus) ? (C = m.lastKnownStatus) === null || C === void 0 ? void 0 : C.includes("deletionIrredeemable") : !1
			}

			function St(m) {
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

			function xt(m) {
				if (!m || !m.message) return r.OJ.DEFAULT;
				const {
					message: C
				} = m;
				switch (!0) {
					case C.includes("feature disabled"):
						return r.OJ.FEATURE_DISABLED;
					case C.includes("email unverified"):
						return r.OJ.EMAIL_UNVERIFIED;
					case C.includes("account blocked"):
						return r.OJ.ACCOUNT_BLOCKED;
					default:
						return r.OJ.DEFAULT
				}
			}

			function gt(m) {
				var C, ae;
				return !!(((C = m.policies) === null || C === void 0 || (ae = C.suspension) === null || ae === void 0 ? void 0 : ae.parked) && m.policies.suspension.parkingReason)
			}

			function $t(m) {
				var C, ae;
				return gt(m) && ((C = m.policies) === null || C === void 0 || (ae = C.suspension) === null || ae === void 0 ? void 0 : ae.parkingReason) === r.qK.EMAIL_VERIFICATION
			}

			function Wt(m) {
				var C, ae;
				return gt(m) && ((C = m.policies) === null || C === void 0 || (ae = C.suspension) === null || ae === void 0 ? void 0 : ae.parkingReason) === r.qK.TRUST_AND_SAFETY
			}

			function ft(m) {
				var C;
				return !((C = m.domainMove) === null || C === void 0 ? void 0 : C.ineligibilityReasons.length)
			}

			function zt(m) {
				var C, ae;
				return !!((C = m.domainMove) === null || C === void 0 || (ae = C.ineligibilityReasons) === null || ae === void 0 ? void 0 : ae.includes(r.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function wt(m) {
				var C;
				return (C = m.actionableMetadata) === null || C === void 0 ? void 0 : C.find(ae => ae.type === r.wg.DOMAIN_MOVE)
			}

			function Gt(m) {
				const C = wt(m);
				return (C == null ? void 0 : C.status) === "pending" && C.accountContext === r._5.GAINING
			}

			function Ht(m) {
				const C = wt(m);
				return (C == null ? void 0 : C.status) === "pending" && C.accountContext === r._5.LOSING
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Bc: function() {
					return h
				},
				Hv: function() {
					return X
				},
				JM: function() {
					return l
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
					return p
				},
				jk: function() {
					return $
				},
				no: function() {
					return n
				},
				uY: function() {
					return u
				},
				ui: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../flags.ts");
			const l = "Unknown",
				_ = "unknown",
				s = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				f = Object.keys(s),
				u = !0,
				p = (0, o.J8)("registrar_mock_data") || !1,
				h = (0, o.J8)("registrar_mock_transfer_out") || !1,
				n = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				a = "cf_registrar.enabled",
				d = "@abcABC1234567890123456",
				i = (0, e.BC)`/${"accountId"}`,
				c = (0, e.BC)`${i}/add-site`,
				g = (0, e.BC)`${i}/domains`,
				v = (0, e.BC)`${g}/action-center`,
				y = (0, e.BC)`${g}/${"zoneName"}`,
				P = (0, e.BC)`${y}/configuration`,
				S = (0, e.BC)`${y}/contacts`,
				A = (0, e.BC)`${g}/pricing`,
				b = (0, e.BC)`${g}/protection`,
				I = (0, e.BC)`${g}/register`,
				F = (0, e.BC)`${I}/checkout`,
				z = (0, e.BC)`${I}/checkout/${"token"}`,
				V = (0, e.BC)`${I}/success`,
				ee = (0, e.BC)`${g}/tlds`,
				j = (0, e.BC)`${g}/transfer`,
				oe = (0, e.BC)`${g}/transfer/${"zoneName"}`,
				ne = (0, e.BC)`/registrar/accounts/verify_email`,
				Z = (0, e.BC)`/registrar/domains/verify_email`,
				se = (0, e.BC)`/sign-up/registrar`,
				J = (0, e.BC)`${g}/verify-email`,
				ie = (0, e.BC)`${i}/${"zoneName"}`,
				$ = {
					addSite: c,
					domains: g,
					domainsActionCenter: v,
					domainsDomain: y,
					domainsDomainConfiguration: P,
					domainsDomainContacts: S,
					domainsPricing: A,
					domainsProtection: b,
					domainsRegister: I,
					domainsRegisterCheckout: F,
					domainsRegisterCheckoutToken: z,
					domainsRegisterSuccess: V,
					domainsTlds: ee,
					domainsTransfer: j,
					domainsTransferZone: oe,
					registrarAccountsVerifyEmail: ne,
					registrarDomainsVerifyEmail: Z,
					signup: se,
					verifyEmail: J,
					zone: ie
				},
				X = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(x, E, t) {
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
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				_ = t.n(l),
				s = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function f(a) {
				for (var d = 1; d < arguments.length; d++) {
					var i = arguments[d] != null ? Object(arguments[d]) : {},
						c = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(i).filter(function(g) {
						return Object.getOwnPropertyDescriptor(i, g).enumerable
					})), c.forEach(function(g) {
						u(a, g, i[g])
					})
				}
				return a
			}

			function u(a, d, i) {
				return d = p(d), d in a ? Object.defineProperty(a, d, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[d] = i, a
			}

			function p(a) {
				var d = h(a, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function h(a, d) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var c = i.call(a, d || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(a)
			}
			let n = function(a) {
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a.DOMAIN_MOVE_START_FLOW = "Start domain move flow", a.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", a.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", a.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", a.DOMAIN_MOVE_SUBMIT = "Submit domain move", a.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", a.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", a.DOMAIN_MOVE_CANCEL = "Domain move cancel", a.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", a.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", a.ACTION_CENTER_NAVIGATE = "Navigate to actions center", a.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", a
			}({});

			function r(a, d, i) {
				if (!(d == null ? void 0 : d.name)) return null;
				_().sendEvent(a, f({
					domain: {
						name: d.name,
						premium: (0, s.Uy)(d == null ? void 0 : d.premiumType),
						paymentExpiresAt: o()(d == null ? void 0 : d.paymentExpiresAt).format()
					},
					category: "registrar"
				}, i))
			}
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(x, E, t) {
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
		"../react/pages/hyperdrive/tracking.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				KO: function() {
					return u
				},
				L9: function() {
					return n
				},
				N3: function() {
					return h
				},
				zE: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function l(r) {
				for (var a = 1; a < arguments.length; a++) {
					var d = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(d).filter(function(c) {
						return Object.getOwnPropertyDescriptor(d, c).enumerable
					})), i.forEach(function(c) {
						_(r, c, d[c])
					})
				}
				return r
			}

			function _(r, a, d) {
				return a = s(a), a in r ? Object.defineProperty(r, a, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = d, r
			}

			function s(r) {
				var a = f(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(r, a) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var i = d.call(r, a || "default");
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
				h = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const n = (r, a = {}) => {
				o().sendEvent(r, l({}, a, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/magic/constants.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
					return g
				},
				Up: function() {
					return _
				},
				W8: function() {
					return h
				},
				Ws: function() {
					return v
				},
				Xg: function() {
					return r
				},
				_j: function() {
					return l
				},
				a4: function() {
					return d
				},
				jS: function() {
					return c
				},
				rF: function() {
					return f
				},
				rG: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/utils/translator.tsx");
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
				_ = () => [{
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
				s = y => [{
					value: "low",
					label: y("setting.low")
				}, {
					value: "mid",
					label: y("setting.medium")
				}, {
					value: "high",
					label: y("setting.high")
				}],
				f = y => [{
					value: "request",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				u = y => [{
					value: "unidirectional",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				p = "magic-transit",
				h = "magic-wan",
				n = "gre_tunnel",
				r = "ipsec_tunnel",
				a = 64,
				d = 1476,
				i = "mid",
				c = "reply",
				g = y => [{
					value: void 0,
					label: y("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: y("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: y("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				v = y => [{
					value: "all",
					label: y("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: y("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: y("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/magic/overview/tracking.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				VZ: function() {
					return _
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
			var e = t("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				l = "user journey",
				_ = {
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
		"../react/pages/magic/packet-captures/constants.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(x, E, t) {
			"use strict";
			t.d(E, {
				gb: function() {
					return n
				},
				iP: function() {
					return F
				},
				xL: function() {
					return y
				},
				rD: function() {
					return V
				},
				oT: function() {
					return i
				},
				i2: function() {
					return ee
				},
				x1: function() {
					return f
				},
				lW: function() {
					return p
				},
				UA: function() {
					return b
				},
				K5: function() {
					return a
				},
				Ii: function() {
					return S
				},
				PJ: function() {
					return z
				},
				bK: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				s = t("../node_modules/@cloudflare/elements/es/index.js");
			const f = () => o().createElement(u, null, o().createElement("svg", {
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
				h = (0, l.createComponent)(({
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
				n = () => o().createElement(r, null, o().createElement(s.Ei, {
					alt: "airplane",
					src: _,
					width: "85%"
				})),
				r = (0, l.createComponent)(({
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
				a = () => o().createElement(d, null, o().createElement("svg", {
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
				d = (0, l.createComponent)(({
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
				i = () => o().createElement(c, null, o().createElement("svg", {
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
				c = (0, l.createComponent)(({
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
				g = () => o().createElement(v, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				v = (0, l.createComponent)(({
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
				y = () => o().createElement(P, null, o().createElement("svg", {
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
				P = (0, l.createComponent)(({
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
				S = () => o().createElement(A, null, o().createElement("svg", {
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
				A = (0, l.createComponent)(({
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
				b = () => o().createElement(I, null, o().createElement("svg", {
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
				I = (0, l.createComponent)(({
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
				F = () => o().createElement("svg", {
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
				z = () => o().createElement("svg", {
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
				V = () => o().createElement("svg", {
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
				ee = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				A2: function() {
					return u
				},
				He: function() {
					return s
				},
				N$: function() {
					return f
				},
				Qq: function() {
					return l
				},
				ST: function() {
					return _
				},
				wM: function() {
					return o
				}
			});
			var e = t("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				l = "login-apple-jwt",
				_ = "cf-test",
				s = {
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
				u = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				_: function() {
					return l
				},
				c: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let l = function(s) {
				return s.TEMPLATE_SELECTED = "template selected", s.TEMPLATE_PRODUCT_SELECTED = "template product selected", s.TEMPLATE_SAVE_DRAFT = "template save draft", s.TEMPLATE_CANCEL = "template cancel", s.TEMPLATE_DEPLOY = "template deploy", s
			}({});
			const _ = (s, f) => o().sendEvent(s, {
				template_name: f
			})
		},
		"../react/pages/pages/constants.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				A: function() {
					return g
				},
				C1: function() {
					return h
				},
				Dp: function() {
					return j
				},
				GF: function() {
					return V
				},
				HD: function() {
					return P
				},
				IK: function() {
					return s
				},
				L7: function() {
					return l
				},
				Li: function() {
					return c
				},
				Ni: function() {
					return I
				},
				OG: function() {
					return J
				},
				QF: function() {
					return Z
				},
				QV: function() {
					return b
				},
				Sx: function() {
					return S
				},
				Ub: function() {
					return ne
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
					return v
				},
				fR: function() {
					return e
				},
				hE: function() {
					return oe
				},
				iS: function() {
					return y
				},
				ku: function() {
					return ee
				},
				nY: function() {
					return A
				},
				w3: function() {
					return _
				},
				wJ: function() {
					return p
				},
				wp: function() {
					return d
				},
				yu: function() {
					return n
				},
				zF: function() {
					return z
				},
				zG: function() {
					return F
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
					webAnalytics: "https://developers.cloudflare.com/analytics/web-analytics/",
					feedbackSurvey: "https://forms.gle/dfM8YfpzY4aV3gv56"
				},
				_ = "Allow Members - Cloudflare Pages",
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
				u = "production",
				p = 2e3,
				h = 100,
				n = 350,
				r = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				d = 10,
				i = "_headers",
				c = "_redirects",
				g = "_routes.json",
				v = "_worker.js",
				y = "do-a-barrel-roll",
				P = [i, c, g, v],
				S = 1024 * 1024 * 25,
				A = 1e3,
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
				F = 75e3,
				z = 2e5,
				V = 15e4,
				ee = "workers",
				j = "cloudflare_pages_build_caching",
				oe = 2;
			let ne = function(ie) {
				return ie[ie.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", ie[ie.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", ie[ie.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", ie[ie.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", ie[ie.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", ie[ie.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", ie
			}({});
			const Z = 1,
				se = 2,
				J = 2
		},
		"../react/pages/pages/routes.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return l
				},
				_j: function() {
					return o
				},
				zE: function() {
					return s
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
				_ = f => `${f.subdomain}.pages.dev`,
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
		"../react/pages/pipelines/tracking.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				KO: function() {
					return u
				},
				L9: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function l(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						d = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), d.forEach(function(i) {
						_(n, i, a[i])
					})
				}
				return n
			}

			function _(n, r, a) {
				return r = s(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function s(n) {
				var r = f(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function f(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var d = a.call(n, r || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let u = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				p = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const h = (n, r = {}) => {
				o().sendEvent(n, l({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return l
				},
				Jg: function() {
					return f
				},
				_j: function() {
					return o
				},
				vF: function() {
					return s
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
					bucketManagedDomain: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/domains/managed`,
					bucketCustomDomains: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/domains/custom`,
					bucketCustomDomain: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/domains/custom/${"domainName"}`,
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
				_ = u => {
					const p = "r2.cloudflarestorage.com";
					switch (u) {
						case "default":
							return p;
						case "eu":
							return `eu.${p}`;
						case "fedramp":
							return `fedramp.${p}`
					}
				},
				s = (u, p) => {
					const h = _(p);
					return `https://${u}.${h}`
				},
				f = (u, p, h) => `${s(u,p)}/${h}`
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Gk: function() {
					return a
				},
				LA: function() {
					return h
				},
				Wk: function() {
					return r
				},
				_V: function() {
					return u
				},
				c5: function() {
					return n
				},
				om: function() {
					return p
				}
			});
			var e = t("../react/pages/security-center/BlockedContent/types.ts"),
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function l(d) {
				for (var i = 1; i < arguments.length; i++) {
					var c = arguments[i] != null ? Object(arguments[i]) : {},
						g = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(c).filter(function(v) {
						return Object.getOwnPropertyDescriptor(c, v).enumerable
					})), g.forEach(function(v) {
						_(d, v, c[v])
					})
				}
				return d
			}

			function _(d, i, c) {
				return i = s(i), i in d ? Object.defineProperty(d, i, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[i] = c, d
			}

			function s(d) {
				var i = f(d, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function f(d, i) {
				if (typeof d != "object" || d === null) return d;
				var c = d[Symbol.toPrimitive];
				if (c !== void 0) {
					var g = c.call(d, i || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(d)
			}
			const u = "blocked-content-table-tooltip",
				p = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					canceled: "gray"
				},
				h = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				n = {
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
					filters: Object.values(e.GH).reduce((d, i) => l({}, d, {
						[i]: i
					}), {})
				};
			let a = function(d) {
				return d.COPY_URL = "copy blocked content url", d.REQUEST_REVIEW = "request blocked content review", d.ADD_FILTER = "Add filter", d.REMOVE_FILTER = "Remove filter", d
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
					return _
				}
			});
			let e = function(f) {
					return f.Pending = "pending", f.Active = "active", f
				}({}),
				o = function(f) {
					return f.Active = "active", f.InReview = "in_review", f.Pending = "pending", f.Canceled = "canceled", f
				}({}),
				l = function(f) {
					return f.Domain = "domain", f.Status = "status", f.BlockType = "blockType", f
				}({}),
				_ = function(f) {
					return f.EnforcementDate = "enforcementDate", f.BlockType = "blockType", f.Hostname = "hostname", f.Status = "status", f
				}({}),
				s = function(f) {
					return f.Removed = "removed", f.Misclassified = "misclassified", f
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/shared-config/sparrowEvents.tsx": function(x, E, t) {
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
		"../react/pages/spectrum/tracking.tsx": function(x, E, t) {
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
		"../react/pages/traffic/argo/tracking.ts": function(x, E, t) {
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
		"../react/pages/traffic/load-balancing/tracking.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(x, E, t) {
			"use strict";
			t.d(E, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE = "create waiting room", o.UPDATE = "update waiting room", o.EVENTS = "view waiting rooms events", o.ANALYTICS = "view waiting room analytics", o.GENERATE_PREVIEW = "generate waiting room preview link", o
			}({})
		},
		"../react/pages/turnstile/tracking.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				N3: function() {
					return p
				},
				P: function() {
					return n
				},
				Xh: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function l(r) {
				for (var a = 1; a < arguments.length; a++) {
					var d = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(d).filter(function(c) {
						return Object.getOwnPropertyDescriptor(d, c).enumerable
					})), i.forEach(function(c) {
						_(r, c, d[c])
					})
				}
				return r
			}

			function _(r, a, d) {
				return a = s(a), a in r ? Object.defineProperty(r, a, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = d, r
			}

			function s(r) {
				var a = f(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(r, a) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var i = d.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const u = "TURNSTILE";
			let p = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const h = ({
					name: r,
					product: a = u,
					category: d = "user journey",
					page: i,
					additionalData: c = {}
				}) => {
					o().sendEvent(r, l({
						category: d,
						page: i,
						product: a
					}, c || {}))
				},
				n = () => {
					var r;
					return (r = Object.values(p)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				d: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				default: (0, e.BC)`/${"accountId"}/`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`,
				websites: (0, e.BC)`/${"accountId"}/websites`
			}
		},
		"../react/pages/zoneless-workers/constants.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				$2: function() {
					return b
				},
				CI: function() {
					return S
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
					return i
				},
				X$: function() {
					return y
				},
				X6: function() {
					return h
				},
				d4: function() {
					return d
				},
				fE: function() {
					return p
				},
				im: function() {
					return g
				},
				rL: function() {
					return n
				},
				wW: function() {
					return f
				}
			});

			function e(I) {
				for (var F = 1; F < arguments.length; F++) {
					var z = arguments[F] != null ? Object(arguments[F]) : {},
						V = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && V.push.apply(V, Object.getOwnPropertySymbols(z).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(z, ee).enumerable
					})), V.forEach(function(ee) {
						o(I, ee, z[ee])
					})
				}
				return I
			}

			function o(I, F, z) {
				return F = l(F), F in I ? Object.defineProperty(I, F, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[F] = z, I
			}

			function l(I) {
				var F = _(I, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function _(I, F) {
				if (typeof I != "object" || I === null) return I;
				var z = I[Symbol.toPrimitive];
				if (z !== void 0) {
					var V = z.call(I, F || "default");
					if (typeof V != "object") return V;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(I)
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
				f = 800,
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
				i = {
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
				c = "workers.dev",
				g = "YYYY-MM-DD HH:mm:SS ZZ",
				v = "active",
				y = ["bundled", "unbound", "standard"],
				P = null,
				S = {
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let A = function(I) {
				return I[I.NONE = 0] = "NONE", I[I.MISS = 1] = "MISS", I[I.EXPIRED = 2] = "EXPIRED", I[I.UPDATING = 3] = "UPDATING", I[I.STALE = 4] = "STALE", I[I.HIT = 5] = "HIT", I[I.IGNORED = 6] = "IGNORED", I[I.BYPASS = 7] = "BYPASS", I[I.REVALIDATED = 8] = "REVALIDATED", I[I.DYNAMIC = 9] = "DYNAMIC", I[I.STREAM_HIT = 10] = "STREAM_HIT", I[I.DEFERRED = 11] = "DEFERRED", I
			}({});
			const b = [A.HIT, A.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return u
				},
				L: function() {
					return l
				},
				Q9: function() {
					return _
				},
				_j: function() {
					return s
				},
				ky: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = p => `${p}.workers.dev`,
				l = (p, h, n) => `${n?`${n}.`:""}${p}.${o(h)}`,
				_ = (p, h, n) => `https://${l(p,h,n)}`,
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
					serviceDetailsBuilds: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/builds`,
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
					emailRouting: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes`,
					emailRoutingRule: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes/${"ruleId"}`,
					zones: (0, e.BC)`/${"accountId"}`,
					developerPlatform_workers_create: (0, e.BC)`/${"accountId"}/developer-platform/workers/onboarding`,
					developerPlatform_workers_success: (0, e.BC)`/${"accountId"}/developer-platform/workers/success`,
					logpush: (0, e.BC)`/${"accountId"}/logs`,
					members: (0, e.BC)`/${"accountId"}/members`
				},
				f = "https://cron-triggers.cloudflareworkers.com",
				u = {
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
						telemetry: {
							query: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/query`,
							keys: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/keys`,
							values: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/values`
						},
						usage: (0, e.BC)`/accounts/${"accountId"}/workers/observability/usage`,
						usageStatuses: (0, e.BC)`/accounts/${"accountId"}/workers/observability/usage-statuses`
					},
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				MN: function() {
					return l
				},
				Yg: function() {
					return s
				},
				i$: function() {
					return _
				},
				l3: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const l = async ([u, p]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: u,
					variables: p
				})
			})).body, _ = async (...u) => (await e.get(...u)).body, s = u => async (p, h) => {
				const n = await fetch(p, h).then(r => r.json());
				return u.assertDecode(n)
			}, f = async (...u) => (await _(...u)).result;
			E.ZP = {
				fetcher: u => Array.isArray(u) ? f(...u) : f(u)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(x, E) {
				E()
			})(this, function() {
				"use strict";

				function x() {
					var t = !0,
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

					function _(g) {
						return !!(g && g !== document && g.nodeName !== "HTML" && g.nodeName !== "BODY" && "classList" in g && "contains" in g.classList)
					}

					function s(g) {
						var v = g.type,
							y = g.tagName;
						return !!(y == "INPUT" && l[v] && !g.readOnly || y == "TEXTAREA" && !g.readOnly || g.isContentEditable)
					}

					function f(g) {
						g.getAttribute("is-focus-visible") !== "" && g.setAttribute("is-focus-visible", "")
					}

					function u(g) {
						g.getAttribute("is-focus-visible") === "" && g.removeAttribute("is-focus-visible")
					}

					function p(g) {
						_(document.activeElement) && f(document.activeElement), t = !0
					}

					function h(g) {
						t = !1
					}

					function n(g) {
						!_(g.target) || (t || s(g.target)) && f(g.target)
					}

					function r(g) {
						!_(g.target) || g.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), u(g.target))
					}

					function a(g) {
						document.visibilityState == "hidden" && (e && (t = !0), d())
					}

					function d() {
						document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c)
					}

					function i() {
						document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c)
					}

					function c(g) {
						g.target.nodeName.toLowerCase() !== "html" && (t = !1, i())
					}
					document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", h, !0), document.addEventListener("pointerdown", h, !0), document.addEventListener("touchstart", h, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", a, !0), d(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function E(t) {
					var e;

					function o() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && E(x)
			})
		},
		"../react/utils/bootstrap.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				$8: function() {
					return o
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return _
				},
				gm: function() {
					return l
				}
			});
			const e = () => {
					var s, f, u;
					return (s = window) === null || s === void 0 || (f = s.bootstrap) === null || f === void 0 || (u = f.data) === null || u === void 0 ? void 0 : u.security_token
				},
				o = () => {
					var s, f, u;
					return !!((s = t.g.bootstrap) === null || s === void 0 || (f = s.data) === null || f === void 0 || (u = f.user) === null || u === void 0 ? void 0 : u.id)
				},
				l = () => {
					var s, f;
					return !!((s = t.g.bootstrap) === null || s === void 0 || (f = s.data) === null || f === void 0 ? void 0 : f.is_kendo)
				},
				_ = () => {
					var s, f, u, p;
					return (s = window) === null || s === void 0 || (f = s.bootstrap) === null || f === void 0 || (u = f.data) === null || u === void 0 || (p = u.user) === null || p === void 0 ? void 0 : p.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				O5: function() {
					return _
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
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				l = () => (o() || "").indexOf("C0002") !== -1,
				_ = () => (o() || "").indexOf("C0003") !== -1,
				s = () => (o() || "").indexOf("C0004") !== -1,
				f = () => (o() || "").indexOf("C0005") !== -1,
				u = n => {
					const r = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				p = () => {
					var n;
					const r = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				h = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				AI: function() {
					return S
				},
				Kd: function() {
					return r
				},
				S8: function() {
					return P
				},
				ZW: function() {
					return p
				},
				ay: function() {
					return A
				},
				fh: function() {
					return b
				},
				i_: function() {
					return a
				},
				th: function() {
					return u
				},
				ti: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				l = t("../../../common/intl/intl-types/src/index.ts"),
				_ = t("../../../common/util/types/src/utils/index.ts"),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f = t("../../../../node_modules/cookie/index.js");
			const u = "cf-sync-locale-with-cps",
				p = l.Q.en_US,
				h = "en_US",
				n = "cf-locale";

			function r() {
				const z = (0, f.parse)(document.cookie);
				return s.Z.get(n) || z[n] || null
			}

			function a(z) {
				document.cookie = (0, f.serialize)(n, z, {
					path: "/",
					maxAge: 31536e3
				}), s.Z.set(n, z)
			}

			function d() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const i = z => (0, _.Yd)(l.Q).find(V => l.Q[V] === z) || h,
				c = [],
				g = [],
				v = [l.Q.de_DE, l.Q.en_US, l.Q.es_ES, l.Q.fr_FR, l.Q.it_IT, l.Q.pt_BR, l.Q.ko_KR, l.Q.ja_JP, l.Q.zh_CN, l.Q.zh_TW],
				y = {
					test: [...v, ...g, ...c],
					development: [...v, ...g, ...c],
					staging: [...v, ...g, ...c],
					production: [...v, ...g]
				},
				P = z => {
					const V = l.Q[z];
					return y.production.includes(V)
				},
				S = () => Object.keys(l.Q).filter(z => P(z)),
				A = z => {
					const V = l.Q[z];
					return g.includes(V)
				},
				b = z => I[z],
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
				F = o().locale();
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
			}), o().locale(F)
		},
		"../react/utils/translator.tsx": function(x, E, t) {
			"use strict";
			t.d(E, {
				QT: function() {
					return i
				},
				Vb: function() {
					return p
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return u
				},
				_m: function() {
					return r
				},
				cC: function() {
					return a
				},
				oc: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = t("../../../common/intl/intl-core/src/Translator.ts"),
				l = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				_ = t.n(l),
				s = t("../flags.ts");
			const f = new o.Z({
				pseudoLoc: (0, s.J8)("is_pseudo_loc")
			});

			function u(c, ...g) {
				return f.t(c, ...g)
			}
			const p = f;

			function h(c, ...g) {
				return markdown(u(c, g))
			}

			function n(c) {
				if (Number(c) !== 0) {
					if (c % 86400 == 0) return u("time.num_days", {
						smart_count: c / 86400
					});
					if (c % 3600 == 0) return u("time.num_hours", {
						smart_count: c / 3600
					});
					if (c % 60 == 0) return u("time.num_minutes", {
						smart_count: c / 60
					})
				}
				return u("time.num_seconds", {
					smart_count: c
				})
			}

			function r(c, g) {
				return c in g ? g[c] : void 0
			}
			const a = l.Trans,
				d = l.I18n,
				i = l.useI18n
		},
		"../react/utils/url.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Ct: function() {
					return S
				},
				Fl: function() {
					return Y
				},
				KT: function() {
					return k
				},
				NF: function() {
					return c
				},
				Nw: function() {
					return y
				},
				Pd: function() {
					return v
				},
				Uh: function() {
					return X
				},
				Y_: function() {
					return i
				},
				e1: function() {
					return P
				},
				el: function() {
					return j
				},
				hW: function() {
					return ne
				},
				pu: function() {
					return re
				},
				qR: function() {
					return ee
				},
				td: function() {
					return g
				},
				uW: function() {
					return se
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				o = t.n(e),
				l = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				_ = t("../react/pages/stream/routes.ts"),
				s = t("../react/pages/r2/routes.ts"),
				f = t("../react/pages/zoneless-workers/routes.ts"),
				u = t("../react/pages/pages/routes.ts");

			function p(L) {
				for (var O = 1; O < arguments.length; O++) {
					var R = arguments[O] != null ? Object(arguments[O]) : {},
						M = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(R).filter(function(H) {
						return Object.getOwnPropertyDescriptor(R, H).enumerable
					})), M.forEach(function(H) {
						h(L, H, R[H])
					})
				}
				return L
			}

			function h(L, O, R) {
				return O = n(O), O in L ? Object.defineProperty(L, O, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[O] = R, L
			}

			function n(L) {
				var O = r(L, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function r(L, O) {
				if (typeof L != "object" || L === null) return L;
				var R = L[Symbol.toPrimitive];
				if (R !== void 0) {
					var M = R.call(L, O || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(L)
			}
			const {
				endsWithSlash: a
			} = l.default, d = (L, O) => {
				const R = L.replace(a, "").split("/");
				return R.slice(0, 2).concat([O]).concat(R.slice(3)).join("/")
			}, i = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), c = L => `/${L.replace(a,"").replace(/^\//,"")}`, g = L => y("add-site", L), v = L => y("billing", L), y = (L, O) => O ? `/${O}${L?`/${L}`:""}` : `/?to=/:account/${L}`, P = () => {
				const L = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return L ? L[1] : null
			}, S = (L, O) => o().stringify(p({}, o().parse(L), O)), A = (L = "") => L.toString().replace(/([\/]{1,})$/, ""), b = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], I = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, F = /^\/(\w{32,})(\/[^.]*)?/, z = L => b.includes(L), V = L => !z(L), ee = L => !z(L) && F.test(L), j = L => !z(L) && I.test(L), oe = L => I.exec(L), ne = L => {
				if (j(L)) return L.split("/").filter(O => O.length > 0)[1]
			}, Z = L => F.exec(L), se = L => {
				if (ee(L)) {
					const O = Z(L);
					if (O) return O[1]
				}
			}, J = L => ee(L) && L.split("/")[2] === "register-domain", ie = L => J(L) ? L.split("/") : null, $ = L => {
				if (j(L)) {
					const [, , , O, R, M, H, K] = L.split("/");
					return O === "traffic" && R === "load-balancing" && M === "pools" && H === "edit" && K
				}
			}, X = L => {
				const O = ie(L);
				if (O) return O[3]
			}, U = (L, O) => {
				var R, M;
				return ((R = L.pattern.match(/\:/g)) !== null && R !== void 0 ? R : []).length - ((M = O.pattern.match(/\:/g)) !== null && M !== void 0 ? M : []).length
			}, W = [...Object.values(_.C), ...Object.values(s._j), ...Object.values(f._j), ...Object.values(u._j)].sort(U);

			function Y(L) {
				if (!V(L)) return L;
				for (const K of W)
					if (K.expression.test(L)) return K.pattern;
				const O = ie(L);
				if (O) {
					const [, , K, , ...ge] = O;
					return `/:accountId/${K}/:domainName/${ge.join("/")}`
				}
				if ($(L)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const M = oe(L);
				if (M) {
					const [, , , , K] = M;
					return `/:accountId/:zoneName${K||""}`
				}
				const H = Z(L);
				if (H) {
					const [, , K] = H;
					return `/:accountId${K||""}`
				}
				return L
			}

			function re(L) {
				if (!!L) try {
					const R = L.split(".").pop();
					if (R && R.length > 0) return R
				} catch {}
			}

			function k(L, O = document.location.href) {
				try {
					const R = new URL(L),
						M = new URL(O);
					if (R.origin === M.origin) return `${R.pathname}${R.search}${R.hash}`
				} catch {}
			}
		},
		"../react/utils/zaraz.ts": function(x, E, t) {
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
		"../utils/getDashVersion.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				p: function() {
					return l
				},
				t: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var _, s;
					return (_ = window) === null || _ === void 0 || (s = _.build) === null || s === void 0 ? void 0 : s.dashVersion
				},
				l = () => {
					var _;
					return ((0, e.parse)((_ = document) === null || _ === void 0 ? void 0 : _.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Wi: function() {
					return Se
				},
				IM: function() {
					return Me
				},
				yV: function() {
					return q
				},
				Ug: function() {
					return N
				},
				v_: function() {
					return me
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				l = t("../react/utils/bootstrap.ts"),
				_ = t("../react/app/providers/storeContainer.js"),
				s = t("../react/common/selectors/languagePreferenceSelector.ts"),
				f = t("../flags.ts"),
				u = t("../../../../node_modules/cookie/index.js"),
				p = t("../react/utils/url.ts"),
				h = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../../../../node_modules/lodash-es/memoize.js"),
				a = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				d = t("../utils/getDashVersion.ts"),
				i = t("../react/common/selectors/accountSelectors.ts");

			function c(ce) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var fe = arguments[ue] != null ? Object(arguments[ue]) : {},
						Ee = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && Ee.push.apply(Ee, Object.getOwnPropertySymbols(fe).filter(function(be) {
						return Object.getOwnPropertyDescriptor(fe, be).enumerable
					})), Ee.forEach(function(be) {
						g(ce, be, fe[be])
					})
				}
				return ce
			}

			function g(ce, ue, fe) {
				return ue = v(ue), ue in ce ? Object.defineProperty(ce, ue, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[ue] = fe, ce
			}

			function v(ce) {
				var ue = y(ce, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function y(ce, ue) {
				if (typeof ce != "object" || ce === null) return ce;
				var fe = ce[Symbol.toPrimitive];
				if (fe !== void 0) {
					var Ee = fe.call(ce, ue || "default");
					if (typeof Ee != "object") return Ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ue === "string" ? String : Number)(ce)
			}
			const P = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional
				})),
				S = (0, r.Z)(ce => {
					try {
						return P.assertDecode((0, u.parse)(ce))
					} catch (ue) {
						return console.error(ue), {}
					}
				}),
				A = ce => (ue, fe, Ee) => {
					try {
						const we = window.location.pathname,
							$e = (0, _.bh)().getState(),
							rt = S(document.cookie),
							at = c({
								page: (0, p.Fl)(Ee.page || window.location.pathname),
								dashVersion: (0, d.t)()
							}, rt);
						if (ue === "identify") {
							var be, Pe;
							const w = {
								gates: (0, a.T2)($e) || {},
								country: (be = t.g) === null || be === void 0 || (Pe = be.bootstrap) === null || Pe === void 0 ? void 0 : Pe.ip_country
							};
							return ce(ue, fe, c({}, at, w, Ee))
						} else {
							const w = {
								accountId: (0, p.uW)(we),
								zoneName: (0, p.hW)(we),
								domainName: (0, p.Uh)(we)
							};
							if ((0, p.qR)(we)) {
								var _e;
								const Q = (0, i.D0)($e);
								w.isEntAccount = Q == null || (_e = Q.meta) === null || _e === void 0 ? void 0 : _e.has_enterprise_zones
							}
							if ((0, p.el)(we)) {
								var Ue;
								const Q = (0, h.nA)($e);
								w.zoneId = Q == null ? void 0 : Q.id, w.plan = Q == null || (Ue = Q.plan) === null || Ue === void 0 ? void 0 : Ue.legacy_id
							}
							return ce(ue, fe, c({}, at, w, Ee))
						}
					} catch (we) {
						return console.error(we), ce(ue, fe, Ee)
					}
				},
				b = ce => async (ue, fe, Ee) => {
					try {
						return await ce(ue, fe, Ee)
					} catch (be) {
						if (console.error(be), !me()) throw be;
						return {
							status: "rejected",
							reason: be
						}
					}
				};
			var I = t("../react/common/middleware/sparrow/errors.ts"),
				F = t("../react/pages/firewall/bots/tracking.ts"),
				z = t("../react/pages/caching/tracking.tsx"),
				V = t("../react/pages/turnstile/tracking.ts"),
				ee = t("../react/pages/firewall/settings/resources/utils/index.ts"),
				j = t("../react/pages/magic/packet-captures/constants.ts"),
				oe = t("../react/pages/firewall/page-shield/tracking.ts"),
				ne = t("../react/pages/firewall/rulesets/tracking.tsx"),
				Z = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				se = t("../react/pages/spectrum/tracking.tsx"),
				J = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				ie = t("../react/pages/security-center/tracking.ts"),
				$ = t("../react/pages/firewall/api-shield/tracking.ts"),
				X = t("../react/pages/home/configurations/lists/tracking.ts"),
				U = t("../react/pages/traffic/load-balancing/tracking.ts"),
				W = t("../react/pages/home/alerts/tracking.ts"),
				Y = t("../react/pages/dns/dns-records/tracking.ts"),
				re = t("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				k = t("../react/pages/traffic/argo/tracking.ts"),
				L = t("../react/pages/magic/network-monitoring/constants.ts"),
				O = t("../react/pages/firewall/security-analytics/logs/constants.ts"),
				R = t("../react/pages/magic/overview/tracking.ts"),
				M = t("../react/pages/hyperdrive/tracking.ts"),
				H = t("../react/pages/pipelines/tracking.ts"),
				K = t("../react/pages/home/domain-registration/tracking.ts"),
				ge = t("../react/pages/zoneless-workers/constants.ts"),
				Ie = t("../react/pages/pages/constants.ts"),
				Le = t("../react/pages/page-rules/tracking.ts"),
				De = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				B = t("../react/pages/shared-config/sparrowEvents.tsx"),
				de = t("../react/pages/firewall/settings/cards/security-txt/helpers.ts"),
				Oe = t("../react/pages/security-center/BlockedContent/constants.ts");
			const Be = ((ce, ue, ...fe) => n.eg.union([n.eg.literal(ce), n.eg.literal(ue), ...fe.map(Ee => n.eg.literal(Ee))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "projects table click", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", ge.QV.clickedDownloadAnalytics, ge.QV.clickedPrintAnalytics, ge.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ie.QV.toggledPagesSmartPlacement, Ie.QV.downloadDemoProject, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", F.N3.INITIAL_FETCH_SCORES, F.N3.FETCH_CONFIGURATION, F.N3.INITIAL_FETCH_TIME_SERIES, F.N3.INITIAL_FETCH_ATTRIBUTES, F.N3.UPDATE_SETTINGS, F.N3.DELETE_RULE, F.N3.UPDATE_RULE, F.N3.FETCH_RULES, F.N3.CONFIGURE_BOT_MANAGEMENT, F.N3.WAF_RULES_REDIRECT, J.F.TOGGLE_TCP_PROTECTION, J.F.GET_TCP_PROTECTION_PREFIXES, J.F.CREATE_TCP_PROTECTION_PREFIXES, J.F.CREATE_TCP_PROTECTION_PREFIX, J.F.UPDATE_TCP_PROTECTION_PREFIX, J.F.DELETE_TCP_PROTECTION_PREFIX, J.F.DELETE_TCP_PROTECTION_PREFIXES, J.F.GET_TCP_PROTECTION_ALLOWLIST, J.F.CREATE_TCP_PROTECTION_ALLOWLIST, J.F.UPDATE_TCP_PROTECTION_ALLOWLIST, J.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, J.F.DELETE_TCP_PROTECTION_ALLOWLIST, J.F.GET_SYN_PROTECTION_RULES, J.F.GET_SYN_PROTECTION_RULE, J.F.CREATE_SYN_PROTECTION_RULE, J.F.UPDATE_SYN_PROTECTION_RULE, J.F.DELETE_SYN_PROTECTION_RULE, J.F.GET_TCP_FLOW_PROTECTION_RULES, J.F.GET_TCP_FLOW_PROTECTION_RULE, J.F.CREATE_TCP_FLOW_PROTECTION_RULE, J.F.UPDATE_TCP_FLOW_PROTECTION_RULE, J.F.DELETE_TCP_FLOW_PROTECTION_RULE, J.F.GET_SYN_PROTECTION_FILTERS, J.F.GET_SYN_PROTECTION_FILTER, J.F.CREATE_SYN_PROTECTION_FILTER, J.F.UPDATE_SYN_PROTECTION_FILTER, J.F.DELETE_SYN_PROTECTION_FILTER, J.F.GET_TCP_FLOW_PROTECTION_FILTERS, J.F.GET_TCP_FLOW_PROTECTION_FILTER, J.F.CREATE_TCP_FLOW_PROTECTION_FILTER, J.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, J.F.DELETE_TCP_FLOW_PROTECTION_FILTER, J.F.GET_DNS_PROTECTION_RULES, J.F.GET_DNS_PROTECTION_RULE, J.F.CREATE_DNS_PROTECTION_RULE, J.F.UPDATE_DNS_PROTECTION_RULE, J.F.DELETE_DNS_PROTECTION_RULE, oe.F.MANAGE_PAGE_SHIELD_POLICY, oe.F.CONFIGURE_PAGE_SHIELD, oe.F.VIEW_DETECTED_CONNECTIONS, oe.F.VIEW_DETECTED_SCRIPTS, oe.F.VIEW_PAGE_SHIELD_POLICIES, oe.F.VIEW_PAGE_SHIELD_SETTINGS, oe.F.OPEN_MUTABLE_VERSION_TOOLTIP, oe.F.SHOW_MUTABLE_VERSION_TOOLTIP, X.y.CREATE_LIST, X.y.DELETE_LIST, X.y.ADD_LIST_ITEM, X.y.DELETE_LIST_ITEM, M.KO.PURCHASE_WORKERS_PAID, M.KO.LIST_CONFIGS, M.KO.CREATE_HYPERDRIVE_CONFIG, M.KO.VIEW_CONFIG_DETAILS, M.KO.UPDATE_CACHING_SETTINGS, M.KO.DELETE_HYPERDRIVE_CONFIG, M.KO.CLICK_HYPERDRIVE_DOCUMENTATION, M.KO.CLICK_GET_STARTED_GUIDE, M.KO.CLICK_CONNECTIVITY_GUIDES, M.KO.CLICK_QUICK_LINK, se.N.CNAME, se.N.IP_ADDRESS, se.N.LB, se.N.UPDATE_CNAME, se.N.UPDATE_IP_ADDRESS, se.N.UPDATE_LB, se.N.DISABLE, z.N.TIERED_CACHE, z.N.CACHE_PURGE, z.N.CACHE_ANALYTICS, ...(0, V.P)(), ...(0, ne.x4)(), ...(0, ee.m8)(), Z.N.CREATE, Z.N.EVENTS, Z.N.ANALYTICS, Z.N.UPDATE, Z.N.GENERATE_PREVIEW, ie.R.INITIATE_URL_SCAN, ie.R.LOAD_SCAN_INFO, ie.v.EXPAND_INSIGHT_ROW, ie.v.CLICK_RESOLVE_BUTTON, ie.v.FOLLOW_RESOLVE_URL, ie.v.MANAGE_INSIGHT, ie.v.CLICK_SCAN_NOW, ie.v.CLICK_EXPORT_INSIGHTS, ie.v.BULK_ARCHIVE, $.Fj[$.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, $.Fj[$.kq.ENDPOINT_MANAGEMENT].detailedMetrics, $.Fj[$.kq.ENDPOINT_MANAGEMENT].createEndpoint, $.Fj[$.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, $.Fj[$.kq.ENDPOINT_MANAGEMENT].deployRouting, $.Fj[$.kq.ENDPOINT_MANAGEMENT].deleteRouting, $.Fj[$.kq.API_DISCOVERY].viewDiscoveredEndpoints, $.Fj[$.kq.API_DISCOVERY].saveDiscoveredEndpoint, $.Fj[$.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, $.Fj[$.kq.SCHEMA_VALIDATION].viewSchemasList, $.Fj[$.kq.SCHEMA_VALIDATION].uploadSchema, $.Fj[$.kq.SCHEMA_VALIDATION].viewSchemaAdoption, $.Fj[$.kq.SCHEMA_VALIDATION].downloadSchema, $.Fj[$.kq.SCHEMA_VALIDATION].deleteSchema, $.Fj[$.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, $.Fj[$.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, $.Fj[$.kq.SEQUENCE_ANALYTICS].viewSequencesPage, $.Fj[$.kq.JWT_VALIDATION].viewJWTRules, $.Fj[$.kq.JWT_VALIDATION].addJWTRule, $.Fj[$.kq.JWT_VALIDATION].editJWTRule, $.Fj[$.kq.JWT_VALIDATION].deleteJWTRule, $.Fj[$.kq.JWT_VALIDATION].reprioritizeJWTRule, $.Fj[$.kq.JWT_VALIDATION].viewJWTConfigs, $.Fj[$.kq.JWT_VALIDATION].addJWTConfig, $.Fj[$.kq.JWT_VALIDATION].editJWTConfig, $.Fj[$.kq.JWT_VALIDATION].deleteJWTConfig, $.Fj[$.kq.SETTINGS].redirectToFirewallRulesTemplate, $.Fj[$.kq.SETTINGS].redirectToPages, $.Fj[$.kq.SETTINGS].listSessionIdentifiers, $.Fj[$.kq.SETTINGS].listRequestsContainingSessionIdentifiers, $.Fj[$.kq.SETTINGS].addOrRemoveSessionIdentifiers, $.Fj[$.kq.SETTINGS].redirectToCustomRules, $.Fj[$.kq.SETTINGS].listAllFallthroughSchemas, $.Fj[$.kq.SEQUENCE_RULES].listSequenceRules, $.Fj[$.kq.SEQUENCE_RULES].deleteSequenceRule, $.Fj[$.kq.SEQUENCE_RULES].reorderSequenceRule, $.Fj[$.kq.SEQUENCE_RULES].createSequenceRule, $.Fj[$.kq.SEQUENCE_RULES].editSequenceRule, U.Z.CREATE_AND_DEPLOY, U.Z.ANALYTICS, W.y.SECONDARY_DNS_NOTIFICATION_CREATE, W.y.SECONDARY_DNS_NOTIFICATION_UPDATE, W.y.SECONDARY_DNS_NOTIFICATION_DELETE, Y.U.ZONE_TRANSFER_SUCCESS, Y.U.DNS_RECORD_CREATE, Y.U.DNS_RECORD_UPDATE, Y.U.DNS_RECORD_DELETE, re.Y.PEER_DNS_CREATE, re.Y.PEER_DNS_UPDATE, re.Y.PEER_DNS_DELETE, re.Y.ZONE_TRANSFER_ENABLE, re.Y.ZONE_TRANSFER_DISABLE, k.V.ARGO_ENABLEMENT, k.V.ARGO_GEO_ANALYTICS_FETCH, k.V.ARGO_GLOBAL_ANALYTICS_FETCH, j.X.VIEW_BUCKETS_LIST, j.X.CREATE_BUCKET, j.X.VALIDATE_BUCKET, j.X.DELETE_BUCKET, j.X.VIEW_CAPTURES_LIST, j.X.CREATE_SIMPLE_CAPTURE, j.X.CREATE_FULL_CAPTURE, j.X.VIEW_FULL_CAPTURE, j.X.DOWNLOAD_SIMPLE_CAPTURE, L.bK.VIEW_RULES, L.bK.CREATE_RULE, L.bK.UPDATE_RULE, L.bK.DELETE_RULE, L.bK.VIEW_CONFIGURATION, L.bK.CREATE_CONFIGURATION, L.bK.UPDATE_CONFIGURATION, L.bK.DELETE_CONFIGURATION, R.r8.VIEW_ALERTS, R.r8.VIEW_ALERTS_HISTORY, R.r8.MAGIC_OVERVIEW_ANALYTICS, R.VZ.CREATE_SITE, R.VZ.CREATE_TUNNEL, R.VZ.CREATE_STATIC_ROUTE, O.o4.CLICK_ADAPTIVE_SAMPLING, O.o4.CLICK_TO_LOG_EXPLORER_BANNER, O.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, O.o4.CLICK_SWITCH_TO_RAW_LOGS, O.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", K.U.REGISTER_DOMAIN_SEARCH_SUBMIT, K.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, K.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, K.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, K.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, K.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, K.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, K.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, K.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, K.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, K.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, K.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, K.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, K.U.REGISTER_DOMAIN_CHECKOUT_ERROR, K.U.TRANSFER_DOMAIN_CHANGE_STEP, K.U.RENEW_DOMAIN_COMPLETED, K.U.RESTORE_DOMAIN_INIT, K.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, K.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, K.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, K.U.RESTORE_DOMAIN_FAILURE, K.U.RESTORE_DOMAIN_COMPLETED, K.U.DOMAIN_DELETE_INIT, K.U.DOMAIN_DELETE_COMPLETED, K.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, K.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, K.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, K.U.DOMAIN_DELETE_CONFIRM_DELETE, K.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, K.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, K.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, K.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, K.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, K.U.DOMAIN_MOVE_START_FLOW, K.U.DOMAIN_MOVE_OPEN_DOCS, K.U.DOMAIN_MOVE_CLOSE_FLOW, K.U.DOMAIN_MOVE_PROGRESS_FLOW, K.U.DOMAIN_MOVE_SUBMIT, K.U.DOMAIN_MOVE_INITIATE_SUCCESS, K.U.DOMAIN_MOVE_INITIATE_ERROR, K.U.DOMAIN_MOVE_CANCEL, K.U.DOMAIN_MOVE_CANCEL_SUCCESS, K.U.DOMAIN_MOVE_CANCEL_ERROR, K.U.ACTION_CENTER_NAVIGATE, K.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, K.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, K.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, H.KO.CLICK_GET_STARTED_GUIDE, H.KO.CLICK_PIPELINE_DOCUMENTATION, H.KO.CLICK_QUICK_LINK, H.KO.CREATE_PIPELINE, H.KO.DELETE_PIPELINE, H.KO.LIST_PIPELINES, H.KO.VIEW_PIPELINE, De.S.EXISTING_DOMAIN, De.S.NEW_DOMAIN, De.S.WAF_RULESET, De.S.WORKERS, De.S.PAGES, De.S.R2, De.S.ACCOUNT_MEMBERS, Le._.TEMPLATE_PRODUCT_SELECTED, Le._.TEMPLATE_SELECTED, Le._.TEMPLATE_SAVE_DRAFT, Le._.TEMPLATE_CANCEL, Le._.TEMPLATE_DEPLOY, B.D.CLICK_GO_BACK_SHARE_MODAL, B.D.CLICK_MENU_ITEM_SHARE, B.D.CLICK_ON_CANCEL_SHARE_MODAL, B.D.CLICK_ON_CLOSE_SHARE_MODAL, B.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, B.D.CLICK_ON_DELETE_RULESET, B.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, B.D.CLICK_ON_EDIT_SHARE_PERMISSION, B.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, B.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, B.D.CLICK_ON_SHARE_TABLE_ROW, de.vc.CREATED, de.vc.ENABLED, de.vc.DISABLED, de.vc.DELETED, de.vc.UPDATED, de.vc.DOWNLOADED, Oe.Gk.REQUEST_REVIEW, Oe.Gk.COPY_URL),
				Ve = n.eg.exactStrict(n.eg.object({
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
					toStreamRatePlanId: n.eg.any.optional,
					gatesDelayed: n.eg.any.optional,
					geo: n.eg.any.optional,
					guid: n.eg.any.optional,
					hasData: n.eg.any.optional,
					hasRecords: n.eg.any.optional,
					hasSidebarNav: n.eg.boolean.optional,
					"hasTest2019-06-03": n.eg.any.optional,
					hCaptchaDisplayed: n.eg.any.optional,
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
					isExpanding: n.eg.boolean.optional,
					isEntAccount: n.eg.boolean.optional,
					isEnterprise: n.eg.boolean.optional,
					isInactive: n.eg.boolean.optional,
					isOpen: n.eg.boolean.optional,
					isScript: n.eg.any.optional,
					isSPA: n.eg.any.optional,
					isStreaming: n.eg.any.optional,
					isStripeBilling: n.eg.boolean.optional,
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
					referring_domain: n.eg.any.optional,
					referrer: n.eg.any.optional,
					registrationPeriod: n.eg.any.optional,
					registrationStatus: n.eg.any.optional,
					rel: n.eg.any.optional,
					relativeTimeRange: n.eg.any.optional,
					resultRank: n.eg.number.optional,
					"rocket_loader-recommendation": n.eg.any.optional,
					role: n.eg.any.optional,
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
					hosts: n.eg.string.optional,
					uiType: n.eg.string.optional,
					userId: n.eg.any.optional,
					userType: n.eg.any.optional,
					utm_referrer: n.eg.any.optional,
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
					productResource: n.eg.any.optional
				})),
				Ze = (ce, ue) => {
					const [fe, Ee] = st(ue);
					let be, Pe;
					return (0, n.nM)(Be.decode(ce)) && (be = new I.Uh(ce)), Ee && Ee.length > 0 && (Pe = new I.oV(ce, Ee)), [fe, be, Pe]
				},
				st = ce => {
					const ue = Ve.decode(ce);
					if ((0, n.nM)(ue)) {
						const fe = ue.left.map(({
							context: Ee
						}) => Ee.map(({
							key: be
						}) => be)).reduce((Ee, be) => Ee.concat(be), []).filter(Ee => Ee in ce);
						return [He(fe, ce), fe]
					}
					return [ce, []]
				},
				He = (ce, ue) => Object.entries(ue).reduce((fe, [Ee, be]) => (ce.includes(Ee) || (fe[Ee] = be), fe), {}),
				Ye = ce => (ue, fe, Ee) => {
					const [be, Pe, _e] = Ze(fe, Ee);
					if (Pe) throw Pe;
					return _e && console.error(_e), ce(ue, fe, be)
				};
			var Ke = t("../react/utils/zaraz.ts");
			const xe = {
					identify: !0
				},
				Je = ce => (ue, fe, Ee) => (xe[fe] || Ke.tg === null || Ke.tg === void 0 || Ke.tg.track(fe, Ee), ce(ue, fe, Ee));
			var Qe = t("../react/utils/cookiePreferences.ts");

			function Ge(ce) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var fe = arguments[ue] != null ? Object(arguments[ue]) : {},
						Ee = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && Ee.push.apply(Ee, Object.getOwnPropertySymbols(fe).filter(function(be) {
						return Object.getOwnPropertyDescriptor(fe, be).enumerable
					})), Ee.forEach(function(be) {
						qe(ce, be, fe[be])
					})
				}
				return ce
			}

			function qe(ce, ue, fe) {
				return ue = Xe(ue), ue in ce ? Object.defineProperty(ce, ue, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[ue] = fe, ce
			}

			function Xe(ce) {
				var ue = et(ce, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function et(ce, ue) {
				if (typeof ce != "object" || ce === null) return ce;
				var fe = ce[Symbol.toPrimitive];
				if (fe !== void 0) {
					var Ee = fe.call(ce, ue || "default");
					if (typeof Ee != "object") return Ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ue === "string" ? String : Number)(ce)
			}
			const N = ce => {
					o().init(Ge({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: me() && !(0, l.gm)() && Se(),
						middlewares: [b, Ye, A, Je]
					}, ce))
				},
				q = () => {
					o().identify(Ge({}, (0, e.getAttribution)(), {
						locale: (0, s.r)((0, _.bh)().getState()),
						isCloudflare: !!(0, f.Jd)()
					}))
				},
				me = () => !0,
				Me = () => {
					(0, Qe.kT)("sparrow_id")
				},
				Se = () => (0, Qe.Xm)()
		},
		"../utils/initStyles.ts": function(x, E, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = t("../react/app/providers/storeContainer.js");
			const l = "cfBaseStyles",
				_ = document.head || document.getElementsByTagName("head")[0],
				s = u => {
					const p = [];
					for (let h in u.colors) {
						const n = u.colors[h];
						if (Array.isArray(n) && h !== "categorical")
							for (let r = 0; r < n.length; ++r) p.push(`--cf-${h}-${r}:${n[r]};`)
					}
					return p.join(`
`)
				},
				f = () => {
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
					let h = document.getElementById(l);
					h ? h.innerText = "" : (h = document.createElement("style"), h.id = l, _.appendChild(h)), h.appendChild(document.createTextNode(p)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(f), E.Z = f
		},
		"../utils/sentry/lastSentEventId.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let l = "";
				return {
					setEventId: f => (!f || typeof f != "string" || (l = f), l),
					getEventId: () => l
				}
			})()
		},
		"../utils/zaraz.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
					return n
				}
			});

			function e(a) {
				for (var d = 1; d < arguments.length; d++) {
					var i = arguments[d] != null ? Object(arguments[d]) : {},
						c = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(i).filter(function(g) {
						return Object.getOwnPropertyDescriptor(i, g).enumerable
					})), c.forEach(function(g) {
						o(a, g, i[g])
					})
				}
				return a
			}

			function o(a, d, i) {
				return d = l(d), d in a ? Object.defineProperty(a, d, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[d] = i, a
			}

			function l(a) {
				var d = _(a, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function _(a, d) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var c = i.call(a, d || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(a)
			}
			const s = {
					track: (a, d) => null,
					set: (a, d) => console.log(`zaraz.set(${a}, ${d})`)
				},
				f = {
					track: (a, d) => {
						var i;
						(i = window.zaraz) === null || i === void 0 || i.track(a, e({}, d, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (a, d) => {
						var i;
						return (i = window.zaraz) === null || i === void 0 ? void 0 : i.set(a, d)
					}
				};
			let u;
			const p = () => {
					window.zaraz, u = f
				},
				h = ["email", "first_name", "last_name"],
				n = a => {
					h.forEach(d => {
						var i;
						(i = u) === null || i === void 0 || i.set(d, a[d])
					})
				},
				r = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(x, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				l = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				_ = t.n(l),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				u = t.n(f),
				p = t("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				h = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				r = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				a = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				i = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				c = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				g = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				v = t("../../../common/component/component-filter-bar/src/constants.js"),
				y = t("../../../common/component/component-filter-bar/src/utils.js");

			function P(U) {
				for (var W = 1; W < arguments.length; W++) {
					var Y = arguments[W] != null ? Object(arguments[W]) : {},
						re = Object.keys(Y);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(Y).filter(function(k) {
						return Object.getOwnPropertyDescriptor(Y, k).enumerable
					})), re.forEach(function(k) {
						S(U, k, Y[k])
					})
				}
				return U
			}

			function S(U, W, Y) {
				return W = A(W), W in U ? Object.defineProperty(U, W, {
					value: Y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[W] = Y, U
			}

			function A(U) {
				var W = b(U, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function b(U, W) {
				if (typeof U != "object" || U === null) return U;
				var Y = U[Symbol.toPrimitive];
				if (Y !== void 0) {
					var re = Y.call(U, W || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)(U)
			}
			const I = 70,
				F = (0, s.createStyledComponent)(({
					showOverflow: U
				}) => P({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, U ? {} : {
					maxHeight: I,
					overflow: "hidden"
				})),
				z = (0, s.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				V = (0, s.createStyledComponent)(({
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
				ee = (0, s.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				j = (0, s.createStyledComponent)(({
					theme: U
				}) => ({
					color: U.colors.gray[4],
					mr: 1
				}), "span"),
				oe = (0, s.createStyledComponent)(() => ({
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
				ne = (0, s.createStyledComponent)(({
					buttonStyle: U
				}) => P({
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
				}, U), h.zx),
				Z = (0, s.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				se = (0, s.createStyledComponent)(({
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
				J = (0, s.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				ie = U => U.current ? [...U.current.children].reduce((W, Y) => (Y.offsetTop >= I && W++, W), 0) : 0;
			let $ = 0;
			class X extends e.Component {
				constructor() {
					super();
					S(this, "overflowWrapper", (0, e.createRef)()), S(this, "hasOverflowed", W => {
						const Y = ie(this.overflowWrapper);
						W.scrollHeight > I && Y >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (W.scrollHeight < I || Y === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), S(this, "addNewFilter", () => {
						const {
							filterDefinitions: W
						} = this.props, Y = (0, y.TE)(W), re = Object.keys(Y)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: re,
								operator: (0, y.uv)(re, Y),
								value: (0, y.TT)(re, Y)
							}
						})
					}), S(this, "handleOpenFilterEdit", W => {
						this.setState({
							openFilter: W,
							filterChanges: P({}, this.props.filters[W])
						})
					}), S(this, "handleRemoveFilterClick", (W, Y) => {
						W.stopPropagation(), this.removeFilter(Y)
					}), S(this, "removeFilter", W => {
						const {
							handleFiltersChange: Y
						} = this.props, re = [...this.props.filters], k = re[W];
						re.splice(W, 1), Y(re), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: k.key,
							operator: k.operator,
							value: k.value
						})
					}), S(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), S(this, "handleFilterSubmit", W => {
						const {
							filterDefinitions: Y
						} = this.props;
						W.preventDefault();
						const {
							filterChanges: re
						} = this.state, k = typeof Y[re.key].parse == "function" ? Array.isArray(re.value) ? re.value.map(Y[re.key].parse) : Y[re.key].parse(re.value) : re.value;
						if (Y[re.key].validate && (Array.isArray(k) ? !k.every(Y[re.key].validate) : !Y[re.key].validate(k))) return this.setState({
							invalid: !0
						});
						const L = [...this.props.filters],
							O = P({}, re, {
								value: k
							}),
							R = !L[this.state.openFilter];
						R ? L.push(O) : L[this.state.openFilter] = P({}, re), this.props.handleFiltersChange(L, O), (R ? this.props.onAddFilter : this.props.onEditFilter)({
							field: O.key,
							operator: O.operator,
							value: O.value
						}), this.closeOpenFilterChanges()
					}), S(this, "handlePendingKeyChange", ({
						value: W
					}) => {
						const {
							filterDefinitions: Y
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: W,
								operator: (0, y.uv)(W, Y),
								value: (0, y.TT)(W, Y)
							}
						})
					}), S(this, "handlePendingOperatorChange", ({
						value: W
					}) => {
						let Y = P({}, this.state.filterChanges, {
							operator: W
						});
						if ((0, y.dr)(W)) {
							var re, k;
							((re = this.state.filterChanges) === null || re === void 0 ? void 0 : re.value) && !Array.isArray((k = this.state.filterChanges) === null || k === void 0 ? void 0 : k.value) && (Y.value = [this.state.filterChanges.value])
						} else {
							var L, O, R;
							((L = this.state.filterChanges) === null || L === void 0 ? void 0 : L.value) && Array.isArray((O = this.state.filterChanges) === null || O === void 0 ? void 0 : O.value) && ((R = this.state.filterChanges) === null || R === void 0 ? void 0 : R.value.length) > 0 && (Y.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: Y
						})
					}), S(this, "handlePendingValueChange", W => {
						this.setState({
							invalid: !1,
							filterChanges: P({}, this.state.filterChanges, {
								value: W
							})
						})
					}), S(this, "handleShowOverflow", () => {
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
						id: ++$
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(W) {
					W.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(W) {
					const {
						formatLabel: Y,
						filterDefinitions: re
					} = this.props, {
						operator: k
					} = this.state.filterChanges, L = re[this.state.filterChanges.key], O = this.state.filterChanges.value, R = M => Array.isArray(M) ? M.map(H => H.value) : (M == null ? void 0 : M.value) || null;
					if (L.renderValueComponent) return L.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (L.type) {
						case v.k.select:
							return (0, y.dr)(k) ? o().createElement(i.Z, {
								searchable: !0,
								multi: !0,
								creatable: !L.options,
								value: typeof O.split == "function" ? O == null ? void 0 : O.split(",") : Array.isArray(O) ? O : [],
								options: L.options ? L.options.map(M => ({
									value: M.value || M,
									label: M.label || Y(this.state.filterChanges.key, M, W)
								})) : O ? (Array.isArray(O) ? O : O.split(",")).map(M => ({
									label: M,
									value: M
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(f.Trans, {
									id: L.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: L.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: M => {
									this.handlePendingValueChange(R(M))
								},
								isValidNewOption: M => {
									const H = L.validate;
									return !H && M || M && H([M])
								},
								getNewOptionData: (M, H) => ({
									value: M,
									label: H
								})
							}) : o().createElement(a.hQ, {
								hideLabel: !0,
								value: O,
								options: L.options.map(M => ({
									value: M,
									label: Y(this.state.filterChanges.key, M, W)
								})),
								onChange: ({
									value: M
								}) => this.handlePendingValueChange(M)
							});
						case v.k.string:
						default:
							return (0, y.dr)(k) ? o().createElement(i.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof O.split == "function" ? O == null ? void 0 : O.split(",") : Array.isArray(O) ? O : [],
								options: O ? (Array.isArray(O) ? O : O.split(",")).map(M => ({
									label: M,
									value: M
								})) : [],
								noOptionsMessage: () => null,
								placeholder: W.t("analytics.report.filters.labels.placeholder", {
									example: re[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: M => {
									this.handlePendingValueChange(R(M))
								},
								isValidNewOption: M => {
									const H = L.validate;
									return !H && M || M && H([M])
								},
								getNewOptionData: (M, H) => ({
									value: M,
									label: H
								}),
								formatCreateLabel: M => W.t("filter_editor.value_create_label", {
									value: M
								})
							}) : o().createElement(f.I18n, null, M => o().createElement(p.I, {
								value: this.state.filterChanges.value,
								onChange: H => this.handlePendingValueChange(H.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: M.t("analytics.report.filters.labels.placeholder", {
									example: re[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: W,
						filterDefinitions: Y,
						modalStyles: re,
						filterIconType: k,
						buttonStyle: L
					} = this.props, O = ie(this.overflowWrapper), R = `filterPanel${this.state.id}`, M = this.state.openFilter !== null;
					return o().createElement(f.I18n, null, H => o().createElement(d.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(J, null, o().createElement(ne, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": M,
						"aria-controls": R,
						inverted: !0,
						buttonStyle: L
					}, o().createElement(n.J, {
						type: k || "add",
						mr: 1,
						label: H.t("common.add", {
							_: "Add"
						})
					}), o().createElement(f.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(Z, null, o().createElement(f.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(F, {
						innerRef: this.overflowWrapper,
						overflowLimit: I,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((K, ge) => {
						const {
							key: Ie,
							operator: Le,
							value: De
						} = K, B = Y[Ie].ignoreLabelTranslation ? Y[Ie].label : H.t(Y[Ie].label), de = H.t(`analytics.report.filters.operators.${Le}`), Oe = Array.isArray(De) ? De.map(Be => W(Ie, Be, H)).join(", ") : W(Ie, De, H), ze = `${B} ${de} ${Oe}`;
						return o().createElement(z, {
							key: `${Ie}-${Le}-${De}`,
							title: ze
						}, o().createElement(V, {
							onClick: () => this.handleOpenFilterEdit(ge)
						}, o().createElement(d.ZC, {
							display: "flex"
						}, o().createElement(ee, null, B), o().createElement(j, null, de), o().createElement(oe, null, Oe), (0, y.oN)(K, Y) ? o().createElement(r.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(se, {
							onClick: Be => this.handleRemoveFilterClick(Be, ge),
							"aria-label": "remove"
						}, o().createElement(n.J, {
							type: "remove"
						})))))
					})), M && o().createElement(g.Z, {
						id: R,
						filterDefinitions: Y,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, y.oN)(this.state.filterChanges, Y),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: W,
						modalStyles: re
					}), this.state.hasOverflowed && o().createElement(c.Z, {
						count: O,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			S(X, "propTypes", {
				filterDefinitions: _().shape({}),
				filters: _().arrayOf(_().shape({
					key: _().string,
					operator: _().string,
					value: _().string
				})),
				handleFiltersChange: _().func.isRequired,
				formatLabel: _().func.isRequired,
				onAddFilter: _().func,
				onEditFilter: _().func,
				onRemoveFilter: _().func,
				children: _().node,
				modalStyles: _().object,
				filterIconType: _().string,
				buttonStyle: _().object
			}), E.Z = X
		},
		"../../../common/component/component-filter-bar/src/index.js": function(x, E, t) {
			"use strict";
			t.d(E, {
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
					return _.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				l = t("../../../common/component/component-filter-bar/src/constants.js"),
				_ = t("../../../common/component/component-filter-bar/src/utils.js"),
				s = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				OZ: function() {
					return s
				},
				YB: function() {
					return _
				}
			});

			function e(u, p, h) {
				return p = o(p), p in u ? Object.defineProperty(u, p, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[p] = h, u
			}

			function o(u) {
				var p = l(u, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function l(u, p) {
				if (typeof u != "object" || u === null) return u;
				var h = u[Symbol.toPrimitive];
				if (h !== void 0) {
					var n = h.call(u, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(u)
			}
			class _ extends Error {
				constructor(p, h) {
					super(h);
					e(this, "translationKey", void 0), this.translationKey = p, this.name = "TranslatorError"
				}
			}
			class s extends _ {
				constructor(p) {
					super(p, `Translation key not found: ${p}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var f = null
		},
		"../../../common/util/types/src/api/domain.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
				Aw: function() {
					return I
				},
				Ib: function() {
					return A
				},
				Ks: function() {
					return F
				},
				MS: function() {
					return b
				},
				PN: function() {
					return c
				},
				Pp: function() {
					return _
				},
				Q3: function() {
					return d
				},
				TS: function() {
					return i
				},
				W7: function() {
					return y
				},
				dN: function() {
					return z
				},
				eF: function() {
					return S
				},
				qp: function() {
					return n
				},
				wR: function() {
					return h
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				l = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				_ = e.eg.object({
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
					registrant: _.optional,
					technical: _.optional,
					administrator: _.optional,
					billing: _.optional
				}),
				u = e.eg.object({
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
			let h = function(V) {
				return V.ONBOARDING_INITIATED = "Onboarding Initiated", V.ONBOARDED = "Onboarded", V.PENDING_REGISTRY_LOCK = "Pending Registry Lock", V.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", V.REGISTRY_UNLOCKED = "Registry Unlocked", V.LOCKED = "Locked", V.FAILED_TO_LOCK = "Failed To Lock", V.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", V.UNLOCKED = "Unlocked", V.OFFBOARDED = "Offboarded", V
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
						status: e.eg.enum(h).optional
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
				i = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let c = function(V) {
				return V.PENDING = "pending", V.VERIFIED = "verified", V.REJECTED = "rejected", V.PENDING_DELETE = "pending_delete", V.DELETED = "deleted", V
			}({});
			const g = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(c),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				v = e.eg.object({
					designated_approvers: e.eg.array(g)
				});
			let y = function(V) {
				return V.PENDING = "pending", V.PENDING_UPDATE = "pending_update", V.ENABLED = "enabled", V.DISABLED = "disabled", V
			}({});
			const P = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(y)
				}),
				S = e.eg.intersection([P, v]),
				A = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let b = function(V) {
				return V.UNLOCK_APPROVAL = "UnlockApprovalRequest", V.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", V.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", V.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", V
			}({});
			const I = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				F = e.eg.object({
					message: e.eg.string
				}),
				z = e.eg.object({
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
		"../../../common/util/types/src/utils/index.ts": function(x, E, t) {
			"use strict";
			t.d(E, {
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
			const o = (l, _) => {
				if (_ !== void 0) throw new Error("Unexpected object: " + l);
				return _
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(x, E, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(l) {
				if (!t.o(e, l)) return Promise.resolve().then(function() {
					var f = new Error("Cannot find module '" + l + "'");
					throw f.code = "MODULE_NOT_FOUND", f
				});
				var _ = e[l],
					s = _[0];
				return t.e(_[1]).then(function() {
					return t.t(s, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", x.exports = o
		}
	}
]);

//# debugId=ea884da3-1585-5017-8d4d-df79442da4b0