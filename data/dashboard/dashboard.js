! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b0a1cfdb-57f6-5bd2-b945-716113ceb16b")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				J8: function() {
					return a
				},
				Jd: function() {
					return s
				},
				QY: function() {
					return u
				},
				Qw: function() {
					return i
				},
				ki: function() {
					return p
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/utils/url.ts"),
				d = t("../../../../node_modules/query-string/query-string.js"),
				f = t.n(d),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				_;
			const i = () => Object.keys(l.Z).reduce((g, C) => (C.indexOf("cf_beta.") === 0 && l.Z.get(C) === "true" && g.push(C.split(".").slice(1).join(".")), g), []),
				p = () => {
					var g, C, T;
					return ((g = window) === null || g === void 0 || (C = g.bootstrap) === null || C === void 0 || (T = C.data) === null || T === void 0 ? void 0 : T.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((_ = window) === null || _ === void 0 ? void 0 : _.location) && l.Z) {
				const g = f().parse(window.location.search);
				g.beta_on && l.Z.set(`cf_beta.${g.beta_on}`, !0), g.beta_off && l.Z.set(`cf_beta.${g.beta_off}`, !1)
			}
			const b = {},
				n = g => {
					var C, T, P;
					return Object.prototype.hasOwnProperty.call(b, g) ? b[g] : ((C = window) === null || C === void 0 || (T = C.bootstrap) === null || T === void 0 || (P = T.data) === null || P === void 0 ? void 0 : P.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(w => w === g) ? (b[g] = !0, !0) : (b[g] = !1, !1)
				},
				r = g => l.Z ? l.Z.get(`cf_beta.${g}`) === !0 : !1,
				a = g => r(g) || n(g),
				c = () => !0,
				s = () => {
					var g, C, T;
					return ((g = window) === null || g === void 0 || (C = g.bootstrap) === null || C === void 0 || (T = C.data) === null || T === void 0 ? void 0 : T.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				u = g => {
					const C = (0, e.uF)(g),
						T = (C == null ? void 0 : C.roles) || [];
					return (0, o.qR)(location.pathname) && T.length === 1 && T.some(P => P === "Administrator Read Only")
				}
		},
		"../init.ts": function(F, E, t) {
			"use strict";
			t.r(E);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				d = t("../libs/init/initGlobal.ts"),
				f = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				l = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function _(A) {
				for (var D = 1; D < arguments.length; D++) {
					var G = arguments[D] != null ? Object(arguments[D]) : {},
						q = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(G).filter(function(de) {
						return Object.getOwnPropertyDescriptor(G, de).enumerable
					})), q.forEach(function(de) {
						i(A, de, G[de])
					})
				}
				return A
			}

			function i(A, D, G) {
				return D = p(D), D in A ? Object.defineProperty(A, D, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[D] = G, A
			}

			function p(A) {
				var D = b(A, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function b(A, D) {
				if (typeof A != "object" || A === null) return A;
				var G = A[Symbol.toPrimitive];
				if (G !== void 0) {
					var q = G.call(A, D || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(A)
			}
			const n = A => {
				const D = A && A.headers || {},
					G = new Headers(D);
				return G.append("X-Cross-Site-Security", "dash"), _({}, A, {
					headers: G
				})
			};
			(0, l.register)({
				request: (A, D) => {
					try {
						return new URL(A), A === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", D] : [A, D]
					} catch {
						return [A, n(D)]
					}
				}
			});
			var r = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				a = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				c = t("../react/app/providers/storeContainer.js");
			let s = "";
			const u = 61;

			function g(A) {
				const D = A.substr(1);
				if (D && s !== D) {
					const G = document.getElementById(D);
					if (G) {
						const q = G.getBoundingClientRect().top;
						if (q > 0) {
							const de = q - u;
							document.documentElement.scrollTop = de
						}
					}
				}
				s = D
			}

			function C(A) {
				A.listen(D => g(D.hash))
			}
			var T = t("../../../../node_modules/cookie/index.js"),
				P = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const w = "CF_dash_version",
				v = "cf_fv_preview",
				h = "current",
				I = "hash",
				R = "deploymentPreview",
				W = "fragmentPreview",
				V = A => A === h ? ee() : j(),
				ee = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				j = (A = 72) => {
					const D = 36e5;
					return new Date(Date.now() + A * D)
				},
				ne = A => {
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
				te = (A, D = !1) => {
					var G;
					const q = ne(A),
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
    <h1 id="error-title">${q.title}</h1>
    <p id="error-description">${q.description}</p>
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
					return de + he
				},
				Y = A => {
					var D;
					const G = document.getElementById(A);
					!G || (D = G.parentNode) === null || D === void 0 || D.removeChild(G)
				};

			function le() {
				const A = document.getElementById("loading-state");
				A == null || A.classList.add("hide"), A == null || A.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(Y)
				})
			}

			function X(A) {
				var D;
				const G = document.getElementById("loading-state"),
					q = !!((D = T.parse(document.cookie)) === null || D === void 0 ? void 0 : D[w]);
				!G || (G.innerHTML = te(A == null ? void 0 : A.code, q))
			}
			var ie = t("../utils/initStyles.ts"),
				z = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				Q = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				k = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				K = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				Z = t("../../../../node_modules/history/esm/history.js"),
				ce = (0, Z.lX)(),
				x = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				y = t("../react/utils/url.ts");
			const M = (0, x.Rf)();
			let S;

			function U(A) {
				return $(A, "react-router-v5")
			}

			function $(A, D) {
				return (G, q = !0, de = !0) => {
					q && M && M.location && (S = G({
						name: (0, y.Fl)(M.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": D
						}
					})), de && A.listen && A.listen((he, ye) => {
						if (ye && (ye === "PUSH" || ye === "POP")) {
							S && S.finish();
							const xe = {
								"routing.instrumentation": D
							};
							S = G({
								name: (0, y.Fl)(he.pathname),
								op: "navigation",
								tags: xe
							})
						}
					})
				}
			}
			var me = t("../react/common/selectors/languagePreferenceSelector.ts"),
				Te = t("../flags.ts"),
				Ie = t("../utils/getDashVersion.ts"),
				Ae = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				N = t.n(Ae),
				pe = t("../../../common/intl/intl-core/src/errors.ts"),
				Oe = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				Re = t("../react/common/middleware/sparrow/errors.ts");
			const Fe = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				Ke = !0,
				Ve = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				ct = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function ze(A, D, G) {
				return D = Ze(D), D in A ? Object.defineProperty(A, D, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[D] = G, A
			}

			function Ze(A) {
				var D = Je(A, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function Je(A, D) {
				if (typeof A != "object" || A === null) return A;
				var G = A[Symbol.toPrimitive];
				if (G !== void 0) {
					var q = G.call(A, D || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(A)
			}
			class Be {
				constructor() {
					ze(this, "name", Be.id)
				}
				setupOnce() {
					t.g.console && (0, Oe.hl)(t.g.console, "error", D => (...G) => {
						const q = G.find(de => de instanceof Error);
						if (Fe && q) {
							let de, he = !0;
							if (q instanceof Re.ez) {
								const ye = q instanceof Re.oV ? q.invalidProperties : void 0;
								de = {
									tags: {
										"sparrow.eventName": q.eventName
									},
									extra: {
										sparrow: {
											eventName: q.eventName,
											invalidProperties: ye
										}
									},
									fingerprint: [q.name ? q.name : "SparrowValidationError"]
								}, he = !1
							} else if (q instanceof Ae.SparrowIdCookieError) de = {
								extra: {
									sparrowIdCookie: q.cookie
								},
								fingerprint: [q.name ? q.name : "SparrowIdCookieError"]
							};
							else if (q.name === "ChunkLoadError") {
								de = {
									fingerprint: [q.name]
								};
								try {
									de.tags = {
										chunkId: q.message.split(" ")[2],
										chunkUrl: q.request
									}
								} catch {}
							} else q instanceof pe.YB && (de = {
								fingerprint: ["TranslatorError", q.translationKey]
							});
							he && r.Tb(q, de)
						}
						typeof D == "function" && D.apply(t.g.console, G)
					})
				}
			}
			ze(Be, "id", "ConsoleErrorIntegration");
			var qe = null,
				et = t("../utils/sentry/lastSentEventId.ts"),
				Ge = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				tt = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const Ye = A => {
					const D = async G => {
						var q, de;
						const he = {
							envelope: G.body,
							url: A.url,
							isPreviewDeploy: (q = window) === null || q === void 0 || (de = q.build) === null || de === void 0 ? void 0 : de.isPreviewDeploy,
							release: (0, Ie.t)()
						};
						try {
							const ye = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(he)
							});
							return {
								statusCode: ye.status,
								headers: {
									"x-sentry-rate-limits": ye.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": ye.headers.get("Retry-After")
								}
							}
						} catch (ye) {
							return console.log(ye), (0, tt.$2)(ye)
						}
					};
					return Ge.q(A, D)
				},
				nt = () => {
					if (Fe && Ke) {
						var A, D, G, q, de, he, ye, xe, at, st;
						let Pt = "production";
						((A = window) === null || A === void 0 || (D = A.build) === null || D === void 0 ? void 0 : D.isPreviewDeploy) && (Pt += "-preview"), Q.S({
							dsn: Fe,
							release: (0, Ie.t)(),
							environment: Pt,
							ignoreErrors: ct,
							allowUrls: Ve,
							autoSessionTracking: !1,
							integrations: [new k.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new Be, new K.jK.BrowserTracing({
								routingInstrumentation: U(ce)
							})],
							tracesSampleRate: 0,
							transport: Ye,
							beforeSend: Vt => (et.e.setEventId(Vt.event_id), Vt)
						});
						const en = (0, c.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, Te.Qw)(),
							USER_BETA_FLAGS: (0, Te.ki)(),
							meta: {
								connection: {
									type: (G = window) === null || G === void 0 || (q = G.navigator) === null || q === void 0 || (de = q.connection) === null || de === void 0 ? void 0 : de.effectiveType,
									bandwidth: (he = window) === null || he === void 0 || (ye = he.navigator) === null || ye === void 0 || (xe = ye.connection) === null || xe === void 0 ? void 0 : xe.downlink
								},
								languagePreference: (0, me.r)(en),
								isPreviewDeploy: (at = window) === null || at === void 0 || (st = at.build) === null || st === void 0 ? void 0 : st.isPreviewDeploy
							},
							utilGates: (0, z.T2)(en)
						}), window.addEventListener("unhandledrejection", function(Vt) {})
					}
				},
				B = A => {
					A ? r.av({
						id: A
					}) : r.av(null)
				};
			var J = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Se = () => {
					let A;
					try {
						A = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), A = window.location.search
					}
					if (!A.includes("remote[")) return;
					const D = new URLSearchParams(A),
						G = {};
					for (let [q, de] of D) q.includes("remote") && (G[q.replace(/remote\[|\]/g, "")] = de);
					J.Z.set("mfe-remotes", JSON.stringify(G))
				},
				Pe = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				we = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const ke = "ANON_USER_ID";

			function it() {
				var A, D, G, q;
				let de = (A = t.g) === null || A === void 0 || (D = A.bootstrap) === null || D === void 0 || (G = D.data) === null || G === void 0 || (q = G.user) === null || q === void 0 ? void 0 : q.id;
				if (!de) {
					let he = J.Z.get(ke);
					if (!he) {
						let ye = (0, we.Z)();
						J.Z.set(ke, ye), he = ye
					}
					return he
				}
				return de
			}
			async function lt() {
				const A = (0, c.bh)();
				A.dispatch((0, Pe.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await A.dispatch((0, z.UL)({
					userId: it()
				}))
			}
			class Et extends Error {
				constructor(D, G) {
					super(G);
					this.name = `${D} ${G}`
				}
			}
			const pt = () => {
					document.cookie.split(";").forEach(D => {
						const [G] = D.trim().split("=");
						document.cookie = `${G}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				Qe = async () => {
					let A = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!A.ok) throw A.headers.get("content-type") === "text/html" && (await A.text()).toLowerCase().includes("cookie too large") && (r.$e(function(de) {
						de.setTag("init", "cookieTooLarge"), r.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), pt(), window.location.reload()), new Et("Bootstrap API Failure", A == null ? void 0 : A.status);
					return (await A.json()).result.data
				};
			var Le = t("webpack/sharing/consume/default/react/react"),
				fe = t.n(Le),
				ae = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				ue = t("webpack/sharing/consume/default/react-dom/react-dom"),
				ge = t("webpack/sharing/consume/default/react-redux/react-redux"),
				L = t("../../../../node_modules/swr/core/dist/index.mjs"),
				H = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				se = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Ee = t("../react/shims/focus-visible.js"),
				be = t("../react/app/components/DeepLink/index.ts"),
				De = t("../../../../node_modules/prop-types/index.js"),
				Ne = t.n(De),
				ot = t("../react/utils/translator.tsx"),
				rt = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				ve = t("../../../dash/intl/intl-translations/src/index.ts"),
				je = t("../../../../node_modules/query-string/query-string.js"),
				ut = t.n(je),
				Nt = t("../react/common/actions/userActions.ts"),
				mt = t("../react/common/selectors/userSelectors.ts"),
				$e = t("../react/utils/i18n.ts"),
				Lt = t("../react/utils/bootstrap.ts");

			function Bt(A) {
				for (var D = 1; D < arguments.length; D++) {
					var G = arguments[D] != null ? Object(arguments[D]) : {},
						q = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(G).filter(function(de) {
						return Object.getOwnPropertyDescriptor(G, de).enumerable
					})), q.forEach(function(de) {
						Ut(A, de, G[de])
					})
				}
				return A
			}

			function Ut(A, D, G) {
				return D = Ft(D), D in A ? Object.defineProperty(A, D, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[D] = G, A
			}

			function Ft(A) {
				var D = jt(A, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function jt(A, D) {
				if (typeof A != "object" || A === null) return A;
				var G = A[Symbol.toPrimitive];
				if (G !== void 0) {
					var q = G.call(A, D || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(A)
			}
			let We = ut().parse(location.search);
			const Dt = A => {
					const D = (0, Lt.$8)() ? [(0, ve.Fy)(ve.if.changes), (0, ve.Fy)(ve.if.common), (0, ve.Fy)(ve.if.navigation), (0, ve.Fy)(ve.if.overview), (0, ve.Fy)(ve.if.onboarding), (0, ve.Fy)(ve.if.invite), (0, ve.Fy)(ve.if.login), (0, ve.Fy)(ve.if.dns), (0, ve.Fy)(ve.n4.ssl_tls), (0, ve.Fy)(ve.if.message_inbox), (0, ve.Fy)(ve.if.welcome)] : [(0, ve.Fy)(ve.if.common), (0, ve.Fy)(ve.if.invite), (0, ve.Fy)(ve.if.login), (0, ve.Fy)(ve.if.onboarding)];
					We.lang ? St(A) : J.Z.get($e.th) && wt(A, (0, $e.Kd)());
					const G = async q => (await Promise.all(D.map(he => he(q)))).reduce((he, ye) => Bt({}, he, ye), {});
					return fe().createElement(rt.LocaleContext.Provider, {
						value: A.languagePreference
					}, fe().createElement(rt.I18nProvider, {
						translator: ot.Vb,
						locale: A.languagePreference
					}, fe().createElement(rt.I18nLoader, {
						loadPhrases: G
					}, A.children)))
				},
				St = async A => {
					let D = We.lang.substring(0, We.lang.length - 2) + We.lang.substring(We.lang.length - 2, We.lang.length).toUpperCase();
					if (!(0, me.v)(D)) {
						console.warn(`${D} is not a supported locale.`), delete We.lang, A.history.replace({
							search: ut().stringify(We)
						});
						return
					}(0, $e.i_)(D), delete We.lang, wt(A, D), A.isAuthenticated || A.history.replace({
						search: ut().stringify(We)
					})
				}, wt = async (A, D) => {
					if (A.isAuthenticated) try {
						await A.setUserCommPreferences({
							"language-locale": D
						}, {
							hideErrorAlert: !0
						}), J.Z.remove($e.th), A.history.replace({
							search: ut().stringify(We)
						})
					} catch (G) {
						J.Z.set($e.th, !0), console.error(G)
					} else J.Z.set($e.th, !0)
				}, yt = A => {
					const D = (0, mt.PR)(A);
					return {
						isAuthenticated: !!(D && D.id),
						languagePreference: (0, $e.Kd)() || (0, me.r)(A)
					}
				}, xt = {
					setUserCommPreferences: Nt.V_
				};
			var $t = (0, ae.withRouter)((0, ge.connect)(yt, xt)(Dt));
			Dt.propTypes = {
				history: Ne().object,
				languagePreference: Ne().string.isRequired,
				children: Ne().node.isRequired,
				isAuthenticated: Ne().bool,
				setUserCommPreferences: Ne().func.isRequired
			};
			var Wt = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				zt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let gt;
			const Gt = ({
				selectorPrefix: A = "c_"
			} = {}) => (gt || (gt = (0, zt.Z)({
				dev: !1,
				selectorPrefix: A
			})), gt);
			var Ht = t("../react/common/components/ModalManager.tsx"),
				Kt = t("../react/app/components/ErrorBoundary.tsx"),
				m = t("../react/common/actions/notificationsActions.ts");
			const re = (t.g.bootstrap || {}).data || {};
			class Ce extends fe().Component {
				componentDidMount() {
					re.messages && this.dispatchNotificationActions(re.messages)
				}
				dispatchNotificationActions(D) {
					D.forEach(G => {
						const {
							type: q,
							message: de,
							persist: he
						} = G;
						["success", "info", "warn", "error"].includes(q) && this.props.notifyAdd(q, (0, ot.ZP)(de), {
							persist: !!he
						})
					})
				}
				render() {
					return null
				}
			}
			var Xe = (0, ae.withRouter)((0, ge.connect)(null, {
				notifyAdd: m.IH
			})(Ce));
			Ce.propTypes = {
				notifyAdd: Ne().func.isRequired
			};
			var He = t("../react/app/redux/index.ts");

			function vt() {
				var A;
				const D = (0, He.p4)(mt.PR),
					G = (D == null || (A = D.email) === null || A === void 0 ? void 0 : A.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					q = (0, Pe.Yc)();
				(0, Le.useEffect)(() => {
					q({
						userType: G
					})
				}, [G, q])
			}
			var ft = t("../react/common/selectors/entitlementsSelectors.ts"),
				_t = t("../react/common/selectors/accountSelectors.ts");
			const Ct = ["accountId", "is_ent"];

			function ht() {
				const A = (0, Pe.f7)(),
					D = (0, ae.useHistory)(),
					G = (0, y.uW)(D.location.pathname),
					q = (0, Pe.Yc)(),
					de = (0, Pe.O$)(),
					he = (0, He.p4)(ft.u1),
					ye = !he.isRequesting && !!he.data,
					xe = (0, He.p4)(ft.p1),
					at = (0, He.p4)(_t.Xu),
					st = (0, He.p4)(_t.uF),
					Pt = !at.isRequesting && !!at.data;
				(0, Le.useEffect)(() => {
					G && Pt && st && ye && G === st.account.id ? q({
						accountId: st.account.id,
						is_ent: xe
					}) : (!G || G in A && A.accountId !== G) && de(Ct)
				}, [Pt, st, q, de, ye, xe, G, A])
			}
			var bt = t("../react/common/selectors/zoneSelectors.ts");

			function Tt() {
				const A = (0, He.p4)(bt.nA),
					D = (0, Pe.Yc)();
				(0, Le.useEffect)(() => {
					var G;
					D({
						zone_id: A == null ? void 0 : A.id,
						zone_plan: A == null || (G = A.plan) === null || G === void 0 ? void 0 : G.legacy_id
					})
				}, [A, D])
			}
			const Ot = () => (vt(), ht(), Tt(), null);
			var At = t("../react/app/components/Persistence/index.tsx"),
				Ue = t("../node_modules/@cloudflare/elements/es/index.js"),
				Mt = t("../react/app/components/LoadingSuspense.tsx");
			const tn = fe().lazy(() => Promise.all([t.e(37574), t.e(2480), t.e(10008), t.e(73598), t.e(94012), t.e(10108), t.e(72019), t.e(56037), t.e(5668), t.e(60091), t.e(55431), t.e(77216), t.e(39760), t.e(94923), t.e(60734), t.e(5753), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var nn = () => fe().createElement(Mt.Z, null, fe().createElement(tn, null));
			const on = () => (Le.useEffect(() => le, []), null);
			var rn = t("../../../../node_modules/moment/moment.js"),
				Zt = t.n(rn);
			const an = A => {
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
				sn = () => {
					const A = (0, He.p4)(me.r);
					(0, Le.useEffect)(() => {
						const D = an(A);
						D !== Zt().locale() && Zt().locale(D), document.documentElement.lang = A
					}, [A])
				},
				cn = () => {
					(0, Le.useEffect)(() => {
						async function A() {
							var D, G;
							let q;
							if (((D = window) === null || D === void 0 || (G = D.build) === null || G === void 0 ? void 0 : G.isPreviewDeploy) && (q = "cookie"), !!q) try {
								const de = document.head.querySelector("link[rel=icon]");
								de && (de.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${q}.ico`)).default)
							} catch {}
						}
						A()
					}, [])
				};
			var ln = t("../react/common/constants/constants.ts");
			const un = () => {
					var A;
					const D = (0, ae.useLocation)(),
						[G, q] = (0, Le.useState)(((A = window) === null || A === void 0 ? void 0 : A.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Le.useEffect)(() => {
						const de = ut().parse(D.search);
						if (de.pt && J.Z.set(ln.sJ, de.pt), de == null ? void 0 : de.devPanel) {
							var he, ye;
							(he = window) === null || he === void 0 || (ye = he.localStorage) === null || ye === void 0 || ye.setItem("gates_devtools_ui_gates_controller_enabled", "true"), q(!0)
						}
					}, [D.search]), {
						devPanelEnabled: G
					}
				},
				dn = ({
					id: A,
					customDataLayer: D = [],
					dataLayerName: G = "dataLayer"
				}) => {
					const q = `<iframe src="https://www.googletagmanager.com/ns.html?id=${A}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						de = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${G}', '${A}')`,
						he = `
    window.${G} = window.${G} || [];
    window.${G}.push(${JSON.stringify(D)})
  `;
					return {
						iframe: q,
						script: de,
						dataLayerHTML: he
					}
				},
				pn = A => {
					const D = document.createElement("script");
					return D.innerHTML = A, D.async = !0, D
				},
				mn = A => {
					const D = document.createElement("noscript");
					return D.innerHTML = A, D
				},
				Yt = A => {
					const D = document.createElement("script");
					return D.innerHTML = A, D
				},
				Mn = ({
					dataLayer: A,
					dataLayerName: D
				}) => {
					if (window[D]) return window[D].push(A);
					const G = `
      window.${D} = window.${D} || [];
      window.${D}.push(${JSON.stringify(A)})`,
						q = Yt(G);
					document.head.insertBefore(q, document.head.childNodes[0])
				},
				gn = ({
					containerId: A,
					customDataLayer: D,
					gtmFeatureFlag: G = !0
				}) => {
					(0, Le.useEffect)(() => {
						(() => {
							if (!G) return null;
							const {
								iframe: de,
								script: he,
								dataLayerHTML: ye
							} = dn({
								id: A,
								customDataLayer: D
							});
							document.head.insertBefore(Yt(ye), document.head.childNodes[0]), document.head.insertBefore(pn(he), document.head.childNodes[0]), document.body.insertBefore(mn(de), document.body.childNodes[0])
						})()
					}, [])
				};
			var Qt = t("../react/common/hooks/useGate.ts");
			const fn = ({
				isDev: A,
				gtmFeatureFlag: D
			}) => {
				(0, Le.useEffect)(() => {
					(() => {
						if (!D) return null;
						let q;
						A ? q = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : q = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const de = document.createElement("script");
						de.async = !0, de.src = q, document.head.insertBefore(de, document.head.childNodes[0])
					})()
				}, [])
			};
			var _n = t("../react/utils/useDomainConnectRedirect.ts");
			const En = "GTM-NDGPDFZ",
				yn = fe().lazy(() => Promise.all([t.e(37574), t.e(2480), t.e(10008), t.e(73598), t.e(94012), t.e(10108), t.e(72019), t.e(56037), t.e(16339), t.e(20879), t.e(60091), t.e(55431), t.e(77216), t.e(39760), t.e(94923), t.e(60734), t.e(5753), t.e(64124), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				vn = fe().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(37574), t.e(10108), t.e(16339), t.e(60091), t.e(60734), t.e(69088), t.e(64124), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var Cn = ({
					userIsAuthed: A
				}) => {
					sn(), cn(), (0, _n.y)();
					const {
						devPanelEnabled: D
					} = un();
					return gn({
						containerId: En,
						gtmFeatureFlag: !!(0, Qt.Z)("dx-enable-google-tag-manager")
					}), fn({
						isDev: !1,
						gtmFeatureFlag: !!(0, Qt.Z)("dx-enable-google-tag-manager")
					}), fe().createElement(Le.Suspense, {
						fallback: fe().createElement(on, null)
					}, fe().createElement(ae.Switch, null, !A && !0 && fe().createElement(ae.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, fe().createElement(vn, null)), fe().createElement(ae.Route, {
						render: () => fe().createElement(Ue.ZC, {
							minHeight: "100vh"
						}, fe().createElement(yn, null))
					})), D && fe().createElement(nn, null))
				},
				kt = t("../../../../node_modules/yup/es/index.js"),
				hn = t("../../../common/util/types/src/utils/index.ts");
			const Xt = {
				cfEmail: () => kt.Z_().email((0, ot.ZP)("common.validation.email")).required((0, ot.ZP)("common.validation.email")),
				cfPassword: () => kt.Z_().required((0, ot.ZP)("common.validation.required"))
			};
			(0, hn.Yd)(Xt).forEach(A => {
				kt.kM(kt.Z_, A, Xt[A])
			});
			const Jt = fe().lazy(() => Promise.all([t.e(10008), t.e(94012), t.e(6368), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx"))),
				bn = () => {
					const A = (0, Lt.$8)(),
						[D, G] = (0, Le.useState)(A ? Jt : fe().Fragment),
						[q, de] = (0, Le.useState)((0, P.Yc)());
					(0, Le.useEffect)(() => {
						(0, P.fF)(() => de((0, P.Yc)()))
					}, []);
					const he = ye => {
						de(ye), (0, P.C8)(ye), document.cookie = `dark-mode=${ye};Path=/;Max-Age=31536000`
					};
					return (0, Le.useEffect)(() => {
						G(A ? Jt : fe().Fragment)
					}, [A]), (0, Le.useEffect)(() => {
						const ye = () => he(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", ye), () => {
							window.removeEventListener("storage", ye)
						}
					}, []), fe().createElement(Le.Suspense, {
						fallback: null
					}, fe().createElement(ge.Provider, {
						store: (0, c.bh)()
					}, fe().createElement(ae.Router, {
						history: ce
					}, fe().createElement(D, null, fe().createElement(Wt.Z, {
						renderer: Gt()
					}, fe().createElement($t, null, fe().createElement(Kt.Z, {
						sentryTag: "Root"
					}, fe().createElement(L.J$, {
						value: {
							fetcher: ye => fetch(ye).then(xe => xe.json())
						}
					}, fe().createElement(Ot, null), fe().createElement(Xe, null), fe().createElement(At.Z_, {
						onDarkModeChangeCb: he
					}, fe().createElement(be.ZP, null, fe().createElement(Cn, {
						userIsAuthed: A
					}))), fe().createElement(Ht.ZP, null), fe().createElement(H.F0, null)))))))))
				},
				Tn = () => {
					(0, ue.render)(fe().createElement(bn, null), document.getElementById("react-app"))
				};
			var dt = t("../utils/initSparrow.ts"),
				It = t("../utils/zaraz.ts");
			const On = () => {
					const A = (0, mt.PR)((0, c.bh)().getState());
					An(), (0, dt.Ug)(), (0, It.bM)(), (A == null ? void 0 : A.id) && N().setUserId(A == null ? void 0 : A.id), (0, dt.yV)(), !(0, dt.Wi)() && (0, dt.IM)(), A ? (0, It.yn)(A) : (0, It.Ro)()
				},
				An = () => {
					var A, D;
					(A = window) === null || A === void 0 || (D = A.OneTrust) === null || D === void 0 || D.OnConsentChanged(() => {
						const G = (0, mt.PR)((0, c.bh)().getState());
						(0, dt.Wi)() ? (N().setEnabled(!0), (G == null ? void 0 : G.id) ? (N().setUserId(G.id), (0, It.yn)(G)) : (0, It.Ro)(), (0, dt.yV)()) : (N().setEnabled(!1), (0, dt.IM)())
					})
				};

			function In(A) {
				for (var D = 1; D < arguments.length; D++) {
					var G = arguments[D] != null ? Object(arguments[D]) : {},
						q = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(G).filter(function(de) {
						return Object.getOwnPropertyDescriptor(G, de).enumerable
					})), q.forEach(function(de) {
						Pn(A, de, G[de])
					})
				}
				return A
			}

			function Pn(A, D, G) {
				return D = Ln(D), D in A ? Object.defineProperty(A, D, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[D] = G, A
			}

			function Ln(A) {
				var D = Dn(A, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function Dn(A, D) {
				if (typeof A != "object" || A === null) return A;
				var G = A[Symbol.toPrimitive];
				if (G !== void 0) {
					var q = G.call(A, D || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(A)
			}
			const Sn = "init",
				qt = (A, D) => {
					r.$e(function(G) {
						G.setTag(Sn, D), r.Tb(A)
					}), X(A)
				},
				Rt = async (A, D) => {
					try {
						return await A(), !0
					} catch (G) {
						return qt(G, D), !1
					}
				};
			(async () => {
				try {
					var A, D, G;
					t.g.build = In({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "aeb2e67c0b7e30016492915b9668107d92e644fc",
						dashVersion: "29435815",
						env: "production",
						builtAt: 1733224808076,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, Ie.p)()
					}), nt();
					const q = [{
						fn: () => t.e(4374).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => C(ce),
						tag: "hashScroll"
					}, {
						fn: ie.Z,
						tag: "styles"
					}, {
						fn: Se,
						tag: "mfePreviewData"
					}];
					for (const at of q)
						if (!await Rt(at.fn, at.tag)) return;
					let de;
					if (!await Rt(async () => {
							de = await Qe()
						}, "bootstrap")) return;
					const he = (0, c.bh)(),
						ye = ((A = de) === null || A === void 0 ? void 0 : A.data) || {};
					he.dispatch((0, a.mW)("user", ye == null ? void 0 : ye.user));
					const xe = (D = de) === null || D === void 0 || (G = D.data) === null || G === void 0 ? void 0 : G.user;
					return t.g.bootstrap = de, xe && xe.id && B(xe.id), !await Rt(lt, "gates") || !await Rt(On, "tracking") ? void 0 : Tn()
				} catch (q) {
					qt(q, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				d = t("../react/app/redux/index.ts"),
				f = t("../react/common/selectors/userSelectors.ts"),
				l = t("../react/common/selectors/zoneSelectors.ts"),
				_ = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/common/utils/isGuards.ts"),
				p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				b = t.n(p);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(c) {
					for (var s = 1; s < arguments.length; s++) {
						var u = arguments[s];
						for (var g in u) Object.prototype.hasOwnProperty.call(u, g) && (c[g] = u[g])
					}
					return c
				}, n.apply(this, arguments)
			}
			const r = c => {
				function s(u) {
					const g = (0, d.UM)(),
						C = (0, p.useHistory)(),
						T = (0, p.useLocation)(),
						P = (0, p.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						w = (0, d.p4)(f.PR) || null,
						v = (0, d.p4)(l.nA) || null,
						h = (0, d.p4)(_.uF),
						I = h ? h.account : null;
					if (!P) return null;
					const {
						accountId: R,
						app: W,
						tab: V
					} = P.params, ee = P.params.zoneName && ((0, i.v5)(P.params.zoneName) || P.params.zoneName.indexOf(".") > 0) ? P.params.zoneName : void 0;
					return o().createElement(c, n({
						dispatch: g,
						history: C,
						location: T,
						match: P,
						user: w,
						membership: R ? h : null,
						account: R ? I : null,
						accountId: R || null,
						zone: ee ? v : null,
						zoneName: ee || null,
						app: ee ? W : null,
						tab: ee ? V : null
					}, u))
				}
				return s.displayName = `withEntities(${a(c)})`, s
			};

			function a(c) {
				return c.displayName || c.name || "Component"
			}
			E.Z = r
		},
		"../react/app/components/DeepLink/actions.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				BQ: function() {
					return p
				},
				Bh: function() {
					return _
				},
				CM: function() {
					return b
				},
				MF: function() {
					return o
				},
				TS: function() {
					return a
				},
				WF: function() {
					return l
				},
				Wz: function() {
					return n
				},
				bk: function() {
					return i
				},
				fj: function() {
					return r
				},
				r4: function() {
					return f
				},
				zq: function() {
					return d
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
				d = (0, e.R)(o.ADD_SITE, c => ({
					payload: c
				})),
				f = (0, e.R)(o.RESOLVING_START),
				l = (0, e.R)(o.RESOLVING_COMPLETE),
				_ = (0, e.R)(o.SELECT_ZONE, c => ({
					payload: c
				})),
				i = (0, e.R)(o.SELECT_ACCOUNT, c => ({
					payload: c
				})),
				p = (0, e.R)(o.SELECT_PAGES_PROJECT, c => ({
					payload: c
				})),
				b = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, c => ({
					payload: c
				})),
				n = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, c => ({
					accountIds: c
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				a = (0, e.R)(o.SELECT_WORKER, c => ({
					payload: c
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				BV: function() {
					return e
				},
				Dz: function() {
					return b
				},
				Fj: function() {
					return f
				},
				Kt: function() {
					return _
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
					return d
				},
				s$: function() {
					return i
				}
			});
			const e = "to",
				o = "_gl",
				d = "freeTrial",
				f = "deepLinkQueryParams",
				l = "resolvedDeepLinkQueryParams",
				_ = "add",
				i = "multiSkuProducts",
				p = "/:account/billing/checkout",
				b = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return V
				},
				U: function() {
					return i.U
				},
				dd: function() {
					return i.dd
				},
				bk: function() {
					return _.bk
				},
				Bh: function() {
					return _.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../react/app/redux/index.ts"),
				d = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = t("../react/app/components/DeepLink/utils.ts"),
				l = t("../react/utils/bootstrap.ts"),
				_ = t("../react/app/components/DeepLink/actions.ts"),
				i = t("../react/app/components/DeepLink/selectors.ts"),
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				b = t.n(p);

			function n(ee) {
				for (var j = 1; j < arguments.length; j++) {
					var ne = arguments[j] != null ? Object(arguments[j]) : {},
						te = Object.keys(ne);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(ne).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(ne, Y).enumerable
					})), te.forEach(function(Y) {
						r(ee, Y, ne[Y])
					})
				}
				return ee
			}

			function r(ee, j, ne) {
				return j = a(j), j in ee ? Object.defineProperty(ee, j, {
					value: ne,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ee[j] = ne, ee
			}

			function a(ee) {
				var j = c(ee, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function c(ee, j) {
				if (typeof ee != "object" || ee === null) return ee;
				var ne = ee[Symbol.toPrimitive];
				if (ne !== void 0) {
					var te = ne.call(ee, j || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(ee)
			}
			class s {
				constructor(j, ne) {
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
							le = {
								actionType: Y,
								startTime: 0
							};
						return {
							start: (X = Y) => {
								const ie = this.resolvers.get(te);
								le.actionType = X, le.startTime = Date.now(), ie && ie.userActions.push(le)
							},
							finish: (X = Y) => {
								le.actionType = X, le.endTime = Date.now()
							},
							cancel: (X = Y) => {
								le.actionType = X, le.endTime = Date.now(), this.resolverCancel(te)
							}
						}
					}), this.deepLink = j, this.legacyDeepLink = ne, this.resolvers = new Map
				}
				track(j) {
					try {
						if (this._done) return;
						this._done = !0;
						const ne = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: u(this.startTime, this.endTime),
								totalCpuTime: u(this.startTime, this.endTime)
							},
							te = this.resolvers.size === 0 ? ne : Array.from(this.resolvers.values()).reduce((Y, le) => {
								const X = u(le.startTime, le.endTime),
									ie = le.userActions.reduce((Q, k) => {
										const K = u(k.startTime, k.endTime);
										return {
											totalTime: Q.totalTime + K,
											actions: Q.actions.set(k.actionType, K)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									z = X - ie.totalTime;
								return n({}, Y, {
									totalTime: Y.totalTime + X,
									totalUserActionsTime: Y.totalUserActionsTime + ie.totalTime,
									totalCpuTime: Y.totalCpuTime + z,
									[`${le.name}ResolverTotalTime`]: X,
									[`${le.name}ResolverTotalCpuTime`]: z,
									[`${le.name}ResolverTotalUserActionsTime`]: ie.totalTime
								}, Array.from(ie.actions.keys()).reduce((Q, k) => n({}, Q, {
									[`${le.name}Resolver/${k}`]: ie.actions.get(k)
								}), {}))
							}, n({}, ne, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						b().sendEvent(j, te)
					} catch (ne) {
						console.error(ne)
					}
				}
			}

			function u(ee = Date.now(), j = Date.now()) {
				return (j - ee) / 1e3
			}
			var g = t("../react/app/components/DeepLink/constants.ts"),
				C = t("../react/common/hooks/useCachedState.ts"),
				T = t("../react/common/hooks/usePrevious.ts");

			function P(ee) {
				for (var j = 1; j < arguments.length; j++) {
					var ne = arguments[j] != null ? Object(arguments[j]) : {},
						te = Object.keys(ne);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(ne).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(ne, Y).enumerable
					})), te.forEach(function(Y) {
						w(ee, Y, ne[Y])
					})
				}
				return ee
			}

			function w(ee, j, ne) {
				return j = v(j), j in ee ? Object.defineProperty(ee, j, {
					value: ne,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ee[j] = ne, ee
			}

			function v(ee) {
				var j = h(ee, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function h(ee, j) {
				if (typeof ee != "object" || ee === null) return ee;
				var ne = ee[Symbol.toPrimitive];
				if (ne !== void 0) {
					var te = ne.call(ee, j || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(ee)
			}
			var R = ({
					children: ee
				}) => {
					const j = (0, o.TZ)(),
						ne = (0, d.useHistory)(),
						te = (0, T.Z)(ne.location.pathname),
						Y = (0, o.p4)(i.dd),
						[le, X] = (0, e.useState)(!0),
						[ie, z] = (0, C.j)(void 0, {
							key: g.Fj
						}),
						[Q, k] = (0, C.j)(void 0, {
							key: g.O5
						}),
						[K, Z] = (0, C.j)(void 0, {
							key: g.s$
						}),
						oe = (0, l.$8)();
					let ce = new URLSearchParams(ne.location.search);
					const x = (0, f.mL)(ne.location.pathname, ce);
					let y = null,
						M = null;
					if (ce.has(g.Tc) && ce.delete(g.Tc), ce.get(g.BV)) y = ce.get(g.BV), ne.location.hash && (M = ne.location.hash);
					else if (ie) {
						const U = new URLSearchParams(ie);
						U.get(g.BV) && (y = U.get(g.BV), ce = U)
					} else x && (ce.set(g.BV, x), y = x);
					if (y && g._h.test(y)) {
						const U = ce.getAll(g.Kt),
							$ = JSON.stringify(U);
						U.length && $ !== K && Z($), ce.has(g.Tc) && ce.delete(g.Tc), ce.delete(g.Kt)
					}!oe && ie === void 0 && y && z(ce.toString());
					const S = async () => {
						try {
							if ((0, f.I3)(y) && oe && !Y) {
								ie && z(void 0), j.dispatch((0, _.r4)()), X(!0), y && y !== Q && k(y);
								const U = await (0, f.py)(y, X, j, ne, te, new s(y, x ? `${ne.location.pathname}${ne.location.search}` : void 0));
								ce.delete(g.BV);
								const $ = ce.toString();
								ne.replace(P({}, ne.location, {
									pathname: U,
									search: $
								}, M ? {
									hash: M
								} : {})), j.dispatch((0, _.WF)())
							}
						} catch (U) {
							j.dispatch((0, _.WF)()), console.error(U)
						} finally {
							X(!1)
						}
					};
					return (0, e.useEffect)(() => {
						S()
					}, [ne.location.pathname, ne.location.search, Y]), (le || (0, f.I3)(y)) && oe ? null : ee
				},
				W = t("../react/app/components/DeepLink/reducer.ts"),
				V = R
		},
		"../react/app/components/DeepLink/reducer.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				E: function() {
					return f
				},
				r: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				d = t("../react/app/components/DeepLink/actions.ts");
			const f = null,
				l = o().from({
					lastAction: f,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function _(i = l, p) {
				if (p.type === d.MF.RESOLVING_COMPLETE) return l;
				if (p.type === d.MF.RESOLVING_START) return i.set("isResolving", !0);
				if (i.isResolving) {
					if (p.type === d.MF.RESOLVING_COMPLETE) return i.set("isResolving", !1);
					if (p.type === d.MF.SET_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", p.accountIds);
					if (p.type === d.MF.DELETE_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", void 0);
					{
						let b = i;
						try {
							b = i.set("lastAction", p)
						} catch {
							b = i.set("lastAction", {
								type: p.type
							})
						}
						return b
					}
				} else return i
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return d
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
				d = f => f.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				I3: function() {
					return c
				},
				X1: function() {
					return r
				},
				mL: function() {
					return T
				},
				py: function() {
					return C
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/components/DeepLink/reducer.ts"),
				d = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const f = P => P.replace(d.default.endsWithSlash, ""),
				l = P => {
					const w = f(P).split("/").slice(3);
					return w.length ? "/" + w.join("/") : ""
				},
				_ = P => {
					const w = f(P).split("/").slice(2);
					return w.length ? `apps/${w.join("/")}` : "apps"
				};
			var i = t("../react/app/components/DeepLink/selectors.ts"),
				p = t("../react/app/components/DeepLink/constants.ts"),
				b = t("../react/common/validators/index.js"),
				n = t("../react/common/utils/isGuards.ts");
			const r = P => (0, b.Lb)(P) && (P.split(".").length > 1 || (0, n.v5)(P)),
				a = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				c = P => typeof P == "string" && P.startsWith("/"),
				s = (P, w) => v => new Promise((h, I) => {
					w.start();
					const R = P.subscribe(() => {
						const W = (0, i.yI)(P.getState());
						W === o.E ? (w.cancel(), R(), I("DeepLink: waitForAction out of context.")) : v(W) && (w.finish(W.type), R(), h(W))
					})
				}),
				u = (P, w, v) => (h, I) => new Promise((R, W) => {
					v.start();
					const V = w.location.pathname;
					h = new URL(h, window.location.href).pathname, V !== h && (v.cancel(), W(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${h}", but on "${V}". You need to redirect to "${h}", and unblockRouter in your Resolver, before you use this function.`));
					const ee = P.subscribe(() => {
						const j = (0, i.yI)(P.getState()),
							ne = w.location.pathname,
							Y = new URLSearchParams(w.location.search).get(p.BV);
						(ne !== h || !!Y) && (v.cancel(), ee(), W(`DeepLink: waitForPageAction user navigated away from "${h}" to "${ne}${Y?w.location.search:""}"`)), j === o.E ? (v.cancel(), ee(), W("DeepLink: waitForPageAction out of context.")) : I(j) && (v.finish(j.type), ee(), R(j))
					})
				});

			function g(P) {
				const w = [],
					v = P.split("?")[0].split("/");
				for (let h of v) h.length !== 0 && (h.startsWith(":") ? w.push({
					value: h.substring(1),
					type: "dynamic"
				}) : w.push({
					value: h,
					type: "static"
				}));
				return w
			}
			async function C(P, w, v, h, I, R) {
				R.start();
				const W = g(P),
					ee = await (await Promise.all([t.e(32375), t.e(72019), t.e(78839), t.e(60091), t.e(94923), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					j = {};
				let ne = "";
				for (const [te, Y] of W.entries())
					if (Y.type === "static") ne = [ne, Y.value].join("/");
					else if (Y.type === "dynamic" && a.is(Y.value) && Y.value in ee) {
					R.resolverStart(Y.value);
					const le = await ee[Y.value]({
						deepLink: P,
						blockRouter: () => w(!0),
						unblockRouter: () => w(!1),
						routerHistory: h,
						resolvedValues: j,
						store: v,
						referringRoute: I,
						uri: {
							currentPartIdx: te,
							parts: W
						},
						waitForAction: s(v, R.createUserActionTracker(Y.value)),
						waitForPageAction: u(v, h, R.createUserActionTracker(Y.value))
					});
					R.resolverDone(Y.value), ne = [ne, le].join("/"), j[Y.value] = le
				} else throw R.cancel(), new Error(`DeepLink: Resolver with name '${Y.value}' is not supported.`);
				return R.done(), ne
			}

			function T(P, w) {
				const v = ":account",
					h = ":zone",
					I = w.get("zone");
				if (I) return w.delete("zone"), `/${v}/${h}/${I}`;
				const R = w.get("account");
				if (R) return w.delete("account"), `/${v}/${R}`;
				if (P === "/overview") return `/${v}/${h}`;
				if (P === "/apps") return `/${v}/${h}/${_(P)}`;
				const W = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const V of W) {
					const ee = V.length;
					if (P.startsWith(V) && (P.length === ee || P[ee] === "/")) return `/${v}/${h}${P}`
				}
				switch (P) {
					case "/account/billing":
						return `/${v}/billing`;
					case "/account/subscriptions":
						return `/${v}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${v}/dns-firewall`;
					case "/account/audit-log":
						return `/${v}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				d = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				f = t("../react/app/components/SomethingWrong.jsx"),
				l = t("../utils/sentry/lastSentEventId.ts"),
				_ = t("../react/utils/zaraz.ts"),
				i = t("../react/utils/url.ts");
			const p = ({
				sentryTag: b,
				children: n
			}) => o().createElement(d.SV, {
				beforeCapture: r => {
					b && r.setTag("errorBoundary", b), _.tg === null || _.tg === void 0 || _.tg.track("page-error", {
						page: (0, i.Fl)(window.location.pathname)
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
					const c = l.e.getEventId() || a;
					return o().createElement(f.Z, {
						type: "page",
						error: r,
						eventId: c
					})
				}
			}, n);
			E.Z = p
		},
		"../react/app/components/Footer.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return x
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				d = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				_ = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				b = t.n(p),
				n = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				r = t("../react/common/components/Apple/utils.tsx"),
				a = t("../react/utils/translator.tsx"),
				c = t("../../../../node_modules/moment/moment.js"),
				s = t.n(c);
			const u = () => {
					const y = s()().format("YYYY"),
						M = S => {
							b().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: S
							})
						};
					return o().createElement(g, {
						marginTop: "auto"
					}, o().createElement(C, null, o().createElement(T, null, o().createElement(P, null, "\xA9 ", y, " Cloudflare, Inc."), o().createElement(P, null, o().createElement(w, null, o().createElement(v, {
						showOnDeskTop: !1
					}, o().createElement(h, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => M("Support")
					}, o().createElement(a.cC, {
						id: "common.support"
					}))), o().createElement(v, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => M("Privacy Policy")
					}, o().createElement(a.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(v, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => M("Terms of Use")
					}, o().createElement(a.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(v, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => M("Cookie Preferences")
					}, o().createElement(a.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(v, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => M("Trademark")
					}, o().createElement(a.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(w, null, o().createElement(v, null, o().createElement(h, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => M("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(a.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				g = (0, _.createComponent)(({
					theme: y,
					marginTop: M
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: M
				})),
				C = (0, _.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				T = (0, _.createComponent)(({
					theme: y
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${y.space[3]}px`
					}
				})),
				P = (0, _.createComponent)(({
					theme: y
				}) => ({
					width: "100%",
					color: y.colors.white,
					fontSize: y.fontSizes[1],
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
				w = (0, _.createComponent)(({
					theme: y
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: y.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				v = (0, _.createComponent)(({
					showOnDeskTop: y = !0,
					theme: M
				}) => ({
					color: M.colors.white,
					fontSize: M.fontSizes[1],
					height: "20px",
					display: y ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: M.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: M.space[3],
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
				h = (0, _.createStyledComponent)(({
					theme: y
				}) => ({
					textDecoration: "none",
					color: y.colors.white,
					"&:hover": {
						color: y.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var I = u,
				R = t("../react/common/hooks/useGate.ts"),
				W = t("../react/pages/welcome/routes.ts"),
				V = t("../react/utils/cookiePreferences.ts"),
				ee = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				ne = () => {
					const [y, M] = (0, e.useState)(!1), S = (0, V.wV)(), U = () => {
						M(!0)
					}, $ = () => {
						M(!1)
					}, me = S && S === "US" ? (0, a.ZP)("footer.cpra_cta.privacy_choices") : (0, a.ZP)("footer.cpra_cta.cookie_preferences"), Te = {
						background: "transparent",
						borderRadius: "none",
						color: y ? (0, i.Yc)() ? "#ee730a" : "#003681" : (0, i.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: y ? "underline" : "none",
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
					return o().createElement(l.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: Te,
						onMouseEnter: U,
						onMouseLeave: $
					}, o().createElement(l.Ei, {
						height: 15,
						src: ee,
						mr: 2,
						alt: me
					}), me)
				};

			function te() {
				return te = Object.assign ? Object.assign.bind() : function(y) {
					for (var M = 1; M < arguments.length; M++) {
						var S = arguments[M];
						for (var U in S) Object.prototype.hasOwnProperty.call(S, U) && (y[U] = S[U])
					}
					return y
				}, te.apply(this, arguments)
			}

			function Y(y, M) {
				if (y == null) return {};
				var S = le(y, M),
					U, $;
				if (Object.getOwnPropertySymbols) {
					var me = Object.getOwnPropertySymbols(y);
					for ($ = 0; $ < me.length; $++) U = me[$], !(M.indexOf(U) >= 0) && (!Object.prototype.propertyIsEnumerable.call(y, U) || (S[U] = y[U]))
				}
				return S
			}

			function le(y, M) {
				if (y == null) return {};
				var S = {},
					U = Object.keys(y),
					$, me;
				for (me = 0; me < U.length; me++) $ = U[me], !(M.indexOf($) >= 0) && (S[$] = y[$]);
				return S
			}
			const X = 24,
				ie = (0, _.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,i.Yc)()?i.rS.colors.orange[6]:i.rS.colors.blue[4]}`
					}
				}), l.A),
				z = (0, _.createStyledComponent)(({
					theme: y
				}) => ({
					color: y.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, n.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: y.colors.gray[4]
					}
				}), l.A),
				Q = y => {
					let {
						onClick: M
					} = y, S = Y(y, ["onClick"]);
					return o().createElement(ie, te({
						onClick: U => {
							b().sendEvent("navigate footer nav", {
								destinationPage: S.href
							}), M && M(U)
						}
					}, S))
				},
				k = y => {
					let {
						children: M,
						target: S,
						rel: U
					} = y, $ = Y(y, ["children", "target", "rel"]);
					return o().createElement(Q, te({
						target: S || "_blank",
						rel: U || "noopener noreferrer"
					}, $), M, o().createElement(f.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				},
				K = y => {
					let {
						children: M,
						target: S,
						rel: U
					} = y, $ = Y(y, ["children", "target", "rel"]);
					return o().createElement(z, te({
						target: S || "_blank",
						rel: U || "noopener noreferrer"
					}, $), M)
				},
				Z = (0, _.createStyledComponent)(({
					theme: y
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
							fontSize: y.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: y.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), l.Ul),
				oe = (0, _.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, n.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), l.ZC);
			var x = () => {
				var y, M;
				const S = [W.d.root.pattern].some(Ie => (0, d.matchPath)(location.pathname, {
						path: Ie
					})),
					U = location.pathname === "/sign-up",
					$ = (0, R.Z)("dx-footer-simplify") === "experiment",
					me = (0, R.Z)("prg-signup-next-steps-experiment") === "experiment" && U;
				if ((0, r.PP)()) return o().createElement(I, null);
				if (S) return null;
				const Te = new Date().getFullYear();
				return o().createElement(l.$_, te({
					height: (0, n.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: $ ? "19px" : 4,
					pb: 0,
					px: [4, 3, 3],
					mt: me ? 0 : "auto"
				}, me && $ && {
					height: "10vh"
				}), $ ? o().createElement(oe, null, o().createElement(Z, null, o().createElement(l.Li, null, o().createElement(K, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("common.support"))), o().createElement(l.Li, null, o().createElement(K, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(l.Dr, {
					textTransform: "capitalize"
				}, (0, a.ZP)("footer.system_status")))), o().createElement(l.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, a.ZP)("footer.careers"))), o().createElement(l.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos_reduced"))), o().createElement(l.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, a.ZP)("footer.security_issues"))), o().createElement(l.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))), o().createElement(l.Li, null, o().createElement(ne, null)), o().createElement(l.Li, null, o().createElement(l.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", Te, " Cloudflare, Inc.")))) : o().createElement(l.ZC, {
					display: "flex",
					flexWrap: "wrap",
					mx: "auto",
					maxWidth: "64rem"
				}, o().createElement(l.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(l.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(l.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.contact")), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.contact_support"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, a.ZP)("footer.contact_sales"))), o().createElement(l.Dd, {
					mt: 3
				}, o().createElement(l.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, o().createElement(Q, {
					"aria-label": (0, a.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${X}px`
				}, o().createElement(f.J, {
					type: "twitter",
					size: X
				})), o().createElement(Q, {
					"aria-label": (0, a.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${X}px`
				}, o().createElement(f.J, {
					type: "facebook",
					size: X
				})), o().createElement(Q, {
					"aria-label": (0, a.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${X}px`
				}, o().createElement(f.J, {
					type: "linkedin",
					size: X
				})))))), o().createElement(l.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(l.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(l.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.what_we_do")), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://www.cloudflare.com/plans"
				}, (0, a.ZP)("footer.plans"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://www.cloudflare.com/overview"
				}, (0, a.ZP)("footer.about"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://www.cloudflare.com/network-map"
				}, (0, a.ZP)("footer.network_map"))))), o().createElement(l.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(l.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(l.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.resources")), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://developers.cloudflare.com"
				}, (0, a.ZP)("footer.product_docs"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://blog.cloudflare.com"
				}, (0, a.ZP)("footer.blog"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, a.ZP)("footer.testimonials"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://partners.cloudflare.com"
				}, (0, a.ZP)("footer.hosting_partners"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://api.cloudflare.com"
				}, (0, a.ZP)("footer.api"))))), o().createElement(l.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement("div", {
					"aria-hidden": "true",
					title: `Current version: ${((y=window)===null||y===void 0||(M=y.build)===null||M===void 0?void 0:M.dashVersion)||"unknown"}`
				}), o().createElement(l.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(l.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.support")), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.help_center"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://community.cloudflare.com"
				}, (0, a.ZP)("footer.community"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://www.cloudflarestatus.com"
				}, (0, a.ZP)("footer.system_status"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://www.cloudflare.com/abuse"
				}, (0, a.ZP)("footer.trust_safety"))))), o().createElement(l.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(l.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(l.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.about_us")), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://www.cloudflare.com/people"
				}, (0, a.ZP)("footer.team"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://www.cloudflare.com/careers"
				}, (0, a.ZP)("footer.careers"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, a.ZP)("footer.press"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, a.ZP)("footer.subs_agreement"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(k, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))))), o().createElement(ne, null)))
			}
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return c
				},
				Z: function() {
					return ce
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				d = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				f = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				_ = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				p = t("../react/common/components/AccessControl/index.js"),
				b = t("../react/common/components/ButtonWithDropdown.tsx"),
				n = t("../react/common/components/Dropdown/index.tsx"),
				r = t("../react/utils/translator.tsx"),
				a = t("../react/common/hooks/useGate.ts");
			const c = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				s = () => {
					const x = (0, a.Z)("super-add-button-copy-change"),
						y = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: c.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/domains/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: c.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: c.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: c.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: c.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: c.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}];
					switch (x) {
						case "existing-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
								},
								trackingEvent: c.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...y];
						case "existing-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site_app"
								},
								trackingEvent: c.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...y];
						case "existing-site":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site"
								},
								trackingEvent: c.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...y];
						case "your-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_website_app"
								},
								trackingEvent: c.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...y];
						case "your-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_site_app"
								},
								trackingEvent: c.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...y];
						default:
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title"
								},
								trackingEvent: c.EXISTING_DOMAIN,
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
								trackingEvent: c.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/domains/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: c.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: c.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: c.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: c.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: c.ACCOUNT_MEMBERS,
								icon: "user-outline",
								url: "?to=/:account/members/invite",
								description: {
									id: "onboarding.add_product.account_member.description"
								},
								permissionCheck: "#member:edit"
							}]
					}
				},
				u = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: c.EXISTING_DOMAIN,
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
					trackingEvent: c.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/domains/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: c.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: c.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: c.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: c.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: c.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var g = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				C = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				T = t.n(C);

			function P(x) {
				for (var y = 1; y < arguments.length; y++) {
					var M = arguments[y] != null ? Object(arguments[y]) : {},
						S = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(M).filter(function(U) {
						return Object.getOwnPropertyDescriptor(M, U).enumerable
					})), S.forEach(function(U) {
						w(x, U, M[U])
					})
				}
				return x
			}

			function w(x, y, M) {
				return y = v(y), y in x ? Object.defineProperty(x, y, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[y] = M, x
			}

			function v(x) {
				var y = h(x, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function h(x, y) {
				if (typeof x != "object" || x === null) return x;
				var M = x[Symbol.toPrimitive];
				if (M !== void 0) {
					var S = M.call(x, y || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(x)
			}

			function I() {
				return I = Object.assign ? Object.assign.bind() : function(x) {
					for (var y = 1; y < arguments.length; y++) {
						var M = arguments[y];
						for (var S in M) Object.prototype.hasOwnProperty.call(M, S) && (x[S] = M[S])
					}
					return x
				}, I.apply(this, arguments)
			}

			function R(x, y) {
				if (x == null) return {};
				var M = W(x, y),
					S, U;
				if (Object.getOwnPropertySymbols) {
					var $ = Object.getOwnPropertySymbols(x);
					for (U = 0; U < $.length; U++) S = $[U], !(y.indexOf(S) >= 0) && (!Object.prototype.propertyIsEnumerable.call(x, S) || (M[S] = x[S]))
				}
				return M
			}

			function W(x, y) {
				if (x == null) return {};
				var M = {},
					S = Object.keys(x),
					U, $;
				for ($ = 0; $ < S.length; $++) U = S[$], !(y.indexOf(U) >= 0) && (M[U] = x[U]);
				return M
			}
			const V = x => {
					let {
						title: y,
						trackingEvent: M,
						icon: S,
						url: U,
						description: $,
						disabled: me
					} = x, Te = R(x, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(ee, I({
						to: !me && U || "#",
						"aria-disabled": me,
						onClick: () => {
							T().sendEvent(M, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, Te), o().createElement(f.ZC, {
						display: "flex"
					}, o().createElement(d.J, {
						type: S,
						size: 24,
						mr: 2
					}), o().createElement(f.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(f.ZC, {
						fontSize: 3
					}, o().createElement(r.cC, y)), o().createElement(f.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(r.cC, $)))))
				},
				ee = (0, _.createStyledComponent)(({
					theme: x
				}) => {
					const y = {
						cursor: "pointer",
						backgroundColor: (0, l.Yc)() ? x.colors.gray[8] : x.colors.gray[9],
						color: x.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: 16,
						py: 8,
						background: x.colors.background,
						color: x.colors.gray[2],
						fontSize: x.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': y,
						':focus-within:not([aria-disabled="true"])': P({}, y, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: x.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, g.Link);
			var j = V;

			function ne() {
				return ne = Object.assign ? Object.assign.bind() : function(x) {
					for (var y = 1; y < arguments.length; y++) {
						var M = arguments[y];
						for (var S in M) Object.prototype.hasOwnProperty.call(M, S) && (x[S] = M[S])
					}
					return x
				}, ne.apply(this, arguments)
			}

			function te(x) {
				for (var y = 1; y < arguments.length; y++) {
					var M = arguments[y] != null ? Object(arguments[y]) : {},
						S = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(M).filter(function(U) {
						return Object.getOwnPropertyDescriptor(M, U).enumerable
					})), S.forEach(function(U) {
						Y(x, U, M[U])
					})
				}
				return x
			}

			function Y(x, y, M) {
				return y = le(y), y in x ? Object.defineProperty(x, y, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[y] = M, x
			}

			function le(x) {
				var y = X(x, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function X(x, y) {
				if (typeof x != "object" || x === null) return x;
				var M = x[Symbol.toPrimitive];
				if (M !== void 0) {
					var S = M.call(x, y || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(x)
			}

			function ie(x, y) {
				if (x == null) return {};
				var M = z(x, y),
					S, U;
				if (Object.getOwnPropertySymbols) {
					var $ = Object.getOwnPropertySymbols(x);
					for (U = 0; U < $.length; U++) S = $[U], !(y.indexOf(S) >= 0) && (!Object.prototype.propertyIsEnumerable.call(x, S) || (M[S] = x[S]))
				}
				return M
			}

			function z(x, y) {
				if (x == null) return {};
				var M = {},
					S = Object.keys(x),
					U, $;
				for ($ = 0; $ < S.length; $++) U = S[$], !(y.indexOf(U) >= 0) && (M[U] = x[U]);
				return M
			}
			const Q = "GLOBAL_ADD_DROPDOWN",
				k = ({
					disableProducts: x
				}) => {
					const y = s(),
						M = (0, a.Z)("dashon-18-reduced-add-button-on-mobile") === "experiment" && (0, i.tq)();
					return o().createElement(K, {
						role: "group",
						"data-testid": Q
					}, o().createElement(n.Lt, {
						trigger: o().createElement(Z, null, o().createElement(d.J, {
							label: "plus",
							type: "plus"
						}), !M && o().createElement(o().Fragment, null, o().createElement(r.cC, {
							id: "common.add"
						}), " ", o().createElement(d.J, {
							label: "arrow",
							type: "caret-down"
						}))),
						menu: o().createElement(b.v2, {
							overflow: "auto",
							maxHeight: "80vh",
							width: "min(50vw, 340px)",
							whiteSpace: "normal",
							mr: 1,
							p: "8px 0",
							bottom: "auto",
							zIndex: 1200
						}, y.map(S => {
							const U = S || {},
								{
									disableOn: $,
									permissionCheck: me
								} = U,
								Te = ie(U, ["disableOn", "permissionCheck"]),
								Ie = $ && x[$],
								Ae = te({}, Te, {
									disabled: Ie
								});
							return me ? o().createElement(p.Z, {
								key: S.title.id,
								edit: me
							}, ({
								isEditable: N
							}) => N && o().createElement(j, Ae)) : o().createElement(j, ne({
								key: S.url
							}, Ae))
						}))
					}))
				},
				K = (0, _.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				Z = (0, _.createStyledComponent)(({
					theme: x
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: x.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, l.Yc)() ? x.colors.gray[1] : x.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, l.Yc)() ? x.colors.gray[8] : x.colors.gray[9]
					}
				}), f.zx);
			var oe = k,
				ce = oe
		},
		"../react/app/components/LoadingSuspense.tsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				d = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				f = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../react/utils/translator.tsx"),
				_ = t("../react/app/components/ErrorStatus.tsx"),
				i = t("../react/common/components/EmptyPage.jsx"),
				p = t("../react/common/hooks/suspenseHelpers.ts");

			function b(a) {
				const [c, s] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const u = window.setTimeout(() => s(!0), a);
					return () => window.clearTimeout(u)
				}, []), c
			}
			const n = ({
					loadingTimeout: a = 1e3,
					stillLoadingTimeout: c = 9e3
				}) => {
					const s = b(a),
						u = b(c);
					if ((0, p.nW)(), !s && !u) return o().createElement(i.Z, null);
					const g = u ? o().createElement(l.cC, {
						id: "common.still_loading"
					}) : s ? o().createElement(l.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(_.Z, {
						size: 5
					}, o().createElement(f.ZC, {
						mr: 3
					}, o().createElement(d.g, {
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
		"../react/app/components/Persistence/api.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				C8: function() {
					return p
				},
				dr: function() {
					return l
				},
				lt: function() {
					return _
				},
				m6: function() {
					return n
				},
				n: function() {
					return b
				},
				yl: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const d = "/persistence/user",
				f = async () => {
					try {
						return await (await e.get(d, {
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
					} catch (a) {
						console.error(a)
					}
				}, _ = async (r, a) => {
					try {
						return await (await e.post(`${d}/favorites`, {
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
				}, i = async (r, a) => {
					try {
						return await http.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
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
						return await (await e.post(d, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (a) {
						console.error(a)
					}
				}, b = async r => {
					try {
						return await (await e.post(`${d}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, n = async r => {
					try {
						return await (await e.post(`${d}/viewed-changes`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						throw console.error(a), a
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				Wl: function() {
					return b
				},
				lp: function() {
					return g
				},
				Z_: function() {
					return T
				},
				r7: function() {
					return ee
				},
				Tv: function() {
					return z
				},
				yZ: function() {
					return P
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				d = t("../react/app/redux/index.ts"),
				f = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(f),
				_ = t("../react/utils/bootstrap.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				p = t("../react/app/components/Persistence/api.ts");
			const b = 10;

			function n(Q) {
				for (var k = 1; k < arguments.length; k++) {
					var K = arguments[k] != null ? Object(arguments[k]) : {},
						Z = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(K).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(K, oe).enumerable
					})), Z.forEach(function(oe) {
						r(Q, oe, K[oe])
					})
				}
				return Q
			}

			function r(Q, k, K) {
				return k = a(k), k in Q ? Object.defineProperty(Q, k, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[k] = K, Q
			}

			function a(Q) {
				var k = c(Q, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function c(Q, k) {
				if (typeof Q != "object" || Q === null) return Q;
				var K = Q[Symbol.toPrimitive];
				if (K !== void 0) {
					var Z = K.call(Q, k || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(Q)
			}
			const s = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				u = n({}, s, {
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
				g = (0, e.createContext)(u),
				C = g.Consumer,
				T = ({
					children: Q,
					onDarkModeChangeCb: k
				}) => {
					const [K, Z] = (0, e.useState)(s), [oe, ce] = (0, e.useState)(u.isLoading), x = (0, _.$8)(), y = (0, d.p4)(U => (0, i.wH)(U));
					(0, e.useEffect)(() => {
						x ? (0, p.yl)().then(U => {
							U && (Z(U), k(U.darkMode))
						}).finally(() => ce(!1)) : ce(!1)
					}, [x]);
					const M = (U, $) => !!K.favorites.find(me => me.type === "zone" && me.name === U && me.accountId === $),
						S = U => K.favorites.filter(me => me.type === "zone" && me.accountId === U).length < b;
					return o().createElement(g.Provider, {
						value: n({}, K, {
							isLoading: oe,
							actions: {
								canAccountStarZone: S,
								isZoneStarred: M,
								starZone: async (U, $) => {
									var me;
									const Te = !M(U, $),
										Ie = S($);
									if (Te && !Ie) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Ae = await (0, p.lt)(U, $);
									l().sendEvent("click star zone", {
										isStarring: Te,
										totalStarredZones: Ae.filter(N => N.accountId === $ && N.type === "zone").length,
										totalZones: y == null || (me = y.paginationData) === null || me === void 0 ? void 0 : me.info.total_count
									}), Z(n({}, K, {
										favorites: Ae
									}))
								},
								setDarkMode: async U => {
									const $ = await (0, p.C8)(U);
									Z($), k($.darkMode)
								},
								logRouteVisited: async U => {
									var $;
									const me = await (0, p.n)(U);
									Z(($ = me) !== null && $ !== void 0 ? $ : n({}, K))
								},
								viewChange: async U => {
									const $ = await (0, p.m6)(U);
									Z(n({}, K, {
										viewedChanges: $
									}))
								}
							}
						})
					}, Q)
				},
				P = () => (0, e.useContext)(g);
			var w = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				v = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function h() {
				return h = Object.assign ? Object.assign.bind() : function(Q) {
					for (var k = 1; k < arguments.length; k++) {
						var K = arguments[k];
						for (var Z in K) Object.prototype.hasOwnProperty.call(K, Z) && (Q[Z] = K[Z])
					}
					return Q
				}, h.apply(this, arguments)
			}

			function I(Q, k) {
				if (Q == null) return {};
				var K = R(Q, k),
					Z, oe;
				if (Object.getOwnPropertySymbols) {
					var ce = Object.getOwnPropertySymbols(Q);
					for (oe = 0; oe < ce.length; oe++) Z = ce[oe], !(k.indexOf(Z) >= 0) && (!Object.prototype.propertyIsEnumerable.call(Q, Z) || (K[Z] = Q[Z]))
				}
				return K
			}

			function R(Q, k) {
				if (Q == null) return {};
				var K = {},
					Z = Object.keys(Q),
					oe, ce;
				for (ce = 0; ce < Z.length; ce++) oe = Z[ce], !(k.indexOf(oe) >= 0) && (K[oe] = Q[oe]);
				return K
			}
			const W = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var ee = Q => {
					let {
						isStarred: k,
						size: K = 16
					} = Q, Z = I(Q, ["isStarred", "size"]);
					const oe = W[(0, w.Yc)() ? "dark" : "light"];
					return o().createElement(v.J, h({
						type: k ? "star" : "star-outline",
						color: k ? oe.gold : oe.gray,
						size: K
					}, Z))
				},
				j = t("../node_modules/@cloudflare/elements/es/index.js");

			function ne(Q) {
				for (var k = 1; k < arguments.length; k++) {
					var K = arguments[k] != null ? Object(arguments[k]) : {},
						Z = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(K).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(K, oe).enumerable
					})), Z.forEach(function(oe) {
						te(Q, oe, K[oe])
					})
				}
				return Q
			}

			function te(Q, k, K) {
				return k = Y(k), k in Q ? Object.defineProperty(Q, k, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[k] = K, Q
			}

			function Y(Q) {
				var k = le(Q, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function le(Q, k) {
				if (typeof Q != "object" || Q === null) return Q;
				var K = Q[Symbol.toPrimitive];
				if (K !== void 0) {
					var Z = K.call(Q, k || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(Q)
			}
			const X = {
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
				featurePreview: Q = !1,
				isStarred: k,
				onClickFn: K,
				isDisabled: Z,
				testId: oe,
				buttonText: ce,
				size: x = "large"
			}, y) => {
				const M = X[(0, w.Yc)() ? "dark" : "light"][k && !Q ? "active" : "default"],
					S = ne({}, x === "large" && {
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
					innerRef: y,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: S.paddingRight,
					gap: 1,
					pl: S.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: Q || Z ? "default" : "pointer",
					backgroundColor: M.bg,
					color: M.text,
					borderColor: M.border,
					onClick: K,
					opacity: Z ? .5 : 1,
					disabled: Z,
					fontSize: S.fontSize,
					height: S.height,
					"data-testid": oe
				}, o().createElement(ee, {
					isStarred: Q ? !1 : k,
					size: S.starIconSize
				}), ce)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				d = t("../../../../node_modules/prop-types/index.js"),
				f = t.n(d),
				l = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				_ = t.n(l),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = t("../node_modules/@cloudflare/component-button/es/index.js"),
				b = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				n = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				r = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				a = t.n(r),
				c = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				u = t("../react/app/components/Footer.tsx"),
				g = t("../react/utils/url.ts");

			function C(te) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var le = arguments[Y] != null ? Object(arguments[Y]) : {},
						X = Object.keys(le);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(le).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(le, ie).enumerable
					})), X.forEach(function(ie) {
						T(te, ie, le[ie])
					})
				}
				return te
			}

			function T(te, Y, le) {
				return Y = P(Y), Y in te ? Object.defineProperty(te, Y, {
					value: le,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : te[Y] = le, te
			}

			function P(te) {
				var Y = w(te, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function w(te, Y) {
				if (typeof te != "object" || te === null) return te;
				var le = te[Symbol.toPrimitive];
				if (le !== void 0) {
					var X = le.call(te, Y || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(te)
			}
			const v = (0, i.createComponent)(({
					type: te
				}) => ({
					height: te !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				h = (0, i.createComponent)(({
					theme: te,
					margin: Y,
					size: le = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: te.colors.gray[3],
					height: Y ? "auto" : "100%",
					padding: Y ? 0 : te.space[le > 1 ? le - 2 : 0],
					margin: Y,
					justifyContent: "center",
					alignItems: "center"
				})),
				I = (0, i.createComponent)(() => ({
					textAlign: "left"
				})),
				R = (0, i.createComponent)(() => ({
					textAlign: "right"
				})),
				W = (0, i.createComponent)(({
					theme: te
				}) => ({
					fontSize: te.fontSizes[6]
				})),
				V = (0, i.createComponent)(({
					theme: te
				}) => ({
					fontSize: te.fontSizes[4]
				})),
				ee = (0, i.createComponent)(({
					theme: te
				}) => ({
					fontSize: te.fontSizes[3]
				})),
				j = (0, i.createComponent)(({
					theme: te
				}) => ({
					width: "100%",
					height: 125,
					marginTop: te.space[4],
					padding: te.space[2]
				}), "textarea");
			class ne extends o().Component {
				constructor(...Y) {
					super(...Y);
					T(this, "state", {
						value: "",
						submitted: !1
					}), T(this, "handleTextareaChange", le => {
						this.setState({
							value: le.target.value
						})
					}), T(this, "sendErrToSentry10", async () => {
						try {
							var le, X, ie, z;
							const Q = ((le = window) === null || le === void 0 || (X = le.bootstrap) === null || X === void 0 || (ie = X.data) === null || ie === void 0 || (z = ie.user) === null || z === void 0 ? void 0 : z.id) || "Unknown",
								k = this.props.eventId || b.eW(),
								K = {
									name: Q,
									email: `${Q}@userid.com`,
									comments: this.state.value,
									eventId: k,
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
						} catch (Q) {
							console.error(Q)
						}
					}), T(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), T(this, "renderContent", le => o().createElement(l.I18n, null, X => o().createElement(v, {
						type: le
					}, o().createElement(h, null, o().createElement(I, null, o().createElement(W, null, X.t("error.internal_issues")), o().createElement(V, null, X.t("error.help_us")), o().createElement(j, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: ie => this.handleTextareaChange(ie),
						disabled: this.state.submitted,
						placeholder: X.t("error.give_feedback")
					}), o().createElement(R, null, !this.state.submitted && o().createElement(p.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, X.t("common.submit")), this.state.submitted && o().createElement(ee, null, X.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const Y = this.props.error;
					console.error(`SomethingWrong: ${Y}`), n.YA("user_feedback_form_displayed", "yes"), n.YA("normalizedPath", (0, g.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: Y
					} = this.props;
					return Y === "fullscreen" ? o().createElement("div", null, o().createElement(c.h4, null, o().createElement(r.Link, {
						to: "/"
					}, o().createElement(s.TR, null))), this.renderContent(Y), o().createElement(u.Z, null)) : this.renderContent(Y)
				}
			}
			ne.propTypes = {
				type: f().oneOf(["fullscreen", "page"]),
				error: f().oneOfType([f().string, f().object]),
				eventId: f().string
			}, E.Z = ne
		},
		"../react/app/redux/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				TZ: function() {
					return d
				},
				UM: function() {
					return l
				},
				ZS: function() {
					return f
				},
				p4: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e);
			const d = () => (0, e.useStore)(),
				f = () => d().getState(),
				l = () => (0, e.useDispatch)(),
				_ = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				P1: function() {
					return b
				},
				jQ: function() {
					return i
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
				d = t("../react/pages/email/types.ts"),
				f = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				_ = t.n(l);
			const i = l.static.from([{
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
					entityType: d.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: d.BB.rule,
					idProp: "tag"
				}, {
					entityType: d.BB.rules,
					to: d.BB.rule
				}, {
					entityType: d.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: d.BB.dstAddresses,
					to: d.BB.dstAddress
				}, {
					entityType: d.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: d.BB.dnsRecords,
					to: d.BB.dnsRecord
				}, {
					entityType: d.BB.zone,
					idProp: "tag"
				}]),
				p = r => r.entities,
				b = (...r) => (0, f.P1)(i, p, ...r),
				n = (0, f.QB)(i)
		},
		"../react/app/redux/utils.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return d
				},
				_: function() {
					return o
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const o = f => (l, _, i) => (0, e.SC)(l, _, i, {
					hideErrorAlert: !0
				}).catch(f),
				d = f => l => {
					if (l.status === f) return l;
					throw l
				}
		},
		"../react/common/actionTypes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Cm: function() {
					return _
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return i
				},
				Li: function() {
					return b
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return d
				},
				Yc: function() {
					return r
				},
				gM: function() {
					return f
				},
				lV: function() {
					return l
				},
				s1: function() {
					return p
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				d = "MODAL_OPEN",
				f = "MODAL_CLOSE",
				l = "TOGGLE_ON",
				_ = "TOGGLE_OFF",
				i = "SET_ACTIVE",
				p = "CLEAR_ACTIVE",
				b = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(a) {
				return a.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", a.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", a.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", a.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", a.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", a.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", a.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", a.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", a.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", a
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AX: function() {
					return a
				},
				YT: function() {
					return b
				},
				ct: function() {
					return i
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

			function d(c) {
				for (var s = 1; s < arguments.length; s++) {
					var u = arguments[s] != null ? Object(arguments[s]) : {},
						g = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(u).filter(function(C) {
						return Object.getOwnPropertyDescriptor(u, C).enumerable
					})), g.forEach(function(C) {
						f(c, C, u[C])
					})
				}
				return c
			}

			function f(c, s, u) {
				return s = l(s), s in c ? Object.defineProperty(c, s, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[s] = u, c
			}

			function l(c) {
				var s = _(c, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function _(c, s) {
				if (typeof c != "object" || c === null) return c;
				var u = c[Symbol.toPrimitive];
				if (u !== void 0) {
					var g = u.call(c, s || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(c)
			}
			const i = c => {
					const s = c.payload.map(u => d({}, u, {
						membershipId: u.id,
						id: u.account.id
					}));
					return d({}, c, {
						payload: s
					})
				},
				p = c => {
					const s = i(c);
					return Array.isArray(s.payload) ? d({}, c, {
						payload: s.payload[0]
					}) : d({}, c, {
						payload: null
					})
				},
				b = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", i),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...c) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: c
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", p)
		},
		"../react/common/actions/modalActions.ts": function(F, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				closeModal: function() {
					return f
				},
				openModal: function() {
					return d
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function d(l, _, i = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: l,
						props: _
					},
					options: i
				}
			}

			function f(l) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: l
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				IH: function() {
					return l
				},
				Vp: function() {
					return _
				},
				ZK: function() {
					return p
				},
				um: function() {
					return i
				},
				vU: function() {
					return b
				}
			});
			var e = t("../react/common/actionTypes.ts");

			function o(n) {
				return {
					type: e.Ng,
					notification: n
				}
			}

			function d(n) {
				return {
					type: e.Cz,
					notificationId: n
				}
			}
			let f = 0;

			function l(n, r, a = {}) {
				return a = a || {},
					function(c) {
						let s = f++,
							u = {
								id: s,
								type: n,
								message: r,
								delay: a.delay,
								persist: a.persist === void 0 ? !1 : a.persist,
								closable: a.closable === void 0 ? !0 : a.closable,
								onClose() {
									c(d(s)), a.onClose && a.onClose.apply(null, arguments)
								}
							};
						c(o(u))
					}
			}

			function _(n, r) {
				return l("success", n, r)
			}

			function i(n, r) {
				return l("info", n, r)
			}

			function p(n, r) {
				return l("warning", n, r)
			}

			function b(n, r) {
				return l("error", n, r)
			}
		},
		"../react/common/actions/userActions.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				BT: function() {
					return i
				},
				Ut: function() {
					return C
				},
				V_: function() {
					return T
				},
				Y9: function() {
					return u
				},
				Z0: function() {
					return w
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

			function d(v) {
				for (var h = 1; h < arguments.length; h++) {
					var I = arguments[h] != null ? Object(arguments[h]) : {},
						R = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(I).filter(function(W) {
						return Object.getOwnPropertyDescriptor(I, W).enumerable
					})), R.forEach(function(W) {
						f(v, W, I[W])
					})
				}
				return v
			}

			function f(v, h, I) {
				return h = l(h), h in v ? Object.defineProperty(v, h, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[h] = I, v
			}

			function l(v) {
				var h = _(v, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function _(v, h) {
				if (typeof v != "object" || v === null) return v;
				var I = v[Symbol.toPrimitive];
				if (I !== void 0) {
					var R = I.call(v, h || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(v)
			}
			const i = (0, e.C)("user").get`/user`,
				p = (0, e.C)("user").patch`/user`,
				b = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				c = (0, e.C)("user").delete`/user/two_factor_authentication`,
				s = (0, e.C)("user").put`/user/email`;

			function u(...v) {
				return s(...v)
			}
			const g = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				C = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(v => d({}, v, {
					body: d({}, v.body, {
						result: {}
					})
				}))),
				T = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				P = (0, e.C)("userDetails").get`/user/details`,
				w = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				a: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e),
				d = t("../react/common/selectors/accountSelectors.ts");
			const f = _ => {
					if (typeof _ != "string") throw new Error("invalid Param Type provided");
					const i = _.slice(1).split(":");
					if (i.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: i[0],
						value: i[1]
					}
				},
				l = (_, i) => {
					const {
						resourceId: p,
						accountId: b,
						legacyPermission: n
					} = i;
					let {
						read: r,
						edit: a
					} = i;
					const c = {};
					n && (a = `#${n}:edit`, r = `#${n}:read`);
					const s = p || b;
					if (r) {
						const u = Array.isArray(r) ? r : [r];
						c.isReadable = u.some(g => {
							const C = f(g);
							return (0, d.DT)(_, s, T => !!(T[C.key] && T[C.key][C.value]))
						})
					}
					if (a) {
						const u = Array.isArray(a) ? a : [a];
						c.isEditable = u.some(g => {
							const C = f(g);
							return (0, d.DT)(_, s, T => !!(T[C.key] && T[C.key][C.value]))
						})
					}
					return c
				};
			E.Z = (0, e.connect)(l)
		},
		"../react/common/components/AccessControl/index.js": function(F, E, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				o = t.n(e),
				d = t("../react/app/HoCs/withEntities.tsx"),
				f = t("../react/common/components/AccessControl/SAAConnect.js");

			function l(r) {
				for (var a = 1; a < arguments.length; a++) {
					var c = arguments[a] != null ? Object(arguments[a]) : {},
						s = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && s.push.apply(s, Object.getOwnPropertySymbols(c).filter(function(u) {
						return Object.getOwnPropertyDescriptor(c, u).enumerable
					})), s.forEach(function(u) {
						_(r, u, c[u])
					})
				}
				return r
			}

			function _(r, a, c) {
				return a = i(a), a in r ? Object.defineProperty(r, a, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = c, r
			}

			function i(r) {
				var a = p(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function p(r, a) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var s = c.call(r, a || "default");
					if (typeof s != "object") return s;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}

			function b(r) {
				const c = ["isReadable", "isEditable"].reduce((s, u) => r.hasOwnProperty(u) ? l({}, s, {
					[u]: r[u]
				}) : s, {});
				return r.children(c)
			}
			b.propTypes = {
				resourceType: o().string,
				resourceId: o().string,
				read: o().oneOfType([o().string, o().array]),
				edit: o().oneOfType([o().string, o().array]),
				accountId: o().string,
				isReadable: o().bool,
				isEditable: o().bool,
				children: o().func
			};
			const n = (0, d.Z)((0, f.Z)(b));
			n.displayName = "AccessControl", E.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				PP: function() {
					return r
				},
				RJ: function() {
					return i
				},
				tz: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				d = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const _ = () => p.test(window.location.pathname) || d.E.has(f.Qq),
				i = () => d.E.get(f.Qq),
				p = /^\/login\/apple(\/)?/,
				n = [p, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let c = !1;
					n.forEach(u => {
						if (u.test(window.location.pathname)) {
							c = !0;
							return
						}
					});
					const s = _() && c;
					return s && (0, l.C8)(l.LF.OFF), s
				},
				a = c => {
					c && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let s = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					c && (s = s + `&jwt=${c}`), window.location.href = s
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				oG: function() {
					return s
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
				d = t("../node_modules/@cloudflare/component-button/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				_ = t.n(l),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = t("../react/common/components/Dropdown/index.tsx"),
				b = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(u) {
					for (var g = 1; g < arguments.length; g++) {
						var C = arguments[g];
						for (var T in C) Object.prototype.hasOwnProperty.call(C, T) && (u[T] = C[T])
					}
					return u
				}, n.apply(this, arguments)
			}

			function r(u, g) {
				if (u == null) return {};
				var C = a(u, g),
					T, P;
				if (Object.getOwnPropertySymbols) {
					var w = Object.getOwnPropertySymbols(u);
					for (P = 0; P < w.length; P++) T = w[P], !(g.indexOf(T) >= 0) && (!Object.prototype.propertyIsEnumerable.call(u, T) || (C[T] = u[T]))
				}
				return C
			}

			function a(u, g) {
				if (u == null) return {};
				var C = {},
					T = Object.keys(u),
					P, w;
				for (w = 0; w < T.length; w++) P = T[w], !(g.indexOf(P) >= 0) && (C[P] = u[P]);
				return C
			}
			const c = (0, i.createStyledComponent)(({
				theme: u
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${u.radii[2]}px 0 0 ${u.radii[2]}px`,
					borderRight: `1px solid ${u.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${u.radii[2]}px ${u.radii[2]}px 0`,
					paddingRight: u.space[2],
					paddingLeft: u.space[2]
				},
				"& button": {
					color: (0, b.Yc)() ? u.colors.text : void 0
				},
				"& button:hover": {
					color: (0, b.Yc)() ? u.colors.text : void 0
				}
			}));

			function s(u) {
				let {
					menu: g,
					containerProps: C,
					disabled: T,
					disabledDropdown: P = T
				} = u, w = r(u, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: v
				} = (0, l.useI18n)();
				return o().createElement(c, n({}, C, {
					role: "group"
				}), o().createElement(d.zx, n({}, w, {
					disabled: T
				})), o().createElement(p.Lt, {
					trigger: o().createElement(d.zx, {
						type: w.type,
						"aria-haspopup": "menu",
						disabled: P
					}, o().createElement(f.J, {
						type: "caret-down",
						label: v("common.more"),
						size: 12
					})),
					menu: g
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				d = t("../../../../node_modules/prop-types/index.js"),
				f = t.n(d),
				l = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const _ = ({
				children: i
			}) => o().createElement(l.xu, {
				height: 411
			}, i);
			_.propTypes = {
				children: f().node
			}, E.Z = _
		},
		"../react/common/components/ModalManager.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return s
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
				d = t("webpack/sharing/consume/default/react-redux/react-redux");
			const f = u => u.application.modals;
			var l = t("../react/common/actions/modalActions.ts"),
				_ = t("../../../../node_modules/swr/core/dist/index.mjs"),
				i = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function p() {
				return p = Object.assign ? Object.assign.bind() : function(u) {
					for (var g = 1; g < arguments.length; g++) {
						var C = arguments[g];
						for (var T in C) Object.prototype.hasOwnProperty.call(C, T) && (u[T] = C[T])
					}
					return u
				}, p.apply(this, arguments)
			}
			const b = o().createContext(null);
			class n extends o().Component {
				render() {
					const {
						modals: g,
						closeModal: C
					} = this.props;
					return o().createElement(o().Fragment, null, g.map(({
						ModalComponent: T,
						props: P = {},
						id: w
					}) => {
						const v = () => {
							typeof P.onClose == "function" && P.onClose(), C(T)
						};
						return o().createElement(b.Provider, {
							key: w,
							value: {
								closeModal: v
							}
						}, o().createElement(_.J$, {
							value: i.ZP
						}, o().createElement(T, p({}, P, {
							isOpen: !0,
							closeModal: v
						}))))
					}))
				}
			}

			function r() {
				const u = o().useContext(b);
				if (!u) throw new Error("useModalContext must be used within a ModalContext");
				return u
			}

			function a() {
				const u = (0, d.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...g) {
						return u(l.openModal(...g))
					}, [u]),
					closeModal: (0, e.useCallback)(function(...g) {
						return u(l.closeModal(...g))
					}, [u])
				}
			}
			var s = (0, d.connect)(u => ({
				modals: f(u)
			}), l)(n)
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return p
				},
				JR: function() {
					return b
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return _
				},
				ZI: function() {
					return l
				},
				if: function() {
					return o
				},
				q6: function() {
					return d
				},
				w_: function() {
					return f
				},
				zl: function() {
					return i
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				d = "date-from",
				f = "date-to",
				l = "from",
				_ = "to",
				i = "all",
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
			let b = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				n = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/constants/analytics/botScoreSrc.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				EG: function() {
					return d
				},
				Me: function() {
					return l
				},
				sk: function() {
					return f
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let d = function(_) {
				return _.NOT_COMPUTED = "not_computed", _.MACHINE_LEARNING = "machine_learning", _.HEURISTICS = "heuristics", _.BEHAVIORAL_ANALYSIS = "behavioral_analysis", _.JS_FINGERPRINTING = "js_fingerprinting", _.VERIFIED_BOT = "verified_bot", _.CLOUDFLARE_SERVICE = "cloudflare_service", _
			}({});
			const f = {
					[d.NOT_COMPUTED]: "Not Computed",
					[d.MACHINE_LEARNING]: "Machine Learning",
					[d.HEURISTICS]: "Heuristics",
					[d.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[d.JS_FINGERPRINTING]: "JS Fingerprinting",
					[d.VERIFIED_BOT]: "Verified Bot",
					[d.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				l = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [d.NOT_COMPUTED, d.MACHINE_LEARNING, d.HEURISTICS, d.BEHAVIORAL_ANALYSIS, d.JS_FINGERPRINTING, d.VERIFIED_BOT, d.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Gq: function() {
					return f
				},
				g$: function() {
					return d
				},
				WX: function() {
					return e
				},
				E0: function() {
					return b
				},
				Hw: function() {
					return _
				},
				Ed: function() {
					return l
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return c
				},
				hQ: function() {
					return i
				},
				SP: function() {
					return p
				}
			});
			let e = function(s) {
				return s.page_rules = "page_rules", s.automatic_platform_optimization = "automatic_platform_optimization", s
			}({});
			const o = "page_rules",
				d = "automatic_platform_optimization",
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
				l = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				_ = {
					currency: "USD",
					frequency: "monthly",
					requests_included: 5e5,
					ubb_price: .5,
					ubb_frequency: 5e5
				},
				i = {
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
				b = {
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
			const c = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				FP: function() {
					return e
				},
				Nl: function() {
					return l
				},
				SO: function() {
					return d
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
				d = {
					BILLING: "billing"
				},
				f = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				l = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Dk: function() {
					return c
				},
				Dy: function() {
					return s
				},
				E_: function() {
					return _
				},
				K$: function() {
					return T
				},
				Lv: function() {
					return u
				},
				S4: function() {
					return l
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return b
				},
				Y1: function() {
					return i
				},
				p6: function() {
					return p
				},
				q0: function() {
					return f
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
				d = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const f = "healthy",
				l = "degraded",
				_ = "critical",
				i = "unknown",
				p = "not-monitored",
				b = o().from({
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
					f: b.FREE,
					p: b.PRO,
					b: b.BIZ
				},
				a = "marketing-pt",
				c = () => {
					const P = d.Z.get(a);
					if (!!P) return r[P]
				},
				s = ["gov"],
				u = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				g = "banner-notification-interactions",
				C = null;
			let T = function(P) {
				return P.SUPER_ADMIN = "Super Administrator - All Privileges", P.ADMIN = "Administrator", P.ADMIN_READ_ONLY = "Administrator Read Only", P
			}({})
		},
		"../react/common/constants/index.ts": function(F, E, t) {
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
		"../react/common/hooks/suspenseHelpers.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				bt: function() {
					return i
				},
				nW: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				d = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const f = "suspenseComplete";

			function l() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(f))
				}, [])
			}

			function _(p) {
				(0, d.OR)(f, () => {
					window.setTimeout(p, 0)
				}, {
					target: window
				})
			}

			function i(...p) {
				const [b, n] = p;
				o().useLayoutEffect(b, n), _(b)
			}
		},
		"../react/common/hooks/useAccountId.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return l
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				d = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = t.n(d);

			function l() {
				var _;
				const {
					accountId: i
				} = (0, d.useParams)(), p = (0, e.p4)(o.D0);
				if (i === void 0 && !p) throw new Error("Account ID not found in URL params");
				return (_ = i) !== null && _ !== void 0 ? _ : p == null ? void 0 : p.id
			}
		},
		"../react/common/hooks/useCachedState.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				j: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				d = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function f(l, {
				key: _,
				cache: i = d.E,
				ttl: p
			} = {}) {
				var b;
				const n = _ !== void 0 && i.get(_),
					[r, a] = (0, e.useState)((b = n) !== null && b !== void 0 ? b : l);
				return [r, s => {
					a(u => (s instanceof Function && (s = s(u)), _ !== void 0 && i.set(_, s, p), s))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(F, E, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(d) {
				return (0, e.qf)(d)
			}
			E.Z = o
		},
		"../react/common/hooks/usePrevious.ts": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function d(f) {
				const l = (0, e.useRef)(f);
				return (0, e.useEffect)(() => {
					l.current = f
				}, [f]), l.current
			}
			E.Z = d
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(F, E, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function d(f) {
				return (0, e.p4)(l => (0, o.rV)(l, f))
			}
			E.Z = d
		},
		"../react/common/middleware/sparrow/errors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Uh: function() {
					return l
				},
				ez: function() {
					return f
				},
				oV: function() {
					return _
				}
			});

			function e(i, p, b) {
				return p = o(p), p in i ? Object.defineProperty(i, p, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[p] = b, i
			}

			function o(i) {
				var p = d(i, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function d(i, p) {
				if (typeof i != "object" || i === null) return i;
				var b = i[Symbol.toPrimitive];
				if (b !== void 0) {
					var n = b.call(i, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(i)
			}
			class f extends Error {
				constructor(p, b) {
					super(b);
					e(this, "eventName", void 0), this.eventName = p, this.name = "SparrowValidationError"
				}
			}
			class l extends f {
				constructor(p) {
					super(p, `Event not allowed: "${p}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class _ extends f {
				constructor(p, b) {
					super(p, `Found invalid properties on event: "${p}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = b
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AC: function() {
					return qe
				},
				Au: function() {
					return B
				},
				B: function() {
					return Ke
				},
				B3: function() {
					return Ze
				},
				BG: function() {
					return R
				},
				Bp: function() {
					return ae
				},
				D0: function() {
					return w
				},
				DT: function() {
					return S
				},
				EL: function() {
					return ce
				},
				EU: function() {
					return $
				},
				GE: function() {
					return pt
				},
				Ko: function() {
					return M
				},
				Kx: function() {
					return ee
				},
				Le: function() {
					return j
				},
				O4: function() {
					return Je
				},
				Ou: function() {
					return k
				},
				Py: function() {
					return et
				},
				QI: function() {
					return lt
				},
				RO: function() {
					return Re
				},
				T3: function() {
					return Ye
				},
				T8: function() {
					return I
				},
				UX: function() {
					return oe
				},
				VP: function() {
					return ke
				},
				Xo: function() {
					return tt
				},
				Xu: function() {
					return ie
				},
				Yi: function() {
					return ue
				},
				Yj: function() {
					return y
				},
				Zu: function() {
					return x
				},
				bC: function() {
					return me
				},
				f8: function() {
					return Y
				},
				hI: function() {
					return ge
				},
				hN: function() {
					return V
				},
				hX: function() {
					return Fe
				},
				iq: function() {
					return ze
				},
				nE: function() {
					return W
				},
				oD: function() {
					return Z
				},
				oI: function() {
					return te
				},
				oJ: function() {
					return nt
				},
				tM: function() {
					return K
				},
				uF: function() {
					return z
				},
				ut: function() {
					return Ge
				},
				vU: function() {
					return Qe
				},
				wQ: function() {
					return Ae
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				d = t.n(o),
				f = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = t.n(f),
				_ = t("../../../../node_modules/reselect/lib/index.js"),
				i = t("../../../../node_modules/moment/moment.js"),
				p = t.n(i),
				b = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				r = t("../react/common/selectors/userSelectors.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				c = t("../react/app/components/DeepLink/selectors.ts"),
				s = t("../react/common/constants/index.ts"),
				u = t("../react/common/utils/hasRole.ts");

			function g(L) {
				for (var H = 1; H < arguments.length; H++) {
					var se = arguments[H] != null ? Object(arguments[H]) : {},
						Ee = Object.keys(se);
					typeof Object.getOwnPropertySymbols == "function" && Ee.push.apply(Ee, Object.getOwnPropertySymbols(se).filter(function(be) {
						return Object.getOwnPropertyDescriptor(se, be).enumerable
					})), Ee.forEach(function(be) {
						C(L, be, se[be])
					})
				}
				return L
			}

			function C(L, H, se) {
				return H = T(H), H in L ? Object.defineProperty(L, H, {
					value: se,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[H] = se, L
			}

			function T(L) {
				var H = P(L, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function P(L, H) {
				if (typeof L != "object" || L === null) return L;
				var se = L[Symbol.toPrimitive];
				if (se !== void 0) {
					var Ee = se.call(L, H || "default");
					if (typeof Ee != "object") return Ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(L)
			}
			const w = L => {
					const H = z(L);
					return H == null ? void 0 : H.account
				},
				v = L => {
					const H = (0, r.PR)(L);
					if (H) {
						const se = H.id;
						return L.accountAccess[se] || {}
					}
					return {}
				},
				h = L => L.accountsDetailed,
				I = (0, n.P1)("accountsDetailed", h),
				R = L => L.memberships,
				W = (0, _.P1)((0, n.P1)("memberships", R), c.U, (L, H) => !!H && !!L ? L.filter(se => H.includes(se.id)) : L),
				V = L => L.accountFlags && L.accountFlags.data,
				ee = L => L.accountFlags,
				j = (L, H, se) => {
					const Ee = V(L);
					return !Ee || !Ee[H] ? null : Ee[H][se]
				},
				ne = L => L.accountFlags.isRequesting,
				te = (L, ...H) => d()(L, ["accountFlagsChanges", "data", ...H]),
				Y = L => L.accountFlagsChanges.isRequesting,
				le = (0, _.P1)(V, ee, (L, H) => ({
					data: L,
					meta: H
				})),
				X = (L, H, se) => !!(isEnterpriseSSEnabledSelector(L) && j(L, H, se)),
				ie = L => L.membership,
				z = (0, n.P1)("membership", ie),
				Q = (0, _.P1)(z, ie, (L, H) => ({
					data: L,
					meta: H
				})),
				k = L => {
					const {
						roles: H = []
					} = z(L) || {};
					return Boolean(H.find(se => se === "Super Administrator - All Privileges" || se === "Billing"))
				},
				K = L => {
					const H = [s.K$.SUPER_ADMIN];
					return (0, u.n)(L, H)
				},
				Z = L => {
					const H = v(L),
						se = fe.getMemberships(L) ? l().asMutable(fe.getMemberships(L)) : [];
					if (!!se) return l().from(se.map(Ee => g({}, Ee, {
						lastSeen: H[Ee.account.id] ? H[Ee.account.id].lastSeen : null
					})).sort((Ee, be) => Ee.lastSeen && be.lastSeen ? be.lastSeen - Ee.lastSeen : 0))
				},
				oe = L => L.filteredMemberships,
				ce = (0, n.P1)("filteredMemberships", oe),
				x = (0, _.P1)(z, L => L == null ? void 0 : L.permissions),
				y = (0, _.P1)(x, L => (0, e.Z)(H => {
					var se;
					return (se = L == null ? void 0 : L[H]) !== null && se !== void 0 ? se : {
						read: !1,
						edit: !1
					}
				})),
				M = (0, _.P1)(z, L => L == null ? void 0 : L.policies),
				S = (L, H, se) => {
					let Ee = fe.getMembership(L);
					if (!Ee) {
						const be = fe.getMemberships(L);
						if (!be || !H) return !1;
						Ee = be.find(De => De.account.id === H)
					}
					if (!Ee || !se) return !1;
					try {
						return se(Ee.permissions)
					} catch {
						return !1
					}
				},
				U = L => {
					var H, se;
					return (H = (se = w(L)) === null || se === void 0 ? void 0 : se.meta.has_pro_zones) !== null && H !== void 0 ? H : !1
				},
				$ = L => {
					var H, se;
					return (H = (se = w(L)) === null || se === void 0 ? void 0 : se.meta.has_business_zones) !== null && H !== void 0 ? H : !1
				},
				me = L => $(L) || U(L),
				Te = (L, H) => {
					const se = Ie(L, H);
					return !!se && !!se.enabled
				},
				Ie = (L, H) => {
					const se = fe.getMembership(L),
						Ee = se && se.account;
					return Ee && Ee.legacy_flags && Ee.legacy_flags[H]
				},
				Ae = L => Te(L, "custom_pages"),
				N = L => !!L && L["webhooks.webhooks.enabled"],
				pe = L => j(L, "bots", "enabled"),
				Oe = L => j(L, "billing", "annual_subscriptions_enable"),
				Re = L => L ? Boolean(j(L, "ConstellationAI", "v2_ui")) : !1,
				Fe = L => L ? Boolean(j(L, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Ke = L => L ? Boolean(j(L, "AIgateway", "enabled")) : !1,
				Ve = L => Ie(L, "enterprise_zone_quota"),
				ct = L => {
					const H = Ve(L);
					return !H || !H.available ? -1 : H.available
				},
				ze = L => L.accountMembers,
				Ze = (0, n.P1)("accountMembers", ze),
				Je = L => L.accountMember && L.accountMember.isRequesting,
				Be = L => L.accountRoles,
				qe = (0, n.P1)("accountRoles", Be),
				et = (L, H) => {
					const se = fe.getMemberships(L),
						Ee = se && se.find(Ne => Ne.account.id === H);
					if (Ee) return Ee.account.name.replace(" Account", " account");
					const be = fe.getMembership(L),
						De = be && be.account;
					return De && De.id === H ? De.name : null
				},
				Ge = (L, H) => {
					const se = fe.getMemberships(L),
						Ee = se && se.find(Ne => Ne.account.id === H);
					if (Ee) return Ee.account.settings.access_approval_expiry;
					const be = fe.getMembership(L),
						De = be && be.account;
					return De && De.id === H ? De.settings.access_approval_expiry : null
				},
				tt = (L, H) => {
					const se = Ge(L, H);
					return se ? p().utc(se).isAfter() : !1
				},
				Ye = (L, H, se) => {
					const Ee = Ge(L, H);
					let be = Ee ? p().utc(Ee) : null;
					return !be || !be.isAfter() ? "" : be && be.year() === 3e3 ? se("account.access_approval.card_expiration_forever") : se("account.access_approval.card_expiration_text", {
						expiryTimestamp: be.local().format(b.U.DateTime)
					})
				},
				nt = L => L && L.member && L.member.edit,
				B = (L, H) => {
					const se = fe.getMembership(L),
						Ee = se && se.account;
					return Ee ? Ee.id !== H : !1
				},
				J = L => L.dpa,
				_e = (0, n.P1)("dpa", J),
				Se = L => L.webhook,
				Pe = L => L.webhooks,
				we = (0, n.P1)("webhook", Pe),
				ke = L => L.accountLegoContract,
				it = (0, n.P1)("accountLegoContract", ke),
				lt = L => {
					const H = it(L);
					return (H == null ? void 0 : H.lego_state) ? H.lego_state : ""
				},
				Et = L => lt(L) === "signed",
				pt = L => ke(L).isRequesting,
				Qe = L => {
					const H = it(L);
					return H && H.subscription_type ? H.subscription_type : ""
				},
				Le = L => Qe(L) !== "",
				fe = {
					getMembership: z,
					getMemberships: W,
					getFilteredMemberships: ce,
					getAccountMembers: Ze,
					getAccountRoles: qe
				},
				ae = L => L.accountSingle,
				ue = (0, n.P1)("accountSingle", ae),
				ge = L => {
					const H = [s.K$.SUPER_ADMIN, s.K$.ADMIN];
					return (0, u.n)(L, H)
				}
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$f: function() {
					return s
				},
				AD: function() {
					return l
				},
				BF: function() {
					return c
				},
				Bs: function() {
					return w
				},
				Ci: function() {
					return x
				},
				E6: function() {
					return a
				},
				Gy: function() {
					return Ae
				},
				Hq: function() {
					return Ie
				},
				Ms: function() {
					return I
				},
				Q2: function() {
					return _
				},
				Qq: function() {
					return me
				},
				Td: function() {
					return T
				},
				Z: function() {
					return S
				},
				a: function() {
					return P
				},
				a5: function() {
					return $
				},
				du: function() {
					return p
				},
				ec: function() {
					return Y
				},
				f: function() {
					return Te
				},
				hL: function() {
					return U
				},
				ji: function() {
					return y
				},
				jo: function() {
					return R
				},
				lI: function() {
					return f
				},
				p1: function() {
					return g
				},
				pf: function() {
					return n
				},
				qR: function() {
					return C
				},
				rV: function() {
					return i
				},
				u1: function() {
					return b
				},
				w4: function() {
					return r
				},
				yD: function() {
					return M
				}
			});
			var e = t("../react/utils/url.ts");

			function o(N, pe) {
				return N && N[pe]
			}
			const d = N => !f(N).isRequesting;

			function f(N) {
				return N.entitlements.zone
			}

			function l(N) {
				return f(N).data
			}
			const _ = N => {
				var pe, Oe;
				return ((pe = f(N).paginationData) === null || pe === void 0 || (Oe = pe.options) === null || Oe === void 0 ? void 0 : Oe.editedDate) || {}
			};

			function i(N, pe) {
				const Oe = l(N);
				return Oe ? o(Oe, pe) : void 0
			}
			const p = (N, pe) => i(N, pe) === !0;

			function b(N) {
				return N.entitlements.account
			}

			function n(N) {
				return b(N).data
			}
			const r = N => {
				var pe, Oe;
				return ((pe = b(N).paginationData) === null || pe === void 0 || (Oe = pe.options) === null || Oe === void 0 ? void 0 : Oe.editedDate) || {}
			};

			function a(N) {
				return !b(N).isRequesting
			}

			function c(N, pe) {
				const Oe = n(N);
				return Oe ? o(Oe, pe) : void 0
			}

			function s(N, pe) {
				return c(N, pe) === !0
			}

			function u(N, pe) {
				return pe.every(Oe => s(N, Oe))
			}

			function g(N) {
				return s(N, "contract.customer_enabled")
			}

			function C(N) {
				return s(N, "contract.self_service_allowed")
			}

			function T(N) {
				return s(N, "billing.partners_managed")
			}
			const P = N => g(N) && C(N),
				w = N => s(N, "enterprise.ecp_allowed");

			function v(N) {
				return h(N) || s(N, "argo.allow_smart_routing") || s(N, "argo.allow_tiered_caching") || s(N, "rate_limiting.enabled") || s(N, "ctm.enabled") || s(N, "workers.enabled") || s(N, "workers.kv_store.enabled") || s(N, "stream.enabled")
			}
			const h = N => p(N, "argo.allow_smart_routing") || p(N, "argo.allow_tiered_caching"),
				I = N => s(N, "zone.cname_setup_allowed") || s(N, "zone.partial_setup_allowed") || p(N, "zone.partial_setup_allowed"),
				R = N => s(N, "argo.allow_smart_routing") || p(N, "argo.allow_smart_routing"),
				W = N => s(N, "argo.allow_tiered_caching") || p(N, "argo.allow_tiered_caching"),
				V = N => R(N) || W(N),
				ee = N => s(N, "ctm.enabled"),
				j = N => {
					const pe = c(N, "ctm.load_balancers");
					return typeof pe == "number" ? pe : 0
				},
				ne = N => {
					const pe = c(N, "ctm.pools");
					return typeof pe == "number" ? pe : 0
				},
				te = N => {
					const pe = c(N, "ctm.origins");
					return typeof pe == "number" ? pe : 0
				},
				Y = N => s(N, "workers.enabled"),
				le = N => s(N, "stream.enabled"),
				X = N => {
					const pe = c(N, "access.users_allowed");
					return typeof pe == "number" ? pe : 0
				},
				ie = N => X(N) > 0,
				z = N => {
					const pe = i(N, "dedicated_certificates");
					return typeof pe == "number" ? pe : 0
				},
				Q = N => z(N) > 0,
				k = N => {
					const pe = i(N, "rate_limiting.max_rules");
					return typeof pe == "number" ? pe : 0
				},
				K = N => s(N, "rate_limiting.enabled"),
				Z = N => {
					const pe = i(N, "page_rules");
					return typeof pe == "number" ? pe : 0
				},
				oe = N => Z(N) > 0,
				ce = N => {
					const pe = c(N, "dns_firewall.max_clusters_allowed");
					return typeof pe == "number" ? pe : 0
				},
				x = N => ce(N) > 0,
				y = N => p(N, "zone.advanced_certificate_manager") || s(N, "zone.advanced_certificate_manager"),
				M = N => i(N, "authoritative_dns.proxy_record_allowed") === !1 || c(N, "authoritative_dns.proxy_record_allowed") === !1,
				S = N => s(N, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				U = N => i(N, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				$ = N => {
					const pe = i(N, "authoritative_dns.min_record_ttl_allowed");
					return typeof pe == "number" && pe > 1 ? pe : 60
				},
				me = N => s(N, "foundation_dns.advanced_nameservers_allowed") || p(N, "foundation_dns.advanced_nameservers_allowed"),
				Te = (N, pe) => ((0, e.el)(window.location.pathname) ? i : c)(N, pe),
				Ie = N => s(N, "authoritative_dns.multi_provider_allowed") || p(N, "authoritative_dns.multi_provider_allowed"),
				Ae = N => p(N, "authoritative_dns.cname_flattening_allowed")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(F, E, t) {
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
				o = t("../../../common/intl/intl-types/src/index.ts"),
				d = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f = t("../react/utils/bootstrap.ts");
			const l = i => {
				if ((0, f.gm)()) return d.Z.set(e.ly, e.ZW), e.ZW;
				const p = i.userCommPreferences.data;
				if (p == null ? void 0 : p["language-locale"]) return (0, e.i_)(p["language-locale"]), p["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const b = (0, e.Kd)();
					return _(b) ? b : e.ZW
				}
			};

			function _(i) {
				const p = Object.keys(o.Q).find(b => o.Q[b] === i);
				return !!i && typeof i == "string" && p != null && (0, e.S8)(p)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$8: function() {
					return l
				},
				BG: function() {
					return b
				},
				BY: function() {
					return P
				},
				GP: function() {
					return s
				},
				GU: function() {
					return w
				},
				PR: function() {
					return d
				},
				h$: function() {
					return C
				},
				h8: function() {
					return n
				},
				kk: function() {
					return g
				},
				l8: function() {
					return i
				},
				mV: function() {
					return u
				},
				vW: function() {
					return _
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const o = v => v.user,
				d = (0, e.P1)("user", o),
				f = v => {
					var h;
					return (h = d(v)) === null || h === void 0 ? void 0 : h.email.endsWith("@cloudflare.com")
				},
				l = v => {
					var h;
					return !!((h = d(v)) === null || h === void 0 ? void 0 : h.id)
				},
				_ = v => {
					const h = d(v);
					if (!!h) return h.first_name && h.last_name ? `${h.first_name} ${h.last_name}` : h.email
				},
				i = v => {
					const h = d(v);
					return h && h.has_enterprise_zones
				},
				p = v => v.userCommPreferences,
				b = (0, e.P1)("userCommPreferences", p),
				n = v => {
					const h = d(v);
					return h && h.email_verified
				},
				r = v => {
					const h = b(v);
					return h && h.preferences.marketing_communication
				},
				a = v => v.userDetails,
				c = (0, e.P1)("userDetails", a),
				s = v => {
					const h = c(v);
					return h && h["2FA-RECOVERY"] === "scheduled"
				},
				u = v => {
					const h = c(v);
					return h && h["2FA-RECOVERY"] === "interrupted"
				},
				g = v => {
					const h = c(v);
					return h == null ? void 0 : h["NEW-USER-EMAIL"]
				},
				C = v => v.gates.assignments,
				T = (v, h) => v && v[h];

			function P(v, h) {
				const I = C(v);
				return I ? T(I, h) : void 0
			}
			const w = (v, h) => P(v, h) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$4: function() {
					return I
				},
				$t: function() {
					return et
				},
				A4: function() {
					return g
				},
				Cu: function() {
					return C
				},
				DQ: function() {
					return Te
				},
				Ej: function() {
					return W
				},
				FH: function() {
					return P
				},
				ID: function() {
					return K
				},
				Ko: function() {
					return Fe
				},
				Le: function() {
					return N
				},
				Ly: function() {
					return x
				},
				M3: function() {
					return Ze
				},
				N8: function() {
					return ze
				},
				NY: function() {
					return U
				},
				Ns: function() {
					return oe
				},
				Ox: function() {
					return Ye
				},
				P4: function() {
					return V
				},
				RO: function() {
					return Q
				},
				SX: function() {
					return $
				},
				Tr: function() {
					return Re
				},
				U: function() {
					return T
				},
				Ug: function() {
					return v
				},
				V6: function() {
					return Je
				},
				WR: function() {
					return nt
				},
				Xg: function() {
					return u
				},
				ZB: function() {
					return Ae
				},
				_y: function() {
					return Z
				},
				cU: function() {
					return Ke
				},
				cg: function() {
					return me
				},
				d2: function() {
					return le
				},
				il: function() {
					return ce
				},
				jN: function() {
					return j
				},
				jg: function() {
					return M
				},
				kC: function() {
					return R
				},
				kf: function() {
					return Be
				},
				ko: function() {
					return z
				},
				mK: function() {
					return Ge
				},
				nA: function() {
					return s
				},
				oY: function() {
					return ee
				},
				qM: function() {
					return pe
				},
				rq: function() {
					return S
				},
				tS: function() {
					return h
				},
				tU: function() {
					return te
				},
				vB: function() {
					return tt
				},
				vM: function() {
					return ne
				},
				wH: function() {
					return w
				},
				wn: function() {
					return Ie
				},
				xU: function() {
					return Y
				},
				xw: function() {
					return Oe
				},
				z5: function() {
					return k
				},
				zO: function() {
					return Ve
				},
				zW: function() {
					return qe
				},
				zh: function() {
					return X
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/app/redux/normalizer.js"),
				d = t("../../../../node_modules/lodash/get.js"),
				f = t.n(d),
				l = t("../../../../node_modules/moment/moment.js"),
				_ = t.n(l),
				i = t("../react/common/constants/billing/index.ts");

			function p(B) {
				for (var J = 1; J < arguments.length; J++) {
					var _e = arguments[J] != null ? Object(arguments[J]) : {},
						Se = Object.keys(_e);
					typeof Object.getOwnPropertySymbols == "function" && Se.push.apply(Se, Object.getOwnPropertySymbols(_e).filter(function(Pe) {
						return Object.getOwnPropertyDescriptor(_e, Pe).enumerable
					})), Se.forEach(function(Pe) {
						b(B, Pe, _e[Pe])
					})
				}
				return B
			}

			function b(B, J, _e) {
				return J = n(J), J in B ? Object.defineProperty(B, J, {
					value: _e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[J] = _e, B
			}

			function n(B) {
				var J = r(B, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function r(B, J) {
				if (typeof B != "object" || B === null) return B;
				var _e = B[Symbol.toPrimitive];
				if (_e !== void 0) {
					var Se = _e.call(B, J || "default");
					if (typeof Se != "object") return Se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)(B)
			}
			const a = (0, o.P1)("zone", B => B.zone),
				c = B => {
					var J;
					return (J = B.zoneVersioning) === null || J === void 0 ? void 0 : J.zoneVersionSelector
				},
				s = (0, e.P1)(a, c, (B, J) => {
					var _e, Se, Pe;
					let we;
					if (Array.isArray(B) && B.length === 1 ? we = B[0] : B && !Array.isArray(B) && (we = B), !we) return;
					const ke = !!(J == null ? void 0 : J.enabled);
					return p({}, we, we.name && {
						name: ke ? J.rootZoneName : we.name
					}, {
						versioning: {
							enabled: ke,
							isRoot: !((_e = we.name) === null || _e === void 0 ? void 0 : _e.endsWith(".config.cfdata.org")),
							version: ke ? J.selectedVersion : 0,
							rootZoneId: ke ? J.rootZoneId : (Se = (Pe = we) === null || Pe === void 0 ? void 0 : Pe.id) !== null && Se !== void 0 ? Se : ""
						}
					})
				}),
				u = B => B.zone,
				g = (0, e.P1)(s, u, (B, J) => ({
					data: B,
					meta: J
				})),
				C = B => {
					var J, _e;
					return (J = (_e = s(B)) === null || _e === void 0 ? void 0 : _e.id) !== null && J !== void 0 ? J : ""
				},
				T = B => B.zones,
				P = B => B.zonesRoot,
				w = B => B.zonesAccount,
				v = (0, o.P1)("zones", T),
				h = (0, o.P1)("zonesRoot", P),
				I = (0, o.P1)("zonesAccount", w);

			function R(B) {
				const J = s(B);
				return J ? J.created_on : null
			}

			function W(B, J, _e) {
				const Se = R(B);
				if (!Se) return;
				const Pe = _().duration(J, _e),
					we = new Date(Se),
					ke = new Date(new Date().getTime() - Pe.asMilliseconds());
				return we.getTime() > ke.getTime()
			}

			function V(B) {
				const J = s(B);
				return J ? J.status : null
			}

			function ee(B) {
				const J = s(B);
				return J ? J.type : null
			}

			function j(B) {
				return B.plan_pending ? B.plan_pending : B.plan
			}

			function ne(B) {
				const J = s(B);
				if (!J) return;
				const _e = j(J);
				return _e && _e.legacy_id
			}

			function te(B, J) {
				const _e = j(B);
				return !!_e && i.Gs.indexOf(_e.legacy_id) >= i.Gs.indexOf(J)
			}

			function Y(B) {
				return !!B && B.status === "initializing"
			}

			function le(B) {
				return !!B && B.status === "pending"
			}

			function X(B) {
				return !!B && B.status === "active"
			}

			function ie(B, J) {
				if (!B) return !1;
				const _e = j(B);
				return !!_e && _e.legacy_id === J
			}

			function z(B) {
				return ie(B, "enterprise")
			}
			const Q = B => z(s(B));

			function k(B) {
				return ie(B, "business")
			}
			const K = B => k(s(B));

			function Z(B) {
				return ie(B, "pro")
			}

			function oe(B) {
				return ie(B, "free")
			}
			const ce = B => oe(s(B));

			function x(B) {
				return !z(B)
			}

			function y(B) {
				return B && B.owner
			}

			function M(B, J) {
				const _e = y(J);
				return !!_e && _e.type === "user" && _e.id === B.id
			}

			function S(B) {
				const J = s(B);
				return !!J && J.type === "partial"
			}

			function U(B) {
				const J = s(B);
				return !!J && J.type === "secondary"
			}

			function $(B) {
				const J = s(B);
				return J && S(B) && J.host
			}
			const me = B => {
					var J;
					const _e = s(B);
					return !!(_e == null ? void 0 : _e.host) && !!((J = _e.plan) === null || J === void 0 ? void 0 : J.externally_managed)
				},
				Te = B => {
					const J = v(B);
					return J && J.some(z)
				},
				Ie = (B, J) => {
					const _e = s(B);
					return _e && _e.betas ? _e.betas.includes(J) : !1
				},
				Ae = (B, ...J) => f()(B, ["zoneFlags", "data", ...J]),
				N = (B, ...J) => f()(B, ["accountFlags", "data", ...J]),
				pe = B => B.accountFlags.isRequesting,
				Oe = B => B.zoneFlags.isRequesting,
				Re = (B, ...J) => f()(B, ["zoneFlagsChanges", "data", ...J]),
				Fe = B => B.zoneFlagsChanges.isRequesting,
				Ke = B => B.zoneFlags && B.zoneFlags.data,
				Ve = B => B.zoneFlags,
				ct = (0, e.P1)(Ke, Ve, (B, J) => ({
					data: B,
					meta: J
				})),
				ze = (0, o.P1)("abuseUrls", B => B.overview.abuseUrls),
				Ze = B => {
					const J = s(B);
					return J ? `/${J.account.id}/${J.name}` : null
				},
				Je = B => B.zoneMarketingCampaigns,
				Be = B => B.overview.zoneBlocks.data,
				qe = B => B.overview.zoneBlocks.isRequesting,
				et = B => B.overview.zoneBlocks.hasData,
				Ge = B => {
					var J, _e;
					return (B == null || (J = B.overview.zoneBlocks) === null || J === void 0 || (_e = J.paginationData) === null || _e === void 0 ? void 0 : _e.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				tt = B => B.overview.zoneBlocksReview.isRequesting,
				Ye = B => B.overview.zoneHold,
				nt = (0, o.P1)("zoneHold", Ye)
		},
		"../react/common/utils/formatDate.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			E.Z = (o, d, f = !1) => (0, e.p6)(o, d, f)
		},
		"../react/common/utils/hasRole.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				n: function() {
					return o
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const o = (d, f) => {
				const {
					roles: l = []
				} = (0, e.uF)(d) || {};
				return f.some(_ => l.includes(_))
			}
		},
		"../react/common/utils/isGuards.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Q$: function() {
					return d
				},
				t: function() {
					return _
				},
				v5: function() {
					return f
				},
				zE: function() {
					return l
				}
			});
			var e = t("../react/common/constants/index.ts"),
				o = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const d = i => i ? ["page", "per_page", "count", "total_count"].every(b => b in i && i[b]) : !1,
				f = (i = "") => e.Dy.includes(i.toLowerCase()),
				l = i => i !== null && typeof i == "object" && "name" in i && "size" in i && "type" in i && typeof i.slice == "function",
				_ = i => (0, o.Z)(i)
		},
		"../react/common/utils/useQueryCache.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				o: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function o(i) {
				for (var p = 1; p < arguments.length; p++) {
					var b = arguments[p] != null ? Object(arguments[p]) : {},
						n = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(b).filter(function(r) {
						return Object.getOwnPropertyDescriptor(b, r).enumerable
					})), n.forEach(function(r) {
						d(i, r, b[r])
					})
				}
				return i
			}

			function d(i, p, b) {
				return p = f(p), p in i ? Object.defineProperty(i, p, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[p] = b, i
			}

			function f(i) {
				var p = l(i, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function l(i, p) {
				if (typeof i != "object" || i === null) return i;
				var b = i[Symbol.toPrimitive];
				if (b !== void 0) {
					var n = b.call(i, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(i)
			}
			const _ = i => {
				const p = (0, e.useQueryClient)(),
					b = T => {
						var P;
						return p.getQueriesData((P = T) !== null && P !== void 0 ? P : i)
					},
					n = T => {
						var P;
						return p.getQueryData((P = T) !== null && P !== void 0 ? P : i)
					},
					r = T => {
						var P;
						return p.getQueriesData({
							queryKey: (P = T) !== null && P !== void 0 ? P : i,
							stale: !0
						})
					},
					a = (T, P) => {
						var w;
						p.setQueryData((w = P) !== null && w !== void 0 ? w : i, T)
					},
					c = async (T, P) => {
						var w, v;
						await p.invalidateQueries((w = T) !== null && w !== void 0 ? w : i, o({
							refetchActive: !1
						}, (v = P) !== null && v !== void 0 ? v : {}))
					}, s = async (T, P) => {
						const w = T || (v => {
							var h;
							return (v == null || (h = v.queryKey) === null || h === void 0 ? void 0 : h[0]) === i
						});
						await p.invalidateQueries(o({
							predicate: w,
							refetchActive: !1,
							refetchInactive: !1
						}, P))
					};
				return {
					cancelData: async () => {
						await p.cancelQueries(i)
					},
					invalidate: c,
					setData: a,
					getDataStale: r,
					getData: b,
					prefetchQuery: (T, P) => {
						var w;
						return p.prefetchQuery((w = P) !== null && w !== void 0 ? w : i, T)
					},
					getQueryData: n,
					predicateInvalidate: s,
					batchInvalidate: async ({
						queryKeysToInvalidate: T = [],
						queryKeysToPredicateInvalidate: P = [],
						refetchActive: w = !1,
						refetchInactive: v = !1
					}) => {
						const h = T.map(R => c(R)),
							I = P.map(R => s(W => {
								var V;
								return (W == null || (V = W.queryKey) === null || V === void 0 ? void 0 : V[0]) === R
							}, {
								refetchActive: w,
								refetchInactive: v
							}));
						await Promise.all([...h, ...I])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				K2: function() {
					return o
				},
				Lb: function() {
					return d
				},
				XI: function() {
					return f
				},
				bK: function() {
					return p
				},
				jk: function() {
					return i
				},
				wb: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = b => /^https?:\/\/(.*)/.test(b),
				d = b => e.default.hostname.test(b),
				f = b => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(b),
				l = b => /^[!-~]+$/.test(b),
				_ = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				i = b => _.test(b),
				p = b => !!b && !!b.length && /^[ -~]+$/.test(b)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				DZ: function() {
					return f
				},
				GA: function() {
					return b
				},
				hT: function() {
					return _
				},
				p6: function() {
					return d
				},
				qc: function() {
					return l
				},
				w9: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e);
			const d = a => o().utc(a).format("YYYY-MM-DD"),
				f = a => o().utc(a).format(),
				l = a => o().utc(a).startOf("minute").format(),
				_ = a => new Date(a),
				i = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				p = a => {
					const c = a / 60 / 60 / 1e3;
					return i[Object.keys(i).sort((s, u) => u - s).find(s => c >= s)]
				},
				b = (a, c = s => s.avg && s.avg.sampleInterval ? s.avg.sampleInterval : 1) => a.length === 0 ? 1 : a.reduce((s, u) => s + c(u), 0) / a.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = a => n[a]
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Jz: function() {
					return b
				},
				OK: function() {
					return l
				},
				_Y: function() {
					return i
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

			function e(s) {
				for (var u = 1; u < arguments.length; u++) {
					var g = arguments[u] != null ? Object(arguments[u]) : {},
						C = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(g).filter(function(T) {
						return Object.getOwnPropertyDescriptor(g, T).enumerable
					})), C.forEach(function(T) {
						o(s, T, g[T])
					})
				}
				return s
			}

			function o(s, u, g) {
				return u = d(u), u in s ? Object.defineProperty(s, u, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[u] = g, s
			}

			function d(s) {
				var u = f(s, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function f(s, u) {
				if (typeof s != "object" || s === null) return s;
				var g = s[Symbol.toPrimitive];
				if (g !== void 0) {
					var C = g.call(s, u || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(s)
			}
			let l = function(s) {
					return s.Sending = "sending", s.Success = "success", s.Failed = "failed", s.Latent = "latent", s
				}({}),
				_ = function(s) {
					return s[s.Success = 200] = "Success", s[s.BadRequest = 400] = "BadRequest", s
				}({});
			const i = {
					status: l.Latent,
					statusCode: void 0
				},
				p = {
					status: l.Sending
				},
				b = {
					status: l.Success,
					statusCode: _.Success
				},
				n = {
					status: l.Failed,
					statusCode: _.BadRequest
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
					}, i),
					installsList: e({
						value: []
					}, i),
					categoriesList: e({
						value: []
					}, i),
					recommendedAppsList: e({
						value: []
					}, i),
					metadata: e({
						value: null
					}, i),
					app: e({
						value: null
					}, i),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, i)
				},
				c = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Ux: function() {
					return r
				},
				cz: function() {
					return c
				},
				im: function() {
					return i
				},
				pG: function() {
					return a
				},
				t$: function() {
					return s
				}
			});
			var e = t("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(g) {
				for (var C = 1; C < arguments.length; C++) {
					var T = arguments[C] != null ? Object(arguments[C]) : {},
						P = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(T).filter(function(w) {
						return Object.getOwnPropertyDescriptor(T, w).enumerable
					})), P.forEach(function(w) {
						d(g, w, T[w])
					})
				}
				return g
			}

			function d(g, C, T) {
				return C = f(C), C in g ? Object.defineProperty(g, C, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[C] = T, g
			}

			function f(g) {
				var C = l(g, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function l(g, C) {
				if (typeof g != "object" || g === null) return g;
				var T = g[Symbol.toPrimitive];
				if (T !== void 0) {
					var P = T.call(g, C || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(g)
			}
			const _ = g => g.test(window.location.hostname),
				i = () => _(e.j9),
				p = () => _(MARKETPLACE_LOCAL_URL_REGEXP),
				b = (g, C) => {
					const T = random(0, 1) ? -1 : 1;
					return g.points === C.points || g.points >= APP_POINTS_THRESHOLD && C.points >= APP_POINTS_THRESHOLD ? T : g.points < 0 || C.points < 0 || g.points >= APP_POINTS_THRESHOLD || C.points >= APP_POINTS_THRESHOLD ? C.points - g.points : T
				},
				n = (g, C, T) => {
					const P = get(C, T),
						w = get(g, T);
					return P && !isEqual(P, w)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (g, C) => C.map(T => g.find(P => P.id === T)),
						addAppVersionInfo: (g, C) => o({}, C, {
							currentVersion: C.versions.find(T => T.tag === g.versionTag),
							latestVersion: C.versions.find(T => T.tag === C.infoVersion)
						}),
						addCurrentSiteInstall: (g, C) => o({}, C, {
							currentSiteInstall: g.find(T => T.appId === C.id)
						})
					}
				},
				a = (g, C, T) => o({}, g, C, T ? {
					value: T
				} : {}),
				c = g => g.map(C => C.status),
				s = g => g.apps ? g.apps : g,
				u = g => {
					let C = ["by-cloudflare"];
					return g.filter(T => !C.includes(T.id) && T.visible).sort((T, P) => T.points < P.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(F, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				categorySlugTranslationKey: function() {
					return l
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return f
				},
				translations: function() {
					return d
				}
			});
			var e = t("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: d,
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

			function l(_) {
				const i = _.replace(/-/g, "_");
				return Object.keys(o).includes(i) ? i : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				L: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/url-join/lib/url-join.js"),
				o = t.n(e),
				d = t("../../../../node_modules/lodash-es/defaults.js"),
				f = t("../react/pages/apps/marketplace/libraries/helpers.ts");

			function l(c) {
				for (var s = 1; s < arguments.length; s++) {
					var u = arguments[s] != null ? Object(arguments[s]) : {},
						g = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(u).filter(function(C) {
						return Object.getOwnPropertyDescriptor(u, C).enumerable
					})), g.forEach(function(C) {
						p(c, C, u[C])
					})
				}
				return c
			}

			function _(c, s) {
				if (c == null) return {};
				var u = i(c, s),
					g, C;
				if (Object.getOwnPropertySymbols) {
					var T = Object.getOwnPropertySymbols(c);
					for (C = 0; C < T.length; C++) g = T[C], !(s.indexOf(g) >= 0) && (!Object.prototype.propertyIsEnumerable.call(c, g) || (u[g] = c[g]))
				}
				return u
			}

			function i(c, s) {
				if (c == null) return {};
				var u = {},
					g = Object.keys(c),
					C, T;
				for (T = 0; T < g.length; T++) C = g[T], !(s.indexOf(C) >= 0) && (u[C] = c[C]);
				return u
			}

			function p(c, s, u) {
				return s = b(s), s in c ? Object.defineProperty(c, s, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[s] = u, c
			}

			function b(c) {
				var s = n(c, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function n(c, s) {
				if (typeof c != "object" || c === null) return c;
				var u = c[Symbol.toPrimitive];
				if (u !== void 0) {
					var g = u.call(c, s || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(c)
			}
			class r {
				constructor(s) {
					p(this, "token", void 0), p(this, "options", void 0), p(this, "setAuthHeader", u => {
						this.token = u
					}), this.token = "", this.options = (0, d.Z)(s, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(s = "GET", u, g = {}) {
					const {
						body: C
					} = g, T = _(g, ["body"]);
					return fetch(o()(this.options.baseUrl, u), l({
						method: s
					}, T, C ? {
						body: JSON.stringify(C)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(l({
							Accept: "application/json, text/plain, */*"
						}, g.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(s, u = {}) {
					const g = await this.request("GET", s, u);
					return this.parseJSONResponse(g)
				}
				async postJSON(s, u = {}) {
					const g = await this.request("POST", s, l({}, u, {
						headers: l({}, u.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(g)
				}
				parseJSONResponse(s) {
					return s.json()
				}
			}
			p(r, "defaults", {
				baseUrl: (0, f.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const a = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				JX: function() {
					return b
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
				d = t("../../../../node_modules/query-string/query-string.js"),
				f = t.n(d),
				l = t("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				_ = t("../react/pages/apps/marketplace/requests/Requester.ts"),
				i = t("../react/pages/apps/marketplace/libraries/resource.ts");

			function* p(s, u, g, C) {
				const T = (0, e.Z)(u),
					[P, w, v] = [`get${T}Sending`, `get${T}Success`, `get${T}Failed`];
				try {
					yield(0, l.gz)(s[P]());
					const h = yield(0, l.RE)(a, g);
					let I = h;
					if (I.error) {
						yield(0, l.gz)(s[v]());
						return
					}
					return C && (I = yield C(h)), yield(0, l.gz)(s[w](I)), I
				} catch {
					yield(0, l.gz)(s[v]())
				}
			}

			function* b(s, u, g, C) {
				const T = (0, e.Z)(u),
					P = `get${T}Sending`,
					w = `get${T}Success`,
					v = `get${T}Failed`;
				try {
					yield(0, l.gz)(s[P]());
					const h = yield(0, l.RE)(c, {
						url: g,
						data: C
					});
					return yield(0, l.gz)(s[w](h)), h
				} catch {
					yield(0, l.gz)(s[v]())
				}
			}
			const n = s => (0, o.Z)(s) ? "" : `?${d.stringify(s)}`,
				r = {
					app: new i.c({
						name: "app",
						url: (s, u) => `apps/${s}${n(u)}`
					}),
					apps: new i.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new i.c({
							name: "installs",
							url: s => `sites/${s}/installs`
						}),
						delete: new i.c({
							name: "installs",
							url: s => `installs/${s}`
						})
					},
					categories: new i.c({
						name: "categories",
						url: (s = {}) => "categories" + n(s)
					}),
					metadata: {
						get: new i.c({
							name: "metadata",
							url: s => `sites/${s}/metadata`
						}),
						post: new i.c({
							name: "metadata",
							url: s => `sites/${s}/metadata`
						})
					},
					ratings: {
						default: new i.c({
							name: "ratings",
							url: (s = {}) => "ratings" + n(s)
						}),
						delete: new i.c({
							name: "ratings",
							url: s => `ratings/${s}`
						})
					},
					recommendedApps: new i.c({
						name: "recommendedApps",
						url: (s = {}) => "apps/recommend" + n(s)
					}),
					developedApps: new i.c({
						name: "developedApps",
						url: s => `user/${s}/apps`
					})
				},
				a = async s => _.L.fetchJSON(s), c = async s => {
					const {
						url: u,
						data: g
					} = s;
					return _.L.postJSON(u, {
						body: g
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Nw: function() {
					return p
				},
				U4: function() {
					return i
				},
				XO: function() {
					return _
				},
				ZP: function() {
					return b
				}
			});
			var e = t("../react/pages/apps/marketplace/config/initialState.ts");

			function o(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						c = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(a).filter(function(s) {
						return Object.getOwnPropertyDescriptor(a, s).enumerable
					})), c.forEach(function(s) {
						d(n, s, a[s])
					})
				}
				return n
			}

			function d(n, r, a) {
				return r = f(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function f(n) {
				var r = l(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function l(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var c = a.call(n, r || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let _ = function(n) {
					return n.SetCurrentUser = "user.set", n
				}({}),
				i = function(n) {
					return n.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", n.SetZone = "MARKETPLACE/AUTH/SET_ZONE", n.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", n.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", n.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", n.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", n.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", n.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", n.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", n.ResetState = "MARKETPLACE/AUTH/RESET_STATE", n
				}({});
			const p = {
				resetState: () => ({
					type: i.ResetState
				}),
				initSaga: n => ({
					type: i.InitSaga,
					zoneId: n
				}),
				setZone: n => ({
					type: i.SetZone,
					zone: n
				}),
				setToken: n => ({
					type: i.SetToken,
					token: n
				}),
				clearToken: () => ({
					type: i.ClearToken
				}),
				setTokenValid: n => ({
					type: i.SetTokenValid,
					isTokenValid: n
				}),
				getCurrentUserSaga: () => ({
					type: i.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: i.CurrentUserSending
				}),
				getCurrentUserSuccess: n => ({
					type: i.CurrentUserSuccess,
					user: n
				}),
				getCurrentUserFailed: () => ({
					type: i.CurrentUserFailed
				})
			};

			function b(n = e.fD, r) {
				switch (r.type) {
					case i.ResetState:
						return o({}, e.fD);
					case i.CurrentUserSending:
						return o({}, n);
					case i.CurrentUserSuccess:
						const {
							user: a
						} = r;
						return o({}, n, {
							user: a
						});
					case i.CurrentUserFailed:
						return o({}, n);
					case i.SetZone:
						const {
							zone: c
						} = r;
						return o({}, n, {
							zone: c
						});
					case i.SetToken:
						const {
							token: s
						} = r;
						return o({}, n, {
							token: s
						});
					case i.ClearToken:
						return o({}, n, {
							token: null
						});
					case i.SetTokenValid:
						const {
							isTokenValid: u
						} = r;
						return o({}, n, {
							isTokenValid: u
						});
					default:
						return n
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Nw: function() {
					return b
				},
				U4: function() {
					return p
				},
				ZP: function() {
					return n
				},
				dg: function() {
					return i
				}
			});
			var e = t("../react/pages/apps/marketplace/config/initialState.ts"),
				o = t("../react/pages/apps/marketplace/libraries/helpers.ts");

			function d(r) {
				for (var a = 1; a < arguments.length; a++) {
					var c = arguments[a] != null ? Object(arguments[a]) : {},
						s = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && s.push.apply(s, Object.getOwnPropertySymbols(c).filter(function(u) {
						return Object.getOwnPropertyDescriptor(c, u).enumerable
					})), s.forEach(function(u) {
						f(r, u, c[u])
					})
				}
				return r
			}

			function f(r, a, c) {
				return a = l(a), a in r ? Object.defineProperty(r, a, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = c, r
			}

			function l(r) {
				var a = _(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function _(r, a) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var s = c.call(r, a || "default");
					if (typeof s != "object") return s;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let i = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				p = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const b = {
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

			function n(r = e.w6, a) {
				switch (a.type) {
					case p.ResetState:
						return d({}, e.w6);
					case p.ZoneChangedSaga:
						return d({}, r, {
							installsList: d({}, e.w6.installsList),
							recommendedAppsList: d({}, e.w6.recommendedAppsList),
							metadata: d({}, e.w6.metadata)
						});
					case p.GetAppsSending:
						return d({}, r, {
							appsList: d({}, (0, o.pG)(r.appsList, e.h_))
						});
					case p.GetAppsSuccess:
						return d({}, r, {
							appsList: d({}, (0, o.pG)(r.appsList, e.Jz, a.appsList))
						});
					case p.GetAppsFailed:
						return d({}, r, {
							appsList: d({}, (0, o.pG)(r.appsList, e.yc))
						});
					case p.GetInstallsSending:
						return d({}, r, {
							installsList: d({}, (0, o.pG)(r.installsList, e.h_))
						});
					case p.GetInstallsSuccess:
						return d({}, r, {
							installsList: d({}, (0, o.pG)(r.installsList, e.Jz, a.installsList))
						});
					case p.GetInstallsFailed:
						return d({}, r, {
							installsList: d({}, (0, o.pG)(r.installsList, e.yc))
						});
					case p.GetCategoriesSending:
						return d({}, r, {
							categoriesList: d({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case p.GetCategoriesSuccess:
						return d({}, r, {
							categoriesList: d({}, (0, o.pG)(r.categoriesList, e.Jz, a.categoriesList))
						});
					case p.GetCategoriesFailed:
						return d({}, r, {
							categoriesList: d({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case p.GetMetadataSending:
						return d({}, r, {
							metadata: d({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.GetMetadataSuccess:
						return d({}, r, {
							metadata: d({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case p.GetMetadataFailed:
						return d({}, r, {
							metadata: d({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.PostMetadataSending:
						return d({}, r, {
							metadata: d({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.PostMetadataSuccess:
						return d({}, r, {
							metadata: d({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case p.PostMetadataFailed:
						return d({}, r, {
							metadata: d({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.GetRecommendedAppsSending:
						return d({}, r, {
							recommendedAppsList: d({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case p.GetRecommendedAppsSuccess:
						return d({}, r, {
							recommendedAppsList: d({}, (0, o.pG)(r.recommendedAppsList, e.Jz, a.recommendedAppsList))
						});
					case p.GetRecommendedAppsFailed:
						return d({}, r, {
							recommendedAppsList: d({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case p.GetAppSending:
						return d({}, r, {
							app: d({}, (0, o.pG)(r.app, e.h_))
						});
					case p.GetAppSuccess:
						return d({}, r, {
							app: d({}, (0, o.pG)(r.app, e.Jz, a.app))
						});
					case p.GetAppFailed:
						return d({}, r, {
							app: d({}, (0, o.pG)(r.app, e.yc))
						});
					case p.ClearApp:
						return d({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case p.SetUpdatableInstalls:
						return d({}, r, {
							updatableInstallsList: a.updatableInstallsList
						});
					case p.GetDevelopedAppsSending:
						return d({}, r, {
							developedApps: d({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case p.GetDevelopedAppsSuccess:
						return d({}, r, {
							developedApps: d({}, (0, o.pG)(r.developedApps, e.Jz, a.developedApps))
						});
					case p.GetDevelopedAppsFailed:
						return d({}, r, {
							developedApps: d({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/caching/tracking.tsx": function(F, E, t) {
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
		"../react/pages/d1/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				H: function() {
					return d
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
				d = {
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
		"../react/pages/dns/dns-records/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e
				},
				X: function() {
					return o
				}
			});
			let e = function(d) {
				return d.DNS_RECORD_CREATE = "create DNS records", d.DNS_RECORD_UPDATE = "update DNS records", d.DNS_RECORD_DELETE = "delete DNS records", d.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", d
			}({});
			const o = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				BB: function() {
					return o
				},
				Pm: function() {
					return d
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
			let d = function(l) {
				return l[l.Verified = 0] = "Verified", l[l.Pending = 1] = "Pending", l[l.Missing = 2] = "Missing", l[l.WorkerNotFound = 3] = "WorkerNotFound", l[l.Unknown = 4] = "Unknown", l[l.Loading = 5] = "Loading", l
			}({});
			const f = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/config.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				jk: function() {
					return C
				},
				w8: function() {
					return T
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				d = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				f = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function l(P) {
				for (var w = 1; w < arguments.length; w++) {
					var v = arguments[w] != null ? Object(arguments[w]) : {},
						h = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(v).filter(function(I) {
						return Object.getOwnPropertyDescriptor(v, I).enumerable
					})), h.forEach(function(I) {
						_(P, I, v[I])
					})
				}
				return P
			}

			function _(P, w, v) {
				return w = i(w), w in P ? Object.defineProperty(P, w, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[w] = v, P
			}

			function i(P) {
				var w = p(P, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function p(P, w) {
				if (typeof P != "object" || P === null) return P;
				var v = P[Symbol.toPrimitive];
				if (v !== void 0) {
					var h = v.call(P, w || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(P)
			}
			const b = "Notifications",
				n = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				c = (0, e.BC)`${a}/destinations`,
				s = (0, e.BC)`${a}/create`,
				u = (0, e.BC)`${s}/${"alertType"}`,
				g = (0, e.BC)`${a}/edit/${"alertId"}`,
				C = l({
					account: r,
					alerts: a,
					destinations: c,
					createAlert: s,
					createAlertWithSelection: u,
					editAlert: g
				}, o._j, d._j),
				T = l({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, f.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				_j: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				d = (0, e.BC)`${o}/pagerduty/connect`,
				f = (0, e.BC)`${o}/pagerduty/register`,
				l = (0, e.BC)`${o}/pagerduty`,
				_ = {
					pagerDutyConnect: d,
					pagerDutyRegister: f,
					pagerDutyList: l
				};
			var i = null
		},
		"../react/pages/home/alerts/tracking.ts": function(F, E, t) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(F, E, t) {
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
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(F, E, t) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AA: function() {
					return $
				},
				AN: function() {
					return De
				},
				AY: function() {
					return ve
				},
				Am: function() {
					return T
				},
				B2: function() {
					return Z
				},
				BB: function() {
					return V
				},
				BF: function() {
					return we
				},
				BQ: function() {
					return se
				},
				E8: function() {
					return ot
				},
				Fl: function() {
					return ut
				},
				Fu: function() {
					return ne
				},
				Gc: function() {
					return ae
				},
				Hc: function() {
					return wt
				},
				IO: function() {
					return Ee
				},
				JK: function() {
					return ze
				},
				K: function() {
					return I
				},
				LI: function() {
					return H
				},
				LX: function() {
					return Se
				},
				L_: function() {
					return qe
				},
				Ly: function() {
					return Ut
				},
				MR: function() {
					return ce
				},
				Mj: function() {
					return y
				},
				NB: function() {
					return jt
				},
				Oe: function() {
					return zt
				},
				Or: function() {
					return S
				},
				P5: function() {
					return Ft
				},
				PE: function() {
					return Re
				},
				Pd: function() {
					return We
				},
				Pk: function() {
					return Ke
				},
				Pp: function() {
					return tt
				},
				Q1: function() {
					return j
				},
				Qr: function() {
					return Pe
				},
				Qv: function() {
					return Fe
				},
				Rp: function() {
					return Bt
				},
				S7: function() {
					return yt
				},
				Sh: function() {
					return Nt
				},
				Sl: function() {
					return Wt
				},
				TZ: function() {
					return U
				},
				Tg: function() {
					return Ze
				},
				Tp: function() {
					return fe
				},
				Uy: function() {
					return St
				},
				Vw: function() {
					return Y
				},
				W3: function() {
					return B
				},
				WR: function() {
					return be
				},
				WX: function() {
					return Ae
				},
				XF: function() {
					return Ne
				},
				Xb: function() {
					return me
				},
				ZB: function() {
					return ee
				},
				Zs: function() {
					return Be
				},
				_f: function() {
					return ke
				},
				_k: function() {
					return Le
				},
				b4: function() {
					return Ie
				},
				c2: function() {
					return oe
				},
				cE: function() {
					return Lt
				},
				dh: function() {
					return Ge
				},
				fE: function() {
					return et
				},
				g7: function() {
					return Oe
				},
				hO: function() {
					return nt
				},
				hV: function() {
					return Dt
				},
				hk: function() {
					return P
				},
				hr: function() {
					return Te
				},
				it: function() {
					return Ye
				},
				j3: function() {
					return xt
				},
				jN: function() {
					return ct
				},
				jo: function() {
					return Gt
				},
				k3: function() {
					return $t
				},
				m8: function() {
					return Q
				},
				nm: function() {
					return mt
				},
				oW: function() {
					return rt
				},
				oc: function() {
					return C
				},
				pH: function() {
					return k
				},
				pi: function() {
					return z
				},
				r4: function() {
					return Kt
				},
				rI: function() {
					return x
				},
				s7: function() {
					return ue
				},
				sO: function() {
					return Qe
				},
				sg: function() {
					return $e
				},
				tB: function() {
					return g
				},
				tN: function() {
					return pe
				},
				u_: function() {
					return Ht
				},
				vV: function() {
					return it
				},
				vc: function() {
					return Ve
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				d = t("../../../../node_modules/moment/moment.js"),
				f = t.n(d),
				l = t("../../../common/util/types/src/api/domain.ts"),
				_ = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				i = t("../react/utils/translator.tsx"),
				p = t("../react/utils/url.ts"),
				b = t("../react/pages/home/domain-registration/config.ts"),
				n = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = t("../react/pages/home/domain-registration/types.ts");

			function a(m) {
				for (var O = 1; O < arguments.length; O++) {
					var re = arguments[O] != null ? Object(arguments[O]) : {},
						Ce = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && Ce.push.apply(Ce, Object.getOwnPropertySymbols(re).filter(function(Me) {
						return Object.getOwnPropertyDescriptor(re, Me).enumerable
					})), Ce.forEach(function(Me) {
						c(m, Me, re[Me])
					})
				}
				return m
			}

			function c(m, O, re) {
				return O = s(O), O in m ? Object.defineProperty(m, O, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[O] = re, m
			}

			function s(m) {
				var O = u(m, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function u(m, O) {
				if (typeof m != "object" || m === null) return m;
				var re = m[Symbol.toPrimitive];
				if (re !== void 0) {
					var Ce = re.call(m, O || "default");
					if (typeof Ce != "object") return Ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(m)
			}

			function g(m) {
				return m.filter(O => O.isSelected).reduce((O, {
					fees: re,
					isZoneEntitlementPresent: Ce
				}) => Ce || !(0, e.isNumber)(re == null ? void 0 : re.transfer_fee) ? O : O + (re == null ? void 0 : re.transfer_fee), 0)
			}

			function C(m) {
				return m.filter(O => O.registrar.toLowerCase() === "godaddy")
			}
			const T = "MMM D, YYYY";

			function P(m, O, re, Ce) {
				var Me, Xe, He, vt, ft, _t, Ct, ht, bt, Tt, Ot, At;
				const Ue = m[O.name];
				return a({
					name: O.name,
					zone: Ue,
					entitlements: re,
					registryCheck: Ce,
					nameservers: O.name_servers,
					isAvailable: O.available,
					lastKnownStatus: O.last_known_status,
					authCode: O.auth_code,
					isEnterpriseZone: (Ue == null || (Me = Ue.plan) === null || Me === void 0 ? void 0 : Me.legacy_id) === "enterprise",
					isActiveZone: (Ue == null ? void 0 : Ue.status) === "active",
					corResponsesPending: O.cor_responses_pending,
					isCorLocked: O.cor_locked,
					corLockedUntil: O.cor_locked_until ? f()(O.cor_locked_until).format(T) : null,
					isFullZone: (Ue == null ? void 0 : Ue.type) == r.xd.Full,
					isLocked: O.locked,
					registrar: O.current_registrar || b.JM,
					zoneId: Ue == null ? void 0 : Ue.id,
					currentExpiration: f()(O.expires_at).format(T),
					newExpiration: f()(O.expires_at).add(1, "year").format(T),
					lastEntitledAt: O.last_entitled_at ? new Date(O.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(re) && !!re.find(Mt => Mt.id === b.g5 && Mt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: O.transfer_in && h(O.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: O.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: O.transfer_in,
					transferOut: O.transfer_out,
					autoRenew: O.auto_renew === !0,
					lastTransferredAt: O.last_transferred_at,
					createdAt: O.created_at,
					paymentExpiresAt: f()(O.payment_expires_at).isValid() ? f()(O.payment_expires_at) : f()(O.expires_at).isValid() ? f()(O.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (Xe = O.contacts) === null || Xe === void 0 || (He = Xe.administrator) === null || He === void 0 ? void 0 : He.id,
						[r.l2.Billing]: (vt = O.contacts) === null || vt === void 0 || (ft = vt.billing) === null || ft === void 0 ? void 0 : ft.id,
						[r.l2.Registrant]: (_t = O.contacts) === null || _t === void 0 || (Ct = _t.registrant) === null || Ct === void 0 ? void 0 : Ct.id,
						[r.l2.Technical]: (ht = O.contacts) === null || ht === void 0 || (bt = ht.technical) === null || bt === void 0 ? void 0 : bt.id
					},
					landing: O.landing,
					privacy: O.privacy,
					whois: O.whois,
					emailVerified: O.email_verified,
					materialChanges: R(O.material_changes),
					corChanges: O.cor_changes ? V(Object.assign(a({}, v), O.cor_changes)) : {},
					registryStatuses: O.registry_statuses ? O.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Tt = O.domain_protection_services) === null || Tt === void 0 ? void 0 : Tt.status
					},
					deletion: {
						isDeletable: O == null || (Ot = O.deletion) === null || Ot === void 0 ? void 0 : Ot.is_deletable
					},
					premiumType: O == null ? void 0 : O.premium_type,
					fees: O == null ? void 0 : O.fees
				}, O.domain_move && {
					domainMove: {
						ineligibilityReasons: (At = O.domain_move) === null || At === void 0 ? void 0 : At.ineligibility_reasons
					}
				}, O.actionable_metadata && {
					actionableMetadata: w(O.actionable_metadata)
				}, O.policies && {
					policies: a({}, O.policies.suspension && {
						suspension: {
							parked: O.policies.suspension.parked,
							parkingReason: O.policies.suspension.parking_reason,
							paymentExpired: O.policies.suspension.payment_expired
						}
					})
				})
			}

			function w(m) {
				return m.map(O => ({
					accountContext: O.account_context,
					createdAt: O.created_at,
					expiresAt: O.expires_at,
					sentAt: O.sent_at,
					status: O.status,
					type: O.type
				}))
			}
			const v = {
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
				let O = m.extensions;
				(O == null ? void 0 : O.application_purpose) && (O == null ? void 0 : O.nexus_category) && (m.extensions = {
					nexusCategory: O.nexus_category,
					applicationPurpose: O.application_purpose
				});
				let re = a({}, typeof m.id == "string" ? {
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
				return Je(re)
			}

			function R(m) {
				let O = [];
				const re = {
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
					const Me = m[Ce],
						Xe = re[Me];
					O.push(Xe)
				}
				return O
			}
			const W = m => {
				if (!m) return null;
				let O = m;
				return m.includes("C31") && (O = "C31"), m.includes("C32") && (O = "C32"), O
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
						nexusCategory: W(m.extensions.nexus_category),
						applicationPurpose: m.extensions.application_purpose
					}
				} : {})
			}

			function ee(m = {}) {
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
						raw: ""
					},
					privacy: !0,
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
				return Object.assign(O, m)
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

			function ne(m) {
				const O = b.Py.concat(b.ui).reduce((re, Ce) => a({}, re, {
					[Ce]: []
				}), {});
				return m.forEach(re => {
					let Ce = te(re.registrar);
					Ce in O || (Ce = b.ui), $e(re.name) && (Ce = "uk"), O[Ce].push(re)
				}), Object.keys(O).sort((re, Ce) => re.localeCompare(Ce)).map(re => ({
					registrar: re,
					domains: O[re]
				})).filter(re => re.domains.length > 0)
			}

			function te(m) {
				return m == null ? void 0 : m.toLowerCase().replace(/\s|,|\./g, "")
			}

			function Y(m) {
				if (!m || !m.registrar) return "unknown";
				if ($e(m.name)) return "uk";
				const O = te(m.registrar);
				return O in b.gM ? O : "unknown"
			}
			const le = [];

			function X(m) {
				return le.some(O => m.endsWith("." + O))
			}

			function ie(m) {
				return !m.isEnterpriseZone || !Array.isArray(m.entitlements) ? !1 : !!m.entitlements.find(({
					id: O,
					allocation: re
				}) => O === b.g5 && re.value === !0)
			}

			function z(m) {
				var O;
				const re = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let Ce = !1,
					Me = null;
				return (O = m.registryStatuses) === null || O === void 0 || O.some(Xe => {
					re.includes(Xe) && (Me = Xe, Ce = !0)
				}), [Ce, Me]
			}

			function Q(m, O = !1) {
				if (!m) return [!1, n.keys.cannot_transfer_default];
				if (m.zone.status !== "active") return [!1, n.keys.cannot_transfer_zone_not_active];
				if (!m.isFullZone && !ie(m)) return [!1, n.keys.cannot_transfer_zone_not_eligible];
				if (m.registrar === "Cloudflare") return [!1, n.keys.cannot_transfer_domain_on_cf];
				if (m.isAvailable) return [!1, n.keys.cannot_transfer_domain_available];
				if (!m.transferConditions) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (!O && St(m == null ? void 0 : m.premiumType)) return [!1, n.keys.cannot_transfer_domain_premium];
				if (k(m)) return [!1, n.keys.cannot_transfer_domain_transfer_in_progress];
				let re;
				for (re in m.transferConditions)
					if (re !== "not_premium" && !m.transferConditions[re]) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (X(m.name)) return [!1, n.keys.cannot_transfer_domain_tld_not_supported];
				const [Ce, Me] = z(m);
				return Ce && Me ? [!1, n.keys.cannot_transfer_domain_registry_status[Me]] : [!0, ""]
			}

			function k(m) {
				var O, re;
				return !!m.transferIn && !((O = m.transferConditions) === null || O === void 0 ? void 0 : O.not_started) && !!($e(m.name) || ((re = m.registryStatuses) === null || re === void 0 ? void 0 : re.includes(r.rj.PENDING_TRANSFER)))
			}

			function K(m) {
				return !!m.registrar && !!m.currentExpiration
			}

			function Z(m, O = !1) {
				const [re] = Q(m, O);
				return K(m) ? N(m) ? r.M5.InProgressOrOnCF : re ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function oe(m) {
				return m.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(m.transferIn.enter_auth_code) || !1
			}

			function ce(m) {
				return m.registrar === "Cloudflare"
			}

			function x(m) {
				return !!(m == null ? void 0 : m.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function y(m) {
				return !!(m == null ? void 0 : m.includes(r.rj.PENDING_TRANSFER))
			}
			const M = "Invalid date";

			function S(m) {
				return m.newExpiration === M ? "Unavailable" : m.newExpiration
			}

			function U(m) {
				return m.currentExpiration === M ? "Unavailable" : m.currentExpiration
			}

			function $(m) {
				return m.substring(m.indexOf("."))
			}

			function me(m = "") {
				return m.indexOf(".") !== -1 ? m.substring(0, m.indexOf(".")) : m
			}

			function Te(m) {
				return m.map(O => O.name).map(O => $(O)).filter((O, re, Ce) => !Ce.includes(O, re + 1))
			}

			function Ie(m) {
				if (b.no) return [!0, ""];
				if (!ce(m)) return [!1, r.ok.NotOnCF];
				if (m.isCorLocked) return [!1, m.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (m.lastTransferredAt) {
					const O = f()(m.lastTransferredAt),
						re = f().duration(f()().diff(O)).as("days"),
						Ce = $e(m.name);
					if (re < (Ce ? 1 : 60)) return [!1, Ce ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (m.createdAt) {
					const O = f()(m.createdAt);
					if (f().duration(f()().diff(O)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function Ae(m) {
				return !!(b.Bc || m.transferOut)
			}

			function N(m) {
				return Oe(m) || ce(m)
			}

			function pe(m) {
				return !Oe(m) && ce(m)
			}

			function Oe(m) {
				return !m || m.lastKnownStatus === "pendingTransfer" || m.lastKnownStatus === "transferFOAPending" || !ce(m) && m.transferConditions && !m.transferConditions.not_started || !1
			}

			function Re(m) {
				return !(X(m.name) || m.transferConditions && !m.transferConditions.supported_tld)
			}

			function Fe(m) {
				return (m == null ? void 0 : m.includes("/")) ? !0 : m.split("").some(O => O.charCodeAt(0) > 123)
			}

			function Ke(m) {
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

			function Ve(m) {
				return f()(m.paymentExpiresAt).isBefore(f()())
			}

			function ct(m) {
				return m.transferIn && m.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function ze(m) {
				const O = ["CU", "KP", "IR", "SY"];
				return m.filter(re => !O.includes(re.code))
			}

			function Ze(m) {
				if (!!m) return `${m.charAt(0).toUpperCase()}${m.slice(1)}${m.charAt(m.length-1)==="."?"":"."}`
			}

			function Je(m) {
				const O = {};
				for (const [re, Ce] of Object.entries(m)) {
					if (Ce && typeof Ce == "string") {
						Object.assign(O, {
							[re]: Ce.trim()
						});
						continue
					}
					Object.assign(O, {
						[re]: Ce
					})
				}
				return O
			}

			function Be(m) {
				return f()(m).add(40, "days")
			}

			function qe(m) {
				const O = m.paymentExpiresAt || m.payment_expires_at,
					re = Be(O);
				return f()().isBetween(O, re)
			}

			function et(m) {
				var O;
				return !(m == null ? void 0 : m.registryStatuses) || !Array.isArray(m == null ? void 0 : m.registryStatuses) && !(0, e.isString)(m == null ? void 0 : m.registryStatuses) ? !1 : (O = m.registryStatuses) === null || O === void 0 ? void 0 : O.includes(r.rj.REDEMPTION_PERIOD)
			}

			function Ge(m) {
				var O;
				return !(m == null ? void 0 : m.registryStatuses) || !Array.isArray(m == null ? void 0 : m.registryStatuses) && !(0, e.isString)(m == null ? void 0 : m.registryStatuses) ? !1 : (O = m.registryStatuses) === null || O === void 0 ? void 0 : O.includes(r.rj.PENDING_DELETE)
			}

			function tt(m) {
				return [".us"].includes(m)
			}

			function Ye(m) {
				return [".us"].includes(m)
			}

			function nt(m) {
				switch (m) {
					case ".us":
						return _e();
					default:
						return []
				}
			}

			function B(m) {
				switch (m) {
					case ".us":
						return J;
					default:
						return {}
				}
			}
			const J = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function _e() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([m, O]) => ({
						value: m,
						label: O
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([m, O]) => ({
						value: m,
						label: O
					}))
				}]
			}

			function Se(m, O, re) {
				return O[O.length - 1][re] === m[re]
			}

			function Pe(m) {
				return Boolean(Object.keys(m).length === 0)
			}

			function we(m) {
				return f()().add(m, "year").format(T)
			}

			function ke({
				accountName: m
			}) {
				var O;
				const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((O = m.toLowerCase().match(re)) === null || O === void 0 ? void 0 : O[0]) || ""
			}

			function it(m) {
				return !!m.match(_.default.email)
			}

			function lt(m) {
				return m === "Registration banned zone error"
			}

			function Et(m) {
				return m == null ? void 0 : m.startsWith("Quote error")
			}

			function pt(m) {
				return m == null ? void 0 : m.startsWith("Invalid acknowledgement")
			}

			function Qe(m) {
				return m === (0, i.ZP)(n.keys.registration_checkout_trademark_notice_error_message)
			}

			function Le(m) {
				return m === "DNS conflict"
			}

			function fe(m) {
				return m === l.W7.PENDING_UPDATE
			}

			function ae(m) {
				return m ? Object.values(l.wR).filter(O => O !== l.wR.OFFBOARDED).includes(m) : !1
			}

			function ue(m) {
				return m ? [l.wR.LOCKED, l.wR.ONBOARDED, l.wR.ONBOARDING_INITIATED, l.wR.PENDING_REGISTRY_LOCK, l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(m) : !1
			}

			function ge(m) {
				return m ? l.wR.UNLOCKED === m : !1
			}

			function L(m) {
				return m ? l.wR.LOCKED === m : !1
			}

			function H(m) {
				return m ? l.wR.PENDING_REGISTRY_LOCK === m : !1
			}

			function se(m) {
				return m ? [l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(m) : !1
			}

			function Ee(m) {
				var O;
				return !1
			}

			function be(m) {
				var O;
				return !1
			}

			function De(m) {
				var O;
				return !1
			}

			function Ne(m) {
				var O;
				return !1
			}

			function ot(m) {
				var O;
				return !1
			}

			function rt(m) {
				return Object.keys(l.wR).find(O => l.wR[O].toLowerCase() === m.toLowerCase())
			}

			function ve(m) {
				var O;
				const re = (O = rt(m)) === null || O === void 0 ? void 0 : O.toLowerCase();
				return re ? n.keys.protection_status[re] : n.keys.protection_status.unknown
			}

			function je(m) {
				return ["com", "net"].includes(m)
			}

			function ut(m) {
				const O = (0, p.pu)(m);
				return je(O) ? l.wR.PENDING_REGISTRY_LOCK : l.wR.LOCKED
			}

			function Nt(m) {
				return (0, p.pu)(m) === "co" ? 5 : 10
			}

			function mt(m, O) {
				return O ? 1 : (0, p.pu)(m) === "co" ? 5 : (0, p.pu)(m) === "org" ? 1 : 10
			}

			function $e(m) {
				return (0, p.pu)(m) === "uk"
			}

			function Lt(m) {
				return (0, p.pu)(m) === "us"
			}

			function Bt(m) {
				return f()(m).isValid()
			}

			function Ut(m) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(m)
			}

			function Ft(m) {
				return !!(m == null ? void 0 : m.id)
			}

			function jt(m) {
				return m ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(m) : !1
			}

			function We(m) {
				return m ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(m) : !1
			}

			function Dt(m) {
				var O;
				return (m == null ? void 0 : m.lastKnownStatus) ? (O = m.lastKnownStatus) === null || O === void 0 ? void 0 : O.includes("deletionIrredeemable") : !1
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

			function wt(m) {
				if (!m || !m.message) return r.OJ.DEFAULT;
				const {
					message: O
				} = m;
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

			function yt(m) {
				var O, re;
				return !!(((O = m.policies) === null || O === void 0 || (re = O.suspension) === null || re === void 0 ? void 0 : re.parked) && m.policies.suspension.parkingReason)
			}

			function xt(m) {
				var O, re;
				return yt(m) && ((O = m.policies) === null || O === void 0 || (re = O.suspension) === null || re === void 0 ? void 0 : re.parkingReason) === r.qK.EMAIL_VERIFICATION
			}

			function $t(m) {
				var O, re;
				return yt(m) && ((O = m.policies) === null || O === void 0 || (re = O.suspension) === null || re === void 0 ? void 0 : re.parkingReason) === r.qK.TRUST_AND_SAFETY
			}

			function Wt(m) {
				var O;
				return !((O = m.domainMove) === null || O === void 0 ? void 0 : O.ineligibilityReasons.length)
			}

			function zt(m) {
				var O, re;
				return !!((O = m.domainMove) === null || O === void 0 || (re = O.ineligibilityReasons) === null || re === void 0 ? void 0 : re.includes(r.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function gt(m) {
				var O;
				return (O = m.actionableMetadata) === null || O === void 0 ? void 0 : O.find(re => re.type === r.wg.DOMAIN_MOVE)
			}

			function Gt(m) {
				const O = gt(m);
				return (O == null ? void 0 : O.status) === "pending" && O.accountContext === r._5.GAINING
			}

			function Ht(m) {
				const O = gt(m);
				return (O == null ? void 0 : O.status) === "pending" && O.accountContext === r._5.LOSING
			}

			function Kt(m) {
				return !b.Pf.includes($(m.name))
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Bc: function() {
					return b
				},
				Hv: function() {
					return k
				},
				JM: function() {
					return d
				},
				Pf: function() {
					return s
				},
				Py: function() {
					return _
				},
				WK: function() {
					return r
				},
				g5: function() {
					return a
				},
				gM: function() {
					return l
				},
				gf: function() {
					return p
				},
				jk: function() {
					return Q
				},
				no: function() {
					return n
				},
				uY: function() {
					return i
				},
				ui: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../flags.ts");
			const d = "Unknown",
				f = "unknown",
				l = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				_ = Object.keys(l),
				i = !0,
				p = (0, o.J8)("registrar_mock_data") || !1,
				b = (0, o.J8)("registrar_mock_transfer_out") || !1,
				n = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				a = "cf_registrar.enabled",
				c = "@abcABC1234567890123456",
				s = [".us"],
				u = (0, e.BC)`/${"accountId"}`,
				g = (0, e.BC)`${u}/add-site`,
				C = (0, e.BC)`${u}/domains`,
				T = (0, e.BC)`${C}/action-center`,
				P = (0, e.BC)`${C}/${"zoneName"}`,
				w = (0, e.BC)`${P}/configuration`,
				v = (0, e.BC)`${P}/contacts`,
				h = (0, e.BC)`${C}/pricing`,
				I = (0, e.BC)`${C}/protection`,
				R = (0, e.BC)`${C}/register`,
				W = (0, e.BC)`${R}/checkout`,
				V = (0, e.BC)`${R}/checkout/${"token"}`,
				ee = (0, e.BC)`${R}/success`,
				j = (0, e.BC)`${C}/tlds`,
				ne = (0, e.BC)`${C}/transfer`,
				te = (0, e.BC)`${C}/transfer/${"zoneName"}`,
				Y = (0, e.BC)`/registrar/accounts/verify_email`,
				le = (0, e.BC)`/registrar/domains/verify_email`,
				X = (0, e.BC)`/sign-up/registrar`,
				ie = (0, e.BC)`${C}/verify-email`,
				z = (0, e.BC)`${u}/${"zoneName"}`,
				Q = {
					addSite: g,
					domains: C,
					domainsActionCenter: T,
					domainsDomain: P,
					domainsDomainConfiguration: w,
					domainsDomainContacts: v,
					domainsPricing: h,
					domainsProtection: I,
					domainsRegister: R,
					domainsRegisterCheckout: W,
					domainsRegisterCheckoutToken: V,
					domainsRegisterSuccess: ee,
					domainsTlds: j,
					domainsTransfer: ne,
					domainsTransferZone: te,
					registrarAccountsVerifyEmail: Y,
					registrarDomainsVerifyEmail: le,
					signup: X,
					verifyEmail: ie,
					zone: z
				},
				k = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(F, E, t) {
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
				d = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				f = t.n(d),
				l = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function _(a) {
				for (var c = 1; c < arguments.length; c++) {
					var s = arguments[c] != null ? Object(arguments[c]) : {},
						u = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(s).filter(function(g) {
						return Object.getOwnPropertyDescriptor(s, g).enumerable
					})), u.forEach(function(g) {
						i(a, g, s[g])
					})
				}
				return a
			}

			function i(a, c, s) {
				return c = p(c), c in a ? Object.defineProperty(a, c, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[c] = s, a
			}

			function p(a) {
				var c = b(a, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function b(a, c) {
				if (typeof a != "object" || a === null) return a;
				var s = a[Symbol.toPrimitive];
				if (s !== void 0) {
					var u = s.call(a, c || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(a)
			}
			let n = function(a) {
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a.DOMAIN_MOVE_START_FLOW = "Start domain move flow", a.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", a.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", a.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", a.DOMAIN_MOVE_SUBMIT = "Submit domain move", a.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", a.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", a.DOMAIN_MOVE_CANCEL = "Domain move cancel", a.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", a.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", a.ACTION_CENTER_NAVIGATE = "Navigate to actions center", a.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", a
			}({});

			function r(a, c, s) {
				if (!(c == null ? void 0 : c.name)) return null;
				f().sendEvent(a, _({
					domain: {
						name: c.name,
						premium: (0, l.Uy)(c == null ? void 0 : c.premiumType),
						paymentExpiresAt: o()(c == null ? void 0 : c.paymentExpiresAt).format()
					},
					category: "registrar"
				}, s))
			}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(F, E, t) {
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
		"../react/pages/hyperdrive/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				KO: function() {
					return i
				},
				L9: function() {
					return n
				},
				N3: function() {
					return b
				},
				zE: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function d(r) {
				for (var a = 1; a < arguments.length; a++) {
					var c = arguments[a] != null ? Object(arguments[a]) : {},
						s = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && s.push.apply(s, Object.getOwnPropertySymbols(c).filter(function(u) {
						return Object.getOwnPropertyDescriptor(c, u).enumerable
					})), s.forEach(function(u) {
						f(r, u, c[u])
					})
				}
				return r
			}

			function f(r, a, c) {
				return a = l(a), a in r ? Object.defineProperty(r, a, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = c, r
			}

			function l(r) {
				var a = _(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function _(r, a) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var s = c.call(r, a || "default");
					if (typeof s != "object") return s;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let i = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r
				}({}),
				p = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				b = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const n = (r, a = {}) => {
				o().sendEvent(r, d({}, a, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/magic/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				GF: function() {
					return a
				},
				H3: function() {
					return i
				},
				H8: function() {
					return l
				},
				J: function() {
					return s
				},
				Nz: function() {
					return p
				},
				UQ: function() {
					return g
				},
				Up: function() {
					return f
				},
				W8: function() {
					return b
				},
				Ws: function() {
					return C
				},
				Xg: function() {
					return r
				},
				_j: function() {
					return d
				},
				a4: function() {
					return c
				},
				jS: function() {
					return u
				},
				rF: function() {
					return _
				},
				rG: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/utils/translator.tsx");
			const d = {
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
				l = T => [{
					value: "low",
					label: T("setting.low")
				}, {
					value: "mid",
					label: T("setting.medium")
				}, {
					value: "high",
					label: T("setting.high")
				}],
				_ = T => [{
					value: "request",
					label: T("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: T("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				i = T => [{
					value: "unidirectional",
					label: T("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: T("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				p = "magic-transit",
				b = "magic-wan",
				n = "gre_tunnel",
				r = "ipsec_tunnel",
				a = 64,
				c = 1476,
				s = "mid",
				u = "reply",
				g = T => [{
					value: void 0,
					label: T("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: T("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: T("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				C = T => [{
					value: "all",
					label: T("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: T("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: T("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				_u: function() {
					return o
				},
				bK: function() {
					return e
				},
				lC: function() {
					return d
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
				d = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				VZ: function() {
					return f
				},
				lC: function() {
					return d
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
				d = "user journey",
				f = {
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
		"../react/pages/magic/packet-captures/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				W_: function() {
					return o
				},
				X: function() {
					return e
				},
				lC: function() {
					return d
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
				d = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				gb: function() {
					return n
				},
				iP: function() {
					return R
				},
				xL: function() {
					return T
				},
				rD: function() {
					return V
				},
				oT: function() {
					return s
				},
				i2: function() {
					return ee
				},
				x1: function() {
					return _
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
					return w
				},
				PJ: function() {
					return W
				},
				bK: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				d = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				l = t("../node_modules/@cloudflare/elements/es/index.js");
			const _ = () => o().createElement(i, null, o().createElement("svg", {
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
				i = (0, d.createComponent)(({
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
				p = () => o().createElement(b, null, o().createElement("svg", {
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
				b = (0, d.createComponent)(({
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
				n = () => o().createElement(r, null, o().createElement(l.Ei, {
					alt: "airplane",
					src: f,
					width: "85%"
				})),
				r = (0, d.createComponent)(({
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
				c = (0, d.createComponent)(({
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
				s = () => o().createElement(u, null, o().createElement("svg", {
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
				u = (0, d.createComponent)(({
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
				g = () => o().createElement(C, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				C = (0, d.createComponent)(({
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
				T = () => o().createElement(P, null, o().createElement("svg", {
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
				P = (0, d.createComponent)(({
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
				w = () => o().createElement(v, null, o().createElement("svg", {
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
				v = (0, d.createComponent)(({
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
				h = () => o().createElement(I, null, o().createElement("svg", {
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
				I = (0, d.createComponent)(({
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
				R = () => o().createElement("svg", {
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
				W = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				A2: function() {
					return i
				},
				He: function() {
					return l
				},
				N$: function() {
					return _
				},
				Qq: function() {
					return d
				},
				ST: function() {
					return f
				},
				wM: function() {
					return o
				}
			});
			var e = t("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				d = "login-apple-jwt",
				f = "cf-test",
				l = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				_ = p => [{
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
				i = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				_: function() {
					return d
				},
				c: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let d = function(l) {
				return l.TEMPLATE_SELECTED = "template selected", l.TEMPLATE_PRODUCT_SELECTED = "template product selected", l.TEMPLATE_SAVE_DRAFT = "template save draft", l.TEMPLATE_CANCEL = "template cancel", l.TEMPLATE_DEPLOY = "template deploy", l
			}({});
			const f = (l, _) => o().sendEvent(l, {
				template_name: _
			})
		},
		"../react/pages/pages/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				A: function() {
					return g
				},
				C1: function() {
					return b
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
					return l
				},
				L7: function() {
					return d
				},
				Li: function() {
					return u
				},
				Ni: function() {
					return I
				},
				OG: function() {
					return X
				},
				QF: function() {
					return Y
				},
				QV: function() {
					return h
				},
				Sx: function() {
					return w
				},
				Ub: function() {
					return te
				},
				X3: function() {
					return r
				},
				aP: function() {
					return i
				},
				eO: function() {
					return a
				},
				fH: function() {
					return s
				},
				fQ: function() {
					return C
				},
				fR: function() {
					return e
				},
				hE: function() {
					return ne
				},
				iS: function() {
					return T
				},
				ku: function() {
					return ee
				},
				nY: function() {
					return v
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
					return n
				},
				zF: function() {
					return W
				},
				zG: function() {
					return R
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-workers-and-pages",
				d = {
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
				f = "Allow Members - Cloudflare Pages",
				l = 58,
				_ = {
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
				i = "production",
				p = 2e3,
				b = 100,
				n = 350,
				r = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				c = 10,
				s = "_headers",
				u = "_redirects",
				g = "_routes.json",
				C = "_worker.js",
				T = "do-a-barrel-roll",
				P = [s, u, g, C],
				w = 1024 * 1024 * 25,
				v = 1e3,
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
				I = 1e5,
				R = 75e3,
				W = 2e5,
				V = 15e4,
				ee = "workers",
				j = "cloudflare_pages_build_caching",
				ne = 2;
			let te = function(ie) {
				return ie[ie.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", ie[ie.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", ie[ie.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", ie[ie.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", ie[ie.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", ie[ie.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", ie
			}({});
			const Y = 1,
				le = 2,
				X = 2
		},
		"../react/pages/pages/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return d
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
				d = {
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
				f = _ => `${_.subdomain}.pages.dev`,
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
		"../react/pages/pipelines/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				KO: function() {
					return i
				},
				L9: function() {
					return b
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function d(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						c = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(a).filter(function(s) {
						return Object.getOwnPropertyDescriptor(a, s).enumerable
					})), c.forEach(function(s) {
						f(n, s, a[s])
					})
				}
				return n
			}

			function f(n, r, a) {
				return r = l(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function l(n) {
				var r = _(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function _(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var c = a.call(n, r || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let i = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				p = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const b = (n, r = {}) => {
				o().sendEvent(n, d({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return d
				},
				Jg: function() {
					return _
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
				d = {
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
				f = i => {
					const p = "r2.cloudflarestorage.com";
					switch (i) {
						case "default":
							return p;
						case "eu":
							return `eu.${p}`;
						case "fedramp":
							return `fedramp.${p}`
					}
				},
				l = (i, p) => {
					const b = f(p);
					return `https://${i}.${b}`
				},
				_ = (i, p, b) => `${l(i,p)}/${b}`
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Gk: function() {
					return a
				},
				LA: function() {
					return b
				},
				Wk: function() {
					return r
				},
				_V: function() {
					return i
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

			function d(c) {
				for (var s = 1; s < arguments.length; s++) {
					var u = arguments[s] != null ? Object(arguments[s]) : {},
						g = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(u).filter(function(C) {
						return Object.getOwnPropertyDescriptor(u, C).enumerable
					})), g.forEach(function(C) {
						f(c, C, u[C])
					})
				}
				return c
			}

			function f(c, s, u) {
				return s = l(s), s in c ? Object.defineProperty(c, s, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[s] = u, c
			}

			function l(c) {
				var s = _(c, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function _(c, s) {
				if (typeof c != "object" || c === null) return c;
				var u = c[Symbol.toPrimitive];
				if (u !== void 0) {
					var g = u.call(c, s || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(c)
			}
			const i = "blocked-content-table-tooltip",
				p = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					canceled: "gray"
				},
				b = ["phishing_interstitial", "malware_interstitial", "legal_block"],
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
					filters: Object.values(e.GH).reduce((c, s) => d({}, c, {
						[s]: s
					}), {})
				};
			let a = function(c) {
				return c.COPY_URL = "copy blocked content url", c.REQUEST_REVIEW = "request blocked content review", c.ADD_FILTER = "Add filter", c.REMOVE_FILTER = "Remove filter", c
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$E: function() {
					return e
				},
				GH: function() {
					return d
				},
				M3: function() {
					return o
				},
				fL: function() {
					return f
				}
			});
			let e = function(_) {
					return _.Pending = "pending", _.Active = "active", _
				}({}),
				o = function(_) {
					return _.Active = "active", _.InReview = "in_review", _.Pending = "pending", _.Canceled = "canceled", _
				}({}),
				d = function(_) {
					return _.Domain = "domain", _.Status = "status", _.BlockType = "blockType", _
				}({}),
				f = function(_) {
					return _.EnforcementDate = "enforcementDate", _.BlockType = "blockType", _.Hostname = "hostname", _.Status = "status", _
				}({}),
				l = function(_) {
					return _.Removed = "removed", _.Misclassified = "misclassified", _
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				R: function() {
					return e
				},
				v: function() {
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
			}
		},
		"../react/pages/security/analytics/labels.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AU: function() {
					return d
				},
				Bc: function() {
					return o
				},
				Bt: function() {
					return e
				},
				e_: function() {
					return f
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
				d = {
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
					[d.ASN]: "firewall.analytics.services.labels.asn",
					[d.COUNTRY]: "firewall.analytics.services.labels.country",
					[d.IP]: "firewall.analytics.services.labels.ip",
					[d.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[d.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[d.VALIDATION]: "firewall.analytics.services.labels.validation",
					[d.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[d.WAF]: "firewall.analytics.services.labels.waf",
					[d.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[d.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[d.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[d.BIC]: "firewall.analytics.services.labels.bic",
					[d.HOT]: "firewall.analytics.services.labels.hot",
					[d.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[d.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[d.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[d.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[d.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[d.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[d.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[d.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[d.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[d.DLP]: "firewall.analytics.services.labels.dlp",
					[d.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				}
		},
		"../react/pages/security/api-shield/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Fj: function() {
					return p
				},
				kq: function() {
					return i
				},
				xr: function() {
					return b
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function d(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						c = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(a).filter(function(s) {
						return Object.getOwnPropertyDescriptor(a, s).enumerable
					})), c.forEach(function(s) {
						f(n, s, a[s])
					})
				}
				return n
			}

			function f(n, r, a) {
				return r = l(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function l(n) {
				var r = _(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function _(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var c = a.call(n, r || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let i = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const p = {
					[i.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[i.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[i.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[i.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[i.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[i.JWT_VALIDATION]: {
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
					[i.SETTINGS]: {
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
				b = ({
					name: n,
					category: r = "user journey",
					product: a = i.MAIN,
					productName: c,
					additionalData: s
				}) => {
					o().sendEvent(n, d({
						category: r,
						product: a,
						productName: c
					}, s || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				N3: function() {
					return e
				},
				UN: function() {
					return d
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
			const d = "user journey"
		},
		"../react/pages/security/constants.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				_C: function() {
					return c
				},
				_R: function() {
					return s
				},
				dY: function() {
					return g
				},
				fy: function() {
					return P
				},
				ji: function() {
					return a
				},
				pR: function() {
					return u
				},
				pV: function() {
					return w
				},
				rj: function() {
					return T
				},
				zf: function() {
					return C
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				o = t("../../../common/util/types/src/api/phases/fields.tsx"),
				d = t("webpack/sharing/consume/default/react/react"),
				f = t.n(d),
				l = t("../react/utils/translator.tsx"),
				_ = t("../react/pages/security/types.ts"),
				i = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx");

			function p(v) {
				for (var h = 1; h < arguments.length; h++) {
					var I = arguments[h] != null ? Object(arguments[h]) : {},
						R = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(I).filter(function(W) {
						return Object.getOwnPropertyDescriptor(I, W).enumerable
					})), R.forEach(function(W) {
						b(v, W, I[W])
					})
				}
				return v
			}

			function b(v, h, I) {
				return h = n(h), h in v ? Object.defineProperty(v, h, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[h] = I, v
			}

			function n(v) {
				var h = r(v, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function r(v, h) {
				if (typeof v != "object" || v === null) return v;
				var I = v[Symbol.toPrimitive];
				if (I !== void 0) {
					var R = I.call(v, h || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(v)
			}
			const a = 10;
			let c = function(v) {
					return v.MTLS_ACCESS = "mTLS-enforced authentication", v.ZONE_LOCKDOWN = "Zone lockdown", v.USER_AGENT = "User agent blocking", v.EMAIL_VALIDITY = "Disposable email checks", v.IP_BASED = "IP-based rule", v.GEOGRAPHY_BASE = "Geography-based rule", v
				}({}),
				s = function(v) {
					return v.LEAKED_CREDENTIALS = "Leaked Credentials Checks", v
				}({});
			const u = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				g = [{
					title: "firewall.tools.toast.geography",
					template: c.GEOGRAPHY_BASE,
					trackedEvent: u.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					template: c.IP_BASED,
					trackedEvent: u.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					template: c.USER_AGENT,
					trackedEvent: u.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					template: c.ZONE_LOCKDOWN,
					trackedEvent: u.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				C = {
					[_.X.UI_SECTION]: v => ({
						[c.MTLS_ACCESS]: {
							ruleName: c.MTLS_ACCESS,
							displayName: f().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: f().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${v.account.id}/${v.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[c.ZONE_LOCKDOWN]: {
							ruleName: c.ZONE_LOCKDOWN,
							displayName: f().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							wafRulesOverview: f().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${v.account.id}/configurations/lists`
								}]
							})
						},
						[c.USER_AGENT]: {
							ruleName: c.USER_AGENT,
							displayName: f().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							wafRulesOverview: f().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${v.account.id}/configurations/lists`
								}]
							})
						},
						[c.EMAIL_VALIDITY]: {
							ruleName: c.EMAIL_VALIDITY,
							displayName: f().createElement(l.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: f().createElement(l.cC, {
								id: "custom-rules.templates.rule.disposable_email.wafRulesOverview"
							}),
							hasWafPermission: !0
						}
					}),
					[_.X.WAF_RULES]: {
						[c.MTLS_ACCESS]: {
							description: "custom-rules.templates.rule.mtls_access.name",
							expression: '(not cf.tls_client_auth.cert_verified and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.mtls_access.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[c.ZONE_LOCKDOWN]: {
							description: "custom-rules.templates.rule.zone_lockdown.name",
							expression: '(not ip.src in $0 and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.zone_lockdown.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[c.USER_AGENT]: {
							description: "custom-rules.templates.rule.user_agent.name",
							expression: '(http.user_agent eq "BadBot/1.0.2 (+http://bad.bot))"',
							helper: {
								text: "custom-rules.templates.rule.user_agent.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[c.EMAIL_VALIDITY]: {
							description: "custom-rules.templates.rule.disposable_email.name",
							expression: "(cf.fraud_detection.disposable_email)",
							defaultAction: "block",
							emptySelectValue: !0
						},
						[c.GEOGRAPHY_BASE]: {
							description: "custom-rules.templates.rule.geography.name",
							expression: '(ip.geoip.asnum eq "") or (ip.geoip.country eq "") or (ip.geoip.continent eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						},
						[c.IP_BASED]: {
							description: "firewall.tools.toast.ip",
							expression: '(ip.src eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						}
					}
				},
				T = {
					[_.X.WAF_RULES]: {
						[s.LEAKED_CREDENTIALS]: {
							ruleName: s.LEAKED_CREDENTIALS,
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
					[_.X.UI_SECTION]: {
						[s.LEAKED_CREDENTIALS]: {
							ruleName: s.LEAKED_CREDENTIALS,
							displayName: f().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: f().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let P = function(v) {
				return v.DISCOVERY = "discovery", v.SEQUENCES = "sequences", v.SCHEMA_VALIDATION = "schema-validation", v.SETTINGS = "settings", v.API_RULES = "api-rules", v.UPGRADE = "upgrade", v
			}({});
			const w = p({}, i.g, {
				[o.df.HttpRequestFirewallManaged]: p({}, i.g[o.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[o.df.HttpRequestFirewallCustom]: p({}, i.g[o.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[o.df.HttpRateLimit]: p({}, i.g[o.df.HttpRateLimit], {
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
		"../react/pages/security/page-shield/tracking.ts": function(F, E, t) {
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
		"../react/pages/security/rulesets/tracking.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				QK: function() {
					return e
				},
				dy: function() {
					return o
				},
				sO: function() {
					return d
				},
				x4: function() {
					return f
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
				d = (l, _) => {
					var i;
					return `${_} ${(i=o[l])!==null&&i!==void 0?i:l} rule${_===e.GET?"s":""}`
				},
				f = () => {
					var l, _;
					return (l = Object.keys(o)) === null || l === void 0 || (_ = l.map(i => {
						var p;
						return (p = Object.values(e)) === null || p === void 0 ? void 0 : p.map(b => d(i, b))
					})) === null || _ === void 0 ? void 0 : _.flat()
				}
		},
		"../react/pages/security/security-analytics/logs/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AS: function() {
					return _
				},
				IK: function() {
					return r
				},
				Ki: function() {
					return d
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
					return n
				},
				x3: function() {
					return i
				}
			});
			var e = t("../react/pages/security/analytics/labels.ts"),
				o = t("../react/common/constants/analytics/botScoreSrc.ts");
			const d = ["block", "challenge", "jschallenge", "managedChallenge"],
				f = ["miss", "expired", "bypass", "dynamic"],
				l = s => Object.fromEntries(Object.entries(s).map(([u, g]) => [g, u])),
				_ = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				i = l(_),
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
				b = l(p),
				n = l(o.EG);
			let r = function(s) {
				return s.SAMPLED = "sampled", s.RAW = "raw", s
			}({});
			const a = "security-analytics-log-explorer";
			let c = function(s) {
				return s.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', s.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', s.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', s.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', s.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', s
			}({})
		},
		"../react/pages/security/settings/cards/security-txt/helpers.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$E: function() {
					return n
				},
				Mb: function() {
					return r
				},
				Q4: function() {
					return c
				},
				QF: function() {
					return b
				},
				Wv: function() {
					return a
				},
				vc: function() {
					return s
				}
			});
			var e = t("../react/pages/security/settings/cards/security-txt/types.ts"),
				o = t("../../../../node_modules/yup/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				f = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function l(u) {
				for (var g = 1; g < arguments.length; g++) {
					var C = arguments[g] != null ? Object(arguments[g]) : {},
						T = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(C).filter(function(P) {
						return Object.getOwnPropertyDescriptor(C, P).enumerable
					})), T.forEach(function(P) {
						_(u, P, C[P])
					})
				}
				return u
			}

			function _(u, g, C) {
				return g = i(g), g in u ? Object.defineProperty(u, g, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[g] = C, u
			}

			function i(u) {
				var g = p(u, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function p(u, g) {
				if (typeof u != "object" || u === null) return u;
				var C = u[Symbol.toPrimitive];
				if (C !== void 0) {
					var T = C.call(u, g || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(u)
			}
			const b = {
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
				r = u => o.Ry({
					[e.T.CONTACT]: o.IX().of(o.Z_().required(u("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, u("security_txt.fields.contact.format_error"))),
					[e.T.EXPIRES]: o.hT().required(u("common.required")).min(new Date, u("security_txt.fields.expires.min_error"))
				}),
				a = u => {
					const g = {};
					for (const C in u) g[C] = Array.isArray(u[C]) ? u[C].filter(T => !!T) : u[C];
					return l({}, g, {
						expires: (0, f.DZ)(u.expires)
					})
				},
				c = (u, g, C) => {
					const T = [...new Set([e.T.CONTACT, e.T.EXPIRES, ...Object.values(e.T)])],
						P = Object.entries(u).sort(([w], [v]) => T.indexOf(w) - T.indexOf(v)).filter(([w, v]) => !!n[w] && !!v && (!Array.isArray(v) || !!v.length)).map(([w, v]) => Array.isArray(v) ? v.map(h => `${C(n[w].label)}: ${h}`).join(`
`) : `${C(n[w].label)}: ${v}`).join(`
`);
					(0, d.yH)(`Cloudflare_${g}_security.txt`, P, "text/plain;charset=utf-8")
				};
			let s = function(u) {
				return u.CREATED = "created security.txt", u.ENABLED = "enabled security.txt", u.DISABLED = "disabled security.txt", u.DOWNLOADED = "downloaded security.txt", u.UPDATED = "updated security.txt", u.DELETED = "deleted security.txt", u
			}({})
		},
		"../react/pages/security/settings/cards/security-txt/types.ts": function(F, E, t) {
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
		"../react/pages/security/settings/labels/api/helpers.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Mi: function() {
					return P
				},
				hL: function() {
					return T
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				d = t("../react/common/utils/useQueryCache.ts"),
				f = t("../react/pages/security/settings/resources/constants/index.ts"),
				l = t("../react/common/hooks/useAccountId.ts"),
				_ = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				i = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const p = {
				labels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var b = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils/index.ts"),
				r = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(v, h) {
				if (v == null) return {};
				var I = c(v, h),
					R, W;
				if (Object.getOwnPropertySymbols) {
					var V = Object.getOwnPropertySymbols(v);
					for (W = 0; W < V.length; W++) R = V[W], !(h.indexOf(R) >= 0) && (!Object.prototype.propertyIsEnumerable.call(v, R) || (I[R] = v[R]))
				}
				return I
			}

			function c(v, h) {
				if (v == null) return {};
				var I = {},
					R = Object.keys(v),
					W, V;
				for (V = 0; V < R.length; V++) W = R[V], !(h.indexOf(W) >= 0) && (I[W] = v[W]);
				return I
			}

			function s(v) {
				for (var h = 1; h < arguments.length; h++) {
					var I = arguments[h] != null ? Object(arguments[h]) : {},
						R = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(I).filter(function(W) {
						return Object.getOwnPropertyDescriptor(I, W).enumerable
					})), R.forEach(function(W) {
						u(v, W, I[W])
					})
				}
				return v
			}

			function u(v, h, I) {
				return h = g(h), h in v ? Object.defineProperty(v, h, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[h] = I, v
			}

			function g(v) {
				var h = C(v, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function C(v, h) {
				if (typeof v != "object" || v === null) return v;
				var I = v[Symbol.toPrimitive];
				if (I !== void 0) {
					var R = I.call(v, h || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(v)
			}
			const T = v => {
					const h = (0, e.p4)(o.Cu),
						I = (0, l.F)(),
						R = w.labels(s({
							accountId: I,
							zoneId: h
						}, v ? s({}, v) : {})),
						W = (0, d.o)(R);
					return s({
						zoneId: h,
						queryKey: R,
						batchInvalidateLabels: async () => {
							await W.batchInvalidate({
								queryKeysToPredicateInvalidate: [f.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, W)
				},
				P = {
					getLabels: async v => {
						var h, I, R, W;
						let {
							zoneId: V,
							hideErrorAlert: ee = !0
						} = v, j = a(v, ["zoneId", "hideErrorAlert"]);
						return (await _.get(p.labels.toUrl({
							zoneId: V
						}), {
							parameters: {
								page: j == null ? void 0 : j.page,
								per_page: j == null ? void 0 : j.per_page,
								with_mapped_resource_counts: j == null ? void 0 : j.with_mapped_resource_counts,
								filter: j == null || (h = j.filters) === null || h === void 0 ? void 0 : h.search,
								source: (0, n.sQ)(j == null || (I = j.filters) === null || I === void 0 ? void 0 : I.source),
								order: j == null || (R = j.sort) === null || R === void 0 ? void 0 : R.id,
								direction: (j == null ? void 0 : j.sort) ? (j == null || (W = j.sort) === null || W === void 0 ? void 0 : W.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: ee
						})).body
					},
					getLabel: async v => {
						let {
							zoneId: h,
							labelName: I,
							hideErrorAlert: R = !0
						} = v, W = a(v, ["zoneId", "labelName", "hideErrorAlert"]);
						const V = (0, n.mm)(I) ? p.managedLabel.toUrl({
							zoneId: h,
							labelName: I
						}) : p.userLabel.toUrl({
							zoneId: h,
							labelName: I
						});
						return (await _.get(V, {
							parameters: {
								with_mapped_resource_counts: W == null ? void 0 : W.with_mapped_resource_counts
							},
							hideErrorAlert: R
						})).body
					},
					editLabel: async ({
						zoneId: v,
						label: h,
						replace: I
					}) => {
						const {
							name: R
						} = h, W = a(h, ["name"]);
						return (await (I ? _.put : _.patch)(p.userLabel.toUrl({
							zoneId: v,
							labelName: h.name
						}), {
							body: W
						})).body
					},
					deleteLabel: async ({
						zoneId: v,
						labelName: h
					}) => (await _.del(p.userLabel.toUrl({
						zoneId: v,
						labelName: h
					}))).body,
					createLabel: async v => {
						let {
							zoneId: h
						} = v, I = a(v, ["zoneId"]);
						const {
							product: R
						} = I, W = a(I, ["product"]);
						return (await _.post(p.userLabels.toUrl({
							zoneId: h
						}), {
							body: [W]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: v,
						user: h,
						managed: I,
						operationIds: R,
						replace: W
					}) => (await (W ? _.put : _.post)(p.operationsLinkedToLabels.toUrl({
						zoneId: v
					}), {
						body: s({}, h ? {
							user: {
								labels: h
							}
						} : {}, I ? {
							managed: {
								labels: I
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: R
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: v,
						labelName: h,
						operationIds: I
					}) => {
						const R = (0, n.mm)(h) ? p.managedLabelOperations.toUrl({
							zoneId: v,
							labelName: h
						}) : p.userLabelOperations.toUrl({
							zoneId: v,
							labelName: h
						});
						return (await _.put(R, {
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
				w = {
					labels: v => {
						let {
							accountId: h,
							zoneId: I
						} = v, R = a(v, ["accountId", "zoneId"]);
						return [f.IQ.LABELS, h, I, ...(0, b.isEmpty)(R) ? [] : [R]]
					}
				}
		},
		"../react/pages/security/settings/labels/api/hooks/useGetLabel.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				E: function() {
					return b
				},
				V: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				d = t("../../../../node_modules/react-query/es/index.js"),
				f = t("../react/pages/security/settings/labels/api/helpers.ts");

			function l(r) {
				for (var a = 1; a < arguments.length; a++) {
					var c = arguments[a] != null ? Object(arguments[a]) : {},
						s = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && s.push.apply(s, Object.getOwnPropertySymbols(c).filter(function(u) {
						return Object.getOwnPropertyDescriptor(c, u).enumerable
					})), s.forEach(function(u) {
						_(r, u, c[u])
					})
				}
				return r
			}

			function _(r, a, c) {
				return a = i(a), a in r ? Object.defineProperty(r, a, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = c, r
			}

			function i(r) {
				var a = p(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function p(r, a) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var s = c.call(r, a || "default");
					if (typeof s != "object") return s;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const b = r => {
					const {
						queryKey: a,
						zoneId: c
					} = (0, f.hL)(r), {
						isLoading: s,
						isError: u,
						isSuccess: g,
						data: C,
						refetch: T,
						isRefetching: P
					} = (0, d.useQuery)({
						queryKey: a,
						queryFn: () => f.Mi.getLabel(l({
							zoneId: c
						}, r)),
						enabled: !!(r == null ? void 0 : r.labelName)
					});
					return {
						data: C == null ? void 0 : C.result,
						errors: C == null ? void 0 : C.errors,
						paginationData: C == null ? void 0 : C.result_info,
						isLoading: s,
						isError: u,
						isSuccess: g,
						refetch: T,
						isRefetching: P
					}
				},
				n = r => {
					const a = (0, d.useQueryClient)(),
						{
							queryKey: c,
							zoneId: s
						} = (0, f.hL)(r),
						u = (0, e.useCallback)(async ({
							labelName: C
						}) => {
							if (!C) throw new Error("Error: unable to get label; missing label name");
							return await f.Mi.getLabel(l({
								zoneId: s,
								labelName: C
							}, r))
						}, [s, r]);
					return {
						getLabel: (0, e.useCallback)(async ({
							labelName: C
						}) => await a.fetchQuery(c, () => u({
							labelName: C
						}), {
							staleTime: 0,
							cacheTime: 0
						}), [a, c, u])
					}
				}
		},
		"../react/pages/security/settings/resources/constants/constants.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				DG: function() {
					return s
				},
				GE: function() {
					return v
				},
				IQ: function() {
					return f
				},
				KV: function() {
					return _
				},
				QH: function() {
					return r
				},
				V: function() {
					return T
				},
				W3: function() {
					return d
				},
				_8: function() {
					return b
				},
				_c: function() {
					return P
				},
				aW: function() {
					return u
				},
				gY: function() {
					return w
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
					return l
				},
				zF: function() {
					return h
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				o = t("../react/pages/security/settings/resources/constants/labelsTableProperties.tsx");
			const d = "all";
			let f = function(I) {
					return I.LABELS = "labels", I
				}({}),
				l = function(I) {
					return I.USER = "user", I.MANAGED = "managed", I
				}({}),
				_ = function(I) {
					return I.SOURCE = "source", I
				}({});
			const b = {
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
						[_.SOURCE]: d
					}
				},
				filters: _,
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
				c = /^[\x20-\x7E]+$/,
				s = /^[A-Za-z0-9-]+$/,
				u = /^cf-/;
			let g = function(I) {
				return I.NAME = "name", I.DESCRIPTION = "description", I
			}({});
			const C = "all";
			let T = function(I) {
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
						[T.METHOD]: C,
						[T.HOSTNAME]: C
					}
				},
				filters: T
			};
			let w = function(I) {
				return I.TITLE = "title", I.DESCRIPTION = "description", I.SUBMIT = "submit", I
			}({});
			const v = 1e3,
				h = {
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
		"../react/pages/security/settings/resources/constants/index.ts": function(F, E, t) {
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
					return d
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
			var e = t("../react/pages/security/settings/resources/constants/constants.tsx"),
				o = t("../react/pages/security/settings/resources/constants/labelsTableProperties.tsx");
			let d = function(l) {
					return l.ENDPOINT = "endpoint", l.METHOD = "method", l.OPERATION_ID = "operationId", l
				}({}),
				f = function(l) {
					return l.NAME = "name", l.SOURCE = "source", l.NEW_LABEL_NAME = "newLabelName", l
				}({})
		},
		"../react/pages/security/settings/resources/constants/labelsTableProperties.tsx": function(F, E, t) {
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
		"../react/pages/security/settings/resources/utils/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Iv: function() {
					return l.Iv
				},
				ZF: function() {
					return l.ZF
				},
				Vy: function() {
					return o
				},
				mm: function() {
					return f
				},
				m8: function() {
					return l.m8
				},
				sQ: function() {
					return d
				},
				vU: function() {
					return n
				},
				vE: function() {
					return C
				},
				u_: function() {
					return v
				},
				rP: function() {
					return b
				}
			});
			var e = t("../react/pages/security/settings/resources/constants/index.ts");
			const o = h => (h == null ? void 0 : h.source) === e.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (h == null ? void 0 : h.source) === e.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				d = h => h === e.W3 ? void 0 : h,
				f = h => e.aW.test(h);
			var l = t("../react/pages/security/settings/resources/utils/tracking.ts"),
				_ = t("webpack/sharing/consume/default/react/react"),
				i = t("../../../../node_modules/lodash/lodash.js"),
				p = t("../react/pages/security/settings/labels/api/hooks/useGetLabel.ts");
			const b = () => {
					const [h, I] = (0, _.useState)(!0), [R, W] = (0, _.useState)(!1), [V, ee] = (0, _.useState)(!1), {
						getLabel: j
					} = (0, p.V)(), ne = (0, _.useRef)(null), te = (0, _.useRef)(""), Y = (0, _.useCallback)(async z => {
						W(!0);
						try {
							const {
								success: Q
							} = await j({
								labelName: z
							});
							I(!Q), te.current = z
						} catch {
							I(!0)
						} finally {
							W(!1), ee(!1)
						}
					}, [j]), le = (0, _.useCallback)(z => {
						ne.current || (ne.current = (0, i.debounce)(Y, 400)), ee(!0), ne.current(z)
					}, [Y]), X = (0, _.useCallback)(z => {
						const {
							value: Q
						} = z.target;
						le(Q)
					}, [le]), ie = (0, _.useCallback)(async z => {
						(V || z !== te.current) && (ne.current && ne.current.cancel(), await Y(z))
					}, [V, Y]);
					return {
						isLabelUnique: h,
						setIsLabelUnique: I,
						handleInputChange: X,
						isLoading: R,
						isCheckPending: V,
						ensureChecked: ie
					}
				},
				n = ({
					modalHeaderFixedHeight: h = 62,
					modalDefaultPaddings: I = 16
				} = {}) => {
					const R = (0, _.useRef)(null),
						W = (0, _.useRef)(null),
						[V, ee] = (0, _.useState)(0),
						[j, ne] = (0, _.useState)(0),
						te = `calc(100vh - ${V}px - ${j}px - ${I}px)`,
						[Y, le] = (0, _.useState)("");
					return (0, _.useEffect)(() => {
						const X = () => {
							var ie, z, Q, k;
							const K = R == null || (ie = R.current) === null || ie === void 0 ? void 0 : ie.offsetHeight,
								Z = W == null || (z = W.current) === null || z === void 0 ? void 0 : z.offsetHeight,
								oe = ((Q = K) !== null && Q !== void 0 ? Q : 0) + h,
								ce = (k = Z) !== null && k !== void 0 ? k : 0;
							ee(oe), ne(ce)
						};
						return X(), window.addEventListener("resize", X), () => window.removeEventListener("resize", X)
					}, []), {
						searchTerm: Y,
						setSearchTerm: le,
						scrollableSectionMaxHeight: te,
						topMenuRef: R,
						bottomMenuRef: W
					}
				};
			var r = t("../react/common/hooks/useZoneEntitlement.ts"),
				a = t("../react/common/hooks/useGate.ts");
			const c = "central_endpoint_list.endpoint_labels_allowed",
				s = "system-and-user-generated-labels",
				u = () => !!(0, a.Z)(s),
				g = () => !!(0, r.Z)(c),
				C = () => {
					const h = u(),
						I = g();
					return {
						isLabelsGateOpen: h,
						hasEndpointLabelsEntitlement: I,
						hasLabels: h && I
					}
				};
			var T = t("../../../../node_modules/yup/es/index.js"),
				P = t("../react/utils/translator.tsx"),
				w = t("../react/pages/security/settings/resources/constants/constants.tsx");
			const v = () => {
				const {
					t: h
				} = (0, P.QT)(), I = T.Z_().required(h("common.field_is_required")).max(24, h("labels.apply.form.name.error.max_characters")).matches(w.DG, h("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", h("labels.apply.form.name.error.cf_forbidden"), V => !w.aW.test(V)), R = {
					NAMES: {
						CREATE: "labels-create-form",
						EDIT: "labels-edit-form",
						APPLY: "labels-apply-form"
					},
					INITIAL_VALUES: {
						name: "",
						description: ""
					},
					VALIDATION_SCHEMA: V => T.Ry().shape({
						[w.n5.NAME]: V ? T.Z_() : I,
						[w.n5.DESCRIPTION]: V ? T.Z_().optional() : T.Z_().max(150, h("labels.apply.form.description.error.max_characters"))
					})
				}, W = {
					NAME: "edit-labels-modal-form",
					INITIAL_VALUES: {
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.NAME]: "",
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.SOURCE]: w.W3,
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.NEW_LABEL_NAME]: ""
					},
					VALIDATION_SCHEMA: () => T.Ry().shape({
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.NEW_LABEL_NAME]: I
					})
				};
				return {
					LABELS_APPLY_FORM: R,
					EDIT_LABELS_MODAL_FORM: W
				}
			}
		},
		"../react/pages/security/settings/resources/utils/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Iv: function() {
					return p
				},
				QJ: function() {
					return a
				},
				R: function() {
					return i
				},
				Tf: function() {
					return c
				},
				ZF: function() {
					return b
				},
				eC: function() {
					return r
				},
				m8: function() {
					return s
				},
				tR: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function d(u) {
				for (var g = 1; g < arguments.length; g++) {
					var C = arguments[g] != null ? Object(arguments[g]) : {},
						T = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(C).filter(function(P) {
						return Object.getOwnPropertyDescriptor(C, P).enumerable
					})), T.forEach(function(P) {
						f(u, P, C[P])
					})
				}
				return u
			}

			function f(u, g, C) {
				return g = l(g), g in u ? Object.defineProperty(u, g, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[g] = C, u
			}

			function l(u) {
				var g = _(u, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function _(u, g) {
				if (typeof u != "object" || u === null) return u;
				var C = u[Symbol.toPrimitive];
				if (C !== void 0) {
					var T = C.call(u, g || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(u)
			}
			let i = function(u) {
					return u.LABELS_LIST = "Labels List page", u.LABELS_APPLY = "Labels Apply page", u.LABELS_SIDE_MODAL = "Labels Side Modal", u.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", u.LABELS_OPERATION_DETAILS = "Operation Details page", u
				}({}),
				p = function(u) {
					return u.API_SHIELD = "API Shield", u.SECURITY_SETTINGS = "Security Settings", u
				}({}),
				b = function(u) {
					return u.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", u.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", u.OPERATIONS_TABLE_ROW = "Operations table row", u.OPERATION_DETAILS_PAGE = "Operation details page", u
				}({}),
				n = function(u) {
					return u.UPSERT = "upsert", u.OVERWRITE = "overwrite", u
				}({}),
				r = function(u) {
					return u.SINGLE = "single", u.MULTIPLE = "multiple", u
				}({}),
				a = function(u) {
					return u.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", u.DELETE_LABEL = "delete a user label in the settings page", u.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", u.CREATE_LABEL_CLICKED = "click create label button in the settings page", u.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", u.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", u.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", u.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", u.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", u.OPEN_LABELS_SIDE_MODAL = "open labels side modal", u.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", u.CREATE_NEW_LABEL = "create a new label", u
				}({});
			const c = ({
					name: u,
					product: g,
					category: C = "user journey",
					pageName: T,
					from: P,
					write_strategy: w,
					type: v,
					target: h
				}) => {
					o().sendEvent(u, d({
						category: C,
						pageName: T,
						product: g
					}, P ? {
						from: P
					} : {}, w ? {
						write_strategy: w
					} : {}, v ? {
						type: v
					} : {}, h ? {
						target: h
					} : {}))
				},
				s = () => {
					var u;
					return (u = Object.values(a)) === null || u === void 0 ? void 0 : u.flat()
				}
		},
		"../react/pages/security/types.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				X: function() {
					return e
				}
			});
			let e = function(o) {
				return o.UI_SECTION = "UI_SECTION", o.WAF_RULES = "WAF_RULES", o
			}({})
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(F, E, t) {
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
		"../react/pages/spectrum/tracking.tsx": function(F, E, t) {
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
		"../react/pages/traffic/argo/tracking.ts": function(F, E, t) {
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
		"../react/pages/traffic/load-balancing/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", o.POOL_TABLE = "click on expandable row on pool", o.CREATE_MONITOR_LINK = "click on create a monitor", o.EDIT_MONITOR_LINK = "click on edit a monitor", o.EDIT_MONITOR = "edit monitor", o.CREATE_MONITOR = "create monitor", o.CREATE_POOL_LINK = "click on create a pool", o.EDIT_POOL_LINK = "click on edit a pool", o.EDIT_POOL = "edit pool", o.CREATE_POOL = "create pool", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(F, E, t) {
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
		"../react/pages/turnstile/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				N3: function() {
					return p
				},
				P: function() {
					return n
				},
				Xh: function() {
					return b
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function d(r) {
				for (var a = 1; a < arguments.length; a++) {
					var c = arguments[a] != null ? Object(arguments[a]) : {},
						s = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && s.push.apply(s, Object.getOwnPropertySymbols(c).filter(function(u) {
						return Object.getOwnPropertyDescriptor(c, u).enumerable
					})), s.forEach(function(u) {
						f(r, u, c[u])
					})
				}
				return r
			}

			function f(r, a, c) {
				return a = l(a), a in r ? Object.defineProperty(r, a, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = c, r
			}

			function l(r) {
				var a = _(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function _(r, a) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var s = c.call(r, a || "default");
					if (typeof s != "object") return s;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const i = "TURNSTILE";
			let p = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const b = ({
					name: r,
					product: a = i,
					category: c = "user journey",
					page: s,
					additionalData: u = {}
				}) => {
					o().sendEvent(r, d({
						category: c,
						page: s,
						product: a
					}, u || {}))
				},
				n = () => {
					var r;
					return (r = Object.values(p)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(F, E, t) {
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
		"../react/pages/zoneless-workers/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$2: function() {
					return h
				},
				CI: function() {
					return w
				},
				IS: function() {
					return i
				},
				L7: function() {
					return l
				},
				Oj: function() {
					return a
				},
				QV: function() {
					return s
				},
				X$: function() {
					return T
				},
				X6: function() {
					return b
				},
				d4: function() {
					return c
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
					return _
				}
			});

			function e(I) {
				for (var R = 1; R < arguments.length; R++) {
					var W = arguments[R] != null ? Object(arguments[R]) : {},
						V = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && V.push.apply(V, Object.getOwnPropertySymbols(W).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(W, ee).enumerable
					})), V.forEach(function(ee) {
						o(I, ee, W[ee])
					})
				}
				return I
			}

			function o(I, R, W) {
				return R = d(R), R in I ? Object.defineProperty(I, R, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[R] = W, I
			}

			function d(I) {
				var R = f(I, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function f(I, R) {
				if (typeof I != "object" || I === null) return I;
				var W = I[Symbol.toPrimitive];
				if (W !== void 0) {
					var V = W.call(I, R || "default");
					if (typeof V != "object") return V;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(I)
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
				_ = 800,
				i = "40rem",
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
				b = {
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
				c = {
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
				s = {
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
				u = "workers.dev",
				g = "YYYY-MM-DD HH:mm:SS ZZ",
				C = "active",
				T = ["bundled", "unbound", "standard"],
				P = null,
				w = {
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let v = function(I) {
				return I[I.NONE = 0] = "NONE", I[I.MISS = 1] = "MISS", I[I.EXPIRED = 2] = "EXPIRED", I[I.UPDATING = 3] = "UPDATING", I[I.STALE = 4] = "STALE", I[I.HIT = 5] = "HIT", I[I.IGNORED = 6] = "IGNORED", I[I.BYPASS = 7] = "BYPASS", I[I.REVALIDATED = 8] = "REVALIDATED", I[I.DYNAMIC = 9] = "DYNAMIC", I[I.STREAM_HIT = 10] = "STREAM_HIT", I[I.DEFERRED = 11] = "DEFERRED", I
			}({});
			const h = [v.HIT, v.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return i
				},
				L: function() {
					return d
				},
				Q9: function() {
					return f
				},
				_j: function() {
					return l
				},
				ky: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = p => `${p}.workers.dev`,
				d = (p, b, n) => `${n?`${n}.`:""}${p}.${o(b)}`,
				f = (p, b, n) => `https://${d(p,b,n)}`,
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
				_ = "https://cron-triggers.cloudflareworkers.com",
				i = {
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
					describeCron: `${_}/describe`,
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
					nextCron: `${_}/next`,
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
					validateCron: `${_}/validate`,
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				MN: function() {
					return d
				},
				Yg: function() {
					return l
				},
				i$: function() {
					return f
				},
				l3: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const d = async ([i, p]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: i,
					variables: p
				})
			})).body, f = async (...i) => (await e.get(...i)).body, l = i => async (p, b) => {
				const n = await fetch(p, b).then(r => r.json());
				return i.assertDecode(n)
			}, _ = async (...i) => (await f(...i)).result;
			E.ZP = {
				fetcher: i => Array.isArray(i) ? _(...i) : _(i)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(F, E) {
				E()
			})(this, function() {
				"use strict";

				function F() {
					var t = !0,
						e = !1,
						o = null,
						d = {
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

					function f(g) {
						return !!(g && g !== document && g.nodeName !== "HTML" && g.nodeName !== "BODY" && "classList" in g && "contains" in g.classList)
					}

					function l(g) {
						var C = g.type,
							T = g.tagName;
						return !!(T == "INPUT" && d[C] && !g.readOnly || T == "TEXTAREA" && !g.readOnly || g.isContentEditable)
					}

					function _(g) {
						g.getAttribute("is-focus-visible") !== "" && g.setAttribute("is-focus-visible", "")
					}

					function i(g) {
						g.getAttribute("is-focus-visible") === "" && g.removeAttribute("is-focus-visible")
					}

					function p(g) {
						f(document.activeElement) && _(document.activeElement), t = !0
					}

					function b(g) {
						t = !1
					}

					function n(g) {
						!f(g.target) || (t || l(g.target)) && _(g.target)
					}

					function r(g) {
						!f(g.target) || g.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), i(g.target))
					}

					function a(g) {
						document.visibilityState == "hidden" && (e && (t = !0), c())
					}

					function c() {
						document.addEventListener("mousemove", u), document.addEventListener("mousedown", u), document.addEventListener("mouseup", u), document.addEventListener("pointermove", u), document.addEventListener("pointerdown", u), document.addEventListener("pointerup", u), document.addEventListener("touchmove", u), document.addEventListener("touchstart", u), document.addEventListener("touchend", u)
					}

					function s() {
						document.removeEventListener("mousemove", u), document.removeEventListener("mousedown", u), document.removeEventListener("mouseup", u), document.removeEventListener("pointermove", u), document.removeEventListener("pointerdown", u), document.removeEventListener("pointerup", u), document.removeEventListener("touchmove", u), document.removeEventListener("touchstart", u), document.removeEventListener("touchend", u)
					}

					function u(g) {
						g.target.nodeName.toLowerCase() !== "html" && (t = !1, s())
					}
					document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", b, !0), document.addEventListener("pointerdown", b, !0), document.addEventListener("touchstart", b, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", a, !0), c(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function E(t) {
					var e;

					function o() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && E(F)
			})
		},
		"../react/utils/bootstrap.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
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
					return d
				}
			});
			const e = () => {
					var l, _, i;
					return (l = window) === null || l === void 0 || (_ = l.bootstrap) === null || _ === void 0 || (i = _.data) === null || i === void 0 ? void 0 : i.security_token
				},
				o = () => {
					var l, _, i;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (_ = l.data) === null || _ === void 0 || (i = _.user) === null || i === void 0 ? void 0 : i.id)
				},
				d = () => {
					var l, _;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (_ = l.data) === null || _ === void 0 ? void 0 : _.is_kendo)
				},
				f = () => {
					var l, _, i, p;
					return (l = window) === null || l === void 0 || (_ = l.bootstrap) === null || _ === void 0 || (i = _.data) === null || i === void 0 || (p = i.user) === null || p === void 0 ? void 0 : p.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				O5: function() {
					return f
				},
				Xm: function() {
					return d
				},
				kT: function() {
					return i
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
				d = () => (o() || "").indexOf("C0002") !== -1,
				f = () => (o() || "").indexOf("C0003") !== -1,
				l = () => (o() || "").indexOf("C0004") !== -1,
				_ = () => (o() || "").indexOf("C0005") !== -1,
				i = n => {
					const r = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				p = () => {
					var n;
					const r = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				b = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AI: function() {
					return w
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
					return v
				},
				fh: function() {
					return h
				},
				i_: function() {
					return a
				},
				ly: function() {
					return n
				},
				th: function() {
					return i
				},
				ti: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				d = t("../../../common/intl/intl-types/src/index.ts"),
				f = t("../../../common/util/types/src/utils/index.ts"),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				_ = t("../../../../node_modules/cookie/index.js");
			const i = "cf-sync-locale-with-cps",
				p = d.Q.en_US,
				b = "en_US",
				n = "cf-locale";

			function r() {
				const W = (0, _.parse)(document.cookie);
				return l.Z.get(n) || W[n] || null
			}

			function a(W) {
				document.cookie = (0, _.serialize)(n, W, {
					path: "/",
					maxAge: 31536e3
				}), l.Z.set(n, W)
			}

			function c() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const s = W => (0, f.Yd)(d.Q).find(V => d.Q[V] === W) || b,
				u = [],
				g = [],
				C = [d.Q.de_DE, d.Q.en_US, d.Q.es_ES, d.Q.fr_FR, d.Q.it_IT, d.Q.pt_BR, d.Q.ko_KR, d.Q.ja_JP, d.Q.zh_CN, d.Q.zh_TW],
				T = {
					test: [...C, ...g, ...u],
					development: [...C, ...g, ...u],
					staging: [...C, ...g, ...u],
					production: [...C, ...g]
				},
				P = W => {
					const V = d.Q[W];
					return T.production.includes(V)
				},
				w = () => Object.keys(d.Q).filter(W => P(W)),
				v = W => {
					const V = d.Q[W];
					return g.includes(V)
				},
				h = W => I[W],
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
				R = o().locale();
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
			}), o().locale(R)
		},
		"../react/utils/translator.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				QT: function() {
					return s
				},
				Vb: function() {
					return p
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return i
				},
				_m: function() {
					return r
				},
				cC: function() {
					return a
				},
				oc: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = t("../../../common/intl/intl-core/src/Translator.ts"),
				d = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				f = t.n(d),
				l = t("../flags.ts");
			const _ = new o.Z({
				pseudoLoc: (0, l.J8)("is_pseudo_loc")
			});

			function i(u, ...g) {
				return _.t(u, ...g)
			}
			const p = _;

			function b(u, ...g) {
				return markdown(i(u, g))
			}

			function n(u) {
				if (Number(u) !== 0) {
					if (u % 86400 == 0) return i("time.num_days", {
						smart_count: u / 86400
					});
					if (u % 3600 == 0) return i("time.num_hours", {
						smart_count: u / 3600
					});
					if (u % 60 == 0) return i("time.num_minutes", {
						smart_count: u / 60
					})
				}
				return i("time.num_seconds", {
					smart_count: u
				})
			}

			function r(u, g) {
				return u in g ? g[u] : void 0
			}
			const a = d.Trans,
				c = d.I18n,
				s = d.useI18n
		},
		"../react/utils/url.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Ct: function() {
					return v
				},
				Fl: function() {
					return oe
				},
				KT: function() {
					return x
				},
				NF: function() {
					return g
				},
				Nw: function() {
					return P
				},
				Pd: function() {
					return T
				},
				Uh: function() {
					return k
				},
				Y_: function() {
					return u
				},
				e1: function() {
					return w
				},
				el: function() {
					return ne
				},
				hW: function() {
					return Y
				},
				pu: function() {
					return ce
				},
				qR: function() {
					return j
				},
				td: function() {
					return C
				},
				uW: function() {
					return X
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				o = t.n(e),
				d = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				f = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/r2/routes.ts"),
				_ = t("../react/pages/zoneless-workers/routes.ts"),
				i = t("../react/pages/pages/routes.ts"),
				p = t("../react/pages/d1/routes.ts");

			function b(y) {
				for (var M = 1; M < arguments.length; M++) {
					var S = arguments[M] != null ? Object(arguments[M]) : {},
						U = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(S).filter(function($) {
						return Object.getOwnPropertyDescriptor(S, $).enumerable
					})), U.forEach(function($) {
						n(y, $, S[$])
					})
				}
				return y
			}

			function n(y, M, S) {
				return M = r(M), M in y ? Object.defineProperty(y, M, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[M] = S, y
			}

			function r(y) {
				var M = a(y, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function a(y, M) {
				if (typeof y != "object" || y === null) return y;
				var S = y[Symbol.toPrimitive];
				if (S !== void 0) {
					var U = S.call(y, M || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(y)
			}
			const {
				endsWithSlash: c
			} = d.default, s = (y, M) => {
				const S = y.replace(c, "").split("/");
				return S.slice(0, 2).concat([M]).concat(S.slice(3)).join("/")
			}, u = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), g = y => `/${y.replace(c,"").replace(/^\//,"")}`, C = y => P("add-site", y), T = y => P("billing", y), P = (y, M) => M ? `/${M}${y?`/${y}`:""}` : `/?to=/:account/${y}`, w = () => {
				const y = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return y ? y[1] : null
			}, v = (y, M) => o().stringify(b({}, o().parse(y), M)), h = (y = "") => y.toString().replace(/([\/]{1,})$/, ""), I = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], R = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, W = /^\/(\w{32,})(\/[^.]*)?/, V = y => I.includes(y), ee = y => !V(y), j = y => !V(y) && W.test(y), ne = y => !V(y) && R.test(y), te = y => R.exec(y), Y = y => {
				if (ne(y)) return y.split("/").filter(M => M.length > 0)[1]
			}, le = y => W.exec(y), X = y => {
				if (j(y)) {
					const M = le(y);
					if (M) return M[1]
				}
			}, ie = y => j(y) && y.split("/")[2] === "register-domain", z = y => ie(y) ? y.split("/") : null, Q = y => {
				if (ne(y)) {
					const [, , , M, S, U, $, me] = y.split("/");
					return M === "traffic" && S === "load-balancing" && U === "pools" && $ === "edit" && me
				}
			}, k = y => {
				const M = z(y);
				if (M) return M[3]
			}, K = (y, M) => {
				var S, U;
				return ((S = y.pattern.match(/\:/g)) !== null && S !== void 0 ? S : []).length - ((U = M.pattern.match(/\:/g)) !== null && U !== void 0 ? U : []).length
			}, Z = [...Object.values(f.C), ...Object.values(l._j), ...Object.values(_._j), ...Object.values(i._j), ...Object.values(p._)].sort(K);

			function oe(y) {
				if (!ee(y)) return y;
				for (const me of Z)
					if (me.expression.test(y)) return me.pattern;
				const M = z(y);
				if (M) {
					const [, , me, , ...Te] = M;
					return `/:accountId/${me}/:domainName/${Te.join("/")}`
				}
				if (Q(y)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const U = te(y);
				if (U) {
					const [, , , , me] = U;
					return `/:accountId/:zoneName${me||""}`
				}
				const $ = le(y);
				if ($) {
					const [, , me] = $;
					return `/:accountId${me||""}`
				}
				return y
			}

			function ce(y) {
				if (!!y) try {
					const S = y.split(".").pop();
					if (S && S.length > 0) return S
				} catch {}
			}

			function x(y, M = document.location.href) {
				try {
					const S = new URL(y),
						U = new URL(M);
					if (S.origin === U.origin) return `${S.pathname}${S.search}${S.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				r: function() {
					return p
				},
				y: function() {
					return b
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				d = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f = t("../react/common/hooks/useGate.ts"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				_ = t.n(l);
			const i = /^\/domainconnect\/v2\/domaintemplates\//i,
				p = "domain-connect-redirect",
				b = () => {
					const n = !!(0, f.Z)("domain-connect-redirect-gate"),
						r = (0, l.useLocation)();
					(0, e.useEffect)(() => {
						!n || i.test(r.pathname) && d.Z.set(p, r, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(F, E, t) {
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
		"../utils/getDashVersion.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				p: function() {
					return d
				},
				t: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var f, l;
					return (f = window) === null || f === void 0 || (l = f.build) === null || l === void 0 ? void 0 : l.dashVersion
				},
				d = () => {
					var f;
					return ((0, e.parse)((f = document) === null || f === void 0 ? void 0 : f.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Wi: function() {
					return fe
				},
				IM: function() {
					return Le
				},
				yV: function() {
					return pt
				},
				Ug: function() {
					return Et
				},
				v_: function() {
					return Qe
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				d = t("../react/utils/bootstrap.ts"),
				f = t("../react/app/providers/storeContainer.js"),
				l = t("../react/common/selectors/languagePreferenceSelector.ts"),
				_ = t("../flags.ts"),
				i = t("../../../../node_modules/cookie/index.js"),
				p = t("../react/utils/url.ts"),
				b = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../../../../node_modules/lodash-es/memoize.js"),
				a = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				c = t("../utils/getDashVersion.ts"),
				s = t("../react/common/selectors/accountSelectors.ts");

			function u(ae) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var ge = arguments[ue] != null ? Object(arguments[ue]) : {},
						L = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(ge).filter(function(H) {
						return Object.getOwnPropertyDescriptor(ge, H).enumerable
					})), L.forEach(function(H) {
						g(ae, H, ge[H])
					})
				}
				return ae
			}

			function g(ae, ue, ge) {
				return ue = C(ue), ue in ae ? Object.defineProperty(ae, ue, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ae[ue] = ge, ae
			}

			function C(ae) {
				var ue = T(ae, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function T(ae, ue) {
				if (typeof ae != "object" || ae === null) return ae;
				var ge = ae[Symbol.toPrimitive];
				if (ge !== void 0) {
					var L = ge.call(ae, ue || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ue === "string" ? String : Number)(ae)
			}
			const P = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional
				})),
				w = (0, r.Z)(ae => {
					try {
						return P.assertDecode((0, i.parse)(ae))
					} catch (ue) {
						return console.error(ue), {}
					}
				}),
				v = ae => (ue, ge, L) => {
					try {
						const De = window.location.pathname,
							Ne = (0, f.bh)().getState(),
							ot = w(document.cookie),
							rt = u({
								page: (0, p.Fl)(L.page || window.location.pathname),
								dashVersion: (0, c.t)()
							}, ot);
						if (ue === "identify") {
							var H, se;
							const ve = {
								gates: (0, a.T2)(Ne) || {},
								country: (H = t.g) === null || H === void 0 || (se = H.bootstrap) === null || se === void 0 ? void 0 : se.ip_country
							};
							return ae(ue, ge, u({}, rt, ve, L))
						} else {
							const ve = {
								accountId: (0, p.uW)(De),
								zoneName: (0, p.hW)(De),
								domainName: (0, p.Uh)(De)
							};
							if ((0, p.qR)(De)) {
								var Ee;
								const je = (0, s.D0)(Ne);
								ve.isEntAccount = je == null || (Ee = je.meta) === null || Ee === void 0 ? void 0 : Ee.has_enterprise_zones
							}
							if ((0, p.el)(De)) {
								var be;
								const je = (0, b.nA)(Ne);
								ve.zoneId = je == null ? void 0 : je.id, ve.plan = je == null || (be = je.plan) === null || be === void 0 ? void 0 : be.legacy_id
							}
							return ae(ue, ge, u({}, rt, ve, L))
						}
					} catch (De) {
						return console.error(De), ae(ue, ge, L)
					}
				},
				h = ae => async (ue, ge, L) => {
					try {
						return await ae(ue, ge, L)
					} catch (H) {
						if (console.error(H), !Qe()) throw H;
						return {
							status: "rejected",
							reason: H
						}
					}
				};
			var I = t("../react/common/middleware/sparrow/errors.ts"),
				R = t("../react/pages/security/bots/tracking.ts"),
				W = t("../react/pages/caching/tracking.tsx"),
				V = t("../react/pages/turnstile/tracking.ts"),
				ee = t("../react/pages/security/settings/resources/utils/index.ts"),
				j = t("../react/pages/magic/packet-captures/constants.ts"),
				ne = t("../react/pages/security/page-shield/tracking.ts"),
				te = t("../react/pages/security/rulesets/tracking.tsx"),
				Y = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				le = t("../react/pages/spectrum/tracking.tsx"),
				X = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				ie = t("../react/pages/security-center/tracking.ts"),
				z = t("../react/pages/security/api-shield/tracking.ts"),
				Q = t("../react/pages/home/configurations/lists/tracking.ts"),
				k = t("../react/pages/traffic/load-balancing/tracking.ts"),
				K = t("../react/pages/home/alerts/tracking.ts"),
				Z = t("../react/pages/dns/dns-records/tracking.ts"),
				oe = t("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				ce = t("../react/pages/traffic/argo/tracking.ts"),
				x = t("../react/pages/magic/network-monitoring/constants.ts"),
				y = t("../react/pages/security/security-analytics/logs/constants.ts"),
				M = t("../react/pages/magic/overview/tracking.ts"),
				S = t("../react/pages/hyperdrive/tracking.ts"),
				U = t("../react/pages/pipelines/tracking.ts"),
				$ = t("../react/pages/home/domain-registration/tracking.ts"),
				me = t("../react/pages/zoneless-workers/constants.ts"),
				Te = t("../react/pages/pages/constants.ts"),
				Ie = t("../react/pages/page-rules/tracking.ts"),
				Ae = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				N = t("../react/pages/shared-config/sparrowEvents.tsx"),
				pe = t("../react/pages/security/settings/cards/security-txt/helpers.ts"),
				Oe = t("../react/pages/security-center/BlockedContent/constants.ts"),
				Re = t("../react/pages/security/constants.tsx");
			const Ke = ((ae, ue, ...ge) => n.eg.union([n.eg.literal(ae), n.eg.literal(ue), ...ge.map(L => n.eg.literal(L))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "projects table click", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", me.QV.clickedDownloadAnalytics, me.QV.clickedPrintAnalytics, me.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Te.QV.toggledPagesSmartPlacement, Te.QV.downloadDemoProject, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", R.N3.INITIAL_FETCH_SCORES, R.N3.FETCH_CONFIGURATION, R.N3.INITIAL_FETCH_TIME_SERIES, R.N3.INITIAL_FETCH_ATTRIBUTES, R.N3.UPDATE_SETTINGS, R.N3.DELETE_RULE, R.N3.UPDATE_RULE, R.N3.FETCH_RULES, R.N3.CONFIGURE_BOT_MANAGEMENT, R.N3.WAF_RULES_REDIRECT, X.F.TOGGLE_TCP_PROTECTION, X.F.GET_TCP_PROTECTION_PREFIXES, X.F.CREATE_TCP_PROTECTION_PREFIXES, X.F.CREATE_TCP_PROTECTION_PREFIX, X.F.UPDATE_TCP_PROTECTION_PREFIX, X.F.DELETE_TCP_PROTECTION_PREFIX, X.F.DELETE_TCP_PROTECTION_PREFIXES, X.F.GET_TCP_PROTECTION_ALLOWLIST, X.F.CREATE_TCP_PROTECTION_ALLOWLIST, X.F.UPDATE_TCP_PROTECTION_ALLOWLIST, X.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, X.F.DELETE_TCP_PROTECTION_ALLOWLIST, X.F.GET_SYN_PROTECTION_RULES, X.F.GET_SYN_PROTECTION_RULE, X.F.CREATE_SYN_PROTECTION_RULE, X.F.UPDATE_SYN_PROTECTION_RULE, X.F.DELETE_SYN_PROTECTION_RULE, X.F.GET_TCP_FLOW_PROTECTION_RULES, X.F.GET_TCP_FLOW_PROTECTION_RULE, X.F.CREATE_TCP_FLOW_PROTECTION_RULE, X.F.UPDATE_TCP_FLOW_PROTECTION_RULE, X.F.DELETE_TCP_FLOW_PROTECTION_RULE, X.F.GET_SYN_PROTECTION_FILTERS, X.F.GET_SYN_PROTECTION_FILTER, X.F.CREATE_SYN_PROTECTION_FILTER, X.F.UPDATE_SYN_PROTECTION_FILTER, X.F.DELETE_SYN_PROTECTION_FILTER, X.F.GET_TCP_FLOW_PROTECTION_FILTERS, X.F.GET_TCP_FLOW_PROTECTION_FILTER, X.F.CREATE_TCP_FLOW_PROTECTION_FILTER, X.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, X.F.DELETE_TCP_FLOW_PROTECTION_FILTER, X.F.GET_DNS_PROTECTION_RULES, X.F.GET_DNS_PROTECTION_RULE, X.F.CREATE_DNS_PROTECTION_RULE, X.F.UPDATE_DNS_PROTECTION_RULE, X.F.DELETE_DNS_PROTECTION_RULE, ne.F.MANAGE_PAGE_SHIELD_POLICY, ne.F.CONFIGURE_PAGE_SHIELD, ne.F.VIEW_DETECTED_CONNECTIONS, ne.F.VIEW_DETECTED_SCRIPTS, ne.F.VIEW_PAGE_SHIELD_POLICIES, ne.F.VIEW_PAGE_SHIELD_SETTINGS, ne.F.OPEN_MUTABLE_VERSION_TOOLTIP, ne.F.SHOW_MUTABLE_VERSION_TOOLTIP, Q.y.CREATE_LIST, Q.y.DELETE_LIST, Q.y.ADD_LIST_ITEM, Q.y.DELETE_LIST_ITEM, S.KO.PURCHASE_WORKERS_PAID, S.KO.LIST_CONFIGS, S.KO.CREATE_HYPERDRIVE_CONFIG, S.KO.VIEW_CONFIG_DETAILS, S.KO.UPDATE_CACHING_SETTINGS, S.KO.DELETE_HYPERDRIVE_CONFIG, S.KO.CLICK_HYPERDRIVE_DOCUMENTATION, S.KO.CLICK_GET_STARTED_GUIDE, S.KO.CLICK_CONNECTIVITY_GUIDES, S.KO.CLICK_QUICK_LINK, le.N.CNAME, le.N.IP_ADDRESS, le.N.LB, le.N.UPDATE_CNAME, le.N.UPDATE_IP_ADDRESS, le.N.UPDATE_LB, le.N.DISABLE, W.N.TIERED_CACHE, W.N.CACHE_PURGE, W.N.CACHE_ANALYTICS, ...(0, V.P)(), ...(0, te.x4)(), ...(0, ee.m8)(), Y.N.CREATE, Y.N.EVENTS, Y.N.ANALYTICS, Y.N.UPDATE, Y.N.GENERATE_PREVIEW, ie.R.INITIATE_URL_SCAN, ie.R.LOAD_SCAN_INFO, ie.v.EXPAND_INSIGHT_ROW, ie.v.ONE_CLICK_RESOLVE_BUTTON, ie.v.FOLLOW_RESOLVE_URL, ie.v.MANAGE_INSIGHT, ie.v.CLICK_SCAN_NOW, ie.v.CLICK_EXPORT_INSIGHTS, ie.v.BULK_ARCHIVE, ie.v.CLICK_DETAILS_BUTTON, z.Fj[z.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, z.Fj[z.kq.ENDPOINT_MANAGEMENT].detailedMetrics, z.Fj[z.kq.ENDPOINT_MANAGEMENT].createEndpoint, z.Fj[z.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, z.Fj[z.kq.ENDPOINT_MANAGEMENT].deployRouting, z.Fj[z.kq.ENDPOINT_MANAGEMENT].deleteRouting, z.Fj[z.kq.API_DISCOVERY].viewDiscoveredEndpoints, z.Fj[z.kq.API_DISCOVERY].saveDiscoveredEndpoint, z.Fj[z.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, z.Fj[z.kq.SCHEMA_VALIDATION].viewSchemasList, z.Fj[z.kq.SCHEMA_VALIDATION].uploadSchema, z.Fj[z.kq.SCHEMA_VALIDATION].viewSchemaAdoption, z.Fj[z.kq.SCHEMA_VALIDATION].downloadSchema, z.Fj[z.kq.SCHEMA_VALIDATION].deleteSchema, z.Fj[z.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, z.Fj[z.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, z.Fj[z.kq.SEQUENCE_ANALYTICS].viewSequencesPage, z.Fj[z.kq.JWT_VALIDATION].viewJWTRules, z.Fj[z.kq.JWT_VALIDATION].addJWTRule, z.Fj[z.kq.JWT_VALIDATION].editJWTRule, z.Fj[z.kq.JWT_VALIDATION].deleteJWTRule, z.Fj[z.kq.JWT_VALIDATION].reprioritizeJWTRule, z.Fj[z.kq.JWT_VALIDATION].viewJWTConfigs, z.Fj[z.kq.JWT_VALIDATION].addJWTConfig, z.Fj[z.kq.JWT_VALIDATION].editJWTConfig, z.Fj[z.kq.JWT_VALIDATION].deleteJWTConfig, z.Fj[z.kq.SETTINGS].redirectToFirewallRulesTemplate, z.Fj[z.kq.SETTINGS].redirectToPages, z.Fj[z.kq.SETTINGS].listSessionIdentifiers, z.Fj[z.kq.SETTINGS].listRequestsContainingSessionIdentifiers, z.Fj[z.kq.SETTINGS].addOrRemoveSessionIdentifiers, z.Fj[z.kq.SETTINGS].redirectToCustomRules, z.Fj[z.kq.SETTINGS].listAllFallthroughSchemas, z.Fj[z.kq.SEQUENCE_RULES].listSequenceRules, z.Fj[z.kq.SEQUENCE_RULES].deleteSequenceRule, z.Fj[z.kq.SEQUENCE_RULES].reorderSequenceRule, z.Fj[z.kq.SEQUENCE_RULES].createSequenceRule, z.Fj[z.kq.SEQUENCE_RULES].editSequenceRule, k.Z.ANALYTICS, k.Z.CREATE_AND_DEPLOY, k.Z.CREATE_MONITOR_LINK, k.Z.CREATE_MONITOR, k.Z.CREATE_POOL_LINK, k.Z.CREATE_POOL, k.Z.EDIT_MONITOR, k.Z.EDIT_POOL, k.Z.LOAD_BALANCING_TABLE, k.Z.POOL_TABLE, k.Z.EDIT_MONITOR_LINK, k.Z.EDIT_POOL_LINK, K.y.SECONDARY_DNS_NOTIFICATION_CREATE, K.y.SECONDARY_DNS_NOTIFICATION_UPDATE, K.y.SECONDARY_DNS_NOTIFICATION_DELETE, Z.U.ZONE_TRANSFER_SUCCESS, Z.U.DNS_RECORD_CREATE, Z.U.DNS_RECORD_UPDATE, Z.U.DNS_RECORD_DELETE, oe.Y.PEER_DNS_CREATE, oe.Y.PEER_DNS_UPDATE, oe.Y.PEER_DNS_DELETE, oe.Y.ZONE_TRANSFER_ENABLE, oe.Y.ZONE_TRANSFER_DISABLE, ce.V.ARGO_ENABLEMENT, ce.V.ARGO_GEO_ANALYTICS_FETCH, ce.V.ARGO_GLOBAL_ANALYTICS_FETCH, j.X.VIEW_BUCKETS_LIST, j.X.CREATE_BUCKET, j.X.VALIDATE_BUCKET, j.X.DELETE_BUCKET, j.X.VIEW_CAPTURES_LIST, j.X.CREATE_SIMPLE_CAPTURE, j.X.CREATE_FULL_CAPTURE, j.X.VIEW_FULL_CAPTURE, j.X.DOWNLOAD_SIMPLE_CAPTURE, x.bK.VIEW_RULES, x.bK.CREATE_RULE, x.bK.UPDATE_RULE, x.bK.DELETE_RULE, x.bK.VIEW_CONFIGURATION, x.bK.CREATE_CONFIGURATION, x.bK.UPDATE_CONFIGURATION, x.bK.DELETE_CONFIGURATION, M.r8.VIEW_ALERTS, M.r8.VIEW_ALERTS_HISTORY, M.r8.MAGIC_OVERVIEW_ANALYTICS, M.VZ.CREATE_SITE, M.VZ.CREATE_TUNNEL, M.VZ.CREATE_STATIC_ROUTE, y.o4.CLICK_ADAPTIVE_SAMPLING, y.o4.CLICK_TO_LOG_EXPLORER_BANNER, y.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, y.o4.CLICK_SWITCH_TO_RAW_LOGS, y.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", $.U.REGISTER_DOMAIN_SEARCH_SUBMIT, $.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, $.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, $.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, $.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, $.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, $.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, $.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, $.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, $.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, $.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, $.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, $.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, $.U.REGISTER_DOMAIN_CHECKOUT_ERROR, $.U.TRANSFER_DOMAIN_CHANGE_STEP, $.U.RENEW_DOMAIN_COMPLETED, $.U.RESTORE_DOMAIN_INIT, $.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, $.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, $.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, $.U.RESTORE_DOMAIN_FAILURE, $.U.RESTORE_DOMAIN_COMPLETED, $.U.DOMAIN_DELETE_INIT, $.U.DOMAIN_DELETE_COMPLETED, $.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, $.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, $.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, $.U.DOMAIN_DELETE_CONFIRM_DELETE, $.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, $.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, $.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, $.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, $.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, $.U.DOMAIN_MOVE_START_FLOW, $.U.DOMAIN_MOVE_OPEN_DOCS, $.U.DOMAIN_MOVE_CLOSE_FLOW, $.U.DOMAIN_MOVE_PROGRESS_FLOW, $.U.DOMAIN_MOVE_SUBMIT, $.U.DOMAIN_MOVE_INITIATE_SUCCESS, $.U.DOMAIN_MOVE_INITIATE_ERROR, $.U.DOMAIN_MOVE_CANCEL, $.U.DOMAIN_MOVE_CANCEL_SUCCESS, $.U.DOMAIN_MOVE_CANCEL_ERROR, $.U.ACTION_CENTER_NAVIGATE, $.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, $.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, $.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, U.KO.CLICK_GET_STARTED_GUIDE, U.KO.CLICK_PIPELINE_DOCUMENTATION, U.KO.CLICK_QUICK_LINK, U.KO.CREATE_PIPELINE, U.KO.DELETE_PIPELINE, U.KO.LIST_PIPELINES, U.KO.VIEW_PIPELINE, Ae.S.EXISTING_DOMAIN, Ae.S.NEW_DOMAIN, Ae.S.WAF_RULESET, Ae.S.WORKERS, Ae.S.PAGES, Ae.S.R2, Ae.S.ACCOUNT_MEMBERS, Ie._.TEMPLATE_PRODUCT_SELECTED, Ie._.TEMPLATE_SELECTED, Ie._.TEMPLATE_SAVE_DRAFT, Ie._.TEMPLATE_CANCEL, Ie._.TEMPLATE_DEPLOY, N.D.CLICK_GO_BACK_SHARE_MODAL, N.D.CLICK_MENU_ITEM_SHARE, N.D.CLICK_ON_CANCEL_SHARE_MODAL, N.D.CLICK_ON_CLOSE_SHARE_MODAL, N.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, N.D.CLICK_ON_DELETE_RULESET, N.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, N.D.CLICK_ON_EDIT_SHARE_PERMISSION, N.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, N.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, N.D.CLICK_ON_SHARE_TABLE_ROW, Re.pR.CLICK_GEOGRAPHICAL_TEMPLATE, Re.pR.CLICK_IP_TEMPLATE, Re.pR.CLICK_USER_AGENT_TEMPLATE, Re.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, pe.vc.CREATED, pe.vc.ENABLED, pe.vc.DISABLED, pe.vc.DELETED, pe.vc.UPDATED, pe.vc.DOWNLOADED, Oe.Gk.REQUEST_REVIEW, Oe.Gk.COPY_URL),
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
					cloud_connector: n.eg.any.optional
				})),
				ct = (ae, ue) => {
					const [ge, L] = ze(ue);
					let H, se;
					return (0, n.nM)(Ke.decode(ae)) && (H = new I.Uh(ae)), L && L.length > 0 && (se = new I.oV(ae, L)), [ge, H, se]
				},
				ze = ae => {
					const ue = Ve.decode(ae);
					if ((0, n.nM)(ue)) {
						const ge = ue.left.map(({
							context: L
						}) => L.map(({
							key: H
						}) => H)).reduce((L, H) => L.concat(H), []).filter(L => L in ae);
						return [Ze(ge, ae), ge]
					}
					return [ae, []]
				},
				Ze = (ae, ue) => Object.entries(ue).reduce((ge, [L, H]) => (ae.includes(L) || (ge[L] = H), ge), {}),
				Je = ae => (ue, ge, L) => {
					const [H, se, Ee] = ct(ge, L);
					if (se) throw se;
					return Ee && console.error(Ee), ae(ue, ge, H)
				};
			var Be = t("../react/utils/zaraz.ts");
			const qe = {
					identify: !0
				},
				et = ae => (ue, ge, L) => (qe[ge] || Be.tg === null || Be.tg === void 0 || Be.tg.track(ge, L), ae(ue, ge, L)),
				Ge = "pageview",
				tt = "create zone",
				Ye = {
					[Ge]: !0,
					[tt]: !0
				},
				nt = ae => {
					var ue;
					return !!((ue = ae.gates.assignments) === null || ue === void 0 ? void 0 : ue["dx-enable-google-tag-manager"])
				},
				B = ae => {
					const {
						deviceViewport: ue,
						page: ge,
						previousPage: L,
						pageName: H,
						utm_campaign: se,
						_ga: Ee
					} = ae, {
						origin: be
					} = window.location;
					return {
						event: L !== void 0 && ge !== L ? "virtual_page_view" : "page_load",
						device_type: ue,
						hostname: be,
						language: navigator.language,
						locale: (0, l.r)((0, f.bh)().getState()),
						page_location: ge ? `${be}${ge}` : "[redacted]",
						page_path: ge ? `${ge}` : "[redacted]",
						page_referrer: L ? `${be}/${L}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: H || "[redacted]",
						page_url: `${be}${ge}`,
						query: se ? `?utm_campaign=${se}` : "[redacted]",
						"user properties": {
							"--ga_client_id": Ee,
							"--user_id": o().getUserId()
						}
					}
				},
				J = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				_e = (ae, ue) => {
					switch (ae) {
						case "pageview":
							return B(ue);
						case "create zone":
							return J();
						default:
							return
					}
				},
				Se = ae => (ue, ge, L) => {
					if (Ye[ge]) {
						var H;
						const se = _e(ge, L);
						se && ((H = window.dataLayer) === null || H === void 0 || H.push(se))
					}
					return ae(ue, ge, L)
				};
			var Pe = t("../react/utils/cookiePreferences.ts");

			function we(ae) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var ge = arguments[ue] != null ? Object(arguments[ue]) : {},
						L = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(ge).filter(function(H) {
						return Object.getOwnPropertyDescriptor(ge, H).enumerable
					})), L.forEach(function(H) {
						ke(ae, H, ge[H])
					})
				}
				return ae
			}

			function ke(ae, ue, ge) {
				return ue = it(ue), ue in ae ? Object.defineProperty(ae, ue, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ae[ue] = ge, ae
			}

			function it(ae) {
				var ue = lt(ae, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function lt(ae, ue) {
				if (typeof ae != "object" || ae === null) return ae;
				var ge = ae[Symbol.toPrimitive];
				if (ge !== void 0) {
					var L = ge.call(ae, ue || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ue === "string" ? String : Number)(ae)
			}
			const Et = ae => {
					const ue = nt((0, f.bh)().getState());
					o().init(we({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Qe() && !(0, d.gm)() && fe(),
						middlewares: [h, Je, v, et, ...ue ? [Se] : []]
					}, ae))
				},
				pt = () => {
					o().identify(we({}, (0, e.getAttribution)(), {
						locale: (0, l.r)((0, f.bh)().getState()),
						isCloudflare: !!(0, _.Jd)()
					}))
				},
				Qe = () => !0,
				Le = () => {
					(0, Pe.kT)("sparrow_id")
				},
				fe = () => (0, Pe.Xm)()
		},
		"../utils/initStyles.ts": function(F, E, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = t("../react/app/providers/storeContainer.js");
			const d = "cfBaseStyles",
				f = document.head || document.getElementsByTagName("head")[0],
				l = i => {
					const p = [];
					for (let b in i.colors) {
						const n = i.colors[b];
						if (Array.isArray(n) && b !== "categorical")
							for (let r = 0; r < n.length; ++r) p.push(`--cf-${b}-${r}:${n[r]};`)
					}
					return p.join(`
`)
				},
				_ = () => {
					const i = (0, e.Yc)(),
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
      background-color: ${i?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${i?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${i?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${i?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${i?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${i?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
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
					let b = document.getElementById(d);
					b ? b.innerText = "" : (b = document.createElement("style"), b.id = d, f.appendChild(b)), b.appendChild(document.createTextNode(p)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(_), E.Z = _
		},
		"../utils/sentry/lastSentEventId.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let d = "";
				return {
					setEventId: _ => (!_ || typeof _ != "string" || (d = _), d),
					getEventId: () => d
				}
			})()
		},
		"../utils/zaraz.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Ro: function() {
					return r
				},
				bM: function() {
					return p
				},
				tg: function() {
					return i
				},
				yn: function() {
					return n
				}
			});

			function e(a) {
				for (var c = 1; c < arguments.length; c++) {
					var s = arguments[c] != null ? Object(arguments[c]) : {},
						u = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(s).filter(function(g) {
						return Object.getOwnPropertyDescriptor(s, g).enumerable
					})), u.forEach(function(g) {
						o(a, g, s[g])
					})
				}
				return a
			}

			function o(a, c, s) {
				return c = d(c), c in a ? Object.defineProperty(a, c, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[c] = s, a
			}

			function d(a) {
				var c = f(a, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(a, c) {
				if (typeof a != "object" || a === null) return a;
				var s = a[Symbol.toPrimitive];
				if (s !== void 0) {
					var u = s.call(a, c || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(a)
			}
			const l = {
					track: (a, c) => null,
					set: (a, c) => console.log(`zaraz.set(${a}, ${c})`)
				},
				_ = {
					track: (a, c) => {
						var s;
						(s = window.zaraz) === null || s === void 0 || s.track(a, e({}, c, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (a, c) => {
						var s;
						return (s = window.zaraz) === null || s === void 0 ? void 0 : s.set(a, c)
					}
				};
			let i;
			const p = () => {
					window.zaraz, i = _
				},
				b = ["email", "first_name", "last_name"],
				n = a => {
					b.forEach(c => {
						var s;
						(s = i) === null || s === void 0 || s.set(c, a[c])
					})
				},
				r = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				d = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				f = t.n(d),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				_ = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = t.n(_),
				p = t("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				b = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				r = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				a = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				u = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				g = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				C = t("../../../common/component/component-filter-bar/src/constants.js"),
				T = t("../../../common/component/component-filter-bar/src/utils.js");

			function P(k) {
				for (var K = 1; K < arguments.length; K++) {
					var Z = arguments[K] != null ? Object(arguments[K]) : {},
						oe = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(Z).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(Z, ce).enumerable
					})), oe.forEach(function(ce) {
						w(k, ce, Z[ce])
					})
				}
				return k
			}

			function w(k, K, Z) {
				return K = v(K), K in k ? Object.defineProperty(k, K, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[K] = Z, k
			}

			function v(k) {
				var K = h(k, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function h(k, K) {
				if (typeof k != "object" || k === null) return k;
				var Z = k[Symbol.toPrimitive];
				if (Z !== void 0) {
					var oe = Z.call(k, K || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(k)
			}
			const I = 70,
				R = (0, l.createStyledComponent)(({
					showOverflow: k
				}) => P({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, k ? {} : {
					maxHeight: I,
					overflow: "hidden"
				})),
				W = (0, l.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				V = (0, l.createStyledComponent)(({
					theme: k
				}) => ({
					backgroundColor: k.colors.background,
					py: 1,
					px: 2,
					borderRadius: k.radii[2],
					border: `1px solid ${k.colors.gray[7]}`,
					fontSize: k.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: k.colors.gray[4]
					}
				}), "div"),
				ee = (0, l.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				j = (0, l.createStyledComponent)(({
					theme: k
				}) => ({
					color: k.colors.gray[4],
					mr: 1
				}), "span"),
				ne = (0, l.createStyledComponent)(() => ({
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
				te = (0, l.createStyledComponent)(({
					buttonStyle: k
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
				}, k), b.zx),
				Y = (0, l.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				le = (0, l.createStyledComponent)(({
					theme: k
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: k.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: k.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: k.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: k.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				X = (0, l.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				ie = k => k.current ? [...k.current.children].reduce((K, Z) => (Z.offsetTop >= I && K++, K), 0) : 0;
			let z = 0;
			class Q extends e.Component {
				constructor() {
					super();
					w(this, "overflowWrapper", (0, e.createRef)()), w(this, "hasOverflowed", K => {
						const Z = ie(this.overflowWrapper);
						K.scrollHeight > I && Z >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (K.scrollHeight < I || Z === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), w(this, "addNewFilter", () => {
						const {
							filterDefinitions: K
						} = this.props, Z = (0, T.TE)(K), oe = Object.keys(Z)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: oe,
								operator: (0, T.uv)(oe, Z),
								value: (0, T.TT)(oe, Z)
							}
						})
					}), w(this, "handleOpenFilterEdit", K => {
						this.setState({
							openFilter: K,
							filterChanges: P({}, this.props.filters[K])
						})
					}), w(this, "handleRemoveFilterClick", (K, Z) => {
						K.stopPropagation(), this.removeFilter(Z)
					}), w(this, "removeFilter", K => {
						const {
							handleFiltersChange: Z
						} = this.props, oe = [...this.props.filters], ce = oe[K];
						oe.splice(K, 1), Z(oe), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: ce.key,
							operator: ce.operator,
							value: ce.value
						})
					}), w(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), w(this, "handleFilterSubmit", K => {
						const {
							filterDefinitions: Z
						} = this.props;
						K.preventDefault();
						const {
							filterChanges: oe
						} = this.state, ce = typeof Z[oe.key].parse == "function" ? Array.isArray(oe.value) ? oe.value.map(Z[oe.key].parse) : Z[oe.key].parse(oe.value) : oe.value;
						if (Z[oe.key].validate && (Array.isArray(ce) ? !ce.every(Z[oe.key].validate) : !Z[oe.key].validate(ce))) return this.setState({
							invalid: !0
						});
						const x = [...this.props.filters],
							y = P({}, oe, {
								value: ce
							}),
							M = !x[this.state.openFilter];
						M ? x.push(y) : x[this.state.openFilter] = P({}, oe), this.props.handleFiltersChange(x, y), (M ? this.props.onAddFilter : this.props.onEditFilter)({
							field: y.key,
							operator: y.operator,
							value: y.value
						}), this.closeOpenFilterChanges()
					}), w(this, "handlePendingKeyChange", ({
						value: K
					}) => {
						const {
							filterDefinitions: Z
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: K,
								operator: (0, T.uv)(K, Z),
								value: (0, T.TT)(K, Z)
							}
						})
					}), w(this, "handlePendingOperatorChange", ({
						value: K
					}) => {
						let Z = P({}, this.state.filterChanges, {
							operator: K
						});
						if ((0, T.dr)(K)) {
							var oe, ce;
							((oe = this.state.filterChanges) === null || oe === void 0 ? void 0 : oe.value) && !Array.isArray((ce = this.state.filterChanges) === null || ce === void 0 ? void 0 : ce.value) && (Z.value = [this.state.filterChanges.value])
						} else {
							var x, y, M;
							((x = this.state.filterChanges) === null || x === void 0 ? void 0 : x.value) && Array.isArray((y = this.state.filterChanges) === null || y === void 0 ? void 0 : y.value) && ((M = this.state.filterChanges) === null || M === void 0 ? void 0 : M.value.length) > 0 && (Z.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: Z
						})
					}), w(this, "handlePendingValueChange", K => {
						this.setState({
							invalid: !1,
							filterChanges: P({}, this.state.filterChanges, {
								value: K
							})
						})
					}), w(this, "handleShowOverflow", () => {
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
				componentDidUpdate(K) {
					K.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(K) {
					const {
						formatLabel: Z,
						filterDefinitions: oe
					} = this.props, {
						operator: ce
					} = this.state.filterChanges, x = oe[this.state.filterChanges.key], y = this.state.filterChanges.value, M = S => Array.isArray(S) ? S.map(U => U.value) : (S == null ? void 0 : S.value) || null;
					if (x.renderValueComponent) return x.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (x.type) {
						case C.k.select:
							return (0, T.dr)(ce) ? o().createElement(s.Z, {
								searchable: !0,
								multi: !0,
								creatable: !x.options,
								value: typeof y.split == "function" ? y == null ? void 0 : y.split(",") : Array.isArray(y) ? y : [],
								options: x.options ? x.options.map(S => ({
									value: S.value || S,
									label: S.label || Z(this.state.filterChanges.key, S, K)
								})) : y ? (Array.isArray(y) ? y : y.split(",")).map(S => ({
									label: S,
									value: S
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(_.Trans, {
									id: x.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: x.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: S => {
									this.handlePendingValueChange(M(S))
								},
								isValidNewOption: S => {
									const U = x.validate;
									return !U && S || S && U([S])
								},
								getNewOptionData: (S, U) => ({
									value: S,
									label: U
								})
							}) : o().createElement(a.hQ, {
								hideLabel: !0,
								value: y,
								options: x.options.map(S => ({
									value: S,
									label: Z(this.state.filterChanges.key, S, K)
								})),
								onChange: ({
									value: S
								}) => this.handlePendingValueChange(S)
							});
						case C.k.string:
						default:
							return (0, T.dr)(ce) ? o().createElement(s.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof y.split == "function" ? y == null ? void 0 : y.split(",") : Array.isArray(y) ? y : [],
								options: y ? (Array.isArray(y) ? y : y.split(",")).map(S => ({
									label: S,
									value: S
								})) : [],
								noOptionsMessage: () => null,
								placeholder: K.t("analytics.report.filters.labels.placeholder", {
									example: oe[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: S => {
									this.handlePendingValueChange(M(S))
								},
								isValidNewOption: S => {
									const U = x.validate;
									return !U && S || S && U([S])
								},
								getNewOptionData: (S, U) => ({
									value: S,
									label: U
								}),
								formatCreateLabel: S => K.t("filter_editor.value_create_label", {
									value: S
								})
							}) : o().createElement(_.I18n, null, S => o().createElement(p.I, {
								value: this.state.filterChanges.value,
								onChange: U => this.handlePendingValueChange(U.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: S.t("analytics.report.filters.labels.placeholder", {
									example: oe[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: K,
						filterDefinitions: Z,
						modalStyles: oe,
						filterIconType: ce,
						buttonStyle: x
					} = this.props, y = ie(this.overflowWrapper), M = `filterPanel${this.state.id}`, S = this.state.openFilter !== null;
					return o().createElement(_.I18n, null, U => o().createElement(c.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(X, null, o().createElement(te, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": S,
						"aria-controls": M,
						inverted: !0,
						buttonStyle: x
					}, o().createElement(n.J, {
						type: ce || "add",
						mr: 1,
						label: U.t("common.add", {
							_: "Add"
						})
					}), o().createElement(_.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(Y, null, o().createElement(_.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(R, {
						innerRef: this.overflowWrapper,
						overflowLimit: I,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map(($, me) => {
						const {
							key: Te,
							operator: Ie,
							value: Ae
						} = $, N = Z[Te].ignoreLabelTranslation ? Z[Te].label : U.t(Z[Te].label), pe = U.t(`analytics.report.filters.operators.${Ie}`), Oe = Array.isArray(Ae) ? Ae.map(Fe => K(Te, Fe, U)).join(", ") : K(Te, Ae, U), Re = `${N} ${pe} ${Oe}`;
						return o().createElement(W, {
							key: `${Te}-${Ie}-${Ae}`,
							title: Re
						}, o().createElement(V, {
							onClick: () => this.handleOpenFilterEdit(me)
						}, o().createElement(c.ZC, {
							display: "flex"
						}, o().createElement(ee, null, N), o().createElement(j, null, pe), o().createElement(ne, null, Oe), (0, T.oN)($, Z) ? o().createElement(r.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(le, {
							onClick: Fe => this.handleRemoveFilterClick(Fe, me),
							"aria-label": "remove"
						}, o().createElement(n.J, {
							type: "remove"
						})))))
					})), S && o().createElement(g.Z, {
						id: M,
						filterDefinitions: Z,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, T.oN)(this.state.filterChanges, Z),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: K,
						modalStyles: oe
					}), this.state.hasOverflowed && o().createElement(u.Z, {
						count: y,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			w(Q, "propTypes", {
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
			}), E.Z = Q
		},
		"../../../common/component/component-filter-bar/src/index.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				ME: function() {
					return o.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return d.k
				},
				oN: function() {
					return f.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				d = t("../../../common/component/component-filter-bar/src/constants.js"),
				f = t("../../../common/component/component-filter-bar/src/utils.js"),
				l = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				OZ: function() {
					return l
				},
				YB: function() {
					return f
				}
			});

			function e(i, p, b) {
				return p = o(p), p in i ? Object.defineProperty(i, p, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[p] = b, i
			}

			function o(i) {
				var p = d(i, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function d(i, p) {
				if (typeof i != "object" || i === null) return i;
				var b = i[Symbol.toPrimitive];
				if (b !== void 0) {
					var n = b.call(i, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(i)
			}
			class f extends Error {
				constructor(p, b) {
					super(b);
					e(this, "translationKey", void 0), this.translationKey = p, this.name = "TranslatorError"
				}
			}
			class l extends f {
				constructor(p) {
					super(p, `Translation key not found: ${p}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var _ = null
		},
		"../../../common/util/types/src/api/domain.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Aw: function() {
					return I
				},
				Ib: function() {
					return v
				},
				Ks: function() {
					return R
				},
				MS: function() {
					return h
				},
				PN: function() {
					return u
				},
				Pp: function() {
					return f
				},
				Q3: function() {
					return c
				},
				TS: function() {
					return s
				},
				W7: function() {
					return T
				},
				dN: function() {
					return W
				},
				eF: function() {
					return w
				},
				qp: function() {
					return n
				},
				wR: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				d = e.eg.object({
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
				l = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				_ = e.eg.object({
					registrant: f.optional,
					technical: f.optional,
					administrator: f.optional,
					billing: f.optional
				}),
				i = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: _.optional,
					years: e.eg.number
				}),
				p = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let b = function(V) {
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
						status: e.eg.enum(b).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: p.optional,
					landing: e.eg.union([d, e.eg.boolean]).optional,
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
				s = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let u = function(V) {
				return V.PENDING = "pending", V.VERIFIED = "verified", V.REJECTED = "rejected", V.PENDING_DELETE = "pending_delete", V.DELETED = "deleted", V
			}({});
			const g = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(u),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				C = e.eg.object({
					designated_approvers: e.eg.array(g)
				});
			let T = function(V) {
				return V.PENDING = "pending", V.PENDING_UPDATE = "pending_update", V.ENABLED = "enabled", V.DISABLED = "disabled", V
			}({});
			const P = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(T)
				}),
				w = e.eg.intersection([P, C]),
				v = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let h = function(V) {
				return V.UNLOCK_APPROVAL = "UnlockApprovalRequest", V.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", V.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", V.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", V
			}({});
			const I = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				R = e.eg.object({
					message: e.eg.string
				}),
				W = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				df: function() {
					return o
				},
				eX: function() {
					return d
				},
				fG: function() {
					return l
				},
				jI: function() {
					return f
				},
				qu: function() {
					return e
				},
				zc: function() {
					return _
				}
			});
			let e = function(i) {
					return i.Custom = "custom", i.Root = "root", i.Managed = "managed", i.Zone = "zone", i.RateLimit = "ratelimit", i
				}({}),
				o = function(i) {
					return i.Cache = "http_request_cache_settings", i.HttpConfigSettings = "http_config_settings", i.HttpLogCustomFields = "http_log_custom_fields", i.HttpRateLimit = "http_ratelimit", i.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", i.HttpRequestFirewallCustom = "http_request_firewall_custom", i.HttpRequestFirewallManaged = "http_request_firewall_managed", i.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", i.HttpRequestLateTransform = "http_request_late_transform", i.HttpRequestMain = "http_request_main", i.HttpRequestOrigin = "http_request_origin", i.HttpRequestRedirect = "http_request_redirect", i.HttpRequestSanitize = "http_request_sanitize", i.HttpRequestSBFM = "http_request_sbfm", i.HttpRequestsSnippets = "http_request_snippets", i.HttpRequestTransform = "http_request_transform", i.HttpResponseCompression = "http_response_compression", i.HttpResponseFirewallManaged = "http_response_firewall_managed", i.HttpResponseTransform = "http_response_headers_transform", i.L4DDoS = "ddos_l4", i.L7DDoS = "ddos_l7", i.MagicIDS = "magic_transit_ids_managed", i.MagicManaged = "magic_transit_managed", i.MagicTransit = "magic_transit", i.MagicTransitRateLimit = "magic_transit_ratelimit", i
				}({}),
				d = function(i) {
					return i.Execute = "execute", i.All = "all", i.Block = "block", i.JSChallenge = "js_challenge", i.Challenge = "challenge", i.Allow = "allow", i.Bypass = "bypass", i.Log = "log", i.Rewrite = "rewrite", i.Score = "score", i.Skip = "skip", i.Managed_Challenge = "managed_challenge", i.DDoS_Dynamic = "ddos_dynamic", i.Select_Config = "select_config", i.Set_Config = "set_config", i.Reset = "reset", i.Redirect = "redirect", i.Cache = "set_cache_settings", i
				}({}),
				f = function(i) {
					return i.ZONE_LOCKDOWN = "zoneLockdown", i.UA_BLOCK = "uaBlock", i.BIC = "bic", i.HOT = "hot", i.SECURITY_LEVEL = "securityLevel", i.RATE_LIMIT = "rateLimit", i.WAF = "waf", i
				}({}),
				l = function(i) {
					return i.DEFAULT = "default", i.MEDIUM = "medium", i.LOW = "low", i.EOFF = "eoff", i.HIGH = "high", i.VERY_HIGH = "very_high", i
				}({}),
				_ = function(i) {
					return i.DEFAULT = "", i.XML = "text/xml", i.JSON = "application/json", i.TEXT = "text/plain", i.HTML = "text/html", i
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Yd: function() {
					return e
				},
				vE: function() {
					return o
				}
			});

			function e(d) {
				return Object.keys(d)
			}
			const o = (d, f) => {
				if (f !== void 0) throw new Error("Unexpected object: " + d);
				return f
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(F, E, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(d) {
				if (!t.o(e, d)) return Promise.resolve().then(function() {
					var _ = new Error("Cannot find module '" + d + "'");
					throw _.code = "MODULE_NOT_FOUND", _
				});
				var f = e[d],
					l = f[0];
				return t.e(f[1]).then(function() {
					return t.t(l, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", F.exports = o
		}
	}
]);

//# debugId=b0a1cfdb-57f6-5bd2-b945-716113ceb16b