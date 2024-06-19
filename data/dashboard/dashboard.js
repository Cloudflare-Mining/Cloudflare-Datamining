(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254], {
		"../flags.js": function(V, _, n) {
			"use strict";
			n.d(_, {
				J8: function() {
					return c
				},
				Jd: function() {
					return a
				},
				QY: function() {
					return C
				},
				Qw: function() {
					return u
				},
				ki: function() {
					return l
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				r = n("../react/utils/url.ts"),
				s = n("../../../../node_modules/query-string/query-string.js"),
				p = n.n(s),
				f = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				i;
			const u = () => Object.keys(f.Z).reduce((d, E) => (E.indexOf("cf_beta.") === 0 && f.Z.get(E) === "true" && d.push(E.split(".").slice(1).join(".")), d), []),
				l = () => {
					var d, E, N;
					return ((d = window) === null || d === void 0 || (E = d.bootstrap) === null || E === void 0 || (N = E.data) === null || N === void 0 ? void 0 : N.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((i = window) === null || i === void 0 ? void 0 : i.location) && f.Z) {
				const d = p().parse(window.location.search);
				d.beta_on && f.Z.set(`cf_beta.${d.beta_on}`, !0), d.beta_off && f.Z.set(`cf_beta.${d.beta_off}`, !1)
			}
			const v = {},
				t = d => {
					var E, N, R;
					return Object.prototype.hasOwnProperty.call(v, d) ? v[d] : ((E = window) === null || E === void 0 || (N = E.bootstrap) === null || N === void 0 || (R = N.data) === null || R === void 0 ? void 0 : R.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(y => y === d) ? (v[d] = !0, !0) : (v[d] = !1, !1)
				},
				o = d => f.Z ? f.Z.get(`cf_beta.${d}`) === !0 : !1,
				c = d => o(d) || t(d),
				g = () => !0,
				a = () => {
					var d, E, N;
					return ((d = window) === null || d === void 0 || (E = d.bootstrap) === null || E === void 0 || (N = E.data) === null || N === void 0 ? void 0 : N.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				C = d => {
					const E = (0, e.uF)(d),
						N = (E == null ? void 0 : E.roles) || [];
					return (0, r.qR)(location.pathname) && N.length === 1 && N.some(R => R === "Administrator Read Only")
				}
		},
		"../init.ts": function(V, _, n) {
			"use strict";
			n.r(_);
			var e = n("../../../../node_modules/url-search-params-polyfill/index.js"),
				r = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				s = n("../../../../node_modules/fetch-intercept/lib/browser.js");

			function p(b) {
				for (var M = 1; M < arguments.length; M++) {
					var q = arguments[M] != null ? Object(arguments[M]) : {},
						ie = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(q).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(q, Ce).enumerable
					})), ie.forEach(function(Ce) {
						f(b, Ce, q[Ce])
					})
				}
				return b
			}

			function f(b, M, q) {
				return M = i(M), M in b ? Object.defineProperty(b, M, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[M] = q, b
			}

			function i(b) {
				var M = u(b, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function u(b, M) {
				if (typeof b != "object" || b === null) return b;
				var q = b[Symbol.toPrimitive];
				if (q !== void 0) {
					var ie = q.call(b, M || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(b)
			}
			const l = b => {
				const M = b && b.headers || {},
					q = new Headers(M);
				return q.append("X-Cross-Site-Security", "dash"), p({}, b, {
					headers: q
				})
			};
			(0, s.register)({
				request: (b, M) => {
					try {
						return new URL(b), b === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", M] : [b, M]
					} catch {
						return [b, l(M)]
					}
				}
			});
			var v = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				o = n("../react/app/providers/storeContainer.js");
			let c = "";
			const g = 61;

			function a(b) {
				const M = b.substr(1);
				if (M && c !== M) {
					const q = document.getElementById(M);
					if (q) {
						const ie = q.getBoundingClientRect().top;
						if (ie > 0) {
							const Ce = ie - g;
							document.documentElement.scrollTop = Ce
						}
					}
				}
				c = M
			}

			function C(b) {
				b.listen(M => a(M.hash))
			}
			var d = n("../../../../node_modules/cookie/index.js"),
				E = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const N = "CF_dash_version",
				R = "current",
				y = "hash",
				S = "deploymentPreview",
				h = b => b === R ? O() : G(),
				O = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				G = (b = 72) => {
					const M = 36e5;
					return new Date(Date.now() + b * M)
				},
				H = b => {
					switch (b) {
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
				te = (b, M = !1) => {
					var q;
					const ie = H(b),
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
    <h1 id="error-title">${ie.title}</h1>
    <p id="error-description">${ie.description}</p>
  </div>
  `,
						Le = M ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${E.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(q=window.build)===null||q===void 0?void 0:q.branch}</span>.</p>
      <a href="/version?hash=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return Ce + Le
				},
				re = b => {
					var M;
					const q = document.getElementById(b);
					!q || (M = q.parentNode) === null || M === void 0 || M.removeChild(q)
				};

			function J() {
				const b = document.getElementById("loading-state");
				b == null || b.classList.add("hide"), b == null || b.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(re)
				})
			}

			function Q(b) {
				var M;
				const q = document.getElementById("loading-state"),
					ie = !!((M = d.parse(document.cookie)) === null || M === void 0 ? void 0 : M[N]);
				!q || (q.innerHTML = te(b == null ? void 0 : b.code, ie))
			}
			var k = n("../utils/initStyles.ts"),
				$ = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				U = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				le = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				pe = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				ee = n("../../../../node_modules/history/esm/history.js"),
				w = (0, ee.lX)(),
				K = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Y = n("../react/utils/url.ts");
			const ue = (0, K.Rf)();
			let F;

			function ne(b) {
				return ae(b, "react-router-v5")
			}

			function ae(b, M) {
				return (q, ie = !0, Ce = !0) => {
					ie && ue && ue.location && (F = q({
						name: (0, Y.Fl)(ue.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": M
						}
					})), Ce && b.listen && b.listen((Le, De) => {
						if (De && (De === "PUSH" || De === "POP")) {
							F && F.finish();
							const nt = {
								"routing.instrumentation": M
							};
							F = q({
								name: (0, Y.Fl)(Le.pathname),
								op: "navigation",
								tags: nt
							})
						}
					})
				}
			}
			var x = n("../react/common/selectors/languagePreferenceSelector.ts"),
				A = n("../flags.js"),
				D = n("../utils/getDashVersion.ts"),
				W = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow?5628"),
				oe = n.n(W),
				ve = n("../../../common/intl/intl-core/src/errors.ts"),
				Oe = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				B = n("../react/common/middleware/sparrow/errors.ts");
			const ce = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				we = !0,
				ze = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				xe = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function Ne(b, M, q) {
				return M = je(M), M in b ? Object.defineProperty(b, M, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[M] = q, b
			}

			function je(b) {
				var M = Ve(b, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function Ve(b, M) {
				if (typeof b != "object" || b === null) return b;
				var q = b[Symbol.toPrimitive];
				if (q !== void 0) {
					var ie = q.call(b, M || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(b)
			}
			class Ye {
				constructor() {
					Ne(this, "name", Ye.id)
				}
				setupOnce() {
					n.g.console && (0, Oe.hl)(n.g.console, "error", M => (...q) => {
						const ie = q.find(Ce => Ce instanceof Error);
						if (ce && ie) {
							let Ce, Le = !0;
							if (ie instanceof B.ez) {
								const De = ie instanceof B.oV ? ie.invalidProperties : void 0;
								Ce = {
									tags: {
										"sparrow.eventName": ie.eventName
									},
									extra: {
										sparrow: {
											eventName: ie.eventName,
											invalidProperties: De
										}
									},
									fingerprint: [ie.name ? ie.name : "SparrowValidationError"]
								}, Le = !1
							} else if (ie instanceof W.SparrowIdCookieError) Ce = {
								extra: {
									sparrowIdCookie: ie.cookie
								},
								fingerprint: [ie.name ? ie.name : "SparrowIdCookieError"]
							};
							else if (ie.name === "ChunkLoadError") {
								Ce = {
									fingerprint: [ie.name]
								};
								try {
									Ce.tags = {
										chunkId: ie.message.split(" ")[2],
										chunkUrl: ie.request
									}
								} catch {}
							} else ie instanceof ve.YB && (Ce = {
								fingerprint: ["TranslatorError", ie.translationKey]
							});
							Le && v.Tb(ie, Ce)
						}
						typeof M == "function" && M.apply(n.g.console, q)
					})
				}
			}
			Ne(Ye, "id", "ConsoleErrorIntegration");
			var rt = null,
				Xe = n("../utils/sentry/lastSentEventId.ts"),
				Qe = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				Je = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const qe = b => {
					const M = async q => {
						var ie, Ce;
						const Le = {
							envelope: q.body,
							url: b.url,
							isPreviewDeploy: (ie = window) === null || ie === void 0 || (Ce = ie.build) === null || Ce === void 0 ? void 0 : Ce.isPreviewDeploy,
							release: (0, D.t)()
						};
						try {
							const De = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(Le)
							});
							return {
								statusCode: De.status,
								headers: {
									"x-sentry-rate-limits": De.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": De.headers.get("Retry-After")
								}
							}
						} catch (De) {
							return console.log(De), (0, Je.$2)(De)
						}
					};
					return Qe.q(b, M)
				},
				fe = () => {
					if (ce && we) {
						var b, M, q, ie, Ce, Le, De, nt, ht, it;
						let $t = "production";
						((b = window) === null || b === void 0 || (M = b.build) === null || M === void 0 ? void 0 : M.isPreviewDeploy) && ($t += "-preview"), U.S({
							dsn: ce,
							release: (0, D.t)(),
							environment: $t,
							ignoreErrors: xe,
							allowUrls: ze,
							autoSessionTracking: !1,
							integrations: [new le.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new Ye, new pe.jK.BrowserTracing({
								routingInstrumentation: ne(w)
							})],
							tracesSampleRate: 0,
							transport: qe,
							beforeSend: tn => (Xe.e.setEventId(tn.event_id), tn)
						});
						const an = (0, o.bh)().getState();
						v.rJ({
							LOCAL_STORAGE_FLAGS: (0, A.Qw)(),
							USER_BETA_FLAGS: (0, A.ki)(),
							meta: {
								connection: {
									type: (q = window) === null || q === void 0 || (ie = q.navigator) === null || ie === void 0 || (Ce = ie.connection) === null || Ce === void 0 ? void 0 : Ce.effectiveType,
									bandwidth: (Le = window) === null || Le === void 0 || (De = Le.navigator) === null || De === void 0 || (nt = De.connection) === null || nt === void 0 ? void 0 : nt.downlink
								},
								languagePreference: (0, x.r)(an),
								isPreviewDeploy: (ht = window) === null || ht === void 0 || (it = ht.build) === null || it === void 0 ? void 0 : it.isPreviewDeploy
							},
							utilGates: (0, $.T2)(an)
						}), window.addEventListener("unhandledrejection", function(tn) {})
					}
				},
				ye = b => {
					b ? v.av({
						id: b
					}) : v.av(null)
				};
			var me = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				L = () => {
					let b;
					try {
						b = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), b = window.location.search
					}
					if (!b.includes("remote[")) return;
					const M = new URLSearchParams(b),
						q = {};
					for (let [ie, Ce] of M) ie.includes("remote") && (q[ie.replace(/remote\[|\]/g, "")] = Ce);
					me.Z.set("mfe-remotes", JSON.stringify(q))
				},
				X = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				_e = n("../node_modules/uuid/dist/esm-browser/v4.js");
			const Re = "ANON_USER_ID";

			function ke() {
				var b, M, q, ie;
				let Ce = (b = n.g) === null || b === void 0 || (M = b.bootstrap) === null || M === void 0 || (q = M.data) === null || q === void 0 || (ie = q.user) === null || ie === void 0 ? void 0 : ie.id;
				if (!Ce) {
					let Le = me.Z.get(Re);
					if (!Le) {
						let De = (0, _e.Z)();
						me.Z.set(Re, De), Le = De
					}
					return Le
				}
				return Ce
			}
			async function Ue() {
				const b = (0, o.bh)();
				b.dispatch((0, X.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await b.dispatch((0, $.UL)({
					userId: ke()
				}))
			}
			var Be = n("../libs/init/initBootstrap.ts"),
				Me = n("webpack/sharing/consume/default/react/react"),
				Ae = n.n(Me),
				Ze = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				mt = n("webpack/sharing/consume/default/react-dom/react-dom"),
				Ge = n("webpack/sharing/consume/default/react-redux/react-redux"),
				at = n("../../../../node_modules/swr/core/dist/index.mjs"),
				st = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				j = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				se = n("../react/shims/focus-visible.js"),
				Ee = n("../react/app/components/DeepLink/index.ts"),
				Te = n("../../../../node_modules/prop-types/index.js"),
				Ie = n.n(Te),
				Fe = n("../react/utils/translator.tsx"),
				et = n("../../../common/intl/intl-react/src/index.ts"),
				Se = n("../../../dash/intl/intl-translations/src/index.ts"),
				Ct = n("../../../../node_modules/query-string/query-string.js"),
				T = n.n(Ct),
				I = n("../react/common/actions/userActions.ts"),
				Z = n("../react/common/selectors/userSelectors.ts"),
				de = n("../react/utils/i18n.ts"),
				he = n("../react/utils/bootstrap.ts");

			function tt(b) {
				for (var M = 1; M < arguments.length; M++) {
					var q = arguments[M] != null ? Object(arguments[M]) : {},
						ie = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(q).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(q, Ce).enumerable
					})), ie.forEach(function(Ce) {
						ct(b, Ce, q[Ce])
					})
				}
				return b
			}

			function ct(b, M, q) {
				return M = bt(M), M in b ? Object.defineProperty(b, M, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[M] = q, b
			}

			function bt(b) {
				var M = gt(b, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function gt(b, M) {
				if (typeof b != "object" || b === null) return b;
				var q = b[Symbol.toPrimitive];
				if (q !== void 0) {
					var ie = q.call(b, M || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(b)
			}
			let He = T().parse(location.search);
			const lt = b => {
					const M = (0, he.$8)() ? [(0, Se.Fy)(Se.if.changes), (0, Se.Fy)(Se.if.common), (0, Se.Fy)(Se.if.navigation), (0, Se.Fy)(Se.if.overview), (0, Se.Fy)(Se.if.onboarding), (0, Se.Fy)(Se.if.invite), (0, Se.Fy)(Se.if.login), (0, Se.Fy)(Se.if.dns), (0, Se.Fy)(Se.n4.ssl_tls), (0, Se.Fy)(Se.if.message_inbox)] : [(0, Se.Fy)(Se.if.common), (0, Se.Fy)(Se.if.invite), (0, Se.Fy)(Se.if.login), (0, Se.Fy)(Se.if.onboarding)];
					He.lang ? ft(b) : me.Z.get(de.th) && ut(b, me.Z.get(de.ly));
					const q = async ie => (await Promise.all(M.map(Le => Le(ie)))).reduce((Le, De) => tt({}, Le, De), {});
					return Ae().createElement(et.RD.Provider, {
						value: b.languagePreference
					}, Ae().createElement(et.bd, {
						translator: Fe.Vb,
						locale: b.languagePreference
					}, Ae().createElement(et.lm, {
						loadPhrases: q
					}, b.children)))
				},
				ft = async b => {
					let M = He.lang.substring(0, He.lang.length - 2) + He.lang.substring(He.lang.length - 2, He.lang.length).toUpperCase();
					if (!(0, x.v)(M)) {
						console.warn(`${M} is not a supported locale.`), delete He.lang, b.history.replace({
							search: T().stringify(He)
						});
						return
					}
					me.Z.set(de.ly, M), delete He.lang, ut(b, M), b.isAuthenticated || b.history.replace({
						search: T().stringify(He)
					})
				}, ut = async (b, M) => {
					if (b.isAuthenticated) try {
						await b.setUserCommPreferences({
							"language-locale": M
						}, {
							hideErrorAlert: !0
						}), me.Z.remove(de.th), b.history.replace({
							search: T().stringify(He)
						})
					} catch (q) {
						me.Z.set(de.th, !0), console.error(q)
					} else me.Z.set(de.th, !0)
				}, Tt = b => {
					const M = (0, Z.PR)(b);
					return {
						isAuthenticated: !!(M && M.id),
						languagePreference: me.Z.get(de.ly) || (0, x.r)(b)
					}
				}, ot = {
					setUserCommPreferences: I.V_
				};
			var At = (0, Ze.withRouter)((0, Ge.connect)(Tt, ot)(lt));
			lt.propTypes = {
				history: Ie().object,
				languagePreference: Ie().string.isRequired,
				children: Ie().node.isRequired,
				isAuthenticated: Ie().bool,
				setUserCommPreferences: Ie().func.isRequired
			};
			var yt = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Wt = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let Pt;
			const zt = ({
				selectorPrefix: b = "c_"
			} = {}) => (Pt || (Pt = (0, Wt.Z)({
				dev: !1,
				selectorPrefix: b
			})), Pt);
			var Ht = n("../react/common/components/ModalManager.tsx"),
				Zt = n("../react/app/components/ErrorBoundary.tsx"),
				Kt = n("../react/common/actions/notificationsActions.ts");
			const P = (n.g.bootstrap || {}).data || {};
			class ge extends Ae().Component {
				componentDidMount() {
					P.messages && this.dispatchNotificationActions(P.messages)
				}
				dispatchNotificationActions(M) {
					M.forEach(q => {
						const {
							type: ie,
							message: Ce,
							persist: Le
						} = q;
						["success", "info", "warn", "error"].includes(ie) && this.props.notifyAdd(ie, (0, Fe.ZP)(Ce), {
							persist: !!Le
						})
					})
				}
				render() {
					return null
				}
			}
			var We = (0, Ze.withRouter)((0, Ge.connect)(null, {
				notifyAdd: Kt.IH
			})(ge));
			ge.propTypes = {
				notifyAdd: Ie().func.isRequired
			};
			var $e = n("../react/app/redux/index.ts");

			function dt() {
				var b;
				const M = (0, $e.p4)(Z.PR),
					q = (M == null || (b = M.email) === null || b === void 0 ? void 0 : b.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ie = (0, X.Yc)();
				(0, Me.useEffect)(() => {
					ie({
						userType: q
					})
				}, [q, ie])
			}
			var Et = n("../react/common/selectors/entitlementsSelectors.ts"),
				_t = n("../react/common/selectors/accountSelectors.ts");
			const St = ["accountId", "is_ent"];

			function Ot() {
				const b = (0, X.f7)(),
					M = (0, Ze.useHistory)(),
					q = (0, Y.uW)(M.location.pathname),
					ie = (0, X.Yc)(),
					Ce = (0, X.O$)(),
					Le = (0, $e.p4)(Et.u1),
					De = !Le.isRequesting && !!Le.data,
					nt = (0, $e.p4)(Et.p1),
					ht = (0, $e.p4)(_t.Xu),
					it = (0, $e.p4)(_t.uF),
					$t = !ht.isRequesting && !!ht.data;
				(0, Me.useEffect)(() => {
					q && $t && it && De && q === it.account.id ? ie({
						accountId: it.account.id,
						is_ent: nt
					}) : (!q || q in b && b.accountId !== q) && Ce(St)
				}, [$t, it, ie, Ce, De, nt, q, b])
			}
			var It = n("../react/common/selectors/zoneSelectors.ts");

			function wt() {
				const b = (0, $e.p4)(It.nA),
					M = (0, X.Yc)();
				(0, Me.useEffect)(() => {
					var q;
					M({
						zone_id: b == null ? void 0 : b.id,
						zone_plan: b == null || (q = b.plan) === null || q === void 0 ? void 0 : q.legacy_id
					})
				}, [b, M])
			}
			const Dt = () => (dt(), Ot(), wt(), null);
			var Lt = n("../react/app/components/Persistence/index.tsx"),
				Rt = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				kt = n("../react/app/components/LoadingSuspense.tsx");
			const Mt = Ae().lazy(() => Promise.all([n.e(2480), n.e(99992), n.e(4616), n.e(72019), n.e(19462), n.e(5668), n.e(7484), n.e(39760), n.e(2180), n.e(22734), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var Nt = () => Ae().createElement(kt.Z, null, Ae().createElement(Mt, null));
			const jt = () => (Me.useEffect(() => J, []), null);
			var Ut = n("../../../../node_modules/moment/moment.js"),
				vt = n.n(Ut);
			const Bt = b => {
					switch (b) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return b.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return b.toLowerCase();
						default:
							return "en"
					}
				},
				xt = () => {
					const b = (0, $e.p4)(x.r);
					(0, Me.useEffect)(() => {
						const M = Bt(b);
						M !== vt().locale() && vt().locale(M), document.documentElement.lang = b
					}, [b])
				},
				Vt = () => {
					(0, Me.useEffect)(() => {
						var b, M;
						let q;
						if (((b = window) === null || b === void 0 || (M = b.build) === null || M === void 0 ? void 0 : M.isPreviewDeploy) && (q = "cookie"), !!q) try {
							const ie = document.head.querySelector("link[rel=icon]");
							ie && (ie.href = n("../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${q}.ico`))
						} catch {}
					}, [])
				};
			var Yt = n("../react/common/constants/constants.ts");
			const Qt = () => {
				const b = (0, Ze.useLocation)();
				(0, Me.useEffect)(() => {
					const M = T().parse(b.search);
					if (M.pt && me.Z.set(Yt.sJ, M.pt), (M == null ? void 0 : M.devPanel) === null) {
						var q, ie;
						(q = window) === null || q === void 0 || (ie = q.localStorage) === null || ie === void 0 || ie.setItem("gates_devtools_ui_gates_controller_enabled", "true")
					}
				}, [b.search])
			};
			var Jt = n("../react/common/components/SAMLSubmit/SAMLSubmit.tsx");
			const Xt = Ae().lazy(() => Promise.all([n.e(2480), n.e(99992), n.e(4616), n.e(72019), n.e(19462), n.e(36273), n.e(72793), n.e(7484), n.e(39760), n.e(2180), n.e(22734), n.e(94452), n.e(85918), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				Ke = Ae().lazy(() => Promise.all([n.e(99992), n.e(36273), n.e(2180), n.e(69088), n.e(94452), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var sn = ({
					userIsAuthed: b
				}) => {
					var M;
					return xt(), Vt(), Qt(), Ae().createElement(Me.Suspense, {
						fallback: Ae().createElement(jt, null)
					}, Ae().createElement(Ze.Switch, null, !b && !0 && Ae().createElement(Ze.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Ae().createElement(Ke, null)), Ae().createElement(Ze.Route, {
						render: () => Ae().createElement(Rt.ZC, {
							minHeight: "100vh"
						}, Ae().createElement(Xt, null))
					})), ((M = window) === null || M === void 0 ? void 0 : M.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true" && Ae().createElement(Nt, null), Ae().createElement(Jt.Z, {
						userIsAuthed: b,
						spInitiated: !0
					}))
				},
				en = n("../../../../node_modules/yup/es/index.js"),
				cn = n("../../../common/util/types/src/utils/index.ts");
			const nn = {
				cfEmail: () => en.Z_().email((0, Fe.ZP)("common.validation.email")).required((0, Fe.ZP)("common.validation.email"))
			};
			(0, cn.Yd)(nn).forEach(b => {
				en.kM(en.Z_, b, nn[b])
			});
			const rn = Ae().lazy(() => Promise.all([n.e(4616), n.e(6368), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				ln = () => {
					const b = (0, he.$8)(),
						[M, q] = (0, Me.useState)(b ? rn : Ae().Fragment),
						[ie, Ce] = (0, Me.useState)((0, E.Yc)());
					(0, Me.useEffect)(() => {
						(0, E.fF)(() => Ce((0, E.Yc)()))
					}, []);
					const Le = De => {
						Ce(De), (0, E.C8)(De)
					};
					return (0, Me.useEffect)(() => {
						q(b ? rn : Ae().Fragment)
					}, [b]), (0, Me.useEffect)(() => {
						const De = () => Le(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", De), () => {
							window.removeEventListener("storage", De)
						}
					}, []), Ae().createElement(Me.Suspense, {
						fallback: null
					}, Ae().createElement(Ge.Provider, {
						store: (0, o.bh)()
					}, Ae().createElement(Ze.Router, {
						history: w
					}, Ae().createElement(M, null, Ae().createElement(yt.Z, {
						renderer: zt()
					}, Ae().createElement(At, null, Ae().createElement(Zt.Z, {
						sentryTag: "Root"
					}, Ae().createElement(at.J$, {
						value: {
							fetcher: De => fetch(De).then(nt => nt.json())
						}
					}, Ae().createElement(Dt, null), Ae().createElement(We, null), Ae().createElement(Lt.Z_, {
						onDarkModeChangeCb: Le
					}, Ae().createElement(Ee.ZP, null, Ae().createElement(sn, {
						userIsAuthed: b
					}))), Ae().createElement(Ht.ZP, null), Ae().createElement(st.F0, null)))))))))
				},
				un = () => {
					(0, mt.render)(Ae().createElement(ln, null), document.getElementById("react-app"))
				};
			var pt = n("../utils/initSparrow.ts"),
				Ft = n("../utils/zaraz.ts");
			const dn = () => {
					const b = (0, Z.PR)((0, o.bh)().getState());
					pn(), (0, pt.Ug)(), (0, Ft.bM)(), (b == null ? void 0 : b.id) && oe().setUserId(b == null ? void 0 : b.id), (0, pt.yV)(), !(0, pt.Wi)() && (0, pt.IM)(), b ? (0, Ft.yn)(b) : (0, Ft.Ro)()
				},
				pn = () => {
					var b, M;
					(b = window) === null || b === void 0 || (M = b.OneTrust) === null || M === void 0 || M.OnConsentChanged(() => {
						const q = (0, Z.PR)((0, o.bh)().getState());
						(0, pt.Wi)() ? (oe().setEnabled(!0), (q == null ? void 0 : q.id) ? (oe().setUserId(q.id), (0, Ft.yn)(q)) : (0, Ft.Ro)(), (0, pt.yV)()) : (oe().setEnabled(!1), (0, pt.IM)())
					})
				};

			function mn(b) {
				for (var M = 1; M < arguments.length; M++) {
					var q = arguments[M] != null ? Object(arguments[M]) : {},
						ie = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(q).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(q, Ce).enumerable
					})), ie.forEach(function(Ce) {
						gn(b, Ce, q[Ce])
					})
				}
				return b
			}

			function gn(b, M, q) {
				return M = fn(M), M in b ? Object.defineProperty(b, M, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[M] = q, b
			}

			function fn(b) {
				var M = yn(b, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function yn(b, M) {
				if (typeof b != "object" || b === null) return b;
				var q = b[Symbol.toPrimitive];
				if (q !== void 0) {
					var ie = q.call(b, M || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(b)
			}
			const on = b => {
				v.Tb(b), Q(b)
			};
			try {
				n.g.build = mn({}, {
					branch: "master",
					isReleaseCandidate: "true",
					commit: "d5950c8ea2b50ede3a7a38a5010af07e4046ec5b",
					dashVersion: "bcba95fa524cd11be8c026684e2f6edd17d8010a",
					env: "production",
					builtAt: 1718761625744,
					versions: {
						"@cloudflare/app-dash": "25.161.22",
						node: "20.10.0",
						yarn: "3.2.2",
						webpack: "5.88.2"
					}
				}, {
					isPreviewDeploy: (0, D.p)()
				}), fe(), n("../react/utils/api.ts"), C(w), (0, k.Z)(), L(), (0, Be.k)().then(async b => {
					var M;
					const q = (0, o.bh)(),
						ie = (b == null ? void 0 : b.data) || {};
					q.dispatch((0, t.mW)("user", ie == null ? void 0 : ie.user));
					const Ce = b == null || (M = b.data) === null || M === void 0 ? void 0 : M.user;
					return n.g.bootstrap = b, Ce && Ce.id && ye(Ce.id), await Ue(), dn(), un()
				}).catch(on)
			} catch (b) {
				on(b)
			}
		},
		"../libs/init/initBootstrap.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				k: function() {
					return r
				}
			});
			const e = () => {
					document.cookie.split(";").forEach(p => {
						const [f] = p.trim().split("=");
						document.cookie = `${f}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				r = async () => {
					let s = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!s.ok) throw s.headers.get("content-type") === "text/html" && (await s.text()).toLowerCase().includes("cookie too large") && (e(), window.location.reload()), {
						message: "Bootstrap API Failure",
						code: s == null ? void 0 : s.status
					};
					return (await s.json()).result.data
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				BQ: function() {
					return l
				},
				Bh: function() {
					return i
				},
				CM: function() {
					return v
				},
				MF: function() {
					return r
				},
				TS: function() {
					return c
				},
				WF: function() {
					return f
				},
				Wz: function() {
					return t
				},
				bk: function() {
					return u
				},
				fj: function() {
					return o
				},
				r4: function() {
					return p
				},
				zq: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js");
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
				s = (0, e.R)(r.ADD_SITE, g => ({
					payload: g
				})),
				p = (0, e.R)(r.RESOLVING_START),
				f = (0, e.R)(r.RESOLVING_COMPLETE),
				i = (0, e.R)(r.SELECT_ZONE, g => ({
					payload: g
				})),
				u = (0, e.R)(r.SELECT_ACCOUNT, g => ({
					payload: g
				})),
				l = (0, e.R)(r.SELECT_PAGES_PROJECT, g => ({
					payload: g
				})),
				v = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, g => ({
					payload: g
				})),
				t = (0, e.R)(r.SET_FILTERED_ACCOUNT_IDS, g => ({
					accountIds: g
				})),
				o = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				c = (0, e.R)(r.SELECT_WORKER, g => ({
					payload: g
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				BV: function() {
					return e
				},
				Dz: function() {
					return u
				},
				Fj: function() {
					return s
				},
				Kt: function() {
					return p
				},
				Tc: function() {
					return r
				},
				_h: function() {
					return l
				},
				s$: function() {
					return f
				}
			});
			const e = "to",
				r = "_gl",
				s = "deepLinkQueryParams",
				p = "add",
				f = "multiSkuProducts",
				i = "/:account/billing/checkout",
				u = "/:account/:zone/billing/checkout",
				l = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				ZP: function() {
					return te
				},
				U: function() {
					return u.U
				},
				dd: function() {
					return u.dd
				},
				bk: function() {
					return i.bk
				},
				Bh: function() {
					return i.Bh
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n("../react/app/redux/index.ts"),
				s = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = n("../react/app/components/DeepLink/utils.ts"),
				f = n("../react/utils/bootstrap.ts"),
				i = n("../react/app/components/DeepLink/actions.ts"),
				u = n("../react/app/components/DeepLink/selectors.ts"),
				l = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow?5628"),
				v = n.n(l);

			function t(re) {
				for (var J = 1; J < arguments.length; J++) {
					var Q = arguments[J] != null ? Object(arguments[J]) : {},
						k = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(Q).filter(function($) {
						return Object.getOwnPropertyDescriptor(Q, $).enumerable
					})), k.forEach(function($) {
						o(re, $, Q[$])
					})
				}
				return re
			}

			function o(re, J, Q) {
				return J = c(J), J in re ? Object.defineProperty(re, J, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : re[J] = Q, re
			}

			function c(re) {
				var J = g(re, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function g(re, J) {
				if (typeof re != "object" || re === null) return re;
				var Q = re[Symbol.toPrimitive];
				if (Q !== void 0) {
					var k = Q.call(re, J || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)(re)
			}
			class a {
				constructor(J, Q) {
					o(this, "deepLink", void 0), o(this, "legacyDeepLink", void 0), o(this, "resolvers", void 0), o(this, "startTime", Date.now()), o(this, "endTime", Date.now()), o(this, "_done", !1), o(this, "resolverStart", k => {
						this.resolvers.set(k, {
							name: k,
							startTime: Date.now(),
							userActions: []
						})
					}), o(this, "resolverDone", k => {
						const $ = this.resolvers.get(k);
						$ && ($.endTime = Date.now(), this.resolvers.set(k, $))
					}), o(this, "resolverCancel", k => {
						this.resolverDone(k), this.cancel()
					}), o(this, "start", () => {
						this.startTime = Date.now()
					}), o(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), o(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), o(this, "createUserActionTracker", k => {
						const $ = "NO_ACTION",
							U = {
								actionType: $,
								startTime: 0
							};
						return {
							start: (le = $) => {
								const pe = this.resolvers.get(k);
								U.actionType = le, U.startTime = Date.now(), pe && pe.userActions.push(U)
							},
							finish: (le = $) => {
								U.actionType = le, U.endTime = Date.now()
							},
							cancel: (le = $) => {
								U.actionType = le, U.endTime = Date.now(), this.resolverCancel(k)
							}
						}
					}), this.deepLink = J, this.legacyDeepLink = Q, this.resolvers = new Map
				}
				track(J) {
					try {
						if (this._done) return;
						this._done = !0;
						const Q = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: C(this.startTime, this.endTime),
								totalCpuTime: C(this.startTime, this.endTime)
							},
							k = this.resolvers.size === 0 ? Q : Array.from(this.resolvers.values()).reduce(($, U) => {
								const le = C(U.startTime, U.endTime),
									pe = U.userActions.reduce((z, w) => {
										const K = C(w.startTime, w.endTime);
										return {
											totalTime: z.totalTime + K,
											actions: z.actions.set(w.actionType, K)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									ee = le - pe.totalTime;
								return t({}, $, {
									totalTime: $.totalTime + le,
									totalUserActionsTime: $.totalUserActionsTime + pe.totalTime,
									totalCpuTime: $.totalCpuTime + ee,
									[`${U.name}ResolverTotalTime`]: le,
									[`${U.name}ResolverTotalCpuTime`]: ee,
									[`${U.name}ResolverTotalUserActionsTime`]: pe.totalTime
								}, Array.from(pe.actions.keys()).reduce((z, w) => t({}, z, {
									[`${U.name}Resolver/${w}`]: pe.actions.get(w)
								}), {}))
							}, t({}, Q, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						v().sendEvent(J, k)
					} catch (Q) {
						console.error(Q)
					}
				}
			}

			function C(re = Date.now(), J = Date.now()) {
				return (J - re) / 1e3
			}
			var d = n("../react/app/components/DeepLink/constants.ts"),
				E = n("../react/common/hooks/useCachedState.ts"),
				N = n("../react/common/hooks/usePrevious.ts");

			function R(re) {
				for (var J = 1; J < arguments.length; J++) {
					var Q = arguments[J] != null ? Object(arguments[J]) : {},
						k = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(Q).filter(function($) {
						return Object.getOwnPropertyDescriptor(Q, $).enumerable
					})), k.forEach(function($) {
						y(re, $, Q[$])
					})
				}
				return re
			}

			function y(re, J, Q) {
				return J = S(J), J in re ? Object.defineProperty(re, J, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : re[J] = Q, re
			}

			function S(re) {
				var J = h(re, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function h(re, J) {
				if (typeof re != "object" || re === null) return re;
				var Q = re[Symbol.toPrimitive];
				if (Q !== void 0) {
					var k = Q.call(re, J || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)(re)
			}
			var G = ({
					children: re
				}) => {
					const J = (0, r.TZ)(),
						Q = (0, s.useHistory)(),
						k = (0, N.Z)(Q.location.pathname),
						$ = (0, r.p4)(u.dd),
						[U, le] = (0, e.useState)(!0),
						[pe, ee] = (0, E.j)(void 0, {
							key: d.Fj
						}),
						[z, w] = (0, E.j)(void 0, {
							key: d.s$
						}),
						K = (0, f.$8)();
					let Y = new URLSearchParams(Q.location.search);
					const ue = (0, p.mL)(Q.location.pathname, Y);
					let F = null,
						ne = null;
					if (Y.has(d.Tc) && Y.delete(d.Tc), Y.get(d.BV)) F = Y.get(d.BV), Q.location.hash && (ne = Q.location.hash);
					else if (pe) {
						const x = new URLSearchParams(pe);
						x.get(d.BV) && (F = x.get(d.BV), Y = x)
					} else ue && (Y.set(d.BV, ue), F = ue);
					if (F && d._h.test(F)) {
						const x = Y.getAll(d.Kt),
							A = JSON.stringify(x);
						x.length && A !== z && w(A), Y.has(d.Tc) && Y.delete(d.Tc), Y.delete(d.Kt)
					}!K && pe === void 0 && F && ee(Y.toString());
					const ae = async () => {
						try {
							if ((0, p.I3)(F) && K && !$) {
								pe && ee(void 0), J.dispatch((0, i.r4)()), le(!0);
								const x = await (0, p.py)(F, le, J, Q, k, new a(F, ue ? `${Q.location.pathname}${Q.location.search}` : void 0));
								Y.delete(d.BV);
								const A = Y.toString();
								Q.replace(R({}, Q.location, {
									pathname: x,
									search: A
								}, ne ? {
									hash: ne
								} : {})), J.dispatch((0, i.WF)())
							}
						} catch (x) {
							J.dispatch((0, i.WF)()), console.error(x)
						} finally {
							le(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ae()
					}, [Q.location.pathname, Q.location.search, $]), (U || (0, p.I3)(F)) && K ? null : re
				},
				H = n("../react/app/components/DeepLink/reducer.ts"),
				te = G
		},
		"../react/app/components/DeepLink/reducer.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				E: function() {
					return p
				},
				r: function() {
					return i
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = n.n(e),
				s = n("../react/app/components/DeepLink/actions.ts");
			const p = null,
				f = r().from({
					lastAction: p,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function i(u = f, l) {
				if (l.type === s.MF.RESOLVING_COMPLETE) return f;
				if (l.type === s.MF.RESOLVING_START) return u.set("isResolving", !0);
				if (u.isResolving) {
					if (l.type === s.MF.RESOLVING_COMPLETE) return u.set("isResolving", !1);
					if (l.type === s.MF.SET_FILTERED_ACCOUNT_IDS) return u.set("filteredAccountIds", l.accountIds);
					if (l.type === s.MF.DELETE_FILTERED_ACCOUNT_IDS) return u.set("filteredAccountIds", void 0);
					{
						let v = u;
						try {
							v = u.set("lastAction", l)
						} catch {
							v = u.set("lastAction", {
								type: l.type
							})
						}
						return v
					}
				} else return u
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				U: function() {
					return s
				},
				dd: function() {
					return r
				},
				yI: function() {
					return e
				}
			});
			const e = p => p.deepLink.lastAction,
				r = p => p.deepLink.isResolving,
				s = p => p.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				I3: function() {
					return g
				},
				X1: function() {
					return o
				},
				mL: function() {
					return N
				},
				py: function() {
					return E
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../react/app/components/DeepLink/reducer.ts"),
				s = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const p = R => R.replace(s.default.endsWithSlash, ""),
				f = R => {
					const y = p(R).split("/").slice(3);
					return y.length ? "/" + y.join("/") : ""
				},
				i = R => {
					const y = p(R).split("/").slice(2);
					return y.length ? `apps/${y.join("/")}` : "apps"
				};
			var u = n("../react/app/components/DeepLink/selectors.ts"),
				l = n("../react/app/components/DeepLink/constants.ts"),
				v = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const o = R => (0, v.Lb)(R) && (R.split(".").length > 1 || (0, t.v5)(R)),
				c = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				g = R => typeof R == "string" && R.startsWith("/"),
				a = (R, y) => S => new Promise((h, O) => {
					y.start();
					const G = R.subscribe(() => {
						const H = (0, u.yI)(R.getState());
						H === r.E ? (y.cancel(), G(), O("DeepLink: waitForAction out of context.")) : S(H) && (y.finish(H.type), G(), h(H))
					})
				}),
				C = (R, y, S) => (h, O) => new Promise((G, H) => {
					S.start();
					const te = y.location.pathname;
					h = new URL(h, window.location.href).pathname, te !== h && (S.cancel(), H(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${h}", but on "${te}". You need to redirect to "${h}", and unblockRouter in your Resolver, before you use this function.`));
					const re = R.subscribe(() => {
						const J = (0, u.yI)(R.getState()),
							Q = y.location.pathname,
							$ = new URLSearchParams(y.location.search).get(l.BV);
						(Q !== h || !!$) && (S.cancel(), re(), H(`DeepLink: waitForPageAction user navigated away from "${h}" to "${Q}${$?y.location.search:""}"`)), J === r.E ? (S.cancel(), re(), H("DeepLink: waitForPageAction out of context.")) : O(J) && (S.finish(J.type), re(), G(J))
					})
				});

			function d(R) {
				const y = [],
					S = R.split("?")[0].split("/");
				for (let h of S) h.length !== 0 && (h.startsWith(":") ? y.push({
					value: h.substring(1),
					type: "dynamic"
				}) : y.push({
					value: h,
					type: "static"
				}));
				return y
			}
			async function E(R, y, S, h, O, G) {
				G.start();
				const H = d(R),
					re = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(7484), n.e(72775)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					J = {};
				let Q = "";
				for (const [k, $] of H.entries())
					if ($.type === "static") Q = [Q, $.value].join("/");
					else if ($.type === "dynamic" && c.is($.value) && $.value in re) {
					G.resolverStart($.value);
					const U = await re[$.value]({
						deepLink: R,
						blockRouter: () => y(!0),
						unblockRouter: () => y(!1),
						routerHistory: h,
						resolvedValues: J,
						store: S,
						referringRoute: O,
						uri: {
							currentPartIdx: k,
							parts: H
						},
						waitForAction: a(S, G.createUserActionTracker($.value)),
						waitForPageAction: C(S, h, G.createUserActionTracker($.value))
					});
					G.resolverDone($.value), Q = [Q, U].join("/"), J[$.value] = U
				} else throw G.cancel(), new Error(`DeepLink: Resolver with name '${$.value}' is not supported.`);
				return G.done(), Q
			}

			function N(R, y) {
				const S = ":account",
					h = ":zone",
					O = y.get("zone");
				if (O) return y.delete("zone"), `/${S}/${h}/${O}`;
				const G = y.get("account");
				if (G) return y.delete("account"), `/${S}/${G}`;
				if (R === "/overview") return `/${S}/${h}`;
				if (R === "/apps") return `/${S}/${h}/${i(R)}`;
				const H = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const te of H) {
					const re = te.length;
					if (R.startsWith(te) && (R.length === re || R[re] === "/")) return `/${S}/${h}${R}`
				}
				switch (R) {
					case "/account/billing":
						return `/${S}/billing`;
					case "/account/subscriptions":
						return `/${S}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${S}/dns-firewall`;
					case "/account/audit-log":
						return `/${S}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(V, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				s = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				p = n("../react/app/components/SomethingWrong.jsx"),
				f = n("../utils/sentry/lastSentEventId.ts"),
				i = n("../react/utils/zaraz.ts"),
				u = n("../react/utils/url.ts");
			const l = ({
				sentryTag: v,
				children: t
			}) => r().createElement(s.SV, {
				beforeCapture: o => {
					v && o.setTag("errorBoundary", v), i.tg === null || i.tg === void 0 || i.tg.track("page-error", {
						page: (0, u.Fl)(window.location.pathname)
					})
				},
				onError: o => {
					({
						REDUX_LOGGER: void 0
					}).TESTING && n.g.logAppError(o)
				},
				fallback: ({
					error: o,
					eventId: c
				}) => {
					const g = f.e.getEventId() || c;
					return r().createElement(p.Z, {
						type: "page",
						error: o,
						eventId: g
					})
				}
			}, t);
			_.Z = l
		},
		"../react/app/components/ErrorStatus.tsx": function(V, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				s = n("../../../../node_modules/@cloudflare/style-container/es/index.js");

			function p(v, t) {
				if (v == null) return {};
				var o = f(v, t),
					c, g;
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(v);
					for (g = 0; g < a.length; g++) c = a[g], !(t.indexOf(c) >= 0) && (!Object.prototype.propertyIsEnumerable.call(v, c) || (o[c] = v[c]))
				}
				return o
			}

			function f(v, t) {
				if (v == null) return {};
				var o = {},
					c = Object.keys(v),
					g, a;
				for (a = 0; a < c.length; a++) g = c[a], !(t.indexOf(g) >= 0) && (o[g] = v[g]);
				return o
			}
			const i = (0, s.createComponent)(({
					margin: v
				}) => v ? {} : {
					height: 300,
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				}),
				u = (0, s.createComponent)(({
					theme: v,
					margin: t,
					size: o = 5
				}) => ({
					display: "flex",
					color: v.colors.gray[3],
					height: t ? "auto" : "100%",
					padding: t ? 0 : v.space[o > 1 ? o - 2 : 0],
					margin: t,
					justifyContent: "center",
					textAlign: "center",
					alignItems: "center",
					fontSize: v.fontSizes[o]
				})),
				l = v => {
					let {
						children: t
					} = v, o = p(v, ["children"]);
					return r().createElement(i, o, r().createElement(u, o, t))
				};
			_.Z = l
		},
		"../react/app/components/Footer.tsx": function(V, _, n) {
			"use strict";
			n.d(_, {
				Z: function() {
					return z
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				s = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				f = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				i = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow?5628"),
				l = n.n(u),
				v = n("../react/common/components/Apple/utils.tsx"),
				t = n("../react/utils/translator.tsx"),
				o = n("../../../../node_modules/moment/moment.js"),
				c = n.n(o);
			const g = () => {
					const w = c()().format("YYYY"),
						K = Y => {
							l().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: Y
							})
						};
					return r().createElement(a, {
						marginTop: "auto"
					}, r().createElement(C, null, r().createElement(d, null, r().createElement(E, null, "\xA9 ", w, " Cloudflare, Inc."), r().createElement(E, null, r().createElement(N, null, r().createElement(R, {
						showOnDeskTop: !1
					}, r().createElement(y, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => K("Support")
					}, r().createElement(t.cC, {
						id: "common.support"
					}))), r().createElement(R, null, r().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => K("Privacy Policy")
					}, r().createElement(t.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(R, null, r().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => K("Terms of Use")
					}, r().createElement(t.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(R, null, r().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => K("Cookie Preferences")
					}, r().createElement(t.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(R, null, r().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => K("Trademark")
					}, r().createElement(t.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(N, null, r().createElement(R, null, r().createElement(y, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => K("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(t.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				a = (0, i.createComponent)(({
					theme: w,
					marginTop: K
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: K
				})),
				C = (0, i.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				d = (0, i.createComponent)(({
					theme: w
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${w.space[3]}px`
					}
				})),
				E = (0, i.createComponent)(({
					theme: w
				}) => ({
					width: "100%",
					color: w.colors.white,
					fontSize: w.fontSizes[1],
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
				N = (0, i.createComponent)(({
					theme: w
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: w.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				R = (0, i.createComponent)(({
					showOnDeskTop: w = !0,
					theme: K
				}) => ({
					color: K.colors.white,
					fontSize: K.fontSizes[1],
					height: "20px",
					display: w ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: K.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: K.space[3],
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
				y = (0, i.createStyledComponent)(({
					theme: w
				}) => ({
					textDecoration: "none",
					color: w.colors.white,
					"&:hover": {
						color: w.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var S = g,
				h = n("../react/pages/welcome/routes.ts"),
				O = n("../react/utils/cookiePreferences.ts"),
				G = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				H = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				re = () => {
					const [w, K] = (0, e.useState)(!1), Y = (0, O.wV)(), ue = () => {
						K(!0)
					}, F = () => {
						K(!1)
					}, ne = Y && Y === "US" ? (0, t.ZP)("footer.cpra_cta.privacy_choices") : (0, t.ZP)("footer.cpra_cta.cookie_preferences"), ae = {
						background: "transparent",
						borderRadius: "none",
						color: w ? (0, G.Yc)() ? "#ee730a" : "#003681" : (0, G.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: w ? "underline" : "none",
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
					return r().createElement(p.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: ae,
						onMouseEnter: ue,
						onMouseLeave: F
					}, r().createElement(p.Ei, {
						height: 15,
						src: H,
						mr: 2,
						alt: ne
					}), ne)
				};

			function J() {
				return J = Object.assign ? Object.assign.bind() : function(w) {
					for (var K = 1; K < arguments.length; K++) {
						var Y = arguments[K];
						for (var ue in Y) Object.prototype.hasOwnProperty.call(Y, ue) && (w[ue] = Y[ue])
					}
					return w
				}, J.apply(this, arguments)
			}

			function Q(w, K) {
				if (w == null) return {};
				var Y = k(w, K),
					ue, F;
				if (Object.getOwnPropertySymbols) {
					var ne = Object.getOwnPropertySymbols(w);
					for (F = 0; F < ne.length; F++) ue = ne[F], !(K.indexOf(ue) >= 0) && (!Object.prototype.propertyIsEnumerable.call(w, ue) || (Y[ue] = w[ue]))
				}
				return Y
			}

			function k(w, K) {
				if (w == null) return {};
				var Y = {},
					ue = Object.keys(w),
					F, ne;
				for (ne = 0; ne < ue.length; ne++) F = ue[ne], !(K.indexOf(F) >= 0) && (Y[F] = w[F]);
				return Y
			}
			const $ = 24,
				U = (0, i.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,G.Yc)()?G.rS.colors.orange[6]:G.rS.colors.blue[4]}`
					}
				}), p.A),
				le = w => {
					let {
						onClick: K
					} = w, Y = Q(w, ["onClick"]);
					return r().createElement(U, J({
						onClick: ue => {
							l().sendEvent("navigate footer nav", {
								destinationPage: Y.href
							}), K && K(ue)
						}
					}, Y))
				},
				pe = w => {
					let {
						children: K,
						target: Y,
						rel: ue
					} = w, F = Q(w, ["children", "target", "rel"]);
					return r().createElement(le, J({
						target: Y || "_blank",
						rel: ue || "noopener noreferrer"
					}, F), K, r().createElement(f.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				};
			var z = () => {
				var w, K;
				const Y = [h.d.root.pattern].some(ue => (0, s.matchPath)(location.pathname, {
					path: ue
				}));
				return (0, v.PP)() ? r().createElement(S, null) : Y ? null : r().createElement(p.$_, {
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: 4,
					px: 3,
					mt: "auto"
				}, r().createElement(p.ZC, {
					display: "flex",
					flexWrap: "wrap",
					mx: "auto",
					maxWidth: "64rem"
				}, r().createElement(p.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, r().createElement(p.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, r().createElement(p.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.contact")), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.contact_support"))), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, t.ZP)("footer.contact_sales"))), r().createElement(p.Dd, {
					mt: 3
				}, r().createElement(p.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, r().createElement(le, {
					"aria-label": (0, t.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${$}px`
				}, r().createElement(f.J, {
					type: "twitter",
					size: $
				})), r().createElement(le, {
					"aria-label": (0, t.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${$}px`
				}, r().createElement(f.J, {
					type: "facebook",
					size: $
				})), r().createElement(le, {
					"aria-label": (0, t.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${$}px`
				}, r().createElement(f.J, {
					type: "linkedin",
					size: $
				})))))), r().createElement(p.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, r().createElement(p.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, r().createElement(p.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.what_we_do")), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://www.cloudflare.com/plans"
				}, (0, t.ZP)("footer.plans"))), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://www.cloudflare.com/overview"
				}, (0, t.ZP)("footer.about"))), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://www.cloudflare.com/network-map"
				}, (0, t.ZP)("footer.network_map"))))), r().createElement(p.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, r().createElement(p.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, r().createElement(p.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.resources")), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://developers.cloudflare.com"
				}, (0, t.ZP)("footer.product_docs"))), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://blog.cloudflare.com"
				}, (0, t.ZP)("footer.blog"))), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, t.ZP)("footer.testimonials"))), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://partners.cloudflare.com"
				}, (0, t.ZP)("footer.hosting_partners"))), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://api.cloudflare.com"
				}, (0, t.ZP)("footer.api"))))), r().createElement(p.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5],
					position: "relative"
				}, r().createElement("div", {
					style: {
						position: "absolute",
						top: "0",
						left: "0",
						height: "24px",
						width: "100%"
					},
					"aria-hidden": "true",
					title: `Current version: ${((w=window)===null||w===void 0||(K=w.build)===null||K===void 0?void 0:K.dashVersion)||"unknown"}`
				}), r().createElement(p.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, r().createElement(p.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.support")), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.help_center"))), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://community.cloudflare.com"
				}, (0, t.ZP)("footer.community"))), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://www.cloudflarestatus.com"
				}, (0, t.ZP)("footer.system_status"))), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://www.cloudflare.com/abuse"
				}, (0, t.ZP)("footer.trust_safety"))))), r().createElement(p.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, r().createElement(p.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, r().createElement(p.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.about_us")), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://www.cloudflare.com/people"
				}, (0, t.ZP)("footer.team"))), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://www.cloudflare.com/careers"
				}, (0, t.ZP)("footer.careers"))), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, t.ZP)("footer.press"))), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, t.ZP)("footer.tos"))), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, t.ZP)("footer.subs_agreement"))), r().createElement(p.Dd, {
					mb: 2
				}, r().createElement(pe, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, t.ZP)("footer.privacy_policy"))))), r().createElement(re, null)))
			}
		},
		"../react/app/components/LoadingSuspense.tsx": function(V, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				s = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				p = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				f = n("../react/utils/translator.tsx"),
				i = n("../react/app/components/ErrorStatus.tsx"),
				u = n("../react/common/components/EmptyPage.jsx"),
				l = n("../react/common/hooks/suspenseHelpers.ts");

			function v(c) {
				const [g, a] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const C = window.setTimeout(() => a(!0), c);
					return () => window.clearTimeout(C)
				}, []), g
			}
			const t = ({
					loadingTimeout: c = 1e3,
					stillLoadingTimeout: g = 9e3
				}) => {
					const a = v(c),
						C = v(g);
					if ((0, l.nW)(), !a && !C) return r().createElement(u.Z, null);
					const d = C ? r().createElement(f.cC, {
						id: "common.still_loading"
					}) : a ? r().createElement(f.cC, {
						id: "common.loading"
					}) : null;
					return r().createElement(i.Z, {
						size: 5
					}, r().createElement(p.ZC, {
						mr: 3
					}, r().createElement(s.g, {
						size: "2x"
					})), d)
				},
				o = ({
					children: c
				}) => r().createElement(e.Suspense, {
					fallback: r().createElement(t, null)
				}, c);
			_.Z = o
		},
		"../react/app/components/Persistence/api.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				C8: function() {
					return u
				},
				d3: function() {
					return i
				},
				lt: function() {
					return f
				},
				m6: function() {
					return v
				},
				n: function() {
					return l
				},
				yl: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = n.n(e);
			const s = "/persistence/user",
				p = async () => {
					try {
						return await (await e.get(s, {
							hideErrorAlert: !0
						})).body
					} catch (t) {
						console.error(t)
					}
				}, f = async (t, o) => {
					try {
						return await (await e.post(`${s}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: t,
								accountId: o
							}),
							hideErrorAlert: !0
						})).body
					} catch (c) {
						return console.error(c), []
					}
				}, i = async (t, o) => {
					try {
						return await e.post(`/accounts/${t}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: o
							}),
							hideErrorAlert: !0
						}), !0
					} catch (c) {
						return console.error(c), !1
					}
				}, u = async t => {
					try {
						return await (await e.post(s, {
							body: JSON.stringify({
								darkMode: t
							})
						})).body
					} catch (o) {
						console.error(o)
					}
				}, l = async t => {
					try {
						return await (await e.post(`${s}/recents`, {
							body: JSON.stringify(t),
							hideErrorAlert: !0
						})).body
					} catch (o) {
						console.error(o)
					}
				}, v = async t => {
					try {
						return await (await e.post(`${s}/viewed-changes`, {
							body: JSON.stringify(t),
							hideErrorAlert: !0
						})).body
					} catch (o) {
						throw console.error(o), o
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(V, _, n) {
			"use strict";
			n.d(_, {
				Wl: function() {
					return v
				},
				lp: function() {
					return d
				},
				Z_: function() {
					return N
				},
				r7: function() {
					return re
				},
				Tv: function() {
					return ee
				},
				yZ: function() {
					return R
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				s = n("../react/app/redux/index.ts"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow?5628"),
				f = n.n(p),
				i = n("../react/utils/bootstrap.ts"),
				u = n("../react/common/selectors/zoneSelectors.ts"),
				l = n("../react/app/components/Persistence/api.ts");
			const v = 10;

			function t(z) {
				for (var w = 1; w < arguments.length; w++) {
					var K = arguments[w] != null ? Object(arguments[w]) : {},
						Y = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(K).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(K, ue).enumerable
					})), Y.forEach(function(ue) {
						o(z, ue, K[ue])
					})
				}
				return z
			}

			function o(z, w, K) {
				return w = c(w), w in z ? Object.defineProperty(z, w, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[w] = K, z
			}

			function c(z) {
				var w = g(z, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function g(z, w) {
				if (typeof z != "object" || z === null) return z;
				var K = z[Symbol.toPrimitive];
				if (K !== void 0) {
					var Y = K.call(z, w || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(z)
			}
			const a = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				C = t({}, a, {
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
				d = (0, e.createContext)(C),
				E = d.Consumer,
				N = ({
					children: z,
					onDarkModeChangeCb: w
				}) => {
					const [K, Y] = (0, e.useState)(a), [ue, F] = (0, e.useState)(C.isLoading), ne = (0, i.$8)(), ae = (0, s.p4)(D => (0, u.wH)(D));
					(0, e.useEffect)(() => {
						ne ? (0, l.yl)().then(D => {
							D && (Y(D), w(D.darkMode))
						}).finally(() => F(!1)) : F(!1)
					}, [ne]);
					const x = (D, W) => !!K.favorites.find(oe => oe.type === "zone" && oe.name === D && oe.accountId === W),
						A = D => K.favorites.filter(oe => oe.type === "zone" && oe.accountId === D).length < v;
					return r().createElement(d.Provider, {
						value: t({}, K, {
							isLoading: ue,
							actions: {
								canAccountStarZone: A,
								isZoneStarred: x,
								starZone: async (D, W) => {
									var oe;
									const ve = !x(D, W),
										Oe = A(W);
									if (ve && !Oe) {
										console.log("can not star zone - account is at limit");
										return
									}
									const B = await (0, l.lt)(D, W);
									f().sendEvent("click star zone", {
										isStarring: ve,
										totalStarredZones: B.filter(ce => ce.accountId === W && ce.type === "zone").length,
										totalZones: ae == null || (oe = ae.paginationData) === null || oe === void 0 ? void 0 : oe.info.total_count
									}), Y(t({}, K, {
										favorites: B
									}))
								},
								setDarkMode: async D => {
									const W = await (0, l.C8)(D);
									Y(W), w(W.darkMode)
								},
								logRouteVisited: async D => {
									var W;
									const oe = await (0, l.n)(D);
									Y((W = oe) !== null && W !== void 0 ? W : t({}, K))
								},
								viewChange: async D => {
									const W = await (0, l.m6)(D);
									Y(t({}, K, {
										viewedChanges: W
									}))
								}
							}
						})
					}, z)
				},
				R = () => (0, e.useContext)(d);
			var y = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				S = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function h() {
				return h = Object.assign ? Object.assign.bind() : function(z) {
					for (var w = 1; w < arguments.length; w++) {
						var K = arguments[w];
						for (var Y in K) Object.prototype.hasOwnProperty.call(K, Y) && (z[Y] = K[Y])
					}
					return z
				}, h.apply(this, arguments)
			}

			function O(z, w) {
				if (z == null) return {};
				var K = G(z, w),
					Y, ue;
				if (Object.getOwnPropertySymbols) {
					var F = Object.getOwnPropertySymbols(z);
					for (ue = 0; ue < F.length; ue++) Y = F[ue], !(w.indexOf(Y) >= 0) && (!Object.prototype.propertyIsEnumerable.call(z, Y) || (K[Y] = z[Y]))
				}
				return K
			}

			function G(z, w) {
				if (z == null) return {};
				var K = {},
					Y = Object.keys(z),
					ue, F;
				for (F = 0; F < Y.length; F++) ue = Y[F], !(w.indexOf(ue) >= 0) && (K[ue] = z[ue]);
				return K
			}
			const H = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var re = z => {
					let {
						isStarred: w,
						size: K = 16
					} = z, Y = O(z, ["isStarred", "size"]);
					const ue = H[(0, y.Yc)() ? "dark" : "light"];
					return r().createElement(S.J, h({
						type: w ? "star" : "star-outline",
						color: w ? ue.gold : ue.gray,
						size: K
					}, Y))
				},
				J = n("../../../../node_modules/@cloudflare/elements/es/index.js");

			function Q(z) {
				for (var w = 1; w < arguments.length; w++) {
					var K = arguments[w] != null ? Object(arguments[w]) : {},
						Y = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(K).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(K, ue).enumerable
					})), Y.forEach(function(ue) {
						k(z, ue, K[ue])
					})
				}
				return z
			}

			function k(z, w, K) {
				return w = $(w), w in z ? Object.defineProperty(z, w, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[w] = K, z
			}

			function $(z) {
				var w = U(z, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function U(z, w) {
				if (typeof z != "object" || z === null) return z;
				var K = z[Symbol.toPrimitive];
				if (K !== void 0) {
					var Y = K.call(z, w || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(z)
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
			var ee = (0, e.forwardRef)(({
				featurePreview: z = !1,
				isStarred: w,
				onClickFn: K,
				isDisabled: Y,
				testId: ue,
				buttonText: F,
				size: ne = "large"
			}, ae) => {
				const x = le[(0, y.Yc)() ? "dark" : "light"][w && !z ? "active" : "default"],
					A = Q({}, ne === "large" && {
						starIconSize: 16,
						fontSize: 3,
						height: "auto",
						paddingLeft: "12px",
						paddingRight: 3
					}, ne === "small" && {
						starIconSize: 14,
						fontSize: 1,
						height: "1.5rem",
						paddingLeft: "6px",
						paddingRight: 2
					});
				return r().createElement(J.zx, {
					innerRef: ae,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: A.paddingRight,
					gap: 1,
					pl: A.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: z || Y ? "default" : "pointer",
					backgroundColor: x.bg,
					color: x.text,
					borderColor: x.border,
					onClick: K,
					opacity: Y ? .5 : 1,
					disabled: Y,
					fontSize: A.fontSize,
					height: A.height,
					"data-testid": ue
				}, r().createElement(re, {
					isStarred: z ? !1 : w,
					size: A.starIconSize
				}), F)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(V, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				s = n("../../../../node_modules/prop-types/index.js"),
				p = n.n(s),
				f = n("../../../common/intl/intl-react/src/index.ts"),
				i = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = n("../node_modules/@cloudflare/component-button/es/index.js"),
				l = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				v = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				o = n.n(t),
				c = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				g = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				a = n("../react/app/components/Footer.tsx"),
				C = n("../react/utils/url.ts");

			function d(Q) {
				for (var k = 1; k < arguments.length; k++) {
					var $ = arguments[k] != null ? Object(arguments[k]) : {},
						U = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols($).filter(function(le) {
						return Object.getOwnPropertyDescriptor($, le).enumerable
					})), U.forEach(function(le) {
						E(Q, le, $[le])
					})
				}
				return Q
			}

			function E(Q, k, $) {
				return k = N(k), k in Q ? Object.defineProperty(Q, k, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[k] = $, Q
			}

			function N(Q) {
				var k = R(Q, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function R(Q, k) {
				if (typeof Q != "object" || Q === null) return Q;
				var $ = Q[Symbol.toPrimitive];
				if ($ !== void 0) {
					var U = $.call(Q, k || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(Q)
			}
			const y = (0, i.createComponent)(({
					type: Q
				}) => ({
					height: Q !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				S = (0, i.createComponent)(({
					theme: Q,
					margin: k,
					size: $ = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: Q.colors.gray[3],
					height: k ? "auto" : "100%",
					padding: k ? 0 : Q.space[$ > 1 ? $ - 2 : 0],
					margin: k,
					justifyContent: "center",
					alignItems: "center"
				})),
				h = (0, i.createComponent)(() => ({
					textAlign: "left"
				})),
				O = (0, i.createComponent)(() => ({
					textAlign: "right"
				})),
				G = (0, i.createComponent)(({
					theme: Q
				}) => ({
					fontSize: Q.fontSizes[6]
				})),
				H = (0, i.createComponent)(({
					theme: Q
				}) => ({
					fontSize: Q.fontSizes[4]
				})),
				te = (0, i.createComponent)(({
					theme: Q
				}) => ({
					fontSize: Q.fontSizes[3]
				})),
				re = (0, i.createComponent)(({
					theme: Q
				}) => ({
					width: "100%",
					height: 125,
					marginTop: Q.space[4],
					padding: Q.space[2]
				}), "textarea");
			class J extends r().Component {
				constructor(...k) {
					super(...k);
					E(this, "state", {
						value: "",
						submitted: !1
					}), E(this, "handleTextareaChange", $ => {
						this.setState({
							value: $.target.value
						})
					}), E(this, "sendErrToSentry10", async () => {
						try {
							var $, U, le, pe;
							const ee = (($ = window) === null || $ === void 0 || (U = $.bootstrap) === null || U === void 0 || (le = U.data) === null || le === void 0 || (pe = le.user) === null || pe === void 0 ? void 0 : pe.id) || "Unknown",
								z = this.props.eventId || l.eW(),
								w = {
									name: ee,
									email: `${ee}@userid.com`,
									comments: this.state.value,
									eventId: z,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: d({}, window.build)
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
						} catch (ee) {
							console.error(ee)
						}
					}), E(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), E(this, "renderContent", $ => r().createElement(f.oc, null, U => r().createElement(y, {
						type: $
					}, r().createElement(S, null, r().createElement(h, null, r().createElement(G, null, U.t("error.internal_issues")), r().createElement(H, null, U.t("error.help_us")), r().createElement(re, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: le => this.handleTextareaChange(le),
						disabled: this.state.submitted,
						placeholder: U.t("error.give_feedback")
					}), r().createElement(O, null, !this.state.submitted && r().createElement(u.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, U.t("common.submit")), this.state.submitted && r().createElement(te, null, U.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const k = this.props.error;
					console.error(`SomethingWrong: ${k}`), v.YA("user_feedback_form_displayed", "yes"), v.YA("normalizedPath", (0, C.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: k
					} = this.props;
					return k === "fullscreen" ? r().createElement("div", null, r().createElement(c.h4, null, r().createElement(t.Link, {
						to: "/"
					}, r().createElement(g.TR, null))), this.renderContent(k), r().createElement(a.Z, null)) : this.renderContent(k)
				}
			}
			J.propTypes = {
				type: p().oneOf(["fullscreen", "page"]),
				error: p().oneOfType([p().string, p().object]),
				eventId: p().string
			}, _.Z = J
		},
		"../react/app/providers/storeContainer.js": function(V, _, n) {
			"use strict";
			n.d(_, {
				bh: function() {
					return Ct
				}
			});
			var e = n("../../../../node_modules/redux/es/redux.js"),
				r = n("../../../../node_modules/redux-thunk/es/index.js"),
				s = n("../../../../node_modules/redux-persist/es/index.js"),
				p = n("../../../../node_modules/redux-persist/lib/storage/index.js"),
				f = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				i = n("../react/app/redux/makeReducer.js"),
				u = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = n.n(u);
			const v = u.static.from({
					data: void 0,
					errors: null,
					isRequesting: !1,
					isErrored: !1
				}),
				t = (T, {
					type: I,
					meta: Z
				}) => Z && Z.method === "put" && I.indexOf("membership") === 0 ? v : T;
			var c = {
					reducer: (0, i.ZP)("invite").on("default", t)
				},
				g = n("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				a = n("../react/common/actionTypes.ts");
			const C = (T = l().from({
					isRequesting: !1,
					isErrored: !1,
					isFinished: !1,
					securityToken: null,
					errors: null
				}), I) => {
					switch (I.type) {
						case "ONBOARDING_SIGNUP_REQUEST":
							return l().merge(T, {
								isRequesting: !0,
								isFinished: !1,
								isErrored: !1,
								errors: null
							});
						case "ONBOARDING_SIGNUP_SUCCESS":
							return l().merge(T, {
								isRequesting: !1,
								isFinished: !0,
								isErrored: !1
							});
						case "ONBOARDING_SIGNUP_FAILURE":
							return l().merge(T, {
								isRequesting: !1,
								isErrored: !0,
								errors: I.errors
							});
						case "ONBOARDING_SECURITY_TOKEN_UPDATE":
							return l().update(T, "securityToken", () => I.token)
					}
					return (0, g.h)(I, T)
				},
				d = {
					apikey: (0, i.ZP)(a.Yc.APIKEY),
					apitoken: (0, i.ZP)(a.Yc.APITOKEN),
					emailrollback: (0, i.ZP)(a.Yc.EMAIL_ROLLBACK),
					deleteuser: (0, i.ZP)(a.Yc.DELETE_USER),
					forgotpass: (0, i.ZP)(a.Yc.FORGOT_PASS),
					login: (0, i.ZP)(a.Yc.LOGIN),
					origincakey: (0, i.ZP)(a.Yc.ORIGIN_CA_KEY),
					signup: (0, i.ZP)(a.Yc.SIGNUP)
				};
			var E = {
				reducer: (0, e.combineReducers)({
					userCreation: C,
					[a.Yc.APIKEY]: d.apikey,
					[a.Yc.APITOKEN]: d.apitoken,
					[a.Yc.EMAIL_ROLLBACK]: d.emailrollback,
					[a.Yc.DELETE_USER]: d.deleteuser,
					[a.Yc.FORGOT_PASS]: d.forgotpass,
					[a.Yc.LOGIN]: d.login,
					[a.Yc.ORIGIN_CA_KEY]: d.origincakey,
					[a.Yc.SIGNUP]: d.signup
				})
			};

			function N(T = (0, u.static)({}), I) {
				switch (I.type) {
					case a.Li:
						const {
							userId: Z, accountId: de, timeStamp: he
						} = I;
						return u.static.setIn(T, [Z, de], {
							lastSeen: he
						});
					default:
						return T
				}
			}

			function R(T) {
				for (var I = 1; I < arguments.length; I++) {
					var Z = arguments[I] != null ? Object(arguments[I]) : {},
						de = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(Z).filter(function(he) {
						return Object.getOwnPropertyDescriptor(Z, he).enumerable
					})), de.forEach(function(he) {
						y(T, he, Z[he])
					})
				}
				return T
			}

			function y(T, I, Z) {
				return I = S(I), I in T ? Object.defineProperty(T, I, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = Z, T
			}

			function S(T) {
				var I = h(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function h(T, I) {
				if (typeof T != "object" || T === null) return T;
				var Z = T[Symbol.toPrimitive];
				if (Z !== void 0) {
					var de = Z.call(T, I || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}

			function O(T = {}, I) {
				const Z = `__ACTIVE__${I.activeKey}`;
				switch (I.type) {
					case a.HI:
						return R({}, T, {
							[Z]: I.activeValue
						});
					case a.s1:
						return R({}, T, {
							[Z]: void 0
						});
					default:
						return T
				}
			}
			const G = () => [...Array(8)].map(T => Math.floor(Math.random() * 16).toString(16)).join(""),
				H = [];

			function te(T, I) {
				if (T === void 0) return H;
				switch (I.type) {
					case a.Np: {
						const {
							payload: Z,
							options: de
						} = I, {
							ModalComponent: he,
							props: tt
						} = Z;
						return T = de.replace ? H : T, [...T, {
							id: G(),
							ModalComponent: he,
							props: tt
						}]
					}
					case a.gM: {
						const {
							ModalComponent: Z
						} = I.payload;
						if (Z) {
							const de = T.findIndex(he => he.ModalComponent === Z);
							return de >= 0 ? T.slice(0, de) : T
						} else return T.slice(0, -1)
					}
					default:
						return T
				}
			}

			function re(T) {
				for (var I = 1; I < arguments.length; I++) {
					var Z = arguments[I] != null ? Object(arguments[I]) : {},
						de = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(Z).filter(function(he) {
						return Object.getOwnPropertyDescriptor(Z, he).enumerable
					})), de.forEach(function(he) {
						J(T, he, Z[he])
					})
				}
				return T
			}

			function J(T, I, Z) {
				return I = Q(I), I in T ? Object.defineProperty(T, I, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = Z, T
			}

			function Q(T) {
				var I = k(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function k(T, I) {
				if (typeof T != "object" || T === null) return T;
				var Z = T[Symbol.toPrimitive];
				if (Z !== void 0) {
					var de = Z.call(T, I || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}

			function $(T = {}, I) {
				const Z = `__TOGGLE__${I.toggleKey}`;
				switch (I.type) {
					case a.lV:
						return re({}, T, {
							[Z]: !0
						});
					case a.Cm:
						return re({}, T, {
							[Z]: !1
						});
					default:
						return T
				}
			}
			const U = {
				notifications: []
			};

			function le(T, I) {
				switch (T === void 0 && (T = U), I.type) {
					case a.Ng:
						return Object.assign({}, T, {
							notifications: T.notifications.concat(I.notification)
						});
					case a.Cz:
						return Object.assign({}, T, {
							notifications: T.notifications.filter(function(Z) {
								return Z.id !== I.notificationId
							})
						});
					default:
						return T
				}
			}

			function pe(T) {
				for (var I = 1; I < arguments.length; I++) {
					var Z = arguments[I] != null ? Object(arguments[I]) : {},
						de = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(Z).filter(function(he) {
						return Object.getOwnPropertyDescriptor(Z, he).enumerable
					})), de.forEach(function(he) {
						ee(T, he, Z[he])
					})
				}
				return T
			}

			function ee(T, I, Z) {
				return I = z(I), I in T ? Object.defineProperty(T, I, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = Z, T
			}

			function z(T) {
				var I = w(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function w(T, I) {
				if (typeof T != "object" || T === null) return T;
				var Z = T[Symbol.toPrimitive];
				if (Z !== void 0) {
					var de = Z.call(T, I || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const K = T => (0, i.ZP)(T).on("success", (I, Z, {
					meta: de
				}) => {
					var he, tt;
					const {
						accountId: ct,
						zoneId: bt,
						dateOnly: gt = !1
					} = de.params || {};
					let He = "";
					const lt = {},
						ft = pe({}, (he = I.paginationData) === null || he === void 0 || (tt = he.options) === null || tt === void 0 ? void 0 : tt.editedDate);
					I.data.forEach(Tt => {
						const {
							id: ot,
							allocation: At,
							edited_date: yt
						} = Tt;
						lt[ot] = At.value, yt > He && (He = yt)
					}), ft[ct || bt] = He;
					const ut = {
						options: {
							editedDate: ft
						}
					};
					return gt ? pe({}, I, {
						paginationData: ut
					}) : pe({}, I, {
						paginationData: ut,
						data: lt
					})
				}),
				Y = (0, e.combineReducers)({
					account: K("accountEntitlements"),
					zone: K("zoneEntitlements")
				});
			var ue = n("../react/app/components/DeepLink/reducer.ts");

			function F(T) {
				for (var I = 1; I < arguments.length; I++) {
					var Z = arguments[I] != null ? Object(arguments[I]) : {},
						de = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(Z).filter(function(he) {
						return Object.getOwnPropertyDescriptor(Z, he).enumerable
					})), de.forEach(function(he) {
						ne(T, he, Z[he])
					})
				}
				return T
			}

			function ne(T, I, Z) {
				return I = ae(I), I in T ? Object.defineProperty(T, I, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = Z, T
			}

			function ae(T) {
				var I = x(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function x(T, I) {
				if (typeof T != "object" || T === null) return T;
				var Z = T[Symbol.toPrimitive];
				if (Z !== void 0) {
					var de = Z.call(T, I || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const A = (0, i.ZP)("onboardingGuide").on("success", (T, I, Z) => {
				if (Z.meta.method === "post") {
					var de;
					const he = I.data && I.data.completedTasks || [],
						tt = (de = I.data && I.data.readTasks) !== null && de !== void 0 ? de : [];
					return F({}, T, {
						data: {
							completedTasks: Array.from(new Set(he.concat(Z.payload.status === "completedTasks" ? Z.payload.taskName : []))),
							readTasks: Array.from(new Set(tt.concat(Z.payload.status === "readTasks" ? Z.payload.taskName : [])))
						}
					})
				}
				return T
			});
			var D = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js");

			function W(T) {
				for (var I = 1; I < arguments.length; I++) {
					var Z = arguments[I] != null ? Object(arguments[I]) : {},
						de = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(Z).filter(function(he) {
						return Object.getOwnPropertyDescriptor(Z, he).enumerable
					})), de.forEach(function(he) {
						oe(T, he, Z[he])
					})
				}
				return T
			}

			function oe(T, I, Z) {
				return I = ve(I), I in T ? Object.defineProperty(T, I, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = Z, T
			}

			function ve(T) {
				var I = Oe(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function Oe(T, I) {
				if (typeof T != "object" || T === null) return T;
				var Z = T[Symbol.toPrimitive];
				if (Z !== void 0) {
					var de = Z.call(T, I || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const B = (T, I) => {
				const {
					meta: Z
				} = I;
				return Z && Z.method === "delete" && !T[Z.entityType] ? T : (0, D.uW)(T, I)
			};
			var ce = {
					access: (0, e.combineReducers)({
						accessOrganizations: (0, i.ZP)("organizations").modifyInitialState(T => W({}, T, {
							needsHydration: !0,
							data: {
								auth_domain: "",
								name: "",
								login_design: {}
							}
						})).on("success", (T, I) => W({}, T, {
							data: Array.isArray(T == null ? void 0 : T.data) ? I == null ? void 0 : I.data : T == null ? void 0 : T.data,
							needsHydration: !1
						})).on("error", T => W({}, T, {
							needsHydration: !1
						}))
					}),
					accountAccess: N,
					accounts: (0, i.ZP)("accounts"),
					application: (0, e.combineReducers)({
						active: O,
						modals: te,
						toggles: $
					}),
					deepLink: ue.r,
					entitlements: Y,
					entities: B,
					gates: f.vq,
					notifications: le,
					onboarding: E.reducer,
					onboardingGuide: A,
					userCommPreferences: (0, i.ZP)("userCommPreferences"),
					userDetails: (0, i.ZP)("userDetails"),
					invite: c.reducer,
					membership: (0, i.ZP)("membership"),
					memberships: (0, i.ZP)("memberships").on("success", (T, I, Z) => Z.meta.method === "delete" ? W({}, T, {
						data: I.data.filter(de => de !== Z.payload)
					}) : T),
					filteredMemberships: (0, i.ZP)("filteredMemberships"),
					user: (0, i.ZP)("user"),
					zone: (0, i.ZP)("zone"),
					zoneFlags: (0, i.ZP)("zoneFlags"),
					zoneSubscription: (0, i.ZP)("zoneSubscription"),
					zoneSubscriptions: (0, i.ZP)("zoneSubscriptions"),
					zones: (0, i.ZP)("zones"),
					zonesRoot: (0, i.ZP)("zonesRoot"),
					zonesAccount: (0, i.ZP)("zonesAccount")
				},
				we = n("../react/app/redux/normalizer.js"),
				ze = n("../../../../node_modules/@sentry/react/esm/redux.js"),
				xe = n("../react/common/selectors/zoneSelectors.ts"),
				Ne = n("../../../../node_modules/object.pick/index.js"),
				je = n.n(Ne);

			function Ve(T) {
				for (var I = 1; I < arguments.length; I++) {
					var Z = arguments[I] != null ? Object(arguments[I]) : {},
						de = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(Z).filter(function(he) {
						return Object.getOwnPropertyDescriptor(Z, he).enumerable
					})), de.forEach(function(he) {
						Ye(T, he, Z[he])
					})
				}
				return T
			}

			function Ye(T, I, Z) {
				return I = rt(I), I in T ? Object.defineProperty(T, I, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = Z, T
			}

			function rt(T) {
				var I = Xe(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function Xe(T, I) {
				if (typeof T != "object" || T === null) return T;
				var Z = T[Symbol.toPrimitive];
				if (Z !== void 0) {
					var de = Z.call(T, I || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const Qe = ["accountRoles", "accountSubscriptions", "application", "caching", "crypto", "customizations", "edgeauth", "access", "entitlements", "fields", "firewall", "notifications", "onboarding", "partners", "performance", "ratePlans", "settings", "traffic", "user", "zone", "zones"],
				Je = T => {
					const I = je()(T, Qe),
						Z = (0, xe.nA)(T);
					return Ve({}, I, {
						accountTwoFa: T.profile && T.profile.twoFactor,
						currentZone: je()(Z, ["plan", "type"])
					})
				},
				qe = ({
					type: T,
					meta: I
				}) => ({
					type: T,
					entityType: I && I.entityType
				});
			var fe = n("../react/app/reducerRegistry.js"),
				ye = n("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				me = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				be = n("../react/common/constants/index.ts"),
				L = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				X = n("../react/app/redux/makeAction.js"),
				_e = n("../react/common/actions/membershipActions.ts");
			const Re = "get";

			function* ke(T) {
				const I = {
					entityType: T.entityType,
					method: Re
				};
				try {
					yield(0, me.gw)(200), yield(0, me.gz)((0, X.dJ)({
						type: `${T.entityType}.start`,
						meta: I
					}));
					const Z = yield(0, me.RE)(L[Re], T.url, T.params[0]);
					let de = Z && Z.body;
					T.type === be.UM.MEMBERSHIPS_ROOT_REQUESTED && (de = (0, _e.ct)({
						payload: de.result
					})), yield(0, me.gz)((0, X.Oy)({
						type: `${T.entityType}.success`,
						payload: de,
						meta: {
							entityType: T.entityType,
							method: Re
						}
					}, {}, T.params, {}, Z))
				} catch (Z) {
					throw yield(0, me.gz)((0, X.$J)({
						type: `${T.entityType}.error`,
						payload: Z,
						error: !0,
						meta: I
					}, {}, T.params, {}, Z)), Z
				}
			}
			var Ue = [(0, me.Fm)(be.UM.ZONES_ROOT_REQUESTED, ke), (0, me.Fm)(be.UM.ZONES_ACCOUNT_REQUESTED, ke), (0, me.Fm)(be.UM.ZONES_HEADER_REQUESTED, ke), (0, me.Fm)(be.UM.MEMBERSHIPS_ROOT_REQUESTED, ke), (0, me.Fm)(be.UM.ACCOUNT_MEMBERS_REQUESTED, ke)],
				Be = n("../react/pages/apps/marketplace/config/sagas.ts");

			function* Me() {
				yield(0, me.$6)([...Ue, ...Be.y])
			}
			var Ae = n("../react/app/redux/processActionMiddleware.js"),
				Ze = n("../../../../node_modules/is-promise/index.js"),
				mt = n.n(Ze);

			function Ge(T) {
				for (var I = 1; I < arguments.length; I++) {
					var Z = arguments[I] != null ? Object(arguments[I]) : {},
						de = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(Z).filter(function(he) {
						return Object.getOwnPropertyDescriptor(Z, he).enumerable
					})), de.forEach(function(he) {
						at(T, he, Z[he])
					})
				}
				return T
			}

			function at(T, I, Z) {
				return I = st(I), I in T ? Object.defineProperty(T, I, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = Z, T
			}

			function st(T) {
				var I = j(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function j(T, I) {
				if (typeof T != "object" || T === null) return T;
				var Z = T[Symbol.toPrimitive];
				if (Z !== void 0) {
					var de = Z.call(T, I || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const se = {
					key: "cf-redux-store",
					storage: p.Z,
					whitelist: ["accountAccess", "invite"]
				},
				Ee = (0, ye.ZP)(),
				Ie = [({
					dispatch: T
				}) => I => Z => mt()(Z) ? Z.then(de => T(de)) : I(Z), Ee, r.Z, Ae.Z, we.qR],
				Fe = T => (0, s.Wq)(se, Ge({}, ce, T));

			function et() {
				const T = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					Z = e.compose((0, e.applyMiddleware)(...Ie), ze.w({
						actionTransformer: qe,
						stateTransformer: Je
					})),
					de = {},
					he = (0, e.createStore)(Fe(fe.Z.getReducers()), de, Z);
				Ee.run(Me), (0, s.p5)(he);
				const ct = (n.g.bootstrap || {}).data || {};
				return he.dispatch((0, D.mW)("user", ct.user)), he
			}
			let Se;
			fe.Z.setChangeListener(T => {
				var I;
				Se && ((I = Se) === null || I === void 0 ? void 0 : I.replaceReducer) && (Se.replaceReducer(Fe(T)), (0, s.p5)(Se))
			});

			function Ct() {
				return Se || (Se = et()), Se
			}
		},
		"../react/app/reducerRegistry.js": function(V, _, n) {
			"use strict";

			function e(u) {
				for (var l = 1; l < arguments.length; l++) {
					var v = arguments[l] != null ? Object(arguments[l]) : {},
						t = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && t.push.apply(t, Object.getOwnPropertySymbols(v).filter(function(o) {
						return Object.getOwnPropertyDescriptor(v, o).enumerable
					})), t.forEach(function(o) {
						r(u, o, v[o])
					})
				}
				return u
			}

			function r(u, l, v) {
				return l = s(l), l in u ? Object.defineProperty(u, l, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[l] = v, u
			}

			function s(u) {
				var l = p(u, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function p(u, l) {
				if (typeof u != "object" || u === null) return u;
				var v = u[Symbol.toPrimitive];
				if (v !== void 0) {
					var t = v.call(u, l || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(u)
			}
			class f {
				constructor() {
					this.listener = null, this.reducers = {}
				}
				getReducers() {
					return e({}, this.reducers)
				}
				emitChange() {
					this.listener && this.listener(this.getReducers())
				}
				register(l, v) {
					this.reducers = e({}, this.reducers, {
						[l]: v
					}), this.emitChange()
				}
				registerAll(l) {
					this.reducers = e({}, this.reducers, l), this.emitChange()
				}
				setChangeListener(l) {
					this.listener = l
				}
			}
			const i = new f;
			_.Z = i
		},
		"../react/app/redux/index.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				TZ: function() {
					return s
				},
				UM: function() {
					return f
				},
				ZS: function() {
					return p
				},
				p4: function() {
					return i
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				r = n.n(e);
			const s = () => (0, e.useStore)(),
				p = () => s().getState(),
				f = () => (0, e.useDispatch)(),
				i = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(V, _, n) {
			"use strict";
			n.d(_, {
				$J: function() {
					return c
				},
				Oy: function() {
					return o
				},
				SC: function() {
					return v
				},
				ZP: function() {
					return g
				},
				dJ: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				r = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				s = n.n(r);

			function p(a) {
				for (var C = 1; C < arguments.length; C++) {
					var d = arguments[C] != null ? Object(arguments[C]) : {},
						E = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(d).filter(function(N) {
						return Object.getOwnPropertyDescriptor(d, N).enumerable
					})), E.forEach(function(N) {
						f(a, N, d[N])
					})
				}
				return a
			}

			function f(a, C, d) {
				return C = i(C), C in a ? Object.defineProperty(a, C, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[C] = d, a
			}

			function i(a) {
				var C = u(a, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function u(a, C) {
				if (typeof a != "object" || a === null) return a;
				var d = a[Symbol.toPrimitive];
				if (d !== void 0) {
					var E = d.call(a, C || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(a)
			}
			const l = p({}, r),
				v = (a, C, d, E = {}) => {
					const N = a === "delete" ? "del" : a.toLowerCase();
					return d && N !== "del" && (E.body = d), l[N](C, E)
				},
				t = (a, C) => (a.meta.params = C, a),
				o = (a, C, d, E, {
					body: N = {}
				}) => {
					const {
						result: R,
						messages: y,
						result_info: S
					} = N, h = Object.values(C);
					if (a.meta.method === "delete") {
						const O = h[h.length - 1];
						a.meta.id = typeof O == "object" ? O.id : O
					}
					return a.payload = R, y && (a.meta.messages = y), h.length && (a.meta.params = C), S && (a.meta.paginationData = {
						info: S,
						actionParameters: h,
						options: d[0],
						insertionOffset: 0
					}), a
				},
				c = (a, C, d, E, N) => (a.payload = N && N.body && N.body.errors, a.meta.messages = N && N.body && N.body.messages, a.meta.params = C, a);

			function g(a, C, d, E) {
				const N = (0, e.RM)(a, C, d, E).apiFetch(v).on("start", t).on("success", o).on("error", c),
					R = N.mock;
				return N.mock = y => (R((...S) => {
					const h = y(...S);
					return h && typeof h == "object" && "result" in h ? h : {
						result: h
					}
				}), N), N
			}
		},
		"../react/app/redux/makeActionCreator.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				C: function() {
					return r
				}
			});
			var e = n("../react/app/redux/makeAction.js");

			function r(p, f) {
				return {
					get: (i, ...u) => (0, e.ZP)(p, "get", s(i, u), f),
					post: (i, ...u) => (0, e.ZP)(p, "post", s(i, u), f),
					delete: (i, ...u) => (0, e.ZP)(p, "delete", s(i, u), f),
					put: (i, ...u) => (0, e.ZP)(p, "put", s(i, u), f),
					patch: (i, ...u) => (0, e.ZP)(p, "patch", s(i, u), f)
				}
			}

			function s(p, f) {
				let i = "";
				const u = [...p.raw],
					l = [...f];
				for (; u.length > 0 || l.length > 0;) {
					const v = u.shift(),
						t = l.shift();
					i += v !== void 0 ? v : "", i += t !== void 0 ? `(${t})` : ""
				}
				return i
			}
		},
		"../react/app/redux/makeReducer.js": function(V, _, n) {
			"use strict";
			n.d(_, {
				ZP: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = n.n(e),
				s = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				p = n("../../../../node_modules/lodash/clone.js"),
				f = n.n(p);
			const i = e.static.from([]);

			function u(o, c, {
				meta: {
					paginationData: g,
					messages: a
				}
			}) {
				let C = e.static.set(o, "messages", a || i);
				return g ? e.static.merge(C, {
					paginationData: g
				}) : C
			}

			function l(o, c, {
				meta: {
					errors: g,
					messages: a
				}
			}) {
				const C = {
					messages: a || i
				};
				return g && (C.errors = g), e.static.merge(o, C)
			}

			function v(o, c, g = {}) {
				const {
					data: a
				} = o;
				if (c.type === `${g.insertDelete}.success`) {
					const {
						method: C
					} = c.meta;
					let d = 0,
						E = o;
					if (C === "post") {
						const N = a ? [c.payload, ...a] : [c.payload];
						E = e.static.set(E, "data", N), d = 1
					} else if (C === "delete" && a && a.includes(c.meta.id)) {
						const N = a.filter(R => R !== c.meta.id);
						E = e.static.set(E, "data", N), d = -1
					}
					return d && o.paginationData && (E = e.static.setIn(E, ["paginationData", "insertionOffset"], o.paginationData.insertionOffset + d)), E
				}
				return c.type === "cfForceUpdate" ? e.static.set(o, "data", f()(a)) : o
			}

			function t(o, c = {}) {
				return c.errorKey = "errors", (0, s.j3)(o, c).modifyInitialState(g => e.static.set(g, "messages", i)).on("success", u).on("error", l).on("default", v)
			}
		},
		"../react/app/redux/normalizer.js": function(V, _, n) {
			"use strict";
			n.d(_, {
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
					return l
				}
			});
			var e = n("../react/pages/home/alerts/config.tsx"),
				r = n("../react/pages/workers/entityTypes.ts"),
				s = n("../react/pages/email/types.ts"),
				p = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				f = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				i = n.n(f);
			const u = f.static.from([{
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
					entityType: "billingOutstandingTransactions",
					to: "billingTransactions"
				}, {
					entityType: "billingBadDebt",
					nestedProps: {
						invoices: "billingTransactions"
					}
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
				l = o => o.entities,
				v = (...o) => (0, p.P1)(u, l, ...o),
				t = (0, p.QB)(u)
		},
		"../react/app/redux/processActionMiddleware.js": function(V, _, n) {
			"use strict";
			var e = n("../react/app/redux/normalizer.js");
			const r = ".success",
				s = () => {
					const p = new Map,
						f = u => {
							const l = e.jQ.find(v => v.entityType === u);
							return l && (l.to ? l.to : l.entityType)
						},
						i = () => u => l => {
							if (l.type.endsWith(r)) {
								const v = l.type.substring(0, l.type.length - r.length),
									t = f(v),
									o = p.get(t);
								return u(o ? o(l) : l)
							}
							return u(l)
						};
					return i.on = (u, l) => {
						let v = p.get(u);
						p.set(u, t => l(v ? v(t) : t))
					}, i
				};
			_.Z = s()
		},
		"../react/app/redux/utils.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				F: function() {
					return s
				},
				_: function() {
					return r
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const r = p => (f, i, u) => (0, e.SC)(f, i, u, {
					hideErrorAlert: !0
				}).catch(p),
				s = p => f => {
					if (f.status === p) return f;
					throw f
				}
		},
		"../react/common/actionTypes.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Cm: function() {
					return i
				},
				Cz: function() {
					return r
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
					return s
				},
				Yc: function() {
					return o
				},
				gM: function() {
					return p
				},
				lV: function() {
					return f
				},
				s1: function() {
					return l
				}
			});
			const e = "NOTIFICATION_OPEN",
				r = "NOTIFICATION_CLOSE",
				s = "MODAL_OPEN",
				p = "MODAL_CLOSE",
				f = "TOGGLE_ON",
				i = "TOGGLE_OFF",
				u = "SET_ACTIVE",
				l = "CLEAR_ACTIVE",
				v = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let o = function(c) {
				return c.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", c.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", c.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", c.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", c.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", c.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", c.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", c.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", c.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", c
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				AX: function() {
					return c
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
					return o
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				r = n("../react/common/constants/index.ts");

			function s(g) {
				for (var a = 1; a < arguments.length; a++) {
					var C = arguments[a] != null ? Object(arguments[a]) : {},
						d = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(C).filter(function(E) {
						return Object.getOwnPropertyDescriptor(C, E).enumerable
					})), d.forEach(function(E) {
						p(g, E, C[E])
					})
				}
				return g
			}

			function p(g, a, C) {
				return a = f(a), a in g ? Object.defineProperty(g, a, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[a] = C, g
			}

			function f(g) {
				var a = i(g, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function i(g, a) {
				if (typeof g != "object" || g === null) return g;
				var C = g[Symbol.toPrimitive];
				if (C !== void 0) {
					var d = C.call(g, a || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(g)
			}
			const u = g => {
					const a = g.payload.map(C => s({}, C, {
						membershipId: C.id,
						id: C.account.id
					}));
					return s({}, g, {
						payload: a
					})
				},
				l = g => {
					const a = u(g);
					return Array.isArray(a.payload) ? s({}, g, {
						payload: a.payload[0]
					}) : s({}, g, {
						payload: null
					})
				},
				v = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", u),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				o = (...g) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: g
				}),
				c = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", l)
		},
		"../react/common/actions/modalActions.ts": function(V, _, n) {
			"use strict";
			n.r(_), n.d(_, {
				closeModal: function() {
					return p
				},
				openModal: function() {
					return s
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const r = {
				replace: !0
			};

			function s(f, i, u = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: f,
						props: i
					},
					options: u
				}
			}

			function p(f) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: f
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				IH: function() {
					return f
				},
				Vp: function() {
					return i
				},
				ZK: function() {
					return l
				},
				um: function() {
					return u
				},
				vU: function() {
					return v
				}
			});
			var e = n("../react/common/actionTypes.ts");

			function r(t) {
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
			let p = 0;

			function f(t, o, c = {}) {
				return c = c || {},
					function(g) {
						let a = p++,
							C = {
								id: a,
								type: t,
								message: o,
								delay: c.delay,
								persist: c.persist === void 0 ? !1 : c.persist,
								closable: c.closable === void 0 ? !0 : c.closable,
								onClose() {
									g(s(a)), c.onClose && c.onClose.apply(null, arguments)
								}
							};
						g(r(C))
					}
			}

			function i(t, o) {
				return f("success", t, o)
			}

			function u(t, o) {
				return f("info", t, o)
			}

			function l(t, o) {
				return f("warning", t, o)
			}

			function v(t, o) {
				return f("error", t, o)
			}
		},
		"../react/common/actions/userActions.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				BT: function() {
					return u
				},
				Ut: function() {
					return E
				},
				V_: function() {
					return N
				},
				Y9: function() {
					return C
				},
				Z0: function() {
					return y
				},
				mp: function() {
					return d
				},
				r3: function() {
					return R
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				r = n("../react/app/redux/utils.ts");

			function s(S) {
				for (var h = 1; h < arguments.length; h++) {
					var O = arguments[h] != null ? Object(arguments[h]) : {},
						G = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(O).filter(function(H) {
						return Object.getOwnPropertyDescriptor(O, H).enumerable
					})), G.forEach(function(H) {
						p(S, H, O[H])
					})
				}
				return S
			}

			function p(S, h, O) {
				return h = f(h), h in S ? Object.defineProperty(S, h, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[h] = O, S
			}

			function f(S) {
				var h = i(S, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function i(S, h) {
				if (typeof S != "object" || S === null) return S;
				var O = S[Symbol.toPrimitive];
				if (O !== void 0) {
					var G = O.call(S, h || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(S)
			}
			const u = (0, e.C)("user").get`/user`,
				l = (0, e.C)("user").patch`/user`,
				v = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				o = (0, e.C)("user").post`/user/two_factor_authentication`,
				c = (0, e.C)("user").put`/user/two_factor_authentication`,
				g = (0, e.C)("user").delete`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/email`;

			function C(...S) {
				return a(...S)
			}
			const d = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				E = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(S => s({}, S, {
					body: s({}, S.body, {
						result: {}
					})
				}))),
				N = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				R = (0, e.C)("userDetails").get`/user/details`,
				y = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/Apple/utils.tsx": function(V, _, n) {
			"use strict";
			n.d(_, {
				PP: function() {
					return o
				},
				RJ: function() {
					return u
				},
				tz: function() {
					return c
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow?5628"),
				r = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				p = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				f = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const i = () => l.test(window.location.pathname) || s.E.has(p.Qq),
				u = () => s.E.get(p.Qq),
				l = /^\/login\/apple(\/)?/,
				t = [l, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				o = () => {
					let g = !1;
					t.forEach(C => {
						if (C.test(window.location.pathname)) {
							g = !0;
							return
						}
					});
					const a = i() && g;
					return a && (0, f.C8)(f.LF.OFF), a
				},
				c = g => {
					g && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let a = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					g && (a = a + `&jwt=${g}`), window.location.href = a
				}
		},
		"../react/common/components/EmptyPage.jsx": function(V, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				s = n("../../../../node_modules/prop-types/index.js"),
				p = n.n(s),
				f = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const i = ({
				children: u
			}) => r().createElement(f.xu, {
				height: 411
			}, u);
			i.propTypes = {
				children: p().node
			}, _.Z = i
		},
		"../react/common/components/ModalManager.tsx": function(V, _, n) {
			"use strict";
			n.d(_, {
				ZP: function() {
					return c
				},
				dd: function() {
					return t
				},
				vR: function() {
					return v
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				s = n("webpack/sharing/consume/default/react-redux/react-redux");
			const p = g => g.application.modals;
			var f = n("../react/common/actions/modalActions.ts");

			function i() {
				return i = Object.assign ? Object.assign.bind() : function(g) {
					for (var a = 1; a < arguments.length; a++) {
						var C = arguments[a];
						for (var d in C) Object.prototype.hasOwnProperty.call(C, d) && (g[d] = C[d])
					}
					return g
				}, i.apply(this, arguments)
			}
			const u = r().createContext(null);
			class l extends r().Component {
				render() {
					const {
						modals: a,
						closeModal: C
					} = this.props;
					return r().createElement(r().Fragment, null, a.map(({
						ModalComponent: d,
						props: E = {},
						id: N
					}) => {
						const R = () => {
							typeof E.onClose == "function" && E.onClose(), C(d)
						};
						return r().createElement(u.Provider, {
							key: N,
							value: {
								closeModal: R
							}
						}, r().createElement(d, i({}, E, {
							isOpen: !0,
							closeModal: R
						})))
					}))
				}
			}

			function v() {
				const g = r().useContext(u);
				if (!g) throw new Error("useModalContext must be used within a ModalContext");
				return g
			}

			function t() {
				const g = (0, s.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...a) {
						return g(f.openModal(...a))
					}, [g]),
					closeModal: (0, e.useCallback)(function(...a) {
						return g(f.closeModal(...a))
					}, [g])
				}
			}
			var c = (0, s.connect)(g => ({
				modals: p(g)
			}), f)(l)
		},
		"../react/common/components/SAMLSubmit/SAMLSubmit.tsx": function(V, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				s = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = n.n(s),
				f = n("../react/common/actions/notificationsActions.ts"),
				i = n("../react/app/redux/index.ts"),
				u = n("../react/common/hooks/useGate.ts"),
				l = n("../react/common/selectors/languagePreferenceSelector.ts"),
				v = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				t = n("../../../../node_modules/@cloudflare/elements/es/index.js");
			const o = ({
				userIsAuthed: c,
				idpInitiated: g = !1,
				spInitiated: a = !1
			}) => {
				const C = !!(0, u.Z)("rm-18295-saml-salesforce-integration"),
					[d, E] = (0, e.useState)(null),
					N = (0, i.UM)(),
					R = (0, s.useHistory)(),
					y = (0, s.useLocation)(),
					S = (0, i.p4)(l.r),
					h = (0, e.useRef)(null);
				return (0, e.useEffect)(() => {
					const O = new URLSearchParams(y.search);
					if (O.has("saml")) {
						var G;
						sessionStorage.setItem("saml", (G = O.get("saml")) !== null && G !== void 0 ? G : ""), O.delete("saml"), R.replace({
							search: O.toString()
						})
					}
				}, []), (0, e.useEffect)(() => {
					const O = async G => {
						const H = G ? `/api/v4/sso/saml?id=${G}&locale=${S}` : `/api/v4/sso/saml?locale=${S}`,
							te = await fetch(H);
						try {
							if (te.status === 200) {
								const J = (await te.json()).result;
								if (J && J.assertion_consumer_service_url && J.saml_response) E({
									acsUrl: J.assertion_consumer_service_url,
									saml: J.saml_response
								});
								else throw new Error(`${H} produced unexpected content`)
							} else throw new Error(`${H} produced bad response code:${te.status}`)
						} catch (re) {
							const J = "Failed completing Service Provider authentication";
							throw N((0, f.vU)(J)), new Error(J + `: ${re.message}`)
						}
					};
					if (c && a) {
						const G = sessionStorage.getItem("saml");
						G && (sessionStorage.removeItem("saml"), O(G))
					}
					g && O()
				}, [c, g, a]), (0, e.useEffect)(() => {
					!d || h.current && h.current.submit()
				}, [d]), !d || !C ? null : r().createElement(r().Fragment, null, r().createElement("form", {
					ref: h,
					method: "POST",
					action: d.acsUrl
				}, r().createElement("input", {
					type: "hidden",
					name: "SAMLResponse",
					value: d.saml
				})), g && r().createElement(t.ZC, {
					margin: "auto",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}, r().createElement(t.ZC, {
					textAlign: "center"
				}, r().createElement(v.g, {
					size: "4x"
				}))))
			};
			_.Z = o
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				BQ: function() {
					return t
				},
				Gn: function() {
					return l
				},
				JR: function() {
					return v
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return i
				},
				ZI: function() {
					return f
				},
				if: function() {
					return r
				},
				q6: function() {
					return s
				},
				w_: function() {
					return p
				},
				zl: function() {
					return u
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				r = "time-window",
				s = "date-from",
				p = "date-to",
				f = "from",
				i = "to",
				u = "all",
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
			let v = function(o) {
					return o.ADD_FILTER = "Add filter", o.EDIT_FILTER = "Edit filter", o.REMOVE_FILTER = "Remove filter", o.CHANGE_TIME = "Change time window", o.FEED_PAGE_FORWARD = "Activity feed next page", o.FEED_PAGE_BACKWARD = "Activity feed previous page", o.FEED_EXPAND_EVENT = "Activity feed expand event", o.FEED_CLOSE_EVENT = "Activity feed close event", o.FEED_EXPAND_MATCHES = "Activity feed expand matches", o.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", o.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", o.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", o.DOWNLOAD_FEED = "Activity feed download", o.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', o.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', o.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', o.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', o.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', o
				}({}),
				t = function(o) {
					return o.TIMESERIES = "Timeseries Chart", o.DISTRIBUTION = "Source Distribution Chart", o.TOP_N = "Top N", o.FILTER_BAR = "Filter Bar", o.SCORES_DISTRIBUTIONS = "Scores Distributions", o.INSIGHTS = "Insights", o.RL_HISTOGRAM = "Rate Limit Histogram", o
				}({})
		},
		"../react/common/constants/billing/index.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Gq: function() {
					return p
				},
				g$: function() {
					return s
				},
				WX: function() {
					return e
				},
				E0: function() {
					return v
				},
				Hw: function() {
					return i
				},
				Ed: function() {
					return f
				},
				bi: function() {
					return r
				},
				Gs: function() {
					return a
				},
				hQ: function() {
					return u
				},
				SP: function() {
					return l
				}
			});
			let e = function(C) {
				return C.page_rules = "page_rules", C.automatic_platform_optimization = "automatic_platform_optimization", C
			}({});
			const r = "page_rules",
				s = "automatic_platform_optimization",
				p = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					volume_included: 1,
					ubb_frequency: 1,
					ubb_price: .1,
					ubb_unit: "gigabyte"
				},
				f = {
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
				u = {
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
				},
				t = new Set(["AZ", "CT", "DC", "HI", "IA", "IL", "OH", "NY", "PA", "SD", "TX", "WA", "WV"]),
				o = new Map([
					["RU", null],
					["US", t]
				]);
			var c = n("../react/common/constants/billing/tracking.ts"),
				g = n("../react/pages/zoneless-workers/constants.ts");
			const a = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				FP: function() {
					return e
				},
				Nl: function() {
					return f
				},
				SO: function() {
					return s
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
				s = {
					BILLING: "billing"
				},
				p = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				f = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Dk: function() {
					return g
				},
				Dy: function() {
					return a
				},
				E_: function() {
					return i
				},
				Lv: function() {
					return C
				},
				S4: function() {
					return f
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
					return l
				},
				q0: function() {
					return p
				},
				sJ: function() {
					return c
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const p = "healthy",
				f = "degraded",
				i = "critical",
				u = "unknown",
				l = "not-monitored",
				v = r().from({
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
				o = {
					f: v.FREE,
					p: v.PRO,
					b: v.BIZ
				},
				c = "marketing-pt",
				g = () => {
					const d = s.Z.get(c);
					if (!!d) return o[d]
				},
				a = ["gov"],
				C = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"]
		},
		"../react/common/constants/index.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
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
				sJ: function() {
					return e.sJ
				}
			});
			var e = n("../react/common/constants/constants.ts"),
				r = n("../react/common/constants/billing/index.ts")
		},
		"../react/common/hooks/suspenseHelpers.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				bt: function() {
					return u
				},
				nW: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				s = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const p = "suspenseComplete";

			function f() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(p))
				}, [])
			}

			function i(l) {
				(0, s.OR)(p, () => {
					window.setTimeout(l, 0)
				}, {
					target: window
				})
			}

			function u(...l) {
				const [v, t] = l;
				r().useLayoutEffect(v, t), i(v)
			}
		},
		"../react/common/hooks/useCachedState.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				j: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function p(f, {
				key: i,
				cache: u = s.E
			} = {}) {
				const l = i !== void 0 && u.get(i),
					[v, t] = (0, e.useState)(l || f);
				return [v, c => {
					t(g => (c instanceof Function && (c = c(g)), i !== void 0 && u.set(i, c), c))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(V, _, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function r(s) {
				return (0, e.qf)(s)
			}
			_.Z = r
		},
		"../react/common/hooks/usePrevious.ts": function(V, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e);

			function s(p) {
				const f = (0, e.useRef)(p);
				return (0, e.useEffect)(() => {
					f.current = p
				}, [p]), f.current
			}
			_.Z = s
		},
		"../react/common/middleware/sparrow/errors.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Uh: function() {
					return f
				},
				ez: function() {
					return p
				},
				oV: function() {
					return i
				}
			});

			function e(u, l, v) {
				return l = r(l), l in u ? Object.defineProperty(u, l, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[l] = v, u
			}

			function r(u) {
				var l = s(u, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function s(u, l) {
				if (typeof u != "object" || u === null) return u;
				var v = u[Symbol.toPrimitive];
				if (v !== void 0) {
					var t = v.call(u, l || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(u)
			}
			class p extends Error {
				constructor(l, v) {
					super(v);
					e(this, "eventName", void 0), this.eventName = l, this.name = "SparrowValidationError"
				}
			}
			class f extends p {
				constructor(l) {
					super(l, `Event not allowed: "${l}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class i extends p {
				constructor(l, v) {
					super(l, `Found invalid properties on event: "${l}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = v
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				AC: function() {
					return Xe
				},
				Au: function() {
					return me
				},
				B: function() {
					return ze
				},
				B3: function() {
					return Ve
				},
				BG: function() {
					return h
				},
				Bp: function() {
					return at
				},
				D0: function() {
					return N
				},
				DT: function() {
					return ne
				},
				EL: function() {
					return K
				},
				GE: function() {
					return Ae
				},
				Ko: function() {
					return F
				},
				Kx: function() {
					return H
				},
				Le: function() {
					return te
				},
				O4: function() {
					return Ye
				},
				Ou: function() {
					return ee
				},
				Py: function() {
					return Qe
				},
				QI: function() {
					return Be
				},
				RO: function() {
					return ce
				},
				T3: function() {
					return fe
				},
				T8: function() {
					return S
				},
				UX: function() {
					return w
				},
				VP: function() {
					return ke
				},
				Xo: function() {
					return qe
				},
				Xu: function() {
					return U
				},
				Yi: function() {
					return st
				},
				Yj: function() {
					return ue
				},
				Zu: function() {
					return Y
				},
				bC: function() {
					return A
				},
				f8: function() {
					return Q
				},
				hN: function() {
					return G
				},
				hX: function() {
					return we
				},
				iq: function() {
					return je
				},
				nE: function() {
					return O
				},
				oD: function() {
					return z
				},
				oI: function() {
					return J
				},
				oJ: function() {
					return ye
				},
				uF: function() {
					return le
				},
				ut: function() {
					return Je
				},
				vU: function() {
					return Ze
				},
				wQ: function() {
					return oe
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				r = n("../../../../node_modules/lodash/get.js"),
				s = n.n(r),
				p = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				f = n.n(p),
				i = n("../../../../node_modules/reselect/lib/index.js"),
				u = n("../../../../node_modules/moment/moment.js"),
				l = n.n(u),
				v = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				o = n("../react/common/selectors/userSelectors.ts"),
				c = n("../react/common/selectors/entitlementsSelectors.ts"),
				g = n("../react/app/components/DeepLink/selectors.ts");

			function a(j) {
				for (var se = 1; se < arguments.length; se++) {
					var Ee = arguments[se] != null ? Object(arguments[se]) : {},
						Te = Object.keys(Ee);
					typeof Object.getOwnPropertySymbols == "function" && Te.push.apply(Te, Object.getOwnPropertySymbols(Ee).filter(function(Ie) {
						return Object.getOwnPropertyDescriptor(Ee, Ie).enumerable
					})), Te.forEach(function(Ie) {
						C(j, Ie, Ee[Ie])
					})
				}
				return j
			}

			function C(j, se, Ee) {
				return se = d(se), se in j ? Object.defineProperty(j, se, {
					value: Ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[se] = Ee, j
			}

			function d(j) {
				var se = E(j, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function E(j, se) {
				if (typeof j != "object" || j === null) return j;
				var Ee = j[Symbol.toPrimitive];
				if (Ee !== void 0) {
					var Te = Ee.call(j, se || "default");
					if (typeof Te != "object") return Te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(j)
			}
			const N = j => {
					const se = le(j);
					return se == null ? void 0 : se.account
				},
				R = j => {
					const se = (0, o.PR)(j);
					if (se) {
						const Ee = se.id;
						return j.accountAccess[Ee] || {}
					}
					return {}
				},
				y = j => j.accountsDetailed,
				S = (0, t.P1)("accountsDetailed", y),
				h = j => j.memberships,
				O = (0, i.P1)((0, t.P1)("memberships", h), g.U, (j, se) => !!se && !!j ? j.filter(Ee => se.includes(Ee.id)) : j),
				G = j => j.accountFlags && j.accountFlags.data,
				H = j => j.accountFlags,
				te = (j, se, Ee) => {
					const Te = G(j);
					return !Te || !Te[se] ? null : Te[se][Ee]
				},
				re = j => j.accountFlags.isRequesting,
				J = (j, ...se) => s()(j, ["accountFlagsChanges", "data", ...se]),
				Q = j => j.accountFlagsChanges.isRequesting,
				k = (0, i.P1)(G, H, (j, se) => ({
					data: j,
					meta: se
				})),
				$ = (j, se, Ee) => !!(isEnterpriseSSEnabledSelector(j) && te(j, se, Ee)),
				U = j => j.membership,
				le = (0, t.P1)("membership", U),
				pe = (0, i.P1)(le, U, (j, se) => ({
					data: j,
					meta: se
				})),
				ee = j => {
					const {
						roles: se = []
					} = le(j) || {};
					return Boolean(se.find(Ee => Ee === "Super Administrator - All Privileges" || Ee === "Billing"))
				},
				z = j => {
					const se = R(j),
						Ee = Ge.getMemberships(j) ? f().asMutable(Ge.getMemberships(j)) : [];
					if (!!Ee) return f().from(Ee.map(Te => a({}, Te, {
						lastSeen: se[Te.account.id] ? se[Te.account.id].lastSeen : null
					})).sort((Te, Ie) => Te.lastSeen && Ie.lastSeen ? Ie.lastSeen - Te.lastSeen : 0))
				},
				w = j => j.filteredMemberships,
				K = (0, t.P1)("filteredMemberships", w),
				Y = (0, i.P1)(le, j => j == null ? void 0 : j.permissions),
				ue = (0, i.P1)(Y, j => (0, e.Z)(se => {
					var Ee;
					return (Ee = j == null ? void 0 : j[se]) !== null && Ee !== void 0 ? Ee : {
						read: !1,
						edit: !1
					}
				})),
				F = (0, i.P1)(le, j => j == null ? void 0 : j.policies),
				ne = (j, se, Ee) => {
					let Te = Ge.getMembership(j);
					if (!Te) {
						const Ie = Ge.getMemberships(j);
						if (!Ie || !se) return !1;
						Te = Ie.find(Fe => Fe.account.id === se)
					}
					if (!Te || !Ee) return !1;
					try {
						return Ee(Te.permissions)
					} catch {
						return !1
					}
				},
				ae = j => {
					var se, Ee;
					return (se = (Ee = N(j)) === null || Ee === void 0 ? void 0 : Ee.meta.has_pro_zones) !== null && se !== void 0 ? se : !1
				},
				x = j => {
					var se, Ee;
					return (se = (Ee = N(j)) === null || Ee === void 0 ? void 0 : Ee.meta.has_business_zones) !== null && se !== void 0 ? se : !1
				},
				A = j => x(j) || ae(j),
				D = (j, se) => {
					const Ee = W(j, se);
					return !!Ee && !!Ee.enabled
				},
				W = (j, se) => {
					const Ee = Ge.getMembership(j),
						Te = Ee && Ee.account;
					return Te && Te.legacy_flags && Te.legacy_flags[se]
				},
				oe = j => D(j, "custom_pages"),
				ve = j => !!j && j["webhooks.webhooks.enabled"],
				Oe = j => te(j, "bots", "enabled"),
				B = j => te(j, "billing", "annual_subscriptions_enable"),
				ce = j => j ? Boolean(te(j, "ConstellationAI", "v2_ui")) : !1,
				we = j => j ? Boolean(te(j, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				ze = j => j ? Boolean(te(j, "AIgateway", "enabled")) : !1,
				xe = j => W(j, "enterprise_zone_quota"),
				Ne = j => {
					const se = xe(j);
					return !se || !se.available ? -1 : se.available
				},
				je = j => j.accountMembers,
				Ve = (0, t.P1)("accountMembers", je),
				Ye = j => j.accountMember && j.accountMember.isRequesting,
				rt = j => j.accountRoles,
				Xe = (0, t.P1)("accountRoles", rt),
				Qe = (j, se) => {
					const Ee = Ge.getMemberships(j),
						Te = Ee && Ee.find(et => et.account.id === se);
					if (Te) return Te.account.name.replace(" Account", " account");
					const Ie = Ge.getMembership(j),
						Fe = Ie && Ie.account;
					return Fe && Fe.id === se ? Fe.name : null
				},
				Je = (j, se) => {
					const Ee = Ge.getMemberships(j),
						Te = Ee && Ee.find(et => et.account.id === se);
					if (Te) return Te.account.settings.access_approval_expiry;
					const Ie = Ge.getMembership(j),
						Fe = Ie && Ie.account;
					return Fe && Fe.id === se ? Fe.settings.access_approval_expiry : null
				},
				qe = (j, se) => {
					const Ee = Je(j, se);
					return Ee ? l().utc(Ee).isAfter() : !1
				},
				fe = (j, se, Ee) => {
					const Te = Je(j, se);
					let Ie = Te ? l().utc(Te) : null;
					return !Ie || !Ie.isAfter() ? "" : Ie && Ie.year() === 3e3 ? Ee("account.access_approval.card_expiration_forever") : Ee("account.access_approval.card_expiration_text", {
						expiryTimestamp: Ie.local().format(v.U.DateTime)
					})
				},
				ye = j => j && j.member && j.member.edit,
				me = (j, se) => {
					const Ee = Ge.getMembership(j),
						Te = Ee && Ee.account;
					return Te ? Te.id !== se : !1
				},
				be = j => j.dpa,
				L = (0, t.P1)("dpa", be),
				X = j => j.webhook,
				_e = j => j.webhooks,
				Re = (0, t.P1)("webhook", _e),
				ke = j => j.accountLegoContract,
				Ue = (0, t.P1)("accountLegoContract", ke),
				Be = j => {
					const se = Ue(j);
					return (se == null ? void 0 : se.lego_state) ? se.lego_state : ""
				},
				Me = j => Be(j) === "signed",
				Ae = j => ke(j).isRequesting,
				Ze = j => {
					const se = Ue(j);
					return se && se.subscription_type ? se.subscription_type : ""
				},
				mt = j => Ze(j) !== "",
				Ge = {
					getMembership: le,
					getMemberships: O,
					getFilteredMemberships: K,
					getAccountMembers: Ve,
					getAccountRoles: Xe
				},
				at = j => j.accountSingle,
				st = (0, t.P1)("accountSingle", at)
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				$f: function() {
					return a
				},
				AD: function() {
					return f
				},
				BF: function() {
					return g
				},
				Bs: function() {
					return y
				},
				Ci: function() {
					return ne
				},
				E6: function() {
					return c
				},
				Hq: function() {
					return Oe
				},
				Ms: function() {
					return O
				},
				Q2: function() {
					return i
				},
				Td: function() {
					return N
				},
				Z: function() {
					return A
				},
				a: function() {
					return R
				},
				a5: function() {
					return W
				},
				du: function() {
					return l
				},
				ec: function() {
					return $
				},
				f: function() {
					return ve
				},
				hL: function() {
					return D
				},
				ji: function() {
					return ae
				},
				jo: function() {
					return G
				},
				k4: function() {
					return oe
				},
				lI: function() {
					return p
				},
				p1: function() {
					return d
				},
				pf: function() {
					return t
				},
				qR: function() {
					return E
				},
				rV: function() {
					return u
				},
				u1: function() {
					return v
				},
				w4: function() {
					return o
				},
				yD: function() {
					return x
				}
			});
			var e = n("../react/utils/url.ts");

			function r(B, ce) {
				return B && B[ce]
			}
			const s = B => !p(B).isRequesting;

			function p(B) {
				return B.entitlements.zone
			}

			function f(B) {
				return p(B).data
			}
			const i = B => {
				var ce, we;
				return ((ce = p(B).paginationData) === null || ce === void 0 || (we = ce.options) === null || we === void 0 ? void 0 : we.editedDate) || {}
			};

			function u(B, ce) {
				const we = f(B);
				return we ? r(we, ce) : void 0
			}
			const l = (B, ce) => u(B, ce) === !0;

			function v(B) {
				return B.entitlements.account
			}

			function t(B) {
				return v(B).data
			}
			const o = B => {
				var ce, we;
				return ((ce = v(B).paginationData) === null || ce === void 0 || (we = ce.options) === null || we === void 0 ? void 0 : we.editedDate) || {}
			};

			function c(B) {
				return !v(B).isRequesting
			}

			function g(B, ce) {
				const we = t(B);
				return we ? r(we, ce) : void 0
			}

			function a(B, ce) {
				return g(B, ce) === !0
			}

			function C(B, ce) {
				return ce.every(we => a(B, we))
			}

			function d(B) {
				return a(B, "contract.customer_enabled")
			}

			function E(B) {
				return a(B, "contract.self_service_allowed")
			}

			function N(B) {
				return a(B, "billing.partners_managed")
			}
			const R = B => d(B) && E(B),
				y = B => a(B, "enterprise.ecp_allowed");

			function S(B) {
				return h(B) || a(B, "argo.allow_smart_routing") || a(B, "argo.allow_tiered_caching") || a(B, "rate_limiting.enabled") || a(B, "ctm.enabled") || a(B, "workers.enabled") || a(B, "workers.kv_store.enabled") || a(B, "stream.enabled")
			}
			const h = B => l(B, "argo.allow_smart_routing") || l(B, "argo.allow_tiered_caching"),
				O = B => a(B, "zone.cname_setup_allowed") || a(B, "zone.partial_setup_allowed") || l(B, "zone.partial_setup_allowed"),
				G = B => a(B, "argo.allow_smart_routing") || l(B, "argo.allow_smart_routing"),
				H = B => a(B, "argo.allow_tiered_caching") || l(B, "argo.allow_tiered_caching"),
				te = B => G(B) || H(B),
				re = B => a(B, "ctm.enabled"),
				J = B => {
					const ce = g(B, "ctm.load_balancers");
					return typeof ce == "number" ? ce : 0
				},
				Q = B => {
					const ce = g(B, "ctm.pools");
					return typeof ce == "number" ? ce : 0
				},
				k = B => {
					const ce = g(B, "ctm.origins");
					return typeof ce == "number" ? ce : 0
				},
				$ = B => a(B, "workers.enabled"),
				U = B => a(B, "stream.enabled"),
				le = B => {
					const ce = g(B, "access.users_allowed");
					return typeof ce == "number" ? ce : 0
				},
				pe = B => le(B) > 0,
				ee = B => {
					const ce = u(B, "dedicated_certificates");
					return typeof ce == "number" ? ce : 0
				},
				z = B => ee(B) > 0,
				w = B => {
					const ce = u(B, "rate_limiting.max_rules");
					return typeof ce == "number" ? ce : 0
				},
				K = B => a(B, "rate_limiting.enabled"),
				Y = B => {
					const ce = u(B, "page_rules");
					return typeof ce == "number" ? ce : 0
				},
				ue = B => Y(B) > 0,
				F = B => {
					const ce = g(B, "dns_firewall.max_clusters_allowed");
					return typeof ce == "number" ? ce : 0
				},
				ne = B => F(B) > 0,
				ae = B => l(B, "zone.advanced_certificate_manager") || a(B, "zone.advanced_certificate_manager"),
				x = B => u(B, "authoritative_dns.proxy_record_allowed") === !1 || g(B, "authoritative_dns.proxy_record_allowed") === !1,
				A = B => a(B, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				D = B => u(B, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				W = B => {
					const ce = u(B, "authoritative_dns.min_record_ttl_allowed");
					return typeof ce == "number" && ce > 1 ? ce : 60
				},
				oe = B => a(B, "foundation_dns.advanced_nameservers_allowed") || l(B, "foundation_dns.advanced_nameservers_allowed"),
				ve = (B, ce) => ((0, e.el)(window.location.pathname) ? u : g)(B, ce),
				Oe = B => a(B, "authoritative_dns.multi_provider_allowed") || l(B, "authoritative_dns.multi_provider_allowed")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				r: function() {
					return p
				},
				v: function() {
					return f
				}
			});
			var e = n("../react/utils/i18n.ts"),
				r = n("../../../common/intl/intl-types/src/index.ts"),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const p = i => {
				const u = i.userCommPreferences.data;
				if (u == null ? void 0 : u["language-locale"]) return s.Z.set(e.ly, u["language-locale"]), u["language-locale"];
				{
					s.Z.has(e.ly) || s.Z.set(e.ly, e.ZW);
					const l = s.Z.get(e.ly);
					return f(l) ? l : e.ZW
				}
			};

			function f(i) {
				const u = Object.keys(r.Q).find(l => r.Q[l] === i);
				return !!i && typeof i == "string" && u != null && (0, e.S8)(!1, u)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				$8: function() {
					return f
				},
				BG: function() {
					return v
				},
				GP: function() {
					return a
				},
				GU: function() {
					return y
				},
				PR: function() {
					return s
				},
				h$: function() {
					return E
				},
				h8: function() {
					return t
				},
				kk: function() {
					return d
				},
				l8: function() {
					return u
				},
				mV: function() {
					return C
				},
				vW: function() {
					return i
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const r = S => S.user,
				s = (0, e.P1)("user", r),
				p = S => {
					var h;
					return (h = s(S)) === null || h === void 0 ? void 0 : h.email.endsWith("@cloudflare.com")
				},
				f = S => {
					var h;
					return !!((h = s(S)) === null || h === void 0 ? void 0 : h.id)
				},
				i = S => {
					const h = s(S);
					if (!!h) return h.first_name && h.last_name ? `${h.first_name} ${h.last_name}` : h.email
				},
				u = S => {
					const h = s(S);
					return h && h.has_enterprise_zones
				},
				l = S => S.userCommPreferences,
				v = (0, e.P1)("userCommPreferences", l),
				t = S => {
					const h = s(S);
					return h && h.email_verified
				},
				o = S => {
					const h = v(S);
					return h && h.preferences.marketing_communication
				},
				c = S => S.userDetails,
				g = (0, e.P1)("userDetails", c),
				a = S => {
					const h = g(S);
					return h && h["2FA-RECOVERY"] === "scheduled"
				},
				C = S => {
					const h = g(S);
					return h && h["2FA-RECOVERY"] === "interrupted"
				},
				d = S => {
					const h = g(S);
					return h == null ? void 0 : h["NEW-USER-EMAIL"]
				},
				E = S => S.gates.assignments,
				N = (S, h) => S && S[h];

			function R(S, h) {
				const O = E(S);
				return O ? N(O, h) : void 0
			}
			const y = (S, h) => R(S, h) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				$4: function() {
					return O
				},
				$t: function() {
					return qe
				},
				A4: function() {
					return d
				},
				Cu: function() {
					return E
				},
				DQ: function() {
					return oe
				},
				Ej: function() {
					return H
				},
				FH: function() {
					return R
				},
				ID: function() {
					return K
				},
				Ko: function() {
					return xe
				},
				Le: function() {
					return B
				},
				Ly: function() {
					return F
				},
				M3: function() {
					return rt
				},
				N8: function() {
					return Ye
				},
				NY: function() {
					return A
				},
				Ns: function() {
					return ue
				},
				Ox: function() {
					return me
				},
				P4: function() {
					return te
				},
				RO: function() {
					return z
				},
				SX: function() {
					return D
				},
				Tr: function() {
					return ze
				},
				U: function() {
					return N
				},
				Ug: function() {
					return S
				},
				V6: function() {
					return Xe
				},
				WR: function() {
					return be
				},
				Xg: function() {
					return C
				},
				ZB: function() {
					return Oe
				},
				cU: function() {
					return Ne
				},
				cg: function() {
					return W
				},
				d2: function() {
					return U
				},
				jN: function() {
					return J
				},
				jg: function() {
					return ae
				},
				kC: function() {
					return G
				},
				kf: function() {
					return Qe
				},
				ko: function() {
					return ee
				},
				mK: function() {
					return fe
				},
				nA: function() {
					return a
				},
				oY: function() {
					return re
				},
				qM: function() {
					return ce
				},
				rq: function() {
					return x
				},
				tS: function() {
					return h
				},
				tU: function() {
					return k
				},
				vB: function() {
					return ye
				},
				vM: function() {
					return Q
				},
				wH: function() {
					return y
				},
				wn: function() {
					return ve
				},
				xU: function() {
					return $
				},
				xw: function() {
					return we
				},
				z5: function() {
					return w
				},
				zO: function() {
					return je
				},
				zW: function() {
					return Je
				},
				zh: function() {
					return le
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				r = n("../react/app/redux/normalizer.js"),
				s = n("../../../../node_modules/lodash/get.js"),
				p = n.n(s),
				f = n("../../../../node_modules/moment/moment.js"),
				i = n.n(f),
				u = n("../react/common/constants/billing/index.ts");

			function l(L) {
				for (var X = 1; X < arguments.length; X++) {
					var _e = arguments[X] != null ? Object(arguments[X]) : {},
						Re = Object.keys(_e);
					typeof Object.getOwnPropertySymbols == "function" && Re.push.apply(Re, Object.getOwnPropertySymbols(_e).filter(function(ke) {
						return Object.getOwnPropertyDescriptor(_e, ke).enumerable
					})), Re.forEach(function(ke) {
						v(L, ke, _e[ke])
					})
				}
				return L
			}

			function v(L, X, _e) {
				return X = t(X), X in L ? Object.defineProperty(L, X, {
					value: _e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[X] = _e, L
			}

			function t(L) {
				var X = o(L, "string");
				return typeof X == "symbol" ? X : String(X)
			}

			function o(L, X) {
				if (typeof L != "object" || L === null) return L;
				var _e = L[Symbol.toPrimitive];
				if (_e !== void 0) {
					var Re = _e.call(L, X || "default");
					if (typeof Re != "object") return Re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (X === "string" ? String : Number)(L)
			}
			const c = (0, r.P1)("zone", L => L.zone),
				g = L => {
					var X;
					return (X = L.zoneVersioning) === null || X === void 0 ? void 0 : X.zoneVersionSelector
				},
				a = (0, e.P1)(c, g, (L, X) => {
					var _e, Re, ke;
					let Ue;
					if (Array.isArray(L) && L.length === 1 ? Ue = L[0] : L && !Array.isArray(L) && (Ue = L), !Ue) return;
					const Be = !!(X == null ? void 0 : X.enabled);
					return l({}, Ue, Ue.name && {
						name: Be ? X.rootZoneName : Ue.name
					}, {
						versioning: {
							enabled: Be,
							isRoot: !((_e = Ue.name) === null || _e === void 0 ? void 0 : _e.endsWith(".config.cfdata.org")),
							version: Be ? X.selectedVersion : 0,
							rootZoneId: Be ? X.rootZoneId : (Re = (ke = Ue) === null || ke === void 0 ? void 0 : ke.id) !== null && Re !== void 0 ? Re : ""
						}
					})
				}),
				C = L => L.zone,
				d = (0, e.P1)(a, C, (L, X) => ({
					data: L,
					meta: X
				})),
				E = L => {
					var X, _e;
					return (X = (_e = a(L)) === null || _e === void 0 ? void 0 : _e.id) !== null && X !== void 0 ? X : ""
				},
				N = L => L.zones,
				R = L => L.zonesRoot,
				y = L => L.zonesAccount,
				S = (0, r.P1)("zones", N),
				h = (0, r.P1)("zonesRoot", R),
				O = (0, r.P1)("zonesAccount", y);

			function G(L) {
				const X = a(L);
				return X ? X.created_on : null
			}

			function H(L, X, _e) {
				const Re = G(L);
				if (!Re) return;
				const ke = i().duration(X, _e),
					Ue = new Date(Re),
					Be = new Date(new Date().getTime() - ke.asMilliseconds());
				return Ue.getTime() > Be.getTime()
			}

			function te(L) {
				const X = a(L);
				return X ? X.status : null
			}

			function re(L) {
				const X = a(L);
				return X ? X.type : null
			}

			function J(L) {
				return L.plan_pending ? L.plan_pending : L.plan
			}

			function Q(L) {
				const X = a(L);
				if (!X) return;
				const _e = J(X);
				return _e && _e.legacy_id
			}

			function k(L, X) {
				const _e = J(L);
				return !!_e && u.Gs.indexOf(_e.legacy_id) >= u.Gs.indexOf(X)
			}

			function $(L) {
				return !!L && L.status === "initializing"
			}

			function U(L) {
				return !!L && L.status === "pending"
			}

			function le(L) {
				return !!L && L.status === "active"
			}

			function pe(L, X) {
				if (!L) return !1;
				const _e = J(L);
				return !!_e && _e.legacy_id === X
			}

			function ee(L) {
				return pe(L, "enterprise")
			}
			const z = L => ee(a(L));

			function w(L) {
				return pe(L, "business")
			}
			const K = L => w(a(L));

			function Y(L) {
				return pe(L, "pro")
			}

			function ue(L) {
				return pe(L, "free")
			}

			function F(L) {
				return !ee(L)
			}

			function ne(L) {
				return L && L.owner
			}

			function ae(L, X) {
				const _e = ne(X);
				return !!_e && _e.type === "user" && _e.id === L.id
			}

			function x(L) {
				const X = a(L);
				return !!X && X.type === "partial"
			}

			function A(L) {
				const X = a(L);
				return !!X && X.type === "secondary"
			}

			function D(L) {
				const X = a(L);
				return X && x(L) && X.host
			}
			const W = L => {
					var X;
					const _e = a(L);
					return !!(_e == null ? void 0 : _e.host) && !!((X = _e.plan) === null || X === void 0 ? void 0 : X.externally_managed)
				},
				oe = L => {
					const X = S(L);
					return X && X.some(ee)
				},
				ve = (L, X) => {
					const _e = a(L);
					return _e && _e.betas ? _e.betas.includes(X) : !1
				},
				Oe = (L, ...X) => p()(L, ["zoneFlags", "data", ...X]),
				B = (L, ...X) => p()(L, ["accountFlags", "data", ...X]),
				ce = L => L.accountFlags.isRequesting,
				we = L => L.zoneFlags.isRequesting,
				ze = (L, ...X) => p()(L, ["zoneFlagsChanges", "data", ...X]),
				xe = L => L.zoneFlagsChanges.isRequesting,
				Ne = L => L.zoneFlags && L.zoneFlags.data,
				je = L => L.zoneFlags,
				Ve = (0, e.P1)(Ne, je, (L, X) => ({
					data: L,
					meta: X
				})),
				Ye = (0, r.P1)("abuseUrls", L => L.overview.abuseUrls),
				rt = L => {
					const X = a(L);
					return X ? `/${X.account.id}/${X.name}` : null
				},
				Xe = L => L.zoneMarketingCampaigns,
				Qe = L => L.overview.zoneBlocks.data,
				Je = L => L.overview.zoneBlocks.isRequesting,
				qe = L => L.overview.zoneBlocks.hasData,
				fe = L => {
					var X, _e;
					return (L == null || (X = L.overview.zoneBlocks) === null || X === void 0 || (_e = X.paginationData) === null || _e === void 0 ? void 0 : _e.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				ye = L => L.overview.zoneBlocksReview.isRequesting,
				me = L => L.overview.zoneHold,
				be = (0, r.P1)("zoneHold", me)
		},
		"../react/common/utils/formatDate.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			_.Z = (r, s, p = !1) => (0, e.p6)(r, s, p)
		},
		"../react/common/utils/isGuards.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Q$: function() {
					return s
				},
				t: function() {
					return i
				},
				v5: function() {
					return p
				},
				zE: function() {
					return f
				}
			});
			var e = n("../react/common/constants/index.ts"),
				r = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const s = u => u ? ["page", "per_page", "count", "total_count"].every(v => v in u && u[v]) : !1,
				p = (u = "") => e.Dy.includes(u.toLowerCase()),
				f = u => u !== null && typeof u == "object" && "name" in u && "size" in u && "type" in u && typeof u.slice == "function",
				i = u => (0, r.Z)(u)
		},
		"../react/common/validators/index.js": function(V, _, n) {
			"use strict";
			n.d(_, {
				K2: function() {
					return r
				},
				Lb: function() {
					return s
				},
				XI: function() {
					return p
				},
				jk: function() {
					return u
				},
				wb: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const r = l => /^https?:\/\/(.*)/.test(l),
				s = l => e.default.hostname.test(l),
				p = l => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(l),
				f = l => /^[!-~]+$/.test(l),
				i = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				u = l => i.test(l)
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Jz: function() {
					return v
				},
				OK: function() {
					return f
				},
				_Y: function() {
					return u
				},
				fD: function() {
					return o
				},
				h_: function() {
					return l
				},
				w6: function() {
					return c
				},
				yc: function() {
					return t
				}
			});

			function e(a) {
				for (var C = 1; C < arguments.length; C++) {
					var d = arguments[C] != null ? Object(arguments[C]) : {},
						E = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(d).filter(function(N) {
						return Object.getOwnPropertyDescriptor(d, N).enumerable
					})), E.forEach(function(N) {
						r(a, N, d[N])
					})
				}
				return a
			}

			function r(a, C, d) {
				return C = s(C), C in a ? Object.defineProperty(a, C, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[C] = d, a
			}

			function s(a) {
				var C = p(a, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function p(a, C) {
				if (typeof a != "object" || a === null) return a;
				var d = a[Symbol.toPrimitive];
				if (d !== void 0) {
					var E = d.call(a, C || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(a)
			}
			let f = function(a) {
					return a.Sending = "sending", a.Success = "success", a.Failed = "failed", a.Latent = "latent", a
				}({}),
				i = function(a) {
					return a[a.Success = 200] = "Success", a[a.BadRequest = 400] = "BadRequest", a
				}({});
			const u = {
					status: f.Latent,
					statusCode: void 0
				},
				l = {
					status: f.Sending
				},
				v = {
					status: f.Success,
					statusCode: i.Success
				},
				t = {
					status: f.Failed,
					statusCode: i.BadRequest
				},
				o = {
					token: null,
					zone: null,
					isTokenValid: !1,
					user: null
				},
				c = {
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
				g = {}
		},
		"../react/pages/apps/marketplace/config/sagas.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				y: function() {
					return ae
				}
			});
			var e = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				r = n("../../../../node_modules/lodash-es/get.js"),
				s = n("../react/pages/apps/marketplace/state/auth.reducer.ts"),
				p = n("../react/pages/apps/marketplace/requests/Requester.ts");
			const f = () => p.L.fetchJSON("/user/~current"),
				i = () => p.L.request("GET", "/healthcheck");
			var u = n("../react/pages/apps/marketplace/libraries/auth.ts"),
				l = n("../react/pages/apps/marketplace/types.ts");

			function* v() {
				const A = (0, u.aP)();
				if (!A) throw new u.C6;
				try {
					const D = (0, u.he)(A);
					if (D && (0, u.pw)(D)) throw new u.C6;
					yield(0, e.gz)(s.Nw.setToken({
						token: A,
						parsed: D
					})), yield(0, e.RE)([localStorage, "setItem"], l.m.CloudflareAppsToken, A), yield(0, e.RE)([p.L, "setAuthHeader"], A)
				} catch {
					throw new u.C6
				}
			}

			function* t() {
				const {
					status: A
				} = yield(0, e.RE)(i);
				if (A === 401) throw new u.xT;
				if (A === 403) throw new u.k7;
				yield(0, e.gz)(s.Nw.setTokenValid(!0))
			}

			function* o() {
				try {
					yield(0, e.gz)(s.Nw.getCurrentUserSending());
					const A = yield(0, e.RE)(f);
					return yield(0, e.gz)(A.id ? s.Nw.getCurrentUserSuccess(A) : s.Nw.getCurrentUserFailed()), A
				} catch {
					throw yield(0, e.gz)(s.Nw.getCurrentUserFailed())
				}
			}

			function* c() {
				yield(0, e.ib)(s.U4.CurrentUserSaga, o)
			}

			function* g(A) {
				try {
					yield(0, e.RE)(v), yield(0, e.RE)(t)
				} catch (D) {
					if (yield(0, e.RE)([localStorage, "removeItem"], l.m.CloudflareAppsToken), ![u.Vm.RedirectToLogin, u.Vm.BadToken].includes(D.name)) return yield(0, e.gz)(s.Nw.initSaga(A.zoneId));
					try {
						return (0, u.rf)()
					} catch {
						throw new u.Sf
					}
				}
				yield(0, e.gz)(s.Nw.setZone(A.zoneId)), yield(0, e.gz)(s.Nw.getCurrentUserSaga()), yield(0, e.RE)([localStorage, "removeItem"], l.m.CloudflareAppsAuthAttempts)
			}

			function* a() {
				yield(0, e.ib)(s.U4.InitSaga, g)
			}

			function* C() {
				for (;;) {
					const A = yield(0, e.qn)(s.XO.SetCurrentUser), D = yield(0, e.RE)([localStorage, "getItem"], l.m.CloudflareAppsToken);
					if (D) {
						const W = (0, u.he)(D),
							oe = (0, r.Z)(W, "sub"),
							ve = (0, r.Z)(A, `meta.entities.user.${A.payload}.email`);
						if (ve && ve !== oe) return yield(0, e.RE)([localStorage, "removeItem"], l.m.CloudflareAppsToken)
					}
				}
			}
			var d = [a(), C(), c()],
				E = n("../react/pages/apps/marketplace/requests/common.ts"),
				N = n("../react/pages/apps/marketplace/libraries/constants.ts");
			const R = (A, D) => A.apps ? A.apps[D] : A[D],
				y = A => R(A, "authState"),
				S = A => R(A, "commonState"),
				h = A => R(A, "homePageState"),
				O = A => y(A).zone;
			var G = n("../react/pages/apps/marketplace/libraries/helpers.ts"),
				H = n("../react/pages/apps/marketplace/state/common.reducer.ts");

			function te(A) {
				for (var D = 1; D < arguments.length; D++) {
					var W = arguments[D] != null ? Object(arguments[D]) : {},
						oe = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(W).filter(function(ve) {
						return Object.getOwnPropertyDescriptor(W, ve).enumerable
					})), oe.forEach(function(ve) {
						re(A, ve, W[ve])
					})
				}
				return A
			}

			function re(A, D, W) {
				return D = J(D), D in A ? Object.defineProperty(A, D, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[D] = W, A
			}

			function J(A) {
				var D = Q(A, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function Q(A, D) {
				if (typeof A != "object" || A === null) return A;
				var W = A[Symbol.toPrimitive];
				if (W !== void 0) {
					var oe = W.call(A, D || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(A)
			}

			function* k(A, D, W) {
				const oe = {
					categories: (W.markets || ["none"]).map(ve => {
						const Oe = N.XZ.find(B => B.key === ve);
						return !ve || !Oe ? N.iK.categories : Oe.categories
					}).reduce((ve, Oe) => ve.concat(Oe), []).filter((ve, Oe, B) => B.indexOf(ve) === Oe).join(","),
					excludeApps: D.map(ve => ve.appId).join(",")
				};
				return yield(0, e.RE)(E.RX, H.Nw, E.Jb.recommendedApps.name, E.Jb.recommendedApps.url(oe), G.Ux.transformers.transformAppIdsToApps.bind(null, A))
			}

			function* $() {
				for (;;) {
					const {
						zoneId: A,
						currentResources: D
					} = yield(0, e.qn)(H.U4.GetHomePageAssetsSaga), {
						appsList: W,
						installsList: oe,
						metadata: ve
					} = yield(0, e.$6)(te({}, D.appsList.status === "latent" ? {
						appsList: (0, e.RE)(E.RX, H.Nw, E.Jb.apps.name, E.Jb.apps.url())
					} : {
						appsList: D.appsList.value
					}, D.categoriesList.status === "latent" ? {
						categoriesList: (0, e.RE)(E.RX, H.Nw, E.Jb.categories.name, E.Jb.categories.url({
							includeInvisible: !0
						}))
					} : {
						categoriesList: D.categoriesList.value
					}, D.installsList.status === "latent" ? {
						installsList: (0, e.RE)(E.RX, H.Nw, E.Jb.installs.default.name, E.Jb.installs.default.url(A))
					} : {
						installsList: D.installsList.value
					}, D.metadata.status === "latent" ? {
						metadata: (0, e.RE)(E.RX, H.Nw, E.Jb.metadata.get.name, E.Jb.metadata.get.url(A))
					} : {
						metadata: D.metadata.value
					}));
					yield(0, e.gz)(H.Nw.getRecommendedAppsSaga(W, oe, ve))
				}
			}

			function* U() {
				for (;;) {
					const {
						userId: A,
						zoneId: D
					} = yield(0, e.qn)(H.U4.GetDevelopedAppsAssetsSaga);
					yield(0, e.RE)(E.RX, H.Nw, E.Jb.installs.default.name, E.Jb.installs.default.url(D)), yield(0, e.RE)(E.RX, H.Nw, E.Jb.developedApps.name, E.Jb.developedApps.url(A))
				}
			}

			function* le() {
				for (;;) {
					const {
						appIdentifier: A,
						zoneId: D,
						version: W
					} = yield(0, e.qn)(H.U4.GetAppInfoAssetsSaga), oe = yield(0, e.RE)(E.RX, H.Nw, E.Jb.installs.default.name, E.Jb.installs.default.url(D));
					yield(0, e.RE)(E.RX, H.Nw, E.Jb.app.name, E.Jb.app.url(A, W ? {
						version: W
					} : {}), G.Ux.transformers.addCurrentSiteInstall.bind(null, oe))
				}
			}

			function* pe() {
				for (;;) {
					const {
						zoneId: A
					} = yield(0, e.qn)(H.U4.GetInstalledAppsAssetsSaga), W = (yield(0, e.RE)(E.RX, H.Nw, E.Jb.installs.default.name, E.Jb.installs.default.url(A))).filter(B => B.app.installable && B.versionTag !== B.app.infoVersion), oe = W.reduce((B, ce) => (B[ce.app.alias] = (0, e.RE)(E.RX, H.Nw, E.Jb.app.name, E.Jb.app.url(ce.app.alias || ce.appId), G.Ux.transformers.addAppVersionInfo.bind(null, ce)), B), {}), ve = yield(0, e.$6)(oe), Oe = W.map(B => ({
						install: B,
						app: ve[B.app.alias]
					}));
					yield(0, e.gz)(H.Nw.setUpdatableInstalls(Oe))
				}
			}

			function* ee() {
				for (;;) return yield(0, e.qn)(H.U4.GetAppsSaga), yield(0, e.RE)(E.RX, H.Nw, E.Jb.apps.name, E.Jb.apps.url())
			}

			function* z() {
				for (;;) {
					const {
						queryParams: A
					} = yield(0, e.qn)(H.U4.GetCategoriesSaga);
					return yield(0, e.RE)(E.RX, H.Nw, E.Jb.categories.name, E.Jb.categories.url(A))
				}
			}

			function* w() {
				for (;;) {
					const {
						zoneId: A
					} = yield(0, e.qn)(H.U4.GetInstallsSaga);
					return yield(0, e.RE)(E.RX, H.Nw, E.Jb.installs.default.name, E.Jb.installs.default.url(A))
				}
			}

			function* K() {
				for (;;) {
					const {
						zoneId: A
					} = yield(0, e.qn)(H.U4.GetMetadataSaga);
					return yield(0, e.RE)(E.RX, H.Nw, E.Jb.metadata.get.name, E.Jb.metadata.get.url(A))
				}
			}

			function* Y() {
				for (;;) {
					const {
						appsList: A,
						installsList: D,
						metadata: W
					} = yield(0, e.qn)(H.U4.GetRecommendedAppsSaga);
					yield(0, e.RE)(k, A, D, W)
				}
			}

			function* ue() {
				for (;;) {
					const {
						zoneId: A,
						data: D
					} = yield(0, e.qn)(H.U4.PostMetadataSaga);
					try {
						const {
							appsList: W,
							installsList: oe,
							metadata: ve
						} = yield(0, e.Ys)(S), Oe = te({}, ve.value, {
							id: A,
							markets: [D]
						});
						yield(0, e.RE)(E.JX, H.Nw, E.Jb.metadata.post.name, E.Jb.metadata.post.url(A), Oe), yield(0, e.RE)(k, W.value, oe.value, Oe)
					} catch {}
				}
			}

			function* F() {
				for (;;) yield(0, e.qn)(H.dg.CloudflareZoneChangeStart), yield(0, e.gz)(H.Nw.zoneChangedSaga())
			}
			var ne = [$(), pe(), U(), le(), ee(), w(), z(), K(), ue(), Y(), F()];
			const ae = [...d, ...ne];

			function* x() {
				yield all(ae)
			}
		},
		"../react/pages/apps/marketplace/libraries/auth.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				C6: function() {
					return g
				},
				Sf: function() {
					return o
				},
				Vm: function() {
					return t
				},
				aP: function() {
					return N
				},
				he: function() {
					return C
				},
				k7: function() {
					return c
				},
				pw: function() {
					return d
				},
				rf: function() {
					return y
				},
				xT: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/lodash-es/toNumber.js"),
				r = n("../../../../node_modules/lodash-es/isInteger.js"),
				s = n("../../../../node_modules/lodash-es/toString.js"),
				p = n("../../../../node_modules/query-string/query-string.js"),
				f = n.n(p),
				i = n("../../../../node_modules/jwt-decode/build/jwt-decode.esm.js"),
				u = n("../react/pages/apps/marketplace/types.ts"),
				l = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				v = n.n(l);
			let t = function(h) {
				return h.RedirectToLogin = "RedirectToLogin", h.ExpiredToken = "ExpiredToken", h.BadToken = "BadToken", h.Init = "Init", h
			}({});
			class o extends Error {
				constructor() {
					super();
					this.name = t.Init
				}
			}
			class c extends Error {
				constructor() {
					super();
					this.name = t.BadToken
				}
			}
			class g extends Error {
				constructor() {
					super();
					this.name = t.RedirectToLogin
				}
			}
			class a extends Error {
				constructor() {
					super();
					this.name = t.ExpiredToken
				}
			}
			const C = h => {
					try {
						const O = (0, i.Z)(h);
						if (!O) throw new Error("Invalid JWT");
						return O
					} catch (O) {
						throw O
					}
				},
				d = h => {
					const O = new Date(h.exp * 1e3);
					return new Date > O
				},
				E = (h, O = window.document.location.toString()) => {
					(0, l.get)(`login?redirect_uri=${encodeURIComponent(O)}`).then(G => {
						var H, te;
						const re = (H = G.body) === null || H === void 0 || (te = H.result) === null || te === void 0 ? void 0 : te.redirect_uri;
						re && (window.location.href = re)
					}).catch(G => {
						console.log("Failed login ", G)
					})
				},
				N = () => {
					let h = p.parse(location.search);
					const O = localStorage.getItem(u.m.CloudflareAppsToken) || h.token;
					if (O) {
						delete h.token, delete h.from_login;
						const G = p.stringify(h);
						window.history.replaceState({}, document.title, `${window.location.pathname}${G?`?${G}`:""}`)
					}
					return O
				},
				R = 2,
				y = h => {
					if (S() > R) throw new Error("redirect attempt limit reached");
					return E("login", h)
				},
				S = () => {
					let h = (0, e.Z)(localStorage.getItem(u.m.CloudflareAppsAuthAttempts));
					(0, r.Z)(h) || (h = 0, localStorage.setItem(u.m.CloudflareAppsAuthAttempts, (0, s.Z)(h)));
					const O = h + 1;
					return localStorage.setItem(u.m.CloudflareAppsAuthAttempts, (0, s.Z)(O)), O > R && localStorage.removeItem(u.m.CloudflareAppsAuthAttempts), O
				}
		},
		"../react/pages/apps/marketplace/libraries/constants.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				XZ: function() {
					return i
				},
				iK: function() {
					return f
				},
				j9: function() {
					return s
				}
			});
			var e = n("../react/pages/apps/marketplace/marketplace.translations.ts");
			const r = /local.cloudflareapps.com/,
				s = /staging.cloudflare.com/,
				p = 900,
				f = {
					key: "none",
					label: e.keys.markets_metadata_label_popular,
					categories: ["recommended-for-all-sites", "recommended-for-blogs", "recommended-for-stores", "recommended-for-marketing-sites"]
				},
				i = [{
					key: "blog",
					label: e.keys.markets_metadata_label_blog,
					categories: ["recommended-for-all-sites", "recommended-for-blogs"]
				}, {
					key: "store",
					label: e.keys.markets_metadata_label_store,
					categories: ["recommended-for-all-sites", "recommended-for-stores"]
				}, {
					key: "marketing",
					label: e.keys.markets_metadata_label_marketing,
					categories: ["recommended-for-all-sites", "recommended-for-marketing-sites"]
				}, f],
				u = [{
					type: "string",
					field: "id"
				}, {
					type: "string",
					field: "title"
				}, {
					type: "string",
					field: "shortDescription"
				}, {
					type: "string",
					field: "longDescription"
				}, {
					type: "string",
					field: "instructions"
				}, {
					type: "string",
					field: "alias"
				}, {
					type: "string",
					field: "orgId"
				}, {
					type: "string",
					field: "author"
				}, {
					type: "string",
					field: "tagline"
				}, {
					type: "string",
					field: "website"
				}, {
					type: "string",
					field: "supportEmail"
				}, {
					type: "string",
					field: "org.id"
				}, {
					type: "string",
					field: "org.title"
				}, {
					type: "string",
					field: "org.username"
				}, {
					type: "list",
					field: "categories.id"
				}, {
					type: "list",
					field: "categories.title"
				}, {
					type: "list",
					field: "categories.description"
				}, {
					type: "list",
					field: "categories.metadata"
				}]
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Ux: function() {
					return o
				},
				cz: function() {
					return g
				},
				im: function() {
					return u
				},
				pG: function() {
					return c
				},
				t$: function() {
					return a
				}
			});
			var e = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function r(d) {
				for (var E = 1; E < arguments.length; E++) {
					var N = arguments[E] != null ? Object(arguments[E]) : {},
						R = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(N).filter(function(y) {
						return Object.getOwnPropertyDescriptor(N, y).enumerable
					})), R.forEach(function(y) {
						s(d, y, N[y])
					})
				}
				return d
			}

			function s(d, E, N) {
				return E = p(E), E in d ? Object.defineProperty(d, E, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[E] = N, d
			}

			function p(d) {
				var E = f(d, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function f(d, E) {
				if (typeof d != "object" || d === null) return d;
				var N = d[Symbol.toPrimitive];
				if (N !== void 0) {
					var R = N.call(d, E || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(d)
			}
			const i = d => d.test(window.location.hostname),
				u = () => i(e.j9),
				l = () => i(MARKETPLACE_LOCAL_URL_REGEXP),
				v = (d, E) => {
					const N = random(0, 1) ? -1 : 1;
					return d.points === E.points || d.points >= APP_POINTS_THRESHOLD && E.points >= APP_POINTS_THRESHOLD ? N : d.points < 0 || E.points < 0 || d.points >= APP_POINTS_THRESHOLD || E.points >= APP_POINTS_THRESHOLD ? E.points - d.points : N
				},
				t = (d, E, N) => {
					const R = get(E, N),
						y = get(d, N);
					return R && !isEqual(R, y)
				},
				o = {
					transformers: {
						transformAppIdsToApps: (d, E) => E.map(N => d.find(R => R.id === N)),
						addAppVersionInfo: (d, E) => r({}, E, {
							currentVersion: E.versions.find(N => N.tag === d.versionTag),
							latestVersion: E.versions.find(N => N.tag === E.infoVersion)
						}),
						addCurrentSiteInstall: (d, E) => r({}, E, {
							currentSiteInstall: d.find(N => N.appId === E.id)
						})
					}
				},
				c = (d, E, N) => r({}, d, E, N ? {
					value: N
				} : {}),
				g = d => d.map(E => E.status),
				a = d => d.apps ? d.apps : d,
				C = d => {
					let E = ["by-cloudflare"];
					return d.filter(N => !E.includes(N.id) && N.visible).sort((N, R) => N.points < R.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(V, _, n) {
			"use strict";
			n.r(_), n.d(_, {
				categorySlugTranslationKey: function() {
					return f
				},
				keys: function() {
					return r
				},
				namespace: function() {
					return p
				},
				translations: function() {
					return s
				}
			});
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: r,
				translations: s,
				namespace: p
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

			function f(i) {
				const u = i.replace(/-/g, "_");
				return Object.keys(r).includes(u) ? u : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				L: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/lodash-es/defaults.js"),
				r = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function s(c) {
				for (var g = 1; g < arguments.length; g++) {
					var a = arguments[g] != null ? Object(arguments[g]) : {},
						C = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(a).filter(function(d) {
						return Object.getOwnPropertyDescriptor(a, d).enumerable
					})), C.forEach(function(d) {
						i(c, d, a[d])
					})
				}
				return c
			}

			function p(c, g) {
				if (c == null) return {};
				var a = f(c, g),
					C, d;
				if (Object.getOwnPropertySymbols) {
					var E = Object.getOwnPropertySymbols(c);
					for (d = 0; d < E.length; d++) C = E[d], !(g.indexOf(C) >= 0) && (!Object.prototype.propertyIsEnumerable.call(c, C) || (a[C] = c[C]))
				}
				return a
			}

			function f(c, g) {
				if (c == null) return {};
				var a = {},
					C = Object.keys(c),
					d, E;
				for (E = 0; E < C.length; E++) d = C[E], !(g.indexOf(d) >= 0) && (a[d] = c[d]);
				return a
			}

			function i(c, g, a) {
				return g = u(g), g in c ? Object.defineProperty(c, g, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[g] = a, c
			}

			function u(c) {
				var g = l(c, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function l(c, g) {
				if (typeof c != "object" || c === null) return c;
				var a = c[Symbol.toPrimitive];
				if (a !== void 0) {
					var C = a.call(c, g || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(c)
			}
			const v = n("../../../../node_modules/url-join/lib/url-join.js");
			class t {
				constructor(g) {
					i(this, "token", void 0), i(this, "options", void 0), i(this, "setAuthHeader", a => {
						this.token = a
					}), this.token = "", this.options = (0, e.Z)(g, t.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(g = "GET", a, C = {}) {
					const {
						body: d
					} = C, E = p(C, ["body"]);
					return fetch(v(this.options.baseUrl, a), s({
						method: g
					}, E, d ? {
						body: JSON.stringify(d)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(s({
							Accept: "application/json, text/plain, */*"
						}, C.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(g, a = {}) {
					const C = await this.request("GET", g, a);
					return this.parseJSONResponse(C)
				}
				async postJSON(g, a = {}) {
					const C = await this.request("POST", g, s({}, a, {
						headers: s({}, a.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(C)
				}
				parseJSONResponse(g) {
					return g.json()
				}
			}
			i(t, "defaults", {
				baseUrl: (0, r.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const o = new t
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				RX: function() {
					return t
				},
				JX: function() {
					return o
				},
				Jb: function() {
					return g
				}
			});
			var e = n("../../../../node_modules/lodash-es/upperFirst.js"),
				r = n("../../../../node_modules/lodash-es/isEmpty.js"),
				s = n("../../../../node_modules/query-string/query-string.js"),
				p = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				f = n("../react/pages/apps/marketplace/requests/Requester.ts");

			function i(d, E, N) {
				return E = u(E), E in d ? Object.defineProperty(d, E, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[E] = N, d
			}

			function u(d) {
				var E = l(d, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function l(d, E) {
				if (typeof d != "object" || d === null) return d;
				var N = d[Symbol.toPrimitive];
				if (N !== void 0) {
					var R = N.call(d, E || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(d)
			}
			class v {
				constructor(E) {
					i(this, "name", void 0), i(this, "url", void 0), this.name = E.name, this.url = E.url
				}
			}

			function* t(d, E, N, R) {
				const y = (0, e.Z)(E),
					[S, h, O] = [`get${y}Sending`, `get${y}Success`, `get${y}Failed`];
				try {
					yield(0, p.gz)(d[S]());
					const G = yield(0, p.RE)(a, N);
					let H = G;
					if (H.error) {
						yield(0, p.gz)(d[O]());
						return
					}
					return R && (H = yield R(G)), yield(0, p.gz)(d[h](H)), H
				} catch {
					yield(0, p.gz)(d[O]())
				}
			}

			function* o(d, E, N, R) {
				const y = (0, e.Z)(E),
					S = `get${y}Sending`,
					h = `get${y}Success`,
					O = `get${y}Failed`;
				try {
					yield(0, p.gz)(d[S]());
					const G = yield(0, p.RE)(C, {
						url: N,
						data: R
					});
					return yield(0, p.gz)(d[h](G)), G
				} catch {
					yield(0, p.gz)(d[O]())
				}
			}
			const c = d => (0, r.Z)(d) ? "" : `?${s.stringify(d)}`,
				g = {
					app: new v({
						name: "app",
						url: (d, E) => `apps/${d}${c(E)}`
					}),
					apps: new v({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new v({
							name: "installs",
							url: d => `sites/${d}/installs`
						}),
						delete: new v({
							name: "installs",
							url: d => `installs/${d}`
						})
					},
					categories: new v({
						name: "categories",
						url: (d = {}) => "categories" + c(d)
					}),
					metadata: {
						get: new v({
							name: "metadata",
							url: d => `sites/${d}/metadata`
						}),
						post: new v({
							name: "metadata",
							url: d => `sites/${d}/metadata`
						})
					},
					ratings: {
						default: new v({
							name: "ratings",
							url: (d = {}) => "ratings" + c(d)
						}),
						delete: new v({
							name: "ratings",
							url: d => `ratings/${d}`
						})
					},
					recommendedApps: new v({
						name: "recommendedApps",
						url: (d = {}) => "apps/recommend" + c(d)
					}),
					developedApps: new v({
						name: "developedApps",
						url: d => `user/${d}/apps`
					})
				},
				a = async d => f.L.fetchJSON(d), C = async d => {
					const {
						url: E,
						data: N
					} = d;
					return f.L.postJSON(E, {
						body: N
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Nw: function() {
					return l
				},
				U4: function() {
					return u
				},
				XO: function() {
					return i
				},
				ZP: function() {
					return v
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts");

			function r(t) {
				for (var o = 1; o < arguments.length; o++) {
					var c = arguments[o] != null ? Object(arguments[o]) : {},
						g = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(c).filter(function(a) {
						return Object.getOwnPropertyDescriptor(c, a).enumerable
					})), g.forEach(function(a) {
						s(t, a, c[a])
					})
				}
				return t
			}

			function s(t, o, c) {
				return o = p(o), o in t ? Object.defineProperty(t, o, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[o] = c, t
			}

			function p(t) {
				var o = f(t, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(t, o) {
				if (typeof t != "object" || t === null) return t;
				var c = t[Symbol.toPrimitive];
				if (c !== void 0) {
					var g = c.call(t, o || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(t)
			}
			let i = function(t) {
					return t.SetCurrentUser = "user.set", t
				}({}),
				u = function(t) {
					return t.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", t.SetZone = "MARKETPLACE/AUTH/SET_ZONE", t.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", t.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", t.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", t.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", t.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", t.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", t.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", t.ResetState = "MARKETPLACE/AUTH/RESET_STATE", t
				}({});
			const l = {
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

			function v(t = e.fD, o) {
				switch (o.type) {
					case u.ResetState:
						return r({}, e.fD);
					case u.CurrentUserSending:
						return r({}, t);
					case u.CurrentUserSuccess:
						const {
							user: c
						} = o;
						return r({}, t, {
							user: c
						});
					case u.CurrentUserFailed:
						return r({}, t);
					case u.SetZone:
						const {
							zone: g
						} = o;
						return r({}, t, {
							zone: g
						});
					case u.SetToken:
						const {
							token: a
						} = o;
						return r({}, t, {
							token: a
						});
					case u.ClearToken:
						return r({}, t, {
							token: null
						});
					case u.SetTokenValid:
						const {
							isTokenValid: C
						} = o;
						return r({}, t, {
							isTokenValid: C
						});
					default:
						return t
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Nw: function() {
					return v
				},
				U4: function() {
					return l
				},
				ZP: function() {
					return t
				},
				dg: function() {
					return u
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				r = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function s(o) {
				for (var c = 1; c < arguments.length; c++) {
					var g = arguments[c] != null ? Object(arguments[c]) : {},
						a = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(g).filter(function(C) {
						return Object.getOwnPropertyDescriptor(g, C).enumerable
					})), a.forEach(function(C) {
						p(o, C, g[C])
					})
				}
				return o
			}

			function p(o, c, g) {
				return c = f(c), c in o ? Object.defineProperty(o, c, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[c] = g, o
			}

			function f(o) {
				var c = i(o, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function i(o, c) {
				if (typeof o != "object" || o === null) return o;
				var g = o[Symbol.toPrimitive];
				if (g !== void 0) {
					var a = g.call(o, c || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(o)
			}
			let u = function(o) {
					return o.CloudflareZoneChangeStart = "zone.start", o
				}({}),
				l = function(o) {
					return o.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", o.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", o.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", o.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", o.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", o.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", o.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", o.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", o.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", o.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", o.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", o.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", o.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", o.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", o.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", o.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", o.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", o.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", o.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", o.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", o.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", o.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", o.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", o.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", o.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", o.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", o.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", o.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", o.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", o.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", o.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", o.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", o.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", o.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", o.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", o.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", o.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", o.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", o.ResetState = "MARKETPLACE/COMMON/RESET_STATE", o
				}({});
			const v = {
				resetState: () => ({
					type: l.ResetState
				}),
				zoneChangedSaga: () => ({
					type: l.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (o, c) => ({
					type: l.GetHomePageAssetsSaga,
					zoneId: o,
					currentResources: c
				}),
				getInstalledAppsAssetsSaga: o => ({
					type: l.GetInstalledAppsAssetsSaga,
					zoneId: o
				}),
				getDevelopedAppsAssetsSaga: (o, c) => ({
					type: l.GetDevelopedAppsAssetsSaga,
					userId: o,
					zoneId: c
				}),
				getDevelopedAppsSending: () => ({
					type: l.GetDevelopedAppsSending
				}),
				getDevelopedAppsSuccess: o => ({
					type: l.GetDevelopedAppsSuccess,
					developedApps: o
				}),
				getDevelopedAppsFailed: () => ({
					type: l.GetDevelopedAppsFailed
				}),
				getAppInfoAssetsSaga: (o, c, g) => ({
					type: l.GetAppInfoAssetsSaga,
					appIdentifier: o,
					zoneId: c,
					version: g
				}),
				setUpdatableInstalls: o => ({
					type: l.SetUpdatableInstalls,
					updatableInstallsList: o
				}),
				getAppSaga: o => ({
					type: l.GetAppSaga,
					appIdentifier: o
				}),
				getAppSending: () => ({
					type: l.GetAppSending
				}),
				getAppSuccess: o => ({
					type: l.GetAppSuccess,
					app: o
				}),
				getAppFailed: () => ({
					type: l.GetAppFailed
				}),
				clearApp: () => ({
					type: l.ClearApp
				}),
				getAppsSaga: () => ({
					type: l.GetAppsSaga
				}),
				getAppsSending: () => ({
					type: l.GetAppsSending
				}),
				getAppsSuccess: o => ({
					type: l.GetAppsSuccess,
					appsList: o
				}),
				getAppsFailed: () => ({
					type: l.GetAppsFailed
				}),
				getInstallsSaga: o => ({
					type: l.GetInstallsSaga,
					zoneId: o
				}),
				getInstallsSending: () => ({
					type: l.GetInstallsSending
				}),
				getInstallsSuccess: o => ({
					type: l.GetInstallsSuccess,
					installsList: o
				}),
				getInstallsFailed: () => ({
					type: l.GetInstallsFailed
				}),
				getCategoriesSaga: o => ({
					type: l.GetCategoriesSaga,
					queryParams: o
				}),
				getCategoriesSending: () => ({
					type: l.GetCategoriesSending
				}),
				getCategoriesSuccess: o => ({
					type: l.GetCategoriesSuccess,
					categoriesList: o
				}),
				getCategoriesFailed: () => ({
					type: l.GetCategoriesFailed
				}),
				getMetadataSaga: o => ({
					type: l.GetMetadataSaga,
					zoneId: o
				}),
				getMetadataSending: () => ({
					type: l.GetMetadataSending
				}),
				getMetadataSuccess: o => ({
					type: l.GetMetadataSuccess,
					metadata: o
				}),
				getMetadataFailed: () => ({
					type: l.GetMetadataFailed
				}),
				postMetadataSaga: (o, c) => ({
					type: l.PostMetadataSaga,
					zoneId: o,
					data: c
				}),
				postMetadataSending: () => ({
					type: l.PostMetadataSending
				}),
				postMetadataSuccess: o => ({
					type: l.PostMetadataSuccess,
					metadata: o
				}),
				postMetadataFailed: () => ({
					type: l.PostMetadataFailed
				}),
				getRecommendedAppsSaga: (o, c, g) => ({
					type: l.GetRecommendedAppsSaga,
					appsList: o,
					installsList: c,
					metadata: g
				}),
				getRecommendedAppsSending: () => ({
					type: l.GetRecommendedAppsSending
				}),
				getRecommendedAppsSuccess: o => ({
					type: l.GetRecommendedAppsSuccess,
					recommendedAppsList: o
				}),
				getRecommendedAppsFailed: () => ({
					type: l.GetRecommendedAppsFailed
				})
			};

			function t(o = e.w6, c) {
				switch (c.type) {
					case l.ResetState:
						return s({}, e.w6);
					case l.ZoneChangedSaga:
						return s({}, o, {
							installsList: s({}, e.w6.installsList),
							recommendedAppsList: s({}, e.w6.recommendedAppsList),
							metadata: s({}, e.w6.metadata)
						});
					case l.GetAppsSending:
						return s({}, o, {
							appsList: s({}, (0, r.pG)(o.appsList, e.h_))
						});
					case l.GetAppsSuccess:
						return s({}, o, {
							appsList: s({}, (0, r.pG)(o.appsList, e.Jz, c.appsList))
						});
					case l.GetAppsFailed:
						return s({}, o, {
							appsList: s({}, (0, r.pG)(o.appsList, e.yc))
						});
					case l.GetInstallsSending:
						return s({}, o, {
							installsList: s({}, (0, r.pG)(o.installsList, e.h_))
						});
					case l.GetInstallsSuccess:
						return s({}, o, {
							installsList: s({}, (0, r.pG)(o.installsList, e.Jz, c.installsList))
						});
					case l.GetInstallsFailed:
						return s({}, o, {
							installsList: s({}, (0, r.pG)(o.installsList, e.yc))
						});
					case l.GetCategoriesSending:
						return s({}, o, {
							categoriesList: s({}, (0, r.pG)(o.categoriesList, e.h_))
						});
					case l.GetCategoriesSuccess:
						return s({}, o, {
							categoriesList: s({}, (0, r.pG)(o.categoriesList, e.Jz, c.categoriesList))
						});
					case l.GetCategoriesFailed:
						return s({}, o, {
							categoriesList: s({}, (0, r.pG)(o.categoriesList, e.yc))
						});
					case l.GetMetadataSending:
						return s({}, o, {
							metadata: s({}, (0, r.pG)(o.metadata, e.h_))
						});
					case l.GetMetadataSuccess:
						return s({}, o, {
							metadata: s({}, (0, r.pG)(o.metadata, e.Jz, c.metadata))
						});
					case l.GetMetadataFailed:
						return s({}, o, {
							metadata: s({}, (0, r.pG)(o.metadata, e.yc))
						});
					case l.PostMetadataSending:
						return s({}, o, {
							metadata: s({}, (0, r.pG)(o.metadata, e.h_))
						});
					case l.PostMetadataSuccess:
						return s({}, o, {
							metadata: s({}, (0, r.pG)(o.metadata, e.Jz, c.metadata))
						});
					case l.PostMetadataFailed:
						return s({}, o, {
							metadata: s({}, (0, r.pG)(o.metadata, e.yc))
						});
					case l.GetRecommendedAppsSending:
						return s({}, o, {
							recommendedAppsList: s({}, (0, r.pG)(o.recommendedAppsList, e.h_))
						});
					case l.GetRecommendedAppsSuccess:
						return s({}, o, {
							recommendedAppsList: s({}, (0, r.pG)(o.recommendedAppsList, e.Jz, c.recommendedAppsList))
						});
					case l.GetRecommendedAppsFailed:
						return s({}, o, {
							recommendedAppsList: s({}, (0, r.pG)(o.recommendedAppsList, e.yc))
						});
					case l.GetAppSending:
						return s({}, o, {
							app: s({}, (0, r.pG)(o.app, e.h_))
						});
					case l.GetAppSuccess:
						return s({}, o, {
							app: s({}, (0, r.pG)(o.app, e.Jz, c.app))
						});
					case l.GetAppFailed:
						return s({}, o, {
							app: s({}, (0, r.pG)(o.app, e.yc))
						});
					case l.ClearApp:
						return s({}, o, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case l.SetUpdatableInstalls:
						return s({}, o, {
							updatableInstallsList: c.updatableInstallsList
						});
					case l.GetDevelopedAppsSending:
						return s({}, o, {
							developedApps: s({}, (0, r.pG)(o.developedApps, e.h_))
						});
					case l.GetDevelopedAppsSuccess:
						return s({}, o, {
							developedApps: s({}, (0, r.pG)(o.developedApps, e.Jz, c.developedApps))
						});
					case l.GetDevelopedAppsFailed:
						return s({}, o, {
							developedApps: s({}, (0, r.pG)(o.developedApps, e.yc))
						});
					default:
						return o
				}
			}
		},
		"../react/pages/apps/marketplace/types.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				m: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CloudflareAppsToken = "CloudflareAppsToken", r.CloudflareAppsAuthAttempts = "CloudflareAppsAuthAttempts", r
			}({})
		},
		"../react/pages/caching/tracking.tsx": function(V, _, n) {
			"use strict";
			n.d(_, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CACHE_PURGE = "submit custom purge", r.TIERED_CACHE = "select tiered cache topology", r.CACHE_ANALYTICS = "load cache analytics data", r
			}({})
		},
		"../react/pages/dns/dns-records/tracking.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				U: function() {
					return e
				},
				X: function() {
					return r
				}
			});
			let e = function(s) {
				return s.DNS_RECORD_CREATE = "create DNS records", s.DNS_RECORD_UPDATE = "update DNS records", s.DNS_RECORD_DELETE = "delete DNS records", s.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", s
			}({});
			const r = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				BB: function() {
					return r
				},
				Pm: function() {
					return s
				},
				UZ: function() {
					return e
				}
			});
			let e = function(f) {
				return f.ROOT = "root", f.DSTADDRS_CARD = "dstaddrs_card", f.RULES_CARD = "rules_card", f.CATCHALL_CARD = "catchall_card", f.SETTINGS_PAGE = "settings_page", f.WORKERS_PAGE = "workers_page", f
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
			let s = function(f) {
				return f[f.Verified = 0] = "Verified", f[f.Pending = 1] = "Pending", f[f.Missing = 2] = "Missing", f[f.WorkerNotFound = 3] = "WorkerNotFound", f[f.Unknown = 4] = "Unknown", f[f.Loading = 5] = "Loading", f
			}({});
			const p = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/firewall/analytics/constants.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				AU: function() {
					return a
				},
				Bc: function() {
					return g
				},
				Bd: function() {
					return Q
				},
				Bt: function() {
					return o
				},
				Ji: function() {
					return H
				},
				LO: function() {
					return c
				},
				Pk: function() {
					return h
				},
				WB: function() {
					return J
				},
				Wd: function() {
					return re
				},
				Zj: function() {
					return N
				},
				e_: function() {
					return d
				},
				hk: function() {
					return G
				},
				jY: function() {
					return S
				},
				kF: function() {
					return te
				},
				kg: function() {
					return O
				},
				oD: function() {
					return C
				},
				pP: function() {
					return y
				},
				q4: function() {
					return R
				},
				qC: function() {
					return E
				}
			});
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = n("../../../../node_modules/@cloudflare/component-filter-bar/es/index.js"),
				s = n("../../../../node_modules/@cloudflare/data-locations/es/index.js"),
				p = n("../../../../node_modules/@cloudflare/cf.util.patterns/index.js"),
				f = n.n(p),
				i = n("../react/common/components/analytics/AnalyticsReport/constants.ts");

			function u(k) {
				for (var $ = 1; $ < arguments.length; $++) {
					var U = arguments[$] != null ? Object(arguments[$]) : {},
						le = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(U).filter(function(pe) {
						return Object.getOwnPropertyDescriptor(U, pe).enumerable
					})), le.forEach(function(pe) {
						l(k, pe, U[pe])
					})
				}
				return k
			}

			function l(k, $, U) {
				return $ = v($), $ in k ? Object.defineProperty(k, $, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[$] = U, k
			}

			function v(k) {
				var $ = t(k, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function t(k, $) {
				if (typeof k != "object" || k === null) return k;
				var U = k[Symbol.toPrimitive];
				if (U !== void 0) {
					var le = U.call(k, $ || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(k)
			}
			const o = {
					unknown: "firewall.analytics.actions.labels.unknown",
					allow: "firewall.analytics.actions.labels.allow",
					bypass: "firewall.analytics.actions.labels.bypass",
					block: "firewall.analytics.actions.labels.drop",
					challenge: "filter_based_firewall.action_select.challenge",
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
				c = {
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
				g = {
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
				C = {
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
				},
				E = {
					action: {
						label: "firewall.analytics.filters.labels.action",
						type: r.kE.select,
						options: Object.keys(o).filter(k => !["challenge_solved", "challenge_failed", "challenge_bypassed", "jschallenge_solved", "jschallenge_failed", "jschallenge_bypassed", "unknown"].includes(k)),
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn]
					},
					botScore: {
						label: "firewall.analytics.filters.labels.botScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.botScore",
						validate: k => {
							const $ = parseInt(k, 10);
							return $ >= 0 && $ <= 100
						},
						urlParam: "botScore"
					},
					botScoreSrcName: {
						label: "firewall.analytics.filters.labels.botScoreSrcName",
						type: r.kE.select,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						options: Object.keys(g),
						urlParam: "botScoreSrcName"
					},
					clientAsn: {
						label: "firewall.analytics.filters.labels.clientAsn",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: 13335,
						validationMessage: "firewall.analytics.filters.errors.asn",
						validate: k => !isNaN(parseFloat(k)) && isFinite(parseFloat(k)),
						urlParam: "asn"
					},
					clientCountryName: {
						label: "firewall.analytics.filters.labels.clientCountryName",
						type: r.kE.select,
						options: Object.keys(s.zY),
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						urlParam: "country"
					},
					clientIP: {
						label: "firewall.analytics.filters.labels.clientIP",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: "192.0.2.0",
						validationMessage: "firewall.analytics.filters.errors.ip",
						validate: k => !!k && !!k.length && (p.ipv4.test(k) || p.ipv6.test(k)),
						urlParam: "ip"
					},
					clientRequestHTTPHost: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPHost",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.contains, i.Gn.notContains, i.Gn.startsWith, i.Gn.notStartsWith, i.Gn.endsWith, i.Gn.notEndsWith, i.Gn.in, i.Gn.notIn],
						example: "example.com",
						urlParam: "host"
					},
					clientRequestHTTPMethodName: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPMethodName",
						type: r.kE.select,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						options: ["GET", "POST", "PURGE", "PUT", "HEAD", "OPTIONS", "DELETE", "PATCH", "CONNECT", "TRACE"],
						urlParam: "http-method"
					},
					clientRequestHTTPProtocol: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPProtocol",
						type: r.kE.select,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						options: ["HTTP/1.0", "HTTP/1.1", "HTTP/1.2", "HTTP/2", "HTTP/3", "SPDY/3.1"],
						urlParam: "http-version"
					},
					ja3Hash: {
						label: "firewall.analytics.filters.labels.ja3Hash",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: "df669e7ea913f1ac0c0cce9a201a2ec1",
						urlParam: "ja3-hash"
					},
					ja4: {
						label: "firewall.analytics.filters.labels.ja4",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: "t13d1516h2_8daaf6152771_b186095e22b6",
						urlParam: "ja4"
					},
					apiGatewayMatchedEndpoint: {
						label: "firewall.analytics.filters.labels.apiGatewayMatchedEndpoint",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.contains, i.Gn.notContains, i.Gn.startsWith, i.Gn.notStartsWith, i.Gn.endsWith, i.Gn.notEndsWith, i.Gn.in, i.Gn.notIn],
						urlParam: "api-matched-endpoint",
						example: "/path/{var1}"
					},
					clientRequestPath: {
						label: "firewall.analytics.filters.labels.clientRequestPath",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.contains, i.Gn.notContains, i.Gn.startsWith, i.Gn.notStartsWith, i.Gn.endsWith, i.Gn.notEndsWith, i.Gn.in, i.Gn.notIn],
						example: "/content",
						urlParam: "path"
					},
					clientRequestQuery: {
						label: "firewall.analytics.filters.labels.clientRequestQuery",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.contains, i.Gn.notContains, i.Gn.startsWith, i.Gn.notStartsWith, i.Gn.endsWith, i.Gn.notEndsWith, i.Gn.in, i.Gn.notIn],
						example: "?example=1",
						urlParam: "query"
					},
					source: {
						label: "firewall.analytics.filters.labels.source",
						type: r.kE.select,
						options: Object.keys(d).filter(k => k !== "unknown"),
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						urlParam: "service"
					},
					rayName: {
						label: "firewall.analytics.filters.labels.rayName",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals],
						example: "1a79a4d60de6718e",
						urlParam: "ray-id",
						parse: k => k.replace(/-[A-Z]{3}$/, "")
					},
					ruleId: {
						label: "firewall.analytics.filters.labels.ruleId",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: 100001,
						urlParam: "rule-id"
					},
					rulesetId: {
						label: "firewall.analytics.filters.labels.rulesetId",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: "",
						urlParam: "ruleset-id"
					},
					userAgent: {
						label: "firewall.analytics.filters.labels.userAgent",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.contains, i.Gn.notContains, i.Gn.startsWith, i.Gn.notStartsWith, i.Gn.endsWith, i.Gn.notEndsWith, i.Gn.in, i.Gn.notIn],
						example: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6)...",
						urlParam: "user-agent"
					},
					wafMlAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlAttackScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: k => {
							const $ = parseInt(k, 10);
							return $ >= 0 && $ <= 100
						},
						urlParam: "waf-ml-score"
					},
					wafRceAttackScore: {
						label: "firewall.analytics.filters.labels.wafRceAttackScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.wafRceAttackScore",
						validate: k => {
							const $ = parseInt(k, 10);
							return $ >= 0 && $ <= 100
						},
						urlParam: "waf-rce-score"
					},
					wafMlSqliAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlSqliAttackScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: k => {
							const $ = parseInt(k, 10);
							return $ >= 0 && $ <= 100
						},
						urlParam: "waf-ml-sqli-score"
					},
					wafMlXssAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlXssAttackScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: k => {
							const $ = parseInt(k, 10);
							return $ >= 0 && $ <= 100
						},
						urlParam: "waf-ml-xss-score"
					},
					wafAttackScoreClass: {
						label: "firewall.analytics.filters.labels.wafAttackScoreClass",
						type: r.kE.select,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						options: ["attack", "likely_attack", "likely_clean", "clean", "not_scored"],
						example: "Attack",
						urlParam: "waf-ml-score-class"
					},
					zoneVersion: {
						label: "firewall.analytics.filters.labels.zoneVersion",
						type: r.kE.string,
						example: 3,
						operators: [i.Gn.equals, i.Gn.notEquals],
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.zoneVersion",
						validate: k => parseInt(k) >= 0,
						urlParam: "zone-version"
					},
					zoneTag: {
						label: "firewall.analytics.filters.labels.zoneTag",
						type: r.kE.string,
						example: "c40df159b74f0e1c0deedf29008ffc04",
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						urlParam: "zone-id"
					}
				},
				N = (k, $, U, le, pe, ee, z) => {
					const w = u({}, E);
					return k || (delete w.botScore, delete w.botScoreSrcName), $ || (delete w.ja3Hash, delete w.ja4, delete w.ja4Signals), U || (delete w.wafMlAttackScore, delete w.wafMlSqliAttackScore, delete w.wafMlXssAttackScore, delete w.wafRceAttackScore), ee || delete w.wafAttackScoreClass, le || delete w.zoneVersion, pe || delete w.apiGatewayMatchedEndpoint, z || delete w.zoneTag, w
				},
				R = {
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
				y = {
					TIMESERIES: "Timeseries Chart",
					DISTRIBUTION: "Source Distribution Chart",
					TOP_N: "Top N",
					FILTER_BAR: "Filter Bar"
				},
				S = "firewall-analytics",
				h = "encrypted_matched_data",
				O = {
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
				G = {
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
				te = ["REQUEST_HEADERS:HOST", "REQUEST_HEADERS:REFERER", "REQUEST_HEADERS:USER-AGENT"],
				re = {
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
				J = "13335",
				Q = "https://developers.cloudflare.com/ddos-protection/best-practices/respond-to-ddos-attacks/"
		},
		"../react/pages/firewall/api-shield/tracking.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Fj: function() {
					return l
				},
				kq: function() {
					return u
				},
				xr: function() {
					return v
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow?5628"),
				r = n.n(e);

			function s(t) {
				for (var o = 1; o < arguments.length; o++) {
					var c = arguments[o] != null ? Object(arguments[o]) : {},
						g = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(c).filter(function(a) {
						return Object.getOwnPropertyDescriptor(c, a).enumerable
					})), g.forEach(function(a) {
						p(t, a, c[a])
					})
				}
				return t
			}

			function p(t, o, c) {
				return o = f(o), o in t ? Object.defineProperty(t, o, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[o] = c, t
			}

			function f(t) {
				var o = i(t, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function i(t, o) {
				if (typeof t != "object" || t === null) return t;
				var c = t[Symbol.toPrimitive];
				if (c !== void 0) {
					var g = c.call(t, o || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(t)
			}
			let u = function(t) {
				return t.MAIN = "API Shield", t.SCHEMA_VALIDATION = "Schema Validation", t.JWT_VALIDATION = "JWT Validation", t.SEQUENCE_ANALYTICS = "Sequence Analytics", t.SEQUENCE_RULES = "Sequence Rules", t.ENDPOINT_MANAGEMENT = "Endpoint Management", t.API_DISCOVERY = "API Discovery", t.SETTINGS = "Settings", t
			}({});
			const l = {
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
						addOrRemoveSessionIdentifiers: "add or remove session identifiers"
					}
				},
				v = ({
					name: t,
					category: o = "user journey",
					product: c = u.MAIN,
					productName: g,
					additionalData: a
				}) => {
					r().sendEvent(t, s({
						category: o,
						product: c,
						productName: g
					}, a || {}))
				}
		},
		"../react/pages/firewall/bots/tracking.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				N3: function() {
					return e
				},
				UN: function() {
					return s
				},
				h1: function() {
					return r
				}
			});
			let e = function(p) {
					return p.INITIAL_FETCH_SCORES = "view bots scores distribution", p.FETCH_CONFIGURATION = "view bots configuration page", p.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", p.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", p.UPDATE_SETTINGS = "update bots settings", p.DELETE_RULE = "delete bots ruleset", p.UPDATE_RULE = "update bots ruleset", p.FETCH_RULES = "view bots ruleset", p.CONFIGURE_BOT_MANAGEMENT = "view bots management", p.WAF_RULES_REDIRECT = "redirect waf rules", p
				}({}),
				r = function(p) {
					return p.PROVIDED_TEMPLATE = "provided template link in detection card", p.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", p.USE_TEMPLATE = "use template", p.CREATE_FIREWALL_RULE = "create firewall rule", p.WAF_RULES = "waf rules", p
				}({});
			const s = "user journey"
		},
		"../react/pages/firewall/page-shield/tracking.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
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
		"../react/pages/firewall/rulesets/tracking.tsx": function(V, _, n) {
			"use strict";
			n.d(_, {
				QK: function() {
					return e
				},
				dy: function() {
					return r
				},
				sO: function() {
					return s
				},
				x4: function() {
					return p
				}
			});
			let e = function(f) {
				return f.DELETE = "delete", f.CREATE = "create", f.GET = "get", f.UPDATE = "update", f
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
					http_ratelimit: "rate limiting",
					http_request_firewall_custom: "custom",
					http_request_firewall_managed: "managed"
				},
				s = (f, i) => {
					var u;
					return `${i} ${(u=r[f])!==null&&u!==void 0?u:f} rule${i===e.GET?"s":""}`
				},
				p = () => {
					var f, i;
					return (f = Object.keys(r)) === null || f === void 0 || (i = f.map(u => {
						var l;
						return (l = Object.values(e)) === null || l === void 0 ? void 0 : l.map(v => s(u, v))
					})) === null || i === void 0 ? void 0 : i.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				AS: function() {
					return f
				},
				Gf: function() {
					return t
				},
				IK: function() {
					return o
				},
				Ki: function() {
					return r
				},
				Lz: function() {
					return c
				},
				nT: function() {
					return u
				},
				o4: function() {
					return g
				},
				oY: function() {
					return s
				},
				qH: function() {
					return v
				},
				x3: function() {
					return i
				}
			});
			var e = n("../react/pages/firewall/analytics/constants.ts");
			const r = ["block", "challenge", "jschallenge", "managedChallenge"],
				s = ["miss", "expired", "bypass", "dynamic"],
				p = a => Object.fromEntries(Object.entries(a).map(([C, d]) => [d, C])),
				f = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				i = p(f),
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
				l = p(u),
				v = {
					"Not Computed": "not_computed",
					"Machine Learning": "machine_learning",
					Heuristics: "heuristics",
					"Behavioral Analysis": "behavioral_analysis",
					"JS Fingerprinting": "js_fingerprinting",
					"Verified Bot": "verified_bot",
					"Cloudflare Service": "cloudflare_service"
				},
				t = p(v);
			let o = function(a) {
				return a.SAMPLED = "sampled", a.RAW = "raw", a
			}({});
			const c = "security-analytics-log-explorer";
			let g = function(a) {
				return a.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', a.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', a.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', a.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', a.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', a
			}({})
		},
		"../react/pages/home/alerts/config.tsx": function(V, _, n) {
			"use strict";
			n.d(_, {
				jk: function() {
					return E
				},
				w8: function() {
					return N
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				s = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				p = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function f(R) {
				for (var y = 1; y < arguments.length; y++) {
					var S = arguments[y] != null ? Object(arguments[y]) : {},
						h = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(S).filter(function(O) {
						return Object.getOwnPropertyDescriptor(S, O).enumerable
					})), h.forEach(function(O) {
						i(R, O, S[O])
					})
				}
				return R
			}

			function i(R, y, S) {
				return y = u(y), y in R ? Object.defineProperty(R, y, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[y] = S, R
			}

			function u(R) {
				var y = l(R, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function l(R, y) {
				if (typeof R != "object" || R === null) return R;
				var S = R[Symbol.toPrimitive];
				if (S !== void 0) {
					var h = S.call(R, y || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(R)
			}
			const v = "Notifications",
				t = "notification",
				o = (0, e.BC)`/${"accountId"}`,
				c = (0, e.BC)`${o}/notifications`,
				g = (0, e.BC)`${c}/destinations`,
				a = (0, e.BC)`${c}/create`,
				C = (0, e.BC)`${a}/${"alertType"}`,
				d = (0, e.BC)`${c}/edit/${"alertId"}`,
				E = f({
					account: o,
					alerts: c,
					destinations: g,
					createAlert: a,
					createAlertWithSelection: C,
					editAlert: d
				}, r._j, s._j),
				N = f({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, p.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				_j: function() {
					return i
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				s = (0, e.BC)`${r}/pagerduty/connect`,
				p = (0, e.BC)`${r}/pagerduty/register`,
				f = (0, e.BC)`${r}/pagerduty`,
				i = {
					pagerDutyConnect: s,
					pagerDutyRegister: p,
					pagerDutyList: f
				};
			var u = null
		},
		"../react/pages/home/alerts/integrations/redux/entities.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				w: function() {
					return e
				}
			});
			const e = {
				integrations: "accountAlertIntegrations",
				pagerDuty: "accountAlertsPagerDutyIntegrations",
				pagerDutyRequest: "accountAlertsPagerDutyIntegrationRequest",
				statuspageComponents: "accountAlertsStatuspageComponents",
				webhook: "accountAlertsWebhookIntegration",
				webhooks: "accountAlertsWebhookIntegrations",
				deliveryMechanisms: "alertAccountDeliveryMechanisms"
			}
		},
		"../react/pages/home/alerts/integrations/webhooks/routes.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				_j: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				s = (0, e.BC)`${r}/webhook/create`,
				p = (0, e.BC)`${r}/webhook/edit/${"webhookId"}`,
				f = {
					webhookCreate: s,
					webhookResource: p
				};
			var i = null
		},
		"../react/pages/home/alerts/tracking.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", r
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_LIST = "create list", r.DELETE_LIST = "delete list", r.ADD_LIST_ITEM = "add list item", r.DELETE_LIST_ITEM = "delete list item", r
			}({})
		},
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.PEER_DNS_CREATE = "create peer server", r.PEER_DNS_UPDATE = "update peer server", r.PEER_DNS_DELETE = "delete peer server", r.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", r.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", r.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", r
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				AA: function() {
					return B
				},
				AN: function() {
					return tt
				},
				AY: function() {
					return He
				},
				Am: function() {
					return R
				},
				B2: function() {
					return ue
				},
				BB: function() {
					return te
				},
				BF: function() {
					return at
				},
				BQ: function() {
					return Z
				},
				Cs: function() {
					return Qe
				},
				E8: function() {
					return bt
				},
				Fl: function() {
					return ft
				},
				Fu: function() {
					return Q
				},
				G_: function() {
					return E
				},
				Gc: function() {
					return et
				},
				IO: function() {
					return de
				},
				JK: function() {
					return ye
				},
				K: function() {
					return O
				},
				KN: function() {
					return xe
				},
				LI: function() {
					return I
				},
				LX: function() {
					return mt
				},
				L_: function() {
					return _e
				},
				Ly: function() {
					return Wt
				},
				MR: function() {
					return ne
				},
				Mj: function() {
					return x
				},
				NB: function() {
					return zt
				},
				Or: function() {
					return D
				},
				P5: function() {
					return Pt
				},
				PE: function() {
					return Ve
				},
				Pd: function() {
					return Ht
				},
				Pk: function() {
					return Xe
				},
				Pp: function() {
					return ke
				},
				Q1: function() {
					return J
				},
				Qr: function() {
					return Ge
				},
				Qv: function() {
					return Ye
				},
				Rp: function() {
					return yt
				},
				Sh: function() {
					return ut
				},
				TZ: function() {
					return W
				},
				Tg: function() {
					return me
				},
				U$: function() {
					return Fe
				},
				Uy: function() {
					return Kt
				},
				Vw: function() {
					return $
				},
				W3: function() {
					return Me
				},
				WR: function() {
					return he
				},
				WX: function() {
					return ze
				},
				XF: function() {
					return ct
				},
				Xc: function() {
					return Ee
				},
				ZB: function() {
					return re
				},
				Zs: function() {
					return X
				},
				_f: function() {
					return st
				},
				_k: function() {
					return Ie
				},
				b4: function() {
					return we
				},
				c2: function() {
					return F
				},
				cE: function() {
					return At
				},
				fE: function() {
					return Re
				},
				g7: function() {
					return je
				},
				hO: function() {
					return Be
				},
				hV: function() {
					return Zt
				},
				hk: function() {
					return y
				},
				hr: function() {
					return ce
				},
				it: function() {
					return Ue
				},
				jG: function() {
					return se
				},
				jN: function() {
					return qe
				},
				m8: function() {
					return w
				},
				nm: function() {
					return Tt
				},
				oW: function() {
					return gt
				},
				oc: function() {
					return N
				},
				pH: function() {
					return K
				},
				pi: function() {
					return z
				},
				rI: function() {
					return ae
				},
				s7: function() {
					return Se
				},
				sO: function() {
					return Te
				},
				sg: function() {
					return ot
				},
				tB: function() {
					return d
				},
				tN: function() {
					return Ne
				},
				vV: function() {
					return j
				},
				vc: function() {
					return Je
				}
			});
			var e = n("../../../../node_modules/lodash/lodash.js"),
				r = n.n(e),
				s = n("../../../../node_modules/moment/moment.js"),
				p = n.n(s),
				f = n("../../../common/util/types/src/api/domain.ts"),
				i = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				u = n("../react/utils/translator.tsx"),
				l = n("../react/utils/url.ts"),
				v = n("../react/pages/home/domain-registration/config.ts"),
				t = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				o = n("../react/pages/home/domain-registration/types.ts");

			function c(m) {
				for (var P = 1; P < arguments.length; P++) {
					var ge = arguments[P] != null ? Object(arguments[P]) : {},
						Pe = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && Pe.push.apply(Pe, Object.getOwnPropertySymbols(ge).filter(function(We) {
						return Object.getOwnPropertyDescriptor(ge, We).enumerable
					})), Pe.forEach(function(We) {
						g(m, We, ge[We])
					})
				}
				return m
			}

			function g(m, P, ge) {
				return P = a(P), P in m ? Object.defineProperty(m, P, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[P] = ge, m
			}

			function a(m) {
				var P = C(m, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function C(m, P) {
				if (typeof m != "object" || m === null) return m;
				var ge = m[Symbol.toPrimitive];
				if (ge !== void 0) {
					var Pe = ge.call(m, P || "default");
					if (typeof Pe != "object") return Pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(m)
			}

			function d(m) {
				return m.filter(P => P.isSelected).reduce((P, {
					transferFee: ge,
					isZoneEntitlementPresent: Pe
				}) => Pe ? P : P + ge, 0)
			}

			function E(m) {
				return (m / 100).toLocaleString("en-US", {
					style: "currency",
					currency: "USD"
				})
			}

			function N(m) {
				return m.filter(P => P.registrar.toLowerCase() === "godaddy")
			}
			const R = "MMM D, YYYY";

			function y(m, P, ge, Pe) {
				var We, $e, dt, Et, _t, St, Ot, It, wt, Dt, Lt, Rt, kt, Mt, Gt, Nt, jt, Ut, vt, Bt, xt;
				const Vt = (((We = P.fees) === null || We === void 0 ? void 0 : We.registration_fee) !== "Unsupported" && (($e = P.fees) === null || $e === void 0 ? void 0 : $e.registration_fee) || 0) * 100,
					Yt = (((dt = P.fees) === null || dt === void 0 ? void 0 : dt.transfer_fee) !== "Unsupported" && ((Et = P.fees) === null || Et === void 0 ? void 0 : Et.transfer_fee) || 0) * 100,
					Qt = (((_t = P.fees) === null || _t === void 0 ? void 0 : _t.registration_fee) !== "Unsupported" && ((St = P.fees) === null || St === void 0 ? void 0 : St.registration_fee) || 0) * 100,
					Jt = (((Ot = P.fees) === null || Ot === void 0 ? void 0 : Ot.renewal_fee) !== "Unsupported" && ((It = P.fees) === null || It === void 0 ? void 0 : It.renewal_fee) || 0) * 100,
					Xt = (((wt = P.fees) === null || wt === void 0 ? void 0 : wt.redemption_fee) !== "Unsupported" && ((Dt = P.fees) === null || Dt === void 0 ? void 0 : Dt.redemption_fee) || 0) * 100,
					Ke = m[P.name];
				return {
					name: P.name,
					zone: Ke,
					entitlements: ge,
					registryCheck: Pe,
					nameservers: P.name_servers,
					isAvailable: P.available,
					lastKnownStatus: P.last_known_status,
					authCode: P.auth_code,
					isEnterpriseZone: (Ke == null || (Lt = Ke.plan) === null || Lt === void 0 ? void 0 : Lt.legacy_id) === "enterprise",
					isActiveZone: (Ke == null ? void 0 : Ke.status) === "active",
					corResponsesPending: P.cor_responses_pending,
					isCorLocked: P.cor_locked,
					corLockedUntil: P.cor_locked_until ? p()(P.cor_locked_until).format(R) : null,
					isFullZone: (Ke == null ? void 0 : Ke.type) == o.xd.Full,
					isLocked: P.locked,
					registrar: P.current_registrar || v.JM,
					zoneId: Ke == null ? void 0 : Ke.id,
					currentExpiration: p()(P.expires_at).format(R),
					newExpiration: p()(P.expires_at).add(1, "year").format(R),
					wholesaleCost: Vt,
					transferFee: Yt,
					registrationFee: Qt,
					renewalFee: Jt,
					redemptionFee: Xt,
					lastEntitledAt: P.last_entitled_at ? new Date(P.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(ge) && !!ge.find(qt => qt.id === v.g5 && qt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: P.transfer_in && h(P.transfer_in) || o.BJ.Pending,
					autoTransferStatus: o._n.Pending,
					transferConditions: P.transfer_conditions,
					transferApiCallStatus: o.Yh.Pending,
					transferIn: P.transfer_in,
					transferOut: P.transfer_out,
					autoRenew: P.auto_renew === !0,
					lastTransferredAt: P.last_transferred_at,
					createdAt: P.created_at,
					paymentExpiresAt: p()(P.payment_expires_at).isValid() ? p()(P.payment_expires_at) : p()(P.expires_at).isValid() ? p()(P.expires_at) : "",
					contactIds: {
						[o.l2.Administrator]: (Rt = P.contacts) === null || Rt === void 0 || (kt = Rt.administrator) === null || kt === void 0 ? void 0 : kt.id,
						[o.l2.Billing]: (Mt = P.contacts) === null || Mt === void 0 || (Gt = Mt.billing) === null || Gt === void 0 ? void 0 : Gt.id,
						[o.l2.Registrant]: (Nt = P.contacts) === null || Nt === void 0 || (jt = Nt.registrant) === null || jt === void 0 ? void 0 : jt.id,
						[o.l2.Technical]: (Ut = P.contacts) === null || Ut === void 0 || (vt = Ut.technical) === null || vt === void 0 ? void 0 : vt.id
					},
					landing: P.landing,
					whois: P.whois,
					emailVerified: P.email_verified,
					materialChanges: G(P.material_changes),
					corChanges: P.cor_changes ? te(Object.assign(c({}, S), P.cor_changes)) : {},
					registryStatuses: P.registry_statuses ? P.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Bt = P.domain_protection_services) === null || Bt === void 0 ? void 0 : Bt.status
					},
					deletion: {
						isDeletable: P == null || (xt = P.deletion) === null || xt === void 0 ? void 0 : xt.is_deletable
					},
					premiumType: P == null ? void 0 : P.premiumType,
					fees: P == null ? void 0 : P.fees
				}
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

			function h(m) {
				switch (m.enter_auth_code) {
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

			function O(m) {
				let P = m.extensions;
				(P == null ? void 0 : P.application_purpose) && (P == null ? void 0 : P.nexus_category) && (m.extensions = {
					nexusCategory: P.nexus_category,
					applicationPurpose: P.application_purpose
				});
				let ge = c({}, typeof m.id == "string" ? {
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
				return L(ge)
			}

			function G(m) {
				let P = [];
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
				for (const Pe in m) {
					const We = m[Pe],
						$e = ge[We];
					P.push($e)
				}
				return P
			}
			const H = m => {
				if (!m) return null;
				let P = m;
				return m.includes("C31") && (P = "C31"), m.includes("C32") && (P = "C32"), P
			};

			function te(m) {
				return c({}, typeof m.id == "string" ? {
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
						nexusCategory: H(m.extensions.nexus_category),
						applicationPurpose: m.extensions.application_purpose
					}
				} : {})
			}

			function re(m = {}) {
				const P = {
					name: "",
					zoneId: "",
					zone: c({
						id: "",
						name: "",
						status: "pending",
						plan: c({
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
						type: o.xd.Full
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
					wholesaleCost: 8.79,
					transferFee: 8.79,
					registrationFee: 8.79,
					renewalFee: 10.76,
					redemptionFee: 10.76,
					lastEntitledAt: null,
					isZoneEntitlementPresent: null,
					registrar: "",
					autoTransferStatus: o._n.Pending,
					transferAuthCode: "",
					authCodeStatus: o.BJ.Pending,
					transferApiCallStatus: o.Yh.Pending,
					transferConditions: c({
						exists: !0,
						supported_tld: !0,
						not_secure: !0,
						not_waiting: !0,
						not_started: !0,
						not_premium: !0
					}, m.transferConditions || {}),
					transferIn: c({
						unlock_domain: o.lW.UNKNOWN,
						disable_privacy: o.lW.UNKNOWN,
						enter_auth_code: o.lW.UNKNOWN,
						approve_transfer: o.lW.UNKNOWN,
						accept_foa: o.lW.UNKNOWN,
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
					premiumType: o.Vs.Not_Premium,
					fees: null
				};
				return Object.assign(P, m)
			}

			function J(m = {}) {
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

			function Q(m) {
				const P = v.Py.concat(v.ui).reduce((ge, Pe) => c({}, ge, {
					[Pe]: []
				}), {});
				return m.forEach(ge => {
					let Pe = k(ge.registrar);
					Pe in P || (Pe = v.ui), ot(ge.name) && (Pe = "uk"), P[Pe].push(ge)
				}), Object.keys(P).sort((ge, Pe) => ge.localeCompare(Pe)).map(ge => ({
					registrar: ge,
					domains: P[ge]
				})).filter(ge => ge.domains.length > 0)
			}

			function k(m) {
				return m == null ? void 0 : m.toLowerCase().replace(/\s|,|\./g, "")
			}

			function $(m) {
				if (!m || !m.registrar) return "unknown";
				if (ot(m.name)) return "uk";
				const P = k(m.registrar);
				return P in v.gM ? P : "unknown"
			}

			function U(m, P) {
				return m.filter(ge => k(ge.registrar) === k(P))
			}
			const le = [];

			function pe(m) {
				return le.some(P => m.endsWith("." + P))
			}

			function ee(m) {
				return !m.isEnterpriseZone || !Array.isArray(m.entitlements) ? !1 : !!m.entitlements.find(({
					id: P,
					allocation: ge
				}) => P === v.g5 && ge.value === !0)
			}

			function z(m) {
				var P;
				const ge = [o.rj.CLIENT_HOLD, o.rj.SERVER_HOLD, o.rj.SERVER_TRANSFER_PROHIBITED, o.rj.PENDING_DELETE, o.rj.PENDING_TRANSFER, o.rj.CLIENT_TRANSFER_PROHIBITED];
				let Pe = !1,
					We = null;
				return (P = m.registryStatuses) === null || P === void 0 || P.some($e => {
					ge.includes($e) && (We = $e, Pe = !0)
				}), [Pe, We]
			}

			function w(m, P = []) {
				var ge;
				if (!m) return [!1, t.keys.cannot_transfer_default];
				if (m.zone.status !== "active") return [!1, t.keys.cannot_transfer_zone_not_active];
				if (!m.isFullZone && !ee(m)) return [!1, t.keys.cannot_transfer_zone_not_eligible];
				if (m.registrar === "Cloudflare") return [!1, t.keys.cannot_transfer_domain_on_cf];
				if (m.isAvailable) return [!1, t.keys.cannot_transfer_domain_available];
				if (!m.transferConditions) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if ((ge = m.registryCheck) === null || ge === void 0 ? void 0 : ge.premium) return [!1, t.keys.cannot_transfer_domain_premium];
				if (K(m)) return [!1, t.keys.cannot_transfer_domain_transfer_in_progress];
				let Pe;
				for (Pe in m.transferConditions)
					if (!m.transferConditions[Pe]) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (pe(m.name) && !P.some(dt => m.name.endsWith("." + dt))) return [!1, t.keys.cannot_transfer_domain_tld_not_supported];
				const [We, $e] = z(m);
				return We && $e ? [!1, t.keys.cannot_transfer_domain_registry_status[$e]] : [!0, ""]
			}

			function K(m) {
				var P, ge;
				return !!m.transferIn && !((P = m.transferConditions) === null || P === void 0 ? void 0 : P.not_started) && !!(ot(m.name) || ((ge = m.registryStatuses) === null || ge === void 0 ? void 0 : ge.includes(o.rj.PENDING_TRANSFER)))
			}

			function Y(m) {
				return !!m.registrar && !!m.currentExpiration
			}

			function ue(m) {
				const [P] = w(m);
				return Y(m) ? xe(m) ? o.M5.InProgressOrOnCF : P ? o.M5.Supported : o.M5.Unsupported : o.M5.Unknown
			}

			function F(m) {
				return m.transferIn && [o.lW.REJECTED, o.lW.NEEDED].includes(m.transferIn.enter_auth_code) || !1
			}

			function ne(m) {
				return m.registrar === "Cloudflare"
			}

			function ae(m) {
				return !!(m == null ? void 0 : m.includes(o.rj.AUTO_RENEW_PERIOD))
			}

			function x(m) {
				return !!(m == null ? void 0 : m.includes(o.rj.PENDING_TRANSFER))
			}
			const A = "Invalid date";

			function D(m) {
				return m.newExpiration === A ? "Unavailable" : m.newExpiration
			}

			function W(m) {
				return m.currentExpiration === A ? "Unavailable" : m.currentExpiration
			}

			function oe(m) {
				const P = !!(m.lastEntitledAt && m.isZoneEntitlementPresent === null);
				return [m.newExpiration, m.currentExpiration].some(Pe => Pe === A) || P || m.isEnterpriseZone && !m.isFullZone && !Array.isArray(m.entitlements)
			}

			function ve(m) {
				return m.transferIn && m.transferIn.approve_transfer === EApiTransferStatus.REJECTED || !1
			}

			function Oe(m) {
				return m.transferIn && m.transferIn.can_cancel_transfer || !1
			}

			function B(m) {
				return m.substring(m.indexOf("."))
			}

			function ce(m) {
				return m.map(P => P.name).map(P => B(P)).filter((P, ge, Pe) => !Pe.includes(P, ge + 1))
			}

			function we(m) {
				if (v.no) return [!0, ""];
				if (!ne(m)) return [!1, o.ok.NotOnCF];
				if (m.isCorLocked) return [!1, m.corLockedUntil ? o.ok.CorLockedUntil : o.ok.CorLock];
				if (m.lastTransferredAt) {
					const P = p()(m.lastTransferredAt),
						ge = p().duration(p()().diff(P)).as("days"),
						Pe = ot(m.name);
					if (ge < (Pe ? 1 : 60)) return [!1, Pe ? o.ok.RecentTransferUK : o.ok.RecentTransfer]
				}
				if (m.createdAt) {
					const P = p()(m.createdAt);
					if (p().duration(p()().diff(P)).as("days") < 60) return [!1, o.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function ze(m) {
				return !!(v.Bc || m.transferOut)
			}

			function xe(m) {
				return je(m) || ne(m)
			}

			function Ne(m) {
				return !je(m) && ne(m)
			}

			function je(m) {
				return !m || m.lastKnownStatus === "pendingTransfer" || m.lastKnownStatus === "transferFOAPending" || !ne(m) && m.transferConditions && !m.transferConditions.not_started || !1
			}

			function Ve(m) {
				return !(pe(m.name) || m.transferConditions && !m.transferConditions.supported_tld)
			}

			function Ye(m) {
				return (m == null ? void 0 : m.includes("/")) ? !0 : m.split("").some(P => P.charCodeAt(0) > 123)
			}

			function rt(m, P) {
				return m.filter(ge => !P.has(ge.name))
			}

			function Xe(m) {
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

			function Qe(m) {
				const P = k(m);
				return v.gM[P] || "unknown"
			}

			function Je(m) {
				return p()(m.paymentExpiresAt).isBefore(p()())
			}

			function qe(m) {
				return m.transferIn && m.transferIn.enter_auth_code === o.lW.REJECTED || !1
			}

			function fe(m) {
				return transferOnboardingRegistrarWhitelist.some(P => P === k(m.registrar))
			}

			function ye(m) {
				const P = ["CU", "KP", "IR", "SY"];
				return m.filter(ge => !P.includes(ge.code))
			}

			function me(m) {
				if (!!m) return `${m.charAt(0).toUpperCase()}${m.slice(1)}${m.charAt(m.length-1)==="."?"":"."}`
			}

			function be(m) {
				var P;
				return ((P = m.transferConditions) === null || P === void 0 ? void 0 : P.not_secure) === !1
			}

			function L(m) {
				const P = {};
				for (const [ge, Pe] of Object.entries(m)) {
					if (Pe && typeof Pe == "string") {
						Object.assign(P, {
							[ge]: Pe.trim()
						});
						continue
					}
					Object.assign(P, {
						[ge]: Pe
					})
				}
				return P
			}

			function X(m) {
				return p()(m).add(40, "days")
			}

			function _e(m) {
				const P = m.paymentExpiresAt || m.payment_expires_at,
					ge = X(P);
				return p()().isBetween(P, ge)
			}

			function Re(m) {
				var P;
				return !Array.isArray(m.registryStatuses) && !(0, e.isString)(m.registryStatuses) ? !1 : (P = m.registryStatuses) === null || P === void 0 ? void 0 : P.includes(o.rj.REDEMPTION_PERIOD)
			}

			function ke(m) {
				return [".us"].includes(m)
			}

			function Ue(m) {
				return [".us"].includes(m)
			}

			function Be(m) {
				switch (m) {
					case ".us":
						return Ze();
					default:
						return []
				}
			}

			function Me(m) {
				switch (m) {
					case ".us":
						return Ae;
					default:
						return {}
				}
			}
			const Ae = {
				[o.A9.P3]: [o.Fi.C11]
			};

			function Ze() {
				return [{
					name: o.IP.application_purpose,
					label: o.rb.application_purpose,
					options: Object.entries(o.A9).map(([m, P]) => ({
						value: m,
						label: P
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: o.IP.nexus_category,
					label: o.rb.nexus_category,
					options: Object.entries(o.Fi).map(([m, P]) => ({
						value: m,
						label: P
					}))
				}]
			}

			function mt(m, P, ge) {
				return P[P.length - 1][ge] === m[ge]
			}

			function Ge(m) {
				return Boolean(Object.keys(m).length === 0)
			}

			function at(m) {
				return p()().add(m, "year").format(R)
			}

			function st({
				accountName: m
			}) {
				var P;
				const ge = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((P = m.toLowerCase().match(ge)) === null || P === void 0 ? void 0 : P[0]) || ""
			}

			function j(m) {
				return !!m.match(i.default.email)
			}

			function se(m) {
				return m === "Registration banned zone error"
			}

			function Ee(m) {
				return m == null ? void 0 : m.startsWith("Quote error")
			}

			function Te(m) {
				return m === (0, u.ZP)(t.keys.registration_checkout_trademark_notice_error_message)
			}

			function Ie(m) {
				return m === "DNS conflict"
			}

			function Fe(m) {
				return m === f.W7.PENDING_UPDATE
			}

			function et(m) {
				return m ? Object.values(f.wR).filter(P => P !== f.wR.OFFBOARDED).includes(m) : !1
			}

			function Se(m) {
				return m ? [f.wR.LOCKED, f.wR.ONBOARDED, f.wR.ONBOARDING_INITIATED, f.wR.PENDING_REGISTRY_LOCK, f.wR.PENDING_REGISTRY_UNLOCK, f.wR.PENDING_UNLOCK_APPROVAL].includes(m) : !1
			}

			function Ct(m) {
				return m ? f.wR.UNLOCKED === m : !1
			}

			function T(m) {
				return m ? f.wR.LOCKED === m : !1
			}

			function I(m) {
				return m ? f.wR.PENDING_REGISTRY_LOCK === m : !1
			}

			function Z(m) {
				return m ? [f.wR.PENDING_REGISTRY_UNLOCK, f.wR.PENDING_UNLOCK_APPROVAL].includes(m) : !1
			}

			function de(m) {
				var P;
				return !1
			}

			function he(m) {
				var P;
				return !1
			}

			function tt(m) {
				var P;
				return !1
			}

			function ct(m) {
				var P;
				return !1
			}

			function bt(m) {
				var P;
				return !1
			}

			function gt(m) {
				return Object.keys(f.wR).find(P => f.wR[P].toLowerCase() === m.toLowerCase())
			}

			function He(m) {
				var P;
				const ge = (P = gt(m)) === null || P === void 0 ? void 0 : P.toLowerCase();
				return ge ? t.keys.protection_status[ge] : t.keys.protection_status.unknown
			}

			function lt(m) {
				return ["com", "net"].includes(m)
			}

			function ft(m) {
				const P = (0, l.pu)(m);
				return lt(P) ? f.wR.PENDING_REGISTRY_LOCK : f.wR.LOCKED
			}

			function ut(m) {
				return (0, l.pu)(m) === "co" ? 5 : 10
			}

			function Tt(m, P) {
				return P ? 1 : (0, l.pu)(m) === "co" ? 5 : (0, l.pu)(m) === "org" ? 1 : 10
			}

			function ot(m) {
				return (0, l.pu)(m) === "uk"
			}

			function At(m) {
				return (0, l.pu)(m) === "us"
			}

			function yt(m) {
				return p()(m).isValid()
			}

			function Wt(m) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(m)
			}

			function Pt(m) {
				return !!(m == null ? void 0 : m.id)
			}

			function zt(m) {
				return m ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(m) : !1
			}

			function Ht(m) {
				return m ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(m) : !1
			}

			function Zt(m) {
				var P;
				return (m == null ? void 0 : m.lastKnownStatus) ? (P = m.lastKnownStatus) === null || P === void 0 ? void 0 : P.includes("deletionIrredeemable") : !1
			}

			function Kt(m) {
				switch (m) {
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
		},
		"../react/pages/home/domain-registration/config.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Bc: function() {
					return t
				},
				Hv: function() {
					return z
				},
				JM: function() {
					return p
				},
				Py: function() {
					return u
				},
				WK: function() {
					return c
				},
				dq: function() {
					return d
				},
				g5: function() {
					return g
				},
				gM: function() {
					return i
				},
				gf: function() {
					return v
				},
				jk: function() {
					return ee
				},
				no: function() {
					return o
				},
				uY: function() {
					return l
				},
				ui: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = n("../flags.js"),
				s = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const p = "Unknown",
				f = "unknown",
				i = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				u = Object.keys(i),
				l = !0,
				v = (0, r.J8)("registrar_mock_data") || !1,
				t = (0, r.J8)("registrar_mock_transfer_out") || !1,
				o = (0, r.J8)("registrar_show_unlock_ui") || !1,
				c = 250,
				g = "cf_registrar.enabled",
				a = "registrar.transfer-onboarding",
				C = document.location.search.includes("domain_transfer_onboarding"),
				d = w => !!(C || (0, s.z1)(a)(w) || (0, r.J8)("domain_transfer_onboarding")),
				E = null,
				N = "@abcABC1234567890123456",
				R = (0, e.BC)`/${"accountId"}`,
				y = (0, e.BC)`${R}/add-site`,
				S = (0, e.BC)`${R}/domains`,
				h = (0, e.BC)`${S}/${"zoneName"}`,
				O = (0, e.BC)`${h}/configuration`,
				G = (0, e.BC)`${h}/contacts`,
				H = (0, e.BC)`${S}/pricing`,
				te = (0, e.BC)`${S}/protection`,
				re = (0, e.BC)`${S}/register`,
				J = (0, e.BC)`${re}/checkout`,
				Q = (0, e.BC)`${re}/success`,
				k = (0, e.BC)`${S}/tlds`,
				$ = (0, e.BC)`${S}/transfer`,
				U = (0, e.BC)`${S}/transfer/${"zoneName"}`,
				le = (0, e.BC)`/registrar/accounts/verify_email`,
				pe = (0, e.BC)`/registrar/domains/verify_email`,
				ee = {
					addSite: y,
					domains: S,
					domainsDomain: h,
					domainsDomainConfiguration: O,
					domainsDomainContacts: G,
					domainsPricing: H,
					domainsProtection: te,
					domainsRegister: re,
					domainsRegisterCheckout: J,
					domainsRegisterSuccess: Q,
					domainsTlds: k,
					domainsTransfer: $,
					domainsTransferZone: U,
					registrarAccountsVerifyEmail: le,
					registrarDomainsVerifyEmail: pe
				},
				z = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				J: function() {
					return o
				},
				U: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				r = n.n(e),
				s = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow?5628"),
				p = n.n(s),
				f = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function i(c) {
				for (var g = 1; g < arguments.length; g++) {
					var a = arguments[g] != null ? Object(arguments[g]) : {},
						C = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(a).filter(function(d) {
						return Object.getOwnPropertyDescriptor(a, d).enumerable
					})), C.forEach(function(d) {
						u(c, d, a[d])
					})
				}
				return c
			}

			function u(c, g, a) {
				return g = l(g), g in c ? Object.defineProperty(c, g, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[g] = a, c
			}

			function l(c) {
				var g = v(c, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function v(c, g) {
				if (typeof c != "object" || c === null) return c;
				var a = c[Symbol.toPrimitive];
				if (a !== void 0) {
					var C = a.call(c, g || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(c)
			}
			let t = function(c) {
				return c.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", c.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", c.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", c.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", c.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", c.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", c.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", c.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", c.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", c.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", c.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", c.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", c.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", c.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", c.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", c.RENEW_DOMAIN_COMPLETED = "domain renewal completed", c.RESTORE_DOMAIN_INIT = "click to open domain restore modal", c.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", c.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", c.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", c.RESTORE_DOMAIN_FAILURE = "domain restore failed", c.RESTORE_DOMAIN_COMPLETED = "domain restore completed", c.DOMAIN_DELETE_INIT = "click to begin domain delete", c.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", c.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", c.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", c.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", c.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", c.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", c.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", c.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", c.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", c.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", c
			}({});

			function o(c, g, a) {
				if (!(g == null ? void 0 : g.name)) return null;
				p().sendEvent(c, i({
					domain: {
						name: g.name,
						premium: (0, f.Uy)(g == null ? void 0 : g.premiumType),
						paymentExpiresAt: r()(g == null ? void 0 : g.paymentExpiresAt).format()
					},
					category: "registrar"
				}, a))
			}
		},
		"../react/pages/home/domain-registration/types.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				$F: function() {
					return d
				},
				A9: function() {
					return v
				},
				BJ: function() {
					return f
				},
				Fi: function() {
					return l
				},
				IP: function() {
					return t
				},
				Kh: function() {
					return E
				},
				M5: function() {
					return g
				},
				Vs: function() {
					return R
				},
				Yh: function() {
					return p
				},
				_n: function() {
					return s
				},
				l2: function() {
					return c
				},
				lW: function() {
					return e
				},
				ok: function() {
					return a
				},
				pT: function() {
					return N
				},
				rb: function() {
					return o
				},
				rj: function() {
					return C
				},
				xd: function() {
					return r
				}
			});
			let e = function(y) {
					return y.OK = "ok", y.NEEDED = "needed", y.PENDING = "pending", y.TRYING = "trying", y.UNKNOWN = "unknown", y.REJECTED = "rejected", y
				}({}),
				r = function(y) {
					return y.Full = "full", y.Partial = "partial", y
				}({}),
				s = function(y) {
					return y.Pending = "pending", y.Error = "error", y.InProgress = "in-progress", y.AuthCodeAcquired = "auth-code-acquired", y
				}({}),
				p = function(y) {
					return y.Success = "success", y.Pending = "pending", y.Error = "error", y.AuthCodeFailed = "auth-code-failed", y.AuthCodeRequired = "auth-code-required", y
				}({}),
				f = function(y) {
					return y.Valid = "valid", y.Invalid = "fail", y.Error = "error", y.Pending = "pending", y.Loading = "loading", y
				}({}),
				i = function(y) {
					return y.C11 = "C11", y.C21 = "C21", y.C31 = "C31", y.C32 = "C32", y
				}({}),
				u = function(y) {
					return y.P1 = "P1", y.P2 = "P2", y.P3 = "P3", y.P4 = "P4", y.P5 = "P5", y
				}({}),
				l = function(y) {
					return y.C11 = "I am a US citizen, permanent resident of the US, or my primary domicile is in the US", y.C21 = "I represent a US corporation", y.C31 = "I represent a non-US corporation that has an office in the US or regularly conducts business in the US", y
				}({}),
				v = function(y) {
					return y.P1 = "Business for profit", y.P2 = "Business not for profit", y.P3 = "Personal", y.P4 = "Education", y.P5 = "Civic or Government", y
				}({}),
				t = function(y) {
					return y.nexus_category = "nexus_category", y.application_purpose = "application_purpose", y
				}({}),
				o = function(y) {
					return y.nexus_category = "Which of the below best describes you?", y.application_purpose = "What this domain will be used for?", y
				}({}),
				c = function(y) {
					return y.Registrant = "registrant", y.Administrator = "administrator", y.Technical = "technical", y.Billing = "billing", y
				}({}),
				g = function(y) {
					return y.Supported = "supported", y.Unsupported = "unsupported", y.Unknown = "unknown", y.InProgressOrOnCF = "in progress or on CF", y
				}({}),
				a = function(y) {
					return y.CorLock = "Pending change of registrant", y.CorLockedUntil = "Transfer Locked until %LOCKED_UNTIL_DATE%. Reason: Recent change to the registrant contact.", y.NotOnCF = "Domain not on Cloudflare", y.RecentCreation = "Domain created within 60 days", y.RecentTransfer = "Domain transferred within 60 days", y.RecentTransferUK = "UK domain transferred within 24 hours", y
				}({}),
				C = function(y) {
					return y.OK = "ok", y.PENDING_TRANSFER = "pendingtransfer", y.CLIENT_TRANSFER_PROHIBITED = "clienttransferprohibited", y.SERVER_TRANSFER_PROHIBITED = "servertransferprohibited", y.CLIENT_RENEW_PROHIBITED = "clientrenewprohibited", y.SERVER_RENEW_PROHIBITED = "serverrenewprohibited", y.CLIENT_UPDATE_PROHIBITED = "clientupdateprohibited", y.CLIENT_HOLD = "clienthold", y.SERVER_HOLD = "serverhold", y.PENDING_DELETE = "pendingdelete", y.ADD_PERIOD = "addperiod", y.AUTO_RENEW_PERIOD = "autorenewperiod", y.RENEW_PERIOD = "renewperiod", y.TRANSFER_PERIOD = "transferperiod", y.REDEMPTION_PERIOD = "redemptionperiod", y.PENDING_RESTORE = "pendingrestore", y
				}({}),
				d = function(y) {
					return y.SUCCESS = "success", y.PENDING = "pending", y.ERROR = "error", y
				}({}),
				E = function(y) {
					return y.RESTORATION_PENDING = "restorationPending", y.RESTORATION_AUTH_FAILURE = "restorationAuthFailure", y.RESTORATION_FAILURE = "restorationFailure", y.RESTORATION_SUCCESS = "restorationSuccess", y.RESTORATION_RENEW_PENDING = "restorationRenewPending", y.RESTORATION_RENEW_FAILURE = "restorationRenewFailure", y.RESTORATION_RENEW_SETTLE_FAILURE = "restorationRenewSettleFailure", y.RESTORATION_RENEW_SUCCESS = "restorationRenewSuccess", y.RESTORATION_PENDING_ZONE_CREATE = "restorationPendingZoneCreate", y.RESTORATION_PENDING_ZONE_ACTIVATE = "restorationPendingZoneActivate", y.RESTORATION_FAILED_ZONE_CREATE = "restorationFailedZoneCreate", y.RESTORATION_FAILED_ZONE_ACTIVATE = "restorationFailedZoneActivate", y.RESTORATION_ZONE_CREATE_SUCCESS = "restorationZoneCreateSuccess", y.RESTORATION_ZONE_ACTIVATE_SUCCESS = "restorationZoneActivateSuccess", y.RESTORATION_SUCCESS_WITHOUT_REPORT = "restorationSuccessWithoutReport", y
				}({}),
				N = function(y) {
					return y.TransferInWaitingFOA = "DomainStatus:TransferInWaitingFoa", y.RegistrationPendingAuthorization = "DomainStatus:RegistrationPendingAuthorization", y.RegistrationPendingZoneCreate = "DomainStatus:RegistrationPendingZoneCreate", y.RegistrationPendingRegister = "DomainStatus:RegistrationPendingRegister", y.RegistrationPendingZoneActivate = "DomainStatus:RegistrationPendingZoneActivate", y.RegistrationPendingSettlement = "DomainStatus:RegistrationPendingSettlement", y.RegistrationFailedAuthorization = "DomainStatus:RegistrationFailedAuthorization", y.RegistrationFailedQuote = "DomainStatus:RegistrationFailedQuote", y.RegistrationFailedRegister = "DomainStatus:RegistrationFailedRegister", y.RegistrationFailedZoneCreate = "DomainStatus:RegistrationFailedZoneCreate", y.RegistrationFailedZoneActivate = "DomainStatus:RegistrationFailedZoneActivate", y.RegistrationFailedSettlement = "DomainStatus:RegistrationFailedSettlement", y.RegistrationActive = "DomainStatus:RegistrationActive", y.DomainRedemptionPeriod = "DomainStatus:RedemptionPeriod", y.Expired = "DomainStatus:Expired", y.ExpiredParked = "DomainStatus:ExpiredParked", y.PendingDelete = "DomainStatus:PendingDelete", y.DeletionInitiated = "DomainStatus:DeletionInitiated", y.DeletionIrredeemable = "DomainStatus:DeletionIrredeemable", y.DomainTerminated = "DomainStatus:DomainTerminated", y.DomainLocked = "DomainStatus:DomainLocked", y.PendingTransfer = "DomainStatus:PendingTransfer", y.PendingRenewal = "DomainStatus:PendingRenewal", y.Unknown = "Unknown", y
				}({}),
				R = function(y) {
					return y.NonStandard_NonStandard = "nonstandard_nonstandard", y.NonStandard_Standard = "nonstandard_standard", y.Standard_Standard = "standard_standard", y.Standard_NonStandard = "standard_nonstandard", y.Not_Premium = "not_premium", y
				}({})
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				F: function() {
					return e
				}
			});
			let e = function(r) {
				return r.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", r.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", r.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", r.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", r.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", r.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", r.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", r.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", r.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", r
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
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
					return l
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow?5628"),
				r = n.n(e);

			function s(o) {
				for (var c = 1; c < arguments.length; c++) {
					var g = arguments[c] != null ? Object(arguments[c]) : {},
						a = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(g).filter(function(C) {
						return Object.getOwnPropertyDescriptor(g, C).enumerable
					})), a.forEach(function(C) {
						p(o, C, g[C])
					})
				}
				return o
			}

			function p(o, c, g) {
				return c = f(c), c in o ? Object.defineProperty(o, c, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[c] = g, o
			}

			function f(o) {
				var c = i(o, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function i(o, c) {
				if (typeof o != "object" || o === null) return o;
				var g = o[Symbol.toPrimitive];
				if (g !== void 0) {
					var a = g.call(o, c || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(o)
			}
			let u = function(o) {
					return o.PURCHASE_WORKERS_PAID = "navigate to workers plan page", o.LIST_CONFIGS = "list hyperdrive configs", o.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", o.VIEW_CONFIG_DETAILS = "view hyperdrive config details", o.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", o.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", o.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", o.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", o.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", o.CLICK_QUICK_LINK = "click hyperdrive quick link", o
				}({}),
				l = function(o) {
					return o[o["connection string"] = 0] = "connection string", o[o.manual = 1] = "manual", o
				}({}),
				v = function(o) {
					return o[o.success = 0] = "success", o[o.failure = 1] = "failure", o
				}({});
			const t = (o, c = {}) => {
				r().sendEvent(o, s({}, c, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				_u: function() {
					return r
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
				r = "Magic network monitoring",
				s = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				lC: function() {
					return s
				},
				r8: function() {
					return e
				},
				wp: function() {
					return r
				}
			});
			const e = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				r = "Magic overview",
				s = "user journey"
		},
		"../react/pages/magic/packet-captures/constants.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				W_: function() {
					return r
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
				r = "Magic packet captures",
				s = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(V, _, n) {
			"use strict";
			n.d(_, {
				gb: function() {
					return t
				},
				iP: function() {
					return G
				},
				xL: function() {
					return N
				},
				rD: function() {
					return te
				},
				oT: function() {
					return a
				},
				i2: function() {
					return re
				},
				x1: function() {
					return i
				},
				lW: function() {
					return l
				},
				UA: function() {
					return h
				},
				K5: function() {
					return c
				},
				Ii: function() {
					return y
				},
				PJ: function() {
					return H
				},
				bK: function() {
					return d
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				s = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				f = n("../../../../node_modules/@cloudflare/elements/es/index.js");
			const i = () => r().createElement(u, null, r().createElement("svg", {
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
				u = (0, s.createComponent)(({
					theme: J
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
				l = () => r().createElement(v, null, r().createElement("svg", {
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
				v = (0, s.createComponent)(({
					theme: J
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
				t = () => r().createElement(o, null, r().createElement(f.Ei, {
					alt: "airplane",
					src: p,
					width: "85%"
				})),
				o = (0, s.createComponent)(({
					theme: J
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
				c = () => r().createElement(g, null, r().createElement("svg", {
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
				g = (0, s.createComponent)(({
					theme: J
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
				a = () => r().createElement(C, null, r().createElement("svg", {
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
				C = (0, s.createComponent)(({
					theme: J
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
				d = () => r().createElement(E, null, r().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				E = (0, s.createComponent)(({
					theme: J
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
				N = () => r().createElement(R, null, r().createElement("svg", {
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
				R = (0, s.createComponent)(({
					theme: J
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
				y = () => r().createElement(S, null, r().createElement("svg", {
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
				S = (0, s.createComponent)(({
					theme: J
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
				h = () => r().createElement(O, null, r().createElement("svg", {
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
				O = (0, s.createComponent)(({
					theme: J
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
				G = () => r().createElement("svg", {
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
				H = () => r().createElement("svg", {
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
				te = () => r().createElement("svg", {
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
				re = () => r().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				A2: function() {
					return u
				},
				He: function() {
					return f
				},
				N$: function() {
					return i
				},
				Qq: function() {
					return s
				},
				ST: function() {
					return p
				},
				wM: function() {
					return r
				}
			});
			var e = n("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const r = {
					PAGE: "apple-login"
				},
				s = "login-apple-jwt",
				p = "cf-test",
				f = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				i = l => [{
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
				u = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/pages/routes.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Hv: function() {
					return s
				},
				_j: function() {
					return r
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
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
				p = f => `${f.subdomain}.pages.dev`
		},
		"../react/pages/r2/routes.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Hv: function() {
					return s
				},
				Jg: function() {
					return i
				},
				_j: function() {
					return r
				},
				pZ: function() {
					return u
				},
				vF: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
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
				s = {
					canUnsubscribe: (0, e.BC)`/accounts/${"accountId"}/r2/canUnsubscribe`,
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
				p = t => {
					const o = "r2.cloudflarestorage.com";
					switch (t) {
						case "default":
							return o;
						case "eu":
							return `eu.${o}`
					}
				},
				f = (t, o) => {
					const c = p(o);
					return `https://${t}.${c}`
				},
				i = (t, o, c) => `${f(t,o)}/${c}`,
				u = () => "r2.dev",
				l = t => {
					const o = u();
					return `https://${t}.${o}`
				},
				v = (t, o) => `${l(t)}/${o}`
		},
		"../react/pages/security-center/tracking.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				R: function() {
					return e
				},
				v: function() {
					return r
				}
			});
			let e = function(s) {
				return s.LOAD_SCAN_INFO = "load url scan information", s.INITIATE_URL_SCAN = "initiate url scan", s
			}({});
			const r = {
				MANAGE_INSIGHT: "manage security insight",
				EXPAND_INSIGHT_ROW: "expand security issue row",
				CLICK_RESOLVE_BUTTON: "click resolve security issue button",
				FOLLOW_RESOLVE_URL: "follow security issue resolve url",
				CLICK_SCAN_NOW: "run security scan",
				CLICK_EXPORT_INSIGHTS: "click export insights"
			}
		},
		"../react/pages/spectrum/tracking.tsx": function(V, _, n) {
			"use strict";
			n.d(_, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.IP_ADDRESS = "create spectrum app using IP address", r.CNAME = "create spectrum app using cname record", r.LB = "create spectrum app using load balancer", r.UPDATE_IP_ADDRESS = "update spectrum app using IP address", r.UPDATE_CNAME = "update spectrum app using cname record", r.UPDATE_LB = "update spectrum app using load balancer", r.DISABLE = "disable spectrum app", r
			}({})
		},
		"../react/pages/traffic/argo/tracking.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				V: function() {
					return e
				}
			});
			let e = function(r) {
				return r.ARGO_ENABLEMENT = "change argo enablement", r.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", r.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", r
			}({})
		},
		"../react/pages/traffic/load-balancing/tracking.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Z: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_AND_DEPLOY = "create load balancer", r.ANALYTICS = "read analytics", r
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(V, _, n) {
			"use strict";
			n.d(_, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE = "create waiting room", r.UPDATE = "update waiting room", r.EVENTS = "view waiting rooms events", r.ANALYTICS = "view waiting room analytics", r.GENERATE_PREVIEW = "generate waiting room preview link", r
			}({})
		},
		"../react/pages/welcome/routes.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				d: function() {
					return r
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
				default: (0, e.BC)`/${"accountId"}/`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`
			}
		},
		"../react/pages/workers/entityTypes.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				D: function() {
					return e
				}
			});
			const e = {
				route: "workersRoute",
				routes: "workersRoutes"
			}
		},
		"../react/pages/zoneless-workers/constants.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				IS: function() {
					return u
				},
				L7: function() {
					return f
				},
				Oj: function() {
					return c
				},
				QV: function() {
					return g
				},
				X$: function() {
					return E
				},
				X6: function() {
					return v
				},
				fE: function() {
					return l
				},
				im: function() {
					return C
				},
				rL: function() {
					return t
				},
				wW: function() {
					return i
				}
			});

			function e(R) {
				for (var y = 1; y < arguments.length; y++) {
					var S = arguments[y] != null ? Object(arguments[y]) : {},
						h = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(S).filter(function(O) {
						return Object.getOwnPropertyDescriptor(S, O).enumerable
					})), h.forEach(function(O) {
						r(R, O, S[O])
					})
				}
				return R
			}

			function r(R, y, S) {
				return y = s(y), y in R ? Object.defineProperty(R, y, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[y] = S, R
			}

			function s(R) {
				var y = p(R, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function p(R, y) {
				if (typeof R != "object" || R === null) return R;
				var S = R[Symbol.toPrimitive];
				if (S !== void 0) {
					var h = S.call(R, y || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(R)
			}
			const f = {
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
						bindings: {
							index: "https://developers.cloudflare.com/workers/runtime-apis/bindings",
							ai: "https://developers.cloudflare.com/workers-ai",
							analyticsEngine: "https://developers.cloudflare.com/analytics/analytics-engine",
							browserRendering: "https://developers.cloudflare.com/browser-rendering",
							d1: "https://developers.cloudflare.com/d1",
							dispatchNamespace: "https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/get-started/configuration",
							durableObjects: "https://developers.cloudflare.com/durable-objects",
							hyperdrive: "https://developers.cloudflare.com/hyperdrive",
							kv: "https://developers.cloudflare.com/kv/api",
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
				u = "40rem",
				l = {
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
				c = {
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
				g = {
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
					clickedDiscordLink: "clicked sidebar Discord link",
					clickedCommunityLink: "clicked sidebar Community Forum link",
					clickDetailTab: "click worker detail tab",
					clickedBundledUsageModel: "Workers:Clicked Bundled Usage Model",
					clickedUnboundUsageModel: "Workers:Clicked Unbound Usage Model",
					clickedGreenComputeSetting: "Workers:Clicked Green Compute Setting",
					clickedGlobalComputeSetting: "Workers:Clicked Global Compute Setting"
				},
				a = "workers.dev",
				C = "YYYY-MM-DD HH:mm:SS ZZ",
				d = "active",
				E = ["bundled", "unbound", "standard"],
				N = null
		},
		"../react/pages/zoneless-workers/routes.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Hv: function() {
					return u
				},
				L: function() {
					return s
				},
				Q9: function() {
					return p
				},
				_j: function() {
					return f
				},
				ky: function() {
					return r
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = l => `${l}.workers.dev`,
				s = (l, v, t) => `${t?`${t}.`:""}${l}.${r(v)}`,
				p = (l, v, t) => `https://${s(l,v,t)}`,
				f = {
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
					serviceDetailsDeployments: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/deployments`,
					serviceDetailsIntegrationsFlow: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/${"integrationId"}/integrations-setup`,
					serviceDetailsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/triggers`,
					serviceDetailsIntegrations: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/integrations`,
					serviceDetailsSettings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings`,
					serviceDetailsSettingsGeneral: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/general`,
					serviceDetailsSettingsBindings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/bindings`,
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
					dns: (0, e.BC)`/${"accountId"}/${"zoneId"}/dns`,
					ssl: (0, e.BC)`/${"accountId"}/${"zoneId"}/ssl-tls/edge-certificates`,
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
				u = {
					accountMtlsCertificates: (0, e.BC)`/accounts/${"accountId"}/mtls_certificates`,
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/workers/account-settings`,
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
			(function(V, _) {
				_()
			})(this, function() {
				"use strict";

				function V() {
					var n = !0,
						e = !1,
						r = null,
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

					function p(d) {
						return !!(d && d !== document && d.nodeName !== "HTML" && d.nodeName !== "BODY" && "classList" in d && "contains" in d.classList)
					}

					function f(d) {
						var E = d.type,
							N = d.tagName;
						return !!(N == "INPUT" && s[E] && !d.readOnly || N == "TEXTAREA" && !d.readOnly || d.isContentEditable)
					}

					function i(d) {
						d.getAttribute("is-focus-visible") !== "" && d.setAttribute("is-focus-visible", "")
					}

					function u(d) {
						d.getAttribute("is-focus-visible") === "" && d.removeAttribute("is-focus-visible")
					}

					function l(d) {
						p(document.activeElement) && i(document.activeElement), n = !0
					}

					function v(d) {
						n = !1
					}

					function t(d) {
						!p(d.target) || (n || f(d.target)) && i(d.target)
					}

					function o(d) {
						!p(d.target) || d.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), u(d.target))
					}

					function c(d) {
						document.visibilityState == "hidden" && (e && (n = !0), g())
					}

					function g() {
						document.addEventListener("mousemove", C), document.addEventListener("mousedown", C), document.addEventListener("mouseup", C), document.addEventListener("pointermove", C), document.addEventListener("pointerdown", C), document.addEventListener("pointerup", C), document.addEventListener("touchmove", C), document.addEventListener("touchstart", C), document.addEventListener("touchend", C)
					}

					function a() {
						document.removeEventListener("mousemove", C), document.removeEventListener("mousedown", C), document.removeEventListener("mouseup", C), document.removeEventListener("pointermove", C), document.removeEventListener("pointerdown", C), document.removeEventListener("pointerup", C), document.removeEventListener("touchmove", C), document.removeEventListener("touchstart", C), document.removeEventListener("touchend", C)
					}

					function C(d) {
						d.target.nodeName.toLowerCase() !== "html" && (n = !1, a())
					}
					document.addEventListener("keydown", l, !0), document.addEventListener("mousedown", v, !0), document.addEventListener("pointerdown", v, !0), document.addEventListener("touchstart", v, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", o, !0), document.addEventListener("visibilitychange", c, !0), g(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function _(n) {
					var e;

					function r() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}
				typeof document != "undefined" && _(V)
			})
		},
		"../react/utils/api.ts": function(V, _, n) {
			"use strict";
			n.r(_), n.d(_, {
				attachAtokHeader: function() {
					return E
				},
				attachErrorHandler: function() {
					return y
				},
				authyAuthConfirmNumber: function() {
					return le
				},
				authyAuthPutSave: function() {
					return pe
				},
				basePath: function() {
					return C
				},
				fetchCertificateApiKey: function() {
					return J
				},
				fetchUserServiceKey: function() {
					return te
				},
				performLogout: function() {
					return H
				},
				prependApiRoute: function() {
					return N
				},
				sendCookies: function() {
					return R
				},
				twoFacDisableDelete: function() {
					return U
				},
				twoFacGoogleAuthEnablePost: function() {
					return k
				},
				twoFacGoogleAuthQRCodeGet: function() {
					return $
				},
				updateCertificateApiKey: function() {
					return Q
				},
				updateUserServiceKey: function() {
					return re
				},
				validateOptions: function() {
					return d
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = n.n(e),
				s = n("../react/app/providers/storeContainer.js"),
				p = n("../react/common/actions/notificationsActions.ts"),
				f = n("../react/utils/translator.tsx"),
				i = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				l = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow?5628"),
				v = n.n(l),
				t = n("../../../../node_modules/@sentry/core/esm/exports.js");

			function o(ee) {
				for (var z = 1; z < arguments.length; z++) {
					var w = arguments[z] != null ? Object(arguments[z]) : {},
						K = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && K.push.apply(K, Object.getOwnPropertySymbols(w).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(w, Y).enumerable
					})), K.forEach(function(Y) {
						c(ee, Y, w[Y])
					})
				}
				return ee
			}

			function c(ee, z, w) {
				return z = g(z), z in ee ? Object.defineProperty(ee, z, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ee[z] = w, ee
			}

			function g(ee) {
				var z = a(ee, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function a(ee, z) {
				if (typeof ee != "object" || ee === null) return ee;
				var w = ee[Symbol.toPrimitive];
				if (w !== void 0) {
					var K = w.call(ee, z || "default");
					if (typeof K != "object") return K;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(ee)
			}
			const C = "/api/v4",
				d = ee => {
					ee.url.charAt(0) !== "/" && (ee.url = `/${ee.url}`)
				},
				E = ee => {
					n.g.bootstrap && n.g.bootstrap.atok && (ee.headers = o({}, ee.headers, {
						"X-ATOK": n.g.bootstrap.atok
					}))
				},
				N = ee => {
					ee.url = C + ee.url
				},
				R = ee => {
					ee.credentials = "same-origin"
				},
				y = ee => {
					const z = ee.callback;
					ee.callback = (w, K) => {
						w && !ee.hideErrorAlert && S(w, ee), z && z(w, K)
					}
				},
				S = (ee, z) => {
					const w = ee.body && ee.body.errors;
					(w ? O(z, w) : G(z, ee)).forEach(Y => {
						(0, s.bh)().dispatch(p.IH("error", typeof Y == "string" ? Y : Y.message)), v().sendEvent("error notification shown", {
							errorCode: typeof Y == "string" ? void 0 : Y.code
						}), {
							REDUX_LOGGER: void 0
						}.TESTING && n.g.logAppError(typeof Y == "string" ? Y : Y.message)
					})
				};

			function h(ee, z) {
				return !!(z.code === 1001 && ee.url && ee.url.match(/subscription/gi) || z.code === 10042 && ee.url && ee.url.match(/r2/gi))
			}
			const O = (ee, z) => z.filter(w => !h(ee, w)).map(({
					message: w,
					code: K,
					error_chain: Y
				}) => {
					switch (K) {
						case 9300:
						case 9301:
						case 9303:
							H();
						default:
							break
					}
					const ue = w.split(" ").length > 1,
						F = w.split(".").length > 1,
						ne = !ue && F;
					let ae = w;
					if (ne) try {
						ae = (0, f.ZP)(w)
					} catch {}
					if (w.startsWith("billing.")) return {
						message: `Error while processing payment: ${ae}.`,
						code: K
					};
					const x = Array.isArray(Y) ? Y.map(A => A.message).join(". ") : "";
					return {
						message: `${ae}${typeof K!="undefined"?` (Code: ${K})`:""} ${x}`,
						code: K
					}
				}),
				G = (ee, z) => [`API Request Failed: ${ee.method} ${ee.url} (${z.status})`];
			e.beforeSend(d), e.beforeSend(E), e.beforeSend(N), e.beforeSend(R), e.beforeSend(y);
			const H = ee => e.del("/user/sessions/current").then(z => {
				if (i.E.remove(u.Qq), ee) window.location.href = ee;
				else {
					var w, K;
					const Y = (w = (K = z.body.result) === null || K === void 0 ? void 0 : K.redirect_uri) !== null && w !== void 0 ? w : "/login";
					window.location.href = Y
				}
			}).catch(z => {
				console.error("Failed to logout", z), t.Tb(z)
			});

			function te(ee) {
				return e.get("/user/service_keys/" + ee)
			}

			function re(ee, z) {
				return e.put("/user/service_keys/" + ee, {
					body: z
				})
			}

			function J(ee) {
				return e.post("/user/service_keys/certificateapi", {
					body: ee
				})
			}

			function Q(ee) {
				return e.put("/user/service_keys/certificateapi", {
					body: ee
				})
			}
			const k = function(ee, z) {
					var w = {
						google_auth_code: ee
					};
					return e.post("/user/two_factor_authentication/google_authenticator/enable", {
						body: w
					}, z)
				},
				$ = function(ee) {
					return e.get("/user/two_factor_authentication/google_authenticator/qr_code", void 0, ee)
				},
				U = function(ee, z) {
					var w = {
						auth_token: ee
					};
					return e.del("/user/two_factor_authentication", {
						body: w
					}, z)
				},
				le = function(ee, z) {
					return e.post("/user/two_factor_authentication", {
						body: ee
					}, z)
				},
				pe = function(ee, z) {
					return e.put("/user/two_factor_authentication", {
						body: ee
					}, z)
				}
		},
		"../react/utils/bootstrap.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				$8: function() {
					return r
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return p
				},
				gm: function() {
					return s
				}
			});
			const e = () => {
					var f, i, u;
					return (f = window) === null || f === void 0 || (i = f.bootstrap) === null || i === void 0 || (u = i.data) === null || u === void 0 ? void 0 : u.security_token
				},
				r = () => {
					var f, i, u;
					return !!((f = n.g.bootstrap) === null || f === void 0 || (i = f.data) === null || i === void 0 || (u = i.user) === null || u === void 0 ? void 0 : u.id)
				},
				s = () => {
					var f, i;
					return !!((f = n.g.bootstrap) === null || f === void 0 || (i = f.data) === null || i === void 0 ? void 0 : i.is_kendo)
				},
				p = () => {
					var f, i, u, l;
					return (f = window) === null || f === void 0 || (i = f.bootstrap) === null || i === void 0 || (u = i.data) === null || u === void 0 || (l = u.user) === null || l === void 0 ? void 0 : l.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				O5: function() {
					return p
				},
				Xm: function() {
					return s
				},
				kT: function() {
					return u
				},
				wV: function() {
					return l
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const r = () => {
					var t;
					return ((t = window) === null || t === void 0 ? void 0 : t.OnetrustActiveGroups) || ""
				},
				s = () => (r() || "").indexOf("C0002") !== -1,
				p = () => (r() || "").indexOf("C0003") !== -1,
				f = () => (r() || "").indexOf("C0004") !== -1,
				i = () => (r() || "").indexOf("C0005") !== -1,
				u = t => {
					const o = ".cloudflare.com";
					document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${o}`
				},
				l = () => {
					var t;
					const o = (t = window.OneTrust) === null || t === void 0 ? void 0 : t.getGeolocationData();
					return (o == null ? void 0 : o.country) || ""
				},
				v = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				AI: function() {
					return E
				},
				S8: function() {
					return d
				},
				ZW: function() {
					return i
				},
				ay: function() {
					return N
				},
				fh: function() {
					return R
				},
				ly: function() {
					return l
				},
				th: function() {
					return f
				},
				ti: function() {
					return v
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				r = n.n(e),
				s = n("../../../common/intl/intl-types/src/index.ts"),
				p = n("../../../common/util/types/src/utils/index.ts");
			const f = "cf-sync-locale-with-cps",
				i = s.Q.en_US,
				u = "en_US",
				l = "cf-locale",
				v = O => (0, p.Yd)(s.Q).find(G => s.Q[G] === O) || u,
				t = [],
				o = [],
				c = [s.Q.de_DE, s.Q.en_US, s.Q.es_ES, s.Q.fr_FR, s.Q.it_IT, s.Q.pt_BR, s.Q.ko_KR, s.Q.ja_JP, s.Q.zh_CN, s.Q.zh_TW],
				g = [s.Q.de_DE, s.Q.en_US, s.Q.es_ES, s.Q.es_CL, s.Q.es_EC, s.Q.es_MX, s.Q.es_PE, s.Q.fr_FR, s.Q.it_IT, s.Q.ja_JP, s.Q.ko_KR, s.Q.pt_BR, s.Q.zh_CN, s.Q.zh_TW],
				a = {
					test: [...c, ...o, ...t],
					development: [...c, ...o, ...t],
					staging: [...c, ...o, ...t],
					production: [...c, ...o]
				},
				C = {
					test: [...g, ...o, ...t],
					development: [...g, ...o, ...t],
					staging: [...g, ...o, ...t],
					production: [...g, ...o]
				},
				d = (O, G) => {
					const H = s.Q[G];
					return O ? a.production.includes(H) : C.production.includes(H)
				},
				E = O => Object.keys(s.Q).filter(G => d(O, G)),
				N = O => {
					const G = s.Q[O];
					return o.includes(G)
				},
				R = (O, G) => O ? y[G] : S[G],
				y = {
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
				S = {
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
				h = r().locale();
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
			}), r().locale(h)
		},
		"../react/utils/translator.tsx": function(V, _, n) {
			"use strict";
			n.d(_, {
				QT: function() {
					return g
				},
				Vb: function() {
					return u
				},
				Yi: function() {
					return v
				},
				ZP: function() {
					return i
				},
				_m: function() {
					return t
				},
				cC: function() {
					return o
				},
				oc: function() {
					return c
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = n("../../../common/intl/intl-core/src/Translator.ts"),
				s = n("../../../common/intl/intl-react/src/index.ts");
			const p = n("../flags.js").J8,
				f = new r.Z({
					pseudoLoc: p("is_pseudo_loc")
				});

			function i(a, ...C) {
				return f.t(a, ...C)
			}
			const u = f;

			function l(a, ...C) {
				return markdown(i(a, C))
			}

			function v(a) {
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

			function t(a, C) {
				return a in C ? C[a] : void 0
			}
			const o = s.cC,
				c = s.oc,
				g = s.QT
		},
		"../react/utils/url.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Ct: function() {
					return R
				},
				Fl: function() {
					return K
				},
				KT: function() {
					return ue
				},
				NF: function() {
					return a
				},
				Nw: function() {
					return E
				},
				Pd: function() {
					return d
				},
				Uh: function() {
					return ee
				},
				Y_: function() {
					return g
				},
				e1: function() {
					return N
				},
				el: function() {
					return re
				},
				hW: function() {
					return Q
				},
				pu: function() {
					return Y
				},
				qR: function() {
					return te
				},
				td: function() {
					return C
				},
				uW: function() {
					return $
				}
			});
			var e = n("../../../../node_modules/query-string/query-string.js"),
				r = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				p = n("../react/pages/r2/routes.ts"),
				f = n("../react/pages/zoneless-workers/routes.ts"),
				i = n("../react/pages/pages/routes.ts");

			function u(F) {
				for (var ne = 1; ne < arguments.length; ne++) {
					var ae = arguments[ne] != null ? Object(arguments[ne]) : {},
						x = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(ae).filter(function(A) {
						return Object.getOwnPropertyDescriptor(ae, A).enumerable
					})), x.forEach(function(A) {
						l(F, A, ae[A])
					})
				}
				return F
			}

			function l(F, ne, ae) {
				return ne = v(ne), ne in F ? Object.defineProperty(F, ne, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[ne] = ae, F
			}

			function v(F) {
				var ne = t(F, "string");
				return typeof ne == "symbol" ? ne : String(ne)
			}

			function t(F, ne) {
				if (typeof F != "object" || F === null) return F;
				var ae = F[Symbol.toPrimitive];
				if (ae !== void 0) {
					var x = ae.call(F, ne || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ne === "string" ? String : Number)(F)
			}
			const {
				endsWithSlash: o
			} = s.default, c = (F, ne) => {
				const ae = F.replace(o, "").split("/");
				return ae.slice(0, 2).concat([ne]).concat(ae.slice(3)).join("/")
			}, g = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), a = F => `/${F.replace(o,"").replace(/^\//,"")}`, C = F => E("add-site", F), d = F => E("billing", F), E = (F, ne) => ne ? `/${ne}${F?`/${F}`:""}` : `/?to=/:account/${F}`, N = () => {
				const F = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return F ? F[1] : null
			}, R = (F, ne) => r().stringify(u({}, r().parse(F), ne)), y = (F = "") => F.toString().replace(/([\/]{1,})$/, ""), S = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/forgot-email", "/login-help", "/profile", "/zones"], h = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, O = /^\/(\w{32,})(\/[^.]*)?/, G = F => S.includes(F), H = F => !G(F), te = F => !G(F) && O.test(F), re = F => !G(F) && h.test(F), J = F => h.exec(F), Q = F => {
				if (re(F)) return F.split("/").filter(ne => ne.length > 0)[1]
			}, k = F => O.exec(F), $ = F => {
				if (te(F)) {
					const ne = k(F);
					if (ne) return ne[1]
				}
			}, U = F => te(F) && F.split("/")[2] === "register-domain", le = F => U(F) ? F.split("/") : null, pe = F => {
				if (re(F)) {
					const [, , , ne, ae, x, A, D] = F.split("/");
					return ne === "traffic" && ae === "load-balancing" && x === "pools" && A === "edit" && D
				}
			}, ee = F => {
				const ne = le(F);
				if (ne) return ne[3]
			}, z = (F, ne) => {
				var ae, x;
				return ((ae = F.pattern.match(/\:/g)) !== null && ae !== void 0 ? ae : []).length - ((x = ne.pattern.match(/\:/g)) !== null && x !== void 0 ? x : []).length
			}, w = [...Object.values(p._j), ...Object.values(f._j), ...Object.values(i._j)].sort(z);

			function K(F) {
				if (!H(F)) return F;
				for (const D of w)
					if (D.expression.test(F)) return D.pattern;
				const ne = le(F);
				if (ne) {
					const [, , D, , ...W] = ne;
					return `/:accountId/${D}/:domainName/${W.join("/")}`
				}
				if (pe(F)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const x = J(F);
				if (x) {
					const [, , , , D] = x;
					return `/:accountId/:zoneName${D||""}`
				}
				const A = k(F);
				if (A) {
					const [, , D] = A;
					return `/:accountId${D||""}`
				}
				return F
			}

			function Y(F) {
				if (!!F) try {
					const ae = F.split(".").pop();
					if (ae && ae.length > 0) return ae
				} catch {}
			}

			function ue(F, ne = document.location.href) {
				try {
					const ae = new URL(F),
						x = new URL(ne);
					if (ae.origin === x.origin) return `${ae.pathname}${ae.search}${ae.hash}`
				} catch {}
			}
		},
		"../react/utils/zaraz.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = n("../utils/zaraz.ts")
		},
		"../utils/getDashVersion.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				p: function() {
					return s
				},
				t: function() {
					return r
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const r = () => {
					var p, f;
					return (p = window) === null || p === void 0 || (f = p.build) === null || f === void 0 ? void 0 : f.dashVersion
				},
				s = () => {
					var p;
					return ((0, e.parse)((p = document) === null || p === void 0 ? void 0 : p.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Wi: function() {
					return qe
				},
				IM: function() {
					return Je
				},
				yV: function() {
					return Xe
				},
				Ug: function() {
					return rt
				},
				v_: function() {
					return Qe
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow?5628"),
				r = n.n(e),
				s = n("../react/utils/bootstrap.ts"),
				p = n("../react/app/providers/storeContainer.js"),
				f = n("../react/common/selectors/languagePreferenceSelector.ts"),
				i = n("../flags.js"),
				u = n("../../../../node_modules/cookie/index.js"),
				l = n("../react/utils/url.ts"),
				v = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../../../../node_modules/lodash-es/memoize.js"),
				c = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				g = n("../utils/getDashVersion.ts");

			function a(fe) {
				for (var ye = 1; ye < arguments.length; ye++) {
					var me = arguments[ye] != null ? Object(arguments[ye]) : {},
						be = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && be.push.apply(be, Object.getOwnPropertySymbols(me).filter(function(L) {
						return Object.getOwnPropertyDescriptor(me, L).enumerable
					})), be.forEach(function(L) {
						C(fe, L, me[L])
					})
				}
				return fe
			}

			function C(fe, ye, me) {
				return ye = d(ye), ye in fe ? Object.defineProperty(fe, ye, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : fe[ye] = me, fe
			}

			function d(fe) {
				var ye = E(fe, "string");
				return typeof ye == "symbol" ? ye : String(ye)
			}

			function E(fe, ye) {
				if (typeof fe != "object" || fe === null) return fe;
				var me = fe[Symbol.toPrimitive];
				if (me !== void 0) {
					var be = me.call(fe, ye || "default");
					if (typeof be != "object") return be;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ye === "string" ? String : Number)(fe)
			}
			const N = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				R = (0, o.Z)(fe => {
					try {
						return N.assertDecode((0, u.parse)(fe))
					} catch (ye) {
						return console.error(ye), {}
					}
				}),
				y = fe => (ye, me, be) => {
					try {
						const _e = window.location.pathname,
							Re = (0, p.bh)().getState(),
							ke = R(document.cookie),
							Ue = a({
								page: (0, l.Fl)(be.page || window.location.pathname),
								dashVersion: (0, g.t)()
							}, ke);
						if (ye === "identify") {
							var L, X;
							const Be = {
								gates: (0, c.T2)(Re) || {},
								country: (L = n.g) === null || L === void 0 || (X = L.bootstrap) === null || X === void 0 ? void 0 : X.ip_country
							};
							return fe(ye, me, a({}, Ue, Be, be))
						} else {
							const Be = {
								accountId: (0, l.uW)(_e),
								zoneName: (0, l.hW)(_e),
								domainName: (0, l.Uh)(_e)
							};
							if ((0, l.el)(_e)) {
								const Me = (0, v.nA)(Re);
								Be.zoneId = Me == null ? void 0 : Me.id
							}
							return fe(ye, me, a({}, Ue, Be, be))
						}
					} catch (_e) {
						return console.error(_e), fe(ye, me, be)
					}
				},
				S = fe => async (ye, me, be) => {
					try {
						return await fe(ye, me, be)
					} catch (L) {
						if (console.error(L), !Qe()) throw L;
						return {
							status: "rejected",
							reason: L
						}
					}
				};
			var h = n("../react/common/middleware/sparrow/errors.ts"),
				O = n("../react/pages/firewall/bots/tracking.ts"),
				G = n("../react/pages/caching/tracking.tsx"),
				H = n("../react/pages/magic/packet-captures/constants.ts"),
				te = n("../react/pages/firewall/page-shield/tracking.ts"),
				re = n("../react/pages/firewall/rulesets/tracking.tsx"),
				J = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Q = n("../react/pages/spectrum/tracking.tsx"),
				k = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				$ = n("../react/pages/security-center/tracking.ts"),
				U = n("../react/pages/firewall/api-shield/tracking.ts"),
				le = n("../react/pages/home/configurations/lists/tracking.ts"),
				pe = n("../react/pages/traffic/load-balancing/tracking.ts"),
				ee = n("../react/pages/home/alerts/tracking.ts"),
				z = n("../react/pages/dns/dns-records/tracking.ts"),
				w = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				K = n("../react/pages/traffic/argo/tracking.ts"),
				Y = n("../react/pages/magic/network-monitoring/constants.ts"),
				ue = n("../react/pages/firewall/security-analytics/logs/constants.ts"),
				F = n("../react/pages/magic/overview/tracking.ts"),
				ne = n("../react/pages/hyperdrive/tracking.ts"),
				ae = n("../react/pages/home/domain-registration/tracking.ts"),
				x = n("../react/pages/zoneless-workers/constants.ts");
			const D = ((fe, ye, ...me) => t.eg.union([t.eg.literal(fe), t.eg.literal(ye), ...me.map(be => t.eg.literal(be))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click cancel downgrade", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click deflect community TSF (3.0)", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on edit snippet", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "Explore demo button click", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Free Long Wait", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open configuration switcher sidemodal", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "Request trial button click", "resend verification email", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select file", "Select hostname success", "select language", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", x.QV.clickedDownloadAnalytics, x.QV.clickedPrintAnalytics, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", O.N3.INITIAL_FETCH_SCORES, O.N3.FETCH_CONFIGURATION, O.N3.INITIAL_FETCH_TIME_SERIES, O.N3.INITIAL_FETCH_ATTRIBUTES, O.N3.UPDATE_SETTINGS, O.N3.DELETE_RULE, O.N3.UPDATE_RULE, O.N3.FETCH_RULES, O.N3.CONFIGURE_BOT_MANAGEMENT, O.N3.WAF_RULES_REDIRECT, k.F.TOGGLE_TCP_PROTECTION, k.F.CREATE_SYN_PROTECTION_RULE, k.F.UPDATE_SYN_PROTECTION_RULE, k.F.CREATE_TCP_FLOW_PROTECTION_RULE, k.F.UPDATE_TCP_FLOW_PROTECTION_RULE, k.F.CREATE_SYN_PROTECTION_FILTER, k.F.UPDATE_SYN_PROTECTION_FILTER, k.F.CREATE_TCP_FLOW_PROTECTION_FILTER, k.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, te.F.MANAGE_PAGE_SHIELD_POLICY, te.F.CONFIGURE_PAGE_SHIELD, te.F.VIEW_DETECTED_CONNECTIONS, te.F.VIEW_DETECTED_SCRIPTS, te.F.VIEW_PAGE_SHIELD_POLICIES, te.F.VIEW_PAGE_SHIELD_SETTINGS, le.y.CREATE_LIST, le.y.DELETE_LIST, le.y.ADD_LIST_ITEM, le.y.DELETE_LIST_ITEM, ne.KO.PURCHASE_WORKERS_PAID, ne.KO.LIST_CONFIGS, ne.KO.CREATE_HYPERDRIVE_CONFIG, ne.KO.VIEW_CONFIG_DETAILS, ne.KO.UPDATE_CACHING_SETTINGS, ne.KO.DELETE_HYPERDRIVE_CONFIG, ne.KO.CLICK_HYPERDRIVE_DOCUMENTATION, ne.KO.CLICK_GET_STARTED_GUIDE, ne.KO.CLICK_CONNECTIVITY_GUIDES, ne.KO.CLICK_QUICK_LINK, Q.N.CNAME, Q.N.IP_ADDRESS, Q.N.LB, Q.N.UPDATE_CNAME, Q.N.UPDATE_IP_ADDRESS, Q.N.UPDATE_LB, Q.N.DISABLE, G.N.TIERED_CACHE, G.N.CACHE_PURGE, G.N.CACHE_ANALYTICS, ...(0, re.x4)(), J.N.CREATE, J.N.EVENTS, J.N.ANALYTICS, J.N.UPDATE, J.N.GENERATE_PREVIEW, $.R.INITIATE_URL_SCAN, $.R.LOAD_SCAN_INFO, $.v.EXPAND_INSIGHT_ROW, $.v.CLICK_RESOLVE_BUTTON, $.v.FOLLOW_RESOLVE_URL, $.v.MANAGE_INSIGHT, $.v.CLICK_SCAN_NOW, $.v.CLICK_EXPORT_INSIGHTS, U.Fj[U.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, U.Fj[U.kq.ENDPOINT_MANAGEMENT].detailedMetrics, U.Fj[U.kq.ENDPOINT_MANAGEMENT].createEndpoint, U.Fj[U.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, U.Fj[U.kq.ENDPOINT_MANAGEMENT].deployRouting, U.Fj[U.kq.ENDPOINT_MANAGEMENT].deleteRouting, U.Fj[U.kq.API_DISCOVERY].viewDiscoveredEndpoints, U.Fj[U.kq.API_DISCOVERY].saveDiscoveredEndpoint, U.Fj[U.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, U.Fj[U.kq.SCHEMA_VALIDATION].viewSchemasList, U.Fj[U.kq.SCHEMA_VALIDATION].uploadSchema, U.Fj[U.kq.SCHEMA_VALIDATION].viewSchemaAdoption, U.Fj[U.kq.SCHEMA_VALIDATION].downloadSchema, U.Fj[U.kq.SCHEMA_VALIDATION].deleteSchema, U.Fj[U.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, U.Fj[U.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, U.Fj[U.kq.SEQUENCE_ANALYTICS].viewSequencesPage, U.Fj[U.kq.JWT_VALIDATION].viewJWTRules, U.Fj[U.kq.JWT_VALIDATION].addJWTRule, U.Fj[U.kq.JWT_VALIDATION].editJWTRule, U.Fj[U.kq.JWT_VALIDATION].deleteJWTRule, U.Fj[U.kq.JWT_VALIDATION].reprioritizeJWTRule, U.Fj[U.kq.JWT_VALIDATION].viewJWTConfigs, U.Fj[U.kq.JWT_VALIDATION].addJWTConfig, U.Fj[U.kq.JWT_VALIDATION].editJWTConfig, U.Fj[U.kq.JWT_VALIDATION].deleteJWTConfig, U.Fj[U.kq.SETTINGS].redirectToFirewallRulesTemplate, U.Fj[U.kq.SETTINGS].redirectToPages, U.Fj[U.kq.SETTINGS].listSessionIdentifiers, U.Fj[U.kq.SETTINGS].listRequestsContainingSessionIdentifiers, U.Fj[U.kq.SETTINGS].addOrRemoveSessionIdentifiers, U.Fj[U.kq.SEQUENCE_RULES].listSequenceRules, U.Fj[U.kq.SEQUENCE_RULES].deleteSequenceRule, U.Fj[U.kq.SEQUENCE_RULES].reorderSequenceRule, U.Fj[U.kq.SEQUENCE_RULES].createSequenceRule, U.Fj[U.kq.SEQUENCE_RULES].editSequenceRule, pe.Z.CREATE_AND_DEPLOY, pe.Z.ANALYTICS, ee.y.SECONDARY_DNS_NOTIFICATION_CREATE, ee.y.SECONDARY_DNS_NOTIFICATION_UPDATE, ee.y.SECONDARY_DNS_NOTIFICATION_DELETE, z.U.ZONE_TRANSFER_SUCCESS, z.U.DNS_RECORD_CREATE, z.U.DNS_RECORD_UPDATE, z.U.DNS_RECORD_DELETE, w.Y.PEER_DNS_CREATE, w.Y.PEER_DNS_UPDATE, w.Y.PEER_DNS_DELETE, w.Y.ZONE_TRANSFER_ENABLE, w.Y.ZONE_TRANSFER_DISABLE, K.V.ARGO_ENABLEMENT, K.V.ARGO_GEO_ANALYTICS_FETCH, K.V.ARGO_GLOBAL_ANALYTICS_FETCH, H.X.VIEW_BUCKETS_LIST, H.X.CREATE_BUCKET, H.X.VALIDATE_BUCKET, H.X.DELETE_BUCKET, H.X.VIEW_CAPTURES_LIST, H.X.CREATE_SIMPLE_CAPTURE, H.X.CREATE_FULL_CAPTURE, H.X.VIEW_FULL_CAPTURE, H.X.DOWNLOAD_SIMPLE_CAPTURE, Y.bK.VIEW_RULES, Y.bK.CREATE_RULE, Y.bK.UPDATE_RULE, Y.bK.DELETE_RULE, Y.bK.VIEW_CONFIGURATION, Y.bK.CREATE_CONFIGURATION, Y.bK.UPDATE_CONFIGURATION, Y.bK.DELETE_CONFIGURATION, F.r8.VIEW_ALERTS, F.r8.VIEW_ALERTS_HISTORY, F.r8.MAGIC_OVERVIEW_ANALYTICS, ue.o4.CLICK_ADAPTIVE_SAMPLING, ue.o4.CLICK_TO_LOG_EXPLORER_BANNER, ue.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, ue.o4.CLICK_SWITCH_TO_RAW_LOGS, ue.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", ae.U.REGISTER_DOMAIN_SEARCH_SUBMIT, ae.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, ae.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, ae.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, ae.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, ae.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, ae.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, ae.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, ae.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, ae.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, ae.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, ae.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, ae.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, ae.U.REGISTER_DOMAIN_CHECKOUT_ERROR, ae.U.TRANSFER_DOMAIN_CHANGE_STEP, ae.U.RENEW_DOMAIN_COMPLETED, ae.U.RESTORE_DOMAIN_INIT, ae.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, ae.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, ae.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, ae.U.RESTORE_DOMAIN_FAILURE, ae.U.RESTORE_DOMAIN_COMPLETED, ae.U.DOMAIN_DELETE_INIT, ae.U.DOMAIN_DELETE_COMPLETED, ae.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, ae.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, ae.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, ae.U.DOMAIN_DELETE_CONFIRM_DELETE, ae.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, ae.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, ae.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, ae.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, ae.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL),
				W = t.eg.exactStrict(t.eg.object({
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
					previous_selection: t.eg.any.optional,
					new_selection: t.eg.any.optional,
					payment_method: t.eg.string.optional,
					payment_option: t.eg.string.optional,
					selection: t.eg.any.optional,
					numDomainsInCart: t.eg.any.optional,
					uniqueTopLevelDomains: t.eg.any.optional
				})),
				oe = (fe, ye) => {
					const [me, be] = ve(ye);
					let L, X;
					return (0, t.nM)(D.decode(fe)) && (L = new h.Uh(fe)), be && be.length > 0 && (X = new h.oV(fe, be)), [me, L, X]
				},
				ve = fe => {
					const ye = W.decode(fe);
					if ((0, t.nM)(ye)) {
						const me = ye.left.map(({
							context: be
						}) => be.map(({
							key: L
						}) => L)).reduce((be, L) => be.concat(L), []).filter(be => be in fe);
						return [Oe(me, fe), me]
					}
					return [fe, []]
				},
				Oe = (fe, ye) => Object.entries(ye).reduce((me, [be, L]) => (fe.includes(be) || (me[be] = L), me), {}),
				B = fe => (ye, me, be) => {
					const [L, X, _e] = oe(me, be);
					if (X) throw X;
					return _e && console.error(_e), fe(ye, me, L)
				};
			var ce = n("../react/utils/zaraz.ts");
			const we = {
					identify: !0
				},
				ze = fe => (ye, me, be) => (we[me] || ce.tg === null || ce.tg === void 0 || ce.tg.track(me, be), fe(ye, me, be));
			var xe = n("../react/utils/cookiePreferences.ts");

			function Ne(fe) {
				for (var ye = 1; ye < arguments.length; ye++) {
					var me = arguments[ye] != null ? Object(arguments[ye]) : {},
						be = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && be.push.apply(be, Object.getOwnPropertySymbols(me).filter(function(L) {
						return Object.getOwnPropertyDescriptor(me, L).enumerable
					})), be.forEach(function(L) {
						je(fe, L, me[L])
					})
				}
				return fe
			}

			function je(fe, ye, me) {
				return ye = Ve(ye), ye in fe ? Object.defineProperty(fe, ye, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : fe[ye] = me, fe
			}

			function Ve(fe) {
				var ye = Ye(fe, "string");
				return typeof ye == "symbol" ? ye : String(ye)
			}

			function Ye(fe, ye) {
				if (typeof fe != "object" || fe === null) return fe;
				var me = fe[Symbol.toPrimitive];
				if (me !== void 0) {
					var be = me.call(fe, ye || "default");
					if (typeof be != "object") return be;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ye === "string" ? String : Number)(fe)
			}
			const rt = fe => {
					r().init(Ne({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Qe() && !(0, s.gm)() && qe(),
						middlewares: [S, B, y, ze]
					}, fe))
				},
				Xe = () => {
					r().identify(Ne({}, (0, e.getAttribution)(), {
						locale: (0, f.r)((0, p.bh)().getState()),
						isCloudflare: !!(0, i.Jd)()
					}))
				},
				Qe = () => !0,
				Je = () => {
					(0, xe.kT)("sparrow_id")
				},
				qe = () => (0, xe.Xm)()
		},
		"../utils/initStyles.ts": function(V, _, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = n("../react/app/providers/storeContainer.js");
			const s = "cfBaseStyles",
				p = document.head || document.getElementsByTagName("head")[0],
				f = u => {
					const l = [];
					for (let v in u.colors) {
						const t = u.colors[v];
						if (Array.isArray(t) && v !== "categorical")
							for (let o = 0; o < t.length; ++o) l.push(`--cf-${v}-${o}:${t[o]};`)
					}
					return l.join(`
`)
				},
				i = () => {
					const u = (0, e.Yc)(),
						l = `
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
      ${f(e.Rl)}
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
					let v = document.getElementById(s);
					v ? v.innerText = "" : (v = document.createElement("style"), v.id = s, p.appendChild(v)), v.appendChild(document.createTextNode(l)), (0, r.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(i), _.Z = i
		},
		"../utils/sentry/lastSentEventId.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				e: function() {
					return r
				}
			});
			const r = (() => {
				let s = "";
				return {
					setEventId: i => (!i || typeof i != "string" || (s = i), s),
					getEventId: () => s
				}
			})()
		},
		"../utils/zaraz.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Ro: function() {
					return o
				},
				bM: function() {
					return l
				},
				tg: function() {
					return u
				},
				yn: function() {
					return t
				}
			});

			function e(c) {
				for (var g = 1; g < arguments.length; g++) {
					var a = arguments[g] != null ? Object(arguments[g]) : {},
						C = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(a).filter(function(d) {
						return Object.getOwnPropertyDescriptor(a, d).enumerable
					})), C.forEach(function(d) {
						r(c, d, a[d])
					})
				}
				return c
			}

			function r(c, g, a) {
				return g = s(g), g in c ? Object.defineProperty(c, g, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[g] = a, c
			}

			function s(c) {
				var g = p(c, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function p(c, g) {
				if (typeof c != "object" || c === null) return c;
				var a = c[Symbol.toPrimitive];
				if (a !== void 0) {
					var C = a.call(c, g || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(c)
			}
			const f = {
					track: (c, g) => null,
					set: (c, g) => console.log(`zaraz.set(${c}, ${g})`)
				},
				i = {
					track: (c, g) => {
						var a;
						(a = window.zaraz) === null || a === void 0 || a.track(c, e({}, g, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (c, g) => {
						var a;
						return (a = window.zaraz) === null || a === void 0 ? void 0 : a.set(c, g)
					}
				};
			let u;
			const l = () => {
					window.zaraz, u = i
				},
				v = ["email", "first_name", "last_name"],
				t = c => {
					v.forEach(g => {
						var a;
						(a = u) === null || a === void 0 || a.set(g, c[g])
					})
				},
				o = () => {
					t({})
				}
		},
		"../../../common/intl/intl-core/src/Translator.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Z: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/node-polyglot/index.js"),
				r = n.n(e),
				s = n("../../../common/intl/intl-types/src/index.ts"),
				p = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				f = n("../../../../node_modules/lodash/mapValues.js"),
				i = n.n(f);

			function u(S) {
				for (var h = 1; h < arguments.length; h++) {
					var O = arguments[h] != null ? Object(arguments[h]) : {},
						G = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(O).filter(function(H) {
						return Object.getOwnPropertyDescriptor(O, H).enumerable
					})), G.forEach(function(H) {
						l(S, H, O[H])
					})
				}
				return S
			}

			function l(S, h, O) {
				return h = v(h), h in S ? Object.defineProperty(S, h, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[h] = O, S
			}

			function v(S) {
				var h = t(S, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function t(S, h) {
				if (typeof S != "object" || S === null) return S;
				var O = S[Symbol.toPrimitive];
				if (O !== void 0) {
					var G = O.call(S, h || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(S)
			}
			const o = {
					prepend: "[!!",
					append: "!!]",
					delimiter: "%",
					startDelimiter: "",
					endDelimiter: "",
					extend: 0,
					override: void 0
				},
				c = {
					A: String.fromCharCode(192, 193, 194, 195, 196, 197, 256, 258, 260, 506, 512, 514),
					a: String.fromCharCode(224, 225, 226, 227, 228, 229, 257, 259, 261, 507, 513, 515),
					B: String.fromCharCode(223, 385, 579, 665),
					b: String.fromCharCode(384, 386, 387, 388, 389, 595),
					C: String.fromCharCode(262, 264, 266, 268),
					c: String.fromCharCode(263, 265, 267, 269),
					D: String.fromCharCode(270, 272, 393, 394),
					d: String.fromCharCode(271, 273),
					E: String.fromCharCode(274, 276, 278, 280, 282, 516, 518),
					e: String.fromCharCode(275, 277, 279, 281, 283, 517, 519),
					F: String.fromCharCode(401),
					f: String.fromCharCode(402),
					G: String.fromCharCode(284, 286, 288, 290),
					g: String.fromCharCode(285, 287, 289, 291),
					H: String.fromCharCode(292, 294),
					h: String.fromCharCode(293, 295),
					I: String.fromCharCode(296, 298, 300, 302, 304),
					i: String.fromCharCode(297, 299, 301, 303, 305),
					J: String.fromCharCode(309),
					j: String.fromCharCode(308),
					K: String.fromCharCode(310, 408),
					k: String.fromCharCode(311, 312, 409),
					L: String.fromCharCode(313, 315, 317, 319, 321),
					l: String.fromCharCode(314, 316, 318, 320, 322),
					N: String.fromCharCode(323, 325, 327, 330, 413),
					n: String.fromCharCode(324, 326, 328, 329, 331, 414),
					O: String.fromCharCode(332, 334, 336, 416),
					o: String.fromCharCode(333, 335, 337, 417),
					P: String.fromCharCode(420),
					p: String.fromCharCode(421, 447),
					Q: String.fromCharCode(490, 492),
					q: String.fromCharCode(491, 493, 587),
					R: String.fromCharCode(340, 342, 344, 422),
					r: String.fromCharCode(341, 343, 345),
					S: String.fromCharCode(346, 348, 350, 352),
					s: String.fromCharCode(347, 349, 351, 353),
					T: String.fromCharCode(354, 356, 358),
					t: String.fromCharCode(355, 357, 359),
					U: String.fromCharCode(360, 362, 364, 366, 368, 370),
					u: String.fromCharCode(361, 363, 365, 367, 369, 371),
					W: String.fromCharCode(372),
					w: String.fromCharCode(373),
					Y: String.fromCharCode(374, 376, 435, 562, 590),
					y: String.fromCharCode(375, 436, 563, 591),
					Z: String.fromCharCode(377, 379, 381, 437),
					z: String.fromCharCode(378, 380, 382, 438)
				};
			var a = {
					version: "1.1.0",
					option: u({}, o),
					reset() {
						this.option = u({}, o)
					},
					table: c,
					pad(S, h) {
						for (var O = Math.floor(S.length * h / 2), G = O, H = S; O-- > 0;) H = " " + H;
						for (; G-- > 0;) H = H + " ";
						return H
					},
					str(S) {
						for (var h = this.option, O = h.startDelimiter || h.delimiter, G = h.endDelimiter || h.delimiter, H = new RegExp(O + "\\s*[\\w\\.\\s*]+\\s*" + G, "g"), te, re = [], J = 0, Q = 0, k = "", $, U; te = H.exec(S);) re.push(te);
						for (var le = re[Q++] || {
								index: -1
							}; J < S.length;) {
							if (le.index === J) {
								k += le[0], J += le[0].length, le = re[Q++] || {
									index: -1
								};
								continue
							}
							if ($ = h.override !== void 0 ? h.override : S[J], U = c[$], U) {
								var pe = S.length % U.length;
								$ = U[pe]
							}
							k += $, J++
						}
						return h.prepend + this.pad(k, h.extend) + h.append
					}
				},
				C = n("../../../common/intl/intl-core/src/errors.ts");

			function d(S, h, O) {
				return h = E(h), h in S ? Object.defineProperty(S, h, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[h] = O, S
			}

			function E(S) {
				var h = N(S, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function N(S, h) {
				if (typeof S != "object" || S === null) return S;
				var O = S[Symbol.toPrimitive];
				if (O !== void 0) {
					var G = O.call(S, h || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(S)
			}
			a.option.delimiter = "%", a.option.startDelimiter = "{", a.option.endDelimiter = "}";
			class R {
				constructor(h) {
					d(this, "map", void 0), d(this, "currentLocale", s.Q.en_US), d(this, "options", void 0), d(this, "psudoLocalizePhrases", O => Object.entries(O).reduce((G, [H, te]) => Object.assign(G, {
						[H]: a.str(te)
					}), {})), d(this, "getInstance", O => O ? this.map[O] : this.map[this.currentLocale]), d(this, "getInstanceMatchingPhrase", O => {
						const G = this.getInstance();
						return G.has(O) ? G : this.getInstance(s.Q.en_US)
					}), d(this, "extend", (O, G) => {
						const H = this.getInstance(G);
						this.options.pseudoLoc && (O = this.psudoLocalizePhrases(O)), H.extend(O)
					}), d(this, "t", (O, G) => {
						const H = this.getInstanceMatchingPhrase(O);
						return G ? H.t(O, G) : H.t(O)
					}), d(this, "tm", (O, G) => (0, p.Z)(this.t(O, G))), d(this, "clear", () => {
						this.getInstance().clear()
					}), d(this, "replace", O => {
						this.options.pseudoLoc && (O = this.psudoLocalizePhrases(O)), this.getInstance().replace(O)
					}), d(this, "locale", O => (O && (this.currentLocale = O, this.map[O] || this.createInstance(O)), this.currentLocale)), d(this, "has", O => this.getInstanceMatchingPhrase(O).has(O)), d(this, "translateSeconds", O => {
						if (Number(O) !== 0) {
							if (O % 86400 == 0) return this.t("time.num_days", {
								smart_count: O / 86400
							});
							if (O % 3600 == 0) return this.t("time.num_hours", {
								smart_count: O / 3600
							});
							if (O % 60 == 0) return this.t("time.num_minutes", {
								smart_count: O / 60
							})
						}
						return this.t("time.num_seconds", {
							smart_count: O
						})
					}), d(this, "translateObject", O => i()(O, this.t)), this.map = {}, this.options = h || {}, this.options.allowMissing = !0, this.options.onMissingKey = (O, G, H) => (console.error(new C.OZ(O)), G._ ? G._ : O), this.locale(h && h.locale || s.Q.en_US), h && h.phrases && (h.phrases = void 0), h && h.locale && (h.locale = void 0)
				}
				createInstance(h) {
					this.options.pseudoLoc && this.options.phrases && (this.options.phrases = this.psudoLocalizePhrases(this.options.phrases)), this.map[h] = new(r())(Object.assign(this.options, {
						locale: h
					}))
				}
			}
			var y = R
		},
		"../../../common/intl/intl-core/src/errors.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				OZ: function() {
					return f
				},
				YB: function() {
					return p
				}
			});

			function e(u, l, v) {
				return l = r(l), l in u ? Object.defineProperty(u, l, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[l] = v, u
			}

			function r(u) {
				var l = s(u, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function s(u, l) {
				if (typeof u != "object" || u === null) return u;
				var v = u[Symbol.toPrimitive];
				if (v !== void 0) {
					var t = v.call(u, l || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(u)
			}
			class p extends Error {
				constructor(l, v) {
					super(v);
					e(this, "translationKey", void 0), this.translationKey = l, this.name = "TranslatorError"
				}
			}
			class f extends p {
				constructor(l) {
					super(l, `Translation key not found: ${l}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var i = null
		},
		"../../../common/intl/intl-react/src/index.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				oc: function() {
					return f
				},
				lm: function() {
					return h
				},
				bd: function() {
					return c
				},
				RD: function() {
					return ae
				},
				cC: function() {
					return w
				},
				QT: function() {
					return F
				},
				lP: function() {
					return ue
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				s = n("../../../common/intl/intl-core/src/Translator.ts");
			const p = e.createContext(new s.Z),
				f = p.Consumer,
				i = p.Provider;

			function u() {
				return u = Object.assign ? Object.assign.bind() : function(x) {
					for (var A = 1; A < arguments.length; A++) {
						var D = arguments[A];
						for (var W in D) Object.prototype.hasOwnProperty.call(D, W) && (x[W] = D[W])
					}
					return x
				}, u.apply(this, arguments)
			}

			function l(x, A) {
				if (x == null) return {};
				var D = v(x, A),
					W, oe;
				if (Object.getOwnPropertySymbols) {
					var ve = Object.getOwnPropertySymbols(x);
					for (oe = 0; oe < ve.length; oe++) W = ve[oe], !(A.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(x, W) || (D[W] = x[W]))
				}
				return D
			}

			function v(x, A) {
				if (x == null) return {};
				var D = {},
					W = Object.keys(x),
					oe, ve;
				for (ve = 0; ve < W.length; ve++) oe = W[ve], !(A.indexOf(oe) >= 0) && (D[oe] = x[oe]);
				return D
			}
			class t extends e.Component {
				constructor(A) {
					super(A);
					const {
						locale: D,
						phrases: W,
						translator: oe
					} = A;
					D && oe.locale(D), W && oe.extend(W)
				}
				componentDidUpdate(A) {
					A.phrases !== this.props.phrases && this.props.phrases && this.props.translator.locale(this.props.locale)
				}
				render() {
					const {
						children: A
					} = this.props;
					return A
				}
			}
			var c = x => {
				let {
					translator: A
				} = x, D = l(x, ["translator"]);
				const W = () => e.createElement(f, null, oe => e.createElement(t, u({
					translator: oe
				}, D)));
				return A ? (A.locale(D.locale), e.createElement(i, {
					value: A
				}, W())) : W()
			};

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(x) {
					for (var A = 1; A < arguments.length; A++) {
						var D = arguments[A];
						for (var W in D) Object.prototype.hasOwnProperty.call(D, W) && (x[W] = D[W])
					}
					return x
				}, g.apply(this, arguments)
			}

			function a(x, A) {
				if (x == null) return {};
				var D = C(x, A),
					W, oe;
				if (Object.getOwnPropertySymbols) {
					var ve = Object.getOwnPropertySymbols(x);
					for (oe = 0; oe < ve.length; oe++) W = ve[oe], !(A.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(x, W) || (D[W] = x[W]))
				}
				return D
			}

			function C(x, A) {
				if (x == null) return {};
				var D = {},
					W = Object.keys(x),
					oe, ve;
				for (ve = 0; ve < W.length; ve++) oe = W[ve], !(A.indexOf(oe) >= 0) && (D[oe] = x[oe]);
				return D
			}

			function d(x) {
				for (var A = 1; A < arguments.length; A++) {
					var D = arguments[A] != null ? Object(arguments[A]) : {},
						W = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(D).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(D, oe).enumerable
					})), W.forEach(function(oe) {
						E(x, oe, D[oe])
					})
				}
				return x
			}

			function E(x, A, D) {
				return A = N(A), A in x ? Object.defineProperty(x, A, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[A] = D, x
			}

			function N(x) {
				var A = R(x, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function R(x, A) {
				if (typeof x != "object" || x === null) return x;
				var D = x[Symbol.toPrimitive];
				if (D !== void 0) {
					var W = D.call(x, A || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(x)
			}
			class y extends e.Component {
				constructor(...A) {
					super(...A);
					E(this, "state", {
						phrasesByLocale: {}
					}), E(this, "loadLocale", async D => {
						const {
							loadPhrases: W
						} = this.props, oe = await W(D);
						this.setState(ve => ({
							phrasesByLocale: d({}, ve.phrasesByLocale, {
								[D]: oe
							})
						}))
					})
				}
				componentDidMount() {
					this.loadLocale(this.props.locale)
				}
				componentDidUpdate(A) {
					const {
						phrasesByLocale: D
					} = this.state;
					this.props.locale !== A.locale && !D[this.props.locale] && this.loadLocale(this.props.locale)
				}
				render() {
					const {
						children: A,
						locale: D
					} = this.props, {
						phrasesByLocale: W
					} = this.state;
					return W[D] ? e.createElement(c, {
						locale: D,
						phrases: W[D]
					}, A) : null
				}
			}
			E(y, "defaultProps", {});
			var h = x => {
					let {
						locale: A
					} = x, D = a(x, ["locale"]);
					return e.createElement(f, null, W => e.createElement(y, g({
						locale: A || W.locale()
					}, D)))
				},
				O = n("../../../../node_modules/lodash/escape.js"),
				G = n.n(O),
				H = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js");

			function te(x) {
				for (var A = 1; A < arguments.length; A++) {
					var D = arguments[A] != null ? Object(arguments[A]) : {},
						W = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(D).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(D, oe).enumerable
					})), W.forEach(function(oe) {
						re(x, oe, D[oe])
					})
				}
				return x
			}

			function re(x, A, D) {
				return A = J(A), A in x ? Object.defineProperty(x, A, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[A] = D, x
			}

			function J(x) {
				var A = Q(x, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function Q(x, A) {
				if (typeof x != "object" || x === null) return x;
				var D = x[Symbol.toPrimitive];
				if (D !== void 0) {
					var W = D.call(x, A || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(x)
			}

			function k() {
				return k = Object.assign ? Object.assign.bind() : function(x) {
					for (var A = 1; A < arguments.length; A++) {
						var D = arguments[A];
						for (var W in D) Object.prototype.hasOwnProperty.call(D, W) && (x[W] = D[W])
					}
					return x
				}, k.apply(this, arguments)
			}
			const $ = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				U = /(?:\r\n|\r|\n)/g;

			function le(x, A, D) {
				return e.createElement("span", {
					key: x,
					"data-testid": D,
					dangerouslySetInnerHTML: {
						__html: A
					}
				})
			}

			function pe(x, A = [], D = [], W) {
				let oe = 0;
				const ve = x.replace(U, "").split($);
				if (ve.length === 1) return [le(oe, x, W)];
				const Oe = [],
					B = ve.shift();
				if (B) {
					const ce = le(oe, B, W);
					Oe.push(ce), typeof ce != "string" && oe++
				}
				for (const [ce, we, ze] of ee(ve)) {
					A[ce] || window.console && console.warn(`Missing Component for translation key: ${x}, index: ${ce}. Fragment will be used.`);
					const xe = A[ce] || e.Fragment,
						Ne = D[ce] || {},
						je = le(0, we);
					if (Oe.push(e.createElement(xe, k({
							key: oe
						}, Ne), je)), oe++, ze) {
						const Ve = le(oe, ze);
						Oe.push(Ve), typeof Ve != "string" && oe++
					}
				}
				return Oe
			}

			function ee(x) {
				if (!x.length) return [];
				const [A, D, W, oe] = x.slice(0, 4);
				return [
					[parseInt(A || W), D || "", oe]
				].concat(ee(x.slice(4, x.length)))
			}

			function z({
				id: x = "",
				smartCount: A,
				_: D,
				values: W,
				applyMarkdown: oe,
				Components: ve,
				componentProps: Oe,
				testId: B
			}) {
				return e.createElement(f, null, ce => {
					W && Object.keys(W).forEach(Ne => W[Ne] = G()(W[Ne])), Oe && Oe.forEach(Ne => {
						Object.keys(Ne).forEach(je => {
							typeof Ne[je] == "string" && (Ne[je] = G()(Ne[je]))
						})
					});
					const we = te({
							smart_count: A,
							_: D
						}, W),
						ze = oe ? (0, H.Z)(ce.t(x.toString(), we), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : ce.t(x.toString(), we),
						xe = pe(ze, ve, Oe, B);
					return xe.length > 1 ? e.createElement(e.Fragment, null, xe) : xe[0]
				})
			}
			var w = z;

			function K() {
				return K = Object.assign ? Object.assign.bind() : function(x) {
					for (var A = 1; A < arguments.length; A++) {
						var D = arguments[A];
						for (var W in D) Object.prototype.hasOwnProperty.call(D, W) && (x[W] = D[W])
					}
					return x
				}, K.apply(this, arguments)
			}

			function Y(x) {
				return D => r().createElement(f, null, W => r().createElement(x, K({}, D, {
					translator: W
				})))
			}
			var ue = Y;

			function F() {
				if (e.useContext === void 0) throw new Error("The useI18n hook is being used with a version of React that doesn't support hooks!");
				return (0, e.useContext)(p)
			}
			var ne = n("../../../common/intl/intl-types/src/index.ts"),
				ae = r().createContext(ne.Q.en_US)
		},
		"../../../common/util/types/src/api/domain.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Aw: function() {
					return O
				},
				Ib: function() {
					return S
				},
				Ks: function() {
					return G
				},
				MS: function() {
					return h
				},
				PN: function() {
					return C
				},
				Pp: function() {
					return p
				},
				Q3: function() {
					return g
				},
				TS: function() {
					return a
				},
				W7: function() {
					return N
				},
				dN: function() {
					return H
				},
				eF: function() {
					return y
				},
				qp: function() {
					return t
				},
				wR: function() {
					return v
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const r = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				s = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				p = e.eg.object({
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
				f = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				i = e.eg.object({
					registrant: p.optional,
					technical: p.optional,
					administrator: p.optional,
					billing: p.optional
				}),
				u = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: i.optional,
					years: e.eg.number
				}),
				l = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let v = function(te) {
				return te.ONBOARDING_INITIATED = "Onboarding Initiated", te.ONBOARDED = "Onboarded", te.PENDING_REGISTRY_LOCK = "Pending Registry Lock", te.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", te.REGISTRY_UNLOCKED = "Registry Unlocked", te.LOCKED = "Locked", te.FAILED_TO_LOCK = "Failed To Lock", te.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", te.UNLOCKED = "Unlocked", te.OFFBOARDED = "Offboarded", te
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
					fees: l.optional,
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
					transfer_conditions: f.optional,
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
				c = e.eg.object({
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
				g = e.eg.object({
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
			let C = function(te) {
				return te.PENDING = "pending", te.VERIFIED = "verified", te.REJECTED = "rejected", te.PENDING_DELETE = "pending_delete", te.DELETED = "deleted", te
			}({});
			const d = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(C),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				E = e.eg.object({
					designated_approvers: e.eg.array(d)
				});
			let N = function(te) {
				return te.PENDING = "pending", te.PENDING_UPDATE = "pending_update", te.ENABLED = "enabled", te.DISABLED = "disabled", te
			}({});
			const R = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(N)
				}),
				y = e.eg.intersection([R, E]),
				S = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let h = function(te) {
				return te.UNLOCK_APPROVAL = "UnlockApprovalRequest", te.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", te.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", te.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", te
			}({});
			const O = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				G = e.eg.object({
					message: e.eg.string
				}),
				H = e.eg.object({
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
		"../../../common/util/types/src/utils/index.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Yd: function() {
					return e
				},
				vE: function() {
					return r
				}
			});

			function e(s) {
				return Object.keys(s)
			}
			const r = (s, p) => {
				if (p !== void 0) throw new Error("Unexpected object: " + s);
				return p
			}
		},
		"../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$": function(V, _, n) {
			var e = {
				"./favicon-cookie.ico": "../react/app/assets/favicon-cookie.ico",
				"./favicon-dev.ico": "../react/app/assets/favicon-dev.ico",
				"./favicon-staging.ico": "../react/app/assets/favicon-staging.ico",
				"./favicon-zeit.ico": "../react/app/assets/favicon-zeit.ico"
			};

			function r(p) {
				var f = s(p);
				return n(f)
			}

			function s(p) {
				if (!n.o(e, p)) {
					var f = new Error("Cannot find module '" + p + "'");
					throw f.code = "MODULE_NOT_FOUND", f
				}
				return e[p]
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.resolve = s, V.exports = r, r.id = "../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$"
		},
		"../react/app/assets/favicon-cookie.ico": function(V, _, n) {
			"use strict";
			V.exports = n.p + "3f95af1452696b3d93d3.ico"
		},
		"../react/app/assets/favicon-dev.ico": function(V, _, n) {
			"use strict";
			V.exports = n.p + "1022a975e95038d58c62.ico"
		},
		"../react/app/assets/favicon-staging.ico": function(V, _, n) {
			"use strict";
			V.exports = n.p + "67b31fd5804672d4ab2d.ico"
		},
		"../react/app/assets/favicon-zeit.ico": function(V, _, n) {
			"use strict";
			V.exports = n.p + "d9aa8f47b1687e407e0f.ico"
		}
	}
]);