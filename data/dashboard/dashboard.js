! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3f09fc93-4c76-5795-862d-ad8abdaeceea")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				J8: function() {
					return r
				},
				Jd: function() {
					return c
				},
				QY: function() {
					return f
				},
				Qw: function() {
					return i
				},
				ki: function() {
					return m
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/utils/url.ts"),
				a = t("../../../../node_modules/query-string/query-string.js"),
				u = t.n(a),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				v;
			const i = () => Object.keys(l.Z).reduce((b, P) => (P.indexOf("cf_beta.") === 0 && l.Z.get(P) === "true" && b.push(P.split(".").slice(1).join(".")), b), []),
				m = () => {
					var b, P, w;
					return ((b = window) === null || b === void 0 || (P = b.bootstrap) === null || P === void 0 || (w = P.data) === null || w === void 0 ? void 0 : w.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((v = window) === null || v === void 0 ? void 0 : v.location) && l.Z) {
				const b = u().parse(window.location.search);
				b.beta_on && l.Z.set(`cf_beta.${b.beta_on}`, !0), b.beta_off && l.Z.set(`cf_beta.${b.beta_off}`, !1)
			}
			const g = {},
				n = b => {
					var P, w, y;
					return Object.prototype.hasOwnProperty.call(g, b) ? g[b] : ((P = window) === null || P === void 0 || (w = P.bootstrap) === null || w === void 0 || (y = w.data) === null || y === void 0 ? void 0 : y.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(O => O === b) ? (g[b] = !0, !0) : (g[b] = !1, !1)
				},
				s = b => l.Z ? l.Z.get(`cf_beta.${b}`) === !0 : !1,
				r = b => s(b) || n(b),
				d = () => !0,
				c = () => {
					var b, P, w;
					return ((b = window) === null || b === void 0 || (P = b.bootstrap) === null || P === void 0 || (w = P.data) === null || w === void 0 ? void 0 : w.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				f = b => {
					const P = (0, e.uF)(b),
						w = (P == null ? void 0 : P.roles) || [];
					return (0, o.qR)(location.pathname) && w.length === 1 && w.some(y => y === "Administrator Read Only")
				}
		},
		"../init.ts": function(W, E, t) {
			"use strict";
			t.r(E);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				a = t("../libs/init/initGlobal.ts"),
				u = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				l = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function v(R) {
				for (var j = 1; j < arguments.length; j++) {
					var J = arguments[j] != null ? Object(arguments[j]) : {},
						oe = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(J).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(J, fe).enumerable
					})), oe.forEach(function(fe) {
						i(R, fe, J[fe])
					})
				}
				return R
			}

			function i(R, j, J) {
				return j = m(j), j in R ? Object.defineProperty(R, j, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[j] = J, R
			}

			function m(R) {
				var j = g(R, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function g(R, j) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var oe = J.call(R, j || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(R)
			}
			const n = R => {
				const j = R && R.headers || {},
					J = new Headers(j);
				return J.append("X-Cross-Site-Security", "dash"), v({}, R, {
					headers: J
				})
			};
			(0, l.register)({
				request: (R, j) => {
					try {
						return new URL(R), R === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", j] : [R, j]
					} catch {
						return [R, n(j)]
					}
				}
			});
			var s = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				r = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				d = t("../react/app/providers/storeContainer.js");
			let c = "";
			const f = 61;

			function b(R) {
				const j = R.substr(1);
				if (j && c !== j) {
					const J = document.getElementById(j);
					if (J) {
						const oe = J.getBoundingClientRect().top;
						if (oe > 0) {
							const fe = oe - f;
							document.documentElement.scrollTop = fe
						}
					}
				}
				c = j
			}

			function P(R) {
				R.listen(j => b(j.hash))
			}
			var w = t("../../../../node_modules/cookie/index.js"),
				y = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const O = "CF_dash_version",
				_ = "cf_fv_preview",
				T = "cf_pv",
				D = "current",
				S = "hash",
				N = "deploymentPreview",
				A = "fragmentPreview",
				I = R => R === D ? L() : k(),
				L = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				k = (R = 72) => {
					const j = 36e5;
					return new Date(Date.now() + R * j)
				},
				U = R => {
					switch (R) {
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
				Q = (R, j = !1) => {
					var J;
					const oe = U(R),
						fe = `
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
						Ie = j ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${y.fk.orange[9]};
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
					return fe + Ie
				},
				ae = R => {
					var j;
					const J = document.getElementById(R);
					!J || (j = J.parentNode) === null || j === void 0 || j.removeChild(J)
				};

			function pe() {
				const R = document.getElementById("loading-state");
				R == null || R.classList.add("hide"), R == null || R.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(ae)
				})
			}

			function ce(R) {
				var j;
				const J = document.getElementById("loading-state"),
					oe = !!((j = w.parse(document.cookie)) === null || j === void 0 ? void 0 : j[O]);
				!J || (J.innerHTML = Q(R == null ? void 0 : R.code, oe))
			}
			var ue = t("../utils/initStyles.ts"),
				F = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				z = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				B = t("../react/common/selectors/languagePreferenceSelector.ts"),
				h = t("../flags.ts"),
				x = t("../utils/getDashVersion.ts");
			const G = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				q = !0,
				ie = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				ee = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var M = t("../utils/sentry/lastSentEventId.ts"),
				K = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				V = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const $ = R => {
				const j = async J => {
					var oe, fe;
					const Ie = {
						envelope: J.body,
						url: R.url,
						isPreviewDeploy: (oe = window) === null || oe === void 0 || (fe = oe.build) === null || fe === void 0 ? void 0 : fe.isPreviewDeploy,
						release: (0, x.t)()
					};
					try {
						const Oe = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(Ie)
						});
						return {
							statusCode: Oe.status,
							headers: {
								"x-sentry-rate-limits": Oe.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": Oe.headers.get("Retry-After")
							}
						}
					} catch (Oe) {
						return console.log(Oe), (0, V.$2)(Oe)
					}
				};
				return K.q(R, j)
			};
			var te = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				me = t("../../../../node_modules/history/esm/history.js"),
				ge = (0, me.lX)(),
				ye = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Ae = t("../react/utils/url.ts");
			const Be = (0, ye.Rf)();
			let Ce;

			function Se(R) {
				return Ye(R, "react-router-v5")
			}

			function Ye(R, j) {
				return (J, oe = !0, fe = !0) => {
					oe && Be && Be.location && (Ce = J({
						name: (0, Ae.Fl)(Be.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": j
						}
					})), fe && R.listen && R.listen((Ie, Oe) => {
						if (Oe && (Oe === "PUSH" || Oe === "POP")) {
							Ce && Ce.finish();
							const Me = {
								"routing.instrumentation": j
							};
							Ce = J({
								name: (0, Ae.Fl)(Ie.pathname),
								op: "navigation",
								tags: Me
							})
						}
					})
				}
			}
			var Ke = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				Ve = t.n(Ke),
				H = t("../../../common/intl/intl-core/src/errors.ts"),
				ve = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				De = t("../react/common/middleware/sparrow/errors.ts");

			function Xe(R, j, J) {
				return j = Je(j), j in R ? Object.defineProperty(R, j, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[j] = J, R
			}

			function Je(R) {
				var j = st(R, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function st(R, j) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var oe = J.call(R, j || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(R)
			}
			class qe {
				constructor() {
					Xe(this, "name", qe.id)
				}
				setupOnce() {
					t.g.console && (0, ve.hl)(t.g.console, "error", j => (...J) => {
						const oe = J.find(fe => fe instanceof Error);
						if (G && oe) {
							let fe, Ie = !0;
							if (oe instanceof De.ez) {
								const Oe = oe instanceof De.oV ? oe.invalidProperties : void 0;
								fe = {
									tags: {
										"sparrow.eventName": oe.eventName
									},
									extra: {
										sparrow: {
											eventName: oe.eventName,
											invalidProperties: Oe
										}
									},
									fingerprint: [oe.name ? oe.name : "SparrowValidationError"]
								}, Ie = !1
							} else if (oe instanceof Ke.SparrowIdCookieError) fe = {
								extra: {
									sparrowIdCookie: oe.cookie
								},
								fingerprint: [oe.name ? oe.name : "SparrowIdCookieError"]
							};
							else if (oe.name === "ChunkLoadError") {
								fe = {
									fingerprint: [oe.name]
								};
								try {
									fe.tags = {
										chunkId: oe.message.split(" ")[2],
										chunkUrl: oe.request
									}
								} catch {}
							} else oe instanceof H.YB && (fe = {
								fingerprint: ["TranslatorError", oe.translationKey]
							});
							Ie && s.Tb(oe, fe)
						}
						typeof j == "function" && j.apply(t.g.console, J)
					})
				}
			}
			Xe(qe, "id", "ConsoleErrorIntegration");
			var pt = null;
			const Y = () => {
					if (G && q) {
						var R, j, J, oe, fe, Ie, Oe, Me, it, We;
						let $t = "production";
						((R = window) === null || R === void 0 || (j = R.build) === null || j === void 0 ? void 0 : j.isPreviewDeploy) && ($t += "-preview"), z.S({
							dsn: G,
							release: (0, x.t)(),
							environment: $t,
							ignoreErrors: ee,
							allowUrls: ie,
							autoSessionTracking: !1,
							integrations: dt => [...dt.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new qe, new te.jK.BrowserTracing({
								routingInstrumentation: Se(ge)
							})],
							tracesSampleRate: 0,
							transport: $,
							beforeSend: dt => (M.e.setEventId(dt.event_id), dt)
						});
						const Mt = (0, d.bh)().getState();
						s.rJ({
							LOCAL_STORAGE_FLAGS: (0, h.Qw)(),
							USER_BETA_FLAGS: (0, h.ki)(),
							meta: {
								connection: {
									type: (J = window) === null || J === void 0 || (oe = J.navigator) === null || oe === void 0 || (fe = oe.connection) === null || fe === void 0 ? void 0 : fe.effectiveType,
									bandwidth: (Ie = window) === null || Ie === void 0 || (Oe = Ie.navigator) === null || Oe === void 0 || (Me = Oe.connection) === null || Me === void 0 ? void 0 : Me.downlink
								},
								languagePreference: (0, B.r)(Mt),
								isPreviewDeploy: (it = window) === null || it === void 0 || (We = it.build) === null || We === void 0 ? void 0 : We.isPreviewDeploy
							},
							utilGates: (0, F.T2)(Mt)
						}), window.addEventListener("unhandledrejection", function(dt) {})
					}
				},
				de = R => {
					R ? s.av({
						id: R
					}) : s.av(null)
				};
			var he = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				je = () => {
					let R;
					try {
						R = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), R = window.location.search
					}
					if (!R.includes("remote[")) return;
					const j = new URLSearchParams(R),
						J = {};
					for (let [oe, fe] of j) oe.includes("remote") && (J[oe.replace(/remote\[|\]/g, "")] = fe);
					he.Z.set("mfe-remotes", JSON.stringify(J))
				},
				Ne = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				et = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const ct = "ANON_USER_ID";

			function mt() {
				var R, j, J, oe;
				let fe = (R = t.g) === null || R === void 0 || (j = R.bootstrap) === null || j === void 0 || (J = j.data) === null || J === void 0 || (oe = J.user) === null || oe === void 0 ? void 0 : oe.id;
				if (!fe) {
					let Ie = he.Z.get(ct);
					if (!Ie) {
						let Oe = (0, et.Z)();
						he.Z.set(ct, Oe), Ie = Oe
					}
					return Ie
				}
				return fe
			}
			async function tt() {
				const R = (0, d.bh)();
				R.dispatch((0, Ne.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await R.dispatch((0, F.UL)({
					userId: mt()
				}))
			}
			class Et extends Error {
				constructor(j, J) {
					super(J);
					this.name = `${j} ${J}`
				}
			}
			const yt = () => {
					document.cookie.split(";").forEach(j => {
						const [J] = j.trim().split("=");
						document.cookie = `${J}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				gt = async () => {
					let R = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!R.ok) throw R.headers.get("content-type") === "text/html" && (await R.text()).toLowerCase().includes("cookie too large") && (s.$e(function(fe) {
						fe.setTag("init", "cookieTooLarge"), s.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), yt(), window.location.reload()), new Et("Bootstrap API Failure", R == null ? void 0 : R.status);
					return (await R.json()).result.data
				};
			var ke = t("webpack/sharing/consume/default/react/react"),
				be = t.n(ke),
				Fe = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				ht = t("webpack/sharing/consume/default/react-dom/react-dom"),
				lt = t("webpack/sharing/consume/default/react-redux/react-redux"),
				bt = t("../../../../node_modules/swr/core/dist/index.mjs"),
				Z = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				se = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Ee = t("../react/shims/focus-visible.js"),
				Te = t("../react/app/components/DeepLink/index.ts"),
				Le = t("../../../../node_modules/prop-types/index.js"),
				xe = t.n(Le),
				Qe = t("../react/utils/translator.tsx"),
				nt = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				we = t("../../../dash/intl/intl-translations/src/index.ts"),
				Ct = t("../../../../node_modules/query-string/query-string.js"),
				ut = t.n(Ct),
				Nt = t("../react/common/actions/userActions.ts"),
				ft = t("../react/common/selectors/userSelectors.ts"),
				at = t("../react/utils/i18n.ts"),
				wt = t("../react/utils/bootstrap.ts");

			function Rt(R) {
				for (var j = 1; j < arguments.length; j++) {
					var J = arguments[j] != null ? Object(arguments[j]) : {},
						oe = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(J).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(J, fe).enumerable
					})), oe.forEach(function(fe) {
						Tt(R, fe, J[fe])
					})
				}
				return R
			}

			function Tt(R, j, J) {
				return j = Pt(j), j in R ? Object.defineProperty(R, j, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[j] = J, R
			}

			function Pt(R) {
				var j = It(R, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function It(R, j) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var oe = J.call(R, j || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(R)
			}
			let Ge = ut().parse(location.search);
			const Dt = R => {
					const j = (0, wt.$8)() ? [(0, we.Fy)(we.if.changes), (0, we.Fy)(we.if.common), (0, we.Fy)(we.if.navigation), (0, we.Fy)(we.if.overview), (0, we.Fy)(we.if.onboarding), (0, we.Fy)(we.if.invite), (0, we.Fy)(we.if.login), (0, we.Fy)(we.if.dns), (0, we.Fy)(we.n4.ssl_tls), (0, we.Fy)(we.if.message_inbox), (0, we.Fy)(we.if.welcome)] : [(0, we.Fy)(we.if.common), (0, we.Fy)(we.if.invite), (0, we.Fy)(we.if.login), (0, we.Fy)(we.if.onboarding)];
					Ge.lang ? xt(R) : he.Z.get(at.th) && Lt(R, (0, at.Kd)());
					const J = async oe => (await Promise.all(j.map(Ie => Ie(oe)))).reduce((Ie, Oe) => Rt({}, Ie, Oe), {});
					return be().createElement(nt.LocaleContext.Provider, {
						value: R.languagePreference
					}, be().createElement(nt.I18nProvider, {
						translator: Qe.Vb,
						locale: R.languagePreference
					}, be().createElement(nt.I18nLoader, {
						loadPhrases: J
					}, R.children)))
				},
				xt = async R => {
					let j = Ge.lang.substring(0, Ge.lang.length - 2) + Ge.lang.substring(Ge.lang.length - 2, Ge.lang.length).toUpperCase();
					if (!(0, B.v)(j)) {
						console.warn(`${j} is not a supported locale.`), delete Ge.lang, R.history.replace({
							search: ut().stringify(Ge)
						});
						return
					}(0, at.i_)(j), delete Ge.lang, Lt(R, j), R.isAuthenticated || R.history.replace({
						search: ut().stringify(Ge)
					})
				}, Lt = async (R, j) => {
					if (R.isAuthenticated) try {
						await R.setUserCommPreferences({
							"language-locale": j
						}, {
							hideErrorAlert: !0
						}), he.Z.remove(at.th), R.history.replace({
							search: ut().stringify(Ge)
						})
					} catch (J) {
						he.Z.set(at.th, !0), console.error(J)
					} else he.Z.set(at.th, !0)
				}, vt = R => {
					const j = (0, ft.PR)(R);
					return {
						isAuthenticated: !!(j && j.id),
						languagePreference: (0, at.Kd)() || (0, B.r)(R)
					}
				}, Bt = {
					setUserCommPreferences: Nt.V_
				};
			var Ot = (0, Fe.withRouter)((0, lt.connect)(vt, Bt)(Dt));
			Dt.propTypes = {
				history: xe().object,
				languagePreference: xe().string.isRequired,
				children: xe().node.isRequired,
				isAuthenticated: xe().bool,
				setUserCommPreferences: xe().func.isRequired
			};
			var re = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				ne = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let p;
			const C = ({
				selectorPrefix: R = "c_"
			} = {}) => (p || (p = (0, ne.Z)({
				dev: !1,
				selectorPrefix: R
			})), p);
			var X = t("../react/common/out.css"),
				_e = t("../react/common/components/ModalManager.tsx"),
				Pe = t("../react/app/components/ErrorBoundary.tsx"),
				$e = t("../react/common/actions/notificationsActions.ts");
			const ze = (t.g.bootstrap || {}).data || {};
			class ot extends be().Component {
				componentDidMount() {
					ze.messages && this.dispatchNotificationActions(ze.messages)
				}
				dispatchNotificationActions(j) {
					j.forEach(J => {
						const {
							type: oe,
							message: fe,
							persist: Ie
						} = J;
						["success", "info", "warn", "error"].includes(oe) && this.props.notifyAdd(oe, (0, Qe.ZP)(fe), {
							persist: !!Ie
						})
					})
				}
				render() {
					return null
				}
			}
			var rt = (0, Fe.withRouter)((0, lt.connect)(null, {
				notifyAdd: $e.add
			})(ot));
			ot.propTypes = {
				notifyAdd: xe().func.isRequired
			};
			var Re = t("../react/app/redux/index.ts");

			function Ut() {
				var R;
				const j = (0, Re.p4)(ft.PR),
					J = (j == null || (R = j.email) === null || R === void 0 ? void 0 : R.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					oe = (0, Ne.Yc)();
				(0, ke.useEffect)(() => {
					oe({
						userType: J
					})
				}, [J, oe])
			}
			var St = t("../react/common/selectors/entitlementsSelectors.ts"),
				kt = t("../react/common/selectors/accountSelectors.ts");
			const jt = ["accountId", "is_ent"];

			function He() {
				const R = (0, Ne.f7)(),
					j = (0, Fe.useHistory)(),
					J = (0, Ae.uW)(j.location.pathname),
					oe = (0, Ne.Yc)(),
					fe = (0, Ne.O$)(),
					Ie = (0, Re.p4)(St.u1),
					Oe = !Ie.isRequesting && !!Ie.data,
					Me = (0, Re.p4)(St.p1),
					it = (0, Re.p4)(kt.Xu),
					We = (0, Re.p4)(kt.uF),
					$t = !it.isRequesting && !!it.data;
				(0, ke.useEffect)(() => {
					if (J && $t && We && Oe && J === We.account.id) {
						var Mt, dt, Vt;
						oe({
							accountId: We.account.id,
							is_ent: Me,
							is_free_account: !Me && !(We == null || (Mt = We.account.meta) === null || Mt === void 0 ? void 0 : Mt.has_business_zones) && !(We == null || (dt = We.account.meta) === null || dt === void 0 ? void 0 : dt.has_pro_zones) && !(We == null || (Vt = We.account.meta) === null || Vt === void 0 ? void 0 : Vt.has_enterprise_zones)
						})
					} else(!J || J in R && R.accountId !== J) && fe(jt)
				}, [$t, We, oe, fe, Oe, Me, J, R])
			}
			var Gt = t("../react/common/selectors/zoneSelectors.ts");

			function Wt() {
				const R = (0, Re.p4)(Gt.nA),
					j = (0, Ne.Yc)();
				(0, ke.useEffect)(() => {
					var J;
					j({
						zone_id: R == null ? void 0 : R.id,
						zone_plan: R == null || (J = R.plan) === null || J === void 0 ? void 0 : J.legacy_id
					})
				}, [R, j])
			}
			const en = () => (Ut(), He(), Wt(), null);
			var tn = t("../react/app/components/Persistence/index.tsx"),
				nn = t("../node_modules/@cloudflare/elements/es/index.js"),
				on = t("../react/app/components/LoadingSuspense.tsx");
			const rn = be().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(30285), t.e(12174), t.e(57062), t.e(84959), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var an = () => be().createElement(on.Z, null, be().createElement(rn, null));
			const sn = () => (ke.useEffect(() => pe, []), null);
			var cn = t("../../../../node_modules/moment/moment.js"),
				Zt = t.n(cn);
			const ln = R => {
					switch (R) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return R.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return R.toLowerCase();
						default:
							return "en"
					}
				},
				un = () => {
					const R = (0, Re.p4)(B.r);
					(0, ke.useEffect)(() => {
						const j = ln(R);
						j !== Zt().locale() && Zt().locale(j), document.documentElement.lang = R
					}, [R])
				},
				dn = () => {
					(0, ke.useEffect)(() => {
						async function R() {
							var j, J;
							let oe;
							if (((j = window) === null || j === void 0 || (J = j.build) === null || J === void 0 ? void 0 : J.isPreviewDeploy) && (oe = "cookie"), !!oe) try {
								const fe = document.head.querySelector("link[rel=icon]");
								fe && (fe.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${oe}.ico`)).default)
							} catch {}
						}
						R()
					}, [])
				};
			var pn = t("../react/common/constants/constants.ts");
			const mn = () => {
					var R;
					const j = (0, Fe.useLocation)(),
						[J, oe] = (0, ke.useState)(((R = window) === null || R === void 0 ? void 0 : R.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, ke.useEffect)(() => {
						const fe = ut().parse(j.search);
						if (fe.pt && he.Z.set(pn.sJ, fe.pt), fe == null ? void 0 : fe.devPanel) {
							var Ie, Oe;
							(Ie = window) === null || Ie === void 0 || (Oe = Ie.localStorage) === null || Oe === void 0 || Oe.setItem("gates_devtools_ui_gates_controller_enabled", "true"), oe(!0)
						}
					}, [j.search]), {
						devPanelEnabled: J
					}
				},
				gn = ({
					id: R,
					customDataLayer: j = [],
					dataLayerName: J = "dataLayer"
				}) => {
					const oe = `<iframe src="https://www.googletagmanager.com/ns.html?id=${R}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						fe = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${J}', '${R}')`,
						Ie = `
    window.${J} = window.${J} || [];
    window.${J}.push(${JSON.stringify(j)})
  `;
					return {
						iframe: oe,
						script: fe,
						dataLayerHTML: Ie
					}
				},
				fn = R => {
					const j = document.createElement("script");
					return j.innerHTML = R, j.async = !0, j
				},
				vn = R => {
					const j = document.createElement("noscript");
					return j.innerHTML = R, j
				},
				Ht = R => {
					const j = document.createElement("script");
					return j.innerHTML = R, j
				},
				Bn = ({
					dataLayer: R,
					dataLayerName: j
				}) => {
					if (window[j]) return window[j].push(R);
					const J = `
      window.${j} = window.${j} || [];
      window.${j}.push(${JSON.stringify(R)})`,
						oe = Ht(J);
					document.head.insertBefore(oe, document.head.childNodes[0])
				},
				_n = ({
					containerId: R,
					customDataLayer: j,
					gtmFeatureFlag: J = !0
				}) => {
					(0, ke.useEffect)(() => {
						(() => {
							if (!J) return null;
							const {
								iframe: fe,
								script: Ie,
								dataLayerHTML: Oe
							} = gn({
								id: R,
								customDataLayer: j
							});
							document.head.insertBefore(Ht(Oe), document.head.childNodes[0]), document.head.insertBefore(fn(Ie), document.head.childNodes[0]), document.body.insertBefore(vn(fe), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const En = ({
				isDev: R,
				gtmFeatureFlag: j
			}) => {
				(0, ke.useEffect)(() => {
					(() => {
						if (!j) return null;
						let oe;
						R ? oe = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : oe = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const fe = document.createElement("script");
						fe.async = !0, fe.src = oe, document.head.insertBefore(fe, document.head.childNodes[0])
					})()
				}, [])
			};
			var yn = t("../react/utils/useDomainConnectRedirect.ts");
			const hn = "GTM-NDGPDFZ",
				bn = be().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(30285), t.e(12174), t.e(57062), t.e(84959), t.e(51436), t.e(3292), t.e(47386), t.e(70618), t.e(19910), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(18527), t.e(52215), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				Cn = be().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(39074), t.e(57062), t.e(3292), t.e(55879), t.e(69088), t.e(18527), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var Tn = ({
					userIsAuthed: R
				}) => {
					un(), dn(), (0, yn.y)();
					const {
						devPanelEnabled: j
					} = mn();
					return _n({
						containerId: hn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), En({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), be().createElement(ke.Suspense, {
						fallback: be().createElement(sn, null)
					}, be().createElement(Fe.Switch, null, !R && !0 && be().createElement(Fe.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, be().createElement(Cn, null)), be().createElement(Fe.Route, {
						render: () => be().createElement(nn.ZC, {
							minHeight: "100vh"
						}, be().createElement(bn, null))
					})), j && be().createElement(an, null))
				},
				zt = t("../../../../node_modules/yup/es/index.js"),
				In = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => zt.Z_().email((0, Qe.ZP)("common.validation.email")).required((0, Qe.ZP)("common.validation.email")),
				cfPassword: () => zt.Z_().required((0, Qe.ZP)("common.validation.required"))
			};
			(0, In.Yd)(Qt).forEach(R => {
				zt.kM(zt.Z_, R, Qt[R])
			});
			var On = t("../react/common/utils/startViewTransition.ts");
			const Xt = be().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function An() {
				const [R, j] = (0, ke.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, ke.useEffect)(() => {
					const J = window.matchMedia("(prefers-color-scheme: dark)"),
						oe = fe => {
							j(fe.matches ? "dark" : "light")
						};
					return J.addEventListener("change", oe), () => {
						J.removeEventListener("change", oe)
					}
				}, []), R
			}
			const wn = () => {
					const R = (0, wt.$8)(),
						[j, J] = (0, ke.useState)(R ? Xt : be().Fragment),
						oe = An(),
						[fe, Ie] = (0, ke.useState)((0, y.Yc)());
					(0, ke.useEffect)(() => {
						(0, y.fF)(() => Ie((0, y.Yc)()))
					}, []);
					const Oe = Me => {
						Ie(Me), (0, On.o)(() => {
							(0, y.C8)(Me)
						}), document.cookie = `dark-mode=${Me};Path=/;Max-Age=31536000`, Me === "dark" || Me === "on" || Me === "system" && oe === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
					};
					return (0, ke.useEffect)(() => {
						J(R ? Xt : be().Fragment)
					}, [R]), (0, ke.useEffect)(() => {
						const Me = () => Oe(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Me), () => {
							window.removeEventListener("storage", Me)
						}
					}, []), be().createElement(ke.Suspense, {
						fallback: null
					}, be().createElement(lt.Provider, {
						store: (0, d.bh)()
					}, be().createElement(Fe.Router, {
						history: ge
					}, be().createElement(j, null, be().createElement(re.Z, {
						renderer: C()
					}, be().createElement(Ot, null, be().createElement(Pe.S, {
						sentryTag: "Root"
					}, be().createElement(bt.J$, {
						value: {
							fetcher: Me => fetch(Me).then(it => it.json())
						}
					}, be().createElement(en, null), be().createElement(rt, null), be().createElement(tn.Z_, {
						onDarkModeChangeCb: Oe
					}, be().createElement(Te.ZP, null, be().createElement(Tn, {
						userIsAuthed: R
					}))), be().createElement(_e.ZP, null), be().createElement(Z.F0, null)))))))))
				},
				Pn = () => {
					(0, ht.render)(be().createElement(wn, null), document.getElementById("react-app"))
				};
			var At = t("../utils/initSparrow.ts"),
				Ft = t("../utils/zaraz.ts");
			const Dn = () => {
					const R = (0, ft.PR)((0, d.bh)().getState());
					Ln(), (0, At.Ug)(), (0, Ft.bM)(), (R == null ? void 0 : R.id) && Ve().setUserId(R == null ? void 0 : R.id), (0, At.yV)(), !(0, At.Wi)() && (0, At.IM)(), R ? (0, Ft.yn)(R) : (0, Ft.Ro)()
				},
				Ln = () => {
					var R, j;
					(R = window) === null || R === void 0 || (j = R.OneTrust) === null || j === void 0 || j.OnConsentChanged(() => {
						const J = (0, ft.PR)((0, d.bh)().getState());
						(0, At.Wi)() ? (Ve().setEnabled(!0), (J == null ? void 0 : J.id) ? (Ve().setUserId(J.id), (0, Ft.yn)(J)) : (0, Ft.Ro)(), (0, At.yV)()) : (Ve().setEnabled(!1), (0, At.IM)())
					})
				};

			function Sn(R) {
				for (var j = 1; j < arguments.length; j++) {
					var J = arguments[j] != null ? Object(arguments[j]) : {},
						oe = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(J).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(J, fe).enumerable
					})), oe.forEach(function(fe) {
						kn(R, fe, J[fe])
					})
				}
				return R
			}

			function kn(R, j, J) {
				return j = Mn(j), j in R ? Object.defineProperty(R, j, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[j] = J, R
			}

			function Mn(R) {
				var j = Nn(R, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function Nn(R, j) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var oe = J.call(R, j || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(R)
			}
			const Rn = "init",
				Jt = (R, j) => {
					s.$e(function(J) {
						J.setTag(Rn, j), s.Tb(R)
					}), ce(R)
				},
				Kt = async (R, j) => {
					try {
						return await R(), !0
					} catch (J) {
						return Jt(J, j), !1
					}
				};
			(async () => {
				try {
					var R, j, J;
					t.g.build = Sn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "f8e765a75d14bc223b7e165ad39e97f55d8eaa1e",
						dashVersion: "32653445",
						env: "production",
						builtAt: 1745011552278,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, x.p)()
					}), Y();
					const oe = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => P(ge),
						tag: "hashScroll"
					}, {
						fn: ue.Z,
						tag: "styles"
					}, {
						fn: je,
						tag: "mfePreviewData"
					}];
					for (const it of oe)
						if (!await Kt(it.fn, it.tag)) return;
					let fe;
					if (!await Kt(async () => {
							fe = await gt()
						}, "bootstrap")) return;
					const Ie = (0, d.bh)(),
						Oe = ((R = fe) === null || R === void 0 ? void 0 : R.data) || {};
					Ie.dispatch((0, r.mW)("user", Oe == null ? void 0 : Oe.user));
					const Me = (j = fe) === null || j === void 0 || (J = j.data) === null || J === void 0 ? void 0 : J.user;
					return t.g.bootstrap = fe, Me && Me.id && de(Me.id), !await Kt(tt, "gates") || !await Kt(Dn, "tracking") ? void 0 : Pn()
				} catch (oe) {
					Jt(oe, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(W, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/userSelectors.ts"),
				l = t("../react/common/selectors/zoneSelectors.ts"),
				v = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/common/utils/isGuards.ts"),
				m = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				g = t.n(m);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(d) {
					for (var c = 1; c < arguments.length; c++) {
						var f = arguments[c];
						for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (d[b] = f[b])
					}
					return d
				}, n.apply(this, arguments)
			}
			const s = d => {
				function c(f) {
					const b = (0, a.UM)(),
						P = (0, m.useHistory)(),
						w = (0, m.useLocation)(),
						y = (0, m.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						O = (0, a.p4)(u.PR) || null,
						_ = (0, a.p4)(l.nA) || null,
						T = (0, a.p4)(v.uF),
						D = T ? T.account : null;
					if (!y) return null;
					const {
						accountId: S,
						app: N,
						tab: A
					} = y.params, I = y.params.zoneName && ((0, i.v5)(y.params.zoneName) || y.params.zoneName.indexOf(".") > 0) ? y.params.zoneName : void 0;
					return o().createElement(d, n({
						dispatch: b,
						history: P,
						location: w,
						match: y,
						user: O,
						membership: S ? T : null,
						account: S ? D : null,
						accountId: S || null,
						zone: I ? _ : null,
						zoneName: I || null,
						app: I ? N : null,
						tab: I ? A : null
					}, f))
				}
				return c.displayName = `withEntities(${r(d)})`, c
			};

			function r(d) {
				return d.displayName || d.name || "Component"
			}
			E.Z = s
		},
		"../react/app/components/AccountHome/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$$: function() {
					return _
				},
				CK: function() {
					return N
				},
				KV: function() {
					return D
				},
				OX: function() {
					return S
				},
				QV: function() {
					return O
				},
				Yt: function() {
					return w
				},
				bA: function() {
					return y
				},
				fu: function() {
					return I
				},
				gX: function() {
					return f
				},
				hh: function() {
					return A
				},
				o1: function() {
					return T
				},
				tw: function() {
					return b
				},
				xD: function() {
					return P
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				a = t("../react/utils/url.ts");
			const u = "projects table click",
				l = "click create application",
				v = "account home dev plat - product card click",
				i = "account home dev plat - empty state CTA click",
				m = "account home dev plat - view all projects click",
				g = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				s = "account home zero trust - analytics link click",
				r = "account home zero trust - product card click",
				d = "account home zero trust - plan pill click",
				c = "account home zero trust - plan fallback link click",
				f = {
					SPARROW_PROJECTS_TABLE_CLICK: u,
					SPARROW_CREATE_PROJECT_CLICK: l,
					SPARROW_PRODUCT_CARD_CLICK: v,
					SPARROW_EMPTY_STATE_CTA_CLICK: i,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: m,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: g,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: s,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: r,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: d,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: c
				},
				b = L => {
					o().sendEvent(u, {
						component: L
					})
				},
				P = L => {
					o().sendEvent(u, {
						component: "menu",
						subcomponent: L
					})
				},
				w = () => {
					o().sendEvent(l, {
						category: "Projects Table"
					})
				},
				y = ({
					category: L,
					product: k
				}) => {
					o().sendEvent(v, {
						category: L,
						product: k
					})
				},
				O = () => {
					o().sendEvent(i)
				},
				_ = () => {
					o().sendEvent(m)
				},
				T = L => {
					o().sendEvent(n, {
						category: L
					})
				},
				D = ({
					category: L,
					href: k
				}) => {
					o().sendEvent(g, {
						category: L,
						href: (0, a.cm)(k)
					})
				},
				S = ({
					category: L,
					href: k
				}) => {
					o().sendEvent(s, {
						category: L,
						href: (0, a.cm)(k)
					})
				},
				N = ({
					category: L,
					product: k,
					href: U
				}) => {
					o().sendEvent(r, {
						category: L,
						product: k,
						href: (0, a.cm)(U)
					})
				},
				A = ({
					plan: L
				}) => {
					o().sendEvent(d, {
						plan: L
					})
				},
				I = () => {
					o().sendEvent(c)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				BQ: function() {
					return m
				},
				Bh: function() {
					return v
				},
				CM: function() {
					return g
				},
				MF: function() {
					return o
				},
				TS: function() {
					return r
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
					return s
				},
				r4: function() {
					return u
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
				a = (0, e.R)(o.ADD_SITE, d => ({
					payload: d
				})),
				u = (0, e.R)(o.RESOLVING_START),
				l = (0, e.R)(o.RESOLVING_COMPLETE),
				v = (0, e.R)(o.SELECT_ZONE, d => ({
					payload: d
				})),
				i = (0, e.R)(o.SELECT_ACCOUNT, d => ({
					payload: d
				})),
				m = (0, e.R)(o.SELECT_PAGES_PROJECT, d => ({
					payload: d
				})),
				g = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, d => ({
					payload: d
				})),
				n = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, d => ({
					accountIds: d
				})),
				s = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				r = (0, e.R)(o.SELECT_WORKER, d => ({
					payload: d
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				BV: function() {
					return e
				},
				Dz: function() {
					return g
				},
				Fj: function() {
					return u
				},
				Kt: function() {
					return v
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
					return i
				}
			});
			const e = "to",
				o = "_gl",
				a = "freeTrial",
				u = "deepLinkQueryParams",
				l = "resolvedDeepLinkQueryParams",
				v = "add",
				i = "multiSkuProducts",
				m = "/:account/billing/checkout",
				g = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return A
				},
				U: function() {
					return N.U
				},
				dd: function() {
					return N.dd
				},
				bk: function() {
					return v.bk
				},
				Bh: function() {
					return v.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../react/app/redux/index.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../react/app/components/DeepLink/utils.ts"),
				l = t("../react/utils/bootstrap.ts"),
				v = t("../react/app/components/DeepLink/actions.ts"),
				i = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = t.n(i);

			function g(I) {
				for (var L = 1; L < arguments.length; L++) {
					var k = arguments[L] != null ? Object(arguments[L]) : {},
						U = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(k).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(k, Q).enumerable
					})), U.forEach(function(Q) {
						n(I, Q, k[Q])
					})
				}
				return I
			}

			function n(I, L, k) {
				return L = s(L), L in I ? Object.defineProperty(I, L, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[L] = k, I
			}

			function s(I) {
				var L = r(I, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function r(I, L) {
				if (typeof I != "object" || I === null) return I;
				var k = I[Symbol.toPrimitive];
				if (k !== void 0) {
					var U = k.call(I, L || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(I)
			}
			class d {
				constructor(L, k) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", U => {
						this.resolvers.set(U, {
							name: U,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", U => {
						const Q = this.resolvers.get(U);
						Q && (Q.endTime = Date.now(), this.resolvers.set(U, Q))
					}), n(this, "resolverCancel", U => {
						this.resolverDone(U), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", U => {
						const Q = "NO_ACTION",
							ae = {
								actionType: Q,
								startTime: 0
							};
						return {
							start: (pe = Q) => {
								const ce = this.resolvers.get(U);
								ae.actionType = pe, ae.startTime = Date.now(), ce && ce.userActions.push(ae)
							},
							finish: (pe = Q) => {
								ae.actionType = pe, ae.endTime = Date.now()
							},
							cancel: (pe = Q) => {
								ae.actionType = pe, ae.endTime = Date.now(), this.resolverCancel(U)
							}
						}
					}), this.deepLink = L, this.legacyDeepLink = k, this.resolvers = new Map
				}
				track(L) {
					try {
						if (this._done) return;
						this._done = !0;
						const k = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: c(this.startTime, this.endTime),
								totalCpuTime: c(this.startTime, this.endTime)
							},
							U = this.resolvers.size === 0 ? k : Array.from(this.resolvers.values()).reduce((Q, ae) => {
								const pe = c(ae.startTime, ae.endTime),
									ce = ae.userActions.reduce((F, z) => {
										const B = c(z.startTime, z.endTime);
										return {
											totalTime: F.totalTime + B,
											actions: F.actions.set(z.actionType, B)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									ue = pe - ce.totalTime;
								return g({}, Q, {
									totalTime: Q.totalTime + pe,
									totalUserActionsTime: Q.totalUserActionsTime + ce.totalTime,
									totalCpuTime: Q.totalCpuTime + ue,
									[`${ae.name}ResolverTotalTime`]: pe,
									[`${ae.name}ResolverTotalCpuTime`]: ue,
									[`${ae.name}ResolverTotalUserActionsTime`]: ce.totalTime
								}, Array.from(ce.actions.keys()).reduce((F, z) => g({}, F, {
									[`${ae.name}Resolver/${z}`]: ce.actions.get(z)
								}), {}))
							}, g({}, k, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						m().sendEvent(L, U)
					} catch (k) {
						console.error(k)
					}
				}
			}

			function c(I = Date.now(), L = Date.now()) {
				return (L - I) / 1e3
			}
			var f = t("../react/app/components/DeepLink/constants.ts"),
				b = t("../react/common/hooks/useCachedState.ts"),
				P = t("../react/common/hooks/usePrevious.ts");

			function w(I) {
				for (var L = 1; L < arguments.length; L++) {
					var k = arguments[L] != null ? Object(arguments[L]) : {},
						U = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(k).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(k, Q).enumerable
					})), U.forEach(function(Q) {
						y(I, Q, k[Q])
					})
				}
				return I
			}

			function y(I, L, k) {
				return L = O(L), L in I ? Object.defineProperty(I, L, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[L] = k, I
			}

			function O(I) {
				var L = _(I, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function _(I, L) {
				if (typeof I != "object" || I === null) return I;
				var k = I[Symbol.toPrimitive];
				if (k !== void 0) {
					var U = k.call(I, L || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(I)
			}
			var D = ({
					children: I
				}) => {
					const L = (0, o.TZ)(),
						k = (0, a.useHistory)(),
						U = (0, P.Z)(k.location.pathname),
						[Q, ae] = (0, e.useState)(!0),
						[pe, ce] = (0, b.j)(void 0, {
							key: f.Fj
						}),
						[ue, F] = (0, b.j)(void 0, {
							key: f.O5
						}),
						[z, B] = (0, b.j)(void 0, {
							key: f.s$
						}),
						h = (0, l.$8)();
					let x = new URLSearchParams(k.location.search);
					const G = (0, u.mL)(k.location.pathname, x);
					let q = null,
						ie = null;
					if (x.has(f.Tc) && x.delete(f.Tc), x.get(f.BV)) q = x.get(f.BV), k.location.hash && (ie = k.location.hash);
					else if (pe) {
						const M = new URLSearchParams(pe);
						M.get(f.BV) && (q = M.get(f.BV), x = M)
					} else G && (x.set(f.BV, G), q = G);
					if (q && f._h.test(q)) {
						const M = x.getAll(f.Kt),
							K = JSON.stringify(M);
						M.length && K !== z && B(K), x.has(f.Tc) && x.delete(f.Tc), x.delete(f.Kt)
					}!h && pe === void 0 && q && ce(x.toString());
					const ee = async () => {
						try {
							if ((0, u.I3)(q) && h) {
								pe && ce(void 0), L.dispatch((0, v.r4)()), ae(!0), q && q !== ue && F(q);
								const M = await (0, u.py)(q, ae, L, k, U, new d(q, G ? `${k.location.pathname}${k.location.search}` : void 0));
								x.delete(f.BV);
								const K = x.toString();
								k.replace(w({}, k.location, {
									pathname: M,
									search: K
								}, ie ? {
									hash: ie
								} : {})), L.dispatch((0, v.WF)())
							}
						} catch (M) {
							L.dispatch((0, v.WF)()), console.error(M)
						} finally {
							ae(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ee()
					}, [k.location.pathname, k.location.search]), (Q || (0, u.I3)(q)) && h ? null : I
				},
				S = t("../react/app/components/DeepLink/reducer.ts"),
				N = t("../react/app/components/DeepLink/selectors.ts"),
				A = D
		},
		"../react/app/components/DeepLink/reducer.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				E: function() {
					return u
				},
				r: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				a = t("../react/app/components/DeepLink/actions.ts");
			const u = null,
				l = o().from({
					lastAction: u,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function v(i = l, m) {
				if (m.type === a.MF.RESOLVING_COMPLETE) return l;
				if (m.type === a.MF.RESOLVING_START) return i.set("isResolving", !0);
				if (i.isResolving) {
					if (m.type === a.MF.RESOLVING_COMPLETE) return i.set("isResolving", !1);
					if (m.type === a.MF.SET_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", m.accountIds);
					if (m.type === a.MF.DELETE_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", void 0);
					{
						let g = i;
						try {
							g = i.set("lastAction", m)
						} catch {
							g = i.set("lastAction", {
								type: m.type
							})
						}
						return g
					}
				} else return i
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
			const e = u => u.deepLink.lastAction,
				o = u => u.deepLink.isResolving,
				a = u => u.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				I3: function() {
					return g
				},
				X1: function() {
					return i
				},
				mL: function() {
					return c
				},
				py: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/components/DeepLink/reducer.ts"),
				a = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/app/components/DeepLink/constants.ts"),
				l = t("../react/common/validators/index.js"),
				v = t("../react/common/utils/isGuards.ts");
			const i = f => (0, l.Lb)(f) && (f.split(".").length > 1 || (0, v.v5)(f)),
				m = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				g = f => typeof f == "string" && f.startsWith("/"),
				n = (f, b) => P => new Promise((w, y) => {
					b.start();
					const O = f.subscribe(() => {
						const _ = (0, a.yI)(f.getState());
						_ === o.E ? (b.cancel(), O(), y("DeepLink: waitForAction out of context.")) : P(_) && (b.finish(_.type), O(), w(_))
					})
				}),
				s = (f, b, P) => (w, y) => new Promise((O, _) => {
					P.start();
					const T = b.location.pathname;
					w = new URL(w, window.location.href).pathname, T !== w && (P.cancel(), _(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${w}", but on "${T}". You need to redirect to "${w}", and unblockRouter in your Resolver, before you use this function.`));
					const D = f.subscribe(() => {
						const S = (0, a.yI)(f.getState()),
							N = b.location.pathname,
							I = new URLSearchParams(b.location.search).get(u.BV);
						(N !== w || !!I) && (P.cancel(), D(), _(`DeepLink: waitForPageAction user navigated away from "${w}" to "${N}${I?b.location.search:""}"`)), S === o.E ? (P.cancel(), D(), _("DeepLink: waitForPageAction out of context.")) : y(S) && (P.finish(S.type), D(), O(S))
					})
				});

			function r(f) {
				const b = [],
					P = f.split("?")[0].split("/");
				for (let w of P) w.length !== 0 && (w.startsWith(":") ? b.push({
					value: w.substring(1),
					type: "dynamic"
				}) : b.push({
					value: w,
					type: "static"
				}));
				return b
			}
			async function d(f, b, P, w, y, O) {
				O.start();
				const _ = r(f),
					D = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					S = {};
				let N = "";
				for (const [A, I] of _.entries())
					if (I.type === "static") N = [N, I.value].join("/");
					else if (I.type === "dynamic" && m.is(I.value) && I.value in D) {
					O.resolverStart(I.value);
					const L = await D[I.value]({
						deepLink: f,
						blockRouter: () => b(!0),
						unblockRouter: () => b(!1),
						routerHistory: w,
						resolvedValues: S,
						store: P,
						referringRoute: y,
						uri: {
							currentPartIdx: A,
							parts: _
						},
						waitForAction: n(P, O.createUserActionTracker(I.value)),
						waitForPageAction: s(P, w, O.createUserActionTracker(I.value))
					});
					O.resolverDone(I.value), N = [N, L].join("/"), S[I.value] = L
				} else throw O.cancel(), new Error(`DeepLink: Resolver with name '${I.value}' is not supported.`);
				return O.done(), N
			}

			function c(f, b) {
				const P = ":account",
					w = ":zone",
					y = b.get("zone");
				if (y) return b.delete("zone"), `/${P}/${w}/${y}`;
				const O = b.get("account");
				if (O) return b.delete("account"), `/${P}/${O}`;
				if (f === "/overview") return `/${P}/${w}`;
				const _ = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const T of _) {
					const D = T.length;
					if (f.startsWith(T) && (f.length === D || f[D] === "/")) return `/${P}/${w}${f}`
				}
				switch (f) {
					case "/account/billing":
						return `/${P}/billing`;
					case "/account/subscriptions":
						return `/${P}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${P}/dns-firewall`;
					case "/account/audit-log":
						return `/${P}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return b
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				u = t("../react/app/components/SomethingWrong.jsx"),
				l = t("../utils/sentry/lastSentEventId.ts"),
				v = t("../react/utils/zaraz.ts"),
				i = t("../react/utils/url.ts"),
				m = t("../node_modules/@cloudflare/elements/es/index.js"),
				g = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(s),
				d = t("../react/common/components/Page.tsx"),
				c = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function f() {
				return (0, e.useEffect)(() => {
					r().sendEvent("new page available refresh cta")
				}, []), o().createElement(d.Z, {
					type: "narrow",
					textAlign: "center",
					title: o().createElement(m.ZC, {
						textAlign: "center",
						fontSize: 5,
						fontWeight: 400
					}, o().createElement(n.Trans, {
						id: "error.new_page_version_available.title"
					})),
					description: o().createElement(n.Trans, {
						id: "error.new_page_version_available.description"
					})
				}, o().createElement(m.ZC, null, o().createElement(m.Ei, {
					height: 116,
					src: c,
					"aria-hidden": !0
				})), o().createElement(g.zx, {
					mt: 3,
					type: "primary",
					iconType: "refresh",
					onClick: () => window.location.reload()
				}, o().createElement(n.Trans, {
					id: "common.refresh"
				})))
			}
			const b = ({
				sentryTag: P,
				children: w,
				fallbackComponent: y
			}) => o().createElement(a.SV, {
				beforeCapture: O => {
					v.tg === null || v.tg === void 0 || v.tg.track("page-error", {
						page: (0, i.Fl)(window.location.pathname)
					})
				},
				onError: O => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(O)
				},
				fallback: ({
					error: O,
					eventId: _
				}) => {
					var T;
					if (y) return y;
					const D = l.e.getEventId() || _;
					return (O == null || (T = O.message) === null || T === void 0 ? void 0 : T.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), o().createElement(f, null)) : o().createElement(u.Z, {
						type: "page",
						error: O,
						eventId: D,
						sentryTag: P
					})
				}
			}, w)
		},
		"../react/app/components/Footer.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return B
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				v = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				i = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = t.n(i),
				g = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				s = t("../react/utils/translator.tsx"),
				r = t("../../../../node_modules/moment/moment.js"),
				d = t.n(r);
			const c = () => {
					const h = d()().format("YYYY"),
						x = G => {
							m().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: G
							})
						};
					return o().createElement(f, {
						marginTop: "auto"
					}, o().createElement(b, null, o().createElement(P, null, o().createElement(w, null, "\xA9 ", h, " Cloudflare, Inc."), o().createElement(w, null, o().createElement(y, null, o().createElement(O, {
						showOnDeskTop: !1
					}, o().createElement(_, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => x("Support")
					}, o().createElement(s.cC, {
						id: "common.support"
					}))), o().createElement(O, null, o().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => x("Privacy Policy")
					}, o().createElement(s.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(O, null, o().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => x("Terms of Use")
					}, o().createElement(s.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(O, null, o().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => x("Cookie Preferences")
					}, o().createElement(s.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(O, null, o().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => x("Trademark")
					}, o().createElement(s.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(y, null, o().createElement(O, null, o().createElement(_, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => x("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(s.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				f = (0, l.createComponent)(({
					theme: h,
					marginTop: x
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: x
				})),
				b = (0, l.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				P = (0, l.createComponent)(({
					theme: h
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${h.space[3]}px`
					}
				})),
				w = (0, l.createComponent)(({
					theme: h
				}) => ({
					width: "100%",
					color: h.colors.white,
					fontSize: h.fontSizes[1],
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
				y = (0, l.createComponent)(({
					theme: h
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: h.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				O = (0, l.createComponent)(({
					showOnDeskTop: h = !0,
					theme: x
				}) => ({
					color: x.colors.white,
					fontSize: x.fontSizes[1],
					height: "20px",
					display: h ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: x.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: x.space[3],
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
				_ = (0, l.createStyledComponent)(({
					theme: h
				}) => ({
					textDecoration: "none",
					color: h.colors.white,
					"&:hover": {
						color: h.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var T = c,
				D = t("../react/pages/welcome/routes.ts"),
				S = t("../react/utils/cookiePreferences.ts"),
				N = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				I = () => {
					const [h, x] = (0, e.useState)(!1), G = (0, S.wV)(), q = () => {
						x(!0)
					}, ie = () => {
						x(!1)
					}, ee = G && G === "US" ? (0, s.ZP)("footer.cpra_cta.privacy_choices") : (0, s.ZP)("footer.cpra_cta.cookie_preferences"), M = {
						background: "transparent",
						borderRadius: "none",
						color: h ? (0, v.Yc)() ? "#ee730a" : "#003681" : (0, v.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: h ? "underline" : "none",
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
						style: M,
						onMouseEnter: q,
						onMouseLeave: ie
					}, o().createElement(u.Ei, {
						height: 15,
						src: N,
						mr: 2,
						alt: ee
					}), ee)
				};

			function L() {
				return L = Object.assign ? Object.assign.bind() : function(h) {
					for (var x = 1; x < arguments.length; x++) {
						var G = arguments[x];
						for (var q in G) Object.prototype.hasOwnProperty.call(G, q) && (h[q] = G[q])
					}
					return h
				}, L.apply(this, arguments)
			}

			function k(h, x) {
				if (h == null) return {};
				var G = U(h, x),
					q, ie;
				if (Object.getOwnPropertySymbols) {
					var ee = Object.getOwnPropertySymbols(h);
					for (ie = 0; ie < ee.length; ie++) q = ee[ie], !(x.indexOf(q) >= 0) && (!Object.prototype.propertyIsEnumerable.call(h, q) || (G[q] = h[q]))
				}
				return G
			}

			function U(h, x) {
				if (h == null) return {};
				var G = {},
					q = Object.keys(h),
					ie, ee;
				for (ee = 0; ee < q.length; ee++) ie = q[ee], !(x.indexOf(ie) >= 0) && (G[ie] = h[ie]);
				return G
			}
			const Q = (0, l.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,v.Yc)()?v.rS.colors.orange[6]:v.rS.colors.blue[4]}`
					}
				}), u.A),
				ae = (0, l.createStyledComponent)(({
					theme: h
				}) => ({
					color: h.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, g.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: h.colors.gray[4]
					}
				}), u.A),
				pe = h => {
					let {
						onClick: x
					} = h, G = k(h, ["onClick"]);
					return React.createElement(Q, L({
						onClick: q => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: G.href
							}), x && x(q)
						}
					}, G))
				},
				ce = h => {
					let {
						children: x,
						target: G,
						rel: q
					} = h, ie = k(h, ["children", "target", "rel"]);
					return o().createElement(ae, L({
						target: G || "_blank",
						rel: q || "noopener noreferrer"
					}, ie), x)
				},
				ue = (0, l.createStyledComponent)(({
					theme: h
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, g.tq)() ? "8px" : "16px",
					"& > li": {
						listStyleType: "none",
						"& > a": {
							fontSize: h.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: h.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), u.Ul),
				F = (0, l.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, g.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), u.ZC);
			var B = () => {
				const h = [D.d.root.pattern].some(G => (0, a.matchPath)(location.pathname, {
					path: G
				}));
				if ((0, n.PP)()) return o().createElement(T, null);
				if (h) return null;
				const x = new Date().getFullYear();
				return o().createElement(u.$_, {
					height: (0, g.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto",
					id: "site-footer"
				}, o().createElement(F, null, o().createElement(ue, null, o().createElement(u.Li, null, o().createElement(ce, {
					href: "https://support.cloudflare.com"
				}, (0, s.ZP)("common.support"))), o().createElement(u.Li, null, o().createElement(ce, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(u.Dr, {
					textTransform: "capitalize"
				}, (0, s.ZP)("footer.system_status")))), o().createElement(u.Li, null, o().createElement(ce, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, s.ZP)("footer.careers"))), o().createElement(u.Li, null, o().createElement(ce, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, s.ZP)("footer.tos_reduced"))), o().createElement(u.Li, null, o().createElement(ce, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, s.ZP)("footer.security_issues"))), o().createElement(u.Li, null, o().createElement(ce, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, s.ZP)("footer.privacy_policy"))), o().createElement(u.Li, null, o().createElement(I, null)), o().createElement(u.Li, null, o().createElement(u.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", x, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(W, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/components/ErrorStatus.tsx"),
				u = t("../react/utils/translator.tsx");
			const l = v => o().createElement(a.Z, v, (0, u.ZP)("error.forbidden"));
			E.Z = l
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return b
				},
				Z: function() {
					return ee
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../node_modules/@cloudflare/component-button/es/index.js"),
				v = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = t.n(m),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				s = t("../react/common/components/AccessControl/index.js"),
				r = t("../react/common/components/ButtonWithDropdown.tsx"),
				d = t("../react/common/components/Dropdown/index.tsx"),
				c = t("../react/utils/translator.tsx"),
				f = t("../react/common/hooks/useGate.ts");
			const b = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				P = () => {
					const M = (0, f.Z)("super-add-button-copy-change"),
						K = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: b.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/registrar/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: b.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: b.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: b.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: b.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: b.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}];
					switch (M) {
						case "existing-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
								},
								trackingEvent: b.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...K];
						case "existing-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site_app"
								},
								trackingEvent: b.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...K];
						case "existing-site":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site"
								},
								trackingEvent: b.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...K];
						case "your-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_website_app"
								},
								trackingEvent: b.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...K];
						case "your-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_site_app"
								},
								trackingEvent: b.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...K];
						default:
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title"
								},
								trackingEvent: b.EXISTING_DOMAIN,
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
								trackingEvent: b.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/registrar/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: b.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: b.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: b.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: b.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: b.ACCOUNT_MEMBERS,
								icon: "user-outline",
								url: "?to=/:account/members/invite",
								description: {
									id: "onboarding.add_product.account_member.description"
								},
								permissionCheck: "#member:edit"
							}]
					}
				},
				w = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: b.EXISTING_DOMAIN,
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
					trackingEvent: b.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/registrar/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: b.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: b.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: b.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: b.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: b.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var y = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function O(M) {
				for (var K = 1; K < arguments.length; K++) {
					var V = arguments[K] != null ? Object(arguments[K]) : {},
						$ = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(V).filter(function(te) {
						return Object.getOwnPropertyDescriptor(V, te).enumerable
					})), $.forEach(function(te) {
						_(M, te, V[te])
					})
				}
				return M
			}

			function _(M, K, V) {
				return K = T(K), K in M ? Object.defineProperty(M, K, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[K] = V, M
			}

			function T(M) {
				var K = D(M, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function D(M, K) {
				if (typeof M != "object" || M === null) return M;
				var V = M[Symbol.toPrimitive];
				if (V !== void 0) {
					var $ = V.call(M, K || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(M)
			}

			function S() {
				return S = Object.assign ? Object.assign.bind() : function(M) {
					for (var K = 1; K < arguments.length; K++) {
						var V = arguments[K];
						for (var $ in V) Object.prototype.hasOwnProperty.call(V, $) && (M[$] = V[$])
					}
					return M
				}, S.apply(this, arguments)
			}

			function N(M, K) {
				if (M == null) return {};
				var V = A(M, K),
					$, te;
				if (Object.getOwnPropertySymbols) {
					var me = Object.getOwnPropertySymbols(M);
					for (te = 0; te < me.length; te++) $ = me[te], !(K.indexOf($) >= 0) && (!Object.prototype.propertyIsEnumerable.call(M, $) || (V[$] = M[$]))
				}
				return V
			}

			function A(M, K) {
				if (M == null) return {};
				var V = {},
					$ = Object.keys(M),
					te, me;
				for (me = 0; me < $.length; me++) te = $[me], !(K.indexOf(te) >= 0) && (V[te] = M[te]);
				return V
			}
			const I = M => {
					let {
						title: K,
						trackingEvent: V,
						icon: $,
						url: te,
						description: me,
						disabled: le
					} = M, ge = N(M, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(L, S({
						to: !le && te || "#",
						"aria-disabled": le,
						onClick: () => {
							g().sendEvent(V, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, ge), o().createElement(u.ZC, {
						display: "flex"
					}, o().createElement(a.J, {
						type: $,
						size: 24,
						mr: 2,
						mt: 1
					}), o().createElement(u.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, o().createElement(u.ZC, {
						fontSize: 3
					}, o().createElement(c.cC, K)), o().createElement(u.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(c.cC, me)))))
				},
				L = (0, n.createStyledComponent)(({
					theme: M
				}) => {
					const K = {
						cursor: "pointer",
						backgroundColor: (0, v.Yc)() ? M.colors.gray[8] : M.colors.gray[9],
						color: M.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: M.colors.background,
						color: M.colors.gray[2],
						fontSize: M.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': K,
						':focus-within:not([aria-disabled="true"])': O({}, K, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: M.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, y.Link);
			var k = I;

			function U() {
				return U = Object.assign ? Object.assign.bind() : function(M) {
					for (var K = 1; K < arguments.length; K++) {
						var V = arguments[K];
						for (var $ in V) Object.prototype.hasOwnProperty.call(V, $) && (M[$] = V[$])
					}
					return M
				}, U.apply(this, arguments)
			}

			function Q(M) {
				for (var K = 1; K < arguments.length; K++) {
					var V = arguments[K] != null ? Object(arguments[K]) : {},
						$ = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(V).filter(function(te) {
						return Object.getOwnPropertyDescriptor(V, te).enumerable
					})), $.forEach(function(te) {
						ae(M, te, V[te])
					})
				}
				return M
			}

			function ae(M, K, V) {
				return K = pe(K), K in M ? Object.defineProperty(M, K, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[K] = V, M
			}

			function pe(M) {
				var K = ce(M, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function ce(M, K) {
				if (typeof M != "object" || M === null) return M;
				var V = M[Symbol.toPrimitive];
				if (V !== void 0) {
					var $ = V.call(M, K || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(M)
			}

			function ue(M, K) {
				if (M == null) return {};
				var V = F(M, K),
					$, te;
				if (Object.getOwnPropertySymbols) {
					var me = Object.getOwnPropertySymbols(M);
					for (te = 0; te < me.length; te++) $ = me[te], !(K.indexOf($) >= 0) && (!Object.prototype.propertyIsEnumerable.call(M, $) || (V[$] = M[$]))
				}
				return V
			}

			function F(M, K) {
				if (M == null) return {};
				var V = {},
					$ = Object.keys(M),
					te, me;
				for (me = 0; me < $.length; me++) te = $[me], !(K.indexOf(te) >= 0) && (V[te] = M[te]);
				return V
			}
			const z = "GLOBAL_ADD_DROPDOWN",
				B = (0, n.createStyledComponent)(({
					theme: M
				}) => ({
					"background-color": M.colors.blue[5]
				}), l.zx),
				h = ({
					disableProducts: M
				}) => {
					const K = P();
					return (0, e.useEffect)(() => (g().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						g().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), []), o().createElement(r.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0",
						bottom: "auto",
						zIndex: 1200,
						minWidth: 240
					}, K.map(V => {
						const $ = V || {},
							{
								disableOn: te,
								permissionCheck: me
							} = $,
							le = ue($, ["disableOn", "permissionCheck"]),
							ge = te && M[te],
							ye = Q({}, le, {
								disabled: ge
							});
						return me ? o().createElement(s.Z, {
							key: V.title.id,
							edit: me
						}, ({
							isEditable: Ae
						}) => Ae && o().createElement(k, ye)) : o().createElement(k, U({
							key: V.url
						}, ye))
					}))
				},
				x = ({
					disableProducts: M,
					topNavType: K
				}) => {
					const V = () => (0, i.tq)() || K === "icon-only" ? o().createElement(u.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, o().createElement(B, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : K === "text-icon" || K === "icon-only-with-add-button" ? o().createElement(l.zx, {
						type: "primary",
						mr: K === "text-icon" ? 2 : 3
					}, o().createElement(o().Fragment, null, o().createElement(a.J, {
						label: "plus",
						type: "plus"
					}), " ", o().createElement(c.cC, {
						id: "common.add"
					}))) : o().createElement(l.zx, {
						type: "primary",
						mr: 2
					}, o().createElement(c.cC, {
						id: "common.add"
					}), " ", o().createElement(a.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return o().createElement(G, {
						role: "group",
						"data-testid": z
					}, o().createElement(d.Lt, {
						trigger: K === "baseline" ? o().createElement(q, null, o().createElement(a.J, {
							label: "plus",
							type: "plus"
						}), !(0, i.tq)() && o().createElement(o().Fragment, null, o().createElement(c.cC, {
							id: "common.add"
						}), " ", o().createElement(a.J, {
							label: "arrow",
							type: "caret-down"
						}))) : V(),
						menu: o().createElement(h, {
							disableProducts: M
						})
					}))
				},
				G = (0, n.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				q = (0, n.createStyledComponent)(({
					theme: M
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: M.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, v.Yc)() ? M.colors.gray[1] : M.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, v.Yc)() ? M.colors.gray[8] : M.colors.gray[9]
					}
				}), u.zx);
			var ie = x,
				ee = ie
		},
		"../react/app/components/LoadingSuspense.tsx": function(W, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../react/utils/translator.tsx"),
				v = t("../react/app/components/ErrorStatus.tsx"),
				i = t("../react/common/components/EmptyPage.jsx"),
				m = t("../react/common/hooks/suspenseHelpers.ts");

			function g(r) {
				const [d, c] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const f = window.setTimeout(() => c(!0), r);
					return () => window.clearTimeout(f)
				}, []), d
			}
			const n = ({
					loadingTimeout: r = 1e3,
					stillLoadingTimeout: d = 9e3
				}) => {
					const c = g(r),
						f = g(d);
					if ((0, m.nW)(), !c && !f) return o().createElement(i.Z, null);
					const b = f ? o().createElement(l.cC, {
						id: "common.still_loading"
					}) : c ? o().createElement(l.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(v.Z, {
						size: 5
					}, o().createElement(u.ZC, {
						mr: 3
					}, o().createElement(a.g, {
						size: "2x"
					})), b)
				},
				s = ({
					children: r
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(n, null)
				}, r);
			E.Z = s
		},
		"../react/app/components/Persistence/api.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				C8: function() {
					return m
				},
				Mn: function() {
					return r
				},
				Sp: function() {
					return s
				},
				dr: function() {
					return l
				},
				lt: function() {
					return v
				},
				m6: function() {
					return n
				},
				n: function() {
					return g
				},
				yl: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const a = "/persistence/user",
				u = async () => {
					try {
						return await (await e.get(a, {
							hideErrorAlert: !0
						})).body
					} catch (d) {
						console.error(d)
					}
				}, l = async d => {
					try {
						return await (await e.get(`/accounts/${d}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (c) {
						console.error(c)
					}
				}, v = async (d, c) => {
					try {
						return await (await e.post(`${a}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: d,
								accountId: c
							}),
							hideErrorAlert: !0
						})).body
					} catch (f) {
						return console.error(f), []
					}
				}, i = async (d, c) => {
					try {
						return await http.post(`/accounts/${d}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: c
							}),
							hideErrorAlert: !0
						}), !0
					} catch (f) {
						return console.error(f), !1
					}
				}, m = async d => {
					try {
						return await (await e.post(a, {
							body: JSON.stringify({
								darkMode: d
							})
						})).body
					} catch (c) {
						console.error(c)
					}
				}, g = async d => {
					try {
						return await (await e.post(`${a}/recents`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (c) {
						console.error(c)
					}
				}, n = async d => {
					try {
						return await (await e.post(`${a}/viewed-changes`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (c) {
						throw console.error(c), c
					}
				}, s = async d => {
					try {
						return await (await e.post(a + "/flags", {
							body: JSON.stringify(d)
						})).body
					} catch (c) {
						throw console.error(c), c
					}
				}, r = async (d, c) => {
					try {
						return await (await e.post(`${a}/dismissed-tasks`, {
							body: JSON.stringify({
								name: d,
								accountId: c
							}),
							hideErrorAlert: !0
						})).body
					} catch (f) {
						throw console.error(f), f
					}
				}
		},
		"../react/app/components/Persistence/hooks.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				y: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/components/Persistence/index.tsx");
			const u = () => (0, e.useContext)(a.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				Wl: function() {
					return g
				},
				lp: function() {
					return P
				},
				Z_: function() {
					return y
				},
				r7: function() {
					return L
				},
				Tv: function() {
					return F
				},
				yZ: function() {
					return O.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(u),
				v = t("../react/utils/bootstrap.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/app/components/Persistence/api.ts");
			const g = 10;
			var n = t("../react/common/hooks/useActiveState.ts");

			function s(z) {
				for (var B = 1; B < arguments.length; B++) {
					var h = arguments[B] != null ? Object(arguments[B]) : {},
						x = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(h).filter(function(G) {
						return Object.getOwnPropertyDescriptor(h, G).enumerable
					})), x.forEach(function(G) {
						r(z, G, h[G])
					})
				}
				return z
			}

			function r(z, B, h) {
				return B = d(B), B in z ? Object.defineProperty(z, B, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[B] = h, z
			}

			function d(z) {
				var B = c(z, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function c(z, B) {
				if (typeof z != "object" || z === null) return z;
				var h = z[Symbol.toPrimitive];
				if (h !== void 0) {
					var x = h.call(z, B || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(z)
			}
			const f = {
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
				b = s({}, f, {
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
				P = (0, e.createContext)(b),
				w = P.Consumer,
				y = ({
					children: z,
					onDarkModeChangeCb: B
				}) => {
					const [h, x] = (0, e.useState)(f), [G, q] = (0, e.useState)(b.isLoading), [ie, ee] = (0, e.useState)(!1), M = (0, v.$8)(), K = (0, a.p4)(le => (0, i.wH)(le)), [, V] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						M ? (0, m.yl)().then(le => {
							if (le) {
								var ge;
								x(le), V(le == null || (ge = le.flags) === null || ge === void 0 ? void 0 : ge.hasEnabledSecurityNavigation), l().identify({
									hasEnabledSecurityNavigation: le.flags.hasEnabledSecurityNavigation
								}), B(le.darkMode)
							}
						}).finally(() => q(!1)) : q(!1)
					}, [M]);
					const $ = (le, ge) => !!h.favorites.find(ye => ye.type === "zone" && ye.name === le && ye.accountId === ge),
						te = g - h.favorites.length,
						me = le => h.favorites.filter(ye => ye.type === "zone" && ye.accountId === le).length < g;
					return o().createElement(P.Provider, {
						value: s({}, h, {
							isLoading: G,
							remainingStarSlots: te,
							isUpdatingFlags: ie,
							actions: {
								canAccountStarZone: me,
								isZoneStarred: $,
								starZone: async (le, ge) => {
									var ye;
									const Ae = !$(le, ge),
										Be = me(ge);
									if (Ae && !Be) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Ce = await (0, m.lt)(le, ge);
									l().sendEvent("click star zone", {
										isStarring: Ae,
										totalStarredZones: Ce.filter(Se => Se.accountId === ge && Se.type === "zone").length,
										totalZones: K == null || (ye = K.paginationData) === null || ye === void 0 ? void 0 : ye.info.total_count
									}), x(s({}, h, {
										favorites: Ce
									}))
								},
								toggleSecurityNavigation: async le => {
									ee(!0), await (0, m.Sp)({
										hasEnabledSecurityNavigation: le
									}), l().identify({
										hasEnabledSecurityNavigation: le
									}), ee(!1), V(le), x(s({}, h, {
										flags: {
											hasEnabledSecurityNavigation: le
										}
									}))
								},
								setDarkMode: async le => {
									const ge = await (0, m.C8)(le);
									x(ge), B(ge.darkMode)
								},
								logRouteVisited: async le => {
									var ge;
									const ye = await (0, m.n)(le);
									x((ge = ye) !== null && ge !== void 0 ? ge : s({}, h))
								},
								viewChange: async le => {
									const ge = await (0, m.m6)(le);
									x(s({}, h, {
										viewedChanges: ge
									}))
								},
								dismissTask: async (le, ge) => {
									const ye = await (0, m.Mn)(le, ge);
									x(s({}, h, {
										dismissedTasks: ye
									}))
								}
							}
						})
					}, z)
				};
			var O = t("../react/app/components/Persistence/hooks.ts"),
				_ = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				T = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function D() {
				return D = Object.assign ? Object.assign.bind() : function(z) {
					for (var B = 1; B < arguments.length; B++) {
						var h = arguments[B];
						for (var x in h) Object.prototype.hasOwnProperty.call(h, x) && (z[x] = h[x])
					}
					return z
				}, D.apply(this, arguments)
			}

			function S(z, B) {
				if (z == null) return {};
				var h = N(z, B),
					x, G;
				if (Object.getOwnPropertySymbols) {
					var q = Object.getOwnPropertySymbols(z);
					for (G = 0; G < q.length; G++) x = q[G], !(B.indexOf(x) >= 0) && (!Object.prototype.propertyIsEnumerable.call(z, x) || (h[x] = z[x]))
				}
				return h
			}

			function N(z, B) {
				if (z == null) return {};
				var h = {},
					x = Object.keys(z),
					G, q;
				for (q = 0; q < x.length; q++) G = x[q], !(B.indexOf(G) >= 0) && (h[G] = z[G]);
				return h
			}
			const A = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var L = z => {
					let {
						isStarred: B,
						size: h = 16
					} = z, x = S(z, ["isStarred", "size"]);
					const G = A[(0, _.Yc)() ? "dark" : "light"];
					return o().createElement(T.J, D({
						type: B ? "star" : "star-outline",
						color: B ? G.gold : G.gray,
						size: h
					}, x))
				},
				k = t("../node_modules/@cloudflare/elements/es/index.js");

			function U(z) {
				for (var B = 1; B < arguments.length; B++) {
					var h = arguments[B] != null ? Object(arguments[B]) : {},
						x = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(h).filter(function(G) {
						return Object.getOwnPropertyDescriptor(h, G).enumerable
					})), x.forEach(function(G) {
						Q(z, G, h[G])
					})
				}
				return z
			}

			function Q(z, B, h) {
				return B = ae(B), B in z ? Object.defineProperty(z, B, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[B] = h, z
			}

			function ae(z) {
				var B = pe(z, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function pe(z, B) {
				if (typeof z != "object" || z === null) return z;
				var h = z[Symbol.toPrimitive];
				if (h !== void 0) {
					var x = h.call(z, B || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(z)
			}
			const ce = {
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
			var F = (0, e.forwardRef)(({
				featurePreview: z = !1,
				isStarred: B,
				onClickFn: h,
				isDisabled: x,
				testId: G,
				buttonText: q,
				size: ie = "large",
				variant: ee = "pill"
			}, M) => {
				const [K, V] = (0, e.useState)(!1), $ = ce[(0, _.Yc)() ? "dark" : "light"][B && !z ? "active" : "default"], te = U({}, ie === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, ie === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, ie === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), me = {
					pill: "50vh",
					button: 4
				};
				return o().createElement(k.zx, {
					onMouseEnter: () => V(!0),
					onMouseLeave: () => V(!1),
					innerRef: M,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: te.paddingRight,
					gap: 1,
					pl: te.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: me[ee],
					border: "1px solid",
					cursor: z || x ? "default" : "pointer",
					backgroundColor: K ? $.bgHover : $.bg,
					color: $.text,
					borderColor: $.border,
					onClick: h,
					opacity: x ? .5 : 1,
					disabled: x,
					fontSize: te.fontSize,
					height: te.height,
					"data-testid": G
				}, o().createElement(L, {
					isStarred: z ? !1 : B,
					size: te.starIconSize
				}), q)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$n: function() {
					return d
				},
				IU: function() {
					return f
				},
				Wq: function() {
					return D
				},
				dL: function() {
					return b
				},
				fO: function() {
					return T
				},
				gw: function() {
					return N
				},
				hv: function() {
					return c
				},
				iY: function() {
					return s
				},
				jq: function() {
					return A
				},
				o_: function() {
					return y
				},
				us: function() {
					return _
				},
				wB: function() {
					return r
				},
				zJ: function() {
					return O
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/utils/zoneLevelAccess.ts"),
				v = t("../react/pages/stream/selectors.ts"),
				i = t("../react/pages/home/domain-registration/selectors.ts"),
				m = t("../react/pages/images/selectors.ts"),
				g = t("../react/pages/r2/selectors.ts");
			const n = I => !!(0, l.b)(I),
				s = I => n(I) ? (0, e.hT)(I) : !0,
				r = (I, L, k, U = "read") => {
					const Q = (0, a.nA)(I);
					return n(I) ? (0, e.WL)(I, (0, e.W9)(k, e.ZZ[U]), (0, e.j)(Q == null ? void 0 : Q.id)) : (0, u.Yj)(I)(L)[U]
				},
				d = (I, L, k, U = "read") => {
					const Q = (0, a.nA)(I),
						ae = e.zs.includes(k);
					return n(I) ? (0, e.WL)(I, ae ? k : (0, e.my)(k, e.ZZ[U === "edit" ? "update" : U]), (0, e.j)(Q == null ? void 0 : Q.id)) : (0, u.Yj)(I)(L)[U === "update" ? "edit" : U]
				},
				c = I => !!(0, v._Q)(I),
				f = I => (0, m.pT)(I),
				b = I => (0, m.pT)(I) && (0, m.GH)(I),
				P = I => sourcingKitEnabledSelector(I),
				w = I => !!r2EnabledSelector(I),
				y = I => (0, g.Mv)(I),
				O = I => (0, o.$f)(I, "rulesets.magic_transit_allowed"),
				_ = I => (0, o.$f)(I, "flowtrackd.magic_custom_config_allowed"),
				T = I => (0, o.$f)(I, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				D = I => (0, u.Le)(I, "ddos_protection", "l4_rulesets"),
				S = I => hasAccountEntitlements(I, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				N = I => (0, i.HO)(I),
				A = I => !(0, o.yD)(I) && !!d(I, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function(W, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(a),
				l = t("../../../../node_modules/prop-types/index.js"),
				v = t.n(l),
				i = t("webpack/sharing/consume/default/react-redux/react-redux"),
				m = t.n(i),
				g = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(g),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				r = t("../node_modules/@cloudflare/component-button/es/index.js"),
				d = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				c = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				f = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				b = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				P = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				w = t.n(P),
				y = t("../react/common/actions/membershipActions.ts"),
				O = t("../react/utils/url.ts"),
				_ = t("../react/app/components/Footer.tsx");

			function T(ue) {
				for (var F = 1; F < arguments.length; F++) {
					var z = arguments[F] != null ? Object(arguments[F]) : {},
						B = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(z).filter(function(h) {
						return Object.getOwnPropertyDescriptor(z, h).enumerable
					})), B.forEach(function(h) {
						D(ue, h, z[h])
					})
				}
				return ue
			}

			function D(ue, F, z) {
				return F = S(F), F in ue ? Object.defineProperty(ue, F, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ue[F] = z, ue
			}

			function S(ue) {
				var F = N(ue, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function N(ue, F) {
				if (typeof ue != "object" || ue === null) return ue;
				var z = ue[Symbol.toPrimitive];
				if (z !== void 0) {
					var B = z.call(ue, F || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(ue)
			}
			const A = (0, s.createComponent)(({
					type: ue
				}) => ({
					height: ue !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				I = (0, s.createComponent)(({
					theme: ue,
					margin: F,
					size: z = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: ue.colors.gray[3],
					height: F ? "auto" : "100%",
					padding: F ? 0 : ue.space[z > 1 ? z - 2 : 0],
					margin: F,
					justifyContent: "center",
					alignItems: "center"
				})),
				L = (0, s.createComponent)(() => ({
					textAlign: "left"
				})),
				k = (0, s.createComponent)(() => ({
					textAlign: "right"
				})),
				U = (0, s.createComponent)(({
					theme: ue
				}) => ({
					fontSize: ue.fontSizes[6]
				})),
				Q = (0, s.createComponent)(({
					theme: ue
				}) => ({
					fontSize: ue.fontSizes[4]
				})),
				ae = (0, s.createComponent)(({
					theme: ue
				}) => ({
					fontSize: ue.fontSizes[3]
				})),
				pe = (0, s.createComponent)(({
					theme: ue
				}) => ({
					width: "100%",
					height: 125,
					marginTop: ue.space[4],
					padding: ue.space[2]
				}), "textarea");
			class ce extends o().Component {
				constructor(...F) {
					super(...F);
					D(this, "state", {
						value: "",
						submitted: !1
					}), D(this, "handleTextareaChange", z => {
						this.setState({
							value: z.target.value
						})
					}), D(this, "sendErrToSentry10", async () => {
						try {
							var z, B, h, x;
							const G = ((z = window) === null || z === void 0 || (B = z.bootstrap) === null || B === void 0 || (h = B.data) === null || h === void 0 || (x = h.user) === null || x === void 0 ? void 0 : x.id) || "Unknown",
								q = this.props.eventId || d.eW(),
								ie = {
									name: G,
									email: `${G}@userid.com`,
									comments: this.state.value,
									eventId: q,
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
								body: JSON.stringify(ie)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (G) {
							console.error(G)
						}
					}), D(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), D(this, "renderContent", z => o().createElement(g.I18n, null, B => o().createElement(A, {
						type: z
					}, o().createElement(I, null, o().createElement(L, null, o().createElement(U, null, B.t("error.internal_issues")), o().createElement(Q, null, B.t("error.help_us")), o().createElement(pe, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: h => this.handleTextareaChange(h),
						disabled: this.state.submitted,
						placeholder: B.t("error.give_feedback")
					}), o().createElement(k, null, !this.state.submitted && o().createElement(r.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, B.t("common.submit")), this.state.submitted && o().createElement(ae, null, B.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: F,
						sentryTag: z,
						membershipsList: B
					} = this.props;
					console.error(`SomethingWrong: ${F}`);
					let h = "";
					const x = (0, O.e1)();
					if (x) {
						var G;
						const ie = await B({
								parameters: {
									status: "accepted"
								}
							}),
							ee = ie == null || (G = ie.find(M => M.id === x)) === null || G === void 0 ? void 0 : G.roles;
						ee && ee.length && (h = ee.join(", "))
					}
					const q = `ErrorBoundary - ${F}`;
					c.Tb(q, {
						tags: {
							errorBoundary: z,
							normalizedPath: (0, O.Fl)(window.location.pathname),
							roles: h.length ? h : void 0
						}
					}), w().sendEvent("something wrong", {
						error: F,
						roles: h.length ? h : void 0
					})
				}
				render() {
					const {
						type: F
					} = this.props;
					return F === "fullscreen" ? o().createElement("div", null, o().createElement(f.h4, null, o().createElement(a.Link, {
						to: "/"
					}, o().createElement(b.TR, null))), this.renderContent(F), o().createElement(_.Z, null)) : this.renderContent(F)
				}
			}
			ce.propTypes = {
				type: v().oneOf(["fullscreen", "page"]),
				error: v().oneOfType([v().string, v().object]),
				eventId: v().string,
				sentryTag: v().string,
				membershipsList: v().func
			}, E.Z = (0, i.connect)(() => ({}), {
				membershipsList: y.YT
			})(ce)
		},
		"../react/app/providers/storeContainer.js": function(W, E, t) {
			"use strict";
			t.d(E, {
				bh: function() {
					return k
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				o = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				a = t.n(o),
				u = t("../../../../node_modules/redux-thunk/es/index.js"),
				l = t("../../../../node_modules/redux-persist/es/index.js"),
				v = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				i = t("../react/app/rootReducer.js"),
				m = t("../react/app/redux/normalizer.js"),
				g = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				s = t("../react/app/reducerRegistry.js"),
				r = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				d = t("../react/common/sagas/index.js"),
				c = t("../react/app/redux/processActionMiddleware.js"),
				f = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				b = t("../../../../node_modules/is-promise/index.js"),
				P = t.n(b);

			function w(U) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var ae = arguments[Q] != null ? Object(arguments[Q]) : {},
						pe = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(ae).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(ae, ce).enumerable
					})), pe.forEach(function(ce) {
						y(U, ce, ae[ce])
					})
				}
				return U
			}

			function y(U, Q, ae) {
				return Q = O(Q), Q in U ? Object.defineProperty(U, Q, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[Q] = ae, U
			}

			function O(U) {
				var Q = _(U, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function _(U, Q) {
				if (typeof U != "object" || U === null) return U;
				var ae = U[Symbol.toPrimitive];
				if (ae !== void 0) {
					var pe = ae.call(U, Q || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(U)
			}
			const T = {
					key: "cf-redux-store",
					storage: v.Z,
					whitelist: ["accountAccess", "invite"]
				},
				D = (0, r.ZP)(),
				N = [({
					dispatch: U
				}) => Q => ae => P()(ae) ? ae.then(pe => U(pe)) : Q(ae), D, u.Z, c.Z, m.qR],
				A = U => (0, l.Wq)(T, w({}, i.Z, U));

			function I() {
				const U = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					ae = e.compose((0, e.applyMiddleware)(...N), g.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					pe = {},
					ce = (0, e.createStore)(A(s.Z.getReducers()), pe, ae);
				D.run(d.Z), (0, l.p5)(ce);
				const F = (t.g.bootstrap || {}).data || {};
				return ce.dispatch((0, f.mW)("user", F.user)), ce
			}
			let L;
			s.Z.setChangeListener(U => {
				var Q;
				L && ((Q = L) === null || Q === void 0 ? void 0 : Q.replaceReducer) && (L.replaceReducer(A(U)), (0, l.p5)(L))
			});

			function k() {
				return L || (L = I()), L
			}
		},
		"../react/app/redux/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				TZ: function() {
					return a
				},
				UM: function() {
					return l
				},
				ZS: function() {
					return u
				},
				p4: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e);
			const a = () => (0, e.useStore)(),
				u = () => a().getState(),
				l = () => (0, e.useDispatch)(),
				v = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(W, E, t) {
			"use strict";
			t.d(E, {
				$J: function() {
					return r
				},
				Oy: function() {
					return s
				},
				SC: function() {
					return g
				},
				ZP: function() {
					return d
				},
				dJ: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				a = t.n(o);

			function u(c) {
				for (var f = 1; f < arguments.length; f++) {
					var b = arguments[f] != null ? Object(arguments[f]) : {},
						P = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(b).filter(function(w) {
						return Object.getOwnPropertyDescriptor(b, w).enumerable
					})), P.forEach(function(w) {
						l(c, w, b[w])
					})
				}
				return c
			}

			function l(c, f, b) {
				return f = v(f), f in c ? Object.defineProperty(c, f, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[f] = b, c
			}

			function v(c) {
				var f = i(c, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function i(c, f) {
				if (typeof c != "object" || c === null) return c;
				var b = c[Symbol.toPrimitive];
				if (b !== void 0) {
					var P = b.call(c, f || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(c)
			}
			const m = u({}, o),
				g = (c, f, b, P = {}) => {
					const w = c === "delete" ? "del" : c.toLowerCase();
					return b && w !== "del" && (P.body = b), m[w](f, P)
				},
				n = (c, f) => (c.meta.params = f, c),
				s = (c, f, b, P, {
					body: w = {}
				}) => {
					const {
						result: y,
						messages: O,
						result_info: _
					} = w, T = Object.values(f);
					if (c.meta.method === "delete") {
						const D = T[T.length - 1];
						c.meta.id = typeof D == "object" ? D.id : D
					}
					return c.payload = y, O && (c.meta.messages = O), T.length && (c.meta.params = f), _ && (c.meta.paginationData = {
						info: _,
						actionParameters: T,
						options: b[0],
						insertionOffset: 0
					}), c
				},
				r = (c, f, b, P, w) => (c.payload = w && w.body && w.body.errors, c.meta.messages = w && w.body && w.body.messages, c.meta.params = f, c.apiError = w, c);

			function d(c, f, b, P) {
				const w = (0, e.RM)(c, f, b, P).apiFetch(g).on("start", n).on("success", s).on("error", r),
					y = w.mock;
				return w.mock = O => (y((..._) => {
					const T = O(..._);
					return T && typeof T == "object" && "result" in T ? T : {
						result: T
					}
				}), w), w
			}
		},
		"../react/app/redux/normalizer.js": function(W, E, t) {
			"use strict";
			t.d(E, {
				P1: function() {
					return g
				},
				jQ: function() {
					return i
				},
				qR: function() {
					return n
				},
				uc: function() {
					return m
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				o = t("../react/pages/workers/entityTypes.ts"),
				a = t("../react/pages/email/types.ts"),
				u = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				v = t.n(l);
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
				m = s => s.entities,
				g = (...s) => (0, u.P1)(i, m, ...s),
				n = (0, u.QB)(i)
		},
		"../react/app/redux/utils.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return a
				},
				_: function() {
					return o
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const o = u => (l, v, i) => (0, e.SC)(l, v, i, {
					hideErrorAlert: !0
				}).catch(u),
				a = u => l => {
					if (l.status === u) return l;
					throw l
				}
		},
		"../react/common/actionTypes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Cm: function() {
					return v
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return i
				},
				Li: function() {
					return g
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return a
				},
				Yc: function() {
					return s
				},
				gM: function() {
					return u
				},
				lV: function() {
					return l
				},
				s1: function() {
					return m
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				a = "MODAL_OPEN",
				u = "MODAL_CLOSE",
				l = "TOGGLE_ON",
				v = "TOGGLE_OFF",
				i = "SET_ACTIVE",
				m = "CLEAR_ACTIVE",
				g = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let s = function(r) {
				return r.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", r.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", r.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", r.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", r.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", r.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", r.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", r.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", r.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", r
			}({})
		},
		"../react/common/actions/activeActions.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				I: function() {
					return o
				},
				n: function() {
					return a
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = (u, l) => ({
					type: e.HI,
					activeKey: u,
					activeValue: l
				}),
				a = u => ({
					type: e.s1,
					activeKey: u
				})
		},
		"../react/common/actions/membershipActions.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				AX: function() {
					return r
				},
				YT: function() {
					return g
				},
				ct: function() {
					return i
				},
				d6: function() {
					return n
				},
				kt: function() {
					return s
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/common/constants/index.ts");

			function a(d) {
				for (var c = 1; c < arguments.length; c++) {
					var f = arguments[c] != null ? Object(arguments[c]) : {},
						b = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(f).filter(function(P) {
						return Object.getOwnPropertyDescriptor(f, P).enumerable
					})), b.forEach(function(P) {
						u(d, P, f[P])
					})
				}
				return d
			}

			function u(d, c, f) {
				return c = l(c), c in d ? Object.defineProperty(d, c, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[c] = f, d
			}

			function l(d) {
				var c = v(d, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function v(d, c) {
				if (typeof d != "object" || d === null) return d;
				var f = d[Symbol.toPrimitive];
				if (f !== void 0) {
					var b = f.call(d, c || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(d)
			}
			const i = d => {
					const c = d.payload.map(f => a({}, f, {
						membershipId: f.id,
						id: f.account.id
					}));
					return a({}, d, {
						payload: c
					})
				},
				m = d => {
					const c = i(d);
					return Array.isArray(c.payload) ? a({}, d, {
						payload: c.payload[0]
					}) : a({}, d, {
						payload: null
					})
				},
				g = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", i),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				s = (...d) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: d
				}),
				r = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", m)
		},
		"../react/common/actions/modalActions.ts": function(W, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				closeModal: function() {
					return u
				},
				openModal: function() {
					return a
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function a(l, v, i = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: l,
						props: v
					},
					options: i
				}
			}

			function u(l) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: l
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(W, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				add: function() {
					return l
				},
				error: function() {
					return g
				},
				info: function() {
					return i
				},
				success: function() {
					return v
				},
				warn: function() {
					return m
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
			let u = 0;

			function l(n, s, r = {}) {
				return r = r || {},
					function(d) {
						let c = u++,
							f = {
								id: c,
								type: n,
								message: s,
								delay: r.delay,
								persist: r.persist === void 0 ? !1 : r.persist,
								closable: r.closable === void 0 ? !0 : r.closable,
								onClose() {
									d(a(c)), r.onClose && r.onClose.apply(null, arguments)
								}
							};
						d(o(f))
					}
			}

			function v(n, s) {
				return l("success", n, s)
			}

			function i(n, s) {
				return l("info", n, s)
			}

			function m(n, s) {
				return l("warning", n, s)
			}

			function g(n, s) {
				return l("error", n, s)
			}
		},
		"../react/common/actions/userActions.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				BT: function() {
					return i
				},
				Ut: function() {
					return P
				},
				V_: function() {
					return w
				},
				Y9: function() {
					return f
				},
				Z0: function() {
					return O
				},
				mp: function() {
					return b
				},
				r3: function() {
					return y
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/app/redux/utils.ts");

			function a(_) {
				for (var T = 1; T < arguments.length; T++) {
					var D = arguments[T] != null ? Object(arguments[T]) : {},
						S = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(D).filter(function(N) {
						return Object.getOwnPropertyDescriptor(D, N).enumerable
					})), S.forEach(function(N) {
						u(_, N, D[N])
					})
				}
				return _
			}

			function u(_, T, D) {
				return T = l(T), T in _ ? Object.defineProperty(_, T, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[T] = D, _
			}

			function l(_) {
				var T = v(_, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function v(_, T) {
				if (typeof _ != "object" || _ === null) return _;
				var D = _[Symbol.toPrimitive];
				if (D !== void 0) {
					var S = D.call(_, T || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(_)
			}
			const i = (0, e.C)("user").get`/user`,
				m = (0, e.C)("user").patch`/user`,
				g = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				s = (0, e.C)("user").post`/user/two_factor_authentication`,
				r = (0, e.C)("user").put`/user/two_factor_authentication`,
				d = (0, e.C)("user").delete`/user/two_factor_authentication`,
				c = (0, e.C)("user").put`/user/email`;

			function f(..._) {
				return c(..._)
			}
			const b = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				P = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(_ => a({}, _, {
					body: a({}, _.body, {
						result: {}
					})
				}))),
				w = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				y = (0, e.C)("userDetails").get`/user/details`,
				O = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(W, E, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/utils/zoneLevelAccess.ts");
			const a = ({
				legacyPermission: u,
				canAccess: l,
				children: v,
				render: i
			}) => {
				const m = !!(0, o.P)();
				let g;
				typeof l == "boolean" && l !== void 0 && m ? g = {
					read: l,
					list: l,
					create: l,
					update: l,
					delete: l,
					sign: l
				} : g = (0, e.Z)(u);
				const n = i || v;
				return n ? n(g) : null
			};
			E.Z = a
		},
		"../react/common/components/AccessCheck/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				E1: function() {
					return o
				},
				L8: function() {
					return n
				},
				W9: function() {
					return g
				},
				ZZ: function() {
					return v
				},
				j: function() {
					return s
				},
				jX: function() {
					return i
				},
				my: function() {
					return m
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
				u = "com.cloudflare.api.account.zone.",
				l = ["com.cloudflare.api.app.manage"];
			let v = function(r) {
				return r.read = "read", r.list = "list", r.create = "create", r.update = "update", r.delete = "delete", r.sign = "sign", r.refresh = "refresh", r
			}({});
			const i = (r, d) => `${o}${r?r+".":""}${d}`,
				m = (r, d) => `${u}${r?r+".":""}${d}`,
				g = (r, d) => `${a}${r}.${d}`,
				n = (r = "") => `${o}${r}`,
				s = (r = "") => `${u}${r}`
		},
		"../react/common/components/AccessCheck/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				L8: function() {
					return u.L8
				},
				W9: function() {
					return u.W9
				},
				WL: function() {
					return a.WL
				},
				ZP: function() {
					return o.Z
				},
				ZZ: function() {
					return u.ZZ
				},
				hT: function() {
					return a.hT
				},
				j: function() {
					return u.j
				},
				jX: function() {
					return u.jX
				},
				my: function() {
					return u.my
				},
				xk: function() {
					return e.Z
				},
				zs: function() {
					return u.zs
				}
			});
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/common/components/AccessCheck/AccessCheck.tsx"),
				a = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(W, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");

			function v(i) {
				const {
					read: m,
					edit: g
				} = (0, a.p4)(u.Yj)(i);
				let n = g;
				if (i != "zone_versioning") {
					const r = (0, a.p4)(l.G);
					(r == null ? void 0 : r.isLocked) && (n = !1)
				}
				return (0, e.useMemo)(() => ({
					read: m,
					list: m,
					create: n,
					update: n,
					delete: n,
					sign: n
				}), [m, n])
			}
			E.Z = v
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				WL: function() {
					return r
				},
				hT: function() {
					return f
				},
				kd: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				a = t("../react/pages/home/members/utils.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");
			const v = {
					allow: "allow",
					deny: "deny"
				},
				i = 0,
				m = 1,
				g = 2,
				n = 3;

			function s(T, D, S, N) {
				let A = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					I;
				for (I in A) A[I] = r(T, `${D}.${I}`, S, N);
				return A
			}

			function r(T, D, S, N) {
				var A;
				if (d(D) && !c(D)) {
					const Q = (0, l.G)(T);
					if (Q == null ? void 0 : Q.isLocked) return !1
				}
				const I = (A = (0, o.D0)(T)) === null || A === void 0 ? void 0 : A.id,
					L = I ? [`com.cloudflare.api.account.${I}`] : void 0,
					k = (0, a.vq)(I);
				return !!b(T, k, D, S, N || L)
			}

			function d(T) {
				return ![u.ZZ.read, u.ZZ.list].some(D => T.endsWith(D))
			}

			function c(T) {
				return T.includes("zone.versioning")
			}

			function f(T) {
				const D = (0, o.Ko)(T);
				let S = !1;
				return D == null || D.forEach(N => {
					N.access === v.allow && N.permission_groups.forEach(A => {
						var I;
						(A == null || (I = A.meta) === null || I === void 0 ? void 0 : I.scopes) === u.u1 && (S = !0)
					})
				}), S
			}

			function b(T, D, S, N, A) {
				const I = (0, o.Ko)(T),
					L = {};
				I == null || I.forEach(ae => {
					var pe;
					const ce = ae.access;
					let ue = i;
					if (S && ae.permission_groups.forEach(F => {
							var z, B;
							D == null || (z = D.find(h => h.id === F.id)) === null || z === void 0 || (B = z.permissions) === null || B === void 0 || B.forEach(h => {
								ue = Math.max(ue, P(h, S))
							})
						}), ue !== i && !!N) {
						let F = i;
						ae.resource_groups.forEach(z => {
							F = Math.max(F, y(z.scope, N, A))
						}), ue = F === i ? F : ue + F
					}(L == null || (pe = L[ce]) === null || pe === void 0 ? void 0 : pe[ue]) || (0, e.Z)(L, [ce, ue], []), L[ce][ue].push(ae)
				});
				const k = L[v.allow] && Object.keys(L[v.allow]).map(ae => parseInt(ae)),
					U = L[v.deny] && Object.keys(L[v.deny]).map(ae => parseInt(ae)),
					Q = Math.max.apply(Math, k);
				return Q === i || Math.max.apply(Math, U) >= Q ? null : L[v.allow][Q]
			}

			function P(T, D) {
				if (T.key === D || w(T.key, D)) return n;
				for (const S of (T == null ? void 0 : T.implies) || []) {
					let N = P(S, D);
					if (N > i) return N
				}
				return i
			}

			function w(T, D) {
				const S = D == null ? void 0 : D.lastIndexOf(".");
				return S === -1 ? !1 : (D == null ? void 0 : D.substring(0, S)) + ".*" === T
			}

			function y(T, D, S) {
				var N;
				let A = i;
				if (T == null || (N = T.objects) === null || N === void 0 || N.forEach(I => {
						A = Math.max(A, _(I, D))
					}), A === i) return A;
				if (T.key !== "*") switch (!0) {
					case O(T.key, S) > i:
					case (!(S == null ? void 0 : S.length) && A === n):
						break;
					case (A === m && O(T.key, [D]) > i):
						A = O(T.key, [D]);
						break;
					default:
						return i
				}
				for (const I of T.subset_of || [])
					if (O(I.key, S) === i) return i;
				return A
			}

			function O(T, D = []) {
				for (const S of D || []) {
					if (T === S) return n;
					if (w(T, S)) return g
				}
				return i
			}

			function _(T, D) {
				return T.key === D ? n : T.key === "*" ? m : w(T.key, D) ? g : i
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(W, E, t) {
			"use strict";
			t.d(E, {
				a: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e),
				a = t("../react/common/selectors/accountSelectors.ts");
			const u = v => {
					if (typeof v != "string") throw new Error("invalid Param Type provided");
					const i = v.slice(1).split(":");
					if (i.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: i[0],
						value: i[1]
					}
				},
				l = (v, i) => {
					const {
						resourceId: m,
						accountId: g,
						legacyPermission: n
					} = i;
					let {
						read: s,
						edit: r
					} = i;
					const d = {};
					n && (r = `#${n}:edit`, s = `#${n}:read`);
					const c = m || g;
					if (s) {
						const f = Array.isArray(s) ? s : [s];
						d.isReadable = f.some(b => {
							const P = u(b);
							return (0, a.DT)(v, c, w => !!(w[P.key] && w[P.key][P.value]))
						})
					}
					if (r) {
						const f = Array.isArray(r) ? r : [r];
						d.isEditable = f.some(b => {
							const P = u(b);
							return (0, a.DT)(v, c, w => !!(w[P.key] && w[P.key][P.value]))
						})
					}
					return d
				};
			E.Z = (0, e.connect)(l)
		},
		"../react/common/components/AccessControl/index.js": function(W, E, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				o = t.n(e),
				a = t("../react/app/HoCs/withEntities.tsx"),
				u = t("../react/common/components/AccessControl/SAAConnect.js");

			function l(s) {
				for (var r = 1; r < arguments.length; r++) {
					var d = arguments[r] != null ? Object(arguments[r]) : {},
						c = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(d).filter(function(f) {
						return Object.getOwnPropertyDescriptor(d, f).enumerable
					})), c.forEach(function(f) {
						v(s, f, d[f])
					})
				}
				return s
			}

			function v(s, r, d) {
				return r = i(r), r in s ? Object.defineProperty(s, r, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[r] = d, s
			}

			function i(s) {
				var r = m(s, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(s, r) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var c = d.call(s, r || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(s)
			}

			function g(s) {
				const d = ["isReadable", "isEditable"].reduce((c, f) => s.hasOwnProperty(f) ? l({}, c, {
					[f]: s[f]
				}) : c, {});
				return s.children(d)
			}
			g.propTypes = {
				resourceType: o().string,
				resourceId: o().string,
				read: o().oneOfType([o().string, o().array]),
				edit: o().oneOfType([o().string, o().array]),
				accountId: o().string,
				isReadable: o().bool,
				isEditable: o().bool,
				children: o().func
			};
			const n = (0, a.Z)((0, u.Z)(g));
			n.displayName = "AccessControl", E.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				PP: function() {
					return s
				},
				RJ: function() {
					return i
				},
				tz: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const v = () => m.test(window.location.pathname) || a.E.has(u.Qq),
				i = () => a.E.get(u.Qq),
				m = /^\/login\/apple(\/)?/,
				n = [m, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				s = () => {
					let d = !1;
					n.forEach(f => {
						if (f.test(window.location.pathname)) {
							d = !0;
							return
						}
					});
					const c = v() && d;
					return c && (0, l.C8)(l.LF.OFF), c
				},
				r = d => {
					d && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let c = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					d && (c = c + `&jwt=${d}`), window.location.href = c
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				oG: function() {
					return c
				},
				sN: function() {
					return m.sN
				},
				v2: function() {
					return m.v2
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				v = t.n(l),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("../react/common/components/Dropdown/index.tsx"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(f) {
					for (var b = 1; b < arguments.length; b++) {
						var P = arguments[b];
						for (var w in P) Object.prototype.hasOwnProperty.call(P, w) && (f[w] = P[w])
					}
					return f
				}, n.apply(this, arguments)
			}

			function s(f, b) {
				if (f == null) return {};
				var P = r(f, b),
					w, y;
				if (Object.getOwnPropertySymbols) {
					var O = Object.getOwnPropertySymbols(f);
					for (y = 0; y < O.length; y++) w = O[y], !(b.indexOf(w) >= 0) && (!Object.prototype.propertyIsEnumerable.call(f, w) || (P[w] = f[w]))
				}
				return P
			}

			function r(f, b) {
				if (f == null) return {};
				var P = {},
					w = Object.keys(f),
					y, O;
				for (O = 0; O < w.length; O++) y = w[O], !(b.indexOf(y) >= 0) && (P[y] = f[y]);
				return P
			}
			const d = (0, i.createStyledComponent)(({
				theme: f
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${f.radii[2]}px 0 0 ${f.radii[2]}px`,
					borderRight: `1px solid ${f.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${f.radii[2]}px ${f.radii[2]}px 0`,
					paddingRight: f.space[2],
					paddingLeft: f.space[2]
				},
				"& button": {
					color: (0, g.Yc)() ? f.colors.text : void 0
				},
				"& button:hover": {
					color: (0, g.Yc)() ? f.colors.text : void 0
				}
			}));

			function c(f) {
				let {
					menu: b,
					containerProps: P,
					disabled: w,
					disabledDropdown: y = w
				} = f, O = s(f, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: _
				} = (0, l.useI18n)();
				return o().createElement(d, n({}, P, {
					role: "group"
				}), o().createElement(a.zx, n({}, O, {
					disabled: w
				})), o().createElement(m.Lt, {
					trigger: o().createElement(a.zx, {
						type: O.type,
						"aria-haspopup": "menu",
						disabled: y
					}, o().createElement(u.J, {
						type: "caret-down",
						label: _("common.more"),
						size: 12
					})),
					menu: b
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				v: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = t("../react/common/hooks/useIntersectionObserver.ts");

			function v() {
				return v = Object.assign ? Object.assign.bind() : function(m) {
					for (var g = 1; g < arguments.length; g++) {
						var n = arguments[g];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (m[s] = n[s])
					}
					return m
				}, v.apply(this, arguments)
			}

			function i(m) {
				const g = (0, e.useRef)(null),
					[n, s] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const d = g.current;
					if (d) {
						const {
							bottom: c
						} = d.getBoundingClientRect();
						c > window.innerHeight && s(!0)
					}
				}, []);
				const r = (0, l.S)(d => {
					for (const c of d) c.intersectionRatio < 1 && s(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const d = g.current;
					if (d && r) return r.observe(d), () => {
						r.unobserve(d)
					}
				}, [r]), o().createElement(a.ZC, v({
					role: "menu",
					innerRef: g,
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
				}, m))
			}
		},
		"../react/common/components/Dropdown/MenuItem.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				s: function() {
					return b
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(u);

			function v() {
				return v = Object.assign ? Object.assign.bind() : function(P) {
					for (var w = 1; w < arguments.length; w++) {
						var y = arguments[w];
						for (var O in y) Object.prototype.hasOwnProperty.call(y, O) && (P[O] = y[O])
					}
					return P
				}, v.apply(this, arguments)
			}

			function i(P, w) {
				if (P == null) return {};
				var y = m(P, w),
					O, _;
				if (Object.getOwnPropertySymbols) {
					var T = Object.getOwnPropertySymbols(P);
					for (_ = 0; _ < T.length; _++) O = T[_], !(w.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(P, O) || (y[O] = P[O]))
				}
				return y
			}

			function m(P, w) {
				if (P == null) return {};
				var y = {},
					O = Object.keys(P),
					_, T;
				for (T = 0; T < O.length; T++) _ = O[T], !(w.indexOf(_) >= 0) && (y[_] = P[_]);
				return y
			}

			function g(P) {
				for (var w = 1; w < arguments.length; w++) {
					var y = arguments[w] != null ? Object(arguments[w]) : {},
						O = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(y).filter(function(_) {
						return Object.getOwnPropertyDescriptor(y, _).enumerable
					})), O.forEach(function(_) {
						n(P, _, y[_])
					})
				}
				return P
			}

			function n(P, w, y) {
				return w = s(w), w in P ? Object.defineProperty(P, w, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[w] = y, P
			}

			function s(P) {
				var w = r(P, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function r(P, w) {
				if (typeof P != "object" || P === null) return P;
				var y = P[Symbol.toPrimitive];
				if (y !== void 0) {
					var O = y.call(P, w || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(P)
			}
			const d = ({
					theme: P
				}) => {
					const w = {
						cursor: "pointer",
						background: P.colors.gray[9],
						color: P.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: P.space[2],
						background: P.colors.background,
						color: P.colors.gray[3],
						fontSize: P.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						'&:hover:not(:disabled):not([aria-disabled="true"])': w,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': g({}, w, {
							boxShadow: "none",
							borderRadius: 0
						}),
						'&:is(:disabled, [aria-disabled="true"])': {
							color: P.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				c = (0, a.createComponent)(d, "a"),
				f = (0, a.createComponent)(d, "button");

			function b(P) {
				let {
					disabled: w = !1
				} = P, y = i(P, ["disabled"]);
				const O = (0, u.useHistory)(),
					_ = {
						role: "menuitem"
					};
				if ("href" in y && typeof y.href == "string") return o().createElement(c, v({
					"aria-disabled": w
				}, _, y, {
					href: w ? void 0 : y.href,
					onClick: D => {
						var S;
						if (w) return D.stopPropagation();
						D.preventDefault(), (S = y.onClick) === null || S === void 0 || S.call(y, D), O.push(y.href)
					}
				}));
				var T;
				return o().createElement(f, v({
					type: (T = y.type) !== null && T !== void 0 ? T : "button"
				}, _, y, {
					disabled: w
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(W, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/prop-types/index.js"),
				u = t.n(a),
				l = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const v = ({
				children: i
			}) => o().createElement(l.xu, {
				height: 411
			}, i);
			v.propTypes = {
				children: u().node
			}, E.Z = v
		},
		"../react/common/components/ModalManager.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return c
				},
				dd: function() {
					return r
				},
				vR: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/react-redux/react-redux");
			const u = f => f.application.modals;
			var l = t("../react/common/actions/modalActions.ts"),
				v = t("../../../../node_modules/swr/core/dist/index.mjs"),
				i = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(f) {
					for (var b = 1; b < arguments.length; b++) {
						var P = arguments[b];
						for (var w in P) Object.prototype.hasOwnProperty.call(P, w) && (f[w] = P[w])
					}
					return f
				}, m.apply(this, arguments)
			}
			const g = o().createContext(null);
			class n extends o().Component {
				render() {
					const {
						modals: b,
						closeModal: P
					} = this.props;
					return o().createElement(o().Fragment, null, b.map(({
						ModalComponent: w,
						props: y = {},
						id: O
					}) => {
						const _ = () => {
							typeof y.onClose == "function" && y.onClose(), P(w)
						};
						return o().createElement(g.Provider, {
							key: O,
							value: {
								closeModal: _
							}
						}, o().createElement(v.J$, {
							value: i.ZP
						}, o().createElement(w, m({}, y, {
							isOpen: !0,
							closeModal: _
						}))))
					}))
				}
			}

			function s() {
				const f = o().useContext(g);
				if (!f) throw new Error("useModalContext must be used within a ModalContext");
				return f
			}

			function r() {
				const f = (0, a.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...b) {
						return f(l.openModal(...b))
					}, [f]),
					closeModal: (0, e.useCallback)(function(...b) {
						return f(l.closeModal(...b))
					}, [f])
				}
			}
			var c = (0, a.connect)(f => ({
				modals: u(f)
			}), l)(n)
		},
		"../react/common/components/Page.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function u(l) {
				return o().createElement(a.T3, l)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return m
				},
				JR: function() {
					return g
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return v
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
					return u
				},
				zl: function() {
					return i
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				a = "date-from",
				u = "date-to",
				l = "from",
				v = "to",
				i = "all",
				m = {
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
			let g = function(s) {
					return s.ADD_FILTER = "Add filter", s.EDIT_FILTER = "Edit filter", s.REMOVE_FILTER = "Remove filter", s.CHANGE_TIME = "Change time window", s.FEED_PAGE_FORWARD = "Activity feed next page", s.FEED_PAGE_BACKWARD = "Activity feed previous page", s.FEED_EXPAND_EVENT = "Activity feed expand event", s.FEED_CLOSE_EVENT = "Activity feed close event", s.FEED_EXPAND_MATCHES = "Activity feed expand matches", s.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", s.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", s.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", s.DOWNLOAD_FEED = "Activity feed download", s.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', s.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', s.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', s.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', s.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', s.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", s.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", s
				}({}),
				n = function(s) {
					return s.TIMESERIES = "Timeseries Chart", s.DISTRIBUTION = "Source Distribution Chart", s.TOP_N = "Top N", s.FILTER_BAR = "Filter Bar", s.SCORES_DISTRIBUTIONS = "Scores Distributions", s.INSIGHTS = "Insights", s.RL_HISTOGRAM = "Rate Limit Histogram", s
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Cf: function() {
					return g
				},
				hJ: function() {
					return m
				},
				ys: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var s = 1; s < arguments.length; s++) {
					var r = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(r).filter(function(c) {
						return Object.getOwnPropertyDescriptor(r, c).enumerable
					})), d.forEach(function(c) {
						u(n, c, r[c])
					})
				}
				return n
			}

			function u(n, s, r) {
				return s = l(s), s in n ? Object.defineProperty(n, s, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = r, n
			}

			function l(n) {
				var s = v(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function v(n, s) {
				if (typeof n != "object" || n === null) return n;
				var r = n[Symbol.toPrimitive];
				if (r !== void 0) {
					var d = r.call(n, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			let i = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const m = ({
					name: n,
					additionalData: s = {}
				}) => {
					o().sendEvent(n, a({}, s || {}))
				},
				g = () => {
					var n;
					return (n = Object.values(i)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				v: function() {
					return e
				}
			});
			let e = function(o) {
				return o.FIELD = "change field", o.OPERATOR = "change operator", o
			}({})
		},
		"../react/common/constants/analytics/botScoreSrc.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				EG: function() {
					return a
				},
				Me: function() {
					return v
				},
				Vv: function() {
					return l
				},
				sk: function() {
					return u
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let a = function(i) {
				return i.NOT_COMPUTED = "not_computed", i.MACHINE_LEARNING = "machine_learning", i.HEURISTICS = "heuristics", i.BEHAVIORAL_ANALYSIS = "behavioral_analysis", i.JS_FINGERPRINTING = "js_fingerprinting", i.VERIFIED_BOT = "verified_bot", i.CLOUDFLARE_SERVICE = "cloudflare_service", i
			}({});
			const u = {
					[a.NOT_COMPUTED]: "Not Computed",
					[a.MACHINE_LEARNING]: "Machine Learning",
					[a.HEURISTICS]: "Heuristics",
					[a.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[a.JS_FINGERPRINTING]: "JS Fingerprinting",
					[a.VERIFIED_BOT]: "Verified Bot",
					[a.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				l = i => Array.isArray(i) ? i.map(m => {
					var g;
					return (g = u[m]) !== null && g !== void 0 ? g : m
				}) : u[i],
				v = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [a.NOT_COMPUTED, a.MACHINE_LEARNING, a.HEURISTICS, a.BEHAVIORAL_ANALYSIS, a.JS_FINGERPRINTING, a.VERIFIED_BOT, a.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
					return g
				},
				Hw: function() {
					return v
				},
				Ed: function() {
					return l
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return d
				},
				hQ: function() {
					return i
				},
				SP: function() {
					return m
				}
			});
			let e = function(c) {
				return c.page_rules = "page_rules", c.automatic_platform_optimization = "automatic_platform_optimization", c
			}({});
			const o = "page_rules",
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
				l = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				v = {
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
				m = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					ubb_frequency: 1e3,
					ubb_storage_price: 5,
					ubb_streaming_price: 1,
					ubb_unit: "minute"
				},
				g = {
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
				s = t("../react/common/constants/billing/tracking.ts"),
				r = t("../react/common/constants/billing/workers.ts");
			const d = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
				u = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				l = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Dk: function() {
					return d
				},
				Dy: function() {
					return c
				},
				E_: function() {
					return v
				},
				Lv: function() {
					return f
				},
				S4: function() {
					return l
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return g
				},
				Y1: function() {
					return i
				},
				p6: function() {
					return m
				},
				q0: function() {
					return u
				},
				rg: function() {
					return b
				},
				sJ: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const u = "healthy",
				l = "degraded",
				v = "critical",
				i = "unknown",
				m = "not-monitored",
				g = o().from({
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
				s = {
					f: g.FREE,
					p: g.PRO,
					b: g.BIZ
				},
				r = "marketing-pt",
				d = () => {
					const w = a.Z.get(r);
					if (!!w) return s[w]
				},
				c = ["gov"],
				f = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				b = "banner-notification-interactions",
				P = null
		},
		"../react/common/constants/index.ts": function(W, E, t) {
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
		"../react/common/constants/roles.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SUPER_ADMINISTRATOR_ALL_PRIVILEGES = "Super Administrator - All Privileges", o.CLOUDFLARE_ACCESS = "Cloudflare Access", o.CLOUDFLARE_ACCESS_APP_ADMIN = "Cloudflare Access App Admin", o.CLOUDFLARE_ACCESS_IDENTITY_PROVIDER_ADMIN = "Cloudflare Access Identity Provider Admin", o.ADMINISTRATOR = "Administrator", o.ADMINISTRATOR_READ_ONLY = "Administrator Read Only", o.ANALYTICS = "Analytics", o.API_GATEWAY = "API Gateway", o.API_GATEWAY_READ = "API Gateway Read", o.AUDIT_LOGS_VIEWER = "Audit Logs Viewer", o.BILLING = "Billing", o.BOT_MANAGEMENT = "Bot Management", o.BOT_MANAGEMENT_ACCOUNT_WIDE = "Bot Management (Account-Wide)", o.CACHE_DOMAIN_PURGE = "Cache Domain Purge", o.CACHE_PURGE = "Cache Purge", o.SSL_TLS_CACHING_PERFORMANCE_PAGE_RULES_AND_CUSTOMIZATION = "SSL/TLS, Caching, Performance, Page Rules, and Customization", o.EMAIL_CONFIGURATION_ADMIN = "Email Configuration Admin", o.EMAIL_INTEGRATION_ADMIN = "Email Integration Admin", o.EMAIL_SECURITY_ANALYST = "Email Security Analyst", o.EMAIL_SECURITY_READONLY = "Email Security Readonly", o.EMAIL_SECURITY_REPORTING = "Email Security Reporting", o.CLOUDFORCE_ONE_ADMIN = "Cloudforce One Admin", o.CLOUDFORCE_ONE_READ = "Cloudforce One Read", o.DNS = "DNS", o.DOMAIN_ADMINISTRATOR = "Domain Administrator", o.DOMAIN_ADMINISTRATOR_READ_ONLY = "Domain Administrator Read Only", o.DOMAIN_API_GATEWAY = "Domain API Gateway", o.DOMAIN_API_GATEWAY_READ = "Domain API Gateway Read", o.DOMAIN_DNS = "Domain DNS", o.DOMAIN_PAGE_SHIELD = "Domain Page Shield", o.DOMAIN_PAGE_SHIELD_READ = "Domain Page Shield Read", o.MAGIC_NETWORK_MONITORING_ADMIN = "Magic Network Monitoring Admin", o.MAGIC_NETWORK_MONITORING = "Magic Network Monitoring", o.MAGIC_NETWORK_MONITORING_READ_ONLY = "Magic Network Monitoring Read-Only", o.CLOUDFLARE_GATEWAY = "Cloudflare Gateway", o.CLOUDFLARE_WORKER_ADMIN = "Cloudflare Worker Admin", o.HTTP_APPLICATIONS = "HTTP Applications", o.HTTP_APPLICATIONS_READ = "HTTP Applications Read", o.CLOUDFLARE_IMAGES = "Cloudflare Images", o.LOAD_BALANCER = "Load Balancer", o.LOG_SHARE = "Log Share", o.NETWORK_SERVICES_WRITE_MAGIC = "Network Services Write (Magic)", o.NETWORK_SERVICES_READ_MAGIC = "Network Services Read (Magic)", o.MINIMAL_ACCOUNT_ACCESS = "Minimal Account Access", o.PAGE_SHIELD = "Page Shield", o.PAGE_SHIELD_READ = "Page Shield Read", o.HYPERDRIVE_ADMIN = "Hyperdrive Admin", o.HYPERDRIVE_READONLY = "Hyperdrive Readonly", o.CLOUDFLARE_R2_ADMIN = "Cloudflare R2 Admin", o.CLOUDFLARE_R2_READ = "Cloudflare R2 Read", o.LOG_SHARE_READER = "Log Share Reader", o.CLOUDFLARE_SNIPPETS_ADMIN = "Cloudflare Snippets Admin", o.CLOUDFLARE_STREAM = "Cloudflare Stream", o.CLOUDFLARE_ZERO_TRUST = "Cloudflare Zero Trust", o.CLOUDFLARE_DEX = "Cloudflare DEX", o.CLOUDFLARE_ZERO_TRUST_PII = "Cloudflare Zero Trust PII", o.CLOUDFLARE_ZERO_TRUST_READ_ONLY = "Cloudflare Zero Trust Read Only", o.CLOUDFLARE_ZERO_TRUST_REPORTING = "Cloudflare Zero Trust Reporting", o.TRANSFORM_RULES = "Transform Rules", o.TRUST_AND_SAFETY = "Trust and Safety", o.TURNSTILE = "Turnstile", o.TURNSTILE_READ = "Turnstile Read", o.VECTORIZE_ADMIN = "Vectorize Admin", o.VECTORIZE_READONLY = "Vectorize Readonly", o.FIREWALL = "Firewall", o.WAITING_ROOM_ADMIN = "Waiting Room Admin", o.WAITING_ROOM_READ = "Waiting Room Read", o.WORKERS_ADMIN = "Workers Admin", o.ZARAZ_ADMIN = "Zaraz Admin", o.ZARAZ_EDIT = "Zaraz Edit", o.ZARAZ_READONLY = "Zaraz Readonly", o.ZONE_VERSIONING = "Zone Versioning", o.ZONE_VERSIONING_ACCOUNT_WIDE = "Zone Versioning (Account-Wide)", o.ZONE_VERSIONING_READ = "Zone Versioning Read", o.ZONE_VERSIONING_READ_ACCOUNT_WIDE = "Zone Versioning Read (Account-Wide)", o.DOMAIN_WAITING_ROOM_ADMIN = "Domain Waiting Room Admin", o.DOMAIN_WAITING_ROOM_READ = "Domain Waiting Room Read", o.BRAND_PROTECTION = "Brand Protection", o
			}({})
		},
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
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
					return u
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
				a = (l, v, i = !1) => {
					var m;
					return `${v} ${(m=o[l])!==null&&m!==void 0?m:l} ${i?"ruleset":"rule"}${v===e.GET?"s":""}`
				},
				u = () => {
					var l;
					return (l = Object.keys(o).reduce((v, i) => {
						const m = Object.values(e).reduce((g, n) => (g.push(a(i, n)), g.push(a(i, n, !0)), g), []);
						return v.concat(m)
					}, [])) === null || l === void 0 ? void 0 : l.flat()
				}
		},
		"../react/common/hooks/suspenseHelpers.ts": function(W, E, t) {
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
				a = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const u = "suspenseComplete";

			function l() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(u))
				}, [])
			}

			function v(m) {
				(0, a.OR)(u, () => {
					window.setTimeout(m, 0)
				}, {
					target: window
				})
			}

			function i(...m) {
				const [g, n] = m;
				o().useLayoutEffect(g, n), v(g)
			}
		},
		"../react/common/hooks/useAccountId.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return l
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(a);

			function l() {
				var v;
				const {
					accountId: i
				} = (0, a.useParams)(), m = (0, e.p4)(o.D0);
				if (i === void 0 && !m) throw new Error("Account ID not found in URL params");
				return (v = i) !== null && v !== void 0 ? v : m == null ? void 0 : m.id
			}
		},
		"../react/common/hooks/useActiveState.ts": function(W, E, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				o = t("webpack/sharing/consume/default/react-redux/react-redux"),
				a = t.n(o),
				u = t("../react/common/selectors/commonSelectors.ts");
			const l = v => {
				const i = (0, o.useDispatch)();
				return [(0, o.useSelector)((0, u.cZ)(v)), n => {
					i((0, e.I)(v, n))
				}]
			};
			E.Z = l
		},
		"../react/common/hooks/useCachedState.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				j: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function u(l, {
				key: v,
				cache: i = a.E,
				ttl: m
			} = {}) {
				var g;
				const n = v !== void 0 && i.get(v),
					[s, r] = (0, e.useState)((g = n) !== null && g !== void 0 ? g : l);
				return [s, c => {
					r(f => (c instanceof Function && (c = c(f)), v !== void 0 && i.set(v, c, m), c))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(W, E, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(a) {
				return (0, e.qf)(a)
			}
			E.Z = o
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function a(u, {
				root: l,
				rootMargin: v,
				threshold: i
			} = {}) {
				const m = (0, e.useRef)(null);

				function g() {
					return m.current === null && (m.current = new IntersectionObserver(u, {
						root: l,
						rootMargin: v,
						threshold: i
					})), m.current
				}
				return (0, e.useEffect)(() => (m.current = new IntersectionObserver(u, {
					root: l,
					rootMargin: v,
					threshold: i
				}), () => {
					var n;
					(n = m.current) === null || n === void 0 || n.disconnect()
				}), [u, l, v, i]), g()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(W, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function a(u) {
				const l = (0, e.useRef)(u);
				return (0, e.useEffect)(() => {
					l.current = u
				}, [u]), l.current
			}
			E.Z = a
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(W, E, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function a(u) {
				return (0, e.p4)(l => (0, o.rV)(l, u))
			}
			E.Z = a
		},
		"../react/common/middleware/sparrow/errors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Uh: function() {
					return l
				},
				ez: function() {
					return u
				},
				oV: function() {
					return v
				}
			});

			function e(i, m, g) {
				return m = o(m), m in i ? Object.defineProperty(i, m, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[m] = g, i
			}

			function o(i) {
				var m = a(i, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function a(i, m) {
				if (typeof i != "object" || i === null) return i;
				var g = i[Symbol.toPrimitive];
				if (g !== void 0) {
					var n = g.call(i, m || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(i)
			}
			class u extends Error {
				constructor(m, g) {
					super(g);
					e(this, "eventName", void 0), this.eventName = m, this.name = "SparrowValidationError"
				}
			}
			class l extends u {
				constructor(m) {
					super(m, `Event not allowed: "${m}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class v extends u {
				constructor(m, g) {
					super(m, `Found invalid properties on event: "${m}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = g
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				AC: function() {
					return Xe
				},
				Au: function() {
					return de
				},
				B: function() {
					return Se
				},
				B3: function() {
					return H
				},
				BG: function() {
					return S
				},
				Bp: function() {
					return Fe
				},
				CV: function() {
					return bt
				},
				D0: function() {
					return O
				},
				DT: function() {
					return M
				},
				EL: function() {
					return G
				},
				EU: function() {
					return V
				},
				GE: function() {
					return yt
				},
				Ko: function() {
					return ee
				},
				Kx: function() {
					return I
				},
				Le: function() {
					return L
				},
				O4: function() {
					return ve
				},
				Ou: function() {
					return z
				},
				Py: function() {
					return Je
				},
				QI: function() {
					return tt
				},
				Qf: function() {
					return T
				},
				RO: function() {
					return Be
				},
				T3: function() {
					return pt
				},
				T8: function() {
					return D
				},
				UX: function() {
					return x
				},
				VP: function() {
					return ct
				},
				Xo: function() {
					return qe
				},
				Xu: function() {
					return ce
				},
				Yi: function() {
					return ht
				},
				Yj: function() {
					return ie
				},
				Zu: function() {
					return q
				},
				bC: function() {
					return $
				},
				f8: function() {
					return Q
				},
				hI: function() {
					return lt
				},
				hN: function() {
					return A
				},
				hX: function() {
					return Ce
				},
				iq: function() {
					return Ve
				},
				nE: function() {
					return N
				},
				oD: function() {
					return h
				},
				oI: function() {
					return U
				},
				oJ: function() {
					return Y
				},
				tM: function() {
					return B
				},
				uF: function() {
					return ue
				},
				ut: function() {
					return st
				},
				vU: function() {
					return gt
				},
				wQ: function() {
					return le
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				a = t.n(o),
				u = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = t.n(u),
				v = t("../../../../node_modules/reselect/lib/index.js"),
				i = t("../../../../node_modules/moment/moment.js"),
				m = t.n(i),
				g = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				s = t("../react/common/selectors/userSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				d = t("../react/app/components/DeepLink/selectors.ts"),
				c = t("../react/common/constants/roles.ts"),
				f = t("../react/common/utils/hasRole.ts");

			function b(Z) {
				for (var se = 1; se < arguments.length; se++) {
					var Ee = arguments[se] != null ? Object(arguments[se]) : {},
						Te = Object.keys(Ee);
					typeof Object.getOwnPropertySymbols == "function" && Te.push.apply(Te, Object.getOwnPropertySymbols(Ee).filter(function(Le) {
						return Object.getOwnPropertyDescriptor(Ee, Le).enumerable
					})), Te.forEach(function(Le) {
						P(Z, Le, Ee[Le])
					})
				}
				return Z
			}

			function P(Z, se, Ee) {
				return se = w(se), se in Z ? Object.defineProperty(Z, se, {
					value: Ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[se] = Ee, Z
			}

			function w(Z) {
				var se = y(Z, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function y(Z, se) {
				if (typeof Z != "object" || Z === null) return Z;
				var Ee = Z[Symbol.toPrimitive];
				if (Ee !== void 0) {
					var Te = Ee.call(Z, se || "default");
					if (typeof Te != "object") return Te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(Z)
			}
			const O = Z => {
					const se = ue(Z);
					return se == null ? void 0 : se.account
				},
				_ = Z => {
					const se = (0, s.PR)(Z);
					if (se) {
						const Ee = se.id;
						return Z.accountAccess[Ee] || {}
					}
					return {}
				},
				T = Z => Z.accountsDetailed,
				D = (0, n.P1)("accountsDetailed", T),
				S = Z => Z.memberships,
				N = (0, v.P1)((0, n.P1)("memberships", S), d.U, (Z, se) => !!se && !!Z ? Z.filter(Ee => se.includes(Ee.id)) : Z),
				A = Z => Z.accountFlags && Z.accountFlags.data,
				I = Z => Z.accountFlags,
				L = (Z, se, Ee) => {
					const Te = A(Z);
					return !Te || !Te[se] ? null : Te[se][Ee]
				},
				k = Z => Z.accountFlags.isRequesting,
				U = (Z, ...se) => a()(Z, ["accountFlagsChanges", "data", ...se]),
				Q = Z => Z.accountFlagsChanges.isRequesting,
				ae = (0, v.P1)(A, I, (Z, se) => ({
					data: Z,
					meta: se
				})),
				pe = (Z, se, Ee) => !!(isEnterpriseSSEnabledSelector(Z) && L(Z, se, Ee)),
				ce = Z => Z.membership,
				ue = (0, n.P1)("membership", ce),
				F = (0, v.P1)(ue, ce, (Z, se) => ({
					data: Z,
					meta: se
				})),
				z = Z => {
					const {
						roles: se = []
					} = ue(Z) || {};
					return Boolean(se.find(Ee => Ee === "Super Administrator - All Privileges" || Ee === "Billing"))
				},
				B = Z => {
					const se = [c.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, f.n)(Z, se)
				},
				h = Z => {
					const se = _(Z),
						Ee = be.getMemberships(Z) ? l().asMutable(be.getMemberships(Z)) : [];
					if (!!Ee) return l().from(Ee.map(Te => b({}, Te, {
						lastSeen: se[Te.account.id] ? se[Te.account.id].lastSeen : null
					})).sort((Te, Le) => Te.lastSeen && Le.lastSeen ? Le.lastSeen - Te.lastSeen : 0))
				},
				x = Z => Z.filteredMemberships,
				G = (0, n.P1)("filteredMemberships", x),
				q = (0, v.P1)(ue, Z => Z == null ? void 0 : Z.permissions),
				ie = (0, v.P1)(q, Z => (0, e.Z)(se => {
					var Ee;
					return (Ee = Z == null ? void 0 : Z[se]) !== null && Ee !== void 0 ? Ee : {
						read: !1,
						edit: !1
					}
				})),
				ee = (0, v.P1)(ue, Z => Z == null ? void 0 : Z.policies),
				M = (Z, se, Ee) => {
					let Te = be.getMembership(Z);
					if (!Te) {
						const Le = be.getMemberships(Z);
						if (!Le || !se) return !1;
						Te = Le.find(xe => xe.account.id === se)
					}
					if (!Te || !Ee) return !1;
					try {
						return Ee(Te.permissions)
					} catch {
						return !1
					}
				},
				K = Z => {
					var se, Ee;
					return (se = (Ee = O(Z)) === null || Ee === void 0 ? void 0 : Ee.meta.has_pro_zones) !== null && se !== void 0 ? se : !1
				},
				V = Z => {
					var se, Ee;
					return (se = (Ee = O(Z)) === null || Ee === void 0 ? void 0 : Ee.meta.has_business_zones) !== null && se !== void 0 ? se : !1
				},
				$ = Z => V(Z) || K(Z),
				te = (Z, se) => {
					const Ee = me(Z, se);
					return !!Ee && !!Ee.enabled
				},
				me = (Z, se) => {
					const Ee = be.getMembership(Z),
						Te = Ee && Ee.account;
					return Te && Te.legacy_flags && Te.legacy_flags[se]
				},
				le = Z => te(Z, "custom_pages"),
				ge = Z => !!Z && Z["webhooks.webhooks.enabled"],
				ye = Z => L(Z, "bots", "enabled"),
				Ae = Z => L(Z, "billing", "annual_subscriptions_enable"),
				Be = Z => Z ? Boolean(L(Z, "ConstellationAI", "v2_ui")) : !1,
				Ce = Z => Z ? Boolean(L(Z, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Se = Z => Z ? Boolean(L(Z, "AIgateway", "enabled")) : !1,
				Ye = Z => me(Z, "enterprise_zone_quota"),
				Ke = Z => {
					const se = Ye(Z);
					return !se || !se.available ? -1 : se.available
				},
				Ve = Z => Z.accountMembers,
				H = (0, n.P1)("accountMembers", Ve),
				ve = Z => Z.accountMember && Z.accountMember.isRequesting,
				De = Z => Z.accountRoles,
				Xe = (0, n.P1)("accountRoles", De),
				Je = (Z, se) => {
					const Ee = be.getMemberships(Z),
						Te = Ee && Ee.find(Qe => Qe.account.id === se);
					if (Te) return Te.account.name.replace(" Account", " account");
					const Le = be.getMembership(Z),
						xe = Le && Le.account;
					return xe && xe.id === se ? xe.name : null
				},
				st = (Z, se) => {
					const Ee = be.getMemberships(Z),
						Te = Ee && Ee.find(Qe => Qe.account.id === se);
					if (Te) return Te.account.settings.access_approval_expiry;
					const Le = be.getMembership(Z),
						xe = Le && Le.account;
					return xe && xe.id === se ? xe.settings.access_approval_expiry : null
				},
				qe = (Z, se) => {
					const Ee = st(Z, se);
					return Ee ? m().utc(Ee).isAfter() : !1
				},
				pt = (Z, se, Ee) => {
					const Te = st(Z, se);
					let Le = Te ? m().utc(Te) : null;
					return !Le || !Le.isAfter() ? "" : Le && Le.year() === 3e3 ? Ee("account.access_approval.card_expiration_forever") : Ee("account.access_approval.card_expiration_text", {
						expiryTimestamp: Le.local().format(g.U.DateTime)
					})
				},
				Y = Z => Z && Z.member && Z.member.edit,
				de = (Z, se) => {
					const Ee = be.getMembership(Z),
						Te = Ee && Ee.account;
					return Te ? Te.id !== se : !1
				},
				he = Z => Z.dpa,
				Ue = (0, n.P1)("dpa", he),
				je = Z => Z.webhook,
				Ne = Z => Z.webhooks,
				et = (0, n.P1)("webhook", Ne),
				ct = Z => Z.accountLegoContract,
				mt = (0, n.P1)("accountLegoContract", ct),
				tt = Z => {
					const se = mt(Z);
					return (se == null ? void 0 : se.lego_state) ? se.lego_state : ""
				},
				Et = Z => tt(Z) === "signed",
				yt = Z => ct(Z).isRequesting,
				gt = Z => {
					const se = mt(Z);
					return se && se.subscription_type ? se.subscription_type : ""
				},
				ke = Z => gt(Z) !== "",
				be = {
					getMembership: ue,
					getMemberships: N,
					getFilteredMemberships: G,
					getAccountMembers: H,
					getAccountRoles: Xe
				},
				Fe = Z => Z.accountSingle,
				ht = (0, n.P1)("accountSingle", Fe),
				lt = Z => {
					const se = [c.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, c.V.ADMINISTRATOR];
					return (0, f.n)(Z, se)
				},
				bt = Z => (0, f.n)(Z, [c.V.BRAND_PROTECTION])
		},
		"../react/common/selectors/commonSelectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				FX: function() {
					return a
				},
				QG: function() {
					return o
				},
				TH: function() {
					return u
				},
				cZ: function() {
					return e
				}
			});

			function e(l) {
				const v = `__ACTIVE__${l}`;
				return i => {
					const m = i.application;
					return m && m.active[v]
				}
			}

			function o(l) {
				const v = `__TOGGLE__${l}`;
				return i => {
					const m = i.application;
					return m && m.toggles[v]
				}
			}

			function a(l) {
				return l && l.paginationData && l.paginationData.info && l.paginationData.info.total_count ? l.paginationData.info.total_count : 0
			}
			const u = l => l.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$f: function() {
					return c
				},
				AD: function() {
					return l
				},
				BF: function() {
					return d
				},
				Bs: function() {
					return O
				},
				Ci: function() {
					return q
				},
				DA: function() {
					return Ye
				},
				E6: function() {
					return r
				},
				Gy: function() {
					return Be
				},
				Hq: function() {
					return Ae
				},
				Ms: function() {
					return D
				},
				Nb: function() {
					return ye
				},
				Pj: function() {
					return Se
				},
				Q2: function() {
					return v
				},
				Qq: function() {
					return $
				},
				Td: function() {
					return w
				},
				Z: function() {
					return M
				},
				a: function() {
					return y
				},
				a5: function() {
					return V
				},
				c7: function() {
					return te
				},
				du: function() {
					return m
				},
				ec: function() {
					return Q
				},
				f: function() {
					return ge
				},
				fo: function() {
					return le
				},
				hL: function() {
					return K
				},
				ji: function() {
					return ie
				},
				jo: function() {
					return S
				},
				l9: function() {
					return Ve
				},
				lI: function() {
					return u
				},
				p1: function() {
					return b
				},
				pK: function() {
					return Ce
				},
				pf: function() {
					return n
				},
				qR: function() {
					return P
				},
				rV: function() {
					return i
				},
				u1: function() {
					return g
				},
				w4: function() {
					return s
				},
				yD: function() {
					return ee
				}
			});
			var e = t("../react/utils/url.ts");

			function o(H, ve) {
				return H && H[ve]
			}
			const a = H => !u(H).isRequesting;

			function u(H) {
				return H.entitlements.zone
			}

			function l(H) {
				return u(H).data
			}
			const v = H => {
				var ve, De;
				return ((ve = u(H).paginationData) === null || ve === void 0 || (De = ve.options) === null || De === void 0 ? void 0 : De.editedDate) || {}
			};

			function i(H, ve) {
				const De = l(H);
				return De ? o(De, ve) : void 0
			}
			const m = (H, ve) => i(H, ve) === !0;

			function g(H) {
				return H.entitlements.account
			}

			function n(H) {
				return g(H).data
			}
			const s = H => {
				var ve, De;
				return ((ve = g(H).paginationData) === null || ve === void 0 || (De = ve.options) === null || De === void 0 ? void 0 : De.editedDate) || {}
			};

			function r(H) {
				return !g(H).isRequesting
			}

			function d(H, ve) {
				const De = n(H);
				return De ? o(De, ve) : void 0
			}

			function c(H, ve) {
				return d(H, ve) === !0
			}

			function f(H, ve) {
				return ve.every(De => c(H, De))
			}

			function b(H) {
				return c(H, "contract.customer_enabled")
			}

			function P(H) {
				return c(H, "contract.self_service_allowed")
			}

			function w(H) {
				return c(H, "billing.partners_managed")
			}
			const y = H => b(H) && P(H),
				O = H => c(H, "enterprise.ecp_allowed");

			function _(H) {
				return T(H) || c(H, "argo.allow_smart_routing") || c(H, "argo.allow_tiered_caching") || c(H, "rate_limiting.enabled") || c(H, "ctm.enabled") || c(H, "workers.enabled") || c(H, "workers.kv_store.enabled") || c(H, "stream.enabled")
			}
			const T = H => m(H, "argo.allow_smart_routing") || m(H, "argo.allow_tiered_caching"),
				D = H => c(H, "zone.cname_setup_allowed") || c(H, "zone.partial_setup_allowed") || m(H, "zone.partial_setup_allowed"),
				S = H => c(H, "argo.allow_smart_routing") || m(H, "argo.allow_smart_routing"),
				N = H => c(H, "argo.allow_tiered_caching") || m(H, "argo.allow_tiered_caching"),
				A = H => S(H) || N(H),
				I = H => c(H, "ctm.enabled"),
				L = H => {
					const ve = d(H, "ctm.load_balancers");
					return typeof ve == "number" ? ve : 0
				},
				k = H => {
					const ve = d(H, "ctm.pools");
					return typeof ve == "number" ? ve : 0
				},
				U = H => {
					const ve = d(H, "ctm.origins");
					return typeof ve == "number" ? ve : 0
				},
				Q = H => c(H, "workers.enabled"),
				ae = H => c(H, "stream.enabled"),
				pe = H => {
					const ve = d(H, "access.users_allowed");
					return typeof ve == "number" ? ve : 0
				},
				ce = H => pe(H) > 0,
				ue = H => {
					const ve = i(H, "dedicated_certificates");
					return typeof ve == "number" ? ve : 0
				},
				F = H => ue(H) > 0,
				z = H => {
					const ve = i(H, "rate_limiting.max_rules");
					return typeof ve == "number" ? ve : 0
				},
				B = H => c(H, "rate_limiting.enabled"),
				h = H => {
					const ve = i(H, "page_rules");
					return typeof ve == "number" ? ve : 0
				},
				x = H => h(H) > 0,
				G = H => {
					const ve = d(H, "dns_firewall.max_clusters_allowed");
					return typeof ve == "number" ? ve : 0
				},
				q = H => G(H) > 0,
				ie = H => m(H, "zone.advanced_certificate_manager") || c(H, "zone.advanced_certificate_manager"),
				ee = H => i(H, "authoritative_dns.proxy_record_allowed") === !1 || d(H, "authoritative_dns.proxy_record_allowed") === !1,
				M = H => c(H, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				K = H => i(H, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				V = H => {
					const ve = i(H, "authoritative_dns.min_record_ttl_allowed");
					return typeof ve == "number" && ve > 1 ? ve : 60
				},
				$ = H => c(H, "foundation_dns.advanced_nameservers_allowed") || m(H, "foundation_dns.advanced_nameservers_allowed"),
				te = H => c(H, "authoritative_dns.account_custom_nameservers_allowed"),
				me = H => m(H, "authoritative_dns.zone_custom_nameservers_allowed"),
				le = H => me(H) || te(H),
				ge = (H, ve) => ((0, e.el)(window.location.pathname) ? i : d)(H, ve),
				ye = H => ((0, e.el)(window.location.pathname) ? l : n)(H),
				Ae = H => c(H, "authoritative_dns.multi_provider_allowed") || m(H, "authoritative_dns.multi_provider_allowed"),
				Be = H => m(H, "authoritative_dns.cname_flattening_allowed"),
				Ce = H => c(H, "secondary_dns.secondary_overrides") || m(H, "secondary_dns.secondary_overrides"),
				Se = H => c(H, "authoritative_dns.custom_soa_allowed") || m(H, "authoritative_dns.custom_soa_allowed"),
				Ye = H => c(H, "authoritative_dns.custom_ns_ttl_allowed") || m(H, "authoritative_dns.custom_ns_ttl_allowed"),
				Ke = H => c(H, "secondary.create_zone"),
				Ve = H => $(H) || te(H) || Ae(H) || Ke(H) || Ce(H) || Se(H) || Ye(H)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				r: function() {
					return l
				},
				v: function() {
					return v
				}
			});
			var e = t("../react/utils/i18n.ts"),
				o = t("../../../common/intl/intl-types/src/index.ts"),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/utils/bootstrap.ts");
			const l = i => {
				if ((0, u.gm)()) return a.Z.set(e.ly, e.ZW), e.ZW;
				const m = i.userCommPreferences.data;
				if (m == null ? void 0 : m["language-locale"]) return (0, e.i_)(m["language-locale"]), m["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const g = (0, e.Kd)();
					return v(g) ? g : e.ZW
				}
			};

			function v(i) {
				const m = Object.keys(o.Q).find(g => o.Q[g] === i);
				return !!i && typeof i == "string" && m != null && (0, e.S8)(m)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$8: function() {
					return l
				},
				BG: function() {
					return g
				},
				BY: function() {
					return y
				},
				GP: function() {
					return c
				},
				GU: function() {
					return O
				},
				PR: function() {
					return a
				},
				h$: function() {
					return P
				},
				h8: function() {
					return n
				},
				kk: function() {
					return b
				},
				l8: function() {
					return i
				},
				mV: function() {
					return f
				},
				vW: function() {
					return v
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const o = _ => _.user,
				a = (0, e.P1)("user", o),
				u = _ => {
					var T;
					return (T = a(_)) === null || T === void 0 ? void 0 : T.email.endsWith("@cloudflare.com")
				},
				l = _ => {
					var T;
					return !!((T = a(_)) === null || T === void 0 ? void 0 : T.id)
				},
				v = _ => {
					const T = a(_);
					if (!!T) return T.first_name && T.last_name ? `${T.first_name} ${T.last_name}` : T.email
				},
				i = _ => {
					const T = a(_);
					return T && T.has_enterprise_zones
				},
				m = _ => _.userCommPreferences,
				g = (0, e.P1)("userCommPreferences", m),
				n = _ => {
					const T = a(_);
					return T && T.email_verified
				},
				s = _ => {
					const T = g(_);
					return T && T.preferences.marketing_communication
				},
				r = _ => _.userDetails,
				d = (0, e.P1)("userDetails", r),
				c = _ => {
					const T = d(_);
					return T && T["2FA-RECOVERY"] === "scheduled"
				},
				f = _ => {
					const T = d(_);
					return T && T["2FA-RECOVERY"] === "interrupted"
				},
				b = _ => {
					const T = d(_);
					return T == null ? void 0 : T["NEW-USER-EMAIL"]
				},
				P = _ => _.gates.assignments,
				w = (_, T) => _ && _[T];

			function y(_, T) {
				const D = P(_);
				return D ? w(D, T) : void 0
			}
			const O = (_, T) => y(_, T) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$4: function() {
					return D
				},
				$t: function() {
					return Xe
				},
				A4: function() {
					return b
				},
				Cu: function() {
					return P
				},
				DQ: function() {
					return $
				},
				Ej: function() {
					return N
				},
				FH: function() {
					return y
				},
				ID: function() {
					return B
				},
				Ko: function() {
					return Be
				},
				Le: function() {
					return le
				},
				Ly: function() {
					return q
				},
				M3: function() {
					return Ve
				},
				N8: function() {
					return Ke
				},
				NY: function() {
					return K
				},
				Ns: function() {
					return x
				},
				Ox: function() {
					return qe
				},
				P4: function() {
					return A
				},
				RO: function() {
					return F
				},
				Tr: function() {
					return Ae
				},
				U: function() {
					return w
				},
				Ug: function() {
					return _
				},
				V6: function() {
					return H
				},
				WR: function() {
					return pt
				},
				Xg: function() {
					return f
				},
				ZB: function() {
					return me
				},
				_y: function() {
					return h
				},
				cU: function() {
					return Ce
				},
				cg: function() {
					return V
				},
				d2: function() {
					return ae
				},
				il: function() {
					return G
				},
				jN: function() {
					return L
				},
				jg: function() {
					return ee
				},
				kC: function() {
					return S
				},
				kf: function() {
					return ve
				},
				ko: function() {
					return ue
				},
				mK: function() {
					return Je
				},
				nA: function() {
					return c
				},
				oY: function() {
					return I
				},
				qM: function() {
					return ge
				},
				rq: function() {
					return M
				},
				tS: function() {
					return T
				},
				tU: function() {
					return U
				},
				vB: function() {
					return st
				},
				vM: function() {
					return k
				},
				wH: function() {
					return O
				},
				wn: function() {
					return te
				},
				xU: function() {
					return Q
				},
				xw: function() {
					return ye
				},
				z5: function() {
					return z
				},
				zO: function() {
					return Se
				},
				zW: function() {
					return De
				},
				zh: function() {
					return pe
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/app/redux/normalizer.js"),
				a = t("../../../../node_modules/lodash/get.js"),
				u = t.n(a),
				l = t("../../../../node_modules/moment/moment.js"),
				v = t.n(l),
				i = t("../react/common/constants/billing/index.ts");

			function m(Y) {
				for (var de = 1; de < arguments.length; de++) {
					var he = arguments[de] != null ? Object(arguments[de]) : {},
						Ue = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && Ue.push.apply(Ue, Object.getOwnPropertySymbols(he).filter(function(je) {
						return Object.getOwnPropertyDescriptor(he, je).enumerable
					})), Ue.forEach(function(je) {
						g(Y, je, he[je])
					})
				}
				return Y
			}

			function g(Y, de, he) {
				return de = n(de), de in Y ? Object.defineProperty(Y, de, {
					value: he,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[de] = he, Y
			}

			function n(Y) {
				var de = s(Y, "string");
				return typeof de == "symbol" ? de : String(de)
			}

			function s(Y, de) {
				if (typeof Y != "object" || Y === null) return Y;
				var he = Y[Symbol.toPrimitive];
				if (he !== void 0) {
					var Ue = he.call(Y, de || "default");
					if (typeof Ue != "object") return Ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (de === "string" ? String : Number)(Y)
			}
			const r = (0, o.P1)("zone", Y => Y.zone),
				d = Y => {
					var de;
					return (de = Y.zoneVersioning) === null || de === void 0 ? void 0 : de.zoneVersionSelector
				},
				c = (0, e.P1)(r, d, (Y, de) => {
					var he, Ue, je;
					let Ne;
					if (Array.isArray(Y) && Y.length === 1 ? Ne = Y[0] : Y && !Array.isArray(Y) && (Ne = Y), !Ne) return;
					const et = !!(de == null ? void 0 : de.enabled);
					return m({}, Ne, Ne.name && {
						name: et ? de.rootZoneName : Ne.name
					}, {
						versioning: {
							enabled: et,
							isRoot: !((he = Ne.name) === null || he === void 0 ? void 0 : he.endsWith(".config.cfdata.org")),
							version: et ? de.selectedVersion : 0,
							rootZoneId: et ? de.rootZoneId : (Ue = (je = Ne) === null || je === void 0 ? void 0 : je.id) !== null && Ue !== void 0 ? Ue : ""
						}
					})
				}),
				f = Y => Y.zone,
				b = (0, e.P1)(c, f, (Y, de) => ({
					data: Y,
					meta: de
				})),
				P = Y => {
					var de, he;
					return (de = (he = c(Y)) === null || he === void 0 ? void 0 : he.id) !== null && de !== void 0 ? de : ""
				},
				w = Y => Y.zones,
				y = Y => Y.zonesRoot,
				O = Y => Y.zonesAccount,
				_ = (0, o.P1)("zones", w),
				T = (0, o.P1)("zonesRoot", y),
				D = (0, o.P1)("zonesAccount", O);

			function S(Y) {
				const de = c(Y);
				return de ? de.created_on : null
			}

			function N(Y, de, he) {
				const Ue = S(Y);
				if (!Ue) return;
				const je = v().duration(de, he),
					Ne = new Date(Ue),
					et = new Date(new Date().getTime() - je.asMilliseconds());
				return Ne.getTime() > et.getTime()
			}

			function A(Y) {
				const de = c(Y);
				return de ? de.status : null
			}

			function I(Y) {
				const de = c(Y);
				return de ? de.type : null
			}

			function L(Y) {
				return (Y == null ? void 0 : Y.plan_pending) ? Y == null ? void 0 : Y.plan_pending : Y == null ? void 0 : Y.plan
			}

			function k(Y) {
				const de = c(Y);
				if (!de) return;
				const he = L(de);
				return he && he.legacy_id
			}

			function U(Y, de) {
				const he = L(Y);
				return !!he && i.Gs.indexOf(he.legacy_id) >= i.Gs.indexOf(de)
			}

			function Q(Y) {
				return !!Y && Y.status === "initializing"
			}

			function ae(Y) {
				return !!Y && Y.status === "pending"
			}

			function pe(Y) {
				return !!Y && Y.status === "active"
			}

			function ce(Y, de) {
				if (!Y) return !1;
				const he = L(Y);
				return !!he && he.legacy_id === de
			}

			function ue(Y) {
				return ce(Y, "enterprise")
			}
			const F = Y => ue(c(Y));

			function z(Y) {
				return ce(Y, "business")
			}
			const B = Y => z(c(Y));

			function h(Y) {
				return ce(Y, "pro")
			}

			function x(Y) {
				return ce(Y, "free")
			}
			const G = Y => x(c(Y));

			function q(Y) {
				return !ue(Y)
			}

			function ie(Y) {
				return Y && Y.owner
			}

			function ee(Y, de) {
				const he = ie(de);
				return !!he && he.type === "user" && he.id === Y.id
			}

			function M(Y) {
				const de = c(Y);
				return !!de && de.type === "partial"
			}

			function K(Y) {
				const de = c(Y);
				return !!de && de.type === "secondary"
			}
			const V = Y => {
					var de;
					const he = c(Y);
					return !!(he == null ? void 0 : he.host) && !!((de = he.plan) === null || de === void 0 ? void 0 : de.externally_managed)
				},
				$ = Y => {
					const de = _(Y);
					return de && de.some(ue)
				},
				te = (Y, de) => {
					const he = c(Y);
					return he && he.betas ? he.betas.includes(de) : !1
				},
				me = (Y, ...de) => u()(Y, ["zoneFlags", "data", ...de]),
				le = (Y, ...de) => u()(Y, ["accountFlags", "data", ...de]),
				ge = Y => Y.accountFlags.isRequesting,
				ye = Y => Y.zoneFlags.isRequesting,
				Ae = (Y, ...de) => u()(Y, ["zoneFlagsChanges", "data", ...de]),
				Be = Y => Y.zoneFlagsChanges.isRequesting,
				Ce = Y => Y.zoneFlags && Y.zoneFlags.data,
				Se = Y => Y.zoneFlags,
				Ye = (0, e.P1)(Ce, Se, (Y, de) => ({
					data: Y,
					meta: de
				})),
				Ke = (0, o.P1)("abuseUrls", Y => Y.overview.abuseUrls),
				Ve = Y => {
					const de = c(Y);
					return de ? `/${de.account.id}/${de.name}` : null
				},
				H = Y => Y.zoneMarketingCampaigns,
				ve = Y => Y.overview.zoneBlocks.data,
				De = Y => Y.overview.zoneBlocks.isRequesting,
				Xe = Y => Y.overview.zoneBlocks.hasData,
				Je = Y => {
					var de, he;
					return (Y == null || (de = Y.overview.zoneBlocks) === null || de === void 0 || (he = de.paginationData) === null || he === void 0 ? void 0 : he.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				st = Y => Y.overview.zoneBlocksReview.isRequesting,
				qe = Y => Y.overview.zoneHold,
				pt = (0, o.P1)("zoneHold", qe)
		},
		"../react/common/utils/formatDate.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			E.Z = (o, a, u = !1) => (0, e.p6)(o, a, u)
		},
		"../react/common/utils/hasRole.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				n: function() {
					return o
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const o = (a, u) => {
				const {
					roles: l = []
				} = (0, e.uF)(a) || {};
				return u.some(v => l.includes(v))
			}
		},
		"../react/common/utils/isGuards.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Q$: function() {
					return a
				},
				t: function() {
					return v
				},
				v5: function() {
					return u
				},
				zE: function() {
					return l
				}
			});
			var e = t("../react/common/constants/index.ts"),
				o = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const a = i => i ? ["page", "per_page", "count", "total_count"].every(g => g in i && i[g]) : !1,
				u = (i = "") => e.Dy.includes(i.toLowerCase()),
				l = i => i !== null && typeof i == "object" && "name" in i && "size" in i && "type" in i && typeof i.slice == "function",
				v = i => (0, o.Z)(i)
		},
		"../react/common/utils/startViewTransition.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				o: function() {
					return e
				}
			});
			const e = o => {
				if (!document.startViewTransition) {
					o();
					return
				}
				document.startViewTransition(() => o())
			}
		},
		"../react/common/utils/useQueryCache.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				o: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function o(i) {
				for (var m = 1; m < arguments.length; m++) {
					var g = arguments[m] != null ? Object(arguments[m]) : {},
						n = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(g).filter(function(s) {
						return Object.getOwnPropertyDescriptor(g, s).enumerable
					})), n.forEach(function(s) {
						a(i, s, g[s])
					})
				}
				return i
			}

			function a(i, m, g) {
				return m = u(m), m in i ? Object.defineProperty(i, m, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[m] = g, i
			}

			function u(i) {
				var m = l(i, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function l(i, m) {
				if (typeof i != "object" || i === null) return i;
				var g = i[Symbol.toPrimitive];
				if (g !== void 0) {
					var n = g.call(i, m || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(i)
			}
			const v = i => {
				const m = (0, e.useQueryClient)(),
					g = y => {
						var O;
						return m.getQueriesData((O = y) !== null && O !== void 0 ? O : i)
					},
					n = y => {
						var O;
						return m.getQueryData((O = y) !== null && O !== void 0 ? O : i)
					},
					s = y => {
						var O;
						return m.getQueriesData({
							queryKey: (O = y) !== null && O !== void 0 ? O : i,
							stale: !0
						})
					},
					r = (y, O) => {
						var _;
						m.setQueryData((_ = O) !== null && _ !== void 0 ? _ : i, y)
					},
					d = async y => {
						var O;
						await m.refetchQueries((O = y) !== null && O !== void 0 ? O : i)
					}, c = async (y, O) => {
						var _, T;
						await m.invalidateQueries((_ = y) !== null && _ !== void 0 ? _ : i, o({
							refetchActive: !1
						}, (T = O) !== null && T !== void 0 ? T : {}))
					}, f = async (y, O) => {
						const _ = y || (T => {
							var D;
							return (T == null || (D = T.queryKey) === null || D === void 0 ? void 0 : D[0]) === i
						});
						await m.invalidateQueries(o({
							predicate: _,
							refetchActive: !1,
							refetchInactive: !1
						}, O))
					};
				return {
					refetch: d,
					cancelData: async () => {
						await m.cancelQueries(i)
					},
					invalidate: c,
					setData: r,
					getDataStale: s,
					getData: g,
					prefetchQuery: (y, O) => {
						var _;
						return m.prefetchQuery((_ = O) !== null && _ !== void 0 ? _ : i, y)
					},
					getQueryData: n,
					predicateInvalidate: f,
					batchInvalidate: async ({
						queryKeysToInvalidate: y = [],
						queryKeysToPredicateInvalidate: O = [],
						refetchActive: _ = !1,
						refetchInactive: T = !1
					}) => {
						const D = y.map(N => c(N)),
							S = O.map(N => f(A => {
								var I;
								return (A == null || (I = A.queryKey) === null || I === void 0 ? void 0 : I[0]) === N
							}, {
								refetchActive: _,
								refetchInactive: T
							}));
						await Promise.all([...D, ...S])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(W, E, t) {
			"use strict";
			t.d(E, {
				K2: function() {
					return o
				},
				Lb: function() {
					return a
				},
				XI: function() {
					return u
				},
				bK: function() {
					return m
				},
				jk: function() {
					return i
				},
				wb: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = g => /^https?:\/\/(.*)/.test(g),
				a = g => e.default.hostname.test(g),
				u = g => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(g),
				l = g => /^[!-~]+$/.test(g),
				v = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				i = g => v.test(g),
				m = g => !!g && !!g.length && /^[ -~]+$/.test(g)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(W, E, t) {
			"use strict";
			t.d(E, {
				DZ: function() {
					return u
				},
				GA: function() {
					return g
				},
				hT: function() {
					return v
				},
				p6: function() {
					return a
				},
				qc: function() {
					return l
				},
				w9: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e);
			const a = r => o().utc(r).format("YYYY-MM-DD"),
				u = r => o().utc(r).format(),
				l = r => o().utc(r).startOf("minute").format(),
				v = r => new Date(r),
				i = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				m = r => {
					const d = r / 60 / 60 / 1e3;
					return i[Object.keys(i).sort((c, f) => f - c).find(c => d >= c)]
				},
				g = (r, d = c => c.avg && c.avg.sampleInterval ? c.avg.sampleInterval : 1) => r.length === 0 ? 1 : r.reduce((c, f) => c + d(f), 0) / r.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				s = r => n[r]
		},
		"../react/pages/caching/tracking.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o.CHANGED_ZONE_SETTINGS = "change zone setting", o
			}({})
		},
		"../react/pages/d1/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/dns/dns-records/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/email/types.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
			const u = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/config.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				jk: function() {
					return P
				},
				w8: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				a = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				u = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function l(y) {
				for (var O = 1; O < arguments.length; O++) {
					var _ = arguments[O] != null ? Object(arguments[O]) : {},
						T = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(_).filter(function(D) {
						return Object.getOwnPropertyDescriptor(_, D).enumerable
					})), T.forEach(function(D) {
						v(y, D, _[D])
					})
				}
				return y
			}

			function v(y, O, _) {
				return O = i(O), O in y ? Object.defineProperty(y, O, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[O] = _, y
			}

			function i(y) {
				var O = m(y, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function m(y, O) {
				if (typeof y != "object" || y === null) return y;
				var _ = y[Symbol.toPrimitive];
				if (_ !== void 0) {
					var T = _.call(y, O || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(y)
			}
			const g = "Notifications",
				n = "notification",
				s = (0, e.BC)`/${"accountId"}`,
				r = (0, e.BC)`${s}/notifications`,
				d = (0, e.BC)`${r}/destinations`,
				c = (0, e.BC)`${r}/create`,
				f = (0, e.BC)`${c}/${"alertType"}`,
				b = (0, e.BC)`${r}/edit/${"alertId"}`,
				P = l({
					account: s,
					alerts: r,
					destinations: d,
					createAlert: c,
					createAlertWithSelection: f,
					editAlert: b
				}, o._j, a._j),
				w = l({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, u.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				_j: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				a = (0, e.BC)`${o}/pagerduty/connect`,
				u = (0, e.BC)`${o}/pagerduty/register`,
				l = (0, e.BC)`${o}/pagerduty`,
				v = {
					pagerDutyConnect: a,
					pagerDutyRegister: u,
					pagerDutyList: l
				};
			var i = null
		},
		"../react/pages/home/alerts/tracking.ts": function(W, E, t) {
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
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(W, E, t) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(W, E, t) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				AA: function() {
					return K
				},
				AN: function() {
					return lt
				},
				AY: function() {
					return Ee
				},
				Ac: function() {
					return Ct
				},
				Am: function() {
					return P
				},
				B2: function() {
					return B
				},
				BB: function() {
					return N
				},
				BF: function() {
					return Ne
				},
				BQ: function() {
					return be
				},
				E8: function() {
					return Z
				},
				Fl: function() {
					return Le
				},
				Fu: function() {
					return L
				},
				Gc: function() {
					return tt
				},
				Hc: function() {
					return Pt
				},
				IO: function() {
					return Fe
				},
				JK: function() {
					return Ke
				},
				K: function() {
					return T
				},
				LI: function() {
					return ke
				},
				LX: function() {
					return Ue
				},
				L_: function() {
					return De
				},
				Ly: function() {
					return Nt
				},
				MR: function() {
					return x
				},
				Mj: function() {
					return q
				},
				NB: function() {
					return at
				},
				Oe: function() {
					return Lt
				},
				Or: function() {
					return ee
				},
				P5: function() {
					return ft
				},
				PE: function() {
					return Ae
				},
				Pd: function() {
					return wt
				},
				Pk: function() {
					return Ce
				},
				Pp: function() {
					return st
				},
				Q1: function() {
					return I
				},
				Qr: function() {
					return je
				},
				Qv: function() {
					return Be
				},
				Rp: function() {
					return ut
				},
				S7: function() {
					return It
				},
				Sh: function() {
					return xe
				},
				Sl: function() {
					return xt
				},
				TZ: function() {
					return M
				},
				Tg: function() {
					return Ve
				},
				Tp: function() {
					return mt
				},
				Uy: function() {
					return Tt
				},
				Vw: function() {
					return U
				},
				W3: function() {
					return Y
				},
				WR: function() {
					return ht
				},
				WX: function() {
					return me
				},
				XF: function() {
					return bt
				},
				Xb: function() {
					return V
				},
				Zs: function() {
					return ve
				},
				_f: function() {
					return et
				},
				b4: function() {
					return te
				},
				bc: function() {
					return ne
				},
				c2: function() {
					return h
				},
				cE: function() {
					return we
				},
				dh: function() {
					return Je
				},
				fE: function() {
					return Xe
				},
				g7: function() {
					return ye
				},
				hO: function() {
					return pt
				},
				hV: function() {
					return Rt
				},
				hk: function() {
					return w
				},
				hr: function() {
					return $
				},
				it: function() {
					return qe
				},
				j3: function() {
					return Ge
				},
				jN: function() {
					return Ye
				},
				jo: function() {
					return Bt
				},
				k3: function() {
					return Dt
				},
				m8: function() {
					return ue
				},
				nm: function() {
					return Qe
				},
				oW: function() {
					return se
				},
				pH: function() {
					return F
				},
				pi: function() {
					return ce
				},
				r4: function() {
					return re
				},
				rI: function() {
					return G
				},
				s7: function() {
					return Et
				},
				sg: function() {
					return nt
				},
				tB: function() {
					return f
				},
				tN: function() {
					return ge
				},
				u_: function() {
					return Ot
				},
				vV: function() {
					return ct
				},
				vc: function() {
					return Se
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				a = t("../../../../node_modules/moment/moment.js"),
				u = t.n(a),
				l = t("../../../common/util/types/src/api/domain.ts"),
				v = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				i = t("../react/utils/url.ts"),
				m = t("../react/pages/home/domain-registration/config.ts"),
				g = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function s(p) {
				for (var C = 1; C < arguments.length; C++) {
					var X = arguments[C] != null ? Object(arguments[C]) : {},
						_e = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(X).filter(function(Pe) {
						return Object.getOwnPropertyDescriptor(X, Pe).enumerable
					})), _e.forEach(function(Pe) {
						r(p, Pe, X[Pe])
					})
				}
				return p
			}

			function r(p, C, X) {
				return C = d(C), C in p ? Object.defineProperty(p, C, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[C] = X, p
			}

			function d(p) {
				var C = c(p, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function c(p, C) {
				if (typeof p != "object" || p === null) return p;
				var X = p[Symbol.toPrimitive];
				if (X !== void 0) {
					var _e = X.call(p, C || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(p)
			}

			function f(p) {
				return p.filter(C => C.isSelected).reduce((C, {
					name: X,
					fees: _e,
					isZoneEntitlementPresent: Pe
				}) => Pe || !(0, e.isNumber)(_e == null ? void 0 : _e.transfer_fee) ? C : Ct(X) ? C + (_e == null ? void 0 : _e.transfer_fee) * 2 : C + (_e == null ? void 0 : _e.transfer_fee), 0)
			}

			function b(p) {
				return p.filter(C => C.registrar.toLowerCase() === "godaddy")
			}
			const P = "MMM D, YYYY";

			function w(p, C, X, _e) {
				var Pe, $e, Ze, ze, ot, _t, rt, Re, Ut, St, kt, jt;
				const He = p[C.name],
					Gt = () => Ct(C.name) ? u()(C.expires_at).add(2, "years").format(P) : u()(C.expires_at).add(1, "year").format(P);
				return s({
					name: C.name,
					zone: He,
					entitlements: X,
					registryCheck: _e,
					nameservers: C.name_servers,
					isAvailable: C.available,
					lastKnownStatus: C.last_known_status,
					authCode: C.auth_code,
					isEnterpriseZone: (He == null || (Pe = He.plan) === null || Pe === void 0 ? void 0 : Pe.legacy_id) === "enterprise",
					isActiveZone: (He == null ? void 0 : He.status) === "active",
					corResponsesPending: C.cor_responses_pending,
					isCorLocked: C.cor_locked,
					corLockedUntil: C.cor_locked_until ? u()(C.cor_locked_until).format(P) : null,
					isFullZone: (He == null ? void 0 : He.type) == n.xd.Full,
					isLocked: C.locked,
					registrar: C.current_registrar || m.JM,
					zoneId: He == null ? void 0 : He.id,
					currentExpiration: u()(C.expires_at).format(P),
					newExpiration: Gt(),
					lastEntitledAt: C.last_entitled_at ? new Date(C.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(X) && !!X.find(Wt => Wt.id === m.g5 && Wt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: C.transfer_in && _(C.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: C.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: C.transfer_in,
					transferOut: C.transfer_out,
					autoRenew: C.auto_renew === !0,
					lastTransferredAt: C.last_transferred_at,
					createdAt: C.created_at,
					paymentExpiresAt: u()(C.payment_expires_at).isValid() ? u()(C.payment_expires_at) : u()(C.expires_at).isValid() ? u()(C.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: ($e = C.contacts) === null || $e === void 0 || (Ze = $e.administrator) === null || Ze === void 0 ? void 0 : Ze.id,
						[n.l2.Billing]: (ze = C.contacts) === null || ze === void 0 || (ot = ze.billing) === null || ot === void 0 ? void 0 : ot.id,
						[n.l2.Registrant]: (_t = C.contacts) === null || _t === void 0 || (rt = _t.registrant) === null || rt === void 0 ? void 0 : rt.id,
						[n.l2.Technical]: (Re = C.contacts) === null || Re === void 0 || (Ut = Re.technical) === null || Ut === void 0 ? void 0 : Ut.id
					},
					landing: C.landing,
					privacy: C.privacy,
					whois: C.whois,
					emailVerified: C.email_verified,
					materialChanges: D(C.material_changes),
					corChanges: C.cor_changes ? N(Object.assign(s({}, O), C.cor_changes)) : {},
					registryStatuses: C.registry_statuses ? C.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (St = C.domain_protection_services) === null || St === void 0 ? void 0 : St.status
					},
					deletion: {
						isDeletable: C == null || (kt = C.deletion) === null || kt === void 0 ? void 0 : kt.is_deletable
					},
					premiumType: C == null ? void 0 : C.premium_type,
					fees: C == null ? void 0 : C.fees
				}, C.domain_move && {
					domainMove: {
						ineligibilityReasons: (jt = C.domain_move) === null || jt === void 0 ? void 0 : jt.ineligibility_reasons
					}
				}, C.actionable_metadata && {
					actionableMetadata: y(C.actionable_metadata)
				}, C.policies && {
					policies: s({}, C.policies.suspension && {
						suspension: {
							parked: C.policies.suspension.parked,
							parkingReason: C.policies.suspension.parking_reason,
							paymentExpired: C.policies.suspension.payment_expired
						}
					})
				})
			}

			function y(p) {
				return p.map(C => ({
					accountContext: C.account_context,
					createdAt: C.created_at,
					expiresAt: C.expires_at,
					sentAt: C.sent_at,
					status: C.status,
					type: C.type
				}))
			}
			const O = {
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

			function _(p) {
				switch (p.enter_auth_code) {
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

			function T(p) {
				let C = p.extensions;
				(C == null ? void 0 : C.application_purpose) && (C == null ? void 0 : C.nexus_category) && (p.extensions = {
					nexusCategory: C.nexus_category,
					applicationPurpose: C.application_purpose
				});
				let X = s({}, typeof p.id == "string" ? {
					id: p.id
				} : {}, {
					first_name: p.firstName,
					organization: p.organization,
					address: p.address1,
					city: p.city,
					state: p.state || "N/A",
					zip: p.zip,
					country: p.country,
					phone: p.phone,
					email: p.email,
					fax: "",
					last_name: p.lastName,
					address2: p.address2,
					email_verified: p.emailVerified
				}, p.extensions ? {
					extensions: {
						nexus_category: p.extensions.nexusCategory,
						application_purpose: p.extensions.applicationPurpose
					}
				} : {});
				return H(X)
			}

			function D(p) {
				let C = [];
				const X = {
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
				for (const _e in p) {
					const Pe = p[_e],
						$e = X[Pe];
					C.push($e)
				}
				return C
			}
			const S = p => {
				if (!p) return null;
				let C = p;
				return p.includes("C31") && (C = "C31"), p.includes("C32") && (C = "C32"), C
			};

			function N(p) {
				return s({}, typeof p.id == "string" ? {
					id: p.id
				} : {}, {
					firstName: p.first_name,
					organization: p.organization,
					address1: p.address,
					city: p.city,
					state: p.state,
					zip: p.zip,
					country: p.country,
					phone: p.phone.trim(),
					email: p.email.trim(),
					lastName: p.last_name,
					address2: p.address2,
					emailVerified: p.email_verified
				}, p.extensions ? {
					extensions: {
						nexusCategory: S(p.extensions.nexus_category),
						applicationPurpose: p.extensions.application_purpose
					}
				} : {})
			}

			function A(p = {}) {
				const C = {
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
						}, p.zone && p.zone.plan || {}),
						type: EZoneType.Full
					}, p.zone || {}),
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
					transferConditions: s({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, p.transferConditions || {}),
					transferIn: s({
						unlock_domain: EApiTransferStatus.UNKNOWN,
						disable_privacy: EApiTransferStatus.UNKNOWN,
						enter_auth_code: EApiTransferStatus.UNKNOWN,
						approve_transfer: EApiTransferStatus.UNKNOWN,
						accept_foa: EApiTransferStatus.UNKNOWN,
						can_cancel_transfer: !1
					}, p.transferIn || {}),
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
				return Object.assign(C, p)
			}

			function I(p = {}) {
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
				}, p)
			}

			function L(p) {
				const C = m.Py.concat(m.ui).reduce((X, _e) => s({}, X, {
					[_e]: []
				}), {});
				return p.forEach(X => {
					let _e = k(X.registrar);
					_e in C || (_e = m.ui), nt(X.name) && (_e = "uk"), C[_e].push(X)
				}), Object.keys(C).sort((X, _e) => X.localeCompare(_e)).map(X => ({
					registrar: X,
					domains: C[X]
				})).filter(X => X.domains.length > 0)
			}

			function k(p) {
				return p == null ? void 0 : p.toLowerCase().replace(/\s|,|\./g, "")
			}

			function U(p) {
				if (!p || !p.registrar) return "unknown";
				if (nt(p.name)) return "uk";
				const C = k(p.registrar);
				return C in m.gM ? C : "unknown"
			}
			const Q = [];

			function ae(p) {
				return Q.some(C => p.endsWith("." + C))
			}

			function pe(p) {
				return !p.isEnterpriseZone || !Array.isArray(p.entitlements) ? !1 : !!p.entitlements.find(({
					id: C,
					allocation: X
				}) => C === m.g5 && X.value === !0)
			}

			function ce(p) {
				var C;
				const X = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let _e = !1,
					Pe = null;
				return (C = p.registryStatuses) === null || C === void 0 || C.some($e => {
					X.includes($e) && (Pe = $e, _e = !0)
				}), [_e, Pe]
			}

			function ue(p, C = !1) {
				if (!p) return [!1, g.keys.cannot_transfer_default];
				if (p.zone.status !== "active") return [!1, g.keys.cannot_transfer_zone_not_active];
				if (!p.isFullZone && !pe(p)) return [!1, g.keys.cannot_transfer_zone_not_eligible];
				if (p.registrar === "Cloudflare") return [!1, g.keys.cannot_transfer_domain_on_cf];
				if (p.isAvailable) return [!1, g.keys.cannot_transfer_domain_available];
				if (!p.transferConditions) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (!C && Tt(p == null ? void 0 : p.premiumType)) return [!1, g.keys.cannot_transfer_domain_premium];
				if (F(p)) return [!1, g.keys.cannot_transfer_domain_transfer_in_progress];
				let X;
				for (X in p.transferConditions)
					if (X !== "not_premium" && !p.transferConditions[X]) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (ae(p.name)) return [!1, g.keys.cannot_transfer_domain_tld_not_supported];
				const [_e, Pe] = ce(p);
				return _e && Pe ? [!1, g.keys.cannot_transfer_domain_registry_status[Pe]] : [!0, ""]
			}

			function F(p) {
				var C, X;
				return !!p.transferIn && !((C = p.transferConditions) === null || C === void 0 ? void 0 : C.not_started) && !!(nt(p.name) || ((X = p.registryStatuses) === null || X === void 0 ? void 0 : X.includes(n.rj.PENDING_TRANSFER)))
			}

			function z(p) {
				return !!p.registrar && !!p.currentExpiration
			}

			function B(p, C = !1) {
				const [X] = ue(p, C);
				return z(p) ? le(p) ? n.M5.InProgressOrOnCF : X ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function h(p) {
				return p.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(p.transferIn.enter_auth_code) || !1
			}

			function x(p) {
				return p.registrar === "Cloudflare"
			}

			function G(p) {
				return !!(p == null ? void 0 : p.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function q(p) {
				return !!(p == null ? void 0 : p.includes(n.rj.PENDING_TRANSFER))
			}
			const ie = "Invalid date";

			function ee(p) {
				return p.newExpiration === ie ? "Unavailable" : p.newExpiration
			}

			function M(p) {
				return p.currentExpiration === ie ? "Unavailable" : p.currentExpiration
			}

			function K(p) {
				return p.substring(p.indexOf("."))
			}

			function V(p = "") {
				return p.indexOf(".") !== -1 ? p.substring(0, p.indexOf(".")) : p
			}

			function $(p) {
				return p.map(C => C.name).map(C => K(C)).filter((C, X, _e) => !_e.includes(C, X + 1))
			}

			function te(p) {
				if (m.no) return [!0, ""];
				if (!x(p)) return [!1, n.ok.NotOnCF];
				if (p.isCorLocked) return [!1, p.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (p.lastTransferredAt) {
					const C = u()(p.lastTransferredAt),
						X = u().duration(u()().diff(C)).as("days"),
						_e = nt(p.name);
					if (X < (_e ? 1 : 60)) return [!1, _e ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (p.createdAt) {
					const C = u()(p.createdAt);
					if (u().duration(u()().diff(C)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function me(p) {
				return !!(m.Bc || p.transferOut)
			}

			function le(p) {
				return ye(p) || x(p)
			}

			function ge(p) {
				return !ye(p) && x(p)
			}

			function ye(p) {
				return !p || p.lastKnownStatus === "pendingTransfer" || p.lastKnownStatus === "transferFOAPending" || !x(p) && p.transferConditions && !p.transferConditions.not_started || !1
			}

			function Ae(p) {
				return !(ae(p.name) || p.transferConditions && !p.transferConditions.supported_tld)
			}

			function Be(p) {
				return (p == null ? void 0 : p.includes("/")) ? !0 : p.split("").some(C => C.charCodeAt(0) > 123)
			}

			function Ce(p) {
				switch (p) {
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

			function Se(p) {
				return u()(p.paymentExpiresAt).isBefore(u()())
			}

			function Ye(p) {
				return p.transferIn && p.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function Ke(p) {
				const C = ["CU", "KP", "IR", "SY"];
				return p.filter(X => !C.includes(X.code))
			}

			function Ve(p) {
				if (!!p) return `${p.charAt(0).toUpperCase()}${p.slice(1)}${p.charAt(p.length-1)==="."?"":"."}`
			}

			function H(p) {
				const C = {};
				for (const [X, _e] of Object.entries(p)) {
					if (_e && typeof _e == "string") {
						Object.assign(C, {
							[X]: _e.trim()
						});
						continue
					}
					Object.assign(C, {
						[X]: _e
					})
				}
				return C
			}

			function ve(p) {
				return u()(p).add(40, "days")
			}

			function De(p) {
				const C = p.paymentExpiresAt || p.payment_expires_at,
					X = ve(C);
				return u()().isBetween(C, X)
			}

			function Xe(p) {
				var C;
				return !(p == null ? void 0 : p.registryStatuses) || !Array.isArray(p == null ? void 0 : p.registryStatuses) && !(0, e.isString)(p == null ? void 0 : p.registryStatuses) ? !1 : (C = p.registryStatuses) === null || C === void 0 ? void 0 : C.includes(n.rj.REDEMPTION_PERIOD)
			}

			function Je(p) {
				var C;
				return !(p == null ? void 0 : p.registryStatuses) || !Array.isArray(p == null ? void 0 : p.registryStatuses) && !(0, e.isString)(p == null ? void 0 : p.registryStatuses) ? !1 : (C = p.registryStatuses) === null || C === void 0 ? void 0 : C.includes(n.rj.PENDING_DELETE)
			}

			function st(p) {
				return [".us"].includes(p)
			}

			function qe(p) {
				return [".us"].includes(p)
			}

			function pt(p) {
				switch (p) {
					case ".us":
						return he();
					default:
						return []
				}
			}

			function Y(p) {
				switch (p) {
					case ".us":
						return de;
					default:
						return {}
				}
			}
			const de = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function he() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([p, C]) => ({
						value: p,
						label: C
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([p, C]) => ({
						value: p,
						label: C
					}))
				}]
			}

			function Ue(p, C, X) {
				return C[C.length - 1][X] === p[X]
			}

			function je(p) {
				return Boolean(Object.keys(p).length === 0)
			}

			function Ne(p) {
				return u()().add(p, "year").format(P)
			}

			function et({
				accountName: p
			}) {
				var C;
				const X = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((C = p.toLowerCase().match(X)) === null || C === void 0 ? void 0 : C[0]) || ""
			}

			function ct(p) {
				return !!p.match(v.default.email)
			}

			function mt(p) {
				return p === l.W7.PENDING_UPDATE
			}

			function tt(p) {
				return p ? Object.values(l.wR).filter(C => C !== l.wR.OFFBOARDED).includes(p) : !1
			}

			function Et(p) {
				return p ? [l.wR.LOCKED, l.wR.ONBOARDED, l.wR.ONBOARDING_INITIATED, l.wR.PENDING_REGISTRY_LOCK, l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(p) : !1
			}

			function yt(p) {
				return p ? l.wR.UNLOCKED === p : !1
			}

			function gt(p) {
				return p ? l.wR.LOCKED === p : !1
			}

			function ke(p) {
				return p ? l.wR.PENDING_REGISTRY_LOCK === p : !1
			}

			function be(p) {
				return p ? [l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(p) : !1
			}

			function Fe(p) {
				var C;
				return !1
			}

			function ht(p) {
				var C;
				return !1
			}

			function lt(p) {
				var C;
				return !1
			}

			function bt(p) {
				var C;
				return !1
			}

			function Z(p) {
				var C;
				return !1
			}

			function se(p) {
				return Object.keys(l.wR).find(C => l.wR[C].toLowerCase() === p.toLowerCase())
			}

			function Ee(p) {
				var C;
				const X = (C = se(p)) === null || C === void 0 ? void 0 : C.toLowerCase();
				return X ? g.keys.protection_status[X] : g.keys.protection_status.unknown
			}

			function Te(p) {
				return ["com", "net"].includes(p)
			}

			function Le(p) {
				const C = (0, i.pu)(p);
				return Te(C) ? l.wR.PENDING_REGISTRY_LOCK : l.wR.LOCKED
			}

			function xe(p) {
				return (0, i.pu)(p) === "co" ? 5 : 10
			}

			function Qe(p, C) {
				return C ? 1 : (0, i.pu)(p) === "co" ? 5 : (0, i.pu)(p) === "org" ? 1 : 10
			}

			function nt(p) {
				return (0, i.pu)(p) === "uk"
			}

			function we(p) {
				return (0, i.pu)(p) === "us"
			}

			function Ct(p) {
				return (0, i.pu)(p) === "ai"
			}

			function ut(p) {
				return u()(p).isValid()
			}

			function Nt(p) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(p)
			}

			function ft(p) {
				return !!(p == null ? void 0 : p.id)
			}

			function at(p) {
				return p ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(p) : !1
			}

			function wt(p) {
				return p ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(p) : !1
			}

			function Rt(p) {
				var C;
				return (p == null ? void 0 : p.lastKnownStatus) ? (C = p.lastKnownStatus) === null || C === void 0 ? void 0 : C.includes("deletionIrredeemable") : !1
			}

			function Tt(p) {
				switch (p) {
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

			function Pt(p) {
				if (!p || !p.message) return n.OJ.DEFAULT;
				const {
					message: C
				} = p;
				switch (!0) {
					case C.includes("feature disabled"):
						return n.OJ.FEATURE_DISABLED;
					case C.includes("email unverified"):
						return n.OJ.EMAIL_UNVERIFIED;
					case C.includes("account blocked"):
						return n.OJ.ACCOUNT_BLOCKED;
					default:
						return n.OJ.DEFAULT
				}
			}

			function It(p) {
				var C, X;
				return !!(((C = p.policies) === null || C === void 0 || (X = C.suspension) === null || X === void 0 ? void 0 : X.parked) && p.policies.suspension.parkingReason)
			}

			function Ge(p) {
				var C, X;
				return It(p) && ((C = p.policies) === null || C === void 0 || (X = C.suspension) === null || X === void 0 ? void 0 : X.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function Dt(p) {
				var C, X;
				return It(p) && ((C = p.policies) === null || C === void 0 || (X = C.suspension) === null || X === void 0 ? void 0 : X.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function xt(p) {
				var C;
				return !((C = p.domainMove) === null || C === void 0 ? void 0 : C.ineligibilityReasons.length)
			}

			function Lt(p) {
				var C, X;
				return !!((C = p.domainMove) === null || C === void 0 || (X = C.ineligibilityReasons) === null || X === void 0 ? void 0 : X.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function vt(p) {
				var C;
				return (C = p.actionableMetadata) === null || C === void 0 ? void 0 : C.find(X => X.type === n.wg.DOMAIN_MOVE)
			}

			function Bt(p) {
				const C = vt(p);
				return (C == null ? void 0 : C.status) === "pending" && C.accountContext === n._5.GAINING
			}

			function Ot(p) {
				const C = vt(p);
				return (C == null ? void 0 : C.status) === "pending" && C.accountContext === n._5.LOSING
			}

			function re(p) {
				const C = K(p.name);
				return !m.Pf.includes(C)
			}

			function ne(p) {
				return m.QZ.includes(p)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Bc: function() {
					return m
				},
				HG: function() {
					return ye
				},
				Hv: function() {
					return Ae
				},
				JM: function() {
					return a
				},
				Pf: function() {
					return d
				},
				Py: function() {
					return v
				},
				QZ: function() {
					return c
				},
				WK: function() {
					return n
				},
				g5: function() {
					return s
				},
				gM: function() {
					return l
				},
				jk: function() {
					return ge
				},
				no: function() {
					return g
				},
				uY: function() {
					return i
				},
				ui: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../flags.ts");
			const a = "Unknown",
				u = "unknown",
				l = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				v = Object.keys(l),
				i = !0,
				m = (0, o.J8)("registrar_mock_transfer_out") || !1,
				g = (0, o.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				s = "cf_registrar.enabled",
				r = "@abcABC1234567890123456",
				d = [".us"],
				c = [".travel", ".us", ".ong", ".ngo"],
				f = (0, e.BC)`/${"accountId"}`,
				b = (0, e.BC)`${f}/add-site`,
				P = (0, e.BC)`${f}/registrar`,
				w = (0, e.BC)`${P}/domains`,
				y = (0, e.BC)`${P}/action-center`,
				O = (0, e.BC)`${P}/domain/${"zoneName"}`,
				_ = (0, e.BC)`${O}/configuration`,
				T = (0, e.BC)`${O}/contacts`,
				D = (0, e.BC)`${P}/pricing`,
				S = (0, e.BC)`${P}/protection`,
				N = (0, e.BC)`${P}/register`,
				A = (0, e.BC)`${N}/checkout`,
				I = (0, e.BC)`${N}/checkout/${"token"}`,
				L = (0, e.BC)`${N}/success`,
				k = (0, e.BC)`${P}/tlds`,
				U = (0, e.BC)`${P}/transfer`,
				Q = (0, e.BC)`${P}/transfer/${"zoneName"}`,
				ae = (0, e.BC)`/registrar/accounts/verify_email`,
				pe = (0, e.BC)`/registrar/domains/verify_email`,
				ce = (0, e.BC)`/sign-up/registrar`,
				ue = (0, e.BC)`${P}/verify-email`,
				F = (0, e.BC)`${f}/${"zoneName"}`,
				z = (0, e.BC)`${f}/domains`,
				B = (0, e.BC)`${z}/action-center`,
				h = (0, e.BC)`${z}/${"zoneName"}`,
				x = (0, e.BC)`${h}/configuration`,
				G = (0, e.BC)`${h}/contacts`,
				q = (0, e.BC)`${z}/pricing`,
				ie = (0, e.BC)`${z}/protection`,
				ee = (0, e.BC)`${z}/register`,
				M = (0, e.BC)`${ee}/checkout`,
				K = (0, e.BC)`${ee}/checkout/${"token"}`,
				V = (0, e.BC)`${ee}/success`,
				$ = (0, e.BC)`${z}/tlds`,
				te = (0, e.BC)`${z}/transfer`,
				me = (0, e.BC)`${z}/transfer/${"zoneName"}`,
				le = (0, e.BC)`${z}/verify-email`,
				ge = {
					addSite: b,
					domains: w,
					domainsActionCenter: y,
					domainsDomain: O,
					domainsDomainConfiguration: _,
					domainsDomainContacts: T,
					domainsPricing: D,
					domainsProtection: S,
					domainsRegister: N,
					domainsRegisterCheckout: A,
					domainsRegisterCheckoutToken: I,
					domainsRegisterSuccess: L,
					domainsTlds: k,
					domainsTransfer: U,
					domainsTransferZone: Q,
					registrar: P,
					registrarAccountsVerifyEmail: ae,
					registrarDomainsVerifyEmail: pe,
					signup: ce,
					verifyEmail: ue,
					zone: F
				},
				ye = {
					LEGACY_domains: z,
					LEGACY_domainsActionCenter: B,
					LEGACY_domainsDomain: h,
					LEGACY_domainsDomainConfiguration: x,
					LEGACY_domainsDomainContacts: G,
					LEGACY_domainsPricing: q,
					LEGACY_domainsProtection: ie,
					LEGACY_domainsRegister: ee,
					LEGACY_domainsRegisterCheckout: M,
					LEGACY_domainsRegisterCheckoutToken: K,
					LEGACY_domainsRegisterSuccess: V,
					LEGACY_domainsTlds: $,
					LEGACY_domainsTransfer: te,
					LEGACY_domainsTransferZone: me,
					LEGACY_verifyEmail: le
				},
				Ae = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				HO: function() {
					return i
				},
				NW: function() {
					return m
				},
				ZQ: function() {
					return u
				},
				b_: function() {
					return v
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");
			const a = g => {
					const n = g && g.accountFlags && g.accountFlags.data && g.accountFlags.data.registrar && g.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(s => s.trim()) : []
				},
				u = g => {
					var n, s, r;
					return ((n = g.accountFlags) === null || n === void 0 || (s = n.data) === null || s === void 0 || (r = s.registrar) === null || r === void 0 ? void 0 : r["registrar-managed"]) || !1
				},
				l = g => g.account ? g.account.email : "",
				v = g => !1,
				i = g => v(g) && (0, e.oJ)((0, e.Zu)(g)),
				m = g => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: s
					} = g.registrar.registrations;
					return n && !(s.accepted_date || s.id || s.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				J: function() {
					return s
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(a),
				l = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function v(r) {
				for (var d = 1; d < arguments.length; d++) {
					var c = arguments[d] != null ? Object(arguments[d]) : {},
						f = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(c).filter(function(b) {
						return Object.getOwnPropertyDescriptor(c, b).enumerable
					})), f.forEach(function(b) {
						i(r, b, c[b])
					})
				}
				return r
			}

			function i(r, d, c) {
				return d = m(d), d in r ? Object.defineProperty(r, d, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[d] = c, r
			}

			function m(r) {
				var d = g(r, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function g(r, d) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var f = c.call(r, d || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(r)
			}
			let n = function(r) {
				return r.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", r.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", r.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", r.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", r.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", r.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", r.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", r.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", r.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", r.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", r.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", r.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", r.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", r.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", r.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", r.RENEW_DOMAIN_COMPLETED = "domain renewal completed", r.RESTORE_DOMAIN_INIT = "click to open domain restore modal", r.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", r.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", r.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", r.RESTORE_DOMAIN_FAILURE = "domain restore failed", r.RESTORE_DOMAIN_COMPLETED = "domain restore completed", r.DOMAIN_DELETE_INIT = "click to begin domain delete", r.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", r.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", r.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", r.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", r.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", r.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", r.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", r.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", r.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", r.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", r.DOMAIN_MOVE_START_FLOW = "Start domain move flow", r.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", r.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", r.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", r.DOMAIN_MOVE_SUBMIT = "Submit domain move", r.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", r.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", r.DOMAIN_MOVE_CANCEL = "Domain move cancel", r.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", r.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", r.ACTION_CENTER_NAVIGATE = "Navigate to actions center", r.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", r.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", r.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", r
			}({});

			function s(r, d, c) {
				if (!(d == null ? void 0 : d.name)) return null;
				u().sendEvent(r, v({
					domain: {
						name: d.name,
						premium: (0, l.Uy)(d == null ? void 0 : d.premiumType),
						paymentExpiresAt: o()(d == null ? void 0 : d.paymentExpiresAt).format()
					},
					category: "registrar"
				}, c))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				HX: function() {
					return i
				},
				Re: function() {
					return w
				},
				Rh: function() {
					return f
				},
				hX: function() {
					return d
				},
				s_: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				l = t("../react/pages/home/members/utils.ts"),
				v = t("../react/utils/translator.tsx");
			let i = function(y) {
				return y.UNKNOWN = "unknown", y.WORKERS = "workers", y.ACCESS_APPS = "access_apps", y.ACCESS_IDP = "access_ipd", y
			}({});
			const m = [{
				value: i.WORKERS,
				label_i18n: "policy.granular_resources.type.workers",
				scopeKeyPrefix: "com.cloudflare.edge.worker.script",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: i.ACCESS_APPS,
				label_i18n: "policy.granular_resources.type.access_apps",
				scopeKeyPrefix: "com.cloudflare.edge.access.app",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: i.ACCESS_IDP,
				label_i18n: "policy.granular_resources.type.access_idp",
				scopeKeyPrefix: "com.cloudflare.edge.access.identity-provider",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}];

			function g(y) {
				return {
					key: "com.cloudflare.edge.worker.script." + y.id,
					name: y.name + (y.environment ? ` (${y.environment})` : ""),
					type: i.WORKERS
				}
			}

			function n(y) {
				const O = y;
				return {
					key: "com.cloudflare.edge.access.app." + O.id,
					name: O.name,
					type: i.ACCESS_APPS
				}
			}
			const s = {
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

			function r(y) {
				const O = y,
					_ = s[O.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + O.id,
					name: `${_||"Unknown Type"}${O.name?" - "+O.name:""}`,
					type: i.ACCESS_IDP
				}
			}
			const d = async (y, O, _) => O == i.WORKERS ? (await c(`/accounts/${y}/workers/scripts-search?name=${_}&perPage=10`)).body.result.map(T => ({
				id: T.id,
				name: T.service_name || T.script_name,
				environment: T.environment_name
			})).map(g) : O == i.ACCESS_APPS ? (await c(`/accounts/${y}/access/apps?name=${_}`)).body.result.map(n) : O == i.ACCESS_IDP ? (await c(`/accounts/${y}/access/identity_providers`)).body.result.map(r) : [];
			async function c(y) {
				try {
					return await (0, e.get)(y, {
						hideErrorAlert: !0
					})
				} catch (T) {
					var O, _;
					throw ((O = T.body) === null || O === void 0 ? void 0 : O.errors) ? T.body.errors[0].message : T.text ? T.text : ((_ = T.response) === null || _ === void 0 ? void 0 : _.statusText) ? T.response.statusText : "Unexpected error response"
				}
			}
			const f = async (y, O) => {
				const _ = O.split("."),
					T = _.pop(),
					D = _.join(".");
				let S;
				switch (D) {
					case "com.cloudflare.edge.worker.script":
						const N = (await c(`/accounts/${y}/workers/scripts-search/${T}`)).body.result;
						return g({
							id: N.id,
							name: N.service_name || N.script_name,
							environment: N.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return S = await c(`/accounts/${y}/access/identity_providers/${T}`), r(S.body.result);
					case "com.cloudflare.edge.access.app":
						return S = await c(`/accounts/${y}/access/apps/${T}`), n(S.body.result)
				}
			}, b = {
				loading: !0,
				isDisabled: !0
			}, P = () => "production";

			function w(y) {
				const O = (0, l.vq)(y),
					[_, T] = (0, a.useState)(!0),
					[D, S] = (0, a.useState)(m.filter(N => O.find(A => A.meta.scopes === N.scopeKeyPrefix)).map(N => {
						const A = N.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							I = O.filter(L => L.meta.scopes === N.scopeKeyPrefix).find(L => !L.meta.visibility || L.meta.visibility !== "beta");
						return {
							value: N.value,
							label: (0, v.ZP)(N.label_i18n),
							state: A ? b : {
								loading: !1,
								isDisabled: !1
							},
							beta: !I
						}
					}));
				return (0, a.useEffect)(() => {
					(async () => {
						try {
							await d(y, i.ACCESS_APPS, ""), b.isDisabled = !1
						} catch (N) {
							N.startsWith("access.api.error.not_enabled") ? b.disableInfo = (0, v.ZP)("policy.granular_resources.type.access.not_enabled") : b.error = N
						}
						b.loading = !1, S([...D])
					})()
				}, []), (0, a.useEffect)(() => {
					const N = D.find(A => A.state.loading);
					T(!!N)
				}, [D]), {
					types: D,
					isLoading: _
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Ey: function() {
					return i
				},
				F4: function() {
					return c
				},
				Fq: function() {
					return P
				},
				Go: function() {
					return s
				},
				Lc: function() {
					return _
				},
				Np: function() {
					return g
				},
				Rl: function() {
					return n
				},
				Sb: function() {
					return r
				},
				Sw: function() {
					return O
				},
				Sz: function() {
					return y
				},
				Ti: function() {
					return T
				},
				Uw: function() {
					return b
				},
				Zl: function() {
					return f
				},
				jk: function() {
					return w
				},
				r6: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${o}/members`,
				u = (0, e.BC)`${a}/invite`,
				l = (0, e.BC)`${a}/invite/${"memberId"}`,
				v = (0, e.BC)`${a}/add-policy/${"memberId"}`,
				i = "com.cloudflare.api.account",
				g = i + "." + "zone",
				n = g + ".",
				s = 100,
				r = 200,
				d = 5,
				c = 300,
				f = "INVITE_TOAST",
				b = "00000000000000000000000000000000",
				P = "usergroups-ui",
				w = {
					account: o,
					members: a,
					inviteMembers: u,
					editMember: l,
					addPolicy: v
				},
				y = {
					allow: "allow",
					deny: "deny"
				},
				O = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				_ = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				T = {
					accountId: "",
					effect: y.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/utils.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				AX: function() {
					return y
				},
				Co: function() {
					return P
				},
				JP: function() {
					return w
				},
				Ld: function() {
					return r
				},
				YW: function() {
					return m
				},
				_k: function() {
					return d
				},
				c$: function() {
					return g
				},
				rC: function() {
					return D
				},
				vq: function() {
					return T
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				o = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				a = t("../react/pages/home/members/constants.ts");

			function u(S) {
				for (var N = 1; N < arguments.length; N++) {
					var A = arguments[N] != null ? Object(arguments[N]) : {},
						I = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(A).filter(function(L) {
						return Object.getOwnPropertyDescriptor(A, L).enumerable
					})), I.forEach(function(L) {
						l(S, L, A[L])
					})
				}
				return S
			}

			function l(S, N, A) {
				return N = v(N), N in S ? Object.defineProperty(S, N, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[N] = A, S
			}

			function v(S) {
				var N = i(S, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function i(S, N) {
				if (typeof S != "object" || S === null) return S;
				var A = S[Symbol.toPrimitive];
				if (A !== void 0) {
					var I = A.call(S, N || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(S)
			}
			const m = () => u({}, a.Ti),
				g = () => u({}, a.Lc, {
					scopes: [m()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = S => S.map(N => ({
					scope: {
						key: N,
						objects: [{
							key: "*"
						}]
					}
				})),
				s = (S, N, A) => {
					var I;
					let L = [],
						k = [];
					const U = [],
						Q = [];
					S.scopes.forEach(ce => {
						if (ce.mode === a.Sw.all) A ? L.push({
							id: A
						}) : L.push({
							scope: {
								key: `com.cloudflare.api.account.${N}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (ce.mode === a.Sw.domain_group) {
							const F = {
								id: ce.resourceGroupId
							};
							ce.effect === a.Sz.allow ? L.push(F) : k.push(F)
						} else if (ce.mode === a.Sw.zone) {
							const F = `${a.Rl}${ce.zoneId}`;
							ce.effect === a.Sz.allow ? U.push(F) : Q.push(F)
						} else if (ce.mode === a.Sw.granular && ce.granularResourceKey) {
							var ue;
							const F = ce.granularProduct,
								B = `${(ue=o.s_.find(h=>h.value===F))===null||ue===void 0?void 0:ue.scopeSubsetOfPrefix}.${N}`;
							L.push({
								scope: {
									key: `${ce.granularResourceKey}`,
									subset_of: [{
										key: `${B}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), U.length && (L = L.concat(n(U))), Q.length && (k = k.concat(n(Q)));
					const ae = (I = S.permission_groups) === null || I === void 0 ? void 0 : I.map(ce => ({
							id: ce
						})),
						pe = [];
					return pe.push({
						access: a.Sz.allow,
						permission_groups: ae,
						resource_groups: L
					}), k.length && pe.push({
						access: a.Sz.deny,
						permission_groups: ae,
						resource_groups: k
					}), pe
				},
				r = S => S.map(N => {
					var A;
					return {
						access: N.access,
						permission_groups: N.permission_groups.map(I => ({
							id: I.id
						})),
						resource_groups: (A = N.resource_groups) === null || A === void 0 ? void 0 : A.map(I => ({
							scope: {
								key: I.scope.key,
								objects: I.scope.objects
							},
							id: I.id
						}))
					}
				}),
				d = (S, N, A, I) => {
					const L = S.auto_accept;
					let k = [];
					return k = k.concat(s(S, N, A)), I && (k = k.concat(r(I))), {
						auto_accept: L,
						status: L ? "accepted" : "pending",
						policies: k
					}
				},
				c = S => {
					const N = S.split(".");
					return N[N.length - 1]
				},
				f = S => {
					var N, A;
					const I = S == null ? void 0 : S.access;
					let L = [],
						k = S == null || (N = S.resource_groups) === null || N === void 0 ? void 0 : N.map(U => {
							var Q;
							const ae = b(U);
							if ((U == null || (Q = U.meta) === null || Q === void 0 ? void 0 : Q.editable) === "false") return {
								effect: I,
								mode: a.Sw.all,
								accountId: c(U.id)
							};
							if (ae) {
								var pe;
								return {
									effect: I,
									mode: a.Sw.granular,
									granularProduct: ae.value,
									granularResourceKey: U == null || (pe = U.scope) === null || pe === void 0 ? void 0 : pe.key
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
					if ((A = L) === null || A === void 0 ? void 0 : A.length) {
						let U = L.map(Q => {
							const ae = c(Q.key);
							return {
								effect: I,
								mode: a.Sw.zone,
								zoneId: ae
							}
						});
						k = k.length ? U.concat(k) : U
					}
					return k
				},
				b = S => {
					var N, A, I, L;
					const k = S == null || (N = S.scope) === null || N === void 0 ? void 0 : N.key.split(".").slice(0, -1).join("."),
						U = S == null || (A = S.scope) === null || A === void 0 || (I = A.subset_of) === null || I === void 0 || (L = I[0]) === null || L === void 0 ? void 0 : L.key.split(".").slice(0, -1).join(".");
					return o.s_.find(Q => Q.scopeKeyPrefix === k && Q.scopeSubsetOfPrefix === U)
				},
				P = S => {
					if (!(S == null ? void 0 : S.length)) return [];
					const N = [];
					return S.forEach(A => {
						var I;
						(I = A.resource_groups) === null || I === void 0 || I.forEach(L => {
							var k, U;
							((k = L.scope) === null || k === void 0 || (U = k.key) === null || U === void 0 ? void 0 : U.startsWith(a.Rl)) && N.push(c(L.scope.key))
						})
					}), N
				},
				w = S => {
					if (!(S == null ? void 0 : S.length)) return [];
					const N = [];
					return S.forEach(A => {
						var I;
						(I = A.resource_groups) === null || I === void 0 || I.forEach(L => {
							var k, U;
							if (!((k = L.scope) === null || k === void 0 || (U = k.key) === null || U === void 0 ? void 0 : U.startsWith(a.Rl))) {
								var Q;
								const pe = (Q = L.scope) === null || Q === void 0 ? void 0 : Q.objects;
								for (let ce = 0; ce < (pe == null ? void 0 : pe.length) && ce < a.r6; ce++) {
									var ae;
									((ae = pe[ce].key) === null || ae === void 0 ? void 0 : ae.startsWith(a.Rl)) && N.push(c(pe[ce].key))
								}
							}
						})
					}), N
				},
				y = S => {
					var N;
					if (!(S == null ? void 0 : S.length)) return null;
					const A = (N = S[0]) === null || N === void 0 ? void 0 : N.permission_groups.map(U => U.id);
					let I, L;
					S == null || S.forEach(U => {
						U.access === a.Sz.allow && (I = U), U.access === a.Sz.deny && (L = U)
					});
					let k = [];
					return I && (k = f(I)), L && (k = k.concat(f(L))), {
						permission_groups: A,
						scopes: k
					}
				},
				O = "permission-groups-",
				_ = new Map,
				T = S => {
					if (!S) return [];
					const N = _.get(S);
					if (N) return N;
					const A = e.E.get(`${O}${S}`);
					return _.set(S, A), A
				},
				D = (S, N) => {
					const A = [];
					for (let I = 0; I < sessionStorage.length; I++) {
						const L = sessionStorage.key(I);
						(L == null ? void 0 : L.startsWith(O)) && A.push(L)
					}
					return A.length >= 5 && e.E.remove(A[0]), e.E.set(`${O}${S}`, N)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(W, E, t) {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(W, E, t) {
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
		"../react/pages/hyperdrive/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				KO: function() {
					return i
				},
				L9: function() {
					return n
				},
				N3: function() {
					return g
				},
				zE: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(s) {
				for (var r = 1; r < arguments.length; r++) {
					var d = arguments[r] != null ? Object(arguments[r]) : {},
						c = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(d).filter(function(f) {
						return Object.getOwnPropertyDescriptor(d, f).enumerable
					})), c.forEach(function(f) {
						u(s, f, d[f])
					})
				}
				return s
			}

			function u(s, r, d) {
				return r = l(r), r in s ? Object.defineProperty(s, r, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[r] = d, s
			}

			function l(s) {
				var r = v(s, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(s, r) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var c = d.call(s, r || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(s)
			}
			let i = function(s) {
					return s.PURCHASE_WORKERS_PAID = "navigate to workers plan page", s.LIST_CONFIGS = "list hyperdrive configs", s.SEARCH_CONFIGS = "search hyperdrive configs", s.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", s.VIEW_CONFIG_DETAILS = "view hyperdrive config details", s.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", s.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", s.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", s.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", s.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", s.CLICK_QUICK_LINK = "click hyperdrive quick link", s.CLICK_DISCORD = "click hyperdrive discord", s.CLICK_COMMUNITY = "click hyperdrive community", s
				}({}),
				m = function(s) {
					return s[s["connection string"] = 0] = "connection string", s[s.manual = 1] = "manual", s
				}({}),
				g = function(s) {
					return s[s.success = 0] = "success", s[s.failure = 1] = "failure", s
				}({});
			const n = (s, r = {}) => {
				o().sendEvent(s, a({}, r, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/selectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$4: function() {
					return u
				},
				GH: function() {
					return r
				},
				JZ: function() {
					return c
				},
				aR: function() {
					return n
				},
				db: function() {
					return v
				},
				ib: function() {
					return f
				},
				lW: function() {
					return P
				},
				pT: function() {
					return s
				},
				po: function() {
					return d
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const u = "sourcing_kit_enabled",
				l = "sourcing_kit_waitlist",
				v = "images",
				i = "unified_images_enabled",
				m = "c2pa_polish",
				g = "CloudflareImages",
				n = w => !!(0, o.BF)(w, "images.transformations_enabled"),
				s = w => Boolean((0, o.BF)(w, "images.enabled")),
				r = w => {
					const y = (0, o.BF)(w, "images.storage");
					return typeof y == "number" && y > 0
				},
				d = w => Boolean((0, o.BF)(w, "contract.customer_enabled")),
				c = w => Boolean((0, e.oI)(w, v, u)),
				f = w => Boolean((0, a.Le)(w, g, u)),
				b = w => Boolean(getAccountFlipperFlag(w, g, i)),
				P = w => Boolean((0, a.Le)(w, g, m))
		},
		"../react/pages/magic/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				GF: function() {
					return d
				},
				H3: function() {
					return i
				},
				H8: function() {
					return l
				},
				J: function() {
					return f
				},
				Nz: function() {
					return m
				},
				UQ: function() {
					return P
				},
				Up: function() {
					return u
				},
				W8: function() {
					return g
				},
				Ws: function() {
					return w
				},
				Xg: function() {
					return s
				},
				Y_: function() {
					return r
				},
				_j: function() {
					return a
				},
				a4: function() {
					return c
				},
				jS: function() {
					return b
				},
				rF: function() {
					return v
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
				l = y => [{
					value: "low",
					label: y("setting.low")
				}, {
					value: "mid",
					label: y("setting.medium")
				}, {
					value: "high",
					label: y("setting.high")
				}],
				v = y => [{
					value: "request",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				i = y => [{
					value: "unidirectional",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				m = "magic-transit",
				g = "magic-wan",
				n = "gre_tunnel",
				s = "ipsec_tunnel",
				r = "interconnect",
				d = 64,
				c = 1476,
				f = "mid",
				b = "reply",
				P = y => [{
					value: void 0,
					label: y("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: y("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: y("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				w = y => [{
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
		"../react/pages/magic/network-monitoring/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/magic/overview/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				VZ: function() {
					return u
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
				u = {
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
		"../react/pages/magic/packet-captures/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				gb: function() {
					return n
				},
				iP: function() {
					return S
				},
				xL: function() {
					return w
				},
				rD: function() {
					return A
				},
				oT: function() {
					return c
				},
				i2: function() {
					return I
				},
				x1: function() {
					return v
				},
				lW: function() {
					return m
				},
				UA: function() {
					return T
				},
				K5: function() {
					return r
				},
				Ii: function() {
					return O
				},
				PJ: function() {
					return N
				},
				bK: function() {
					return b
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				l = t("../node_modules/@cloudflare/elements/es/index.js");
			const v = () => o().createElement(i, null, o().createElement("svg", {
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
				i = (0, a.createComponent)(({
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
				m = () => o().createElement(g, null, o().createElement("svg", {
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
				g = (0, a.createComponent)(({
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
				n = () => o().createElement(s, null, o().createElement(l.Ei, {
					alt: "airplane",
					src: u,
					width: "85%"
				})),
				s = (0, a.createComponent)(({
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
				r = () => o().createElement(d, null, o().createElement("svg", {
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
				d = (0, a.createComponent)(({
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
				c = () => o().createElement(f, null, o().createElement("svg", {
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
				f = (0, a.createComponent)(({
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
				b = () => o().createElement(P, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				P = (0, a.createComponent)(({
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
				w = () => o().createElement(y, null, o().createElement("svg", {
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
				y = (0, a.createComponent)(({
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
				O = () => o().createElement(_, null, o().createElement("svg", {
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
				_ = (0, a.createComponent)(({
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
				T = () => o().createElement(D, null, o().createElement("svg", {
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
				D = (0, a.createComponent)(({
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
				S = () => o().createElement("svg", {
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
				A = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				A2: function() {
					return i
				},
				He: function() {
					return l
				},
				N$: function() {
					return v
				},
				Qq: function() {
					return a
				},
				ST: function() {
					return u
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
				u = "cf-test",
				l = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				v = m => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: m ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: m ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: m ? e.rD : e.PJ
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
		"../react/pages/page-rules/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				_: function() {
					return a
				},
				c: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let a = function(l) {
				return l.TEMPLATE_SELECTED = "template selected", l.TEMPLATE_PRODUCT_SELECTED = "template product selected", l.TEMPLATE_SAVE_DRAFT = "template save draft", l.TEMPLATE_CANCEL = "template cancel", l.TEMPLATE_DEPLOY = "template deploy", l
			}({});
			const u = (l, v) => o().sendEvent(l, {
				template_name: v
			})
		},
		"../react/pages/pages/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				A: function() {
					return b
				},
				C1: function() {
					return g
				},
				Dp: function() {
					return U
				},
				GF: function() {
					return A
				},
				HD: function() {
					return y
				},
				IK: function() {
					return l
				},
				L7: function() {
					return a
				},
				Li: function() {
					return f
				},
				Ni: function() {
					return D
				},
				OG: function() {
					return ue
				},
				QF: function() {
					return pe
				},
				QV: function() {
					return T
				},
				Sx: function() {
					return O
				},
				Ub: function() {
					return ae
				},
				X3: function() {
					return s
				},
				aP: function() {
					return i
				},
				bA: function() {
					return L
				},
				eO: function() {
					return r
				},
				fH: function() {
					return c
				},
				fQ: function() {
					return P
				},
				fR: function() {
					return e
				},
				ff: function() {
					return I
				},
				hE: function() {
					return Q
				},
				iS: function() {
					return w
				},
				ku: function() {
					return k
				},
				nY: function() {
					return _
				},
				w3: function() {
					return u
				},
				wJ: function() {
					return m
				},
				wp: function() {
					return d
				},
				yu: function() {
					return n
				},
				zF: function() {
					return N
				},
				zG: function() {
					return S
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
						installations: "https://github.com/settings/installations",
						newInstallation: `https://github.com/apps/${o}/installations/new`,
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
				l = 58,
				v = {
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
				m = 2e3,
				g = 100,
				n = 350,
				s = 1e7,
				r = ["Success:", "Error:", "Failed:"],
				d = 10,
				c = "_headers",
				f = "_redirects",
				b = "_routes.json",
				P = "_worker.js",
				w = "do-a-barrel-roll",
				y = [c, f, b, P],
				O = 1024 * 1024 * 25,
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
				D = 1e5,
				S = 75e3,
				N = 2e5,
				A = 15e4,
				I = 3e3,
				L = 2250,
				k = "workers",
				U = "cloudflare_pages_build_caching",
				Q = 2;
			let ae = function(F) {
				return F[F.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", F[F.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", F[F.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", F[F.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", F[F.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", F[F.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", F
			}({});
			const pe = 1,
				ce = 2,
				ue = 2
		},
		"../react/pages/pages/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
				u = v => `${v.subdomain}.pages.dev`,
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
		"../react/pages/pipelines/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				KO: function() {
					return i
				},
				L9: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var s = 1; s < arguments.length; s++) {
					var r = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(r).filter(function(c) {
						return Object.getOwnPropertyDescriptor(r, c).enumerable
					})), d.forEach(function(c) {
						u(n, c, r[c])
					})
				}
				return n
			}

			function u(n, s, r) {
				return s = l(s), s in n ? Object.defineProperty(n, s, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = r, n
			}

			function l(n) {
				var s = v(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function v(n, s) {
				if (typeof n != "object" || n === null) return n;
				var r = n[Symbol.toPrimitive];
				if (r !== void 0) {
					var d = r.call(n, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			let i = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				m = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const g = (n, s = {}) => {
				o().sendEvent(n, a({}, s, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return a
				},
				Jg: function() {
					return v
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
				u = i => {
					const m = "r2.cloudflarestorage.com";
					switch (i) {
						case "default":
							return m;
						case "eu":
							return `eu.${m}`;
						case "fedramp":
							return `fedramp.${m}`
					}
				},
				l = (i, m) => {
					const g = u(m);
					return `https://${i}.${g}`
				},
				v = (i, m, g) => `${l(i,m)}/${g}`
		},
		"../react/pages/r2/selectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Mv: function() {
					return n
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const u = "r2_migrator_waitlist",
				l = "r2migrator",
				v = "r2",
				i = "r2_storage_migrator",
				m = "r2_storage_migrator",
				g = r => getAccountEntitlement(r, "r2.enabled"),
				n = r => Boolean((0, a.Le)(r, i, u)),
				s = r => Boolean(getAccountFlipperFlagsChanges(r, m, l))
		},
		"../react/pages/secrets-store/resources/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Hf: function() {
					return D
				},
				JJ: function() {
					return v
				},
				Js: function() {
					return u
				},
				LN: function() {
					return f
				},
				Nm: function() {
					return r
				},
				Oh: function() {
					return P
				},
				Q2: function() {
					return N
				},
				QF: function() {
					return b
				},
				RR: function() {
					return y
				},
				T_: function() {
					return S
				},
				Xm: function() {
					return i
				},
				Zl: function() {
					return A
				},
				dv: function() {
					return l
				},
				fp: function() {
					return s
				},
				jx: function() {
					return T
				},
				nQ: function() {
					return d
				},
				px: function() {
					return w
				},
				tP: function() {
					return a
				},
				vh: function() {
					return c
				},
				wB: function() {
					return L
				},
				z3: function() {
					return I
				},
				zt: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				o = t("../../../../node_modules/yup/es/index.js");
			const a = "secrets-store-account-level",
				u = "https://developers.cloudflare.com/secrets-store/",
				l = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				v = 1,
				i = 10,
				m = 100;
			let g = function(k) {
					return k.NAME = "name", k
				}({}),
				n = function(k) {
					return k.NAME = "name", k
				}({});
			const s = {
				initialPaginationState: {
					page: v,
					perPage: i
				},
				initialSortState: {
					name: g.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: ""
				},
				filters: n,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					autoClearQs: !0
				}
			};
			let r = function(k) {
					return k.NAME = "name", k.COMMENT = "comment", k.TAGS = "tags", k.SERVICES = "services", k.STATUS = "status", k
				}({}),
				d = function(k) {
					return k.PENDING = "pending", k.ACTIVE = "active", k.DELETED = "deleted", k
				}({}),
				c = function(k) {
					return k.LIST_SECRETS_STORES = "listSecretsStores", k.LIST_SECRETS = "listSecrets", k.GET_SECRET = "getSecret", k.SECRETS_QUOTA = "secretsQuota", k
				}({}),
				f = function(k) {
					return k.CREATE = "create", k.EDIT = "edit", k.DUPLICATE = "duplicate", k
				}({}),
				b = function(k) {
					return k.WORKERS = "workers", k
				}({});
			const P = "default_secrets_store";
			let w = function(k) {
				return k.CREATE = "create", k.EDIT = "edit", k.DUPLICATE = "duplicate", k.VIEW = "view", k
			}({});
			const y = "delete_operation",
				O = /^[a-zA-Z0-9_-]+$/,
				_ = (k, U, Q, ae, pe) => o.Ry().shape({
					name: o.Z_().required(k("secrets_store.form.create.errors.name.required")).matches(O, k("secrets_store.form.create.errors.name.invalid_characters")).max(255, k("secrets_store.form.create.errors.name.max")),
					value: o.Z_().test("required-if-creating", k("secrets_store.form.create.errors.value.required"), ce => U || pe ? !!ce : !0).max(1024, k("secrets_store.form.create.errors.value.max")),
					comment: o.Z_().max(1024, k("secrets_store.form.create.errors.comment.max")),
					scopes: o.Z_().required().oneOf(Object.values(b), k("secrets_store.form.create.errors.scopes.invalid")),
					labels: o.IX().of(o.Z_())
				}),
				T = (k, U, Q, ae, pe) => o.Ry().shape({
					secrets: o.IX().of(_(k, U, Q, ae, pe))
				}),
				D = {
					name: "",
					value: "",
					scopes: b.WORKERS,
					comment: ""
				},
				S = "secrets-store.store.secret";
			let N = function(k) {
				return k.DUPLICATE = "duplicate", k.DEPLOY = "deploy", k
			}({});
			const A = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let I = function(k) {
					return k.CREATE_SECRET = "create secrets store secret", k.EDIT_SECRET = "edit secrets store secret", k.DUPLICATE_SECRET = "duplicate secrets store secret", k.DELETE_SECRET = "delete secrets store secret", k.BIND_SECRET = "open secrets store binding drawer", k
				}({}),
				L = function(k) {
					return k.SECRETS_STORE = "secrets store main", k.WORKERS_BINDING = "workers binding drawer", k
				}({})
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Gk: function() {
					return r
				},
				LA: function() {
					return g
				},
				Wk: function() {
					return s
				},
				_V: function() {
					return i
				},
				c5: function() {
					return n
				},
				om: function() {
					return m
				}
			});
			var e = t("../react/pages/security-center/BlockedContent/types.ts"),
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(d) {
				for (var c = 1; c < arguments.length; c++) {
					var f = arguments[c] != null ? Object(arguments[c]) : {},
						b = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(f).filter(function(P) {
						return Object.getOwnPropertyDescriptor(f, P).enumerable
					})), b.forEach(function(P) {
						u(d, P, f[P])
					})
				}
				return d
			}

			function u(d, c, f) {
				return c = l(c), c in d ? Object.defineProperty(d, c, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[c] = f, d
			}

			function l(d) {
				var c = v(d, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function v(d, c) {
				if (typeof d != "object" || d === null) return d;
				var f = d[Symbol.toPrimitive];
				if (f !== void 0) {
					var b = f.call(d, c || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(d)
			}
			const i = "blocked-content-table-tooltip",
				m = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					canceled: "gray"
				},
				g = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				n = {
					[e.$E.Active]: [e.M3.Active, e.M3.InReview],
					[e.$E.Pending]: [e.M3.Pending, e.M3.Canceled]
				},
				s = {
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
					filters: Object.values(e.GH).reduce((d, c) => a({}, d, {
						[c]: c
					}), {})
				};
			let r = function(d) {
				return d.COPY_URL = "copy blocked content url", d.REQUEST_REVIEW = "request blocked content review", d.ADD_FILTER = "Add filter", d.REMOVE_FILTER = "Remove filter", d
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
					return u
				}
			});
			let e = function(v) {
					return v.Pending = "pending", v.Active = "active", v
				}({}),
				o = function(v) {
					return v.Active = "active", v.InReview = "in_review", v.Pending = "pending", v.Canceled = "canceled", v
				}({}),
				a = function(v) {
					return v.Domain = "domain", v.Status = "status", v.BlockType = "blockType", v
				}({}),
				u = function(v) {
					return v.EnforcementDate = "enforcementDate", v.BlockType = "blockType", v.Hostname = "hostname", v.Status = "status", v
				}({}),
				l = function(v) {
					return v.Removed = "removed", v.Misclassified = "misclassified", v
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
			let e = function(u) {
				return u.LOAD_SCAN_INFO = "load url scan information", u.INITIATE_URL_SCAN = "initiate url scan", u
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
			let a = function(u) {
				return u.LOAD_THREAT_EVENTS = "load threat events", u.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", u.THREAT_EVENTS_FILTERS = "threat events filters applied", u.ABUSE_REPORT_BUTTON_CLICK = "clicked abuse report button", u.ABUSE_REPORT_SUBMIT_CLICK = "clicked submit abuse report button", u.ABUSE_REPORT_SUBMIT_FAILED = "abuse report submission failed", u.ABUSE_REPORT_SUBMIT_SUCCESS = "abuse report submitted successfully", u
			}({})
		},
		"../react/pages/security/analytics/resources/labels.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				AS: function() {
					return v
				},
				IK: function() {
					return s
				},
				Ki: function() {
					return a
				},
				Lz: function() {
					return r
				},
				nT: function() {
					return m
				},
				o4: function() {
					return d
				},
				oY: function() {
					return u
				},
				qH: function() {
					return n
				},
				x3: function() {
					return i
				}
			});
			var e = t("../react/pages/security/analytics/resources/labels.ts"),
				o = t("../react/common/constants/analytics/botScoreSrc.ts");
			const a = ["block", "challenge", "jschallenge", "managedChallenge"],
				u = ["miss", "expired", "bypass", "dynamic"],
				l = c => Object.fromEntries(Object.entries(c).map(([f, b]) => [b, f])),
				v = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				i = l(v),
				m = {
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
				g = l(m),
				n = l(o.EG);
			let s = function(c) {
				return c.SAMPLED = "sampled", c.RAW = "raw", c
			}({});
			const r = "security-analytics-log-explorer";
			let d = function(c) {
				return c.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', c.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', c.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', c.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', c.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', c
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Fj: function() {
					return m
				},
				kq: function() {
					return i
				},
				xr: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var s = 1; s < arguments.length; s++) {
					var r = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(r).filter(function(c) {
						return Object.getOwnPropertyDescriptor(r, c).enumerable
					})), d.forEach(function(c) {
						u(n, c, r[c])
					})
				}
				return n
			}

			function u(n, s, r) {
				return s = l(s), s in n ? Object.defineProperty(n, s, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = r, n
			}

			function l(n) {
				var s = v(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function v(n, s) {
				if (typeof n != "object" || n === null) return n;
				var r = n[Symbol.toPrimitive];
				if (r !== void 0) {
					var d = r.call(n, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			let i = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const m = {
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
				g = ({
					name: n,
					category: s = "user journey",
					product: r = i.MAIN,
					productName: d,
					additionalData: c
				}) => {
					o().sendEvent(n, a({
						category: s,
						product: r,
						productName: d
					}, c || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
					return o
				}
			});
			let e = function(l) {
					return l.INITIAL_FETCH_SCORES = "view bots scores distribution", l.FETCH_CONFIGURATION = "view bots configuration page", l.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", l.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", l.UPDATE_SETTINGS = "update bots settings", l.DELETE_RULE = "delete bots ruleset", l.UPDATE_RULE = "update bots ruleset", l.FETCH_RULES = "view bots ruleset", l.CONFIGURE_BOT_MANAGEMENT = "view bots management", l.WAF_RULES_REDIRECT = "redirect waf rules", l.CHANGED_ZONE_SETTINGS = "change zone setting", l
				}({}),
				o = function(l) {
					return l.PROVIDED_TEMPLATE = "provided template link in detection card", l.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", l.USE_TEMPLATE = "use template", l.CREATE_FIREWALL_RULE = "create firewall rule", l.WAF_RULES = "waf rules", l
				}({});
			const a = "user journey",
				u = "Bots"
		},
		"../react/pages/security/overview/resources/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				AZ: function() {
					return u
				},
				Ht: function() {
					return a
				},
				Kx: function() {
					return e
				},
				S: function() {
					return o
				}
			});
			let e = function(l) {
				return l.NAME = "description", l.SOURCE = "source", l.LAST_UPDATE = "lastUpdatedAt", l.ACTIVITY = "activity", l
			}({});
			const o = 5;
			let a = function(l) {
					return l.EXTERNAL_DOCUMENTATION = "external_documentation", l.LINK_TO_MANAGED = "link_to_managed_rules", l.LINK_TO_EVENTS = "link_to_security_events", l.LINK_TO_DDOS = "link_to_ddos", l.LINK_BOT_MGMT = "link_to_bot_mgmt", l.LINK_TO_AI_AUDIT = "link_to_ai_audit", l.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", l.LINK_TO_PAGE_SHIELD = "link_to_page_shield", l.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", l.LINK_TO_SECURITY_EVENTS = "link_to_security_events", l.LINK_TO_IP_RULE = "link_to_ip_rule", l.LINK_TO_CONFIGURATION = "link_to_configuration", l
				}({}),
				u = function(l) {
					return l.LOAD_INSIGHTS = "load overview action items", l.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", l.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", l.CLICK_ACTION_INSIGHT = "click overview action item suggestion", l
				}({})
		},
		"../react/pages/security/page-shield/resources/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				CP: function() {
					return A
				},
				FV: function() {
					return ce
				},
				KH: function() {
					return S
				},
				Ks: function() {
					return B
				},
				Lj: function() {
					return z
				},
				MC: function() {
					return s
				},
				Mq: function() {
					return D
				},
				OV: function() {
					return pe
				},
				Oq: function() {
					return N
				},
				QM: function() {
					return _
				},
				SI: function() {
					return F
				},
				SJ: function() {
					return P
				},
				Sk: function() {
					return k
				},
				Ti: function() {
					return h
				},
				Uc: function() {
					return T
				},
				Uq: function() {
					return m
				},
				Uv: function() {
					return ae
				},
				V0: function() {
					return g
				},
				VT: function() {
					return c
				},
				YC: function() {
					return U
				},
				j$: function() {
					return w
				},
				qc: function() {
					return b
				},
				sV: function() {
					return I
				},
				sW: function() {
					return ue
				},
				u8: function() {
					return d
				},
				v5: function() {
					return n
				},
				xg: function() {
					return Q
				},
				yd: function() {
					return O
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				a = t("../react/pages/security/page-shield/resources/types.ts");

			function u(x) {
				for (var G = 1; G < arguments.length; G++) {
					var q = arguments[G] != null ? Object(arguments[G]) : {},
						ie = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(q).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(q, ee).enumerable
					})), ie.forEach(function(ee) {
						l(x, ee, q[ee])
					})
				}
				return x
			}

			function l(x, G, q) {
				return G = v(G), G in x ? Object.defineProperty(x, G, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[G] = q, x
			}

			function v(x) {
				var G = i(x, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function i(x, G) {
				if (typeof x != "object" || x === null) return x;
				var q = x[Symbol.toPrimitive];
				if (q !== void 0) {
					var ie = q.call(x, G || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(x)
			}
			const m = 50,
				g = 9,
				n = "copy script url page shield",
				s = "disable page shield",
				r = "click documentation link",
				d = "enable page shield",
				c = "filter search page shield",
				f = "filter search view all page shield",
				b = "hover score tooltip page shield",
				P = "open alert modal page shield",
				w = "change pagination page shield",
				y = "close script modal page shield",
				O = "open script modal page shield",
				_ = "select alert type page shield",
				T = "sort column page shield",
				D = {
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
				S = {
					STARTS_WITH: o.Gn.startsWith,
					ENDS_WITH: o.Gn.endsWith,
					EQUALS: o.Gn.equals,
					CONTAINS: o.Gn.contains,
					DOES_NOT_CONTAIN: o.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: o.Gn.in
				},
				N = {
					status: {
						example: "active",
						type: e.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [S.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: e.kE.string,
						options: ["true", "false"],
						operators: [S.CONTAINS, S.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [S.EQUALS],
						type: e.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: e.kE.string,
						operators: [S.INCLUDES, S.ENDS_WITH, S.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				A = u({}, N, {
					urls: u({}, N.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				I = {
					type: {
						example: "first_party",
						type: e.kE.select,
						options: ["first_party", "unknown"],
						label: "common.type",
						urlParam: "type",
						operators: [o.Gn.equals]
					},
					name: {
						example: "cookie_1",
						operators: [o.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.name",
						urlParam: "name"
					},
					domain: {
						example: "hostname.com",
						operators: [o.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.domain",
						urlParam: "domain"
					},
					path: {
						example: "/",
						operators: [o.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.path",
						urlParam: "path"
					},
					same_site: {
						operators: [o.Gn.equals],
						type: e.kE.select,
						options: ["lax", "strict", "none"],
						label: "firewall.page_shield.same_site",
						urlParam: "same_site"
					},
					http_only: {
						operators: [o.Gn.equals],
						type: e.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.http_only",
						urlParam: "http_only"
					},
					secure: {
						operators: [o.Gn.equals],
						type: e.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.secure",
						urlParam: "secure"
					}
				};
			let L = function(x) {
				return x.SECURITY_THREATS = "Security Threats", x.C2_BOTNET = "C2 & Botnet", x.CRYPTOMINING = "Cryptomining", x.MALWARE = "Malware", x.PHISHING = "Phishing", x.SPYWARE = "Spyware", x.DGA_DOMAINS = "DGA Domains", x.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", x
			}({});
			const k = "https://www.cloudflare.com/plans/enterprise/contact/",
				U = {
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
				Q = {
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
					[a.I1.STYLE]: "firewall.page_shield.policies.table.style",
					[a.I1.UPGRADE_INSECURE_REQUESTS]: "firewall.page_shield.policies.table.upgrade_insecure_requests",
					[a.I1.WORKER]: "firewall.page_shield.policies.table.worker"
				},
				ae = {
					[a.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[a.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[a.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[a.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[a.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				pe = {
					[a.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[a.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				ce = {
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
				ue = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				F = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				z = {
					[a.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[a.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[a.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				B = {
					[a.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[a.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[a.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				h = {
					[a.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[a.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[a.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
					return O.Xe
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
					return O.k2
				},
				$g: function() {
					return O.$g
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
					return O.I1
				},
				Wq: function() {
					return O.Wq
				},
				jf: function() {
					return O.jf
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
					return O.R$
				},
				pG: function() {
					return b
				},
				Ar: function() {
					return f
				},
				Sk: function() {
					return u.Sk
				},
				gY: function() {
					return P
				},
				SE: function() {
					return l
				},
				m: function() {
					return n
				},
				xP: function() {
					return g
				},
				CI: function() {
					return r
				},
				p0: function() {
					return d
				},
				xl: function() {
					return m
				},
				Tb: function() {
					return i
				},
				h3: function() {
					return w
				},
				xq: function() {
					return V
				},
				SQ: function() {
					return G
				},
				C0: function() {
					return q
				},
				av: function() {
					return D
				},
				W3: function() {
					return _
				},
				WO: function() {
					return I
				},
				Dk: function() {
					return ae
				},
				we: function() {
					return F
				},
				Yt: function() {
					return h
				},
				ex: function() {
					return B
				},
				E1: function() {
					return z
				},
				e0: function() {
					return ce
				},
				UH: function() {
					return L
				},
				Qt: function() {
					return ue
				},
				K$: function() {
					return k
				},
				dm: function() {
					return N
				},
				oK: function() {
					return U
				},
				qZ: function() {
					return x
				},
				_4: function() {
					return ie
				},
				qo: function() {
					return ee
				},
				CB: function() {
					return v
				},
				ti: function() {
					return c
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(o),
				u = t("../react/pages/security/page-shield/resources/constants.ts");
			const l = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", $ => (a().sendEvent(u.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), $)),
				v = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", $ => (a().sendEvent(u.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), $)),
				i = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", $ => (a().sendEvent(u.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), $)),
				m = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				g = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", $ => (a().sendEvent(u.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), $)),
				n = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				s = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", $ => (a().sendEvent(u.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), $)),
				r = (0, e.ZP)("pageShieldPolicies", "get", "/zones/(zoneId)/page_shield/policies").on("success", $ => (a().sendEvent(u.FV.VIEW_PAGE_SHIELD_POLICIES, {
					category: "user journey",
					product: "Page shield"
				}), $)),
				d = (0, e.ZP)("pageShieldPolicy", "get", "/zones/(zoneId)/page_shield/policies/(policiesId)"),
				c = (0, e.ZP)("pageShieldPolicy", "put", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", $ => (a().sendEvent(u.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "update"
				}), $)),
				f = (0, e.ZP)("pageShieldPolicy", "delete", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", $ => (a().sendEvent(u.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "delete"
				}), $)),
				b = (0, e.ZP)("pageShieldPolicy", "post", "/zones/(zoneId)/page_shield/policies").on("success", $ => (a().sendEvent(u.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "create"
				}), $)),
				P = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				w = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var y = t("../react/app/redux/normalizer.js"),
				O = t("../react/pages/security/page-shield/resources/types.ts");
			const _ = $ => $.pageShield.configuration,
				T = $ => {
					var te;
					return (te = $.pageShield.configuration.data) === null || te === void 0 ? void 0 : te.enabled
				},
				D = $ => {
					var te;
					return (te = _($)) === null || te === void 0 ? void 0 : te.data
				},
				S = $ => $.pageShield.scripts,
				N = $ => $.pageShield.script,
				A = $ => $.pageShield.connections,
				I = $ => $.pageShield.connection,
				L = $ => $.pageShield.policies,
				k = $ => $.pageShield.policy,
				U = (0, y.P1)("pageShieldScripts", S),
				Q = (0, y.P1)("pageShieldScript", N),
				ae = (0, y.P1)("pageShieldConnections", A),
				pe = (0, y.P1)("pageShieldConnection", I),
				ce = (0, y.P1)("pageShieldPolicies", L),
				ue = (0, y.P1)("pageShieldPolicy", k),
				F = ($, te) => $ === O.Wq.SCRIPT_MONITOR ? U(te) || [] : ae(te) || [],
				z = ($, te) => $ === O.Wq.SCRIPT_MONITOR ? S(te) || [] : A(te) || [],
				B = ($, te) => $ === O.Wq.SCRIPT_MONITOR ? Q(te) : pe(te),
				h = $ => $.pageShield.domainIntel,
				x = $ => $.pageShield.whoIsRecord,
				G = ($, te, me) => {
					var le;
					const ge = Object.values(me).map(ye => ({
						key: ye,
						label: u.Uv[ye],
						score: $[ye]
					})).filter(ye => ye.score !== void 0 && ye.score <= te);
					return te === u.V0 && ge.length === 0 && ((le = $.js_integrity_score) !== null && le !== void 0 ? le : 100) <= te && ge.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), ge
				},
				q = ($, te) => Object.values(te).filter(me => $[me] === !0).map(me => u.OV[me]),
				ie = $ => $ === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				ee = ($, te) => $[O.$g.MagecartScore] !== void 0 && $[O.$g.MagecartScore] <= te || $[O.$g.MalwareScore] !== void 0 && $[O.$g.MalwareScore] <= te || $[O.$g.CryptominingScore] !== void 0 && $[O.$g.CryptominingScore] <= te || $.js_integrity_score !== void 0 && $.js_integrity_score <= te,
				M = ["cdn.jsdelivr.net", "unpkg.com"],
				K = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				V = $ => {
					if ($.includes("@latest")) {
						const me = $.split("@latest");
						if (me.length != 2) return;
						const le = me[0].length,
							ge = le + "@latest".length;
						return [le, ge]
					}
					if (!!M.some(me => $.includes(me)))
						for (const me of K) {
							const le = $.match(me);
							if (!le) continue;
							const ge = le.index;
							if (ge === 0) return null;
							const ye = ge + le[0].length;
							return [ge, ye]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$g: function() {
					return g
				},
				I1: function() {
					return l
				},
				R$: function() {
					return n
				},
				Wq: function() {
					return m
				},
				Xe: function() {
					return v
				},
				jf: function() {
					return i
				},
				k2: function() {
					return s
				}
			});

			function e(r) {
				for (var d = 1; d < arguments.length; d++) {
					var c = arguments[d] != null ? Object(arguments[d]) : {},
						f = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(c).filter(function(b) {
						return Object.getOwnPropertyDescriptor(c, b).enumerable
					})), f.forEach(function(b) {
						o(r, b, c[b])
					})
				}
				return r
			}

			function o(r, d, c) {
				return d = a(d), d in r ? Object.defineProperty(r, d, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[d] = c, r
			}

			function a(r) {
				var d = u(r, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function u(r, d) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var f = c.call(r, d || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(r)
			}
			let l = function(r) {
				return r.BASE_URI = "base-uri", r.CHILD = "child-src", r.CONNECT = "connect-src", r.DEFAULT = "default-src", r.FONT = "font-src", r.FORM_ACTION = "form-action", r.FRAME = "frame-src", r.FRAME_ANCESTORS = "frame-ancestors", r.IMAGE = "img-src", r.MANIFEST = "manifest-src", r.MEDIA = "media-src", r.OBJECT = "object-src", r.SCRIPT = "script-src", r.STYLE = "style-src", r.WORKER = "worker-src", r.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", r
			}({});
			const v = e({}, l, {
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
			let i = function(r) {
					return r.MONITOR = "monitor", r.POLICIES = "policies", r.SETTINGS = "settings", r
				}({}),
				m = function(r) {
					return r.SCRIPT_MONITOR = "script", r.CONNECTION_MONITOR = "connection", r.COOKIE_MONITOR = "cookie", r
				}({}),
				g = function(r) {
					return r.CryptominingScore = "cryptomining_score", r.MalwareScore = "malware_score", r.MagecartScore = "magecart_score", r
				}({}),
				n = function(r) {
					return r.DataflowScore = "dataflow_score", r.ObfuscationScore = "obfuscation_score", r
				}({}),
				s = function(r) {
					return r.DomainMalicious = "domain_reported_malicious", r.UrlMalicious = "url_reported_malicious", r
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				_C: function() {
					return c
				},
				_R: function() {
					return f
				},
				dY: function() {
					return P
				},
				fy: function() {
					return O
				},
				ji: function() {
					return d
				},
				pR: function() {
					return b
				},
				pV: function() {
					return _
				},
				rj: function() {
					return y
				},
				yR: function() {
					return T
				},
				zf: function() {
					return w
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				o = t("../../../common/util/types/src/api/phases/fields.tsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				l = t("../react/utils/translator.tsx"),
				v = t("../react/pages/security/resources/types.ts"),
				i = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				m = t("../node_modules/@cloudflare/elements/es/index.js");

			function g(D) {
				for (var S = 1; S < arguments.length; S++) {
					var N = arguments[S] != null ? Object(arguments[S]) : {},
						A = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(N).filter(function(I) {
						return Object.getOwnPropertyDescriptor(N, I).enumerable
					})), A.forEach(function(I) {
						n(D, I, N[I])
					})
				}
				return D
			}

			function n(D, S, N) {
				return S = s(S), S in D ? Object.defineProperty(D, S, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[S] = N, D
			}

			function s(D) {
				var S = r(D, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function r(D, S) {
				if (typeof D != "object" || D === null) return D;
				var N = D[Symbol.toPrimitive];
				if (N !== void 0) {
					var A = N.call(D, S || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(D)
			}
			const d = 10;
			let c = function(D) {
					return D.MTLS_ACCESS = "mTLS-enforced authentication", D.ZONE_LOCKDOWN = "Zone lockdown", D.USER_AGENT = "User agent blocking", D.EMAIL_VALIDITY = "Disposable email checks", D.IP_BASED = "IP-based rule", D.GEOGRAPHY_BASE = "Geography-based rule", D
				}({}),
				f = function(D) {
					return D.LEAKED_CREDENTIALS = "Leaked Credentials Checks", D
				}({});
			const b = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				P = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: c.GEOGRAPHY_BASE,
					trackedEvent: b.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: c.IP_BASED,
					trackedEvent: b.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: c.USER_AGENT,
					trackedEvent: b.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: c.ZONE_LOCKDOWN,
					trackedEvent: b.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				w = {
					[v.X.UI_SECTION]: D => ({
						[c.MTLS_ACCESS]: {
							ruleName: c.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${D.account.id}/${D.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[c.ZONE_LOCKDOWN]: {
							ruleName: c.ZONE_LOCKDOWN,
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [m.ZC, e.QV],
								applyMarkdown: !0,
								componentProps: [{
									display: "inline"
								}, {
									to: `/${D.account.id}/configurations/lists`
								}]
							})
						},
						[c.GEOGRAPHY_BASE]: {
							ruleName: c.GEOGRAPHY_BASE,
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.geography_based.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.geography_based.wafRulesOverview"
							})
						},
						[c.IP_BASED]: {
							ruleName: c.IP_BASED,
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.ip_base.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.ip_base.wafRulesOverview",
								applyMarkdown: !0,
								Components: [m.ZC, e.QV],
								componentProps: [{
									display: "inline"
								}, {
									to: `/${D.account.id}/configurations/lists`
								}]
							})
						},
						[c.USER_AGENT]: {
							ruleName: c.USER_AGENT,
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${D.account.id}/configurations/lists`
								}]
							})
						},
						[c.EMAIL_VALIDITY]: {
							ruleName: c.EMAIL_VALIDITY,
							capability: "security_rules.rules.capability.fraud",
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.disposable_email.wafRulesOverview"
							}),
							hasWafPermission: !0
						}
					}),
					[v.X.WAF_RULES]: {
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
							expression: '(http.user_agent eq "BadBot/1.0.2 (+http://bad.bot)")',
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
							expression: '(ip.src.asnum eq "") or (ip.src.country eq "") or (ip.src.continent eq "")',
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
				y = {
					[v.X.WAF_RULES]: {
						[f.LEAKED_CREDENTIALS]: {
							ruleName: f.LEAKED_CREDENTIALS,
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
					[v.X.UI_SECTION]: {
						[f.LEAKED_CREDENTIALS]: {
							ruleName: f.LEAKED_CREDENTIALS,
							displayName: u().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: u().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let O = function(D) {
				return D.DISCOVERY = "discovery", D.SEQUENCES = "sequences", D.SCHEMA_VALIDATION = "schema-validation", D.SETTINGS = "settings", D.API_RULES = "api-rules", D.UPGRADE = "upgrade", D
			}({});
			const _ = g({}, i.g, {
				[o.df.HttpRequestFirewallManaged]: g({}, i.g[o.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[o.df.HttpRequestFirewallCustom]: g({}, i.g[o.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[o.df.HttpRateLimit]: g({}, i.g[o.df.HttpRateLimit], {
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
			let T = function(D) {
				return D.APP_SEC_MVP = "app-security-navigation-mvp", D
			}({})
		},
		"../react/pages/security/resources/types.ts": function(W, E, t) {
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
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				j: function() {
					return m
				},
				y: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(g) {
				for (var n = 1; n < arguments.length; n++) {
					var s = arguments[n] != null ? Object(arguments[n]) : {},
						r = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && r.push.apply(r, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), r.forEach(function(d) {
						u(g, d, s[d])
					})
				}
				return g
			}

			function u(g, n, s) {
				return n = l(n), n in g ? Object.defineProperty(g, n, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[n] = s, g
			}

			function l(g) {
				var n = v(g, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function v(g, n) {
				if (typeof g != "object" || g === null) return g;
				var s = g[Symbol.toPrimitive];
				if (s !== void 0) {
					var r = s.call(g, n || "default");
					if (typeof r != "object") return r;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(g)
			}
			let i = function(g) {
				return g.CLICK_OPT_IN = "click opt in security navigation", g.CLICK_OPT_IN_BUTTON = "click opt in button", g.CLICK_OPT_OUT_BUTTON = "click opt out button", g.CLICK_NEXT_STEP = "click opt in next step", g.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", g.DISPLAY_MODAL = "display opt in modal", g.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", g.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", g.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", g
			}({});
			const m = (g, n = {}) => {
				o().sendEvent(g, a({}, n || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$y: function() {
					return c
				},
				Ai: function() {
					return n
				},
				B: function() {
					return g
				},
				BT: function() {
					return l
				},
				CK: function() {
					return m
				},
				F3: function() {
					return f
				},
				JP: function() {
					return a
				},
				O_: function() {
					return s
				},
				X2: function() {
					return u
				},
				YO: function() {
					return b
				},
				_c: function() {
					return P
				},
				je: function() {
					return d
				},
				ll: function() {
					return v
				},
				qD: function() {
					return i
				},
				tw: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const a = async w => {
				var y, O;
				const _ = await (0, e.get)(`/zones/${w}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((y = _ == null ? void 0 : _.body) === null || y === void 0 || (O = y.result) === null || O === void 0 ? void 0 : O.value) === "enabled"
			}, u = async (w, y) => (await (0, e.post)(`/zones/${w}/content-upload-scan/${y?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), y), l = async w => {
				var y;
				const O = await (0, e.get)(`/zones/${w}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((y = O == null ? void 0 : O.body) === null || y === void 0 ? void 0 : y.result) || []
			}, v = async (w, y) => {
				var O;
				const _ = await (0, e.post)(`/zones/${w}/content-upload-scan/payloads`, {
					body: [y]
				});
				return (O = _ == null ? void 0 : _.body) === null || O === void 0 ? void 0 : O.result
			}, i = async (w, y) => (await (0, e.del)(`/zones/${w}/content-upload-scan/payloads/${y}`, {
				hideErrorAlert: !0
			}), y), m = async w => {
				var y;
				const O = await (0, e.get)(`/zones/${w}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((y = O == null ? void 0 : O.body) === null || y === void 0 ? void 0 : y.pii_detection_enabled)
			}, g = async (w, y) => (await (0, e.put)(`/zones/${w}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: y
				}
			}), y), n = async w => {
				var y, O;
				const _ = await (0, e.get)(`/zones/${w}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((y = _ == null ? void 0 : _.body) === null || y === void 0 || (O = y.result) === null || O === void 0 ? void 0 : O.enabled)
			}, s = async (w, y) => {
				var O, _;
				const T = await (0, e.post)(`/zones/${w}/leaked-credential-checks`, {
					body: {
						enabled: y
					}
				});
				return !!((O = T == null ? void 0 : T.body) === null || O === void 0 || (_ = O.result) === null || _ === void 0 ? void 0 : _.enabled)
			}, r = async w => {
				var y;
				const O = await (0, e.get)(`/zones/${w}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (y = O == null ? void 0 : O.body) === null || y === void 0 ? void 0 : y.result
			}, d = async (w, y) => {
				var O;
				const _ = await (0, e.post)(`/zones/${w}/leaked-credential-checks/detections`, {
					body: y
				});
				return (O = _ == null ? void 0 : _.body) === null || O === void 0 ? void 0 : O.result
			}, c = async (w, y) => (await (0, e.del)(`/zones/${w}/leaked-credential-checks/detections/${y}`, {
				hideErrorAlert: !0
			}), y), f = async (w, y) => {
				await (0, e.put)(`/zones/${w}/security-center/securitytxt`, {
					body: y
				})
			}, b = async w => {
				await (0, e.del)(`/zones/${w}/security-center/securitytxt`)
			}, P = async w => (await (0, e.get)(`/zones/${w}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Xu: function() {
					return c
				},
				Io: function() {
					return D
				},
				FQ: function() {
					return ue
				},
				vU: function() {
					return d
				},
				M: function() {
					return b
				},
				d7: function() {
					return f
				},
				Oz: function() {
					return T
				},
				Np: function() {
					return ae
				},
				WR: function() {
					return g
				},
				bE: function() {
					return pe
				},
				u_: function() {
					return r
				},
				pf: function() {
					return S
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				o = t("../react/pages/security/settings/hooks/api.ts"),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t("webpack/sharing/consume/default/react-redux/react-redux"),
				l = t("../react/pages/security/settings/resources/index.ts"),
				v = t("../react/common/hooks/useZoneEntitlement.ts"),
				i = t("../../../../node_modules/yup/es/index.js"),
				m = t("../react/utils/translator.tsx");
			const g = () => (0, u.useSelector)(l.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				s = () => !!useZoneEntitlement(n),
				r = () => {
					const {
						t: F
					} = (0, m.QT)(), z = i.Z_().required(F("common.field_is_required")).max(24, F("labels.apply.form.name.error.max_characters")).matches(l.DG, F("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", F("labels.apply.form.name.error.cf_forbidden"), x => !l.aW.test(x)), B = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: x => i.Ry().shape({
							[l.n5.NAME]: x ? i.Z_() : z,
							[l.n5.DESCRIPTION]: x ? i.Z_().optional() : i.Z_().max(150, F("labels.apply.form.description.error.max_characters"))
						})
					}, h = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[l.N2.NAME]: "",
							[l.N2.SOURCE]: l.W3,
							[l.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => i.Ry().shape({
							[l.N2.NEW_LABEL_NAME]: z
						})
					};
					return {
						LABELS_APPLY_FORM: B,
						EDIT_LABELS_MODAL_FORM: h
					}
				},
				d = ({
					modalHeaderFixedHeight: F = 62,
					modalDefaultPaddings: z = 16
				} = {}) => {
					const B = (0, a.useRef)(null),
						h = (0, a.useRef)(null),
						[x, G] = (0, a.useState)(0),
						[q, ie] = (0, a.useState)(0),
						ee = `calc(100vh - ${x}px - ${q}px - ${z}px)`,
						[M, K] = (0, a.useState)("");
					return (0, a.useEffect)(() => {
						const V = () => {
							var $, te, me, le;
							const ge = B == null || ($ = B.current) === null || $ === void 0 ? void 0 : $.offsetHeight,
								ye = h == null || (te = h.current) === null || te === void 0 ? void 0 : te.offsetHeight,
								Ae = ((me = ge) !== null && me !== void 0 ? me : 0) + F,
								Be = (le = ye) !== null && le !== void 0 ? le : 0;
							G(Ae), ie(Be)
						};
						return V(), window.addEventListener("resize", V), () => window.removeEventListener("resize", V)
					}, []), {
						searchTerm: M,
						setSearchTerm: K,
						scrollableSectionMaxHeight: ee,
						topMenuRef: B,
						bottomMenuRef: h
					}
				},
				c = F => {
					const z = g(),
						B = (0, e.useQueryClient)(),
						h = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${F}`,
							queryFn: () => (0, o.JP)(F),
							enabled: z
						}),
						x = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${F}`,
							queryFn: () => (0, o.BT)(F),
							enabled: z && !!(h == null ? void 0 : h.data)
						}),
						G = (0, e.useMutation)({
							mutationFn: async ({
								enabled: ee
							}) => await (0, o.X2)(F, ee),
							onSuccess: ee => {
								B.setQueryData([`content-scanning-enabled-${F}`], ee)
							}
						}),
						q = (0, e.useMutation)({
							mutationFn: ee => (0, o.ll)(F, ee),
							onSuccess: ee => {
								B.setQueryData([`content-scanning-detections-${F}`], ee)
							}
						}),
						ie = (0, e.useMutation)({
							mutationFn: ee => (0, o.qD)(F, ee),
							onSuccess: ee => {
								var M;
								const K = (M = B.getQueryData(`content-scanning-detections-${F}`)) !== null && M !== void 0 ? M : [];
								B.setQueryData([`content-scanning-detections-${F}`], K.filter(({
									id: V
								}) => V !== ee))
							}
						});
					return {
						entitled: z,
						loading: h.isLoading || x.isLoading,
						error: h.isError || x.isError,
						enabled: {
							data: h.data,
							isToggling: G.isLoading,
							toggleEnabled: async ee => G.mutateAsync({
								enabled: ee
							})
						},
						detections: {
							data: x.data,
							add: q.mutateAsync,
							delete: ie.mutateAsync,
							loading: q.isLoading || ie.isLoading
						}
					}
				},
				f = () => {
					const F = (0, u.useSelector)(l.cN),
						z = (0, u.useSelector)(l.bH),
						B = (0, u.useSelector)(l.P3),
						h = (0, u.useSelector)(l.Ri);
					return {
						hasEditPermission: F,
						isEnabled: B && (z.hasSimilarLeaked || z.hasUsernameAndPasswordLeaked || h)
					}
				},
				b = F => {
					const z = f(),
						B = (0, e.useQueryClient)(),
						h = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${F}`,
							queryFn: () => (0, o.Ai)(F),
							enabled: !!z.isEnabled,
							retry: 1
						}),
						x = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${F}`,
							queryFn: () => (0, o.tw)(F),
							enabled: !!z.isEnabled && !!(h == null ? void 0 : h.data)
						}),
						G = (0, e.useMutation)({
							mutationFn: ({
								enabled: ee
							}) => (0, o.O_)(F, ee),
							onSuccess: ee => {
								B.setQueryData([`leaked-credentials-enabled-${F}`], ee)
							}
						}),
						q = (0, e.useMutation)({
							mutationFn: async ee => await (0, o.je)(F, ee),
							onSuccess: ee => {
								var M;
								const K = (M = B.getQueryData(`leaked-credentials-detections-${F}`)) !== null && M !== void 0 ? M : [];
								B.setQueryData([`leaked-credentials-detections-${F}`], [...K, ee])
							}
						}),
						ie = (0, e.useMutation)({
							mutationFn: ee => (0, o.$y)(F, ee),
							onSuccess: ee => {
								var M;
								const K = (M = B.getQueryData(`leaked-credentials-detections-${F}`)) !== null && M !== void 0 ? M : [];
								B.setQueryData([`leaked-credentials-detections-${F}`], K.filter(({
									id: V
								}) => V !== ee))
							}
						});
					return {
						entitled: z.isEnabled,
						hasEditPermissions: z.hasEditPermission,
						loading: h.isLoading || x.isLoading,
						error: h.isError || h.isError,
						enabled: {
							data: h.data,
							isToggling: G.isLoading,
							toggleEnabled: async ee => G.mutateAsync({
								enabled: ee
							})
						},
						detections: {
							data: x.data,
							add: q.mutateAsync,
							delete: ie.mutateAsync,
							loading: q.isLoading || ie.isLoading
						}
					}
				};
			var P = t("../react/common/selectors/zoneSelectors.ts"),
				w = t("../react/common/utils/useQueryCache.ts"),
				y = t("../react/app/redux/index.ts");
			const O = "security-txt",
				_ = {
					securityTxt: ({
						zoneId: F
					}) => [O, F]
				},
				T = F => (0, e.useQuery)({
					queryKey: _.securityTxt({
						zoneId: F
					}),
					queryFn: () => (0, o._c)(F),
					select: z => z.result
				}),
				D = () => {
					const F = (0, y.p4)(P.Cu),
						{
							invalidate: z
						} = (0, w.o)(_.securityTxt({
							zoneId: F
						}));
					return (0, e.useMutation)({
						mutationFn: () => (0, o.YO)(F),
						onSuccess: async () => {
							await z(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				S = F => {
					const {
						invalidate: z
					} = (0, w.o)(_.securityTxt({
						zoneId: F
					}));
					return (0, e.useMutation)({
						mutationFn: B => (0, o.F3)(F, B),
						onSuccess: async () => {
							await z(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var N = t("../../../../node_modules/lodash/isEqual.js"),
				A = t.n(N),
				I = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function L(F) {
				for (var z = 1; z < arguments.length; z++) {
					var B = arguments[z] != null ? Object(arguments[z]) : {},
						h = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(B).filter(function(x) {
						return Object.getOwnPropertyDescriptor(B, x).enumerable
					})), h.forEach(function(x) {
						k(F, x, B[x])
					})
				}
				return F
			}

			function k(F, z, B) {
				return z = U(z), z in F ? Object.defineProperty(F, z, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[z] = B, F
			}

			function U(F) {
				var z = Q(F, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function Q(F, z) {
				if (typeof F != "object" || F === null) return F;
				var B = F[Symbol.toPrimitive];
				if (B !== void 0) {
					var h = B.call(F, z || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(F)
			}
			const ae = F => {
					const {
						queryKey: z,
						zoneId: B
					} = (0, I.hL)(F), {
						isLoading: h,
						isError: x,
						isSuccess: G,
						data: q,
						refetch: ie,
						isRefetching: ee
					} = (0, e.useQuery)({
						queryKey: z,
						queryFn: () => I.Mi.getLabels(L({
							zoneId: B
						}, F)),
						onSuccess: () => {
							var M;
							const K = F == null || (M = F.filters) === null || M === void 0 ? void 0 : M.source;
							(K === l.LABEL_SOURCES.MANAGED || K === l.LABEL_SOURCES.USER) && (0, l.Tf)({
								name: l.QJ.FILTER_USER_MANAGED_LABELS,
								product: l.Iv.SECURITY_SETTINGS,
								pageName: l.R.LABELS_LIST,
								type: K
							})
						}
					});
					return {
						data: q == null ? void 0 : q.result,
						errors: q == null ? void 0 : q.errors,
						paginationData: q == null ? void 0 : q.result_info,
						isLoading: h,
						isError: x,
						isSuccess: G,
						refetch: ie,
						isRefetching: ee
					}
				},
				pe = ({
					labels: F,
					preselectedLabels: z
				}) => {
					const {
						USER: B,
						MANAGED: h
					} = l.LABEL_SOURCES, [x, G] = (0, a.useState)({
						[B]: [],
						[h]: []
					}), [q, ie] = (0, a.useState)(new Set), ee = q.size > 0, [M, K] = (0, a.useState)(!1), V = le => {
						ie(ge => {
							const ye = new Set(ge);
							return ye.has(le.name) ? ye.delete(le.name) : ye.add(le.name), ye
						})
					}, $ = le => q.has(le.name), te = (le, ge) => {
						const ye = $(le) ? 1 : 0;
						return ($(ge) ? 1 : 0) - ye
					}, me = le => {
						G(ge => ({
							[B]: [...le ? le[B] : ge[B]].sort(te),
							[h]: [...le ? le[h] : ge[h]].sort(te)
						}))
					};
					return (0, a.useEffect)(() => {
						if (F && !M) {
							if (z) {
								const le = new Set;
								F.forEach(ge => {
									z.some(ye => A()(ye, ge)) && le.add(ge.name)
								}), ie(le)
							}
							K(!0)
						}
					}, [F, z, M]), (0, a.useEffect)(() => {
						if (F && M) {
							const le = F.reduce((ye, Ae) => (Ae.source === B ? ye[B].push(Ae) : Ae.source === h && ye[h].push(Ae), ye), {
									[B]: [],
									[h]: []
								}),
								ge = {
									[B]: le[B].sort(te),
									[h]: le[h].sort(te)
								};
							G(ge)
						}
					}, [B, h, F, M]), {
						userAndManagedLabels: x,
						setUserAndManagedLabels: G,
						toggleSelectedLabel: V,
						isLabelSelected: $,
						sortLabelsBySelectedStatus: me,
						hasLabelsSelected: ee
					}
				};
			var ce = t("../react/pages/security/settings/resources/selectors.ts");
			const ue = (F = "") => {
				const z = (0, y.p4)(ce.Xs),
					B = z && (F == null ? void 0 : F.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: z,
					hasDeprecatedParameter: B
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				FQ: function() {
					return m.FQ
				},
				Iv: function() {
					return g.Iv
				},
				M: function() {
					return m.M
				},
				Np: function() {
					return m.Np
				},
				Oz: function() {
					return m.Oz
				},
				QJ: function() {
					return g.QJ
				},
				R: function() {
					return g.R
				},
				Tf: function() {
					return g.Tf
				},
				WR: function() {
					return m.WR
				},
				Xs: function() {
					return g.Xs
				},
				Xu: function() {
					return m.Xu
				},
				ZF: function() {
					return g.ZF
				},
				bE: function() {
					return m.bE
				},
				bH: function() {
					return g.bH
				},
				dC: function() {
					return g.dC
				},
				eC: function() {
					return g.eC
				},
				m8: function() {
					return g.m8
				},
				pf: function() {
					return m.pf
				},
				ui: function() {
					return g.ui
				},
				vc: function() {
					return g.vc
				},
				zF: function() {
					return g.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/app/components/Forbidden.jsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				l = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				v = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = t.n(v),
				m = t("../react/pages/security/settings/hooks/index.ts"),
				g = t("../react/pages/security/settings/resources/index.ts");
			const n = u().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(30285), t.e(12174), t.e(57062), t.e(84959), t.e(51436), t.e(70618), t.e(68204), t.e(2515), t.e(65022), t.e(63779), t.e(45275), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(28861), t.e(52215), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				s = () => {
					const {
						t: r
					} = (0, v.useI18n)(), d = (0, e.xk)("waf");
					return u().createElement(l.T3, {
						parentPageLabel: r("navigation.zone.security"),
						title: r("navigation.zone.security.settings"),
						type: "narrow"
					}, d.read ? u().createElement(n, null) : u().createElement(o.Z, null))
				};
			E.ZP = s
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Mi: function() {
					return y
				},
				hL: function() {
					return w
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				a = t("../react/common/utils/useQueryCache.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/common/hooks/useAccountId.ts"),
				v = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				i = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const m = {
				labels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var g = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				s = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function r(_, T) {
				if (_ == null) return {};
				var D = d(_, T),
					S, N;
				if (Object.getOwnPropertySymbols) {
					var A = Object.getOwnPropertySymbols(_);
					for (N = 0; N < A.length; N++) S = A[N], !(T.indexOf(S) >= 0) && (!Object.prototype.propertyIsEnumerable.call(_, S) || (D[S] = _[S]))
				}
				return D
			}

			function d(_, T) {
				if (_ == null) return {};
				var D = {},
					S = Object.keys(_),
					N, A;
				for (A = 0; A < S.length; A++) N = S[A], !(T.indexOf(N) >= 0) && (D[N] = _[N]);
				return D
			}

			function c(_) {
				for (var T = 1; T < arguments.length; T++) {
					var D = arguments[T] != null ? Object(arguments[T]) : {},
						S = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(D).filter(function(N) {
						return Object.getOwnPropertyDescriptor(D, N).enumerable
					})), S.forEach(function(N) {
						f(_, N, D[N])
					})
				}
				return _
			}

			function f(_, T, D) {
				return T = b(T), T in _ ? Object.defineProperty(_, T, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[T] = D, _
			}

			function b(_) {
				var T = P(_, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function P(_, T) {
				if (typeof _ != "object" || _ === null) return _;
				var D = _[Symbol.toPrimitive];
				if (D !== void 0) {
					var S = D.call(_, T || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(_)
			}
			const w = _ => {
					const T = (0, e.p4)(o.Cu),
						D = (0, l.F)(),
						S = O.labels(c({
							accountId: D,
							zoneId: T
						}, _ ? c({}, _) : {})),
						N = (0, a.o)(S);
					return c({
						zoneId: T,
						queryKey: S,
						batchInvalidateLabels: async () => {
							await N.batchInvalidate({
								queryKeysToPredicateInvalidate: [u.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, N)
				},
				y = {
					getLabels: async _ => {
						var T, D, S, N;
						let {
							zoneId: A,
							hideErrorAlert: I = !0
						} = _, L = r(_, ["zoneId", "hideErrorAlert"]);
						return (await v.get(m.labels.toUrl({
							zoneId: A
						}), {
							parameters: {
								page: L == null ? void 0 : L.page,
								per_page: L == null ? void 0 : L.per_page,
								with_mapped_resource_counts: L == null ? void 0 : L.with_mapped_resource_counts,
								filter: L == null || (T = L.filters) === null || T === void 0 ? void 0 : T.search,
								source: (0, n.sQ)(L == null || (D = L.filters) === null || D === void 0 ? void 0 : D.source),
								order: L == null || (S = L.sort) === null || S === void 0 ? void 0 : S.id,
								direction: (L == null ? void 0 : L.sort) ? (L == null || (N = L.sort) === null || N === void 0 ? void 0 : N.desc) ? s.Sr.desc : s.Sr.asc : void 0
							},
							hideErrorAlert: I
						})).body
					},
					getLabel: async _ => {
						let {
							zoneId: T,
							labelName: D,
							hideErrorAlert: S = !0
						} = _, N = r(_, ["zoneId", "labelName", "hideErrorAlert"]);
						const A = (0, n.mm)(D) ? m.managedLabel.toUrl({
							zoneId: T,
							labelName: D
						}) : m.userLabel.toUrl({
							zoneId: T,
							labelName: D
						});
						return (await v.get(A, {
							parameters: {
								with_mapped_resource_counts: N == null ? void 0 : N.with_mapped_resource_counts
							},
							hideErrorAlert: S
						})).body
					},
					editLabel: async ({
						zoneId: _,
						label: T,
						replace: D
					}) => {
						const {
							name: S
						} = T, N = r(T, ["name"]);
						return (await (D ? v.put : v.patch)(m.userLabel.toUrl({
							zoneId: _,
							labelName: T.name
						}), {
							body: N
						})).body
					},
					deleteLabel: async ({
						zoneId: _,
						labelName: T
					}) => (await v.del(m.userLabel.toUrl({
						zoneId: _,
						labelName: T
					}))).body,
					createLabel: async _ => {
						let {
							zoneId: T
						} = _, D = r(_, ["zoneId"]);
						const {
							product: S
						} = D, N = r(D, ["product"]);
						return (await v.post(m.userLabels.toUrl({
							zoneId: T
						}), {
							body: [N]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: _,
						user: T,
						managed: D,
						operationIds: S,
						replace: N
					}) => (await (N ? v.put : v.post)(m.operationsLinkedToLabels.toUrl({
						zoneId: _
					}), {
						body: c({}, T ? {
							user: {
								labels: T
							}
						} : {}, D ? {
							managed: {
								labels: D
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: S
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: _,
						labelName: T,
						operationIds: D
					}) => {
						const S = (0, n.mm)(T) ? m.managedLabelOperations.toUrl({
							zoneId: _,
							labelName: T
						}) : m.userLabelOperations.toUrl({
							zoneId: _,
							labelName: T
						});
						return (await v.put(S, {
							body: {
								selector: {
									include: {
										operation_ids: D
									}
								}
							}
						})).body
					}
				},
				O = {
					labels: _ => {
						let {
							accountId: T,
							zoneId: D
						} = _, S = r(_, ["accountId", "zoneId"]);
						return [u.IQ.LABELS, T, D, ...(0, g.isEmpty)(S) ? [] : [S]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				DG: function() {
					return b
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return i
				},
				GE: function() {
					return D
				},
				IQ: function() {
					return u
				},
				KV: function() {
					return v
				},
				LABELS_LIST_TOASTS: function() {
					return d
				},
				LABEL_SOURCES: function() {
					return l
				},
				QH: function() {
					return c
				},
				V: function() {
					return O
				},
				W3: function() {
					return a
				},
				_8: function() {
					return r
				},
				_c: function() {
					return _
				},
				aW: function() {
					return P
				},
				dC: function() {
					return N
				},
				gY: function() {
					return T
				},
				j8: function() {
					return m
				},
				jz: function() {
					return f
				},
				n5: function() {
					return w
				},
				om: function() {
					return g
				},
				w: function() {
					return o
				},
				zF: function() {
					return S
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let o = function(A) {
				return A.EXPOSED_CREDENTIALS = "exposed_credentials", A.CONTENT_SCANNING = "content_scanning", A
			}({});
			const a = "all";
			let u = function(A) {
					return A.LABELS = "labels", A
				}({}),
				l = function(A) {
					return A.USER = "user", A.MANAGED = "managed", A
				}({}),
				v = function(A) {
					return A.SOURCE = "source", A
				}({}),
				i = function(A) {
					return A.NAME = "name", A.SOURCE = "source", A.NEW_LABEL_NAME = "newLabelName", A
				}({}),
				m = function(A) {
					return A.ENDPOINT = "endpoint", A.METHOD = "method", A.OPERATION_ID = "operationId", A
				}({}),
				g = function(A) {
					return A.NAME = "name", A.MAPPED_RESOURCES = "mapped_resources.operations", A.SOURCE = "source", A.APPLY = "apply", A
				}({});
			const r = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: g.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[v.SOURCE]: a
					}
				},
				filters: v,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					autoClearQs: !0
				}
			};
			let d = function(A) {
				return A.CREATED_LABEL = "createdLabel", A.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", A.DELETED_LABEL = "deletedLabel", A.APPLIED_LABEL = "appliedLabel", A.EDITED_LABEL = "editedLabel", A.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", A
			}({});
			const c = "650px",
				f = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				b = /^[A-Za-z0-9-]+$/,
				P = /^cf-/;
			let w = function(A) {
				return A.NAME = "name", A.DESCRIPTION = "description", A
			}({});
			const y = "all";
			let O = function(A) {
				return A.METHOD = "method", A.HOSTNAME = "hostname", A
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
						[O.METHOD]: y,
						[O.HOSTNAME]: y
					}
				},
				filters: O
			};
			let T = function(A) {
				return A.TITLE = "title", A.DESCRIPTION = "description", A.SUBMIT = "submit", A
			}({});
			const D = 1e3,
				S = {
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
		"../react/pages/security/settings/resources/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				DG: function() {
					return e.DG
				},
				tR: function() {
					return d
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
					return s
				},
				zF: function() {
					return e.zF
				},
				QJ: function() {
					return f
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
					return r
				},
				Xs: function() {
					return w.Xs
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
					return w.bH
				},
				Mb: function() {
					return a.Mb
				},
				ui: function() {
					return w.ui
				},
				P3: function() {
					return w.P3
				},
				Ri: function() {
					return w.Ri
				},
				cN: function() {
					return w.cN
				},
				m8: function() {
					return P
				},
				Tf: function() {
					return b
				},
				$E: function() {
					return a.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				o = t("../react/pages/security/settings/resources/types.ts"),
				a = t("../react/pages/security/settings/resources/utils.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(u);

			function v(y) {
				for (var O = 1; O < arguments.length; O++) {
					var _ = arguments[O] != null ? Object(arguments[O]) : {},
						T = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(_).filter(function(D) {
						return Object.getOwnPropertyDescriptor(_, D).enumerable
					})), T.forEach(function(D) {
						i(y, D, _[D])
					})
				}
				return y
			}

			function i(y, O, _) {
				return O = m(O), O in y ? Object.defineProperty(y, O, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[O] = _, y
			}

			function m(y) {
				var O = g(y, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function g(y, O) {
				if (typeof y != "object" || y === null) return y;
				var _ = y[Symbol.toPrimitive];
				if (_ !== void 0) {
					var T = _.call(y, O || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(y)
			}
			let n = function(y) {
					return y.LABELS_LIST = "Labels List page", y.LABELS_APPLY = "Labels Apply page", y.LABELS_SIDE_MODAL = "Labels Side Modal", y.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", y.LABELS_OPERATION_DETAILS = "Operation Details page", y
				}({}),
				s = function(y) {
					return y.API_SHIELD = "API Shield", y.SECURITY_SETTINGS = "Security Settings", y
				}({}),
				r = function(y) {
					return y.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", y.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", y.OPERATIONS_TABLE_ROW = "Operations table row", y.OPERATION_DETAILS_PAGE = "Operation details page", y
				}({}),
				d = function(y) {
					return y.UPSERT = "upsert", y.OVERWRITE = "overwrite", y
				}({}),
				c = function(y) {
					return y.SINGLE = "single", y.MULTIPLE = "multiple", y
				}({}),
				f = function(y) {
					return y.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", y.DELETE_LABEL = "delete a user label in the settings page", y.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", y.CREATE_LABEL_CLICKED = "click create label button in the settings page", y.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", y.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", y.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", y.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", y.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", y.OPEN_LABELS_SIDE_MODAL = "open labels side modal", y.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", y.CREATE_NEW_LABEL = "create a new label", y
				}({});
			const b = ({
					name: y,
					product: O,
					category: _ = "user journey",
					pageName: T,
					from: D,
					write_strategy: S,
					type: N,
					target: A
				}) => {
					l().sendEvent(y, v({
						category: _,
						pageName: T,
						product: O
					}, D ? {
						from: D
					} : {}, S ? {
						write_strategy: S
					} : {}, N ? {
						type: N
					} : {}, A ? {
						target: A
					} : {}))
				},
				P = () => {
					var y;
					return (y = Object.values(f)) === null || y === void 0 ? void 0 : y.flat()
				};
			var w = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				P3: function() {
					return m
				},
				Ri: function() {
					return g
				},
				Xs: function() {
					return s
				},
				bH: function() {
					return n
				},
				cN: function() {
					return i
				},
				ui: function() {
					return v
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				o = t("../react/utils/url.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const v = r => {
					const d = (0, e.RO)(r),
						c = !!(0, a.rV)(r, "rulesets.file_upload_scan_allowed"),
						f = !!(0, a.BF)(r, "rulesets.file_upload_scan_allowed");
					return (0, o.el)(window.location.pathname) ? d && (c || f) : f
				},
				i = r => Number((0, a.rV)(r, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				m = r => (0, a.rV)(r, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				g = r => (0, a.rV)(r, "rulesets.leaked_credential_checks_allowed"),
				n = r => (0, l.z1)(u.dC)(r) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, a.rV)(r, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, a.rV)(r, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				s = r => !!(0, l.z1)("deprecate-security-level")(r)
		},
		"../react/pages/security/settings/resources/types.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				T: function() {
					return o
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let o = function(a) {
				return a.ENABLED = "enabled", a.CONTACT = "contact", a.EXPIRES = "expires", a.ENCRYPTION = "encryption", a.ACKNOWLEDGMENTS = "acknowledgments", a.CANONICAL = "canonical", a.HIRING = "hiring", a.POLICY = "policy", a.PREFERRED_LANGUAGES = "preferred_languages", a
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$E: function() {
					return r
				},
				Mb: function() {
					return d
				},
				N2: function() {
					return O
				},
				Q4: function() {
					return f
				},
				QF: function() {
					return s
				},
				Vy: function() {
					return P
				},
				Wv: function() {
					return c
				},
				mm: function() {
					return y
				},
				sQ: function() {
					return w
				},
				vc: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				a = t("../react/pages/security/settings/routes.tsx"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/pages/security/settings/resources/types.ts"),
				v = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function i(_) {
				for (var T = 1; T < arguments.length; T++) {
					var D = arguments[T] != null ? Object(arguments[T]) : {},
						S = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(D).filter(function(N) {
						return Object.getOwnPropertyDescriptor(D, N).enumerable
					})), S.forEach(function(N) {
						m(_, N, D[N])
					})
				}
				return _
			}

			function m(_, T, D) {
				return T = g(T), T in _ ? Object.defineProperty(_, T, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[T] = D, _
			}

			function g(_) {
				var T = n(_, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function n(_, T) {
				if (typeof _ != "object" || _ === null) return _;
				var D = _[Symbol.toPrimitive];
				if (D !== void 0) {
					var S = D.call(_, T || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(_)
			}
			const s = {
					[l.T.ENABLED]: !0,
					[l.T.CONTACT]: [""],
					[l.T.EXPIRES]: ""
				},
				r = {
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
				d = _ => e.Ry({
					[l.T.CONTACT]: e.IX().of(e.Z_().required(_("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, _("security_txt.fields.contact.format_error"))),
					[l.T.EXPIRES]: e.hT().required(_("common.required")).min(new Date, _("security_txt.fields.expires.min_error"))
				}),
				c = _ => {
					const T = {};
					for (const D in _) T[D] = Array.isArray(_[D]) ? _[D].filter(S => !!S) : _[D];
					return i({}, T, {
						expires: (0, v.DZ)(_.expires)
					})
				},
				f = (_, T, D) => {
					const S = [...new Set([l.T.CONTACT, l.T.EXPIRES, ...Object.values(l.T)])],
						N = Object.entries(_).sort(([A], [I]) => S.indexOf(A) - S.indexOf(I)).filter(([A, I]) => !!r[A] && !!I && (!Array.isArray(I) || !!I.length)).map(([A, I]) => Array.isArray(I) ? I.map(L => `${D(r[A].label)}: ${L}`).join(`
`) : `${D(r[A].label)}: ${I}`).join(`
`);
					(0, o.yH)(`Cloudflare_${T}_security.txt`, N, "text/plain;charset=utf-8")
				};
			let b = function(_) {
				return _.CREATED = "created security.txt", _.ENABLED = "enabled security.txt", _.DISABLED = "disabled security.txt", _.DOWNLOADED = "downloaded security.txt", _.UPDATED = "updated security.txt", _.DELETED = "deleted security.txt", _
			}({});
			const P = _ => (_ == null ? void 0 : _.source) === u.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (_ == null ? void 0 : _.source) === u.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				w = _ => _ === u.W3 ? void 0 : _,
				y = _ => u.aW.test(_),
				O = _ => {
					switch (_) {
						case u.w.CONTENT_SCANNING:
							return a.ROUTES.CONTENT_SCANNING;
						case u.w.EXPOSED_CREDENTIALS:
							return a.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Sb: function() {
					return g
				},
				Vj: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var s = 1; s < arguments.length; s++) {
					var r = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(r).filter(function(c) {
						return Object.getOwnPropertyDescriptor(r, c).enumerable
					})), d.forEach(function(c) {
						u(n, c, r[c])
					})
				}
				return n
			}

			function u(n, s, r) {
				return s = l(s), s in n ? Object.defineProperty(n, s, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = r, n
			}

			function l(n) {
				var s = v(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function v(n, s) {
				if (typeof n != "object" || n === null) return n;
				var r = n[Symbol.toPrimitive];
				if (r !== void 0) {
					var d = r.call(n, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			const i = {
					SHOW_LCC_MIGRATION_BANNER: "show LCC migration banner",
					SHOW_LCC_MIGRATION_WARNING: "show LCC migration warning",
					CLICK_LCC_DOCUMENTATION: "click link to Leaked credentials detection documentation",
					CLICK_LCC_UPGRADE_GUIDE: "click link to Leaked credentials detection upgrade guide"
				},
				m = {
					product: "WAF Managed Rules"
				},
				g = ({
					event: n,
					category: s = "user journey",
					product: r = "waf",
					productName: d = "Managed Rules",
					additionalData: c
				}) => {
					o().sendEvent(n, a({
						category: s,
						product: r,
						productName: d
					}, c || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(W, E, t) {
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
		"../react/pages/spectrum/tracking.tsx": function(W, E, t) {
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
		"../react/pages/stream/actionTypes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ReplaceVideos = "stream.replace_videos", o.PrependVideo = "stream.prepend_video", o.UpdateVideo = "stream.update_video", o.UpdateVideoPending = "steam.update_video_pending", o.RemoveVideos = "stream.remove_videos", o.StoreUploader = "stream.store_uploader", o.UpsertUploads = "stream.upsert_uploads", o.RemoveUploads = "stream.remove_uploads", o.UpdateUploadProgress = "stream.update_upload_progress", o.UploadViaUrl = "stream.upload_via_url", o.SetLoading = "stream.set_loading", o.SetStorageLoading = "stream.set_storage_loading", o.SetStorage = "stream.set_storage", o.SetPage = "stream.set_page", o.SetPausedUploads = "stream.set_paused_uploads", o.RemovePausedUpload = "stream.remove_paused_upload", o.SetRequestTimestamp = "stream.set_request_timestamp", o.ResetState = "stream.reset_state", o
			}({})
		},
		"../react/pages/stream/reducer.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return n
				},
				nY: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				o = t("../react/pages/stream/actionTypes.ts"),
				a = t("../react/pages/stream/util/pager.ts");

			function u(s) {
				for (var r = 1; r < arguments.length; r++) {
					var d = arguments[r] != null ? Object(arguments[r]) : {},
						c = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(d).filter(function(f) {
						return Object.getOwnPropertyDescriptor(d, f).enumerable
					})), c.forEach(function(f) {
						l(s, f, d[f])
					})
				}
				return s
			}

			function l(s, r, d) {
				return r = v(r), r in s ? Object.defineProperty(s, r, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[r] = d, s
			}

			function v(s) {
				var r = i(s, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function i(s, r) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var c = d.call(s, r || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(s)
			}
			const m = "stream",
				g = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(s = g, r) {
				switch (r.type) {
					case o.U.ResetState:
						return g;
					case o.U.SetStorageLoading:
						const {
							storageLoading: d
						} = r;
						return u({}, s, {
							storageLoading: d
						});
					case o.U.SetStorage:
						return u({}, s, {
							storage: r.payload ? u({}, s.storage, r.payload) : void 0
						});
					case o.U.ReplaceVideos:
						return u({}, s, {
							videos: r.videos
						});
					case o.U.PrependVideo:
						return u({}, s, {
							videos: [r.video, ...s.videos].filter((c, f) => f < a.FJ)
						});
					case o.U.UpdateVideo:
						return u({}, s, {
							videos: s.videos.map(c => c.uid === r.video.uid ? r.video : c)
						});
					case o.U.UpdateVideoPending:
						return u({}, s, {
							videoUpdateStatuses: u({}, s.videoUpdateStatuses, {
								[r.uid]: r.status
							})
						});
					case o.U.RemoveVideos:
						return u({}, s, {
							videos: s.videos.filter(c => !r.ids.includes(c.uid))
						});
					case o.U.SetLoading:
						return u({}, s, {
							loading: r.loading
						});
					case o.U.SetRequestTimestamp:
						return u({}, s, {
							requestTimestamp: r.requestTimestamp
						});
					case o.U.UploadViaUrl:
						return s;
					default:
						return (0, e.h)(r, s)
				}
			}
		},
		"../react/pages/stream/selectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Id: function() {
					return u
				},
				OU: function() {
					return n
				},
				Pf: function() {
					return l
				},
				QL: function() {
					return m
				},
				_A: function() {
					return f
				},
				_Q: function() {
					return s
				},
				aM: function() {
					return c
				},
				bM: function() {
					return i
				},
				bO: function() {
					return r
				},
				bm: function() {
					return d
				},
				mX: function() {
					return b
				},
				pW: function() {
					return v
				},
				xW: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/pages/stream/reducer.ts");
			const u = P => P[a.nY],
				l = P => u(P).videos,
				v = P => u(P).videoUpdateStatuses,
				i = P => u(P).loading,
				m = P => u(P).requestTimestamp,
				g = P => u(P).storageLoading,
				n = P => u(P).storage,
				s = P => (0, o.BF)(P, "stream.enabled") || (0, e.bC)(P),
				r = P => (0, e.Le)(P, "stream", "connect"),
				d = P => (0, e.Le)(P, "stream", "stream-4371"),
				c = P => (0, e.Le)(P, "stream", "public-details-enabled"),
				f = P => !!(0, e.Le)(P, "stream", "llhls"),
				b = P => {
					const w = n(P);
					return w !== void 0 && w.limitMins > w.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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

			function o(u, l, v) {
				const i = {
					search: v,
					limit: e.toString()
				};
				return l !== void 0 && (i.end = l), i
			}

			function a(u, l, v) {
				return {
					limit: e.toString(),
					search: v,
					asc: "true",
					start_comp: "gt",
					start: l
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(W, E, t) {
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
		"../react/pages/traffic/load-balancing/account/resources/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				QK: function() {
					return i
				},
				WM: function() {
					return d
				},
				Zk: function() {
					return m
				},
				aB: function() {
					return g
				},
				eT: function() {
					return r
				},
				mm: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(c) {
				for (var f = 1; f < arguments.length; f++) {
					var b = arguments[f] != null ? Object(arguments[f]) : {},
						P = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(b).filter(function(w) {
						return Object.getOwnPropertyDescriptor(b, w).enumerable
					})), P.forEach(function(w) {
						u(c, w, b[w])
					})
				}
				return c
			}

			function u(c, f, b) {
				return f = l(f), f in c ? Object.defineProperty(c, f, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[f] = b, c
			}

			function l(c) {
				var f = v(c, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function v(c, f) {
				if (typeof c != "object" || c === null) return c;
				var b = c[Symbol.toPrimitive];
				if (b !== void 0) {
					var P = b.call(c, f || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(c)
			}
			let i = function(c) {
					return c.CREATE_BUTTON_CLICK = "click create load balancer", c.TOGGLE_STATUS = "load balancer toggle status", c.REVIEW_PAGE_CLICK = "click load balancer table review link", c.EDIT_CLICK = "click load balancer table edit button", c.DELETE_CLICK = "click load balancer table delete button", c
				}({}),
				m = function(c) {
					return c.EDIT_HOSTNAME_CLICK = "click edit load balancer hostname", c.EDIT_IP_CLICK = "click edit load balancer IP", c.EDIT_POOLS_CLICK = "click edit load balancer pools", c.EDIT_MONITORS_CLICK = "click edit load balancer monitors", c.EDIT_CUSTOM_RULES_CLICK = "click edit load balancer custom rules", c.EDIT_TRAFFIC_STEERING_CLICK = "click edit load balancer traffic steering", c
				}({}),
				g = function(c) {
					return c.GO_TO_STEP = "click load balancer step", c.BACK_TO_STEP = "click load balancer back to step", c.SAVE = "save load balancer", c.SAVE_AS_DRAFT = "save load balancer as draft", c.SAVE_AND_DEPLOY = "save and deploy load balancer", c.NAVIGATION_CHANGE = "click load balancer wizard navigation link", c
				}({}),
				n = function(c) {
					return c.OPEN_SUBSCRIPTION_MODAL = "open load balancing subscription modal", c
				}({});
			const r = Object.values({
					LOAD_BALANCERS_TABLE: i,
					REVIEW: m,
					WIZARD: g,
					USAGE: n
				}).flatMap(Object.values),
				d = (c, f) => o().sendEvent(c, a({
					category: "user journey",
					product: "load balancing"
				}, f))
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(W, E, t) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				N: function() {
					return a
				},
				X: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let a = function(l) {
				return l.CREATE = "create waiting room", l.UPDATE = "update waiting room", l.EVENTS = "view waiting rooms events", l.ANALYTICS = "view waiting room analytics", l.GENERATE_PREVIEW = "generate waiting room preview link", l
			}({});
			const u = async l => {
				await o().sendEvent(l, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				N3: function() {
					return m
				},
				P: function() {
					return n
				},
				Xh: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(s) {
				for (var r = 1; r < arguments.length; r++) {
					var d = arguments[r] != null ? Object(arguments[r]) : {},
						c = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(d).filter(function(f) {
						return Object.getOwnPropertyDescriptor(d, f).enumerable
					})), c.forEach(function(f) {
						u(s, f, d[f])
					})
				}
				return s
			}

			function u(s, r, d) {
				return r = l(r), r in s ? Object.defineProperty(s, r, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[r] = d, s
			}

			function l(s) {
				var r = v(s, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(s, r) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var c = d.call(s, r || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(s)
			}
			const i = "TURNSTILE";
			let m = function(s) {
				return s.OVERVIEW_PAGE = "view the overview page", s.LIST_OF_WIDGETS = "list of widgets", s.SOLVE_EVENTS = "list solve events", s.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", s.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", s.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", s.OPEN_DELETE_MODAL = "view the delete modal for one widget", s.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", s.DELETE_WIDGET = "delete successfully widgets", s.LIST_OF_HOSTNAMES = "list hostnames", s.OPEN_ADD_WIDGET_PAGE = "view page to add widget", s.FEEDBACK_ADD = "view Feedback Add", s.SAVE_WIDGET = "save widget", s.ROTATE_KEYS = "rotate keys", s.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", s.GET_WIDGETS = "get widget details", s.OPEN_ANALYTICS_PAGE = "view analytics page", s.ANALYTICS_DATA = "list the analytics data", s
			}({});
			const g = ({
					name: s,
					product: r = i,
					category: d = "user journey",
					page: c,
					additionalData: f = {}
				}) => {
					o().sendEvent(s, a({
						category: d,
						page: c,
						product: r
					}, f || {}))
				},
				n = () => {
					var s;
					return (s = Object.values(m)) === null || s === void 0 ? void 0 : s.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				E: function() {
					return m
				},
				Ky: function() {
					return g
				},
				RJ: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var s = 1; s < arguments.length; s++) {
					var r = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(r).filter(function(c) {
						return Object.getOwnPropertyDescriptor(r, c).enumerable
					})), d.forEach(function(c) {
						u(n, c, r[c])
					})
				}
				return n
			}

			function u(n, s, r) {
				return s = l(s), s in n ? Object.defineProperty(n, s, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = r, n
			}

			function l(n) {
				var s = v(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function v(n, s) {
				if (typeof n != "object" || n === null) return n;
				var r = n[Symbol.toPrimitive];
				if (r !== void 0) {
					var d = r.call(n, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			let i = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.BACK_BUTTON = "clicked back from user group detail", n.ADD_MEMBER_BUTTON = "click add member button", n.MEMBER_ADD = "add user group member", n.MEMBER_DETAIL_MENU = "click user group member detail menu", n.MEMBER_DETAIL_VIEW = "click view in user group member detail menu", n.MEMBER_DETAIL_EDIT = "click edit in user group member detail menu", n.MEMBER_DETAIL_DELETE = "click delete in user group member detail menu", n.MEMBER_DELETE = "delete user group member", n.MEMBER_DETAIL_DELETE_CANCEL = "click cancel delete user group member", n.ADD_POLICY_BUTTON = "click add user group policy button", n
			}({});
			const m = ({
					name: n,
					additionalData: s = {}
				}) => {
					o().sendEvent(n, a({}, s || {}))
				},
				g = () => {
					var n;
					return (n = Object.values(i)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/zone-versioning/selectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$e: function() {
					return D
				},
				$h: function() {
					return y
				},
				G: function() {
					return T
				},
				M3: function() {
					return N
				},
				Tr: function() {
					return P
				},
				UY: function() {
					return f
				},
				bH: function() {
					return s
				},
				fv: function() {
					return A
				},
				hF: function() {
					return O
				},
				iw: function() {
					return d
				},
				m7: function() {
					return n
				},
				re: function() {
					return _
				},
				tp: function() {
					return c
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				o = t("../../../../node_modules/reselect/lib/index.js"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/SidebarNav/permissions.ts"),
				l = t("../react/common/selectors/entitlementsSelectors.ts");

			function v(I) {
				for (var L = 1; L < arguments.length; L++) {
					var k = arguments[L] != null ? Object(arguments[L]) : {},
						U = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(k).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(k, Q).enumerable
					})), U.forEach(function(Q) {
						i(I, Q, k[Q])
					})
				}
				return I
			}

			function i(I, L, k) {
				return L = m(L), L in I ? Object.defineProperty(I, L, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[L] = k, I
			}

			function m(I) {
				var L = g(I, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function g(I, L) {
				if (typeof I != "object" || I === null) return I;
				var k = I[Symbol.toPrimitive];
				if (k !== void 0) {
					var U = k.call(I, L || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(I)
			}
			const n = I => (0, a.nA)(I) ? (0, l.p1)(I) && (0, u.$n)(I, "zone_versioning", "versioning") : !1,
				s = I => I.zoneVersioning.zoneApplications,
				r = (0, e.P1)("zoneApplications", s),
				d = I => I.zoneVersioning.zoneVersions,
				c = (0, e.P1)("zoneVersions", d),
				f = (0, o.P1)(c, I => {
					if (I) return I.filter(L => L.status == "V")
				}),
				b = I => I.zoneVersioning.environments,
				P = I => I.zoneVersioning.environments.isRequesting,
				w = (0, e.P1)("environments", b),
				y = (0, o.P1)(r, I => {
					if (I) {
						if (I.length === 1) return I[0];
						I.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${I.length}`))
					}
					return null
				}),
				O = (0, o.P1)(w, I => I ? I.environments : []),
				_ = I => {
					var L;
					return (L = I.zoneVersioning) === null || L === void 0 ? void 0 : L.zoneVersionSelector
				},
				T = (0, o.P1)(_, c, (I, L) => {
					if (!(I == null ? void 0 : I.isVersion) || !L) return null;
					const k = L.find(U => {
						if (U.version === I.selectedVersion && U.locked) return !0
					});
					return k ? v({}, k, {
						isLocked: !0
					}) : null
				}),
				D = (0, o.P1)(c, O, (I, L) => !L || !I ? [] : I.map(k => {
					const U = [];
					for (const Q in L) L[Q].version === k.version && U.push(L[Q]);
					return v({}, k, {
						environments: U
					})
				})),
				S = I => I.zoneVersioning.WAFMigrationStatus,
				N = (0, e.P1)("WAFMigrationStatus", S),
				A = I => I.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$2: function() {
					return S
				},
				CI: function() {
					return T
				},
				IS: function() {
					return i
				},
				L7: function() {
					return l
				},
				Lt: function() {
					return c
				},
				Oj: function() {
					return r
				},
				QV: function() {
					return f
				},
				S6: function() {
					return N
				},
				X$: function() {
					return O
				},
				X6: function() {
					return g
				},
				d4: function() {
					return d
				},
				fE: function() {
					return m
				},
				im: function() {
					return w
				},
				lv: function() {
					return b
				},
				rL: function() {
					return n
				},
				wW: function() {
					return v
				}
			});

			function e(A) {
				for (var I = 1; I < arguments.length; I++) {
					var L = arguments[I] != null ? Object(arguments[I]) : {},
						k = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(L).filter(function(U) {
						return Object.getOwnPropertyDescriptor(L, U).enumerable
					})), k.forEach(function(U) {
						o(A, U, L[U])
					})
				}
				return A
			}

			function o(A, I, L) {
				return I = a(I), I in A ? Object.defineProperty(A, I, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[I] = L, A
			}

			function a(A) {
				var I = u(A, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function u(A, I) {
				if (typeof A != "object" || A === null) return A;
				var L = A[Symbol.toPrimitive];
				if (L !== void 0) {
					var k = L.call(A, I || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(A)
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
				v = 800,
				i = "40rem",
				m = {
					pricing: {
						requests: .15,
						duration: 12.5,
						bytes_stored: .2,
						rows_read: .001,
						rows_written: 1
					}
				},
				g = {
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
				s = {
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
				r = {
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
					}, s),
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
				c = {
					free: {
						minutes: 3e3
					},
					paid: {
						minutes: 6e3
					}
				},
				f = {
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
					enableBuildCache: "WCI:enable build cache",
					disableBuildCache: "WCI:disable build cache",
					clearBuildCache: "WCI:clear build cache",
					updateEnvVar: "WCI:update WCI trigger env var",
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
				b = {
					insufficientData: "insufficient data to create/update trigger",
					createRepoConnectionError: "error creating repo connection",
					createTokenError: "error creating token",
					createUpdateTriggerError: "error creating/updating trigger",
					updateEnvironmentVariablesError: "error updating trigger environment variables",
					createWorkerError: "error creating worker",
					buildWorkerError: "error building worker"
				},
				P = "workers.dev",
				w = "YYYY-MM-DD HH:mm:SS ZZ",
				y = "active",
				O = ["bundled", "unbound", "standard"],
				_ = null,
				T = {
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let D = function(A) {
				return A[A.NONE = 0] = "NONE", A[A.MISS = 1] = "MISS", A[A.EXPIRED = 2] = "EXPIRED", A[A.UPDATING = 3] = "UPDATING", A[A.STALE = 4] = "STALE", A[A.HIT = 5] = "HIT", A[A.IGNORED = 6] = "IGNORED", A[A.BYPASS = 7] = "BYPASS", A[A.REVALIDATED = 8] = "REVALIDATED", A[A.DYNAMIC = 9] = "DYNAMIC", A[A.STREAM_HIT = 10] = "STREAM_HIT", A[A.DEFERRED = 11] = "DEFERRED", A
			}({});
			const S = [D.HIT, D.STREAM_HIT];
			let N = function(A) {
				return A.SECRETS_STORE_ID = "store_id", A.SECRET_NAME = "secret_name", A
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return i
				},
				L: function() {
					return a
				},
				Q9: function() {
					return u
				},
				_j: function() {
					return l
				},
				ky: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = m => `${m}.workers.dev`,
				a = (m, g, n) => `${n?`${n}.`:""}${m}.${o(g)}`,
				u = (m, g, n) => `https://${a(m,g,n)}`,
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
					emailRouting: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes`,
					emailRoutingRule: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes/${"ruleId"}`,
					zones: (0, e.BC)`/${"accountId"}`,
					developerPlatform_workers_create: (0, e.BC)`/${"accountId"}/developer-platform/workers/onboarding`,
					developerPlatform_workers_success: (0, e.BC)`/${"accountId"}/developer-platform/workers/success`,
					logpush: (0, e.BC)`/${"accountId"}/logs`,
					members: (0, e.BC)`/${"accountId"}/members`,
					workflowDetails: (0, e.BC)`/${"accountId"}/workers/workflows/${"workflowName"}`
				},
				v = "https://cron-triggers.cloudflareworkers.com",
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
					describeCron: `${v}/describe`,
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
					nextCron: `${v}/next`,
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
					validateCron: `${v}/validate`,
					versions: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}`,
					version: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}/detail/${"versionTag"}`,
					workersObservability: {
						telemetry: {
							query: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/query`,
							keys: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/keys`,
							values: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/values`
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				MN: function() {
					return a
				},
				Yg: function() {
					return l
				},
				i$: function() {
					return u
				},
				l3: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const a = async ([i, m]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: i,
					variables: m
				})
			})).body, u = async (...i) => (await e.get(...i)).body, l = i => async (m, g) => {
				const n = await fetch(m, g).then(s => s.json());
				return i.assertDecode(n)
			}, v = async (...i) => (await u(...i)).result;
			E.ZP = {
				fetcher: i => Array.isArray(i) ? v(...i) : v(i)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(W, E) {
				E()
			})(this, function() {
				"use strict";

				function W() {
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

					function u(b) {
						return !!(b && b !== document && b.nodeName !== "HTML" && b.nodeName !== "BODY" && "classList" in b && "contains" in b.classList)
					}

					function l(b) {
						var P = b.type,
							w = b.tagName;
						return !!(w == "INPUT" && a[P] && !b.readOnly || w == "TEXTAREA" && !b.readOnly || b.isContentEditable)
					}

					function v(b) {
						b.getAttribute("is-focus-visible") !== "" && b.setAttribute("is-focus-visible", "")
					}

					function i(b) {
						b.getAttribute("is-focus-visible") === "" && b.removeAttribute("is-focus-visible")
					}

					function m(b) {
						u(document.activeElement) && v(document.activeElement), t = !0
					}

					function g(b) {
						t = !1
					}

					function n(b) {
						!u(b.target) || (t || l(b.target)) && v(b.target)
					}

					function s(b) {
						!u(b.target) || b.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), i(b.target))
					}

					function r(b) {
						document.visibilityState == "hidden" && (e && (t = !0), d())
					}

					function d() {
						document.addEventListener("mousemove", f), document.addEventListener("mousedown", f), document.addEventListener("mouseup", f), document.addEventListener("pointermove", f), document.addEventListener("pointerdown", f), document.addEventListener("pointerup", f), document.addEventListener("touchmove", f), document.addEventListener("touchstart", f), document.addEventListener("touchend", f)
					}

					function c() {
						document.removeEventListener("mousemove", f), document.removeEventListener("mousedown", f), document.removeEventListener("mouseup", f), document.removeEventListener("pointermove", f), document.removeEventListener("pointerdown", f), document.removeEventListener("pointerup", f), document.removeEventListener("touchmove", f), document.removeEventListener("touchstart", f), document.removeEventListener("touchend", f)
					}

					function f(b) {
						b.target.nodeName.toLowerCase() !== "html" && (t = !1, c())
					}
					document.addEventListener("keydown", m, !0), document.addEventListener("mousedown", g, !0), document.addEventListener("pointerdown", g, !0), document.addEventListener("touchstart", g, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", s, !0), document.addEventListener("visibilitychange", r, !0), d(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function E(t) {
					var e;

					function o() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && E(W)
			})
		},
		"../react/utils/bootstrap.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
					return a
				}
			});
			const e = () => {
					var l, v, i;
					return (l = window) === null || l === void 0 || (v = l.bootstrap) === null || v === void 0 || (i = v.data) === null || i === void 0 ? void 0 : i.security_token
				},
				o = () => {
					var l, v, i;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (v = l.data) === null || v === void 0 || (i = v.user) === null || i === void 0 ? void 0 : i.id)
				},
				a = () => {
					var l, v;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (v = l.data) === null || v === void 0 ? void 0 : v.is_kendo)
				},
				u = () => {
					var l, v, i, m;
					return (l = window) === null || l === void 0 || (v = l.bootstrap) === null || v === void 0 || (i = v.data) === null || i === void 0 || (m = i.user) === null || m === void 0 ? void 0 : m.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				O5: function() {
					return u
				},
				Xm: function() {
					return a
				},
				kT: function() {
					return i
				},
				wV: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				a = () => (o() || "").indexOf("C0002") !== -1,
				u = () => (o() || "").indexOf("C0003") !== -1,
				l = () => (o() || "").indexOf("C0004") !== -1,
				v = () => (o() || "").indexOf("C0005") !== -1,
				i = n => {
					const s = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${s}`
				},
				m = () => {
					var n;
					const s = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (s == null ? void 0 : s.country) || ""
				},
				g = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				AI: function() {
					return O
				},
				Kd: function() {
					return s
				},
				S8: function() {
					return y
				},
				ZW: function() {
					return m
				},
				ay: function() {
					return _
				},
				fh: function() {
					return T
				},
				i_: function() {
					return r
				},
				ly: function() {
					return n
				},
				th: function() {
					return i
				},
				ti: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				a = t("../../../common/intl/intl-types/src/index.ts"),
				u = t("../../../common/util/types/src/utils/index.ts"),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				v = t("../../../../node_modules/cookie/index.js");
			const i = "cf-sync-locale-with-cps",
				m = a.Q.en_US,
				g = "en_US",
				n = "cf-locale";

			function s() {
				const N = (0, v.parse)(document.cookie);
				return l.Z.get(n) || N[n] || null
			}

			function r(N) {
				document.cookie = (0, v.serialize)(n, N, {
					path: "/",
					maxAge: 31536e3
				}), l.Z.set(n, N)
			}

			function d() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const c = N => (0, u.Yd)(a.Q).find(A => a.Q[A] === N) || g,
				f = [],
				b = [],
				P = [a.Q.de_DE, a.Q.en_US, a.Q.es_ES, a.Q.fr_FR, a.Q.it_IT, a.Q.pt_BR, a.Q.ko_KR, a.Q.ja_JP, a.Q.zh_CN, a.Q.zh_TW],
				w = {
					test: [...P, ...b, ...f],
					development: [...P, ...b, ...f],
					staging: [...P, ...b, ...f],
					production: [...P, ...b]
				},
				y = N => {
					const A = a.Q[N];
					return w.production.includes(A)
				},
				O = () => Object.keys(a.Q).filter(N => y(N)),
				_ = N => {
					const A = a.Q[N];
					return b.includes(A)
				},
				T = N => D[N],
				D = {
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
				S = o().locale();
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
			}), o().locale(S)
		},
		"../react/utils/translator.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				QT: function() {
					return c
				},
				Vb: function() {
					return m
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return i
				},
				_m: function() {
					return s
				},
				cC: function() {
					return r
				},
				oc: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = t("../../../common/intl/intl-core/src/Translator.ts"),
				a = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				u = t.n(a),
				l = t("../flags.ts");
			const v = new o.Z({
				pseudoLoc: (0, l.J8)("is_pseudo_loc")
			});

			function i(f, ...b) {
				return v.t(f, ...b)
			}
			const m = v;

			function g(f, ...b) {
				return markdown(i(f, b))
			}

			function n(f) {
				if (Number(f) !== 0) {
					if (f % 86400 == 0) return i("time.num_days", {
						smart_count: f / 86400
					});
					if (f % 3600 == 0) return i("time.num_hours", {
						smart_count: f / 3600
					});
					if (f % 60 == 0) return i("time.num_minutes", {
						smart_count: f / 60
					})
				}
				return i("time.num_seconds", {
					smart_count: f
				})
			}

			function s(f, b) {
				return f in b ? b[f] : void 0
			}
			const r = a.Trans,
				d = a.I18n,
				c = a.useI18n
		},
		"../react/utils/url.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Ct: function() {
					return D
				},
				Fl: function() {
					return q
				},
				KT: function() {
					return ee
				},
				NF: function() {
					return w
				},
				Nw: function() {
					return _
				},
				Pd: function() {
					return O
				},
				Uh: function() {
					return h
				},
				cm: function() {
					return f
				},
				e1: function() {
					return T
				},
				el: function() {
					return Q
				},
				hW: function() {
					return pe
				},
				pu: function() {
					return ie
				},
				qR: function() {
					return U
				},
				td: function() {
					return y
				},
				uW: function() {
					return ue
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				u = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/r2/routes.ts"),
				v = t("../react/pages/zoneless-workers/routes.ts"),
				i = t("../react/pages/pages/routes.ts"),
				m = t("../react/pages/d1/routes.ts");

			function g(M) {
				for (var K = 1; K < arguments.length; K++) {
					var V = arguments[K] != null ? Object(arguments[K]) : {},
						$ = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(V).filter(function(te) {
						return Object.getOwnPropertyDescriptor(V, te).enumerable
					})), $.forEach(function(te) {
						n(M, te, V[te])
					})
				}
				return M
			}

			function n(M, K, V) {
				return K = s(K), K in M ? Object.defineProperty(M, K, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[K] = V, M
			}

			function s(M) {
				var K = r(M, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function r(M, K) {
				if (typeof M != "object" || M === null) return M;
				var V = M[Symbol.toPrimitive];
				if (V !== void 0) {
					var $ = V.call(M, K || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(M)
			}
			const {
				endsWithSlash: d
			} = a.default, c = new RegExp(/([0-9a-z]{32})/g), f = M => M == null ? void 0 : M.replace(c, ":id"), b = (M, K) => {
				const V = M.replace(d, "").split("/");
				return V.slice(0, 2).concat([K]).concat(V.slice(3)).join("/")
			}, P = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), w = M => `/${M.replace(d,"").replace(/^\//,"")}`, y = M => _("add-site", M), O = M => _("billing", M), _ = (M, K) => K ? `/${K}${M?`/${M}`:""}` : `/?to=/:account/${M}`, T = () => {
				const M = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return M ? M[1] : null
			}, D = (M, K) => o().stringify(g({}, o().parse(M), K)), S = (M = "") => M.toString().replace(/([\/]{1,})$/, ""), N = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], A = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, I = /^\/(\w{32,})(\/[^.]*)?/, L = M => N.includes(M), k = M => !L(M), U = M => !L(M) && I.test(M), Q = M => !L(M) && A.test(M), ae = M => A.exec(M), pe = M => {
				if (Q(M)) return M.split("/").filter(K => K.length > 0)[1]
			}, ce = M => I.exec(M), ue = M => {
				if (U(M)) {
					const K = ce(M);
					if (K) return K[1]
				}
			}, F = M => U(M) && M.split("/")[2] === "register-domain", z = M => F(M) ? M.split("/") : null, B = M => {
				if (Q(M)) {
					const [, , , K, V, $, te, me] = M.split("/");
					return K === "traffic" && V === "load-balancing" && $ === "pools" && te === "edit" && me
				}
			}, h = M => {
				const K = z(M);
				if (K) return K[3]
			}, x = (M, K) => {
				var V, $;
				return ((V = M.pattern.match(/\:/g)) !== null && V !== void 0 ? V : []).length - (($ = K.pattern.match(/\:/g)) !== null && $ !== void 0 ? $ : []).length
			}, G = [...Object.values(u.C), ...Object.values(l._j), ...Object.values(v._j), ...Object.values(i._j), ...Object.values(m._)].sort(x);

			function q(M) {
				if (!k(M)) return M;
				for (const me of G)
					if (me.expression.test(M)) return me.pattern;
				const K = z(M);
				if (K) {
					const [, , me, , ...le] = K;
					return `/:accountId/${me}/:domainName/${le.join("/")}`
				}
				if (B(M)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const $ = ae(M);
				if ($) {
					const [, , , , me] = $;
					return `/:accountId/:zoneName${me||""}`
				}
				const te = ce(M);
				if (te) {
					const [, , me] = te;
					return `/:accountId${me||""}`
				}
				return M
			}

			function ie(M) {
				if (!!M) try {
					const V = M.split(".").pop();
					if (V && V.length > 0) return V
				} catch {}
			}

			function ee(M, K = document.location.href) {
				try {
					const V = new URL(M),
						$ = new URL(K);
					if (V.origin === $.origin) return `${V.pathname}${V.search}${V.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				r: function() {
					return i
				},
				y: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(u);
			const v = /^\/domainconnect\/v2\/domaintemplates\//i,
				i = "domain-connect-redirect",
				m = () => {
					const g = (0, u.useLocation)();
					(0, e.useEffect)(() => {
						v.test(g.pathname) && a.Z.set(i, g, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(W, E, t) {
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
		"../react/utils/zoneLevelAccess.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				P: function() {
					return u
				},
				b: function() {
					return l
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				o = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function a() {
				var v, i, m, g, n, s;
				return (v = window) === null || v === void 0 || (i = v.bootstrap) === null || i === void 0 || (m = i.data) === null || m === void 0 || (g = m.user) === null || g === void 0 || (n = g.betas) === null || n === void 0 || (s = n.some) === null || s === void 0 ? void 0 : s.call(n, r => r === "zone_level_access_beta")
			}

			function u() {
				const v = !!(0, e.Z)("zone-level-access");
				return a() || v
			}

			function l(v) {
				const i = !!(0, o.z1)("zone-level-access")(v);
				return a() || i
			}
		},
		"../utils/getDashVersion.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				p: function() {
					return a
				},
				t: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var u, l;
					return (u = window) === null || u === void 0 || (l = u.build) === null || l === void 0 ? void 0 : l.dashVersion
				},
				a = () => {
					var u;
					return ((0, e.parse)((u = document) === null || u === void 0 ? void 0 : u.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Wi: function() {
					return Ot
				},
				IM: function() {
					return Bt
				},
				yV: function() {
					return Lt
				},
				Ug: function() {
					return xt
				},
				v_: function() {
					return vt
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				a = t("../react/utils/bootstrap.ts"),
				u = t("../react/app/providers/storeContainer.js"),
				l = t("../react/common/selectors/languagePreferenceSelector.ts"),
				v = t("../flags.ts"),
				i = t("../../../../node_modules/cookie/index.js"),
				m = t("../react/utils/url.ts"),
				g = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				s = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				d = t("../utils/getDashVersion.ts"),
				c = t("../react/common/selectors/accountSelectors.ts"),
				f = t("../react/common/selectors/entitlementsSelectors.ts");

			function b(re) {
				for (var ne = 1; ne < arguments.length; ne++) {
					var p = arguments[ne] != null ? Object(arguments[ne]) : {},
						C = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(p).filter(function(X) {
						return Object.getOwnPropertyDescriptor(p, X).enumerable
					})), C.forEach(function(X) {
						P(re, X, p[X])
					})
				}
				return re
			}

			function P(re, ne, p) {
				return ne = w(ne), ne in re ? Object.defineProperty(re, ne, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : re[ne] = p, re
			}

			function w(re) {
				var ne = y(re, "string");
				return typeof ne == "symbol" ? ne : String(ne)
			}

			function y(re, ne) {
				if (typeof re != "object" || re === null) return re;
				var p = re[Symbol.toPrimitive];
				if (p !== void 0) {
					var C = p.call(re, ne || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ne === "string" ? String : Number)(re)
			}
			const O = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				_ = (0, s.Z)(re => {
					try {
						return O.assertDecode((0, i.parse)(re))
					} catch (ne) {
						return console.error(ne), {}
					}
				}),
				T = re => (ne, p, C) => {
					try {
						const Ze = window.location.pathname,
							ze = (0, u.bh)().getState(),
							ot = _(document.cookie),
							_t = b({
								page: (0, m.Fl)(C.page || window.location.pathname),
								dashVersion: (0, d.t)()
							}, ot);
						if (ne === "identify") {
							var X, _e;
							const rt = {
								gates: (0, r.T2)(ze) || {},
								country: (X = t.g) === null || X === void 0 || (_e = X.bootstrap) === null || _e === void 0 ? void 0 : _e.ip_country
							};
							return re(ne, p, b({}, _t, rt, C))
						} else {
							const rt = {
								accountId: (0, m.uW)(Ze),
								zoneName: (0, m.hW)(Ze),
								domainName: (0, m.Uh)(Ze)
							};
							if ((0, m.qR)(Ze)) {
								var Pe;
								const Re = (0, c.D0)(ze);
								rt.isEntAccount = !!(Re == null || (Pe = Re.meta) === null || Pe === void 0 ? void 0 : Pe.has_enterprise_zones) || (0, f.p1)(ze)
							}
							if ((0, m.el)(Ze)) {
								var $e;
								const Re = (0, g.nA)(ze);
								rt.zoneId = Re == null ? void 0 : Re.id, rt.plan = Re == null || ($e = Re.plan) === null || $e === void 0 ? void 0 : $e.legacy_id
							}
							return re(ne, p, b({}, _t, rt, C))
						}
					} catch (Ze) {
						return console.error(Ze), re(ne, p, C)
					}
				},
				D = re => async (ne, p, C) => {
					try {
						return await re(ne, p, C)
					} catch (X) {
						if (console.error(X), !vt()) throw X;
						return {
							status: "rejected",
							reason: X
						}
					}
				};
			var S = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				N = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				A = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				I = t("../react/common/middleware/sparrow/errors.ts"),
				L = t("../react/pages/caching/tracking.tsx"),
				k = t("../react/pages/home/domain-registration/tracking.ts"),
				U = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				Q = t("../react/pages/hyperdrive/tracking.ts"),
				ae = t("../react/pages/magic/overview/tracking.ts"),
				pe = t("../react/pages/magic/packet-captures/constants.ts"),
				ce = t("../react/pages/page-rules/tracking.ts"),
				ue = t("../react/pages/pages/constants.ts"),
				F = t("../react/pages/pipelines/tracking.ts"),
				z = t("../react/pages/security-center/BlockedContent/constants.ts"),
				B = t("../react/pages/security-center/tracking.ts"),
				h = t("../react/pages/security/api-shield/tracking.ts"),
				x = t("../react/pages/security/bots/tracking.ts"),
				G = t("../react/pages/security/resources/constants.tsx"),
				q = t("../react/pages/security/page-shield/resources/index.ts"),
				ie = t("../react/pages/home/configurations/lists/tracking.ts"),
				ee = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				M = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				K = t("../react/pages/home/alerts/tracking.ts"),
				V = t("../react/pages/dns/dns-records/tracking.ts"),
				$ = t("../react/pages/magic/network-monitoring/constants.ts"),
				te = t("../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts"),
				me = t("../react/pages/security/settings/index.tsx"),
				le = t("../react/pages/shared-config/sparrowEvents.tsx"),
				ge = t("../react/pages/spectrum/tracking.tsx"),
				ye = t("../react/pages/traffic/argo/tracking.ts"),
				Ae = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Be = t("../react/pages/turnstile/tracking.ts"),
				Ce = t("../react/pages/zoneless-workers/constants.ts"),
				Se = t("../react/app/components/AccountHome/tracking.ts"),
				Ye = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				Ke = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				Ve = t("../react/pages/user-groups/sparrowEvents.ts"),
				H = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				ve = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				De = t("../react/pages/security/overview/resources/constants.ts"),
				Xe = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				Je = t("../react/pages/secrets-store/resources/constants.ts");
			const qe = ((re, ne, ...p) => n.eg.union([n.eg.literal(re), n.eg.literal(ne), ...p.map(C => n.eg.literal(C))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", Se.gX.SPARROW_PROJECTS_TABLE_CLICK, Se.gX.SPARROW_EMPTY_STATE_CTA_CLICK, Se.gX.SPARROW_PRODUCT_CARD_CLICK, Se.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, Se.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, Se.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, Se.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, Se.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, Se.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, Se.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ce.QV.clickedDownloadAnalytics, Ce.QV.clickedPrintAnalytics, Ce.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ce.QV.addWCITriggerToExistingWorker, Ce.QV.updateWCITrigger, Ce.QV.deleteWCITrigger, Ce.QV.addWCITriggerToNewWorker, Ce.QV.createWCIBuildForNewWorker, Ce.QV.completedWCIBuildForNewWorker, Ce.QV.changedDefaultConfigurations, ue.QV.toggledPagesSmartPlacement, ue.QV.downloadDemoProject, Ce.QV.clickCreateWorkerFromRepoNextStep, Ce.QV.clickCreateWorkerFromRepoPreviousStep, Ce.QV.clickCreateNewSCMConnection, Ce.QV.redirectFromSCMOAuth, Ce.QV.clickSubmitError, Ce.QV.selectTemplate, Ce.QV.templateStubWorkerCreated, Ce.QV.templateStubWorkerCreationFailed, Ce.QV.templateRepositoryCreated, Ce.QV.templateRepositoryCreationFailed, Ce.QV.copyTemplateC3Command, Ce.QV.templateDeployClick, Ce.QV.reauthenticateGithubModalShown, Ce.QV.updateGithubPermissionsClicked, Ce.QV.D2W_importRepository, Ce.QV.D2W_stubWorkerCreated, Ce.QV.D2W_stubWorkerCreationFailed, Ce.QV.D2W_repositoryCreated, Ce.QV.D2W_repositoryCreationFailed, Ce.QV.D2W_resourcesProvisioned, Ce.QV.D2W_resourceProvisioningFailed, Ce.QV.D2W_githubAPIRateLimitReached, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", x.N3.INITIAL_FETCH_SCORES, x.N3.FETCH_CONFIGURATION, x.N3.INITIAL_FETCH_TIME_SERIES, x.N3.INITIAL_FETCH_ATTRIBUTES, x.N3.UPDATE_SETTINGS, x.N3.DELETE_RULE, x.N3.UPDATE_RULE, x.N3.FETCH_RULES, x.N3.CONFIGURE_BOT_MANAGEMENT, x.N3.WAF_RULES_REDIRECT, U.F.TOGGLE_TCP_PROTECTION, U.F.GET_TCP_PROTECTION_PREFIXES, U.F.CREATE_TCP_PROTECTION_PREFIXES, U.F.CREATE_TCP_PROTECTION_PREFIX, U.F.UPDATE_TCP_PROTECTION_PREFIX, U.F.DELETE_TCP_PROTECTION_PREFIX, U.F.DELETE_TCP_PROTECTION_PREFIXES, U.F.GET_TCP_PROTECTION_ALLOWLIST, U.F.CREATE_TCP_PROTECTION_ALLOWLIST, U.F.UPDATE_TCP_PROTECTION_ALLOWLIST, U.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, U.F.DELETE_TCP_PROTECTION_ALLOWLIST, U.F.GET_SYN_PROTECTION_RULES, U.F.GET_SYN_PROTECTION_RULE, U.F.CREATE_SYN_PROTECTION_RULE, U.F.UPDATE_SYN_PROTECTION_RULE, U.F.DELETE_SYN_PROTECTION_RULE, U.F.GET_TCP_FLOW_PROTECTION_RULES, U.F.GET_TCP_FLOW_PROTECTION_RULE, U.F.CREATE_TCP_FLOW_PROTECTION_RULE, U.F.UPDATE_TCP_FLOW_PROTECTION_RULE, U.F.DELETE_TCP_FLOW_PROTECTION_RULE, U.F.GET_SYN_PROTECTION_FILTERS, U.F.GET_SYN_PROTECTION_FILTER, U.F.CREATE_SYN_PROTECTION_FILTER, U.F.UPDATE_SYN_PROTECTION_FILTER, U.F.DELETE_SYN_PROTECTION_FILTER, U.F.GET_TCP_FLOW_PROTECTION_FILTERS, U.F.GET_TCP_FLOW_PROTECTION_FILTER, U.F.CREATE_TCP_FLOW_PROTECTION_FILTER, U.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, U.F.DELETE_TCP_FLOW_PROTECTION_FILTER, U.F.GET_DNS_PROTECTION_RULES, U.F.GET_DNS_PROTECTION_RULE, U.F.CREATE_DNS_PROTECTION_RULE, U.F.UPDATE_DNS_PROTECTION_RULE, U.F.DELETE_DNS_PROTECTION_RULE, q.FV.MANAGE_PAGE_SHIELD_POLICY, q.FV.CONFIGURE_PAGE_SHIELD, q.FV.VIEW_DETECTED_CONNECTIONS, q.FV.VIEW_DETECTED_SCRIPTS, q.FV.VIEW_PAGE_SHIELD_POLICIES, q.FV.VIEW_PAGE_SHIELD_SETTINGS, q.FV.OPEN_MUTABLE_VERSION_TOOLTIP, q.FV.SHOW_MUTABLE_VERSION_TOOLTIP, ie.y.CREATE_LIST, ie.y.DELETE_LIST, ie.y.ADD_LIST_ITEM, ie.y.DELETE_LIST_ITEM, Q.KO.PURCHASE_WORKERS_PAID, Q.KO.LIST_CONFIGS, Q.KO.SEARCH_CONFIGS, Q.KO.CREATE_HYPERDRIVE_CONFIG, Q.KO.VIEW_CONFIG_DETAILS, Q.KO.UPDATE_CACHING_SETTINGS, Q.KO.DELETE_HYPERDRIVE_CONFIG, Q.KO.CLICK_HYPERDRIVE_DOCUMENTATION, Q.KO.CLICK_GET_STARTED_GUIDE, Q.KO.CLICK_CONNECTIVITY_GUIDES, Q.KO.CLICK_QUICK_LINK, Q.KO.CLICK_DISCORD, Q.KO.CLICK_COMMUNITY, ge.N.CNAME, ge.N.IP_ADDRESS, ge.N.LB, ge.N.UPDATE_CNAME, ge.N.UPDATE_IP_ADDRESS, ge.N.UPDATE_LB, ge.N.DISABLE, L.N.TIERED_CACHE, L.N.CACHE_PURGE, L.N.CACHE_ANALYTICS, ...(0, Be.P)(), ...(0, A.x4)(), ...(0, me.m8)(), ...(0, Ve.Ky)(), ...(0, H.Cf)(), Ae.N.CREATE, Ae.N.EVENTS, Ae.N.ANALYTICS, Ae.N.UPDATE, Ae.N.GENERATE_PREVIEW, B.RY.INITIATE_URL_SCAN, B.RY.LOAD_SCAN_INFO, B.Ev.LOAD_THREAT_EVENTS, B.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, B.Ev.THREAT_EVENTS_FILTERS, B.Ev.ABUSE_REPORT_BUTTON_CLICK, B.Ev.ABUSE_REPORT_SUBMIT_CLICK, B.Ev.ABUSE_REPORT_SUBMIT_FAILED, B.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, B.v9.EXPAND_INSIGHT_ROW, B.v9.ONE_CLICK_RESOLVE_BUTTON, B.v9.FOLLOW_RESOLVE_URL, B.v9.MANAGE_INSIGHT, B.v9.CLICK_SCAN_NOW, B.v9.CLICK_EXPORT_INSIGHTS, B.v9.BULK_ARCHIVE, B.v9.CLICK_DETAILS_BUTTON, h.Fj[h.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, h.Fj[h.kq.ENDPOINT_MANAGEMENT].detailedMetrics, h.Fj[h.kq.ENDPOINT_MANAGEMENT].createEndpoint, h.Fj[h.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, h.Fj[h.kq.ENDPOINT_MANAGEMENT].deployRouting, h.Fj[h.kq.ENDPOINT_MANAGEMENT].deleteRouting, h.Fj[h.kq.API_DISCOVERY].viewDiscoveredEndpoints, h.Fj[h.kq.API_DISCOVERY].saveDiscoveredEndpoint, h.Fj[h.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, h.Fj[h.kq.SCHEMA_VALIDATION].viewSchemasList, h.Fj[h.kq.SCHEMA_VALIDATION].uploadSchema, h.Fj[h.kq.SCHEMA_VALIDATION].viewSchemaAdoption, h.Fj[h.kq.SCHEMA_VALIDATION].downloadSchema, h.Fj[h.kq.SCHEMA_VALIDATION].deleteSchema, h.Fj[h.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, h.Fj[h.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, h.Fj[h.kq.SEQUENCE_ANALYTICS].viewSequencesPage, h.Fj[h.kq.JWT_VALIDATION].viewJWTRules, h.Fj[h.kq.JWT_VALIDATION].addJWTRule, h.Fj[h.kq.JWT_VALIDATION].editJWTRule, h.Fj[h.kq.JWT_VALIDATION].deleteJWTRule, h.Fj[h.kq.JWT_VALIDATION].reprioritizeJWTRule, h.Fj[h.kq.JWT_VALIDATION].viewJWTConfigs, h.Fj[h.kq.JWT_VALIDATION].addJWTConfig, h.Fj[h.kq.JWT_VALIDATION].editJWTConfig, h.Fj[h.kq.JWT_VALIDATION].deleteJWTConfig, h.Fj[h.kq.SETTINGS].redirectToFirewallRulesTemplate, h.Fj[h.kq.SETTINGS].redirectToPages, h.Fj[h.kq.SETTINGS].listSessionIdentifiers, h.Fj[h.kq.SETTINGS].listRequestsContainingSessionIdentifiers, h.Fj[h.kq.SETTINGS].addOrRemoveSessionIdentifiers, h.Fj[h.kq.SETTINGS].redirectToCustomRules, h.Fj[h.kq.SETTINGS].listAllFallthroughSchemas, h.Fj[h.kq.SEQUENCE_RULES].listSequenceRules, h.Fj[h.kq.SEQUENCE_RULES].deleteSequenceRule, h.Fj[h.kq.SEQUENCE_RULES].reorderSequenceRule, h.Fj[h.kq.SEQUENCE_RULES].createSequenceRule, h.Fj[h.kq.SEQUENCE_RULES].editSequenceRule, ee.Z.ANALYTICS, ee.Z.CREATE_AND_DEPLOY, ee.Z.CREATE_MONITOR_LINK, ee.Z.CREATE_MONITOR, ee.Z.CREATE_POOL_LINK, ee.Z.CREATE_POOL, ee.Z.EDIT_MONITOR, ee.Z.EDIT_POOL, ee.Z.LOAD_BALANCING_TABLE, ee.Z.POOL_TABLE, ee.Z.EDIT_MONITOR_LINK, ee.Z.EDIT_POOL_LINK, ...M.eT, K.y.SECONDARY_DNS_NOTIFICATION_CREATE, K.y.SECONDARY_DNS_NOTIFICATION_UPDATE, K.y.SECONDARY_DNS_NOTIFICATION_DELETE, V.U.ZONE_TRANSFER_SUCCESS, V.U.DNS_RECORD_CREATE, V.U.DNS_RECORD_UPDATE, V.U.DNS_RECORD_DELETE, Ke.Y.PEER_DNS_CREATE, Ke.Y.PEER_DNS_UPDATE, Ke.Y.PEER_DNS_DELETE, Ke.Y.ZONE_TRANSFER_ENABLE, Ke.Y.ZONE_TRANSFER_DISABLE, ye.V.ARGO_ENABLEMENT, ye.V.ARGO_GEO_ANALYTICS_FETCH, ye.V.ARGO_GLOBAL_ANALYTICS_FETCH, pe.X.VIEW_BUCKETS_LIST, pe.X.CREATE_BUCKET, pe.X.VALIDATE_BUCKET, pe.X.DELETE_BUCKET, pe.X.VIEW_CAPTURES_LIST, pe.X.CREATE_SIMPLE_CAPTURE, pe.X.CREATE_FULL_CAPTURE, pe.X.VIEW_FULL_CAPTURE, pe.X.DOWNLOAD_SIMPLE_CAPTURE, $.bK.VIEW_RULES, $.bK.CREATE_RULE, $.bK.UPDATE_RULE, $.bK.DELETE_RULE, $.bK.VIEW_CONFIGURATION, $.bK.CREATE_CONFIGURATION, $.bK.UPDATE_CONFIGURATION, $.bK.DELETE_CONFIGURATION, ae.r8.VIEW_ALERTS, ae.r8.VIEW_ALERTS_HISTORY, ae.r8.MAGIC_OVERVIEW_ANALYTICS, ae.VZ.CREATE_SITE, ae.VZ.CREATE_TUNNEL, ae.VZ.CREATE_STATIC_ROUTE, te.o4.CLICK_ADAPTIVE_SAMPLING, te.o4.CLICK_TO_LOG_EXPLORER_BANNER, te.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, te.o4.CLICK_SWITCH_TO_RAW_LOGS, te.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", k.U.REGISTER_DOMAIN_SEARCH_SUBMIT, k.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, k.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, k.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, k.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, k.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, k.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, k.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, k.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, k.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, k.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, k.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, k.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, k.U.REGISTER_DOMAIN_CHECKOUT_ERROR, k.U.TRANSFER_DOMAIN_CHANGE_STEP, k.U.RENEW_DOMAIN_COMPLETED, k.U.RESTORE_DOMAIN_INIT, k.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, k.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, k.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, k.U.RESTORE_DOMAIN_FAILURE, k.U.RESTORE_DOMAIN_COMPLETED, k.U.DOMAIN_DELETE_INIT, k.U.DOMAIN_DELETE_COMPLETED, k.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, k.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, k.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, k.U.DOMAIN_DELETE_CONFIRM_DELETE, k.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, k.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, k.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, k.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, k.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, k.U.DOMAIN_MOVE_START_FLOW, k.U.DOMAIN_MOVE_OPEN_DOCS, k.U.DOMAIN_MOVE_CLOSE_FLOW, k.U.DOMAIN_MOVE_PROGRESS_FLOW, k.U.DOMAIN_MOVE_SUBMIT, k.U.DOMAIN_MOVE_INITIATE_SUCCESS, k.U.DOMAIN_MOVE_INITIATE_ERROR, k.U.DOMAIN_MOVE_CANCEL, k.U.DOMAIN_MOVE_CANCEL_SUCCESS, k.U.DOMAIN_MOVE_CANCEL_ERROR, k.U.ACTION_CENTER_NAVIGATE, k.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, k.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, k.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, Je.z3.CREATE_SECRET, Je.z3.DELETE_SECRET, Je.z3.BIND_SECRET, Je.z3.DUPLICATE_SECRET, Je.z3.EDIT_SECRET, F.KO.CLICK_GET_STARTED_GUIDE, F.KO.CLICK_PIPELINE_DOCUMENTATION, F.KO.CLICK_QUICK_LINK, F.KO.CREATE_PIPELINE, F.KO.DELETE_PIPELINE, F.KO.LIST_PIPELINES, F.KO.VIEW_PIPELINE, S.S.EXISTING_DOMAIN, S.S.NEW_DOMAIN, S.S.WAF_RULESET, S.S.WORKERS, S.S.PAGES, S.S.R2, S.S.ACCOUNT_MEMBERS, ce._.TEMPLATE_PRODUCT_SELECTED, ce._.TEMPLATE_SELECTED, ce._.TEMPLATE_SAVE_DRAFT, ce._.TEMPLATE_CANCEL, ce._.TEMPLATE_DEPLOY, le.D.CLICK_GO_BACK_SHARE_MODAL, le.D.CLICK_MENU_ITEM_SHARE, le.D.CLICK_ON_CANCEL_SHARE_MODAL, le.D.CLICK_ON_CLOSE_SHARE_MODAL, le.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, le.D.CLICK_ON_DELETE_RULESET, le.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, le.D.CLICK_ON_EDIT_SHARE_PERMISSION, le.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, le.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, le.D.CLICK_ON_SHARE_TABLE_ROW, G.pR.CLICK_GEOGRAPHICAL_TEMPLATE, G.pR.CLICK_IP_TEMPLATE, G.pR.CLICK_USER_AGENT_TEMPLATE, G.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, me.vc.CREATED, me.vc.ENABLED, me.vc.DISABLED, me.vc.DELETED, me.vc.UPDATED, me.vc.DOWNLOADED, z.Gk.REQUEST_REVIEW, z.Gk.COPY_URL, N.v.FIELD, N.v.OPERATOR, Ye.Vj.SHOW_LCC_MIGRATION_BANNER, Ye.Vj.CLICK_LCC_DOCUMENTATION, Ye.Vj.CLICK_LCC_UPGRADE_GUIDE, Ye.Vj.SHOW_LCC_MIGRATION_WARNING, ve.y.CLICK_DISMISS_INELIGIBILITY, ve.y.CLICK_NEXT_STEP, ve.y.CLICK_OPT_IN, ve.y.CLICK_OPT_IN_BUTTON, ve.y.CLICK_OPT_OUT_BUTTON, ve.y.DISPLAY_MODAL, ve.y.DISPLAY_OPT_OUT_MODAL, ve.y.DISPLAY_TOOLTIP_NOT_AVAILABLE, ve.y.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, De.AZ.LOAD_INSIGHTS, De.AZ.OPEN_SIDE_MODAL_INSIGHT, De.AZ.CLOSE_SIDE_MODAL_INSIGHT, De.AZ.CLICK_ACTION_INSIGHT, Xe.JR.ADD_SUSPICIOUS_ACTIVITY_FILTER, Xe.JR.REMOVE_SUSPICIOUS_ACTIVITY_FILTER),
				pt = n.eg.exactStrict(n.eg.object({
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
					branch: n.eg.string.optional
				})),
				Y = (re, ne) => {
					const [p, C] = de(ne);
					let X, _e;
					return (0, n.nM)(qe.decode(re)) && (X = new I.Uh(re)), C && C.length > 0 && (_e = new I.oV(re, C)), [p, X, _e]
				},
				de = re => {
					const ne = pt.decode(re);
					if ((0, n.nM)(ne)) {
						const p = ne.left.map(({
							context: C
						}) => C.map(({
							key: X
						}) => X)).reduce((C, X) => C.concat(X), []).filter(C => C in re);
						return [he(p, re), p]
					}
					return [re, []]
				},
				he = (re, ne) => Object.entries(ne).reduce((p, [C, X]) => (re.includes(C) || (p[C] = X), p), {}),
				Ue = re => (ne, p, C) => {
					const [X, _e, Pe] = Y(p, C);
					if (_e) throw _e;
					return Pe && console.error(Pe), re(ne, p, X)
				};
			var je = t("../react/utils/zaraz.ts");
			const Ne = {
					identify: !0
				},
				et = re => (ne, p, C) => (Ne[p] || je.tg === null || je.tg === void 0 || je.tg.track(p, C), re(ne, p, C));
			var ct = t("../react/common/selectors/userSelectors.ts"),
				mt = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function tt(re) {
				for (var ne = 1; ne < arguments.length; ne++) {
					var p = arguments[ne] != null ? Object(arguments[ne]) : {},
						C = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(p).filter(function(X) {
						return Object.getOwnPropertyDescriptor(p, X).enumerable
					})), C.forEach(function(X) {
						Et(re, X, p[X])
					})
				}
				return re
			}

			function Et(re, ne, p) {
				return ne = yt(ne), ne in re ? Object.defineProperty(re, ne, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : re[ne] = p, re
			}

			function yt(re) {
				var ne = gt(re, "string");
				return typeof ne == "symbol" ? ne : String(ne)
			}

			function gt(re, ne) {
				if (typeof re != "object" || re === null) return re;
				var p = re[Symbol.toPrimitive];
				if (p !== void 0) {
					var C = p.call(re, ne || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ne === "string" ? String : Number)(re)
			}
			const ke = new Set(["cf_argo", "load_balancing_basic_plus"]),
				be = new Set(["pro", "business"]),
				Fe = ({
					price: re,
					ratePlanId: ne,
					ratePlanName: p,
					frequency: C,
					isNewSubscription: X
				}) => ({
					event: "purchase",
					new_subscription: X,
					ecommerce: {
						transaction_id: (0, mt.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: re
					},
					items: [{
						item_id: ne,
						item_name: p || ne,
						frequency: C,
						price: re
					}]
				}),
				ht = re => {
					const {
						price: ne,
						frequency: p,
						plan: C,
						ratePlanId: X,
						ratePlanName: _e
					} = re;
					return be.has(C) ? tt({}, Fe({
						price: ne,
						ratePlanId: X,
						ratePlanName: _e,
						frequency: p,
						isNewSubscription: !0
					}), {
						label: C
					}) : void 0
				},
				lt = re => {
					const {
						price: ne,
						frequency: p,
						ratePlan: C,
						ratePlanName: X
					} = re;
					return ke.has(C) ? tt({}, Fe({
						price: ne,
						ratePlanId: C,
						ratePlanName: X,
						frequency: p,
						isNewSubscription: !0
					}), {
						label: C
					}) : void 0
				},
				bt = re => {
					const {
						price: ne,
						frequency: p,
						plan: C,
						ratePlanId: X,
						ratePlanName: _e,
						label: Pe
					} = re;
					return be.has(C) ? tt({}, Fe({
						price: ne,
						frequency: p,
						ratePlanId: X,
						ratePlanName: _e,
						isNewSubscription: !1
					}), {
						label: Pe || C
					}) : void 0
				},
				Z = re => {
					const {
						price: ne,
						frequency: p,
						ratePlan: C,
						ratePlanName: X,
						oldRatePlan: _e
					} = re;
					return ke.has(C) ? tt({}, Fe({
						price: ne,
						frequency: p,
						ratePlanId: C,
						ratePlanName: X,
						isNewSubscription: !1
					}), {
						label: `${_e}->${C}`
					}) : void 0
				},
				se = "pageview",
				Ee = "create zone",
				Te = "create user",
				Le = "Plan Purchase Success",
				xe = "Product Purchase Success",
				Qe = "Plan Update Success",
				nt = "Product Update Success",
				we = {
					[se]: !0,
					[Ee]: !0,
					[Te]: !0,
					[Le]: !0,
					[xe]: !0,
					[Qe]: !0,
					[nt]: !0
				},
				Ct = re => {
					var ne;
					return !!((ne = re.gates.assignments) === null || ne === void 0 ? void 0 : ne["dx-enable-google-tag-manager"])
				},
				ut = re => {
					const ne = /\|MCMID\|([0-9]+)\|/,
						p = re.match(ne);
					return p ? p[1] : void 0
				},
				Nt = re => {
					var ne;
					const {
						deviceViewport: p,
						page: C,
						previousPage: X,
						pageName: _e,
						utm_campaign: Pe,
						_ga: $e,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Ze
					} = re, {
						origin: ze
					} = window.location, ot = (0, ct.PR)((0, u.bh)().getState());
					return {
						event: X !== void 0 && C !== X ? "virtual_page_view" : "page_load",
						device_type: p,
						hostname: ze,
						language: navigator.language,
						locale: (0, l.r)((0, u.bh)().getState()),
						page_location: C ? `${ze}${C}` : "[redacted]",
						page_path: C ? `${C}` : "[redacted]",
						page_referrer: X ? `${ze}/${X}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: _e || "[redacted]",
						page_url: C ? `${ze}${C}` : "[redacted]",
						query: Pe ? `?utm_campaign=${Pe}` : "[redacted]",
						user_properties: {
							ga_client_id: (ne = $e) !== null && ne !== void 0 ? ne : void 0,
							ga_client_id_s: $e ? `s${$e}` : void 0,
							user_id: Ot() ? ot == null ? void 0 : ot.id : void 0,
							ecid: Ze ? ut(Ze) : void 0
						}
					}
				},
				ft = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				at = re => {
					const {
						status: ne
					} = re;
					return ne === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				wt = (re, ne) => {
					switch (re) {
						case se:
							return Nt(ne);
						case Ee:
							return ft();
						case Te:
							return at(ne);
						case Le:
							return ht(ne);
						case xe:
							return lt(ne);
						case Qe:
							return bt(ne);
						case nt:
							return Z(ne);
						default:
							return
					}
				},
				Rt = re => (ne, p, C) => {
					if (we[p]) {
						var X;
						const _e = wt(p, C);
						_e && ((X = window.dataLayer) === null || X === void 0 || X.push(_e))
					}
					return re(ne, p, C)
				};
			var Tt = t("../react/utils/cookiePreferences.ts");

			function Pt(re) {
				for (var ne = 1; ne < arguments.length; ne++) {
					var p = arguments[ne] != null ? Object(arguments[ne]) : {},
						C = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(p).filter(function(X) {
						return Object.getOwnPropertyDescriptor(p, X).enumerable
					})), C.forEach(function(X) {
						It(re, X, p[X])
					})
				}
				return re
			}

			function It(re, ne, p) {
				return ne = Ge(ne), ne in re ? Object.defineProperty(re, ne, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : re[ne] = p, re
			}

			function Ge(re) {
				var ne = Dt(re, "string");
				return typeof ne == "symbol" ? ne : String(ne)
			}

			function Dt(re, ne) {
				if (typeof re != "object" || re === null) return re;
				var p = re[Symbol.toPrimitive];
				if (p !== void 0) {
					var C = p.call(re, ne || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ne === "string" ? String : Number)(re)
			}
			const xt = re => {
					const ne = Ct((0, u.bh)().getState());
					o().init(Pt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: vt() && !(0, a.gm)() && Ot(),
						middlewares: [D, Ue, T, et, ...ne ? [Rt] : []]
					}, re))
				},
				Lt = () => {
					o().identify(Pt({}, (0, e.getAttribution)(), {
						locale: (0, l.r)((0, u.bh)().getState()),
						isCloudflare: !!(0, v.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				vt = () => !0,
				Bt = () => {
					(0, Tt.kT)("sparrow_id")
				},
				Ot = () => (0, Tt.Xm)()
		},
		"../utils/initStyles.ts": function(W, E, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = t("../react/app/providers/storeContainer.js");
			const a = "cfBaseStyles",
				u = document.head || document.getElementsByTagName("head")[0],
				l = i => {
					const m = [];
					for (let g in i.colors) {
						const n = i.colors[g];
						if (Array.isArray(n) && g !== "categorical")
							for (let s = 0; s < n.length; ++s) m.push(`--cf-${g}-${s}:${n[s]};`)
					}
					return m.join(`
`)
				},
				v = () => {
					const i = (0, e.Yc)(),
						m = `
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
					let g = document.getElementById(a);
					g ? g.innerText = "" : (g = document.createElement("style"), g.id = a, u.appendChild(g)), g.appendChild(document.createTextNode(m)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(v), E.Z = v
		},
		"../utils/sentry/lastSentEventId.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let a = "";
				return {
					setEventId: v => (!v || typeof v != "string" || (a = v), a),
					getEventId: () => a
				}
			})()
		},
		"../utils/zaraz.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Ro: function() {
					return s
				},
				bM: function() {
					return m
				},
				tg: function() {
					return i
				},
				yn: function() {
					return n
				}
			});

			function e(r) {
				for (var d = 1; d < arguments.length; d++) {
					var c = arguments[d] != null ? Object(arguments[d]) : {},
						f = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(c).filter(function(b) {
						return Object.getOwnPropertyDescriptor(c, b).enumerable
					})), f.forEach(function(b) {
						o(r, b, c[b])
					})
				}
				return r
			}

			function o(r, d, c) {
				return d = a(d), d in r ? Object.defineProperty(r, d, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[d] = c, r
			}

			function a(r) {
				var d = u(r, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function u(r, d) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var f = c.call(r, d || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(r)
			}
			const l = {
					track: (r, d) => null,
					set: (r, d) => console.log(`zaraz.set(${r}, ${d})`)
				},
				v = {
					track: (r, d) => {
						var c;
						(c = window.zaraz) === null || c === void 0 || c.track(r, e({}, d, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (r, d) => {
						var c;
						return (c = window.zaraz) === null || c === void 0 ? void 0 : c.set(r, d)
					}
				};
			let i;
			const m = () => {
					window.zaraz, i = v
				},
				g = ["email", "first_name", "last_name"],
				n = r => {
					g.forEach(d => {
						var c;
						(c = i) === null || c === void 0 || c.set(d, r[d])
					})
				},
				s = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(W, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				u = t.n(a),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				v = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = t.n(v),
				m = t("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				g = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				c = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				f = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				b = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				P = t("../../../common/component/component-filter-bar/src/constants.js"),
				w = t("../../../common/component/component-filter-bar/src/utils.js");

			function y() {
				return y = Object.assign ? Object.assign.bind() : function(B) {
					for (var h = 1; h < arguments.length; h++) {
						var x = arguments[h];
						for (var G in x) Object.prototype.hasOwnProperty.call(x, G) && (B[G] = x[G])
					}
					return B
				}, y.apply(this, arguments)
			}

			function O(B) {
				for (var h = 1; h < arguments.length; h++) {
					var x = arguments[h] != null ? Object(arguments[h]) : {},
						G = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(x).filter(function(q) {
						return Object.getOwnPropertyDescriptor(x, q).enumerable
					})), G.forEach(function(q) {
						_(B, q, x[q])
					})
				}
				return B
			}

			function _(B, h, x) {
				return h = T(h), h in B ? Object.defineProperty(B, h, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[h] = x, B
			}

			function T(B) {
				var h = D(B, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function D(B, h) {
				if (typeof B != "object" || B === null) return B;
				var x = B[Symbol.toPrimitive];
				if (x !== void 0) {
					var G = x.call(B, h || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(B)
			}
			const S = 70,
				N = (0, l.createStyledComponent)(({
					showOverflow: B
				}) => O({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, B ? {} : {
					maxHeight: S,
					overflow: "hidden"
				})),
				A = (0, l.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				I = (0, l.createStyledComponent)(({
					theme: B
				}) => ({
					backgroundColor: B.colors.background,
					py: 1,
					px: 2,
					borderRadius: B.radii[2],
					border: `1px solid ${B.colors.gray[7]}`,
					fontSize: B.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: B.colors.gray[4]
					}
				}), "div"),
				L = (0, l.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				k = (0, l.createStyledComponent)(({
					theme: B
				}) => ({
					color: B.colors.gray[4],
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
				Q = (0, l.createStyledComponent)(({
					buttonStyle: B
				}) => O({
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
				}, B), g.zx),
				ae = (0, l.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				pe = (0, l.createStyledComponent)(({
					theme: B
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: B.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: B.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: B.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: B.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				ce = (0, l.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				ue = B => B.current ? [...B.current.children].reduce((h, x) => (x.offsetTop >= S && h++, h), 0) : 0;
			let F = 0;
			class z extends e.Component {
				constructor() {
					super();
					_(this, "overflowWrapper", (0, e.createRef)()), _(this, "hasOverflowed", h => {
						const x = ue(this.overflowWrapper);
						h.scrollHeight > S && x >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (h.scrollHeight < S || x === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), _(this, "addNewFilter", () => {
						const {
							filterDefinitions: h
						} = this.props, x = (0, w.TE)(h), G = Object.keys(x)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: G,
								operator: (0, w.uv)(G, x),
								value: (0, w.TT)(G, x)
							}
						})
					}), _(this, "handleOpenFilterEdit", h => {
						this.setState({
							openFilter: h,
							filterChanges: O({}, this.props.filters[h])
						})
					}), _(this, "handleRemoveFilterClick", (h, x) => {
						h.stopPropagation(), this.removeFilter(x)
					}), _(this, "removeFilter", h => {
						const {
							handleFiltersChange: x
						} = this.props, G = [...this.props.filters], q = G[h];
						G.splice(h, 1), x(G), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: q.key,
							operator: q.operator,
							value: q.value
						})
					}), _(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), _(this, "handleFilterSubmit", h => {
						const {
							filterDefinitions: x
						} = this.props;
						h.preventDefault();
						const {
							filterChanges: G
						} = this.state, q = typeof x[G.key].parse == "function" ? Array.isArray(G.value) ? G.value.map(x[G.key].parse) : x[G.key].parse(G.value) : G.value;
						if (x[G.key].validate && (Array.isArray(q) ? !q.every(x[G.key].validate) : !x[G.key].validate(q))) return this.setState({
							invalid: !0
						});
						const ie = [...this.props.filters],
							ee = O({}, G, {
								value: q
							}),
							M = !ie[this.state.openFilter];
						M ? ie.push(ee) : ie[this.state.openFilter] = O({}, ee), this.props.handleFiltersChange(ie, ee), (M ? this.props.onAddFilter : this.props.onEditFilter)({
							field: ee.key,
							operator: ee.operator,
							value: ee.value
						}), this.closeOpenFilterChanges()
					}), _(this, "handlePendingKeyChange", ({
						value: h
					}) => {
						const {
							filterDefinitions: x
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: h,
								operator: (0, w.uv)(h, x),
								value: (0, w.TT)(h, x)
							}
						})
					}), _(this, "handlePendingOperatorChange", ({
						value: h
					}) => {
						let x = O({}, this.state.filterChanges, {
							operator: h
						});
						if ((0, w.dr)(h)) {
							var G, q;
							((G = this.state.filterChanges) === null || G === void 0 ? void 0 : G.value) && !Array.isArray((q = this.state.filterChanges) === null || q === void 0 ? void 0 : q.value) && (x.value = [this.state.filterChanges.value])
						} else {
							var ie, ee, M;
							((ie = this.state.filterChanges) === null || ie === void 0 ? void 0 : ie.value) && Array.isArray((ee = this.state.filterChanges) === null || ee === void 0 ? void 0 : ee.value) && ((M = this.state.filterChanges) === null || M === void 0 ? void 0 : M.value.length) > 0 && (x.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: x
						})
					}), _(this, "handlePendingValueChange", h => {
						this.setState({
							invalid: !1,
							filterChanges: O({}, this.state.filterChanges, {
								value: h
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
						id: ++F
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(h) {
					h.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(h) {
					const {
						formatLabel: x,
						filterDefinitions: G
					} = this.props, {
						operator: q
					} = this.state.filterChanges, ie = G[this.state.filterChanges.key], ee = this.state.filterChanges.value, M = V => Array.isArray(V) ? V.map($ => $.value) : (V == null ? void 0 : V.value) || null;
					if (ie.renderValueComponent) return ie.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (ie.type) {
						case P.k.custom: {
							var K;
							return o().createElement(ie.CustomComponent, y({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (K = ie == null ? void 0 : ie.customProps) !== null && K !== void 0 ? K : {}))
						}
						case P.k.select:
							return (0, w.dr)(q) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !ie.options,
								value: typeof ee.split == "function" ? ee == null ? void 0 : ee.split(",") : Array.isArray(ee) ? ee : [],
								options: ie.options ? ie.options.map(V => ({
									value: V.value || V,
									label: V.label || x(this.state.filterChanges.key, V, h)
								})) : ee ? (Array.isArray(ee) ? ee : ee.split(",")).map(V => ({
									label: V,
									value: V
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(v.Trans, {
									id: ie.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: ie.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: V => {
									this.handlePendingValueChange(M(V))
								},
								isValidNewOption: V => {
									const $ = ie.validate;
									return !$ && V || V && $([V])
								},
								getNewOptionData: (V, $) => ({
									value: V,
									label: $
								})
							}) : o().createElement(r.hQ, {
								hideLabel: !0,
								value: ee,
								options: ie.options.map(V => ({
									value: V,
									label: x(this.state.filterChanges.key, V, h)
								})),
								onChange: ({
									value: V
								}) => this.handlePendingValueChange(V)
							});
						case P.k.string:
						default:
							return (0, w.dr)(q) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof ee.split == "function" ? ee == null ? void 0 : ee.split(",") : Array.isArray(ee) ? ee : [],
								options: ee ? (Array.isArray(ee) ? ee : ee.split(",")).map(V => ({
									label: V,
									value: V
								})) : [],
								noOptionsMessage: () => null,
								placeholder: h.t("analytics.report.filters.labels.placeholder", {
									example: G[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: V => {
									this.handlePendingValueChange(M(V))
								},
								isValidNewOption: V => {
									const $ = ie.validate;
									return !$ && V || V && $([V])
								},
								getNewOptionData: (V, $) => ({
									value: V,
									label: $
								}),
								formatCreateLabel: V => h.t("filter_editor.value_create_label", {
									value: V
								})
							}) : o().createElement(v.I18n, null, V => o().createElement(m.I, {
								value: this.state.filterChanges.value,
								onChange: $ => this.handlePendingValueChange($.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: V.t("analytics.report.filters.labels.placeholder", {
									example: G[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: h,
						filterDefinitions: x,
						modalStyles: G,
						filterIconType: q,
						buttonStyle: ie
					} = this.props, ee = ue(this.overflowWrapper), M = `filterPanel${this.state.id}`, K = this.state.openFilter !== null;
					return o().createElement(v.I18n, null, V => o().createElement(d.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(ce, null, o().createElement(Q, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": K,
						"aria-controls": M,
						inverted: !0,
						buttonStyle: ie
					}, o().createElement(n.J, {
						type: q || "add",
						mr: 1,
						label: V.t("common.add", {
							_: "Add"
						})
					}), o().createElement(v.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(ae, null, o().createElement(v.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(N, {
						innerRef: this.overflowWrapper,
						overflowLimit: S,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map(($, te) => {
						const {
							key: me,
							operator: le,
							value: ge
						} = $, ye = x[me].ignoreLabelTranslation ? x[me].label : V.t(x[me].label), Ae = V.t(`analytics.report.filters.operators.${le}`), Be = Array.isArray(ge) ? ge.map(Se => h(me, Se, V)).join(", ") : h(me, ge, V), Ce = `${ye} ${Ae} ${Be}`;
						return o().createElement(A, {
							key: `${me}-${le}-${ge}`,
							title: Ce
						}, o().createElement(I, {
							onClick: () => this.handleOpenFilterEdit(te)
						}, o().createElement(d.ZC, {
							display: "flex"
						}, o().createElement(L, null, ye), o().createElement(k, null, Ae), o().createElement(U, null, Be), (0, w.oN)($, x) ? o().createElement(s.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(pe, {
							onClick: Se => this.handleRemoveFilterClick(Se, te),
							"aria-label": "remove"
						}, o().createElement(n.J, {
							type: "remove"
						})))))
					})), K && o().createElement(b.Z, {
						id: M,
						filterDefinitions: x,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, w.oN)(this.state.filterChanges, x),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: h,
						modalStyles: G
					}), this.state.hasOverflowed && o().createElement(f.Z, {
						count: ee,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			_(z, "propTypes", {
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
			}), E.Z = z
		},
		"../../../common/component/component-filter-bar/src/index.js": function(W, E, t) {
			"use strict";
			t.d(E, {
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
					return u.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				a = t("../../../common/component/component-filter-bar/src/constants.js"),
				u = t("../../../common/component/component-filter-bar/src/utils.js"),
				l = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				OZ: function() {
					return l
				},
				YB: function() {
					return u
				}
			});

			function e(i, m, g) {
				return m = o(m), m in i ? Object.defineProperty(i, m, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[m] = g, i
			}

			function o(i) {
				var m = a(i, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function a(i, m) {
				if (typeof i != "object" || i === null) return i;
				var g = i[Symbol.toPrimitive];
				if (g !== void 0) {
					var n = g.call(i, m || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(i)
			}
			class u extends Error {
				constructor(m, g) {
					super(g);
					e(this, "translationKey", void 0), this.translationKey = m, this.name = "TranslatorError"
				}
			}
			class l extends u {
				constructor(m) {
					super(m, `Translation key not found: ${m}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var v = null
		},
		"../../../common/util/types/src/api/domain.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Aw: function() {
					return D
				},
				Ib: function() {
					return _
				},
				Ks: function() {
					return S
				},
				MS: function() {
					return T
				},
				PN: function() {
					return f
				},
				Pp: function() {
					return u
				},
				Q3: function() {
					return d
				},
				TS: function() {
					return c
				},
				W7: function() {
					return w
				},
				dN: function() {
					return N
				},
				eF: function() {
					return O
				},
				qp: function() {
					return n
				},
				wR: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
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
				l = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				v = e.eg.object({
					registrant: u.optional,
					technical: u.optional,
					administrator: u.optional,
					billing: u.optional
				}),
				i = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: v.optional,
					years: e.eg.number
				}),
				m = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let g = function(A) {
				return A.ONBOARDING_INITIATED = "Onboarding Initiated", A.ONBOARDED = "Onboarded", A.PENDING_REGISTRY_LOCK = "Pending Registry Lock", A.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", A.REGISTRY_UNLOCKED = "Registry Unlocked", A.LOCKED = "Locked", A.FAILED_TO_LOCK = "Failed To Lock", A.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", A.UNLOCKED = "Unlocked", A.OFFBOARDED = "Offboarded", A
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
						status: e.eg.enum(g).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: m.optional,
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
				s = e.eg.object({
					available: e.eg.boolean
				}),
				r = e.eg.object({
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
				c = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let f = function(A) {
				return A.PENDING = "pending", A.VERIFIED = "verified", A.REJECTED = "rejected", A.PENDING_DELETE = "pending_delete", A.DELETED = "deleted", A
			}({});
			const b = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(f),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				P = e.eg.object({
					designated_approvers: e.eg.array(b)
				});
			let w = function(A) {
				return A.PENDING = "pending", A.PENDING_UPDATE = "pending_update", A.ENABLED = "enabled", A.DISABLED = "disabled", A
			}({});
			const y = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(w)
				}),
				O = e.eg.intersection([y, P]),
				_ = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let T = function(A) {
				return A.UNLOCK_APPROVAL = "UnlockApprovalRequest", A.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", A.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", A.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", A
			}({});
			const D = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				S = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
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
					return u
				},
				qu: function() {
					return e
				},
				zc: function() {
					return v
				}
			});
			let e = function(i) {
					return i.Custom = "custom", i.Root = "root", i.Managed = "managed", i.Zone = "zone", i.RateLimit = "ratelimit", i
				}({}),
				o = function(i) {
					return i.Cache = "http_request_cache_settings", i.HttpConfigSettings = "http_config_settings", i.HttpLogCustomFields = "http_log_custom_fields", i.HttpRateLimit = "http_ratelimit", i.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", i.HttpRequestFirewallCustom = "http_request_firewall_custom", i.HttpRequestFirewallManaged = "http_request_firewall_managed", i.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", i.HttpRequestLateTransform = "http_request_late_transform", i.HttpRequestMain = "http_request_main", i.HttpRequestOrigin = "http_request_origin", i.HttpRequestRedirect = "http_request_redirect", i.HttpRequestSanitize = "http_request_sanitize", i.HttpRequestSBFM = "http_request_sbfm", i.HttpRequestsSnippets = "http_request_snippets", i.HttpRequestTransform = "http_request_transform", i.HttpResponseCompression = "http_response_compression", i.HttpResponseFirewallManaged = "http_response_firewall_managed", i.HttpResponseTransform = "http_response_headers_transform", i.L4DDoS = "ddos_l4", i.L7DDoS = "ddos_l7", i.MagicIDS = "magic_transit_ids_managed", i.MagicManaged = "magic_transit_managed", i.MagicTransit = "magic_transit", i.MagicTransitRateLimit = "magic_transit_ratelimit", i
				}({}),
				a = function(i) {
					return i.Execute = "execute", i.All = "all", i.Block = "block", i.JSChallenge = "js_challenge", i.Challenge = "challenge", i.Allow = "allow", i.Bypass = "bypass", i.Log = "log", i.Rewrite = "rewrite", i.Score = "score", i.Skip = "skip", i.Managed_Challenge = "managed_challenge", i.DDoS_Dynamic = "ddos_dynamic", i.Select_Config = "select_config", i.Set_Config = "set_config", i.Reset = "reset", i.Redirect = "redirect", i.Cache = "set_cache_settings", i
				}({}),
				u = function(i) {
					return i.ZONE_LOCKDOWN = "zoneLockdown", i.UA_BLOCK = "uaBlock", i.BIC = "bic", i.HOT = "hot", i.SECURITY_LEVEL = "securityLevel", i.RATE_LIMIT = "rateLimit", i.WAF = "waf", i
				}({}),
				l = function(i) {
					return i.DEFAULT = "default", i.MEDIUM = "medium", i.LOW = "low", i.EOFF = "eoff", i.HIGH = "high", i.VERY_HIGH = "very_high", i
				}({}),
				v = function(i) {
					return i.DEFAULT = "", i.XML = "text/xml", i.JSON = "application/json", i.TEXT = "text/plain", i.HTML = "text/html", i
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
			const o = (a, u) => {
				if (u !== void 0) throw new Error("Unexpected object: " + a);
				return u
			}
		},
		"../../../dash/intl/intl-translations/src/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/common/out.css": function(W, E, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[W.id, e, ""]
			]);
			var o, a, u = {
				hmr: !0
			};
			u.transform = o, u.insertInto = void 0;
			var l = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, u);
			e.locals && (W.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../react/common/out.css": function(W, E, t) {
			E = W.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), E.push([W.id, `/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, components, utilities;
@layer theme {
  :root, :host {
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-800: oklch(44.4% 0.177 26.899);
    --color-orange-500: oklch(70.5% 0.213 47.604);
    --color-blue-400: oklch(0.707 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(0.424 0.199 265.638);
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
    --color-stone-50: oklch(98.5% 0.001 106.423);
    --color-stone-200: oklch(92.3% 0.003 48.717);
    --color-stone-300: oklch(86.9% 0.005 56.366);
    --color-stone-400: oklch(70.9% 0.01 56.259);
    --color-stone-500: oklch(55.3% 0.013 58.071);
    --color-stone-700: oklch(37.4% 0.01 67.558);
    --color-stone-800: oklch(26.8% 0.007 34.298);
    --color-stone-900: oklch(21.6% 0.006 56.043);
    --color-stone-950: oklch(14.7% 0.004 49.25);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-md: 28rem;
    --text-xs: 10px;
    --text-xs--line-height: calc(1 / 0.5);
    --text-sm: 12px;
    --text-sm--line-height: calc(1 / 0.75);
    --text-base: 14px;
    --text-base--line-height: calc(1.25 / 0.875);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
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
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --default-transition-duration: 100ms /* snappier than default 150ms */;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-bounce: cubic-bezier(0.2, 0, 0, 1.5);
    --color-neutral-150: oklch(0.96 0 0) /*new */;
    --color-neutral-250: oklch(0.9 0 0) /* new */;
    --color-neutral-450: oklch(0.62 0 0) /* new */;
    --color-neutral-750: oklch(0.31 0 0) /* new */;
    --color-neutral-850: oklch(0.23 0 0) /* new */;
    --color-red-650: oklch(0.55 0.238 27.4);
    --color-red-750: oklch(0.46 0.195 27.2);
    --color-ob-base-100: var(--color-white);
    --color-ob-base-200: var(--color-neutral-50);
    --color-ob-base-1000: var(--color-neutral-900);
    --color-ob-border: var(--color-neutral-200);
    --color-ob-border-active: var(--color-neutral-400);
    --text-color-ob-base-100: var(--color-neutral-500);
    --text-color-ob-base-200: var(--color-neutral-600);
    --text-color-ob-base-300: var(--color-neutral-900);
    --text-color-ob-destructive: var(--color-red-600);
    --text-color-ob-inverted: var(--color-white);
    --color-ob-btn-primary-bg: var(--color-neutral-750);
    --color-ob-btn-primary-bg-hover: var(--color-neutral-850);
    --color-ob-btn-primary-border: var(--color-neutral-500);
    --color-ob-btn-primary-border-hover: var(--color-neutral-600);
    --color-ob-btn-secondary-bg: var(--color-white);
    --color-ob-btn-secondary-bg-hover: var(--color-neutral-50);
    --color-ob-btn-secondary-border: var(--color-neutral-200);
    --color-ob-btn-secondary-border-hover: var(--color-neutral-300);
    --color-ob-btn-ghost-bg-hover: var(--color-neutral-150);
    --color-ob-btn-destructive-bg: var(--color-red-600);
    --color-ob-btn-destructive-bg-hover: var(--color-red-650);
    --color-ob-btn-destructive-border: var(--color-red-400);
    --color-ob-btn-destructive-border-hover: var(--color-red-500);
    --color-ob-focus: var(--color-blue-400);
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
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
  .-top-7 {
    top: calc(var(--spacing) * -7);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .-bottom-7 {
    bottom: calc(var(--spacing) * -7);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-1\\/2 {
    left: calc(1/2 * 100%);
  }
  .isolate {
    isolation: isolate;
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
  .m-0 {
    margin: calc(var(--spacing) * 0);
  }
  .m-auto {
    margin: auto;
  }
  .my-1\\.5 {
    margin-block: calc(var(--spacing) * 1.5);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
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
  .mr-0\\.5 {
    margin-right: calc(var(--spacing) * 0.5);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
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
  .mb-8 {
    margin-bottom: calc(var(--spacing) * 8);
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
  .\\!line-clamp-1 {
    overflow: hidden !important;
    display: -webkit-box !important;
    -webkit-box-orient: vertical !important;
    -webkit-line-clamp: 1 !important;
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
  .\\!flex {
    display: flex !important;
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
  .h-2 {
    height: calc(var(--spacing) * 2);
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
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-6\\.5 {
    height: calc(var(--spacing) * 6.5);
  }
  .h-7\\.5 {
    height: calc(var(--spacing) * 7.5);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
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
  .min-h-screen {
    min-height: 100vh;
  }
  .\\!w-\\[400px\\] {
    width: 400px !important;
  }
  .\\!w-full {
    width: 100% !important;
  }
  .w-1\\/3 {
    width: calc(1/3 * 100%);
  }
  .w-1\\/6 {
    width: calc(1/6 * 100%);
  }
  .w-2\\/3 {
    width: calc(2/3 * 100%);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-3\\.5 {
    width: calc(var(--spacing) * 3.5);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
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
  .w-48 {
    width: calc(var(--spacing) * 48);
  }
  .w-\\[80px\\] {
    width: 80px;
  }
  .w-\\[100px\\] {
    width: 100px;
  }
  .w-\\[200px\\] {
    width: 200px;
  }
  .w-\\[400px\\] {
    width: 400px;
  }
  .w-full {
    width: 100%;
  }
  .w-max {
    width: max-content;
  }
  .max-w-20 {
    max-width: calc(var(--spacing) * 20);
  }
  .max-w-140 {
    max-width: calc(var(--spacing) * 140);
  }
  .max-w-\\[300px\\] {
    max-width: 300px;
  }
  .max-w-\\[400px\\] {
    max-width: 400px;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-10 {
    min-width: calc(var(--spacing) * 10);
  }
  .min-w-16 {
    min-width: calc(var(--spacing) * 16);
  }
  .min-w-20 {
    min-width: calc(var(--spacing) * 20);
  }
  .min-w-40 {
    min-width: calc(var(--spacing) * 40);
  }
  .flex-1 {
    flex: 1;
  }
  .flex-shrink {
    flex-shrink: 1;
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
  .border-collapse {
    border-collapse: collapse;
  }
  .origin-bottom-left {
    transform-origin: bottom left;
  }
  .origin-bottom-right {
    transform-origin: bottom right;
  }
  .origin-top-left {
    transform-origin: top left;
  }
  .origin-top-right {
    transform-origin: top right;
  }
  .-translate-x-1\\/2 {
    --tw-translate-x: calc(calc(1/2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-0 {
    --tw-translate-x: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-full {
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * 1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
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
  .cursor-copy {
    cursor: copy;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-text {
    cursor: text;
  }
  .resize {
    resize: both;
  }
  .appearance-none {
    appearance: none;
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
  .items-center {
    align-items: center;
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
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
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
  .self-start {
    align-self: flex-start;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-clip {
    overflow: clip;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .\\!rounded-none {
    border-radius: 0 !important;
  }
  .rounded {
    border-radius: 0.25rem;
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
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .\\!rounded-l-xl {
    border-top-left-radius: var(--radius-xl) !important;
    border-bottom-left-radius: var(--radius-xl) !important;
  }
  .rounded-l-xl {
    border-top-left-radius: var(--radius-xl);
    border-bottom-left-radius: var(--radius-xl);
  }
  .\\!rounded-r-xl {
    border-top-right-radius: var(--radius-xl) !important;
    border-bottom-right-radius: var(--radius-xl) !important;
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-0 {
    border-style: var(--tw-border-style);
    border-width: 0px;
  }
  .border-1 {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-x-0 {
    border-inline-style: var(--tw-border-style);
    border-inline-width: 0px;
  }
  .\\!border-r-0 {
    border-right-style: var(--tw-border-style) !important;
    border-right-width: 0px !important;
  }
  .border-r-0 {
    border-right-style: var(--tw-border-style);
    border-right-width: 0px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .\\!border-l-0 {
    border-left-style: var(--tw-border-style) !important;
    border-left-width: 0px !important;
  }
  .\\!border-none {
    --tw-border-style: none !important;
    border-style: none !important;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
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
  .border-neutral-800 {
    border-color: var(--color-neutral-800);
  }
  .border-ob-border {
    border-color: var(--color-ob-border);
  }
  .border-ob-btn-primary-border {
    border-color: var(--color-ob-btn-primary-border);
  }
  .border-red-500 {
    border-color: var(--color-red-500);
  }
  .border-stone-200 {
    border-color: var(--color-stone-200);
  }
  .border-transparent {
    border-color: transparent;
  }
  .\\!bg-blue-600 {
    background-color: var(--color-blue-600) !important;
  }
  .\\!bg-neutral-800 {
    background-color: var(--color-neutral-800) !important;
  }
  .bg-\\[\\#f6821f\\] {
    background-color: #f6821f;
  }
  .bg-black\\/5 {
    background-color: color-mix(in srgb, #000 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 5%, transparent);
    }
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
  .bg-neutral-700 {
    background-color: var(--color-neutral-700);
  }
  .bg-neutral-800 {
    background-color: var(--color-neutral-800);
  }
  .bg-neutral-900 {
    background-color: var(--color-neutral-900);
  }
  .bg-ob-base-100 {
    background-color: var(--color-ob-base-100);
  }
  .bg-ob-base-200 {
    background-color: var(--color-ob-base-200);
  }
  .bg-ob-base-1000 {
    background-color: var(--color-ob-base-1000);
  }
  .bg-orange-500 {
    background-color: var(--color-orange-500);
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-no-repeat {
    background-repeat: no-repeat;
  }
  .\\!p-0 {
    padding: calc(var(--spacing) * 0) !important;
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
  .p-6 {
    padding: calc(var(--spacing) * 6);
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
  .px-10 {
    padding-inline: calc(var(--spacing) * 10);
  }
  .px-12 {
    padding-inline: calc(var(--spacing) * 12);
  }
  .px-\\[1px\\] {
    padding-inline: 1px;
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .py-8 {
    padding-block: calc(var(--spacing) * 8);
  }
  .py-16 {
    padding-block: calc(var(--spacing) * 16);
  }
  .\\!pr-6\\.5 {
    padding-right: calc(var(--spacing) * 6.5) !important;
  }
  .\\!pr-8 {
    padding-right: calc(var(--spacing) * 8) !important;
  }
  .\\!pr-9 {
    padding-right: calc(var(--spacing) * 9) !important;
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
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
  .font-mono {
    font-family: var(--font-mono);
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .text-\\[16px\\] {
    font-size: 16px;
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
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
  .text-nowrap {
    text-wrap: nowrap;
  }
  .break-all {
    word-break: break-all;
  }
  .text-clip {
    text-overflow: clip;
  }
  .text-ellipsis {
    text-overflow: ellipsis;
  }
  .text-\\[\\#f6821f\\] {
    color: #f6821f;
  }
  .text-black {
    color: var(--color-black);
  }
  .text-blue-600 {
    color: var(--color-blue-600);
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
  .text-neutral-700 {
    color: var(--color-neutral-700);
  }
  .text-neutral-900 {
    color: var(--color-neutral-900);
  }
  .text-ob-base-100 {
    color: var(--text-color-ob-base-100);
  }
  .text-ob-base-200 {
    color: var(--text-color-ob-base-200);
  }
  .text-ob-base-300 {
    color: var(--text-color-ob-base-300);
  }
  .text-ob-destructive {
    color: var(--text-color-ob-destructive);
  }
  .text-ob-inverted {
    color: var(--text-color-ob-inverted);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-stone-500 {
    color: var(--color-stone-500);
  }
  .text-stone-900 {
    color: var(--color-stone-900);
  }
  .text-white {
    color: var(--color-white);
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
  .line-through {
    text-decoration-line: line-through;
  }
  .underline {
    text-decoration-line: underline;
  }
  .underline-offset-1 {
    text-underline-offset: 1px;
  }
  .underline-offset-2 {
    text-underline-offset: 2px;
  }
  .underline-offset-3 {
    text-underline-offset: 3px;
  }
  .antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
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
  .shadow-black\\/5 {
    --tw-shadow-color: color-mix(in srgb, #000 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-black) 5%, transparent) var(--tw-shadow-alpha), transparent);
    }
  }
  .ring-offset-white {
    --tw-ring-offset-color: var(--color-white);
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
  .outline-2 {
    outline-style: var(--tw-outline-style);
    outline-width: 2px;
  }
  .outline-red-500 {
    outline-color: var(--color-red-500);
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
  .\\!transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter !important;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function)) !important;
    transition-duration: var(--tw-duration, var(--default-transition-duration)) !important;
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[width\\] {
    transition-property: width;
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
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-bounce {
    --tw-ease: var(--ease-bounce);
    transition-timing-function: var(--ease-bounce);
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
  .\\!outline-none {
    --tw-outline-style: none !important;
    outline-style: none !important;
  }
  .outline-solid {
    --tw-outline-style: solid;
    outline-style: solid;
  }
  .select-all {
    -webkit-user-select: all;
    user-select: all;
  }
  .select-none {
    -webkit-user-select: none;
    user-select: none;
  }
  .\\*\\:w-full {
    :is(& > *) {
      width: 100%;
    }
  }
  .group-hover\\:text-\\[\\#f6821f\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        color: #f6821f;
      }
    }
  }
  .peer-checked\\:border-red-500 {
    &:is(:where(.peer):checked ~ *) {
      border-color: var(--color-red-500);
    }
  }
  .peer-checked\\:border-stone-900 {
    &:is(:where(.peer):checked ~ *) {
      border-color: var(--color-stone-900);
    }
  }
  .peer-checked\\:bg-red-500 {
    &:is(:where(.peer):checked ~ *) {
      background-color: var(--color-red-500);
    }
  }
  .peer-checked\\:bg-stone-900 {
    &:is(:where(.peer):checked ~ *) {
      background-color: var(--color-stone-900);
    }
  }
  .peer-disabled\\:cursor-not-allowed {
    &:is(:where(.peer):disabled ~ *) {
      cursor: not-allowed;
    }
  }
  .peer-disabled\\:opacity-70 {
    &:is(:where(.peer):disabled ~ *) {
      opacity: 70%;
    }
  }
  .placeholder\\:text-ob-base-100 {
    &::placeholder {
      color: var(--text-color-ob-base-100);
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
  .first-of-type\\:\\*\\:first\\:rounded-l-\\[7px\\] {
    &:first-of-type {
      :is(& > *) {
        &:first-child {
          border-top-left-radius: 7px;
          border-bottom-left-radius: 7px;
        }
      }
    }
  }
  .first-of-type\\:\\*\\:first\\:rounded-l-\\[8px\\] {
    &:first-of-type {
      :is(& > *) {
        &:first-child {
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }
      }
    }
  }
  .first-of-type\\:\\*\\:first\\:rounded-l-\\[10px\\] {
    &:first-of-type {
      :is(& > *) {
        &:first-child {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
      }
    }
  }
  .first-of-type\\:\\*\\:first\\:rounded-l-lg {
    &:first-of-type {
      :is(& > *) {
        &:first-child {
          border-top-left-radius: var(--radius-lg);
          border-bottom-left-radius: var(--radius-lg);
        }
      }
    }
  }
  .first-of-type\\:\\*\\:first\\:rounded-l-md {
    &:first-of-type {
      :is(& > *) {
        &:first-child {
          border-top-left-radius: var(--radius-md);
          border-bottom-left-radius: var(--radius-md);
        }
      }
    }
  }
  .first-of-type\\:\\*\\:first\\:rounded-l-sm {
    &:first-of-type {
      :is(& > *) {
        &:first-child {
          border-top-left-radius: var(--radius-sm);
          border-bottom-left-radius: var(--radius-sm);
        }
      }
    }
  }
  .last-of-type\\:\\*\\:first\\:rounded-r-\\[7px\\] {
    &:last-of-type {
      :is(& > *) {
        &:first-child {
          border-top-right-radius: 7px;
          border-bottom-right-radius: 7px;
        }
      }
    }
  }
  .last-of-type\\:\\*\\:first\\:rounded-r-\\[8px\\] {
    &:last-of-type {
      :is(& > *) {
        &:first-child {
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }
      }
    }
  }
  .last-of-type\\:\\*\\:first\\:rounded-r-\\[10px\\] {
    &:last-of-type {
      :is(& > *) {
        &:first-child {
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
    }
  }
  .last-of-type\\:\\*\\:first\\:rounded-r-lg {
    &:last-of-type {
      :is(& > *) {
        &:first-child {
          border-top-right-radius: var(--radius-lg);
          border-bottom-right-radius: var(--radius-lg);
        }
      }
    }
  }
  .last-of-type\\:\\*\\:first\\:rounded-r-md {
    &:last-of-type {
      :is(& > *) {
        &:first-child {
          border-top-right-radius: var(--radius-md);
          border-bottom-right-radius: var(--radius-md);
        }
      }
    }
  }
  .last-of-type\\:\\*\\:first\\:rounded-r-sm {
    &:last-of-type {
      :is(& > *) {
        &:first-child {
          border-top-right-radius: var(--radius-sm);
          border-bottom-right-radius: var(--radius-sm);
        }
      }
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
  .hover\\:\\!border-0 {
    &:hover {
      @media (hover: hover) {
        border-style: var(--tw-border-style) !important;
        border-width: 0px !important;
      }
    }
  }
  .hover\\:border-0 {
    &:hover {
      @media (hover: hover) {
        border-style: var(--tw-border-style);
        border-width: 0px;
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
  .hover\\:border-red-600 {
    &:hover {
      @media (hover: hover) {
        border-color: var(--color-red-600);
      }
    }
  }
  .hover\\:border-stone-300 {
    &:hover {
      @media (hover: hover) {
        border-color: var(--color-stone-300);
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
  .hover\\:text-\\[\\#f6821f\\] {
    &:hover {
      @media (hover: hover) {
        color: #f6821f;
      }
    }
  }
  .hover\\:text-blue-500 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-blue-500);
      }
    }
  }
  .hover\\:text-ob-base-300 {
    &:hover {
      @media (hover: hover) {
        color: var(--text-color-ob-base-300);
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
  .hover\\:\\!shadow-none {
    &:hover {
      @media (hover: hover) {
        --tw-shadow: 0 0 #0000 !important;
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow) !important;
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
  .hover\\:\\!outline-hidden {
    &:hover {
      @media (hover: hover) {
        --tw-outline-style: none !important;
        outline-style: none !important;
        @media (forced-colors: active) {
          outline: 2px solid transparent !important;
          outline-offset: 2px !important;
        }
      }
    }
  }
  .hover\\:\\!outline-offset-4 {
    &:hover {
      @media (hover: hover) {
        outline-offset: 4px !important;
      }
    }
  }
  .hover\\:\\!outline-red-500 {
    &:hover {
      @media (hover: hover) {
        outline-color: var(--color-red-500) !important;
      }
    }
  }
  .hover\\:\\!outline-none {
    &:hover {
      @media (hover: hover) {
        --tw-outline-style: none !important;
        outline-style: none !important;
      }
    }
  }
  .focus\\:z-10 {
    &:focus {
      z-index: 10;
    }
  }
  .focus\\:border-ob-border-active {
    &:focus {
      border-color: var(--color-ob-border-active);
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
  .focus-visible\\:border-ob-focus {
    &:focus-visible {
      border-color: var(--color-ob-focus);
    }
  }
  .focus-visible\\:opacity-100 {
    &:focus-visible {
      opacity: 100%;
    }
  }
  .focus-visible\\:ring-2 {
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-visible\\:ring-stone-950 {
    &:focus-visible {
      --tw-ring-color: var(--color-stone-950);
    }
  }
  .focus-visible\\:inset-ring-\\[0\\.5\\] {
    &:focus-visible {
      --tw-inset-ring-color: 0.5;
    }
  }
  .focus-visible\\:ring-offset-2 {
    &:focus-visible {
      --tw-ring-offset-width: 2px;
      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
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
  .disabled\\:opacity-50 {
    &:disabled {
      opacity: 50%;
    }
  }
  .has-\\[\\:enabled\\]\\:active\\:border-ob-border-active {
    &:has(*:is(:enabled)) {
      &:active {
        border-color: var(--color-ob-border-active);
      }
    }
  }
  .has-\\[\\:focus\\]\\:border-ob-border-active {
    &:has(*:is(:focus)) {
      border-color: var(--color-ob-border-active);
    }
  }
  .md\\:block {
    @media (width >= 48rem) {
      display: block;
    }
  }
  .md\\:flex-col-reverse {
    @media (width >= 48rem) {
      flex-direction: column-reverse;
    }
  }
  .md\\:flex-row {
    @media (width >= 48rem) {
      flex-direction: row;
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
  .lg\\:flex {
    @media (width >= 64rem) {
      display: flex;
    }
  }
  .lg\\:flex-row {
    @media (width >= 64rem) {
      flex-direction: row;
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
  .xl\\:\\!w-\\[400px\\] {
    @media (width >= 80rem) {
      width: 400px !important;
    }
  }
  .xl\\:grid-cols-2 {
    @media (width >= 80rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .xl\\:flex-row {
    @media (width >= 80rem) {
      flex-direction: row;
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
  .dark\\:border-stone-800 {
    &:where(.dark, .dark *) {
      border-color: var(--color-stone-800);
    }
  }
  .dark\\:\\!bg-neutral-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-800) !important;
    }
  }
  .dark\\:\\!bg-neutral-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-900) !important;
    }
  }
  .dark\\:bg-black {
    &:where(.dark, .dark *) {
      background-color: var(--color-black);
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
  .dark\\:\\!text-white {
    &:where(.dark, .dark *) {
      color: var(--color-white) !important;
    }
  }
  .dark\\:text-blue-400 {
    &:where(.dark, .dark *) {
      color: var(--color-blue-400);
    }
  }
  .dark\\:text-neutral-300 {
    &:where(.dark, .dark *) {
      color: var(--color-neutral-300);
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
  .dark\\:text-red-400\\/90 {
    &:where(.dark, .dark *) {
      color: color-mix(in srgb, oklch(70.4% 0.191 22.216) 90%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, var(--color-red-400) 90%, transparent);
      }
    }
  }
  .dark\\:text-stone-50 {
    &:where(.dark, .dark *) {
      color: var(--color-stone-50);
    }
  }
  .dark\\:text-stone-400 {
    &:where(.dark, .dark *) {
      color: var(--color-stone-400);
    }
  }
  .dark\\:text-white {
    &:where(.dark, .dark *) {
      color: var(--color-white);
    }
  }
  .dark\\:ring-offset-stone-950 {
    &:where(.dark, .dark *) {
      --tw-ring-offset-color: var(--color-stone-950);
    }
  }
  .dark\\:peer-checked\\:border-stone-50 {
    &:where(.dark, .dark *) {
      &:is(:where(.peer):checked ~ *) {
        border-color: var(--color-stone-50);
      }
    }
  }
  .dark\\:peer-checked\\:bg-stone-50 {
    &:where(.dark, .dark *) {
      &:is(:where(.peer):checked ~ *) {
        background-color: var(--color-stone-50);
      }
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
  .dark\\:hover\\:border-stone-700 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          border-color: var(--color-stone-700);
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
  .hover\\:dark\\:bg-neutral-800 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark, .dark *) {
          background-color: var(--color-neutral-800);
        }
      }
    }
  }
  .hover\\:dark\\:text-blue-400 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark, .dark *) {
          color: var(--color-blue-400);
        }
      }
    }
  }
  .dark\\:focus-visible\\:ring-stone-50 {
    &:where(.dark, .dark *) {
      &:focus-visible {
        --tw-ring-color: var(--color-stone-50);
      }
    }
  }
  .starting\\:w-0 {
    @starting-style {
      width: calc(var(--spacing) * 0);
    }
  }
  .peer-checked\\:\\[\\&\\>svg\\]\\:opacity-100 {
    &:is(:where(.peer):checked ~ *) {
      &>svg {
        opacity: 100%;
      }
    }
  }
  .\\[\\&\\>svg\\]\\:dark\\:text-stone-900 {
    &>svg {
      &:where(.dark, .dark *) {
        color: var(--color-stone-900);
      }
    }
  }
}
.dark {
  --color-ob-base-100: var(--color-neutral-950);
  --color-ob-base-200: var(--color-neutral-900);
  --color-ob-base-300: var(--color-neutral-850);
  --color-ob-base-400: var(--color-neutral-800);
  --color-ob-base-500: var(--color-neutral-750);
  --color-ob-base-1000: var(--color-neutral-50);
  --color-ob-border: var(--color-neutral-800);
  --color-ob-border-active: var(--color-neutral-700);
  --text-color-ob-base-100: var(--color-neutral-500);
  --text-color-ob-base-200: var(--color-neutral-400);
  --text-color-ob-base-300: var(--color-neutral-50);
  --text-color-ob-destructive: var(--color-red-400);
  --text-color-ob-inverted: var(--color-neutral-900);
  --color-ob-btn-primary-bg: var(--color-neutral-300);
  --color-ob-btn-primary-bg-hover: var(--color-neutral-250);
  --color-ob-btn-primary-border: var(--color-neutral-100);
  --color-ob-btn-primary-border-hover: var(--color-white);
  --color-ob-btn-secondary-bg: var(--color-neutral-900);
  --color-ob-btn-secondary-bg-hover: var(--color-neutral-850);
  --color-ob-btn-secondary-border: var(--color-neutral-800);
  --color-ob-btn-secondary-border-hover: var(--color-neutral-750);
  --color-ob-btn-ghost-bg-hover: var(--color-neutral-850);
  --color-ob-btn-destructive-bg: var(--color-red-800);
  --color-ob-btn-destructive-bg-hover: var(--color-red-750);
  --color-ob-btn-destructive-border: var(--color-red-700);
  --color-ob-btn-destructive-border-hover: var(--color-red-600);
  --color-ob-focus: var(--color-blue-800);
}
.btn {
  &.btn-primary {
    border-color: var(--color-ob-btn-primary-border);
    background-color: var(--color-ob-btn-primary-bg);
    color: var(--text-color-ob-inverted);
    --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    &:where(.interactive, .interactive *) {
      &:not(*:disabled) {
        &:hover {
          @media (hover: hover) {
            border-color: var(--color-ob-btn-primary-border-hover);
          }
        }
      }
      &:not(*:disabled) {
        &:hover {
          @media (hover: hover) {
            background-color: var(--color-ob-btn-primary-bg-hover);
          }
        }
      }
      &:where(.toggle, .toggle *) {
        &:not(*:disabled) {
          border-color: var(--color-ob-btn-primary-border-hover);
        }
        &:not(*:disabled) {
          background-color: var(--color-ob-btn-primary-bg-hover);
        }
      }
    }
  }
  &.btn-secondary {
    border-color: var(--color-ob-btn-secondary-border);
    background-color: var(--color-ob-btn-secondary-bg);
    color: var(--text-color-ob-base-300);
    --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    &:where(.interactive, .interactive *) {
      &:not(*:disabled) {
        &:hover {
          @media (hover: hover) {
            border-color: var(--color-ob-btn-secondary-border-hover);
          }
        }
      }
      &:not(*:disabled) {
        &:hover {
          @media (hover: hover) {
            background-color: var(--color-ob-btn-secondary-bg-hover);
          }
        }
      }
      &:where(.toggle, .toggle *) {
        &:not(*:disabled) {
          border-color: var(--color-ob-btn-secondary-border-hover);
        }
        &:not(*:disabled) {
          background-color: var(--color-ob-btn-secondary-bg-hover);
        }
      }
    }
  }
  &.btn-ghost {
    border-color: transparent;
    background-color: transparent;
    color: var(--text-color-ob-base-300);
    &:where(.interactive, .interactive *) {
      &:not(*:disabled) {
        &:hover {
          @media (hover: hover) {
            background-color: var(--color-ob-btn-ghost-bg-hover);
          }
        }
      }
      &:where(.toggle, .toggle *) {
        &:not(*:disabled) {
          background-color: var(--color-ob-btn-ghost-bg-hover);
        }
      }
    }
  }
  &.btn-destructive {
    border-color: var(--color-ob-btn-destructive-border);
    background-color: var(--color-ob-btn-destructive-bg);
    color: var(--color-white);
    &:where(.interactive, .interactive *) {
      &:not(*:disabled) {
        &:hover {
          @media (hover: hover) {
            border-color: var(--color-ob-btn-destructive-border-hover);
          }
        }
      }
      &:not(*:disabled) {
        &:hover {
          @media (hover: hover) {
            background-color: var(--color-ob-btn-destructive-bg-hover);
          }
        }
      }
      &:where(.toggle, .toggle *) {
        &:not(*:disabled) {
          border-color: var(--color-ob-btn-destructive-border-hover);
        }
        &:not(*:disabled) {
          background-color: var(--color-ob-btn-destructive-bg-hover);
        }
      }
    }
  }
  border-style: var(--tw-border-style);
  border-width: 1px;
  &:where(.interactive, .interactive *) {
    cursor: pointer;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
}
.add-focus {
  --tw-outline-style: none;
  outline-style: none;
  &:focus {
    opacity: 100%;
  }
  &:focus-visible {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  &:focus-visible {
    --tw-ring-color: var(--color-ob-focus);
  }
  :is(& > *) {
    :where(*:focus) & {
      opacity: 100%;
    }
  }
}
.add-disable {
  &:disabled {
    cursor: not-allowed;
  }
  &:disabled {
    color: var(--text-color-ob-base-100);
  }
}
.add-size-sm {
  height: calc(var(--spacing) * 6.5);
  border-radius: var(--radius-lg);
  padding-inline: calc(var(--spacing) * 2);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  &:where(.square, .square *) {
    display: flex;
    width: calc(var(--spacing) * 6.5);
    height: calc(var(--spacing) * 6.5);
    align-items: center;
    justify-content: center;
    padding-inline: calc(var(--spacing) * 0);
  }
  &:where(.circular, .circular *) {
    display: flex;
    width: calc(var(--spacing) * 6.5);
    height: calc(var(--spacing) * 6.5);
    align-items: center;
    justify-content: center;
    border-radius: calc(infinity * 1px);
    padding-inline: calc(var(--spacing) * 0);
  }
}
.add-size-md {
  height: calc(var(--spacing) * 8);
  border-radius: var(--radius-lg);
  padding-inline: calc(var(--spacing) * 2.5);
  font-size: var(--text-base);
  line-height: var(--tw-leading, var(--text-base--line-height));
  &:where(.square, .square *) {
    display: flex;
    width: calc(var(--spacing) * 8);
    height: calc(var(--spacing) * 8);
    align-items: center;
    justify-content: center;
    padding-inline: calc(var(--spacing) * 0);
  }
  &:where(.circular, .circular *) {
    display: flex;
    width: calc(var(--spacing) * 8);
    height: calc(var(--spacing) * 8);
    align-items: center;
    justify-content: center;
    border-radius: calc(infinity * 1px);
    padding-inline: calc(var(--spacing) * 0);
  }
}
.add-size-base {
  height: calc(var(--spacing) * 9);
  border-radius: var(--radius-lg);
  padding-inline: calc(var(--spacing) * 3);
  font-size: var(--text-base);
  line-height: var(--tw-leading, var(--text-base--line-height));
  &:where(.square, .square *) {
    display: flex;
    width: calc(var(--spacing) * 9);
    height: calc(var(--spacing) * 9);
    align-items: center;
    justify-content: center;
    padding-inline: calc(var(--spacing) * 0);
  }
  &:where(.circular, .circular *) {
    display: flex;
    width: calc(var(--spacing) * 9);
    height: calc(var(--spacing) * 9);
    align-items: center;
    justify-content: center;
    border-radius: calc(infinity * 1px);
    padding-inline: calc(var(--spacing) * 0);
  }
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
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
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
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
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
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(W, E, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(a) {
				if (!t.o(e, a)) return Promise.resolve().then(function() {
					var v = new Error("Cannot find module '" + a + "'");
					throw v.code = "MODULE_NOT_FOUND", v
				});
				var u = e[a],
					l = u[0];
				return t.e(u[1]).then(function() {
					return t.t(l, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", W.exports = o
		}
	}
]);

//# debugId=3f09fc93-4c76-5795-862d-ad8abdaeceea