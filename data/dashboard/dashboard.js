(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254], {
		"../flags.js": function($, _, n) {
			"use strict";
			n.d(_, {
				J8: function() {
					return p
				},
				Jd: function() {
					return i
				},
				QY: function() {
					return C
				},
				Qw: function() {
					return s
				},
				ki: function() {
					return l
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/utils/url.ts"),
				c = n("../../../../node_modules/query-string/query-string.js"),
				d = n.n(c),
				g = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				a;
			const s = () => Object.keys(g.Z).reduce((u, f) => (f.indexOf("cf_beta.") === 0 && g.Z.get(f) === "true" && u.push(f.split(".").slice(1).join(".")), u), []),
				l = () => {
					var u, f, I;
					return ((u = window) === null || u === void 0 || (f = u.bootstrap) === null || f === void 0 || (I = f.data) === null || I === void 0 ? void 0 : I.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((a = window) === null || a === void 0 ? void 0 : a.location) && g.Z) {
				const u = d().parse(window.location.search);
				u.beta_on && g.Z.set(`cf_beta.${u.beta_on}`, !0), u.beta_off && g.Z.set(`cf_beta.${u.beta_off}`, !1)
			}
			const h = {},
				t = u => {
					var f, I, D;
					return Object.prototype.hasOwnProperty.call(h, u) ? h[u] : ((f = window) === null || f === void 0 || (I = f.bootstrap) === null || I === void 0 || (D = I.data) === null || D === void 0 ? void 0 : D.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(U => U === u) ? (h[u] = !0, !0) : (h[u] = !1, !1)
				},
				r = u => g.Z ? g.Z.get(`cf_beta.${u}`) === !0 : !1,
				p = u => r(u) || t(u),
				m = () => !0,
				i = () => {
					var u, f, I;
					return ((u = window) === null || u === void 0 || (f = u.bootstrap) === null || f === void 0 || (I = f.data) === null || I === void 0 ? void 0 : I.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				C = u => {
					const f = (0, e.uF)(u),
						I = (f == null ? void 0 : f.roles) || [];
					return (0, o.qR)(location.pathname) && I.length === 1 && I.some(D => D === "Administrator Read Only")
				}
		},
		"../init.ts": function($, _, n) {
			"use strict";
			n.r(_);
			var e = n("../../../../node_modules/url-search-params-polyfill/index.js"),
				o = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				c = n("../../../../node_modules/fetch-intercept/lib/browser.js");

			function d(E) {
				for (var S = 1; S < arguments.length; S++) {
					var F = arguments[S] != null ? Object(arguments[S]) : {},
						V = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && V.push.apply(V, Object.getOwnPropertySymbols(F).filter(function(de) {
						return Object.getOwnPropertyDescriptor(F, de).enumerable
					})), V.forEach(function(de) {
						g(E, de, F[de])
					})
				}
				return E
			}

			function g(E, S, F) {
				return S = a(S), S in E ? Object.defineProperty(E, S, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[S] = F, E
			}

			function a(E) {
				var S = s(E, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function s(E, S) {
				if (typeof E != "object" || E === null) return E;
				var F = E[Symbol.toPrimitive];
				if (F !== void 0) {
					var V = F.call(E, S || "default");
					if (typeof V != "object") return V;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(E)
			}
			const l = E => {
				const S = E && E.headers || {},
					F = new Headers(S);
				return F.append("X-Cross-Site-Security", "dash"), d({}, E, {
					headers: F
				})
			};
			(0, c.register)({
				request: (E, S) => {
					try {
						return new URL(E), E === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["https://static.dash.cloudflare.com/static/vendor/onetrust/logos/ot_guard_logo.svg", S] : [E, S]
					} catch {
						return [E, l(S)]
					}
				}
			});
			var h = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				r = n("../react/app/providers/storeContainer.js");
			let p = "";
			const m = 61;

			function i(E) {
				const S = E.substr(1);
				if (S && p !== S) {
					const F = document.getElementById(S);
					if (F) {
						const V = F.getBoundingClientRect().top;
						if (V > 0) {
							const de = V - m;
							document.documentElement.scrollTop = de
						}
					}
				}
				p = S
			}

			function C(E) {
				E.listen(S => i(S.hash))
			}
			var u = n("../../../../node_modules/cookie/index.js"),
				f = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const I = "CF_dash_version",
				D = "hash",
				U = "current",
				P = E => E === U ? y() : O(),
				y = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				O = (E = 4) => {
					const S = 36e5;
					return new Date(Date.now() + E * S)
				},
				z = E => {
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
				G = (E, S = !1) => {
					var F, V;
					const de = z(E),
						Se = `
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
    <h1 id="error-title">${de.title}</h1>
    <p id="error-description">${de.description}</p>
  </div>
  `,
						Ce = S ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${f.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(F=window.build)===null||F===void 0?void 0:F.branch}</span>.</p>
      <a href=${(V=window.build)===null||V===void 0?void 0:V.staticDashHost}/version?hash=current>Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return Se + Ce
				},
				ve = E => {
					var S;
					const F = document.getElementById(E);
					!F || (S = F.parentNode) === null || S === void 0 || S.removeChild(F)
				};

			function ne() {
				const E = document.getElementById("loading-state");
				E == null || E.classList.add("hide"), E == null || E.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(ve)
				})
			}

			function Y(E) {
				var S;
				const F = document.getElementById("loading-state"),
					V = !!((S = u.parse(document.cookie)) === null || S === void 0 ? void 0 : S[I]);
				!F || (F.innerHTML = G(E == null ? void 0 : E.code, V))
			}
			var H = n("../utils/initStyles.ts"),
				k = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				A = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				oe = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				ee = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				ge = n("../../../../node_modules/history/esm/history.js"),
				W = (0, ge.lX)(),
				K = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				x = n("../react/utils/url.ts");
			const Z = (0, K.Rf)();
			let se;

			function M(E) {
				return q(E, "react-router-v5")
			}

			function q(E, S) {
				return (F, V = !0, de = !0) => {
					V && Z && Z.location && (se = F({
						name: (0, x.Fl)(Z.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": S
						}
					})), de && E.listen && E.listen((Se, Ce) => {
						if (Ce && (Ce === "PUSH" || Ce === "POP")) {
							se && se.finish();
							const We = {
								"routing.instrumentation": S
							};
							se = F({
								name: (0, x.Fl)(Se.pathname),
								op: "navigation",
								tags: We
							})
						}
					})
				}
			}
			var ce = n("../react/common/selectors/languagePreferenceSelector.ts"),
				B = n("../flags.js");
			const b = () => {
					var E, S;
					return (E = window) === null || E === void 0 || (S = E.build) === null || S === void 0 ? void 0 : S.dashVersion
				},
				w = () => {
					var E;
					return ((0, u.parse)((E = document) === null || E === void 0 ? void 0 : E.cookie) || {}).CF_dash_version !== void 0
				};
			var v = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				j = n.n(v),
				ie = n("../../../common/intl/intl-core/src/errors.ts"),
				Te = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				be = n("../react/common/middleware/sparrow/errors.ts");
			const Ae = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				je = !0,
				Be = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				xe = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function we(E, S, F) {
				return S = Ie(S), S in E ? Object.defineProperty(E, S, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[S] = F, E
			}

			function Ie(E) {
				var S = Ge(E, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function Ge(E, S) {
				if (typeof E != "object" || E === null) return E;
				var F = E[Symbol.toPrimitive];
				if (F !== void 0) {
					var V = F.call(E, S || "default");
					if (typeof V != "object") return V;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(E)
			}
			class Ue {
				constructor() {
					we(this, "name", Ue.id)
				}
				setupOnce() {
					n.g.console && (0, Te.hl)(n.g.console, "error", S => (...F) => {
						const V = F.find(de => de instanceof Error);
						if (Ae && V) {
							let de, Se = !0;
							if (V instanceof be.ez) {
								const Ce = V instanceof be.oV ? V.invalidProperties : void 0;
								de = {
									tags: {
										"sparrow.eventName": V.eventName
									},
									extra: {
										sparrow: {
											eventName: V.eventName,
											invalidProperties: Ce
										}
									},
									fingerprint: [V.name ? V.name : "SparrowValidationError"]
								}, Se = !1
							} else if (V instanceof v.SparrowIdCookieError) de = {
								extra: {
									sparrowIdCookie: V.cookie
								},
								fingerprint: [V.name ? V.name : "SparrowIdCookieError"]
							};
							else if (V.name === "ChunkLoadError") {
								de = {
									fingerprint: [V.name]
								};
								try {
									de.tags = {
										chunkId: V.message.split(" ")[2],
										chunkUrl: V.request
									}
								} catch {}
							} else V instanceof ie.YB && (de = {
								fingerprint: ["TranslatorError", V.translationKey]
							});
							Se && h.Tb(V, de)
						}
						typeof S == "function" && S.apply(n.g.console, F)
					})
				}
			}
			we(Ue, "id", "ConsoleErrorIntegration");
			var le = null,
				ue = n("../utils/sentry/lastSentEventId.ts"),
				ye = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				me = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const he = E => {
					const S = async F => {
						var V, de;
						const Se = {
							envelope: F.body,
							url: E.url,
							isPreviewDeploy: (V = window) === null || V === void 0 || (de = V.build) === null || de === void 0 ? void 0 : de.isPreviewDeploy,
							release: b()
						};
						try {
							const Ce = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(Se)
							});
							return {
								statusCode: Ce.status,
								headers: {
									"x-sentry-rate-limits": Ce.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": Ce.headers.get("Retry-After")
								}
							}
						} catch (Ce) {
							return console.log(Ce), (0, me.$2)(Ce)
						}
					};
					return ye.q(E, S)
				},
				ke = () => {
					if (Ae && je) {
						var E, S, F, V, de, Se, Ce, We, at, Je;
						let ut = "production";
						((E = window) === null || E === void 0 || (S = E.build) === null || S === void 0 ? void 0 : S.isPreviewDeploy) && (ut += "-preview"), A.S({
							dsn: Ae,
							release: b(),
							environment: ut,
							ignoreErrors: xe,
							allowUrls: Be,
							autoSessionTracking: !0,
							integrations: [new oe.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new Ue, new ee.jK.BrowserTracing({
								routingInstrumentation: M(W)
							})],
							tracesSampleRate: 0,
							transport: he,
							beforeSend: vt => (ue.e.setEventId(vt.event_id), vt)
						});
						const Ot = (0, r.bh)().getState();
						h.rJ({
							LOCAL_STORAGE_FLAGS: (0, B.Qw)(),
							USER_BETA_FLAGS: (0, B.ki)(),
							meta: {
								connection: {
									type: (F = window) === null || F === void 0 || (V = F.navigator) === null || V === void 0 || (de = V.connection) === null || de === void 0 ? void 0 : de.effectiveType,
									bandwidth: (Se = window) === null || Se === void 0 || (Ce = Se.navigator) === null || Ce === void 0 || (We = Ce.connection) === null || We === void 0 ? void 0 : We.downlink
								},
								languagePreference: (0, ce.r)(Ot),
								isPreviewDeploy: (at = window) === null || at === void 0 || (Je = at.build) === null || Je === void 0 ? void 0 : Je.isPreviewDeploy
							},
							utilGates: (0, k.T2)(Ot)
						}), window.addEventListener("unhandledrejection", function(vt) {})
					}
				},
				De = E => {
					E ? h.av({
						id: E
					}) : h.av(null)
				};
			var Le = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				N = () => {
					let E;
					try {
						E = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), E = window.location.search
					}
					if (!E.includes("remote[")) return;
					const S = new URLSearchParams(E),
						F = {};
					for (let [V, de] of S) V.includes("remote") && (F[V.replace(/remote\[|\]/g, "")] = de);
					Le.Z.set("mfe-remotes", JSON.stringify(F))
				},
				X = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				fe = n("../node_modules/uuid/dist/esm-browser/v4.js");
			const Oe = "ANON_USER_ID";

			function Me() {
				var E, S, F, V;
				let de = (E = n.g) === null || E === void 0 || (S = E.bootstrap) === null || S === void 0 || (F = S.data) === null || F === void 0 || (V = F.user) === null || V === void 0 ? void 0 : V.id;
				if (!de) {
					let Se = Le.Z.get(Oe);
					if (!Se) {
						let Ce = (0, fe.Z)();
						Le.Z.set(Oe, Ce), Se = Ce
					}
					return Se
				}
				return de
			}
			async function Ne() {
				const E = (0, r.bh)();
				E.dispatch((0, X.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await E.dispatch((0, k.UL)({
					userId: Me()
				}))
			}
			const $e = [];

			function st() {
				try {
					const E = (0, r.bh)().getState(),
						S = (0, k.T2)(E),
						F = $e.reduce((V, de) => Object.assign(V, {
							[de]: S == null ? void 0 : S[de]
						}), {});
					nt("gates_cohorts", F)
				} catch {}
			}

			function nt(E, S) {
				document.cookie = (0, u.serialize)(E, JSON.stringify(S), {
					path: "/",
					domain: ".cloudflare.com"
				})
			}
			var dt = n("../libs/init/initBootstrap.ts");
			const Re = {
					keys: ["blockedURI", "columnNumber", "disposition", "documentURI", "effectiveDirective", "lineNumber", "originalPolicy", "referrer", "sample", "script-sample", "sourceFile", "statusCode", "violatedDirective"]
				},
				Qe = {
					blockedURI: "blocked-uri",
					columnNumber: "column-number",
					documentURI: "document-uri",
					effectiveDirective: "effective-directive",
					lineNumber: "line-number",
					sample: "script-sample",
					originalPolicy: "original-policy",
					sourceFile: "source-file",
					statusCode: "status-code",
					violatedDirective: "violated-directive"
				},
				Xe = [{
					name: "Discard Zendesk legacy scripts",
					descrption: "See SEC-2724",
					rule: E => E["blocked-uri"] && E["blocked-uri"].startsWith("https://widget-mediator.zopim.com/")
				}, {
					name: "Discard blocked by eval",
					description: "See SEC-2989",
					rule: E => {
						E["blocked-uri"] && E["blocked-uri"].startsWith("eval")
					}
				}],
				R = function(E) {
					for (let S = 0; S < Xe.length; S++)
						if (Xe[S].rule(E)) return !0;
					return !1
				},
				te = () => {
					document.addEventListener("securitypolicyviolation", function(E) {
						const S = {
							"csp-report": {}
						};
						for (let V = 0; V < Re.keys.length; V++) E[Re.keys[V]] !== void 0 && (S["csp-report"][Qe[Re.keys[V]] ? Qe[Re.keys[V]] : Re.keys[V]] = E[Re.keys[V]]);
						if (R(S["csp-report"])) return;
						S["csp-report"].disposition && (S["csp-report"].disposition += "-dom");
						const F = new XMLHttpRequest;
						F.open("POST", "https://sentry.io/api/1875320/security/?sentry_key=d639afe3688c4603a1d1b7a22217c710&sentry_environment=production", !0), F.setRequestHeader("content-type", "application/csp-report"), F.send(JSON.stringify(S))
					})
				};
			var ae = n("webpack/sharing/consume/default/react/react"),
				re = n.n(ae),
				_e = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				Fe = n("webpack/sharing/consume/default/react-dom/react-dom"),
				T = n("webpack/sharing/consume/default/react-redux/react-redux"),
				L = n("../../../../node_modules/swr/core/dist/index.mjs"),
				J = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				pe = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Ee = n("../react/shims/focus-visible.js"),
				Ke = n("../react/app/components/DeepLink/index.ts"),
				it = n("../../../../node_modules/prop-types/index.js"),
				Ve = n.n(it),
				ot = n("../react/utils/translator.tsx"),
				qe = n("../../../common/intl/intl-react/src/index.ts"),
				Pe = n("../../../dash/intl/intl-translations/src/index.ts"),
				pt = n("../../../../node_modules/query-string/query-string.js"),
				Ye = n.n(pt),
				mt = n("../react/common/actions/userActions.ts"),
				rt = n("../react/common/selectors/userSelectors.ts"),
				He = n("../react/utils/i18n.ts"),
				ct = n("../react/utils/bootstrap.ts");

			function Lt(E) {
				for (var S = 1; S < arguments.length; S++) {
					var F = arguments[S] != null ? Object(arguments[S]) : {},
						V = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && V.push.apply(V, Object.getOwnPropertySymbols(F).filter(function(de) {
						return Object.getOwnPropertyDescriptor(F, de).enumerable
					})), V.forEach(function(de) {
						It(E, de, F[de])
					})
				}
				return E
			}

			function It(E, S, F) {
				return S = Dt(S), S in E ? Object.defineProperty(E, S, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[S] = F, E
			}

			function Dt(E) {
				var S = Rt(E, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function Rt(E, S) {
				if (typeof E != "object" || E === null) return E;
				var F = E[Symbol.toPrimitive];
				if (F !== void 0) {
					var V = F.call(E, S || "default");
					if (typeof V != "object") return V;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(E)
			}
			let ze = Ye().parse(location.search);
			const Et = E => {
					const S = (0, ct.$8)() ? [(0, Pe.Fy)(Pe.if.changes), (0, Pe.Fy)(Pe.if.common), (0, Pe.Fy)(Pe.if.navigation), (0, Pe.Fy)(Pe.if.overview), (0, Pe.Fy)(Pe.if.onboarding), (0, Pe.Fy)(Pe.if.invite), (0, Pe.Fy)(Pe.if.login), (0, Pe.Fy)(Pe.if.dns), (0, Pe.Fy)(Pe.n4.ssl_tls)] : [(0, Pe.Fy)(Pe.if.common), (0, Pe.Fy)(Pe.if.invite), (0, Pe.Fy)(Pe.if.login), (0, Pe.Fy)(Pe.if.onboarding)];
					ze.lang ? kt(E) : Le.Z.get(He.th) && ht(E, Le.Z.get(He.ly));
					const F = async V => (await Promise.all(S.map(Se => Se(V)))).reduce((Se, Ce) => Lt({}, Se, Ce), {});
					return re().createElement(qe.RD.Provider, {
						value: E.languagePreference
					}, re().createElement(qe.bd, {
						translator: ot.Vb,
						locale: E.languagePreference
					}, re().createElement(qe.lm, {
						loadPhrases: F
					}, E.children)))
				},
				kt = async E => {
					let S = ze.lang.substring(0, ze.lang.length - 2) + ze.lang.substring(ze.lang.length - 2, ze.lang.length).toUpperCase();
					if (!(0, ce.v)(S)) {
						console.warn(`${S} is not a supported locale.`), delete ze.lang, E.history.replace({
							search: Ye().stringify(ze)
						});
						return
					}
					Le.Z.set(He.ly, S), delete ze.lang, ht(E, S), E.isAuthenticated || E.history.replace({
						search: Ye().stringify(ze)
					})
				}, ht = async (E, S) => {
					if (E.isAuthenticated) try {
						await E.setUserCommPreferences({
							"language-locale": S
						}, {
							hideErrorAlert: !0
						}), Le.Z.remove(He.th), E.history.replace({
							search: Ye().stringify(ze)
						})
					} catch (F) {
						Le.Z.set(He.th, !0), console.error(F)
					} else Le.Z.set(He.th, !0)
				}, Mt = E => {
					const S = (0, rt.PR)(E);
					return {
						isAuthenticated: !!(S && S.id),
						languagePreference: Le.Z.get(He.ly) || (0, ce.r)(E)
					}
				}, Nt = {
					setUserCommPreferences: mt.V_
				};
			var jt = (0, _e.withRouter)((0, T.connect)(Mt, Nt)(Et));
			Et.propTypes = {
				history: Ve().object,
				languagePreference: Ve().string.isRequired,
				children: Ve().node.isRequired,
				isAuthenticated: Ve().bool,
				setUserCommPreferences: Ve().func.isRequired
			};
			var Bt = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				xt = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let gt;
			const Ut = ({
					selectorPrefix: E = "c_"
				} = {}) => (gt || (gt = (0, xt.Z)({
					dev: !1,
					selectorPrefix: E
				})), gt),
				Ft = E => E.application.modals;
			var Gt = n("../react/common/actions/modalActions.ts");

			function ft() {
				return ft = Object.assign ? Object.assign.bind() : function(E) {
					for (var S = 1; S < arguments.length; S++) {
						var F = arguments[S];
						for (var V in F) Object.prototype.hasOwnProperty.call(F, V) && (E[V] = F[V])
					}
					return E
				}, ft.apply(this, arguments)
			}
			const $t = re().createContext({});
			class zt extends re().Component {
				render() {
					const {
						modals: S,
						closeModal: F
					} = this.props;
					return re().createElement(re().Fragment, null, S.map(({
						ModalComponent: V,
						props: de = {},
						id: Se
					}) => {
						const Ce = () => {
							typeof de.onClose == "function" && de.onClose(), F(V)
						};
						return re().createElement($t.Provider, {
							key: Se,
							value: {
								closeModal: Ce
							}
						}, re().createElement(V, ft({}, de, {
							isOpen: !0,
							closeModal: Ce
						})))
					}))
				}
			}
			var Wt = (0, T.connect)(E => ({
					modals: Ft(E)
				}), {
					closeModal: Gt.M
				})(zt),
				Zt = n("../react/app/components/ErrorBoundary.tsx"),
				Ht = n("../react/common/actions/notificationsActions.ts");
			const _t = (n.g.bootstrap || {}).data || {};
			class Ct extends re().Component {
				componentDidMount() {
					_t.messages && this.dispatchNotificationActions(_t.messages)
				}
				dispatchNotificationActions(S) {
					S.forEach(F => {
						const {
							type: V,
							message: de,
							persist: Se
						} = F;
						["success", "info", "warn", "error"].includes(V) && this.props.notifyAdd(V, (0, ot.ZP)(de), {
							persist: !!Se
						})
					})
				}
				render() {
					return null
				}
			}
			var Kt = (0, _e.withRouter)((0, T.connect)(null, {
				notifyAdd: Ht.IH
			})(Ct));
			Ct.propTypes = {
				notifyAdd: Ve().func.isRequired
			};
			var et = n("../react/app/redux/index.ts");

			function Vt() {
				var E;
				const S = (0, et.p4)(rt.PR),
					F = (S == null || (E = S.email) === null || E === void 0 ? void 0 : E.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					V = (0, X.Yc)();
				(0, ae.useEffect)(() => {
					V({
						userType: F
					})
				}, [F, V])
			}
			var bt = n("../react/common/selectors/entitlementsSelectors.ts"),
				Tt = n("../react/common/selectors/accountSelectors.ts");
			const Yt = ["accountId", "is_ent"];

			function Jt() {
				const E = (0, X.f7)(),
					S = (0, _e.useHistory)(),
					F = (0, x.uW)(S.location.pathname),
					V = (0, X.Yc)(),
					de = (0, X.O$)(),
					Se = (0, et.p4)(bt.u1),
					Ce = !Se.isRequesting && !!Se.data,
					We = (0, et.p4)(bt.p1),
					at = (0, et.p4)(Tt.Xu),
					Je = (0, et.p4)(Tt.uF),
					ut = !at.isRequesting && !!at.data;
				(0, ae.useEffect)(() => {
					F && ut && Je && Ce && F === Je.account.id ? V({
						accountId: Je.account.id,
						is_ent: We
					}) : (!F || F in E && E.accountId !== F) && de(Yt)
				}, [ut, Je, V, de, Ce, We, F, E])
			}
			var Qt = n("../react/common/selectors/zoneSelectors.ts");

			function Xt() {
				const E = (0, et.p4)(Qt.nA),
					S = (0, X.Yc)();
				(0, ae.useEffect)(() => {
					S({
						zone_id: E == null ? void 0 : E.id
					})
				}, [E, S])
			}
			const qt = () => (Vt(), Jt(), Xt(), null);
			var en = n("../react/app/components/Persistence/index.tsx"),
				tn = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				nn = n("../react/app/components/LoadingSuspense.tsx");
			const on = re().lazy(() => Promise.all([n.e(2480), n.e(75953), n.e(4616), n.e(42518), n.e(98283), n.e(76725), n.e(43351), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var rn = () => re().createElement(nn.Z, null, re().createElement(on, null));
			const an = () => (ae.useEffect(() => ne, []), null);
			var sn = n("../../../../node_modules/moment/moment.js"),
				At = n.n(sn);
			const cn = E => {
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
				ln = () => {
					const E = (0, et.p4)(ce.r);
					(0, ae.useEffect)(() => {
						const S = cn(E);
						S !== At().locale() && At().locale(S), document.documentElement.lang = E
					}, [E])
				},
				un = () => {
					(0, ae.useEffect)(() => {
						var E, S;
						let F;
						if (((E = window) === null || E === void 0 || (S = E.build) === null || S === void 0 ? void 0 : S.isPreviewDeploy) && (F = "cookie"), !!F) try {
							const V = document.head.querySelector("link[rel=icon]");
							V && (V.href = n("../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${F}.ico`))
						} catch {}
					}, [])
				};
			var dn = n("../react/common/constants/constants.ts");
			const pn = () => {
					const E = (0, _e.useLocation)();
					(0, ae.useEffect)(() => {
						const S = Ye().parse(E.search);
						if (S.pt && Le.Z.set(dn.sJ, S.pt), (S == null ? void 0 : S.devPanel) === null) {
							var F, V;
							(F = window) === null || F === void 0 || (V = F.localStorage) === null || V === void 0 || V.setItem("gates_devtools_ui_gates_controller_enabled", "true")
						}
					}, [E.search])
				},
				mn = re().lazy(() => Promise.all([n.e(2480), n.e(75953), n.e(4616), n.e(42518), n.e(81778), n.e(72019), n.e(26976), n.e(76725), n.e(43351), n.e(47261), n.e(35812), n.e(77637), n.e(85918), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				gn = re().lazy(() => Promise.all([n.e(75953), n.e(81778), n.e(76725), n.e(69088), n.e(35812), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var fn = ({
					userIsAuthed: E
				}) => {
					var S;
					return ln(), un(), pn(), re().createElement(ae.Suspense, {
						fallback: re().createElement(an, null)
					}, re().createElement(_e.Switch, null, !E && !0 && re().createElement(_e.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, re().createElement(gn, null)), re().createElement(_e.Route, {
						render: () => re().createElement(tn.ZC, {
							minHeight: "100vh"
						}, re().createElement(mn, null))
					})), ((S = window) === null || S === void 0 ? void 0 : S.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true" && re().createElement(rn, null))
				},
				yt = n("../../../../node_modules/yup/es/index.js"),
				yn = n("../../../common/util/types/src/utils/index.ts");
			const St = {
				cfEmail: () => yt.Z_().email((0, ot.ZP)("common.validation.email")).required((0, ot.ZP)("common.validation.email"))
			};
			(0, yn.Yd)(St).forEach(E => {
				yt.kM(yt.Z_, E, St[E])
			});
			const Pt = re().lazy(() => Promise.all([n.e(4616), n.e(6368), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				vn = () => {
					const E = (0, ct.$8)(),
						[S, F] = (0, ae.useState)(E ? Pt : re().Fragment),
						[V, de] = (0, ae.useState)((0, f.Yc)());
					(0, ae.useEffect)(() => {
						(0, f.fF)(() => de((0, f.Yc)()))
					}, []);
					const Se = Ce => {
						de(Ce), (0, f.C8)(Ce)
					};
					return (0, ae.useEffect)(() => {
						F(E ? Pt : re().Fragment)
					}, [E]), (0, ae.useEffect)(() => {
						const Ce = () => Se(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Ce), () => {
							window.removeEventListener("storage", Ce)
						}
					}, []), re().createElement(ae.Suspense, {
						fallback: null
					}, re().createElement(T.Provider, {
						store: (0, r.bh)()
					}, re().createElement(_e.Router, {
						history: W
					}, re().createElement(S, null, re().createElement(Bt.Z, {
						renderer: Ut()
					}, re().createElement(jt, null, re().createElement(Zt.Z, {
						sentryTag: "Root"
					}, re().createElement(L.J$, {
						value: {
							fetcher: Ce => fetch(Ce).then(We => We.json())
						}
					}, re().createElement(qt, null), re().createElement(Kt, null), re().createElement(en.Z_, {
						onDarkModeChangeCb: Se
					}, re().createElement(Ke.ZP, null, re().createElement(fn, {
						userIsAuthed: E
					}))), re().createElement(Wt, null), re().createElement(J.F0, null)))))))))
				},
				En = () => {
					(0, Fe.render)(re().createElement(vn, null), document.getElementById("react-app"))
				};
			var tt = n("../utils/initSparrow.ts"),
				lt = n("../utils/zaraz.ts");
			const hn = () => {
					const E = (0, rt.PR)((0, r.bh)().getState());
					_n(), (0, tt.Ug)(), (0, lt.bM)(), (E == null ? void 0 : E.id) && j().setUserId(E == null ? void 0 : E.id), (0, tt.yV)(), !(0, tt.Wi)() && (0, tt.IM)(), E ? (0, lt.yn)(E) : (0, lt.Ro)()
				},
				_n = () => {
					var E, S;
					(E = window) === null || E === void 0 || (S = E.OneTrust) === null || S === void 0 || S.OnConsentChanged(() => {
						const F = (0, rt.PR)((0, r.bh)().getState());
						(0, tt.Wi)() ? (j().setEnabled(!0), (F == null ? void 0 : F.id) ? (j().setUserId(F.id), (0, lt.yn)(F)) : (0, lt.Ro)(), (0, tt.yV)()) : (j().setEnabled(!1), (0, tt.IM)())
					})
				};

			function Cn(E) {
				for (var S = 1; S < arguments.length; S++) {
					var F = arguments[S] != null ? Object(arguments[S]) : {},
						V = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && V.push.apply(V, Object.getOwnPropertySymbols(F).filter(function(de) {
						return Object.getOwnPropertyDescriptor(F, de).enumerable
					})), V.forEach(function(de) {
						bn(E, de, F[de])
					})
				}
				return E
			}

			function bn(E, S, F) {
				return S = Tn(S), S in E ? Object.defineProperty(E, S, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[S] = F, E
			}

			function Tn(E) {
				var S = An(E, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function An(E, S) {
				if (typeof E != "object" || E === null) return E;
				var F = E[Symbol.toPrimitive];
				if (F !== void 0) {
					var V = F.call(E, S || "default");
					if (typeof V != "object") return V;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(E)
			}
			const wt = E => {
				h.Tb(E), Y(E)
			};
			try {
				n.g.build = Cn({}, {
					branch: "master",
					isReleaseCandidate: "true",
					commit: "ff7b84e203e05c66f97a8f1011fa3216b102aa0a",
					env: "production",
					builtAt: 1709935621875,
					dashVersion: "1cc68ad734163020f0773d4146cca0c8e6d7bcda",
					versions: {
						"@cloudflare/app-dash": "25.161.21",
						node: "20.10.0",
						yarn: "3.2.2",
						webpack: "5.88.2"
					},
					staticDashHost: "https://static.dash.cloudflare.com"
				}, {
					isPreviewDeploy: w()
				}), ke(), te(), n("../react/utils/api.ts"), C(W), (0, H.Z)(), N(), (0, dt.k)().then(async E => {
					var S;
					const F = (0, r.bh)(),
						V = (E == null ? void 0 : E.data) || {};
					F.dispatch((0, t.mW)("user", V == null ? void 0 : V.user));
					const de = E == null || (S = E.data) === null || S === void 0 ? void 0 : S.user;
					return n.g.bootstrap = E, de && de.id && De(de.id), await Ne(), st(), hn(), En()
				}).catch(wt)
			} catch (E) {
				wt(E)
			}
		},
		"../libs/init/initBootstrap.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				k: function() {
					return e
				}
			});
			const e = async () => {
				let o = await fetch("/api/v4/system/bootstrap", {
					credentials: "same-origin"
				});
				if (!o.ok) throw {
					message: "Bootstrap API Failure",
					code: o == null ? void 0 : o.status
				};
				return (await o.json()).result.data
			}
		},
		"../react/app/components/DeepLink/actions.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				BQ: function() {
					return l
				},
				Bh: function() {
					return a
				},
				CM: function() {
					return h
				},
				MF: function() {
					return o
				},
				TS: function() {
					return p
				},
				WF: function() {
					return g
				},
				Wz: function() {
					return t
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
				c = (0, e.R)(o.ADD_SITE, m => ({
					payload: m
				})),
				d = (0, e.R)(o.RESOLVING_START),
				g = (0, e.R)(o.RESOLVING_COMPLETE),
				a = (0, e.R)(o.SELECT_ZONE, m => ({
					payload: m
				})),
				s = (0, e.R)(o.SELECT_ACCOUNT, m => ({
					payload: m
				})),
				l = (0, e.R)(o.SELECT_PAGES_PROJECT, m => ({
					payload: m
				})),
				h = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, m => ({
					payload: m
				})),
				t = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, m => ({
					accountIds: m
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				p = (0, e.R)(o.SELECT_WORKER, m => ({
					payload: m
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				BV: function() {
					return e
				},
				Dz: function() {
					return a
				},
				Fj: function() {
					return o
				},
				Kt: function() {
					return c
				},
				_h: function() {
					return s
				},
				s$: function() {
					return d
				}
			});
			const e = "to",
				o = "deepLinkQueryParams",
				c = "add",
				d = "multiSkuProducts",
				g = "/:account/billing/checkout",
				a = "/:account/:zone/billing/checkout",
				s = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				ZP: function() {
					return ve
				},
				U: function() {
					return s.U
				},
				dd: function() {
					return s.dd
				},
				bk: function() {
					return a.bk
				},
				Bh: function() {
					return a.Bh
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n("../react/app/redux/index.ts"),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = n("../react/app/components/DeepLink/utils.ts"),
				g = n("../react/utils/bootstrap.ts"),
				a = n("../react/app/components/DeepLink/actions.ts"),
				s = n("../react/app/components/DeepLink/selectors.ts"),
				l = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				h = n.n(l);

			function t(ne) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var H = arguments[Y] != null ? Object(arguments[Y]) : {},
						k = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(H).filter(function(A) {
						return Object.getOwnPropertyDescriptor(H, A).enumerable
					})), k.forEach(function(A) {
						r(ne, A, H[A])
					})
				}
				return ne
			}

			function r(ne, Y, H) {
				return Y = p(Y), Y in ne ? Object.defineProperty(ne, Y, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[Y] = H, ne
			}

			function p(ne) {
				var Y = m(ne, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function m(ne, Y) {
				if (typeof ne != "object" || ne === null) return ne;
				var H = ne[Symbol.toPrimitive];
				if (H !== void 0) {
					var k = H.call(ne, Y || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(ne)
			}
			class i {
				constructor(Y, H) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", k => {
						this.resolvers.set(k, {
							name: k,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", k => {
						const A = this.resolvers.get(k);
						A && (A.endTime = Date.now(), this.resolvers.set(k, A))
					}), r(this, "resolverCancel", k => {
						this.resolverDone(k), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", k => {
						const A = "NO_ACTION",
							oe = {
								actionType: A,
								startTime: 0
							};
						return {
							start: (ee = A) => {
								const ge = this.resolvers.get(k);
								oe.actionType = ee, oe.startTime = Date.now(), ge && ge.userActions.push(oe)
							},
							finish: (ee = A) => {
								oe.actionType = ee, oe.endTime = Date.now()
							},
							cancel: (ee = A) => {
								oe.actionType = ee, oe.endTime = Date.now(), this.resolverCancel(k)
							}
						}
					}), this.deepLink = Y, this.legacyDeepLink = H, this.resolvers = new Map
				}
				track(Y) {
					try {
						if (this._done) return;
						this._done = !0;
						const H = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: C(this.startTime, this.endTime),
								totalCpuTime: C(this.startTime, this.endTime)
							},
							k = this.resolvers.size === 0 ? H : Array.from(this.resolvers.values()).reduce((A, oe) => {
								const ee = C(oe.startTime, oe.endTime),
									ge = oe.userActions.reduce((W, K) => {
										const x = C(K.startTime, K.endTime);
										return {
											totalTime: W.totalTime + x,
											actions: W.actions.set(K.actionType, x)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									Q = ee - ge.totalTime;
								return t({}, A, {
									totalTime: A.totalTime + ee,
									totalUserActionsTime: A.totalUserActionsTime + ge.totalTime,
									totalCpuTime: A.totalCpuTime + Q,
									[`${oe.name}ResolverTotalTime`]: ee,
									[`${oe.name}ResolverTotalCpuTime`]: Q,
									[`${oe.name}ResolverTotalUserActionsTime`]: ge.totalTime
								}, Array.from(ge.actions.keys()).reduce((W, K) => t({}, W, {
									[`${oe.name}Resolver/${K}`]: ge.actions.get(K)
								}), {}))
							}, t({}, H, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						h().sendEvent(Y, k)
					} catch (H) {
						console.error(H)
					}
				}
			}

			function C(ne = Date.now(), Y = Date.now()) {
				return (Y - ne) / 1e3
			}
			var u = n("../react/app/components/DeepLink/constants.ts"),
				f = n("../react/common/hooks/useCachedState.ts"),
				I = n("../react/common/hooks/usePrevious.ts");

			function D(ne) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var H = arguments[Y] != null ? Object(arguments[Y]) : {},
						k = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(H).filter(function(A) {
						return Object.getOwnPropertyDescriptor(H, A).enumerable
					})), k.forEach(function(A) {
						U(ne, A, H[A])
					})
				}
				return ne
			}

			function U(ne, Y, H) {
				return Y = P(Y), Y in ne ? Object.defineProperty(ne, Y, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[Y] = H, ne
			}

			function P(ne) {
				var Y = y(ne, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function y(ne, Y) {
				if (typeof ne != "object" || ne === null) return ne;
				var H = ne[Symbol.toPrimitive];
				if (H !== void 0) {
					var k = H.call(ne, Y || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(ne)
			}
			var z = ({
					children: ne
				}) => {
					const Y = (0, o.TZ)(),
						H = (0, c.useHistory)(),
						k = (0, I.Z)(H.location.pathname),
						A = (0, o.p4)(s.dd),
						[oe, ee] = (0, e.useState)(!0),
						[ge, Q] = (0, f.j)(void 0, {
							key: u.Fj
						}),
						[W, K] = (0, f.j)(void 0, {
							key: u.s$
						}),
						x = (0, g.$8)();
					let Z = new URLSearchParams(H.location.search);
					const se = (0, d.mL)(H.location.pathname, Z);
					let M = null,
						q = null;
					if (Z.get(u.BV)) M = Z.get(u.BV), H.location.hash && (q = H.location.hash);
					else if (ge) {
						const B = new URLSearchParams(ge);
						B.get(u.BV) && (M = B.get(u.BV), Z = B)
					} else se && (Z.set(u.BV, se), M = se);
					if (M && u._h.test(M)) {
						const B = Z.getAll(u.Kt),
							b = JSON.stringify(B);
						B.length && b !== W && K(b), Z.delete(u.Kt)
					}!x && ge === void 0 && M && Q(Z.toString());
					const ce = async () => {
						try {
							if ((0, d.I3)(M) && x && !A) {
								ge && Q(void 0), Y.dispatch((0, a.r4)()), ee(!0);
								const B = await (0, d.py)(M, ee, Y, H, k, new i(M, se ? `${H.location.pathname}${H.location.search}` : void 0));
								Z.delete(u.BV);
								const b = Z.toString();
								H.replace(D({}, H.location, {
									pathname: B,
									search: b
								}, q ? {
									hash: q
								} : {})), Y.dispatch((0, a.WF)())
							}
						} catch (B) {
							Y.dispatch((0, a.WF)()), console.error(B)
						} finally {
							ee(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ce()
					}, [H.location.pathname, H.location.search, A]), (oe || (0, d.I3)(M)) && x ? null : ne
				},
				G = n("../react/app/components/DeepLink/reducer.ts"),
				ve = z
		},
		"../react/app/components/DeepLink/reducer.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				E: function() {
					return d
				},
				r: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				c = n("../react/app/components/DeepLink/actions.ts");
			const d = null,
				g = o().from({
					lastAction: d,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function a(s = g, l) {
				if (l.type === c.MF.RESOLVING_COMPLETE) return g;
				if (l.type === c.MF.RESOLVING_START) return s.set("isResolving", !0);
				if (s.isResolving) {
					if (l.type === c.MF.RESOLVING_COMPLETE) return s.set("isResolving", !1);
					if (l.type === c.MF.SET_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", l.accountIds);
					if (l.type === c.MF.DELETE_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", void 0);
					{
						let h = s;
						try {
							h = s.set("lastAction", l)
						} catch {
							h = s.set("lastAction", {
								type: l.type
							})
						}
						return h
					}
				} else return s
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function($, _, n) {
			"use strict";
			n.d(_, {
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
			const e = d => d.deepLink.lastAction,
				o = d => d.deepLink.isResolving,
				c = d => d.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				I3: function() {
					return m
				},
				X1: function() {
					return r
				},
				mL: function() {
					return I
				},
				py: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../react/app/components/DeepLink/reducer.ts"),
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const d = D => D.replace(c.default.endsWithSlash, ""),
				g = D => {
					const U = d(D).split("/").slice(3);
					return U.length ? "/" + U.join("/") : ""
				},
				a = D => {
					const U = d(D).split("/").slice(2);
					return U.length ? `apps/${U.join("/")}` : "apps"
				};
			var s = n("../react/app/components/DeepLink/selectors.ts"),
				l = n("../react/app/components/DeepLink/constants.ts"),
				h = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const r = D => (0, h.Lb)(D) && (D.split(".").length > 1 || (0, t.v5)(D)),
				p = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				m = D => typeof D == "string" && D.startsWith("/"),
				i = (D, U) => P => new Promise((y, O) => {
					U.start();
					const z = D.subscribe(() => {
						const G = (0, s.yI)(D.getState());
						G === o.E ? (U.cancel(), z(), O("DeepLink: waitForAction out of context.")) : P(G) && (U.finish(G.type), z(), y(G))
					})
				}),
				C = (D, U, P) => (y, O) => new Promise((z, G) => {
					P.start();
					const ve = U.location.pathname;
					y = new URL(y, window.location.href).pathname, ve !== y && (P.cancel(), G(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${y}", but on "${ve}". You need to redirect to "${y}", and unblockRouter in your Resolver, before you use this function.`));
					const ne = D.subscribe(() => {
						const Y = (0, s.yI)(D.getState()),
							H = U.location.pathname,
							A = new URLSearchParams(U.location.search).get(l.BV);
						(H !== y || !!A) && (P.cancel(), ne(), G(`DeepLink: waitForPageAction user navigated away from "${y}" to "${H}${A?U.location.search:""}"`)), Y === o.E ? (P.cancel(), ne(), G("DeepLink: waitForPageAction out of context.")) : O(Y) && (P.finish(Y.type), ne(), z(Y))
					})
				});

			function u(D) {
				const U = [],
					P = D.split("?")[0].split("/");
				for (let y of P) y.length !== 0 && (y.startsWith(":") ? U.push({
					value: y.substring(1),
					type: "dynamic"
				}) : U.push({
					value: y,
					type: "static"
				}));
				return U
			}
			async function f(D, U, P, y, O, z) {
				z.start();
				const G = u(D),
					ne = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(77637), n.e(47756)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					Y = {};
				let H = "";
				for (const [k, A] of G.entries())
					if (A.type === "static") H = [H, A.value].join("/");
					else if (A.type === "dynamic" && p.is(A.value) && A.value in ne) {
					z.resolverStart(A.value);
					const oe = await ne[A.value]({
						deepLink: D,
						blockRouter: () => U(!0),
						unblockRouter: () => U(!1),
						routerHistory: y,
						resolvedValues: Y,
						store: P,
						referringRoute: O,
						uri: {
							currentPartIdx: k,
							parts: G
						},
						waitForAction: i(P, z.createUserActionTracker(A.value)),
						waitForPageAction: C(P, y, z.createUserActionTracker(A.value))
					});
					z.resolverDone(A.value), H = [H, oe].join("/"), Y[A.value] = oe
				} else throw z.cancel(), new Error(`DeepLink: Resolver with name '${A.value}' is not supported.`);
				return z.done(), H
			}

			function I(D, U) {
				const P = ":account",
					y = ":zone",
					O = U.get("zone");
				if (O) return U.delete("zone"), `/${P}/${y}/${O}`;
				const z = U.get("account");
				if (z) return U.delete("account"), `/${P}/${z}`;
				if (D === "/overview") return `/${P}/${y}`;
				if (D === "/apps") return `/${P}/${y}/${a(D)}`;
				const G = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const ve of G) {
					const ne = ve.length;
					if (D.startsWith(ve) && (D.length === ne || D[ne] === "/")) return `/${P}/${y}${D}`
				}
				switch (D) {
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
		"../react/app/components/ErrorBoundary.tsx": function($, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				d = n("../react/app/components/SomethingWrong.jsx"),
				g = n("../utils/sentry/lastSentEventId.ts"),
				a = n("../react/utils/zaraz.ts"),
				s = n("../react/utils/url.ts");
			const l = ({
				sentryTag: h,
				children: t
			}) => o().createElement(c.SV, {
				beforeCapture: r => {
					h && r.setTag("errorBoundary", h), a.tg === null || a.tg === void 0 || a.tg.track("page-error", {
						page: (0, s.Fl)(window.location.pathname)
					})
				},
				onError: r => {
					({
						REDUX_LOGGER: void 0
					}).TESTING && n.g.logAppError(r)
				},
				fallback: ({
					error: r,
					eventId: p
				}) => {
					const m = g.e.getEventId() || p;
					return o().createElement(d.Z, {
						type: "page",
						error: r,
						eventId: m
					})
				}
			}, t);
			_.Z = l
		},
		"../react/app/components/ErrorStatus.tsx": function($, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/style-container/es/index.js");

			function d(h, t) {
				if (h == null) return {};
				var r = g(h, t),
					p, m;
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(h);
					for (m = 0; m < i.length; m++) p = i[m], !(t.indexOf(p) >= 0) && (!Object.prototype.propertyIsEnumerable.call(h, p) || (r[p] = h[p]))
				}
				return r
			}

			function g(h, t) {
				if (h == null) return {};
				var r = {},
					p = Object.keys(h),
					m, i;
				for (i = 0; i < p.length; i++) m = p[i], !(t.indexOf(m) >= 0) && (r[m] = h[m]);
				return r
			}
			const a = (0, c.LM)(({
					margin: h
				}) => h ? {} : {
					height: 300,
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				}),
				s = (0, c.LM)(({
					theme: h,
					margin: t,
					size: r = 5
				}) => ({
					display: "flex",
					color: h.colors.gray[3],
					height: t ? "auto" : "100%",
					padding: t ? 0 : h.space[r > 1 ? r - 2 : 0],
					margin: t,
					justifyContent: "center",
					textAlign: "center",
					alignItems: "center",
					fontSize: h.fontSizes[r]
				})),
				l = h => {
					let {
						children: t
					} = h, r = d(h, ["children"]);
					return o().createElement(a, r, o().createElement(s, r, t))
				};
			_.Z = l
		},
		"../react/app/components/Footer.tsx": function($, _, n) {
			"use strict";
			n.d(_, {
				Z: function() {
					return Q
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				g = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				a = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				s = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = n.n(s),
				h = n("../react/common/components/Apple/utils.tsx"),
				t = n("../react/utils/translator.tsx"),
				r = n("../../../../node_modules/moment/moment.js"),
				p = n.n(r);
			const m = () => {
					const W = p()().format("YYYY"),
						K = x => {
							l().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: x
							})
						};
					return o().createElement(i, {
						marginTop: "auto"
					}, o().createElement(C, null, o().createElement(u, null, o().createElement(f, null, "\xA9 ", W, " Cloudflare, Inc."), o().createElement(f, null, o().createElement(I, null, o().createElement(D, {
						showOnDeskTop: !1
					}, o().createElement(U, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => K("Support")
					}, o().createElement(t.cC, {
						id: "common.support"
					}))), o().createElement(D, null, o().createElement(U, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => K("Privacy Policy")
					}, o().createElement(t.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(D, null, o().createElement(U, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => K("Terms of Use")
					}, o().createElement(t.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(D, null, o().createElement(U, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => K("Cookie Preferences")
					}, o().createElement(t.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(D, null, o().createElement(U, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => K("Trademark")
					}, o().createElement(t.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(I, null, o().createElement(D, null, o().createElement(U, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => K("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(t.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				i = (0, a.LM)(({
					theme: W,
					marginTop: K
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: K
				})),
				C = (0, a.LM)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				u = (0, a.LM)(({
					theme: W
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${W.space[3]}px`
					}
				})),
				f = (0, a.LM)(({
					theme: W
				}) => ({
					width: "100%",
					color: W.colors.white,
					fontSize: W.fontSizes[1],
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
				I = (0, a.LM)(({
					theme: W
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: W.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				D = (0, a.LM)(({
					showOnDeskTop: W = !0,
					theme: K
				}) => ({
					color: K.colors.white,
					fontSize: K.fontSizes[1],
					height: "20px",
					display: W ? "flex" : "none",
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
				U = (0, a.SU)(({
					theme: W
				}) => ({
					textDecoration: "none",
					color: W.colors.white,
					"&:hover": {
						color: W.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var P = m,
				y = n("../react/pages/welcome/routes.ts"),
				O = n("../react/utils/cookiePreferences.ts"),
				z = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				G = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				ne = () => {
					const [W, K] = (0, e.useState)(!1), x = (0, O.wV)(), Z = () => {
						K(!0)
					}, se = () => {
						K(!1)
					}, M = x && x === "US" ? (0, t.ZP)("footer.cpra_cta.privacy_choices") : (0, t.ZP)("footer.cpra_cta.cookie_preferences"), q = {
						background: "transparent",
						borderRadius: "none",
						color: W ? (0, z.Yc)() ? "#ee730a" : "#003681" : (0, z.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: W ? "underline" : "none",
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
						outline: "none",
						"&:focus": {
							outline: "2px solid #086fff"
						},
						border: "none",
						overflow: "hidden"
					};
					return o().createElement(d.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: q,
						onMouseEnter: Z,
						onMouseLeave: se
					}, o().createElement(d.Ei, {
						height: 15,
						src: G,
						mr: 2,
						alt: M
					}), M)
				};

			function Y() {
				return Y = Object.assign ? Object.assign.bind() : function(W) {
					for (var K = 1; K < arguments.length; K++) {
						var x = arguments[K];
						for (var Z in x) Object.prototype.hasOwnProperty.call(x, Z) && (W[Z] = x[Z])
					}
					return W
				}, Y.apply(this, arguments)
			}

			function H(W, K) {
				if (W == null) return {};
				var x = k(W, K),
					Z, se;
				if (Object.getOwnPropertySymbols) {
					var M = Object.getOwnPropertySymbols(W);
					for (se = 0; se < M.length; se++) Z = M[se], !(K.indexOf(Z) >= 0) && (!Object.prototype.propertyIsEnumerable.call(W, Z) || (x[Z] = W[Z]))
				}
				return x
			}

			function k(W, K) {
				if (W == null) return {};
				var x = {},
					Z = Object.keys(W),
					se, M;
				for (M = 0; M < Z.length; M++) se = Z[M], !(K.indexOf(se) >= 0) && (x[se] = W[se]);
				return x
			}
			const A = 24,
				oe = (0, a.SU)(() => ({
					textDecoration: "none",
					":hover": {
						textDecoration: "underline"
					}
				}), d.A),
				ee = W => {
					let {
						onClick: K
					} = W, x = H(W, ["onClick"]);
					return o().createElement(oe, Y({
						onClick: Z => {
							l().sendEvent("navigate footer nav", {
								destinationPage: x.href
							}), K && K(Z)
						}
					}, x))
				};
			var Q = () => {
				var W, K;
				const x = [y.d.root.pattern].some(Z => (0, c.matchPath)(location.pathname, {
					path: Z
				}));
				return (0, h.PP)() ? o().createElement(P, null) : x ? null : o().createElement(d.$_, {
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
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.contact_support"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, t.ZP)("footer.contact_sales"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "tel:+18889935273"
				}, (0, t.ZP)("footer.call_sales"))), o().createElement(d.Dd, {
					mt: 3
				}, o().createElement(d.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, o().createElement(ee, {
					"aria-label": (0, t.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${A}px`
				}, o().createElement(g.J, {
					type: "twitter",
					size: A
				})), o().createElement(ee, {
					"aria-label": (0, t.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${A}px`
				}, o().createElement(g.J, {
					type: "facebook",
					size: A
				})), o().createElement(ee, {
					"aria-label": (0, t.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${A}px`
				}, o().createElement(g.J, {
					type: "linkedin",
					size: A
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
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.cloudflare.com/plans"
				}, (0, t.ZP)("footer.plans"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.cloudflare.com/overview"
				}, (0, t.ZP)("footer.overview"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.cloudflare.com/features-cdn"
				}, (0, t.ZP)("footer.features"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.cloudflare.com/network-map"
				}, (0, t.ZP)("footer.network_map"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.cloudflareapps.com/apps"
				}, (0, t.ZP)("footer.apps"))))), o().createElement(d.ZC, {
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
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://developers.cloudflare.com"
				}, (0, t.ZP)("footer.product_docs"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://blog.cloudflare.com"
				}, (0, t.ZP)("footer.blog"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.cloudflare.com/case-studies"
				}, (0, t.ZP)("footer.testimonials"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://partners.cloudflare.com"
				}, (0, t.ZP)("footer.hosting_partners"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.cloudflare.com/customers"
				}, (0, t.ZP)("footer.customers"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
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
					title: `Current version: ${((W=window)===null||W===void 0||(K=W.build)===null||K===void 0?void 0:K.dashVersion)||"unknown"}`
				}), o().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.support")), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.help_center"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://community.cloudflare.com"
				}, (0, t.ZP)("footer.community"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.cloudflarestatus.com"
				}, (0, t.ZP)("footer.system_status"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
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
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.cloudflare.com/people"
				}, (0, t.ZP)("footer.team"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.cloudflare.com/careers"
				}, (0, t.ZP)("footer.careers"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.cloudflare.com/press-center"
				}, (0, t.ZP)("footer.press"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, t.ZP)("footer.tos"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, t.ZP)("footer.subs_agreement"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, t.ZP)("footer.privacy_policy"))))), o().createElement(ne, null)))
			}
		},
		"../react/app/components/LoadingSuspense.tsx": function($, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				g = n("../react/utils/translator.tsx"),
				a = n("../react/app/components/ErrorStatus.tsx"),
				s = n("../react/common/components/EmptyPage.jsx"),
				l = n("../react/common/hooks/suspenseHelpers.ts");

			function h(p) {
				const [m, i] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const C = window.setTimeout(() => i(!0), p);
					return () => window.clearTimeout(C)
				}, []), m
			}
			const t = ({
					loadingTimeout: p = 1e3,
					stillLoadingTimeout: m = 9e3
				}) => {
					const i = h(p),
						C = h(m);
					if ((0, l.nW)(), !i && !C) return o().createElement(s.Z, null);
					const u = C ? o().createElement(g.cC, {
						id: "common.still_loading"
					}) : i ? o().createElement(g.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(a.Z, {
						size: 5
					}, o().createElement(d.ZC, {
						mr: 3
					}, o().createElement(c.g, {
						size: "2x"
					})), u)
				},
				r = ({
					children: p
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(t, null)
				}, p);
			_.Z = r
		},
		"../react/app/components/Persistence/index.tsx": function($, _, n) {
			"use strict";
			n.d(_, {
				Wl: function() {
					return C
				},
				lp: function() {
					return y
				},
				Z_: function() {
					return z
				},
				r7: function() {
					return ee
				},
				Tv: function() {
					return K
				},
				yZ: function() {
					return G
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../react/app/redux/index.ts"),
				d = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = n.n(d),
				a = n("../react/utils/bootstrap.ts"),
				s = n("../react/common/selectors/zoneSelectors.ts"),
				l = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http");
			const h = "/persistence/user",
				t = async () => {
					try {
						return await (await l.get(h, {
							hideErrorAlert: !0
						})).body
					} catch (x) {
						console.error(x)
					}
				}, r = async (x, Z) => {
					try {
						return await (await l.post(`${h}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: x,
								accountId: Z
							}),
							hideErrorAlert: !0
						})).body
					} catch (se) {
						return console.error(se), []
					}
				}, p = async x => {
					try {
						return await (await l.post(h, {
							body: JSON.stringify({
								darkMode: x
							})
						})).body
					} catch (Z) {
						console.error(Z)
					}
				}, m = async x => {
					try {
						return await (await l.post(`${h}/recents`, {
							body: JSON.stringify(x),
							hideErrorAlert: !0
						})).body
					} catch (Z) {
						console.error(Z)
					}
				}, i = async x => {
					try {
						return await (await l.post(`${h}/viewed-changes`, {
							body: JSON.stringify(x),
							hideErrorAlert: !0
						})).body
					} catch (Z) {
						throw console.error(Z), Z
					}
				}, C = 10;

			function u(x) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var se = arguments[Z] != null ? Object(arguments[Z]) : {},
						M = Object.keys(se);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(se).filter(function(q) {
						return Object.getOwnPropertyDescriptor(se, q).enumerable
					})), M.forEach(function(q) {
						f(x, q, se[q])
					})
				}
				return x
			}

			function f(x, Z, se) {
				return Z = I(Z), Z in x ? Object.defineProperty(x, Z, {
					value: se,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[Z] = se, x
			}

			function I(x) {
				var Z = D(x, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function D(x, Z) {
				if (typeof x != "object" || x === null) return x;
				var se = x[Symbol.toPrimitive];
				if (se !== void 0) {
					var M = se.call(x, Z || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(x)
			}
			const U = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				P = u({}, U, {
					actions: {
						starZone: () => null,
						setDarkMode: () => null,
						isZoneStarred: () => !1,
						canAccountStarZone: () => !0,
						logRouteVisited: () => null,
						viewChange: () => null
					}
				}),
				y = (0, e.createContext)(P),
				O = y.Consumer,
				z = ({
					children: x,
					onDarkModeChangeCb: Z
				}) => {
					const [se, M] = (0, e.useState)(U), q = (0, a.$8)(), ce = (0, c.p4)(w => (0, s.wH)(w));
					(0, e.useEffect)(() => {
						q && t().then(w => {
							w && (M(w), Z(w.darkMode))
						})
					}, [q]);
					const B = (w, v) => !!se.favorites.find(j => j.type === "zone" && j.name === w && j.accountId === v),
						b = w => se.favorites.filter(j => j.type === "zone" && j.accountId === w).length < C;
					return o().createElement(y.Provider, {
						value: u({}, se, {
							actions: {
								canAccountStarZone: b,
								isZoneStarred: B,
								starZone: async (w, v) => {
									var j;
									const ie = !B(w, v),
										Te = b(v);
									if (ie && !Te) {
										console.log("can not star zone - account is at limit");
										return
									}
									const be = await r(w, v);
									g().sendEvent("click star zone", {
										isStarring: ie,
										totalStarredZones: be.filter(Ae => Ae.accountId === v && Ae.type === "zone").length,
										totalZones: ce == null || (j = ce.paginationData) === null || j === void 0 ? void 0 : j.info.total_count
									}), M(u({}, se, {
										favorites: be
									}))
								},
								setDarkMode: async w => {
									const v = await p(w);
									M(v), Z(v.darkMode)
								},
								logRouteVisited: async w => {
									var v;
									const j = await m(w);
									M((v = j) !== null && v !== void 0 ? v : u({}, se))
								},
								viewChange: async w => {
									const v = await i(w);
									M(u({}, se, {
										viewedChanges: v
									}))
								}
							}
						})
					}, x)
				},
				G = () => (0, e.useContext)(y);
			var ve = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				ne = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function Y() {
				return Y = Object.assign ? Object.assign.bind() : function(x) {
					for (var Z = 1; Z < arguments.length; Z++) {
						var se = arguments[Z];
						for (var M in se) Object.prototype.hasOwnProperty.call(se, M) && (x[M] = se[M])
					}
					return x
				}, Y.apply(this, arguments)
			}

			function H(x, Z) {
				if (x == null) return {};
				var se = k(x, Z),
					M, q;
				if (Object.getOwnPropertySymbols) {
					var ce = Object.getOwnPropertySymbols(x);
					for (q = 0; q < ce.length; q++) M = ce[q], !(Z.indexOf(M) >= 0) && (!Object.prototype.propertyIsEnumerable.call(x, M) || (se[M] = x[M]))
				}
				return se
			}

			function k(x, Z) {
				if (x == null) return {};
				var se = {},
					M = Object.keys(x),
					q, ce;
				for (ce = 0; ce < M.length; ce++) q = M[ce], !(Z.indexOf(q) >= 0) && (se[q] = x[q]);
				return se
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
			var ee = x => {
					let {
						isStarred: Z,
						size: se = 16
					} = x, M = H(x, ["isStarred", "size"]);
					const q = A[(0, ve.Yc)() ? "dark" : "light"];
					return o().createElement(ne.J, Y({
						type: Z ? "star" : "star-outline",
						color: Z ? q.gold : q.gray,
						size: se
					}, M))
				},
				ge = n("../../../../node_modules/@cloudflare/elements/es/index.js");
			const Q = {
				light: {
					default: {
						border: "gray.8",
						text: "gray.2",
						bg: "white"
					},
					active: {
						border: "blue.5",
						text: "blue.5",
						bg: "blue.9"
					}
				},
				dark: {
					default: {
						border: "gray.8",
						text: "gray.1",
						bg: "gray.7"
					},
					active: {
						border: "blue.5",
						text: "gray.1",
						bg: "blue.9"
					}
				}
			};
			var K = ({
				isStarred: x,
				onClickFn: Z,
				isDisabled: se,
				buttonText: M
			}) => {
				const q = Q[(0, ve.Yc)() ? "dark" : "light"][x ? "active" : "default"];
				return o().createElement(ge.zx, {
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: 3,
					gap: 1,
					pl: "12px",
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: "pointer",
					backgroundColor: q.bg,
					color: q.text,
					borderColor: q.border,
					onClick: Z,
					opacity: se ? .5 : 1,
					disabled: se
				}, o().createElement(ee, {
					isStarred: x
				}), M)
			}
		},
		"../react/app/components/SomethingWrong.jsx": function($, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				d = n.n(c),
				g = n("../../../common/intl/intl-react/src/index.ts"),
				a = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				s = n("../node_modules/@cloudflare/component-button/es/index.js"),
				l = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				h = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				r = n.n(t),
				p = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				i = n("../react/app/components/Footer.tsx"),
				C = n("../react/utils/url.ts");

			function u(H) {
				for (var k = 1; k < arguments.length; k++) {
					var A = arguments[k] != null ? Object(arguments[k]) : {},
						oe = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(A).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(A, ee).enumerable
					})), oe.forEach(function(ee) {
						f(H, ee, A[ee])
					})
				}
				return H
			}

			function f(H, k, A) {
				return k = I(k), k in H ? Object.defineProperty(H, k, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : H[k] = A, H
			}

			function I(H) {
				var k = D(H, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function D(H, k) {
				if (typeof H != "object" || H === null) return H;
				var A = H[Symbol.toPrimitive];
				if (A !== void 0) {
					var oe = A.call(H, k || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(H)
			}
			const U = (0, a.LM)(({
					type: H
				}) => ({
					height: H !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				P = (0, a.LM)(({
					theme: H,
					margin: k,
					size: A = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: H.colors.gray[3],
					height: k ? "auto" : "100%",
					padding: k ? 0 : H.space[A > 1 ? A - 2 : 0],
					margin: k,
					justifyContent: "center",
					alignItems: "center"
				})),
				y = (0, a.LM)(() => ({
					textAlign: "left"
				})),
				O = (0, a.LM)(() => ({
					textAlign: "right"
				})),
				z = (0, a.LM)(({
					theme: H
				}) => ({
					fontSize: H.fontSizes[6]
				})),
				G = (0, a.LM)(({
					theme: H
				}) => ({
					fontSize: H.fontSizes[4]
				})),
				ve = (0, a.LM)(({
					theme: H
				}) => ({
					fontSize: H.fontSizes[3]
				})),
				ne = (0, a.LM)(({
					theme: H
				}) => ({
					width: "100%",
					height: 125,
					marginTop: H.space[4],
					padding: H.space[2]
				}), "textarea");
			class Y extends o().Component {
				constructor(...k) {
					super(...k);
					f(this, "state", {
						value: "",
						submitted: !1
					}), f(this, "handleTextareaChange", A => {
						this.setState({
							value: A.target.value
						})
					}), f(this, "sendErrToSentry10", async () => {
						try {
							var A, oe, ee, ge;
							const Q = ((A = window) === null || A === void 0 || (oe = A.bootstrap) === null || oe === void 0 || (ee = oe.data) === null || ee === void 0 || (ge = ee.user) === null || ge === void 0 ? void 0 : ge.id) || "Unknown",
								W = this.props.eventId || l.eW(),
								K = {
									name: Q,
									email: `${Q}@userid.com`,
									comments: this.state.value,
									eventId: W,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: u({}, window.build)
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
					}), f(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), f(this, "renderContent", A => o().createElement(g.oc, null, oe => o().createElement(U, {
						type: A
					}, o().createElement(P, null, o().createElement(y, null, o().createElement(z, null, oe.t("error.internal_issues")), o().createElement(G, null, oe.t("error.help_us")), o().createElement(ne, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: ee => this.handleTextareaChange(ee),
						disabled: this.state.submitted,
						placeholder: oe.t("error.give_feedback")
					}), o().createElement(O, null, !this.state.submitted && o().createElement(s.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, oe.t("common.submit")), this.state.submitted && o().createElement(ve, null, oe.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const k = this.props.error;
					console.error(`SomethingWrong: ${k}`), h.YA("user_feedback_form_displayed", "yes"), h.YA("normalizedPath", (0, C.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: k
					} = this.props;
					return k === "fullscreen" ? o().createElement("div", null, o().createElement(p.h4, null, o().createElement(t.Link, {
						to: "/"
					}, o().createElement(m.TR, null))), this.renderContent(k), o().createElement(i.Z, null)) : this.renderContent(k)
				}
			}
			Y.propTypes = {
				type: d().oneOf(["fullscreen", "page"]),
				error: d().oneOfType([d().string, d().object]),
				eventId: d().string
			}, _.Z = Y
		},
		"../react/app/providers/storeContainer.js": function($, _, n) {
			"use strict";
			n.d(_, {
				bh: function() {
					return Fe
				}
			});
			var e = n("../../../../node_modules/redux/es/redux.js"),
				o = n("../../../../node_modules/redux-thunk/es/index.js"),
				c = n("../../../../node_modules/redux-persist/es/index.js"),
				d = n("../../../../node_modules/redux-persist/lib/storage/index.js"),
				g = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				a = n("../react/app/redux/makeReducer.js"),
				s = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = n.n(s);
			const h = s.static.from({
					data: void 0,
					errors: null,
					isRequesting: !1,
					isErrored: !1
				}),
				t = (T, {
					type: L,
					meta: J
				}) => J && J.method === "put" && L.indexOf("membership") === 0 ? h : T;
			var p = {
					reducer: (0, a.ZP)("invite").on("default", t)
				},
				m = n("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				i = n("../react/common/actionTypes.ts");
			const C = (T = l().from({
					isRequesting: !1,
					isErrored: !1,
					isFinished: !1,
					securityToken: null,
					errors: null
				}), L) => {
					switch (L.type) {
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
								errors: L.errors
							});
						case "ONBOARDING_SECURITY_TOKEN_UPDATE":
							return l().update(T, "securityToken", () => L.token)
					}
					return (0, m.h)(L, T)
				},
				u = {
					apikey: (0, a.ZP)(i.Yc.APIKEY),
					apitoken: (0, a.ZP)(i.Yc.APITOKEN),
					emailrollback: (0, a.ZP)(i.Yc.EMAIL_ROLLBACK),
					deleteuser: (0, a.ZP)(i.Yc.DELETE_USER),
					forgotpass: (0, a.ZP)(i.Yc.FORGOT_PASS),
					login: (0, a.ZP)(i.Yc.LOGIN),
					origincakey: (0, a.ZP)(i.Yc.ORIGIN_CA_KEY),
					signup: (0, a.ZP)(i.Yc.SIGNUP)
				};
			var f = {
				reducer: (0, e.combineReducers)({
					userCreation: C,
					[i.Yc.APIKEY]: u.apikey,
					[i.Yc.APITOKEN]: u.apitoken,
					[i.Yc.EMAIL_ROLLBACK]: u.emailrollback,
					[i.Yc.DELETE_USER]: u.deleteuser,
					[i.Yc.FORGOT_PASS]: u.forgotpass,
					[i.Yc.LOGIN]: u.login,
					[i.Yc.ORIGIN_CA_KEY]: u.origincakey,
					[i.Yc.SIGNUP]: u.signup
				})
			};

			function I(T = (0, s.static)({}), L) {
				switch (L.type) {
					case i.Li:
						const {
							userId: J, accountId: pe, timeStamp: Ee
						} = L;
						return s.static.setIn(T, [J, pe], {
							lastSeen: Ee
						});
					default:
						return T
				}
			}

			function D(T) {
				for (var L = 1; L < arguments.length; L++) {
					var J = arguments[L] != null ? Object(arguments[L]) : {},
						pe = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(J).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(J, Ee).enumerable
					})), pe.forEach(function(Ee) {
						U(T, Ee, J[Ee])
					})
				}
				return T
			}

			function U(T, L, J) {
				return L = P(L), L in T ? Object.defineProperty(T, L, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[L] = J, T
			}

			function P(T) {
				var L = y(T, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function y(T, L) {
				if (typeof T != "object" || T === null) return T;
				var J = T[Symbol.toPrimitive];
				if (J !== void 0) {
					var pe = J.call(T, L || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(T)
			}

			function O(T = {}, L) {
				const J = `__ACTIVE__${L.activeKey}`;
				switch (L.type) {
					case i.HI:
						return D({}, T, {
							[J]: L.activeValue
						});
					case i.s1:
						return D({}, T, {
							[J]: void 0
						});
					default:
						return T
				}
			}
			const z = () => [...Array(8)].map(T => Math.floor(Math.random() * 16).toString(16)).join(""),
				G = [];

			function ve(T, L) {
				if (T === void 0) return G;
				switch (L.type) {
					case i.Np: {
						const {
							payload: J,
							options: pe
						} = L, {
							ModalComponent: Ee,
							props: Ke
						} = J;
						return T = pe.replace ? G : T, [...T, {
							id: z(),
							ModalComponent: Ee,
							props: Ke
						}]
					}
					case i.gM: {
						const {
							ModalComponent: J
						} = L.payload;
						if (J) {
							const pe = T.findIndex(Ee => Ee.ModalComponent === J);
							return pe >= 0 ? T.slice(0, pe) : T
						} else return T.slice(0, -1)
					}
					default:
						return T
				}
			}

			function ne(T) {
				for (var L = 1; L < arguments.length; L++) {
					var J = arguments[L] != null ? Object(arguments[L]) : {},
						pe = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(J).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(J, Ee).enumerable
					})), pe.forEach(function(Ee) {
						Y(T, Ee, J[Ee])
					})
				}
				return T
			}

			function Y(T, L, J) {
				return L = H(L), L in T ? Object.defineProperty(T, L, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[L] = J, T
			}

			function H(T) {
				var L = k(T, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function k(T, L) {
				if (typeof T != "object" || T === null) return T;
				var J = T[Symbol.toPrimitive];
				if (J !== void 0) {
					var pe = J.call(T, L || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(T)
			}

			function A(T = {}, L) {
				const J = `__TOGGLE__${L.toggleKey}`;
				switch (L.type) {
					case i.lV:
						return ne({}, T, {
							[J]: !0
						});
					case i.Cm:
						return ne({}, T, {
							[J]: !1
						});
					default:
						return T
				}
			}
			const oe = {
				notifications: []
			};

			function ee(T, L) {
				switch (T === void 0 && (T = oe), L.type) {
					case i.Ng:
						return Object.assign({}, T, {
							notifications: T.notifications.concat(L.notification)
						});
					case i.Cz:
						return Object.assign({}, T, {
							notifications: T.notifications.filter(function(J) {
								return J.id !== L.notificationId
							})
						});
					default:
						return T
				}
			}

			function ge(T) {
				for (var L = 1; L < arguments.length; L++) {
					var J = arguments[L] != null ? Object(arguments[L]) : {},
						pe = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(J).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(J, Ee).enumerable
					})), pe.forEach(function(Ee) {
						Q(T, Ee, J[Ee])
					})
				}
				return T
			}

			function Q(T, L, J) {
				return L = W(L), L in T ? Object.defineProperty(T, L, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[L] = J, T
			}

			function W(T) {
				var L = K(T, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function K(T, L) {
				if (typeof T != "object" || T === null) return T;
				var J = T[Symbol.toPrimitive];
				if (J !== void 0) {
					var pe = J.call(T, L || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(T)
			}
			const x = T => (0, a.ZP)(T).on("success", (L, J, {
					meta: pe
				}) => {
					var Ee, Ke;
					const {
						accountId: it,
						zoneId: Ve,
						dateOnly: ot = !1
					} = pe.params || {};
					let qe = "";
					const Pe = {},
						pt = ge({}, (Ee = L.paginationData) === null || Ee === void 0 || (Ke = Ee.options) === null || Ke === void 0 ? void 0 : Ke.editedDate);
					L.data.forEach(mt => {
						const {
							id: rt,
							allocation: He,
							edited_date: ct
						} = mt;
						Pe[rt] = He.value, ct > qe && (qe = ct)
					}), pt[it || Ve] = qe;
					const Ye = {
						options: {
							editedDate: pt
						}
					};
					return ot ? ge({}, L, {
						paginationData: Ye
					}) : ge({}, L, {
						paginationData: Ye,
						data: Pe
					})
				}),
				Z = (0, e.combineReducers)({
					account: x("accountEntitlements"),
					zone: x("zoneEntitlements")
				});
			var se = n("../react/app/components/DeepLink/reducer.ts"),
				M = n("../react/pages/onboarding/components/guide/reducer.ts"),
				q = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js");

			function ce(T) {
				for (var L = 1; L < arguments.length; L++) {
					var J = arguments[L] != null ? Object(arguments[L]) : {},
						pe = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(J).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(J, Ee).enumerable
					})), pe.forEach(function(Ee) {
						B(T, Ee, J[Ee])
					})
				}
				return T
			}

			function B(T, L, J) {
				return L = b(L), L in T ? Object.defineProperty(T, L, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[L] = J, T
			}

			function b(T) {
				var L = w(T, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function w(T, L) {
				if (typeof T != "object" || T === null) return T;
				var J = T[Symbol.toPrimitive];
				if (J !== void 0) {
					var pe = J.call(T, L || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(T)
			}
			const v = (T, L) => {
				const {
					meta: J
				} = L;
				return J && J.method === "delete" && !T[J.entityType] ? T : (0, q.uW)(T, L)
			};
			var j = {
					access: (0, e.combineReducers)({
						accessOrganizations: (0, a.ZP)("organizations").modifyInitialState(T => ce({}, T, {
							needsHydration: !0,
							data: {
								auth_domain: "",
								name: "",
								login_design: {}
							}
						})).on("success", (T, L) => ce({}, T, {
							data: Array.isArray(T == null ? void 0 : T.data) ? L == null ? void 0 : L.data : T == null ? void 0 : T.data,
							needsHydration: !1
						})).on("error", T => ce({}, T, {
							needsHydration: !1
						}))
					}),
					accountAccess: I,
					accounts: (0, a.ZP)("accounts"),
					application: (0, e.combineReducers)({
						active: O,
						modals: ve,
						toggles: A
					}),
					deepLink: se.r,
					entitlements: Z,
					entities: v,
					gates: g.vq,
					notifications: ee,
					onboarding: f.reducer,
					onboardingGuide: M.F,
					userCommPreferences: (0, a.ZP)("userCommPreferences"),
					userDetails: (0, a.ZP)("userDetails"),
					invite: p.reducer,
					membership: (0, a.ZP)("membership"),
					memberships: (0, a.ZP)("memberships").on("success", (T, L, J) => J.meta.method === "delete" ? ce({}, T, {
						data: L.data.filter(pe => pe !== J.payload)
					}) : T),
					filteredMemberships: (0, a.ZP)("filteredMemberships"),
					user: (0, a.ZP)("user"),
					zone: (0, a.ZP)("zone"),
					zoneFlags: (0, a.ZP)("zoneFlags"),
					zoneSubscription: (0, a.ZP)("zoneSubscription"),
					zoneSubscriptions: (0, a.ZP)("zoneSubscriptions"),
					zones: (0, a.ZP)("zones"),
					zonesRoot: (0, a.ZP)("zonesRoot"),
					zonesAccount: (0, a.ZP)("zonesAccount")
				},
				ie = n("../react/app/redux/normalizer.js"),
				Te = n("../../../../node_modules/@sentry/react/esm/redux.js"),
				be = n("../react/common/selectors/zoneSelectors.ts"),
				Ae = n("../../../../node_modules/object.pick/index.js"),
				je = n.n(Ae);

			function Be(T) {
				for (var L = 1; L < arguments.length; L++) {
					var J = arguments[L] != null ? Object(arguments[L]) : {},
						pe = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(J).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(J, Ee).enumerable
					})), pe.forEach(function(Ee) {
						xe(T, Ee, J[Ee])
					})
				}
				return T
			}

			function xe(T, L, J) {
				return L = we(L), L in T ? Object.defineProperty(T, L, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[L] = J, T
			}

			function we(T) {
				var L = Ie(T, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function Ie(T, L) {
				if (typeof T != "object" || T === null) return T;
				var J = T[Symbol.toPrimitive];
				if (J !== void 0) {
					var pe = J.call(T, L || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(T)
			}
			const Ge = ["accountRoles", "accountSubscriptions", "application", "caching", "crypto", "customizations", "edgeauth", "access", "entitlements", "fields", "firewall", "notifications", "onboarding", "partners", "performance", "ratePlans", "settings", "traffic", "user", "zone", "zones"],
				Ue = T => {
					const L = je()(T, Ge),
						J = (0, be.nA)(T);
					return Be({}, L, {
						accountTwoFa: T.profile && T.profile.twoFactor,
						currentZone: je()(J, ["plan", "type"])
					})
				},
				le = ({
					type: T,
					meta: L
				}) => ({
					type: T,
					entityType: L && L.entityType
				});
			var ue = n("../react/app/reducerRegistry.js"),
				ye = n("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				me = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				he = n("../react/common/constants/index.ts"),
				ke = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				De = n("../react/app/redux/makeAction.js"),
				Le = n("../react/common/actions/membershipActions.ts");
			const Ze = "get";

			function* N(T) {
				const L = {
					entityType: T.entityType,
					method: Ze
				};
				try {
					yield(0, me.gw)(200), yield(0, me.gz)((0, De.dJ)({
						type: `${T.entityType}.start`,
						meta: L
					}));
					const J = yield(0, me.RE)(ke[Ze], T.url, T.params[0]);
					let pe = J && J.body;
					T.type === he.UM.MEMBERSHIPS_ROOT_REQUESTED && (pe = (0, Le.ct)({
						payload: pe.result
					})), yield(0, me.gz)((0, De.Oy)({
						type: `${T.entityType}.success`,
						payload: pe,
						meta: {
							entityType: T.entityType,
							method: Ze
						}
					}, {}, T.params, {}, J))
				} catch (J) {
					throw yield(0, me.gz)((0, De.$J)({
						type: `${T.entityType}.error`,
						payload: J,
						error: !0,
						meta: L
					}, {}, T.params, {}, J)), J
				}
			}
			var X = [(0, me.Fm)(he.UM.ZONES_ROOT_REQUESTED, N), (0, me.Fm)(he.UM.ZONES_ACCOUNT_REQUESTED, N), (0, me.Fm)(he.UM.ZONES_HEADER_REQUESTED, N), (0, me.Fm)(he.UM.MEMBERSHIPS_ROOT_REQUESTED, N), (0, me.Fm)(he.UM.ACCOUNT_MEMBERS_REQUESTED, N)],
				fe = n("../react/pages/apps/marketplace/config/sagas.ts");

			function* Oe() {
				yield(0, me.$6)([...X, ...fe.y])
			}
			var Me = n("../react/app/redux/processActionMiddleware.js"),
				Ne = n("../../../../node_modules/is-promise/index.js"),
				$e = n.n(Ne);

			function st(T) {
				for (var L = 1; L < arguments.length; L++) {
					var J = arguments[L] != null ? Object(arguments[L]) : {},
						pe = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(J).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(J, Ee).enumerable
					})), pe.forEach(function(Ee) {
						nt(T, Ee, J[Ee])
					})
				}
				return T
			}

			function nt(T, L, J) {
				return L = dt(L), L in T ? Object.defineProperty(T, L, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[L] = J, T
			}

			function dt(T) {
				var L = Re(T, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function Re(T, L) {
				if (typeof T != "object" || T === null) return T;
				var J = T[Symbol.toPrimitive];
				if (J !== void 0) {
					var pe = J.call(T, L || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(T)
			}
			const Qe = {
					key: "cf-redux-store",
					storage: d.Z,
					whitelist: ["accountAccess", "invite"]
				},
				Xe = (0, ye.ZP)(),
				te = [({
					dispatch: T
				}) => L => J => $e()(J) ? J.then(pe => T(pe)) : L(J), Xe, o.Z, Me.Z, ie.qR],
				ae = T => (0, c.Wq)(Qe, st({}, j, T));

			function re() {
				const T = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					J = e.compose((0, e.applyMiddleware)(...te), Te.w({
						actionTransformer: le,
						stateTransformer: Ue
					})),
					pe = {},
					Ee = (0, e.createStore)(ae(ue.Z.getReducers()), pe, J);
				Xe.run(Oe), (0, c.p5)(Ee);
				const it = (n.g.bootstrap || {}).data || {};
				return Ee.dispatch((0, q.mW)("user", it.user)), Ee
			}
			let _e;
			ue.Z.setChangeListener(T => {
				var L;
				_e && ((L = _e) === null || L === void 0 ? void 0 : L.replaceReducer) && (_e.replaceReducer(ae(T)), (0, c.p5)(_e))
			});

			function Fe() {
				return _e || (_e = re()), _e
			}
		},
		"../react/app/reducerRegistry.js": function($, _, n) {
			"use strict";

			function e(s) {
				for (var l = 1; l < arguments.length; l++) {
					var h = arguments[l] != null ? Object(arguments[l]) : {},
						t = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && t.push.apply(t, Object.getOwnPropertySymbols(h).filter(function(r) {
						return Object.getOwnPropertyDescriptor(h, r).enumerable
					})), t.forEach(function(r) {
						o(s, r, h[r])
					})
				}
				return s
			}

			function o(s, l, h) {
				return l = c(l), l in s ? Object.defineProperty(s, l, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[l] = h, s
			}

			function c(s) {
				var l = d(s, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function d(s, l) {
				if (typeof s != "object" || s === null) return s;
				var h = s[Symbol.toPrimitive];
				if (h !== void 0) {
					var t = h.call(s, l || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(s)
			}
			class g {
				constructor() {
					this.listener = null, this.reducers = {}
				}
				getReducers() {
					return e({}, this.reducers)
				}
				emitChange() {
					this.listener && this.listener(this.getReducers())
				}
				register(l, h) {
					this.reducers = e({}, this.reducers, {
						[l]: h
					}), this.emitChange()
				}
				registerAll(l) {
					this.reducers = e({}, this.reducers, l), this.emitChange()
				}
				setChangeListener(l) {
					this.listener = l
				}
			}
			const a = new g;
			_.Z = a
		},
		"../react/app/redux/index.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				TZ: function() {
					return c
				},
				UM: function() {
					return g
				},
				ZS: function() {
					return d
				},
				p4: function() {
					return a
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e);
			const c = () => (0, e.useStore)(),
				d = () => c().getState(),
				g = () => (0, e.useDispatch)(),
				a = e.useSelector
		},
		"../react/app/redux/makeAction.js": function($, _, n) {
			"use strict";
			n.d(_, {
				$J: function() {
					return p
				},
				Oy: function() {
					return r
				},
				SC: function() {
					return h
				},
				ZP: function() {
					return m
				},
				dJ: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				o = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				c = n.n(o);

			function d(i) {
				for (var C = 1; C < arguments.length; C++) {
					var u = arguments[C] != null ? Object(arguments[C]) : {},
						f = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(u).filter(function(I) {
						return Object.getOwnPropertyDescriptor(u, I).enumerable
					})), f.forEach(function(I) {
						g(i, I, u[I])
					})
				}
				return i
			}

			function g(i, C, u) {
				return C = a(C), C in i ? Object.defineProperty(i, C, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[C] = u, i
			}

			function a(i) {
				var C = s(i, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function s(i, C) {
				if (typeof i != "object" || i === null) return i;
				var u = i[Symbol.toPrimitive];
				if (u !== void 0) {
					var f = u.call(i, C || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(i)
			}
			const l = d({}, o),
				h = (i, C, u, f = {}) => {
					const I = i === "delete" ? "del" : i.toLowerCase();
					return u && I !== "del" && (f.body = u), l[I](C, f)
				},
				t = (i, C) => (i.meta.params = C, i),
				r = (i, C, u, f, {
					body: I = {}
				}) => {
					const {
						result: D,
						messages: U,
						result_info: P
					} = I, y = Object.values(C);
					if (i.meta.method === "delete") {
						const O = y[y.length - 1];
						i.meta.id = typeof O == "object" ? O.id : O
					}
					return i.payload = D, U && (i.meta.messages = U), y.length && (i.meta.params = C), P && (i.meta.paginationData = {
						info: P,
						actionParameters: y,
						options: u[0],
						insertionOffset: 0
					}), i
				},
				p = (i, C, u, f, I) => (i.payload = I && I.body && I.body.errors, i.meta.messages = I && I.body && I.body.messages, i.meta.params = C, i);

			function m(i, C, u, f) {
				const I = (0, e.RM)(i, C, u, f).apiFetch(h).on("start", t).on("success", r).on("error", p),
					D = I.mock;
				return I.mock = U => (D((...P) => {
					const y = U(...P);
					return y && typeof y == "object" && "result" in y ? y : {
						result: y
					}
				}), I), I
			}
		},
		"../react/app/redux/makeActionCreator.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				C: function() {
					return o
				}
			});
			var e = n("../react/app/redux/makeAction.js");

			function o(d, g) {
				return {
					get: (a, ...s) => (0, e.ZP)(d, "get", c(a, s), g),
					post: (a, ...s) => (0, e.ZP)(d, "post", c(a, s), g),
					delete: (a, ...s) => (0, e.ZP)(d, "delete", c(a, s), g),
					put: (a, ...s) => (0, e.ZP)(d, "put", c(a, s), g),
					patch: (a, ...s) => (0, e.ZP)(d, "patch", c(a, s), g)
				}
			}

			function c(d, g) {
				let a = "";
				const s = [...d.raw],
					l = [...g];
				for (; s.length > 0 || l.length > 0;) {
					const h = s.shift(),
						t = l.shift();
					a += h !== void 0 ? h : "", a += t !== void 0 ? `(${t})` : ""
				}
				return a
			}
		},
		"../react/app/redux/makeReducer.js": function($, _, n) {
			"use strict";
			n.d(_, {
				ZP: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				c = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				d = n("../../../../node_modules/lodash/clone.js"),
				g = n.n(d);
			const a = e.static.from([]);

			function s(r, p, {
				meta: {
					paginationData: m,
					messages: i
				}
			}) {
				let C = e.static.set(r, "messages", i || a);
				return m ? e.static.merge(C, {
					paginationData: m
				}) : C
			}

			function l(r, p, {
				meta: {
					errors: m,
					messages: i
				}
			}) {
				const C = {
					messages: i || a
				};
				return m && (C.errors = m), e.static.merge(r, C)
			}

			function h(r, p, m = {}) {
				const {
					data: i
				} = r;
				if (p.type === `${m.insertDelete}.success`) {
					const {
						method: C
					} = p.meta;
					let u = 0,
						f = r;
					if (C === "post") {
						const I = i ? [p.payload, ...i] : [p.payload];
						f = e.static.set(f, "data", I), u = 1
					} else if (C === "delete" && i && i.includes(p.meta.id)) {
						const I = i.filter(D => D !== p.meta.id);
						f = e.static.set(f, "data", I), u = -1
					}
					return u && r.paginationData && (f = e.static.setIn(f, ["paginationData", "insertionOffset"], r.paginationData.insertionOffset + u)), f
				}
				return p.type === "cfForceUpdate" ? e.static.set(r, "data", g()(i)) : r
			}

			function t(r, p = {}) {
				return p.errorKey = "errors", (0, c.j3)(r, p).modifyInitialState(m => e.static.set(m, "messages", a)).on("success", s).on("error", l).on("default", h)
			}
		},
		"../react/app/redux/normalizer.js": function($, _, n) {
			"use strict";
			n.d(_, {
				P1: function() {
					return h
				},
				jQ: function() {
					return s
				},
				qR: function() {
					return t
				},
				uc: function() {
					return l
				}
			});
			var e = n("../react/pages/home/alerts/config.tsx"),
				o = n("../react/pages/workers/entityTypes.ts"),
				c = n("../react/pages/email/types.ts"),
				d = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				g = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				a = n.n(g);
			const s = g.static.from([{
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
					entityType: "tcpFlowProtectionRule"
				}, {
					entityType: "tcpFlowProtectionRules",
					to: "tcpFlowProtectionRule"
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
					entityType: "accountEnvironments"
				}, {
					entityType: "zoneEnvironments"
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
				l = r => r.entities,
				h = (...r) => (0, d.P1)(s, l, ...r),
				t = (0, d.QB)(s)
		},
		"../react/app/redux/processActionMiddleware.js": function($, _, n) {
			"use strict";
			var e = n("../react/app/redux/normalizer.js");
			const o = ".success",
				c = () => {
					const d = new Map,
						g = s => {
							const l = e.jQ.find(h => h.entityType === s);
							return l && (l.to ? l.to : l.entityType)
						},
						a = () => s => l => {
							if (l.type.endsWith(o)) {
								const h = l.type.substring(0, l.type.length - o.length),
									t = g(h),
									r = d.get(t);
								return s(r ? r(l) : l)
							}
							return s(l)
						};
					return a.on = (s, l) => {
						let h = d.get(s);
						d.set(s, t => l(h ? h(t) : t))
					}, a
				};
			_.Z = c()
		},
		"../react/app/redux/utils.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				F: function() {
					return c
				},
				_: function() {
					return o
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const o = d => (g, a, s) => (0, e.SC)(g, a, s, {
					hideErrorAlert: !0
				}).catch(d),
				c = d => g => {
					if (g.status === d) return g;
					throw g
				}
		},
		"../react/common/actionTypes.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Cm: function() {
					return a
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return s
				},
				Li: function() {
					return h
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
					return d
				},
				lV: function() {
					return g
				},
				s1: function() {
					return l
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				c = "MODAL_OPEN",
				d = "MODAL_CLOSE",
				g = "TOGGLE_ON",
				a = "TOGGLE_OFF",
				s = "SET_ACTIVE",
				l = "CLEAR_ACTIVE",
				h = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(p) {
				return p.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", p.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", p.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", p.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", p.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", p.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", p.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", p.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", p.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", p
			}({})
		},
		"../react/common/actions/membershipActions.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				AX: function() {
					return p
				},
				YT: function() {
					return h
				},
				ct: function() {
					return s
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

			function c(m) {
				for (var i = 1; i < arguments.length; i++) {
					var C = arguments[i] != null ? Object(arguments[i]) : {},
						u = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(C).filter(function(f) {
						return Object.getOwnPropertyDescriptor(C, f).enumerable
					})), u.forEach(function(f) {
						d(m, f, C[f])
					})
				}
				return m
			}

			function d(m, i, C) {
				return i = g(i), i in m ? Object.defineProperty(m, i, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[i] = C, m
			}

			function g(m) {
				var i = a(m, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function a(m, i) {
				if (typeof m != "object" || m === null) return m;
				var C = m[Symbol.toPrimitive];
				if (C !== void 0) {
					var u = C.call(m, i || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(m)
			}
			const s = m => {
					const i = m.payload.map(C => c({}, C, {
						membershipId: C.id,
						id: C.account.id
					}));
					return c({}, m, {
						payload: i
					})
				},
				l = m => {
					const i = s(m);
					return Array.isArray(i.payload) ? c({}, m, {
						payload: i.payload[0]
					}) : c({}, m, {
						payload: null
					})
				},
				h = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", s),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...m) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: m
				}),
				p = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", l)
		},
		"../react/common/actions/modalActions.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				M: function() {
					return d
				},
				h: function() {
					return c
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function c(g, a, s = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: g,
						props: a
					},
					options: s
				}
			}

			function d(g) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: g
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				IH: function() {
					return g
				},
				Vp: function() {
					return a
				},
				ZK: function() {
					return l
				},
				um: function() {
					return s
				},
				vU: function() {
					return h
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
			let d = 0;

			function g(t, r, p = {}) {
				return p = p || {},
					function(m) {
						let i = d++,
							C = {
								id: i,
								type: t,
								message: r,
								delay: p.delay,
								persist: p.persist === void 0 ? !1 : p.persist,
								closable: p.closable === void 0 ? !0 : p.closable,
								onClose() {
									m(c(i)), p.onClose && p.onClose.apply(null, arguments)
								}
							};
						m(o(C))
					}
			}

			function a(t, r) {
				return g("success", t, r)
			}

			function s(t, r) {
				return g("info", t, r)
			}

			function l(t, r) {
				return g("warning", t, r)
			}

			function h(t, r) {
				return g("error", t, r)
			}
		},
		"../react/common/actions/userActions.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				BT: function() {
					return s
				},
				Ut: function() {
					return f
				},
				V_: function() {
					return I
				},
				Y9: function() {
					return C
				},
				Z0: function() {
					return U
				},
				mp: function() {
					return u
				},
				r3: function() {
					return D
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/app/redux/utils.ts");

			function c(P) {
				for (var y = 1; y < arguments.length; y++) {
					var O = arguments[y] != null ? Object(arguments[y]) : {},
						z = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(O).filter(function(G) {
						return Object.getOwnPropertyDescriptor(O, G).enumerable
					})), z.forEach(function(G) {
						d(P, G, O[G])
					})
				}
				return P
			}

			function d(P, y, O) {
				return y = g(y), y in P ? Object.defineProperty(P, y, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[y] = O, P
			}

			function g(P) {
				var y = a(P, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function a(P, y) {
				if (typeof P != "object" || P === null) return P;
				var O = P[Symbol.toPrimitive];
				if (O !== void 0) {
					var z = O.call(P, y || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(P)
			}
			const s = (0, e.C)("user").get`/user`,
				l = (0, e.C)("user").patch`/user`,
				h = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				p = (0, e.C)("user").put`/user/two_factor_authentication`,
				m = (0, e.C)("user").delete`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/email`;

			function C(...P) {
				return i(...P)
			}
			const u = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				f = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(P => c({}, P, {
					body: c({}, P.body, {
						result: {}
					})
				}))),
				I = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				D = (0, e.C)("userDetails").get`/user/details`,
				U = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/Apple/utils.tsx": function($, _, n) {
			"use strict";
			n.d(_, {
				PP: function() {
					return r
				},
				RJ: function() {
					return s
				},
				tz: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				d = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				g = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const a = () => l.test(window.location.pathname) || c.E.has(d.Qq),
				s = () => c.E.get(d.Qq),
				l = /^\/login\/apple(\/)?/,
				t = [l, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let m = !1;
					t.forEach(C => {
						if (C.test(window.location.pathname)) {
							m = !0;
							return
						}
					});
					const i = a() && m;
					return i && (0, g.C8)(g.LF.OFF), i
				},
				p = m => {
					m && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let i = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					m && (i = i + `&jwt=${m}`), window.location.href = i
				}
		},
		"../react/common/components/EmptyPage.jsx": function($, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				d = n.n(c),
				g = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const a = ({
				children: s
			}) => o().createElement(g.xu, {
				height: 411
			}, s);
			a.propTypes = {
				children: d().node
			}, _.Z = a
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				BQ: function() {
					return t
				},
				Gn: function() {
					return l
				},
				JR: function() {
					return h
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return a
				},
				ZI: function() {
					return g
				},
				if: function() {
					return o
				},
				q6: function() {
					return c
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
				c = "date-from",
				d = "date-to",
				g = "from",
				a = "to",
				s = "all",
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
			let h = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				t = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/constants/billing/index.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Gq: function() {
					return d
				},
				g$: function() {
					return c
				},
				WX: function() {
					return e
				},
				E0: function() {
					return h
				},
				Hw: function() {
					return a
				},
				Ed: function() {
					return g
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return i
				},
				hQ: function() {
					return s
				},
				SP: function() {
					return l
				}
			});
			let e = function(C) {
				return C.page_rules = "page_rules", C.automatic_platform_optimization = "automatic_platform_optimization", C
			}({});
			const o = "page_rules",
				c = "automatic_platform_optimization",
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
				g = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				a = {
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
				},
				t = new Set(["AZ", "CT", "DC", "HI", "IA", "IL", "OH", "NY", "PA", "SD", "TX", "WA", "WV"]),
				r = new Map([
					["RU", null],
					["US", t]
				]);
			var p = n("../react/common/constants/billing/tracking.ts"),
				m = n("../react/pages/zoneless-workers/constants.ts");
			const i = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				FP: function() {
					return e
				},
				Nl: function() {
					return g
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
				d = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				g = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Dk: function() {
					return m
				},
				Dy: function() {
					return i
				},
				E_: function() {
					return a
				},
				Lv: function() {
					return C
				},
				S4: function() {
					return g
				},
				UM: function() {
					return t
				},
				Xf: function() {
					return h
				},
				Y1: function() {
					return s
				},
				p6: function() {
					return l
				},
				q0: function() {
					return d
				},
				sJ: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const d = "healthy",
				g = "degraded",
				a = "critical",
				s = "unknown",
				l = "not-monitored",
				h = o().from({
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
					f: h.FREE,
					p: h.PRO,
					b: h.BIZ
				},
				p = "marketing-pt",
				m = () => {
					const u = c.Z.get(p);
					if (!!u) return r[u]
				},
				i = ["gov"],
				C = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"]
		},
		"../react/common/constants/index.ts": function($, _, n) {
			"use strict";
			n.d(_, {
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
				sJ: function() {
					return e.sJ
				}
			});
			var e = n("../react/common/constants/constants.ts"),
				o = n("../react/common/constants/billing/index.ts")
		},
		"../react/common/hooks/suspenseHelpers.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				bt: function() {
					return s
				},
				nW: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const d = "suspenseComplete";

			function g() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(d))
				}, [])
			}

			function a(l) {
				(0, c.OR)(d, () => {
					window.setTimeout(l, 0)
				}, {
					target: window
				})
			}

			function s(...l) {
				const [h, t] = l;
				o().useLayoutEffect(h, t), a(h)
			}
		},
		"../react/common/hooks/useCachedState.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				j: function() {
					return d
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function d(g, {
				key: a,
				cache: s = c.E
			} = {}) {
				const l = a !== void 0 && s.get(a),
					[h, t] = (0, e.useState)(l || g);
				return [h, p => {
					t(m => (p instanceof Function && (p = p(m)), a !== void 0 && s.set(a, p), p))
				}]
			}
		},
		"../react/common/hooks/usePrevious.ts": function($, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function c(d) {
				const g = (0, e.useRef)(d);
				return (0, e.useEffect)(() => {
					g.current = d
				}, [d]), g.current
			}
			_.Z = c
		},
		"../react/common/middleware/sparrow/errors.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Uh: function() {
					return g
				},
				ez: function() {
					return d
				},
				oV: function() {
					return a
				}
			});

			function e(s, l, h) {
				return l = o(l), l in s ? Object.defineProperty(s, l, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[l] = h, s
			}

			function o(s) {
				var l = c(s, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function c(s, l) {
				if (typeof s != "object" || s === null) return s;
				var h = s[Symbol.toPrimitive];
				if (h !== void 0) {
					var t = h.call(s, l || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(s)
			}
			class d extends Error {
				constructor(l, h) {
					super(h);
					e(this, "eventName", void 0), this.eventName = l, this.name = "SparrowValidationError"
				}
			}
			class g extends d {
				constructor(l) {
					super(l, `Event not allowed: "${l}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class a extends d {
				constructor(l, h) {
					super(l, `Found invalid properties on event: "${l}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = h
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				AC: function() {
					return le
				},
				Au: function() {
					return De
				},
				B: function() {
					return je
				},
				B3: function() {
					return Ie
				},
				BG: function() {
					return P
				},
				Bp: function() {
					return Qe
				},
				D0: function() {
					return f
				},
				DT: function() {
					return M
				},
				EL: function() {
					return K
				},
				GE: function() {
					return st
				},
				Ko: function() {
					return se
				},
				Kx: function() {
					return z
				},
				Le: function() {
					return G
				},
				O4: function() {
					return Ge
				},
				Ou: function() {
					return ge
				},
				Py: function() {
					return ue
				},
				QI: function() {
					return Ne
				},
				RO: function() {
					return be
				},
				T3: function() {
					return he
				},
				T8: function() {
					return U
				},
				UX: function() {
					return W
				},
				VP: function() {
					return Oe
				},
				Xo: function() {
					return me
				},
				Xu: function() {
					return A
				},
				Yi: function() {
					return Xe
				},
				Yj: function() {
					return Z
				},
				Zu: function() {
					return x
				},
				bC: function() {
					return B
				},
				f8: function() {
					return Y
				},
				hN: function() {
					return O
				},
				hX: function() {
					return Ae
				},
				iq: function() {
					return we
				},
				nE: function() {
					return y
				},
				oD: function() {
					return Q
				},
				oI: function() {
					return ne
				},
				oJ: function() {
					return ke
				},
				uF: function() {
					return oe
				},
				ut: function() {
					return ye
				},
				vU: function() {
					return nt
				},
				wQ: function() {
					return v
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				o = n("../../../../node_modules/lodash/get.js"),
				c = n.n(o),
				d = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				g = n.n(d),
				a = n("../../../../node_modules/reselect/lib/index.js"),
				s = n("../../../../node_modules/moment/moment.js"),
				l = n.n(s),
				h = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				r = n("../react/common/selectors/userSelectors.ts"),
				p = n("../react/app/components/DeepLink/selectors.ts");

			function m(R) {
				for (var te = 1; te < arguments.length; te++) {
					var ae = arguments[te] != null ? Object(arguments[te]) : {},
						re = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(ae).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(ae, _e).enumerable
					})), re.forEach(function(_e) {
						i(R, _e, ae[_e])
					})
				}
				return R
			}

			function i(R, te, ae) {
				return te = C(te), te in R ? Object.defineProperty(R, te, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[te] = ae, R
			}

			function C(R) {
				var te = u(R, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function u(R, te) {
				if (typeof R != "object" || R === null) return R;
				var ae = R[Symbol.toPrimitive];
				if (ae !== void 0) {
					var re = ae.call(R, te || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(R)
			}
			const f = R => {
					const te = oe(R);
					return te == null ? void 0 : te.account
				},
				I = R => {
					const te = (0, r.PR)(R);
					if (te) {
						const ae = te.id;
						return R.accountAccess[ae] || {}
					}
					return {}
				},
				D = R => R.accountsDetailed,
				U = (0, t.P1)("accountsDetailed", D),
				P = R => R.memberships,
				y = (0, a.P1)((0, t.P1)("memberships", P), p.U, (R, te) => !!te && !!R ? R.filter(ae => te.includes(ae.id)) : R),
				O = R => R.accountFlags && R.accountFlags.data,
				z = R => R.accountFlags,
				G = (R, te, ae) => {
					const re = O(R);
					return !re || !re[te] ? null : re[te][ae]
				},
				ve = R => R.accountFlags.isRequesting,
				ne = (R, ...te) => c()(R, ["accountFlagsChanges", "data", ...te]),
				Y = R => R.accountFlagsChanges.isRequesting,
				H = (0, a.P1)(O, z, (R, te) => ({
					data: R,
					meta: te
				})),
				k = (R, te, ae) => !!(isEnterpriseSSEnabledSelector(R) && G(R, te, ae)),
				A = R => R.membership,
				oe = (0, t.P1)("membership", A),
				ee = (0, a.P1)(oe, A, (R, te) => ({
					data: R,
					meta: te
				})),
				ge = R => {
					const {
						roles: te = []
					} = oe(R) || {};
					return Boolean(te.find(ae => ae === "Super Administrator - All Privileges" || ae === "Billing"))
				},
				Q = R => {
					const te = I(R),
						ae = Re.getMemberships(R) ? g().asMutable(Re.getMemberships(R)) : [];
					if (!!ae) return g().from(ae.map(re => m({}, re, {
						lastSeen: te[re.account.id] ? te[re.account.id].lastSeen : null
					})).sort((re, _e) => re.lastSeen && _e.lastSeen ? _e.lastSeen - re.lastSeen : 0))
				},
				W = R => R.filteredMemberships,
				K = (0, t.P1)("filteredMemberships", W),
				x = (0, a.P1)(oe, R => R == null ? void 0 : R.permissions),
				Z = (0, a.P1)(x, R => (0, e.Z)(te => {
					var ae;
					return (ae = R == null ? void 0 : R[te]) !== null && ae !== void 0 ? ae : {
						read: !1,
						edit: !1
					}
				})),
				se = (0, a.P1)(oe, R => R == null ? void 0 : R.policies),
				M = (R, te, ae) => {
					let re = Re.getMembership(R);
					if (!re) {
						const _e = Re.getMemberships(R);
						if (!_e || !te) return !1;
						re = _e.find(Fe => Fe.account.id === te)
					}
					if (!re || !ae) return !1;
					try {
						return ae(re.permissions)
					} catch {
						return !1
					}
				},
				q = R => {
					var te, ae;
					return (te = (ae = f(R)) === null || ae === void 0 ? void 0 : ae.meta.has_pro_zones) !== null && te !== void 0 ? te : !1
				},
				ce = R => {
					var te, ae;
					return (te = (ae = f(R)) === null || ae === void 0 ? void 0 : ae.meta.has_business_zones) !== null && te !== void 0 ? te : !1
				},
				B = R => ce(R) || q(R),
				b = (R, te) => {
					const ae = w(R, te);
					return !!ae && !!ae.enabled
				},
				w = (R, te) => {
					const ae = Re.getMembership(R),
						re = ae && ae.account;
					return re && re.legacy_flags && re.legacy_flags[te]
				},
				v = R => b(R, "custom_pages"),
				j = R => !!R && R["webhooks.webhooks.enabled"],
				ie = R => G(R, "bots", "enabled"),
				Te = R => G(R, "billing", "annual_subscriptions_enable"),
				be = R => R ? Boolean(G(R, "ConstellationAI", "v2_ui")) : !1,
				Ae = R => R ? Boolean(G(R, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				je = R => R ? Boolean(G(R, "AIgateway", "enabled")) : !1,
				Be = R => w(R, "enterprise_zone_quota"),
				xe = R => {
					const te = Be(R);
					return !te || !te.available ? -1 : te.available
				},
				we = R => R.accountMembers,
				Ie = (0, t.P1)("accountMembers", we),
				Ge = R => R.accountMember && R.accountMember.isRequesting,
				Ue = R => R.accountRoles,
				le = (0, t.P1)("accountRoles", Ue),
				ue = (R, te) => {
					const ae = Re.getMemberships(R),
						re = ae && ae.find(T => T.account.id === te);
					if (re) return re.account.name.replace(" Account", " account");
					const _e = Re.getMembership(R),
						Fe = _e && _e.account;
					return Fe && Fe.id === te ? Fe.name : null
				},
				ye = (R, te) => {
					const ae = Re.getMemberships(R),
						re = ae && ae.find(T => T.account.id === te);
					if (re) return re.account.settings.access_approval_expiry;
					const _e = Re.getMembership(R),
						Fe = _e && _e.account;
					return Fe && Fe.id === te ? Fe.settings.access_approval_expiry : null
				},
				me = (R, te) => {
					const ae = ye(R, te);
					return ae ? l().utc(ae).isAfter() : !1
				},
				he = (R, te, ae) => {
					const re = ye(R, te);
					let _e = re ? l().utc(re) : null;
					return !_e || !_e.isAfter() ? "" : _e && _e.year() === 3e3 ? ae("account.access_approval.card_expiration_forever") : ae("account.access_approval.card_expiration_text", {
						expiryTimestamp: _e.local().format(h.U.DateTime)
					})
				},
				ke = R => R && R.member && R.member.edit,
				De = (R, te) => {
					const ae = Re.getMembership(R),
						re = ae && ae.account;
					return re ? re.id !== te : !1
				},
				Le = R => R.dpa,
				Ze = (0, t.P1)("dpa", Le),
				N = R => R.webhook,
				X = R => R.webhooks,
				fe = (0, t.P1)("webhook", X),
				Oe = R => R.accountLegoContract,
				Me = (0, t.P1)("accountLegoContract", Oe),
				Ne = R => {
					const te = Me(R);
					return (te == null ? void 0 : te.lego_state) ? te.lego_state : ""
				},
				$e = R => Ne(R) === "signed",
				st = R => Oe(R).isRequesting,
				nt = R => {
					const te = Me(R);
					return te && te.subscription_type ? te.subscription_type : ""
				},
				dt = R => nt(R) !== "",
				Re = {
					getMembership: oe,
					getMemberships: y,
					getFilteredMemberships: K,
					getAccountMembers: Ie,
					getAccountRoles: le
				},
				Qe = R => R.accountSingle,
				Xe = (0, t.P1)("accountSingle", Qe)
		},
		"../react/common/selectors/entitlementsSelectors.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				$f: function() {
					return m
				},
				AD: function() {
					return d
				},
				BF: function() {
					return p
				},
				Bs: function() {
					return D
				},
				Ci: function() {
					return M
				},
				E6: function() {
					return r
				},
				Ms: function() {
					return y
				},
				Q2: function() {
					return g
				},
				Td: function() {
					return f
				},
				Z: function() {
					return B
				},
				a: function() {
					return I
				},
				a5: function() {
					return w
				},
				du: function() {
					return s
				},
				ec: function() {
					return k
				},
				fB: function() {
					return i
				},
				hL: function() {
					return b
				},
				ji: function() {
					return q
				},
				jo: function() {
					return O
				},
				lI: function() {
					return c
				},
				p1: function() {
					return C
				},
				pf: function() {
					return h
				},
				qR: function() {
					return u
				},
				rV: function() {
					return a
				},
				u1: function() {
					return l
				},
				w4: function() {
					return t
				},
				yD: function() {
					return ce
				}
			});

			function e(v, j) {
				return v && v[j]
			}
			const o = v => !c(v).isRequesting;

			function c(v) {
				return v.entitlements.zone
			}

			function d(v) {
				return c(v).data
			}
			const g = v => {
				var j, ie;
				return ((j = c(v).paginationData) === null || j === void 0 || (ie = j.options) === null || ie === void 0 ? void 0 : ie.editedDate) || {}
			};

			function a(v, j) {
				const ie = d(v);
				return ie ? e(ie, j) : void 0
			}
			const s = (v, j) => a(v, j) === !0;

			function l(v) {
				return v.entitlements.account
			}

			function h(v) {
				return l(v).data
			}
			const t = v => {
				var j, ie;
				return ((j = l(v).paginationData) === null || j === void 0 || (ie = j.options) === null || ie === void 0 ? void 0 : ie.editedDate) || {}
			};

			function r(v) {
				return !l(v).isRequesting
			}

			function p(v, j) {
				const ie = h(v);
				return ie ? e(ie, j) : void 0
			}

			function m(v, j) {
				return p(v, j) === !0
			}

			function i(v, j) {
				return j.every(ie => m(v, ie))
			}

			function C(v) {
				return m(v, "contract.customer_enabled")
			}

			function u(v) {
				return m(v, "contract.self_service_allowed")
			}

			function f(v) {
				return m(v, "billing.partners_managed")
			}
			const I = v => C(v) && u(v),
				D = v => m(v, "enterprise.ecp_allowed");

			function U(v) {
				return P(v) || m(v, "argo.allow_smart_routing") || m(v, "argo.allow_tiered_caching") || m(v, "rate_limiting.enabled") || m(v, "ctm.enabled") || m(v, "workers.enabled") || m(v, "workers.kv_store.enabled") || m(v, "stream.enabled")
			}
			const P = v => s(v, "argo.allow_smart_routing") || s(v, "argo.allow_tiered_caching"),
				y = v => m(v, "zone.cname_setup_allowed") || m(v, "zone.partial_setup_allowed") || s(v, "zone.partial_setup_allowed"),
				O = v => m(v, "argo.allow_smart_routing") || s(v, "argo.allow_smart_routing"),
				z = v => m(v, "argo.allow_tiered_caching") || s(v, "argo.allow_tiered_caching"),
				G = v => O(v) || z(v),
				ve = v => m(v, "ctm.enabled"),
				ne = v => {
					const j = p(v, "ctm.load_balancers");
					return typeof j == "number" ? j : 0
				},
				Y = v => {
					const j = p(v, "ctm.pools");
					return typeof j == "number" ? j : 0
				},
				H = v => {
					const j = p(v, "ctm.origins");
					return typeof j == "number" ? j : 0
				},
				k = v => m(v, "workers.enabled"),
				A = v => m(v, "stream.enabled"),
				oe = v => {
					const j = p(v, "access.users_allowed");
					return typeof j == "number" ? j : 0
				},
				ee = v => oe(v) > 0,
				ge = v => {
					const j = a(v, "dedicated_certificates");
					return typeof j == "number" ? j : 0
				},
				Q = v => ge(v) > 0,
				W = v => {
					const j = a(v, "rate_limiting.max_rules");
					return typeof j == "number" ? j : 0
				},
				K = v => m(v, "rate_limiting.enabled"),
				x = v => {
					const j = a(v, "page_rules");
					return typeof j == "number" ? j : 0
				},
				Z = v => x(v) > 0,
				se = v => {
					const j = p(v, "dns_firewall.max_clusters_allowed");
					return typeof j == "number" ? j : 0
				},
				M = v => se(v) > 0,
				q = v => s(v, "zone.advanced_certificate_manager") || m(v, "zone.advanced_certificate_manager"),
				ce = v => a(v, "authoritative_dns.proxy_record_allowed") === !1 || p(v, "authoritative_dns.proxy_record_allowed") === !1,
				B = v => m(v, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				b = v => a(v, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				w = v => {
					const j = a(v, "authoritative_dns.min_record_ttl_allowed");
					return typeof j == "number" && j > 1 ? j : 60
				}
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				r: function() {
					return d
				},
				v: function() {
					return g
				}
			});
			var e = n("../react/utils/i18n.ts"),
				o = n("../../../common/intl/intl-types/src/index.ts"),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const d = a => {
				const s = a.userCommPreferences.data;
				if (s == null ? void 0 : s["language-locale"]) return c.Z.set(e.ly, s["language-locale"]), s["language-locale"];
				{
					c.Z.has(e.ly) || c.Z.set(e.ly, e.ZW);
					const l = c.Z.get(e.ly);
					return g(l) ? l : e.ZW
				}
			};

			function g(a) {
				const s = Object.keys(o.Q).find(l => o.Q[l] === a);
				return !!a && typeof a == "string" && s != null && (0, e.S8)(!1, s)
			}
		},
		"../react/common/selectors/userSelectors.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				$8: function() {
					return g
				},
				BG: function() {
					return h
				},
				GP: function() {
					return i
				},
				GU: function() {
					return U
				},
				PR: function() {
					return c
				},
				h$: function() {
					return f
				},
				h8: function() {
					return t
				},
				kk: function() {
					return u
				},
				l8: function() {
					return s
				},
				mV: function() {
					return C
				},
				vW: function() {
					return a
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const o = P => P.user,
				c = (0, e.P1)("user", o),
				d = P => {
					var y;
					return (y = c(P)) === null || y === void 0 ? void 0 : y.email.endsWith("@cloudflare.com")
				},
				g = P => {
					var y;
					return !!((y = c(P)) === null || y === void 0 ? void 0 : y.id)
				},
				a = P => {
					const y = c(P);
					if (!!y) return y.first_name && y.last_name ? `${y.first_name} ${y.last_name}` : y.email
				},
				s = P => {
					const y = c(P);
					return y && y.has_enterprise_zones
				},
				l = P => P.userCommPreferences,
				h = (0, e.P1)("userCommPreferences", l),
				t = P => {
					const y = c(P);
					return y && y.email_verified
				},
				r = P => {
					const y = h(P);
					return y && y.preferences.marketing_communication
				},
				p = P => P.userDetails,
				m = (0, e.P1)("userDetails", p),
				i = P => {
					const y = m(P);
					return y && y["2FA-RECOVERY"] === "scheduled"
				},
				C = P => {
					const y = m(P);
					return y && y["2FA-RECOVERY"] === "interrupted"
				},
				u = P => {
					const y = m(P);
					return y == null ? void 0 : y["NEW-USER-EMAIL"]
				},
				f = P => P.gates.assignments,
				I = (P, y) => P && P[y];

			function D(P, y) {
				const O = f(P);
				return O ? I(O, y) : void 0
			}
			const U = (P, y) => D(P, y) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				$4: function() {
					return O
				},
				$t: function() {
					return he
				},
				A4: function() {
					return u
				},
				Cu: function() {
					return f
				},
				DQ: function() {
					return j
				},
				Ej: function() {
					return G
				},
				FH: function() {
					return D
				},
				ID: function() {
					return x
				},
				Ko: function() {
					return xe
				},
				Le: function() {
					return be
				},
				Ly: function() {
					return M
				},
				M3: function() {
					return le
				},
				N8: function() {
					return Ue
				},
				NY: function() {
					return b
				},
				Ns: function() {
					return se
				},
				Ox: function() {
					return Le
				},
				P4: function() {
					return ve
				},
				RO: function() {
					return W
				},
				SX: function() {
					return w
				},
				Tr: function() {
					return Be
				},
				U: function() {
					return I
				},
				Ug: function() {
					return P
				},
				V6: function() {
					return ue
				},
				WR: function() {
					return Ze
				},
				Xg: function() {
					return C
				},
				ZB: function() {
					return Te
				},
				cU: function() {
					return we
				},
				cg: function() {
					return v
				},
				d2: function() {
					return oe
				},
				jN: function() {
					return Y
				},
				jg: function() {
					return ce
				},
				kC: function() {
					return z
				},
				kf: function() {
					return ye
				},
				ko: function() {
					return Q
				},
				mK: function() {
					return ke
				},
				nA: function() {
					return i
				},
				oY: function() {
					return ne
				},
				qM: function() {
					return Ae
				},
				re: function() {
					return m
				},
				rq: function() {
					return B
				},
				tS: function() {
					return y
				},
				tU: function() {
					return k
				},
				vB: function() {
					return De
				},
				vM: function() {
					return H
				},
				wH: function() {
					return U
				},
				wn: function() {
					return ie
				},
				xU: function() {
					return A
				},
				xw: function() {
					return je
				},
				z5: function() {
					return K
				},
				zO: function() {
					return Ie
				},
				zW: function() {
					return me
				},
				zh: function() {
					return ee
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				o = n("../react/app/redux/normalizer.js"),
				c = n("../../../../node_modules/lodash/get.js"),
				d = n.n(c),
				g = n("../../../../node_modules/moment/moment.js"),
				a = n.n(g),
				s = n("../react/common/constants/billing/index.ts");

			function l(N) {
				for (var X = 1; X < arguments.length; X++) {
					var fe = arguments[X] != null ? Object(arguments[X]) : {},
						Oe = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && Oe.push.apply(Oe, Object.getOwnPropertySymbols(fe).filter(function(Me) {
						return Object.getOwnPropertyDescriptor(fe, Me).enumerable
					})), Oe.forEach(function(Me) {
						h(N, Me, fe[Me])
					})
				}
				return N
			}

			function h(N, X, fe) {
				return X = t(X), X in N ? Object.defineProperty(N, X, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[X] = fe, N
			}

			function t(N) {
				var X = r(N, "string");
				return typeof X == "symbol" ? X : String(X)
			}

			function r(N, X) {
				if (typeof N != "object" || N === null) return N;
				var fe = N[Symbol.toPrimitive];
				if (fe !== void 0) {
					var Oe = fe.call(N, X || "default");
					if (typeof Oe != "object") return Oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (X === "string" ? String : Number)(N)
			}
			const p = (0, o.P1)("zone", N => N.zone),
				m = N => {
					var X;
					return (X = N.zoneVersioning) === null || X === void 0 ? void 0 : X.zoneVersionSelector
				},
				i = (0, e.P1)(p, m, (N, X) => {
					var fe, Oe, Me;
					let Ne;
					if (Array.isArray(N) && N.length === 1 ? Ne = N[0] : N && !Array.isArray(N) && (Ne = N), !Ne) return;
					const $e = !!(X == null ? void 0 : X.enabled);
					return l({}, Ne, Ne.name && {
						name: $e ? X.rootZoneName : Ne.name
					}, {
						versioning: {
							enabled: $e,
							isRoot: !((fe = Ne.name) === null || fe === void 0 ? void 0 : fe.endsWith(".config.cfdata.org")),
							version: $e ? X.selectedVersion : 0,
							rootZoneId: $e ? X.rootZoneId : (Oe = (Me = Ne) === null || Me === void 0 ? void 0 : Me.id) !== null && Oe !== void 0 ? Oe : ""
						}
					})
				}),
				C = N => N.zone,
				u = (0, e.P1)(i, C, (N, X) => ({
					data: N,
					meta: X
				})),
				f = N => {
					var X, fe;
					return (X = (fe = i(N)) === null || fe === void 0 ? void 0 : fe.id) !== null && X !== void 0 ? X : ""
				},
				I = N => N.zones,
				D = N => N.zonesRoot,
				U = N => N.zonesAccount,
				P = (0, o.P1)("zones", I),
				y = (0, o.P1)("zonesRoot", D),
				O = (0, o.P1)("zonesAccount", U);

			function z(N) {
				const X = i(N);
				return X ? X.created_on : null
			}

			function G(N, X, fe) {
				const Oe = z(N);
				if (!Oe) return;
				const Me = a().duration(X, fe),
					Ne = new Date(Oe),
					$e = new Date(new Date().getTime() - Me.asMilliseconds());
				return Ne.getTime() > $e.getTime()
			}

			function ve(N) {
				const X = i(N);
				return X ? X.status : null
			}

			function ne(N) {
				const X = i(N);
				return X ? X.type : null
			}

			function Y(N) {
				return N.plan_pending ? N.plan_pending : N.plan
			}

			function H(N) {
				const X = i(N);
				if (!X) return;
				const fe = Y(X);
				return fe && fe.legacy_id
			}

			function k(N, X) {
				const fe = Y(N);
				return !!fe && s.Gs.indexOf(fe.legacy_id) >= s.Gs.indexOf(X)
			}

			function A(N) {
				return !!N && N.status === "initializing"
			}

			function oe(N) {
				return !!N && N.status === "pending"
			}

			function ee(N) {
				return !!N && N.status === "active"
			}

			function ge(N, X) {
				if (!N) return !1;
				const fe = Y(N);
				return !!fe && fe.legacy_id === X
			}

			function Q(N) {
				return ge(N, "enterprise")
			}
			const W = N => Q(i(N));

			function K(N) {
				return ge(N, "business")
			}
			const x = N => K(i(N));

			function Z(N) {
				return ge(N, "pro")
			}

			function se(N) {
				return ge(N, "free")
			}

			function M(N) {
				return !Q(N)
			}

			function q(N) {
				return N && N.owner
			}

			function ce(N, X) {
				const fe = q(X);
				return !!fe && fe.type === "user" && fe.id === N.id
			}

			function B(N) {
				const X = i(N);
				return !!X && X.type === "partial"
			}

			function b(N) {
				const X = i(N);
				return !!X && X.type === "secondary"
			}

			function w(N) {
				const X = i(N);
				return X && B(N) && X.host
			}
			const v = N => {
					var X;
					const fe = i(N);
					return !!(fe == null ? void 0 : fe.host) && !!((X = fe.plan) === null || X === void 0 ? void 0 : X.externally_managed)
				},
				j = N => {
					const X = P(N);
					return X && X.some(Q)
				},
				ie = (N, X) => {
					const fe = i(N);
					return fe && fe.betas ? fe.betas.includes(X) : !1
				},
				Te = (N, ...X) => d()(N, ["zoneFlags", "data", ...X]),
				be = (N, ...X) => d()(N, ["accountFlags", "data", ...X]),
				Ae = N => N.accountFlags.isRequesting,
				je = N => N.zoneFlags.isRequesting,
				Be = (N, ...X) => d()(N, ["zoneFlagsChanges", "data", ...X]),
				xe = N => N.zoneFlagsChanges.isRequesting,
				we = N => N.zoneFlags && N.zoneFlags.data,
				Ie = N => N.zoneFlags,
				Ge = (0, e.P1)(we, Ie, (N, X) => ({
					data: N,
					meta: X
				})),
				Ue = (0, o.P1)("abuseUrls", N => N.overview.abuseUrls),
				le = N => {
					const X = i(N);
					return X ? `/${X.account.id}/${X.name}` : null
				},
				ue = N => N.zoneMarketingCampaigns,
				ye = N => N.overview.zoneBlocks.data,
				me = N => N.overview.zoneBlocks.isRequesting,
				he = N => N.overview.zoneBlocks.hasData,
				ke = N => {
					var X, fe;
					return (N == null || (X = N.overview.zoneBlocks) === null || X === void 0 || (fe = X.paginationData) === null || fe === void 0 ? void 0 : fe.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				De = N => N.overview.zoneBlocksReview.isRequesting,
				Le = N => N.overview.zoneHold,
				Ze = (0, o.P1)("zoneHold", Le)
		},
		"../react/common/utils/formatDate.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			_.Z = (o, c, d = !1) => (0, e.p6)(o, c, d)
		},
		"../react/common/utils/isGuards.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Q$: function() {
					return c
				},
				t: function() {
					return a
				},
				v5: function() {
					return d
				},
				zE: function() {
					return g
				}
			});
			var e = n("../react/common/constants/index.ts"),
				o = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const c = s => s ? ["page", "per_page", "count", "total_count"].every(h => h in s && s[h]) : !1,
				d = (s = "") => e.Dy.includes(s.toLowerCase()),
				g = s => s !== null && typeof s == "object" && "name" in s && "size" in s && "type" in s && typeof s.slice == "function",
				a = s => (0, o.Z)(s)
		},
		"../react/common/validators/index.js": function($, _, n) {
			"use strict";
			n.d(_, {
				K2: function() {
					return o
				},
				Lb: function() {
					return c
				},
				jk: function() {
					return a
				},
				wb: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = s => /^https?:\/\/(.*)/.test(s),
				c = s => e.default.hostname.test(s),
				d = s => /^[!-~]+$/.test(s),
				g = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				a = s => g.test(s)
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Jz: function() {
					return h
				},
				OK: function() {
					return g
				},
				_Y: function() {
					return s
				},
				fD: function() {
					return r
				},
				h_: function() {
					return l
				},
				w6: function() {
					return p
				},
				yc: function() {
					return t
				}
			});

			function e(i) {
				for (var C = 1; C < arguments.length; C++) {
					var u = arguments[C] != null ? Object(arguments[C]) : {},
						f = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(u).filter(function(I) {
						return Object.getOwnPropertyDescriptor(u, I).enumerable
					})), f.forEach(function(I) {
						o(i, I, u[I])
					})
				}
				return i
			}

			function o(i, C, u) {
				return C = c(C), C in i ? Object.defineProperty(i, C, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[C] = u, i
			}

			function c(i) {
				var C = d(i, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function d(i, C) {
				if (typeof i != "object" || i === null) return i;
				var u = i[Symbol.toPrimitive];
				if (u !== void 0) {
					var f = u.call(i, C || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(i)
			}
			let g = function(i) {
					return i.Sending = "sending", i.Success = "success", i.Failed = "failed", i.Latent = "latent", i
				}({}),
				a = function(i) {
					return i[i.Success = 200] = "Success", i[i.BadRequest = 400] = "BadRequest", i
				}({});
			const s = {
					status: g.Latent,
					statusCode: void 0
				},
				l = {
					status: g.Sending
				},
				h = {
					status: g.Success,
					statusCode: a.Success
				},
				t = {
					status: g.Failed,
					statusCode: a.BadRequest
				},
				r = {
					token: null,
					zone: null,
					isTokenValid: !1,
					user: null
				},
				p = {
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
				m = {}
		},
		"../react/pages/apps/marketplace/config/sagas.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				y: function() {
					return ce
				}
			});
			var e = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				o = n("../../../../node_modules/lodash-es/get.js"),
				c = n("../react/pages/apps/marketplace/state/auth.reducer.ts"),
				d = n("../react/pages/apps/marketplace/requests/Requester.ts");
			const g = () => d.L.fetchJSON("/user/~current"),
				a = () => d.L.request("GET", "/healthcheck");
			var s = n("../react/pages/apps/marketplace/libraries/auth.ts"),
				l = n("../react/pages/apps/marketplace/types.ts");

			function* h() {
				const b = (0, s.aP)();
				if (!b) throw new s.C6;
				try {
					const w = (0, s.he)(b);
					if (w && (0, s.pw)(w)) throw new s.C6;
					yield(0, e.gz)(c.Nw.setToken({
						token: b,
						parsed: w
					})), yield(0, e.RE)([localStorage, "setItem"], l.m.CloudflareAppsToken, b), yield(0, e.RE)([d.L, "setAuthHeader"], b)
				} catch {
					throw new s.C6
				}
			}

			function* t() {
				const {
					status: b
				} = yield(0, e.RE)(a);
				if (b === 401) throw new s.xT;
				if (b === 403) throw new s.k7;
				yield(0, e.gz)(c.Nw.setTokenValid(!0))
			}

			function* r() {
				try {
					yield(0, e.gz)(c.Nw.getCurrentUserSending());
					const b = yield(0, e.RE)(g);
					return yield(0, e.gz)(b.id ? c.Nw.getCurrentUserSuccess(b) : c.Nw.getCurrentUserFailed()), b
				} catch {
					throw yield(0, e.gz)(c.Nw.getCurrentUserFailed())
				}
			}

			function* p() {
				yield(0, e.ib)(c.U4.CurrentUserSaga, r)
			}

			function* m(b) {
				try {
					yield(0, e.RE)(h), yield(0, e.RE)(t)
				} catch (w) {
					if (yield(0, e.RE)([localStorage, "removeItem"], l.m.CloudflareAppsToken), ![s.Vm.RedirectToLogin, s.Vm.BadToken].includes(w.name)) return yield(0, e.gz)(c.Nw.initSaga(b.zoneId));
					try {
						return (0, s.rf)()
					} catch {
						throw new s.Sf
					}
				}
				yield(0, e.gz)(c.Nw.setZone(b.zoneId)), yield(0, e.gz)(c.Nw.getCurrentUserSaga()), yield(0, e.RE)([localStorage, "removeItem"], l.m.CloudflareAppsAuthAttempts)
			}

			function* i() {
				yield(0, e.ib)(c.U4.InitSaga, m)
			}

			function* C() {
				for (;;) {
					const b = yield(0, e.qn)(c.XO.SetCurrentUser), w = yield(0, e.RE)([localStorage, "getItem"], l.m.CloudflareAppsToken);
					if (w) {
						const v = (0, s.he)(w),
							j = (0, o.Z)(v, "sub"),
							ie = (0, o.Z)(b, `meta.entities.user.${b.payload}.email`);
						if (ie && ie !== j) return yield(0, e.RE)([localStorage, "removeItem"], l.m.CloudflareAppsToken)
					}
				}
			}
			var u = [i(), C(), p()],
				f = n("../react/pages/apps/marketplace/requests/common.ts"),
				I = n("../react/pages/apps/marketplace/libraries/constants.ts");
			const D = (b, w) => b.apps ? b.apps[w] : b[w],
				U = b => D(b, "authState"),
				P = b => D(b, "commonState"),
				y = b => D(b, "homePageState"),
				O = b => U(b).zone;
			var z = n("../react/pages/apps/marketplace/libraries/helpers.ts"),
				G = n("../react/pages/apps/marketplace/state/common.reducer.ts");

			function ve(b) {
				for (var w = 1; w < arguments.length; w++) {
					var v = arguments[w] != null ? Object(arguments[w]) : {},
						j = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(v).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(v, ie).enumerable
					})), j.forEach(function(ie) {
						ne(b, ie, v[ie])
					})
				}
				return b
			}

			function ne(b, w, v) {
				return w = Y(w), w in b ? Object.defineProperty(b, w, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[w] = v, b
			}

			function Y(b) {
				var w = H(b, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function H(b, w) {
				if (typeof b != "object" || b === null) return b;
				var v = b[Symbol.toPrimitive];
				if (v !== void 0) {
					var j = v.call(b, w || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(b)
			}

			function* k(b, w, v) {
				const j = {
					categories: (v.markets || ["none"]).map(ie => {
						const Te = I.XZ.find(be => be.key === ie);
						return !ie || !Te ? I.iK.categories : Te.categories
					}).reduce((ie, Te) => ie.concat(Te), []).filter((ie, Te, be) => be.indexOf(ie) === Te).join(","),
					excludeApps: w.map(ie => ie.appId).join(",")
				};
				return yield(0, e.RE)(f.RX, G.Nw, f.Jb.recommendedApps.name, f.Jb.recommendedApps.url(j), z.Ux.transformers.transformAppIdsToApps.bind(null, b))
			}

			function* A() {
				for (;;) {
					const {
						zoneId: b,
						currentResources: w
					} = yield(0, e.qn)(G.U4.GetHomePageAssetsSaga), {
						appsList: v,
						installsList: j,
						metadata: ie
					} = yield(0, e.$6)(ve({}, w.appsList.status === "latent" ? {
						appsList: (0, e.RE)(f.RX, G.Nw, f.Jb.apps.name, f.Jb.apps.url())
					} : {
						appsList: w.appsList.value
					}, w.categoriesList.status === "latent" ? {
						categoriesList: (0, e.RE)(f.RX, G.Nw, f.Jb.categories.name, f.Jb.categories.url({
							includeInvisible: !0
						}))
					} : {
						categoriesList: w.categoriesList.value
					}, w.installsList.status === "latent" ? {
						installsList: (0, e.RE)(f.RX, G.Nw, f.Jb.installs.default.name, f.Jb.installs.default.url(b))
					} : {
						installsList: w.installsList.value
					}, w.metadata.status === "latent" ? {
						metadata: (0, e.RE)(f.RX, G.Nw, f.Jb.metadata.get.name, f.Jb.metadata.get.url(b))
					} : {
						metadata: w.metadata.value
					}));
					yield(0, e.gz)(G.Nw.getRecommendedAppsSaga(v, j, ie))
				}
			}

			function* oe() {
				for (;;) {
					const {
						userId: b,
						zoneId: w
					} = yield(0, e.qn)(G.U4.GetDevelopedAppsAssetsSaga);
					yield(0, e.RE)(f.RX, G.Nw, f.Jb.installs.default.name, f.Jb.installs.default.url(w)), yield(0, e.RE)(f.RX, G.Nw, f.Jb.developedApps.name, f.Jb.developedApps.url(b))
				}
			}

			function* ee() {
				for (;;) {
					const {
						appIdentifier: b,
						zoneId: w,
						version: v
					} = yield(0, e.qn)(G.U4.GetAppInfoAssetsSaga), j = yield(0, e.RE)(f.RX, G.Nw, f.Jb.installs.default.name, f.Jb.installs.default.url(w));
					yield(0, e.RE)(f.RX, G.Nw, f.Jb.app.name, f.Jb.app.url(b, v ? {
						version: v
					} : {}), z.Ux.transformers.addCurrentSiteInstall.bind(null, j))
				}
			}

			function* ge() {
				for (;;) {
					const {
						zoneId: b
					} = yield(0, e.qn)(G.U4.GetInstalledAppsAssetsSaga), v = (yield(0, e.RE)(f.RX, G.Nw, f.Jb.installs.default.name, f.Jb.installs.default.url(b))).filter(be => be.app.installable && be.versionTag !== be.app.infoVersion), j = v.reduce((be, Ae) => (be[Ae.app.alias] = (0, e.RE)(f.RX, G.Nw, f.Jb.app.name, f.Jb.app.url(Ae.app.alias || Ae.appId), z.Ux.transformers.addAppVersionInfo.bind(null, Ae)), be), {}), ie = yield(0, e.$6)(j), Te = v.map(be => ({
						install: be,
						app: ie[be.app.alias]
					}));
					yield(0, e.gz)(G.Nw.setUpdatableInstalls(Te))
				}
			}

			function* Q() {
				for (;;) return yield(0, e.qn)(G.U4.GetAppsSaga), yield(0, e.RE)(f.RX, G.Nw, f.Jb.apps.name, f.Jb.apps.url())
			}

			function* W() {
				for (;;) {
					const {
						queryParams: b
					} = yield(0, e.qn)(G.U4.GetCategoriesSaga);
					return yield(0, e.RE)(f.RX, G.Nw, f.Jb.categories.name, f.Jb.categories.url(b))
				}
			}

			function* K() {
				for (;;) {
					const {
						zoneId: b
					} = yield(0, e.qn)(G.U4.GetInstallsSaga);
					return yield(0, e.RE)(f.RX, G.Nw, f.Jb.installs.default.name, f.Jb.installs.default.url(b))
				}
			}

			function* x() {
				for (;;) {
					const {
						zoneId: b
					} = yield(0, e.qn)(G.U4.GetMetadataSaga);
					return yield(0, e.RE)(f.RX, G.Nw, f.Jb.metadata.get.name, f.Jb.metadata.get.url(b))
				}
			}

			function* Z() {
				for (;;) {
					const {
						appsList: b,
						installsList: w,
						metadata: v
					} = yield(0, e.qn)(G.U4.GetRecommendedAppsSaga);
					yield(0, e.RE)(k, b, w, v)
				}
			}

			function* se() {
				for (;;) {
					const {
						zoneId: b,
						data: w
					} = yield(0, e.qn)(G.U4.PostMetadataSaga);
					try {
						const {
							appsList: v,
							installsList: j,
							metadata: ie
						} = yield(0, e.Ys)(P), Te = ve({}, ie.value, {
							id: b,
							markets: [w]
						});
						yield(0, e.RE)(f.JX, G.Nw, f.Jb.metadata.post.name, f.Jb.metadata.post.url(b), Te), yield(0, e.RE)(k, v.value, j.value, Te)
					} catch {}
				}
			}

			function* M() {
				for (;;) yield(0, e.qn)(G.dg.CloudflareZoneChangeStart), yield(0, e.gz)(G.Nw.zoneChangedSaga())
			}
			var q = [A(), ge(), oe(), ee(), Q(), K(), W(), x(), se(), Z(), M()];
			const ce = [...u, ...q];

			function* B() {
				yield all(ce)
			}
		},
		"../react/pages/apps/marketplace/libraries/auth.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				C6: function() {
					return m
				},
				Sf: function() {
					return r
				},
				Vm: function() {
					return t
				},
				aP: function() {
					return I
				},
				he: function() {
					return C
				},
				k7: function() {
					return p
				},
				pw: function() {
					return u
				},
				rf: function() {
					return U
				},
				xT: function() {
					return i
				}
			});
			var e = n("../../../../node_modules/lodash-es/toNumber.js"),
				o = n("../../../../node_modules/lodash-es/isInteger.js"),
				c = n("../../../../node_modules/lodash-es/toString.js"),
				d = n("../../../../node_modules/query-string/query-string.js"),
				g = n.n(d),
				a = n("../../../../node_modules/jwt-decode/build/jwt-decode.esm.js"),
				s = n("../react/pages/apps/marketplace/types.ts"),
				l = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				h = n.n(l);
			let t = function(y) {
				return y.RedirectToLogin = "RedirectToLogin", y.ExpiredToken = "ExpiredToken", y.BadToken = "BadToken", y.Init = "Init", y
			}({});
			class r extends Error {
				constructor() {
					super();
					this.name = t.Init
				}
			}
			class p extends Error {
				constructor() {
					super();
					this.name = t.BadToken
				}
			}
			class m extends Error {
				constructor() {
					super();
					this.name = t.RedirectToLogin
				}
			}
			class i extends Error {
				constructor() {
					super();
					this.name = t.ExpiredToken
				}
			}
			const C = y => {
					try {
						const O = (0, a.Z)(y);
						if (!O) throw new Error("Invalid JWT");
						return O
					} catch (O) {
						throw O
					}
				},
				u = y => {
					const O = new Date(y.exp * 1e3);
					return new Date > O
				},
				f = (y, O = window.document.location.toString()) => {
					(0, l.get)(`login?redirect_uri=${encodeURIComponent(O)}`).then(z => {
						var G, ve;
						const ne = (G = z.body) === null || G === void 0 || (ve = G.result) === null || ve === void 0 ? void 0 : ve.redirect_uri;
						ne && (window.location.href = ne)
					}).catch(z => {
						console.log("Failed login ", z)
					})
				},
				I = () => {
					let y = d.parse(location.search);
					const O = localStorage.getItem(s.m.CloudflareAppsToken) || y.token;
					if (O) {
						delete y.token, delete y.from_login;
						const z = d.stringify(y);
						window.history.replaceState({}, document.title, `${window.location.pathname}${z?`?${z}`:""}`)
					}
					return O
				},
				D = 2,
				U = y => {
					if (P() > D) throw new Error("redirect attempt limit reached");
					return f("login", y)
				},
				P = () => {
					let y = (0, e.Z)(localStorage.getItem(s.m.CloudflareAppsAuthAttempts));
					(0, o.Z)(y) || (y = 0, localStorage.setItem(s.m.CloudflareAppsAuthAttempts, (0, c.Z)(y)));
					const O = y + 1;
					return localStorage.setItem(s.m.CloudflareAppsAuthAttempts, (0, c.Z)(O)), O > D && localStorage.removeItem(s.m.CloudflareAppsAuthAttempts), O
				}
		},
		"../react/pages/apps/marketplace/libraries/constants.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				XZ: function() {
					return a
				},
				iK: function() {
					return g
				},
				j9: function() {
					return c
				}
			});
			var e = n("../react/pages/apps/marketplace/marketplace.translations.ts");
			const o = /local.cloudflareapps.com/,
				c = /staging.cloudflare.com/,
				d = 900,
				g = {
					key: "none",
					label: e.keys.markets_metadata_label_popular,
					categories: ["recommended-for-all-sites", "recommended-for-blogs", "recommended-for-stores", "recommended-for-marketing-sites"]
				},
				a = [{
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
				}, g],
				s = [{
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
		"../react/pages/apps/marketplace/libraries/helpers.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Ux: function() {
					return r
				},
				cz: function() {
					return m
				},
				im: function() {
					return s
				},
				pG: function() {
					return p
				},
				t$: function() {
					return i
				}
			});
			var e = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(u) {
				for (var f = 1; f < arguments.length; f++) {
					var I = arguments[f] != null ? Object(arguments[f]) : {},
						D = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(I).filter(function(U) {
						return Object.getOwnPropertyDescriptor(I, U).enumerable
					})), D.forEach(function(U) {
						c(u, U, I[U])
					})
				}
				return u
			}

			function c(u, f, I) {
				return f = d(f), f in u ? Object.defineProperty(u, f, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[f] = I, u
			}

			function d(u) {
				var f = g(u, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function g(u, f) {
				if (typeof u != "object" || u === null) return u;
				var I = u[Symbol.toPrimitive];
				if (I !== void 0) {
					var D = I.call(u, f || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(u)
			}
			const a = u => u.test(window.location.hostname),
				s = () => a(e.j9),
				l = () => a(MARKETPLACE_LOCAL_URL_REGEXP),
				h = (u, f) => {
					const I = random(0, 1) ? -1 : 1;
					return u.points === f.points || u.points >= APP_POINTS_THRESHOLD && f.points >= APP_POINTS_THRESHOLD ? I : u.points < 0 || f.points < 0 || u.points >= APP_POINTS_THRESHOLD || f.points >= APP_POINTS_THRESHOLD ? f.points - u.points : I
				},
				t = (u, f, I) => {
					const D = get(f, I),
						U = get(u, I);
					return D && !isEqual(D, U)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (u, f) => f.map(I => u.find(D => D.id === I)),
						addAppVersionInfo: (u, f) => o({}, f, {
							currentVersion: f.versions.find(I => I.tag === u.versionTag),
							latestVersion: f.versions.find(I => I.tag === f.infoVersion)
						}),
						addCurrentSiteInstall: (u, f) => o({}, f, {
							currentSiteInstall: u.find(I => I.appId === f.id)
						})
					}
				},
				p = (u, f, I) => o({}, u, f, I ? {
					value: I
				} : {}),
				m = u => u.map(f => f.status),
				i = u => u.apps ? u.apps : u,
				C = u => {
					let f = ["by-cloudflare"];
					return u.filter(I => !f.includes(I.id) && I.visible).sort((I, D) => I.points < D.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function($, _, n) {
			"use strict";
			n.r(_), n.d(_, {
				categorySlugTranslationKey: function() {
					return g
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return d
				},
				translations: function() {
					return c
				}
			});
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: c,
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

			function g(a) {
				const s = a.replace(/-/g, "_");
				return Object.keys(o).includes(s) ? s : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				L: function() {
					return r
				}
			});
			var e = n("../../../../node_modules/lodash-es/defaults.js"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function c(p) {
				for (var m = 1; m < arguments.length; m++) {
					var i = arguments[m] != null ? Object(arguments[m]) : {},
						C = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(i).filter(function(u) {
						return Object.getOwnPropertyDescriptor(i, u).enumerable
					})), C.forEach(function(u) {
						a(p, u, i[u])
					})
				}
				return p
			}

			function d(p, m) {
				if (p == null) return {};
				var i = g(p, m),
					C, u;
				if (Object.getOwnPropertySymbols) {
					var f = Object.getOwnPropertySymbols(p);
					for (u = 0; u < f.length; u++) C = f[u], !(m.indexOf(C) >= 0) && (!Object.prototype.propertyIsEnumerable.call(p, C) || (i[C] = p[C]))
				}
				return i
			}

			function g(p, m) {
				if (p == null) return {};
				var i = {},
					C = Object.keys(p),
					u, f;
				for (f = 0; f < C.length; f++) u = C[f], !(m.indexOf(u) >= 0) && (i[u] = p[u]);
				return i
			}

			function a(p, m, i) {
				return m = s(m), m in p ? Object.defineProperty(p, m, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[m] = i, p
			}

			function s(p) {
				var m = l(p, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function l(p, m) {
				if (typeof p != "object" || p === null) return p;
				var i = p[Symbol.toPrimitive];
				if (i !== void 0) {
					var C = i.call(p, m || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(p)
			}
			const h = n("../../../../node_modules/url-join/lib/url-join.js");
			class t {
				constructor(m) {
					a(this, "token", void 0), a(this, "options", void 0), a(this, "setAuthHeader", i => {
						this.token = i
					}), this.token = "", this.options = (0, e.Z)(m, t.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(m = "GET", i, C = {}) {
					const {
						body: u
					} = C, f = d(C, ["body"]);
					return fetch(h(this.options.baseUrl, i), c({
						method: m
					}, f, u ? {
						body: JSON.stringify(u)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(c({
							Accept: "application/json, text/plain, */*"
						}, C.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(m, i = {}) {
					const C = await this.request("GET", m, i);
					return this.parseJSONResponse(C)
				}
				async postJSON(m, i = {}) {
					const C = await this.request("POST", m, c({}, i, {
						headers: c({}, i.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(C)
				}
				parseJSONResponse(m) {
					return m.json()
				}
			}
			a(t, "defaults", {
				baseUrl: (0, o.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const r = new t
		},
		"../react/pages/apps/marketplace/requests/common.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				RX: function() {
					return t
				},
				JX: function() {
					return r
				},
				Jb: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/lodash-es/upperFirst.js"),
				o = n("../../../../node_modules/lodash-es/isEmpty.js"),
				c = n("../../../../node_modules/query-string/query-string.js"),
				d = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				g = n("../react/pages/apps/marketplace/requests/Requester.ts");

			function a(u, f, I) {
				return f = s(f), f in u ? Object.defineProperty(u, f, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[f] = I, u
			}

			function s(u) {
				var f = l(u, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function l(u, f) {
				if (typeof u != "object" || u === null) return u;
				var I = u[Symbol.toPrimitive];
				if (I !== void 0) {
					var D = I.call(u, f || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(u)
			}
			class h {
				constructor(f) {
					a(this, "name", void 0), a(this, "url", void 0), this.name = f.name, this.url = f.url
				}
			}

			function* t(u, f, I, D) {
				const U = (0, e.Z)(f),
					[P, y, O] = [`get${U}Sending`, `get${U}Success`, `get${U}Failed`];
				try {
					yield(0, d.gz)(u[P]());
					const z = yield(0, d.RE)(i, I);
					let G = z;
					if (G.error) {
						yield(0, d.gz)(u[O]());
						return
					}
					return D && (G = yield D(z)), yield(0, d.gz)(u[y](G)), G
				} catch {
					yield(0, d.gz)(u[O]())
				}
			}

			function* r(u, f, I, D) {
				const U = (0, e.Z)(f),
					P = `get${U}Sending`,
					y = `get${U}Success`,
					O = `get${U}Failed`;
				try {
					yield(0, d.gz)(u[P]());
					const z = yield(0, d.RE)(C, {
						url: I,
						data: D
					});
					return yield(0, d.gz)(u[y](z)), z
				} catch {
					yield(0, d.gz)(u[O]())
				}
			}
			const p = u => (0, o.Z)(u) ? "" : `?${c.stringify(u)}`,
				m = {
					app: new h({
						name: "app",
						url: (u, f) => `apps/${u}${p(f)}`
					}),
					apps: new h({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new h({
							name: "installs",
							url: u => `sites/${u}/installs`
						}),
						delete: new h({
							name: "installs",
							url: u => `installs/${u}`
						})
					},
					categories: new h({
						name: "categories",
						url: (u = {}) => "categories" + p(u)
					}),
					metadata: {
						get: new h({
							name: "metadata",
							url: u => `sites/${u}/metadata`
						}),
						post: new h({
							name: "metadata",
							url: u => `sites/${u}/metadata`
						})
					},
					ratings: {
						default: new h({
							name: "ratings",
							url: (u = {}) => "ratings" + p(u)
						}),
						delete: new h({
							name: "ratings",
							url: u => `ratings/${u}`
						})
					},
					recommendedApps: new h({
						name: "recommendedApps",
						url: (u = {}) => "apps/recommend" + p(u)
					}),
					developedApps: new h({
						name: "developedApps",
						url: u => `user/${u}/apps`
					})
				},
				i = async u => g.L.fetchJSON(u), C = async u => {
					const {
						url: f,
						data: I
					} = u;
					return g.L.postJSON(f, {
						body: I
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Nw: function() {
					return l
				},
				U4: function() {
					return s
				},
				XO: function() {
					return a
				},
				ZP: function() {
					return h
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts");

			function o(t) {
				for (var r = 1; r < arguments.length; r++) {
					var p = arguments[r] != null ? Object(arguments[r]) : {},
						m = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(p).filter(function(i) {
						return Object.getOwnPropertyDescriptor(p, i).enumerable
					})), m.forEach(function(i) {
						c(t, i, p[i])
					})
				}
				return t
			}

			function c(t, r, p) {
				return r = d(r), r in t ? Object.defineProperty(t, r, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = p, t
			}

			function d(t) {
				var r = g(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(t, r) {
				if (typeof t != "object" || t === null) return t;
				var p = t[Symbol.toPrimitive];
				if (p !== void 0) {
					var m = p.call(t, r || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let a = function(t) {
					return t.SetCurrentUser = "user.set", t
				}({}),
				s = function(t) {
					return t.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", t.SetZone = "MARKETPLACE/AUTH/SET_ZONE", t.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", t.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", t.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", t.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", t.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", t.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", t.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", t.ResetState = "MARKETPLACE/AUTH/RESET_STATE", t
				}({});
			const l = {
				resetState: () => ({
					type: s.ResetState
				}),
				initSaga: t => ({
					type: s.InitSaga,
					zoneId: t
				}),
				setZone: t => ({
					type: s.SetZone,
					zone: t
				}),
				setToken: t => ({
					type: s.SetToken,
					token: t
				}),
				clearToken: () => ({
					type: s.ClearToken
				}),
				setTokenValid: t => ({
					type: s.SetTokenValid,
					isTokenValid: t
				}),
				getCurrentUserSaga: () => ({
					type: s.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: s.CurrentUserSending
				}),
				getCurrentUserSuccess: t => ({
					type: s.CurrentUserSuccess,
					user: t
				}),
				getCurrentUserFailed: () => ({
					type: s.CurrentUserFailed
				})
			};

			function h(t = e.fD, r) {
				switch (r.type) {
					case s.ResetState:
						return o({}, e.fD);
					case s.CurrentUserSending:
						return o({}, t);
					case s.CurrentUserSuccess:
						const {
							user: p
						} = r;
						return o({}, t, {
							user: p
						});
					case s.CurrentUserFailed:
						return o({}, t);
					case s.SetZone:
						const {
							zone: m
						} = r;
						return o({}, t, {
							zone: m
						});
					case s.SetToken:
						const {
							token: i
						} = r;
						return o({}, t, {
							token: i
						});
					case s.ClearToken:
						return o({}, t, {
							token: null
						});
					case s.SetTokenValid:
						const {
							isTokenValid: C
						} = r;
						return o({}, t, {
							isTokenValid: C
						});
					default:
						return t
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Nw: function() {
					return h
				},
				U4: function() {
					return l
				},
				ZP: function() {
					return t
				},
				dg: function() {
					return s
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function c(r) {
				for (var p = 1; p < arguments.length; p++) {
					var m = arguments[p] != null ? Object(arguments[p]) : {},
						i = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(m).filter(function(C) {
						return Object.getOwnPropertyDescriptor(m, C).enumerable
					})), i.forEach(function(C) {
						d(r, C, m[C])
					})
				}
				return r
			}

			function d(r, p, m) {
				return p = g(p), p in r ? Object.defineProperty(r, p, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[p] = m, r
			}

			function g(r) {
				var p = a(r, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function a(r, p) {
				if (typeof r != "object" || r === null) return r;
				var m = r[Symbol.toPrimitive];
				if (m !== void 0) {
					var i = m.call(r, p || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(r)
			}
			let s = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				l = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const h = {
				resetState: () => ({
					type: l.ResetState
				}),
				zoneChangedSaga: () => ({
					type: l.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (r, p) => ({
					type: l.GetHomePageAssetsSaga,
					zoneId: r,
					currentResources: p
				}),
				getInstalledAppsAssetsSaga: r => ({
					type: l.GetInstalledAppsAssetsSaga,
					zoneId: r
				}),
				getDevelopedAppsAssetsSaga: (r, p) => ({
					type: l.GetDevelopedAppsAssetsSaga,
					userId: r,
					zoneId: p
				}),
				getDevelopedAppsSending: () => ({
					type: l.GetDevelopedAppsSending
				}),
				getDevelopedAppsSuccess: r => ({
					type: l.GetDevelopedAppsSuccess,
					developedApps: r
				}),
				getDevelopedAppsFailed: () => ({
					type: l.GetDevelopedAppsFailed
				}),
				getAppInfoAssetsSaga: (r, p, m) => ({
					type: l.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: p,
					version: m
				}),
				setUpdatableInstalls: r => ({
					type: l.SetUpdatableInstalls,
					updatableInstallsList: r
				}),
				getAppSaga: r => ({
					type: l.GetAppSaga,
					appIdentifier: r
				}),
				getAppSending: () => ({
					type: l.GetAppSending
				}),
				getAppSuccess: r => ({
					type: l.GetAppSuccess,
					app: r
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
				getAppsSuccess: r => ({
					type: l.GetAppsSuccess,
					appsList: r
				}),
				getAppsFailed: () => ({
					type: l.GetAppsFailed
				}),
				getInstallsSaga: r => ({
					type: l.GetInstallsSaga,
					zoneId: r
				}),
				getInstallsSending: () => ({
					type: l.GetInstallsSending
				}),
				getInstallsSuccess: r => ({
					type: l.GetInstallsSuccess,
					installsList: r
				}),
				getInstallsFailed: () => ({
					type: l.GetInstallsFailed
				}),
				getCategoriesSaga: r => ({
					type: l.GetCategoriesSaga,
					queryParams: r
				}),
				getCategoriesSending: () => ({
					type: l.GetCategoriesSending
				}),
				getCategoriesSuccess: r => ({
					type: l.GetCategoriesSuccess,
					categoriesList: r
				}),
				getCategoriesFailed: () => ({
					type: l.GetCategoriesFailed
				}),
				getMetadataSaga: r => ({
					type: l.GetMetadataSaga,
					zoneId: r
				}),
				getMetadataSending: () => ({
					type: l.GetMetadataSending
				}),
				getMetadataSuccess: r => ({
					type: l.GetMetadataSuccess,
					metadata: r
				}),
				getMetadataFailed: () => ({
					type: l.GetMetadataFailed
				}),
				postMetadataSaga: (r, p) => ({
					type: l.PostMetadataSaga,
					zoneId: r,
					data: p
				}),
				postMetadataSending: () => ({
					type: l.PostMetadataSending
				}),
				postMetadataSuccess: r => ({
					type: l.PostMetadataSuccess,
					metadata: r
				}),
				postMetadataFailed: () => ({
					type: l.PostMetadataFailed
				}),
				getRecommendedAppsSaga: (r, p, m) => ({
					type: l.GetRecommendedAppsSaga,
					appsList: r,
					installsList: p,
					metadata: m
				}),
				getRecommendedAppsSending: () => ({
					type: l.GetRecommendedAppsSending
				}),
				getRecommendedAppsSuccess: r => ({
					type: l.GetRecommendedAppsSuccess,
					recommendedAppsList: r
				}),
				getRecommendedAppsFailed: () => ({
					type: l.GetRecommendedAppsFailed
				})
			};

			function t(r = e.w6, p) {
				switch (p.type) {
					case l.ResetState:
						return c({}, e.w6);
					case l.ZoneChangedSaga:
						return c({}, r, {
							installsList: c({}, e.w6.installsList),
							recommendedAppsList: c({}, e.w6.recommendedAppsList),
							metadata: c({}, e.w6.metadata)
						});
					case l.GetAppsSending:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.h_))
						});
					case l.GetAppsSuccess:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.Jz, p.appsList))
						});
					case l.GetAppsFailed:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.yc))
						});
					case l.GetInstallsSending:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.h_))
						});
					case l.GetInstallsSuccess:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.Jz, p.installsList))
						});
					case l.GetInstallsFailed:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.yc))
						});
					case l.GetCategoriesSending:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case l.GetCategoriesSuccess:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.Jz, p.categoriesList))
						});
					case l.GetCategoriesFailed:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case l.GetMetadataSending:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.h_))
						});
					case l.GetMetadataSuccess:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.Jz, p.metadata))
						});
					case l.GetMetadataFailed:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.yc))
						});
					case l.PostMetadataSending:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.h_))
						});
					case l.PostMetadataSuccess:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.Jz, p.metadata))
						});
					case l.PostMetadataFailed:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.yc))
						});
					case l.GetRecommendedAppsSending:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case l.GetRecommendedAppsSuccess:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.Jz, p.recommendedAppsList))
						});
					case l.GetRecommendedAppsFailed:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case l.GetAppSending:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.h_))
						});
					case l.GetAppSuccess:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.Jz, p.app))
						});
					case l.GetAppFailed:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.yc))
						});
					case l.ClearApp:
						return c({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case l.SetUpdatableInstalls:
						return c({}, r, {
							updatableInstallsList: p.updatableInstallsList
						});
					case l.GetDevelopedAppsSending:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case l.GetDevelopedAppsSuccess:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.Jz, p.developedApps))
						});
					case l.GetDevelopedAppsFailed:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/apps/marketplace/types.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				m: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CloudflareAppsToken = "CloudflareAppsToken", o.CloudflareAppsAuthAttempts = "CloudflareAppsAuthAttempts", o
			}({})
		},
		"../react/pages/caching/tracking.tsx": function($, _, n) {
			"use strict";
			n.d(_, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o
			}({})
		},
		"../react/pages/dns/dns-records/tracking.ts": function($, _, n) {
			"use strict";
			n.d(_, {
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
		"../react/pages/email/types.ts": function($, _, n) {
			"use strict";
			n.d(_, {
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
			let e = function(g) {
				return g.ROOT = "root", g.DSTADDRS_CARD = "dstaddrs_card", g.RULES_CARD = "rules_card", g.CATCHALL_CARD = "catchall_card", g.SETTINGS_PAGE = "settings_page", g.WORKERS_PAGE = "workers_page", g
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
			let c = function(g) {
				return g[g.Verified = 0] = "Verified", g[g.Pending = 1] = "Pending", g[g.Missing = 2] = "Missing", g[g.WorkerNotFound = 3] = "WorkerNotFound", g[g.Unknown = 4] = "Unknown", g[g.Loading = 5] = "Loading", g
			}({});
			const d = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/firewall/analytics/constants.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				AU: function() {
					return i
				},
				Bc: function() {
					return m
				},
				Bd: function() {
					return H
				},
				Bt: function() {
					return r
				},
				Ji: function() {
					return G
				},
				LO: function() {
					return p
				},
				Pk: function() {
					return y
				},
				WB: function() {
					return Y
				},
				Wd: function() {
					return ne
				},
				Zj: function() {
					return I
				},
				e_: function() {
					return u
				},
				hk: function() {
					return z
				},
				jY: function() {
					return P
				},
				kF: function() {
					return ve
				},
				kg: function() {
					return O
				},
				oD: function() {
					return C
				},
				pP: function() {
					return U
				},
				q4: function() {
					return D
				},
				qC: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../../../../node_modules/@cloudflare/component-filter-bar/es/index.js"),
				c = n("../../../../node_modules/@cloudflare/data-locations/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/cf.util.patterns/index.js"),
				g = n.n(d),
				a = n("../react/common/components/analytics/AnalyticsReport/constants.ts");

			function s(k) {
				for (var A = 1; A < arguments.length; A++) {
					var oe = arguments[A] != null ? Object(arguments[A]) : {},
						ee = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(oe).filter(function(ge) {
						return Object.getOwnPropertyDescriptor(oe, ge).enumerable
					})), ee.forEach(function(ge) {
						l(k, ge, oe[ge])
					})
				}
				return k
			}

			function l(k, A, oe) {
				return A = h(A), A in k ? Object.defineProperty(k, A, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[A] = oe, k
			}

			function h(k) {
				var A = t(k, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function t(k, A) {
				if (typeof k != "object" || k === null) return k;
				var oe = k[Symbol.toPrimitive];
				if (oe !== void 0) {
					var ee = oe.call(k, A || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(k)
			}
			const r = {
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
				p = {
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
				m = {
					"Behavioral Analysis": "security_analytics.labels.bot_source.behavioral_analysis",
					Heuristics: "security_analytics.labels.bot_source.heuristics",
					"Machine Learning": "security_analytics.labels.bot_source.machine_learning",
					"Not Computed": "security_analytics.labels.bot_source.not_computed",
					"JS Fingerprinting": "security_analytics.labels.bot_source.js_fingerprinting",
					"Verified Bot": "security_analytics.labels.bot_source.verified_bot",
					"Cloudflare Service": "security_analytics.labels.bot_source.cloudflare_service"
				},
				i = {
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
					FIREWALL_CUSTOM: "firewallCustom",
					FIREWALL_MANAGED: "firewallManaged",
					SDD: "sdd",
					DLP: "dlp",
					BOT_MANAGEMENT: "botManagement",
					UNKNOWN: "unknown"
				},
				C = {
					[i.ASN]: e.Rl.colors.categorical[2],
					[i.COUNTRY]: e.Rl.colors.categorical[1],
					[i.IP]: e.Rl.colors.categorical[15],
					[i.IP_RANGE]: e.Rl.colors.categorical[15],
					[i.BOT_MANAGEMENT]: e.Rl.colors.categorical[14],
					[i.SECURITY_LEVEL]: e.Rl.colors.categorical[13],
					[i.ZONE_LOCKDOWN]: e.Rl.colors.categorical[12],
					[i.WAF]: e.Rl.colors.categorical[11],
					[i.FIREWALL_MANAGED]: e.Rl.colors.categorical[11],
					[i.UA_BLOCK]: e.Rl.colors.categorical[10],
					[i.RATE_LIMIT]: e.Rl.colors.categorical[9],
					[i.FIREWALL_RULES]: e.Rl.colors.categorical[8],
					[i.BIC]: e.Rl.colors.categorical[7],
					[i.HOT]: e.Rl.colors.categorical[6],
					[i.DLP]: e.Rl.colors.categorical[5],
					[i.L7DOS]: e.Rl.colors.categorical[4],
					[i.VALIDATION]: e.Rl.colors.categorical[3],
					[i.BOT_FIGHT_MODE]: e.Rl.colors.categorical[2],
					[i.API_SHIELD]: e.Rl.colors.categorical[1],
					[i.API_SHIELD_SCHEMA_VALIDATION]: e.Rl.colors.categorical[1],
					[i.API_SHIELD_TOKEN_VALIDATION]: e.Rl.colors.categorical[1],
					[i.FIREWALL_CUSTOM]: e.Rl.colors.categorical[0],
					[i.UNKNOWN]: e.Rl.colors.gray[5]
				},
				u = {
					[i.ASN]: "firewall.analytics.services.labels.asn",
					[i.COUNTRY]: "firewall.analytics.services.labels.country",
					[i.IP]: "firewall.analytics.services.labels.ip",
					[i.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[i.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[i.VALIDATION]: "firewall.analytics.services.labels.validation",
					[i.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[i.WAF]: "firewall.analytics.services.labels.waf",
					[i.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[i.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[i.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[i.BIC]: "firewall.analytics.services.labels.bic",
					[i.HOT]: "firewall.analytics.services.labels.hot",
					[i.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[i.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[i.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[i.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[i.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[i.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[i.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[i.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[i.DLP]: "firewall.analytics.services.labels.dlp",
					[i.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				},
				f = {
					action: {
						label: "firewall.analytics.filters.labels.action",
						type: o.kE.select,
						options: Object.keys(r).filter(k => !["challenge_solved", "challenge_failed", "challenge_bypassed", "jschallenge_solved", "jschallenge_failed", "jschallenge_bypassed", "unknown"].includes(k)),
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn]
					},
					botScore: {
						label: "firewall.analytics.filters.labels.botScore",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.greaterThan, a.Gn.greaterThanOrEqual, a.Gn.lessThan, a.Gn.lessThanOrEqual],
						example: 20,
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.botScore",
						validate: k => {
							const A = parseInt(k, 10);
							return A >= 0 && A <= 100
						},
						urlParam: "botScore"
					},
					botScoreSrcName: {
						label: "firewall.analytics.filters.labels.botScoreSrcName",
						type: o.kE.select,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						options: Object.keys(m),
						urlParam: "botScoreSrcName"
					},
					clientAsn: {
						label: "firewall.analytics.filters.labels.clientAsn",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: 13335,
						validationMessage: "firewall.analytics.filters.errors.asn",
						validate: k => !isNaN(parseFloat(k)) && isFinite(parseFloat(k)),
						urlParam: "asn"
					},
					clientCountryName: {
						label: "firewall.analytics.filters.labels.clientCountryName",
						type: o.kE.select,
						options: Object.keys(c.zY),
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						urlParam: "country"
					},
					clientIP: {
						label: "firewall.analytics.filters.labels.clientIP",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: "192.0.2.0",
						validationMessage: "firewall.analytics.filters.errors.ip",
						validate: k => !!k && !!k.length && (d.ipv4.test(k) || d.ipv6.test(k)),
						urlParam: "ip"
					},
					clientRequestHTTPHost: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPHost",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.contains, a.Gn.notContains, a.Gn.startsWith, a.Gn.notStartsWith, a.Gn.endsWith, a.Gn.notEndsWith, a.Gn.in, a.Gn.notIn],
						example: "example.com",
						urlParam: "host"
					},
					clientRequestHTTPMethodName: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPMethodName",
						type: o.kE.select,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						options: ["GET", "POST", "PURGE", "PUT", "HEAD", "OPTIONS", "DELETE", "PATCH", "CONNECT", "TRACE"],
						urlParam: "http-method"
					},
					clientRequestHTTPProtocol: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPProtocol",
						type: o.kE.select,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						options: ["HTTP/1.0", "HTTP/1.1", "HTTP/1.2", "HTTP/2", "HTTP/3", "SPDY/3.1"],
						urlParam: "http-version"
					},
					ja3Hash: {
						label: "firewall.analytics.filters.labels.ja3Hash",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: "df669e7ea913f1ac0c0cce9a201a2ec1",
						urlParam: "ja3-hash"
					},
					apiGatewayMatchedEndpoint: {
						label: "firewall.analytics.filters.labels.apiGatewayMatchedEndpoint",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.contains, a.Gn.notContains, a.Gn.startsWith, a.Gn.notStartsWith, a.Gn.endsWith, a.Gn.notEndsWith, a.Gn.in, a.Gn.notIn],
						urlParam: "api-matched-endpoint",
						example: "/path/{var1}"
					},
					clientRequestPath: {
						label: "firewall.analytics.filters.labels.clientRequestPath",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.contains, a.Gn.notContains, a.Gn.startsWith, a.Gn.notStartsWith, a.Gn.endsWith, a.Gn.notEndsWith, a.Gn.in, a.Gn.notIn],
						example: "/content",
						urlParam: "path"
					},
					clientRequestQuery: {
						label: "firewall.analytics.filters.labels.clientRequestQuery",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.contains, a.Gn.notContains, a.Gn.startsWith, a.Gn.notStartsWith, a.Gn.endsWith, a.Gn.notEndsWith, a.Gn.in, a.Gn.notIn],
						example: "?example=1",
						urlParam: "query"
					},
					source: {
						label: "firewall.analytics.filters.labels.source",
						type: o.kE.select,
						options: Object.keys(u).filter(k => k !== "unknown"),
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						urlParam: "service"
					},
					rayName: {
						label: "firewall.analytics.filters.labels.rayName",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals],
						example: "1a79a4d60de6718e",
						urlParam: "ray-id",
						parse: k => k.replace(/-[A-Z]{3}$/, "")
					},
					ruleId: {
						label: "firewall.analytics.filters.labels.ruleId",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: 100001,
						urlParam: "rule-id"
					},
					rulesetId: {
						label: "firewall.analytics.filters.labels.rulesetId",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: "",
						urlParam: "ruleset-id"
					},
					userAgent: {
						label: "firewall.analytics.filters.labels.userAgent",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.contains, a.Gn.notContains, a.Gn.startsWith, a.Gn.notStartsWith, a.Gn.endsWith, a.Gn.notEndsWith, a.Gn.in, a.Gn.notIn],
						example: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6)...",
						urlParam: "user-agent"
					},
					wafMlAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlAttackScore",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.greaterThan, a.Gn.greaterThanOrEqual, a.Gn.lessThan, a.Gn.lessThanOrEqual],
						example: 20,
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: k => {
							const A = parseInt(k, 10);
							return A >= 0 && A <= 100
						},
						urlParam: "waf-ml-score"
					},
					wafRceAttackScore: {
						label: "firewall.analytics.filters.labels.wafRceAttackScore",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.greaterThan, a.Gn.greaterThanOrEqual, a.Gn.lessThan, a.Gn.lessThanOrEqual],
						example: 20,
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.wafRceAttackScore",
						validate: k => {
							const A = parseInt(k, 10);
							return A >= 0 && A <= 100
						},
						urlParam: "waf-rce-score"
					},
					wafMlSqliAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlSqliAttackScore",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.greaterThan, a.Gn.greaterThanOrEqual, a.Gn.lessThan, a.Gn.lessThanOrEqual],
						example: 20,
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: k => {
							const A = parseInt(k, 10);
							return A >= 0 && A <= 100
						},
						urlParam: "waf-ml-sqli-score"
					},
					wafMlXssAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlXssAttackScore",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.greaterThan, a.Gn.greaterThanOrEqual, a.Gn.lessThan, a.Gn.lessThanOrEqual],
						example: 20,
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: k => {
							const A = parseInt(k, 10);
							return A >= 0 && A <= 100
						},
						urlParam: "waf-ml-xss-score"
					},
					wafAttackScoreClass: {
						label: "firewall.analytics.filters.labels.wafAttackScoreClass",
						type: o.kE.select,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						options: ["attack", "likely_attack", "likely_clean", "clean", "not_scored"],
						example: "Attack",
						urlParam: "waf-ml-score-class"
					},
					zoneVersion: {
						label: "firewall.analytics.filters.labels.zoneVersion",
						type: o.kE.string,
						example: 3,
						operators: [a.Gn.equals, a.Gn.notEquals],
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.zoneVersion",
						validate: k => parseInt(k) >= 0,
						urlParam: "zone-version"
					},
					zoneTag: {
						label: "firewall.analytics.filters.labels.zoneTag",
						type: o.kE.string,
						example: "c40df159b74f0e1c0deedf29008ffc04",
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						urlParam: "zone-id"
					}
				},
				I = (k, A, oe, ee, ge, Q, W) => {
					const K = s({}, f);
					return k || (delete K.botScore, delete K.botScoreSrcName), A || delete K.ja3Hash, oe || (delete K.wafMlAttackScore, delete K.wafMlSqliAttackScore, delete K.wafMlXssAttackScore, delete K.wafRceAttackScore), Q || delete K.wafAttackScoreClass, ee || delete K.zoneVersion, ge || delete K.apiGatewayMatchedEndpoint, W || delete K.zoneTag, K
				},
				D = {
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
				P = "firewall-analytics",
				y = "encrypted_matched_data",
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
					userAgent: "http.user_agent",
					wafMlAttackScore: "cf.waf.score",
					wafAttackScore: "cf.waf.score",
					wafRceAttackScore: "cf.waf.score.rce",
					wafMlSqliAttackScore: "cf.waf.score.sqli",
					wafSqliAttackScore: "cf.waf.score.sqli",
					wafMlXssAttackScore: "cf.waf.score.xss",
					wafXssAttackScore: "cf.waf.score.xss"
				},
				z = {
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
				G = {
					REQUEST_HEADERS_NAMES: "firewall.activity_log.matched_data.request_headers_names",
					FILES: "firewall.activity_log.matched_data.files",
					ARGS: "firewall.activity_log.matched_data.args",
					ARGS_POST_NAMES: "firewall.activity_log.matched_data.args_post_names",
					ARGS_GET_NAMES: "firewall.activity_log.matched_data.args_get_names",
					ARGS_GET: "firewall.activity_log.matched_data.args_get",
					REQUEST_HEADERS: "firewall.activity_log.matched_data.request_headers"
				},
				ve = ["REQUEST_HEADERS:HOST", "REQUEST_HEADERS:REFERER", "REQUEST_HEADERS:USER-AGENT"],
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
				Y = "13335",
				H = "https://developers.cloudflare.com/ddos-protection/best-practices/respond-to-ddos-attacks/"
		},
		"../react/pages/firewall/api-shield/tracking.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Fj: function() {
					return l
				},
				kq: function() {
					return s
				},
				xr: function() {
					return h
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(t) {
				for (var r = 1; r < arguments.length; r++) {
					var p = arguments[r] != null ? Object(arguments[r]) : {},
						m = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(p).filter(function(i) {
						return Object.getOwnPropertyDescriptor(p, i).enumerable
					})), m.forEach(function(i) {
						d(t, i, p[i])
					})
				}
				return t
			}

			function d(t, r, p) {
				return r = g(r), r in t ? Object.defineProperty(t, r, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = p, t
			}

			function g(t) {
				var r = a(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function a(t, r) {
				if (typeof t != "object" || t === null) return t;
				var p = t[Symbol.toPrimitive];
				if (p !== void 0) {
					var m = p.call(t, r || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let s = function(t) {
				return t.MAIN = "API Shield", t.SCHEMA_VALIDATION = "Schema Validation", t.JWT_VALIDATION = "JWT Validation", t.SEQUENCE_ANALYTICS = "Sequence Analytics", t.ENDPOINT_MANAGEMENT = "Endpoint Management", t.API_DISCOVERY = "API Discovery", t.SETTINGS = "Settings", t
			}({});
			const l = {
					[s.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint"
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
						addOrRemoveSessionIdentifiers: "add or remove session identifiers"
					}
				},
				h = ({
					name: t,
					category: r = "user journey",
					product: p = s.MAIN,
					productName: m,
					additionalData: i
				}) => {
					o().sendEvent(t, c({
						category: r,
						product: p,
						productName: m
					}, i || {}))
				}
		},
		"../react/pages/firewall/bots/tracking.ts": function($, _, n) {
			"use strict";
			n.d(_, {
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
			let e = function(d) {
					return d.INITIAL_FETCH_SCORES = "view bots scores distribution", d.FETCH_CONFIGURATION = "view bots configuration page", d.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", d.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", d.UPDATE_SETTINGS = "update bots settings", d.DELETE_RULE = "delete bots ruleset", d.UPDATE_RULE = "update bots ruleset", d.FETCH_RULES = "view bots ruleset", d.CONFIGURE_BOT_MANAGEMENT = "view bots management", d.WAF_RULES_REDIRECT = "redirect waf rules", d
				}({}),
				o = function(d) {
					return d.PROVIDED_TEMPLATE = "provided template link in detection card", d.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", d.USE_TEMPLATE = "use template", d.CREATE_FIREWALL_RULE = "create firewall rule", d.WAF_RULES = "waf rules", d
				}({});
			const c = "user journey"
		},
		"../react/pages/firewall/page-shield/tracking.ts": function($, _, n) {
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
				MANAGE_PAGE_SHIELD_POLICY: "manage page shield policy",
				VIEW_PAGE_SHIELD_POLICIES: "view page shield policies"
			}
		},
		"../react/pages/firewall/rulesets/tracking.tsx": function($, _, n) {
			"use strict";
			n.d(_, {
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
					return d
				}
			});
			let e = function(g) {
				return g.DELETE = "delete", g.CREATE = "create", g.GET = "get", g.UPDATE = "update", g
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
				c = (g, a) => {
					var s;
					return `${a} ${(s=o[g])!==null&&s!==void 0?s:g} rule${a===e.GET?"s":""}`
				},
				d = () => {
					var g, a;
					return (g = Object.keys(o)) === null || g === void 0 || (a = g.map(s => {
						var l;
						return (l = Object.values(e)) === null || l === void 0 ? void 0 : l.map(h => c(s, h))
					})) === null || a === void 0 ? void 0 : a.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				AS: function() {
					return d
				},
				Gf: function() {
					return h
				},
				IK: function() {
					return t
				},
				Ki: function() {
					return o
				},
				Lz: function() {
					return r
				},
				nT: function() {
					return a
				},
				o4: function() {
					return p
				},
				qH: function() {
					return l
				},
				x3: function() {
					return g
				}
			});
			var e = n("../react/pages/firewall/analytics/constants.ts");
			const o = ["block", "challenge", "jschallenge", "managedChallenge"],
				c = m => Object.fromEntries(Object.entries(m).map(([i, C]) => [C, i])),
				d = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				g = c(d),
				a = {
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
				s = c(a),
				l = {
					"Not Computed": "not_computed",
					"Machine Learning": "machine_learning",
					Heuristics: "heuristics",
					"Behavioral Analysis": "behavioral_analysis",
					"JS Fingerprinting": "js_fingerprinting",
					"Verified Bot": "verified_bot",
					"Cloudflare Service": "cloudflare_service"
				},
				h = c(l);
			let t = function(m) {
				return m.SAMPLED = "sampled", m.RAW = "raw", m
			}({});
			const r = "security-analytics-log-explorer";
			let p = function(m) {
				return m.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', m.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', m.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', m.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', m.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', m
			}({})
		},
		"../react/pages/home/alerts/config.tsx": function($, _, n) {
			"use strict";
			n.d(_, {
				jk: function() {
					return u
				},
				w8: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				c = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				d = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function g(I) {
				for (var D = 1; D < arguments.length; D++) {
					var U = arguments[D] != null ? Object(arguments[D]) : {},
						P = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(U).filter(function(y) {
						return Object.getOwnPropertyDescriptor(U, y).enumerable
					})), P.forEach(function(y) {
						a(I, y, U[y])
					})
				}
				return I
			}

			function a(I, D, U) {
				return D = s(D), D in I ? Object.defineProperty(I, D, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[D] = U, I
			}

			function s(I) {
				var D = l(I, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function l(I, D) {
				if (typeof I != "object" || I === null) return I;
				var U = I[Symbol.toPrimitive];
				if (U !== void 0) {
					var P = U.call(I, D || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(I)
			}
			const h = "Notifications",
				t = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				p = (0, e.BC)`${r}/notifications`,
				m = (0, e.BC)`${p}/destinations`,
				i = (0, e.BC)`${p}/create`,
				C = (0, e.BC)`${p}/edit/${"alertId"}`,
				u = g({
					account: r,
					alerts: p,
					destinations: m,
					createAlert: i,
					editAlert: C
				}, o._j, c._j),
				f = g({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct"
				}, d.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				_j: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				c = (0, e.BC)`${o}/pagerduty/connect`,
				d = (0, e.BC)`${o}/pagerduty/register`,
				g = (0, e.BC)`${o}/pagerduty`,
				a = {
					pagerDutyConnect: c,
					pagerDutyRegister: d,
					pagerDutyList: g
				};
			var s = null
		},
		"../react/pages/home/alerts/integrations/redux/entities.ts": function($, _, n) {
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
		"../react/pages/home/alerts/integrations/webhooks/routes.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				_j: function() {
					return g
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				c = (0, e.BC)`${o}/webhook/create`,
				d = (0, e.BC)`${o}/webhook/edit/${"webhookId"}`,
				g = {
					webhookCreate: c,
					webhookResource: d
				};
			var a = null
		},
		"../react/pages/home/alerts/tracking.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_LIST = "create list", o.DELETE_LIST = "delete list", o.ADD_LIST_ITEM = "add list item", o.DELETE_LIST_ITEM = "delete list item", o
			}({})
		},
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o
			}({})
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o
			}({})
		},
		"../react/pages/magic/network-monitoring/constants.ts": function($, _, n) {
			"use strict";
			n.d(_, {
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
		"../react/pages/magic/packet-captures/constants.ts": function($, _, n) {
			"use strict";
			n.d(_, {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function($, _, n) {
			"use strict";
			n.d(_, {
				gb: function() {
					return t
				},
				iP: function() {
					return z
				},
				xL: function() {
					return I
				},
				rD: function() {
					return ve
				},
				oT: function() {
					return i
				},
				i2: function() {
					return ne
				},
				x1: function() {
					return a
				},
				lW: function() {
					return l
				},
				UA: function() {
					return y
				},
				K5: function() {
					return p
				},
				Ii: function() {
					return U
				},
				PJ: function() {
					return G
				},
				bK: function() {
					return u
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				g = n("../../../../node_modules/@cloudflare/elements/es/index.js");
			const a = () => o().createElement(s, null, o().createElement("svg", {
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
				s = (0, c.LM)(({
					theme: Y
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
				l = () => o().createElement(h, null, o().createElement("svg", {
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
				h = (0, c.LM)(({
					theme: Y
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
				t = () => o().createElement(r, null, o().createElement(g.Ei, {
					alt: "airplane",
					src: d,
					width: "85%"
				})),
				r = (0, c.LM)(({
					theme: Y
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
				p = () => o().createElement(m, null, o().createElement("svg", {
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
				m = (0, c.LM)(({
					theme: Y
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
				i = () => o().createElement(C, null, o().createElement("svg", {
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
				C = (0, c.LM)(({
					theme: Y
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
				u = () => o().createElement(f, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				f = (0, c.LM)(({
					theme: Y
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
				I = () => o().createElement(D, null, o().createElement("svg", {
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
				D = (0, c.LM)(({
					theme: Y
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
				U = () => o().createElement(P, null, o().createElement("svg", {
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
				P = (0, c.LM)(({
					theme: Y
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
				y = () => o().createElement(O, null, o().createElement("svg", {
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
				O = (0, c.LM)(({
					theme: Y
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
				G = () => o().createElement("svg", {
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
				ve = () => o().createElement("svg", {
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
				ne = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				A2: function() {
					return s
				},
				He: function() {
					return g
				},
				N$: function() {
					return a
				},
				Qq: function() {
					return c
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
				c = "login-apple-jwt",
				d = "cf-test",
				g = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				a = l => [{
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
				s = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/onboarding/components/guide/reducer.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				F: function() {
					return a
				}
			});
			var e = n("../react/app/redux/makeReducer.js");

			function o(s) {
				for (var l = 1; l < arguments.length; l++) {
					var h = arguments[l] != null ? Object(arguments[l]) : {},
						t = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && t.push.apply(t, Object.getOwnPropertySymbols(h).filter(function(r) {
						return Object.getOwnPropertyDescriptor(h, r).enumerable
					})), t.forEach(function(r) {
						c(s, r, h[r])
					})
				}
				return s
			}

			function c(s, l, h) {
				return l = d(l), l in s ? Object.defineProperty(s, l, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[l] = h, s
			}

			function d(s) {
				var l = g(s, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function g(s, l) {
				if (typeof s != "object" || s === null) return s;
				var h = s[Symbol.toPrimitive];
				if (h !== void 0) {
					var t = h.call(s, l || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(s)
			}
			const a = (0, e.ZP)("onboardingGuide").on("success", (s, l, h) => {
				if (h.meta.method === "post") {
					var t;
					const r = l.data && l.data.completedTasks || [],
						p = (t = l.data && l.data.readTasks) !== null && t !== void 0 ? t : [];
					return o({}, s, {
						data: {
							completedTasks: Array.from(new Set(r.concat(h.payload.status === "completedTasks" ? h.payload.taskName : []))),
							readTasks: Array.from(new Set(p.concat(h.payload.status === "readTasks" ? h.payload.taskName : [])))
						}
					})
				}
				return s
			})
		},
		"../react/pages/pages/routes.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Hv: function() {
					return c
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
					projectSettings: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings`,
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
				d = g => `${g.subdomain}.pages.dev`
		},
		"../react/pages/r2/routes.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Hv: function() {
					return c
				},
				Jg: function() {
					return a
				},
				_j: function() {
					return o
				},
				pZ: function() {
					return s
				},
				vF: function() {
					return g
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
				g = (t, r) => {
					const p = d(r);
					return `https://${t}.${p}`
				},
				a = (t, r, p) => `${g(t,r)}/${p}`,
				s = () => "r2.dev",
				l = t => {
					const r = s();
					return `https://${t}.${r}`
				},
				h = (t, r) => `${l(t)}/${r}`
		},
		"../react/pages/security-center/tracking.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				R: function() {
					return e
				}
			});
			let e = function(o) {
				return o.LOAD_SCAN_INFO = "load url scan information", o.INITIATE_URL_SCAN = "initiate url scan", o
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function($, _, n) {
			"use strict";
			n.d(_, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o
			}({})
		},
		"../react/pages/traffic/argo/tracking.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o
			}({})
		},
		"../react/pages/traffic/load-balancing/tracking.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function($, _, n) {
			"use strict";
			n.d(_, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE = "create waiting room", o.UPDATE = "update waiting room", o.EVENTS = "view waiting rooms events", o.ANALYTICS = "view waiting room analytics", o.GENERATE_PREVIEW = "generate waiting room preview link", o
			}({})
		},
		"../react/pages/welcome/routes.ts": function($, _, n) {
			"use strict";
			n.d(_, {
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
		"../react/pages/workers/entityTypes.ts": function($, _, n) {
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
		"../react/pages/zoneless-workers/constants.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				IS: function() {
					return s
				},
				L7: function() {
					return g
				},
				Oj: function() {
					return p
				},
				QV: function() {
					return m
				},
				X$: function() {
					return f
				},
				X6: function() {
					return h
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
					return a
				}
			});

			function e(D) {
				for (var U = 1; U < arguments.length; U++) {
					var P = arguments[U] != null ? Object(arguments[U]) : {},
						y = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(P).filter(function(O) {
						return Object.getOwnPropertyDescriptor(P, O).enumerable
					})), y.forEach(function(O) {
						o(D, O, P[O])
					})
				}
				return D
			}

			function o(D, U, P) {
				return U = c(U), U in D ? Object.defineProperty(D, U, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[U] = P, D
			}

			function c(D) {
				var U = d(D, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function d(D, U) {
				if (typeof D != "object" || D === null) return D;
				var P = D[Symbol.toPrimitive];
				if (P !== void 0) {
					var y = P.call(D, U || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(D)
			}
			const g = {
					documentation: {
						workersAPI: "https://developers.cloudflare.com/api/operations/worker-script-list-workers",
						root: "https://workers.cloudflare.com/docs",
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
						pricing: "https://developers.cloudflare.com/workers/platform/pricing",
						computeSetting: "https://developers.cloudflare.com/workers/platform/cron-triggers#green-compute",
						usageModels: "https://developers.cloudflare.com/workers/platform/pricing#usage-models",
						usageModelCLIDocs: "https://developers.cloudflare.com/workers/cli-wrangler/configuration#keys",
						wrangler: "https://developers.cloudflare.com/workers/wrangler/",
						modules: "https://developers.cloudflare.com/workers/cli-wrangler/configuration#modules",
						routes: "https://developers.cloudflare.com/workers/platform/routes/#matching-behavior",
						routesDNS: "https://developers.cloudflare.com/workers/platform/triggers/routes/#subdomains-must-have-a-dns-record",
						customDomains: "https://developers.cloudflare.com/workers/platform/routing/custom-domains",
						fetchEvent: "https://developers.cloudflare.com/workers/runtime-apis/fetch-event",
						scheduledWorkers: "https://developers.cloudflare.com/workers/platform/cron-triggers",
						emailWorkers: "https://developers.cloudflare.com/email-routing/email-workers/",
						cronSyntax: "https://developers.cloudflare.com/workers/platform/cron-triggers#supported-cron-expressions",
						scheduledEvents: "https://developers.cloudflare.com/workers/runtime-apis/scheduled-event",
						languages: "https://developers.cloudflare.com/workers/platform/languages",
						durableObjectsChatExample: "https://developers.cloudflare.com/workers/learning/using-durable-objects#websockets-in-durable-objects",
						durableObjectsCounterExample: "https://developers.cloudflare.com/workers/learning/using-durable-objects#example---counter",
						services: "https://developers.cloudflare.com/workers/platform/services",
						serviceBindings: "https://developers.cloudflare.com/workers/learning/using-services/#workers-service-bindings",
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
						userCpuLimits: "https://developers.cloudflare.com/workers/platform/pricing/#standard-usage-model"
					},
					serverlist: "https://blog.cloudflare.com/tag/serverlist/",
					discord: "https://discord.gg/cloudflaredev",
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
				a = 800,
				s = "40rem",
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
				p = {
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
				m = {
					clickedDetailTabsMetrics: "Workers:DetailTab:Metrics",
					clickedDetailTabsDeployments: "Workers:DetailTab:Deployments",
					clickedDetailTabsIntegrations: "Workers:DetailTab:Integrations",
					clickedDetailTabsTriggers: "Workers:DetailTab:Triggers",
					clickedDetailTabsSettings: "Workers:DetailTab:Settings",
					clickedBundledUsageModel: "Workers:Clicked Bundled Usage Model",
					clickedUnboundUsageModel: "Workers:Clicked Unbound Usage Model",
					clickedGreenComputeSetting: "Workers:Clicked Green Compute Setting",
					clickedGlobalComputeSetting: "Workers:Clicked Global Compute Setting",
					enableWorkers: "enable workers",
					setupSubdomain: "set up subdomain",
					selectPlan: "select workers plan",
					verifyEmail: "verify email",
					createService: "create service",
					createPlaygroundWorker: "create worker from playground",
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
					clickedDiscordLink: "clicked sidebar Discord link",
					clickedCommunityLink: "clicked sidebar Community Forum link"
				},
				i = "workers.dev",
				C = "YYYY-MM-DD HH:mm:SS ZZ",
				u = "active",
				f = ["bundled", "unbound", "standard"],
				I = null
		},
		"../react/pages/zoneless-workers/routes.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Hv: function() {
					return s
				},
				L: function() {
					return c
				},
				Q9: function() {
					return d
				},
				_j: function() {
					return g
				},
				ky: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = l => `${l}.workers.dev`,
				c = (l, h, t) => `${t?`${t}.`:""}${l}.${o(h)}`,
				d = (l, h, t) => `https://${c(l,h,t)}`,
				g = {
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
					serviceDetailsLogs: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs`,
					serviceDetailsLogsLive: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/live`,
					serviceDetailsLogpush: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/logpush`,
					serviceDetailsLogsCron: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/cron`,
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
				a = "https://cron-triggers.cloudflareworkers.com",
				s = {
					nextCron: `${a}/next`,
					describeCron: `${a}/describe`,
					validateCron: `${a}/validate`,
					zones: (0, e.BC)`/zones`,
					subdomain: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain`,
					subdomainCertStatus: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain/ssl`,
					subdomainDeployed: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/subdomain`,
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/workers/account-settings`,
					kvRequestMetrics: (0, e.BC)`/accounts/${"accountId"}/storage/analytics`,
					kvStorageMetrics: (0, e.BC)`/accounts/${"accountId"}/storage/analytics/stored`,
					kvNamespaces: (0, e.BC)`/accounts/${"accountId"}/storage/kv/namespaces`,
					kvNamespace: (0, e.BC)`/accounts/${"accountId"}/storage/kv/namespaces/${"namespaceId"}`,
					featureFlagSettings: (0, e.BC)`/accounts/${"accountId"}/workers/settings`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					createTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails`,
					deleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails/${"tailId"}`,
					services: (0, e.BC)`/accounts/${"accountId"}/workers/services`,
					service: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}`,
					serviceScriptRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/routes/${"routeId"}`,
					serviceEnvironment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}`,
					serviceRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/routes`,
					serviceScript: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/content`,
					serviceScriptV2: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/content/v2`,
					serviceBindings: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/bindings`,
					serviceBindingsReferences: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/references`,
					serviceSettings: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/settings`,
					enableDurableObjects: (0, e.BC)`/accounts/${"accountId"}/flags/products/edgeworker/changes`,
					durableObjectNamespaces: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces`,
					durableObjectNamespace: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces/${"namespaceId"}`,
					durableObjectsInNamespace: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces/${"namespaceId"}/objects`,
					servicePreview: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/preview`,
					edgePreview: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/edge-preview`,
					edgePreviewInit: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain/edge-preview`,
					edgePreviewZoneInit: (0, e.BC)`/zones/${"zone"}/workers/edge-preview`,
					serviceSubdomain: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/subdomain`,
					serviceUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/usage-model`,
					serviceCopyEnvironment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/copy/${"toEnvironmentName"}`,
					serviceCreateTail: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/tails`,
					serviceDeleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/tails/${"tailId"}`,
					serviceSchedules: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/schedules`,
					serviceEmailTriggers: (0, e.BC)`/accounts/${"accountId"}/email/routing/rules`,
					promoteDeployment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"sourceEnv"}/promote/${"targetEnv"}`,
					dnsRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/domains/records`,
					dnsRoute: (0, e.BC)`/accounts/${"accountId"}/workers/domains/records/${"recordId"}`,
					dnsRouteChangeset: (0, e.BC)`/accounts/${"accountId"}/workers/domains/changeset`,
					certificates: (0, e.BC)`/zones/${"zoneId"}/ssl/certificate_packs/${"certId"}`,
					queues: (0, e.BC)`/accounts/${"accountId"}/workers/queues`,
					versions: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}`,
					version: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}/detail/${"versionTag"}`,
					dnsRecords: (0, e.BC)`/zones/${"zoneId"}/dns_records`,
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					spectrum: (0, e.BC)`/zones/${"zoneId"}/spectrum/apps/dns`,
					accountMtlsCertificates: (0, e.BC)`/accounts/${"accountId"}/mtls_certificates`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					createApiToken: (0, e.BC)`/user/tokens`,
					deleteApiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					integrations: {
						getIntegrations: (0, e.BC)`/accounts/${"accountId"}/integrations`,
						getManifest: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}`,
						invokeGetDataAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/get-data/${"action"}`,
						invokeGetOptionsAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/get-options/${"action"}`,
						invokeSubmitFormAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/submit-form/${"action"}`,
						invokeSubmitTokenAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/submit-token/${"action"}`,
						invokeUninstallAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/uninstall/${"action"}`,
						integrationsPreviewWorker: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/preview/${"action"}`,
						integrationsDeployWorker: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/deploy/${"action"}`,
						oauthAuthorize: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/oauth/${"oauthProviderId"}/authorize`,
						oauthCallback: (0, e.BC)`/oauth/callback`
					},
					scriptsByHandler: (0, e.BC)`/accounts/${"accountId"}/workers/scripts?handlers=${"handler"}`,
					tailsByConsumer: (0, e.BC)`/accounts/${"accountId"}/workers/tails/by-consumer/${"serviceId"}/environment/${"environment"}`,
					outboundDispatchers: (0, e.BC)`/accounts/${"accountId"}/workers/dispatch_outbounds/by-outbound/${"serviceId"}/environment/${"environmentName"}`,
					standard: (0, e.BC)`/accounts/${"accountId"}/workers/standard`
				}
		},
		"../react/shims/focus-visible.js": function() {
			(function($, _) {
				_()
			})(this, function() {
				"use strict";

				function $() {
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

					function d(u) {
						return !!(u && u !== document && u.nodeName !== "HTML" && u.nodeName !== "BODY" && "classList" in u && "contains" in u.classList)
					}

					function g(u) {
						var f = u.type,
							I = u.tagName;
						return !!(I == "INPUT" && c[f] && !u.readOnly || I == "TEXTAREA" && !u.readOnly || u.isContentEditable)
					}

					function a(u) {
						u.getAttribute("is-focus-visible") !== "" && u.setAttribute("is-focus-visible", "")
					}

					function s(u) {
						u.getAttribute("is-focus-visible") === "" && u.removeAttribute("is-focus-visible")
					}

					function l(u) {
						d(document.activeElement) && a(document.activeElement), n = !0
					}

					function h(u) {
						n = !1
					}

					function t(u) {
						!d(u.target) || (n || g(u.target)) && a(u.target)
					}

					function r(u) {
						!d(u.target) || u.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), s(u.target))
					}

					function p(u) {
						document.visibilityState == "hidden" && (e && (n = !0), m())
					}

					function m() {
						document.addEventListener("mousemove", C), document.addEventListener("mousedown", C), document.addEventListener("mouseup", C), document.addEventListener("pointermove", C), document.addEventListener("pointerdown", C), document.addEventListener("pointerup", C), document.addEventListener("touchmove", C), document.addEventListener("touchstart", C), document.addEventListener("touchend", C)
					}

					function i() {
						document.removeEventListener("mousemove", C), document.removeEventListener("mousedown", C), document.removeEventListener("mouseup", C), document.removeEventListener("pointermove", C), document.removeEventListener("pointerdown", C), document.removeEventListener("pointerup", C), document.removeEventListener("touchmove", C), document.removeEventListener("touchstart", C), document.removeEventListener("touchend", C)
					}

					function C(u) {
						u.target.nodeName.toLowerCase() !== "html" && (n = !1, i())
					}
					document.addEventListener("keydown", l, !0), document.addEventListener("mousedown", h, !0), document.addEventListener("pointerdown", h, !0), document.addEventListener("touchstart", h, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", p, !0), m(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function _(n) {
					var e;

					function o() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && _($)
			})
		},
		"../react/utils/api.ts": function($, _, n) {
			"use strict";
			n.r(_), n.d(_, {
				attachAtokHeader: function() {
					return f
				},
				attachErrorHandler: function() {
					return U
				},
				authyAuthConfirmNumber: function() {
					return ee
				},
				authyAuthPutSave: function() {
					return ge
				},
				basePath: function() {
					return C
				},
				fetchCertificateApiKey: function() {
					return Y
				},
				fetchUserServiceKey: function() {
					return ve
				},
				performLogout: function() {
					return G
				},
				prependApiRoute: function() {
					return I
				},
				sendCookies: function() {
					return D
				},
				twoFacDisableDelete: function() {
					return oe
				},
				twoFacGoogleAuthEnablePost: function() {
					return k
				},
				twoFacGoogleAuthQRCodeGet: function() {
					return A
				},
				updateCertificateApiKey: function() {
					return H
				},
				updateUserServiceKey: function() {
					return ne
				},
				validateOptions: function() {
					return u
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e),
				c = n("../react/app/providers/storeContainer.js"),
				d = n("../react/common/actions/notificationsActions.ts"),
				g = n("../react/utils/translator.tsx"),
				a = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				s = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				l = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				h = n.n(l),
				t = n("../../../../node_modules/@sentry/core/esm/exports.js");

			function r(Q) {
				for (var W = 1; W < arguments.length; W++) {
					var K = arguments[W] != null ? Object(arguments[W]) : {},
						x = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(K).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(K, Z).enumerable
					})), x.forEach(function(Z) {
						p(Q, Z, K[Z])
					})
				}
				return Q
			}

			function p(Q, W, K) {
				return W = m(W), W in Q ? Object.defineProperty(Q, W, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[W] = K, Q
			}

			function m(Q) {
				var W = i(Q, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function i(Q, W) {
				if (typeof Q != "object" || Q === null) return Q;
				var K = Q[Symbol.toPrimitive];
				if (K !== void 0) {
					var x = K.call(Q, W || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)(Q)
			}
			const C = "/api/v4",
				u = Q => {
					Q.url.charAt(0) !== "/" && (Q.url = `/${Q.url}`)
				},
				f = Q => {
					n.g.bootstrap && n.g.bootstrap.atok && (Q.headers = r({}, Q.headers, {
						"X-ATOK": n.g.bootstrap.atok
					}))
				},
				I = Q => {
					Q.url = C + Q.url
				},
				D = Q => {
					Q.credentials = "same-origin"
				},
				U = Q => {
					const W = Q.callback;
					Q.callback = (K, x) => {
						K && !Q.hideErrorAlert && P(K, Q), W && W(K, x)
					}
				},
				P = (Q, W) => {
					const K = Q.body && Q.body.errors;
					(K ? O(W, K) : z(W, Q)).forEach(Z => {
						(0, c.bh)().dispatch(d.IH("error", typeof Z == "string" ? Z : Z.message)), h().sendEvent("error notification shown", {
							errorCode: typeof Z == "string" ? void 0 : Z.code
						}), {
							REDUX_LOGGER: void 0
						}.TESTING && n.g.logAppError(typeof Z == "string" ? Z : Z.message)
					})
				};

			function y(Q, W) {
				return !!(W.code === 1001 && Q.url && Q.url.match(/subscription/gi) || W.code === 10042 && Q.url && Q.url.match(/r2/gi))
			}
			const O = (Q, W) => W.filter(K => !y(Q, K)).map(({
					message: K,
					code: x,
					error_chain: Z
				}) => {
					switch (x) {
						case 9300:
						case 9301:
						case 9303:
							G();
						default:
							break
					}
					const se = K.split(" ").length > 1,
						M = K.split(".").length > 1,
						q = !se && M;
					let ce = K;
					if (q) try {
						ce = (0, g.ZP)(K)
					} catch {}
					if (K.startsWith("billing.")) return {
						message: `Error while processing payment: ${ce}.`,
						code: x
					};
					const B = Array.isArray(Z) ? Z.map(b => b.message).join(". ") : "";
					return {
						message: `${ce}${typeof x!="undefined"?` (Code: ${x})`:""} ${B}`,
						code: x
					}
				}),
				z = (Q, W) => [`API Request Failed: ${Q.method} ${Q.url} (${W.status})`];
			e.beforeSend(u), e.beforeSend(f), e.beforeSend(I), e.beforeSend(D), e.beforeSend(U);
			const G = Q => e.del("/user/sessions/current").then(W => {
				if (a.E.remove(s.Qq), Q) window.location.href = Q;
				else {
					var K, x;
					const Z = (K = (x = W.body.result) === null || x === void 0 ? void 0 : x.redirect_uri) !== null && K !== void 0 ? K : "/login";
					window.location.href = Z
				}
			}).catch(W => {
				console.error("Failed to logout", W), t.Tb(W)
			});

			function ve(Q) {
				return e.get("/user/service_keys/" + Q)
			}

			function ne(Q, W) {
				return e.put("/user/service_keys/" + Q, {
					body: W
				})
			}

			function Y(Q) {
				return e.post("/user/service_keys/certificateapi", {
					body: Q
				})
			}

			function H(Q) {
				return e.put("/user/service_keys/certificateapi", {
					body: Q
				})
			}
			const k = function(Q, W) {
					var K = {
						google_auth_code: Q
					};
					return e.post("/user/two_factor_authentication/google_authenticator/enable", {
						body: K
					}, W)
				},
				A = function(Q) {
					return e.get("/user/two_factor_authentication/google_authenticator/qr_code", void 0, Q)
				},
				oe = function(Q, W) {
					var K = {
						auth_token: Q
					};
					return e.del("/user/two_factor_authentication", {
						body: K
					}, W)
				},
				ee = function(Q, W) {
					return e.post("/user/two_factor_authentication", {
						body: Q
					}, W)
				},
				ge = function(Q, W) {
					return e.put("/user/two_factor_authentication", {
						body: Q
					}, W)
				}
		},
		"../react/utils/bootstrap.ts": function($, _, n) {
			"use strict";
			n.d(_, {
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
					return c
				}
			});
			const e = () => {
					var g, a, s;
					return (g = window) === null || g === void 0 || (a = g.bootstrap) === null || a === void 0 || (s = a.data) === null || s === void 0 ? void 0 : s.security_token
				},
				o = () => {
					var g, a, s;
					return !!((g = n.g.bootstrap) === null || g === void 0 || (a = g.data) === null || a === void 0 || (s = a.user) === null || s === void 0 ? void 0 : s.id)
				},
				c = () => {
					var g, a;
					return !!((g = n.g.bootstrap) === null || g === void 0 || (a = g.data) === null || a === void 0 ? void 0 : a.is_kendo)
				},
				d = () => {
					var g, a, s, l;
					return (g = window) === null || g === void 0 || (a = g.bootstrap) === null || a === void 0 || (s = a.data) === null || s === void 0 || (l = s.user) === null || l === void 0 ? void 0 : l.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				O5: function() {
					return d
				},
				Xm: function() {
					return c
				},
				kT: function() {
					return s
				},
				wV: function() {
					return l
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var t;
					return ((t = window) === null || t === void 0 ? void 0 : t.OnetrustActiveGroups) || ""
				},
				c = () => (o() || "").indexOf("C0002") !== -1,
				d = () => (o() || "").indexOf("C0003") !== -1,
				g = () => (o() || "").indexOf("C0004") !== -1,
				a = () => (o() || "").indexOf("C0005") !== -1,
				s = t => {
					const r = ".cloudflare.com";
					document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				l = () => {
					var t;
					const r = (t = window.OneTrust) === null || t === void 0 ? void 0 : t.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				h = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				AI: function() {
					return f
				},
				S8: function() {
					return u
				},
				ZW: function() {
					return a
				},
				ay: function() {
					return I
				},
				fh: function() {
					return D
				},
				ly: function() {
					return l
				},
				th: function() {
					return g
				},
				ti: function() {
					return h
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				c = n("../../../common/intl/intl-types/src/index.ts"),
				d = n("../../../common/util/types/src/utils/index.ts");
			const g = "cf-sync-locale-with-cps",
				a = c.Q.en_US,
				s = "en_US",
				l = "cf-locale",
				h = y => (0, d.Yd)(c.Q).find(O => c.Q[O] === y) || s,
				t = [],
				r = [],
				p = [c.Q.de_DE, c.Q.en_US, c.Q.es_ES, c.Q.fr_FR, c.Q.it_IT, c.Q.pt_BR, c.Q.ko_KR, c.Q.ja_JP, c.Q.zh_CN, c.Q.zh_TW],
				m = [c.Q.de_DE, c.Q.en_US, c.Q.es_ES, c.Q.es_CL, c.Q.es_EC, c.Q.es_MX, c.Q.es_PE, c.Q.fr_FR, c.Q.it_IT, c.Q.ja_JP, c.Q.ko_KR, c.Q.pt_BR, c.Q.zh_CN, c.Q.zh_TW],
				i = {
					test: [...p, ...r, ...t],
					development: [...p, ...r, ...t],
					staging: [...p, ...r, ...t],
					production: [...p, ...r]
				},
				C = {
					test: [...m, ...r, ...t],
					development: [...m, ...r, ...t],
					staging: [...m, ...r, ...t],
					production: [...m, ...r]
				},
				u = (y, O) => {
					const z = c.Q[O];
					return y ? i.production.includes(z) : C.production.includes(z)
				},
				f = y => Object.keys(c.Q).filter(O => u(y, O)),
				I = y => {
					const O = c.Q[y];
					return r.includes(O)
				},
				D = (y, O) => y ? U[O] : P[O],
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
				P = {
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
				};
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
			})
		},
		"../react/utils/translator.tsx": function($, _, n) {
			"use strict";
			n.d(_, {
				QT: function() {
					return m
				},
				Vb: function() {
					return s
				},
				Yi: function() {
					return h
				},
				ZP: function() {
					return a
				},
				_m: function() {
					return t
				},
				cC: function() {
					return r
				},
				oc: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = n("../../../common/intl/intl-core/src/Translator.ts"),
				c = n("../../../common/intl/intl-react/src/index.ts");
			const d = n("../flags.js").J8,
				g = new o.Z({
					pseudoLoc: d("is_pseudo_loc")
				});

			function a(i, ...C) {
				return g.t(i, ...C)
			}
			const s = g;

			function l(i, ...C) {
				return markdown(a(i, C))
			}

			function h(i) {
				if (Number(i) !== 0) {
					if (i % 86400 == 0) return a("time.num_days", {
						smart_count: i / 86400
					});
					if (i % 3600 == 0) return a("time.num_hours", {
						smart_count: i / 3600
					});
					if (i % 60 == 0) return a("time.num_minutes", {
						smart_count: i / 60
					})
				}
				return a("time.num_seconds", {
					smart_count: i
				})
			}

			function t(i, C) {
				return i in C ? C[i] : void 0
			}
			const r = c.cC,
				p = c.oc,
				m = c.QT
		},
		"../react/utils/url.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Ct: function() {
					return D
				},
				Fl: function() {
					return x
				},
				KT: function() {
					return se
				},
				NF: function() {
					return i
				},
				Nw: function() {
					return f
				},
				Pd: function() {
					return u
				},
				Uh: function() {
					return Q
				},
				Y_: function() {
					return m
				},
				e1: function() {
					return I
				},
				el: function() {
					return ne
				},
				hW: function() {
					return H
				},
				pu: function() {
					return Z
				},
				qR: function() {
					return ve
				},
				td: function() {
					return C
				},
				uW: function() {
					return A
				}
			});
			var e = n("../../../../node_modules/query-string/query-string.js"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				d = n("../react/pages/r2/routes.ts"),
				g = n("../react/pages/zoneless-workers/routes.ts"),
				a = n("../react/pages/pages/routes.ts");

			function s(M) {
				for (var q = 1; q < arguments.length; q++) {
					var ce = arguments[q] != null ? Object(arguments[q]) : {},
						B = Object.keys(ce);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(ce).filter(function(b) {
						return Object.getOwnPropertyDescriptor(ce, b).enumerable
					})), B.forEach(function(b) {
						l(M, b, ce[b])
					})
				}
				return M
			}

			function l(M, q, ce) {
				return q = h(q), q in M ? Object.defineProperty(M, q, {
					value: ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[q] = ce, M
			}

			function h(M) {
				var q = t(M, "string");
				return typeof q == "symbol" ? q : String(q)
			}

			function t(M, q) {
				if (typeof M != "object" || M === null) return M;
				var ce = M[Symbol.toPrimitive];
				if (ce !== void 0) {
					var B = ce.call(M, q || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (q === "string" ? String : Number)(M)
			}
			const {
				endsWithSlash: r
			} = c.default, p = (M, q) => {
				const ce = M.replace(r, "").split("/");
				return ce.slice(0, 2).concat([q]).concat(ce.slice(3)).join("/")
			}, m = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), i = M => `/${M.replace(r,"").replace(/^\//,"")}`, C = M => f("add-site", M), u = M => f("billing", M), f = (M, q) => q ? `/${q}${M?`/${M}`:""}` : `/?to=/:account/${M}`, I = () => {
				const M = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return M ? M[1] : null
			}, D = (M, q) => o().stringify(s({}, o().parse(M), q)), U = (M = "") => M.toString().replace(/([\/]{1,})$/, ""), P = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/forgot-email", "/login-help", "/profile", "/zones"], y = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, O = /^\/(\w{32,})(\/[^.]*)?/, z = M => P.includes(M), G = M => !z(M), ve = M => !z(M) && O.test(M), ne = M => !z(M) && y.test(M), Y = M => y.exec(M), H = M => {
				if (ne(M)) return M.split("/").filter(q => q.length > 0)[1]
			}, k = M => O.exec(M), A = M => {
				if (ve(M)) {
					const q = k(M);
					if (q) return q[1]
				}
			}, oe = M => ve(M) && M.split("/")[2] === "register-domain", ee = M => oe(M) ? M.split("/") : null, ge = M => {
				if (ne(M)) {
					const [, , , q, ce, B, b, w] = M.split("/");
					return q === "traffic" && ce === "load-balancing" && B === "pools" && b === "edit" && w
				}
			}, Q = M => {
				const q = ee(M);
				if (q) return q[3]
			}, W = (M, q) => {
				var ce, B;
				return ((ce = M.pattern.match(/\:/g)) !== null && ce !== void 0 ? ce : []).length - ((B = q.pattern.match(/\:/g)) !== null && B !== void 0 ? B : []).length
			}, K = [...Object.values(d._j), ...Object.values(g._j), ...Object.values(a._j)].sort(W);

			function x(M) {
				if (!G(M)) return M;
				for (const w of K)
					if (w.expression.test(M)) return w.pattern;
				const q = ee(M);
				if (q) {
					const [, , w, , ...v] = q;
					return `/:accountId/${w}/:domainName/${v.join("/")}`
				}
				if (ge(M)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const B = Y(M);
				if (B) {
					const [, , , , w] = B;
					return `/:accountId/:zoneName${w||""}`
				}
				const b = k(M);
				if (b) {
					const [, , w] = b;
					return `/:accountId${w||""}`
				}
				return M
			}

			function Z(M) {
				if (!!M) try {
					const ce = M.split(".").pop();
					if (ce && ce.length > 0) return ce
				} catch {}
			}

			function se(M, q = document.location.href) {
				try {
					const ce = new URL(M),
						B = new URL(q);
					if (ce.origin === B.origin) return `${ce.pathname}${ce.search}${ce.hash}`
				} catch {}
			}
		},
		"../react/utils/zaraz.ts": function($, _, n) {
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
		"../utils/initSparrow.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Wi: function() {
					return Ue
				},
				IM: function() {
					return Ge
				},
				yV: function() {
					return we
				},
				Ug: function() {
					return xe
				},
				v_: function() {
					return Ie
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				c = n("../react/utils/bootstrap.ts"),
				d = n("../react/app/providers/storeContainer.js"),
				g = n("../react/common/selectors/languagePreferenceSelector.ts"),
				a = n("../flags.js"),
				s = n("../../../../node_modules/cookie/index.js"),
				l = n("../react/utils/url.ts"),
				h = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../../../../node_modules/lodash-es/memoize.js"),
				p = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function m(le) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var ye = arguments[ue] != null ? Object(arguments[ue]) : {},
						me = Object.keys(ye);
					typeof Object.getOwnPropertySymbols == "function" && me.push.apply(me, Object.getOwnPropertySymbols(ye).filter(function(he) {
						return Object.getOwnPropertyDescriptor(ye, he).enumerable
					})), me.forEach(function(he) {
						i(le, he, ye[he])
					})
				}
				return le
			}

			function i(le, ue, ye) {
				return ue = C(ue), ue in le ? Object.defineProperty(le, ue, {
					value: ye,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : le[ue] = ye, le
			}

			function C(le) {
				var ue = u(le, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function u(le, ue) {
				if (typeof le != "object" || le === null) return le;
				var ye = le[Symbol.toPrimitive];
				if (ye !== void 0) {
					var me = ye.call(le, ue || "default");
					if (typeof me != "object") return me;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ue === "string" ? String : Number)(le)
			}
			const f = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				I = (0, r.Z)(le => {
					try {
						return f.assertDecode((0, s.parse)(le))
					} catch (ue) {
						return console.error(ue), {}
					}
				}),
				D = le => (ue, ye, me) => {
					try {
						const De = window.location.pathname,
							Le = (0, d.bh)().getState(),
							Ze = I(document.cookie),
							N = m({
								page: (0, l.Fl)(me.page || window.location.pathname)
							}, Ze);
						if (ue === "identify") {
							var he, ke;
							const X = {
								gates: (0, p.T2)(Le) || {},
								country: (he = n.g) === null || he === void 0 || (ke = he.bootstrap) === null || ke === void 0 ? void 0 : ke.ip_country
							};
							return le(ue, ye, m({}, N, X, me))
						} else {
							const X = {
								accountId: (0, l.uW)(De),
								zoneName: (0, l.hW)(De),
								domainName: (0, l.Uh)(De)
							};
							if ((0, l.el)(De)) {
								const fe = (0, h.nA)(Le);
								X.zoneId = fe == null ? void 0 : fe.id
							}
							return le(ue, ye, m({}, N, X, me))
						}
					} catch (De) {
						return console.error(De), le(ue, ye, me)
					}
				},
				U = le => async (ue, ye, me) => {
					try {
						return await le(ue, ye, me)
					} catch (he) {
						if (console.error(he), !Ie()) throw he;
						return {
							status: "rejected",
							reason: he
						}
					}
				};
			var P = n("../react/common/middleware/sparrow/errors.ts"),
				y = n("../react/pages/firewall/bots/tracking.ts"),
				O = n("../react/pages/caching/tracking.tsx"),
				z = n("../react/pages/magic/packet-captures/constants.ts"),
				G = n("../react/pages/firewall/page-shield/tracking.ts"),
				ve = n("../react/pages/firewall/rulesets/tracking.tsx"),
				ne = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Y = n("../react/pages/spectrum/tracking.tsx"),
				H = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				k = n("../react/pages/security-center/tracking.ts"),
				A = n("../react/pages/firewall/api-shield/tracking.ts"),
				oe = n("../react/pages/home/configurations/lists/tracking.ts"),
				ee = n("../react/pages/traffic/load-balancing/tracking.ts"),
				ge = n("../react/pages/home/alerts/tracking.ts"),
				Q = n("../react/pages/dns/dns-records/tracking.ts"),
				W = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				K = n("../react/pages/traffic/argo/tracking.ts"),
				x = n("../react/pages/magic/network-monitoring/constants.ts"),
				Z = n("../react/pages/firewall/security-analytics/logs/constants.ts");
			const M = ((le, ue, ...ye) => t.eg.union([t.eg.literal(le), t.eg.literal(ue), ...ye.map(me => t.eg.literal(me))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "add payment method", "Add site click", "add workers route", "Added API Shield schema", "Addon Purchase Success", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "Change default action API Shield SV", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "copy script id page shield", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click API shield upsell link", "click API shield enable product button", "click API shield feedback link", "click API snippet drawer", "click back to all policies link", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click cancel downgrade", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click complete purchase button", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create load balancer", "Click Create Rule", "click create policy form link", "click deflect community TSF (3.0)", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on edit snippet", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click resolve security issue button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click standard pricing agree", "click standard pricing enabled later", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click ticket submission form search result", "click ticket submission form suggestion", "Click to create API Shield portal", "click to create rate limiting rule for endpoint", "click Top N investigate", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "Click", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close delete image modal", "close delete variant modal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script id page shield", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create default environments", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create worker from playground", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete variant", "Deploy API Shield portal", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "Enable or disable API Shield SV", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "exit onboarding guide", "expand account select dropdown", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "Explore demo button click", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Free Long Wait", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "manage security insight", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "navigate to source detail", "navigate to variant detail", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open edit notification page", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase attempt", "purchase completed", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "Request trial button click", "resend verification email", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "run security scan", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select file", "Select hostname success", "select language", "select notification type", "select onboarding bundle", "select page rules quantity", "select payment method", "select payment option", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "Selected schema API Shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "Showed API Shield Flyfishing page", "signed exchanges toggle", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "toggle standard pricing migrate all", "Toggled injection", "trace user jorney", "transfer DNS records", "Transfer out survey submitted", "Transfer Step", "Transter purchased", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "Use multiselect API Shield SV", "Use overflow API Shield SV", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify address", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click discover card call to action", "click discover card view products", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "click cloudflare logo", "dismiss change notification", "set marketing preference ent ss purchase", "view change notification", "expand side drawer", "collapse side drawer", "documentation side drawer", "clicked sidebar Discord link", "clicked sidebar Community Forum link", "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", "domain on cart has trademark claims", "click expand trademark claims button", "click disagree trademark claims button", "click agree trademark claims button", "click to begin domain delete", "domain deletion completed sucessfully", "domain deletion failed because user does not have permissions", "domain deletion failed because user submitted invalid confirmation code", "domain deletion failed for unknown reason", "click to delete domain", "click cancel and closes confirm modal", "click to re-send confirmation code", "click cancel and closes verification modal", "click to continue with domain deletion", "click cancel and closes warning modal", y.N3.INITIAL_FETCH_SCORES, y.N3.FETCH_CONFIGURATION, y.N3.INITIAL_FETCH_TIME_SERIES, y.N3.INITIAL_FETCH_ATTRIBUTES, y.N3.UPDATE_SETTINGS, y.N3.DELETE_RULE, y.N3.UPDATE_RULE, y.N3.FETCH_RULES, y.N3.CONFIGURE_BOT_MANAGEMENT, y.N3.WAF_RULES_REDIRECT, H.F.TOGGLE_TCP_PROTECTION, H.F.CREATE_SYN_PROTECTION_RULE, H.F.UPDATE_SYN_PROTECTION_RULE, H.F.CREATE_TCP_FLOW_PROTECTION_RULE, H.F.UPDATE_TCP_FLOW_PROTECTION_RULE, H.F.CREATE_SYN_PROTECTION_FILTER, H.F.UPDATE_SYN_PROTECTION_FILTER, H.F.CREATE_TCP_FLOW_PROTECTION_FILTER, H.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, G.F.MANAGE_PAGE_SHIELD_POLICY, G.F.CONFIGURE_PAGE_SHIELD, G.F.VIEW_DETECTED_CONNECTIONS, G.F.VIEW_DETECTED_SCRIPTS, G.F.VIEW_PAGE_SHIELD_POLICIES, G.F.VIEW_PAGE_SHIELD_SETTINGS, oe.y.CREATE_LIST, oe.y.DELETE_LIST, oe.y.ADD_LIST_ITEM, oe.y.DELETE_LIST_ITEM, Y.N.CNAME, Y.N.IP_ADDRESS, Y.N.LB, Y.N.UPDATE_CNAME, Y.N.UPDATE_IP_ADDRESS, Y.N.UPDATE_LB, Y.N.DISABLE, O.N.TIERED_CACHE, O.N.CACHE_PURGE, O.N.CACHE_ANALYTICS, ...(0, ve.x4)(), ne.N.CREATE, ne.N.EVENTS, ne.N.ANALYTICS, ne.N.UPDATE, ne.N.GENERATE_PREVIEW, k.R.INITIATE_URL_SCAN, k.R.LOAD_SCAN_INFO, A.Fj[A.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, A.Fj[A.kq.ENDPOINT_MANAGEMENT].detailedMetrics, A.Fj[A.kq.ENDPOINT_MANAGEMENT].createEndpoint, A.Fj[A.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, A.Fj[A.kq.API_DISCOVERY].viewDiscoveredEndpoints, A.Fj[A.kq.API_DISCOVERY].saveDiscoveredEndpoint, A.Fj[A.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, A.Fj[A.kq.SCHEMA_VALIDATION].viewSchemasList, A.Fj[A.kq.SCHEMA_VALIDATION].uploadSchema, A.Fj[A.kq.SCHEMA_VALIDATION].viewSchemaAdoption, A.Fj[A.kq.SCHEMA_VALIDATION].downloadSchema, A.Fj[A.kq.SCHEMA_VALIDATION].deleteSchema, A.Fj[A.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, A.Fj[A.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, A.Fj[A.kq.SEQUENCE_ANALYTICS].viewSequencesPage, A.Fj[A.kq.JWT_VALIDATION].viewJWTRules, A.Fj[A.kq.JWT_VALIDATION].addJWTRule, A.Fj[A.kq.JWT_VALIDATION].editJWTRule, A.Fj[A.kq.JWT_VALIDATION].deleteJWTRule, A.Fj[A.kq.JWT_VALIDATION].reprioritizeJWTRule, A.Fj[A.kq.JWT_VALIDATION].viewJWTConfigs, A.Fj[A.kq.JWT_VALIDATION].addJWTConfig, A.Fj[A.kq.JWT_VALIDATION].editJWTConfig, A.Fj[A.kq.JWT_VALIDATION].deleteJWTConfig, A.Fj[A.kq.SETTINGS].redirectToFirewallRulesTemplate, A.Fj[A.kq.SETTINGS].redirectToPages, A.Fj[A.kq.SETTINGS].listSessionIdentifiers, A.Fj[A.kq.SETTINGS].listRequestsContainingSessionIdentifiers, A.Fj[A.kq.SETTINGS].addOrRemoveSessionIdentifiers, ee.Z.CREATE_AND_DEPLOY, ee.Z.ANALYTICS, ge.y.SECONDARY_DNS_NOTIFICATION_CREATE, ge.y.SECONDARY_DNS_NOTIFICATION_UPDATE, ge.y.SECONDARY_DNS_NOTIFICATION_DELETE, Q.U.ZONE_TRANSFER_SUCCESS, Q.U.DNS_RECORD_CREATE, Q.U.DNS_RECORD_UPDATE, Q.U.DNS_RECORD_DELETE, W.Y.PEER_DNS_CREATE, W.Y.PEER_DNS_UPDATE, W.Y.PEER_DNS_DELETE, W.Y.ZONE_TRANSFER_ENABLE, W.Y.ZONE_TRANSFER_DISABLE, K.V.ARGO_ENABLEMENT, K.V.ARGO_GEO_ANALYTICS_FETCH, K.V.ARGO_GLOBAL_ANALYTICS_FETCH, z.X.VIEW_BUCKETS_LIST, z.X.CREATE_BUCKET, z.X.VALIDATE_BUCKET, z.X.DELETE_BUCKET, z.X.VIEW_CAPTURES_LIST, z.X.CREATE_SIMPLE_CAPTURE, z.X.CREATE_FULL_CAPTURE, z.X.VIEW_FULL_CAPTURE, z.X.DOWNLOAD_SIMPLE_CAPTURE, x.bK.VIEW_RULES, x.bK.CREATE_RULE, x.bK.UPDATE_RULE, x.bK.DELETE_RULE, x.bK.VIEW_CONFIGURATION, x.bK.CREATE_CONFIGURATION, x.bK.UPDATE_CONFIGURATION, x.bK.DELETE_CONFIGURATION, Z.o4.CLICK_ADAPTIVE_SAMPLING, Z.o4.CLICK_TO_LOG_EXPLORER_BANNER, Z.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, Z.o4.CLICK_SWITCH_TO_RAW_LOGS, Z.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback"),
				q = t.eg.exactStrict(t.eg.object({
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
					exact: t.eg.any.optional,
					expand: t.eg.any.optional,
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
					key: t.eg.any.optional,
					label: t.eg.any.optional,
					lastTimestamp: t.eg.any.optional,
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
					new_selection: t.eg.any.optional,
					newTotalCount: t.eg.any.optional,
					novalidate: t.eg.any.optional,
					numAccounts: t.eg.any.optional,
					numDomainsInCart: t.eg.any.optional,
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
					payment_method: t.eg.string.optional,
					payment_option: t.eg.string.optional,
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
					previous_selection: t.eg.any.optional,
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
					selection: t.eg.any.optional,
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
					marketingOptInChecked: t.eg.boolean.optional,
					prompt: t.eg.any.optional,
					positive: t.eg.any.optional,
					endpoint: t.eg.any.optional,
					isArgoEnabled: t.eg.any.optional
				})),
				ce = (le, ue) => {
					const [ye, me] = B(ue);
					let he, ke;
					return (0, t.nM)(M.decode(le)) && (he = new P.Uh(le)), me && me.length > 0 && (ke = new P.oV(le, me)), [ye, he, ke]
				},
				B = le => {
					const ue = q.decode(le);
					if ((0, t.nM)(ue)) {
						const ye = ue.left.map(({
							context: me
						}) => me.map(({
							key: he
						}) => he)).reduce((me, he) => me.concat(he), []).filter(me => me in le);
						return [b(ye, le), ye]
					}
					return [le, []]
				},
				b = (le, ue) => Object.entries(ue).reduce((ye, [me, he]) => (le.includes(me) || (ye[me] = he), ye), {}),
				w = le => (ue, ye, me) => {
					const [he, ke, De] = ce(ye, me);
					if (ke) throw ke;
					return De && console.error(De), le(ue, ye, he)
				};
			var v = n("../react/utils/zaraz.ts");
			const j = {
					identify: !0
				},
				ie = le => (ue, ye, me) => (j[ye] || v.tg === null || v.tg === void 0 || v.tg.track(ye, me), le(ue, ye, me));
			var Te = n("../react/utils/cookiePreferences.ts");

			function be(le) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var ye = arguments[ue] != null ? Object(arguments[ue]) : {},
						me = Object.keys(ye);
					typeof Object.getOwnPropertySymbols == "function" && me.push.apply(me, Object.getOwnPropertySymbols(ye).filter(function(he) {
						return Object.getOwnPropertyDescriptor(ye, he).enumerable
					})), me.forEach(function(he) {
						Ae(le, he, ye[he])
					})
				}
				return le
			}

			function Ae(le, ue, ye) {
				return ue = je(ue), ue in le ? Object.defineProperty(le, ue, {
					value: ye,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : le[ue] = ye, le
			}

			function je(le) {
				var ue = Be(le, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function Be(le, ue) {
				if (typeof le != "object" || le === null) return le;
				var ye = le[Symbol.toPrimitive];
				if (ye !== void 0) {
					var me = ye.call(le, ue || "default");
					if (typeof me != "object") return me;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ue === "string" ? String : Number)(le)
			}
			const xe = le => {
					o().init(be({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Ie() && !(0, c.gm)() && Ue(),
						middlewares: [U, w, D, ie]
					}, le))
				},
				we = () => {
					o().identify(be({}, (0, e.getAttribution)(), {
						locale: (0, g.r)((0, d.bh)().getState()),
						isCloudflare: !!(0, a.Jd)()
					}))
				},
				Ie = () => !0,
				Ge = () => {
					(0, Te.kT)("sparrow_id")
				},
				Ue = () => (0, Te.Xm)()
		},
		"../utils/initStyles.ts": function($, _, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../react/app/providers/storeContainer.js");
			const c = "cfBaseStyles",
				d = document.head || document.getElementsByTagName("head")[0],
				g = s => {
					const l = [];
					for (let h in s.colors) {
						const t = s.colors[h];
						if (Array.isArray(t) && h !== "categorical")
							for (let r = 0; r < t.length; ++r) l.push(`--cf-${h}-${r}:${t[r]};`)
					}
					return l.join(`
`)
				},
				a = () => {
					const s = (0, e.Yc)(),
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
      ${g(e.Rl)}
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
					let h = document.getElementById(c);
					h ? h.innerText = "" : (h = document.createElement("style"), h.id = c, d.appendChild(h)), h.appendChild(document.createTextNode(l)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(a), _.Z = a
		},
		"../utils/sentry/lastSentEventId.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let c = "";
				return {
					setEventId: a => (!a || typeof a != "string" || (c = a), c),
					getEventId: () => c
				}
			})()
		},
		"../utils/zaraz.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Ro: function() {
					return r
				},
				bM: function() {
					return l
				},
				tg: function() {
					return s
				},
				yn: function() {
					return t
				}
			});

			function e(p) {
				for (var m = 1; m < arguments.length; m++) {
					var i = arguments[m] != null ? Object(arguments[m]) : {},
						C = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(i).filter(function(u) {
						return Object.getOwnPropertyDescriptor(i, u).enumerable
					})), C.forEach(function(u) {
						o(p, u, i[u])
					})
				}
				return p
			}

			function o(p, m, i) {
				return m = c(m), m in p ? Object.defineProperty(p, m, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[m] = i, p
			}

			function c(p) {
				var m = d(p, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function d(p, m) {
				if (typeof p != "object" || p === null) return p;
				var i = p[Symbol.toPrimitive];
				if (i !== void 0) {
					var C = i.call(p, m || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(p)
			}
			const g = {
					track: (p, m) => null,
					set: (p, m) => console.log(`zaraz.set(${p}, ${m})`)
				},
				a = {
					track: (p, m) => {
						var i;
						(i = window.zaraz) === null || i === void 0 || i.track(p, e({}, m, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (p, m) => {
						var i;
						return (i = window.zaraz) === null || i === void 0 ? void 0 : i.set(p, m)
					}
				};
			let s;
			const l = () => {
					window.zaraz, s = a
				},
				h = ["email", "first_name", "last_name"],
				t = p => {
					h.forEach(m => {
						var i;
						(i = s) === null || i === void 0 || i.set(m, p[m])
					})
				},
				r = () => {
					t({})
				}
		},
		"../../../common/intl/intl-core/src/Translator.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				Z: function() {
					return U
				}
			});
			var e = n("../../../../node_modules/node-polyglot/index.js"),
				o = n.n(e),
				c = n("../../../common/intl/intl-types/src/index.ts"),
				d = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				g = n("../../../../node_modules/lodash/mapValues.js"),
				a = n.n(g);

			function s(P) {
				for (var y = 1; y < arguments.length; y++) {
					var O = arguments[y] != null ? Object(arguments[y]) : {},
						z = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(O).filter(function(G) {
						return Object.getOwnPropertyDescriptor(O, G).enumerable
					})), z.forEach(function(G) {
						l(P, G, O[G])
					})
				}
				return P
			}

			function l(P, y, O) {
				return y = h(y), y in P ? Object.defineProperty(P, y, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[y] = O, P
			}

			function h(P) {
				var y = t(P, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function t(P, y) {
				if (typeof P != "object" || P === null) return P;
				var O = P[Symbol.toPrimitive];
				if (O !== void 0) {
					var z = O.call(P, y || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(P)
			}
			const r = {
					prepend: "[!!",
					append: "!!]",
					delimiter: "%",
					startDelimiter: "",
					endDelimiter: "",
					extend: 0,
					override: void 0
				},
				p = {
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
			var i = {
					version: "1.1.0",
					option: s({}, r),
					reset() {
						this.option = s({}, r)
					},
					table: p,
					pad(P, y) {
						for (var O = Math.floor(P.length * y / 2), z = O, G = P; O-- > 0;) G = " " + G;
						for (; z-- > 0;) G = G + " ";
						return G
					},
					str(P) {
						for (var y = this.option, O = y.startDelimiter || y.delimiter, z = y.endDelimiter || y.delimiter, G = new RegExp(O + "\\s*[\\w\\.\\s*]+\\s*" + z, "g"), ve, ne = [], Y = 0, H = 0, k = "", A, oe; ve = G.exec(P);) ne.push(ve);
						for (var ee = ne[H++] || {
								index: -1
							}; Y < P.length;) {
							if (ee.index === Y) {
								k += ee[0], Y += ee[0].length, ee = ne[H++] || {
									index: -1
								};
								continue
							}
							if (A = y.override !== void 0 ? y.override : P[Y], oe = p[A], oe) {
								var ge = P.length % oe.length;
								A = oe[ge]
							}
							k += A, Y++
						}
						return y.prepend + this.pad(k, y.extend) + y.append
					}
				},
				C = n("../../../common/intl/intl-core/src/errors.ts");

			function u(P, y, O) {
				return y = f(y), y in P ? Object.defineProperty(P, y, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[y] = O, P
			}

			function f(P) {
				var y = I(P, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function I(P, y) {
				if (typeof P != "object" || P === null) return P;
				var O = P[Symbol.toPrimitive];
				if (O !== void 0) {
					var z = O.call(P, y || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(P)
			}
			i.option.delimiter = "%", i.option.startDelimiter = "{", i.option.endDelimiter = "}";
			class D {
				constructor(y) {
					u(this, "map", void 0), u(this, "currentLocale", c.Q.en_US), u(this, "options", void 0), u(this, "psudoLocalizePhrases", O => Object.entries(O).reduce((z, [G, ve]) => Object.assign(z, {
						[G]: i.str(ve)
					}), {})), u(this, "getInstance", O => O ? this.map[O] : this.map[this.currentLocale]), u(this, "getInstanceMatchingPhrase", O => {
						const z = this.getInstance();
						return z.has(O) ? z : this.getInstance(c.Q.en_US)
					}), u(this, "extend", (O, z) => {
						const G = this.getInstance(z);
						this.options.pseudoLoc && (O = this.psudoLocalizePhrases(O)), G.extend(O)
					}), u(this, "t", (O, z) => {
						const G = this.getInstanceMatchingPhrase(O);
						return z ? G.t(O, z) : G.t(O)
					}), u(this, "tm", (O, z) => (0, d.Z)(this.t(O, z))), u(this, "clear", () => {
						this.getInstance().clear()
					}), u(this, "replace", O => {
						this.options.pseudoLoc && (O = this.psudoLocalizePhrases(O)), this.getInstance().replace(O)
					}), u(this, "locale", O => (O && (this.currentLocale = O, this.map[O] || this.createInstance(O)), this.currentLocale)), u(this, "has", O => this.getInstanceMatchingPhrase(O).has(O)), u(this, "translateSeconds", O => {
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
					}), u(this, "translateObject", O => a()(O, this.t)), this.map = {}, this.options = y || {}, this.options.allowMissing = !0, this.options.onMissingKey = (O, z, G) => (console.error(new C.OZ(O)), z._ ? z._ : O), this.locale(y && y.locale || c.Q.en_US), y && y.phrases && (y.phrases = void 0), y && y.locale && (y.locale = void 0)
				}
				createInstance(y) {
					this.options.pseudoLoc && this.options.phrases && (this.options.phrases = this.psudoLocalizePhrases(this.options.phrases)), this.map[y] = new(o())(Object.assign(this.options, {
						locale: y
					}))
				}
			}
			var U = D
		},
		"../../../common/intl/intl-core/src/errors.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				OZ: function() {
					return g
				},
				YB: function() {
					return d
				}
			});

			function e(s, l, h) {
				return l = o(l), l in s ? Object.defineProperty(s, l, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[l] = h, s
			}

			function o(s) {
				var l = c(s, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function c(s, l) {
				if (typeof s != "object" || s === null) return s;
				var h = s[Symbol.toPrimitive];
				if (h !== void 0) {
					var t = h.call(s, l || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(s)
			}
			class d extends Error {
				constructor(l, h) {
					super(h);
					e(this, "translationKey", void 0), this.translationKey = l, this.name = "TranslatorError"
				}
			}
			class g extends d {
				constructor(l) {
					super(l, `Translation key not found: ${l}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var a = null
		},
		"../../../common/intl/intl-core/src/prepare.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				x: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/lodash/set.js"),
				o = n.n(e),
				c = n("../../../common/intl/intl-types/src/index.ts");

			function d(a, s) {
				const l = g(a, s),
					h = Object.keys(l).reduce((t, r) => o()(t, r.substring(`${a}.`.length), r), {});
				return {
					translations: l,
					keys: h,
					namespace: a
				}
			}

			function g(a, s) {
				const l = {},
					h = [a];

				function t(r) {
					Object.keys(r).forEach(p => {
						h.push(p), typeof r[p] == "string" || r[p] instanceof c.w ? l[h.join(".")] = r[p].toString() : typeof r[p] == "object" && r[p] !== null && t(r[p]), h.pop()
					})
				}
				return t(s), l
			}
		},
		"../../../common/intl/intl-react/src/index.ts": function($, _, n) {
			"use strict";
			n.d(_, {
				oc: function() {
					return g
				},
				lm: function() {
					return y
				},
				bd: function() {
					return p
				},
				RD: function() {
					return ce
				},
				cC: function() {
					return K
				},
				QT: function() {
					return M
				},
				lP: function() {
					return se
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../common/intl/intl-core/src/Translator.ts");
			const d = e.createContext(new c.Z),
				g = d.Consumer,
				a = d.Provider;

			function s() {
				return s = Object.assign ? Object.assign.bind() : function(B) {
					for (var b = 1; b < arguments.length; b++) {
						var w = arguments[b];
						for (var v in w) Object.prototype.hasOwnProperty.call(w, v) && (B[v] = w[v])
					}
					return B
				}, s.apply(this, arguments)
			}

			function l(B, b) {
				if (B == null) return {};
				var w = h(B, b),
					v, j;
				if (Object.getOwnPropertySymbols) {
					var ie = Object.getOwnPropertySymbols(B);
					for (j = 0; j < ie.length; j++) v = ie[j], !(b.indexOf(v) >= 0) && (!Object.prototype.propertyIsEnumerable.call(B, v) || (w[v] = B[v]))
				}
				return w
			}

			function h(B, b) {
				if (B == null) return {};
				var w = {},
					v = Object.keys(B),
					j, ie;
				for (ie = 0; ie < v.length; ie++) j = v[ie], !(b.indexOf(j) >= 0) && (w[j] = B[j]);
				return w
			}
			class t extends e.Component {
				constructor(b) {
					super(b);
					const {
						locale: w,
						phrases: v,
						translator: j
					} = b;
					w && j.locale(w), v && j.extend(v)
				}
				componentDidUpdate(b) {
					b.phrases !== this.props.phrases && this.props.phrases && this.props.translator.locale(this.props.locale)
				}
				render() {
					const {
						children: b
					} = this.props;
					return b
				}
			}
			var p = B => {
				let {
					translator: b
				} = B, w = l(B, ["translator"]);
				const v = () => e.createElement(g, null, j => e.createElement(t, s({
					translator: j
				}, w)));
				return b ? (b.locale(w.locale), e.createElement(a, {
					value: b
				}, v())) : v()
			};

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(B) {
					for (var b = 1; b < arguments.length; b++) {
						var w = arguments[b];
						for (var v in w) Object.prototype.hasOwnProperty.call(w, v) && (B[v] = w[v])
					}
					return B
				}, m.apply(this, arguments)
			}

			function i(B, b) {
				if (B == null) return {};
				var w = C(B, b),
					v, j;
				if (Object.getOwnPropertySymbols) {
					var ie = Object.getOwnPropertySymbols(B);
					for (j = 0; j < ie.length; j++) v = ie[j], !(b.indexOf(v) >= 0) && (!Object.prototype.propertyIsEnumerable.call(B, v) || (w[v] = B[v]))
				}
				return w
			}

			function C(B, b) {
				if (B == null) return {};
				var w = {},
					v = Object.keys(B),
					j, ie;
				for (ie = 0; ie < v.length; ie++) j = v[ie], !(b.indexOf(j) >= 0) && (w[j] = B[j]);
				return w
			}

			function u(B) {
				for (var b = 1; b < arguments.length; b++) {
					var w = arguments[b] != null ? Object(arguments[b]) : {},
						v = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(w).filter(function(j) {
						return Object.getOwnPropertyDescriptor(w, j).enumerable
					})), v.forEach(function(j) {
						f(B, j, w[j])
					})
				}
				return B
			}

			function f(B, b, w) {
				return b = I(b), b in B ? Object.defineProperty(B, b, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[b] = w, B
			}

			function I(B) {
				var b = D(B, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function D(B, b) {
				if (typeof B != "object" || B === null) return B;
				var w = B[Symbol.toPrimitive];
				if (w !== void 0) {
					var v = w.call(B, b || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(B)
			}
			class U extends e.Component {
				constructor(...b) {
					super(...b);
					f(this, "state", {
						phrasesByLocale: {}
					}), f(this, "loadLocale", async w => {
						const {
							loadPhrases: v
						} = this.props, j = await v(w);
						this.setState(ie => ({
							phrasesByLocale: u({}, ie.phrasesByLocale, {
								[w]: j
							})
						}))
					})
				}
				componentDidMount() {
					this.loadLocale(this.props.locale)
				}
				componentDidUpdate(b) {
					const {
						phrasesByLocale: w
					} = this.state;
					this.props.locale !== b.locale && !w[this.props.locale] && this.loadLocale(this.props.locale)
				}
				render() {
					const {
						children: b,
						locale: w
					} = this.props, {
						phrasesByLocale: v
					} = this.state;
					return v[w] ? e.createElement(p, {
						locale: w,
						phrases: v[w]
					}, b) : null
				}
			}
			f(U, "defaultProps", {});
			var y = B => {
					let {
						locale: b
					} = B, w = i(B, ["locale"]);
					return e.createElement(g, null, v => e.createElement(U, m({
						locale: b || v.locale()
					}, w)))
				},
				O = n("../../../../node_modules/lodash/escape.js"),
				z = n.n(O),
				G = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js");

			function ve(B) {
				for (var b = 1; b < arguments.length; b++) {
					var w = arguments[b] != null ? Object(arguments[b]) : {},
						v = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(w).filter(function(j) {
						return Object.getOwnPropertyDescriptor(w, j).enumerable
					})), v.forEach(function(j) {
						ne(B, j, w[j])
					})
				}
				return B
			}

			function ne(B, b, w) {
				return b = Y(b), b in B ? Object.defineProperty(B, b, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[b] = w, B
			}

			function Y(B) {
				var b = H(B, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function H(B, b) {
				if (typeof B != "object" || B === null) return B;
				var w = B[Symbol.toPrimitive];
				if (w !== void 0) {
					var v = w.call(B, b || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(B)
			}

			function k() {
				return k = Object.assign ? Object.assign.bind() : function(B) {
					for (var b = 1; b < arguments.length; b++) {
						var w = arguments[b];
						for (var v in w) Object.prototype.hasOwnProperty.call(w, v) && (B[v] = w[v])
					}
					return B
				}, k.apply(this, arguments)
			}
			const A = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				oe = /(?:\r\n|\r|\n)/g;

			function ee(B, b, w) {
				return e.createElement("span", {
					key: B,
					"data-testid": w,
					dangerouslySetInnerHTML: {
						__html: b
					}
				})
			}

			function ge(B, b = [], w = [], v) {
				let j = 0;
				const ie = B.replace(oe, "").split(A);
				if (ie.length === 1) return [ee(j, B, v)];
				const Te = [],
					be = ie.shift();
				if (be) {
					const Ae = ee(j, be, v);
					Te.push(Ae), typeof Ae != "string" && j++
				}
				for (const [Ae, je, Be] of Q(ie)) {
					b[Ae] || window.console && console.warn(`Missing Component for translation key: ${B}, index: ${Ae}. Fragment will be used.`);
					const xe = b[Ae] || e.Fragment,
						we = w[Ae] || {},
						Ie = ee(0, je);
					if (Te.push(e.createElement(xe, k({
							key: j
						}, we), Ie)), j++, Be) {
						const Ge = ee(j, Be);
						Te.push(Ge), typeof Ge != "string" && j++
					}
				}
				return Te
			}

			function Q(B) {
				if (!B.length) return [];
				const [b, w, v, j] = B.slice(0, 4);
				return [
					[parseInt(b || v), w || "", j]
				].concat(Q(B.slice(4, B.length)))
			}

			function W({
				id: B = "",
				smartCount: b,
				_: w,
				values: v,
				applyMarkdown: j,
				Components: ie,
				componentProps: Te,
				testId: be
			}) {
				return e.createElement(g, null, Ae => {
					v && Object.keys(v).forEach(we => v[we] = z()(v[we])), Te && Te.forEach(we => {
						Object.keys(we).forEach(Ie => {
							typeof we[Ie] == "string" && (we[Ie] = z()(we[Ie]))
						})
					});
					const je = ve({
							smart_count: b,
							_: w
						}, v),
						Be = j ? (0, G.Z)(Ae.t(B.toString(), je), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : Ae.t(B.toString(), je),
						xe = ge(Be, ie, Te, be);
					return xe.length > 1 ? e.createElement(e.Fragment, null, xe) : xe[0]
				})
			}
			var K = W;

			function x() {
				return x = Object.assign ? Object.assign.bind() : function(B) {
					for (var b = 1; b < arguments.length; b++) {
						var w = arguments[b];
						for (var v in w) Object.prototype.hasOwnProperty.call(w, v) && (B[v] = w[v])
					}
					return B
				}, x.apply(this, arguments)
			}

			function Z(B) {
				return w => o().createElement(g, null, v => o().createElement(B, x({}, w, {
					translator: v
				})))
			}
			var se = Z;

			function M() {
				if (e.useContext === void 0) throw new Error("The useI18n hook is being used with a version of React that doesn't support hooks!");
				return (0, e.useContext)(d)
			}
			var q = n("../../../common/intl/intl-types/src/index.ts"),
				ce = o().createContext(q.Q.en_US)
		},
		"../../../common/util/types/src/utils/index.ts": function($, _, n) {
			"use strict";
			n.d(_, {
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
			const o = (c, d) => {
				if (d !== void 0) throw new Error("Unexpected object: " + c);
				return d
			}
		},
		"../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$": function($, _, n) {
			var e = {
				"./favicon-cookie.ico": "../react/app/assets/favicon-cookie.ico",
				"./favicon-dev.ico": "../react/app/assets/favicon-dev.ico",
				"./favicon-staging.ico": "../react/app/assets/favicon-staging.ico",
				"./favicon-zeit.ico": "../react/app/assets/favicon-zeit.ico"
			};

			function o(d) {
				var g = c(d);
				return n(g)
			}

			function c(d) {
				if (!n.o(e, d)) {
					var g = new Error("Cannot find module '" + d + "'");
					throw g.code = "MODULE_NOT_FOUND", g
				}
				return e[d]
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.resolve = c, $.exports = o, o.id = "../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$"
		},
		"../react/app/assets/favicon-cookie.ico": function($, _, n) {
			"use strict";
			$.exports = n.p + "3f95af1452696b3d93d3.ico"
		},
		"../react/app/assets/favicon-dev.ico": function($, _, n) {
			"use strict";
			$.exports = n.p + "1022a975e95038d58c62.ico"
		},
		"../react/app/assets/favicon-staging.ico": function($, _, n) {
			"use strict";
			$.exports = n.p + "67b31fd5804672d4ab2d.ico"
		},
		"../react/app/assets/favicon-zeit.ico": function($, _, n) {
			"use strict";
			$.exports = n.p + "d9aa8f47b1687e407e0f.ico"
		}
	}
]);