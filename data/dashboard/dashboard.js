(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254], {
		"../flags.js": function(K, _, n) {
			"use strict";
			n.d(_, {
				J8: function() {
					return s
				},
				Jd: function() {
					return a
				},
				QY: function() {
					return C
				},
				Qw: function() {
					return d
				},
				ki: function() {
					return u
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				r = n("../react/utils/url.ts"),
				c = n("../../../../node_modules/query-string/query-string.js"),
				g = n.n(c),
				y = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				i;
			const d = () => Object.keys(y.Z).reduce((m, v) => (v.indexOf("cf_beta.") === 0 && y.Z.get(v) === "true" && m.push(v.split(".").slice(1).join(".")), m), []),
				u = () => {
					var m, v, N;
					return ((m = window) === null || m === void 0 || (v = m.bootstrap) === null || v === void 0 || (N = v.data) === null || N === void 0 ? void 0 : N.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((i = window) === null || i === void 0 ? void 0 : i.location) && y.Z) {
				const m = g().parse(window.location.search);
				m.beta_on && y.Z.set(`cf_beta.${m.beta_on}`, !0), m.beta_off && y.Z.set(`cf_beta.${m.beta_off}`, !1)
			}
			const E = {},
				t = m => {
					var v, N, w;
					return Object.prototype.hasOwnProperty.call(E, m) ? E[m] : ((v = window) === null || v === void 0 || (N = v.bootstrap) === null || N === void 0 || (w = N.data) === null || w === void 0 ? void 0 : w.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(x => x === m) ? (E[m] = !0, !0) : (E[m] = !1, !1)
				},
				o = m => y.Z ? y.Z.get(`cf_beta.${m}`) === !0 : !1,
				s = m => o(m) || t(m),
				f = () => !0,
				a = () => {
					var m, v, N;
					return ((m = window) === null || m === void 0 || (v = m.bootstrap) === null || v === void 0 || (N = v.data) === null || N === void 0 ? void 0 : N.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				C = m => {
					const v = (0, e.uF)(m),
						N = (v == null ? void 0 : v.roles) || [];
					return (0, r.qR)(location.pathname) && N.length === 1 && N.some(w => w === "Administrator Read Only")
				}
		},
		"../init.ts": function(K, _, n) {
			"use strict";
			n.r(_);
			var e = n("../../../../node_modules/url-search-params-polyfill/index.js"),
				r = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				c = n("../../../../node_modules/fetch-intercept/lib/browser.js");

			function g(b) {
				for (var k = 1; k < arguments.length; k++) {
					var q = arguments[k] != null ? Object(arguments[k]) : {},
						ie = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(q).filter(function(ve) {
						return Object.getOwnPropertyDescriptor(q, ve).enumerable
					})), ie.forEach(function(ve) {
						y(b, ve, q[ve])
					})
				}
				return b
			}

			function y(b, k, q) {
				return k = i(k), k in b ? Object.defineProperty(b, k, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[k] = q, b
			}

			function i(b) {
				var k = d(b, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function d(b, k) {
				if (typeof b != "object" || b === null) return b;
				var q = b[Symbol.toPrimitive];
				if (q !== void 0) {
					var ie = q.call(b, k || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(b)
			}
			const u = b => {
				const k = b && b.headers || {},
					q = new Headers(k);
				return q.append("X-Cross-Site-Security", "dash"), g({}, b, {
					headers: q
				})
			};
			(0, c.register)({
				request: (b, k) => {
					try {
						return new URL(b), b === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", k] : [b, k]
					} catch {
						return [b, u(k)]
					}
				}
			});
			var E = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				o = n("../react/app/providers/storeContainer.js");
			let s = "";
			const f = 61;

			function a(b) {
				const k = b.substr(1);
				if (k && s !== k) {
					const q = document.getElementById(k);
					if (q) {
						const ie = q.getBoundingClientRect().top;
						if (ie > 0) {
							const ve = ie - f;
							document.documentElement.scrollTop = ve
						}
					}
				}
				s = k
			}

			function C(b) {
				b.listen(k => a(k.hash))
			}
			var m = n("../../../../node_modules/cookie/index.js"),
				v = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const N = "CF_dash_version",
				w = "current",
				x = "hash",
				l = "deploymentPreview",
				h = b => b === w ? D() : $(),
				D = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				$ = (b = 72) => {
					const k = 36e5;
					return new Date(Date.now() + b * k)
				},
				V = b => {
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
				re = (b, k = !1) => {
					var q;
					const ie = V(b),
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
    <h1 id="error-title">${ie.title}</h1>
    <p id="error-description">${ie.description}</p>
  </div>
  `,
						Se = k ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${v.fk.orange[9]};
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
					return ve + Se
				},
				ne = b => {
					var k;
					const q = document.getElementById(b);
					!q || (k = q.parentNode) === null || k === void 0 || k.removeChild(q)
				};

			function ee() {
				const b = document.getElementById("loading-state");
				b == null || b.classList.add("hide"), b == null || b.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(ne)
				})
			}

			function Q(b) {
				var k;
				const q = document.getElementById("loading-state"),
					ie = !!((k = m.parse(document.cookie)) === null || k === void 0 ? void 0 : k[N]);
				!q || (q.innerHTML = re(b == null ? void 0 : b.code, ie))
			}
			var R = n("../utils/initStyles.ts"),
				z = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				te = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				U = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				ue = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				X = n("../../../../node_modules/history/esm/history.js"),
				O = (0, X.lX)(),
				H = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				J = n("../react/utils/url.ts");
			const le = (0, H.Rf)();
			let F;

			function oe(b) {
				return ge(b, "react-router-v5")
			}

			function ge(b, k) {
				return (q, ie = !0, ve = !0) => {
					ie && le && le.location && (F = q({
						name: (0, J.Fl)(le.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": k
						}
					})), ve && b.listen && b.listen((Se, Ae) => {
						if (Ae && (Ae === "PUSH" || Ae === "POP")) {
							F && F.finish();
							const rt = {
								"routing.instrumentation": k
							};
							F = q({
								name: (0, J.Fl)(Se.pathname),
								op: "navigation",
								tags: rt
							})
						}
					})
				}
			}
			var L = n("../react/common/selectors/languagePreferenceSelector.ts"),
				A = n("../flags.js"),
				M = n("../utils/getDashVersion.ts"),
				Z = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				ae = n.n(Z),
				_e = n("../../../common/intl/intl-core/src/errors.ts"),
				De = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				Oe = n("../react/common/middleware/sparrow/errors.ts");
			const B = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				ye = !0,
				Ie = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				Fe = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function xe(b, k, q) {
				return k = je(k), k in b ? Object.defineProperty(b, k, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[k] = q, b
			}

			function je(b) {
				var k = We(b, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function We(b, k) {
				if (typeof b != "object" || b === null) return b;
				var q = b[Symbol.toPrimitive];
				if (q !== void 0) {
					var ie = q.call(b, k || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(b)
			}
			class He {
				constructor() {
					xe(this, "name", He.id)
				}
				setupOnce() {
					n.g.console && (0, De.hl)(n.g.console, "error", k => (...q) => {
						const ie = q.find(ve => ve instanceof Error);
						if (B && ie) {
							let ve, Se = !0;
							if (ie instanceof Oe.ez) {
								const Ae = ie instanceof Oe.oV ? ie.invalidProperties : void 0;
								ve = {
									tags: {
										"sparrow.eventName": ie.eventName
									},
									extra: {
										sparrow: {
											eventName: ie.eventName,
											invalidProperties: Ae
										}
									},
									fingerprint: [ie.name ? ie.name : "SparrowValidationError"]
								}, Se = !1
							} else if (ie instanceof Z.SparrowIdCookieError) ve = {
								extra: {
									sparrowIdCookie: ie.cookie
								},
								fingerprint: [ie.name ? ie.name : "SparrowIdCookieError"]
							};
							else if (ie.name === "ChunkLoadError") {
								ve = {
									fingerprint: [ie.name]
								};
								try {
									ve.tags = {
										chunkId: ie.message.split(" ")[2],
										chunkUrl: ie.request
									}
								} catch {}
							} else ie instanceof _e.YB && (ve = {
								fingerprint: ["TranslatorError", ie.translationKey]
							});
							Se && E.Tb(ie, ve)
						}
						typeof k == "function" && k.apply(n.g.console, q)
					})
				}
			}
			xe(He, "id", "ConsoleErrorIntegration");
			var ot = null,
				Je = n("../utils/sentry/lastSentEventId.ts"),
				et = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				Ke = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const Ve = b => {
					const k = async q => {
						var ie, ve;
						const Se = {
							envelope: q.body,
							url: b.url,
							isPreviewDeploy: (ie = window) === null || ie === void 0 || (ve = ie.build) === null || ve === void 0 ? void 0 : ve.isPreviewDeploy,
							release: (0, M.t)()
						};
						try {
							const Ae = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(Se)
							});
							return {
								statusCode: Ae.status,
								headers: {
									"x-sentry-rate-limits": Ae.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": Ae.headers.get("Retry-After")
								}
							}
						} catch (Ae) {
							return console.log(Ae), (0, Ke.$2)(Ae)
						}
					};
					return et.q(b, k)
				},
				tt = () => {
					if (B && ye) {
						var b, k, q, ie, ve, Se, Ae, rt, _t, ct;
						let zt = "production";
						((b = window) === null || b === void 0 || (k = b.build) === null || k === void 0 ? void 0 : k.isPreviewDeploy) && (zt += "-preview"), te.S({
							dsn: B,
							release: (0, M.t)(),
							environment: zt,
							ignoreErrors: Fe,
							allowUrls: Ie,
							autoSessionTracking: !1,
							integrations: [new U.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new He, new ue.jK.BrowserTracing({
								routingInstrumentation: oe(O)
							})],
							tracesSampleRate: 0,
							transport: Ve,
							beforeSend: tn => (Je.e.setEventId(tn.event_id), tn)
						});
						const an = (0, o.bh)().getState();
						E.rJ({
							LOCAL_STORAGE_FLAGS: (0, A.Qw)(),
							USER_BETA_FLAGS: (0, A.ki)(),
							meta: {
								connection: {
									type: (q = window) === null || q === void 0 || (ie = q.navigator) === null || ie === void 0 || (ve = ie.connection) === null || ve === void 0 ? void 0 : ve.effectiveType,
									bandwidth: (Se = window) === null || Se === void 0 || (Ae = Se.navigator) === null || Ae === void 0 || (rt = Ae.connection) === null || rt === void 0 ? void 0 : rt.downlink
								},
								languagePreference: (0, L.r)(an),
								isPreviewDeploy: (_t = window) === null || _t === void 0 || (ct = _t.build) === null || ct === void 0 ? void 0 : ct.isPreviewDeploy
							},
							utilGates: (0, z.T2)(an)
						}), window.addEventListener("unhandledrejection", function(tn) {})
					}
				},
				Xe = b => {
					b ? E.av({
						id: b
					}) : E.av(null)
				};
			var ce = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				P = () => {
					let b;
					try {
						b = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), b = window.location.search
					}
					if (!b.includes("remote[")) return;
					const k = new URLSearchParams(b),
						q = {};
					for (let [ie, ve] of k) ie.includes("remote") && (q[ie.replace(/remote\[|\]/g, "")] = ve);
					ce.Z.set("mfe-remotes", JSON.stringify(q))
				},
				G = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				de = n("../node_modules/uuid/dist/esm-browser/v4.js");
			const Le = "ANON_USER_ID";

			function Me() {
				var b, k, q, ie;
				let ve = (b = n.g) === null || b === void 0 || (k = b.bootstrap) === null || k === void 0 || (q = k.data) === null || q === void 0 || (ie = q.user) === null || ie === void 0 ? void 0 : ie.id;
				if (!ve) {
					let Se = ce.Z.get(Le);
					if (!Se) {
						let Ae = (0, de.Z)();
						ce.Z.set(Le, Ae), Se = Ae
					}
					return Se
				}
				return ve
			}
			async function Ue() {
				const b = (0, o.bh)();
				b.dispatch((0, G.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await b.dispatch((0, z.UL)({
					userId: Me()
				}))
			}
			var Be = n("../libs/init/initBootstrap.ts"),
				ke = n("webpack/sharing/consume/default/react/react"),
				Ce = n.n(ke),
				$e = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				Ye = n("webpack/sharing/consume/default/react-dom/react-dom"),
				Re = n("webpack/sharing/consume/default/react-redux/react-redux"),
				it = n("../../../../node_modules/swr/core/dist/index.mjs"),
				lt = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				j = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				se = n("../react/shims/focus-visible.js"),
				Ee = n("../react/app/components/DeepLink/index.ts"),
				be = n("../../../../node_modules/prop-types/index.js"),
				we = n.n(be),
				ze = n("../react/utils/translator.tsx"),
				nt = n("../../../common/intl/intl-react/src/index.ts"),
				Pe = n("../../../dash/intl/intl-translations/src/index.ts"),
				mt = n("../../../../node_modules/query-string/query-string.js"),
				T = n.n(mt),
				I = n("../react/common/actions/userActions.ts"),
				Y = n("../react/common/selectors/userSelectors.ts"),
				pe = n("../react/utils/i18n.ts"),
				he = n("../react/utils/bootstrap.ts");

			function qe(b) {
				for (var k = 1; k < arguments.length; k++) {
					var q = arguments[k] != null ? Object(arguments[k]) : {},
						ie = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(q).filter(function(ve) {
						return Object.getOwnPropertyDescriptor(q, ve).enumerable
					})), ie.forEach(function(ve) {
						ut(b, ve, q[ve])
					})
				}
				return b
			}

			function ut(b, k, q) {
				return k = ht(k), k in b ? Object.defineProperty(b, k, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[k] = q, b
			}

			function ht(b) {
				var k = Ct(b, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function Ct(b, k) {
				if (typeof b != "object" || b === null) return b;
				var q = b[Symbol.toPrimitive];
				if (q !== void 0) {
					var ie = q.call(b, k || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(b)
			}
			let Ge = T().parse(location.search);
			const dt = b => {
					const k = (0, he.$8)() ? [(0, Pe.Fy)(Pe.if.changes), (0, Pe.Fy)(Pe.if.common), (0, Pe.Fy)(Pe.if.navigation), (0, Pe.Fy)(Pe.if.overview), (0, Pe.Fy)(Pe.if.onboarding), (0, Pe.Fy)(Pe.if.invite), (0, Pe.Fy)(Pe.if.login), (0, Pe.Fy)(Pe.if.dns), (0, Pe.Fy)(Pe.n4.ssl_tls), (0, Pe.Fy)(Pe.if.message_inbox)] : [(0, Pe.Fy)(Pe.if.common), (0, Pe.Fy)(Pe.if.invite), (0, Pe.Fy)(Pe.if.login), (0, Pe.Fy)(Pe.if.onboarding)];
					Ge.lang ? ft(b) : ce.Z.get(pe.th) && pt(b, ce.Z.get(pe.ly));
					const q = async ie => (await Promise.all(k.map(Se => Se(ie)))).reduce((Se, Ae) => qe({}, Se, Ae), {});
					return Ce().createElement(nt.RD.Provider, {
						value: b.languagePreference
					}, Ce().createElement(nt.bd, {
						translator: ze.Vb,
						locale: b.languagePreference
					}, Ce().createElement(nt.lm, {
						loadPhrases: q
					}, b.children)))
				},
				ft = async b => {
					let k = Ge.lang.substring(0, Ge.lang.length - 2) + Ge.lang.substring(Ge.lang.length - 2, Ge.lang.length).toUpperCase();
					if (!(0, L.v)(k)) {
						console.warn(`${k} is not a supported locale.`), delete Ge.lang, b.history.replace({
							search: T().stringify(Ge)
						});
						return
					}
					ce.Z.set(pe.ly, k), delete Ge.lang, pt(b, k), b.isAuthenticated || b.history.replace({
						search: T().stringify(Ge)
					})
				}, pt = async (b, k) => {
					if (b.isAuthenticated) try {
						await b.setUserCommPreferences({
							"language-locale": k
						}, {
							hideErrorAlert: !0
						}), ce.Z.remove(pe.th), b.history.replace({
							search: T().stringify(Ge)
						})
					} catch (q) {
						ce.Z.set(pe.th, !0), console.error(q)
					} else ce.Z.set(pe.th, !0)
				}, bt = b => {
					const k = (0, Y.PR)(b);
					return {
						isAuthenticated: !!(k && k.id),
						languagePreference: ce.Z.get(pe.ly) || (0, L.r)(b)
					}
				}, Tt = {
					setUserCommPreferences: I.V_
				};
			var at = (0, $e.withRouter)((0, Re.connect)(bt, Tt)(dt));
			dt.propTypes = {
				history: we().object,
				languagePreference: we().string.isRequired,
				children: we().node.isRequired,
				isAuthenticated: we().bool,
				setUserCommPreferences: we().func.isRequired
			};
			var yt = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Wt = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let At;
			const Ht = ({
				selectorPrefix: b = "c_"
			} = {}) => (At || (At = (0, Wt.Z)({
				dev: !1,
				selectorPrefix: b
			})), At);
			var Zt = n("../react/common/components/ModalManager.tsx"),
				Kt = n("../react/app/components/ErrorBoundary.tsx"),
				Vt = n("../react/common/actions/notificationsActions.ts");
			const p = (n.g.bootstrap || {}).data || {};
			class S extends Ce().Component {
				componentDidMount() {
					p.messages && this.dispatchNotificationActions(p.messages)
				}
				dispatchNotificationActions(k) {
					k.forEach(q => {
						const {
							type: ie,
							message: ve,
							persist: Se
						} = q;
						["success", "info", "warn", "error"].includes(ie) && this.props.notifyAdd(ie, (0, ze.ZP)(ve), {
							persist: !!Se
						})
					})
				}
				render() {
					return null
				}
			}
			var Te = (0, $e.withRouter)((0, Re.connect)(null, {
				notifyAdd: Vt.IH
			})(S));
			S.propTypes = {
				notifyAdd: we().func.isRequired
			};
			var Ne = n("../react/app/redux/index.ts");

			function Qe() {
				var b;
				const k = (0, Ne.p4)(Y.PR),
					q = (k == null || (b = k.email) === null || b === void 0 ? void 0 : b.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ie = (0, G.Yc)();
				(0, ke.useEffect)(() => {
					ie({
						userType: q
					})
				}, [q, ie])
			}
			var st = n("../react/common/selectors/entitlementsSelectors.ts"),
				Et = n("../react/common/selectors/accountSelectors.ts");
			const St = ["accountId", "is_ent"];

			function Pt() {
				const b = (0, G.f7)(),
					k = (0, $e.useHistory)(),
					q = (0, J.uW)(k.location.pathname),
					ie = (0, G.Yc)(),
					ve = (0, G.O$)(),
					Se = (0, Ne.p4)(st.u1),
					Ae = !Se.isRequesting && !!Se.data,
					rt = (0, Ne.p4)(st.p1),
					_t = (0, Ne.p4)(Et.Xu),
					ct = (0, Ne.p4)(Et.uF),
					zt = !_t.isRequesting && !!_t.data;
				(0, ke.useEffect)(() => {
					q && zt && ct && Ae && q === ct.account.id ? ie({
						accountId: ct.account.id,
						is_ent: rt
					}) : (!q || q in b && b.accountId !== q) && ve(St)
				}, [zt, ct, ie, ve, Ae, rt, q, b])
			}
			var Ot = n("../react/common/selectors/zoneSelectors.ts");

			function It() {
				const b = (0, Ne.p4)(Ot.nA),
					k = (0, G.Yc)();
				(0, ke.useEffect)(() => {
					var q;
					k({
						zone_id: b == null ? void 0 : b.id,
						zone_plan: b == null || (q = b.plan) === null || q === void 0 ? void 0 : q.legacy_id
					})
				}, [b, k])
			}
			const Dt = () => (Qe(), Pt(), It(), null);
			var wt = n("../react/app/components/Persistence/index.tsx"),
				Lt = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				Mt = n("../react/app/components/LoadingSuspense.tsx");
			const Rt = Ce().lazy(() => Promise.all([n.e(2480), n.e(15770), n.e(4616), n.e(72019), n.e(99186), n.e(5668), n.e(7484), n.e(39760), n.e(7271), n.e(79491), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var kt = () => Ce().createElement(Mt.Z, null, Ce().createElement(Rt, null));
			const Nt = () => (ke.useEffect(() => ee, []), null);
			var jt = n("../../../../node_modules/moment/moment.js"),
				vt = n.n(jt);
			const Ut = b => {
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
				Bt = () => {
					const b = (0, Ne.p4)(L.r);
					(0, ke.useEffect)(() => {
						const k = Ut(b);
						k !== vt().locale() && vt().locale(k), document.documentElement.lang = b
					}, [b])
				},
				xt = () => {
					(0, ke.useEffect)(() => {
						var b, k;
						let q;
						if (((b = window) === null || b === void 0 || (k = b.build) === null || k === void 0 ? void 0 : k.isPreviewDeploy) && (q = "cookie"), !!q) try {
							const ie = document.head.querySelector("link[rel=icon]");
							ie && (ie.href = n("../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${q}.ico`))
						} catch {}
					}, [])
				};
			var Yt = n("../react/common/constants/constants.ts");
			const Qt = () => {
				var b;
				const k = (0, $e.useLocation)(),
					[q, ie] = (0, ke.useState)(((b = window) === null || b === void 0 ? void 0 : b.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
				return (0, ke.useEffect)(() => {
					const ve = T().parse(k.search);
					if (ve.pt && ce.Z.set(Yt.sJ, ve.pt), ve == null ? void 0 : ve.devPanel) {
						var Se, Ae;
						(Se = window) === null || Se === void 0 || (Ae = Se.localStorage) === null || Ae === void 0 || Ae.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ie(!0)
					}
				}, [k.search]), {
					devPanelEnabled: q
				}
			};
			var Jt = n("../react/common/components/SAMLSubmit/SAMLSubmit.tsx");
			const Xt = Ce().lazy(() => Promise.all([n.e(2480), n.e(15770), n.e(4616), n.e(72019), n.e(99186), n.e(36273), n.e(8445), n.e(7484), n.e(39760), n.e(7271), n.e(79491), n.e(94452), n.e(85918), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				qt = Ce().lazy(() => Promise.all([n.e(15770), n.e(36273), n.e(7271), n.e(69088), n.e(94452), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var Gt = ({
					userIsAuthed: b
				}) => {
					const [k, q] = (0, ke.useState)(!1);
					Bt(), xt();
					const {
						devPanelEnabled: ie
					} = Qt(), ve = Se => {
						Se && q(!0)
					};
					return Ce().createElement(ke.Suspense, {
						fallback: Ce().createElement(Nt, null)
					}, !k && Ce().createElement($e.Switch, null, !b && !0 && Ce().createElement($e.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Ce().createElement(qt, null)), Ce().createElement($e.Route, {
						render: () => Ce().createElement(Lt.ZC, {
							minHeight: "100vh"
						}, Ce().createElement(Xt, null))
					})), ie && Ce().createElement(kt, null), Ce().createElement(Jt.Z, {
						userIsAuthed: b,
						spInitiated: !0,
						samlAuthBegin: ve
					}))
				},
				en = n("../../../../node_modules/yup/es/index.js"),
				sn = n("../../../common/util/types/src/utils/index.ts");
			const rn = {
				cfEmail: () => en.Z_().email((0, ze.ZP)("common.validation.email")).required((0, ze.ZP)("common.validation.email"))
			};
			(0, sn.Yd)(rn).forEach(b => {
				en.kM(en.Z_, b, rn[b])
			});
			const on = Ce().lazy(() => Promise.all([n.e(4616), n.e(6368), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				cn = () => {
					const b = (0, he.$8)(),
						[k, q] = (0, ke.useState)(b ? on : Ce().Fragment),
						[ie, ve] = (0, ke.useState)((0, v.Yc)());
					(0, ke.useEffect)(() => {
						(0, v.fF)(() => ve((0, v.Yc)()))
					}, []);
					const Se = Ae => {
						ve(Ae), (0, v.C8)(Ae)
					};
					return (0, ke.useEffect)(() => {
						q(b ? on : Ce().Fragment)
					}, [b]), (0, ke.useEffect)(() => {
						const Ae = () => Se(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Ae), () => {
							window.removeEventListener("storage", Ae)
						}
					}, []), Ce().createElement(ke.Suspense, {
						fallback: null
					}, Ce().createElement(Re.Provider, {
						store: (0, o.bh)()
					}, Ce().createElement($e.Router, {
						history: O
					}, Ce().createElement(k, null, Ce().createElement(yt.Z, {
						renderer: Ht()
					}, Ce().createElement(at, null, Ce().createElement(Kt.Z, {
						sentryTag: "Root"
					}, Ce().createElement(it.J$, {
						value: {
							fetcher: Ae => fetch(Ae).then(rt => rt.json())
						}
					}, Ce().createElement(Dt, null), Ce().createElement(Te, null), Ce().createElement(wt.Z_, {
						onDarkModeChangeCb: Se
					}, Ce().createElement(Ee.ZP, null, Ce().createElement(Gt, {
						userIsAuthed: b
					}))), Ce().createElement(Zt.ZP, null), Ce().createElement(lt.F0, null)))))))))
				},
				ln = () => {
					(0, Ye.render)(Ce().createElement(cn, null), document.getElementById("react-app"))
				};
			var gt = n("../utils/initSparrow.ts"),
				Ft = n("../utils/zaraz.ts");
			const un = () => {
					const b = (0, Y.PR)((0, o.bh)().getState());
					dn(), (0, gt.Ug)(), (0, Ft.bM)(), (b == null ? void 0 : b.id) && ae().setUserId(b == null ? void 0 : b.id), (0, gt.yV)(), !(0, gt.Wi)() && (0, gt.IM)(), b ? (0, Ft.yn)(b) : (0, Ft.Ro)()
				},
				dn = () => {
					var b, k;
					(b = window) === null || b === void 0 || (k = b.OneTrust) === null || k === void 0 || k.OnConsentChanged(() => {
						const q = (0, Y.PR)((0, o.bh)().getState());
						(0, gt.Wi)() ? (ae().setEnabled(!0), (q == null ? void 0 : q.id) ? (ae().setUserId(q.id), (0, Ft.yn)(q)) : (0, Ft.Ro)(), (0, gt.yV)()) : (ae().setEnabled(!1), (0, gt.IM)())
					})
				};

			function pn(b) {
				for (var k = 1; k < arguments.length; k++) {
					var q = arguments[k] != null ? Object(arguments[k]) : {},
						ie = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(q).filter(function(ve) {
						return Object.getOwnPropertyDescriptor(q, ve).enumerable
					})), ie.forEach(function(ve) {
						gn(b, ve, q[ve])
					})
				}
				return b
			}

			function gn(b, k, q) {
				return k = mn(k), k in b ? Object.defineProperty(b, k, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[k] = q, b
			}

			function mn(b) {
				var k = fn(b, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function fn(b, k) {
				if (typeof b != "object" || b === null) return b;
				var q = b[Symbol.toPrimitive];
				if (q !== void 0) {
					var ie = q.call(b, k || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(b)
			}
			const yn = b => {
				E.$e(function(k) {
					k.setTag("init", "global"), E.Tb(b)
				}), Q(b)
			};
			try {
				n.g.build = pn({}, {
					branch: "master",
					isReleaseCandidate: "true",
					commit: "d9ef23feb9f2ce8aa4727ab02e72082ba8224637",
					dashVersion: "357a6a8c8850465ade15c0f6714eafb6fa3c28d9",
					env: "production",
					builtAt: 1720633717176,
					versions: {
						"@cloudflare/app-dash": "25.161.22",
						node: "20.10.0",
						yarn: "3.2.2",
						webpack: "5.88.2"
					}
				}, {
					isPreviewDeploy: (0, M.p)()
				}), tt();
				try {
					n("../react/utils/api.ts")
				} catch (b) {
					throw E.$e(function(k) {
						k.setTag("init", "utils/api"), E.Tb(b)
					}), b
				}
				try {
					C(O)
				} catch (b) {
					throw E.$e(function(k) {
						k.setTag("init", "hashScroll"), E.Tb(b)
					}), b
				}
				try {
					(0, R.Z)()
				} catch (b) {
					throw E.$e(function(k) {
						k.setTag("init", "styles"), E.Tb(b)
					}), b
				}
				try {
					P()
				} catch (b) {
					throw E.$e(function(k) {
						k.setTag("init", "mfePreviewData"), E.Tb(b)
					}), b
				}(0, Be.k)().then(async b => {
					var k;
					const q = (0, o.bh)(),
						ie = (b == null ? void 0 : b.data) || {};
					q.dispatch((0, t.mW)("user", ie == null ? void 0 : ie.user));
					const ve = b == null || (k = b.data) === null || k === void 0 ? void 0 : k.user;
					n.g.bootstrap = b, ve && ve.id && Xe(ve.id);
					try {
						await Ue()
					} catch (Se) {
						throw E.$e(function(Ae) {
							Ae.setTag("init", "gates"), E.Tb(Se)
						}), Se
					}
					try {
						un()
					} catch (Se) {
						throw E.$e(function(Ae) {
							Ae.setTag("init", "tracking"), E.Tb(Se)
						}), Se
					}
					return ln()
				}).catch(b => {
					E.$e(function(k) {
						k.setTag("init", "bootstrap"), E.Tb(b)
					}), Q(b)
				})
			} catch (b) {
				yn(b)
			}
		},
		"../libs/init/initBootstrap.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				k: function() {
					return c
				}
			});
			class e extends Error {
				constructor(y, i) {
					super(i);
					this.name = `${y} ${i}`
				}
			}
			const r = () => {
					document.cookie.split(";").forEach(y => {
						const [i] = y.trim().split("=");
						document.cookie = `${i}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				c = async () => {
					let g = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!g.ok) throw g.headers.get("content-type") === "text/html" && (await g.text()).toLowerCase().includes("cookie too large") && (r(), window.location.reload()), new e("Bootstrap API Failure", g == null ? void 0 : g.status);
					return (await g.json()).result.data
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				BQ: function() {
					return u
				},
				Bh: function() {
					return i
				},
				CM: function() {
					return E
				},
				MF: function() {
					return r
				},
				TS: function() {
					return s
				},
				WF: function() {
					return y
				},
				Wz: function() {
					return t
				},
				bk: function() {
					return d
				},
				fj: function() {
					return o
				},
				r4: function() {
					return g
				},
				zq: function() {
					return c
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
				c = (0, e.R)(r.ADD_SITE, f => ({
					payload: f
				})),
				g = (0, e.R)(r.RESOLVING_START),
				y = (0, e.R)(r.RESOLVING_COMPLETE),
				i = (0, e.R)(r.SELECT_ZONE, f => ({
					payload: f
				})),
				d = (0, e.R)(r.SELECT_ACCOUNT, f => ({
					payload: f
				})),
				u = (0, e.R)(r.SELECT_PAGES_PROJECT, f => ({
					payload: f
				})),
				E = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, f => ({
					payload: f
				})),
				t = (0, e.R)(r.SET_FILTERED_ACCOUNT_IDS, f => ({
					accountIds: f
				})),
				o = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				s = (0, e.R)(r.SELECT_WORKER, f => ({
					payload: f
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				BV: function() {
					return e
				},
				Dz: function() {
					return d
				},
				Fj: function() {
					return c
				},
				Kt: function() {
					return g
				},
				Tc: function() {
					return r
				},
				_h: function() {
					return u
				},
				s$: function() {
					return y
				}
			});
			const e = "to",
				r = "_gl",
				c = "deepLinkQueryParams",
				g = "add",
				y = "multiSkuProducts",
				i = "/:account/billing/checkout",
				d = "/:account/:zone/billing/checkout",
				u = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				ZP: function() {
					return re
				},
				U: function() {
					return d.U
				},
				dd: function() {
					return d.dd
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
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				g = n("../react/app/components/DeepLink/utils.ts"),
				y = n("../react/utils/bootstrap.ts"),
				i = n("../react/app/components/DeepLink/actions.ts"),
				d = n("../react/app/components/DeepLink/selectors.ts"),
				u = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = n.n(u);

			function t(ne) {
				for (var ee = 1; ee < arguments.length; ee++) {
					var Q = arguments[ee] != null ? Object(arguments[ee]) : {},
						R = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(Q).filter(function(z) {
						return Object.getOwnPropertyDescriptor(Q, z).enumerable
					})), R.forEach(function(z) {
						o(ne, z, Q[z])
					})
				}
				return ne
			}

			function o(ne, ee, Q) {
				return ee = s(ee), ee in ne ? Object.defineProperty(ne, ee, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[ee] = Q, ne
			}

			function s(ne) {
				var ee = f(ne, "string");
				return typeof ee == "symbol" ? ee : String(ee)
			}

			function f(ne, ee) {
				if (typeof ne != "object" || ne === null) return ne;
				var Q = ne[Symbol.toPrimitive];
				if (Q !== void 0) {
					var R = Q.call(ne, ee || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ee === "string" ? String : Number)(ne)
			}
			class a {
				constructor(ee, Q) {
					o(this, "deepLink", void 0), o(this, "legacyDeepLink", void 0), o(this, "resolvers", void 0), o(this, "startTime", Date.now()), o(this, "endTime", Date.now()), o(this, "_done", !1), o(this, "resolverStart", R => {
						this.resolvers.set(R, {
							name: R,
							startTime: Date.now(),
							userActions: []
						})
					}), o(this, "resolverDone", R => {
						const z = this.resolvers.get(R);
						z && (z.endTime = Date.now(), this.resolvers.set(R, z))
					}), o(this, "resolverCancel", R => {
						this.resolverDone(R), this.cancel()
					}), o(this, "start", () => {
						this.startTime = Date.now()
					}), o(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), o(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), o(this, "createUserActionTracker", R => {
						const z = "NO_ACTION",
							te = {
								actionType: z,
								startTime: 0
							};
						return {
							start: (U = z) => {
								const ue = this.resolvers.get(R);
								te.actionType = U, te.startTime = Date.now(), ue && ue.userActions.push(te)
							},
							finish: (U = z) => {
								te.actionType = U, te.endTime = Date.now()
							},
							cancel: (U = z) => {
								te.actionType = U, te.endTime = Date.now(), this.resolverCancel(R)
							}
						}
					}), this.deepLink = ee, this.legacyDeepLink = Q, this.resolvers = new Map
				}
				track(ee) {
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
							R = this.resolvers.size === 0 ? Q : Array.from(this.resolvers.values()).reduce((z, te) => {
								const U = C(te.startTime, te.endTime),
									ue = te.userActions.reduce((W, O) => {
										const H = C(O.startTime, O.endTime);
										return {
											totalTime: W.totalTime + H,
											actions: W.actions.set(O.actionType, H)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									X = U - ue.totalTime;
								return t({}, z, {
									totalTime: z.totalTime + U,
									totalUserActionsTime: z.totalUserActionsTime + ue.totalTime,
									totalCpuTime: z.totalCpuTime + X,
									[`${te.name}ResolverTotalTime`]: U,
									[`${te.name}ResolverTotalCpuTime`]: X,
									[`${te.name}ResolverTotalUserActionsTime`]: ue.totalTime
								}, Array.from(ue.actions.keys()).reduce((W, O) => t({}, W, {
									[`${te.name}Resolver/${O}`]: ue.actions.get(O)
								}), {}))
							}, t({}, Q, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						E().sendEvent(ee, R)
					} catch (Q) {
						console.error(Q)
					}
				}
			}

			function C(ne = Date.now(), ee = Date.now()) {
				return (ee - ne) / 1e3
			}
			var m = n("../react/app/components/DeepLink/constants.ts"),
				v = n("../react/common/hooks/useCachedState.ts"),
				N = n("../react/common/hooks/usePrevious.ts");

			function w(ne) {
				for (var ee = 1; ee < arguments.length; ee++) {
					var Q = arguments[ee] != null ? Object(arguments[ee]) : {},
						R = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(Q).filter(function(z) {
						return Object.getOwnPropertyDescriptor(Q, z).enumerable
					})), R.forEach(function(z) {
						x(ne, z, Q[z])
					})
				}
				return ne
			}

			function x(ne, ee, Q) {
				return ee = l(ee), ee in ne ? Object.defineProperty(ne, ee, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[ee] = Q, ne
			}

			function l(ne) {
				var ee = h(ne, "string");
				return typeof ee == "symbol" ? ee : String(ee)
			}

			function h(ne, ee) {
				if (typeof ne != "object" || ne === null) return ne;
				var Q = ne[Symbol.toPrimitive];
				if (Q !== void 0) {
					var R = Q.call(ne, ee || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ee === "string" ? String : Number)(ne)
			}
			var $ = ({
					children: ne
				}) => {
					const ee = (0, r.TZ)(),
						Q = (0, c.useHistory)(),
						R = (0, N.Z)(Q.location.pathname),
						z = (0, r.p4)(d.dd),
						[te, U] = (0, e.useState)(!0),
						[ue, X] = (0, v.j)(void 0, {
							key: m.Fj
						}),
						[W, O] = (0, v.j)(void 0, {
							key: m.s$
						}),
						H = (0, y.$8)();
					let J = new URLSearchParams(Q.location.search);
					const le = (0, g.mL)(Q.location.pathname, J);
					let F = null,
						oe = null;
					if (J.has(m.Tc) && J.delete(m.Tc), J.get(m.BV)) F = J.get(m.BV), Q.location.hash && (oe = Q.location.hash);
					else if (ue) {
						const L = new URLSearchParams(ue);
						L.get(m.BV) && (F = L.get(m.BV), J = L)
					} else le && (J.set(m.BV, le), F = le);
					if (F && m._h.test(F)) {
						const L = J.getAll(m.Kt),
							A = JSON.stringify(L);
						L.length && A !== W && O(A), J.has(m.Tc) && J.delete(m.Tc), J.delete(m.Kt)
					}!H && ue === void 0 && F && X(J.toString());
					const ge = async () => {
						try {
							if ((0, g.I3)(F) && H && !z) {
								ue && X(void 0), ee.dispatch((0, i.r4)()), U(!0);
								const L = await (0, g.py)(F, U, ee, Q, R, new a(F, le ? `${Q.location.pathname}${Q.location.search}` : void 0));
								J.delete(m.BV);
								const A = J.toString();
								Q.replace(w({}, Q.location, {
									pathname: L,
									search: A
								}, oe ? {
									hash: oe
								} : {})), ee.dispatch((0, i.WF)())
							}
						} catch (L) {
							ee.dispatch((0, i.WF)()), console.error(L)
						} finally {
							U(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ge()
					}, [Q.location.pathname, Q.location.search, z]), (te || (0, g.I3)(F)) && H ? null : ne
				},
				V = n("../react/app/components/DeepLink/reducer.ts"),
				re = $
		},
		"../react/app/components/DeepLink/reducer.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				E: function() {
					return g
				},
				r: function() {
					return i
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = n.n(e),
				c = n("../react/app/components/DeepLink/actions.ts");
			const g = null,
				y = r().from({
					lastAction: g,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function i(d = y, u) {
				if (u.type === c.MF.RESOLVING_COMPLETE) return y;
				if (u.type === c.MF.RESOLVING_START) return d.set("isResolving", !0);
				if (d.isResolving) {
					if (u.type === c.MF.RESOLVING_COMPLETE) return d.set("isResolving", !1);
					if (u.type === c.MF.SET_FILTERED_ACCOUNT_IDS) return d.set("filteredAccountIds", u.accountIds);
					if (u.type === c.MF.DELETE_FILTERED_ACCOUNT_IDS) return d.set("filteredAccountIds", void 0);
					{
						let E = d;
						try {
							E = d.set("lastAction", u)
						} catch {
							E = d.set("lastAction", {
								type: u.type
							})
						}
						return E
					}
				} else return d
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				U: function() {
					return c
				},
				dd: function() {
					return r
				},
				yI: function() {
					return e
				}
			});
			const e = g => g.deepLink.lastAction,
				r = g => g.deepLink.isResolving,
				c = g => g.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				I3: function() {
					return f
				},
				X1: function() {
					return o
				},
				mL: function() {
					return N
				},
				py: function() {
					return v
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../react/app/components/DeepLink/reducer.ts"),
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const g = w => w.replace(c.default.endsWithSlash, ""),
				y = w => {
					const x = g(w).split("/").slice(3);
					return x.length ? "/" + x.join("/") : ""
				},
				i = w => {
					const x = g(w).split("/").slice(2);
					return x.length ? `apps/${x.join("/")}` : "apps"
				};
			var d = n("../react/app/components/DeepLink/selectors.ts"),
				u = n("../react/app/components/DeepLink/constants.ts"),
				E = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const o = w => (0, E.Lb)(w) && (w.split(".").length > 1 || (0, t.v5)(w)),
				s = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				f = w => typeof w == "string" && w.startsWith("/"),
				a = (w, x) => l => new Promise((h, D) => {
					x.start();
					const $ = w.subscribe(() => {
						const V = (0, d.yI)(w.getState());
						V === r.E ? (x.cancel(), $(), D("DeepLink: waitForAction out of context.")) : l(V) && (x.finish(V.type), $(), h(V))
					})
				}),
				C = (w, x, l) => (h, D) => new Promise(($, V) => {
					l.start();
					const re = x.location.pathname;
					h = new URL(h, window.location.href).pathname, re !== h && (l.cancel(), V(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${h}", but on "${re}". You need to redirect to "${h}", and unblockRouter in your Resolver, before you use this function.`));
					const ne = w.subscribe(() => {
						const ee = (0, d.yI)(w.getState()),
							Q = x.location.pathname,
							z = new URLSearchParams(x.location.search).get(u.BV);
						(Q !== h || !!z) && (l.cancel(), ne(), V(`DeepLink: waitForPageAction user navigated away from "${h}" to "${Q}${z?x.location.search:""}"`)), ee === r.E ? (l.cancel(), ne(), V("DeepLink: waitForPageAction out of context.")) : D(ee) && (l.finish(ee.type), ne(), $(ee))
					})
				});

			function m(w) {
				const x = [],
					l = w.split("?")[0].split("/");
				for (let h of l) h.length !== 0 && (h.startsWith(":") ? x.push({
					value: h.substring(1),
					type: "dynamic"
				}) : x.push({
					value: h,
					type: "static"
				}));
				return x
			}
			async function v(w, x, l, h, D, $) {
				$.start();
				const V = m(w),
					ne = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(7484), n.e(72775)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					ee = {};
				let Q = "";
				for (const [R, z] of V.entries())
					if (z.type === "static") Q = [Q, z.value].join("/");
					else if (z.type === "dynamic" && s.is(z.value) && z.value in ne) {
					$.resolverStart(z.value);
					const te = await ne[z.value]({
						deepLink: w,
						blockRouter: () => x(!0),
						unblockRouter: () => x(!1),
						routerHistory: h,
						resolvedValues: ee,
						store: l,
						referringRoute: D,
						uri: {
							currentPartIdx: R,
							parts: V
						},
						waitForAction: a(l, $.createUserActionTracker(z.value)),
						waitForPageAction: C(l, h, $.createUserActionTracker(z.value))
					});
					$.resolverDone(z.value), Q = [Q, te].join("/"), ee[z.value] = te
				} else throw $.cancel(), new Error(`DeepLink: Resolver with name '${z.value}' is not supported.`);
				return $.done(), Q
			}

			function N(w, x) {
				const l = ":account",
					h = ":zone",
					D = x.get("zone");
				if (D) return x.delete("zone"), `/${l}/${h}/${D}`;
				const $ = x.get("account");
				if ($) return x.delete("account"), `/${l}/${$}`;
				if (w === "/overview") return `/${l}/${h}`;
				if (w === "/apps") return `/${l}/${h}/${i(w)}`;
				const V = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const re of V) {
					const ne = re.length;
					if (w.startsWith(re) && (w.length === ne || w[ne] === "/")) return `/${l}/${h}${w}`
				}
				switch (w) {
					case "/account/billing":
						return `/${l}/billing`;
					case "/account/subscriptions":
						return `/${l}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${l}/dns-firewall`;
					case "/account/audit-log":
						return `/${l}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(K, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				g = n("../react/app/components/SomethingWrong.jsx"),
				y = n("../utils/sentry/lastSentEventId.ts"),
				i = n("../react/utils/zaraz.ts"),
				d = n("../react/utils/url.ts");
			const u = ({
				sentryTag: E,
				children: t
			}) => r().createElement(c.SV, {
				beforeCapture: o => {
					E && o.setTag("errorBoundary", E), i.tg === null || i.tg === void 0 || i.tg.track("page-error", {
						page: (0, d.Fl)(window.location.pathname)
					})
				},
				onError: o => {
					({
						REDUX_LOGGER: void 0
					}).TESTING && n.g.logAppError(o)
				},
				fallback: ({
					error: o,
					eventId: s
				}) => {
					const f = y.e.getEventId() || s;
					return r().createElement(g.Z, {
						type: "page",
						error: o,
						eventId: f
					})
				}
			}, t);
			_.Z = u
		},
		"../react/app/components/ErrorStatus.tsx": function(K, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/style-container/es/index.js");

			function g(E, t) {
				if (E == null) return {};
				var o = y(E, t),
					s, f;
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(E);
					for (f = 0; f < a.length; f++) s = a[f], !(t.indexOf(s) >= 0) && (!Object.prototype.propertyIsEnumerable.call(E, s) || (o[s] = E[s]))
				}
				return o
			}

			function y(E, t) {
				if (E == null) return {};
				var o = {},
					s = Object.keys(E),
					f, a;
				for (a = 0; a < s.length; a++) f = s[a], !(t.indexOf(f) >= 0) && (o[f] = E[f]);
				return o
			}
			const i = (0, c.createComponent)(({
					margin: E
				}) => E ? {} : {
					height: 300,
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				}),
				d = (0, c.createComponent)(({
					theme: E,
					margin: t,
					size: o = 5
				}) => ({
					display: "flex",
					color: E.colors.gray[3],
					height: t ? "auto" : "100%",
					padding: t ? 0 : E.space[o > 1 ? o - 2 : 0],
					margin: t,
					justifyContent: "center",
					textAlign: "center",
					alignItems: "center",
					fontSize: E.fontSizes[o]
				})),
				u = E => {
					let {
						children: t
					} = E, o = g(E, ["children"]);
					return r().createElement(i, o, r().createElement(d, o, t))
				};
			_.Z = u
		},
		"../react/app/components/Footer.tsx": function(K, _, n) {
			"use strict";
			n.d(_, {
				Z: function() {
					return W
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				g = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				y = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				i = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = n.n(d),
				E = n("../react/common/components/Apple/utils.tsx"),
				t = n("../react/utils/translator.tsx"),
				o = n("../../../../node_modules/moment/moment.js"),
				s = n.n(o);
			const f = () => {
					const O = s()().format("YYYY"),
						H = J => {
							u().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: J
							})
						};
					return r().createElement(a, {
						marginTop: "auto"
					}, r().createElement(C, null, r().createElement(m, null, r().createElement(v, null, "\xA9 ", O, " Cloudflare, Inc."), r().createElement(v, null, r().createElement(N, null, r().createElement(w, {
						showOnDeskTop: !1
					}, r().createElement(x, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => H("Support")
					}, r().createElement(t.cC, {
						id: "common.support"
					}))), r().createElement(w, null, r().createElement(x, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => H("Privacy Policy")
					}, r().createElement(t.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(w, null, r().createElement(x, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => H("Terms of Use")
					}, r().createElement(t.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(w, null, r().createElement(x, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => H("Cookie Preferences")
					}, r().createElement(t.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(w, null, r().createElement(x, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => H("Trademark")
					}, r().createElement(t.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(N, null, r().createElement(w, null, r().createElement(x, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => H("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(t.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				a = (0, i.createComponent)(({
					theme: O,
					marginTop: H
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: H
				})),
				C = (0, i.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				m = (0, i.createComponent)(({
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
				v = (0, i.createComponent)(({
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
				N = (0, i.createComponent)(({
					theme: O
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: O.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				w = (0, i.createComponent)(({
					showOnDeskTop: O = !0,
					theme: H
				}) => ({
					color: H.colors.white,
					fontSize: H.fontSizes[1],
					height: "20px",
					display: O ? "flex" : "none",
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
				x = (0, i.createStyledComponent)(({
					theme: O
				}) => ({
					textDecoration: "none",
					color: O.colors.white,
					"&:hover": {
						color: O.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var l = f,
				h = n("../react/pages/welcome/routes.ts"),
				D = n("../react/utils/cookiePreferences.ts"),
				$ = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				V = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				ne = () => {
					const [O, H] = (0, e.useState)(!1), J = (0, D.wV)(), le = () => {
						H(!0)
					}, F = () => {
						H(!1)
					}, oe = J && J === "US" ? (0, t.ZP)("footer.cpra_cta.privacy_choices") : (0, t.ZP)("footer.cpra_cta.cookie_preferences"), ge = {
						background: "transparent",
						borderRadius: "none",
						color: O ? (0, $.Yc)() ? "#ee730a" : "#003681" : (0, $.Yc)() ? "#4693ff" : "#0051c3",
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
					return r().createElement(g.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: ge,
						onMouseEnter: le,
						onMouseLeave: F
					}, r().createElement(g.Ei, {
						height: 15,
						src: V,
						mr: 2,
						alt: oe
					}), oe)
				};

			function ee() {
				return ee = Object.assign ? Object.assign.bind() : function(O) {
					for (var H = 1; H < arguments.length; H++) {
						var J = arguments[H];
						for (var le in J) Object.prototype.hasOwnProperty.call(J, le) && (O[le] = J[le])
					}
					return O
				}, ee.apply(this, arguments)
			}

			function Q(O, H) {
				if (O == null) return {};
				var J = R(O, H),
					le, F;
				if (Object.getOwnPropertySymbols) {
					var oe = Object.getOwnPropertySymbols(O);
					for (F = 0; F < oe.length; F++) le = oe[F], !(H.indexOf(le) >= 0) && (!Object.prototype.propertyIsEnumerable.call(O, le) || (J[le] = O[le]))
				}
				return J
			}

			function R(O, H) {
				if (O == null) return {};
				var J = {},
					le = Object.keys(O),
					F, oe;
				for (oe = 0; oe < le.length; oe++) F = le[oe], !(H.indexOf(F) >= 0) && (J[F] = O[F]);
				return J
			}
			const z = 24,
				te = (0, i.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,$.Yc)()?$.rS.colors.orange[6]:$.rS.colors.blue[4]}`
					}
				}), g.A),
				U = O => {
					let {
						onClick: H
					} = O, J = Q(O, ["onClick"]);
					return r().createElement(te, ee({
						onClick: le => {
							u().sendEvent("navigate footer nav", {
								destinationPage: J.href
							}), H && H(le)
						}
					}, J))
				},
				ue = O => {
					let {
						children: H,
						target: J,
						rel: le
					} = O, F = Q(O, ["children", "target", "rel"]);
					return r().createElement(U, ee({
						target: J || "_blank",
						rel: le || "noopener noreferrer"
					}, F), H, r().createElement(y.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				};
			var W = () => {
				var O, H;
				const J = [h.d.root.pattern].some(le => (0, c.matchPath)(location.pathname, {
					path: le
				}));
				return (0, E.PP)() ? r().createElement(l, null) : J ? null : r().createElement(g.$_, {
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: 4,
					px: 3,
					mt: "auto"
				}, r().createElement(g.ZC, {
					display: "flex",
					flexWrap: "wrap",
					mx: "auto",
					maxWidth: "64rem"
				}, r().createElement(g.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, r().createElement(g.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, r().createElement(g.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.contact")), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.contact_support"))), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, t.ZP)("footer.contact_sales"))), r().createElement(g.Dd, {
					mt: 3
				}, r().createElement(g.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, r().createElement(U, {
					"aria-label": (0, t.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${z}px`
				}, r().createElement(y.J, {
					type: "twitter",
					size: z
				})), r().createElement(U, {
					"aria-label": (0, t.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${z}px`
				}, r().createElement(y.J, {
					type: "facebook",
					size: z
				})), r().createElement(U, {
					"aria-label": (0, t.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${z}px`
				}, r().createElement(y.J, {
					type: "linkedin",
					size: z
				})))))), r().createElement(g.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, r().createElement(g.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, r().createElement(g.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.what_we_do")), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/plans"
				}, (0, t.ZP)("footer.plans"))), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/overview"
				}, (0, t.ZP)("footer.about"))), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/network-map"
				}, (0, t.ZP)("footer.network_map"))))), r().createElement(g.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, r().createElement(g.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, r().createElement(g.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.resources")), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://developers.cloudflare.com"
				}, (0, t.ZP)("footer.product_docs"))), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://blog.cloudflare.com"
				}, (0, t.ZP)("footer.blog"))), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, t.ZP)("footer.testimonials"))), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://partners.cloudflare.com"
				}, (0, t.ZP)("footer.hosting_partners"))), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://api.cloudflare.com"
				}, (0, t.ZP)("footer.api"))))), r().createElement(g.ZC, {
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
					title: `Current version: ${((O=window)===null||O===void 0||(H=O.build)===null||H===void 0?void 0:H.dashVersion)||"unknown"}`
				}), r().createElement(g.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, r().createElement(g.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.support")), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.help_center"))), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://community.cloudflare.com"
				}, (0, t.ZP)("footer.community"))), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflarestatus.com"
				}, (0, t.ZP)("footer.system_status"))), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/abuse"
				}, (0, t.ZP)("footer.trust_safety"))))), r().createElement(g.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, r().createElement(g.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, r().createElement(g.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.about_us")), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/people"
				}, (0, t.ZP)("footer.team"))), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/careers"
				}, (0, t.ZP)("footer.careers"))), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, t.ZP)("footer.press"))), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, t.ZP)("footer.tos"))), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, t.ZP)("footer.subs_agreement"))), r().createElement(g.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, t.ZP)("footer.privacy_policy"))))), r().createElement(ne, null)))
			}
		},
		"../react/app/components/LoadingSuspense.tsx": function(K, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				g = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				y = n("../react/utils/translator.tsx"),
				i = n("../react/app/components/ErrorStatus.tsx"),
				d = n("../react/common/components/EmptyPage.jsx"),
				u = n("../react/common/hooks/suspenseHelpers.ts");

			function E(s) {
				const [f, a] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const C = window.setTimeout(() => a(!0), s);
					return () => window.clearTimeout(C)
				}, []), f
			}
			const t = ({
					loadingTimeout: s = 1e3,
					stillLoadingTimeout: f = 9e3
				}) => {
					const a = E(s),
						C = E(f);
					if ((0, u.nW)(), !a && !C) return r().createElement(d.Z, null);
					const m = C ? r().createElement(y.cC, {
						id: "common.still_loading"
					}) : a ? r().createElement(y.cC, {
						id: "common.loading"
					}) : null;
					return r().createElement(i.Z, {
						size: 5
					}, r().createElement(g.ZC, {
						mr: 3
					}, r().createElement(c.g, {
						size: "2x"
					})), m)
				},
				o = ({
					children: s
				}) => r().createElement(e.Suspense, {
					fallback: r().createElement(t, null)
				}, s);
			_.Z = o
		},
		"../react/app/components/Persistence/api.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				C8: function() {
					return u
				},
				d3: function() {
					return d
				},
				dr: function() {
					return y
				},
				lt: function() {
					return i
				},
				m6: function() {
					return t
				},
				n: function() {
					return E
				},
				yl: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = n.n(e);
			const c = "/persistence/user",
				g = async () => {
					try {
						return await (await e.get(c, {
							hideErrorAlert: !0
						})).body
					} catch (o) {
						console.error(o)
					}
				}, y = async o => {
					try {
						return await (await e.get(`/accounts/${o}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (s) {
						console.error(s)
					}
				}, i = async (o, s) => {
					try {
						return await (await e.post(`${c}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: o,
								accountId: s
							}),
							hideErrorAlert: !0
						})).body
					} catch (f) {
						return console.error(f), []
					}
				}, d = async (o, s) => {
					try {
						return await e.post(`/accounts/${o}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: s
							}),
							hideErrorAlert: !0
						}), !0
					} catch (f) {
						return console.error(f), !1
					}
				}, u = async o => {
					try {
						return await (await e.post(c, {
							body: JSON.stringify({
								darkMode: o
							})
						})).body
					} catch (s) {
						console.error(s)
					}
				}, E = async o => {
					try {
						return await (await e.post(`${c}/recents`, {
							body: JSON.stringify(o),
							hideErrorAlert: !0
						})).body
					} catch (s) {
						console.error(s)
					}
				}, t = async o => {
					try {
						return await (await e.post(`${c}/viewed-changes`, {
							body: JSON.stringify(o),
							hideErrorAlert: !0
						})).body
					} catch (s) {
						throw console.error(s), s
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(K, _, n) {
			"use strict";
			n.d(_, {
				Wl: function() {
					return E
				},
				lp: function() {
					return m
				},
				Z_: function() {
					return N
				},
				r7: function() {
					return ne
				},
				Tv: function() {
					return X
				},
				yZ: function() {
					return w
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../react/app/redux/index.ts"),
				g = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				y = n.n(g),
				i = n("../react/utils/bootstrap.ts"),
				d = n("../react/common/selectors/zoneSelectors.ts"),
				u = n("../react/app/components/Persistence/api.ts");
			const E = 10;

			function t(W) {
				for (var O = 1; O < arguments.length; O++) {
					var H = arguments[O] != null ? Object(arguments[O]) : {},
						J = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && J.push.apply(J, Object.getOwnPropertySymbols(H).filter(function(le) {
						return Object.getOwnPropertyDescriptor(H, le).enumerable
					})), J.forEach(function(le) {
						o(W, le, H[le])
					})
				}
				return W
			}

			function o(W, O, H) {
				return O = s(O), O in W ? Object.defineProperty(W, O, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[O] = H, W
			}

			function s(W) {
				var O = f(W, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function f(W, O) {
				if (typeof W != "object" || W === null) return W;
				var H = W[Symbol.toPrimitive];
				if (H !== void 0) {
					var J = H.call(W, O || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(W)
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
				m = (0, e.createContext)(C),
				v = m.Consumer,
				N = ({
					children: W,
					onDarkModeChangeCb: O
				}) => {
					const [H, J] = (0, e.useState)(a), [le, F] = (0, e.useState)(C.isLoading), oe = (0, i.$8)(), ge = (0, c.p4)(M => (0, d.wH)(M));
					(0, e.useEffect)(() => {
						oe ? (0, u.yl)().then(M => {
							M && (J(M), O(M.darkMode))
						}).finally(() => F(!1)) : F(!1)
					}, [oe]);
					const L = (M, Z) => !!H.favorites.find(ae => ae.type === "zone" && ae.name === M && ae.accountId === Z),
						A = M => H.favorites.filter(ae => ae.type === "zone" && ae.accountId === M).length < E;
					return r().createElement(m.Provider, {
						value: t({}, H, {
							isLoading: le,
							actions: {
								canAccountStarZone: A,
								isZoneStarred: L,
								starZone: async (M, Z) => {
									var ae;
									const _e = !L(M, Z),
										De = A(Z);
									if (_e && !De) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Oe = await (0, u.lt)(M, Z);
									y().sendEvent("click star zone", {
										isStarring: _e,
										totalStarredZones: Oe.filter(B => B.accountId === Z && B.type === "zone").length,
										totalZones: ge == null || (ae = ge.paginationData) === null || ae === void 0 ? void 0 : ae.info.total_count
									}), J(t({}, H, {
										favorites: Oe
									}))
								},
								setDarkMode: async M => {
									const Z = await (0, u.C8)(M);
									J(Z), O(Z.darkMode)
								},
								logRouteVisited: async M => {
									var Z;
									const ae = await (0, u.n)(M);
									J((Z = ae) !== null && Z !== void 0 ? Z : t({}, H))
								},
								viewChange: async M => {
									const Z = await (0, u.m6)(M);
									J(t({}, H, {
										viewedChanges: Z
									}))
								}
							}
						})
					}, W)
				},
				w = () => (0, e.useContext)(m);
			var x = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function h() {
				return h = Object.assign ? Object.assign.bind() : function(W) {
					for (var O = 1; O < arguments.length; O++) {
						var H = arguments[O];
						for (var J in H) Object.prototype.hasOwnProperty.call(H, J) && (W[J] = H[J])
					}
					return W
				}, h.apply(this, arguments)
			}

			function D(W, O) {
				if (W == null) return {};
				var H = $(W, O),
					J, le;
				if (Object.getOwnPropertySymbols) {
					var F = Object.getOwnPropertySymbols(W);
					for (le = 0; le < F.length; le++) J = F[le], !(O.indexOf(J) >= 0) && (!Object.prototype.propertyIsEnumerable.call(W, J) || (H[J] = W[J]))
				}
				return H
			}

			function $(W, O) {
				if (W == null) return {};
				var H = {},
					J = Object.keys(W),
					le, F;
				for (F = 0; F < J.length; F++) le = J[F], !(O.indexOf(le) >= 0) && (H[le] = W[le]);
				return H
			}
			const V = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var ne = W => {
					let {
						isStarred: O,
						size: H = 16
					} = W, J = D(W, ["isStarred", "size"]);
					const le = V[(0, x.Yc)() ? "dark" : "light"];
					return r().createElement(l.J, h({
						type: O ? "star" : "star-outline",
						color: O ? le.gold : le.gray,
						size: H
					}, J))
				},
				ee = n("../../../../node_modules/@cloudflare/elements/es/index.js");

			function Q(W) {
				for (var O = 1; O < arguments.length; O++) {
					var H = arguments[O] != null ? Object(arguments[O]) : {},
						J = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && J.push.apply(J, Object.getOwnPropertySymbols(H).filter(function(le) {
						return Object.getOwnPropertyDescriptor(H, le).enumerable
					})), J.forEach(function(le) {
						R(W, le, H[le])
					})
				}
				return W
			}

			function R(W, O, H) {
				return O = z(O), O in W ? Object.defineProperty(W, O, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[O] = H, W
			}

			function z(W) {
				var O = te(W, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function te(W, O) {
				if (typeof W != "object" || W === null) return W;
				var H = W[Symbol.toPrimitive];
				if (H !== void 0) {
					var J = H.call(W, O || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(W)
			}
			const U = {
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
			var X = (0, e.forwardRef)(({
				featurePreview: W = !1,
				isStarred: O,
				onClickFn: H,
				isDisabled: J,
				testId: le,
				buttonText: F,
				size: oe = "large"
			}, ge) => {
				const L = U[(0, x.Yc)() ? "dark" : "light"][O && !W ? "active" : "default"],
					A = Q({}, oe === "large" && {
						starIconSize: 16,
						fontSize: 3,
						height: "auto",
						paddingLeft: "12px",
						paddingRight: 3
					}, oe === "small" && {
						starIconSize: 14,
						fontSize: 1,
						height: "1.5rem",
						paddingLeft: "6px",
						paddingRight: 2
					});
				return r().createElement(ee.zx, {
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
					cursor: W || J ? "default" : "pointer",
					backgroundColor: L.bg,
					color: L.text,
					borderColor: L.border,
					onClick: H,
					opacity: J ? .5 : 1,
					disabled: J,
					fontSize: A.fontSize,
					height: A.height,
					"data-testid": le
				}, r().createElement(ne, {
					isStarred: W ? !1 : O,
					size: A.starIconSize
				}), F)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(K, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				g = n.n(c),
				y = n("../../../common/intl/intl-react/src/index.ts"),
				i = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("../node_modules/@cloudflare/component-button/es/index.js"),
				u = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				E = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				o = n.n(t),
				s = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				f = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				a = n("../react/app/components/Footer.tsx"),
				C = n("../react/utils/url.ts");

			function m(Q) {
				for (var R = 1; R < arguments.length; R++) {
					var z = arguments[R] != null ? Object(arguments[R]) : {},
						te = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(z).filter(function(U) {
						return Object.getOwnPropertyDescriptor(z, U).enumerable
					})), te.forEach(function(U) {
						v(Q, U, z[U])
					})
				}
				return Q
			}

			function v(Q, R, z) {
				return R = N(R), R in Q ? Object.defineProperty(Q, R, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[R] = z, Q
			}

			function N(Q) {
				var R = w(Q, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function w(Q, R) {
				if (typeof Q != "object" || Q === null) return Q;
				var z = Q[Symbol.toPrimitive];
				if (z !== void 0) {
					var te = z.call(Q, R || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(Q)
			}
			const x = (0, i.createComponent)(({
					type: Q
				}) => ({
					height: Q !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				l = (0, i.createComponent)(({
					theme: Q,
					margin: R,
					size: z = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: Q.colors.gray[3],
					height: R ? "auto" : "100%",
					padding: R ? 0 : Q.space[z > 1 ? z - 2 : 0],
					margin: R,
					justifyContent: "center",
					alignItems: "center"
				})),
				h = (0, i.createComponent)(() => ({
					textAlign: "left"
				})),
				D = (0, i.createComponent)(() => ({
					textAlign: "right"
				})),
				$ = (0, i.createComponent)(({
					theme: Q
				}) => ({
					fontSize: Q.fontSizes[6]
				})),
				V = (0, i.createComponent)(({
					theme: Q
				}) => ({
					fontSize: Q.fontSizes[4]
				})),
				re = (0, i.createComponent)(({
					theme: Q
				}) => ({
					fontSize: Q.fontSizes[3]
				})),
				ne = (0, i.createComponent)(({
					theme: Q
				}) => ({
					width: "100%",
					height: 125,
					marginTop: Q.space[4],
					padding: Q.space[2]
				}), "textarea");
			class ee extends r().Component {
				constructor(...R) {
					super(...R);
					v(this, "state", {
						value: "",
						submitted: !1
					}), v(this, "handleTextareaChange", z => {
						this.setState({
							value: z.target.value
						})
					}), v(this, "sendErrToSentry10", async () => {
						try {
							var z, te, U, ue;
							const X = ((z = window) === null || z === void 0 || (te = z.bootstrap) === null || te === void 0 || (U = te.data) === null || U === void 0 || (ue = U.user) === null || ue === void 0 ? void 0 : ue.id) || "Unknown",
								W = this.props.eventId || u.eW(),
								O = {
									name: X,
									email: `${X}@userid.com`,
									comments: this.state.value,
									eventId: W,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: m({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(O)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (X) {
							console.error(X)
						}
					}), v(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), v(this, "renderContent", z => r().createElement(y.oc, null, te => r().createElement(x, {
						type: z
					}, r().createElement(l, null, r().createElement(h, null, r().createElement($, null, te.t("error.internal_issues")), r().createElement(V, null, te.t("error.help_us")), r().createElement(ne, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: U => this.handleTextareaChange(U),
						disabled: this.state.submitted,
						placeholder: te.t("error.give_feedback")
					}), r().createElement(D, null, !this.state.submitted && r().createElement(d.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, te.t("common.submit")), this.state.submitted && r().createElement(re, null, te.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const R = this.props.error;
					console.error(`SomethingWrong: ${R}`), E.YA("user_feedback_form_displayed", "yes"), E.YA("normalizedPath", (0, C.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: R
					} = this.props;
					return R === "fullscreen" ? r().createElement("div", null, r().createElement(s.h4, null, r().createElement(t.Link, {
						to: "/"
					}, r().createElement(f.TR, null))), this.renderContent(R), r().createElement(a.Z, null)) : this.renderContent(R)
				}
			}
			ee.propTypes = {
				type: g().oneOf(["fullscreen", "page"]),
				error: g().oneOfType([g().string, g().object]),
				eventId: g().string
			}, _.Z = ee
		},
		"../react/app/providers/storeContainer.js": function(K, _, n) {
			"use strict";
			n.d(_, {
				bh: function() {
					return mt
				}
			});
			var e = n("../../../../node_modules/redux/es/redux.js"),
				r = n("../../../../node_modules/redux-thunk/es/index.js"),
				c = n("../../../../node_modules/redux-persist/es/index.js"),
				g = n("../../../../node_modules/redux-persist/lib/storage/index.js"),
				y = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				i = n("../react/app/redux/makeReducer.js"),
				d = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				u = n.n(d);
			const E = d.static.from({
					data: void 0,
					errors: null,
					isRequesting: !1,
					isErrored: !1
				}),
				t = (T, {
					type: I,
					meta: Y
				}) => Y && Y.method === "put" && I.indexOf("membership") === 0 ? E : T;
			var s = {
					reducer: (0, i.ZP)("invite").on("default", t)
				},
				f = n("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				a = n("../react/common/actionTypes.ts");
			const C = (T = u().from({
					isRequesting: !1,
					isErrored: !1,
					isFinished: !1,
					securityToken: null,
					errors: null
				}), I) => {
					switch (I.type) {
						case "ONBOARDING_SIGNUP_REQUEST":
							return u().merge(T, {
								isRequesting: !0,
								isFinished: !1,
								isErrored: !1,
								errors: null
							});
						case "ONBOARDING_SIGNUP_SUCCESS":
							return u().merge(T, {
								isRequesting: !1,
								isFinished: !0,
								isErrored: !1
							});
						case "ONBOARDING_SIGNUP_FAILURE":
							return u().merge(T, {
								isRequesting: !1,
								isErrored: !0,
								errors: I.errors
							});
						case "ONBOARDING_SECURITY_TOKEN_UPDATE":
							return u().update(T, "securityToken", () => I.token)
					}
					return (0, f.h)(I, T)
				},
				m = {
					apikey: (0, i.ZP)(a.Yc.APIKEY),
					apitoken: (0, i.ZP)(a.Yc.APITOKEN),
					emailrollback: (0, i.ZP)(a.Yc.EMAIL_ROLLBACK),
					deleteuser: (0, i.ZP)(a.Yc.DELETE_USER),
					forgotpass: (0, i.ZP)(a.Yc.FORGOT_PASS),
					login: (0, i.ZP)(a.Yc.LOGIN),
					origincakey: (0, i.ZP)(a.Yc.ORIGIN_CA_KEY),
					signup: (0, i.ZP)(a.Yc.SIGNUP)
				};
			var v = {
				reducer: (0, e.combineReducers)({
					userCreation: C,
					[a.Yc.APIKEY]: m.apikey,
					[a.Yc.APITOKEN]: m.apitoken,
					[a.Yc.EMAIL_ROLLBACK]: m.emailrollback,
					[a.Yc.DELETE_USER]: m.deleteuser,
					[a.Yc.FORGOT_PASS]: m.forgotpass,
					[a.Yc.LOGIN]: m.login,
					[a.Yc.ORIGIN_CA_KEY]: m.origincakey,
					[a.Yc.SIGNUP]: m.signup
				})
			};

			function N(T = (0, d.static)({}), I) {
				switch (I.type) {
					case a.Li:
						const {
							userId: Y, accountId: pe, timeStamp: he
						} = I;
						return d.static.setIn(T, [Y, pe], {
							lastSeen: he
						});
					default:
						return T
				}
			}

			function w(T) {
				for (var I = 1; I < arguments.length; I++) {
					var Y = arguments[I] != null ? Object(arguments[I]) : {},
						pe = Object.keys(Y);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(Y).filter(function(he) {
						return Object.getOwnPropertyDescriptor(Y, he).enumerable
					})), pe.forEach(function(he) {
						x(T, he, Y[he])
					})
				}
				return T
			}

			function x(T, I, Y) {
				return I = l(I), I in T ? Object.defineProperty(T, I, {
					value: Y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = Y, T
			}

			function l(T) {
				var I = h(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function h(T, I) {
				if (typeof T != "object" || T === null) return T;
				var Y = T[Symbol.toPrimitive];
				if (Y !== void 0) {
					var pe = Y.call(T, I || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}

			function D(T = {}, I) {
				const Y = `__ACTIVE__${I.activeKey}`;
				switch (I.type) {
					case a.HI:
						return w({}, T, {
							[Y]: I.activeValue
						});
					case a.s1:
						return w({}, T, {
							[Y]: void 0
						});
					default:
						return T
				}
			}
			const $ = () => [...Array(8)].map(T => Math.floor(Math.random() * 16).toString(16)).join(""),
				V = [];

			function re(T, I) {
				if (T === void 0) return V;
				switch (I.type) {
					case a.Np: {
						const {
							payload: Y,
							options: pe
						} = I, {
							ModalComponent: he,
							props: qe
						} = Y;
						return T = pe.replace ? V : T, [...T, {
							id: $(),
							ModalComponent: he,
							props: qe
						}]
					}
					case a.gM: {
						const {
							ModalComponent: Y
						} = I.payload;
						if (Y) {
							const pe = T.findIndex(he => he.ModalComponent === Y);
							return pe >= 0 ? T.slice(0, pe) : T
						} else return T.slice(0, -1)
					}
					default:
						return T
				}
			}

			function ne(T) {
				for (var I = 1; I < arguments.length; I++) {
					var Y = arguments[I] != null ? Object(arguments[I]) : {},
						pe = Object.keys(Y);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(Y).filter(function(he) {
						return Object.getOwnPropertyDescriptor(Y, he).enumerable
					})), pe.forEach(function(he) {
						ee(T, he, Y[he])
					})
				}
				return T
			}

			function ee(T, I, Y) {
				return I = Q(I), I in T ? Object.defineProperty(T, I, {
					value: Y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = Y, T
			}

			function Q(T) {
				var I = R(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function R(T, I) {
				if (typeof T != "object" || T === null) return T;
				var Y = T[Symbol.toPrimitive];
				if (Y !== void 0) {
					var pe = Y.call(T, I || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}

			function z(T = {}, I) {
				const Y = `__TOGGLE__${I.toggleKey}`;
				switch (I.type) {
					case a.lV:
						return ne({}, T, {
							[Y]: !0
						});
					case a.Cm:
						return ne({}, T, {
							[Y]: !1
						});
					default:
						return T
				}
			}
			const te = {
				notifications: []
			};

			function U(T, I) {
				switch (T === void 0 && (T = te), I.type) {
					case a.Ng:
						return Object.assign({}, T, {
							notifications: T.notifications.concat(I.notification)
						});
					case a.Cz:
						return Object.assign({}, T, {
							notifications: T.notifications.filter(function(Y) {
								return Y.id !== I.notificationId
							})
						});
					default:
						return T
				}
			}

			function ue(T) {
				for (var I = 1; I < arguments.length; I++) {
					var Y = arguments[I] != null ? Object(arguments[I]) : {},
						pe = Object.keys(Y);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(Y).filter(function(he) {
						return Object.getOwnPropertyDescriptor(Y, he).enumerable
					})), pe.forEach(function(he) {
						X(T, he, Y[he])
					})
				}
				return T
			}

			function X(T, I, Y) {
				return I = W(I), I in T ? Object.defineProperty(T, I, {
					value: Y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = Y, T
			}

			function W(T) {
				var I = O(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function O(T, I) {
				if (typeof T != "object" || T === null) return T;
				var Y = T[Symbol.toPrimitive];
				if (Y !== void 0) {
					var pe = Y.call(T, I || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const H = T => (0, i.ZP)(T).on("success", (I, Y, {
					meta: pe
				}) => {
					var he, qe;
					const {
						accountId: ut,
						zoneId: ht,
						dateOnly: Ct = !1
					} = pe.params || {};
					let Ge = "";
					const dt = {},
						ft = ue({}, (he = I.paginationData) === null || he === void 0 || (qe = he.options) === null || qe === void 0 ? void 0 : qe.editedDate);
					I.data.forEach(bt => {
						const {
							id: Tt,
							allocation: at,
							edited_date: yt
						} = bt;
						dt[Tt] = at.value, yt > Ge && (Ge = yt)
					}), ft[ut || ht] = Ge;
					const pt = {
						options: {
							editedDate: ft
						}
					};
					return Ct ? ue({}, I, {
						paginationData: pt
					}) : ue({}, I, {
						paginationData: pt,
						data: dt
					})
				}),
				J = (0, e.combineReducers)({
					account: H("accountEntitlements"),
					zone: H("zoneEntitlements")
				});
			var le = n("../react/app/components/DeepLink/reducer.ts");

			function F(T) {
				for (var I = 1; I < arguments.length; I++) {
					var Y = arguments[I] != null ? Object(arguments[I]) : {},
						pe = Object.keys(Y);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(Y).filter(function(he) {
						return Object.getOwnPropertyDescriptor(Y, he).enumerable
					})), pe.forEach(function(he) {
						oe(T, he, Y[he])
					})
				}
				return T
			}

			function oe(T, I, Y) {
				return I = ge(I), I in T ? Object.defineProperty(T, I, {
					value: Y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = Y, T
			}

			function ge(T) {
				var I = L(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function L(T, I) {
				if (typeof T != "object" || T === null) return T;
				var Y = T[Symbol.toPrimitive];
				if (Y !== void 0) {
					var pe = Y.call(T, I || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const A = (0, i.ZP)("onboardingGuide").on("success", (T, I, Y) => {
				if (Y.meta.method === "post") {
					var pe;
					const he = I.data && I.data.completedTasks || [],
						qe = (pe = I.data && I.data.readTasks) !== null && pe !== void 0 ? pe : [];
					return F({}, T, {
						data: {
							completedTasks: Array.from(new Set(he.concat(Y.payload.status === "completedTasks" ? Y.payload.taskName : []))),
							readTasks: Array.from(new Set(qe.concat(Y.payload.status === "readTasks" ? Y.payload.taskName : [])))
						}
					})
				}
				return T
			});
			var M = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js");

			function Z(T) {
				for (var I = 1; I < arguments.length; I++) {
					var Y = arguments[I] != null ? Object(arguments[I]) : {},
						pe = Object.keys(Y);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(Y).filter(function(he) {
						return Object.getOwnPropertyDescriptor(Y, he).enumerable
					})), pe.forEach(function(he) {
						ae(T, he, Y[he])
					})
				}
				return T
			}

			function ae(T, I, Y) {
				return I = _e(I), I in T ? Object.defineProperty(T, I, {
					value: Y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = Y, T
			}

			function _e(T) {
				var I = De(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function De(T, I) {
				if (typeof T != "object" || T === null) return T;
				var Y = T[Symbol.toPrimitive];
				if (Y !== void 0) {
					var pe = Y.call(T, I || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const Oe = (T, I) => {
				const {
					meta: Y
				} = I;
				return Y && Y.method === "delete" && !T[Y.entityType] ? T : (0, M.uW)(T, I)
			};
			var B = {
					access: (0, e.combineReducers)({
						accessOrganizations: (0, i.ZP)("organizations").modifyInitialState(T => Z({}, T, {
							needsHydration: !0,
							data: {
								auth_domain: "",
								name: "",
								login_design: {}
							}
						})).on("success", (T, I) => Z({}, T, {
							data: Array.isArray(T == null ? void 0 : T.data) ? I == null ? void 0 : I.data : T == null ? void 0 : T.data,
							needsHydration: !1
						})).on("error", T => Z({}, T, {
							needsHydration: !1
						}))
					}),
					accountAccess: N,
					accounts: (0, i.ZP)("accounts"),
					application: (0, e.combineReducers)({
						active: D,
						modals: re,
						toggles: z
					}),
					deepLink: le.r,
					entitlements: J,
					entities: Oe,
					gates: y.vq,
					notifications: U,
					onboarding: v.reducer,
					onboardingGuide: A,
					userCommPreferences: (0, i.ZP)("userCommPreferences"),
					userDetails: (0, i.ZP)("userDetails"),
					invite: s.reducer,
					membership: (0, i.ZP)("membership"),
					memberships: (0, i.ZP)("memberships").on("success", (T, I, Y) => Y.meta.method === "delete" ? Z({}, T, {
						data: I.data.filter(pe => pe !== Y.payload)
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
				ye = n("../react/app/redux/normalizer.js"),
				Ie = n("../../../../node_modules/@sentry/react/esm/redux.js"),
				Fe = n("../react/common/selectors/zoneSelectors.ts"),
				xe = n("../../../../node_modules/object.pick/index.js"),
				je = n.n(xe);

			function We(T) {
				for (var I = 1; I < arguments.length; I++) {
					var Y = arguments[I] != null ? Object(arguments[I]) : {},
						pe = Object.keys(Y);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(Y).filter(function(he) {
						return Object.getOwnPropertyDescriptor(Y, he).enumerable
					})), pe.forEach(function(he) {
						He(T, he, Y[he])
					})
				}
				return T
			}

			function He(T, I, Y) {
				return I = ot(I), I in T ? Object.defineProperty(T, I, {
					value: Y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = Y, T
			}

			function ot(T) {
				var I = Je(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function Je(T, I) {
				if (typeof T != "object" || T === null) return T;
				var Y = T[Symbol.toPrimitive];
				if (Y !== void 0) {
					var pe = Y.call(T, I || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const et = ["accountRoles", "accountSubscriptions", "application", "caching", "crypto", "customizations", "edgeauth", "access", "entitlements", "fields", "firewall", "notifications", "onboarding", "partners", "performance", "ratePlans", "settings", "traffic", "user", "zone", "zones"],
				Ke = T => {
					const I = je()(T, et),
						Y = (0, Fe.nA)(T);
					return We({}, I, {
						accountTwoFa: T.profile && T.profile.twoFactor,
						currentZone: je()(Y, ["plan", "type"])
					})
				},
				Ve = ({
					type: T,
					meta: I
				}) => ({
					type: T,
					entityType: I && I.entityType
				});
			var tt = n("../react/app/reducerRegistry.js"),
				Xe = n("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				ce = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				fe = n("../react/common/constants/index.ts"),
				P = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				G = n("../react/app/redux/makeAction.js"),
				de = n("../react/common/actions/membershipActions.ts");
			const Le = "get";

			function* Me(T) {
				const I = {
					entityType: T.entityType,
					method: Le
				};
				try {
					yield(0, ce.gw)(200), yield(0, ce.gz)((0, G.dJ)({
						type: `${T.entityType}.start`,
						meta: I
					}));
					const Y = yield(0, ce.RE)(P[Le], T.url, T.params[0]);
					let pe = Y && Y.body;
					T.type === fe.UM.MEMBERSHIPS_ROOT_REQUESTED && (pe = (0, de.ct)({
						payload: pe.result
					})), yield(0, ce.gz)((0, G.Oy)({
						type: `${T.entityType}.success`,
						payload: pe,
						meta: {
							entityType: T.entityType,
							method: Le
						}
					}, {}, T.params, {}, Y))
				} catch (Y) {
					throw yield(0, ce.gz)((0, G.$J)({
						type: `${T.entityType}.error`,
						payload: Y,
						error: !0,
						meta: I
					}, {}, T.params, {}, Y)), Y
				}
			}
			var Ue = [(0, ce.Fm)(fe.UM.ZONES_ROOT_REQUESTED, Me), (0, ce.Fm)(fe.UM.ZONES_ACCOUNT_REQUESTED, Me), (0, ce.Fm)(fe.UM.ZONES_HEADER_REQUESTED, Me), (0, ce.Fm)(fe.UM.MEMBERSHIPS_ROOT_REQUESTED, Me), (0, ce.Fm)(fe.UM.ACCOUNT_MEMBERS_REQUESTED, Me)],
				Be = n("../react/pages/apps/marketplace/config/sagas.ts");

			function* ke() {
				yield(0, ce.$6)([...Ue, ...Be.y])
			}
			var Ce = n("../react/app/redux/processActionMiddleware.js"),
				$e = n("../../../../node_modules/is-promise/index.js"),
				Ye = n.n($e);

			function Re(T) {
				for (var I = 1; I < arguments.length; I++) {
					var Y = arguments[I] != null ? Object(arguments[I]) : {},
						pe = Object.keys(Y);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(Y).filter(function(he) {
						return Object.getOwnPropertyDescriptor(Y, he).enumerable
					})), pe.forEach(function(he) {
						it(T, he, Y[he])
					})
				}
				return T
			}

			function it(T, I, Y) {
				return I = lt(I), I in T ? Object.defineProperty(T, I, {
					value: Y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = Y, T
			}

			function lt(T) {
				var I = j(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function j(T, I) {
				if (typeof T != "object" || T === null) return T;
				var Y = T[Symbol.toPrimitive];
				if (Y !== void 0) {
					var pe = Y.call(T, I || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const se = {
					key: "cf-redux-store",
					storage: g.Z,
					whitelist: ["accountAccess", "invite"]
				},
				Ee = (0, Xe.ZP)(),
				we = [({
					dispatch: T
				}) => I => Y => Ye()(Y) ? Y.then(pe => T(pe)) : I(Y), Ee, r.Z, Ce.Z, ye.qR],
				ze = T => (0, c.Wq)(se, Re({}, B, T));

			function nt() {
				const T = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					Y = e.compose((0, e.applyMiddleware)(...we), Ie.w({
						actionTransformer: Ve,
						stateTransformer: Ke
					})),
					pe = {},
					he = (0, e.createStore)(ze(tt.Z.getReducers()), pe, Y);
				Ee.run(ke), (0, c.p5)(he);
				const ut = (n.g.bootstrap || {}).data || {};
				return he.dispatch((0, M.mW)("user", ut.user)), he
			}
			let Pe;
			tt.Z.setChangeListener(T => {
				var I;
				Pe && ((I = Pe) === null || I === void 0 ? void 0 : I.replaceReducer) && (Pe.replaceReducer(ze(T)), (0, c.p5)(Pe))
			});

			function mt() {
				return Pe || (Pe = nt()), Pe
			}
		},
		"../react/app/reducerRegistry.js": function(K, _, n) {
			"use strict";

			function e(d) {
				for (var u = 1; u < arguments.length; u++) {
					var E = arguments[u] != null ? Object(arguments[u]) : {},
						t = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && t.push.apply(t, Object.getOwnPropertySymbols(E).filter(function(o) {
						return Object.getOwnPropertyDescriptor(E, o).enumerable
					})), t.forEach(function(o) {
						r(d, o, E[o])
					})
				}
				return d
			}

			function r(d, u, E) {
				return u = c(u), u in d ? Object.defineProperty(d, u, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[u] = E, d
			}

			function c(d) {
				var u = g(d, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function g(d, u) {
				if (typeof d != "object" || d === null) return d;
				var E = d[Symbol.toPrimitive];
				if (E !== void 0) {
					var t = E.call(d, u || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(d)
			}
			class y {
				constructor() {
					this.listener = null, this.reducers = {}
				}
				getReducers() {
					return e({}, this.reducers)
				}
				emitChange() {
					this.listener && this.listener(this.getReducers())
				}
				register(u, E) {
					this.reducers = e({}, this.reducers, {
						[u]: E
					}), this.emitChange()
				}
				registerAll(u) {
					this.reducers = e({}, this.reducers, u), this.emitChange()
				}
				setChangeListener(u) {
					this.listener = u
				}
			}
			const i = new y;
			_.Z = i
		},
		"../react/app/redux/index.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				TZ: function() {
					return c
				},
				UM: function() {
					return y
				},
				ZS: function() {
					return g
				},
				p4: function() {
					return i
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				r = n.n(e);
			const c = () => (0, e.useStore)(),
				g = () => c().getState(),
				y = () => (0, e.useDispatch)(),
				i = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(K, _, n) {
			"use strict";
			n.d(_, {
				$J: function() {
					return s
				},
				Oy: function() {
					return o
				},
				SC: function() {
					return E
				},
				ZP: function() {
					return f
				},
				dJ: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				r = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				c = n.n(r);

			function g(a) {
				for (var C = 1; C < arguments.length; C++) {
					var m = arguments[C] != null ? Object(arguments[C]) : {},
						v = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(m).filter(function(N) {
						return Object.getOwnPropertyDescriptor(m, N).enumerable
					})), v.forEach(function(N) {
						y(a, N, m[N])
					})
				}
				return a
			}

			function y(a, C, m) {
				return C = i(C), C in a ? Object.defineProperty(a, C, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[C] = m, a
			}

			function i(a) {
				var C = d(a, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function d(a, C) {
				if (typeof a != "object" || a === null) return a;
				var m = a[Symbol.toPrimitive];
				if (m !== void 0) {
					var v = m.call(a, C || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(a)
			}
			const u = g({}, r),
				E = (a, C, m, v = {}) => {
					const N = a === "delete" ? "del" : a.toLowerCase();
					return m && N !== "del" && (v.body = m), u[N](C, v)
				},
				t = (a, C) => (a.meta.params = C, a),
				o = (a, C, m, v, {
					body: N = {}
				}) => {
					const {
						result: w,
						messages: x,
						result_info: l
					} = N, h = Object.values(C);
					if (a.meta.method === "delete") {
						const D = h[h.length - 1];
						a.meta.id = typeof D == "object" ? D.id : D
					}
					return a.payload = w, x && (a.meta.messages = x), h.length && (a.meta.params = C), l && (a.meta.paginationData = {
						info: l,
						actionParameters: h,
						options: m[0],
						insertionOffset: 0
					}), a
				},
				s = (a, C, m, v, N) => (a.payload = N && N.body && N.body.errors, a.meta.messages = N && N.body && N.body.messages, a.meta.params = C, a);

			function f(a, C, m, v) {
				const N = (0, e.RM)(a, C, m, v).apiFetch(E).on("start", t).on("success", o).on("error", s),
					w = N.mock;
				return N.mock = x => (w((...l) => {
					const h = x(...l);
					return h && typeof h == "object" && "result" in h ? h : {
						result: h
					}
				}), N), N
			}
		},
		"../react/app/redux/makeActionCreator.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				C: function() {
					return r
				}
			});
			var e = n("../react/app/redux/makeAction.js");

			function r(g, y) {
				return {
					get: (i, ...d) => (0, e.ZP)(g, "get", c(i, d), y),
					post: (i, ...d) => (0, e.ZP)(g, "post", c(i, d), y),
					delete: (i, ...d) => (0, e.ZP)(g, "delete", c(i, d), y),
					put: (i, ...d) => (0, e.ZP)(g, "put", c(i, d), y),
					patch: (i, ...d) => (0, e.ZP)(g, "patch", c(i, d), y)
				}
			}

			function c(g, y) {
				let i = "";
				const d = [...g.raw],
					u = [...y];
				for (; d.length > 0 || u.length > 0;) {
					const E = d.shift(),
						t = u.shift();
					i += E !== void 0 ? E : "", i += t !== void 0 ? `(${t})` : ""
				}
				return i
			}
		},
		"../react/app/redux/makeReducer.js": function(K, _, n) {
			"use strict";
			n.d(_, {
				ZP: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = n.n(e),
				c = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				g = n("../../../../node_modules/lodash/clone.js"),
				y = n.n(g);
			const i = e.static.from([]);

			function d(o, s, {
				meta: {
					paginationData: f,
					messages: a
				}
			}) {
				let C = e.static.set(o, "messages", a || i);
				return f ? e.static.merge(C, {
					paginationData: f
				}) : C
			}

			function u(o, s, {
				meta: {
					errors: f,
					messages: a
				}
			}) {
				const C = {
					messages: a || i
				};
				return f && (C.errors = f), e.static.merge(o, C)
			}

			function E(o, s, f = {}) {
				const {
					data: a
				} = o;
				if (s.type === `${f.insertDelete}.success`) {
					const {
						method: C
					} = s.meta;
					let m = 0,
						v = o;
					if (C === "post") {
						const N = a ? [s.payload, ...a] : [s.payload];
						v = e.static.set(v, "data", N), m = 1
					} else if (C === "delete" && a && a.includes(s.meta.id)) {
						const N = a.filter(w => w !== s.meta.id);
						v = e.static.set(v, "data", N), m = -1
					}
					return m && o.paginationData && (v = e.static.setIn(v, ["paginationData", "insertionOffset"], o.paginationData.insertionOffset + m)), v
				}
				return s.type === "cfForceUpdate" ? e.static.set(o, "data", y()(a)) : o
			}

			function t(o, s = {}) {
				return s.errorKey = "errors", (0, c.j3)(o, s).modifyInitialState(f => e.static.set(f, "messages", i)).on("success", d).on("error", u).on("default", E)
			}
		},
		"../react/app/redux/normalizer.js": function(K, _, n) {
			"use strict";
			n.d(_, {
				P1: function() {
					return E
				},
				jQ: function() {
					return d
				},
				qR: function() {
					return t
				},
				uc: function() {
					return u
				}
			});
			var e = n("../react/pages/home/alerts/config.tsx"),
				r = n("../react/pages/workers/entityTypes.ts"),
				c = n("../react/pages/email/types.ts"),
				g = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				y = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				i = n.n(y);
			const d = y.static.from([{
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
				u = o => o.entities,
				E = (...o) => (0, g.P1)(d, u, ...o),
				t = (0, g.QB)(d)
		},
		"../react/app/redux/processActionMiddleware.js": function(K, _, n) {
			"use strict";
			var e = n("../react/app/redux/normalizer.js");
			const r = ".success",
				c = () => {
					const g = new Map,
						y = d => {
							const u = e.jQ.find(E => E.entityType === d);
							return u && (u.to ? u.to : u.entityType)
						},
						i = () => d => u => {
							if (u.type.endsWith(r)) {
								const E = u.type.substring(0, u.type.length - r.length),
									t = y(E),
									o = g.get(t);
								return d(o ? o(u) : u)
							}
							return d(u)
						};
					return i.on = (d, u) => {
						let E = g.get(d);
						g.set(d, t => u(E ? E(t) : t))
					}, i
				};
			_.Z = c()
		},
		"../react/app/redux/utils.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				F: function() {
					return c
				},
				_: function() {
					return r
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const r = g => (y, i, d) => (0, e.SC)(y, i, d, {
					hideErrorAlert: !0
				}).catch(g),
				c = g => y => {
					if (y.status === g) return y;
					throw y
				}
		},
		"../react/common/actionTypes.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Cm: function() {
					return i
				},
				Cz: function() {
					return r
				},
				HI: function() {
					return d
				},
				Li: function() {
					return E
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return c
				},
				Yc: function() {
					return o
				},
				gM: function() {
					return g
				},
				lV: function() {
					return y
				},
				s1: function() {
					return u
				}
			});
			const e = "NOTIFICATION_OPEN",
				r = "NOTIFICATION_CLOSE",
				c = "MODAL_OPEN",
				g = "MODAL_CLOSE",
				y = "TOGGLE_ON",
				i = "TOGGLE_OFF",
				d = "SET_ACTIVE",
				u = "CLEAR_ACTIVE",
				E = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let o = function(s) {
				return s.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", s.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", s.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", s.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", s.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", s.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", s.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", s.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", s.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", s
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				AX: function() {
					return s
				},
				YT: function() {
					return E
				},
				ct: function() {
					return d
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

			function c(f) {
				for (var a = 1; a < arguments.length; a++) {
					var C = arguments[a] != null ? Object(arguments[a]) : {},
						m = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(C).filter(function(v) {
						return Object.getOwnPropertyDescriptor(C, v).enumerable
					})), m.forEach(function(v) {
						g(f, v, C[v])
					})
				}
				return f
			}

			function g(f, a, C) {
				return a = y(a), a in f ? Object.defineProperty(f, a, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[a] = C, f
			}

			function y(f) {
				var a = i(f, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function i(f, a) {
				if (typeof f != "object" || f === null) return f;
				var C = f[Symbol.toPrimitive];
				if (C !== void 0) {
					var m = C.call(f, a || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(f)
			}
			const d = f => {
					const a = f.payload.map(C => c({}, C, {
						membershipId: C.id,
						id: C.account.id
					}));
					return c({}, f, {
						payload: a
					})
				},
				u = f => {
					const a = d(f);
					return Array.isArray(a.payload) ? c({}, f, {
						payload: a.payload[0]
					}) : c({}, f, {
						payload: null
					})
				},
				E = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", d),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				o = (...f) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: f
				}),
				s = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", u)
		},
		"../react/common/actions/modalActions.ts": function(K, _, n) {
			"use strict";
			n.r(_), n.d(_, {
				closeModal: function() {
					return g
				},
				openModal: function() {
					return c
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const r = {
				replace: !0
			};

			function c(y, i, d = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: y,
						props: i
					},
					options: d
				}
			}

			function g(y) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: y
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				IH: function() {
					return y
				},
				Vp: function() {
					return i
				},
				ZK: function() {
					return u
				},
				um: function() {
					return d
				},
				vU: function() {
					return E
				}
			});
			var e = n("../react/common/actionTypes.ts");

			function r(t) {
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

			function y(t, o, s = {}) {
				return s = s || {},
					function(f) {
						let a = g++,
							C = {
								id: a,
								type: t,
								message: o,
								delay: s.delay,
								persist: s.persist === void 0 ? !1 : s.persist,
								closable: s.closable === void 0 ? !0 : s.closable,
								onClose() {
									f(c(a)), s.onClose && s.onClose.apply(null, arguments)
								}
							};
						f(r(C))
					}
			}

			function i(t, o) {
				return y("success", t, o)
			}

			function d(t, o) {
				return y("info", t, o)
			}

			function u(t, o) {
				return y("warning", t, o)
			}

			function E(t, o) {
				return y("error", t, o)
			}
		},
		"../react/common/actions/userActions.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				BT: function() {
					return d
				},
				Ut: function() {
					return v
				},
				V_: function() {
					return N
				},
				Y9: function() {
					return C
				},
				Z0: function() {
					return x
				},
				mp: function() {
					return m
				},
				r3: function() {
					return w
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				r = n("../react/app/redux/utils.ts");

			function c(l) {
				for (var h = 1; h < arguments.length; h++) {
					var D = arguments[h] != null ? Object(arguments[h]) : {},
						$ = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(D).filter(function(V) {
						return Object.getOwnPropertyDescriptor(D, V).enumerable
					})), $.forEach(function(V) {
						g(l, V, D[V])
					})
				}
				return l
			}

			function g(l, h, D) {
				return h = y(h), h in l ? Object.defineProperty(l, h, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[h] = D, l
			}

			function y(l) {
				var h = i(l, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function i(l, h) {
				if (typeof l != "object" || l === null) return l;
				var D = l[Symbol.toPrimitive];
				if (D !== void 0) {
					var $ = D.call(l, h || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(l)
			}
			const d = (0, e.C)("user").get`/user`,
				u = (0, e.C)("user").patch`/user`,
				E = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				o = (0, e.C)("user").post`/user/two_factor_authentication`,
				s = (0, e.C)("user").put`/user/two_factor_authentication`,
				f = (0, e.C)("user").delete`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/email`;

			function C(...l) {
				return a(...l)
			}
			const m = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				v = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(l => c({}, l, {
					body: c({}, l.body, {
						result: {}
					})
				}))),
				N = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				w = (0, e.C)("userDetails").get`/user/details`,
				x = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/Apple/utils.tsx": function(K, _, n) {
			"use strict";
			n.d(_, {
				PP: function() {
					return o
				},
				RJ: function() {
					return d
				},
				tz: function() {
					return s
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				g = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				y = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const i = () => u.test(window.location.pathname) || c.E.has(g.Qq),
				d = () => c.E.get(g.Qq),
				u = /^\/login\/apple(\/)?/,
				t = [u, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				o = () => {
					let f = !1;
					t.forEach(C => {
						if (C.test(window.location.pathname)) {
							f = !0;
							return
						}
					});
					const a = i() && f;
					return a && (0, y.C8)(y.LF.OFF), a
				},
				s = f => {
					f && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let a = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					f && (a = a + `&jwt=${f}`), window.location.href = a
				}
		},
		"../react/common/components/EmptyPage.jsx": function(K, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				g = n.n(c),
				y = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const i = ({
				children: d
			}) => r().createElement(y.xu, {
				height: 411
			}, d);
			i.propTypes = {
				children: g().node
			}, _.Z = i
		},
		"../react/common/components/ModalManager.tsx": function(K, _, n) {
			"use strict";
			n.d(_, {
				ZP: function() {
					return s
				},
				dd: function() {
					return t
				},
				vR: function() {
					return E
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("webpack/sharing/consume/default/react-redux/react-redux");
			const g = f => f.application.modals;
			var y = n("../react/common/actions/modalActions.ts");

			function i() {
				return i = Object.assign ? Object.assign.bind() : function(f) {
					for (var a = 1; a < arguments.length; a++) {
						var C = arguments[a];
						for (var m in C) Object.prototype.hasOwnProperty.call(C, m) && (f[m] = C[m])
					}
					return f
				}, i.apply(this, arguments)
			}
			const d = r().createContext(null);
			class u extends r().Component {
				render() {
					const {
						modals: a,
						closeModal: C
					} = this.props;
					return r().createElement(r().Fragment, null, a.map(({
						ModalComponent: m,
						props: v = {},
						id: N
					}) => {
						const w = () => {
							typeof v.onClose == "function" && v.onClose(), C(m)
						};
						return r().createElement(d.Provider, {
							key: N,
							value: {
								closeModal: w
							}
						}, r().createElement(m, i({}, v, {
							isOpen: !0,
							closeModal: w
						})))
					}))
				}
			}

			function E() {
				const f = r().useContext(d);
				if (!f) throw new Error("useModalContext must be used within a ModalContext");
				return f
			}

			function t() {
				const f = (0, c.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...a) {
						return f(y.openModal(...a))
					}, [f]),
					closeModal: (0, e.useCallback)(function(...a) {
						return f(y.closeModal(...a))
					}, [f])
				}
			}
			var s = (0, c.connect)(f => ({
				modals: g(f)
			}), y)(u)
		},
		"../react/common/components/SAMLSubmit/SAMLSubmit.tsx": function(K, _, n) {
			"use strict";
			n.d(_, {
				Z: function() {
					return v
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				g = n("../react/common/actions/notificationsActions.ts"),
				y = n("../react/app/redux/index.ts"),
				i = n("../react/common/hooks/useGate.ts"),
				d = n("../react/common/selectors/languagePreferenceSelector.ts"),
				u = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				E = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				t = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA5MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYxLjAyODggMzkuNDM4NEw2MS40ODU2IDM3Ljg3MzVDNjIuMDI5NCAzNi4wMTE4IDYxLjgyNzEgMzQuMjkxIDYwLjkxNDIgMzMuMDI2N0M2MC4wNzUzIDMxLjg2MjIgNTguNjc2NiAzMS4xNzY1IDU2Ljk3NzcgMzEuMDk2N0wyNC44MDE1IDMwLjY5MjdDMjQuNzAxNyAzMC42OTA2IDI0LjYwMzkgMzAuNjY1MyAyNC41MTU3IDMwLjYxODhDMjQuNDI3NiAzMC41NzI0IDI0LjM1MTYgMzAuNTA2MSAyNC4yOTQgMzAuNDI1M0MyNC4yMzgyIDMwLjM0MTQgMjQuMjAzIDMwLjI0NTcgMjQuMTkxIDMwLjE0NTlDMjQuMTc5MSAzMC4wNDYxIDI0LjE5MDcgMjkuOTQ0OSAyNC4yMjUxIDI5Ljg1MDNDMjQuMjgwNSAyOS42OTQgMjQuMzgwOCAyOS41NTcyIDI0LjUxMzYgMjkuNDU2N0MyNC42NDY0IDI5LjM1NjIgMjQuODA2IDI5LjI5NjQgMjQuOTcyNyAyOS4yODQ2TDU3LjQ0NzYgMjguODc2M0M2MS4yOTkyIDI4LjcwMDkgNjUuNDY5OSAyNS42MDIyIDY2LjkzMDIgMjEuODIzNUw2OC43ODI4IDE3LjAyNjJDNjguODMyNCAxNi44OTYgNjguODU3IDE2Ljc1NzggNjguODU1MyAxNi42MTg2QzY4Ljg1NTUgMTYuNTQyMyA2OC44NDc3IDE2LjQ2NjIgNjguODMyMSAxNi4zOTE1QzY2LjcyODYgNy4wMTExNyA1OC4yODg3IDAgNDguMTk2MyAwQzM4Ljg5NzEgMCAzMC45OTk1IDUuOTUwMjIgMjguMTcxNyAxNC4yMjA3QzI2LjI1NzggMTIuNzk2NiAyMy44NzE3IDEyLjE0MTkgMjEuNDkxNSAxMi4zODc4QzE3LjAzMDEgMTIuODI3IDEzLjQ0MzEgMTYuMzg3OSAxMy4wMDE2IDIwLjgxMTRDMTIuODg3OSAyMS45MTU5IDEyLjk3MDggMjMuMDMxNyAxMy4yNDY3IDI0LjEwNzhDNS45NTU5NiAyNC4zMTg0IDAuMTExMDg0IDMwLjIzNzcgMC4xMTEwODQgMzcuNTE0MUMwLjExMTc0MiAzOC4xNjM3IDAuMTYwMjEgMzguODEyMyAwLjI1NjEgMzkuNDU0OUMwLjI3Njg2NiAzOS42MDM1IDAuMzUwOTkyIDM5LjczOTYgMC40NjQ4NyAzOS44Mzg0QzAuNTc4NzQ4IDM5LjkzNzIgMC43MjQ3MzkgMzkuOTkxOSAwLjg3NjA0NCAzOS45OTI2TDYwLjI3OSAzOS45OTk3QzYwLjI4NDYgNDAuMDAwMSA2MC4yOTAxIDQwLjAwMDEgNjAuMjk1NyAzOS45OTk3QzYwLjQ2MjMgMzkuOTk2IDYwLjYyMzQgMzkuOTM5NCA2MC43NTUzIDM5LjgzODRDNjAuODg3MiAzOS43Mzc0IDYwLjk4MyAzOS41OTcyIDYxLjAyODggMzkuNDM4NFoiIGZpbGw9IiNGNjgyMUYiLz4KPHBhdGggZD0iTTcxLjc0OTEgMTcuMzc0MUM3MS40NTA0IDE3LjM3NDEgNzEuMTUzMyAxNy4zODE2IDcwLjg1OCAxNy4zOTY0QzcwLjgxMDQgMTcuMzk5OCA3MC43NjM1IDE3LjQxIDcwLjcxODggMTcuNDI2NkM3MC42NDEyIDE3LjQ1MjkgNzAuNTcxMiAxNy40OTc0IDcwLjUxNDcgMTcuNTU2NEM3MC40NTgzIDE3LjYxNTMgNzAuNDE3MSAxNy42ODcgNzAuMzk0NyAxNy43NjUyTDY5LjEyOTQgMjIuMDk3NEM2OC41ODU2IDIzLjk1OTEgNjguNzg3OSAyNS42Nzg0IDY5LjcgMjYuOTQyOEM3MC41Mzk3IDI4LjEwODcgNzEuOTM4MyAyOC43OTMgNzMuNjM3MiAyOC44NzI4TDgwLjQ5NTggMjkuMjgxMUM4MC41OTIzIDI5LjI4NDIgODAuNjg2OSAyOS4zMDk2IDgwLjc3MTggMjkuMzU1M0M4MC44NTY4IDI5LjQwMSA4MC45Mjk4IDI5LjQ2NTYgODAuOTg1MiAyOS41NDQxQzgxLjA0MjEgMjkuNjI4MiA4MS4wNzgzIDI5LjcyNDQgODEuMDkwOSAyOS44MjQ5QzgxLjEwMzUgMjkuOTI1NCA4MS4wOTIxIDMwLjAyNzQgODEuMDU3NyAzMC4xMjI4QzgxLjAwMjMgMzAuMjc4OCA4MC45MDIyIDMwLjQxNTQgODAuNzY5NyAzMC41MTU5QzgwLjYzNzIgMzAuNjE2MyA4MC40NzggMzAuNjc2MyA4MC4zMTE2IDMwLjY4ODVMNzMuMTg0IDMxLjA5NjdDNjkuMzE1IDMxLjI3MzYgNjUuMTQ0MyAzNC4zNzA5IDYzLjY4NTUgMzguMTQ5Nkw2My4xNzA3IDM5LjQ4MzdDNjMuMTQ5MSAzOS41Mzk0IDYzLjE0MTMgMzkuNTk5NCA2My4xNDc3IDM5LjY1ODdDNjMuMTU0MSAzOS43MTgxIDYzLjE3NDcgMzkuNzc1IDYzLjIwNzcgMzkuODI0OUM2My4yNDA3IDM5Ljg3NDkgNjMuMjg1MiAzOS45MTYzIDYzLjMzNzUgMzkuOTQ1OEM2My4zODk4IDM5Ljk3NTMgNjMuNDQ4NCAzOS45OTIxIDYzLjUwODYgMzkuOTk0OEM2My41MTUxIDM5Ljk5NDggNjMuNTIwOSAzOS45OTQ4IDYzLjUyNzQgMzkuOTk0OEg4OC4wNDg5Qzg4LjE5MTQgMzkuOTk1OSA4OC4zMzAzIDM5Ljk1MDcgODguNDQ0NSAzOS44NjYzQzg4LjU1ODcgMzkuNzgxOCA4OC42NDE4IDM5LjY2MjUgODguNjgxMiAzOS41MjY4Qzg5LjExNjIgMzcuOTkgODkuMzM1OCAzNi40MDEyIDg5LjMzMzggMzQuODA1Qzg5LjMzNDUgMjUuMTc4OSA4MS40NjA4IDE3LjM3NDEgNzEuNzQ5MSAxNy4zNzQxWiIgZmlsbD0iI0ZCQUQ0MSIvPgo8L3N2Zz4K",
				o = n("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				s = n("../node_modules/@cloudflare/component-button/es/index.js"),
				a = ({
					idpInitiated: N,
					spInitiated: w,
					title: x,
					text: l,
					error: h,
					buttonText: D,
					loading: $ = !0,
					onContinue: V
				}) => r().createElement(E.ZC, {
					boxShadow: N ? "rgba(0, 0, 0, 0.10) 2px 4px 20px 0px" : void 0,
					margin: "auto",
					width: "fit-content",
					height: w ? "100vh" : "initial",
					alignContent: w ? "center" : "initial",
					"data-test-id": "saml-redirect-loader"
				}, r().createElement(E.ZC, {
					height: "348.5px",
					padding: "30px"
				}, x && r().createElement(E.ZC, {
					textAlign: "center"
				}, r().createElement(o.X6, {
					fontSize: 4
				}, x)), r().createElement(E.ZC, {
					display: "flex",
					justifyContent: "center",
					marginTop: "3rem"
				}, r().createElement(E.ZC, {
					alignContent: "center"
				}, r().createElement(E.Ei, {
					width: "128px",
					src: t
				}))), r().createElement(E.ZC, {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					textAlign: "center",
					maxWidth: h || N ? "450px" : "auto",
					margin: "auto",
					marginTop: "2rem"
				}, N && r().createElement(E.P, null, l), !h && l && w && r().createElement(E.ZC, {
					marginTop: "1.2rem"
				}, r().createElement(o.X6, {
					fontSize: 4
				}, l)), h && r().createElement(E.P, null, h), $ && r().createElement(E.ZC, {
					mt: "2rem"
				}, r().createElement(u.g, {
					size: "2x"
				})), V && r().createElement(E.ZC, {
					marginTop: "1.5rem"
				}, r().createElement(s.zx, {
					type: "primary",
					onClick: V
				}, D))))),
				C = n("../react/utils/translator.tsx"),
				v = ({
					userIsAuthed: N,
					idpInitiated: w = !1,
					spInitiated: x = !1,
					samlAuthBegin: l
				}) => {
					const [h, D] = (0, e.useState)(!1), [$, V] = (0, e.useState)(!1), re = !!(0, i.Z)("rm-18295-saml-salesforce-integration"), {
						t: ne
					} = (0, C.QT)(), [ee, Q] = (0, e.useState)(""), [R, z] = (0, e.useState)(null), te = (0, y.UM)(), U = (0, y.p4)(d.r), ue = (0, e.useRef)(null), X = O => {
						l && l(O), D(O)
					};
					(0, e.useEffect)(() => {
						const O = async H => {
							const J = H ? `/api/v4/sso/saml?id=${H}&locale=${U}` : `/api/v4/sso/saml?locale=${U}`,
								le = await fetch(J);
							try {
								if (le.status === 200) {
									const oe = (await le.json()).result;
									if (oe && oe.assertion_consumer_service_url && oe.saml_response) z({
										acsUrl: oe.assertion_consumer_service_url,
										saml: oe.saml_response
									});
									else throw new Error(`${J} produced unexpected content`)
								} else throw new Error(`${J} produced bad response code:${le.status}`)
							} catch (F) {
								const oe = "Failed completing Service Provider authentication";
								throw Q(oe), te((0, g.vU)(oe)), new Error(oe + `: ${F.message}`)
							}
						};
						if (N && x) {
							const H = sessionStorage.getItem("saml");
							H && (X(!0), sessionStorage.removeItem("saml"), O(H))
						}
						w && O()
					}, [N, w, x]), (0, e.useEffect)(() => {
						!R || ue.current && (ue.current.submit(), V(!0))
					}, [R]);
					const W = h && x || w;
					return re ? r().createElement(r().Fragment, null, r().createElement("form", {
						ref: ue,
						method: "POST",
						action: R == null ? void 0 : R.acsUrl,
						target: "_blank"
					}, r().createElement("input", {
						type: "hidden",
						name: "SAMLResponse",
						value: R == null ? void 0 : R.saml
					})), W && r().createElement(a, {
						spInitiated: x,
						idpInitiated: w,
						text: ne("login.help_center.in_progress.title"),
						error: ee && ne("account.my_activities.sign_in.error"),
						loading: !ee
					}), $ && r().createElement(c.Route, null, r().createElement(c.Redirect, {
						to: {
							pathname: "/",
							state: {
								referrer: window.location.pathname
							}
						}
					}))) : null
				}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				BQ: function() {
					return t
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
					return i
				},
				ZI: function() {
					return y
				},
				if: function() {
					return r
				},
				q6: function() {
					return c
				},
				w_: function() {
					return g
				},
				zl: function() {
					return d
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				r = "time-window",
				c = "date-from",
				g = "date-to",
				y = "from",
				i = "to",
				d = "all",
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
			let E = function(o) {
					return o.ADD_FILTER = "Add filter", o.EDIT_FILTER = "Edit filter", o.REMOVE_FILTER = "Remove filter", o.CHANGE_TIME = "Change time window", o.FEED_PAGE_FORWARD = "Activity feed next page", o.FEED_PAGE_BACKWARD = "Activity feed previous page", o.FEED_EXPAND_EVENT = "Activity feed expand event", o.FEED_CLOSE_EVENT = "Activity feed close event", o.FEED_EXPAND_MATCHES = "Activity feed expand matches", o.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", o.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", o.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", o.DOWNLOAD_FEED = "Activity feed download", o.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', o.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', o.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', o.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', o.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', o
				}({}),
				t = function(o) {
					return o.TIMESERIES = "Timeseries Chart", o.DISTRIBUTION = "Source Distribution Chart", o.TOP_N = "Top N", o.FILTER_BAR = "Filter Bar", o.SCORES_DISTRIBUTIONS = "Scores Distributions", o.INSIGHTS = "Insights", o.RL_HISTOGRAM = "Rate Limit Histogram", o
				}({})
		},
		"../react/common/constants/billing/index.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
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
					return E
				},
				Hw: function() {
					return i
				},
				Ed: function() {
					return y
				},
				bi: function() {
					return r
				},
				Gs: function() {
					return a
				},
				hQ: function() {
					return d
				},
				SP: function() {
					return u
				}
			});
			let e = function(C) {
				return C.page_rules = "page_rules", C.automatic_platform_optimization = "automatic_platform_optimization", C
			}({});
			const r = "page_rules",
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
				y = {
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
				d = {
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
				},
				t = new Set(["AZ", "CT", "DC", "HI", "IA", "IL", "OH", "NY", "PA", "SD", "TX", "WA", "WV"]),
				o = new Map([
					["RU", null],
					["US", t]
				]);
			var s = n("../react/common/constants/billing/tracking.ts"),
				f = n("../react/pages/zoneless-workers/constants.ts");
			const a = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				FP: function() {
					return e
				},
				Nl: function() {
					return y
				},
				SO: function() {
					return c
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
				c = {
					BILLING: "billing"
				},
				g = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				y = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Dk: function() {
					return f
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
					return y
				},
				UM: function() {
					return t
				},
				Xf: function() {
					return E
				},
				Y1: function() {
					return d
				},
				p6: function() {
					return u
				},
				q0: function() {
					return g
				},
				sJ: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const g = "healthy",
				y = "degraded",
				i = "critical",
				d = "unknown",
				u = "not-monitored",
				E = r().from({
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
					f: E.FREE,
					p: E.PRO,
					b: E.BIZ
				},
				s = "marketing-pt",
				f = () => {
					const m = c.Z.get(s);
					if (!!m) return o[m]
				},
				a = ["gov"],
				C = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"]
		},
		"../react/common/constants/index.ts": function(K, _, n) {
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
		"../react/common/hooks/suspenseHelpers.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				bt: function() {
					return d
				},
				nW: function() {
					return y
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const g = "suspenseComplete";

			function y() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(g))
				}, [])
			}

			function i(u) {
				(0, c.OR)(g, () => {
					window.setTimeout(u, 0)
				}, {
					target: window
				})
			}

			function d(...u) {
				const [E, t] = u;
				r().useLayoutEffect(E, t), i(E)
			}
		},
		"../react/common/hooks/useCachedState.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				j: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function g(y, {
				key: i,
				cache: d = c.E
			} = {}) {
				const u = i !== void 0 && d.get(i),
					[E, t] = (0, e.useState)(u || y);
				return [E, s => {
					t(f => (s instanceof Function && (s = s(f)), i !== void 0 && d.set(i, s), s))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(K, _, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function r(c) {
				return (0, e.qf)(c)
			}
			_.Z = r
		},
		"../react/common/hooks/usePrevious.ts": function(K, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e);

			function c(g) {
				const y = (0, e.useRef)(g);
				return (0, e.useEffect)(() => {
					y.current = g
				}, [g]), y.current
			}
			_.Z = c
		},
		"../react/common/middleware/sparrow/errors.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Uh: function() {
					return y
				},
				ez: function() {
					return g
				},
				oV: function() {
					return i
				}
			});

			function e(d, u, E) {
				return u = r(u), u in d ? Object.defineProperty(d, u, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[u] = E, d
			}

			function r(d) {
				var u = c(d, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function c(d, u) {
				if (typeof d != "object" || d === null) return d;
				var E = d[Symbol.toPrimitive];
				if (E !== void 0) {
					var t = E.call(d, u || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(d)
			}
			class g extends Error {
				constructor(u, E) {
					super(E);
					e(this, "eventName", void 0), this.eventName = u, this.name = "SparrowValidationError"
				}
			}
			class y extends g {
				constructor(u) {
					super(u, `Event not allowed: "${u}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class i extends g {
				constructor(u, E) {
					super(u, `Found invalid properties on event: "${u}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = E
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				AC: function() {
					return Je
				},
				Au: function() {
					return ce
				},
				B: function() {
					return Ie
				},
				B3: function() {
					return We
				},
				BG: function() {
					return h
				},
				Bp: function() {
					return it
				},
				D0: function() {
					return N
				},
				DT: function() {
					return oe
				},
				EL: function() {
					return H
				},
				GE: function() {
					return Ce
				},
				Ko: function() {
					return F
				},
				Kx: function() {
					return V
				},
				Le: function() {
					return re
				},
				O4: function() {
					return He
				},
				Ou: function() {
					return X
				},
				Py: function() {
					return et
				},
				QI: function() {
					return Be
				},
				RO: function() {
					return B
				},
				T3: function() {
					return tt
				},
				T8: function() {
					return l
				},
				UX: function() {
					return O
				},
				VP: function() {
					return Me
				},
				Xo: function() {
					return Ve
				},
				Xu: function() {
					return te
				},
				Yi: function() {
					return lt
				},
				Yj: function() {
					return le
				},
				Zu: function() {
					return J
				},
				bC: function() {
					return A
				},
				f8: function() {
					return Q
				},
				hN: function() {
					return $
				},
				hX: function() {
					return ye
				},
				iq: function() {
					return je
				},
				nE: function() {
					return D
				},
				oD: function() {
					return W
				},
				oI: function() {
					return ee
				},
				oJ: function() {
					return Xe
				},
				uF: function() {
					return U
				},
				ut: function() {
					return Ke
				},
				vU: function() {
					return $e
				},
				wQ: function() {
					return ae
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				r = n("../../../../node_modules/lodash/get.js"),
				c = n.n(r),
				g = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				y = n.n(g),
				i = n("../../../../node_modules/reselect/lib/index.js"),
				d = n("../../../../node_modules/moment/moment.js"),
				u = n.n(d),
				E = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				o = n("../react/common/selectors/userSelectors.ts"),
				s = n("../react/common/selectors/entitlementsSelectors.ts"),
				f = n("../react/app/components/DeepLink/selectors.ts");

			function a(j) {
				for (var se = 1; se < arguments.length; se++) {
					var Ee = arguments[se] != null ? Object(arguments[se]) : {},
						be = Object.keys(Ee);
					typeof Object.getOwnPropertySymbols == "function" && be.push.apply(be, Object.getOwnPropertySymbols(Ee).filter(function(we) {
						return Object.getOwnPropertyDescriptor(Ee, we).enumerable
					})), be.forEach(function(we) {
						C(j, we, Ee[we])
					})
				}
				return j
			}

			function C(j, se, Ee) {
				return se = m(se), se in j ? Object.defineProperty(j, se, {
					value: Ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[se] = Ee, j
			}

			function m(j) {
				var se = v(j, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function v(j, se) {
				if (typeof j != "object" || j === null) return j;
				var Ee = j[Symbol.toPrimitive];
				if (Ee !== void 0) {
					var be = Ee.call(j, se || "default");
					if (typeof be != "object") return be;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(j)
			}
			const N = j => {
					const se = U(j);
					return se == null ? void 0 : se.account
				},
				w = j => {
					const se = (0, o.PR)(j);
					if (se) {
						const Ee = se.id;
						return j.accountAccess[Ee] || {}
					}
					return {}
				},
				x = j => j.accountsDetailed,
				l = (0, t.P1)("accountsDetailed", x),
				h = j => j.memberships,
				D = (0, i.P1)((0, t.P1)("memberships", h), f.U, (j, se) => !!se && !!j ? j.filter(Ee => se.includes(Ee.id)) : j),
				$ = j => j.accountFlags && j.accountFlags.data,
				V = j => j.accountFlags,
				re = (j, se, Ee) => {
					const be = $(j);
					return !be || !be[se] ? null : be[se][Ee]
				},
				ne = j => j.accountFlags.isRequesting,
				ee = (j, ...se) => c()(j, ["accountFlagsChanges", "data", ...se]),
				Q = j => j.accountFlagsChanges.isRequesting,
				R = (0, i.P1)($, V, (j, se) => ({
					data: j,
					meta: se
				})),
				z = (j, se, Ee) => !!(isEnterpriseSSEnabledSelector(j) && re(j, se, Ee)),
				te = j => j.membership,
				U = (0, t.P1)("membership", te),
				ue = (0, i.P1)(U, te, (j, se) => ({
					data: j,
					meta: se
				})),
				X = j => {
					const {
						roles: se = []
					} = U(j) || {};
					return Boolean(se.find(Ee => Ee === "Super Administrator - All Privileges" || Ee === "Billing"))
				},
				W = j => {
					const se = w(j),
						Ee = Re.getMemberships(j) ? y().asMutable(Re.getMemberships(j)) : [];
					if (!!Ee) return y().from(Ee.map(be => a({}, be, {
						lastSeen: se[be.account.id] ? se[be.account.id].lastSeen : null
					})).sort((be, we) => be.lastSeen && we.lastSeen ? we.lastSeen - be.lastSeen : 0))
				},
				O = j => j.filteredMemberships,
				H = (0, t.P1)("filteredMemberships", O),
				J = (0, i.P1)(U, j => j == null ? void 0 : j.permissions),
				le = (0, i.P1)(J, j => (0, e.Z)(se => {
					var Ee;
					return (Ee = j == null ? void 0 : j[se]) !== null && Ee !== void 0 ? Ee : {
						read: !1,
						edit: !1
					}
				})),
				F = (0, i.P1)(U, j => j == null ? void 0 : j.policies),
				oe = (j, se, Ee) => {
					let be = Re.getMembership(j);
					if (!be) {
						const we = Re.getMemberships(j);
						if (!we || !se) return !1;
						be = we.find(ze => ze.account.id === se)
					}
					if (!be || !Ee) return !1;
					try {
						return Ee(be.permissions)
					} catch {
						return !1
					}
				},
				ge = j => {
					var se, Ee;
					return (se = (Ee = N(j)) === null || Ee === void 0 ? void 0 : Ee.meta.has_pro_zones) !== null && se !== void 0 ? se : !1
				},
				L = j => {
					var se, Ee;
					return (se = (Ee = N(j)) === null || Ee === void 0 ? void 0 : Ee.meta.has_business_zones) !== null && se !== void 0 ? se : !1
				},
				A = j => L(j) || ge(j),
				M = (j, se) => {
					const Ee = Z(j, se);
					return !!Ee && !!Ee.enabled
				},
				Z = (j, se) => {
					const Ee = Re.getMembership(j),
						be = Ee && Ee.account;
					return be && be.legacy_flags && be.legacy_flags[se]
				},
				ae = j => M(j, "custom_pages"),
				_e = j => !!j && j["webhooks.webhooks.enabled"],
				De = j => re(j, "bots", "enabled"),
				Oe = j => re(j, "billing", "annual_subscriptions_enable"),
				B = j => j ? Boolean(re(j, "ConstellationAI", "v2_ui")) : !1,
				ye = j => j ? Boolean(re(j, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Ie = j => j ? Boolean(re(j, "AIgateway", "enabled")) : !1,
				Fe = j => Z(j, "enterprise_zone_quota"),
				xe = j => {
					const se = Fe(j);
					return !se || !se.available ? -1 : se.available
				},
				je = j => j.accountMembers,
				We = (0, t.P1)("accountMembers", je),
				He = j => j.accountMember && j.accountMember.isRequesting,
				ot = j => j.accountRoles,
				Je = (0, t.P1)("accountRoles", ot),
				et = (j, se) => {
					const Ee = Re.getMemberships(j),
						be = Ee && Ee.find(nt => nt.account.id === se);
					if (be) return be.account.name.replace(" Account", " account");
					const we = Re.getMembership(j),
						ze = we && we.account;
					return ze && ze.id === se ? ze.name : null
				},
				Ke = (j, se) => {
					const Ee = Re.getMemberships(j),
						be = Ee && Ee.find(nt => nt.account.id === se);
					if (be) return be.account.settings.access_approval_expiry;
					const we = Re.getMembership(j),
						ze = we && we.account;
					return ze && ze.id === se ? ze.settings.access_approval_expiry : null
				},
				Ve = (j, se) => {
					const Ee = Ke(j, se);
					return Ee ? u().utc(Ee).isAfter() : !1
				},
				tt = (j, se, Ee) => {
					const be = Ke(j, se);
					let we = be ? u().utc(be) : null;
					return !we || !we.isAfter() ? "" : we && we.year() === 3e3 ? Ee("account.access_approval.card_expiration_forever") : Ee("account.access_approval.card_expiration_text", {
						expiryTimestamp: we.local().format(E.U.DateTime)
					})
				},
				Xe = j => j && j.member && j.member.edit,
				ce = (j, se) => {
					const Ee = Re.getMembership(j),
						be = Ee && Ee.account;
					return be ? be.id !== se : !1
				},
				fe = j => j.dpa,
				P = (0, t.P1)("dpa", fe),
				G = j => j.webhook,
				de = j => j.webhooks,
				Le = (0, t.P1)("webhook", de),
				Me = j => j.accountLegoContract,
				Ue = (0, t.P1)("accountLegoContract", Me),
				Be = j => {
					const se = Ue(j);
					return (se == null ? void 0 : se.lego_state) ? se.lego_state : ""
				},
				ke = j => Be(j) === "signed",
				Ce = j => Me(j).isRequesting,
				$e = j => {
					const se = Ue(j);
					return se && se.subscription_type ? se.subscription_type : ""
				},
				Ye = j => $e(j) !== "",
				Re = {
					getMembership: U,
					getMemberships: D,
					getFilteredMemberships: H,
					getAccountMembers: We,
					getAccountRoles: Je
				},
				it = j => j.accountSingle,
				lt = (0, t.P1)("accountSingle", it)
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				$f: function() {
					return a
				},
				AD: function() {
					return y
				},
				BF: function() {
					return f
				},
				Bs: function() {
					return x
				},
				Ci: function() {
					return oe
				},
				E6: function() {
					return s
				},
				Hq: function() {
					return De
				},
				Ms: function() {
					return D
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
					return w
				},
				a5: function() {
					return Z
				},
				du: function() {
					return u
				},
				ec: function() {
					return z
				},
				f: function() {
					return _e
				},
				hL: function() {
					return M
				},
				ji: function() {
					return ge
				},
				jo: function() {
					return $
				},
				k4: function() {
					return ae
				},
				lI: function() {
					return g
				},
				p1: function() {
					return m
				},
				pK: function() {
					return Oe
				},
				pf: function() {
					return t
				},
				qR: function() {
					return v
				},
				rV: function() {
					return d
				},
				u1: function() {
					return E
				},
				w4: function() {
					return o
				},
				yD: function() {
					return L
				}
			});
			var e = n("../react/utils/url.ts");

			function r(B, ye) {
				return B && B[ye]
			}
			const c = B => !g(B).isRequesting;

			function g(B) {
				return B.entitlements.zone
			}

			function y(B) {
				return g(B).data
			}
			const i = B => {
				var ye, Ie;
				return ((ye = g(B).paginationData) === null || ye === void 0 || (Ie = ye.options) === null || Ie === void 0 ? void 0 : Ie.editedDate) || {}
			};

			function d(B, ye) {
				const Ie = y(B);
				return Ie ? r(Ie, ye) : void 0
			}
			const u = (B, ye) => d(B, ye) === !0;

			function E(B) {
				return B.entitlements.account
			}

			function t(B) {
				return E(B).data
			}
			const o = B => {
				var ye, Ie;
				return ((ye = E(B).paginationData) === null || ye === void 0 || (Ie = ye.options) === null || Ie === void 0 ? void 0 : Ie.editedDate) || {}
			};

			function s(B) {
				return !E(B).isRequesting
			}

			function f(B, ye) {
				const Ie = t(B);
				return Ie ? r(Ie, ye) : void 0
			}

			function a(B, ye) {
				return f(B, ye) === !0
			}

			function C(B, ye) {
				return ye.every(Ie => a(B, Ie))
			}

			function m(B) {
				return a(B, "contract.customer_enabled")
			}

			function v(B) {
				return a(B, "contract.self_service_allowed")
			}

			function N(B) {
				return a(B, "billing.partners_managed")
			}
			const w = B => m(B) && v(B),
				x = B => a(B, "enterprise.ecp_allowed");

			function l(B) {
				return h(B) || a(B, "argo.allow_smart_routing") || a(B, "argo.allow_tiered_caching") || a(B, "rate_limiting.enabled") || a(B, "ctm.enabled") || a(B, "workers.enabled") || a(B, "workers.kv_store.enabled") || a(B, "stream.enabled")
			}
			const h = B => u(B, "argo.allow_smart_routing") || u(B, "argo.allow_tiered_caching"),
				D = B => a(B, "zone.cname_setup_allowed") || a(B, "zone.partial_setup_allowed") || u(B, "zone.partial_setup_allowed"),
				$ = B => a(B, "argo.allow_smart_routing") || u(B, "argo.allow_smart_routing"),
				V = B => a(B, "argo.allow_tiered_caching") || u(B, "argo.allow_tiered_caching"),
				re = B => $(B) || V(B),
				ne = B => a(B, "ctm.enabled"),
				ee = B => {
					const ye = f(B, "ctm.load_balancers");
					return typeof ye == "number" ? ye : 0
				},
				Q = B => {
					const ye = f(B, "ctm.pools");
					return typeof ye == "number" ? ye : 0
				},
				R = B => {
					const ye = f(B, "ctm.origins");
					return typeof ye == "number" ? ye : 0
				},
				z = B => a(B, "workers.enabled"),
				te = B => a(B, "stream.enabled"),
				U = B => {
					const ye = f(B, "access.users_allowed");
					return typeof ye == "number" ? ye : 0
				},
				ue = B => U(B) > 0,
				X = B => {
					const ye = d(B, "dedicated_certificates");
					return typeof ye == "number" ? ye : 0
				},
				W = B => X(B) > 0,
				O = B => {
					const ye = d(B, "rate_limiting.max_rules");
					return typeof ye == "number" ? ye : 0
				},
				H = B => a(B, "rate_limiting.enabled"),
				J = B => {
					const ye = d(B, "page_rules");
					return typeof ye == "number" ? ye : 0
				},
				le = B => J(B) > 0,
				F = B => {
					const ye = f(B, "dns_firewall.max_clusters_allowed");
					return typeof ye == "number" ? ye : 0
				},
				oe = B => F(B) > 0,
				ge = B => u(B, "zone.advanced_certificate_manager") || a(B, "zone.advanced_certificate_manager"),
				L = B => d(B, "authoritative_dns.proxy_record_allowed") === !1 || f(B, "authoritative_dns.proxy_record_allowed") === !1,
				A = B => a(B, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				M = B => d(B, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				Z = B => {
					const ye = d(B, "authoritative_dns.min_record_ttl_allowed");
					return typeof ye == "number" && ye > 1 ? ye : 60
				},
				ae = B => a(B, "foundation_dns.advanced_nameservers_allowed") || u(B, "foundation_dns.advanced_nameservers_allowed"),
				_e = (B, ye) => ((0, e.el)(window.location.pathname) ? d : f)(B, ye),
				De = B => a(B, "authoritative_dns.multi_provider_allowed") || u(B, "authoritative_dns.multi_provider_allowed"),
				Oe = B => a(B, "secondary_dns.secondary_overrides") || u(B, "secondary_dns.secondary_overrides")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				r: function() {
					return g
				},
				v: function() {
					return y
				}
			});
			var e = n("../react/utils/i18n.ts"),
				r = n("../../../common/intl/intl-types/src/index.ts"),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const g = i => {
				const d = i.userCommPreferences.data;
				if (d == null ? void 0 : d["language-locale"]) return c.Z.set(e.ly, d["language-locale"]), d["language-locale"];
				{
					c.Z.has(e.ly) || c.Z.set(e.ly, e.ZW);
					const u = c.Z.get(e.ly);
					return y(u) ? u : e.ZW
				}
			};

			function y(i) {
				const d = Object.keys(r.Q).find(u => r.Q[u] === i);
				return !!i && typeof i == "string" && d != null && (0, e.S8)(!1, d)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				$8: function() {
					return y
				},
				BG: function() {
					return E
				},
				GP: function() {
					return a
				},
				GU: function() {
					return x
				},
				PR: function() {
					return c
				},
				h$: function() {
					return v
				},
				h8: function() {
					return t
				},
				kk: function() {
					return m
				},
				l8: function() {
					return d
				},
				mV: function() {
					return C
				},
				vW: function() {
					return i
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const r = l => l.user,
				c = (0, e.P1)("user", r),
				g = l => {
					var h;
					return (h = c(l)) === null || h === void 0 ? void 0 : h.email.endsWith("@cloudflare.com")
				},
				y = l => {
					var h;
					return !!((h = c(l)) === null || h === void 0 ? void 0 : h.id)
				},
				i = l => {
					const h = c(l);
					if (!!h) return h.first_name && h.last_name ? `${h.first_name} ${h.last_name}` : h.email
				},
				d = l => {
					const h = c(l);
					return h && h.has_enterprise_zones
				},
				u = l => l.userCommPreferences,
				E = (0, e.P1)("userCommPreferences", u),
				t = l => {
					const h = c(l);
					return h && h.email_verified
				},
				o = l => {
					const h = E(l);
					return h && h.preferences.marketing_communication
				},
				s = l => l.userDetails,
				f = (0, e.P1)("userDetails", s),
				a = l => {
					const h = f(l);
					return h && h["2FA-RECOVERY"] === "scheduled"
				},
				C = l => {
					const h = f(l);
					return h && h["2FA-RECOVERY"] === "interrupted"
				},
				m = l => {
					const h = f(l);
					return h == null ? void 0 : h["NEW-USER-EMAIL"]
				},
				v = l => l.gates.assignments,
				N = (l, h) => l && l[h];

			function w(l, h) {
				const D = v(l);
				return D ? N(D, h) : void 0
			}
			const x = (l, h) => w(l, h) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				$4: function() {
					return D
				},
				$t: function() {
					return Ve
				},
				A4: function() {
					return m
				},
				Cu: function() {
					return v
				},
				DQ: function() {
					return ae
				},
				Ej: function() {
					return V
				},
				FH: function() {
					return w
				},
				ID: function() {
					return H
				},
				Ko: function() {
					return Fe
				},
				Le: function() {
					return Oe
				},
				Ly: function() {
					return F
				},
				M3: function() {
					return ot
				},
				N8: function() {
					return He
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
					return re
				},
				RO: function() {
					return W
				},
				SX: function() {
					return M
				},
				Tr: function() {
					return Ie
				},
				U: function() {
					return N
				},
				Ug: function() {
					return l
				},
				V6: function() {
					return Je
				},
				WR: function() {
					return fe
				},
				Xg: function() {
					return C
				},
				ZB: function() {
					return De
				},
				cU: function() {
					return xe
				},
				cg: function() {
					return Z
				},
				d2: function() {
					return te
				},
				jN: function() {
					return ee
				},
				jg: function() {
					return ge
				},
				kC: function() {
					return $
				},
				kf: function() {
					return et
				},
				ko: function() {
					return X
				},
				mK: function() {
					return tt
				},
				nA: function() {
					return a
				},
				oY: function() {
					return ne
				},
				qM: function() {
					return B
				},
				rq: function() {
					return L
				},
				tS: function() {
					return h
				},
				tU: function() {
					return R
				},
				vB: function() {
					return Xe
				},
				vM: function() {
					return Q
				},
				wH: function() {
					return x
				},
				wn: function() {
					return _e
				},
				xU: function() {
					return z
				},
				xw: function() {
					return ye
				},
				z5: function() {
					return O
				},
				zO: function() {
					return je
				},
				zW: function() {
					return Ke
				},
				zh: function() {
					return U
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				r = n("../react/app/redux/normalizer.js"),
				c = n("../../../../node_modules/lodash/get.js"),
				g = n.n(c),
				y = n("../../../../node_modules/moment/moment.js"),
				i = n.n(y),
				d = n("../react/common/constants/billing/index.ts");

			function u(P) {
				for (var G = 1; G < arguments.length; G++) {
					var de = arguments[G] != null ? Object(arguments[G]) : {},
						Le = Object.keys(de);
					typeof Object.getOwnPropertySymbols == "function" && Le.push.apply(Le, Object.getOwnPropertySymbols(de).filter(function(Me) {
						return Object.getOwnPropertyDescriptor(de, Me).enumerable
					})), Le.forEach(function(Me) {
						E(P, Me, de[Me])
					})
				}
				return P
			}

			function E(P, G, de) {
				return G = t(G), G in P ? Object.defineProperty(P, G, {
					value: de,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[G] = de, P
			}

			function t(P) {
				var G = o(P, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function o(P, G) {
				if (typeof P != "object" || P === null) return P;
				var de = P[Symbol.toPrimitive];
				if (de !== void 0) {
					var Le = de.call(P, G || "default");
					if (typeof Le != "object") return Le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(P)
			}
			const s = (0, r.P1)("zone", P => P.zone),
				f = P => {
					var G;
					return (G = P.zoneVersioning) === null || G === void 0 ? void 0 : G.zoneVersionSelector
				},
				a = (0, e.P1)(s, f, (P, G) => {
					var de, Le, Me;
					let Ue;
					if (Array.isArray(P) && P.length === 1 ? Ue = P[0] : P && !Array.isArray(P) && (Ue = P), !Ue) return;
					const Be = !!(G == null ? void 0 : G.enabled);
					return u({}, Ue, Ue.name && {
						name: Be ? G.rootZoneName : Ue.name
					}, {
						versioning: {
							enabled: Be,
							isRoot: !((de = Ue.name) === null || de === void 0 ? void 0 : de.endsWith(".config.cfdata.org")),
							version: Be ? G.selectedVersion : 0,
							rootZoneId: Be ? G.rootZoneId : (Le = (Me = Ue) === null || Me === void 0 ? void 0 : Me.id) !== null && Le !== void 0 ? Le : ""
						}
					})
				}),
				C = P => P.zone,
				m = (0, e.P1)(a, C, (P, G) => ({
					data: P,
					meta: G
				})),
				v = P => {
					var G, de;
					return (G = (de = a(P)) === null || de === void 0 ? void 0 : de.id) !== null && G !== void 0 ? G : ""
				},
				N = P => P.zones,
				w = P => P.zonesRoot,
				x = P => P.zonesAccount,
				l = (0, r.P1)("zones", N),
				h = (0, r.P1)("zonesRoot", w),
				D = (0, r.P1)("zonesAccount", x);

			function $(P) {
				const G = a(P);
				return G ? G.created_on : null
			}

			function V(P, G, de) {
				const Le = $(P);
				if (!Le) return;
				const Me = i().duration(G, de),
					Ue = new Date(Le),
					Be = new Date(new Date().getTime() - Me.asMilliseconds());
				return Ue.getTime() > Be.getTime()
			}

			function re(P) {
				const G = a(P);
				return G ? G.status : null
			}

			function ne(P) {
				const G = a(P);
				return G ? G.type : null
			}

			function ee(P) {
				return P.plan_pending ? P.plan_pending : P.plan
			}

			function Q(P) {
				const G = a(P);
				if (!G) return;
				const de = ee(G);
				return de && de.legacy_id
			}

			function R(P, G) {
				const de = ee(P);
				return !!de && d.Gs.indexOf(de.legacy_id) >= d.Gs.indexOf(G)
			}

			function z(P) {
				return !!P && P.status === "initializing"
			}

			function te(P) {
				return !!P && P.status === "pending"
			}

			function U(P) {
				return !!P && P.status === "active"
			}

			function ue(P, G) {
				if (!P) return !1;
				const de = ee(P);
				return !!de && de.legacy_id === G
			}

			function X(P) {
				return ue(P, "enterprise")
			}
			const W = P => X(a(P));

			function O(P) {
				return ue(P, "business")
			}
			const H = P => O(a(P));

			function J(P) {
				return ue(P, "pro")
			}

			function le(P) {
				return ue(P, "free")
			}

			function F(P) {
				return !X(P)
			}

			function oe(P) {
				return P && P.owner
			}

			function ge(P, G) {
				const de = oe(G);
				return !!de && de.type === "user" && de.id === P.id
			}

			function L(P) {
				const G = a(P);
				return !!G && G.type === "partial"
			}

			function A(P) {
				const G = a(P);
				return !!G && G.type === "secondary"
			}

			function M(P) {
				const G = a(P);
				return G && L(P) && G.host
			}
			const Z = P => {
					var G;
					const de = a(P);
					return !!(de == null ? void 0 : de.host) && !!((G = de.plan) === null || G === void 0 ? void 0 : G.externally_managed)
				},
				ae = P => {
					const G = l(P);
					return G && G.some(X)
				},
				_e = (P, G) => {
					const de = a(P);
					return de && de.betas ? de.betas.includes(G) : !1
				},
				De = (P, ...G) => g()(P, ["zoneFlags", "data", ...G]),
				Oe = (P, ...G) => g()(P, ["accountFlags", "data", ...G]),
				B = P => P.accountFlags.isRequesting,
				ye = P => P.zoneFlags.isRequesting,
				Ie = (P, ...G) => g()(P, ["zoneFlagsChanges", "data", ...G]),
				Fe = P => P.zoneFlagsChanges.isRequesting,
				xe = P => P.zoneFlags && P.zoneFlags.data,
				je = P => P.zoneFlags,
				We = (0, e.P1)(xe, je, (P, G) => ({
					data: P,
					meta: G
				})),
				He = (0, r.P1)("abuseUrls", P => P.overview.abuseUrls),
				ot = P => {
					const G = a(P);
					return G ? `/${G.account.id}/${G.name}` : null
				},
				Je = P => P.zoneMarketingCampaigns,
				et = P => P.overview.zoneBlocks.data,
				Ke = P => P.overview.zoneBlocks.isRequesting,
				Ve = P => P.overview.zoneBlocks.hasData,
				tt = P => {
					var G, de;
					return (P == null || (G = P.overview.zoneBlocks) === null || G === void 0 || (de = G.paginationData) === null || de === void 0 ? void 0 : de.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				Xe = P => P.overview.zoneBlocksReview.isRequesting,
				ce = P => P.overview.zoneHold,
				fe = (0, r.P1)("zoneHold", ce)
		},
		"../react/common/utils/formatDate.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			_.Z = (r, c, g = !1) => (0, e.p6)(r, c, g)
		},
		"../react/common/utils/isGuards.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Q$: function() {
					return c
				},
				t: function() {
					return i
				},
				v5: function() {
					return g
				},
				zE: function() {
					return y
				}
			});
			var e = n("../react/common/constants/index.ts"),
				r = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const c = d => d ? ["page", "per_page", "count", "total_count"].every(E => E in d && d[E]) : !1,
				g = (d = "") => e.Dy.includes(d.toLowerCase()),
				y = d => d !== null && typeof d == "object" && "name" in d && "size" in d && "type" in d && typeof d.slice == "function",
				i = d => (0, r.Z)(d)
		},
		"../react/common/validators/index.js": function(K, _, n) {
			"use strict";
			n.d(_, {
				K2: function() {
					return r
				},
				Lb: function() {
					return c
				},
				XI: function() {
					return g
				},
				jk: function() {
					return d
				},
				wb: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const r = u => /^https?:\/\/(.*)/.test(u),
				c = u => e.default.hostname.test(u),
				g = u => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(u),
				y = u => /^[!-~]+$/.test(u),
				i = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				d = u => i.test(u)
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Jz: function() {
					return E
				},
				OK: function() {
					return y
				},
				_Y: function() {
					return d
				},
				fD: function() {
					return o
				},
				h_: function() {
					return u
				},
				w6: function() {
					return s
				},
				yc: function() {
					return t
				}
			});

			function e(a) {
				for (var C = 1; C < arguments.length; C++) {
					var m = arguments[C] != null ? Object(arguments[C]) : {},
						v = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(m).filter(function(N) {
						return Object.getOwnPropertyDescriptor(m, N).enumerable
					})), v.forEach(function(N) {
						r(a, N, m[N])
					})
				}
				return a
			}

			function r(a, C, m) {
				return C = c(C), C in a ? Object.defineProperty(a, C, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[C] = m, a
			}

			function c(a) {
				var C = g(a, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function g(a, C) {
				if (typeof a != "object" || a === null) return a;
				var m = a[Symbol.toPrimitive];
				if (m !== void 0) {
					var v = m.call(a, C || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(a)
			}
			let y = function(a) {
					return a.Sending = "sending", a.Success = "success", a.Failed = "failed", a.Latent = "latent", a
				}({}),
				i = function(a) {
					return a[a.Success = 200] = "Success", a[a.BadRequest = 400] = "BadRequest", a
				}({});
			const d = {
					status: y.Latent,
					statusCode: void 0
				},
				u = {
					status: y.Sending
				},
				E = {
					status: y.Success,
					statusCode: i.Success
				},
				t = {
					status: y.Failed,
					statusCode: i.BadRequest
				},
				o = {
					token: null,
					zone: null,
					isTokenValid: !1,
					user: null
				},
				s = {
					appsList: e({
						value: []
					}, d),
					installsList: e({
						value: []
					}, d),
					categoriesList: e({
						value: []
					}, d),
					recommendedAppsList: e({
						value: []
					}, d),
					metadata: e({
						value: null
					}, d),
					app: e({
						value: null
					}, d),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, d)
				},
				f = {}
		},
		"../react/pages/apps/marketplace/config/sagas.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				y: function() {
					return ge
				}
			});
			var e = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				r = n("../../../../node_modules/lodash-es/get.js"),
				c = n("../react/pages/apps/marketplace/state/auth.reducer.ts"),
				g = n("../react/pages/apps/marketplace/requests/Requester.ts");
			const y = () => g.L.fetchJSON("/user/~current"),
				i = () => g.L.request("GET", "/healthcheck");
			var d = n("../react/pages/apps/marketplace/libraries/auth.ts"),
				u = n("../react/pages/apps/marketplace/types.ts");

			function* E() {
				const A = (0, d.aP)();
				if (!A) throw new d.C6;
				try {
					const M = (0, d.he)(A);
					if (M && (0, d.pw)(M)) throw new d.C6;
					yield(0, e.gz)(c.Nw.setToken({
						token: A,
						parsed: M
					})), yield(0, e.RE)([localStorage, "setItem"], u.m.CloudflareAppsToken, A), yield(0, e.RE)([g.L, "setAuthHeader"], A)
				} catch {
					throw new d.C6
				}
			}

			function* t() {
				const {
					status: A
				} = yield(0, e.RE)(i);
				if (A === 401) throw new d.xT;
				if (A === 403) throw new d.k7;
				yield(0, e.gz)(c.Nw.setTokenValid(!0))
			}

			function* o() {
				try {
					yield(0, e.gz)(c.Nw.getCurrentUserSending());
					const A = yield(0, e.RE)(y);
					return yield(0, e.gz)(A.id ? c.Nw.getCurrentUserSuccess(A) : c.Nw.getCurrentUserFailed()), A
				} catch {
					throw yield(0, e.gz)(c.Nw.getCurrentUserFailed())
				}
			}

			function* s() {
				yield(0, e.ib)(c.U4.CurrentUserSaga, o)
			}

			function* f(A) {
				try {
					yield(0, e.RE)(E), yield(0, e.RE)(t)
				} catch (M) {
					if (yield(0, e.RE)([localStorage, "removeItem"], u.m.CloudflareAppsToken), ![d.Vm.RedirectToLogin, d.Vm.BadToken].includes(M.name)) return yield(0, e.gz)(c.Nw.initSaga(A.zoneId));
					try {
						return (0, d.rf)()
					} catch {
						throw new d.Sf
					}
				}
				yield(0, e.gz)(c.Nw.setZone(A.zoneId)), yield(0, e.gz)(c.Nw.getCurrentUserSaga()), yield(0, e.RE)([localStorage, "removeItem"], u.m.CloudflareAppsAuthAttempts)
			}

			function* a() {
				yield(0, e.ib)(c.U4.InitSaga, f)
			}

			function* C() {
				for (;;) {
					const A = yield(0, e.qn)(c.XO.SetCurrentUser), M = yield(0, e.RE)([localStorage, "getItem"], u.m.CloudflareAppsToken);
					if (M) {
						const Z = (0, d.he)(M),
							ae = (0, r.Z)(Z, "sub"),
							_e = (0, r.Z)(A, `meta.entities.user.${A.payload}.email`);
						if (_e && _e !== ae) return yield(0, e.RE)([localStorage, "removeItem"], u.m.CloudflareAppsToken)
					}
				}
			}
			var m = [a(), C(), s()],
				v = n("../react/pages/apps/marketplace/requests/common.ts"),
				N = n("../react/pages/apps/marketplace/libraries/constants.ts");
			const w = (A, M) => A.apps ? A.apps[M] : A[M],
				x = A => w(A, "authState"),
				l = A => w(A, "commonState"),
				h = A => w(A, "homePageState"),
				D = A => x(A).zone;
			var $ = n("../react/pages/apps/marketplace/libraries/helpers.ts"),
				V = n("../react/pages/apps/marketplace/state/common.reducer.ts");

			function re(A) {
				for (var M = 1; M < arguments.length; M++) {
					var Z = arguments[M] != null ? Object(arguments[M]) : {},
						ae = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(Z).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(Z, _e).enumerable
					})), ae.forEach(function(_e) {
						ne(A, _e, Z[_e])
					})
				}
				return A
			}

			function ne(A, M, Z) {
				return M = ee(M), M in A ? Object.defineProperty(A, M, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[M] = Z, A
			}

			function ee(A) {
				var M = Q(A, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function Q(A, M) {
				if (typeof A != "object" || A === null) return A;
				var Z = A[Symbol.toPrimitive];
				if (Z !== void 0) {
					var ae = Z.call(A, M || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(A)
			}

			function* R(A, M, Z) {
				const ae = {
					categories: (Z.markets || ["none"]).map(_e => {
						const De = N.XZ.find(Oe => Oe.key === _e);
						return !_e || !De ? N.iK.categories : De.categories
					}).reduce((_e, De) => _e.concat(De), []).filter((_e, De, Oe) => Oe.indexOf(_e) === De).join(","),
					excludeApps: M.map(_e => _e.appId).join(",")
				};
				return yield(0, e.RE)(v.RX, V.Nw, v.Jb.recommendedApps.name, v.Jb.recommendedApps.url(ae), $.Ux.transformers.transformAppIdsToApps.bind(null, A))
			}

			function* z() {
				for (;;) {
					const {
						zoneId: A,
						currentResources: M
					} = yield(0, e.qn)(V.U4.GetHomePageAssetsSaga), {
						appsList: Z,
						installsList: ae,
						metadata: _e
					} = yield(0, e.$6)(re({}, M.appsList.status === "latent" ? {
						appsList: (0, e.RE)(v.RX, V.Nw, v.Jb.apps.name, v.Jb.apps.url())
					} : {
						appsList: M.appsList.value
					}, M.categoriesList.status === "latent" ? {
						categoriesList: (0, e.RE)(v.RX, V.Nw, v.Jb.categories.name, v.Jb.categories.url({
							includeInvisible: !0
						}))
					} : {
						categoriesList: M.categoriesList.value
					}, M.installsList.status === "latent" ? {
						installsList: (0, e.RE)(v.RX, V.Nw, v.Jb.installs.default.name, v.Jb.installs.default.url(A))
					} : {
						installsList: M.installsList.value
					}, M.metadata.status === "latent" ? {
						metadata: (0, e.RE)(v.RX, V.Nw, v.Jb.metadata.get.name, v.Jb.metadata.get.url(A))
					} : {
						metadata: M.metadata.value
					}));
					yield(0, e.gz)(V.Nw.getRecommendedAppsSaga(Z, ae, _e))
				}
			}

			function* te() {
				for (;;) {
					const {
						userId: A,
						zoneId: M
					} = yield(0, e.qn)(V.U4.GetDevelopedAppsAssetsSaga);
					yield(0, e.RE)(v.RX, V.Nw, v.Jb.installs.default.name, v.Jb.installs.default.url(M)), yield(0, e.RE)(v.RX, V.Nw, v.Jb.developedApps.name, v.Jb.developedApps.url(A))
				}
			}

			function* U() {
				for (;;) {
					const {
						appIdentifier: A,
						zoneId: M,
						version: Z
					} = yield(0, e.qn)(V.U4.GetAppInfoAssetsSaga), ae = yield(0, e.RE)(v.RX, V.Nw, v.Jb.installs.default.name, v.Jb.installs.default.url(M));
					yield(0, e.RE)(v.RX, V.Nw, v.Jb.app.name, v.Jb.app.url(A, Z ? {
						version: Z
					} : {}), $.Ux.transformers.addCurrentSiteInstall.bind(null, ae))
				}
			}

			function* ue() {
				for (;;) {
					const {
						zoneId: A
					} = yield(0, e.qn)(V.U4.GetInstalledAppsAssetsSaga), Z = (yield(0, e.RE)(v.RX, V.Nw, v.Jb.installs.default.name, v.Jb.installs.default.url(A))).filter(Oe => Oe.app.installable && Oe.versionTag !== Oe.app.infoVersion), ae = Z.reduce((Oe, B) => (Oe[B.app.alias] = (0, e.RE)(v.RX, V.Nw, v.Jb.app.name, v.Jb.app.url(B.app.alias || B.appId), $.Ux.transformers.addAppVersionInfo.bind(null, B)), Oe), {}), _e = yield(0, e.$6)(ae), De = Z.map(Oe => ({
						install: Oe,
						app: _e[Oe.app.alias]
					}));
					yield(0, e.gz)(V.Nw.setUpdatableInstalls(De))
				}
			}

			function* X() {
				for (;;) return yield(0, e.qn)(V.U4.GetAppsSaga), yield(0, e.RE)(v.RX, V.Nw, v.Jb.apps.name, v.Jb.apps.url())
			}

			function* W() {
				for (;;) {
					const {
						queryParams: A
					} = yield(0, e.qn)(V.U4.GetCategoriesSaga);
					return yield(0, e.RE)(v.RX, V.Nw, v.Jb.categories.name, v.Jb.categories.url(A))
				}
			}

			function* O() {
				for (;;) {
					const {
						zoneId: A
					} = yield(0, e.qn)(V.U4.GetInstallsSaga);
					return yield(0, e.RE)(v.RX, V.Nw, v.Jb.installs.default.name, v.Jb.installs.default.url(A))
				}
			}

			function* H() {
				for (;;) {
					const {
						zoneId: A
					} = yield(0, e.qn)(V.U4.GetMetadataSaga);
					return yield(0, e.RE)(v.RX, V.Nw, v.Jb.metadata.get.name, v.Jb.metadata.get.url(A))
				}
			}

			function* J() {
				for (;;) {
					const {
						appsList: A,
						installsList: M,
						metadata: Z
					} = yield(0, e.qn)(V.U4.GetRecommendedAppsSaga);
					yield(0, e.RE)(R, A, M, Z)
				}
			}

			function* le() {
				for (;;) {
					const {
						zoneId: A,
						data: M
					} = yield(0, e.qn)(V.U4.PostMetadataSaga);
					try {
						const {
							appsList: Z,
							installsList: ae,
							metadata: _e
						} = yield(0, e.Ys)(l), De = re({}, _e.value, {
							id: A,
							markets: [M]
						});
						yield(0, e.RE)(v.JX, V.Nw, v.Jb.metadata.post.name, v.Jb.metadata.post.url(A), De), yield(0, e.RE)(R, Z.value, ae.value, De)
					} catch {}
				}
			}

			function* F() {
				for (;;) yield(0, e.qn)(V.dg.CloudflareZoneChangeStart), yield(0, e.gz)(V.Nw.zoneChangedSaga())
			}
			var oe = [z(), ue(), te(), U(), X(), O(), W(), H(), le(), J(), F()];
			const ge = [...m, ...oe];

			function* L() {
				yield all(ge)
			}
		},
		"../react/pages/apps/marketplace/libraries/auth.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				C6: function() {
					return f
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
					return s
				},
				pw: function() {
					return m
				},
				rf: function() {
					return x
				},
				xT: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/lodash-es/toNumber.js"),
				r = n("../../../../node_modules/lodash-es/isInteger.js"),
				c = n("../../../../node_modules/lodash-es/toString.js"),
				g = n("../../../../node_modules/query-string/query-string.js"),
				y = n.n(g),
				i = n("../../../../node_modules/jwt-decode/build/jwt-decode.esm.js"),
				d = n("../react/pages/apps/marketplace/types.ts"),
				u = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				E = n.n(u);
			let t = function(h) {
				return h.RedirectToLogin = "RedirectToLogin", h.ExpiredToken = "ExpiredToken", h.BadToken = "BadToken", h.Init = "Init", h
			}({});
			class o extends Error {
				constructor() {
					super();
					this.name = t.Init
				}
			}
			class s extends Error {
				constructor() {
					super();
					this.name = t.BadToken
				}
			}
			class f extends Error {
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
						const D = (0, i.Z)(h);
						if (!D) throw new Error("Invalid JWT");
						return D
					} catch (D) {
						throw D
					}
				},
				m = h => {
					const D = new Date(h.exp * 1e3);
					return new Date > D
				},
				v = (h, D = window.document.location.toString()) => {
					(0, u.get)(`login?redirect_uri=${encodeURIComponent(D)}`).then($ => {
						var V, re;
						const ne = (V = $.body) === null || V === void 0 || (re = V.result) === null || re === void 0 ? void 0 : re.redirect_uri;
						ne && (window.location.href = ne)
					}).catch($ => {
						console.log("Failed login ", $)
					})
				},
				N = () => {
					let h = g.parse(location.search);
					const D = localStorage.getItem(d.m.CloudflareAppsToken) || h.token;
					if (D) {
						delete h.token, delete h.from_login;
						const $ = g.stringify(h);
						window.history.replaceState({}, document.title, `${window.location.pathname}${$?`?${$}`:""}`)
					}
					return D
				},
				w = 2,
				x = h => {
					if (l() > w) throw new Error("redirect attempt limit reached");
					return v("login", h)
				},
				l = () => {
					let h = (0, e.Z)(localStorage.getItem(d.m.CloudflareAppsAuthAttempts));
					(0, r.Z)(h) || (h = 0, localStorage.setItem(d.m.CloudflareAppsAuthAttempts, (0, c.Z)(h)));
					const D = h + 1;
					return localStorage.setItem(d.m.CloudflareAppsAuthAttempts, (0, c.Z)(D)), D > w && localStorage.removeItem(d.m.CloudflareAppsAuthAttempts), D
				}
		},
		"../react/pages/apps/marketplace/libraries/constants.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				XZ: function() {
					return i
				},
				iK: function() {
					return y
				},
				j9: function() {
					return c
				}
			});
			var e = n("../react/pages/apps/marketplace/marketplace.translations.ts");
			const r = /local.cloudflareapps.com/,
				c = /staging.cloudflare.com/,
				g = 900,
				y = {
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
				}, y],
				d = [{
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
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Ux: function() {
					return o
				},
				cz: function() {
					return f
				},
				im: function() {
					return d
				},
				pG: function() {
					return s
				},
				t$: function() {
					return a
				}
			});
			var e = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function r(m) {
				for (var v = 1; v < arguments.length; v++) {
					var N = arguments[v] != null ? Object(arguments[v]) : {},
						w = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(N).filter(function(x) {
						return Object.getOwnPropertyDescriptor(N, x).enumerable
					})), w.forEach(function(x) {
						c(m, x, N[x])
					})
				}
				return m
			}

			function c(m, v, N) {
				return v = g(v), v in m ? Object.defineProperty(m, v, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[v] = N, m
			}

			function g(m) {
				var v = y(m, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function y(m, v) {
				if (typeof m != "object" || m === null) return m;
				var N = m[Symbol.toPrimitive];
				if (N !== void 0) {
					var w = N.call(m, v || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(m)
			}
			const i = m => m.test(window.location.hostname),
				d = () => i(e.j9),
				u = () => i(MARKETPLACE_LOCAL_URL_REGEXP),
				E = (m, v) => {
					const N = random(0, 1) ? -1 : 1;
					return m.points === v.points || m.points >= APP_POINTS_THRESHOLD && v.points >= APP_POINTS_THRESHOLD ? N : m.points < 0 || v.points < 0 || m.points >= APP_POINTS_THRESHOLD || v.points >= APP_POINTS_THRESHOLD ? v.points - m.points : N
				},
				t = (m, v, N) => {
					const w = get(v, N),
						x = get(m, N);
					return w && !isEqual(w, x)
				},
				o = {
					transformers: {
						transformAppIdsToApps: (m, v) => v.map(N => m.find(w => w.id === N)),
						addAppVersionInfo: (m, v) => r({}, v, {
							currentVersion: v.versions.find(N => N.tag === m.versionTag),
							latestVersion: v.versions.find(N => N.tag === v.infoVersion)
						}),
						addCurrentSiteInstall: (m, v) => r({}, v, {
							currentSiteInstall: m.find(N => N.appId === v.id)
						})
					}
				},
				s = (m, v, N) => r({}, m, v, N ? {
					value: N
				} : {}),
				f = m => m.map(v => v.status),
				a = m => m.apps ? m.apps : m,
				C = m => {
					let v = ["by-cloudflare"];
					return m.filter(N => !v.includes(N.id) && N.visible).sort((N, w) => N.points < w.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(K, _, n) {
			"use strict";
			n.r(_), n.d(_, {
				categorySlugTranslationKey: function() {
					return y
				},
				keys: function() {
					return r
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
				keys: r,
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

			function y(i) {
				const d = i.replace(/-/g, "_");
				return Object.keys(r).includes(d) ? d : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				L: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/lodash-es/defaults.js"),
				r = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function c(s) {
				for (var f = 1; f < arguments.length; f++) {
					var a = arguments[f] != null ? Object(arguments[f]) : {},
						C = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(a).filter(function(m) {
						return Object.getOwnPropertyDescriptor(a, m).enumerable
					})), C.forEach(function(m) {
						i(s, m, a[m])
					})
				}
				return s
			}

			function g(s, f) {
				if (s == null) return {};
				var a = y(s, f),
					C, m;
				if (Object.getOwnPropertySymbols) {
					var v = Object.getOwnPropertySymbols(s);
					for (m = 0; m < v.length; m++) C = v[m], !(f.indexOf(C) >= 0) && (!Object.prototype.propertyIsEnumerable.call(s, C) || (a[C] = s[C]))
				}
				return a
			}

			function y(s, f) {
				if (s == null) return {};
				var a = {},
					C = Object.keys(s),
					m, v;
				for (v = 0; v < C.length; v++) m = C[v], !(f.indexOf(m) >= 0) && (a[m] = s[m]);
				return a
			}

			function i(s, f, a) {
				return f = d(f), f in s ? Object.defineProperty(s, f, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[f] = a, s
			}

			function d(s) {
				var f = u(s, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function u(s, f) {
				if (typeof s != "object" || s === null) return s;
				var a = s[Symbol.toPrimitive];
				if (a !== void 0) {
					var C = a.call(s, f || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(s)
			}
			const E = n("../../../../node_modules/url-join/lib/url-join.js");
			class t {
				constructor(f) {
					i(this, "token", void 0), i(this, "options", void 0), i(this, "setAuthHeader", a => {
						this.token = a
					}), this.token = "", this.options = (0, e.Z)(f, t.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(f = "GET", a, C = {}) {
					const {
						body: m
					} = C, v = g(C, ["body"]);
					return fetch(E(this.options.baseUrl, a), c({
						method: f
					}, v, m ? {
						body: JSON.stringify(m)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(c({
							Accept: "application/json, text/plain, */*"
						}, C.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(f, a = {}) {
					const C = await this.request("GET", f, a);
					return this.parseJSONResponse(C)
				}
				async postJSON(f, a = {}) {
					const C = await this.request("POST", f, c({}, a, {
						headers: c({}, a.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(C)
				}
				parseJSONResponse(f) {
					return f.json()
				}
			}
			i(t, "defaults", {
				baseUrl: (0, r.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const o = new t
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				RX: function() {
					return t
				},
				JX: function() {
					return o
				},
				Jb: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/lodash-es/upperFirst.js"),
				r = n("../../../../node_modules/lodash-es/isEmpty.js"),
				c = n("../../../../node_modules/query-string/query-string.js"),
				g = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				y = n("../react/pages/apps/marketplace/requests/Requester.ts");

			function i(m, v, N) {
				return v = d(v), v in m ? Object.defineProperty(m, v, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[v] = N, m
			}

			function d(m) {
				var v = u(m, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function u(m, v) {
				if (typeof m != "object" || m === null) return m;
				var N = m[Symbol.toPrimitive];
				if (N !== void 0) {
					var w = N.call(m, v || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(m)
			}
			class E {
				constructor(v) {
					i(this, "name", void 0), i(this, "url", void 0), this.name = v.name, this.url = v.url
				}
			}

			function* t(m, v, N, w) {
				const x = (0, e.Z)(v),
					[l, h, D] = [`get${x}Sending`, `get${x}Success`, `get${x}Failed`];
				try {
					yield(0, g.gz)(m[l]());
					const $ = yield(0, g.RE)(a, N);
					let V = $;
					if (V.error) {
						yield(0, g.gz)(m[D]());
						return
					}
					return w && (V = yield w($)), yield(0, g.gz)(m[h](V)), V
				} catch {
					yield(0, g.gz)(m[D]())
				}
			}

			function* o(m, v, N, w) {
				const x = (0, e.Z)(v),
					l = `get${x}Sending`,
					h = `get${x}Success`,
					D = `get${x}Failed`;
				try {
					yield(0, g.gz)(m[l]());
					const $ = yield(0, g.RE)(C, {
						url: N,
						data: w
					});
					return yield(0, g.gz)(m[h]($)), $
				} catch {
					yield(0, g.gz)(m[D]())
				}
			}
			const s = m => (0, r.Z)(m) ? "" : `?${c.stringify(m)}`,
				f = {
					app: new E({
						name: "app",
						url: (m, v) => `apps/${m}${s(v)}`
					}),
					apps: new E({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new E({
							name: "installs",
							url: m => `sites/${m}/installs`
						}),
						delete: new E({
							name: "installs",
							url: m => `installs/${m}`
						})
					},
					categories: new E({
						name: "categories",
						url: (m = {}) => "categories" + s(m)
					}),
					metadata: {
						get: new E({
							name: "metadata",
							url: m => `sites/${m}/metadata`
						}),
						post: new E({
							name: "metadata",
							url: m => `sites/${m}/metadata`
						})
					},
					ratings: {
						default: new E({
							name: "ratings",
							url: (m = {}) => "ratings" + s(m)
						}),
						delete: new E({
							name: "ratings",
							url: m => `ratings/${m}`
						})
					},
					recommendedApps: new E({
						name: "recommendedApps",
						url: (m = {}) => "apps/recommend" + s(m)
					}),
					developedApps: new E({
						name: "developedApps",
						url: m => `user/${m}/apps`
					})
				},
				a = async m => y.L.fetchJSON(m), C = async m => {
					const {
						url: v,
						data: N
					} = m;
					return y.L.postJSON(v, {
						body: N
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Nw: function() {
					return u
				},
				U4: function() {
					return d
				},
				XO: function() {
					return i
				},
				ZP: function() {
					return E
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts");

			function r(t) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						f = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(s).filter(function(a) {
						return Object.getOwnPropertyDescriptor(s, a).enumerable
					})), f.forEach(function(a) {
						c(t, a, s[a])
					})
				}
				return t
			}

			function c(t, o, s) {
				return o = g(o), o in t ? Object.defineProperty(t, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[o] = s, t
			}

			function g(t) {
				var o = y(t, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function y(t, o) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var f = s.call(t, o || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(t)
			}
			let i = function(t) {
					return t.SetCurrentUser = "user.set", t
				}({}),
				d = function(t) {
					return t.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", t.SetZone = "MARKETPLACE/AUTH/SET_ZONE", t.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", t.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", t.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", t.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", t.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", t.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", t.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", t.ResetState = "MARKETPLACE/AUTH/RESET_STATE", t
				}({});
			const u = {
				resetState: () => ({
					type: d.ResetState
				}),
				initSaga: t => ({
					type: d.InitSaga,
					zoneId: t
				}),
				setZone: t => ({
					type: d.SetZone,
					zone: t
				}),
				setToken: t => ({
					type: d.SetToken,
					token: t
				}),
				clearToken: () => ({
					type: d.ClearToken
				}),
				setTokenValid: t => ({
					type: d.SetTokenValid,
					isTokenValid: t
				}),
				getCurrentUserSaga: () => ({
					type: d.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: d.CurrentUserSending
				}),
				getCurrentUserSuccess: t => ({
					type: d.CurrentUserSuccess,
					user: t
				}),
				getCurrentUserFailed: () => ({
					type: d.CurrentUserFailed
				})
			};

			function E(t = e.fD, o) {
				switch (o.type) {
					case d.ResetState:
						return r({}, e.fD);
					case d.CurrentUserSending:
						return r({}, t);
					case d.CurrentUserSuccess:
						const {
							user: s
						} = o;
						return r({}, t, {
							user: s
						});
					case d.CurrentUserFailed:
						return r({}, t);
					case d.SetZone:
						const {
							zone: f
						} = o;
						return r({}, t, {
							zone: f
						});
					case d.SetToken:
						const {
							token: a
						} = o;
						return r({}, t, {
							token: a
						});
					case d.ClearToken:
						return r({}, t, {
							token: null
						});
					case d.SetTokenValid:
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
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Nw: function() {
					return E
				},
				U4: function() {
					return u
				},
				ZP: function() {
					return t
				},
				dg: function() {
					return d
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				r = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function c(o) {
				for (var s = 1; s < arguments.length; s++) {
					var f = arguments[s] != null ? Object(arguments[s]) : {},
						a = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(f).filter(function(C) {
						return Object.getOwnPropertyDescriptor(f, C).enumerable
					})), a.forEach(function(C) {
						g(o, C, f[C])
					})
				}
				return o
			}

			function g(o, s, f) {
				return s = y(s), s in o ? Object.defineProperty(o, s, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = f, o
			}

			function y(o) {
				var s = i(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function i(o, s) {
				if (typeof o != "object" || o === null) return o;
				var f = o[Symbol.toPrimitive];
				if (f !== void 0) {
					var a = f.call(o, s || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}
			let d = function(o) {
					return o.CloudflareZoneChangeStart = "zone.start", o
				}({}),
				u = function(o) {
					return o.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", o.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", o.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", o.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", o.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", o.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", o.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", o.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", o.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", o.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", o.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", o.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", o.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", o.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", o.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", o.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", o.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", o.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", o.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", o.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", o.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", o.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", o.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", o.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", o.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", o.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", o.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", o.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", o.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", o.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", o.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", o.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", o.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", o.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", o.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", o.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", o.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", o.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", o.ResetState = "MARKETPLACE/COMMON/RESET_STATE", o
				}({});
			const E = {
				resetState: () => ({
					type: u.ResetState
				}),
				zoneChangedSaga: () => ({
					type: u.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (o, s) => ({
					type: u.GetHomePageAssetsSaga,
					zoneId: o,
					currentResources: s
				}),
				getInstalledAppsAssetsSaga: o => ({
					type: u.GetInstalledAppsAssetsSaga,
					zoneId: o
				}),
				getDevelopedAppsAssetsSaga: (o, s) => ({
					type: u.GetDevelopedAppsAssetsSaga,
					userId: o,
					zoneId: s
				}),
				getDevelopedAppsSending: () => ({
					type: u.GetDevelopedAppsSending
				}),
				getDevelopedAppsSuccess: o => ({
					type: u.GetDevelopedAppsSuccess,
					developedApps: o
				}),
				getDevelopedAppsFailed: () => ({
					type: u.GetDevelopedAppsFailed
				}),
				getAppInfoAssetsSaga: (o, s, f) => ({
					type: u.GetAppInfoAssetsSaga,
					appIdentifier: o,
					zoneId: s,
					version: f
				}),
				setUpdatableInstalls: o => ({
					type: u.SetUpdatableInstalls,
					updatableInstallsList: o
				}),
				getAppSaga: o => ({
					type: u.GetAppSaga,
					appIdentifier: o
				}),
				getAppSending: () => ({
					type: u.GetAppSending
				}),
				getAppSuccess: o => ({
					type: u.GetAppSuccess,
					app: o
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
				getAppsSuccess: o => ({
					type: u.GetAppsSuccess,
					appsList: o
				}),
				getAppsFailed: () => ({
					type: u.GetAppsFailed
				}),
				getInstallsSaga: o => ({
					type: u.GetInstallsSaga,
					zoneId: o
				}),
				getInstallsSending: () => ({
					type: u.GetInstallsSending
				}),
				getInstallsSuccess: o => ({
					type: u.GetInstallsSuccess,
					installsList: o
				}),
				getInstallsFailed: () => ({
					type: u.GetInstallsFailed
				}),
				getCategoriesSaga: o => ({
					type: u.GetCategoriesSaga,
					queryParams: o
				}),
				getCategoriesSending: () => ({
					type: u.GetCategoriesSending
				}),
				getCategoriesSuccess: o => ({
					type: u.GetCategoriesSuccess,
					categoriesList: o
				}),
				getCategoriesFailed: () => ({
					type: u.GetCategoriesFailed
				}),
				getMetadataSaga: o => ({
					type: u.GetMetadataSaga,
					zoneId: o
				}),
				getMetadataSending: () => ({
					type: u.GetMetadataSending
				}),
				getMetadataSuccess: o => ({
					type: u.GetMetadataSuccess,
					metadata: o
				}),
				getMetadataFailed: () => ({
					type: u.GetMetadataFailed
				}),
				postMetadataSaga: (o, s) => ({
					type: u.PostMetadataSaga,
					zoneId: o,
					data: s
				}),
				postMetadataSending: () => ({
					type: u.PostMetadataSending
				}),
				postMetadataSuccess: o => ({
					type: u.PostMetadataSuccess,
					metadata: o
				}),
				postMetadataFailed: () => ({
					type: u.PostMetadataFailed
				}),
				getRecommendedAppsSaga: (o, s, f) => ({
					type: u.GetRecommendedAppsSaga,
					appsList: o,
					installsList: s,
					metadata: f
				}),
				getRecommendedAppsSending: () => ({
					type: u.GetRecommendedAppsSending
				}),
				getRecommendedAppsSuccess: o => ({
					type: u.GetRecommendedAppsSuccess,
					recommendedAppsList: o
				}),
				getRecommendedAppsFailed: () => ({
					type: u.GetRecommendedAppsFailed
				})
			};

			function t(o = e.w6, s) {
				switch (s.type) {
					case u.ResetState:
						return c({}, e.w6);
					case u.ZoneChangedSaga:
						return c({}, o, {
							installsList: c({}, e.w6.installsList),
							recommendedAppsList: c({}, e.w6.recommendedAppsList),
							metadata: c({}, e.w6.metadata)
						});
					case u.GetAppsSending:
						return c({}, o, {
							appsList: c({}, (0, r.pG)(o.appsList, e.h_))
						});
					case u.GetAppsSuccess:
						return c({}, o, {
							appsList: c({}, (0, r.pG)(o.appsList, e.Jz, s.appsList))
						});
					case u.GetAppsFailed:
						return c({}, o, {
							appsList: c({}, (0, r.pG)(o.appsList, e.yc))
						});
					case u.GetInstallsSending:
						return c({}, o, {
							installsList: c({}, (0, r.pG)(o.installsList, e.h_))
						});
					case u.GetInstallsSuccess:
						return c({}, o, {
							installsList: c({}, (0, r.pG)(o.installsList, e.Jz, s.installsList))
						});
					case u.GetInstallsFailed:
						return c({}, o, {
							installsList: c({}, (0, r.pG)(o.installsList, e.yc))
						});
					case u.GetCategoriesSending:
						return c({}, o, {
							categoriesList: c({}, (0, r.pG)(o.categoriesList, e.h_))
						});
					case u.GetCategoriesSuccess:
						return c({}, o, {
							categoriesList: c({}, (0, r.pG)(o.categoriesList, e.Jz, s.categoriesList))
						});
					case u.GetCategoriesFailed:
						return c({}, o, {
							categoriesList: c({}, (0, r.pG)(o.categoriesList, e.yc))
						});
					case u.GetMetadataSending:
						return c({}, o, {
							metadata: c({}, (0, r.pG)(o.metadata, e.h_))
						});
					case u.GetMetadataSuccess:
						return c({}, o, {
							metadata: c({}, (0, r.pG)(o.metadata, e.Jz, s.metadata))
						});
					case u.GetMetadataFailed:
						return c({}, o, {
							metadata: c({}, (0, r.pG)(o.metadata, e.yc))
						});
					case u.PostMetadataSending:
						return c({}, o, {
							metadata: c({}, (0, r.pG)(o.metadata, e.h_))
						});
					case u.PostMetadataSuccess:
						return c({}, o, {
							metadata: c({}, (0, r.pG)(o.metadata, e.Jz, s.metadata))
						});
					case u.PostMetadataFailed:
						return c({}, o, {
							metadata: c({}, (0, r.pG)(o.metadata, e.yc))
						});
					case u.GetRecommendedAppsSending:
						return c({}, o, {
							recommendedAppsList: c({}, (0, r.pG)(o.recommendedAppsList, e.h_))
						});
					case u.GetRecommendedAppsSuccess:
						return c({}, o, {
							recommendedAppsList: c({}, (0, r.pG)(o.recommendedAppsList, e.Jz, s.recommendedAppsList))
						});
					case u.GetRecommendedAppsFailed:
						return c({}, o, {
							recommendedAppsList: c({}, (0, r.pG)(o.recommendedAppsList, e.yc))
						});
					case u.GetAppSending:
						return c({}, o, {
							app: c({}, (0, r.pG)(o.app, e.h_))
						});
					case u.GetAppSuccess:
						return c({}, o, {
							app: c({}, (0, r.pG)(o.app, e.Jz, s.app))
						});
					case u.GetAppFailed:
						return c({}, o, {
							app: c({}, (0, r.pG)(o.app, e.yc))
						});
					case u.ClearApp:
						return c({}, o, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case u.SetUpdatableInstalls:
						return c({}, o, {
							updatableInstallsList: s.updatableInstallsList
						});
					case u.GetDevelopedAppsSending:
						return c({}, o, {
							developedApps: c({}, (0, r.pG)(o.developedApps, e.h_))
						});
					case u.GetDevelopedAppsSuccess:
						return c({}, o, {
							developedApps: c({}, (0, r.pG)(o.developedApps, e.Jz, s.developedApps))
						});
					case u.GetDevelopedAppsFailed:
						return c({}, o, {
							developedApps: c({}, (0, r.pG)(o.developedApps, e.yc))
						});
					default:
						return o
				}
			}
		},
		"../react/pages/apps/marketplace/types.ts": function(K, _, n) {
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
		"../react/pages/caching/tracking.tsx": function(K, _, n) {
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
		"../react/pages/dns/dns-records/tracking.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				U: function() {
					return e
				},
				X: function() {
					return r
				}
			});
			let e = function(c) {
				return c.DNS_RECORD_CREATE = "create DNS records", c.DNS_RECORD_UPDATE = "update DNS records", c.DNS_RECORD_DELETE = "delete DNS records", c.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", c
			}({});
			const r = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				BB: function() {
					return r
				},
				Pm: function() {
					return c
				},
				UZ: function() {
					return e
				}
			});
			let e = function(y) {
				return y.ROOT = "root", y.DSTADDRS_CARD = "dstaddrs_card", y.RULES_CARD = "rules_card", y.CATCHALL_CARD = "catchall_card", y.SETTINGS_PAGE = "settings_page", y.WORKERS_PAGE = "workers_page", y
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
			let c = function(y) {
				return y[y.Verified = 0] = "Verified", y[y.Pending = 1] = "Pending", y[y.Missing = 2] = "Missing", y[y.WorkerNotFound = 3] = "WorkerNotFound", y[y.Unknown = 4] = "Unknown", y[y.Loading = 5] = "Loading", y
			}({});
			const g = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/firewall/analytics/constants.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				AU: function() {
					return a
				},
				Bc: function() {
					return f
				},
				Bd: function() {
					return Q
				},
				Bt: function() {
					return o
				},
				Ji: function() {
					return V
				},
				LO: function() {
					return s
				},
				Pk: function() {
					return h
				},
				WB: function() {
					return ee
				},
				Wd: function() {
					return ne
				},
				Zj: function() {
					return N
				},
				e_: function() {
					return m
				},
				hk: function() {
					return $
				},
				jY: function() {
					return l
				},
				kF: function() {
					return re
				},
				kg: function() {
					return D
				},
				oD: function() {
					return C
				},
				pP: function() {
					return x
				},
				q4: function() {
					return w
				},
				qC: function() {
					return v
				}
			});
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = n("../../../../node_modules/@cloudflare/component-filter-bar/es/index.js"),
				c = n("../../../../node_modules/@cloudflare/data-locations/es/index.js"),
				g = n("../../../../node_modules/@cloudflare/cf.util.patterns/index.js"),
				y = n.n(g),
				i = n("../react/common/components/analytics/AnalyticsReport/constants.ts");

			function d(R) {
				for (var z = 1; z < arguments.length; z++) {
					var te = arguments[z] != null ? Object(arguments[z]) : {},
						U = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(te).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(te, ue).enumerable
					})), U.forEach(function(ue) {
						u(R, ue, te[ue])
					})
				}
				return R
			}

			function u(R, z, te) {
				return z = E(z), z in R ? Object.defineProperty(R, z, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[z] = te, R
			}

			function E(R) {
				var z = t(R, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function t(R, z) {
				if (typeof R != "object" || R === null) return R;
				var te = R[Symbol.toPrimitive];
				if (te !== void 0) {
					var U = te.call(R, z || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(R)
			}
			const o = {
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
				f = {
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
				m = {
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
				v = {
					action: {
						label: "firewall.analytics.filters.labels.action",
						type: r.kE.select,
						options: Object.keys(o).filter(R => !["challenge_solved", "challenge_failed", "challenge_bypassed", "jschallenge_solved", "jschallenge_failed", "jschallenge_bypassed", "unknown"].includes(R)),
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn]
					},
					botScore: {
						label: "firewall.analytics.filters.labels.botScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: R => parseInt(R, 10),
						validationMessage: "firewall.analytics.filters.errors.botScore",
						validate: R => {
							const z = parseInt(R, 10);
							return z >= 0 && z <= 100
						},
						urlParam: "botScore"
					},
					botScoreSrcName: {
						label: "firewall.analytics.filters.labels.botScoreSrcName",
						type: r.kE.select,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						options: Object.keys(f),
						urlParam: "botScoreSrcName"
					},
					clientAsn: {
						label: "firewall.analytics.filters.labels.clientAsn",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: 13335,
						validationMessage: "firewall.analytics.filters.errors.asn",
						validate: R => !isNaN(parseFloat(R)) && isFinite(parseFloat(R)),
						urlParam: "asn"
					},
					clientCountryName: {
						label: "firewall.analytics.filters.labels.clientCountryName",
						type: r.kE.select,
						options: Object.keys(c.zY),
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						urlParam: "country"
					},
					clientIP: {
						label: "firewall.analytics.filters.labels.clientIP",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: "192.0.2.0",
						validationMessage: "firewall.analytics.filters.errors.ip",
						validate: R => !!R && !!R.length && (g.ipv4.test(R) || g.ipv6.test(R)),
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
						options: Object.keys(m).filter(R => R !== "unknown"),
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						urlParam: "service"
					},
					rayName: {
						label: "firewall.analytics.filters.labels.rayName",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals],
						example: "1a79a4d60de6718e",
						urlParam: "ray-id",
						parse: R => R.replace(/-[A-Z]{3}$/, "")
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
						parse: R => parseInt(R, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: R => {
							const z = parseInt(R, 10);
							return z >= 0 && z <= 100
						},
						urlParam: "waf-ml-score"
					},
					wafRceAttackScore: {
						label: "firewall.analytics.filters.labels.wafRceAttackScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: R => parseInt(R, 10),
						validationMessage: "firewall.analytics.filters.errors.wafRceAttackScore",
						validate: R => {
							const z = parseInt(R, 10);
							return z >= 0 && z <= 100
						},
						urlParam: "waf-rce-score"
					},
					wafMlSqliAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlSqliAttackScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: R => parseInt(R, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: R => {
							const z = parseInt(R, 10);
							return z >= 0 && z <= 100
						},
						urlParam: "waf-ml-sqli-score"
					},
					wafMlXssAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlXssAttackScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: R => parseInt(R, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: R => {
							const z = parseInt(R, 10);
							return z >= 0 && z <= 100
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
						parse: R => parseInt(R, 10),
						validationMessage: "firewall.analytics.filters.errors.zoneVersion",
						validate: R => parseInt(R) >= 0,
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
				N = (R, z, te, U, ue, X, W) => {
					const O = d({}, v);
					return R || (delete O.botScore, delete O.botScoreSrcName), z || (delete O.ja3Hash, delete O.ja4, delete O.ja4Signals), te || (delete O.wafMlAttackScore, delete O.wafMlSqliAttackScore, delete O.wafMlXssAttackScore, delete O.wafRceAttackScore), X || delete O.wafAttackScoreClass, U || delete O.zoneVersion, ue || delete O.apiGatewayMatchedEndpoint, W || delete O.zoneTag, O
				},
				w = {
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
				x = {
					TIMESERIES: "Timeseries Chart",
					DISTRIBUTION: "Source Distribution Chart",
					TOP_N: "Top N",
					FILTER_BAR: "Filter Bar"
				},
				l = "firewall-analytics",
				h = "encrypted_matched_data",
				D = {
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
				$ = {
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
				V = {
					REQUEST_HEADERS_NAMES: "firewall.activity_log.matched_data.request_headers_names",
					FILES: "firewall.activity_log.matched_data.files",
					ARGS: "firewall.activity_log.matched_data.args",
					ARGS_POST_NAMES: "firewall.activity_log.matched_data.args_post_names",
					ARGS_GET_NAMES: "firewall.activity_log.matched_data.args_get_names",
					ARGS_GET: "firewall.activity_log.matched_data.args_get",
					REQUEST_HEADERS: "firewall.activity_log.matched_data.request_headers"
				},
				re = ["REQUEST_HEADERS:HOST", "REQUEST_HEADERS:REFERER", "REQUEST_HEADERS:USER-AGENT"],
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
				ee = "13335",
				Q = "https://developers.cloudflare.com/ddos-protection/best-practices/respond-to-ddos-attacks/"
		},
		"../react/pages/firewall/api-shield/tracking.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Fj: function() {
					return u
				},
				kq: function() {
					return d
				},
				xr: function() {
					return E
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = n.n(e);

			function c(t) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						f = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(s).filter(function(a) {
						return Object.getOwnPropertyDescriptor(s, a).enumerable
					})), f.forEach(function(a) {
						g(t, a, s[a])
					})
				}
				return t
			}

			function g(t, o, s) {
				return o = y(o), o in t ? Object.defineProperty(t, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[o] = s, t
			}

			function y(t) {
				var o = i(t, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function i(t, o) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var f = s.call(t, o || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(t)
			}
			let d = function(t) {
				return t.MAIN = "API Shield", t.SCHEMA_VALIDATION = "Schema Validation", t.JWT_VALIDATION = "JWT Validation", t.SEQUENCE_ANALYTICS = "Sequence Analytics", t.SEQUENCE_RULES = "Sequence Rules", t.ENDPOINT_MANAGEMENT = "Endpoint Management", t.API_DISCOVERY = "API Discovery", t.SETTINGS = "Settings", t
			}({});
			const u = {
					[d.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[d.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[d.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[d.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[d.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[d.JWT_VALIDATION]: {
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
					[d.SETTINGS]: {
						redirectToFirewallRulesTemplate: "redirect to firewall rules",
						redirectToPages: "redirect to uploaded developer portal on pages",
						listSessionIdentifiers: "list session identifiers",
						listRequestsContainingSessionIdentifiers: "list requests containing session identifiers",
						addOrRemoveSessionIdentifiers: "add or remove session identifiers"
					}
				},
				E = ({
					name: t,
					category: o = "user journey",
					product: s = d.MAIN,
					productName: f,
					additionalData: a
				}) => {
					r().sendEvent(t, c({
						category: o,
						product: s,
						productName: f
					}, a || {}))
				}
		},
		"../react/pages/firewall/bots/tracking.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				N3: function() {
					return e
				},
				UN: function() {
					return c
				},
				h1: function() {
					return r
				}
			});
			let e = function(g) {
					return g.INITIAL_FETCH_SCORES = "view bots scores distribution", g.FETCH_CONFIGURATION = "view bots configuration page", g.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", g.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", g.UPDATE_SETTINGS = "update bots settings", g.DELETE_RULE = "delete bots ruleset", g.UPDATE_RULE = "update bots ruleset", g.FETCH_RULES = "view bots ruleset", g.CONFIGURE_BOT_MANAGEMENT = "view bots management", g.WAF_RULES_REDIRECT = "redirect waf rules", g
				}({}),
				r = function(g) {
					return g.PROVIDED_TEMPLATE = "provided template link in detection card", g.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", g.USE_TEMPLATE = "use template", g.CREATE_FIREWALL_RULE = "create firewall rule", g.WAF_RULES = "waf rules", g
				}({});
			const c = "user journey"
		},
		"../react/pages/firewall/page-shield/tracking.ts": function(K, _, n) {
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
		"../react/pages/firewall/rulesets/tracking.tsx": function(K, _, n) {
			"use strict";
			n.d(_, {
				QK: function() {
					return e
				},
				dy: function() {
					return r
				},
				sO: function() {
					return c
				},
				x4: function() {
					return g
				}
			});
			let e = function(y) {
				return y.DELETE = "delete", y.CREATE = "create", y.GET = "get", y.UPDATE = "update", y
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
				c = (y, i) => {
					var d;
					return `${i} ${(d=r[y])!==null&&d!==void 0?d:y} rule${i===e.GET?"s":""}`
				},
				g = () => {
					var y, i;
					return (y = Object.keys(r)) === null || y === void 0 || (i = y.map(d => {
						var u;
						return (u = Object.values(e)) === null || u === void 0 ? void 0 : u.map(E => c(d, E))
					})) === null || i === void 0 ? void 0 : i.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				AS: function() {
					return y
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
					return s
				},
				nT: function() {
					return d
				},
				o4: function() {
					return f
				},
				oY: function() {
					return c
				},
				qH: function() {
					return E
				},
				x3: function() {
					return i
				}
			});
			var e = n("../react/pages/firewall/analytics/constants.ts");
			const r = ["block", "challenge", "jschallenge", "managedChallenge"],
				c = ["miss", "expired", "bypass", "dynamic"],
				g = a => Object.fromEntries(Object.entries(a).map(([C, m]) => [m, C])),
				y = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				i = g(y),
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
				u = g(d),
				E = {
					"Not Computed": "not_computed",
					"Machine Learning": "machine_learning",
					Heuristics: "heuristics",
					"Behavioral Analysis": "behavioral_analysis",
					"JS Fingerprinting": "js_fingerprinting",
					"Verified Bot": "verified_bot",
					"Cloudflare Service": "cloudflare_service"
				},
				t = g(E);
			let o = function(a) {
				return a.SAMPLED = "sampled", a.RAW = "raw", a
			}({});
			const s = "security-analytics-log-explorer";
			let f = function(a) {
				return a.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', a.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', a.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', a.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', a.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', a
			}({})
		},
		"../react/pages/home/alerts/config.tsx": function(K, _, n) {
			"use strict";
			n.d(_, {
				jk: function() {
					return v
				},
				w8: function() {
					return N
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				c = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				g = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function y(w) {
				for (var x = 1; x < arguments.length; x++) {
					var l = arguments[x] != null ? Object(arguments[x]) : {},
						h = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(l).filter(function(D) {
						return Object.getOwnPropertyDescriptor(l, D).enumerable
					})), h.forEach(function(D) {
						i(w, D, l[D])
					})
				}
				return w
			}

			function i(w, x, l) {
				return x = d(x), x in w ? Object.defineProperty(w, x, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[x] = l, w
			}

			function d(w) {
				var x = u(w, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function u(w, x) {
				if (typeof w != "object" || w === null) return w;
				var l = w[Symbol.toPrimitive];
				if (l !== void 0) {
					var h = l.call(w, x || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(w)
			}
			const E = "Notifications",
				t = "notification",
				o = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${o}/notifications`,
				f = (0, e.BC)`${s}/destinations`,
				a = (0, e.BC)`${s}/create`,
				C = (0, e.BC)`${a}/${"alertType"}`,
				m = (0, e.BC)`${s}/edit/${"alertId"}`,
				v = y({
					account: o,
					alerts: s,
					destinations: f,
					createAlert: a,
					createAlertWithSelection: C,
					editAlert: m
				}, r._j, c._j),
				N = y({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, g.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				_j: function() {
					return i
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				c = (0, e.BC)`${r}/pagerduty/connect`,
				g = (0, e.BC)`${r}/pagerduty/register`,
				y = (0, e.BC)`${r}/pagerduty`,
				i = {
					pagerDutyConnect: c,
					pagerDutyRegister: g,
					pagerDutyList: y
				};
			var d = null
		},
		"../react/pages/home/alerts/integrations/redux/entities.ts": function(K, _, n) {
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
		"../react/pages/home/alerts/integrations/webhooks/routes.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				_j: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				c = (0, e.BC)`${r}/webhook/create`,
				g = (0, e.BC)`${r}/webhook/edit/${"webhookId"}`,
				y = {
					webhookCreate: c,
					webhookResource: g
				};
			var i = null
		},
		"../react/pages/home/alerts/tracking.ts": function(K, _, n) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(K, _, n) {
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
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(K, _, n) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				AA: function() {
					return Oe
				},
				AN: function() {
					return ut
				},
				AY: function() {
					return dt
				},
				Am: function() {
					return w
				},
				B2: function() {
					return le
				},
				BB: function() {
					return re
				},
				BF: function() {
					return lt
				},
				BQ: function() {
					return pe
				},
				Cs: function() {
					return et
				},
				E8: function() {
					return Ct
				},
				Fl: function() {
					return pt
				},
				Fu: function() {
					return Q
				},
				G_: function() {
					return v
				},
				Gc: function() {
					return Pe
				},
				IO: function() {
					return he
				},
				JK: function() {
					return Xe
				},
				K: function() {
					return D
				},
				KN: function() {
					return Fe
				},
				LI: function() {
					return Y
				},
				LX: function() {
					return Re
				},
				L_: function() {
					return de
				},
				Ly: function() {
					return At
				},
				MR: function() {
					return oe
				},
				Mj: function() {
					return L
				},
				NB: function() {
					return Zt
				},
				Or: function() {
					return M
				},
				P5: function() {
					return Ht
				},
				PE: function() {
					return We
				},
				Pd: function() {
					return Kt
				},
				Pk: function() {
					return Je
				},
				Pp: function() {
					return Ue
				},
				Q1: function() {
					return ee
				},
				Qr: function() {
					return it
				},
				Qv: function() {
					return He
				},
				Rp: function() {
					return Wt
				},
				Sh: function() {
					return bt
				},
				TZ: function() {
					return Z
				},
				Tg: function() {
					return ce
				},
				U$: function() {
					return nt
				},
				Uy: function() {
					return nn
				},
				Vw: function() {
					return z
				},
				W3: function() {
					return Ce
				},
				WR: function() {
					return qe
				},
				WX: function() {
					return Ie
				},
				XF: function() {
					return ht
				},
				Xc: function() {
					return be
				},
				ZB: function() {
					return ne
				},
				Zs: function() {
					return G
				},
				_f: function() {
					return j
				},
				_k: function() {
					return ze
				},
				b4: function() {
					return ye
				},
				c2: function() {
					return F
				},
				cE: function() {
					return yt
				},
				dh: function() {
					return Me
				},
				fE: function() {
					return Le
				},
				g7: function() {
					return je
				},
				hO: function() {
					return ke
				},
				hV: function() {
					return Vt
				},
				hk: function() {
					return x
				},
				hr: function() {
					return B
				},
				it: function() {
					return Be
				},
				jG: function() {
					return Ee
				},
				jN: function() {
					return Ve
				},
				m8: function() {
					return O
				},
				nm: function() {
					return Tt
				},
				oW: function() {
					return Ge
				},
				oc: function() {
					return N
				},
				pH: function() {
					return H
				},
				pi: function() {
					return W
				},
				rI: function() {
					return ge
				},
				s7: function() {
					return mt
				},
				sO: function() {
					return we
				},
				sg: function() {
					return at
				},
				tB: function() {
					return m
				},
				tN: function() {
					return xe
				},
				vV: function() {
					return se
				},
				vc: function() {
					return Ke
				}
			});
			var e = n("../../../../node_modules/lodash/lodash.js"),
				r = n.n(e),
				c = n("../../../../node_modules/moment/moment.js"),
				g = n.n(c),
				y = n("../../../common/util/types/src/api/domain.ts"),
				i = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				d = n("../react/utils/translator.tsx"),
				u = n("../react/utils/url.ts"),
				E = n("../react/pages/home/domain-registration/config.ts"),
				t = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				o = n("../react/pages/home/domain-registration/types.ts");

			function s(p) {
				for (var S = 1; S < arguments.length; S++) {
					var me = arguments[S] != null ? Object(arguments[S]) : {},
						Te = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && Te.push.apply(Te, Object.getOwnPropertySymbols(me).filter(function(Ne) {
						return Object.getOwnPropertyDescriptor(me, Ne).enumerable
					})), Te.forEach(function(Ne) {
						f(p, Ne, me[Ne])
					})
				}
				return p
			}

			function f(p, S, me) {
				return S = a(S), S in p ? Object.defineProperty(p, S, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[S] = me, p
			}

			function a(p) {
				var S = C(p, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function C(p, S) {
				if (typeof p != "object" || p === null) return p;
				var me = p[Symbol.toPrimitive];
				if (me !== void 0) {
					var Te = me.call(p, S || "default");
					if (typeof Te != "object") return Te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(p)
			}

			function m(p) {
				return p.filter(S => S.isSelected).reduce((S, {
					transferFee: me,
					isZoneEntitlementPresent: Te
				}) => Te ? S : S + me, 0)
			}

			function v(p) {
				return (p / 100).toLocaleString("en-US", {
					style: "currency",
					currency: "USD"
				})
			}

			function N(p) {
				return p.filter(S => S.registrar.toLowerCase() === "godaddy")
			}
			const w = "MMM D, YYYY";

			function x(p, S, me, Te) {
				var Ne, Qe, st, Et, St, Pt, Ot, It, Dt, wt, Lt, Mt, Rt, $t, kt, Nt, jt, vt, Ut, Bt, xt;
				const Yt = (((Ne = S.fees) === null || Ne === void 0 ? void 0 : Ne.registration_fee) !== o.Xp && ((Qe = S.fees) === null || Qe === void 0 ? void 0 : Qe.registration_fee) || 0) * 100,
					Qt = (((st = S.fees) === null || st === void 0 ? void 0 : st.transfer_fee) !== o.Xp && ((Et = S.fees) === null || Et === void 0 ? void 0 : Et.transfer_fee) || 0) * 100,
					Jt = (((St = S.fees) === null || St === void 0 ? void 0 : St.registration_fee) !== o.Xp && ((Pt = S.fees) === null || Pt === void 0 ? void 0 : Pt.registration_fee) || 0) * 100,
					Xt = (((Ot = S.fees) === null || Ot === void 0 ? void 0 : Ot.renewal_fee) !== o.Xp && ((It = S.fees) === null || It === void 0 ? void 0 : It.renewal_fee) || 0) * 100,
					qt = (((Dt = S.fees) === null || Dt === void 0 ? void 0 : Dt.redemption_fee) !== o.Xp && ((wt = S.fees) === null || wt === void 0 ? void 0 : wt.redemption_fee) || 0) * 100,
					Ze = p[S.name];
				return {
					name: S.name,
					zone: Ze,
					entitlements: me,
					registryCheck: Te,
					nameservers: S.name_servers,
					isAvailable: S.available,
					lastKnownStatus: S.last_known_status,
					authCode: S.auth_code,
					isEnterpriseZone: (Ze == null || (Lt = Ze.plan) === null || Lt === void 0 ? void 0 : Lt.legacy_id) === "enterprise",
					isActiveZone: (Ze == null ? void 0 : Ze.status) === "active",
					corResponsesPending: S.cor_responses_pending,
					isCorLocked: S.cor_locked,
					corLockedUntil: S.cor_locked_until ? g()(S.cor_locked_until).format(w) : null,
					isFullZone: (Ze == null ? void 0 : Ze.type) == o.xd.Full,
					isLocked: S.locked,
					registrar: S.current_registrar || E.JM,
					zoneId: Ze == null ? void 0 : Ze.id,
					currentExpiration: g()(S.expires_at).format(w),
					newExpiration: g()(S.expires_at).add(1, "year").format(w),
					wholesaleCost: Yt,
					transferFee: Qt,
					registrationFee: Jt,
					renewalFee: Xt,
					redemptionFee: qt,
					lastEntitledAt: S.last_entitled_at ? new Date(S.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(me) && !!me.find(Gt => Gt.id === E.g5 && Gt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: S.transfer_in && h(S.transfer_in) || o.BJ.Pending,
					autoTransferStatus: o._n.Pending,
					transferConditions: S.transfer_conditions,
					transferApiCallStatus: o.Yh.Pending,
					transferIn: S.transfer_in,
					transferOut: S.transfer_out,
					autoRenew: S.auto_renew === !0,
					lastTransferredAt: S.last_transferred_at,
					createdAt: S.created_at,
					paymentExpiresAt: g()(S.payment_expires_at).isValid() ? g()(S.payment_expires_at) : g()(S.expires_at).isValid() ? g()(S.expires_at) : "",
					contactIds: {
						[o.l2.Administrator]: (Mt = S.contacts) === null || Mt === void 0 || (Rt = Mt.administrator) === null || Rt === void 0 ? void 0 : Rt.id,
						[o.l2.Billing]: ($t = S.contacts) === null || $t === void 0 || (kt = $t.billing) === null || kt === void 0 ? void 0 : kt.id,
						[o.l2.Registrant]: (Nt = S.contacts) === null || Nt === void 0 || (jt = Nt.registrant) === null || jt === void 0 ? void 0 : jt.id,
						[o.l2.Technical]: (vt = S.contacts) === null || vt === void 0 || (Ut = vt.technical) === null || Ut === void 0 ? void 0 : Ut.id
					},
					landing: S.landing,
					whois: S.whois,
					emailVerified: S.email_verified,
					materialChanges: $(S.material_changes),
					corChanges: S.cor_changes ? re(Object.assign(s({}, l), S.cor_changes)) : {},
					registryStatuses: S.registry_statuses ? S.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Bt = S.domain_protection_services) === null || Bt === void 0 ? void 0 : Bt.status
					},
					deletion: {
						isDeletable: S == null || (xt = S.deletion) === null || xt === void 0 ? void 0 : xt.is_deletable
					},
					premiumType: S == null ? void 0 : S.premiumType,
					fees: S == null ? void 0 : S.fees
				}
			}
			const l = {
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

			function h(p) {
				switch (p.enter_auth_code) {
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

			function D(p) {
				let S = p.extensions;
				(S == null ? void 0 : S.application_purpose) && (S == null ? void 0 : S.nexus_category) && (p.extensions = {
					nexusCategory: S.nexus_category,
					applicationPurpose: S.application_purpose
				});
				let me = s({}, typeof p.id == "string" ? {
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
				return P(me)
			}

			function $(p) {
				let S = [];
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
				for (const Te in p) {
					const Ne = p[Te],
						Qe = me[Ne];
					S.push(Qe)
				}
				return S
			}
			const V = p => {
				if (!p) return null;
				let S = p;
				return p.includes("C31") && (S = "C31"), p.includes("C32") && (S = "C32"), S
			};

			function re(p) {
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
						nexusCategory: V(p.extensions.nexus_category),
						applicationPurpose: p.extensions.application_purpose
					}
				} : {})
			}

			function ne(p = {}) {
				const S = {
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
						type: o.xd.Full
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
					transferConditions: s({
						exists: !0,
						supported_tld: !0,
						not_secure: !0,
						not_waiting: !0,
						not_started: !0,
						not_premium: !0
					}, p.transferConditions || {}),
					transferIn: s({
						unlock_domain: o.lW.UNKNOWN,
						disable_privacy: o.lW.UNKNOWN,
						enter_auth_code: o.lW.UNKNOWN,
						approve_transfer: o.lW.UNKNOWN,
						accept_foa: o.lW.UNKNOWN,
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
				return Object.assign(S, p)
			}

			function ee(p = {}) {
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

			function Q(p) {
				const S = E.Py.concat(E.ui).reduce((me, Te) => s({}, me, {
					[Te]: []
				}), {});
				return p.forEach(me => {
					let Te = R(me.registrar);
					Te in S || (Te = E.ui), at(me.name) && (Te = "uk"), S[Te].push(me)
				}), Object.keys(S).sort((me, Te) => me.localeCompare(Te)).map(me => ({
					registrar: me,
					domains: S[me]
				})).filter(me => me.domains.length > 0)
			}

			function R(p) {
				return p == null ? void 0 : p.toLowerCase().replace(/\s|,|\./g, "")
			}

			function z(p) {
				if (!p || !p.registrar) return "unknown";
				if (at(p.name)) return "uk";
				const S = R(p.registrar);
				return S in E.gM ? S : "unknown"
			}

			function te(p, S) {
				return p.filter(me => R(me.registrar) === R(S))
			}
			const U = [];

			function ue(p) {
				return U.some(S => p.endsWith("." + S))
			}

			function X(p) {
				return !p.isEnterpriseZone || !Array.isArray(p.entitlements) ? !1 : !!p.entitlements.find(({
					id: S,
					allocation: me
				}) => S === E.g5 && me.value === !0)
			}

			function W(p) {
				var S;
				const me = [o.rj.CLIENT_HOLD, o.rj.SERVER_HOLD, o.rj.SERVER_TRANSFER_PROHIBITED, o.rj.PENDING_DELETE, o.rj.PENDING_TRANSFER, o.rj.CLIENT_TRANSFER_PROHIBITED];
				let Te = !1,
					Ne = null;
				return (S = p.registryStatuses) === null || S === void 0 || S.some(Qe => {
					me.includes(Qe) && (Ne = Qe, Te = !0)
				}), [Te, Ne]
			}

			function O(p, S = []) {
				var me;
				if (!p) return [!1, t.keys.cannot_transfer_default];
				if (p.zone.status !== "active") return [!1, t.keys.cannot_transfer_zone_not_active];
				if (!p.isFullZone && !X(p)) return [!1, t.keys.cannot_transfer_zone_not_eligible];
				if (p.registrar === "Cloudflare") return [!1, t.keys.cannot_transfer_domain_on_cf];
				if (p.isAvailable) return [!1, t.keys.cannot_transfer_domain_available];
				if (!p.transferConditions) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if ((me = p.registryCheck) === null || me === void 0 ? void 0 : me.premium) return [!1, t.keys.cannot_transfer_domain_premium];
				if (H(p)) return [!1, t.keys.cannot_transfer_domain_transfer_in_progress];
				let Te;
				for (Te in p.transferConditions)
					if (!p.transferConditions[Te]) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (ue(p.name) && !S.some(st => p.name.endsWith("." + st))) return [!1, t.keys.cannot_transfer_domain_tld_not_supported];
				const [Ne, Qe] = W(p);
				return Ne && Qe ? [!1, t.keys.cannot_transfer_domain_registry_status[Qe]] : [!0, ""]
			}

			function H(p) {
				var S, me;
				return !!p.transferIn && !((S = p.transferConditions) === null || S === void 0 ? void 0 : S.not_started) && !!(at(p.name) || ((me = p.registryStatuses) === null || me === void 0 ? void 0 : me.includes(o.rj.PENDING_TRANSFER)))
			}

			function J(p) {
				return !!p.registrar && !!p.currentExpiration
			}

			function le(p) {
				const [S] = O(p);
				return J(p) ? Fe(p) ? o.M5.InProgressOrOnCF : S ? o.M5.Supported : o.M5.Unsupported : o.M5.Unknown
			}

			function F(p) {
				return p.transferIn && [o.lW.REJECTED, o.lW.NEEDED].includes(p.transferIn.enter_auth_code) || !1
			}

			function oe(p) {
				return p.registrar === "Cloudflare"
			}

			function ge(p) {
				return !!(p == null ? void 0 : p.includes(o.rj.AUTO_RENEW_PERIOD))
			}

			function L(p) {
				return !!(p == null ? void 0 : p.includes(o.rj.PENDING_TRANSFER))
			}
			const A = "Invalid date";

			function M(p) {
				return p.newExpiration === A ? "Unavailable" : p.newExpiration
			}

			function Z(p) {
				return p.currentExpiration === A ? "Unavailable" : p.currentExpiration
			}

			function ae(p) {
				const S = !!(p.lastEntitledAt && p.isZoneEntitlementPresent === null);
				return [p.newExpiration, p.currentExpiration].some(Te => Te === A) || S || p.isEnterpriseZone && !p.isFullZone && !Array.isArray(p.entitlements)
			}

			function _e(p) {
				return p.transferIn && p.transferIn.approve_transfer === EApiTransferStatus.REJECTED || !1
			}

			function De(p) {
				return p.transferIn && p.transferIn.can_cancel_transfer || !1
			}

			function Oe(p) {
				return p.substring(p.indexOf("."))
			}

			function B(p) {
				return p.map(S => S.name).map(S => Oe(S)).filter((S, me, Te) => !Te.includes(S, me + 1))
			}

			function ye(p) {
				if (E.no) return [!0, ""];
				if (!oe(p)) return [!1, o.ok.NotOnCF];
				if (p.isCorLocked) return [!1, p.corLockedUntil ? o.ok.CorLockedUntil : o.ok.CorLock];
				if (p.lastTransferredAt) {
					const S = g()(p.lastTransferredAt),
						me = g().duration(g()().diff(S)).as("days"),
						Te = at(p.name);
					if (me < (Te ? 1 : 60)) return [!1, Te ? o.ok.RecentTransferUK : o.ok.RecentTransfer]
				}
				if (p.createdAt) {
					const S = g()(p.createdAt);
					if (g().duration(g()().diff(S)).as("days") < 60) return [!1, o.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function Ie(p) {
				return !!(E.Bc || p.transferOut)
			}

			function Fe(p) {
				return je(p) || oe(p)
			}

			function xe(p) {
				return !je(p) && oe(p)
			}

			function je(p) {
				return !p || p.lastKnownStatus === "pendingTransfer" || p.lastKnownStatus === "transferFOAPending" || !oe(p) && p.transferConditions && !p.transferConditions.not_started || !1
			}

			function We(p) {
				return !(ue(p.name) || p.transferConditions && !p.transferConditions.supported_tld)
			}

			function He(p) {
				return (p == null ? void 0 : p.includes("/")) ? !0 : p.split("").some(S => S.charCodeAt(0) > 123)
			}

			function ot(p, S) {
				return p.filter(me => !S.has(me.name))
			}

			function Je(p) {
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

			function et(p) {
				const S = R(p);
				return E.gM[S] || "unknown"
			}

			function Ke(p) {
				return g()(p.paymentExpiresAt).isBefore(g()())
			}

			function Ve(p) {
				return p.transferIn && p.transferIn.enter_auth_code === o.lW.REJECTED || !1
			}

			function tt(p) {
				return transferOnboardingRegistrarWhitelist.some(S => S === R(p.registrar))
			}

			function Xe(p) {
				const S = ["CU", "KP", "IR", "SY"];
				return p.filter(me => !S.includes(me.code))
			}

			function ce(p) {
				if (!!p) return `${p.charAt(0).toUpperCase()}${p.slice(1)}${p.charAt(p.length-1)==="."?"":"."}`
			}

			function fe(p) {
				var S;
				return ((S = p.transferConditions) === null || S === void 0 ? void 0 : S.not_secure) === !1
			}

			function P(p) {
				const S = {};
				for (const [me, Te] of Object.entries(p)) {
					if (Te && typeof Te == "string") {
						Object.assign(S, {
							[me]: Te.trim()
						});
						continue
					}
					Object.assign(S, {
						[me]: Te
					})
				}
				return S
			}

			function G(p) {
				return g()(p).add(40, "days")
			}

			function de(p) {
				const S = p.paymentExpiresAt || p.payment_expires_at,
					me = G(S);
				return g()().isBetween(S, me)
			}

			function Le(p) {
				var S;
				return !(p == null ? void 0 : p.registryStatuses) || !Array.isArray(p == null ? void 0 : p.registryStatuses) && !(0, e.isString)(p == null ? void 0 : p.registryStatuses) ? !1 : (S = p.registryStatuses) === null || S === void 0 ? void 0 : S.includes(o.rj.REDEMPTION_PERIOD)
			}

			function Me(p) {
				var S;
				return !(p == null ? void 0 : p.registryStatuses) || !Array.isArray(p == null ? void 0 : p.registryStatuses) && !(0, e.isString)(p == null ? void 0 : p.registryStatuses) ? !1 : (S = p.registryStatuses) === null || S === void 0 ? void 0 : S.includes(o.rj.PENDING_DELETE)
			}

			function Ue(p) {
				return [".us"].includes(p)
			}

			function Be(p) {
				return [".us"].includes(p)
			}

			function ke(p) {
				switch (p) {
					case ".us":
						return Ye();
					default:
						return []
				}
			}

			function Ce(p) {
				switch (p) {
					case ".us":
						return $e;
					default:
						return {}
				}
			}
			const $e = {
				[o.A9.P3]: [o.Fi.C11]
			};

			function Ye() {
				return [{
					name: o.IP.application_purpose,
					label: o.rb.application_purpose,
					options: Object.entries(o.A9).map(([p, S]) => ({
						value: p,
						label: S
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: o.IP.nexus_category,
					label: o.rb.nexus_category,
					options: Object.entries(o.Fi).map(([p, S]) => ({
						value: p,
						label: S
					}))
				}]
			}

			function Re(p, S, me) {
				return S[S.length - 1][me] === p[me]
			}

			function it(p) {
				return Boolean(Object.keys(p).length === 0)
			}

			function lt(p) {
				return g()().add(p, "year").format(w)
			}

			function j({
				accountName: p
			}) {
				var S;
				const me = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((S = p.toLowerCase().match(me)) === null || S === void 0 ? void 0 : S[0]) || ""
			}

			function se(p) {
				return !!p.match(i.default.email)
			}

			function Ee(p) {
				return p === "Registration banned zone error"
			}

			function be(p) {
				return p == null ? void 0 : p.startsWith("Quote error")
			}

			function we(p) {
				return p === (0, d.ZP)(t.keys.registration_checkout_trademark_notice_error_message)
			}

			function ze(p) {
				return p === "DNS conflict"
			}

			function nt(p) {
				return p === y.W7.PENDING_UPDATE
			}

			function Pe(p) {
				return p ? Object.values(y.wR).filter(S => S !== y.wR.OFFBOARDED).includes(p) : !1
			}

			function mt(p) {
				return p ? [y.wR.LOCKED, y.wR.ONBOARDED, y.wR.ONBOARDING_INITIATED, y.wR.PENDING_REGISTRY_LOCK, y.wR.PENDING_REGISTRY_UNLOCK, y.wR.PENDING_UNLOCK_APPROVAL].includes(p) : !1
			}

			function T(p) {
				return p ? y.wR.UNLOCKED === p : !1
			}

			function I(p) {
				return p ? y.wR.LOCKED === p : !1
			}

			function Y(p) {
				return p ? y.wR.PENDING_REGISTRY_LOCK === p : !1
			}

			function pe(p) {
				return p ? [y.wR.PENDING_REGISTRY_UNLOCK, y.wR.PENDING_UNLOCK_APPROVAL].includes(p) : !1
			}

			function he(p) {
				var S;
				return !1
			}

			function qe(p) {
				var S;
				return !1
			}

			function ut(p) {
				var S;
				return !1
			}

			function ht(p) {
				var S;
				return !1
			}

			function Ct(p) {
				var S;
				return !1
			}

			function Ge(p) {
				return Object.keys(y.wR).find(S => y.wR[S].toLowerCase() === p.toLowerCase())
			}

			function dt(p) {
				var S;
				const me = (S = Ge(p)) === null || S === void 0 ? void 0 : S.toLowerCase();
				return me ? t.keys.protection_status[me] : t.keys.protection_status.unknown
			}

			function ft(p) {
				return ["com", "net"].includes(p)
			}

			function pt(p) {
				const S = (0, u.pu)(p);
				return ft(S) ? y.wR.PENDING_REGISTRY_LOCK : y.wR.LOCKED
			}

			function bt(p) {
				return (0, u.pu)(p) === "co" ? 5 : 10
			}

			function Tt(p, S) {
				return S ? 1 : (0, u.pu)(p) === "co" ? 5 : (0, u.pu)(p) === "org" ? 1 : 10
			}

			function at(p) {
				return (0, u.pu)(p) === "uk"
			}

			function yt(p) {
				return (0, u.pu)(p) === "us"
			}

			function Wt(p) {
				return g()(p).isValid()
			}

			function At(p) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(p)
			}

			function Ht(p) {
				return !!(p == null ? void 0 : p.id)
			}

			function Zt(p) {
				return p ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(p) : !1
			}

			function Kt(p) {
				return p ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(p) : !1
			}

			function Vt(p) {
				var S;
				return (p == null ? void 0 : p.lastKnownStatus) ? (S = p.lastKnownStatus) === null || S === void 0 ? void 0 : S.includes("deletionIrredeemable") : !1
			}

			function nn(p) {
				switch (p) {
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
		"../react/pages/home/domain-registration/config.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Bc: function() {
					return t
				},
				Hv: function() {
					return W
				},
				JM: function() {
					return g
				},
				Py: function() {
					return d
				},
				WK: function() {
					return s
				},
				dq: function() {
					return m
				},
				g5: function() {
					return f
				},
				gM: function() {
					return i
				},
				gf: function() {
					return E
				},
				jk: function() {
					return X
				},
				no: function() {
					return o
				},
				uY: function() {
					return u
				},
				ui: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = n("../flags.js"),
				c = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const g = "Unknown",
				y = "unknown",
				i = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				d = Object.keys(i),
				u = !0,
				E = (0, r.J8)("registrar_mock_data") || !1,
				t = (0, r.J8)("registrar_mock_transfer_out") || !1,
				o = (0, r.J8)("registrar_show_unlock_ui") || !1,
				s = 250,
				f = "cf_registrar.enabled",
				a = "registrar.transfer-onboarding",
				C = document.location.search.includes("domain_transfer_onboarding"),
				m = O => !!(C || (0, c.z1)(a)(O) || (0, r.J8)("domain_transfer_onboarding")),
				v = null,
				N = "@abcABC1234567890123456",
				w = (0, e.BC)`/${"accountId"}`,
				x = (0, e.BC)`${w}/add-site`,
				l = (0, e.BC)`${w}/domains`,
				h = (0, e.BC)`${l}/${"zoneName"}`,
				D = (0, e.BC)`${h}/configuration`,
				$ = (0, e.BC)`${h}/contacts`,
				V = (0, e.BC)`${l}/pricing`,
				re = (0, e.BC)`${l}/protection`,
				ne = (0, e.BC)`${l}/register`,
				ee = (0, e.BC)`${ne}/checkout`,
				Q = (0, e.BC)`${ne}/success`,
				R = (0, e.BC)`${l}/tlds`,
				z = (0, e.BC)`${l}/transfer`,
				te = (0, e.BC)`${l}/transfer/${"zoneName"}`,
				U = (0, e.BC)`/registrar/accounts/verify_email`,
				ue = (0, e.BC)`/registrar/domains/verify_email`,
				X = {
					addSite: x,
					domains: l,
					domainsDomain: h,
					domainsDomainConfiguration: D,
					domainsDomainContacts: $,
					domainsPricing: V,
					domainsProtection: re,
					domainsRegister: ne,
					domainsRegisterCheckout: ee,
					domainsRegisterSuccess: Q,
					domainsTlds: R,
					domainsTransfer: z,
					domainsTransferZone: te,
					registrarAccountsVerifyEmail: U,
					registrarDomainsVerifyEmail: ue
				},
				W = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(K, _, n) {
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
				c = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = n.n(c),
				y = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function i(s) {
				for (var f = 1; f < arguments.length; f++) {
					var a = arguments[f] != null ? Object(arguments[f]) : {},
						C = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(a).filter(function(m) {
						return Object.getOwnPropertyDescriptor(a, m).enumerable
					})), C.forEach(function(m) {
						d(s, m, a[m])
					})
				}
				return s
			}

			function d(s, f, a) {
				return f = u(f), f in s ? Object.defineProperty(s, f, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[f] = a, s
			}

			function u(s) {
				var f = E(s, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function E(s, f) {
				if (typeof s != "object" || s === null) return s;
				var a = s[Symbol.toPrimitive];
				if (a !== void 0) {
					var C = a.call(s, f || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(s)
			}
			let t = function(s) {
				return s.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", s.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", s.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", s.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", s.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", s.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", s.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", s.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", s.RENEW_DOMAIN_COMPLETED = "domain renewal completed", s.RESTORE_DOMAIN_INIT = "click to open domain restore modal", s.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", s.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", s.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", s.RESTORE_DOMAIN_FAILURE = "domain restore failed", s.RESTORE_DOMAIN_COMPLETED = "domain restore completed", s.DOMAIN_DELETE_INIT = "click to begin domain delete", s.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", s.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", s.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", s.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", s.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", s.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", s.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", s.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", s.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", s.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", s
			}({});

			function o(s, f, a) {
				if (!(f == null ? void 0 : f.name)) return null;
				g().sendEvent(s, i({
					domain: {
						name: f.name,
						premium: (0, y.Uy)(f == null ? void 0 : f.premiumType),
						paymentExpiresAt: r()(f == null ? void 0 : f.paymentExpiresAt).format()
					},
					category: "registrar"
				}, a))
			}
		},
		"../react/pages/home/domain-registration/types.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				$F: function() {
					return v
				},
				A9: function() {
					return t
				},
				BJ: function() {
					return i
				},
				Fi: function() {
					return E
				},
				IP: function() {
					return o
				},
				Kh: function() {
					return N
				},
				M5: function() {
					return a
				},
				Vs: function() {
					return x
				},
				Xp: function() {
					return r
				},
				Yh: function() {
					return y
				},
				_n: function() {
					return g
				},
				l2: function() {
					return f
				},
				lW: function() {
					return e
				},
				ok: function() {
					return C
				},
				pT: function() {
					return w
				},
				rb: function() {
					return s
				},
				rj: function() {
					return m
				},
				xd: function() {
					return c
				}
			});
			let e = function(l) {
				return l.OK = "ok", l.NEEDED = "needed", l.PENDING = "pending", l.TRYING = "trying", l.UNKNOWN = "unknown", l.REJECTED = "rejected", l
			}({});
			const r = "Unsupported";
			let c = function(l) {
					return l.Full = "full", l.Partial = "partial", l
				}({}),
				g = function(l) {
					return l.Pending = "pending", l.Error = "error", l.InProgress = "in-progress", l.AuthCodeAcquired = "auth-code-acquired", l
				}({}),
				y = function(l) {
					return l.Success = "success", l.Pending = "pending", l.Error = "error", l.AuthCodeFailed = "auth-code-failed", l.AuthCodeRequired = "auth-code-required", l
				}({}),
				i = function(l) {
					return l.Valid = "valid", l.Invalid = "fail", l.Error = "error", l.Pending = "pending", l.Loading = "loading", l
				}({}),
				d = function(l) {
					return l.C11 = "C11", l.C21 = "C21", l.C31 = "C31", l.C32 = "C32", l
				}({}),
				u = function(l) {
					return l.P1 = "P1", l.P2 = "P2", l.P3 = "P3", l.P4 = "P4", l.P5 = "P5", l
				}({}),
				E = function(l) {
					return l.C11 = "I am a US citizen, permanent resident of the US, or my primary domicile is in the US", l.C21 = "I represent a US corporation", l.C31 = "I represent a non-US corporation that has an office in the US or regularly conducts business in the US", l
				}({}),
				t = function(l) {
					return l.P1 = "Business for profit", l.P2 = "Business not for profit", l.P3 = "Personal", l.P4 = "Education", l.P5 = "Civic or Government", l
				}({}),
				o = function(l) {
					return l.nexus_category = "nexus_category", l.application_purpose = "application_purpose", l
				}({}),
				s = function(l) {
					return l.nexus_category = "Which of the below best describes you?", l.application_purpose = "What this domain will be used for?", l
				}({}),
				f = function(l) {
					return l.Registrant = "registrant", l.Administrator = "administrator", l.Technical = "technical", l.Billing = "billing", l
				}({}),
				a = function(l) {
					return l.Supported = "supported", l.Unsupported = "unsupported", l.Unknown = "unknown", l.InProgressOrOnCF = "in progress or on CF", l
				}({}),
				C = function(l) {
					return l.CorLock = "Pending change of registrant", l.CorLockedUntil = "Transfer Locked until %LOCKED_UNTIL_DATE%. Reason: Recent change to the registrant contact.", l.NotOnCF = "Domain not on Cloudflare", l.RecentCreation = "Domain created within 60 days", l.RecentTransfer = "Domain transferred within 60 days", l.RecentTransferUK = "UK domain transferred within 24 hours", l
				}({}),
				m = function(l) {
					return l.OK = "ok", l.PENDING_TRANSFER = "pendingtransfer", l.CLIENT_TRANSFER_PROHIBITED = "clienttransferprohibited", l.SERVER_TRANSFER_PROHIBITED = "servertransferprohibited", l.CLIENT_RENEW_PROHIBITED = "clientrenewprohibited", l.SERVER_RENEW_PROHIBITED = "serverrenewprohibited", l.CLIENT_UPDATE_PROHIBITED = "clientupdateprohibited", l.CLIENT_HOLD = "clienthold", l.SERVER_HOLD = "serverhold", l.PENDING_DELETE = "pendingdelete", l.ADD_PERIOD = "addperiod", l.AUTO_RENEW_PERIOD = "autorenewperiod", l.RENEW_PERIOD = "renewperiod", l.TRANSFER_PERIOD = "transferperiod", l.REDEMPTION_PERIOD = "redemptionperiod", l.PENDING_RESTORE = "pendingrestore", l
				}({}),
				v = function(l) {
					return l.SUCCESS = "success", l.PENDING = "pending", l.ERROR = "error", l
				}({}),
				N = function(l) {
					return l.RESTORATION_PENDING = "restorationPending", l.RESTORATION_AUTH_FAILURE = "restorationAuthFailure", l.RESTORATION_FAILURE = "restorationFailure", l.RESTORATION_SUCCESS = "restorationSuccess", l.RESTORATION_RENEW_PENDING = "restorationRenewPending", l.RESTORATION_RENEW_FAILURE = "restorationRenewFailure", l.RESTORATION_RENEW_SETTLE_FAILURE = "restorationRenewSettleFailure", l.RESTORATION_RENEW_SUCCESS = "restorationRenewSuccess", l.RESTORATION_PENDING_ZONE_CREATE = "restorationPendingZoneCreate", l.RESTORATION_PENDING_ZONE_ACTIVATE = "restorationPendingZoneActivate", l.RESTORATION_FAILED_ZONE_CREATE = "restorationFailedZoneCreate", l.RESTORATION_FAILED_ZONE_ACTIVATE = "restorationFailedZoneActivate", l.RESTORATION_ZONE_CREATE_SUCCESS = "restorationZoneCreateSuccess", l.RESTORATION_ZONE_ACTIVATE_SUCCESS = "restorationZoneActivateSuccess", l.RESTORATION_SUCCESS_WITHOUT_REPORT = "restorationSuccessWithoutReport", l
				}({}),
				w = function(l) {
					return l.TransferInWaitingFOA = "DomainStatus:TransferInWaitingFoa", l.RegistrationPendingAuthorization = "DomainStatus:RegistrationPendingAuthorization", l.RegistrationPendingZoneCreate = "DomainStatus:RegistrationPendingZoneCreate", l.RegistrationPendingRegister = "DomainStatus:RegistrationPendingRegister", l.RegistrationPendingZoneActivate = "DomainStatus:RegistrationPendingZoneActivate", l.RegistrationPendingSettlement = "DomainStatus:RegistrationPendingSettlement", l.RegistrationFailedAuthorization = "DomainStatus:RegistrationFailedAuthorization", l.RegistrationFailedQuote = "DomainStatus:RegistrationFailedQuote", l.RegistrationFailedRegister = "DomainStatus:RegistrationFailedRegister", l.RegistrationFailedZoneCreate = "DomainStatus:RegistrationFailedZoneCreate", l.RegistrationFailedZoneActivate = "DomainStatus:RegistrationFailedZoneActivate", l.RegistrationFailedSettlement = "DomainStatus:RegistrationFailedSettlement", l.RegistrationActive = "DomainStatus:RegistrationActive", l.DomainRedemptionPeriod = "DomainStatus:RedemptionPeriod", l.Expired = "DomainStatus:Expired", l.ExpiredParked = "DomainStatus:ExpiredParked", l.PendingDelete = "DomainStatus:PendingDelete", l.DeletionInitiated = "DomainStatus:DeletionInitiated", l.DeletionIrredeemable = "DomainStatus:DeletionIrredeemable", l.DomainTerminated = "DomainStatus:DomainTerminated", l.DomainLocked = "DomainStatus:DomainLocked", l.PendingTransfer = "DomainStatus:PendingTransfer", l.PendingRenewal = "DomainStatus:PendingRenewal", l.Unknown = "Unknown", l
				}({}),
				x = function(l) {
					return l.NonStandard_NonStandard = "nonstandard_nonstandard", l.NonStandard_Standard = "nonstandard_standard", l.Standard_Standard = "standard_standard", l.Standard_NonStandard = "standard_nonstandard", l.Not_Premium = "not_premium", l
				}({})
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(K, _, n) {
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
		"../react/pages/hyperdrive/tracking.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				KO: function() {
					return d
				},
				L9: function() {
					return t
				},
				N3: function() {
					return E
				},
				zE: function() {
					return u
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = n.n(e);

			function c(o) {
				for (var s = 1; s < arguments.length; s++) {
					var f = arguments[s] != null ? Object(arguments[s]) : {},
						a = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(f).filter(function(C) {
						return Object.getOwnPropertyDescriptor(f, C).enumerable
					})), a.forEach(function(C) {
						g(o, C, f[C])
					})
				}
				return o
			}

			function g(o, s, f) {
				return s = y(s), s in o ? Object.defineProperty(o, s, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = f, o
			}

			function y(o) {
				var s = i(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function i(o, s) {
				if (typeof o != "object" || o === null) return o;
				var f = o[Symbol.toPrimitive];
				if (f !== void 0) {
					var a = f.call(o, s || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}
			let d = function(o) {
					return o.PURCHASE_WORKERS_PAID = "navigate to workers plan page", o.LIST_CONFIGS = "list hyperdrive configs", o.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", o.VIEW_CONFIG_DETAILS = "view hyperdrive config details", o.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", o.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", o.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", o.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", o.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", o.CLICK_QUICK_LINK = "click hyperdrive quick link", o
				}({}),
				u = function(o) {
					return o[o["connection string"] = 0] = "connection string", o[o.manual = 1] = "manual", o
				}({}),
				E = function(o) {
					return o[o.success = 0] = "success", o[o.failure = 1] = "failure", o
				}({});
			const t = (o, s = {}) => {
				r().sendEvent(o, c({}, s, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				_u: function() {
					return r
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
				r = "Magic network monitoring",
				c = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				lC: function() {
					return c
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
				c = "user journey"
		},
		"../react/pages/magic/packet-captures/constants.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				W_: function() {
					return r
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
				r = "Magic packet captures",
				c = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(K, _, n) {
			"use strict";
			n.d(_, {
				gb: function() {
					return t
				},
				iP: function() {
					return $
				},
				xL: function() {
					return N
				},
				rD: function() {
					return re
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
					return u
				},
				UA: function() {
					return h
				},
				K5: function() {
					return s
				},
				Ii: function() {
					return x
				},
				PJ: function() {
					return V
				},
				bK: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				y = n("../../../../node_modules/@cloudflare/elements/es/index.js");
			const i = () => r().createElement(d, null, r().createElement("svg", {
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
				d = (0, c.createComponent)(({
					theme: ee
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
				u = () => r().createElement(E, null, r().createElement("svg", {
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
				E = (0, c.createComponent)(({
					theme: ee
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
				t = () => r().createElement(o, null, r().createElement(y.Ei, {
					alt: "airplane",
					src: g,
					width: "85%"
				})),
				o = (0, c.createComponent)(({
					theme: ee
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
				s = () => r().createElement(f, null, r().createElement("svg", {
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
				f = (0, c.createComponent)(({
					theme: ee
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
				C = (0, c.createComponent)(({
					theme: ee
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
				m = () => r().createElement(v, null, r().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				v = (0, c.createComponent)(({
					theme: ee
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
				N = () => r().createElement(w, null, r().createElement("svg", {
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
				w = (0, c.createComponent)(({
					theme: ee
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
				x = () => r().createElement(l, null, r().createElement("svg", {
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
				l = (0, c.createComponent)(({
					theme: ee
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
				h = () => r().createElement(D, null, r().createElement("svg", {
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
				D = (0, c.createComponent)(({
					theme: ee
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
				$ = () => r().createElement("svg", {
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
				V = () => r().createElement("svg", {
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
				re = () => r().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				A2: function() {
					return d
				},
				He: function() {
					return y
				},
				N$: function() {
					return i
				},
				Qq: function() {
					return c
				},
				ST: function() {
					return g
				},
				wM: function() {
					return r
				}
			});
			var e = n("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const r = {
					PAGE: "apple-login"
				},
				c = "login-apple-jwt",
				g = "cf-test",
				y = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				i = u => [{
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
				d = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/pages/constants.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				A: function() {
					return m
				},
				C1: function() {
					return E
				},
				Dp: function() {
					return re
				},
				HD: function() {
					return w
				},
				IK: function() {
					return y
				},
				KP: function() {
					return R
				},
				L7: function() {
					return c
				},
				Li: function() {
					return C
				},
				Ni: function() {
					return D
				},
				OG: function() {
					return z
				},
				QF: function() {
					return Q
				},
				QV: function() {
					return h
				},
				Sx: function() {
					return x
				},
				Ub: function() {
					return ee
				},
				X3: function() {
					return o
				},
				aP: function() {
					return d
				},
				eO: function() {
					return s
				},
				fH: function() {
					return a
				},
				fQ: function() {
					return v
				},
				fR: function() {
					return e
				},
				hE: function() {
					return ne
				},
				iS: function() {
					return N
				},
				ku: function() {
					return V
				},
				nY: function() {
					return l
				},
				w3: function() {
					return g
				},
				wJ: function() {
					return u
				},
				wp: function() {
					return f
				},
				yu: function() {
					return t
				},
				zG: function() {
					return $
				}
			});
			const e = "api.pages.cloudflare.com",
				r = "cloudflare-pages",
				c = {
					dns: "https://cloudflare.com/dns",
					access: "https://www.cloudflare.com/teams-access/",
					access_dashboard: "https://one.dash.cloudflare.com",
					community: "https://community.cloudflare.com/tag/cloudflarepages",
					documentation: {
						configuration: "https://developers.cloudflare.com/pages/configuration/",
						gettingStarted: "https://developers.cloudflare.com/pages/getting-started",
						configuringBuilds: "https://developers.cloudflare.com/pages/platform/build-configuration",
						supportedFrameworks: "https://developers.cloudflare.com/pages/platform/build-configuration#framework-presets",
						supportedTools: "https://developers.cloudflare.com/pages/configuration/language-support-and-tools",
						supportedLanguages: "https://developers.cloudflare.com/pages/configuration/language-support-and-tools/#supported-languages-and-tools",
						deployingBranches: "https://developers.cloudflare.com/pages/platform/preview-deployments",
						buildPaths: " https://developers.cloudflare.com/pages/configuration/build-watch-paths",
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
						branchConfig: "https://developers.cloudflare.com/pages/platform/branch-build-controls/",
						buildImageVersion: "https://developers.cloudflare.com/pages/platform/language-support-and-tools/",
						compatibilityDates: "https://developers.cloudflare.com/workers/platform/compatibility-dates/",
						compatibilityFlags: "https://developers.cloudflare.com/workers/platform/compatibility-dates/#compatibility-flags",
						usageModels: "https://developers.cloudflare.com/workers/platform/pricing#usage-models",
						functionsPricing: "https://developers.cloudflare.com/pages/platform/functions/pricing",
						requestLimitFailureMode: "https://developers.cloudflare.com/pages/platform/functions/pricing/#free-plan",
						smartPlacement: "https://developers.cloudflare.com/pages/platform/functions/smart-placement",
						notifications: "https://developers.cloudflare.com/fundamentals/notifications/",
						buildCaching: "https://developers.cloudflare.com/pages/platform/build-caching/",
						userCpuLimits: "https://developers.cloudflare.com/workers/platform/pricing/#standard-usage-model",
						gitIntegration: "https://developers.cloudflare.com/pages/platform/git-integration/#troubleshooting",
						configFile: "https://developers.cloudflare.com/pages/functions/wrangler-configuration/"
					},
					github: {
						appHomepage: `https://github.com/apps/${r}`,
						newInstallation: `https://github.com/apps/${r}/installations/new`
					},
					gitlab: {
						authorize: "https://gitlab.com/oauth/authorize",
						manage: "https://gitlab.com/-/profile/applications"
					},
					webAnalytics: "https://developers.cloudflare.com/analytics/web-analytics/"
				},
				g = "Allow Members - Cloudflare Pages",
				y = 58,
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
				d = "production",
				u = 2e3,
				E = 100,
				t = 350,
				o = 1e7,
				s = ["Success:", "Error:", "Failed:"],
				f = 10,
				a = "_headers",
				C = "_redirects",
				m = "_routes.json",
				v = "_worker.js",
				N = "do-a-barrel-roll",
				w = [a, C, m, v],
				x = 1024 * 1024 * 25,
				l = 1e3,
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
					toggledPagesSmartPlacement: "toggle pages smart placement"
				},
				D = 1e5,
				$ = 75e3,
				V = "workers",
				re = "cloudflare_pages_build_caching",
				ne = 2;
			let ee = function(te) {
				return te[te.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", te[te.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", te[te.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", te[te.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", te[te.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", te[te.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", te
			}({});
			const Q = 1,
				R = 2,
				z = 2
		},
		"../react/pages/pages/routes.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Hv: function() {
					return c
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
				g = y => `${y.subdomain}.pages.dev`
		},
		"../react/pages/r2/routes.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Hv: function() {
					return c
				},
				Jg: function() {
					return i
				},
				_j: function() {
					return r
				},
				pZ: function() {
					return d
				},
				vF: function() {
					return y
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
				c = {
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
				g = t => {
					const o = "r2.cloudflarestorage.com";
					switch (t) {
						case "default":
							return o;
						case "eu":
							return `eu.${o}`
					}
				},
				y = (t, o) => {
					const s = g(o);
					return `https://${t}.${s}`
				},
				i = (t, o, s) => `${y(t,o)}/${s}`,
				d = () => "r2.dev",
				u = t => {
					const o = d();
					return `https://${t}.${o}`
				},
				E = (t, o) => `${u(t)}/${o}`
		},
		"../react/pages/security-center/tracking.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				R: function() {
					return e
				},
				v: function() {
					return r
				}
			});
			let e = function(c) {
				return c.LOAD_SCAN_INFO = "load url scan information", c.INITIATE_URL_SCAN = "initiate url scan", c
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
		"../react/pages/spectrum/tracking.tsx": function(K, _, n) {
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
		"../react/pages/traffic/argo/tracking.ts": function(K, _, n) {
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
		"../react/pages/traffic/load-balancing/tracking.ts": function(K, _, n) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(K, _, n) {
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
		"../react/pages/welcome/routes.ts": function(K, _, n) {
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
		"../react/pages/workers/entityTypes.ts": function(K, _, n) {
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
		"../react/pages/zoneless-workers/constants.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				IS: function() {
					return d
				},
				L7: function() {
					return y
				},
				Oj: function() {
					return s
				},
				QV: function() {
					return f
				},
				X$: function() {
					return v
				},
				X6: function() {
					return E
				},
				fE: function() {
					return u
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

			function e(w) {
				for (var x = 1; x < arguments.length; x++) {
					var l = arguments[x] != null ? Object(arguments[x]) : {},
						h = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(l).filter(function(D) {
						return Object.getOwnPropertyDescriptor(l, D).enumerable
					})), h.forEach(function(D) {
						r(w, D, l[D])
					})
				}
				return w
			}

			function r(w, x, l) {
				return x = c(x), x in w ? Object.defineProperty(w, x, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[x] = l, w
			}

			function c(w) {
				var x = g(w, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function g(w, x) {
				if (typeof w != "object" || w === null) return w;
				var l = w[Symbol.toPrimitive];
				if (l !== void 0) {
					var h = l.call(w, x || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(w)
			}
			const y = {
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
				d = "40rem",
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
				f = {
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
				C = "YYYY-MM-DD HH:mm:SS ZZ",
				m = "active",
				v = ["bundled", "unbound", "standard"],
				N = null
		},
		"../react/pages/zoneless-workers/routes.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Hv: function() {
					return d
				},
				L: function() {
					return c
				},
				Q9: function() {
					return g
				},
				_j: function() {
					return y
				},
				ky: function() {
					return r
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = u => `${u}.workers.dev`,
				c = (u, E, t) => `${t?`${t}.`:""}${u}.${r(E)}`,
				g = (u, E, t) => `https://${c(u,E,t)}`,
				y = {
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
				d = {
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
			(function(K, _) {
				_()
			})(this, function() {
				"use strict";

				function K() {
					var n = !0,
						e = !1,
						r = null,
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

					function g(m) {
						return !!(m && m !== document && m.nodeName !== "HTML" && m.nodeName !== "BODY" && "classList" in m && "contains" in m.classList)
					}

					function y(m) {
						var v = m.type,
							N = m.tagName;
						return !!(N == "INPUT" && c[v] && !m.readOnly || N == "TEXTAREA" && !m.readOnly || m.isContentEditable)
					}

					function i(m) {
						m.getAttribute("is-focus-visible") !== "" && m.setAttribute("is-focus-visible", "")
					}

					function d(m) {
						m.getAttribute("is-focus-visible") === "" && m.removeAttribute("is-focus-visible")
					}

					function u(m) {
						g(document.activeElement) && i(document.activeElement), n = !0
					}

					function E(m) {
						n = !1
					}

					function t(m) {
						!g(m.target) || (n || y(m.target)) && i(m.target)
					}

					function o(m) {
						!g(m.target) || m.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), d(m.target))
					}

					function s(m) {
						document.visibilityState == "hidden" && (e && (n = !0), f())
					}

					function f() {
						document.addEventListener("mousemove", C), document.addEventListener("mousedown", C), document.addEventListener("mouseup", C), document.addEventListener("pointermove", C), document.addEventListener("pointerdown", C), document.addEventListener("pointerup", C), document.addEventListener("touchmove", C), document.addEventListener("touchstart", C), document.addEventListener("touchend", C)
					}

					function a() {
						document.removeEventListener("mousemove", C), document.removeEventListener("mousedown", C), document.removeEventListener("mouseup", C), document.removeEventListener("pointermove", C), document.removeEventListener("pointerdown", C), document.removeEventListener("pointerup", C), document.removeEventListener("touchmove", C), document.removeEventListener("touchstart", C), document.removeEventListener("touchend", C)
					}

					function C(m) {
						m.target.nodeName.toLowerCase() !== "html" && (n = !1, a())
					}
					document.addEventListener("keydown", u, !0), document.addEventListener("mousedown", E, !0), document.addEventListener("pointerdown", E, !0), document.addEventListener("touchstart", E, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", o, !0), document.addEventListener("visibilitychange", s, !0), f(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function _(n) {
					var e;

					function r() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}
				typeof document != "undefined" && _(K)
			})
		},
		"../react/utils/api.ts": function(K, _, n) {
			"use strict";
			n.r(_), n.d(_, {
				attachAtokHeader: function() {
					return v
				},
				attachErrorHandler: function() {
					return x
				},
				authyAuthConfirmNumber: function() {
					return U
				},
				authyAuthPutSave: function() {
					return ue
				},
				basePath: function() {
					return C
				},
				fetchCertificateApiKey: function() {
					return ee
				},
				fetchUserServiceKey: function() {
					return re
				},
				performLogout: function() {
					return V
				},
				prependApiRoute: function() {
					return N
				},
				sendCookies: function() {
					return w
				},
				twoFacDisableDelete: function() {
					return te
				},
				twoFacGoogleAuthEnablePost: function() {
					return R
				},
				twoFacGoogleAuthQRCodeGet: function() {
					return z
				},
				updateCertificateApiKey: function() {
					return Q
				},
				updateUserServiceKey: function() {
					return ne
				},
				validateOptions: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = n.n(e),
				c = n("../react/app/providers/storeContainer.js"),
				g = n("../react/common/actions/notificationsActions.ts"),
				y = n("../react/utils/translator.tsx"),
				i = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				d = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				u = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = n.n(u),
				t = n("../../../../node_modules/@sentry/core/esm/exports.js");

			function o(X) {
				for (var W = 1; W < arguments.length; W++) {
					var O = arguments[W] != null ? Object(arguments[W]) : {},
						H = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(O).filter(function(J) {
						return Object.getOwnPropertyDescriptor(O, J).enumerable
					})), H.forEach(function(J) {
						s(X, J, O[J])
					})
				}
				return X
			}

			function s(X, W, O) {
				return W = f(W), W in X ? Object.defineProperty(X, W, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : X[W] = O, X
			}

			function f(X) {
				var W = a(X, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function a(X, W) {
				if (typeof X != "object" || X === null) return X;
				var O = X[Symbol.toPrimitive];
				if (O !== void 0) {
					var H = O.call(X, W || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)(X)
			}
			const C = "/api/v4",
				m = X => {
					X.url.charAt(0) !== "/" && (X.url = `/${X.url}`)
				},
				v = X => {
					n.g.bootstrap && n.g.bootstrap.atok && (X.headers = o({}, X.headers, {
						"X-ATOK": n.g.bootstrap.atok
					}))
				},
				N = X => {
					X.url = C + X.url
				},
				w = X => {
					X.credentials = "same-origin"
				},
				x = X => {
					const W = X.callback;
					X.callback = (O, H) => {
						O && !X.hideErrorAlert && l(O, X), W && W(O, H)
					}
				},
				l = (X, W) => {
					const O = X.body && X.body.errors;
					(O ? D(W, O) : $(W, X)).forEach(J => {
						(0, c.bh)().dispatch(g.IH("error", typeof J == "string" ? J : J.message)), E().sendEvent("error notification shown", {
							errorCode: typeof J == "string" ? void 0 : J.code
						}), {
							REDUX_LOGGER: void 0
						}.TESTING && n.g.logAppError(typeof J == "string" ? J : J.message)
					})
				};

			function h(X, W) {
				return !!(W.code === 1001 && X.url && X.url.match(/subscription/gi) || W.code === 10042 && X.url && X.url.match(/r2/gi))
			}
			const D = (X, W) => W.filter(O => !h(X, O)).map(({
					message: O,
					code: H,
					error_chain: J
				}) => {
					switch (H) {
						case 9300:
						case 9301:
						case 9303:
							V();
						default:
							break
					}
					const le = O.split(" ").length > 1,
						F = O.split(".").length > 1,
						oe = !le && F;
					let ge = O;
					if (oe) try {
						ge = (0, y.ZP)(O)
					} catch {}
					if (O.startsWith("billing.")) return {
						message: `Error while processing payment: ${ge}.`,
						code: H
					};
					const L = Array.isArray(J) ? J.map(A => A.message).join(". ") : "";
					return {
						message: `${ge}${typeof H!="undefined"?` (Code: ${H})`:""} ${L}`,
						code: H
					}
				}),
				$ = (X, W) => [`API Request Failed: ${X.method} ${X.url} (${W.status})`];
			e.beforeSend(m), e.beforeSend(v), e.beforeSend(N), e.beforeSend(w), e.beforeSend(x);
			const V = X => e.del("/user/sessions/current").then(W => {
				if (i.E.remove(d.Qq), X) window.location.href = X;
				else {
					var O, H;
					const J = (O = (H = W.body.result) === null || H === void 0 ? void 0 : H.redirect_uri) !== null && O !== void 0 ? O : "/login";
					window.location.href = J
				}
			}).catch(W => {
				console.error("Failed to logout", W), t.Tb(W)
			});

			function re(X) {
				return e.get("/user/service_keys/" + X)
			}

			function ne(X, W) {
				return e.put("/user/service_keys/" + X, {
					body: W
				})
			}

			function ee(X) {
				return e.post("/user/service_keys/certificateapi", {
					body: X
				})
			}

			function Q(X) {
				return e.put("/user/service_keys/certificateapi", {
					body: X
				})
			}
			const R = function(X, W) {
					var O = {
						google_auth_code: X
					};
					return e.post("/user/two_factor_authentication/google_authenticator/enable", {
						body: O
					}, W)
				},
				z = function(X) {
					return e.get("/user/two_factor_authentication/google_authenticator/qr_code", void 0, X)
				},
				te = function(X, W) {
					var O = {
						auth_token: X
					};
					return e.del("/user/two_factor_authentication", {
						body: O
					}, W)
				},
				U = function(X, W) {
					return e.post("/user/two_factor_authentication", {
						body: X
					}, W)
				},
				ue = function(X, W) {
					return e.put("/user/two_factor_authentication", {
						body: X
					}, W)
				}
		},
		"../react/utils/bootstrap.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				$8: function() {
					return r
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
					var y, i, d;
					return (y = window) === null || y === void 0 || (i = y.bootstrap) === null || i === void 0 || (d = i.data) === null || d === void 0 ? void 0 : d.security_token
				},
				r = () => {
					var y, i, d;
					return !!((y = n.g.bootstrap) === null || y === void 0 || (i = y.data) === null || i === void 0 || (d = i.user) === null || d === void 0 ? void 0 : d.id)
				},
				c = () => {
					var y, i;
					return !!((y = n.g.bootstrap) === null || y === void 0 || (i = y.data) === null || i === void 0 ? void 0 : i.is_kendo)
				},
				g = () => {
					var y, i, d, u;
					return (y = window) === null || y === void 0 || (i = y.bootstrap) === null || i === void 0 || (d = i.data) === null || d === void 0 || (u = d.user) === null || u === void 0 ? void 0 : u.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				O5: function() {
					return g
				},
				Xm: function() {
					return c
				},
				kT: function() {
					return d
				},
				wV: function() {
					return u
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const r = () => {
					var t;
					return ((t = window) === null || t === void 0 ? void 0 : t.OnetrustActiveGroups) || ""
				},
				c = () => (r() || "").indexOf("C0002") !== -1,
				g = () => (r() || "").indexOf("C0003") !== -1,
				y = () => (r() || "").indexOf("C0004") !== -1,
				i = () => (r() || "").indexOf("C0005") !== -1,
				d = t => {
					const o = ".cloudflare.com";
					document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${o}`
				},
				u = () => {
					var t;
					const o = (t = window.OneTrust) === null || t === void 0 ? void 0 : t.getGeolocationData();
					return (o == null ? void 0 : o.country) || ""
				},
				E = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				AI: function() {
					return v
				},
				S8: function() {
					return m
				},
				ZW: function() {
					return i
				},
				ay: function() {
					return N
				},
				fh: function() {
					return w
				},
				ly: function() {
					return u
				},
				th: function() {
					return y
				},
				ti: function() {
					return E
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				r = n.n(e),
				c = n("../../../common/intl/intl-types/src/index.ts"),
				g = n("../../../common/util/types/src/utils/index.ts");
			const y = "cf-sync-locale-with-cps",
				i = c.Q.en_US,
				d = "en_US",
				u = "cf-locale",
				E = D => (0, g.Yd)(c.Q).find($ => c.Q[$] === D) || d,
				t = [],
				o = [],
				s = [c.Q.de_DE, c.Q.en_US, c.Q.es_ES, c.Q.fr_FR, c.Q.it_IT, c.Q.pt_BR, c.Q.ko_KR, c.Q.ja_JP, c.Q.zh_CN, c.Q.zh_TW],
				f = [c.Q.de_DE, c.Q.en_US, c.Q.es_ES, c.Q.es_CL, c.Q.es_EC, c.Q.es_MX, c.Q.es_PE, c.Q.fr_FR, c.Q.it_IT, c.Q.ja_JP, c.Q.ko_KR, c.Q.pt_BR, c.Q.zh_CN, c.Q.zh_TW],
				a = {
					test: [...s, ...o, ...t],
					development: [...s, ...o, ...t],
					staging: [...s, ...o, ...t],
					production: [...s, ...o]
				},
				C = {
					test: [...f, ...o, ...t],
					development: [...f, ...o, ...t],
					staging: [...f, ...o, ...t],
					production: [...f, ...o]
				},
				m = (D, $) => {
					const V = c.Q[$];
					return D ? a.production.includes(V) : C.production.includes(V)
				},
				v = D => Object.keys(c.Q).filter($ => m(D, $)),
				N = D => {
					const $ = c.Q[D];
					return o.includes($)
				},
				w = (D, $) => D ? x[$] : l[$],
				x = {
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
				l = {
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
		"../react/utils/translator.tsx": function(K, _, n) {
			"use strict";
			n.d(_, {
				QT: function() {
					return f
				},
				Vb: function() {
					return d
				},
				Yi: function() {
					return E
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
					return s
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = n("../../../common/intl/intl-core/src/Translator.ts"),
				c = n("../../../common/intl/intl-react/src/index.ts");
			const g = n("../flags.js").J8,
				y = new r.Z({
					pseudoLoc: g("is_pseudo_loc")
				});

			function i(a, ...C) {
				return y.t(a, ...C)
			}
			const d = y;

			function u(a, ...C) {
				return markdown(i(a, C))
			}

			function E(a) {
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
			const o = c.cC,
				s = c.oc,
				f = c.QT
		},
		"../react/utils/url.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Ct: function() {
					return w
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
					return v
				},
				Pd: function() {
					return m
				},
				Uh: function() {
					return X
				},
				Y_: function() {
					return f
				},
				e1: function() {
					return N
				},
				el: function() {
					return ne
				},
				hW: function() {
					return Q
				},
				pu: function() {
					return J
				},
				qR: function() {
					return re
				},
				td: function() {
					return C
				},
				uW: function() {
					return z
				}
			});
			var e = n("../../../../node_modules/query-string/query-string.js"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				g = n("../react/pages/r2/routes.ts"),
				y = n("../react/pages/zoneless-workers/routes.ts"),
				i = n("../react/pages/pages/routes.ts");

			function d(F) {
				for (var oe = 1; oe < arguments.length; oe++) {
					var ge = arguments[oe] != null ? Object(arguments[oe]) : {},
						L = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(ge).filter(function(A) {
						return Object.getOwnPropertyDescriptor(ge, A).enumerable
					})), L.forEach(function(A) {
						u(F, A, ge[A])
					})
				}
				return F
			}

			function u(F, oe, ge) {
				return oe = E(oe), oe in F ? Object.defineProperty(F, oe, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[oe] = ge, F
			}

			function E(F) {
				var oe = t(F, "string");
				return typeof oe == "symbol" ? oe : String(oe)
			}

			function t(F, oe) {
				if (typeof F != "object" || F === null) return F;
				var ge = F[Symbol.toPrimitive];
				if (ge !== void 0) {
					var L = ge.call(F, oe || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (oe === "string" ? String : Number)(F)
			}
			const {
				endsWithSlash: o
			} = c.default, s = (F, oe) => {
				const ge = F.replace(o, "").split("/");
				return ge.slice(0, 2).concat([oe]).concat(ge.slice(3)).join("/")
			}, f = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), a = F => `/${F.replace(o,"").replace(/^\//,"")}`, C = F => v("add-site", F), m = F => v("billing", F), v = (F, oe) => oe ? `/${oe}${F?`/${F}`:""}` : `/?to=/:account/${F}`, N = () => {
				const F = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return F ? F[1] : null
			}, w = (F, oe) => r().stringify(d({}, r().parse(F), oe)), x = (F = "") => F.toString().replace(/([\/]{1,})$/, ""), l = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/forgot-email", "/login-help", "/profile", "/zones"], h = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, D = /^\/(\w{32,})(\/[^.]*)?/, $ = F => l.includes(F), V = F => !$(F), re = F => !$(F) && D.test(F), ne = F => !$(F) && h.test(F), ee = F => h.exec(F), Q = F => {
				if (ne(F)) return F.split("/").filter(oe => oe.length > 0)[1]
			}, R = F => D.exec(F), z = F => {
				if (re(F)) {
					const oe = R(F);
					if (oe) return oe[1]
				}
			}, te = F => re(F) && F.split("/")[2] === "register-domain", U = F => te(F) ? F.split("/") : null, ue = F => {
				if (ne(F)) {
					const [, , , oe, ge, L, A, M] = F.split("/");
					return oe === "traffic" && ge === "load-balancing" && L === "pools" && A === "edit" && M
				}
			}, X = F => {
				const oe = U(F);
				if (oe) return oe[3]
			}, W = (F, oe) => {
				var ge, L;
				return ((ge = F.pattern.match(/\:/g)) !== null && ge !== void 0 ? ge : []).length - ((L = oe.pattern.match(/\:/g)) !== null && L !== void 0 ? L : []).length
			}, O = [...Object.values(g._j), ...Object.values(y._j), ...Object.values(i._j)].sort(W);

			function H(F) {
				if (!V(F)) return F;
				for (const M of O)
					if (M.expression.test(F)) return M.pattern;
				const oe = U(F);
				if (oe) {
					const [, , M, , ...Z] = oe;
					return `/:accountId/${M}/:domainName/${Z.join("/")}`
				}
				if (ue(F)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const L = ee(F);
				if (L) {
					const [, , , , M] = L;
					return `/:accountId/:zoneName${M||""}`
				}
				const A = R(F);
				if (A) {
					const [, , M] = A;
					return `/:accountId${M||""}`
				}
				return F
			}

			function J(F) {
				if (!!F) try {
					const ge = F.split(".").pop();
					if (ge && ge.length > 0) return ge
				} catch {}
			}

			function le(F, oe = document.location.href) {
				try {
					const ge = new URL(F),
						L = new URL(oe);
					if (ge.origin === L.origin) return `${ge.pathname}${ge.search}${ge.hash}`
				} catch {}
			}
		},
		"../react/utils/zaraz.ts": function(K, _, n) {
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
		"../utils/getDashVersion.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				p: function() {
					return c
				},
				t: function() {
					return r
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const r = () => {
					var g, y;
					return (g = window) === null || g === void 0 || (y = g.build) === null || y === void 0 ? void 0 : y.dashVersion
				},
				c = () => {
					var g;
					return ((0, e.parse)((g = document) === null || g === void 0 ? void 0 : g.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Wi: function() {
					return Xe
				},
				IM: function() {
					return tt
				},
				yV: function() {
					return Ke
				},
				Ug: function() {
					return et
				},
				v_: function() {
					return Ve
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = n.n(e),
				c = n("../react/utils/bootstrap.ts"),
				g = n("../react/app/providers/storeContainer.js"),
				y = n("../react/common/selectors/languagePreferenceSelector.ts"),
				i = n("../flags.js"),
				d = n("../../../../node_modules/cookie/index.js"),
				u = n("../react/utils/url.ts"),
				E = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../../../../node_modules/lodash-es/memoize.js"),
				s = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				f = n("../utils/getDashVersion.ts"),
				a = n("../react/common/selectors/accountSelectors.ts");

			function C(ce) {
				for (var fe = 1; fe < arguments.length; fe++) {
					var P = arguments[fe] != null ? Object(arguments[fe]) : {},
						G = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(P).filter(function(de) {
						return Object.getOwnPropertyDescriptor(P, de).enumerable
					})), G.forEach(function(de) {
						m(ce, de, P[de])
					})
				}
				return ce
			}

			function m(ce, fe, P) {
				return fe = v(fe), fe in ce ? Object.defineProperty(ce, fe, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[fe] = P, ce
			}

			function v(ce) {
				var fe = N(ce, "string");
				return typeof fe == "symbol" ? fe : String(fe)
			}

			function N(ce, fe) {
				if (typeof ce != "object" || ce === null) return ce;
				var P = ce[Symbol.toPrimitive];
				if (P !== void 0) {
					var G = P.call(ce, fe || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (fe === "string" ? String : Number)(ce)
			}
			const w = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				x = (0, o.Z)(ce => {
					try {
						return w.assertDecode((0, d.parse)(ce))
					} catch (fe) {
						return console.error(fe), {}
					}
				}),
				l = ce => (fe, P, G) => {
					try {
						const Be = window.location.pathname,
							ke = (0, g.bh)().getState(),
							Ce = x(document.cookie),
							$e = C({
								page: (0, u.Fl)(G.page || window.location.pathname),
								dashVersion: (0, f.t)()
							}, Ce);
						if (fe === "identify") {
							var de, Le;
							const Ye = {
								gates: (0, s.T2)(ke) || {},
								country: (de = n.g) === null || de === void 0 || (Le = de.bootstrap) === null || Le === void 0 ? void 0 : Le.ip_country
							};
							return ce(fe, P, C({}, $e, Ye, G))
						} else {
							const Ye = {
								accountId: (0, u.uW)(Be),
								zoneName: (0, u.hW)(Be),
								domainName: (0, u.Uh)(Be)
							};
							if ((0, u.qR)(Be)) {
								var Me;
								const Re = (0, a.D0)(ke);
								Ye.isEntAccount = Re == null || (Me = Re.meta) === null || Me === void 0 ? void 0 : Me.has_enterprise_zones
							}
							if ((0, u.el)(Be)) {
								var Ue;
								const Re = (0, E.nA)(ke);
								Ye.zoneId = Re == null ? void 0 : Re.id, Ye.plan = Re == null || (Ue = Re.plan) === null || Ue === void 0 ? void 0 : Ue.legacy_id
							}
							return ce(fe, P, C({}, $e, Ye, G))
						}
					} catch (Be) {
						return console.error(Be), ce(fe, P, G)
					}
				},
				h = ce => async (fe, P, G) => {
					try {
						return await ce(fe, P, G)
					} catch (de) {
						if (console.error(de), !Ve()) throw de;
						return {
							status: "rejected",
							reason: de
						}
					}
				};
			var D = n("../react/common/middleware/sparrow/errors.ts"),
				$ = n("../react/pages/firewall/bots/tracking.ts"),
				V = n("../react/pages/caching/tracking.tsx"),
				re = n("../react/pages/magic/packet-captures/constants.ts"),
				ne = n("../react/pages/firewall/page-shield/tracking.ts"),
				ee = n("../react/pages/firewall/rulesets/tracking.tsx"),
				Q = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				R = n("../react/pages/spectrum/tracking.tsx"),
				z = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				te = n("../react/pages/security-center/tracking.ts"),
				U = n("../react/pages/firewall/api-shield/tracking.ts"),
				ue = n("../react/pages/home/configurations/lists/tracking.ts"),
				X = n("../react/pages/traffic/load-balancing/tracking.ts"),
				W = n("../react/pages/home/alerts/tracking.ts"),
				O = n("../react/pages/dns/dns-records/tracking.ts"),
				H = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				J = n("../react/pages/traffic/argo/tracking.ts"),
				le = n("../react/pages/magic/network-monitoring/constants.ts"),
				F = n("../react/pages/firewall/security-analytics/logs/constants.ts"),
				oe = n("../react/pages/magic/overview/tracking.ts"),
				ge = n("../react/pages/hyperdrive/tracking.ts"),
				L = n("../react/pages/home/domain-registration/tracking.ts"),
				A = n("../react/pages/zoneless-workers/constants.ts"),
				M = n("../react/pages/pages/constants.ts");
			const ae = ((ce, fe, ...P) => t.eg.union([t.eg.literal(ce), t.eg.literal(fe), ...P.map(G => t.eg.literal(G))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click cancel downgrade", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click deflect community TSF (3.0)", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on edit snippet", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "Explore demo button click", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Free Long Wait", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open configuration switcher sidemodal", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "Request trial button click", "resend verification email", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select file", "Select hostname success", "select language", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", A.QV.clickedDownloadAnalytics, A.QV.clickedPrintAnalytics, A.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", M.QV.toggledPagesSmartPlacement, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", $.N3.INITIAL_FETCH_SCORES, $.N3.FETCH_CONFIGURATION, $.N3.INITIAL_FETCH_TIME_SERIES, $.N3.INITIAL_FETCH_ATTRIBUTES, $.N3.UPDATE_SETTINGS, $.N3.DELETE_RULE, $.N3.UPDATE_RULE, $.N3.FETCH_RULES, $.N3.CONFIGURE_BOT_MANAGEMENT, $.N3.WAF_RULES_REDIRECT, z.F.TOGGLE_TCP_PROTECTION, z.F.CREATE_SYN_PROTECTION_RULE, z.F.UPDATE_SYN_PROTECTION_RULE, z.F.CREATE_TCP_FLOW_PROTECTION_RULE, z.F.UPDATE_TCP_FLOW_PROTECTION_RULE, z.F.CREATE_SYN_PROTECTION_FILTER, z.F.UPDATE_SYN_PROTECTION_FILTER, z.F.CREATE_TCP_FLOW_PROTECTION_FILTER, z.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, ne.F.MANAGE_PAGE_SHIELD_POLICY, ne.F.CONFIGURE_PAGE_SHIELD, ne.F.VIEW_DETECTED_CONNECTIONS, ne.F.VIEW_DETECTED_SCRIPTS, ne.F.VIEW_PAGE_SHIELD_POLICIES, ne.F.VIEW_PAGE_SHIELD_SETTINGS, ue.y.CREATE_LIST, ue.y.DELETE_LIST, ue.y.ADD_LIST_ITEM, ue.y.DELETE_LIST_ITEM, ge.KO.PURCHASE_WORKERS_PAID, ge.KO.LIST_CONFIGS, ge.KO.CREATE_HYPERDRIVE_CONFIG, ge.KO.VIEW_CONFIG_DETAILS, ge.KO.UPDATE_CACHING_SETTINGS, ge.KO.DELETE_HYPERDRIVE_CONFIG, ge.KO.CLICK_HYPERDRIVE_DOCUMENTATION, ge.KO.CLICK_GET_STARTED_GUIDE, ge.KO.CLICK_CONNECTIVITY_GUIDES, ge.KO.CLICK_QUICK_LINK, R.N.CNAME, R.N.IP_ADDRESS, R.N.LB, R.N.UPDATE_CNAME, R.N.UPDATE_IP_ADDRESS, R.N.UPDATE_LB, R.N.DISABLE, V.N.TIERED_CACHE, V.N.CACHE_PURGE, V.N.CACHE_ANALYTICS, ...(0, ee.x4)(), Q.N.CREATE, Q.N.EVENTS, Q.N.ANALYTICS, Q.N.UPDATE, Q.N.GENERATE_PREVIEW, te.R.INITIATE_URL_SCAN, te.R.LOAD_SCAN_INFO, te.v.EXPAND_INSIGHT_ROW, te.v.CLICK_RESOLVE_BUTTON, te.v.FOLLOW_RESOLVE_URL, te.v.MANAGE_INSIGHT, te.v.CLICK_SCAN_NOW, te.v.CLICK_EXPORT_INSIGHTS, U.Fj[U.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, U.Fj[U.kq.ENDPOINT_MANAGEMENT].detailedMetrics, U.Fj[U.kq.ENDPOINT_MANAGEMENT].createEndpoint, U.Fj[U.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, U.Fj[U.kq.ENDPOINT_MANAGEMENT].deployRouting, U.Fj[U.kq.ENDPOINT_MANAGEMENT].deleteRouting, U.Fj[U.kq.API_DISCOVERY].viewDiscoveredEndpoints, U.Fj[U.kq.API_DISCOVERY].saveDiscoveredEndpoint, U.Fj[U.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, U.Fj[U.kq.SCHEMA_VALIDATION].viewSchemasList, U.Fj[U.kq.SCHEMA_VALIDATION].uploadSchema, U.Fj[U.kq.SCHEMA_VALIDATION].viewSchemaAdoption, U.Fj[U.kq.SCHEMA_VALIDATION].downloadSchema, U.Fj[U.kq.SCHEMA_VALIDATION].deleteSchema, U.Fj[U.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, U.Fj[U.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, U.Fj[U.kq.SEQUENCE_ANALYTICS].viewSequencesPage, U.Fj[U.kq.JWT_VALIDATION].viewJWTRules, U.Fj[U.kq.JWT_VALIDATION].addJWTRule, U.Fj[U.kq.JWT_VALIDATION].editJWTRule, U.Fj[U.kq.JWT_VALIDATION].deleteJWTRule, U.Fj[U.kq.JWT_VALIDATION].reprioritizeJWTRule, U.Fj[U.kq.JWT_VALIDATION].viewJWTConfigs, U.Fj[U.kq.JWT_VALIDATION].addJWTConfig, U.Fj[U.kq.JWT_VALIDATION].editJWTConfig, U.Fj[U.kq.JWT_VALIDATION].deleteJWTConfig, U.Fj[U.kq.SETTINGS].redirectToFirewallRulesTemplate, U.Fj[U.kq.SETTINGS].redirectToPages, U.Fj[U.kq.SETTINGS].listSessionIdentifiers, U.Fj[U.kq.SETTINGS].listRequestsContainingSessionIdentifiers, U.Fj[U.kq.SETTINGS].addOrRemoveSessionIdentifiers, U.Fj[U.kq.SEQUENCE_RULES].listSequenceRules, U.Fj[U.kq.SEQUENCE_RULES].deleteSequenceRule, U.Fj[U.kq.SEQUENCE_RULES].reorderSequenceRule, U.Fj[U.kq.SEQUENCE_RULES].createSequenceRule, U.Fj[U.kq.SEQUENCE_RULES].editSequenceRule, X.Z.CREATE_AND_DEPLOY, X.Z.ANALYTICS, W.y.SECONDARY_DNS_NOTIFICATION_CREATE, W.y.SECONDARY_DNS_NOTIFICATION_UPDATE, W.y.SECONDARY_DNS_NOTIFICATION_DELETE, O.U.ZONE_TRANSFER_SUCCESS, O.U.DNS_RECORD_CREATE, O.U.DNS_RECORD_UPDATE, O.U.DNS_RECORD_DELETE, H.Y.PEER_DNS_CREATE, H.Y.PEER_DNS_UPDATE, H.Y.PEER_DNS_DELETE, H.Y.ZONE_TRANSFER_ENABLE, H.Y.ZONE_TRANSFER_DISABLE, J.V.ARGO_ENABLEMENT, J.V.ARGO_GEO_ANALYTICS_FETCH, J.V.ARGO_GLOBAL_ANALYTICS_FETCH, re.X.VIEW_BUCKETS_LIST, re.X.CREATE_BUCKET, re.X.VALIDATE_BUCKET, re.X.DELETE_BUCKET, re.X.VIEW_CAPTURES_LIST, re.X.CREATE_SIMPLE_CAPTURE, re.X.CREATE_FULL_CAPTURE, re.X.VIEW_FULL_CAPTURE, re.X.DOWNLOAD_SIMPLE_CAPTURE, le.bK.VIEW_RULES, le.bK.CREATE_RULE, le.bK.UPDATE_RULE, le.bK.DELETE_RULE, le.bK.VIEW_CONFIGURATION, le.bK.CREATE_CONFIGURATION, le.bK.UPDATE_CONFIGURATION, le.bK.DELETE_CONFIGURATION, oe.r8.VIEW_ALERTS, oe.r8.VIEW_ALERTS_HISTORY, oe.r8.MAGIC_OVERVIEW_ANALYTICS, F.o4.CLICK_ADAPTIVE_SAMPLING, F.o4.CLICK_TO_LOG_EXPLORER_BANNER, F.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, F.o4.CLICK_SWITCH_TO_RAW_LOGS, F.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", L.U.REGISTER_DOMAIN_SEARCH_SUBMIT, L.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, L.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, L.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, L.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, L.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, L.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, L.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, L.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, L.U.REGISTER_DOMAIN_CHECKOUT_ERROR, L.U.TRANSFER_DOMAIN_CHANGE_STEP, L.U.RENEW_DOMAIN_COMPLETED, L.U.RESTORE_DOMAIN_INIT, L.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, L.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, L.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, L.U.RESTORE_DOMAIN_FAILURE, L.U.RESTORE_DOMAIN_COMPLETED, L.U.DOMAIN_DELETE_INIT, L.U.DOMAIN_DELETE_COMPLETED, L.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, L.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, L.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, L.U.DOMAIN_DELETE_CONFIRM_DELETE, L.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, L.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, L.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, L.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, L.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL),
				_e = t.eg.exactStrict(t.eg.object({
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
				De = (ce, fe) => {
					const [P, G] = Oe(fe);
					let de, Le;
					return (0, t.nM)(ae.decode(ce)) && (de = new D.Uh(ce)), G && G.length > 0 && (Le = new D.oV(ce, G)), [P, de, Le]
				},
				Oe = ce => {
					const fe = _e.decode(ce);
					if ((0, t.nM)(fe)) {
						const P = fe.left.map(({
							context: G
						}) => G.map(({
							key: de
						}) => de)).reduce((G, de) => G.concat(de), []).filter(G => G in ce);
						return [B(P, ce), P]
					}
					return [ce, []]
				},
				B = (ce, fe) => Object.entries(fe).reduce((P, [G, de]) => (ce.includes(G) || (P[G] = de), P), {}),
				ye = ce => (fe, P, G) => {
					const [de, Le, Me] = De(P, G);
					if (Le) throw Le;
					return Me && console.error(Me), ce(fe, P, de)
				};
			var Ie = n("../react/utils/zaraz.ts");
			const Fe = {
					identify: !0
				},
				xe = ce => (fe, P, G) => (Fe[P] || Ie.tg === null || Ie.tg === void 0 || Ie.tg.track(P, G), ce(fe, P, G));
			var je = n("../react/utils/cookiePreferences.ts");

			function We(ce) {
				for (var fe = 1; fe < arguments.length; fe++) {
					var P = arguments[fe] != null ? Object(arguments[fe]) : {},
						G = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(P).filter(function(de) {
						return Object.getOwnPropertyDescriptor(P, de).enumerable
					})), G.forEach(function(de) {
						He(ce, de, P[de])
					})
				}
				return ce
			}

			function He(ce, fe, P) {
				return fe = ot(fe), fe in ce ? Object.defineProperty(ce, fe, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[fe] = P, ce
			}

			function ot(ce) {
				var fe = Je(ce, "string");
				return typeof fe == "symbol" ? fe : String(fe)
			}

			function Je(ce, fe) {
				if (typeof ce != "object" || ce === null) return ce;
				var P = ce[Symbol.toPrimitive];
				if (P !== void 0) {
					var G = P.call(ce, fe || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (fe === "string" ? String : Number)(ce)
			}
			const et = ce => {
					r().init(We({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Ve() && !(0, c.gm)() && Xe(),
						middlewares: [h, ye, l, xe]
					}, ce))
				},
				Ke = () => {
					r().identify(We({}, (0, e.getAttribution)(), {
						locale: (0, y.r)((0, g.bh)().getState()),
						isCloudflare: !!(0, i.Jd)()
					}))
				},
				Ve = () => !0,
				tt = () => {
					(0, je.kT)("sparrow_id")
				},
				Xe = () => (0, je.Xm)()
		},
		"../utils/initStyles.ts": function(K, _, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = n("../react/app/providers/storeContainer.js");
			const c = "cfBaseStyles",
				g = document.head || document.getElementsByTagName("head")[0],
				y = d => {
					const u = [];
					for (let E in d.colors) {
						const t = d.colors[E];
						if (Array.isArray(t) && E !== "categorical")
							for (let o = 0; o < t.length; ++o) u.push(`--cf-${E}-${o}:${t[o]};`)
					}
					return u.join(`
`)
				},
				i = () => {
					const d = (0, e.Yc)(),
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
      background-color: ${d?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${d?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${d?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${d?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${d?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${d?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
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
      ${y(e.Rl)}
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
					let E = document.getElementById(c);
					E ? E.innerText = "" : (E = document.createElement("style"), E.id = c, g.appendChild(E)), E.appendChild(document.createTextNode(u)), (0, r.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(i), _.Z = i
		},
		"../utils/sentry/lastSentEventId.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				e: function() {
					return r
				}
			});
			const r = (() => {
				let c = "";
				return {
					setEventId: i => (!i || typeof i != "string" || (c = i), c),
					getEventId: () => c
				}
			})()
		},
		"../utils/zaraz.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Ro: function() {
					return o
				},
				bM: function() {
					return u
				},
				tg: function() {
					return d
				},
				yn: function() {
					return t
				}
			});

			function e(s) {
				for (var f = 1; f < arguments.length; f++) {
					var a = arguments[f] != null ? Object(arguments[f]) : {},
						C = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(a).filter(function(m) {
						return Object.getOwnPropertyDescriptor(a, m).enumerable
					})), C.forEach(function(m) {
						r(s, m, a[m])
					})
				}
				return s
			}

			function r(s, f, a) {
				return f = c(f), f in s ? Object.defineProperty(s, f, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[f] = a, s
			}

			function c(s) {
				var f = g(s, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function g(s, f) {
				if (typeof s != "object" || s === null) return s;
				var a = s[Symbol.toPrimitive];
				if (a !== void 0) {
					var C = a.call(s, f || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(s)
			}
			const y = {
					track: (s, f) => null,
					set: (s, f) => console.log(`zaraz.set(${s}, ${f})`)
				},
				i = {
					track: (s, f) => {
						var a;
						(a = window.zaraz) === null || a === void 0 || a.track(s, e({}, f, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (s, f) => {
						var a;
						return (a = window.zaraz) === null || a === void 0 ? void 0 : a.set(s, f)
					}
				};
			let d;
			const u = () => {
					window.zaraz, d = i
				},
				E = ["email", "first_name", "last_name"],
				t = s => {
					E.forEach(f => {
						var a;
						(a = d) === null || a === void 0 || a.set(f, s[f])
					})
				},
				o = () => {
					t({})
				}
		},
		"../../../common/intl/intl-core/src/Translator.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Z: function() {
					return x
				}
			});
			var e = n("../../../../node_modules/node-polyglot/index.js"),
				r = n.n(e),
				c = n("../../../common/intl/intl-types/src/index.ts"),
				g = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				y = n("../../../../node_modules/lodash/mapValues.js"),
				i = n.n(y);

			function d(l) {
				for (var h = 1; h < arguments.length; h++) {
					var D = arguments[h] != null ? Object(arguments[h]) : {},
						$ = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(D).filter(function(V) {
						return Object.getOwnPropertyDescriptor(D, V).enumerable
					})), $.forEach(function(V) {
						u(l, V, D[V])
					})
				}
				return l
			}

			function u(l, h, D) {
				return h = E(h), h in l ? Object.defineProperty(l, h, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[h] = D, l
			}

			function E(l) {
				var h = t(l, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function t(l, h) {
				if (typeof l != "object" || l === null) return l;
				var D = l[Symbol.toPrimitive];
				if (D !== void 0) {
					var $ = D.call(l, h || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(l)
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
				s = {
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
					option: d({}, o),
					reset() {
						this.option = d({}, o)
					},
					table: s,
					pad(l, h) {
						for (var D = Math.floor(l.length * h / 2), $ = D, V = l; D-- > 0;) V = " " + V;
						for (; $-- > 0;) V = V + " ";
						return V
					},
					str(l) {
						for (var h = this.option, D = h.startDelimiter || h.delimiter, $ = h.endDelimiter || h.delimiter, V = new RegExp(D + "\\s*[\\w\\.\\s*]+\\s*" + $, "g"), re, ne = [], ee = 0, Q = 0, R = "", z, te; re = V.exec(l);) ne.push(re);
						for (var U = ne[Q++] || {
								index: -1
							}; ee < l.length;) {
							if (U.index === ee) {
								R += U[0], ee += U[0].length, U = ne[Q++] || {
									index: -1
								};
								continue
							}
							if (z = h.override !== void 0 ? h.override : l[ee], te = s[z], te) {
								var ue = l.length % te.length;
								z = te[ue]
							}
							R += z, ee++
						}
						return h.prepend + this.pad(R, h.extend) + h.append
					}
				},
				C = n("../../../common/intl/intl-core/src/errors.ts");

			function m(l, h, D) {
				return h = v(h), h in l ? Object.defineProperty(l, h, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[h] = D, l
			}

			function v(l) {
				var h = N(l, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function N(l, h) {
				if (typeof l != "object" || l === null) return l;
				var D = l[Symbol.toPrimitive];
				if (D !== void 0) {
					var $ = D.call(l, h || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(l)
			}
			a.option.delimiter = "%", a.option.startDelimiter = "{", a.option.endDelimiter = "}";
			class w {
				constructor(h) {
					m(this, "map", void 0), m(this, "currentLocale", c.Q.en_US), m(this, "options", void 0), m(this, "psudoLocalizePhrases", D => Object.entries(D).reduce(($, [V, re]) => Object.assign($, {
						[V]: a.str(re)
					}), {})), m(this, "getInstance", D => D ? this.map[D] : this.map[this.currentLocale]), m(this, "getInstanceMatchingPhrase", D => {
						const $ = this.getInstance();
						return $.has(D) ? $ : this.getInstance(c.Q.en_US)
					}), m(this, "extend", (D, $) => {
						const V = this.getInstance($);
						this.options.pseudoLoc && (D = this.psudoLocalizePhrases(D)), V.extend(D)
					}), m(this, "t", (D, $) => {
						const V = this.getInstanceMatchingPhrase(D);
						return $ ? V.t(D, $) : V.t(D)
					}), m(this, "tm", (D, $) => (0, g.Z)(this.t(D, $))), m(this, "clear", () => {
						this.getInstance().clear()
					}), m(this, "replace", D => {
						this.options.pseudoLoc && (D = this.psudoLocalizePhrases(D)), this.getInstance().replace(D)
					}), m(this, "locale", D => (D && (this.currentLocale = D, this.map[D] || this.createInstance(D)), this.currentLocale)), m(this, "has", D => this.getInstanceMatchingPhrase(D).has(D)), m(this, "translateSeconds", D => {
						if (Number(D) !== 0) {
							if (D % 86400 == 0) return this.t("time.num_days", {
								smart_count: D / 86400
							});
							if (D % 3600 == 0) return this.t("time.num_hours", {
								smart_count: D / 3600
							});
							if (D % 60 == 0) return this.t("time.num_minutes", {
								smart_count: D / 60
							})
						}
						return this.t("time.num_seconds", {
							smart_count: D
						})
					}), m(this, "translateObject", D => i()(D, this.t)), this.map = {}, this.options = h || {}, this.options.allowMissing = !0, this.options.onMissingKey = (D, $, V) => (console.error(new C.OZ(D)), $._ ? $._ : D), this.locale(h && h.locale || c.Q.en_US), h && h.phrases && (h.phrases = void 0), h && h.locale && (h.locale = void 0)
				}
				createInstance(h) {
					this.options.pseudoLoc && this.options.phrases && (this.options.phrases = this.psudoLocalizePhrases(this.options.phrases)), this.map[h] = new(r())(Object.assign(this.options, {
						locale: h
					}))
				}
			}
			var x = w
		},
		"../../../common/intl/intl-core/src/errors.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				OZ: function() {
					return y
				},
				YB: function() {
					return g
				}
			});

			function e(d, u, E) {
				return u = r(u), u in d ? Object.defineProperty(d, u, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[u] = E, d
			}

			function r(d) {
				var u = c(d, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function c(d, u) {
				if (typeof d != "object" || d === null) return d;
				var E = d[Symbol.toPrimitive];
				if (E !== void 0) {
					var t = E.call(d, u || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(d)
			}
			class g extends Error {
				constructor(u, E) {
					super(E);
					e(this, "translationKey", void 0), this.translationKey = u, this.name = "TranslatorError"
				}
			}
			class y extends g {
				constructor(u) {
					super(u, `Translation key not found: ${u}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var i = null
		},
		"../../../common/intl/intl-react/src/index.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				oc: function() {
					return y
				},
				lm: function() {
					return h
				},
				bd: function() {
					return s
				},
				RD: function() {
					return ge
				},
				cC: function() {
					return O
				},
				QT: function() {
					return F
				},
				lP: function() {
					return le
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../common/intl/intl-core/src/Translator.ts");
			const g = e.createContext(new c.Z),
				y = g.Consumer,
				i = g.Provider;

			function d() {
				return d = Object.assign ? Object.assign.bind() : function(L) {
					for (var A = 1; A < arguments.length; A++) {
						var M = arguments[A];
						for (var Z in M) Object.prototype.hasOwnProperty.call(M, Z) && (L[Z] = M[Z])
					}
					return L
				}, d.apply(this, arguments)
			}

			function u(L, A) {
				if (L == null) return {};
				var M = E(L, A),
					Z, ae;
				if (Object.getOwnPropertySymbols) {
					var _e = Object.getOwnPropertySymbols(L);
					for (ae = 0; ae < _e.length; ae++) Z = _e[ae], !(A.indexOf(Z) >= 0) && (!Object.prototype.propertyIsEnumerable.call(L, Z) || (M[Z] = L[Z]))
				}
				return M
			}

			function E(L, A) {
				if (L == null) return {};
				var M = {},
					Z = Object.keys(L),
					ae, _e;
				for (_e = 0; _e < Z.length; _e++) ae = Z[_e], !(A.indexOf(ae) >= 0) && (M[ae] = L[ae]);
				return M
			}
			class t extends e.Component {
				constructor(A) {
					super(A);
					const {
						locale: M,
						phrases: Z,
						translator: ae
					} = A;
					M && ae.locale(M), Z && ae.extend(Z)
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
			var s = L => {
				let {
					translator: A
				} = L, M = u(L, ["translator"]);
				const Z = () => e.createElement(y, null, ae => e.createElement(t, d({
					translator: ae
				}, M)));
				return A ? (A.locale(M.locale), e.createElement(i, {
					value: A
				}, Z())) : Z()
			};

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(L) {
					for (var A = 1; A < arguments.length; A++) {
						var M = arguments[A];
						for (var Z in M) Object.prototype.hasOwnProperty.call(M, Z) && (L[Z] = M[Z])
					}
					return L
				}, f.apply(this, arguments)
			}

			function a(L, A) {
				if (L == null) return {};
				var M = C(L, A),
					Z, ae;
				if (Object.getOwnPropertySymbols) {
					var _e = Object.getOwnPropertySymbols(L);
					for (ae = 0; ae < _e.length; ae++) Z = _e[ae], !(A.indexOf(Z) >= 0) && (!Object.prototype.propertyIsEnumerable.call(L, Z) || (M[Z] = L[Z]))
				}
				return M
			}

			function C(L, A) {
				if (L == null) return {};
				var M = {},
					Z = Object.keys(L),
					ae, _e;
				for (_e = 0; _e < Z.length; _e++) ae = Z[_e], !(A.indexOf(ae) >= 0) && (M[ae] = L[ae]);
				return M
			}

			function m(L) {
				for (var A = 1; A < arguments.length; A++) {
					var M = arguments[A] != null ? Object(arguments[A]) : {},
						Z = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(M).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(M, ae).enumerable
					})), Z.forEach(function(ae) {
						v(L, ae, M[ae])
					})
				}
				return L
			}

			function v(L, A, M) {
				return A = N(A), A in L ? Object.defineProperty(L, A, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[A] = M, L
			}

			function N(L) {
				var A = w(L, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function w(L, A) {
				if (typeof L != "object" || L === null) return L;
				var M = L[Symbol.toPrimitive];
				if (M !== void 0) {
					var Z = M.call(L, A || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(L)
			}
			class x extends e.Component {
				constructor(...A) {
					super(...A);
					v(this, "state", {
						phrasesByLocale: {}
					}), v(this, "loadLocale", async M => {
						const {
							loadPhrases: Z
						} = this.props, ae = await Z(M);
						this.setState(_e => ({
							phrasesByLocale: m({}, _e.phrasesByLocale, {
								[M]: ae
							})
						}))
					})
				}
				componentDidMount() {
					this.loadLocale(this.props.locale)
				}
				componentDidUpdate(A) {
					const {
						phrasesByLocale: M
					} = this.state;
					this.props.locale !== A.locale && !M[this.props.locale] && this.loadLocale(this.props.locale)
				}
				render() {
					const {
						children: A,
						locale: M
					} = this.props, {
						phrasesByLocale: Z
					} = this.state;
					return Z[M] ? e.createElement(s, {
						locale: M,
						phrases: Z[M]
					}, A) : null
				}
			}
			v(x, "defaultProps", {});
			var h = L => {
					let {
						locale: A
					} = L, M = a(L, ["locale"]);
					return e.createElement(y, null, Z => e.createElement(x, f({
						locale: A || Z.locale()
					}, M)))
				},
				D = n("../../../../node_modules/lodash/escape.js"),
				$ = n.n(D),
				V = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js");

			function re(L) {
				for (var A = 1; A < arguments.length; A++) {
					var M = arguments[A] != null ? Object(arguments[A]) : {},
						Z = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(M).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(M, ae).enumerable
					})), Z.forEach(function(ae) {
						ne(L, ae, M[ae])
					})
				}
				return L
			}

			function ne(L, A, M) {
				return A = ee(A), A in L ? Object.defineProperty(L, A, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[A] = M, L
			}

			function ee(L) {
				var A = Q(L, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function Q(L, A) {
				if (typeof L != "object" || L === null) return L;
				var M = L[Symbol.toPrimitive];
				if (M !== void 0) {
					var Z = M.call(L, A || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(L)
			}

			function R() {
				return R = Object.assign ? Object.assign.bind() : function(L) {
					for (var A = 1; A < arguments.length; A++) {
						var M = arguments[A];
						for (var Z in M) Object.prototype.hasOwnProperty.call(M, Z) && (L[Z] = M[Z])
					}
					return L
				}, R.apply(this, arguments)
			}
			const z = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				te = /(?:\r\n|\r|\n)/g;

			function U(L, A, M) {
				return e.createElement("span", {
					key: L,
					"data-testid": M,
					dangerouslySetInnerHTML: {
						__html: A
					}
				})
			}

			function ue(L, A = [], M = [], Z) {
				let ae = 0;
				const _e = L.replace(te, "").split(z);
				if (_e.length === 1) return [U(ae, L, Z)];
				const De = [],
					Oe = _e.shift();
				if (Oe) {
					const B = U(ae, Oe, Z);
					De.push(B), typeof B != "string" && ae++
				}
				for (const [B, ye, Ie] of X(_e)) {
					A[B] || window.console && console.warn(`Missing Component for translation key: ${L}, index: ${B}. Fragment will be used.`);
					const Fe = A[B] || e.Fragment,
						xe = M[B] || {},
						je = U(0, ye);
					if (De.push(e.createElement(Fe, R({
							key: ae
						}, xe), je)), ae++, Ie) {
						const We = U(ae, Ie);
						De.push(We), typeof We != "string" && ae++
					}
				}
				return De
			}

			function X(L) {
				if (!L.length) return [];
				const [A, M, Z, ae] = L.slice(0, 4);
				return [
					[parseInt(A || Z), M || "", ae]
				].concat(X(L.slice(4, L.length)))
			}

			function W({
				id: L = "",
				smartCount: A,
				_: M,
				values: Z,
				applyMarkdown: ae,
				Components: _e,
				componentProps: De,
				testId: Oe
			}) {
				return e.createElement(y, null, B => {
					Z && Object.keys(Z).forEach(xe => Z[xe] = $()(Z[xe])), De && De.forEach(xe => {
						Object.keys(xe).forEach(je => {
							typeof xe[je] == "string" && (xe[je] = $()(xe[je]))
						})
					});
					const ye = re({
							smart_count: A,
							_: M
						}, Z),
						Ie = ae ? (0, V.Z)(B.t(L.toString(), ye), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : B.t(L.toString(), ye),
						Fe = ue(Ie, _e, De, Oe);
					return Fe.length > 1 ? e.createElement(e.Fragment, null, Fe) : Fe[0]
				})
			}
			var O = W;

			function H() {
				return H = Object.assign ? Object.assign.bind() : function(L) {
					for (var A = 1; A < arguments.length; A++) {
						var M = arguments[A];
						for (var Z in M) Object.prototype.hasOwnProperty.call(M, Z) && (L[Z] = M[Z])
					}
					return L
				}, H.apply(this, arguments)
			}

			function J(L) {
				return M => r().createElement(y, null, Z => r().createElement(L, H({}, M, {
					translator: Z
				})))
			}
			var le = J;

			function F() {
				if (e.useContext === void 0) throw new Error("The useI18n hook is being used with a version of React that doesn't support hooks!");
				return (0, e.useContext)(g)
			}
			var oe = n("../../../common/intl/intl-types/src/index.ts"),
				ge = r().createContext(oe.Q.en_US)
		},
		"../../../common/util/types/src/api/domain.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Aw: function() {
					return D
				},
				Ib: function() {
					return l
				},
				Ks: function() {
					return $
				},
				MS: function() {
					return h
				},
				PN: function() {
					return C
				},
				Pp: function() {
					return g
				},
				Q3: function() {
					return f
				},
				TS: function() {
					return a
				},
				W7: function() {
					return N
				},
				dN: function() {
					return V
				},
				eF: function() {
					return x
				},
				qp: function() {
					return t
				},
				wR: function() {
					return E
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const r = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
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
				y = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				i = e.eg.object({
					registrant: g.optional,
					technical: g.optional,
					administrator: g.optional,
					billing: g.optional
				}),
				d = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: i.optional,
					years: e.eg.number
				}),
				u = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let E = function(re) {
				return re.ONBOARDING_INITIATED = "Onboarding Initiated", re.ONBOARDED = "Onboarded", re.PENDING_REGISTRY_LOCK = "Pending Registry Lock", re.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", re.REGISTRY_UNLOCKED = "Registry Unlocked", re.LOCKED = "Locked", re.FAILED_TO_LOCK = "Failed To Lock", re.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", re.UNLOCKED = "Unlocked", re.OFFBOARDED = "Offboarded", re
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
						status: e.eg.enum(E).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: u.optional,
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
					transfer_conditions: y.optional,
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
				f = e.eg.object({
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
			let C = function(re) {
				return re.PENDING = "pending", re.VERIFIED = "verified", re.REJECTED = "rejected", re.PENDING_DELETE = "pending_delete", re.DELETED = "deleted", re
			}({});
			const m = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(C),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				v = e.eg.object({
					designated_approvers: e.eg.array(m)
				});
			let N = function(re) {
				return re.PENDING = "pending", re.PENDING_UPDATE = "pending_update", re.ENABLED = "enabled", re.DISABLED = "disabled", re
			}({});
			const w = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(N)
				}),
				x = e.eg.intersection([w, v]),
				l = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let h = function(re) {
				return re.UNLOCK_APPROVAL = "UnlockApprovalRequest", re.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", re.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", re.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", re
			}({});
			const D = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				$ = e.eg.object({
					message: e.eg.string
				}),
				V = e.eg.object({
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
		"../../../common/util/types/src/utils/index.ts": function(K, _, n) {
			"use strict";
			n.d(_, {
				Yd: function() {
					return e
				},
				vE: function() {
					return r
				}
			});

			function e(c) {
				return Object.keys(c)
			}
			const r = (c, g) => {
				if (g !== void 0) throw new Error("Unexpected object: " + c);
				return g
			}
		},
		"../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$": function(K, _, n) {
			var e = {
				"./favicon-cookie.ico": "../react/app/assets/favicon-cookie.ico",
				"./favicon-dev.ico": "../react/app/assets/favicon-dev.ico",
				"./favicon-staging.ico": "../react/app/assets/favicon-staging.ico",
				"./favicon-zeit.ico": "../react/app/assets/favicon-zeit.ico"
			};

			function r(g) {
				var y = c(g);
				return n(y)
			}

			function c(g) {
				if (!n.o(e, g)) {
					var y = new Error("Cannot find module '" + g + "'");
					throw y.code = "MODULE_NOT_FOUND", y
				}
				return e[g]
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.resolve = c, K.exports = r, r.id = "../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$"
		},
		"../react/app/assets/favicon-cookie.ico": function(K, _, n) {
			"use strict";
			K.exports = n.p + "3f95af1452696b3d93d3.ico"
		},
		"../react/app/assets/favicon-dev.ico": function(K, _, n) {
			"use strict";
			K.exports = n.p + "1022a975e95038d58c62.ico"
		},
		"../react/app/assets/favicon-staging.ico": function(K, _, n) {
			"use strict";
			K.exports = n.p + "67b31fd5804672d4ab2d.ico"
		},
		"../react/app/assets/favicon-zeit.ico": function(K, _, n) {
			"use strict";
			K.exports = n.p + "d9aa8f47b1687e407e0f.ico"
		}
	}
]);