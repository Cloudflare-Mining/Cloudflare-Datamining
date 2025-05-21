! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b139872c-cd8e-54d5-bfb8-a39a960f50af")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				J8: function() {
					return i
				},
				Jd: function() {
					return o
				},
				QY: function() {
					return g
				},
				Qw: function() {
					return s
				},
				ki: function() {
					return m
				},
				wz: function() {
					return D
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/utils/url.ts"),
				a = t("../../../../node_modules/query-string/query-string.js"),
				u = t.n(a),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f;
			const s = () => Object.keys(l.Z).reduce((O, y) => (y.indexOf("cf_beta.") === 0 && l.Z.get(y) === "true" && O.push(y.split(".").slice(1).join(".")), O), []),
				m = () => {
					var O, y, A;
					return ((O = window) === null || O === void 0 || (y = O.bootstrap) === null || y === void 0 || (A = y.data) === null || A === void 0 ? void 0 : A.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((f = window) === null || f === void 0 ? void 0 : f.location) && l.Z) {
				const O = u().parse(window.location.search);
				O.beta_on && l.Z.set(`cf_beta.${O.beta_on}`, !0), O.beta_off && l.Z.set(`cf_beta.${O.beta_off}`, !1)
			}
			const v = {},
				n = O => {
					var y, A, E;
					return Object.prototype.hasOwnProperty.call(v, O) ? v[O] : ((y = window) === null || y === void 0 || (A = y.bootstrap) === null || A === void 0 || (E = A.data) === null || E === void 0 ? void 0 : E.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(b => b === O) ? (v[O] = !0, !0) : (v[O] = !1, !1)
				},
				c = O => l.Z ? l.Z.get(`cf_beta.${O}`) === !0 : !1,
				i = O => c(O) || n(O),
				d = () => !0,
				o = () => {
					var O, y, A;
					return ((O = window) === null || O === void 0 || (y = O.bootstrap) === null || y === void 0 || (A = y.data) === null || A === void 0 ? void 0 : A.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				g = O => {
					const y = (0, e.uF)(O),
						A = (y == null ? void 0 : y.roles) || [];
					return (0, r.qR)(location.pathname) && A.length === 1 && A.some(E => E === "Administrator Read Only")
				},
				I = () => {
					var O, y, A;
					return ((O = window) === null || O === void 0 || (y = O.location) === null || y === void 0 || (A = y.origin) === null || A === void 0 ? void 0 : A.includes("fed.cloudflare.com")) ? "fed" : "global"
				},
				D = () => I() === "fed"
		},
		"../functions/utils/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				b1: function() {
					return e
				}
			});
			const e = "CF_dash_version",
				r = "cf_fv_preview",
				a = "cf_pv",
				u = "current",
				l = "hash",
				f = "deploymentPreview",
				s = "fragmentPreview",
				m = c => c === u ? v() : n(),
				v = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				n = (c = 72) => {
					const i = 36e5;
					return new Date(Date.now() + c * i)
				}
		},
		"../init.ts": function(U, _, t) {
			"use strict";
			t.r(_);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				r = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				a = t("../libs/init/initGlobal.ts"),
				u = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				l = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function f(R) {
				for (var $ = 1; $ < arguments.length; $++) {
					var J = arguments[$] != null ? Object(arguments[$]) : {},
						ae = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(J).filter(function(me) {
						return Object.getOwnPropertyDescriptor(J, me).enumerable
					})), ae.forEach(function(me) {
						s(R, me, J[me])
					})
				}
				return R
			}

			function s(R, $, J) {
				return $ = m($), $ in R ? Object.defineProperty(R, $, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[$] = J, R
			}

			function m(R) {
				var $ = v(R, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function v(R, $) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ae = J.call(R, $ || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(R)
			}
			const n = R => {
				const $ = R && R.headers || {},
					J = new Headers($);
				return J.append("X-Cross-Site-Security", "dash"), f({}, R, {
					headers: J
				})
			};
			(0, l.register)({
				request: (R, $) => {
					try {
						return new URL(R), R === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", $] : [R, $]
					} catch {
						return [R, n($)]
					}
				}
			});
			var c = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				i = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				d = t("../react/app/providers/storeContainer.js");
			let o = "";
			const g = 61;

			function I(R) {
				const $ = R.substr(1);
				if ($ && o !== $) {
					const J = document.getElementById($);
					if (J) {
						const ae = J.getBoundingClientRect().top;
						if (ae > 0) {
							const me = ae - g;
							document.documentElement.scrollTop = me
						}
					}
				}
				o = $
			}

			function D(R) {
				R.listen($ => I($.hash))
			}
			var O = t("../../../../node_modules/cookie/index.js"),
				y = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				A = t("../functions/utils/constants.ts");
			const E = R => {
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
				b = (R, $ = !1) => {
					var J;
					const ae = E(R),
						me = `
  <style type="text/css">
    #loading-state {
      display: flex;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
    }
    .dark-mode body {
      background-color: #0a0a0a;
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
    <h1 id="error-title">${ae.title}</h1>
    <p id="error-description">${ae.description}</p>
  </div>
  `,
						we = $ ? `
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
					return me + we
				},
				S = R => {
					var $;
					const J = document.getElementById(R);
					!J || ($ = J.parentNode) === null || $ === void 0 || $.removeChild(J)
				};

			function k() {
				const R = document.getElementById("loading-state");
				R == null || R.classList.add("hide"), R == null || R.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(S)
				})
			}

			function N(R) {
				var $;
				const J = document.getElementById("loading-state"),
					ae = !!(($ = O.parse(document.cookie)) === null || $ === void 0 ? void 0 : $[A.b1]);
				!J || (J.innerHTML = b(R == null ? void 0 : R.code, ae))
			}
			var w = t("../utils/initStyles.ts"),
				C = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				P = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				L = t("../react/common/selectors/languagePreferenceSelector.ts"),
				j = t("../flags.ts"),
				X = t("../utils/getDashVersion.ts");
			const oe = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				pe = !0,
				ce = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				K = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var G = t("../utils/sentry/lastSentEventId.ts"),
				W = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				x = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const h = R => {
				const $ = async J => {
					var ae, me;
					const we = {
						envelope: J.body,
						url: R.url,
						isPreviewDeploy: (ae = window) === null || ae === void 0 || (me = ae.build) === null || me === void 0 ? void 0 : me.isPreviewDeploy,
						release: (0, X.t)()
					};
					try {
						const Ae = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(we)
						});
						return {
							statusCode: Ae.status,
							headers: {
								"x-sentry-rate-limits": Ae.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": Ae.headers.get("Retry-After")
							}
						}
					} catch (Ae) {
						return console.log(Ae), (0, x.$2)(Ae)
					}
				};
				return W.q(R, $)
			};
			var M = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				F = t("../../../../node_modules/history/esm/history.js"),
				ee = (0, F.lX)(),
				ne = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Y = t("../react/utils/url.ts");
			const B = (0, ne.Rf)();
			let z;

			function te(R) {
				return le(R, "react-router-v5")
			}

			function le(R, $) {
				return (J, ae = !0, me = !0) => {
					ae && B && B.location && (z = J({
						name: (0, Y.Fl)(B.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": $
						}
					})), me && R.listen && R.listen((we, Ae) => {
						if (Ae && (Ae === "PUSH" || Ae === "POP")) {
							z && z.finish();
							const Re = {
								"routing.instrumentation": $
							};
							z = J({
								name: (0, Y.Fl)(we.pathname),
								op: "navigation",
								tags: Re
							})
						}
					})
				}
			}
			var ue = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				ge = t.n(ue),
				ye = t("../../../common/intl/intl-core/src/errors.ts"),
				Te = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				Oe = t("../react/common/middleware/sparrow/errors.ts");

			function ve(R, $, J) {
				return $ = De($), $ in R ? Object.defineProperty(R, $, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[$] = J, R
			}

			function De(R) {
				var $ = Me(R, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function Me(R, $) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ae = J.call(R, $ || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(R)
			}
			class Ne {
				constructor() {
					ve(this, "name", Ne.id)
				}
				setupOnce() {
					t.g.console && (0, Te.hl)(t.g.console, "error", $ => (...J) => {
						const ae = J.find(me => me instanceof Error);
						if (oe && ae) {
							let me, we = !0;
							if (ae instanceof Oe.ez) {
								const Ae = ae instanceof Oe.oV ? ae.invalidProperties : void 0;
								me = {
									tags: {
										"sparrow.eventName": ae.eventName
									},
									extra: {
										sparrow: {
											eventName: ae.eventName,
											invalidProperties: Ae
										}
									},
									fingerprint: [ae.name ? ae.name : "SparrowValidationError"]
								}, we = !1
							} else if (ae instanceof ue.SparrowIdCookieError) me = {
								extra: {
									sparrowIdCookie: ae.cookie
								},
								fingerprint: [ae.name ? ae.name : "SparrowIdCookieError"]
							};
							else if (ae.name === "ChunkLoadError") {
								me = {
									fingerprint: [ae.name]
								};
								try {
									me.tags = {
										chunkId: ae.message.split(" ")[2],
										chunkUrl: ae.request
									}
								} catch {}
							} else ae instanceof ye.YB && (me = {
								fingerprint: ["TranslatorError", ae.translationKey]
							});
							we && c.Tb(ae, me)
						}
						typeof $ == "function" && $.apply(t.g.console, J)
					})
				}
			}
			ve(Ne, "id", "ConsoleErrorIntegration");
			var pt = null;
			const Qe = () => {
					if (oe && pe) {
						var R, $, J, ae, me, we, Ae, Re, tt, Fe;
						let Ut = "production";
						((R = window) === null || R === void 0 || ($ = R.build) === null || $ === void 0 ? void 0 : $.isPreviewDeploy) && (Ut += "-preview"), P.S({
							dsn: oe,
							release: (0, X.t)(),
							environment: Ut,
							ignoreErrors: K,
							allowUrls: ce,
							autoSessionTracking: !1,
							integrations: dt => [...dt.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new Ne, new M.jK.BrowserTracing({
								routingInstrumentation: te(ee)
							})],
							tracesSampleRate: 0,
							transport: h,
							beforeSend: dt => (G.e.setEventId(dt.event_id), dt)
						});
						const At = (0, d.bh)().getState();
						c.rJ({
							LOCAL_STORAGE_FLAGS: (0, j.Qw)(),
							USER_BETA_FLAGS: (0, j.ki)(),
							meta: {
								connection: {
									type: (J = window) === null || J === void 0 || (ae = J.navigator) === null || ae === void 0 || (me = ae.connection) === null || me === void 0 ? void 0 : me.effectiveType,
									bandwidth: (we = window) === null || we === void 0 || (Ae = we.navigator) === null || Ae === void 0 || (Re = Ae.connection) === null || Re === void 0 ? void 0 : Re.downlink
								},
								languagePreference: (0, L.r)(At),
								isPreviewDeploy: (tt = window) === null || tt === void 0 || (Fe = tt.build) === null || Fe === void 0 ? void 0 : Fe.isPreviewDeploy
							},
							utilGates: (0, C.T2)(At)
						}), window.addEventListener("unhandledrejection", function(dt) {})
					}
				},
				V = R => {
					R ? c.av({
						id: R
					}) : c.av(null)
				};
			var fe = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Ye = () => {
					let R;
					try {
						R = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), R = window.location.search
					}
					if (!R.includes("remote[")) return;
					const $ = new URLSearchParams(R),
						J = {};
					for (let [ae, me] of $) ae.includes("remote") && (J[ae.replace(/remote\[|\]/g, "")] = me);
					fe.Z.set("mfe-remotes", JSON.stringify(J))
				},
				Be = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				nt = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const rt = "ANON_USER_ID";

			function ot() {
				var R, $, J, ae;
				let me = (R = t.g) === null || R === void 0 || ($ = R.bootstrap) === null || $ === void 0 || (J = $.data) === null || J === void 0 || (ae = J.user) === null || ae === void 0 ? void 0 : ae.id;
				if (!me) {
					let we = fe.Z.get(rt);
					if (!we) {
						let Ae = (0, nt.Z)();
						fe.Z.set(rt, Ae), we = Ae
					}
					return we
				}
				return me
			}
			async function ct() {
				const R = (0, d.bh)();
				R.dispatch((0, Be.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await R.dispatch((0, C.UL)({
					userId: ot()
				}))
			}
			class H extends Error {
				constructor($, J) {
					super(J);
					this.name = `${$} ${J}`
				}
			}
			const de = () => {
					document.cookie.split(";").forEach($ => {
						const [J] = $.trim().split("=");
						document.cookie = `${J}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				be = async () => {
					let R = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!R.ok) throw R.headers.get("content-type") === "text/html" && (await R.text()).toLowerCase().includes("cookie too large") && (c.$e(function(me) {
						me.setTag("init", "cookieTooLarge"), c.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), de(), window.location.reload()), new H("Bootstrap API Failure", R == null ? void 0 : R.status);
					return (await R.json()).result.data
				};
			var Ie = t("webpack/sharing/consume/default/react/react"),
				he = t.n(Ie),
				xe = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				We = t("webpack/sharing/consume/default/react-dom/react-dom"),
				at = t("webpack/sharing/consume/default/react-redux/react-redux"),
				Xe = t("../../../../node_modules/swr/core/dist/index.mjs"),
				mt = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				Ct = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				ft = t("../react/shims/focus-visible.js"),
				vt = t("../react/app/components/DeepLink/index.ts"),
				Ue = t("../../../../node_modules/prop-types/index.js"),
				ze = t.n(Ue),
				qe = t("../react/utils/translator.tsx"),
				lt = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				Pe = t("../../../dash/intl/intl-translations/src/index.ts"),
				Z = t("../../../../node_modules/query-string/query-string.js"),
				se = t.n(Z),
				Ee = t("../react/common/actions/userActions.ts"),
				Ce = t("../react/common/selectors/userSelectors.ts"),
				Le = t("../react/utils/i18n.ts"),
				$e = t("../react/utils/bootstrap.ts");

			function it(R) {
				for (var $ = 1; $ < arguments.length; $++) {
					var J = arguments[$] != null ? Object(arguments[$]) : {},
						ae = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(J).filter(function(me) {
						return Object.getOwnPropertyDescriptor(J, me).enumerable
					})), ae.forEach(function(me) {
						st(R, me, J[me])
					})
				}
				return R
			}

			function st(R, $, J) {
				return $ = Dt($), $ in R ? Object.defineProperty(R, $, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[$] = J, R
			}

			function Dt(R) {
				var $ = _t(R, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function _t(R, $) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ae = J.call(R, $ || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(R)
			}
			let Ze = se().parse(location.search);
			const Tt = R => {
					const $ = (0, $e.$8)() ? [(0, Pe.Fy)(Pe.if.changes), (0, Pe.Fy)(Pe.if.common), (0, Pe.Fy)(Pe.if.navigation), (0, Pe.Fy)(Pe.if.overview), (0, Pe.Fy)(Pe.if.onboarding), (0, Pe.Fy)(Pe.if.invite), (0, Pe.Fy)(Pe.if.login), (0, Pe.Fy)(Pe.if.dns), (0, Pe.Fy)(Pe.n4.ssl_tls), (0, Pe.Fy)(Pe.if.message_inbox), (0, Pe.Fy)(Pe.if.welcome)] : [(0, Pe.Fy)(Pe.if.common), (0, Pe.Fy)(Pe.if.invite), (0, Pe.Fy)(Pe.if.login), (0, Pe.Fy)(Pe.if.onboarding)];
					Ze.lang ? Pt(R) : fe.Z.get(Le.th) && Ot(R, (0, Le.Kd)());
					const J = async ae => (await Promise.all($.map(we => we(ae)))).reduce((we, Ae) => it({}, we, Ae), {});
					return he().createElement(lt.LocaleContext.Provider, {
						value: R.languagePreference
					}, he().createElement(lt.I18nProvider, {
						translator: qe.Vb,
						locale: R.languagePreference
					}, he().createElement(lt.I18nLoader, {
						loadPhrases: J
					}, R.children)))
				},
				Pt = async R => {
					let $ = Ze.lang.substring(0, Ze.lang.length - 2) + Ze.lang.substring(Ze.lang.length - 2, Ze.lang.length).toUpperCase();
					if (!(0, L.v)($)) {
						console.warn(`${$} is not a supported locale.`), delete Ze.lang, R.history.replace({
							search: se().stringify(Ze)
						});
						return
					}(0, Le.i_)($), delete Ze.lang, Ot(R, $), R.isAuthenticated || R.history.replace({
						search: se().stringify(Ze)
					})
				}, Ot = async (R, $) => {
					if (R.isAuthenticated) try {
						await R.setUserCommPreferences({
							"language-locale": $
						}, {
							hideErrorAlert: !0
						}), fe.Z.remove(Le.th), R.history.replace({
							search: se().stringify(Ze)
						})
					} catch (J) {
						fe.Z.set(Le.th, !0), console.error(J)
					} else fe.Z.set(Le.th, !0)
				}, Lt = R => {
					const $ = (0, Ce.PR)(R);
					return {
						isAuthenticated: !!($ && $.id),
						languagePreference: (0, Le.Kd)() || (0, L.r)(R)
					}
				}, St = {
					setUserCommPreferences: Ee.V_
				};
			var Et = (0, xe.withRouter)((0, at.connect)(Lt, St)(Tt));
			Tt.propTypes = {
				history: ze().object,
				languagePreference: ze().string.isRequired,
				children: ze().node.isRequired,
				isAuthenticated: ze().bool,
				setUserCommPreferences: ze().func.isRequired
			};
			var It = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				yt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let ht;
			const kt = ({
				selectorPrefix: R = "c_"
			} = {}) => (ht || (ht = (0, yt.Z)({
				dev: !1,
				selectorPrefix: R
			})), ht);
			var $t = t("../react/common/out.css"),
				Mt = t("../react/common/components/ModalManager.tsx"),
				gt = t("../react/app/components/ErrorBoundary.tsx"),
				Nt = t("../react/common/actions/notificationsActions.ts");
			const ie = (t.g.bootstrap || {}).data || {};
			class re extends he().Component {
				componentDidMount() {
					ie.messages && this.dispatchNotificationActions(ie.messages)
				}
				dispatchNotificationActions($) {
					$.forEach(J => {
						const {
							type: ae,
							message: me,
							persist: we
						} = J;
						["success", "info", "warn", "error"].includes(ae) && this.props.notifyAdd(ae, (0, qe.ZP)(me), {
							persist: !!we
						})
					})
				}
				render() {
					return null
				}
			}
			var T = (0, xe.withRouter)((0, at.connect)(null, {
				notifyAdd: Nt.add
			})(re));
			re.propTypes = {
				notifyAdd: ze().func.isRequired
			};
			var Q = t("../react/app/redux/index.ts");

			function _e() {
				var R;
				const $ = (0, Q.p4)(Ce.PR),
					J = ($ == null || (R = $.email) === null || R === void 0 ? void 0 : R.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ae = (0, Be.Yc)();
				(0, Ie.useEffect)(() => {
					ae({
						userType: J
					})
				}, [J, ae])
			}
			var ke = t("../react/common/selectors/entitlementsSelectors.ts"),
				je = t("../react/common/selectors/accountSelectors.ts");
			const Ke = ["accountId", "is_ent"];

			function Ge() {
				const R = (0, Be.f7)(),
					$ = (0, xe.useHistory)(),
					J = (0, Y.uW)($.location.pathname),
					ae = (0, Be.Yc)(),
					me = (0, Be.O$)(),
					we = (0, Q.p4)(ke.u1),
					Ae = !we.isRequesting && !!we.data,
					Re = (0, Q.p4)(ke.p1),
					tt = (0, Q.p4)(je.Xu),
					Fe = (0, Q.p4)(je.uF),
					Ut = !tt.isRequesting && !!tt.data;
				(0, Ie.useEffect)(() => {
					if (J && Ut && Fe && Ae && J === Fe.account.id) {
						var At, dt, Vt;
						ae({
							accountId: Fe.account.id,
							is_ent: Re,
							is_free_account: !Re && !(Fe == null || (At = Fe.account.meta) === null || At === void 0 ? void 0 : At.has_business_zones) && !(Fe == null || (dt = Fe.account.meta) === null || dt === void 0 ? void 0 : dt.has_pro_zones) && !(Fe == null || (Vt = Fe.account.meta) === null || Vt === void 0 ? void 0 : Vt.has_enterprise_zones)
						})
					} else(!J || J in R && R.accountId !== J) && me(Ke)
				}, [Ut, Fe, ae, me, Ae, Re, J, R])
			}
			var et = t("../react/common/selectors/zoneSelectors.ts");

			function ut() {
				const R = (0, Q.p4)(et.nA),
					$ = (0, Be.Yc)();
				(0, Ie.useEffect)(() => {
					var J;
					$({
						zone_id: R == null ? void 0 : R.id,
						zone_plan: R == null || (J = R.plan) === null || J === void 0 ? void 0 : J.legacy_id
					})
				}, [R, $])
			}
			const Je = () => (_e(), Ge(), ut(), null);
			var Ve = t("../react/app/components/Persistence/index.tsx"),
				Rt = t("../node_modules/@cloudflare/elements/es/index.js"),
				xt = t("../react/app/components/LoadingSuspense.tsx");
			const Bt = he().lazy(() => Promise.all([t.e(16691), t.e(46812), t.e(12174), t.e(1091), t.e(55554), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(91018), t.e(83276), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var He = () => he().createElement(xt.Z, null, he().createElement(Bt, null));
			const Zt = () => (Ie.useEffect(() => k, []), null);
			var Wt = t("../../../../node_modules/moment/moment.js"),
				Gt = t.n(Wt);
			const en = R => {
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
				tn = () => {
					const R = (0, Q.p4)(L.r);
					(0, Ie.useEffect)(() => {
						const $ = en(R);
						$ !== Gt().locale() && Gt().locale($), document.documentElement.lang = R
					}, [R])
				},
				nn = () => {
					(0, Ie.useEffect)(() => {
						async function R() {
							var $, J;
							let ae;
							if ((($ = window) === null || $ === void 0 || (J = $.build) === null || J === void 0 ? void 0 : J.isPreviewDeploy) && (ae = "cookie"), !!ae) try {
								const me = document.head.querySelector("link[rel=icon]");
								me && (me.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${ae}.ico`)).default)
							} catch {}
						}
						R()
					}, [])
				};
			var rn = t("../react/common/constants/constants.ts");
			const on = () => {
					var R;
					const $ = (0, xe.useLocation)(),
						[J, ae] = (0, Ie.useState)(((R = window) === null || R === void 0 ? void 0 : R.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Ie.useEffect)(() => {
						const me = se().parse($.search);
						if (me.pt && fe.Z.set(rn.sJ, me.pt), me == null ? void 0 : me.devPanel) {
							var we, Ae;
							(we = window) === null || we === void 0 || (Ae = we.localStorage) === null || Ae === void 0 || Ae.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ae(!0)
						}
					}, [$.search]), {
						devPanelEnabled: J
					}
				},
				an = ({
					id: R,
					customDataLayer: $ = [],
					dataLayerName: J = "dataLayer"
				}) => {
					const ae = `<iframe src="https://www.googletagmanager.com/ns.html?id=${R}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						me = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${J}', '${R}')`,
						we = `
    window.${J} = window.${J} || [];
    window.${J}.push(${JSON.stringify($)})
  `;
					return {
						iframe: ae,
						script: me,
						dataLayerHTML: we
					}
				},
				sn = R => {
					const $ = document.createElement("script");
					return $.innerHTML = R, $.async = !0, $
				},
				cn = R => {
					const $ = document.createElement("noscript");
					return $.innerHTML = R, $
				},
				Ht = R => {
					const $ = document.createElement("script");
					return $.innerHTML = R, $
				},
				Dn = ({
					dataLayer: R,
					dataLayerName: $
				}) => {
					if (window[$]) return window[$].push(R);
					const J = `
      window.${$} = window.${$} || [];
      window.${$}.push(${JSON.stringify(R)})`,
						ae = Ht(J);
					document.head.insertBefore(ae, document.head.childNodes[0])
				},
				ln = ({
					containerId: R,
					customDataLayer: $,
					gtmFeatureFlag: J = !0
				}) => {
					(0, Ie.useEffect)(() => {
						(() => {
							if (!J) return null;
							const {
								iframe: me,
								script: we,
								dataLayerHTML: Ae
							} = an({
								id: R,
								customDataLayer: $
							});
							document.head.insertBefore(Ht(Ae), document.head.childNodes[0]), document.head.insertBefore(sn(we), document.head.childNodes[0]), document.body.insertBefore(cn(me), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const un = ({
				isDev: R,
				gtmFeatureFlag: $
			}) => {
				(0, Ie.useEffect)(() => {
					(() => {
						if (!$) return null;
						let ae;
						R ? ae = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : ae = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const me = document.createElement("script");
						me.async = !0, me.src = ae, document.head.insertBefore(me, document.head.childNodes[0])
					})()
				}, [])
			};
			var dn = t("../react/utils/useDomainConnectRedirect.ts");
			const pn = "GTM-NDGPDFZ",
				gn = he().lazy(() => Promise.all([t.e(16691), t.e(46812), t.e(12174), t.e(1091), t.e(55554), t.e(51436), t.e(3292), t.e(47386), t.e(70618), t.e(26122), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(91018), t.e(83276), t.e(13862), t.e(52215), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				mn = he().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(1091), t.e(3292), t.e(91018), t.e(69088), t.e(13862), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var fn = ({
					userIsAuthed: R
				}) => {
					tn(), nn(), (0, dn.y)();
					const {
						devPanelEnabled: $
					} = on();
					return ln({
						containerId: pn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), un({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), he().createElement(Ie.Suspense, {
						fallback: he().createElement(Zt, null)
					}, he().createElement(xe.Switch, null, !R && !0 && he().createElement(xe.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, he().createElement(mn, null)), he().createElement(xe.Route, {
						render: () => he().createElement(Rt.ZC, {
							minHeight: "100vh"
						}, he().createElement(gn, null))
					})), $ && he().createElement(He, null))
				},
				zt = t("../../../../node_modules/yup/es/index.js"),
				vn = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => zt.Z_().email((0, qe.ZP)("common.validation.email")).required((0, qe.ZP)("common.validation.email")),
				cfPassword: () => zt.Z_().required((0, qe.ZP)("common.validation.required"))
			};
			(0, vn.Yd)(Qt).forEach(R => {
				zt.kM(zt.Z_, R, Qt[R])
			});
			var _n = t("../react/common/utils/startViewTransition.ts");
			const Xt = he().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function En() {
				const [R, $] = (0, Ie.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, Ie.useEffect)(() => {
					const J = window.matchMedia("(prefers-color-scheme: dark)"),
						ae = me => {
							$(me.matches ? "dark" : "light")
						};
					return J.addEventListener("change", ae), () => {
						J.removeEventListener("change", ae)
					}
				}, []), R
			}
			const yn = () => {
					const R = (0, $e.$8)(),
						[$, J] = (0, Ie.useState)(R ? Xt : he().Fragment),
						ae = En(),
						[me, we] = (0, Ie.useState)((0, y.Yc)());
					(0, Ie.useEffect)(() => {
						(0, y.fF)(() => we((0, y.Yc)()))
					}, []);
					const Ae = Re => {
						we(Re), (0, _n.o)(() => {
							(0, y.C8)(Re)
						}), document.cookie = `dark-mode=${Re};Path=/;Max-Age=31536000`, Re === "dark" || Re === "on" || Re === "system" && ae === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
					};
					return (0, Ie.useEffect)(() => {
						J(R ? Xt : he().Fragment)
					}, [R]), (0, Ie.useEffect)(() => {
						const Re = () => Ae(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Re), () => {
							window.removeEventListener("storage", Re)
						}
					}, []), he().createElement(Ie.Suspense, {
						fallback: null
					}, he().createElement(at.Provider, {
						store: (0, d.bh)()
					}, he().createElement(xe.Router, {
						history: ee
					}, he().createElement($, null, he().createElement(It.Z, {
						renderer: kt()
					}, he().createElement(Et, null, he().createElement(gt.S, {
						sentryTag: "Root"
					}, he().createElement(Xe.J$, {
						value: {
							fetcher: Re => fetch(Re).then(tt => tt.json())
						}
					}, he().createElement(Je, null), he().createElement(T, null), he().createElement(Ve.Z_, {
						onDarkModeChangeCb: Ae
					}, he().createElement(vt.ZP, null, he().createElement(fn, {
						userIsAuthed: R
					}))), he().createElement(Mt.ZP, null), he().createElement(mt.F0, null)))))))))
				},
				hn = () => {
					(0, We.render)(he().createElement(yn, null), document.getElementById("react-app"))
				};
			var bt = t("../utils/initSparrow.ts"),
				jt = t("../utils/zaraz.ts");
			const bn = () => {
					const R = (0, Ce.PR)((0, d.bh)().getState());
					Cn(), (0, bt.Ug)(), (0, jt.bM)(), (R == null ? void 0 : R.id) && ge().setUserId(R == null ? void 0 : R.id), (0, bt.yV)(), !(0, bt.Wi)() && (0, bt.IM)(), R ? (0, jt.yn)(R) : (0, jt.Ro)()
				},
				Cn = () => {
					var R, $;
					(R = window) === null || R === void 0 || ($ = R.OneTrust) === null || $ === void 0 || $.OnConsentChanged(() => {
						const J = (0, Ce.PR)((0, d.bh)().getState());
						(0, bt.Wi)() ? (ge().setEnabled(!0), (J == null ? void 0 : J.id) ? (ge().setUserId(J.id), (0, jt.yn)(J)) : (0, jt.Ro)(), (0, bt.yV)()) : (ge().setEnabled(!1), (0, bt.IM)())
					})
				};

			function Tn(R) {
				for (var $ = 1; $ < arguments.length; $++) {
					var J = arguments[$] != null ? Object(arguments[$]) : {},
						ae = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(J).filter(function(me) {
						return Object.getOwnPropertyDescriptor(J, me).enumerable
					})), ae.forEach(function(me) {
						On(R, me, J[me])
					})
				}
				return R
			}

			function On(R, $, J) {
				return $ = In($), $ in R ? Object.defineProperty(R, $, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[$] = J, R
			}

			function In(R) {
				var $ = wn(R, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function wn(R, $) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ae = J.call(R, $ || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(R)
			}
			const An = "init",
				Jt = (R, $) => {
					c.$e(function(J) {
						J.setTag(An, $), c.Tb(R)
					}), N(R)
				},
				Kt = async (R, $) => {
					try {
						return await R(), !0
					} catch (J) {
						return Jt(J, $), !1
					}
				};
			(async () => {
				try {
					var R, $, J;
					t.g.build = Tn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "1e73b83a82ee262f77d90c481dde934455f6fdd2",
						dashVersion: "33396405",
						env: "production",
						builtAt: 1747823676596,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, X.p)()
					}), Qe();
					const ae = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => D(ee),
						tag: "hashScroll"
					}, {
						fn: w.Z,
						tag: "styles"
					}, {
						fn: Ye,
						tag: "mfePreviewData"
					}];
					for (const tt of ae)
						if (!await Kt(tt.fn, tt.tag)) return;
					let me;
					if (!await Kt(async () => {
							me = await be()
						}, "bootstrap")) return;
					const we = (0, d.bh)(),
						Ae = ((R = me) === null || R === void 0 ? void 0 : R.data) || {};
					we.dispatch((0, i.mW)("user", Ae == null ? void 0 : Ae.user));
					const Re = ($ = me) === null || $ === void 0 || (J = $.data) === null || J === void 0 ? void 0 : J.user;
					return t.g.bootstrap = me, Re && Re.id && V(Re.id), !await Kt(ct, "gates") || !await Kt(bn, "tracking") ? void 0 : hn()
				} catch (ae) {
					Jt(ae, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(U, _, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/userSelectors.ts"),
				l = t("../react/common/selectors/zoneSelectors.ts"),
				f = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/common/utils/isGuards.ts"),
				m = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				v = t.n(m);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(d) {
					for (var o = 1; o < arguments.length; o++) {
						var g = arguments[o];
						for (var I in g) Object.prototype.hasOwnProperty.call(g, I) && (d[I] = g[I])
					}
					return d
				}, n.apply(this, arguments)
			}
			const c = d => {
				function o(g) {
					const I = (0, a.UM)(),
						D = (0, m.useHistory)(),
						O = (0, m.useLocation)(),
						y = (0, m.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						A = (0, a.p4)(u.PR) || null,
						E = (0, a.p4)(l.nA) || null,
						b = (0, a.p4)(f.uF),
						S = b ? b.account : null;
					if (!y) return null;
					const {
						accountId: k,
						app: N,
						tab: w
					} = y.params, C = y.params.zoneName && ((0, s.v5)(y.params.zoneName) || y.params.zoneName.indexOf(".") > 0) ? y.params.zoneName : void 0;
					return r().createElement(d, n({
						dispatch: I,
						history: D,
						location: O,
						match: y,
						user: A,
						membership: k ? b : null,
						account: k ? S : null,
						accountId: k || null,
						zone: C ? E : null,
						zoneName: C || null,
						app: C ? N : null,
						tab: C ? w : null
					}, g))
				}
				return o.displayName = `withEntities(${i(d)})`, o
			};

			function i(d) {
				return d.displayName || d.name || "Component"
			}
			_.Z = c
		},
		"../react/app/components/AccountHome/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				$$: function() {
					return E
				},
				CK: function() {
					return N
				},
				KV: function() {
					return S
				},
				OX: function() {
					return k
				},
				QV: function() {
					return A
				},
				Yt: function() {
					return O
				},
				bA: function() {
					return y
				},
				fu: function() {
					return C
				},
				gX: function() {
					return g
				},
				hh: function() {
					return w
				},
				o1: function() {
					return b
				},
				tw: function() {
					return I
				},
				xD: function() {
					return D
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../react/utils/url.ts");
			const u = "projects table click",
				l = "click create application",
				f = "account home dev plat - product card click",
				s = "account home dev plat - empty state CTA click",
				m = "account home dev plat - view all projects click",
				v = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				c = "account home zero trust - analytics link click",
				i = "account home zero trust - product card click",
				d = "account home zero trust - plan pill click",
				o = "account home zero trust - plan fallback link click",
				g = {
					SPARROW_PROJECTS_TABLE_CLICK: u,
					SPARROW_CREATE_PROJECT_CLICK: l,
					SPARROW_PRODUCT_CARD_CLICK: f,
					SPARROW_EMPTY_STATE_CTA_CLICK: s,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: m,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: v,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: c,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: i,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: d,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: o
				},
				I = P => {
					r().sendEvent(u, {
						component: P
					})
				},
				D = P => {
					r().sendEvent(u, {
						component: "menu",
						subcomponent: P
					})
				},
				O = () => {
					r().sendEvent(l, {
						category: "Projects Table"
					})
				},
				y = ({
					category: P,
					product: L
				}) => {
					r().sendEvent(f, {
						category: P,
						product: L
					})
				},
				A = () => {
					r().sendEvent(s)
				},
				E = () => {
					r().sendEvent(m)
				},
				b = P => {
					r().sendEvent(n, {
						category: P
					})
				},
				S = ({
					category: P,
					href: L
				}) => {
					r().sendEvent(v, {
						category: P,
						href: (0, a.cm)(L)
					})
				},
				k = ({
					category: P,
					href: L
				}) => {
					r().sendEvent(c, {
						category: P,
						href: (0, a.cm)(L)
					})
				},
				N = ({
					category: P,
					product: L,
					href: j
				}) => {
					r().sendEvent(i, {
						category: P,
						product: L,
						href: (0, a.cm)(j)
					})
				},
				w = ({
					plan: P
				}) => {
					r().sendEvent(d, {
						plan: P
					})
				},
				C = () => {
					r().sendEvent(o)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				BQ: function() {
					return m
				},
				Bh: function() {
					return f
				},
				CM: function() {
					return v
				},
				MF: function() {
					return r
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
					return c
				},
				r4: function() {
					return u
				},
				zq: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js");
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
				a = (0, e.R)(r.ADD_SITE, d => ({
					payload: d
				})),
				u = (0, e.R)(r.RESOLVING_START),
				l = (0, e.R)(r.RESOLVING_COMPLETE),
				f = (0, e.R)(r.SELECT_ZONE, d => ({
					payload: d
				})),
				s = (0, e.R)(r.SELECT_ACCOUNT, d => ({
					payload: d
				})),
				m = (0, e.R)(r.SELECT_PAGES_PROJECT, d => ({
					payload: d
				})),
				v = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, d => ({
					payload: d
				})),
				n = (0, e.R)(r.SET_FILTERED_ACCOUNT_IDS, d => ({
					accountIds: d
				})),
				c = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				i = (0, e.R)(r.SELECT_WORKER, d => ({
					payload: d
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				BV: function() {
					return e
				},
				Dz: function() {
					return v
				},
				Fj: function() {
					return u
				},
				Kt: function() {
					return f
				},
				O5: function() {
					return l
				},
				Tc: function() {
					return r
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
				r = "_gl",
				a = "freeTrial",
				u = "deepLinkQueryParams",
				l = "resolvedDeepLinkQueryParams",
				f = "add",
				s = "multiSkuProducts",
				m = "/:account/billing/checkout",
				v = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				ZP: function() {
					return w
				},
				U: function() {
					return N.U
				},
				dd: function() {
					return N.dd
				},
				bk: function() {
					return f.bk
				},
				Bh: function() {
					return f.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t("../react/app/redux/index.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../react/app/components/DeepLink/utils.ts"),
				l = t("../react/utils/bootstrap.ts"),
				f = t("../react/app/components/DeepLink/actions.ts"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = t.n(s);

			function v(C) {
				for (var P = 1; P < arguments.length; P++) {
					var L = arguments[P] != null ? Object(arguments[P]) : {},
						j = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(L).filter(function(X) {
						return Object.getOwnPropertyDescriptor(L, X).enumerable
					})), j.forEach(function(X) {
						n(C, X, L[X])
					})
				}
				return C
			}

			function n(C, P, L) {
				return P = c(P), P in C ? Object.defineProperty(C, P, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[P] = L, C
			}

			function c(C) {
				var P = i(C, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function i(C, P) {
				if (typeof C != "object" || C === null) return C;
				var L = C[Symbol.toPrimitive];
				if (L !== void 0) {
					var j = L.call(C, P || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(C)
			}
			class d {
				constructor(P, L) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", j => {
						this.resolvers.set(j, {
							name: j,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", j => {
						const X = this.resolvers.get(j);
						X && (X.endTime = Date.now(), this.resolvers.set(j, X))
					}), n(this, "resolverCancel", j => {
						this.resolverDone(j), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", j => {
						const X = "NO_ACTION",
							oe = {
								actionType: X,
								startTime: 0
							};
						return {
							start: (pe = X) => {
								const ce = this.resolvers.get(j);
								oe.actionType = pe, oe.startTime = Date.now(), ce && ce.userActions.push(oe)
							},
							finish: (pe = X) => {
								oe.actionType = pe, oe.endTime = Date.now()
							},
							cancel: (pe = X) => {
								oe.actionType = pe, oe.endTime = Date.now(), this.resolverCancel(j)
							}
						}
					}), this.deepLink = P, this.legacyDeepLink = L, this.resolvers = new Map
				}
				track(P) {
					try {
						if (this._done) return;
						this._done = !0;
						const L = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: o(this.startTime, this.endTime),
								totalCpuTime: o(this.startTime, this.endTime)
							},
							j = this.resolvers.size === 0 ? L : Array.from(this.resolvers.values()).reduce((X, oe) => {
								const pe = o(oe.startTime, oe.endTime),
									ce = oe.userActions.reduce((G, W) => {
										const x = o(W.startTime, W.endTime);
										return {
											totalTime: G.totalTime + x,
											actions: G.actions.set(W.actionType, x)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									K = pe - ce.totalTime;
								return v({}, X, {
									totalTime: X.totalTime + pe,
									totalUserActionsTime: X.totalUserActionsTime + ce.totalTime,
									totalCpuTime: X.totalCpuTime + K,
									[`${oe.name}ResolverTotalTime`]: pe,
									[`${oe.name}ResolverTotalCpuTime`]: K,
									[`${oe.name}ResolverTotalUserActionsTime`]: ce.totalTime
								}, Array.from(ce.actions.keys()).reduce((G, W) => v({}, G, {
									[`${oe.name}Resolver/${W}`]: ce.actions.get(W)
								}), {}))
							}, v({}, L, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						m().sendEvent(P, j)
					} catch (L) {
						console.error(L)
					}
				}
			}

			function o(C = Date.now(), P = Date.now()) {
				return (P - C) / 1e3
			}
			var g = t("../react/app/components/DeepLink/constants.ts"),
				I = t("../react/common/hooks/useCachedState.ts"),
				D = t("../react/common/hooks/usePrevious.ts");

			function O(C) {
				for (var P = 1; P < arguments.length; P++) {
					var L = arguments[P] != null ? Object(arguments[P]) : {},
						j = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(L).filter(function(X) {
						return Object.getOwnPropertyDescriptor(L, X).enumerable
					})), j.forEach(function(X) {
						y(C, X, L[X])
					})
				}
				return C
			}

			function y(C, P, L) {
				return P = A(P), P in C ? Object.defineProperty(C, P, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[P] = L, C
			}

			function A(C) {
				var P = E(C, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function E(C, P) {
				if (typeof C != "object" || C === null) return C;
				var L = C[Symbol.toPrimitive];
				if (L !== void 0) {
					var j = L.call(C, P || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(C)
			}
			var S = ({
					children: C
				}) => {
					const P = (0, r.TZ)(),
						L = (0, a.useHistory)(),
						j = (0, D.Z)(L.location.pathname),
						[X, oe] = (0, e.useState)(!0),
						[pe, ce] = (0, I.j)(void 0, {
							key: g.Fj
						}),
						[K, G] = (0, I.j)(void 0, {
							key: g.O5
						}),
						[W, x] = (0, I.j)(void 0, {
							key: g.s$
						}),
						h = (0, l.$8)();
					let M = new URLSearchParams(L.location.search);
					const F = (0, u.mL)(L.location.pathname, M);
					let q = null,
						ee = null;
					if (M.has(g.Tc) && M.delete(g.Tc), M.get(g.BV)) q = M.get(g.BV), L.location.hash && (ee = L.location.hash);
					else if (pe) {
						const Y = new URLSearchParams(pe);
						Y.get(g.BV) && (q = Y.get(g.BV), M = Y)
					} else F && (M.set(g.BV, F), q = F);
					if (q && g._h.test(q)) {
						const Y = M.getAll(g.Kt),
							B = JSON.stringify(Y);
						Y.length && B !== W && x(B), M.has(g.Tc) && M.delete(g.Tc), M.delete(g.Kt)
					}!h && pe === void 0 && q && ce(M.toString());
					const ne = async () => {
						try {
							if ((0, u.I3)(q) && h) {
								pe && ce(void 0), P.dispatch((0, f.r4)()), oe(!0), q && q !== K && G(q);
								const Y = await (0, u.py)(q, oe, P, L, j, new d(q, F ? `${L.location.pathname}${L.location.search}` : void 0));
								M.delete(g.BV);
								const B = M.toString();
								L.replace(O({}, L.location, {
									pathname: Y,
									search: B
								}, ee ? {
									hash: ee
								} : {})), P.dispatch((0, f.WF)())
							}
						} catch (Y) {
							P.dispatch((0, f.WF)()), console.error(Y)
						} finally {
							oe(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ne()
					}, [L.location.pathname, L.location.search]), (X || (0, u.I3)(q)) && h ? null : C
				},
				k = t("../react/app/components/DeepLink/reducer.ts"),
				N = t("../react/app/components/DeepLink/selectors.ts"),
				w = S
		},
		"../react/app/components/DeepLink/reducer.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				E: function() {
					return u
				},
				r: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				a = t("../react/app/components/DeepLink/actions.ts");
			const u = null,
				l = r().from({
					lastAction: u,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function f(s = l, m) {
				if (m.type === a.MF.RESOLVING_COMPLETE) return l;
				if (m.type === a.MF.RESOLVING_START) return s.set("isResolving", !0);
				if (s.isResolving) {
					if (m.type === a.MF.RESOLVING_COMPLETE) return s.set("isResolving", !1);
					if (m.type === a.MF.SET_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", m.accountIds);
					if (m.type === a.MF.DELETE_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", void 0);
					{
						let v = s;
						try {
							v = s.set("lastAction", m)
						} catch {
							v = s.set("lastAction", {
								type: m.type
							})
						}
						return v
					}
				} else return s
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				U: function() {
					return a
				},
				dd: function() {
					return r
				},
				yI: function() {
					return e
				}
			});
			const e = u => u.deepLink.lastAction,
				r = u => u.deepLink.isResolving,
				a = u => u.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				I3: function() {
					return v
				},
				X1: function() {
					return s
				},
				mL: function() {
					return o
				},
				py: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../react/app/components/DeepLink/reducer.ts"),
				a = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/app/components/DeepLink/constants.ts"),
				l = t("../react/common/validators/index.js"),
				f = t("../react/common/utils/isGuards.ts");
			const s = g => (0, l.Lb)(g) && (g.split(".").length > 1 || (0, f.v5)(g)),
				m = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				v = g => typeof g == "string" && g.startsWith("/"),
				n = (g, I) => D => new Promise((O, y) => {
					I.start();
					const A = g.subscribe(() => {
						const E = (0, a.yI)(g.getState());
						E === r.E ? (I.cancel(), A(), y("DeepLink: waitForAction out of context.")) : D(E) && (I.finish(E.type), A(), O(E))
					})
				}),
				c = (g, I, D) => (O, y) => new Promise((A, E) => {
					D.start();
					const b = I.location.pathname;
					O = new URL(O, window.location.href).pathname, b !== O && (D.cancel(), E(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${O}", but on "${b}". You need to redirect to "${O}", and unblockRouter in your Resolver, before you use this function.`));
					const S = g.subscribe(() => {
						const k = (0, a.yI)(g.getState()),
							N = I.location.pathname,
							C = new URLSearchParams(I.location.search).get(u.BV);
						(N !== O || !!C) && (D.cancel(), S(), E(`DeepLink: waitForPageAction user navigated away from "${O}" to "${N}${C?I.location.search:""}"`)), k === r.E ? (D.cancel(), S(), E("DeepLink: waitForPageAction out of context.")) : y(k) && (D.finish(k.type), S(), A(k))
					})
				});

			function i(g) {
				const I = [],
					D = g.split("?")[0].split("/");
				for (let O of D) O.length !== 0 && (O.startsWith(":") ? I.push({
					value: O.substring(1),
					type: "dynamic"
				}) : I.push({
					value: O,
					type: "static"
				}));
				return I
			}
			async function d(g, I, D, O, y, A) {
				A.start();
				const E = i(g),
					S = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					k = {};
				let N = "";
				for (const [w, C] of E.entries())
					if (C.type === "static") N = [N, C.value].join("/");
					else if (C.type === "dynamic" && m.is(C.value) && C.value in S) {
					A.resolverStart(C.value);
					const P = await S[C.value]({
						deepLink: g,
						blockRouter: () => I(!0),
						unblockRouter: () => I(!1),
						routerHistory: O,
						resolvedValues: k,
						store: D,
						referringRoute: y,
						uri: {
							currentPartIdx: w,
							parts: E
						},
						waitForAction: n(D, A.createUserActionTracker(C.value)),
						waitForPageAction: c(D, O, A.createUserActionTracker(C.value))
					});
					A.resolverDone(C.value), N = [N, P].join("/"), k[C.value] = P
				} else throw A.cancel(), new Error(`DeepLink: Resolver with name '${C.value}' is not supported.`);
				return A.done(), N
			}

			function o(g, I) {
				const D = ":account",
					O = ":zone",
					y = I.get("zone");
				if (y) return I.delete("zone"), `/${D}/${O}/${y}`;
				const A = I.get("account");
				if (A) return I.delete("account"), `/${D}/${A}`;
				if (g === "/overview") return `/${D}/${O}`;
				const E = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const b of E) {
					const S = b.length;
					if (g.startsWith(b) && (g.length === S || g[S] === "/")) return `/${D}/${O}${g}`
				}
				switch (g) {
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
		"../react/app/components/ErrorBoundary.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				S: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				u = t("../react/app/components/SomethingWrong.jsx"),
				l = t("../utils/sentry/lastSentEventId.ts"),
				f = t("../react/utils/zaraz.ts"),
				s = t("../react/utils/url.ts"),
				m = t("../node_modules/@cloudflare/elements/es/index.js"),
				v = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(c),
				d = t("../react/common/components/Page.tsx"),
				o = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function g() {
				return (0, e.useEffect)(() => {
					i().sendEvent("new page available refresh cta")
				}, []), r().createElement(d.Z, {
					type: "narrow"
				}, r().createElement(m.ZC, {
					textAlign: "center"
				}, r().createElement(m.H1, {
					fontSize: 5,
					fontWeight: 400
				}, r().createElement(n.Trans, {
					id: "error.new_page_version_available.title"
				})), r().createElement(n.Trans, {
					id: "error.new_page_version_available.description"
				}), r().createElement(m.ZC, null, r().createElement(m.Ei, {
					height: 116,
					src: o,
					"aria-hidden": !0
				})), r().createElement(v.zx, {
					mt: 3,
					type: "primary",
					iconType: "refresh",
					onClick: () => window.location.reload()
				}, r().createElement(n.Trans, {
					id: "common.refresh"
				}))))
			}
			const I = ({
				sentryTag: D,
				children: O,
				fallbackComponent: y
			}) => r().createElement(a.SV, {
				beforeCapture: A => {
					f.tg === null || f.tg === void 0 || f.tg.track("page-error", {
						page: (0, s.Fl)(window.location.pathname)
					})
				},
				onError: A => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(A)
				},
				fallback: ({
					error: A,
					eventId: E
				}) => {
					var b;
					if (y) return y;
					const S = l.e.getEventId() || E;
					return (A == null || (b = A.message) === null || b === void 0 ? void 0 : b.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), r().createElement(g, null)) : r().createElement(u.Z, {
						type: "page",
						error: A,
						eventId: S,
						sentryTag: D
					})
				}
			}, O)
		},
		"../react/app/components/Footer.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				Z: function() {
					return x
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = t.n(s),
				v = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				c = t("../react/utils/translator.tsx"),
				i = t("../../../../node_modules/moment/moment.js"),
				d = t.n(i);
			const o = () => {
					const h = d()().format("YYYY"),
						M = F => {
							m().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: F
							})
						};
					return r().createElement(g, {
						marginTop: "auto"
					}, r().createElement(I, null, r().createElement(D, null, r().createElement(O, null, "\xA9 ", h, " Cloudflare, Inc."), r().createElement(O, null, r().createElement(y, null, r().createElement(A, {
						showOnDeskTop: !1
					}, r().createElement(E, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => M("Support")
					}, r().createElement(c.cC, {
						id: "common.support"
					}))), r().createElement(A, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => M("Privacy Policy")
					}, r().createElement(c.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(A, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => M("Terms of Use")
					}, r().createElement(c.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(A, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => M("Cookie Preferences")
					}, r().createElement(c.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(A, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => M("Trademark")
					}, r().createElement(c.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(y, null, r().createElement(A, null, r().createElement(E, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => M("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(c.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				g = (0, l.createComponent)(({
					theme: h,
					marginTop: M
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: M
				})),
				I = (0, l.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				D = (0, l.createComponent)(({
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
				O = (0, l.createComponent)(({
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
				A = (0, l.createComponent)(({
					showOnDeskTop: h = !0,
					theme: M
				}) => ({
					color: M.colors.white,
					fontSize: M.fontSizes[1],
					height: "20px",
					display: h ? "flex" : "none",
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
				E = (0, l.createStyledComponent)(({
					theme: h
				}) => ({
					textDecoration: "none",
					color: h.colors.white,
					"&:hover": {
						color: h.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var b = o,
				S = t("../react/pages/welcome/routes.ts"),
				k = t("../react/utils/cookiePreferences.ts"),
				N = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				C = () => {
					const [h, M] = (0, e.useState)(!1), F = (0, k.wV)(), q = () => {
						M(!0)
					}, ee = () => {
						M(!1)
					}, ne = F && F === "US" ? (0, c.ZP)("footer.cpra_cta.privacy_choices") : (0, c.ZP)("footer.cpra_cta.cookie_preferences"), Y = {
						background: "transparent",
						borderRadius: "none",
						color: h ? (0, f.Yc)() ? "#ee730a" : "#003681" : (0, f.Yc)() ? "#4693ff" : "#0051c3",
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
					return r().createElement(u.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: Y,
						onMouseEnter: q,
						onMouseLeave: ee
					}, r().createElement(u.Ei, {
						height: 15,
						src: N,
						mr: 2,
						alt: ne
					}), ne)
				};

			function P() {
				return P = Object.assign ? Object.assign.bind() : function(h) {
					for (var M = 1; M < arguments.length; M++) {
						var F = arguments[M];
						for (var q in F) Object.prototype.hasOwnProperty.call(F, q) && (h[q] = F[q])
					}
					return h
				}, P.apply(this, arguments)
			}

			function L(h, M) {
				if (h == null) return {};
				var F = j(h, M),
					q, ee;
				if (Object.getOwnPropertySymbols) {
					var ne = Object.getOwnPropertySymbols(h);
					for (ee = 0; ee < ne.length; ee++) q = ne[ee], !(M.indexOf(q) >= 0) && (!Object.prototype.propertyIsEnumerable.call(h, q) || (F[q] = h[q]))
				}
				return F
			}

			function j(h, M) {
				if (h == null) return {};
				var F = {},
					q = Object.keys(h),
					ee, ne;
				for (ne = 0; ne < q.length; ne++) ee = q[ne], !(M.indexOf(ee) >= 0) && (F[ee] = h[ee]);
				return F
			}
			const X = (0, l.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,f.Yc)()?f.rS.colors.orange[6]:f.rS.colors.blue[4]}`
					}
				}), u.A),
				oe = (0, l.createStyledComponent)(({
					theme: h
				}) => ({
					color: h.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, v.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: h.colors.gray[4]
					}
				}), u.A),
				pe = h => {
					let {
						onClick: M
					} = h, F = L(h, ["onClick"]);
					return React.createElement(X, P({
						onClick: q => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: F.href
							}), M && M(q)
						}
					}, F))
				},
				ce = h => {
					let {
						children: M,
						target: F,
						rel: q
					} = h, ee = L(h, ["children", "target", "rel"]);
					return r().createElement(oe, P({
						target: F || "_blank",
						rel: q || "noopener noreferrer"
					}, ee), M)
				},
				K = (0, l.createStyledComponent)(({
					theme: h
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, v.tq)() ? "8px" : "16px",
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
				G = (0, l.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, v.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), u.ZC);
			var x = () => {
				const h = [S.d.root.pattern].some(F => (0, a.matchPath)(location.pathname, {
					path: F
				}));
				if ((0, n.PP)()) return r().createElement(b, null);
				if (h) return null;
				const M = new Date().getFullYear();
				return r().createElement(u.$_, {
					height: (0, v.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto",
					id: "site-footer"
				}, r().createElement(G, null, r().createElement(K, null, r().createElement(u.Li, null, r().createElement(ce, {
					href: "https://support.cloudflare.com"
				}, (0, c.ZP)("common.support"))), r().createElement(u.Li, null, r().createElement(ce, {
					href: "https://www.cloudflarestatus.com"
				}, r().createElement(u.Dr, {
					textTransform: "capitalize"
				}, (0, c.ZP)("footer.system_status")))), r().createElement(u.Li, null, r().createElement(ce, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, c.ZP)("footer.careers"))), r().createElement(u.Li, null, r().createElement(ce, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, c.ZP)("footer.tos_reduced"))), r().createElement(u.Li, null, r().createElement(ce, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, c.ZP)("footer.security_issues"))), r().createElement(u.Li, null, r().createElement(ce, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, c.ZP)("footer.privacy_policy"))), r().createElement(u.Li, null, r().createElement(C, null)), r().createElement(u.Li, null, r().createElement(u.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", M, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(U, _, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/components/ErrorStatus.tsx"),
				u = t("../react/utils/translator.tsx");
			const l = f => r().createElement(a.Z, f, (0, u.ZP)("error.forbidden"));
			_.Z = l
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				S: function() {
					return I
				},
				Z: function() {
					return ne
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../node_modules/@cloudflare/component-button/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				v = t.n(m),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				c = t("../react/common/components/AccessControl/index.js"),
				i = t("../react/common/components/ButtonWithDropdown.tsx"),
				d = t("../react/common/components/Dropdown/index.tsx"),
				o = t("../react/utils/translator.tsx"),
				g = t("../react/common/hooks/useGate.ts");
			const I = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				D = () => {
					const Y = (0, g.Z)("super-add-button-copy-change"),
						B = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: I.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/registrar/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: I.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: I.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: I.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: I.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: I.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}];
					switch (Y) {
						case "existing-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
								},
								trackingEvent: I.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...B];
						case "existing-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site_app"
								},
								trackingEvent: I.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...B];
						case "existing-site":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site"
								},
								trackingEvent: I.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...B];
						case "your-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_website_app"
								},
								trackingEvent: I.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...B];
						case "your-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_site_app"
								},
								trackingEvent: I.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...B];
						default:
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title"
								},
								trackingEvent: I.EXISTING_DOMAIN,
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
								trackingEvent: I.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/registrar/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: I.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: I.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: I.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: I.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: I.ACCOUNT_MEMBERS,
								icon: "user-outline",
								url: "?to=/:account/members/invite",
								description: {
									id: "onboarding.add_product.account_member.description"
								},
								permissionCheck: "#member:edit"
							}]
					}
				},
				O = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: I.EXISTING_DOMAIN,
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
					trackingEvent: I.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/registrar/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: I.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: I.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: I.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: I.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: I.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var y = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function A(Y) {
				for (var B = 1; B < arguments.length; B++) {
					var z = arguments[B] != null ? Object(arguments[B]) : {},
						te = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(z).filter(function(le) {
						return Object.getOwnPropertyDescriptor(z, le).enumerable
					})), te.forEach(function(le) {
						E(Y, le, z[le])
					})
				}
				return Y
			}

			function E(Y, B, z) {
				return B = b(B), B in Y ? Object.defineProperty(Y, B, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[B] = z, Y
			}

			function b(Y) {
				var B = S(Y, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function S(Y, B) {
				if (typeof Y != "object" || Y === null) return Y;
				var z = Y[Symbol.toPrimitive];
				if (z !== void 0) {
					var te = z.call(Y, B || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(Y)
			}

			function k() {
				return k = Object.assign ? Object.assign.bind() : function(Y) {
					for (var B = 1; B < arguments.length; B++) {
						var z = arguments[B];
						for (var te in z) Object.prototype.hasOwnProperty.call(z, te) && (Y[te] = z[te])
					}
					return Y
				}, k.apply(this, arguments)
			}

			function N(Y, B) {
				if (Y == null) return {};
				var z = w(Y, B),
					te, le;
				if (Object.getOwnPropertySymbols) {
					var ue = Object.getOwnPropertySymbols(Y);
					for (le = 0; le < ue.length; le++) te = ue[le], !(B.indexOf(te) >= 0) && (!Object.prototype.propertyIsEnumerable.call(Y, te) || (z[te] = Y[te]))
				}
				return z
			}

			function w(Y, B) {
				if (Y == null) return {};
				var z = {},
					te = Object.keys(Y),
					le, ue;
				for (ue = 0; ue < te.length; ue++) le = te[ue], !(B.indexOf(le) >= 0) && (z[le] = Y[le]);
				return z
			}
			const C = Y => {
					let {
						title: B,
						trackingEvent: z,
						icon: te,
						url: le,
						description: ue,
						disabled: ge
					} = Y, ye = N(Y, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return r().createElement(P, k({
						to: !ge && le || "#",
						"aria-disabled": ge,
						onClick: () => {
							v().sendEvent(z, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, ye), r().createElement(u.ZC, {
						display: "flex"
					}, r().createElement(a.J, {
						type: te,
						size: 24,
						mr: 2,
						mt: 1
					}), r().createElement(u.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, r().createElement(u.ZC, {
						fontSize: 3
					}, r().createElement(o.cC, B)), r().createElement(u.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, r().createElement(o.cC, ue)))))
				},
				P = (0, n.createStyledComponent)(({
					theme: Y
				}) => {
					const B = {
						cursor: "pointer",
						backgroundColor: (0, f.Yc)() ? Y.colors.gray[8] : Y.colors.gray[9],
						color: Y.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: Y.colors.background,
						color: Y.colors.gray[2],
						fontSize: Y.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': B,
						':focus-within:not([aria-disabled="true"])': A({}, B, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: Y.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, y.Link);
			var L = C;

			function j() {
				return j = Object.assign ? Object.assign.bind() : function(Y) {
					for (var B = 1; B < arguments.length; B++) {
						var z = arguments[B];
						for (var te in z) Object.prototype.hasOwnProperty.call(z, te) && (Y[te] = z[te])
					}
					return Y
				}, j.apply(this, arguments)
			}

			function X(Y) {
				for (var B = 1; B < arguments.length; B++) {
					var z = arguments[B] != null ? Object(arguments[B]) : {},
						te = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(z).filter(function(le) {
						return Object.getOwnPropertyDescriptor(z, le).enumerable
					})), te.forEach(function(le) {
						oe(Y, le, z[le])
					})
				}
				return Y
			}

			function oe(Y, B, z) {
				return B = pe(B), B in Y ? Object.defineProperty(Y, B, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[B] = z, Y
			}

			function pe(Y) {
				var B = ce(Y, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function ce(Y, B) {
				if (typeof Y != "object" || Y === null) return Y;
				var z = Y[Symbol.toPrimitive];
				if (z !== void 0) {
					var te = z.call(Y, B || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(Y)
			}

			function K(Y, B) {
				if (Y == null) return {};
				var z = G(Y, B),
					te, le;
				if (Object.getOwnPropertySymbols) {
					var ue = Object.getOwnPropertySymbols(Y);
					for (le = 0; le < ue.length; le++) te = ue[le], !(B.indexOf(te) >= 0) && (!Object.prototype.propertyIsEnumerable.call(Y, te) || (z[te] = Y[te]))
				}
				return z
			}

			function G(Y, B) {
				if (Y == null) return {};
				var z = {},
					te = Object.keys(Y),
					le, ue;
				for (ue = 0; ue < te.length; ue++) le = te[ue], !(B.indexOf(le) >= 0) && (z[le] = Y[le]);
				return z
			}
			const W = "GLOBAL_ADD_DROPDOWN",
				x = (0, n.createStyledComponent)(({
					theme: Y
				}) => ({
					"background-color": Y.colors.blue[5]
				}), l.zx),
				h = ({
					disableProducts: Y
				}) => {
					const B = D();
					return (0, e.useEffect)(() => (v().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						v().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), []), r().createElement(i.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0",
						bottom: "auto",
						zIndex: 1200,
						minWidth: 240
					}, B.map(z => {
						const te = z || {},
							{
								disableOn: le,
								permissionCheck: ue
							} = te,
							ge = K(te, ["disableOn", "permissionCheck"]),
							ye = le && Y[le],
							Te = X({}, ge, {
								disabled: ye
							});
						return ue ? r().createElement(c.Z, {
							key: z.title.id,
							edit: ue
						}, ({
							isEditable: Oe
						}) => Oe && r().createElement(L, Te)) : r().createElement(L, j({
							key: z.url
						}, Te))
					}))
				},
				M = ({
					disableProducts: Y,
					topNavType: B
				}) => {
					const z = () => (0, s.tq)() || B === "icon-only" ? r().createElement(u.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, r().createElement(x, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : B === "text-icon" || B === "icon-only-with-add-button" ? r().createElement(l.zx, {
						type: "primary",
						mr: B === "text-icon" ? 2 : 3
					}, r().createElement(r().Fragment, null, r().createElement(a.J, {
						label: "plus",
						type: "plus"
					}), " ", r().createElement(o.cC, {
						id: "common.add"
					}))) : r().createElement(l.zx, {
						type: "primary",
						mr: 2
					}, r().createElement(o.cC, {
						id: "common.add"
					}), " ", r().createElement(a.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return r().createElement(F, {
						role: "group",
						"data-testid": W
					}, r().createElement(d.Lt, {
						trigger: B === "baseline" ? r().createElement(q, null, r().createElement(a.J, {
							label: "plus",
							type: "plus"
						}), !(0, s.tq)() && r().createElement(r().Fragment, null, r().createElement(o.cC, {
							id: "common.add"
						}), " ", r().createElement(a.J, {
							label: "arrow",
							type: "caret-down"
						}))) : z(),
						menu: r().createElement(h, {
							disableProducts: Y
						})
					}))
				},
				F = (0, n.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				q = (0, n.createStyledComponent)(({
					theme: Y
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: Y.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, f.Yc)() ? Y.colors.gray[1] : Y.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, f.Yc)() ? Y.colors.gray[8] : Y.colors.gray[9]
					}
				}), u.zx);
			var ee = M,
				ne = ee
		},
		"../react/app/components/LoadingSuspense.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				Z: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../react/utils/translator.tsx"),
				f = t("../react/app/components/ErrorStatus.tsx"),
				s = t("../react/common/components/EmptyPage.jsx"),
				m = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const v = "suspenseComplete";

			function n() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(v))
				}, [])
			}

			function c(D) {
				useEventListener(v, () => {
					window.setTimeout(D, 0)
				}, {
					target: window
				})
			}

			function i(...D) {
				const [O, y] = D;
				React.useLayoutEffect(O, y), c(O)
			}

			function d(D) {
				const [O, y] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const A = window.setTimeout(() => y(!0), D);
					return () => window.clearTimeout(A)
				}, []), O
			}
			const o = ({
				loadingTimeout: D = 1e3,
				stillLoadingTimeout: O = 9e3
			}) => {
				const y = d(D),
					A = d(O);
				if (n(), !y && !A) return r().createElement(s.Z, null);
				const E = A ? r().createElement(l.cC, {
					id: "common.still_loading"
				}) : y ? r().createElement(l.cC, {
					id: "common.loading"
				}) : null;
				return r().createElement(f.Z, {
					size: 5
				}, r().createElement(u.ZC, {
					mr: 3
				}, r().createElement(a.g, {
					size: "2x"
				})), E)
			};
			var I = ({
				children: D
			}) => r().createElement(e.Suspense, {
				fallback: r().createElement(o, null)
			}, D)
		},
		"../react/app/components/Persistence/api.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				C8: function() {
					return m
				},
				Mn: function() {
					return i
				},
				Sp: function() {
					return c
				},
				dr: function() {
					return l
				},
				lt: function() {
					return f
				},
				m6: function() {
					return n
				},
				n: function() {
					return v
				},
				yl: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
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
					} catch (o) {
						console.error(o)
					}
				}, f = async (d, o) => {
					try {
						return await (await e.post(`${a}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: d,
								accountId: o
							}),
							hideErrorAlert: !0
						})).body
					} catch (g) {
						return console.error(g), []
					}
				}, s = async (d, o) => {
					try {
						return await http.post(`/accounts/${d}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: o
							}),
							hideErrorAlert: !0
						}), !0
					} catch (g) {
						return console.error(g), !1
					}
				}, m = async d => {
					try {
						return await (await e.post(a, {
							body: JSON.stringify({
								darkMode: d
							})
						})).body
					} catch (o) {
						console.error(o)
					}
				}, v = async d => {
					try {
						return await (await e.post(`${a}/recents`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (o) {
						console.error(o)
					}
				}, n = async d => {
					try {
						return await (await e.post(`${a}/viewed-changes`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (o) {
						throw console.error(o), o
					}
				}, c = async d => {
					try {
						return await (await e.post(a + "/flags", {
							body: JSON.stringify(d)
						})).body
					} catch (o) {
						throw console.error(o), o
					}
				}, i = async (d, o) => {
					try {
						return await (await e.post(`${a}/dismissed-tasks`, {
							body: JSON.stringify({
								name: d,
								accountId: o
							}),
							hideErrorAlert: !0
						})).body
					} catch (g) {
						throw console.error(g), g
					}
				}
		},
		"../react/app/components/Persistence/hooks.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				y: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/components/Persistence/index.tsx");
			const u = () => (0, e.useContext)(a.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				Wl: function() {
					return v
				},
				lp: function() {
					return D
				},
				Z_: function() {
					return y
				},
				r7: function() {
					return P
				},
				Tv: function() {
					return G
				},
				yZ: function() {
					return A.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(u),
				f = t("../react/utils/bootstrap.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/app/components/Persistence/api.ts");
			const v = 10;
			var n = t("../react/common/hooks/useActiveState.ts");

			function c(W) {
				for (var x = 1; x < arguments.length; x++) {
					var h = arguments[x] != null ? Object(arguments[x]) : {},
						M = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(h).filter(function(F) {
						return Object.getOwnPropertyDescriptor(h, F).enumerable
					})), M.forEach(function(F) {
						i(W, F, h[F])
					})
				}
				return W
			}

			function i(W, x, h) {
				return x = d(x), x in W ? Object.defineProperty(W, x, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[x] = h, W
			}

			function d(W) {
				var x = o(W, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function o(W, x) {
				if (typeof W != "object" || W === null) return W;
				var h = W[Symbol.toPrimitive];
				if (h !== void 0) {
					var M = h.call(W, x || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(W)
			}
			const g = {
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
				I = c({}, g, {
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
				D = (0, e.createContext)(I),
				O = D.Consumer,
				y = ({
					children: W,
					onDarkModeChangeCb: x
				}) => {
					const [h, M] = (0, e.useState)(g), [F, q] = (0, e.useState)(I.isLoading), [ee, ne] = (0, e.useState)(!1), Y = (0, f.$8)(), B = (0, a.p4)(ge => (0, s.wH)(ge)), [, z] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						Y ? (0, m.yl)().then(ge => {
							if (ge) {
								var ye;
								M(ge), z(ge == null || (ye = ge.flags) === null || ye === void 0 ? void 0 : ye.hasEnabledSecurityNavigation), l().identify({
									hasEnabledSecurityNavigation: ge.flags.hasEnabledSecurityNavigation
								}), x(ge.darkMode)
							}
						}).finally(() => q(!1)) : q(!1)
					}, [Y]);
					const te = (ge, ye) => !!h.favorites.find(Te => Te.type === "zone" && Te.name === ge && Te.accountId === ye),
						le = v - h.favorites.length,
						ue = ge => h.favorites.filter(Te => Te.type === "zone" && Te.accountId === ge).length < v;
					return r().createElement(D.Provider, {
						value: c({}, h, {
							isLoading: F,
							remainingStarSlots: le,
							isUpdatingFlags: ee,
							actions: {
								canAccountStarZone: ue,
								isZoneStarred: te,
								starZone: async (ge, ye) => {
									var Te;
									const Oe = !te(ge, ye),
										ve = ue(ye);
									if (Oe && !ve) {
										console.log("can not star zone - account is at limit");
										return
									}
									const De = await (0, m.lt)(ge, ye);
									l().sendEvent("click star zone", {
										isStarring: Oe,
										totalStarredZones: De.filter(Me => Me.accountId === ye && Me.type === "zone").length,
										totalZones: B == null || (Te = B.paginationData) === null || Te === void 0 ? void 0 : Te.info.total_count
									}), M(c({}, h, {
										favorites: De
									}))
								},
								toggleSecurityNavigation: async ge => {
									ne(!0), await (0, m.Sp)({
										hasEnabledSecurityNavigation: ge
									}), l().identify({
										hasEnabledSecurityNavigation: ge
									}), ne(!1), z(ge), M(c({}, h, {
										flags: {
											hasEnabledSecurityNavigation: ge
										}
									}))
								},
								setDarkMode: async ge => {
									const ye = await (0, m.C8)(ge);
									M(ye), x(ye.darkMode)
								},
								logRouteVisited: async ge => {
									var ye;
									const Te = await (0, m.n)(ge);
									M((ye = Te) !== null && ye !== void 0 ? ye : c({}, h))
								},
								viewChange: async ge => {
									const ye = await (0, m.m6)(ge);
									M(c({}, h, {
										viewedChanges: ye
									}))
								},
								dismissTask: async (ge, ye) => {
									const Te = await (0, m.Mn)(ge, ye);
									M(c({}, h, {
										dismissedTasks: Te
									}))
								}
							}
						})
					}, W)
				};
			var A = t("../react/app/components/Persistence/hooks.ts"),
				E = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				b = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function S() {
				return S = Object.assign ? Object.assign.bind() : function(W) {
					for (var x = 1; x < arguments.length; x++) {
						var h = arguments[x];
						for (var M in h) Object.prototype.hasOwnProperty.call(h, M) && (W[M] = h[M])
					}
					return W
				}, S.apply(this, arguments)
			}

			function k(W, x) {
				if (W == null) return {};
				var h = N(W, x),
					M, F;
				if (Object.getOwnPropertySymbols) {
					var q = Object.getOwnPropertySymbols(W);
					for (F = 0; F < q.length; F++) M = q[F], !(x.indexOf(M) >= 0) && (!Object.prototype.propertyIsEnumerable.call(W, M) || (h[M] = W[M]))
				}
				return h
			}

			function N(W, x) {
				if (W == null) return {};
				var h = {},
					M = Object.keys(W),
					F, q;
				for (q = 0; q < M.length; q++) F = M[q], !(x.indexOf(F) >= 0) && (h[F] = W[F]);
				return h
			}
			const w = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var P = W => {
					let {
						isStarred: x,
						size: h = 16
					} = W, M = k(W, ["isStarred", "size"]);
					const F = w[(0, E.Yc)() ? "dark" : "light"];
					return r().createElement(b.J, S({
						type: x ? "star" : "star-outline",
						color: x ? F.gold : F.gray,
						size: h
					}, M))
				},
				L = t("../node_modules/@cloudflare/elements/es/index.js");

			function j(W) {
				for (var x = 1; x < arguments.length; x++) {
					var h = arguments[x] != null ? Object(arguments[x]) : {},
						M = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(h).filter(function(F) {
						return Object.getOwnPropertyDescriptor(h, F).enumerable
					})), M.forEach(function(F) {
						X(W, F, h[F])
					})
				}
				return W
			}

			function X(W, x, h) {
				return x = oe(x), x in W ? Object.defineProperty(W, x, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[x] = h, W
			}

			function oe(W) {
				var x = pe(W, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function pe(W, x) {
				if (typeof W != "object" || W === null) return W;
				var h = W[Symbol.toPrimitive];
				if (h !== void 0) {
					var M = h.call(W, x || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(W)
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
			var G = (0, e.forwardRef)(({
				featurePreview: W = !1,
				isStarred: x,
				onClickFn: h,
				isDisabled: M,
				testId: F,
				buttonText: q,
				size: ee = "large",
				variant: ne = "pill"
			}, Y) => {
				const [B, z] = (0, e.useState)(!1), te = ce[(0, E.Yc)() ? "dark" : "light"][x && !W ? "active" : "default"], le = j({}, ee === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, ee === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, ee === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), ue = {
					pill: "50vh",
					button: 4
				};
				return r().createElement(L.zx, {
					onMouseEnter: () => z(!0),
					onMouseLeave: () => z(!1),
					innerRef: Y,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: le.paddingRight,
					gap: 1,
					pl: le.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: ue[ne],
					border: "1px solid",
					cursor: W || M ? "default" : "pointer",
					backgroundColor: B ? te.bgHover : te.bg,
					color: te.text,
					borderColor: te.border,
					onClick: h,
					opacity: M ? .5 : 1,
					disabled: M,
					fontSize: le.fontSize,
					height: le.height,
					"data-testid": F
				}, r().createElement(P, {
					isStarred: W ? !1 : x,
					size: le.starIconSize
				}), q)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				$n: function() {
					return d
				},
				IU: function() {
					return g
				},
				Wq: function() {
					return S
				},
				dL: function() {
					return I
				},
				fO: function() {
					return b
				},
				gw: function() {
					return N
				},
				hv: function() {
					return o
				},
				iY: function() {
					return c
				},
				jq: function() {
					return w
				},
				o_: function() {
					return y
				},
				us: function() {
					return E
				},
				wB: function() {
					return i
				},
				zJ: function() {
					return A
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/utils/zoneLevelAccess.ts"),
				f = t("../react/pages/stream/selectors.ts"),
				s = t("../react/pages/home/domain-registration/selectors.ts"),
				m = t("../react/pages/images/selectors.ts"),
				v = t("../react/pages/r2/selectors.ts");
			const n = C => !!(0, l.b)(C),
				c = C => n(C) ? (0, e.hT)(C) : !0,
				i = (C, P, L, j = "read") => {
					const X = (0, a.nA)(C);
					return n(C) ? (0, e.WL)(C, (0, e.W9)(L, e.ZZ[j]), (0, e.j)(X == null ? void 0 : X.id)) : (0, u.Yj)(C)(P)[j]
				},
				d = (C, P, L, j = "read") => {
					const X = (0, a.nA)(C),
						oe = e.zs.includes(L);
					return n(C) ? (0, e.WL)(C, oe ? L : (0, e.my)(L, e.ZZ[j === "edit" ? "update" : j]), (0, e.j)(X == null ? void 0 : X.id)) : (0, u.Yj)(C)(P)[j === "update" ? "edit" : j]
				},
				o = C => !!(0, f._Q)(C),
				g = C => (0, m.pT)(C),
				I = C => (0, m.pT)(C) && (0, m.GH)(C),
				D = C => sourcingKitEnabledSelector(C),
				O = C => !!r2EnabledSelector(C),
				y = C => (0, v.Mv)(C),
				A = C => (0, r.$f)(C, "rulesets.magic_transit_allowed"),
				E = C => (0, r.$f)(C, "flowtrackd.magic_custom_config_allowed"),
				b = C => (0, r.$f)(C, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				S = C => (0, u.Le)(C, "ddos_protection", "l4_rulesets"),
				k = C => hasAccountEntitlements(C, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				N = C => (0, s.HO)(C),
				w = C => !(0, r.yD)(C) && !!d(C, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function(U, _, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(a),
				l = t("../../../../node_modules/prop-types/index.js"),
				f = t.n(l),
				s = t("webpack/sharing/consume/default/react-redux/react-redux"),
				m = t.n(s),
				v = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(v),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				d = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				o = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				g = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				I = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				D = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				O = t.n(D),
				y = t("../react/common/actions/membershipActions.ts"),
				A = t("../react/utils/url.ts"),
				E = t("../react/app/components/Footer.tsx");

			function b(K) {
				for (var G = 1; G < arguments.length; G++) {
					var W = arguments[G] != null ? Object(arguments[G]) : {},
						x = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(W).filter(function(h) {
						return Object.getOwnPropertyDescriptor(W, h).enumerable
					})), x.forEach(function(h) {
						S(K, h, W[h])
					})
				}
				return K
			}

			function S(K, G, W) {
				return G = k(G), G in K ? Object.defineProperty(K, G, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[G] = W, K
			}

			function k(K) {
				var G = N(K, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function N(K, G) {
				if (typeof K != "object" || K === null) return K;
				var W = K[Symbol.toPrimitive];
				if (W !== void 0) {
					var x = W.call(K, G || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(K)
			}
			const w = (0, c.createComponent)(({
					type: K
				}) => ({
					height: K !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				C = (0, c.createComponent)(({
					theme: K,
					margin: G,
					size: W = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: K.colors.gray[3],
					height: G ? "auto" : "100%",
					padding: G ? 0 : K.space[W > 1 ? W - 2 : 0],
					margin: G,
					justifyContent: "center",
					alignItems: "center"
				})),
				P = (0, c.createComponent)(() => ({
					textAlign: "left"
				})),
				L = (0, c.createComponent)(() => ({
					textAlign: "right"
				})),
				j = (0, c.createComponent)(({
					theme: K
				}) => ({
					fontSize: K.fontSizes[6]
				})),
				X = (0, c.createComponent)(({
					theme: K
				}) => ({
					fontSize: K.fontSizes[4]
				})),
				oe = (0, c.createComponent)(({
					theme: K
				}) => ({
					fontSize: K.fontSizes[3]
				})),
				pe = (0, c.createComponent)(({
					theme: K
				}) => ({
					width: "100%",
					height: 125,
					marginTop: K.space[4],
					padding: K.space[2]
				}), "textarea");
			class ce extends r().Component {
				constructor(...G) {
					super(...G);
					S(this, "state", {
						value: "",
						submitted: !1
					}), S(this, "handleTextareaChange", W => {
						this.setState({
							value: W.target.value
						})
					}), S(this, "sendErrToSentry10", async () => {
						try {
							var W, x, h, M;
							const F = ((W = window) === null || W === void 0 || (x = W.bootstrap) === null || x === void 0 || (h = x.data) === null || h === void 0 || (M = h.user) === null || M === void 0 ? void 0 : M.id) || "Unknown",
								q = this.props.eventId || d.eW(),
								ee = {
									name: F,
									email: `${F}@userid.com`,
									comments: this.state.value,
									eventId: q,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: b({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(ee)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (F) {
							console.error(F)
						}
					}), S(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), S(this, "renderContent", W => r().createElement(v.I18n, null, x => r().createElement(w, {
						type: W
					}, r().createElement(C, null, r().createElement(P, null, r().createElement(j, null, x.t("error.internal_issues")), r().createElement(X, null, x.t("error.help_us")), r().createElement(pe, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: h => this.handleTextareaChange(h),
						disabled: this.state.submitted,
						placeholder: x.t("error.give_feedback")
					}), r().createElement(L, null, !this.state.submitted && r().createElement(i.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, x.t("common.submit")), this.state.submitted && r().createElement(oe, null, x.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: G,
						sentryTag: W,
						membershipsList: x
					} = this.props;
					console.error(`SomethingWrong: ${G}`);
					let h = "";
					const M = (0, A.e1)();
					if (M) {
						var F;
						const ee = await x({
								parameters: {
									status: "accepted"
								}
							}),
							ne = ee == null || (F = ee.find(Y => Y.id === M)) === null || F === void 0 ? void 0 : F.roles;
						ne && ne.length && (h = ne.join(", "))
					}
					const q = `ErrorBoundary - ${G}`;
					o.Tb(q, {
						tags: {
							errorBoundary: W,
							normalizedPath: (0, A.Fl)(window.location.pathname),
							roles: h.length ? h : void 0
						}
					}), O().sendEvent("something wrong", {
						error: G,
						roles: h.length ? h : void 0
					})
				}
				render() {
					const {
						type: G
					} = this.props;
					return G === "fullscreen" ? r().createElement("div", null, r().createElement(g.h4, null, r().createElement(a.Link, {
						to: "/"
					}, r().createElement(I.TR, null))), this.renderContent(G), r().createElement(E.Z, null)) : this.renderContent(G)
				}
			}
			ce.propTypes = {
				type: f().oneOf(["fullscreen", "page"]),
				error: f().oneOfType([f().string, f().object]),
				eventId: f().string,
				sentryTag: f().string,
				membershipsList: f().func
			}, _.Z = (0, s.connect)(() => ({}), {
				membershipsList: y.YT
			})(ce)
		},
		"../react/app/providers/storeContainer.js": function(U, _, t) {
			"use strict";
			t.d(_, {
				bh: function() {
					return L
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				r = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				a = t.n(r),
				u = t("../../../../node_modules/redux-thunk/es/index.js"),
				l = t("../../../../node_modules/redux-persist/es/index.js"),
				f = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				s = t("../react/app/rootReducer.js"),
				m = t("../react/app/redux/normalizer.js"),
				v = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				c = t("../react/app/reducerRegistry.js"),
				i = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				d = t("../react/common/sagas/index.js"),
				o = t("../react/app/redux/processActionMiddleware.js"),
				g = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				I = t("../../../../node_modules/is-promise/index.js"),
				D = t.n(I);

			function O(j) {
				for (var X = 1; X < arguments.length; X++) {
					var oe = arguments[X] != null ? Object(arguments[X]) : {},
						pe = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(oe).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(oe, ce).enumerable
					})), pe.forEach(function(ce) {
						y(j, ce, oe[ce])
					})
				}
				return j
			}

			function y(j, X, oe) {
				return X = A(X), X in j ? Object.defineProperty(j, X, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[X] = oe, j
			}

			function A(j) {
				var X = E(j, "string");
				return typeof X == "symbol" ? X : String(X)
			}

			function E(j, X) {
				if (typeof j != "object" || j === null) return j;
				var oe = j[Symbol.toPrimitive];
				if (oe !== void 0) {
					var pe = oe.call(j, X || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (X === "string" ? String : Number)(j)
			}
			const b = {
					key: "cf-redux-store",
					storage: f.Z,
					whitelist: ["accountAccess", "invite"]
				},
				S = (0, i.ZP)(),
				N = [({
					dispatch: j
				}) => X => oe => D()(oe) ? oe.then(pe => j(pe)) : X(oe), S, u.Z, o.Z, m.qR],
				w = j => (0, l.Wq)(b, O({}, s.Z, j));

			function C() {
				const j = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					oe = e.compose((0, e.applyMiddleware)(...N), v.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					pe = {},
					ce = (0, e.createStore)(w(c.Z.getReducers()), pe, oe);
				S.run(d.Z), (0, l.p5)(ce);
				const G = (t.g.bootstrap || {}).data || {};
				return ce.dispatch((0, g.mW)("user", G.user)), ce
			}
			let P;
			c.Z.setChangeListener(j => {
				var X;
				P && ((X = P) === null || X === void 0 ? void 0 : X.replaceReducer) && (P.replaceReducer(w(j)), (0, l.p5)(P))
			});

			function L() {
				return P || (P = C()), P
			}
		},
		"../react/app/redux/index.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
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
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e);
			const a = () => (0, e.useStore)(),
				u = () => a().getState(),
				l = () => (0, e.useDispatch)(),
				f = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(U, _, t) {
			"use strict";
			t.d(_, {
				$J: function() {
					return i
				},
				Oy: function() {
					return c
				},
				SC: function() {
					return v
				},
				ZP: function() {
					return d
				},
				dJ: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				a = t.n(r);

			function u(o) {
				for (var g = 1; g < arguments.length; g++) {
					var I = arguments[g] != null ? Object(arguments[g]) : {},
						D = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(I).filter(function(O) {
						return Object.getOwnPropertyDescriptor(I, O).enumerable
					})), D.forEach(function(O) {
						l(o, O, I[O])
					})
				}
				return o
			}

			function l(o, g, I) {
				return g = f(g), g in o ? Object.defineProperty(o, g, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[g] = I, o
			}

			function f(o) {
				var g = s(o, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function s(o, g) {
				if (typeof o != "object" || o === null) return o;
				var I = o[Symbol.toPrimitive];
				if (I !== void 0) {
					var D = I.call(o, g || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(o)
			}
			const m = u({}, r),
				v = (o, g, I, D = {}) => {
					const O = o === "delete" ? "del" : o.toLowerCase();
					return I && O !== "del" && (D.body = I), m[O](g, D)
				},
				n = (o, g) => (o.meta.params = g, o),
				c = (o, g, I, D, {
					body: O = {}
				}) => {
					const {
						result: y,
						messages: A,
						result_info: E
					} = O, b = Object.values(g);
					if (o.meta.method === "delete") {
						const S = b[b.length - 1];
						o.meta.id = typeof S == "object" ? S.id : S
					}
					return o.payload = y, A && (o.meta.messages = A), b.length && (o.meta.params = g), E && (o.meta.paginationData = {
						info: E,
						actionParameters: b,
						options: I[0],
						insertionOffset: 0
					}), o
				},
				i = (o, g, I, D, O) => (o.payload = O && O.body && O.body.errors, o.meta.messages = O && O.body && O.body.messages, o.meta.params = g, o.apiError = O, o);

			function d(o, g, I, D) {
				const O = (0, e.RM)(o, g, I, D).apiFetch(v).on("start", n).on("success", c).on("error", i),
					y = O.mock;
				return O.mock = A => (y((...E) => {
					const b = A(...E);
					return b && typeof b == "object" && "result" in b ? b : {
						result: b
					}
				}), O), O
			}
		},
		"../react/app/redux/normalizer.js": function(U, _, t) {
			"use strict";
			t.d(_, {
				P1: function() {
					return v
				},
				jQ: function() {
					return s
				},
				qR: function() {
					return n
				},
				uc: function() {
					return m
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				r = t("../react/pages/workers/entityTypes.ts"),
				a = t("../react/pages/email/types.ts"),
				u = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				f = t.n(l);
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
				m = c => c.entities,
				v = (...c) => (0, u.P1)(s, m, ...c),
				n = (0, u.QB)(s)
		},
		"../react/app/redux/utils.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				F: function() {
					return a
				},
				_: function() {
					return r
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const r = u => (l, f, s) => (0, e.SC)(l, f, s, {
					hideErrorAlert: !0
				}).catch(u),
				a = u => l => {
					if (l.status === u) return l;
					throw l
				}
		},
		"../react/common/actionTypes.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Cm: function() {
					return f
				},
				Cz: function() {
					return r
				},
				HI: function() {
					return s
				},
				Li: function() {
					return v
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return a
				},
				Yc: function() {
					return c
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
				r = "NOTIFICATION_CLOSE",
				a = "MODAL_OPEN",
				u = "MODAL_CLOSE",
				l = "TOGGLE_ON",
				f = "TOGGLE_OFF",
				s = "SET_ACTIVE",
				m = "CLEAR_ACTIVE",
				v = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let c = function(i) {
				return i.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", i.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", i.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", i.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", i.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", i.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", i.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", i.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", i.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", i
			}({})
		},
		"../react/common/actions/activeActions.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				I: function() {
					return r
				},
				n: function() {
					return a
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = (u, l) => ({
					type: e.HI,
					activeKey: u,
					activeValue: l
				}),
				a = u => ({
					type: e.s1,
					activeKey: u
				})
		},
		"../react/common/actions/membershipActions.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				AX: function() {
					return i
				},
				YT: function() {
					return v
				},
				ct: function() {
					return s
				},
				d6: function() {
					return n
				},
				kt: function() {
					return c
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/common/constants/index.ts");

			function a(d) {
				for (var o = 1; o < arguments.length; o++) {
					var g = arguments[o] != null ? Object(arguments[o]) : {},
						I = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(g).filter(function(D) {
						return Object.getOwnPropertyDescriptor(g, D).enumerable
					})), I.forEach(function(D) {
						u(d, D, g[D])
					})
				}
				return d
			}

			function u(d, o, g) {
				return o = l(o), o in d ? Object.defineProperty(d, o, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[o] = g, d
			}

			function l(d) {
				var o = f(d, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(d, o) {
				if (typeof d != "object" || d === null) return d;
				var g = d[Symbol.toPrimitive];
				if (g !== void 0) {
					var I = g.call(d, o || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(d)
			}
			const s = d => {
					const o = d.payload.map(g => a({}, g, {
						membershipId: g.id,
						id: g.account.id
					}));
					return a({}, d, {
						payload: o
					})
				},
				m = d => {
					const o = s(d);
					return Array.isArray(o.payload) ? a({}, d, {
						payload: o.payload[0]
					}) : a({}, d, {
						payload: null
					})
				},
				v = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", s),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				c = (...d) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: d
				}),
				i = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", m)
		},
		"../react/common/actions/modalActions.ts": function(U, _, t) {
			"use strict";
			t.r(_), t.d(_, {
				closeModal: function() {
					return u
				},
				openModal: function() {
					return a
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = {
				replace: !0
			};

			function a(l, f, s = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: l,
						props: f
					},
					options: s
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
		"../react/common/actions/notificationsActions.ts": function(U, _, t) {
			"use strict";
			t.r(_), t.d(_, {
				add: function() {
					return l
				},
				error: function() {
					return v
				},
				info: function() {
					return s
				},
				success: function() {
					return f
				},
				warn: function() {
					return m
				}
			});
			var e = t("../react/common/actionTypes.ts");

			function r(n) {
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

			function l(n, c, i = {}) {
				return i = i || {},
					function(d) {
						let o = u++,
							g = {
								id: o,
								type: n,
								message: c,
								delay: i.delay,
								persist: i.persist === void 0 ? !1 : i.persist,
								closable: i.closable === void 0 ? !0 : i.closable,
								onClose() {
									d(a(o)), i.onClose && i.onClose.apply(null, arguments)
								}
							};
						d(r(g))
					}
			}

			function f(n, c) {
				return l("success", n, c)
			}

			function s(n, c) {
				return l("info", n, c)
			}

			function m(n, c) {
				return l("warning", n, c)
			}

			function v(n, c) {
				return l("error", n, c)
			}
		},
		"../react/common/actions/userActions.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				BT: function() {
					return s
				},
				Ut: function() {
					return D
				},
				V_: function() {
					return O
				},
				Y9: function() {
					return g
				},
				Z0: function() {
					return A
				},
				mp: function() {
					return I
				},
				r3: function() {
					return y
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/app/redux/utils.ts");

			function a(E) {
				for (var b = 1; b < arguments.length; b++) {
					var S = arguments[b] != null ? Object(arguments[b]) : {},
						k = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(S).filter(function(N) {
						return Object.getOwnPropertyDescriptor(S, N).enumerable
					})), k.forEach(function(N) {
						u(E, N, S[N])
					})
				}
				return E
			}

			function u(E, b, S) {
				return b = l(b), b in E ? Object.defineProperty(E, b, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[b] = S, E
			}

			function l(E) {
				var b = f(E, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function f(E, b) {
				if (typeof E != "object" || E === null) return E;
				var S = E[Symbol.toPrimitive];
				if (S !== void 0) {
					var k = S.call(E, b || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(E)
			}
			const s = (0, e.C)("user").get`/user`,
				m = (0, e.C)("user").patch`/user`,
				v = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				c = (0, e.C)("user").post`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/two_factor_authentication`,
				d = (0, e.C)("user").delete`/user/two_factor_authentication`,
				o = (0, e.C)("user").put`/user/email`;

			function g(...E) {
				return o(...E)
			}
			const I = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				D = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(E => a({}, E, {
					body: a({}, E.body, {
						result: {}
					})
				}))),
				O = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				y = (0, e.C)("userDetails").get`/user/details`,
				A = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(U, _, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				r = t("../react/utils/zoneLevelAccess.ts");
			const a = ({
				legacyPermission: u,
				canAccess: l,
				children: f,
				render: s
			}) => {
				const m = !!(0, r.P)();
				let v;
				typeof l == "boolean" && l !== void 0 && m ? v = {
					read: l,
					list: l,
					create: l,
					update: l,
					delete: l,
					sign: l
				} : v = (0, e.Z)(u);
				const n = s || f;
				return n ? n(v) : null
			};
			_.Z = a
		},
		"../react/common/components/AccessCheck/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				E1: function() {
					return r
				},
				L8: function() {
					return n
				},
				W9: function() {
					return v
				},
				ZZ: function() {
					return f
				},
				j: function() {
					return c
				},
				jX: function() {
					return s
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
				r = "com.cloudflare.api.account.",
				a = "com.cloudflare.edge.",
				u = "com.cloudflare.api.account.zone.",
				l = ["com.cloudflare.api.app.manage"];
			let f = function(i) {
				return i.read = "read", i.list = "list", i.create = "create", i.update = "update", i.delete = "delete", i.sign = "sign", i.refresh = "refresh", i
			}({});
			const s = (i, d) => `${r}${i?i+".":""}${d}`,
				m = (i, d) => `${u}${i?i+".":""}${d}`,
				v = (i, d) => `${a}${i}.${d}`,
				n = (i = "") => `${r}${i}`,
				c = (i = "") => `${u}${i}`
		},
		"../react/common/components/AccessCheck/index.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
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
					return r.Z
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
				r = t("../react/common/components/AccessCheck/AccessCheck.tsx"),
				a = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(U, _, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");

			function f(s) {
				const {
					read: m,
					edit: v
				} = (0, a.p4)(u.Yj)(s);
				let n = v;
				if (s != "zone_versioning") {
					const i = (0, a.p4)(l.G);
					(i == null ? void 0 : i.isLocked) && (n = !1)
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
			_.Z = f
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				WL: function() {
					return i
				},
				hT: function() {
					return g
				},
				kd: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				r = t("../react/common/selectors/accountSelectors.ts"),
				a = t("../react/pages/home/members/utils.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");
			const f = {
					allow: "allow",
					deny: "deny"
				},
				s = 0,
				m = 1,
				v = 2,
				n = 3;

			function c(b, S, k, N) {
				let w = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					C;
				for (C in w) w[C] = i(b, `${S}.${C}`, k, N);
				return w
			}

			function i(b, S, k, N) {
				var w;
				if (d(S) && !o(S)) {
					const X = (0, l.G)(b);
					if (X == null ? void 0 : X.isLocked) return !1
				}
				const C = (w = (0, r.D0)(b)) === null || w === void 0 ? void 0 : w.id,
					P = C ? [`com.cloudflare.api.account.${C}`] : void 0,
					L = (0, a.vq)(C);
				return !!I(b, L, S, k, N || P)
			}

			function d(b) {
				return ![u.ZZ.read, u.ZZ.list].some(S => b.endsWith(S))
			}

			function o(b) {
				return b.includes("zone.versioning")
			}

			function g(b) {
				const S = (0, r.Ko)(b);
				let k = !1;
				return S == null || S.forEach(N => {
					N.access === f.allow && N.permission_groups.forEach(w => {
						var C;
						(w == null || (C = w.meta) === null || C === void 0 ? void 0 : C.scopes) === u.u1 && (k = !0)
					})
				}), k
			}

			function I(b, S, k, N, w) {
				const C = (0, r.Ko)(b),
					P = {};
				C == null || C.forEach(oe => {
					var pe;
					const ce = oe.access;
					let K = s;
					if (k && oe.permission_groups.forEach(G => {
							var W, x;
							S == null || (W = S.find(h => h.id === G.id)) === null || W === void 0 || (x = W.permissions) === null || x === void 0 || x.forEach(h => {
								K = Math.max(K, D(h, k))
							})
						}), K !== s && !!N) {
						let G = s;
						oe.resource_groups.forEach(W => {
							G = Math.max(G, y(W.scope, N, w))
						}), K = G === s ? G : K + G
					}(P == null || (pe = P[ce]) === null || pe === void 0 ? void 0 : pe[K]) || (0, e.Z)(P, [ce, K], []), P[ce][K].push(oe)
				});
				const L = P[f.allow] && Object.keys(P[f.allow]).map(oe => parseInt(oe)),
					j = P[f.deny] && Object.keys(P[f.deny]).map(oe => parseInt(oe)),
					X = Math.max.apply(Math, L);
				return X === s || Math.max.apply(Math, j) >= X ? null : P[f.allow][X]
			}

			function D(b, S) {
				if (b.key === S || O(b.key, S)) return n;
				for (const k of (b == null ? void 0 : b.implies) || []) {
					let N = D(k, S);
					if (N > s) return N
				}
				return s
			}

			function O(b, S) {
				const k = S == null ? void 0 : S.lastIndexOf(".");
				return k === -1 ? !1 : (S == null ? void 0 : S.substring(0, k)) + ".*" === b
			}

			function y(b, S, k) {
				var N;
				let w = s;
				if (b == null || (N = b.objects) === null || N === void 0 || N.forEach(C => {
						w = Math.max(w, E(C, S))
					}), w === s) return w;
				if (b.key !== "*") switch (!0) {
					case A(b.key, k) > s:
					case (!(k == null ? void 0 : k.length) && w === n):
						break;
					case (w === m && A(b.key, [S]) > s):
						w = A(b.key, [S]);
						break;
					default:
						return s
				}
				for (const C of b.subset_of || [])
					if (A(C.key, k) === s) return s;
				return w
			}

			function A(b, S = []) {
				for (const k of S || []) {
					if (b === k) return n;
					if (O(b, k)) return v
				}
				return s
			}

			function E(b, S) {
				return b.key === S ? n : b.key === "*" ? m : O(b.key, S) ? v : s
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(U, _, t) {
			"use strict";
			t.d(_, {
				a: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e),
				a = t("../react/common/selectors/accountSelectors.ts");
			const u = f => {
					if (typeof f != "string") throw new Error("invalid Param Type provided");
					const s = f.slice(1).split(":");
					if (s.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: s[0],
						value: s[1]
					}
				},
				l = (f, s) => {
					const {
						resourceId: m,
						accountId: v,
						legacyPermission: n
					} = s;
					let {
						read: c,
						edit: i
					} = s;
					const d = {};
					n && (i = `#${n}:edit`, c = `#${n}:read`);
					const o = m || v;
					if (c) {
						const g = Array.isArray(c) ? c : [c];
						d.isReadable = g.some(I => {
							const D = u(I);
							return (0, a.DT)(f, o, O => !!(O[D.key] && O[D.key][D.value]))
						})
					}
					if (i) {
						const g = Array.isArray(i) ? i : [i];
						d.isEditable = g.some(I => {
							const D = u(I);
							return (0, a.DT)(f, o, O => !!(O[D.key] && O[D.key][D.value]))
						})
					}
					return d
				};
			_.Z = (0, e.connect)(l)
		},
		"../react/common/components/AccessControl/index.js": function(U, _, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				r = t.n(e),
				a = t("../react/app/HoCs/withEntities.tsx"),
				u = t("../react/common/components/AccessControl/SAAConnect.js");

			function l(c) {
				for (var i = 1; i < arguments.length; i++) {
					var d = arguments[i] != null ? Object(arguments[i]) : {},
						o = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && o.push.apply(o, Object.getOwnPropertySymbols(d).filter(function(g) {
						return Object.getOwnPropertyDescriptor(d, g).enumerable
					})), o.forEach(function(g) {
						f(c, g, d[g])
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
					var o = d.call(c, i || "default");
					if (typeof o != "object") return o;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}

			function v(c) {
				const d = ["isReadable", "isEditable"].reduce((o, g) => c.hasOwnProperty(g) ? l({}, o, {
					[g]: c[g]
				}) : o, {});
				return c.children(d)
			}
			v.propTypes = {
				resourceType: r().string,
				resourceId: r().string,
				read: r().oneOfType([r().string, r().array]),
				edit: r().oneOfType([r().string, r().array]),
				accountId: r().string,
				isReadable: r().bool,
				isEditable: r().bool,
				children: r().func
			};
			const n = (0, a.Z)((0, u.Z)(v));
			n.displayName = "AccessControl", _.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				PP: function() {
					return c
				},
				RJ: function() {
					return s
				},
				tz: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const f = () => m.test(window.location.pathname) || a.E.has(u.Qq),
				s = () => a.E.get(u.Qq),
				m = /^\/login\/apple(\/)?/,
				n = [m, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				c = () => {
					let d = !1;
					n.forEach(g => {
						if (g.test(window.location.pathname)) {
							d = !0;
							return
						}
					});
					const o = f() && d;
					return o && (0, l.C8)(l.LF.OFF), o
				},
				i = d => {
					d && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let o = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					d && (o = o + `&jwt=${d}`), window.location.href = o
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				oG: function() {
					return o
				},
				sN: function() {
					return m.sN
				},
				v2: function() {
					return m.v2
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				f = t.n(l),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("../react/common/components/Dropdown/index.tsx"),
				v = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(g) {
					for (var I = 1; I < arguments.length; I++) {
						var D = arguments[I];
						for (var O in D) Object.prototype.hasOwnProperty.call(D, O) && (g[O] = D[O])
					}
					return g
				}, n.apply(this, arguments)
			}

			function c(g, I) {
				if (g == null) return {};
				var D = i(g, I),
					O, y;
				if (Object.getOwnPropertySymbols) {
					var A = Object.getOwnPropertySymbols(g);
					for (y = 0; y < A.length; y++) O = A[y], !(I.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(g, O) || (D[O] = g[O]))
				}
				return D
			}

			function i(g, I) {
				if (g == null) return {};
				var D = {},
					O = Object.keys(g),
					y, A;
				for (A = 0; A < O.length; A++) y = O[A], !(I.indexOf(y) >= 0) && (D[y] = g[y]);
				return D
			}
			const d = (0, s.createStyledComponent)(({
				theme: g
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${g.radii[2]}px 0 0 ${g.radii[2]}px`,
					borderRight: `1px solid ${g.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${g.radii[2]}px ${g.radii[2]}px 0`,
					paddingRight: g.space[2],
					paddingLeft: g.space[2]
				},
				"& button": {
					color: (0, v.Yc)() ? g.colors.text : void 0
				},
				"& button:hover": {
					color: (0, v.Yc)() ? g.colors.text : void 0
				}
			}));

			function o(g) {
				let {
					menu: I,
					containerProps: D,
					disabled: O,
					disabledDropdown: y = O
				} = g, A = c(g, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: E
				} = (0, l.useI18n)();
				return r().createElement(d, n({}, D, {
					role: "group"
				}), r().createElement(a.zx, n({}, A, {
					disabled: O
				})), r().createElement(m.Lt, {
					trigger: r().createElement(a.zx, {
						type: A.type,
						"aria-haspopup": "menu",
						disabled: y
					}, r().createElement(u.J, {
						type: "caret-down",
						label: E("common.more"),
						size: 12
					})),
					menu: I
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				v: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = t("../react/common/hooks/useIntersectionObserver.ts");

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(m) {
					for (var v = 1; v < arguments.length; v++) {
						var n = arguments[v];
						for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (m[c] = n[c])
					}
					return m
				}, f.apply(this, arguments)
			}

			function s(m) {
				const v = (0, e.useRef)(null),
					[n, c] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const d = v.current;
					if (d) {
						const {
							bottom: o
						} = d.getBoundingClientRect();
						o > window.innerHeight && c(!0)
					}
				}, []);
				const i = (0, l.S)(d => {
					for (const o of d) o.intersectionRatio < 1 && c(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const d = v.current;
					if (d && i) return i.observe(d), () => {
						i.unobserve(d)
					}
				}, [i]), r().createElement(a.ZC, f({
					role: "menu",
					innerRef: v,
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
		"../react/common/components/Dropdown/MenuItem.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				s: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(u);

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(D) {
					for (var O = 1; O < arguments.length; O++) {
						var y = arguments[O];
						for (var A in y) Object.prototype.hasOwnProperty.call(y, A) && (D[A] = y[A])
					}
					return D
				}, f.apply(this, arguments)
			}

			function s(D, O) {
				if (D == null) return {};
				var y = m(D, O),
					A, E;
				if (Object.getOwnPropertySymbols) {
					var b = Object.getOwnPropertySymbols(D);
					for (E = 0; E < b.length; E++) A = b[E], !(O.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(D, A) || (y[A] = D[A]))
				}
				return y
			}

			function m(D, O) {
				if (D == null) return {};
				var y = {},
					A = Object.keys(D),
					E, b;
				for (b = 0; b < A.length; b++) E = A[b], !(O.indexOf(E) >= 0) && (y[E] = D[E]);
				return y
			}

			function v(D) {
				for (var O = 1; O < arguments.length; O++) {
					var y = arguments[O] != null ? Object(arguments[O]) : {},
						A = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(y).filter(function(E) {
						return Object.getOwnPropertyDescriptor(y, E).enumerable
					})), A.forEach(function(E) {
						n(D, E, y[E])
					})
				}
				return D
			}

			function n(D, O, y) {
				return O = c(O), O in D ? Object.defineProperty(D, O, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[O] = y, D
			}

			function c(D) {
				var O = i(D, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function i(D, O) {
				if (typeof D != "object" || D === null) return D;
				var y = D[Symbol.toPrimitive];
				if (y !== void 0) {
					var A = y.call(D, O || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(D)
			}
			const d = ({
					theme: D
				}) => {
					const O = {
						cursor: "pointer",
						background: D.colors.gray[9],
						color: D.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: D.space[2],
						background: D.colors.background,
						color: D.colors.gray[3],
						fontSize: D.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						'&:hover:not(:disabled):not([aria-disabled="true"])': O,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': v({}, O, {
							boxShadow: "none",
							borderRadius: 0
						}),
						'&:is(:disabled, [aria-disabled="true"])': {
							color: D.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				o = (0, a.createComponent)(d, "a"),
				g = (0, a.createComponent)(d, "button");

			function I(D) {
				let {
					disabled: O = !1
				} = D, y = s(D, ["disabled"]);
				const A = (0, u.useHistory)(),
					E = {
						role: "menuitem"
					};
				if ("href" in y && typeof y.href == "string") return r().createElement(o, f({
					"aria-disabled": O
				}, E, y, {
					href: O ? void 0 : y.href,
					onClick: S => {
						var k;
						if (O) return S.stopPropagation();
						S.preventDefault(), (k = y.onClick) === null || k === void 0 || k.call(y, S), A.push(y.href)
					}
				}));
				var b;
				return r().createElement(g, f({
					type: (b = y.type) !== null && b !== void 0 ? b : "button"
				}, E, y, {
					disabled: O
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(U, _, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/prop-types/index.js"),
				u = t.n(a),
				l = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const f = ({
				children: s
			}) => r().createElement(l.xu, {
				height: 411
			}, s);
			f.propTypes = {
				children: u().node
			}, _.Z = f
		},
		"../react/common/components/ModalManager.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				ZP: function() {
					return o
				},
				dd: function() {
					return i
				},
				vR: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-redux/react-redux");
			const u = g => g.application.modals;
			var l = t("../react/common/actions/modalActions.ts"),
				f = t("../../../../node_modules/swr/core/dist/index.mjs"),
				s = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(g) {
					for (var I = 1; I < arguments.length; I++) {
						var D = arguments[I];
						for (var O in D) Object.prototype.hasOwnProperty.call(D, O) && (g[O] = D[O])
					}
					return g
				}, m.apply(this, arguments)
			}
			const v = r().createContext(null);
			class n extends r().Component {
				render() {
					const {
						modals: I,
						closeModal: D
					} = this.props;
					return r().createElement(r().Fragment, null, I.map(({
						ModalComponent: O,
						props: y = {},
						id: A
					}) => {
						const E = () => {
							typeof y.onClose == "function" && y.onClose(), D(O)
						};
						return r().createElement(v.Provider, {
							key: A,
							value: {
								closeModal: E
							}
						}, r().createElement(f.J$, {
							value: s.ZP
						}, r().createElement(O, m({}, y, {
							isOpen: !0,
							closeModal: E
						}))))
					}))
				}
			}

			function c() {
				const g = r().useContext(v);
				if (!g) throw new Error("useModalContext must be used within a ModalContext");
				return g
			}

			function i() {
				const g = (0, a.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...I) {
						return g(l.openModal(...I))
					}, [g]),
					closeModal: (0, e.useCallback)(function(...I) {
						return g(l.closeModal(...I))
					}, [g])
				}
			}
			var o = (0, a.connect)(g => ({
				modals: u(g)
			}), l)(n)
		},
		"../react/common/components/Page.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				Z: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../node_modules/@cloudflare/component-page/es/index.js");

			function u(l) {
				return r().createElement(a.T3, l)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return m
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
					return l
				},
				if: function() {
					return r
				},
				q6: function() {
					return a
				},
				w_: function() {
					return u
				},
				zl: function() {
					return s
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				r = "time-window",
				a = "date-from",
				u = "date-to",
				l = "from",
				f = "to",
				s = "all",
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
			let v = function(c) {
					return c.ADD_FILTER = "Add filter", c.EDIT_FILTER = "Edit filter", c.REMOVE_FILTER = "Remove filter", c.CHANGE_TIME = "Change time window", c.FEED_PAGE_FORWARD = "Activity feed next page", c.FEED_PAGE_BACKWARD = "Activity feed previous page", c.FEED_EXPAND_EVENT = "Activity feed expand event", c.FEED_CLOSE_EVENT = "Activity feed close event", c.FEED_EXPAND_MATCHES = "Activity feed expand matches", c.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", c.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", c.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", c.DOWNLOAD_FEED = "Activity feed download", c
				}({}),
				n = function(c) {
					return c.TIMESERIES = "Timeseries Chart", c.DISTRIBUTION = "Source Distribution Chart", c.TOP_N = "Top N", c.FILTER_BAR = "Filter Bar", c.SCORES_DISTRIBUTIONS = "Scores Distributions", c.INSIGHTS = "Insights", c.RL_HISTOGRAM = "Rate Limit Histogram", c
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Cf: function() {
					return v
				},
				hJ: function() {
					return m
				},
				ys: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						d = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(i).filter(function(o) {
						return Object.getOwnPropertyDescriptor(i, o).enumerable
					})), d.forEach(function(o) {
						u(n, o, i[o])
					})
				}
				return n
			}

			function u(n, c, i) {
				return c = l(c), c in n ? Object.defineProperty(n, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[c] = i, n
			}

			function l(n) {
				var c = f(n, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(n, c) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var d = i.call(n, c || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const m = ({
					name: n,
					additionalData: c = {}
				}) => {
					r().sendEvent(n, a({}, c || {}))
				},
				v = () => {
					var n;
					return (n = Object.values(s)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				v: function() {
					return e
				}
			});
			let e = function(r) {
				return r.FIELD = "change field", r.OPERATOR = "change operator", r
			}({})
		},
		"../react/common/constants/billing/index.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
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
					return v
				},
				Hw: function() {
					return f
				},
				Ed: function() {
					return l
				},
				bi: function() {
					return r
				},
				Gs: function() {
					return d
				},
				hQ: function() {
					return s
				},
				SP: function() {
					return m
				}
			});
			let e = function(o) {
				return o.page_rules = "page_rules", o.automatic_platform_optimization = "automatic_platform_optimization", o
			}({});
			const r = "page_rules",
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
				f = {
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
			var n = t("../react/common/constants/billing/tax.ts"),
				c = t("../react/common/constants/billing/tracking.ts"),
				i = t("../react/common/constants/billing/workers.ts");
			const d = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
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
		"../react/common/constants/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Dk: function() {
					return d
				},
				Dy: function() {
					return o
				},
				E_: function() {
					return f
				},
				Lv: function() {
					return g
				},
				S4: function() {
					return l
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return v
				},
				Y1: function() {
					return s
				},
				p6: function() {
					return m
				},
				q0: function() {
					return u
				},
				rg: function() {
					return I
				},
				sJ: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const u = "healthy",
				l = "degraded",
				f = "critical",
				s = "unknown",
				m = "not-monitored",
				v = r().from({
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
				c = {
					f: v.FREE,
					p: v.PRO,
					b: v.BIZ
				},
				i = "marketing-pt",
				d = () => {
					const O = a.Z.get(i);
					if (!!O) return c[O]
				},
				o = ["gov"],
				g = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				I = "banner-notification-interactions",
				D = null
		},
		"../react/common/constants/index.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
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
				rg: function() {
					return e.rg
				},
				sJ: function() {
					return e.sJ
				}
			});
			var e = t("../react/common/constants/constants.ts"),
				r = t("../react/common/constants/billing/index.ts")
		},
		"../react/common/constants/roles.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				V: function() {
					return e
				}
			});
			let e = function(r) {
				return r.SUPER_ADMINISTRATOR_ALL_PRIVILEGES = "Super Administrator - All Privileges", r.CLOUDFLARE_ACCESS = "Cloudflare Access", r.CLOUDFLARE_ACCESS_APP_ADMIN = "Cloudflare Access App Admin", r.CLOUDFLARE_ACCESS_IDENTITY_PROVIDER_ADMIN = "Cloudflare Access Identity Provider Admin", r.ADMINISTRATOR = "Administrator", r.ADMINISTRATOR_READ_ONLY = "Administrator Read Only", r.ANALYTICS = "Analytics", r.API_GATEWAY = "API Gateway", r.API_GATEWAY_READ = "API Gateway Read", r.AUDIT_LOGS_VIEWER = "Audit Logs Viewer", r.BILLING = "Billing", r.BOT_MANAGEMENT = "Bot Management", r.BOT_MANAGEMENT_ACCOUNT_WIDE = "Bot Management (Account-Wide)", r.CACHE_DOMAIN_PURGE = "Cache Domain Purge", r.CACHE_PURGE = "Cache Purge", r.SSL_TLS_CACHING_PERFORMANCE_PAGE_RULES_AND_CUSTOMIZATION = "SSL/TLS, Caching, Performance, Page Rules, and Customization", r.EMAIL_CONFIGURATION_ADMIN = "Email Configuration Admin", r.EMAIL_INTEGRATION_ADMIN = "Email Integration Admin", r.EMAIL_SECURITY_ANALYST = "Email Security Analyst", r.EMAIL_SECURITY_READONLY = "Email Security Readonly", r.EMAIL_SECURITY_REPORTING = "Email Security Reporting", r.CLOUDFORCE_ONE_ADMIN = "Cloudforce One Admin", r.CLOUDFORCE_ONE_READ = "Cloudforce One Read", r.DNS = "DNS", r.DOMAIN_ADMINISTRATOR = "Domain Administrator", r.DOMAIN_ADMINISTRATOR_READ_ONLY = "Domain Administrator Read Only", r.DOMAIN_API_GATEWAY = "Domain API Gateway", r.DOMAIN_API_GATEWAY_READ = "Domain API Gateway Read", r.DOMAIN_DNS = "Domain DNS", r.DOMAIN_PAGE_SHIELD = "Domain Page Shield", r.DOMAIN_PAGE_SHIELD_READ = "Domain Page Shield Read", r.MAGIC_NETWORK_MONITORING_ADMIN = "Magic Network Monitoring Admin", r.MAGIC_NETWORK_MONITORING = "Magic Network Monitoring", r.MAGIC_NETWORK_MONITORING_READ_ONLY = "Magic Network Monitoring Read-Only", r.CLOUDFLARE_GATEWAY = "Cloudflare Gateway", r.CLOUDFLARE_WORKER_ADMIN = "Cloudflare Worker Admin", r.HTTP_APPLICATIONS = "HTTP Applications", r.HTTP_APPLICATIONS_READ = "HTTP Applications Read", r.CLOUDFLARE_IMAGES = "Cloudflare Images", r.LOAD_BALANCER = "Load Balancer", r.LOG_SHARE = "Log Share", r.NETWORK_SERVICES_WRITE_MAGIC = "Network Services Write (Magic)", r.NETWORK_SERVICES_READ_MAGIC = "Network Services Read (Magic)", r.MINIMAL_ACCOUNT_ACCESS = "Minimal Account Access", r.PAGE_SHIELD = "Page Shield", r.PAGE_SHIELD_READ = "Page Shield Read", r.HYPERDRIVE_ADMIN = "Hyperdrive Admin", r.HYPERDRIVE_READONLY = "Hyperdrive Readonly", r.CLOUDFLARE_R2_ADMIN = "Cloudflare R2 Admin", r.CLOUDFLARE_R2_READ = "Cloudflare R2 Read", r.LOG_SHARE_READER = "Log Share Reader", r.CLOUDFLARE_SNIPPETS_ADMIN = "Cloudflare Snippets Admin", r.CLOUDFLARE_STREAM = "Cloudflare Stream", r.CLOUDFLARE_ZERO_TRUST = "Cloudflare Zero Trust", r.CLOUDFLARE_DEX = "Cloudflare DEX", r.CLOUDFLARE_ZERO_TRUST_PII = "Cloudflare Zero Trust PII", r.CLOUDFLARE_ZERO_TRUST_READ_ONLY = "Cloudflare Zero Trust Read Only", r.CLOUDFLARE_ZERO_TRUST_REPORTING = "Cloudflare Zero Trust Reporting", r.TRANSFORM_RULES = "Transform Rules", r.TRUST_AND_SAFETY = "Trust and Safety", r.TURNSTILE = "Turnstile", r.TURNSTILE_READ = "Turnstile Read", r.VECTORIZE_ADMIN = "Vectorize Admin", r.VECTORIZE_READONLY = "Vectorize Readonly", r.FIREWALL = "Firewall", r.WAITING_ROOM_ADMIN = "Waiting Room Admin", r.WAITING_ROOM_READ = "Waiting Room Read", r.WORKERS_ADMIN = "Workers Admin", r.ZARAZ_ADMIN = "Zaraz Admin", r.ZARAZ_EDIT = "Zaraz Edit", r.ZARAZ_READONLY = "Zaraz Readonly", r.ZONE_VERSIONING = "Zone Versioning", r.ZONE_VERSIONING_ACCOUNT_WIDE = "Zone Versioning (Account-Wide)", r.ZONE_VERSIONING_READ = "Zone Versioning Read", r.ZONE_VERSIONING_READ_ACCOUNT_WIDE = "Zone Versioning Read (Account-Wide)", r.DOMAIN_WAITING_ROOM_ADMIN = "Domain Waiting Room Admin", r.DOMAIN_WAITING_ROOM_READ = "Domain Waiting Room Read", r.BRAND_PROTECTION = "Brand Protection", r
			}({})
		},
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				QK: function() {
					return e
				},
				dy: function() {
					return r
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
			const r = {
					http_config_settings: "configuration",
					http_request_dynamic_redirect: "redirect",
					http_request_cache_settings: "cache",
					http_request_origin: "origin",
					http_request_late_transform: "modify request header",
					http_request_transform: "rewrite url",
					http_response_headers_transform: "modify response header",
					http_response_compression: "compression",
					http_custom_errors: "custom errors",
					http_ratelimit: "rate limiting",
					http_request_firewall_custom: "custom",
					http_request_firewall_managed: "managed"
				},
				a = (l, f, s = !1) => {
					var m;
					return `${f} ${(m=r[l])!==null&&m!==void 0?m:l} ${s?"ruleset":"rule"}${f===e.GET?"s":""}`
				},
				u = () => {
					var l;
					return (l = Object.keys(r).reduce((f, s) => {
						const m = Object.values(e).reduce((v, n) => (v.push(a(s, n)), v.push(a(s, n, !0)), v), []);
						return f.concat(m)
					}, [])) === null || l === void 0 ? void 0 : l.flat()
				}
		},
		"../react/common/hooks/useAccountId.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				F: function() {
					return l
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/accountSelectors.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(a);

			function l() {
				var f;
				const {
					accountId: s
				} = (0, a.useParams)(), m = (0, e.p4)(r.D0);
				if (s === void 0 && !m) throw new Error("Account ID not found in URL params");
				return (f = s) !== null && f !== void 0 ? f : m == null ? void 0 : m.id
			}
		},
		"../react/common/hooks/useActiveState.ts": function(U, _, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				r = t("webpack/sharing/consume/default/react-redux/react-redux"),
				a = t.n(r),
				u = t("../react/common/selectors/commonSelectors.ts");
			const l = f => {
				const s = (0, r.useDispatch)();
				return [(0, r.useSelector)((0, u.cZ)(f)), n => {
					s((0, e.I)(f, n))
				}]
			};
			_.Z = l
		},
		"../react/common/hooks/useCachedState.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				j: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function u(l, {
				key: f,
				cache: s = a.E,
				ttl: m
			} = {}) {
				var v;
				const n = f !== void 0 && s.get(f),
					[c, i] = (0, e.useState)((v = n) !== null && v !== void 0 ? v : l);
				return [c, o => {
					i(g => (o instanceof Function && (o = o(g)), f !== void 0 && s.set(f, o, m), o))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(U, _, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function r(a) {
				return (0, e.qf)(a)
			}
			_.Z = r
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				S: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function a(u, {
				root: l,
				rootMargin: f,
				threshold: s
			} = {}) {
				const m = (0, e.useRef)(null);

				function v() {
					return m.current === null && (m.current = new IntersectionObserver(u, {
						root: l,
						rootMargin: f,
						threshold: s
					})), m.current
				}
				return (0, e.useEffect)(() => (m.current = new IntersectionObserver(u, {
					root: l,
					rootMargin: f,
					threshold: s
				}), () => {
					var n;
					(n = m.current) === null || n === void 0 || n.disconnect()
				}), [u, l, f, s]), v()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(U, _, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function a(u) {
				const l = (0, e.useRef)(u);
				return (0, e.useEffect)(() => {
					l.current = u
				}, [u]), l.current
			}
			_.Z = a
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(U, _, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");

			function a(u) {
				return (0, e.p4)(l => (0, r.rV)(l, u))
			}
			_.Z = a
		},
		"../react/common/middleware/sparrow/errors.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Uh: function() {
					return l
				},
				ez: function() {
					return u
				},
				oV: function() {
					return f
				}
			});

			function e(s, m, v) {
				return m = r(m), m in s ? Object.defineProperty(s, m, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[m] = v, s
			}

			function r(s) {
				var m = a(s, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function a(s, m) {
				if (typeof s != "object" || s === null) return s;
				var v = s[Symbol.toPrimitive];
				if (v !== void 0) {
					var n = v.call(s, m || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(s)
			}
			class u extends Error {
				constructor(m, v) {
					super(v);
					e(this, "eventName", void 0), this.eventName = m, this.name = "SparrowValidationError"
				}
			}
			class l extends u {
				constructor(m) {
					super(m, `Event not allowed: "${m}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class f extends u {
				constructor(m, v) {
					super(m, `Found invalid properties on event: "${m}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = v
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Au: function() {
					return H
				},
				B: function() {
					return Me
				},
				B3: function() {
					return V
				},
				BG: function() {
					return k
				},
				Bp: function() {
					return ze
				},
				CV: function() {
					return Pe
				},
				D0: function() {
					return A
				},
				DT: function() {
					return Y
				},
				EL: function() {
					return F
				},
				EU: function() {
					return z
				},
				GE: function() {
					return Ct
				},
				Ko: function() {
					return ne
				},
				Kx: function() {
					return C
				},
				Le: function() {
					return P
				},
				O4: function() {
					return fe
				},
				Ou: function() {
					return W
				},
				Py: function() {
					return Be
				},
				QI: function() {
					return Xe
				},
				Qf: function() {
					return b
				},
				RO: function() {
					return ve
				},
				T3: function() {
					return ot
				},
				T8: function() {
					return S
				},
				UX: function() {
					return M
				},
				VP: function() {
					return We
				},
				Xo: function() {
					return rt
				},
				Xu: function() {
					return ce
				},
				Yi: function() {
					return qe
				},
				Yj: function() {
					return ee
				},
				Zu: function() {
					return q
				},
				bC: function() {
					return te
				},
				f8: function() {
					return X
				},
				hI: function() {
					return lt
				},
				hN: function() {
					return w
				},
				hX: function() {
					return De
				},
				iq: function() {
					return Qe
				},
				nE: function() {
					return N
				},
				oD: function() {
					return h
				},
				oI: function() {
					return j
				},
				oJ: function() {
					return ct
				},
				tM: function() {
					return x
				},
				uF: function() {
					return K
				},
				ut: function() {
					return nt
				},
				vU: function() {
					return ft
				},
				wQ: function() {
					return ge
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/lodash/get.js"),
				a = t.n(r),
				u = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = t.n(u),
				f = t("../../../../node_modules/reselect/lib/index.js"),
				s = t("../../../../node_modules/moment/moment.js"),
				m = t.n(s),
				v = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				c = t("../react/common/selectors/userSelectors.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts"),
				d = t("../react/app/components/DeepLink/selectors.ts"),
				o = t("../react/common/constants/roles.ts"),
				g = t("../react/common/utils/hasRole.ts");

			function I(Z) {
				for (var se = 1; se < arguments.length; se++) {
					var Ee = arguments[se] != null ? Object(arguments[se]) : {},
						Ce = Object.keys(Ee);
					typeof Object.getOwnPropertySymbols == "function" && Ce.push.apply(Ce, Object.getOwnPropertySymbols(Ee).filter(function(Le) {
						return Object.getOwnPropertyDescriptor(Ee, Le).enumerable
					})), Ce.forEach(function(Le) {
						D(Z, Le, Ee[Le])
					})
				}
				return Z
			}

			function D(Z, se, Ee) {
				return se = O(se), se in Z ? Object.defineProperty(Z, se, {
					value: Ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[se] = Ee, Z
			}

			function O(Z) {
				var se = y(Z, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function y(Z, se) {
				if (typeof Z != "object" || Z === null) return Z;
				var Ee = Z[Symbol.toPrimitive];
				if (Ee !== void 0) {
					var Ce = Ee.call(Z, se || "default");
					if (typeof Ce != "object") return Ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(Z)
			}
			const A = Z => {
					const se = K(Z);
					return se == null ? void 0 : se.account
				},
				E = Z => {
					const se = (0, c.PR)(Z);
					if (se) {
						const Ee = se.id;
						return Z.accountAccess[Ee] || {}
					}
					return {}
				},
				b = Z => Z.accountsDetailed,
				S = (0, n.P1)("accountsDetailed", b),
				k = Z => Z.memberships,
				N = (0, f.P1)((0, n.P1)("memberships", k), d.U, (Z, se) => !!se && !!Z ? Z.filter(Ee => se.includes(Ee.id)) : Z),
				w = Z => Z.accountFlags && Z.accountFlags.data,
				C = Z => Z.accountFlags,
				P = (Z, se, Ee) => {
					const Ce = w(Z);
					return !Ce || !Ce[se] ? null : Ce[se][Ee]
				},
				L = Z => Z.accountFlags.isRequesting,
				j = (Z, ...se) => a()(Z, ["accountFlagsChanges", "data", ...se]),
				X = Z => Z.accountFlagsChanges.isRequesting,
				oe = (0, f.P1)(w, C, (Z, se) => ({
					data: Z,
					meta: se
				})),
				pe = (Z, se, Ee) => !!(isEnterpriseSSEnabledSelector(Z) && P(Z, se, Ee)),
				ce = Z => Z.membership,
				K = (0, n.P1)("membership", ce),
				G = (0, f.P1)(K, ce, (Z, se) => ({
					data: Z,
					meta: se
				})),
				W = Z => {
					const {
						roles: se = []
					} = K(Z) || {};
					return Boolean(se.find(Ee => Ee === "Super Administrator - All Privileges" || Ee === "Billing"))
				},
				x = Z => {
					const se = [o.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, g.n)(Z, se)
				},
				h = Z => {
					const se = E(Z),
						Ee = Ue.getMemberships(Z) ? l().asMutable(Ue.getMemberships(Z)) : [];
					if (!!Ee) return l().from(Ee.map(Ce => I({}, Ce, {
						lastSeen: se[Ce.account.id] ? se[Ce.account.id].lastSeen : null
					})).sort((Ce, Le) => Ce.lastSeen && Le.lastSeen ? Le.lastSeen - Ce.lastSeen : 0))
				},
				M = Z => Z.filteredMemberships,
				F = (0, n.P1)("filteredMemberships", M),
				q = (0, f.P1)(K, Z => Z == null ? void 0 : Z.permissions),
				ee = (0, f.P1)(q, Z => (0, e.Z)(se => {
					var Ee;
					return (Ee = Z == null ? void 0 : Z[se]) !== null && Ee !== void 0 ? Ee : {
						read: !1,
						edit: !1
					}
				})),
				ne = (0, f.P1)(K, Z => Z == null ? void 0 : Z.policies),
				Y = (Z, se, Ee) => {
					let Ce = Ue.getMembership(Z);
					if (!Ce) {
						const Le = Ue.getMemberships(Z);
						if (!Le || !se) return !1;
						Ce = Le.find($e => $e.account.id === se)
					}
					if (!Ce || !Ee) return !1;
					try {
						return Ee(Ce.permissions)
					} catch {
						return !1
					}
				},
				B = Z => {
					var se, Ee;
					return (se = (Ee = A(Z)) === null || Ee === void 0 ? void 0 : Ee.meta.has_pro_zones) !== null && se !== void 0 ? se : !1
				},
				z = Z => {
					var se, Ee;
					return (se = (Ee = A(Z)) === null || Ee === void 0 ? void 0 : Ee.meta.has_business_zones) !== null && se !== void 0 ? se : !1
				},
				te = Z => z(Z) || B(Z),
				le = (Z, se) => {
					const Ee = ue(Z, se);
					return !!Ee && !!Ee.enabled
				},
				ue = (Z, se) => {
					const Ee = Ue.getMembership(Z),
						Ce = Ee && Ee.account;
					return Ce && Ce.legacy_flags && Ce.legacy_flags[se]
				},
				ge = Z => le(Z, "custom_pages"),
				ye = Z => !!Z && Z["webhooks.webhooks.enabled"],
				Te = Z => P(Z, "bots", "enabled"),
				Oe = Z => P(Z, "billing", "annual_subscriptions_enable"),
				ve = Z => Z ? Boolean(P(Z, "ConstellationAI", "v2_ui")) : !1,
				De = Z => Z ? Boolean(P(Z, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Me = Z => Z ? Boolean(P(Z, "AIgateway", "enabled")) : !1,
				Ne = Z => ue(Z, "enterprise_zone_quota"),
				pt = Z => {
					const se = Ne(Z);
					return !se || !se.available ? -1 : se.available
				},
				Qe = Z => Z.accountMembers,
				V = (0, n.P1)("accountMembers", Qe),
				fe = Z => Z.accountMember && Z.accountMember.isRequesting,
				Se = Z => Z.accountRoles,
				Ye = (0, n.P1)("accountRoles", Se),
				Be = (Z, se) => {
					const Ee = Ue.getMemberships(Z),
						Ce = Ee && Ee.find(it => it.account.id === se);
					if (Ce) return Ce.account.name.replace(" Account", " account");
					const Le = Ue.getMembership(Z),
						$e = Le && Le.account;
					return $e && $e.id === se ? $e.name : null
				},
				nt = (Z, se) => {
					const Ee = Ue.getMemberships(Z),
						Ce = Ee && Ee.find(it => it.account.id === se);
					if (Ce) return Ce.account.settings.access_approval_expiry;
					const Le = Ue.getMembership(Z),
						$e = Le && Le.account;
					return $e && $e.id === se ? $e.settings.access_approval_expiry : null
				},
				rt = (Z, se) => {
					const Ee = nt(Z, se);
					return Ee ? m().utc(Ee).isAfter() : !1
				},
				ot = (Z, se, Ee) => {
					const Ce = nt(Z, se);
					let Le = Ce ? m().utc(Ce) : null;
					return !Le || !Le.isAfter() ? "" : Le && Le.year() === 3e3 ? Ee("account.access_approval.card_expiration_forever") : Ee("account.access_approval.card_expiration_text", {
						expiryTimestamp: Le.local().format(v.U.DateTime)
					})
				},
				ct = Z => Z && Z.member && Z.member.edit,
				H = (Z, se) => {
					const Ee = Ue.getMembership(Z),
						Ce = Ee && Ee.account;
					return Ce ? Ce.id !== se : !1
				},
				de = Z => Z.dpa,
				be = (0, n.P1)("dpa", de),
				Ie = Z => Z.webhook,
				he = Z => Z.webhooks,
				xe = (0, n.P1)("webhook", he),
				We = Z => Z.accountLegoContract,
				at = (0, n.P1)("accountLegoContract", We),
				Xe = Z => {
					const se = at(Z);
					return (se == null ? void 0 : se.lego_state) ? se.lego_state : ""
				},
				mt = Z => Xe(Z) === "signed",
				Ct = Z => We(Z).isRequesting,
				ft = Z => {
					const se = at(Z);
					return se && se.subscription_type ? se.subscription_type : ""
				},
				vt = Z => ft(Z) !== "",
				Ue = {
					getMembership: K,
					getMemberships: N,
					getFilteredMemberships: F,
					getAccountMembers: V,
					getAccountRoles: Ye
				},
				ze = Z => Z.accountSingle,
				qe = (0, n.P1)("accountSingle", ze),
				lt = Z => {
					const se = [o.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, o.V.ADMINISTRATOR];
					return (0, g.n)(Z, se)
				},
				Pe = Z => (0, g.n)(Z, [o.V.BRAND_PROTECTION])
		},
		"../react/common/selectors/commonSelectors.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				FX: function() {
					return a
				},
				QG: function() {
					return r
				},
				TH: function() {
					return u
				},
				cZ: function() {
					return e
				}
			});

			function e(l) {
				const f = `__ACTIVE__${l}`;
				return s => {
					const m = s.application;
					return m && m.active[f]
				}
			}

			function r(l) {
				const f = `__TOGGLE__${l}`;
				return s => {
					const m = s.application;
					return m && m.toggles[f]
				}
			}

			function a(l) {
				return l && l.paginationData && l.paginationData.info && l.paginationData.info.total_count ? l.paginationData.info.total_count : 0
			}
			const u = l => l.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				$f: function() {
					return o
				},
				AD: function() {
					return l
				},
				BF: function() {
					return d
				},
				Bs: function() {
					return A
				},
				Ci: function() {
					return q
				},
				DA: function() {
					return Ne
				},
				E6: function() {
					return i
				},
				Gy: function() {
					return ve
				},
				Hq: function() {
					return Oe
				},
				Ms: function() {
					return S
				},
				Nb: function() {
					return Te
				},
				Pj: function() {
					return Me
				},
				Q2: function() {
					return f
				},
				Qq: function() {
					return te
				},
				Td: function() {
					return O
				},
				Z: function() {
					return Y
				},
				a: function() {
					return y
				},
				a5: function() {
					return z
				},
				c7: function() {
					return le
				},
				du: function() {
					return m
				},
				ec: function() {
					return X
				},
				f: function() {
					return ye
				},
				fo: function() {
					return ge
				},
				hL: function() {
					return B
				},
				ji: function() {
					return ee
				},
				jo: function() {
					return k
				},
				l9: function() {
					return Qe
				},
				lI: function() {
					return u
				},
				p1: function() {
					return I
				},
				pK: function() {
					return De
				},
				pf: function() {
					return n
				},
				qR: function() {
					return D
				},
				rV: function() {
					return s
				},
				u1: function() {
					return v
				},
				w4: function() {
					return c
				},
				yD: function() {
					return ne
				}
			});
			var e = t("../react/utils/url.ts");

			function r(V, fe) {
				return V && V[fe]
			}
			const a = V => !u(V).isRequesting;

			function u(V) {
				return V.entitlements.zone
			}

			function l(V) {
				return u(V).data
			}
			const f = V => {
				var fe, Se;
				return ((fe = u(V).paginationData) === null || fe === void 0 || (Se = fe.options) === null || Se === void 0 ? void 0 : Se.editedDate) || {}
			};

			function s(V, fe) {
				const Se = l(V);
				return Se ? r(Se, fe) : void 0
			}
			const m = (V, fe) => s(V, fe) === !0;

			function v(V) {
				return V.entitlements.account
			}

			function n(V) {
				return v(V).data
			}
			const c = V => {
				var fe, Se;
				return ((fe = v(V).paginationData) === null || fe === void 0 || (Se = fe.options) === null || Se === void 0 ? void 0 : Se.editedDate) || {}
			};

			function i(V) {
				return !v(V).isRequesting
			}

			function d(V, fe) {
				const Se = n(V);
				return Se ? r(Se, fe) : void 0
			}

			function o(V, fe) {
				return d(V, fe) === !0
			}

			function g(V, fe) {
				return fe.every(Se => o(V, Se))
			}

			function I(V) {
				return o(V, "contract.customer_enabled")
			}

			function D(V) {
				return o(V, "contract.self_service_allowed")
			}

			function O(V) {
				return o(V, "billing.partners_managed")
			}
			const y = V => I(V) && D(V),
				A = V => o(V, "enterprise.ecp_allowed");

			function E(V) {
				return b(V) || o(V, "argo.allow_smart_routing") || o(V, "argo.allow_tiered_caching") || o(V, "rate_limiting.enabled") || o(V, "ctm.enabled") || o(V, "workers.enabled") || o(V, "workers.kv_store.enabled") || o(V, "stream.enabled")
			}
			const b = V => m(V, "argo.allow_smart_routing") || m(V, "argo.allow_tiered_caching"),
				S = V => o(V, "zone.cname_setup_allowed") || o(V, "zone.partial_setup_allowed") || m(V, "zone.partial_setup_allowed"),
				k = V => o(V, "argo.allow_smart_routing") || m(V, "argo.allow_smart_routing"),
				N = V => o(V, "argo.allow_tiered_caching") || m(V, "argo.allow_tiered_caching"),
				w = V => k(V) || N(V),
				C = V => o(V, "ctm.enabled"),
				P = V => {
					const fe = d(V, "ctm.load_balancers");
					return typeof fe == "number" ? fe : 0
				},
				L = V => {
					const fe = d(V, "ctm.pools");
					return typeof fe == "number" ? fe : 0
				},
				j = V => {
					const fe = d(V, "ctm.origins");
					return typeof fe == "number" ? fe : 0
				},
				X = V => o(V, "workers.enabled"),
				oe = V => o(V, "stream.enabled"),
				pe = V => {
					const fe = d(V, "access.users_allowed");
					return typeof fe == "number" ? fe : 0
				},
				ce = V => pe(V) > 0,
				K = V => {
					const fe = s(V, "dedicated_certificates");
					return typeof fe == "number" ? fe : 0
				},
				G = V => K(V) > 0,
				W = V => {
					const fe = s(V, "rate_limiting.max_rules");
					return typeof fe == "number" ? fe : 0
				},
				x = V => o(V, "rate_limiting.enabled"),
				h = V => {
					const fe = s(V, "page_rules");
					return typeof fe == "number" ? fe : 0
				},
				M = V => h(V) > 0,
				F = V => {
					const fe = d(V, "dns_firewall.max_clusters_allowed");
					return typeof fe == "number" ? fe : 0
				},
				q = V => F(V) > 0,
				ee = V => m(V, "zone.advanced_certificate_manager") || o(V, "zone.advanced_certificate_manager"),
				ne = V => s(V, "authoritative_dns.proxy_record_allowed") === !1 || d(V, "authoritative_dns.proxy_record_allowed") === !1,
				Y = V => o(V, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				B = V => s(V, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				z = V => {
					const fe = s(V, "authoritative_dns.min_record_ttl_allowed");
					return typeof fe == "number" && fe > 1 ? fe : 60
				},
				te = V => o(V, "foundation_dns.advanced_nameservers_allowed") || m(V, "foundation_dns.advanced_nameservers_allowed"),
				le = V => o(V, "authoritative_dns.account_custom_nameservers_allowed"),
				ue = V => m(V, "authoritative_dns.zone_custom_nameservers_allowed"),
				ge = V => ue(V) || le(V),
				ye = (V, fe) => ((0, e.el)(window.location.pathname) ? s : d)(V, fe),
				Te = V => ((0, e.el)(window.location.pathname) ? l : n)(V),
				Oe = V => o(V, "authoritative_dns.multi_provider_allowed") || m(V, "authoritative_dns.multi_provider_allowed"),
				ve = V => m(V, "authoritative_dns.cname_flattening_allowed"),
				De = V => o(V, "secondary_dns.secondary_overrides") || m(V, "secondary_dns.secondary_overrides"),
				Me = V => o(V, "authoritative_dns.custom_soa_allowed") || m(V, "authoritative_dns.custom_soa_allowed"),
				Ne = V => o(V, "authoritative_dns.custom_ns_ttl_allowed") || m(V, "authoritative_dns.custom_ns_ttl_allowed"),
				pt = V => o(V, "secondary.create_zone"),
				Qe = V => te(V) || le(V) || Oe(V) || pt(V) || De(V) || Me(V) || Ne(V)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				r: function() {
					return l
				},
				v: function() {
					return f
				}
			});
			var e = t("../react/utils/i18n.ts"),
				r = t("../../../common/intl/intl-types/src/index.ts"),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/utils/bootstrap.ts");
			const l = s => {
				if ((0, u.gm)()) return a.Z.set(e.ly, e.ZW), e.ZW;
				const m = s.userCommPreferences.data;
				if (m == null ? void 0 : m["language-locale"]) return (0, e.i_)(m["language-locale"]), m["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const v = (0, e.Kd)();
					return f(v) ? v : e.ZW
				}
			};

			function f(s) {
				const m = Object.keys(r.Q).find(v => r.Q[v] === s);
				return !!s && typeof s == "string" && m != null && (0, e.S8)(m)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				$8: function() {
					return l
				},
				BG: function() {
					return v
				},
				BY: function() {
					return y
				},
				GP: function() {
					return o
				},
				GU: function() {
					return A
				},
				PR: function() {
					return a
				},
				h$: function() {
					return D
				},
				h8: function() {
					return n
				},
				kk: function() {
					return I
				},
				l8: function() {
					return s
				},
				mV: function() {
					return g
				},
				vW: function() {
					return f
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const r = E => E.user,
				a = (0, e.P1)("user", r),
				u = E => {
					var b;
					return (b = a(E)) === null || b === void 0 ? void 0 : b.email.endsWith("@cloudflare.com")
				},
				l = E => {
					var b;
					return !!((b = a(E)) === null || b === void 0 ? void 0 : b.id)
				},
				f = E => {
					const b = a(E);
					if (!!b) return b.first_name && b.last_name ? `${b.first_name} ${b.last_name}` : b.email
				},
				s = E => {
					const b = a(E);
					return b && b.has_enterprise_zones
				},
				m = E => E.userCommPreferences,
				v = (0, e.P1)("userCommPreferences", m),
				n = E => {
					const b = a(E);
					return b && b.email_verified
				},
				c = E => {
					const b = v(E);
					return b && b.preferences.marketing_communication
				},
				i = E => E.userDetails,
				d = (0, e.P1)("userDetails", i),
				o = E => {
					const b = d(E);
					return b && b["2FA-RECOVERY"] === "scheduled"
				},
				g = E => {
					const b = d(E);
					return b && b["2FA-RECOVERY"] === "interrupted"
				},
				I = E => {
					const b = d(E);
					return b == null ? void 0 : b["NEW-USER-EMAIL"]
				},
				D = E => E.gates.assignments,
				O = (E, b) => E && E[b];

			function y(E, b) {
				const S = D(E);
				return S ? O(S, b) : void 0
			}
			const A = (E, b) => y(E, b) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				$4: function() {
					return k
				},
				$t: function() {
					return Be
				},
				A4: function() {
					return D
				},
				Cu: function() {
					return O
				},
				DQ: function() {
					return le
				},
				Ej: function() {
					return w
				},
				FH: function() {
					return A
				},
				ID: function() {
					return h
				},
				Iu: function() {
					return I
				},
				Ko: function() {
					return De
				},
				Le: function() {
					return ye
				},
				Ly: function() {
					return ee
				},
				M3: function() {
					return V
				},
				N8: function() {
					return Qe
				},
				NY: function() {
					return z
				},
				Ns: function() {
					return F
				},
				Ox: function() {
					return ot
				},
				P4: function() {
					return C
				},
				RO: function() {
					return W
				},
				Tr: function() {
					return ve
				},
				U: function() {
					return y
				},
				Ug: function() {
					return b
				},
				V6: function() {
					return fe
				},
				WR: function() {
					return ct
				},
				Xg: function() {
					return g
				},
				ZB: function() {
					return ge
				},
				_y: function() {
					return M
				},
				cU: function() {
					return Me
				},
				cg: function() {
					return te
				},
				d2: function() {
					return pe
				},
				il: function() {
					return q
				},
				jN: function() {
					return L
				},
				jg: function() {
					return Y
				},
				kC: function() {
					return N
				},
				kf: function() {
					return Se
				},
				ko: function() {
					return G
				},
				mK: function() {
					return nt
				},
				nA: function() {
					return o
				},
				oY: function() {
					return P
				},
				qM: function() {
					return Te
				},
				rq: function() {
					return B
				},
				tS: function() {
					return S
				},
				tU: function() {
					return X
				},
				vB: function() {
					return rt
				},
				vM: function() {
					return j
				},
				wH: function() {
					return E
				},
				wn: function() {
					return ue
				},
				xU: function() {
					return oe
				},
				xw: function() {
					return Oe
				},
				z5: function() {
					return x
				},
				zO: function() {
					return Ne
				},
				zW: function() {
					return Ye
				},
				zh: function() {
					return ce
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				r = t("../react/app/redux/normalizer.js"),
				a = t("../../../../node_modules/lodash/get.js"),
				u = t.n(a),
				l = t("../../../../node_modules/moment/moment.js"),
				f = t.n(l),
				s = t("../react/common/constants/billing/index.ts");

			function m(H) {
				for (var de = 1; de < arguments.length; de++) {
					var be = arguments[de] != null ? Object(arguments[de]) : {},
						Ie = Object.keys(be);
					typeof Object.getOwnPropertySymbols == "function" && Ie.push.apply(Ie, Object.getOwnPropertySymbols(be).filter(function(he) {
						return Object.getOwnPropertyDescriptor(be, he).enumerable
					})), Ie.forEach(function(he) {
						v(H, he, be[he])
					})
				}
				return H
			}

			function v(H, de, be) {
				return de = n(de), de in H ? Object.defineProperty(H, de, {
					value: be,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : H[de] = be, H
			}

			function n(H) {
				var de = c(H, "string");
				return typeof de == "symbol" ? de : String(de)
			}

			function c(H, de) {
				if (typeof H != "object" || H === null) return H;
				var be = H[Symbol.toPrimitive];
				if (be !== void 0) {
					var Ie = be.call(H, de || "default");
					if (typeof Ie != "object") return Ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (de === "string" ? String : Number)(H)
			}
			const i = (0, r.P1)("zone", H => H.zone),
				d = H => {
					var de;
					return (de = H.zoneVersioning) === null || de === void 0 ? void 0 : de.zoneVersionSelector
				},
				o = (0, e.P1)(i, d, (H, de) => {
					var be, Ie, he;
					let xe;
					if (Array.isArray(H) && H.length === 1 ? xe = H[0] : H && !Array.isArray(H) && (xe = H), !xe) return;
					const We = !!(de == null ? void 0 : de.enabled);
					return m({}, xe, xe.name && {
						name: We ? de.rootZoneName : xe.name
					}, {
						versioning: {
							enabled: We,
							isRoot: !((be = xe.name) === null || be === void 0 ? void 0 : be.endsWith(".config.cfdata.org")),
							version: We ? de.selectedVersion : 0,
							rootZoneId: We ? de.rootZoneId : (Ie = (he = xe) === null || he === void 0 ? void 0 : he.id) !== null && Ie !== void 0 ? Ie : ""
						}
					})
				}),
				g = H => H.zone,
				I = H => H.zone.isRequesting,
				D = (0, e.P1)(o, g, (H, de) => ({
					data: H,
					meta: de
				})),
				O = H => {
					var de, be;
					return (de = (be = o(H)) === null || be === void 0 ? void 0 : be.id) !== null && de !== void 0 ? de : ""
				},
				y = H => H.zones,
				A = H => H.zonesRoot,
				E = H => H.zonesAccount,
				b = (0, r.P1)("zones", y),
				S = (0, r.P1)("zonesRoot", A),
				k = (0, r.P1)("zonesAccount", E);

			function N(H) {
				const de = o(H);
				return de ? de.created_on : null
			}

			function w(H, de, be) {
				const Ie = N(H);
				if (!Ie) return;
				const he = f().duration(de, be),
					xe = new Date(Ie),
					We = new Date(new Date().getTime() - he.asMilliseconds());
				return xe.getTime() > We.getTime()
			}

			function C(H) {
				const de = o(H);
				return de ? de.status : null
			}

			function P(H) {
				const de = o(H);
				return de ? de.type : null
			}

			function L(H) {
				return (H == null ? void 0 : H.plan_pending) ? H == null ? void 0 : H.plan_pending : H == null ? void 0 : H.plan
			}

			function j(H) {
				const de = o(H);
				if (!de) return;
				const be = L(de);
				return be && be.legacy_id
			}

			function X(H, de) {
				const be = L(H);
				return !!be && s.Gs.indexOf(be.legacy_id) >= s.Gs.indexOf(de)
			}

			function oe(H) {
				return !!H && H.status === "initializing"
			}

			function pe(H) {
				return !!H && H.status === "pending"
			}

			function ce(H) {
				return !!H && H.status === "active"
			}

			function K(H, de) {
				if (!H) return !1;
				const be = L(H);
				return !!be && be.legacy_id === de
			}

			function G(H) {
				return K(H, "enterprise")
			}
			const W = H => G(o(H));

			function x(H) {
				return K(H, "business")
			}
			const h = H => x(o(H));

			function M(H) {
				return K(H, "pro")
			}

			function F(H) {
				return K(H, "free")
			}
			const q = H => F(o(H));

			function ee(H) {
				return !G(H)
			}

			function ne(H) {
				return H && H.owner
			}

			function Y(H, de) {
				const be = ne(de);
				return !!be && be.type === "user" && be.id === H.id
			}

			function B(H) {
				const de = o(H);
				return !!de && de.type === "partial"
			}

			function z(H) {
				const de = o(H);
				return !!de && de.type === "secondary"
			}
			const te = H => {
					var de;
					const be = o(H);
					return !!(be == null ? void 0 : be.host) && !!((de = be.plan) === null || de === void 0 ? void 0 : de.externally_managed)
				},
				le = H => {
					const de = b(H);
					return de && de.some(G)
				},
				ue = (H, de) => {
					const be = o(H);
					return be && be.betas ? be.betas.includes(de) : !1
				},
				ge = (H, ...de) => u()(H, ["zoneFlags", "data", ...de]),
				ye = (H, ...de) => u()(H, ["accountFlags", "data", ...de]),
				Te = H => H.accountFlags.isRequesting,
				Oe = H => H.zoneFlags.isRequesting,
				ve = (H, ...de) => u()(H, ["zoneFlagsChanges", "data", ...de]),
				De = H => H.zoneFlagsChanges.isRequesting,
				Me = H => H.zoneFlags && H.zoneFlags.data,
				Ne = H => H.zoneFlags,
				pt = (0, e.P1)(Me, Ne, (H, de) => ({
					data: H,
					meta: de
				})),
				Qe = (0, r.P1)("abuseUrls", H => H.overview.abuseUrls),
				V = H => {
					const de = o(H);
					return de ? `/${de.account.id}/${de.name}` : null
				},
				fe = H => H.zoneMarketingCampaigns,
				Se = H => H.overview.zoneBlocks.data,
				Ye = H => H.overview.zoneBlocks.isRequesting,
				Be = H => H.overview.zoneBlocks.hasData,
				nt = H => {
					var de, be;
					return (H == null || (de = H.overview.zoneBlocks) === null || de === void 0 || (be = de.paginationData) === null || be === void 0 ? void 0 : be.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				rt = H => H.overview.zoneBlocksReview.isRequesting,
				ot = H => H.overview.zoneHold,
				ct = (0, r.P1)("zoneHold", ot)
		},
		"../react/common/utils/formatDate.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			_.Z = (r, a, u = !1) => (0, e.p6)(r, a, u)
		},
		"../react/common/utils/hasRole.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				n: function() {
					return r
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const r = (a, u) => {
				const {
					roles: l = []
				} = (0, e.uF)(a) || {};
				return u.some(f => l.includes(f))
			}
		},
		"../react/common/utils/isGuards.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Q$: function() {
					return a
				},
				t: function() {
					return f
				},
				v5: function() {
					return u
				},
				zE: function() {
					return l
				}
			});
			var e = t("../react/common/constants/index.ts"),
				r = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const a = s => s ? ["page", "per_page", "count", "total_count"].every(v => v in s && s[v]) : !1,
				u = (s = "") => e.Dy.includes(s.toLowerCase()),
				l = s => s !== null && typeof s == "object" && "name" in s && "size" in s && "type" in s && typeof s.slice == "function",
				f = s => (0, r.Z)(s)
		},
		"../react/common/utils/startViewTransition.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				o: function() {
					return e
				}
			});
			const e = r => {
				if (!document.startViewTransition) {
					r();
					return
				}
				document.startViewTransition(() => r())
			}
		},
		"../react/common/utils/useQueryCache.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				o: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function r(s) {
				for (var m = 1; m < arguments.length; m++) {
					var v = arguments[m] != null ? Object(arguments[m]) : {},
						n = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(v).filter(function(c) {
						return Object.getOwnPropertyDescriptor(v, c).enumerable
					})), n.forEach(function(c) {
						a(s, c, v[c])
					})
				}
				return s
			}

			function a(s, m, v) {
				return m = u(m), m in s ? Object.defineProperty(s, m, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[m] = v, s
			}

			function u(s) {
				var m = l(s, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function l(s, m) {
				if (typeof s != "object" || s === null) return s;
				var v = s[Symbol.toPrimitive];
				if (v !== void 0) {
					var n = v.call(s, m || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(s)
			}
			const f = s => {
				const m = (0, e.useQueryClient)(),
					v = y => {
						var A;
						return m.getQueriesData((A = y) !== null && A !== void 0 ? A : s)
					},
					n = y => {
						var A;
						return m.getQueryData((A = y) !== null && A !== void 0 ? A : s)
					},
					c = y => {
						var A;
						return m.getQueriesData({
							queryKey: (A = y) !== null && A !== void 0 ? A : s,
							stale: !0
						})
					},
					i = (y, A) => {
						var E;
						m.setQueryData((E = A) !== null && E !== void 0 ? E : s, y)
					},
					d = async y => {
						var A;
						await m.refetchQueries((A = y) !== null && A !== void 0 ? A : s)
					}, o = async (y, A) => {
						var E, b;
						await m.invalidateQueries((E = y) !== null && E !== void 0 ? E : s, r({
							refetchActive: !1
						}, (b = A) !== null && b !== void 0 ? b : {}))
					}, g = async (y, A) => {
						const E = y || (b => {
							var S;
							return (b == null || (S = b.queryKey) === null || S === void 0 ? void 0 : S[0]) === s
						});
						await m.invalidateQueries(r({
							predicate: E,
							refetchActive: !1,
							refetchInactive: !1
						}, A))
					};
				return {
					refetch: d,
					cancelData: async () => {
						await m.cancelQueries(s)
					},
					invalidate: o,
					setData: i,
					getDataStale: c,
					getData: v,
					prefetchQuery: (y, A) => {
						var E;
						return m.prefetchQuery((E = A) !== null && E !== void 0 ? E : s, y)
					},
					getQueryData: n,
					predicateInvalidate: g,
					batchInvalidate: async ({
						queryKeysToInvalidate: y = [],
						queryKeysToPredicateInvalidate: A = [],
						refetchActive: E = !1,
						refetchInactive: b = !1
					}) => {
						const S = y.map(N => o(N)),
							k = A.map(N => g(w => {
								var C;
								return (w == null || (C = w.queryKey) === null || C === void 0 ? void 0 : C[0]) === N
							}, {
								refetchActive: E,
								refetchInactive: b
							}));
						await Promise.all([...S, ...k])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(U, _, t) {
			"use strict";
			t.d(_, {
				K2: function() {
					return r
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
					return s
				},
				wb: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const r = v => /^https?:\/\/(.*)/.test(v),
				a = v => e.default.hostname.test(v),
				u = v => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(v),
				l = v => /^[!-~]+$/.test(v),
				f = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				s = v => f.test(v),
				m = v => !!v && !!v.length && /^[ -~]+$/.test(v)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(U, _, t) {
			"use strict";
			t.d(_, {
				DZ: function() {
					return u
				},
				GA: function() {
					return v
				},
				hT: function() {
					return f
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
				r = t.n(e);
			const a = i => r().utc(i).format("YYYY-MM-DD"),
				u = i => r().utc(i).format(),
				l = i => r().utc(i).startOf("minute").format(),
				f = i => new Date(i),
				s = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				m = i => {
					const d = i / 60 / 60 / 1e3;
					return s[Object.keys(s).sort((o, g) => g - o).find(o => d >= o)]
				},
				v = (i, d = o => o.avg && o.avg.sampleInterval ? o.avg.sampleInterval : 1) => i.length === 0 ? 1 : i.reduce((o, g) => o + d(g), 0) / i.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				c = i => n[i]
		},
		"../react/pages/caching/tracking.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CACHE_PURGE = "submit custom purge", r.TIERED_CACHE = "select tiered cache topology", r.CACHE_ANALYTICS = "load cache analytics data", r.CHANGED_ZONE_SETTINGS = "change zone setting", r
			}({})
		},
		"../react/pages/d1/routes.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				H: function() {
					return a
				},
				_: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
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
		"../react/pages/dns/dns-records/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				U: function() {
					return e
				},
				X: function() {
					return r
				}
			});
			let e = function(a) {
				return a.DNS_RECORD_CREATE = "create DNS records", a.DNS_RECORD_UPDATE = "update DNS records", a.DNS_RECORD_DELETE = "delete DNS records", a.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", a
			}({});
			const r = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				BB: function() {
					return r
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
			let a = function(l) {
				return l[l.Verified = 0] = "Verified", l[l.Pending = 1] = "Pending", l[l.Missing = 2] = "Missing", l[l.WorkerNotFound = 3] = "WorkerNotFound", l[l.Unknown = 4] = "Unknown", l[l.Loading = 5] = "Loading", l
			}({});
			const u = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				_: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/pages/home/alerts/routes.ts");
			const a = r._.createAlertWithSelection,
				u = r._.editAlert,
				l = (0, e.BC)`${a}/subtype`,
				f = (0, e.BC)`${a}/stepper`,
				s = (0, e.BC)`${f}/${"stepName"}`,
				m = (0, e.BC)`${f}/details`,
				v = (0, e.BC)`${f}/data-centers`,
				n = (0, e.BC)`${f}/ramps`,
				c = (0, e.BC)`${f}/threshold`,
				i = (0, e.BC)`${f}/review`,
				d = (0, e.BC)`${f}/confirm`,
				o = (0, e.BC)`${u}/stepper`,
				g = (0, e.BC)`${o}/${"stepName"}`,
				I = (0, e.BC)`${o}/details`,
				D = (0, e.BC)`${o}/data-centers`,
				O = (0, e.BC)`${o}/ramps`,
				y = (0, e.BC)`${o}/threshold`,
				A = (0, e.BC)`${o}/review`,
				E = (0, e.BC)`${o}/confirm`,
				b = {
					magicTunnelHealthChooseSubType: l,
					magicTunnelHealthCreateStepperBase: f,
					magicTunnelHealthCreateStepper: s,
					magicTunnelHealthCreateDetails: m,
					magicTunnelHealthCreateSelectDataCenter: v,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: c,
					magicTunnelHealthCreateReview: i,
					magicTunnelHealthCreateConfirm: d,
					magicTunnelHealthEditStepperBase: o,
					magicTunnelHealthEditStepper: g,
					magicTunnelHealthEditDetails: I,
					magicTunnelHealthEditSelectDataCenter: D,
					magicTunnelHealthEditSelectRamps: O,
					magicTunnelHealthEditSetThreshold: y,
					magicTunnelHealthEditReview: A,
					magicTunnelHealthEditConfirm: E
				};
			_.Z = b
		},
		"../react/pages/home/alerts/config.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				jk: function() {
					return i
				},
				w8: function() {
					return d
				}
			});
			var e = t("../react/pages/home/alerts/routes.ts"),
				r = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				a = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				u = t("../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts"),
				l = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function f(o) {
				for (var g = 1; g < arguments.length; g++) {
					var I = arguments[g] != null ? Object(arguments[g]) : {},
						D = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(I).filter(function(O) {
						return Object.getOwnPropertyDescriptor(I, O).enumerable
					})), D.forEach(function(O) {
						s(o, O, I[O])
					})
				}
				return o
			}

			function s(o, g, I) {
				return g = m(g), g in o ? Object.defineProperty(o, g, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[g] = I, o
			}

			function m(o) {
				var g = v(o, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function v(o, g) {
				if (typeof o != "object" || o === null) return o;
				var I = o[Symbol.toPrimitive];
				if (I !== void 0) {
					var D = I.call(o, g || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(o)
			}
			const n = "Notifications",
				c = "notification",
				i = f({}, e._, r._j, a._j, u._),
				d = f({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, l.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				_j: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				a = (0, e.BC)`${r}/pagerduty/connect`,
				u = (0, e.BC)`${r}/pagerduty/register`,
				l = (0, e.BC)`${r}/pagerduty`,
				f = {
					pagerDutyConnect: a,
					pagerDutyRegister: u,
					pagerDutyList: l
				};
			var s = null
		},
		"../react/pages/home/alerts/routes.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				_: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				u = (0, e.BC)`${a}/destinations`,
				l = (0, e.BC)`${a}/create`,
				f = (0, e.BC)`${l}/${"alertType"}`,
				s = (0, e.BC)`${a}/edit/${"alertId"}`,
				m = {
					account: r,
					alerts: a,
					destinations: u,
					createAlert: l,
					createAlertWithSelection: f,
					editAlert: s
				};
			_.Z = m
		},
		"../react/pages/home/alerts/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", r
			}({})
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.PEER_DNS_CREATE = "create peer server", r.PEER_DNS_UPDATE = "update peer server", r.PEER_DNS_DELETE = "delete peer server", r.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", r.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", r.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", r
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_LIST = "create list", r.DELETE_LIST = "delete list", r.ADD_LIST_ITEM = "add list item", r.DELETE_LIST_ITEM = "delete list item", r
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				AA: function() {
					return B
				},
				AN: function() {
					return lt
				},
				AY: function() {
					return Ee
				},
				Ac: function() {
					return _t
				},
				Am: function() {
					return D
				},
				B2: function() {
					return x
				},
				BB: function() {
					return N
				},
				BF: function() {
					return he
				},
				BQ: function() {
					return Ue
				},
				E8: function() {
					return Z
				},
				Fl: function() {
					return Le
				},
				Fu: function() {
					return P
				},
				Gc: function() {
					return Xe
				},
				Hc: function() {
					return It
				},
				IO: function() {
					return ze
				},
				JK: function() {
					return pt
				},
				K: function() {
					return b
				},
				LI: function() {
					return vt
				},
				LX: function() {
					return be
				},
				L_: function() {
					return Se
				},
				Ly: function() {
					return Tt
				},
				MR: function() {
					return M
				},
				Mj: function() {
					return q
				},
				NB: function() {
					return Ot
				},
				Oe: function() {
					return Mt
				},
				Or: function() {
					return ne
				},
				P5: function() {
					return Pt
				},
				PE: function() {
					return Oe
				},
				Pd: function() {
					return Lt
				},
				Pk: function() {
					return De
				},
				Pp: function() {
					return nt
				},
				Q1: function() {
					return C
				},
				Qr: function() {
					return Ie
				},
				Qv: function() {
					return ve
				},
				Rp: function() {
					return Ze
				},
				S7: function() {
					return yt
				},
				Sh: function() {
					return $e
				},
				Sl: function() {
					return $t
				},
				TZ: function() {
					return Y
				},
				Tg: function() {
					return Qe
				},
				Tp: function() {
					return at
				},
				Uy: function() {
					return Et
				},
				Vw: function() {
					return j
				},
				W3: function() {
					return ct
				},
				WR: function() {
					return qe
				},
				WX: function() {
					return ue
				},
				XF: function() {
					return Pe
				},
				Xb: function() {
					return z
				},
				Zs: function() {
					return fe
				},
				_f: function() {
					return xe
				},
				b4: function() {
					return le
				},
				bc: function() {
					return re
				},
				c2: function() {
					return h
				},
				cE: function() {
					return Dt
				},
				dh: function() {
					return Be
				},
				fE: function() {
					return Ye
				},
				g7: function() {
					return Te
				},
				hO: function() {
					return ot
				},
				hV: function() {
					return St
				},
				hk: function() {
					return O
				},
				hr: function() {
					return te
				},
				it: function() {
					return rt
				},
				j3: function() {
					return ht
				},
				jN: function() {
					return Ne
				},
				jo: function() {
					return Nt
				},
				k3: function() {
					return kt
				},
				m8: function() {
					return K
				},
				nm: function() {
					return it
				},
				oW: function() {
					return se
				},
				pH: function() {
					return G
				},
				pi: function() {
					return ce
				},
				r4: function() {
					return ie
				},
				rI: function() {
					return F
				},
				s7: function() {
					return mt
				},
				sg: function() {
					return st
				},
				tB: function() {
					return g
				},
				tN: function() {
					return ye
				},
				u_: function() {
					return wt
				},
				vV: function() {
					return We
				},
				vc: function() {
					return Me
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				a = t("../../../../node_modules/moment/moment.js"),
				u = t.n(a),
				l = t("../../../common/util/types/src/api/domain.ts"),
				f = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				s = t("../react/utils/url.ts"),
				m = t("../react/pages/home/domain-registration/config.ts"),
				v = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function c(p) {
				for (var T = 1; T < arguments.length; T++) {
					var Q = arguments[T] != null ? Object(arguments[T]) : {},
						_e = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(Q).filter(function(ke) {
						return Object.getOwnPropertyDescriptor(Q, ke).enumerable
					})), _e.forEach(function(ke) {
						i(p, ke, Q[ke])
					})
				}
				return p
			}

			function i(p, T, Q) {
				return T = d(T), T in p ? Object.defineProperty(p, T, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[T] = Q, p
			}

			function d(p) {
				var T = o(p, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function o(p, T) {
				if (typeof p != "object" || p === null) return p;
				var Q = p[Symbol.toPrimitive];
				if (Q !== void 0) {
					var _e = Q.call(p, T || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(p)
			}

			function g(p) {
				return p.filter(T => T.isSelected).reduce((T, {
					name: Q,
					fees: _e,
					isZoneEntitlementPresent: ke
				}) => ke || !(0, e.isNumber)(_e == null ? void 0 : _e.transfer_fee) ? T : _t(Q) ? T + (_e == null ? void 0 : _e.transfer_fee) * 2 : T + (_e == null ? void 0 : _e.transfer_fee), 0)
			}

			function I(p) {
				return p.filter(T => T.registrar.toLowerCase() === "godaddy")
			}
			const D = "MMM D, YYYY";

			function O(p, T, Q, _e) {
				var ke, je, Ke, Ge, et, ut, Je, Ve, Rt, xt, Bt, Ft;
				const He = p[T.name],
					Zt = () => _t(T.name) ? u()(T.expires_at).add(2, "years").format(D) : u()(T.expires_at).add(1, "year").format(D);
				return c({
					name: T == null ? void 0 : T.name,
					zone: He,
					entitlements: Q,
					registryCheck: _e,
					nameservers: T.name_servers,
					isAvailable: T.available,
					lastKnownStatus: T.last_known_status,
					authCode: T.auth_code,
					isEnterpriseZone: (He == null || (ke = He.plan) === null || ke === void 0 ? void 0 : ke.legacy_id) === "enterprise",
					isActiveZone: (He == null ? void 0 : He.status) === "active",
					corResponsesPending: T.cor_responses_pending,
					isCorLocked: T.cor_locked,
					corLockedUntil: T.cor_locked_until ? u()(T.cor_locked_until).format(D) : null,
					isFullZone: (He == null ? void 0 : He.type) == n.xd.Full,
					isLocked: T.locked,
					registrar: T.current_registrar || m.JM,
					zoneId: He == null ? void 0 : He.id,
					currentExpiration: u()(T.expires_at).format(D),
					newExpiration: Zt(),
					lastEntitledAt: T.last_entitled_at ? new Date(T.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(Q) && !!Q.find(Wt => Wt.id === m.g5 && Wt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: T.transfer_in && E(T.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: T.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: T.transfer_in,
					transferOut: T.transfer_out,
					autoRenew: T.auto_renew === !0,
					lastTransferredAt: T.last_transferred_at,
					createdAt: T.created_at,
					paymentExpiresAt: u()(T.payment_expires_at).isValid() ? u()(T.payment_expires_at) : u()(T.expires_at).isValid() ? u()(T.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (je = T.contacts) === null || je === void 0 || (Ke = je.administrator) === null || Ke === void 0 ? void 0 : Ke.id,
						[n.l2.Billing]: (Ge = T.contacts) === null || Ge === void 0 || (et = Ge.billing) === null || et === void 0 ? void 0 : et.id,
						[n.l2.Registrant]: (ut = T.contacts) === null || ut === void 0 || (Je = ut.registrant) === null || Je === void 0 ? void 0 : Je.id,
						[n.l2.Technical]: (Ve = T.contacts) === null || Ve === void 0 || (Rt = Ve.technical) === null || Rt === void 0 ? void 0 : Rt.id
					},
					landing: T.landing,
					privacy: T.privacy,
					whois: T.whois,
					emailVerified: T.email_verified,
					materialChanges: S(T.material_changes),
					corChanges: T.cor_changes ? N(Object.assign(c({}, A), T.cor_changes)) : {},
					registryStatuses: T.registry_statuses ? T.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (xt = T.domain_protection_services) === null || xt === void 0 ? void 0 : xt.status
					},
					deletion: {
						isDeletable: T == null || (Bt = T.deletion) === null || Bt === void 0 ? void 0 : Bt.is_deletable
					},
					premiumType: T == null ? void 0 : T.premium_type,
					fees: T == null ? void 0 : T.fees
				}, T.domain_move && {
					domainMove: {
						ineligibilityReasons: (Ft = T.domain_move) === null || Ft === void 0 ? void 0 : Ft.ineligibility_reasons
					}
				}, T.actionable_metadata && {
					actionableMetadata: y(T.actionable_metadata)
				}, T.policies && {
					policies: c({}, T.policies.suspension && {
						suspension: {
							parked: T.policies.suspension.parked,
							parkingReason: T.policies.suspension.parking_reason,
							paymentExpired: T.policies.suspension.payment_expired
						}
					})
				})
			}

			function y(p) {
				return p.map(T => ({
					accountContext: T.account_context,
					createdAt: T.created_at,
					expiresAt: T.expires_at,
					sentAt: T.sent_at,
					status: T.status,
					type: T.type
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

			function E(p) {
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

			function b(p) {
				let T = p.extensions;
				(T == null ? void 0 : T.application_purpose) && (T == null ? void 0 : T.nexus_category) && (p.extensions = {
					nexusCategory: T.nexus_category,
					applicationPurpose: T.application_purpose
				});
				let Q = c({}, typeof p.id == "string" ? {
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
				return V(Q)
			}

			function S(p) {
				let T = [];
				const Q = {
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
					const ke = p[_e],
						je = Q[ke];
					T.push(je)
				}
				return T
			}
			const k = p => {
				if (!p) return null;
				let T = p;
				return p.includes("C31") && (T = "C31"), p.includes("C32") && (T = "C32"), T
			};

			function N(p) {
				return c({}, typeof p.id == "string" ? {
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
						nexusCategory: k(p.extensions.nexus_category),
						applicationPurpose: p.extensions.application_purpose
					}
				} : {})
			}

			function w(p = {}) {
				const T = {
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
					transferConditions: c({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, p.transferConditions || {}),
					transferIn: c({
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
				return Object.assign(T, p)
			}

			function C(p = {}) {
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

			function P(p) {
				const T = m.Py.concat(m.ui).reduce((Q, _e) => c({}, Q, {
					[_e]: []
				}), {});
				return p.forEach(Q => {
					let _e = L(Q.registrar);
					_e in T || (_e = m.ui), st(Q.name) && (_e = "uk"), T[_e].push(Q)
				}), Object.keys(T).sort((Q, _e) => Q.localeCompare(_e)).map(Q => ({
					registrar: Q,
					domains: T[Q]
				})).filter(Q => Q.domains.length > 0)
			}

			function L(p) {
				return p == null ? void 0 : p.toLowerCase().replace(/\s|,|\./g, "")
			}

			function j(p) {
				if (!p || !p.registrar) return "unknown";
				if (st(p.name)) return "uk";
				const T = L(p.registrar);
				return T in m.gM ? T : "unknown"
			}
			const X = [];

			function oe(p) {
				return X.some(T => p.endsWith("." + T))
			}

			function pe(p) {
				return !p.isEnterpriseZone || !Array.isArray(p.entitlements) ? !1 : !!p.entitlements.find(({
					id: T,
					allocation: Q
				}) => T === m.g5 && Q.value === !0)
			}

			function ce(p) {
				var T;
				const Q = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let _e = !1,
					ke = null;
				return (T = p.registryStatuses) === null || T === void 0 || T.some(je => {
					Q.includes(je) && (ke = je, _e = !0)
				}), [_e, ke]
			}

			function K(p, T = !1) {
				if (!p) return [!1, v.keys.cannot_transfer_default];
				if (p.zone.status !== "active") return [!1, v.keys.cannot_transfer_zone_not_active];
				if (!p.isFullZone && !pe(p)) return [!1, v.keys.cannot_transfer_zone_not_eligible];
				if (p.registrar === "Cloudflare") return [!1, v.keys.cannot_transfer_domain_on_cf];
				if (p.isAvailable) return [!1, v.keys.cannot_transfer_domain_available];
				if (!p.transferConditions) return [!1, v.keys.cannot_transfer_domain_transfer_conditions];
				if (!T && Et(p == null ? void 0 : p.premiumType)) return [!1, v.keys.cannot_transfer_domain_premium];
				if (G(p)) return [!1, v.keys.cannot_transfer_domain_transfer_in_progress];
				let Q;
				for (Q in p.transferConditions)
					if (Q !== "not_premium" && !p.transferConditions[Q]) return [!1, v.keys.cannot_transfer_domain_transfer_conditions];
				if (oe(p.name)) return [!1, v.keys.cannot_transfer_domain_tld_not_supported];
				const [_e, ke] = ce(p);
				return _e && ke ? [!1, v.keys.cannot_transfer_domain_registry_status[ke]] : [!0, ""]
			}

			function G(p) {
				var T, Q;
				return !!p.transferIn && !((T = p.transferConditions) === null || T === void 0 ? void 0 : T.not_started) && !!(st(p.name) || ((Q = p.registryStatuses) === null || Q === void 0 ? void 0 : Q.includes(n.rj.PENDING_TRANSFER)))
			}

			function W(p) {
				return !!p.registrar && !!p.currentExpiration
			}

			function x(p, T = !1) {
				const [Q] = K(p, T);
				return W(p) ? ge(p) ? n.M5.InProgressOrOnCF : Q ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function h(p) {
				return p.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(p.transferIn.enter_auth_code) || !1
			}

			function M(p) {
				return p.registrar === "Cloudflare"
			}

			function F(p) {
				return !!(p == null ? void 0 : p.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function q(p) {
				return !!(p == null ? void 0 : p.includes(n.rj.PENDING_TRANSFER))
			}
			const ee = "Invalid date";

			function ne(p) {
				return p.newExpiration === ee ? "Unavailable" : p.newExpiration
			}

			function Y(p) {
				return p.currentExpiration === ee ? "Unavailable" : p.currentExpiration
			}

			function B(p) {
				return p.substring(p.indexOf("."))
			}

			function z(p = "") {
				return p.indexOf(".") !== -1 ? p.substring(0, p.indexOf(".")) : p
			}

			function te(p) {
				return p.map(T => T.name).map(T => B(T)).filter((T, Q, _e) => !_e.includes(T, Q + 1))
			}

			function le(p) {
				if (m.no) return [!0, ""];
				if (!M(p)) return [!1, n.ok.NotOnCF];
				if (p.isCorLocked) return [!1, p.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (p.lastTransferredAt) {
					const T = u()(p.lastTransferredAt),
						Q = u().duration(u()().diff(T)).as("days"),
						_e = st(p.name);
					if (Q < (_e ? 1 : 60)) return [!1, _e ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (p.createdAt) {
					const T = u()(p.createdAt);
					if (u().duration(u()().diff(T)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function ue(p) {
				return !!(m.Bc || p.transferOut)
			}

			function ge(p) {
				return Te(p) || M(p)
			}

			function ye(p) {
				return !Te(p) && M(p)
			}

			function Te(p) {
				return !p || p.lastKnownStatus === n.kd.PENDING_TRANSFER || p.lastKnownStatus === n.kd.TRANSFER_FOA_PENDING || !M(p) && p.transferConditions && !p.transferConditions.not_started || !1
			}

			function Oe(p) {
				return !(oe(p.name) || p.transferConditions && !p.transferConditions.supported_tld)
			}

			function ve(p) {
				return (p == null ? void 0 : p.includes("/")) ? !0 : p.split("").some(T => T.charCodeAt(0) > 123)
			}

			function De(p) {
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

			function Me(p) {
				return u()(p.paymentExpiresAt).isBefore(u()())
			}

			function Ne(p) {
				return p.transferIn && p.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function pt(p) {
				const T = ["CU", "KP", "IR", "SY"];
				return p.filter(Q => !T.includes(Q.code))
			}

			function Qe(p) {
				if (!!p) return `${p.charAt(0).toUpperCase()}${p.slice(1)}${p.charAt(p.length-1)==="."?"":"."}`
			}

			function V(p) {
				const T = {};
				for (const [Q, _e] of Object.entries(p)) {
					if (_e && typeof _e == "string") {
						Object.assign(T, {
							[Q]: _e.trim()
						});
						continue
					}
					Object.assign(T, {
						[Q]: _e
					})
				}
				return T
			}

			function fe(p) {
				return u()(p).add(40, "days")
			}

			function Se(p) {
				const T = p.paymentExpiresAt || p.payment_expires_at,
					Q = fe(T);
				return u()().isBetween(T, Q)
			}

			function Ye(p) {
				var T;
				return !(p == null ? void 0 : p.registryStatuses) || !Array.isArray(p == null ? void 0 : p.registryStatuses) && !(0, e.isString)(p == null ? void 0 : p.registryStatuses) ? !1 : (T = p.registryStatuses) === null || T === void 0 ? void 0 : T.includes(n.rj.REDEMPTION_PERIOD)
			}

			function Be(p) {
				var T;
				return !(p == null ? void 0 : p.registryStatuses) || !Array.isArray(p == null ? void 0 : p.registryStatuses) && !(0, e.isString)(p == null ? void 0 : p.registryStatuses) ? !1 : (T = p.registryStatuses) === null || T === void 0 ? void 0 : T.includes(n.rj.PENDING_DELETE)
			}

			function nt(p) {
				return [".us"].includes(p)
			}

			function rt(p) {
				return [".us"].includes(p)
			}

			function ot(p) {
				switch (p) {
					case ".us":
						return de();
					default:
						return []
				}
			}

			function ct(p) {
				switch (p) {
					case ".us":
						return H;
					default:
						return {}
				}
			}
			const H = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function de() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([p, T]) => ({
						value: p,
						label: T
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([p, T]) => ({
						value: p,
						label: T
					}))
				}]
			}

			function be(p, T, Q) {
				return T[T.length - 1][Q] === p[Q]
			}

			function Ie(p) {
				return Boolean(Object.keys(p).length === 0)
			}

			function he(p) {
				return u()().add(p, "year").format(D)
			}

			function xe({
				accountName: p
			}) {
				var T;
				const Q = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((T = p.toLowerCase().match(Q)) === null || T === void 0 ? void 0 : T[0]) || ""
			}

			function We(p) {
				return !!p.match(f.default.email)
			}

			function at(p) {
				return p === l.W7.PENDING_UPDATE
			}

			function Xe(p) {
				return p ? Object.values(l.wR).filter(T => T !== l.wR.OFFBOARDED).includes(p) : !1
			}

			function mt(p) {
				return p ? [l.wR.LOCKED, l.wR.ONBOARDED, l.wR.ONBOARDING_INITIATED, l.wR.PENDING_REGISTRY_LOCK, l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(p) : !1
			}

			function Ct(p) {
				return p ? l.wR.UNLOCKED === p : !1
			}

			function ft(p) {
				return p ? l.wR.LOCKED === p : !1
			}

			function vt(p) {
				return p ? l.wR.PENDING_REGISTRY_LOCK === p : !1
			}

			function Ue(p) {
				return p ? [l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(p) : !1
			}

			function ze(p) {
				var T;
				return !1
			}

			function qe(p) {
				var T;
				return !1
			}

			function lt(p) {
				var T;
				return !1
			}

			function Pe(p) {
				var T;
				return !1
			}

			function Z(p) {
				var T;
				return !1
			}

			function se(p) {
				return Object.keys(l.wR).find(T => l.wR[T].toLowerCase() === p.toLowerCase())
			}

			function Ee(p) {
				var T;
				const Q = (T = se(p)) === null || T === void 0 ? void 0 : T.toLowerCase();
				return Q ? v.keys.protection_status[Q] : v.keys.protection_status.unknown
			}

			function Ce(p) {
				return ["com", "net"].includes(p)
			}

			function Le(p) {
				const T = (0, s.pu)(p);
				return Ce(T) ? l.wR.PENDING_REGISTRY_LOCK : l.wR.LOCKED
			}

			function $e(p) {
				return (0, s.pu)(p) === "co" ? 5 : 10
			}

			function it(p, T) {
				return T ? 1 : (0, s.pu)(p) === "co" ? 5 : (0, s.pu)(p) === "org" ? 1 : 10
			}

			function st(p) {
				return (0, s.pu)(p) === "uk"
			}

			function Dt(p) {
				return (0, s.pu)(p) === "us"
			}

			function _t(p) {
				return (0, s.pu)(p) === "ai"
			}

			function Ze(p) {
				return u()(p).isValid()
			}

			function Tt(p) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(p)
			}

			function Pt(p) {
				return !!(p == null ? void 0 : p.id)
			}

			function Ot(p) {
				return p ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(p) : !1
			}

			function Lt(p) {
				return p ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(p) : !1
			}

			function St(p) {
				var T;
				return (p == null ? void 0 : p.lastKnownStatus) ? (T = p.lastKnownStatus) === null || T === void 0 ? void 0 : T.includes("deletionIrredeemable") : !1
			}

			function Et(p) {
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

			function It(p) {
				if (!p || !p.message) return n.OJ.DEFAULT;
				const {
					message: T
				} = p;
				switch (!0) {
					case T.includes("feature disabled"):
						return n.OJ.FEATURE_DISABLED;
					case T.includes("email unverified"):
						return n.OJ.EMAIL_UNVERIFIED;
					case T.includes("account blocked"):
						return n.OJ.ACCOUNT_BLOCKED;
					default:
						return n.OJ.DEFAULT
				}
			}

			function yt(p) {
				var T, Q;
				return !!(((T = p.policies) === null || T === void 0 || (Q = T.suspension) === null || Q === void 0 ? void 0 : Q.parked) && p.policies.suspension.parkingReason)
			}

			function ht(p) {
				var T, Q;
				return yt(p) && ((T = p.policies) === null || T === void 0 || (Q = T.suspension) === null || Q === void 0 ? void 0 : Q.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function kt(p) {
				var T, Q;
				return yt(p) && ((T = p.policies) === null || T === void 0 || (Q = T.suspension) === null || Q === void 0 ? void 0 : Q.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function $t(p) {
				var T;
				return !((T = p.domainMove) === null || T === void 0 ? void 0 : T.ineligibilityReasons.length)
			}

			function Mt(p) {
				var T, Q;
				return !!((T = p.domainMove) === null || T === void 0 || (Q = T.ineligibilityReasons) === null || Q === void 0 ? void 0 : Q.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function gt(p) {
				var T;
				return (T = p.actionableMetadata) === null || T === void 0 ? void 0 : T.find(Q => Q.type === n.wg.DOMAIN_MOVE)
			}

			function Nt(p) {
				const T = gt(p);
				return (T == null ? void 0 : T.status) === "pending" && T.accountContext === n._5.GAINING
			}

			function wt(p) {
				const T = gt(p);
				return (T == null ? void 0 : T.status) === "pending" && T.accountContext === n._5.LOSING
			}

			function ie(p) {
				const T = B(p.name);
				return !m.Pf.includes(T)
			}

			function re(p) {
				return m.QZ.includes(p)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Bc: function() {
					return m
				},
				HG: function() {
					return Te
				},
				Hv: function() {
					return Oe
				},
				JM: function() {
					return a
				},
				Pf: function() {
					return d
				},
				Py: function() {
					return f
				},
				QZ: function() {
					return o
				},
				WK: function() {
					return n
				},
				g5: function() {
					return c
				},
				gM: function() {
					return l
				},
				jk: function() {
					return ye
				},
				no: function() {
					return v
				},
				uY: function() {
					return s
				},
				ui: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../flags.ts");
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
				f = Object.keys(l),
				s = !0,
				m = (0, r.J8)("registrar_mock_transfer_out") || !1,
				v = (0, r.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				c = "cf_registrar.enabled",
				i = "@abcABC1234567890123456",
				d = [".us"],
				o = [".travel", ".us", ".ong", ".ngo"],
				g = (0, e.BC)`/${"accountId"}`,
				I = (0, e.BC)`${g}/add-site`,
				D = (0, e.BC)`${g}/registrar`,
				O = (0, e.BC)`${D}/domains`,
				y = (0, e.BC)`${D}/action-center`,
				A = (0, e.BC)`${D}/domain/${"zoneName"}`,
				E = (0, e.BC)`${A}/configuration`,
				b = (0, e.BC)`${A}/contacts`,
				S = (0, e.BC)`${D}/pricing`,
				k = (0, e.BC)`${D}/protection`,
				N = (0, e.BC)`${D}/register`,
				w = (0, e.BC)`${N}/checkout`,
				C = (0, e.BC)`${N}/checkout/${"token"}`,
				P = (0, e.BC)`${N}/success`,
				L = (0, e.BC)`${D}/tlds`,
				j = (0, e.BC)`${D}/transfer`,
				X = (0, e.BC)`${D}/transfer/${"zoneName"}`,
				oe = (0, e.BC)`/registrar/accounts/verify_email`,
				pe = (0, e.BC)`/registrar/domains/verify_email`,
				ce = (0, e.BC)`/sign-up/registrar`,
				K = (0, e.BC)`${D}/verify-email`,
				G = (0, e.BC)`${g}/${"zoneName"}`,
				W = (0, e.BC)`${g}/domains`,
				x = (0, e.BC)`${W}/action-center`,
				h = (0, e.BC)`${W}/${"zoneName"}`,
				M = (0, e.BC)`${h}/configuration`,
				F = (0, e.BC)`${h}/contacts`,
				q = (0, e.BC)`${W}/pricing`,
				ee = (0, e.BC)`${W}/protection`,
				ne = (0, e.BC)`${W}/register`,
				Y = (0, e.BC)`${ne}/checkout`,
				B = (0, e.BC)`${ne}/checkout/${"token"}`,
				z = (0, e.BC)`${ne}/success`,
				te = (0, e.BC)`${W}/tlds`,
				le = (0, e.BC)`${W}/transfer`,
				ue = (0, e.BC)`${W}/transfer/${"zoneName"}`,
				ge = (0, e.BC)`${W}/verify-email`,
				ye = {
					addSite: I,
					domains: O,
					domainsActionCenter: y,
					domainsDomain: A,
					domainsDomainConfiguration: E,
					domainsDomainContacts: b,
					domainsPricing: S,
					domainsProtection: k,
					domainsRegister: N,
					domainsRegisterCheckout: w,
					domainsRegisterCheckoutToken: C,
					domainsRegisterSuccess: P,
					domainsTlds: L,
					domainsTransfer: j,
					domainsTransferZone: X,
					registrar: D,
					registrarAccountsVerifyEmail: oe,
					registrarDomainsVerifyEmail: pe,
					signup: ce,
					verifyEmail: K,
					zone: G
				},
				Te = {
					LEGACY_domains: W,
					LEGACY_domainsActionCenter: x,
					LEGACY_domainsDomain: h,
					LEGACY_domainsDomainConfiguration: M,
					LEGACY_domainsDomainContacts: F,
					LEGACY_domainsPricing: q,
					LEGACY_domainsProtection: ee,
					LEGACY_domainsRegister: ne,
					LEGACY_domainsRegisterCheckout: Y,
					LEGACY_domainsRegisterCheckoutToken: B,
					LEGACY_domainsRegisterSuccess: z,
					LEGACY_domainsTlds: te,
					LEGACY_domainsTransfer: le,
					LEGACY_domainsTransferZone: ue,
					LEGACY_verifyEmail: ge
				},
				Oe = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				HO: function() {
					return s
				},
				NW: function() {
					return m
				},
				ZQ: function() {
					return u
				},
				b_: function() {
					return f
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");
			const a = v => {
					const n = v && v.accountFlags && v.accountFlags.data && v.accountFlags.data.registrar && v.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(c => c.trim()) : []
				},
				u = v => {
					var n, c, i;
					return ((n = v.accountFlags) === null || n === void 0 || (c = n.data) === null || c === void 0 || (i = c.registrar) === null || i === void 0 ? void 0 : i["registrar-managed"]) || !1
				},
				l = v => v.account ? v.account.email : "",
				f = v => !1,
				s = v => f(v) && (0, e.oJ)((0, e.Zu)(v)),
				m = v => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: c
					} = v.registrar.registrations;
					return n && !(c.accepted_date || c.id || c.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				J: function() {
					return c
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(a),
				l = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function f(i) {
				for (var d = 1; d < arguments.length; d++) {
					var o = arguments[d] != null ? Object(arguments[d]) : {},
						g = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(o).filter(function(I) {
						return Object.getOwnPropertyDescriptor(o, I).enumerable
					})), g.forEach(function(I) {
						s(i, I, o[I])
					})
				}
				return i
			}

			function s(i, d, o) {
				return d = m(d), d in i ? Object.defineProperty(i, d, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = o, i
			}

			function m(i) {
				var d = v(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function v(i, d) {
				if (typeof i != "object" || i === null) return i;
				var o = i[Symbol.toPrimitive];
				if (o !== void 0) {
					var g = o.call(i, d || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			let n = function(i) {
				return i.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", i.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", i.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", i.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", i.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", i.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", i.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", i.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", i.RENEW_DOMAIN_COMPLETED = "domain renewal completed", i.RESTORE_DOMAIN_INIT = "click to open domain restore modal", i.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", i.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", i.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", i.RESTORE_DOMAIN_FAILURE = "domain restore failed", i.RESTORE_DOMAIN_COMPLETED = "domain restore completed", i.DOMAIN_DELETE_INIT = "click to begin domain delete", i.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", i.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", i.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", i.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", i.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", i.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", i.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", i.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", i.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", i.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", i.DOMAIN_MOVE_START_FLOW = "Start domain move flow", i.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", i.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", i.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", i.DOMAIN_MOVE_SUBMIT = "Submit domain move", i.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", i.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", i.DOMAIN_MOVE_CANCEL = "Domain move cancel", i.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", i.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", i.ACTION_CENTER_NAVIGATE = "Navigate to actions center", i.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", i
			}({});

			function c(i, d, o) {
				if (!(d == null ? void 0 : d.name)) return null;
				u().sendEvent(i, f({
					domain: {
						name: d.name,
						premium: (0, l.Uy)(d == null ? void 0 : d.premiumType),
						paymentExpiresAt: r()(d == null ? void 0 : d.paymentExpiresAt).format()
					},
					category: "registrar"
				}, o))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				HX: function() {
					return s
				},
				Re: function() {
					return O
				},
				Rh: function() {
					return g
				},
				hX: function() {
					return d
				},
				s_: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				l = t("../react/pages/home/members/utils.ts"),
				f = t("../react/utils/translator.tsx");
			let s = function(y) {
				return y.UNKNOWN = "unknown", y.WORKERS = "workers", y.ACCESS_APPS = "access_apps", y.ACCESS_IDP = "access_ipd", y
			}({});
			const m = [{
				value: s.WORKERS,
				label_i18n: "policy.granular_resources.type.workers",
				scopeKeyPrefix: "com.cloudflare.edge.worker.script",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: s.ACCESS_APPS,
				label_i18n: "policy.granular_resources.type.access_apps",
				scopeKeyPrefix: "com.cloudflare.edge.access.app",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: s.ACCESS_IDP,
				label_i18n: "policy.granular_resources.type.access_idp",
				scopeKeyPrefix: "com.cloudflare.edge.access.identity-provider",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}];

			function v(y) {
				return {
					key: "com.cloudflare.edge.worker.script." + y.id,
					name: y.name + (y.environment ? ` (${y.environment})` : ""),
					type: s.WORKERS
				}
			}

			function n(y) {
				const A = y;
				return {
					key: "com.cloudflare.edge.access.app." + A.id,
					name: A.name,
					type: s.ACCESS_APPS
				}
			}
			const c = {
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

			function i(y) {
				const A = y,
					E = c[A.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + A.id,
					name: `${E||"Unknown Type"}${A.name?" - "+A.name:""}`,
					type: s.ACCESS_IDP
				}
			}
			const d = async (y, A, E) => A == s.WORKERS ? (await o(`/accounts/${y}/workers/scripts-search?name=${E}&perPage=10`)).body.result.map(b => ({
				id: b.id,
				name: b.service_name || b.script_name,
				environment: b.environment_name
			})).map(v) : A == s.ACCESS_APPS ? (await o(`/accounts/${y}/access/apps?name=${E}`)).body.result.map(n) : A == s.ACCESS_IDP ? (await o(`/accounts/${y}/access/identity_providers`)).body.result.map(i) : [];
			async function o(y) {
				try {
					return await (0, e.get)(y, {
						hideErrorAlert: !0
					})
				} catch (b) {
					var A, E;
					throw ((A = b.body) === null || A === void 0 ? void 0 : A.errors) ? b.body.errors[0].message : b.text ? b.text : ((E = b.response) === null || E === void 0 ? void 0 : E.statusText) ? b.response.statusText : "Unexpected error response"
				}
			}
			const g = async (y, A) => {
				const E = A.split("."),
					b = E.pop(),
					S = E.join(".");
				let k;
				switch (S) {
					case "com.cloudflare.edge.worker.script":
						const N = (await o(`/accounts/${y}/workers/scripts-search/${b}`)).body.result;
						return v({
							id: N.id,
							name: N.service_name || N.script_name,
							environment: N.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return k = await o(`/accounts/${y}/access/identity_providers/${b}`), i(k.body.result);
					case "com.cloudflare.edge.access.app":
						return k = await o(`/accounts/${y}/access/apps/${b}`), n(k.body.result)
				}
			}, I = {
				loading: !0,
				isDisabled: !0
			}, D = () => "production";

			function O(y) {
				const A = (0, l.vq)(y),
					[E, b] = (0, a.useState)(!0),
					[S, k] = (0, a.useState)(m.filter(N => A.find(w => w.meta.scopes === N.scopeKeyPrefix)).map(N => {
						const w = N.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							C = A.filter(P => P.meta.scopes === N.scopeKeyPrefix).find(P => !P.meta.visibility || P.meta.visibility !== "beta");
						return {
							value: N.value,
							label: (0, f.ZP)(N.label_i18n),
							state: w ? I : {
								loading: !1,
								isDisabled: !1
							},
							beta: !C
						}
					}));
				return (0, a.useEffect)(() => {
					(async () => {
						try {
							await d(y, s.ACCESS_APPS, ""), I.isDisabled = !1
						} catch (N) {
							N.startsWith("access.api.error.not_enabled") ? I.disableInfo = (0, f.ZP)("policy.granular_resources.type.access.not_enabled") : I.error = N
						}
						I.loading = !1, k([...S])
					})()
				}, []), (0, a.useEffect)(() => {
					const N = S.find(w => w.state.loading);
					b(!!N)
				}, [S]), {
					types: S,
					isLoading: E
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Ey: function() {
					return v
				},
				F4: function() {
					return I
				},
				Go: function() {
					return d
				},
				Lc: function() {
					return b
				},
				Np: function() {
					return c
				},
				Rl: function() {
					return i
				},
				Sb: function() {
					return o
				},
				Sw: function() {
					return E
				},
				Sz: function() {
					return A
				},
				Ti: function() {
					return S
				},
				Uw: function() {
					return O
				},
				Zl: function() {
					return D
				},
				jk: function() {
					return y
				},
				r6: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/members`,
				u = (0, e.BC)`${a}/invite`,
				l = (0, e.BC)`${a}/invite/${"memberId"}`,
				f = (0, e.BC)`${a}/add-policy/${"memberId"}`,
				s = (0, e.BC)`${a}/user-groups`,
				m = (0, e.BC)`${a}/user-groups/${"userGroupId"}`,
				v = "com.cloudflare.api.account",
				c = v + "." + "zone",
				i = c + ".",
				d = 100,
				o = 200,
				g = 5,
				I = 300,
				D = "INVITE_TOAST",
				O = "00000000000000000000000000000000",
				y = {
					account: r,
					members: a,
					groups: s,
					group: m,
					inviteMembers: u,
					editMember: l,
					addPolicy: f
				},
				A = {
					allow: "allow",
					deny: "deny"
				},
				E = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				b = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				S = {
					accountId: "",
					effect: A.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/utils.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				AX: function() {
					return y
				},
				Co: function() {
					return D
				},
				JP: function() {
					return O
				},
				Ld: function() {
					return i
				},
				YW: function() {
					return m
				},
				_k: function() {
					return d
				},
				c$: function() {
					return v
				},
				rC: function() {
					return S
				},
				vq: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				r = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				a = t("../react/pages/home/members/constants.ts");

			function u(k) {
				for (var N = 1; N < arguments.length; N++) {
					var w = arguments[N] != null ? Object(arguments[N]) : {},
						C = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(w).filter(function(P) {
						return Object.getOwnPropertyDescriptor(w, P).enumerable
					})), C.forEach(function(P) {
						l(k, P, w[P])
					})
				}
				return k
			}

			function l(k, N, w) {
				return N = f(N), N in k ? Object.defineProperty(k, N, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[N] = w, k
			}

			function f(k) {
				var N = s(k, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function s(k, N) {
				if (typeof k != "object" || k === null) return k;
				var w = k[Symbol.toPrimitive];
				if (w !== void 0) {
					var C = w.call(k, N || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(k)
			}
			const m = () => u({}, a.Ti),
				v = () => u({}, a.Lc, {
					scopes: [m()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = k => k.map(N => ({
					scope: {
						key: N,
						objects: [{
							key: "*"
						}]
					}
				})),
				c = (k, N, w) => {
					var C;
					let P = [],
						L = [];
					const j = [],
						X = [];
					k.scopes.forEach(ce => {
						if (ce.mode === a.Sw.all) w ? P.push({
							id: w
						}) : P.push({
							scope: {
								key: `com.cloudflare.api.account.${N}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (ce.mode === a.Sw.domain_group) {
							const G = {
								id: ce.resourceGroupId
							};
							ce.effect === a.Sz.allow ? P.push(G) : L.push(G)
						} else if (ce.mode === a.Sw.zone) {
							const G = `${a.Rl}${ce.zoneId}`;
							ce.effect === a.Sz.allow ? j.push(G) : X.push(G)
						} else if (ce.mode === a.Sw.granular && ce.granularResourceKey) {
							var K;
							const G = ce.granularProduct,
								x = `${(K=r.s_.find(h=>h.value===G))===null||K===void 0?void 0:K.scopeSubsetOfPrefix}.${N}`;
							P.push({
								scope: {
									key: `${ce.granularResourceKey}`,
									subset_of: [{
										key: `${x}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), j.length && (P = P.concat(n(j))), X.length && (L = L.concat(n(X)));
					const oe = (C = k.permission_groups) === null || C === void 0 ? void 0 : C.map(ce => ({
							id: ce
						})),
						pe = [];
					return pe.push({
						access: a.Sz.allow,
						permission_groups: oe,
						resource_groups: P
					}), L.length && pe.push({
						access: a.Sz.deny,
						permission_groups: oe,
						resource_groups: L
					}), pe
				},
				i = k => k.map(N => {
					var w;
					return {
						access: N.access,
						permission_groups: N.permission_groups.map(C => ({
							id: C.id
						})),
						resource_groups: (w = N.resource_groups) === null || w === void 0 ? void 0 : w.map(C => ({
							scope: {
								key: C.scope.key,
								objects: C.scope.objects
							},
							id: C.id
						}))
					}
				}),
				d = (k, N, w, C) => {
					const P = k.auto_accept;
					let L = [];
					return L = L.concat(c(k, N, w)), C && (L = L.concat(i(C))), {
						auto_accept: P,
						status: P ? "accepted" : "pending",
						policies: L
					}
				},
				o = k => {
					const N = k.split(".");
					return N[N.length - 1]
				},
				g = k => {
					var N, w;
					const C = k == null ? void 0 : k.access;
					let P = [],
						L = k == null || (N = k.resource_groups) === null || N === void 0 ? void 0 : N.map(j => {
							var X;
							const oe = I(j);
							if ((j == null || (X = j.meta) === null || X === void 0 ? void 0 : X.editable) === "false") return {
								effect: C,
								mode: a.Sw.all,
								accountId: o(j.id)
							};
							if (oe) {
								var pe;
								return {
									effect: C,
									mode: a.Sw.granular,
									granularProduct: oe.value,
									granularResourceKey: j == null || (pe = j.scope) === null || pe === void 0 ? void 0 : pe.key
								}
							} else if (!j.name) j.scope.key.startsWith(a.Rl) ? P.push({
								key: j.scope.key
							}) : P = P.concat(j.scope.objects);
							else return {
								effect: C,
								mode: a.Sw.domain_group,
								resourceGroupId: o(j.id)
							}
						}).filter(j => j);
					if ((w = P) === null || w === void 0 ? void 0 : w.length) {
						let j = P.map(X => {
							const oe = o(X.key);
							return {
								effect: C,
								mode: a.Sw.zone,
								zoneId: oe
							}
						});
						L = L.length ? j.concat(L) : j
					}
					return L
				},
				I = k => {
					var N, w, C, P;
					const L = k == null || (N = k.scope) === null || N === void 0 ? void 0 : N.key.split(".").slice(0, -1).join("."),
						j = k == null || (w = k.scope) === null || w === void 0 || (C = w.subset_of) === null || C === void 0 || (P = C[0]) === null || P === void 0 ? void 0 : P.key.split(".").slice(0, -1).join(".");
					return r.s_.find(X => X.scopeKeyPrefix === L && X.scopeSubsetOfPrefix === j)
				},
				D = k => {
					if (!(k == null ? void 0 : k.length)) return [];
					const N = [];
					return k.forEach(w => {
						var C;
						(C = w.resource_groups) === null || C === void 0 || C.forEach(P => {
							var L, j;
							((L = P.scope) === null || L === void 0 || (j = L.key) === null || j === void 0 ? void 0 : j.startsWith(a.Rl)) && N.push(o(P.scope.key))
						})
					}), N
				},
				O = k => {
					if (!(k == null ? void 0 : k.length)) return [];
					const N = [];
					return k.forEach(w => {
						var C;
						(C = w.resource_groups) === null || C === void 0 || C.forEach(P => {
							var L, j;
							if (!((L = P.scope) === null || L === void 0 || (j = L.key) === null || j === void 0 ? void 0 : j.startsWith(a.Rl))) {
								var X;
								const pe = (X = P.scope) === null || X === void 0 ? void 0 : X.objects;
								for (let ce = 0; ce < (pe == null ? void 0 : pe.length) && ce < a.r6; ce++) {
									var oe;
									((oe = pe[ce].key) === null || oe === void 0 ? void 0 : oe.startsWith(a.Rl)) && N.push(o(pe[ce].key))
								}
							}
						})
					}), N
				},
				y = k => {
					var N;
					if (!(k == null ? void 0 : k.length)) return null;
					const w = (N = k[0]) === null || N === void 0 ? void 0 : N.permission_groups.map(j => j.id);
					let C, P;
					k == null || k.forEach(j => {
						j.access === a.Sz.allow && (C = j), j.access === a.Sz.deny && (P = j)
					});
					let L = [];
					return C && (L = g(C)), P && (L = L.concat(g(P))), {
						permission_groups: w,
						scopes: L
					}
				},
				A = "permission-groups-",
				E = new Map,
				b = k => {
					if (!k) return [];
					const N = E.get(k);
					if (N) return N;
					const w = e.E.get(`${A}${k}`);
					return E.set(k, w), w
				},
				S = (k, N) => {
					const w = [];
					for (let C = 0; C < sessionStorage.length; C++) {
						const P = sessionStorage.key(C);
						(P == null ? void 0 : P.startsWith(A)) && w.push(P)
					}
					return w.length >= 5 && e.E.remove(w[0]), e.E.set(`${A}${k}`, N)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				g: function() {
					return r
				}
			});
			var e = t("../../../common/util/types/src/api/phases/fields.tsx");
			const r = {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				F: function() {
					return e
				}
			});
			let e = function(r) {
				return r.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", r.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", r.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", r.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", r.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", r.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", r.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", r.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", r.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", r.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", r.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", r.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", r.GET_SYN_PROTECTION_RULE = "view syn protection rules list", r.GET_SYN_PROTECTION_RULES = "view syn protection rule", r.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", r.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", r.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", r.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", r.GET_SYN_PROTECTION_FILTER = "view syn protection filter", r.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", r.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", r.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", r.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", r.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", r.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", r.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", r.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", r.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", r.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", r.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", r.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", r.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", r.GET_DNS_PROTECTION_RULES = "view dns protection rules list", r.GET_DNS_PROTECTION_RULE = "view dns protection rule", r.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", r.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", r.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", r
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				KO: function() {
					return s
				},
				L9: function() {
					return n
				},
				N3: function() {
					return v
				},
				zE: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(c) {
				for (var i = 1; i < arguments.length; i++) {
					var d = arguments[i] != null ? Object(arguments[i]) : {},
						o = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && o.push.apply(o, Object.getOwnPropertySymbols(d).filter(function(g) {
						return Object.getOwnPropertyDescriptor(d, g).enumerable
					})), o.forEach(function(g) {
						u(c, g, d[g])
					})
				}
				return c
			}

			function u(c, i, d) {
				return i = l(i), i in c ? Object.defineProperty(c, i, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = d, c
			}

			function l(c) {
				var i = f(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function f(c, i) {
				if (typeof c != "object" || c === null) return c;
				var d = c[Symbol.toPrimitive];
				if (d !== void 0) {
					var o = d.call(c, i || "default");
					if (typeof o != "object") return o;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}
			let s = function(c) {
					return c.PURCHASE_WORKERS_PAID = "navigate to workers plan page", c.LIST_CONFIGS = "list hyperdrive configs", c.SEARCH_CONFIGS = "search hyperdrive configs", c.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", c.VIEW_CONFIG_DETAILS = "view hyperdrive config details", c.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", c.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", c.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", c.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", c.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", c.CLICK_QUICK_LINK = "click hyperdrive quick link", c.CLICK_DISCORD = "click hyperdrive discord", c.CLICK_COMMUNITY = "click hyperdrive community", c
				}({}),
				m = function(c) {
					return c[c["connection string"] = 0] = "connection string", c[c.manual = 1] = "manual", c
				}({}),
				v = function(c) {
					return c[c.success = 0] = "success", c[c.failure = 1] = "failure", c
				}({});
			const n = (c, i = {}) => {
				r().sendEvent(c, a({}, i, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/routes.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				KJ: function() {
					return S
				},
				_m: function() {
					return D
				},
				imagesEndpoints: function() {
					return Te
				},
				vQ: function() {
					return k
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function r(Oe) {
				for (var ve = 1; ve < arguments.length; ve++) {
					var De = arguments[ve] != null ? Object(arguments[ve]) : {},
						Me = Object.keys(De);
					typeof Object.getOwnPropertySymbols == "function" && Me.push.apply(Me, Object.getOwnPropertySymbols(De).filter(function(Ne) {
						return Object.getOwnPropertyDescriptor(De, Ne).enumerable
					})), Me.forEach(function(Ne) {
						a(Oe, Ne, De[Ne])
					})
				}
				return Oe
			}

			function a(Oe, ve, De) {
				return ve = u(ve), ve in Oe ? Object.defineProperty(Oe, ve, {
					value: De,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Oe[ve] = De, Oe
			}

			function u(Oe) {
				var ve = l(Oe, "string");
				return typeof ve == "symbol" ? ve : String(ve)
			}

			function l(Oe, ve) {
				if (typeof Oe != "object" || Oe === null) return Oe;
				var De = Oe[Symbol.toPrimitive];
				if (De !== void 0) {
					var Me = De.call(Oe, ve || "default");
					if (typeof Me != "object") return Me;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ve === "string" ? String : Number)(Oe)
			}
			const f = (0, e.BC)`/${"accountId"}/images`,
				s = (0, e.BC)`${f}/images`,
				m = (0, e.BC)`${f}/variants`,
				v = (0, e.BC)`${f}/keys`,
				n = (0, e.BC)`${f}/bundle-checkout-success`,
				c = (0, e.BC)`${s}/${"imageId"}`,
				i = (0, e.BC)`${s}/detail`,
				d = (0, e.BC)`${s}/edit`,
				o = (0, e.BC)`${m}/create`,
				g = (0, e.BC)`${m}/edit/${"variantId"}`,
				I = (0, e.BC)`/${"accountId"}/billing/subscriptions`,
				D = (0, e.BC)`${f}/sourcing-kit`,
				O = (0, e.BC)`${f}/delivery-zones`,
				y = (0, e.BC)`${O}/${"zoneId"}/settings`,
				A = (0, e.BC)`${f}/plans`,
				E = (0, e.BC)`${f}/manage-plan`,
				b = {
					addSite: (0, e.BC)`/${"accountId"}/add-site`,
					imageResizingSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/image_resizing`,
					transformationsSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/transformations`
				},
				S = {
					root: f,
					images: s,
					variants: m,
					keys: v,
					legacyImageDetailPage: c,
					imageDetailPage: i,
					imageEditPage: d,
					bundleCheckoutSuccess: n,
					variantCreatePage: o,
					variantEditPage: g,
					sourcingKit: D,
					subscriptions: I,
					deliveryZones: O,
					deliveryZoneSettings: y,
					plansPage: A,
					managePlan: E
				},
				k = r({}, S, {
					signUp: (0, e.BC)`/sign-up/images`,
					externalRoutes: b
				}),
				N = (0, e.BC)`/accounts/${"accountId"}`,
				w = (0, e.BC)`${N}/images/v2`,
				C = (0, e.BC)`/zones/${"zoneId"}`,
				P = (0, e.BC)`${w}/sourcingkit`,
				L = (0, e.BC)`${P}/migrations`,
				j = (0, e.BC)`${P}/migrations/${"migrationId"}`,
				X = (0, e.BC)`${P}/migrations/${"migrationId"}/logs`,
				oe = (0, e.BC)`${P}/migrations/${"migrationId"}/lifecycle/start`,
				pe = (0, e.BC)`${P}/migrations/${"migrationId"}/lifecycle/abort`,
				ce = (0, e.BC)`${P}/migrations/${"migrationId"}/lifecycle`,
				K = (0, e.BC)`${P}/sources`,
				G = (0, e.BC)`${P}/sources/${"sourceId"}`,
				W = (0, e.BC)`${P}/sources/${"sourceId"}/connectivity`,
				x = (0, e.BC)`${P}/sources/connectivity_precheck`,
				h = (0, e.BC)`/zones?account.id=${"accountId"}`,
				M = {
					migrationList: L,
					migration: j,
					migrationLogs: X,
					sourceList: K,
					migrationStart: oe,
					migrationAbort: pe,
					migrationProgress: ce,
					source: G,
					sourceConnectivityCheck: W,
					sourceConnectivityPreCheck: x
				},
				F = (0, e.BC)`/billing/upgrade-subscription`,
				q = (0, e.BC)`${N}/settings/transformations`,
				ee = (0, e.BC)`${C}/settings/transformations`,
				ne = (0, e.BC)`${C}/settings/transformations_allowed_origins`,
				Y = (0, e.BC)`${C}/settings/transformations_c2pa`,
				B = (0, e.BC)`${N}/settings/ut-billing`,
				z = (0, e.BC)`${C}`,
				te = (0, e.BC)`${C}/entitlements`,
				le = (0, e.BC)`${C}/settings`,
				ue = (0, e.BC)`${C}/flags`,
				ge = (0, e.BC)`${C}/subscription`,
				Te = {
					sourcingKitEndpoints: M,
					deliveryZonesEndpoints: {
						transformationsConfigList: q,
						transformationsZoneConfig: ee,
						allowedOriginsZoneConfig: ne,
						preserveContentCredentialsZoneConfig: Y,
						upgradeSubscription: F,
						utBillingConfig: B
					},
					zones: {
						zones: h,
						zoneDetail: z,
						zoneSettings: le,
						zoneEntitlements: te,
						zoneFlags: ue,
						zoneSubscription: ge
					}
				}
		},
		"../react/pages/images/selectors.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				$4: function() {
					return u
				},
				GH: function() {
					return i
				},
				JZ: function() {
					return o
				},
				aR: function() {
					return n
				},
				db: function() {
					return f
				},
				ib: function() {
					return g
				},
				lW: function() {
					return D
				},
				pT: function() {
					return c
				},
				po: function() {
					return d
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const u = "sourcing_kit_enabled",
				l = "sourcing_kit_waitlist",
				f = "images",
				s = "unified_images_enabled",
				m = "c2pa_polish",
				v = "CloudflareImages",
				n = O => !!(0, r.BF)(O, "images.transformations_enabled"),
				c = O => Boolean((0, r.BF)(O, "images.enabled")),
				i = O => {
					const y = (0, r.BF)(O, "images.storage");
					return typeof y == "number" && y > 0
				},
				d = O => Boolean((0, r.BF)(O, "contract.customer_enabled")),
				o = O => Boolean((0, e.oI)(O, f, u)),
				g = O => Boolean((0, a.Le)(O, v, u)),
				I = O => Boolean(getAccountFlipperFlag(O, v, s)),
				D = O => Boolean((0, a.Le)(O, v, m))
		},
		"../react/pages/magic/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				GF: function() {
					return d
				},
				H3: function() {
					return s
				},
				H8: function() {
					return l
				},
				J: function() {
					return g
				},
				Nz: function() {
					return m
				},
				UQ: function() {
					return D
				},
				Up: function() {
					return u
				},
				W8: function() {
					return v
				},
				Ws: function() {
					return O
				},
				Xg: function() {
					return c
				},
				Y_: function() {
					return i
				},
				_j: function() {
					return a
				},
				a4: function() {
					return o
				},
				jS: function() {
					return I
				},
				rF: function() {
					return f
				},
				rG: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/utils/translator.tsx");
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
					label: (0, r.ZP)("account.magic_transit.configuration.static_routes.all_regions")
				}, {
					value: "AFR",
					label: (0, r.ZP)("common.regions.africa")
				}, {
					value: "SAM",
					label: (0, r.ZP)("common.regions.south_america")
				}, {
					value: "APAC",
					label: (0, r.ZP)("common.regions.asia_pacific")
				}, {
					value: "WEUR",
					label: (0, r.ZP)("common.regions.western_europe")
				}, {
					value: "EEUR",
					label: (0, r.ZP)("common.regions.eastern_europe")
				}, {
					value: "WNAM",
					label: (0, r.ZP)("common.regions.western_north_america")
				}, {
					value: "ENAM",
					label: (0, r.ZP)("common.regions.eastern_north_america")
				}, {
					value: "ME",
					label: (0, r.ZP)("common.regions.middle_east")
				}, {
					value: "OC",
					label: (0, r.ZP)("common.regions.oceania")
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
				f = y => [{
					value: "request",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				s = y => [{
					value: "unidirectional",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				m = "magic-transit",
				v = "magic-wan",
				n = "gre_tunnel",
				c = "ipsec_tunnel",
				i = "interconnect",
				d = 64,
				o = 1476,
				g = "mid",
				I = "reply",
				D = y => [{
					value: void 0,
					label: y("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: y("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: y("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				O = y => [{
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
		"../react/pages/magic/network-monitoring/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				_u: function() {
					return r
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
				r = "Magic network monitoring",
				a = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				VZ: function() {
					return u
				},
				lC: function() {
					return a
				},
				r8: function() {
					return r
				},
				uB: function() {
					return l
				}
			});
			var e = t("../react/pages/magic/constants.ts");
			const r = {
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
		"../react/pages/magic/packet-captures/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				W_: function() {
					return r
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
				r = "Magic packet captures",
				a = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				gb: function() {
					return n
				},
				iP: function() {
					return k
				},
				xL: function() {
					return O
				},
				rD: function() {
					return w
				},
				oT: function() {
					return o
				},
				i2: function() {
					return C
				},
				x1: function() {
					return f
				},
				lW: function() {
					return m
				},
				UA: function() {
					return b
				},
				K5: function() {
					return i
				},
				Ii: function() {
					return A
				},
				PJ: function() {
					return N
				},
				bK: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				l = t("../node_modules/@cloudflare/elements/es/index.js");
			const f = () => r().createElement(s, null, r().createElement("svg", {
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
				s = (0, a.createComponent)(({
					theme: P
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
				m = () => r().createElement(v, null, r().createElement("svg", {
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
				v = (0, a.createComponent)(({
					theme: P
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
				n = () => r().createElement(c, null, r().createElement(l.Ei, {
					alt: "airplane",
					src: u,
					width: "85%"
				})),
				c = (0, a.createComponent)(({
					theme: P
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
				i = () => r().createElement(d, null, r().createElement("svg", {
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
				d = (0, a.createComponent)(({
					theme: P
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
				o = () => r().createElement(g, null, r().createElement("svg", {
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
				g = (0, a.createComponent)(({
					theme: P
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
				I = () => r().createElement(D, null, r().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				D = (0, a.createComponent)(({
					theme: P
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
				O = () => r().createElement(y, null, r().createElement("svg", {
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
				y = (0, a.createComponent)(({
					theme: P
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
				A = () => r().createElement(E, null, r().createElement("svg", {
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
				E = (0, a.createComponent)(({
					theme: P
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
				b = () => r().createElement(S, null, r().createElement("svg", {
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
				S = (0, a.createComponent)(({
					theme: P
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
				k = () => r().createElement("svg", {
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
				N = () => r().createElement("svg", {
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
				w = () => r().createElement("svg", {
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
				C = () => r().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				A2: function() {
					return s
				},
				He: function() {
					return l
				},
				N$: function() {
					return f
				},
				Qq: function() {
					return a
				},
				ST: function() {
					return u
				},
				wM: function() {
					return r
				}
			});
			var e = t("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const r = {
					PAGE: "apple-login"
				},
				a = "login-apple-jwt",
				u = "cf-test",
				l = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				f = m => [{
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
				s = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				_: function() {
					return a
				},
				c: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let a = function(l) {
				return l.TEMPLATE_SELECTED = "template selected", l.TEMPLATE_PRODUCT_SELECTED = "template product selected", l.TEMPLATE_SAVE_DRAFT = "template save draft", l.TEMPLATE_CANCEL = "template cancel", l.TEMPLATE_DEPLOY = "template deploy", l
			}({});
			const u = (l, f) => r().sendEvent(l, {
				template_name: f
			})
		},
		"../react/pages/pages/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				A: function() {
					return I
				},
				C1: function() {
					return v
				},
				GF: function() {
					return w
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
					return g
				},
				Ni: function() {
					return S
				},
				OG: function() {
					return K
				},
				QF: function() {
					return pe
				},
				QV: function() {
					return b
				},
				Sx: function() {
					return A
				},
				Ub: function() {
					return oe
				},
				X3: function() {
					return c
				},
				bA: function() {
					return P
				},
				eO: function() {
					return i
				},
				fH: function() {
					return o
				},
				fQ: function() {
					return D
				},
				fR: function() {
					return e
				},
				ff: function() {
					return C
				},
				iS: function() {
					return O
				},
				nY: function() {
					return E
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
					return k
				}
			});
			const e = "api.pages.cloudflare.com",
				r = "cloudflare-workers-and-pages",
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
						gettingStarted: "https://developers.cloudflare.com/pages/get-started",
						configuringBuilds: "https://developers.cloudflare.com/pages/platform/build-configuration",
						supportedFrameworks: "https://developers.cloudflare.com/pages/configuration/build-configuration/#framework-presets",
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
						functionsFailOpenClosed: "https://developers.cloudflare.com/pages/platform/functions/routing/#fail-open--closed",
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
						appHomepage: `https://github.com/apps/${r}`,
						installations: "https://github.com/settings/installations",
						newInstallation: `https://github.com/apps/${r}/installations/new`,
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
				s = "production",
				m = 2e3,
				v = 100,
				n = 350,
				c = 1e7,
				i = ["Success:", "Error:", "Failed:"],
				d = 10,
				o = "_headers",
				g = "_redirects",
				I = "_routes.json",
				D = "_worker.js",
				O = "do-a-barrel-roll",
				y = [o, g, I, D],
				A = 1024 * 1024 * 25,
				E = 1e3,
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
				S = 1e5,
				k = 75e3,
				N = 2e5,
				w = 15e4,
				C = 3e3,
				P = 2250,
				L = "workers",
				j = "cloudflare_pages_build_caching",
				X = 2;
			let oe = function(G) {
				return G[G.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", G[G.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", G[G.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", G[G.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", G[G.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", G[G.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", G
			}({});
			const pe = 1,
				ce = 2,
				K = 2
		},
		"../react/pages/pages/routes.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Hv: function() {
					return a
				},
				_j: function() {
					return r
				},
				zE: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
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
				u = f => `${f.subdomain}.pages.dev`,
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
		"../react/pages/pipelines/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				KO: function() {
					return s
				},
				L9: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						d = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(i).filter(function(o) {
						return Object.getOwnPropertyDescriptor(i, o).enumerable
					})), d.forEach(function(o) {
						u(n, o, i[o])
					})
				}
				return n
			}

			function u(n, c, i) {
				return c = l(c), c in n ? Object.defineProperty(n, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[c] = i, n
			}

			function l(n) {
				var c = f(n, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(n, c) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var d = i.call(n, c || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(n)
			}
			let s = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				m = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const v = (n, c = {}) => {
				r().sendEvent(n, a({}, c, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/profile/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				QV: function() {
					return u
				},
				Xn: function() {
					return r
				},
				iH: function() {
					return e
				},
				xq: function() {
					return a
				}
			});
			const e = "iam-authentication",
				r = "login",
				a = "profile",
				u = {
					[r]: {
						clickTryOther2FAMethodOrBackupCode: "click try another 2fa method or backup code",
						clickTryRecovery: "click try recovery",
						clickLoginFromMobileApp2fa: "click login on mobile-app/backup code 2fa"
					},
					[a]: {
						clickRegenerateBackupCodes: "click regenerate backup codes"
					}
				}
		},
		"../react/pages/r2/routes.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Hv: function() {
					return a
				},
				Jg: function() {
					return f
				},
				_j: function() {
					return r
				},
				vF: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
					root: (0, e.BC)`/${"accountId"}/r2`,
					overview: (0, e.BC)`/${"accountId"}/r2/overview`,
					cliQuickStart: (0, e.BC)`/${"accountId"}/r2/cli`,
					createBucket: (0, e.BC)`/${"accountId"}/r2/new`,
					bucketDetails: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}`,
					bucketDetailsSettings: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/settings`,
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
				u = s => {
					const m = "r2.cloudflarestorage.com";
					switch (s) {
						case "default":
							return m;
						case "eu":
							return `eu.${m}`;
						case "fedramp":
							return `fedramp.${m}`
					}
				},
				l = (s, m) => {
					const v = u(m);
					return `https://${s}.${v}`
				},
				f = (s, m, v) => `${l(s,m)}/${v}`
		},
		"../react/pages/r2/selectors.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Mv: function() {
					return n
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const u = "r2_migrator_waitlist",
				l = "r2migrator",
				f = "r2",
				s = "r2_storage_migrator",
				m = "r2_storage_migrator",
				v = i => getAccountEntitlement(i, "r2.enabled"),
				n = i => Boolean((0, a.Le)(i, s, u)),
				c = i => Boolean(getAccountFlipperFlagsChanges(i, m, l))
		},
		"../react/pages/secrets-store/resources/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Hf: function() {
					return S
				},
				JJ: function() {
					return f
				},
				Js: function() {
					return u
				},
				LN: function() {
					return g
				},
				Nm: function() {
					return i
				},
				Oh: function() {
					return D
				},
				Q2: function() {
					return N
				},
				QF: function() {
					return I
				},
				RR: function() {
					return y
				},
				T_: function() {
					return k
				},
				Xm: function() {
					return s
				},
				Zl: function() {
					return w
				},
				dv: function() {
					return l
				},
				fp: function() {
					return c
				},
				jx: function() {
					return b
				},
				nQ: function() {
					return d
				},
				px: function() {
					return O
				},
				tP: function() {
					return a
				},
				vh: function() {
					return o
				},
				wB: function() {
					return P
				},
				z3: function() {
					return C
				},
				zt: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/yup/es/index.js");
			const a = "secrets-store-account-level",
				u = "https://developers.cloudflare.com/secrets-store/",
				l = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				f = 1,
				s = 10,
				m = 100;
			let v = function(L) {
					return L.NAME = "name", L
				}({}),
				n = function(L) {
					return L.NAME = "name", L
				}({});
			const c = {
				initialPaginationState: {
					page: f,
					perPage: s
				},
				initialSortState: {
					name: v.NAME,
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
			let i = function(L) {
					return L.NAME = "name", L.COMMENT = "comment", L.TAGS = "tags", L.SERVICES = "services", L.STATUS = "status", L
				}({}),
				d = function(L) {
					return L.PENDING = "pending", L.ACTIVE = "active", L.DELETED = "deleted", L
				}({}),
				o = function(L) {
					return L.LIST_SECRETS_STORES = "listSecretsStores", L.LIST_SECRETS = "listSecrets", L.GET_SECRET = "getSecret", L.SECRETS_QUOTA = "secretsQuota", L
				}({}),
				g = function(L) {
					return L.CREATE = "create", L.EDIT = "edit", L.DUPLICATE = "duplicate", L
				}({}),
				I = function(L) {
					return L.WORKERS = "workers", L
				}({});
			const D = "default_secrets_store";
			let O = function(L) {
				return L.CREATE = "create", L.EDIT = "edit", L.DUPLICATE = "duplicate", L.VIEW = "view", L
			}({});
			const y = "delete_operation",
				A = /^[a-zA-Z0-9_-]+$/,
				E = (L, j, X, oe, pe) => r.Ry().shape({
					name: r.Z_().required(L("secrets_store.form.create.errors.name.required")).matches(A, L("secrets_store.form.create.errors.name.invalid_characters")).max(255, L("secrets_store.form.create.errors.name.max")),
					value: r.Z_().test("required-if-creating", L("secrets_store.form.create.errors.value.required"), ce => j || pe ? !!ce : !0).max(1024, L("secrets_store.form.create.errors.value.max")),
					comment: r.Z_().max(1024, L("secrets_store.form.create.errors.comment.max")),
					scopes: r.Z_().required().oneOf(Object.values(I), L("secrets_store.form.create.errors.scopes.invalid")),
					labels: r.IX().of(r.Z_())
				}),
				b = (L, j, X, oe, pe) => r.Ry().shape({
					secrets: r.IX().of(E(L, j, X, oe, pe))
				}),
				S = {
					name: "",
					value: "",
					scopes: I.WORKERS,
					comment: ""
				},
				k = "secrets-store.store.secret";
			let N = function(L) {
				return L.DUPLICATE = "duplicate", L.DEPLOY = "deploy", L
			}({});
			const w = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let C = function(L) {
					return L.CREATE_SECRET = "create secrets store secret", L.EDIT_SECRET = "edit secrets store secret", L.DUPLICATE_SECRET = "duplicate secrets store secret", L.DELETE_SECRET = "delete secrets store secret", L.BIND_SECRET = "open secrets store binding drawer", L
				}({}),
				P = function(L) {
					return L.SECRETS_STORE = "secrets store main", L.WORKERS_BINDING = "workers binding drawer", L
				}({})
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Gk: function() {
					return i
				},
				LA: function() {
					return v
				},
				Wk: function() {
					return c
				},
				_V: function() {
					return s
				},
				c5: function() {
					return n
				},
				om: function() {
					return m
				}
			});
			var e = t("../react/pages/security-center/BlockedContent/types.ts"),
				r = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(d) {
				for (var o = 1; o < arguments.length; o++) {
					var g = arguments[o] != null ? Object(arguments[o]) : {},
						I = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(g).filter(function(D) {
						return Object.getOwnPropertyDescriptor(g, D).enumerable
					})), I.forEach(function(D) {
						u(d, D, g[D])
					})
				}
				return d
			}

			function u(d, o, g) {
				return o = l(o), o in d ? Object.defineProperty(d, o, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[o] = g, d
			}

			function l(d) {
				var o = f(d, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(d, o) {
				if (typeof d != "object" || d === null) return d;
				var g = d[Symbol.toPrimitive];
				if (g !== void 0) {
					var I = g.call(d, o || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(d)
			}
			const s = "blocked-content-table-tooltip",
				m = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					canceled: "gray"
				},
				v = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				n = {
					[e.$E.Active]: [e.M3.Active, e.M3.InReview],
					[e.$E.Pending]: [e.M3.Pending, e.M3.Canceled]
				},
				c = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: e.fL.EnforcementDate,
						direction: r.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: Object.values(e.GH)
					},
					filters: Object.values(e.GH).reduce((d, o) => a({}, d, {
						[o]: o
					}), {})
				};
			let i = function(d) {
				return d.COPY_URL = "copy blocked content url", d.REQUEST_REVIEW = "request blocked content review", d.ADD_FILTER = "Add filter", d.REMOVE_FILTER = "Remove filter", d
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				$E: function() {
					return e
				},
				GH: function() {
					return a
				},
				M3: function() {
					return r
				},
				fL: function() {
					return u
				}
			});
			let e = function(f) {
					return f.Pending = "pending", f.Active = "active", f
				}({}),
				r = function(f) {
					return f.Active = "active", f.InReview = "in_review", f.Pending = "pending", f.Canceled = "canceled", f
				}({}),
				a = function(f) {
					return f.Domain = "domain", f.Status = "status", f.BlockType = "blockType", f
				}({}),
				u = function(f) {
					return f.EnforcementDate = "enforcementDate", f.BlockType = "blockType", f.Hostname = "hostname", f.Status = "status", f
				}({}),
				l = function(f) {
					return f.Removed = "removed", f.Misclassified = "misclassified", f
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Ev: function() {
					return a
				},
				RY: function() {
					return e
				},
				v9: function() {
					return r
				}
			});
			let e = function(u) {
				return u.LOAD_SCAN_INFO = "load url scan information", u.INITIATE_URL_SCAN = "initiate url scan", u
			}({});
			const r = {
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
		"../react/pages/security/analytics/resources/labels.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				AU: function() {
					return a
				},
				Bc: function() {
					return r
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
				r = {
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
		"../react/pages/security/analytics/security-analytics/resources/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				DC: function() {
					return d
				},
				Ff: function() {
					return s
				},
				Lz: function() {
					return i
				},
				RM: function() {
					return v
				},
				Ss: function() {
					return c
				},
				dR: function() {
					return l
				},
				gW: function() {
					return f
				},
				r5: function() {
					return m
				},
				y$: function() {
					return n
				},
				zs: function() {
					return u
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				a = t("../react/pages/security/analytics/resources/labels.ts");
			const u = ["block", "challenge", "jschallenge", "managed_challenge"],
				l = {
					label: "security_analytics.filters.mitigated",
					parse: o => o === "true" || o === !0,
					urlParam: "mitigated",
					type: e.kE.select,
					options: [!0, !1],
					operators: [r.Gn.equals, r.Gn.notEquals],
					rawLogField: "securityAction"
				},
				f = {
					label: "security_analytics.filters.security_action",
					urlParam: "mitigation-action",
					type: e.kE.select,
					options: Object.keys(a.Bt),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securityAction"
				},
				s = {
					label: "security_analytics.filters.security_source",
					urlParam: "mitigation-service",
					type: e.kE.select,
					options: Object.keys(a.e_).filter(o => o !== "unknown"),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securitySources"
				};
			let m = function(o) {
				return o.MITIGATED_BY_WAF = "mitigatedByWAF", o.SERVED_BY_CLOUDFLARE = "servedByCloudflare", o.SERVED_BY_ORIGIN = "servedByOrigin", o
			}({});
			const v = {
					type: "primary",
					inverted: !0,
					px: 2,
					py: 1,
					fontSize: 1,
					ml: "auto"
				},
				n = {
					botScore: "botscore",
					botScoreSrcName: "botscoresrc",
					botDetectionIds: "botdetectionids",
					cacheStatus: "cachecachestatus",
					clientASNDescription: void 0,
					rayName: "rayid",
					clientAsn: "clientasn",
					clientCountryName: "clientcountry",
					clientIP: "clientip",
					clientRequestHTTPHost: "clientrequesthost",
					clientRequestHTTPMethodName: "clientrequestmethod",
					clientRequestHTTPProtocol: "clientrequestprotocol",
					clientRequestPath: "clientrequestpath",
					clientRequestQuery: "clientrequesturi",
					clientRequestReferer: "clientrequestreferer",
					clientRequestScheme: "clientrequestscheme",
					contentScanNumMaliciousObj: "contentscanobjresults",
					contentScanNumObj: "contentscanobjresults",
					contentScanObjTypes: "contentscanobjtypes",
					datetime: "edgestarttimestamp",
					edgeResponseContentTypeName: "edgeresponsecontenttype",
					edgeResponseStatus: "edgeresponsestatus",
					firewallForAiPiiCategories: void 0,
					ja3Hash: "ja3hash",
					ja4: void 0,
					ja4Signals: void 0,
					leakedCredentialCheckResult: void 0,
					originResponseStatus: "originresponsestatus",
					userAgent: "clientrequestuseragent",
					securityAction: "securityactions",
					securitySource: "securitysources",
					wafAttackScore: "wafattackscore",
					wafAttackScoreClass: void 0,
					wafRceAttackScore: "wafrceattackscore",
					wafSqliAttackScore: "wafsqliattackscore",
					wafXssAttackScore: "wafxssattackscore",
					xRequestedWith: "clientxrequestedwith",
					zoneTag: void 0,
					zoneName: "zonename"
				},
				c = {
					suspicious_login_failure: 201326592,
					suspicious_login_attempt: 201326593
				},
				i = "security-analytics-log-explorer";
			let d = function(o) {
				return o.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', o.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', o.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', o.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', o.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', o.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", o.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", o.OPEN_SIDE_DRAWER = "open security analytics side drawer", o.CLOSE_SIDE_DRAWER = "close security analytics side drawer", o
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Fj: function() {
					return m
				},
				kq: function() {
					return s
				},
				xr: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						d = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(i).filter(function(o) {
						return Object.getOwnPropertyDescriptor(i, o).enumerable
					})), d.forEach(function(o) {
						u(n, o, i[o])
					})
				}
				return n
			}

			function u(n, c, i) {
				return c = l(c), c in n ? Object.defineProperty(n, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[c] = i, n
			}

			function l(n) {
				var c = f(n, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(n, c) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var d = i.call(n, c || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const m = {
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
				v = ({
					name: n,
					category: c = "user journey",
					product: i = s.MAIN,
					productName: d,
					additionalData: o
				}) => {
					r().sendEvent(n, a({
						category: c,
						product: i,
						productName: d
					}, o || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
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
					return r
				}
			});
			let e = function(l) {
					return l.INITIAL_FETCH_SCORES = "view bots scores distribution", l.FETCH_CONFIGURATION = "view bots configuration page", l.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", l.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", l.UPDATE_SETTINGS = "update bots settings", l.DELETE_RULE = "delete bots ruleset", l.UPDATE_RULE = "update bots ruleset", l.FETCH_RULES = "view bots ruleset", l.CONFIGURE_BOT_MANAGEMENT = "view bots management", l.WAF_RULES_REDIRECT = "redirect waf rules", l.CHANGED_ZONE_SETTINGS = "change zone setting", l
				}({}),
				r = function(l) {
					return l.PROVIDED_TEMPLATE = "provided template link in detection card", l.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", l.USE_TEMPLATE = "use template", l.CREATE_FIREWALL_RULE = "create firewall rule", l.WAF_RULES = "waf rules", l
				}({});
			const a = "user journey",
				u = "Bots"
		},
		"../react/pages/security/overview/resources/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
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
					return r
				}
			});
			let e = function(l) {
				return l.NAME = "description", l.SOURCE = "source", l.LAST_UPDATE = "lastUpdatedAt", l.ACTIVITY = "activity", l
			}({});
			const r = 5;
			let a = function(l) {
					return l.EXTERNAL_DOCUMENTATION = "external_documentation", l.LINK_TO_MANAGED = "link_to_managed_rules", l.LINK_TO_EVENTS = "link_to_security_events", l.LINK_TO_DDOS = "link_to_ddos", l.LINK_BOT_MGMT = "link_to_bot_mgmt", l.LINK_TO_AI_AUDIT = "link_to_ai_audit", l.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", l.LINK_TO_PAGE_SHIELD = "link_to_page_shield", l.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", l.LINK_TO_SECURITY_EVENTS = "link_to_security_events", l.LINK_TO_IP_RULE = "link_to_ip_rule", l.LINK_TO_CONFIGURATION = "link_to_configuration", l
				}({}),
				u = function(l) {
					return l.LOAD_INSIGHTS = "load overview action items", l.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", l.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", l.CLICK_ACTION_INSIGHT = "click overview action item suggestion", l
				}({})
		},
		"../react/pages/security/page-shield/resources/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				CP: function() {
					return w
				},
				FV: function() {
					return ce
				},
				KH: function() {
					return k
				},
				Ks: function() {
					return x
				},
				Lj: function() {
					return W
				},
				MC: function() {
					return c
				},
				Mq: function() {
					return S
				},
				OV: function() {
					return pe
				},
				Oq: function() {
					return N
				},
				QM: function() {
					return E
				},
				SI: function() {
					return G
				},
				SJ: function() {
					return D
				},
				Sk: function() {
					return L
				},
				Ti: function() {
					return h
				},
				Uc: function() {
					return b
				},
				Uq: function() {
					return m
				},
				Uv: function() {
					return oe
				},
				V0: function() {
					return v
				},
				VT: function() {
					return o
				},
				YC: function() {
					return j
				},
				j$: function() {
					return O
				},
				qc: function() {
					return I
				},
				sV: function() {
					return C
				},
				sW: function() {
					return K
				},
				u8: function() {
					return d
				},
				v5: function() {
					return n
				},
				xg: function() {
					return X
				},
				yd: function() {
					return A
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				a = t("../react/pages/security/page-shield/resources/types.ts");

			function u(M) {
				for (var F = 1; F < arguments.length; F++) {
					var q = arguments[F] != null ? Object(arguments[F]) : {},
						ee = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(q).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(q, ne).enumerable
					})), ee.forEach(function(ne) {
						l(M, ne, q[ne])
					})
				}
				return M
			}

			function l(M, F, q) {
				return F = f(F), F in M ? Object.defineProperty(M, F, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[F] = q, M
			}

			function f(M) {
				var F = s(M, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function s(M, F) {
				if (typeof M != "object" || M === null) return M;
				var q = M[Symbol.toPrimitive];
				if (q !== void 0) {
					var ee = q.call(M, F || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(M)
			}
			const m = 50,
				v = 9,
				n = "copy script url page shield",
				c = "disable page shield",
				i = "click documentation link",
				d = "enable page shield",
				o = "filter search page shield",
				g = "filter search view all page shield",
				I = "hover score tooltip page shield",
				D = "open alert modal page shield",
				O = "change pagination page shield",
				y = "close script modal page shield",
				A = "open script modal page shield",
				E = "select alert type page shield",
				b = "sort column page shield",
				S = {
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
				k = {
					STARTS_WITH: r.Gn.startsWith,
					ENDS_WITH: r.Gn.endsWith,
					EQUALS: r.Gn.equals,
					CONTAINS: r.Gn.contains,
					DOES_NOT_CONTAIN: r.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: r.Gn.in
				},
				N = {
					status: {
						example: "active",
						type: e.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [k.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: e.kE.string,
						options: ["true", "false"],
						operators: [k.CONTAINS, k.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [k.EQUALS],
						type: e.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: e.kE.string,
						operators: [k.INCLUDES, k.ENDS_WITH, k.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				w = u({}, N, {
					urls: u({}, N.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				C = {
					type: {
						example: "first_party",
						type: e.kE.select,
						options: ["first_party", "unknown"],
						label: "common.type",
						urlParam: "type",
						operators: [r.Gn.equals]
					},
					name: {
						example: "cookie_1",
						operators: [r.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.name",
						urlParam: "name"
					},
					domain: {
						example: "hostname.com",
						operators: [r.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.domain",
						urlParam: "domain"
					},
					path: {
						example: "/",
						operators: [r.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.path",
						urlParam: "path"
					},
					same_site: {
						operators: [r.Gn.equals],
						type: e.kE.select,
						options: ["lax", "strict", "none"],
						label: "firewall.page_shield.same_site",
						urlParam: "same_site"
					},
					http_only: {
						operators: [r.Gn.equals],
						type: e.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.http_only",
						urlParam: "http_only"
					},
					secure: {
						operators: [r.Gn.equals],
						type: e.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.secure",
						urlParam: "secure"
					}
				};
			let P = function(M) {
				return M.SECURITY_THREATS = "Security Threats", M.C2_BOTNET = "C2 & Botnet", M.CRYPTOMINING = "Cryptomining", M.MALWARE = "Malware", M.PHISHING = "Phishing", M.SPYWARE = "Spyware", M.DGA_DOMAINS = "DGA Domains", M.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", M
			}({});
			const L = "https://www.cloudflare.com/plans/enterprise/contact/",
				j = {
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
				X = {
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
				oe = {
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
				K = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				G = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				W = {
					[a.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[a.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[a.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				x = {
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
		"../react/pages/security/page-shield/resources/index.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
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
					return g.Xe
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
					return g.k2
				},
				$g: function() {
					return g.$g
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
					return g.I1
				},
				Wq: function() {
					return g.Wq
				},
				jf: function() {
					return g.jf
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
					return g.R$
				},
				Sk: function() {
					return u.Sk
				},
				gY: function() {
					return i
				},
				SE: function() {
					return l
				},
				m: function() {
					return n
				},
				xP: function() {
					return v
				},
				xl: function() {
					return m
				},
				Tb: function() {
					return s
				},
				h3: function() {
					return d
				},
				xq: function() {
					return x
				},
				SQ: function() {
					return oe
				},
				C0: function() {
					return pe
				},
				av: function() {
					return O
				},
				W3: function() {
					return I
				},
				WO: function() {
					return b
				},
				Dk: function() {
					return N
				},
				we: function() {
					return C
				},
				Yt: function() {
					return j
				},
				ex: function() {
					return L
				},
				E1: function() {
					return P
				},
				dm: function() {
					return A
				},
				oK: function() {
					return S
				},
				qZ: function() {
					return X
				},
				_4: function() {
					return ce
				},
				qo: function() {
					return K
				},
				CB: function() {
					return f
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(r),
				u = t("../react/pages/security/page-shield/resources/constants.ts");
			const l = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", h => (a().sendEvent(u.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), h)),
				f = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", h => (a().sendEvent(u.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), h)),
				s = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", h => (a().sendEvent(u.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), h)),
				m = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				v = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", h => (a().sendEvent(u.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), h)),
				n = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				c = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", h => (a().sendEvent(u.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), h)),
				i = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				d = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var o = t("../react/app/redux/normalizer.js"),
				g = t("../react/pages/security/page-shield/resources/types.ts");
			const I = h => h.pageShield.configuration,
				D = h => {
					var M;
					return (M = h.pageShield.configuration.data) === null || M === void 0 ? void 0 : M.enabled
				},
				O = h => {
					var M;
					return (M = I(h)) === null || M === void 0 ? void 0 : M.data
				},
				y = h => h.pageShield.scripts,
				A = h => h.pageShield.script,
				E = h => h.pageShield.connections,
				b = h => h.pageShield.connection,
				S = (0, o.P1)("pageShieldScripts", y),
				k = (0, o.P1)("pageShieldScript", A),
				N = (0, o.P1)("pageShieldConnections", E),
				w = (0, o.P1)("pageShieldConnection", b),
				C = (h, M) => h === g.Wq.SCRIPT_MONITOR ? S(M) || [] : N(M) || [],
				P = (h, M) => h === g.Wq.SCRIPT_MONITOR ? y(M) || [] : E(M) || [],
				L = (h, M) => h === g.Wq.SCRIPT_MONITOR ? k(M) : w(M),
				j = h => h.pageShield.domainIntel,
				X = h => h.pageShield.whoIsRecord,
				oe = (h, M, F) => {
					var q;
					const ee = Object.values(F).map(ne => ({
						key: ne,
						label: u.Uv[ne],
						score: h[ne]
					})).filter(ne => ne.score !== void 0 && ne.score <= M);
					return M === u.V0 && ee.length === 0 && ((q = h.js_integrity_score) !== null && q !== void 0 ? q : 100) <= M && ee.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), ee
				},
				pe = (h, M) => Object.values(M).filter(F => h[F] === !0).map(F => u.OV[F]),
				ce = h => h === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				K = (h, M) => h[g.$g.MagecartScore] !== void 0 && h[g.$g.MagecartScore] <= M || h[g.$g.MalwareScore] !== void 0 && h[g.$g.MalwareScore] <= M || h[g.$g.CryptominingScore] !== void 0 && h[g.$g.CryptominingScore] <= M || h.js_integrity_score !== void 0 && h.js_integrity_score <= M,
				G = ["cdn.jsdelivr.net", "unpkg.com"],
				W = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				x = h => {
					if (h.includes("@latest")) {
						const F = h.split("@latest");
						if (F.length != 2) return;
						const q = F[0].length,
							ee = q + "@latest".length;
						return [q, ee]
					}
					if (!!G.some(F => h.includes(F)))
						for (const F of W) {
							const q = h.match(F);
							if (!q) continue;
							const ee = q.index;
							if (ee === 0) return null;
							const ne = ee + q[0].length;
							return [ee, ne]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				$g: function() {
					return v
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
					return f
				},
				jf: function() {
					return s
				},
				k2: function() {
					return c
				}
			});

			function e(i) {
				for (var d = 1; d < arguments.length; d++) {
					var o = arguments[d] != null ? Object(arguments[d]) : {},
						g = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(o).filter(function(I) {
						return Object.getOwnPropertyDescriptor(o, I).enumerable
					})), g.forEach(function(I) {
						r(i, I, o[I])
					})
				}
				return i
			}

			function r(i, d, o) {
				return d = a(d), d in i ? Object.defineProperty(i, d, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = o, i
			}

			function a(i) {
				var d = u(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function u(i, d) {
				if (typeof i != "object" || i === null) return i;
				var o = i[Symbol.toPrimitive];
				if (o !== void 0) {
					var g = o.call(i, d || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			let l = function(i) {
				return i.BASE_URI = "base-uri", i.CHILD = "child-src", i.CONNECT = "connect-src", i.DEFAULT = "default-src", i.FONT = "font-src", i.FORM_ACTION = "form-action", i.FRAME = "frame-src", i.FRAME_ANCESTORS = "frame-ancestors", i.IMAGE = "img-src", i.MANIFEST = "manifest-src", i.MEDIA = "media-src", i.OBJECT = "object-src", i.SCRIPT = "script-src", i.STYLE = "style-src", i.WORKER = "worker-src", i.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", i
			}({});
			const f = e({}, l, {
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
			let s = function(i) {
					return i.MONITOR = "monitor", i.POLICIES = "policies", i.SETTINGS = "settings", i
				}({}),
				m = function(i) {
					return i.SCRIPT_MONITOR = "script", i.CONNECTION_MONITOR = "connection", i.COOKIE_MONITOR = "cookie", i
				}({}),
				v = function(i) {
					return i.CryptominingScore = "cryptomining_score", i.MalwareScore = "malware_score", i.MagecartScore = "magecart_score", i
				}({}),
				n = function(i) {
					return i.DataflowScore = "dataflow_score", i.ObfuscationScore = "obfuscation_score", i
				}({}),
				c = function(i) {
					return i.DomainMalicious = "domain_reported_malicious", i.UrlMalicious = "url_reported_malicious", i
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				_C: function() {
					return o
				},
				_R: function() {
					return g
				},
				dY: function() {
					return D
				},
				fy: function() {
					return A
				},
				ji: function() {
					return d
				},
				pR: function() {
					return I
				},
				pV: function() {
					return E
				},
				rj: function() {
					return y
				},
				yR: function() {
					return b
				},
				zf: function() {
					return O
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				r = t("../../../common/util/types/src/api/phases/fields.tsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				l = t("../react/utils/translator.tsx"),
				f = t("../react/pages/security/resources/types.ts"),
				s = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				m = t("../node_modules/@cloudflare/elements/es/index.js");

			function v(S) {
				for (var k = 1; k < arguments.length; k++) {
					var N = arguments[k] != null ? Object(arguments[k]) : {},
						w = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(N).filter(function(C) {
						return Object.getOwnPropertyDescriptor(N, C).enumerable
					})), w.forEach(function(C) {
						n(S, C, N[C])
					})
				}
				return S
			}

			function n(S, k, N) {
				return k = c(k), k in S ? Object.defineProperty(S, k, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[k] = N, S
			}

			function c(S) {
				var k = i(S, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function i(S, k) {
				if (typeof S != "object" || S === null) return S;
				var N = S[Symbol.toPrimitive];
				if (N !== void 0) {
					var w = N.call(S, k || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(S)
			}
			const d = 10;
			let o = function(S) {
					return S.MTLS_ACCESS = "mTLS-enforced authentication", S.ZONE_LOCKDOWN = "Zone lockdown", S.USER_AGENT = "User agent blocking", S.EMAIL_VALIDITY = "Disposable email checks", S.IP_BASED = "IP-based rule", S.GEOGRAPHY_BASE = "Geography-based rule", S
				}({}),
				g = function(S) {
					return S.LEAKED_CREDENTIALS = "Leaked Credentials Checks", S
				}({});
			const I = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				D = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: o.GEOGRAPHY_BASE,
					trackedEvent: I.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: o.IP_BASED,
					trackedEvent: I.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: o.USER_AGENT,
					trackedEvent: I.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: o.ZONE_LOCKDOWN,
					trackedEvent: I.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				O = {
					[f.X.UI_SECTION]: S => ({
						[o.MTLS_ACCESS]: {
							ruleName: o.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${S.account.id}/${S.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[o.ZONE_LOCKDOWN]: {
							ruleName: o.ZONE_LOCKDOWN,
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
									to: `/${S.account.id}/configurations/lists`
								}]
							})
						},
						[o.GEOGRAPHY_BASE]: {
							ruleName: o.GEOGRAPHY_BASE,
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.geography_based.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.geography_based.wafRulesOverview"
							})
						},
						[o.IP_BASED]: {
							ruleName: o.IP_BASED,
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
									to: `/${S.account.id}/configurations/lists`
								}]
							})
						},
						[o.USER_AGENT]: {
							ruleName: o.USER_AGENT,
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${S.account.id}/configurations/lists`
								}]
							})
						},
						[o.EMAIL_VALIDITY]: {
							ruleName: o.EMAIL_VALIDITY,
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
					[f.X.WAF_RULES]: {
						[o.MTLS_ACCESS]: {
							description: "custom-rules.templates.rule.mtls_access.name",
							expression: '(not cf.tls_client_auth.cert_verified and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.mtls_access.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[o.ZONE_LOCKDOWN]: {
							description: "custom-rules.templates.rule.zone_lockdown.name",
							expression: '(not ip.src in $0 and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.zone_lockdown.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[o.USER_AGENT]: {
							description: "custom-rules.templates.rule.user_agent.name",
							expression: '(http.user_agent eq "BadBot/1.0.2 (+http://bad.bot)")',
							helper: {
								text: "custom-rules.templates.rule.user_agent.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[o.EMAIL_VALIDITY]: {
							description: "custom-rules.templates.rule.disposable_email.name",
							expression: "(cf.fraud_detection.disposable_email)",
							defaultAction: "block",
							emptySelectValue: !0
						},
						[o.GEOGRAPHY_BASE]: {
							description: "custom-rules.templates.rule.geography.name",
							expression: '(ip.src.asnum eq "") or (ip.src.country eq "") or (ip.src.continent eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						},
						[o.IP_BASED]: {
							description: "firewall.tools.toast.ip",
							expression: '(ip.src eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						}
					}
				},
				y = {
					[f.X.WAF_RULES]: {
						[g.LEAKED_CREDENTIALS]: {
							ruleName: g.LEAKED_CREDENTIALS,
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
					[f.X.UI_SECTION]: {
						[g.LEAKED_CREDENTIALS]: {
							ruleName: g.LEAKED_CREDENTIALS,
							displayName: u().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: u().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let A = function(S) {
				return S.DISCOVERY = "discovery", S.SEQUENCES = "sequences", S.SCHEMA_VALIDATION = "schema-validation", S.SETTINGS = "settings", S.API_RULES = "api-rules", S.UPGRADE = "upgrade", S
			}({});
			const E = v({}, s.g, {
				[r.df.HttpRequestFirewallManaged]: v({}, s.g[r.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[r.df.HttpRequestFirewallCustom]: v({}, s.g[r.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[r.df.HttpRateLimit]: v({}, s.g[r.df.HttpRateLimit], {
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
			let b = function(S) {
				return S.APP_SEC_MVP = "app-security-navigation-mvp", S
			}({})
		},
		"../react/pages/security/resources/types.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				X: function() {
					return e
				}
			});
			let e = function(a) {
					return a.UI_SECTION = "UI_SECTION", a.WAF_RULES = "WAF_RULES", a
				}({}),
				r = function(a) {
					return a.Low = "low", a.Medium = "medium", a.Critical = "critical", a
				}({})
		},
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				j: function() {
					return m
				},
				y: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(v) {
				for (var n = 1; n < arguments.length; n++) {
					var c = arguments[n] != null ? Object(arguments[n]) : {},
						i = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(c).filter(function(d) {
						return Object.getOwnPropertyDescriptor(c, d).enumerable
					})), i.forEach(function(d) {
						u(v, d, c[d])
					})
				}
				return v
			}

			function u(v, n, c) {
				return n = l(n), n in v ? Object.defineProperty(v, n, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[n] = c, v
			}

			function l(v) {
				var n = f(v, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function f(v, n) {
				if (typeof v != "object" || v === null) return v;
				var c = v[Symbol.toPrimitive];
				if (c !== void 0) {
					var i = c.call(v, n || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(v)
			}
			let s = function(v) {
				return v.CLICK_OPT_IN = "click opt in security navigation", v.CLICK_OPT_IN_BUTTON = "click opt in button", v.CLICK_OPT_OUT_BUTTON = "click opt out button", v.CLICK_NEXT_STEP = "click opt in next step", v.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", v.DISPLAY_MODAL = "display opt in modal", v.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", v.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", v.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", v
			}({});
			const m = (v, n = {}) => {
				r().sendEvent(v, a({}, n || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				$y: function() {
					return o
				},
				Ai: function() {
					return n
				},
				B: function() {
					return v
				},
				BT: function() {
					return l
				},
				CK: function() {
					return m
				},
				F3: function() {
					return g
				},
				JP: function() {
					return a
				},
				O_: function() {
					return c
				},
				X2: function() {
					return u
				},
				YO: function() {
					return I
				},
				_c: function() {
					return D
				},
				je: function() {
					return d
				},
				ll: function() {
					return f
				},
				qD: function() {
					return s
				},
				tw: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const a = async O => {
				var y, A;
				const E = await (0, e.get)(`/zones/${O}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((y = E == null ? void 0 : E.body) === null || y === void 0 || (A = y.result) === null || A === void 0 ? void 0 : A.value) === "enabled"
			}, u = async (O, y) => (await (0, e.post)(`/zones/${O}/content-upload-scan/${y?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), y), l = async O => {
				var y;
				const A = await (0, e.get)(`/zones/${O}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((y = A == null ? void 0 : A.body) === null || y === void 0 ? void 0 : y.result) || []
			}, f = async (O, y) => {
				var A;
				const E = await (0, e.post)(`/zones/${O}/content-upload-scan/payloads`, {
					body: [y]
				});
				return (A = E == null ? void 0 : E.body) === null || A === void 0 ? void 0 : A.result
			}, s = async (O, y) => (await (0, e.del)(`/zones/${O}/content-upload-scan/payloads/${y}`, {
				hideErrorAlert: !0
			}), y), m = async O => {
				var y;
				const A = await (0, e.get)(`/zones/${O}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((y = A == null ? void 0 : A.body) === null || y === void 0 ? void 0 : y.pii_detection_enabled)
			}, v = async (O, y) => (await (0, e.put)(`/zones/${O}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: y
				}
			}), y), n = async O => {
				var y, A;
				const E = await (0, e.get)(`/zones/${O}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((y = E == null ? void 0 : E.body) === null || y === void 0 || (A = y.result) === null || A === void 0 ? void 0 : A.enabled)
			}, c = async (O, y) => {
				var A, E;
				const b = await (0, e.post)(`/zones/${O}/leaked-credential-checks`, {
					body: {
						enabled: y
					}
				});
				return !!((A = b == null ? void 0 : b.body) === null || A === void 0 || (E = A.result) === null || E === void 0 ? void 0 : E.enabled)
			}, i = async O => {
				var y;
				const A = await (0, e.get)(`/zones/${O}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (y = A == null ? void 0 : A.body) === null || y === void 0 ? void 0 : y.result
			}, d = async (O, y) => {
				var A;
				const E = await (0, e.post)(`/zones/${O}/leaked-credential-checks/detections`, {
					body: y
				});
				return (A = E == null ? void 0 : E.body) === null || A === void 0 ? void 0 : A.result
			}, o = async (O, y) => (await (0, e.del)(`/zones/${O}/leaked-credential-checks/detections/${y}`, {
				hideErrorAlert: !0
			}), y), g = async (O, y) => {
				await (0, e.put)(`/zones/${O}/security-center/securitytxt`, {
					body: y
				})
			}, I = async O => {
				await (0, e.del)(`/zones/${O}/security-center/securitytxt`)
			}, D = async O => (await (0, e.get)(`/zones/${O}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Xu: function() {
					return o
				},
				Io: function() {
					return E
				},
				FQ: function() {
					return ce
				},
				vU: function() {
					return d
				},
				M: function() {
					return I
				},
				d7: function() {
					return g
				},
				Oz: function() {
					return A
				},
				Np: function() {
					return j
				},
				WR: function() {
					return v
				},
				bE: function() {
					return X
				},
				u_: function() {
					return i
				},
				pf: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/pages/security/settings/hooks/api.ts"),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t("webpack/sharing/consume/default/react-redux/react-redux"),
				l = t("../react/pages/security/settings/resources/index.ts"),
				f = t("../react/common/hooks/useZoneEntitlement.ts"),
				s = t("../../../../node_modules/yup/es/index.js"),
				m = t("../react/utils/translator.tsx");
			const v = () => (0, u.useSelector)(l.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				c = () => !!useZoneEntitlement(n),
				i = () => {
					const {
						t: K
					} = (0, m.QT)(), G = s.Z_().required(K("common.field_is_required")).max(24, K("labels.apply.form.name.error.max_characters")).matches(l.DG, K("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", K("labels.apply.form.name.error.cf_forbidden"), h => !l.aW.test(h)), W = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: h => s.Ry().shape({
							[l.n5.NAME]: h ? s.Z_() : G,
							[l.n5.DESCRIPTION]: h ? s.Z_().optional() : s.Z_().max(150, K("labels.apply.form.description.error.max_characters"))
						})
					}, x = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[l.N2.NAME]: "",
							[l.N2.SOURCE]: l.W3,
							[l.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => s.Ry().shape({
							[l.N2.NEW_LABEL_NAME]: G
						})
					};
					return {
						LABELS_APPLY_FORM: W,
						EDIT_LABELS_MODAL_FORM: x
					}
				},
				d = ({
					modalHeaderFixedHeight: K = 62,
					modalDefaultPaddings: G = 16
				} = {}) => {
					const W = (0, a.useRef)(null),
						x = (0, a.useRef)(null),
						[h, M] = (0, a.useState)(0),
						[F, q] = (0, a.useState)(0),
						ee = `calc(100vh - ${h}px - ${F}px - ${G}px)`,
						[ne, Y] = (0, a.useState)("");
					return (0, a.useEffect)(() => {
						const B = () => {
							var z, te, le, ue;
							const ge = W == null || (z = W.current) === null || z === void 0 ? void 0 : z.offsetHeight,
								ye = x == null || (te = x.current) === null || te === void 0 ? void 0 : te.offsetHeight,
								Te = ((le = ge) !== null && le !== void 0 ? le : 0) + K,
								Oe = (ue = ye) !== null && ue !== void 0 ? ue : 0;
							M(Te), q(Oe)
						};
						return B(), window.addEventListener("resize", B), () => window.removeEventListener("resize", B)
					}, []), {
						searchTerm: ne,
						setSearchTerm: Y,
						scrollableSectionMaxHeight: ee,
						topMenuRef: W,
						bottomMenuRef: x
					}
				},
				o = K => {
					const G = v(),
						W = (0, e.useQueryClient)(),
						x = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${K}`,
							queryFn: () => (0, r.JP)(K),
							enabled: G
						}),
						h = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${K}`,
							queryFn: () => (0, r.BT)(K),
							enabled: G && !!(x == null ? void 0 : x.data)
						}),
						M = (0, e.useMutation)({
							mutationFn: async ({
								enabled: ee
							}) => await (0, r.X2)(K, ee),
							onSuccess: ee => {
								W.setQueryData([`content-scanning-enabled-${K}`], ee)
							}
						}),
						F = (0, e.useMutation)({
							mutationFn: ee => (0, r.ll)(K, ee),
							onSuccess: ee => {
								W.setQueryData([`content-scanning-detections-${K}`], ee)
							}
						}),
						q = (0, e.useMutation)({
							mutationFn: ee => (0, r.qD)(K, ee),
							onSuccess: ee => {
								var ne;
								const Y = (ne = W.getQueryData(`content-scanning-detections-${K}`)) !== null && ne !== void 0 ? ne : [];
								W.setQueryData([`content-scanning-detections-${K}`], Y.filter(({
									id: B
								}) => B !== ee))
							}
						});
					return {
						entitled: G,
						loading: x.isLoading || h.isLoading,
						error: x.isError || h.isError,
						enabled: {
							data: x.data,
							isToggling: M.isLoading,
							toggleEnabled: async ee => M.mutateAsync({
								enabled: ee
							})
						},
						detections: {
							data: h.data,
							add: F.mutateAsync,
							delete: q.mutateAsync,
							loading: F.isLoading || q.isLoading
						}
					}
				},
				g = () => {
					const K = (0, u.useSelector)(l.cN),
						G = (0, u.useSelector)(l.bH),
						W = (0, u.useSelector)(l.P3),
						x = (0, u.useSelector)(l.Ri);
					return {
						hasEditPermission: K,
						isEnabled: W && (G.hasSimilarLeaked || G.hasUsernameAndPasswordLeaked || x)
					}
				},
				I = K => {
					const G = g(),
						W = (0, e.useQueryClient)(),
						x = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${K}`,
							queryFn: () => (0, r.Ai)(K),
							enabled: !!G.isEnabled,
							retry: 1
						}),
						h = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${K}`,
							queryFn: () => (0, r.tw)(K),
							enabled: !!G.isEnabled && !!(x == null ? void 0 : x.data)
						}),
						M = (0, e.useMutation)({
							mutationFn: ({
								enabled: ee
							}) => (0, r.O_)(K, ee),
							onSuccess: ee => {
								W.setQueryData([`leaked-credentials-enabled-${K}`], ee)
							}
						}),
						F = (0, e.useMutation)({
							mutationFn: async ee => await (0, r.je)(K, ee),
							onSuccess: ee => {
								var ne;
								const Y = (ne = W.getQueryData(`leaked-credentials-detections-${K}`)) !== null && ne !== void 0 ? ne : [];
								W.setQueryData([`leaked-credentials-detections-${K}`], [...Y, ee])
							}
						}),
						q = (0, e.useMutation)({
							mutationFn: ee => (0, r.$y)(K, ee),
							onSuccess: ee => {
								var ne;
								const Y = (ne = W.getQueryData(`leaked-credentials-detections-${K}`)) !== null && ne !== void 0 ? ne : [];
								W.setQueryData([`leaked-credentials-detections-${K}`], Y.filter(({
									id: B
								}) => B !== ee))
							}
						});
					return {
						entitled: G.isEnabled,
						hasEditPermissions: G.hasEditPermission,
						loading: x.isLoading || h.isLoading,
						error: x.isError || x.isError,
						enabled: {
							data: x.data,
							isToggling: M.isLoading,
							toggleEnabled: async ee => M.mutateAsync({
								enabled: ee
							})
						},
						detections: {
							data: h.data,
							add: F.mutateAsync,
							delete: q.mutateAsync,
							loading: F.isLoading || q.isLoading
						}
					}
				};
			var D = t("../react/common/utils/useQueryCache.ts");
			const O = "security-txt",
				y = {
					securityTxt: ({
						zoneId: K
					}) => [O, K]
				},
				A = K => (0, e.useQuery)({
					queryKey: y.securityTxt({
						zoneId: K
					}),
					queryFn: () => (0, r._c)(K),
					select: G => G.result
				}),
				E = K => {
					const {
						invalidate: G
					} = (0, D.o)(y.securityTxt({
						zoneId: K
					}));
					return (0, e.useMutation)({
						mutationFn: () => (0, r.YO)(K),
						onSuccess: async () => {
							await G(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				b = K => {
					const {
						invalidate: G
					} = (0, D.o)(y.securityTxt({
						zoneId: K
					}));
					return (0, e.useMutation)({
						mutationFn: W => (0, r.F3)(K, W),
						onSuccess: async () => {
							await G(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var S = t("../../../../node_modules/lodash/isEqual.js"),
				k = t.n(S),
				N = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function w(K) {
				for (var G = 1; G < arguments.length; G++) {
					var W = arguments[G] != null ? Object(arguments[G]) : {},
						x = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(W).filter(function(h) {
						return Object.getOwnPropertyDescriptor(W, h).enumerable
					})), x.forEach(function(h) {
						C(K, h, W[h])
					})
				}
				return K
			}

			function C(K, G, W) {
				return G = P(G), G in K ? Object.defineProperty(K, G, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[G] = W, K
			}

			function P(K) {
				var G = L(K, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function L(K, G) {
				if (typeof K != "object" || K === null) return K;
				var W = K[Symbol.toPrimitive];
				if (W !== void 0) {
					var x = W.call(K, G || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(K)
			}
			const j = K => {
					const {
						queryKey: G,
						zoneId: W
					} = (0, N.hL)(K), {
						isLoading: x,
						isError: h,
						isSuccess: M,
						data: F,
						refetch: q,
						isRefetching: ee
					} = (0, e.useQuery)({
						queryKey: G,
						queryFn: () => N.Mi.getLabels(w({
							zoneId: W
						}, K)),
						onSuccess: () => {
							var ne;
							const Y = K == null || (ne = K.filters) === null || ne === void 0 ? void 0 : ne.source;
							(Y === l.LABEL_SOURCES.MANAGED || Y === l.LABEL_SOURCES.USER) && (0, l.Tf)({
								name: l.QJ.FILTER_USER_MANAGED_LABELS,
								product: l.Iv.SECURITY_SETTINGS,
								pageName: l.R.LABELS_LIST,
								type: Y
							})
						}
					});
					return {
						data: F == null ? void 0 : F.result,
						errors: F == null ? void 0 : F.errors,
						paginationData: F == null ? void 0 : F.result_info,
						isLoading: x,
						isError: h,
						isSuccess: M,
						refetch: q,
						isRefetching: ee
					}
				},
				X = ({
					labels: K,
					preselectedLabels: G
				}) => {
					const {
						USER: W,
						MANAGED: x
					} = l.LABEL_SOURCES, [h, M] = (0, a.useState)({
						[W]: [],
						[x]: []
					}), [F, q] = (0, a.useState)(new Set), ee = F.size > 0, [ne, Y] = (0, a.useState)(!1), B = ue => {
						q(ge => {
							const ye = new Set(ge);
							return ye.has(ue.name) ? ye.delete(ue.name) : ye.add(ue.name), ye
						})
					}, z = ue => F.has(ue.name), te = (ue, ge) => {
						const ye = z(ue) ? 1 : 0;
						return (z(ge) ? 1 : 0) - ye
					}, le = ue => {
						M(ge => ({
							[W]: [...ue ? ue[W] : ge[W]].sort(te),
							[x]: [...ue ? ue[x] : ge[x]].sort(te)
						}))
					};
					return (0, a.useEffect)(() => {
						if (K && !ne) {
							if (G) {
								const ue = new Set;
								K.forEach(ge => {
									G.some(ye => k()(ye, ge)) && ue.add(ge.name)
								}), q(ue)
							}
							Y(!0)
						}
					}, [K, G, ne]), (0, a.useEffect)(() => {
						if (K && ne) {
							const ue = K.reduce((ye, Te) => (Te.source === W ? ye[W].push(Te) : Te.source === x && ye[x].push(Te), ye), {
									[W]: [],
									[x]: []
								}),
								ge = {
									[W]: ue[W].sort(te),
									[x]: ue[x].sort(te)
								};
							M(ge)
						}
					}, [W, x, K, ne]), {
						userAndManagedLabels: h,
						setUserAndManagedLabels: M,
						toggleSelectedLabel: B,
						isLabelSelected: z,
						sortLabelsBySelectedStatus: le,
						hasLabelsSelected: ee
					}
				};
			var oe = t("../react/app/redux/index.ts"),
				pe = t("../react/pages/security/settings/resources/selectors.ts");
			const ce = (K = "") => {
				const G = (0, oe.p4)(pe.Xs),
					W = G && (K == null ? void 0 : K.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: G,
					hasDeprecatedParameter: W
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				FQ: function() {
					return m.FQ
				},
				Iv: function() {
					return v.Iv
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
					return v.QJ
				},
				R: function() {
					return v.R
				},
				Tf: function() {
					return v.Tf
				},
				WR: function() {
					return m.WR
				},
				Xs: function() {
					return v.Xs
				},
				Xu: function() {
					return m.Xu
				},
				ZF: function() {
					return v.ZF
				},
				bE: function() {
					return m.bE
				},
				bH: function() {
					return v.bH
				},
				dC: function() {
					return v.dC
				},
				eC: function() {
					return v.eC
				},
				m8: function() {
					return v.m8
				},
				pf: function() {
					return m.pf
				},
				ui: function() {
					return v.ui
				},
				vc: function() {
					return v.vc
				},
				zF: function() {
					return v.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/app/components/Forbidden.jsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				l = t("../node_modules/@cloudflare/component-page/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(f),
				m = t("../react/pages/security/settings/hooks/index.ts"),
				v = t("../react/pages/security/settings/resources/index.ts");
			const n = u().lazy(() => Promise.all([t.e(16691), t.e(46812), t.e(12174), t.e(1091), t.e(55554), t.e(51436), t.e(70618), t.e(68204), t.e(2515), t.e(65022), t.e(45275), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(91018), t.e(83276), t.e(5756), t.e(28861), t.e(52215), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				c = () => {
					const {
						t: i
					} = (0, f.useI18n)(), d = (0, e.xk)("waf");
					return u().createElement(l.T3, {
						parentPageLabel: i("navigation.zone.security"),
						title: i("navigation.zone.security.settings"),
						type: "narrow"
					}, d.read ? u().createElement(n, null) : u().createElement(r.Z, null))
				};
			_.ZP = c
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Mi: function() {
					return y
				},
				hL: function() {
					return O
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/zoneSelectors.ts"),
				a = t("../react/common/utils/useQueryCache.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/common/hooks/useAccountId.ts"),
				f = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				s = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const m = {
				labels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var v = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				c = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function i(E, b) {
				if (E == null) return {};
				var S = d(E, b),
					k, N;
				if (Object.getOwnPropertySymbols) {
					var w = Object.getOwnPropertySymbols(E);
					for (N = 0; N < w.length; N++) k = w[N], !(b.indexOf(k) >= 0) && (!Object.prototype.propertyIsEnumerable.call(E, k) || (S[k] = E[k]))
				}
				return S
			}

			function d(E, b) {
				if (E == null) return {};
				var S = {},
					k = Object.keys(E),
					N, w;
				for (w = 0; w < k.length; w++) N = k[w], !(b.indexOf(N) >= 0) && (S[N] = E[N]);
				return S
			}

			function o(E) {
				for (var b = 1; b < arguments.length; b++) {
					var S = arguments[b] != null ? Object(arguments[b]) : {},
						k = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(S).filter(function(N) {
						return Object.getOwnPropertyDescriptor(S, N).enumerable
					})), k.forEach(function(N) {
						g(E, N, S[N])
					})
				}
				return E
			}

			function g(E, b, S) {
				return b = I(b), b in E ? Object.defineProperty(E, b, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[b] = S, E
			}

			function I(E) {
				var b = D(E, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function D(E, b) {
				if (typeof E != "object" || E === null) return E;
				var S = E[Symbol.toPrimitive];
				if (S !== void 0) {
					var k = S.call(E, b || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(E)
			}
			const O = E => {
					const b = (0, e.p4)(r.Cu),
						S = (0, l.F)(),
						k = A.labels(o({
							accountId: S,
							zoneId: b
						}, E ? o({}, E) : {})),
						N = (0, a.o)(k);
					return o({
						zoneId: b,
						queryKey: k,
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
					getLabels: async E => {
						var b, S, k, N;
						let {
							zoneId: w,
							hideErrorAlert: C = !0
						} = E, P = i(E, ["zoneId", "hideErrorAlert"]);
						return (await f.get(m.labels.toUrl({
							zoneId: w
						}), {
							parameters: {
								page: P == null ? void 0 : P.page,
								per_page: P == null ? void 0 : P.per_page,
								with_mapped_resource_counts: P == null ? void 0 : P.with_mapped_resource_counts,
								filter: P == null || (b = P.filters) === null || b === void 0 ? void 0 : b.search,
								source: (0, n.sQ)(P == null || (S = P.filters) === null || S === void 0 ? void 0 : S.source),
								order: P == null || (k = P.sort) === null || k === void 0 ? void 0 : k.id,
								direction: (P == null ? void 0 : P.sort) ? (P == null || (N = P.sort) === null || N === void 0 ? void 0 : N.desc) ? c.Sr.desc : c.Sr.asc : void 0
							},
							hideErrorAlert: C
						})).body
					},
					getLabel: async E => {
						let {
							zoneId: b,
							labelName: S,
							hideErrorAlert: k = !0
						} = E, N = i(E, ["zoneId", "labelName", "hideErrorAlert"]);
						const w = (0, n.mm)(S) ? m.managedLabel.toUrl({
							zoneId: b,
							labelName: S
						}) : m.userLabel.toUrl({
							zoneId: b,
							labelName: S
						});
						return (await f.get(w, {
							parameters: {
								with_mapped_resource_counts: N == null ? void 0 : N.with_mapped_resource_counts
							},
							hideErrorAlert: k
						})).body
					},
					editLabel: async ({
						zoneId: E,
						label: b,
						replace: S
					}) => {
						const {
							name: k
						} = b, N = i(b, ["name"]);
						return (await (S ? f.put : f.patch)(m.userLabel.toUrl({
							zoneId: E,
							labelName: b.name
						}), {
							body: N
						})).body
					},
					deleteLabel: async ({
						zoneId: E,
						labelName: b
					}) => (await f.del(m.userLabel.toUrl({
						zoneId: E,
						labelName: b
					}))).body,
					createLabel: async E => {
						let {
							zoneId: b
						} = E, S = i(E, ["zoneId"]);
						const {
							product: k
						} = S, N = i(S, ["product"]);
						return (await f.post(m.userLabels.toUrl({
							zoneId: b
						}), {
							body: [N]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: E,
						user: b,
						managed: S,
						operationIds: k,
						replace: N
					}) => (await (N ? f.put : f.post)(m.operationsLinkedToLabels.toUrl({
						zoneId: E
					}), {
						body: o({}, b ? {
							user: {
								labels: b
							}
						} : {}, S ? {
							managed: {
								labels: S
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: k
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: E,
						labelName: b,
						operationIds: S
					}) => {
						const k = (0, n.mm)(b) ? m.managedLabelOperations.toUrl({
							zoneId: E,
							labelName: b
						}) : m.userLabelOperations.toUrl({
							zoneId: E,
							labelName: b
						});
						return (await f.put(k, {
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
				A = {
					labels: E => {
						let {
							accountId: b,
							zoneId: S
						} = E, k = i(E, ["accountId", "zoneId"]);
						return [u.IQ.LABELS, b, S, ...(0, v.isEmpty)(k) ? [] : [k]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				DG: function() {
					return I
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return s
				},
				GE: function() {
					return S
				},
				IQ: function() {
					return u
				},
				KV: function() {
					return f
				},
				LABELS_LIST_TOASTS: function() {
					return d
				},
				LABEL_SOURCES: function() {
					return l
				},
				QH: function() {
					return o
				},
				V: function() {
					return A
				},
				W3: function() {
					return a
				},
				_8: function() {
					return i
				},
				_c: function() {
					return E
				},
				aW: function() {
					return D
				},
				dC: function() {
					return N
				},
				gY: function() {
					return b
				},
				j8: function() {
					return m
				},
				jz: function() {
					return g
				},
				n5: function() {
					return O
				},
				om: function() {
					return v
				},
				w: function() {
					return r
				},
				zF: function() {
					return k
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let r = function(w) {
				return w.EXPOSED_CREDENTIALS = "exposed_credentials", w.CONTENT_SCANNING = "content_scanning", w.FIREWALL_AI = "firewall_ai", w
			}({});
			const a = "all";
			let u = function(w) {
					return w.LABELS = "labels", w
				}({}),
				l = function(w) {
					return w.USER = "user", w.MANAGED = "managed", w
				}({}),
				f = function(w) {
					return w.SOURCE = "source", w
				}({}),
				s = function(w) {
					return w.NAME = "name", w.SOURCE = "source", w.NEW_LABEL_NAME = "newLabelName", w
				}({}),
				m = function(w) {
					return w.ENDPOINT = "endpoint", w.METHOD = "method", w.OPERATION_ID = "operationId", w
				}({}),
				v = function(w) {
					return w.NAME = "name", w.MAPPED_RESOURCES = "mapped_resources.operations", w.SOURCE = "source", w.APPLY = "apply", w
				}({});
			const i = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: v.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[f.SOURCE]: a
					}
				},
				filters: f,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					autoClearQs: !0
				}
			};
			let d = function(w) {
				return w.CREATED_LABEL = "createdLabel", w.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", w.DELETED_LABEL = "deletedLabel", w.APPLIED_LABEL = "appliedLabel", w.EDITED_LABEL = "editedLabel", w.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", w
			}({});
			const o = "650px",
				g = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				I = /^[A-Za-z0-9-]+$/,
				D = /^cf-/;
			let O = function(w) {
				return w.NAME = "name", w.DESCRIPTION = "description", w
			}({});
			const y = "all";
			let A = function(w) {
				return w.METHOD = "method", w.HOSTNAME = "hostname", w
			}({});
			const E = {
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
						[A.METHOD]: y,
						[A.HOSTNAME]: y
					}
				},
				filters: A
			};
			let b = function(w) {
				return w.TITLE = "title", w.DESCRIPTION = "description", w.SUBMIT = "submit", w
			}({});
			const S = 1e3,
				k = {
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
		"../react/pages/security/settings/resources/index.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
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
					return c
				},
				zF: function() {
					return e.zF
				},
				QJ: function() {
					return g
				},
				R: function() {
					return n
				},
				LABEL_SOURCES: function() {
					return e.LABEL_SOURCES
				},
				eC: function() {
					return o
				},
				QH: function() {
					return e.QH
				},
				TG: function() {
					return r.T
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
					return O.Xs
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
					return O.bH
				},
				Mb: function() {
					return a.Mb
				},
				ui: function() {
					return O.ui
				},
				P3: function() {
					return O.P3
				},
				Ri: function() {
					return O.Ri
				},
				cN: function() {
					return O.cN
				},
				m8: function() {
					return D
				},
				Tf: function() {
					return I
				},
				$E: function() {
					return a.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				r = t("../react/pages/security/settings/resources/types.ts"),
				a = t("../react/pages/security/settings/resources/utils.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(u);

			function f(y) {
				for (var A = 1; A < arguments.length; A++) {
					var E = arguments[A] != null ? Object(arguments[A]) : {},
						b = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(E).filter(function(S) {
						return Object.getOwnPropertyDescriptor(E, S).enumerable
					})), b.forEach(function(S) {
						s(y, S, E[S])
					})
				}
				return y
			}

			function s(y, A, E) {
				return A = m(A), A in y ? Object.defineProperty(y, A, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[A] = E, y
			}

			function m(y) {
				var A = v(y, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function v(y, A) {
				if (typeof y != "object" || y === null) return y;
				var E = y[Symbol.toPrimitive];
				if (E !== void 0) {
					var b = E.call(y, A || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(y)
			}
			let n = function(y) {
					return y.LABELS_LIST = "Labels List page", y.LABELS_APPLY = "Labels Apply page", y.LABELS_SIDE_MODAL = "Labels Side Modal", y.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", y.LABELS_OPERATION_DETAILS = "Operation Details page", y
				}({}),
				c = function(y) {
					return y.API_SHIELD = "API Shield", y.SECURITY_SETTINGS = "Security Settings", y
				}({}),
				i = function(y) {
					return y.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", y.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", y.OPERATIONS_TABLE_ROW = "Operations table row", y.OPERATION_DETAILS_PAGE = "Operation details page", y
				}({}),
				d = function(y) {
					return y.UPSERT = "upsert", y.OVERWRITE = "overwrite", y
				}({}),
				o = function(y) {
					return y.SINGLE = "single", y.MULTIPLE = "multiple", y
				}({}),
				g = function(y) {
					return y.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", y.DELETE_LABEL = "delete a user label in the settings page", y.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", y.CREATE_LABEL_CLICKED = "click create label button in the settings page", y.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", y.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", y.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", y.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", y.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", y.OPEN_LABELS_SIDE_MODAL = "open labels side modal", y.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", y.CREATE_NEW_LABEL = "create a new label", y
				}({});
			const I = ({
					name: y,
					product: A,
					category: E = "user journey",
					pageName: b,
					from: S,
					write_strategy: k,
					type: N,
					target: w
				}) => {
					l().sendEvent(y, f({
						category: E,
						pageName: b,
						product: A
					}, S ? {
						from: S
					} : {}, k ? {
						write_strategy: k
					} : {}, N ? {
						type: N
					} : {}, w ? {
						target: w
					} : {}))
				},
				D = () => {
					var y;
					return (y = Object.values(g)) === null || y === void 0 ? void 0 : y.flat()
				};
			var O = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				P3: function() {
					return m
				},
				Ri: function() {
					return v
				},
				Xs: function() {
					return c
				},
				bH: function() {
					return n
				},
				cN: function() {
					return s
				},
				ui: function() {
					return f
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				r = t("../react/utils/url.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const f = i => {
					const d = (0, e.RO)(i),
						o = !!(0, a.rV)(i, "rulesets.file_upload_scan_allowed"),
						g = !!(0, a.BF)(i, "rulesets.file_upload_scan_allowed");
					return (0, r.el)(window.location.pathname) ? d && (o || g) : g
				},
				s = i => Number((0, a.rV)(i, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				m = i => (0, a.rV)(i, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				v = i => (0, a.rV)(i, "rulesets.leaked_credential_checks_allowed"),
				n = i => (0, l.z1)(u.dC)(i) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, a.rV)(i, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, a.rV)(i, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				c = i => !!(0, l.z1)("deprecate-security-level")(i)
		},
		"../react/pages/security/settings/resources/types.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				T: function() {
					return r
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let r = function(a) {
				return a.ENABLED = "enabled", a.CONTACT = "contact", a.EXPIRES = "expires", a.ENCRYPTION = "encryption", a.ACKNOWLEDGMENTS = "acknowledgments", a.CANONICAL = "canonical", a.HIRING = "hiring", a.POLICY = "policy", a.PREFERRED_LANGUAGES = "preferred_languages", a
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				$E: function() {
					return i
				},
				Mb: function() {
					return d
				},
				N2: function() {
					return A
				},
				Q4: function() {
					return g
				},
				QF: function() {
					return c
				},
				Vy: function() {
					return D
				},
				Wv: function() {
					return o
				},
				mm: function() {
					return y
				},
				sQ: function() {
					return O
				},
				vc: function() {
					return I
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				a = t("../react/pages/security/settings/routes.tsx"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/pages/security/settings/resources/types.ts"),
				f = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function s(E) {
				for (var b = 1; b < arguments.length; b++) {
					var S = arguments[b] != null ? Object(arguments[b]) : {},
						k = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(S).filter(function(N) {
						return Object.getOwnPropertyDescriptor(S, N).enumerable
					})), k.forEach(function(N) {
						m(E, N, S[N])
					})
				}
				return E
			}

			function m(E, b, S) {
				return b = v(b), b in E ? Object.defineProperty(E, b, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[b] = S, E
			}

			function v(E) {
				var b = n(E, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function n(E, b) {
				if (typeof E != "object" || E === null) return E;
				var S = E[Symbol.toPrimitive];
				if (S !== void 0) {
					var k = S.call(E, b || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(E)
			}
			const c = {
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
				d = E => e.Ry({
					[l.T.CONTACT]: e.IX().of(e.Z_().required(E("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, E("security_txt.fields.contact.format_error"))),
					[l.T.EXPIRES]: e.hT().required(E("common.required")).min(new Date, E("security_txt.fields.expires.min_error"))
				}),
				o = E => {
					const b = {};
					for (const S in E) b[S] = Array.isArray(E[S]) ? E[S].filter(k => !!k) : E[S];
					return s({}, b, {
						expires: (0, f.DZ)(E.expires)
					})
				},
				g = (E, b, S) => {
					const k = [...new Set([l.T.CONTACT, l.T.EXPIRES, ...Object.values(l.T)])],
						N = Object.entries(E).sort(([w], [C]) => k.indexOf(w) - k.indexOf(C)).filter(([w, C]) => !!i[w] && !!C && (!Array.isArray(C) || !!C.length)).map(([w, C]) => Array.isArray(C) ? C.map(P => `${S(i[w].label)}: ${P}`).join(`
`) : `${S(i[w].label)}: ${C}`).join(`
`);
					(0, r.yH)(`Cloudflare_${b}_security.txt`, N, "text/plain;charset=utf-8")
				};
			let I = function(E) {
				return E.CREATED = "created security.txt", E.ENABLED = "enabled security.txt", E.DISABLED = "disabled security.txt", E.DOWNLOADED = "downloaded security.txt", E.UPDATED = "updated security.txt", E.DELETED = "deleted security.txt", E
			}({});
			const D = E => (E == null ? void 0 : E.source) === u.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (E == null ? void 0 : E.source) === u.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				O = E => E === u.W3 ? void 0 : E,
				y = E => u.aW.test(E),
				A = E => {
					switch (E) {
						case u.w.CONTENT_SCANNING:
							return a.ROUTES.CONTENT_SCANNING;
						case u.w.EXPOSED_CREDENTIALS:
							return a.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				ROUTES: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
				ROOT: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings`,
				DETECTIONS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections`,
				EXPOSED_CREDENTIALS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections/exposed-credentials`,
				CONTENT_SCANNING: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections/malicious-content`,
				LABELS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/labels`,
				LABEL_APPLY: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/labels/apply/:labelName?`,
				SECURITY_TXT: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/security-txt`
			}
		},
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Sb: function() {
					return v
				},
				Vj: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						d = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(i).filter(function(o) {
						return Object.getOwnPropertyDescriptor(i, o).enumerable
					})), d.forEach(function(o) {
						u(n, o, i[o])
					})
				}
				return n
			}

			function u(n, c, i) {
				return c = l(c), c in n ? Object.defineProperty(n, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[c] = i, n
			}

			function l(n) {
				var c = f(n, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(n, c) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var d = i.call(n, c || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(n)
			}
			const s = {
					SHOW_LCC_MIGRATION_BANNER: "show LCC migration banner",
					SHOW_LCC_MIGRATION_WARNING: "show LCC migration warning",
					CLICK_LCC_DOCUMENTATION: "click link to Leaked credentials detection documentation",
					CLICK_LCC_UPGRADE_GUIDE: "click link to Leaked credentials detection upgrade guide"
				},
				m = {
					product: "WAF Managed Rules"
				},
				v = ({
					event: n,
					category: c = "user journey",
					product: i = "waf",
					productName: d = "Managed Rules",
					additionalData: o
				}) => {
					r().sendEvent(n, a({
						category: c,
						product: i,
						productName: d
					}, o || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				D: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CLICK_MENU_ITEM_SHARE = "click on share item", r.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", r.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", r.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", r.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", r.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", r.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", r.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", r.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", r.CLICK_ON_DELETE_RULESET = "click on delete ruleset", r.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", r
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.IP_ADDRESS = "create spectrum app using IP address", r.CNAME = "create spectrum app using cname record", r.LB = "create spectrum app using load balancer", r.UPDATE_IP_ADDRESS = "update spectrum app using IP address", r.UPDATE_CNAME = "update spectrum app using cname record", r.UPDATE_LB = "update spectrum app using load balancer", r.DISABLE = "disable spectrum app", r
			}({})
		},
		"../react/pages/stream/actionTypes.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				U: function() {
					return e
				}
			});
			let e = function(r) {
				return r.ReplaceVideos = "stream.replace_videos", r.PrependVideo = "stream.prepend_video", r.UpdateVideo = "stream.update_video", r.UpdateVideoPending = "steam.update_video_pending", r.RemoveVideos = "stream.remove_videos", r.StoreUploader = "stream.store_uploader", r.UpsertUploads = "stream.upsert_uploads", r.RemoveUploads = "stream.remove_uploads", r.UpdateUploadProgress = "stream.update_upload_progress", r.UploadViaUrl = "stream.upload_via_url", r.SetLoading = "stream.set_loading", r.SetStorageLoading = "stream.set_storage_loading", r.SetStorage = "stream.set_storage", r.SetPage = "stream.set_page", r.SetPausedUploads = "stream.set_paused_uploads", r.RemovePausedUpload = "stream.remove_paused_upload", r.SetRequestTimestamp = "stream.set_request_timestamp", r.ResetState = "stream.reset_state", r
			}({})
		},
		"../react/pages/stream/reducer.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				ZP: function() {
					return n
				},
				nY: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				r = t("../react/pages/stream/actionTypes.ts"),
				a = t("../react/pages/stream/util/pager.ts");

			function u(c) {
				for (var i = 1; i < arguments.length; i++) {
					var d = arguments[i] != null ? Object(arguments[i]) : {},
						o = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && o.push.apply(o, Object.getOwnPropertySymbols(d).filter(function(g) {
						return Object.getOwnPropertyDescriptor(d, g).enumerable
					})), o.forEach(function(g) {
						l(c, g, d[g])
					})
				}
				return c
			}

			function l(c, i, d) {
				return i = f(i), i in c ? Object.defineProperty(c, i, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = d, c
			}

			function f(c) {
				var i = s(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function s(c, i) {
				if (typeof c != "object" || c === null) return c;
				var d = c[Symbol.toPrimitive];
				if (d !== void 0) {
					var o = d.call(c, i || "default");
					if (typeof o != "object") return o;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}
			const m = "stream",
				v = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(c = v, i) {
				switch (i.type) {
					case r.U.ResetState:
						return v;
					case r.U.SetStorageLoading:
						const {
							storageLoading: d
						} = i;
						return u({}, c, {
							storageLoading: d
						});
					case r.U.SetStorage:
						return u({}, c, {
							storage: i.payload ? u({}, c.storage, i.payload) : void 0
						});
					case r.U.ReplaceVideos:
						return u({}, c, {
							videos: i.videos
						});
					case r.U.PrependVideo:
						return u({}, c, {
							videos: [i.video, ...c.videos].filter((o, g) => g < a.FJ)
						});
					case r.U.UpdateVideo:
						return u({}, c, {
							videos: c.videos.map(o => o.uid === i.video.uid ? i.video : o)
						});
					case r.U.UpdateVideoPending:
						return u({}, c, {
							videoUpdateStatuses: u({}, c.videoUpdateStatuses, {
								[i.uid]: i.status
							})
						});
					case r.U.RemoveVideos:
						return u({}, c, {
							videos: c.videos.filter(o => !i.ids.includes(o.uid))
						});
					case r.U.SetLoading:
						return u({}, c, {
							loading: i.loading
						});
					case r.U.SetRequestTimestamp:
						return u({}, c, {
							requestTimestamp: i.requestTimestamp
						});
					case r.U.UploadViaUrl:
						return c;
					default:
						return (0, e.h)(i, c)
				}
			}
		},
		"../react/pages/stream/routes.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				C: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/stream`,
				a = (0, e.BC)`${r}/inputs`,
				u = (0, e.BC)`${r}/videos`,
				l = (0, e.BC)`${r}/analytics`,
				f = (0, e.BC)`${u}/${"videoId"}`,
				s = (0, e.BC)`${r}/video-transformations`,
				m = {
					root: r,
					inputs: a,
					configureInputs: (0, e.BC)`${a}/custom-hostnames`,
					videos: u,
					analytics: l,
					videoPage: f,
					videoTransformationsConfigList: s,
					videoTransformationsZoneConfig: (0, e.BC)`${s}/${"zoneId"}/settings`,
					inputPage: (0, e.BC)`${a}/${"inputId"}`,
					createOutput: (0, e.BC)`${a}/${"inputId"}/createOutput`,
					createInput: (0, e.BC)`${a}/create`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/stream`,
					signUp: (0, e.BC)`/sign-up/stream`,
					checkoutSuccess: (0, e.BC)`${r}/bundle-checkout-success`,
					plans: (0, e.BC)`${r}/plans`,
					managePlan: (0, e.BC)`${r}/manage-plan`
				}
		},
		"../react/pages/stream/selectors.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
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
					return g
				},
				_Q: function() {
					return c
				},
				aM: function() {
					return o
				},
				bM: function() {
					return s
				},
				bO: function() {
					return i
				},
				bm: function() {
					return d
				},
				mX: function() {
					return I
				},
				pW: function() {
					return f
				},
				xW: function() {
					return v
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/pages/stream/reducer.ts");
			const u = D => D[a.nY],
				l = D => u(D).videos,
				f = D => u(D).videoUpdateStatuses,
				s = D => u(D).loading,
				m = D => u(D).requestTimestamp,
				v = D => u(D).storageLoading,
				n = D => u(D).storage,
				c = D => (0, r.BF)(D, "stream.enabled") || (0, e.bC)(D),
				i = D => (0, e.Le)(D, "stream", "connect"),
				d = D => (0, e.Le)(D, "stream", "stream-4371"),
				o = D => (0, e.Le)(D, "stream", "public-details-enabled"),
				g = D => !!(0, e.Le)(D, "stream", "llhls"),
				I = D => {
					const O = n(D);
					return O !== void 0 && O.limitMins > O.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				FJ: function() {
					return e
				},
				d6: function() {
					return a
				},
				wL: function() {
					return r
				}
			});
			const e = 30;

			function r(u, l, f) {
				const s = {
					search: f,
					limit: e.toString()
				};
				return l !== void 0 && (s.end = l), s
			}

			function a(u, l, f) {
				return {
					limit: e.toString(),
					search: f,
					asc: "true",
					start_comp: "gt",
					start: l
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				V: function() {
					return e
				}
			});
			let e = function(r) {
				return r.ARGO_ENABLEMENT = "change argo enablement", r.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", r.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", r
			}({})
		},
		"../react/pages/traffic/load-balancing/account/resources/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				QK: function() {
					return s
				},
				WM: function() {
					return d
				},
				Zk: function() {
					return m
				},
				aB: function() {
					return v
				},
				eT: function() {
					return i
				},
				mm: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(o) {
				for (var g = 1; g < arguments.length; g++) {
					var I = arguments[g] != null ? Object(arguments[g]) : {},
						D = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(I).filter(function(O) {
						return Object.getOwnPropertyDescriptor(I, O).enumerable
					})), D.forEach(function(O) {
						u(o, O, I[O])
					})
				}
				return o
			}

			function u(o, g, I) {
				return g = l(g), g in o ? Object.defineProperty(o, g, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[g] = I, o
			}

			function l(o) {
				var g = f(o, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function f(o, g) {
				if (typeof o != "object" || o === null) return o;
				var I = o[Symbol.toPrimitive];
				if (I !== void 0) {
					var D = I.call(o, g || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(o)
			}
			let s = function(o) {
					return o.CREATE_BUTTON_CLICK = "click create load balancer", o.TOGGLE_STATUS = "load balancer toggle status", o.REVIEW_PAGE_CLICK = "click load balancer table review link", o.EDIT_CLICK = "click load balancer table edit button", o.DELETE_CLICK = "click load balancer table delete button", o
				}({}),
				m = function(o) {
					return o.EDIT_HOSTNAME_CLICK = "click edit load balancer hostname", o.EDIT_IP_CLICK = "click edit load balancer IP", o.EDIT_POOLS_CLICK = "click edit load balancer pools", o.EDIT_MONITORS_CLICK = "click edit load balancer monitors", o.EDIT_CUSTOM_RULES_CLICK = "click edit load balancer custom rules", o.EDIT_TRAFFIC_STEERING_CLICK = "click edit load balancer traffic steering", o
				}({}),
				v = function(o) {
					return o.GO_TO_STEP = "click load balancer step", o.BACK_TO_STEP = "click load balancer back to step", o.SAVE = "save load balancer", o.SAVE_AS_DRAFT = "save load balancer as draft", o.SAVE_AND_DEPLOY = "save and deploy load balancer", o.NAVIGATION_CHANGE = "click load balancer wizard navigation link", o
				}({}),
				n = function(o) {
					return o.OPEN_SUBSCRIPTION_MODAL = "open load balancing subscription modal", o
				}({});
			const i = Object.values({
					LOAD_BALANCERS_TABLE: s,
					REVIEW: m,
					WIZARD: v,
					USAGE: n
				}).flatMap(Object.values),
				d = (o, g) => r().sendEvent(o, a({
					category: "user journey",
					product: "load balancing"
				}, g))
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Z: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_AND_DEPLOY = "create load balancer", r.ANALYTICS = "read analytics", r.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", r.POOL_TABLE = "click on expandable row on pool", r.CREATE_MONITOR_LINK = "click on create a monitor", r.EDIT_MONITOR_LINK = "click on edit a monitor", r.EDIT_MONITOR = "edit monitor", r.CREATE_MONITOR = "create monitor", r.CREATE_POOL_LINK = "click on create a pool", r.EDIT_POOL_LINK = "click on edit a pool", r.EDIT_POOL = "edit pool", r.CREATE_POOL = "create pool", r
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				N: function() {
					return a
				},
				X: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let a = function(l) {
				return l.CREATE = "create waiting room", l.UPDATE = "update waiting room", l.EVENTS = "view waiting rooms events", l.ANALYTICS = "view waiting room analytics", l.GENERATE_PREVIEW = "generate waiting room preview link", l
			}({});
			const u = async l => {
				await r().sendEvent(l, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				N3: function() {
					return m
				},
				P: function() {
					return n
				},
				Xh: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(c) {
				for (var i = 1; i < arguments.length; i++) {
					var d = arguments[i] != null ? Object(arguments[i]) : {},
						o = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && o.push.apply(o, Object.getOwnPropertySymbols(d).filter(function(g) {
						return Object.getOwnPropertyDescriptor(d, g).enumerable
					})), o.forEach(function(g) {
						u(c, g, d[g])
					})
				}
				return c
			}

			function u(c, i, d) {
				return i = l(i), i in c ? Object.defineProperty(c, i, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = d, c
			}

			function l(c) {
				var i = f(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function f(c, i) {
				if (typeof c != "object" || c === null) return c;
				var d = c[Symbol.toPrimitive];
				if (d !== void 0) {
					var o = d.call(c, i || "default");
					if (typeof o != "object") return o;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}
			const s = "TURNSTILE";
			let m = function(c) {
				return c.OVERVIEW_PAGE = "view the overview page", c.LIST_OF_WIDGETS = "list of widgets", c.SOLVE_EVENTS = "list solve events", c.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", c.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", c.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", c.OPEN_DELETE_MODAL = "view the delete modal for one widget", c.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", c.DELETE_WIDGET = "delete successfully widgets", c.LIST_OF_HOSTNAMES = "list hostnames", c.OPEN_ADD_WIDGET_PAGE = "view page to add widget", c.FEEDBACK_ADD = "view Feedback Add", c.SAVE_WIDGET = "save widget", c.ROTATE_KEYS = "rotate keys", c.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", c.GET_WIDGETS = "get widget details", c.OPEN_ANALYTICS_PAGE = "view analytics page", c.ANALYTICS_DATA = "list the analytics data", c
			}({});
			const v = ({
					name: c,
					product: i = s,
					category: d = "user journey",
					page: o,
					additionalData: g = {}
				}) => {
					r().sendEvent(c, a({
						category: d,
						page: o,
						product: i
					}, g || {}))
				},
				n = () => {
					var c;
					return (c = Object.values(m)) === null || c === void 0 ? void 0 : c.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				E: function() {
					return m
				},
				Ky: function() {
					return v
				},
				RJ: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						d = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(i).filter(function(o) {
						return Object.getOwnPropertyDescriptor(i, o).enumerable
					})), d.forEach(function(o) {
						u(n, o, i[o])
					})
				}
				return n
			}

			function u(n, c, i) {
				return c = l(c), c in n ? Object.defineProperty(n, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[c] = i, n
			}

			function l(n) {
				var c = f(n, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(n, c) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var d = i.call(n, c || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.BACK_BUTTON = "clicked back from user group detail", n.ADD_MEMBER_BUTTON = "click add member button", n.MEMBER_ADD = "add user group member", n.MEMBER_DETAIL_MENU = "click user group member detail menu", n.MEMBER_DETAIL_VIEW = "click view in user group member detail menu", n.MEMBER_DETAIL_EDIT = "click edit in user group member detail menu", n.MEMBER_DETAIL_DELETE = "click delete in user group member detail menu", n.MEMBER_DELETE = "delete user group member", n.MEMBER_DETAIL_DELETE_CANCEL = "click cancel delete user group member", n.ADD_POLICY_BUTTON = "click add user group policy button", n
			}({});
			const m = ({
					name: n,
					additionalData: c = {}
				}) => {
					r().sendEvent(n, a({}, c || {}))
				},
				v = () => {
					var n;
					return (n = Object.values(s)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				d: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
				default: (0, e.BC)`/${"accountId"}/`,
				home: (0, e.BC)`/${"accountId"}/home`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`,
				websites: (0, e.BC)`/${"accountId"}/websites`
			}
		},
		"../react/pages/zone-versioning/selectors.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				$e: function() {
					return S
				},
				$h: function() {
					return y
				},
				G: function() {
					return b
				},
				M3: function() {
					return N
				},
				Tr: function() {
					return D
				},
				UY: function() {
					return g
				},
				bH: function() {
					return c
				},
				fv: function() {
					return w
				},
				hF: function() {
					return A
				},
				iw: function() {
					return d
				},
				m7: function() {
					return n
				},
				re: function() {
					return E
				},
				tp: function() {
					return o
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				r = t("../../../../node_modules/reselect/lib/index.js"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/SidebarNav/permissions.ts"),
				l = t("../react/common/selectors/entitlementsSelectors.ts");

			function f(C) {
				for (var P = 1; P < arguments.length; P++) {
					var L = arguments[P] != null ? Object(arguments[P]) : {},
						j = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(L).filter(function(X) {
						return Object.getOwnPropertyDescriptor(L, X).enumerable
					})), j.forEach(function(X) {
						s(C, X, L[X])
					})
				}
				return C
			}

			function s(C, P, L) {
				return P = m(P), P in C ? Object.defineProperty(C, P, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[P] = L, C
			}

			function m(C) {
				var P = v(C, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function v(C, P) {
				if (typeof C != "object" || C === null) return C;
				var L = C[Symbol.toPrimitive];
				if (L !== void 0) {
					var j = L.call(C, P || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(C)
			}
			const n = C => (0, a.nA)(C) ? (0, l.p1)(C) && (0, u.$n)(C, "zone_versioning", "versioning") : !1,
				c = C => C.zoneVersioning.zoneApplications,
				i = (0, e.P1)("zoneApplications", c),
				d = C => C.zoneVersioning.zoneVersions,
				o = (0, e.P1)("zoneVersions", d),
				g = (0, r.P1)(o, C => {
					if (C) return C.filter(P => P.status == "V")
				}),
				I = C => C.zoneVersioning.environments,
				D = C => C.zoneVersioning.environments.isRequesting,
				O = (0, e.P1)("environments", I),
				y = (0, r.P1)(i, C => {
					if (C) {
						if (C.length === 1) return C[0];
						C.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${C.length}`))
					}
					return null
				}),
				A = (0, r.P1)(O, C => C ? C.environments : []),
				E = C => {
					var P;
					return (P = C.zoneVersioning) === null || P === void 0 ? void 0 : P.zoneVersionSelector
				},
				b = (0, r.P1)(E, o, (C, P) => {
					if (!(C == null ? void 0 : C.isVersion) || !P) return null;
					const L = P.find(j => {
						if (j.version === C.selectedVersion && j.locked) return !0
					});
					return L ? f({}, L, {
						isLocked: !0
					}) : null
				}),
				S = (0, r.P1)(o, A, (C, P) => !P || !C ? [] : C.map(L => {
					const j = [];
					for (const X in P) P[X].version === L.version && j.push(P[X]);
					return f({}, L, {
						environments: j
					})
				})),
				k = C => C.zoneVersioning.WAFMigrationStatus,
				N = (0, e.P1)("WAFMigrationStatus", k),
				w = C => C.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				$2: function() {
					return k
				},
				CI: function() {
					return b
				},
				IS: function() {
					return s
				},
				L7: function() {
					return l
				},
				Lt: function() {
					return o
				},
				Oj: function() {
					return i
				},
				QV: function() {
					return g
				},
				S6: function() {
					return N
				},
				X$: function() {
					return A
				},
				X6: function() {
					return v
				},
				d4: function() {
					return d
				},
				fE: function() {
					return m
				},
				im: function() {
					return O
				},
				lv: function() {
					return I
				},
				rL: function() {
					return n
				},
				wW: function() {
					return f
				}
			});

			function e(w) {
				for (var C = 1; C < arguments.length; C++) {
					var P = arguments[C] != null ? Object(arguments[C]) : {},
						L = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(P).filter(function(j) {
						return Object.getOwnPropertyDescriptor(P, j).enumerable
					})), L.forEach(function(j) {
						r(w, j, P[j])
					})
				}
				return w
			}

			function r(w, C, P) {
				return C = a(C), C in w ? Object.defineProperty(w, C, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[C] = P, w
			}

			function a(w) {
				var C = u(w, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function u(w, C) {
				if (typeof w != "object" || w === null) return w;
				var P = w[Symbol.toPrimitive];
				if (P !== void 0) {
					var L = P.call(w, C || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(w)
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
				f = 800,
				s = "40rem",
				m = {
					pricing: {
						requests: .15,
						duration: 12.5,
						bytes_stored: .2,
						rows_read: .001,
						rows_written: 1
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
				c = {
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
					}, c),
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
				o = {
					free: {
						minutes: 3e3
					},
					paid: {
						minutes: 6e3
					}
				},
				g = {
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
					clickElement: "click element",
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
					clickedImportRepository: "clicked import repository",
					clickedListTemplates: "clicked list workers templates",
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
				I = {
					insufficientData: "insufficient data to create/update trigger",
					createRepoConnectionError: "error creating repo connection",
					createTokenError: "error creating token",
					createUpdateTriggerError: "error creating/updating trigger",
					updateEnvironmentVariablesError: "error updating trigger environment variables",
					createWorkerError: "error creating worker",
					buildWorkerError: "error building worker",
					refreshWebhookError: "error refreshing gitlab webhook"
				},
				D = "workers.dev",
				O = "YYYY-MM-DD HH:mm:SS ZZ",
				y = "active",
				A = ["bundled", "unbound", "standard"],
				E = null,
				b = {
					observability: "workers-observability",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let S = function(w) {
				return w[w.NONE = 0] = "NONE", w[w.MISS = 1] = "MISS", w[w.EXPIRED = 2] = "EXPIRED", w[w.UPDATING = 3] = "UPDATING", w[w.STALE = 4] = "STALE", w[w.HIT = 5] = "HIT", w[w.IGNORED = 6] = "IGNORED", w[w.BYPASS = 7] = "BYPASS", w[w.REVALIDATED = 8] = "REVALIDATED", w[w.DYNAMIC = 9] = "DYNAMIC", w[w.STREAM_HIT = 10] = "STREAM_HIT", w[w.DEFERRED = 11] = "DEFERRED", w
			}({});
			const k = [S.HIT, S.STREAM_HIT];
			let N = function(w) {
				return w.SECRETS_STORE_ID = "store_id", w.SECRET_NAME = "secret_name", w
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Hv: function() {
					return s
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
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = m => `${m}.workers.dev`,
				a = (m, v, n) => `${n?`${n}.`:""}${m}.${r(v)}`,
				u = (m, v, n) => `https://${a(m,v,n)}`,
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
					serviceDetailsBindings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/bindings`,
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
					analyticsEngineStudio: (0, e.BC)`/${"accountId"}/workers/analytics-engine/studio`,
					emailRouting: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes`,
					emailRoutingRule: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes/${"ruleId"}`,
					zones: (0, e.BC)`/${"accountId"}`,
					developerPlatform_workers_create: (0, e.BC)`/${"accountId"}/developer-platform/workers/onboarding`,
					developerPlatform_workers_success: (0, e.BC)`/${"accountId"}/developer-platform/workers/success`,
					logpush: (0, e.BC)`/${"accountId"}/logs`,
					members: (0, e.BC)`/${"accountId"}/members`,
					workflowDetails: (0, e.BC)`/${"accountId"}/workers/workflows/${"workflowName"}`
				},
				f = "https://cron-triggers.cloudflareworkers.com",
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
						refreshWebhook: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos/${"repo"}/webhooks/refresh`,
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
							values: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/values`,
							getParameters: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/parameters/${"generationId"}`,
							generateParameters: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/parameters`
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
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
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const a = async ([s, m]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: s,
					variables: m
				})
			})).body, u = async (...s) => (await e.get(...s)).body, l = s => async (m, v) => {
				const n = await fetch(m, v).then(c => c.json());
				return s.assertDecode(n)
			}, f = async (...s) => (await u(...s)).result;
			_.ZP = {
				fetcher: s => Array.isArray(s) ? f(...s) : f(s)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(U, _) {
				_()
			})(this, function() {
				"use strict";

				function U() {
					var t = !0,
						e = !1,
						r = null,
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

					function u(I) {
						return !!(I && I !== document && I.nodeName !== "HTML" && I.nodeName !== "BODY" && "classList" in I && "contains" in I.classList)
					}

					function l(I) {
						var D = I.type,
							O = I.tagName;
						return !!(O == "INPUT" && a[D] && !I.readOnly || O == "TEXTAREA" && !I.readOnly || I.isContentEditable)
					}

					function f(I) {
						I.getAttribute("is-focus-visible") !== "" && I.setAttribute("is-focus-visible", "")
					}

					function s(I) {
						I.getAttribute("is-focus-visible") === "" && I.removeAttribute("is-focus-visible")
					}

					function m(I) {
						u(document.activeElement) && f(document.activeElement), t = !0
					}

					function v(I) {
						t = !1
					}

					function n(I) {
						!u(I.target) || (t || l(I.target)) && f(I.target)
					}

					function c(I) {
						!u(I.target) || I.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), s(I.target))
					}

					function i(I) {
						document.visibilityState == "hidden" && (e && (t = !0), d())
					}

					function d() {
						document.addEventListener("mousemove", g), document.addEventListener("mousedown", g), document.addEventListener("mouseup", g), document.addEventListener("pointermove", g), document.addEventListener("pointerdown", g), document.addEventListener("pointerup", g), document.addEventListener("touchmove", g), document.addEventListener("touchstart", g), document.addEventListener("touchend", g)
					}

					function o() {
						document.removeEventListener("mousemove", g), document.removeEventListener("mousedown", g), document.removeEventListener("mouseup", g), document.removeEventListener("pointermove", g), document.removeEventListener("pointerdown", g), document.removeEventListener("pointerup", g), document.removeEventListener("touchmove", g), document.removeEventListener("touchstart", g), document.removeEventListener("touchend", g)
					}

					function g(I) {
						I.target.nodeName.toLowerCase() !== "html" && (t = !1, o())
					}
					document.addEventListener("keydown", m, !0), document.addEventListener("mousedown", v, !0), document.addEventListener("pointerdown", v, !0), document.addEventListener("touchstart", v, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", c, !0), document.addEventListener("visibilitychange", i, !0), d(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function _(t) {
					var e;

					function r() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}
				typeof document != "undefined" && _(U)
			})
		},
		"../react/utils/bootstrap.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				$8: function() {
					return r
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
					var l, f, s;
					return (l = window) === null || l === void 0 || (f = l.bootstrap) === null || f === void 0 || (s = f.data) === null || s === void 0 ? void 0 : s.security_token
				},
				r = () => {
					var l, f, s;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (f = l.data) === null || f === void 0 || (s = f.user) === null || s === void 0 ? void 0 : s.id)
				},
				a = () => {
					var l, f;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (f = l.data) === null || f === void 0 ? void 0 : f.is_kendo)
				},
				u = () => {
					var l, f, s, m;
					return (l = window) === null || l === void 0 || (f = l.bootstrap) === null || f === void 0 || (s = f.data) === null || s === void 0 || (m = s.user) === null || m === void 0 ? void 0 : m.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				O5: function() {
					return u
				},
				Xm: function() {
					return a
				},
				kT: function() {
					return s
				},
				wV: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				a = () => (r() || "").indexOf("C0002") !== -1,
				u = () => (r() || "").indexOf("C0003") !== -1,
				l = () => (r() || "").indexOf("C0004") !== -1,
				f = () => (r() || "").indexOf("C0005") !== -1,
				s = n => {
					const c = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${c}`
				},
				m = () => {
					var n;
					const c = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (c == null ? void 0 : c.country) || ""
				},
				v = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				AI: function() {
					return A
				},
				Kd: function() {
					return c
				},
				S8: function() {
					return y
				},
				ZW: function() {
					return m
				},
				ay: function() {
					return E
				},
				fh: function() {
					return b
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
					return o
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				a = t("../../../common/intl/intl-types/src/index.ts"),
				u = t("../../../common/util/types/src/utils/index.ts"),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f = t("../../../../node_modules/cookie/index.js");
			const s = "cf-sync-locale-with-cps",
				m = a.Q.en_US,
				v = "en_US",
				n = "cf-locale";

			function c() {
				const N = (0, f.parse)(document.cookie);
				return l.Z.get(n) || N[n] || null
			}

			function i(N) {
				document.cookie = (0, f.serialize)(n, N, {
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
			const o = N => (0, u.Yd)(a.Q).find(w => a.Q[w] === N) || v,
				g = [],
				I = [],
				D = [a.Q.de_DE, a.Q.en_US, a.Q.es_ES, a.Q.fr_FR, a.Q.it_IT, a.Q.pt_BR, a.Q.ko_KR, a.Q.ja_JP, a.Q.zh_CN, a.Q.zh_TW],
				O = {
					test: [...D, ...I, ...g],
					development: [...D, ...I, ...g],
					staging: [...D, ...I, ...g],
					production: [...D, ...I]
				},
				y = N => {
					const w = a.Q[N];
					return O.production.includes(w)
				},
				A = () => Object.keys(a.Q).filter(N => y(N)),
				E = N => {
					const w = a.Q[N];
					return I.includes(w)
				},
				b = N => S[N],
				S = {
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
				k = r().locale();
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
			}), r().locale(k)
		},
		"../react/utils/translator.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				QT: function() {
					return o
				},
				Vb: function() {
					return m
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return s
				},
				_m: function() {
					return c
				},
				cC: function() {
					return i
				},
				oc: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = t("../../../common/intl/intl-core/src/Translator.ts"),
				a = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				u = t.n(a),
				l = t("../flags.ts");
			const f = new r.Z({
				pseudoLoc: (0, l.J8)("is_pseudo_loc")
			});

			function s(g, ...I) {
				return f.t(g, ...I)
			}
			const m = f;

			function v(g, ...I) {
				return markdown(s(g, I))
			}

			function n(g) {
				if (Number(g) !== 0) {
					if (g % 86400 == 0) return s("time.num_days", {
						smart_count: g / 86400
					});
					if (g % 3600 == 0) return s("time.num_hours", {
						smart_count: g / 3600
					});
					if (g % 60 == 0) return s("time.num_minutes", {
						smart_count: g / 60
					})
				}
				return s("time.num_seconds", {
					smart_count: g
				})
			}

			function c(g, I) {
				return g in I ? I[g] : void 0
			}
			const i = a.Trans,
				d = a.I18n,
				o = a.useI18n
		},
		"../react/utils/url.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Ct: function() {
					return k
				},
				Fl: function() {
					return ee
				},
				KT: function() {
					return Y
				},
				NF: function() {
					return y
				},
				Nw: function() {
					return b
				},
				Pd: function() {
					return E
				},
				Uh: function() {
					return M
				},
				cm: function() {
					return I
				},
				e1: function() {
					return S
				},
				el: function() {
					return oe
				},
				hW: function() {
					return ce
				},
				pu: function() {
					return ne
				},
				qR: function() {
					return X
				},
				td: function() {
					return A
				},
				uW: function() {
					return G
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				u = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/r2/routes.ts"),
				f = t("../react/pages/zoneless-workers/routes.ts"),
				s = t("../react/pages/pages/routes.ts"),
				m = t("../react/pages/d1/routes.ts"),
				v = t("../react/pages/images/routes.ts");

			function n(B) {
				for (var z = 1; z < arguments.length; z++) {
					var te = arguments[z] != null ? Object(arguments[z]) : {},
						le = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(te).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(te, ue).enumerable
					})), le.forEach(function(ue) {
						c(B, ue, te[ue])
					})
				}
				return B
			}

			function c(B, z, te) {
				return z = i(z), z in B ? Object.defineProperty(B, z, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[z] = te, B
			}

			function i(B) {
				var z = d(B, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function d(B, z) {
				if (typeof B != "object" || B === null) return B;
				var te = B[Symbol.toPrimitive];
				if (te !== void 0) {
					var le = te.call(B, z || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(B)
			}
			const {
				endsWithSlash: o
			} = a.default, g = new RegExp(/([0-9a-z]{32})/g), I = B => B == null ? void 0 : B.replace(g, ":id"), D = (B, z) => {
				const te = B.replace(o, "").split("/");
				return te.slice(0, 2).concat([z]).concat(te.slice(3)).join("/")
			}, O = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), y = B => `/${B.replace(o,"").replace(/^\//,"")}`, A = B => b("add-site", B), E = B => b("billing", B), b = (B, z) => z ? `/${z}${B?`/${B}`:""}` : `/?to=/:account/${B}`, S = () => {
				const B = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return B ? B[1] : null
			}, k = (B, z) => r().stringify(n({}, r().parse(B), z)), N = (B = "") => B.toString().replace(/([\/]{1,})$/, ""), w = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], C = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, P = /^\/(\w{32,})(\/[^.]*)?/, L = B => w.includes(B), j = B => !L(B), X = B => !L(B) && P.test(B), oe = B => !L(B) && C.test(B), pe = B => C.exec(B), ce = B => {
				if (oe(B)) return B.split("/").filter(z => z.length > 0)[1]
			}, K = B => P.exec(B), G = B => {
				if (X(B)) {
					const z = K(B);
					if (z) return z[1]
				}
			}, W = B => X(B) && B.split("/")[2] === "register-domain", x = B => W(B) ? B.split("/") : null, h = B => {
				if (oe(B)) {
					const [, , , z, te, le, ue, ge] = B.split("/");
					return z === "traffic" && te === "load-balancing" && le === "pools" && ue === "edit" && ge
				}
			}, M = B => {
				const z = x(B);
				if (z) return z[3]
			}, F = (B, z) => {
				var te, le;
				return ((te = B.pattern.match(/\:/g)) !== null && te !== void 0 ? te : []).length - ((le = z.pattern.match(/\:/g)) !== null && le !== void 0 ? le : []).length
			}, q = [...Object.values(u.C), ...Object.values(v.KJ), ...Object.values(l._j), ...Object.values(f._j), ...Object.values(s._j), ...Object.values(m._)].sort(F);

			function ee(B) {
				if (!j(B)) return B;
				for (const ge of q)
					if (ge.expression.test(B)) return ge.pattern;
				const z = x(B);
				if (z) {
					const [, , ge, , ...ye] = z;
					return `/:accountId/${ge}/:domainName/${ye.join("/")}`
				}
				if (h(B)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const le = pe(B);
				if (le) {
					const [, , , , ge] = le;
					return `/:accountId/:zoneName${ge||""}`
				}
				const ue = K(B);
				if (ue) {
					const [, , ge] = ue;
					return `/:accountId${ge||""}`
				}
				return B
			}

			function ne(B) {
				if (!!B) try {
					const te = B.split(".").pop();
					if (te && te.length > 0) return te
				} catch {}
			}

			function Y(B, z = document.location.href) {
				try {
					const te = new URL(B),
						le = new URL(z);
					if (te.origin === le.origin) return `${te.pathname}${te.search}${te.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				r: function() {
					return s
				},
				y: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(u);
			const f = /^\/domainconnect\/v2\/domaintemplates\//i,
				s = "domain-connect-redirect",
				m = () => {
					const v = (0, u.useLocation)();
					(0, e.useEffect)(() => {
						f.test(v.pathname) && a.Z.set(s, v, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = t("../utils/zaraz.ts")
		},
		"../react/utils/zoneLevelAccess.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				P: function() {
					return u
				},
				b: function() {
					return l
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				r = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function a() {
				var f, s, m, v, n, c;
				return (f = window) === null || f === void 0 || (s = f.bootstrap) === null || s === void 0 || (m = s.data) === null || m === void 0 || (v = m.user) === null || v === void 0 || (n = v.betas) === null || n === void 0 || (c = n.some) === null || c === void 0 ? void 0 : c.call(n, i => i === "zone_level_access_beta")
			}

			function u() {
				const f = !!(0, e.Z)("zone-level-access");
				return a() || f
			}

			function l(f) {
				const s = !!(0, r.z1)("zone-level-access")(f);
				return a() || s
			}
		},
		"../utils/getDashVersion.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				p: function() {
					return a
				},
				t: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var u, l;
					return (u = window) === null || u === void 0 || (l = u.build) === null || l === void 0 ? void 0 : l.dashVersion
				},
				a = () => {
					var u;
					return ((0, e.parse)((u = document) === null || u === void 0 ? void 0 : u.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Wi: function() {
					return wt
				},
				IM: function() {
					return Nt
				},
				yV: function() {
					return Mt
				},
				Ug: function() {
					return $t
				},
				v_: function() {
					return gt
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../react/utils/bootstrap.ts"),
				u = t("../react/app/providers/storeContainer.js"),
				l = t("../react/common/selectors/languagePreferenceSelector.ts"),
				f = t("../flags.ts"),
				s = t("../../../../node_modules/cookie/index.js"),
				m = t("../react/utils/url.ts"),
				v = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				c = t("../../../../node_modules/lodash-es/memoize.js"),
				i = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				d = t("../utils/getDashVersion.ts"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				g = t("../react/common/selectors/entitlementsSelectors.ts");

			function I(ie) {
				for (var re = 1; re < arguments.length; re++) {
					var p = arguments[re] != null ? Object(arguments[re]) : {},
						T = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(p).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(p, Q).enumerable
					})), T.forEach(function(Q) {
						D(ie, Q, p[Q])
					})
				}
				return ie
			}

			function D(ie, re, p) {
				return re = O(re), re in ie ? Object.defineProperty(ie, re, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ie[re] = p, ie
			}

			function O(ie) {
				var re = y(ie, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function y(ie, re) {
				if (typeof ie != "object" || ie === null) return ie;
				var p = ie[Symbol.toPrimitive];
				if (p !== void 0) {
					var T = p.call(ie, re || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(ie)
			}
			const A = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				E = (0, c.Z)(ie => {
					try {
						return A.assertDecode((0, s.parse)(ie))
					} catch (re) {
						return console.error(re), {}
					}
				}),
				b = ie => (re, p, T) => {
					try {
						const Ke = window.location.pathname,
							Ge = (0, u.bh)().getState(),
							et = E(document.cookie),
							ut = I({
								page: (0, m.Fl)(T.page || window.location.pathname),
								dashVersion: (0, d.t)()
							}, et);
						if (re === "identify") {
							var Q, _e;
							const Je = {
								gates: (0, i.T2)(Ge) || {},
								country: (Q = t.g) === null || Q === void 0 || (_e = Q.bootstrap) === null || _e === void 0 ? void 0 : _e.ip_country
							};
							return ie(re, p, I({}, ut, Je, T))
						} else {
							const Je = {
								accountId: (0, m.uW)(Ke),
								zoneName: (0, m.hW)(Ke),
								domainName: (0, m.Uh)(Ke)
							};
							if ((0, m.qR)(Ke)) {
								var ke;
								const Ve = (0, o.D0)(Ge);
								Je.isEntAccount = !!(Ve == null || (ke = Ve.meta) === null || ke === void 0 ? void 0 : ke.has_enterprise_zones) || (0, g.p1)(Ge)
							}
							if ((0, m.el)(Ke)) {
								var je;
								const Ve = (0, v.nA)(Ge);
								Je.zoneId = Ve == null ? void 0 : Ve.id, Je.plan = Ve == null || (je = Ve.plan) === null || je === void 0 ? void 0 : je.legacy_id
							}
							return ie(re, p, I({}, ut, Je, T))
						}
					} catch (Ke) {
						return console.error(Ke), ie(re, p, T)
					}
				},
				S = ie => async (re, p, T) => {
					try {
						return await ie(re, p, T)
					} catch (Q) {
						if (console.error(Q), !gt()) throw Q;
						return {
							status: "rejected",
							reason: Q
						}
					}
				};
			var k = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				N = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				w = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				C = t("../react/common/middleware/sparrow/errors.ts"),
				P = t("../react/pages/caching/tracking.tsx"),
				L = t("../react/pages/home/domain-registration/tracking.ts"),
				j = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				X = t("../react/pages/hyperdrive/tracking.ts"),
				oe = t("../react/pages/magic/overview/tracking.ts"),
				pe = t("../react/pages/magic/packet-captures/constants.ts"),
				ce = t("../react/pages/page-rules/tracking.ts"),
				K = t("../react/pages/pages/constants.ts"),
				G = t("../react/pages/pipelines/tracking.ts"),
				W = t("../react/pages/security-center/BlockedContent/constants.ts"),
				x = t("../react/pages/security-center/tracking.ts"),
				h = t("../react/pages/security/api-shield/tracking.ts"),
				M = t("../react/pages/security/bots/tracking.ts"),
				F = t("../react/pages/security/resources/constants.tsx"),
				q = t("../react/pages/security/page-shield/resources/index.ts"),
				ee = t("../react/pages/home/configurations/lists/tracking.ts"),
				ne = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				Y = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				B = t("../react/pages/home/alerts/tracking.ts"),
				z = t("../react/pages/dns/dns-records/tracking.ts"),
				te = t("../react/pages/magic/network-monitoring/constants.ts"),
				le = t("../react/pages/security/settings/index.tsx"),
				ue = t("../react/pages/shared-config/sparrowEvents.tsx"),
				ge = t("../react/pages/spectrum/tracking.tsx"),
				ye = t("../react/pages/traffic/argo/tracking.ts"),
				Te = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Oe = t("../react/pages/turnstile/tracking.ts"),
				ve = t("../react/pages/zoneless-workers/constants.ts"),
				De = t("../react/app/components/AccountHome/tracking.ts"),
				Me = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				Ne = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				pt = t("../react/pages/user-groups/sparrowEvents.ts"),
				Qe = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				V = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				fe = t("../react/pages/security/overview/resources/constants.ts"),
				Se = t("../react/pages/security/analytics/security-analytics/resources/constants.ts"),
				Ye = t("../react/pages/secrets-store/resources/constants.ts"),
				Be = t("../react/pages/profile/tracking.ts");
			const rt = ((ie, re, ...p) => n.eg.union([n.eg.literal(ie), n.eg.literal(re), ...p.map(T => n.eg.literal(T))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", De.gX.SPARROW_PROJECTS_TABLE_CLICK, De.gX.SPARROW_EMPTY_STATE_CTA_CLICK, De.gX.SPARROW_PRODUCT_CARD_CLICK, De.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, De.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, De.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, De.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, De.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, De.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, De.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", ve.QV.clickedDownloadAnalytics, ve.QV.clickedPrintAnalytics, ve.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", ve.QV.addWCITriggerToExistingWorker, ve.QV.updateWCITrigger, ve.QV.deleteWCITrigger, ve.QV.addWCITriggerToNewWorker, ve.QV.createWCIBuildForNewWorker, ve.QV.completedWCIBuildForNewWorker, ve.QV.changedDefaultConfigurations, ve.QV.clickElement, K.QV.toggledPagesSmartPlacement, K.QV.downloadDemoProject, ve.QV.clickCreateWorkerFromRepoNextStep, ve.QV.clickCreateWorkerFromRepoPreviousStep, ve.QV.clickCreateNewSCMConnection, ve.QV.redirectFromSCMOAuth, ve.QV.clickSubmitError, ve.QV.selectTemplate, ve.QV.clickedListTemplates, ve.QV.clickedImportRepository, ve.QV.templateStubWorkerCreated, ve.QV.templateStubWorkerCreationFailed, ve.QV.templateRepositoryCreated, ve.QV.templateRepositoryCreationFailed, ve.QV.copyTemplateC3Command, ve.QV.templateDeployClick, ve.QV.reauthenticateGithubModalShown, ve.QV.updateGithubPermissionsClicked, ve.QV.D2W_importRepository, ve.QV.D2W_stubWorkerCreated, ve.QV.D2W_stubWorkerCreationFailed, ve.QV.D2W_repositoryCreated, ve.QV.D2W_repositoryCreationFailed, ve.QV.D2W_resourcesProvisioned, ve.QV.D2W_resourceProvisioningFailed, ve.QV.D2W_githubAPIRateLimitReached, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", M.N3.INITIAL_FETCH_SCORES, M.N3.FETCH_CONFIGURATION, M.N3.INITIAL_FETCH_TIME_SERIES, M.N3.INITIAL_FETCH_ATTRIBUTES, M.N3.UPDATE_SETTINGS, M.N3.DELETE_RULE, M.N3.UPDATE_RULE, M.N3.FETCH_RULES, M.N3.CONFIGURE_BOT_MANAGEMENT, M.N3.WAF_RULES_REDIRECT, j.F.TOGGLE_TCP_PROTECTION, j.F.GET_TCP_PROTECTION_PREFIXES, j.F.CREATE_TCP_PROTECTION_PREFIXES, j.F.CREATE_TCP_PROTECTION_PREFIX, j.F.UPDATE_TCP_PROTECTION_PREFIX, j.F.DELETE_TCP_PROTECTION_PREFIX, j.F.DELETE_TCP_PROTECTION_PREFIXES, j.F.GET_TCP_PROTECTION_ALLOWLIST, j.F.CREATE_TCP_PROTECTION_ALLOWLIST, j.F.UPDATE_TCP_PROTECTION_ALLOWLIST, j.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, j.F.DELETE_TCP_PROTECTION_ALLOWLIST, j.F.GET_SYN_PROTECTION_RULES, j.F.GET_SYN_PROTECTION_RULE, j.F.CREATE_SYN_PROTECTION_RULE, j.F.UPDATE_SYN_PROTECTION_RULE, j.F.DELETE_SYN_PROTECTION_RULE, j.F.GET_TCP_FLOW_PROTECTION_RULES, j.F.GET_TCP_FLOW_PROTECTION_RULE, j.F.CREATE_TCP_FLOW_PROTECTION_RULE, j.F.UPDATE_TCP_FLOW_PROTECTION_RULE, j.F.DELETE_TCP_FLOW_PROTECTION_RULE, j.F.GET_SYN_PROTECTION_FILTERS, j.F.GET_SYN_PROTECTION_FILTER, j.F.CREATE_SYN_PROTECTION_FILTER, j.F.UPDATE_SYN_PROTECTION_FILTER, j.F.DELETE_SYN_PROTECTION_FILTER, j.F.GET_TCP_FLOW_PROTECTION_FILTERS, j.F.GET_TCP_FLOW_PROTECTION_FILTER, j.F.CREATE_TCP_FLOW_PROTECTION_FILTER, j.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, j.F.DELETE_TCP_FLOW_PROTECTION_FILTER, j.F.GET_DNS_PROTECTION_RULES, j.F.GET_DNS_PROTECTION_RULE, j.F.CREATE_DNS_PROTECTION_RULE, j.F.UPDATE_DNS_PROTECTION_RULE, j.F.DELETE_DNS_PROTECTION_RULE, q.FV.MANAGE_PAGE_SHIELD_POLICY, q.FV.CONFIGURE_PAGE_SHIELD, q.FV.VIEW_DETECTED_CONNECTIONS, q.FV.VIEW_DETECTED_SCRIPTS, q.FV.VIEW_PAGE_SHIELD_POLICIES, q.FV.VIEW_PAGE_SHIELD_SETTINGS, q.FV.OPEN_MUTABLE_VERSION_TOOLTIP, q.FV.SHOW_MUTABLE_VERSION_TOOLTIP, ee.y.CREATE_LIST, ee.y.DELETE_LIST, ee.y.ADD_LIST_ITEM, ee.y.DELETE_LIST_ITEM, X.KO.PURCHASE_WORKERS_PAID, X.KO.LIST_CONFIGS, X.KO.SEARCH_CONFIGS, X.KO.CREATE_HYPERDRIVE_CONFIG, X.KO.VIEW_CONFIG_DETAILS, X.KO.UPDATE_CACHING_SETTINGS, X.KO.DELETE_HYPERDRIVE_CONFIG, X.KO.CLICK_HYPERDRIVE_DOCUMENTATION, X.KO.CLICK_GET_STARTED_GUIDE, X.KO.CLICK_CONNECTIVITY_GUIDES, X.KO.CLICK_QUICK_LINK, X.KO.CLICK_DISCORD, X.KO.CLICK_COMMUNITY, ge.N.CNAME, ge.N.IP_ADDRESS, ge.N.LB, ge.N.UPDATE_CNAME, ge.N.UPDATE_IP_ADDRESS, ge.N.UPDATE_LB, ge.N.DISABLE, P.N.TIERED_CACHE, P.N.CACHE_PURGE, P.N.CACHE_ANALYTICS, ...(0, Oe.P)(), ...(0, w.x4)(), ...(0, le.m8)(), ...(0, pt.Ky)(), ...(0, Qe.Cf)(), Te.N.CREATE, Te.N.EVENTS, Te.N.ANALYTICS, Te.N.UPDATE, Te.N.GENERATE_PREVIEW, x.RY.INITIATE_URL_SCAN, x.RY.LOAD_SCAN_INFO, x.Ev.LOAD_THREAT_EVENTS, x.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, x.Ev.THREAT_EVENTS_FILTERS, x.Ev.ABUSE_REPORT_BUTTON_CLICK, x.Ev.ABUSE_REPORT_SUBMIT_CLICK, x.Ev.ABUSE_REPORT_SUBMIT_FAILED, x.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, x.v9.EXPAND_INSIGHT_ROW, x.v9.ONE_CLICK_RESOLVE_BUTTON, x.v9.FOLLOW_RESOLVE_URL, x.v9.MANAGE_INSIGHT, x.v9.CLICK_SCAN_NOW, x.v9.CLICK_EXPORT_INSIGHTS, x.v9.BULK_ARCHIVE, x.v9.CLICK_DETAILS_BUTTON, h.Fj[h.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, h.Fj[h.kq.ENDPOINT_MANAGEMENT].detailedMetrics, h.Fj[h.kq.ENDPOINT_MANAGEMENT].createEndpoint, h.Fj[h.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, h.Fj[h.kq.ENDPOINT_MANAGEMENT].deployRouting, h.Fj[h.kq.ENDPOINT_MANAGEMENT].deleteRouting, h.Fj[h.kq.API_DISCOVERY].viewDiscoveredEndpoints, h.Fj[h.kq.API_DISCOVERY].saveDiscoveredEndpoint, h.Fj[h.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, h.Fj[h.kq.SCHEMA_VALIDATION].viewSchemasList, h.Fj[h.kq.SCHEMA_VALIDATION].uploadSchema, h.Fj[h.kq.SCHEMA_VALIDATION].viewSchemaAdoption, h.Fj[h.kq.SCHEMA_VALIDATION].downloadSchema, h.Fj[h.kq.SCHEMA_VALIDATION].deleteSchema, h.Fj[h.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, h.Fj[h.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, h.Fj[h.kq.SEQUENCE_ANALYTICS].viewSequencesPage, h.Fj[h.kq.JWT_VALIDATION].viewJWTRules, h.Fj[h.kq.JWT_VALIDATION].addJWTRule, h.Fj[h.kq.JWT_VALIDATION].editJWTRule, h.Fj[h.kq.JWT_VALIDATION].deleteJWTRule, h.Fj[h.kq.JWT_VALIDATION].reprioritizeJWTRule, h.Fj[h.kq.JWT_VALIDATION].viewJWTConfigs, h.Fj[h.kq.JWT_VALIDATION].addJWTConfig, h.Fj[h.kq.JWT_VALIDATION].editJWTConfig, h.Fj[h.kq.JWT_VALIDATION].deleteJWTConfig, h.Fj[h.kq.SETTINGS].redirectToFirewallRulesTemplate, h.Fj[h.kq.SETTINGS].redirectToPages, h.Fj[h.kq.SETTINGS].listSessionIdentifiers, h.Fj[h.kq.SETTINGS].listRequestsContainingSessionIdentifiers, h.Fj[h.kq.SETTINGS].addOrRemoveSessionIdentifiers, h.Fj[h.kq.SETTINGS].redirectToCustomRules, h.Fj[h.kq.SETTINGS].listAllFallthroughSchemas, h.Fj[h.kq.SEQUENCE_RULES].listSequenceRules, h.Fj[h.kq.SEQUENCE_RULES].deleteSequenceRule, h.Fj[h.kq.SEQUENCE_RULES].reorderSequenceRule, h.Fj[h.kq.SEQUENCE_RULES].createSequenceRule, h.Fj[h.kq.SEQUENCE_RULES].editSequenceRule, ne.Z.ANALYTICS, ne.Z.CREATE_AND_DEPLOY, ne.Z.CREATE_MONITOR_LINK, ne.Z.CREATE_MONITOR, ne.Z.CREATE_POOL_LINK, ne.Z.CREATE_POOL, ne.Z.EDIT_MONITOR, ne.Z.EDIT_POOL, ne.Z.LOAD_BALANCING_TABLE, ne.Z.POOL_TABLE, ne.Z.EDIT_MONITOR_LINK, ne.Z.EDIT_POOL_LINK, ...Y.eT, B.y.SECONDARY_DNS_NOTIFICATION_CREATE, B.y.SECONDARY_DNS_NOTIFICATION_UPDATE, B.y.SECONDARY_DNS_NOTIFICATION_DELETE, z.U.ZONE_TRANSFER_SUCCESS, z.U.DNS_RECORD_CREATE, z.U.DNS_RECORD_UPDATE, z.U.DNS_RECORD_DELETE, Ne.Y.PEER_DNS_CREATE, Ne.Y.PEER_DNS_UPDATE, Ne.Y.PEER_DNS_DELETE, Ne.Y.ZONE_TRANSFER_ENABLE, Ne.Y.ZONE_TRANSFER_DISABLE, ye.V.ARGO_ENABLEMENT, ye.V.ARGO_GEO_ANALYTICS_FETCH, ye.V.ARGO_GLOBAL_ANALYTICS_FETCH, pe.X.VIEW_BUCKETS_LIST, pe.X.CREATE_BUCKET, pe.X.VALIDATE_BUCKET, pe.X.DELETE_BUCKET, pe.X.VIEW_CAPTURES_LIST, pe.X.CREATE_SIMPLE_CAPTURE, pe.X.CREATE_FULL_CAPTURE, pe.X.VIEW_FULL_CAPTURE, pe.X.DOWNLOAD_SIMPLE_CAPTURE, te.bK.VIEW_RULES, te.bK.CREATE_RULE, te.bK.UPDATE_RULE, te.bK.DELETE_RULE, te.bK.VIEW_CONFIGURATION, te.bK.CREATE_CONFIGURATION, te.bK.UPDATE_CONFIGURATION, te.bK.DELETE_CONFIGURATION, oe.r8.VIEW_ALERTS, oe.r8.VIEW_ALERTS_HISTORY, oe.r8.MAGIC_OVERVIEW_ANALYTICS, oe.VZ.CREATE_SITE, oe.VZ.CREATE_TUNNEL, oe.VZ.CREATE_STATIC_ROUTE, Se.DC.CLICK_ADAPTIVE_SAMPLING, Se.DC.CLICK_TO_LOG_EXPLORER_BANNER, Se.DC.CLICK_TO_LOG_EXPLORER_DESCRIPTION, Se.DC.CLICK_SWITCH_TO_RAW_LOGS, Se.DC.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", L.U.REGISTER_DOMAIN_SEARCH_SUBMIT, L.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, L.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, L.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, L.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, L.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, L.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, L.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, L.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, L.U.REGISTER_DOMAIN_CHECKOUT_ERROR, L.U.TRANSFER_DOMAIN_CHANGE_STEP, L.U.RENEW_DOMAIN_COMPLETED, L.U.RESTORE_DOMAIN_INIT, L.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, L.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, L.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, L.U.RESTORE_DOMAIN_FAILURE, L.U.RESTORE_DOMAIN_COMPLETED, L.U.DOMAIN_DELETE_INIT, L.U.DOMAIN_DELETE_COMPLETED, L.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, L.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, L.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, L.U.DOMAIN_DELETE_CONFIRM_DELETE, L.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, L.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, L.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, L.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, L.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, L.U.DOMAIN_MOVE_START_FLOW, L.U.DOMAIN_MOVE_OPEN_DOCS, L.U.DOMAIN_MOVE_CLOSE_FLOW, L.U.DOMAIN_MOVE_PROGRESS_FLOW, L.U.DOMAIN_MOVE_SUBMIT, L.U.DOMAIN_MOVE_INITIATE_SUCCESS, L.U.DOMAIN_MOVE_INITIATE_ERROR, L.U.DOMAIN_MOVE_CANCEL, L.U.DOMAIN_MOVE_CANCEL_SUCCESS, L.U.DOMAIN_MOVE_CANCEL_ERROR, L.U.ACTION_CENTER_NAVIGATE, L.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, L.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, L.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, Ye.z3.CREATE_SECRET, Ye.z3.DELETE_SECRET, Ye.z3.BIND_SECRET, Ye.z3.DUPLICATE_SECRET, Ye.z3.EDIT_SECRET, G.KO.CLICK_GET_STARTED_GUIDE, G.KO.CLICK_PIPELINE_DOCUMENTATION, G.KO.CLICK_QUICK_LINK, G.KO.CREATE_PIPELINE, G.KO.DELETE_PIPELINE, G.KO.LIST_PIPELINES, G.KO.VIEW_PIPELINE, k.S.EXISTING_DOMAIN, k.S.NEW_DOMAIN, k.S.WAF_RULESET, k.S.WORKERS, k.S.PAGES, k.S.R2, k.S.ACCOUNT_MEMBERS, ce._.TEMPLATE_PRODUCT_SELECTED, ce._.TEMPLATE_SELECTED, ce._.TEMPLATE_SAVE_DRAFT, ce._.TEMPLATE_CANCEL, ce._.TEMPLATE_DEPLOY, ue.D.CLICK_GO_BACK_SHARE_MODAL, ue.D.CLICK_MENU_ITEM_SHARE, ue.D.CLICK_ON_CANCEL_SHARE_MODAL, ue.D.CLICK_ON_CLOSE_SHARE_MODAL, ue.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, ue.D.CLICK_ON_DELETE_RULESET, ue.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, ue.D.CLICK_ON_EDIT_SHARE_PERMISSION, ue.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, ue.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, ue.D.CLICK_ON_SHARE_TABLE_ROW, F.pR.CLICK_GEOGRAPHICAL_TEMPLATE, F.pR.CLICK_IP_TEMPLATE, F.pR.CLICK_USER_AGENT_TEMPLATE, F.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, le.vc.CREATED, le.vc.ENABLED, le.vc.DISABLED, le.vc.DELETED, le.vc.UPDATED, le.vc.DOWNLOADED, W.Gk.REQUEST_REVIEW, W.Gk.COPY_URL, N.v.FIELD, N.v.OPERATOR, Me.Vj.SHOW_LCC_MIGRATION_BANNER, Me.Vj.CLICK_LCC_DOCUMENTATION, Me.Vj.CLICK_LCC_UPGRADE_GUIDE, Me.Vj.SHOW_LCC_MIGRATION_WARNING, V.y.CLICK_DISMISS_INELIGIBILITY, V.y.CLICK_NEXT_STEP, V.y.CLICK_OPT_IN, V.y.CLICK_OPT_IN_BUTTON, V.y.CLICK_OPT_OUT_BUTTON, V.y.DISPLAY_MODAL, V.y.DISPLAY_OPT_OUT_MODAL, V.y.DISPLAY_TOOLTIP_NOT_AVAILABLE, V.y.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, fe.AZ.LOAD_INSIGHTS, fe.AZ.OPEN_SIDE_MODAL_INSIGHT, fe.AZ.CLOSE_SIDE_MODAL_INSIGHT, fe.AZ.CLICK_ACTION_INSIGHT, Se.DC.ADD_SUSPICIOUS_ACTIVITY_FILTER, Se.DC.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, Se.DC.OPEN_SIDE_DRAWER, Se.DC.CLOSE_SIDE_DRAWER, Be.QV[Be.Xn].clickLoginFromMobileApp2fa, Be.QV[Be.Xn].clickTryOther2FAMethodOrBackupCode, Be.QV[Be.Xn].clickTryRecovery, Be.QV[Be.xq].clickRegenerateBackupCodes),
				ot = n.eg.exactStrict(n.eg.object({
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
					version: n.eg.any.optional,
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
				ct = (ie, re) => {
					const [p, T] = H(re);
					let Q, _e;
					return (0, n.nM)(rt.decode(ie)) && (Q = new C.Uh(ie)), T && T.length > 0 && (_e = new C.oV(ie, T)), [p, Q, _e]
				},
				H = ie => {
					const re = ot.decode(ie);
					if ((0, n.nM)(re)) {
						const p = re.left.map(({
							context: T
						}) => T.map(({
							key: Q
						}) => Q)).reduce((T, Q) => T.concat(Q), []).filter(T => T in ie);
						return [de(p, ie), p]
					}
					return [ie, []]
				},
				de = (ie, re) => Object.entries(re).reduce((p, [T, Q]) => (ie.includes(T) || (p[T] = Q), p), {}),
				be = ie => (re, p, T) => {
					const [Q, _e, ke] = ct(p, T);
					if (_e) throw _e;
					return ke && console.error(ke), ie(re, p, Q)
				};
			var Ie = t("../react/utils/zaraz.ts");
			const he = {
					identify: !0
				},
				xe = ie => (re, p, T) => (he[p] || Ie.tg === null || Ie.tg === void 0 || Ie.tg.track(p, T), ie(re, p, T));
			var We = t("../react/common/selectors/userSelectors.ts"),
				at = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function Xe(ie) {
				for (var re = 1; re < arguments.length; re++) {
					var p = arguments[re] != null ? Object(arguments[re]) : {},
						T = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(p).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(p, Q).enumerable
					})), T.forEach(function(Q) {
						mt(ie, Q, p[Q])
					})
				}
				return ie
			}

			function mt(ie, re, p) {
				return re = Ct(re), re in ie ? Object.defineProperty(ie, re, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ie[re] = p, ie
			}

			function Ct(ie) {
				var re = ft(ie, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function ft(ie, re) {
				if (typeof ie != "object" || ie === null) return ie;
				var p = ie[Symbol.toPrimitive];
				if (p !== void 0) {
					var T = p.call(ie, re || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(ie)
			}
			const vt = new Set(["cf_argo", "load_balancing_basic_plus"]),
				Ue = new Set(["pro", "business"]),
				ze = ({
					price: ie,
					ratePlanId: re,
					ratePlanName: p,
					frequency: T,
					isNewSubscription: Q
				}) => ({
					event: "purchase",
					new_subscription: Q,
					ecommerce: {
						transaction_id: (0, at.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: ie
					},
					items: [{
						item_id: re,
						item_name: p || re,
						frequency: T,
						price: ie
					}]
				}),
				qe = ie => {
					const {
						price: re,
						frequency: p,
						plan: T,
						ratePlanId: Q,
						ratePlanName: _e
					} = ie;
					return Ue.has(T) ? Xe({}, ze({
						price: re,
						ratePlanId: Q,
						ratePlanName: _e,
						frequency: p,
						isNewSubscription: !0
					}), {
						label: T
					}) : void 0
				},
				lt = ie => {
					const {
						price: re,
						frequency: p,
						ratePlan: T,
						ratePlanName: Q
					} = ie;
					return vt.has(T) ? Xe({}, ze({
						price: re,
						ratePlanId: T,
						ratePlanName: Q,
						frequency: p,
						isNewSubscription: !0
					}), {
						label: T
					}) : void 0
				},
				Pe = ie => {
					const {
						price: re,
						frequency: p,
						plan: T,
						ratePlanId: Q,
						ratePlanName: _e,
						label: ke
					} = ie;
					return Ue.has(T) ? Xe({}, ze({
						price: re,
						frequency: p,
						ratePlanId: Q,
						ratePlanName: _e,
						isNewSubscription: !1
					}), {
						label: ke || T
					}) : void 0
				},
				Z = ie => {
					const {
						price: re,
						frequency: p,
						ratePlan: T,
						ratePlanName: Q,
						oldRatePlan: _e
					} = ie;
					return vt.has(T) ? Xe({}, ze({
						price: re,
						frequency: p,
						ratePlanId: T,
						ratePlanName: Q,
						isNewSubscription: !1
					}), {
						label: `${_e}->${T}`
					}) : void 0
				},
				se = "pageview",
				Ee = "create zone",
				Ce = "create user",
				Le = "Plan Purchase Success",
				$e = "Product Purchase Success",
				it = "Plan Update Success",
				st = "Product Update Success",
				Dt = {
					[se]: !0,
					[Ee]: !0,
					[Ce]: !0,
					[Le]: !0,
					[$e]: !0,
					[it]: !0,
					[st]: !0
				},
				_t = ie => {
					var re;
					return !!((re = ie.gates.assignments) === null || re === void 0 ? void 0 : re["dx-enable-google-tag-manager"])
				},
				Ze = ie => {
					const re = /\|MCMID\|([0-9]+)\|/,
						p = ie.match(re);
					return p ? p[1] : void 0
				},
				Tt = ie => {
					var re;
					const {
						deviceViewport: p,
						page: T,
						previousPage: Q,
						pageName: _e,
						utm_campaign: ke,
						_ga: je,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Ke
					} = ie, {
						origin: Ge
					} = window.location, et = (0, We.PR)((0, u.bh)().getState());
					return {
						event: Q !== void 0 && T !== Q ? "virtual_page_view" : "page_load",
						device_type: p,
						hostname: Ge,
						language: navigator.language,
						locale: (0, l.r)((0, u.bh)().getState()),
						page_location: T ? `${Ge}${T}` : "[redacted]",
						page_path: T ? `${T}` : "[redacted]",
						page_referrer: Q ? `${Ge}/${Q}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: _e || "[redacted]",
						page_url: T ? `${Ge}${T}` : "[redacted]",
						query: ke ? `?utm_campaign=${ke}` : "[redacted]",
						user_properties: {
							ga_client_id: (re = je) !== null && re !== void 0 ? re : void 0,
							ga_client_id_s: je ? `s${je}` : void 0,
							user_id: wt() ? et == null ? void 0 : et.id : void 0,
							ecid: Ke ? Ze(Ke) : void 0
						}
					}
				},
				Pt = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				Ot = ie => {
					const {
						status: re
					} = ie;
					return re === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				Lt = (ie, re) => {
					switch (ie) {
						case se:
							return Tt(re);
						case Ee:
							return Pt();
						case Ce:
							return Ot(re);
						case Le:
							return qe(re);
						case $e:
							return lt(re);
						case it:
							return Pe(re);
						case st:
							return Z(re);
						default:
							return
					}
				},
				St = ie => (re, p, T) => {
					if (Dt[p]) {
						var Q;
						const _e = Lt(p, T);
						_e && ((Q = window.dataLayer) === null || Q === void 0 || Q.push(_e))
					}
					return ie(re, p, T)
				};
			var Et = t("../react/utils/cookiePreferences.ts");

			function It(ie) {
				for (var re = 1; re < arguments.length; re++) {
					var p = arguments[re] != null ? Object(arguments[re]) : {},
						T = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(p).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(p, Q).enumerable
					})), T.forEach(function(Q) {
						yt(ie, Q, p[Q])
					})
				}
				return ie
			}

			function yt(ie, re, p) {
				return re = ht(re), re in ie ? Object.defineProperty(ie, re, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ie[re] = p, ie
			}

			function ht(ie) {
				var re = kt(ie, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function kt(ie, re) {
				if (typeof ie != "object" || ie === null) return ie;
				var p = ie[Symbol.toPrimitive];
				if (p !== void 0) {
					var T = p.call(ie, re || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(ie)
			}
			const $t = ie => {
					const re = _t((0, u.bh)().getState());
					r().init(It({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: gt() && !(0, a.gm)() && wt(),
						middlewares: [S, be, b, xe, ...re ? [St] : []]
					}, ie))
				},
				Mt = () => {
					r().identify(It({}, (0, e.getAttribution)(), {
						locale: (0, l.r)((0, u.bh)().getState()),
						isCloudflare: !!(0, f.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				gt = () => !0,
				Nt = () => {
					(0, Et.kT)("sparrow_id")
				},
				wt = () => (0, Et.Xm)()
		},
		"../utils/initStyles.ts": function(U, _, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = t("../react/app/providers/storeContainer.js");
			const a = "cfBaseStyles",
				u = document.head || document.getElementsByTagName("head")[0],
				l = s => {
					const m = [];
					for (let v in s.colors) {
						const n = s.colors[v];
						if (Array.isArray(n) && v !== "categorical")
							for (let c = 0; c < n.length; ++c) m.push(`--cf-${v}-${c}:${n[c]};`)
					}
					return m.join(`
`)
				},
				f = () => {
					const s = (0, e.Yc)(),
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
					let v = document.getElementById(a);
					v ? v.innerText = "" : (v = document.createElement("style"), v.id = a, u.appendChild(v)), v.appendChild(document.createTextNode(m)), (0, r.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(f), _.Z = f
		},
		"../utils/sentry/lastSentEventId.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				e: function() {
					return r
				}
			});
			const r = (() => {
				let a = "";
				return {
					setEventId: f => (!f || typeof f != "string" || (a = f), a),
					getEventId: () => a
				}
			})()
		},
		"../utils/zaraz.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Ro: function() {
					return c
				},
				bM: function() {
					return m
				},
				tg: function() {
					return s
				},
				yn: function() {
					return n
				}
			});

			function e(i) {
				for (var d = 1; d < arguments.length; d++) {
					var o = arguments[d] != null ? Object(arguments[d]) : {},
						g = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(o).filter(function(I) {
						return Object.getOwnPropertyDescriptor(o, I).enumerable
					})), g.forEach(function(I) {
						r(i, I, o[I])
					})
				}
				return i
			}

			function r(i, d, o) {
				return d = a(d), d in i ? Object.defineProperty(i, d, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = o, i
			}

			function a(i) {
				var d = u(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function u(i, d) {
				if (typeof i != "object" || i === null) return i;
				var o = i[Symbol.toPrimitive];
				if (o !== void 0) {
					var g = o.call(i, d || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			const l = {
					track: (i, d) => null,
					set: (i, d) => console.log(`zaraz.set(${i}, ${d})`)
				},
				f = {
					track: (i, d) => {
						var o;
						(o = window.zaraz) === null || o === void 0 || o.track(i, e({}, d, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (i, d) => {
						var o;
						return (o = window.zaraz) === null || o === void 0 ? void 0 : o.set(i, d)
					}
				};
			let s;
			const m = () => {
					window.zaraz, s = f
				},
				v = ["email", "first_name", "last_name"],
				n = i => {
					v.forEach(d => {
						var o;
						(o = s) === null || o === void 0 || o.set(d, i[d])
					})
				},
				c = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(U, _, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				u = t.n(a),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(f),
				m = t("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				v = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				c = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				o = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				g = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				I = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				D = t("../../../common/component/component-filter-bar/src/constants.js"),
				O = t("../../../common/component/component-filter-bar/src/utils.js");

			function y() {
				return y = Object.assign ? Object.assign.bind() : function(x) {
					for (var h = 1; h < arguments.length; h++) {
						var M = arguments[h];
						for (var F in M) Object.prototype.hasOwnProperty.call(M, F) && (x[F] = M[F])
					}
					return x
				}, y.apply(this, arguments)
			}

			function A(x) {
				for (var h = 1; h < arguments.length; h++) {
					var M = arguments[h] != null ? Object(arguments[h]) : {},
						F = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols(M).filter(function(q) {
						return Object.getOwnPropertyDescriptor(M, q).enumerable
					})), F.forEach(function(q) {
						E(x, q, M[q])
					})
				}
				return x
			}

			function E(x, h, M) {
				return h = b(h), h in x ? Object.defineProperty(x, h, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[h] = M, x
			}

			function b(x) {
				var h = S(x, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function S(x, h) {
				if (typeof x != "object" || x === null) return x;
				var M = x[Symbol.toPrimitive];
				if (M !== void 0) {
					var F = M.call(x, h || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(x)
			}
			const k = 70,
				N = (0, l.createStyledComponent)(({
					showOverflow: x
				}) => A({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, x ? {} : {
					maxHeight: k,
					overflow: "hidden"
				})),
				w = (0, l.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				C = (0, l.createStyledComponent)(({
					theme: x
				}) => ({
					backgroundColor: x.colors.background,
					py: 1,
					px: 2,
					borderRadius: x.radii[2],
					border: `1px solid ${x.colors.gray[7]}`,
					fontSize: x.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: x.colors.gray[4]
					}
				}), "div"),
				P = (0, l.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				L = (0, l.createStyledComponent)(({
					theme: x
				}) => ({
					color: x.colors.gray[4],
					mr: 1
				}), "span"),
				j = (0, l.createStyledComponent)(() => ({
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
				X = (0, l.createStyledComponent)(({
					buttonStyle: x
				}) => A({
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
				}, x), v.zx),
				oe = (0, l.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				pe = (0, l.createStyledComponent)(({
					theme: x
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: x.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: x.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: x.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: x.colors.gray[1],
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
				K = x => x.current ? [...x.current.children].reduce((h, M) => (M.offsetTop >= k && h++, h), 0) : 0;
			let G = 0;
			class W extends e.Component {
				constructor() {
					super();
					E(this, "overflowWrapper", (0, e.createRef)()), E(this, "hasOverflowed", h => {
						const M = K(this.overflowWrapper);
						h.scrollHeight > k && M >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (h.scrollHeight < k || M === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), E(this, "addNewFilter", () => {
						const {
							filterDefinitions: h
						} = this.props, M = (0, O.TE)(h), F = Object.keys(M)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: F,
								operator: (0, O.uv)(F, M),
								value: (0, O.TT)(F, M)
							}
						})
					}), E(this, "handleOpenFilterEdit", h => {
						this.setState({
							openFilter: h,
							filterChanges: A({}, this.props.filters[h])
						})
					}), E(this, "handleRemoveFilterClick", (h, M) => {
						h.stopPropagation(), this.removeFilter(M)
					}), E(this, "removeFilter", h => {
						const {
							handleFiltersChange: M
						} = this.props, F = [...this.props.filters], q = F[h];
						F.splice(h, 1), M(F), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: q.key,
							operator: q.operator,
							value: q.value
						})
					}), E(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), E(this, "handleFilterSubmit", h => {
						const {
							filterDefinitions: M
						} = this.props;
						h.preventDefault();
						const {
							filterChanges: F
						} = this.state, q = typeof M[F.key].parse == "function" ? Array.isArray(F.value) ? F.value.map(M[F.key].parse) : M[F.key].parse(F.value) : F.value;
						if (M[F.key].validate && (Array.isArray(q) ? !q.every(M[F.key].validate) : !M[F.key].validate(q))) return this.setState({
							invalid: !0
						});
						const ee = [...this.props.filters],
							ne = A({}, F, {
								value: q
							}),
							Y = !ee[this.state.openFilter];
						Y ? ee.push(ne) : ee[this.state.openFilter] = A({}, ne), this.props.handleFiltersChange(ee, ne), (Y ? this.props.onAddFilter : this.props.onEditFilter)({
							field: ne.key,
							operator: ne.operator,
							value: ne.value
						}), this.closeOpenFilterChanges()
					}), E(this, "handlePendingKeyChange", ({
						value: h
					}) => {
						const {
							filterDefinitions: M
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: h,
								operator: (0, O.uv)(h, M),
								value: (0, O.TT)(h, M)
							}
						})
					}), E(this, "handlePendingOperatorChange", ({
						value: h
					}) => {
						let M = A({}, this.state.filterChanges, {
							operator: h
						});
						if ((0, O.dr)(h)) {
							var F, q;
							((F = this.state.filterChanges) === null || F === void 0 ? void 0 : F.value) && !Array.isArray((q = this.state.filterChanges) === null || q === void 0 ? void 0 : q.value) && (M.value = [this.state.filterChanges.value])
						} else {
							var ee, ne, Y;
							((ee = this.state.filterChanges) === null || ee === void 0 ? void 0 : ee.value) && Array.isArray((ne = this.state.filterChanges) === null || ne === void 0 ? void 0 : ne.value) && ((Y = this.state.filterChanges) === null || Y === void 0 ? void 0 : Y.value.length) > 0 && (M.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: M
						})
					}), E(this, "handlePendingValueChange", h => {
						this.setState({
							invalid: !1,
							filterChanges: A({}, this.state.filterChanges, {
								value: h
							})
						})
					}), E(this, "handleShowOverflow", () => {
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
						id: ++G
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
						formatLabel: M,
						filterDefinitions: F
					} = this.props, {
						operator: q
					} = this.state.filterChanges, ee = F[this.state.filterChanges.key], ne = this.state.filterChanges.value, Y = z => Array.isArray(z) ? z.map(te => te.value) : (z == null ? void 0 : z.value) || null;
					if (ee.renderValueComponent) return ee.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (ee.type) {
						case D.k.custom: {
							var B;
							return r().createElement(ee.CustomComponent, y({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (B = ee == null ? void 0 : ee.customProps) !== null && B !== void 0 ? B : {}))
						}
						case D.k.select:
							return (0, O.dr)(q) ? r().createElement(o.Z, {
								searchable: !0,
								multi: !0,
								creatable: !ee.options,
								value: typeof ne.split == "function" ? ne == null ? void 0 : ne.split(",") : Array.isArray(ne) ? ne : [],
								options: ee.options ? ee.options.map(z => ({
									value: z.value || z,
									label: z.label || M(this.state.filterChanges.key, z, h)
								})) : ne ? (Array.isArray(ne) ? ne : ne.split(",")).map(z => ({
									label: z,
									value: z
								})) : [],
								noOptionsMessage: () => null,
								placeholder: r().createElement(f.Trans, {
									id: ee.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: ee.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: z => {
									this.handlePendingValueChange(Y(z))
								},
								isValidNewOption: z => {
									const te = ee.validate;
									return !te && z || z && te([z])
								},
								getNewOptionData: (z, te) => ({
									value: z,
									label: te
								})
							}) : r().createElement(i.hQ, {
								hideLabel: !0,
								value: ne,
								options: ee.options.map(z => ({
									value: z,
									label: M(this.state.filterChanges.key, z, h)
								})),
								onChange: ({
									value: z
								}) => this.handlePendingValueChange(z)
							});
						case D.k.string:
						default:
							return (0, O.dr)(q) ? r().createElement(o.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof ne.split == "function" ? ne == null ? void 0 : ne.split(",") : Array.isArray(ne) ? ne : [],
								options: ne ? (Array.isArray(ne) ? ne : ne.split(",")).map(z => ({
									label: z,
									value: z
								})) : [],
								noOptionsMessage: () => null,
								placeholder: h.t("analytics.report.filters.labels.placeholder", {
									example: F[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: z => {
									this.handlePendingValueChange(Y(z))
								},
								isValidNewOption: z => {
									const te = ee.validate;
									return !te && z || z && te([z])
								},
								getNewOptionData: (z, te) => ({
									value: z,
									label: te
								}),
								formatCreateLabel: z => h.t("filter_editor.value_create_label", {
									value: z
								})
							}) : r().createElement(f.I18n, null, z => r().createElement(m.I, {
								value: this.state.filterChanges.value,
								onChange: te => this.handlePendingValueChange(te.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: z.t("analytics.report.filters.labels.placeholder", {
									example: F[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: h,
						filterDefinitions: M,
						modalStyles: F,
						filterIconType: q,
						buttonStyle: ee
					} = this.props, ne = K(this.overflowWrapper), Y = `filterPanel${this.state.id}`, B = this.state.openFilter !== null;
					return r().createElement(f.I18n, null, z => r().createElement(d.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, r().createElement(ce, null, r().createElement(X, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": B,
						"aria-controls": Y,
						inverted: !0,
						buttonStyle: ee
					}, r().createElement(n.J, {
						type: q || "add",
						mr: 1,
						label: z.t("common.add", {
							_: "Add"
						})
					}), r().createElement(f.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && r().createElement(oe, null, r().createElement(f.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), r().createElement(N, {
						innerRef: this.overflowWrapper,
						overflowLimit: k,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((te, le) => {
						const {
							key: ue,
							operator: ge,
							value: ye
						} = te, Te = M[ue].ignoreLabelTranslation ? M[ue].label : z.t(M[ue].label), Oe = z.t(`analytics.report.filters.operators.${ge}`), ve = Array.isArray(ye) ? ye.map(Me => h(ue, Me, z)).join(", ") : h(ue, ye, z), De = `${Te} ${Oe} ${ve}`;
						return r().createElement(w, {
							key: `${ue}-${ge}-${ye}`,
							title: De
						}, r().createElement(C, {
							onClick: () => this.handleOpenFilterEdit(le)
						}, r().createElement(d.ZC, {
							display: "flex"
						}, r().createElement(P, null, Te), r().createElement(L, null, Oe), r().createElement(j, null, ve), (0, O.oN)(te, M) ? r().createElement(c.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : r().createElement(pe, {
							onClick: Me => this.handleRemoveFilterClick(Me, le),
							"aria-label": "remove"
						}, r().createElement(n.J, {
							type: "remove"
						})))))
					})), B && r().createElement(I.Z, {
						id: Y,
						filterDefinitions: M,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, O.oN)(this.state.filterChanges, M),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: h,
						modalStyles: F
					}), this.state.hasOverflowed && r().createElement(g.Z, {
						count: ne,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			E(W, "propTypes", {
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
			}), _.Z = W
		},
		"../../../common/component/component-filter-bar/src/index.js": function(U, _, t) {
			"use strict";
			t.d(_, {
				ME: function() {
					return r.Z
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
				r = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				a = t("../../../common/component/component-filter-bar/src/constants.js"),
				u = t("../../../common/component/component-filter-bar/src/utils.js"),
				l = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				OZ: function() {
					return l
				},
				YB: function() {
					return u
				}
			});

			function e(s, m, v) {
				return m = r(m), m in s ? Object.defineProperty(s, m, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[m] = v, s
			}

			function r(s) {
				var m = a(s, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function a(s, m) {
				if (typeof s != "object" || s === null) return s;
				var v = s[Symbol.toPrimitive];
				if (v !== void 0) {
					var n = v.call(s, m || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(s)
			}
			class u extends Error {
				constructor(m, v) {
					super(v);
					e(this, "translationKey", void 0), this.translationKey = m, this.name = "TranslatorError"
				}
			}
			class l extends u {
				constructor(m) {
					super(m, `Translation key not found: ${m}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var f = null
		},
		"../../../common/util/types/src/api/domain.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Aw: function() {
					return S
				},
				Ib: function() {
					return E
				},
				Ks: function() {
					return k
				},
				MS: function() {
					return b
				},
				PN: function() {
					return g
				},
				Pp: function() {
					return u
				},
				Q3: function() {
					return d
				},
				TS: function() {
					return o
				},
				W7: function() {
					return O
				},
				dN: function() {
					return N
				},
				eF: function() {
					return A
				},
				qp: function() {
					return n
				},
				wR: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const r = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
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
				f = e.eg.object({
					registrant: u.optional,
					technical: u.optional,
					administrator: u.optional,
					billing: u.optional
				}),
				s = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: f.optional,
					years: e.eg.number
				}),
				m = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let v = function(w) {
				return w.ONBOARDING_INITIATED = "Onboarding Initiated", w.ONBOARDED = "Onboarded", w.PENDING_REGISTRY_LOCK = "Pending Registry Lock", w.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", w.REGISTRY_UNLOCKED = "Registry Unlocked", w.LOCKED = "Locked", w.FAILED_TO_LOCK = "Failed To Lock", w.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", w.UNLOCKED = "Unlocked", w.OFFBOARDED = "Offboarded", w
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
						status: e.eg.enum(v).optional
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
				c = e.eg.object({
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
				o = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let g = function(w) {
				return w.PENDING = "pending", w.VERIFIED = "verified", w.REJECTED = "rejected", w.PENDING_DELETE = "pending_delete", w.DELETED = "deleted", w
			}({});
			const I = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(g),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				D = e.eg.object({
					designated_approvers: e.eg.array(I)
				});
			let O = function(w) {
				return w.PENDING = "pending", w.PENDING_UPDATE = "pending_update", w.ENABLED = "enabled", w.DISABLED = "disabled", w
			}({});
			const y = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(O)
				}),
				A = e.eg.intersection([y, D]),
				E = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let b = function(w) {
				return w.UNLOCK_APPROVAL = "UnlockApprovalRequest", w.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", w.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", w.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", w
			}({});
			const S = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				k = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function(U, _, t) {
			"use strict";
			t.d(_, {
				df: function() {
					return r
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
					return f
				}
			});
			let e = function(s) {
					return s.Custom = "custom", s.Root = "root", s.Managed = "managed", s.Zone = "zone", s.RateLimit = "ratelimit", s
				}({}),
				r = function(s) {
					return s.Cache = "http_request_cache_settings", s.HttpCustomErrors = "http_custom_errors", s.HttpConfigSettings = "http_config_settings", s.HttpLogCustomFields = "http_log_custom_fields", s.HttpRateLimit = "http_ratelimit", s.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", s.HttpRequestFirewallCustom = "http_request_firewall_custom", s.HttpRequestFirewallManaged = "http_request_firewall_managed", s.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", s.HttpRequestLateTransform = "http_request_late_transform", s.HttpRequestMain = "http_request_main", s.HttpRequestOrigin = "http_request_origin", s.HttpRequestRedirect = "http_request_redirect", s.HttpRequestSanitize = "http_request_sanitize", s.HttpRequestSBFM = "http_request_sbfm", s.HttpRequestsSnippets = "http_request_snippets", s.HttpRequestTransform = "http_request_transform", s.HttpResponseCompression = "http_response_compression", s.HttpResponseFirewallManaged = "http_response_firewall_managed", s.HttpResponseTransform = "http_response_headers_transform", s.L4DDoS = "ddos_l4", s.L7DDoS = "ddos_l7", s.MagicIDS = "magic_transit_ids_managed", s.MagicManaged = "magic_transit_managed", s.MagicTransit = "magic_transit", s.MagicTransitRateLimit = "magic_transit_ratelimit", s
				}({}),
				a = function(s) {
					return s.Execute = "execute", s.All = "all", s.Block = "block", s.JSChallenge = "js_challenge", s.Challenge = "challenge", s.Allow = "allow", s.Bypass = "bypass", s.Log = "log", s.Rewrite = "rewrite", s.Score = "score", s.Skip = "skip", s.Managed_Challenge = "managed_challenge", s.DDoS_Dynamic = "ddos_dynamic", s.Select_Config = "select_config", s.Set_Config = "set_config", s.Reset = "reset", s.Redirect = "redirect", s.Cache = "set_cache_settings", s.WhiteList = "whitelist", s.Error = "serve_error", s
				}({}),
				u = function(s) {
					return s.ZONE_LOCKDOWN = "zoneLockdown", s.UA_BLOCK = "uaBlock", s.BIC = "bic", s.HOT = "hot", s.SECURITY_LEVEL = "securityLevel", s.RATE_LIMIT = "rateLimit", s.WAF = "waf", s
				}({}),
				l = function(s) {
					return s.DEFAULT = "default", s.MEDIUM = "medium", s.LOW = "low", s.EOFF = "eoff", s.HIGH = "high", s.VERY_HIGH = "very_high", s
				}({}),
				f = function(s) {
					return s.DEFAULT = "", s.XML = "text/xml", s.JSON = "application/json", s.TEXT = "text/plain", s.HTML = "text/html", s
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Yd: function() {
					return e
				},
				vE: function() {
					return r
				}
			});

			function e(a) {
				return Object.keys(a)
			}
			const r = (a, u) => {
				if (u !== void 0) throw new Error("Unexpected object: " + a);
				return u
			}
		},
		"../../../dash/intl/intl-translations/src/index.ts": function(U, _, t) {
			"use strict";
			t.d(_, {
				Fy: function() {
					return e.Z
				},
				if: function() {
					return a.Z
				},
				n4: function() {
					return r.n
				}
			});
			var e = t("../../../dash/intl/intl-translations/src/makeLoadPhrases.ts"),
				r = t("../../../dash/intl/intl-translations/src/catalogMap.ts"),
				a = t("../../../dash/intl/intl-translations/src/supportedCatalogs.ts")
		},
		"../react/common/out.css": function(U, _, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[U.id, e, ""]
			]);
			var r, a, u = {
				hmr: !0
			};
			u.transform = r, u.insertInto = void 0;
			var l = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, u);
			e.locals && (U.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../react/common/out.css": function(U, _, t) {
			_ = U.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), _.push([U.id, `/*! tailwindcss v4.1.7 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, components, utilities;
@layer theme {
  :root, :host {
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
    --color-red-200: oklch(88.5% 0.062 18.334);
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-800: oklch(44.4% 0.177 26.899);
    --color-red-900: oklch(39.6% 0.141 25.723);
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-600: oklch(64.6% 0.222 41.116);
    --color-yellow-50: oklch(98.7% 0.026 102.212);
    --color-yellow-200: oklch(94.5% 0.129 101.54);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-yellow-600: oklch(68.1% 0.162 75.834);
    --color-yellow-900: oklch(42.1% 0.095 57.708);
    --color-green-50: oklch(98.2% 0.018 155.826);
    --color-green-100: oklch(96.2% 0.044 156.743);
    --color-green-200: oklch(92.5% 0.084 155.995);
    --color-green-300: oklch(87.1% 0.15 154.449);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-green-700: oklch(52.7% 0.154 150.069);
    --color-green-900: oklch(39.3% 0.095 152.535);
    --color-blue-50: oklch(97% 0.014 254.604);
    --color-blue-100: oklch(93.2% 0.032 255.585);
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-400: oklch(0.707 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(0.424 0.199 265.638);
    --color-blue-900: oklch(37.9% 0.146 265.522);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
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
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
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
    --leading-relaxed: 1.625;
    --radius-xs: 0.125rem;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --animate-spin: spin 1s linear infinite;
    --blur-md: 12px;
    --default-transition-duration: 100ms /* snappier than default 150ms */;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-bounce: cubic-bezier(0.2, 0, 0, 1.5);
    --animate-refresh: refresh 0.5s ease-in-out infinite;
    --color-neutral-150: oklch(0.96 0 0) /*new */;
    --color-neutral-250: oklch(0.9 0 0) /* new */;
    --color-neutral-450: oklch(0.62 0 0) /* new */;
    --color-neutral-750: oklch(0.31 0 0) /* new */;
    --color-neutral-850: oklch(0.23 0 0) /* new */;
    --color-border: var(--cf-gray-8);
    --color-bg-primary: var(--color-white);
    --color-bg-secondary: var(--color-neutral-50);
    --color-red-650: oklch(0.55 0.238 27.4);
    --color-red-750: oklch(0.46 0.195 27.2);
    --color-ob-base-100: var(--color-white);
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
    --color-cl1-white: var(--cf-white);
    --color-cl1-blue-2: var(--cf-blue-2);
    --color-cl1-blue-8: var(--cf-blue-8);
    --color-cl1-gray-0: var(--cf-gray-0);
    --color-cl1-new-gray-7: var(--cf-newGray-7);
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
  .inset-0 {
    inset: calc(var(--spacing) * 0);
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
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .isolate {
    isolation: isolate;
  }
  .z-10 {
    z-index: 10;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
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
  .\\!m-0 {
    margin: calc(var(--spacing) * 0) !important;
  }
  .-m-px {
    margin: -1px;
  }
  .m-0 {
    margin: calc(var(--spacing) * 0);
  }
  .m-auto {
    margin: auto;
  }
  .-mx-1 {
    margin-inline: calc(var(--spacing) * -1);
  }
  .mx-auto {
    margin-inline: auto;
  }
  .my-1 {
    margin-block: calc(var(--spacing) * 1);
  }
  .my-4 {
    margin-block: calc(var(--spacing) * 4);
  }
  .\\!mt-4 {
    margin-top: calc(var(--spacing) * 4) !important;
  }
  .\\!mt-6 {
    margin-top: calc(var(--spacing) * 6) !important;
  }
  .mt-0 {
    margin-top: calc(var(--spacing) * 0);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
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
  .-mr-2 {
    margin-right: calc(var(--spacing) * -2);
  }
  .mr-0\\.5 {
    margin-right: calc(var(--spacing) * 0.5);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-2 {
    margin-right: calc(var(--spacing) * 2);
  }
  .\\!mb-2 {
    margin-bottom: calc(var(--spacing) * 2) !important;
  }
  .\\!mb-3 {
    margin-bottom: calc(var(--spacing) * 3) !important;
  }
  .\\!mb-4 {
    margin-bottom: calc(var(--spacing) * 4) !important;
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
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .\\!ml-0 {
    margin-left: calc(var(--spacing) * 0) !important;
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
  .ml-2 {
    margin-left: calc(var(--spacing) * 2);
  }
  .ml-7 {
    margin-left: calc(var(--spacing) * 7);
  }
  .box-border {
    box-sizing: border-box;
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
  .size-4 {
    width: calc(var(--spacing) * 4);
    height: calc(var(--spacing) * 4);
  }
  .size-4\\.5 {
    width: calc(var(--spacing) * 4.5);
    height: calc(var(--spacing) * 4.5);
  }
  .size-5 {
    width: calc(var(--spacing) * 5);
    height: calc(var(--spacing) * 5);
  }
  .size-9 {
    width: calc(var(--spacing) * 9);
    height: calc(var(--spacing) * 9);
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
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
  .h-6\\.5 {
    height: calc(var(--spacing) * 6.5);
  }
  .h-7\\.5 {
    height: calc(var(--spacing) * 7.5);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-8\\/10 {
    height: calc(8/10 * 100%);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-\\[35px\\] {
    height: 35px;
  }
  .h-\\[300px\\] {
    height: 300px;
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
  .min-h-\\[350px\\] {
    min-height: 350px;
  }
  .min-h-\\[calc\\(100vh-160px\\)\\] {
    min-height: calc(100vh - 160px);
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .\\!w-full {
    width: 100% !important;
  }
  .w-1\\/2 {
    width: calc(1/2 * 100%);
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
  .w-8 {
    width: calc(var(--spacing) * 8);
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
  .w-64 {
    width: calc(var(--spacing) * 64);
  }
  .w-\\[10px\\] {
    width: 10px;
  }
  .w-fit {
    width: fit-content;
  }
  .w-full {
    width: 100%;
  }
  .w-max {
    width: max-content;
  }
  .max-w-50 {
    max-width: calc(var(--spacing) * 50);
  }
  .max-w-140 {
    max-width: calc(var(--spacing) * 140);
  }
  .max-w-\\[60ch\\] {
    max-width: 60ch;
  }
  .max-w-\\[560px\\] {
    max-width: 560px;
  }
  .max-w-\\[800px\\] {
    max-width: 800px;
  }
  .max-w-\\[1000px\\] {
    max-width: 1000px;
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-30 {
    min-width: calc(var(--spacing) * 30);
  }
  .min-w-50 {
    min-width: calc(var(--spacing) * 50);
  }
  .min-w-60 {
    min-width: calc(var(--spacing) * 60);
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
  .grow-0 {
    flex-grow: 0;
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
  .translate-x-full {
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-1\\.5 {
    --tw-translate-y: calc(var(--spacing) * 1.5);
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
  .animate-refresh {
    animation: var(--animate-refresh);
  }
  .animate-spin {
    animation: var(--animate-spin);
  }
  .cursor-col-resize {
    cursor: col-resize;
  }
  .cursor-default {
    cursor: default;
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
  .\\!list-none {
    list-style-type: none !important;
  }
  .list-disc {
    list-style-type: disc;
  }
  .appearance-none {
    appearance: none;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-\\[1fr_1fr_2fr\\] {
    grid-template-columns: 1fr 1fr 2fr;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
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
  .justify-end {
    justify-content: flex-end;
  }
  .gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
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
  .gap-6 {
    gap: calc(var(--spacing) * 6);
  }
  .gap-10 {
    gap: calc(var(--spacing) * 10);
  }
  .space-y-2 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-\\[var\\(--gap\\)\\] {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(var(--gap) * var(--tw-space-y-reverse));
      margin-block-end: calc(var(--gap) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .divide-neutral-200 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-neutral-200);
    }
  }
  .self-start {
    align-self: flex-start;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-visible {
    overflow: visible;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .overflow-x-scroll {
    overflow-x: scroll;
  }
  .overflow-y-scroll {
    overflow-y: scroll;
  }
  .\\!rounded-lg {
    border-radius: var(--radius-lg) !important;
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
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }
  .\\!rounded-l-xl {
    border-top-left-radius: var(--radius-xl) !important;
    border-bottom-left-radius: var(--radius-xl) !important;
  }
  .\\!rounded-r-xl {
    border-top-right-radius: var(--radius-xl) !important;
    border-bottom-right-radius: var(--radius-xl) !important;
  }
  .rounded-b-lg {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
  }
  .rounded-b-xs {
    border-bottom-right-radius: var(--radius-xs);
    border-bottom-left-radius: var(--radius-xs);
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
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .\\!border-r-0 {
    border-right-style: var(--tw-border-style) !important;
    border-right-width: 0px !important;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .\\!border-l-0 {
    border-left-style: var(--tw-border-style) !important;
    border-left-width: 0px !important;
  }
  .border-l-4 {
    border-left-style: var(--tw-border-style);
    border-left-width: 4px;
  }
  .\\!border-none {
    --tw-border-style: none !important;
    border-style: none !important;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .border-solid {
    --tw-border-style: solid;
    border-style: solid;
  }
  .\\!border-neutral-200 {
    border-color: var(--color-neutral-200) !important;
  }
  .border-blue-300 {
    border-color: var(--color-blue-300);
  }
  .border-blue-600 {
    border-color: var(--color-blue-600);
  }
  .border-border {
    border-color: var(--color-border);
  }
  .border-cl1-new-gray-7 {
    border-color: var(--color-cl1-new-gray-7);
  }
  .border-gray-300 {
    border-color: var(--color-gray-300);
  }
  .border-green-300 {
    border-color: var(--color-green-300);
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
  .border-neutral-900 {
    border-color: var(--color-neutral-900);
  }
  .border-ob-border {
    border-color: var(--color-ob-border);
  }
  .border-red-300 {
    border-color: var(--color-red-300);
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-yellow-300 {
    border-color: var(--color-yellow-300);
  }
  .border-r-neutral-900 {
    border-right-color: var(--color-neutral-900);
  }
  .border-b-neutral-900 {
    border-bottom-color: var(--color-neutral-900);
  }
  .border-b-transparent\\! {
    border-bottom-color: transparent !important;
  }
  .\\!bg-\\[\\#f6821f1a\\] {
    background-color: #f6821f1a !important;
  }
  .\\!bg-blue-600 {
    background-color: var(--color-blue-600) !important;
  }
  .\\!bg-transparent {
    background-color: transparent !important;
  }
  .bg-\\[\\#f6821f\\] {
    background-color: #f6821f;
  }
  .bg-\\[\\#ffe693\\] {
    background-color: #ffe693;
  }
  .bg-bg-primary {
    background-color: var(--color-bg-primary);
  }
  .bg-bg-secondary {
    background-color: var(--color-bg-secondary);
  }
  .bg-black\\/5 {
    background-color: color-mix(in srgb, #000 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 5%, transparent);
    }
  }
  .bg-black\\/30 {
    background-color: color-mix(in srgb, #000 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 30%, transparent);
    }
  }
  .bg-blue-50 {
    background-color: var(--color-blue-50);
  }
  .bg-blue-100 {
    background-color: var(--color-blue-100);
  }
  .bg-blue-500 {
    background-color: var(--color-blue-500);
  }
  .bg-blue-600 {
    background-color: var(--color-blue-600);
  }
  .bg-cl1-blue-8 {
    background-color: var(--color-cl1-blue-8);
  }
  .bg-cl1-white {
    background-color: var(--color-cl1-white);
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-green-50 {
    background-color: var(--color-green-50);
  }
  .bg-green-100 {
    background-color: var(--color-green-100);
  }
  .bg-green-200 {
    background-color: var(--color-green-200);
  }
  .bg-inherit {
    background-color: inherit;
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
  .bg-neutral-900 {
    background-color: var(--color-neutral-900);
  }
  .bg-ob-base-100 {
    background-color: var(--color-ob-base-100);
  }
  .bg-ob-base-1000 {
    background-color: var(--color-ob-base-1000);
  }
  .bg-red-50 {
    background-color: var(--color-red-50);
  }
  .bg-red-100 {
    background-color: var(--color-red-100);
  }
  .bg-red-200 {
    background-color: var(--color-red-200);
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-yellow-50 {
    background-color: var(--color-yellow-50);
  }
  .bg-yellow-200 {
    background-color: var(--color-yellow-200);
  }
  .bg-yellow-300 {
    background-color: var(--color-yellow-300);
  }
  .bg-gradient-to-r {
    --tw-gradient-position: to right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .from-transparent {
    --tw-gradient-from: transparent;
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-white {
    --tw-gradient-to: var(--color-white);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-40\\% {
    --tw-gradient-to-position: 40%;
  }
  .bg-no-repeat {
    background-repeat: no-repeat;
  }
  .stroke-border {
    stroke: var(--color-border);
  }
  .\\!p-0 {
    padding: calc(var(--spacing) * 0) !important;
  }
  .\\!p-4 {
    padding: calc(var(--spacing) * 4) !important;
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-0\\.5 {
    padding: calc(var(--spacing) * 0.5);
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
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .\\!px-2 {
    padding-inline: calc(var(--spacing) * 2) !important;
  }
  .\\!px-3 {
    padding-inline: calc(var(--spacing) * 3) !important;
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .px-10 {
    padding-inline: calc(var(--spacing) * 10);
  }
  .\\!py-1 {
    padding-block: calc(var(--spacing) * 1) !important;
  }
  .\\!py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5) !important;
  }
  .\\!py-2 {
    padding-block: calc(var(--spacing) * 2) !important;
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-6 {
    padding-block: calc(var(--spacing) * 6);
  }
  .py-8 {
    padding-block: calc(var(--spacing) * 8);
  }
  .py-16 {
    padding-block: calc(var(--spacing) * 16);
  }
  .py-\\[3px\\] {
    padding-block: 3px;
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
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pr-\\[14px\\] {
    padding-right: 14px;
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-6 {
    padding-left: calc(var(--spacing) * 6);
  }
  .pl-8 {
    padding-left: calc(var(--spacing) * 8);
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
  .text-right {
    text-align: right;
  }
  .font-mono {
    font-family: var(--font-mono);
  }
  .font-mono\\! {
    font-family: var(--font-mono) !important;
  }
  .\\!text-base {
    font-size: var(--text-base) !important;
    line-height: var(--tw-leading, var(--text-base--line-height)) !important;
  }
  .\\!text-sm {
    font-size: var(--text-sm) !important;
    line-height: var(--tw-leading, var(--text-sm--line-height)) !important;
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
  .\\!text-\\[16px\\] {
    font-size: 16px !important;
  }
  .text-\\[12px\\] {
    font-size: 12px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .text-\\[16px\\] {
    font-size: 16px;
  }
  .leading-\\[35px\\] {
    --tw-leading: 35px;
    line-height: 35px;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .\\!font-bold {
    --tw-font-weight: var(--font-weight-bold) !important;
    font-weight: var(--font-weight-bold) !important;
  }
  .\\!font-medium {
    --tw-font-weight: var(--font-weight-medium) !important;
    font-weight: var(--font-weight-medium) !important;
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
  .break-all {
    word-break: break-all;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }
  .text-ellipsis {
    text-overflow: ellipsis;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .\\!text-black {
    color: var(--color-black) !important;
  }
  .\\!text-inherit {
    color: inherit !important;
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
  .text-blue-700 {
    color: var(--color-blue-700);
  }
  .text-border {
    color: var(--color-border);
  }
  .text-cl1-blue-2 {
    color: var(--color-cl1-blue-2);
  }
  .text-cl1-gray-0 {
    color: var(--color-cl1-gray-0);
  }
  .text-gray-700 {
    color: var(--color-gray-700);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-inherit {
    color: inherit;
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
  .text-neutral-900 {
    color: var(--color-neutral-900);
  }
  .text-neutral-950 {
    color: var(--color-neutral-950);
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
  .text-orange-600 {
    color: var(--color-orange-600);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-red-700 {
    color: var(--color-red-700);
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
  .\\!no-underline {
    text-decoration-line: none !important;
  }
  .line-through {
    text-decoration-line: line-through;
  }
  .underline {
    text-decoration-line: underline;
  }
  .decoration-dotted {
    text-decoration-style: dotted;
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
  .opacity-75 {
    opacity: 75%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\\[0_0_0_1px_rgba\\(0\\,0\\,0\\,0\\.5\\)_inset\\] {
    --tw-shadow: 0 0 0 1px var(--tw-shadow-color, rgba(0,0,0,0.5)) inset;
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
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
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
  .backdrop-blur-md {
    --tw-backdrop-blur: blur(var(--blur-md));
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .\\!transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events !important;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function)) !important;
    transition-duration: var(--tw-duration, var(--default-transition-duration)) !important;
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events;
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
  .group-hover\\:block {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        display: block;
      }
    }
  }
  .group-hover\\:text-\\[\\#f6821f\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        color: #f6821f;
      }
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
  .hover\\:-translate-y-0\\.5 {
    &:hover {
      @media (hover: hover) {
        --tw-translate-y: calc(var(--spacing) * -0.5);
        translate: var(--tw-translate-x) var(--tw-translate-y);
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
  .hover\\:\\!bg-blue-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-700) !important;
      }
    }
  }
  .hover\\:bg-neutral-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-100);
      }
    }
  }
  .hover\\:bg-neutral-150 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-150);
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
  .hover\\:bg-red-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-100);
      }
    }
  }
  .hover\\:bg-white {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-white);
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
  .hover\\:text-black {
    &:hover {
      @media (hover: hover) {
        color: var(--color-black);
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
  .hover\\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
      }
    }
  }
  .hover\\:opacity-50 {
    &:hover {
      @media (hover: hover) {
        opacity: 50%;
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
  .hover\\:shadow-md {
    &:hover {
      @media (hover: hover) {
        --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
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
  .focus\\:bg-red-100 {
    &:focus {
      background-color: var(--color-red-100);
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
  .focus-visible\\:inset-ring-\\[0\\.5\\] {
    &:focus-visible {
      --tw-inset-ring-color: 0.5;
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
  .data-disabled\\:pointer-events-none {
    &[data-disabled] {
      pointer-events: none;
    }
  }
  .data-disabled\\:opacity-50 {
    &[data-disabled] {
      opacity: 50%;
    }
  }
  .sm\\:mb-8 {
    @media (width >= 40rem) {
      margin-bottom: calc(var(--spacing) * 8);
    }
  }
  .sm\\:block {
    @media (width >= 40rem) {
      display: block;
    }
  }
  .sm\\:grid-cols-4 {
    @media (width >= 40rem) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .sm\\:py-1\\.5 {
    @media (width >= 40rem) {
      padding-block: calc(var(--spacing) * 1.5);
    }
  }
  .md\\:\\!flex {
    @media (width >= 48rem) {
      display: flex !important;
    }
  }
  .md\\:block {
    @media (width >= 48rem) {
      display: block;
    }
  }
  .md\\:px-12 {
    @media (width >= 48rem) {
      padding-inline: calc(var(--spacing) * 12);
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
  .lg\\:grid-cols-2 {
    @media (width >= 64rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
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
  .xl\\:w-\\[380px\\] {
    @media (width >= 80rem) {
      width: 380px;
    }
  }
  .xl\\:grid-cols-2 {
    @media (width >= 80rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .xl\\:grid-cols-3 {
    @media (width >= 80rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .xl\\:flex-row {
    @media (width >= 80rem) {
      flex-direction: row;
    }
  }
  .dark\\:divide-border {
    &:where(.dark, .dark *) {
      :where(& > :not(:last-child)) {
        border-color: var(--color-border);
      }
    }
  }
  .dark\\:\\!border-neutral-800 {
    &:where(.dark, .dark *) {
      border-color: var(--color-neutral-800) !important;
    }
  }
  .dark\\:border-blue-500 {
    &:where(.dark, .dark *) {
      border-color: var(--color-blue-500);
    }
  }
  .dark\\:border-gray-600 {
    &:where(.dark, .dark *) {
      border-color: var(--color-gray-600);
    }
  }
  .dark\\:border-green-500 {
    &:where(.dark, .dark *) {
      border-color: var(--color-green-500);
    }
  }
  .dark\\:border-neutral-100 {
    &:where(.dark, .dark *) {
      border-color: var(--color-neutral-100);
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
  .dark\\:border-red-500 {
    &:where(.dark, .dark *) {
      border-color: var(--color-red-500);
    }
  }
  .dark\\:border-yellow-500 {
    &:where(.dark, .dark *) {
      border-color: var(--color-yellow-500);
    }
  }
  .dark\\:border-r-neutral-100 {
    &:where(.dark, .dark *) {
      border-right-color: var(--color-neutral-100);
    }
  }
  .dark\\:border-b-neutral-100 {
    &:where(.dark, .dark *) {
      border-bottom-color: var(--color-neutral-100);
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
  .dark\\:bg-\\[\\#916b20\\] {
    &:where(.dark, .dark *) {
      background-color: #916b20;
    }
  }
  .dark\\:bg-bg-primary {
    &:where(.dark, .dark *) {
      background-color: var(--color-bg-primary);
    }
  }
  .dark\\:bg-black {
    &:where(.dark, .dark *) {
      background-color: var(--color-black);
    }
  }
  .dark\\:bg-blue-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-blue-800);
    }
  }
  .dark\\:bg-blue-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-blue-900);
    }
  }
  .dark\\:bg-gray-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-gray-800);
    }
  }
  .dark\\:bg-green-700 {
    &:where(.dark, .dark *) {
      background-color: var(--color-green-700);
    }
  }
  .dark\\:bg-green-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-green-900);
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
  .dark\\:bg-red-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-red-800);
    }
  }
  .dark\\:bg-red-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-red-900);
    }
  }
  .dark\\:bg-white\\/30 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, #fff 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-white) 30%, transparent);
      }
    }
  }
  .dark\\:bg-yellow-600 {
    &:where(.dark, .dark *) {
      background-color: var(--color-yellow-600);
    }
  }
  .dark\\:bg-yellow-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-yellow-900);
    }
  }
  .dark\\:to-neutral-900 {
    &:where(.dark, .dark *) {
      --tw-gradient-to: var(--color-neutral-900);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:to-neutral-950 {
    &:where(.dark, .dark *) {
      --tw-gradient-to: var(--color-neutral-950);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:\\!text-white {
    &:where(.dark, .dark *) {
      color: var(--color-white) !important;
    }
  }
  .dark\\:text-blue-200 {
    &:where(.dark, .dark *) {
      color: var(--color-blue-200);
    }
  }
  .dark\\:text-blue-300 {
    &:where(.dark, .dark *) {
      color: var(--color-blue-300);
    }
  }
  .dark\\:text-blue-400 {
    &:where(.dark, .dark *) {
      color: var(--color-blue-400);
    }
  }
  .dark\\:text-neutral-50 {
    &:where(.dark, .dark *) {
      color: var(--color-neutral-50);
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
  .dark\\:text-orange-400 {
    &:where(.dark, .dark *) {
      color: var(--color-orange-400);
    }
  }
  .dark\\:text-red-300 {
    &:where(.dark, .dark *) {
      color: var(--color-red-300);
    }
  }
  .dark\\:text-red-400 {
    &:where(.dark, .dark *) {
      color: var(--color-red-400);
    }
  }
  .dark\\:text-white {
    &:where(.dark, .dark *) {
      color: var(--color-white);
    }
  }
  .dark\\:shadow-\\[0_0_0_1px_rgba\\(255\\,255\\,255\\,0\\.5\\)_inset\\] {
    &:where(.dark, .dark *) {
      --tw-shadow: 0 0 0 1px var(--tw-shadow-color, rgba(255,255,255,0.5)) inset;
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
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
  .dark\\:hover\\:bg-neutral-800 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-800);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-850 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-850);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-900 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-900);
        }
      }
    }
  }
  .dark\\:hover\\:bg-red-800 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-red-800);
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
  .hover\\:dark\\:bg-neutral-900 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark, .dark *) {
          background-color: var(--color-neutral-900);
        }
      }
    }
  }
  .dark\\:hover\\:text-white {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-white);
        }
      }
    }
  }
  .dark\\:focus\\:bg-red-800 {
    &:where(.dark, .dark *) {
      &:focus {
        background-color: var(--color-red-800);
      }
    }
  }
  .starting\\:w-0 {
    @starting-style {
      width: calc(var(--spacing) * 0);
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
  --color-bg-primary: #0a0a0a;
  --color-bg-secondary: var(--color-neutral-950);
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
.z-modal {
  z-index: 9999;
}
.border-color {
  border-color: var(--color-ob-border);
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
@keyframes bounce-in {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
.animate-bounce-in {
  animation: bounce-in 0.4s ease-out;
}
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
@keyframes text-shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
.skeleton-line {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  height: 0.5rem;
  width: var(--skeleton-width);
}
.skeleton-line::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: shimmer var(--shimmer-duration, 1.5s) var(--shimmer-delay, 0s) infinite ease-in-out;
  content: '';
}
.skeleton-line {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  height: 0.5rem;
  width: var(--skeleton-width);
  background-color: #f3f4f6;
}
.skeleton-line::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: shimmer var(--shimmer-duration, 1.5s) var(--shimmer-delay, 0s) infinite ease-in-out;
  content: '';
  background: linear-gradient( 90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 50%, rgba(0, 0, 0, 0) 100% );
}
.dark .skeleton-line {
  background-color: rgba(255, 255, 255, 0.06);
}
.dark .skeleton-line::after {
  background: linear-gradient( 90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 100% );
}
.text-shimmer {
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: text-shimmer 2s ease-in-out infinite;
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
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-gradient-position {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-via {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-to {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-via-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0%;
}
@property --tw-gradient-via-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 50%;
}
@property --tw-gradient-to-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 100%;
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
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
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
      --tw-space-y-reverse: 0;
      --tw-divide-y-reverse: 0;
      --tw-border-style: solid;
      --tw-gradient-position: initial;
      --tw-gradient-from: #0000;
      --tw-gradient-via: #0000;
      --tw-gradient-to: #0000;
      --tw-gradient-stops: initial;
      --tw-gradient-via-stops: initial;
      --tw-gradient-from-position: 0%;
      --tw-gradient-via-position: 50%;
      --tw-gradient-to-position: 100%;
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
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(U, _, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function r(a) {
				if (!t.o(e, a)) return Promise.resolve().then(function() {
					var f = new Error("Cannot find module '" + a + "'");
					throw f.code = "MODULE_NOT_FOUND", f
				});
				var u = e[a],
					l = u[0];
				return t.e(u[1]).then(function() {
					return t.t(l, 1 | 16)
				})
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", U.exports = r
		}
	}
]);

//# debugId=b139872c-cd8e-54d5-bfb8-a39a960f50af