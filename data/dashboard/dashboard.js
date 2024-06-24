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
					return h
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
					var E, N, k;
					return Object.prototype.hasOwnProperty.call(v, d) ? v[d] : ((E = window) === null || E === void 0 || (N = E.bootstrap) === null || N === void 0 || (k = N.data) === null || k === void 0 ? void 0 : k.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(y => y === d) ? (v[d] = !0, !0) : (v[d] = !1, !1)
				},
				o = d => f.Z ? f.Z.get(`cf_beta.${d}`) === !0 : !1,
				c = d => o(d) || t(d),
				g = () => !0,
				a = () => {
					var d, E, N;
					return ((d = window) === null || d === void 0 || (E = d.bootstrap) === null || E === void 0 || (N = E.data) === null || N === void 0 ? void 0 : N.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				h = d => {
					const E = (0, e.uF)(d),
						N = (E == null ? void 0 : E.roles) || [];
					return (0, r.qR)(location.pathname) && N.length === 1 && N.some(k => k === "Administrator Read Only")
				}
		},
		"../init.ts": function(V, _, n) {
			"use strict";
			n.r(_);
			var e = n("../../../../node_modules/url-search-params-polyfill/index.js"),
				r = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				s = n("../../../../node_modules/fetch-intercept/lib/browser.js");

			function p(b) {
				for (var U = 1; U < arguments.length; U++) {
					var ee = arguments[U] != null ? Object(arguments[U]) : {},
						ae = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(ee).filter(function(ve) {
						return Object.getOwnPropertyDescriptor(ee, ve).enumerable
					})), ae.forEach(function(ve) {
						f(b, ve, ee[ve])
					})
				}
				return b
			}

			function f(b, U, ee) {
				return U = i(U), U in b ? Object.defineProperty(b, U, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[U] = ee, b
			}

			function i(b) {
				var U = u(b, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function u(b, U) {
				if (typeof b != "object" || b === null) return b;
				var ee = b[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ae = ee.call(b, U || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(b)
			}
			const l = b => {
				const U = b && b.headers || {},
					ee = new Headers(U);
				return ee.append("X-Cross-Site-Security", "dash"), p({}, b, {
					headers: ee
				})
			};
			(0, s.register)({
				request: (b, U) => {
					try {
						return new URL(b), b === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", U] : [b, U]
					} catch {
						return [b, l(U)]
					}
				}
			});
			var v = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				o = n("../react/app/providers/storeContainer.js");
			let c = "";
			const g = 61;

			function a(b) {
				const U = b.substr(1);
				if (U && c !== U) {
					const ee = document.getElementById(U);
					if (ee) {
						const ae = ee.getBoundingClientRect().top;
						if (ae > 0) {
							const ve = ae - g;
							document.documentElement.scrollTop = ve
						}
					}
				}
				c = U
			}

			function h(b) {
				b.listen(U => a(U.hash))
			}
			var d = n("../../../../node_modules/cookie/index.js"),
				E = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const N = "CF_dash_version",
				k = "current",
				y = "hash",
				S = "deploymentPreview",
				C = b => b === k ? w() : F(),
				w = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				F = (b = 72) => {
					const U = 36e5;
					return new Date(Date.now() + b * U)
				},
				Y = b => {
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
				te = (b, U = !1) => {
					var ee;
					const ae = Y(b),
						ve = `
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
    <h1 id="error-title">${ae.title}</h1>
    <p id="error-description">${ae.description}</p>
  </div>
  `,
						De = U ? `
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
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(ee=window.build)===null||ee===void 0?void 0:ee.branch}</span>.</p>
      <a href="/version?hash=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return ve + De
				},
				ne = b => {
					var U;
					const ee = document.getElementById(b);
					!ee || (U = ee.parentNode) === null || U === void 0 || U.removeChild(ee)
				};

			function X() {
				const b = document.getElementById("loading-state");
				b == null || b.classList.add("hide"), b == null || b.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(ne)
				})
			}

			function J(b) {
				var U;
				const ee = document.getElementById("loading-state"),
					ae = !!((U = d.parse(document.cookie)) === null || U === void 0 ? void 0 : U[N]);
				!ee || (ee.innerHTML = te(b == null ? void 0 : b.code, ae))
			}
			var M = n("../utils/initStyles.ts"),
				G = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				ie = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				x = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				pe = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				q = n("../../../../node_modules/history/esm/history.js"),
				D = (0, q.lX)(),
				H = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Q = n("../react/utils/url.ts");
			const le = (0, H.Rf)();
			let $;

			function se(b) {
				return ge(b, "react-router-v5")
			}

			function ge(b, U) {
				return (ee, ae = !0, ve = !0) => {
					ae && le && le.location && ($ = ee({
						name: (0, Q.Fl)(le.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": U
						}
					})), ve && b.listen && b.listen((De, Se) => {
						if (Se && (Se === "PUSH" || Se === "POP")) {
							$ && $.finish();
							const rt = {
								"routing.instrumentation": U
							};
							$ = ee({
								name: (0, Q.Fl)(De.pathname),
								op: "navigation",
								tags: rt
							})
						}
					})
				}
			}
			var L = n("../react/common/selectors/languagePreferenceSelector.ts"),
				A = n("../flags.js"),
				R = n("../utils/getDashVersion.ts"),
				W = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow?5628"),
				re = n.n(W),
				_e = n("../../../common/intl/intl-core/src/errors.ts"),
				Ie = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				B = n("../react/common/middleware/sparrow/errors.ts");
			const ue = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				Oe = !0,
				ze = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				$e = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function Me(b, U, ee) {
				return U = Ne(U), U in b ? Object.defineProperty(b, U, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[U] = ee, b
			}

			function Ne(b) {
				var U = Ye(b, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function Ye(b, U) {
				if (typeof b != "object" || b === null) return b;
				var ee = b[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ae = ee.call(b, U || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(b)
			}
			class Qe {
				constructor() {
					Me(this, "name", Qe.id)
				}
				setupOnce() {
					n.g.console && (0, Ie.hl)(n.g.console, "error", U => (...ee) => {
						const ae = ee.find(ve => ve instanceof Error);
						if (ue && ae) {
							let ve, De = !0;
							if (ae instanceof B.ez) {
								const Se = ae instanceof B.oV ? ae.invalidProperties : void 0;
								ve = {
									tags: {
										"sparrow.eventName": ae.eventName
									},
									extra: {
										sparrow: {
											eventName: ae.eventName,
											invalidProperties: Se
										}
									},
									fingerprint: [ae.name ? ae.name : "SparrowValidationError"]
								}, De = !1
							} else if (ae instanceof W.SparrowIdCookieError) ve = {
								extra: {
									sparrowIdCookie: ae.cookie
								},
								fingerprint: [ae.name ? ae.name : "SparrowIdCookieError"]
							};
							else if (ae.name === "ChunkLoadError") {
								ve = {
									fingerprint: [ae.name]
								};
								try {
									ve.tags = {
										chunkId: ae.message.split(" ")[2],
										chunkUrl: ae.request
									}
								} catch {}
							} else ae instanceof _e.YB && (ve = {
								fingerprint: ["TranslatorError", ae.translationKey]
							});
							De && v.Tb(ae, ve)
						}
						typeof U == "function" && U.apply(n.g.console, ee)
					})
				}
			}
			Me(Qe, "id", "ConsoleErrorIntegration");
			var ot = null,
				Je = n("../utils/sentry/lastSentEventId.ts"),
				tt = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				Ke = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const nt = b => {
					const U = async ee => {
						var ae, ve;
						const De = {
							envelope: ee.body,
							url: b.url,
							isPreviewDeploy: (ae = window) === null || ae === void 0 || (ve = ae.build) === null || ve === void 0 ? void 0 : ve.isPreviewDeploy,
							release: (0, R.t)()
						};
						try {
							const Se = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(De)
							});
							return {
								statusCode: Se.status,
								headers: {
									"x-sentry-rate-limits": Se.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": Se.headers.get("Retry-After")
								}
							}
						} catch (Se) {
							return console.log(Se), (0, Ke.$2)(Se)
						}
					};
					return tt.q(b, U)
				},
				Xe = () => {
					if (ue && Oe) {
						var b, U, ee, ae, ve, De, Se, rt, ht, st;
						let $t = "production";
						((b = window) === null || b === void 0 || (U = b.build) === null || U === void 0 ? void 0 : U.isPreviewDeploy) && ($t += "-preview"), ie.S({
							dsn: ue,
							release: (0, R.t)(),
							environment: $t,
							ignoreErrors: $e,
							allowUrls: ze,
							autoSessionTracking: !1,
							integrations: [new x.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new Qe, new pe.jK.BrowserTracing({
								routingInstrumentation: se(D)
							})],
							tracesSampleRate: 0,
							transport: nt,
							beforeSend: tn => (Je.e.setEventId(tn.event_id), tn)
						});
						const an = (0, o.bh)().getState();
						v.rJ({
							LOCAL_STORAGE_FLAGS: (0, A.Qw)(),
							USER_BETA_FLAGS: (0, A.ki)(),
							meta: {
								connection: {
									type: (ee = window) === null || ee === void 0 || (ae = ee.navigator) === null || ae === void 0 || (ve = ae.connection) === null || ve === void 0 ? void 0 : ve.effectiveType,
									bandwidth: (De = window) === null || De === void 0 || (Se = De.navigator) === null || Se === void 0 || (rt = Se.connection) === null || rt === void 0 ? void 0 : rt.downlink
								},
								languagePreference: (0, L.r)(an),
								isPreviewDeploy: (ht = window) === null || ht === void 0 || (st = ht.build) === null || st === void 0 ? void 0 : st.isPreviewDeploy
							},
							utilGates: (0, G.T2)(an)
						}), window.addEventListener("unhandledrejection", function(tn) {})
					}
				},
				fe = b => {
					b ? v.av({
						id: b
					}) : v.av(null)
				};
			var ce = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				I = () => {
					let b;
					try {
						b = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), b = window.location.search
					}
					if (!b.includes("remote[")) return;
					const U = new URLSearchParams(b),
						ee = {};
					for (let [ae, ve] of U) ae.includes("remote") && (ee[ae.replace(/remote\[|\]/g, "")] = ve);
					ce.Z.set("mfe-remotes", JSON.stringify(ee))
				},
				Z = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				Ee = n("../node_modules/uuid/dist/esm-browser/v4.js");
			const Le = "ANON_USER_ID";

			function Re() {
				var b, U, ee, ae;
				let ve = (b = n.g) === null || b === void 0 || (U = b.bootstrap) === null || U === void 0 || (ee = U.data) === null || ee === void 0 || (ae = ee.user) === null || ae === void 0 ? void 0 : ae.id;
				if (!ve) {
					let De = ce.Z.get(Le);
					if (!De) {
						let Se = (0, Ee.Z)();
						ce.Z.set(Le, Se), De = Se
					}
					return De
				}
				return ve
			}
			async function ke() {
				const b = (0, o.bh)();
				b.dispatch((0, Z.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await b.dispatch((0, G.UL)({
					userId: Re()
				}))
			}
			var Be = n("../libs/init/initBootstrap.ts"),
				je = n("webpack/sharing/consume/default/react/react"),
				be = n.n(je),
				Ue = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				He = n("webpack/sharing/consume/default/react-dom/react-dom"),
				Ge = n("webpack/sharing/consume/default/react-redux/react-redux"),
				it = n("../../../../node_modules/swr/core/dist/index.mjs"),
				ct = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				j = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				oe = n("../react/shims/focus-visible.js"),
				ye = n("../react/app/components/DeepLink/index.ts"),
				Te = n("../../../../node_modules/prop-types/index.js"),
				we = n.n(Te),
				xe = n("../react/utils/translator.tsx"),
				qe = n("../../../common/intl/intl-react/src/index.ts"),
				Pe = n("../../../dash/intl/intl-translations/src/index.ts"),
				Ct = n("../../../../node_modules/query-string/query-string.js"),
				T = n.n(Ct),
				O = n("../react/common/actions/userActions.ts"),
				K = n("../react/common/selectors/userSelectors.ts"),
				de = n("../react/utils/i18n.ts"),
				Ce = n("../react/utils/bootstrap.ts");

			function et(b) {
				for (var U = 1; U < arguments.length; U++) {
					var ee = arguments[U] != null ? Object(arguments[U]) : {},
						ae = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(ee).filter(function(ve) {
						return Object.getOwnPropertyDescriptor(ee, ve).enumerable
					})), ae.forEach(function(ve) {
						lt(b, ve, ee[ve])
					})
				}
				return b
			}

			function lt(b, U, ee) {
				return U = bt(U), U in b ? Object.defineProperty(b, U, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[U] = ee, b
			}

			function bt(b) {
				var U = gt(b, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function gt(b, U) {
				if (typeof b != "object" || b === null) return b;
				var ee = b[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ae = ee.call(b, U || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(b)
			}
			let Ze = T().parse(location.search);
			const ut = b => {
					const U = (0, Ce.$8)() ? [(0, Pe.Fy)(Pe.if.changes), (0, Pe.Fy)(Pe.if.common), (0, Pe.Fy)(Pe.if.navigation), (0, Pe.Fy)(Pe.if.overview), (0, Pe.Fy)(Pe.if.onboarding), (0, Pe.Fy)(Pe.if.invite), (0, Pe.Fy)(Pe.if.login), (0, Pe.Fy)(Pe.if.dns), (0, Pe.Fy)(Pe.n4.ssl_tls), (0, Pe.Fy)(Pe.if.message_inbox)] : [(0, Pe.Fy)(Pe.if.common), (0, Pe.Fy)(Pe.if.invite), (0, Pe.Fy)(Pe.if.login), (0, Pe.Fy)(Pe.if.onboarding)];
					Ze.lang ? ft(b) : ce.Z.get(de.th) && dt(b, ce.Z.get(de.ly));
					const ee = async ae => (await Promise.all(U.map(De => De(ae)))).reduce((De, Se) => et({}, De, Se), {});
					return be().createElement(qe.RD.Provider, {
						value: b.languagePreference
					}, be().createElement(qe.bd, {
						translator: xe.Vb,
						locale: b.languagePreference
					}, be().createElement(qe.lm, {
						loadPhrases: ee
					}, b.children)))
				},
				ft = async b => {
					let U = Ze.lang.substring(0, Ze.lang.length - 2) + Ze.lang.substring(Ze.lang.length - 2, Ze.lang.length).toUpperCase();
					if (!(0, L.v)(U)) {
						console.warn(`${U} is not a supported locale.`), delete Ze.lang, b.history.replace({
							search: T().stringify(Ze)
						});
						return
					}
					ce.Z.set(de.ly, U), delete Ze.lang, dt(b, U), b.isAuthenticated || b.history.replace({
						search: T().stringify(Ze)
					})
				}, dt = async (b, U) => {
					if (b.isAuthenticated) try {
						await b.setUserCommPreferences({
							"language-locale": U
						}, {
							hideErrorAlert: !0
						}), ce.Z.remove(de.th), b.history.replace({
							search: T().stringify(Ze)
						})
					} catch (ee) {
						ce.Z.set(de.th, !0), console.error(ee)
					} else ce.Z.set(de.th, !0)
				}, Tt = b => {
					const U = (0, K.PR)(b);
					return {
						isAuthenticated: !!(U && U.id),
						languagePreference: ce.Z.get(de.ly) || (0, L.r)(b)
					}
				}, at = {
					setUserCommPreferences: O.V_
				};
			var At = (0, Ue.withRouter)((0, Ge.connect)(Tt, at)(ut));
			ut.propTypes = {
				history: we().object,
				languagePreference: we().string.isRequired,
				children: we().node.isRequired,
				isAuthenticated: we().bool,
				setUserCommPreferences: we().func.isRequired
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
			class me extends be().Component {
				componentDidMount() {
					P.messages && this.dispatchNotificationActions(P.messages)
				}
				dispatchNotificationActions(U) {
					U.forEach(ee => {
						const {
							type: ae,
							message: ve,
							persist: De
						} = ee;
						["success", "info", "warn", "error"].includes(ae) && this.props.notifyAdd(ae, (0, xe.ZP)(ve), {
							persist: !!De
						})
					})
				}
				render() {
					return null
				}
			}
			var We = (0, Ue.withRouter)((0, Ge.connect)(null, {
				notifyAdd: Kt.IH
			})(me));
			me.propTypes = {
				notifyAdd: we().func.isRequired
			};
			var Fe = n("../react/app/redux/index.ts");

			function pt() {
				var b;
				const U = (0, Fe.p4)(K.PR),
					ee = (U == null || (b = U.email) === null || b === void 0 ? void 0 : b.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ae = (0, Z.Yc)();
				(0, je.useEffect)(() => {
					ae({
						userType: ee
					})
				}, [ee, ae])
			}
			var Et = n("../react/common/selectors/entitlementsSelectors.ts"),
				_t = n("../react/common/selectors/accountSelectors.ts");
			const St = ["accountId", "is_ent"];

			function Ot() {
				const b = (0, Z.f7)(),
					U = (0, Ue.useHistory)(),
					ee = (0, Q.uW)(U.location.pathname),
					ae = (0, Z.Yc)(),
					ve = (0, Z.O$)(),
					De = (0, Fe.p4)(Et.u1),
					Se = !De.isRequesting && !!De.data,
					rt = (0, Fe.p4)(Et.p1),
					ht = (0, Fe.p4)(_t.Xu),
					st = (0, Fe.p4)(_t.uF),
					$t = !ht.isRequesting && !!ht.data;
				(0, je.useEffect)(() => {
					ee && $t && st && Se && ee === st.account.id ? ae({
						accountId: st.account.id,
						is_ent: rt
					}) : (!ee || ee in b && b.accountId !== ee) && ve(St)
				}, [$t, st, ae, ve, Se, rt, ee, b])
			}
			var It = n("../react/common/selectors/zoneSelectors.ts");

			function wt() {
				const b = (0, Fe.p4)(It.nA),
					U = (0, Z.Yc)();
				(0, je.useEffect)(() => {
					var ee;
					U({
						zone_id: b == null ? void 0 : b.id,
						zone_plan: b == null || (ee = b.plan) === null || ee === void 0 ? void 0 : ee.legacy_id
					})
				}, [b, U])
			}
			const Dt = () => (pt(), Ot(), wt(), null);
			var Lt = n("../react/app/components/Persistence/index.tsx"),
				Rt = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				kt = n("../react/app/components/LoadingSuspense.tsx");
			const Mt = be().lazy(() => Promise.all([n.e(2480), n.e(49298), n.e(4616), n.e(72019), n.e(19462), n.e(5668), n.e(7484), n.e(39760), n.e(96988), n.e(22734), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var Nt = () => be().createElement(kt.Z, null, be().createElement(Mt, null));
			const jt = () => (je.useEffect(() => X, []), null);
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
					const b = (0, Fe.p4)(L.r);
					(0, je.useEffect)(() => {
						const U = Bt(b);
						U !== vt().locale() && vt().locale(U), document.documentElement.lang = b
					}, [b])
				},
				Vt = () => {
					(0, je.useEffect)(() => {
						var b, U;
						let ee;
						if (((b = window) === null || b === void 0 || (U = b.build) === null || U === void 0 ? void 0 : U.isPreviewDeploy) && (ee = "cookie"), !!ee) try {
							const ae = document.head.querySelector("link[rel=icon]");
							ae && (ae.href = n("../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${ee}.ico`))
						} catch {}
					}, [])
				};
			var Yt = n("../react/common/constants/constants.ts");
			const Qt = () => {
				var b;
				const U = (0, Ue.useLocation)(),
					[ee, ae] = (0, je.useState)(((b = window) === null || b === void 0 ? void 0 : b.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
				return (0, je.useEffect)(() => {
					const ve = T().parse(U.search);
					if (ve.pt && ce.Z.set(Yt.sJ, ve.pt), ve == null ? void 0 : ve.devPanel) {
						var De, Se;
						(De = window) === null || De === void 0 || (Se = De.localStorage) === null || Se === void 0 || Se.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ae(!0)
					}
				}, [U.search]), {
					devPanelEnabled: ee
				}
			};
			var Jt = n("../react/common/components/SAMLSubmit/SAMLSubmit.tsx");
			const Xt = be().lazy(() => Promise.all([n.e(2480), n.e(49298), n.e(4616), n.e(72019), n.e(19462), n.e(36273), n.e(72793), n.e(7484), n.e(39760), n.e(96988), n.e(22734), n.e(94452), n.e(85918), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				Ve = be().lazy(() => Promise.all([n.e(49298), n.e(36273), n.e(96988), n.e(69088), n.e(94452), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var sn = ({
					userIsAuthed: b
				}) => {
					xt(), Vt();
					const {
						devPanelEnabled: U
					} = Qt();
					return be().createElement(je.Suspense, {
						fallback: be().createElement(jt, null)
					}, be().createElement(Ue.Switch, null, !b && !0 && be().createElement(Ue.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, be().createElement(Ve, null)), be().createElement(Ue.Route, {
						render: () => be().createElement(Rt.ZC, {
							minHeight: "100vh"
						}, be().createElement(Xt, null))
					})), U && be().createElement(Nt, null), be().createElement(Jt.Z, {
						userIsAuthed: b,
						spInitiated: !0
					}))
				},
				en = n("../../../../node_modules/yup/es/index.js"),
				cn = n("../../../common/util/types/src/utils/index.ts");
			const nn = {
				cfEmail: () => en.Z_().email((0, xe.ZP)("common.validation.email")).required((0, xe.ZP)("common.validation.email"))
			};
			(0, cn.Yd)(nn).forEach(b => {
				en.kM(en.Z_, b, nn[b])
			});
			const rn = be().lazy(() => Promise.all([n.e(4616), n.e(6368), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				ln = () => {
					const b = (0, Ce.$8)(),
						[U, ee] = (0, je.useState)(b ? rn : be().Fragment),
						[ae, ve] = (0, je.useState)((0, E.Yc)());
					(0, je.useEffect)(() => {
						(0, E.fF)(() => ve((0, E.Yc)()))
					}, []);
					const De = Se => {
						ve(Se), (0, E.C8)(Se)
					};
					return (0, je.useEffect)(() => {
						ee(b ? rn : be().Fragment)
					}, [b]), (0, je.useEffect)(() => {
						const Se = () => De(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Se), () => {
							window.removeEventListener("storage", Se)
						}
					}, []), be().createElement(je.Suspense, {
						fallback: null
					}, be().createElement(Ge.Provider, {
						store: (0, o.bh)()
					}, be().createElement(Ue.Router, {
						history: D
					}, be().createElement(U, null, be().createElement(yt.Z, {
						renderer: zt()
					}, be().createElement(At, null, be().createElement(Zt.Z, {
						sentryTag: "Root"
					}, be().createElement(it.J$, {
						value: {
							fetcher: Se => fetch(Se).then(rt => rt.json())
						}
					}, be().createElement(Dt, null), be().createElement(We, null), be().createElement(Lt.Z_, {
						onDarkModeChangeCb: De
					}, be().createElement(ye.ZP, null, be().createElement(sn, {
						userIsAuthed: b
					}))), be().createElement(Ht.ZP, null), be().createElement(ct.F0, null)))))))))
				},
				un = () => {
					(0, He.render)(be().createElement(ln, null), document.getElementById("react-app"))
				};
			var mt = n("../utils/initSparrow.ts"),
				Ft = n("../utils/zaraz.ts");
			const dn = () => {
					const b = (0, K.PR)((0, o.bh)().getState());
					pn(), (0, mt.Ug)(), (0, Ft.bM)(), (b == null ? void 0 : b.id) && re().setUserId(b == null ? void 0 : b.id), (0, mt.yV)(), !(0, mt.Wi)() && (0, mt.IM)(), b ? (0, Ft.yn)(b) : (0, Ft.Ro)()
				},
				pn = () => {
					var b, U;
					(b = window) === null || b === void 0 || (U = b.OneTrust) === null || U === void 0 || U.OnConsentChanged(() => {
						const ee = (0, K.PR)((0, o.bh)().getState());
						(0, mt.Wi)() ? (re().setEnabled(!0), (ee == null ? void 0 : ee.id) ? (re().setUserId(ee.id), (0, Ft.yn)(ee)) : (0, Ft.Ro)(), (0, mt.yV)()) : (re().setEnabled(!1), (0, mt.IM)())
					})
				};

			function mn(b) {
				for (var U = 1; U < arguments.length; U++) {
					var ee = arguments[U] != null ? Object(arguments[U]) : {},
						ae = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(ee).filter(function(ve) {
						return Object.getOwnPropertyDescriptor(ee, ve).enumerable
					})), ae.forEach(function(ve) {
						gn(b, ve, ee[ve])
					})
				}
				return b
			}

			function gn(b, U, ee) {
				return U = fn(U), U in b ? Object.defineProperty(b, U, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[U] = ee, b
			}

			function fn(b) {
				var U = yn(b, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function yn(b, U) {
				if (typeof b != "object" || b === null) return b;
				var ee = b[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ae = ee.call(b, U || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(b)
			}
			const on = b => {
				v.Tb(b), J(b)
			};
			try {
				n.g.build = mn({}, {
					branch: "master",
					isReleaseCandidate: "true",
					commit: "e04e1d083adfc82fec1ef8dae1046f4af052dd62",
					dashVersion: "839b18227e9b1619a1c004646b34d66392c022ed",
					env: "production",
					builtAt: 1719247069577,
					versions: {
						"@cloudflare/app-dash": "25.161.22",
						node: "20.10.0",
						yarn: "3.2.2",
						webpack: "5.88.2"
					}
				}, {
					isPreviewDeploy: (0, R.p)()
				}), Xe(), n("../react/utils/api.ts"), h(D), (0, M.Z)(), I(), (0, Be.k)().then(async b => {
					var U;
					const ee = (0, o.bh)(),
						ae = (b == null ? void 0 : b.data) || {};
					ee.dispatch((0, t.mW)("user", ae == null ? void 0 : ae.user));
					const ve = b == null || (U = b.data) === null || U === void 0 ? void 0 : U.user;
					return n.g.bootstrap = b, ve && ve.id && fe(ve.id), await ke(), dn(), un()
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

			function t(ne) {
				for (var X = 1; X < arguments.length; X++) {
					var J = arguments[X] != null ? Object(arguments[X]) : {},
						M = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(J).filter(function(G) {
						return Object.getOwnPropertyDescriptor(J, G).enumerable
					})), M.forEach(function(G) {
						o(ne, G, J[G])
					})
				}
				return ne
			}

			function o(ne, X, J) {
				return X = c(X), X in ne ? Object.defineProperty(ne, X, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[X] = J, ne
			}

			function c(ne) {
				var X = g(ne, "string");
				return typeof X == "symbol" ? X : String(X)
			}

			function g(ne, X) {
				if (typeof ne != "object" || ne === null) return ne;
				var J = ne[Symbol.toPrimitive];
				if (J !== void 0) {
					var M = J.call(ne, X || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (X === "string" ? String : Number)(ne)
			}
			class a {
				constructor(X, J) {
					o(this, "deepLink", void 0), o(this, "legacyDeepLink", void 0), o(this, "resolvers", void 0), o(this, "startTime", Date.now()), o(this, "endTime", Date.now()), o(this, "_done", !1), o(this, "resolverStart", M => {
						this.resolvers.set(M, {
							name: M,
							startTime: Date.now(),
							userActions: []
						})
					}), o(this, "resolverDone", M => {
						const G = this.resolvers.get(M);
						G && (G.endTime = Date.now(), this.resolvers.set(M, G))
					}), o(this, "resolverCancel", M => {
						this.resolverDone(M), this.cancel()
					}), o(this, "start", () => {
						this.startTime = Date.now()
					}), o(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), o(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), o(this, "createUserActionTracker", M => {
						const G = "NO_ACTION",
							ie = {
								actionType: G,
								startTime: 0
							};
						return {
							start: (x = G) => {
								const pe = this.resolvers.get(M);
								ie.actionType = x, ie.startTime = Date.now(), pe && pe.userActions.push(ie)
							},
							finish: (x = G) => {
								ie.actionType = x, ie.endTime = Date.now()
							},
							cancel: (x = G) => {
								ie.actionType = x, ie.endTime = Date.now(), this.resolverCancel(M)
							}
						}
					}), this.deepLink = X, this.legacyDeepLink = J, this.resolvers = new Map
				}
				track(X) {
					try {
						if (this._done) return;
						this._done = !0;
						const J = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: h(this.startTime, this.endTime),
								totalCpuTime: h(this.startTime, this.endTime)
							},
							M = this.resolvers.size === 0 ? J : Array.from(this.resolvers.values()).reduce((G, ie) => {
								const x = h(ie.startTime, ie.endTime),
									pe = ie.userActions.reduce((z, D) => {
										const H = h(D.startTime, D.endTime);
										return {
											totalTime: z.totalTime + H,
											actions: z.actions.set(D.actionType, H)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									q = x - pe.totalTime;
								return t({}, G, {
									totalTime: G.totalTime + x,
									totalUserActionsTime: G.totalUserActionsTime + pe.totalTime,
									totalCpuTime: G.totalCpuTime + q,
									[`${ie.name}ResolverTotalTime`]: x,
									[`${ie.name}ResolverTotalCpuTime`]: q,
									[`${ie.name}ResolverTotalUserActionsTime`]: pe.totalTime
								}, Array.from(pe.actions.keys()).reduce((z, D) => t({}, z, {
									[`${ie.name}Resolver/${D}`]: pe.actions.get(D)
								}), {}))
							}, t({}, J, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						v().sendEvent(X, M)
					} catch (J) {
						console.error(J)
					}
				}
			}

			function h(ne = Date.now(), X = Date.now()) {
				return (X - ne) / 1e3
			}
			var d = n("../react/app/components/DeepLink/constants.ts"),
				E = n("../react/common/hooks/useCachedState.ts"),
				N = n("../react/common/hooks/usePrevious.ts");

			function k(ne) {
				for (var X = 1; X < arguments.length; X++) {
					var J = arguments[X] != null ? Object(arguments[X]) : {},
						M = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(J).filter(function(G) {
						return Object.getOwnPropertyDescriptor(J, G).enumerable
					})), M.forEach(function(G) {
						y(ne, G, J[G])
					})
				}
				return ne
			}

			function y(ne, X, J) {
				return X = S(X), X in ne ? Object.defineProperty(ne, X, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[X] = J, ne
			}

			function S(ne) {
				var X = C(ne, "string");
				return typeof X == "symbol" ? X : String(X)
			}

			function C(ne, X) {
				if (typeof ne != "object" || ne === null) return ne;
				var J = ne[Symbol.toPrimitive];
				if (J !== void 0) {
					var M = J.call(ne, X || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (X === "string" ? String : Number)(ne)
			}
			var F = ({
					children: ne
				}) => {
					const X = (0, r.TZ)(),
						J = (0, s.useHistory)(),
						M = (0, N.Z)(J.location.pathname),
						G = (0, r.p4)(u.dd),
						[ie, x] = (0, e.useState)(!0),
						[pe, q] = (0, E.j)(void 0, {
							key: d.Fj
						}),
						[z, D] = (0, E.j)(void 0, {
							key: d.s$
						}),
						H = (0, f.$8)();
					let Q = new URLSearchParams(J.location.search);
					const le = (0, p.mL)(J.location.pathname, Q);
					let $ = null,
						se = null;
					if (Q.has(d.Tc) && Q.delete(d.Tc), Q.get(d.BV)) $ = Q.get(d.BV), J.location.hash && (se = J.location.hash);
					else if (pe) {
						const L = new URLSearchParams(pe);
						L.get(d.BV) && ($ = L.get(d.BV), Q = L)
					} else le && (Q.set(d.BV, le), $ = le);
					if ($ && d._h.test($)) {
						const L = Q.getAll(d.Kt),
							A = JSON.stringify(L);
						L.length && A !== z && D(A), Q.has(d.Tc) && Q.delete(d.Tc), Q.delete(d.Kt)
					}!H && pe === void 0 && $ && q(Q.toString());
					const ge = async () => {
						try {
							if ((0, p.I3)($) && H && !G) {
								pe && q(void 0), X.dispatch((0, i.r4)()), x(!0);
								const L = await (0, p.py)($, x, X, J, M, new a($, le ? `${J.location.pathname}${J.location.search}` : void 0));
								Q.delete(d.BV);
								const A = Q.toString();
								J.replace(k({}, J.location, {
									pathname: L,
									search: A
								}, se ? {
									hash: se
								} : {})), X.dispatch((0, i.WF)())
							}
						} catch (L) {
							X.dispatch((0, i.WF)()), console.error(L)
						} finally {
							x(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ge()
					}, [J.location.pathname, J.location.search, G]), (ie || (0, p.I3)($)) && H ? null : ne
				},
				Y = n("../react/app/components/DeepLink/reducer.ts"),
				te = F
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
			const p = k => k.replace(s.default.endsWithSlash, ""),
				f = k => {
					const y = p(k).split("/").slice(3);
					return y.length ? "/" + y.join("/") : ""
				},
				i = k => {
					const y = p(k).split("/").slice(2);
					return y.length ? `apps/${y.join("/")}` : "apps"
				};
			var u = n("../react/app/components/DeepLink/selectors.ts"),
				l = n("../react/app/components/DeepLink/constants.ts"),
				v = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const o = k => (0, v.Lb)(k) && (k.split(".").length > 1 || (0, t.v5)(k)),
				c = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				g = k => typeof k == "string" && k.startsWith("/"),
				a = (k, y) => S => new Promise((C, w) => {
					y.start();
					const F = k.subscribe(() => {
						const Y = (0, u.yI)(k.getState());
						Y === r.E ? (y.cancel(), F(), w("DeepLink: waitForAction out of context.")) : S(Y) && (y.finish(Y.type), F(), C(Y))
					})
				}),
				h = (k, y, S) => (C, w) => new Promise((F, Y) => {
					S.start();
					const te = y.location.pathname;
					C = new URL(C, window.location.href).pathname, te !== C && (S.cancel(), Y(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${C}", but on "${te}". You need to redirect to "${C}", and unblockRouter in your Resolver, before you use this function.`));
					const ne = k.subscribe(() => {
						const X = (0, u.yI)(k.getState()),
							J = y.location.pathname,
							G = new URLSearchParams(y.location.search).get(l.BV);
						(J !== C || !!G) && (S.cancel(), ne(), Y(`DeepLink: waitForPageAction user navigated away from "${C}" to "${J}${G?y.location.search:""}"`)), X === r.E ? (S.cancel(), ne(), Y("DeepLink: waitForPageAction out of context.")) : w(X) && (S.finish(X.type), ne(), F(X))
					})
				});

			function d(k) {
				const y = [],
					S = k.split("?")[0].split("/");
				for (let C of S) C.length !== 0 && (C.startsWith(":") ? y.push({
					value: C.substring(1),
					type: "dynamic"
				}) : y.push({
					value: C,
					type: "static"
				}));
				return y
			}
			async function E(k, y, S, C, w, F) {
				F.start();
				const Y = d(k),
					ne = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(7484), n.e(72775)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					X = {};
				let J = "";
				for (const [M, G] of Y.entries())
					if (G.type === "static") J = [J, G.value].join("/");
					else if (G.type === "dynamic" && c.is(G.value) && G.value in ne) {
					F.resolverStart(G.value);
					const ie = await ne[G.value]({
						deepLink: k,
						blockRouter: () => y(!0),
						unblockRouter: () => y(!1),
						routerHistory: C,
						resolvedValues: X,
						store: S,
						referringRoute: w,
						uri: {
							currentPartIdx: M,
							parts: Y
						},
						waitForAction: a(S, F.createUserActionTracker(G.value)),
						waitForPageAction: h(S, C, F.createUserActionTracker(G.value))
					});
					F.resolverDone(G.value), J = [J, ie].join("/"), X[G.value] = ie
				} else throw F.cancel(), new Error(`DeepLink: Resolver with name '${G.value}' is not supported.`);
				return F.done(), J
			}

			function N(k, y) {
				const S = ":account",
					C = ":zone",
					w = y.get("zone");
				if (w) return y.delete("zone"), `/${S}/${C}/${w}`;
				const F = y.get("account");
				if (F) return y.delete("account"), `/${S}/${F}`;
				if (k === "/overview") return `/${S}/${C}`;
				if (k === "/apps") return `/${S}/${C}/${i(k)}`;
				const Y = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const te of Y) {
					const ne = te.length;
					if (k.startsWith(te) && (k.length === ne || k[ne] === "/")) return `/${S}/${C}${k}`
				}
				switch (k) {
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
					const D = c()().format("YYYY"),
						H = Q => {
							l().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: Q
							})
						};
					return r().createElement(a, {
						marginTop: "auto"
					}, r().createElement(h, null, r().createElement(d, null, r().createElement(E, null, "\xA9 ", D, " Cloudflare, Inc."), r().createElement(E, null, r().createElement(N, null, r().createElement(k, {
						showOnDeskTop: !1
					}, r().createElement(y, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => H("Support")
					}, r().createElement(t.cC, {
						id: "common.support"
					}))), r().createElement(k, null, r().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => H("Privacy Policy")
					}, r().createElement(t.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(k, null, r().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => H("Terms of Use")
					}, r().createElement(t.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(k, null, r().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => H("Cookie Preferences")
					}, r().createElement(t.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(k, null, r().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => H("Trademark")
					}, r().createElement(t.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(N, null, r().createElement(k, null, r().createElement(y, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => H("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(t.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				a = (0, i.createComponent)(({
					theme: D,
					marginTop: H
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: H
				})),
				h = (0, i.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				d = (0, i.createComponent)(({
					theme: D
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${D.space[3]}px`
					}
				})),
				E = (0, i.createComponent)(({
					theme: D
				}) => ({
					width: "100%",
					color: D.colors.white,
					fontSize: D.fontSizes[1],
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
					theme: D
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: D.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				k = (0, i.createComponent)(({
					showOnDeskTop: D = !0,
					theme: H
				}) => ({
					color: H.colors.white,
					fontSize: H.fontSizes[1],
					height: "20px",
					display: D ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: H.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: H.space[3],
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
					theme: D
				}) => ({
					textDecoration: "none",
					color: D.colors.white,
					"&:hover": {
						color: D.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var S = g,
				C = n("../react/pages/welcome/routes.ts"),
				w = n("../react/utils/cookiePreferences.ts"),
				F = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				Y = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				ne = () => {
					const [D, H] = (0, e.useState)(!1), Q = (0, w.wV)(), le = () => {
						H(!0)
					}, $ = () => {
						H(!1)
					}, se = Q && Q === "US" ? (0, t.ZP)("footer.cpra_cta.privacy_choices") : (0, t.ZP)("footer.cpra_cta.cookie_preferences"), ge = {
						background: "transparent",
						borderRadius: "none",
						color: D ? (0, F.Yc)() ? "#ee730a" : "#003681" : (0, F.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: D ? "underline" : "none",
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
						style: ge,
						onMouseEnter: le,
						onMouseLeave: $
					}, r().createElement(p.Ei, {
						height: 15,
						src: Y,
						mr: 2,
						alt: se
					}), se)
				};

			function X() {
				return X = Object.assign ? Object.assign.bind() : function(D) {
					for (var H = 1; H < arguments.length; H++) {
						var Q = arguments[H];
						for (var le in Q) Object.prototype.hasOwnProperty.call(Q, le) && (D[le] = Q[le])
					}
					return D
				}, X.apply(this, arguments)
			}

			function J(D, H) {
				if (D == null) return {};
				var Q = M(D, H),
					le, $;
				if (Object.getOwnPropertySymbols) {
					var se = Object.getOwnPropertySymbols(D);
					for ($ = 0; $ < se.length; $++) le = se[$], !(H.indexOf(le) >= 0) && (!Object.prototype.propertyIsEnumerable.call(D, le) || (Q[le] = D[le]))
				}
				return Q
			}

			function M(D, H) {
				if (D == null) return {};
				var Q = {},
					le = Object.keys(D),
					$, se;
				for (se = 0; se < le.length; se++) $ = le[se], !(H.indexOf($) >= 0) && (Q[$] = D[$]);
				return Q
			}
			const G = 24,
				ie = (0, i.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,F.Yc)()?F.rS.colors.orange[6]:F.rS.colors.blue[4]}`
					}
				}), p.A),
				x = D => {
					let {
						onClick: H
					} = D, Q = J(D, ["onClick"]);
					return r().createElement(ie, X({
						onClick: le => {
							l().sendEvent("navigate footer nav", {
								destinationPage: Q.href
							}), H && H(le)
						}
					}, Q))
				},
				pe = D => {
					let {
						children: H,
						target: Q,
						rel: le
					} = D, $ = J(D, ["children", "target", "rel"]);
					return r().createElement(x, X({
						target: Q || "_blank",
						rel: le || "noopener noreferrer"
					}, $), H, r().createElement(f.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				};
			var z = () => {
				var D, H;
				const Q = [C.d.root.pattern].some(le => (0, s.matchPath)(location.pathname, {
					path: le
				}));
				return (0, v.PP)() ? r().createElement(S, null) : Q ? null : r().createElement(p.$_, {
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
				}, r().createElement(x, {
					"aria-label": (0, t.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${G}px`
				}, r().createElement(f.J, {
					type: "twitter",
					size: G
				})), r().createElement(x, {
					"aria-label": (0, t.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${G}px`
				}, r().createElement(f.J, {
					type: "facebook",
					size: G
				})), r().createElement(x, {
					"aria-label": (0, t.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${G}px`
				}, r().createElement(f.J, {
					type: "linkedin",
					size: G
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
					title: `Current version: ${((D=window)===null||D===void 0||(H=D.build)===null||H===void 0?void 0:H.dashVersion)||"unknown"}`
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
				}, (0, t.ZP)("footer.privacy_policy"))))), r().createElement(ne, null)))
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
					const h = window.setTimeout(() => a(!0), c);
					return () => window.clearTimeout(h)
				}, []), g
			}
			const t = ({
					loadingTimeout: c = 1e3,
					stillLoadingTimeout: g = 9e3
				}) => {
					const a = v(c),
						h = v(g);
					if ((0, l.nW)(), !a && !h) return r().createElement(u.Z, null);
					const d = h ? r().createElement(f.cC, {
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
					return ne
				},
				Tv: function() {
					return q
				},
				yZ: function() {
					return k
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
				for (var D = 1; D < arguments.length; D++) {
					var H = arguments[D] != null ? Object(arguments[D]) : {},
						Q = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && Q.push.apply(Q, Object.getOwnPropertySymbols(H).filter(function(le) {
						return Object.getOwnPropertyDescriptor(H, le).enumerable
					})), Q.forEach(function(le) {
						o(z, le, H[le])
					})
				}
				return z
			}

			function o(z, D, H) {
				return D = c(D), D in z ? Object.defineProperty(z, D, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[D] = H, z
			}

			function c(z) {
				var D = g(z, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function g(z, D) {
				if (typeof z != "object" || z === null) return z;
				var H = z[Symbol.toPrimitive];
				if (H !== void 0) {
					var Q = H.call(z, D || "default");
					if (typeof Q != "object") return Q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(z)
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
				d = (0, e.createContext)(h),
				E = d.Consumer,
				N = ({
					children: z,
					onDarkModeChangeCb: D
				}) => {
					const [H, Q] = (0, e.useState)(a), [le, $] = (0, e.useState)(h.isLoading), se = (0, i.$8)(), ge = (0, s.p4)(R => (0, u.wH)(R));
					(0, e.useEffect)(() => {
						se ? (0, l.yl)().then(R => {
							R && (Q(R), D(R.darkMode))
						}).finally(() => $(!1)) : $(!1)
					}, [se]);
					const L = (R, W) => !!H.favorites.find(re => re.type === "zone" && re.name === R && re.accountId === W),
						A = R => H.favorites.filter(re => re.type === "zone" && re.accountId === R).length < v;
					return r().createElement(d.Provider, {
						value: t({}, H, {
							isLoading: le,
							actions: {
								canAccountStarZone: A,
								isZoneStarred: L,
								starZone: async (R, W) => {
									var re;
									const _e = !L(R, W),
										Ie = A(W);
									if (_e && !Ie) {
										console.log("can not star zone - account is at limit");
										return
									}
									const B = await (0, l.lt)(R, W);
									f().sendEvent("click star zone", {
										isStarring: _e,
										totalStarredZones: B.filter(ue => ue.accountId === W && ue.type === "zone").length,
										totalZones: ge == null || (re = ge.paginationData) === null || re === void 0 ? void 0 : re.info.total_count
									}), Q(t({}, H, {
										favorites: B
									}))
								},
								setDarkMode: async R => {
									const W = await (0, l.C8)(R);
									Q(W), D(W.darkMode)
								},
								logRouteVisited: async R => {
									var W;
									const re = await (0, l.n)(R);
									Q((W = re) !== null && W !== void 0 ? W : t({}, H))
								},
								viewChange: async R => {
									const W = await (0, l.m6)(R);
									Q(t({}, H, {
										viewedChanges: W
									}))
								}
							}
						})
					}, z)
				},
				k = () => (0, e.useContext)(d);
			var y = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				S = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function C() {
				return C = Object.assign ? Object.assign.bind() : function(z) {
					for (var D = 1; D < arguments.length; D++) {
						var H = arguments[D];
						for (var Q in H) Object.prototype.hasOwnProperty.call(H, Q) && (z[Q] = H[Q])
					}
					return z
				}, C.apply(this, arguments)
			}

			function w(z, D) {
				if (z == null) return {};
				var H = F(z, D),
					Q, le;
				if (Object.getOwnPropertySymbols) {
					var $ = Object.getOwnPropertySymbols(z);
					for (le = 0; le < $.length; le++) Q = $[le], !(D.indexOf(Q) >= 0) && (!Object.prototype.propertyIsEnumerable.call(z, Q) || (H[Q] = z[Q]))
				}
				return H
			}

			function F(z, D) {
				if (z == null) return {};
				var H = {},
					Q = Object.keys(z),
					le, $;
				for ($ = 0; $ < Q.length; $++) le = Q[$], !(D.indexOf(le) >= 0) && (H[le] = z[le]);
				return H
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
			var ne = z => {
					let {
						isStarred: D,
						size: H = 16
					} = z, Q = w(z, ["isStarred", "size"]);
					const le = Y[(0, y.Yc)() ? "dark" : "light"];
					return r().createElement(S.J, C({
						type: D ? "star" : "star-outline",
						color: D ? le.gold : le.gray,
						size: H
					}, Q))
				},
				X = n("../../../../node_modules/@cloudflare/elements/es/index.js");

			function J(z) {
				for (var D = 1; D < arguments.length; D++) {
					var H = arguments[D] != null ? Object(arguments[D]) : {},
						Q = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && Q.push.apply(Q, Object.getOwnPropertySymbols(H).filter(function(le) {
						return Object.getOwnPropertyDescriptor(H, le).enumerable
					})), Q.forEach(function(le) {
						M(z, le, H[le])
					})
				}
				return z
			}

			function M(z, D, H) {
				return D = G(D), D in z ? Object.defineProperty(z, D, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[D] = H, z
			}

			function G(z) {
				var D = ie(z, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function ie(z, D) {
				if (typeof z != "object" || z === null) return z;
				var H = z[Symbol.toPrimitive];
				if (H !== void 0) {
					var Q = H.call(z, D || "default");
					if (typeof Q != "object") return Q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(z)
			}
			const x = {
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
			var q = (0, e.forwardRef)(({
				featurePreview: z = !1,
				isStarred: D,
				onClickFn: H,
				isDisabled: Q,
				testId: le,
				buttonText: $,
				size: se = "large"
			}, ge) => {
				const L = x[(0, y.Yc)() ? "dark" : "light"][D && !z ? "active" : "default"],
					A = J({}, se === "large" && {
						starIconSize: 16,
						fontSize: 3,
						height: "auto",
						paddingLeft: "12px",
						paddingRight: 3
					}, se === "small" && {
						starIconSize: 14,
						fontSize: 1,
						height: "1.5rem",
						paddingLeft: "6px",
						paddingRight: 2
					});
				return r().createElement(X.zx, {
					innerRef: ge,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: A.paddingRight,
					gap: 1,
					pl: A.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: z || Q ? "default" : "pointer",
					backgroundColor: L.bg,
					color: L.text,
					borderColor: L.border,
					onClick: H,
					opacity: Q ? .5 : 1,
					disabled: Q,
					fontSize: A.fontSize,
					height: A.height,
					"data-testid": le
				}, r().createElement(ne, {
					isStarred: z ? !1 : D,
					size: A.starIconSize
				}), $)
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
				h = n("../react/utils/url.ts");

			function d(J) {
				for (var M = 1; M < arguments.length; M++) {
					var G = arguments[M] != null ? Object(arguments[M]) : {},
						ie = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(G).filter(function(x) {
						return Object.getOwnPropertyDescriptor(G, x).enumerable
					})), ie.forEach(function(x) {
						E(J, x, G[x])
					})
				}
				return J
			}

			function E(J, M, G) {
				return M = N(M), M in J ? Object.defineProperty(J, M, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : J[M] = G, J
			}

			function N(J) {
				var M = k(J, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function k(J, M) {
				if (typeof J != "object" || J === null) return J;
				var G = J[Symbol.toPrimitive];
				if (G !== void 0) {
					var ie = G.call(J, M || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(J)
			}
			const y = (0, i.createComponent)(({
					type: J
				}) => ({
					height: J !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				S = (0, i.createComponent)(({
					theme: J,
					margin: M,
					size: G = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: J.colors.gray[3],
					height: M ? "auto" : "100%",
					padding: M ? 0 : J.space[G > 1 ? G - 2 : 0],
					margin: M,
					justifyContent: "center",
					alignItems: "center"
				})),
				C = (0, i.createComponent)(() => ({
					textAlign: "left"
				})),
				w = (0, i.createComponent)(() => ({
					textAlign: "right"
				})),
				F = (0, i.createComponent)(({
					theme: J
				}) => ({
					fontSize: J.fontSizes[6]
				})),
				Y = (0, i.createComponent)(({
					theme: J
				}) => ({
					fontSize: J.fontSizes[4]
				})),
				te = (0, i.createComponent)(({
					theme: J
				}) => ({
					fontSize: J.fontSizes[3]
				})),
				ne = (0, i.createComponent)(({
					theme: J
				}) => ({
					width: "100%",
					height: 125,
					marginTop: J.space[4],
					padding: J.space[2]
				}), "textarea");
			class X extends r().Component {
				constructor(...M) {
					super(...M);
					E(this, "state", {
						value: "",
						submitted: !1
					}), E(this, "handleTextareaChange", G => {
						this.setState({
							value: G.target.value
						})
					}), E(this, "sendErrToSentry10", async () => {
						try {
							var G, ie, x, pe;
							const q = ((G = window) === null || G === void 0 || (ie = G.bootstrap) === null || ie === void 0 || (x = ie.data) === null || x === void 0 || (pe = x.user) === null || pe === void 0 ? void 0 : pe.id) || "Unknown",
								z = this.props.eventId || l.eW(),
								D = {
									name: q,
									email: `${q}@userid.com`,
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
								body: JSON.stringify(D)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (q) {
							console.error(q)
						}
					}), E(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), E(this, "renderContent", G => r().createElement(f.oc, null, ie => r().createElement(y, {
						type: G
					}, r().createElement(S, null, r().createElement(C, null, r().createElement(F, null, ie.t("error.internal_issues")), r().createElement(Y, null, ie.t("error.help_us")), r().createElement(ne, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: x => this.handleTextareaChange(x),
						disabled: this.state.submitted,
						placeholder: ie.t("error.give_feedback")
					}), r().createElement(w, null, !this.state.submitted && r().createElement(u.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, ie.t("common.submit")), this.state.submitted && r().createElement(te, null, ie.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const M = this.props.error;
					console.error(`SomethingWrong: ${M}`), v.YA("user_feedback_form_displayed", "yes"), v.YA("normalizedPath", (0, h.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: M
					} = this.props;
					return M === "fullscreen" ? r().createElement("div", null, r().createElement(c.h4, null, r().createElement(t.Link, {
						to: "/"
					}, r().createElement(g.TR, null))), this.renderContent(M), r().createElement(a.Z, null)) : this.renderContent(M)
				}
			}
			X.propTypes = {
				type: p().oneOf(["fullscreen", "page"]),
				error: p().oneOfType([p().string, p().object]),
				eventId: p().string
			}, _.Z = X
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
					type: O,
					meta: K
				}) => K && K.method === "put" && O.indexOf("membership") === 0 ? v : T;
			var c = {
					reducer: (0, i.ZP)("invite").on("default", t)
				},
				g = n("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				a = n("../react/common/actionTypes.ts");
			const h = (T = l().from({
					isRequesting: !1,
					isErrored: !1,
					isFinished: !1,
					securityToken: null,
					errors: null
				}), O) => {
					switch (O.type) {
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
								errors: O.errors
							});
						case "ONBOARDING_SECURITY_TOKEN_UPDATE":
							return l().update(T, "securityToken", () => O.token)
					}
					return (0, g.h)(O, T)
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
					userCreation: h,
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

			function N(T = (0, u.static)({}), O) {
				switch (O.type) {
					case a.Li:
						const {
							userId: K, accountId: de, timeStamp: Ce
						} = O;
						return u.static.setIn(T, [K, de], {
							lastSeen: Ce
						});
					default:
						return T
				}
			}

			function k(T) {
				for (var O = 1; O < arguments.length; O++) {
					var K = arguments[O] != null ? Object(arguments[O]) : {},
						de = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(K).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(K, Ce).enumerable
					})), de.forEach(function(Ce) {
						y(T, Ce, K[Ce])
					})
				}
				return T
			}

			function y(T, O, K) {
				return O = S(O), O in T ? Object.defineProperty(T, O, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[O] = K, T
			}

			function S(T) {
				var O = C(T, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function C(T, O) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var de = K.call(T, O || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(T)
			}

			function w(T = {}, O) {
				const K = `__ACTIVE__${O.activeKey}`;
				switch (O.type) {
					case a.HI:
						return k({}, T, {
							[K]: O.activeValue
						});
					case a.s1:
						return k({}, T, {
							[K]: void 0
						});
					default:
						return T
				}
			}
			const F = () => [...Array(8)].map(T => Math.floor(Math.random() * 16).toString(16)).join(""),
				Y = [];

			function te(T, O) {
				if (T === void 0) return Y;
				switch (O.type) {
					case a.Np: {
						const {
							payload: K,
							options: de
						} = O, {
							ModalComponent: Ce,
							props: et
						} = K;
						return T = de.replace ? Y : T, [...T, {
							id: F(),
							ModalComponent: Ce,
							props: et
						}]
					}
					case a.gM: {
						const {
							ModalComponent: K
						} = O.payload;
						if (K) {
							const de = T.findIndex(Ce => Ce.ModalComponent === K);
							return de >= 0 ? T.slice(0, de) : T
						} else return T.slice(0, -1)
					}
					default:
						return T
				}
			}

			function ne(T) {
				for (var O = 1; O < arguments.length; O++) {
					var K = arguments[O] != null ? Object(arguments[O]) : {},
						de = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(K).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(K, Ce).enumerable
					})), de.forEach(function(Ce) {
						X(T, Ce, K[Ce])
					})
				}
				return T
			}

			function X(T, O, K) {
				return O = J(O), O in T ? Object.defineProperty(T, O, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[O] = K, T
			}

			function J(T) {
				var O = M(T, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function M(T, O) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var de = K.call(T, O || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(T)
			}

			function G(T = {}, O) {
				const K = `__TOGGLE__${O.toggleKey}`;
				switch (O.type) {
					case a.lV:
						return ne({}, T, {
							[K]: !0
						});
					case a.Cm:
						return ne({}, T, {
							[K]: !1
						});
					default:
						return T
				}
			}
			const ie = {
				notifications: []
			};

			function x(T, O) {
				switch (T === void 0 && (T = ie), O.type) {
					case a.Ng:
						return Object.assign({}, T, {
							notifications: T.notifications.concat(O.notification)
						});
					case a.Cz:
						return Object.assign({}, T, {
							notifications: T.notifications.filter(function(K) {
								return K.id !== O.notificationId
							})
						});
					default:
						return T
				}
			}

			function pe(T) {
				for (var O = 1; O < arguments.length; O++) {
					var K = arguments[O] != null ? Object(arguments[O]) : {},
						de = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(K).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(K, Ce).enumerable
					})), de.forEach(function(Ce) {
						q(T, Ce, K[Ce])
					})
				}
				return T
			}

			function q(T, O, K) {
				return O = z(O), O in T ? Object.defineProperty(T, O, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[O] = K, T
			}

			function z(T) {
				var O = D(T, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function D(T, O) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var de = K.call(T, O || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(T)
			}
			const H = T => (0, i.ZP)(T).on("success", (O, K, {
					meta: de
				}) => {
					var Ce, et;
					const {
						accountId: lt,
						zoneId: bt,
						dateOnly: gt = !1
					} = de.params || {};
					let Ze = "";
					const ut = {},
						ft = pe({}, (Ce = O.paginationData) === null || Ce === void 0 || (et = Ce.options) === null || et === void 0 ? void 0 : et.editedDate);
					O.data.forEach(Tt => {
						const {
							id: at,
							allocation: At,
							edited_date: yt
						} = Tt;
						ut[at] = At.value, yt > Ze && (Ze = yt)
					}), ft[lt || bt] = Ze;
					const dt = {
						options: {
							editedDate: ft
						}
					};
					return gt ? pe({}, O, {
						paginationData: dt
					}) : pe({}, O, {
						paginationData: dt,
						data: ut
					})
				}),
				Q = (0, e.combineReducers)({
					account: H("accountEntitlements"),
					zone: H("zoneEntitlements")
				});
			var le = n("../react/app/components/DeepLink/reducer.ts");

			function $(T) {
				for (var O = 1; O < arguments.length; O++) {
					var K = arguments[O] != null ? Object(arguments[O]) : {},
						de = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(K).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(K, Ce).enumerable
					})), de.forEach(function(Ce) {
						se(T, Ce, K[Ce])
					})
				}
				return T
			}

			function se(T, O, K) {
				return O = ge(O), O in T ? Object.defineProperty(T, O, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[O] = K, T
			}

			function ge(T) {
				var O = L(T, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function L(T, O) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var de = K.call(T, O || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(T)
			}
			const A = (0, i.ZP)("onboardingGuide").on("success", (T, O, K) => {
				if (K.meta.method === "post") {
					var de;
					const Ce = O.data && O.data.completedTasks || [],
						et = (de = O.data && O.data.readTasks) !== null && de !== void 0 ? de : [];
					return $({}, T, {
						data: {
							completedTasks: Array.from(new Set(Ce.concat(K.payload.status === "completedTasks" ? K.payload.taskName : []))),
							readTasks: Array.from(new Set(et.concat(K.payload.status === "readTasks" ? K.payload.taskName : [])))
						}
					})
				}
				return T
			});
			var R = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js");

			function W(T) {
				for (var O = 1; O < arguments.length; O++) {
					var K = arguments[O] != null ? Object(arguments[O]) : {},
						de = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(K).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(K, Ce).enumerable
					})), de.forEach(function(Ce) {
						re(T, Ce, K[Ce])
					})
				}
				return T
			}

			function re(T, O, K) {
				return O = _e(O), O in T ? Object.defineProperty(T, O, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[O] = K, T
			}

			function _e(T) {
				var O = Ie(T, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function Ie(T, O) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var de = K.call(T, O || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(T)
			}
			const B = (T, O) => {
				const {
					meta: K
				} = O;
				return K && K.method === "delete" && !T[K.entityType] ? T : (0, R.uW)(T, O)
			};
			var ue = {
					access: (0, e.combineReducers)({
						accessOrganizations: (0, i.ZP)("organizations").modifyInitialState(T => W({}, T, {
							needsHydration: !0,
							data: {
								auth_domain: "",
								name: "",
								login_design: {}
							}
						})).on("success", (T, O) => W({}, T, {
							data: Array.isArray(T == null ? void 0 : T.data) ? O == null ? void 0 : O.data : T == null ? void 0 : T.data,
							needsHydration: !1
						})).on("error", T => W({}, T, {
							needsHydration: !1
						}))
					}),
					accountAccess: N,
					accounts: (0, i.ZP)("accounts"),
					application: (0, e.combineReducers)({
						active: w,
						modals: te,
						toggles: G
					}),
					deepLink: le.r,
					entitlements: Q,
					entities: B,
					gates: f.vq,
					notifications: x,
					onboarding: E.reducer,
					onboardingGuide: A,
					userCommPreferences: (0, i.ZP)("userCommPreferences"),
					userDetails: (0, i.ZP)("userDetails"),
					invite: c.reducer,
					membership: (0, i.ZP)("membership"),
					memberships: (0, i.ZP)("memberships").on("success", (T, O, K) => K.meta.method === "delete" ? W({}, T, {
						data: O.data.filter(de => de !== K.payload)
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
				Oe = n("../react/app/redux/normalizer.js"),
				ze = n("../../../../node_modules/@sentry/react/esm/redux.js"),
				$e = n("../react/common/selectors/zoneSelectors.ts"),
				Me = n("../../../../node_modules/object.pick/index.js"),
				Ne = n.n(Me);

			function Ye(T) {
				for (var O = 1; O < arguments.length; O++) {
					var K = arguments[O] != null ? Object(arguments[O]) : {},
						de = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(K).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(K, Ce).enumerable
					})), de.forEach(function(Ce) {
						Qe(T, Ce, K[Ce])
					})
				}
				return T
			}

			function Qe(T, O, K) {
				return O = ot(O), O in T ? Object.defineProperty(T, O, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[O] = K, T
			}

			function ot(T) {
				var O = Je(T, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function Je(T, O) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var de = K.call(T, O || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(T)
			}
			const tt = ["accountRoles", "accountSubscriptions", "application", "caching", "crypto", "customizations", "edgeauth", "access", "entitlements", "fields", "firewall", "notifications", "onboarding", "partners", "performance", "ratePlans", "settings", "traffic", "user", "zone", "zones"],
				Ke = T => {
					const O = Ne()(T, tt),
						K = (0, $e.nA)(T);
					return Ye({}, O, {
						accountTwoFa: T.profile && T.profile.twoFactor,
						currentZone: Ne()(K, ["plan", "type"])
					})
				},
				nt = ({
					type: T,
					meta: O
				}) => ({
					type: T,
					entityType: O && O.entityType
				});
			var Xe = n("../react/app/reducerRegistry.js"),
				fe = n("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				ce = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				he = n("../react/common/constants/index.ts"),
				I = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				Z = n("../react/app/redux/makeAction.js"),
				Ee = n("../react/common/actions/membershipActions.ts");
			const Le = "get";

			function* Re(T) {
				const O = {
					entityType: T.entityType,
					method: Le
				};
				try {
					yield(0, ce.gw)(200), yield(0, ce.gz)((0, Z.dJ)({
						type: `${T.entityType}.start`,
						meta: O
					}));
					const K = yield(0, ce.RE)(I[Le], T.url, T.params[0]);
					let de = K && K.body;
					T.type === he.UM.MEMBERSHIPS_ROOT_REQUESTED && (de = (0, Ee.ct)({
						payload: de.result
					})), yield(0, ce.gz)((0, Z.Oy)({
						type: `${T.entityType}.success`,
						payload: de,
						meta: {
							entityType: T.entityType,
							method: Le
						}
					}, {}, T.params, {}, K))
				} catch (K) {
					throw yield(0, ce.gz)((0, Z.$J)({
						type: `${T.entityType}.error`,
						payload: K,
						error: !0,
						meta: O
					}, {}, T.params, {}, K)), K
				}
			}
			var ke = [(0, ce.Fm)(he.UM.ZONES_ROOT_REQUESTED, Re), (0, ce.Fm)(he.UM.ZONES_ACCOUNT_REQUESTED, Re), (0, ce.Fm)(he.UM.ZONES_HEADER_REQUESTED, Re), (0, ce.Fm)(he.UM.MEMBERSHIPS_ROOT_REQUESTED, Re), (0, ce.Fm)(he.UM.ACCOUNT_MEMBERS_REQUESTED, Re)],
				Be = n("../react/pages/apps/marketplace/config/sagas.ts");

			function* je() {
				yield(0, ce.$6)([...ke, ...Be.y])
			}
			var be = n("../react/app/redux/processActionMiddleware.js"),
				Ue = n("../../../../node_modules/is-promise/index.js"),
				He = n.n(Ue);

			function Ge(T) {
				for (var O = 1; O < arguments.length; O++) {
					var K = arguments[O] != null ? Object(arguments[O]) : {},
						de = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(K).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(K, Ce).enumerable
					})), de.forEach(function(Ce) {
						it(T, Ce, K[Ce])
					})
				}
				return T
			}

			function it(T, O, K) {
				return O = ct(O), O in T ? Object.defineProperty(T, O, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[O] = K, T
			}

			function ct(T) {
				var O = j(T, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function j(T, O) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var de = K.call(T, O || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(T)
			}
			const oe = {
					key: "cf-redux-store",
					storage: p.Z,
					whitelist: ["accountAccess", "invite"]
				},
				ye = (0, fe.ZP)(),
				we = [({
					dispatch: T
				}) => O => K => He()(K) ? K.then(de => T(de)) : O(K), ye, r.Z, be.Z, Oe.qR],
				xe = T => (0, s.Wq)(oe, Ge({}, ue, T));

			function qe() {
				const T = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					K = e.compose((0, e.applyMiddleware)(...we), ze.w({
						actionTransformer: nt,
						stateTransformer: Ke
					})),
					de = {},
					Ce = (0, e.createStore)(xe(Xe.Z.getReducers()), de, K);
				ye.run(je), (0, s.p5)(Ce);
				const lt = (n.g.bootstrap || {}).data || {};
				return Ce.dispatch((0, R.mW)("user", lt.user)), Ce
			}
			let Pe;
			Xe.Z.setChangeListener(T => {
				var O;
				Pe && ((O = Pe) === null || O === void 0 ? void 0 : O.replaceReducer) && (Pe.replaceReducer(xe(T)), (0, s.p5)(Pe))
			});

			function Ct() {
				return Pe || (Pe = qe()), Pe
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
				for (var h = 1; h < arguments.length; h++) {
					var d = arguments[h] != null ? Object(arguments[h]) : {},
						E = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(d).filter(function(N) {
						return Object.getOwnPropertyDescriptor(d, N).enumerable
					})), E.forEach(function(N) {
						f(a, N, d[N])
					})
				}
				return a
			}

			function f(a, h, d) {
				return h = i(h), h in a ? Object.defineProperty(a, h, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[h] = d, a
			}

			function i(a) {
				var h = u(a, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function u(a, h) {
				if (typeof a != "object" || a === null) return a;
				var d = a[Symbol.toPrimitive];
				if (d !== void 0) {
					var E = d.call(a, h || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(a)
			}
			const l = p({}, r),
				v = (a, h, d, E = {}) => {
					const N = a === "delete" ? "del" : a.toLowerCase();
					return d && N !== "del" && (E.body = d), l[N](h, E)
				},
				t = (a, h) => (a.meta.params = h, a),
				o = (a, h, d, E, {
					body: N = {}
				}) => {
					const {
						result: k,
						messages: y,
						result_info: S
					} = N, C = Object.values(h);
					if (a.meta.method === "delete") {
						const w = C[C.length - 1];
						a.meta.id = typeof w == "object" ? w.id : w
					}
					return a.payload = k, y && (a.meta.messages = y), C.length && (a.meta.params = h), S && (a.meta.paginationData = {
						info: S,
						actionParameters: C,
						options: d[0],
						insertionOffset: 0
					}), a
				},
				c = (a, h, d, E, N) => (a.payload = N && N.body && N.body.errors, a.meta.messages = N && N.body && N.body.messages, a.meta.params = h, a);

			function g(a, h, d, E) {
				const N = (0, e.RM)(a, h, d, E).apiFetch(v).on("start", t).on("success", o).on("error", c),
					k = N.mock;
				return N.mock = y => (k((...S) => {
					const C = y(...S);
					return C && typeof C == "object" && "result" in C ? C : {
						result: C
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
				let h = e.static.set(o, "messages", a || i);
				return g ? e.static.merge(h, {
					paginationData: g
				}) : h
			}

			function l(o, c, {
				meta: {
					errors: g,
					messages: a
				}
			}) {
				const h = {
					messages: a || i
				};
				return g && (h.errors = g), e.static.merge(o, h)
			}

			function v(o, c, g = {}) {
				const {
					data: a
				} = o;
				if (c.type === `${g.insertDelete}.success`) {
					const {
						method: h
					} = c.meta;
					let d = 0,
						E = o;
					if (h === "post") {
						const N = a ? [c.payload, ...a] : [c.payload];
						E = e.static.set(E, "data", N), d = 1
					} else if (h === "delete" && a && a.includes(c.meta.id)) {
						const N = a.filter(k => k !== c.meta.id);
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
					var h = arguments[a] != null ? Object(arguments[a]) : {},
						d = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(h).filter(function(E) {
						return Object.getOwnPropertyDescriptor(h, E).enumerable
					})), d.forEach(function(E) {
						p(g, E, h[E])
					})
				}
				return g
			}

			function p(g, a, h) {
				return a = f(a), a in g ? Object.defineProperty(g, a, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[a] = h, g
			}

			function f(g) {
				var a = i(g, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function i(g, a) {
				if (typeof g != "object" || g === null) return g;
				var h = g[Symbol.toPrimitive];
				if (h !== void 0) {
					var d = h.call(g, a || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(g)
			}
			const u = g => {
					const a = g.payload.map(h => s({}, h, {
						membershipId: h.id,
						id: h.account.id
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
							h = {
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
						g(r(h))
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
					return h
				},
				Z0: function() {
					return y
				},
				mp: function() {
					return d
				},
				r3: function() {
					return k
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				r = n("../react/app/redux/utils.ts");

			function s(S) {
				for (var C = 1; C < arguments.length; C++) {
					var w = arguments[C] != null ? Object(arguments[C]) : {},
						F = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols(w).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(w, Y).enumerable
					})), F.forEach(function(Y) {
						p(S, Y, w[Y])
					})
				}
				return S
			}

			function p(S, C, w) {
				return C = f(C), C in S ? Object.defineProperty(S, C, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[C] = w, S
			}

			function f(S) {
				var C = i(S, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function i(S, C) {
				if (typeof S != "object" || S === null) return S;
				var w = S[Symbol.toPrimitive];
				if (w !== void 0) {
					var F = w.call(S, C || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(S)
			}
			const u = (0, e.C)("user").get`/user`,
				l = (0, e.C)("user").patch`/user`,
				v = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				o = (0, e.C)("user").post`/user/two_factor_authentication`,
				c = (0, e.C)("user").put`/user/two_factor_authentication`,
				g = (0, e.C)("user").delete`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/email`;

			function h(...S) {
				return a(...S)
			}
			const d = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				E = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(S => s({}, S, {
					body: s({}, S.body, {
						result: {}
					})
				}))),
				N = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				k = (0, e.C)("userDetails").get`/user/details`,
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
					t.forEach(h => {
						if (h.test(window.location.pathname)) {
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
						var h = arguments[a];
						for (var d in h) Object.prototype.hasOwnProperty.call(h, d) && (g[d] = h[d])
					}
					return g
				}, i.apply(this, arguments)
			}
			const u = r().createContext(null);
			class l extends r().Component {
				render() {
					const {
						modals: a,
						closeModal: h
					} = this.props;
					return r().createElement(r().Fragment, null, a.map(({
						ModalComponent: d,
						props: E = {},
						id: N
					}) => {
						const k = () => {
							typeof E.onClose == "function" && E.onClose(), h(d)
						};
						return r().createElement(u.Provider, {
							key: N,
							value: {
								closeModal: k
							}
						}, r().createElement(d, i({}, E, {
							isOpen: !0,
							closeModal: k
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
				const h = !!(0, u.Z)("rm-18295-saml-salesforce-integration"),
					[d, E] = (0, e.useState)(null),
					N = (0, i.UM)(),
					k = (0, s.useHistory)(),
					y = (0, s.useLocation)(),
					S = (0, i.p4)(l.r),
					C = (0, e.useRef)(null);
				return (0, e.useEffect)(() => {
					const w = new URLSearchParams(y.search);
					if (w.has("saml")) {
						var F;
						sessionStorage.setItem("saml", (F = w.get("saml")) !== null && F !== void 0 ? F : ""), w.delete("saml"), k.replace({
							search: w.toString()
						})
					}
				}, []), (0, e.useEffect)(() => {
					const w = async F => {
						const Y = F ? `/api/v4/sso/saml?id=${F}&locale=${S}` : `/api/v4/sso/saml?locale=${S}`,
							te = await fetch(Y);
						try {
							if (te.status === 200) {
								const X = (await te.json()).result;
								if (X && X.assertion_consumer_service_url && X.saml_response) E({
									acsUrl: X.assertion_consumer_service_url,
									saml: X.saml_response
								});
								else throw new Error(`${Y} produced unexpected content`)
							} else throw new Error(`${Y} produced bad response code:${te.status}`)
						} catch (ne) {
							const X = "Failed completing Service Provider authentication";
							throw N((0, f.vU)(X)), new Error(X + `: ${ne.message}`)
						}
					};
					if (c && a) {
						const F = sessionStorage.getItem("saml");
						F && (sessionStorage.removeItem("saml"), w(F))
					}
					g && w()
				}, [c, g, a]), (0, e.useEffect)(() => {
					!d || C.current && C.current.submit()
				}, [d]), !d || !h ? null : r().createElement(r().Fragment, null, r().createElement("form", {
					ref: C,
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
			let e = function(h) {
				return h.page_rules = "page_rules", h.automatic_platform_optimization = "automatic_platform_optimization", h
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
					return h
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
				h = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"]
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
					return Je
				},
				Au: function() {
					return ce
				},
				B: function() {
					return ze
				},
				B3: function() {
					return Ye
				},
				BG: function() {
					return C
				},
				Bp: function() {
					return it
				},
				D0: function() {
					return N
				},
				DT: function() {
					return se
				},
				EL: function() {
					return H
				},
				GE: function() {
					return be
				},
				Ko: function() {
					return $
				},
				Kx: function() {
					return Y
				},
				Le: function() {
					return te
				},
				O4: function() {
					return Qe
				},
				Ou: function() {
					return q
				},
				Py: function() {
					return tt
				},
				QI: function() {
					return Be
				},
				RO: function() {
					return ue
				},
				T3: function() {
					return Xe
				},
				T8: function() {
					return S
				},
				UX: function() {
					return D
				},
				VP: function() {
					return Re
				},
				Xo: function() {
					return nt
				},
				Xu: function() {
					return ie
				},
				Yi: function() {
					return ct
				},
				Yj: function() {
					return le
				},
				Zu: function() {
					return Q
				},
				bC: function() {
					return A
				},
				f8: function() {
					return J
				},
				hN: function() {
					return F
				},
				hX: function() {
					return Oe
				},
				iq: function() {
					return Ne
				},
				nE: function() {
					return w
				},
				oD: function() {
					return z
				},
				oI: function() {
					return X
				},
				oJ: function() {
					return fe
				},
				uF: function() {
					return x
				},
				ut: function() {
					return Ke
				},
				vU: function() {
					return Ue
				},
				wQ: function() {
					return re
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
				for (var oe = 1; oe < arguments.length; oe++) {
					var ye = arguments[oe] != null ? Object(arguments[oe]) : {},
						Te = Object.keys(ye);
					typeof Object.getOwnPropertySymbols == "function" && Te.push.apply(Te, Object.getOwnPropertySymbols(ye).filter(function(we) {
						return Object.getOwnPropertyDescriptor(ye, we).enumerable
					})), Te.forEach(function(we) {
						h(j, we, ye[we])
					})
				}
				return j
			}

			function h(j, oe, ye) {
				return oe = d(oe), oe in j ? Object.defineProperty(j, oe, {
					value: ye,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[oe] = ye, j
			}

			function d(j) {
				var oe = E(j, "string");
				return typeof oe == "symbol" ? oe : String(oe)
			}

			function E(j, oe) {
				if (typeof j != "object" || j === null) return j;
				var ye = j[Symbol.toPrimitive];
				if (ye !== void 0) {
					var Te = ye.call(j, oe || "default");
					if (typeof Te != "object") return Te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (oe === "string" ? String : Number)(j)
			}
			const N = j => {
					const oe = x(j);
					return oe == null ? void 0 : oe.account
				},
				k = j => {
					const oe = (0, o.PR)(j);
					if (oe) {
						const ye = oe.id;
						return j.accountAccess[ye] || {}
					}
					return {}
				},
				y = j => j.accountsDetailed,
				S = (0, t.P1)("accountsDetailed", y),
				C = j => j.memberships,
				w = (0, i.P1)((0, t.P1)("memberships", C), g.U, (j, oe) => !!oe && !!j ? j.filter(ye => oe.includes(ye.id)) : j),
				F = j => j.accountFlags && j.accountFlags.data,
				Y = j => j.accountFlags,
				te = (j, oe, ye) => {
					const Te = F(j);
					return !Te || !Te[oe] ? null : Te[oe][ye]
				},
				ne = j => j.accountFlags.isRequesting,
				X = (j, ...oe) => s()(j, ["accountFlagsChanges", "data", ...oe]),
				J = j => j.accountFlagsChanges.isRequesting,
				M = (0, i.P1)(F, Y, (j, oe) => ({
					data: j,
					meta: oe
				})),
				G = (j, oe, ye) => !!(isEnterpriseSSEnabledSelector(j) && te(j, oe, ye)),
				ie = j => j.membership,
				x = (0, t.P1)("membership", ie),
				pe = (0, i.P1)(x, ie, (j, oe) => ({
					data: j,
					meta: oe
				})),
				q = j => {
					const {
						roles: oe = []
					} = x(j) || {};
					return Boolean(oe.find(ye => ye === "Super Administrator - All Privileges" || ye === "Billing"))
				},
				z = j => {
					const oe = k(j),
						ye = Ge.getMemberships(j) ? f().asMutable(Ge.getMemberships(j)) : [];
					if (!!ye) return f().from(ye.map(Te => a({}, Te, {
						lastSeen: oe[Te.account.id] ? oe[Te.account.id].lastSeen : null
					})).sort((Te, we) => Te.lastSeen && we.lastSeen ? we.lastSeen - Te.lastSeen : 0))
				},
				D = j => j.filteredMemberships,
				H = (0, t.P1)("filteredMemberships", D),
				Q = (0, i.P1)(x, j => j == null ? void 0 : j.permissions),
				le = (0, i.P1)(Q, j => (0, e.Z)(oe => {
					var ye;
					return (ye = j == null ? void 0 : j[oe]) !== null && ye !== void 0 ? ye : {
						read: !1,
						edit: !1
					}
				})),
				$ = (0, i.P1)(x, j => j == null ? void 0 : j.policies),
				se = (j, oe, ye) => {
					let Te = Ge.getMembership(j);
					if (!Te) {
						const we = Ge.getMemberships(j);
						if (!we || !oe) return !1;
						Te = we.find(xe => xe.account.id === oe)
					}
					if (!Te || !ye) return !1;
					try {
						return ye(Te.permissions)
					} catch {
						return !1
					}
				},
				ge = j => {
					var oe, ye;
					return (oe = (ye = N(j)) === null || ye === void 0 ? void 0 : ye.meta.has_pro_zones) !== null && oe !== void 0 ? oe : !1
				},
				L = j => {
					var oe, ye;
					return (oe = (ye = N(j)) === null || ye === void 0 ? void 0 : ye.meta.has_business_zones) !== null && oe !== void 0 ? oe : !1
				},
				A = j => L(j) || ge(j),
				R = (j, oe) => {
					const ye = W(j, oe);
					return !!ye && !!ye.enabled
				},
				W = (j, oe) => {
					const ye = Ge.getMembership(j),
						Te = ye && ye.account;
					return Te && Te.legacy_flags && Te.legacy_flags[oe]
				},
				re = j => R(j, "custom_pages"),
				_e = j => !!j && j["webhooks.webhooks.enabled"],
				Ie = j => te(j, "bots", "enabled"),
				B = j => te(j, "billing", "annual_subscriptions_enable"),
				ue = j => j ? Boolean(te(j, "ConstellationAI", "v2_ui")) : !1,
				Oe = j => j ? Boolean(te(j, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				ze = j => j ? Boolean(te(j, "AIgateway", "enabled")) : !1,
				$e = j => W(j, "enterprise_zone_quota"),
				Me = j => {
					const oe = $e(j);
					return !oe || !oe.available ? -1 : oe.available
				},
				Ne = j => j.accountMembers,
				Ye = (0, t.P1)("accountMembers", Ne),
				Qe = j => j.accountMember && j.accountMember.isRequesting,
				ot = j => j.accountRoles,
				Je = (0, t.P1)("accountRoles", ot),
				tt = (j, oe) => {
					const ye = Ge.getMemberships(j),
						Te = ye && ye.find(qe => qe.account.id === oe);
					if (Te) return Te.account.name.replace(" Account", " account");
					const we = Ge.getMembership(j),
						xe = we && we.account;
					return xe && xe.id === oe ? xe.name : null
				},
				Ke = (j, oe) => {
					const ye = Ge.getMemberships(j),
						Te = ye && ye.find(qe => qe.account.id === oe);
					if (Te) return Te.account.settings.access_approval_expiry;
					const we = Ge.getMembership(j),
						xe = we && we.account;
					return xe && xe.id === oe ? xe.settings.access_approval_expiry : null
				},
				nt = (j, oe) => {
					const ye = Ke(j, oe);
					return ye ? l().utc(ye).isAfter() : !1
				},
				Xe = (j, oe, ye) => {
					const Te = Ke(j, oe);
					let we = Te ? l().utc(Te) : null;
					return !we || !we.isAfter() ? "" : we && we.year() === 3e3 ? ye("account.access_approval.card_expiration_forever") : ye("account.access_approval.card_expiration_text", {
						expiryTimestamp: we.local().format(v.U.DateTime)
					})
				},
				fe = j => j && j.member && j.member.edit,
				ce = (j, oe) => {
					const ye = Ge.getMembership(j),
						Te = ye && ye.account;
					return Te ? Te.id !== oe : !1
				},
				he = j => j.dpa,
				I = (0, t.P1)("dpa", he),
				Z = j => j.webhook,
				Ee = j => j.webhooks,
				Le = (0, t.P1)("webhook", Ee),
				Re = j => j.accountLegoContract,
				ke = (0, t.P1)("accountLegoContract", Re),
				Be = j => {
					const oe = ke(j);
					return (oe == null ? void 0 : oe.lego_state) ? oe.lego_state : ""
				},
				je = j => Be(j) === "signed",
				be = j => Re(j).isRequesting,
				Ue = j => {
					const oe = ke(j);
					return oe && oe.subscription_type ? oe.subscription_type : ""
				},
				He = j => Ue(j) !== "",
				Ge = {
					getMembership: x,
					getMemberships: w,
					getFilteredMemberships: H,
					getAccountMembers: Ye,
					getAccountRoles: Je
				},
				it = j => j.accountSingle,
				ct = (0, t.P1)("accountSingle", it)
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
					return se
				},
				E6: function() {
					return c
				},
				Hq: function() {
					return Ie
				},
				Ms: function() {
					return w
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
					return k
				},
				a5: function() {
					return W
				},
				du: function() {
					return l
				},
				ec: function() {
					return G
				},
				f: function() {
					return _e
				},
				hL: function() {
					return R
				},
				ji: function() {
					return ge
				},
				jo: function() {
					return F
				},
				k4: function() {
					return re
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
					return L
				}
			});
			var e = n("../react/utils/url.ts");

			function r(B, ue) {
				return B && B[ue]
			}
			const s = B => !p(B).isRequesting;

			function p(B) {
				return B.entitlements.zone
			}

			function f(B) {
				return p(B).data
			}
			const i = B => {
				var ue, Oe;
				return ((ue = p(B).paginationData) === null || ue === void 0 || (Oe = ue.options) === null || Oe === void 0 ? void 0 : Oe.editedDate) || {}
			};

			function u(B, ue) {
				const Oe = f(B);
				return Oe ? r(Oe, ue) : void 0
			}
			const l = (B, ue) => u(B, ue) === !0;

			function v(B) {
				return B.entitlements.account
			}

			function t(B) {
				return v(B).data
			}
			const o = B => {
				var ue, Oe;
				return ((ue = v(B).paginationData) === null || ue === void 0 || (Oe = ue.options) === null || Oe === void 0 ? void 0 : Oe.editedDate) || {}
			};

			function c(B) {
				return !v(B).isRequesting
			}

			function g(B, ue) {
				const Oe = t(B);
				return Oe ? r(Oe, ue) : void 0
			}

			function a(B, ue) {
				return g(B, ue) === !0
			}

			function h(B, ue) {
				return ue.every(Oe => a(B, Oe))
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
			const k = B => d(B) && E(B),
				y = B => a(B, "enterprise.ecp_allowed");

			function S(B) {
				return C(B) || a(B, "argo.allow_smart_routing") || a(B, "argo.allow_tiered_caching") || a(B, "rate_limiting.enabled") || a(B, "ctm.enabled") || a(B, "workers.enabled") || a(B, "workers.kv_store.enabled") || a(B, "stream.enabled")
			}
			const C = B => l(B, "argo.allow_smart_routing") || l(B, "argo.allow_tiered_caching"),
				w = B => a(B, "zone.cname_setup_allowed") || a(B, "zone.partial_setup_allowed") || l(B, "zone.partial_setup_allowed"),
				F = B => a(B, "argo.allow_smart_routing") || l(B, "argo.allow_smart_routing"),
				Y = B => a(B, "argo.allow_tiered_caching") || l(B, "argo.allow_tiered_caching"),
				te = B => F(B) || Y(B),
				ne = B => a(B, "ctm.enabled"),
				X = B => {
					const ue = g(B, "ctm.load_balancers");
					return typeof ue == "number" ? ue : 0
				},
				J = B => {
					const ue = g(B, "ctm.pools");
					return typeof ue == "number" ? ue : 0
				},
				M = B => {
					const ue = g(B, "ctm.origins");
					return typeof ue == "number" ? ue : 0
				},
				G = B => a(B, "workers.enabled"),
				ie = B => a(B, "stream.enabled"),
				x = B => {
					const ue = g(B, "access.users_allowed");
					return typeof ue == "number" ? ue : 0
				},
				pe = B => x(B) > 0,
				q = B => {
					const ue = u(B, "dedicated_certificates");
					return typeof ue == "number" ? ue : 0
				},
				z = B => q(B) > 0,
				D = B => {
					const ue = u(B, "rate_limiting.max_rules");
					return typeof ue == "number" ? ue : 0
				},
				H = B => a(B, "rate_limiting.enabled"),
				Q = B => {
					const ue = u(B, "page_rules");
					return typeof ue == "number" ? ue : 0
				},
				le = B => Q(B) > 0,
				$ = B => {
					const ue = g(B, "dns_firewall.max_clusters_allowed");
					return typeof ue == "number" ? ue : 0
				},
				se = B => $(B) > 0,
				ge = B => l(B, "zone.advanced_certificate_manager") || a(B, "zone.advanced_certificate_manager"),
				L = B => u(B, "authoritative_dns.proxy_record_allowed") === !1 || g(B, "authoritative_dns.proxy_record_allowed") === !1,
				A = B => a(B, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				R = B => u(B, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				W = B => {
					const ue = u(B, "authoritative_dns.min_record_ttl_allowed");
					return typeof ue == "number" && ue > 1 ? ue : 60
				},
				re = B => a(B, "foundation_dns.advanced_nameservers_allowed") || l(B, "foundation_dns.advanced_nameservers_allowed"),
				_e = (B, ue) => ((0, e.el)(window.location.pathname) ? u : g)(B, ue),
				Ie = B => a(B, "authoritative_dns.multi_provider_allowed") || l(B, "authoritative_dns.multi_provider_allowed")
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
					return h
				},
				vW: function() {
					return i
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const r = S => S.user,
				s = (0, e.P1)("user", r),
				p = S => {
					var C;
					return (C = s(S)) === null || C === void 0 ? void 0 : C.email.endsWith("@cloudflare.com")
				},
				f = S => {
					var C;
					return !!((C = s(S)) === null || C === void 0 ? void 0 : C.id)
				},
				i = S => {
					const C = s(S);
					if (!!C) return C.first_name && C.last_name ? `${C.first_name} ${C.last_name}` : C.email
				},
				u = S => {
					const C = s(S);
					return C && C.has_enterprise_zones
				},
				l = S => S.userCommPreferences,
				v = (0, e.P1)("userCommPreferences", l),
				t = S => {
					const C = s(S);
					return C && C.email_verified
				},
				o = S => {
					const C = v(S);
					return C && C.preferences.marketing_communication
				},
				c = S => S.userDetails,
				g = (0, e.P1)("userDetails", c),
				a = S => {
					const C = g(S);
					return C && C["2FA-RECOVERY"] === "scheduled"
				},
				h = S => {
					const C = g(S);
					return C && C["2FA-RECOVERY"] === "interrupted"
				},
				d = S => {
					const C = g(S);
					return C == null ? void 0 : C["NEW-USER-EMAIL"]
				},
				E = S => S.gates.assignments,
				N = (S, C) => S && S[C];

			function k(S, C) {
				const w = E(S);
				return w ? N(w, C) : void 0
			}
			const y = (S, C) => k(S, C) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				$4: function() {
					return w
				},
				$t: function() {
					return nt
				},
				A4: function() {
					return d
				},
				Cu: function() {
					return E
				},
				DQ: function() {
					return re
				},
				Ej: function() {
					return Y
				},
				FH: function() {
					return k
				},
				ID: function() {
					return H
				},
				Ko: function() {
					return $e
				},
				Le: function() {
					return B
				},
				Ly: function() {
					return $
				},
				M3: function() {
					return ot
				},
				N8: function() {
					return Qe
				},
				NY: function() {
					return A
				},
				Ns: function() {
					return le
				},
				Ox: function() {
					return ce
				},
				P4: function() {
					return te
				},
				RO: function() {
					return z
				},
				SX: function() {
					return R
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
					return Je
				},
				WR: function() {
					return he
				},
				Xg: function() {
					return h
				},
				ZB: function() {
					return Ie
				},
				cU: function() {
					return Me
				},
				cg: function() {
					return W
				},
				d2: function() {
					return ie
				},
				jN: function() {
					return X
				},
				jg: function() {
					return ge
				},
				kC: function() {
					return F
				},
				kf: function() {
					return tt
				},
				ko: function() {
					return q
				},
				mK: function() {
					return Xe
				},
				nA: function() {
					return a
				},
				oY: function() {
					return ne
				},
				qM: function() {
					return ue
				},
				rq: function() {
					return L
				},
				tS: function() {
					return C
				},
				tU: function() {
					return M
				},
				vB: function() {
					return fe
				},
				vM: function() {
					return J
				},
				wH: function() {
					return y
				},
				wn: function() {
					return _e
				},
				xU: function() {
					return G
				},
				xw: function() {
					return Oe
				},
				z5: function() {
					return D
				},
				zO: function() {
					return Ne
				},
				zW: function() {
					return Ke
				},
				zh: function() {
					return x
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				r = n("../react/app/redux/normalizer.js"),
				s = n("../../../../node_modules/lodash/get.js"),
				p = n.n(s),
				f = n("../../../../node_modules/moment/moment.js"),
				i = n.n(f),
				u = n("../react/common/constants/billing/index.ts");

			function l(I) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var Ee = arguments[Z] != null ? Object(arguments[Z]) : {},
						Le = Object.keys(Ee);
					typeof Object.getOwnPropertySymbols == "function" && Le.push.apply(Le, Object.getOwnPropertySymbols(Ee).filter(function(Re) {
						return Object.getOwnPropertyDescriptor(Ee, Re).enumerable
					})), Le.forEach(function(Re) {
						v(I, Re, Ee[Re])
					})
				}
				return I
			}

			function v(I, Z, Ee) {
				return Z = t(Z), Z in I ? Object.defineProperty(I, Z, {
					value: Ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[Z] = Ee, I
			}

			function t(I) {
				var Z = o(I, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function o(I, Z) {
				if (typeof I != "object" || I === null) return I;
				var Ee = I[Symbol.toPrimitive];
				if (Ee !== void 0) {
					var Le = Ee.call(I, Z || "default");
					if (typeof Le != "object") return Le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(I)
			}
			const c = (0, r.P1)("zone", I => I.zone),
				g = I => {
					var Z;
					return (Z = I.zoneVersioning) === null || Z === void 0 ? void 0 : Z.zoneVersionSelector
				},
				a = (0, e.P1)(c, g, (I, Z) => {
					var Ee, Le, Re;
					let ke;
					if (Array.isArray(I) && I.length === 1 ? ke = I[0] : I && !Array.isArray(I) && (ke = I), !ke) return;
					const Be = !!(Z == null ? void 0 : Z.enabled);
					return l({}, ke, ke.name && {
						name: Be ? Z.rootZoneName : ke.name
					}, {
						versioning: {
							enabled: Be,
							isRoot: !((Ee = ke.name) === null || Ee === void 0 ? void 0 : Ee.endsWith(".config.cfdata.org")),
							version: Be ? Z.selectedVersion : 0,
							rootZoneId: Be ? Z.rootZoneId : (Le = (Re = ke) === null || Re === void 0 ? void 0 : Re.id) !== null && Le !== void 0 ? Le : ""
						}
					})
				}),
				h = I => I.zone,
				d = (0, e.P1)(a, h, (I, Z) => ({
					data: I,
					meta: Z
				})),
				E = I => {
					var Z, Ee;
					return (Z = (Ee = a(I)) === null || Ee === void 0 ? void 0 : Ee.id) !== null && Z !== void 0 ? Z : ""
				},
				N = I => I.zones,
				k = I => I.zonesRoot,
				y = I => I.zonesAccount,
				S = (0, r.P1)("zones", N),
				C = (0, r.P1)("zonesRoot", k),
				w = (0, r.P1)("zonesAccount", y);

			function F(I) {
				const Z = a(I);
				return Z ? Z.created_on : null
			}

			function Y(I, Z, Ee) {
				const Le = F(I);
				if (!Le) return;
				const Re = i().duration(Z, Ee),
					ke = new Date(Le),
					Be = new Date(new Date().getTime() - Re.asMilliseconds());
				return ke.getTime() > Be.getTime()
			}

			function te(I) {
				const Z = a(I);
				return Z ? Z.status : null
			}

			function ne(I) {
				const Z = a(I);
				return Z ? Z.type : null
			}

			function X(I) {
				return I.plan_pending ? I.plan_pending : I.plan
			}

			function J(I) {
				const Z = a(I);
				if (!Z) return;
				const Ee = X(Z);
				return Ee && Ee.legacy_id
			}

			function M(I, Z) {
				const Ee = X(I);
				return !!Ee && u.Gs.indexOf(Ee.legacy_id) >= u.Gs.indexOf(Z)
			}

			function G(I) {
				return !!I && I.status === "initializing"
			}

			function ie(I) {
				return !!I && I.status === "pending"
			}

			function x(I) {
				return !!I && I.status === "active"
			}

			function pe(I, Z) {
				if (!I) return !1;
				const Ee = X(I);
				return !!Ee && Ee.legacy_id === Z
			}

			function q(I) {
				return pe(I, "enterprise")
			}
			const z = I => q(a(I));

			function D(I) {
				return pe(I, "business")
			}
			const H = I => D(a(I));

			function Q(I) {
				return pe(I, "pro")
			}

			function le(I) {
				return pe(I, "free")
			}

			function $(I) {
				return !q(I)
			}

			function se(I) {
				return I && I.owner
			}

			function ge(I, Z) {
				const Ee = se(Z);
				return !!Ee && Ee.type === "user" && Ee.id === I.id
			}

			function L(I) {
				const Z = a(I);
				return !!Z && Z.type === "partial"
			}

			function A(I) {
				const Z = a(I);
				return !!Z && Z.type === "secondary"
			}

			function R(I) {
				const Z = a(I);
				return Z && L(I) && Z.host
			}
			const W = I => {
					var Z;
					const Ee = a(I);
					return !!(Ee == null ? void 0 : Ee.host) && !!((Z = Ee.plan) === null || Z === void 0 ? void 0 : Z.externally_managed)
				},
				re = I => {
					const Z = S(I);
					return Z && Z.some(q)
				},
				_e = (I, Z) => {
					const Ee = a(I);
					return Ee && Ee.betas ? Ee.betas.includes(Z) : !1
				},
				Ie = (I, ...Z) => p()(I, ["zoneFlags", "data", ...Z]),
				B = (I, ...Z) => p()(I, ["accountFlags", "data", ...Z]),
				ue = I => I.accountFlags.isRequesting,
				Oe = I => I.zoneFlags.isRequesting,
				ze = (I, ...Z) => p()(I, ["zoneFlagsChanges", "data", ...Z]),
				$e = I => I.zoneFlagsChanges.isRequesting,
				Me = I => I.zoneFlags && I.zoneFlags.data,
				Ne = I => I.zoneFlags,
				Ye = (0, e.P1)(Me, Ne, (I, Z) => ({
					data: I,
					meta: Z
				})),
				Qe = (0, r.P1)("abuseUrls", I => I.overview.abuseUrls),
				ot = I => {
					const Z = a(I);
					return Z ? `/${Z.account.id}/${Z.name}` : null
				},
				Je = I => I.zoneMarketingCampaigns,
				tt = I => I.overview.zoneBlocks.data,
				Ke = I => I.overview.zoneBlocks.isRequesting,
				nt = I => I.overview.zoneBlocks.hasData,
				Xe = I => {
					var Z, Ee;
					return (I == null || (Z = I.overview.zoneBlocks) === null || Z === void 0 || (Ee = Z.paginationData) === null || Ee === void 0 ? void 0 : Ee.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				fe = I => I.overview.zoneBlocksReview.isRequesting,
				ce = I => I.overview.zoneHold,
				he = (0, r.P1)("zoneHold", ce)
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
				for (var h = 1; h < arguments.length; h++) {
					var d = arguments[h] != null ? Object(arguments[h]) : {},
						E = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(d).filter(function(N) {
						return Object.getOwnPropertyDescriptor(d, N).enumerable
					})), E.forEach(function(N) {
						r(a, N, d[N])
					})
				}
				return a
			}

			function r(a, h, d) {
				return h = s(h), h in a ? Object.defineProperty(a, h, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[h] = d, a
			}

			function s(a) {
				var h = p(a, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function p(a, h) {
				if (typeof a != "object" || a === null) return a;
				var d = a[Symbol.toPrimitive];
				if (d !== void 0) {
					var E = d.call(a, h || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(a)
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
					return ge
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
					const R = (0, u.he)(A);
					if (R && (0, u.pw)(R)) throw new u.C6;
					yield(0, e.gz)(s.Nw.setToken({
						token: A,
						parsed: R
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
				} catch (R) {
					if (yield(0, e.RE)([localStorage, "removeItem"], l.m.CloudflareAppsToken), ![u.Vm.RedirectToLogin, u.Vm.BadToken].includes(R.name)) return yield(0, e.gz)(s.Nw.initSaga(A.zoneId));
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

			function* h() {
				for (;;) {
					const A = yield(0, e.qn)(s.XO.SetCurrentUser), R = yield(0, e.RE)([localStorage, "getItem"], l.m.CloudflareAppsToken);
					if (R) {
						const W = (0, u.he)(R),
							re = (0, r.Z)(W, "sub"),
							_e = (0, r.Z)(A, `meta.entities.user.${A.payload}.email`);
						if (_e && _e !== re) return yield(0, e.RE)([localStorage, "removeItem"], l.m.CloudflareAppsToken)
					}
				}
			}
			var d = [a(), h(), c()],
				E = n("../react/pages/apps/marketplace/requests/common.ts"),
				N = n("../react/pages/apps/marketplace/libraries/constants.ts");
			const k = (A, R) => A.apps ? A.apps[R] : A[R],
				y = A => k(A, "authState"),
				S = A => k(A, "commonState"),
				C = A => k(A, "homePageState"),
				w = A => y(A).zone;
			var F = n("../react/pages/apps/marketplace/libraries/helpers.ts"),
				Y = n("../react/pages/apps/marketplace/state/common.reducer.ts");

			function te(A) {
				for (var R = 1; R < arguments.length; R++) {
					var W = arguments[R] != null ? Object(arguments[R]) : {},
						re = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(W).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(W, _e).enumerable
					})), re.forEach(function(_e) {
						ne(A, _e, W[_e])
					})
				}
				return A
			}

			function ne(A, R, W) {
				return R = X(R), R in A ? Object.defineProperty(A, R, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[R] = W, A
			}

			function X(A) {
				var R = J(A, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function J(A, R) {
				if (typeof A != "object" || A === null) return A;
				var W = A[Symbol.toPrimitive];
				if (W !== void 0) {
					var re = W.call(A, R || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(A)
			}

			function* M(A, R, W) {
				const re = {
					categories: (W.markets || ["none"]).map(_e => {
						const Ie = N.XZ.find(B => B.key === _e);
						return !_e || !Ie ? N.iK.categories : Ie.categories
					}).reduce((_e, Ie) => _e.concat(Ie), []).filter((_e, Ie, B) => B.indexOf(_e) === Ie).join(","),
					excludeApps: R.map(_e => _e.appId).join(",")
				};
				return yield(0, e.RE)(E.RX, Y.Nw, E.Jb.recommendedApps.name, E.Jb.recommendedApps.url(re), F.Ux.transformers.transformAppIdsToApps.bind(null, A))
			}

			function* G() {
				for (;;) {
					const {
						zoneId: A,
						currentResources: R
					} = yield(0, e.qn)(Y.U4.GetHomePageAssetsSaga), {
						appsList: W,
						installsList: re,
						metadata: _e
					} = yield(0, e.$6)(te({}, R.appsList.status === "latent" ? {
						appsList: (0, e.RE)(E.RX, Y.Nw, E.Jb.apps.name, E.Jb.apps.url())
					} : {
						appsList: R.appsList.value
					}, R.categoriesList.status === "latent" ? {
						categoriesList: (0, e.RE)(E.RX, Y.Nw, E.Jb.categories.name, E.Jb.categories.url({
							includeInvisible: !0
						}))
					} : {
						categoriesList: R.categoriesList.value
					}, R.installsList.status === "latent" ? {
						installsList: (0, e.RE)(E.RX, Y.Nw, E.Jb.installs.default.name, E.Jb.installs.default.url(A))
					} : {
						installsList: R.installsList.value
					}, R.metadata.status === "latent" ? {
						metadata: (0, e.RE)(E.RX, Y.Nw, E.Jb.metadata.get.name, E.Jb.metadata.get.url(A))
					} : {
						metadata: R.metadata.value
					}));
					yield(0, e.gz)(Y.Nw.getRecommendedAppsSaga(W, re, _e))
				}
			}

			function* ie() {
				for (;;) {
					const {
						userId: A,
						zoneId: R
					} = yield(0, e.qn)(Y.U4.GetDevelopedAppsAssetsSaga);
					yield(0, e.RE)(E.RX, Y.Nw, E.Jb.installs.default.name, E.Jb.installs.default.url(R)), yield(0, e.RE)(E.RX, Y.Nw, E.Jb.developedApps.name, E.Jb.developedApps.url(A))
				}
			}

			function* x() {
				for (;;) {
					const {
						appIdentifier: A,
						zoneId: R,
						version: W
					} = yield(0, e.qn)(Y.U4.GetAppInfoAssetsSaga), re = yield(0, e.RE)(E.RX, Y.Nw, E.Jb.installs.default.name, E.Jb.installs.default.url(R));
					yield(0, e.RE)(E.RX, Y.Nw, E.Jb.app.name, E.Jb.app.url(A, W ? {
						version: W
					} : {}), F.Ux.transformers.addCurrentSiteInstall.bind(null, re))
				}
			}

			function* pe() {
				for (;;) {
					const {
						zoneId: A
					} = yield(0, e.qn)(Y.U4.GetInstalledAppsAssetsSaga), W = (yield(0, e.RE)(E.RX, Y.Nw, E.Jb.installs.default.name, E.Jb.installs.default.url(A))).filter(B => B.app.installable && B.versionTag !== B.app.infoVersion), re = W.reduce((B, ue) => (B[ue.app.alias] = (0, e.RE)(E.RX, Y.Nw, E.Jb.app.name, E.Jb.app.url(ue.app.alias || ue.appId), F.Ux.transformers.addAppVersionInfo.bind(null, ue)), B), {}), _e = yield(0, e.$6)(re), Ie = W.map(B => ({
						install: B,
						app: _e[B.app.alias]
					}));
					yield(0, e.gz)(Y.Nw.setUpdatableInstalls(Ie))
				}
			}

			function* q() {
				for (;;) return yield(0, e.qn)(Y.U4.GetAppsSaga), yield(0, e.RE)(E.RX, Y.Nw, E.Jb.apps.name, E.Jb.apps.url())
			}

			function* z() {
				for (;;) {
					const {
						queryParams: A
					} = yield(0, e.qn)(Y.U4.GetCategoriesSaga);
					return yield(0, e.RE)(E.RX, Y.Nw, E.Jb.categories.name, E.Jb.categories.url(A))
				}
			}

			function* D() {
				for (;;) {
					const {
						zoneId: A
					} = yield(0, e.qn)(Y.U4.GetInstallsSaga);
					return yield(0, e.RE)(E.RX, Y.Nw, E.Jb.installs.default.name, E.Jb.installs.default.url(A))
				}
			}

			function* H() {
				for (;;) {
					const {
						zoneId: A
					} = yield(0, e.qn)(Y.U4.GetMetadataSaga);
					return yield(0, e.RE)(E.RX, Y.Nw, E.Jb.metadata.get.name, E.Jb.metadata.get.url(A))
				}
			}

			function* Q() {
				for (;;) {
					const {
						appsList: A,
						installsList: R,
						metadata: W
					} = yield(0, e.qn)(Y.U4.GetRecommendedAppsSaga);
					yield(0, e.RE)(M, A, R, W)
				}
			}

			function* le() {
				for (;;) {
					const {
						zoneId: A,
						data: R
					} = yield(0, e.qn)(Y.U4.PostMetadataSaga);
					try {
						const {
							appsList: W,
							installsList: re,
							metadata: _e
						} = yield(0, e.Ys)(S), Ie = te({}, _e.value, {
							id: A,
							markets: [R]
						});
						yield(0, e.RE)(E.JX, Y.Nw, E.Jb.metadata.post.name, E.Jb.metadata.post.url(A), Ie), yield(0, e.RE)(M, W.value, re.value, Ie)
					} catch {}
				}
			}

			function* $() {
				for (;;) yield(0, e.qn)(Y.dg.CloudflareZoneChangeStart), yield(0, e.gz)(Y.Nw.zoneChangedSaga())
			}
			var se = [G(), pe(), ie(), x(), q(), D(), z(), H(), le(), Q(), $()];
			const ge = [...d, ...se];

			function* L() {
				yield all(ge)
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
					return h
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
			let t = function(C) {
				return C.RedirectToLogin = "RedirectToLogin", C.ExpiredToken = "ExpiredToken", C.BadToken = "BadToken", C.Init = "Init", C
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
			const h = C => {
					try {
						const w = (0, i.Z)(C);
						if (!w) throw new Error("Invalid JWT");
						return w
					} catch (w) {
						throw w
					}
				},
				d = C => {
					const w = new Date(C.exp * 1e3);
					return new Date > w
				},
				E = (C, w = window.document.location.toString()) => {
					(0, l.get)(`login?redirect_uri=${encodeURIComponent(w)}`).then(F => {
						var Y, te;
						const ne = (Y = F.body) === null || Y === void 0 || (te = Y.result) === null || te === void 0 ? void 0 : te.redirect_uri;
						ne && (window.location.href = ne)
					}).catch(F => {
						console.log("Failed login ", F)
					})
				},
				N = () => {
					let C = p.parse(location.search);
					const w = localStorage.getItem(u.m.CloudflareAppsToken) || C.token;
					if (w) {
						delete C.token, delete C.from_login;
						const F = p.stringify(C);
						window.history.replaceState({}, document.title, `${window.location.pathname}${F?`?${F}`:""}`)
					}
					return w
				},
				k = 2,
				y = C => {
					if (S() > k) throw new Error("redirect attempt limit reached");
					return E("login", C)
				},
				S = () => {
					let C = (0, e.Z)(localStorage.getItem(u.m.CloudflareAppsAuthAttempts));
					(0, r.Z)(C) || (C = 0, localStorage.setItem(u.m.CloudflareAppsAuthAttempts, (0, s.Z)(C)));
					const w = C + 1;
					return localStorage.setItem(u.m.CloudflareAppsAuthAttempts, (0, s.Z)(w)), w > k && localStorage.removeItem(u.m.CloudflareAppsAuthAttempts), w
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
						k = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(N).filter(function(y) {
						return Object.getOwnPropertyDescriptor(N, y).enumerable
					})), k.forEach(function(y) {
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
					var k = N.call(d, E || "default");
					if (typeof k != "object") return k;
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
					const k = get(E, N),
						y = get(d, N);
					return k && !isEqual(k, y)
				},
				o = {
					transformers: {
						transformAppIdsToApps: (d, E) => E.map(N => d.find(k => k.id === N)),
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
				h = d => {
					let E = ["by-cloudflare"];
					return d.filter(N => !E.includes(N.id) && N.visible).sort((N, k) => N.points < k.points ? 1 : 0)
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
						h = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(a).filter(function(d) {
						return Object.getOwnPropertyDescriptor(a, d).enumerable
					})), h.forEach(function(d) {
						i(c, d, a[d])
					})
				}
				return c
			}

			function p(c, g) {
				if (c == null) return {};
				var a = f(c, g),
					h, d;
				if (Object.getOwnPropertySymbols) {
					var E = Object.getOwnPropertySymbols(c);
					for (d = 0; d < E.length; d++) h = E[d], !(g.indexOf(h) >= 0) && (!Object.prototype.propertyIsEnumerable.call(c, h) || (a[h] = c[h]))
				}
				return a
			}

			function f(c, g) {
				if (c == null) return {};
				var a = {},
					h = Object.keys(c),
					d, E;
				for (E = 0; E < h.length; E++) d = h[E], !(g.indexOf(d) >= 0) && (a[d] = c[d]);
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
					var h = a.call(c, g || "default");
					if (typeof h != "object") return h;
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
				async request(g = "GET", a, h = {}) {
					const {
						body: d
					} = h, E = p(h, ["body"]);
					return fetch(v(this.options.baseUrl, a), s({
						method: g
					}, E, d ? {
						body: JSON.stringify(d)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(s({
							Accept: "application/json, text/plain, */*"
						}, h.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(g, a = {}) {
					const h = await this.request("GET", g, a);
					return this.parseJSONResponse(h)
				}
				async postJSON(g, a = {}) {
					const h = await this.request("POST", g, s({}, a, {
						headers: s({}, a.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(h)
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
					var k = N.call(d, E || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(d)
			}
			class v {
				constructor(E) {
					i(this, "name", void 0), i(this, "url", void 0), this.name = E.name, this.url = E.url
				}
			}

			function* t(d, E, N, k) {
				const y = (0, e.Z)(E),
					[S, C, w] = [`get${y}Sending`, `get${y}Success`, `get${y}Failed`];
				try {
					yield(0, p.gz)(d[S]());
					const F = yield(0, p.RE)(a, N);
					let Y = F;
					if (Y.error) {
						yield(0, p.gz)(d[w]());
						return
					}
					return k && (Y = yield k(F)), yield(0, p.gz)(d[C](Y)), Y
				} catch {
					yield(0, p.gz)(d[w]())
				}
			}

			function* o(d, E, N, k) {
				const y = (0, e.Z)(E),
					S = `get${y}Sending`,
					C = `get${y}Success`,
					w = `get${y}Failed`;
				try {
					yield(0, p.gz)(d[S]());
					const F = yield(0, p.RE)(h, {
						url: N,
						data: k
					});
					return yield(0, p.gz)(d[C](F)), F
				} catch {
					yield(0, p.gz)(d[w]())
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
				a = async d => f.L.fetchJSON(d), h = async d => {
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
							isTokenValid: h
						} = o;
						return r({}, t, {
							isTokenValid: h
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
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(g).filter(function(h) {
						return Object.getOwnPropertyDescriptor(g, h).enumerable
					})), a.forEach(function(h) {
						p(o, h, g[h])
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
					return J
				},
				Bt: function() {
					return o
				},
				Ji: function() {
					return Y
				},
				LO: function() {
					return c
				},
				Pk: function() {
					return C
				},
				WB: function() {
					return X
				},
				Wd: function() {
					return ne
				},
				Zj: function() {
					return N
				},
				e_: function() {
					return d
				},
				hk: function() {
					return F
				},
				jY: function() {
					return S
				},
				kF: function() {
					return te
				},
				kg: function() {
					return w
				},
				oD: function() {
					return h
				},
				pP: function() {
					return y
				},
				q4: function() {
					return k
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

			function u(M) {
				for (var G = 1; G < arguments.length; G++) {
					var ie = arguments[G] != null ? Object(arguments[G]) : {},
						x = Object.keys(ie);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(ie).filter(function(pe) {
						return Object.getOwnPropertyDescriptor(ie, pe).enumerable
					})), x.forEach(function(pe) {
						l(M, pe, ie[pe])
					})
				}
				return M
			}

			function l(M, G, ie) {
				return G = v(G), G in M ? Object.defineProperty(M, G, {
					value: ie,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[G] = ie, M
			}

			function v(M) {
				var G = t(M, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function t(M, G) {
				if (typeof M != "object" || M === null) return M;
				var ie = M[Symbol.toPrimitive];
				if (ie !== void 0) {
					var x = ie.call(M, G || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(M)
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
						options: Object.keys(o).filter(M => !["challenge_solved", "challenge_failed", "challenge_bypassed", "jschallenge_solved", "jschallenge_failed", "jschallenge_bypassed", "unknown"].includes(M)),
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn]
					},
					botScore: {
						label: "firewall.analytics.filters.labels.botScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: M => parseInt(M, 10),
						validationMessage: "firewall.analytics.filters.errors.botScore",
						validate: M => {
							const G = parseInt(M, 10);
							return G >= 0 && G <= 100
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
						validate: M => !isNaN(parseFloat(M)) && isFinite(parseFloat(M)),
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
						validate: M => !!M && !!M.length && (p.ipv4.test(M) || p.ipv6.test(M)),
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
						options: Object.keys(d).filter(M => M !== "unknown"),
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						urlParam: "service"
					},
					rayName: {
						label: "firewall.analytics.filters.labels.rayName",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals],
						example: "1a79a4d60de6718e",
						urlParam: "ray-id",
						parse: M => M.replace(/-[A-Z]{3}$/, "")
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
						parse: M => parseInt(M, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: M => {
							const G = parseInt(M, 10);
							return G >= 0 && G <= 100
						},
						urlParam: "waf-ml-score"
					},
					wafRceAttackScore: {
						label: "firewall.analytics.filters.labels.wafRceAttackScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: M => parseInt(M, 10),
						validationMessage: "firewall.analytics.filters.errors.wafRceAttackScore",
						validate: M => {
							const G = parseInt(M, 10);
							return G >= 0 && G <= 100
						},
						urlParam: "waf-rce-score"
					},
					wafMlSqliAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlSqliAttackScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: M => parseInt(M, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: M => {
							const G = parseInt(M, 10);
							return G >= 0 && G <= 100
						},
						urlParam: "waf-ml-sqli-score"
					},
					wafMlXssAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlXssAttackScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: M => parseInt(M, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: M => {
							const G = parseInt(M, 10);
							return G >= 0 && G <= 100
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
						parse: M => parseInt(M, 10),
						validationMessage: "firewall.analytics.filters.errors.zoneVersion",
						validate: M => parseInt(M) >= 0,
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
				N = (M, G, ie, x, pe, q, z) => {
					const D = u({}, E);
					return M || (delete D.botScore, delete D.botScoreSrcName), G || (delete D.ja3Hash, delete D.ja4, delete D.ja4Signals), ie || (delete D.wafMlAttackScore, delete D.wafMlSqliAttackScore, delete D.wafMlXssAttackScore, delete D.wafRceAttackScore), q || delete D.wafAttackScoreClass, x || delete D.zoneVersion, pe || delete D.apiGatewayMatchedEndpoint, z || delete D.zoneTag, D
				},
				k = {
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
				C = "encrypted_matched_data",
				w = {
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
				F = {
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
				te = ["REQUEST_HEADERS:HOST", "REQUEST_HEADERS:REFERER", "REQUEST_HEADERS:USER-AGENT"],
				ne = {
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
				X = "13335",
				J = "https://developers.cloudflare.com/ddos-protection/best-practices/respond-to-ddos-attacks/"
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
				p = a => Object.fromEntries(Object.entries(a).map(([h, d]) => [d, h])),
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

			function f(k) {
				for (var y = 1; y < arguments.length; y++) {
					var S = arguments[y] != null ? Object(arguments[y]) : {},
						C = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(S).filter(function(w) {
						return Object.getOwnPropertyDescriptor(S, w).enumerable
					})), C.forEach(function(w) {
						i(k, w, S[w])
					})
				}
				return k
			}

			function i(k, y, S) {
				return y = u(y), y in k ? Object.defineProperty(k, y, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[y] = S, k
			}

			function u(k) {
				var y = l(k, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function l(k, y) {
				if (typeof k != "object" || k === null) return k;
				var S = k[Symbol.toPrimitive];
				if (S !== void 0) {
					var C = S.call(k, y || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(k)
			}
			const v = "Notifications",
				t = "notification",
				o = (0, e.BC)`/${"accountId"}`,
				c = (0, e.BC)`${o}/notifications`,
				g = (0, e.BC)`${c}/destinations`,
				a = (0, e.BC)`${c}/create`,
				h = (0, e.BC)`${a}/${"alertType"}`,
				d = (0, e.BC)`${c}/edit/${"alertId"}`,
				E = f({
					account: o,
					alerts: c,
					destinations: g,
					createAlert: a,
					createAlertWithSelection: h,
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
					return et
				},
				AY: function() {
					return Ze
				},
				Am: function() {
					return k
				},
				B2: function() {
					return le
				},
				BB: function() {
					return te
				},
				BF: function() {
					return it
				},
				BQ: function() {
					return K
				},
				Cs: function() {
					return tt
				},
				E8: function() {
					return bt
				},
				Fl: function() {
					return ft
				},
				Fu: function() {
					return J
				},
				G_: function() {
					return E
				},
				Gc: function() {
					return qe
				},
				IO: function() {
					return de
				},
				JK: function() {
					return fe
				},
				K: function() {
					return w
				},
				KN: function() {
					return $e
				},
				LI: function() {
					return O
				},
				LX: function() {
					return He
				},
				L_: function() {
					return Ee
				},
				Ly: function() {
					return Wt
				},
				MR: function() {
					return se
				},
				Mj: function() {
					return L
				},
				NB: function() {
					return zt
				},
				Or: function() {
					return R
				},
				P5: function() {
					return Pt
				},
				PE: function() {
					return Ye
				},
				Pd: function() {
					return Ht
				},
				Pk: function() {
					return Je
				},
				Pp: function() {
					return Re
				},
				Q1: function() {
					return X
				},
				Qr: function() {
					return Ge
				},
				Qv: function() {
					return Qe
				},
				Rp: function() {
					return yt
				},
				Sh: function() {
					return dt
				},
				TZ: function() {
					return W
				},
				Tg: function() {
					return ce
				},
				U$: function() {
					return xe
				},
				Uy: function() {
					return Kt
				},
				Vw: function() {
					return G
				},
				W3: function() {
					return je
				},
				WR: function() {
					return Ce
				},
				WX: function() {
					return ze
				},
				XF: function() {
					return lt
				},
				Xc: function() {
					return ye
				},
				ZB: function() {
					return ne
				},
				Zs: function() {
					return Z
				},
				_f: function() {
					return ct
				},
				_k: function() {
					return we
				},
				b4: function() {
					return Oe
				},
				c2: function() {
					return $
				},
				cE: function() {
					return At
				},
				fE: function() {
					return Le
				},
				g7: function() {
					return Ne
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
					return ue
				},
				it: function() {
					return ke
				},
				jG: function() {
					return oe
				},
				jN: function() {
					return nt
				},
				m8: function() {
					return D
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
					return H
				},
				pi: function() {
					return z
				},
				rI: function() {
					return ge
				},
				s7: function() {
					return Pe
				},
				sO: function() {
					return Te
				},
				sg: function() {
					return at
				},
				tB: function() {
					return d
				},
				tN: function() {
					return Me
				},
				vV: function() {
					return j
				},
				vc: function() {
					return Ke
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
					var me = arguments[P] != null ? Object(arguments[P]) : {},
						Ae = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && Ae.push.apply(Ae, Object.getOwnPropertySymbols(me).filter(function(We) {
						return Object.getOwnPropertyDescriptor(me, We).enumerable
					})), Ae.forEach(function(We) {
						g(m, We, me[We])
					})
				}
				return m
			}

			function g(m, P, me) {
				return P = a(P), P in m ? Object.defineProperty(m, P, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[P] = me, m
			}

			function a(m) {
				var P = h(m, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function h(m, P) {
				if (typeof m != "object" || m === null) return m;
				var me = m[Symbol.toPrimitive];
				if (me !== void 0) {
					var Ae = me.call(m, P || "default");
					if (typeof Ae != "object") return Ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(m)
			}

			function d(m) {
				return m.filter(P => P.isSelected).reduce((P, {
					transferFee: me,
					isZoneEntitlementPresent: Ae
				}) => Ae ? P : P + me, 0)
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
			const k = "MMM D, YYYY";

			function y(m, P, me, Ae) {
				var We, Fe, pt, Et, _t, St, Ot, It, wt, Dt, Lt, Rt, kt, Mt, Gt, Nt, jt, Ut, vt, Bt, xt;
				const Vt = (((We = P.fees) === null || We === void 0 ? void 0 : We.registration_fee) !== "Unsupported" && ((Fe = P.fees) === null || Fe === void 0 ? void 0 : Fe.registration_fee) || 0) * 100,
					Yt = (((pt = P.fees) === null || pt === void 0 ? void 0 : pt.transfer_fee) !== "Unsupported" && ((Et = P.fees) === null || Et === void 0 ? void 0 : Et.transfer_fee) || 0) * 100,
					Qt = (((_t = P.fees) === null || _t === void 0 ? void 0 : _t.registration_fee) !== "Unsupported" && ((St = P.fees) === null || St === void 0 ? void 0 : St.registration_fee) || 0) * 100,
					Jt = (((Ot = P.fees) === null || Ot === void 0 ? void 0 : Ot.renewal_fee) !== "Unsupported" && ((It = P.fees) === null || It === void 0 ? void 0 : It.renewal_fee) || 0) * 100,
					Xt = (((wt = P.fees) === null || wt === void 0 ? void 0 : wt.redemption_fee) !== "Unsupported" && ((Dt = P.fees) === null || Dt === void 0 ? void 0 : Dt.redemption_fee) || 0) * 100,
					Ve = m[P.name];
				return {
					name: P.name,
					zone: Ve,
					entitlements: me,
					registryCheck: Ae,
					nameservers: P.name_servers,
					isAvailable: P.available,
					lastKnownStatus: P.last_known_status,
					authCode: P.auth_code,
					isEnterpriseZone: (Ve == null || (Lt = Ve.plan) === null || Lt === void 0 ? void 0 : Lt.legacy_id) === "enterprise",
					isActiveZone: (Ve == null ? void 0 : Ve.status) === "active",
					corResponsesPending: P.cor_responses_pending,
					isCorLocked: P.cor_locked,
					corLockedUntil: P.cor_locked_until ? p()(P.cor_locked_until).format(k) : null,
					isFullZone: (Ve == null ? void 0 : Ve.type) == o.xd.Full,
					isLocked: P.locked,
					registrar: P.current_registrar || v.JM,
					zoneId: Ve == null ? void 0 : Ve.id,
					currentExpiration: p()(P.expires_at).format(k),
					newExpiration: p()(P.expires_at).add(1, "year").format(k),
					wholesaleCost: Vt,
					transferFee: Yt,
					registrationFee: Qt,
					renewalFee: Jt,
					redemptionFee: Xt,
					lastEntitledAt: P.last_entitled_at ? new Date(P.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(me) && !!me.find(qt => qt.id === v.g5 && qt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: P.transfer_in && C(P.transfer_in) || o.BJ.Pending,
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
					materialChanges: F(P.material_changes),
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

			function C(m) {
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

			function w(m) {
				let P = m.extensions;
				(P == null ? void 0 : P.application_purpose) && (P == null ? void 0 : P.nexus_category) && (m.extensions = {
					nexusCategory: P.nexus_category,
					applicationPurpose: P.application_purpose
				});
				let me = c({}, typeof m.id == "string" ? {
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
				return I(me)
			}

			function F(m) {
				let P = [];
				const me = {
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
				for (const Ae in m) {
					const We = m[Ae],
						Fe = me[We];
					P.push(Fe)
				}
				return P
			}
			const Y = m => {
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
						nexusCategory: Y(m.extensions.nexus_category),
						applicationPurpose: m.extensions.application_purpose
					}
				} : {})
			}

			function ne(m = {}) {
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

			function X(m = {}) {
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

			function J(m) {
				const P = v.Py.concat(v.ui).reduce((me, Ae) => c({}, me, {
					[Ae]: []
				}), {});
				return m.forEach(me => {
					let Ae = M(me.registrar);
					Ae in P || (Ae = v.ui), at(me.name) && (Ae = "uk"), P[Ae].push(me)
				}), Object.keys(P).sort((me, Ae) => me.localeCompare(Ae)).map(me => ({
					registrar: me,
					domains: P[me]
				})).filter(me => me.domains.length > 0)
			}

			function M(m) {
				return m == null ? void 0 : m.toLowerCase().replace(/\s|,|\./g, "")
			}

			function G(m) {
				if (!m || !m.registrar) return "unknown";
				if (at(m.name)) return "uk";
				const P = M(m.registrar);
				return P in v.gM ? P : "unknown"
			}

			function ie(m, P) {
				return m.filter(me => M(me.registrar) === M(P))
			}
			const x = [];

			function pe(m) {
				return x.some(P => m.endsWith("." + P))
			}

			function q(m) {
				return !m.isEnterpriseZone || !Array.isArray(m.entitlements) ? !1 : !!m.entitlements.find(({
					id: P,
					allocation: me
				}) => P === v.g5 && me.value === !0)
			}

			function z(m) {
				var P;
				const me = [o.rj.CLIENT_HOLD, o.rj.SERVER_HOLD, o.rj.SERVER_TRANSFER_PROHIBITED, o.rj.PENDING_DELETE, o.rj.PENDING_TRANSFER, o.rj.CLIENT_TRANSFER_PROHIBITED];
				let Ae = !1,
					We = null;
				return (P = m.registryStatuses) === null || P === void 0 || P.some(Fe => {
					me.includes(Fe) && (We = Fe, Ae = !0)
				}), [Ae, We]
			}

			function D(m, P = []) {
				var me;
				if (!m) return [!1, t.keys.cannot_transfer_default];
				if (m.zone.status !== "active") return [!1, t.keys.cannot_transfer_zone_not_active];
				if (!m.isFullZone && !q(m)) return [!1, t.keys.cannot_transfer_zone_not_eligible];
				if (m.registrar === "Cloudflare") return [!1, t.keys.cannot_transfer_domain_on_cf];
				if (m.isAvailable) return [!1, t.keys.cannot_transfer_domain_available];
				if (!m.transferConditions) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if ((me = m.registryCheck) === null || me === void 0 ? void 0 : me.premium) return [!1, t.keys.cannot_transfer_domain_premium];
				if (H(m)) return [!1, t.keys.cannot_transfer_domain_transfer_in_progress];
				let Ae;
				for (Ae in m.transferConditions)
					if (!m.transferConditions[Ae]) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (pe(m.name) && !P.some(pt => m.name.endsWith("." + pt))) return [!1, t.keys.cannot_transfer_domain_tld_not_supported];
				const [We, Fe] = z(m);
				return We && Fe ? [!1, t.keys.cannot_transfer_domain_registry_status[Fe]] : [!0, ""]
			}

			function H(m) {
				var P, me;
				return !!m.transferIn && !((P = m.transferConditions) === null || P === void 0 ? void 0 : P.not_started) && !!(at(m.name) || ((me = m.registryStatuses) === null || me === void 0 ? void 0 : me.includes(o.rj.PENDING_TRANSFER)))
			}

			function Q(m) {
				return !!m.registrar && !!m.currentExpiration
			}

			function le(m) {
				const [P] = D(m);
				return Q(m) ? $e(m) ? o.M5.InProgressOrOnCF : P ? o.M5.Supported : o.M5.Unsupported : o.M5.Unknown
			}

			function $(m) {
				return m.transferIn && [o.lW.REJECTED, o.lW.NEEDED].includes(m.transferIn.enter_auth_code) || !1
			}

			function se(m) {
				return m.registrar === "Cloudflare"
			}

			function ge(m) {
				return !!(m == null ? void 0 : m.includes(o.rj.AUTO_RENEW_PERIOD))
			}

			function L(m) {
				return !!(m == null ? void 0 : m.includes(o.rj.PENDING_TRANSFER))
			}
			const A = "Invalid date";

			function R(m) {
				return m.newExpiration === A ? "Unavailable" : m.newExpiration
			}

			function W(m) {
				return m.currentExpiration === A ? "Unavailable" : m.currentExpiration
			}

			function re(m) {
				const P = !!(m.lastEntitledAt && m.isZoneEntitlementPresent === null);
				return [m.newExpiration, m.currentExpiration].some(Ae => Ae === A) || P || m.isEnterpriseZone && !m.isFullZone && !Array.isArray(m.entitlements)
			}

			function _e(m) {
				return m.transferIn && m.transferIn.approve_transfer === EApiTransferStatus.REJECTED || !1
			}

			function Ie(m) {
				return m.transferIn && m.transferIn.can_cancel_transfer || !1
			}

			function B(m) {
				return m.substring(m.indexOf("."))
			}

			function ue(m) {
				return m.map(P => P.name).map(P => B(P)).filter((P, me, Ae) => !Ae.includes(P, me + 1))
			}

			function Oe(m) {
				if (v.no) return [!0, ""];
				if (!se(m)) return [!1, o.ok.NotOnCF];
				if (m.isCorLocked) return [!1, m.corLockedUntil ? o.ok.CorLockedUntil : o.ok.CorLock];
				if (m.lastTransferredAt) {
					const P = p()(m.lastTransferredAt),
						me = p().duration(p()().diff(P)).as("days"),
						Ae = at(m.name);
					if (me < (Ae ? 1 : 60)) return [!1, Ae ? o.ok.RecentTransferUK : o.ok.RecentTransfer]
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

			function $e(m) {
				return Ne(m) || se(m)
			}

			function Me(m) {
				return !Ne(m) && se(m)
			}

			function Ne(m) {
				return !m || m.lastKnownStatus === "pendingTransfer" || m.lastKnownStatus === "transferFOAPending" || !se(m) && m.transferConditions && !m.transferConditions.not_started || !1
			}

			function Ye(m) {
				return !(pe(m.name) || m.transferConditions && !m.transferConditions.supported_tld)
			}

			function Qe(m) {
				return (m == null ? void 0 : m.includes("/")) ? !0 : m.split("").some(P => P.charCodeAt(0) > 123)
			}

			function ot(m, P) {
				return m.filter(me => !P.has(me.name))
			}

			function Je(m) {
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

			function tt(m) {
				const P = M(m);
				return v.gM[P] || "unknown"
			}

			function Ke(m) {
				return p()(m.paymentExpiresAt).isBefore(p()())
			}

			function nt(m) {
				return m.transferIn && m.transferIn.enter_auth_code === o.lW.REJECTED || !1
			}

			function Xe(m) {
				return transferOnboardingRegistrarWhitelist.some(P => P === M(m.registrar))
			}

			function fe(m) {
				const P = ["CU", "KP", "IR", "SY"];
				return m.filter(me => !P.includes(me.code))
			}

			function ce(m) {
				if (!!m) return `${m.charAt(0).toUpperCase()}${m.slice(1)}${m.charAt(m.length-1)==="."?"":"."}`
			}

			function he(m) {
				var P;
				return ((P = m.transferConditions) === null || P === void 0 ? void 0 : P.not_secure) === !1
			}

			function I(m) {
				const P = {};
				for (const [me, Ae] of Object.entries(m)) {
					if (Ae && typeof Ae == "string") {
						Object.assign(P, {
							[me]: Ae.trim()
						});
						continue
					}
					Object.assign(P, {
						[me]: Ae
					})
				}
				return P
			}

			function Z(m) {
				return p()(m).add(40, "days")
			}

			function Ee(m) {
				const P = m.paymentExpiresAt || m.payment_expires_at,
					me = Z(P);
				return p()().isBetween(P, me)
			}

			function Le(m) {
				var P;
				return !Array.isArray(m.registryStatuses) && !(0, e.isString)(m.registryStatuses) ? !1 : (P = m.registryStatuses) === null || P === void 0 ? void 0 : P.includes(o.rj.REDEMPTION_PERIOD)
			}

			function Re(m) {
				return [".us"].includes(m)
			}

			function ke(m) {
				return [".us"].includes(m)
			}

			function Be(m) {
				switch (m) {
					case ".us":
						return Ue();
					default:
						return []
				}
			}

			function je(m) {
				switch (m) {
					case ".us":
						return be;
					default:
						return {}
				}
			}
			const be = {
				[o.A9.P3]: [o.Fi.C11]
			};

			function Ue() {
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

			function He(m, P, me) {
				return P[P.length - 1][me] === m[me]
			}

			function Ge(m) {
				return Boolean(Object.keys(m).length === 0)
			}

			function it(m) {
				return p()().add(m, "year").format(k)
			}

			function ct({
				accountName: m
			}) {
				var P;
				const me = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((P = m.toLowerCase().match(me)) === null || P === void 0 ? void 0 : P[0]) || ""
			}

			function j(m) {
				return !!m.match(i.default.email)
			}

			function oe(m) {
				return m === "Registration banned zone error"
			}

			function ye(m) {
				return m == null ? void 0 : m.startsWith("Quote error")
			}

			function Te(m) {
				return m === (0, u.ZP)(t.keys.registration_checkout_trademark_notice_error_message)
			}

			function we(m) {
				return m === "DNS conflict"
			}

			function xe(m) {
				return m === f.W7.PENDING_UPDATE
			}

			function qe(m) {
				return m ? Object.values(f.wR).filter(P => P !== f.wR.OFFBOARDED).includes(m) : !1
			}

			function Pe(m) {
				return m ? [f.wR.LOCKED, f.wR.ONBOARDED, f.wR.ONBOARDING_INITIATED, f.wR.PENDING_REGISTRY_LOCK, f.wR.PENDING_REGISTRY_UNLOCK, f.wR.PENDING_UNLOCK_APPROVAL].includes(m) : !1
			}

			function Ct(m) {
				return m ? f.wR.UNLOCKED === m : !1
			}

			function T(m) {
				return m ? f.wR.LOCKED === m : !1
			}

			function O(m) {
				return m ? f.wR.PENDING_REGISTRY_LOCK === m : !1
			}

			function K(m) {
				return m ? [f.wR.PENDING_REGISTRY_UNLOCK, f.wR.PENDING_UNLOCK_APPROVAL].includes(m) : !1
			}

			function de(m) {
				var P;
				return !1
			}

			function Ce(m) {
				var P;
				return !1
			}

			function et(m) {
				var P;
				return !1
			}

			function lt(m) {
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

			function Ze(m) {
				var P;
				const me = (P = gt(m)) === null || P === void 0 ? void 0 : P.toLowerCase();
				return me ? t.keys.protection_status[me] : t.keys.protection_status.unknown
			}

			function ut(m) {
				return ["com", "net"].includes(m)
			}

			function ft(m) {
				const P = (0, l.pu)(m);
				return ut(P) ? f.wR.PENDING_REGISTRY_LOCK : f.wR.LOCKED
			}

			function dt(m) {
				return (0, l.pu)(m) === "co" ? 5 : 10
			}

			function Tt(m, P) {
				return P ? 1 : (0, l.pu)(m) === "co" ? 5 : (0, l.pu)(m) === "org" ? 1 : 10
			}

			function at(m) {
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
					return q
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
				h = document.location.search.includes("domain_transfer_onboarding"),
				d = D => !!(h || (0, s.z1)(a)(D) || (0, r.J8)("domain_transfer_onboarding")),
				E = null,
				N = "@abcABC1234567890123456",
				k = (0, e.BC)`/${"accountId"}`,
				y = (0, e.BC)`${k}/add-site`,
				S = (0, e.BC)`${k}/domains`,
				C = (0, e.BC)`${S}/${"zoneName"}`,
				w = (0, e.BC)`${C}/configuration`,
				F = (0, e.BC)`${C}/contacts`,
				Y = (0, e.BC)`${S}/pricing`,
				te = (0, e.BC)`${S}/protection`,
				ne = (0, e.BC)`${S}/register`,
				X = (0, e.BC)`${ne}/checkout`,
				J = (0, e.BC)`${ne}/success`,
				M = (0, e.BC)`${S}/tlds`,
				G = (0, e.BC)`${S}/transfer`,
				ie = (0, e.BC)`${S}/transfer/${"zoneName"}`,
				x = (0, e.BC)`/registrar/accounts/verify_email`,
				pe = (0, e.BC)`/registrar/domains/verify_email`,
				q = {
					addSite: y,
					domains: S,
					domainsDomain: C,
					domainsDomainConfiguration: w,
					domainsDomainContacts: F,
					domainsPricing: Y,
					domainsProtection: te,
					domainsRegister: ne,
					domainsRegisterCheckout: X,
					domainsRegisterSuccess: J,
					domainsTlds: M,
					domainsTransfer: G,
					domainsTransferZone: ie,
					registrarAccountsVerifyEmail: x,
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
						h = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(a).filter(function(d) {
						return Object.getOwnPropertyDescriptor(a, d).enumerable
					})), h.forEach(function(d) {
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
					var h = a.call(c, g || "default");
					if (typeof h != "object") return h;
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
					return k
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
					return h
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
				h = function(y) {
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
				k = function(y) {
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
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(g).filter(function(h) {
						return Object.getOwnPropertyDescriptor(g, h).enumerable
					})), a.forEach(function(h) {
						p(o, h, g[h])
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
					return F
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
					return ne
				},
				x1: function() {
					return i
				},
				lW: function() {
					return l
				},
				UA: function() {
					return C
				},
				K5: function() {
					return c
				},
				Ii: function() {
					return y
				},
				PJ: function() {
					return Y
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
					theme: X
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
					theme: X
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
					theme: X
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
					theme: X
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
				a = () => r().createElement(h, null, r().createElement("svg", {
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
				h = (0, s.createComponent)(({
					theme: X
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
					theme: X
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
				N = () => r().createElement(k, null, r().createElement("svg", {
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
				k = (0, s.createComponent)(({
					theme: X
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
					theme: X
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
				C = () => r().createElement(w, null, r().createElement("svg", {
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
				w = (0, s.createComponent)(({
					theme: X
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
				F = () => r().createElement("svg", {
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
				Y = () => r().createElement("svg", {
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
				ne = () => r().createElement("svg", {
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
					return h
				},
				rL: function() {
					return t
				},
				wW: function() {
					return i
				}
			});

			function e(k) {
				for (var y = 1; y < arguments.length; y++) {
					var S = arguments[y] != null ? Object(arguments[y]) : {},
						C = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(S).filter(function(w) {
						return Object.getOwnPropertyDescriptor(S, w).enumerable
					})), C.forEach(function(w) {
						r(k, w, S[w])
					})
				}
				return k
			}

			function r(k, y, S) {
				return y = s(y), y in k ? Object.defineProperty(k, y, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[y] = S, k
			}

			function s(k) {
				var y = p(k, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function p(k, y) {
				if (typeof k != "object" || k === null) return k;
				var S = k[Symbol.toPrimitive];
				if (S !== void 0) {
					var C = S.call(k, y || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(k)
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
				h = "YYYY-MM-DD HH:mm:SS ZZ",
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
						document.addEventListener("mousemove", h), document.addEventListener("mousedown", h), document.addEventListener("mouseup", h), document.addEventListener("pointermove", h), document.addEventListener("pointerdown", h), document.addEventListener("pointerup", h), document.addEventListener("touchmove", h), document.addEventListener("touchstart", h), document.addEventListener("touchend", h)
					}

					function a() {
						document.removeEventListener("mousemove", h), document.removeEventListener("mousedown", h), document.removeEventListener("mouseup", h), document.removeEventListener("pointermove", h), document.removeEventListener("pointerdown", h), document.removeEventListener("pointerup", h), document.removeEventListener("touchmove", h), document.removeEventListener("touchstart", h), document.removeEventListener("touchend", h)
					}

					function h(d) {
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
					return x
				},
				authyAuthPutSave: function() {
					return pe
				},
				basePath: function() {
					return h
				},
				fetchCertificateApiKey: function() {
					return X
				},
				fetchUserServiceKey: function() {
					return te
				},
				performLogout: function() {
					return Y
				},
				prependApiRoute: function() {
					return N
				},
				sendCookies: function() {
					return k
				},
				twoFacDisableDelete: function() {
					return ie
				},
				twoFacGoogleAuthEnablePost: function() {
					return M
				},
				twoFacGoogleAuthQRCodeGet: function() {
					return G
				},
				updateCertificateApiKey: function() {
					return J
				},
				updateUserServiceKey: function() {
					return ne
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

			function o(q) {
				for (var z = 1; z < arguments.length; z++) {
					var D = arguments[z] != null ? Object(arguments[z]) : {},
						H = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(D).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(D, Q).enumerable
					})), H.forEach(function(Q) {
						c(q, Q, D[Q])
					})
				}
				return q
			}

			function c(q, z, D) {
				return z = g(z), z in q ? Object.defineProperty(q, z, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : q[z] = D, q
			}

			function g(q) {
				var z = a(q, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function a(q, z) {
				if (typeof q != "object" || q === null) return q;
				var D = q[Symbol.toPrimitive];
				if (D !== void 0) {
					var H = D.call(q, z || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(q)
			}
			const h = "/api/v4",
				d = q => {
					q.url.charAt(0) !== "/" && (q.url = `/${q.url}`)
				},
				E = q => {
					n.g.bootstrap && n.g.bootstrap.atok && (q.headers = o({}, q.headers, {
						"X-ATOK": n.g.bootstrap.atok
					}))
				},
				N = q => {
					q.url = h + q.url
				},
				k = q => {
					q.credentials = "same-origin"
				},
				y = q => {
					const z = q.callback;
					q.callback = (D, H) => {
						D && !q.hideErrorAlert && S(D, q), z && z(D, H)
					}
				},
				S = (q, z) => {
					const D = q.body && q.body.errors;
					(D ? w(z, D) : F(z, q)).forEach(Q => {
						(0, s.bh)().dispatch(p.IH("error", typeof Q == "string" ? Q : Q.message)), v().sendEvent("error notification shown", {
							errorCode: typeof Q == "string" ? void 0 : Q.code
						}), {
							REDUX_LOGGER: void 0
						}.TESTING && n.g.logAppError(typeof Q == "string" ? Q : Q.message)
					})
				};

			function C(q, z) {
				return !!(z.code === 1001 && q.url && q.url.match(/subscription/gi) || z.code === 10042 && q.url && q.url.match(/r2/gi))
			}
			const w = (q, z) => z.filter(D => !C(q, D)).map(({
					message: D,
					code: H,
					error_chain: Q
				}) => {
					switch (H) {
						case 9300:
						case 9301:
						case 9303:
							Y();
						default:
							break
					}
					const le = D.split(" ").length > 1,
						$ = D.split(".").length > 1,
						se = !le && $;
					let ge = D;
					if (se) try {
						ge = (0, f.ZP)(D)
					} catch {}
					if (D.startsWith("billing.")) return {
						message: `Error while processing payment: ${ge}.`,
						code: H
					};
					const L = Array.isArray(Q) ? Q.map(A => A.message).join(". ") : "";
					return {
						message: `${ge}${typeof H!="undefined"?` (Code: ${H})`:""} ${L}`,
						code: H
					}
				}),
				F = (q, z) => [`API Request Failed: ${q.method} ${q.url} (${z.status})`];
			e.beforeSend(d), e.beforeSend(E), e.beforeSend(N), e.beforeSend(k), e.beforeSend(y);
			const Y = q => e.del("/user/sessions/current").then(z => {
				if (i.E.remove(u.Qq), q) window.location.href = q;
				else {
					var D, H;
					const Q = (D = (H = z.body.result) === null || H === void 0 ? void 0 : H.redirect_uri) !== null && D !== void 0 ? D : "/login";
					window.location.href = Q
				}
			}).catch(z => {
				console.error("Failed to logout", z), t.Tb(z)
			});

			function te(q) {
				return e.get("/user/service_keys/" + q)
			}

			function ne(q, z) {
				return e.put("/user/service_keys/" + q, {
					body: z
				})
			}

			function X(q) {
				return e.post("/user/service_keys/certificateapi", {
					body: q
				})
			}

			function J(q) {
				return e.put("/user/service_keys/certificateapi", {
					body: q
				})
			}
			const M = function(q, z) {
					var D = {
						google_auth_code: q
					};
					return e.post("/user/two_factor_authentication/google_authenticator/enable", {
						body: D
					}, z)
				},
				G = function(q) {
					return e.get("/user/two_factor_authentication/google_authenticator/qr_code", void 0, q)
				},
				ie = function(q, z) {
					var D = {
						auth_token: q
					};
					return e.del("/user/two_factor_authentication", {
						body: D
					}, z)
				},
				x = function(q, z) {
					return e.post("/user/two_factor_authentication", {
						body: q
					}, z)
				},
				pe = function(q, z) {
					return e.put("/user/two_factor_authentication", {
						body: q
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
					return k
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
				v = w => (0, p.Yd)(s.Q).find(F => s.Q[F] === w) || u,
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
				h = {
					test: [...g, ...o, ...t],
					development: [...g, ...o, ...t],
					staging: [...g, ...o, ...t],
					production: [...g, ...o]
				},
				d = (w, F) => {
					const Y = s.Q[F];
					return w ? a.production.includes(Y) : h.production.includes(Y)
				},
				E = w => Object.keys(s.Q).filter(F => d(w, F)),
				N = w => {
					const F = s.Q[w];
					return o.includes(F)
				},
				k = (w, F) => w ? y[F] : S[F],
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
				C = r().locale();
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
			}), r().locale(C)
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

			function i(a, ...h) {
				return f.t(a, ...h)
			}
			const u = f;

			function l(a, ...h) {
				return markdown(i(a, h))
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

			function t(a, h) {
				return a in h ? h[a] : void 0
			}
			const o = s.cC,
				c = s.oc,
				g = s.QT
		},
		"../react/utils/url.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Ct: function() {
					return k
				},
				Fl: function() {
					return H
				},
				KT: function() {
					return le
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
					return q
				},
				Y_: function() {
					return g
				},
				e1: function() {
					return N
				},
				el: function() {
					return ne
				},
				hW: function() {
					return J
				},
				pu: function() {
					return Q
				},
				qR: function() {
					return te
				},
				td: function() {
					return h
				},
				uW: function() {
					return G
				}
			});
			var e = n("../../../../node_modules/query-string/query-string.js"),
				r = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				p = n("../react/pages/r2/routes.ts"),
				f = n("../react/pages/zoneless-workers/routes.ts"),
				i = n("../react/pages/pages/routes.ts");

			function u($) {
				for (var se = 1; se < arguments.length; se++) {
					var ge = arguments[se] != null ? Object(arguments[se]) : {},
						L = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(ge).filter(function(A) {
						return Object.getOwnPropertyDescriptor(ge, A).enumerable
					})), L.forEach(function(A) {
						l($, A, ge[A])
					})
				}
				return $
			}

			function l($, se, ge) {
				return se = v(se), se in $ ? Object.defineProperty($, se, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[se] = ge, $
			}

			function v($) {
				var se = t($, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function t($, se) {
				if (typeof $ != "object" || $ === null) return $;
				var ge = $[Symbol.toPrimitive];
				if (ge !== void 0) {
					var L = ge.call($, se || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)($)
			}
			const {
				endsWithSlash: o
			} = s.default, c = ($, se) => {
				const ge = $.replace(o, "").split("/");
				return ge.slice(0, 2).concat([se]).concat(ge.slice(3)).join("/")
			}, g = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), a = $ => `/${$.replace(o,"").replace(/^\//,"")}`, h = $ => E("add-site", $), d = $ => E("billing", $), E = ($, se) => se ? `/${se}${$?`/${$}`:""}` : `/?to=/:account/${$}`, N = () => {
				const $ = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return $ ? $[1] : null
			}, k = ($, se) => r().stringify(u({}, r().parse($), se)), y = ($ = "") => $.toString().replace(/([\/]{1,})$/, ""), S = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/forgot-email", "/login-help", "/profile", "/zones"], C = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, w = /^\/(\w{32,})(\/[^.]*)?/, F = $ => S.includes($), Y = $ => !F($), te = $ => !F($) && w.test($), ne = $ => !F($) && C.test($), X = $ => C.exec($), J = $ => {
				if (ne($)) return $.split("/").filter(se => se.length > 0)[1]
			}, M = $ => w.exec($), G = $ => {
				if (te($)) {
					const se = M($);
					if (se) return se[1]
				}
			}, ie = $ => te($) && $.split("/")[2] === "register-domain", x = $ => ie($) ? $.split("/") : null, pe = $ => {
				if (ne($)) {
					const [, , , se, ge, L, A, R] = $.split("/");
					return se === "traffic" && ge === "load-balancing" && L === "pools" && A === "edit" && R
				}
			}, q = $ => {
				const se = x($);
				if (se) return se[3]
			}, z = ($, se) => {
				var ge, L;
				return ((ge = $.pattern.match(/\:/g)) !== null && ge !== void 0 ? ge : []).length - ((L = se.pattern.match(/\:/g)) !== null && L !== void 0 ? L : []).length
			}, D = [...Object.values(p._j), ...Object.values(f._j), ...Object.values(i._j)].sort(z);

			function H($) {
				if (!Y($)) return $;
				for (const R of D)
					if (R.expression.test($)) return R.pattern;
				const se = x($);
				if (se) {
					const [, , R, , ...W] = se;
					return `/:accountId/${R}/:domainName/${W.join("/")}`
				}
				if (pe($)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const L = X($);
				if (L) {
					const [, , , , R] = L;
					return `/:accountId/:zoneName${R||""}`
				}
				const A = M($);
				if (A) {
					const [, , R] = A;
					return `/:accountId${R||""}`
				}
				return $
			}

			function Q($) {
				if (!!$) try {
					const ge = $.split(".").pop();
					if (ge && ge.length > 0) return ge
				} catch {}
			}

			function le($, se = document.location.href) {
				try {
					const ge = new URL($),
						L = new URL(se);
					if (ge.origin === L.origin) return `${ge.pathname}${ge.search}${ge.hash}`
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
					return Xe
				},
				IM: function() {
					return nt
				},
				yV: function() {
					return tt
				},
				Ug: function() {
					return Je
				},
				v_: function() {
					return Ke
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
				g = n("../utils/getDashVersion.ts"),
				a = n("../react/common/selectors/accountSelectors.ts");

			function h(fe) {
				for (var ce = 1; ce < arguments.length; ce++) {
					var he = arguments[ce] != null ? Object(arguments[ce]) : {},
						I = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(he).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(he, Z).enumerable
					})), I.forEach(function(Z) {
						d(fe, Z, he[Z])
					})
				}
				return fe
			}

			function d(fe, ce, he) {
				return ce = E(ce), ce in fe ? Object.defineProperty(fe, ce, {
					value: he,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : fe[ce] = he, fe
			}

			function E(fe) {
				var ce = N(fe, "string");
				return typeof ce == "symbol" ? ce : String(ce)
			}

			function N(fe, ce) {
				if (typeof fe != "object" || fe === null) return fe;
				var he = fe[Symbol.toPrimitive];
				if (he !== void 0) {
					var I = he.call(fe, ce || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ce === "string" ? String : Number)(fe)
			}
			const k = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				y = (0, o.Z)(fe => {
					try {
						return k.assertDecode((0, u.parse)(fe))
					} catch (ce) {
						return console.error(ce), {}
					}
				}),
				S = fe => (ce, he, I) => {
					try {
						const ke = window.location.pathname,
							Be = (0, p.bh)().getState(),
							je = y(document.cookie),
							be = h({
								page: (0, l.Fl)(I.page || window.location.pathname),
								dashVersion: (0, g.t)()
							}, je);
						if (ce === "identify") {
							var Z, Ee;
							const Ue = {
								gates: (0, c.T2)(Be) || {},
								country: (Z = n.g) === null || Z === void 0 || (Ee = Z.bootstrap) === null || Ee === void 0 ? void 0 : Ee.ip_country
							};
							return fe(ce, he, h({}, be, Ue, I))
						} else {
							const Ue = {
								accountId: (0, l.uW)(ke),
								zoneName: (0, l.hW)(ke),
								domainName: (0, l.Uh)(ke)
							};
							if ((0, l.qR)(ke)) {
								var Le;
								const He = (0, a.D0)(Be);
								Ue.isEntAccount = He == null || (Le = He.meta) === null || Le === void 0 ? void 0 : Le.has_enterprise_zones
							}
							if ((0, l.el)(ke)) {
								var Re;
								const He = (0, v.nA)(Be);
								Ue.zoneId = He == null ? void 0 : He.id, Ue.plan = He == null || (Re = He.plan) === null || Re === void 0 ? void 0 : Re.legacy_id
							}
							return fe(ce, he, h({}, be, Ue, I))
						}
					} catch (ke) {
						return console.error(ke), fe(ce, he, I)
					}
				},
				C = fe => async (ce, he, I) => {
					try {
						return await fe(ce, he, I)
					} catch (Z) {
						if (console.error(Z), !Ke()) throw Z;
						return {
							status: "rejected",
							reason: Z
						}
					}
				};
			var w = n("../react/common/middleware/sparrow/errors.ts"),
				F = n("../react/pages/firewall/bots/tracking.ts"),
				Y = n("../react/pages/caching/tracking.tsx"),
				te = n("../react/pages/magic/packet-captures/constants.ts"),
				ne = n("../react/pages/firewall/page-shield/tracking.ts"),
				X = n("../react/pages/firewall/rulesets/tracking.tsx"),
				J = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				M = n("../react/pages/spectrum/tracking.tsx"),
				G = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				ie = n("../react/pages/security-center/tracking.ts"),
				x = n("../react/pages/firewall/api-shield/tracking.ts"),
				pe = n("../react/pages/home/configurations/lists/tracking.ts"),
				q = n("../react/pages/traffic/load-balancing/tracking.ts"),
				z = n("../react/pages/home/alerts/tracking.ts"),
				D = n("../react/pages/dns/dns-records/tracking.ts"),
				H = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				Q = n("../react/pages/traffic/argo/tracking.ts"),
				le = n("../react/pages/magic/network-monitoring/constants.ts"),
				$ = n("../react/pages/firewall/security-analytics/logs/constants.ts"),
				se = n("../react/pages/magic/overview/tracking.ts"),
				ge = n("../react/pages/hyperdrive/tracking.ts"),
				L = n("../react/pages/home/domain-registration/tracking.ts"),
				A = n("../react/pages/zoneless-workers/constants.ts");
			const W = ((fe, ce, ...he) => t.eg.union([t.eg.literal(fe), t.eg.literal(ce), ...he.map(I => t.eg.literal(I))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click cancel downgrade", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click deflect community TSF (3.0)", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on edit snippet", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "Explore demo button click", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Free Long Wait", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open configuration switcher sidemodal", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "Request trial button click", "resend verification email", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select file", "Select hostname success", "select language", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", A.QV.clickedDownloadAnalytics, A.QV.clickedPrintAnalytics, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", F.N3.INITIAL_FETCH_SCORES, F.N3.FETCH_CONFIGURATION, F.N3.INITIAL_FETCH_TIME_SERIES, F.N3.INITIAL_FETCH_ATTRIBUTES, F.N3.UPDATE_SETTINGS, F.N3.DELETE_RULE, F.N3.UPDATE_RULE, F.N3.FETCH_RULES, F.N3.CONFIGURE_BOT_MANAGEMENT, F.N3.WAF_RULES_REDIRECT, G.F.TOGGLE_TCP_PROTECTION, G.F.CREATE_SYN_PROTECTION_RULE, G.F.UPDATE_SYN_PROTECTION_RULE, G.F.CREATE_TCP_FLOW_PROTECTION_RULE, G.F.UPDATE_TCP_FLOW_PROTECTION_RULE, G.F.CREATE_SYN_PROTECTION_FILTER, G.F.UPDATE_SYN_PROTECTION_FILTER, G.F.CREATE_TCP_FLOW_PROTECTION_FILTER, G.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, ne.F.MANAGE_PAGE_SHIELD_POLICY, ne.F.CONFIGURE_PAGE_SHIELD, ne.F.VIEW_DETECTED_CONNECTIONS, ne.F.VIEW_DETECTED_SCRIPTS, ne.F.VIEW_PAGE_SHIELD_POLICIES, ne.F.VIEW_PAGE_SHIELD_SETTINGS, pe.y.CREATE_LIST, pe.y.DELETE_LIST, pe.y.ADD_LIST_ITEM, pe.y.DELETE_LIST_ITEM, ge.KO.PURCHASE_WORKERS_PAID, ge.KO.LIST_CONFIGS, ge.KO.CREATE_HYPERDRIVE_CONFIG, ge.KO.VIEW_CONFIG_DETAILS, ge.KO.UPDATE_CACHING_SETTINGS, ge.KO.DELETE_HYPERDRIVE_CONFIG, ge.KO.CLICK_HYPERDRIVE_DOCUMENTATION, ge.KO.CLICK_GET_STARTED_GUIDE, ge.KO.CLICK_CONNECTIVITY_GUIDES, ge.KO.CLICK_QUICK_LINK, M.N.CNAME, M.N.IP_ADDRESS, M.N.LB, M.N.UPDATE_CNAME, M.N.UPDATE_IP_ADDRESS, M.N.UPDATE_LB, M.N.DISABLE, Y.N.TIERED_CACHE, Y.N.CACHE_PURGE, Y.N.CACHE_ANALYTICS, ...(0, X.x4)(), J.N.CREATE, J.N.EVENTS, J.N.ANALYTICS, J.N.UPDATE, J.N.GENERATE_PREVIEW, ie.R.INITIATE_URL_SCAN, ie.R.LOAD_SCAN_INFO, ie.v.EXPAND_INSIGHT_ROW, ie.v.CLICK_RESOLVE_BUTTON, ie.v.FOLLOW_RESOLVE_URL, ie.v.MANAGE_INSIGHT, ie.v.CLICK_SCAN_NOW, ie.v.CLICK_EXPORT_INSIGHTS, x.Fj[x.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, x.Fj[x.kq.ENDPOINT_MANAGEMENT].detailedMetrics, x.Fj[x.kq.ENDPOINT_MANAGEMENT].createEndpoint, x.Fj[x.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, x.Fj[x.kq.ENDPOINT_MANAGEMENT].deployRouting, x.Fj[x.kq.ENDPOINT_MANAGEMENT].deleteRouting, x.Fj[x.kq.API_DISCOVERY].viewDiscoveredEndpoints, x.Fj[x.kq.API_DISCOVERY].saveDiscoveredEndpoint, x.Fj[x.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, x.Fj[x.kq.SCHEMA_VALIDATION].viewSchemasList, x.Fj[x.kq.SCHEMA_VALIDATION].uploadSchema, x.Fj[x.kq.SCHEMA_VALIDATION].viewSchemaAdoption, x.Fj[x.kq.SCHEMA_VALIDATION].downloadSchema, x.Fj[x.kq.SCHEMA_VALIDATION].deleteSchema, x.Fj[x.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, x.Fj[x.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, x.Fj[x.kq.SEQUENCE_ANALYTICS].viewSequencesPage, x.Fj[x.kq.JWT_VALIDATION].viewJWTRules, x.Fj[x.kq.JWT_VALIDATION].addJWTRule, x.Fj[x.kq.JWT_VALIDATION].editJWTRule, x.Fj[x.kq.JWT_VALIDATION].deleteJWTRule, x.Fj[x.kq.JWT_VALIDATION].reprioritizeJWTRule, x.Fj[x.kq.JWT_VALIDATION].viewJWTConfigs, x.Fj[x.kq.JWT_VALIDATION].addJWTConfig, x.Fj[x.kq.JWT_VALIDATION].editJWTConfig, x.Fj[x.kq.JWT_VALIDATION].deleteJWTConfig, x.Fj[x.kq.SETTINGS].redirectToFirewallRulesTemplate, x.Fj[x.kq.SETTINGS].redirectToPages, x.Fj[x.kq.SETTINGS].listSessionIdentifiers, x.Fj[x.kq.SETTINGS].listRequestsContainingSessionIdentifiers, x.Fj[x.kq.SETTINGS].addOrRemoveSessionIdentifiers, x.Fj[x.kq.SEQUENCE_RULES].listSequenceRules, x.Fj[x.kq.SEQUENCE_RULES].deleteSequenceRule, x.Fj[x.kq.SEQUENCE_RULES].reorderSequenceRule, x.Fj[x.kq.SEQUENCE_RULES].createSequenceRule, x.Fj[x.kq.SEQUENCE_RULES].editSequenceRule, q.Z.CREATE_AND_DEPLOY, q.Z.ANALYTICS, z.y.SECONDARY_DNS_NOTIFICATION_CREATE, z.y.SECONDARY_DNS_NOTIFICATION_UPDATE, z.y.SECONDARY_DNS_NOTIFICATION_DELETE, D.U.ZONE_TRANSFER_SUCCESS, D.U.DNS_RECORD_CREATE, D.U.DNS_RECORD_UPDATE, D.U.DNS_RECORD_DELETE, H.Y.PEER_DNS_CREATE, H.Y.PEER_DNS_UPDATE, H.Y.PEER_DNS_DELETE, H.Y.ZONE_TRANSFER_ENABLE, H.Y.ZONE_TRANSFER_DISABLE, Q.V.ARGO_ENABLEMENT, Q.V.ARGO_GEO_ANALYTICS_FETCH, Q.V.ARGO_GLOBAL_ANALYTICS_FETCH, te.X.VIEW_BUCKETS_LIST, te.X.CREATE_BUCKET, te.X.VALIDATE_BUCKET, te.X.DELETE_BUCKET, te.X.VIEW_CAPTURES_LIST, te.X.CREATE_SIMPLE_CAPTURE, te.X.CREATE_FULL_CAPTURE, te.X.VIEW_FULL_CAPTURE, te.X.DOWNLOAD_SIMPLE_CAPTURE, le.bK.VIEW_RULES, le.bK.CREATE_RULE, le.bK.UPDATE_RULE, le.bK.DELETE_RULE, le.bK.VIEW_CONFIGURATION, le.bK.CREATE_CONFIGURATION, le.bK.UPDATE_CONFIGURATION, le.bK.DELETE_CONFIGURATION, se.r8.VIEW_ALERTS, se.r8.VIEW_ALERTS_HISTORY, se.r8.MAGIC_OVERVIEW_ANALYTICS, $.o4.CLICK_ADAPTIVE_SAMPLING, $.o4.CLICK_TO_LOG_EXPLORER_BANNER, $.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, $.o4.CLICK_SWITCH_TO_RAW_LOGS, $.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", L.U.REGISTER_DOMAIN_SEARCH_SUBMIT, L.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, L.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, L.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, L.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, L.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, L.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, L.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, L.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, L.U.REGISTER_DOMAIN_CHECKOUT_ERROR, L.U.TRANSFER_DOMAIN_CHANGE_STEP, L.U.RENEW_DOMAIN_COMPLETED, L.U.RESTORE_DOMAIN_INIT, L.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, L.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, L.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, L.U.RESTORE_DOMAIN_FAILURE, L.U.RESTORE_DOMAIN_COMPLETED, L.U.DOMAIN_DELETE_INIT, L.U.DOMAIN_DELETE_COMPLETED, L.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, L.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, L.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, L.U.DOMAIN_DELETE_CONFIRM_DELETE, L.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, L.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, L.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, L.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, L.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL),
				re = t.eg.exactStrict(t.eg.object({
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
					previous_selection: t.eg.any.optional,
					new_selection: t.eg.any.optional,
					payment_method: t.eg.string.optional,
					payment_option: t.eg.string.optional,
					selection: t.eg.any.optional,
					numDomainsInCart: t.eg.any.optional,
					uniqueTopLevelDomains: t.eg.any.optional
				})),
				_e = (fe, ce) => {
					const [he, I] = Ie(ce);
					let Z, Ee;
					return (0, t.nM)(W.decode(fe)) && (Z = new w.Uh(fe)), I && I.length > 0 && (Ee = new w.oV(fe, I)), [he, Z, Ee]
				},
				Ie = fe => {
					const ce = re.decode(fe);
					if ((0, t.nM)(ce)) {
						const he = ce.left.map(({
							context: I
						}) => I.map(({
							key: Z
						}) => Z)).reduce((I, Z) => I.concat(Z), []).filter(I => I in fe);
						return [B(he, fe), he]
					}
					return [fe, []]
				},
				B = (fe, ce) => Object.entries(ce).reduce((he, [I, Z]) => (fe.includes(I) || (he[I] = Z), he), {}),
				ue = fe => (ce, he, I) => {
					const [Z, Ee, Le] = _e(he, I);
					if (Ee) throw Ee;
					return Le && console.error(Le), fe(ce, he, Z)
				};
			var Oe = n("../react/utils/zaraz.ts");
			const ze = {
					identify: !0
				},
				$e = fe => (ce, he, I) => (ze[he] || Oe.tg === null || Oe.tg === void 0 || Oe.tg.track(he, I), fe(ce, he, I));
			var Me = n("../react/utils/cookiePreferences.ts");

			function Ne(fe) {
				for (var ce = 1; ce < arguments.length; ce++) {
					var he = arguments[ce] != null ? Object(arguments[ce]) : {},
						I = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(he).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(he, Z).enumerable
					})), I.forEach(function(Z) {
						Ye(fe, Z, he[Z])
					})
				}
				return fe
			}

			function Ye(fe, ce, he) {
				return ce = Qe(ce), ce in fe ? Object.defineProperty(fe, ce, {
					value: he,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : fe[ce] = he, fe
			}

			function Qe(fe) {
				var ce = ot(fe, "string");
				return typeof ce == "symbol" ? ce : String(ce)
			}

			function ot(fe, ce) {
				if (typeof fe != "object" || fe === null) return fe;
				var he = fe[Symbol.toPrimitive];
				if (he !== void 0) {
					var I = he.call(fe, ce || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ce === "string" ? String : Number)(fe)
			}
			const Je = fe => {
					r().init(Ne({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Ke() && !(0, s.gm)() && Xe(),
						middlewares: [C, ue, S, $e]
					}, fe))
				},
				tt = () => {
					r().identify(Ne({}, (0, e.getAttribution)(), {
						locale: (0, f.r)((0, p.bh)().getState()),
						isCloudflare: !!(0, i.Jd)()
					}))
				},
				Ke = () => !0,
				nt = () => {
					(0, Me.kT)("sparrow_id")
				},
				Xe = () => (0, Me.Xm)()
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
						h = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(a).filter(function(d) {
						return Object.getOwnPropertyDescriptor(a, d).enumerable
					})), h.forEach(function(d) {
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
					var h = a.call(c, g || "default");
					if (typeof h != "object") return h;
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
				for (var C = 1; C < arguments.length; C++) {
					var w = arguments[C] != null ? Object(arguments[C]) : {},
						F = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols(w).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(w, Y).enumerable
					})), F.forEach(function(Y) {
						l(S, Y, w[Y])
					})
				}
				return S
			}

			function l(S, C, w) {
				return C = v(C), C in S ? Object.defineProperty(S, C, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[C] = w, S
			}

			function v(S) {
				var C = t(S, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function t(S, C) {
				if (typeof S != "object" || S === null) return S;
				var w = S[Symbol.toPrimitive];
				if (w !== void 0) {
					var F = w.call(S, C || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(S)
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
					pad(S, C) {
						for (var w = Math.floor(S.length * C / 2), F = w, Y = S; w-- > 0;) Y = " " + Y;
						for (; F-- > 0;) Y = Y + " ";
						return Y
					},
					str(S) {
						for (var C = this.option, w = C.startDelimiter || C.delimiter, F = C.endDelimiter || C.delimiter, Y = new RegExp(w + "\\s*[\\w\\.\\s*]+\\s*" + F, "g"), te, ne = [], X = 0, J = 0, M = "", G, ie; te = Y.exec(S);) ne.push(te);
						for (var x = ne[J++] || {
								index: -1
							}; X < S.length;) {
							if (x.index === X) {
								M += x[0], X += x[0].length, x = ne[J++] || {
									index: -1
								};
								continue
							}
							if (G = C.override !== void 0 ? C.override : S[X], ie = c[G], ie) {
								var pe = S.length % ie.length;
								G = ie[pe]
							}
							M += G, X++
						}
						return C.prepend + this.pad(M, C.extend) + C.append
					}
				},
				h = n("../../../common/intl/intl-core/src/errors.ts");

			function d(S, C, w) {
				return C = E(C), C in S ? Object.defineProperty(S, C, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[C] = w, S
			}

			function E(S) {
				var C = N(S, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function N(S, C) {
				if (typeof S != "object" || S === null) return S;
				var w = S[Symbol.toPrimitive];
				if (w !== void 0) {
					var F = w.call(S, C || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(S)
			}
			a.option.delimiter = "%", a.option.startDelimiter = "{", a.option.endDelimiter = "}";
			class k {
				constructor(C) {
					d(this, "map", void 0), d(this, "currentLocale", s.Q.en_US), d(this, "options", void 0), d(this, "psudoLocalizePhrases", w => Object.entries(w).reduce((F, [Y, te]) => Object.assign(F, {
						[Y]: a.str(te)
					}), {})), d(this, "getInstance", w => w ? this.map[w] : this.map[this.currentLocale]), d(this, "getInstanceMatchingPhrase", w => {
						const F = this.getInstance();
						return F.has(w) ? F : this.getInstance(s.Q.en_US)
					}), d(this, "extend", (w, F) => {
						const Y = this.getInstance(F);
						this.options.pseudoLoc && (w = this.psudoLocalizePhrases(w)), Y.extend(w)
					}), d(this, "t", (w, F) => {
						const Y = this.getInstanceMatchingPhrase(w);
						return F ? Y.t(w, F) : Y.t(w)
					}), d(this, "tm", (w, F) => (0, p.Z)(this.t(w, F))), d(this, "clear", () => {
						this.getInstance().clear()
					}), d(this, "replace", w => {
						this.options.pseudoLoc && (w = this.psudoLocalizePhrases(w)), this.getInstance().replace(w)
					}), d(this, "locale", w => (w && (this.currentLocale = w, this.map[w] || this.createInstance(w)), this.currentLocale)), d(this, "has", w => this.getInstanceMatchingPhrase(w).has(w)), d(this, "translateSeconds", w => {
						if (Number(w) !== 0) {
							if (w % 86400 == 0) return this.t("time.num_days", {
								smart_count: w / 86400
							});
							if (w % 3600 == 0) return this.t("time.num_hours", {
								smart_count: w / 3600
							});
							if (w % 60 == 0) return this.t("time.num_minutes", {
								smart_count: w / 60
							})
						}
						return this.t("time.num_seconds", {
							smart_count: w
						})
					}), d(this, "translateObject", w => i()(w, this.t)), this.map = {}, this.options = C || {}, this.options.allowMissing = !0, this.options.onMissingKey = (w, F, Y) => (console.error(new h.OZ(w)), F._ ? F._ : w), this.locale(C && C.locale || s.Q.en_US), C && C.phrases && (C.phrases = void 0), C && C.locale && (C.locale = void 0)
				}
				createInstance(C) {
					this.options.pseudoLoc && this.options.phrases && (this.options.phrases = this.psudoLocalizePhrases(this.options.phrases)), this.map[C] = new(r())(Object.assign(this.options, {
						locale: C
					}))
				}
			}
			var y = k
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
					return C
				},
				bd: function() {
					return c
				},
				RD: function() {
					return ge
				},
				cC: function() {
					return D
				},
				QT: function() {
					return $
				},
				lP: function() {
					return le
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				s = n("../../../common/intl/intl-core/src/Translator.ts");
			const p = e.createContext(new s.Z),
				f = p.Consumer,
				i = p.Provider;

			function u() {
				return u = Object.assign ? Object.assign.bind() : function(L) {
					for (var A = 1; A < arguments.length; A++) {
						var R = arguments[A];
						for (var W in R) Object.prototype.hasOwnProperty.call(R, W) && (L[W] = R[W])
					}
					return L
				}, u.apply(this, arguments)
			}

			function l(L, A) {
				if (L == null) return {};
				var R = v(L, A),
					W, re;
				if (Object.getOwnPropertySymbols) {
					var _e = Object.getOwnPropertySymbols(L);
					for (re = 0; re < _e.length; re++) W = _e[re], !(A.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(L, W) || (R[W] = L[W]))
				}
				return R
			}

			function v(L, A) {
				if (L == null) return {};
				var R = {},
					W = Object.keys(L),
					re, _e;
				for (_e = 0; _e < W.length; _e++) re = W[_e], !(A.indexOf(re) >= 0) && (R[re] = L[re]);
				return R
			}
			class t extends e.Component {
				constructor(A) {
					super(A);
					const {
						locale: R,
						phrases: W,
						translator: re
					} = A;
					R && re.locale(R), W && re.extend(W)
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
			var c = L => {
				let {
					translator: A
				} = L, R = l(L, ["translator"]);
				const W = () => e.createElement(f, null, re => e.createElement(t, u({
					translator: re
				}, R)));
				return A ? (A.locale(R.locale), e.createElement(i, {
					value: A
				}, W())) : W()
			};

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(L) {
					for (var A = 1; A < arguments.length; A++) {
						var R = arguments[A];
						for (var W in R) Object.prototype.hasOwnProperty.call(R, W) && (L[W] = R[W])
					}
					return L
				}, g.apply(this, arguments)
			}

			function a(L, A) {
				if (L == null) return {};
				var R = h(L, A),
					W, re;
				if (Object.getOwnPropertySymbols) {
					var _e = Object.getOwnPropertySymbols(L);
					for (re = 0; re < _e.length; re++) W = _e[re], !(A.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(L, W) || (R[W] = L[W]))
				}
				return R
			}

			function h(L, A) {
				if (L == null) return {};
				var R = {},
					W = Object.keys(L),
					re, _e;
				for (_e = 0; _e < W.length; _e++) re = W[_e], !(A.indexOf(re) >= 0) && (R[re] = L[re]);
				return R
			}

			function d(L) {
				for (var A = 1; A < arguments.length; A++) {
					var R = arguments[A] != null ? Object(arguments[A]) : {},
						W = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(R).filter(function(re) {
						return Object.getOwnPropertyDescriptor(R, re).enumerable
					})), W.forEach(function(re) {
						E(L, re, R[re])
					})
				}
				return L
			}

			function E(L, A, R) {
				return A = N(A), A in L ? Object.defineProperty(L, A, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[A] = R, L
			}

			function N(L) {
				var A = k(L, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function k(L, A) {
				if (typeof L != "object" || L === null) return L;
				var R = L[Symbol.toPrimitive];
				if (R !== void 0) {
					var W = R.call(L, A || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(L)
			}
			class y extends e.Component {
				constructor(...A) {
					super(...A);
					E(this, "state", {
						phrasesByLocale: {}
					}), E(this, "loadLocale", async R => {
						const {
							loadPhrases: W
						} = this.props, re = await W(R);
						this.setState(_e => ({
							phrasesByLocale: d({}, _e.phrasesByLocale, {
								[R]: re
							})
						}))
					})
				}
				componentDidMount() {
					this.loadLocale(this.props.locale)
				}
				componentDidUpdate(A) {
					const {
						phrasesByLocale: R
					} = this.state;
					this.props.locale !== A.locale && !R[this.props.locale] && this.loadLocale(this.props.locale)
				}
				render() {
					const {
						children: A,
						locale: R
					} = this.props, {
						phrasesByLocale: W
					} = this.state;
					return W[R] ? e.createElement(c, {
						locale: R,
						phrases: W[R]
					}, A) : null
				}
			}
			E(y, "defaultProps", {});
			var C = L => {
					let {
						locale: A
					} = L, R = a(L, ["locale"]);
					return e.createElement(f, null, W => e.createElement(y, g({
						locale: A || W.locale()
					}, R)))
				},
				w = n("../../../../node_modules/lodash/escape.js"),
				F = n.n(w),
				Y = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js");

			function te(L) {
				for (var A = 1; A < arguments.length; A++) {
					var R = arguments[A] != null ? Object(arguments[A]) : {},
						W = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(R).filter(function(re) {
						return Object.getOwnPropertyDescriptor(R, re).enumerable
					})), W.forEach(function(re) {
						ne(L, re, R[re])
					})
				}
				return L
			}

			function ne(L, A, R) {
				return A = X(A), A in L ? Object.defineProperty(L, A, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[A] = R, L
			}

			function X(L) {
				var A = J(L, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function J(L, A) {
				if (typeof L != "object" || L === null) return L;
				var R = L[Symbol.toPrimitive];
				if (R !== void 0) {
					var W = R.call(L, A || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(L)
			}

			function M() {
				return M = Object.assign ? Object.assign.bind() : function(L) {
					for (var A = 1; A < arguments.length; A++) {
						var R = arguments[A];
						for (var W in R) Object.prototype.hasOwnProperty.call(R, W) && (L[W] = R[W])
					}
					return L
				}, M.apply(this, arguments)
			}
			const G = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				ie = /(?:\r\n|\r|\n)/g;

			function x(L, A, R) {
				return e.createElement("span", {
					key: L,
					"data-testid": R,
					dangerouslySetInnerHTML: {
						__html: A
					}
				})
			}

			function pe(L, A = [], R = [], W) {
				let re = 0;
				const _e = L.replace(ie, "").split(G);
				if (_e.length === 1) return [x(re, L, W)];
				const Ie = [],
					B = _e.shift();
				if (B) {
					const ue = x(re, B, W);
					Ie.push(ue), typeof ue != "string" && re++
				}
				for (const [ue, Oe, ze] of q(_e)) {
					A[ue] || window.console && console.warn(`Missing Component for translation key: ${L}, index: ${ue}. Fragment will be used.`);
					const $e = A[ue] || e.Fragment,
						Me = R[ue] || {},
						Ne = x(0, Oe);
					if (Ie.push(e.createElement($e, M({
							key: re
						}, Me), Ne)), re++, ze) {
						const Ye = x(re, ze);
						Ie.push(Ye), typeof Ye != "string" && re++
					}
				}
				return Ie
			}

			function q(L) {
				if (!L.length) return [];
				const [A, R, W, re] = L.slice(0, 4);
				return [
					[parseInt(A || W), R || "", re]
				].concat(q(L.slice(4, L.length)))
			}

			function z({
				id: L = "",
				smartCount: A,
				_: R,
				values: W,
				applyMarkdown: re,
				Components: _e,
				componentProps: Ie,
				testId: B
			}) {
				return e.createElement(f, null, ue => {
					W && Object.keys(W).forEach(Me => W[Me] = F()(W[Me])), Ie && Ie.forEach(Me => {
						Object.keys(Me).forEach(Ne => {
							typeof Me[Ne] == "string" && (Me[Ne] = F()(Me[Ne]))
						})
					});
					const Oe = te({
							smart_count: A,
							_: R
						}, W),
						ze = re ? (0, Y.Z)(ue.t(L.toString(), Oe), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : ue.t(L.toString(), Oe),
						$e = pe(ze, _e, Ie, B);
					return $e.length > 1 ? e.createElement(e.Fragment, null, $e) : $e[0]
				})
			}
			var D = z;

			function H() {
				return H = Object.assign ? Object.assign.bind() : function(L) {
					for (var A = 1; A < arguments.length; A++) {
						var R = arguments[A];
						for (var W in R) Object.prototype.hasOwnProperty.call(R, W) && (L[W] = R[W])
					}
					return L
				}, H.apply(this, arguments)
			}

			function Q(L) {
				return R => r().createElement(f, null, W => r().createElement(L, H({}, R, {
					translator: W
				})))
			}
			var le = Q;

			function $() {
				if (e.useContext === void 0) throw new Error("The useI18n hook is being used with a version of React that doesn't support hooks!");
				return (0, e.useContext)(p)
			}
			var se = n("../../../common/intl/intl-types/src/index.ts"),
				ge = r().createContext(se.Q.en_US)
		},
		"../../../common/util/types/src/api/domain.ts": function(V, _, n) {
			"use strict";
			n.d(_, {
				Aw: function() {
					return w
				},
				Ib: function() {
					return S
				},
				Ks: function() {
					return F
				},
				MS: function() {
					return C
				},
				PN: function() {
					return h
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
					return Y
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
			let h = function(te) {
				return te.PENDING = "pending", te.VERIFIED = "verified", te.REJECTED = "rejected", te.PENDING_DELETE = "pending_delete", te.DELETED = "deleted", te
			}({});
			const d = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(h),
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
			const k = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(N)
				}),
				y = e.eg.intersection([k, E]),
				S = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let C = function(te) {
				return te.UNLOCK_APPROVAL = "UnlockApprovalRequest", te.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", te.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", te.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", te
			}({});
			const w = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				F = e.eg.object({
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