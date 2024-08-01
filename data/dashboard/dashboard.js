! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "02dc4935-2e25-543d-9f9e-e1328b2a36cf")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.js": function(G, y, n) {
			"use strict";
			n.d(y, {
				J8: function() {
					return s
				},
				Jd: function() {
					return a
				},
				QY: function() {
					return h
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
				l = n("../../../../node_modules/query-string/query-string.js"),
				d = n.n(l),
				m = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				i;
			const g = () => Object.keys(m.Z).reduce((f, P) => (P.indexOf("cf_beta.") === 0 && m.Z.get(P) === "true" && f.push(P.split(".").slice(1).join(".")), f), []),
				p = () => {
					var f, P, F;
					return ((f = window) === null || f === void 0 || (P = f.bootstrap) === null || P === void 0 || (F = P.data) === null || F === void 0 ? void 0 : F.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((i = window) === null || i === void 0 ? void 0 : i.location) && m.Z) {
				const f = d().parse(window.location.search);
				f.beta_on && m.Z.set(`cf_beta.${f.beta_on}`, !0), f.beta_off && m.Z.set(`cf_beta.${f.beta_off}`, !1)
			}
			const _ = {},
				t = f => {
					var P, F, M;
					return Object.prototype.hasOwnProperty.call(_, f) ? _[f] : ((P = window) === null || P === void 0 || (F = P.bootstrap) === null || F === void 0 || (M = F.data) === null || M === void 0 ? void 0 : M.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(U => U === f) ? (_[f] = !0, !0) : (_[f] = !1, !1)
				},
				r = f => m.Z ? m.Z.get(`cf_beta.${f}`) === !0 : !1,
				s = f => r(f) || t(f),
				u = () => !0,
				a = () => {
					var f, P, F;
					return ((f = window) === null || f === void 0 || (P = f.bootstrap) === null || P === void 0 || (F = P.data) === null || F === void 0 ? void 0 : F.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				h = f => {
					const P = (0, e.uF)(f),
						F = (P == null ? void 0 : P.roles) || [];
					return (0, o.qR)(location.pathname) && F.length === 1 && F.some(M => M === "Administrator Read Only")
				}
		},
		"../init.ts": function(G, y, n) {
			"use strict";
			n.r(y);
			var e = n("../../../../node_modules/url-search-params-polyfill/index.js"),
				o = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				l = n("../../../../node_modules/fetch-intercept/lib/browser.js");

			function d(E) {
				for (var A = 1; A < arguments.length; A++) {
					var z = arguments[A] != null ? Object(arguments[A]) : {},
						X = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(z).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(z, ue).enumerable
					})), X.forEach(function(ue) {
						m(E, ue, z[ue])
					})
				}
				return E
			}

			function m(E, A, z) {
				return A = i(A), A in E ? Object.defineProperty(E, A, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[A] = z, E
			}

			function i(E) {
				var A = g(E, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function g(E, A) {
				if (typeof E != "object" || E === null) return E;
				var z = E[Symbol.toPrimitive];
				if (z !== void 0) {
					var X = z.call(E, A || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(E)
			}
			const p = E => {
				const A = E && E.headers || {},
					z = new Headers(A);
				return z.append("X-Cross-Site-Security", "dash"), d({}, E, {
					headers: z
				})
			};
			(0, l.register)({
				request: (E, A) => {
					try {
						return new URL(E), E === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", A] : [E, A]
					} catch {
						return [E, p(A)]
					}
				}
			});
			var _ = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				r = n("../react/app/providers/storeContainer.js");
			let s = "";
			const u = 61;

			function a(E) {
				const A = E.substr(1);
				if (A && s !== A) {
					const z = document.getElementById(A);
					if (z) {
						const X = z.getBoundingClientRect().top;
						if (X > 0) {
							const ue = X - u;
							document.documentElement.scrollTop = ue
						}
					}
				}
				s = A
			}

			function h(E) {
				E.listen(A => a(A.hash))
			}
			var f = n("../../../../node_modules/cookie/index.js"),
				P = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const F = "CF_dash_version",
				M = "current",
				U = "hash",
				L = "deploymentPreview",
				I = E => E === M ? q() : Q(),
				q = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				Q = (E = 72) => {
					const A = 36e5;
					return new Date(Date.now() + E * A)
				},
				Y = E => {
					switch (E) {
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
				W = (E, A = !1) => {
					var z;
					const X = Y(E),
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
    <h1 id="error-title">${X.title}</h1>
    <p id="error-description">${X.description}</p>
  </div>
  `,
						_e = A ? `
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
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(z=window.build)===null||z===void 0?void 0:z.branch}</span>.</p>
      <a href="/version?hash=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return ue + _e
				},
				K = E => {
					var A;
					const z = document.getElementById(E);
					!z || (A = z.parentNode) === null || A === void 0 || A.removeChild(z)
				};

			function j() {
				const E = document.getElementById("loading-state");
				E == null || E.classList.add("hide"), E == null || E.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(K)
				})
			}

			function N(E) {
				var A;
				const z = document.getElementById("loading-state"),
					X = !!((A = f.parse(document.cookie)) === null || A === void 0 ? void 0 : A[F]);
				!z || (z.innerHTML = W(E == null ? void 0 : E.code, X))
			}
			var O = n("../utils/initStyles.ts"),
				b = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				V = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				w = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				re = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				H = n("../../../../node_modules/history/esm/history.js"),
				T = (0, H.lX)(),
				B = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				$ = n("../react/utils/url.ts");
			const ne = (0, B.Rf)();
			let ie;

			function x(E) {
				return oe(E, "react-router-v5")
			}

			function oe(E, A) {
				return (z, X = !0, ue = !0) => {
					X && ne && ne.location && (ie = z({
						name: (0, $.Fl)(ne.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": A
						}
					})), ue && E.listen && E.listen((_e, Ee) => {
						if (Ee && (Ee === "PUSH" || Ee === "POP")) {
							ie && ie.finish();
							const Qe = {
								"routing.instrumentation": A
							};
							ie = z({
								name: (0, $.Fl)(_e.pathname),
								op: "navigation",
								tags: Qe
							})
						}
					})
				}
			}
			var Z = n("../react/common/selectors/languagePreferenceSelector.ts"),
				de = n("../flags.js"),
				ge = n("../utils/getDashVersion.ts"),
				me = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				Ce = n.n(me),
				Me = n("../../../common/intl/intl-core/src/errors.ts"),
				Be = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				Re = n("../react/common/middleware/sparrow/errors.ts");
			const R = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				le = !0,
				be = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				We = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function ze(E, A, z) {
				return A = Ue(A), A in E ? Object.defineProperty(E, A, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[A] = z, E
			}

			function Ue(E) {
				var A = He(E, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function He(E, A) {
				if (typeof E != "object" || E === null) return E;
				var z = E[Symbol.toPrimitive];
				if (z !== void 0) {
					var X = z.call(E, A || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(E)
			}
			class Fe {
				constructor() {
					ze(this, "name", Fe.id)
				}
				setupOnce() {
					n.g.console && (0, Be.hl)(n.g.console, "error", A => (...z) => {
						const X = z.find(ue => ue instanceof Error);
						if (R && X) {
							let ue, _e = !0;
							if (X instanceof Re.ez) {
								const Ee = X instanceof Re.oV ? X.invalidProperties : void 0;
								ue = {
									tags: {
										"sparrow.eventName": X.eventName
									},
									extra: {
										sparrow: {
											eventName: X.eventName,
											invalidProperties: Ee
										}
									},
									fingerprint: [X.name ? X.name : "SparrowValidationError"]
								}, _e = !1
							} else if (X instanceof me.SparrowIdCookieError) ue = {
								extra: {
									sparrowIdCookie: X.cookie
								},
								fingerprint: [X.name ? X.name : "SparrowIdCookieError"]
							};
							else if (X.name === "ChunkLoadError") {
								ue = {
									fingerprint: [X.name]
								};
								try {
									ue.tags = {
										chunkId: X.message.split(" ")[2],
										chunkUrl: X.request
									}
								} catch {}
							} else X instanceof Me.YB && (ue = {
								fingerprint: ["TranslatorError", X.translationKey]
							});
							_e && _.Tb(X, ue)
						}
						typeof A == "function" && A.apply(n.g.console, z)
					})
				}
			}
			ze(Fe, "id", "ConsoleErrorIntegration");
			var et = null,
				Ke = n("../utils/sentry/lastSentEventId.ts"),
				Ve = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				je = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const xe = E => {
					const A = async z => {
						var X, ue;
						const _e = {
							envelope: z.body,
							url: E.url,
							isPreviewDeploy: (X = window) === null || X === void 0 || (ue = X.build) === null || ue === void 0 ? void 0 : ue.isPreviewDeploy,
							release: (0, ge.t)()
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
							return console.log(Ee), (0, je.$2)(Ee)
						}
					};
					return Ve.q(E, A)
				},
				Xe = () => {
					if (R && le) {
						var E, A, z, X, ue, _e, Ee, Qe, pt, tt;
						let Pt = "production";
						((E = window) === null || E === void 0 || (A = E.build) === null || A === void 0 ? void 0 : A.isPreviewDeploy) && (Pt += "-preview"), V.S({
							dsn: R,
							release: (0, ge.t)(),
							environment: Pt,
							ignoreErrors: We,
							allowUrls: be,
							autoSessionTracking: !1,
							integrations: [new w.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new Fe, new re.jK.BrowserTracing({
								routingInstrumentation: x(T)
							})],
							tracesSampleRate: 0,
							transport: xe,
							beforeSend: Yt => (Ke.e.setEventId(Yt.event_id), Yt)
						});
						const Jt = (0, r.bh)().getState();
						_.rJ({
							LOCAL_STORAGE_FLAGS: (0, de.Qw)(),
							USER_BETA_FLAGS: (0, de.ki)(),
							meta: {
								connection: {
									type: (z = window) === null || z === void 0 || (X = z.navigator) === null || X === void 0 || (ue = X.connection) === null || ue === void 0 ? void 0 : ue.effectiveType,
									bandwidth: (_e = window) === null || _e === void 0 || (Ee = _e.navigator) === null || Ee === void 0 || (Qe = Ee.connection) === null || Qe === void 0 ? void 0 : Qe.downlink
								},
								languagePreference: (0, Z.r)(Jt),
								isPreviewDeploy: (pt = window) === null || pt === void 0 || (tt = pt.build) === null || tt === void 0 ? void 0 : tt.isPreviewDeploy
							},
							utilGates: (0, b.T2)(Jt)
						}), window.addEventListener("unhandledrejection", function(Yt) {})
					}
				},
				Ze = E => {
					E ? _.av({
						id: E
					}) : _.av(null)
				};
			var te = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				C = () => {
					let E;
					try {
						E = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), E = window.location.search
					}
					if (!E.includes("remote[")) return;
					const A = new URLSearchParams(E),
						z = {};
					for (let [X, ue] of A) X.includes("remote") && (z[X.replace(/remote\[|\]/g, "")] = ue);
					te.Z.set("mfe-remotes", JSON.stringify(z))
				},
				D = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				ee = n("../node_modules/uuid/dist/esm-browser/v4.js");
			const Te = "ANON_USER_ID";

			function Pe() {
				var E, A, z, X;
				let ue = (E = n.g) === null || E === void 0 || (A = E.bootstrap) === null || A === void 0 || (z = A.data) === null || z === void 0 || (X = z.user) === null || X === void 0 ? void 0 : X.id;
				if (!ue) {
					let _e = te.Z.get(Te);
					if (!_e) {
						let Ee = (0, ee.Z)();
						te.Z.set(Te, Ee), _e = Ee
					}
					return _e
				}
				return ue
			}
			async function Oe() {
				const E = (0, r.bh)();
				E.dispatch((0, D.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await E.dispatch((0, b.UL)({
					userId: Pe()
				}))
			}
			var Ie = n("../libs/init/initBootstrap.ts"),
				Se = n("webpack/sharing/consume/default/react/react"),
				fe = n.n(Se),
				we = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				$e = n("webpack/sharing/consume/default/react-dom/react-dom"),
				Ae = n("webpack/sharing/consume/default/react-redux/react-redux"),
				at = n("../../../../node_modules/swr/core/dist/index.mjs"),
				it = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				S = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				J = n("../react/shims/focus-visible.js"),
				ce = n("../react/app/components/DeepLink/index.ts"),
				pe = n("../../../../node_modules/prop-types/index.js"),
				ve = n.n(pe),
				De = n("../react/utils/translator.tsx"),
				Je = n("../../../common/intl/intl-react/src/index.ts"),
				he = n("../../../dash/intl/intl-translations/src/index.ts"),
				Bt = n("../../../../node_modules/query-string/query-string.js"),
				nt = n.n(Bt),
				St = n("../react/common/actions/userActions.ts"),
				st = n("../react/common/selectors/userSelectors.ts"),
				qe = n("../react/utils/i18n.ts"),
				Ot = n("../react/utils/bootstrap.ts");

			function Ut(E) {
				for (var A = 1; A < arguments.length; A++) {
					var z = arguments[A] != null ? Object(arguments[A]) : {},
						X = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(z).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(z, ue).enumerable
					})), X.forEach(function(ue) {
						Ft(E, ue, z[ue])
					})
				}
				return E
			}

			function Ft(E, A, z) {
				return A = ot(A), A in E ? Object.defineProperty(E, A, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[A] = z, E
			}

			function ot(E) {
				var A = jt(E, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function jt(E, A) {
				if (typeof E != "object" || E === null) return E;
				var z = E[Symbol.toPrimitive];
				if (z !== void 0) {
					var X = z.call(E, A || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(E)
			}
			let Ne = nt().parse(location.search);
			const It = E => {
					const A = (0, Ot.$8)() ? [(0, he.Fy)(he.if.changes), (0, he.Fy)(he.if.common), (0, he.Fy)(he.if.navigation), (0, he.Fy)(he.if.overview), (0, he.Fy)(he.if.onboarding), (0, he.Fy)(he.if.invite), (0, he.Fy)(he.if.login), (0, he.Fy)(he.if.dns), (0, he.Fy)(he.n4.ssl_tls), (0, he.Fy)(he.if.message_inbox)] : [(0, he.Fy)(he.if.common), (0, he.Fy)(he.if.invite), (0, he.Fy)(he.if.login), (0, he.Fy)(he.if.onboarding)];
					Ne.lang ? xt(E) : te.Z.get(qe.th) && Lt(E, te.Z.get(qe.ly));
					const z = async X => (await Promise.all(A.map(_e => _e(X)))).reduce((_e, Ee) => Ut({}, _e, Ee), {});
					return fe().createElement(Je.RD.Provider, {
						value: E.languagePreference
					}, fe().createElement(Je.bd, {
						translator: De.Vb,
						locale: E.languagePreference
					}, fe().createElement(Je.lm, {
						loadPhrases: z
					}, E.children)))
				},
				xt = async E => {
					let A = Ne.lang.substring(0, Ne.lang.length - 2) + Ne.lang.substring(Ne.lang.length - 2, Ne.lang.length).toUpperCase();
					if (!(0, Z.v)(A)) {
						console.warn(`${A} is not a supported locale.`), delete Ne.lang, E.history.replace({
							search: nt().stringify(Ne)
						});
						return
					}
					te.Z.set(qe.ly, A), delete Ne.lang, Lt(E, A), E.isAuthenticated || E.history.replace({
						search: nt().stringify(Ne)
					})
				}, Lt = async (E, A) => {
					if (E.isAuthenticated) try {
						await E.setUserCommPreferences({
							"language-locale": A
						}, {
							hideErrorAlert: !0
						}), te.Z.remove(qe.th), E.history.replace({
							search: nt().stringify(Ne)
						})
					} catch (z) {
						te.Z.set(qe.th, !0), console.error(z)
					} else te.Z.set(qe.th, !0)
				}, $t = E => {
					const A = (0, st.PR)(E);
					return {
						isAuthenticated: !!(A && A.id),
						languagePreference: te.Z.get(qe.ly) || (0, Z.r)(E)
					}
				}, Gt = {
					setUserCommPreferences: St.V_
				};
			var wt = (0, we.withRouter)((0, Ae.connect)($t, Gt)(It));
			It.propTypes = {
				history: ve().object,
				languagePreference: ve().string.isRequired,
				children: ve().node.isRequired,
				isAuthenticated: ve().bool,
				setUserCommPreferences: ve().func.isRequired
			};
			var Wt = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				c = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let v;
			const ae = ({
				selectorPrefix: E = "c_"
			} = {}) => (v || (v = (0, c.Z)({
				dev: !1,
				selectorPrefix: E
			})), v);
			var ye = n("../react/common/components/ModalManager.tsx"),
				Le = n("../react/app/components/ErrorBoundary.tsx"),
				Ye = n("../react/common/actions/notificationsActions.ts");
			const ct = (n.g.bootstrap || {}).data || {};
			class lt extends fe().Component {
				componentDidMount() {
					ct.messages && this.dispatchNotificationActions(ct.messages)
				}
				dispatchNotificationActions(A) {
					A.forEach(z => {
						const {
							type: X,
							message: ue,
							persist: _e
						} = z;
						["success", "info", "warn", "error"].includes(X) && this.props.notifyAdd(X, (0, De.ZP)(ue), {
							persist: !!_e
						})
					})
				}
				render() {
					return null
				}
			}
			var gt = (0, we.withRouter)((0, Ae.connect)(null, {
				notifyAdd: Ye.IH
			})(lt));
			lt.propTypes = {
				notifyAdd: ve().func.isRequired
			};
			var Ge = n("../react/app/redux/index.ts");

			function mt() {
				var E;
				const A = (0, Ge.p4)(st.PR),
					z = (A == null || (E = A.email) === null || E === void 0 ? void 0 : E.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					X = (0, D.Yc)();
				(0, Se.useEffect)(() => {
					X({
						userType: z
					})
				}, [z, X])
			}
			var ut = n("../react/common/selectors/entitlementsSelectors.ts"),
				dt = n("../react/common/selectors/accountSelectors.ts");
			const ft = ["accountId", "is_ent"];

			function Et() {
				const E = (0, D.f7)(),
					A = (0, we.useHistory)(),
					z = (0, $.uW)(A.location.pathname),
					X = (0, D.Yc)(),
					ue = (0, D.O$)(),
					_e = (0, Ge.p4)(ut.u1),
					Ee = !_e.isRequesting && !!_e.data,
					Qe = (0, Ge.p4)(ut.p1),
					pt = (0, Ge.p4)(dt.Xu),
					tt = (0, Ge.p4)(dt.uF),
					Pt = !pt.isRequesting && !!pt.data;
				(0, Se.useEffect)(() => {
					z && Pt && tt && Ee && z === tt.account.id ? X({
						accountId: tt.account.id,
						is_ent: Qe
					}) : (!z || z in E && E.accountId !== z) && ue(ft)
				}, [Pt, tt, X, ue, Ee, Qe, z, E])
			}
			var yt = n("../react/common/selectors/zoneSelectors.ts");

			function _t() {
				const E = (0, Ge.p4)(yt.nA),
					A = (0, D.Yc)();
				(0, Se.useEffect)(() => {
					var z;
					A({
						zone_id: E == null ? void 0 : E.id,
						zone_plan: E == null || (z = E.plan) === null || z === void 0 ? void 0 : z.legacy_id
					})
				}, [E, A])
			}
			const vt = () => (mt(), Et(), _t(), null);
			var ht = n("../react/app/components/Persistence/index.tsx"),
				Ct = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				Tt = n("../react/app/components/LoadingSuspense.tsx");
			const bt = fe().lazy(() => Promise.all([n.e(78317), n.e(2480), n.e(10008), n.e(56064), n.e(57518), n.e(94012), n.e(72019), n.e(85467), n.e(5668), n.e(41480), n.e(7484), n.e(39760), n.e(99062), n.e(82465), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var zt = () => fe().createElement(Tt.Z, null, fe().createElement(bt, null));
			const Ht = () => (Se.useEffect(() => j, []), null);
			var Kt = n("../../../../node_modules/moment/moment.js"),
				Mt = n.n(Kt);
			const Vt = E => {
					switch (E) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return E.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return E.toLowerCase();
						default:
							return "en"
					}
				},
				ke = () => {
					const E = (0, Ge.p4)(Z.r);
					(0, Se.useEffect)(() => {
						const A = Vt(E);
						A !== Mt().locale() && Mt().locale(A), document.documentElement.lang = E
					}, [E])
				},
				Nt = () => {
					(0, Se.useEffect)(() => {
						var E, A;
						let z;
						if (((E = window) === null || E === void 0 || (A = E.build) === null || A === void 0 ? void 0 : A.isPreviewDeploy) && (z = "cookie"), !!z) try {
							const X = document.head.querySelector("link[rel=icon]");
							X && (X.href = n("../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${z}.ico`))
						} catch {}
					}, [])
				};
			var qt = n("../react/common/constants/constants.ts");
			const en = () => {
					var E;
					const A = (0, we.useLocation)(),
						[z, X] = (0, Se.useState)(((E = window) === null || E === void 0 ? void 0 : E.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Se.useEffect)(() => {
						const ue = nt().parse(A.search);
						if (ue.pt && te.Z.set(qt.sJ, ue.pt), ue == null ? void 0 : ue.devPanel) {
							var _e, Ee;
							(_e = window) === null || _e === void 0 || (Ee = _e.localStorage) === null || Ee === void 0 || Ee.setItem("gates_devtools_ui_gates_controller_enabled", "true"), X(!0)
						}
					}, [A.search]), {
						devPanelEnabled: z
					}
				},
				tn = fe().lazy(() => Promise.all([n.e(78317), n.e(2480), n.e(10008), n.e(56064), n.e(57518), n.e(94012), n.e(72019), n.e(85467), n.e(14696), n.e(8445), n.e(41480), n.e(7484), n.e(39760), n.e(99062), n.e(82465), n.e(45800), n.e(91984), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				nn = fe().lazy(() => Promise.all([n.e(83741), n.e(65447), n.e(78317), n.e(57518), n.e(14696), n.e(26337), n.e(99062), n.e(69088), n.e(91984), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var on = ({
					userIsAuthed: E
				}) => {
					ke(), Nt();
					const {
						devPanelEnabled: A
					} = en();
					return fe().createElement(Se.Suspense, {
						fallback: fe().createElement(Ht, null)
					}, fe().createElement(we.Switch, null, !E && !0 && fe().createElement(we.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, fe().createElement(nn, null)), fe().createElement(we.Route, {
						render: () => fe().createElement(Ct.ZC, {
							minHeight: "100vh"
						}, fe().createElement(tn, null))
					})), A && fe().createElement(zt, null))
				},
				Zt = n("../../../../node_modules/yup/es/index.js"),
				rn = n("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => Zt.Z_().email((0, De.ZP)("common.validation.email")).required((0, De.ZP)("common.validation.email"))
			};
			(0, rn.Yd)(Qt).forEach(E => {
				Zt.kM(Zt.Z_, E, Qt[E])
			});
			const Xt = fe().lazy(() => Promise.all([n.e(10008), n.e(94012), n.e(6368), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				an = () => {
					const E = (0, Ot.$8)(),
						[A, z] = (0, Se.useState)(E ? Xt : fe().Fragment),
						[X, ue] = (0, Se.useState)((0, P.Yc)());
					(0, Se.useEffect)(() => {
						(0, P.fF)(() => ue((0, P.Yc)()))
					}, []);
					const _e = Ee => {
						ue(Ee), (0, P.C8)(Ee)
					};
					return (0, Se.useEffect)(() => {
						z(E ? Xt : fe().Fragment)
					}, [E]), (0, Se.useEffect)(() => {
						const Ee = () => _e(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Ee), () => {
							window.removeEventListener("storage", Ee)
						}
					}, []), fe().createElement(Se.Suspense, {
						fallback: null
					}, fe().createElement(Ae.Provider, {
						store: (0, r.bh)()
					}, fe().createElement(we.Router, {
						history: T
					}, fe().createElement(A, null, fe().createElement(Wt.Z, {
						renderer: ae()
					}, fe().createElement(wt, null, fe().createElement(Le.Z, {
						sentryTag: "Root"
					}, fe().createElement(at.J$, {
						value: {
							fetcher: Ee => fetch(Ee).then(Qe => Qe.json())
						}
					}, fe().createElement(vt, null), fe().createElement(gt, null), fe().createElement(ht.Z_, {
						onDarkModeChangeCb: _e
					}, fe().createElement(ce.ZP, null, fe().createElement(on, {
						userIsAuthed: E
					}))), fe().createElement(ye.ZP, null), fe().createElement(it.F0, null)))))))))
				},
				sn = () => {
					(0, $e.render)(fe().createElement(an, null), document.getElementById("react-app"))
				};
			var rt = n("../utils/initSparrow.ts"),
				At = n("../utils/zaraz.ts");
			const cn = () => {
					const E = (0, st.PR)((0, r.bh)().getState());
					ln(), (0, rt.Ug)(), (0, At.bM)(), (E == null ? void 0 : E.id) && Ce().setUserId(E == null ? void 0 : E.id), (0, rt.yV)(), !(0, rt.Wi)() && (0, rt.IM)(), E ? (0, At.yn)(E) : (0, At.Ro)()
				},
				ln = () => {
					var E, A;
					(E = window) === null || E === void 0 || (A = E.OneTrust) === null || A === void 0 || A.OnConsentChanged(() => {
						const z = (0, st.PR)((0, r.bh)().getState());
						(0, rt.Wi)() ? (Ce().setEnabled(!0), (z == null ? void 0 : z.id) ? (Ce().setUserId(z.id), (0, At.yn)(z)) : (0, At.Ro)(), (0, rt.yV)()) : (Ce().setEnabled(!1), (0, rt.IM)())
					})
				};

			function un(E) {
				for (var A = 1; A < arguments.length; A++) {
					var z = arguments[A] != null ? Object(arguments[A]) : {},
						X = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(z).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(z, ue).enumerable
					})), X.forEach(function(ue) {
						dn(E, ue, z[ue])
					})
				}
				return E
			}

			function dn(E, A, z) {
				return A = pn(A), A in E ? Object.defineProperty(E, A, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[A] = z, E
			}

			function pn(E) {
				var A = gn(E, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function gn(E, A) {
				if (typeof E != "object" || E === null) return E;
				var z = E[Symbol.toPrimitive];
				if (z !== void 0) {
					var X = z.call(E, A || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(E)
			}
			const mn = E => {
				_.$e(function(A) {
					A.setTag("init", "global"), _.Tb(E)
				}), N(E)
			};
			try {
				n.g.build = un({}, {
					branch: "master",
					isReleaseCandidate: "true",
					commit: "9205cc6b5e53840ca487b24d3cb8c35d6b07d1d8",
					dashVersion: "25840307",
					env: "production",
					builtAt: 1722529676713,
					versions: {
						"@cloudflare/app-dash": "25.161.22",
						node: "20.10.0",
						yarn: "3.2.2",
						webpack: "5.88.2"
					}
				}, {
					isPreviewDeploy: (0, ge.p)()
				}), Xe();
				try {
					n("../react/utils/api.ts")
				} catch (E) {
					throw _.$e(function(A) {
						A.setTag("init", "utils/api"), _.Tb(E)
					}), E
				}
				try {
					h(T)
				} catch (E) {
					throw _.$e(function(A) {
						A.setTag("init", "hashScroll"), _.Tb(E)
					}), E
				}
				try {
					(0, O.Z)()
				} catch (E) {
					throw _.$e(function(A) {
						A.setTag("init", "styles"), _.Tb(E)
					}), E
				}
				try {
					C()
				} catch (E) {
					throw _.$e(function(A) {
						A.setTag("init", "mfePreviewData"), _.Tb(E)
					}), E
				}(0, Ie.k)().then(async E => {
					var A;
					const z = (0, r.bh)(),
						X = (E == null ? void 0 : E.data) || {};
					z.dispatch((0, t.mW)("user", X == null ? void 0 : X.user));
					const ue = E == null || (A = E.data) === null || A === void 0 ? void 0 : A.user;
					n.g.bootstrap = E, ue && ue.id && Ze(ue.id);
					try {
						await Oe()
					} catch (_e) {
						throw _.$e(function(Ee) {
							Ee.setTag("init", "gates"), _.Tb(_e)
						}), _e
					}
					try {
						cn()
					} catch (_e) {
						throw _.$e(function(Ee) {
							Ee.setTag("init", "tracking"), _.Tb(_e)
						}), _e
					}
					return sn()
				}).catch(E => {
					_.$e(function(A) {
						A.setTag("init", "bootstrap"), _.Tb(E)
					}), N(E)
				})
			} catch (E) {
				mn(E)
			}
		},
		"../libs/init/initBootstrap.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				k: function() {
					return l
				}
			});
			class e extends Error {
				constructor(m, i) {
					super(i);
					this.name = `${m} ${i}`
				}
			}
			const o = () => {
					document.cookie.split(";").forEach(m => {
						const [i] = m.trim().split("=");
						document.cookie = `${i}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				l = async () => {
					let d = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!d.ok) throw d.headers.get("content-type") === "text/html" && (await d.text()).toLowerCase().includes("cookie too large") && (o(), window.location.reload()), new e("Bootstrap API Failure", d == null ? void 0 : d.status);
					return (await d.json()).result.data
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				BQ: function() {
					return p
				},
				Bh: function() {
					return i
				},
				CM: function() {
					return _
				},
				MF: function() {
					return o
				},
				TS: function() {
					return s
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
					return d
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
				l = (0, e.R)(o.ADD_SITE, u => ({
					payload: u
				})),
				d = (0, e.R)(o.RESOLVING_START),
				m = (0, e.R)(o.RESOLVING_COMPLETE),
				i = (0, e.R)(o.SELECT_ZONE, u => ({
					payload: u
				})),
				g = (0, e.R)(o.SELECT_ACCOUNT, u => ({
					payload: u
				})),
				p = (0, e.R)(o.SELECT_PAGES_PROJECT, u => ({
					payload: u
				})),
				_ = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, u => ({
					payload: u
				})),
				t = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, u => ({
					accountIds: u
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				s = (0, e.R)(o.SELECT_WORKER, u => ({
					payload: u
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
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
					return d
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
				l = "deepLinkQueryParams",
				d = "add",
				m = "multiSkuProducts",
				i = "/:account/billing/checkout",
				g = "/:account/:zone/billing/checkout",
				p = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				ZP: function() {
					return W
				},
				U: function() {
					return g.U
				},
				dd: function() {
					return g.dd
				},
				bk: function() {
					return i.bk
				},
				Bh: function() {
					return i.Bh
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n("../react/app/redux/index.ts"),
				l = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = n("../react/app/components/DeepLink/utils.ts"),
				m = n("../react/utils/bootstrap.ts"),
				i = n("../react/app/components/DeepLink/actions.ts"),
				g = n("../react/app/components/DeepLink/selectors.ts"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				_ = n.n(p);

			function t(K) {
				for (var j = 1; j < arguments.length; j++) {
					var N = arguments[j] != null ? Object(arguments[j]) : {},
						O = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(N).filter(function(b) {
						return Object.getOwnPropertyDescriptor(N, b).enumerable
					})), O.forEach(function(b) {
						r(K, b, N[b])
					})
				}
				return K
			}

			function r(K, j, N) {
				return j = s(j), j in K ? Object.defineProperty(K, j, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[j] = N, K
			}

			function s(K) {
				var j = u(K, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function u(K, j) {
				if (typeof K != "object" || K === null) return K;
				var N = K[Symbol.toPrimitive];
				if (N !== void 0) {
					var O = N.call(K, j || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(K)
			}
			class a {
				constructor(j, N) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", O => {
						this.resolvers.set(O, {
							name: O,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", O => {
						const b = this.resolvers.get(O);
						b && (b.endTime = Date.now(), this.resolvers.set(O, b))
					}), r(this, "resolverCancel", O => {
						this.resolverDone(O), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", O => {
						const b = "NO_ACTION",
							V = {
								actionType: b,
								startTime: 0
							};
						return {
							start: (w = b) => {
								const re = this.resolvers.get(O);
								V.actionType = w, V.startTime = Date.now(), re && re.userActions.push(V)
							},
							finish: (w = b) => {
								V.actionType = w, V.endTime = Date.now()
							},
							cancel: (w = b) => {
								V.actionType = w, V.endTime = Date.now(), this.resolverCancel(O)
							}
						}
					}), this.deepLink = j, this.legacyDeepLink = N, this.resolvers = new Map
				}
				track(j) {
					try {
						if (this._done) return;
						this._done = !0;
						const N = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: h(this.startTime, this.endTime),
								totalCpuTime: h(this.startTime, this.endTime)
							},
							O = this.resolvers.size === 0 ? N : Array.from(this.resolvers.values()).reduce((b, V) => {
								const w = h(V.startTime, V.endTime),
									re = V.userActions.reduce((k, T) => {
										const B = h(T.startTime, T.endTime);
										return {
											totalTime: k.totalTime + B,
											actions: k.actions.set(T.actionType, B)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									H = w - re.totalTime;
								return t({}, b, {
									totalTime: b.totalTime + w,
									totalUserActionsTime: b.totalUserActionsTime + re.totalTime,
									totalCpuTime: b.totalCpuTime + H,
									[`${V.name}ResolverTotalTime`]: w,
									[`${V.name}ResolverTotalCpuTime`]: H,
									[`${V.name}ResolverTotalUserActionsTime`]: re.totalTime
								}, Array.from(re.actions.keys()).reduce((k, T) => t({}, k, {
									[`${V.name}Resolver/${T}`]: re.actions.get(T)
								}), {}))
							}, t({}, N, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						_().sendEvent(j, O)
					} catch (N) {
						console.error(N)
					}
				}
			}

			function h(K = Date.now(), j = Date.now()) {
				return (j - K) / 1e3
			}
			var f = n("../react/app/components/DeepLink/constants.ts"),
				P = n("../react/common/hooks/useCachedState.ts"),
				F = n("../react/common/hooks/usePrevious.ts");

			function M(K) {
				for (var j = 1; j < arguments.length; j++) {
					var N = arguments[j] != null ? Object(arguments[j]) : {},
						O = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(N).filter(function(b) {
						return Object.getOwnPropertyDescriptor(N, b).enumerable
					})), O.forEach(function(b) {
						U(K, b, N[b])
					})
				}
				return K
			}

			function U(K, j, N) {
				return j = L(j), j in K ? Object.defineProperty(K, j, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[j] = N, K
			}

			function L(K) {
				var j = I(K, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function I(K, j) {
				if (typeof K != "object" || K === null) return K;
				var N = K[Symbol.toPrimitive];
				if (N !== void 0) {
					var O = N.call(K, j || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(K)
			}
			var Q = ({
					children: K
				}) => {
					const j = (0, o.TZ)(),
						N = (0, l.useHistory)(),
						O = (0, F.Z)(N.location.pathname),
						b = (0, o.p4)(g.dd),
						[V, w] = (0, e.useState)(!0),
						[re, H] = (0, P.j)(void 0, {
							key: f.Fj
						}),
						[k, T] = (0, P.j)(void 0, {
							key: f.s$
						}),
						B = (0, m.$8)();
					let $ = new URLSearchParams(N.location.search);
					const ne = (0, d.mL)(N.location.pathname, $);
					let ie = null,
						x = null;
					if ($.has(f.Tc) && $.delete(f.Tc), $.get(f.BV)) ie = $.get(f.BV), N.location.hash && (x = N.location.hash);
					else if (re) {
						const Z = new URLSearchParams(re);
						Z.get(f.BV) && (ie = Z.get(f.BV), $ = Z)
					} else ne && ($.set(f.BV, ne), ie = ne);
					if (ie && f._h.test(ie)) {
						const Z = $.getAll(f.Kt),
							de = JSON.stringify(Z);
						Z.length && de !== k && T(de), $.has(f.Tc) && $.delete(f.Tc), $.delete(f.Kt)
					}!B && re === void 0 && ie && H($.toString());
					const oe = async () => {
						try {
							if ((0, d.I3)(ie) && B && !b) {
								re && H(void 0), j.dispatch((0, i.r4)()), w(!0);
								const Z = await (0, d.py)(ie, w, j, N, O, new a(ie, ne ? `${N.location.pathname}${N.location.search}` : void 0));
								$.delete(f.BV);
								const de = $.toString();
								N.replace(M({}, N.location, {
									pathname: Z,
									search: de
								}, x ? {
									hash: x
								} : {})), j.dispatch((0, i.WF)())
							}
						} catch (Z) {
							j.dispatch((0, i.WF)()), console.error(Z)
						} finally {
							w(!1)
						}
					};
					return (0, e.useEffect)(() => {
						oe()
					}, [N.location.pathname, N.location.search, b]), (V || (0, d.I3)(ie)) && B ? null : K
				},
				Y = n("../react/app/components/DeepLink/reducer.ts"),
				W = Q
		},
		"../react/app/components/DeepLink/reducer.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				E: function() {
					return d
				},
				r: function() {
					return i
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				l = n("../react/app/components/DeepLink/actions.ts");
			const d = null,
				m = o().from({
					lastAction: d,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function i(g = m, p) {
				if (p.type === l.MF.RESOLVING_COMPLETE) return m;
				if (p.type === l.MF.RESOLVING_START) return g.set("isResolving", !0);
				if (g.isResolving) {
					if (p.type === l.MF.RESOLVING_COMPLETE) return g.set("isResolving", !1);
					if (p.type === l.MF.SET_FILTERED_ACCOUNT_IDS) return g.set("filteredAccountIds", p.accountIds);
					if (p.type === l.MF.DELETE_FILTERED_ACCOUNT_IDS) return g.set("filteredAccountIds", void 0);
					{
						let _ = g;
						try {
							_ = g.set("lastAction", p)
						} catch {
							_ = g.set("lastAction", {
								type: p.type
							})
						}
						return _
					}
				} else return g
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(G, y, n) {
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
			const e = d => d.deepLink.lastAction,
				o = d => d.deepLink.isResolving,
				l = d => d.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				I3: function() {
					return u
				},
				X1: function() {
					return r
				},
				mL: function() {
					return F
				},
				py: function() {
					return P
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../react/app/components/DeepLink/reducer.ts"),
				l = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const d = M => M.replace(l.default.endsWithSlash, ""),
				m = M => {
					const U = d(M).split("/").slice(3);
					return U.length ? "/" + U.join("/") : ""
				},
				i = M => {
					const U = d(M).split("/").slice(2);
					return U.length ? `apps/${U.join("/")}` : "apps"
				};
			var g = n("../react/app/components/DeepLink/selectors.ts"),
				p = n("../react/app/components/DeepLink/constants.ts"),
				_ = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const r = M => (0, _.Lb)(M) && (M.split(".").length > 1 || (0, t.v5)(M)),
				s = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				u = M => typeof M == "string" && M.startsWith("/"),
				a = (M, U) => L => new Promise((I, q) => {
					U.start();
					const Q = M.subscribe(() => {
						const Y = (0, g.yI)(M.getState());
						Y === o.E ? (U.cancel(), Q(), q("DeepLink: waitForAction out of context.")) : L(Y) && (U.finish(Y.type), Q(), I(Y))
					})
				}),
				h = (M, U, L) => (I, q) => new Promise((Q, Y) => {
					L.start();
					const W = U.location.pathname;
					I = new URL(I, window.location.href).pathname, W !== I && (L.cancel(), Y(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${I}", but on "${W}". You need to redirect to "${I}", and unblockRouter in your Resolver, before you use this function.`));
					const K = M.subscribe(() => {
						const j = (0, g.yI)(M.getState()),
							N = U.location.pathname,
							b = new URLSearchParams(U.location.search).get(p.BV);
						(N !== I || !!b) && (L.cancel(), K(), Y(`DeepLink: waitForPageAction user navigated away from "${I}" to "${N}${b?U.location.search:""}"`)), j === o.E ? (L.cancel(), K(), Y("DeepLink: waitForPageAction out of context.")) : q(j) && (L.finish(j.type), K(), Q(j))
					})
				});

			function f(M) {
				const U = [],
					L = M.split("?")[0].split("/");
				for (let I of L) I.length !== 0 && (I.startsWith(":") ? U.push({
					value: I.substring(1),
					type: "dynamic"
				}) : U.push({
					value: I,
					type: "static"
				}));
				return U
			}
			async function P(M, U, L, I, q, Q) {
				Q.start();
				const Y = f(M),
					K = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(7484), n.e(72775)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					j = {};
				let N = "";
				for (const [O, b] of Y.entries())
					if (b.type === "static") N = [N, b.value].join("/");
					else if (b.type === "dynamic" && s.is(b.value) && b.value in K) {
					Q.resolverStart(b.value);
					const V = await K[b.value]({
						deepLink: M,
						blockRouter: () => U(!0),
						unblockRouter: () => U(!1),
						routerHistory: I,
						resolvedValues: j,
						store: L,
						referringRoute: q,
						uri: {
							currentPartIdx: O,
							parts: Y
						},
						waitForAction: a(L, Q.createUserActionTracker(b.value)),
						waitForPageAction: h(L, I, Q.createUserActionTracker(b.value))
					});
					Q.resolverDone(b.value), N = [N, V].join("/"), j[b.value] = V
				} else throw Q.cancel(), new Error(`DeepLink: Resolver with name '${b.value}' is not supported.`);
				return Q.done(), N
			}

			function F(M, U) {
				const L = ":account",
					I = ":zone",
					q = U.get("zone");
				if (q) return U.delete("zone"), `/${L}/${I}/${q}`;
				const Q = U.get("account");
				if (Q) return U.delete("account"), `/${L}/${Q}`;
				if (M === "/overview") return `/${L}/${I}`;
				if (M === "/apps") return `/${L}/${I}/${i(M)}`;
				const Y = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const W of Y) {
					const K = W.length;
					if (M.startsWith(W) && (M.length === K || M[K] === "/")) return `/${L}/${I}${M}`
				}
				switch (M) {
					case "/account/billing":
						return `/${L}/billing`;
					case "/account/subscriptions":
						return `/${L}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${L}/dns-firewall`;
					case "/account/audit-log":
						return `/${L}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(G, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				d = n("../react/app/components/SomethingWrong.jsx"),
				m = n("../utils/sentry/lastSentEventId.ts"),
				i = n("../react/utils/zaraz.ts"),
				g = n("../react/utils/url.ts");
			const p = ({
				sentryTag: _,
				children: t
			}) => o().createElement(l.SV, {
				beforeCapture: r => {
					_ && r.setTag("errorBoundary", _), i.tg === null || i.tg === void 0 || i.tg.track("page-error", {
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
					eventId: s
				}) => {
					const u = m.e.getEventId() || s;
					return o().createElement(d.Z, {
						type: "page",
						error: r,
						eventId: u
					})
				}
			}, t);
			y.Z = p
		},
		"../react/app/components/Footer.tsx": function(G, y, n) {
			"use strict";
			n.d(y, {
				Z: function() {
					return k
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				i = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = n.n(g),
				_ = n("../react/common/components/Apple/utils.tsx"),
				t = n("../react/utils/translator.tsx"),
				r = n("../../../../node_modules/moment/moment.js"),
				s = n.n(r);
			const u = () => {
					const T = s()().format("YYYY"),
						B = $ => {
							p().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: $
							})
						};
					return o().createElement(a, {
						marginTop: "auto"
					}, o().createElement(h, null, o().createElement(f, null, o().createElement(P, null, "\xA9 ", T, " Cloudflare, Inc."), o().createElement(P, null, o().createElement(F, null, o().createElement(M, {
						showOnDeskTop: !1
					}, o().createElement(U, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => B("Support")
					}, o().createElement(t.cC, {
						id: "common.support"
					}))), o().createElement(M, null, o().createElement(U, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => B("Privacy Policy")
					}, o().createElement(t.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(M, null, o().createElement(U, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => B("Terms of Use")
					}, o().createElement(t.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(M, null, o().createElement(U, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => B("Cookie Preferences")
					}, o().createElement(t.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(M, null, o().createElement(U, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => B("Trademark")
					}, o().createElement(t.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(F, null, o().createElement(M, null, o().createElement(U, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => B("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(t.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				a = (0, i.createComponent)(({
					theme: T,
					marginTop: B
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: B
				})),
				h = (0, i.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				f = (0, i.createComponent)(({
					theme: T
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${T.space[3]}px`
					}
				})),
				P = (0, i.createComponent)(({
					theme: T
				}) => ({
					width: "100%",
					color: T.colors.white,
					fontSize: T.fontSizes[1],
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
				F = (0, i.createComponent)(({
					theme: T
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: T.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				M = (0, i.createComponent)(({
					showOnDeskTop: T = !0,
					theme: B
				}) => ({
					color: B.colors.white,
					fontSize: B.fontSizes[1],
					height: "20px",
					display: T ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: B.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: B.space[3],
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
				U = (0, i.createStyledComponent)(({
					theme: T
				}) => ({
					textDecoration: "none",
					color: T.colors.white,
					"&:hover": {
						color: T.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var L = u,
				I = n("../react/pages/welcome/routes.ts"),
				q = n("../react/utils/cookiePreferences.ts"),
				Q = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				Y = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				K = () => {
					const [T, B] = (0, e.useState)(!1), $ = (0, q.wV)(), ne = () => {
						B(!0)
					}, ie = () => {
						B(!1)
					}, x = $ && $ === "US" ? (0, t.ZP)("footer.cpra_cta.privacy_choices") : (0, t.ZP)("footer.cpra_cta.cookie_preferences"), oe = {
						background: "transparent",
						borderRadius: "none",
						color: T ? (0, Q.Yc)() ? "#ee730a" : "#003681" : (0, Q.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: T ? "underline" : "none",
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
					return o().createElement(d.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: oe,
						onMouseEnter: ne,
						onMouseLeave: ie
					}, o().createElement(d.Ei, {
						height: 15,
						src: Y,
						mr: 2,
						alt: x
					}), x)
				};

			function j() {
				return j = Object.assign ? Object.assign.bind() : function(T) {
					for (var B = 1; B < arguments.length; B++) {
						var $ = arguments[B];
						for (var ne in $) Object.prototype.hasOwnProperty.call($, ne) && (T[ne] = $[ne])
					}
					return T
				}, j.apply(this, arguments)
			}

			function N(T, B) {
				if (T == null) return {};
				var $ = O(T, B),
					ne, ie;
				if (Object.getOwnPropertySymbols) {
					var x = Object.getOwnPropertySymbols(T);
					for (ie = 0; ie < x.length; ie++) ne = x[ie], !(B.indexOf(ne) >= 0) && (!Object.prototype.propertyIsEnumerable.call(T, ne) || ($[ne] = T[ne]))
				}
				return $
			}

			function O(T, B) {
				if (T == null) return {};
				var $ = {},
					ne = Object.keys(T),
					ie, x;
				for (x = 0; x < ne.length; x++) ie = ne[x], !(B.indexOf(ie) >= 0) && ($[ie] = T[ie]);
				return $
			}
			const b = 24,
				V = (0, i.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,Q.Yc)()?Q.rS.colors.orange[6]:Q.rS.colors.blue[4]}`
					}
				}), d.A),
				w = T => {
					let {
						onClick: B
					} = T, $ = N(T, ["onClick"]);
					return o().createElement(V, j({
						onClick: ne => {
							p().sendEvent("navigate footer nav", {
								destinationPage: $.href
							}), B && B(ne)
						}
					}, $))
				},
				re = T => {
					let {
						children: B,
						target: $,
						rel: ne
					} = T, ie = N(T, ["children", "target", "rel"]);
					return o().createElement(w, j({
						target: $ || "_blank",
						rel: ne || "noopener noreferrer"
					}, ie), B, o().createElement(m.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				};
			var k = () => {
				var T, B;
				const $ = [I.d.root.pattern].some(ne => (0, l.matchPath)(location.pathname, {
					path: ne
				}));
				return (0, _.PP)() ? o().createElement(L, null) : $ ? null : o().createElement(d.$_, {
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: 4,
					px: 3,
					mt: "auto"
				}, o().createElement(d.ZC, {
					display: "flex",
					flexWrap: "wrap",
					mx: "auto",
					maxWidth: "64rem"
				}, o().createElement(d.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.contact")), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.contact_support"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, t.ZP)("footer.contact_sales"))), o().createElement(d.Dd, {
					mt: 3
				}, o().createElement(d.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, o().createElement(w, {
					"aria-label": (0, t.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${b}px`
				}, o().createElement(m.J, {
					type: "twitter",
					size: b
				})), o().createElement(w, {
					"aria-label": (0, t.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${b}px`
				}, o().createElement(m.J, {
					type: "facebook",
					size: b
				})), o().createElement(w, {
					"aria-label": (0, t.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${b}px`
				}, o().createElement(m.J, {
					type: "linkedin",
					size: b
				})))))), o().createElement(d.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.what_we_do")), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://www.cloudflare.com/plans"
				}, (0, t.ZP)("footer.plans"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://www.cloudflare.com/overview"
				}, (0, t.ZP)("footer.about"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://www.cloudflare.com/network-map"
				}, (0, t.ZP)("footer.network_map"))))), o().createElement(d.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.resources")), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://developers.cloudflare.com"
				}, (0, t.ZP)("footer.product_docs"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://blog.cloudflare.com"
				}, (0, t.ZP)("footer.blog"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, t.ZP)("footer.testimonials"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://partners.cloudflare.com"
				}, (0, t.ZP)("footer.hosting_partners"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://api.cloudflare.com"
				}, (0, t.ZP)("footer.api"))))), o().createElement(d.ZC, {
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
					title: `Current version: ${((T=window)===null||T===void 0||(B=T.build)===null||B===void 0?void 0:B.dashVersion)||"unknown"}`
				}), o().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.support")), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.help_center"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://community.cloudflare.com"
				}, (0, t.ZP)("footer.community"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://www.cloudflarestatus.com"
				}, (0, t.ZP)("footer.system_status"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://www.cloudflare.com/abuse"
				}, (0, t.ZP)("footer.trust_safety"))))), o().createElement(d.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.about_us")), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://www.cloudflare.com/people"
				}, (0, t.ZP)("footer.team"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://www.cloudflare.com/careers"
				}, (0, t.ZP)("footer.careers"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, t.ZP)("footer.press"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, t.ZP)("footer.tos"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, t.ZP)("footer.subs_agreement"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(re, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, t.ZP)("footer.privacy_policy"))))), o().createElement(K, null)))
			}
		},
		"../react/app/components/LoadingSuspense.tsx": function(G, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				m = n("../react/utils/translator.tsx"),
				i = n("../react/app/components/ErrorStatus.tsx"),
				g = n("../react/common/components/EmptyPage.jsx"),
				p = n("../react/common/hooks/suspenseHelpers.ts");

			function _(s) {
				const [u, a] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const h = window.setTimeout(() => a(!0), s);
					return () => window.clearTimeout(h)
				}, []), u
			}
			const t = ({
					loadingTimeout: s = 1e3,
					stillLoadingTimeout: u = 9e3
				}) => {
					const a = _(s),
						h = _(u);
					if ((0, p.nW)(), !a && !h) return o().createElement(g.Z, null);
					const f = h ? o().createElement(m.cC, {
						id: "common.still_loading"
					}) : a ? o().createElement(m.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(i.Z, {
						size: 5
					}, o().createElement(d.ZC, {
						mr: 3
					}, o().createElement(l.g, {
						size: "2x"
					})), f)
				},
				r = ({
					children: s
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(t, null)
				}, s);
			y.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
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
					return i
				},
				m6: function() {
					return t
				},
				n: function() {
					return _
				},
				yl: function() {
					return d
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const l = "/persistence/user",
				d = async () => {
					try {
						return await (await e.get(l, {
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
					} catch (s) {
						console.error(s)
					}
				}, i = async (r, s) => {
					try {
						return await (await e.post(`${l}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: r,
								accountId: s
							}),
							hideErrorAlert: !0
						})).body
					} catch (u) {
						return console.error(u), []
					}
				}, g = async (r, s) => {
					try {
						return await e.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: s
							}),
							hideErrorAlert: !0
						}), !0
					} catch (u) {
						return console.error(u), !1
					}
				}, p = async r => {
					try {
						return await (await e.post(l, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (s) {
						console.error(s)
					}
				}, _ = async r => {
					try {
						return await (await e.post(`${l}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (s) {
						console.error(s)
					}
				}, t = async r => {
					try {
						return await (await e.post(`${l}/viewed-changes`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (s) {
						throw console.error(s), s
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(G, y, n) {
			"use strict";
			n.d(y, {
				Wl: function() {
					return _
				},
				lp: function() {
					return f
				},
				Z_: function() {
					return F
				},
				r7: function() {
					return K
				},
				Tv: function() {
					return H
				},
				yZ: function() {
					return M
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../react/app/redux/index.ts"),
				d = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = n.n(d),
				i = n("../react/utils/bootstrap.ts"),
				g = n("../react/common/selectors/zoneSelectors.ts"),
				p = n("../react/app/components/Persistence/api.ts");
			const _ = 10;

			function t(k) {
				for (var T = 1; T < arguments.length; T++) {
					var B = arguments[T] != null ? Object(arguments[T]) : {},
						$ = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(B).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(B, ne).enumerable
					})), $.forEach(function(ne) {
						r(k, ne, B[ne])
					})
				}
				return k
			}

			function r(k, T, B) {
				return T = s(T), T in k ? Object.defineProperty(k, T, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[T] = B, k
			}

			function s(k) {
				var T = u(k, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function u(k, T) {
				if (typeof k != "object" || k === null) return k;
				var B = k[Symbol.toPrimitive];
				if (B !== void 0) {
					var $ = B.call(k, T || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(k)
			}
			const a = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				h = t({}, a, {
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
				f = (0, e.createContext)(h),
				P = f.Consumer,
				F = ({
					children: k,
					onDarkModeChangeCb: T
				}) => {
					const [B, $] = (0, e.useState)(a), [ne, ie] = (0, e.useState)(h.isLoading), x = (0, i.$8)(), oe = (0, l.p4)(ge => (0, g.wH)(ge));
					(0, e.useEffect)(() => {
						x ? (0, p.yl)().then(ge => {
							ge && ($(ge), T(ge.darkMode))
						}).finally(() => ie(!1)) : ie(!1)
					}, [x]);
					const Z = (ge, me) => !!B.favorites.find(Ce => Ce.type === "zone" && Ce.name === ge && Ce.accountId === me),
						de = ge => B.favorites.filter(Ce => Ce.type === "zone" && Ce.accountId === ge).length < _;
					return o().createElement(f.Provider, {
						value: t({}, B, {
							isLoading: ne,
							actions: {
								canAccountStarZone: de,
								isZoneStarred: Z,
								starZone: async (ge, me) => {
									var Ce;
									const Me = !Z(ge, me),
										Be = de(me);
									if (Me && !Be) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Re = await (0, p.lt)(ge, me);
									m().sendEvent("click star zone", {
										isStarring: Me,
										totalStarredZones: Re.filter(R => R.accountId === me && R.type === "zone").length,
										totalZones: oe == null || (Ce = oe.paginationData) === null || Ce === void 0 ? void 0 : Ce.info.total_count
									}), $(t({}, B, {
										favorites: Re
									}))
								},
								setDarkMode: async ge => {
									const me = await (0, p.C8)(ge);
									$(me), T(me.darkMode)
								},
								logRouteVisited: async ge => {
									var me;
									const Ce = await (0, p.n)(ge);
									$((me = Ce) !== null && me !== void 0 ? me : t({}, B))
								},
								viewChange: async ge => {
									const me = await (0, p.m6)(ge);
									$(t({}, B, {
										viewedChanges: me
									}))
								}
							}
						})
					}, k)
				},
				M = () => (0, e.useContext)(f);
			var U = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				L = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function I() {
				return I = Object.assign ? Object.assign.bind() : function(k) {
					for (var T = 1; T < arguments.length; T++) {
						var B = arguments[T];
						for (var $ in B) Object.prototype.hasOwnProperty.call(B, $) && (k[$] = B[$])
					}
					return k
				}, I.apply(this, arguments)
			}

			function q(k, T) {
				if (k == null) return {};
				var B = Q(k, T),
					$, ne;
				if (Object.getOwnPropertySymbols) {
					var ie = Object.getOwnPropertySymbols(k);
					for (ne = 0; ne < ie.length; ne++) $ = ie[ne], !(T.indexOf($) >= 0) && (!Object.prototype.propertyIsEnumerable.call(k, $) || (B[$] = k[$]))
				}
				return B
			}

			function Q(k, T) {
				if (k == null) return {};
				var B = {},
					$ = Object.keys(k),
					ne, ie;
				for (ie = 0; ie < $.length; ie++) ne = $[ie], !(T.indexOf(ne) >= 0) && (B[ne] = k[ne]);
				return B
			}
			const Y = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var K = k => {
					let {
						isStarred: T,
						size: B = 16
					} = k, $ = q(k, ["isStarred", "size"]);
					const ne = Y[(0, U.Yc)() ? "dark" : "light"];
					return o().createElement(L.J, I({
						type: T ? "star" : "star-outline",
						color: T ? ne.gold : ne.gray,
						size: B
					}, $))
				},
				j = n("../../../../node_modules/@cloudflare/elements/es/index.js");

			function N(k) {
				for (var T = 1; T < arguments.length; T++) {
					var B = arguments[T] != null ? Object(arguments[T]) : {},
						$ = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(B).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(B, ne).enumerable
					})), $.forEach(function(ne) {
						O(k, ne, B[ne])
					})
				}
				return k
			}

			function O(k, T, B) {
				return T = b(T), T in k ? Object.defineProperty(k, T, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[T] = B, k
			}

			function b(k) {
				var T = V(k, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function V(k, T) {
				if (typeof k != "object" || k === null) return k;
				var B = k[Symbol.toPrimitive];
				if (B !== void 0) {
					var $ = B.call(k, T || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(k)
			}
			const w = {
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
			var H = (0, e.forwardRef)(({
				featurePreview: k = !1,
				isStarred: T,
				onClickFn: B,
				isDisabled: $,
				testId: ne,
				buttonText: ie,
				size: x = "large"
			}, oe) => {
				const Z = w[(0, U.Yc)() ? "dark" : "light"][T && !k ? "active" : "default"],
					de = N({}, x === "large" && {
						starIconSize: 16,
						fontSize: 3,
						height: "auto",
						paddingLeft: "12px",
						paddingRight: 3
					}, x === "small" && {
						starIconSize: 14,
						fontSize: 1,
						height: "1.5rem",
						paddingLeft: "6px",
						paddingRight: 2
					});
				return o().createElement(j.zx, {
					innerRef: oe,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: de.paddingRight,
					gap: 1,
					pl: de.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: k || $ ? "default" : "pointer",
					backgroundColor: Z.bg,
					color: Z.text,
					borderColor: Z.border,
					onClick: B,
					opacity: $ ? .5 : 1,
					disabled: $,
					fontSize: de.fontSize,
					height: de.height,
					"data-testid": ne
				}, o().createElement(K, {
					isStarred: k ? !1 : T,
					size: de.starIconSize
				}), ie)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(G, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/prop-types/index.js"),
				d = n.n(l),
				m = n("../../../common/intl/intl-react/src/index.ts"),
				i = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = n("../node_modules/@cloudflare/component-button/es/index.js"),
				p = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				_ = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				r = n.n(t),
				s = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				u = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				a = n("../react/app/components/Footer.tsx"),
				h = n("../react/utils/url.ts");

			function f(N) {
				for (var O = 1; O < arguments.length; O++) {
					var b = arguments[O] != null ? Object(arguments[O]) : {},
						V = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && V.push.apply(V, Object.getOwnPropertySymbols(b).filter(function(w) {
						return Object.getOwnPropertyDescriptor(b, w).enumerable
					})), V.forEach(function(w) {
						P(N, w, b[w])
					})
				}
				return N
			}

			function P(N, O, b) {
				return O = F(O), O in N ? Object.defineProperty(N, O, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[O] = b, N
			}

			function F(N) {
				var O = M(N, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function M(N, O) {
				if (typeof N != "object" || N === null) return N;
				var b = N[Symbol.toPrimitive];
				if (b !== void 0) {
					var V = b.call(N, O || "default");
					if (typeof V != "object") return V;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(N)
			}
			const U = (0, i.createComponent)(({
					type: N
				}) => ({
					height: N !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				L = (0, i.createComponent)(({
					theme: N,
					margin: O,
					size: b = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: N.colors.gray[3],
					height: O ? "auto" : "100%",
					padding: O ? 0 : N.space[b > 1 ? b - 2 : 0],
					margin: O,
					justifyContent: "center",
					alignItems: "center"
				})),
				I = (0, i.createComponent)(() => ({
					textAlign: "left"
				})),
				q = (0, i.createComponent)(() => ({
					textAlign: "right"
				})),
				Q = (0, i.createComponent)(({
					theme: N
				}) => ({
					fontSize: N.fontSizes[6]
				})),
				Y = (0, i.createComponent)(({
					theme: N
				}) => ({
					fontSize: N.fontSizes[4]
				})),
				W = (0, i.createComponent)(({
					theme: N
				}) => ({
					fontSize: N.fontSizes[3]
				})),
				K = (0, i.createComponent)(({
					theme: N
				}) => ({
					width: "100%",
					height: 125,
					marginTop: N.space[4],
					padding: N.space[2]
				}), "textarea");
			class j extends o().Component {
				constructor(...O) {
					super(...O);
					P(this, "state", {
						value: "",
						submitted: !1
					}), P(this, "handleTextareaChange", b => {
						this.setState({
							value: b.target.value
						})
					}), P(this, "sendErrToSentry10", async () => {
						try {
							var b, V, w, re;
							const H = ((b = window) === null || b === void 0 || (V = b.bootstrap) === null || V === void 0 || (w = V.data) === null || w === void 0 || (re = w.user) === null || re === void 0 ? void 0 : re.id) || "Unknown",
								k = this.props.eventId || p.eW(),
								T = {
									name: H,
									email: `${H}@userid.com`,
									comments: this.state.value,
									eventId: k,
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
								body: JSON.stringify(T)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (H) {
							console.error(H)
						}
					}), P(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), P(this, "renderContent", b => o().createElement(m.oc, null, V => o().createElement(U, {
						type: b
					}, o().createElement(L, null, o().createElement(I, null, o().createElement(Q, null, V.t("error.internal_issues")), o().createElement(Y, null, V.t("error.help_us")), o().createElement(K, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: w => this.handleTextareaChange(w),
						disabled: this.state.submitted,
						placeholder: V.t("error.give_feedback")
					}), o().createElement(q, null, !this.state.submitted && o().createElement(g.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, V.t("common.submit")), this.state.submitted && o().createElement(W, null, V.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const O = this.props.error;
					console.error(`SomethingWrong: ${O}`), _.YA("user_feedback_form_displayed", "yes"), _.YA("normalizedPath", (0, h.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: O
					} = this.props;
					return O === "fullscreen" ? o().createElement("div", null, o().createElement(s.h4, null, o().createElement(t.Link, {
						to: "/"
					}, o().createElement(u.TR, null))), this.renderContent(O), o().createElement(a.Z, null)) : this.renderContent(O)
				}
			}
			j.propTypes = {
				type: d().oneOf(["fullscreen", "page"]),
				error: d().oneOfType([d().string, d().object]),
				eventId: d().string
			}, y.Z = j
		},
		"../react/app/redux/index.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				TZ: function() {
					return l
				},
				UM: function() {
					return m
				},
				ZS: function() {
					return d
				},
				p4: function() {
					return i
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e);
			const l = () => (0, e.useStore)(),
				d = () => l().getState(),
				m = () => (0, e.useDispatch)(),
				i = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(G, y, n) {
			"use strict";
			n.d(y, {
				P1: function() {
					return _
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
				l = n("../react/pages/email/types.ts"),
				d = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				m = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				i = n.n(m);
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
				_ = (...r) => (0, d.P1)(g, p, ...r),
				t = (0, d.QB)(g)
		},
		"../react/app/redux/utils.ts": function(G, y, n) {
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
			const o = d => (m, i, g) => (0, e.SC)(m, i, g, {
					hideErrorAlert: !0
				}).catch(d),
				l = d => m => {
					if (m.status === d) return m;
					throw m
				}
		},
		"../react/common/actionTypes.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				Cm: function() {
					return i
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return g
				},
				Li: function() {
					return _
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
					return d
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
				l = "MODAL_OPEN",
				d = "MODAL_CLOSE",
				m = "TOGGLE_ON",
				i = "TOGGLE_OFF",
				g = "SET_ACTIVE",
				p = "CLEAR_ACTIVE",
				_ = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(s) {
				return s.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", s.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", s.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", s.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", s.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", s.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", s.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", s.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", s.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", s
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				AX: function() {
					return s
				},
				YT: function() {
					return _
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

			function l(u) {
				for (var a = 1; a < arguments.length; a++) {
					var h = arguments[a] != null ? Object(arguments[a]) : {},
						f = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(h).filter(function(P) {
						return Object.getOwnPropertyDescriptor(h, P).enumerable
					})), f.forEach(function(P) {
						d(u, P, h[P])
					})
				}
				return u
			}

			function d(u, a, h) {
				return a = m(a), a in u ? Object.defineProperty(u, a, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[a] = h, u
			}

			function m(u) {
				var a = i(u, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function i(u, a) {
				if (typeof u != "object" || u === null) return u;
				var h = u[Symbol.toPrimitive];
				if (h !== void 0) {
					var f = h.call(u, a || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(u)
			}
			const g = u => {
					const a = u.payload.map(h => l({}, h, {
						membershipId: h.id,
						id: h.account.id
					}));
					return l({}, u, {
						payload: a
					})
				},
				p = u => {
					const a = g(u);
					return Array.isArray(a.payload) ? l({}, u, {
						payload: a.payload[0]
					}) : l({}, u, {
						payload: null
					})
				},
				_ = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", g),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...u) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: u
				}),
				s = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", p)
		},
		"../react/common/actions/modalActions.ts": function(G, y, n) {
			"use strict";
			n.r(y), n.d(y, {
				closeModal: function() {
					return d
				},
				openModal: function() {
					return l
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function l(m, i, g = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: m,
						props: i
					},
					options: g
				}
			}

			function d(m) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: m
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				IH: function() {
					return m
				},
				Vp: function() {
					return i
				},
				ZK: function() {
					return p
				},
				um: function() {
					return g
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

			function l(t) {
				return {
					type: e.Cz,
					notificationId: t
				}
			}
			let d = 0;

			function m(t, r, s = {}) {
				return s = s || {},
					function(u) {
						let a = d++,
							h = {
								id: a,
								type: t,
								message: r,
								delay: s.delay,
								persist: s.persist === void 0 ? !1 : s.persist,
								closable: s.closable === void 0 ? !0 : s.closable,
								onClose() {
									u(l(a)), s.onClose && s.onClose.apply(null, arguments)
								}
							};
						u(o(h))
					}
			}

			function i(t, r) {
				return m("success", t, r)
			}

			function g(t, r) {
				return m("info", t, r)
			}

			function p(t, r) {
				return m("warning", t, r)
			}

			function _(t, r) {
				return m("error", t, r)
			}
		},
		"../react/common/actions/userActions.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				BT: function() {
					return g
				},
				Ut: function() {
					return P
				},
				V_: function() {
					return F
				},
				Y9: function() {
					return h
				},
				Z0: function() {
					return U
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

			function l(L) {
				for (var I = 1; I < arguments.length; I++) {
					var q = arguments[I] != null ? Object(arguments[I]) : {},
						Q = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && Q.push.apply(Q, Object.getOwnPropertySymbols(q).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(q, Y).enumerable
					})), Q.forEach(function(Y) {
						d(L, Y, q[Y])
					})
				}
				return L
			}

			function d(L, I, q) {
				return I = m(I), I in L ? Object.defineProperty(L, I, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[I] = q, L
			}

			function m(L) {
				var I = i(L, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function i(L, I) {
				if (typeof L != "object" || L === null) return L;
				var q = L[Symbol.toPrimitive];
				if (q !== void 0) {
					var Q = q.call(L, I || "default");
					if (typeof Q != "object") return Q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(L)
			}
			const g = (0, e.C)("user").get`/user`,
				p = (0, e.C)("user").patch`/user`,
				_ = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				s = (0, e.C)("user").put`/user/two_factor_authentication`,
				u = (0, e.C)("user").delete`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/email`;

			function h(...L) {
				return a(...L)
			}
			const f = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				P = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(L => l({}, L, {
					body: l({}, L.body, {
						result: {}
					})
				}))),
				F = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				M = (0, e.C)("userDetails").get`/user/details`,
				U = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/Apple/utils.tsx": function(G, y, n) {
			"use strict";
			n.d(y, {
				PP: function() {
					return r
				},
				RJ: function() {
					return g
				},
				tz: function() {
					return s
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				l = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				d = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				m = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const i = () => p.test(window.location.pathname) || l.E.has(d.Qq),
				g = () => l.E.get(d.Qq),
				p = /^\/login\/apple(\/)?/,
				t = [p, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let u = !1;
					t.forEach(h => {
						if (h.test(window.location.pathname)) {
							u = !0;
							return
						}
					});
					const a = i() && u;
					return a && (0, m.C8)(m.LF.OFF), a
				},
				s = u => {
					u && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let a = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					u && (a = a + `&jwt=${u}`), window.location.href = a
				}
		},
		"../react/common/components/EmptyPage.jsx": function(G, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/prop-types/index.js"),
				d = n.n(l),
				m = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const i = ({
				children: g
			}) => o().createElement(m.xu, {
				height: 411
			}, g);
			i.propTypes = {
				children: d().node
			}, y.Z = i
		},
		"../react/common/components/ModalManager.tsx": function(G, y, n) {
			"use strict";
			n.d(y, {
				ZP: function() {
					return s
				},
				dd: function() {
					return t
				},
				vR: function() {
					return _
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("webpack/sharing/consume/default/react-redux/react-redux");
			const d = u => u.application.modals;
			var m = n("../react/common/actions/modalActions.ts");

			function i() {
				return i = Object.assign ? Object.assign.bind() : function(u) {
					for (var a = 1; a < arguments.length; a++) {
						var h = arguments[a];
						for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (u[f] = h[f])
					}
					return u
				}, i.apply(this, arguments)
			}
			const g = o().createContext(null);
			class p extends o().Component {
				render() {
					const {
						modals: a,
						closeModal: h
					} = this.props;
					return o().createElement(o().Fragment, null, a.map(({
						ModalComponent: f,
						props: P = {},
						id: F
					}) => {
						const M = () => {
							typeof P.onClose == "function" && P.onClose(), h(f)
						};
						return o().createElement(g.Provider, {
							key: F,
							value: {
								closeModal: M
							}
						}, o().createElement(f, i({}, P, {
							isOpen: !0,
							closeModal: M
						})))
					}))
				}
			}

			function _() {
				const u = o().useContext(g);
				if (!u) throw new Error("useModalContext must be used within a ModalContext");
				return u
			}

			function t() {
				const u = (0, l.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...a) {
						return u(m.openModal(...a))
					}, [u]),
					closeModal: (0, e.useCallback)(function(...a) {
						return u(m.closeModal(...a))
					}, [u])
				}
			}
			var s = (0, l.connect)(u => ({
				modals: d(u)
			}), m)(p)
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(G, y, n) {
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
					return i
				},
				ZI: function() {
					return m
				},
				if: function() {
					return o
				},
				q6: function() {
					return l
				},
				w_: function() {
					return d
				},
				zl: function() {
					return g
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				l = "date-from",
				d = "date-to",
				m = "from",
				i = "to",
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
			let _ = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				t = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/constants/billing/index.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				Gq: function() {
					return d
				},
				g$: function() {
					return l
				},
				WX: function() {
					return e
				},
				E0: function() {
					return _
				},
				Hw: function() {
					return i
				},
				Ed: function() {
					return m
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return u
				},
				hQ: function() {
					return g
				},
				SP: function() {
					return p
				}
			});
			let e = function(a) {
				return a.page_rules = "page_rules", a.automatic_platform_optimization = "automatic_platform_optimization", a
			}({});
			const o = "page_rules",
				l = "automatic_platform_optimization",
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
				m = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				i = {
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
				s = n("../react/common/constants/billing/workers.ts");
			const u = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				FP: function() {
					return e
				},
				Nl: function() {
					return m
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
				d = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				m = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				Dk: function() {
					return u
				},
				Dy: function() {
					return a
				},
				E_: function() {
					return i
				},
				Lv: function() {
					return h
				},
				S4: function() {
					return m
				},
				UM: function() {
					return t
				},
				Xf: function() {
					return _
				},
				Y1: function() {
					return g
				},
				p6: function() {
					return p
				},
				q0: function() {
					return d
				},
				rg: function() {
					return f
				},
				sJ: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				l = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const d = "healthy",
				m = "degraded",
				i = "critical",
				g = "unknown",
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
				s = "marketing-pt",
				u = () => {
					const P = l.Z.get(s);
					if (!!P) return r[P]
				},
				a = ["gov"],
				h = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				f = "banner-notification-interactions"
		},
		"../react/common/constants/index.ts": function(G, y, n) {
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
		"../react/common/hooks/suspenseHelpers.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				bt: function() {
					return g
				},
				nW: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const d = "suspenseComplete";

			function m() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(d))
				}, [])
			}

			function i(p) {
				(0, l.OR)(d, () => {
					window.setTimeout(p, 0)
				}, {
					target: window
				})
			}

			function g(...p) {
				const [_, t] = p;
				o().useLayoutEffect(_, t), i(_)
			}
		},
		"../react/common/hooks/useCachedState.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				j: function() {
					return d
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function d(m, {
				key: i,
				cache: g = l.E
			} = {}) {
				const p = i !== void 0 && g.get(i),
					[_, t] = (0, e.useState)(p || m);
				return [_, s => {
					t(u => (s instanceof Function && (s = s(u)), i !== void 0 && g.set(i, s), s))
				}]
			}
		},
		"../react/common/hooks/usePrevious.ts": function(G, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function l(d) {
				const m = (0, e.useRef)(d);
				return (0, e.useEffect)(() => {
					m.current = d
				}, [d]), m.current
			}
			y.Z = l
		},
		"../react/common/middleware/sparrow/errors.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				Uh: function() {
					return m
				},
				ez: function() {
					return d
				},
				oV: function() {
					return i
				}
			});

			function e(g, p, _) {
				return p = o(p), p in g ? Object.defineProperty(g, p, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[p] = _, g
			}

			function o(g) {
				var p = l(g, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function l(g, p) {
				if (typeof g != "object" || g === null) return g;
				var _ = g[Symbol.toPrimitive];
				if (_ !== void 0) {
					var t = _.call(g, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(g)
			}
			class d extends Error {
				constructor(p, _) {
					super(_);
					e(this, "eventName", void 0), this.eventName = p, this.name = "SparrowValidationError"
				}
			}
			class m extends d {
				constructor(p) {
					super(p, `Event not allowed: "${p}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class i extends d {
				constructor(p, _) {
					super(p, `Found invalid properties on event: "${p}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = _
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				AC: function() {
					return Ke
				},
				Au: function() {
					return te
				},
				B: function() {
					return be
				},
				B3: function() {
					return He
				},
				BG: function() {
					return I
				},
				Bp: function() {
					return at
				},
				D0: function() {
					return F
				},
				DT: function() {
					return x
				},
				EL: function() {
					return B
				},
				GE: function() {
					return fe
				},
				Ko: function() {
					return ie
				},
				Kx: function() {
					return Y
				},
				Le: function() {
					return W
				},
				O4: function() {
					return Fe
				},
				Ou: function() {
					return H
				},
				Py: function() {
					return Ve
				},
				QI: function() {
					return Ie
				},
				RO: function() {
					return R
				},
				T3: function() {
					return Xe
				},
				T8: function() {
					return L
				},
				UX: function() {
					return T
				},
				VP: function() {
					return Pe
				},
				Xo: function() {
					return xe
				},
				Xu: function() {
					return V
				},
				Yi: function() {
					return it
				},
				Yj: function() {
					return ne
				},
				Zu: function() {
					return $
				},
				bC: function() {
					return de
				},
				f8: function() {
					return N
				},
				hN: function() {
					return Q
				},
				hX: function() {
					return le
				},
				iq: function() {
					return Ue
				},
				nE: function() {
					return q
				},
				oD: function() {
					return k
				},
				oI: function() {
					return j
				},
				oJ: function() {
					return Ze
				},
				uF: function() {
					return w
				},
				ut: function() {
					return je
				},
				vU: function() {
					return we
				},
				wQ: function() {
					return Ce
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				o = n("../../../../node_modules/lodash/get.js"),
				l = n.n(o),
				d = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				m = n.n(d),
				i = n("../../../../node_modules/reselect/lib/index.js"),
				g = n("../../../../node_modules/moment/moment.js"),
				p = n.n(g),
				_ = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				r = n("../react/common/selectors/userSelectors.ts"),
				s = n("../react/common/selectors/entitlementsSelectors.ts"),
				u = n("../react/app/components/DeepLink/selectors.ts");

			function a(S) {
				for (var J = 1; J < arguments.length; J++) {
					var ce = arguments[J] != null ? Object(arguments[J]) : {},
						pe = Object.keys(ce);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(ce).filter(function(ve) {
						return Object.getOwnPropertyDescriptor(ce, ve).enumerable
					})), pe.forEach(function(ve) {
						h(S, ve, ce[ve])
					})
				}
				return S
			}

			function h(S, J, ce) {
				return J = f(J), J in S ? Object.defineProperty(S, J, {
					value: ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[J] = ce, S
			}

			function f(S) {
				var J = P(S, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function P(S, J) {
				if (typeof S != "object" || S === null) return S;
				var ce = S[Symbol.toPrimitive];
				if (ce !== void 0) {
					var pe = ce.call(S, J || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)(S)
			}
			const F = S => {
					const J = w(S);
					return J == null ? void 0 : J.account
				},
				M = S => {
					const J = (0, r.PR)(S);
					if (J) {
						const ce = J.id;
						return S.accountAccess[ce] || {}
					}
					return {}
				},
				U = S => S.accountsDetailed,
				L = (0, t.P1)("accountsDetailed", U),
				I = S => S.memberships,
				q = (0, i.P1)((0, t.P1)("memberships", I), u.U, (S, J) => !!J && !!S ? S.filter(ce => J.includes(ce.id)) : S),
				Q = S => S.accountFlags && S.accountFlags.data,
				Y = S => S.accountFlags,
				W = (S, J, ce) => {
					const pe = Q(S);
					return !pe || !pe[J] ? null : pe[J][ce]
				},
				K = S => S.accountFlags.isRequesting,
				j = (S, ...J) => l()(S, ["accountFlagsChanges", "data", ...J]),
				N = S => S.accountFlagsChanges.isRequesting,
				O = (0, i.P1)(Q, Y, (S, J) => ({
					data: S,
					meta: J
				})),
				b = (S, J, ce) => !!(isEnterpriseSSEnabledSelector(S) && W(S, J, ce)),
				V = S => S.membership,
				w = (0, t.P1)("membership", V),
				re = (0, i.P1)(w, V, (S, J) => ({
					data: S,
					meta: J
				})),
				H = S => {
					const {
						roles: J = []
					} = w(S) || {};
					return Boolean(J.find(ce => ce === "Super Administrator - All Privileges" || ce === "Billing"))
				},
				k = S => {
					const J = M(S),
						ce = Ae.getMemberships(S) ? m().asMutable(Ae.getMemberships(S)) : [];
					if (!!ce) return m().from(ce.map(pe => a({}, pe, {
						lastSeen: J[pe.account.id] ? J[pe.account.id].lastSeen : null
					})).sort((pe, ve) => pe.lastSeen && ve.lastSeen ? ve.lastSeen - pe.lastSeen : 0))
				},
				T = S => S.filteredMemberships,
				B = (0, t.P1)("filteredMemberships", T),
				$ = (0, i.P1)(w, S => S == null ? void 0 : S.permissions),
				ne = (0, i.P1)($, S => (0, e.Z)(J => {
					var ce;
					return (ce = S == null ? void 0 : S[J]) !== null && ce !== void 0 ? ce : {
						read: !1,
						edit: !1
					}
				})),
				ie = (0, i.P1)(w, S => S == null ? void 0 : S.policies),
				x = (S, J, ce) => {
					let pe = Ae.getMembership(S);
					if (!pe) {
						const ve = Ae.getMemberships(S);
						if (!ve || !J) return !1;
						pe = ve.find(De => De.account.id === J)
					}
					if (!pe || !ce) return !1;
					try {
						return ce(pe.permissions)
					} catch {
						return !1
					}
				},
				oe = S => {
					var J, ce;
					return (J = (ce = F(S)) === null || ce === void 0 ? void 0 : ce.meta.has_pro_zones) !== null && J !== void 0 ? J : !1
				},
				Z = S => {
					var J, ce;
					return (J = (ce = F(S)) === null || ce === void 0 ? void 0 : ce.meta.has_business_zones) !== null && J !== void 0 ? J : !1
				},
				de = S => Z(S) || oe(S),
				ge = (S, J) => {
					const ce = me(S, J);
					return !!ce && !!ce.enabled
				},
				me = (S, J) => {
					const ce = Ae.getMembership(S),
						pe = ce && ce.account;
					return pe && pe.legacy_flags && pe.legacy_flags[J]
				},
				Ce = S => ge(S, "custom_pages"),
				Me = S => !!S && S["webhooks.webhooks.enabled"],
				Be = S => W(S, "bots", "enabled"),
				Re = S => W(S, "billing", "annual_subscriptions_enable"),
				R = S => S ? Boolean(W(S, "ConstellationAI", "v2_ui")) : !1,
				le = S => S ? Boolean(W(S, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				be = S => S ? Boolean(W(S, "AIgateway", "enabled")) : !1,
				We = S => me(S, "enterprise_zone_quota"),
				ze = S => {
					const J = We(S);
					return !J || !J.available ? -1 : J.available
				},
				Ue = S => S.accountMembers,
				He = (0, t.P1)("accountMembers", Ue),
				Fe = S => S.accountMember && S.accountMember.isRequesting,
				et = S => S.accountRoles,
				Ke = (0, t.P1)("accountRoles", et),
				Ve = (S, J) => {
					const ce = Ae.getMemberships(S),
						pe = ce && ce.find(Je => Je.account.id === J);
					if (pe) return pe.account.name.replace(" Account", " account");
					const ve = Ae.getMembership(S),
						De = ve && ve.account;
					return De && De.id === J ? De.name : null
				},
				je = (S, J) => {
					const ce = Ae.getMemberships(S),
						pe = ce && ce.find(Je => Je.account.id === J);
					if (pe) return pe.account.settings.access_approval_expiry;
					const ve = Ae.getMembership(S),
						De = ve && ve.account;
					return De && De.id === J ? De.settings.access_approval_expiry : null
				},
				xe = (S, J) => {
					const ce = je(S, J);
					return ce ? p().utc(ce).isAfter() : !1
				},
				Xe = (S, J, ce) => {
					const pe = je(S, J);
					let ve = pe ? p().utc(pe) : null;
					return !ve || !ve.isAfter() ? "" : ve && ve.year() === 3e3 ? ce("account.access_approval.card_expiration_forever") : ce("account.access_approval.card_expiration_text", {
						expiryTimestamp: ve.local().format(_.U.DateTime)
					})
				},
				Ze = S => S && S.member && S.member.edit,
				te = (S, J) => {
					const ce = Ae.getMembership(S),
						pe = ce && ce.account;
					return pe ? pe.id !== J : !1
				},
				se = S => S.dpa,
				C = (0, t.P1)("dpa", se),
				D = S => S.webhook,
				ee = S => S.webhooks,
				Te = (0, t.P1)("webhook", ee),
				Pe = S => S.accountLegoContract,
				Oe = (0, t.P1)("accountLegoContract", Pe),
				Ie = S => {
					const J = Oe(S);
					return (J == null ? void 0 : J.lego_state) ? J.lego_state : ""
				},
				Se = S => Ie(S) === "signed",
				fe = S => Pe(S).isRequesting,
				we = S => {
					const J = Oe(S);
					return J && J.subscription_type ? J.subscription_type : ""
				},
				$e = S => we(S) !== "",
				Ae = {
					getMembership: w,
					getMemberships: q,
					getFilteredMemberships: B,
					getAccountMembers: He,
					getAccountRoles: Ke
				},
				at = S => S.accountSingle,
				it = (0, t.P1)("accountSingle", at)
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				$f: function() {
					return a
				},
				AD: function() {
					return m
				},
				BF: function() {
					return u
				},
				Bs: function() {
					return U
				},
				Ci: function() {
					return x
				},
				E6: function() {
					return s
				},
				Hq: function() {
					return Be
				},
				Ms: function() {
					return q
				},
				Q2: function() {
					return i
				},
				Td: function() {
					return F
				},
				Z: function() {
					return de
				},
				a: function() {
					return M
				},
				a5: function() {
					return me
				},
				du: function() {
					return p
				},
				ec: function() {
					return b
				},
				f: function() {
					return Me
				},
				hL: function() {
					return ge
				},
				ji: function() {
					return oe
				},
				jo: function() {
					return Q
				},
				k4: function() {
					return Ce
				},
				lI: function() {
					return d
				},
				p1: function() {
					return f
				},
				pK: function() {
					return Re
				},
				pf: function() {
					return t
				},
				qR: function() {
					return P
				},
				rV: function() {
					return g
				},
				u1: function() {
					return _
				},
				w4: function() {
					return r
				},
				yD: function() {
					return Z
				}
			});
			var e = n("../react/utils/url.ts");

			function o(R, le) {
				return R && R[le]
			}
			const l = R => !d(R).isRequesting;

			function d(R) {
				return R.entitlements.zone
			}

			function m(R) {
				return d(R).data
			}
			const i = R => {
				var le, be;
				return ((le = d(R).paginationData) === null || le === void 0 || (be = le.options) === null || be === void 0 ? void 0 : be.editedDate) || {}
			};

			function g(R, le) {
				const be = m(R);
				return be ? o(be, le) : void 0
			}
			const p = (R, le) => g(R, le) === !0;

			function _(R) {
				return R.entitlements.account
			}

			function t(R) {
				return _(R).data
			}
			const r = R => {
				var le, be;
				return ((le = _(R).paginationData) === null || le === void 0 || (be = le.options) === null || be === void 0 ? void 0 : be.editedDate) || {}
			};

			function s(R) {
				return !_(R).isRequesting
			}

			function u(R, le) {
				const be = t(R);
				return be ? o(be, le) : void 0
			}

			function a(R, le) {
				return u(R, le) === !0
			}

			function h(R, le) {
				return le.every(be => a(R, be))
			}

			function f(R) {
				return a(R, "contract.customer_enabled")
			}

			function P(R) {
				return a(R, "contract.self_service_allowed")
			}

			function F(R) {
				return a(R, "billing.partners_managed")
			}
			const M = R => f(R) && P(R),
				U = R => a(R, "enterprise.ecp_allowed");

			function L(R) {
				return I(R) || a(R, "argo.allow_smart_routing") || a(R, "argo.allow_tiered_caching") || a(R, "rate_limiting.enabled") || a(R, "ctm.enabled") || a(R, "workers.enabled") || a(R, "workers.kv_store.enabled") || a(R, "stream.enabled")
			}
			const I = R => p(R, "argo.allow_smart_routing") || p(R, "argo.allow_tiered_caching"),
				q = R => a(R, "zone.cname_setup_allowed") || a(R, "zone.partial_setup_allowed") || p(R, "zone.partial_setup_allowed"),
				Q = R => a(R, "argo.allow_smart_routing") || p(R, "argo.allow_smart_routing"),
				Y = R => a(R, "argo.allow_tiered_caching") || p(R, "argo.allow_tiered_caching"),
				W = R => Q(R) || Y(R),
				K = R => a(R, "ctm.enabled"),
				j = R => {
					const le = u(R, "ctm.load_balancers");
					return typeof le == "number" ? le : 0
				},
				N = R => {
					const le = u(R, "ctm.pools");
					return typeof le == "number" ? le : 0
				},
				O = R => {
					const le = u(R, "ctm.origins");
					return typeof le == "number" ? le : 0
				},
				b = R => a(R, "workers.enabled"),
				V = R => a(R, "stream.enabled"),
				w = R => {
					const le = u(R, "access.users_allowed");
					return typeof le == "number" ? le : 0
				},
				re = R => w(R) > 0,
				H = R => {
					const le = g(R, "dedicated_certificates");
					return typeof le == "number" ? le : 0
				},
				k = R => H(R) > 0,
				T = R => {
					const le = g(R, "rate_limiting.max_rules");
					return typeof le == "number" ? le : 0
				},
				B = R => a(R, "rate_limiting.enabled"),
				$ = R => {
					const le = g(R, "page_rules");
					return typeof le == "number" ? le : 0
				},
				ne = R => $(R) > 0,
				ie = R => {
					const le = u(R, "dns_firewall.max_clusters_allowed");
					return typeof le == "number" ? le : 0
				},
				x = R => ie(R) > 0,
				oe = R => p(R, "zone.advanced_certificate_manager") || a(R, "zone.advanced_certificate_manager"),
				Z = R => g(R, "authoritative_dns.proxy_record_allowed") === !1 || u(R, "authoritative_dns.proxy_record_allowed") === !1,
				de = R => a(R, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				ge = R => g(R, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				me = R => {
					const le = g(R, "authoritative_dns.min_record_ttl_allowed");
					return typeof le == "number" && le > 1 ? le : 60
				},
				Ce = R => a(R, "foundation_dns.advanced_nameservers_allowed") || p(R, "foundation_dns.advanced_nameservers_allowed"),
				Me = (R, le) => ((0, e.el)(window.location.pathname) ? g : u)(R, le),
				Be = R => a(R, "authoritative_dns.multi_provider_allowed") || p(R, "authoritative_dns.multi_provider_allowed"),
				Re = R => a(R, "secondary_dns.secondary_overrides") || p(R, "secondary_dns.secondary_overrides")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				r: function() {
					return d
				},
				v: function() {
					return m
				}
			});
			var e = n("../react/utils/i18n.ts"),
				o = n("../../../common/intl/intl-types/src/index.ts"),
				l = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const d = i => {
				const g = i.userCommPreferences.data;
				if (g == null ? void 0 : g["language-locale"]) return l.Z.set(e.ly, g["language-locale"]), g["language-locale"];
				{
					l.Z.has(e.ly) || l.Z.set(e.ly, e.ZW);
					const p = l.Z.get(e.ly);
					return m(p) ? p : e.ZW
				}
			};

			function m(i) {
				const g = Object.keys(o.Q).find(p => o.Q[p] === i);
				return !!i && typeof i == "string" && g != null && (0, e.S8)(!1, g)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				$8: function() {
					return m
				},
				BG: function() {
					return _
				},
				BY: function() {
					return M
				},
				GP: function() {
					return a
				},
				GU: function() {
					return U
				},
				PR: function() {
					return l
				},
				h$: function() {
					return P
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
					return h
				},
				vW: function() {
					return i
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const o = L => L.user,
				l = (0, e.P1)("user", o),
				d = L => {
					var I;
					return (I = l(L)) === null || I === void 0 ? void 0 : I.email.endsWith("@cloudflare.com")
				},
				m = L => {
					var I;
					return !!((I = l(L)) === null || I === void 0 ? void 0 : I.id)
				},
				i = L => {
					const I = l(L);
					if (!!I) return I.first_name && I.last_name ? `${I.first_name} ${I.last_name}` : I.email
				},
				g = L => {
					const I = l(L);
					return I && I.has_enterprise_zones
				},
				p = L => L.userCommPreferences,
				_ = (0, e.P1)("userCommPreferences", p),
				t = L => {
					const I = l(L);
					return I && I.email_verified
				},
				r = L => {
					const I = _(L);
					return I && I.preferences.marketing_communication
				},
				s = L => L.userDetails,
				u = (0, e.P1)("userDetails", s),
				a = L => {
					const I = u(L);
					return I && I["2FA-RECOVERY"] === "scheduled"
				},
				h = L => {
					const I = u(L);
					return I && I["2FA-RECOVERY"] === "interrupted"
				},
				f = L => {
					const I = u(L);
					return I == null ? void 0 : I["NEW-USER-EMAIL"]
				},
				P = L => L.gates.assignments,
				F = (L, I) => L && L[I];

			function M(L, I) {
				const q = P(L);
				return q ? F(q, I) : void 0
			}
			const U = (L, I) => M(L, I) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				$4: function() {
					return q
				},
				$t: function() {
					return xe
				},
				A4: function() {
					return f
				},
				Cu: function() {
					return P
				},
				DQ: function() {
					return Ce
				},
				Ej: function() {
					return Y
				},
				FH: function() {
					return M
				},
				ID: function() {
					return B
				},
				Ko: function() {
					return We
				},
				Le: function() {
					return Re
				},
				Ly: function() {
					return ie
				},
				M3: function() {
					return et
				},
				N8: function() {
					return Fe
				},
				NY: function() {
					return de
				},
				Ns: function() {
					return ne
				},
				Ox: function() {
					return te
				},
				P4: function() {
					return W
				},
				RO: function() {
					return k
				},
				SX: function() {
					return ge
				},
				Tr: function() {
					return be
				},
				U: function() {
					return F
				},
				Ug: function() {
					return L
				},
				V6: function() {
					return Ke
				},
				WR: function() {
					return se
				},
				Xg: function() {
					return h
				},
				ZB: function() {
					return Be
				},
				cU: function() {
					return ze
				},
				cg: function() {
					return me
				},
				d2: function() {
					return V
				},
				jN: function() {
					return j
				},
				jg: function() {
					return oe
				},
				kC: function() {
					return Q
				},
				kf: function() {
					return Ve
				},
				ko: function() {
					return H
				},
				mK: function() {
					return Xe
				},
				nA: function() {
					return a
				},
				oY: function() {
					return K
				},
				qM: function() {
					return R
				},
				rq: function() {
					return Z
				},
				tS: function() {
					return I
				},
				tU: function() {
					return O
				},
				vB: function() {
					return Ze
				},
				vM: function() {
					return N
				},
				wH: function() {
					return U
				},
				wn: function() {
					return Me
				},
				xU: function() {
					return b
				},
				xw: function() {
					return le
				},
				z5: function() {
					return T
				},
				zO: function() {
					return Ue
				},
				zW: function() {
					return je
				},
				zh: function() {
					return w
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				o = n("../react/app/redux/normalizer.js"),
				l = n("../../../../node_modules/lodash/get.js"),
				d = n.n(l),
				m = n("../../../../node_modules/moment/moment.js"),
				i = n.n(m),
				g = n("../react/common/constants/billing/index.ts");

			function p(C) {
				for (var D = 1; D < arguments.length; D++) {
					var ee = arguments[D] != null ? Object(arguments[D]) : {},
						Te = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && Te.push.apply(Te, Object.getOwnPropertySymbols(ee).filter(function(Pe) {
						return Object.getOwnPropertyDescriptor(ee, Pe).enumerable
					})), Te.forEach(function(Pe) {
						_(C, Pe, ee[Pe])
					})
				}
				return C
			}

			function _(C, D, ee) {
				return D = t(D), D in C ? Object.defineProperty(C, D, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[D] = ee, C
			}

			function t(C) {
				var D = r(C, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function r(C, D) {
				if (typeof C != "object" || C === null) return C;
				var ee = C[Symbol.toPrimitive];
				if (ee !== void 0) {
					var Te = ee.call(C, D || "default");
					if (typeof Te != "object") return Te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(C)
			}
			const s = (0, o.P1)("zone", C => C.zone),
				u = C => {
					var D;
					return (D = C.zoneVersioning) === null || D === void 0 ? void 0 : D.zoneVersionSelector
				},
				a = (0, e.P1)(s, u, (C, D) => {
					var ee, Te, Pe;
					let Oe;
					if (Array.isArray(C) && C.length === 1 ? Oe = C[0] : C && !Array.isArray(C) && (Oe = C), !Oe) return;
					const Ie = !!(D == null ? void 0 : D.enabled);
					return p({}, Oe, Oe.name && {
						name: Ie ? D.rootZoneName : Oe.name
					}, {
						versioning: {
							enabled: Ie,
							isRoot: !((ee = Oe.name) === null || ee === void 0 ? void 0 : ee.endsWith(".config.cfdata.org")),
							version: Ie ? D.selectedVersion : 0,
							rootZoneId: Ie ? D.rootZoneId : (Te = (Pe = Oe) === null || Pe === void 0 ? void 0 : Pe.id) !== null && Te !== void 0 ? Te : ""
						}
					})
				}),
				h = C => C.zone,
				f = (0, e.P1)(a, h, (C, D) => ({
					data: C,
					meta: D
				})),
				P = C => {
					var D, ee;
					return (D = (ee = a(C)) === null || ee === void 0 ? void 0 : ee.id) !== null && D !== void 0 ? D : ""
				},
				F = C => C.zones,
				M = C => C.zonesRoot,
				U = C => C.zonesAccount,
				L = (0, o.P1)("zones", F),
				I = (0, o.P1)("zonesRoot", M),
				q = (0, o.P1)("zonesAccount", U);

			function Q(C) {
				const D = a(C);
				return D ? D.created_on : null
			}

			function Y(C, D, ee) {
				const Te = Q(C);
				if (!Te) return;
				const Pe = i().duration(D, ee),
					Oe = new Date(Te),
					Ie = new Date(new Date().getTime() - Pe.asMilliseconds());
				return Oe.getTime() > Ie.getTime()
			}

			function W(C) {
				const D = a(C);
				return D ? D.status : null
			}

			function K(C) {
				const D = a(C);
				return D ? D.type : null
			}

			function j(C) {
				return C.plan_pending ? C.plan_pending : C.plan
			}

			function N(C) {
				const D = a(C);
				if (!D) return;
				const ee = j(D);
				return ee && ee.legacy_id
			}

			function O(C, D) {
				const ee = j(C);
				return !!ee && g.Gs.indexOf(ee.legacy_id) >= g.Gs.indexOf(D)
			}

			function b(C) {
				return !!C && C.status === "initializing"
			}

			function V(C) {
				return !!C && C.status === "pending"
			}

			function w(C) {
				return !!C && C.status === "active"
			}

			function re(C, D) {
				if (!C) return !1;
				const ee = j(C);
				return !!ee && ee.legacy_id === D
			}

			function H(C) {
				return re(C, "enterprise")
			}
			const k = C => H(a(C));

			function T(C) {
				return re(C, "business")
			}
			const B = C => T(a(C));

			function $(C) {
				return re(C, "pro")
			}

			function ne(C) {
				return re(C, "free")
			}

			function ie(C) {
				return !H(C)
			}

			function x(C) {
				return C && C.owner
			}

			function oe(C, D) {
				const ee = x(D);
				return !!ee && ee.type === "user" && ee.id === C.id
			}

			function Z(C) {
				const D = a(C);
				return !!D && D.type === "partial"
			}

			function de(C) {
				const D = a(C);
				return !!D && D.type === "secondary"
			}

			function ge(C) {
				const D = a(C);
				return D && Z(C) && D.host
			}
			const me = C => {
					var D;
					const ee = a(C);
					return !!(ee == null ? void 0 : ee.host) && !!((D = ee.plan) === null || D === void 0 ? void 0 : D.externally_managed)
				},
				Ce = C => {
					const D = L(C);
					return D && D.some(H)
				},
				Me = (C, D) => {
					const ee = a(C);
					return ee && ee.betas ? ee.betas.includes(D) : !1
				},
				Be = (C, ...D) => d()(C, ["zoneFlags", "data", ...D]),
				Re = (C, ...D) => d()(C, ["accountFlags", "data", ...D]),
				R = C => C.accountFlags.isRequesting,
				le = C => C.zoneFlags.isRequesting,
				be = (C, ...D) => d()(C, ["zoneFlagsChanges", "data", ...D]),
				We = C => C.zoneFlagsChanges.isRequesting,
				ze = C => C.zoneFlags && C.zoneFlags.data,
				Ue = C => C.zoneFlags,
				He = (0, e.P1)(ze, Ue, (C, D) => ({
					data: C,
					meta: D
				})),
				Fe = (0, o.P1)("abuseUrls", C => C.overview.abuseUrls),
				et = C => {
					const D = a(C);
					return D ? `/${D.account.id}/${D.name}` : null
				},
				Ke = C => C.zoneMarketingCampaigns,
				Ve = C => C.overview.zoneBlocks.data,
				je = C => C.overview.zoneBlocks.isRequesting,
				xe = C => C.overview.zoneBlocks.hasData,
				Xe = C => {
					var D, ee;
					return (C == null || (D = C.overview.zoneBlocks) === null || D === void 0 || (ee = D.paginationData) === null || ee === void 0 ? void 0 : ee.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				Ze = C => C.overview.zoneBlocksReview.isRequesting,
				te = C => C.overview.zoneHold,
				se = (0, o.P1)("zoneHold", te)
		},
		"../react/common/utils/formatDate.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			y.Z = (o, l, d = !1) => (0, e.p6)(o, l, d)
		},
		"../react/common/utils/isGuards.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				Q$: function() {
					return l
				},
				t: function() {
					return i
				},
				v5: function() {
					return d
				},
				zE: function() {
					return m
				}
			});
			var e = n("../react/common/constants/index.ts"),
				o = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const l = g => g ? ["page", "per_page", "count", "total_count"].every(_ => _ in g && g[_]) : !1,
				d = (g = "") => e.Dy.includes(g.toLowerCase()),
				m = g => g !== null && typeof g == "object" && "name" in g && "size" in g && "type" in g && typeof g.slice == "function",
				i = g => (0, o.Z)(g)
		},
		"../react/common/validators/index.js": function(G, y, n) {
			"use strict";
			n.d(y, {
				K2: function() {
					return o
				},
				Lb: function() {
					return l
				},
				XI: function() {
					return d
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
				l = p => e.default.hostname.test(p),
				d = p => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(p),
				m = p => /^[!-~]+$/.test(p),
				i = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				g = p => i.test(p)
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				Jz: function() {
					return _
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
					return s
				},
				yc: function() {
					return t
				}
			});

			function e(a) {
				for (var h = 1; h < arguments.length; h++) {
					var f = arguments[h] != null ? Object(arguments[h]) : {},
						P = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(f).filter(function(F) {
						return Object.getOwnPropertyDescriptor(f, F).enumerable
					})), P.forEach(function(F) {
						o(a, F, f[F])
					})
				}
				return a
			}

			function o(a, h, f) {
				return h = l(h), h in a ? Object.defineProperty(a, h, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[h] = f, a
			}

			function l(a) {
				var h = d(a, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function d(a, h) {
				if (typeof a != "object" || a === null) return a;
				var f = a[Symbol.toPrimitive];
				if (f !== void 0) {
					var P = f.call(a, h || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(a)
			}
			let m = function(a) {
					return a.Sending = "sending", a.Success = "success", a.Failed = "failed", a.Latent = "latent", a
				}({}),
				i = function(a) {
					return a[a.Success = 200] = "Success", a[a.BadRequest = 400] = "BadRequest", a
				}({});
			const g = {
					status: m.Latent,
					statusCode: void 0
				},
				p = {
					status: m.Sending
				},
				_ = {
					status: m.Success,
					statusCode: i.Success
				},
				t = {
					status: m.Failed,
					statusCode: i.BadRequest
				},
				r = {
					token: null,
					zone: null,
					isTokenValid: !1,
					user: null
				},
				s = {
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
				u = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				Ux: function() {
					return r
				},
				cz: function() {
					return u
				},
				im: function() {
					return g
				},
				pG: function() {
					return s
				},
				t$: function() {
					return a
				}
			});
			var e = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(f) {
				for (var P = 1; P < arguments.length; P++) {
					var F = arguments[P] != null ? Object(arguments[P]) : {},
						M = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(F).filter(function(U) {
						return Object.getOwnPropertyDescriptor(F, U).enumerable
					})), M.forEach(function(U) {
						l(f, U, F[U])
					})
				}
				return f
			}

			function l(f, P, F) {
				return P = d(P), P in f ? Object.defineProperty(f, P, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[P] = F, f
			}

			function d(f) {
				var P = m(f, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function m(f, P) {
				if (typeof f != "object" || f === null) return f;
				var F = f[Symbol.toPrimitive];
				if (F !== void 0) {
					var M = F.call(f, P || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(f)
			}
			const i = f => f.test(window.location.hostname),
				g = () => i(e.j9),
				p = () => i(MARKETPLACE_LOCAL_URL_REGEXP),
				_ = (f, P) => {
					const F = random(0, 1) ? -1 : 1;
					return f.points === P.points || f.points >= APP_POINTS_THRESHOLD && P.points >= APP_POINTS_THRESHOLD ? F : f.points < 0 || P.points < 0 || f.points >= APP_POINTS_THRESHOLD || P.points >= APP_POINTS_THRESHOLD ? P.points - f.points : F
				},
				t = (f, P, F) => {
					const M = get(P, F),
						U = get(f, F);
					return M && !isEqual(M, U)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (f, P) => P.map(F => f.find(M => M.id === F)),
						addAppVersionInfo: (f, P) => o({}, P, {
							currentVersion: P.versions.find(F => F.tag === f.versionTag),
							latestVersion: P.versions.find(F => F.tag === P.infoVersion)
						}),
						addCurrentSiteInstall: (f, P) => o({}, P, {
							currentSiteInstall: f.find(F => F.appId === P.id)
						})
					}
				},
				s = (f, P, F) => o({}, f, P, F ? {
					value: F
				} : {}),
				u = f => f.map(P => P.status),
				a = f => f.apps ? f.apps : f,
				h = f => {
					let P = ["by-cloudflare"];
					return f.filter(F => !P.includes(F.id) && F.visible).sort((F, M) => F.points < M.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(G, y, n) {
			"use strict";
			n.r(y), n.d(y, {
				categorySlugTranslationKey: function() {
					return m
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return d
				},
				translations: function() {
					return l
				}
			});
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: l,
				namespace: d
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

			function m(i) {
				const g = i.replace(/-/g, "_");
				return Object.keys(o).includes(g) ? g : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				L: function() {
					return r
				}
			});
			var e = n("../../../../node_modules/lodash-es/defaults.js"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function l(s) {
				for (var u = 1; u < arguments.length; u++) {
					var a = arguments[u] != null ? Object(arguments[u]) : {},
						h = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(a).filter(function(f) {
						return Object.getOwnPropertyDescriptor(a, f).enumerable
					})), h.forEach(function(f) {
						i(s, f, a[f])
					})
				}
				return s
			}

			function d(s, u) {
				if (s == null) return {};
				var a = m(s, u),
					h, f;
				if (Object.getOwnPropertySymbols) {
					var P = Object.getOwnPropertySymbols(s);
					for (f = 0; f < P.length; f++) h = P[f], !(u.indexOf(h) >= 0) && (!Object.prototype.propertyIsEnumerable.call(s, h) || (a[h] = s[h]))
				}
				return a
			}

			function m(s, u) {
				if (s == null) return {};
				var a = {},
					h = Object.keys(s),
					f, P;
				for (P = 0; P < h.length; P++) f = h[P], !(u.indexOf(f) >= 0) && (a[f] = s[f]);
				return a
			}

			function i(s, u, a) {
				return u = g(u), u in s ? Object.defineProperty(s, u, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[u] = a, s
			}

			function g(s) {
				var u = p(s, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function p(s, u) {
				if (typeof s != "object" || s === null) return s;
				var a = s[Symbol.toPrimitive];
				if (a !== void 0) {
					var h = a.call(s, u || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(s)
			}
			const _ = n("../../../../node_modules/url-join/lib/url-join.js");
			class t {
				constructor(u) {
					i(this, "token", void 0), i(this, "options", void 0), i(this, "setAuthHeader", a => {
						this.token = a
					}), this.token = "", this.options = (0, e.Z)(u, t.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(u = "GET", a, h = {}) {
					const {
						body: f
					} = h, P = d(h, ["body"]);
					return fetch(_(this.options.baseUrl, a), l({
						method: u
					}, P, f ? {
						body: JSON.stringify(f)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(l({
							Accept: "application/json, text/plain, */*"
						}, h.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(u, a = {}) {
					const h = await this.request("GET", u, a);
					return this.parseJSONResponse(h)
				}
				async postJSON(u, a = {}) {
					const h = await this.request("POST", u, l({}, a, {
						headers: l({}, a.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(h)
				}
				parseJSONResponse(u) {
					return u.json()
				}
			}
			i(t, "defaults", {
				baseUrl: (0, o.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const r = new t
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(G, y, n) {
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
				l = n("../../../../node_modules/query-string/query-string.js"),
				d = n.n(l),
				m = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				i = n("../react/pages/apps/marketplace/requests/Requester.ts"),
				g = n("../react/pages/apps/marketplace/libraries/resource.ts");

			function* p(a, h, f, P) {
				const F = (0, e.Z)(h),
					[M, U, L] = [`get${F}Sending`, `get${F}Success`, `get${F}Failed`];
				try {
					yield(0, m.gz)(a[M]());
					const I = yield(0, m.RE)(s, f);
					let q = I;
					if (q.error) {
						yield(0, m.gz)(a[L]());
						return
					}
					return P && (q = yield P(I)), yield(0, m.gz)(a[U](q)), q
				} catch {
					yield(0, m.gz)(a[L]())
				}
			}

			function* _(a, h, f, P) {
				const F = (0, e.Z)(h),
					M = `get${F}Sending`,
					U = `get${F}Success`,
					L = `get${F}Failed`;
				try {
					yield(0, m.gz)(a[M]());
					const I = yield(0, m.RE)(u, {
						url: f,
						data: P
					});
					return yield(0, m.gz)(a[U](I)), I
				} catch {
					yield(0, m.gz)(a[L]())
				}
			}
			const t = a => (0, o.Z)(a) ? "" : `?${l.stringify(a)}`,
				r = {
					app: new g.c({
						name: "app",
						url: (a, h) => `apps/${a}${t(h)}`
					}),
					apps: new g.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new g.c({
							name: "installs",
							url: a => `sites/${a}/installs`
						}),
						delete: new g.c({
							name: "installs",
							url: a => `installs/${a}`
						})
					},
					categories: new g.c({
						name: "categories",
						url: (a = {}) => "categories" + t(a)
					}),
					metadata: {
						get: new g.c({
							name: "metadata",
							url: a => `sites/${a}/metadata`
						}),
						post: new g.c({
							name: "metadata",
							url: a => `sites/${a}/metadata`
						})
					},
					ratings: {
						default: new g.c({
							name: "ratings",
							url: (a = {}) => "ratings" + t(a)
						}),
						delete: new g.c({
							name: "ratings",
							url: a => `ratings/${a}`
						})
					},
					recommendedApps: new g.c({
						name: "recommendedApps",
						url: (a = {}) => "apps/recommend" + t(a)
					}),
					developedApps: new g.c({
						name: "developedApps",
						url: a => `user/${a}/apps`
					})
				},
				s = async a => i.L.fetchJSON(a), u = async a => {
					const {
						url: h,
						data: f
					} = a;
					return i.L.postJSON(h, {
						body: f
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				Nw: function() {
					return p
				},
				U4: function() {
					return g
				},
				XO: function() {
					return i
				},
				ZP: function() {
					return _
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts");

			function o(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(s).filter(function(a) {
						return Object.getOwnPropertyDescriptor(s, a).enumerable
					})), u.forEach(function(a) {
						l(t, a, s[a])
					})
				}
				return t
			}

			function l(t, r, s) {
				return r = d(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function d(t) {
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var u = s.call(t, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let i = function(t) {
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

			function _(t = e.fD, r) {
				switch (r.type) {
					case g.ResetState:
						return o({}, e.fD);
					case g.CurrentUserSending:
						return o({}, t);
					case g.CurrentUserSuccess:
						const {
							user: s
						} = r;
						return o({}, t, {
							user: s
						});
					case g.CurrentUserFailed:
						return o({}, t);
					case g.SetZone:
						const {
							zone: u
						} = r;
						return o({}, t, {
							zone: u
						});
					case g.SetToken:
						const {
							token: a
						} = r;
						return o({}, t, {
							token: a
						});
					case g.ClearToken:
						return o({}, t, {
							token: null
						});
					case g.SetTokenValid:
						const {
							isTokenValid: h
						} = r;
						return o({}, t, {
							isTokenValid: h
						});
					default:
						return t
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(G, y, n) {
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
					return g
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function l(r) {
				for (var s = 1; s < arguments.length; s++) {
					var u = arguments[s] != null ? Object(arguments[s]) : {},
						a = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(u).filter(function(h) {
						return Object.getOwnPropertyDescriptor(u, h).enumerable
					})), a.forEach(function(h) {
						d(r, h, u[h])
					})
				}
				return r
			}

			function d(r, s, u) {
				return s = m(s), s in r ? Object.defineProperty(r, s, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = u, r
			}

			function m(r) {
				var s = i(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function i(r, s) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var a = u.call(r, s || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}
			let g = function(r) {
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
				getHomePageAssetsSaga: (r, s) => ({
					type: p.GetHomePageAssetsSaga,
					zoneId: r,
					currentResources: s
				}),
				getInstalledAppsAssetsSaga: r => ({
					type: p.GetInstalledAppsAssetsSaga,
					zoneId: r
				}),
				getDevelopedAppsAssetsSaga: (r, s) => ({
					type: p.GetDevelopedAppsAssetsSaga,
					userId: r,
					zoneId: s
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
				getAppInfoAssetsSaga: (r, s, u) => ({
					type: p.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: s,
					version: u
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
				postMetadataSaga: (r, s) => ({
					type: p.PostMetadataSaga,
					zoneId: r,
					data: s
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
				getRecommendedAppsSaga: (r, s, u) => ({
					type: p.GetRecommendedAppsSaga,
					appsList: r,
					installsList: s,
					metadata: u
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

			function t(r = e.w6, s) {
				switch (s.type) {
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
							appsList: l({}, (0, o.pG)(r.appsList, e.Jz, s.appsList))
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
							installsList: l({}, (0, o.pG)(r.installsList, e.Jz, s.installsList))
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
							categoriesList: l({}, (0, o.pG)(r.categoriesList, e.Jz, s.categoriesList))
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
							metadata: l({}, (0, o.pG)(r.metadata, e.Jz, s.metadata))
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
							metadata: l({}, (0, o.pG)(r.metadata, e.Jz, s.metadata))
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
							recommendedAppsList: l({}, (0, o.pG)(r.recommendedAppsList, e.Jz, s.recommendedAppsList))
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
							app: l({}, (0, o.pG)(r.app, e.Jz, s.app))
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
							updatableInstallsList: s.updatableInstallsList
						});
					case p.GetDevelopedAppsSending:
						return l({}, r, {
							developedApps: l({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case p.GetDevelopedAppsSuccess:
						return l({}, r, {
							developedApps: l({}, (0, o.pG)(r.developedApps, e.Jz, s.developedApps))
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
		"../react/pages/caching/tracking.tsx": function(G, y, n) {
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
		"../react/pages/dns/dns-records/tracking.ts": function(G, y, n) {
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
		"../react/pages/email/types.ts": function(G, y, n) {
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
			let l = function(m) {
				return m[m.Verified = 0] = "Verified", m[m.Pending = 1] = "Pending", m[m.Missing = 2] = "Missing", m[m.WorkerNotFound = 3] = "WorkerNotFound", m[m.Unknown = 4] = "Unknown", m[m.Loading = 5] = "Loading", m
			}({});
			const d = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/firewall/analytics/constants.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				AU: function() {
					return a
				},
				Bc: function() {
					return u
				},
				Bd: function() {
					return N
				},
				Bt: function() {
					return r
				},
				Ji: function() {
					return Y
				},
				LO: function() {
					return s
				},
				Pk: function() {
					return I
				},
				WB: function() {
					return j
				},
				Wd: function() {
					return K
				},
				Zj: function() {
					return F
				},
				e_: function() {
					return f
				},
				hk: function() {
					return Q
				},
				jY: function() {
					return L
				},
				kF: function() {
					return W
				},
				kg: function() {
					return q
				},
				oD: function() {
					return h
				},
				pP: function() {
					return U
				},
				q4: function() {
					return M
				},
				qC: function() {
					return P
				}
			});
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../../../../node_modules/@cloudflare/component-filter-bar/es/index.js"),
				l = n("../../../../node_modules/@cloudflare/data-locations/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/cf.util.patterns/index.js"),
				m = n.n(d),
				i = n("../react/common/components/analytics/AnalyticsReport/constants.ts");

			function g(O) {
				for (var b = 1; b < arguments.length; b++) {
					var V = arguments[b] != null ? Object(arguments[b]) : {},
						w = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(V).filter(function(re) {
						return Object.getOwnPropertyDescriptor(V, re).enumerable
					})), w.forEach(function(re) {
						p(O, re, V[re])
					})
				}
				return O
			}

			function p(O, b, V) {
				return b = _(b), b in O ? Object.defineProperty(O, b, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[b] = V, O
			}

			function _(O) {
				var b = t(O, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function t(O, b) {
				if (typeof O != "object" || O === null) return O;
				var V = O[Symbol.toPrimitive];
				if (V !== void 0) {
					var w = V.call(O, b || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(O)
			}
			const r = {
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
				s = {
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
				u = {
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
				h = {
					[a.ASN]: e.Rl.colors.categorical[2],
					[a.COUNTRY]: e.Rl.colors.categorical[1],
					[a.IP]: e.Rl.colors.categorical[15],
					[a.IP_RANGE]: e.Rl.colors.categorical[15],
					[a.BOT_MANAGEMENT]: e.Rl.colors.categorical[14],
					[a.SECURITY_LEVEL]: e.Rl.colors.categorical[13],
					[a.ZONE_LOCKDOWN]: e.Rl.colors.categorical[12],
					[a.WAF]: e.Rl.colors.categorical[11],
					[a.FIREWALL_MANAGED]: e.Rl.colors.categorical[11],
					[a.UA_BLOCK]: e.Rl.colors.categorical[10],
					[a.RATE_LIMIT]: e.Rl.colors.categorical[9],
					[a.FIREWALL_RULES]: e.Rl.colors.categorical[8],
					[a.BIC]: e.Rl.colors.categorical[7],
					[a.HOT]: e.Rl.colors.categorical[6],
					[a.DLP]: e.Rl.colors.categorical[5],
					[a.L7DOS]: e.Rl.colors.categorical[4],
					[a.VALIDATION]: e.Rl.colors.categorical[3],
					[a.BOT_FIGHT_MODE]: e.Rl.colors.categorical[2],
					[a.API_SHIELD]: e.Rl.colors.categorical[1],
					[a.API_SHIELD_SCHEMA_VALIDATION]: e.Rl.colors.categorical[1],
					[a.API_SHIELD_TOKEN_VALIDATION]: e.Rl.colors.categorical[1],
					[a.FIREWALL_CUSTOM]: e.Rl.colors.categorical[0],
					[a.UNKNOWN]: e.Rl.colors.gray[5]
				},
				f = {
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
				},
				P = {
					action: {
						label: "firewall.analytics.filters.labels.action",
						type: o.kE.select,
						options: Object.keys(r).filter(O => !["challenge_solved", "challenge_failed", "challenge_bypassed", "jschallenge_solved", "jschallenge_failed", "jschallenge_bypassed", "unknown"].includes(O)),
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn]
					},
					botScore: {
						label: "firewall.analytics.filters.labels.botScore",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: O => parseInt(O, 10),
						validationMessage: "firewall.analytics.filters.errors.botScore",
						validate: O => {
							const b = parseInt(O, 10);
							return b >= 0 && b <= 100
						},
						urlParam: "botScore"
					},
					botScoreSrcName: {
						label: "firewall.analytics.filters.labels.botScoreSrcName",
						type: o.kE.select,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						options: Object.keys(u),
						urlParam: "botScoreSrcName"
					},
					clientAsn: {
						label: "firewall.analytics.filters.labels.clientAsn",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: 13335,
						validationMessage: "firewall.analytics.filters.errors.asn",
						validate: O => !isNaN(parseFloat(O)) && isFinite(parseFloat(O)),
						urlParam: "asn"
					},
					clientCountryName: {
						label: "firewall.analytics.filters.labels.clientCountryName",
						type: o.kE.select,
						options: Object.keys(l.zY),
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						urlParam: "country"
					},
					clientIP: {
						label: "firewall.analytics.filters.labels.clientIP",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: "192.0.2.0",
						validationMessage: "firewall.analytics.filters.errors.ip",
						validate: O => !!O && !!O.length && (d.ipv4.test(O) || d.ipv6.test(O)),
						urlParam: "ip"
					},
					clientRequestHTTPHost: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPHost",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.contains, i.Gn.notContains, i.Gn.startsWith, i.Gn.notStartsWith, i.Gn.endsWith, i.Gn.notEndsWith, i.Gn.in, i.Gn.notIn],
						example: "example.com",
						urlParam: "host"
					},
					clientRequestHTTPMethodName: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPMethodName",
						type: o.kE.select,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						options: ["GET", "POST", "PURGE", "PUT", "HEAD", "OPTIONS", "DELETE", "PATCH", "CONNECT", "TRACE"],
						urlParam: "http-method"
					},
					clientRequestHTTPProtocol: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPProtocol",
						type: o.kE.select,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						options: ["HTTP/1.0", "HTTP/1.1", "HTTP/1.2", "HTTP/2", "HTTP/3", "SPDY/3.1"],
						urlParam: "http-version"
					},
					contentScanObjResults: {
						label: "firewall.analytics.filters.labels.contentScanObjResults",
						type: o.kE.select,
						operators: [i.Gn.has, i.Gn.notHas, i.Gn.in, i.Gn.notIn],
						options: ["clean", "suspicious", "infected", "not scanned"],
						example: "clean",
						urlParam: "scanned-content-results"
					},
					contentScanObjTypes: {
						label: "firewall.analytics.filters.labels.contentScanObjTypes",
						type: o.kE.string,
						operators: [i.Gn.has, i.Gn.notHas, i.Gn.in, i.Gn.notIn],
						example: "application/json",
						urlParam: "scanned-content-types"
					},
					contentScanObjSizes: {
						label: "firewall.analytics.filters.labels.contentScanObjSizes",
						type: o.kE.string,
						operators: [i.Gn.has, i.Gn.notHas, i.Gn.in, i.Gn.notIn],
						example: "1000",
						urlParam: "scanned-content-sizes"
					},
					ja3Hash: {
						label: "firewall.analytics.filters.labels.ja3Hash",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: "df669e7ea913f1ac0c0cce9a201a2ec1",
						urlParam: "ja3-hash"
					},
					ja4: {
						label: "firewall.analytics.filters.labels.ja4",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: "t13d1516h2_8daaf6152771_b186095e22b6",
						urlParam: "ja4"
					},
					apiGatewayMatchedEndpoint: {
						label: "firewall.analytics.filters.labels.apiGatewayMatchedEndpoint",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.contains, i.Gn.notContains, i.Gn.startsWith, i.Gn.notStartsWith, i.Gn.endsWith, i.Gn.notEndsWith, i.Gn.in, i.Gn.notIn],
						urlParam: "api-matched-endpoint",
						example: "/path/{var1}"
					},
					clientRequestPath: {
						label: "firewall.analytics.filters.labels.clientRequestPath",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.contains, i.Gn.notContains, i.Gn.startsWith, i.Gn.notStartsWith, i.Gn.endsWith, i.Gn.notEndsWith, i.Gn.in, i.Gn.notIn],
						example: "/content",
						urlParam: "path"
					},
					clientRequestQuery: {
						label: "firewall.analytics.filters.labels.clientRequestQuery",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.contains, i.Gn.notContains, i.Gn.startsWith, i.Gn.notStartsWith, i.Gn.endsWith, i.Gn.notEndsWith, i.Gn.in, i.Gn.notIn],
						example: "?example=1",
						urlParam: "query"
					},
					source: {
						label: "firewall.analytics.filters.labels.source",
						type: o.kE.select,
						options: Object.keys(f).filter(O => O !== "unknown"),
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						urlParam: "service"
					},
					rayName: {
						label: "firewall.analytics.filters.labels.rayName",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals],
						example: "1a79a4d60de6718e",
						urlParam: "ray-id",
						parse: O => O.replace(/-[A-Z]{3}$/, "")
					},
					ruleId: {
						label: "firewall.analytics.filters.labels.ruleId",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: 100001,
						urlParam: "rule-id"
					},
					rulesetId: {
						label: "firewall.analytics.filters.labels.rulesetId",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: "",
						urlParam: "ruleset-id"
					},
					userAgent: {
						label: "firewall.analytics.filters.labels.userAgent",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.contains, i.Gn.notContains, i.Gn.startsWith, i.Gn.notStartsWith, i.Gn.endsWith, i.Gn.notEndsWith, i.Gn.in, i.Gn.notIn],
						example: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6)...",
						urlParam: "user-agent"
					},
					wafMlAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlAttackScore",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: O => parseInt(O, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: O => {
							const b = parseInt(O, 10);
							return b >= 0 && b <= 100
						},
						urlParam: "waf-ml-score"
					},
					wafRceAttackScore: {
						label: "firewall.analytics.filters.labels.wafRceAttackScore",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: O => parseInt(O, 10),
						validationMessage: "firewall.analytics.filters.errors.wafRceAttackScore",
						validate: O => {
							const b = parseInt(O, 10);
							return b >= 0 && b <= 100
						},
						urlParam: "waf-rce-score"
					},
					wafMlSqliAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlSqliAttackScore",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: O => parseInt(O, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: O => {
							const b = parseInt(O, 10);
							return b >= 0 && b <= 100
						},
						urlParam: "waf-ml-sqli-score"
					},
					wafMlXssAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlXssAttackScore",
						type: o.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: O => parseInt(O, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: O => {
							const b = parseInt(O, 10);
							return b >= 0 && b <= 100
						},
						urlParam: "waf-ml-xss-score"
					},
					wafAttackScoreClass: {
						label: "firewall.analytics.filters.labels.wafAttackScoreClass",
						type: o.kE.select,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						options: ["attack", "likely_attack", "likely_clean", "clean", "not_scored"],
						example: "Attack",
						urlParam: "waf-ml-score-class"
					},
					zoneVersion: {
						label: "firewall.analytics.filters.labels.zoneVersion",
						type: o.kE.string,
						example: 3,
						operators: [i.Gn.equals, i.Gn.notEquals],
						parse: O => parseInt(O, 10),
						validationMessage: "firewall.analytics.filters.errors.zoneVersion",
						validate: O => parseInt(O) >= 0,
						urlParam: "zone-version"
					},
					zoneTag: {
						label: "firewall.analytics.filters.labels.zoneTag",
						type: o.kE.string,
						example: "c40df159b74f0e1c0deedf29008ffc04",
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						urlParam: "zone-id"
					}
				},
				F = (O, b, V, w, re, H, k) => {
					const T = g({}, P);
					return O || (delete T.botScore, delete T.botScoreSrcName), b || (delete T.ja3Hash, delete T.ja4, delete T.ja4Signals), V || (delete T.wafMlAttackScore, delete T.wafMlSqliAttackScore, delete T.wafMlXssAttackScore, delete T.wafRceAttackScore), H || delete T.wafAttackScoreClass, w || delete T.zoneVersion, re || delete T.apiGatewayMatchedEndpoint, k || delete T.zoneTag, T
				},
				M = {
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
				U = {
					TIMESERIES: "Timeseries Chart",
					DISTRIBUTION: "Source Distribution Chart",
					TOP_N: "Top N",
					FILTER_BAR: "Filter Bar"
				},
				L = "firewall-analytics",
				I = "encrypted_matched_data",
				q = {
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
				Y = {
					REQUEST_HEADERS_NAMES: "firewall.activity_log.matched_data.request_headers_names",
					FILES: "firewall.activity_log.matched_data.files",
					ARGS: "firewall.activity_log.matched_data.args",
					ARGS_POST_NAMES: "firewall.activity_log.matched_data.args_post_names",
					ARGS_GET_NAMES: "firewall.activity_log.matched_data.args_get_names",
					ARGS_GET: "firewall.activity_log.matched_data.args_get",
					REQUEST_HEADERS: "firewall.activity_log.matched_data.request_headers"
				},
				W = ["REQUEST_HEADERS:HOST", "REQUEST_HEADERS:REFERER", "REQUEST_HEADERS:USER-AGENT"],
				K = {
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
				N = "https://developers.cloudflare.com/ddos-protection/best-practices/respond-to-ddos-attacks/"
		},
		"../react/pages/firewall/api-shield/tracking.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				Fj: function() {
					return p
				},
				kq: function() {
					return g
				},
				xr: function() {
					return _
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function l(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(s).filter(function(a) {
						return Object.getOwnPropertyDescriptor(s, a).enumerable
					})), u.forEach(function(a) {
						d(t, a, s[a])
					})
				}
				return t
			}

			function d(t, r, s) {
				return r = m(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function m(t) {
				var r = i(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function i(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var u = s.call(t, r || "default");
					if (typeof u != "object") return u;
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
				_ = ({
					name: t,
					category: r = "user journey",
					product: s = g.MAIN,
					productName: u,
					additionalData: a
				}) => {
					o().sendEvent(t, l({
						category: r,
						product: s,
						productName: u
					}, a || {}))
				}
		},
		"../react/pages/firewall/bots/tracking.ts": function(G, y, n) {
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
			let e = function(d) {
					return d.INITIAL_FETCH_SCORES = "view bots scores distribution", d.FETCH_CONFIGURATION = "view bots configuration page", d.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", d.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", d.UPDATE_SETTINGS = "update bots settings", d.DELETE_RULE = "delete bots ruleset", d.UPDATE_RULE = "update bots ruleset", d.FETCH_RULES = "view bots ruleset", d.CONFIGURE_BOT_MANAGEMENT = "view bots management", d.WAF_RULES_REDIRECT = "redirect waf rules", d
				}({}),
				o = function(d) {
					return d.PROVIDED_TEMPLATE = "provided template link in detection card", d.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", d.USE_TEMPLATE = "use template", d.CREATE_FIREWALL_RULE = "create firewall rule", d.WAF_RULES = "waf rules", d
				}({});
			const l = "user journey"
		},
		"../react/pages/firewall/page-shield/tracking.ts": function(G, y, n) {
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
		"../react/pages/firewall/rulesets/tracking.tsx": function(G, y, n) {
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
					return d
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
				l = (m, i) => {
					var g;
					return `${i} ${(g=o[m])!==null&&g!==void 0?g:m} rule${i===e.GET?"s":""}`
				},
				d = () => {
					var m, i;
					return (m = Object.keys(o)) === null || m === void 0 || (i = m.map(g => {
						var p;
						return (p = Object.values(e)) === null || p === void 0 ? void 0 : p.map(_ => l(g, _))
					})) === null || i === void 0 ? void 0 : i.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
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
					return s
				},
				nT: function() {
					return g
				},
				o4: function() {
					return u
				},
				oY: function() {
					return l
				},
				qH: function() {
					return _
				},
				x3: function() {
					return i
				}
			});
			var e = n("../react/pages/firewall/analytics/constants.ts");
			const o = ["block", "challenge", "jschallenge", "managedChallenge"],
				l = ["miss", "expired", "bypass", "dynamic"],
				d = a => Object.fromEntries(Object.entries(a).map(([h, f]) => [f, h])),
				m = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				i = d(m),
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
				p = d(g),
				_ = {
					"Not Computed": "not_computed",
					"Machine Learning": "machine_learning",
					Heuristics: "heuristics",
					"Behavioral Analysis": "behavioral_analysis",
					"JS Fingerprinting": "js_fingerprinting",
					"Verified Bot": "verified_bot",
					"Cloudflare Service": "cloudflare_service"
				},
				t = d(_);
			let r = function(a) {
				return a.SAMPLED = "sampled", a.RAW = "raw", a
			}({});
			const s = "security-analytics-log-explorer";
			let u = function(a) {
				return a.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', a.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', a.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', a.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', a.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', a
			}({})
		},
		"../react/pages/home/alerts/config.tsx": function(G, y, n) {
			"use strict";
			n.d(y, {
				jk: function() {
					return P
				},
				w8: function() {
					return F
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				l = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				d = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function m(M) {
				for (var U = 1; U < arguments.length; U++) {
					var L = arguments[U] != null ? Object(arguments[U]) : {},
						I = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(L).filter(function(q) {
						return Object.getOwnPropertyDescriptor(L, q).enumerable
					})), I.forEach(function(q) {
						i(M, q, L[q])
					})
				}
				return M
			}

			function i(M, U, L) {
				return U = g(U), U in M ? Object.defineProperty(M, U, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[U] = L, M
			}

			function g(M) {
				var U = p(M, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function p(M, U) {
				if (typeof M != "object" || M === null) return M;
				var L = M[Symbol.toPrimitive];
				if (L !== void 0) {
					var I = L.call(M, U || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(M)
			}
			const _ = "Notifications",
				t = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${r}/notifications`,
				u = (0, e.BC)`${s}/destinations`,
				a = (0, e.BC)`${s}/create`,
				h = (0, e.BC)`${a}/${"alertType"}`,
				f = (0, e.BC)`${s}/edit/${"alertId"}`,
				P = m({
					account: r,
					alerts: s,
					destinations: u,
					createAlert: a,
					createAlertWithSelection: h,
					editAlert: f
				}, o._j, l._j),
				F = m({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, d.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				_j: function() {
					return i
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				l = (0, e.BC)`${o}/pagerduty/connect`,
				d = (0, e.BC)`${o}/pagerduty/register`,
				m = (0, e.BC)`${o}/pagerduty`,
				i = {
					pagerDutyConnect: l,
					pagerDutyRegister: d,
					pagerDutyList: m
				};
			var g = null
		},
		"../react/pages/home/alerts/tracking.ts": function(G, y, n) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(G, y, n) {
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
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(G, y, n) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				AA: function() {
					return me
				},
				AN: function() {
					return he
				},
				AY: function() {
					return st
				},
				Am: function() {
					return M
				},
				B2: function() {
					return $
				},
				BB: function() {
					return W
				},
				BF: function() {
					return Oe
				},
				BQ: function() {
					return ve
				},
				E8: function() {
					return nt
				},
				Fl: function() {
					return Ot
				},
				Fu: function() {
					return N
				},
				G_: function() {
					return P
				},
				Gc: function() {
					return it
				},
				Hc: function() {
					return Wt
				},
				IO: function() {
					return De
				},
				JK: function() {
					return Fe
				},
				K: function() {
					return q
				},
				LI: function() {
					return pe
				},
				LX: function() {
					return Te
				},
				L_: function() {
					return je
				},
				Ly: function() {
					return It
				},
				MR: function() {
					return ie
				},
				Mj: function() {
					return oe
				},
				NB: function() {
					return Lt
				},
				Or: function() {
					return de
				},
				P5: function() {
					return xt
				},
				PE: function() {
					return be
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
					return j
				},
				Qr: function() {
					return Pe
				},
				Qv: function() {
					return We
				},
				Rp: function() {
					return Ne
				},
				Sh: function() {
					return Ut
				},
				TZ: function() {
					return ge
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
					return b
				},
				W3: function() {
					return C
				},
				WR: function() {
					return Je
				},
				WX: function() {
					return Be
				},
				XF: function() {
					return Bt
				},
				Xc: function() {
					return we
				},
				ZB: function() {
					return K
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
					return Me
				},
				c2: function() {
					return ne
				},
				cE: function() {
					return jt
				},
				dh: function() {
					return Xe
				},
				fE: function() {
					return xe
				},
				g7: function() {
					return le
				},
				hO: function() {
					return se
				},
				hV: function() {
					return Gt
				},
				hk: function() {
					return U
				},
				hr: function() {
					return Ce
				},
				it: function() {
					return te
				},
				jG: function() {
					return fe
				},
				jN: function() {
					return He
				},
				m8: function() {
					return k
				},
				nm: function() {
					return Ft
				},
				oW: function() {
					return St
				},
				oc: function() {
					return F
				},
				pH: function() {
					return T
				},
				pi: function() {
					return H
				},
				rI: function() {
					return x
				},
				s7: function() {
					return S
				},
				sO: function() {
					return $e
				},
				sg: function() {
					return ot
				},
				tB: function() {
					return f
				},
				tN: function() {
					return R
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
				l = n("../../../../node_modules/moment/moment.js"),
				d = n.n(l),
				m = n("../../../common/util/types/src/api/domain.ts"),
				i = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				g = n("../react/utils/translator.tsx"),
				p = n("../react/utils/url.ts"),
				_ = n("../react/pages/home/domain-registration/config.ts"),
				t = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = n("../react/pages/home/domain-registration/types.ts");

			function s(c) {
				for (var v = 1; v < arguments.length; v++) {
					var ae = arguments[v] != null ? Object(arguments[v]) : {},
						ye = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && ye.push.apply(ye, Object.getOwnPropertySymbols(ae).filter(function(Le) {
						return Object.getOwnPropertyDescriptor(ae, Le).enumerable
					})), ye.forEach(function(Le) {
						u(c, Le, ae[Le])
					})
				}
				return c
			}

			function u(c, v, ae) {
				return v = a(v), v in c ? Object.defineProperty(c, v, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[v] = ae, c
			}

			function a(c) {
				var v = h(c, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function h(c, v) {
				if (typeof c != "object" || c === null) return c;
				var ae = c[Symbol.toPrimitive];
				if (ae !== void 0) {
					var ye = ae.call(c, v || "default");
					if (typeof ye != "object") return ye;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(c)
			}

			function f(c) {
				return c.filter(v => v.isSelected).reduce((v, {
					transferFee: ae,
					isZoneEntitlementPresent: ye
				}) => ye ? v : v + ae, 0)
			}

			function P(c) {
				return (c / 100).toLocaleString("en-US", {
					style: "currency",
					currency: "USD"
				})
			}

			function F(c) {
				return c.filter(v => v.registrar.toLowerCase() === "godaddy")
			}
			const M = "MMM D, YYYY";

			function U(c, v, ae, ye) {
				var Le, Ye, Dt, ct, lt, kt, gt, Ge, mt, ut, dt, ft, Et, yt, _t, vt, ht, Ct, Tt, bt, Rt;
				const zt = (((Le = v.fees) === null || Le === void 0 ? void 0 : Le.registration_fee) !== r.Xp && ((Ye = v.fees) === null || Ye === void 0 ? void 0 : Ye.registration_fee) || 0) * 100,
					Ht = (((Dt = v.fees) === null || Dt === void 0 ? void 0 : Dt.transfer_fee) !== r.Xp && ((ct = v.fees) === null || ct === void 0 ? void 0 : ct.transfer_fee) || 0) * 100,
					Kt = (((lt = v.fees) === null || lt === void 0 ? void 0 : lt.registration_fee) !== r.Xp && ((kt = v.fees) === null || kt === void 0 ? void 0 : kt.registration_fee) || 0) * 100,
					Mt = (((gt = v.fees) === null || gt === void 0 ? void 0 : gt.renewal_fee) !== r.Xp && ((Ge = v.fees) === null || Ge === void 0 ? void 0 : Ge.renewal_fee) || 0) * 100,
					Vt = (((mt = v.fees) === null || mt === void 0 ? void 0 : mt.redemption_fee) !== r.Xp && ((ut = v.fees) === null || ut === void 0 ? void 0 : ut.redemption_fee) || 0) * 100,
					ke = c[v.name];
				return {
					name: v.name,
					zone: ke,
					entitlements: ae,
					registryCheck: ye,
					nameservers: v.name_servers,
					isAvailable: v.available,
					lastKnownStatus: v.last_known_status,
					authCode: v.auth_code,
					isEnterpriseZone: (ke == null || (dt = ke.plan) === null || dt === void 0 ? void 0 : dt.legacy_id) === "enterprise",
					isActiveZone: (ke == null ? void 0 : ke.status) === "active",
					corResponsesPending: v.cor_responses_pending,
					isCorLocked: v.cor_locked,
					corLockedUntil: v.cor_locked_until ? d()(v.cor_locked_until).format(M) : null,
					isFullZone: (ke == null ? void 0 : ke.type) == r.xd.Full,
					isLocked: v.locked,
					registrar: v.current_registrar || _.JM,
					zoneId: ke == null ? void 0 : ke.id,
					currentExpiration: d()(v.expires_at).format(M),
					newExpiration: d()(v.expires_at).add(1, "year").format(M),
					wholesaleCost: zt,
					transferFee: Ht,
					registrationFee: Kt,
					renewalFee: Mt,
					redemptionFee: Vt,
					lastEntitledAt: v.last_entitled_at ? new Date(v.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(ae) && !!ae.find(Nt => Nt.id === _.g5 && Nt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: v.transfer_in && I(v.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: v.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: v.transfer_in,
					transferOut: v.transfer_out,
					autoRenew: v.auto_renew === !0,
					lastTransferredAt: v.last_transferred_at,
					createdAt: v.created_at,
					paymentExpiresAt: d()(v.payment_expires_at).isValid() ? d()(v.payment_expires_at) : d()(v.expires_at).isValid() ? d()(v.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (ft = v.contacts) === null || ft === void 0 || (Et = ft.administrator) === null || Et === void 0 ? void 0 : Et.id,
						[r.l2.Billing]: (yt = v.contacts) === null || yt === void 0 || (_t = yt.billing) === null || _t === void 0 ? void 0 : _t.id,
						[r.l2.Registrant]: (vt = v.contacts) === null || vt === void 0 || (ht = vt.registrant) === null || ht === void 0 ? void 0 : ht.id,
						[r.l2.Technical]: (Ct = v.contacts) === null || Ct === void 0 || (Tt = Ct.technical) === null || Tt === void 0 ? void 0 : Tt.id
					},
					landing: v.landing,
					whois: v.whois,
					emailVerified: v.email_verified,
					materialChanges: Q(v.material_changes),
					corChanges: v.cor_changes ? W(Object.assign(s({}, L), v.cor_changes)) : {},
					registryStatuses: v.registry_statuses ? v.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (bt = v.domain_protection_services) === null || bt === void 0 ? void 0 : bt.status
					},
					deletion: {
						isDeletable: v == null || (Rt = v.deletion) === null || Rt === void 0 ? void 0 : Rt.is_deletable
					},
					premiumType: v == null ? void 0 : v.premiumType,
					fees: v == null ? void 0 : v.fees
				}
			}
			const L = {
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

			function I(c) {
				switch (c.enter_auth_code) {
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

			function q(c) {
				let v = c.extensions;
				(v == null ? void 0 : v.application_purpose) && (v == null ? void 0 : v.nexus_category) && (c.extensions = {
					nexusCategory: v.nexus_category,
					applicationPurpose: v.application_purpose
				});
				let ae = s({}, typeof c.id == "string" ? {
					id: c.id
				} : {}, {
					first_name: c.firstName,
					organization: c.organization,
					address: c.address1,
					city: c.city,
					state: c.state || "N/A",
					zip: c.zip,
					country: c.country,
					phone: c.phone,
					email: c.email,
					fax: "",
					last_name: c.lastName,
					address2: c.address2,
					email_verified: c.emailVerified
				}, c.extensions ? {
					extensions: {
						nexus_category: c.extensions.nexusCategory,
						application_purpose: c.extensions.applicationPurpose
					}
				} : {});
				return Ke(ae)
			}

			function Q(c) {
				let v = [];
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
				for (const ye in c) {
					const Le = c[ye],
						Ye = ae[Le];
					v.push(Ye)
				}
				return v
			}
			const Y = c => {
				if (!c) return null;
				let v = c;
				return c.includes("C31") && (v = "C31"), c.includes("C32") && (v = "C32"), v
			};

			function W(c) {
				return s({}, typeof c.id == "string" ? {
					id: c.id
				} : {}, {
					firstName: c.first_name,
					organization: c.organization,
					address1: c.address,
					city: c.city,
					state: c.state,
					zip: c.zip,
					country: c.country,
					phone: c.phone.trim(),
					email: c.email.trim(),
					lastName: c.last_name,
					address2: c.address2,
					emailVerified: c.email_verified
				}, c.extensions ? {
					extensions: {
						nexusCategory: Y(c.extensions.nexus_category),
						applicationPurpose: c.extensions.application_purpose
					}
				} : {})
			}

			function K(c = {}) {
				const v = {
					name: "",
					zoneId: "",
					zone: s({
						id: "",
						name: "",
						status: "pending",
						plan: s({
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
						}, c.zone && c.zone.plan || {}),
						type: r.xd.Full
					}, c.zone || {}),
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
					transferConditions: s({
						exists: !0,
						supported_tld: !0,
						not_secure: !0,
						not_waiting: !0,
						not_started: !0,
						not_premium: !0
					}, c.transferConditions || {}),
					transferIn: s({
						unlock_domain: r.lW.UNKNOWN,
						disable_privacy: r.lW.UNKNOWN,
						enter_auth_code: r.lW.UNKNOWN,
						approve_transfer: r.lW.UNKNOWN,
						accept_foa: r.lW.UNKNOWN,
						can_cancel_transfer: !1
					}, c.transferIn || {}),
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
				return Object.assign(v, c)
			}

			function j(c = {}) {
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
				}, c)
			}

			function N(c) {
				const v = _.Py.concat(_.ui).reduce((ae, ye) => s({}, ae, {
					[ye]: []
				}), {});
				return c.forEach(ae => {
					let ye = O(ae.registrar);
					ye in v || (ye = _.ui), ot(ae.name) && (ye = "uk"), v[ye].push(ae)
				}), Object.keys(v).sort((ae, ye) => ae.localeCompare(ye)).map(ae => ({
					registrar: ae,
					domains: v[ae]
				})).filter(ae => ae.domains.length > 0)
			}

			function O(c) {
				return c == null ? void 0 : c.toLowerCase().replace(/\s|,|\./g, "")
			}

			function b(c) {
				if (!c || !c.registrar) return "unknown";
				if (ot(c.name)) return "uk";
				const v = O(c.registrar);
				return v in _.gM ? v : "unknown"
			}
			const V = [];

			function w(c) {
				return V.some(v => c.endsWith("." + v))
			}

			function re(c) {
				return !c.isEnterpriseZone || !Array.isArray(c.entitlements) ? !1 : !!c.entitlements.find(({
					id: v,
					allocation: ae
				}) => v === _.g5 && ae.value === !0)
			}

			function H(c) {
				var v;
				const ae = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let ye = !1,
					Le = null;
				return (v = c.registryStatuses) === null || v === void 0 || v.some(Ye => {
					ae.includes(Ye) && (Le = Ye, ye = !0)
				}), [ye, Le]
			}

			function k(c, v = !1) {
				if (!c) return [!1, t.keys.cannot_transfer_default];
				if (c.zone.status !== "active") return [!1, t.keys.cannot_transfer_zone_not_active];
				if (!c.isFullZone && !re(c)) return [!1, t.keys.cannot_transfer_zone_not_eligible];
				if (c.registrar === "Cloudflare") return [!1, t.keys.cannot_transfer_domain_on_cf];
				if (c.isAvailable) return [!1, t.keys.cannot_transfer_domain_available];
				if (!c.transferConditions) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (!v && wt(c == null ? void 0 : c.premiumType)) return [!1, t.keys.cannot_transfer_domain_premium];
				if (T(c)) return [!1, t.keys.cannot_transfer_domain_transfer_in_progress];
				let ae;
				for (ae in c.transferConditions)
					if (!c.transferConditions[ae]) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (w(c.name)) return [!1, t.keys.cannot_transfer_domain_tld_not_supported];
				const [ye, Le] = H(c);
				return ye && Le ? [!1, t.keys.cannot_transfer_domain_registry_status[Le]] : [!0, ""]
			}

			function T(c) {
				var v, ae;
				return !!c.transferIn && !((v = c.transferConditions) === null || v === void 0 ? void 0 : v.not_started) && !!(ot(c.name) || ((ae = c.registryStatuses) === null || ae === void 0 ? void 0 : ae.includes(r.rj.PENDING_TRANSFER)))
			}

			function B(c) {
				return !!c.registrar && !!c.currentExpiration
			}

			function $(c, v = !1) {
				const [ae] = k(c, v);
				return B(c) ? Re(c) ? r.M5.InProgressOrOnCF : ae ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function ne(c) {
				return c.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(c.transferIn.enter_auth_code) || !1
			}

			function ie(c) {
				return c.registrar === "Cloudflare"
			}

			function x(c) {
				return !!(c == null ? void 0 : c.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function oe(c) {
				return !!(c == null ? void 0 : c.includes(r.rj.PENDING_TRANSFER))
			}
			const Z = "Invalid date";

			function de(c) {
				return c.newExpiration === Z ? "Unavailable" : c.newExpiration
			}

			function ge(c) {
				return c.currentExpiration === Z ? "Unavailable" : c.currentExpiration
			}

			function me(c) {
				return c.substring(c.indexOf("."))
			}

			function Ce(c) {
				return c.map(v => v.name).map(v => me(v)).filter((v, ae, ye) => !ye.includes(v, ae + 1))
			}

			function Me(c) {
				if (_.no) return [!0, ""];
				if (!ie(c)) return [!1, r.ok.NotOnCF];
				if (c.isCorLocked) return [!1, c.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (c.lastTransferredAt) {
					const v = d()(c.lastTransferredAt),
						ae = d().duration(d()().diff(v)).as("days"),
						ye = ot(c.name);
					if (ae < (ye ? 1 : 60)) return [!1, ye ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (c.createdAt) {
					const v = d()(c.createdAt);
					if (d().duration(d()().diff(v)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function Be(c) {
				return !!(_.Bc || c.transferOut)
			}

			function Re(c) {
				return le(c) || ie(c)
			}

			function R(c) {
				return !le(c) && ie(c)
			}

			function le(c) {
				return !c || c.lastKnownStatus === "pendingTransfer" || c.lastKnownStatus === "transferFOAPending" || !ie(c) && c.transferConditions && !c.transferConditions.not_started || !1
			}

			function be(c) {
				return !(w(c.name) || c.transferConditions && !c.transferConditions.supported_tld)
			}

			function We(c) {
				return (c == null ? void 0 : c.includes("/")) ? !0 : c.split("").some(v => v.charCodeAt(0) > 123)
			}

			function ze(c) {
				switch (c) {
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

			function Ue(c) {
				return d()(c.paymentExpiresAt).isBefore(d()())
			}

			function He(c) {
				return c.transferIn && c.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function Fe(c) {
				const v = ["CU", "KP", "IR", "SY"];
				return c.filter(ae => !v.includes(ae.code))
			}

			function et(c) {
				if (!!c) return `${c.charAt(0).toUpperCase()}${c.slice(1)}${c.charAt(c.length-1)==="."?"":"."}`
			}

			function Ke(c) {
				const v = {};
				for (const [ae, ye] of Object.entries(c)) {
					if (ye && typeof ye == "string") {
						Object.assign(v, {
							[ae]: ye.trim()
						});
						continue
					}
					Object.assign(v, {
						[ae]: ye
					})
				}
				return v
			}

			function Ve(c) {
				return d()(c).add(40, "days")
			}

			function je(c) {
				const v = c.paymentExpiresAt || c.payment_expires_at,
					ae = Ve(v);
				return d()().isBetween(v, ae)
			}

			function xe(c) {
				var v;
				return !(c == null ? void 0 : c.registryStatuses) || !Array.isArray(c == null ? void 0 : c.registryStatuses) && !(0, e.isString)(c == null ? void 0 : c.registryStatuses) ? !1 : (v = c.registryStatuses) === null || v === void 0 ? void 0 : v.includes(r.rj.REDEMPTION_PERIOD)
			}

			function Xe(c) {
				var v;
				return !(c == null ? void 0 : c.registryStatuses) || !Array.isArray(c == null ? void 0 : c.registryStatuses) && !(0, e.isString)(c == null ? void 0 : c.registryStatuses) ? !1 : (v = c.registryStatuses) === null || v === void 0 ? void 0 : v.includes(r.rj.PENDING_DELETE)
			}

			function Ze(c) {
				return [".us"].includes(c)
			}

			function te(c) {
				return [".us"].includes(c)
			}

			function se(c) {
				switch (c) {
					case ".us":
						return ee();
					default:
						return []
				}
			}

			function C(c) {
				switch (c) {
					case ".us":
						return D;
					default:
						return {}
				}
			}
			const D = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function ee() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([c, v]) => ({
						value: c,
						label: v
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([c, v]) => ({
						value: c,
						label: v
					}))
				}]
			}

			function Te(c, v, ae) {
				return v[v.length - 1][ae] === c[ae]
			}

			function Pe(c) {
				return Boolean(Object.keys(c).length === 0)
			}

			function Oe(c) {
				return d()().add(c, "year").format(M)
			}

			function Ie({
				accountName: c
			}) {
				var v;
				const ae = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((v = c.toLowerCase().match(ae)) === null || v === void 0 ? void 0 : v[0]) || ""
			}

			function Se(c) {
				return !!c.match(i.default.email)
			}

			function fe(c) {
				return c === "Registration banned zone error"
			}

			function we(c) {
				return c == null ? void 0 : c.startsWith("Quote error")
			}

			function $e(c) {
				return c === (0, g.ZP)(t.keys.registration_checkout_trademark_notice_error_message)
			}

			function Ae(c) {
				return c === "DNS conflict"
			}

			function at(c) {
				return c === m.W7.PENDING_UPDATE
			}

			function it(c) {
				return c ? Object.values(m.wR).filter(v => v !== m.wR.OFFBOARDED).includes(c) : !1
			}

			function S(c) {
				return c ? [m.wR.LOCKED, m.wR.ONBOARDED, m.wR.ONBOARDING_INITIATED, m.wR.PENDING_REGISTRY_LOCK, m.wR.PENDING_REGISTRY_UNLOCK, m.wR.PENDING_UNLOCK_APPROVAL].includes(c) : !1
			}

			function J(c) {
				return c ? m.wR.UNLOCKED === c : !1
			}

			function ce(c) {
				return c ? m.wR.LOCKED === c : !1
			}

			function pe(c) {
				return c ? m.wR.PENDING_REGISTRY_LOCK === c : !1
			}

			function ve(c) {
				return c ? [m.wR.PENDING_REGISTRY_UNLOCK, m.wR.PENDING_UNLOCK_APPROVAL].includes(c) : !1
			}

			function De(c) {
				var v;
				return !1
			}

			function Je(c) {
				var v;
				return !1
			}

			function he(c) {
				var v;
				return !1
			}

			function Bt(c) {
				var v;
				return !1
			}

			function nt(c) {
				var v;
				return !1
			}

			function St(c) {
				return Object.keys(m.wR).find(v => m.wR[v].toLowerCase() === c.toLowerCase())
			}

			function st(c) {
				var v;
				const ae = (v = St(c)) === null || v === void 0 ? void 0 : v.toLowerCase();
				return ae ? t.keys.protection_status[ae] : t.keys.protection_status.unknown
			}

			function qe(c) {
				return ["com", "net"].includes(c)
			}

			function Ot(c) {
				const v = (0, p.pu)(c);
				return qe(v) ? m.wR.PENDING_REGISTRY_LOCK : m.wR.LOCKED
			}

			function Ut(c) {
				return (0, p.pu)(c) === "co" ? 5 : 10
			}

			function Ft(c, v) {
				return v ? 1 : (0, p.pu)(c) === "co" ? 5 : (0, p.pu)(c) === "org" ? 1 : 10
			}

			function ot(c) {
				return (0, p.pu)(c) === "uk"
			}

			function jt(c) {
				return (0, p.pu)(c) === "us"
			}

			function Ne(c) {
				return d()(c).isValid()
			}

			function It(c) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(c)
			}

			function xt(c) {
				return !!(c == null ? void 0 : c.id)
			}

			function Lt(c) {
				return c ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(c) : !1
			}

			function $t(c) {
				return c ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(c) : !1
			}

			function Gt(c) {
				var v;
				return (c == null ? void 0 : c.lastKnownStatus) ? (v = c.lastKnownStatus) === null || v === void 0 ? void 0 : v.includes("deletionIrredeemable") : !1
			}

			function wt(c) {
				switch (c) {
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

			function Wt(c) {
				if (!c || !c.message) return r.OJ.DEFAULT;
				const {
					message: v
				} = c;
				switch (!0) {
					case v.includes("feature disabled"):
						return r.OJ.FEATURE_DISABLED;
					case v.includes("email unverified"):
						return r.OJ.EMAIL_UNVERIFIED;
					case v.includes("account blocked"):
						return r.OJ.ACCOUNT_BLOCKED;
					default:
						return r.OJ.DEFAULT
				}
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				Bc: function() {
					return _
				},
				Hv: function() {
					return V
				},
				JM: function() {
					return l
				},
				Py: function() {
					return i
				},
				WK: function() {
					return r
				},
				g5: function() {
					return s
				},
				gM: function() {
					return m
				},
				gf: function() {
					return p
				},
				jk: function() {
					return b
				},
				no: function() {
					return t
				},
				uY: function() {
					return g
				},
				ui: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../flags.js");
			const l = "Unknown",
				d = "unknown",
				m = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				i = Object.keys(m),
				g = !0,
				p = (0, o.J8)("registrar_mock_data") || !1,
				_ = (0, o.J8)("registrar_mock_transfer_out") || !1,
				t = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				s = "cf_registrar.enabled",
				u = "@abcABC1234567890123456",
				a = (0, e.BC)`/${"accountId"}`,
				h = (0, e.BC)`${a}/add-site`,
				f = (0, e.BC)`${a}/domains`,
				P = (0, e.BC)`${f}/${"zoneName"}`,
				F = (0, e.BC)`${P}/configuration`,
				M = (0, e.BC)`${P}/contacts`,
				U = (0, e.BC)`${f}/pricing`,
				L = (0, e.BC)`${f}/protection`,
				I = (0, e.BC)`${f}/register`,
				q = (0, e.BC)`${I}/checkout`,
				Q = (0, e.BC)`${I}/success`,
				Y = (0, e.BC)`${f}/tlds`,
				W = (0, e.BC)`${f}/transfer`,
				K = (0, e.BC)`${f}/transfer/${"zoneName"}`,
				j = (0, e.BC)`/registrar/accounts/verify_email`,
				N = (0, e.BC)`/registrar/domains/verify_email`,
				O = (0, e.BC)`${f}/verify-email`,
				b = {
					addSite: h,
					domains: f,
					domainsDomain: P,
					domainsDomainConfiguration: F,
					domainsDomainContacts: M,
					domainsPricing: U,
					domainsProtection: L,
					domainsRegister: I,
					domainsRegisterCheckout: q,
					domainsRegisterSuccess: Q,
					domainsTlds: Y,
					domainsTransfer: W,
					domainsTransferZone: K,
					registrarAccountsVerifyEmail: j,
					registrarDomainsVerifyEmail: N,
					verifyEmail: O
				},
				V = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(G, y, n) {
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
				d = n.n(l),
				m = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function i(s) {
				for (var u = 1; u < arguments.length; u++) {
					var a = arguments[u] != null ? Object(arguments[u]) : {},
						h = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(a).filter(function(f) {
						return Object.getOwnPropertyDescriptor(a, f).enumerable
					})), h.forEach(function(f) {
						g(s, f, a[f])
					})
				}
				return s
			}

			function g(s, u, a) {
				return u = p(u), u in s ? Object.defineProperty(s, u, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[u] = a, s
			}

			function p(s) {
				var u = _(s, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function _(s, u) {
				if (typeof s != "object" || s === null) return s;
				var a = s[Symbol.toPrimitive];
				if (a !== void 0) {
					var h = a.call(s, u || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(s)
			}
			let t = function(s) {
				return s.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", s.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", s.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", s.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", s.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", s.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", s.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", s.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", s.RENEW_DOMAIN_COMPLETED = "domain renewal completed", s.RESTORE_DOMAIN_INIT = "click to open domain restore modal", s.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", s.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", s.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", s.RESTORE_DOMAIN_FAILURE = "domain restore failed", s.RESTORE_DOMAIN_COMPLETED = "domain restore completed", s.DOMAIN_DELETE_INIT = "click to begin domain delete", s.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", s.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", s.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", s.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", s.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", s.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", s.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", s.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", s.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", s.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", s
			}({});

			function r(s, u, a) {
				if (!(u == null ? void 0 : u.name)) return null;
				d().sendEvent(s, i({
					domain: {
						name: u.name,
						premium: (0, m.Uy)(u == null ? void 0 : u.premiumType),
						paymentExpiresAt: o()(u == null ? void 0 : u.paymentExpiresAt).format()
					},
					category: "registrar"
				}, a))
			}
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "update dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				KO: function() {
					return g
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

			function l(r) {
				for (var s = 1; s < arguments.length; s++) {
					var u = arguments[s] != null ? Object(arguments[s]) : {},
						a = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(u).filter(function(h) {
						return Object.getOwnPropertyDescriptor(u, h).enumerable
					})), a.forEach(function(h) {
						d(r, h, u[h])
					})
				}
				return r
			}

			function d(r, s, u) {
				return s = m(s), s in r ? Object.defineProperty(r, s, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = u, r
			}

			function m(r) {
				var s = i(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function i(r, s) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var a = u.call(r, s || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}
			let g = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r
				}({}),
				p = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				_ = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const t = (r, s = {}) => {
				o().sendEvent(r, l({}, s, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(G, y, n) {
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
		"../react/pages/magic/overview/tracking.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				lC: function() {
					return l
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
				l = "user journey"
		},
		"../react/pages/magic/packet-captures/constants.ts": function(G, y, n) {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(G, y, n) {
			"use strict";
			n.d(y, {
				gb: function() {
					return t
				},
				iP: function() {
					return Q
				},
				xL: function() {
					return F
				},
				rD: function() {
					return W
				},
				oT: function() {
					return a
				},
				i2: function() {
					return K
				},
				x1: function() {
					return i
				},
				lW: function() {
					return p
				},
				UA: function() {
					return I
				},
				K5: function() {
					return s
				},
				Ii: function() {
					return U
				},
				PJ: function() {
					return Y
				},
				bK: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				m = n("../../../../node_modules/@cloudflare/elements/es/index.js");
			const i = () => o().createElement(g, null, o().createElement("svg", {
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
				g = (0, l.createComponent)(({
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
				_ = (0, l.createComponent)(({
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
				t = () => o().createElement(r, null, o().createElement(m.Ei, {
					alt: "airplane",
					src: d,
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
				s = () => o().createElement(u, null, o().createElement("svg", {
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
				u = (0, l.createComponent)(({
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
				a = () => o().createElement(h, null, o().createElement("svg", {
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
				h = (0, l.createComponent)(({
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
				f = () => o().createElement(P, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				P = (0, l.createComponent)(({
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
				F = () => o().createElement(M, null, o().createElement("svg", {
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
				M = (0, l.createComponent)(({
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
				U = () => o().createElement(L, null, o().createElement("svg", {
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
				L = (0, l.createComponent)(({
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
				I = () => o().createElement(q, null, o().createElement("svg", {
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
				q = (0, l.createComponent)(({
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
				Q = () => o().createElement("svg", {
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
				Y = () => o().createElement("svg", {
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
				W = () => o().createElement("svg", {
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
				K = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				A2: function() {
					return g
				},
				He: function() {
					return m
				},
				N$: function() {
					return i
				},
				Qq: function() {
					return l
				},
				ST: function() {
					return d
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
				d = "cf-test",
				m = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				i = p => [{
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
		"../react/pages/pages/constants.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				A: function() {
					return f
				},
				C1: function() {
					return _
				},
				Dp: function() {
					return W
				},
				HD: function() {
					return M
				},
				IK: function() {
					return m
				},
				L7: function() {
					return l
				},
				Li: function() {
					return h
				},
				Ni: function() {
					return q
				},
				OG: function() {
					return b
				},
				QF: function() {
					return N
				},
				QV: function() {
					return I
				},
				Sx: function() {
					return U
				},
				Ub: function() {
					return j
				},
				X3: function() {
					return r
				},
				aP: function() {
					return g
				},
				eO: function() {
					return s
				},
				fH: function() {
					return a
				},
				fQ: function() {
					return P
				},
				fR: function() {
					return e
				},
				hE: function() {
					return K
				},
				iS: function() {
					return F
				},
				ku: function() {
					return Y
				},
				nY: function() {
					return L
				},
				w3: function() {
					return d
				},
				wJ: function() {
					return p
				},
				wp: function() {
					return u
				},
				yu: function() {
					return t
				},
				zG: function() {
					return Q
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-pages",
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
				d = "Allow Members - Cloudflare Pages",
				m = 58,
				i = {
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
				_ = 100,
				t = 350,
				r = 1e7,
				s = ["Success:", "Error:", "Failed:"],
				u = 10,
				a = "_headers",
				h = "_redirects",
				f = "_routes.json",
				P = "_worker.js",
				F = "do-a-barrel-roll",
				M = [a, h, f, P],
				U = 1024 * 1024 * 25,
				L = 1e3,
				I = {
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
				q = 1e5,
				Q = 75e3,
				Y = "workers",
				W = "cloudflare_pages_build_caching",
				K = 2;
			let j = function(V) {
				return V[V.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", V[V.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", V[V.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", V[V.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", V[V.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", V[V.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", V
			}({});
			const N = 1,
				O = 2,
				b = 2
		},
		"../react/pages/pages/routes.ts": function(G, y, n) {
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
				d = m => `${m.subdomain}.pages.dev`
		},
		"../react/pages/r2/routes.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				Hv: function() {
					return l
				},
				Jg: function() {
					return i
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
				d = t => {
					const r = "r2.cloudflarestorage.com";
					switch (t) {
						case "default":
							return r;
						case "eu":
							return `eu.${r}`
					}
				},
				m = (t, r) => {
					const s = d(r);
					return `https://${t}.${s}`
				},
				i = (t, r, s) => `${m(t,r)}/${s}`,
				g = () => "r2.dev",
				p = t => {
					const r = g();
					return `https://${t}.${r}`
				},
				_ = (t, r) => `${p(t)}/${r}`
		},
		"../react/pages/security-center/tracking.ts": function(G, y, n) {
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
		"../react/pages/spectrum/tracking.tsx": function(G, y, n) {
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
		"../react/pages/traffic/argo/tracking.ts": function(G, y, n) {
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
		"../react/pages/traffic/load-balancing/tracking.ts": function(G, y, n) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(G, y, n) {
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
		"../react/pages/welcome/routes.ts": function(G, y, n) {
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
				root: (0, e.BC)`/${"accountId"}/welcome`
			}
		},
		"../react/pages/zoneless-workers/constants.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
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
					return s
				},
				QV: function() {
					return u
				},
				X$: function() {
					return P
				},
				X6: function() {
					return _
				},
				fE: function() {
					return p
				},
				im: function() {
					return h
				},
				rL: function() {
					return t
				},
				wW: function() {
					return i
				}
			});

			function e(U) {
				for (var L = 1; L < arguments.length; L++) {
					var I = arguments[L] != null ? Object(arguments[L]) : {},
						q = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(I).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(I, Q).enumerable
					})), q.forEach(function(Q) {
						o(U, Q, I[Q])
					})
				}
				return U
			}

			function o(U, L, I) {
				return L = l(L), L in U ? Object.defineProperty(U, L, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[L] = I, U
			}

			function l(U) {
				var L = d(U, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function d(U, L) {
				if (typeof U != "object" || U === null) return U;
				var I = U[Symbol.toPrimitive];
				if (I !== void 0) {
					var q = I.call(U, L || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(U)
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
				i = 800,
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
					clickedDiscordLink: "clicked sidebar Discord link",
					clickedCommunityLink: "clicked sidebar Community Forum link",
					clickDetailTab: "click worker detail tab",
					clickedBundledUsageModel: "Workers:Clicked Bundled Usage Model",
					clickedUnboundUsageModel: "Workers:Clicked Unbound Usage Model",
					clickedGreenComputeSetting: "Workers:Clicked Green Compute Setting",
					clickedGlobalComputeSetting: "Workers:Clicked Global Compute Setting"
				},
				a = "workers.dev",
				h = "YYYY-MM-DD HH:mm:SS ZZ",
				f = "active",
				P = ["bundled", "unbound", "standard"],
				F = null,
				M = {
					bandaWorkersCI: "banda-workers-ui"
				}
		},
		"../react/pages/zoneless-workers/routes.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				Hv: function() {
					return g
				},
				L: function() {
					return l
				},
				Q9: function() {
					return d
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
				l = (p, _, t) => `${t?`${t}.`:""}${p}.${o(_)}`,
				d = (p, _, t) => `https://${l(p,_,t)}`,
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
				i = "https://cron-triggers.cloudflareworkers.com",
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
					describeCron: `${i}/describe`,
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
					nextCron: `${i}/next`,
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
					validateCron: `${i}/validate`,
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
			(function(G, y) {
				y()
			})(this, function() {
				"use strict";

				function G() {
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

					function d(f) {
						return !!(f && f !== document && f.nodeName !== "HTML" && f.nodeName !== "BODY" && "classList" in f && "contains" in f.classList)
					}

					function m(f) {
						var P = f.type,
							F = f.tagName;
						return !!(F == "INPUT" && l[P] && !f.readOnly || F == "TEXTAREA" && !f.readOnly || f.isContentEditable)
					}

					function i(f) {
						f.getAttribute("is-focus-visible") !== "" && f.setAttribute("is-focus-visible", "")
					}

					function g(f) {
						f.getAttribute("is-focus-visible") === "" && f.removeAttribute("is-focus-visible")
					}

					function p(f) {
						d(document.activeElement) && i(document.activeElement), n = !0
					}

					function _(f) {
						n = !1
					}

					function t(f) {
						!d(f.target) || (n || m(f.target)) && i(f.target)
					}

					function r(f) {
						!d(f.target) || f.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), g(f.target))
					}

					function s(f) {
						document.visibilityState == "hidden" && (e && (n = !0), u())
					}

					function u() {
						document.addEventListener("mousemove", h), document.addEventListener("mousedown", h), document.addEventListener("mouseup", h), document.addEventListener("pointermove", h), document.addEventListener("pointerdown", h), document.addEventListener("pointerup", h), document.addEventListener("touchmove", h), document.addEventListener("touchstart", h), document.addEventListener("touchend", h)
					}

					function a() {
						document.removeEventListener("mousemove", h), document.removeEventListener("mousedown", h), document.removeEventListener("mouseup", h), document.removeEventListener("pointermove", h), document.removeEventListener("pointerdown", h), document.removeEventListener("pointerup", h), document.removeEventListener("touchmove", h), document.removeEventListener("touchstart", h), document.removeEventListener("touchend", h)
					}

					function h(f) {
						f.target.nodeName.toLowerCase() !== "html" && (n = !1, a())
					}
					document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", _, !0), document.addEventListener("pointerdown", _, !0), document.addEventListener("touchstart", _, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", s, !0), u(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function y(n) {
					var e;

					function o() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && y(G)
			})
		},
		"../react/utils/api.ts": function(G, y, n) {
			"use strict";
			n.r(y), n.d(y, {
				attachAtokHeader: function() {
					return P
				},
				attachErrorHandler: function() {
					return U
				},
				authyAuthConfirmNumber: function() {
					return w
				},
				authyAuthPutSave: function() {
					return re
				},
				basePath: function() {
					return h
				},
				fetchCertificateApiKey: function() {
					return j
				},
				fetchUserServiceKey: function() {
					return W
				},
				performLogout: function() {
					return Y
				},
				prependApiRoute: function() {
					return F
				},
				sendCookies: function() {
					return M
				},
				twoFacDisableDelete: function() {
					return V
				},
				twoFacGoogleAuthEnablePost: function() {
					return O
				},
				twoFacGoogleAuthQRCodeGet: function() {
					return b
				},
				updateCertificateApiKey: function() {
					return N
				},
				updateUserServiceKey: function() {
					return K
				},
				validateOptions: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e),
				l = n("../react/app/providers/storeContainer.js"),
				d = n("../react/common/actions/notificationsActions.ts"),
				m = n("../react/utils/translator.tsx"),
				i = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				g = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				_ = n.n(p),
				t = n("../../../../node_modules/@sentry/core/esm/exports.js");

			function r(H) {
				for (var k = 1; k < arguments.length; k++) {
					var T = arguments[k] != null ? Object(arguments[k]) : {},
						B = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(T).filter(function($) {
						return Object.getOwnPropertyDescriptor(T, $).enumerable
					})), B.forEach(function($) {
						s(H, $, T[$])
					})
				}
				return H
			}

			function s(H, k, T) {
				return k = u(k), k in H ? Object.defineProperty(H, k, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : H[k] = T, H
			}

			function u(H) {
				var k = a(H, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function a(H, k) {
				if (typeof H != "object" || H === null) return H;
				var T = H[Symbol.toPrimitive];
				if (T !== void 0) {
					var B = T.call(H, k || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(H)
			}
			const h = "/api/v4",
				f = H => {
					H.url.charAt(0) !== "/" && (H.url = `/${H.url}`)
				},
				P = H => {
					n.g.bootstrap && n.g.bootstrap.atok && (H.headers = r({}, H.headers, {
						"X-ATOK": n.g.bootstrap.atok
					}))
				},
				F = H => {
					H.url = h + H.url
				},
				M = H => {
					H.credentials = "same-origin"
				},
				U = H => {
					const k = H.callback;
					H.callback = (T, B) => {
						T && !H.hideErrorAlert && L(T, H), k && k(T, B)
					}
				},
				L = (H, k) => {
					const T = H.body && H.body.errors;
					(T ? q(k, T) : Q(k, H)).forEach($ => {
						(0, l.bh)().dispatch(d.IH("error", typeof $ == "string" ? $ : $.message)), _().sendEvent("error notification shown", {
							errorCode: typeof $ == "string" ? void 0 : $.code
						}), {
							REDUX_LOGGER: void 0
						}.TESTING && n.g.logAppError(typeof $ == "string" ? $ : $.message)
					})
				};

			function I(H, k) {
				return !!(k.code === 1001 && H.url && H.url.match(/subscription/gi) || k.code === 10042 && H.url && H.url.match(/r2/gi))
			}
			const q = (H, k) => k.filter(T => !I(H, T)).map(({
					message: T,
					code: B,
					error_chain: $
				}) => {
					switch (B) {
						case 9300:
						case 9301:
						case 9303:
							Y();
						default:
							break
					}
					const ne = T.split(" ").length > 1,
						ie = T.split(".").length > 1,
						x = !ne && ie;
					let oe = T;
					if (x) try {
						oe = (0, m.ZP)(T)
					} catch {}
					if (T.startsWith("billing.")) return {
						message: `Error while processing payment: ${oe}.`,
						code: B
					};
					const Z = Array.isArray($) ? $.map(de => de.message).join(". ") : "";
					return {
						message: `${oe}${typeof B!="undefined"?` (Code: ${B})`:""} ${Z}`,
						code: B
					}
				}),
				Q = (H, k) => [`API Request Failed: ${H.method} ${H.url} (${k.status})`];
			e.beforeSend(f), e.beforeSend(P), e.beforeSend(F), e.beforeSend(M), e.beforeSend(U);
			const Y = H => e.del("/user/sessions/current").then(k => {
				if (i.E.remove(g.Qq), H) window.location.href = H;
				else {
					var T, B;
					const $ = (T = (B = k.body.result) === null || B === void 0 ? void 0 : B.redirect_uri) !== null && T !== void 0 ? T : "/login";
					window.location.href = $
				}
			}).catch(k => {
				console.error("Failed to logout", k), t.Tb(k)
			});

			function W(H) {
				return e.get("/user/service_keys/" + H)
			}

			function K(H, k) {
				return e.put("/user/service_keys/" + H, {
					body: k
				})
			}

			function j(H) {
				return e.post("/user/service_keys/certificateapi", {
					body: H
				})
			}

			function N(H) {
				return e.put("/user/service_keys/certificateapi", {
					body: H
				})
			}
			const O = function(H, k) {
					var T = {
						google_auth_code: H
					};
					return e.post("/user/two_factor_authentication/google_authenticator/enable", {
						body: T
					}, k)
				},
				b = function(H) {
					return e.get("/user/two_factor_authentication/google_authenticator/qr_code", void 0, H)
				},
				V = function(H, k) {
					var T = {
						auth_token: H
					};
					return e.del("/user/two_factor_authentication", {
						body: T
					}, k)
				},
				w = function(H, k) {
					return e.post("/user/two_factor_authentication", {
						body: H
					}, k)
				},
				re = function(H, k) {
					return e.put("/user/two_factor_authentication", {
						body: H
					}, k)
				}
		},
		"../react/utils/bootstrap.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
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
					return l
				}
			});
			const e = () => {
					var m, i, g;
					return (m = window) === null || m === void 0 || (i = m.bootstrap) === null || i === void 0 || (g = i.data) === null || g === void 0 ? void 0 : g.security_token
				},
				o = () => {
					var m, i, g;
					return !!((m = n.g.bootstrap) === null || m === void 0 || (i = m.data) === null || i === void 0 || (g = i.user) === null || g === void 0 ? void 0 : g.id)
				},
				l = () => {
					var m, i;
					return !!((m = n.g.bootstrap) === null || m === void 0 || (i = m.data) === null || i === void 0 ? void 0 : i.is_kendo)
				},
				d = () => {
					var m, i, g, p;
					return (m = window) === null || m === void 0 || (i = m.bootstrap) === null || i === void 0 || (g = i.data) === null || g === void 0 || (p = g.user) === null || p === void 0 ? void 0 : p.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				O5: function() {
					return d
				},
				Xm: function() {
					return l
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
				l = () => (o() || "").indexOf("C0002") !== -1,
				d = () => (o() || "").indexOf("C0003") !== -1,
				m = () => (o() || "").indexOf("C0004") !== -1,
				i = () => (o() || "").indexOf("C0005") !== -1,
				g = t => {
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
		"../react/utils/i18n.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				AI: function() {
					return P
				},
				S8: function() {
					return f
				},
				ZW: function() {
					return i
				},
				ay: function() {
					return F
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
					return _
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				l = n("../../../common/intl/intl-types/src/index.ts"),
				d = n("../../../common/util/types/src/utils/index.ts");
			const m = "cf-sync-locale-with-cps",
				i = l.Q.en_US,
				g = "en_US",
				p = "cf-locale",
				_ = q => (0, d.Yd)(l.Q).find(Q => l.Q[Q] === q) || g,
				t = [],
				r = [],
				s = [l.Q.de_DE, l.Q.en_US, l.Q.es_ES, l.Q.fr_FR, l.Q.it_IT, l.Q.pt_BR, l.Q.ko_KR, l.Q.ja_JP, l.Q.zh_CN, l.Q.zh_TW],
				u = [l.Q.de_DE, l.Q.en_US, l.Q.es_ES, l.Q.es_CL, l.Q.es_EC, l.Q.es_MX, l.Q.es_PE, l.Q.fr_FR, l.Q.it_IT, l.Q.ja_JP, l.Q.ko_KR, l.Q.pt_BR, l.Q.zh_CN, l.Q.zh_TW],
				a = {
					test: [...s, ...r, ...t],
					development: [...s, ...r, ...t],
					staging: [...s, ...r, ...t],
					production: [...s, ...r]
				},
				h = {
					test: [...u, ...r, ...t],
					development: [...u, ...r, ...t],
					staging: [...u, ...r, ...t],
					production: [...u, ...r]
				},
				f = (q, Q) => {
					const Y = l.Q[Q];
					return q ? a.production.includes(Y) : h.production.includes(Y)
				},
				P = q => Object.keys(l.Q).filter(Q => f(q, Q)),
				F = q => {
					const Q = l.Q[q];
					return r.includes(Q)
				},
				M = (q, Q) => q ? U[Q] : L[Q],
				U = {
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
				L = {
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
				I = o().locale();
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
			}), o().locale(I)
		},
		"../react/utils/translator.tsx": function(G, y, n) {
			"use strict";
			n.d(y, {
				QT: function() {
					return u
				},
				Vb: function() {
					return g
				},
				Yi: function() {
					return _
				},
				ZP: function() {
					return i
				},
				_m: function() {
					return t
				},
				cC: function() {
					return r
				},
				oc: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = n("../../../common/intl/intl-core/src/Translator.ts"),
				l = n("../../../common/intl/intl-react/src/index.ts");
			const d = n("../flags.js").J8,
				m = new o.Z({
					pseudoLoc: d("is_pseudo_loc")
				});

			function i(a, ...h) {
				return m.t(a, ...h)
			}
			const g = m;

			function p(a, ...h) {
				return markdown(i(a, h))
			}

			function _(a) {
				if (Number(a) !== 0) {
					if (a % 86400 == 0) return i("time.num_days", {
						smart_count: a / 86400
					});
					if (a % 3600 == 0) return i("time.num_hours", {
						smart_count: a / 3600
					});
					if (a % 60 == 0) return i("time.num_minutes", {
						smart_count: a / 60
					})
				}
				return i("time.num_seconds", {
					smart_count: a
				})
			}

			function t(a, h) {
				return a in h ? h[a] : void 0
			}
			const r = l.cC,
				s = l.oc,
				u = l.QT
		},
		"../react/utils/url.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				Ct: function() {
					return U
				},
				Fl: function() {
					return $
				},
				KT: function() {
					return ie
				},
				NF: function() {
					return h
				},
				Nw: function() {
					return F
				},
				Pd: function() {
					return P
				},
				Uh: function() {
					return k
				},
				Y_: function() {
					return a
				},
				e1: function() {
					return M
				},
				el: function() {
					return j
				},
				hW: function() {
					return O
				},
				pu: function() {
					return ne
				},
				qR: function() {
					return K
				},
				td: function() {
					return f
				},
				uW: function() {
					return V
				}
			});
			var e = n("../../../../node_modules/query-string/query-string.js"),
				o = n.n(e),
				l = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				d = n("../react/pages/stream/routes.ts"),
				m = n("../react/pages/r2/routes.ts"),
				i = n("../react/pages/zoneless-workers/routes.ts"),
				g = n("../react/pages/pages/routes.ts");

			function p(x) {
				for (var oe = 1; oe < arguments.length; oe++) {
					var Z = arguments[oe] != null ? Object(arguments[oe]) : {},
						de = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(Z).filter(function(ge) {
						return Object.getOwnPropertyDescriptor(Z, ge).enumerable
					})), de.forEach(function(ge) {
						_(x, ge, Z[ge])
					})
				}
				return x
			}

			function _(x, oe, Z) {
				return oe = t(oe), oe in x ? Object.defineProperty(x, oe, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[oe] = Z, x
			}

			function t(x) {
				var oe = r(x, "string");
				return typeof oe == "symbol" ? oe : String(oe)
			}

			function r(x, oe) {
				if (typeof x != "object" || x === null) return x;
				var Z = x[Symbol.toPrimitive];
				if (Z !== void 0) {
					var de = Z.call(x, oe || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (oe === "string" ? String : Number)(x)
			}
			const {
				endsWithSlash: s
			} = l.default, u = (x, oe) => {
				const Z = x.replace(s, "").split("/");
				return Z.slice(0, 2).concat([oe]).concat(Z.slice(3)).join("/")
			}, a = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), h = x => `/${x.replace(s,"").replace(/^\//,"")}`, f = x => F("add-site", x), P = x => F("billing", x), F = (x, oe) => oe ? `/${oe}${x?`/${x}`:""}` : `/?to=/:account/${x}`, M = () => {
				const x = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return x ? x[1] : null
			}, U = (x, oe) => o().stringify(p({}, o().parse(x), oe)), L = (x = "") => x.toString().replace(/([\/]{1,})$/, ""), I = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], q = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, Q = /^\/(\w{32,})(\/[^.]*)?/, Y = x => I.includes(x), W = x => !Y(x), K = x => !Y(x) && Q.test(x), j = x => !Y(x) && q.test(x), N = x => q.exec(x), O = x => {
				if (j(x)) return x.split("/").filter(oe => oe.length > 0)[1]
			}, b = x => Q.exec(x), V = x => {
				if (K(x)) {
					const oe = b(x);
					if (oe) return oe[1]
				}
			}, w = x => K(x) && x.split("/")[2] === "register-domain", re = x => w(x) ? x.split("/") : null, H = x => {
				if (j(x)) {
					const [, , , oe, Z, de, ge, me] = x.split("/");
					return oe === "traffic" && Z === "load-balancing" && de === "pools" && ge === "edit" && me
				}
			}, k = x => {
				const oe = re(x);
				if (oe) return oe[3]
			}, T = (x, oe) => {
				var Z, de;
				return ((Z = x.pattern.match(/\:/g)) !== null && Z !== void 0 ? Z : []).length - ((de = oe.pattern.match(/\:/g)) !== null && de !== void 0 ? de : []).length
			}, B = [...Object.values(d.C), ...Object.values(m._j), ...Object.values(i._j), ...Object.values(g._j)].sort(T);

			function $(x) {
				if (!W(x)) return x;
				for (const me of B)
					if (me.expression.test(x)) return me.pattern;
				const oe = re(x);
				if (oe) {
					const [, , me, , ...Ce] = oe;
					return `/:accountId/${me}/:domainName/${Ce.join("/")}`
				}
				if (H(x)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const de = N(x);
				if (de) {
					const [, , , , me] = de;
					return `/:accountId/:zoneName${me||""}`
				}
				const ge = b(x);
				if (ge) {
					const [, , me] = ge;
					return `/:accountId${me||""}`
				}
				return x
			}

			function ne(x) {
				if (!!x) try {
					const Z = x.split(".").pop();
					if (Z && Z.length > 0) return Z
				} catch {}
			}

			function ie(x, oe = document.location.href) {
				try {
					const Z = new URL(x),
						de = new URL(oe);
					if (Z.origin === de.origin) return `${Z.pathname}${Z.search}${Z.hash}`
				} catch {}
			}
		},
		"../react/utils/zaraz.ts": function(G, y, n) {
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
		"../utils/getDashVersion.ts": function(G, y, n) {
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
					var d, m;
					return (d = window) === null || d === void 0 || (m = d.build) === null || m === void 0 ? void 0 : m.dashVersion
				},
				l = () => {
					var d;
					return ((0, e.parse)((d = document) === null || d === void 0 ? void 0 : d.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				Wi: function() {
					return Ze
				},
				IM: function() {
					return Xe
				},
				yV: function() {
					return je
				},
				Ug: function() {
					return Ve
				},
				v_: function() {
					return xe
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				l = n("../react/utils/bootstrap.ts"),
				d = n("../react/app/providers/storeContainer.js"),
				m = n("../react/common/selectors/languagePreferenceSelector.ts"),
				i = n("../flags.js"),
				g = n("../../../../node_modules/cookie/index.js"),
				p = n("../react/utils/url.ts"),
				_ = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../../../../node_modules/lodash-es/memoize.js"),
				s = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				u = n("../utils/getDashVersion.ts"),
				a = n("../react/common/selectors/accountSelectors.ts");

			function h(te) {
				for (var se = 1; se < arguments.length; se++) {
					var C = arguments[se] != null ? Object(arguments[se]) : {},
						D = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(C).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(C, ee).enumerable
					})), D.forEach(function(ee) {
						f(te, ee, C[ee])
					})
				}
				return te
			}

			function f(te, se, C) {
				return se = P(se), se in te ? Object.defineProperty(te, se, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : te[se] = C, te
			}

			function P(te) {
				var se = F(te, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function F(te, se) {
				if (typeof te != "object" || te === null) return te;
				var C = te[Symbol.toPrimitive];
				if (C !== void 0) {
					var D = C.call(te, se || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(te)
			}
			const M = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				U = (0, r.Z)(te => {
					try {
						return M.assertDecode((0, g.parse)(te))
					} catch (se) {
						return console.error(se), {}
					}
				}),
				L = te => (se, C, D) => {
					try {
						const Ie = window.location.pathname,
							Se = (0, d.bh)().getState(),
							fe = U(document.cookie),
							we = h({
								page: (0, p.Fl)(D.page || window.location.pathname),
								dashVersion: (0, u.t)()
							}, fe);
						if (se === "identify") {
							var ee, Te;
							const $e = {
								gates: (0, s.T2)(Se) || {},
								country: (ee = n.g) === null || ee === void 0 || (Te = ee.bootstrap) === null || Te === void 0 ? void 0 : Te.ip_country
							};
							return te(se, C, h({}, we, $e, D))
						} else {
							const $e = {
								accountId: (0, p.uW)(Ie),
								zoneName: (0, p.hW)(Ie),
								domainName: (0, p.Uh)(Ie)
							};
							if ((0, p.qR)(Ie)) {
								var Pe;
								const Ae = (0, a.D0)(Se);
								$e.isEntAccount = Ae == null || (Pe = Ae.meta) === null || Pe === void 0 ? void 0 : Pe.has_enterprise_zones
							}
							if ((0, p.el)(Ie)) {
								var Oe;
								const Ae = (0, _.nA)(Se);
								$e.zoneId = Ae == null ? void 0 : Ae.id, $e.plan = Ae == null || (Oe = Ae.plan) === null || Oe === void 0 ? void 0 : Oe.legacy_id
							}
							return te(se, C, h({}, we, $e, D))
						}
					} catch (Ie) {
						return console.error(Ie), te(se, C, D)
					}
				},
				I = te => async (se, C, D) => {
					try {
						return await te(se, C, D)
					} catch (ee) {
						if (console.error(ee), !xe()) throw ee;
						return {
							status: "rejected",
							reason: ee
						}
					}
				};
			var q = n("../react/common/middleware/sparrow/errors.ts"),
				Q = n("../react/pages/firewall/bots/tracking.ts"),
				Y = n("../react/pages/caching/tracking.tsx"),
				W = n("../react/pages/magic/packet-captures/constants.ts"),
				K = n("../react/pages/firewall/page-shield/tracking.ts"),
				j = n("../react/pages/firewall/rulesets/tracking.tsx"),
				N = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				O = n("../react/pages/spectrum/tracking.tsx"),
				b = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				V = n("../react/pages/security-center/tracking.ts"),
				w = n("../react/pages/firewall/api-shield/tracking.ts"),
				re = n("../react/pages/home/configurations/lists/tracking.ts"),
				H = n("../react/pages/traffic/load-balancing/tracking.ts"),
				k = n("../react/pages/home/alerts/tracking.ts"),
				T = n("../react/pages/dns/dns-records/tracking.ts"),
				B = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				$ = n("../react/pages/traffic/argo/tracking.ts"),
				ne = n("../react/pages/magic/network-monitoring/constants.ts"),
				ie = n("../react/pages/firewall/security-analytics/logs/constants.ts"),
				x = n("../react/pages/magic/overview/tracking.ts"),
				oe = n("../react/pages/hyperdrive/tracking.ts"),
				Z = n("../react/pages/home/domain-registration/tracking.ts"),
				de = n("../react/pages/zoneless-workers/constants.ts"),
				ge = n("../react/pages/pages/constants.ts");
			const Ce = ((te, se, ...C) => t.eg.union([t.eg.literal(te), t.eg.literal(se), ...C.map(D => t.eg.literal(D))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click cancel downgrade", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create database dropdown", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on edit snippet", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "Explore demo button click", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open configuration switcher sidemodal", "open create database panel", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "Request trial button click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", de.QV.clickedDownloadAnalytics, de.QV.clickedPrintAnalytics, de.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", ge.QV.toggledPagesSmartPlacement, ge.QV.downloadDemoProject, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", Q.N3.INITIAL_FETCH_SCORES, Q.N3.FETCH_CONFIGURATION, Q.N3.INITIAL_FETCH_TIME_SERIES, Q.N3.INITIAL_FETCH_ATTRIBUTES, Q.N3.UPDATE_SETTINGS, Q.N3.DELETE_RULE, Q.N3.UPDATE_RULE, Q.N3.FETCH_RULES, Q.N3.CONFIGURE_BOT_MANAGEMENT, Q.N3.WAF_RULES_REDIRECT, b.F.TOGGLE_TCP_PROTECTION, b.F.GET_TCP_PROTECTION_PREFIXES, b.F.CREATE_TCP_PROTECTION_PREFIXES, b.F.CREATE_TCP_PROTECTION_PREFIX, b.F.UPDATE_TCP_PROTECTION_PREFIX, b.F.DELETE_TCP_PROTECTION_PREFIX, b.F.DELETE_TCP_PROTECTION_PREFIXES, b.F.GET_TCP_PROTECTION_ALLOWLIST, b.F.CREATE_TCP_PROTECTION_ALLOWLIST, b.F.UPDATE_TCP_PROTECTION_ALLOWLIST, b.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, b.F.DELETE_TCP_PROTECTION_ALLOWLIST, b.F.GET_SYN_PROTECTION_RULES, b.F.GET_SYN_PROTECTION_RULE, b.F.CREATE_SYN_PROTECTION_RULE, b.F.UPDATE_SYN_PROTECTION_RULE, b.F.DELETE_SYN_PROTECTION_RULE, b.F.GET_TCP_FLOW_PROTECTION_RULES, b.F.GET_TCP_FLOW_PROTECTION_RULE, b.F.CREATE_TCP_FLOW_PROTECTION_RULE, b.F.UPDATE_TCP_FLOW_PROTECTION_RULE, b.F.DELETE_TCP_FLOW_PROTECTION_RULE, b.F.GET_SYN_PROTECTION_FILTERS, b.F.GET_SYN_PROTECTION_FILTER, b.F.CREATE_SYN_PROTECTION_FILTER, b.F.UPDATE_SYN_PROTECTION_FILTER, b.F.DELETE_SYN_PROTECTION_FILTER, b.F.GET_TCP_FLOW_PROTECTION_FILTERS, b.F.GET_TCP_FLOW_PROTECTION_FILTER, b.F.CREATE_TCP_FLOW_PROTECTION_FILTER, b.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, b.F.DELETE_TCP_FLOW_PROTECTION_FILTER, b.F.GET_DNS_PROTECTION_RULES, b.F.GET_DNS_PROTECTION_RULE, b.F.CREATE_DNS_PROTECTION_RULE, b.F.UPDATE_DNS_PROTECTION_RULE, b.F.DELETE_DNS_PROTECTION_RULE, K.F.MANAGE_PAGE_SHIELD_POLICY, K.F.CONFIGURE_PAGE_SHIELD, K.F.VIEW_DETECTED_CONNECTIONS, K.F.VIEW_DETECTED_SCRIPTS, K.F.VIEW_PAGE_SHIELD_POLICIES, K.F.VIEW_PAGE_SHIELD_SETTINGS, re.y.CREATE_LIST, re.y.DELETE_LIST, re.y.ADD_LIST_ITEM, re.y.DELETE_LIST_ITEM, oe.KO.PURCHASE_WORKERS_PAID, oe.KO.LIST_CONFIGS, oe.KO.CREATE_HYPERDRIVE_CONFIG, oe.KO.VIEW_CONFIG_DETAILS, oe.KO.UPDATE_CACHING_SETTINGS, oe.KO.DELETE_HYPERDRIVE_CONFIG, oe.KO.CLICK_HYPERDRIVE_DOCUMENTATION, oe.KO.CLICK_GET_STARTED_GUIDE, oe.KO.CLICK_CONNECTIVITY_GUIDES, oe.KO.CLICK_QUICK_LINK, O.N.CNAME, O.N.IP_ADDRESS, O.N.LB, O.N.UPDATE_CNAME, O.N.UPDATE_IP_ADDRESS, O.N.UPDATE_LB, O.N.DISABLE, Y.N.TIERED_CACHE, Y.N.CACHE_PURGE, Y.N.CACHE_ANALYTICS, ...(0, j.x4)(), N.N.CREATE, N.N.EVENTS, N.N.ANALYTICS, N.N.UPDATE, N.N.GENERATE_PREVIEW, V.R.INITIATE_URL_SCAN, V.R.LOAD_SCAN_INFO, V.v.EXPAND_INSIGHT_ROW, V.v.CLICK_RESOLVE_BUTTON, V.v.FOLLOW_RESOLVE_URL, V.v.MANAGE_INSIGHT, V.v.CLICK_SCAN_NOW, V.v.CLICK_EXPORT_INSIGHTS, V.v.BULK_ARCHIVE, w.Fj[w.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, w.Fj[w.kq.ENDPOINT_MANAGEMENT].detailedMetrics, w.Fj[w.kq.ENDPOINT_MANAGEMENT].createEndpoint, w.Fj[w.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, w.Fj[w.kq.ENDPOINT_MANAGEMENT].deployRouting, w.Fj[w.kq.ENDPOINT_MANAGEMENT].deleteRouting, w.Fj[w.kq.API_DISCOVERY].viewDiscoveredEndpoints, w.Fj[w.kq.API_DISCOVERY].saveDiscoveredEndpoint, w.Fj[w.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, w.Fj[w.kq.SCHEMA_VALIDATION].viewSchemasList, w.Fj[w.kq.SCHEMA_VALIDATION].uploadSchema, w.Fj[w.kq.SCHEMA_VALIDATION].viewSchemaAdoption, w.Fj[w.kq.SCHEMA_VALIDATION].downloadSchema, w.Fj[w.kq.SCHEMA_VALIDATION].deleteSchema, w.Fj[w.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, w.Fj[w.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, w.Fj[w.kq.SEQUENCE_ANALYTICS].viewSequencesPage, w.Fj[w.kq.JWT_VALIDATION].viewJWTRules, w.Fj[w.kq.JWT_VALIDATION].addJWTRule, w.Fj[w.kq.JWT_VALIDATION].editJWTRule, w.Fj[w.kq.JWT_VALIDATION].deleteJWTRule, w.Fj[w.kq.JWT_VALIDATION].reprioritizeJWTRule, w.Fj[w.kq.JWT_VALIDATION].viewJWTConfigs, w.Fj[w.kq.JWT_VALIDATION].addJWTConfig, w.Fj[w.kq.JWT_VALIDATION].editJWTConfig, w.Fj[w.kq.JWT_VALIDATION].deleteJWTConfig, w.Fj[w.kq.SETTINGS].redirectToFirewallRulesTemplate, w.Fj[w.kq.SETTINGS].redirectToPages, w.Fj[w.kq.SETTINGS].listSessionIdentifiers, w.Fj[w.kq.SETTINGS].listRequestsContainingSessionIdentifiers, w.Fj[w.kq.SETTINGS].addOrRemoveSessionIdentifiers, w.Fj[w.kq.SEQUENCE_RULES].listSequenceRules, w.Fj[w.kq.SEQUENCE_RULES].deleteSequenceRule, w.Fj[w.kq.SEQUENCE_RULES].reorderSequenceRule, w.Fj[w.kq.SEQUENCE_RULES].createSequenceRule, w.Fj[w.kq.SEQUENCE_RULES].editSequenceRule, H.Z.CREATE_AND_DEPLOY, H.Z.ANALYTICS, k.y.SECONDARY_DNS_NOTIFICATION_CREATE, k.y.SECONDARY_DNS_NOTIFICATION_UPDATE, k.y.SECONDARY_DNS_NOTIFICATION_DELETE, T.U.ZONE_TRANSFER_SUCCESS, T.U.DNS_RECORD_CREATE, T.U.DNS_RECORD_UPDATE, T.U.DNS_RECORD_DELETE, B.Y.PEER_DNS_CREATE, B.Y.PEER_DNS_UPDATE, B.Y.PEER_DNS_DELETE, B.Y.ZONE_TRANSFER_ENABLE, B.Y.ZONE_TRANSFER_DISABLE, $.V.ARGO_ENABLEMENT, $.V.ARGO_GEO_ANALYTICS_FETCH, $.V.ARGO_GLOBAL_ANALYTICS_FETCH, W.X.VIEW_BUCKETS_LIST, W.X.CREATE_BUCKET, W.X.VALIDATE_BUCKET, W.X.DELETE_BUCKET, W.X.VIEW_CAPTURES_LIST, W.X.CREATE_SIMPLE_CAPTURE, W.X.CREATE_FULL_CAPTURE, W.X.VIEW_FULL_CAPTURE, W.X.DOWNLOAD_SIMPLE_CAPTURE, ne.bK.VIEW_RULES, ne.bK.CREATE_RULE, ne.bK.UPDATE_RULE, ne.bK.DELETE_RULE, ne.bK.VIEW_CONFIGURATION, ne.bK.CREATE_CONFIGURATION, ne.bK.UPDATE_CONFIGURATION, ne.bK.DELETE_CONFIGURATION, x.r8.VIEW_ALERTS, x.r8.VIEW_ALERTS_HISTORY, x.r8.MAGIC_OVERVIEW_ANALYTICS, ie.o4.CLICK_ADAPTIVE_SAMPLING, ie.o4.CLICK_TO_LOG_EXPLORER_BANNER, ie.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, ie.o4.CLICK_SWITCH_TO_RAW_LOGS, ie.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", Z.U.REGISTER_DOMAIN_SEARCH_SUBMIT, Z.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, Z.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, Z.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, Z.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, Z.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, Z.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, Z.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, Z.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, Z.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, Z.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, Z.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, Z.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, Z.U.REGISTER_DOMAIN_CHECKOUT_ERROR, Z.U.TRANSFER_DOMAIN_CHANGE_STEP, Z.U.RENEW_DOMAIN_COMPLETED, Z.U.RESTORE_DOMAIN_INIT, Z.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, Z.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, Z.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, Z.U.RESTORE_DOMAIN_FAILURE, Z.U.RESTORE_DOMAIN_COMPLETED, Z.U.DOMAIN_DELETE_INIT, Z.U.DOMAIN_DELETE_COMPLETED, Z.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, Z.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, Z.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, Z.U.DOMAIN_DELETE_CONFIRM_DELETE, Z.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, Z.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, Z.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, Z.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, Z.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL),
				Me = t.eg.exactStrict(t.eg.object({
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
				Be = (te, se) => {
					const [C, D] = Re(se);
					let ee, Te;
					return (0, t.nM)(Ce.decode(te)) && (ee = new q.Uh(te)), D && D.length > 0 && (Te = new q.oV(te, D)), [C, ee, Te]
				},
				Re = te => {
					const se = Me.decode(te);
					if ((0, t.nM)(se)) {
						const C = se.left.map(({
							context: D
						}) => D.map(({
							key: ee
						}) => ee)).reduce((D, ee) => D.concat(ee), []).filter(D => D in te);
						return [R(C, te), C]
					}
					return [te, []]
				},
				R = (te, se) => Object.entries(se).reduce((C, [D, ee]) => (te.includes(D) || (C[D] = ee), C), {}),
				le = te => (se, C, D) => {
					const [ee, Te, Pe] = Be(C, D);
					if (Te) throw Te;
					return Pe && console.error(Pe), te(se, C, ee)
				};
			var be = n("../react/utils/zaraz.ts");
			const We = {
					identify: !0
				},
				ze = te => (se, C, D) => (We[C] || be.tg === null || be.tg === void 0 || be.tg.track(C, D), te(se, C, D));
			var Ue = n("../react/utils/cookiePreferences.ts");

			function He(te) {
				for (var se = 1; se < arguments.length; se++) {
					var C = arguments[se] != null ? Object(arguments[se]) : {},
						D = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(C).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(C, ee).enumerable
					})), D.forEach(function(ee) {
						Fe(te, ee, C[ee])
					})
				}
				return te
			}

			function Fe(te, se, C) {
				return se = et(se), se in te ? Object.defineProperty(te, se, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : te[se] = C, te
			}

			function et(te) {
				var se = Ke(te, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function Ke(te, se) {
				if (typeof te != "object" || te === null) return te;
				var C = te[Symbol.toPrimitive];
				if (C !== void 0) {
					var D = C.call(te, se || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(te)
			}
			const Ve = te => {
					o().init(He({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: xe() && !(0, l.gm)() && Ze(),
						middlewares: [I, le, L, ze]
					}, te))
				},
				je = () => {
					o().identify(He({}, (0, e.getAttribution)(), {
						locale: (0, m.r)((0, d.bh)().getState()),
						isCloudflare: !!(0, i.Jd)()
					}))
				},
				xe = () => !0,
				Xe = () => {
					(0, Ue.kT)("sparrow_id")
				},
				Ze = () => (0, Ue.Xm)()
		},
		"../utils/initStyles.ts": function(G, y, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../react/app/providers/storeContainer.js");
			const l = "cfBaseStyles",
				d = document.head || document.getElementsByTagName("head")[0],
				m = g => {
					const p = [];
					for (let _ in g.colors) {
						const t = g.colors[_];
						if (Array.isArray(t) && _ !== "categorical")
							for (let r = 0; r < t.length; ++r) p.push(`--cf-${_}-${r}:${t[r]};`)
					}
					return p.join(`
`)
				},
				i = () => {
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
					let _ = document.getElementById(l);
					_ ? _.innerText = "" : (_ = document.createElement("style"), _.id = l, d.appendChild(_)), _.appendChild(document.createTextNode(p)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(i), y.Z = i
		},
		"../utils/sentry/lastSentEventId.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let l = "";
				return {
					setEventId: i => (!i || typeof i != "string" || (l = i), l),
					getEventId: () => l
				}
			})()
		},
		"../utils/zaraz.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
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

			function e(s) {
				for (var u = 1; u < arguments.length; u++) {
					var a = arguments[u] != null ? Object(arguments[u]) : {},
						h = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(a).filter(function(f) {
						return Object.getOwnPropertyDescriptor(a, f).enumerable
					})), h.forEach(function(f) {
						o(s, f, a[f])
					})
				}
				return s
			}

			function o(s, u, a) {
				return u = l(u), u in s ? Object.defineProperty(s, u, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[u] = a, s
			}

			function l(s) {
				var u = d(s, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function d(s, u) {
				if (typeof s != "object" || s === null) return s;
				var a = s[Symbol.toPrimitive];
				if (a !== void 0) {
					var h = a.call(s, u || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(s)
			}
			const m = {
					track: (s, u) => null,
					set: (s, u) => console.log(`zaraz.set(${s}, ${u})`)
				},
				i = {
					track: (s, u) => {
						var a;
						(a = window.zaraz) === null || a === void 0 || a.track(s, e({}, u, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (s, u) => {
						var a;
						return (a = window.zaraz) === null || a === void 0 ? void 0 : a.set(s, u)
					}
				};
			let g;
			const p = () => {
					window.zaraz, g = i
				},
				_ = ["email", "first_name", "last_name"],
				t = s => {
					_.forEach(u => {
						var a;
						(a = g) === null || a === void 0 || a.set(u, s[u])
					})
				},
				r = () => {
					t({})
				}
		},
		"../../../common/intl/intl-core/src/errors.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				OZ: function() {
					return m
				},
				YB: function() {
					return d
				}
			});

			function e(g, p, _) {
				return p = o(p), p in g ? Object.defineProperty(g, p, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[p] = _, g
			}

			function o(g) {
				var p = l(g, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function l(g, p) {
				if (typeof g != "object" || g === null) return g;
				var _ = g[Symbol.toPrimitive];
				if (_ !== void 0) {
					var t = _.call(g, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(g)
			}
			class d extends Error {
				constructor(p, _) {
					super(_);
					e(this, "translationKey", void 0), this.translationKey = p, this.name = "TranslatorError"
				}
			}
			class m extends d {
				constructor(p) {
					super(p, `Translation key not found: ${p}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var i = null
		},
		"../../../common/intl/intl-react/src/I18nProvider.tsx": function(G, y, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				l = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function d() {
				return d = Object.assign ? Object.assign.bind() : function(_) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (_[s] = r[s])
					}
					return _
				}, d.apply(this, arguments)
			}

			function m(_, t) {
				if (_ == null) return {};
				var r = i(_, t),
					s, u;
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(_);
					for (u = 0; u < a.length; u++) s = a[u], !(t.indexOf(s) >= 0) && (!Object.prototype.propertyIsEnumerable.call(_, s) || (r[s] = _[s]))
				}
				return r
			}

			function i(_, t) {
				if (_ == null) return {};
				var r = {},
					s = Object.keys(_),
					u, a;
				for (a = 0; a < s.length; a++) u = s[a], !(t.indexOf(u) >= 0) && (r[u] = _[u]);
				return r
			}
			class g extends e.Component {
				constructor(t) {
					super(t);
					const {
						locale: r,
						phrases: s,
						translator: u
					} = t;
					r && u.locale(r), s && u.extend(s)
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
				} = _, r = m(_, ["translator"]);
				const s = () => e.createElement(l.oc, null, u => e.createElement(g, d({
					translator: u
				}, r)));
				return t ? (t.locale(r.locale), e.createElement(l.bd, {
					value: t
				}, s())) : s()
			};
			y.Z = p
		},
		"../../../common/intl/intl-react/src/index.ts": function(G, y, n) {
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
					return Q
				},
				cC: function() {
					return U
				},
				QT: function() {
					return I.Q
				}
			});
			var e = n("../../../common/intl/intl-react/src/I18nProvider.tsx"),
				o = n("../../../common/intl/intl-react/src/I18nLoader.tsx"),
				l = n("webpack/sharing/consume/default/react/react"),
				d = n.n(l),
				m = n("../../../../node_modules/lodash/escape.js"),
				i = n.n(m),
				g = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				p = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function _(Y) {
				for (var W = 1; W < arguments.length; W++) {
					var K = arguments[W] != null ? Object(arguments[W]) : {},
						j = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(K).filter(function(N) {
						return Object.getOwnPropertyDescriptor(K, N).enumerable
					})), j.forEach(function(N) {
						t(Y, N, K[N])
					})
				}
				return Y
			}

			function t(Y, W, K) {
				return W = r(W), W in Y ? Object.defineProperty(Y, W, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[W] = K, Y
			}

			function r(Y) {
				var W = s(Y, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function s(Y, W) {
				if (typeof Y != "object" || Y === null) return Y;
				var K = Y[Symbol.toPrimitive];
				if (K !== void 0) {
					var j = K.call(Y, W || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)(Y)
			}

			function u() {
				return u = Object.assign ? Object.assign.bind() : function(Y) {
					for (var W = 1; W < arguments.length; W++) {
						var K = arguments[W];
						for (var j in K) Object.prototype.hasOwnProperty.call(K, j) && (Y[j] = K[j])
					}
					return Y
				}, u.apply(this, arguments)
			}
			const a = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				h = /(?:\r\n|\r|\n)/g;

			function f(Y, W, K) {
				return l.createElement("span", {
					key: Y,
					"data-testid": K,
					dangerouslySetInnerHTML: {
						__html: W
					}
				})
			}

			function P(Y, W = [], K = [], j) {
				let N = 0;
				const O = Y.replace(h, "").split(a);
				if (O.length === 1) return [f(N, Y, j)];
				const b = [],
					V = O.shift();
				if (V) {
					const w = f(N, V, j);
					b.push(w), typeof w != "string" && N++
				}
				for (const [w, re, H] of F(O)) {
					W[w] || window.console && console.warn(`Missing Component for translation key: ${Y}, index: ${w}. Fragment will be used.`);
					const k = W[w] || l.Fragment,
						T = K[w] || {},
						B = f(0, re);
					if (b.push(l.createElement(k, u({
							key: N
						}, T), B)), N++, H) {
						const $ = f(N, H);
						b.push($), typeof $ != "string" && N++
					}
				}
				return b
			}

			function F(Y) {
				if (!Y.length) return [];
				const [W, K, j, N] = Y.slice(0, 4);
				return [
					[parseInt(W || j), K || "", N]
				].concat(F(Y.slice(4, Y.length)))
			}

			function M({
				id: Y = "",
				smartCount: W,
				_: K,
				values: j,
				applyMarkdown: N,
				Components: O,
				componentProps: b,
				testId: V
			}) {
				return l.createElement(p.oc, null, w => {
					j && Object.keys(j).forEach(T => j[T] = i()(j[T])), b && b.forEach(T => {
						Object.keys(T).forEach(B => {
							typeof T[B] == "string" && (T[B] = i()(T[B]))
						})
					});
					const re = _({
							smart_count: W,
							_: K
						}, j),
						H = N ? (0, g.Z)(w.t(Y.toString(), re), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : w.t(Y.toString(), re),
						k = P(H, O, b, V);
					return k.length > 1 ? l.createElement(l.Fragment, null, k) : k[0]
				})
			}
			var U = M,
				L = n("../../../common/intl/intl-react/src/withTranslator.tsx"),
				I = n("../../../common/intl/intl-react/src/useI18n.tsx"),
				q = n("../../../common/intl/intl-types/src/index.ts"),
				Q = d().createContext(q.Q.en_US)
		},
		"../../../common/util/types/src/api/domain.ts": function(G, y, n) {
			"use strict";
			n.d(y, {
				Aw: function() {
					return q
				},
				Ib: function() {
					return L
				},
				Ks: function() {
					return Q
				},
				MS: function() {
					return I
				},
				PN: function() {
					return h
				},
				Pp: function() {
					return d
				},
				Q3: function() {
					return u
				},
				TS: function() {
					return a
				},
				W7: function() {
					return F
				},
				dN: function() {
					return Y
				},
				eF: function() {
					return U
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
				l = e.eg.object({
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
				i = e.eg.object({
					registrant: d.optional,
					technical: d.optional,
					administrator: d.optional,
					billing: d.optional
				}),
				g = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: i.optional,
					years: e.eg.number
				}),
				p = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let _ = function(W) {
				return W.ONBOARDING_INITIATED = "Onboarding Initiated", W.ONBOARDED = "Onboarded", W.PENDING_REGISTRY_LOCK = "Pending Registry Lock", W.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", W.REGISTRY_UNLOCKED = "Registry Unlocked", W.LOCKED = "Locked", W.FAILED_TO_LOCK = "Failed To Lock", W.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", W.UNLOCKED = "Unlocked", W.OFFBOARDED = "Offboarded", W
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
				s = e.eg.object({
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
				a = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let h = function(W) {
				return W.PENDING = "pending", W.VERIFIED = "verified", W.REJECTED = "rejected", W.PENDING_DELETE = "pending_delete", W.DELETED = "deleted", W
			}({});
			const f = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(h),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				P = e.eg.object({
					designated_approvers: e.eg.array(f)
				});
			let F = function(W) {
				return W.PENDING = "pending", W.PENDING_UPDATE = "pending_update", W.ENABLED = "enabled", W.DISABLED = "disabled", W
			}({});
			const M = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(F)
				}),
				U = e.eg.intersection([M, P]),
				L = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let I = function(W) {
				return W.UNLOCK_APPROVAL = "UnlockApprovalRequest", W.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", W.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", W.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", W
			}({});
			const q = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				Q = e.eg.object({
					message: e.eg.string
				}),
				Y = e.eg.object({
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
		"../../../common/util/types/src/utils/index.ts": function(G, y, n) {
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
			const o = (l, d) => {
				if (d !== void 0) throw new Error("Unexpected object: " + l);
				return d
			}
		},
		"../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$": function(G, y, n) {
			var e = {
				"./favicon-cookie.ico": "../react/app/assets/favicon-cookie.ico",
				"./favicon-dev.ico": "../react/app/assets/favicon-dev.ico",
				"./favicon-staging.ico": "../react/app/assets/favicon-staging.ico",
				"./favicon-zeit.ico": "../react/app/assets/favicon-zeit.ico"
			};

			function o(d) {
				var m = l(d);
				return n(m)
			}

			function l(d) {
				if (!n.o(e, d)) {
					var m = new Error("Cannot find module '" + d + "'");
					throw m.code = "MODULE_NOT_FOUND", m
				}
				return e[d]
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.resolve = l, G.exports = o, o.id = "../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$"
		},
		"../react/app/assets/favicon-cookie.ico": function(G, y, n) {
			"use strict";
			G.exports = n.p + "3f95af1452696b3d93d3.ico"
		},
		"../react/app/assets/favicon-dev.ico": function(G, y, n) {
			"use strict";
			G.exports = n.p + "1022a975e95038d58c62.ico"
		},
		"../react/app/assets/favicon-staging.ico": function(G, y, n) {
			"use strict";
			G.exports = n.p + "67b31fd5804672d4ab2d.ico"
		},
		"../react/app/assets/favicon-zeit.ico": function(G, y, n) {
			"use strict";
			G.exports = n.p + "d9aa8f47b1687e407e0f.ico"
		}
	}
]);

//# debugId=02dc4935-2e25-543d-9f9e-e1328b2a36cf