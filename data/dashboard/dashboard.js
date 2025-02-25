! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a5ee19b6-9fd5-5b1e-8949-29517b71be4d")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				J8: function() {
					return i
				},
				Jd: function() {
					return c
				},
				QY: function() {
					return m
				},
				Qw: function() {
					return s
				},
				ki: function() {
					return u
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/utils/url.ts"),
				a = t("../../../../node_modules/query-string/query-string.js"),
				d = t.n(a),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				g;
			const s = () => Object.keys(l.Z).reduce((_, T) => (T.indexOf("cf_beta.") === 0 && l.Z.get(T) === "true" && _.push(T.split(".").slice(1).join(".")), _), []),
				u = () => {
					var _, T, A;
					return ((_ = window) === null || _ === void 0 || (T = _.bootstrap) === null || T === void 0 || (A = T.data) === null || A === void 0 ? void 0 : A.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((g = window) === null || g === void 0 ? void 0 : g.location) && l.Z) {
				const _ = d().parse(window.location.search);
				_.beta_on && l.Z.set(`cf_beta.${_.beta_on}`, !0), _.beta_off && l.Z.set(`cf_beta.${_.beta_off}`, !1)
			}
			const E = {},
				n = _ => {
					var T, A, h;
					return Object.prototype.hasOwnProperty.call(E, _) ? E[_] : ((T = window) === null || T === void 0 || (A = T.bootstrap) === null || A === void 0 || (h = A.data) === null || h === void 0 ? void 0 : h.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(S => S === _) ? (E[_] = !0, !0) : (E[_] = !1, !1)
				},
				r = _ => l.Z ? l.Z.get(`cf_beta.${_}`) === !0 : !1,
				i = _ => r(_) || n(_),
				p = () => !0,
				c = () => {
					var _, T, A;
					return ((_ = window) === null || _ === void 0 || (T = _.bootstrap) === null || T === void 0 || (A = T.data) === null || A === void 0 ? void 0 : A.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				m = _ => {
					const T = (0, e.uF)(_),
						A = (T == null ? void 0 : T.roles) || [];
					return (0, o.qR)(location.pathname) && A.length === 1 && A.some(h => h === "Administrator Read Only")
				}
		},
		"../init.ts": function(x, y, t) {
			"use strict";
			t.r(y);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				a = t("../libs/init/initGlobal.ts"),
				d = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				l = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function g(M) {
				for (var j = 1; j < arguments.length; j++) {
					var J = arguments[j] != null ? Object(arguments[j]) : {},
						ce = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ce.push.apply(ce, Object.getOwnPropertySymbols(J).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(J, Ce).enumerable
					})), ce.forEach(function(Ce) {
						s(M, Ce, J[Ce])
					})
				}
				return M
			}

			function s(M, j, J) {
				return j = u(j), j in M ? Object.defineProperty(M, j, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[j] = J, M
			}

			function u(M) {
				var j = E(M, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function E(M, j) {
				if (typeof M != "object" || M === null) return M;
				var J = M[Symbol.toPrimitive];
				if (J !== void 0) {
					var ce = J.call(M, j || "default");
					if (typeof ce != "object") return ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(M)
			}
			const n = M => {
				const j = M && M.headers || {},
					J = new Headers(j);
				return J.append("X-Cross-Site-Security", "dash"), g({}, M, {
					headers: J
				})
			};
			(0, l.register)({
				request: (M, j) => {
					try {
						return new URL(M), M === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", j] : [M, j]
					} catch {
						return [M, n(j)]
					}
				}
			});
			var r = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				i = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				p = t("../react/app/providers/storeContainer.js");
			let c = "";
			const m = 61;

			function _(M) {
				const j = M.substr(1);
				if (j && c !== j) {
					const J = document.getElementById(j);
					if (J) {
						const ce = J.getBoundingClientRect().top;
						if (ce > 0) {
							const Ce = ce - m;
							document.documentElement.scrollTop = Ce
						}
					}
				}
				c = j
			}

			function T(M) {
				M.listen(j => _(j.hash))
			}
			var A = t("../../../../node_modules/cookie/index.js"),
				h = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const S = "CF_dash_version",
				f = "cf_fv_preview",
				C = "cf_pv",
				w = "current",
				O = "hash",
				N = "deploymentPreview",
				P = "fragmentPreview",
				I = M => M === w ? L() : B(),
				L = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				B = (M = 72) => {
					const j = 36e5;
					return new Date(Date.now() + M * j)
				},
				U = M => {
					switch (M) {
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
				H = (M, j = !1) => {
					var J;
					const ce = U(M),
						Ce = `
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
    <h1 id="error-title">${ce.title}</h1>
    <p id="error-description">${ce.description}</p>
  </div>
  `,
						Me = j ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${h.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(J=window.build)===null||J===void 0?void 0:J.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return Ce + Me
				},
				le = M => {
					var j;
					const J = document.getElementById(M);
					!J || (j = J.parentNode) === null || j === void 0 || j.removeChild(J)
				};

			function Ee() {
				const M = document.getElementById("loading-state");
				M == null || M.classList.add("hide"), M == null || M.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(le)
				})
			}

			function ae(M) {
				var j;
				const J = document.getElementById("loading-state"),
					ce = !!((j = A.parse(document.cookie)) === null || j === void 0 ? void 0 : j[S]);
				!J || (J.innerHTML = H(M == null ? void 0 : M.code, ce))
			}
			var me = t("../utils/initStyles.ts"),
				Z = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				Q = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				G = t("../react/common/selectors/languagePreferenceSelector.ts"),
				b = t("../flags.ts"),
				F = t("../utils/getDashVersion.ts");
			const ee = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				ue = !0,
				K = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				q = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var $ = t("../utils/sentry/lastSentEventId.ts"),
				X = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				W = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const te = M => {
				const j = async J => {
					var ce, Ce;
					const Me = {
						envelope: J.body,
						url: M.url,
						isPreviewDeploy: (ce = window) === null || ce === void 0 || (Ce = ce.build) === null || Ce === void 0 ? void 0 : Ce.isPreviewDeploy,
						release: (0, F.t)()
					};
					try {
						const Le = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(Me)
						});
						return {
							statusCode: Le.status,
							headers: {
								"x-sentry-rate-limits": Le.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": Le.headers.get("Retry-After")
							}
						}
					} catch (Le) {
						return console.log(Le), (0, W.$2)(Le)
					}
				};
				return X.q(M, j)
			};
			var ye = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				Ae = t("../../../../node_modules/history/esm/history.js"),
				xe = (0, Ae.lX)(),
				$e = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Ke = t("../react/utils/url.ts");
			const be = (0, $e.Rf)();
			let Y;

			function re(M) {
				return ge(M, "react-router-v5")
			}

			function ge(M, j) {
				return (J, ce = !0, Ce = !0) => {
					ce && be && be.location && (Y = J({
						name: (0, Ke.Fl)(be.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": j
						}
					})), Ce && M.listen && M.listen((Me, Le) => {
						if (Le && (Le === "PUSH" || Le === "POP")) {
							Y && Y.finish();
							const nt = {
								"routing.instrumentation": j
							};
							Y = J({
								name: (0, Ke.Fl)(Me.pathname),
								op: "navigation",
								tags: nt
							})
						}
					})
				}
			}
			var R = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				pe = t.n(R),
				Se = t("../../../common/intl/intl-core/src/errors.ts"),
				ke = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				Ge = t("../react/common/middleware/sparrow/errors.ts");

			function Ie(M, j, J) {
				return j = Be(j), j in M ? Object.defineProperty(M, j, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[j] = J, M
			}

			function Be(M) {
				var j = Ue(M, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function Ue(M, j) {
				if (typeof M != "object" || M === null) return M;
				var J = M[Symbol.toPrimitive];
				if (J !== void 0) {
					var ce = J.call(M, j || "default");
					if (typeof ce != "object") return ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(M)
			}
			class We {
				constructor() {
					Ie(this, "name", We.id)
				}
				setupOnce() {
					t.g.console && (0, ke.hl)(t.g.console, "error", j => (...J) => {
						const ce = J.find(Ce => Ce instanceof Error);
						if (ee && ce) {
							let Ce, Me = !0;
							if (ce instanceof Ge.ez) {
								const Le = ce instanceof Ge.oV ? ce.invalidProperties : void 0;
								Ce = {
									tags: {
										"sparrow.eventName": ce.eventName
									},
									extra: {
										sparrow: {
											eventName: ce.eventName,
											invalidProperties: Le
										}
									},
									fingerprint: [ce.name ? ce.name : "SparrowValidationError"]
								}, Me = !1
							} else if (ce instanceof R.SparrowIdCookieError) Ce = {
								extra: {
									sparrowIdCookie: ce.cookie
								},
								fingerprint: [ce.name ? ce.name : "SparrowIdCookieError"]
							};
							else if (ce.name === "ChunkLoadError") {
								Ce = {
									fingerprint: [ce.name]
								};
								try {
									Ce.tags = {
										chunkId: ce.message.split(" ")[2],
										chunkUrl: ce.request
									}
								} catch {}
							} else ce instanceof Se.YB && (Ce = {
								fingerprint: ["TranslatorError", ce.translationKey]
							});
							Me && r.Tb(ce, Ce)
						}
						typeof j == "function" && j.apply(t.g.console, J)
					})
				}
			}
			Ie(We, "id", "ConsoleErrorIntegration");
			var Ye = null;
			const V = () => {
					if (ee && ue) {
						var M, j, J, ce, Ce, Me, Le, nt, _t, Xe;
						let Mt = "production";
						((M = window) === null || M === void 0 || (j = M.build) === null || j === void 0 ? void 0 : j.isPreviewDeploy) && (Mt += "-preview"), Q.S({
							dsn: ee,
							release: (0, F.t)(),
							environment: Mt,
							ignoreErrors: q,
							allowUrls: K,
							autoSessionTracking: !1,
							integrations: Et => [...Et.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new We, new ye.jK.BrowserTracing({
								routingInstrumentation: re(xe)
							})],
							tracesSampleRate: 0,
							transport: te,
							beforeSend: Et => ($.e.setEventId(Et.event_id), Et)
						});
						const Ot = (0, p.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, b.Qw)(),
							USER_BETA_FLAGS: (0, b.ki)(),
							meta: {
								connection: {
									type: (J = window) === null || J === void 0 || (ce = J.navigator) === null || ce === void 0 || (Ce = ce.connection) === null || Ce === void 0 ? void 0 : Ce.effectiveType,
									bandwidth: (Me = window) === null || Me === void 0 || (Le = Me.navigator) === null || Le === void 0 || (nt = Le.connection) === null || nt === void 0 ? void 0 : nt.downlink
								},
								languagePreference: (0, G.r)(Ot),
								isPreviewDeploy: (_t = window) === null || _t === void 0 || (Xe = _t.build) === null || Xe === void 0 ? void 0 : Xe.isPreviewDeploy
							},
							utilGates: (0, Z.T2)(Ot)
						}), window.addEventListener("unhandledrejection", function(Et) {})
					}
				},
				ie = M => {
					M ? r.av({
						id: M
					}) : r.av(null)
				};
			var fe = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Ne = () => {
					let M;
					try {
						M = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), M = window.location.search
					}
					if (!M.includes("remote[")) return;
					const j = new URLSearchParams(M),
						J = {};
					for (let [ce, Ce] of j) ce.includes("remote") && (J[ce.replace(/remote\[|\]/g, "")] = Ce);
					fe.Z.set("mfe-remotes", JSON.stringify(J))
				},
				je = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				Ze = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const ot = "ANON_USER_ID";

			function lt() {
				var M, j, J, ce;
				let Ce = (M = t.g) === null || M === void 0 || (j = M.bootstrap) === null || j === void 0 || (J = j.data) === null || J === void 0 || (ce = J.user) === null || ce === void 0 ? void 0 : ce.id;
				if (!Ce) {
					let Me = fe.Z.get(ot);
					if (!Me) {
						let Le = (0, Ze.Z)();
						fe.Z.set(ot, Le), Me = Le
					}
					return Me
				}
				return Ce
			}
			async function at() {
				const M = (0, p.bh)();
				M.dispatch((0, je.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await M.dispatch((0, Z.UL)({
					userId: lt()
				}))
			}
			class dt extends Error {
				constructor(j, J) {
					super(J);
					this.name = `${j} ${J}`
				}
			}
			const pt = () => {
					document.cookie.split(";").forEach(j => {
						const [J] = j.trim().split("=");
						document.cookie = `${J}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				st = async () => {
					let M = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!M.ok) throw M.headers.get("content-type") === "text/html" && (await M.text()).toLowerCase().includes("cookie too large") && (r.$e(function(Ce) {
						Ce.setTag("init", "cookieTooLarge"), r.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), pt(), window.location.reload()), new dt("Bootstrap API Failure", M == null ? void 0 : M.status);
					return (await M.json()).result.data
				};
			var ze = t("webpack/sharing/consume/default/react/react"),
				Oe = t.n(ze),
				Qe = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				mt = t("webpack/sharing/consume/default/react-dom/react-dom"),
				it = t("webpack/sharing/consume/default/react-redux/react-redux"),
				gt = t("../../../../node_modules/swr/core/dist/index.mjs"),
				z = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				de = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Te = t("../react/shims/focus-visible.js"),
				ne = t("../react/app/components/DeepLink/index.ts"),
				se = t("../../../../node_modules/prop-types/index.js"),
				he = t.n(se),
				k = t("../react/utils/translator.tsx"),
				oe = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				ve = t("../../../dash/intl/intl-translations/src/index.ts"),
				De = t("../../../../node_modules/query-string/query-string.js"),
				Re = t.n(De),
				Ve = t("../react/common/actions/userActions.ts"),
				Je = t("../react/common/selectors/userSelectors.ts"),
				qe = t("../react/utils/i18n.ts"),
				vt = t("../react/utils/bootstrap.ts");

			function ut(M) {
				for (var j = 1; j < arguments.length; j++) {
					var J = arguments[j] != null ? Object(arguments[j]) : {},
						ce = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ce.push.apply(ce, Object.getOwnPropertySymbols(J).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(J, Ce).enumerable
					})), ce.forEach(function(Ce) {
						et(M, Ce, J[Ce])
					})
				}
				return M
			}

			function et(M, j, J) {
				return j = Ft(j), j in M ? Object.defineProperty(M, j, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[j] = J, M
			}

			function Ft(M) {
				var j = It(M, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function It(M, j) {
				if (typeof M != "object" || M === null) return M;
				var J = M[Symbol.toPrimitive];
				if (J !== void 0) {
					var ce = J.call(M, j || "default");
					if (typeof ce != "object") return ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(M)
			}
			let rt = Re().parse(location.search);
			const wt = M => {
					const j = (0, vt.$8)() ? [(0, ve.Fy)(ve.if.changes), (0, ve.Fy)(ve.if.common), (0, ve.Fy)(ve.if.navigation), (0, ve.Fy)(ve.if.overview), (0, ve.Fy)(ve.if.onboarding), (0, ve.Fy)(ve.if.invite), (0, ve.Fy)(ve.if.login), (0, ve.Fy)(ve.if.dns), (0, ve.Fy)(ve.n4.ssl_tls), (0, ve.Fy)(ve.if.message_inbox), (0, ve.Fy)(ve.if.welcome)] : [(0, ve.Fy)(ve.if.common), (0, ve.Fy)(ve.if.invite), (0, ve.Fy)(ve.if.login), (0, ve.Fy)(ve.if.onboarding)];
					rt.lang ? $t(M) : fe.Z.get(qe.th) && Nt(M, (0, qe.Kd)());
					const J = async ce => (await Promise.all(j.map(Me => Me(ce)))).reduce((Me, Le) => ut({}, Me, Le), {});
					return Oe().createElement(oe.LocaleContext.Provider, {
						value: M.languagePreference
					}, Oe().createElement(oe.I18nProvider, {
						translator: k.Vb,
						locale: M.languagePreference
					}, Oe().createElement(oe.I18nLoader, {
						loadPhrases: J
					}, M.children)))
				},
				$t = async M => {
					let j = rt.lang.substring(0, rt.lang.length - 2) + rt.lang.substring(rt.lang.length - 2, rt.lang.length).toUpperCase();
					if (!(0, G.v)(j)) {
						console.warn(`${j} is not a supported locale.`), delete rt.lang, M.history.replace({
							search: Re().stringify(rt)
						});
						return
					}(0, qe.i_)(j), delete rt.lang, Nt(M, j), M.isAuthenticated || M.history.replace({
						search: Re().stringify(rt)
					})
				}, Nt = async (M, j) => {
					if (M.isAuthenticated) try {
						await M.setUserCommPreferences({
							"language-locale": j
						}, {
							hideErrorAlert: !0
						}), fe.Z.remove(qe.th), M.history.replace({
							search: Re().stringify(rt)
						})
					} catch (J) {
						fe.Z.set(qe.th, !0), console.error(J)
					} else fe.Z.set(qe.th, !0)
				}, Rt = M => {
					const j = (0, Je.PR)(M);
					return {
						isAuthenticated: !!(j && j.id),
						languagePreference: (0, qe.Kd)() || (0, G.r)(M)
					}
				}, Wt = {
					setUserCommPreferences: Ve.V_
				};
			var zt = (0, Qe.withRouter)((0, it.connect)(Rt, Wt)(wt));
			wt.propTypes = {
				history: he().object,
				languagePreference: he().string.isRequired,
				children: he().node.isRequired,
				isAuthenticated: he().bool,
				setUserCommPreferences: he().func.isRequired
			};
			var Gt = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Kt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let v;
			const D = ({
				selectorPrefix: M = "c_"
			} = {}) => (v || (v = (0, Kt.Z)({
				dev: !1,
				selectorPrefix: M
			})), v);
			var _e = t("../react/common/components/ModalManager.tsx"),
				Pe = t("../react/app/components/ErrorBoundary.tsx"),
				He = t("../react/common/actions/notificationsActions.ts");
			const Ct = (t.g.bootstrap || {}).data || {};
			class ht extends Oe().Component {
				componentDidMount() {
					Ct.messages && this.dispatchNotificationActions(Ct.messages)
				}
				dispatchNotificationActions(j) {
					j.forEach(J => {
						const {
							type: ce,
							message: Ce,
							persist: Me
						} = J;
						["success", "info", "warn", "error"].includes(ce) && this.props.notifyAdd(ce, (0, k.ZP)(Ce), {
							persist: !!Me
						})
					})
				}
				render() {
					return null
				}
			}
			var bt = (0, Qe.withRouter)((0, it.connect)(null, {
				notifyAdd: He.add
			})(ht));
			ht.propTypes = {
				notifyAdd: he().func.isRequired
			};
			var ct = t("../react/app/redux/index.ts");

			function Pt() {
				var M;
				const j = (0, ct.p4)(Je.PR),
					J = (j == null || (M = j.email) === null || M === void 0 ? void 0 : M.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ce = (0, je.Yc)();
				(0, ze.useEffect)(() => {
					ce({
						userType: J
					})
				}, [J, ce])
			}
			var Tt = t("../react/common/selectors/entitlementsSelectors.ts"),
				At = t("../react/common/selectors/accountSelectors.ts");
			const Lt = ["accountId", "is_ent"];

			function St() {
				const M = (0, je.f7)(),
					j = (0, Qe.useHistory)(),
					J = (0, Ke.uW)(j.location.pathname),
					ce = (0, je.Yc)(),
					Ce = (0, je.O$)(),
					Me = (0, ct.p4)(Tt.u1),
					Le = !Me.isRequesting && !!Me.data,
					nt = (0, ct.p4)(Tt.p1),
					_t = (0, ct.p4)(At.Xu),
					Xe = (0, ct.p4)(At.uF),
					Mt = !_t.isRequesting && !!_t.data;
				(0, ze.useEffect)(() => {
					if (J && Mt && Xe && Le && J === Xe.account.id) {
						var Ot, Et, xt;
						ce({
							accountId: Xe.account.id,
							is_ent: nt,
							is_free_account: !nt && !(Xe == null || (Ot = Xe.account.meta) === null || Ot === void 0 ? void 0 : Ot.has_business_zones) && !(Xe == null || (Et = Xe.account.meta) === null || Et === void 0 ? void 0 : Et.has_pro_zones) && !(Xe == null || (xt = Xe.account.meta) === null || xt === void 0 ? void 0 : xt.has_enterprise_zones)
						})
					} else(!J || J in M && M.accountId !== J) && Ce(Lt)
				}, [Mt, Xe, ce, Ce, Le, nt, J, M])
			}
			var tt = t("../react/common/selectors/zoneSelectors.ts");

			function Vt() {
				const M = (0, ct.p4)(tt.nA),
					j = (0, je.Yc)();
				(0, ze.useEffect)(() => {
					var J;
					j({
						zone_id: M == null ? void 0 : M.id,
						zone_plan: M == null || (J = M.plan) === null || J === void 0 ? void 0 : J.legacy_id
					})
				}, [M, j])
			}
			const Bt = () => (Pt(), St(), Vt(), null);
			var en = t("../react/app/components/Persistence/index.tsx"),
				tn = t("../node_modules/@cloudflare/elements/es/index.js"),
				nn = t("../react/app/components/LoadingSuspense.tsx");
			const on = Oe().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(94084), t.e(12174), t.e(57062), t.e(16552), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(60734), t.e(25390), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var rn = () => Oe().createElement(nn.Z, null, Oe().createElement(on, null));
			const an = () => (ze.useEffect(() => Ee, []), null);
			var sn = t("../../../../node_modules/moment/moment.js"),
				Ht = t.n(sn);
			const cn = M => {
					switch (M) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return M.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return M.toLowerCase();
						default:
							return "en"
					}
				},
				ln = () => {
					const M = (0, ct.p4)(G.r);
					(0, ze.useEffect)(() => {
						const j = cn(M);
						j !== Ht().locale() && Ht().locale(j), document.documentElement.lang = M
					}, [M])
				},
				un = () => {
					(0, ze.useEffect)(() => {
						async function M() {
							var j, J;
							let ce;
							if (((j = window) === null || j === void 0 || (J = j.build) === null || J === void 0 ? void 0 : J.isPreviewDeploy) && (ce = "cookie"), !!ce) try {
								const Ce = document.head.querySelector("link[rel=icon]");
								Ce && (Ce.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${ce}.ico`)).default)
							} catch {}
						}
						M()
					}, [])
				};
			var dn = t("../react/common/constants/constants.ts");
			const pn = () => {
					var M;
					const j = (0, Qe.useLocation)(),
						[J, ce] = (0, ze.useState)(((M = window) === null || M === void 0 ? void 0 : M.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, ze.useEffect)(() => {
						const Ce = Re().parse(j.search);
						if (Ce.pt && fe.Z.set(dn.sJ, Ce.pt), Ce == null ? void 0 : Ce.devPanel) {
							var Me, Le;
							(Me = window) === null || Me === void 0 || (Le = Me.localStorage) === null || Le === void 0 || Le.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ce(!0)
						}
					}, [j.search]), {
						devPanelEnabled: J
					}
				},
				mn = ({
					id: M,
					customDataLayer: j = [],
					dataLayerName: J = "dataLayer"
				}) => {
					const ce = `<iframe src="https://www.googletagmanager.com/ns.html?id=${M}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						Ce = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${J}', '${M}')`,
						Me = `
    window.${J} = window.${J} || [];
    window.${J}.push(${JSON.stringify(j)})
  `;
					return {
						iframe: ce,
						script: Ce,
						dataLayerHTML: Me
					}
				},
				gn = M => {
					const j = document.createElement("script");
					return j.innerHTML = M, j.async = !0, j
				},
				fn = M => {
					const j = document.createElement("noscript");
					return j.innerHTML = M, j
				},
				Zt = M => {
					const j = document.createElement("script");
					return j.innerHTML = M, j
				},
				Rn = ({
					dataLayer: M,
					dataLayerName: j
				}) => {
					if (window[j]) return window[j].push(M);
					const J = `
      window.${j} = window.${j} || [];
      window.${j}.push(${JSON.stringify(M)})`,
						ce = Zt(J);
					document.head.insertBefore(ce, document.head.childNodes[0])
				},
				_n = ({
					containerId: M,
					customDataLayer: j,
					gtmFeatureFlag: J = !0
				}) => {
					(0, ze.useEffect)(() => {
						(() => {
							if (!J) return null;
							const {
								iframe: Ce,
								script: Me,
								dataLayerHTML: Le
							} = mn({
								id: M,
								customDataLayer: j
							});
							document.head.insertBefore(Zt(Le), document.head.childNodes[0]), document.head.insertBefore(gn(Me), document.head.childNodes[0]), document.body.insertBefore(fn(Ce), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const En = ({
				isDev: M,
				gtmFeatureFlag: j
			}) => {
				(0, ze.useEffect)(() => {
					(() => {
						if (!j) return null;
						let ce;
						M ? ce = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : ce = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const Ce = document.createElement("script");
						Ce.async = !0, Ce.src = ce, document.head.insertBefore(Ce, document.head.childNodes[0])
					})()
				}, [])
			};
			var vn = t("../react/utils/useDomainConnectRedirect.ts");
			const yn = "GTM-NDGPDFZ",
				Cn = Oe().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(94084), t.e(12174), t.e(57062), t.e(16552), t.e(51436), t.e(3292), t.e(47386), t.e(27003), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(60734), t.e(25390), t.e(32036), t.e(87940), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				hn = Oe().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(39074), t.e(57062), t.e(3292), t.e(60734), t.e(69088), t.e(32036), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var Tn = ({
					userIsAuthed: M
				}) => {
					ln(), un(), (0, vn.y)();
					const {
						devPanelEnabled: j
					} = pn();
					return _n({
						containerId: yn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), En({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), Oe().createElement(ze.Suspense, {
						fallback: Oe().createElement(an, null)
					}, Oe().createElement(Qe.Switch, null, !M && !0 && Oe().createElement(Qe.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Oe().createElement(hn, null)), Oe().createElement(Qe.Route, {
						render: () => Oe().createElement(tn.ZC, {
							minHeight: "100vh"
						}, Oe().createElement(Cn, null))
					})), j && Oe().createElement(rn, null))
				},
				Ut = t("../../../../node_modules/yup/es/index.js"),
				An = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => Ut.Z_().email((0, k.ZP)("common.validation.email")).required((0, k.ZP)("common.validation.email")),
				cfPassword: () => Ut.Z_().required((0, k.ZP)("common.validation.required"))
			};
			(0, An.Yd)(Qt).forEach(M => {
				Ut.kM(Ut.Z_, M, Qt[M])
			});
			const Xt = Oe().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx"))),
				On = () => {
					const M = (0, vt.$8)(),
						[j, J] = (0, ze.useState)(M ? Xt : Oe().Fragment),
						[ce, Ce] = (0, ze.useState)((0, h.Yc)());
					(0, ze.useEffect)(() => {
						(0, h.fF)(() => Ce((0, h.Yc)()))
					}, []);
					const Me = Le => {
						Ce(Le), (0, h.C8)(Le), document.cookie = `dark-mode=${Le};Path=/;Max-Age=31536000`
					};
					return (0, ze.useEffect)(() => {
						J(M ? Xt : Oe().Fragment)
					}, [M]), (0, ze.useEffect)(() => {
						const Le = () => Me(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Le), () => {
							window.removeEventListener("storage", Le)
						}
					}, []), Oe().createElement(ze.Suspense, {
						fallback: null
					}, Oe().createElement(it.Provider, {
						store: (0, p.bh)()
					}, Oe().createElement(Qe.Router, {
						history: xe
					}, Oe().createElement(j, null, Oe().createElement(Gt.Z, {
						renderer: D()
					}, Oe().createElement(zt, null, Oe().createElement(Pe.S, {
						sentryTag: "Root"
					}, Oe().createElement(gt.J$, {
						value: {
							fetcher: Le => fetch(Le).then(nt => nt.json())
						}
					}, Oe().createElement(Bt, null), Oe().createElement(bt, null), Oe().createElement(en.Z_, {
						onDarkModeChangeCb: Me
					}, Oe().createElement(ne.ZP, null, Oe().createElement(Tn, {
						userIsAuthed: M
					}))), Oe().createElement(_e.ZP, null), Oe().createElement(z.F0, null)))))))))
				},
				In = () => {
					(0, mt.render)(Oe().createElement(On, null), document.getElementById("react-app"))
				};
			var yt = t("../utils/initSparrow.ts"),
				Dt = t("../utils/zaraz.ts");
			const bn = () => {
					const M = (0, Je.PR)((0, p.bh)().getState());
					Pn(), (0, yt.Ug)(), (0, Dt.bM)(), (M == null ? void 0 : M.id) && pe().setUserId(M == null ? void 0 : M.id), (0, yt.yV)(), !(0, yt.Wi)() && (0, yt.IM)(), M ? (0, Dt.yn)(M) : (0, Dt.Ro)()
				},
				Pn = () => {
					var M, j;
					(M = window) === null || M === void 0 || (j = M.OneTrust) === null || j === void 0 || j.OnConsentChanged(() => {
						const J = (0, Je.PR)((0, p.bh)().getState());
						(0, yt.Wi)() ? (pe().setEnabled(!0), (J == null ? void 0 : J.id) ? (pe().setUserId(J.id), (0, Dt.yn)(J)) : (0, Dt.Ro)(), (0, yt.yV)()) : (pe().setEnabled(!1), (0, yt.IM)())
					})
				};

			function Ln(M) {
				for (var j = 1; j < arguments.length; j++) {
					var J = arguments[j] != null ? Object(arguments[j]) : {},
						ce = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ce.push.apply(ce, Object.getOwnPropertySymbols(J).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(J, Ce).enumerable
					})), ce.forEach(function(Ce) {
						Sn(M, Ce, J[Ce])
					})
				}
				return M
			}

			function Sn(M, j, J) {
				return j = Dn(j), j in M ? Object.defineProperty(M, j, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[j] = J, M
			}

			function Dn(M) {
				var j = Mn(M, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function Mn(M, j) {
				if (typeof M != "object" || M === null) return M;
				var J = M[Symbol.toPrimitive];
				if (J !== void 0) {
					var ce = J.call(M, j || "default");
					if (typeof ce != "object") return ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(M)
			}
			const wn = "init",
				Jt = (M, j) => {
					r.$e(function(J) {
						J.setTag(wn, j), r.Tb(M)
					}), ae(M)
				},
				jt = async (M, j) => {
					try {
						return await M(), !0
					} catch (J) {
						return Jt(J, j), !1
					}
				};
			(async () => {
				try {
					var M, j, J;
					t.g.build = Ln({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "e4198fd24769f365bba3e50da1e37e373017cc40",
						dashVersion: "31325329",
						env: "production",
						builtAt: 1740511180151,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, F.p)()
					}), V();
					const ce = [{
						fn: () => t.e(4374).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => T(xe),
						tag: "hashScroll"
					}, {
						fn: me.Z,
						tag: "styles"
					}, {
						fn: Ne,
						tag: "mfePreviewData"
					}];
					for (const _t of ce)
						if (!await jt(_t.fn, _t.tag)) return;
					let Ce;
					if (!await jt(async () => {
							Ce = await st()
						}, "bootstrap")) return;
					const Me = (0, p.bh)(),
						Le = ((M = Ce) === null || M === void 0 ? void 0 : M.data) || {};
					Me.dispatch((0, i.mW)("user", Le == null ? void 0 : Le.user));
					const nt = (j = Ce) === null || j === void 0 || (J = j.data) === null || J === void 0 ? void 0 : J.user;
					return t.g.bootstrap = Ce, nt && nt.id && ie(nt.id), !await jt(at, "gates") || !await jt(bn, "tracking") ? void 0 : In()
				} catch (ce) {
					Jt(ce, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(x, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/redux/index.ts"),
				d = t("../react/common/selectors/userSelectors.ts"),
				l = t("../react/common/selectors/zoneSelectors.ts"),
				g = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/common/utils/isGuards.ts"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				E = t.n(u);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(p) {
					for (var c = 1; c < arguments.length; c++) {
						var m = arguments[c];
						for (var _ in m) Object.prototype.hasOwnProperty.call(m, _) && (p[_] = m[_])
					}
					return p
				}, n.apply(this, arguments)
			}
			const r = p => {
				function c(m) {
					const _ = (0, a.UM)(),
						T = (0, u.useHistory)(),
						A = (0, u.useLocation)(),
						h = (0, u.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						S = (0, a.p4)(d.PR) || null,
						f = (0, a.p4)(l.nA) || null,
						C = (0, a.p4)(g.uF),
						w = C ? C.account : null;
					if (!h) return null;
					const {
						accountId: O,
						app: N,
						tab: P
					} = h.params, I = h.params.zoneName && ((0, s.v5)(h.params.zoneName) || h.params.zoneName.indexOf(".") > 0) ? h.params.zoneName : void 0;
					return o().createElement(p, n({
						dispatch: _,
						history: T,
						location: A,
						match: h,
						user: S,
						membership: O ? C : null,
						account: O ? w : null,
						accountId: O || null,
						zone: I ? f : null,
						zoneName: I || null,
						app: I ? N : null,
						tab: I ? P : null
					}, m))
				}
				return c.displayName = `withEntities(${i(p)})`, c
			};

			function i(p) {
				return p.displayName || p.name || "Component"
			}
			y.Z = r
		},
		"../react/app/components/AccountHome/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				$$: function() {
					return c
				},
				QV: function() {
					return p
				},
				Yt: function() {
					return r
				},
				bA: function() {
					return i
				},
				gX: function() {
					return u
				},
				tw: function() {
					return E
				},
				xD: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			const a = "projects table click",
				d = "click create application",
				l = "account home dev plat - product card click",
				g = "account home dev plat - empty state CTA click",
				s = "account home dev plat - view all projects click",
				u = {
					SPARROW_PROJECTS_TABLE_CLICK: a,
					SPARROW_CREATE_PROJECT_CLICK: d,
					SPARROW_PRODUCT_CARD_CLICK: l,
					SPARROW_EMPTY_STATE_CTA_CLICK: g,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: s
				},
				E = m => {
					o().sendEvent(a, {
						component: m
					})
				},
				n = m => {
					o().sendEvent(a, {
						component: "menu",
						subcomponent: m
					})
				},
				r = () => {
					o().sendEvent(d, {
						category: "Projects Table"
					})
				},
				i = ({
					category: m,
					product: _
				}) => {
					o().sendEvent(l, {
						category: m,
						product: _
					})
				},
				p = () => {
					o().sendEvent(g)
				},
				c = () => {
					o().sendEvent(s)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return u
				},
				Bh: function() {
					return g
				},
				CM: function() {
					return E
				},
				MF: function() {
					return o
				},
				TS: function() {
					return i
				},
				WF: function() {
					return l
				},
				Wz: function() {
					return n
				},
				bk: function() {
					return s
				},
				fj: function() {
					return r
				},
				r4: function() {
					return d
				},
				zq: function() {
					return a
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
				a = (0, e.R)(o.ADD_SITE, p => ({
					payload: p
				})),
				d = (0, e.R)(o.RESOLVING_START),
				l = (0, e.R)(o.RESOLVING_COMPLETE),
				g = (0, e.R)(o.SELECT_ZONE, p => ({
					payload: p
				})),
				s = (0, e.R)(o.SELECT_ACCOUNT, p => ({
					payload: p
				})),
				u = (0, e.R)(o.SELECT_PAGES_PROJECT, p => ({
					payload: p
				})),
				E = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, p => ({
					payload: p
				})),
				n = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, p => ({
					accountIds: p
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				i = (0, e.R)(o.SELECT_WORKER, p => ({
					payload: p
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				BV: function() {
					return e
				},
				Dz: function() {
					return E
				},
				Fj: function() {
					return d
				},
				Kt: function() {
					return g
				},
				O5: function() {
					return l
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return n
				},
				dB: function() {
					return a
				},
				s$: function() {
					return s
				}
			});
			const e = "to",
				o = "_gl",
				a = "freeTrial",
				d = "deepLinkQueryParams",
				l = "resolvedDeepLinkQueryParams",
				g = "add",
				s = "multiSkuProducts",
				u = "/:account/billing/checkout",
				E = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return P
				},
				U: function() {
					return N.U
				},
				dd: function() {
					return N.dd
				},
				bk: function() {
					return g.bk
				},
				Bh: function() {
					return g.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../react/app/redux/index.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = t("../react/app/components/DeepLink/utils.ts"),
				l = t("../react/utils/bootstrap.ts"),
				g = t("../react/app/components/DeepLink/actions.ts"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(s);

			function E(I) {
				for (var L = 1; L < arguments.length; L++) {
					var B = arguments[L] != null ? Object(arguments[L]) : {},
						U = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(B).filter(function(H) {
						return Object.getOwnPropertyDescriptor(B, H).enumerable
					})), U.forEach(function(H) {
						n(I, H, B[H])
					})
				}
				return I
			}

			function n(I, L, B) {
				return L = r(L), L in I ? Object.defineProperty(I, L, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[L] = B, I
			}

			function r(I) {
				var L = i(I, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function i(I, L) {
				if (typeof I != "object" || I === null) return I;
				var B = I[Symbol.toPrimitive];
				if (B !== void 0) {
					var U = B.call(I, L || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(I)
			}
			class p {
				constructor(L, B) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", U => {
						this.resolvers.set(U, {
							name: U,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", U => {
						const H = this.resolvers.get(U);
						H && (H.endTime = Date.now(), this.resolvers.set(U, H))
					}), n(this, "resolverCancel", U => {
						this.resolverDone(U), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", U => {
						const H = "NO_ACTION",
							le = {
								actionType: H,
								startTime: 0
							};
						return {
							start: (Ee = H) => {
								const ae = this.resolvers.get(U);
								le.actionType = Ee, le.startTime = Date.now(), ae && ae.userActions.push(le)
							},
							finish: (Ee = H) => {
								le.actionType = Ee, le.endTime = Date.now()
							},
							cancel: (Ee = H) => {
								le.actionType = Ee, le.endTime = Date.now(), this.resolverCancel(U)
							}
						}
					}), this.deepLink = L, this.legacyDeepLink = B, this.resolvers = new Map
				}
				track(L) {
					try {
						if (this._done) return;
						this._done = !0;
						const B = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: c(this.startTime, this.endTime),
								totalCpuTime: c(this.startTime, this.endTime)
							},
							U = this.resolvers.size === 0 ? B : Array.from(this.resolvers.values()).reduce((H, le) => {
								const Ee = c(le.startTime, le.endTime),
									ae = le.userActions.reduce((Z, Q) => {
										const G = c(Q.startTime, Q.endTime);
										return {
											totalTime: Z.totalTime + G,
											actions: Z.actions.set(Q.actionType, G)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									me = Ee - ae.totalTime;
								return E({}, H, {
									totalTime: H.totalTime + Ee,
									totalUserActionsTime: H.totalUserActionsTime + ae.totalTime,
									totalCpuTime: H.totalCpuTime + me,
									[`${le.name}ResolverTotalTime`]: Ee,
									[`${le.name}ResolverTotalCpuTime`]: me,
									[`${le.name}ResolverTotalUserActionsTime`]: ae.totalTime
								}, Array.from(ae.actions.keys()).reduce((Z, Q) => E({}, Z, {
									[`${le.name}Resolver/${Q}`]: ae.actions.get(Q)
								}), {}))
							}, E({}, B, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						u().sendEvent(L, U)
					} catch (B) {
						console.error(B)
					}
				}
			}

			function c(I = Date.now(), L = Date.now()) {
				return (L - I) / 1e3
			}
			var m = t("../react/app/components/DeepLink/constants.ts"),
				_ = t("../react/common/hooks/useCachedState.ts"),
				T = t("../react/common/hooks/usePrevious.ts");

			function A(I) {
				for (var L = 1; L < arguments.length; L++) {
					var B = arguments[L] != null ? Object(arguments[L]) : {},
						U = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(B).filter(function(H) {
						return Object.getOwnPropertyDescriptor(B, H).enumerable
					})), U.forEach(function(H) {
						h(I, H, B[H])
					})
				}
				return I
			}

			function h(I, L, B) {
				return L = S(L), L in I ? Object.defineProperty(I, L, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[L] = B, I
			}

			function S(I) {
				var L = f(I, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function f(I, L) {
				if (typeof I != "object" || I === null) return I;
				var B = I[Symbol.toPrimitive];
				if (B !== void 0) {
					var U = B.call(I, L || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(I)
			}
			var w = ({
					children: I
				}) => {
					const L = (0, o.TZ)(),
						B = (0, a.useHistory)(),
						U = (0, T.Z)(B.location.pathname),
						[H, le] = (0, e.useState)(!0),
						[Ee, ae] = (0, _.j)(void 0, {
							key: m.Fj
						}),
						[me, Z] = (0, _.j)(void 0, {
							key: m.O5
						}),
						[Q, G] = (0, _.j)(void 0, {
							key: m.s$
						}),
						b = (0, l.$8)();
					let F = new URLSearchParams(B.location.search);
					const ee = (0, d.mL)(B.location.pathname, F);
					let ue = null,
						K = null;
					if (F.has(m.Tc) && F.delete(m.Tc), F.get(m.BV)) ue = F.get(m.BV), B.location.hash && (K = B.location.hash);
					else if (Ee) {
						const $ = new URLSearchParams(Ee);
						$.get(m.BV) && (ue = $.get(m.BV), F = $)
					} else ee && (F.set(m.BV, ee), ue = ee);
					if (ue && m._h.test(ue)) {
						const $ = F.getAll(m.Kt),
							X = JSON.stringify($);
						$.length && X !== Q && G(X), F.has(m.Tc) && F.delete(m.Tc), F.delete(m.Kt)
					}!b && Ee === void 0 && ue && ae(F.toString());
					const q = async () => {
						try {
							if ((0, d.I3)(ue) && b) {
								Ee && ae(void 0), L.dispatch((0, g.r4)()), le(!0), ue && ue !== me && Z(ue);
								const $ = await (0, d.py)(ue, le, L, B, U, new p(ue, ee ? `${B.location.pathname}${B.location.search}` : void 0));
								F.delete(m.BV);
								const X = F.toString();
								B.replace(A({}, B.location, {
									pathname: $,
									search: X
								}, K ? {
									hash: K
								} : {})), L.dispatch((0, g.WF)())
							}
						} catch ($) {
							L.dispatch((0, g.WF)()), console.error($)
						} finally {
							le(!1)
						}
					};
					return (0, e.useEffect)(() => {
						q()
					}, [B.location.pathname, B.location.search]), (H || (0, d.I3)(ue)) && b ? null : I
				},
				O = t("../react/app/components/DeepLink/reducer.ts"),
				N = t("../react/app/components/DeepLink/selectors.ts"),
				P = w
		},
		"../react/app/components/DeepLink/reducer.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return d
				},
				r: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				a = t("../react/app/components/DeepLink/actions.ts");
			const d = null,
				l = o().from({
					lastAction: d,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function g(s = l, u) {
				if (u.type === a.MF.RESOLVING_COMPLETE) return l;
				if (u.type === a.MF.RESOLVING_START) return s.set("isResolving", !0);
				if (s.isResolving) {
					if (u.type === a.MF.RESOLVING_COMPLETE) return s.set("isResolving", !1);
					if (u.type === a.MF.SET_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", u.accountIds);
					if (u.type === a.MF.DELETE_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", void 0);
					{
						let E = s;
						try {
							E = s.set("lastAction", u)
						} catch {
							E = s.set("lastAction", {
								type: u.type
							})
						}
						return E
					}
				} else return s
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return a
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
				a = d => d.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				I3: function() {
					return p
				},
				X1: function() {
					return r
				},
				mL: function() {
					return A
				},
				py: function() {
					return T
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/components/DeepLink/reducer.ts"),
				a = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const d = h => h.replace(a.default.endsWithSlash, ""),
				l = h => {
					const S = d(h).split("/").slice(3);
					return S.length ? "/" + S.join("/") : ""
				},
				g = h => {
					const S = d(h).split("/").slice(2);
					return S.length ? `apps/${S.join("/")}` : "apps"
				};
			var s = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/app/components/DeepLink/constants.ts"),
				E = t("../react/common/validators/index.js"),
				n = t("../react/common/utils/isGuards.ts");
			const r = h => (0, E.Lb)(h) && (h.split(".").length > 1 || (0, n.v5)(h)),
				i = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				p = h => typeof h == "string" && h.startsWith("/"),
				c = (h, S) => f => new Promise((C, w) => {
					S.start();
					const O = h.subscribe(() => {
						const N = (0, s.yI)(h.getState());
						N === o.E ? (S.cancel(), O(), w("DeepLink: waitForAction out of context.")) : f(N) && (S.finish(N.type), O(), C(N))
					})
				}),
				m = (h, S, f) => (C, w) => new Promise((O, N) => {
					f.start();
					const P = S.location.pathname;
					C = new URL(C, window.location.href).pathname, P !== C && (f.cancel(), N(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${C}", but on "${P}". You need to redirect to "${C}", and unblockRouter in your Resolver, before you use this function.`));
					const I = h.subscribe(() => {
						const L = (0, s.yI)(h.getState()),
							B = S.location.pathname,
							H = new URLSearchParams(S.location.search).get(u.BV);
						(B !== C || !!H) && (f.cancel(), I(), N(`DeepLink: waitForPageAction user navigated away from "${C}" to "${B}${H?S.location.search:""}"`)), L === o.E ? (f.cancel(), I(), N("DeepLink: waitForPageAction out of context.")) : w(L) && (f.finish(L.type), I(), O(L))
					})
				});

			function _(h) {
				const S = [],
					f = h.split("?")[0].split("/");
				for (let C of f) C.length !== 0 && (C.startsWith(":") ? S.push({
					value: C.substring(1),
					type: "dynamic"
				}) : S.push({
					value: C,
					type: "static"
				}));
				return S
			}
			async function T(h, S, f, C, w, O) {
				O.start();
				const N = _(h),
					I = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					L = {};
				let B = "";
				for (const [U, H] of N.entries())
					if (H.type === "static") B = [B, H.value].join("/");
					else if (H.type === "dynamic" && i.is(H.value) && H.value in I) {
					O.resolverStart(H.value);
					const le = await I[H.value]({
						deepLink: h,
						blockRouter: () => S(!0),
						unblockRouter: () => S(!1),
						routerHistory: C,
						resolvedValues: L,
						store: f,
						referringRoute: w,
						uri: {
							currentPartIdx: U,
							parts: N
						},
						waitForAction: c(f, O.createUserActionTracker(H.value)),
						waitForPageAction: m(f, C, O.createUserActionTracker(H.value))
					});
					O.resolverDone(H.value), B = [B, le].join("/"), L[H.value] = le
				} else throw O.cancel(), new Error(`DeepLink: Resolver with name '${H.value}' is not supported.`);
				return O.done(), B
			}

			function A(h, S) {
				const f = ":account",
					C = ":zone",
					w = S.get("zone");
				if (w) return S.delete("zone"), `/${f}/${C}/${w}`;
				const O = S.get("account");
				if (O) return S.delete("account"), `/${f}/${O}`;
				if (h === "/overview") return `/${f}/${C}`;
				if (h === "/apps") return `/${f}/${C}/${g(h)}`;
				const N = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const P of N) {
					const I = P.length;
					if (h.startsWith(P) && (h.length === I || h[I] === "/")) return `/${f}/${C}${h}`
				}
				switch (h) {
					case "/account/billing":
						return `/${f}/billing`;
					case "/account/subscriptions":
						return `/${f}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${f}/dns-firewall`;
					case "/account/audit-log":
						return `/${f}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				d = t("../react/app/components/SomethingWrong.jsx"),
				l = t("../utils/sentry/lastSentEventId.ts"),
				g = t("../react/utils/zaraz.ts"),
				s = t("../react/utils/url.ts"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				E = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(r),
				p = t("../react/common/components/Page.tsx"),
				c = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function m() {
				return (0, e.useEffect)(() => {
					i().sendEvent("new page available refresh cta")
				}, []), o().createElement(p.Z, {
					type: "narrow",
					textAlign: "center",
					title: o().createElement(u.ZC, {
						textAlign: "center",
						fontSize: 5,
						fontWeight: 400
					}, o().createElement(n.Trans, {
						id: "error.new_page_version_available.title"
					})),
					description: o().createElement(n.Trans, {
						id: "error.new_page_version_available.description"
					})
				}, o().createElement(u.ZC, null, o().createElement(u.Ei, {
					height: 116,
					src: c,
					"aria-hidden": !0
				})), o().createElement(E.zx, {
					mt: 3,
					type: "primary",
					iconType: "refresh",
					onClick: () => window.location.reload()
				}, o().createElement(n.Trans, {
					id: "common.refresh"
				})))
			}
			const _ = ({
				sentryTag: T,
				children: A
			}) => o().createElement(a.SV, {
				beforeCapture: h => {
					g.tg === null || g.tg === void 0 || g.tg.track("page-error", {
						page: (0, s.Fl)(window.location.pathname)
					})
				},
				onError: h => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(h)
				},
				fallback: ({
					error: h,
					eventId: S
				}) => {
					var f;
					const C = l.e.getEventId() || S;
					return (h == null || (f = h.message) === null || f === void 0 ? void 0 : f.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), o().createElement(m, null)) : o().createElement(d.Z, {
						type: "page",
						error: h,
						eventId: C,
						sentryTag: T
					})
				}
			}, A)
		},
		"../react/app/components/Footer.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return G
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(s),
				E = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				r = t("../react/utils/translator.tsx"),
				i = t("../../../../node_modules/moment/moment.js"),
				p = t.n(i);
			const c = () => {
					const b = p()().format("YYYY"),
						F = ee => {
							u().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: ee
							})
						};
					return o().createElement(m, {
						marginTop: "auto"
					}, o().createElement(_, null, o().createElement(T, null, o().createElement(A, null, "\xA9 ", b, " Cloudflare, Inc."), o().createElement(A, null, o().createElement(h, null, o().createElement(S, {
						showOnDeskTop: !1
					}, o().createElement(f, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => F("Support")
					}, o().createElement(r.cC, {
						id: "common.support"
					}))), o().createElement(S, null, o().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => F("Privacy Policy")
					}, o().createElement(r.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(S, null, o().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => F("Terms of Use")
					}, o().createElement(r.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(S, null, o().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => F("Cookie Preferences")
					}, o().createElement(r.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(S, null, o().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => F("Trademark")
					}, o().createElement(r.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(h, null, o().createElement(S, null, o().createElement(f, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => F("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(r.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				m = (0, l.createComponent)(({
					theme: b,
					marginTop: F
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: F
				})),
				_ = (0, l.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				T = (0, l.createComponent)(({
					theme: b
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${b.space[3]}px`
					}
				})),
				A = (0, l.createComponent)(({
					theme: b
				}) => ({
					width: "100%",
					color: b.colors.white,
					fontSize: b.fontSizes[1],
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
				h = (0, l.createComponent)(({
					theme: b
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: b.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				S = (0, l.createComponent)(({
					showOnDeskTop: b = !0,
					theme: F
				}) => ({
					color: F.colors.white,
					fontSize: F.fontSizes[1],
					height: "20px",
					display: b ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: F.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: F.space[3],
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
				f = (0, l.createStyledComponent)(({
					theme: b
				}) => ({
					textDecoration: "none",
					color: b.colors.white,
					"&:hover": {
						color: b.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var C = c,
				w = t("../react/pages/welcome/routes.ts"),
				O = t("../react/utils/cookiePreferences.ts"),
				N = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				I = () => {
					const [b, F] = (0, e.useState)(!1), ee = (0, O.wV)(), ue = () => {
						F(!0)
					}, K = () => {
						F(!1)
					}, q = ee && ee === "US" ? (0, r.ZP)("footer.cpra_cta.privacy_choices") : (0, r.ZP)("footer.cpra_cta.cookie_preferences"), $ = {
						background: "transparent",
						borderRadius: "none",
						color: b ? (0, g.Yc)() ? "#ee730a" : "#003681" : (0, g.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: b ? "underline" : "none",
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
						style: $,
						onMouseEnter: ue,
						onMouseLeave: K
					}, o().createElement(d.Ei, {
						height: 15,
						src: N,
						mr: 2,
						alt: q
					}), q)
				};

			function L() {
				return L = Object.assign ? Object.assign.bind() : function(b) {
					for (var F = 1; F < arguments.length; F++) {
						var ee = arguments[F];
						for (var ue in ee) Object.prototype.hasOwnProperty.call(ee, ue) && (b[ue] = ee[ue])
					}
					return b
				}, L.apply(this, arguments)
			}

			function B(b, F) {
				if (b == null) return {};
				var ee = U(b, F),
					ue, K;
				if (Object.getOwnPropertySymbols) {
					var q = Object.getOwnPropertySymbols(b);
					for (K = 0; K < q.length; K++) ue = q[K], !(F.indexOf(ue) >= 0) && (!Object.prototype.propertyIsEnumerable.call(b, ue) || (ee[ue] = b[ue]))
				}
				return ee
			}

			function U(b, F) {
				if (b == null) return {};
				var ee = {},
					ue = Object.keys(b),
					K, q;
				for (q = 0; q < ue.length; q++) K = ue[q], !(F.indexOf(K) >= 0) && (ee[K] = b[K]);
				return ee
			}
			const H = (0, l.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,g.Yc)()?g.rS.colors.orange[6]:g.rS.colors.blue[4]}`
					}
				}), d.A),
				le = (0, l.createStyledComponent)(({
					theme: b
				}) => ({
					color: b.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, E.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: b.colors.gray[4]
					}
				}), d.A),
				Ee = b => {
					let {
						onClick: F
					} = b, ee = B(b, ["onClick"]);
					return React.createElement(H, L({
						onClick: ue => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: ee.href
							}), F && F(ue)
						}
					}, ee))
				},
				ae = b => {
					let {
						children: F,
						target: ee,
						rel: ue
					} = b, K = B(b, ["children", "target", "rel"]);
					return o().createElement(le, L({
						target: ee || "_blank",
						rel: ue || "noopener noreferrer"
					}, K), F)
				},
				me = (0, l.createStyledComponent)(({
					theme: b
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, E.tq)() ? "8px" : "16px",
					"& > li": {
						listStyleType: "none",
						"& > a": {
							fontSize: b.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: b.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), d.Ul),
				Z = (0, l.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, E.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), d.ZC);
			var G = () => {
				const b = [w.d.root.pattern].some(ee => (0, a.matchPath)(location.pathname, {
					path: ee
				}));
				if ((0, n.PP)()) return o().createElement(C, null);
				if (b) return null;
				const F = new Date().getFullYear();
				return o().createElement(d.$_, {
					height: (0, E.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto"
				}, o().createElement(Z, null, o().createElement(me, null, o().createElement(d.Li, null, o().createElement(ae, {
					href: "https://support.cloudflare.com"
				}, (0, r.ZP)("common.support"))), o().createElement(d.Li, null, o().createElement(ae, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(d.Dr, {
					textTransform: "capitalize"
				}, (0, r.ZP)("footer.system_status")))), o().createElement(d.Li, null, o().createElement(ae, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, r.ZP)("footer.careers"))), o().createElement(d.Li, null, o().createElement(ae, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, r.ZP)("footer.tos_reduced"))), o().createElement(d.Li, null, o().createElement(ae, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, r.ZP)("footer.security_issues"))), o().createElement(d.Li, null, o().createElement(ae, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, r.ZP)("footer.privacy_policy"))), o().createElement(d.Li, null, o().createElement(I, null)), o().createElement(d.Li, null, o().createElement(d.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", F, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(x, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/components/ErrorStatus.tsx"),
				d = t("../react/utils/translator.tsx");
			const l = g => o().createElement(a.Z, g, (0, d.ZP)("error.forbidden"));
			y.Z = l
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return _
				},
				Z: function() {
					return q
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				d = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../node_modules/@cloudflare/component-button/es/index.js"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = t.n(u),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				r = t("../react/common/components/AccessControl/index.js"),
				i = t("../react/common/components/ButtonWithDropdown.tsx"),
				p = t("../react/common/components/Dropdown/index.tsx"),
				c = t("../react/utils/translator.tsx"),
				m = t("../react/common/hooks/useGate.ts");
			const _ = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				T = () => {
					const $ = (0, m.Z)("super-add-button-copy-change"),
						X = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: _.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/registrar/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: _.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: _.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: _.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: _.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: _.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}];
					switch ($) {
						case "existing-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
								},
								trackingEvent: _.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...X];
						case "existing-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site_app"
								},
								trackingEvent: _.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...X];
						case "existing-site":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site"
								},
								trackingEvent: _.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...X];
						case "your-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_website_app"
								},
								trackingEvent: _.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...X];
						case "your-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_site_app"
								},
								trackingEvent: _.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...X];
						default:
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title"
								},
								trackingEvent: _.EXISTING_DOMAIN,
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
								trackingEvent: _.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/registrar/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: _.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: _.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: _.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: _.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: _.ACCOUNT_MEMBERS,
								icon: "user-outline",
								url: "?to=/:account/members/invite",
								description: {
									id: "onboarding.add_product.account_member.description"
								},
								permissionCheck: "#member:edit"
							}]
					}
				},
				A = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: _.EXISTING_DOMAIN,
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
					trackingEvent: _.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/registrar/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: _.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: _.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: _.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: _.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: _.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var h = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function S($) {
				for (var X = 1; X < arguments.length; X++) {
					var W = arguments[X] != null ? Object(arguments[X]) : {},
						te = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(W).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(W, ye).enumerable
					})), te.forEach(function(ye) {
						f($, ye, W[ye])
					})
				}
				return $
			}

			function f($, X, W) {
				return X = C(X), X in $ ? Object.defineProperty($, X, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[X] = W, $
			}

			function C($) {
				var X = w($, "string");
				return typeof X == "symbol" ? X : String(X)
			}

			function w($, X) {
				if (typeof $ != "object" || $ === null) return $;
				var W = $[Symbol.toPrimitive];
				if (W !== void 0) {
					var te = W.call($, X || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (X === "string" ? String : Number)($)
			}

			function O() {
				return O = Object.assign ? Object.assign.bind() : function($) {
					for (var X = 1; X < arguments.length; X++) {
						var W = arguments[X];
						for (var te in W) Object.prototype.hasOwnProperty.call(W, te) && ($[te] = W[te])
					}
					return $
				}, O.apply(this, arguments)
			}

			function N($, X) {
				if ($ == null) return {};
				var W = P($, X),
					te, ye;
				if (Object.getOwnPropertySymbols) {
					var Ae = Object.getOwnPropertySymbols($);
					for (ye = 0; ye < Ae.length; ye++) te = Ae[ye], !(X.indexOf(te) >= 0) && (!Object.prototype.propertyIsEnumerable.call($, te) || (W[te] = $[te]))
				}
				return W
			}

			function P($, X) {
				if ($ == null) return {};
				var W = {},
					te = Object.keys($),
					ye, Ae;
				for (Ae = 0; Ae < te.length; Ae++) ye = te[Ae], !(X.indexOf(ye) >= 0) && (W[ye] = $[ye]);
				return W
			}
			const I = $ => {
					let {
						title: X,
						trackingEvent: W,
						icon: te,
						url: ye,
						description: Ae,
						disabled: Fe
					} = $, xe = N($, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(L, O({
						to: !Fe && ye || "#",
						"aria-disabled": Fe,
						onClick: () => {
							E().sendEvent(W, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, xe), o().createElement(d.ZC, {
						display: "flex"
					}, o().createElement(a.J, {
						type: te,
						size: 24,
						mr: 2
					}), o().createElement(d.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(d.ZC, {
						fontSize: 3
					}, o().createElement(c.cC, X)), o().createElement(d.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(c.cC, Ae)))))
				},
				L = (0, n.createStyledComponent)(({
					theme: $
				}) => {
					const X = {
						cursor: "pointer",
						backgroundColor: (0, g.Yc)() ? $.colors.gray[8] : $.colors.gray[9],
						color: $.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: 16,
						py: 8,
						background: $.colors.background,
						color: $.colors.gray[2],
						fontSize: $.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': X,
						':focus-within:not([aria-disabled="true"])': S({}, X, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: $.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, h.Link);
			var B = I;

			function U() {
				return U = Object.assign ? Object.assign.bind() : function($) {
					for (var X = 1; X < arguments.length; X++) {
						var W = arguments[X];
						for (var te in W) Object.prototype.hasOwnProperty.call(W, te) && ($[te] = W[te])
					}
					return $
				}, U.apply(this, arguments)
			}

			function H($) {
				for (var X = 1; X < arguments.length; X++) {
					var W = arguments[X] != null ? Object(arguments[X]) : {},
						te = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(W).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(W, ye).enumerable
					})), te.forEach(function(ye) {
						le($, ye, W[ye])
					})
				}
				return $
			}

			function le($, X, W) {
				return X = Ee(X), X in $ ? Object.defineProperty($, X, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[X] = W, $
			}

			function Ee($) {
				var X = ae($, "string");
				return typeof X == "symbol" ? X : String(X)
			}

			function ae($, X) {
				if (typeof $ != "object" || $ === null) return $;
				var W = $[Symbol.toPrimitive];
				if (W !== void 0) {
					var te = W.call($, X || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (X === "string" ? String : Number)($)
			}

			function me($, X) {
				if ($ == null) return {};
				var W = Z($, X),
					te, ye;
				if (Object.getOwnPropertySymbols) {
					var Ae = Object.getOwnPropertySymbols($);
					for (ye = 0; ye < Ae.length; ye++) te = Ae[ye], !(X.indexOf(te) >= 0) && (!Object.prototype.propertyIsEnumerable.call($, te) || (W[te] = $[te]))
				}
				return W
			}

			function Z($, X) {
				if ($ == null) return {};
				var W = {},
					te = Object.keys($),
					ye, Ae;
				for (Ae = 0; Ae < te.length; Ae++) ye = te[Ae], !(X.indexOf(ye) >= 0) && (W[ye] = $[ye]);
				return W
			}
			const Q = "GLOBAL_ADD_DROPDOWN",
				G = (0, n.createStyledComponent)(({
					theme: $
				}) => ({
					"background-color": $.colors.blue[5]
				}), l.zx),
				b = ({
					disableProducts: $
				}) => {
					const X = T();
					return (0, e.useEffect)(() => (E().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						E().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), []), o().createElement(i.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0",
						bottom: "auto",
						zIndex: 1200
					}, X.map(W => {
						const te = W || {},
							{
								disableOn: ye,
								permissionCheck: Ae
							} = te,
							Fe = me(te, ["disableOn", "permissionCheck"]),
							xe = ye && $[ye],
							$e = H({}, Fe, {
								disabled: xe
							});
						return Ae ? o().createElement(r.Z, {
							key: W.title.id,
							edit: Ae
						}, ({
							isEditable: Ke
						}) => Ke && o().createElement(B, $e)) : o().createElement(B, U({
							key: W.url
						}, $e))
					}))
				},
				F = ({
					disableProducts: $,
					topNavType: X
				}) => {
					const W = () => (0, s.tq)() || X === "icon-only" ? o().createElement(d.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, o().createElement(G, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : X === "text-icon" || X === "icon-only-with-add-button" ? o().createElement(l.zx, {
						type: "primary",
						mr: X === "icon-only-with-add-button" ? 3 : 0
					}, o().createElement(o().Fragment, null, o().createElement(a.J, {
						label: "plus",
						type: "plus"
					}), " ", o().createElement(c.cC, {
						id: "common.add"
					}))) : o().createElement(l.zx, {
						type: "primary"
					}, o().createElement(c.cC, {
						id: "common.add"
					}), " ", o().createElement(a.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return o().createElement(ee, {
						role: "group",
						"data-testid": Q
					}, o().createElement(p.Lt, {
						trigger: X === "baseline" ? o().createElement(ue, null, o().createElement(a.J, {
							label: "plus",
							type: "plus"
						}), !(0, s.tq)() && o().createElement(o().Fragment, null, o().createElement(c.cC, {
							id: "common.add"
						}), " ", o().createElement(a.J, {
							label: "arrow",
							type: "caret-down"
						}))) : W(),
						menu: o().createElement(b, {
							disableProducts: $
						})
					}))
				},
				ee = (0, n.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				ue = (0, n.createStyledComponent)(({
					theme: $
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: $.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, g.Yc)() ? $.colors.gray[1] : $.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, g.Yc)() ? $.colors.gray[8] : $.colors.gray[9]
					}
				}), d.zx);
			var K = F,
				q = K
		},
		"../react/app/components/LoadingSuspense.tsx": function(x, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				d = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../react/utils/translator.tsx"),
				g = t("../react/app/components/ErrorStatus.tsx"),
				s = t("../react/common/components/EmptyPage.jsx"),
				u = t("../react/common/hooks/suspenseHelpers.ts");

			function E(i) {
				const [p, c] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const m = window.setTimeout(() => c(!0), i);
					return () => window.clearTimeout(m)
				}, []), p
			}
			const n = ({
					loadingTimeout: i = 1e3,
					stillLoadingTimeout: p = 9e3
				}) => {
					const c = E(i),
						m = E(p);
					if ((0, u.nW)(), !c && !m) return o().createElement(s.Z, null);
					const _ = m ? o().createElement(l.cC, {
						id: "common.still_loading"
					}) : c ? o().createElement(l.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(g.Z, {
						size: 5
					}, o().createElement(d.ZC, {
						mr: 3
					}, o().createElement(a.g, {
						size: "2x"
					})), _)
				},
				r = ({
					children: i
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(n, null)
				}, i);
			y.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				C8: function() {
					return u
				},
				dr: function() {
					return l
				},
				lt: function() {
					return g
				},
				m6: function() {
					return n
				},
				n: function() {
					return E
				},
				yl: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const a = "/persistence/user",
				d = async () => {
					try {
						return await (await e.get(a, {
							hideErrorAlert: !0
						})).body
					} catch (r) {
						console.error(r)
					}
				}, l = async r => {
					try {
						return await (await e.get(`/accounts/${r}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (i) {
						console.error(i)
					}
				}, g = async (r, i) => {
					try {
						return await (await e.post(`${a}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: r,
								accountId: i
							}),
							hideErrorAlert: !0
						})).body
					} catch (p) {
						return console.error(p), []
					}
				}, s = async (r, i) => {
					try {
						return await http.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: i
							}),
							hideErrorAlert: !0
						}), !0
					} catch (p) {
						return console.error(p), !1
					}
				}, u = async r => {
					try {
						return await (await e.post(a, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (i) {
						console.error(i)
					}
				}, E = async r => {
					try {
						return await (await e.post(`${a}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (i) {
						console.error(i)
					}
				}, n = async r => {
					try {
						return await (await e.post(`${a}/viewed-changes`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (i) {
						throw console.error(i), i
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				Wl: function() {
					return E
				},
				lp: function() {
					return _
				},
				Z_: function() {
					return A
				},
				r7: function() {
					return I
				},
				Tv: function() {
					return me
				},
				yZ: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/redux/index.ts"),
				d = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(d),
				g = t("../react/utils/bootstrap.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/Persistence/api.ts");
			const E = 10;

			function n(Z) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var G = arguments[Q] != null ? Object(arguments[Q]) : {},
						b = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(G).filter(function(F) {
						return Object.getOwnPropertyDescriptor(G, F).enumerable
					})), b.forEach(function(F) {
						r(Z, F, G[F])
					})
				}
				return Z
			}

			function r(Z, Q, G) {
				return Q = i(Q), Q in Z ? Object.defineProperty(Z, Q, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[Q] = G, Z
			}

			function i(Z) {
				var Q = p(Z, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function p(Z, Q) {
				if (typeof Z != "object" || Z === null) return Z;
				var G = Z[Symbol.toPrimitive];
				if (G !== void 0) {
					var b = G.call(Z, Q || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(Z)
			}
			const c = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				m = n({}, c, {
					isLoading: !0,
					remainingStarSlots: 10,
					actions: {
						starZone: () => null,
						setDarkMode: () => null,
						isZoneStarred: () => !1,
						canAccountStarZone: () => !0,
						logRouteVisited: () => null,
						viewChange: () => null
					}
				}),
				_ = (0, e.createContext)(m),
				T = _.Consumer,
				A = ({
					children: Z,
					onDarkModeChangeCb: Q
				}) => {
					const [G, b] = (0, e.useState)(c), [F, ee] = (0, e.useState)(m.isLoading), ue = (0, g.$8)(), K = (0, a.p4)(W => (0, s.wH)(W));
					(0, e.useEffect)(() => {
						ue ? (0, u.yl)().then(W => {
							W && (b(W), Q(W.darkMode))
						}).finally(() => ee(!1)) : ee(!1)
					}, [ue]);
					const q = (W, te) => !!G.favorites.find(ye => ye.type === "zone" && ye.name === W && ye.accountId === te),
						$ = E - G.favorites.length,
						X = W => G.favorites.filter(ye => ye.type === "zone" && ye.accountId === W).length < E;
					return o().createElement(_.Provider, {
						value: n({}, G, {
							isLoading: F,
							remainingStarSlots: $,
							actions: {
								canAccountStarZone: X,
								isZoneStarred: q,
								starZone: async (W, te) => {
									var ye;
									const Ae = !q(W, te),
										Fe = X(te);
									if (Ae && !Fe) {
										console.log("can not star zone - account is at limit");
										return
									}
									const xe = await (0, u.lt)(W, te);
									l().sendEvent("click star zone", {
										isStarring: Ae,
										totalStarredZones: xe.filter($e => $e.accountId === te && $e.type === "zone").length,
										totalZones: K == null || (ye = K.paginationData) === null || ye === void 0 ? void 0 : ye.info.total_count
									}), b(n({}, G, {
										favorites: xe
									}))
								},
								setDarkMode: async W => {
									const te = await (0, u.C8)(W);
									b(te), Q(te.darkMode)
								},
								logRouteVisited: async W => {
									var te;
									const ye = await (0, u.n)(W);
									b((te = ye) !== null && te !== void 0 ? te : n({}, G))
								},
								viewChange: async W => {
									const te = await (0, u.m6)(W);
									b(n({}, G, {
										viewedChanges: te
									}))
								}
							}
						})
					}, Z)
				},
				h = () => (0, e.useContext)(_);
			var S = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function C() {
				return C = Object.assign ? Object.assign.bind() : function(Z) {
					for (var Q = 1; Q < arguments.length; Q++) {
						var G = arguments[Q];
						for (var b in G) Object.prototype.hasOwnProperty.call(G, b) && (Z[b] = G[b])
					}
					return Z
				}, C.apply(this, arguments)
			}

			function w(Z, Q) {
				if (Z == null) return {};
				var G = O(Z, Q),
					b, F;
				if (Object.getOwnPropertySymbols) {
					var ee = Object.getOwnPropertySymbols(Z);
					for (F = 0; F < ee.length; F++) b = ee[F], !(Q.indexOf(b) >= 0) && (!Object.prototype.propertyIsEnumerable.call(Z, b) || (G[b] = Z[b]))
				}
				return G
			}

			function O(Z, Q) {
				if (Z == null) return {};
				var G = {},
					b = Object.keys(Z),
					F, ee;
				for (ee = 0; ee < b.length; ee++) F = b[ee], !(Q.indexOf(F) >= 0) && (G[F] = Z[F]);
				return G
			}
			const N = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var I = Z => {
					let {
						isStarred: Q,
						size: G = 16
					} = Z, b = w(Z, ["isStarred", "size"]);
					const F = N[(0, S.Yc)() ? "dark" : "light"];
					return o().createElement(f.J, C({
						type: Q ? "star" : "star-outline",
						color: Q ? F.gold : F.gray,
						size: G
					}, b))
				},
				L = t("../node_modules/@cloudflare/elements/es/index.js");

			function B(Z) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var G = arguments[Q] != null ? Object(arguments[Q]) : {},
						b = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(G).filter(function(F) {
						return Object.getOwnPropertyDescriptor(G, F).enumerable
					})), b.forEach(function(F) {
						U(Z, F, G[F])
					})
				}
				return Z
			}

			function U(Z, Q, G) {
				return Q = H(Q), Q in Z ? Object.defineProperty(Z, Q, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[Q] = G, Z
			}

			function H(Z) {
				var Q = le(Z, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function le(Z, Q) {
				if (typeof Z != "object" || Z === null) return Z;
				var G = Z[Symbol.toPrimitive];
				if (G !== void 0) {
					var b = G.call(Z, Q || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(Z)
			}
			const Ee = {
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
			var me = (0, e.forwardRef)(({
				featurePreview: Z = !1,
				isStarred: Q,
				onClickFn: G,
				isDisabled: b,
				testId: F,
				buttonText: ee,
				size: ue = "large",
				variant: K = "pill"
			}, q) => {
				const [$, X] = (0, e.useState)(!1), W = Ee[(0, S.Yc)() ? "dark" : "light"][Q && !Z ? "active" : "default"], te = B({}, ue === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, ue === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, ue === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), ye = {
					pill: "50vh",
					button: 4
				};
				return o().createElement(L.zx, {
					onMouseEnter: () => X(!0),
					onMouseLeave: () => X(!1),
					innerRef: q,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: te.paddingRight,
					gap: 1,
					pl: te.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: ye[K],
					border: "1px solid",
					cursor: Z || b ? "default" : "pointer",
					backgroundColor: $ ? W.bgHover : W.bg,
					color: W.text,
					borderColor: W.border,
					onClick: G,
					opacity: b ? .5 : 1,
					disabled: b,
					fontSize: te.fontSize,
					height: te.height,
					"data-testid": F
				}, o().createElement(I, {
					isStarred: Z ? !1 : Q,
					size: te.starIconSize
				}), ee)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				$n: function() {
					return p
				},
				IU: function() {
					return m
				},
				Wq: function() {
					return w
				},
				dL: function() {
					return _
				},
				fO: function() {
					return C
				},
				gw: function() {
					return N
				},
				hv: function() {
					return c
				},
				iY: function() {
					return r
				},
				jq: function() {
					return P
				},
				o_: function() {
					return h
				},
				us: function() {
					return f
				},
				wB: function() {
					return i
				},
				zJ: function() {
					return S
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				d = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/utils/zoneLevelAccess.ts"),
				g = t("../react/pages/stream/selectors.ts"),
				s = t("../react/pages/home/domain-registration/selectors.ts"),
				u = t("../react/pages/images/selectors.ts"),
				E = t("../react/pages/r2/selectors.ts");
			const n = I => !!(0, l.b)(I),
				r = I => n(I) ? (0, e.hT)(I) : !0,
				i = (I, L, B, U = "read") => {
					const H = (0, a.nA)(I);
					return n(I) ? (0, e.WL)(I, (0, e.W9)(B, e.ZZ[U]), (0, e.j)(H == null ? void 0 : H.id)) : (0, d.Yj)(I)(L)[U]
				},
				p = (I, L, B, U = "read") => {
					const H = (0, a.nA)(I),
						le = e.zs.includes(B);
					return n(I) ? (0, e.WL)(I, le ? B : (0, e.my)(B, e.ZZ[U === "edit" ? "update" : U]), (0, e.j)(H == null ? void 0 : H.id)) : (0, d.Yj)(I)(L)[U === "update" ? "edit" : U]
				},
				c = I => !!(0, g._Q)(I),
				m = I => (0, u.pT)(I),
				_ = I => (0, u.pT)(I) && (0, u.GH)(I),
				T = I => sourcingKitEnabledSelector(I),
				A = I => !!r2EnabledSelector(I),
				h = I => (0, E.Mv)(I),
				S = I => (0, o.$f)(I, "rulesets.magic_transit_allowed"),
				f = I => (0, o.$f)(I, "flowtrackd.magic_custom_config_allowed"),
				C = I => (0, o.$f)(I, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				w = I => (0, d.Le)(I, "ddos_protection", "l4_rulesets"),
				O = I => hasAccountEntitlements(I, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				N = I => (0, s.HO)(I),
				P = I => !(0, o.yD)(I) && !!p(I, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function(x, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = t.n(a),
				l = t("../../../../node_modules/prop-types/index.js"),
				g = t.n(l),
				s = t("webpack/sharing/consume/default/react-redux/react-redux"),
				u = t.n(s),
				E = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(E),
				r = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				p = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				c = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				m = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				_ = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				T = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				A = t.n(T),
				h = t("../react/common/actions/membershipActions.ts"),
				S = t("../react/utils/url.ts"),
				f = t("../react/app/components/Footer.tsx");

			function C(me) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var Q = arguments[Z] != null ? Object(arguments[Z]) : {},
						G = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(Q).filter(function(b) {
						return Object.getOwnPropertyDescriptor(Q, b).enumerable
					})), G.forEach(function(b) {
						w(me, b, Q[b])
					})
				}
				return me
			}

			function w(me, Z, Q) {
				return Z = O(Z), Z in me ? Object.defineProperty(me, Z, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : me[Z] = Q, me
			}

			function O(me) {
				var Z = N(me, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function N(me, Z) {
				if (typeof me != "object" || me === null) return me;
				var Q = me[Symbol.toPrimitive];
				if (Q !== void 0) {
					var G = Q.call(me, Z || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(me)
			}
			const P = (0, r.createComponent)(({
					type: me
				}) => ({
					height: me !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				I = (0, r.createComponent)(({
					theme: me,
					margin: Z,
					size: Q = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: me.colors.gray[3],
					height: Z ? "auto" : "100%",
					padding: Z ? 0 : me.space[Q > 1 ? Q - 2 : 0],
					margin: Z,
					justifyContent: "center",
					alignItems: "center"
				})),
				L = (0, r.createComponent)(() => ({
					textAlign: "left"
				})),
				B = (0, r.createComponent)(() => ({
					textAlign: "right"
				})),
				U = (0, r.createComponent)(({
					theme: me
				}) => ({
					fontSize: me.fontSizes[6]
				})),
				H = (0, r.createComponent)(({
					theme: me
				}) => ({
					fontSize: me.fontSizes[4]
				})),
				le = (0, r.createComponent)(({
					theme: me
				}) => ({
					fontSize: me.fontSizes[3]
				})),
				Ee = (0, r.createComponent)(({
					theme: me
				}) => ({
					width: "100%",
					height: 125,
					marginTop: me.space[4],
					padding: me.space[2]
				}), "textarea");
			class ae extends o().Component {
				constructor(...Z) {
					super(...Z);
					w(this, "state", {
						value: "",
						submitted: !1
					}), w(this, "handleTextareaChange", Q => {
						this.setState({
							value: Q.target.value
						})
					}), w(this, "sendErrToSentry10", async () => {
						try {
							var Q, G, b, F;
							const ee = ((Q = window) === null || Q === void 0 || (G = Q.bootstrap) === null || G === void 0 || (b = G.data) === null || b === void 0 || (F = b.user) === null || F === void 0 ? void 0 : F.id) || "Unknown",
								ue = this.props.eventId || p.eW(),
								K = {
									name: ee,
									email: `${ee}@userid.com`,
									comments: this.state.value,
									eventId: ue,
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
								body: JSON.stringify(K)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (ee) {
							console.error(ee)
						}
					}), w(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), w(this, "renderContent", Q => o().createElement(E.I18n, null, G => o().createElement(P, {
						type: Q
					}, o().createElement(I, null, o().createElement(L, null, o().createElement(U, null, G.t("error.internal_issues")), o().createElement(H, null, G.t("error.help_us")), o().createElement(Ee, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: b => this.handleTextareaChange(b),
						disabled: this.state.submitted,
						placeholder: G.t("error.give_feedback")
					}), o().createElement(B, null, !this.state.submitted && o().createElement(i.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, G.t("common.submit")), this.state.submitted && o().createElement(le, null, G.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: Z,
						sentryTag: Q,
						membershipsList: G
					} = this.props;
					console.error(`SomethingWrong: ${Z}`);
					let b = "";
					const F = (0, S.e1)();
					if (F) {
						var ee;
						const K = await G({
								parameters: {
									status: "accepted"
								}
							}),
							q = K == null || (ee = K.find($ => $.id === F)) === null || ee === void 0 ? void 0 : ee.roles;
						q && q.length && (b = q.join(", "))
					}
					const ue = `ErrorBoundary - ${Z}`;
					c.Tb(ue, {
						tags: {
							errorBoundary: Q,
							normalizedPath: (0, S.Fl)(window.location.pathname),
							roles: b.length ? b : void 0
						}
					}), A().sendEvent("something wrong", {
						error: Z,
						roles: b.length ? b : void 0
					})
				}
				render() {
					const {
						type: Z
					} = this.props;
					return Z === "fullscreen" ? o().createElement("div", null, o().createElement(m.h4, null, o().createElement(a.Link, {
						to: "/"
					}, o().createElement(_.TR, null))), this.renderContent(Z), o().createElement(f.Z, null)) : this.renderContent(Z)
				}
			}
			ae.propTypes = {
				type: g().oneOf(["fullscreen", "page"]),
				error: g().oneOfType([g().string, g().object]),
				eventId: g().string,
				sentryTag: g().string,
				membershipsList: g().func
			}, y.Z = (0, s.connect)(() => ({}), {
				membershipsList: h.YT
			})(ae)
		},
		"../react/app/providers/storeContainer.js": function(x, y, t) {
			"use strict";
			t.d(y, {
				bh: function() {
					return B
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				o = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				a = t.n(o),
				d = t("../../../../node_modules/redux-thunk/es/index.js"),
				l = t("../../../../node_modules/redux-persist/es/index.js"),
				g = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				s = t("../react/app/rootReducer.js"),
				u = t("../react/app/redux/normalizer.js"),
				E = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				r = t("../react/app/reducerRegistry.js"),
				i = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				p = t("../react/common/sagas/index.js"),
				c = t("../react/app/redux/processActionMiddleware.js"),
				m = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				_ = t("../../../../node_modules/is-promise/index.js"),
				T = t.n(_);

			function A(U) {
				for (var H = 1; H < arguments.length; H++) {
					var le = arguments[H] != null ? Object(arguments[H]) : {},
						Ee = Object.keys(le);
					typeof Object.getOwnPropertySymbols == "function" && Ee.push.apply(Ee, Object.getOwnPropertySymbols(le).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(le, ae).enumerable
					})), Ee.forEach(function(ae) {
						h(U, ae, le[ae])
					})
				}
				return U
			}

			function h(U, H, le) {
				return H = S(H), H in U ? Object.defineProperty(U, H, {
					value: le,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[H] = le, U
			}

			function S(U) {
				var H = f(U, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function f(U, H) {
				if (typeof U != "object" || U === null) return U;
				var le = U[Symbol.toPrimitive];
				if (le !== void 0) {
					var Ee = le.call(U, H || "default");
					if (typeof Ee != "object") return Ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(U)
			}
			const C = {
					key: "cf-redux-store",
					storage: g.Z,
					whitelist: ["accountAccess", "invite"]
				},
				w = (0, i.ZP)(),
				N = [({
					dispatch: U
				}) => H => le => T()(le) ? le.then(Ee => U(Ee)) : H(le), w, d.Z, c.Z, u.qR],
				P = U => (0, l.Wq)(C, A({}, s.Z, U));

			function I() {
				const U = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					le = e.compose((0, e.applyMiddleware)(...N), E.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					Ee = {},
					ae = (0, e.createStore)(P(r.Z.getReducers()), Ee, le);
				w.run(p.Z), (0, l.p5)(ae);
				const Z = (t.g.bootstrap || {}).data || {};
				return ae.dispatch((0, m.mW)("user", Z.user)), ae
			}
			let L;
			r.Z.setChangeListener(U => {
				var H;
				L && ((H = L) === null || H === void 0 ? void 0 : H.replaceReducer) && (L.replaceReducer(P(U)), (0, l.p5)(L))
			});

			function B() {
				return L || (L = I()), L
			}
		},
		"../react/app/redux/index.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				TZ: function() {
					return a
				},
				UM: function() {
					return l
				},
				ZS: function() {
					return d
				},
				p4: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e);
			const a = () => (0, e.useStore)(),
				d = () => a().getState(),
				l = () => (0, e.useDispatch)(),
				g = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(x, y, t) {
			"use strict";
			t.d(y, {
				$J: function() {
					return i
				},
				Oy: function() {
					return r
				},
				SC: function() {
					return E
				},
				ZP: function() {
					return p
				},
				dJ: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				a = t.n(o);

			function d(c) {
				for (var m = 1; m < arguments.length; m++) {
					var _ = arguments[m] != null ? Object(arguments[m]) : {},
						T = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(_).filter(function(A) {
						return Object.getOwnPropertyDescriptor(_, A).enumerable
					})), T.forEach(function(A) {
						l(c, A, _[A])
					})
				}
				return c
			}

			function l(c, m, _) {
				return m = g(m), m in c ? Object.defineProperty(c, m, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[m] = _, c
			}

			function g(c) {
				var m = s(c, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function s(c, m) {
				if (typeof c != "object" || c === null) return c;
				var _ = c[Symbol.toPrimitive];
				if (_ !== void 0) {
					var T = _.call(c, m || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(c)
			}
			const u = d({}, o),
				E = (c, m, _, T = {}) => {
					const A = c === "delete" ? "del" : c.toLowerCase();
					return _ && A !== "del" && (T.body = _), u[A](m, T)
				},
				n = (c, m) => (c.meta.params = m, c),
				r = (c, m, _, T, {
					body: A = {}
				}) => {
					const {
						result: h,
						messages: S,
						result_info: f
					} = A, C = Object.values(m);
					if (c.meta.method === "delete") {
						const w = C[C.length - 1];
						c.meta.id = typeof w == "object" ? w.id : w
					}
					return c.payload = h, S && (c.meta.messages = S), C.length && (c.meta.params = m), f && (c.meta.paginationData = {
						info: f,
						actionParameters: C,
						options: _[0],
						insertionOffset: 0
					}), c
				},
				i = (c, m, _, T, A) => (c.payload = A && A.body && A.body.errors, c.meta.messages = A && A.body && A.body.messages, c.meta.params = m, c.apiError = A, c);

			function p(c, m, _, T) {
				const A = (0, e.RM)(c, m, _, T).apiFetch(E).on("start", n).on("success", r).on("error", i),
					h = A.mock;
				return A.mock = S => (h((...f) => {
					const C = S(...f);
					return C && typeof C == "object" && "result" in C ? C : {
						result: C
					}
				}), A), A
			}
		},
		"../react/app/redux/normalizer.js": function(x, y, t) {
			"use strict";
			t.d(y, {
				P1: function() {
					return E
				},
				jQ: function() {
					return s
				},
				qR: function() {
					return n
				},
				uc: function() {
					return u
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				o = t("../react/pages/workers/entityTypes.ts"),
				a = t("../react/pages/email/types.ts"),
				d = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				g = t.n(l);
			const s = l.static.from([{
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
				u = r => r.entities,
				E = (...r) => (0, d.P1)(s, u, ...r),
				n = (0, d.QB)(s)
		},
		"../react/app/redux/utils.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				F: function() {
					return a
				},
				_: function() {
					return o
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const o = d => (l, g, s) => (0, e.SC)(l, g, s, {
					hideErrorAlert: !0
				}).catch(d),
				a = d => l => {
					if (l.status === d) return l;
					throw l
				}
		},
		"../react/common/actionTypes.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Cm: function() {
					return g
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return s
				},
				Li: function() {
					return E
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return a
				},
				Yc: function() {
					return r
				},
				gM: function() {
					return d
				},
				lV: function() {
					return l
				},
				s1: function() {
					return u
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				a = "MODAL_OPEN",
				d = "MODAL_CLOSE",
				l = "TOGGLE_ON",
				g = "TOGGLE_OFF",
				s = "SET_ACTIVE",
				u = "CLEAR_ACTIVE",
				E = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(i) {
				return i.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", i.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", i.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", i.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", i.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", i.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", i.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", i.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", i.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", i
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return i
				},
				YT: function() {
					return E
				},
				ct: function() {
					return s
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

			function a(p) {
				for (var c = 1; c < arguments.length; c++) {
					var m = arguments[c] != null ? Object(arguments[c]) : {},
						_ = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(m).filter(function(T) {
						return Object.getOwnPropertyDescriptor(m, T).enumerable
					})), _.forEach(function(T) {
						d(p, T, m[T])
					})
				}
				return p
			}

			function d(p, c, m) {
				return c = l(c), c in p ? Object.defineProperty(p, c, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[c] = m, p
			}

			function l(p) {
				var c = g(p, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function g(p, c) {
				if (typeof p != "object" || p === null) return p;
				var m = p[Symbol.toPrimitive];
				if (m !== void 0) {
					var _ = m.call(p, c || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(p)
			}
			const s = p => {
					const c = p.payload.map(m => a({}, m, {
						membershipId: m.id,
						id: m.account.id
					}));
					return a({}, p, {
						payload: c
					})
				},
				u = p => {
					const c = s(p);
					return Array.isArray(c.payload) ? a({}, p, {
						payload: c.payload[0]
					}) : a({}, p, {
						payload: null
					})
				},
				E = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", s),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...p) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: p
				}),
				i = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", u)
		},
		"../react/common/actions/modalActions.ts": function(x, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				closeModal: function() {
					return d
				},
				openModal: function() {
					return a
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function a(l, g, s = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: l,
						props: g
					},
					options: s
				}
			}

			function d(l) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: l
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(x, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				add: function() {
					return l
				},
				error: function() {
					return E
				},
				info: function() {
					return s
				},
				success: function() {
					return g
				},
				warn: function() {
					return u
				}
			});
			var e = t("../react/common/actionTypes.ts");

			function o(n) {
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
			let d = 0;

			function l(n, r, i = {}) {
				return i = i || {},
					function(p) {
						let c = d++,
							m = {
								id: c,
								type: n,
								message: r,
								delay: i.delay,
								persist: i.persist === void 0 ? !1 : i.persist,
								closable: i.closable === void 0 ? !0 : i.closable,
								onClose() {
									p(a(c)), i.onClose && i.onClose.apply(null, arguments)
								}
							};
						p(o(m))
					}
			}

			function g(n, r) {
				return l("success", n, r)
			}

			function s(n, r) {
				return l("info", n, r)
			}

			function u(n, r) {
				return l("warning", n, r)
			}

			function E(n, r) {
				return l("error", n, r)
			}
		},
		"../react/common/actions/userActions.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				BT: function() {
					return s
				},
				Ut: function() {
					return T
				},
				V_: function() {
					return A
				},
				Y9: function() {
					return m
				},
				Z0: function() {
					return S
				},
				mp: function() {
					return _
				},
				r3: function() {
					return h
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/app/redux/utils.ts");

			function a(f) {
				for (var C = 1; C < arguments.length; C++) {
					var w = arguments[C] != null ? Object(arguments[C]) : {},
						O = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(w).filter(function(N) {
						return Object.getOwnPropertyDescriptor(w, N).enumerable
					})), O.forEach(function(N) {
						d(f, N, w[N])
					})
				}
				return f
			}

			function d(f, C, w) {
				return C = l(C), C in f ? Object.defineProperty(f, C, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[C] = w, f
			}

			function l(f) {
				var C = g(f, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function g(f, C) {
				if (typeof f != "object" || f === null) return f;
				var w = f[Symbol.toPrimitive];
				if (w !== void 0) {
					var O = w.call(f, C || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(f)
			}
			const s = (0, e.C)("user").get`/user`,
				u = (0, e.C)("user").patch`/user`,
				E = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/two_factor_authentication`,
				p = (0, e.C)("user").delete`/user/two_factor_authentication`,
				c = (0, e.C)("user").put`/user/email`;

			function m(...f) {
				return c(...f)
			}
			const _ = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				T = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(f => a({}, f, {
					body: a({}, f.body, {
						result: {}
					})
				}))),
				A = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				h = (0, e.C)("userDetails").get`/user/details`,
				S = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(x, y, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/utils/zoneLevelAccess.ts");
			const a = ({
				legacyPermission: d,
				canAccess: l,
				children: g,
				render: s
			}) => {
				const u = !!(0, o.P)();
				let E;
				typeof l == "boolean" && l !== void 0 && u ? E = {
					read: l,
					list: l,
					create: l,
					update: l,
					delete: l,
					sign: l
				} : E = (0, e.Z)(d);
				const n = s || g;
				return n ? n(E) : null
			};
			y.Z = a
		},
		"../react/common/components/AccessCheck/constants.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				L8: function() {
					return n
				},
				W9: function() {
					return E
				},
				ZZ: function() {
					return g
				},
				j: function() {
					return r
				},
				jX: function() {
					return s
				},
				my: function() {
					return u
				},
				u1: function() {
					return e
				},
				zs: function() {
					return l
				}
			});
			const e = "com.cloudflare.api.account",
				o = "com.cloudflare.api.account.",
				a = "com.cloudflare.edge.",
				d = "com.cloudflare.api.account.zone.",
				l = ["com.cloudflare.api.app.manage"];
			let g = function(i) {
				return i.read = "read", i.list = "list", i.create = "create", i.update = "update", i.delete = "delete", i.sign = "sign", i.refresh = "refresh", i
			}({});
			const s = (i, p) => `${o}${i?i+".":""}${p}`,
				u = (i, p) => `${d}${i?i+".":""}${p}`,
				E = (i, p) => `${a}${i}.${p}`,
				n = (i = "") => `${o}${i}`,
				r = (i = "") => `${d}${i}`
		},
		"../react/common/components/AccessCheck/index.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				L8: function() {
					return d.L8
				},
				W9: function() {
					return d.W9
				},
				WL: function() {
					return a.WL
				},
				ZP: function() {
					return o.Z
				},
				ZZ: function() {
					return d.ZZ
				},
				hT: function() {
					return a.hT
				},
				j: function() {
					return d.j
				},
				jX: function() {
					return d.jX
				},
				my: function() {
					return d.my
				},
				xk: function() {
					return e.Z
				},
				zs: function() {
					return d.zs
				}
			});
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/common/components/AccessCheck/AccessCheck.tsx"),
				a = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				d = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(x, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/redux/index.ts"),
				d = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");

			function g(s) {
				const {
					read: u,
					edit: E
				} = (0, a.p4)(d.Yj)(s);
				let n = E;
				if (s != "zone_versioning") {
					const i = (0, a.p4)(l.G);
					(i == null ? void 0 : i.isLocked) && (n = !1)
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
			y.Z = g
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				WL: function() {
					return i
				},
				hT: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				a = t("../react/pages/home/members/utils.ts"),
				d = t("../react/common/components/AccessCheck/constants.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");
			const g = {
					allow: "allow",
					deny: "deny"
				},
				s = 0,
				u = 1,
				E = 2,
				n = 3;

			function r(C, w, O, N) {
				let P = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					I;
				for (I in P) P[I] = i(C, `${w}.${I}`, O, N);
				return P
			}

			function i(C, w, O, N) {
				var P;
				if (p(w) && !c(w)) {
					const H = (0, l.G)(C);
					if (H == null ? void 0 : H.isLocked) return !1
				}
				const I = (P = (0, o.D0)(C)) === null || P === void 0 ? void 0 : P.id,
					L = I ? [`com.cloudflare.api.account.${I}`] : void 0,
					B = (0, a.vq)(I);
				return !!_(C, B, w, O, N || L)
			}

			function p(C) {
				return ![d.ZZ.read, d.ZZ.list].some(w => C.endsWith(w))
			}

			function c(C) {
				return C.includes("zone.versioning")
			}

			function m(C) {
				const w = (0, o.Ko)(C);
				let O = !1;
				return w == null || w.forEach(N => {
					N.access === g.allow && N.permission_groups.forEach(P => {
						var I;
						(P == null || (I = P.meta) === null || I === void 0 ? void 0 : I.scopes) === d.u1 && (O = !0)
					})
				}), O
			}

			function _(C, w, O, N, P) {
				const I = (0, o.Ko)(C),
					L = {};
				I == null || I.forEach(le => {
					var Ee;
					const ae = le.access;
					let me = s;
					if (O && le.permission_groups.forEach(Z => {
							var Q, G;
							w == null || (Q = w.find(b => b.id === Z.id)) === null || Q === void 0 || (G = Q.permissions) === null || G === void 0 || G.forEach(b => {
								me = Math.max(me, T(b, O))
							})
						}), me !== s && !!N) {
						let Z = s;
						le.resource_groups.forEach(Q => {
							Z = Math.max(Z, h(Q.scope, N, P))
						}), me = Z === s ? Z : me + Z
					}(L == null || (Ee = L[ae]) === null || Ee === void 0 ? void 0 : Ee[me]) || (0, e.Z)(L, [ae, me], []), L[ae][me].push(le)
				});
				const B = L[g.allow] && Object.keys(L[g.allow]).map(le => parseInt(le)),
					U = L[g.deny] && Object.keys(L[g.deny]).map(le => parseInt(le)),
					H = Math.max.apply(Math, B);
				return H === s || Math.max.apply(Math, U) >= H ? null : L[g.allow][H]
			}

			function T(C, w) {
				if (C.key === w || A(C.key, w)) return n;
				for (const O of (C == null ? void 0 : C.implies) || []) {
					let N = T(O, w);
					if (N > s) return N
				}
				return s
			}

			function A(C, w) {
				const O = w == null ? void 0 : w.lastIndexOf(".");
				return O === -1 ? !1 : (w == null ? void 0 : w.substring(0, O)) + ".*" === C
			}

			function h(C, w, O) {
				var N;
				let P = s;
				if (C == null || (N = C.objects) === null || N === void 0 || N.forEach(I => {
						P = Math.max(P, f(I, w))
					}), P === s) return P;
				if (C.key !== "*") switch (!0) {
					case S(C.key, O) > s:
					case (!(O == null ? void 0 : O.length) && P === n):
						break;
					case (P === u && S(C.key, [w]) > s):
						P = S(C.key, [w]);
						break;
					default:
						return s
				}
				for (const I of C.subset_of || [])
					if (S(I.key, O) === s) return s;
				return P
			}

			function S(C, w = []) {
				for (const O of w || []) {
					if (C === O) return n;
					if (A(C, O)) return E
				}
				return s
			}

			function f(C, w) {
				return C.key === w ? n : C.key === "*" ? u : A(C.key, w) ? E : s
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(x, y, t) {
			"use strict";
			t.d(y, {
				a: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e),
				a = t("../react/common/selectors/accountSelectors.ts");
			const d = g => {
					if (typeof g != "string") throw new Error("invalid Param Type provided");
					const s = g.slice(1).split(":");
					if (s.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: s[0],
						value: s[1]
					}
				},
				l = (g, s) => {
					const {
						resourceId: u,
						accountId: E,
						legacyPermission: n
					} = s;
					let {
						read: r,
						edit: i
					} = s;
					const p = {};
					n && (i = `#${n}:edit`, r = `#${n}:read`);
					const c = u || E;
					if (r) {
						const m = Array.isArray(r) ? r : [r];
						p.isReadable = m.some(_ => {
							const T = d(_);
							return (0, a.DT)(g, c, A => !!(A[T.key] && A[T.key][T.value]))
						})
					}
					if (i) {
						const m = Array.isArray(i) ? i : [i];
						p.isEditable = m.some(_ => {
							const T = d(_);
							return (0, a.DT)(g, c, A => !!(A[T.key] && A[T.key][T.value]))
						})
					}
					return p
				};
			y.Z = (0, e.connect)(l)
		},
		"../react/common/components/AccessControl/index.js": function(x, y, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				o = t.n(e),
				a = t("../react/app/HoCs/withEntities.tsx"),
				d = t("../react/common/components/AccessControl/SAAConnect.js");

			function l(r) {
				for (var i = 1; i < arguments.length; i++) {
					var p = arguments[i] != null ? Object(arguments[i]) : {},
						c = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(p).filter(function(m) {
						return Object.getOwnPropertyDescriptor(p, m).enumerable
					})), c.forEach(function(m) {
						g(r, m, p[m])
					})
				}
				return r
			}

			function g(r, i, p) {
				return i = s(i), i in r ? Object.defineProperty(r, i, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = p, r
			}

			function s(r) {
				var i = u(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function u(r, i) {
				if (typeof r != "object" || r === null) return r;
				var p = r[Symbol.toPrimitive];
				if (p !== void 0) {
					var c = p.call(r, i || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}

			function E(r) {
				const p = ["isReadable", "isEditable"].reduce((c, m) => r.hasOwnProperty(m) ? l({}, c, {
					[m]: r[m]
				}) : c, {});
				return r.children(p)
			}
			E.propTypes = {
				resourceType: o().string,
				resourceId: o().string,
				read: o().oneOfType([o().string, o().array]),
				edit: o().oneOfType([o().string, o().array]),
				accountId: o().string,
				isReadable: o().bool,
				isEditable: o().bool,
				children: o().func
			};
			const n = (0, a.Z)((0, d.Z)(E));
			n.displayName = "AccessControl", y.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				PP: function() {
					return r
				},
				RJ: function() {
					return s
				},
				tz: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				d = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const g = () => u.test(window.location.pathname) || a.E.has(d.Qq),
				s = () => a.E.get(d.Qq),
				u = /^\/login\/apple(\/)?/,
				n = [u, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let p = !1;
					n.forEach(m => {
						if (m.test(window.location.pathname)) {
							p = !0;
							return
						}
					});
					const c = g() && p;
					return c && (0, l.C8)(l.LF.OFF), c
				},
				i = p => {
					p && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let c = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					p && (c = c + `&jwt=${p}`), window.location.href = c
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
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
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				g = t.n(l),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("../react/common/components/Dropdown/index.tsx"),
				E = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(m) {
					for (var _ = 1; _ < arguments.length; _++) {
						var T = arguments[_];
						for (var A in T) Object.prototype.hasOwnProperty.call(T, A) && (m[A] = T[A])
					}
					return m
				}, n.apply(this, arguments)
			}

			function r(m, _) {
				if (m == null) return {};
				var T = i(m, _),
					A, h;
				if (Object.getOwnPropertySymbols) {
					var S = Object.getOwnPropertySymbols(m);
					for (h = 0; h < S.length; h++) A = S[h], !(_.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(m, A) || (T[A] = m[A]))
				}
				return T
			}

			function i(m, _) {
				if (m == null) return {};
				var T = {},
					A = Object.keys(m),
					h, S;
				for (S = 0; S < A.length; S++) h = A[S], !(_.indexOf(h) >= 0) && (T[h] = m[h]);
				return T
			}
			const p = (0, s.createStyledComponent)(({
				theme: m
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${m.radii[2]}px 0 0 ${m.radii[2]}px`,
					borderRight: `1px solid ${m.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${m.radii[2]}px ${m.radii[2]}px 0`,
					paddingRight: m.space[2],
					paddingLeft: m.space[2]
				},
				"& button": {
					color: (0, E.Yc)() ? m.colors.text : void 0
				},
				"& button:hover": {
					color: (0, E.Yc)() ? m.colors.text : void 0
				}
			}));

			function c(m) {
				let {
					menu: _,
					containerProps: T,
					disabled: A,
					disabledDropdown: h = A
				} = m, S = r(m, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: f
				} = (0, l.useI18n)();
				return o().createElement(p, n({}, T, {
					role: "group"
				}), o().createElement(a.zx, n({}, S, {
					disabled: A
				})), o().createElement(u.Lt, {
					trigger: o().createElement(a.zx, {
						type: S.type,
						"aria-haspopup": "menu",
						disabled: h
					}, o().createElement(d.J, {
						type: "caret-down",
						label: f("common.more"),
						size: 12
					})),
					menu: _
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				v: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../node_modules/@cloudflare/elements/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = t("../react/common/hooks/useIntersectionObserver.ts");

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(u) {
					for (var E = 1; E < arguments.length; E++) {
						var n = arguments[E];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (u[r] = n[r])
					}
					return u
				}, g.apply(this, arguments)
			}

			function s(u) {
				const E = (0, e.useRef)(null),
					[n, r] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const p = E.current;
					if (p) {
						const {
							bottom: c
						} = p.getBoundingClientRect();
						c > window.innerHeight && r(!0)
					}
				}, []);
				const i = (0, l.S)(p => {
					for (const c of p) c.intersectionRatio < 1 && r(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const p = E.current;
					if (p && i) return i.observe(p), () => {
						i.unobserve(p)
					}
				}, [i]), o().createElement(a.ZC, g({
					role: "menu",
					innerRef: E,
					position: "absolute",
					right: "0",
					backgroundColor: d.rS.colors.background,
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
		"../react/common/components/Dropdown/MenuItem.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				s: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(d);

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(T) {
					for (var A = 1; A < arguments.length; A++) {
						var h = arguments[A];
						for (var S in h) Object.prototype.hasOwnProperty.call(h, S) && (T[S] = h[S])
					}
					return T
				}, g.apply(this, arguments)
			}

			function s(T, A) {
				if (T == null) return {};
				var h = u(T, A),
					S, f;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(T);
					for (f = 0; f < C.length; f++) S = C[f], !(A.indexOf(S) >= 0) && (!Object.prototype.propertyIsEnumerable.call(T, S) || (h[S] = T[S]))
				}
				return h
			}

			function u(T, A) {
				if (T == null) return {};
				var h = {},
					S = Object.keys(T),
					f, C;
				for (C = 0; C < S.length; C++) f = S[C], !(A.indexOf(f) >= 0) && (h[f] = T[f]);
				return h
			}

			function E(T) {
				for (var A = 1; A < arguments.length; A++) {
					var h = arguments[A] != null ? Object(arguments[A]) : {},
						S = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(h).filter(function(f) {
						return Object.getOwnPropertyDescriptor(h, f).enumerable
					})), S.forEach(function(f) {
						n(T, f, h[f])
					})
				}
				return T
			}

			function n(T, A, h) {
				return A = r(A), A in T ? Object.defineProperty(T, A, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[A] = h, T
			}

			function r(T) {
				var A = i(T, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function i(T, A) {
				if (typeof T != "object" || T === null) return T;
				var h = T[Symbol.toPrimitive];
				if (h !== void 0) {
					var S = h.call(T, A || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(T)
			}
			const p = ({
					theme: T
				}) => {
					const A = {
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
						'&:hover:not(:disabled):not([aria-disabled="true"])': A,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': E({}, A, {
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
				c = (0, a.createComponent)(p, "a"),
				m = (0, a.createComponent)(p, "button");

			function _(T) {
				let {
					disabled: A = !1
				} = T, h = s(T, ["disabled"]);
				const S = (0, d.useHistory)(),
					f = {
						role: "menuitem"
					};
				if ("href" in h && typeof h.href == "string") return o().createElement(c, g({
					"aria-disabled": A
				}, f, h, {
					href: A ? void 0 : h.href,
					onClick: w => {
						var O;
						if (A) return w.stopPropagation();
						w.preventDefault(), (O = h.onClick) === null || O === void 0 || O.call(h, w), S.push(h.href)
					}
				}));
				var C;
				return o().createElement(m, g({
					type: (C = h.type) !== null && C !== void 0 ? C : "button"
				}, f, h, {
					disabled: A
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(x, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/prop-types/index.js"),
				d = t.n(a),
				l = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const g = ({
				children: s
			}) => o().createElement(l.xu, {
				height: 411
			}, s);
			g.propTypes = {
				children: d().node
			}, y.Z = g
		},
		"../react/common/components/ModalManager.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return c
				},
				dd: function() {
					return i
				},
				vR: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/react-redux/react-redux");
			const d = m => m.application.modals;
			var l = t("../react/common/actions/modalActions.ts"),
				g = t("../../../../node_modules/swr/core/dist/index.mjs"),
				s = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function u() {
				return u = Object.assign ? Object.assign.bind() : function(m) {
					for (var _ = 1; _ < arguments.length; _++) {
						var T = arguments[_];
						for (var A in T) Object.prototype.hasOwnProperty.call(T, A) && (m[A] = T[A])
					}
					return m
				}, u.apply(this, arguments)
			}
			const E = o().createContext(null);
			class n extends o().Component {
				render() {
					const {
						modals: _,
						closeModal: T
					} = this.props;
					return o().createElement(o().Fragment, null, _.map(({
						ModalComponent: A,
						props: h = {},
						id: S
					}) => {
						const f = () => {
							typeof h.onClose == "function" && h.onClose(), T(A)
						};
						return o().createElement(E.Provider, {
							key: S,
							value: {
								closeModal: f
							}
						}, o().createElement(g.J$, {
							value: s.ZP
						}, o().createElement(A, u({}, h, {
							isOpen: !0,
							closeModal: f
						}))))
					}))
				}
			}

			function r() {
				const m = o().useContext(E);
				if (!m) throw new Error("useModalContext must be used within a ModalContext");
				return m
			}

			function i() {
				const m = (0, a.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(..._) {
						return m(l.openModal(..._))
					}, [m]),
					closeModal: (0, e.useCallback)(function(..._) {
						return m(l.closeModal(..._))
					}, [m])
				}
			}
			var c = (0, a.connect)(m => ({
				modals: d(m)
			}), l)(n)
		},
		"../react/common/components/Page.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function d(l) {
				return o().createElement(a.T3, l)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return u
				},
				JR: function() {
					return E
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return g
				},
				ZI: function() {
					return l
				},
				if: function() {
					return o
				},
				q6: function() {
					return a
				},
				w_: function() {
					return d
				},
				zl: function() {
					return s
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				a = "date-from",
				d = "date-to",
				l = "from",
				g = "to",
				s = "all",
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
			let E = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				n = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				v: function() {
					return e
				}
			});
			let e = function(o) {
				return o.FIELD = "change field", o.OPERATOR = "change operator", o
			}({})
		},
		"../react/common/constants/analytics/botScoreSrc.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				EG: function() {
					return a
				},
				Me: function() {
					return g
				},
				Vv: function() {
					return l
				},
				sk: function() {
					return d
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let a = function(s) {
				return s.NOT_COMPUTED = "not_computed", s.MACHINE_LEARNING = "machine_learning", s.HEURISTICS = "heuristics", s.BEHAVIORAL_ANALYSIS = "behavioral_analysis", s.JS_FINGERPRINTING = "js_fingerprinting", s.VERIFIED_BOT = "verified_bot", s.CLOUDFLARE_SERVICE = "cloudflare_service", s
			}({});
			const d = {
					[a.NOT_COMPUTED]: "Not Computed",
					[a.MACHINE_LEARNING]: "Machine Learning",
					[a.HEURISTICS]: "Heuristics",
					[a.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[a.JS_FINGERPRINTING]: "JS Fingerprinting",
					[a.VERIFIED_BOT]: "Verified Bot",
					[a.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				l = s => Array.isArray(s) ? s.map(u => {
					var E;
					return (E = d[u]) !== null && E !== void 0 ? E : u
				}) : d[s],
				g = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [a.NOT_COMPUTED, a.MACHINE_LEARNING, a.HEURISTICS, a.BEHAVIORAL_ANALYSIS, a.JS_FINGERPRINTING, a.VERIFIED_BOT, a.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Gq: function() {
					return d
				},
				g$: function() {
					return a
				},
				WX: function() {
					return e
				},
				E0: function() {
					return E
				},
				Hw: function() {
					return g
				},
				Ed: function() {
					return l
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return p
				},
				hQ: function() {
					return s
				},
				SP: function() {
					return u
				}
			});
			let e = function(c) {
				return c.page_rules = "page_rules", c.automatic_platform_optimization = "automatic_platform_optimization", c
			}({});
			const o = "page_rules",
				a = "automatic_platform_optimization",
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
				l = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				g = {
					currency: "USD",
					frequency: "monthly",
					requests_included: 5e5,
					ubb_price: .5,
					ubb_frequency: 5e5
				},
				s = {
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
				E = {
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
				i = t("../react/common/constants/billing/workers.ts");
			const p = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				FP: function() {
					return e
				},
				Nl: function() {
					return l
				},
				SO: function() {
					return a
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
				a = {
					BILLING: "billing"
				},
				d = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				l = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Dk: function() {
					return p
				},
				Dy: function() {
					return c
				},
				E_: function() {
					return g
				},
				Lv: function() {
					return m
				},
				S4: function() {
					return l
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return E
				},
				Y1: function() {
					return s
				},
				p6: function() {
					return u
				},
				q0: function() {
					return d
				},
				rg: function() {
					return _
				},
				sJ: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const d = "healthy",
				l = "degraded",
				g = "critical",
				s = "unknown",
				u = "not-monitored",
				E = o().from({
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
					f: E.FREE,
					p: E.PRO,
					b: E.BIZ
				},
				i = "marketing-pt",
				p = () => {
					const A = a.Z.get(i);
					if (!!A) return r[A]
				},
				c = ["gov"],
				m = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				_ = "banner-notification-interactions",
				T = null
		},
		"../react/common/constants/index.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
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
			var e = t("../react/common/constants/constants.ts"),
				o = t("../react/common/constants/billing/index.ts")
		},
		"../react/common/constants/roles.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SUPER_ADMINISTRATOR_ALL_PRIVILEGES = "Super Administrator - All Privileges", o.CLOUDFLARE_ACCESS = "Cloudflare Access", o.CLOUDFLARE_ACCESS_APP_ADMIN = "Cloudflare Access App Admin", o.CLOUDFLARE_ACCESS_IDENTITY_PROVIDER_ADMIN = "Cloudflare Access Identity Provider Admin", o.ADMINISTRATOR = "Administrator", o.ADMINISTRATOR_READ_ONLY = "Administrator Read Only", o.ANALYTICS = "Analytics", o.API_GATEWAY = "API Gateway", o.API_GATEWAY_READ = "API Gateway Read", o.AUDIT_LOGS_VIEWER = "Audit Logs Viewer", o.BILLING = "Billing", o.BOT_MANAGEMENT = "Bot Management", o.BOT_MANAGEMENT_ACCOUNT_WIDE = "Bot Management (Account-Wide)", o.CACHE_DOMAIN_PURGE = "Cache Domain Purge", o.CACHE_PURGE = "Cache Purge", o.SSL_TLS_CACHING_PERFORMANCE_PAGE_RULES_AND_CUSTOMIZATION = "SSL/TLS, Caching, Performance, Page Rules, and Customization", o.EMAIL_CONFIGURATION_ADMIN = "Email Configuration Admin", o.EMAIL_INTEGRATION_ADMIN = "Email Integration Admin", o.EMAIL_SECURITY_ANALYST = "Email Security Analyst", o.EMAIL_SECURITY_READONLY = "Email Security Readonly", o.EMAIL_SECURITY_REPORTING = "Email Security Reporting", o.CLOUDFORCE_ONE_ADMIN = "Cloudforce One Admin", o.CLOUDFORCE_ONE_READ = "Cloudforce One Read", o.DNS = "DNS", o.DOMAIN_ADMINISTRATOR = "Domain Administrator", o.DOMAIN_ADMINISTRATOR_READ_ONLY = "Domain Administrator Read Only", o.DOMAIN_API_GATEWAY = "Domain API Gateway", o.DOMAIN_API_GATEWAY_READ = "Domain API Gateway Read", o.DOMAIN_DNS = "Domain DNS", o.DOMAIN_PAGE_SHIELD = "Domain Page Shield", o.DOMAIN_PAGE_SHIELD_READ = "Domain Page Shield Read", o.MAGIC_NETWORK_MONITORING_ADMIN = "Magic Network Monitoring Admin", o.MAGIC_NETWORK_MONITORING = "Magic Network Monitoring", o.MAGIC_NETWORK_MONITORING_READ_ONLY = "Magic Network Monitoring Read-Only", o.CLOUDFLARE_GATEWAY = "Cloudflare Gateway", o.CLOUDFLARE_WORKER_ADMIN = "Cloudflare Worker Admin", o.HTTP_APPLICATIONS = "HTTP Applications", o.HTTP_APPLICATIONS_READ = "HTTP Applications Read", o.CLOUDFLARE_IMAGES = "Cloudflare Images", o.LOAD_BALANCER = "Load Balancer", o.LOG_SHARE = "Log Share", o.NETWORK_SERVICES_WRITE_MAGIC = "Network Services Write (Magic)", o.NETWORK_SERVICES_READ_MAGIC = "Network Services Read (Magic)", o.MINIMAL_ACCOUNT_ACCESS = "Minimal Account Access", o.PAGE_SHIELD = "Page Shield", o.PAGE_SHIELD_READ = "Page Shield Read", o.HYPERDRIVE_ADMIN = "Hyperdrive Admin", o.HYPERDRIVE_READONLY = "Hyperdrive Readonly", o.CLOUDFLARE_R2_ADMIN = "Cloudflare R2 Admin", o.CLOUDFLARE_R2_READ = "Cloudflare R2 Read", o.LOG_SHARE_READER = "Log Share Reader", o.CLOUDFLARE_SNIPPETS_ADMIN = "Cloudflare Snippets Admin", o.CLOUDFLARE_STREAM = "Cloudflare Stream", o.CLOUDFLARE_ZERO_TRUST = "Cloudflare Zero Trust", o.CLOUDFLARE_DEX = "Cloudflare DEX", o.CLOUDFLARE_ZERO_TRUST_PII = "Cloudflare Zero Trust PII", o.CLOUDFLARE_ZERO_TRUST_READ_ONLY = "Cloudflare Zero Trust Read Only", o.CLOUDFLARE_ZERO_TRUST_REPORTING = "Cloudflare Zero Trust Reporting", o.TRANSFORM_RULES = "Transform Rules", o.TRUST_AND_SAFETY = "Trust and Safety", o.TURNSTILE = "Turnstile", o.TURNSTILE_READ = "Turnstile Read", o.VECTORIZE_ADMIN = "Vectorize Admin", o.VECTORIZE_READONLY = "Vectorize Readonly", o.FIREWALL = "Firewall", o.WAITING_ROOM_ADMIN = "Waiting Room Admin", o.WAITING_ROOM_READ = "Waiting Room Read", o.WORKERS_ADMIN = "Workers Admin", o.ZARAZ_ADMIN = "Zaraz Admin", o.ZARAZ_EDIT = "Zaraz Edit", o.ZARAZ_READONLY = "Zaraz Readonly", o.ZONE_VERSIONING = "Zone Versioning", o.ZONE_VERSIONING_ACCOUNT_WIDE = "Zone Versioning (Account-Wide)", o.ZONE_VERSIONING_READ = "Zone Versioning Read", o.ZONE_VERSIONING_READ_ACCOUNT_WIDE = "Zone Versioning Read (Account-Wide)", o.DOMAIN_WAITING_ROOM_ADMIN = "Domain Waiting Room Admin", o.DOMAIN_WAITING_ROOM_READ = "Domain Waiting Room Read", o.BRAND_PROTECTION = "Brand Protection", o
			}({})
		},
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				QK: function() {
					return e
				},
				dy: function() {
					return o
				},
				sO: function() {
					return a
				},
				x4: function() {
					return d
				}
			});
			let e = function(l) {
				return l.DELETE = "delete", l.CREATE = "create", l.GET = "get", l.UPDATE = "update", l
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
				a = (l, g, s = !1) => {
					var u;
					return `${g} ${(u=o[l])!==null&&u!==void 0?u:l} ${s?"ruleset":"rule"}${g===e.GET?"s":""}`
				},
				d = () => {
					var l;
					return (l = Object.keys(o).reduce((g, s) => {
						const u = Object.values(e).reduce((E, n) => (E.push(a(s, n)), E.push(a(s, n, !0)), E), []);
						return g.concat(u)
					}, [])) === null || l === void 0 ? void 0 : l.flat()
				}
		},
		"../react/common/hooks/suspenseHelpers.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				bt: function() {
					return s
				},
				nW: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const d = "suspenseComplete";

			function l() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(d))
				}, [])
			}

			function g(u) {
				(0, a.OR)(d, () => {
					window.setTimeout(u, 0)
				}, {
					target: window
				})
			}

			function s(...u) {
				const [E, n] = u;
				o().useLayoutEffect(E, n), g(E)
			}
		},
		"../react/common/hooks/useAccountEntitlement.ts": function(x, y, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function a(d) {
				return (0, e.p4)(l => (0, o.BF)(l, d))
			}
			y.Z = a
		},
		"../react/common/hooks/useAccountId.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				F: function() {
					return l
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = t.n(a);

			function l() {
				var g;
				const {
					accountId: s
				} = (0, a.useParams)(), u = (0, e.p4)(o.D0);
				if (s === void 0 && !u) throw new Error("Account ID not found in URL params");
				return (g = s) !== null && g !== void 0 ? g : u == null ? void 0 : u.id
			}
		},
		"../react/common/hooks/useCachedState.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				j: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function d(l, {
				key: g,
				cache: s = a.E,
				ttl: u
			} = {}) {
				var E;
				const n = g !== void 0 && s.get(g),
					[r, i] = (0, e.useState)((E = n) !== null && E !== void 0 ? E : l);
				return [r, c => {
					i(m => (c instanceof Function && (c = c(m)), g !== void 0 && s.set(g, c, u), c))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(x, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(a) {
				return (0, e.qf)(a)
			}
			y.Z = o
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function a(d, {
				root: l,
				rootMargin: g,
				threshold: s
			} = {}) {
				const u = (0, e.useRef)(null);

				function E() {
					return u.current === null && (u.current = new IntersectionObserver(d, {
						root: l,
						rootMargin: g,
						threshold: s
					})), u.current
				}
				return (0, e.useEffect)(() => (u.current = new IntersectionObserver(d, {
					root: l,
					rootMargin: g,
					threshold: s
				}), () => {
					var n;
					(n = u.current) === null || n === void 0 || n.disconnect()
				}), [d, l, g, s]), E()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(x, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function a(d) {
				const l = (0, e.useRef)(d);
				return (0, e.useEffect)(() => {
					l.current = d
				}, [d]), l.current
			}
			y.Z = a
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(x, y, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function a(d) {
				return (0, e.p4)(l => (0, o.rV)(l, d))
			}
			y.Z = a
		},
		"../react/common/middleware/sparrow/errors.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Uh: function() {
					return l
				},
				ez: function() {
					return d
				},
				oV: function() {
					return g
				}
			});

			function e(s, u, E) {
				return u = o(u), u in s ? Object.defineProperty(s, u, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[u] = E, s
			}

			function o(s) {
				var u = a(s, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function a(s, u) {
				if (typeof s != "object" || s === null) return s;
				var E = s[Symbol.toPrimitive];
				if (E !== void 0) {
					var n = E.call(s, u || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(s)
			}
			class d extends Error {
				constructor(u, E) {
					super(E);
					e(this, "eventName", void 0), this.eventName = u, this.name = "SparrowValidationError"
				}
			}
			class l extends d {
				constructor(u) {
					super(u, `Event not allowed: "${u}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class g extends d {
				constructor(u, E) {
					super(u, `Found invalid properties on event: "${u}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = E
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				AC: function() {
					return Ie
				},
				Au: function() {
					return ie
				},
				B: function() {
					return re
				},
				B3: function() {
					return Se
				},
				BG: function() {
					return O
				},
				Bp: function() {
					return Qe
				},
				CV: function() {
					return gt
				},
				D0: function() {
					return S
				},
				DT: function() {
					return $
				},
				EL: function() {
					return ee
				},
				EU: function() {
					return W
				},
				GE: function() {
					return pt
				},
				Ko: function() {
					return q
				},
				Kx: function() {
					return I
				},
				Le: function() {
					return L
				},
				O4: function() {
					return ke
				},
				Ou: function() {
					return Q
				},
				Py: function() {
					return Be
				},
				QI: function() {
					return at
				},
				RO: function() {
					return be
				},
				T3: function() {
					return Ye
				},
				T8: function() {
					return w
				},
				UX: function() {
					return F
				},
				VP: function() {
					return ot
				},
				Xo: function() {
					return We
				},
				Xu: function() {
					return ae
				},
				Yi: function() {
					return mt
				},
				Yj: function() {
					return K
				},
				Zu: function() {
					return ue
				},
				bC: function() {
					return te
				},
				f8: function() {
					return H
				},
				hI: function() {
					return it
				},
				hN: function() {
					return P
				},
				hX: function() {
					return Y
				},
				iq: function() {
					return pe
				},
				nE: function() {
					return N
				},
				oD: function() {
					return b
				},
				oI: function() {
					return U
				},
				oJ: function() {
					return V
				},
				tM: function() {
					return G
				},
				uF: function() {
					return me
				},
				ut: function() {
					return Ue
				},
				vU: function() {
					return st
				},
				wQ: function() {
					return Fe
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				a = t.n(o),
				d = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = t.n(d),
				g = t("../../../../node_modules/reselect/lib/index.js"),
				s = t("../../../../node_modules/moment/moment.js"),
				u = t.n(s),
				E = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				r = t("../react/common/selectors/userSelectors.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts"),
				p = t("../react/app/components/DeepLink/selectors.ts"),
				c = t("../react/common/constants/roles.ts"),
				m = t("../react/common/utils/hasRole.ts");

			function _(z) {
				for (var de = 1; de < arguments.length; de++) {
					var Te = arguments[de] != null ? Object(arguments[de]) : {},
						ne = Object.keys(Te);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(Te).filter(function(se) {
						return Object.getOwnPropertyDescriptor(Te, se).enumerable
					})), ne.forEach(function(se) {
						T(z, se, Te[se])
					})
				}
				return z
			}

			function T(z, de, Te) {
				return de = A(de), de in z ? Object.defineProperty(z, de, {
					value: Te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[de] = Te, z
			}

			function A(z) {
				var de = h(z, "string");
				return typeof de == "symbol" ? de : String(de)
			}

			function h(z, de) {
				if (typeof z != "object" || z === null) return z;
				var Te = z[Symbol.toPrimitive];
				if (Te !== void 0) {
					var ne = Te.call(z, de || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (de === "string" ? String : Number)(z)
			}
			const S = z => {
					const de = me(z);
					return de == null ? void 0 : de.account
				},
				f = z => {
					const de = (0, r.PR)(z);
					if (de) {
						const Te = de.id;
						return z.accountAccess[Te] || {}
					}
					return {}
				},
				C = z => z.accountsDetailed,
				w = (0, n.P1)("accountsDetailed", C),
				O = z => z.memberships,
				N = (0, g.P1)((0, n.P1)("memberships", O), p.U, (z, de) => !!de && !!z ? z.filter(Te => de.includes(Te.id)) : z),
				P = z => z.accountFlags && z.accountFlags.data,
				I = z => z.accountFlags,
				L = (z, de, Te) => {
					const ne = P(z);
					return !ne || !ne[de] ? null : ne[de][Te]
				},
				B = z => z.accountFlags.isRequesting,
				U = (z, ...de) => a()(z, ["accountFlagsChanges", "data", ...de]),
				H = z => z.accountFlagsChanges.isRequesting,
				le = (0, g.P1)(P, I, (z, de) => ({
					data: z,
					meta: de
				})),
				Ee = (z, de, Te) => !!(isEnterpriseSSEnabledSelector(z) && L(z, de, Te)),
				ae = z => z.membership,
				me = (0, n.P1)("membership", ae),
				Z = (0, g.P1)(me, ae, (z, de) => ({
					data: z,
					meta: de
				})),
				Q = z => {
					const {
						roles: de = []
					} = me(z) || {};
					return Boolean(de.find(Te => Te === "Super Administrator - All Privileges" || Te === "Billing"))
				},
				G = z => {
					const de = [c.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, m.n)(z, de)
				},
				b = z => {
					const de = f(z),
						Te = Oe.getMemberships(z) ? l().asMutable(Oe.getMemberships(z)) : [];
					if (!!Te) return l().from(Te.map(ne => _({}, ne, {
						lastSeen: de[ne.account.id] ? de[ne.account.id].lastSeen : null
					})).sort((ne, se) => ne.lastSeen && se.lastSeen ? se.lastSeen - ne.lastSeen : 0))
				},
				F = z => z.filteredMemberships,
				ee = (0, n.P1)("filteredMemberships", F),
				ue = (0, g.P1)(me, z => z == null ? void 0 : z.permissions),
				K = (0, g.P1)(ue, z => (0, e.Z)(de => {
					var Te;
					return (Te = z == null ? void 0 : z[de]) !== null && Te !== void 0 ? Te : {
						read: !1,
						edit: !1
					}
				})),
				q = (0, g.P1)(me, z => z == null ? void 0 : z.policies),
				$ = (z, de, Te) => {
					let ne = Oe.getMembership(z);
					if (!ne) {
						const se = Oe.getMemberships(z);
						if (!se || !de) return !1;
						ne = se.find(he => he.account.id === de)
					}
					if (!ne || !Te) return !1;
					try {
						return Te(ne.permissions)
					} catch {
						return !1
					}
				},
				X = z => {
					var de, Te;
					return (de = (Te = S(z)) === null || Te === void 0 ? void 0 : Te.meta.has_pro_zones) !== null && de !== void 0 ? de : !1
				},
				W = z => {
					var de, Te;
					return (de = (Te = S(z)) === null || Te === void 0 ? void 0 : Te.meta.has_business_zones) !== null && de !== void 0 ? de : !1
				},
				te = z => W(z) || X(z),
				ye = (z, de) => {
					const Te = Ae(z, de);
					return !!Te && !!Te.enabled
				},
				Ae = (z, de) => {
					const Te = Oe.getMembership(z),
						ne = Te && Te.account;
					return ne && ne.legacy_flags && ne.legacy_flags[de]
				},
				Fe = z => ye(z, "custom_pages"),
				xe = z => !!z && z["webhooks.webhooks.enabled"],
				$e = z => L(z, "bots", "enabled"),
				Ke = z => L(z, "billing", "annual_subscriptions_enable"),
				be = z => z ? Boolean(L(z, "ConstellationAI", "v2_ui")) : !1,
				Y = z => z ? Boolean(L(z, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				re = z => z ? Boolean(L(z, "AIgateway", "enabled")) : !1,
				ge = z => Ae(z, "enterprise_zone_quota"),
				R = z => {
					const de = ge(z);
					return !de || !de.available ? -1 : de.available
				},
				pe = z => z.accountMembers,
				Se = (0, n.P1)("accountMembers", pe),
				ke = z => z.accountMember && z.accountMember.isRequesting,
				Ge = z => z.accountRoles,
				Ie = (0, n.P1)("accountRoles", Ge),
				Be = (z, de) => {
					const Te = Oe.getMemberships(z),
						ne = Te && Te.find(k => k.account.id === de);
					if (ne) return ne.account.name.replace(" Account", " account");
					const se = Oe.getMembership(z),
						he = se && se.account;
					return he && he.id === de ? he.name : null
				},
				Ue = (z, de) => {
					const Te = Oe.getMemberships(z),
						ne = Te && Te.find(k => k.account.id === de);
					if (ne) return ne.account.settings.access_approval_expiry;
					const se = Oe.getMembership(z),
						he = se && se.account;
					return he && he.id === de ? he.settings.access_approval_expiry : null
				},
				We = (z, de) => {
					const Te = Ue(z, de);
					return Te ? u().utc(Te).isAfter() : !1
				},
				Ye = (z, de, Te) => {
					const ne = Ue(z, de);
					let se = ne ? u().utc(ne) : null;
					return !se || !se.isAfter() ? "" : se && se.year() === 3e3 ? Te("account.access_approval.card_expiration_forever") : Te("account.access_approval.card_expiration_text", {
						expiryTimestamp: se.local().format(E.U.DateTime)
					})
				},
				V = z => z && z.member && z.member.edit,
				ie = (z, de) => {
					const Te = Oe.getMembership(z),
						ne = Te && Te.account;
					return ne ? ne.id !== de : !1
				},
				fe = z => z.dpa,
				we = (0, n.P1)("dpa", fe),
				Ne = z => z.webhook,
				je = z => z.webhooks,
				Ze = (0, n.P1)("webhook", je),
				ot = z => z.accountLegoContract,
				lt = (0, n.P1)("accountLegoContract", ot),
				at = z => {
					const de = lt(z);
					return (de == null ? void 0 : de.lego_state) ? de.lego_state : ""
				},
				dt = z => at(z) === "signed",
				pt = z => ot(z).isRequesting,
				st = z => {
					const de = lt(z);
					return de && de.subscription_type ? de.subscription_type : ""
				},
				ze = z => st(z) !== "",
				Oe = {
					getMembership: me,
					getMemberships: N,
					getFilteredMemberships: ee,
					getAccountMembers: Se,
					getAccountRoles: Ie
				},
				Qe = z => z.accountSingle,
				mt = (0, n.P1)("accountSingle", Qe),
				it = z => {
					const de = [c.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, c.V.ADMINISTRATOR];
					return (0, m.n)(z, de)
				},
				gt = z => (0, m.n)(z, [c.V.BRAND_PROTECTION])
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				$f: function() {
					return c
				},
				AD: function() {
					return l
				},
				BF: function() {
					return p
				},
				Bs: function() {
					return S
				},
				Ci: function() {
					return ue
				},
				DA: function() {
					return Y
				},
				E6: function() {
					return i
				},
				Gy: function() {
					return $e
				},
				Hq: function() {
					return xe
				},
				Ms: function() {
					return w
				},
				Nb: function() {
					return Fe
				},
				Pj: function() {
					return be
				},
				Q2: function() {
					return g
				},
				Qq: function() {
					return te
				},
				Td: function() {
					return A
				},
				Z: function() {
					return $
				},
				a: function() {
					return h
				},
				a5: function() {
					return W
				},
				c7: function() {
					return ye
				},
				du: function() {
					return u
				},
				ec: function() {
					return H
				},
				f: function() {
					return Ae
				},
				hL: function() {
					return X
				},
				ji: function() {
					return K
				},
				jo: function() {
					return O
				},
				l9: function() {
					return ge
				},
				lI: function() {
					return d
				},
				p1: function() {
					return _
				},
				pK: function() {
					return Ke
				},
				pf: function() {
					return n
				},
				qR: function() {
					return T
				},
				rV: function() {
					return s
				},
				u1: function() {
					return E
				},
				w4: function() {
					return r
				},
				yD: function() {
					return q
				}
			});
			var e = t("../react/utils/url.ts");

			function o(R, pe) {
				return R && R[pe]
			}
			const a = R => !d(R).isRequesting;

			function d(R) {
				return R.entitlements.zone
			}

			function l(R) {
				return d(R).data
			}
			const g = R => {
				var pe, Se;
				return ((pe = d(R).paginationData) === null || pe === void 0 || (Se = pe.options) === null || Se === void 0 ? void 0 : Se.editedDate) || {}
			};

			function s(R, pe) {
				const Se = l(R);
				return Se ? o(Se, pe) : void 0
			}
			const u = (R, pe) => s(R, pe) === !0;

			function E(R) {
				return R.entitlements.account
			}

			function n(R) {
				return E(R).data
			}
			const r = R => {
				var pe, Se;
				return ((pe = E(R).paginationData) === null || pe === void 0 || (Se = pe.options) === null || Se === void 0 ? void 0 : Se.editedDate) || {}
			};

			function i(R) {
				return !E(R).isRequesting
			}

			function p(R, pe) {
				const Se = n(R);
				return Se ? o(Se, pe) : void 0
			}

			function c(R, pe) {
				return p(R, pe) === !0
			}

			function m(R, pe) {
				return pe.every(Se => c(R, Se))
			}

			function _(R) {
				return c(R, "contract.customer_enabled")
			}

			function T(R) {
				return c(R, "contract.self_service_allowed")
			}

			function A(R) {
				return c(R, "billing.partners_managed")
			}
			const h = R => _(R) && T(R),
				S = R => c(R, "enterprise.ecp_allowed");

			function f(R) {
				return C(R) || c(R, "argo.allow_smart_routing") || c(R, "argo.allow_tiered_caching") || c(R, "rate_limiting.enabled") || c(R, "ctm.enabled") || c(R, "workers.enabled") || c(R, "workers.kv_store.enabled") || c(R, "stream.enabled")
			}
			const C = R => u(R, "argo.allow_smart_routing") || u(R, "argo.allow_tiered_caching"),
				w = R => c(R, "zone.cname_setup_allowed") || c(R, "zone.partial_setup_allowed") || u(R, "zone.partial_setup_allowed"),
				O = R => c(R, "argo.allow_smart_routing") || u(R, "argo.allow_smart_routing"),
				N = R => c(R, "argo.allow_tiered_caching") || u(R, "argo.allow_tiered_caching"),
				P = R => O(R) || N(R),
				I = R => c(R, "ctm.enabled"),
				L = R => {
					const pe = p(R, "ctm.load_balancers");
					return typeof pe == "number" ? pe : 0
				},
				B = R => {
					const pe = p(R, "ctm.pools");
					return typeof pe == "number" ? pe : 0
				},
				U = R => {
					const pe = p(R, "ctm.origins");
					return typeof pe == "number" ? pe : 0
				},
				H = R => c(R, "workers.enabled"),
				le = R => c(R, "stream.enabled"),
				Ee = R => {
					const pe = p(R, "access.users_allowed");
					return typeof pe == "number" ? pe : 0
				},
				ae = R => Ee(R) > 0,
				me = R => {
					const pe = s(R, "dedicated_certificates");
					return typeof pe == "number" ? pe : 0
				},
				Z = R => me(R) > 0,
				Q = R => {
					const pe = s(R, "rate_limiting.max_rules");
					return typeof pe == "number" ? pe : 0
				},
				G = R => c(R, "rate_limiting.enabled"),
				b = R => {
					const pe = s(R, "page_rules");
					return typeof pe == "number" ? pe : 0
				},
				F = R => b(R) > 0,
				ee = R => {
					const pe = p(R, "dns_firewall.max_clusters_allowed");
					return typeof pe == "number" ? pe : 0
				},
				ue = R => ee(R) > 0,
				K = R => u(R, "zone.advanced_certificate_manager") || c(R, "zone.advanced_certificate_manager"),
				q = R => s(R, "authoritative_dns.proxy_record_allowed") === !1 || p(R, "authoritative_dns.proxy_record_allowed") === !1,
				$ = R => c(R, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				X = R => s(R, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				W = R => {
					const pe = s(R, "authoritative_dns.min_record_ttl_allowed");
					return typeof pe == "number" && pe > 1 ? pe : 60
				},
				te = R => c(R, "foundation_dns.advanced_nameservers_allowed") || u(R, "foundation_dns.advanced_nameservers_allowed"),
				ye = R => c(R, "account_custom_ns.allowed"),
				Ae = (R, pe) => ((0, e.el)(window.location.pathname) ? s : p)(R, pe),
				Fe = R => ((0, e.el)(window.location.pathname) ? l : n)(R),
				xe = R => c(R, "authoritative_dns.multi_provider_allowed") || u(R, "authoritative_dns.multi_provider_allowed"),
				$e = R => u(R, "authoritative_dns.cname_flattening_allowed"),
				Ke = R => c(R, "secondary_dns.secondary_overrides") || u(R, "secondary_dns.secondary_overrides"),
				be = R => c(R, "authoritative_dns.custom_soa_allowed") || u(R, "authoritative_dns.custom_soa_allowed"),
				Y = R => c(R, "authoritative_dns.custom_ns_ttl_allowed") || u(R, "authoritative_dns.custom_ns_ttl_allowed"),
				re = R => c(R, "secondary.create_zone"),
				ge = R => te(R) || ye(R) || xe(R) || re(R) || Ke(R) || be(R) || Y(R)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return l
				},
				v: function() {
					return g
				}
			});
			var e = t("../react/utils/i18n.ts"),
				o = t("../../../common/intl/intl-types/src/index.ts"),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				d = t("../react/utils/bootstrap.ts");
			const l = s => {
				if ((0, d.gm)()) return a.Z.set(e.ly, e.ZW), e.ZW;
				const u = s.userCommPreferences.data;
				if (u == null ? void 0 : u["language-locale"]) return (0, e.i_)(u["language-locale"]), u["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const E = (0, e.Kd)();
					return g(E) ? E : e.ZW
				}
			};

			function g(s) {
				const u = Object.keys(o.Q).find(E => o.Q[E] === s);
				return !!s && typeof s == "string" && u != null && (0, e.S8)(u)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				$8: function() {
					return l
				},
				BG: function() {
					return E
				},
				BY: function() {
					return h
				},
				GP: function() {
					return c
				},
				GU: function() {
					return S
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
					return _
				},
				l8: function() {
					return s
				},
				mV: function() {
					return m
				},
				vW: function() {
					return g
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const o = f => f.user,
				a = (0, e.P1)("user", o),
				d = f => {
					var C;
					return (C = a(f)) === null || C === void 0 ? void 0 : C.email.endsWith("@cloudflare.com")
				},
				l = f => {
					var C;
					return !!((C = a(f)) === null || C === void 0 ? void 0 : C.id)
				},
				g = f => {
					const C = a(f);
					if (!!C) return C.first_name && C.last_name ? `${C.first_name} ${C.last_name}` : C.email
				},
				s = f => {
					const C = a(f);
					return C && C.has_enterprise_zones
				},
				u = f => f.userCommPreferences,
				E = (0, e.P1)("userCommPreferences", u),
				n = f => {
					const C = a(f);
					return C && C.email_verified
				},
				r = f => {
					const C = E(f);
					return C && C.preferences.marketing_communication
				},
				i = f => f.userDetails,
				p = (0, e.P1)("userDetails", i),
				c = f => {
					const C = p(f);
					return C && C["2FA-RECOVERY"] === "scheduled"
				},
				m = f => {
					const C = p(f);
					return C && C["2FA-RECOVERY"] === "interrupted"
				},
				_ = f => {
					const C = p(f);
					return C == null ? void 0 : C["NEW-USER-EMAIL"]
				},
				T = f => f.gates.assignments,
				A = (f, C) => f && f[C];

			function h(f, C) {
				const w = T(f);
				return w ? A(w, C) : void 0
			}
			const S = (f, C) => h(f, C) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return w
				},
				$t: function() {
					return Ie
				},
				A4: function() {
					return _
				},
				Cu: function() {
					return T
				},
				DQ: function() {
					return te
				},
				Ej: function() {
					return N
				},
				FH: function() {
					return h
				},
				ID: function() {
					return G
				},
				Ko: function() {
					return be
				},
				Le: function() {
					return Fe
				},
				Ly: function() {
					return ue
				},
				M3: function() {
					return pe
				},
				N8: function() {
					return R
				},
				NY: function() {
					return X
				},
				Ns: function() {
					return F
				},
				Ox: function() {
					return We
				},
				P4: function() {
					return P
				},
				RO: function() {
					return Z
				},
				Tr: function() {
					return Ke
				},
				U: function() {
					return A
				},
				Ug: function() {
					return f
				},
				V6: function() {
					return Se
				},
				WR: function() {
					return Ye
				},
				Xg: function() {
					return m
				},
				ZB: function() {
					return Ae
				},
				_y: function() {
					return b
				},
				cU: function() {
					return Y
				},
				cg: function() {
					return W
				},
				d2: function() {
					return le
				},
				il: function() {
					return ee
				},
				jN: function() {
					return L
				},
				jg: function() {
					return q
				},
				kC: function() {
					return O
				},
				kf: function() {
					return ke
				},
				ko: function() {
					return me
				},
				mK: function() {
					return Be
				},
				nA: function() {
					return c
				},
				oY: function() {
					return I
				},
				qM: function() {
					return xe
				},
				rq: function() {
					return $
				},
				tS: function() {
					return C
				},
				tU: function() {
					return U
				},
				vB: function() {
					return Ue
				},
				vM: function() {
					return B
				},
				wH: function() {
					return S
				},
				wn: function() {
					return ye
				},
				xU: function() {
					return H
				},
				xw: function() {
					return $e
				},
				z5: function() {
					return Q
				},
				zO: function() {
					return re
				},
				zW: function() {
					return Ge
				},
				zh: function() {
					return Ee
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/app/redux/normalizer.js"),
				a = t("../../../../node_modules/lodash/get.js"),
				d = t.n(a),
				l = t("../../../../node_modules/moment/moment.js"),
				g = t.n(l),
				s = t("../react/common/constants/billing/index.ts");

			function u(V) {
				for (var ie = 1; ie < arguments.length; ie++) {
					var fe = arguments[ie] != null ? Object(arguments[ie]) : {},
						we = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && we.push.apply(we, Object.getOwnPropertySymbols(fe).filter(function(Ne) {
						return Object.getOwnPropertyDescriptor(fe, Ne).enumerable
					})), we.forEach(function(Ne) {
						E(V, Ne, fe[Ne])
					})
				}
				return V
			}

			function E(V, ie, fe) {
				return ie = n(ie), ie in V ? Object.defineProperty(V, ie, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[ie] = fe, V
			}

			function n(V) {
				var ie = r(V, "string");
				return typeof ie == "symbol" ? ie : String(ie)
			}

			function r(V, ie) {
				if (typeof V != "object" || V === null) return V;
				var fe = V[Symbol.toPrimitive];
				if (fe !== void 0) {
					var we = fe.call(V, ie || "default");
					if (typeof we != "object") return we;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ie === "string" ? String : Number)(V)
			}
			const i = (0, o.P1)("zone", V => V.zone),
				p = V => {
					var ie;
					return (ie = V.zoneVersioning) === null || ie === void 0 ? void 0 : ie.zoneVersionSelector
				},
				c = (0, e.P1)(i, p, (V, ie) => {
					var fe, we, Ne;
					let je;
					if (Array.isArray(V) && V.length === 1 ? je = V[0] : V && !Array.isArray(V) && (je = V), !je) return;
					const Ze = !!(ie == null ? void 0 : ie.enabled);
					return u({}, je, je.name && {
						name: Ze ? ie.rootZoneName : je.name
					}, {
						versioning: {
							enabled: Ze,
							isRoot: !((fe = je.name) === null || fe === void 0 ? void 0 : fe.endsWith(".config.cfdata.org")),
							version: Ze ? ie.selectedVersion : 0,
							rootZoneId: Ze ? ie.rootZoneId : (we = (Ne = je) === null || Ne === void 0 ? void 0 : Ne.id) !== null && we !== void 0 ? we : ""
						}
					})
				}),
				m = V => V.zone,
				_ = (0, e.P1)(c, m, (V, ie) => ({
					data: V,
					meta: ie
				})),
				T = V => {
					var ie, fe;
					return (ie = (fe = c(V)) === null || fe === void 0 ? void 0 : fe.id) !== null && ie !== void 0 ? ie : ""
				},
				A = V => V.zones,
				h = V => V.zonesRoot,
				S = V => V.zonesAccount,
				f = (0, o.P1)("zones", A),
				C = (0, o.P1)("zonesRoot", h),
				w = (0, o.P1)("zonesAccount", S);

			function O(V) {
				const ie = c(V);
				return ie ? ie.created_on : null
			}

			function N(V, ie, fe) {
				const we = O(V);
				if (!we) return;
				const Ne = g().duration(ie, fe),
					je = new Date(we),
					Ze = new Date(new Date().getTime() - Ne.asMilliseconds());
				return je.getTime() > Ze.getTime()
			}

			function P(V) {
				const ie = c(V);
				return ie ? ie.status : null
			}

			function I(V) {
				const ie = c(V);
				return ie ? ie.type : null
			}

			function L(V) {
				return (V == null ? void 0 : V.plan_pending) ? V == null ? void 0 : V.plan_pending : V == null ? void 0 : V.plan
			}

			function B(V) {
				const ie = c(V);
				if (!ie) return;
				const fe = L(ie);
				return fe && fe.legacy_id
			}

			function U(V, ie) {
				const fe = L(V);
				return !!fe && s.Gs.indexOf(fe.legacy_id) >= s.Gs.indexOf(ie)
			}

			function H(V) {
				return !!V && V.status === "initializing"
			}

			function le(V) {
				return !!V && V.status === "pending"
			}

			function Ee(V) {
				return !!V && V.status === "active"
			}

			function ae(V, ie) {
				if (!V) return !1;
				const fe = L(V);
				return !!fe && fe.legacy_id === ie
			}

			function me(V) {
				return ae(V, "enterprise")
			}
			const Z = V => me(c(V));

			function Q(V) {
				return ae(V, "business")
			}
			const G = V => Q(c(V));

			function b(V) {
				return ae(V, "pro")
			}

			function F(V) {
				return ae(V, "free")
			}
			const ee = V => F(c(V));

			function ue(V) {
				return !me(V)
			}

			function K(V) {
				return V && V.owner
			}

			function q(V, ie) {
				const fe = K(ie);
				return !!fe && fe.type === "user" && fe.id === V.id
			}

			function $(V) {
				const ie = c(V);
				return !!ie && ie.type === "partial"
			}

			function X(V) {
				const ie = c(V);
				return !!ie && ie.type === "secondary"
			}
			const W = V => {
					var ie;
					const fe = c(V);
					return !!(fe == null ? void 0 : fe.host) && !!((ie = fe.plan) === null || ie === void 0 ? void 0 : ie.externally_managed)
				},
				te = V => {
					const ie = f(V);
					return ie && ie.some(me)
				},
				ye = (V, ie) => {
					const fe = c(V);
					return fe && fe.betas ? fe.betas.includes(ie) : !1
				},
				Ae = (V, ...ie) => d()(V, ["zoneFlags", "data", ...ie]),
				Fe = (V, ...ie) => d()(V, ["accountFlags", "data", ...ie]),
				xe = V => V.accountFlags.isRequesting,
				$e = V => V.zoneFlags.isRequesting,
				Ke = (V, ...ie) => d()(V, ["zoneFlagsChanges", "data", ...ie]),
				be = V => V.zoneFlagsChanges.isRequesting,
				Y = V => V.zoneFlags && V.zoneFlags.data,
				re = V => V.zoneFlags,
				ge = (0, e.P1)(Y, re, (V, ie) => ({
					data: V,
					meta: ie
				})),
				R = (0, o.P1)("abuseUrls", V => V.overview.abuseUrls),
				pe = V => {
					const ie = c(V);
					return ie ? `/${ie.account.id}/${ie.name}` : null
				},
				Se = V => V.zoneMarketingCampaigns,
				ke = V => V.overview.zoneBlocks.data,
				Ge = V => V.overview.zoneBlocks.isRequesting,
				Ie = V => V.overview.zoneBlocks.hasData,
				Be = V => {
					var ie, fe;
					return (V == null || (ie = V.overview.zoneBlocks) === null || ie === void 0 || (fe = ie.paginationData) === null || fe === void 0 ? void 0 : fe.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				Ue = V => V.overview.zoneBlocksReview.isRequesting,
				We = V => V.overview.zoneHold,
				Ye = (0, o.P1)("zoneHold", We)
		},
		"../react/common/utils/formatDate.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			y.Z = (o, a, d = !1) => (0, e.p6)(o, a, d)
		},
		"../react/common/utils/hasRole.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				n: function() {
					return o
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const o = (a, d) => {
				const {
					roles: l = []
				} = (0, e.uF)(a) || {};
				return d.some(g => l.includes(g))
			}
		},
		"../react/common/utils/isGuards.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Q$: function() {
					return a
				},
				t: function() {
					return g
				},
				v5: function() {
					return d
				},
				zE: function() {
					return l
				}
			});
			var e = t("../react/common/constants/index.ts"),
				o = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const a = s => s ? ["page", "per_page", "count", "total_count"].every(E => E in s && s[E]) : !1,
				d = (s = "") => e.Dy.includes(s.toLowerCase()),
				l = s => s !== null && typeof s == "object" && "name" in s && "size" in s && "type" in s && typeof s.slice == "function",
				g = s => (0, o.Z)(s)
		},
		"../react/common/utils/useQueryCache.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				o: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function o(s) {
				for (var u = 1; u < arguments.length; u++) {
					var E = arguments[u] != null ? Object(arguments[u]) : {},
						n = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(E).filter(function(r) {
						return Object.getOwnPropertyDescriptor(E, r).enumerable
					})), n.forEach(function(r) {
						a(s, r, E[r])
					})
				}
				return s
			}

			function a(s, u, E) {
				return u = d(u), u in s ? Object.defineProperty(s, u, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[u] = E, s
			}

			function d(s) {
				var u = l(s, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function l(s, u) {
				if (typeof s != "object" || s === null) return s;
				var E = s[Symbol.toPrimitive];
				if (E !== void 0) {
					var n = E.call(s, u || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(s)
			}
			const g = s => {
				const u = (0, e.useQueryClient)(),
					E = h => {
						var S;
						return u.getQueriesData((S = h) !== null && S !== void 0 ? S : s)
					},
					n = h => {
						var S;
						return u.getQueryData((S = h) !== null && S !== void 0 ? S : s)
					},
					r = h => {
						var S;
						return u.getQueriesData({
							queryKey: (S = h) !== null && S !== void 0 ? S : s,
							stale: !0
						})
					},
					i = (h, S) => {
						var f;
						u.setQueryData((f = S) !== null && f !== void 0 ? f : s, h)
					},
					p = async h => {
						var S;
						await u.refetchQueries((S = h) !== null && S !== void 0 ? S : s)
					}, c = async (h, S) => {
						var f, C;
						await u.invalidateQueries((f = h) !== null && f !== void 0 ? f : s, o({
							refetchActive: !1
						}, (C = S) !== null && C !== void 0 ? C : {}))
					}, m = async (h, S) => {
						const f = h || (C => {
							var w;
							return (C == null || (w = C.queryKey) === null || w === void 0 ? void 0 : w[0]) === s
						});
						await u.invalidateQueries(o({
							predicate: f,
							refetchActive: !1,
							refetchInactive: !1
						}, S))
					};
				return {
					refetch: p,
					cancelData: async () => {
						await u.cancelQueries(s)
					},
					invalidate: c,
					setData: i,
					getDataStale: r,
					getData: E,
					prefetchQuery: (h, S) => {
						var f;
						return u.prefetchQuery((f = S) !== null && f !== void 0 ? f : s, h)
					},
					getQueryData: n,
					predicateInvalidate: m,
					batchInvalidate: async ({
						queryKeysToInvalidate: h = [],
						queryKeysToPredicateInvalidate: S = [],
						refetchActive: f = !1,
						refetchInactive: C = !1
					}) => {
						const w = h.map(N => c(N)),
							O = S.map(N => m(P => {
								var I;
								return (P == null || (I = P.queryKey) === null || I === void 0 ? void 0 : I[0]) === N
							}, {
								refetchActive: f,
								refetchInactive: C
							}));
						await Promise.all([...w, ...O])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(x, y, t) {
			"use strict";
			t.d(y, {
				K2: function() {
					return o
				},
				Lb: function() {
					return a
				},
				XI: function() {
					return d
				},
				bK: function() {
					return u
				},
				jk: function() {
					return s
				},
				wb: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = E => /^https?:\/\/(.*)/.test(E),
				a = E => e.default.hostname.test(E),
				d = E => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(E),
				l = E => /^[!-~]+$/.test(E),
				g = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				s = E => g.test(E),
				u = E => !!E && !!E.length && /^[ -~]+$/.test(E)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(x, y, t) {
			"use strict";
			t.d(y, {
				DZ: function() {
					return d
				},
				GA: function() {
					return E
				},
				hT: function() {
					return g
				},
				p6: function() {
					return a
				},
				qc: function() {
					return l
				},
				w9: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e);
			const a = i => o().utc(i).format("YYYY-MM-DD"),
				d = i => o().utc(i).format(),
				l = i => o().utc(i).startOf("minute").format(),
				g = i => new Date(i),
				s = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				u = i => {
					const p = i / 60 / 60 / 1e3;
					return s[Object.keys(s).sort((c, m) => m - c).find(c => p >= c)]
				},
				E = (i, p = c => c.avg && c.avg.sampleInterval ? c.avg.sampleInterval : 1) => i.length === 0 ? 1 : i.reduce((c, m) => c + p(m), 0) / i.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = i => n[i]
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Jz: function() {
					return E
				},
				OK: function() {
					return l
				},
				_Y: function() {
					return s
				},
				fD: function() {
					return r
				},
				h_: function() {
					return u
				},
				w6: function() {
					return i
				},
				yc: function() {
					return n
				}
			});

			function e(c) {
				for (var m = 1; m < arguments.length; m++) {
					var _ = arguments[m] != null ? Object(arguments[m]) : {},
						T = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(_).filter(function(A) {
						return Object.getOwnPropertyDescriptor(_, A).enumerable
					})), T.forEach(function(A) {
						o(c, A, _[A])
					})
				}
				return c
			}

			function o(c, m, _) {
				return m = a(m), m in c ? Object.defineProperty(c, m, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[m] = _, c
			}

			function a(c) {
				var m = d(c, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function d(c, m) {
				if (typeof c != "object" || c === null) return c;
				var _ = c[Symbol.toPrimitive];
				if (_ !== void 0) {
					var T = _.call(c, m || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(c)
			}
			let l = function(c) {
					return c.Sending = "sending", c.Success = "success", c.Failed = "failed", c.Latent = "latent", c
				}({}),
				g = function(c) {
					return c[c.Success = 200] = "Success", c[c.BadRequest = 400] = "BadRequest", c
				}({});
			const s = {
					status: l.Latent,
					statusCode: void 0
				},
				u = {
					status: l.Sending
				},
				E = {
					status: l.Success,
					statusCode: g.Success
				},
				n = {
					status: l.Failed,
					statusCode: g.BadRequest
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
					}, s),
					installsList: e({
						value: []
					}, s),
					categoriesList: e({
						value: []
					}, s),
					recommendedAppsList: e({
						value: []
					}, s),
					metadata: e({
						value: null
					}, s),
					app: e({
						value: null
					}, s),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, s)
				},
				p = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Ux: function() {
					return r
				},
				cz: function() {
					return p
				},
				im: function() {
					return s
				},
				pG: function() {
					return i
				},
				t$: function() {
					return c
				}
			});
			var e = t("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(_) {
				for (var T = 1; T < arguments.length; T++) {
					var A = arguments[T] != null ? Object(arguments[T]) : {},
						h = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(A).filter(function(S) {
						return Object.getOwnPropertyDescriptor(A, S).enumerable
					})), h.forEach(function(S) {
						a(_, S, A[S])
					})
				}
				return _
			}

			function a(_, T, A) {
				return T = d(T), T in _ ? Object.defineProperty(_, T, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[T] = A, _
			}

			function d(_) {
				var T = l(_, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function l(_, T) {
				if (typeof _ != "object" || _ === null) return _;
				var A = _[Symbol.toPrimitive];
				if (A !== void 0) {
					var h = A.call(_, T || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(_)
			}
			const g = _ => _.test(window.location.hostname),
				s = () => g(e.j9),
				u = () => g(MARKETPLACE_LOCAL_URL_REGEXP),
				E = (_, T) => {
					const A = random(0, 1) ? -1 : 1;
					return _.points === T.points || _.points >= APP_POINTS_THRESHOLD && T.points >= APP_POINTS_THRESHOLD ? A : _.points < 0 || T.points < 0 || _.points >= APP_POINTS_THRESHOLD || T.points >= APP_POINTS_THRESHOLD ? T.points - _.points : A
				},
				n = (_, T, A) => {
					const h = get(T, A),
						S = get(_, A);
					return h && !isEqual(h, S)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (_, T) => T.map(A => _.find(h => h.id === A)),
						addAppVersionInfo: (_, T) => o({}, T, {
							currentVersion: T.versions.find(A => A.tag === _.versionTag),
							latestVersion: T.versions.find(A => A.tag === T.infoVersion)
						}),
						addCurrentSiteInstall: (_, T) => o({}, T, {
							currentSiteInstall: _.find(A => A.appId === T.id)
						})
					}
				},
				i = (_, T, A) => o({}, _, T, A ? {
					value: A
				} : {}),
				p = _ => _.map(T => T.status),
				c = _ => _.apps ? _.apps : _,
				m = _ => {
					let T = ["by-cloudflare"];
					return _.filter(A => !T.includes(A.id) && A.visible).sort((A, h) => A.points < h.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(x, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				categorySlugTranslationKey: function() {
					return l
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return d
				},
				translations: function() {
					return a
				}
			});
			var e = t("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: a,
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

			function l(g) {
				const s = g.replace(/-/g, "_");
				return Object.keys(o).includes(s) ? s : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				L: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/url-join/lib/url-join.js"),
				o = t.n(e),
				a = t("../../../../node_modules/lodash-es/defaults.js"),
				d = t("../react/pages/apps/marketplace/libraries/helpers.ts");

			function l(p) {
				for (var c = 1; c < arguments.length; c++) {
					var m = arguments[c] != null ? Object(arguments[c]) : {},
						_ = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(m).filter(function(T) {
						return Object.getOwnPropertyDescriptor(m, T).enumerable
					})), _.forEach(function(T) {
						u(p, T, m[T])
					})
				}
				return p
			}

			function g(p, c) {
				if (p == null) return {};
				var m = s(p, c),
					_, T;
				if (Object.getOwnPropertySymbols) {
					var A = Object.getOwnPropertySymbols(p);
					for (T = 0; T < A.length; T++) _ = A[T], !(c.indexOf(_) >= 0) && (!Object.prototype.propertyIsEnumerable.call(p, _) || (m[_] = p[_]))
				}
				return m
			}

			function s(p, c) {
				if (p == null) return {};
				var m = {},
					_ = Object.keys(p),
					T, A;
				for (A = 0; A < _.length; A++) T = _[A], !(c.indexOf(T) >= 0) && (m[T] = p[T]);
				return m
			}

			function u(p, c, m) {
				return c = E(c), c in p ? Object.defineProperty(p, c, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[c] = m, p
			}

			function E(p) {
				var c = n(p, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function n(p, c) {
				if (typeof p != "object" || p === null) return p;
				var m = p[Symbol.toPrimitive];
				if (m !== void 0) {
					var _ = m.call(p, c || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(p)
			}
			class r {
				constructor(c) {
					u(this, "token", void 0), u(this, "options", void 0), u(this, "setAuthHeader", m => {
						this.token = m
					}), this.token = "", this.options = (0, a.Z)(c, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(c = "GET", m, _ = {}) {
					const {
						body: T
					} = _, A = g(_, ["body"]);
					return fetch(o()(this.options.baseUrl, m), l({
						method: c
					}, A, T ? {
						body: JSON.stringify(T)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(l({
							Accept: "application/json, text/plain, */*"
						}, _.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(c, m = {}) {
					const _ = await this.request("GET", c, m);
					return this.parseJSONResponse(_)
				}
				async postJSON(c, m = {}) {
					const _ = await this.request("POST", c, l({}, m, {
						headers: l({}, m.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(_)
				}
				parseJSONResponse(c) {
					return c.json()
				}
			}
			u(r, "defaults", {
				baseUrl: (0, d.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const i = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				JX: function() {
					return E
				},
				Jb: function() {
					return r
				},
				RX: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/lodash-es/upperFirst.js"),
				o = t("../../../../node_modules/lodash-es/isEmpty.js"),
				a = t("../../../../node_modules/query-string/query-string.js"),
				d = t.n(a),
				l = t("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				g = t("../react/pages/apps/marketplace/requests/Requester.ts"),
				s = t("../react/pages/apps/marketplace/libraries/resource.ts");

			function* u(c, m, _, T) {
				const A = (0, e.Z)(m),
					[h, S, f] = [`get${A}Sending`, `get${A}Success`, `get${A}Failed`];
				try {
					yield(0, l.gz)(c[h]());
					const C = yield(0, l.RE)(i, _);
					let w = C;
					if (w.error) {
						yield(0, l.gz)(c[f]());
						return
					}
					return T && (w = yield T(C)), yield(0, l.gz)(c[S](w)), w
				} catch {
					yield(0, l.gz)(c[f]())
				}
			}

			function* E(c, m, _, T) {
				const A = (0, e.Z)(m),
					h = `get${A}Sending`,
					S = `get${A}Success`,
					f = `get${A}Failed`;
				try {
					yield(0, l.gz)(c[h]());
					const C = yield(0, l.RE)(p, {
						url: _,
						data: T
					});
					return yield(0, l.gz)(c[S](C)), C
				} catch {
					yield(0, l.gz)(c[f]())
				}
			}
			const n = c => (0, o.Z)(c) ? "" : `?${a.stringify(c)}`,
				r = {
					app: new s.c({
						name: "app",
						url: (c, m) => `apps/${c}${n(m)}`
					}),
					apps: new s.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new s.c({
							name: "installs",
							url: c => `sites/${c}/installs`
						}),
						delete: new s.c({
							name: "installs",
							url: c => `installs/${c}`
						})
					},
					categories: new s.c({
						name: "categories",
						url: (c = {}) => "categories" + n(c)
					}),
					metadata: {
						get: new s.c({
							name: "metadata",
							url: c => `sites/${c}/metadata`
						}),
						post: new s.c({
							name: "metadata",
							url: c => `sites/${c}/metadata`
						})
					},
					ratings: {
						default: new s.c({
							name: "ratings",
							url: (c = {}) => "ratings" + n(c)
						}),
						delete: new s.c({
							name: "ratings",
							url: c => `ratings/${c}`
						})
					},
					recommendedApps: new s.c({
						name: "recommendedApps",
						url: (c = {}) => "apps/recommend" + n(c)
					}),
					developedApps: new s.c({
						name: "developedApps",
						url: c => `user/${c}/apps`
					})
				},
				i = async c => g.L.fetchJSON(c), p = async c => {
					const {
						url: m,
						data: _
					} = c;
					return g.L.postJSON(m, {
						body: _
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Nw: function() {
					return u
				},
				U4: function() {
					return s
				},
				XO: function() {
					return g
				},
				ZP: function() {
					return E
				}
			});
			var e = t("../react/pages/apps/marketplace/config/initialState.ts");

			function o(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						p = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(i).filter(function(c) {
						return Object.getOwnPropertyDescriptor(i, c).enumerable
					})), p.forEach(function(c) {
						a(n, c, i[c])
					})
				}
				return n
			}

			function a(n, r, i) {
				return r = d(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function d(n) {
				var r = l(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function l(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var p = i.call(n, r || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let g = function(n) {
					return n.SetCurrentUser = "user.set", n
				}({}),
				s = function(n) {
					return n.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", n.SetZone = "MARKETPLACE/AUTH/SET_ZONE", n.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", n.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", n.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", n.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", n.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", n.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", n.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", n.ResetState = "MARKETPLACE/AUTH/RESET_STATE", n
				}({});
			const u = {
				resetState: () => ({
					type: s.ResetState
				}),
				initSaga: n => ({
					type: s.InitSaga,
					zoneId: n
				}),
				setZone: n => ({
					type: s.SetZone,
					zone: n
				}),
				setToken: n => ({
					type: s.SetToken,
					token: n
				}),
				clearToken: () => ({
					type: s.ClearToken
				}),
				setTokenValid: n => ({
					type: s.SetTokenValid,
					isTokenValid: n
				}),
				getCurrentUserSaga: () => ({
					type: s.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: s.CurrentUserSending
				}),
				getCurrentUserSuccess: n => ({
					type: s.CurrentUserSuccess,
					user: n
				}),
				getCurrentUserFailed: () => ({
					type: s.CurrentUserFailed
				})
			};

			function E(n = e.fD, r) {
				switch (r.type) {
					case s.ResetState:
						return o({}, e.fD);
					case s.CurrentUserSending:
						return o({}, n);
					case s.CurrentUserSuccess:
						const {
							user: i
						} = r;
						return o({}, n, {
							user: i
						});
					case s.CurrentUserFailed:
						return o({}, n);
					case s.SetZone:
						const {
							zone: p
						} = r;
						return o({}, n, {
							zone: p
						});
					case s.SetToken:
						const {
							token: c
						} = r;
						return o({}, n, {
							token: c
						});
					case s.ClearToken:
						return o({}, n, {
							token: null
						});
					case s.SetTokenValid:
						const {
							isTokenValid: m
						} = r;
						return o({}, n, {
							isTokenValid: m
						});
					default:
						return n
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Nw: function() {
					return E
				},
				U4: function() {
					return u
				},
				ZP: function() {
					return n
				},
				dg: function() {
					return s
				}
			});
			var e = t("../react/pages/apps/marketplace/config/initialState.ts"),
				o = t("../react/pages/apps/marketplace/libraries/helpers.ts");

			function a(r) {
				for (var i = 1; i < arguments.length; i++) {
					var p = arguments[i] != null ? Object(arguments[i]) : {},
						c = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(p).filter(function(m) {
						return Object.getOwnPropertyDescriptor(p, m).enumerable
					})), c.forEach(function(m) {
						d(r, m, p[m])
					})
				}
				return r
			}

			function d(r, i, p) {
				return i = l(i), i in r ? Object.defineProperty(r, i, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = p, r
			}

			function l(r) {
				var i = g(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function g(r, i) {
				if (typeof r != "object" || r === null) return r;
				var p = r[Symbol.toPrimitive];
				if (p !== void 0) {
					var c = p.call(r, i || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}
			let s = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				u = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const E = {
				resetState: () => ({
					type: u.ResetState
				}),
				zoneChangedSaga: () => ({
					type: u.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (r, i) => ({
					type: u.GetHomePageAssetsSaga,
					zoneId: r,
					currentResources: i
				}),
				getInstalledAppsAssetsSaga: r => ({
					type: u.GetInstalledAppsAssetsSaga,
					zoneId: r
				}),
				getDevelopedAppsAssetsSaga: (r, i) => ({
					type: u.GetDevelopedAppsAssetsSaga,
					userId: r,
					zoneId: i
				}),
				getDevelopedAppsSending: () => ({
					type: u.GetDevelopedAppsSending
				}),
				getDevelopedAppsSuccess: r => ({
					type: u.GetDevelopedAppsSuccess,
					developedApps: r
				}),
				getDevelopedAppsFailed: () => ({
					type: u.GetDevelopedAppsFailed
				}),
				getAppInfoAssetsSaga: (r, i, p) => ({
					type: u.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: i,
					version: p
				}),
				setUpdatableInstalls: r => ({
					type: u.SetUpdatableInstalls,
					updatableInstallsList: r
				}),
				getAppSaga: r => ({
					type: u.GetAppSaga,
					appIdentifier: r
				}),
				getAppSending: () => ({
					type: u.GetAppSending
				}),
				getAppSuccess: r => ({
					type: u.GetAppSuccess,
					app: r
				}),
				getAppFailed: () => ({
					type: u.GetAppFailed
				}),
				clearApp: () => ({
					type: u.ClearApp
				}),
				getAppsSaga: () => ({
					type: u.GetAppsSaga
				}),
				getAppsSending: () => ({
					type: u.GetAppsSending
				}),
				getAppsSuccess: r => ({
					type: u.GetAppsSuccess,
					appsList: r
				}),
				getAppsFailed: () => ({
					type: u.GetAppsFailed
				}),
				getInstallsSaga: r => ({
					type: u.GetInstallsSaga,
					zoneId: r
				}),
				getInstallsSending: () => ({
					type: u.GetInstallsSending
				}),
				getInstallsSuccess: r => ({
					type: u.GetInstallsSuccess,
					installsList: r
				}),
				getInstallsFailed: () => ({
					type: u.GetInstallsFailed
				}),
				getCategoriesSaga: r => ({
					type: u.GetCategoriesSaga,
					queryParams: r
				}),
				getCategoriesSending: () => ({
					type: u.GetCategoriesSending
				}),
				getCategoriesSuccess: r => ({
					type: u.GetCategoriesSuccess,
					categoriesList: r
				}),
				getCategoriesFailed: () => ({
					type: u.GetCategoriesFailed
				}),
				getMetadataSaga: r => ({
					type: u.GetMetadataSaga,
					zoneId: r
				}),
				getMetadataSending: () => ({
					type: u.GetMetadataSending
				}),
				getMetadataSuccess: r => ({
					type: u.GetMetadataSuccess,
					metadata: r
				}),
				getMetadataFailed: () => ({
					type: u.GetMetadataFailed
				}),
				postMetadataSaga: (r, i) => ({
					type: u.PostMetadataSaga,
					zoneId: r,
					data: i
				}),
				postMetadataSending: () => ({
					type: u.PostMetadataSending
				}),
				postMetadataSuccess: r => ({
					type: u.PostMetadataSuccess,
					metadata: r
				}),
				postMetadataFailed: () => ({
					type: u.PostMetadataFailed
				}),
				getRecommendedAppsSaga: (r, i, p) => ({
					type: u.GetRecommendedAppsSaga,
					appsList: r,
					installsList: i,
					metadata: p
				}),
				getRecommendedAppsSending: () => ({
					type: u.GetRecommendedAppsSending
				}),
				getRecommendedAppsSuccess: r => ({
					type: u.GetRecommendedAppsSuccess,
					recommendedAppsList: r
				}),
				getRecommendedAppsFailed: () => ({
					type: u.GetRecommendedAppsFailed
				})
			};

			function n(r = e.w6, i) {
				switch (i.type) {
					case u.ResetState:
						return a({}, e.w6);
					case u.ZoneChangedSaga:
						return a({}, r, {
							installsList: a({}, e.w6.installsList),
							recommendedAppsList: a({}, e.w6.recommendedAppsList),
							metadata: a({}, e.w6.metadata)
						});
					case u.GetAppsSending:
						return a({}, r, {
							appsList: a({}, (0, o.pG)(r.appsList, e.h_))
						});
					case u.GetAppsSuccess:
						return a({}, r, {
							appsList: a({}, (0, o.pG)(r.appsList, e.Jz, i.appsList))
						});
					case u.GetAppsFailed:
						return a({}, r, {
							appsList: a({}, (0, o.pG)(r.appsList, e.yc))
						});
					case u.GetInstallsSending:
						return a({}, r, {
							installsList: a({}, (0, o.pG)(r.installsList, e.h_))
						});
					case u.GetInstallsSuccess:
						return a({}, r, {
							installsList: a({}, (0, o.pG)(r.installsList, e.Jz, i.installsList))
						});
					case u.GetInstallsFailed:
						return a({}, r, {
							installsList: a({}, (0, o.pG)(r.installsList, e.yc))
						});
					case u.GetCategoriesSending:
						return a({}, r, {
							categoriesList: a({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case u.GetCategoriesSuccess:
						return a({}, r, {
							categoriesList: a({}, (0, o.pG)(r.categoriesList, e.Jz, i.categoriesList))
						});
					case u.GetCategoriesFailed:
						return a({}, r, {
							categoriesList: a({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case u.GetMetadataSending:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.h_))
						});
					case u.GetMetadataSuccess:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.Jz, i.metadata))
						});
					case u.GetMetadataFailed:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.yc))
						});
					case u.PostMetadataSending:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.h_))
						});
					case u.PostMetadataSuccess:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.Jz, i.metadata))
						});
					case u.PostMetadataFailed:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.yc))
						});
					case u.GetRecommendedAppsSending:
						return a({}, r, {
							recommendedAppsList: a({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case u.GetRecommendedAppsSuccess:
						return a({}, r, {
							recommendedAppsList: a({}, (0, o.pG)(r.recommendedAppsList, e.Jz, i.recommendedAppsList))
						});
					case u.GetRecommendedAppsFailed:
						return a({}, r, {
							recommendedAppsList: a({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case u.GetAppSending:
						return a({}, r, {
							app: a({}, (0, o.pG)(r.app, e.h_))
						});
					case u.GetAppSuccess:
						return a({}, r, {
							app: a({}, (0, o.pG)(r.app, e.Jz, i.app))
						});
					case u.GetAppFailed:
						return a({}, r, {
							app: a({}, (0, o.pG)(r.app, e.yc))
						});
					case u.ClearApp:
						return a({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case u.SetUpdatableInstalls:
						return a({}, r, {
							updatableInstallsList: i.updatableInstallsList
						});
					case u.GetDevelopedAppsSending:
						return a({}, r, {
							developedApps: a({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case u.GetDevelopedAppsSuccess:
						return a({}, r, {
							developedApps: a({}, (0, o.pG)(r.developedApps, e.Jz, i.developedApps))
						});
					case u.GetDevelopedAppsFailed:
						return a({}, r, {
							developedApps: a({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/caching/tracking.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o
			}({})
		},
		"../react/pages/d1/routes.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				H: function() {
					return a
				},
				_: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
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
					tableUpdateData: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/tables/${"tableName"}/${"primaryKeyName"}/${"primaryKeyId"}`
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
		"../react/pages/dns/dns-records/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e
				},
				X: function() {
					return o
				}
			});
			let e = function(a) {
				return a.DNS_RECORD_CREATE = "create DNS records", a.DNS_RECORD_UPDATE = "update DNS records", a.DNS_RECORD_DELETE = "delete DNS records", a.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", a
			}({});
			const o = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				BB: function() {
					return o
				},
				Pm: function() {
					return a
				},
				UZ: function() {
					return e
				}
			});
			let e = function(l) {
				return l.ROOT = "root", l.DSTADDRS_CARD = "dstaddrs_card", l.RULES_CARD = "rules_card", l.CATCHALL_CARD = "catchall_card", l.SETTINGS_PAGE = "settings_page", l.WORKERS_PAGE = "workers_page", l
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
			let a = function(l) {
				return l[l.Verified = 0] = "Verified", l[l.Pending = 1] = "Pending", l[l.Missing = 2] = "Missing", l[l.WorkerNotFound = 3] = "WorkerNotFound", l[l.Unknown = 4] = "Unknown", l[l.Loading = 5] = "Loading", l
			}({});
			const d = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/config.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				jk: function() {
					return T
				},
				w8: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				a = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				d = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function l(h) {
				for (var S = 1; S < arguments.length; S++) {
					var f = arguments[S] != null ? Object(arguments[S]) : {},
						C = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(f).filter(function(w) {
						return Object.getOwnPropertyDescriptor(f, w).enumerable
					})), C.forEach(function(w) {
						g(h, w, f[w])
					})
				}
				return h
			}

			function g(h, S, f) {
				return S = s(S), S in h ? Object.defineProperty(h, S, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[S] = f, h
			}

			function s(h) {
				var S = u(h, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function u(h, S) {
				if (typeof h != "object" || h === null) return h;
				var f = h[Symbol.toPrimitive];
				if (f !== void 0) {
					var C = f.call(h, S || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(h)
			}
			const E = "Notifications",
				n = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				i = (0, e.BC)`${r}/notifications`,
				p = (0, e.BC)`${i}/destinations`,
				c = (0, e.BC)`${i}/create`,
				m = (0, e.BC)`${c}/${"alertType"}`,
				_ = (0, e.BC)`${i}/edit/${"alertId"}`,
				T = l({
					account: r,
					alerts: i,
					destinations: p,
					createAlert: c,
					createAlertWithSelection: m,
					editAlert: _
				}, o._j, a._j),
				A = l({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, d.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				_j: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				a = (0, e.BC)`${o}/pagerduty/connect`,
				d = (0, e.BC)`${o}/pagerduty/register`,
				l = (0, e.BC)`${o}/pagerduty`,
				g = {
					pagerDutyConnect: a,
					pagerDutyRegister: d,
					pagerDutyList: l
				};
			var s = null
		},
		"../react/pages/home/alerts/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o
			}({})
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_LIST = "create list", o.DELETE_LIST = "delete list", o.ADD_LIST_ITEM = "add list item", o.DELETE_LIST_ITEM = "delete list item", o
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				AA: function() {
					return X
				},
				AN: function() {
					return it
				},
				AY: function() {
					return Te
				},
				Ac: function() {
					return De
				},
				Am: function() {
					return T
				},
				B2: function() {
					return G
				},
				BB: function() {
					return N
				},
				BF: function() {
					return je
				},
				BQ: function() {
					return Oe
				},
				E8: function() {
					return z
				},
				Fl: function() {
					return se
				},
				Fu: function() {
					return L
				},
				Gc: function() {
					return at
				},
				Hc: function() {
					return Ft
				},
				IO: function() {
					return Qe
				},
				JK: function() {
					return R
				},
				K: function() {
					return C
				},
				LI: function() {
					return ze
				},
				LX: function() {
					return we
				},
				L_: function() {
					return Ge
				},
				Ly: function() {
					return Ve
				},
				MR: function() {
					return F
				},
				Mj: function() {
					return ue
				},
				NB: function() {
					return qe
				},
				Oe: function() {
					return Nt
				},
				Or: function() {
					return q
				},
				P5: function() {
					return Je
				},
				PE: function() {
					return Ke
				},
				Pd: function() {
					return vt
				},
				Pk: function() {
					return Y
				},
				Pp: function() {
					return Ue
				},
				Q1: function() {
					return I
				},
				Qr: function() {
					return Ne
				},
				Qv: function() {
					return be
				},
				Rp: function() {
					return Re
				},
				S7: function() {
					return It
				},
				Sh: function() {
					return he
				},
				Sl: function() {
					return $t
				},
				TZ: function() {
					return $
				},
				Tg: function() {
					return pe
				},
				Tp: function() {
					return lt
				},
				Uy: function() {
					return et
				},
				Vw: function() {
					return U
				},
				W3: function() {
					return V
				},
				WR: function() {
					return mt
				},
				WX: function() {
					return Ae
				},
				XF: function() {
					return gt
				},
				Xb: function() {
					return W
				},
				ZB: function() {
					return P
				},
				Zs: function() {
					return ke
				},
				_f: function() {
					return Ze
				},
				b4: function() {
					return ye
				},
				bc: function() {
					return Kt
				},
				c2: function() {
					return b
				},
				cE: function() {
					return ve
				},
				dh: function() {
					return Be
				},
				fE: function() {
					return Ie
				},
				g7: function() {
					return $e
				},
				hO: function() {
					return Ye
				},
				hV: function() {
					return ut
				},
				hk: function() {
					return A
				},
				hr: function() {
					return te
				},
				it: function() {
					return We
				},
				j3: function() {
					return rt
				},
				jN: function() {
					return ge
				},
				jo: function() {
					return Wt
				},
				k3: function() {
					return wt
				},
				m8: function() {
					return me
				},
				nm: function() {
					return k
				},
				oW: function() {
					return de
				},
				pH: function() {
					return Z
				},
				pi: function() {
					return ae
				},
				r4: function() {
					return Gt
				},
				rI: function() {
					return ee
				},
				s7: function() {
					return dt
				},
				sg: function() {
					return oe
				},
				tB: function() {
					return m
				},
				tN: function() {
					return xe
				},
				u_: function() {
					return zt
				},
				vV: function() {
					return ot
				},
				vc: function() {
					return re
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				a = t("../../../../node_modules/moment/moment.js"),
				d = t.n(a),
				l = t("../../../common/util/types/src/api/domain.ts"),
				g = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				s = t("../react/utils/url.ts"),
				u = t("../react/pages/home/domain-registration/config.ts"),
				E = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function r(v) {
				for (var D = 1; D < arguments.length; D++) {
					var _e = arguments[D] != null ? Object(arguments[D]) : {},
						Pe = Object.keys(_e);
					typeof Object.getOwnPropertySymbols == "function" && Pe.push.apply(Pe, Object.getOwnPropertySymbols(_e).filter(function(He) {
						return Object.getOwnPropertyDescriptor(_e, He).enumerable
					})), Pe.forEach(function(He) {
						i(v, He, _e[He])
					})
				}
				return v
			}

			function i(v, D, _e) {
				return D = p(D), D in v ? Object.defineProperty(v, D, {
					value: _e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[D] = _e, v
			}

			function p(v) {
				var D = c(v, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function c(v, D) {
				if (typeof v != "object" || v === null) return v;
				var _e = v[Symbol.toPrimitive];
				if (_e !== void 0) {
					var Pe = _e.call(v, D || "default");
					if (typeof Pe != "object") return Pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(v)
			}

			function m(v) {
				return v.filter(D => D.isSelected).reduce((D, {
					name: _e,
					fees: Pe,
					isZoneEntitlementPresent: He
				}) => He || !(0, e.isNumber)(Pe == null ? void 0 : Pe.transfer_fee) ? D : De(_e) ? D + (Pe == null ? void 0 : Pe.transfer_fee) * 2 : D + (Pe == null ? void 0 : Pe.transfer_fee), 0)
			}

			function _(v) {
				return v.filter(D => D.registrar.toLowerCase() === "godaddy")
			}
			const T = "MMM D, YYYY";

			function A(v, D, _e, Pe) {
				var He, ft, Ct, ht, kt, bt, ct, Pt, Tt, At, Lt, St;
				const tt = v[D.name],
					Vt = () => De(D.name) ? d()(D.expires_at).add(2, "years").format(T) : d()(D.expires_at).add(1, "year").format(T);
				return r({
					name: D.name,
					zone: tt,
					entitlements: _e,
					registryCheck: Pe,
					nameservers: D.name_servers,
					isAvailable: D.available,
					lastKnownStatus: D.last_known_status,
					authCode: D.auth_code,
					isEnterpriseZone: (tt == null || (He = tt.plan) === null || He === void 0 ? void 0 : He.legacy_id) === "enterprise",
					isActiveZone: (tt == null ? void 0 : tt.status) === "active",
					corResponsesPending: D.cor_responses_pending,
					isCorLocked: D.cor_locked,
					corLockedUntil: D.cor_locked_until ? d()(D.cor_locked_until).format(T) : null,
					isFullZone: (tt == null ? void 0 : tt.type) == n.xd.Full,
					isLocked: D.locked,
					registrar: D.current_registrar || u.JM,
					zoneId: tt == null ? void 0 : tt.id,
					currentExpiration: d()(D.expires_at).format(T),
					newExpiration: Vt(),
					lastEntitledAt: D.last_entitled_at ? new Date(D.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(_e) && !!_e.find(Bt => Bt.id === u.g5 && Bt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: D.transfer_in && f(D.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: D.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: D.transfer_in,
					transferOut: D.transfer_out,
					autoRenew: D.auto_renew === !0,
					lastTransferredAt: D.last_transferred_at,
					createdAt: D.created_at,
					paymentExpiresAt: d()(D.payment_expires_at).isValid() ? d()(D.payment_expires_at) : d()(D.expires_at).isValid() ? d()(D.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (ft = D.contacts) === null || ft === void 0 || (Ct = ft.administrator) === null || Ct === void 0 ? void 0 : Ct.id,
						[n.l2.Billing]: (ht = D.contacts) === null || ht === void 0 || (kt = ht.billing) === null || kt === void 0 ? void 0 : kt.id,
						[n.l2.Registrant]: (bt = D.contacts) === null || bt === void 0 || (ct = bt.registrant) === null || ct === void 0 ? void 0 : ct.id,
						[n.l2.Technical]: (Pt = D.contacts) === null || Pt === void 0 || (Tt = Pt.technical) === null || Tt === void 0 ? void 0 : Tt.id
					},
					landing: D.landing,
					privacy: D.privacy,
					whois: D.whois,
					emailVerified: D.email_verified,
					materialChanges: w(D.material_changes),
					corChanges: D.cor_changes ? N(Object.assign(r({}, S), D.cor_changes)) : {},
					registryStatuses: D.registry_statuses ? D.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (At = D.domain_protection_services) === null || At === void 0 ? void 0 : At.status
					},
					deletion: {
						isDeletable: D == null || (Lt = D.deletion) === null || Lt === void 0 ? void 0 : Lt.is_deletable
					},
					premiumType: D == null ? void 0 : D.premium_type,
					fees: D == null ? void 0 : D.fees
				}, D.domain_move && {
					domainMove: {
						ineligibilityReasons: (St = D.domain_move) === null || St === void 0 ? void 0 : St.ineligibility_reasons
					}
				}, D.actionable_metadata && {
					actionableMetadata: h(D.actionable_metadata)
				}, D.policies && {
					policies: r({}, D.policies.suspension && {
						suspension: {
							parked: D.policies.suspension.parked,
							parkingReason: D.policies.suspension.parking_reason,
							paymentExpired: D.policies.suspension.payment_expired
						}
					})
				})
			}

			function h(v) {
				return v.map(D => ({
					accountContext: D.account_context,
					createdAt: D.created_at,
					expiresAt: D.expires_at,
					sentAt: D.sent_at,
					status: D.status,
					type: D.type
				}))
			}
			const S = {
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

			function f(v) {
				switch (v.enter_auth_code) {
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

			function C(v) {
				let D = v.extensions;
				(D == null ? void 0 : D.application_purpose) && (D == null ? void 0 : D.nexus_category) && (v.extensions = {
					nexusCategory: D.nexus_category,
					applicationPurpose: D.application_purpose
				});
				let _e = r({}, typeof v.id == "string" ? {
					id: v.id
				} : {}, {
					first_name: v.firstName,
					organization: v.organization,
					address: v.address1,
					city: v.city,
					state: v.state || "N/A",
					zip: v.zip,
					country: v.country,
					phone: v.phone,
					email: v.email,
					fax: "",
					last_name: v.lastName,
					address2: v.address2,
					email_verified: v.emailVerified
				}, v.extensions ? {
					extensions: {
						nexus_category: v.extensions.nexusCategory,
						application_purpose: v.extensions.applicationPurpose
					}
				} : {});
				return Se(_e)
			}

			function w(v) {
				let D = [];
				const _e = {
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
				for (const Pe in v) {
					const He = v[Pe],
						ft = _e[He];
					D.push(ft)
				}
				return D
			}
			const O = v => {
				if (!v) return null;
				let D = v;
				return v.includes("C31") && (D = "C31"), v.includes("C32") && (D = "C32"), D
			};

			function N(v) {
				return r({}, typeof v.id == "string" ? {
					id: v.id
				} : {}, {
					firstName: v.first_name,
					organization: v.organization,
					address1: v.address,
					city: v.city,
					state: v.state,
					zip: v.zip,
					country: v.country,
					phone: v.phone.trim(),
					email: v.email.trim(),
					lastName: v.last_name,
					address2: v.address2,
					emailVerified: v.email_verified
				}, v.extensions ? {
					extensions: {
						nexusCategory: O(v.extensions.nexus_category),
						applicationPurpose: v.extensions.application_purpose
					}
				} : {})
			}

			function P(v = {}) {
				const D = {
					name: "",
					zoneId: "",
					zone: r({
						id: "",
						name: "",
						status: "pending",
						plan: r({
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
						}, v.zone && v.zone.plan || {}),
						type: n.xd.Full
					}, v.zone || {}),
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
					autoTransferStatus: n._n.Pending,
					transferAuthCode: "",
					authCodeStatus: n.BJ.Pending,
					transferApiCallStatus: n.Yh.Pending,
					transferConditions: r({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, v.transferConditions || {}),
					transferIn: r({
						unlock_domain: n.lW.UNKNOWN,
						disable_privacy: n.lW.UNKNOWN,
						enter_auth_code: n.lW.UNKNOWN,
						approve_transfer: n.lW.UNKNOWN,
						accept_foa: n.lW.UNKNOWN,
						can_cancel_transfer: !1
					}, v.transferIn || {}),
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
					premiumType: n.Vs.Not_Premium,
					fees: null,
					policies: {
						suspension: {
							parked: !1,
							parkingReason: null,
							paymentExpired: !1
						}
					}
				};
				return Object.assign(D, v)
			}

			function I(v = {}) {
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
				}, v)
			}

			function L(v) {
				const D = u.Py.concat(u.ui).reduce((_e, Pe) => r({}, _e, {
					[Pe]: []
				}), {});
				return v.forEach(_e => {
					let Pe = B(_e.registrar);
					Pe in D || (Pe = u.ui), oe(_e.name) && (Pe = "uk"), D[Pe].push(_e)
				}), Object.keys(D).sort((_e, Pe) => _e.localeCompare(Pe)).map(_e => ({
					registrar: _e,
					domains: D[_e]
				})).filter(_e => _e.domains.length > 0)
			}

			function B(v) {
				return v == null ? void 0 : v.toLowerCase().replace(/\s|,|\./g, "")
			}

			function U(v) {
				if (!v || !v.registrar) return "unknown";
				if (oe(v.name)) return "uk";
				const D = B(v.registrar);
				return D in u.gM ? D : "unknown"
			}
			const H = [];

			function le(v) {
				return H.some(D => v.endsWith("." + D))
			}

			function Ee(v) {
				return !v.isEnterpriseZone || !Array.isArray(v.entitlements) ? !1 : !!v.entitlements.find(({
					id: D,
					allocation: _e
				}) => D === u.g5 && _e.value === !0)
			}

			function ae(v) {
				var D;
				const _e = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let Pe = !1,
					He = null;
				return (D = v.registryStatuses) === null || D === void 0 || D.some(ft => {
					_e.includes(ft) && (He = ft, Pe = !0)
				}), [Pe, He]
			}

			function me(v, D = !1) {
				if (!v) return [!1, E.keys.cannot_transfer_default];
				if (v.zone.status !== "active") return [!1, E.keys.cannot_transfer_zone_not_active];
				if (!v.isFullZone && !Ee(v)) return [!1, E.keys.cannot_transfer_zone_not_eligible];
				if (v.registrar === "Cloudflare") return [!1, E.keys.cannot_transfer_domain_on_cf];
				if (v.isAvailable) return [!1, E.keys.cannot_transfer_domain_available];
				if (!v.transferConditions) return [!1, E.keys.cannot_transfer_domain_transfer_conditions];
				if (!D && et(v == null ? void 0 : v.premiumType)) return [!1, E.keys.cannot_transfer_domain_premium];
				if (Z(v)) return [!1, E.keys.cannot_transfer_domain_transfer_in_progress];
				let _e;
				for (_e in v.transferConditions)
					if (_e !== "not_premium" && !v.transferConditions[_e]) return [!1, E.keys.cannot_transfer_domain_transfer_conditions];
				if (le(v.name)) return [!1, E.keys.cannot_transfer_domain_tld_not_supported];
				const [Pe, He] = ae(v);
				return Pe && He ? [!1, E.keys.cannot_transfer_domain_registry_status[He]] : [!0, ""]
			}

			function Z(v) {
				var D, _e;
				return !!v.transferIn && !((D = v.transferConditions) === null || D === void 0 ? void 0 : D.not_started) && !!(oe(v.name) || ((_e = v.registryStatuses) === null || _e === void 0 ? void 0 : _e.includes(n.rj.PENDING_TRANSFER)))
			}

			function Q(v) {
				return !!v.registrar && !!v.currentExpiration
			}

			function G(v, D = !1) {
				const [_e] = me(v, D);
				return Q(v) ? Fe(v) ? n.M5.InProgressOrOnCF : _e ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function b(v) {
				return v.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(v.transferIn.enter_auth_code) || !1
			}

			function F(v) {
				return v.registrar === "Cloudflare"
			}

			function ee(v) {
				return !!(v == null ? void 0 : v.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function ue(v) {
				return !!(v == null ? void 0 : v.includes(n.rj.PENDING_TRANSFER))
			}
			const K = "Invalid date";

			function q(v) {
				return v.newExpiration === K ? "Unavailable" : v.newExpiration
			}

			function $(v) {
				return v.currentExpiration === K ? "Unavailable" : v.currentExpiration
			}

			function X(v) {
				return v.substring(v.indexOf("."))
			}

			function W(v = "") {
				return v.indexOf(".") !== -1 ? v.substring(0, v.indexOf(".")) : v
			}

			function te(v) {
				return v.map(D => D.name).map(D => X(D)).filter((D, _e, Pe) => !Pe.includes(D, _e + 1))
			}

			function ye(v) {
				if (u.no) return [!0, ""];
				if (!F(v)) return [!1, n.ok.NotOnCF];
				if (v.isCorLocked) return [!1, v.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (v.lastTransferredAt) {
					const D = d()(v.lastTransferredAt),
						_e = d().duration(d()().diff(D)).as("days"),
						Pe = oe(v.name);
					if (_e < (Pe ? 1 : 60)) return [!1, Pe ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (v.createdAt) {
					const D = d()(v.createdAt);
					if (d().duration(d()().diff(D)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function Ae(v) {
				return !!(u.Bc || v.transferOut)
			}

			function Fe(v) {
				return $e(v) || F(v)
			}

			function xe(v) {
				return !$e(v) && F(v)
			}

			function $e(v) {
				return !v || v.lastKnownStatus === "pendingTransfer" || v.lastKnownStatus === "transferFOAPending" || !F(v) && v.transferConditions && !v.transferConditions.not_started || !1
			}

			function Ke(v) {
				return !(le(v.name) || v.transferConditions && !v.transferConditions.supported_tld)
			}

			function be(v) {
				return (v == null ? void 0 : v.includes("/")) ? !0 : v.split("").some(D => D.charCodeAt(0) > 123)
			}

			function Y(v) {
				switch (v) {
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

			function re(v) {
				return d()(v.paymentExpiresAt).isBefore(d()())
			}

			function ge(v) {
				return v.transferIn && v.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function R(v) {
				const D = ["CU", "KP", "IR", "SY"];
				return v.filter(_e => !D.includes(_e.code))
			}

			function pe(v) {
				if (!!v) return `${v.charAt(0).toUpperCase()}${v.slice(1)}${v.charAt(v.length-1)==="."?"":"."}`
			}

			function Se(v) {
				const D = {};
				for (const [_e, Pe] of Object.entries(v)) {
					if (Pe && typeof Pe == "string") {
						Object.assign(D, {
							[_e]: Pe.trim()
						});
						continue
					}
					Object.assign(D, {
						[_e]: Pe
					})
				}
				return D
			}

			function ke(v) {
				return d()(v).add(40, "days")
			}

			function Ge(v) {
				const D = v.paymentExpiresAt || v.payment_expires_at,
					_e = ke(D);
				return d()().isBetween(D, _e)
			}

			function Ie(v) {
				var D;
				return !(v == null ? void 0 : v.registryStatuses) || !Array.isArray(v == null ? void 0 : v.registryStatuses) && !(0, e.isString)(v == null ? void 0 : v.registryStatuses) ? !1 : (D = v.registryStatuses) === null || D === void 0 ? void 0 : D.includes(n.rj.REDEMPTION_PERIOD)
			}

			function Be(v) {
				var D;
				return !(v == null ? void 0 : v.registryStatuses) || !Array.isArray(v == null ? void 0 : v.registryStatuses) && !(0, e.isString)(v == null ? void 0 : v.registryStatuses) ? !1 : (D = v.registryStatuses) === null || D === void 0 ? void 0 : D.includes(n.rj.PENDING_DELETE)
			}

			function Ue(v) {
				return [".us"].includes(v)
			}

			function We(v) {
				return [".us"].includes(v)
			}

			function Ye(v) {
				switch (v) {
					case ".us":
						return fe();
					default:
						return []
				}
			}

			function V(v) {
				switch (v) {
					case ".us":
						return ie;
					default:
						return {}
				}
			}
			const ie = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function fe() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([v, D]) => ({
						value: v,
						label: D
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([v, D]) => ({
						value: v,
						label: D
					}))
				}]
			}

			function we(v, D, _e) {
				return D[D.length - 1][_e] === v[_e]
			}

			function Ne(v) {
				return Boolean(Object.keys(v).length === 0)
			}

			function je(v) {
				return d()().add(v, "year").format(T)
			}

			function Ze({
				accountName: v
			}) {
				var D;
				const _e = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((D = v.toLowerCase().match(_e)) === null || D === void 0 ? void 0 : D[0]) || ""
			}

			function ot(v) {
				return !!v.match(g.default.email)
			}

			function lt(v) {
				return v === l.W7.PENDING_UPDATE
			}

			function at(v) {
				return v ? Object.values(l.wR).filter(D => D !== l.wR.OFFBOARDED).includes(v) : !1
			}

			function dt(v) {
				return v ? [l.wR.LOCKED, l.wR.ONBOARDED, l.wR.ONBOARDING_INITIATED, l.wR.PENDING_REGISTRY_LOCK, l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(v) : !1
			}

			function pt(v) {
				return v ? l.wR.UNLOCKED === v : !1
			}

			function st(v) {
				return v ? l.wR.LOCKED === v : !1
			}

			function ze(v) {
				return v ? l.wR.PENDING_REGISTRY_LOCK === v : !1
			}

			function Oe(v) {
				return v ? [l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(v) : !1
			}

			function Qe(v) {
				var D;
				return !1
			}

			function mt(v) {
				var D;
				return !1
			}

			function it(v) {
				var D;
				return !1
			}

			function gt(v) {
				var D;
				return !1
			}

			function z(v) {
				var D;
				return !1
			}

			function de(v) {
				return Object.keys(l.wR).find(D => l.wR[D].toLowerCase() === v.toLowerCase())
			}

			function Te(v) {
				var D;
				const _e = (D = de(v)) === null || D === void 0 ? void 0 : D.toLowerCase();
				return _e ? E.keys.protection_status[_e] : E.keys.protection_status.unknown
			}

			function ne(v) {
				return ["com", "net"].includes(v)
			}

			function se(v) {
				const D = (0, s.pu)(v);
				return ne(D) ? l.wR.PENDING_REGISTRY_LOCK : l.wR.LOCKED
			}

			function he(v) {
				return (0, s.pu)(v) === "co" ? 5 : 10
			}

			function k(v, D) {
				return D ? 1 : (0, s.pu)(v) === "co" ? 5 : (0, s.pu)(v) === "org" ? 1 : 10
			}

			function oe(v) {
				return (0, s.pu)(v) === "uk"
			}

			function ve(v) {
				return (0, s.pu)(v) === "us"
			}

			function De(v) {
				return (0, s.pu)(v) === "ai"
			}

			function Re(v) {
				return d()(v).isValid()
			}

			function Ve(v) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(v)
			}

			function Je(v) {
				return !!(v == null ? void 0 : v.id)
			}

			function qe(v) {
				return v ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(v) : !1
			}

			function vt(v) {
				return v ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(v) : !1
			}

			function ut(v) {
				var D;
				return (v == null ? void 0 : v.lastKnownStatus) ? (D = v.lastKnownStatus) === null || D === void 0 ? void 0 : D.includes("deletionIrredeemable") : !1
			}

			function et(v) {
				switch (v) {
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

			function Ft(v) {
				if (!v || !v.message) return n.OJ.DEFAULT;
				const {
					message: D
				} = v;
				switch (!0) {
					case D.includes("feature disabled"):
						return n.OJ.FEATURE_DISABLED;
					case D.includes("email unverified"):
						return n.OJ.EMAIL_UNVERIFIED;
					case D.includes("account blocked"):
						return n.OJ.ACCOUNT_BLOCKED;
					default:
						return n.OJ.DEFAULT
				}
			}

			function It(v) {
				var D, _e;
				return !!(((D = v.policies) === null || D === void 0 || (_e = D.suspension) === null || _e === void 0 ? void 0 : _e.parked) && v.policies.suspension.parkingReason)
			}

			function rt(v) {
				var D, _e;
				return It(v) && ((D = v.policies) === null || D === void 0 || (_e = D.suspension) === null || _e === void 0 ? void 0 : _e.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function wt(v) {
				var D, _e;
				return It(v) && ((D = v.policies) === null || D === void 0 || (_e = D.suspension) === null || _e === void 0 ? void 0 : _e.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function $t(v) {
				var D;
				return !((D = v.domainMove) === null || D === void 0 ? void 0 : D.ineligibilityReasons.length)
			}

			function Nt(v) {
				var D, _e;
				return !!((D = v.domainMove) === null || D === void 0 || (_e = D.ineligibilityReasons) === null || _e === void 0 ? void 0 : _e.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Rt(v) {
				var D;
				return (D = v.actionableMetadata) === null || D === void 0 ? void 0 : D.find(_e => _e.type === n.wg.DOMAIN_MOVE)
			}

			function Wt(v) {
				const D = Rt(v);
				return (D == null ? void 0 : D.status) === "pending" && D.accountContext === n._5.GAINING
			}

			function zt(v) {
				const D = Rt(v);
				return (D == null ? void 0 : D.status) === "pending" && D.accountContext === n._5.LOSING
			}

			function Gt(v) {
				const D = X(v.name);
				return !u.Pf.includes(D)
			}

			function Kt(v) {
				return u.QZ.includes(v)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Bc: function() {
					return E
				},
				HG: function() {
					return Ke
				},
				Hv: function() {
					return be
				},
				JM: function() {
					return a
				},
				Pf: function() {
					return c
				},
				Py: function() {
					return g
				},
				QZ: function() {
					return m
				},
				WK: function() {
					return r
				},
				g5: function() {
					return i
				},
				gM: function() {
					return l
				},
				gf: function() {
					return u
				},
				jk: function() {
					return $e
				},
				no: function() {
					return n
				},
				uY: function() {
					return s
				},
				ui: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../flags.ts");
			const a = "Unknown",
				d = "unknown",
				l = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				g = Object.keys(l),
				s = !0,
				u = (0, o.J8)("registrar_mock_data") || !1,
				E = (0, o.J8)("registrar_mock_transfer_out") || !1,
				n = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				i = "cf_registrar.enabled",
				p = "@abcABC1234567890123456",
				c = [".us"],
				m = [".travel", ".us"],
				_ = (0, e.BC)`/${"accountId"}`,
				T = (0, e.BC)`${_}/add-site`,
				A = (0, e.BC)`${_}/registrar`,
				h = (0, e.BC)`${A}/domains`,
				S = (0, e.BC)`${A}/action-center`,
				f = (0, e.BC)`${A}/domain/${"zoneName"}`,
				C = (0, e.BC)`${f}/configuration`,
				w = (0, e.BC)`${f}/contacts`,
				O = (0, e.BC)`${A}/pricing`,
				N = (0, e.BC)`${A}/protection`,
				P = (0, e.BC)`${A}/register`,
				I = (0, e.BC)`${P}/checkout`,
				L = (0, e.BC)`${P}/checkout/${"token"}`,
				B = (0, e.BC)`${P}/success`,
				U = (0, e.BC)`${A}/tlds`,
				H = (0, e.BC)`${A}/transfer`,
				le = (0, e.BC)`${A}/transfer/${"zoneName"}`,
				Ee = (0, e.BC)`/registrar/accounts/verify_email`,
				ae = (0, e.BC)`/registrar/domains/verify_email`,
				me = (0, e.BC)`/sign-up/registrar`,
				Z = (0, e.BC)`${A}/verify-email`,
				Q = (0, e.BC)`${_}/${"zoneName"}`,
				G = (0, e.BC)`${_}/domains`,
				b = (0, e.BC)`${G}/action-center`,
				F = (0, e.BC)`${G}/${"zoneName"}`,
				ee = (0, e.BC)`${F}/configuration`,
				ue = (0, e.BC)`${F}/contacts`,
				K = (0, e.BC)`${G}/pricing`,
				q = (0, e.BC)`${G}/protection`,
				$ = (0, e.BC)`${G}/register`,
				X = (0, e.BC)`${$}/checkout`,
				W = (0, e.BC)`${$}/checkout/${"token"}`,
				te = (0, e.BC)`${$}/success`,
				ye = (0, e.BC)`${G}/tlds`,
				Ae = (0, e.BC)`${G}/transfer`,
				Fe = (0, e.BC)`${G}/transfer/${"zoneName"}`,
				xe = (0, e.BC)`${G}/verify-email`,
				$e = {
					addSite: T,
					domains: h,
					domainsActionCenter: S,
					domainsDomain: f,
					domainsDomainConfiguration: C,
					domainsDomainContacts: w,
					domainsPricing: O,
					domainsProtection: N,
					domainsRegister: P,
					domainsRegisterCheckout: I,
					domainsRegisterCheckoutToken: L,
					domainsRegisterSuccess: B,
					domainsTlds: U,
					domainsTransfer: H,
					domainsTransferZone: le,
					registrar: A,
					registrarAccountsVerifyEmail: Ee,
					registrarDomainsVerifyEmail: ae,
					signup: me,
					verifyEmail: Z,
					zone: Q
				},
				Ke = {
					LEGACY_domains: G,
					LEGACY_domainsActionCenter: b,
					LEGACY_domainsDomain: F,
					LEGACY_domainsDomainConfiguration: ee,
					LEGACY_domainsDomainContacts: ue,
					LEGACY_domainsPricing: K,
					LEGACY_domainsProtection: q,
					LEGACY_domainsRegister: $,
					LEGACY_domainsRegisterCheckout: X,
					LEGACY_domainsRegisterCheckoutToken: W,
					LEGACY_domainsRegisterSuccess: te,
					LEGACY_domainsTlds: ye,
					LEGACY_domainsTransfer: Ae,
					LEGACY_domainsTransferZone: Fe,
					LEGACY_verifyEmail: xe
				},
				be = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				HO: function() {
					return s
				},
				NW: function() {
					return u
				},
				ZQ: function() {
					return d
				},
				b_: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");
			const a = E => {
					const n = E && E.accountFlags && E.accountFlags.data && E.accountFlags.data.registrar && E.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(r => r.trim()) : []
				},
				d = E => {
					var n, r, i;
					return ((n = E.accountFlags) === null || n === void 0 || (r = n.data) === null || r === void 0 || (i = r.registrar) === null || i === void 0 ? void 0 : i["registrar-managed"]) || !1
				},
				l = E => E.account ? E.account.email : "",
				g = E => !1,
				s = E => g(E) && (0, e.oJ)((0, e.Zu)(E)),
				u = E => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: r
					} = E.registrar.registrations;
					return n && !(r.accepted_date || r.id || r.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				J: function() {
					return r
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				d = t.n(a),
				l = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function g(i) {
				for (var p = 1; p < arguments.length; p++) {
					var c = arguments[p] != null ? Object(arguments[p]) : {},
						m = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(c).filter(function(_) {
						return Object.getOwnPropertyDescriptor(c, _).enumerable
					})), m.forEach(function(_) {
						s(i, _, c[_])
					})
				}
				return i
			}

			function s(i, p, c) {
				return p = u(p), p in i ? Object.defineProperty(i, p, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[p] = c, i
			}

			function u(i) {
				var p = E(i, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function E(i, p) {
				if (typeof i != "object" || i === null) return i;
				var c = i[Symbol.toPrimitive];
				if (c !== void 0) {
					var m = c.call(i, p || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(i)
			}
			let n = function(i) {
				return i.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", i.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", i.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", i.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", i.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", i.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", i.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", i.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", i.RENEW_DOMAIN_COMPLETED = "domain renewal completed", i.RESTORE_DOMAIN_INIT = "click to open domain restore modal", i.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", i.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", i.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", i.RESTORE_DOMAIN_FAILURE = "domain restore failed", i.RESTORE_DOMAIN_COMPLETED = "domain restore completed", i.DOMAIN_DELETE_INIT = "click to begin domain delete", i.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", i.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", i.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", i.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", i.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", i.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", i.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", i.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", i.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", i.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", i.DOMAIN_MOVE_START_FLOW = "Start domain move flow", i.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", i.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", i.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", i.DOMAIN_MOVE_SUBMIT = "Submit domain move", i.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", i.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", i.DOMAIN_MOVE_CANCEL = "Domain move cancel", i.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", i.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", i.ACTION_CENTER_NAVIGATE = "Navigate to actions center", i.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", i
			}({});

			function r(i, p, c) {
				if (!(p == null ? void 0 : p.name)) return null;
				d().sendEvent(i, g({
					domain: {
						name: p.name,
						premium: (0, l.Uy)(p == null ? void 0 : p.premiumType),
						paymentExpiresAt: o()(p == null ? void 0 : p.paymentExpiresAt).format()
					},
					category: "registrar"
				}, c))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				HX: function() {
					return a
				},
				hX: function() {
					return u
				},
				s_: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/redux/makeAction.js");
			let a = function(E) {
				return E.WORKERS = "workers", E
			}({});
			const d = [{
					value: a.WORKERS,
					label: "Workers",
					scopeKeyPrefix: "com.cloudflare.edge.worker.script",
					scopeSubsetOfPrefix: "com.cloudflare.api.account"
				}],
				l = e.eg.object({
					id: e.eg.string,
					name: e.eg.string,
					description: e.eg.string
				}),
				g = (0, o.ZP)("granularResources", "get", "/accounts/(accountId)/demoproducts"),
				s = (0, o.ZP)("noop", "get", ""),
				u = (E, n) => n == a.WORKERS ? g(E, {}) : s()
		},
		"../react/pages/home/members/constants.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Ey: function() {
					return s
				},
				F4: function() {
					return c
				},
				Fq: function() {
					return T
				},
				Go: function() {
					return r
				},
				Lc: function() {
					return f
				},
				Np: function() {
					return E
				},
				Rl: function() {
					return n
				},
				Sb: function() {
					return i
				},
				Sw: function() {
					return S
				},
				Sz: function() {
					return h
				},
				Ti: function() {
					return C
				},
				Uw: function() {
					return _
				},
				Zl: function() {
					return m
				},
				jk: function() {
					return A
				},
				r6: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${o}/members`,
				d = (0, e.BC)`${a}/invite`,
				l = (0, e.BC)`${a}/invite/${"memberId"}`,
				g = (0, e.BC)`${a}/add-policy/${"memberId"}`,
				s = "com.cloudflare.api.account",
				E = s + "." + "zone",
				n = E + ".",
				r = 100,
				i = 200,
				p = 5,
				c = 300,
				m = "INVITE_TOAST",
				_ = "00000000000000000000000000000000",
				T = "usergroups-ui",
				A = {
					account: o,
					members: a,
					inviteMembers: d,
					editMember: l,
					addPolicy: g
				},
				h = {
					allow: "allow",
					deny: "deny"
				},
				S = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				f = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				C = {
					accountId: "",
					effect: h.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/utils.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return h
				},
				Co: function() {
					return T
				},
				JP: function() {
					return A
				},
				Ld: function() {
					return i
				},
				YW: function() {
					return u
				},
				_k: function() {
					return p
				},
				c$: function() {
					return E
				},
				rC: function() {
					return w
				},
				vq: function() {
					return C
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				o = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				a = t("../react/pages/home/members/constants.ts");

			function d(O) {
				for (var N = 1; N < arguments.length; N++) {
					var P = arguments[N] != null ? Object(arguments[N]) : {},
						I = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(P).filter(function(L) {
						return Object.getOwnPropertyDescriptor(P, L).enumerable
					})), I.forEach(function(L) {
						l(O, L, P[L])
					})
				}
				return O
			}

			function l(O, N, P) {
				return N = g(N), N in O ? Object.defineProperty(O, N, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[N] = P, O
			}

			function g(O) {
				var N = s(O, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function s(O, N) {
				if (typeof O != "object" || O === null) return O;
				var P = O[Symbol.toPrimitive];
				if (P !== void 0) {
					var I = P.call(O, N || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(O)
			}
			const u = () => d({}, a.Ti),
				E = () => d({}, a.Lc, {
					scopes: [u()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = O => O.map(N => ({
					scope: {
						key: N,
						objects: [{
							key: "*"
						}]
					}
				})),
				r = (O, N, P) => {
					var I;
					let L = [],
						B = [];
					const U = [],
						H = [];
					O.scopes.forEach(ae => {
						if (ae.mode === a.Sw.all) P ? L.push({
							id: P
						}) : L.push({
							scope: {
								key: `com.cloudflare.api.account.${N}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (ae.mode === a.Sw.domain_group) {
							const Q = {
								id: ae.resourceGroupId
							};
							ae.effect === a.Sz.allow ? L.push(Q) : B.push(Q)
						} else if (ae.mode === a.Sw.zone) {
							const Q = `${a.Rl}${ae.zoneId}`;
							ae.effect === a.Sz.allow ? U.push(Q) : H.push(Q)
						} else if (ae.mode === a.Sw.granular && ae.granularResourceId) {
							var me, Z;
							const Q = ae.granularProduct,
								b = `${(me=o.s_.find(ue=>ue.value==Q))===null||me===void 0?void 0:me.scopeKeyPrefix}.${ae.granularResourceId}`,
								ee = `${(Z=o.s_.find(ue=>ue.value===Q))===null||Z===void 0?void 0:Z.scopeSubsetOfPrefix}.${N}`;
							L.push({
								scope: {
									key: `${b}`,
									subset_of: [{
										key: `${ee}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), U.length && (L = L.concat(n(U))), H.length && (B = B.concat(n(H)));
					const le = (I = O.permission_groups) === null || I === void 0 ? void 0 : I.map(ae => ({
							id: ae
						})),
						Ee = [];
					return Ee.push({
						access: a.Sz.allow,
						permission_groups: le,
						resource_groups: L
					}), B.length && Ee.push({
						access: a.Sz.deny,
						permission_groups: le,
						resource_groups: B
					}), Ee
				},
				i = O => O.map(N => {
					var P;
					return {
						access: N.access,
						permission_groups: N.permission_groups.map(I => ({
							id: I.id
						})),
						resource_groups: (P = N.resource_groups) === null || P === void 0 ? void 0 : P.map(I => ({
							scope: {
								key: I.scope.key,
								objects: I.scope.objects
							},
							id: I.id
						}))
					}
				}),
				p = (O, N, P, I) => {
					const L = O.auto_accept;
					let B = [];
					return B = B.concat(r(O, N, P)), I && (B = B.concat(i(I))), {
						auto_accept: L,
						status: L ? "accepted" : "pending",
						policies: B
					}
				},
				c = O => {
					const N = O.split(".");
					return N[N.length - 1]
				},
				m = O => {
					var N, P;
					const I = O == null ? void 0 : O.access;
					let L = [],
						B = O == null || (N = O.resource_groups) === null || N === void 0 ? void 0 : N.map(U => {
							var H;
							const le = _(U);
							if ((U == null || (H = U.meta) === null || H === void 0 ? void 0 : H.editable) === "false") return {
								effect: I,
								mode: a.Sw.all,
								accountId: c(U.id)
							};
							if (le) {
								var Ee;
								const ae = U == null || (Ee = U.scope) === null || Ee === void 0 ? void 0 : Ee.key.split(".").pop();
								return {
									effect: I,
									mode: a.Sw.granular,
									granularProduct: le.value,
									granularResourceId: ae
								}
							} else if (!U.name) U.scope.key.startsWith(a.Rl) ? L.push({
								key: U.scope.key
							}) : L = L.concat(U.scope.objects);
							else return {
								effect: I,
								mode: a.Sw.domain_group,
								resourceGroupId: c(U.id)
							}
						}).filter(U => U);
					if ((P = L) === null || P === void 0 ? void 0 : P.length) {
						let U = L.map(H => {
							const le = c(H.key);
							return {
								effect: I,
								mode: a.Sw.zone,
								zoneId: le
							}
						});
						B = B.length ? U.concat(B) : U
					}
					return B
				},
				_ = O => {
					var N, P, I, L;
					const B = O == null || (N = O.scope) === null || N === void 0 ? void 0 : N.key.split(".").slice(0, -1).join("."),
						U = O == null || (P = O.scope) === null || P === void 0 || (I = P.subset_of) === null || I === void 0 || (L = I[0]) === null || L === void 0 ? void 0 : L.key.split(".").slice(0, -1).join(".");
					return o.s_.find(H => H.scopeKeyPrefix === B && H.scopeSubsetOfPrefix === U)
				},
				T = O => {
					if (!(O == null ? void 0 : O.length)) return [];
					const N = [];
					return O.forEach(P => {
						var I;
						(I = P.resource_groups) === null || I === void 0 || I.forEach(L => {
							var B, U;
							((B = L.scope) === null || B === void 0 || (U = B.key) === null || U === void 0 ? void 0 : U.startsWith(a.Rl)) && N.push(c(L.scope.key))
						})
					}), N
				},
				A = O => {
					if (!(O == null ? void 0 : O.length)) return [];
					const N = [];
					return O.forEach(P => {
						var I;
						(I = P.resource_groups) === null || I === void 0 || I.forEach(L => {
							var B, U;
							if (!((B = L.scope) === null || B === void 0 || (U = B.key) === null || U === void 0 ? void 0 : U.startsWith(a.Rl))) {
								var H;
								const Ee = (H = L.scope) === null || H === void 0 ? void 0 : H.objects;
								for (let ae = 0; ae < (Ee == null ? void 0 : Ee.length) && ae < a.r6; ae++) {
									var le;
									((le = Ee[ae].key) === null || le === void 0 ? void 0 : le.startsWith(a.Rl)) && N.push(c(Ee[ae].key))
								}
							}
						})
					}), N
				},
				h = O => {
					var N;
					if (!(O == null ? void 0 : O.length)) return null;
					const P = (N = O[0]) === null || N === void 0 ? void 0 : N.permission_groups.map(U => U.id);
					let I, L;
					O == null || O.forEach(U => {
						U.access === a.Sz.allow && (I = U), U.access === a.Sz.deny && (L = U)
					});
					let B = [];
					return I && (B = m(I)), L && (B = B.concat(m(L))), {
						permission_groups: P,
						scopes: B
					}
				},
				S = "permission-groups-",
				f = new Map,
				C = O => {
					if (!O) return [];
					const N = f.get(O);
					if (N) return N;
					const P = e.E.get(`${S}${O}`);
					return f.set(O, P), P
				},
				w = (O, N) => {
					const P = [];
					for (let I = 0; I < sessionStorage.length; I++) {
						const L = sessionStorage.key(I);
						(L == null ? void 0 : L.startsWith(S)) && P.push(L)
					}
					return P.length >= 5 && e.E.remove(P[0]), e.E.set(`${S}${O}`, N)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				g: function() {
					return o
				}
			});
			var e = t("../../../common/util/types/src/api/phases/fields.tsx");
			const o = {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				KO: function() {
					return s
				},
				L9: function() {
					return n
				},
				N3: function() {
					return E
				},
				zE: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(r) {
				for (var i = 1; i < arguments.length; i++) {
					var p = arguments[i] != null ? Object(arguments[i]) : {},
						c = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(p).filter(function(m) {
						return Object.getOwnPropertyDescriptor(p, m).enumerable
					})), c.forEach(function(m) {
						d(r, m, p[m])
					})
				}
				return r
			}

			function d(r, i, p) {
				return i = l(i), i in r ? Object.defineProperty(r, i, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = p, r
			}

			function l(r) {
				var i = g(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function g(r, i) {
				if (typeof r != "object" || r === null) return r;
				var p = r[Symbol.toPrimitive];
				if (p !== void 0) {
					var c = p.call(r, i || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}
			let s = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.SEARCH_CONFIGS = "search hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r.CLICK_DISCORD = "click hyperdrive discord", r.CLICK_COMMUNITY = "click hyperdrive community", r
				}({}),
				u = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				E = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const n = (r, i = {}) => {
				o().sendEvent(r, a({}, i, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/selectors.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return d
				},
				GH: function() {
					return c
				},
				JZ: function() {
					return _
				},
				aR: function() {
					return i
				},
				db: function() {
					return g
				},
				ib: function() {
					return T
				},
				lW: function() {
					return f
				},
				mo: function() {
					return S
				},
				pT: function() {
					return p
				},
				po: function() {
					return m
				},
				wj: function() {
					return h
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const d = "sourcing_kit_enabled",
				l = "sourcing_kit_waitlist",
				g = "images",
				s = "unified_images_enabled",
				u = "transformations_allowed_origins_enabled",
				E = "c2pa",
				n = "c2pa_polish",
				r = "CloudflareImages",
				i = C => !!(0, o.BF)(C, "images.transformations_enabled"),
				p = C => Boolean((0, o.BF)(C, "images.enabled")),
				c = C => {
					const w = (0, o.BF)(C, "images.storage");
					return typeof w == "number" && w > 0
				},
				m = C => Boolean((0, o.BF)(C, "contract.customer_enabled")),
				_ = C => Boolean((0, e.oI)(C, g, d)),
				T = C => Boolean((0, a.Le)(C, r, d)),
				A = C => Boolean(getAccountFlipperFlag(C, r, s)),
				h = C => Boolean((0, a.Le)(C, r, u)),
				S = C => Boolean((0, a.Le)(C, r, E)),
				f = C => Boolean((0, a.Le)(C, r, n))
		},
		"../react/pages/magic/constants.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				GF: function() {
					return p
				},
				H3: function() {
					return s
				},
				H8: function() {
					return l
				},
				J: function() {
					return m
				},
				Nz: function() {
					return u
				},
				UQ: function() {
					return T
				},
				Up: function() {
					return d
				},
				W8: function() {
					return E
				},
				Ws: function() {
					return A
				},
				Xg: function() {
					return r
				},
				Y_: function() {
					return i
				},
				_j: function() {
					return a
				},
				a4: function() {
					return c
				},
				jS: function() {
					return _
				},
				rF: function() {
					return g
				},
				rG: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/utils/translator.tsx");
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
					tunnelHealthCheckTunnels: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels`,
					tunnelHealthCheckTunnelsList: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/list`,
					tunnelHealthCheckTunnelsHighlight: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight`,
					tunnelHealthCheckTunnelsHighlightDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight/${"tunnelId"}`,
					tunnelHealthCheckTunnelsDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/${"tunnelId"}`,
					asn: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/asn`,
					quickSearchAsn: (0, e.BC)`/configuration/asn`
				},
				d = () => [{
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
				l = h => [{
					value: "low",
					label: h("setting.low")
				}, {
					value: "mid",
					label: h("setting.medium")
				}, {
					value: "high",
					label: h("setting.high")
				}],
				g = h => [{
					value: "request",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				s = h => [{
					value: "unidirectional",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				u = "magic-transit",
				E = "magic-wan",
				n = "gre_tunnel",
				r = "ipsec_tunnel",
				i = "interconnect",
				p = 64,
				c = 1476,
				m = "mid",
				_ = "reply",
				T = h => [{
					value: void 0,
					label: h("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: h("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: h("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				A = h => [{
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
		"../react/pages/magic/network-monitoring/constants.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				_u: function() {
					return o
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
				o = "Magic network monitoring",
				a = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				VZ: function() {
					return d
				},
				lC: function() {
					return a
				},
				r8: function() {
					return o
				},
				uB: function() {
					return l
				}
			});
			var e = t("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				a = "user journey",
				d = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				l = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				W_: function() {
					return o
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
				o = "Magic packet captures",
				a = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				gb: function() {
					return n
				},
				iP: function() {
					return O
				},
				xL: function() {
					return A
				},
				rD: function() {
					return P
				},
				oT: function() {
					return c
				},
				i2: function() {
					return I
				},
				x1: function() {
					return g
				},
				lW: function() {
					return u
				},
				UA: function() {
					return C
				},
				K5: function() {
					return i
				},
				Ii: function() {
					return S
				},
				PJ: function() {
					return N
				},
				bK: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				l = t("../node_modules/@cloudflare/elements/es/index.js");
			const g = () => o().createElement(s, null, o().createElement("svg", {
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
				s = (0, a.createComponent)(({
					theme: L
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
				u = () => o().createElement(E, null, o().createElement("svg", {
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
				E = (0, a.createComponent)(({
					theme: L
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
				n = () => o().createElement(r, null, o().createElement(l.Ei, {
					alt: "airplane",
					src: d,
					width: "85%"
				})),
				r = (0, a.createComponent)(({
					theme: L
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
				i = () => o().createElement(p, null, o().createElement("svg", {
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
				p = (0, a.createComponent)(({
					theme: L
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
				c = () => o().createElement(m, null, o().createElement("svg", {
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
				m = (0, a.createComponent)(({
					theme: L
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
				_ = () => o().createElement(T, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				T = (0, a.createComponent)(({
					theme: L
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
				A = () => o().createElement(h, null, o().createElement("svg", {
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
				h = (0, a.createComponent)(({
					theme: L
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
				S = () => o().createElement(f, null, o().createElement("svg", {
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
				f = (0, a.createComponent)(({
					theme: L
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
				C = () => o().createElement(w, null, o().createElement("svg", {
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
				w = (0, a.createComponent)(({
					theme: L
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
				O = () => o().createElement("svg", {
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
				N = () => o().createElement("svg", {
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
				P = () => o().createElement("svg", {
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
				I = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				A2: function() {
					return s
				},
				He: function() {
					return l
				},
				N$: function() {
					return g
				},
				Qq: function() {
					return a
				},
				ST: function() {
					return d
				},
				wM: function() {
					return o
				}
			});
			var e = t("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				a = "login-apple-jwt",
				d = "cf-test",
				l = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				g = u => [{
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
				s = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return a
				},
				c: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let a = function(l) {
				return l.TEMPLATE_SELECTED = "template selected", l.TEMPLATE_PRODUCT_SELECTED = "template product selected", l.TEMPLATE_SAVE_DRAFT = "template save draft", l.TEMPLATE_CANCEL = "template cancel", l.TEMPLATE_DEPLOY = "template deploy", l
			}({});
			const d = (l, g) => o().sendEvent(l, {
				template_name: g
			})
		},
		"../react/pages/pages/constants.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				A: function() {
					return _
				},
				C1: function() {
					return E
				},
				Dp: function() {
					return L
				},
				GF: function() {
					return P
				},
				HD: function() {
					return h
				},
				IK: function() {
					return l
				},
				L7: function() {
					return a
				},
				Li: function() {
					return m
				},
				Ni: function() {
					return w
				},
				OG: function() {
					return Ee
				},
				QF: function() {
					return H
				},
				QV: function() {
					return C
				},
				Sx: function() {
					return S
				},
				Ub: function() {
					return U
				},
				X3: function() {
					return r
				},
				aP: function() {
					return s
				},
				eO: function() {
					return i
				},
				fH: function() {
					return c
				},
				fQ: function() {
					return T
				},
				fR: function() {
					return e
				},
				hE: function() {
					return B
				},
				iS: function() {
					return A
				},
				ku: function() {
					return I
				},
				nY: function() {
					return f
				},
				w3: function() {
					return d
				},
				wJ: function() {
					return u
				},
				wp: function() {
					return p
				},
				yu: function() {
					return n
				},
				zF: function() {
					return N
				},
				zG: function() {
					return O
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-workers-and-pages",
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
				d = "Allow Members - Cloudflare Pages",
				l = 58,
				g = {
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
				s = "production",
				u = 2e3,
				E = 100,
				n = 350,
				r = 1e7,
				i = ["Success:", "Error:", "Failed:"],
				p = 10,
				c = "_headers",
				m = "_redirects",
				_ = "_routes.json",
				T = "_worker.js",
				A = "do-a-barrel-roll",
				h = [c, m, _, T],
				S = 1024 * 1024 * 25,
				f = 1e3,
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
				w = 1e5,
				O = 75e3,
				N = 2e5,
				P = 15e4,
				I = "workers",
				L = "cloudflare_pages_build_caching",
				B = 2;
			let U = function(ae) {
				return ae[ae.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", ae[ae.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", ae[ae.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", ae[ae.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", ae[ae.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", ae[ae.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", ae
			}({});
			const H = 1,
				le = 2,
				Ee = 2
		},
		"../react/pages/pages/routes.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return a
				},
				_j: function() {
					return o
				},
				zE: function() {
					return l
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
				d = g => `${g.subdomain}.pages.dev`,
				l = {
					installation: {
						github: {
							user: (0, e.BC)`https://github.com/settings/installations/${"installation_id"}`,
							organization: (0, e.BC)`https://github.com/organizations/${"organization_name"}/settings/installations/${"installation_id"}`
						},
						gitlab: (0, e.BC)`https://gitlab.com/${"username"}/${"repo"}/-/hooks/`
					}
				}
		},
		"../react/pages/pipelines/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				KO: function() {
					return s
				},
				L9: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						p = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(i).filter(function(c) {
						return Object.getOwnPropertyDescriptor(i, c).enumerable
					})), p.forEach(function(c) {
						d(n, c, i[c])
					})
				}
				return n
			}

			function d(n, r, i) {
				return r = l(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function l(n) {
				var r = g(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var p = i.call(n, r || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let s = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				u = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const E = (n, r = {}) => {
				o().sendEvent(n, a({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return a
				},
				Jg: function() {
					return g
				},
				_j: function() {
					return o
				},
				vF: function() {
					return l
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
				a = {
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
					bucketLockRules: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/lock`,
					bucketLifecycle: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/lifecycle`,
					bucketMultipartUploads: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/uploads`,
					bucketSippy: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/sippy`,
					apiTokens: (0, e.BC)`/user/tokens`,
					apiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					rollApiToken: (0, e.BC)`/user/tokens/${"tokenId"}/value`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					zones: (0, e.BC)`/zones`
				},
				d = s => {
					const u = "r2.cloudflarestorage.com";
					switch (s) {
						case "default":
							return u;
						case "eu":
							return `eu.${u}`;
						case "fedramp":
							return `fedramp.${u}`
					}
				},
				l = (s, u) => {
					const E = d(u);
					return `https://${s}.${E}`
				},
				g = (s, u, E) => `${l(s,u)}/${E}`
		},
		"../react/pages/r2/selectors.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Mv: function() {
					return n
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const d = "r2_migrator_waitlist",
				l = "r2migrator",
				g = "r2",
				s = "r2_storage_migrator",
				u = "r2_storage_migrator",
				E = i => getAccountEntitlement(i, "r2.enabled"),
				n = i => Boolean((0, a.Le)(i, s, d)),
				r = i => Boolean(getAccountFlipperFlagsChanges(i, u, l))
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Gk: function() {
					return i
				},
				LA: function() {
					return E
				},
				Wk: function() {
					return r
				},
				_V: function() {
					return s
				},
				c5: function() {
					return n
				},
				om: function() {
					return u
				}
			});
			var e = t("../react/pages/security-center/BlockedContent/types.ts"),
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(p) {
				for (var c = 1; c < arguments.length; c++) {
					var m = arguments[c] != null ? Object(arguments[c]) : {},
						_ = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(m).filter(function(T) {
						return Object.getOwnPropertyDescriptor(m, T).enumerable
					})), _.forEach(function(T) {
						d(p, T, m[T])
					})
				}
				return p
			}

			function d(p, c, m) {
				return c = l(c), c in p ? Object.defineProperty(p, c, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[c] = m, p
			}

			function l(p) {
				var c = g(p, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function g(p, c) {
				if (typeof p != "object" || p === null) return p;
				var m = p[Symbol.toPrimitive];
				if (m !== void 0) {
					var _ = m.call(p, c || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(p)
			}
			const s = "blocked-content-table-tooltip",
				u = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					canceled: "gray"
				},
				E = ["phishing_interstitial", "malware_interstitial", "legal_block"],
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
					filters: Object.values(e.GH).reduce((p, c) => a({}, p, {
						[c]: c
					}), {})
				};
			let i = function(p) {
				return p.COPY_URL = "copy blocked content url", p.REQUEST_REVIEW = "request blocked content review", p.ADD_FILTER = "Add filter", p.REMOVE_FILTER = "Remove filter", p
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return e
				},
				GH: function() {
					return a
				},
				M3: function() {
					return o
				},
				fL: function() {
					return d
				}
			});
			let e = function(g) {
					return g.Pending = "pending", g.Active = "active", g
				}({}),
				o = function(g) {
					return g.Active = "active", g.InReview = "in_review", g.Pending = "pending", g.Canceled = "canceled", g
				}({}),
				a = function(g) {
					return g.Domain = "domain", g.Status = "status", g.BlockType = "blockType", g
				}({}),
				d = function(g) {
					return g.EnforcementDate = "enforcementDate", g.BlockType = "blockType", g.Hostname = "hostname", g.Status = "status", g
				}({}),
				l = function(g) {
					return g.Removed = "removed", g.Misclassified = "misclassified", g
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Ev: function() {
					return a
				},
				RY: function() {
					return e
				},
				v9: function() {
					return o
				}
			});
			let e = function(d) {
				return d.LOAD_SCAN_INFO = "load url scan information", d.INITIATE_URL_SCAN = "initiate url scan", d
			}({});
			const o = {
				MANAGE_INSIGHT: "manage security insight",
				BULK_ARCHIVE: "bulk archive security insights",
				EXPAND_INSIGHT_ROW: "expand security issue row",
				ONE_CLICK_RESOLVE_BUTTON: "one click resolve security issue button",
				FOLLOW_RESOLVE_URL: "follow security issue resolve url",
				CLICK_SCAN_NOW: "run security scan",
				CLICK_EXPORT_INSIGHTS: "click export insights",
				CLICK_DETAILS_BUTTON: "click insights row details button"
			};
			let a = function(d) {
				return d.LOAD_THREAT_EVENTS = "load threat events", d.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", d.THREAT_EVENTS_FILTERS = "threat events filters applied", d
			}({})
		},
		"../react/pages/security/analytics/resources/labels.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				AU: function() {
					return a
				},
				Bc: function() {
					return o
				},
				Bt: function() {
					return e
				},
				e_: function() {
					return d
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
				o = {
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
				d = {
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
		"../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				AS: function() {
					return g
				},
				IK: function() {
					return r
				},
				Ki: function() {
					return a
				},
				Lz: function() {
					return i
				},
				nT: function() {
					return u
				},
				o4: function() {
					return p
				},
				oY: function() {
					return d
				},
				qH: function() {
					return n
				},
				x3: function() {
					return s
				}
			});
			var e = t("../react/pages/security/analytics/resources/labels.ts"),
				o = t("../react/common/constants/analytics/botScoreSrc.ts");
			const a = ["block", "challenge", "jschallenge", "managedChallenge"],
				d = ["miss", "expired", "bypass", "dynamic"],
				l = c => Object.fromEntries(Object.entries(c).map(([m, _]) => [_, m])),
				g = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				s = l(g),
				u = {
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
				E = l(u),
				n = l(o.EG);
			let r = function(c) {
				return c.SAMPLED = "sampled", c.RAW = "raw", c
			}({});
			const i = "security-analytics-log-explorer";
			let p = function(c) {
				return c.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', c.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', c.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', c.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', c.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', c
			}({})
		},
		"../react/pages/security/api-shield/constants.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				AB: function() {
					return n
				},
				API_SHIELD_TOAST: function() {
					return T
				},
				CR: function() {
					return _
				},
				Cg: function() {
					return u
				},
				L8: function() {
					return i
				},
				Ps: function() {
					return s
				},
				_i: function() {
					return E
				},
				ac: function() {
					return a
				},
				k1: function() {
					return l
				},
				k2: function() {
					return m
				},
				mU: function() {
					return c
				},
				sM: function() {
					return d
				},
				tA: function() {
					return o
				},
				uv: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = ["log", "block"],
				a = [...o, "disable"],
				d = 10,
				l = "header",
				g = {
					root: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield`,
					addEndpoints: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/add-endpoints`,
					addFromDiscovery: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/add-endpoints/discovery`,
					addSchemaEndpointMgmt: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/add-endpoints/upload`,
					discovery: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/discovery`,
					editSessionIdentifiers: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/discovery/session-identifiers`,
					endpointManagement: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield`,
					operationDetails: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/operation`,
					settings: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/settings`,
					sequences: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/sequences`,
					schemaValidation: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/schema-validation`,
					developerPortal: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/developer-portal`,
					apiRules: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/api-rules`,
					updateJWTRules: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/jwt-rules`,
					updateJWTConfiguration: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/jwt-configuration`,
					sequenceRules: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/sequence-rules`,
					routingRule: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/routing`,
					upgrade: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/upgrade`
				},
				s = "sess_ids_last_updated",
				u = "all";
			let E = function(A) {
				return A.DISCOVERY_FILTER = "discovery-filter-state", A.ADD_JWT_RULES_FILTER = "add-jwt-rules-state", A.ENDPOINT_MANAGEMENT_FILTER = "endpoint-management-filter-cache-key", A
			}({});
			const n = 63,
				r = 0,
				i = 10,
				p = {
					id: "method",
					desc: !0
				};
			let c = function(A) {
				return A.JWT_CONFIGURATIONS = "API_SHIELD_JWT_CONFIGURATIONS", A
			}({});
			const m = {
					METHOD: "method.listbox_filter",
					HOSTNAME: "hostname.listbox_filter",
					LABELS: "labels.listbox_filter"
				},
				_ = "api-shield-schema-validation-for-all-customers";
			let T = function(A) {
				return A.UPLOAD_SCHEMA = "schemaName", A.ADDED_ENDPOINT = "addedEndpoint", A.DEPLOYED_ROUTE = "deployedRoute", A.DELETED_ROUTE = "deletedRoute", A.UPDATED_LABELS_SINGLE_ENDPOINT = "updateLabelsSingle", A.UPDATED_LABELS_MULTI_ENDPOINT = "updateLabelsMulti", A
			}({})
		},
		"../react/pages/security/api-shield/entitlements.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				$0: function() {
					return r
				},
				CR: function() {
					return n
				},
				DM: function() {
					return Ee
				},
				DN: function() {
					return L
				},
				Dc: function() {
					return ae
				},
				Dg: function() {
					return H
				},
				FV: function() {
					return B
				},
				LG: function() {
					return h
				},
				Mz: function() {
					return U
				},
				OL: function() {
					return s
				},
				St: function() {
					return T
				},
				UG: function() {
					return i
				},
				Wy: function() {
					return p
				},
				iU: function() {
					return O
				},
				jI: function() {
					return l
				},
				qK: function() {
					return I
				},
				qN: function() {
					return E
				},
				r6: function() {
					return me
				},
				sK: function() {
					return m
				},
				t1: function() {
					return f
				},
				yk: function() {
					return u
				},
				yo: function() {
					return le
				},
				zo: function() {
					return C
				},
				zt: function() {
					return g
				}
			});
			var e = t("../react/pages/security/api-shield/types.ts"),
				o = t("../react/common/hooks/useZoneEntitlement.ts"),
				a = t("../react/common/hooks/useAccountEntitlement.ts"),
				d = t("../react/pages/security/api-shield/settings/constants.tsx");
			const l = {
					[e.H.CONFIGURATION]: {
						maxApiShields: "rulesets.max_api_shields",
						centralEndpointsListAllowed: "central_endpoint_list.allowed",
						maxRulesetSize: "central_endpoint_list.api_gateway_phases_max_ruleset_size",
						apiRouting: "api_routing.allowed",
						endpointMatchingAllowed: "endpoint_matching.allowed"
					},
					[e.H.DISCOVERY]: {
						discoveryAllowed: "api_discovery.allowed",
						discoveryThresholdsAllowed: "endpoint_abuse_detection.volumetric_allowed"
					},
					[e.H.JWT]: {
						tokenValidationAllowed: "token_validation.allowed",
						maxTokenValidationRules: "token_validation.max_rules_per_zone",
						maxTokenValidationConfigs: "token_validation.max_configs_per_zone"
					},
					[e.H.OPERATIONS]: {
						maxOperationsAllowed: "central_endpoint_list.max_endpoints_per_zone"
					},
					[e.H.SCHEMA_VALIDATION]: {
						schemaValidationAllowed: "central_endpoint_list.schema_validation_allowed",
						maxValidatedSchemasAllowed: "central_endpoint_list.max_validated_schemas_per_zone",
						maxSchemaBytes: "central_endpoint_list.max_translated_schema_bytes_per_zone"
					},
					[e.H.USER_SCHEMAS]: {
						maxUserSchemasAllowed: "central_endpoint_list.max_schemas_per_zone",
						maxSchemaBytesAllowed: "central_endpoint_list.max_translated_schema_bytes_per_zone"
					},
					[e.H.LEARNED_SCHEMAS]: {
						maxLearnedSchemasAllowed: "central_endpoint_list.max_learned_schemas_per_zone"
					},
					[e.H.SEQUENCE]: {
						sequenceAllowed: "endpoint_abuse_detection.sequential_allowed"
					},
					[e.H.SEQUENCE_RULES]: {
						maxSequenceRules: "endpoint_abuse_detection.sequential_max_rules"
					}
				},
				g = {
					dlpAllowed: "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed",
					logAllowed: "rulesets.log_action_allowed",
					regexOperatorAllowed: "rulesets.regex_operator_allowed",
					sequencesAllowed: "rulesets.sequences_allowed",
					contractEnabled: "contract.customer_enabled"
				},
				s = l[e.H.DISCOVERY],
				u = () => !!(0, o.Z)(s.discoveryAllowed),
				E = () => !!(0, o.Z)(s.discoveryThresholdsAllowed),
				n = l[e.H.JWT],
				r = () => !!(0, o.Z)(n.tokenValidationAllowed),
				i = () => (0, o.Z)(n.maxTokenValidationRules),
				p = () => (0, o.Z)(n.maxTokenValidationConfigs),
				c = l[e.H.SEQUENCE],
				m = () => !!(0, o.Z)(c.sequenceAllowed),
				_ = l[e.H.SEQUENCE_RULES],
				T = () => (0, o.Z)(_.maxSequenceRules),
				A = l[e.H.OPERATIONS],
				h = () => (0, o.Z)(A.maxOperationsAllowed),
				S = l[e.H.USER_SCHEMAS],
				f = () => {
					const Z = (0, o.Z)(S.maxUserSchemasAllowed);
					return typeof Z == "number" ? Z : d.Hs
				},
				C = () => {
					const Z = (0, o.Z)(S.maxSchemaBytesAllowed);
					return typeof Z == "number" ? Z : d.x5
				},
				w = l[e.H.LEARNED_SCHEMAS],
				O = () => (0, o.Z)(w.maxLearnedSchemasAllowed),
				N = l[e.H.SCHEMA_VALIDATION],
				P = () => useZoneEntitlement(N.schemaValidationAllowed),
				I = () => (0, o.Z)(N.maxSchemaBytes),
				L = l[e.H.CONFIGURATION],
				B = () => (0, o.Z)(L.maxApiShields),
				U = () => (0, o.Z)(L.apiRouting),
				H = () => (0, o.Z)(L.centralEndpointsListAllowed),
				le = () => !!(0, o.Z)(g.logAllowed),
				Ee = () => !!(0, o.Z)(g.regexOperatorAllowed),
				ae = () => !!(0, o.Z)(g.dlpAllowed),
				me = () => !!(0, a.Z)(g.sequencesAllowed)
		},
		"../react/pages/security/api-shield/settings/constants.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				Cl: function() {
					return n
				},
				Hs: function() {
					return u
				},
				PD: function() {
					return p
				},
				Sk: function() {
					return c
				},
				TD: function() {
					return E
				},
				Ye: function() {
					return g
				},
				ZR: function() {
					return i
				},
				a2: function() {
					return r
				},
				x5: function() {
					return s
				},
				y$: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/utils/translator.tsx"),
				d = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let l = function(_) {
				return _.JWT_SECTION = "JWT_SECTION", _.ENDPOINT_SETTINGS = "ENDPOINT_SETTINGS", _.SCHEMA_SETTINGS = "SCHEMA_SETTINGS", _
			}({});
			const g = {
					page: 1,
					perPage: 5,
					totalCount: 0
				},
				s = 2e5,
				u = 5,
				E = {
					name: "created_at",
					direction: d.Sr.desc
				},
				n = {
					title: o().createElement(a.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.userSchemas.empty.title"
					}),
					description: o().createElement(a.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.userSchemas.empty.description"
					})
				},
				r = {
					title: o().createElement(a.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.learnedSchemas.empty.title"
					}),
					description: o().createElement(a.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.learnedSchemas.empty.description"
					})
				},
				i = {
					title: o().createElement(a.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.sessionIdentifiers.empty.title"
					}),
					description: o().createElement(a.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.sessionIdentifiers.empty.description"
					})
				},
				p = {
					MENUBOX_WRAPPER: "menuBox.wrapper",
					JWT_INFOBOX: "settings.infobox.jwt",
					ENDPOINT_INFOBOX: "settings.infobox.endpoint",
					SCHEMA_VALIDATION_INFOBOX: "settings.infobox.schemaValidation",
					FALLTHROUGH_INFOBOX: "settings.infobox.fallthrough",
					MTLS_RULES_CARD_TITLE: "mtls.rulesCard.title",
					MTLS_RULES_CARD_DOC_LINK: "mtls.rulesCard.docLink",
					JWT_CONFIGURATION_TABLE_WRAPPER: "jwt.configuration.tableWrapper",
					JWT_CONFIGURATION_TABLE_ERROR: "jwt.configuration.table.error",
					JWT_CONFIGURATION_ITEM: "jwt.configuration.item",
					SESSION_IDENTIFIERS_LOADING: "sessionsIdentifiers.state.loading",
					SESSION_IDENTIFIERS_TABLE_WRAPPER: "sessionsIdentifiers.table.wrapper",
					SESSION_IDENTIFIERS_ADD_IDENTIFIER_BANNER: "sessionIdentifiers.addIdentifier.banner",
					SESSION_IDENTIFIERS_EDIT_IDENTIFIERS_BUTTON: "sessionIdentifiers.editIdentifiers.button",
					SCHEMA_VALIDATION_NEW_TABLE_FILE_SIZE_CELL: "schemaValidation.newTable.fileSize.cell",
					SCHEMA_VALIDATION_NEW_TABLE_HOSTNAME_CELL: "schemaValidation.newTable.hostname.cell",
					SCHEMA_VALIDATION_NEW_TABLE_FILTER_BUTTON: "schemaValidation.newTable.filter.button"
				},
				c = {
					FALLTHROUGH_SECTION_HEADING: "fallthroughSection.heading",
					FALLTHROUGH_SECTION_DESCRIPTION: "fallthroughSection.description",
					FALLTHROUGH_SECTION_USE_TEMPLATE_BUTTON: "fallthroughSection.button",
					FALLTHROUGH_SECTION_HOSTNAME_NAME: "fallthroughSection.hostname.div",
					FALLTHROUGH_SECTION_SCHEMA_NAME: "fallthroughSection.schema.div",
					FALLTHROUGH_DELETE_HOSTNAME_BUTTON: "fallthroughSection.delete_hostname.button",
					TEMPLATE_MODAL_TITLE: "fallthroughSection.template_modal.title",
					TEMPLATE_MODAL_DESCRIPTION: "fallthroughSection.template_modal.description",
					TEMPLATE_MODAL_LOADING: "fallthroughSection.template_modal.loading",
					TEMPLATE_MODAL_SELECT: "fallthroughSection.template_modal.select",
					TEMPLATE_MODAL_TITLE_LIST: "fallthroughSection.template_modal.title.list",
					TEMPLATE_MODAL_CANCEL_BUTTON: "fallthroughSection.template_modal.button.cancel",
					TEMPLATE_MODAL_REDIRECT_BUTTON: "fallthroughSection.template_modal.button.redirect"
				},
				m = {
					DEVELOPER_PORTAL: "Mocked DeveloperPortalSection",
					JWT_CONFIGURATION: "Mocked JWTConfigurationSection",
					MTLS: "Mocked MTLSSection",
					SESSION_IDENTIFIERS: "Mocked SessionIdentifiersSection",
					SESSION_IDENTIFIERS_TABLE: "Mocked Session Identifiers Table",
					MENUBOX: "Mocked MenuBox",
					SCHEMA_VALIDATION: "Mocked SV2SettingsSection",
					SCHEMAS_TABLE_NEW: "Mocked New Schemas Table",
					RULESET_ENTRYPOINT_TABLE: "Mocked RulesetEntrypointTable",
					TEMPLATE_MODAL: "Mocked TemplateModal",
					FALLTHROUGH_RULES: "Mocked Fallthrough Rules"
				}
		},
		"../react/pages/security/api-shield/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Fj: function() {
					return u
				},
				kq: function() {
					return s
				},
				xr: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						p = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(i).filter(function(c) {
						return Object.getOwnPropertyDescriptor(i, c).enumerable
					})), p.forEach(function(c) {
						d(n, c, i[c])
					})
				}
				return n
			}

			function d(n, r, i) {
				return r = l(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function l(n) {
				var r = g(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var p = i.call(n, r || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const u = {
					[s.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[s.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[s.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[s.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[s.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[s.JWT_VALIDATION]: {
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
					[s.SETTINGS]: {
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
				E = ({
					name: n,
					category: r = "user journey",
					product: i = s.MAIN,
					productName: p,
					additionalData: c
				}) => {
					o().sendEvent(n, a({
						category: r,
						product: i,
						productName: p
					}, c || {}))
				}
		},
		"../react/pages/security/api-shield/types.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				H: function() {
					return o
				}
			});
			let e = function(a) {
					return a.LIST_OF_JUST_ADDED_IDENTIFIERS = "LIST_OF_JUST_ADDED_IDENTIFIERS", a
				}({}),
				o = function(a) {
					return a.OPERATIONS = "operations", a.JWT = "jwt", a.SCHEMA_VALIDATION = "schemaValidation", a.USER_SCHEMAS = "userSchemas", a.LEARNED_SCHEMAS = "learnedSchemas", a.DISCOVERY = "discovery", a.CONFIGURATION = "configuration", a.SEQUENCE = "sequence", a.SEQUENCE_RULES = "sequenceRules", a.FALLTHROUGH_RULES = "fallThroughRules", a
				}({})
		},
		"../react/pages/security/api-shield/utils/useApiShield.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				R: function() {
					return s
				}
			});
			var e = t("../react/pages/security/api-shield/entitlements.tsx"),
				o = t("../react/pages/security/api-shield/constants.ts"),
				a = t("../react/common/hooks/useGate.ts");
			const d = () => !!(0, a.Z)(o.CR);
			var l = t("../react/common/selectors/zoneSelectors.ts"),
				g = t("../react/app/redux/index.ts");
			const s = () => {
				const u = ((0, e.FV)() || 0) > 0,
					E = d(),
					n = (0, e.yk)(),
					r = (0, e.yo)(),
					i = (0, g.p4)(l.nA),
					p = (0, l.Ns)(i),
					c = (0, l._y)(i),
					m = (0, l.z5)(i),
					_ = (0, l.ko)(i);
				return {
					isFreeZone: p,
					isProZone: c,
					isBiz: m,
					isEnterpriseZone: _,
					hasLogAction: r,
					hasApiShields: u,
					hasApiDiscovery: n,
					hasFreeTier: E && !u,
					hasApiShieldsAndApiDiscovery: n && u,
					isEnableFreeTier: E
				}
			}
		},
		"../react/pages/security/bots/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				N3: function() {
					return e
				},
				UN: function() {
					return a
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
			const a = "user journey"
		},
		"../react/pages/security/page-shield/resources/index.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				CP: function() {
					return b
				},
				Ks: function() {
					return Fe
				},
				sV: function() {
					return F
				},
				SI: function() {
					return ye
				},
				v5: function() {
					return w
				},
				xg: function() {
					return q
				},
				YC: function() {
					return K
				},
				MC: function() {
					return O
				},
				Xe: function() {
					return r
				},
				u8: function() {
					return P
				},
				Oq: function() {
					return G
				},
				VT: function() {
					return I
				},
				qc: function() {
					return B
				},
				V0: function() {
					return C
				},
				Lj: function() {
					return Ae
				},
				k2: function() {
					return _
				},
				$g: function() {
					return c
				},
				SJ: function() {
					return U
				},
				KH: function() {
					return Q
				},
				Mq: function() {
					return Z
				},
				FV: function() {
					return W
				},
				j$: function() {
					return H
				},
				I1: function() {
					return n
				},
				Wq: function() {
					return p
				},
				jf: function() {
					return i
				},
				sW: function() {
					return te
				},
				Uq: function() {
					return f
				},
				yd: function() {
					return Ee
				},
				QM: function() {
					return ae
				},
				Uc: function() {
					return me
				},
				R$: function() {
					return m
				},
				pG: function() {
					return Ge
				},
				Ar: function() {
					return ke
				},
				Sk: function() {
					return ue
				},
				gY: function() {
					return Ie
				},
				SE: function() {
					return xe
				},
				m: function() {
					return re
				},
				xP: function() {
					return Y
				},
				CI: function() {
					return R
				},
				p0: function() {
					return pe
				},
				xl: function() {
					return be
				},
				Tb: function() {
					return Ke
				},
				h3: function() {
					return Be
				},
				xq: function() {
					return he
				},
				SQ: function() {
					return gt
				},
				C0: function() {
					return z
				},
				av: function() {
					return V
				},
				W3: function() {
					return We
				},
				WO: function() {
					return Ne
				},
				Dk: function() {
					return at
				},
				we: function() {
					return ze
				},
				Yt: function() {
					return mt
				},
				ex: function() {
					return Qe
				},
				E1: function() {
					return Oe
				},
				e0: function() {
					return pt
				},
				UH: function() {
					return je
				},
				Qt: function() {
					return st
				},
				K$: function() {
					return Ze
				},
				dm: function() {
					return fe
				},
				oK: function() {
					return ot
				},
				qZ: function() {
					return it
				},
				_4: function() {
					return de
				},
				qo: function() {
					return Te
				},
				CB: function() {
					return $e
				},
				ti: function() {
					return Se
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(o),
				d = t("../../../common/component/component-filter-bar/src/index.js"),
				l = t("../react/common/components/analytics/AnalyticsReport/constants.ts");

			function g(k) {
				for (var oe = 1; oe < arguments.length; oe++) {
					var ve = arguments[oe] != null ? Object(arguments[oe]) : {},
						De = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && De.push.apply(De, Object.getOwnPropertySymbols(ve).filter(function(Re) {
						return Object.getOwnPropertyDescriptor(ve, Re).enumerable
					})), De.forEach(function(Re) {
						s(k, Re, ve[Re])
					})
				}
				return k
			}

			function s(k, oe, ve) {
				return oe = u(oe), oe in k ? Object.defineProperty(k, oe, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[oe] = ve, k
			}

			function u(k) {
				var oe = E(k, "string");
				return typeof oe == "symbol" ? oe : String(oe)
			}

			function E(k, oe) {
				if (typeof k != "object" || k === null) return k;
				var ve = k[Symbol.toPrimitive];
				if (ve !== void 0) {
					var De = ve.call(k, oe || "default");
					if (typeof De != "object") return De;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (oe === "string" ? String : Number)(k)
			}
			let n = function(k) {
				return k.BASE_URI = "base-uri", k.CHILD = "child-src", k.CONNECT = "connect-src", k.DEFAULT = "default-src", k.FONT = "font-src", k.FORM_ACTION = "form-action", k.FRAME = "frame-src", k.FRAME_ANCESTORS = "frame-ancestors", k.IMAGE = "img-src", k.MANIFEST = "manifest-src", k.MEDIA = "media-src", k.OBJECT = "object-src", k.SCRIPT = "script-src", k.STYLE = "style-src", k.WORKER = "worker-src", k.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", k
			}({});
			const r = g({}, n, {
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
			let i = function(k) {
					return k.MONITOR = "monitor", k.POLICIES = "policies", k.SETTINGS = "settings", k
				}({}),
				p = function(k) {
					return k.SCRIPT_MONITOR = "script", k.CONNECTION_MONITOR = "connection", k.COOKIE_MONITOR = "cookie", k
				}({}),
				c = function(k) {
					return k.CryptominingScore = "cryptomining_score", k.MalwareScore = "malware_score", k.MagecartScore = "magecart_score", k
				}({}),
				m = function(k) {
					return k.DataflowScore = "dataflow_score", k.ObfuscationScore = "obfuscation_score", k
				}({}),
				_ = function(k) {
					return k.DomainMalicious = "domain_reported_malicious", k.UrlMalicious = "url_reported_malicious", k
				}({});

			function T(k) {
				for (var oe = 1; oe < arguments.length; oe++) {
					var ve = arguments[oe] != null ? Object(arguments[oe]) : {},
						De = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && De.push.apply(De, Object.getOwnPropertySymbols(ve).filter(function(Re) {
						return Object.getOwnPropertyDescriptor(ve, Re).enumerable
					})), De.forEach(function(Re) {
						A(k, Re, ve[Re])
					})
				}
				return k
			}

			function A(k, oe, ve) {
				return oe = h(oe), oe in k ? Object.defineProperty(k, oe, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[oe] = ve, k
			}

			function h(k) {
				var oe = S(k, "string");
				return typeof oe == "symbol" ? oe : String(oe)
			}

			function S(k, oe) {
				if (typeof k != "object" || k === null) return k;
				var ve = k[Symbol.toPrimitive];
				if (ve !== void 0) {
					var De = ve.call(k, oe || "default");
					if (typeof De != "object") return De;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (oe === "string" ? String : Number)(k)
			}
			const f = 50,
				C = 9,
				w = "copy script url page shield",
				O = "disable page shield",
				N = "click documentation link",
				P = "enable page shield",
				I = "filter search page shield",
				L = "filter search view all page shield",
				B = "hover score tooltip page shield",
				U = "open alert modal page shield",
				H = "change pagination page shield",
				le = "close script modal page shield",
				Ee = "open script modal page shield",
				ae = "select alert type page shield",
				me = "sort column page shield",
				Z = {
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
				Q = {
					STARTS_WITH: l.Gn.startsWith,
					ENDS_WITH: l.Gn.endsWith,
					EQUALS: l.Gn.equals,
					CONTAINS: l.Gn.contains,
					DOES_NOT_CONTAIN: l.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: l.Gn.in
				},
				G = {
					status: {
						example: "active",
						type: d.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [Q.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: d.kE.string,
						options: ["true", "false"],
						operators: [Q.CONTAINS, Q.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [Q.EQUALS],
						type: d.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: d.kE.string,
						operators: [Q.INCLUDES, Q.ENDS_WITH, Q.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				b = T({}, G, {
					urls: T({}, G.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				F = {
					type: {
						example: "first_party",
						type: d.kE.select,
						options: ["first_party", "unknown"],
						label: "common.type",
						urlParam: "type",
						operators: [l.Gn.equals]
					},
					name: {
						example: "cookie_1",
						operators: [l.Gn.equals],
						type: d.kE.string,
						label: "firewall.page_shield.name",
						urlParam: "name"
					},
					domain: {
						example: "hostname.com",
						operators: [l.Gn.equals],
						type: d.kE.string,
						label: "firewall.page_shield.domain",
						urlParam: "domain"
					},
					path: {
						example: "/",
						operators: [l.Gn.equals],
						type: d.kE.string,
						label: "firewall.page_shield.path",
						urlParam: "path"
					},
					same_site: {
						operators: [l.Gn.equals],
						type: d.kE.select,
						options: ["lax", "strict", "none"],
						label: "firewall.page_shield.same_site",
						urlParam: "same_site"
					},
					http_only: {
						operators: [l.Gn.equals],
						type: d.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.http_only",
						urlParam: "http_only"
					},
					secure: {
						operators: [l.Gn.equals],
						type: d.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.secure",
						urlParam: "secure"
					}
				};
			let ee = function(k) {
				return k.SECURITY_THREATS = "Security Threats", k.C2_BOTNET = "C2 & Botnet", k.CRYPTOMINING = "Cryptomining", k.MALWARE = "Malware", k.PHISHING = "Phishing", k.SPYWARE = "Spyware", k.DGA_DOMAINS = "DGA Domains", k.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", k
			}({});
			const ue = "https://www.cloudflare.com/plans/enterprise/contact/",
				K = {
					[n.BASE_URI]: "page_shield.policies.form.base_uri",
					[n.CHILD]: "page_shield.policies.form.child",
					[n.CONNECT]: "page_shield.policies.form.connections",
					[n.DEFAULT]: "page_shield.policies.form.default",
					[n.FONT]: "page_shield.policies.form.font",
					[n.FORM_ACTION]: "page_shield.policies.form.form",
					[n.FRAME]: "page_shield.policies.form.frame",
					[n.FRAME_ANCESTORS]: "page_shield.policies.form.frame_ancestors",
					[n.IMAGE]: "page_shield.policies.form.img",
					[n.MANIFEST]: "page_shield.policies.form.manifest",
					[n.MEDIA]: "page_shield.policies.form.media",
					[n.OBJECT]: "page_shield.policies.form.object",
					[n.SCRIPT]: "page_shield.policies.form.script",
					[n.STYLE]: "page_shield.policies.form.style",
					[n.UPGRADE_INSECURE_REQUESTS]: "page_shield.policies.form.upgrade_insecure_requests",
					[n.WORKER]: "page_shield.policies.form.worker"
				},
				q = {
					[n.BASE_URI]: "firewall.page_shield.policies.table.base_uri",
					[n.CHILD]: "firewall.page_shield.policies.table.child",
					[n.CONNECT]: "firewall.page_shield.policies.table.connections",
					[n.DEFAULT]: "firewall.page_shield.policies.table.default",
					[n.FONT]: "firewall.page_shield.policies.table.font",
					[n.FORM_ACTION]: "firewall.page_shield.policies.table.form",
					[n.FRAME]: "firewall.page_shield.policies.table.frame",
					[n.FRAME_ANCESTORS]: "firewall.page_shield.policies.table.frame_ancestors",
					[n.IMAGE]: "firewall.page_shield.policies.table.img",
					[n.MANIFEST]: "firewall.page_shield.policies.table.manifest",
					[n.MEDIA]: "firewall.page_shield.policies.table.media",
					[n.OBJECT]: "firewall.page_shield.policies.table.object",
					[n.SCRIPT]: "firewall.page_shield.policies.table.script",
					[n.STYLE]: "firewall.page_shield.policies.table.style",
					[n.UPGRADE_INSECURE_REQUESTS]: "firewall.page_shield.policies.table.upgrade_insecure_requests",
					[n.WORKER]: "firewall.page_shield.policies.table.worker"
				},
				$ = {
					[c.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[c.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[c.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[m.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[m.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				X = {
					[_.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[_.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				W = {
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
				te = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				ye = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				Ae = {
					[p.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[p.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[p.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				Fe = {
					[p.SCRIPT_MONITOR]: "script_monitor.description",
					[p.CONNECTION_MONITOR]: "connection_monitor.description",
					[p.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				xe = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", k => (a().sendEvent(W.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), k)),
				$e = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", k => (a().sendEvent(W.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), k)),
				Ke = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", k => (a().sendEvent(W.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), k)),
				be = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				Y = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", k => (a().sendEvent(W.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), k)),
				re = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				ge = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", k => (a().sendEvent(W.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), k)),
				R = (0, e.ZP)("pageShieldPolicies", "get", "/zones/(zoneId)/page_shield/policies").on("success", k => (a().sendEvent(W.VIEW_PAGE_SHIELD_POLICIES, {
					category: "user journey",
					product: "Page shield"
				}), k)),
				pe = (0, e.ZP)("pageShieldPolicy", "get", "/zones/(zoneId)/page_shield/policies/(policiesId)"),
				Se = (0, e.ZP)("pageShieldPolicy", "put", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", k => (a().sendEvent(W.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "update"
				}), k)),
				ke = (0, e.ZP)("pageShieldPolicy", "delete", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", k => (a().sendEvent(W.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "delete"
				}), k)),
				Ge = (0, e.ZP)("pageShieldPolicy", "post", "/zones/(zoneId)/page_shield/policies").on("success", k => (a().sendEvent(W.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "create"
				}), k)),
				Ie = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				Be = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var Ue = t("../react/app/redux/normalizer.js");
			const We = k => k.pageShield.configuration,
				Ye = k => {
					var oe;
					return (oe = k.pageShield.configuration.data) === null || oe === void 0 ? void 0 : oe.enabled
				},
				V = k => {
					var oe;
					return (oe = We(k)) === null || oe === void 0 ? void 0 : oe.data
				},
				ie = k => k.pageShield.scripts,
				fe = k => k.pageShield.script,
				we = k => k.pageShield.connections,
				Ne = k => k.pageShield.connection,
				je = k => k.pageShield.policies,
				Ze = k => k.pageShield.policy,
				ot = (0, Ue.P1)("pageShieldScripts", ie),
				lt = (0, Ue.P1)("pageShieldScript", fe),
				at = (0, Ue.P1)("pageShieldConnections", we),
				dt = (0, Ue.P1)("pageShieldConnection", Ne),
				pt = (0, Ue.P1)("pageShieldPolicies", je),
				st = (0, Ue.P1)("pageShieldPolicy", Ze),
				ze = (k, oe) => k === p.SCRIPT_MONITOR ? ot(oe) || [] : at(oe) || [],
				Oe = (k, oe) => k === p.SCRIPT_MONITOR ? ie(oe) || [] : we(oe) || [],
				Qe = (k, oe) => k === p.SCRIPT_MONITOR ? lt(oe) : dt(oe),
				mt = k => k.pageShield.domainIntel,
				it = k => k.pageShield.whoIsRecord,
				gt = (k, oe, ve) => {
					var De;
					const Re = Object.values(ve).map(Ve => ({
						key: Ve,
						label: $[Ve],
						score: k[Ve]
					})).filter(Ve => Ve.score !== void 0 && Ve.score <= oe);
					return oe === C && Re.length === 0 && ((De = k.js_integrity_score) !== null && De !== void 0 ? De : 100) <= oe && Re.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), Re
				},
				z = (k, oe) => Object.values(oe).filter(ve => k[ve] === !0).map(ve => X[ve]),
				de = k => k === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				Te = (k, oe) => k[c.MagecartScore] !== void 0 && k[c.MagecartScore] <= oe || k[c.MalwareScore] !== void 0 && k[c.MalwareScore] <= oe || k[c.CryptominingScore] !== void 0 && k[c.CryptominingScore] <= oe || k.js_integrity_score !== void 0 && k.js_integrity_score <= oe,
				ne = ["cdn.jsdelivr.net", "unpkg.com"],
				se = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				he = k => {
					if (k.includes("@latest")) {
						const ve = k.split("@latest");
						if (ve.length != 2) return;
						const De = ve[0].length,
							Re = De + "@latest".length;
						return [De, Re]
					}
					if (!!ne.some(ve => k.includes(ve)))
						for (const ve of se) {
							const De = k.match(ve);
							if (!De) continue;
							const Re = De.index;
							if (Re === 0) return null;
							const Ve = Re + De[0].length;
							return [Re, Ve]
						}
				}
		},
		"../react/pages/security/resources/constants.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				_C: function() {
					return p
				},
				_R: function() {
					return c
				},
				dY: function() {
					return _
				},
				fy: function() {
					return h
				},
				ji: function() {
					return i
				},
				pR: function() {
					return m
				},
				pV: function() {
					return S
				},
				rj: function() {
					return A
				},
				zf: function() {
					return T
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				o = t("../../../common/util/types/src/api/phases/fields.tsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				d = t.n(a),
				l = t("../react/utils/translator.tsx"),
				g = t("../react/pages/security/resources/types.ts"),
				s = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx");

			function u(f) {
				for (var C = 1; C < arguments.length; C++) {
					var w = arguments[C] != null ? Object(arguments[C]) : {},
						O = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(w).filter(function(N) {
						return Object.getOwnPropertyDescriptor(w, N).enumerable
					})), O.forEach(function(N) {
						E(f, N, w[N])
					})
				}
				return f
			}

			function E(f, C, w) {
				return C = n(C), C in f ? Object.defineProperty(f, C, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[C] = w, f
			}

			function n(f) {
				var C = r(f, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function r(f, C) {
				if (typeof f != "object" || f === null) return f;
				var w = f[Symbol.toPrimitive];
				if (w !== void 0) {
					var O = w.call(f, C || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(f)
			}
			const i = 10;
			let p = function(f) {
					return f.MTLS_ACCESS = "mTLS-enforced authentication", f.ZONE_LOCKDOWN = "Zone lockdown", f.USER_AGENT = "User agent blocking", f.EMAIL_VALIDITY = "Disposable email checks", f.IP_BASED = "IP-based rule", f.GEOGRAPHY_BASE = "Geography-based rule", f
				}({}),
				c = function(f) {
					return f.LEAKED_CREDENTIALS = "Leaked Credentials Checks", f
				}({});
			const m = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				_ = [{
					title: "firewall.tools.toast.geography",
					template: p.GEOGRAPHY_BASE,
					trackedEvent: m.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					template: p.IP_BASED,
					trackedEvent: m.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					template: p.USER_AGENT,
					trackedEvent: m.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					template: p.ZONE_LOCKDOWN,
					trackedEvent: m.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				T = {
					[g.X.UI_SECTION]: f => ({
						[p.MTLS_ACCESS]: {
							ruleName: p.MTLS_ACCESS,
							displayName: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${f.account.id}/${f.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[p.ZONE_LOCKDOWN]: {
							ruleName: p.ZONE_LOCKDOWN,
							displayName: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							wafRulesOverview: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${f.account.id}/configurations/lists`
								}]
							})
						},
						[p.USER_AGENT]: {
							ruleName: p.USER_AGENT,
							displayName: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							wafRulesOverview: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${f.account.id}/configurations/lists`
								}]
							})
						},
						[p.EMAIL_VALIDITY]: {
							ruleName: p.EMAIL_VALIDITY,
							displayName: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.disposable_email.wafRulesOverview"
							}),
							hasWafPermission: !0
						}
					}),
					[g.X.WAF_RULES]: {
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
							expression: '(http.user_agent eq "BadBot/1.0.2 (+http://bad.bot))"',
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
				A = {
					[g.X.WAF_RULES]: {
						[c.LEAKED_CREDENTIALS]: {
							ruleName: c.LEAKED_CREDENTIALS,
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
					[g.X.UI_SECTION]: {
						[c.LEAKED_CREDENTIALS]: {
							ruleName: c.LEAKED_CREDENTIALS,
							displayName: d().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: d().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let h = function(f) {
				return f.DISCOVERY = "discovery", f.SEQUENCES = "sequences", f.SCHEMA_VALIDATION = "schema-validation", f.SETTINGS = "settings", f.API_RULES = "api-rules", f.UPGRADE = "upgrade", f
			}({});
			const S = u({}, s.g, {
				[o.df.HttpRequestFirewallManaged]: u({}, s.g[o.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[o.df.HttpRequestFirewallCustom]: u({}, s.g[o.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[o.df.HttpRateLimit]: u({}, s.g[o.df.HttpRateLimit], {
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
			})
		},
		"../react/pages/security/resources/types.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				X: function() {
					return e
				}
			});
			let e = function(o) {
				return o.UI_SECTION = "UI_SECTION", o.WAF_RULES = "WAF_RULES", o
			}({})
		},
		"../react/pages/security/settings/hooks/index.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Xu: function() {
					return ae
				},
				Io: function() {
					return K
				},
				FQ: function() {
					return be
				},
				vU: function() {
					return Ee
				},
				M: function() {
					return Z
				},
				d7: function() {
					return me
				},
				Oz: function() {
					return ue
				},
				Np: function() {
					return xe
				},
				WR: function() {
					return N
				},
				vE: function() {
					return U
				},
				bE: function() {
					return $e
				},
				u_: function() {
					return le
				},
				kU: function() {
					return H
				},
				pf: function() {
					return q
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http");
			const a = async Y => {
				var re, ge;
				const R = await (0, o.get)(`/zones/${Y}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((re = R == null ? void 0 : R.body) === null || re === void 0 || (ge = re.result) === null || ge === void 0 ? void 0 : ge.value) === "enabled"
			}, d = async (Y, re) => (await (0, o.post)(`/zones/${Y}/content-upload-scan/${re?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), re), l = async Y => {
				var re;
				const ge = await (0, o.get)(`/zones/${Y}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((re = ge == null ? void 0 : ge.body) === null || re === void 0 ? void 0 : re.result) || []
			}, g = async (Y, re) => {
				var ge;
				const R = await (0, o.post)(`/zones/${Y}/content-upload-scan/payloads`, {
					body: [re]
				});
				return (ge = R == null ? void 0 : R.body) === null || ge === void 0 ? void 0 : ge.result
			}, s = async (Y, re) => (await (0, o.del)(`/zones/${Y}/content-upload-scan/payloads/${re}`, {
				hideErrorAlert: !0
			}), re), u = async Y => {
				var re, ge;
				const R = await (0, o.get)(`/zones/${Y}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((re = R == null ? void 0 : R.body) === null || re === void 0 || (ge = re.result) === null || ge === void 0 ? void 0 : ge.enabled)
			}, E = async (Y, re) => {
				var ge, R;
				const pe = await (0, o.post)(`/zones/${Y}/leaked-credential-checks`, {
					body: {
						enabled: re
					}
				});
				return !!((ge = pe == null ? void 0 : pe.body) === null || ge === void 0 || (R = ge.result) === null || R === void 0 ? void 0 : R.enabled)
			}, n = async Y => {
				var re;
				const ge = await (0, o.get)(`/zones/${Y}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (re = ge == null ? void 0 : ge.body) === null || re === void 0 ? void 0 : re.result
			}, r = async (Y, re) => {
				var ge;
				const R = await (0, o.post)(`/zones/${Y}/leaked-credential-checks/detections`, {
					body: re
				});
				return (ge = R == null ? void 0 : R.body) === null || ge === void 0 ? void 0 : ge.result
			}, i = async (Y, re) => (await (0, o.del)(`/zones/${Y}/leaked-credential-checks/detections/${re}`, {
				hideErrorAlert: !0
			}), re), p = async (Y, re) => {
				await (0, o.put)(`/zones/${Y}/security-center/securitytxt`, {
					body: re
				})
			}, c = async Y => {
				await (0, o.del)(`/zones/${Y}/security-center/securitytxt`)
			}, m = async Y => (await (0, o.get)(`/zones/${Y}/security-center/securitytxt`)).body;
			var _ = t("webpack/sharing/consume/default/react/react"),
				T = t("webpack/sharing/consume/default/react-redux/react-redux"),
				A = t("../react/pages/security/settings/resources/index.ts"),
				h = t("../react/common/hooks/useZoneEntitlement.ts"),
				S = t("../react/common/hooks/useGate.ts"),
				f = t("../react/pages/security/api-shield/utils/useApiShield.tsx"),
				C = t("../react/pages/security/api-shield/entitlements.tsx"),
				w = t("../../../../node_modules/yup/es/index.js"),
				O = t("../react/utils/translator.tsx");
			const N = () => (0, T.useSelector)(A.ui),
				P = "central_endpoint_list.endpoint_labels_allowed",
				I = "system-and-user-generated-labels",
				L = () => !!(0, S.Z)(I),
				B = () => !!(0, h.Z)(P),
				U = () => {
					const Y = L(),
						re = B();
					return {
						isLabelsGateOpen: Y,
						hasEndpointLabelsEntitlement: re,
						hasLabels: Y && re
					}
				},
				H = () => {
					const {
						hasApiShields: Y
					} = (0, f.R)(), {
						hasLabels: re
					} = U(), ge = (0, C.Dg)();
					return re && ge && Y
				},
				le = () => {
					const {
						t: Y
					} = (0, O.QT)(), re = w.Z_().required(Y("common.field_is_required")).max(24, Y("labels.apply.form.name.error.max_characters")).matches(A.DG, Y("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", Y("labels.apply.form.name.error.cf_forbidden"), pe => !A.aW.test(pe)), ge = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: pe => w.Ry().shape({
							[A.n5.NAME]: pe ? w.Z_() : re,
							[A.n5.DESCRIPTION]: pe ? w.Z_().optional() : w.Z_().max(150, Y("labels.apply.form.description.error.max_characters"))
						})
					}, R = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[A.N2.NAME]: "",
							[A.N2.SOURCE]: A.W3,
							[A.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => w.Ry().shape({
							[A.N2.NEW_LABEL_NAME]: re
						})
					};
					return {
						LABELS_APPLY_FORM: ge,
						EDIT_LABELS_MODAL_FORM: R
					}
				},
				Ee = ({
					modalHeaderFixedHeight: Y = 62,
					modalDefaultPaddings: re = 16
				} = {}) => {
					const ge = (0, _.useRef)(null),
						R = (0, _.useRef)(null),
						[pe, Se] = (0, _.useState)(0),
						[ke, Ge] = (0, _.useState)(0),
						Ie = `calc(100vh - ${pe}px - ${ke}px - ${re}px)`,
						[Be, Ue] = (0, _.useState)("");
					return (0, _.useEffect)(() => {
						const We = () => {
							var Ye, V, ie, fe;
							const we = ge == null || (Ye = ge.current) === null || Ye === void 0 ? void 0 : Ye.offsetHeight,
								Ne = R == null || (V = R.current) === null || V === void 0 ? void 0 : V.offsetHeight,
								je = ((ie = we) !== null && ie !== void 0 ? ie : 0) + Y,
								Ze = (fe = Ne) !== null && fe !== void 0 ? fe : 0;
							Se(je), Ge(Ze)
						};
						return We(), window.addEventListener("resize", We), () => window.removeEventListener("resize", We)
					}, []), {
						searchTerm: Be,
						setSearchTerm: Ue,
						scrollableSectionMaxHeight: Ie,
						topMenuRef: ge,
						bottomMenuRef: R
					}
				},
				ae = Y => {
					const re = N(),
						ge = (0, e.useQueryClient)(),
						R = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${Y}`,
							queryFn: () => a(Y),
							enabled: re
						}),
						pe = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${Y}`,
							queryFn: () => l(Y),
							enabled: re && !!(R == null ? void 0 : R.data)
						}),
						Se = (0, e.useMutation)({
							mutationFn: async ({
								enabled: Ie
							}) => await d(Y, Ie),
							onSuccess: Ie => {
								ge.setQueryData([`content-scanning-enabled-${Y}`], Ie)
							}
						}),
						ke = (0, e.useMutation)({
							mutationFn: Ie => g(Y, Ie),
							onSuccess: Ie => {
								ge.setQueryData([`content-scanning-detections-${Y}`], Ie)
							}
						}),
						Ge = (0, e.useMutation)({
							mutationFn: Ie => s(Y, Ie),
							onSuccess: Ie => {
								var Be;
								const Ue = (Be = ge.getQueryData(`content-scanning-detections-${Y}`)) !== null && Be !== void 0 ? Be : [];
								ge.setQueryData([`content-scanning-detections-${Y}`], Ue.filter(({
									id: We
								}) => We !== Ie))
							}
						});
					return {
						entitled: re,
						loading: R.isLoading || pe.isLoading,
						error: R.isError || pe.isError,
						enabled: {
							data: R.data,
							toggleEnabled: async Ie => Se.mutateAsync({
								enabled: Ie
							})
						},
						detections: {
							data: pe.data,
							add: ke.mutateAsync,
							delete: Ge.mutateAsync,
							loading: ke.isLoading || Ge.isLoading
						}
					}
				},
				me = () => {
					const Y = (0, S.Z)(A.dC),
						re = (0, T.useSelector)(A.cN),
						ge = (0, T.useSelector)(A.bH),
						R = (0, T.useSelector)(A.P3),
						pe = (0, T.useSelector)(A.Ri);
					return {
						hasEditPermission: Y && re,
						isEnabled: Y && R && (ge.hasSimilarLeaked || ge.hasUsernameAndPasswordLeaked || pe)
					}
				},
				Z = Y => {
					const re = me(),
						ge = (0, e.useQueryClient)(),
						R = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${Y}`,
							queryFn: () => u(Y),
							enabled: !!re.isEnabled
						}),
						pe = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${Y}`,
							queryFn: () => n(Y),
							enabled: !!re.isEnabled && !!(R == null ? void 0 : R.data)
						}),
						Se = (0, e.useMutation)({
							mutationFn: ({
								enabled: Ie
							}) => E(Y, Ie),
							onSuccess: Ie => {
								ge.setQueryData([`leaked-credentials-enabled-${Y}`], Ie)
							}
						}),
						ke = (0, e.useMutation)({
							mutationFn: async Ie => await r(Y, Ie),
							onSuccess: Ie => {
								var Be;
								const Ue = (Be = ge.getQueryData(`leaked-credentials-detections-${Y}`)) !== null && Be !== void 0 ? Be : [];
								ge.setQueryData([`leaked-credentials-detections-${Y}`], [...Ue, Ie])
							}
						}),
						Ge = (0, e.useMutation)({
							mutationFn: Ie => i(Y, Ie),
							onSuccess: Ie => {
								var Be;
								const Ue = (Be = ge.getQueryData(`leaked-credentials-detections-${Y}`)) !== null && Be !== void 0 ? Be : [];
								ge.setQueryData([`leaked-credentials-detections-${Y}`], Ue.filter(({
									id: We
								}) => We !== Ie))
							}
						});
					return {
						entitled: re.isEnabled,
						hasEditPermissions: re.hasEditPermission,
						loading: R.isLoading || pe.isLoading,
						error: R.isError || R.isError,
						enabled: {
							data: R.data,
							toggleEnabled: async Ie => Se.mutateAsync({
								enabled: Ie
							})
						},
						detections: {
							data: pe.data,
							add: ke.mutateAsync,
							delete: Ge.mutateAsync,
							loading: ke.isLoading || Ge.isLoading
						}
					}
				};
			var Q = t("../react/common/selectors/zoneSelectors.ts"),
				G = t("../react/common/utils/useQueryCache.ts"),
				b = t("../react/app/redux/index.ts");
			const F = "security-txt",
				ee = {
					securityTxt: ({
						zoneId: Y
					}) => [F, Y]
				},
				ue = Y => (0, e.useQuery)({
					queryKey: ee.securityTxt({
						zoneId: Y
					}),
					queryFn: () => m(Y),
					select: re => re.result
				}),
				K = () => {
					const Y = (0, b.p4)(Q.Cu),
						{
							invalidate: re
						} = (0, G.o)(ee.securityTxt({
							zoneId: Y
						}));
					return (0, e.useMutation)({
						mutationFn: () => c(Y),
						onSuccess: async () => {
							await re(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				q = Y => {
					const {
						invalidate: re
					} = (0, G.o)(ee.securityTxt({
						zoneId: Y
					}));
					return (0, e.useMutation)({
						mutationFn: ge => p(Y, ge),
						onSuccess: async () => {
							await re(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var $ = t("../../../../node_modules/lodash/isEqual.js"),
				X = t.n($),
				W = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function te(Y) {
				for (var re = 1; re < arguments.length; re++) {
					var ge = arguments[re] != null ? Object(arguments[re]) : {},
						R = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(ge).filter(function(pe) {
						return Object.getOwnPropertyDescriptor(ge, pe).enumerable
					})), R.forEach(function(pe) {
						ye(Y, pe, ge[pe])
					})
				}
				return Y
			}

			function ye(Y, re, ge) {
				return re = Ae(re), re in Y ? Object.defineProperty(Y, re, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[re] = ge, Y
			}

			function Ae(Y) {
				var re = Fe(Y, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function Fe(Y, re) {
				if (typeof Y != "object" || Y === null) return Y;
				var ge = Y[Symbol.toPrimitive];
				if (ge !== void 0) {
					var R = ge.call(Y, re || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(Y)
			}
			const xe = Y => {
					const {
						queryKey: re,
						zoneId: ge
					} = (0, W.hL)(Y), {
						isLoading: R,
						isError: pe,
						isSuccess: Se,
						data: ke,
						refetch: Ge,
						isRefetching: Ie
					} = (0, e.useQuery)({
						queryKey: re,
						queryFn: () => W.Mi.getLabels(te({
							zoneId: ge
						}, Y)),
						onSuccess: () => {
							var Be;
							const Ue = Y == null || (Be = Y.filters) === null || Be === void 0 ? void 0 : Be.source;
							(Ue === A.LABEL_SOURCES.MANAGED || Ue === A.LABEL_SOURCES.USER) && (0, A.Tf)({
								name: A.QJ.FILTER_USER_MANAGED_LABELS,
								product: A.Iv.SECURITY_SETTINGS,
								pageName: A.R.LABELS_LIST,
								type: Ue
							})
						}
					});
					return {
						data: ke == null ? void 0 : ke.result,
						errors: ke == null ? void 0 : ke.errors,
						paginationData: ke == null ? void 0 : ke.result_info,
						isLoading: R,
						isError: pe,
						isSuccess: Se,
						refetch: Ge,
						isRefetching: Ie
					}
				},
				$e = ({
					labels: Y,
					preselectedLabels: re
				}) => {
					const {
						USER: ge,
						MANAGED: R
					} = A.LABEL_SOURCES, [pe, Se] = (0, _.useState)({
						[ge]: [],
						[R]: []
					}), [ke, Ge] = (0, _.useState)(new Set), Ie = ke.size > 0, [Be, Ue] = (0, _.useState)(!1), We = fe => {
						Ge(we => {
							const Ne = new Set(we);
							return Ne.has(fe.name) ? Ne.delete(fe.name) : Ne.add(fe.name), Ne
						})
					}, Ye = fe => ke.has(fe.name), V = (fe, we) => {
						const Ne = Ye(fe) ? 1 : 0;
						return (Ye(we) ? 1 : 0) - Ne
					}, ie = fe => {
						Se(we => ({
							[ge]: [...fe ? fe[ge] : we[ge]].sort(V),
							[R]: [...fe ? fe[R] : we[R]].sort(V)
						}))
					};
					return (0, _.useEffect)(() => {
						if (Y && !Be) {
							if (re) {
								const fe = new Set;
								Y.forEach(we => {
									re.some(Ne => X()(Ne, we)) && fe.add(we.name)
								}), Ge(fe)
							}
							Ue(!0)
						}
					}, [Y, re, Be]), (0, _.useEffect)(() => {
						if (Y && Be) {
							const fe = Y.reduce((Ne, je) => (je.source === ge ? Ne[ge].push(je) : je.source === R && Ne[R].push(je), Ne), {
									[ge]: [],
									[R]: []
								}),
								we = {
									[ge]: fe[ge].sort(V),
									[R]: fe[R].sort(V)
								};
							Se(we)
						}
					}, [ge, R, Y, Be]), {
						userAndManagedLabels: pe,
						setUserAndManagedLabels: Se,
						toggleSelectedLabel: We,
						isLabelSelected: Ye,
						sortLabelsBySelectedStatus: ie,
						hasLabelsSelected: Ie
					}
				};
			var Ke = t("../react/pages/security/settings/resources/selectors.ts");
			const be = (Y = "") => {
				const re = (0, b.p4)(Ke.Xs),
					ge = re && (Y == null ? void 0 : Y.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: re,
					hasDeprecatedParameter: ge
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				FQ: function() {
					return u.FQ
				},
				Iv: function() {
					return E.Iv
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
				QJ: function() {
					return E.QJ
				},
				R: function() {
					return E.R
				},
				Tf: function() {
					return E.Tf
				},
				WR: function() {
					return u.WR
				},
				Xs: function() {
					return E.Xs
				},
				Xu: function() {
					return u.Xu
				},
				ZF: function() {
					return E.ZF
				},
				bE: function() {
					return u.bE
				},
				bH: function() {
					return E.bH
				},
				dC: function() {
					return E.dC
				},
				eC: function() {
					return E.eC
				},
				kU: function() {
					return u.kU
				},
				m8: function() {
					return E.m8
				},
				pf: function() {
					return u.pf
				},
				ui: function() {
					return E.ui
				},
				vE: function() {
					return u.vE
				},
				vc: function() {
					return E.vc
				},
				zF: function() {
					return E.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/app/components/Forbidden.jsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				d = t.n(a),
				l = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				g = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(g),
				u = t("../react/pages/security/settings/hooks/index.ts"),
				E = t("../react/pages/security/settings/resources/index.ts");
			const n = d().lazy(() => Promise.all([t.e(37800), t.e(39074), t.e(16691), t.e(94084), t.e(12174), t.e(57062), t.e(16552), t.e(4e4), t.e(51436), t.e(75136), t.e(68204), t.e(2515), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(65022), t.e(60734), t.e(60911), t.e(25390), t.e(71449), t.e(9147), t.e(30906), t.e(87940), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				r = () => {
					const {
						t: i
					} = (0, g.useI18n)(), p = (0, e.xk)("waf");
					return d().createElement(l.T3, {
						parentPageLabel: i("navigation.zone.security"),
						title: i("navigation.zone.security.settings"),
						type: "narrow"
					}, p.read ? d().createElement(n, null) : d().createElement(o.Z, null))
				};
			y.ZP = r
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Mi: function() {
					return h
				},
				hL: function() {
					return A
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				a = t("../react/common/utils/useQueryCache.ts"),
				d = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/common/hooks/useAccountId.ts"),
				g = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				s = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const u = {
				labels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var E = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				r = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function i(f, C) {
				if (f == null) return {};
				var w = p(f, C),
					O, N;
				if (Object.getOwnPropertySymbols) {
					var P = Object.getOwnPropertySymbols(f);
					for (N = 0; N < P.length; N++) O = P[N], !(C.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(f, O) || (w[O] = f[O]))
				}
				return w
			}

			function p(f, C) {
				if (f == null) return {};
				var w = {},
					O = Object.keys(f),
					N, P;
				for (P = 0; P < O.length; P++) N = O[P], !(C.indexOf(N) >= 0) && (w[N] = f[N]);
				return w
			}

			function c(f) {
				for (var C = 1; C < arguments.length; C++) {
					var w = arguments[C] != null ? Object(arguments[C]) : {},
						O = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(w).filter(function(N) {
						return Object.getOwnPropertyDescriptor(w, N).enumerable
					})), O.forEach(function(N) {
						m(f, N, w[N])
					})
				}
				return f
			}

			function m(f, C, w) {
				return C = _(C), C in f ? Object.defineProperty(f, C, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[C] = w, f
			}

			function _(f) {
				var C = T(f, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function T(f, C) {
				if (typeof f != "object" || f === null) return f;
				var w = f[Symbol.toPrimitive];
				if (w !== void 0) {
					var O = w.call(f, C || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(f)
			}
			const A = f => {
					const C = (0, e.p4)(o.Cu),
						w = (0, l.F)(),
						O = S.labels(c({
							accountId: w,
							zoneId: C
						}, f ? c({}, f) : {})),
						N = (0, a.o)(O);
					return c({
						zoneId: C,
						queryKey: O,
						batchInvalidateLabels: async () => {
							await N.batchInvalidate({
								queryKeysToPredicateInvalidate: [d.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, N)
				},
				h = {
					getLabels: async f => {
						var C, w, O, N;
						let {
							zoneId: P,
							hideErrorAlert: I = !0
						} = f, L = i(f, ["zoneId", "hideErrorAlert"]);
						return (await g.get(u.labels.toUrl({
							zoneId: P
						}), {
							parameters: {
								page: L == null ? void 0 : L.page,
								per_page: L == null ? void 0 : L.per_page,
								with_mapped_resource_counts: L == null ? void 0 : L.with_mapped_resource_counts,
								filter: L == null || (C = L.filters) === null || C === void 0 ? void 0 : C.search,
								source: (0, n.sQ)(L == null || (w = L.filters) === null || w === void 0 ? void 0 : w.source),
								order: L == null || (O = L.sort) === null || O === void 0 ? void 0 : O.id,
								direction: (L == null ? void 0 : L.sort) ? (L == null || (N = L.sort) === null || N === void 0 ? void 0 : N.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: I
						})).body
					},
					getLabel: async f => {
						let {
							zoneId: C,
							labelName: w,
							hideErrorAlert: O = !0
						} = f, N = i(f, ["zoneId", "labelName", "hideErrorAlert"]);
						const P = (0, n.mm)(w) ? u.managedLabel.toUrl({
							zoneId: C,
							labelName: w
						}) : u.userLabel.toUrl({
							zoneId: C,
							labelName: w
						});
						return (await g.get(P, {
							parameters: {
								with_mapped_resource_counts: N == null ? void 0 : N.with_mapped_resource_counts
							},
							hideErrorAlert: O
						})).body
					},
					editLabel: async ({
						zoneId: f,
						label: C,
						replace: w
					}) => {
						const {
							name: O
						} = C, N = i(C, ["name"]);
						return (await (w ? g.put : g.patch)(u.userLabel.toUrl({
							zoneId: f,
							labelName: C.name
						}), {
							body: N
						})).body
					},
					deleteLabel: async ({
						zoneId: f,
						labelName: C
					}) => (await g.del(u.userLabel.toUrl({
						zoneId: f,
						labelName: C
					}))).body,
					createLabel: async f => {
						let {
							zoneId: C
						} = f, w = i(f, ["zoneId"]);
						const {
							product: O
						} = w, N = i(w, ["product"]);
						return (await g.post(u.userLabels.toUrl({
							zoneId: C
						}), {
							body: [N]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: f,
						user: C,
						managed: w,
						operationIds: O,
						replace: N
					}) => (await (N ? g.put : g.post)(u.operationsLinkedToLabels.toUrl({
						zoneId: f
					}), {
						body: c({}, C ? {
							user: {
								labels: C
							}
						} : {}, w ? {
							managed: {
								labels: w
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: O
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: f,
						labelName: C,
						operationIds: w
					}) => {
						const O = (0, n.mm)(C) ? u.managedLabelOperations.toUrl({
							zoneId: f,
							labelName: C
						}) : u.userLabelOperations.toUrl({
							zoneId: f,
							labelName: C
						});
						return (await g.put(O, {
							body: {
								selector: {
									include: {
										operation_ids: w
									}
								}
							}
						})).body
					}
				},
				S = {
					labels: f => {
						let {
							accountId: C,
							zoneId: w
						} = f, O = i(f, ["accountId", "zoneId"]);
						return [d.IQ.LABELS, C, w, ...(0, E.isEmpty)(O) ? [] : [O]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return _
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return s
				},
				GE: function() {
					return w
				},
				IQ: function() {
					return d
				},
				KV: function() {
					return g
				},
				LABELS_LIST_TOASTS: function() {
					return p
				},
				LABEL_SOURCES: function() {
					return l
				},
				QH: function() {
					return c
				},
				V: function() {
					return S
				},
				W3: function() {
					return a
				},
				_8: function() {
					return i
				},
				_c: function() {
					return f
				},
				aW: function() {
					return T
				},
				dC: function() {
					return N
				},
				gY: function() {
					return C
				},
				j8: function() {
					return u
				},
				jz: function() {
					return m
				},
				n5: function() {
					return A
				},
				om: function() {
					return E
				},
				w: function() {
					return o
				},
				zF: function() {
					return O
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let o = function(P) {
				return P.EXPOSED_CREDENTIALS = "exposed_credentials", P.CONTENT_SCANNING = "content_scanning", P
			}({});
			const a = "all";
			let d = function(P) {
					return P.LABELS = "labels", P
				}({}),
				l = function(P) {
					return P.USER = "user", P.MANAGED = "managed", P
				}({}),
				g = function(P) {
					return P.SOURCE = "source", P
				}({}),
				s = function(P) {
					return P.NAME = "name", P.SOURCE = "source", P.NEW_LABEL_NAME = "newLabelName", P
				}({}),
				u = function(P) {
					return P.ENDPOINT = "endpoint", P.METHOD = "method", P.OPERATION_ID = "operationId", P
				}({}),
				E = function(P) {
					return P.NAME = "name", P.MAPPED_RESOURCES = "mapped_resources.operations", P.SOURCE = "source", P.APPLY = "apply", P
				}({});
			const i = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: E.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[g.SOURCE]: a
					}
				},
				filters: g,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					autoClearQs: !0
				}
			};
			let p = function(P) {
				return P.CREATED_LABEL = "createdLabel", P.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", P.DELETED_LABEL = "deletedLabel", P.APPLIED_LABEL = "appliedLabel", P.EDITED_LABEL = "editedLabel", P.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", P
			}({});
			const c = "650px",
				m = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				_ = /^[A-Za-z0-9-]+$/,
				T = /^cf-/;
			let A = function(P) {
				return P.NAME = "name", P.DESCRIPTION = "description", P
			}({});
			const h = "all";
			let S = function(P) {
				return P.METHOD = "method", P.HOSTNAME = "hostname", P
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
						[S.METHOD]: h,
						[S.HOSTNAME]: h
					}
				},
				filters: S
			};
			let C = function(P) {
				return P.TITLE = "title", P.DESCRIPTION = "description", P.SUBMIT = "submit", P
			}({});
			const w = 1e3,
				O = {
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
				N = "exposed-credentials-module"
		},
		"../react/pages/security/settings/resources/index.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return e.DG
				},
				tR: function() {
					return p
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
					return r
				},
				zF: function() {
					return e.zF
				},
				QJ: function() {
					return m
				},
				R: function() {
					return n
				},
				LABEL_SOURCES: function() {
					return e.LABEL_SOURCES
				},
				eC: function() {
					return c
				},
				QH: function() {
					return e.QH
				},
				TG: function() {
					return o.T
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
					return A.Xs
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
					return A.bH
				},
				Mb: function() {
					return a.Mb
				},
				ui: function() {
					return A.ui
				},
				P3: function() {
					return A.P3
				},
				Ri: function() {
					return A.Ri
				},
				cN: function() {
					return A.cN
				},
				m8: function() {
					return T
				},
				Tf: function() {
					return _
				},
				$E: function() {
					return a.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				o = t("../react/pages/security/settings/resources/types.ts"),
				a = t("../react/pages/security/settings/resources/utils.ts"),
				d = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(d);

			function g(h) {
				for (var S = 1; S < arguments.length; S++) {
					var f = arguments[S] != null ? Object(arguments[S]) : {},
						C = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(f).filter(function(w) {
						return Object.getOwnPropertyDescriptor(f, w).enumerable
					})), C.forEach(function(w) {
						s(h, w, f[w])
					})
				}
				return h
			}

			function s(h, S, f) {
				return S = u(S), S in h ? Object.defineProperty(h, S, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[S] = f, h
			}

			function u(h) {
				var S = E(h, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function E(h, S) {
				if (typeof h != "object" || h === null) return h;
				var f = h[Symbol.toPrimitive];
				if (f !== void 0) {
					var C = f.call(h, S || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(h)
			}
			let n = function(h) {
					return h.LABELS_LIST = "Labels List page", h.LABELS_APPLY = "Labels Apply page", h.LABELS_SIDE_MODAL = "Labels Side Modal", h.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", h.LABELS_OPERATION_DETAILS = "Operation Details page", h
				}({}),
				r = function(h) {
					return h.API_SHIELD = "API Shield", h.SECURITY_SETTINGS = "Security Settings", h
				}({}),
				i = function(h) {
					return h.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", h.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", h.OPERATIONS_TABLE_ROW = "Operations table row", h.OPERATION_DETAILS_PAGE = "Operation details page", h
				}({}),
				p = function(h) {
					return h.UPSERT = "upsert", h.OVERWRITE = "overwrite", h
				}({}),
				c = function(h) {
					return h.SINGLE = "single", h.MULTIPLE = "multiple", h
				}({}),
				m = function(h) {
					return h.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", h.DELETE_LABEL = "delete a user label in the settings page", h.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", h.CREATE_LABEL_CLICKED = "click create label button in the settings page", h.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", h.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", h.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", h.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", h.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", h.OPEN_LABELS_SIDE_MODAL = "open labels side modal", h.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", h.CREATE_NEW_LABEL = "create a new label", h
				}({});
			const _ = ({
					name: h,
					product: S,
					category: f = "user journey",
					pageName: C,
					from: w,
					write_strategy: O,
					type: N,
					target: P
				}) => {
					l().sendEvent(h, g({
						category: f,
						pageName: C,
						product: S
					}, w ? {
						from: w
					} : {}, O ? {
						write_strategy: O
					} : {}, N ? {
						type: N
					} : {}, P ? {
						target: P
					} : {}))
				},
				T = () => {
					var h;
					return (h = Object.values(m)) === null || h === void 0 ? void 0 : h.flat()
				};
			var A = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				P3: function() {
					return u
				},
				Ri: function() {
					return E
				},
				Xs: function() {
					return r
				},
				bH: function() {
					return n
				},
				cN: function() {
					return s
				},
				ui: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				o = t("../react/utils/url.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				d = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const g = i => {
					const p = (0, e.RO)(i),
						c = !!(0, a.rV)(i, "rulesets.file_upload_scan_allowed"),
						m = !!(0, a.BF)(i, "rulesets.file_upload_scan_allowed");
					return (0, o.el)(window.location.pathname) ? p && (c || m) : m
				},
				s = i => Number((0, a.rV)(i, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				u = i => (0, a.rV)(i, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				E = i => (0, a.rV)(i, "rulesets.leaked_credential_checks_allowed"),
				n = i => (0, l.z1)(d.dC)(i) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, a.rV)(i, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, a.rV)(i, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				r = i => !!(0, l.z1)("deprecate-security-level")(i)
		},
		"../react/pages/security/settings/resources/types.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				T: function() {
					return o
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let o = function(a) {
				return a.ENABLED = "enabled", a.CONTACT = "contact", a.EXPIRES = "expires", a.ENCRYPTION = "encryption", a.ACKNOWLEDGMENTS = "acknowledgments", a.CANONICAL = "canonical", a.HIRING = "hiring", a.POLICY = "policy", a.PREFERRED_LANGUAGES = "preferred_languages", a
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return i
				},
				Mb: function() {
					return p
				},
				N2: function() {
					return S
				},
				Q4: function() {
					return m
				},
				QF: function() {
					return r
				},
				Vy: function() {
					return T
				},
				Wv: function() {
					return c
				},
				mm: function() {
					return h
				},
				sQ: function() {
					return A
				},
				vc: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				a = t("../react/pages/security/settings/routes.tsx"),
				d = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/pages/security/settings/resources/types.ts"),
				g = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function s(f) {
				for (var C = 1; C < arguments.length; C++) {
					var w = arguments[C] != null ? Object(arguments[C]) : {},
						O = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(w).filter(function(N) {
						return Object.getOwnPropertyDescriptor(w, N).enumerable
					})), O.forEach(function(N) {
						u(f, N, w[N])
					})
				}
				return f
			}

			function u(f, C, w) {
				return C = E(C), C in f ? Object.defineProperty(f, C, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[C] = w, f
			}

			function E(f) {
				var C = n(f, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function n(f, C) {
				if (typeof f != "object" || f === null) return f;
				var w = f[Symbol.toPrimitive];
				if (w !== void 0) {
					var O = w.call(f, C || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(f)
			}
			const r = {
					[l.T.ENABLED]: !0,
					[l.T.CONTACT]: [""],
					[l.T.EXPIRES]: ""
				},
				i = {
					[l.T.CONTACT]: {
						label: "security_txt.fields.contact",
						tooltip: "security_txt.fields.contact.description",
						placeholder: "security_txt.fields.contact.placeholder"
					},
					[l.T.EXPIRES]: {
						label: "security_txt.fields.expires",
						tooltip: "security_txt.fields.expires.description",
						placeholder: "security_txt.fields.expires.placeholder"
					},
					[l.T.ENCRYPTION]: {
						label: "security_txt.fields.encryption",
						tooltip: "security_txt.fields.encryption.description",
						placeholder: "security_txt.fields.encryption.placeholder"
					},
					[l.T.ACKNOWLEDGMENTS]: {
						label: "security_txt.fields.acknowledgements",
						tooltip: "security_txt.fields.acknowledgements.description",
						placeholder: "security_txt.fields.acknowledgements.placeholder"
					},
					[l.T.CANONICAL]: {
						label: "security_txt.fields.canonical",
						tooltip: "security_txt.fields.canonical.description",
						placeholder: "security_txt.fields.canonical.placeholder"
					},
					[l.T.POLICY]: {
						label: "security_txt.fields.policy",
						tooltip: "security_txt.fields.policy.description",
						placeholder: "security_txt.fields.policy.placeholder"
					},
					[l.T.HIRING]: {
						label: "security_txt.fields.hiring",
						tooltip: "security_txt.fields.hiring.description",
						placeholder: "security_txt.fields.hiring.placeholder"
					},
					[l.T.PREFERRED_LANGUAGES]: {
						label: "security_txt.fields.preferred_languages",
						tooltip: "security_txt.fields.preferred_languages.description",
						placeholder: "security_txt.fields.preferred_languages.placeholder"
					}
				},
				p = f => e.Ry({
					[l.T.CONTACT]: e.IX().of(e.Z_().required(f("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, f("security_txt.fields.contact.format_error"))),
					[l.T.EXPIRES]: e.hT().required(f("common.required")).min(new Date, f("security_txt.fields.expires.min_error"))
				}),
				c = f => {
					const C = {};
					for (const w in f) C[w] = Array.isArray(f[w]) ? f[w].filter(O => !!O) : f[w];
					return s({}, C, {
						expires: (0, g.DZ)(f.expires)
					})
				},
				m = (f, C, w) => {
					const O = [...new Set([l.T.CONTACT, l.T.EXPIRES, ...Object.values(l.T)])],
						N = Object.entries(f).sort(([P], [I]) => O.indexOf(P) - O.indexOf(I)).filter(([P, I]) => !!i[P] && !!I && (!Array.isArray(I) || !!I.length)).map(([P, I]) => Array.isArray(I) ? I.map(L => `${w(i[P].label)}: ${L}`).join(`
`) : `${w(i[P].label)}: ${I}`).join(`
`);
					(0, o.yH)(`Cloudflare_${C}_security.txt`, N, "text/plain;charset=utf-8")
				};
			let _ = function(f) {
				return f.CREATED = "created security.txt", f.ENABLED = "enabled security.txt", f.DISABLED = "disabled security.txt", f.DOWNLOADED = "downloaded security.txt", f.UPDATED = "updated security.txt", f.DELETED = "deleted security.txt", f
			}({});
			const T = f => (f == null ? void 0 : f.source) === d.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (f == null ? void 0 : f.source) === d.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				A = f => f === d.W3 ? void 0 : f,
				h = f => d.aW.test(f),
				S = f => {
					switch (f) {
						case d.w.CONTENT_SCANNING:
							return a.ROUTES.CONTENT_SCANNING;
						case d.w.EXPOSED_CREDENTIALS:
							return a.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				ROUTES: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				ROOT: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings`,
				DETECTIONS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections`,
				EXPOSED_CREDENTIALS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections/exposed-credentials`,
				CONTENT_SCANNING: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections/malicious-content`,
				LABELS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/labels`,
				LABEL_APPLY: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/labels/apply/:labelName?`,
				SECURITY_TXT: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/security-txt`
			}
		},
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Sb: function() {
					return E
				},
				Vj: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						p = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(i).filter(function(c) {
						return Object.getOwnPropertyDescriptor(i, c).enumerable
					})), p.forEach(function(c) {
						d(n, c, i[c])
					})
				}
				return n
			}

			function d(n, r, i) {
				return r = l(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function l(n) {
				var r = g(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var p = i.call(n, r || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			const s = {
					SHOW_LCC_MIGRATION_BANNER: "show LCC migration banner",
					SHOW_LCC_MIGRATION_WARNING: "show LCC migration warning",
					CLICK_LCC_DOCUMENTATION: "click link to Leaked credentials detection documentation",
					CLICK_LCC_UPGRADE_GUIDE: "click link to Leaked credentials detection upgrade guide"
				},
				u = {
					product: "WAF Managed Rules"
				},
				E = ({
					event: n,
					category: r = "user journey",
					product: i = "waf",
					productName: p = "Managed Rules",
					additionalData: c
				}) => {
					o().sendEvent(n, a({
						category: r,
						product: i,
						productName: p
					}, c || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				D: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CLICK_MENU_ITEM_SHARE = "click on share item", o.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", o.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", o.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", o.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", o.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", o.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", o.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", o.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", o.CLICK_ON_DELETE_RULESET = "click on delete ruleset", o.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", o
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o
			}({})
		},
		"../react/pages/stream/actionTypes.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ReplaceVideos = "stream.replace_videos", o.PrependVideo = "stream.prepend_video", o.UpdateVideo = "stream.update_video", o.UpdateVideoPending = "steam.update_video_pending", o.RemoveVideos = "stream.remove_videos", o.StoreUploader = "stream.store_uploader", o.UpsertUploads = "stream.upsert_uploads", o.RemoveUploads = "stream.remove_uploads", o.UpdateUploadProgress = "stream.update_upload_progress", o.UploadViaUrl = "stream.upload_via_url", o.SetLoading = "stream.set_loading", o.SetStorageLoading = "stream.set_storage_loading", o.SetStorage = "stream.set_storage", o.SetPage = "stream.set_page", o.SetPausedUploads = "stream.set_paused_uploads", o.RemovePausedUpload = "stream.remove_paused_upload", o.SetRequestTimestamp = "stream.set_request_timestamp", o.ResetState = "stream.reset_state", o
			}({})
		},
		"../react/pages/stream/reducer.ts": function(x, y, t) {
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
				o = t("../react/pages/stream/actionTypes.ts"),
				a = t("../react/pages/stream/util/pager.ts");

			function d(r) {
				for (var i = 1; i < arguments.length; i++) {
					var p = arguments[i] != null ? Object(arguments[i]) : {},
						c = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(p).filter(function(m) {
						return Object.getOwnPropertyDescriptor(p, m).enumerable
					})), c.forEach(function(m) {
						l(r, m, p[m])
					})
				}
				return r
			}

			function l(r, i, p) {
				return i = g(i), i in r ? Object.defineProperty(r, i, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = p, r
			}

			function g(r) {
				var i = s(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function s(r, i) {
				if (typeof r != "object" || r === null) return r;
				var p = r[Symbol.toPrimitive];
				if (p !== void 0) {
					var c = p.call(r, i || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}
			const u = "stream",
				E = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(r = E, i) {
				switch (i.type) {
					case o.U.ResetState:
						return E;
					case o.U.SetStorageLoading:
						const {
							storageLoading: p
						} = i;
						return d({}, r, {
							storageLoading: p
						});
					case o.U.SetStorage:
						return d({}, r, {
							storage: i.payload ? d({}, r.storage, i.payload) : void 0
						});
					case o.U.ReplaceVideos:
						return d({}, r, {
							videos: i.videos
						});
					case o.U.PrependVideo:
						return d({}, r, {
							videos: [i.video, ...r.videos].filter((c, m) => m < a.FJ)
						});
					case o.U.UpdateVideo:
						return d({}, r, {
							videos: r.videos.map(c => c.uid === i.video.uid ? i.video : c)
						});
					case o.U.UpdateVideoPending:
						return d({}, r, {
							videoUpdateStatuses: d({}, r.videoUpdateStatuses, {
								[i.uid]: i.status
							})
						});
					case o.U.RemoveVideos:
						return d({}, r, {
							videos: r.videos.filter(c => !i.ids.includes(c.uid))
						});
					case o.U.SetLoading:
						return d({}, r, {
							loading: i.loading
						});
					case o.U.SetRequestTimestamp:
						return d({}, r, {
							requestTimestamp: i.requestTimestamp
						});
					case o.U.UploadViaUrl:
						return r;
					default:
						return (0, e.h)(i, r)
				}
			}
		},
		"../react/pages/stream/selectors.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Id: function() {
					return d
				},
				OU: function() {
					return n
				},
				Pf: function() {
					return l
				},
				QL: function() {
					return u
				},
				_A: function() {
					return m
				},
				_Q: function() {
					return r
				},
				aM: function() {
					return c
				},
				bM: function() {
					return s
				},
				bO: function() {
					return i
				},
				bm: function() {
					return p
				},
				mX: function() {
					return _
				},
				pW: function() {
					return g
				},
				xW: function() {
					return E
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/pages/stream/reducer.ts");
			const d = T => T[a.nY],
				l = T => d(T).videos,
				g = T => d(T).videoUpdateStatuses,
				s = T => d(T).loading,
				u = T => d(T).requestTimestamp,
				E = T => d(T).storageLoading,
				n = T => d(T).storage,
				r = T => (0, o.BF)(T, "stream.enabled") || (0, e.bC)(T),
				i = T => (0, e.Le)(T, "stream", "connect"),
				p = T => (0, e.Le)(T, "stream", "stream-4371"),
				c = T => (0, e.Le)(T, "stream", "public-details-enabled"),
				m = T => !!(0, e.Le)(T, "stream", "llhls"),
				_ = T => {
					const A = n(T);
					return A !== void 0 && A.limitMins > A.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				FJ: function() {
					return e
				},
				d6: function() {
					return a
				},
				wL: function() {
					return o
				}
			});
			const e = 30;

			function o(d, l, g) {
				const s = {
					search: g,
					limit: e.toString()
				};
				return l !== void 0 && (s.end = l), s
			}

			function a(d, l, g) {
				return {
					limit: e.toString(),
					search: g,
					asc: "true",
					start_comp: "gt",
					start: l
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o
			}({})
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", o.POOL_TABLE = "click on expandable row on pool", o.CREATE_MONITOR_LINK = "click on create a monitor", o.EDIT_MONITOR_LINK = "click on edit a monitor", o.EDIT_MONITOR = "edit monitor", o.CREATE_MONITOR = "create monitor", o.CREATE_POOL_LINK = "click on create a pool", o.EDIT_POOL_LINK = "click on edit a pool", o.EDIT_POOL = "edit pool", o.CREATE_POOL = "create pool", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return a
				},
				X: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let a = function(l) {
				return l.CREATE = "create waiting room", l.UPDATE = "update waiting room", l.EVENTS = "view waiting rooms events", l.ANALYTICS = "view waiting room analytics", l.GENERATE_PREVIEW = "generate waiting room preview link", l
			}({});
			const d = async l => {
				await o().sendEvent(l, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				N3: function() {
					return u
				},
				P: function() {
					return n
				},
				Xh: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(r) {
				for (var i = 1; i < arguments.length; i++) {
					var p = arguments[i] != null ? Object(arguments[i]) : {},
						c = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(p).filter(function(m) {
						return Object.getOwnPropertyDescriptor(p, m).enumerable
					})), c.forEach(function(m) {
						d(r, m, p[m])
					})
				}
				return r
			}

			function d(r, i, p) {
				return i = l(i), i in r ? Object.defineProperty(r, i, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = p, r
			}

			function l(r) {
				var i = g(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function g(r, i) {
				if (typeof r != "object" || r === null) return r;
				var p = r[Symbol.toPrimitive];
				if (p !== void 0) {
					var c = p.call(r, i || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}
			const s = "TURNSTILE";
			let u = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const E = ({
					name: r,
					product: i = s,
					category: p = "user journey",
					page: c,
					additionalData: m = {}
				}) => {
					o().sendEvent(r, a({
						category: p,
						page: c,
						product: i
					}, m || {}))
				},
				n = () => {
					var r;
					return (r = Object.values(u)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				d: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				default: (0, e.BC)`/${"accountId"}/`,
				home: (0, e.BC)`/${"accountId"}/home`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`,
				websites: (0, e.BC)`/${"accountId"}/websites`
			}
		},
		"../react/pages/zone-versioning/selectors.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				$e: function() {
					return w
				},
				$h: function() {
					return h
				},
				G: function() {
					return C
				},
				M3: function() {
					return N
				},
				Tr: function() {
					return T
				},
				UY: function() {
					return m
				},
				bH: function() {
					return r
				},
				fv: function() {
					return P
				},
				hF: function() {
					return S
				},
				iw: function() {
					return p
				},
				m7: function() {
					return n
				},
				re: function() {
					return f
				},
				tp: function() {
					return c
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				o = t("../../../../node_modules/reselect/lib/index.js"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				d = t("../react/app/components/SidebarNav/permissions.ts"),
				l = t("../react/common/selectors/entitlementsSelectors.ts");

			function g(I) {
				for (var L = 1; L < arguments.length; L++) {
					var B = arguments[L] != null ? Object(arguments[L]) : {},
						U = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(B).filter(function(H) {
						return Object.getOwnPropertyDescriptor(B, H).enumerable
					})), U.forEach(function(H) {
						s(I, H, B[H])
					})
				}
				return I
			}

			function s(I, L, B) {
				return L = u(L), L in I ? Object.defineProperty(I, L, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[L] = B, I
			}

			function u(I) {
				var L = E(I, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function E(I, L) {
				if (typeof I != "object" || I === null) return I;
				var B = I[Symbol.toPrimitive];
				if (B !== void 0) {
					var U = B.call(I, L || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(I)
			}
			const n = I => (0, a.nA)(I) ? (0, l.p1)(I) && (0, d.$n)(I, "zone_versioning", "versioning") : !1,
				r = I => I.zoneVersioning.zoneApplications,
				i = (0, e.P1)("zoneApplications", r),
				p = I => I.zoneVersioning.zoneVersions,
				c = (0, e.P1)("zoneVersions", p),
				m = (0, o.P1)(c, I => {
					if (I) return I.filter(L => L.status == "V")
				}),
				_ = I => I.zoneVersioning.environments,
				T = I => I.zoneVersioning.environments.isRequesting,
				A = (0, e.P1)("environments", _),
				h = (0, o.P1)(i, I => {
					if (I) {
						if (I.length === 1) return I[0];
						I.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${I.length}`))
					}
					return null
				}),
				S = (0, o.P1)(A, I => I ? I.environments : []),
				f = I => {
					var L;
					return (L = I.zoneVersioning) === null || L === void 0 ? void 0 : L.zoneVersionSelector
				},
				C = (0, o.P1)(f, c, (I, L) => {
					if (!(I == null ? void 0 : I.isVersion) || !L) return null;
					const B = L.find(U => {
						if (U.version === I.selectedVersion && U.locked) return !0
					});
					return B ? g({}, B, {
						isLocked: !0
					}) : null
				}),
				w = (0, o.P1)(c, S, (I, L) => !L || !I ? [] : I.map(B => {
					const U = [];
					for (const H in L) L[H].version === B.version && U.push(L[H]);
					return g({}, B, {
						environments: U
					})
				})),
				O = I => I.zoneVersioning.WAFMigrationStatus,
				N = (0, e.P1)("WAFMigrationStatus", O),
				P = I => I.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				$2: function() {
					return w
				},
				CI: function() {
					return f
				},
				IS: function() {
					return s
				},
				L7: function() {
					return l
				},
				Oj: function() {
					return i
				},
				QV: function() {
					return c
				},
				X$: function() {
					return h
				},
				X6: function() {
					return E
				},
				d4: function() {
					return p
				},
				fE: function() {
					return u
				},
				im: function() {
					return T
				},
				lv: function() {
					return m
				},
				rL: function() {
					return n
				},
				wW: function() {
					return g
				}
			});

			function e(O) {
				for (var N = 1; N < arguments.length; N++) {
					var P = arguments[N] != null ? Object(arguments[N]) : {},
						I = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(P).filter(function(L) {
						return Object.getOwnPropertyDescriptor(P, L).enumerable
					})), I.forEach(function(L) {
						o(O, L, P[L])
					})
				}
				return O
			}

			function o(O, N, P) {
				return N = a(N), N in O ? Object.defineProperty(O, N, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[N] = P, O
			}

			function a(O) {
				var N = d(O, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function d(O, N) {
				if (typeof O != "object" || O === null) return O;
				var P = O[Symbol.toPrimitive];
				if (P !== void 0) {
					var I = P.call(O, N || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(O)
			}
			const l = {
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
				g = 800,
				s = "40rem",
				u = {
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
				E = {
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
				p = {
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
				c = {
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
					selectTemplate: "select workers template",
					templateStubWorkerCreated: "template stub worker created",
					templateStubWorkerCreationFailed: "template stub worker creation failed",
					templateRepositoryCreated: "template repository created",
					templateRepositoryCreationFailed: "template repository creation failed",
					copyTemplateC3Command: "template copy c3 command",
					templateDeployClick: "template deploy click",
					reauthenticateGithubModalShown: "reauthenticate github modal shown",
					updateGithubPermissionsClicked: "update github permissions clicked"
				},
				m = {
					insufficientData: "insufficient data to create/update trigger",
					createRepoConnectionError: "error creating repo connection",
					createTokenError: "error creating token",
					createUpdateTriggerError: "error creating/updating trigger",
					updateEnvironmentVariablesError: "error updating trigger environment variables",
					createWorkerError: "error creating worker",
					buildWorkerError: "error building worker"
				},
				_ = "workers.dev",
				T = "YYYY-MM-DD HH:mm:SS ZZ",
				A = "active",
				h = ["bundled", "unbound", "standard"],
				S = null,
				f = {
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let C = function(O) {
				return O[O.NONE = 0] = "NONE", O[O.MISS = 1] = "MISS", O[O.EXPIRED = 2] = "EXPIRED", O[O.UPDATING = 3] = "UPDATING", O[O.STALE = 4] = "STALE", O[O.HIT = 5] = "HIT", O[O.IGNORED = 6] = "IGNORED", O[O.BYPASS = 7] = "BYPASS", O[O.REVALIDATED = 8] = "REVALIDATED", O[O.DYNAMIC = 9] = "DYNAMIC", O[O.STREAM_HIT = 10] = "STREAM_HIT", O[O.DEFERRED = 11] = "DEFERRED", O
			}({});
			const w = [C.HIT, C.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return s
				},
				L: function() {
					return a
				},
				Q9: function() {
					return d
				},
				_j: function() {
					return l
				},
				ky: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = u => `${u}.workers.dev`,
				a = (u, E, n) => `${n?`${n}.`:""}${u}.${o(E)}`,
				d = (u, E, n) => `https://${a(u,E,n)}`,
				l = {
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
					serviceDetailsSettingsObservabilityV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings?setupObservability=true`,
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
				g = "https://cron-triggers.cloudflareworkers.com",
				s = {
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
						workerTriggers: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/triggers`,
						configAutofill: (0, e.BC)`/accounts/${"accountId"}/builds/repos/${"providerType"}/${"providerAccountId"}/${"repoId"}/config_autofill?branch=${"branch"}&root_directory=${"rootDirectory"}`,
						accountLimits: (0, e.BC)`/accounts/${"accountId"}/builds/account/limits`
					},
					certificates: (0, e.BC)`/zones/${"zoneId"}/ssl/certificate_packs/${"certId"}`,
					createApiToken: (0, e.BC)`/user/tokens`,
					createTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails`,
					deleteApiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					deleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails/${"tailId"}`,
					deployments: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/deployments`,
					describeCron: `${g}/describe`,
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
					newVersions: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/versions`,
					nextCron: `${g}/next`,
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
					validateCron: `${g}/validate`,
					versions: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}`,
					version: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}/detail/${"versionTag"}`,
					workersObservability: {
						telemetry: {
							query: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/query`,
							keys: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/keys`,
							values: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/values`
						},
						usage: (0, e.BC)`/accounts/${"accountId"}/workers/observability/usage`,
						usageStatuses: (0, e.BC)`/accounts/${"accountId"}/workers/observability/usage-statuses`,
						liveTail: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/live-tail`
					},
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				MN: function() {
					return a
				},
				Yg: function() {
					return l
				},
				i$: function() {
					return d
				},
				l3: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const a = async ([s, u]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: s,
					variables: u
				})
			})).body, d = async (...s) => (await e.get(...s)).body, l = s => async (u, E) => {
				const n = await fetch(u, E).then(r => r.json());
				return s.assertDecode(n)
			}, g = async (...s) => (await d(...s)).result;
			y.ZP = {
				fetcher: s => Array.isArray(s) ? g(...s) : g(s)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(x, y) {
				y()
			})(this, function() {
				"use strict";

				function x() {
					var t = !0,
						e = !1,
						o = null,
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

					function d(_) {
						return !!(_ && _ !== document && _.nodeName !== "HTML" && _.nodeName !== "BODY" && "classList" in _ && "contains" in _.classList)
					}

					function l(_) {
						var T = _.type,
							A = _.tagName;
						return !!(A == "INPUT" && a[T] && !_.readOnly || A == "TEXTAREA" && !_.readOnly || _.isContentEditable)
					}

					function g(_) {
						_.getAttribute("is-focus-visible") !== "" && _.setAttribute("is-focus-visible", "")
					}

					function s(_) {
						_.getAttribute("is-focus-visible") === "" && _.removeAttribute("is-focus-visible")
					}

					function u(_) {
						d(document.activeElement) && g(document.activeElement), t = !0
					}

					function E(_) {
						t = !1
					}

					function n(_) {
						!d(_.target) || (t || l(_.target)) && g(_.target)
					}

					function r(_) {
						!d(_.target) || _.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), s(_.target))
					}

					function i(_) {
						document.visibilityState == "hidden" && (e && (t = !0), p())
					}

					function p() {
						document.addEventListener("mousemove", m), document.addEventListener("mousedown", m), document.addEventListener("mouseup", m), document.addEventListener("pointermove", m), document.addEventListener("pointerdown", m), document.addEventListener("pointerup", m), document.addEventListener("touchmove", m), document.addEventListener("touchstart", m), document.addEventListener("touchend", m)
					}

					function c() {
						document.removeEventListener("mousemove", m), document.removeEventListener("mousedown", m), document.removeEventListener("mouseup", m), document.removeEventListener("pointermove", m), document.removeEventListener("pointerdown", m), document.removeEventListener("pointerup", m), document.removeEventListener("touchmove", m), document.removeEventListener("touchstart", m), document.removeEventListener("touchend", m)
					}

					function m(_) {
						_.target.nodeName.toLowerCase() !== "html" && (t = !1, c())
					}
					document.addEventListener("keydown", u, !0), document.addEventListener("mousedown", E, !0), document.addEventListener("pointerdown", E, !0), document.addEventListener("touchstart", E, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", i, !0), p(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function y(t) {
					var e;

					function o() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && y(x)
			})
		},
		"../react/utils/bootstrap.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
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
					return a
				}
			});
			const e = () => {
					var l, g, s;
					return (l = window) === null || l === void 0 || (g = l.bootstrap) === null || g === void 0 || (s = g.data) === null || s === void 0 ? void 0 : s.security_token
				},
				o = () => {
					var l, g, s;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (g = l.data) === null || g === void 0 || (s = g.user) === null || s === void 0 ? void 0 : s.id)
				},
				a = () => {
					var l, g;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (g = l.data) === null || g === void 0 ? void 0 : g.is_kendo)
				},
				d = () => {
					var l, g, s, u;
					return (l = window) === null || l === void 0 || (g = l.bootstrap) === null || g === void 0 || (s = g.data) === null || s === void 0 || (u = s.user) === null || u === void 0 ? void 0 : u.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				O5: function() {
					return d
				},
				Xm: function() {
					return a
				},
				kT: function() {
					return s
				},
				wV: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				a = () => (o() || "").indexOf("C0002") !== -1,
				d = () => (o() || "").indexOf("C0003") !== -1,
				l = () => (o() || "").indexOf("C0004") !== -1,
				g = () => (o() || "").indexOf("C0005") !== -1,
				s = n => {
					const r = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				u = () => {
					var n;
					const r = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				E = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				AI: function() {
					return S
				},
				Kd: function() {
					return r
				},
				S8: function() {
					return h
				},
				ZW: function() {
					return u
				},
				ay: function() {
					return f
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
					return s
				},
				ti: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				a = t("../../../common/intl/intl-types/src/index.ts"),
				d = t("../../../common/util/types/src/utils/index.ts"),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				g = t("../../../../node_modules/cookie/index.js");
			const s = "cf-sync-locale-with-cps",
				u = a.Q.en_US,
				E = "en_US",
				n = "cf-locale";

			function r() {
				const N = (0, g.parse)(document.cookie);
				return l.Z.get(n) || N[n] || null
			}

			function i(N) {
				document.cookie = (0, g.serialize)(n, N, {
					path: "/",
					maxAge: 31536e3
				}), l.Z.set(n, N)
			}

			function p() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const c = N => (0, d.Yd)(a.Q).find(P => a.Q[P] === N) || E,
				m = [],
				_ = [],
				T = [a.Q.de_DE, a.Q.en_US, a.Q.es_ES, a.Q.fr_FR, a.Q.it_IT, a.Q.pt_BR, a.Q.ko_KR, a.Q.ja_JP, a.Q.zh_CN, a.Q.zh_TW],
				A = {
					test: [...T, ..._, ...m],
					development: [...T, ..._, ...m],
					staging: [...T, ..._, ...m],
					production: [...T, ..._]
				},
				h = N => {
					const P = a.Q[N];
					return A.production.includes(P)
				},
				S = () => Object.keys(a.Q).filter(N => h(N)),
				f = N => {
					const P = a.Q[N];
					return _.includes(P)
				},
				C = N => w[N],
				w = {
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
				O = o().locale();
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
			}), o().locale(O)
		},
		"../react/utils/translator.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				QT: function() {
					return c
				},
				Vb: function() {
					return u
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return s
				},
				_m: function() {
					return r
				},
				cC: function() {
					return i
				},
				oc: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = t("../../../common/intl/intl-core/src/Translator.ts"),
				a = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				d = t.n(a),
				l = t("../flags.ts");
			const g = new o.Z({
				pseudoLoc: (0, l.J8)("is_pseudo_loc")
			});

			function s(m, ..._) {
				return g.t(m, ..._)
			}
			const u = g;

			function E(m, ..._) {
				return markdown(s(m, _))
			}

			function n(m) {
				if (Number(m) !== 0) {
					if (m % 86400 == 0) return s("time.num_days", {
						smart_count: m / 86400
					});
					if (m % 3600 == 0) return s("time.num_hours", {
						smart_count: m / 3600
					});
					if (m % 60 == 0) return s("time.num_minutes", {
						smart_count: m / 60
					})
				}
				return s("time.num_seconds", {
					smart_count: m
				})
			}

			function r(m, _) {
				return m in _ ? _[m] : void 0
			}
			const i = a.Trans,
				p = a.I18n,
				c = a.useI18n
		},
		"../react/utils/url.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Ct: function() {
					return f
				},
				Fl: function() {
					return F
				},
				KT: function() {
					return ue
				},
				NF: function() {
					return _
				},
				Nw: function() {
					return h
				},
				Pd: function() {
					return A
				},
				Uh: function() {
					return Q
				},
				Y_: function() {
					return m
				},
				e1: function() {
					return S
				},
				el: function() {
					return B
				},
				hW: function() {
					return H
				},
				pu: function() {
					return ee
				},
				qR: function() {
					return L
				},
				td: function() {
					return T
				},
				uW: function() {
					return Ee
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				d = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/r2/routes.ts"),
				g = t("../react/pages/zoneless-workers/routes.ts"),
				s = t("../react/pages/pages/routes.ts"),
				u = t("../react/pages/d1/routes.ts");

			function E(K) {
				for (var q = 1; q < arguments.length; q++) {
					var $ = arguments[q] != null ? Object(arguments[q]) : {},
						X = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols($).filter(function(W) {
						return Object.getOwnPropertyDescriptor($, W).enumerable
					})), X.forEach(function(W) {
						n(K, W, $[W])
					})
				}
				return K
			}

			function n(K, q, $) {
				return q = r(q), q in K ? Object.defineProperty(K, q, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[q] = $, K
			}

			function r(K) {
				var q = i(K, "string");
				return typeof q == "symbol" ? q : String(q)
			}

			function i(K, q) {
				if (typeof K != "object" || K === null) return K;
				var $ = K[Symbol.toPrimitive];
				if ($ !== void 0) {
					var X = $.call(K, q || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (q === "string" ? String : Number)(K)
			}
			const {
				endsWithSlash: p
			} = a.default, c = (K, q) => {
				const $ = K.replace(p, "").split("/");
				return $.slice(0, 2).concat([q]).concat($.slice(3)).join("/")
			}, m = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), _ = K => `/${K.replace(p,"").replace(/^\//,"")}`, T = K => h("add-site", K), A = K => h("billing", K), h = (K, q) => q ? `/${q}${K?`/${K}`:""}` : `/?to=/:account/${K}`, S = () => {
				const K = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return K ? K[1] : null
			}, f = (K, q) => o().stringify(E({}, o().parse(K), q)), C = (K = "") => K.toString().replace(/([\/]{1,})$/, ""), w = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], O = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, N = /^\/(\w{32,})(\/[^.]*)?/, P = K => w.includes(K), I = K => !P(K), L = K => !P(K) && N.test(K), B = K => !P(K) && O.test(K), U = K => O.exec(K), H = K => {
				if (B(K)) return K.split("/").filter(q => q.length > 0)[1]
			}, le = K => N.exec(K), Ee = K => {
				if (L(K)) {
					const q = le(K);
					if (q) return q[1]
				}
			}, ae = K => L(K) && K.split("/")[2] === "register-domain", me = K => ae(K) ? K.split("/") : null, Z = K => {
				if (B(K)) {
					const [, , , q, $, X, W, te] = K.split("/");
					return q === "traffic" && $ === "load-balancing" && X === "pools" && W === "edit" && te
				}
			}, Q = K => {
				const q = me(K);
				if (q) return q[3]
			}, G = (K, q) => {
				var $, X;
				return (($ = K.pattern.match(/\:/g)) !== null && $ !== void 0 ? $ : []).length - ((X = q.pattern.match(/\:/g)) !== null && X !== void 0 ? X : []).length
			}, b = [...Object.values(d.C), ...Object.values(l._j), ...Object.values(g._j), ...Object.values(s._j), ...Object.values(u._)].sort(G);

			function F(K) {
				if (!I(K)) return K;
				for (const te of b)
					if (te.expression.test(K)) return te.pattern;
				const q = me(K);
				if (q) {
					const [, , te, , ...ye] = q;
					return `/:accountId/${te}/:domainName/${ye.join("/")}`
				}
				if (Z(K)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const X = U(K);
				if (X) {
					const [, , , , te] = X;
					return `/:accountId/:zoneName${te||""}`
				}
				const W = le(K);
				if (W) {
					const [, , te] = W;
					return `/:accountId${te||""}`
				}
				return K
			}

			function ee(K) {
				if (!!K) try {
					const $ = K.split(".").pop();
					if ($ && $.length > 0) return $
				} catch {}
			}

			function ue(K, q = document.location.href) {
				try {
					const $ = new URL(K),
						X = new URL(q);
					if ($.origin === X.origin) return `${$.pathname}${$.search}${$.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return s
				},
				y: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				d = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(d);
			const g = /^\/domainconnect\/v2\/domaintemplates\//i,
				s = "domain-connect-redirect",
				u = () => {
					const E = (0, d.useLocation)();
					(0, e.useEffect)(() => {
						g.test(E.pathname) && a.Z.set(s, E, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(x, y, t) {
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
		"../react/utils/zoneLevelAccess.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				P: function() {
					return d
				},
				b: function() {
					return l
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				o = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function a() {
				var g, s, u, E, n, r;
				return (g = window) === null || g === void 0 || (s = g.bootstrap) === null || s === void 0 || (u = s.data) === null || u === void 0 || (E = u.user) === null || E === void 0 || (n = E.betas) === null || n === void 0 || (r = n.some) === null || r === void 0 ? void 0 : r.call(n, i => i === "zone_level_access_beta")
			}

			function d() {
				const g = !!(0, e.Z)("zone-level-access");
				return a() || g
			}

			function l(g) {
				const s = !!(0, o.z1)("zone-level-access")(g);
				return a() || s
			}
		},
		"../utils/getDashVersion.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				p: function() {
					return a
				},
				t: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var d, l;
					return (d = window) === null || d === void 0 || (l = d.build) === null || l === void 0 ? void 0 : l.dashVersion
				},
				a = () => {
					var d;
					return ((0, e.parse)((d = document) === null || d === void 0 ? void 0 : d.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Wi: function() {
					return Te
				},
				IM: function() {
					return de
				},
				yV: function() {
					return gt
				},
				Ug: function() {
					return it
				},
				v_: function() {
					return z
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				a = t("../react/utils/bootstrap.ts"),
				d = t("../react/app/providers/storeContainer.js"),
				l = t("../react/common/selectors/languagePreferenceSelector.ts"),
				g = t("../flags.ts"),
				s = t("../../../../node_modules/cookie/index.js"),
				u = t("../react/utils/url.ts"),
				E = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../../../../node_modules/lodash-es/memoize.js"),
				i = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				p = t("../utils/getDashVersion.ts"),
				c = t("../react/common/selectors/accountSelectors.ts"),
				m = t("../react/common/selectors/entitlementsSelectors.ts");

			function _(ne) {
				for (var se = 1; se < arguments.length; se++) {
					var he = arguments[se] != null ? Object(arguments[se]) : {},
						k = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(he).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(he, oe).enumerable
					})), k.forEach(function(oe) {
						T(ne, oe, he[oe])
					})
				}
				return ne
			}

			function T(ne, se, he) {
				return se = A(se), se in ne ? Object.defineProperty(ne, se, {
					value: he,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[se] = he, ne
			}

			function A(ne) {
				var se = h(ne, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function h(ne, se) {
				if (typeof ne != "object" || ne === null) return ne;
				var he = ne[Symbol.toPrimitive];
				if (he !== void 0) {
					var k = he.call(ne, se || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(ne)
			}
			const S = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				f = (0, r.Z)(ne => {
					try {
						return S.assertDecode((0, s.parse)(ne))
					} catch (se) {
						return console.error(se), {}
					}
				}),
				C = ne => (se, he, k) => {
					try {
						const Ve = window.location.pathname,
							Je = (0, d.bh)().getState(),
							qe = f(document.cookie),
							vt = _({
								page: (0, u.Fl)(k.page || window.location.pathname),
								dashVersion: (0, p.t)()
							}, qe);
						if (se === "identify") {
							var oe, ve;
							const ut = {
								gates: (0, i.T2)(Je) || {},
								country: (oe = t.g) === null || oe === void 0 || (ve = oe.bootstrap) === null || ve === void 0 ? void 0 : ve.ip_country
							};
							return ne(se, he, _({}, vt, ut, k))
						} else {
							const ut = {
								accountId: (0, u.uW)(Ve),
								zoneName: (0, u.hW)(Ve),
								domainName: (0, u.Uh)(Ve)
							};
							if ((0, u.qR)(Ve)) {
								var De;
								const et = (0, c.D0)(Je);
								ut.isEntAccount = !!(et == null || (De = et.meta) === null || De === void 0 ? void 0 : De.has_enterprise_zones) || (0, m.p1)(Je)
							}
							if ((0, u.el)(Ve)) {
								var Re;
								const et = (0, E.nA)(Je);
								ut.zoneId = et == null ? void 0 : et.id, ut.plan = et == null || (Re = et.plan) === null || Re === void 0 ? void 0 : Re.legacy_id
							}
							return ne(se, he, _({}, vt, ut, k))
						}
					} catch (Ve) {
						return console.error(Ve), ne(se, he, k)
					}
				},
				w = ne => async (se, he, k) => {
					try {
						return await ne(se, he, k)
					} catch (oe) {
						if (console.error(oe), !z()) throw oe;
						return {
							status: "rejected",
							reason: oe
						}
					}
				};
			var O = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				N = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				P = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				I = t("../react/common/middleware/sparrow/errors.ts"),
				L = t("../react/pages/caching/tracking.tsx"),
				B = t("../react/pages/home/domain-registration/tracking.ts"),
				U = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				H = t("../react/pages/hyperdrive/tracking.ts"),
				le = t("../react/pages/magic/overview/tracking.ts"),
				Ee = t("../react/pages/magic/packet-captures/constants.ts"),
				ae = t("../react/pages/page-rules/tracking.ts"),
				me = t("../react/pages/pages/constants.ts"),
				Z = t("../react/pages/pipelines/tracking.ts"),
				Q = t("../react/pages/security-center/BlockedContent/constants.ts"),
				G = t("../react/pages/security-center/tracking.ts"),
				b = t("../react/pages/security/api-shield/tracking.ts"),
				F = t("../react/pages/security/bots/tracking.ts"),
				ee = t("../react/pages/security/resources/constants.tsx"),
				ue = t("../react/pages/security/page-shield/resources/index.ts"),
				K = t("../react/pages/home/configurations/lists/tracking.ts"),
				q = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				$ = t("../react/pages/home/alerts/tracking.ts"),
				X = t("../react/pages/dns/dns-records/tracking.ts"),
				W = t("../react/pages/magic/network-monitoring/constants.ts"),
				te = t("../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts"),
				ye = t("../react/pages/security/settings/index.tsx"),
				Ae = t("../react/pages/shared-config/sparrowEvents.tsx"),
				Fe = t("../react/pages/spectrum/tracking.tsx"),
				xe = t("../react/pages/traffic/argo/tracking.ts"),
				$e = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Ke = t("../react/pages/turnstile/tracking.ts"),
				be = t("../react/pages/zoneless-workers/constants.ts"),
				Y = t("../react/app/components/AccountHome/tracking.ts"),
				re = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				ge = t("../react/pages/home/configurations/dns-settings/tracking.ts");
			const pe = ((ne, se, ...he) => n.eg.union([n.eg.literal(ne), n.eg.literal(se), ...he.map(k => n.eg.literal(k))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", Y.gX.SPARROW_PROJECTS_TABLE_CLICK, Y.gX.SPARROW_EMPTY_STATE_CTA_CLICK, Y.gX.SPARROW_PRODUCT_CARD_CLICK, Y.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", be.QV.clickedDownloadAnalytics, be.QV.clickedPrintAnalytics, be.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", be.QV.addWCITriggerToExistingWorker, be.QV.updateWCITrigger, be.QV.deleteWCITrigger, be.QV.addWCITriggerToNewWorker, be.QV.createWCIBuildForNewWorker, be.QV.completedWCIBuildForNewWorker, be.QV.changedDefaultConfigurations, me.QV.toggledPagesSmartPlacement, me.QV.downloadDemoProject, be.QV.clickCreateWorkerFromRepoNextStep, be.QV.clickCreateWorkerFromRepoPreviousStep, be.QV.clickCreateNewSCMConnection, be.QV.redirectFromSCMOAuth, be.QV.clickSubmitError, be.QV.selectTemplate, be.QV.templateStubWorkerCreated, be.QV.templateStubWorkerCreationFailed, be.QV.templateRepositoryCreated, be.QV.templateRepositoryCreationFailed, be.QV.copyTemplateC3Command, be.QV.templateDeployClick, be.QV.reauthenticateGithubModalShown, be.QV.updateGithubPermissionsClicked, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", F.N3.INITIAL_FETCH_SCORES, F.N3.FETCH_CONFIGURATION, F.N3.INITIAL_FETCH_TIME_SERIES, F.N3.INITIAL_FETCH_ATTRIBUTES, F.N3.UPDATE_SETTINGS, F.N3.DELETE_RULE, F.N3.UPDATE_RULE, F.N3.FETCH_RULES, F.N3.CONFIGURE_BOT_MANAGEMENT, F.N3.WAF_RULES_REDIRECT, U.F.TOGGLE_TCP_PROTECTION, U.F.GET_TCP_PROTECTION_PREFIXES, U.F.CREATE_TCP_PROTECTION_PREFIXES, U.F.CREATE_TCP_PROTECTION_PREFIX, U.F.UPDATE_TCP_PROTECTION_PREFIX, U.F.DELETE_TCP_PROTECTION_PREFIX, U.F.DELETE_TCP_PROTECTION_PREFIXES, U.F.GET_TCP_PROTECTION_ALLOWLIST, U.F.CREATE_TCP_PROTECTION_ALLOWLIST, U.F.UPDATE_TCP_PROTECTION_ALLOWLIST, U.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, U.F.DELETE_TCP_PROTECTION_ALLOWLIST, U.F.GET_SYN_PROTECTION_RULES, U.F.GET_SYN_PROTECTION_RULE, U.F.CREATE_SYN_PROTECTION_RULE, U.F.UPDATE_SYN_PROTECTION_RULE, U.F.DELETE_SYN_PROTECTION_RULE, U.F.GET_TCP_FLOW_PROTECTION_RULES, U.F.GET_TCP_FLOW_PROTECTION_RULE, U.F.CREATE_TCP_FLOW_PROTECTION_RULE, U.F.UPDATE_TCP_FLOW_PROTECTION_RULE, U.F.DELETE_TCP_FLOW_PROTECTION_RULE, U.F.GET_SYN_PROTECTION_FILTERS, U.F.GET_SYN_PROTECTION_FILTER, U.F.CREATE_SYN_PROTECTION_FILTER, U.F.UPDATE_SYN_PROTECTION_FILTER, U.F.DELETE_SYN_PROTECTION_FILTER, U.F.GET_TCP_FLOW_PROTECTION_FILTERS, U.F.GET_TCP_FLOW_PROTECTION_FILTER, U.F.CREATE_TCP_FLOW_PROTECTION_FILTER, U.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, U.F.DELETE_TCP_FLOW_PROTECTION_FILTER, U.F.GET_DNS_PROTECTION_RULES, U.F.GET_DNS_PROTECTION_RULE, U.F.CREATE_DNS_PROTECTION_RULE, U.F.UPDATE_DNS_PROTECTION_RULE, U.F.DELETE_DNS_PROTECTION_RULE, ue.FV.MANAGE_PAGE_SHIELD_POLICY, ue.FV.CONFIGURE_PAGE_SHIELD, ue.FV.VIEW_DETECTED_CONNECTIONS, ue.FV.VIEW_DETECTED_SCRIPTS, ue.FV.VIEW_PAGE_SHIELD_POLICIES, ue.FV.VIEW_PAGE_SHIELD_SETTINGS, ue.FV.OPEN_MUTABLE_VERSION_TOOLTIP, ue.FV.SHOW_MUTABLE_VERSION_TOOLTIP, K.y.CREATE_LIST, K.y.DELETE_LIST, K.y.ADD_LIST_ITEM, K.y.DELETE_LIST_ITEM, H.KO.PURCHASE_WORKERS_PAID, H.KO.LIST_CONFIGS, H.KO.CREATE_HYPERDRIVE_CONFIG, H.KO.VIEW_CONFIG_DETAILS, H.KO.UPDATE_CACHING_SETTINGS, H.KO.DELETE_HYPERDRIVE_CONFIG, H.KO.CLICK_HYPERDRIVE_DOCUMENTATION, H.KO.CLICK_GET_STARTED_GUIDE, H.KO.CLICK_CONNECTIVITY_GUIDES, H.KO.CLICK_QUICK_LINK, Fe.N.CNAME, Fe.N.IP_ADDRESS, Fe.N.LB, Fe.N.UPDATE_CNAME, Fe.N.UPDATE_IP_ADDRESS, Fe.N.UPDATE_LB, Fe.N.DISABLE, L.N.TIERED_CACHE, L.N.CACHE_PURGE, L.N.CACHE_ANALYTICS, ...(0, Ke.P)(), ...(0, P.x4)(), ...(0, ye.m8)(), $e.N.CREATE, $e.N.EVENTS, $e.N.ANALYTICS, $e.N.UPDATE, $e.N.GENERATE_PREVIEW, G.RY.INITIATE_URL_SCAN, G.RY.LOAD_SCAN_INFO, G.Ev.LOAD_THREAT_EVENTS, G.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, G.Ev.THREAT_EVENTS_FILTERS, G.v9.EXPAND_INSIGHT_ROW, G.v9.ONE_CLICK_RESOLVE_BUTTON, G.v9.FOLLOW_RESOLVE_URL, G.v9.MANAGE_INSIGHT, G.v9.CLICK_SCAN_NOW, G.v9.CLICK_EXPORT_INSIGHTS, G.v9.BULK_ARCHIVE, G.v9.CLICK_DETAILS_BUTTON, b.Fj[b.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, b.Fj[b.kq.ENDPOINT_MANAGEMENT].detailedMetrics, b.Fj[b.kq.ENDPOINT_MANAGEMENT].createEndpoint, b.Fj[b.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, b.Fj[b.kq.ENDPOINT_MANAGEMENT].deployRouting, b.Fj[b.kq.ENDPOINT_MANAGEMENT].deleteRouting, b.Fj[b.kq.API_DISCOVERY].viewDiscoveredEndpoints, b.Fj[b.kq.API_DISCOVERY].saveDiscoveredEndpoint, b.Fj[b.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, b.Fj[b.kq.SCHEMA_VALIDATION].viewSchemasList, b.Fj[b.kq.SCHEMA_VALIDATION].uploadSchema, b.Fj[b.kq.SCHEMA_VALIDATION].viewSchemaAdoption, b.Fj[b.kq.SCHEMA_VALIDATION].downloadSchema, b.Fj[b.kq.SCHEMA_VALIDATION].deleteSchema, b.Fj[b.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, b.Fj[b.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, b.Fj[b.kq.SEQUENCE_ANALYTICS].viewSequencesPage, b.Fj[b.kq.JWT_VALIDATION].viewJWTRules, b.Fj[b.kq.JWT_VALIDATION].addJWTRule, b.Fj[b.kq.JWT_VALIDATION].editJWTRule, b.Fj[b.kq.JWT_VALIDATION].deleteJWTRule, b.Fj[b.kq.JWT_VALIDATION].reprioritizeJWTRule, b.Fj[b.kq.JWT_VALIDATION].viewJWTConfigs, b.Fj[b.kq.JWT_VALIDATION].addJWTConfig, b.Fj[b.kq.JWT_VALIDATION].editJWTConfig, b.Fj[b.kq.JWT_VALIDATION].deleteJWTConfig, b.Fj[b.kq.SETTINGS].redirectToFirewallRulesTemplate, b.Fj[b.kq.SETTINGS].redirectToPages, b.Fj[b.kq.SETTINGS].listSessionIdentifiers, b.Fj[b.kq.SETTINGS].listRequestsContainingSessionIdentifiers, b.Fj[b.kq.SETTINGS].addOrRemoveSessionIdentifiers, b.Fj[b.kq.SETTINGS].redirectToCustomRules, b.Fj[b.kq.SETTINGS].listAllFallthroughSchemas, b.Fj[b.kq.SEQUENCE_RULES].listSequenceRules, b.Fj[b.kq.SEQUENCE_RULES].deleteSequenceRule, b.Fj[b.kq.SEQUENCE_RULES].reorderSequenceRule, b.Fj[b.kq.SEQUENCE_RULES].createSequenceRule, b.Fj[b.kq.SEQUENCE_RULES].editSequenceRule, q.Z.ANALYTICS, q.Z.CREATE_AND_DEPLOY, q.Z.CREATE_MONITOR_LINK, q.Z.CREATE_MONITOR, q.Z.CREATE_POOL_LINK, q.Z.CREATE_POOL, q.Z.EDIT_MONITOR, q.Z.EDIT_POOL, q.Z.LOAD_BALANCING_TABLE, q.Z.POOL_TABLE, q.Z.EDIT_MONITOR_LINK, q.Z.EDIT_POOL_LINK, $.y.SECONDARY_DNS_NOTIFICATION_CREATE, $.y.SECONDARY_DNS_NOTIFICATION_UPDATE, $.y.SECONDARY_DNS_NOTIFICATION_DELETE, X.U.ZONE_TRANSFER_SUCCESS, X.U.DNS_RECORD_CREATE, X.U.DNS_RECORD_UPDATE, X.U.DNS_RECORD_DELETE, ge.Y.PEER_DNS_CREATE, ge.Y.PEER_DNS_UPDATE, ge.Y.PEER_DNS_DELETE, ge.Y.ZONE_TRANSFER_ENABLE, ge.Y.ZONE_TRANSFER_DISABLE, xe.V.ARGO_ENABLEMENT, xe.V.ARGO_GEO_ANALYTICS_FETCH, xe.V.ARGO_GLOBAL_ANALYTICS_FETCH, Ee.X.VIEW_BUCKETS_LIST, Ee.X.CREATE_BUCKET, Ee.X.VALIDATE_BUCKET, Ee.X.DELETE_BUCKET, Ee.X.VIEW_CAPTURES_LIST, Ee.X.CREATE_SIMPLE_CAPTURE, Ee.X.CREATE_FULL_CAPTURE, Ee.X.VIEW_FULL_CAPTURE, Ee.X.DOWNLOAD_SIMPLE_CAPTURE, W.bK.VIEW_RULES, W.bK.CREATE_RULE, W.bK.UPDATE_RULE, W.bK.DELETE_RULE, W.bK.VIEW_CONFIGURATION, W.bK.CREATE_CONFIGURATION, W.bK.UPDATE_CONFIGURATION, W.bK.DELETE_CONFIGURATION, le.r8.VIEW_ALERTS, le.r8.VIEW_ALERTS_HISTORY, le.r8.MAGIC_OVERVIEW_ANALYTICS, le.VZ.CREATE_SITE, le.VZ.CREATE_TUNNEL, le.VZ.CREATE_STATIC_ROUTE, te.o4.CLICK_ADAPTIVE_SAMPLING, te.o4.CLICK_TO_LOG_EXPLORER_BANNER, te.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, te.o4.CLICK_SWITCH_TO_RAW_LOGS, te.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", B.U.REGISTER_DOMAIN_SEARCH_SUBMIT, B.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, B.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, B.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, B.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, B.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, B.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, B.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, B.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, B.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, B.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, B.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, B.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, B.U.REGISTER_DOMAIN_CHECKOUT_ERROR, B.U.TRANSFER_DOMAIN_CHANGE_STEP, B.U.RENEW_DOMAIN_COMPLETED, B.U.RESTORE_DOMAIN_INIT, B.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, B.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, B.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, B.U.RESTORE_DOMAIN_FAILURE, B.U.RESTORE_DOMAIN_COMPLETED, B.U.DOMAIN_DELETE_INIT, B.U.DOMAIN_DELETE_COMPLETED, B.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, B.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, B.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, B.U.DOMAIN_DELETE_CONFIRM_DELETE, B.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, B.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, B.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, B.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, B.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, B.U.DOMAIN_MOVE_START_FLOW, B.U.DOMAIN_MOVE_OPEN_DOCS, B.U.DOMAIN_MOVE_CLOSE_FLOW, B.U.DOMAIN_MOVE_PROGRESS_FLOW, B.U.DOMAIN_MOVE_SUBMIT, B.U.DOMAIN_MOVE_INITIATE_SUCCESS, B.U.DOMAIN_MOVE_INITIATE_ERROR, B.U.DOMAIN_MOVE_CANCEL, B.U.DOMAIN_MOVE_CANCEL_SUCCESS, B.U.DOMAIN_MOVE_CANCEL_ERROR, B.U.ACTION_CENTER_NAVIGATE, B.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, B.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, B.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, Z.KO.CLICK_GET_STARTED_GUIDE, Z.KO.CLICK_PIPELINE_DOCUMENTATION, Z.KO.CLICK_QUICK_LINK, Z.KO.CREATE_PIPELINE, Z.KO.DELETE_PIPELINE, Z.KO.LIST_PIPELINES, Z.KO.VIEW_PIPELINE, O.S.EXISTING_DOMAIN, O.S.NEW_DOMAIN, O.S.WAF_RULESET, O.S.WORKERS, O.S.PAGES, O.S.R2, O.S.ACCOUNT_MEMBERS, ae._.TEMPLATE_PRODUCT_SELECTED, ae._.TEMPLATE_SELECTED, ae._.TEMPLATE_SAVE_DRAFT, ae._.TEMPLATE_CANCEL, ae._.TEMPLATE_DEPLOY, Ae.D.CLICK_GO_BACK_SHARE_MODAL, Ae.D.CLICK_MENU_ITEM_SHARE, Ae.D.CLICK_ON_CANCEL_SHARE_MODAL, Ae.D.CLICK_ON_CLOSE_SHARE_MODAL, Ae.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, Ae.D.CLICK_ON_DELETE_RULESET, Ae.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, Ae.D.CLICK_ON_EDIT_SHARE_PERMISSION, Ae.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, Ae.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, Ae.D.CLICK_ON_SHARE_TABLE_ROW, ee.pR.CLICK_GEOGRAPHICAL_TEMPLATE, ee.pR.CLICK_IP_TEMPLATE, ee.pR.CLICK_USER_AGENT_TEMPLATE, ee.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, ye.vc.CREATED, ye.vc.ENABLED, ye.vc.DISABLED, ye.vc.DELETED, ye.vc.UPDATED, ye.vc.DOWNLOADED, Q.Gk.REQUEST_REVIEW, Q.Gk.COPY_URL, N.v.FIELD, N.v.OPERATOR, re.Vj.SHOW_LCC_MIGRATION_BANNER, re.Vj.CLICK_LCC_DOCUMENTATION, re.Vj.CLICK_LCC_UPGRADE_GUIDE, re.Vj.SHOW_LCC_MIGRATION_WARNING),
				Se = n.eg.exactStrict(n.eg.object({
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
					scm_type: n.eg.any.optional,
					existing_connection_total: n.eg.any.optional,
					invalid_fields: n.eg.any.optional,
					is_retry: n.eg.any.optional,
					changed_fields: n.eg.any.optional,
					rulesetName: n.eg.string.optional,
					isECCRuleset: n.eg.boolean.optional,
					isLCCEnabled: n.eg.boolean.optional,
					isECCEnabled: n.eg.boolean.optional
				})),
				ke = (ne, se) => {
					const [he, k] = Ge(se);
					let oe, ve;
					return (0, n.nM)(pe.decode(ne)) && (oe = new I.Uh(ne)), k && k.length > 0 && (ve = new I.oV(ne, k)), [he, oe, ve]
				},
				Ge = ne => {
					const se = Se.decode(ne);
					if ((0, n.nM)(se)) {
						const he = se.left.map(({
							context: k
						}) => k.map(({
							key: oe
						}) => oe)).reduce((k, oe) => k.concat(oe), []).filter(k => k in ne);
						return [Ie(he, ne), he]
					}
					return [ne, []]
				},
				Ie = (ne, se) => Object.entries(se).reduce((he, [k, oe]) => (ne.includes(k) || (he[k] = oe), he), {}),
				Be = ne => (se, he, k) => {
					const [oe, ve, De] = ke(he, k);
					if (ve) throw ve;
					return De && console.error(De), ne(se, he, oe)
				};
			var Ue = t("../react/utils/zaraz.ts");
			const We = {
					identify: !0
				},
				Ye = ne => (se, he, k) => (We[he] || Ue.tg === null || Ue.tg === void 0 || Ue.tg.track(he, k), ne(se, he, k));
			var V = t("../react/common/selectors/userSelectors.ts");
			const ie = "pageview",
				fe = "create zone",
				we = "create user",
				Ne = {
					[ie]: !0,
					[fe]: !0,
					[we]: !0
				},
				je = ne => {
					var se;
					return !!((se = ne.gates.assignments) === null || se === void 0 ? void 0 : se["dx-enable-google-tag-manager"])
				},
				Ze = ne => {
					const se = /\|MCMID\|([0-9]+)\|/,
						he = ne.match(se);
					return he ? he[1] : void 0
				},
				ot = ne => {
					var se;
					const {
						deviceViewport: he,
						page: k,
						previousPage: oe,
						pageName: ve,
						utm_campaign: De,
						_ga: Re,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Ve
					} = ne, {
						origin: Je
					} = window.location, qe = (0, V.PR)((0, d.bh)().getState());
					return {
						event: oe !== void 0 && k !== oe ? "virtual_page_view" : "page_load",
						device_type: he,
						hostname: Je,
						language: navigator.language,
						locale: (0, l.r)((0, d.bh)().getState()),
						page_location: k ? `${Je}${k}` : "[redacted]",
						page_path: k ? `${k}` : "[redacted]",
						page_referrer: oe ? `${Je}/${oe}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: ve || "[redacted]",
						page_url: k ? `${Je}${k}` : "[redacted]",
						query: De ? `?utm_campaign=${De}` : "[redacted]",
						user_properties: {
							ga_client_id: (se = Re) !== null && se !== void 0 ? se : void 0,
							ga_client_id_s: Re ? `s${Re}` : void 0,
							user_id: Te() ? qe == null ? void 0 : qe.id : void 0,
							ecid: Ve ? Ze(Ve) : void 0
						}
					}
				},
				lt = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				at = ne => {
					const {
						status: se
					} = ne;
					return se === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				dt = (ne, se) => {
					switch (ne) {
						case "pageview":
							return ot(se);
						case "create zone":
							return lt();
						case "create user":
							return at(se);
						default:
							return
					}
				},
				pt = ne => (se, he, k) => {
					if (Ne[he]) {
						var oe;
						const ve = dt(he, k);
						ve && ((oe = window.dataLayer) === null || oe === void 0 || oe.push(ve))
					}
					return ne(se, he, k)
				};
			var st = t("../react/utils/cookiePreferences.ts");

			function ze(ne) {
				for (var se = 1; se < arguments.length; se++) {
					var he = arguments[se] != null ? Object(arguments[se]) : {},
						k = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(he).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(he, oe).enumerable
					})), k.forEach(function(oe) {
						Oe(ne, oe, he[oe])
					})
				}
				return ne
			}

			function Oe(ne, se, he) {
				return se = Qe(se), se in ne ? Object.defineProperty(ne, se, {
					value: he,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[se] = he, ne
			}

			function Qe(ne) {
				var se = mt(ne, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function mt(ne, se) {
				if (typeof ne != "object" || ne === null) return ne;
				var he = ne[Symbol.toPrimitive];
				if (he !== void 0) {
					var k = he.call(ne, se || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(ne)
			}
			const it = ne => {
					const se = je((0, d.bh)().getState());
					o().init(ze({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: z() && !(0, a.gm)() && Te(),
						middlewares: [w, Be, C, Ye, ...se ? [pt] : []]
					}, ne))
				},
				gt = () => {
					o().identify(ze({}, (0, e.getAttribution)(), {
						locale: (0, l.r)((0, d.bh)().getState()),
						isCloudflare: !!(0, g.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				z = () => !0,
				de = () => {
					(0, st.kT)("sparrow_id")
				},
				Te = () => (0, st.Xm)()
		},
		"../utils/initStyles.ts": function(x, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = t("../react/app/providers/storeContainer.js");
			const a = "cfBaseStyles",
				d = document.head || document.getElementsByTagName("head")[0],
				l = s => {
					const u = [];
					for (let E in s.colors) {
						const n = s.colors[E];
						if (Array.isArray(n) && E !== "categorical")
							for (let r = 0; r < n.length; ++r) u.push(`--cf-${E}-${r}:${n[r]};`)
					}
					return u.join(`
`)
				},
				g = () => {
					const s = (0, e.Yc)(),
						u = `
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
      background-color: ${s?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${s?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${s?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${s?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${s?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${s?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
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
      ${l(e.Rl)}
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
					let E = document.getElementById(a);
					E ? E.innerText = "" : (E = document.createElement("style"), E.id = a, d.appendChild(E)), E.appendChild(document.createTextNode(u)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(g), y.Z = g
		},
		"../utils/sentry/lastSentEventId.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let a = "";
				return {
					setEventId: g => (!g || typeof g != "string" || (a = g), a),
					getEventId: () => a
				}
			})()
		},
		"../utils/zaraz.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Ro: function() {
					return r
				},
				bM: function() {
					return u
				},
				tg: function() {
					return s
				},
				yn: function() {
					return n
				}
			});

			function e(i) {
				for (var p = 1; p < arguments.length; p++) {
					var c = arguments[p] != null ? Object(arguments[p]) : {},
						m = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(c).filter(function(_) {
						return Object.getOwnPropertyDescriptor(c, _).enumerable
					})), m.forEach(function(_) {
						o(i, _, c[_])
					})
				}
				return i
			}

			function o(i, p, c) {
				return p = a(p), p in i ? Object.defineProperty(i, p, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[p] = c, i
			}

			function a(i) {
				var p = d(i, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function d(i, p) {
				if (typeof i != "object" || i === null) return i;
				var c = i[Symbol.toPrimitive];
				if (c !== void 0) {
					var m = c.call(i, p || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(i)
			}
			const l = {
					track: (i, p) => null,
					set: (i, p) => console.log(`zaraz.set(${i}, ${p})`)
				},
				g = {
					track: (i, p) => {
						var c;
						(c = window.zaraz) === null || c === void 0 || c.track(i, e({}, p, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (i, p) => {
						var c;
						return (c = window.zaraz) === null || c === void 0 ? void 0 : c.set(i, p)
					}
				};
			let s;
			const u = () => {
					window.zaraz, s = g
				},
				E = ["email", "first_name", "last_name"],
				n = i => {
					E.forEach(p => {
						var c;
						(c = s) === null || c === void 0 || c.set(p, i[p])
					})
				},
				r = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(x, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				d = t.n(a),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(g),
				u = t("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				E = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				r = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				p = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				c = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				m = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				_ = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				T = t("../../../common/component/component-filter-bar/src/constants.js"),
				A = t("../../../common/component/component-filter-bar/src/utils.js");

			function h() {
				return h = Object.assign ? Object.assign.bind() : function(G) {
					for (var b = 1; b < arguments.length; b++) {
						var F = arguments[b];
						for (var ee in F) Object.prototype.hasOwnProperty.call(F, ee) && (G[ee] = F[ee])
					}
					return G
				}, h.apply(this, arguments)
			}

			function S(G) {
				for (var b = 1; b < arguments.length; b++) {
					var F = arguments[b] != null ? Object(arguments[b]) : {},
						ee = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(F).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(F, ue).enumerable
					})), ee.forEach(function(ue) {
						f(G, ue, F[ue])
					})
				}
				return G
			}

			function f(G, b, F) {
				return b = C(b), b in G ? Object.defineProperty(G, b, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[b] = F, G
			}

			function C(G) {
				var b = w(G, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function w(G, b) {
				if (typeof G != "object" || G === null) return G;
				var F = G[Symbol.toPrimitive];
				if (F !== void 0) {
					var ee = F.call(G, b || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(G)
			}
			const O = 70,
				N = (0, l.createStyledComponent)(({
					showOverflow: G
				}) => S({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, G ? {} : {
					maxHeight: O,
					overflow: "hidden"
				})),
				P = (0, l.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				I = (0, l.createStyledComponent)(({
					theme: G
				}) => ({
					backgroundColor: G.colors.background,
					py: 1,
					px: 2,
					borderRadius: G.radii[2],
					border: `1px solid ${G.colors.gray[7]}`,
					fontSize: G.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: G.colors.gray[4]
					}
				}), "div"),
				L = (0, l.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				B = (0, l.createStyledComponent)(({
					theme: G
				}) => ({
					color: G.colors.gray[4],
					mr: 1
				}), "span"),
				U = (0, l.createStyledComponent)(() => ({
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
				H = (0, l.createStyledComponent)(({
					buttonStyle: G
				}) => S({
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
				}, G), E.zx),
				le = (0, l.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				Ee = (0, l.createStyledComponent)(({
					theme: G
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: G.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: G.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: G.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: G.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				ae = (0, l.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				me = G => G.current ? [...G.current.children].reduce((b, F) => (F.offsetTop >= O && b++, b), 0) : 0;
			let Z = 0;
			class Q extends e.Component {
				constructor() {
					super();
					f(this, "overflowWrapper", (0, e.createRef)()), f(this, "hasOverflowed", b => {
						const F = me(this.overflowWrapper);
						b.scrollHeight > O && F >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (b.scrollHeight < O || F === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), f(this, "addNewFilter", () => {
						const {
							filterDefinitions: b
						} = this.props, F = (0, A.TE)(b), ee = Object.keys(F)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: ee,
								operator: (0, A.uv)(ee, F),
								value: (0, A.TT)(ee, F)
							}
						})
					}), f(this, "handleOpenFilterEdit", b => {
						this.setState({
							openFilter: b,
							filterChanges: S({}, this.props.filters[b])
						})
					}), f(this, "handleRemoveFilterClick", (b, F) => {
						b.stopPropagation(), this.removeFilter(F)
					}), f(this, "removeFilter", b => {
						const {
							handleFiltersChange: F
						} = this.props, ee = [...this.props.filters], ue = ee[b];
						ee.splice(b, 1), F(ee), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: ue.key,
							operator: ue.operator,
							value: ue.value
						})
					}), f(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), f(this, "handleFilterSubmit", b => {
						const {
							filterDefinitions: F
						} = this.props;
						b.preventDefault();
						const {
							filterChanges: ee
						} = this.state, ue = typeof F[ee.key].parse == "function" ? Array.isArray(ee.value) ? ee.value.map(F[ee.key].parse) : F[ee.key].parse(ee.value) : ee.value;
						if (F[ee.key].validate && (Array.isArray(ue) ? !ue.every(F[ee.key].validate) : !F[ee.key].validate(ue))) return this.setState({
							invalid: !0
						});
						const K = [...this.props.filters],
							q = S({}, ee, {
								value: ue
							}),
							$ = !K[this.state.openFilter];
						$ ? K.push(q) : K[this.state.openFilter] = S({}, ee), this.props.handleFiltersChange(K, q), ($ ? this.props.onAddFilter : this.props.onEditFilter)({
							field: q.key,
							operator: q.operator,
							value: q.value
						}), this.closeOpenFilterChanges()
					}), f(this, "handlePendingKeyChange", ({
						value: b
					}) => {
						const {
							filterDefinitions: F
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: b,
								operator: (0, A.uv)(b, F),
								value: (0, A.TT)(b, F)
							}
						})
					}), f(this, "handlePendingOperatorChange", ({
						value: b
					}) => {
						let F = S({}, this.state.filterChanges, {
							operator: b
						});
						if ((0, A.dr)(b)) {
							var ee, ue;
							((ee = this.state.filterChanges) === null || ee === void 0 ? void 0 : ee.value) && !Array.isArray((ue = this.state.filterChanges) === null || ue === void 0 ? void 0 : ue.value) && (F.value = [this.state.filterChanges.value])
						} else {
							var K, q, $;
							((K = this.state.filterChanges) === null || K === void 0 ? void 0 : K.value) && Array.isArray((q = this.state.filterChanges) === null || q === void 0 ? void 0 : q.value) && (($ = this.state.filterChanges) === null || $ === void 0 ? void 0 : $.value.length) > 0 && (F.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: F
						})
					}), f(this, "handlePendingValueChange", b => {
						this.setState({
							invalid: !1,
							filterChanges: S({}, this.state.filterChanges, {
								value: b
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
						id: ++Z
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(b) {
					b.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(b) {
					const {
						formatLabel: F,
						filterDefinitions: ee
					} = this.props, {
						operator: ue
					} = this.state.filterChanges, K = ee[this.state.filterChanges.key], q = this.state.filterChanges.value, $ = W => Array.isArray(W) ? W.map(te => te.value) : (W == null ? void 0 : W.value) || null;
					if (K.renderValueComponent) return K.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (K.type) {
						case T.k.custom: {
							var X;
							return o().createElement(K.CustomComponent, h({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (X = K == null ? void 0 : K.customProps) !== null && X !== void 0 ? X : {}))
						}
						case T.k.select:
							return (0, A.dr)(ue) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !K.options,
								value: typeof q.split == "function" ? q == null ? void 0 : q.split(",") : Array.isArray(q) ? q : [],
								options: K.options ? K.options.map(W => ({
									value: W.value || W,
									label: W.label || F(this.state.filterChanges.key, W, b)
								})) : q ? (Array.isArray(q) ? q : q.split(",")).map(W => ({
									label: W,
									value: W
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(g.Trans, {
									id: K.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: K.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: W => {
									this.handlePendingValueChange($(W))
								},
								isValidNewOption: W => {
									const te = K.validate;
									return !te && W || W && te([W])
								},
								getNewOptionData: (W, te) => ({
									value: W,
									label: te
								})
							}) : o().createElement(i.hQ, {
								hideLabel: !0,
								value: q,
								options: K.options.map(W => ({
									value: W,
									label: F(this.state.filterChanges.key, W, b)
								})),
								onChange: ({
									value: W
								}) => this.handlePendingValueChange(W)
							});
						case T.k.string:
						default:
							return (0, A.dr)(ue) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof q.split == "function" ? q == null ? void 0 : q.split(",") : Array.isArray(q) ? q : [],
								options: q ? (Array.isArray(q) ? q : q.split(",")).map(W => ({
									label: W,
									value: W
								})) : [],
								noOptionsMessage: () => null,
								placeholder: b.t("analytics.report.filters.labels.placeholder", {
									example: ee[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: W => {
									this.handlePendingValueChange($(W))
								},
								isValidNewOption: W => {
									const te = K.validate;
									return !te && W || W && te([W])
								},
								getNewOptionData: (W, te) => ({
									value: W,
									label: te
								}),
								formatCreateLabel: W => b.t("filter_editor.value_create_label", {
									value: W
								})
							}) : o().createElement(g.I18n, null, W => o().createElement(u.I, {
								value: this.state.filterChanges.value,
								onChange: te => this.handlePendingValueChange(te.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: W.t("analytics.report.filters.labels.placeholder", {
									example: ee[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: b,
						filterDefinitions: F,
						modalStyles: ee,
						filterIconType: ue,
						buttonStyle: K
					} = this.props, q = me(this.overflowWrapper), $ = `filterPanel${this.state.id}`, X = this.state.openFilter !== null;
					return o().createElement(g.I18n, null, W => o().createElement(p.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(ae, null, o().createElement(H, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": X,
						"aria-controls": $,
						inverted: !0,
						buttonStyle: K
					}, o().createElement(n.J, {
						type: ue || "add",
						mr: 1,
						label: W.t("common.add", {
							_: "Add"
						})
					}), o().createElement(g.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(le, null, o().createElement(g.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(N, {
						innerRef: this.overflowWrapper,
						overflowLimit: O,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((te, ye) => {
						const {
							key: Ae,
							operator: Fe,
							value: xe
						} = te, $e = F[Ae].ignoreLabelTranslation ? F[Ae].label : W.t(F[Ae].label), Ke = W.t(`analytics.report.filters.operators.${Fe}`), be = Array.isArray(xe) ? xe.map(re => b(Ae, re, W)).join(", ") : b(Ae, xe, W), Y = `${$e} ${Ke} ${be}`;
						return o().createElement(P, {
							key: `${Ae}-${Fe}-${xe}`,
							title: Y
						}, o().createElement(I, {
							onClick: () => this.handleOpenFilterEdit(ye)
						}, o().createElement(p.ZC, {
							display: "flex"
						}, o().createElement(L, null, $e), o().createElement(B, null, Ke), o().createElement(U, null, be), (0, A.oN)(te, F) ? o().createElement(r.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(Ee, {
							onClick: re => this.handleRemoveFilterClick(re, ye),
							"aria-label": "remove"
						}, o().createElement(n.J, {
							type: "remove"
						})))))
					})), X && o().createElement(_.Z, {
						id: $,
						filterDefinitions: F,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, A.oN)(this.state.filterChanges, F),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: b,
						modalStyles: ee
					}), this.state.hasOverflowed && o().createElement(m.Z, {
						count: q,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			f(Q, "propTypes", {
				filterDefinitions: d().shape({}),
				filters: d().arrayOf(d().shape({
					key: d().string,
					operator: d().string,
					value: d().string
				})),
				handleFiltersChange: d().func.isRequired,
				formatLabel: d().func.isRequired,
				onAddFilter: d().func,
				onEditFilter: d().func,
				onRemoveFilter: d().func,
				children: d().node,
				modalStyles: d().object,
				filterIconType: d().string,
				buttonStyle: d().object
			}), y.Z = Q
		},
		"../../../common/component/component-filter-bar/src/index.js": function(x, y, t) {
			"use strict";
			t.d(y, {
				ME: function() {
					return o.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return a.k
				},
				oN: function() {
					return d.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				a = t("../../../common/component/component-filter-bar/src/constants.js"),
				d = t("../../../common/component/component-filter-bar/src/utils.js"),
				l = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				OZ: function() {
					return l
				},
				YB: function() {
					return d
				}
			});

			function e(s, u, E) {
				return u = o(u), u in s ? Object.defineProperty(s, u, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[u] = E, s
			}

			function o(s) {
				var u = a(s, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function a(s, u) {
				if (typeof s != "object" || s === null) return s;
				var E = s[Symbol.toPrimitive];
				if (E !== void 0) {
					var n = E.call(s, u || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(s)
			}
			class d extends Error {
				constructor(u, E) {
					super(E);
					e(this, "translationKey", void 0), this.translationKey = u, this.name = "TranslatorError"
				}
			}
			class l extends d {
				constructor(u) {
					super(u, `Translation key not found: ${u}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var g = null
		},
		"../../../common/util/types/src/api/domain.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Aw: function() {
					return w
				},
				Ib: function() {
					return f
				},
				Ks: function() {
					return O
				},
				MS: function() {
					return C
				},
				PN: function() {
					return m
				},
				Pp: function() {
					return d
				},
				Q3: function() {
					return p
				},
				TS: function() {
					return c
				},
				W7: function() {
					return A
				},
				dN: function() {
					return N
				},
				eF: function() {
					return S
				},
				qp: function() {
					return n
				},
				wR: function() {
					return E
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				a = e.eg.object({
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
				l = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				g = e.eg.object({
					registrant: d.optional,
					technical: d.optional,
					administrator: d.optional,
					billing: d.optional
				}),
				s = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: g.optional,
					years: e.eg.number
				}),
				u = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let E = function(P) {
				return P.ONBOARDING_INITIATED = "Onboarding Initiated", P.ONBOARDED = "Onboarded", P.PENDING_REGISTRY_LOCK = "Pending Registry Lock", P.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", P.REGISTRY_UNLOCKED = "Registry Unlocked", P.LOCKED = "Locked", P.FAILED_TO_LOCK = "Failed To Lock", P.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", P.UNLOCKED = "Unlocked", P.OFFBOARDED = "Offboarded", P
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
						status: e.eg.enum(E).optional
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
					transfer_conditions: l.optional,
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
				p = e.eg.object({
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
				c = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let m = function(P) {
				return P.PENDING = "pending", P.VERIFIED = "verified", P.REJECTED = "rejected", P.PENDING_DELETE = "pending_delete", P.DELETED = "deleted", P
			}({});
			const _ = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(m),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				T = e.eg.object({
					designated_approvers: e.eg.array(_)
				});
			let A = function(P) {
				return P.PENDING = "pending", P.PENDING_UPDATE = "pending_update", P.ENABLED = "enabled", P.DISABLED = "disabled", P
			}({});
			const h = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(A)
				}),
				S = e.eg.intersection([h, T]),
				f = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let C = function(P) {
				return P.UNLOCK_APPROVAL = "UnlockApprovalRequest", P.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", P.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", P.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", P
			}({});
			const w = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				O = e.eg.object({
					message: e.eg.string
				}),
				N = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function(x, y, t) {
			"use strict";
			t.d(y, {
				df: function() {
					return o
				},
				eX: function() {
					return a
				},
				fG: function() {
					return l
				},
				jI: function() {
					return d
				},
				qu: function() {
					return e
				},
				zc: function() {
					return g
				}
			});
			let e = function(s) {
					return s.Custom = "custom", s.Root = "root", s.Managed = "managed", s.Zone = "zone", s.RateLimit = "ratelimit", s
				}({}),
				o = function(s) {
					return s.Cache = "http_request_cache_settings", s.HttpConfigSettings = "http_config_settings", s.HttpLogCustomFields = "http_log_custom_fields", s.HttpRateLimit = "http_ratelimit", s.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", s.HttpRequestFirewallCustom = "http_request_firewall_custom", s.HttpRequestFirewallManaged = "http_request_firewall_managed", s.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", s.HttpRequestLateTransform = "http_request_late_transform", s.HttpRequestMain = "http_request_main", s.HttpRequestOrigin = "http_request_origin", s.HttpRequestRedirect = "http_request_redirect", s.HttpRequestSanitize = "http_request_sanitize", s.HttpRequestSBFM = "http_request_sbfm", s.HttpRequestsSnippets = "http_request_snippets", s.HttpRequestTransform = "http_request_transform", s.HttpResponseCompression = "http_response_compression", s.HttpResponseFirewallManaged = "http_response_firewall_managed", s.HttpResponseTransform = "http_response_headers_transform", s.L4DDoS = "ddos_l4", s.L7DDoS = "ddos_l7", s.MagicIDS = "magic_transit_ids_managed", s.MagicManaged = "magic_transit_managed", s.MagicTransit = "magic_transit", s.MagicTransitRateLimit = "magic_transit_ratelimit", s
				}({}),
				a = function(s) {
					return s.Execute = "execute", s.All = "all", s.Block = "block", s.JSChallenge = "js_challenge", s.Challenge = "challenge", s.Allow = "allow", s.Bypass = "bypass", s.Log = "log", s.Rewrite = "rewrite", s.Score = "score", s.Skip = "skip", s.Managed_Challenge = "managed_challenge", s.DDoS_Dynamic = "ddos_dynamic", s.Select_Config = "select_config", s.Set_Config = "set_config", s.Reset = "reset", s.Redirect = "redirect", s.Cache = "set_cache_settings", s
				}({}),
				d = function(s) {
					return s.ZONE_LOCKDOWN = "zoneLockdown", s.UA_BLOCK = "uaBlock", s.BIC = "bic", s.HOT = "hot", s.SECURITY_LEVEL = "securityLevel", s.RATE_LIMIT = "rateLimit", s.WAF = "waf", s
				}({}),
				l = function(s) {
					return s.DEFAULT = "default", s.MEDIUM = "medium", s.LOW = "low", s.EOFF = "eoff", s.HIGH = "high", s.VERY_HIGH = "very_high", s
				}({}),
				g = function(s) {
					return s.DEFAULT = "", s.XML = "text/xml", s.JSON = "application/json", s.TEXT = "text/plain", s.HTML = "text/html", s
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Yd: function() {
					return e
				},
				vE: function() {
					return o
				}
			});

			function e(a) {
				return Object.keys(a)
			}
			const o = (a, d) => {
				if (d !== void 0) throw new Error("Unexpected object: " + a);
				return d
			}
		},
		"../../../dash/intl/intl-translations/src/index.ts": function(x, y, t) {
			"use strict";
			t.d(y, {
				Fy: function() {
					return e.Z
				},
				if: function() {
					return a.Z
				},
				n4: function() {
					return o.n
				}
			});
			var e = t("../../../dash/intl/intl-translations/src/makeLoadPhrases.ts"),
				o = t("../../../dash/intl/intl-translations/src/catalogMap.ts"),
				a = t("../../../dash/intl/intl-translations/src/supportedCatalogs.ts")
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(x, y, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(a) {
				if (!t.o(e, a)) return Promise.resolve().then(function() {
					var g = new Error("Cannot find module '" + a + "'");
					throw g.code = "MODULE_NOT_FOUND", g
				});
				var d = e[a],
					l = d[0];
				return t.e(d[1]).then(function() {
					return t.t(l, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", x.exports = o
		}
	}
]);

//# debugId=a5ee19b6-9fd5-5b1e-8949-29517b71be4d