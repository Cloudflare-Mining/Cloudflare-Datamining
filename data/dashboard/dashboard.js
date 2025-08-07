! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4df99350-2047-5482-be95-dfbba083bb55")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				J8: function() {
					return a
				},
				Jd: function() {
					return m
				},
				QY: function() {
					return d
				},
				Qw: function() {
					return c
				},
				ki: function() {
					return u
				},
				wz: function() {
					return w
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/utils/url.ts"),
				s = t("../../../../node_modules/query-string/query-string.js"),
				p = t.n(s),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				v;
			const c = () => Object.keys(i.Z).reduce((_, l) => (l.indexOf("cf_beta.") === 0 && i.Z.get(l) === "true" && _.push(l.split(".").slice(1).join(".")), _), []),
				u = () => {
					var _, l, C;
					return ((_ = window) === null || _ === void 0 || (l = _.bootstrap) === null || l === void 0 || (C = l.data) === null || C === void 0 ? void 0 : C.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((v = window) === null || v === void 0 ? void 0 : v.location) && i.Z) {
				const _ = p().parse(window.location.search);
				_.beta_on && i.Z.set(`cf_beta.${_.beta_on}`, !0), _.beta_off && i.Z.set(`cf_beta.${_.beta_off}`, !1)
			}
			const E = {},
				n = _ => {
					var l, C, f;
					return Object.prototype.hasOwnProperty.call(E, _) ? E[_] : ((l = window) === null || l === void 0 || (C = l.bootstrap) === null || C === void 0 || (f = C.data) === null || f === void 0 ? void 0 : f.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(O => O === _) ? (E[_] = !0, !0) : (E[_] = !1, !1)
				},
				r = _ => i.Z ? i.Z.get(`cf_beta.${_}`) === !0 : !1,
				a = _ => r(_) || n(_),
				g = () => !0,
				m = () => {
					var _, l, C;
					return ((_ = window) === null || _ === void 0 || (l = _.bootstrap) === null || l === void 0 || (C = l.data) === null || C === void 0 ? void 0 : C.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				d = _ => {
					const l = (0, e.uF)(_),
						C = (l == null ? void 0 : l.roles) || [];
					return (0, o.qR)(location.pathname) && C.length === 1 && C.some(f => f === "Administrator Read Only")
				},
				h = () => {
					var _, l, C;
					return ((_ = window) === null || _ === void 0 || (l = _.location) === null || l === void 0 || (C = l.origin) === null || C === void 0 ? void 0 : C.includes("fed.cloudflare.com")) ? "fed" : "global"
				},
				w = () => h() === "fed"
		},
		"../functions/utils/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				b1: function() {
					return e
				}
			});
			const e = "CF_dash_version",
				o = "cf_fv_preview",
				s = "cf_pv",
				p = "current",
				i = "hash",
				v = "deploymentPreview",
				c = "fragmentPreview",
				u = r => r === p ? E() : n(),
				E = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				n = (r = 72) => {
					const a = 36e5;
					return new Date(Date.now() + r * a)
				}
		},
		"../functions/utils/preview-deploy-helpers.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				E9: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/zod/lib/index.mjs");

			function o(_) {
				for (var l = 1; l < arguments.length; l++) {
					var C = arguments[l] != null ? Object(arguments[l]) : {},
						f = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(C).filter(function(O) {
						return Object.getOwnPropertyDescriptor(C, O).enumerable
					})), f.forEach(function(O) {
						s(_, O, C[O])
					})
				}
				return _
			}

			function s(_, l, C) {
				return l = p(l), l in _ ? Object.defineProperty(_, l, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[l] = C, _
			}

			function p(_) {
				var l = i(_, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function i(_, l) {
				if (typeof _ != "object" || _ === null) return _;
				var C = _[Symbol.toPrimitive];
				if (C !== void 0) {
					var f = C.call(_, l || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(_)
			}
			const v = e.z.string().regex(/^(((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))|canary)$/g),
				c = e.z.string().regex(/^[a-zA-Z0-9]{8}$/),
				u = e.z.string(),
				E = e.z.union([e.z.string().regex(/^[a-zA-Z0-9]{8}$/), e.z.literal("current")]),
				n = e.z.record(u, E),
				r = e.z.enum(["live", "previews", "canary"]),
				a = (_, l) => {
					const C = _.data.cookies[l],
						f = {
							[PREVIEW_VERSIONING_COOKIE]: v,
							[DEPLOYMENT_VERSION_COOKIE]: c
						};
					try {
						return f[l].parse(C)
					} catch {
						return null
					}
				},
				g = _ => {
					try {
						return decodeURIComponent(_).split(",").reduce((l, C) => {
							const f = C.split(":"),
								O = u.parse(f[0]),
								k = E.parse(f[1]);
							return o({}, l, {
								[O]: k
							})
						}, {})
					} catch {
						return {}
					}
				},
				m = _ => {
					const l = _.data.cookies[FRAGMENT_VERSIONING_PREVIEW_COOKIE],
						C = g(l);
					try {
						return n.parse(C)
					} catch {
						return null
					}
				},
				d = _ => {
					const l = v.parse(_),
						[C, ...f] = l.split("-"),
						O = f.join("-");
					return {
						projectType: C,
						deploymentId: O
					}
				},
				h = (_, l) => {
					if (!l) return "";
					try {
						var C;
						const {
							projectType: f,
							deploymentId: O
						} = d(l), k = {
							live: _.env.PAGES_WORKERS_LIVE_HOST,
							previews: _.env.PAGES_WORKERS_PREVIEW_HOST
						}, {
							hostname: A,
							pathname: P,
							search: D
						} = new URL(_.request.url), b = A == null || (C = A.split(".")) === null || C === void 0 ? void 0 : C[0];
						if (O && O !== b && r.safeParse(f).success) {
							const I = k[f];
							return `https://${O}.${I}${P}${D}`
						}
					} catch (f) {
						console.log(f)
					}
					return ""
				},
				w = (_, l) => {
					if (!l) return "";
					try {
						var C;
						const f = _.env.PAGES_WORKERS_LIVE_HOST,
							{
								hostname: O,
								pathname: k,
								search: A
							} = new URL(_.request.url),
							P = O == null || (C = O.split(".")) === null || C === void 0 ? void 0 : C[0],
							{
								deploymentSHA: D
							} = parsePagesDevUrl(_.env.CF_PAGES_URL),
							b = _.request.headers.get("sec-fetch-dest") === "document";
						if (l && l !== P && l !== D && !b) return `https://${l}.${f}${k}${A}`
					} catch (f) {
						console.log(f)
					}
					return ""
				}
		},
		"../init.ts": function(B, y, t) {
			"use strict";
			t.r(y);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				s = t("../libs/init/initGlobal.ts"),
				p = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				i = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function v(j) {
				for (var J = 1; J < arguments.length; J++) {
					var oe = arguments[J] != null ? Object(arguments[J]) : {},
						pe = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(oe).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(oe, Ee).enumerable
					})), pe.forEach(function(Ee) {
						c(j, Ee, oe[Ee])
					})
				}
				return j
			}

			function c(j, J, oe) {
				return J = u(J), J in j ? Object.defineProperty(j, J, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[J] = oe, j
			}

			function u(j) {
				var J = E(j, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function E(j, J) {
				if (typeof j != "object" || j === null) return j;
				var oe = j[Symbol.toPrimitive];
				if (oe !== void 0) {
					var pe = oe.call(j, J || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)(j)
			}
			const n = j => {
				const J = j && j.headers || {},
					oe = new Headers(J);
				return oe.append("X-Cross-Site-Security", "dash"), v({}, j, {
					headers: oe
				})
			};
			(0, i.register)({
				request: (j, J) => {
					try {
						return new URL(j), j === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", J] : [j, J]
					} catch {
						var oe, pe;
						return typeof j == "object" && ((oe = j) === null || oe === void 0 || (pe = oe.url) === null || pe === void 0 ? void 0 : pe.startsWith("https://platform.dash.cloudflare.com/map-tiles/")) ? [j, J] : [j, n(J)]
					}
				}
			});
			var r = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				a = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				g = t("../react/app/providers/storeContainer.js");
			let m = "";
			const d = 61;

			function h(j) {
				const J = j.substr(1);
				if (J && m !== J) {
					const oe = document.getElementById(J);
					if (oe) {
						const pe = oe.getBoundingClientRect().top;
						if (pe > 0) {
							const Ee = pe - d;
							document.documentElement.scrollTop = Ee
						}
					}
				}
				m = J
			}

			function w(j) {
				j.listen(J => h(J.hash))
			}
			var _ = t("../../../../node_modules/cookie/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				C = t("../functions/utils/constants.ts");
			const f = j => {
					switch (j) {
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
				O = (j, J = !1) => {
					var oe;
					const pe = f(j),
						Ee = `
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
    <h1 id="error-title">${pe.title}</h1>
    <p id="error-description">${pe.description}</p>
  </div>
  `,
						Le = J ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${l.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(oe=window.build)===null||oe===void 0?void 0:oe.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return Ee + Le
				},
				k = j => {
					var J;
					const oe = document.getElementById(j);
					!oe || (J = oe.parentNode) === null || J === void 0 || J.removeChild(oe)
				};

			function A() {
				const j = document.getElementById("loading-state");
				j == null || j.classList.add("hide"), j == null || j.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(k)
				})
			}

			function P(j) {
				var J;
				const oe = document.getElementById("loading-state"),
					pe = !!((J = _.parse(document.cookie)) === null || J === void 0 ? void 0 : J[C.b1]);
				!oe || (oe.innerHTML = O(j == null ? void 0 : j.code, pe))
			}
			var D = t("../utils/initStyles.ts"),
				b = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				I = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				S = t("../react/common/selectors/languagePreferenceSelector.ts"),
				x = t("../flags.ts"),
				$ = t("../utils/getDashVersion.ts");
			const ne = (0, x.wz)() ? "https://1e812cb0fae1f46a92ecdb5db1623f92@sentry10.cfdata.org/1930" : "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				ee = !0,
				re = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				W = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var N = t("../utils/sentry/lastSentEventId.ts"),
				R = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				G = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const U = j => {
				const J = async oe => {
					var pe, Ee;
					const Le = {
						envelope: oe.body,
						url: j.url,
						isPreviewDeploy: (pe = window) === null || pe === void 0 || (Ee = pe.build) === null || Ee === void 0 ? void 0 : Ee.isPreviewDeploy,
						release: (0, $.t)()
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
						return console.log(De), (0, G.$2)(De)
					}
				};
				return R.q(j, J)
			};
			var z = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				H = t("../../../../node_modules/history/esm/history.js"),
				F = (0, H.lX)(),
				q = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				L = t("../react/utils/url.ts");
			const K = (0, q.Rf)();
			let Q;

			function ie(j) {
				return V(j, "react-router-v5")
			}

			function V(j, J) {
				return (oe, pe = !0, Ee = !0) => {
					pe && K && K.location && (Q = oe({
						name: (0, L.Fl)(K.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": J
						}
					})), Ee && j.listen && j.listen((Le, De) => {
						if (De && (De === "PUSH" || De === "POP")) {
							Q && Q.finish();
							const qe = {
								"routing.instrumentation": J
							};
							Q = oe({
								name: (0, L.Fl)(Le.pathname),
								op: "navigation",
								tags: qe
							})
						}
					})
				}
			}
			var ae = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				ge = t.n(ae),
				Ce = t("../../../common/intl/intl-core/src/errors.ts"),
				se = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				be = t("../react/common/middleware/sparrow/errors.ts");

			function Ae(j, J, oe) {
				return J = Re(J), J in j ? Object.defineProperty(j, J, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[J] = oe, j
			}

			function Re(j) {
				var J = We(j, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function We(j, J) {
				if (typeof j != "object" || j === null) return j;
				var oe = j[Symbol.toPrimitive];
				if (oe !== void 0) {
					var pe = oe.call(j, J || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)(j)
			}
			class Se {
				constructor() {
					Ae(this, "name", Se.id)
				}
				setupOnce() {
					t.g.console && (0, se.hl)(t.g.console, "error", J => (...oe) => {
						const pe = oe.find(Ee => Ee instanceof Error);
						if (ne && pe) {
							let Ee, Le = !0;
							if (pe instanceof be.ez) {
								const De = pe instanceof be.oV ? pe.invalidProperties : void 0;
								Ee = {
									tags: {
										"sparrow.eventName": pe.eventName
									},
									extra: {
										sparrow: {
											eventName: pe.eventName,
											invalidProperties: De
										}
									},
									fingerprint: [pe.name ? pe.name : "SparrowValidationError"]
								}, Le = !1
							} else if (pe instanceof ae.SparrowIdCookieError) Ee = {
								extra: {
									sparrowIdCookie: pe.cookie
								},
								fingerprint: [pe.name ? pe.name : "SparrowIdCookieError"]
							};
							else if (pe.name === "ChunkLoadError") {
								Ee = {
									fingerprint: [pe.name]
								};
								try {
									Ee.tags = {
										chunkId: pe.message.split(" ")[2],
										chunkUrl: pe.request
									}
								} catch {}
							} else pe instanceof Ce.YB && (Ee = {
								fingerprint: ["TranslatorError", pe.translationKey]
							});
							Le && r.Tb(pe, Ee)
						}
						typeof J == "function" && J.apply(t.g.console, oe)
					})
				}
			}
			Ae(Se, "id", "ConsoleErrorIntegration");
			var at = null,
				Ve = t("../react/common/utils/getEnvironment.ts");
			const et = () => {
					if (ne && ee) {
						var j, J, oe, pe, Ee, Le, De, qe, ct, xe;
						const gt = (0, Ve.Z)();
						let St = "production";
						((j = window) === null || j === void 0 || (J = j.build) === null || J === void 0 ? void 0 : J.isPreviewDeploy) && (St += "-preview"), gt === "canary" && (St = "canary"), I.S({
							dsn: ne,
							release: (0, $.t)(),
							environment: St,
							ignoreErrors: W,
							allowUrls: re,
							autoSessionTracking: !1,
							integrations: Et => [...Et.filter(nn => nn.name !== "GlobalHandlers" && nn.name !== "TryCatch"), new Se, new z.jK.BrowserTracing({
								routingInstrumentation: ie(F)
							})],
							tracesSampleRate: 0,
							transport: U,
							beforeSend: Et => (N.e.setEventId(Et.event_id), Et)
						});
						const $t = (0, g.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, x.Qw)(),
							USER_BETA_FLAGS: (0, x.ki)(),
							meta: {
								connection: {
									type: (oe = window) === null || oe === void 0 || (pe = oe.navigator) === null || pe === void 0 || (Ee = pe.connection) === null || Ee === void 0 ? void 0 : Ee.effectiveType,
									bandwidth: (Le = window) === null || Le === void 0 || (De = Le.navigator) === null || De === void 0 || (qe = De.connection) === null || qe === void 0 ? void 0 : qe.downlink
								},
								languagePreference: (0, S.r)($t),
								isPreviewDeploy: (ct = window) === null || ct === void 0 || (xe = ct.build) === null || xe === void 0 ? void 0 : xe.isPreviewDeploy
							},
							utilGates: (0, b.T2)($t)
						}), window.addEventListener("unhandledrejection", function(Et) {})
					}
				},
				Ke = j => {
					j ? r.av({
						id: j
					}) : r.av(null)
				};
			var Y = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				$e = () => {
					let j;
					try {
						j = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), j = window.location.search
					}
					if (!j.includes("remote[")) return;
					const J = new URLSearchParams(j),
						oe = {};
					for (let [pe, Ee] of J) pe.includes("remote") && (oe[pe.replace(/remote\[|\]/g, "")] = Ee);
					Y.Z.set("mfe-remotes", JSON.stringify(oe))
				},
				Be = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				nt = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const dt = "ANON_USER_ID";

			function mt() {
				var j, J, oe, pe;
				let Ee = (j = t.g) === null || j === void 0 || (J = j.bootstrap) === null || J === void 0 || (oe = J.data) === null || oe === void 0 || (pe = oe.user) === null || pe === void 0 ? void 0 : pe.id;
				if (!Ee) {
					let Le = Y.Z.get(dt);
					if (!Le) {
						let De = (0, nt.Z)();
						Y.Z.set(dt, De), Le = De
					}
					return Le
				}
				return Ee
			}
			async function Ie() {
				const j = (0, g.bh)();
				j.dispatch((0, Be.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await j.dispatch((0, b.UL)({
					userId: mt()
				}))
			}
			class rt extends Error {
				constructor(J, oe) {
					super(oe);
					this.name = `${J} ${oe}`
				}
			}
			const te = () => {
					document.cookie.split(";").forEach(J => {
						const [oe] = J.trim().split("=");
						document.cookie = `${oe}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				ce = async () => {
					let j = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!j.ok) throw j.headers.get("content-type") === "text/html" && (await j.text()).toLowerCase().includes("cookie too large") && (r.$e(function(Ee) {
						Ee.setTag("init", "cookieTooLarge"), r.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), te(), window.location.reload()), new rt("Bootstrap API Failure", j == null ? void 0 : j.status);
					return (await j.json()).result.data
				};
			var fe = t("webpack/sharing/consume/default/react/react"),
				Ue = t.n(fe),
				Ne = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				Ze = t("webpack/sharing/consume/default/react-dom/react-dom"),
				He = t("webpack/sharing/consume/default/react-redux/react-redux"),
				Ct = t("../../../../node_modules/swr/core/dist/index.mjs"),
				ht = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				wt = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Ft = t("../react/shims/focus-visible.js"),
				Qe = t("../react/app/components/DeepLink/index.ts"),
				lt = t("../../../../node_modules/prop-types/index.js"),
				it = t.n(lt),
				ut = t("../react/utils/translator.tsx"),
				ft = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				Me = t("../../../dash/intl/intl-translations/src/index.ts"),
				X = t("../../../../node_modules/query-string/query-string.js"),
				de = t.n(X),
				he = t("../react/common/actions/userActions.ts"),
				Te = t("../react/common/selectors/userSelectors.ts"),
				ke = t("../react/utils/i18n.ts"),
				Ye = t("../react/utils/bootstrap.ts"),
				Pe = t("../../../../node_modules/react/jsx-runtime.js");

			function vt(j) {
				for (var J = 1; J < arguments.length; J++) {
					var oe = arguments[J] != null ? Object(arguments[J]) : {},
						pe = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(oe).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(oe, Ee).enumerable
					})), pe.forEach(function(Ee) {
						Wt(j, Ee, oe[Ee])
					})
				}
				return j
			}

			function Wt(j, J, oe) {
				return J = Ot(J), J in j ? Object.defineProperty(j, J, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[J] = oe, j
			}

			function Ot(j) {
				var J = zt(j, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function zt(j, J) {
				if (typeof j != "object" || j === null) return j;
				var oe = j[Symbol.toPrimitive];
				if (oe !== void 0) {
					var pe = oe.call(j, J || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)(j)
			}
			let Je = de().parse(location.search);
			const kt = j => {
					const J = (0, Ye.$8)() ? [(0, Me.Fy)(Me.if.changes), (0, Me.Fy)(Me.if.common), (0, Me.Fy)(Me.if.navigation), (0, Me.Fy)(Me.if.overview), (0, Me.Fy)(Me.if.onboarding), (0, Me.Fy)(Me.if.invite), (0, Me.Fy)(Me.if.login), (0, Me.Fy)(Me.if.dns), (0, Me.Fy)(Me.n4.ssl_tls), (0, Me.Fy)(Me.if.message_inbox), (0, Me.Fy)(Me.if.welcome)] : [(0, Me.Fy)(Me.if.common), (0, Me.Fy)(Me.if.invite), (0, Me.Fy)(Me.if.login), (0, Me.Fy)(Me.if.onboarding)];
					Je.lang ? Mt(j) : Y.Z.get(ke.th) && Tt(j, (0, ke.Kd)());
					const oe = async pe => (await Promise.all(J.map(Le => Le(pe)))).reduce((Le, De) => vt({}, Le, De), {});
					return (0, Pe.jsx)(ft.LocaleContext.Provider, {
						value: j.languagePreference,
						children: (0, Pe.jsx)(ft.I18nProvider, {
							translator: ut.Vb,
							locale: j.languagePreference,
							children: (0, Pe.jsx)(ft.I18nLoader, {
								loadPhrases: oe,
								children: j.children
							})
						})
					})
				},
				Mt = async j => {
					let J = Je.lang.substring(0, Je.lang.length - 2) + Je.lang.substring(Je.lang.length - 2, Je.lang.length).toUpperCase();
					if (!(0, S.v)(J)) {
						console.warn(`${J} is not a supported locale.`), delete Je.lang, j.history.replace({
							search: de().stringify(Je)
						});
						return
					}(0, ke.i_)(J), delete Je.lang, Tt(j, J), j.isAuthenticated || j.history.replace({
						search: de().stringify(Je)
					})
				}, Tt = async (j, J) => {
					if (j.isAuthenticated) try {
						await j.setUserCommPreferences({
							"language-locale": J
						}, {
							hideErrorAlert: !0
						}), Y.Z.remove(ke.th), j.history.replace({
							search: de().stringify(Je)
						})
					} catch (oe) {
						Y.Z.set(ke.th, !0), console.error(oe)
					} else Y.Z.set(ke.th, !0)
				}, xt = j => {
					const J = (0, Te.PR)(j);
					return {
						isAuthenticated: !!(J && J.id),
						languagePreference: (0, ke.Kd)() || (0, S.r)(j)
					}
				}, Rt = {
					setUserCommPreferences: he.V_
				};
			var Nt = (0, Ne.withRouter)((0, He.connect)(xt, Rt)(kt));
			kt.propTypes = {
				history: it().object,
				languagePreference: it().string.isRequired,
				children: it().node.isRequired,
				isAuthenticated: it().bool,
				setUserCommPreferences: it().func.isRequired
			};
			var yt = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				jt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let It;
			const Kt = ({
				selectorPrefix: j = "c_"
			} = {}) => (It || (It = (0, jt.Z)({
				dev: !1,
				selectorPrefix: j
			})), It);
			var Ht = t("../react/common/out.css"),
				Bt = t("../react/common/components/ModalManager.tsx"),
				Gt = t("../react/app/components/ErrorBoundary.tsx"),
				Vt = t("../react/common/actions/notificationsActions.ts");
			const At = (t.g.bootstrap || {}).data || {};
			class T extends Ue().Component {
				componentDidMount() {
					At.messages && this.dispatchNotificationActions(At.messages)
				}
				dispatchNotificationActions(J) {
					J.forEach(oe => {
						const {
							type: pe,
							message: Ee,
							persist: Le
						} = oe;
						["success", "info", "warn", "error"].includes(pe) && this.props.notifyAdd(pe, (0, ut.ZP)(Ee), {
							persist: !!Le
						})
					})
				}
				render() {
					return null
				}
			}
			var me = (0, Ne.withRouter)((0, He.connect)(null, {
				notifyAdd: Vt.add
			})(T));
			T.propTypes = {
				notifyAdd: it().func.isRequired
			};
			var Oe = t("../react/app/redux/index.ts");

			function ze() {
				var j;
				const J = (0, Oe.p4)(Te.PR),
					oe = (J == null || (j = J.email) === null || j === void 0 ? void 0 : j.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					pe = (0, Be.Yc)();
				(0, fe.useEffect)(() => {
					pe({
						userType: oe
					})
				}, [oe, pe])
			}
			var ot = t("../react/common/selectors/entitlementsSelectors.ts"),
				pt = t("../react/common/selectors/accountSelectors.ts");
			const Pt = ["accountId", "is_ent"];

			function _t() {
				const j = (0, Be.f7)(),
					J = (0, Ne.useHistory)(),
					oe = (0, L.uW)(J.location.pathname),
					pe = (0, Be.Yc)(),
					Ee = (0, Be.O$)(),
					Le = (0, Oe.p4)(ot.u1),
					De = !Le.isRequesting && !!Le.data,
					qe = (0, Oe.p4)(ot.p1),
					ct = (0, Oe.p4)(pt.Xu),
					xe = (0, Oe.p4)(pt.uF),
					gt = !ct.isRequesting && !!ct.data;
				(0, fe.useEffect)(() => {
					if (oe && gt && xe && De && oe === xe.account.id) {
						var St, $t, Et, Jt;
						pe({
							accountId: xe.account.id,
							is_ent: qe || (xe == null || (St = xe.account.meta) === null || St === void 0 ? void 0 : St.has_enterprise_zones),
							is_free_account: !qe && !(xe == null || ($t = xe.account.meta) === null || $t === void 0 ? void 0 : $t.has_business_zones) && !(xe == null || (Et = xe.account.meta) === null || Et === void 0 ? void 0 : Et.has_pro_zones) && !(xe == null || (Jt = xe.account.meta) === null || Jt === void 0 ? void 0 : Jt.has_enterprise_zones)
						})
					} else(!oe || oe in j && j.accountId !== oe) && Ee(Pt)
				}, [gt, xe, pe, Ee, De, qe, oe, j])
			}
			var ue = t("../react/common/selectors/zoneSelectors.ts");

			function le() {
				const j = (0, Oe.p4)(ue.nA),
					J = (0, Be.Yc)();
				(0, fe.useEffect)(() => {
					var oe;
					J({
						zone_id: j == null ? void 0 : j.id,
						zone_plan: j == null || (oe = j.plan) === null || oe === void 0 ? void 0 : oe.legacy_id
					})
				}, [j, J])
			}
			const ve = () => (ze(), _t(), le(), null);
			var _e = t("../react/app/components/Persistence/index.tsx"),
				we = t("../node_modules/@cloudflare/elements/es/index.js"),
				je = t("../react/app/components/LoadingSuspense.tsx");
			const Ge = Ue().lazy(() => Promise.all([t.e(97842), t.e(33023), t.e(20400), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var Xe = () => (0, Pe.jsx)(je.Z, {
				children: (0, Pe.jsx)(Ge, {})
			});
			const tt = () => (fe.useEffect(() => A, []), null);
			var Dt = t("../../../../node_modules/moment/moment.js"),
				Ut = t.n(Dt);
			const bt = j => {
					switch (j) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return j.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return j.toLowerCase();
						default:
							return "en"
					}
				},
				st = () => {
					const j = (0, Oe.p4)(S.r);
					(0, fe.useEffect)(() => {
						const J = bt(j);
						J !== Ut().locale() && Ut().locale(J), document.documentElement.lang = j
					}, [j])
				},
				rn = () => {
					(0, fe.useEffect)(() => {
						async function j() {
							var J, oe, pe, Ee;
							let Le;
							if (((J = window) === null || J === void 0 || (oe = J.build) === null || oe === void 0 ? void 0 : oe.isPreviewDeploy) && ((pe = window) === null || pe === void 0 || (Ee = pe.build) === null || Ee === void 0 ? void 0 : Ee.branch) !== "staging" && (Le = "cookie"), !!Le) try {
								const De = document.head.querySelector("link[rel=icon]");
								De && (De.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${Le}.ico`)).default)
							} catch {}
						}
						j()
					}, [])
				};
			var on = t("../react/common/constants/constants.ts");
			const an = () => {
				var j;
				const J = (0, Ne.useLocation)(),
					[oe, pe] = (0, fe.useState)(((j = window) === null || j === void 0 ? void 0 : j.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
				return (0, fe.useEffect)(() => {
					const Ee = de().parse(J.search);
					if (Ee.pt && Y.Z.set(on.sJ, Ee.pt), Ee == null ? void 0 : Ee.devPanel) {
						var Le, De;
						(Le = window) === null || Le === void 0 || (De = Le.localStorage) === null || De === void 0 || De.setItem("gates_devtools_ui_gates_controller_enabled", "true"), pe(!0)
					}
				}, [J.search]), {
					devPanelEnabled: oe
				}
			};
			var sn = t("../react/utils/useDomainConnectRedirect.ts");
			const cn = Ue().lazy(() => Promise.all([t.e(97842), t.e(16691), t.e(14886), t.e(11664), t.e(94012), t.e(60296), t.e(33023), t.e(65676), t.e(88789), t.e(82620), t.e(80778), t.e(69102), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(66270), t.e(29271), t.e(98210), t.e(3769), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				ln = Ue().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(60296), t.e(80778), t.e(76846), t.e(66270), t.e(88145), t.e(3769), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var un = ({
					userIsAuthed: j
				}) => {
					st(), rn(), (0, sn.y)();
					const {
						devPanelEnabled: J
					} = an();
					return (0, Pe.jsxs)(fe.Suspense, {
						fallback: (0, Pe.jsx)(tt, {}),
						children: [(0, Pe.jsxs)(Ne.Switch, {
							children: [!j && !0 && (0, Pe.jsx)(Ne.Route, {
								exact: !0,
								path: ["/", "/login"],
								children: (0, Pe.jsx)(ln, {})
							}), (0, Pe.jsx)(Ne.Route, {
								render: () => (0, Pe.jsx)(we.ZC, {
									minHeight: "100vh",
									children: (0, Pe.jsx)(cn, {})
								})
							})]
						}), J && (0, Pe.jsx)(Xe, {})]
					})
				},
				Qt = t("../../../../node_modules/yup/es/index.js"),
				dn = t("../../../common/util/types/src/utils/index.ts");
			const qt = {
				cfEmail: () => Qt.Z_().email((0, ut.ZP)("common.validation.email")).required((0, ut.ZP)("common.validation.email")),
				cfPassword: () => Qt.Z_().required((0, ut.ZP)("common.validation.required"))
			};
			(0, dn.Yd)(qt).forEach(j => {
				Qt.kM(Qt.Z_, j, qt[j])
			});
			const pn = j => {
					if (!document.startViewTransition) {
						j();
						return
					}
					document.startViewTransition(() => j())
				},
				en = Ue().lazy(() => Promise.all([t.e(16691), t.e(94012), t.e(6368), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function gn() {
				const [j, J] = (0, fe.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, fe.useEffect)(() => {
					const oe = window.matchMedia("(prefers-color-scheme: dark)"),
						pe = Ee => {
							J(Ee.matches ? "dark" : "light")
						};
					return oe.addEventListener("change", pe), () => {
						oe.removeEventListener("change", pe)
					}
				}, []), j
			}
			const mn = () => {
					const j = (0, Ye.$8)(),
						[J, oe] = (0, fe.useState)(j ? en : Ue().Fragment),
						pe = gn(),
						[Ee, Le] = (0, fe.useState)((0, l.Yc)());
					(0, fe.useEffect)(() => {
						(0, l.fF)(() => Le((0, l.Yc)()))
					}, []);
					const De = xe => xe === l.LF.ON || xe === l.LF.SYSTEM && pe === "dark",
						qe = xe => {
							document.cookie = `dark-mode=${xe};Path=/;Max-Age=31536000`
						},
						ct = (xe = l.LF.SYSTEM) => {
							const gt = De(xe);
							pn(() => {
								Le(gt), (0, l.C8)(xe)
							}), qe(xe)
						};
					return (0, fe.useEffect)(() => {
						oe(j ? en : Ue().Fragment)
					}, [j]), (0, fe.useEffect)(() => {
						const xe = () => {
							const gt = localStorage.getItem("dark-mode");
							ct(gt)
						};
						return window.addEventListener("storage", xe), () => window.removeEventListener("storage", xe)
					}, []), (0, Pe.jsx)(fe.Suspense, {
						fallback: null,
						children: (0, Pe.jsx)(He.Provider, {
							store: (0, g.bh)(),
							children: (0, Pe.jsx)(Ne.Router, {
								history: F,
								children: (0, Pe.jsx)(J, {
									children: (0, Pe.jsx)(yt.Z, {
										renderer: Kt(),
										children: (0, Pe.jsx)(Nt, {
											children: (0, Pe.jsx)(Gt.S, {
												sentryTag: "Root",
												children: (0, Pe.jsxs)(Ct.J$, {
													value: {
														fetcher: xe => fetch(xe).then(gt => gt.json())
													},
													children: [(0, Pe.jsx)(ve, {}), (0, Pe.jsx)(me, {}), (0, Pe.jsx)(_e.Z_, {
														onDarkModeChangeCb: ct,
														children: (0, Pe.jsx)(Qe.ZP, {
															children: (0, Pe.jsx)(un, {
																userIsAuthed: j
															})
														})
													}), (0, Pe.jsx)(Bt.ZP, {}), (0, Pe.jsx)(ht.F0, {})]
												})
											})
										})
									})
								})
							})
						})
					})
				},
				fn = () => {
					(0, Ze.render)((0, Pe.jsx)(mn, {}), document.getElementById("react-app"))
				};
			var Lt = t("../utils/initSparrow.ts"),
				Zt = t("../utils/zaraz.ts");
			const vn = () => {
					const j = (0, Te.PR)((0, g.bh)().getState());
					_n(), (0, Lt.Ug)(), (0, Zt.bM)(), (j == null ? void 0 : j.id) && ge().setUserId(j == null ? void 0 : j.id), (0, Lt.yV)(), !(0, Lt.Wi)() && (0, Lt.IM)(), j ? (0, Zt.yn)(j) : (0, Zt.Ro)()
				},
				_n = () => {
					var j, J;
					(j = window) === null || j === void 0 || (J = j.OneTrust) === null || J === void 0 || J.OnConsentChanged(() => {
						const oe = (0, Te.PR)((0, g.bh)().getState());
						(0, Lt.Wi)() ? (ge().setEnabled(!0), (oe == null ? void 0 : oe.id) ? (ge().setUserId(oe.id), (0, Zt.yn)(oe)) : (0, Zt.Ro)(), (0, Lt.yV)()) : (ge().setEnabled(!1), (0, Lt.IM)())
					})
				};

			function En(j) {
				for (var J = 1; J < arguments.length; J++) {
					var oe = arguments[J] != null ? Object(arguments[J]) : {},
						pe = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(oe).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(oe, Ee).enumerable
					})), pe.forEach(function(Ee) {
						hn(j, Ee, oe[Ee])
					})
				}
				return j
			}

			function hn(j, J, oe) {
				return J = yn(J), J in j ? Object.defineProperty(j, J, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[J] = oe, j
			}

			function yn(j) {
				var J = bn(j, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function bn(j, J) {
				if (typeof j != "object" || j === null) return j;
				var oe = j[Symbol.toPrimitive];
				if (oe !== void 0) {
					var pe = oe.call(j, J || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)(j)
			}
			const Cn = "init",
				tn = (j, J) => {
					r.$e(function(oe) {
						oe.setTag(Cn, J), r.Tb(j)
					}), P(j)
				},
				Xt = async (j, J) => {
					try {
						return await j(), !0
					} catch (oe) {
						return tn(oe, J), !1
					}
				};
			(async () => {
				try {
					var j, J, oe;
					t.g.build = En({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "1e2dbeddc203dadfca4c07902720d10611bf7255",
						dashVersion: "35142811",
						env: "production",
						builtAt: 1754571455906,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, $.p)()
					}), et();
					const pe = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => w(F),
						tag: "hashScroll"
					}, {
						fn: D.Z,
						tag: "styles"
					}, {
						fn: $e,
						tag: "mfePreviewData"
					}];
					for (const ct of pe)
						if (!await Xt(ct.fn, ct.tag)) return;
					let Ee;
					if (!await Xt(async () => {
							Ee = await ce()
						}, "bootstrap")) return;
					const Le = (0, g.bh)(),
						De = ((j = Ee) === null || j === void 0 ? void 0 : j.data) || {};
					Le.dispatch((0, a.mW)("user", De == null ? void 0 : De.user));
					const qe = (J = Ee) === null || J === void 0 || (oe = J.data) === null || oe === void 0 ? void 0 : oe.user;
					return t.g.bootstrap = Ee, qe && qe.id && Ke(qe.id), !await Xt(Ie, "gates") || !(0, x.wz)() && !await Xt(vn, "tracking") ? void 0 : fn()
				} catch (pe) {
					tn(pe, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(B, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				p = t("../react/common/selectors/userSelectors.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				v = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/common/utils/isGuards.ts"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				E = t.n(u),
				n = t("../../../../node_modules/react/jsx-runtime.js");

			function r(w) {
				for (var _ = 1; _ < arguments.length; _++) {
					var l = arguments[_] != null ? Object(arguments[_]) : {},
						C = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), C.forEach(function(f) {
						a(w, f, l[f])
					})
				}
				return w
			}

			function a(w, _, l) {
				return _ = g(_), _ in w ? Object.defineProperty(w, _, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[_] = l, w
			}

			function g(w) {
				var _ = m(w, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function m(w, _) {
				if (typeof w != "object" || w === null) return w;
				var l = w[Symbol.toPrimitive];
				if (l !== void 0) {
					var C = l.call(w, _ || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(w)
			}
			const d = w => {
				function _(l) {
					const C = (0, s.UM)(),
						f = (0, u.useHistory)(),
						O = (0, u.useLocation)(),
						k = (0, u.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						A = (0, s.p4)(p.PR) || null,
						P = (0, s.p4)(i.nA) || null,
						D = (0, s.p4)(v.uF),
						b = D ? D.account : null;
					if (!k) return null;
					const {
						accountId: I,
						app: S,
						tab: x
					} = k.params, $ = k.params.zoneName && ((0, c.v5)(k.params.zoneName) || k.params.zoneName.indexOf(".") > 0) ? k.params.zoneName : void 0;
					return (0, n.jsx)(w, r({
						dispatch: C,
						history: f,
						location: O,
						match: k,
						user: A,
						membership: I ? D : null,
						account: I ? b : null,
						accountId: I || null,
						zone: $ ? P : null,
						zoneName: $ || null,
						app: $ ? S : null,
						tab: $ ? x : null
					}, l))
				}
				return _.displayName = `withEntities(${h(w)})`, _
			};

			function h(w) {
				return w.displayName || w.name || "Component"
			}
			y.Z = d
		},
		"../react/app/components/AccountHome/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				$$: function() {
					return f
				},
				CK: function() {
					return P
				},
				KV: function() {
					return k
				},
				OX: function() {
					return A
				},
				QV: function() {
					return C
				},
				Yt: function() {
					return _
				},
				bA: function() {
					return l
				},
				fu: function() {
					return b
				},
				gX: function() {
					return d
				},
				hh: function() {
					return D
				},
				o1: function() {
					return O
				},
				tw: function() {
					return h
				},
				xD: function() {
					return w
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				s = t("../react/utils/url.ts");
			const p = "projects table click",
				i = "click create application",
				v = "account home dev plat - product card click",
				c = "account home dev plat - empty state CTA click",
				u = "account home dev plat - view all projects click",
				E = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				r = "account home zero trust - analytics link click",
				a = "account home zero trust - product card click",
				g = "account home zero trust - plan pill click",
				m = "account home zero trust - plan fallback link click",
				d = {
					SPARROW_PROJECTS_TABLE_CLICK: p,
					SPARROW_CREATE_PROJECT_CLICK: i,
					SPARROW_PRODUCT_CARD_CLICK: v,
					SPARROW_EMPTY_STATE_CTA_CLICK: c,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: u,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: E,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: r,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: a,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: g,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: m
				},
				h = I => {
					o().sendEvent(p, {
						component: I
					})
				},
				w = I => {
					o().sendEvent(p, {
						component: "menu",
						subcomponent: I
					})
				},
				_ = () => {
					o().sendEvent(i, {
						category: "Projects Table"
					})
				},
				l = ({
					category: I,
					product: S
				}) => {
					o().sendEvent(v, {
						category: I,
						product: S
					})
				},
				C = () => {
					o().sendEvent(c)
				},
				f = () => {
					o().sendEvent(u)
				},
				O = I => {
					o().sendEvent(n, {
						category: I
					})
				},
				k = ({
					category: I,
					href: S
				}) => {
					o().sendEvent(E, {
						category: I,
						href: (0, s.cm)(S)
					})
				},
				A = ({
					category: I,
					href: S
				}) => {
					o().sendEvent(r, {
						category: I,
						href: (0, s.cm)(S)
					})
				},
				P = ({
					category: I,
					product: S,
					href: x
				}) => {
					o().sendEvent(a, {
						category: I,
						product: S,
						href: (0, s.cm)(x)
					})
				},
				D = ({
					plan: I
				}) => {
					o().sendEvent(g, {
						plan: I
					})
				},
				b = () => {
					o().sendEvent(m)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return u
				},
				Bh: function() {
					return v
				},
				CM: function() {
					return E
				},
				MF: function() {
					return o
				},
				TS: function() {
					return a
				},
				WF: function() {
					return i
				},
				Wz: function() {
					return n
				},
				bk: function() {
					return c
				},
				fj: function() {
					return r
				},
				r4: function() {
					return p
				},
				zq: function() {
					return s
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
				s = (0, e.R)(o.ADD_SITE, g => ({
					payload: g
				})),
				p = (0, e.R)(o.RESOLVING_START),
				i = (0, e.R)(o.RESOLVING_COMPLETE),
				v = (0, e.R)(o.SELECT_ZONE, g => ({
					payload: g
				})),
				c = (0, e.R)(o.SELECT_ACCOUNT, g => ({
					payload: g
				})),
				u = (0, e.R)(o.SELECT_PAGES_PROJECT, g => ({
					payload: g
				})),
				E = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, g => ({
					payload: g
				})),
				n = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, g => ({
					accountIds: g
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				a = (0, e.R)(o.SELECT_WORKER, g => ({
					payload: g
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				BV: function() {
					return e
				},
				Dz: function() {
					return E
				},
				Fj: function() {
					return p
				},
				Kt: function() {
					return v
				},
				O5: function() {
					return i
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return n
				},
				dB: function() {
					return s
				},
				s$: function() {
					return c
				}
			});
			const e = "to",
				o = "_gl",
				s = "freeTrial",
				p = "deepLinkQueryParams",
				i = "resolvedDeepLinkQueryParams",
				v = "add",
				c = "multiSkuProducts",
				u = "/:account/billing/checkout",
				E = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return D
				},
				U: function() {
					return P.U
				},
				dd: function() {
					return P.dd
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
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = t("../react/app/components/DeepLink/utils.ts"),
				i = t("../react/utils/bootstrap.ts"),
				v = t("../react/app/components/DeepLink/actions.ts"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(c);

			function E(b) {
				for (var I = 1; I < arguments.length; I++) {
					var S = arguments[I] != null ? Object(arguments[I]) : {},
						x = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(S).filter(function($) {
						return Object.getOwnPropertyDescriptor(S, $).enumerable
					})), x.forEach(function($) {
						n(b, $, S[$])
					})
				}
				return b
			}

			function n(b, I, S) {
				return I = r(I), I in b ? Object.defineProperty(b, I, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[I] = S, b
			}

			function r(b) {
				var I = a(b, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function a(b, I) {
				if (typeof b != "object" || b === null) return b;
				var S = b[Symbol.toPrimitive];
				if (S !== void 0) {
					var x = S.call(b, I || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(b)
			}
			class g {
				constructor(I, S) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", x => {
						this.resolvers.set(x, {
							name: x,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", x => {
						const $ = this.resolvers.get(x);
						$ && ($.endTime = Date.now(), this.resolvers.set(x, $))
					}), n(this, "resolverCancel", x => {
						this.resolverDone(x), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", x => {
						const $ = "NO_ACTION",
							ne = {
								actionType: $,
								startTime: 0
							};
						return {
							start: (ee = $) => {
								const re = this.resolvers.get(x);
								ne.actionType = ee, ne.startTime = Date.now(), re && re.userActions.push(ne)
							},
							finish: (ee = $) => {
								ne.actionType = ee, ne.endTime = Date.now()
							},
							cancel: (ee = $) => {
								ne.actionType = ee, ne.endTime = Date.now(), this.resolverCancel(x)
							}
						}
					}), this.deepLink = I, this.legacyDeepLink = S, this.resolvers = new Map
				}
				track(I) {
					try {
						if (this._done) return;
						this._done = !0;
						const S = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: m(this.startTime, this.endTime),
								totalCpuTime: m(this.startTime, this.endTime)
							},
							x = this.resolvers.size === 0 ? S : Array.from(this.resolvers.values()).reduce(($, ne) => {
								const ee = m(ne.startTime, ne.endTime),
									re = ne.userActions.reduce((N, R) => {
										const G = m(R.startTime, R.endTime);
										return {
											totalTime: N.totalTime + G,
											actions: N.actions.set(R.actionType, G)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									W = ee - re.totalTime;
								return E({}, $, {
									totalTime: $.totalTime + ee,
									totalUserActionsTime: $.totalUserActionsTime + re.totalTime,
									totalCpuTime: $.totalCpuTime + W,
									[`${ne.name}ResolverTotalTime`]: ee,
									[`${ne.name}ResolverTotalCpuTime`]: W,
									[`${ne.name}ResolverTotalUserActionsTime`]: re.totalTime
								}, Array.from(re.actions.keys()).reduce((N, R) => E({}, N, {
									[`${ne.name}Resolver/${R}`]: re.actions.get(R)
								}), {}))
							}, E({}, S, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						u().sendEvent(I, x)
					} catch (S) {
						console.error(S)
					}
				}
			}

			function m(b = Date.now(), I = Date.now()) {
				return (I - b) / 1e3
			}
			var d = t("../react/app/components/DeepLink/constants.ts"),
				h = t("../react/common/hooks/useCachedState.ts"),
				w = t("../react/common/hooks/usePrevious.ts");

			function _(b) {
				for (var I = 1; I < arguments.length; I++) {
					var S = arguments[I] != null ? Object(arguments[I]) : {},
						x = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(S).filter(function($) {
						return Object.getOwnPropertyDescriptor(S, $).enumerable
					})), x.forEach(function($) {
						l(b, $, S[$])
					})
				}
				return b
			}

			function l(b, I, S) {
				return I = C(I), I in b ? Object.defineProperty(b, I, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[I] = S, b
			}

			function C(b) {
				var I = f(b, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function f(b, I) {
				if (typeof b != "object" || b === null) return b;
				var S = b[Symbol.toPrimitive];
				if (S !== void 0) {
					var x = S.call(b, I || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(b)
			}
			var k = ({
					children: b
				}) => {
					const I = (0, o.TZ)(),
						S = (0, s.useHistory)(),
						x = (0, w.Z)(S.location.pathname),
						[$, ne] = (0, e.useState)(!0),
						[ee, re] = (0, h.j)(void 0, {
							key: d.Fj
						}),
						[W, N] = (0, h.j)(void 0, {
							key: d.O5
						}),
						[R, G] = (0, h.j)(void 0, {
							key: d.s$
						}),
						U = (0, i.$8)();
					let z = new URLSearchParams(S.location.search);
					const H = (0, p.mL)(S.location.pathname, z);
					let Z = null,
						F = null;
					if (z.has(d.Tc) && z.delete(d.Tc), z.get(d.BV)) Z = z.get(d.BV), S.location.hash && (F = S.location.hash);
					else if (ee) {
						const L = new URLSearchParams(ee);
						L.get(d.BV) && (Z = L.get(d.BV), z = L)
					} else H && (z.set(d.BV, H), Z = H);
					if (Z && d._h.test(Z)) {
						const L = z.getAll(d.Kt),
							K = JSON.stringify(L);
						L.length && K !== R && G(K), z.has(d.Tc) && z.delete(d.Tc), z.delete(d.Kt)
					}!U && ee === void 0 && Z && re(z.toString());
					const q = async () => {
						try {
							if ((0, p.I3)(Z) && U) {
								ee && re(void 0), I.dispatch((0, v.r4)()), ne(!0), Z && Z !== W && N(Z);
								const L = await (0, p.py)(Z, ne, I, S, x, new g(Z, H ? `${S.location.pathname}${S.location.search}` : void 0));
								z.delete(d.BV);
								const K = z.toString();
								S.replace(_({}, S.location, {
									pathname: L,
									search: K
								}, F ? {
									hash: F
								} : {})), I.dispatch((0, v.WF)())
							}
						} catch (L) {
							I.dispatch((0, v.WF)()), console.error(L)
						} finally {
							ne(!1)
						}
					};
					return (0, e.useEffect)(() => {
						q()
					}, [S.location.pathname, S.location.search]), ($ || (0, p.I3)(Z)) && U ? null : b
				},
				A = t("../react/app/components/DeepLink/reducer.ts"),
				P = t("../react/app/components/DeepLink/selectors.ts"),
				D = k
		},
		"../react/app/components/DeepLink/reducer.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return p
				},
				r: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				s = t("../react/app/components/DeepLink/actions.ts");
			const p = null,
				i = o().from({
					lastAction: p,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function v(c = i, u) {
				if (u.type === s.MF.RESOLVING_COMPLETE) return i;
				if (u.type === s.MF.RESOLVING_START) return c.set("isResolving", !0);
				if (c.isResolving) {
					if (u.type === s.MF.RESOLVING_COMPLETE) return c.set("isResolving", !1);
					if (u.type === s.MF.SET_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", u.accountIds);
					if (u.type === s.MF.DELETE_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", void 0);
					{
						let E = c;
						try {
							E = c.set("lastAction", u)
						} catch {
							E = c.set("lastAction", {
								type: u.type
							})
						}
						return E
					}
				} else return c
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return s
				},
				dd: function() {
					return o
				},
				yI: function() {
					return e
				}
			});
			const e = p => p.deepLink.lastAction,
				o = p => p.deepLink.isResolving,
				s = p => p.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				I3: function() {
					return E
				},
				X1: function() {
					return c
				},
				mL: function() {
					return m
				},
				py: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/components/DeepLink/reducer.ts"),
				s = t("../react/app/components/DeepLink/selectors.ts"),
				p = t("../react/app/components/DeepLink/constants.ts"),
				i = t("../react/common/validators/index.js"),
				v = t("../react/common/utils/isGuards.ts");
			const c = d => (0, i.Lb)(d) && (d.split(".").length > 1 || (0, v.v5)(d)),
				u = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				E = d => typeof d == "string" && d.startsWith("/"),
				n = (d, h) => w => new Promise((_, l) => {
					h.start();
					const C = d.subscribe(() => {
						const f = (0, s.yI)(d.getState());
						f === o.E ? (h.cancel(), C(), l("DeepLink: waitForAction out of context.")) : w(f) && (h.finish(f.type), C(), _(f))
					})
				}),
				r = (d, h, w) => (_, l) => new Promise((C, f) => {
					w.start();
					const O = h.location.pathname;
					_ = new URL(_, window.location.href).pathname, O !== _ && (w.cancel(), f(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${_}", but on "${O}". You need to redirect to "${_}", and unblockRouter in your Resolver, before you use this function.`));
					const k = d.subscribe(() => {
						const A = (0, s.yI)(d.getState()),
							P = h.location.pathname,
							b = new URLSearchParams(h.location.search).get(p.BV);
						(P !== _ || !!b) && (w.cancel(), k(), f(`DeepLink: waitForPageAction user navigated away from "${_}" to "${P}${b?h.location.search:""}"`)), A === o.E ? (w.cancel(), k(), f("DeepLink: waitForPageAction out of context.")) : l(A) && (w.finish(A.type), k(), C(A))
					})
				});

			function a(d) {
				const h = [],
					w = d.split("?")[0].split("/");
				for (let _ of w) _.length !== 0 && (_.startsWith(":") ? h.push({
					value: _.substring(1),
					type: "dynamic"
				}) : h.push({
					value: _,
					type: "static"
				}));
				return h
			}
			async function g(d, h, w, _, l, C) {
				C.start();
				const f = a(d),
					k = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					A = {};
				let P = "";
				for (const [D, b] of f.entries())
					if (b.type === "static") P = [P, b.value].join("/");
					else if (b.type === "dynamic" && u.is(b.value) && b.value in k) {
					C.resolverStart(b.value);
					const I = await k[b.value]({
						deepLink: d,
						blockRouter: () => h(!0),
						unblockRouter: () => h(!1),
						routerHistory: _,
						resolvedValues: A,
						store: w,
						referringRoute: l,
						uri: {
							currentPartIdx: D,
							parts: f
						},
						waitForAction: n(w, C.createUserActionTracker(b.value)),
						waitForPageAction: r(w, _, C.createUserActionTracker(b.value))
					});
					C.resolverDone(b.value), P = [P, I].join("/"), A[b.value] = I
				} else throw C.cancel(), new Error(`DeepLink: Resolver with name '${b.value}' is not supported.`);
				return C.done(), P
			}

			function m(d, h) {
				const w = ":account",
					_ = ":zone",
					l = h.get("zone");
				if (l) return h.delete("zone"), `/${w}/${_}/${l}`;
				const C = h.get("account");
				if (C) return h.delete("account"), `/${w}/${C}`;
				if (d === "/overview") return `/${w}/${_}`;
				const f = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const O of f) {
					const k = O.length;
					if (d.startsWith(O) && (d.length === k || d[k] === "/")) return `/${w}/${_}${d}`
				}
				switch (d) {
					case "/account/billing":
						return `/${w}/billing`;
					case "/account/subscriptions":
						return `/${w}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${w}/dns-firewall`;
					case "/account/audit-log":
						return `/${w}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				s = t("../react/app/components/SomethingWrong.jsx"),
				p = t("../utils/sentry/lastSentEventId.ts"),
				i = t("../react/utils/zaraz.ts"),
				v = t("../react/utils/url.ts"),
				c = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/component-button/es/index.js"),
				E = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(n),
				a = t("../react/common/components/Page.tsx"),
				g = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==",
				m = t("../../../../node_modules/react/jsx-runtime.js");

			function d() {
				return (0, e.useEffect)(() => {
					r().sendEvent("new page available refresh cta"), window.location.reload()
				}, []), (0, m.jsx)(a.Z, {
					type: "narrow",
					children: (0, m.jsxs)(c.ZC, {
						textAlign: "center",
						children: [(0, m.jsx)(c.H1, {
							fontSize: 5,
							fontWeight: 400,
							children: (0, m.jsx)(E.Trans, {
								id: "error.new_page_version_available.title"
							})
						}), (0, m.jsx)(E.Trans, {
							id: "error.new_page_version_available.description"
						}), (0, m.jsx)(c.ZC, {
							children: (0, m.jsx)(c.Ei, {
								height: 116,
								src: g,
								"aria-hidden": !0
							})
						}), (0, m.jsx)(u.zx, {
							mt: 3,
							type: "primary",
							iconType: "refresh",
							onClick: () => window.location.reload(),
							children: (0, m.jsx)(E.Trans, {
								id: "common.refresh"
							})
						})]
					})
				})
			}
			const h = ({
				sentryTag: w,
				children: _,
				fallbackComponent: l
			}) => (0, m.jsx)(o.SV, {
				beforeCapture: C => {
					i.tg === null || i.tg === void 0 || i.tg.track("page-error", {
						page: (0, v.Fl)(window.location.pathname)
					})
				},
				onError: C => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(C)
				},
				fallback: ({
					error: C,
					eventId: f
				}) => {
					var O;
					if (l) return l;
					const k = p.e.getEventId() || f;
					return (C == null || (O = C.message) === null || O === void 0 ? void 0 : O.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), (0, m.jsx)(d, {})) : (0, m.jsx)(s.Z, {
						type: "page",
						error: C,
						eventId: k,
						sentryTag: w
					})
				},
				children: _
			})
		},
		"../react/app/components/FedRAMP/utils.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				$$: function() {
					return o
				},
				PQ: function() {
					return s
				},
				tv: function() {
					return e
				}
			});
			const e = "#5B697C",
				o = "#525F70",
				s = "#fff"
		},
		"../react/app/components/Footer.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return H
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				s = t("../node_modules/@cloudflare/elements/es/index.js"),
				p = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				v = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(v),
				u = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				E = t("../react/common/components/Apple/utils.tsx"),
				n = t("../react/utils/translator.tsx"),
				r = t("../../../../node_modules/moment/moment.js"),
				a = t.n(r),
				g = t("../../../../node_modules/react/jsx-runtime.js");
			const m = () => {
					const Z = a()().format("YYYY"),
						F = q => {
							c().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: q
							})
						};
					return (0, g.jsx)(d, {
						marginTop: "auto",
						children: (0, g.jsx)(h, {
							children: (0, g.jsxs)(w, {
								children: [(0, g.jsxs)(_, {
									children: ["\xA9 ", Z, " Cloudflare, Inc."]
								}), (0, g.jsxs)(_, {
									children: [(0, g.jsxs)(l, {
										children: [(0, g.jsx)(C, {
											showOnDeskTop: !1,
											children: (0, g.jsx)(f, {
												fontWeight: 600,
												href: "https://support.cloudflare.com/",
												onClick: () => F("Support"),
												children: (0, g.jsx)(n.cC, {
													id: "common.support"
												})
											})
										}), (0, g.jsx)(C, {
											children: (0, g.jsx)(f, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/privacypolicy/",
												onClick: () => F("Privacy Policy"),
												children: (0, g.jsx)(n.cC, {
													id: "footer.privacy_policy"
												})
											})
										}), (0, g.jsx)(C, {
											children: (0, g.jsx)(f, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/terms/",
												onClick: () => F("Terms of Use"),
												children: (0, g.jsx)(n.cC, {
													id: "apple.footer.terms_of_use"
												})
											})
										}), (0, g.jsx)(C, {
											children: (0, g.jsx)(f, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/cookie-policy/",
												onClick: () => F("Cookie Preferences"),
												children: (0, g.jsx)(n.cC, {
													id: "apple.footer.cookie_preferences"
												})
											})
										}), (0, g.jsx)(C, {
											children: (0, g.jsx)(f, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/trademark/",
												onClick: () => F("Trademark"),
												children: (0, g.jsx)(n.cC, {
													id: "apple.footer.trademark"
												})
											})
										})]
									}), (0, g.jsx)(l, {
										children: (0, g.jsx)(C, {
											children: (0, g.jsx)(f, {
												fontWeight: 400,
												href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
												onClick: () => F("ICANN's Domain Name Registrants' Rights"),
												children: (0, g.jsx)(n.cC, {
													id: "apple.footer.icanns"
												})
											})
										})
									})]
								})]
							})
						})
					})
				},
				d = (0, p.LM)(({
					theme: Z,
					marginTop: F
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: F
				})),
				h = (0, p.LM)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				w = (0, p.LM)(({
					theme: Z
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${Z.space[3]}px`
					}
				})),
				_ = (0, p.LM)(({
					theme: Z
				}) => ({
					width: "100%",
					color: Z.colors.white,
					fontSize: Z.fontSizes[1],
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
				l = (0, p.LM)(({
					theme: Z
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: Z.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				C = (0, p.LM)(({
					showOnDeskTop: Z = !0,
					theme: F
				}) => ({
					color: F.colors.white,
					fontSize: F.fontSizes[1],
					height: "20px",
					display: Z ? "flex" : "none",
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
				f = (0, p.SU)(({
					theme: Z
				}) => ({
					textDecoration: "none",
					color: Z.colors.white,
					"&:hover": {
						color: Z.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var O = m,
				k = t("../react/pages/welcome/routes.ts"),
				A = t("../react/utils/cookiePreferences.ts"),
				P = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				b = () => {
					const [Z, F] = (0, e.useState)(!1), q = (0, A.wV)(), L = () => {
						F(!0)
					}, K = () => {
						F(!1)
					}, Q = q && q === "US" ? (0, n.ZP)("footer.cpra_cta.privacy_choices") : (0, n.ZP)("footer.cpra_cta.cookie_preferences"), ie = (0, n.ZP)("footer.cpra_cta.privacy_choices_alt"), V = {
						background: "transparent",
						borderRadius: "none",
						color: Z ? (0, i.Yc)() ? "#ee730a" : "#003681" : (0, i.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: Z ? "underline" : "none",
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
					return (0, g.jsxs)(s.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: V,
						onMouseEnter: L,
						onMouseLeave: K,
						children: [(0, g.jsx)(s.Ei, {
							height: 15,
							src: P,
							mr: 2,
							alt: ie
						}), Q]
					})
				};

			function I(Z) {
				for (var F = 1; F < arguments.length; F++) {
					var q = arguments[F] != null ? Object(arguments[F]) : {},
						L = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(q).filter(function(K) {
						return Object.getOwnPropertyDescriptor(q, K).enumerable
					})), L.forEach(function(K) {
						S(Z, K, q[K])
					})
				}
				return Z
			}

			function S(Z, F, q) {
				return F = x(F), F in Z ? Object.defineProperty(Z, F, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[F] = q, Z
			}

			function x(Z) {
				var F = $(Z, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function $(Z, F) {
				if (typeof Z != "object" || Z === null) return Z;
				var q = Z[Symbol.toPrimitive];
				if (q !== void 0) {
					var L = q.call(Z, F || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(Z)
			}

			function ne(Z, F) {
				if (Z == null) return {};
				var q = ee(Z, F),
					L, K;
				if (Object.getOwnPropertySymbols) {
					var Q = Object.getOwnPropertySymbols(Z);
					for (K = 0; K < Q.length; K++) L = Q[K], !(F.indexOf(L) >= 0) && (!Object.prototype.propertyIsEnumerable.call(Z, L) || (q[L] = Z[L]))
				}
				return q
			}

			function ee(Z, F) {
				if (Z == null) return {};
				var q = {},
					L = Object.keys(Z),
					K, Q;
				for (Q = 0; Q < L.length; Q++) K = L[Q], !(F.indexOf(K) >= 0) && (q[K] = Z[K]);
				return q
			}
			const re = (0, p.SU)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,i.Yc)()?i.rS.colors.orange[6]:i.rS.colors.blue[4]}`
					}
				}), s.A),
				W = (0, p.SU)(({
					theme: Z
				}) => ({
					color: Z.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, u.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: Z.colors.gray[4]
					}
				}), s.A),
				N = Z => {
					let {
						onClick: F
					} = Z, q = ne(Z, ["onClick"]);
					return _jsx(re, I({
						onClick: L => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: q.href
							}), F && F(L)
						}
					}, q))
				},
				R = Z => {
					let {
						children: F,
						target: q,
						rel: L
					} = Z, K = ne(Z, ["children", "target", "rel"]);
					return (0, g.jsx)(W, I({
						target: q || "_blank",
						rel: L || "noopener noreferrer"
					}, K, {
						children: F
					}))
				},
				G = (0, p.SU)(({
					theme: Z
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, u.tq)() ? "8px" : "16px",
					"& > li": {
						listStyleType: "none",
						"& > a": {
							fontSize: Z.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: Z.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), s.Ul),
				U = (0, p.SU)(() => ({
					display: "flex",
					flexDirection: (0, u.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), s.ZC);
			var H = () => {
				const Z = [k.d.root.pattern].some(q => (0, o.matchPath)(location.pathname, {
					path: q
				}));
				if ((0, E.PP)()) return (0, g.jsx)(O, {});
				if (Z) return null;
				const F = new Date().getFullYear();
				return (0, g.jsx)(s.$_, {
					height: (0, u.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto",
					id: "site-footer",
					children: (0, g.jsx)(U, {
						children: (0, g.jsxs)(G, {
							children: [(0, g.jsx)(s.Li, {
								children: (0, g.jsx)(R, {
									href: "https://support.cloudflare.com",
									children: (0, n.ZP)("common.support")
								})
							}), (0, g.jsx)(s.Li, {
								children: (0, g.jsx)(R, {
									href: "https://www.cloudflarestatus.com",
									children: (0, g.jsx)(s.Dr, {
										textTransform: "capitalize",
										children: (0, n.ZP)("footer.system_status")
									})
								})
							}), (0, g.jsx)(s.Li, {
								children: (0, g.jsx)(R, {
									href: "https://www.cloudflare.com/careers/",
									children: (0, n.ZP)("footer.careers")
								})
							}), (0, g.jsx)(s.Li, {
								children: (0, g.jsx)(R, {
									href: "https://www.cloudflare.com/website-terms/",
									children: (0, n.ZP)("footer.tos_reduced")
								})
							}), (0, g.jsx)(s.Li, {
								children: (0, g.jsx)(R, {
									href: "https://www.cloudflare.com/disclosure/",
									children: (0, n.ZP)("footer.security_issues")
								})
							}), (0, g.jsx)(s.Li, {
								children: (0, g.jsx)(R, {
									href: "https://www.cloudflare.com/privacypolicy/",
									children: (0, n.ZP)("footer.privacy_policy")
								})
							}), (0, g.jsx)(s.Li, {
								children: (0, g.jsx)(b, {})
							}), (0, g.jsx)(s.Li, {
								children: (0, g.jsxs)(s.Dr, {
									fontSize: 2,
									color: "gray.4",
									children: ["\xA9 ", F, " Cloudflare, Inc."]
								})
							})]
						})
					})
				})
			}
		},
		"../react/app/components/Forbidden.jsx": function(B, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/components/ErrorStatus.tsx"),
				p = t("../react/utils/translator.tsx"),
				i = t("../../../../node_modules/react/jsx-runtime.js");

			function v(r) {
				for (var a = 1; a < arguments.length; a++) {
					var g = arguments[a] != null ? Object(arguments[a]) : {},
						m = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(g).filter(function(d) {
						return Object.getOwnPropertyDescriptor(g, d).enumerable
					})), m.forEach(function(d) {
						c(r, d, g[d])
					})
				}
				return r
			}

			function c(r, a, g) {
				return a = u(a), a in r ? Object.defineProperty(r, a, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = g, r
			}

			function u(r) {
				var a = E(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function E(r, a) {
				if (typeof r != "object" || r === null) return r;
				var g = r[Symbol.toPrimitive];
				if (g !== void 0) {
					var m = g.call(r, a || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const n = r => (0, i.jsx)(s.Z, v({}, r, {
				children: (0, p.ZP)("error.forbidden")
			}));
			y.Z = n
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return d
				},
				Z: function() {
					return q
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = t("../node_modules/@cloudflare/elements/es/index.js"),
				p = t("../../../../node_modules/@cloudflare/component-button/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				v = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(c),
				E = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				n = t("../react/common/components/AccessControl/index.js"),
				r = t("../react/common/components/ButtonWithDropdown.tsx"),
				a = t("../react/common/components/Dropdown/index.tsx"),
				g = t("../react/utils/translator.tsx"),
				m = t("../react/common/hooks/useGate.ts");
			const d = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				h = () => {
					const L = (0, m.Z)("super-add-button-copy-change"),
						K = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: d.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/registrar/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: d.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: d.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: d.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: d.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: d.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}];
					switch (L) {
						case "existing-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
								},
								trackingEvent: d.EXISTING_DOMAIN,
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
								trackingEvent: d.EXISTING_DOMAIN,
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
								trackingEvent: d.EXISTING_DOMAIN,
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
								trackingEvent: d.EXISTING_DOMAIN,
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
								trackingEvent: d.EXISTING_DOMAIN,
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
								trackingEvent: d.EXISTING_DOMAIN,
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
								trackingEvent: d.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/registrar/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: d.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: d.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: d.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: d.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: d.ACCOUNT_MEMBERS,
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
					trackingEvent: d.EXISTING_DOMAIN,
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
					trackingEvent: d.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/registrar/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: d.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: d.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: d.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: d.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: d.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var _ = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t("../../../../node_modules/react/jsx-runtime.js");

			function C(L) {
				for (var K = 1; K < arguments.length; K++) {
					var Q = arguments[K] != null ? Object(arguments[K]) : {},
						ie = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(Q).filter(function(V) {
						return Object.getOwnPropertyDescriptor(Q, V).enumerable
					})), ie.forEach(function(V) {
						f(L, V, Q[V])
					})
				}
				return L
			}

			function f(L, K, Q) {
				return K = O(K), K in L ? Object.defineProperty(L, K, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[K] = Q, L
			}

			function O(L) {
				var K = k(L, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function k(L, K) {
				if (typeof L != "object" || L === null) return L;
				var Q = L[Symbol.toPrimitive];
				if (Q !== void 0) {
					var ie = Q.call(L, K || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(L)
			}

			function A(L, K) {
				if (L == null) return {};
				var Q = P(L, K),
					ie, V;
				if (Object.getOwnPropertySymbols) {
					var ae = Object.getOwnPropertySymbols(L);
					for (V = 0; V < ae.length; V++) ie = ae[V], !(K.indexOf(ie) >= 0) && (!Object.prototype.propertyIsEnumerable.call(L, ie) || (Q[ie] = L[ie]))
				}
				return Q
			}

			function P(L, K) {
				if (L == null) return {};
				var Q = {},
					ie = Object.keys(L),
					V, ae;
				for (ae = 0; ae < ie.length; ae++) V = ie[ae], !(K.indexOf(V) >= 0) && (Q[V] = L[V]);
				return Q
			}
			const D = L => {
					let {
						title: K,
						trackingEvent: Q,
						icon: ie,
						url: V,
						description: ae,
						disabled: ge
					} = L, Ce = A(L, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return (0, l.jsx)(b, C({
						to: !ge && V || "#",
						"aria-disabled": ge,
						onClick: () => {
							u().sendEvent(Q, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, Ce, {
						children: (0, l.jsxs)(s.ZC, {
							display: "flex",
							children: [(0, l.jsx)(o.J, {
								type: ie,
								size: 24,
								mr: 2,
								mt: 1
							}), (0, l.jsxs)(s.ZC, {
								display: "flex",
								flexDirection: "column",
								flex: "1",
								children: [(0, l.jsx)(s.ZC, {
									fontSize: 3,
									children: (0, l.jsx)(g.cC, C({}, K))
								}), (0, l.jsx)(s.ZC, {
									fontSize: 2,
									color: "gray.4",
									children: (0, l.jsx)(g.cC, C({}, ae))
								})]
							})]
						})
					}))
				},
				b = (0, E.SU)(({
					theme: L
				}) => {
					const K = {
						cursor: "pointer",
						backgroundColor: (0, i.Yc)() ? L.colors.gray[8] : L.colors.gray[9],
						color: L.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: L.colors.background,
						color: L.colors.gray[2],
						fontSize: L.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': K,
						':focus-within:not([aria-disabled="true"])': C({}, K, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: L.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, _.Link);
			var I = D,
				S = t("../flags.ts"),
				x = t("../react/app/components/FedRAMP/utils.ts");

			function $(L) {
				for (var K = 1; K < arguments.length; K++) {
					var Q = arguments[K] != null ? Object(arguments[K]) : {},
						ie = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(Q).filter(function(V) {
						return Object.getOwnPropertyDescriptor(Q, V).enumerable
					})), ie.forEach(function(V) {
						ne(L, V, Q[V])
					})
				}
				return L
			}

			function ne(L, K, Q) {
				return K = ee(K), K in L ? Object.defineProperty(L, K, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[K] = Q, L
			}

			function ee(L) {
				var K = re(L, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function re(L, K) {
				if (typeof L != "object" || L === null) return L;
				var Q = L[Symbol.toPrimitive];
				if (Q !== void 0) {
					var ie = Q.call(L, K || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(L)
			}

			function W(L, K) {
				if (L == null) return {};
				var Q = N(L, K),
					ie, V;
				if (Object.getOwnPropertySymbols) {
					var ae = Object.getOwnPropertySymbols(L);
					for (V = 0; V < ae.length; V++) ie = ae[V], !(K.indexOf(ie) >= 0) && (!Object.prototype.propertyIsEnumerable.call(L, ie) || (Q[ie] = L[ie]))
				}
				return Q
			}

			function N(L, K) {
				if (L == null) return {};
				var Q = {},
					ie = Object.keys(L),
					V, ae;
				for (ae = 0; ae < ie.length; ae++) V = ie[ae], !(K.indexOf(V) >= 0) && (Q[V] = L[V]);
				return Q
			}
			const R = "GLOBAL_ADD_DROPDOWN",
				G = (0, E.SU)(({
					theme: L
				}) => ({
					"background-color": L.colors.blue[5]
				}), p.zx),
				U = ({
					disableProducts: L
				}) => {
					const K = h();
					return (0, e.useEffect)(() => (u().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						u().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), []), (0, l.jsx)(r.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0",
						bottom: "auto",
						zIndex: 1200,
						minWidth: 240,
						children: K.map(Q => {
							const ie = Q || {},
								{
									disableOn: V,
									permissionCheck: ae
								} = ie,
								ge = W(ie, ["disableOn", "permissionCheck"]),
								Ce = V && L[V],
								se = $({}, ge, {
									disabled: Ce
								});
							return ae ? (0, l.jsx)(n.Z, {
								edit: ae,
								children: ({
									isEditable: be
								}) => be && (0, l.jsx)(I, $({}, se))
							}, Q.title.id) : (0, l.jsx)(I, $({}, se), Q.url)
						})
					})
				},
				z = ({
					disableProducts: L,
					topNavType: K
				}) => {
					const Q = () => (0, v.tq)() || K === "icon-only" ? (0, l.jsx)(s.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3,
						children: (0, l.jsx)(G, {
							type: "plain",
							iconType: "plus",
							iconSize: 24,
							padding: 1,
							color: "white"
						})
					}) : (0, l.jsxs)(p.zx, {
						type: "primary",
						mr: 2,
						children: [(0, l.jsx)(g.cC, {
							id: "common.add"
						}), " ", (0, l.jsx)(o.J, {
							label: "arrow",
							type: "caret-down"
						})]
					});
					return (0, l.jsx)(H, {
						role: "group",
						"data-testid": R,
						children: (0, l.jsx)(a.Lt, {
							trigger: K === "baseline" ? (0, l.jsxs)(Z, {
								children: [(0, l.jsx)(o.J, {
									label: "plus",
									type: "plus"
								}), !(0, v.tq)() && (0, l.jsxs)(l.Fragment, {
									children: [(0, l.jsx)(g.cC, {
										id: "common.add"
									}), " ", (0, l.jsx)(o.J, {
										label: "arrow",
										type: "caret-down"
									})]
								})]
							}) : Q(),
							menu: (0, l.jsx)(U, {
								disableProducts: L
							})
						})
					})
				},
				H = (0, E.SU)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				Z = (0, E.SU)(({
					theme: L
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: (0, S.wz)() ? x.PQ : L.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, S.wz)() ? x.PQ : (0, i.Yc)() ? L.colors.gray[1] : L.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					ml: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, S.wz)() ? x.$$ : (0, i.Yc)() ? L.colors.gray[8] : L.colors.gray[9]
					}
				}), s.zx);
			var F = z,
				q = F
		},
		"../react/app/components/LoadingSuspense.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				s = t("../node_modules/@cloudflare/elements/es/index.js"),
				p = t("../react/utils/translator.tsx"),
				i = t("../react/app/components/ErrorStatus.tsx"),
				v = t("../react/common/components/EmptyPage.jsx"),
				c = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const u = "suspenseComplete";

			function E() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(u))
				}, [])
			}

			function n(w) {
				useEventListener(u, () => {
					window.setTimeout(w, 0)
				}, {
					target: window
				})
			}

			function r(...w) {
				const [_, l] = w;
				React.useLayoutEffect(_, l), n(_)
			}
			var a = t("../../../../node_modules/react/jsx-runtime.js");

			function g(w) {
				const [_, l] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const C = window.setTimeout(() => l(!0), w);
					return () => window.clearTimeout(C)
				}, []), _
			}
			const m = ({
				loadingTimeout: w = 1e3,
				stillLoadingTimeout: _ = 9e3
			}) => {
				const l = g(w),
					C = g(_);
				if (E(), !l && !C) return (0, a.jsx)(v.Z, {});
				const f = C ? (0, a.jsx)(p.cC, {
					id: "common.still_loading"
				}) : l ? (0, a.jsx)(p.cC, {
					id: "common.loading"
				}) : null;
				return (0, a.jsxs)(i.Z, {
					size: 5,
					children: [(0, a.jsx)(s.ZC, {
						mr: 3,
						children: (0, a.jsx)(o.g, {
							size: "2x"
						})
					}), f]
				})
			};
			var h = ({
				children: w
			}) => (0, a.jsx)(e.Suspense, {
				fallback: (0, a.jsx)(m, {}),
				children: w
			})
		},
		"../react/app/components/Persistence/Persistence.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				Z_: function() {
					return k
				},
				lp: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(p),
				v = t("../react/utils/bootstrap.ts"),
				c = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/Persistence/api.ts"),
				E = t("../react/app/components/Persistence/constants.ts"),
				n = t("../react/common/hooks/useActiveState.ts"),
				r = t("../react/pages/security/resources/hooks/useUnificationGate.tsx"),
				a = t("../react/common/hooks/useGate.ts"),
				g = t("../react/common/hooks/useIsInternal.ts"),
				m = t("../../../../node_modules/react/jsx-runtime.js");

			function d(A) {
				for (var P = 1; P < arguments.length; P++) {
					var D = arguments[P] != null ? Object(arguments[P]) : {},
						b = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(D).filter(function(I) {
						return Object.getOwnPropertyDescriptor(D, I).enumerable
					})), b.forEach(function(I) {
						h(A, I, D[I])
					})
				}
				return A
			}

			function h(A, P, D) {
				return P = w(P), P in A ? Object.defineProperty(A, P, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[P] = D, A
			}

			function w(A) {
				var P = _(A, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function _(A, P) {
				if (typeof A != "object" || A === null) return A;
				var D = A[Symbol.toPrimitive];
				if (D !== void 0) {
					var b = D.call(A, P || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(A)
			}
			const l = {
					darkMode: "off",
					dismissedTasks: [],
					emailVerificationRequest: "",
					favorites: [],
					pinnedItems: {},
					recents: {},
					viewedChanges: [],
					flags: {
						hasEnabledSecurityNavigation: !1,
						hasEnabledSidebarNavGroupings: !0,
						hasEnabledDefaultUnifiedSecurity: void 0
					}
				},
				C = d({}, l, {
					isLoading: !0,
					remainingStarSlots: 10,
					isUpdatingFlags: !1,
					tasksToShowAgain: [],
					actions: {
						starZone: () => null,
						setDarkMode: () => null,
						isZoneStarred: () => !1,
						canAccountStarZone: () => !0,
						logRouteVisited: () => null,
						pinRecentRoute: () => null,
						viewChange: () => null,
						toggleSecurityNavigation: () => null,
						toggleSidebarNavGroupings: () => null,
						dismissTask: () => null,
						handleDeleteTasksToShowAgain: ([]) => null,
						handleAddTasksToShowAgain: ([]) => null
					}
				}),
				f = (0, e.createContext)(C),
				O = f.Consumer,
				k = ({
					children: A,
					onDarkModeChangeCb: P
				}) => {
					const [D, b] = (0, e.useState)(l), [I, S] = (0, e.useState)(C.isLoading), [x, $] = (0, e.useState)([]), [ne, ee] = (0, e.useState)(!1), re = (0, v.$8)(), W = (0, s.p4)(F => (0, c.wH)(F)), N = (0, g.t)(), R = !!(0, a.Z)("sidebar-nav-product-groupings"), {
						setSecurityNav: G
					} = (0, r.Ud)(), [, U] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						re ? (0, u.yl)().then(F => {
							F && (R && F.flags.hasEnabledSidebarNavGroupings === void 0 && (F.flags.hasEnabledSidebarNavGroupings = !0, (0, u.Sp)({
								hasEnabledSidebarNavGroupings: !0
							})), b(F), G(F), P(F.darkMode))
						}).finally(() => S(!1)) : S(!1)
					}, [re]), (0, e.useEffect)(() => {
						N && (window.deleteUser = u.ZN)
					}, []);
					const z = (F, q) => !!D.favorites.find(L => L.type === "zone" && L.name === F && L.accountId === q),
						H = E.W - D.favorites.length,
						Z = F => D.favorites.filter(L => L.type === "zone" && L.accountId === F).length < E.W;
					return (0, m.jsx)(f.Provider, {
						value: d({}, D, {
							isLoading: I,
							remainingStarSlots: H,
							isUpdatingFlags: ne,
							tasksToShowAgain: x,
							actions: {
								canAccountStarZone: Z,
								isZoneStarred: z,
								starZone: async (F, q) => {
									var L;
									const K = !z(F, q),
										Q = Z(q);
									if (K && !Q) {
										console.log("can not star zone - account is at limit");
										return
									}
									const ie = await (0, u.lt)(F, q);
									i().sendEvent("click star zone", {
										isStarring: K,
										totalStarredZones: ie.filter(V => V.accountId === q && V.type === "zone").length,
										totalZones: W == null || (L = W.paginationData) === null || L === void 0 ? void 0 : L.info.total_count
									}), b(d({}, D, {
										favorites: ie
									}))
								},
								toggleSidebarNavGroupings: async F => {
									await (0, u.Sp)({
										hasEnabledSidebarNavGroupings: F
									}), b(d({}, D, {
										flags: d({}, D.flags, {
											hasEnabledSidebarNavGroupings: F
										})
									}))
								},
								toggleSecurityNavigation: async (F, q) => {
									ee(!0);
									const L = q ? {
										hasEnabledDefaultUnifiedSecurity: F,
										hasEnabledSecurityNavigation: F
									} : {
										hasEnabledSecurityNavigation: F
									};
									await (0, u.Sp)(L), U(F), b(d({}, D, {
										flags: d({}, D.flags, L)
									})), i().identify(d({}, L)), ee(!1)
								},
								setDarkMode: async F => {
									P(F), D.darkMode = F, b(D);
									const q = await (0, u.C8)(F);
									b(q);
									const L = q.darkMode;
									L !== F && P(L)
								},
								logRouteVisited: async F => {
									var q;
									const L = await (0, u.n)(F);
									b((q = L) !== null && q !== void 0 ? q : d({}, D))
								},
								pinRecentRoute: async F => {
									var q, L;
									const K = F.accountId,
										Q = (q = D == null || (L = D.pinnedItems) === null || L === void 0 ? void 0 : L[K]) !== null && q !== void 0 ? q : [],
										V = Q.some(ae => ae.url === F.url) ? Q.filter(ae => ae.url !== F.url) : [...Q, F];
									b(d({}, D, {
										pinnedItems: d({}, D.pinnedItems, {
											[K]: V
										})
									})), (0, u.LC)(F)
								},
								viewChange: async F => {
									ee(!0);
									const q = await (0, u.m6)(F);
									b(d({}, D, {
										viewedChanges: q
									})), ee(!1)
								},
								dismissTask: async (F, q) => {
									const L = await (0, u.Mn)(F, q);
									b(d({}, D, {
										dismissedTasks: L
									}))
								},
								handleAddTasksToShowAgain: F => {
									$(q => {
										const L = new Set([...q, ...F]);
										return Array.from(L)
									})
								},
								handleDeleteTasksToShowAgain: F => {
									$(q => q.filter(L => !F.includes(L)))
								}
							}
						}),
						children: A
					})
				}
		},
		"../react/app/components/Persistence/api.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				C8: function() {
					return E
				},
				LC: function() {
					return r
				},
				Mn: function() {
					return m
				},
				Sp: function() {
					return g
				},
				ZN: function() {
					return i
				},
				dr: function() {
					return v
				},
				lt: function() {
					return c
				},
				m6: function() {
					return a
				},
				n: function() {
					return n
				},
				yl: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const s = "/persistence/user",
				p = async () => {
					try {
						return await (await e.get(s, {
							hideErrorAlert: !0
						})).body
					} catch (d) {
						console.error(d)
					}
				}, i = async () => {
					try {
						await e.del(s, {
							hideErrorAlert: !0
						})
					} catch (d) {
						console.error(d)
					}
				}, v = async d => {
					try {
						return await (await e.get(`/accounts/${d}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (h) {
						console.error(h)
					}
				}, c = async (d, h) => {
					try {
						return await (await e.post(`${s}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: d,
								accountId: h
							}),
							hideErrorAlert: !0
						})).body
					} catch (w) {
						return console.error(w), []
					}
				}, u = async (d, h) => {
					try {
						return await http.post(`/accounts/${d}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: h
							}),
							hideErrorAlert: !0
						}), !0
					} catch (w) {
						return console.error(w), !1
					}
				}, E = async d => {
					try {
						return await (await e.post(s, {
							body: JSON.stringify({
								darkMode: d
							})
						})).body
					} catch (h) {
						console.error(h)
					}
				}, n = async d => {
					try {
						return await (await e.post(`${s}/recents`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (h) {
						console.error(h)
					}
				}, r = async d => {
					try {
						return await (await e.post(`${s}/pinned-items`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (h) {
						throw console.error(h), h
					}
				}, a = async d => {
					try {
						return await (await e.post(`${s}/viewed-changes`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (h) {
						throw console.error(h), h
					}
				}, g = async d => {
					try {
						return await (await e.post(s + "/flags", {
							body: JSON.stringify(d)
						})).body
					} catch (h) {
						throw console.error(h), h
					}
				}, m = async (d, h) => {
					try {
						return await (await e.post(`${s}/dismissed-tasks`, {
							body: JSON.stringify({
								name: d,
								accountId: h
							}),
							hideErrorAlert: !0
						})).body
					} catch (w) {
						throw console.error(w), w
					}
				}
		},
		"../react/app/components/Persistence/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				F: function() {
					return o
				},
				W: function() {
					return e
				}
			});
			const e = 10,
				o = 6
		},
		"../react/app/components/Persistence/hooks.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				y: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/components/Persistence/index.tsx");
			const p = () => (0, e.useContext)(s.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				Wl: function() {
					return s.W
				},
				F3: function() {
					return s.F
				},
				lp: function() {
					return e.lp
				},
				Z_: function() {
					return e.Z_
				},
				r7: function() {
					return h
				},
				Tv: function() {
					return A
				},
				yZ: function() {
					return o.y
				}
			});
			var e = t("../react/app/components/Persistence/Persistence.tsx"),
				o = t("../react/app/components/Persistence/hooks.ts"),
				s = t("../react/app/components/Persistence/constants.ts"),
				p = t("webpack/sharing/consume/default/react/react"),
				i = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				v = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				c = t("../../../../node_modules/react/jsx-runtime.js");

			function u(P) {
				for (var D = 1; D < arguments.length; D++) {
					var b = arguments[D] != null ? Object(arguments[D]) : {},
						I = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(b).filter(function(S) {
						return Object.getOwnPropertyDescriptor(b, S).enumerable
					})), I.forEach(function(S) {
						E(P, S, b[S])
					})
				}
				return P
			}

			function E(P, D, b) {
				return D = n(D), D in P ? Object.defineProperty(P, D, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[D] = b, P
			}

			function n(P) {
				var D = r(P, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function r(P, D) {
				if (typeof P != "object" || P === null) return P;
				var b = P[Symbol.toPrimitive];
				if (b !== void 0) {
					var I = b.call(P, D || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(P)
			}

			function a(P, D) {
				if (P == null) return {};
				var b = g(P, D),
					I, S;
				if (Object.getOwnPropertySymbols) {
					var x = Object.getOwnPropertySymbols(P);
					for (S = 0; S < x.length; S++) I = x[S], !(D.indexOf(I) >= 0) && (!Object.prototype.propertyIsEnumerable.call(P, I) || (b[I] = P[I]))
				}
				return b
			}

			function g(P, D) {
				if (P == null) return {};
				var b = {},
					I = Object.keys(P),
					S, x;
				for (x = 0; x < I.length; x++) S = I[x], !(D.indexOf(S) >= 0) && (b[S] = P[S]);
				return b
			}
			const m = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var h = P => {
					let {
						isStarred: D,
						size: b = 16
					} = P, I = a(P, ["isStarred", "size"]);
					const S = m[(0, i.Yc)() ? "dark" : "light"];
					return (0, c.jsx)(v.J, u({
						type: D ? "star" : "star-outline",
						color: D ? S.gold : S.gray,
						size: b
					}, I))
				},
				w = t("../node_modules/@cloudflare/elements/es/index.js");

			function _(P) {
				for (var D = 1; D < arguments.length; D++) {
					var b = arguments[D] != null ? Object(arguments[D]) : {},
						I = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(b).filter(function(S) {
						return Object.getOwnPropertyDescriptor(b, S).enumerable
					})), I.forEach(function(S) {
						l(P, S, b[S])
					})
				}
				return P
			}

			function l(P, D, b) {
				return D = C(D), D in P ? Object.defineProperty(P, D, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[D] = b, P
			}

			function C(P) {
				var D = f(P, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function f(P, D) {
				if (typeof P != "object" || P === null) return P;
				var b = P[Symbol.toPrimitive];
				if (b !== void 0) {
					var I = b.call(P, D || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(P)
			}
			const O = {
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
			var A = (0, p.forwardRef)(({
				featurePreview: P = !1,
				isStarred: D,
				onClickFn: b,
				isDisabled: I,
				testId: S,
				buttonText: x,
				size: $ = "large",
				variant: ne = "pill"
			}, ee) => {
				const [re, W] = (0, p.useState)(!1), N = O[(0, i.Yc)() ? "dark" : "light"][D && !P ? "active" : "default"], R = _({}, $ === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, $ === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, $ === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), G = {
					pill: "50vh",
					button: 4
				};
				return (0, c.jsxs)(w.zx, {
					onMouseEnter: () => W(!0),
					onMouseLeave: () => W(!1),
					innerRef: ee,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: R.paddingRight,
					gap: 1,
					pl: R.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: G[ne],
					border: "1px solid",
					cursor: P || I ? "default" : "pointer",
					backgroundColor: re ? N.bgHover : N.bg,
					color: N.text,
					borderColor: N.border,
					onClick: b,
					opacity: I ? .5 : 1,
					disabled: I,
					fontSize: R.fontSize,
					height: R.height,
					"data-testid": S,
					children: [(0, c.jsx)(h, {
						isStarred: P ? !1 : D,
						size: R.starIconSize
					}), x]
				})
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				iY: function() {
					return C
				},
				us: function() {
					return x
				},
				wB: function() {
					return f
				},
				gw: function() {
					return re
				},
				dL: function() {
					return P
				},
				IU: function() {
					return A
				},
				Wq: function() {
					return ne
				},
				fO: function() {
					return $
				},
				zJ: function() {
					return S
				},
				o_: function() {
					return I
				},
				Id: function() {
					return N
				},
				jq: function() {
					return W
				},
				hv: function() {
					return k
				},
				$n: function() {
					return O
				}
			});
			var e = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				o = t("../react/common/components/AccessCheck/index.ts"),
				s = t("../react/common/selectors/accountSelectors.ts"),
				p = t("../react/common/selectors/entitlementsSelectors.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				v = t("../react/utils/zoneLevelAccess.ts"),
				c = t("../react/pages/home/configurations/dns-settings/isZoneDNSOnly.tsx"),
				u = t("../react/pages/home/domain-registration/selectors.ts"),
				E = t("../react/pages/images/selectors.ts");
			const n = "r2_migrator_waitlist",
				r = "r2migrator",
				a = "r2",
				g = "r2_storage_migrator",
				m = "r2_storage_migrator",
				d = R => getAccountEntitlement(R, "r2.enabled"),
				h = R => Boolean((0, i.Le)(R, g, n)),
				w = R => Boolean(getAccountFlipperFlagsChanges(R, m, r));
			var _ = t("../react/pages/stream/selectors.ts");
			const l = R => !!(0, v.b)(R),
				C = R => l(R) ? (0, o.hT)(R) : !0,
				f = (R, G, U, z = "read") => {
					const H = (0, i.nA)(R);
					return l(R) ? (0, o.WL)(R, (0, o.W9)(U, o.ZZ[z]), (0, o.j)(H == null ? void 0 : H.id)) : (0, s.Yj)(R)(G)[z]
				},
				O = (R, G, U, z = "read") => {
					const H = (0, i.nA)(R),
						Z = o.zs.includes(U);
					return l(R) ? (0, o.WL)(R, Z ? U : (0, o.my)(U, o.ZZ[z === "edit" ? "update" : z]), (0, o.j)(H == null ? void 0 : H.id)) : (0, s.Yj)(R)(G)[z === "update" ? "edit" : z]
				},
				k = R => !!(0, _._Q)(R),
				A = R => (0, E.pT)(R),
				P = R => (0, E.pT)(R) && (0, E.GH)(R),
				D = R => sourcingKitEnabledSelector(R),
				b = R => !!r2EnabledSelector(R),
				I = R => h(R),
				S = R => (0, p.$f)(R, "rulesets.magic_transit_allowed"),
				x = R => (0, p.$f)(R, "flowtrackd.magic_custom_config_allowed"),
				$ = R => (0, p.$f)(R, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				ne = R => (0, s.Le)(R, "ddos_protection", "l4_rulesets"),
				ee = R => hasAccountEntitlements(R, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				re = R => (0, u.HO)(R),
				W = R => !(0, p.yD)(R) && !!O(R, "ssl", "ssl.cert"),
				N = R => {
					const G = (0, i.nA)(R),
						U = (0, s.D0)(R),
						z = !!(0, e.z1)("zone-level-rum")(R);
					return !!U && (0, o.WL)(R, (0, o.jX)("rum.analytics", o.ZZ.read), (0, o.L8)(U.id)) && (G == null ? void 0 : G.status) === "active" && z && !(0, c.s)(R)
				}
		},
		"../react/app/components/SomethingWrong.jsx": function(B, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = t.n(s),
				i = t("../../../../node_modules/prop-types/index.js"),
				v = t.n(i),
				c = t("webpack/sharing/consume/default/react-redux/react-redux"),
				u = t.n(c),
				E = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(E),
				r = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				a = t("../../../../node_modules/@cloudflare/component-button/es/index.js"),
				g = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				m = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				d = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				h = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				w = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				_ = t.n(w),
				l = t("../react/common/actions/membershipActions.ts"),
				C = t("../react/utils/url.ts"),
				f = t("../react/app/components/Footer.tsx"),
				O = t("../../../../node_modules/react/jsx-runtime.js");

			function k(N) {
				for (var R = 1; R < arguments.length; R++) {
					var G = arguments[R] != null ? Object(arguments[R]) : {},
						U = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(G).filter(function(z) {
						return Object.getOwnPropertyDescriptor(G, z).enumerable
					})), U.forEach(function(z) {
						A(N, z, G[z])
					})
				}
				return N
			}

			function A(N, R, G) {
				return R = P(R), R in N ? Object.defineProperty(N, R, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[R] = G, N
			}

			function P(N) {
				var R = D(N, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function D(N, R) {
				if (typeof N != "object" || N === null) return N;
				var G = N[Symbol.toPrimitive];
				if (G !== void 0) {
					var U = G.call(N, R || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(N)
			}
			const b = (0, r.LM)(({
					type: N
				}) => ({
					height: N !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				I = (0, r.LM)(({
					theme: N,
					margin: R,
					size: G = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: N.colors.gray[3],
					height: R ? "auto" : "100%",
					padding: R ? 0 : N.space[G > 1 ? G - 2 : 0],
					margin: R,
					justifyContent: "center",
					alignItems: "center"
				})),
				S = (0, r.LM)(() => ({
					textAlign: "left"
				})),
				x = (0, r.LM)(() => ({
					textAlign: "right"
				})),
				$ = (0, r.LM)(({
					theme: N
				}) => ({
					fontSize: N.fontSizes[6]
				})),
				ne = (0, r.LM)(({
					theme: N
				}) => ({
					fontSize: N.fontSizes[4]
				})),
				ee = (0, r.LM)(({
					theme: N
				}) => ({
					fontSize: N.fontSizes[3]
				})),
				re = (0, r.LM)(({
					theme: N
				}) => ({
					width: "100%",
					height: 125,
					marginTop: N.space[4],
					padding: N.space[2]
				}), "textarea");
			class W extends o().Component {
				constructor(...R) {
					super(...R);
					A(this, "state", {
						value: "",
						submitted: !1
					}), A(this, "handleTextareaChange", G => {
						this.setState({
							value: G.target.value
						})
					}), A(this, "sendErrToSentry10", async () => {
						try {
							var G, U, z, H;
							const Z = ((G = window) === null || G === void 0 || (U = G.bootstrap) === null || U === void 0 || (z = U.data) === null || z === void 0 || (H = z.user) === null || H === void 0 ? void 0 : H.id) || "Unknown",
								F = this.props.eventId || g.eW(),
								q = {
									name: Z,
									email: `${Z}@userid.com`,
									comments: this.state.value,
									eventId: F,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: k({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(q)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (Z) {
							console.error(Z)
						}
					}), A(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), A(this, "renderContent", G => (0, O.jsx)(E.I18n, {
						children: U => (0, O.jsx)(b, {
							type: G,
							children: (0, O.jsx)(I, {
								children: (0, O.jsxs)(S, {
									children: [(0, O.jsx)($, {
										children: U.t("error.internal_issues")
									}), (0, O.jsx)(ne, {
										children: U.t("error.help_us")
									}), (0, O.jsx)(re, {
										name: "comment",
										value: this.state.textareaValue,
										onChange: z => this.handleTextareaChange(z),
										disabled: this.state.submitted,
										placeholder: U.t("error.give_feedback")
									}), (0, O.jsxs)(x, {
										children: [!this.state.submitted && (0, O.jsx)(a.zx, {
											onClick: this.handleSubmit,
											type: "primary",
											children: U.t("common.submit")
										}), this.state.submitted && (0, O.jsx)(ee, {
											children: U.t("error.feedback_sent")
										})]
									})]
								})
							})
						})
					}))
				}
				async componentDidMount() {
					const {
						error: R,
						sentryTag: G,
						membershipsList: U
					} = this.props;
					console.error(`SomethingWrong: ${R}`);
					let z = "";
					const H = (0, C.e1)();
					if (H) {
						var Z;
						const q = await U({
								parameters: {
									status: "accepted"
								}
							}),
							L = q == null || (Z = q.find(K => K.id === H)) === null || Z === void 0 ? void 0 : Z.roles;
						L && L.length && (z = L.join(", "))
					}
					const F = `ErrorBoundary - ${R}`;
					m.Tb(F, {
						tags: {
							errorBoundary: G,
							normalizedPath: (0, C.Fl)(window.location.pathname),
							roles: z.length ? z : void 0
						}
					}), _().sendEvent("something wrong", {
						error: R,
						roles: z.length ? z : void 0
					})
				}
				render() {
					const {
						type: R
					} = this.props;
					return R === "fullscreen" ? (0, O.jsxs)("div", {
						children: [(0, O.jsx)(d.h4, {
							children: (0, O.jsx)(s.Link, {
								to: "/",
								children: (0, O.jsx)(h.TR, {})
							})
						}), this.renderContent(R), (0, O.jsx)(f.Z, {})]
					}) : this.renderContent(R)
				}
			}
			W.propTypes = {
				type: v().oneOf(["fullscreen", "page"]),
				error: v().oneOfType([v().string, v().object]),
				eventId: v().string,
				sentryTag: v().string,
				membershipsList: v().func
			}, y.Z = (0, c.connect)(() => ({}), {
				membershipsList: l.YT
			})(W)
		},
		"../react/app/providers/storeContainer.js": function(B, y, t) {
			"use strict";
			t.d(y, {
				bh: function() {
					return S
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				o = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				s = t.n(o),
				p = t("../../../../node_modules/redux-thunk/es/index.js"),
				i = t("../../../../node_modules/redux-persist/es/index.js"),
				v = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				c = t("../react/app/rootReducer.js"),
				u = t("../react/app/redux/normalizer.js"),
				E = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				r = t("../react/app/reducerRegistry.js"),
				a = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				g = t("../react/common/sagas/index.js"),
				m = t("../react/app/redux/processActionMiddleware.js"),
				d = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				h = t("../../../../node_modules/is-promise/index.js"),
				w = t.n(h);

			function _(x) {
				for (var $ = 1; $ < arguments.length; $++) {
					var ne = arguments[$] != null ? Object(arguments[$]) : {},
						ee = Object.keys(ne);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(ne).filter(function(re) {
						return Object.getOwnPropertyDescriptor(ne, re).enumerable
					})), ee.forEach(function(re) {
						l(x, re, ne[re])
					})
				}
				return x
			}

			function l(x, $, ne) {
				return $ = C($), $ in x ? Object.defineProperty(x, $, {
					value: ne,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[$] = ne, x
			}

			function C(x) {
				var $ = f(x, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function f(x, $) {
				if (typeof x != "object" || x === null) return x;
				var ne = x[Symbol.toPrimitive];
				if (ne !== void 0) {
					var ee = ne.call(x, $ || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(x)
			}
			const O = {
					key: "cf-redux-store",
					storage: v.Z,
					whitelist: ["accountAccess", "invite"]
				},
				k = (0, a.ZP)(),
				P = [({
					dispatch: x
				}) => $ => ne => w()(ne) ? ne.then(ee => x(ee)) : $(ne), k, p.Z, m.Z, u.qR],
				D = x => (0, i.Wq)(O, _({}, c.Z, x));

			function b() {
				const x = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					ne = e.compose((0, e.applyMiddleware)(...P), E.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					ee = {},
					re = (0, e.createStore)(D(r.Z.getReducers()), ee, ne);
				k.run(g.Z), (0, i.p5)(re);
				const N = (t.g.bootstrap || {}).data || {};
				return re.dispatch((0, d.mW)("user", N.user)), re
			}
			let I;
			r.Z.setChangeListener(x => {
				var $;
				I && (($ = I) === null || $ === void 0 ? void 0 : $.replaceReducer) && (I.replaceReducer(D(x)), (0, i.p5)(I))
			});

			function S() {
				return I || (I = b()), I
			}
		},
		"../react/app/redux/index.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				RA: function() {
					return v
				},
				TZ: function() {
					return i
				},
				UM: function() {
					return E
				},
				ZS: function() {
					return c
				},
				p4: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react/react"),
				p = t.n(s);
			const i = () => (0, e.useStore)(),
				v = () => i().getState(),
				c = () => {
					const r = i(),
						[a, g] = (0, s.useState)(r.getState());
					return (0, s.useEffect)(() => r.subscribe(() => {
						g(r.getState())
					}), [r]), a
				},
				u = () => {
					const r = i(),
						[a, g] = useState(r.getState());
					return useEffect(() => r.subscribe(() => {
						g(r.getState())
					}), [r]), a
				},
				E = () => (0, e.useDispatch)(),
				n = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(B, y, t) {
			"use strict";
			t.d(y, {
				$J: function() {
					return a
				},
				Oy: function() {
					return r
				},
				SC: function() {
					return E
				},
				ZP: function() {
					return g
				},
				dJ: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				s = t.n(o);

			function p(m) {
				for (var d = 1; d < arguments.length; d++) {
					var h = arguments[d] != null ? Object(arguments[d]) : {},
						w = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(h).filter(function(_) {
						return Object.getOwnPropertyDescriptor(h, _).enumerable
					})), w.forEach(function(_) {
						i(m, _, h[_])
					})
				}
				return m
			}

			function i(m, d, h) {
				return d = v(d), d in m ? Object.defineProperty(m, d, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[d] = h, m
			}

			function v(m) {
				var d = c(m, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function c(m, d) {
				if (typeof m != "object" || m === null) return m;
				var h = m[Symbol.toPrimitive];
				if (h !== void 0) {
					var w = h.call(m, d || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(m)
			}
			const u = p({}, o),
				E = (m, d, h, w = {}) => {
					const _ = m === "delete" ? "del" : m.toLowerCase();
					return h && _ !== "del" && (w.body = h), u[_](d, w)
				},
				n = (m, d) => (m.meta.params = d, m),
				r = (m, d, h, w, {
					body: _ = {}
				}) => {
					const {
						result: l,
						messages: C,
						result_info: f
					} = _, O = Object.values(d);
					if (m.meta.method === "delete") {
						const k = O[O.length - 1];
						m.meta.id = typeof k == "object" ? k.id : k
					}
					return m.payload = l, C && (m.meta.messages = C), O.length && (m.meta.params = d), f && (m.meta.paginationData = {
						info: f,
						actionParameters: O,
						options: h[0],
						insertionOffset: 0
					}), m
				},
				a = (m, d, h, w, _) => (m.payload = _ && _.body && _.body.errors, m.meta.messages = _ && _.body && _.body.messages, m.meta.params = d, m.apiError = _, m);

			function g(m, d, h, w) {
				const _ = (0, e.RM)(m, d, h, w).apiFetch(E).on("start", n).on("success", r).on("error", a),
					l = _.mock;
				return _.mock = C => (l((...f) => {
					const O = C(...f);
					return O && typeof O == "object" && "result" in O ? O : {
						result: O
					}
				}), _), _
			}
		},
		"../react/app/redux/normalizer.js": function(B, y, t) {
			"use strict";
			t.d(y, {
				P1: function() {
					return E
				},
				jQ: function() {
					return c
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
				s = t("../react/pages/email/types.ts"),
				p = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				i = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				v = t.n(i);
			const c = i.static.from([{
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
					entityType: "organizations"
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
				u = r => r.entities,
				E = (...r) => (0, p.P1)(c, u, ...r),
				n = (0, p.QB)(c)
		},
		"../react/app/redux/utils.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				F: function() {
					return s
				},
				_: function() {
					return o
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const o = p => (i, v, c) => (0, e.SC)(i, v, c, {
					hideErrorAlert: !0
				}).catch(p),
				s = p => i => {
					if (i.status === p) return i;
					throw i
				}
		},
		"../react/common/actionTypes.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Cm: function() {
					return v
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return c
				},
				Li: function() {
					return E
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return s
				},
				Yc: function() {
					return r
				},
				gM: function() {
					return p
				},
				lV: function() {
					return i
				},
				s1: function() {
					return u
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				s = "MODAL_OPEN",
				p = "MODAL_CLOSE",
				i = "TOGGLE_ON",
				v = "TOGGLE_OFF",
				c = "SET_ACTIVE",
				u = "CLEAR_ACTIVE",
				E = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(a) {
				return a.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", a.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", a.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", a.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", a.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", a.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", a.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", a.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", a.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", a
			}({})
		},
		"../react/common/actions/activeActions.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				I: function() {
					return o
				},
				n: function() {
					return s
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = (p, i) => ({
					type: e.HI,
					activeKey: p,
					activeValue: i
				}),
				s = p => ({
					type: e.s1,
					activeKey: p
				})
		},
		"../react/common/actions/membershipActions.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return a
				},
				YT: function() {
					return E
				},
				ct: function() {
					return c
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

			function s(g) {
				for (var m = 1; m < arguments.length; m++) {
					var d = arguments[m] != null ? Object(arguments[m]) : {},
						h = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(d).filter(function(w) {
						return Object.getOwnPropertyDescriptor(d, w).enumerable
					})), h.forEach(function(w) {
						p(g, w, d[w])
					})
				}
				return g
			}

			function p(g, m, d) {
				return m = i(m), m in g ? Object.defineProperty(g, m, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[m] = d, g
			}

			function i(g) {
				var m = v(g, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function v(g, m) {
				if (typeof g != "object" || g === null) return g;
				var d = g[Symbol.toPrimitive];
				if (d !== void 0) {
					var h = d.call(g, m || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(g)
			}
			const c = g => {
					const m = g.payload.map(d => s({}, d, {
						membershipId: d.id,
						id: d.account.id
					}));
					return s({}, g, {
						payload: m
					})
				},
				u = g => {
					const m = c(g);
					return Array.isArray(m.payload) ? s({}, g, {
						payload: m.payload[0]
					}) : s({}, g, {
						payload: null
					})
				},
				E = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", c),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...g) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: g
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", u)
		},
		"../react/common/actions/modalActions.ts": function(B, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				closeModal: function() {
					return p
				},
				openModal: function() {
					return s
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function s(i, v, c = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: i,
						props: v
					},
					options: c
				}
			}

			function p(i) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: i
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(B, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				add: function() {
					return i
				},
				error: function() {
					return E
				},
				info: function() {
					return c
				},
				success: function() {
					return v
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

			function s(n) {
				return {
					type: e.Cz,
					notificationId: n
				}
			}
			let p = 0;

			function i(n, r, a = {}) {
				return a = a || {},
					function(g) {
						let m = p++,
							d = {
								id: m,
								type: n,
								message: r,
								delay: a.delay,
								persist: a.persist === void 0 ? !1 : a.persist,
								closable: a.closable === void 0 ? !0 : a.closable,
								onClose() {
									g(s(m)), a.onClose && a.onClose.apply(null, arguments)
								}
							};
						g(o(d))
					}
			}

			function v(n, r) {
				return i("success", n, r)
			}

			function c(n, r) {
				return i("info", n, r)
			}

			function u(n, r) {
				return i("warning", n, r)
			}

			function E(n, r) {
				return i("error", n, r)
			}
		},
		"../react/common/actions/userActions.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				BT: function() {
					return c
				},
				Ut: function() {
					return w
				},
				V_: function() {
					return _
				},
				Y9: function() {
					return d
				},
				Z0: function() {
					return C
				},
				mp: function() {
					return h
				},
				r3: function() {
					return l
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/app/redux/utils.ts");

			function s(f) {
				for (var O = 1; O < arguments.length; O++) {
					var k = arguments[O] != null ? Object(arguments[O]) : {},
						A = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(k).filter(function(P) {
						return Object.getOwnPropertyDescriptor(k, P).enumerable
					})), A.forEach(function(P) {
						p(f, P, k[P])
					})
				}
				return f
			}

			function p(f, O, k) {
				return O = i(O), O in f ? Object.defineProperty(f, O, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[O] = k, f
			}

			function i(f) {
				var O = v(f, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function v(f, O) {
				if (typeof f != "object" || f === null) return f;
				var k = f[Symbol.toPrimitive];
				if (k !== void 0) {
					var A = k.call(f, O || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(f)
			}
			const c = (0, e.C)("user").get`/user`,
				u = (0, e.C)("user").patch`/user`,
				E = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				g = (0, e.C)("user").delete`/user/two_factor_authentication`,
				m = (0, e.C)("user").put`/user/email`;

			function d(...f) {
				return m(...f)
			}
			const h = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				w = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(f => s({}, f, {
					body: s({}, f.body, {
						result: {}
					})
				}))),
				_ = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				l = (0, e.C)("userDetails").get`/user/details`,
				C = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AuthzContext.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				Hf: function() {
					return O
				},
				we: function() {
					return k
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				i = t("../react/utils/url.ts"),
				v = t("../../../../node_modules/lodash/lodash.js"),
				c = t("../../../../node_modules/swr/core/dist/index.mjs");
			const u = async () => {
				var b;
				const I = await fetch("/api/v4/user/iam/dash-authz-eval-roles");
				if (!I.ok) throw new Error(`Failed to fetch authz eval roles: ${I.status}`);
				const S = await I.json();
				if (((b = S.result) === null || b === void 0 ? void 0 : b.roles) === void 0 || !(0, v.isArray)(S.result.roles)) throw new Error(`Unexpected authz eval roles API response shape: ${JSON.stringify(S.result)}`);
				return S.result.roles
			};

			function E() {
				const {
					data: b,
					error: I,
					isLoading: S
				} = (0, c.ZP)("user/iam/dash-authz-eval-roles", u, {
					dedupingInterval: 24 * 60 * 60 * 1e3,
					revalidateOnFocus: !0,
					focusThrottleInterval: 24 * 60 * 60 * 1e3,
					revalidateOnReconnect: !1
				});
				return {
					roles: b || null,
					isLoading: S,
					error: (I == null ? void 0 : I.message) || null
				}
			}
			var n = t("../react/common/components/AccessCheck/useAccountParentOrgs.ts"),
				r = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts");
			const a = 60 * 1e3,
				g = new Set(["b7db8a5d0e51afce2d33ea16d8219fc6", "3576b716b54efb9e7851fe9e7a22e440", "ca11caa2415c966f6fb75f025ed1f354", "56517c9d595ec8e23d789fd2c6d18990", "340188bc4fd1e745704cedf68408ff05", "3f96cb3e7cb3fa852b055b63baf69624"]),
				m = async () => {
					var b;
					const I = await fetch("/api/v4/user/iam/policies");
					if (!I.ok) throw new Error(`Failed to fetch authz policies: ${I.status}`);
					const S = await I.json(),
						x = S == null || (b = S.result) === null || b === void 0 ? void 0 : b.policies;
					if (!x || !(0, v.isArray)(x) || x.length === 0) throw new Error(`Unexpected authz policies API response shape: ${JSON.stringify(x)}`);
					return x
				};

			function d(b) {
				var I;
				const S = !!b,
					x = g.has((I = b) !== null && I !== void 0 ? I : ""),
					$ = S && !x,
					{
						data: ne,
						error: ee,
						isLoading: re,
						mutate: W
					} = (0, c.ZP)($ ? `user/iam/policies/${b}` : null, () => m(), {
						dedupingInterval: a,
						revalidateOnFocus: !0,
						focusThrottleInterval: a,
						revalidateOnReconnect: !1
					}),
					N = async () => {
						!$ || W()
					};
				return {
					policies: ne || null,
					isLoading: $ ? re : !1,
					isLoadingSkippedByUserID: x,
					error: (ee == null ? void 0 : ee.message) || null,
					refresh: N
				}
			}
			var h = t("../../../../node_modules/react/jsx-runtime.js");

			function w(b) {
				for (var I = 1; I < arguments.length; I++) {
					var S = arguments[I] != null ? Object(arguments[I]) : {},
						x = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(S).filter(function($) {
						return Object.getOwnPropertyDescriptor(S, $).enumerable
					})), x.forEach(function($) {
						_(b, $, S[$])
					})
				}
				return b
			}

			function _(b, I, S) {
				return I = l(I), I in b ? Object.defineProperty(b, I, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[I] = S, b
			}

			function l(b) {
				var I = C(b, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function C(b, I) {
				if (typeof b != "object" || b === null) return b;
				var S = b[Symbol.toPrimitive];
				if (S !== void 0) {
					var x = S.call(b, I || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(b)
			}
			const f = new Set,
				O = o().createContext(void 0);

			function k({
				children: b,
				userID: I,
				isUserInDSR: S
			}) {
				var x;
				const $ = d(I),
					ne = (0, p.useHistory)(),
					ee = (0, i.uW)(ne.location.pathname),
					re = (0, n.I)((x = S) !== null && x !== void 0 ? x : !0, ee),
					W = E();
				(0, r.k)(ee);
				const N = {
					isUserInDSR: S,
					contextAccountTag: ee,
					contextAccountOrgsState: re,
					allRolesState: W,
					policiesState: $,
					refreshPolicies: $.refresh,
					reportSentryException: P
				};
				return (0, h.jsx)(O.Provider, {
					value: N,
					children: b
				})
			}
			const A = () => {
					const b = useContext(O);
					if (!b) throw new Error("useRefreshPolicies must be used within a PoliciesProvider");
					return b.refreshPolicies
				},
				P = (b, I, S) => {
					const {
						parentComponent: x,
						stackSummary: $
					} = D(b), ne = `${I.component}->${$}->${I.component_issue}`;
					f.has(ne) || (f.add(ne), s.Tb(b, {
						tags: w({
							parentComponent: x
						}, I),
						extra: w({
							stackSummary: $
						}, S),
						level: "error"
					}))
				},
				D = b => {
					var I;
					const x = (b.stack || "").split(`
`),
						$ = [];
					for (const ee of x) {
						const re = [/at (\w+)\s+\(/, /at Object\.(\w+)/, /(\w+)@/, /\/(\w+)\.tsx?:/, /\/(\w+)\.jsx?:/];
						for (const W of re) {
							const N = ee.match(W);
							if (N && N[1] && !["Object", "eval", "anonymous"].includes(N[1])) {
								$.push(N[1]);
								break
							}
						}
					}
					const ne = [...new Set($)].filter(ee => !["useIsAuthorized", "renderWithHooks", "updateFunctionComponent"].includes(ee)).slice(0, 5);
					return {
						parentComponent: (I = ne[0]) !== null && I !== void 0 ? I : "undefined",
						stackSummary: ne.join(" \u2192 ")
					}
				}
		},
		"../react/common/components/AccessCheck/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				E1: function() {
					return o
				},
				L8: function() {
					return n
				},
				W9: function() {
					return E
				},
				ZZ: function() {
					return v
				},
				j: function() {
					return r
				},
				jX: function() {
					return c
				},
				my: function() {
					return u
				},
				u1: function() {
					return e
				},
				zs: function() {
					return i
				}
			});
			const e = "com.cloudflare.api.account",
				o = "com.cloudflare.api.account.",
				s = "com.cloudflare.edge.",
				p = "com.cloudflare.api.account.zone.",
				i = ["com.cloudflare.api.app.manage"];
			let v = function(a) {
				return a.read = "read", a.list = "list", a.create = "create", a.update = "update", a.delete = "delete", a.sign = "sign", a.refresh = "refresh", a
			}({});
			const c = (a, g) => `${o}${a?a+".":""}${g}`,
				u = (a, g) => `${p}${a?a+".":""}${g}`,
				E = (a, g) => `${s}${a}.${g}`,
				n = (a = "") => `${o}${a}`,
				r = (a = "") => `${p}${a}`
		},
		"../react/common/components/AccessCheck/index.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				E1: function() {
					return u.E1
				},
				zs: function() {
					return u.zs
				},
				hT: function() {
					return i.hT
				},
				WL: function() {
					return i.WL
				},
				kd: function() {
					return i.kd
				},
				ZP: function() {
					return p
				},
				jX: function() {
					return u.jX
				},
				L8: function() {
					return u.L8
				},
				W9: function() {
					return u.W9
				},
				my: function() {
					return u.my
				},
				j: function() {
					return u.j
				},
				ZZ: function() {
					return u.ZZ
				},
				xk: function() {
					return e.Z
				},
				bk: function() {
					return v.b
				}
			});
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/utils/zoneLevelAccess.ts"),
				p = ({
					legacyPermission: E,
					canAccess: n,
					children: r,
					render: a
				}) => {
					const g = !!(0, o.P)();
					let m;
					typeof n == "boolean" && n !== void 0 && g ? m = {
						read: n,
						list: n,
						create: n,
						update: n,
						delete: n,
						sign: n
					} : m = (0, e.Z)(E);
					const d = a || r;
					return d ? d(m) : null
				},
				i = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				v = t("../react/common/components/AccessCheck/useIsAuthorized.ts"),
				c = t("../react/common/components/AccessCheck/useIsAuthorizedMulti.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(B, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				p = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/pages/zone-versioning/selectors.ts");

			function v(c) {
				const {
					read: u,
					edit: E
				} = (0, s.p4)(p.Yj)(c);
				let n = E;
				if (c != "zone_versioning") {
					const a = (0, s.p4)(i.G);
					(a == null ? void 0 : a.isLocked) && (n = !1)
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
			y.Z = v
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				F3: function() {
					return _
				},
				WL: function() {
					return g
				},
				YB: function() {
					return m
				},
				_S: function() {
					return d
				},
				hT: function() {
					return h
				},
				kd: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				o = t("../../../../node_modules/lodash-es/isString.js"),
				s = t("../react/pages/home/members/utils.ts"),
				p = t("../react/common/components/AccessCheck/constants.ts"),
				i = t("../react/pages/zone-versioning/selectors.ts"),
				v = t("../react/common/selectors/accountSelectors.ts");
			const c = {
					allow: "allow",
					deny: "deny"
				},
				u = 0,
				E = 1,
				n = 2,
				r = 3;

			function a(A, P, D, b) {
				let I = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					S;
				for (S in I) I[S] = g(A, `${P}.${S}`, D, b);
				return I
			}

			function g(A, P, D, b) {
				var I;
				if (m(P) && !d(P)) {
					const ee = (0, i.G)(A);
					if (ee == null ? void 0 : ee.isLocked) return !1
				}
				const S = (I = (0, v.D0)(A)) === null || I === void 0 ? void 0 : I.id,
					x = S ? [`com.cloudflare.api.account.${S}`] : void 0,
					$ = (0, s.vq)(S);
				return !!w(A, $, P, D, b || x)
			}

			function m(A) {
				return ![p.ZZ.read, p.ZZ.list].some(P => A.endsWith(P))
			}

			function d(A) {
				return A.includes("zone.versioning")
			}

			function h(A) {
				const P = (0, v.Ko)(A);
				let D = !1;
				return P == null || P.forEach(b => {
					b.access === c.allow && b.permission_groups.forEach(I => {
						var S;
						(I == null || (S = I.meta) === null || S === void 0 ? void 0 : S.scopes) === p.u1 && (D = !0)
					})
				}), D
			}

			function w(A, P, D, b, I) {
				const S = (0, v.Ko)(A),
					x = {};
				S == null || S.forEach(re => {
					var W;
					const N = re.access;
					let R = u;
					if (D && re.permission_groups.forEach(G => {
							var U, z;
							P == null || (U = P.find(H => H.id === G.id)) === null || U === void 0 || (z = U.permissions) === null || z === void 0 || z.forEach(H => {
								R = Math.max(R, l(H, D))
							})
						}), R !== u && !!b) {
						let G = u;
						re.resource_groups.forEach(U => {
							G = Math.max(G, f(U.scope, b, I))
						}), R = G === u ? G : R + G
					}(x == null || (W = x[N]) === null || W === void 0 ? void 0 : W[R]) || (0, e.Z)(x, [N, R], []), x[N][R].push(re)
				});
				const $ = x[c.allow] && Object.keys(x[c.allow]).map(re => parseInt(re)),
					ne = x[c.deny] && Object.keys(x[c.deny]).map(re => parseInt(re)),
					ee = Math.max.apply(Math, $);
				return ee === u || Math.max.apply(Math, ne) >= ee ? null : x[c.allow][ee]
			}

			function _(A, P, D, b, I) {
				const S = {};
				A == null || A.forEach(ee => {
					var re;
					const W = ee.access;
					let N = u;
					if (D && ee.roles.forEach(R => {
							var G;
							const U = P == null ? void 0 : P.find(z => z.id === R.id);
							U == null || (G = U.permissions) === null || G === void 0 || G.forEach(z => {
								N = Math.max(N, l({
									key: z,
									id: "irrelevant"
								}, D))
							})
						}), N !== u && !!b) {
						let R = u;
						ee.scopes.forEach(G => {
							R = Math.max(R, f(G, b, I))
						}), N = R === u ? R : N + R
					}(S == null || (re = S[W]) === null || re === void 0 ? void 0 : re[N]) || (0, e.Z)(S, [W, N], []), S[W][N].push(ee)
				});
				const x = S[c.allow] && Object.keys(S[c.allow]).map(ee => parseInt(ee)),
					$ = S[c.deny] && Object.keys(S[c.deny]).map(ee => parseInt(ee)),
					ne = Math.max.apply(Math, x);
				return ne === u || Math.max.apply(Math, $) >= ne ? null : S[c.allow][ne]
			}

			function l(A, P) {
				if (A.key === P || C(A.key, P)) return r;
				for (const D of (A == null ? void 0 : A.implies) || []) {
					let b = l(D, P);
					if (b > u) return b
				}
				return u
			}

			function C(A, P) {
				const D = P == null ? void 0 : P.lastIndexOf(".");
				return D === -1 ? !1 : (P == null ? void 0 : P.substring(0, D)) + ".*" === A
			}

			function f(A, P, D) {
				var b;
				let I = u;
				if (A == null || (b = A.objects) === null || b === void 0 || b.forEach(S => {
						I = Math.max(I, k(S, P))
					}), I === u) return I;
				if (A.key !== "*") switch (!0) {
					case O(A.key, D) > u:
					case (!(D == null ? void 0 : D.length) && I === r):
						break;
					case (I === E && O(A.key, [P]) > u):
						I = O(A.key, [P]);
						break;
					default:
						return u
				}
				for (const S of A.subset_of || [])
					if (O(S.key, D) === u) return u;
				return I
			}

			function O(A, P = []) {
				for (const D of P || []) {
					if (A === D) return r;
					if (C(A, D)) return n
				}
				return u
			}

			function k(A, P) {
				const D = (0, o.Z)(A) ? A : A.key;
				return D === P ? r : D === "*" || A === "*" ? E : C(D, P) ? n : u
			}
		},
		"../react/common/components/AccessCheck/useAccountParentOrgs.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				I: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				s = t("../../../../node_modules/swr/core/dist/index.mjs");
			const p = async v => {
				var c;
				const u = await fetch(`/api/v4/accounts/${v}/organizations`);
				if (!u.ok) throw new Error(`Failed to fetch account parent Orgs: ${u.status}`);
				const E = (c = await u.json()) === null || c === void 0 ? void 0 : c.result;
				if (E === void 0 || !(0, e.isArray)(E)) throw new Error(`Unexpected parent Orgs API response shape: ${JSON.stringify(E)}`);
				const n = E.map(a => {
						var g;
						return {
							tag: a.id,
							parentTag: (g = a.parent) === null || g === void 0 ? void 0 : g.id
						}
					}),
					r = [];
				return n.forEach(a => {
					a.parentTag || r.push(`com.cloudflare.api.tenant.${a.tag}`), r.push(`com.cloudflare.api.tenant.unit.${a.tag}`)
				}), r
			};

			function i(v, c) {
				const {
					data: u,
					error: E,
					isLoading: n
				} = (0, s.ZP)(c ? `account-organizations-${c}` : null, () => p(c), {
					dedupingInterval: 5 * 60 * 1e3,
					revalidateOnFocus: !0,
					focusThrottleInterval: 5 * 60 * 1e3,
					revalidateOnReconnect: !1
				});
				return {
					orgScopes: u || null,
					isLoading: n,
					error: (E == null ? void 0 : E.message) || null
				}
			}
		},
		"../react/common/components/AccessCheck/useAccountPermissionGroups.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				k: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/pages/home/members/utils.ts"),
				p = t("../../../../node_modules/lodash/lodash.js"),
				i = t.n(p),
				v = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t.n(v),
				u = t("../react/utils/url.ts"),
				E = t("../../../../node_modules/swr/core/dist/index.mjs");

			function n(a) {
				var g;
				const m = (0, v.useHistory)(),
					d = (0, u.uW)(m.location.pathname),
					h = a || d,
					w = (0, s.Hf)(h),
					_ = h && w.length === 0,
					{
						data: l,
						error: C,
						isLoading: f
					} = (0, E.ZP)(_ ? `account-${h}-permission-groups` : null, h ? r(h) : () => {
						throw new Error("no accountTag, should never run")
					});
				if ((0, e.useEffect)(() => {
						l && h && ((0, s.LX)(h, l), (0, s.rC)(h, l))
					}, [l, h]), !h) return [null, !1, null];
				if (C) {
					var O;
					const A = (O = C.message) !== null && O !== void 0 ? O : JSON.stringify(C);
					return [null, !1, A]
				}
				if (f && w.length === 0) return [null, !0, null];
				const k = (g = l) !== null && g !== void 0 ? g : w;
				return k.length === 0 ? [
					[], !1, "no perm groups available through API or cache"
				] : [k, !1, null]
			}
			const r = a => async () => {
				const g = await fetch(`/api/v4/accounts/${a}/iam/permission_groups?depth=2&permissions=true`);
				if (!g.ok) throw new Error(`Failed to fetch permission groups: ${g.status}`);
				const m = await g.json(),
					d = m == null ? void 0 : m.result;
				if (d === void 0 || !(0, p.isArray)(d)) throw new Error(`Unexpected permission groups API response shape: ${JSON.stringify(d)}`);
				return d
			}
		},
		"../react/common/components/AccessCheck/useIsAuthorized.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				b: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/common/components/AccessCheck/AuthzContext.tsx"),
				p = t("../react/app/redux/index.ts"),
				i = t("../react/pages/zone-versioning/selectors.ts"),
				v = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				c = t("../../../../node_modules/lodash/lodash.js"),
				u = t.n(c),
				E = t("../react/common/components/AccessCheck/useAccountParentOrgs.ts");
			const n = "com.cloudflare.api.account.",
				r = "alwaysUndefinedFallbackPermission";

			function a(h, w, _) {
				var l;
				const C = (0, e.useContext)(s.Hf);
				if (!C) throw new Error("useIsAuthorized must be used within AuthzContextProvider");
				let f, O = 0;
				_ == null || _.forEach(L => {
					if (!!m(L)) {
						if (O++, O > 1) {
							C.reportSentryException(new Error("authz invalid question - useIsAuthorized was passed multiple Account scopes, only one will get parent Org scopes"), {
								component: "useIsAuthorized",
								component_issue: "multiple_account_scopes"
							}, {
								permission: h,
								resource: w,
								scopes: _
							});
							return
						}
						L !== `${n}${C.contextAccountTag}` && (f = L)
					}
				});
				const k = f ? f.replace(n, "") : void 0,
					A = (0, E.I)((l = C.isUserInDSR) !== null && l !== void 0 ? l : !0, k),
					P = (0, p.p4)(L => (0, i.G)(L));
				if ((0, v.YB)(h) && !(0, v._S)(h) && (P == null ? void 0 : P.isLocked)) return {
					isAuthzd: !1,
					isLoading: !1
				};
				if (h === r) return {
					isAuthzd: void 0,
					isLoading: !1
				};
				const {
					policies: D,
					isLoading: b,
					isLoadingSkippedByUserID: I,
					error: S
				} = C.policiesState, {
					orgScopes: x,
					isLoading: $,
					error: ne
				} = C.contextAccountOrgsState, {
					orgScopes: ee,
					isLoading: re,
					error: W
				} = A, {
					roles: N,
					isLoading: R,
					error: G
				} = C.allRolesState;
				if (I) return {
					isAuthzd: !0,
					isLoading: !1
				};
				if (b || $ || re || R) return {
					isAuthzd: void 0,
					isLoading: !0
				};
				if (!w || w === "") return {
					isAuthzd: !1,
					isLoading: !1
				};
				if (S || ne || W || G) return console.error("error loading authz policy data, displayed UI may not reflect actual policies"), {
					isAuthzd: void 0,
					isLoading: !1
				};
				const U = _ && _.length > 0;
				if ((0, c.isNull)(D) || (0, c.isNull)(N) || !U && C.contextAccountTag && (0, c.isNull)(x)) return C.reportSentryException(new Error("authz undefined - missing useIsAuthorized policy data"), {
					component: "useIsAuthorized",
					component_issue: "missing_policy_data"
				}, {
					permission: h,
					resource: w,
					scopes: _
				}), {
					isAuthzd: void 0,
					isLoading: !1
				};
				const z = [];
				U ? (z.push(..._), ee && z.push(...ee)) : C.contextAccountTag && (z.push(`com.cloudflare.api.account.${C.contextAccountTag}`), z.push(...x)), z.length > 0 && d(w);
				const H = m(w);
				if (z.length === 0 && !H) return {
					isAuthzd: !1,
					isLoading: !1
				};
				const Z = (0, c.uniq)(z),
					F = (0, v.F3)(D, N, h, w, Z);
				return {
					isAuthzd: Boolean(F && F.length > 0),
					isLoading: !1
				}
			}
			const g = new RegExp(`${n}[0-9a-fA-F]{32}`);

			function m(h) {
				return g.test(h)
			}

			function d(h) {
				return h === n
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(B, y, t) {
			"use strict";
			t.d(y, {
				a: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e),
				s = t("../react/common/selectors/accountSelectors.ts");
			const p = v => {
					if (typeof v != "string") throw new Error("invalid Param Type provided");
					const c = v.slice(1).split(":");
					if (c.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: c[0],
						value: c[1]
					}
				},
				i = (v, c) => {
					const {
						resourceId: u,
						accountId: E,
						legacyPermission: n
					} = c;
					let {
						read: r,
						edit: a
					} = c;
					const g = {};
					n && (a = `#${n}:edit`, r = `#${n}:read`);
					const m = u || E;
					if (r) {
						const d = Array.isArray(r) ? r : [r];
						g.isReadable = d.some(h => {
							const w = p(h);
							return (0, s.DT)(v, m, _ => !!(_[w.key] && _[w.key][w.value]))
						})
					}
					if (a) {
						const d = Array.isArray(a) ? a : [a];
						g.isEditable = d.some(h => {
							const w = p(h);
							return (0, s.DT)(v, m, _ => !!(_[w.key] && _[w.key][w.value]))
						})
					}
					return g
				};
			y.Z = (0, e.connect)(i)
		},
		"../react/common/components/AccessControl/index.js": function(B, y, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				o = t.n(e),
				s = t("../react/app/HoCs/withEntities.tsx"),
				p = t("../react/common/components/AccessControl/SAAConnect.js");

			function i(r) {
				for (var a = 1; a < arguments.length; a++) {
					var g = arguments[a] != null ? Object(arguments[a]) : {},
						m = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(g).filter(function(d) {
						return Object.getOwnPropertyDescriptor(g, d).enumerable
					})), m.forEach(function(d) {
						v(r, d, g[d])
					})
				}
				return r
			}

			function v(r, a, g) {
				return a = c(a), a in r ? Object.defineProperty(r, a, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = g, r
			}

			function c(r) {
				var a = u(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function u(r, a) {
				if (typeof r != "object" || r === null) return r;
				var g = r[Symbol.toPrimitive];
				if (g !== void 0) {
					var m = g.call(r, a || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}

			function E(r) {
				const g = ["isReadable", "isEditable"].reduce((m, d) => r.hasOwnProperty(d) ? i({}, m, {
					[d]: r[d]
				}) : m, {});
				return r.children(g)
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
			const n = (0, s.Z)((0, p.Z)(E));
			n.displayName = "AccessControl", y.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				PP: function() {
					return a
				},
				RJ: function() {
					return u
				},
				tz: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				p = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				i = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				v = t("../react/common/utils/oidc.ts");
			const c = () => E.test(window.location.pathname) || s.E.has(p.Qq),
				u = () => s.E.get(p.Qq),
				E = /^\/login\/apple(\/)?/,
				r = [E, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				a = () => {
					let m = !1;
					r.forEach(h => {
						if (h.test(window.location.pathname)) {
							m = !0;
							return
						}
					});
					const d = c() && m;
					return d && (0, i.C8)(i.LF.OFF), d
				},
				g = m => {
					m && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					}), window.location.href = (0, v.e)(v.c.Apple, m)
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				oG: function() {
					return _
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
				s = t("../../../../node_modules/@cloudflare/component-button/es/index.js"),
				p = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				i = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				v = t.n(i),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("../react/common/components/Dropdown/index.tsx"),
				E = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				n = t("../../../../node_modules/react/jsx-runtime.js");

			function r(l) {
				for (var C = 1; C < arguments.length; C++) {
					var f = arguments[C] != null ? Object(arguments[C]) : {},
						O = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(f).filter(function(k) {
						return Object.getOwnPropertyDescriptor(f, k).enumerable
					})), O.forEach(function(k) {
						a(l, k, f[k])
					})
				}
				return l
			}

			function a(l, C, f) {
				return C = g(C), C in l ? Object.defineProperty(l, C, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[C] = f, l
			}

			function g(l) {
				var C = m(l, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function m(l, C) {
				if (typeof l != "object" || l === null) return l;
				var f = l[Symbol.toPrimitive];
				if (f !== void 0) {
					var O = f.call(l, C || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(l)
			}

			function d(l, C) {
				if (l == null) return {};
				var f = h(l, C),
					O, k;
				if (Object.getOwnPropertySymbols) {
					var A = Object.getOwnPropertySymbols(l);
					for (k = 0; k < A.length; k++) O = A[k], !(C.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(l, O) || (f[O] = l[O]))
				}
				return f
			}

			function h(l, C) {
				if (l == null) return {};
				var f = {},
					O = Object.keys(l),
					k, A;
				for (A = 0; A < O.length; A++) k = O[A], !(C.indexOf(k) >= 0) && (f[k] = l[k]);
				return f
			}
			const w = (0, c.SU)(({
				theme: l
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${l.radii[2]}px 0 0 ${l.radii[2]}px`,
					borderRight: `1px solid ${l.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${l.radii[2]}px ${l.radii[2]}px 0`,
					paddingRight: l.space[2],
					paddingLeft: l.space[2]
				},
				"& button": {
					color: (0, E.Yc)() ? l.colors.text : void 0
				},
				"& button:hover": {
					color: (0, E.Yc)() ? l.colors.text : void 0
				}
			}));

			function _(l) {
				let {
					menu: C,
					containerProps: f,
					disabled: O,
					disabledDropdown: k = O
				} = l, A = d(l, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: P
				} = (0, i.useI18n)();
				return (0, n.jsxs)(w, r({}, f, {
					role: "group",
					children: [(0, n.jsx)(s.zx, r({}, A, {
						disabled: O
					})), (0, n.jsx)(u.Lt, {
						trigger: (0, n.jsx)(s.zx, {
							type: A.type,
							"aria-haspopup": "menu",
							disabled: k,
							children: (0, n.jsx)(p.J, {
								type: "caret-down",
								label: P("common.more"),
								size: 12
							})
						}),
						menu: C
					})]
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				v: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../node_modules/@cloudflare/elements/es/index.js"),
				p = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				i = t("../react/common/hooks/useIntersectionObserver.ts"),
				v = t("../../../../node_modules/react/jsx-runtime.js");

			function c(a) {
				for (var g = 1; g < arguments.length; g++) {
					var m = arguments[g] != null ? Object(arguments[g]) : {},
						d = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(m).filter(function(h) {
						return Object.getOwnPropertyDescriptor(m, h).enumerable
					})), d.forEach(function(h) {
						u(a, h, m[h])
					})
				}
				return a
			}

			function u(a, g, m) {
				return g = E(g), g in a ? Object.defineProperty(a, g, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[g] = m, a
			}

			function E(a) {
				var g = n(a, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function n(a, g) {
				if (typeof a != "object" || a === null) return a;
				var m = a[Symbol.toPrimitive];
				if (m !== void 0) {
					var d = m.call(a, g || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(a)
			}

			function r(a) {
				const g = (0, e.useRef)(null),
					[m, d] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const w = g.current;
					if (w) {
						const {
							bottom: _
						} = w.getBoundingClientRect();
						_ > window.innerHeight && d(!0)
					}
				}, []);
				const h = (0, i.S)(w => {
					for (const _ of w) _.intersectionRatio < 1 && d(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const w = g.current;
					if (w && h) return h.observe(w), () => {
						h.unobserve(w)
					}
				}, [h]), (0, v.jsx)(s.ZC, c({
					role: "menu",
					innerRef: g,
					position: "absolute",
					right: "0",
					backgroundColor: p.rS.colors.background,
					p: 1,
					color: "gray.4",
					border: "1px solid",
					borderColor: "gray.8",
					boxShadow: "rgba(0, 0, 0, 0.025) -1px 2px 1px 1px, rgba(0, 0, 0, 0.05) -3px 3px 7px 0px",
					borderRadius: 2,
					textAlign: "left",
					whiteSpace: "nowrap",
					overflow: "hidden"
				}, m ? {
					bottom: "100%",
					mb: "2px"
				} : {
					top: "100%",
					mt: "2px"
				}, {
					zIndex: 1040,
					minWidth: 170
				}, a))
			}
		},
		"../react/common/components/Dropdown/MenuItem.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				s: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				i = t.n(p),
				v = t("../../../../node_modules/react/jsx-runtime.js");

			function c(w, _) {
				if (w == null) return {};
				var l = u(w, _),
					C, f;
				if (Object.getOwnPropertySymbols) {
					var O = Object.getOwnPropertySymbols(w);
					for (f = 0; f < O.length; f++) C = O[f], !(_.indexOf(C) >= 0) && (!Object.prototype.propertyIsEnumerable.call(w, C) || (l[C] = w[C]))
				}
				return l
			}

			function u(w, _) {
				if (w == null) return {};
				var l = {},
					C = Object.keys(w),
					f, O;
				for (O = 0; O < C.length; O++) f = C[O], !(_.indexOf(f) >= 0) && (l[f] = w[f]);
				return l
			}

			function E(w) {
				for (var _ = 1; _ < arguments.length; _++) {
					var l = arguments[_] != null ? Object(arguments[_]) : {},
						C = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), C.forEach(function(f) {
						n(w, f, l[f])
					})
				}
				return w
			}

			function n(w, _, l) {
				return _ = r(_), _ in w ? Object.defineProperty(w, _, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[_] = l, w
			}

			function r(w) {
				var _ = a(w, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function a(w, _) {
				if (typeof w != "object" || w === null) return w;
				var l = w[Symbol.toPrimitive];
				if (l !== void 0) {
					var C = l.call(w, _ || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(w)
			}
			const g = ({
					theme: w
				}) => {
					const _ = {
						cursor: "pointer",
						background: w.colors.gray[9],
						color: w.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: w.space[2],
						background: w.colors.background,
						color: w.colors.gray[3],
						fontSize: w.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						'&:hover:not(:disabled):not([aria-disabled="true"])': _,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': E({}, _, {
							boxShadow: "none",
							borderRadius: 0
						}),
						'&:is(:disabled, [aria-disabled="true"])': {
							color: w.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				m = (0, s.LM)(g, "a"),
				d = (0, s.LM)(g, "button");

			function h(w) {
				let {
					disabled: _ = !1
				} = w, l = c(w, ["disabled"]);
				const C = (0, p.useHistory)(),
					f = {
						role: "menuitem"
					};
				if ("href" in l && typeof l.href == "string") return (0, v.jsx)(m, E({
					"aria-disabled": _
				}, f, l, {
					href: _ ? void 0 : l.href,
					onClick: k => {
						var A;
						if (_) return k.stopPropagation();
						k.preventDefault(), (A = l.onClick) === null || A === void 0 || A.call(l, k), C.push(l.href)
					}
				}));
				var O;
				return (0, v.jsx)(d, E({
					type: (O = l.type) !== null && O !== void 0 ? O : "button"
				}, f, l, {
					disabled: _
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(B, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/prop-types/index.js"),
				p = t.n(s),
				i = t("../../../../node_modules/@cloudflare/component-box/es/index.js"),
				v = t("../../../../node_modules/react/jsx-runtime.js");
			const c = ({
				children: u
			}) => (0, v.jsx)(i.xu, {
				height: 411,
				children: u
			});
			c.propTypes = {
				children: p().node
			}, y.Z = c
		},
		"../react/common/components/ExternalLink.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				dL: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				p = t("../node_modules/@cloudflare/elements/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				v = t("../../../../node_modules/react/jsx-runtime.js");

			function c(h) {
				for (var w = 1; w < arguments.length; w++) {
					var _ = arguments[w] != null ? Object(arguments[w]) : {},
						l = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(_).filter(function(C) {
						return Object.getOwnPropertyDescriptor(_, C).enumerable
					})), l.forEach(function(C) {
						u(h, C, _[C])
					})
				}
				return h
			}

			function u(h, w, _) {
				return w = E(w), w in h ? Object.defineProperty(h, w, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[w] = _, h
			}

			function E(h) {
				var w = n(h, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function n(h, w) {
				if (typeof h != "object" || h === null) return h;
				var _ = h[Symbol.toPrimitive];
				if (_ !== void 0) {
					var l = _.call(h, w || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(h)
			}

			function r(h, w) {
				if (h == null) return {};
				var _ = a(h, w),
					l, C;
				if (Object.getOwnPropertySymbols) {
					var f = Object.getOwnPropertySymbols(h);
					for (C = 0; C < f.length; C++) l = f[C], !(w.indexOf(l) >= 0) && (!Object.prototype.propertyIsEnumerable.call(h, l) || (_[l] = h[l]))
				}
				return _
			}

			function a(h, w) {
				if (h == null) return {};
				var _ = {},
					l = Object.keys(h),
					C, f;
				for (f = 0; f < l.length; f++) C = l[f], !(w.indexOf(C) >= 0) && (_[C] = h[C]);
				return _
			}
			const g = (0, i.SU)(({
				verticalAlign: h = "text-bottom"
			}) => ({
				flex: "none",
				verticalAlign: h,
				fill: "currentColor"
			}), s.J);
			var m = null;
			const d = h => {
				let {
					to: w,
					children: _,
					icon: l = !0,
					target: C = "_blank",
					color: f,
					display: O = "inline-flex",
					iconMarginLeft: k = 1,
					iconMarginRight: A,
					alignSelfIcon: P = "center"
				} = h, D = r(h, ["to", "children", "icon", "target", "color", "display", "iconMarginLeft", "iconMarginRight", "alignSelfIcon"]);
				return (0, v.jsxs)(p.A, c({}, D, {
					href: w,
					target: C,
					rel: "noopener noreferrer",
					display: O,
					alignItems: "center",
					color: f,
					children: [_, l && (0, v.jsx)(g, {
						alignSelf: P,
						label: "External Link",
						type: "external-link",
						size: typeof l == "number" ? l : 18,
						ml: k,
						mr: A
					})]
				}))
			}
		},
		"../react/common/components/ModalManager.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return _
				},
				dd: function() {
					return h
				},
				vR: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react-redux/react-redux");
			const p = l => l.application.modals;
			var i = t("../react/common/actions/modalActions.ts"),
				v = t("../../../../node_modules/swr/core/dist/index.mjs"),
				c = t("../react/pages/zoneless-workers/utils/swrConfig.ts"),
				u = t("../../../../node_modules/react/jsx-runtime.js");

			function E(l) {
				for (var C = 1; C < arguments.length; C++) {
					var f = arguments[C] != null ? Object(arguments[C]) : {},
						O = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(f).filter(function(k) {
						return Object.getOwnPropertyDescriptor(f, k).enumerable
					})), O.forEach(function(k) {
						n(l, k, f[k])
					})
				}
				return l
			}

			function n(l, C, f) {
				return C = r(C), C in l ? Object.defineProperty(l, C, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[C] = f, l
			}

			function r(l) {
				var C = a(l, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function a(l, C) {
				if (typeof l != "object" || l === null) return l;
				var f = l[Symbol.toPrimitive];
				if (f !== void 0) {
					var O = f.call(l, C || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(l)
			}
			const g = o().createContext(null);
			class m extends o().Component {
				render() {
					const {
						modals: C,
						closeModal: f
					} = this.props;
					return (0, u.jsx)(u.Fragment, {
						children: C.map(({
							ModalComponent: O,
							props: k = {},
							id: A
						}) => {
							const P = () => {
								typeof k.onClose == "function" && k.onClose(), f(O)
							};
							return (0, u.jsx)(g.Provider, {
								value: {
									closeModal: P
								},
								children: (0, u.jsx)(v.J$, {
									value: c.ZP,
									children: (0, u.jsx)(O, E({}, k, {
										isOpen: !0,
										closeModal: P
									}))
								})
							}, A)
						})
					})
				}
			}

			function d() {
				const l = o().useContext(g);
				if (!l) throw new Error("useModalContext must be used within a ModalContext");
				return l
			}

			function h() {
				const l = (0, s.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...C) {
						return l(i.openModal(...C))
					}, [l]),
					closeModal: (0, e.useCallback)(function(...C) {
						return l(i.closeModal(...C))
					}, [l])
				}
			}
			var _ = (0, s.connect)(l => ({
				modals: p(l)
			}), i)(m)
		},
		"../react/common/components/Page.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				p = t("../../../../node_modules/react/jsx-runtime.js");

			function i(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(a).filter(function(m) {
						return Object.getOwnPropertyDescriptor(a, m).enumerable
					})), g.forEach(function(m) {
						v(n, m, a[m])
					})
				}
				return n
			}

			function v(n, r, a) {
				return r = c(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function c(n) {
				var r = u(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function u(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var g = a.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}

			function E(n) {
				return (0, p.jsx)(s.T3, i({}, n))
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(B, y, t) {
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
					return v
				},
				ZI: function() {
					return i
				},
				if: function() {
					return o
				},
				q6: function() {
					return s
				},
				w_: function() {
					return p
				},
				zl: function() {
					return c
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				s = "date-from",
				p = "date-to",
				i = "from",
				v = "to",
				c = "all",
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
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.REMOVE_ALL_FILTERS = "Remove all filters", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r
				}({}),
				n = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Cf: function() {
					return E
				},
				hJ: function() {
					return u
				},
				ys: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(a).filter(function(m) {
						return Object.getOwnPropertyDescriptor(a, m).enumerable
					})), g.forEach(function(m) {
						p(n, m, a[m])
					})
				}
				return n
			}

			function p(n, r, a) {
				return r = i(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function i(n) {
				var r = v(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var g = a.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const u = ({
					name: n,
					additionalData: r = {}
				}) => {
					o().sendEvent(n, s({}, r || {}))
				},
				E = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(B, y, t) {
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
		"../react/common/components/filter-editor/triplet-fields/SequencesField/constants.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				Aq: function() {
					return E
				},
				Xc: function() {
					return u
				},
				rg: function() {
					return n
				},
				xs: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				p = t("../node_modules/@cloudflare/component-link/es/index.js"),
				i = t("../node_modules/@cloudflare/elements/es/index.js"),
				v = t("../react/utils/translator.tsx"),
				c = t("../../../../node_modules/react/jsx-runtime.js");
			const u = "sequence builder modal opened",
				E = "sequence builder modal submitted",
				n = 10,
				r = {
					INITIAL_PAGINATION: {
						page: 1,
						perPage: 10
					},
					INITIAL_SORT: {
						name: "endpoint",
						direction: s.Sr.asc
					},
					INITIAL_TOOLBAR_STATE: {
						search: "",
						filterValues: {
							method: "all"
						}
					},
					EMPTY_STATES: ({
						selectedHostname: a,
						isFiltersAndNoResults: g,
						addEndpointsRoute: m
					}) => a ? g ? {
						title: (0, c.jsx)(v.cC, {
							id: "common.table.empty.search.title"
						}),
						description: (0, c.jsx)(i.ZC, {
							mt: 1,
							children: (0, c.jsx)(v.cC, {
								id: "common.table.empty.search.description"
							})
						})
					} : {
						title: (0, c.jsx)(i.ZC, {
							textAlign: "center",
							children: (0, c.jsx)(v.cC, {
								id: "api_rules.sequences_rules.main.form.table.empty.no_endpoints.title"
							})
						}),
						description: (0, c.jsxs)(i.ZC, {
							mt: 3,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							textAlign: "center",
							fontSize: 2,
							children: [(0, c.jsx)(v.cC, {
								id: "api_rules.sequences_rules.main.form.table.empty.no_endpoints.description"
							}), (0, c.jsx)(p.QV, {
								to: m,
								children: (0, c.jsx)(v.cC, {
									id: "api_rules.sequences_rules.main.form.table.empty.no_endpoints.cta"
								})
							})]
						}),
						image: () => null
					} : {
						title: null,
						description: (0, c.jsx)(i.ZC, {
							textAlign: "center",
							children: (0, c.jsx)(v.cC, {
								id: "api_rules.sequences_rules.main.form.table.empty.no_hostname_selected"
							})
						}),
						image: () => null
					}
				}
		},
		"../react/common/constants/billing/index.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
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
					return E
				},
				Hw: function() {
					return v
				},
				Ed: function() {
					return i
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return g
				},
				hQ: function() {
					return c
				},
				SP: function() {
					return u
				}
			});
			let e = function(m) {
				return m.page_rules = "page_rules", m.automatic_platform_optimization = "automatic_platform_optimization", m
			}({});
			const o = "page_rules",
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
				i = {
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
				c = {
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
				a = t("../react/common/constants/billing/workers.ts");
			const g = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				FP: function() {
					return e
				},
				Nl: function() {
					return i
				},
				SO: function() {
					return s
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
				s = {
					BILLING: "billing"
				},
				p = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				i = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Dk: function() {
					return g
				},
				Dy: function() {
					return m
				},
				E_: function() {
					return v
				},
				Lv: function() {
					return d
				},
				S4: function() {
					return i
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return E
				},
				Y1: function() {
					return c
				},
				p6: function() {
					return u
				},
				q0: function() {
					return p
				},
				rg: function() {
					return h
				},
				sJ: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const p = "healthy",
				i = "degraded",
				v = "critical",
				c = "unknown",
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
				a = "marketing-pt",
				g = () => {
					const _ = s.Z.get(a);
					if (!!_) return r[_]
				},
				m = ["gov"],
				d = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				h = "banner-notification-interactions",
				w = null
		},
		"../react/common/constants/index.ts": function(B, y, t) {
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
		"../react/common/constants/roles.ts": function(B, y, t) {
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
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				QK: function() {
					return e
				},
				dy: function() {
					return o
				},
				sO: function() {
					return s
				},
				x4: function() {
					return p
				}
			});
			let e = function(i) {
				return i.DELETE = "delete", i.CREATE = "create", i.GET = "get", i.UPDATE = "update", i
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
					http_custom_errors: "custom errors",
					http_ratelimit: "rate limiting",
					http_request_firewall_custom: "custom",
					http_request_firewall_managed: "managed"
				},
				s = (i, v, c = !1) => {
					var u;
					return `${v} ${(u=o[i])!==null&&u!==void 0?u:i} ${c?"ruleset":"rule"}${v===e.GET?"s":""}`
				},
				p = () => {
					var i;
					return (i = Object.keys(o).reduce((v, c) => {
						const u = Object.values(e).reduce((E, n) => (E.push(s(c, n)), E.push(s(c, n, !0)), E), []);
						return v.concat(u)
					}, [])) === null || i === void 0 ? void 0 : i.flat()
				}
		},
		"../react/common/hooks/useAccountId.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				C: function() {
					return v
				},
				F: function() {
					return i
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = t.n(s);

			function i() {
				var c;
				const {
					accountId: u
				} = (0, s.useParams)(), E = (0, e.p4)(o.D0);
				if (u === void 0 && !E) throw new Error("Account ID not found in URL params");
				return (c = u) !== null && c !== void 0 ? c : E == null ? void 0 : E.id
			}

			function v() {
				const c = i();
				return (0, e.p4)(u => (0, o.Py)(u, c))
			}
		},
		"../react/common/hooks/useActiveState.ts": function(B, y, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				o = t("webpack/sharing/consume/default/react-redux/react-redux"),
				s = t.n(o),
				p = t("../react/common/selectors/commonSelectors.ts");
			const i = v => {
				const c = (0, o.useDispatch)();
				return [(0, o.useSelector)((0, p.cZ)(v)), n => {
					c((0, e.I)(v, n))
				}]
			};
			y.Z = i
		},
		"../react/common/hooks/useCachedState.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				j: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function p(i, {
				key: v,
				cache: c = s.E,
				ttl: u
			} = {}) {
				var E;
				const n = v !== void 0 && c.get(v),
					[r, a] = (0, e.useState)((E = n) !== null && E !== void 0 ? E : i);
				return [r, m => {
					a(d => (m instanceof Function && (m = m(d)), v !== void 0 && c.set(v, m, u), m))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(B, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(s) {
				return (0, e.qf)(s)
			}
			y.Z = o
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function s(p, {
				root: i,
				rootMargin: v,
				threshold: c
			} = {}) {
				const u = (0, e.useRef)(null);

				function E() {
					return u.current === null && (u.current = new IntersectionObserver(p, {
						root: i,
						rootMargin: v,
						threshold: c
					})), u.current
				}
				return (0, e.useEffect)(() => (u.current = new IntersectionObserver(p, {
					root: i,
					rootMargin: v,
					threshold: c
				}), () => {
					var n;
					(n = u.current) === null || n === void 0 || n.disconnect()
				}), [p, i, v, c]), E()
			}
		},
		"../react/common/hooks/useIsInternal.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				t: function() {
					return s
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/userSelectors.ts");
			const s = () => {
				var p;
				const i = (0, e.p4)(o.PR);
				return (i == null || (p = i.email) === null || p === void 0 ? void 0 : p.endsWith("@cloudflare.com")) || !1
			}
		},
		"../react/common/hooks/usePrevious.ts": function(B, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function s(p) {
				const i = (0, e.useRef)(p);
				return (0, e.useEffect)(() => {
					i.current = p
				}, [p]), i.current
			}
			y.Z = s
		},
		"../react/common/hooks/useScope.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				Lm: function() {
					return E
				},
				QF: function() {
					return c
				},
				f1: function() {
					return u
				}
			});
			var e = t("../react/utils/url.ts"),
				o = t("../react/app/redux/index.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				i = t.n(p),
				v = t("../react/common/hooks/useAccountId.ts");
			const c = {
					ZONE: "zones",
					ACCOUNT: "accounts"
				},
				u = () => {
					const {
						pathname: n
					} = (0, p.useLocation)();
					return (0, e.el)(n)
				},
				E = () => {
					const n = (0, o.p4)(s.Cu),
						r = (0, v.F)(),
						a = u();
					return {
						scope: a ? c.ZONE : c.ACCOUNT,
						scopeId: a ? n : r,
						isZoneScope: a
					}
				}
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(B, y, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function s(p) {
				return (0, e.p4)(i => (0, o.rV)(i, p))
			}
			y.Z = s
		},
		"../react/common/middleware/sparrow/errors.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Uh: function() {
					return i
				},
				ez: function() {
					return p
				},
				oV: function() {
					return v
				}
			});

			function e(c, u, E) {
				return u = o(u), u in c ? Object.defineProperty(c, u, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[u] = E, c
			}

			function o(c) {
				var u = s(c, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function s(c, u) {
				if (typeof c != "object" || c === null) return c;
				var E = c[Symbol.toPrimitive];
				if (E !== void 0) {
					var n = E.call(c, u || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(c)
			}
			class p extends Error {
				constructor(u, E) {
					super(E);
					e(this, "eventName", void 0), this.eventName = u, this.name = "SparrowValidationError"
				}
			}
			class i extends p {
				constructor(u) {
					super(u, `Event not allowed: "${u}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class v extends p {
				constructor(u, E) {
					super(u, `Found invalid properties on event: "${u}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = E
				}
			}
		},
		"../react/common/middleware/sparrow/globalEvents/clickEvents.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Ax: function() {
					return v
				},
				B8: function() {
					return p
				},
				W1: function() {
					return s
				},
				tV: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			const s = "user click";
			let p = function(c) {
					return c.CALL_TO_ACTION = "call_to_action", c.DISMISS_CONTENT = "dismiss_content", c
				}({}),
				i = function(c) {
					return c.ZONE_MARKETING_BANNER = "zone_marketing_banner_click", c.ZONE_MARKETING_BANNER_DISMISS = "zone_marketing_banner_dismiss", c.ACCOUNT_MARKETING_BANNER = "account_marketing_banner_click", c.ACCOUNT_MARKETING_BANNER_DISMISS = "account_marketing_banner_dismiss", c
				}({});
			const v = ({
				interactionType: c,
				clickType: u,
				id: E,
				text: n = "",
				href: r = ""
			}) => {
				const a = {
					interactionType: c,
					clickType: u,
					id: E,
					text: n,
					href: r
				};
				o().sendEvent(s, a)
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Au: function() {
					return Ie
				},
				B: function() {
					return We
				},
				B3: function() {
					return et
				},
				BG: function() {
					return A
				},
				Bp: function() {
					return lt
				},
				CV: function() {
					return ft
				},
				D0: function() {
					return C
				},
				DT: function() {
					return L
				},
				EL: function() {
					return H
				},
				EU: function() {
					return Q
				},
				GE: function() {
					return ht
				},
				Ko: function() {
					return q
				},
				Kx: function() {
					return b
				},
				Le: function() {
					return I
				},
				O4: function() {
					return Ke
				},
				Ou: function() {
					return R
				},
				Py: function() {
					return $e
				},
				QI: function() {
					return He
				},
				Qf: function() {
					return O
				},
				RO: function() {
					return Ae
				},
				T3: function() {
					return dt
				},
				T8: function() {
					return k
				},
				UX: function() {
					return z
				},
				VP: function() {
					return Ne
				},
				Xo: function() {
					return nt
				},
				Xu: function() {
					return re
				},
				Yi: function() {
					return it
				},
				Yj: function() {
					return F
				},
				Zu: function() {
					return Z
				},
				bC: function() {
					return ie
				},
				f8: function() {
					return $
				},
				hI: function() {
					return ut
				},
				hN: function() {
					return D
				},
				hX: function() {
					return Re
				},
				iq: function() {
					return Ve
				},
				nE: function() {
					return P
				},
				oD: function() {
					return U
				},
				oI: function() {
					return x
				},
				oJ: function() {
					return mt
				},
				tM: function() {
					return G
				},
				uF: function() {
					return W
				},
				ut: function() {
					return Be
				},
				vU: function() {
					return wt
				},
				wQ: function() {
					return ge
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				s = t.n(o),
				p = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				i = t.n(p),
				v = t("../../../../node_modules/reselect/lib/index.js"),
				c = t("../../../../node_modules/moment/moment.js"),
				u = t.n(c),
				E = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				r = t("../react/common/selectors/userSelectors.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				g = t("../react/app/components/DeepLink/selectors.ts"),
				m = t("../react/common/constants/roles.ts"),
				d = t("../react/common/utils/hasRole.ts");

			function h(X) {
				for (var de = 1; de < arguments.length; de++) {
					var he = arguments[de] != null ? Object(arguments[de]) : {},
						Te = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && Te.push.apply(Te, Object.getOwnPropertySymbols(he).filter(function(ke) {
						return Object.getOwnPropertyDescriptor(he, ke).enumerable
					})), Te.forEach(function(ke) {
						w(X, ke, he[ke])
					})
				}
				return X
			}

			function w(X, de, he) {
				return de = _(de), de in X ? Object.defineProperty(X, de, {
					value: he,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : X[de] = he, X
			}

			function _(X) {
				var de = l(X, "string");
				return typeof de == "symbol" ? de : String(de)
			}

			function l(X, de) {
				if (typeof X != "object" || X === null) return X;
				var he = X[Symbol.toPrimitive];
				if (he !== void 0) {
					var Te = he.call(X, de || "default");
					if (typeof Te != "object") return Te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (de === "string" ? String : Number)(X)
			}
			const C = X => {
					const de = W(X);
					return de == null ? void 0 : de.account
				},
				f = X => {
					const de = (0, r.PR)(X);
					if (de) {
						const he = de.id;
						return X.accountAccess[he] || {}
					}
					return {}
				},
				O = X => X.accountsDetailed,
				k = (0, n.P1)("accountsDetailed", O),
				A = X => X.memberships,
				P = (0, v.P1)((0, n.P1)("memberships", A), g.U, (X, de) => !!de && !!X ? X.filter(he => de.includes(he.id)) : X),
				D = X => X.accountFlags && X.accountFlags.data,
				b = X => X.accountFlags,
				I = (X, de, he) => {
					const Te = D(X);
					return !Te || !Te[de] ? null : Te[de][he]
				},
				S = X => X.accountFlags.isRequesting,
				x = (X, ...de) => s()(X, ["accountFlagsChanges", "data", ...de]),
				$ = X => X.accountFlagsChanges.isRequesting,
				ne = (0, v.P1)(D, b, (X, de) => ({
					data: X,
					meta: de
				})),
				ee = (X, de, he) => !!(isEnterpriseSSEnabledSelector(X) && I(X, de, he)),
				re = X => X.membership,
				W = (0, n.P1)("membership", re),
				N = (0, v.P1)(W, re, (X, de) => ({
					data: X,
					meta: de
				})),
				R = X => {
					const {
						roles: de = []
					} = W(X) || {};
					return Boolean(de.find(he => he === "Super Administrator - All Privileges" || he === "Billing"))
				},
				G = X => {
					const de = [m.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, d.n)(X, de)
				},
				U = X => {
					const de = f(X),
						he = Qe.getMemberships(X) ? i().asMutable(Qe.getMemberships(X)) : [];
					if (!!he) return i().from(he.map(Te => h({}, Te, {
						lastSeen: de[Te.account.id] ? de[Te.account.id].lastSeen : null
					})).sort((Te, ke) => Te.lastSeen && ke.lastSeen ? ke.lastSeen - Te.lastSeen : 0))
				},
				z = X => X.filteredMemberships,
				H = (0, n.P1)("filteredMemberships", z),
				Z = (0, v.P1)(W, X => X == null ? void 0 : X.permissions),
				F = (0, v.P1)(Z, X => (0, e.Z)(de => {
					var he;
					return (he = X == null ? void 0 : X[de]) !== null && he !== void 0 ? he : {
						read: !1,
						edit: !1
					}
				})),
				q = (0, v.P1)(W, X => X == null ? void 0 : X.policies),
				L = (X, de, he) => {
					let Te = Qe.getMembership(X);
					if (!Te) {
						const ke = Qe.getMemberships(X);
						if (!ke || !de) return !1;
						Te = ke.find(Ye => Ye.account.id === de)
					}
					if (!Te || !he) return !1;
					try {
						return he(Te.permissions)
					} catch {
						return !1
					}
				},
				K = X => {
					var de, he;
					return (de = (he = C(X)) === null || he === void 0 ? void 0 : he.meta.has_pro_zones) !== null && de !== void 0 ? de : !1
				},
				Q = X => {
					var de, he;
					return (de = (he = C(X)) === null || he === void 0 ? void 0 : he.meta.has_business_zones) !== null && de !== void 0 ? de : !1
				},
				ie = X => Q(X) || K(X),
				V = (X, de) => {
					const he = ae(X, de);
					return !!he && !!he.enabled
				},
				ae = (X, de) => {
					const he = Qe.getMembership(X),
						Te = he && he.account;
					return Te && Te.legacy_flags && Te.legacy_flags[de]
				},
				ge = X => V(X, "custom_pages"),
				Ce = X => !!X && X["webhooks.webhooks.enabled"],
				se = X => I(X, "bots", "enabled"),
				be = X => I(X, "billing", "annual_subscriptions_enable"),
				Ae = X => X ? Boolean(I(X, "ConstellationAI", "v2_ui")) : !1,
				Re = X => X ? Boolean(I(X, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				We = X => X ? Boolean(I(X, "AIgateway", "enabled")) : !1,
				Se = X => ae(X, "enterprise_zone_quota"),
				at = X => {
					const de = Se(X);
					return !de || !de.available ? -1 : de.available
				},
				Ve = X => X.accountMembers,
				et = (0, n.P1)("accountMembers", Ve),
				Ke = X => X.accountMember && X.accountMember.isRequesting,
				Y = X => X.accountRoles,
				ye = (0, n.P1)("accountRoles", Y),
				$e = (X, de) => {
					const he = Qe.getMemberships(X),
						Te = he && he.find(Pe => Pe.account.id === de);
					if (Te) return Te.account.name.replace(" Account", " account");
					const ke = Qe.getMembership(X),
						Ye = ke && ke.account;
					return Ye && Ye.id === de ? Ye.name : null
				},
				Be = (X, de) => {
					const he = Qe.getMemberships(X),
						Te = he && he.find(Pe => Pe.account.id === de);
					if (Te) return Te.account.settings.access_approval_expiry;
					const ke = Qe.getMembership(X),
						Ye = ke && ke.account;
					return Ye && Ye.id === de ? Ye.settings.access_approval_expiry : null
				},
				nt = (X, de) => {
					const he = Be(X, de);
					return he ? u().utc(he).isAfter() : !1
				},
				dt = (X, de, he) => {
					const Te = Be(X, de);
					let ke = Te ? u().utc(Te) : null;
					return !ke || !ke.isAfter() ? "" : ke && ke.year() === 3e3 ? he("account.access_approval.card_expiration_forever") : he("account.access_approval.card_expiration_text", {
						expiryTimestamp: ke.local().format(E.U.DateTime)
					})
				},
				mt = X => X && X.member && X.member.edit,
				Ie = (X, de) => {
					const he = Qe.getMembership(X),
						Te = he && he.account;
					return Te ? Te.id !== de : !1
				},
				rt = X => X.dpa,
				te = (0, n.P1)("dpa", rt),
				ce = X => X.webhook,
				fe = X => X.webhooks,
				Ue = (0, n.P1)("webhook", fe),
				Ne = X => X.accountLegoContract,
				Ze = (0, n.P1)("accountLegoContract", Ne),
				He = X => {
					const de = Ze(X);
					return (de == null ? void 0 : de.lego_state) ? de.lego_state : ""
				},
				Ct = X => He(X) === "signed",
				ht = X => Ne(X).isRequesting,
				wt = X => {
					const de = Ze(X);
					return de && de.subscription_type ? de.subscription_type : ""
				},
				Ft = X => wt(X) !== "",
				Qe = {
					getMembership: W,
					getMemberships: P,
					getFilteredMemberships: H,
					getAccountMembers: et,
					getAccountRoles: ye
				},
				lt = X => X.accountSingle,
				it = (0, n.P1)("accountSingle", lt),
				ut = X => {
					const de = [m.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, m.V.ADMINISTRATOR];
					return (0, d.n)(X, de)
				},
				ft = X => (0, d.n)(X, [m.V.BRAND_PROTECTION]),
				Me = X => hasRole(X, [MEMBERSHIP_ROLES.CLOUDFORCE_ONE_ADMIN, MEMBERSHIP_ROLES.CLOUDFORCE_ONE_READ])
		},
		"../react/common/selectors/commonSelectors.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				FX: function() {
					return s
				},
				QG: function() {
					return o
				},
				TH: function() {
					return p
				},
				cZ: function() {
					return e
				}
			});

			function e(i) {
				const v = `__ACTIVE__${i}`;
				return c => {
					const u = c.application;
					return u && u.active[v]
				}
			}

			function o(i) {
				const v = `__TOGGLE__${i}`;
				return c => {
					const u = c.application;
					return u && u.toggles[v]
				}
			}

			function s(i) {
				return i && i.paginationData && i.paginationData.info && i.paginationData.info.total_count ? i.paginationData.info.total_count : 0
			}
			const p = i => i.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				$f: function() {
					return d
				},
				AD: function() {
					return v
				},
				BF: function() {
					return m
				},
				Bs: function() {
					return f
				},
				Ci: function() {
					return F
				},
				DA: function() {
					return Ve
				},
				E6: function() {
					return g
				},
				Gy: function() {
					return We
				},
				Hq: function() {
					return Re
				},
				Ms: function() {
					return A
				},
				Mx: function() {
					return V
				},
				Nb: function() {
					return Ae
				},
				Pj: function() {
					return at
				},
				Q2: function() {
					return c
				},
				Qq: function() {
					return ae
				},
				Td: function() {
					return l
				},
				Z: function() {
					return K
				},
				a: function() {
					return C
				},
				a5: function() {
					return ie
				},
				c7: function() {
					return ge
				},
				du: function() {
					return E
				},
				ec: function() {
					return ne
				},
				f: function() {
					return be
				},
				fo: function() {
					return se
				},
				hL: function() {
					return Q
				},
				ji: function() {
					return q
				},
				jo: function() {
					return P
				},
				l9: function() {
					return Ke
				},
				lI: function() {
					return i
				},
				p1: function() {
					return w
				},
				pK: function() {
					return Se
				},
				pf: function() {
					return r
				},
				qR: function() {
					return _
				},
				rV: function() {
					return u
				},
				u1: function() {
					return n
				},
				w4: function() {
					return a
				},
				yD: function() {
					return L
				}
			});
			var e = t("../react/utils/url.ts"),
				o = t("../react/pages/internal-dns/constants.ts");

			function s(Y, ye) {
				return Y && Y[ye]
			}
			const p = Y => !i(Y).isRequesting;

			function i(Y) {
				return Y.entitlements.zone
			}

			function v(Y) {
				return i(Y).data
			}
			const c = Y => {
				var ye, $e;
				return ((ye = i(Y).paginationData) === null || ye === void 0 || ($e = ye.options) === null || $e === void 0 ? void 0 : $e.editedDate) || {}
			};

			function u(Y, ye) {
				const $e = v(Y);
				return $e ? s($e, ye) : void 0
			}
			const E = (Y, ye) => u(Y, ye) === !0;

			function n(Y) {
				return Y.entitlements.account
			}

			function r(Y) {
				return n(Y).data
			}
			const a = Y => {
				var ye, $e;
				return ((ye = n(Y).paginationData) === null || ye === void 0 || ($e = ye.options) === null || $e === void 0 ? void 0 : $e.editedDate) || {}
			};

			function g(Y) {
				return !n(Y).isRequesting
			}

			function m(Y, ye) {
				const $e = r(Y);
				return $e ? s($e, ye) : void 0
			}

			function d(Y, ye) {
				return m(Y, ye) === !0
			}

			function h(Y, ye) {
				return ye.every($e => d(Y, $e))
			}

			function w(Y) {
				return d(Y, "contract.customer_enabled")
			}

			function _(Y) {
				return d(Y, "contract.self_service_allowed")
			}

			function l(Y) {
				return d(Y, "billing.partners_managed")
			}
			const C = Y => w(Y) && _(Y),
				f = Y => d(Y, "enterprise.ecp_allowed");

			function O(Y) {
				return k(Y) || d(Y, "argo.allow_smart_routing") || d(Y, "argo.allow_tiered_caching") || d(Y, "rate_limiting.enabled") || d(Y, "ctm.enabled") || d(Y, "workers.enabled") || d(Y, "workers.kv_store.enabled") || d(Y, "stream.enabled")
			}
			const k = Y => E(Y, "argo.allow_smart_routing") || E(Y, "argo.allow_tiered_caching"),
				A = Y => d(Y, "zone.partial_setup_allowed") || E(Y, "zone.partial_setup_allowed"),
				P = Y => d(Y, "argo.allow_smart_routing") || E(Y, "argo.allow_smart_routing"),
				D = Y => d(Y, "argo.allow_tiered_caching") || E(Y, "argo.allow_tiered_caching"),
				b = Y => P(Y) || D(Y),
				I = Y => d(Y, "ctm.enabled"),
				S = Y => {
					const ye = m(Y, "ctm.load_balancers");
					return typeof ye == "number" ? ye : 0
				},
				x = Y => {
					const ye = m(Y, "ctm.pools");
					return typeof ye == "number" ? ye : 0
				},
				$ = Y => {
					const ye = m(Y, "ctm.origins");
					return typeof ye == "number" ? ye : 0
				},
				ne = Y => d(Y, "workers.enabled"),
				ee = Y => d(Y, "stream.enabled"),
				re = Y => {
					const ye = m(Y, "access.users_allowed");
					return typeof ye == "number" ? ye : 0
				},
				W = Y => re(Y) > 0,
				N = Y => {
					const ye = u(Y, "dedicated_certificates");
					return typeof ye == "number" ? ye : 0
				},
				R = Y => N(Y) > 0,
				G = Y => {
					const ye = u(Y, "rate_limiting.max_rules");
					return typeof ye == "number" ? ye : 0
				},
				U = Y => d(Y, "rate_limiting.enabled"),
				z = Y => {
					const ye = u(Y, "page_rules");
					return typeof ye == "number" ? ye : 0
				},
				H = Y => z(Y) > 0,
				Z = Y => {
					const ye = m(Y, "dns_firewall.max_clusters_allowed");
					return typeof ye == "number" ? ye : 0
				},
				F = Y => Z(Y) > 0,
				q = Y => E(Y, "zone.advanced_certificate_manager") || d(Y, "zone.advanced_certificate_manager"),
				L = Y => u(Y, "authoritative_dns.proxy_record_allowed") === !1 || m(Y, "authoritative_dns.proxy_record_allowed") === !1,
				K = Y => d(Y, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				Q = Y => u(Y, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				ie = Y => {
					const ye = u(Y, "authoritative_dns.min_record_ttl_allowed");
					return typeof ye == "number" && ye > 1 ? ye : 60
				},
				V = Y => {
					const ye = m(Y, o.yt);
					return typeof ye == "number" ? ye : 0
				},
				ae = Y => d(Y, "foundation_dns.advanced_nameservers_allowed") || E(Y, "foundation_dns.advanced_nameservers_allowed"),
				ge = Y => d(Y, "authoritative_dns.account_custom_nameservers_allowed"),
				Ce = Y => E(Y, "authoritative_dns.zone_custom_nameservers_allowed"),
				se = Y => Ce(Y) || ge(Y),
				be = (Y, ye) => ((0, e.el)(window.location.pathname) ? u : m)(Y, ye),
				Ae = Y => ((0, e.el)(window.location.pathname) ? v : r)(Y),
				Re = Y => d(Y, "authoritative_dns.multi_provider_allowed") || E(Y, "authoritative_dns.multi_provider_allowed"),
				We = Y => E(Y, "authoritative_dns.cname_flattening_allowed"),
				Se = Y => d(Y, "secondary_dns.secondary_overrides") || E(Y, "secondary_dns.secondary_overrides"),
				at = Y => d(Y, "authoritative_dns.custom_soa_allowed") || E(Y, "authoritative_dns.custom_soa_allowed"),
				Ve = Y => d(Y, "authoritative_dns.custom_ns_ttl_allowed") || E(Y, "authoritative_dns.custom_ns_ttl_allowed"),
				et = Y => d(Y, "secondary.create_zone"),
				Ke = Y => ae(Y) || ge(Y) || Re(Y) || et(Y) || Se(Y) || at(Y) || Ve(Y)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return i
				},
				v: function() {
					return v
				}
			});
			var e = t("../react/utils/i18n.ts"),
				o = t("../../../common/intl/intl-types/src/index.ts"),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				p = t("../react/utils/bootstrap.ts");
			const i = c => {
				if ((0, p.gm)()) return s.Z.set(e.ly, e.ZW), e.ZW;
				const u = c.userCommPreferences.data;
				if (u == null ? void 0 : u["language-locale"]) return (0, e.i_)(u["language-locale"]), u["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const E = (0, e.Kd)();
					return v(E) ? E : e.ZW
				}
			};

			function v(c) {
				const u = Object.keys(o.Q).find(E => o.Q[E] === c);
				return !!c && typeof c == "string" && u != null && (0, e.S8)(u)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				$8: function() {
					return i
				},
				BG: function() {
					return E
				},
				BY: function() {
					return l
				},
				GP: function() {
					return m
				},
				GU: function() {
					return C
				},
				PR: function() {
					return s
				},
				h8: function() {
					return n
				},
				kk: function() {
					return h
				},
				l8: function() {
					return c
				},
				mV: function() {
					return d
				},
				vW: function() {
					return v
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const o = f => f.user,
				s = (0, e.P1)("user", o),
				p = f => {
					var O;
					return (O = s(f)) === null || O === void 0 ? void 0 : O.email.endsWith("@cloudflare.com")
				},
				i = f => {
					var O;
					return !!((O = s(f)) === null || O === void 0 ? void 0 : O.id)
				},
				v = f => {
					const O = s(f);
					if (!!O) return O.first_name && O.last_name ? `${O.first_name} ${O.last_name}` : O.email
				},
				c = f => {
					const O = s(f);
					return O && O.has_enterprise_zones
				},
				u = f => f.userCommPreferences,
				E = (0, e.P1)("userCommPreferences", u),
				n = f => {
					const O = s(f);
					return O && O.email_verified
				},
				r = f => {
					const O = E(f);
					return O && O.preferences.marketing_communication
				},
				a = f => f.userDetails,
				g = (0, e.P1)("userDetails", a),
				m = f => {
					const O = g(f);
					return O && O["2FA-RECOVERY"] === "scheduled"
				},
				d = f => {
					const O = g(f);
					return O && O["2FA-RECOVERY"] === "interrupted"
				},
				h = f => {
					const O = g(f);
					return O == null ? void 0 : O["NEW-USER-EMAIL"]
				},
				w = f => f.gates.assignments,
				_ = (f, O) => f && f[O];

			function l(f, O) {
				const k = w(f);
				return k ? _(k, O) : void 0
			}
			const C = (f, O) => l(f, O) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return A
				},
				$t: function() {
					return nt
				},
				A4: function() {
					return w
				},
				Cu: function() {
					return _
				},
				DQ: function() {
					return ge
				},
				Ej: function() {
					return b
				},
				FH: function() {
					return C
				},
				ID: function() {
					return z
				},
				Iu: function() {
					return h
				},
				Ko: function() {
					return Se
				},
				Le: function() {
					return be
				},
				Ly: function() {
					return L
				},
				M3: function() {
					return Y
				},
				N8: function() {
					return Ke
				},
				NY: function() {
					return V
				},
				Ns: function() {
					return F
				},
				Ox: function() {
					return Ie
				},
				P4: function() {
					return I
				},
				RO: function() {
					return G
				},
				Tr: function() {
					return We
				},
				U: function() {
					return l
				},
				Ug: function() {
					return O
				},
				V6: function() {
					return ye
				},
				WR: function() {
					return rt
				},
				Xg: function() {
					return d
				},
				ZB: function() {
					return se
				},
				_y: function() {
					return H
				},
				bR: function() {
					return D
				},
				cU: function() {
					return at
				},
				cg: function() {
					return ae
				},
				d2: function() {
					return re
				},
				il: function() {
					return q
				},
				jN: function() {
					return x
				},
				jg: function() {
					return Q
				},
				kC: function() {
					return P
				},
				kf: function() {
					return $e
				},
				ko: function() {
					return R
				},
				mK: function() {
					return dt
				},
				nA: function() {
					return m
				},
				oY: function() {
					return S
				},
				qM: function() {
					return Ae
				},
				rq: function() {
					return ie
				},
				tS: function() {
					return k
				},
				tU: function() {
					return ne
				},
				vB: function() {
					return mt
				},
				vM: function() {
					return $
				},
				wH: function() {
					return f
				},
				wn: function() {
					return Ce
				},
				xU: function() {
					return ee
				},
				xw: function() {
					return Re
				},
				z5: function() {
					return U
				},
				zW: function() {
					return Be
				},
				zh: function() {
					return W
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/app/redux/normalizer.js"),
				s = t("../../../../node_modules/lodash/get.js"),
				p = t.n(s),
				i = t("../../../../node_modules/moment/moment.js"),
				v = t.n(i),
				c = t("../react/common/constants/billing/index.ts");

			function u(te) {
				for (var ce = 1; ce < arguments.length; ce++) {
					var fe = arguments[ce] != null ? Object(arguments[ce]) : {},
						Ue = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && Ue.push.apply(Ue, Object.getOwnPropertySymbols(fe).filter(function(Ne) {
						return Object.getOwnPropertyDescriptor(fe, Ne).enumerable
					})), Ue.forEach(function(Ne) {
						E(te, Ne, fe[Ne])
					})
				}
				return te
			}

			function E(te, ce, fe) {
				return ce = n(ce), ce in te ? Object.defineProperty(te, ce, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : te[ce] = fe, te
			}

			function n(te) {
				var ce = r(te, "string");
				return typeof ce == "symbol" ? ce : String(ce)
			}

			function r(te, ce) {
				if (typeof te != "object" || te === null) return te;
				var fe = te[Symbol.toPrimitive];
				if (fe !== void 0) {
					var Ue = fe.call(te, ce || "default");
					if (typeof Ue != "object") return Ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ce === "string" ? String : Number)(te)
			}
			const a = (0, o.P1)("zone", te => te.zone),
				g = te => {
					var ce;
					return (ce = te.zoneVersioning) === null || ce === void 0 ? void 0 : ce.zoneVersionSelector
				},
				m = (0, e.P1)(a, g, (te, ce) => {
					var fe, Ue, Ne;
					let Ze;
					if (Array.isArray(te) && te.length === 1 ? Ze = te[0] : te && !Array.isArray(te) && (Ze = te), !Ze) return;
					const He = !!(ce == null ? void 0 : ce.enabled);
					return u({}, Ze, Ze.name && {
						name: He ? ce.rootZoneName : Ze.name
					}, {
						versioning: {
							enabled: He,
							isRoot: !((fe = Ze.name) === null || fe === void 0 ? void 0 : fe.endsWith(".config.cfdata.org")),
							version: He ? ce.selectedVersion : 0,
							rootZoneId: He ? ce.rootZoneId : (Ue = (Ne = Ze) === null || Ne === void 0 ? void 0 : Ne.id) !== null && Ue !== void 0 ? Ue : ""
						}
					})
				}),
				d = te => te.zone,
				h = te => te.zone.isRequesting,
				w = (0, e.P1)(m, d, (te, ce) => ({
					data: te,
					meta: ce
				})),
				_ = te => {
					var ce, fe;
					return (ce = (fe = m(te)) === null || fe === void 0 ? void 0 : fe.id) !== null && ce !== void 0 ? ce : ""
				},
				l = te => te.zones,
				C = te => te.zonesRoot,
				f = te => te.zonesAccount,
				O = (0, o.P1)("zones", l),
				k = (0, o.P1)("zonesRoot", C),
				A = (0, o.P1)("zonesAccount", f);

			function P(te) {
				const ce = m(te);
				return ce ? ce.created_on : null
			}
			const D = te => {
				var ce;
				const fe = m(te);
				return u({}, fe, {
					id: (fe == null || (ce = fe.versioning) === null || ce === void 0 ? void 0 : ce.enabled) ? fe == null ? void 0 : fe.versioning.rootZoneId : fe == null ? void 0 : fe.id
				})
			};

			function b(te, ce, fe) {
				const Ue = P(te);
				if (!Ue) return;
				const Ne = v().duration(ce, fe),
					Ze = new Date(Ue),
					He = new Date(new Date().getTime() - Ne.asMilliseconds());
				return Ze.getTime() > He.getTime()
			}

			function I(te) {
				const ce = m(te);
				return ce ? ce.status : null
			}

			function S(te) {
				const ce = m(te);
				return ce ? ce.type : null
			}

			function x(te) {
				return (te == null ? void 0 : te.plan_pending) ? te == null ? void 0 : te.plan_pending : te == null ? void 0 : te.plan
			}

			function $(te) {
				const ce = m(te);
				if (!ce) return;
				const fe = x(ce);
				return fe && fe.legacy_id
			}

			function ne(te, ce) {
				const fe = x(te);
				return !!fe && c.Gs.indexOf(fe.legacy_id) >= c.Gs.indexOf(ce)
			}

			function ee(te) {
				return !!te && te.status === "initializing"
			}

			function re(te) {
				return !!te && te.status === "pending"
			}

			function W(te) {
				return !!te && te.status === "active"
			}

			function N(te, ce) {
				if (!te) return !1;
				const fe = x(te);
				return !!fe && fe.legacy_id === ce
			}

			function R(te) {
				return N(te, "enterprise")
			}
			const G = te => R(m(te));

			function U(te) {
				return N(te, "business")
			}
			const z = te => U(m(te));

			function H(te) {
				return N(te, "pro")
			}
			const Z = te => H(m(te));

			function F(te) {
				return N(te, "free")
			}
			const q = te => F(m(te));

			function L(te) {
				return !R(te)
			}

			function K(te) {
				return te && te.owner
			}

			function Q(te, ce) {
				const fe = K(ce);
				return !!fe && fe.type === "user" && fe.id === te.id
			}

			function ie(te) {
				const ce = m(te);
				return !!ce && ce.type === "partial"
			}

			function V(te) {
				const ce = m(te);
				return !!ce && ce.type === "secondary"
			}
			const ae = te => {
					var ce;
					const fe = m(te);
					return !!(fe == null ? void 0 : fe.host) && !!((ce = fe.plan) === null || ce === void 0 ? void 0 : ce.externally_managed)
				},
				ge = te => {
					const ce = O(te);
					return ce && ce.some(R)
				},
				Ce = (te, ce) => {
					const fe = m(te);
					return fe && fe.betas ? fe.betas.includes(ce) : !1
				},
				se = (te, ...ce) => p()(te, ["zoneFlags", "data", ...ce]),
				be = (te, ...ce) => p()(te, ["accountFlags", "data", ...ce]),
				Ae = te => te.accountFlags.isRequesting,
				Re = te => te.zoneFlags.isRequesting,
				We = (te, ...ce) => p()(te, ["zoneFlagsChanges", "data", ...ce]),
				Se = te => te.zoneFlagsChanges.isRequesting,
				at = te => te.zoneFlags && te.zoneFlags.data,
				Ve = te => te.zoneFlags,
				et = (0, e.P1)(at, Ve, (te, ce) => ({
					data: te,
					meta: ce
				})),
				Ke = (0, o.P1)("abuseUrls", te => te.overview.abuseUrls),
				Y = te => {
					const ce = m(te);
					return ce ? `/${ce.account.id}/${ce.name}` : null
				},
				ye = te => te.zoneMarketingCampaigns,
				$e = te => te.overview.zoneBlocks.data,
				Be = te => te.overview.zoneBlocks.isRequesting,
				nt = te => te.overview.zoneBlocks.hasData,
				dt = te => {
					var ce, fe;
					return (te == null || (ce = te.overview.zoneBlocks) === null || ce === void 0 || (fe = ce.paginationData) === null || fe === void 0 ? void 0 : fe.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				mt = te => te.overview.zoneBlocksReview.isRequesting,
				Ie = te => te.overview.zoneHold,
				rt = (0, o.P1)("zoneHold", Ie)
		},
		"../react/common/utils/formatDate.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			y.Z = (o, s, p = !1) => (0, e.p6)(o, s, p)
		},
		"../react/common/utils/getEnvironment.ts": function(B, y, t) {
			"use strict";
			var e = t("../../../../node_modules/cookie/index.js"),
				o = t("../functions/utils/preview-deploy-helpers.ts"),
				s = t("../functions/utils/constants.ts");
			const p = () => {
				var i, v, c;
				const E = e.parse(document.cookie)[s.b1];
				let n = null;
				E && (n = (0, o.E9)(E));
				let r = "production";
				switch (!0) {
					case ((i = n) === null || i === void 0 ? void 0 : i.projectType) === "canary":
						r = "canary";
						break;
					case ((v = window) === null || v === void 0 || (c = v.build) === null || c === void 0 ? void 0 : c.isPreviewDeploy):
						r = "preview";
						break
				}
				return r
			};
			y.Z = p
		},
		"../react/common/utils/hasRole.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				n: function() {
					return o
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const o = (s, p) => {
				const {
					roles: i = []
				} = (0, e.uF)(s) || {};
				return p.some(v => i.includes(v))
			}
		},
		"../react/common/utils/isGuards.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				$K: function() {
					return c
				},
				Q$: function() {
					return s
				},
				t: function() {
					return v
				},
				v5: function() {
					return p
				},
				zE: function() {
					return i
				}
			});
			var e = t("../react/common/constants/index.ts"),
				o = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const s = u => u ? ["page", "per_page", "count", "total_count"].every(n => n in u && u[n]) : !1,
				p = (u = "") => e.Dy.includes(u.toLowerCase()),
				i = u => u !== null && typeof u == "object" && "name" in u && "size" in u && "type" in u && typeof u.slice == "function",
				v = u => (0, o.Z)(u),
				c = u => u != null
		},
		"../react/common/utils/oidc.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				c: function() {
					return e
				},
				e: function() {
					return o
				}
			});
			let e = function(s) {
				return s.Apple = "apple", s.Google = "google", s
			}({});
			const o = (s, p) => {
				const i = "production",
					v = `oidc${i==="staging"?"-staging":""}.iam.cfapi.net`,
					u = new URLSearchParams(window.location.search).get("login_challenge");
				let E = `https://${v}/api/v1/sso/init?client=${s}&env=${i}`;
				return p && (E = E + `&jwt=${p}`), u && (E += `&login_challenge=${encodeURIComponent(u)}`), E
			}
		},
		"../react/common/utils/useQueryCache.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				o: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function o(c) {
				for (var u = 1; u < arguments.length; u++) {
					var E = arguments[u] != null ? Object(arguments[u]) : {},
						n = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(E).filter(function(r) {
						return Object.getOwnPropertyDescriptor(E, r).enumerable
					})), n.forEach(function(r) {
						s(c, r, E[r])
					})
				}
				return c
			}

			function s(c, u, E) {
				return u = p(u), u in c ? Object.defineProperty(c, u, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[u] = E, c
			}

			function p(c) {
				var u = i(c, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function i(c, u) {
				if (typeof c != "object" || c === null) return c;
				var E = c[Symbol.toPrimitive];
				if (E !== void 0) {
					var n = E.call(c, u || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(c)
			}
			const v = c => {
				const u = (0, e.useQueryClient)(),
					E = l => {
						var C;
						return u.getQueriesData((C = l) !== null && C !== void 0 ? C : c)
					},
					n = l => {
						var C;
						return u.getQueryData((C = l) !== null && C !== void 0 ? C : c)
					},
					r = l => {
						var C;
						return u.getQueriesData({
							queryKey: (C = l) !== null && C !== void 0 ? C : c,
							stale: !0
						})
					},
					a = (l, C) => {
						var f;
						u.setQueryData((f = C) !== null && f !== void 0 ? f : c, l)
					},
					g = async l => {
						var C;
						await u.refetchQueries((C = l) !== null && C !== void 0 ? C : c)
					}, m = async (l, C) => {
						var f, O;
						await u.invalidateQueries((f = l) !== null && f !== void 0 ? f : c, o({
							refetchActive: !1
						}, (O = C) !== null && O !== void 0 ? O : {}))
					}, d = async (l, C) => {
						const f = l || (O => {
							var k;
							return (O == null || (k = O.queryKey) === null || k === void 0 ? void 0 : k[0]) === c
						});
						await u.invalidateQueries(o({
							predicate: f,
							refetchActive: !1,
							refetchInactive: !1
						}, C))
					};
				return {
					refetch: g,
					cancelData: async () => {
						await u.cancelQueries(c)
					},
					invalidate: m,
					setData: a,
					getDataStale: r,
					getData: E,
					prefetchQuery: (l, C) => {
						var f;
						return u.prefetchQuery((f = C) !== null && f !== void 0 ? f : c, l)
					},
					getQueryData: n,
					predicateInvalidate: d,
					batchInvalidate: async ({
						queryKeysToInvalidate: l = [],
						queryKeysToPredicateInvalidate: C = [],
						refetchActive: f = !1,
						refetchInactive: O = !1
					}) => {
						const k = l.map(P => m(P)),
							A = C.map(P => d(D => {
								var b;
								return (D == null || (b = D.queryKey) === null || b === void 0 ? void 0 : b[0]) === P
							}, {
								refetchActive: f,
								refetchInactive: O
							}));
						await Promise.all([...k, ...A])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(B, y, t) {
			"use strict";
			t.d(y, {
				K2: function() {
					return o
				},
				Lb: function() {
					return s
				},
				XI: function() {
					return p
				},
				bK: function() {
					return u
				},
				jk: function() {
					return c
				},
				wb: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = E => /^https?:\/\/(.*)/.test(E),
				s = E => e.default.hostname.test(E),
				p = E => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(E),
				i = E => /^[!-~]+$/.test(E),
				v = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				c = E => v.test(E),
				u = E => !!E && !!E.length && /^[ -~]+$/.test(E)
		},
		"../react/pages/abuse/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Cg: function() {
					return g
				},
				EO: function() {
					return u
				},
				Iy: function() {
					return c
				},
				RV: function() {
					return a
				},
				R_: function() {
					return v
				},
				Vq: function() {
					return l
				},
				Y0: function() {
					return _
				},
				bL: function() {
					return f
				},
				bx: function() {
					return w
				},
				dM: function() {
					return k
				},
				dV: function() {
					return O
				},
				eM: function() {
					return r
				},
				i9: function() {
					return i
				},
				nq: function() {
					return d
				},
				pj: function() {
					return n
				},
				to: function() {
					return C
				},
				xR: function() {
					return E
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				s = t("../react/pages/abuse/abuse.translations.ts"),
				p = t("../react/pages/abuse/types.ts");
			const i = "customer-abuse-reports-table-filter-bar",
				v = "abuse-reports-table-tooltip",
				c = "abuse-reports-cache-rate-limits-table-tooltip",
				u = "abuse-reports-blocks-tables-tooltip",
				E = "customer-abuse-reports-table-filter-bar",
				n = {
					LIST_MITIGATIONS: "com.cloudflare.api.account.abuse-reports.mitigations.list",
					APPEAL_ACTIVE_BLOCKS: "com.cloudflare.api.account.zone.blocks.request-review",
					APPEAL_PENDING_BLOCKS: "com.cloudflare.api.account.abuse-reports.actions.request-review",
					APPEAL_MITIGATIONS: "com.cloudflare.api.account.abuse-reports.mitigations.appeal",
					LIST_REPORTS: "com.cloudflare.api.account.abuse-reports.list",
					READ_REPORT: "com.cloudflare.api.account.abuse-reports.read"
				},
				r = {
					abuse: (0, o.BC)`/${"accountId"}/abuse-reports`,
					abuseReport: (0, o.BC)`/${"accountId"}/abuse-reports/report/${"reportId"}`,
					abuseReportTab: (0, o.BC)`/${"accountId"}/abuse-reports/report/${"reportId"}/${"tab"}`
				};
			let a = function(A) {
				return A.BLOCKED_CONTENT = "blocked-content", A.CACHE_RATE_LIMITS = "cache-rate-limits", A
			}({});
			const g = [{
					title: s.keys.tab_titles.blocked_content,
					url: `/${a.BLOCKED_CONTENT}`
				}, {
					title: s.keys.tab_titles.cache_rate_limits,
					url: `/${a.CACHE_RATE_LIMITS}`
				}],
				m = {
					accepted: "gray",
					in_review: "gray"
				},
				d = {
					active: "red",
					cancelled: "gray",
					in_review: "blue",
					pending: "orange",
					removed: "gray"
				},
				h = null,
				w = ["active", "cancelled", "in_review", "pending", "removed"],
				_ = ["accepted", "in_review"];
			let l = function(A) {
				return A.APPEAL_MITIGATION_SUBMIT = "appeal abuse report mitigation submit", A.APPEAL_MITIGATION_SUCCESS = "appeal abuse report mitigation success", A.APPEAL_MITIGATION_FAILURE = "appeal abuse report mitigation failure", A.CLICK_ABUSE_REPORT_ID = "click abuse report id", A.CLICK_ABUSE_REPORT_MITIGATIONS_LINK = "click abuse report mitigations link", A.ADD_FILTER = "Add filter", A.REMOVE_FILTER = "Remove filter", A.REMOVE_ALL_FILTERS = "Remove all filters", A.NEXT_PAGE = "go to next page", A.PREV_PAGE = "go to prev page", A.GO_TO_PAGE = "go to page", A.SET_PAGE_SIZE = "set page size", A.COPY_TABLE_CELL = "copy table cell", A
			}({});
			const C = {
					initialPaginationState: {
						page: 1,
						perPage: 25
					},
					initialToolbarState: {},
					initialSortState: {
						name: p.mu.CDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: [p.mu.Domain, p.mu.Status, p.mu.Type],
						queryParamStrategy: "sync-with-table-state"
					},
					filters: {
						f1: p.mu.Domain,
						f2: p.mu.Status,
						f3: p.mu.Type,
						f4: "startDate",
						f5: "endDate",
						f6: "timeWindow"
					}
				},
				f = {
					initialPaginationState: {
						page: 1,
						perPage: 25
					},
					initialToolbarState: {},
					initialSortState: {
						name: p.XO.EffectiveDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: [p.XO.Status],
						queryParamStrategy: "sync-with-table-state"
					},
					filters: {
						f1: p.XO.Status,
						f2: "startDate",
						f3: "endDate",
						f4: "timeWindow"
					}
				},
				O = {
					initialPaginationState: {
						page: 1,
						perPage: 5
					},
					initialToolbarState: {},
					initialSortState: {
						name: p.DT.EnforcementDate,
						direction: e.Sr.desc
					}
				},
				k = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: p.DT.CreatedDate,
						direction: e.Sr.desc
					}
				}
		},
		"../react/pages/abuse/types.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				DT: function() {
					return p
				},
				MY: function() {
					return s
				},
				XO: function() {
					return e
				},
				Zy: function() {
					return u
				},
				mu: function() {
					return n
				},
				ut: function() {
					return i
				}
			});
			let e = function(r) {
				return r.Type = "type", r.EffectiveDate = "effective_date", r.Status = "status", r.EntityType = "entity_type", r.EntityId = "entity_id", r
			}({});
			const o = null,
				s = {
					BLOCK_URL: "block_url",
					RATE_LIMIT_CACHE: "rate_limit_cache",
					ACCOUNT_SUSPEND: "account_suspend"
				};
			let p = function(r) {
					return r.BlockType = "blockType", r.CreatedDate = "created", r.EnforcementDate = "enforcement_date", r.Status = "status", r.EntityType = "entity_type", r.EntityId = "entity_id", r
				}({}),
				i = function(r) {
					return r.JIRA = "jira", r.ZENDESK = "zendesk", r.ABUSE_REPORT = "abuse_report", r.CSAM_MATCH = "csam_match", r
				}({}),
				v = function(r) {
					return r.ID = "id", r.DOMAIN = "domain", r.CREATED_BEFORE = "created_before", r.CREATED_AFTER = "created_after", r.STATUS = "status", r.TYPE = "type", r.MITIGATION_STATUS = "mitigation_status", r
				}({}),
				c = function(r) {
					return r.Domain = "domain", r.Status = "status", r.Type = "type", r
				}({}),
				u = function(r) {
					return r.DMCA = "DMCA", r.TRADEMARK = "TM", r.PHISHING = "PHISH", r.GENERAL = "GEN", r.REGISTRAR_WHOIS = "REG_WHO", r.EMERGENCY = "EMER", r.NCSEI = "NCSEI", r.THREAT = "THREAT", r
				}({});
			const E = [u.DMCA, u.TRADEMARK, u.PHISHING, u.GENERAL, u.REGISTRAR_WHOIS, u.EMERGENCY, u.NCSEI, u.THREAT];
			let n = function(r) {
				return r.Id = "id", r.CDate = "cdate", r.Domain = "domain", r.Type = "type", r.Status = "status", r.AcceptedUrls = "accepted_urls", r
			}({})
		},
		"../react/pages/ai-zone/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				$0: function() {
					return o
				},
				A3: function() {
					return d
				},
				AG: function() {
					return i
				},
				Al: function() {
					return u
				},
				NN: function() {
					return E
				},
				Ot: function() {
					return g
				},
				PAY_PER_CRAWL: function() {
					return n
				},
				Pd: function() {
					return a
				},
				TR: function() {
					return c
				},
				UK: function() {
					return m
				},
				c1: function() {
					return s
				},
				nJ: function() {
					return e
				},
				nb: function() {
					return v
				},
				qR: function() {
					return p
				},
				zg: function() {
					return r
				}
			});
			const e = [{
					slug: "amazon-bot",
					name: "Amazonbot",
					operator: "Amazon",
					info: "https://developer.amazon.com/amazonbot",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Amazonbot",
					detectionIds: [118601807, 33563839],
					verified: !0,
					managed: !0
				}, {
					slug: "anchor-browser",
					name: "Anchor Browser",
					operator: "Anchor",
					info: "https://docs.anchorbrowser.io/introduction",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Anchor Browser",
					detectionIds: [124259203],
					verified: !0,
					managed: !0,
					botManagement: !0
				}, {
					slug: "apple",
					name: "Applebot",
					operator: "Apple",
					info: "https://support.apple.com/en-us/119829",
					category: "AI Search",
					categoryId: 51,
					userAgent: "Applebot",
					detectionIds: [120424214, 33563845],
					verified: !0,
					managed: !1
				}, {
					slug: "archive-org-bot",
					name: "archive.org_bot",
					operator: "Internet Archive",
					info: "https://archive.org/details/archive.org_bot",
					category: "Archiver",
					categoryId: 52,
					userAgent: "archive.org_bot",
					detectionIds: [131190766, 33564033],
					verified: !0,
					managed: !1
				}, {
					slug: "bing",
					name: "BingBot",
					operator: "Microsoft",
					info: "https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0",
					category: "Search Engine",
					categoryId: 1,
					userAgent: "bingbot",
					detectionIds: [117479730, 33554461],
					verified: !0,
					managed: !1
				}, {
					name: "Bytespider",
					operator: "ByteDance",
					info: "https://www.bytedance.com/en/",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Bytespider",
					detectionIds: [33563853],
					verified: !1,
					managed: !0
				}, {
					slug: "commoncrawl",
					name: "CCBot",
					operator: "Common Crawl",
					info: "https://commoncrawl.org/faq",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "CCBot",
					detectionIds: [133621792, 33563855],
					verified: !0,
					managed: !0
				}, {
					slug: "chatgpt-user",
					name: "ChatGPT-User",
					operator: "OpenAI",
					info: "https://platform.openai.com/docs/bots",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "ChatGPT-User",
					detectionIds: [132995013, 33563857],
					verified: !0,
					managed: !1
				}, {
					name: "ClaudeBot",
					operator: "Anthropic",
					info: "https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "ClaudeBot",
					detectionIds: [33563859],
					verified: !1,
					managed: !0
				}, {
					name: "Claude-SearchBot",
					operator: "Anthropic",
					info: "https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Claude-SearchBot",
					detectionIds: [33564301],
					verified: !1,
					managed: !0
				}, {
					name: "Claude-User",
					operator: "Anthropic",
					info: "https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Claude-User",
					detectionIds: [33564303],
					verified: !1,
					managed: !0
				}, {
					slug: "duckassistbot",
					name: "DuckAssistBot",
					operator: "DuckDuckGo",
					info: "https://duckduckgo.com/duckduckgo-help-pages/results/duckassistbot",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "DuckAssistBot",
					detectionIds: [126666910, 33564037],
					verified: !0,
					managed: !1
				}, {
					name: "FacebookBot",
					operator: "Meta",
					info: "https://developers.facebook.com/docs/sharing/webmasters/web-crawlers/",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "FacebookBot",
					detectionIds: [33563972],
					verified: !1,
					managed: !0
				}, {
					slug: "google",
					name: "Googlebot",
					operator: "Google",
					info: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers#googlebot",
					category: "Search Engine",
					categoryId: 1,
					userAgent: "Googlebot",
					detectionIds: [120623194, 33554459],
					verified: !0,
					managed: !1
				}, {
					slug: "google-cloudvertexbot",
					name: "Google-CloudVertexBot",
					operator: "Google",
					info: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers#google-cloudvertexbot",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Google-CloudVertexBot",
					detectionIds: [133730073, 33564321],
					verified: !0,
					managed: !0
				}, {
					slug: "gptbot",
					name: "GPTBot",
					operator: "OpenAI",
					info: "https://platform.openai.com/docs/bots",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "GPTBot",
					detectionIds: [123815556, 33563875],
					verified: !0,
					managed: !0
				}, {
					slug: "meta-externalagent",
					name: "Meta-ExternalAgent",
					operator: "Meta",
					info: "https://developers.facebook.com/docs/sharing/webmasters/web-crawlers",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "meta-externalagent",
					detectionIds: [124581738, 33563982],
					verified: !0,
					managed: !0
				}, {
					slug: "meta-externalfetcher",
					name: "Meta-ExternalFetcher",
					operator: "Meta",
					info: "https://developers.facebook.com/docs/sharing/webmasters/web-crawlers",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "meta-externalfetcher",
					detectionIds: [132272919, 33563980],
					verified: !0,
					managed: !1
				}, {
					slug: "mistralai-user",
					name: "MistralAI-User",
					operator: "Mistral",
					info: "https://docs.mistral.ai/robots/",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "MistralAI-User",
					detectionIds: [128950951, 33564323],
					verified: !0,
					managed: !1
				}, {
					slug: "novellum-ai-crawl",
					name: "Novellum AI Crawl",
					operator: "Novellum",
					info: "https://crawl.corp.novellum.ai/docs",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Novellum",
					detectionIds: [121781688],
					verified: !0,
					managed: !0,
					botManagement: !0
				}, {
					slug: "oai-searchbot",
					name: "OAI-SearchBot",
					operator: "OpenAI",
					info: "https://platform.openai.com/docs/bots",
					category: "AI Search",
					categoryId: 51,
					userAgent: "OAI-SearchBot",
					detectionIds: [126255384, 33563986],
					verified: !0,
					managed: !1
				}, {
					slug: "chatgpt-operator",
					name: "Operator",
					operator: "OpenAI",
					info: "https://openai.com/index/introducing-operator/",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "Operator",
					detectionIds: [129220581],
					verified: !0,
					managed: !1,
					botManagement: !0
				}, {
					slug: "perplexity",
					name: "PerplexityBot",
					operator: "Perplexity",
					info: "https://docs.perplexity.ai/guides/bots",
					category: "AI Search",
					categoryId: 51,
					userAgent: "PerplexityBot",
					detectionIds: [120176742, 33563889],
					verified: !0,
					managed: !1
				}, {
					slug: "perplexity-user",
					name: "Perplexity-User",
					operator: "Perplexity",
					info: "https://docs.perplexity.ai/guides/bots",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "Perplexity-User",
					detectionIds: [126871775, 33564371],
					verified: !0,
					managed: !1
				}, {
					slug: "petalbot",
					name: "PetalBot",
					operator: "Huawei",
					info: "https://aspiegel.com/petalbot",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "PetalBot",
					detectionIds: [124150991, 33564369],
					verified: !0,
					managed: !0
				}, {
					slug: "gist-ai-web-bot-auth",
					name: "ProRataInc",
					operator: "ProRata.ai",
					info: "https://gist.ai/",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "ProRataInc",
					detectionIds: [117766436],
					verified: !1,
					managed: !1
				}, {
					name: "Timpibot",
					operator: "Timpi",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Timpibot",
					detectionIds: [33564051],
					verified: !1,
					managed: !0
				}],
				o = [...new Set([...e.map(h => h.operator)])].sort((h, w) => h.localeCompare(w)),
				s = [...new Set([...e.map(h => h.category)])].sort((h, w) => h.localeCompare(w)),
				p = [...new Set([...e.map(h => h.userAgent)])].sort((h, w) => h.localeCompare(w)),
				i = [...new Set([...e.flatMap(h => h.detectionIds)])].sort(),
				v = ["past_24h", "past_7d", "past_14d", "past_month"],
				c = "[CF AI Audit]",
				u = "AI Audit - Block AI bots by User Agent",
				E = "AI Audit - Block AI bots by Bot Detection IDs",
				n = {
					entitlements: {
						publisher: "pay_per_crawl.publisher_enabled",
						operator: "pay_per_crawl.operator_enabled"
					},
					currency: {
						code: "USD",
						symbol: "$"
					},
					minPrice: .01,
					tooltips: {
						payPerCrawlDisabled: "pay-per-crawl-disabled-tooltip",
						stripeRequired: "pay-per-crawl-stripe-required-tooltip",
						termsRequired: "pay-per-crawl-terms-required-tooltip"
					}
				},
				r = "618578",
				a = ["/robots.txt", "/crawlers.json", "/security.txt", "/.well-known/security.txt", "/ads.txt"],
				g = "\u2014",
				m = {
					Amazon: ["amazon.com", "alexa.com"],
					Anchor: ["anchorbrowser.io", "browsermcp.com"],
					Anthropic: ["anthropic.com", "claude.ai"],
					Apple: ["apple.com", "icloud.com", "me.com", "mac.com"],
					ByteDance: ["bytedance.com", "tiktok.com", "douyin.com"],
					"Common Crawl": ["commoncrawl.org"],
					DuckDuckGo: ["duckduckgo.com", "duck.com"],
					Google: ["google.com", "youtube.com"],
					Huawei: ["huawei.com", "huaweicloud.com"],
					"Internet Archive": ["archive.org"],
					Meta: ["facebook.com", "instagram.com", "whatsapp.com", "meta.com"],
					Microsoft: ["bing.com", "msn.com", "microsoft.com"],
					Mistral: ["mistral.ai"],
					Novellum: ["novellum.ai"],
					OpenAI: ["openai.com", "chatgpt.com"],
					Perplexity: ["perplexity.ai"],
					"ProRata.ai": ["prorata.ai"],
					Timpi: ["timpi.io"]
				};
			let d = function(h) {
				return h.BOT_ACTION_CHANGED = "change bot action", h.TERMS_DECISION = "decide terms acceptance", h.STRIPE_CONNECT = "connect stripe account", h.STRIPE_ACCOUNT_VIEWED = "view stripe account", h.PPC_STATUS_CHANGED = "toggle pay per crawl", h.PPC_PRICE_CHANGED = "update crawl price", h.ADD_FILTER = "Add filter", h.REMOVE_FILTER = "Remove filter", h.REMOVE_ALL_FILTERS = "Remove all filters", h.CHANGE_TIME = "Change time window", h
			}({})
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(B, y, t) {
			"use strict";
			t.d(y, {
				DZ: function() {
					return p
				},
				GA: function() {
					return E
				},
				hT: function() {
					return v
				},
				p6: function() {
					return s
				},
				qc: function() {
					return i
				},
				w9: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e);
			const s = a => o().utc(a).format("YYYY-MM-DD"),
				p = a => o().utc(a).format(),
				i = a => o().utc(a).startOf("minute").format(),
				v = a => new Date(a),
				c = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				u = a => {
					const g = a / 60 / 60 / 1e3;
					return c[Object.keys(c).sort((m, d) => d - m).find(m => g >= m)]
				},
				E = (a, g = m => m.avg && m.avg.sampleInterval ? m.avg.sampleInterval : 1) => a.length === 0 ? 1 : a.reduce((m, d) => m + g(d), 0) / a.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = a => n[a]
		},
		"../react/pages/analytics/eos/resources/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				f: function() {
					return e
				}
			});
			const e = {
				ADD_FILTER: "Add filter",
				EDIT_FILTER: "Edit filter",
				REMOVE_FILTER: "Remove filter",
				CHANGE_TIME: "Change time window",
				REMOVE_COLUMN: "Remove column",
				ADD_COLUMN: "Add column",
				QUERY_LOGS: "Click query logs",
				SAVE_QUERY: "Save query",
				USE_SAVED_QUERY: "Use saved query",
				CHANGE_DATASET: "Change dataset",
				CHANGE_LIMIT: "Change limit",
				USE_CUSTOM_SQL: "Click use custom sql",
				USE_BASIC_EDITOR: "Click use basic editor",
				VIEW_DETAILS: "Click view details"
			}
		},
		"../react/pages/blocked-content/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				BW: function() {
					return E
				},
				Gk: function() {
					return d
				},
				Jr: function() {
					return n
				},
				LA: function() {
					return a
				},
				Wk: function() {
					return m
				},
				_V: function() {
					return u
				},
				c5: function() {
					return g
				},
				om: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				s = t("../react/pages/blocked-content/types.ts");

			function p(h) {
				for (var w = 1; w < arguments.length; w++) {
					var _ = arguments[w] != null ? Object(arguments[w]) : {},
						l = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(_).filter(function(C) {
						return Object.getOwnPropertyDescriptor(_, C).enumerable
					})), l.forEach(function(C) {
						i(h, C, _[C])
					})
				}
				return h
			}

			function i(h, w, _) {
				return w = v(w), w in h ? Object.defineProperty(h, w, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[w] = _, h
			}

			function v(h) {
				var w = c(h, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function c(h, w) {
				if (typeof h != "object" || h === null) return h;
				var _ = h[Symbol.toPrimitive];
				if (_ !== void 0) {
					var l = _.call(h, w || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(h)
			}
			const u = "blocked-content-table-tooltip",
				E = {
					account: {
						basePage: (0, o.BC)`/${"accountId"}/blocked-content`,
						[s.$E.Active]: (0, o.BC)`/${"accountId"}/blocked-content/active`,
						[s.$E.Pending]: (0, o.BC)`/${"accountId"}/blocked-content/pending`
					},
					securityCenter: {
						basePage: (0, o.BC)`/${"accountId"}/security-center/blocked-content`,
						[s.$E.Active]: (0, o.BC)`/${"accountId"}/security-center/blocked-content/active`,
						[s.$E.Pending]: (0, o.BC)`/${"accountId"}/security-center/blocked-content/pending`
					}
				},
				n = [{
					category: s.$E.Pending,
					title: "security_center.blocked_content.pending_tab",
					url: "/pending"
				}, {
					category: s.$E.Active,
					title: "security_center.blocked_content.active_tab",
					url: "/active"
				}],
				r = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					cancelled: "gray"
				},
				a = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				g = {
					[s.$E.Active]: [s.M3.Active, s.M3.InReview],
					[s.$E.Pending]: [s.M3.Pending, s.M3.Cancelled]
				},
				m = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: s.fL.EnforcementDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: Object.values(s.GH)
					},
					filters: Object.values(s.GH).reduce((h, w) => p({}, h, {
						[w]: w
					}), {})
				};
			let d = function(h) {
				return h.COPY_URL = "copy blocked content url", h.REQUEST_REVIEW = "request blocked content review", h.ADD_FILTER = "Add filter", h.REMOVE_FILTER = "Remove filter", h
			}({})
		},
		"../react/pages/blocked-content/types.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return e
				},
				GH: function() {
					return i
				},
				Ib: function() {
					return s
				},
				M3: function() {
					return o
				},
				Qy: function() {
					return p
				},
				fL: function() {
					return v
				}
			});
			let e = function(u) {
					return u.Pending = "pending", u.Active = "active", u
				}({}),
				o = function(u) {
					return u.Active = "active", u.InReview = "in_review", u.Pending = "pending", u.Cancelled = "cancelled", u
				}({});
			const s = [o.Pending, o.Cancelled],
				p = [o.Active, o.InReview];
			let i = function(u) {
					return u.Domain = "domain", u.Status = "status", u.BlockType = "blockType", u
				}({}),
				v = function(u) {
					return u.CreatedDate = "created", u.EnforcementDate = "enforcementDate", u.BlockType = "blockType", u.Hostname = "hostname", u.Status = "status", u
				}({}),
				c = function(u) {
					return u.Removed = "removed", u.Misclassified = "misclassified", u
				}({})
		},
		"../react/pages/caching/tracking.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o.CHANGED_ZONE_SETTINGS = "change zone setting", o
			}({})
		},
		"../react/pages/d1/routes.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				H: function() {
					return s
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
				s = {
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
		"../react/pages/dns/api.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				BI: function() {
					return w
				},
				Q8: function() {
					return a
				},
				YJ: function() {
					return g
				},
				hs: function() {
					return E
				},
				mW: function() {
					return d
				},
				u1: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function p(_) {
				for (var l = 1; l < arguments.length; l++) {
					var C = arguments[l] != null ? Object(arguments[l]) : {},
						f = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(C).filter(function(O) {
						return Object.getOwnPropertyDescriptor(C, O).enumerable
					})), f.forEach(function(O) {
						i(_, O, C[O])
					})
				}
				return _
			}

			function i(_, l, C) {
				return l = v(l), l in _ ? Object.defineProperty(_, l, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[l] = C, _
			}

			function v(_) {
				var l = c(_, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function c(_, l) {
				if (typeof _ != "object" || _ === null) return _;
				var C = _[Symbol.toPrimitive];
				if (C !== void 0) {
					var f = C.call(_, l || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(_)
			}
			const u = {
					settings: (0, s.BC)`/zones/${"zoneId"}/dns_settings`
				},
				E = {
					fetchZoneDnsSettings: async _ => {
						try {
							return (await (0, e.get)(u.settings.toUrl({
								zoneId: _
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (l) {
							throw l
						}
					},
					patchZoneDnsSettings: async (_, l) => await (0, e.patch)(u.settings.toUrl({
						zoneId: _
					}), {
						body: l
					})
				},
				n = {
					settings: (0, s.BC)`/accounts/${"accountId"}/dns_settings`
				},
				r = {
					fetchAccountDnsSettings: async _ => {
						try {
							return (await (0, e.get)(n.settings.toUrl({
								accountId: _
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (l) {
							throw l
						}
					},
					patchAccountDnsSettings: async (_, l) => await (0, e.patch)(n.settings.toUrl({
						accountId: _
					}), {
						body: l
					})
				},
				a = {
					dns_records: (0, s.BC)`/zones/${"zoneId"}/dns_records`,
					batch: (0, s.BC)`/zones/${"zoneId"}/dns_records/batch`
				},
				g = {
					getMaxRecords: async (_, l, C, f, O) => {
						var k;
						return (k = (await (0, e.get)(a.dns_records.toUrl({
							zoneId: _
						}), {
							parameters: p({
								per_page: l
							}, f ? {
								search: f
							} : {}, O || {}, C)
						})).body) === null || k === void 0 ? void 0 : k.result
					},
					deleteRecords: async (_, l) => await (0, e.post)(a.batch.toUrl({
						zoneId: _
					}), {
						body: {
							deletes: l
						}
					}),
					patchRecords: async (_, l) => await (0, e.post)(a.batch.toUrl({
						zoneId: _
					}), {
						body: {
							patches: l
						}
					})
				},
				m = {
					custom_ns: (0, s.BC)`/zones/${"zoneId"}/custom_ns`,
					zone: (0, s.BC)`/zones/${"zoneId"}`
				},
				d = {
					fetchZoneCustomNs: async _ => {
						try {
							return (await (0, e.get)(m.custom_ns.toUrl({
								zoneId: _
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (l) {
							throw l
						}
					},
					fetchZoneVanityNameservers: async _ => {
						try {
							return (await (0, e.get)(m.zone.toUrl({
								zoneId: _
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (l) {
							throw l
						}
					},
					createZoneCustomNameserver: async (_, l) => await (0, e.patch)(m.zone.toUrl({
						zoneId: _
					}), {
						body: {
							vanity_name_servers: l
						}
					}),
					assignZoneCustomNsSet: async (_, l) => await (0, e.put)(m.custom_ns.toUrl({
						zoneId: _
					}), {
						body: {
							enabled: !0,
							ns_set: l
						}
					}),
					disableZoneCustomNs: async _ => await (0, e.put)(m.custom_ns.toUrl({
						zoneId: _
					}), {
						body: {
							enabled: !1
						}
					})
				},
				h = {
					custom_ns: (0, s.BC)`/accounts/${"accountId"}/custom_ns`,
					delete: (0, s.BC)`/accounts/${"accountId"}/custom_ns/${"nsName"}`
				},
				w = {
					fetchAccounCustomNs: async _ => {
						try {
							return (await (0, e.get)(h.custom_ns.toUrl({
								accountId: _
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (l) {
							throw l
						}
					},
					createAccountCustomNs: async (_, l) => await (0, e.post)(h.custom_ns.toUrl({
						accountId: _
					}), {
						body: l
					}),
					deleteAccountCustomNs: async (_, l) => await (0, e.del)(h.delete.toUrl({
						accountId: _,
						nsName: l
					}))
				}
		},
		"../react/pages/dns/dns-records/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e
				},
				X: function() {
					return o
				}
			});
			let e = function(s) {
				return s.DNS_RECORD_CREATE = "create DNS records", s.DNS_RECORD_UPDATE = "update DNS records", s.DNS_RECORD_DELETE = "delete DNS records", s.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", s
			}({});
			const o = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/dns/hooks/useZoneDnsSettings.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				c: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				o = t("../react/app/redux/index.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				p = t("../react/pages/dns/api.ts");
			const i = "dns-zone-settings-query-key",
				v = () => {
					var c;
					const u = (0, e.useQueryClient)(),
						E = (0, o.p4)(s.nA),
						n = (c = E == null ? void 0 : E.id) !== null && c !== void 0 ? c : "",
						{
							data: r,
							isError: a,
							isLoading: g,
							refetch: m
						} = (0, e.useQuery)([n, i], () => p.hs.fetchZoneDnsSettings(n), {
							enabled: !!n,
							refetchOnWindowFocus: !1
						}),
						{
							mutate: d,
							isLoading: h,
							isSuccess: w,
							isError: _
						} = (0, e.useMutation)({
							mutationFn: l => p.hs.patchZoneDnsSettings(n, l),
							onSuccess: async () => await u.refetchQueries({
								queryKey: [n, i]
							})
						});
					return {
						zoneDnsData: r,
						isError: a,
						isLoading: g,
						isSuccess: w,
						refetch: m,
						mutateZoneDnsSettings: d,
						isUpdating: h,
						isUpdateError: _
					}
				}
		},
		"../react/pages/dns/types.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				DU: function() {
					return e
				},
				LY: function() {
					return i
				},
				Nc: function() {
					return o
				},
				U7: function() {
					return s
				},
				g9: function() {
					return p
				}
			});
			let e = function(v) {
				return v.STANDARD = "cloudflare.standard", v.RANDOM = "cloudflare.standard.random", v.FOUNDATION = "cloudflare.foundation_dns", v.CUSTOM_ACCOUNT = "custom.account", v.CUSTOM_ZONE = "custom.zone", v
			}({});
			const o = {
				[e.STANDARD]: "account.dns_settings.zone_defaults.table.standard",
				[e.RANDOM]: "account.dns_settings.zone_defaults.table.random",
				[e.FOUNDATION]: "account.dns_settings.zone_defaults.table.foundation",
				[e.CUSTOM_ACCOUNT]: "account.dns_settings.zone_defaults.table.custom"
			};
			let s = function(v) {
					return v.NAME = "queryName", v.RESPONSE_CODE = "responseCode", v.TYPE = "queryType", v.SOURCE_IP = "sourceIP", v.DESTINATION_IP = "destinationIP", v.PROTOCOL = "protocol", v.IP_VERSION = "ipVersion", v.NAME_AND_TYPE = "nameAndType", v.QUERY_TOTALS = "queryTotals", v.COLO = "coloName", v
				}({}),
				p = function(v) {
					return v.TOTAL = "total", v.PER_SECOND = "queries_per_second", v.RESPONSE_AVG = "response_average", v
				}({}),
				i = function(v) {
					return v.MNAME = "soa.mname", v.RNAME = "soa.rname", v.REFRESH = "soa.refresh", v.RETRY = "soa.retry", v.EXPIRE = "soa.expire", v.RECORD_TTL = "soa.ttl", v.MIN_TTL = "soa.min_ttl", v
				}({})
		},
		"../react/pages/email/types.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				BB: function() {
					return o
				},
				Pm: function() {
					return s
				},
				UZ: function() {
					return e
				}
			});
			let e = function(i) {
				return i.ROOT = "root", i.DSTADDRS_CARD = "dstaddrs_card", i.RULES_CARD = "rules_card", i.CATCHALL_CARD = "catchall_card", i.SETTINGS_PAGE = "settings_page", i.WORKERS_PAGE = "workers_page", i
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
			let s = function(i) {
				return i[i.Verified = 0] = "Verified", i[i.Pending = 1] = "Pending", i[i.Missing = 2] = "Missing", i[i.WorkerNotFound = 3] = "WorkerNotFound", i[i.Unknown = 4] = "Unknown", i[i.Loading = 5] = "Loading", i
			}({});
			const p = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return O
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/pages/home/alerts/routes.ts");
			const s = o._.createAlertWithSelection,
				p = o._.editAlert,
				i = (0, e.BC)`${s}/subtype`,
				v = (0, e.BC)`${s}/stepper`,
				c = (0, e.BC)`${v}/${"stepName"}`,
				u = (0, e.BC)`${v}/details`,
				E = (0, e.BC)`${v}/data-centers`,
				n = (0, e.BC)`${v}/ramps`,
				r = (0, e.BC)`${v}/threshold`,
				a = (0, e.BC)`${v}/review`,
				g = (0, e.BC)`${v}/confirm`,
				m = (0, e.BC)`${p}/stepper`,
				d = (0, e.BC)`${m}/${"stepName"}`,
				h = (0, e.BC)`${m}/details`,
				w = (0, e.BC)`${m}/data-centers`,
				_ = (0, e.BC)`${m}/ramps`,
				l = (0, e.BC)`${m}/threshold`,
				C = (0, e.BC)`${m}/review`,
				f = (0, e.BC)`${m}/confirm`,
				O = {
					magicTunnelHealthChooseSubType: i,
					magicTunnelHealthCreateStepperBase: v,
					magicTunnelHealthCreateStepper: c,
					magicTunnelHealthCreateDetails: u,
					magicTunnelHealthCreateSelectDataCenter: E,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: r,
					magicTunnelHealthCreateReview: a,
					magicTunnelHealthCreateConfirm: g,
					magicTunnelHealthEditStepperBase: m,
					magicTunnelHealthEditStepper: d,
					magicTunnelHealthEditDetails: h,
					magicTunnelHealthEditSelectDataCenter: w,
					magicTunnelHealthEditSelectRamps: _,
					magicTunnelHealthEditSetThreshold: l,
					magicTunnelHealthEditReview: C,
					magicTunnelHealthEditConfirm: f
				};
			y.Z = O
		},
		"../react/pages/home/alerts/config.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				jk: function() {
					return a
				},
				w8: function() {
					return g
				}
			});
			var e = t("../react/pages/home/alerts/routes.ts"),
				o = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				s = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				p = t("../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts"),
				i = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function v(m) {
				for (var d = 1; d < arguments.length; d++) {
					var h = arguments[d] != null ? Object(arguments[d]) : {},
						w = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(h).filter(function(_) {
						return Object.getOwnPropertyDescriptor(h, _).enumerable
					})), w.forEach(function(_) {
						c(m, _, h[_])
					})
				}
				return m
			}

			function c(m, d, h) {
				return d = u(d), d in m ? Object.defineProperty(m, d, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[d] = h, m
			}

			function u(m) {
				var d = E(m, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function E(m, d) {
				if (typeof m != "object" || m === null) return m;
				var h = m[Symbol.toPrimitive];
				if (h !== void 0) {
					var w = h.call(m, d || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(m)
			}
			const n = "Notifications",
				r = "notification",
				a = v({}, e._, o._j, s._j, p._),
				g = v({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, i.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				_j: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				s = (0, e.BC)`${o}/pagerduty/connect`,
				p = (0, e.BC)`${o}/pagerduty/register`,
				i = (0, e.BC)`${o}/pagerduty`,
				v = {
					pagerDutyConnect: s,
					pagerDutyRegister: p,
					pagerDutyList: i
				};
			var c = null
		},
		"../react/pages/home/alerts/routes.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${o}/notifications`,
				p = (0, e.BC)`${s}/destinations`,
				i = (0, e.BC)`${s}/create`,
				v = (0, e.BC)`${i}/${"alertType"}`,
				c = (0, e.BC)`${s}/edit/${"alertId"}`,
				u = {
					account: o,
					alerts: s,
					destinations: p,
					createAlert: i,
					createAlertWithSelection: v,
					editAlert: c
				};
			y.Z = u
		},
		"../react/pages/home/alerts/tracking.ts": function(B, y, t) {
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
		"../react/pages/home/audit-log/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Q: function() {
					return o
				},
				v: function() {
					return e
				}
			});
			const e = "audit logs",
				o = {
					TOGGLE_V2: "toggle audit logs",
					FILTER: "filter audit logs",
					FILTER_COUNTS: "filter counts audit logs",
					TIME_RANGE_CHANGED: "Time range changed",
					API_LATENCY: "api latency detected audit logs",
					DETAILS: "Click view details",
					FEEDBACK: "send audit logs feedback"
				}
		},
		"../react/pages/home/configurations/dns-settings/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Aj: function() {
					return v
				},
				Am: function() {
					return E
				},
				Jy: function() {
					return _
				},
				Mv: function() {
					return g
				},
				WI: function() {
					return w
				},
				Wu: function() {
					return c
				},
				b8: function() {
					return u
				},
				cC: function() {
					return l
				},
				e7: function() {
					return d
				},
				gH: function() {
					return r
				},
				hV: function() {
					return m
				},
				nN: function() {
					return n
				},
				uC: function() {
					return h
				}
			});
			var e = t("../react/pages/dns/types.ts");

			function o(k) {
				for (var A = 1; A < arguments.length; A++) {
					var P = arguments[A] != null ? Object(arguments[A]) : {},
						D = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(P).filter(function(b) {
						return Object.getOwnPropertyDescriptor(P, b).enumerable
					})), D.forEach(function(b) {
						s(k, b, P[b])
					})
				}
				return k
			}

			function s(k, A, P) {
				return A = p(A), A in k ? Object.defineProperty(k, A, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[A] = P, k
			}

			function p(k) {
				var A = i(k, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function i(k, A) {
				if (typeof k != "object" || k === null) return k;
				var P = k[Symbol.toPrimitive];
				if (P !== void 0) {
					var D = P.call(k, A || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(k)
			}
			const v = ["hmac-sha512.", "hmac-sha256.", "hmac-sha1."],
				c = ["198.41.144.240/28", "198.41.150.240/28", "2a06:98c0:3601::/48", "2a06:98c0:1401::/48"],
				u = ["172.65.30.82", "172.65.50.145", "2606:4700:60:0:317:26ee:3bdf:5774", "2606:4700:60:0:35a:4be3:4144:c5ee"],
				E = "172.65.64.6",
				n = 86400,
				r = "inlineTsigCreation",
				a = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
				g = /[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
				m = o({
					FORM_NAME: "zone_defaults_form",
					NS_ASSIGNMENT: "nameservers.type",
					NS_TTL: "ns_ttl",
					MULTIPROVIDER: "multi_provider",
					SECONDARY_OVERRIDES: "secondary_overrides"
				}, e.LY),
				d = [{
					label: "account.dns_settings.zone_defaults.configure.cf_standard",
					value: e.DU.STANDARD
				}, {
					label: "account.dns_settings.zone_defaults.configure.cf_random",
					value: e.DU.RANDOM
				}, {
					label: "account.dns_settings.zone_defaults.configure.cf_advanced",
					value: e.DU.FOUNDATION
				}, {
					label: "account.dns_settings.zone_defaults.configure.cf_custom",
					value: e.DU.CUSTOM_ACCOUNT
				}];
			let h = function(k) {
				return k.STANDARD = "standard", k.DNS_ONLY = "dns_only", k.CDN_ONLY = "cdn_only", k
			}({});
			const w = {
					foundation_dns: !1,
					multi_provider: !1,
					nameservers: {
						type: e.DU.STANDARD
					},
					ns_ttl: 86400,
					secondary_overrides: !1,
					zone_mode: h.STANDARD,
					soa: {
						mname: "ns.primaryserver.com",
						rname: "admin.example.com",
						refresh: 1e4,
						retry: 2400,
						ttl: 1800,
						min_ttl: 3600,
						expire: 604800
					}
				},
				_ = {
					FOUNDATION: "https://developers.cloudflare.com/dns/foundation-dns/advanced-nameservers/",
					ZONE_DEFAULTS: "https://developers.cloudflare.com/dns/additional-options/dns-zone-defaults/",
					NS_ASSIGNMENT: "https://developers.cloudflare.com/dns/zone-setups/reference/nameserver-assignment/",
					NS_ASSIGNMENT_METHOD: "https://developers.cloudflare.com/dns/nameservers/nameserver-options/#assignment-method",
					MULTIPROVIDER: "https://developers.cloudflare.com/dns/nameservers/nameserver-options/#multi-provider-dns",
					MULTIPROVIDER_SETUP: "https://developers.cloudflare.com/dns/zone-setups/full-setup/",
					SOA: "https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-soa-record/",
					SECONDARY_OVERRIDE: "https://developers.cloudflare.com/dns/zone-setups/zone-transfers/cloudflare-as-secondary/proxy-traffic/",
					SECONDARY_OVERRIDE_SETUP: "https://developers.cloudflare.com/dns/zone-setups/zone-transfers/cloudflare-as-secondary/"
				},
				l = {
					CARD: "zone-defaults-card",
					TABLE: "zone-defaults-card-table",
					CELLS: {
						NS_TYPE: "zone-defaults-card-table-ns-type",
						NS_TTL: "zone-defaults-card-table-ns-ttl",
						MULTIPROVIDER: "zone-defaults-card-table-multiprovider",
						SOA: "zone-defaults-card-table-soa",
						SECONDARYOVERRIDES: "zone-defaults-card-table-secondaryoverrides"
					},
					CONFIGURATIONS: "zone-defaults-configuration-form",
					INPUT_TTL: "zone-defaults-configuration-input-ns-ttl",
					TOGGLE_MULTIPROVIDER: "zone-defaults-configuration-toggle-multiprovider",
					TOGGLE_SECONDARYOVERRIDE: "zone-defaults-configuration-toggle-secondaryoverride",
					SOA_CONFIG_FORM: "soa-records-configuration-form"
				},
				C = {
					NS_SET: "ns_set",
					NS_NAME: "ns_name",
					IPV4: "ipv4",
					IPV6: "ipv6",
					ACTION: "action",
					NAMESERVER: "nameserver",
					NAMESERVER_NAME: "Nameserver name",
					SET: "set"
				},
				f = {
					ACNS_CARD: "account-custom-nameserver-card",
					ACNS_DELETE: "account-custom-nameserver-card-delete",
					ACNS_CONFIGURE: "account-custom-nameserver-card-configure",
					ACNS_MODAL_INPUT: "account-custom-nameserver-modal-input",
					ACNS_MODAL_RADIO: "account-custom-nameserver-modal-input"
				},
				O = {
					FORM: "account-custom-ns-form",
					NS_SET: "ns_set",
					NS_NAME: "ns_name"
				}
		},
		"../react/pages/home/configurations/dns-settings/isZoneDNSOnly.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				s: function() {
					return c
				}
			});
			var e = t("../react/common/selectors/entitlementsSelectors.ts"),
				o = t("../react/pages/home/configurations/dns-settings/selectors.ts"),
				s = t("../react/pages/dns/hooks/useZoneDnsSettings.ts"),
				p = t("../react/pages/home/configurations/dns-settings/constants.ts"),
				i = t("../react/common/hooks/useScope.tsx"),
				v = t("../react/app/redux/index.ts");
			const c = E => {
					const n = (0, e.yD)(E),
						r = (0, o.Hb)(E);
					return n || r
				},
				u = () => {
					const E = useSelector(zoneIsDNSOnly),
						{
							isZoneScope: n
						} = useScope(),
						{
							zoneDnsData: r
						} = useZoneDnsSettings(),
						a = (r == null ? void 0 : r.zone_mode) === ZONE_MODES.DNS_ONLY;
					return {
						isZoneDNSEntitlementDNSOnly: E,
						isZoneSettingsModeDNSOnly: a,
						isZoneDNSOnly: n ? E || a : !1
					}
				}
		},
		"../react/pages/home/configurations/dns-settings/selectors.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				BJ: function() {
					return i
				},
				Hb: function() {
					return m
				},
				N$: function() {
					return u
				},
				P7: function() {
					return E
				},
				Pw: function() {
					return p
				},
				fF: function() {
					return v
				},
				gA: function() {
					return n
				},
				h3: function() {
					return s
				},
				iI: function() {
					return c
				},
				mT: function() {
					return a
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				o = t("../react/pages/home/configurations/dns-settings/constants.ts");
			const s = d => d.dns.secondaryDNS.acls,
				p = (0, e.P1)("dnsAcl", s),
				i = d => d.dns.secondaryDNS.tsigs,
				v = (0, e.P1)("dnsTsig", i),
				c = d => d.dns.secondaryDNS.masters,
				u = (0, e.P1)("dnsMaster", c),
				E = d => d.dns.secondaryDNS.zoneMasters,
				n = (0, e.P1)("zoneMasters", E),
				r = d => d.dns.secondaryDNS.outgoingZoneTransfers,
				a = (0, e.P1)("dnsOutgoingZoneTransfers", r),
				g = d => {
					var h;
					return (h = d.dns.zoneDnsSettings) === null || h === void 0 ? void 0 : h.data
				},
				m = d => {
					var h, w;
					return ((h = d.dns.zoneDnsSettings) === null || h === void 0 || (w = h.data) === null || w === void 0 ? void 0 : w.zone_mode) === o.uC.DNS_ONLY
				}
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(B, y, t) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(B, y, t) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				AA: function() {
					return Q
				},
				AN: function() {
					return ft
				},
				AY: function() {
					return he
				},
				Ac: function() {
					return Ot
				},
				Am: function() {
					return _
				},
				B2: function() {
					return U
				},
				BB: function() {
					return D
				},
				BF: function() {
					return Ue
				},
				BQ: function() {
					return lt
				},
				E8: function() {
					return X
				},
				Fl: function() {
					return ke
				},
				Fu: function() {
					return S
				},
				Gc: function() {
					return Ct
				},
				Hc: function() {
					return Nt
				},
				IO: function() {
					return it
				},
				JK: function() {
					return Ve
				},
				K: function() {
					return k
				},
				LI: function() {
					return Qe
				},
				LX: function() {
					return ce
				},
				L_: function() {
					return ye
				},
				Ly: function() {
					return Je
				},
				MR: function() {
					return H
				},
				Mj: function() {
					return F
				},
				NB: function() {
					return Mt
				},
				Oe: function() {
					return Ht
				},
				P5: function() {
					return kt
				},
				PE: function() {
					return Ae
				},
				Pd: function() {
					return Tt
				},
				Pk: function() {
					return We
				},
				Pp: function() {
					return nt
				},
				Q1: function() {
					return I
				},
				Qr: function() {
					return fe
				},
				Qv: function() {
					return Re
				},
				Rp: function() {
					return zt
				},
				S7: function() {
					return yt
				},
				Sh: function() {
					return Ye
				},
				Sl: function() {
					return Kt
				},
				Tg: function() {
					return et
				},
				Tp: function() {
					return He
				},
				Uy: function() {
					return Rt
				},
				Vw: function() {
					return $
				},
				W3: function() {
					return Ie
				},
				WR: function() {
					return ut
				},
				WX: function() {
					return ge
				},
				XF: function() {
					return Me
				},
				Xb: function() {
					return ie
				},
				Zs: function() {
					return Y
				},
				_f: function() {
					return Ne
				},
				b4: function() {
					return ae
				},
				bc: function() {
					return At
				},
				c2: function() {
					return z
				},
				cE: function() {
					return Wt
				},
				dh: function() {
					return Be
				},
				fE: function() {
					return $e
				},
				g7: function() {
					return be
				},
				hO: function() {
					return mt
				},
				hV: function() {
					return xt
				},
				hk: function() {
					return l
				},
				hr: function() {
					return V
				},
				it: function() {
					return dt
				},
				j3: function() {
					return jt
				},
				jN: function() {
					return at
				},
				jo: function() {
					return Gt
				},
				k3: function() {
					return It
				},
				m8: function() {
					return N
				},
				nm: function() {
					return Pe
				},
				oW: function() {
					return de
				},
				pH: function() {
					return R
				},
				pi: function() {
					return W
				},
				r4: function() {
					return Yt
				},
				rI: function() {
					return Z
				},
				s7: function() {
					return ht
				},
				sg: function() {
					return vt
				},
				tB: function() {
					return h
				},
				tN: function() {
					return se
				},
				u_: function() {
					return Vt
				},
				vV: function() {
					return Ze
				},
				vc: function() {
					return Se
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				s = t("../../../../node_modules/moment/moment.js"),
				p = t.n(s),
				i = t("../../../common/util/types/src/api/domain.ts"),
				v = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				c = t("../react/utils/url.ts"),
				u = t("../react/pages/home/domain-registration/utils/domain.ts"),
				E = t("../react/pages/home/domain-registration/config.ts"),
				n = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = t("../react/pages/home/domain-registration/types.ts");

			function a(T) {
				for (var M = 1; M < arguments.length; M++) {
					var me = arguments[M] != null ? Object(arguments[M]) : {},
						Oe = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && Oe.push.apply(Oe, Object.getOwnPropertySymbols(me).filter(function(ze) {
						return Object.getOwnPropertyDescriptor(me, ze).enumerable
					})), Oe.forEach(function(ze) {
						g(T, ze, me[ze])
					})
				}
				return T
			}

			function g(T, M, me) {
				return M = m(M), M in T ? Object.defineProperty(T, M, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[M] = me, T
			}

			function m(T) {
				var M = d(T, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function d(T, M) {
				if (typeof T != "object" || T === null) return T;
				var me = T[Symbol.toPrimitive];
				if (me !== void 0) {
					var Oe = me.call(T, M || "default");
					if (typeof Oe != "object") return Oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(T)
			}

			function h(T) {
				return T.filter(M => M.isSelected).reduce((M, {
					name: me,
					fees: Oe,
					isZoneEntitlementPresent: ze
				}) => ze || !(0, e.isNumber)(Oe == null ? void 0 : Oe.transfer_fee) ? M : Ot(me) ? M + (Oe == null ? void 0 : Oe.transfer_fee) * 2 : M + (Oe == null ? void 0 : Oe.transfer_fee), 0)
			}

			function w(T) {
				return T.filter(M => M.registrar.toLowerCase() === "godaddy")
			}
			const _ = "MMM D, YYYY";

			function l(T, M, me, Oe) {
				var ze, ot, pt, Pt, _t, ue, le, ve, _e, we, je, Ge;
				const Fe = T[M.name],
					Xe = () => Ot(M.name) ? p()(M.expires_at).add(2, "years").format(_) : p()(M.expires_at).add(1, "year").format(_);
				return a({
					name: M == null ? void 0 : M.name,
					zone: Fe,
					entitlements: me,
					registryCheck: Oe,
					nameservers: M.name_servers,
					isAvailable: M.available,
					lastKnownStatus: M.last_known_status,
					authCode: M.auth_code,
					isEnterpriseZone: (Fe == null || (ze = Fe.plan) === null || ze === void 0 ? void 0 : ze.legacy_id) === "enterprise",
					isActiveZone: (Fe == null ? void 0 : Fe.status) === "active",
					corResponsesPending: M.cor_responses_pending,
					isCorLocked: M.cor_locked,
					corLockedUntil: M.cor_locked_until ? p()(M.cor_locked_until).format(_) : null,
					isFullZone: (Fe == null ? void 0 : Fe.type) == r.xd.Full,
					isLocked: M.locked,
					registrar: M.current_registrar || E.JM,
					zoneId: Fe == null ? void 0 : Fe.id,
					currentExpiration: p()(M.expires_at).format(_),
					newExpiration: Xe(),
					lastEntitledAt: M.last_entitled_at ? new Date(M.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(me) && !!me.find(tt => tt.id === E.g5 && tt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: M.transfer_in && O(M.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: M.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: M.transfer_in,
					transferOut: M.transfer_out,
					autoRenew: M.auto_renew === !0,
					lastTransferredAt: M.last_transferred_at,
					createdAt: M.created_at,
					paymentExpiresAt: p()(M.payment_expires_at).isValid() ? p()(M.payment_expires_at) : p()(M.expires_at).isValid() ? p()(M.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (ot = M.contacts) === null || ot === void 0 || (pt = ot.administrator) === null || pt === void 0 ? void 0 : pt.id,
						[r.l2.Billing]: (Pt = M.contacts) === null || Pt === void 0 || (_t = Pt.billing) === null || _t === void 0 ? void 0 : _t.id,
						[r.l2.Registrant]: (ue = M.contacts) === null || ue === void 0 || (le = ue.registrant) === null || le === void 0 ? void 0 : le.id,
						[r.l2.Technical]: (ve = M.contacts) === null || ve === void 0 || (_e = ve.technical) === null || _e === void 0 ? void 0 : _e.id
					},
					landing: M.landing,
					privacy: M.privacy,
					whois: M.whois,
					emailVerified: M.email_verified,
					materialChanges: A(M.material_changes),
					corChanges: M.cor_changes ? D(Object.assign(a({}, f), M.cor_changes)) : {},
					registryStatuses: M.registry_statuses ? M.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (we = M.domain_protection_services) === null || we === void 0 ? void 0 : we.status
					},
					deletion: {
						isDeletable: M == null || (je = M.deletion) === null || je === void 0 ? void 0 : je.is_deletable
					},
					premiumType: M == null ? void 0 : M.premium_type,
					fees: M == null ? void 0 : M.fees
				}, M.domain_move && {
					domainMove: {
						ineligibilityReasons: (Ge = M.domain_move) === null || Ge === void 0 ? void 0 : Ge.ineligibility_reasons
					}
				}, M.actionable_metadata && {
					actionableMetadata: C(M.actionable_metadata)
				}, M.policies && {
					policies: a({}, M.policies.suspension && {
						suspension: {
							parked: M.policies.suspension.parked,
							parkingReason: M.policies.suspension.parking_reason,
							paymentExpired: M.policies.suspension.payment_expired
						}
					})
				})
			}

			function C(T) {
				return T.map(M => ({
					accountContext: M.account_context,
					createdAt: M.created_at,
					expiresAt: M.expires_at,
					sentAt: M.sent_at,
					status: M.status,
					type: M.type
				}))
			}
			const f = {
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

			function O(T) {
				switch (T.enter_auth_code) {
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

			function k(T) {
				let M = T.extensions;
				((M == null ? void 0 : M.application_purpose) && (M == null ? void 0 : M.nexus_category) || (M == null ? void 0 : M.ca_legal_type)) && (T.extensions = a({}, (M == null ? void 0 : M.nexus_category) && {
					nexusCategory: M.nexus_category
				}, (M == null ? void 0 : M.application_purpose) && {
					applicationPurpose: M.application_purpose
				}, (M == null ? void 0 : M.ca_legal_type) && {
					ca_legal_type: M.ca_legal_type
				}));
				let me = a({}, typeof T.id == "string" ? {
					id: T.id
				} : {}, {
					first_name: T.firstName,
					organization: T.organization,
					address: T.address1,
					city: T.city,
					state: T.state || "N/A",
					zip: T.zip,
					country: T.country,
					phone: T.phone,
					email: T.email,
					fax: "",
					last_name: T.lastName,
					address2: T.address2,
					email_verified: T.emailVerified
				}, T.extensions ? {
					extensions: a({}, T.extensions.nexusCategory && {
						nexus_category: T.extensions.nexusCategory
					}, T.extensions.applicationPurpose && {
						application_purpose: T.extensions.applicationPurpose
					}, T.extensions.ca_legal_type && {
						ca_legal_type: T.extensions.ca_legal_type
					})
				} : {});
				return Ke(me)
			}

			function A(T) {
				let M = [];
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
				for (const Oe in T) {
					const ze = T[Oe],
						ot = me[ze];
					M.push(ot)
				}
				return M
			}
			const P = T => {
				if (!T) return null;
				let M = T;
				return T.includes("C31") && (M = "C31"), T.includes("C32") && (M = "C32"), M
			};

			function D(T) {
				return a({}, typeof T.id == "string" ? {
					id: T.id
				} : {}, {
					firstName: T.first_name,
					organization: T.organization,
					address1: T.address,
					city: T.city,
					state: T.state,
					zip: T.zip,
					country: T.country,
					phone: T.phone.trim(),
					email: T.email.trim(),
					lastName: T.last_name,
					address2: T.address2,
					emailVerified: T.email_verified
				}, T.extensions ? {
					extensions: a({}, T.extensions.nexus_category && {
						nexusCategory: P(T.extensions.nexus_category)
					}, T.extensions.application_purpose && {
						applicationPurpose: T.extensions.application_purpose
					}, T.extensions.ca_legal_type && {
						ca_legal_type: T.extensions.ca_legal_type
					})
				} : {})
			}

			function b(T = {}) {
				const M = {
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
						}, T.zone && T.zone.plan || {}),
						type: EZoneType.Full
					}, T.zone || {}),
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
					transferConditions: a({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, T.transferConditions || {}),
					transferIn: a({
						unlock_domain: EApiTransferStatus.UNKNOWN,
						disable_privacy: EApiTransferStatus.UNKNOWN,
						enter_auth_code: EApiTransferStatus.UNKNOWN,
						approve_transfer: EApiTransferStatus.UNKNOWN,
						accept_foa: EApiTransferStatus.UNKNOWN,
						can_cancel_transfer: !1
					}, T.transferIn || {}),
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
				return Object.assign(M, T)
			}

			function I(T = {}) {
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
				}, T)
			}

			function S(T) {
				const M = E.Py.concat(E.ui).reduce((me, Oe) => a({}, me, {
					[Oe]: []
				}), {});
				return T.forEach(me => {
					let Oe = x(me.registrar);
					Oe in M || (Oe = E.ui), vt(me.name) && (Oe = "uk"), M[Oe].push(me)
				}), Object.keys(M).sort((me, Oe) => me.localeCompare(Oe)).map(me => ({
					registrar: me,
					domains: M[me]
				})).filter(me => me.domains.length > 0)
			}

			function x(T) {
				return T == null ? void 0 : T.toLowerCase().replace(/\s|,|\./g, "")
			}

			function $(T) {
				if (!T || !T.registrar) return "unknown";
				if (vt(T.name)) return "uk";
				const M = x(T.registrar);
				return M in E.gM ? M : "unknown"
			}
			const ne = [];

			function ee(T) {
				return ne.some(M => T.endsWith("." + M))
			}

			function re(T) {
				return !T.isEnterpriseZone || !Array.isArray(T.entitlements) ? !1 : !!T.entitlements.find(({
					id: M,
					allocation: me
				}) => M === E.g5 && me.value === !0)
			}

			function W(T) {
				var M;
				const me = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let Oe = !1,
					ze = null;
				return (M = T.registryStatuses) === null || M === void 0 || M.some(ot => {
					me.includes(ot) && (ze = ot, Oe = !0)
				}), [Oe, ze]
			}

			function N(T, M = !1) {
				if (!T) return [!1, n.keys.cannot_transfer_default];
				if (T.zone.status !== "active") return [!1, n.keys.cannot_transfer_zone_not_active];
				if (!T.isFullZone && !re(T)) return [!1, n.keys.cannot_transfer_zone_not_eligible];
				if (T.registrar === "Cloudflare") return [!1, n.keys.cannot_transfer_domain_on_cf];
				if (T.isAvailable) return [!1, n.keys.cannot_transfer_domain_available];
				if (!T.transferConditions) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (!M && (0, u.Ou)(T == null ? void 0 : T.name)) return [!1, n.keys.cannot_transfer_domain_tld_not_supported];
				if (R(T)) return [!1, n.keys.cannot_transfer_domain_transfer_in_progress];
				let me;
				for (me in T.transferConditions)
					if (me !== "not_premium" && !T.transferConditions[me]) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (ee(T.name)) return [!1, n.keys.cannot_transfer_domain_tld_not_supported];
				const [Oe, ze] = W(T);
				return Oe && ze ? [!1, n.keys.cannot_transfer_domain_registry_status[ze]] : [!0, ""]
			}

			function R(T) {
				var M, me;
				return !!T.transferIn && !((M = T.transferConditions) === null || M === void 0 ? void 0 : M.not_started) && !!(vt(T.name) || ((me = T.registryStatuses) === null || me === void 0 ? void 0 : me.includes(r.rj.PENDING_TRANSFER)))
			}

			function G(T) {
				return !!T.registrar && !!T.currentExpiration
			}

			function U(T, M = !1) {
				const [me] = N(T, M);
				return G(T) ? Ce(T) ? r.M5.InProgressOrOnCF : me ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function z(T) {
				return T.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(T.transferIn.enter_auth_code) || !1
			}

			function H(T) {
				return T.registrar === "Cloudflare"
			}

			function Z(T) {
				return !!(T == null ? void 0 : T.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function F(T) {
				return !!(T == null ? void 0 : T.includes(r.rj.PENDING_TRANSFER))
			}
			const q = "Invalid date";

			function L(T) {
				return T.newExpiration === q ? !1 : T.newExpiration
			}

			function K(T) {
				return T.currentExpiration === q ? !1 : T.currentExpiration
			}

			function Q(T) {
				return T.substring(T.indexOf("."))
			}

			function ie(T = "") {
				return T.indexOf(".") !== -1 ? T.substring(0, T.indexOf(".")) : T
			}

			function V(T) {
				return T.map(M => M.name).map(M => Q(M)).filter((M, me, Oe) => !Oe.includes(M, me + 1))
			}

			function ae(T) {
				if (E.no) return [!0, ""];
				if (!H(T)) return [!1, r.ok.NotOnCF];
				if (T.isCorLocked) return [!1, T.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (T.lastTransferredAt) {
					const M = p()(T.lastTransferredAt),
						me = p().duration(p()().diff(M)).as("days"),
						Oe = vt(T.name);
					if (me < (Oe ? 1 : 60)) return [!1, Oe ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (T.createdAt) {
					const M = p()(T.createdAt);
					if (p().duration(p()().diff(M)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function ge(T) {
				return !!(E.Bc || T.transferOut)
			}

			function Ce(T) {
				return be(T) || H(T)
			}

			function se(T) {
				return !be(T) && H(T)
			}

			function be(T) {
				return !T || T.lastKnownStatus === r.kd.PENDING_TRANSFER || T.lastKnownStatus === r.kd.TRANSFER_FOA_PENDING || !H(T) && T.transferConditions && !T.transferConditions.not_started || !1
			}

			function Ae(T) {
				return !(ee(T.name) || T.transferConditions && !T.transferConditions.supported_tld)
			}

			function Re(T) {
				return (T == null ? void 0 : T.includes("/")) ? !0 : T.split("").some(M => M.charCodeAt(0) > 123)
			}

			function We(T) {
				switch (T) {
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

			function Se(T) {
				return p()(T.paymentExpiresAt).isBefore(p()())
			}

			function at(T) {
				return T.transferIn && T.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function Ve(T) {
				const M = ["CU", "KP", "IR", "SY"];
				return T.filter(me => !M.includes(me.code))
			}

			function et(T) {
				if (!!T) return `${T.charAt(0).toUpperCase()}${T.slice(1)}${T.charAt(T.length-1)==="."?"":"."}`
			}

			function Ke(T) {
				const M = {};
				for (const [me, Oe] of Object.entries(T)) {
					if (Oe && typeof Oe == "string") {
						Object.assign(M, {
							[me]: Oe.trim()
						});
						continue
					}
					Object.assign(M, {
						[me]: Oe
					})
				}
				return M
			}

			function Y(T) {
				return p()(T).add(40, "days")
			}

			function ye(T) {
				const M = T.paymentExpiresAt || T.payment_expires_at,
					me = Y(M);
				return p()().isBetween(M, me)
			}

			function $e(T) {
				var M;
				return !(T == null ? void 0 : T.registryStatuses) || !Array.isArray(T == null ? void 0 : T.registryStatuses) && !(0, e.isString)(T == null ? void 0 : T.registryStatuses) ? !1 : (M = T.registryStatuses) === null || M === void 0 ? void 0 : M.includes(r.rj.REDEMPTION_PERIOD)
			}

			function Be(T) {
				var M;
				return !(T == null ? void 0 : T.registryStatuses) || !Array.isArray(T == null ? void 0 : T.registryStatuses) && !(0, e.isString)(T == null ? void 0 : T.registryStatuses) ? !1 : (M = T.registryStatuses) === null || M === void 0 ? void 0 : M.includes(r.rj.PENDING_DELETE)
			}

			function nt(T) {
				return [".us"].includes(T)
			}

			function dt(T) {
				return [".us"].includes(T)
			}

			function mt(T) {
				switch (T) {
					case ".us":
						return te();
					default:
						return []
				}
			}

			function Ie(T) {
				switch (T) {
					case ".us":
						return rt;
					default:
						return {}
				}
			}
			const rt = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function te() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([T, M]) => ({
						value: T,
						label: M
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([T, M]) => ({
						value: T,
						label: M
					}))
				}]
			}

			function ce(T, M, me) {
				return M[M.length - 1][me] === T[me]
			}

			function fe(T) {
				return Boolean(Object.keys(T).length === 0)
			}

			function Ue(T) {
				return p()().add(T, "year").format(_)
			}

			function Ne({
				accountName: T
			}) {
				var M;
				const me = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((M = T.toLowerCase().match(me)) === null || M === void 0 ? void 0 : M[0]) || ""
			}

			function Ze(T) {
				return !!T.match(v.default.email)
			}

			function He(T) {
				return T === i.W7.PENDING_UPDATE
			}

			function Ct(T) {
				return T ? Object.values(i.wR).filter(M => M !== i.wR.OFFBOARDED).includes(T) : !1
			}

			function ht(T) {
				return T ? [i.wR.LOCKED, i.wR.ONBOARDED, i.wR.ONBOARDING_INITIATED, i.wR.PENDING_REGISTRY_LOCK, i.wR.PENDING_REGISTRY_UNLOCK, i.wR.PENDING_UNLOCK_APPROVAL].includes(T) : !1
			}

			function wt(T) {
				return T ? i.wR.UNLOCKED === T : !1
			}

			function Ft(T) {
				return T ? i.wR.LOCKED === T : !1
			}

			function Qe(T) {
				return T ? i.wR.PENDING_REGISTRY_LOCK === T : !1
			}

			function lt(T) {
				return T ? [i.wR.PENDING_REGISTRY_UNLOCK, i.wR.PENDING_UNLOCK_APPROVAL].includes(T) : !1
			}

			function it(T) {
				var M;
				return !1
			}

			function ut(T) {
				var M;
				return !1
			}

			function ft(T) {
				var M;
				return !1
			}

			function Me(T) {
				var M;
				return !1
			}

			function X(T) {
				var M;
				return !1
			}

			function de(T) {
				return Object.keys(i.wR).find(M => i.wR[M].toLowerCase() === T.toLowerCase())
			}

			function he(T) {
				var M;
				const me = (M = de(T)) === null || M === void 0 ? void 0 : M.toLowerCase();
				return me ? n.keys.protection_status[me] : n.keys.protection_status.unknown
			}

			function Te(T) {
				return ["com", "net"].includes(T)
			}

			function ke(T) {
				const M = (0, c.pu)(T);
				return Te(M) ? i.wR.PENDING_REGISTRY_LOCK : i.wR.LOCKED
			}

			function Ye(T) {
				return (0, c.pu)(T) === "co" ? 5 : 10
			}

			function Pe(T, M) {
				return M ? 1 : (0, c.pu)(T) === "co" ? 5 : (0, c.pu)(T) === "org" ? 1 : 10
			}

			function vt(T) {
				return (0, c.pu)(T) === "uk"
			}

			function Wt(T) {
				return (0, c.pu)(T) === "us"
			}

			function Ot(T) {
				return (0, c.pu)(T) === "ai"
			}

			function zt(T) {
				return p()(T).isValid()
			}

			function Je(T) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(T)
			}

			function kt(T) {
				return !!(T == null ? void 0 : T.id)
			}

			function Mt(T) {
				return T ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(T) : !1
			}

			function Tt(T) {
				return T ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(T) : !1
			}

			function xt(T) {
				var M;
				return (T == null ? void 0 : T.lastKnownStatus) ? (M = T.lastKnownStatus) === null || M === void 0 ? void 0 : M.includes("deletionIrredeemable") : !1
			}

			function Rt(T) {
				switch (T) {
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

			function Nt(T) {
				if (!T || !T.message) return r.OJ.DEFAULT;
				const {
					message: M
				} = T;
				switch (!0) {
					case M.includes("feature disabled"):
						return r.OJ.FEATURE_DISABLED;
					case M.includes("email unverified"):
						return r.OJ.EMAIL_UNVERIFIED;
					case M.includes("account blocked"):
						return r.OJ.ACCOUNT_BLOCKED;
					default:
						return r.OJ.DEFAULT
				}
			}

			function yt(T) {
				var M, me;
				return !!(((M = T.policies) === null || M === void 0 || (me = M.suspension) === null || me === void 0 ? void 0 : me.parked) && T.policies.suspension.parkingReason)
			}

			function jt(T) {
				var M, me;
				return yt(T) && ((M = T.policies) === null || M === void 0 || (me = M.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === r.qK.EMAIL_VERIFICATION
			}

			function It(T) {
				var M, me;
				return yt(T) && ((M = T.policies) === null || M === void 0 || (me = M.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === r.qK.TRUST_AND_SAFETY
			}

			function Kt(T) {
				var M;
				return !((M = T.domainMove) === null || M === void 0 ? void 0 : M.ineligibilityReasons.length)
			}

			function Ht(T) {
				var M, me;
				return !!((M = T.domainMove) === null || M === void 0 || (me = M.ineligibilityReasons) === null || me === void 0 ? void 0 : me.includes(r.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Bt(T) {
				var M;
				return (M = T.actionableMetadata) === null || M === void 0 ? void 0 : M.find(me => me.type === r.wg.DOMAIN_MOVE)
			}

			function Gt(T) {
				const M = Bt(T);
				return (M == null ? void 0 : M.status) === "pending" && M.accountContext === r._5.GAINING
			}

			function Vt(T) {
				const M = Bt(T);
				return (M == null ? void 0 : M.status) === "pending" && M.accountContext === r._5.LOSING
			}

			function Yt(T) {
				const M = Q(T.name);
				return !E.Pf.includes(M)
			}

			function At(T) {
				return E.QZ.includes(T)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Bc: function() {
					return c
				},
				HG: function() {
					return be
				},
				Hv: function() {
					return Ae
				},
				JM: function() {
					return s
				},
				Ni: function() {
					return d
				},
				Pf: function() {
					return a
				},
				Py: function() {
					return v
				},
				QZ: function() {
					return g
				},
				WK: function() {
					return E
				},
				g5: function() {
					return n
				},
				gM: function() {
					return i
				},
				jk: function() {
					return se
				},
				kO: function() {
					return m
				},
				no: function() {
					return u
				},
				ui: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../flags.ts");
			const s = "Unknown",
				p = "unknown",
				i = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				v = Object.keys(i),
				c = (0, o.J8)("registrar_mock_transfer_out") || !1,
				u = (0, o.J8)("registrar_show_unlock_ui") || !1,
				E = 250,
				n = "cf_registrar.enabled",
				r = "@abcABC1234567890123456",
				a = [".us"],
				g = [".travel", ".us", ".ong", ".ngo"],
				m = ["BR", "CA", "MX", "US"],
				d = ["ca"],
				h = (0, e.BC)`/${"accountId"}`,
				w = (0, e.BC)`${h}/add-site`,
				_ = (0, e.BC)`${h}/registrar`,
				l = (0, e.BC)`${_}/domains`,
				C = (0, e.BC)`${_}/action-center`,
				f = (0, e.BC)`${_}/domain/${"zoneName"}`,
				O = (0, e.BC)`${f}/configuration`,
				k = (0, e.BC)`${f}/contacts`,
				A = (0, e.BC)`${_}/pricing`,
				P = (0, e.BC)`${_}/protection`,
				D = (0, e.BC)`${_}/register`,
				b = (0, e.BC)`${D}/checkout`,
				I = (0, e.BC)`${D}/checkout/${"token"}`,
				S = (0, e.BC)`${D}/success`,
				x = (0, e.BC)`${_}/tlds`,
				$ = (0, e.BC)`${_}/transfer`,
				ne = (0, e.BC)`${_}/transfer/${"zoneName"}`,
				ee = (0, e.BC)`/registrar/accounts/verify_email`,
				re = (0, e.BC)`/registrar/domains/verify_email`,
				W = (0, e.BC)`/sign-up/registrar`,
				N = (0, e.BC)`${_}/verify-email`,
				R = (0, e.BC)`${h}/${"zoneName"}`,
				G = (0, e.BC)`${h}/domains`,
				U = (0, e.BC)`${G}/action-center`,
				z = (0, e.BC)`${G}/${"zoneName"}`,
				H = (0, e.BC)`${z}/configuration`,
				Z = (0, e.BC)`${z}/contacts`,
				F = (0, e.BC)`${G}/pricing`,
				q = (0, e.BC)`${G}/protection`,
				L = (0, e.BC)`${G}/register`,
				K = (0, e.BC)`${L}/checkout`,
				Q = (0, e.BC)`${L}/checkout/${"token"}`,
				ie = (0, e.BC)`${L}/success`,
				V = (0, e.BC)`${G}/tlds`,
				ae = (0, e.BC)`${G}/transfer`,
				ge = (0, e.BC)`${G}/transfer/${"zoneName"}`,
				Ce = (0, e.BC)`${G}/verify-email`,
				se = {
					addSite: w,
					domains: l,
					domainsActionCenter: C,
					domainsDomain: f,
					domainsDomainConfiguration: O,
					domainsDomainContacts: k,
					domainsPricing: A,
					domainsProtection: P,
					domainsRegister: D,
					domainsRegisterCheckout: b,
					domainsRegisterCheckoutToken: I,
					domainsRegisterSuccess: S,
					domainsTlds: x,
					domainsTransfer: $,
					domainsTransferZone: ne,
					registrar: _,
					registrarAccountsVerifyEmail: ee,
					registrarDomainsVerifyEmail: re,
					signup: W,
					verifyEmail: N,
					zone: R
				},
				be = {
					LEGACY_domains: G,
					LEGACY_domainsActionCenter: U,
					LEGACY_domainsDomain: z,
					LEGACY_domainsDomainConfiguration: H,
					LEGACY_domainsDomainContacts: Z,
					LEGACY_domainsPricing: F,
					LEGACY_domainsProtection: q,
					LEGACY_domainsRegister: L,
					LEGACY_domainsRegisterCheckout: K,
					LEGACY_domainsRegisterCheckoutToken: Q,
					LEGACY_domainsRegisterSuccess: ie,
					LEGACY_domainsTlds: V,
					LEGACY_domainsTransfer: ae,
					LEGACY_domainsTransferZone: ge,
					LEGACY_verifyEmail: Ce
				},
				Ae = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				HO: function() {
					return c
				},
				NW: function() {
					return u
				},
				ZQ: function() {
					return p
				},
				b_: function() {
					return v
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");
			const s = E => {
					const n = E && E.accountFlags && E.accountFlags.data && E.accountFlags.data.registrar && E.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(r => r.trim()) : []
				},
				p = E => {
					var n, r, a;
					return ((n = E.accountFlags) === null || n === void 0 || (r = n.data) === null || r === void 0 || (a = r.registrar) === null || a === void 0 ? void 0 : a["registrar-managed"]) || !1
				},
				i = E => E.account ? E.account.email : "",
				v = E => !1,
				c = E => v(E) && (0, e.oJ)((0, e.Zu)(E)),
				u = E => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: r
					} = E.registrar.registrations;
					return n && !(r.accepted_date || r.id || r.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(B, y, t) {
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
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = t.n(s),
				i = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function v(a) {
				for (var g = 1; g < arguments.length; g++) {
					var m = arguments[g] != null ? Object(arguments[g]) : {},
						d = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(m).filter(function(h) {
						return Object.getOwnPropertyDescriptor(m, h).enumerable
					})), d.forEach(function(h) {
						c(a, h, m[h])
					})
				}
				return a
			}

			function c(a, g, m) {
				return g = u(g), g in a ? Object.defineProperty(a, g, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[g] = m, a
			}

			function u(a) {
				var g = E(a, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function E(a, g) {
				if (typeof a != "object" || a === null) return a;
				var m = a[Symbol.toPrimitive];
				if (m !== void 0) {
					var d = m.call(a, g || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(a)
			}
			let n = function(a) {
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE = "change canada registrant legal type", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.TRANSFER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE = "change canada registrant legal type", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a.DOMAIN_MOVE_START_FLOW = "Start domain move flow", a.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", a.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", a.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", a.DOMAIN_MOVE_SUBMIT = "Submit domain move", a.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", a.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", a.DOMAIN_MOVE_CANCEL = "Domain move cancel", a.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", a.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", a.ACTION_CENTER_NAVIGATE = "Navigate to actions center", a.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", a.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS = "domain update canada registrant type completed successfully", a.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR = "domain update canada registrant type failed", a
			}({});

			function r(a, g, m) {
				if (!(g == null ? void 0 : g.name)) return null;
				p().sendEvent(a, v({
					domain: v({
						name: g.name,
						premium: (0, i.Uy)(g == null ? void 0 : g.premiumType)
					}, (g == null ? void 0 : g.paymentExpiresAt) && {
						paymentExpiresAt: o()(g == null ? void 0 : g.paymentExpiresAt).format()
					}),
					category: "registrar"
				}, m))
			}
		},
		"../react/pages/home/domain-registration/utils/domain.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				FC: function() {
					return u
				},
				Ou: function() {
					return i
				},
				TQ: function() {
					return c
				},
				rS: function() {
					return v
				},
				v_: function() {
					return p
				}
			});
			var e = t("../react/utils/url.ts"),
				o = t("../react/pages/home/domain-registration/bulk-transfer-util.ts"),
				s = t("../react/pages/home/domain-registration/types.ts");
			const p = E => (0, o.Ac)(E) ? 2 : 1,
				i = E => (0, e.pu)(E) === "ca",
				v = [{
					label: "Canadian citizen",
					value: "CCT"
				}, {
					label: "Permanent Resident of Canada",
					value: "RES"
				}, {
					label: "Legal Rep. of a Canadian Citizen or Permanent Resident",
					value: "LGR"
				}, {
					label: "Aboriginal Peoples indigenous to Canada",
					value: "ABO"
				}, {
					label: "Canadian Unincorporated Association",
					value: "ASS"
				}, {
					label: "Corporation (Canada or Canadian province or territory)",
					value: "CCO"
				}, {
					label: "Canadian Educational Institution",
					value: "EDU"
				}, {
					label: "Government or government entity in Canada",
					value: "GOV"
				}, {
					label: "Canadian Hospital",
					value: "HOP"
				}, {
					label: "Indian Band recognized by the Indian Act of Canada",
					value: "INB"
				}, {
					label: "Canadian Library, Archive or Museum",
					value: "LAM"
				}, {
					label: "Her Majesty the Queen",
					value: "MAJ"
				}, {
					label: "Official mark registered in Canada",
					value: "OMK"
				}, {
					label: "Canadian Political Party",
					value: "PLT"
				}, {
					label: "Partnership Registered in Canada",
					value: "PRT"
				}, {
					label: "Trade-mark registered in Canada (by a non-Canadian owner)",
					value: "TDM"
				}, {
					label: "Canadian Trade Union",
					value: "TRD"
				}, {
					label: "Trust established in Canada",
					value: "TRS"
				}],
				c = v.filter(E => E.value !== s.Hy.MAJ && E.value !== s.Hy.OMK && E.value !== s.Hy.TDM),
				u = E => {
					const n = [s.Hy.ABO, s.Hy.CCT, s.Hy.LGR, s.Hy.RES];
					return !E || (E == null ? void 0 : E.length) === 0 ? !1 : E ? !n.includes(E) : !0
				}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				HX: function() {
					return c
				},
				Re: function() {
					return _
				},
				Rh: function() {
					return d
				},
				hX: function() {
					return g
				},
				oO: function() {
					return w
				},
				s_: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react/react"),
				p = t.n(s),
				i = t("../react/utils/translator.tsx"),
				v = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts");
			let c = function(l) {
				return l.UNKNOWN = "unknown", l.WORKERS = "workers", l.ACCESS_APPS = "access_apps", l.ACCESS_IDP = "access_ipd", l
			}({});
			const u = [{
				value: c.WORKERS,
				label_i18n: "policy.granular_resources.type.workers",
				scopeKeyPrefix: "com.cloudflare.edge.worker.script",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: c.ACCESS_APPS,
				label_i18n: "policy.granular_resources.type.access_apps",
				scopeKeyPrefix: "com.cloudflare.edge.access.app",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: c.ACCESS_IDP,
				label_i18n: "policy.granular_resources.type.access_idp",
				scopeKeyPrefix: "com.cloudflare.edge.access.identity-provider",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}];

			function E(l) {
				return {
					key: "com.cloudflare.edge.worker.script." + l.id,
					name: l.name + (l.environment ? ` (${l.environment})` : ""),
					type: c.WORKERS
				}
			}

			function n(l) {
				const C = l;
				return {
					key: "com.cloudflare.edge.access.app." + C.id,
					name: C.name,
					type: c.ACCESS_APPS
				}
			}
			const r = {
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

			function a(l) {
				const C = l,
					f = r[C.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + C.id,
					name: `${f||"Unknown Type"}${C.name?" - "+C.name:""}`,
					type: c.ACCESS_IDP
				}
			}
			const g = async (l, C, f) => C == c.WORKERS ? (await m(`/accounts/${l}/workers/scripts-search?name=${f}&perPage=10`)).body.result.map(O => ({
				id: O.id,
				name: O.service_name || O.script_name,
				environment: O.environment_name
			})).map(E) : C == c.ACCESS_APPS ? (await m(`/accounts/${l}/access/apps?name=${f}`)).body.result.map(n) : C == c.ACCESS_IDP ? (await m(`/accounts/${l}/access/identity_providers`)).body.result.map(a) : [];
			async function m(l) {
				try {
					return await (0, e.get)(l, {
						hideErrorAlert: !0
					})
				} catch (O) {
					var C, f;
					throw ((C = O.body) === null || C === void 0 ? void 0 : C.errors) ? O.body.errors[0].message : O.text ? O.text : ((f = O.response) === null || f === void 0 ? void 0 : f.statusText) ? O.response.statusText : "Unexpected error response"
				}
			}
			const d = async (l, C) => {
				const f = C.split("."),
					O = f.pop(),
					k = f.join(".");
				let A;
				switch (k) {
					case "com.cloudflare.edge.worker.script":
						const P = (await m(`/accounts/${l}/workers/scripts-search/${O}`)).body.result;
						return E({
							id: P.id,
							name: P.service_name || P.script_name,
							environment: P.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return A = await m(`/accounts/${l}/access/identity_providers/${O}`), a(A.body.result);
					case "com.cloudflare.edge.access.app":
						return A = await m(`/accounts/${l}/access/apps/${O}`), n(A.body.result)
				}
			}, h = {
				loading: !0,
				isDisabled: !0
			}, w = () => "production";

			function _(l) {
				const [C] = (0, v.k)(l), [f, O] = (0, s.useState)(!0), [k, A] = (0, s.useState)([]);
				return (0, s.useEffect)(() => {
					if (!C) return;
					const P = u.filter(D => C.find(b => b.meta.scopes === D.scopeKeyPrefix)).map(D => {
						const b = D.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							I = C.filter(S => S.meta.scopes === D.scopeKeyPrefix).find(S => !S.meta.visibility || S.meta.visibility !== "beta");
						return {
							value: D.value,
							label: (0, i.ZP)(D.label_i18n),
							state: b ? h : {
								loading: !1,
								isDisabled: !1
							},
							beta: !I
						}
					});
					A(P)
				}, [C]), (0, s.useEffect)(() => {
					(async () => {
						try {
							await g(l, c.ACCESS_APPS, ""), h.isDisabled = !1
						} catch (P) {
							P.startsWith("access.api.error.not_enabled") ? h.disableInfo = (0, i.ZP)("policy.granular_resources.type.access.not_enabled") : h.error = P
						}
						h.loading = !1, A(P => [...P])
					})()
				}, [l]), (0, s.useEffect)(() => {
					const P = k.find(D => D.state.loading);
					O(!!P)
				}, [k]), {
					types: k,
					isLoading: f
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Ey: function() {
					return E
				},
				F4: function() {
					return h
				},
				Go: function() {
					return g
				},
				Lc: function() {
					return O
				},
				Np: function() {
					return r
				},
				Rl: function() {
					return a
				},
				Sb: function() {
					return m
				},
				Sw: function() {
					return f
				},
				Sz: function() {
					return C
				},
				Ti: function() {
					return k
				},
				Uw: function() {
					return _
				},
				Zl: function() {
					return w
				},
				jk: function() {
					return l
				},
				r6: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${o}/members`,
				p = (0, e.BC)`${s}/invite`,
				i = (0, e.BC)`${s}/invite/${"memberId"}`,
				v = (0, e.BC)`${s}/add-policy/${"memberId"}`,
				c = (0, e.BC)`${s}/user-groups`,
				u = (0, e.BC)`${s}/user-groups/${"userGroupId"}`,
				E = "com.cloudflare.api.account",
				r = E + "." + "zone",
				a = r + ".",
				g = 100,
				m = 200,
				d = 5,
				h = 300,
				w = "INVITE_TOAST",
				_ = "00000000000000000000000000000000",
				l = {
					account: o,
					members: s,
					groups: c,
					group: u,
					inviteMembers: p,
					editMember: i,
					addPolicy: v
				},
				C = {
					allow: "allow",
					deny: "deny"
				},
				f = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				O = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				k = {
					accountId: "",
					effect: C.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/sparrowEvents.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Bz: function() {
					return u
				},
				SH: function() {
					return E
				},
				g5: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(a).filter(function(m) {
						return Object.getOwnPropertyDescriptor(a, m).enumerable
					})), g.forEach(function(m) {
						p(n, m, a[m])
					})
				}
				return n
			}

			function p(n, r, a) {
				return r = i(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function i(n) {
				var r = v(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var g = a.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CLICK_USERGROUP_BETA_BUTTON = "click usergroup beta button", n.MEMBERS_TAB_NAVIGATE = "nagivate members tab", n
			}({});
			const u = ({
					name: n,
					additionalData: r = {}
				}) => {
					o().sendEvent(n, s({}, r || {}))
				},
				E = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/home/members/utils.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return l
				},
				Co: function() {
					return w
				},
				Hf: function() {
					return P
				},
				JP: function() {
					return _
				},
				LX: function() {
					return I
				},
				Ld: function() {
					return a
				},
				YW: function() {
					return u
				},
				_k: function() {
					return g
				},
				c$: function() {
					return E
				},
				rC: function() {
					return b
				},
				vq: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				o = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				s = t("../react/pages/home/members/constants.ts");

			function p(x) {
				for (var $ = 1; $ < arguments.length; $++) {
					var ne = arguments[$] != null ? Object(arguments[$]) : {},
						ee = Object.keys(ne);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(ne).filter(function(re) {
						return Object.getOwnPropertyDescriptor(ne, re).enumerable
					})), ee.forEach(function(re) {
						i(x, re, ne[re])
					})
				}
				return x
			}

			function i(x, $, ne) {
				return $ = v($), $ in x ? Object.defineProperty(x, $, {
					value: ne,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[$] = ne, x
			}

			function v(x) {
				var $ = c(x, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function c(x, $) {
				if (typeof x != "object" || x === null) return x;
				var ne = x[Symbol.toPrimitive];
				if (ne !== void 0) {
					var ee = ne.call(x, $ || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(x)
			}
			const u = () => p({}, s.Ti),
				E = () => p({}, s.Lc, {
					scopes: [u()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = x => x.map($ => ({
					scope: {
						key: $,
						objects: [{
							key: "*"
						}]
					}
				})),
				r = (x, $, ne) => {
					var ee;
					let re = [],
						W = [];
					const N = [],
						R = [];
					x.scopes.forEach(z => {
						if (z.mode === s.Sw.all) ne ? re.push({
							id: ne
						}) : re.push({
							scope: {
								key: `com.cloudflare.api.account.${$}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (z.mode === s.Sw.domain_group) {
							const Z = {
								id: z.resourceGroupId
							};
							z.effect === s.Sz.allow ? re.push(Z) : W.push(Z)
						} else if (z.mode === s.Sw.zone) {
							const Z = `${s.Rl}${z.zoneId}`;
							z.effect === s.Sz.allow ? N.push(Z) : R.push(Z)
						} else if (z.mode === s.Sw.granular && z.granularResourceKey) {
							var H;
							const Z = z.granularProduct,
								q = `${(H=o.s_.find(L=>L.value===Z))===null||H===void 0?void 0:H.scopeSubsetOfPrefix}.${$}`;
							re.push({
								scope: {
									key: `${z.granularResourceKey}`,
									subset_of: [{
										key: `${q}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), N.length && (re = re.concat(n(N))), R.length && (W = W.concat(n(R)));
					const G = (ee = x.permission_groups) === null || ee === void 0 ? void 0 : ee.map(z => ({
							id: z
						})),
						U = [];
					return U.push({
						access: s.Sz.allow,
						permission_groups: G,
						resource_groups: re
					}), W.length && U.push({
						access: s.Sz.deny,
						permission_groups: G,
						resource_groups: W
					}), U
				},
				a = x => x.map($ => {
					var ne;
					return {
						access: $.access,
						permission_groups: $.permission_groups.map(ee => ({
							id: ee.id
						})),
						resource_groups: (ne = $.resource_groups) === null || ne === void 0 ? void 0 : ne.map(ee => ({
							scope: {
								key: ee.scope.key,
								objects: ee.scope.objects
							},
							id: ee.id
						}))
					}
				}),
				g = (x, $, ne, ee) => {
					const re = x.auto_accept;
					let W = [];
					return W = W.concat(r(x, $, ne)), ee && (W = W.concat(a(ee))), {
						auto_accept: re,
						status: re ? "accepted" : "pending",
						policies: W
					}
				},
				m = x => {
					const $ = x.split(".");
					return $[$.length - 1]
				},
				d = x => {
					var $, ne;
					const ee = x == null ? void 0 : x.access;
					let re = [],
						W = x == null || ($ = x.resource_groups) === null || $ === void 0 ? void 0 : $.map(N => {
							var R;
							const G = h(N);
							if ((N == null || (R = N.meta) === null || R === void 0 ? void 0 : R.editable) === "false") return {
								effect: ee,
								mode: s.Sw.all,
								accountId: m(N.id)
							};
							if (G) {
								var U;
								return {
									effect: ee,
									mode: s.Sw.granular,
									granularProduct: G.value,
									granularResourceKey: N == null || (U = N.scope) === null || U === void 0 ? void 0 : U.key
								}
							} else if (!N.name) N.scope.key.startsWith(s.Rl) ? re.push({
								key: N.scope.key
							}) : re = re.concat(N.scope.objects);
							else return {
								effect: ee,
								mode: s.Sw.domain_group,
								resourceGroupId: m(N.id)
							}
						}).filter(N => N);
					if ((ne = re) === null || ne === void 0 ? void 0 : ne.length) {
						let N = re.map(R => {
							const G = m(R.key);
							return {
								effect: ee,
								mode: s.Sw.zone,
								zoneId: G
							}
						});
						W = W.length ? N.concat(W) : N
					}
					return W
				},
				h = x => {
					var $, ne, ee, re;
					const W = x == null || ($ = x.scope) === null || $ === void 0 ? void 0 : $.key.split(".").slice(0, -1).join("."),
						N = x == null || (ne = x.scope) === null || ne === void 0 || (ee = ne.subset_of) === null || ee === void 0 || (re = ee[0]) === null || re === void 0 ? void 0 : re.key.split(".").slice(0, -1).join(".");
					return o.s_.find(R => R.scopeKeyPrefix === W && R.scopeSubsetOfPrefix === N)
				},
				w = x => {
					if (!(x == null ? void 0 : x.length)) return [];
					const $ = [];
					return x.forEach(ne => {
						var ee;
						(ee = ne.resource_groups) === null || ee === void 0 || ee.forEach(re => {
							var W, N;
							((W = re.scope) === null || W === void 0 || (N = W.key) === null || N === void 0 ? void 0 : N.startsWith(s.Rl)) && $.push(m(re.scope.key))
						})
					}), $
				},
				_ = x => {
					if (!(x == null ? void 0 : x.length)) return [];
					const $ = [];
					return x.forEach(ne => {
						var ee;
						(ee = ne.resource_groups) === null || ee === void 0 || ee.forEach(re => {
							var W, N;
							if (!((W = re.scope) === null || W === void 0 || (N = W.key) === null || N === void 0 ? void 0 : N.startsWith(s.Rl))) {
								var R;
								const U = (R = re.scope) === null || R === void 0 ? void 0 : R.objects;
								for (let z = 0; z < (U == null ? void 0 : U.length) && z < s.r6; z++) {
									var G;
									((G = U[z].key) === null || G === void 0 ? void 0 : G.startsWith(s.Rl)) && $.push(m(U[z].key))
								}
							}
						})
					}), $
				},
				l = x => {
					var $;
					if (!(x == null ? void 0 : x.length)) return null;
					const ne = ($ = x[0]) === null || $ === void 0 ? void 0 : $.permission_groups.map(N => N.id);
					let ee, re;
					x == null || x.forEach(N => {
						N.access === s.Sz.allow && (ee = N), N.access === s.Sz.deny && (re = N)
					});
					let W = [];
					return ee && (W = d(ee)), re && (W = W.concat(d(re))), {
						permission_groups: ne,
						scopes: W
					}
				},
				C = "permission-groups-",
				f = "permission-groups-expiring-",
				O = 1 * 24 * 60 * 60,
				k = new Map,
				A = x => D(C, x),
				P = x => D(f, x),
				D = (x, $) => {
					if (!$) return [];
					const ne = k.get($);
					if (ne) return ne;
					const ee = e.E.get(`${x}${$}`);
					return ee ? (k.set($, ee), ee) : []
				},
				b = (x, $) => S(C, x, $),
				I = (x, $) => S(f, x, $),
				S = (x, $, ne) => {
					const ee = [];
					for (let W = 0; W < sessionStorage.length; W++) {
						const N = sessionStorage.key(W);
						(N == null ? void 0 : N.startsWith(x)) && ee.push(N)
					}
					ee.length >= 5 && e.E.remove(ee[0]);
					let re;
					return x === f && (re = O), e.E.set(`${x}${$}`, ne, re)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(B, y, t) {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(B, y, t) {
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
		"../react/pages/hyperdrive/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				KO: function() {
					return c
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

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var g = arguments[a] != null ? Object(arguments[a]) : {},
						m = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(g).filter(function(d) {
						return Object.getOwnPropertyDescriptor(g, d).enumerable
					})), m.forEach(function(d) {
						p(r, d, g[d])
					})
				}
				return r
			}

			function p(r, a, g) {
				return a = i(a), a in r ? Object.defineProperty(r, a, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = g, r
			}

			function i(r) {
				var a = v(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function v(r, a) {
				if (typeof r != "object" || r === null) return r;
				var g = r[Symbol.toPrimitive];
				if (g !== void 0) {
					var m = g.call(r, a || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let c = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.SEARCH_CONFIGS = "search hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.UPDATE_ORIGIN_CONN_LIM_SETTINGS = "update hyperdrive config origin connection limit settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r.CLICK_DISCORD = "click hyperdrive discord", r.CLICK_COMMUNITY = "click hyperdrive community", r
				}({}),
				u = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				E = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const n = (r, a = {}) => {
				o().sendEvent(r, s({}, a, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/routes.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				KJ: function() {
					return k
				},
				_m: function() {
					return w
				},
				imagesEndpoints: function() {
					return se
				},
				vQ: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function o(be) {
				for (var Ae = 1; Ae < arguments.length; Ae++) {
					var Re = arguments[Ae] != null ? Object(arguments[Ae]) : {},
						We = Object.keys(Re);
					typeof Object.getOwnPropertySymbols == "function" && We.push.apply(We, Object.getOwnPropertySymbols(Re).filter(function(Se) {
						return Object.getOwnPropertyDescriptor(Re, Se).enumerable
					})), We.forEach(function(Se) {
						s(be, Se, Re[Se])
					})
				}
				return be
			}

			function s(be, Ae, Re) {
				return Ae = p(Ae), Ae in be ? Object.defineProperty(be, Ae, {
					value: Re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : be[Ae] = Re, be
			}

			function p(be) {
				var Ae = i(be, "string");
				return typeof Ae == "symbol" ? Ae : String(Ae)
			}

			function i(be, Ae) {
				if (typeof be != "object" || be === null) return be;
				var Re = be[Symbol.toPrimitive];
				if (Re !== void 0) {
					var We = Re.call(be, Ae || "default");
					if (typeof We != "object") return We;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Ae === "string" ? String : Number)(be)
			}
			const v = (0, e.BC)`/${"accountId"}/images`,
				c = (0, e.BC)`${v}/images`,
				u = (0, e.BC)`${v}/variants`,
				E = (0, e.BC)`${v}/keys`,
				n = (0, e.BC)`${v}/bundle-checkout-success`,
				r = (0, e.BC)`${c}/${"imageId"}`,
				a = (0, e.BC)`${c}/detail`,
				g = (0, e.BC)`${c}/edit`,
				m = (0, e.BC)`${u}/create`,
				d = (0, e.BC)`${u}/edit/${"variantId"}`,
				h = (0, e.BC)`/${"accountId"}/billing/subscriptions`,
				w = (0, e.BC)`${v}/sourcing-kit`,
				_ = (0, e.BC)`${v}/delivery-zones`,
				l = (0, e.BC)`${_}/${"zoneId"}/settings`,
				C = (0, e.BC)`${v}/plans`,
				f = (0, e.BC)`${v}/manage-plan`,
				O = {
					addSite: (0, e.BC)`/${"accountId"}/add-site`,
					imageResizingSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/image_resizing`,
					transformationsSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/transformations`
				},
				k = {
					root: v,
					images: c,
					variants: u,
					keys: E,
					legacyImageDetailPage: r,
					imageDetailPage: a,
					imageEditPage: g,
					bundleCheckoutSuccess: n,
					variantCreatePage: m,
					variantEditPage: d,
					sourcingKit: w,
					subscriptions: h,
					deliveryZones: _,
					deliveryZoneSettings: l,
					plansPage: C,
					managePlan: f
				},
				A = o({}, k, {
					signUp: (0, e.BC)`/sign-up/images`,
					externalRoutes: O
				}),
				P = (0, e.BC)`/accounts/${"accountId"}`,
				D = (0, e.BC)`${P}/images/v2`,
				b = (0, e.BC)`/zones/${"zoneId"}`,
				I = (0, e.BC)`${D}/sourcingkit`,
				S = (0, e.BC)`${I}/migrations`,
				x = (0, e.BC)`${I}/migrations/${"migrationId"}`,
				$ = (0, e.BC)`${I}/migrations/${"migrationId"}/logs`,
				ne = (0, e.BC)`${I}/migrations/${"migrationId"}/lifecycle/start`,
				ee = (0, e.BC)`${I}/migrations/${"migrationId"}/lifecycle/abort`,
				re = (0, e.BC)`${I}/migrations/${"migrationId"}/lifecycle`,
				W = (0, e.BC)`${I}/sources`,
				N = (0, e.BC)`${I}/sources/${"sourceId"}`,
				R = (0, e.BC)`${I}/sources/${"sourceId"}/connectivity`,
				G = (0, e.BC)`${I}/sources/connectivity_precheck`,
				U = (0, e.BC)`/zones?account.id=${"accountId"}`,
				z = {
					migrationList: S,
					migration: x,
					migrationLogs: $,
					sourceList: W,
					migrationStart: ne,
					migrationAbort: ee,
					migrationProgress: re,
					source: N,
					sourceConnectivityCheck: R,
					sourceConnectivityPreCheck: G
				},
				H = (0, e.BC)`/billing/upgrade-subscription`,
				Z = (0, e.BC)`${P}/settings/transformations`,
				F = (0, e.BC)`${b}/settings/transformations`,
				q = (0, e.BC)`${b}/settings/transformations_allowed_origins`,
				L = (0, e.BC)`${b}/settings/transformations_c2pa`,
				K = (0, e.BC)`${P}/settings/ut-billing`,
				Q = (0, e.BC)`${b}`,
				ie = (0, e.BC)`${b}/entitlements`,
				V = (0, e.BC)`${b}/settings`,
				ae = (0, e.BC)`${b}/flags`,
				ge = (0, e.BC)`${b}/subscription`,
				se = {
					sourcingKitEndpoints: z,
					deliveryZonesEndpoints: {
						transformationsConfigList: Z,
						transformationsZoneConfig: F,
						allowedOriginsZoneConfig: q,
						preserveContentCredentialsZoneConfig: L,
						upgradeSubscription: H,
						utBillingConfig: K
					},
					zones: {
						zones: U,
						zoneDetail: Q,
						zoneSettings: V,
						zoneEntitlements: ie,
						zoneFlags: ae,
						zoneSubscription: ge
					}
				}
		},
		"../react/pages/images/selectors.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return p
				},
				GH: function() {
					return a
				},
				JZ: function() {
					return m
				},
				aR: function() {
					return n
				},
				db: function() {
					return v
				},
				ib: function() {
					return d
				},
				lW: function() {
					return w
				},
				pT: function() {
					return r
				},
				po: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts");
			const p = "sourcing_kit_enabled",
				i = "sourcing_kit_waitlist",
				v = "images",
				c = "unified_images_enabled",
				u = "c2pa_polish",
				E = "CloudflareImages",
				n = _ => !!(0, o.BF)(_, "images.transformations_enabled"),
				r = _ => Boolean((0, o.BF)(_, "images.enabled")),
				a = _ => {
					const l = (0, o.BF)(_, "images.storage");
					return typeof l == "number" && l > 0
				},
				g = _ => Boolean((0, o.BF)(_, "contract.customer_enabled")),
				m = _ => Boolean((0, e.oI)(_, v, p)),
				d = _ => Boolean((0, s.Le)(_, E, p)),
				h = _ => Boolean(getAccountFlipperFlag(_, E, c)),
				w = _ => Boolean((0, s.Le)(_, E, u))
		},
		"../react/pages/internal-dns/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				jx: function() {
					return e
				},
				xk: function() {
					return i
				},
				xo: function() {
					return v
				},
				yt: function() {
					return p
				},
				z7: function() {
					return s
				}
			});
			const e = "internal",
				o = {
					ADD: "add",
					IMPORT: "import"
				},
				s = {
					OVERVIEW_PAGE: "internal-dns-overview-page",
					INTERNAL_ZONES_PAGE: "internal-dns-internal-zones-page",
					INTERNAL_ZONE_DETAIL_PAGE: "internal-dns-internal-zone-detail-page",
					VIEWS_PAGE: "internal-dns-views-page",
					VIEWS_TABLE: "internal-dns-views-table",
					VIEWS_TABLE_ROW: "internal-dns-views-table-row",
					VIEW_DETAIL_PAGE: "view-detail-page",
					VIEW_DETAIL_LINKED_ZONES_TABLE: "view-detail-linked-zones-table",
					VIEW_DETAIL_EDIT_NAME_BUTTON: "view-detail-edit-name-button",
					ADD_LINKED_VIEWS_PAGE: "internal-dns-add-linked-views-page",
					ADD_LINKED_ZONES_PAGE: "internal-dns-add-linked-zones-page",
					ADD_REFERENCE_PAGE: "internal-dns-add-reference-page",
					INTERNAL_ZONES_TABLE: "internal-zones-table",
					INTERNAL_ZONE_LINK_BUTTON: "internal-zone-link-button",
					RESOLVER_POLICY_TABLE: "resolver-policy-table",
					RECORDS_SELECTION_CONTROLS: "internal-dns-records-selection-controls",
					RECORD_FORM: "internal-dns-record-form",
					RECORD_FORM_CONTAINER: "internal-dns-record-form-container"
				},
				p = "bulk_internal_zones",
				i = "internal-dns",
				v = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_3V6auNfVdQDWthk"
		},
		"../react/pages/internal-dns/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				N3: function() {
					return E
				},
				Rl: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var g = arguments[a] != null ? Object(arguments[a]) : {},
						m = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(g).filter(function(d) {
						return Object.getOwnPropertyDescriptor(g, d).enumerable
					})), m.forEach(function(d) {
						p(r, d, g[d])
					})
				}
				return r
			}

			function p(r, a, g) {
				return a = i(a), a in r ? Object.defineProperty(r, a, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = g, r
			}

			function i(r) {
				var a = v(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function v(r, a) {
				if (typeof r != "object" || r === null) return r;
				var g = r[Symbol.toPrimitive];
				if (g !== void 0) {
					var m = g.call(r, a || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const c = "user journey",
				u = "internal-dns";
			let E = function(r) {
				return r.CLICK_GIVE_FEEDBACK = "click give feedback", r.CLICK_NAVIGATION_TAB = "click navigation tab", r.CLICK_CREATE_AN_INTERNAL_ZONE = "click create an internal zone", r.CLICK_SEARCH_BY_ZONE_NAME = "search by zone name", r.CLICK_CREATE_A_VIEW = "click create a view", r.CLICK_SEARCH_BY_RECORD_NAME = "search by record name", r.CLICK_SEARCH_BY_VIEW_NAME = "search by view name", r.CLICK_SAVE_VIEW = "click save view", r.CLICK_SAVE_ZONE = "click save zone", r.CLICK_ZONE_NAME = "click zone name", r.CLICK_ADD_A_RECORD = "click add a record", r.CLICK_ADD_RECORD_SAVE = "click add record save", r.CLICK_RECORD_EDIT = "click record edit", r.CLICK_EDIT_RECORD_SAVE = "click edit record save", r.CLICK_IMPORT_RECORDS = "click import records", r.CLICK_MANAGE_LINKED_VIEWS = "click manage linked views", r.CLICK_SAVE_MANAGE_LINKED_VIEWS = "click save manage linked views", r.CLICK_VIEW_RECORD = "click view record", r
			}({});
			const n = (r, a = {}) => {
				o().sendEvent(r, s({
					category: c,
					product: u
				}, a))
			}
		},
		"../react/pages/magic/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				GF: function() {
					return g
				},
				H3: function() {
					return c
				},
				H8: function() {
					return i
				},
				J: function() {
					return d
				},
				Nz: function() {
					return u
				},
				Up: function() {
					return p
				},
				W8: function() {
					return E
				},
				Ws: function() {
					return _
				},
				Xg: function() {
					return r
				},
				Y_: function() {
					return a
				},
				_j: function() {
					return s
				},
				a4: function() {
					return m
				},
				jS: function() {
					return h
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
			const s = {
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
					connectorVisibility: (0, e.BC)`/${"accountId"}/magic-networks/connections/appliances/magic-networking/mconn/visibility/${"connectorId"}/performance-analytics`,
					registrationConnector: (0, e.BC)`/${"accountId"}/magic-networks/connections/appliances/magic-networking/mconn/registration`,
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
				p = () => [{
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
				i = l => [{
					value: "low",
					label: l("setting.low")
				}, {
					value: "mid",
					label: l("setting.medium")
				}, {
					value: "high",
					label: l("setting.high")
				}],
				v = l => [{
					value: "request",
					label: l("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: l("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				c = l => [{
					value: "unidirectional",
					label: l("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: l("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				u = "magic-transit",
				E = "magic-wan",
				n = "gre_tunnel",
				r = "ipsec_tunnel",
				a = "interconnect",
				g = 64,
				m = 1476,
				d = "mid",
				h = "reply",
				w = l => [{
					value: void 0,
					label: l("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: l("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: l("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				_ = l => [{
					value: "all",
					label: l("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: l("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: l("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Yt: function() {
					return p
				},
				_u: function() {
					return o
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
				o = "Magic network monitoring",
				s = "user journey",
				p = 60
		},
		"../react/pages/magic/overview/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				VZ: function() {
					return p
				},
				lC: function() {
					return s
				},
				r8: function() {
					return o
				},
				uB: function() {
					return i
				}
			});
			var e = t("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				s = "user journey",
				p = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				i = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				W_: function() {
					return o
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
				o = "Magic packet captures",
				s = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				gb: function() {
					return n
				},
				iP: function() {
					return A
				},
				xL: function() {
					return _
				},
				rD: function() {
					return D
				},
				oT: function() {
					return m
				},
				i2: function() {
					return b
				},
				x1: function() {
					return v
				},
				lW: function() {
					return u
				},
				UA: function() {
					return O
				},
				K5: function() {
					return a
				},
				Ii: function() {
					return C
				},
				PJ: function() {
					return P
				},
				bK: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				s = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				p = t("../node_modules/@cloudflare/elements/es/index.js"),
				i = t("../../../../node_modules/react/jsx-runtime.js");
			const v = () => (0, i.jsx)(c, {
					children: (0, i.jsxs)("svg", {
						width: "94",
						height: "5",
						viewBox: "0 0 94 5",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, i.jsx)("path", {
							d: "M48.416 2.2002L1.99976 2.20021",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, i.jsx)("path", {
							d: "M66.3115 2.2002L59.3767 2.20019",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, i.jsx)("path", {
							d: "M78.7949 2.2002L76.021 2.20019",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, i.jsx)("path", {
							d: "M91.2773 2.2002L88.5034 2.20019",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						})]
					})
				}),
				c = (0, o.LM)(({
					theme: I
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
				u = () => (0, i.jsx)(E, {
					children: (0, i.jsxs)("svg", {
						width: "211",
						height: "71",
						viewBox: "0 0 211 71",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, i.jsx)("circle", {
							cx: "175.5",
							cy: "35.5",
							r: "35.5",
							fill: "#044096"
						}), (0, i.jsx)("path", {
							d: "M48.7492 28L2.33298 28",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, i.jsx)("path", {
							d: "M66.6457 28L59.7109 28",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, i.jsx)("path", {
							d: "M79.1281 28L76.3542 28",
							stroke: "#6ECCE5",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, i.jsx)("path", {
							d: "M91.6106 28.0005L88.8366 28.0005",
							stroke: "#E2F5FA",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, i.jsx)("path", {
							d: "M164.092 28.2002L100.767 28.2002",
							stroke: "#6ECCE5",
							strokeWidth: "4",
							strokeLinecap: "square"
						})]
					})
				}),
				E = (0, o.LM)(({
					theme: I
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
				n = () => (0, i.jsx)(r, {
					children: (0, i.jsx)(p.Ei, {
						alt: "airplane",
						src: s,
						width: "85%"
					})
				}),
				r = (0, o.LM)(({
					theme: I
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
				a = () => (0, i.jsx)(g, {
					children: (0, i.jsxs)("svg", {
						width: "104",
						height: "23",
						viewBox: "0 0 104 23",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, i.jsx)("path", {
							d: "M93.7248 0H90.2837V7.74245H93.7248V0Z",
							fill: "white"
						}), (0, i.jsx)("path", {
							d: "M103.187 9.4624H95.4448V12.9035H103.187V9.4624Z",
							fill: "white"
						}), (0, i.jsx)("path", {
							d: "M93.7248 14.6245H90.2837V22.367H93.7248V14.6245Z",
							fill: "white"
						}), (0, i.jsx)("path", {
							d: "M88.5632 9.4624H80.8208V12.9035H88.5632V9.4624Z",
							fill: "white"
						}), (0, i.jsx)("path", {
							d: "M36.0259 10.627L2.00024 10.627",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, i.jsx)("path", {
							d: "M56.8198 10.627L44.5328 10.627",
							stroke: "#6ECCE5",
							strokeWidth: "4",
							strokeLinecap: "square"
						}), (0, i.jsx)("path", {
							d: "M72.8872 10.627L65.326 10.627",
							stroke: "#C3E9F3",
							strokeWidth: "4",
							strokeLinecap: "square"
						})]
					})
				}),
				g = (0, o.LM)(({
					theme: I
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
				m = () => (0, i.jsx)(d, {
					children: (0, i.jsx)("svg", {
						width: "13",
						height: "13",
						viewBox: "0 0 13 13",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: (0, i.jsx)("ellipse", {
							cx: "6.33672",
							cy: "6.34376",
							rx: "6.33672",
							ry: "6.34376",
							fill: "#086FFF"
						})
					})
				}),
				d = (0, o.LM)(({
					theme: I
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
				h = () => (0, i.jsx)(w, {
					children: (0, i.jsx)("svg", {
						width: "15",
						height: "15",
						viewBox: "0 0 15 15",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: (0, i.jsx)("path", {
							d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
							fill: "#6ECCE5"
						})
					})
				}),
				w = (0, o.LM)(({
					theme: I
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
				_ = () => (0, i.jsx)(l, {
					children: (0, i.jsxs)("svg", {
						width: "22",
						height: "22",
						viewBox: "0 0 22 22",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, i.jsx)("path", {
							d: "M12.6922 0H9.30762V7.61541H12.6922V0Z",
							fill: "#C5EBF5"
						}), (0, i.jsx)("path", {
							d: "M22.0002 9.30762H14.3848V12.6922H22.0002V9.30762Z",
							fill: "#C5EBF5"
						}), (0, i.jsx)("path", {
							d: "M12.6922 14.3848H9.30762V22.0002H12.6922V14.3848Z",
							fill: "#C5EBF5"
						}), (0, i.jsx)("path", {
							d: "M7.61542 9.30762H0V12.6922H7.61542V9.30762Z",
							fill: "#C5EBF5"
						})]
					})
				}),
				l = (0, o.LM)(({
					theme: I
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
				C = () => (0, i.jsx)(f, {
					children: (0, i.jsxs)("svg", {
						width: "32",
						height: "32",
						viewBox: "0 0 32 32",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, i.jsx)("path", {
							d: "M18.0868 0H13.2637V10.852H18.0868V0Z",
							fill: "#FBAD41"
						}), (0, i.jsx)("path", {
							d: "M31.35 13.2637H20.498V18.0868H31.35V13.2637Z",
							fill: "#FBAD41"
						}), (0, i.jsx)("path", {
							d: "M18.0868 20.498H13.2637V31.35H18.0868V20.498Z",
							fill: "#FBAD41"
						}), (0, i.jsx)("path", {
							d: "M10.852 13.2637H0V18.0868H10.852V13.2637Z",
							fill: "#FBAD41"
						})]
					})
				}),
				f = (0, o.LM)(({
					theme: I
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
				O = () => (0, i.jsx)(k, {
					children: (0, i.jsxs)("svg", {
						width: "48",
						height: "15",
						viewBox: "0 0 48 15",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: [(0, i.jsx)("path", {
							d: "M40.25 3.0781e-07L33.1902 7.05981L40.25 14.1196L47.3098 7.05981L40.25 3.0781e-07Z",
							fill: "#6ECCE5"
						}), (0, i.jsx)("path", {
							d: "M20.9031 6.61694L1.99994 6.61694",
							stroke: "#0055DC",
							strokeWidth: "4",
							strokeLinecap: "square"
						})]
					})
				}),
				k = (0, o.LM)(({
					theme: I
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
				A = () => (0, i.jsxs)("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 40",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, i.jsx)("path", {
						d: "M12.4025 16.0001L10.265 13.8927L8.015 16.1427C8.86952 12.6096 10.8668 9.45753 13.6967 7.17612C16.5265 4.8947 20.0305 3.6116 23.6645 3.52609C27.2984 3.44059 30.8589 4.55747 33.7929 6.70326C36.3879 8.60112 38.3644 11.2099 39.492 14.2014L40.339 13.9224L41.5646 13.5186L42.4174 13.2377C41.0751 9.5683 38.6567 6.37586 35.4641 4.08759C31.9041 1.53603 27.5888 0.257281 23.2134 0.457383C18.838 0.657484 14.6574 2.32478 11.3452 5.19063C8.03295 8.05648 5.78199 11.954 4.955 16.2551L2.63 13.9151L0.5 16.0001L6.5 22.0001L12.4025 16.0001Z",
						fill: "#C5EBF5"
					}), (0, i.jsx)("path", {
						d: "M47.5646 24.0049L41.5646 18.0049L35.6471 24.0049L37.7846 26.1124L40.0346 23.8624C39.1898 27.4009 37.1992 30.561 34.3725 32.851C31.5458 35.1411 28.0415 36.4328 24.4048 36.5252C20.768 36.6176 17.2027 35.5055 14.2634 33.3619C11.5162 31.3585 9.45991 28.559 8.36721 25.3515L7.54721 25.6183L6.37385 26.0001L5.5 26.2845C6.79997 30.1536 9.28442 33.5247 12.6114 35.9135C16.1663 38.4659 20.4765 39.7483 24.8486 39.5544C29.2206 39.3605 33.4003 37.7015 36.7153 34.8443C40.0303 31.9872 42.2878 28.098 43.1246 23.8024L45.4346 26.1199L47.5646 24.0049Z",
						fill: "#C5EBF5"
					})]
				}),
				P = () => (0, i.jsxs)("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 39 41",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, i.jsx)("path", {
						d: "M31.1271 6.20742L32.7396 3.67992C25.4571 -1.00008 13.5396 -1.00008 6.17465 3.67992L7.74965 6.21492C14.2521 2.11242 24.7221 2.11242 31.1271 6.20742Z",
						fill: "#C5EBF5"
					}), (0, i.jsx)("path", {
						d: "M19.3896 4.67742C15.6941 4.70925 12.0606 5.63105 8.79679 7.36478C5.533 9.09851 2.73499 11.5931 0.639648 14.6374L3.16715 16.2499C5.00538 13.6448 7.43278 11.5105 10.2518 10.0209C13.0708 8.53125 16.2017 7.7283 19.3896 7.67742C28.3896 7.67742 34.1496 13.2724 35.9496 16.2274L38.4996 14.6749C36.4146 11.2174 29.7171 4.67742 19.3896 4.67742Z",
						fill: "#C5EBF5"
					}), (0, i.jsx)("path", {
						d: "M19.3971 9.31242C13.4646 9.31242 8.46965 11.8849 5.34215 16.5574C3.6804 19.123 2.6668 22.0539 2.38852 25.0979C2.11024 28.142 2.57563 31.2081 3.74465 34.0324L6.51965 32.8924C5.53401 30.5237 5.1385 27.951 5.36713 25.3956C5.59576 22.8402 6.44168 20.3786 7.83215 18.2224C9.10397 16.3409 10.8316 14.8121 12.8539 13.7787C14.8762 12.7453 17.1272 12.2408 19.3971 12.3124C29.8296 12.3124 32.6421 20.8699 32.8446 24.1699C33.0771 28.0399 30.8646 28.4974 30.4446 28.5424L30.2046 28.5874C29.0973 28.8301 27.9393 28.6509 26.9571 28.0849C26.1096 27.4924 25.5846 26.4049 25.4046 24.8599C24.9171 20.6224 21.6546 18.8599 18.8796 19.0249C15.8271 19.2049 12.5421 21.6724 12.5421 26.6824C12.5421 33.9049 19.1721 39.7174 25.2921 40.9324L25.8921 37.9924C21.5646 37.1449 15.5421 32.7499 15.5421 26.6824C15.5421 23.5999 17.3046 22.1224 19.0521 22.0249C20.4246 21.9424 22.1421 22.7299 22.4271 25.2049C22.7121 27.6799 23.6721 29.4649 25.2771 30.5674C26.9271 31.5879 28.9083 31.9293 30.8046 31.5199C32.7547 31.3024 36.1746 29.4799 35.8372 24.0199C35.5896 19.9024 32.1471 9.31242 19.3971 9.31242Z",
						fill: "#C5EBF5"
					}), (0, i.jsx)("path", {
						d: "M11.0346 23.1199C12.2496 19.2499 15.0771 16.9474 18.6471 16.9474C27.0396 16.9474 27.6921 24.1774 27.6921 26.3899H30.6921C30.6921 20.6524 27.5421 13.9474 18.6471 13.9474C13.7646 13.9474 9.75215 17.1274 8.14715 22.1974C7.17854 25.4217 7.25631 28.8699 8.3693 32.0471C9.4823 35.2244 11.5733 37.9674 14.3421 39.8824L16.0296 37.3999C13.7995 35.8488 12.116 33.6332 11.2191 31.069C10.3222 28.5048 10.2576 25.7229 11.0346 23.1199Z",
						fill: "#C5EBF5"
					}), (0, i.jsx)("path", {
						d: "M22.9371 31.3399C22.1161 30.5273 21.4749 29.5512 21.055 28.475C20.6351 27.3988 20.4459 26.2464 20.4996 25.0924H17.4996C17.4514 26.6502 17.7256 28.2012 18.3051 29.648C18.8846 31.0948 19.7568 32.4062 20.8671 33.4999C23.4992 35.8335 26.9209 37.0778 30.4371 36.9799C30.7071 36.9799 30.9846 36.9799 31.2546 36.9799L31.1121 33.9799C27.8421 34.1299 24.8571 33.1699 22.9371 31.3399Z",
						fill: "#C5EBF5"
					})]
				}),
				D = () => (0, i.jsxs)("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 28",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, i.jsx)("path", {
						d: "M24.0165 14.6841C25.4257 14.6841 26.8032 14.2662 27.9749 13.4833C29.1466 12.7004 30.0598 11.5876 30.5991 10.2857C31.1384 8.98378 31.2795 7.55118 31.0046 6.16907C30.7296 4.78695 30.051 3.5174 29.0546 2.52095C28.0581 1.5245 26.7886 0.84591 25.4065 0.57099C24.0244 0.29607 22.5918 0.437169 21.2898 0.976444C19.9879 1.51572 18.8751 2.42895 18.0922 3.60065C17.3093 4.77235 16.8915 6.14989 16.8915 7.55908C16.893 9.44827 17.6442 11.2596 18.9801 12.5955C20.3159 13.9313 22.1273 14.6825 24.0165 14.6841ZM24.0165 3.43783C24.8323 3.43783 25.6298 3.67976 26.3082 4.13302C26.9865 4.58628 27.5153 5.23052 27.8275 5.98427C28.1397 6.73801 28.2214 7.56741 28.0622 8.36758C27.903 9.16775 27.5102 9.90276 26.9333 10.4796C26.3564 11.0565 25.6214 11.4494 24.8212 11.6086C24.021 11.7677 23.1916 11.686 22.4379 11.3738C21.6841 11.0616 21.0399 10.5329 20.5866 9.85456C20.1334 9.17621 19.8915 8.37868 19.8915 7.56283C19.8915 6.46882 20.3261 5.41961 21.0996 4.64602C21.8732 3.87243 22.9224 3.43783 24.0165 3.43783Z",
						fill: "#C5EBF5"
					}), (0, i.jsx)("path", {
						d: "M9.03896 17.7928C10.0773 17.7928 11.0923 17.4849 11.9557 16.9081C12.8191 16.3312 13.492 15.5112 13.8893 14.5519C14.2867 13.5926 14.3907 12.537 14.1881 11.5186C13.9855 10.5002 13.4855 9.56475 12.7513 8.83052C12.017 8.0963 11.0816 7.59628 10.0632 7.39371C9.04478 7.19114 7.98918 7.29511 7.02987 7.69247C6.07056 8.08983 5.25062 8.76273 4.67374 9.62609C4.09687 10.4894 3.78896 11.5045 3.78896 12.5428C3.79035 13.9348 4.34392 15.2693 5.32818 16.2536C6.31245 17.2379 7.647 17.7914 9.03896 17.7928ZM9.03896 10.2928C9.48397 10.2928 9.91898 10.4248 10.289 10.672C10.659 10.9193 10.9474 11.2707 11.1177 11.6818C11.288 12.0929 11.3325 12.5453 11.2457 12.9818C11.1589 13.4182 10.9446 13.8192 10.63 14.1338C10.3153 14.4485 9.91437 14.6628 9.47791 14.7496C9.04146 14.8364 8.58906 14.7919 8.17792 14.6216C7.76679 14.4513 7.41539 14.1629 7.16815 13.7929C6.92092 13.4229 6.78896 12.9878 6.78896 12.5428C6.78956 11.9465 7.02687 11.3748 7.44876 10.9533C7.87066 10.5318 8.44261 10.2951 9.03896 10.2951V10.2928Z",
						fill: "#C5EBF5"
					}), (0, i.jsx)("path", {
						d: "M40.5112 18.5751H37.4865C36.3725 18.5741 35.2726 18.8238 34.2682 19.3056C33.2866 18.1392 32.0619 17.2014 30.6798 16.5581C29.2977 15.9147 27.7917 15.5813 26.2672 15.5811H21.7327C20.2109 15.5814 18.7076 15.9137 17.3275 16.5549C15.9474 17.1961 14.7238 18.1308 13.7422 19.2936C12.7413 18.8193 11.6473 18.5739 10.5397 18.5751H7.51571C5.5307 18.5773 3.62759 19.3667 2.22384 20.7701C0.820079 22.1736 0.0302906 24.0766 0.02771 26.0616L1.52771 27.5616H46.5L48 26.0616C47.9976 24.0764 47.2077 22.1732 45.8038 20.7697C44.3998 19.3661 42.4964 18.5769 40.5112 18.5751ZM7.51571 21.5751H10.5397C11.083 21.5778 11.6213 21.6794 12.1282 21.8751C11.7558 22.7322 11.5008 23.6356 11.37 24.5608H3.28571C3.59698 23.6878 4.17049 22.9323 4.92771 22.3978C5.68493 21.8634 6.58885 21.576 7.51571 21.5751ZM14.4007 24.5623C14.7489 22.8744 15.6681 21.358 17.0036 20.2685C18.3391 19.1791 20.0092 18.5831 21.7327 18.5811H26.2672C27.9907 18.5829 29.6609 19.1787 30.9966 20.268C32.3322 21.3573 33.2516 22.8736 33.6 24.5616L14.4007 24.5623ZM36.63 24.5623C36.4999 23.6397 36.2462 22.7389 35.8755 21.8841C36.3887 21.6824 36.935 21.5776 37.4865 21.5751H40.5112C41.4382 21.576 42.3422 21.8636 43.0993 22.3984C43.8564 22.9332 44.4297 23.689 44.7405 24.5623H36.63Z",
						fill: "#C5EBF5"
					}), (0, i.jsx)("path", {
						d: "M39.0105 17.7928C40.0488 17.7928 41.0638 17.4849 41.9272 16.9081C42.7906 16.3312 43.4635 15.5112 43.8608 14.5519C44.2582 13.5926 44.3622 12.537 44.1596 11.5186C43.957 10.5002 43.457 9.56475 42.7228 8.83052C41.9885 8.0963 41.0531 7.59628 40.0347 7.39371C39.0163 7.19114 37.9607 7.29511 37.0014 7.69247C36.0421 8.08983 35.2221 8.76273 34.6452 9.62609C34.0684 10.4894 33.7605 11.5045 33.7605 12.5428C33.7619 13.9348 34.3154 15.2693 35.2997 16.2536C36.284 17.2379 37.6185 17.7914 39.0105 17.7928ZM39.0105 10.2928C39.4555 10.2928 39.8905 10.4248 40.2605 10.672C40.6305 10.9193 40.9189 11.2707 41.0892 11.6818C41.2595 12.0929 41.304 12.5453 41.2172 12.9818C41.1304 13.4182 40.9161 13.8192 40.6014 14.1338C40.2868 14.4485 39.8859 14.6628 39.4494 14.7496C39.013 14.8364 38.5606 14.7919 38.1494 14.6216C37.7383 14.4513 37.3869 14.1629 37.1397 13.7929C36.8924 13.4229 36.7605 12.9878 36.7605 12.5428C36.7611 11.9465 36.9984 11.3748 37.4203 10.9533C37.8422 10.5318 38.4141 10.2951 39.0105 10.2951V10.2928Z",
						fill: "#C5EBF5"
					})]
				}),
				b = () => (0, i.jsxs)("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 40 46",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, i.jsx)("path", {
						d: "M26.4256 15.404C26.4243 15.3512 26.4193 15.2986 26.4106 15.2465C26.4031 15.1415 26.3956 15.0365 26.3806 14.939C26.38 14.9109 26.3749 14.8831 26.3656 14.8565C26.3665 14.8288 26.364 14.8011 26.3581 14.774C26.2831 13.9865 26.1781 13.214 26.0731 12.4715C26.0656 12.4715 26.0506 12.479 26.0506 12.4865C25.1206 12.839 24.1756 13.244 23.2081 13.6865C23.2606 14.084 23.3131 14.504 23.3581 14.9315L23.3656 14.939C23.388 15.0806 23.403 15.2233 23.4106 15.3665C23.4406 15.6065 23.4631 15.8465 23.4856 16.094C23.4931 16.214 23.5156 16.334 23.5156 16.4615C23.5156 16.589 23.5381 16.7165 23.5456 16.8365L23.5606 16.829C24.5581 16.349 25.5256 15.929 26.4406 15.5615H26.4481C26.4406 15.509 26.4331 15.464 26.4256 15.404ZM22.0531 16.3565C21.8356 16.229 21.6181 16.109 21.3931 15.9965C20.9731 15.764 20.5531 15.539 20.1256 15.329C20.0814 15.2982 20.0335 15.273 19.9831 15.254C19.9831 15.239 19.9831 15.239 19.9756 15.2465C18.9181 15.794 17.8581 16.3765 16.7956 16.994H16.7656C16.7131 17.0315 16.6531 17.0615 16.5931 17.099C16.5331 17.1365 16.4656 17.174 16.4131 17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856C12.2581 19.784 11.2756 20.444 10.3381 21.1115C9.46812 21.734 8.63562 22.3565 7.86312 22.9865C6.68838 23.9077 5.56424 24.8916 4.49562 25.934C1.00812 29.354 -0.199384 32.0765 0.918116 34.0115H0.925616C2.03562 35.939 4.99062 36.2465 9.70061 34.9415C10.4806 34.724 11.2981 34.469 12.1456 34.169C11.9956 33.1865 11.8606 32.1815 11.7481 31.124C7.11312 32.8115 4.08312 33.104 3.52062 32.519C3.49539 32.0868 3.62281 31.6594 3.88062 31.3115C4.70562 29.894 6.85062 27.5615 10.3306 24.854C10.6606 24.6065 10.9831 24.3515 11.3356 24.104C11.4481 24.014 11.5681 23.9315 11.6881 23.849C11.8831 23.7065 12.0781 23.564 12.2806 23.4215C12.3856 23.3465 12.4981 23.264 12.6106 23.1815C12.7006 23.114 12.7981 23.0465 12.8881 22.979C12.9931 22.904 13.0981 22.8365 13.1956 22.7615L13.2031 22.769C14.1331 22.124 15.1456 21.464 16.2181 20.804C16.8181 20.444 17.4481 20.069 18.0931 19.694C18.7381 19.319 19.3681 18.974 19.9831 18.6365C21.0931 18.0365 22.1731 17.4965 23.2006 16.994C22.8181 16.775 22.4356 16.5665 22.0531 16.3565ZM16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C15.4306 29.624 14.4706 30.0515 13.5556 30.419C13.5516 30.4231 13.5463 30.4257 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C13.9306 33.509 13.9306 33.5015 13.9456 33.5015C14.8681 33.1415 15.8131 32.7365 16.7806 32.2865C16.7356 31.889 16.6756 31.475 16.6306 31.049ZM39.0781 11.975H39.0706C37.9606 10.04 34.9981 9.72502 30.2881 11.03C29.5081 11.2475 28.6981 11.5025 27.8506 11.8025V11.8175C28.0006 12.7925 28.1356 13.805 28.2481 14.855C32.8531 13.1825 35.8756 12.8975 36.4756 13.475C36.7006 14.39 34.4431 17.405 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006C27.0031 23.06 26.8981 23.1275 26.7931 23.2025C25.8631 23.8475 24.8506 24.5 23.7706 25.175C23.1706 25.5425 22.5481 25.91 21.9031 26.285C21.2581 26.66 20.6206 27.005 20.0056 27.3425C18.8881 27.9425 17.8156 28.4975 16.7881 28.985C17.1631 29.2025 17.5381 29.4125 17.9131 29.615C18.0781 29.7125 18.2431 29.8025 18.4081 29.885C18.4883 29.9342 18.5709 29.9793 18.6556 30.02C19.0381 30.23 19.4206 30.4325 19.7956 30.6275C19.8631 30.665 19.9306 30.695 19.9981 30.725L20.0056 30.7325C21.0631 30.1925 22.1281 29.6 23.2006 28.9925L23.2156 28.985L23.2231 28.9775L23.5831 28.7675V28.76L23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1856 27.1925 26.4031 27.0575 26.6131 26.915L26.6956 26.855H26.7031C26.7707 26.8195 26.8359 26.7794 26.8981 26.735C27.3331 26.4575 27.7531 26.1725 28.1731 25.8875C28.3006 25.805 28.4281 25.715 28.5556 25.625C28.8031 25.46 29.0431 25.295 29.2831 25.1225C29.3956 25.0475 29.5006 24.965 29.6131 24.89L29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23C33.3003 22.0761 34.4244 21.0897 35.4931 20.045C36.6912 18.9223 37.7357 17.6463 38.5996 16.25C39.0383 15.5378 39.329 14.7445 39.4546 13.9175C39.5395 13.2464 39.4076 12.5658 39.0781 11.975Z",
						fill: "#C5EBF5"
					}), (0, i.jsx)("path", {
						d: "M26.7931 22.784V22.775C26.7931 22.34 26.7856 21.9125 26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13V19.115C26.6956 19.04 26.6956 18.965 26.6881 18.89C26.6868 18.8198 26.6818 18.7497 26.6731 18.68C26.6656 18.545 26.6581 18.41 26.6581 18.275C26.6281 17.795 26.5981 17.33 26.5606 16.865C26.5531 16.775 26.5456 16.685 26.5381 16.6025C26.5156 16.3475 26.4931 16.1075 26.4706 15.86L26.4481 15.6125C26.442 15.5983 26.4394 15.5829 26.4406 15.5675L26.4481 15.56C26.4406 15.5075 26.4331 15.4625 26.4256 15.4025C26.4243 15.3497 26.4193 15.2971 26.4106 15.245C26.4031 15.14 26.3956 15.035 26.3806 14.9375C26.3799 14.9094 26.3749 14.8816 26.3656 14.855C26.3665 14.8273 26.364 14.7996 26.3581 14.7725C26.2831 13.985 26.1781 13.2125 26.0731 12.47C25.8559 10.9959 25.5631 9.534 25.1956 8.09002C23.9731 3.35752 22.2256 0.95752 19.9981 0.95752C17.7706 0.95752 16.0156 3.36502 14.7931 8.09752C14.5906 8.88502 14.4106 9.71752 14.2381 10.6025C15.1681 10.9625 16.1131 11.3525 17.0806 11.78C17.4032 9.38634 18.0991 7.05805 19.1431 4.88002C19.4581 4.34002 19.7506 4.03252 19.9981 3.96502C20.9056 4.22002 22.3831 7.68502 23.2081 13.685C23.2606 14.0825 23.3131 14.5025 23.3581 14.93L23.3656 14.9375C23.388 15.0791 23.403 15.2218 23.4106 15.365C23.4406 15.605 23.4631 15.845 23.4856 16.0925C23.4931 16.2125 23.5156 16.3325 23.5156 16.46C23.5156 16.5875 23.5381 16.715 23.5456 16.835C23.5531 16.955 23.5681 17.0825 23.5831 17.21V17.2175C23.6731 18.3575 23.7406 19.5575 23.7706 20.825C23.7856 21.53 23.8006 22.25 23.8006 22.9925C23.8006 23.735 23.7931 24.4625 23.7706 25.175C23.7331 26.435 23.6806 27.6275 23.5831 28.76V28.7675C23.6506 28.73 23.7181 28.685 23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1481 27.215 26.3356 27.1025 26.5081 26.99C26.5444 26.9668 26.5794 26.9418 26.6131 26.915L26.6956 26.855H26.7031C26.7631 25.67 26.7931 24.455 26.7931 23.2175L26.7931 23.2025C26.7995 23.1302 26.802 23.0576 26.8006 22.985V22.7975L26.7931 22.784ZM25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144L23.5531 29.1515C23.4631 30.269 23.3431 31.3115 23.2156 32.2865C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494L26.0731 33.4865C26.2231 32.504 26.3506 31.4765 26.4481 30.404C26.0746 30.2615 25.6996 30.104 25.3081 29.9315ZM25.7506 35.384C24.8281 35.024 23.8831 34.634 22.9231 34.2065C22.0606 39.0665 20.7931 41.819 20.0131 42.0215C19.1056 41.804 17.6056 38.339 16.7806 32.2865C16.7356 31.889 16.6756 31.4765 16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C16.4281 29.024 16.4206 28.8965 16.4056 28.769C16.3156 27.629 16.2556 26.429 16.2181 25.1615C16.2031 24.4565 16.1956 23.7365 16.1881 22.9865C16.1806 22.2365 16.2031 21.5165 16.2181 20.804C16.2556 19.5515 16.3156 18.359 16.4131 17.2265V17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856L13.2931 19.1315C13.2331 20.3165 13.1956 21.524 13.1956 22.7615L13.2031 22.769C13.2011 22.769 13.1992 22.7698 13.1978 22.7712C13.1964 22.7726 13.1956 22.7745 13.1956 22.7765C13.1919 22.8465 13.1919 22.9166 13.1956 22.9865V23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864C13.3381 28.0865 13.4281 29.2715 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C14.1329 34.982 14.4209 36.442 14.7931 37.8815C16.0081 42.6215 17.7706 45.0215 19.9906 45.0215H19.9996C21.3346 45.0215 22.4821 44.1665 23.4646 42.4715C24.2378 41.0254 24.8202 39.485 25.1971 37.889C25.3996 37.094 25.5946 36.2615 25.7596 35.384H25.7506ZM15.3406 13.064L14.6206 12.7715C14.3881 12.674 14.1556 12.5765 13.9231 12.4865L13.9156 12.494C13.7731 13.4765 13.6531 14.504 13.5481 15.569C13.9156 15.7265 14.2906 15.884 14.6881 16.0565H14.6956C15.2581 16.2965 15.8356 16.5665 16.4356 16.8515V16.829C16.5331 15.7115 16.6456 14.6765 16.7806 13.7015C16.2931 13.475 15.8206 13.274 15.3406 13.064Z",
						fill: "#C5EBF5"
					}), (0, i.jsx)("path", {
						d: "M35.4331 25.904C34.8706 25.3415 34.2631 24.7865 33.6031 24.209H33.5956C32.8231 24.8315 32.0206 25.4465 31.1731 26.069L31.1656 26.0765C31.1581 26.0765 31.1581 26.084 31.1506 26.0915C34.8856 29.219 36.6181 31.6715 36.4006 32.444C35.7631 33.119 32.0506 32.6915 26.4481 30.404C26.0731 30.2615 25.6981 30.104 25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144C23.4406 29.084 23.3356 29.0315 23.2231 28.979L23.2156 28.9865C22.1881 28.4915 21.1231 27.944 20.0056 27.344C19.3756 27.0065 18.7456 26.654 18.0931 26.279C17.4406 25.904 16.8181 25.529 16.2181 25.1615C15.1456 24.494 14.1406 23.8415 13.2031 23.204L13.1956 23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864L13.3006 26.8565C14.2981 27.5065 15.3331 28.144 16.4056 28.769L16.7881 28.9865C17.1631 29.204 17.5381 29.414 17.9131 29.6165C18.0781 29.714 18.2431 29.804 18.4081 29.8865C18.4883 29.9357 18.5709 29.9808 18.6556 30.0215C19.0381 30.2315 19.4206 30.434 19.7956 30.629C19.8631 30.6665 19.9306 30.6965 19.9981 30.7265L20.0056 30.734C20.0731 30.7715 20.1406 30.809 20.2081 30.839C20.6656 31.079 21.1231 31.304 21.5806 31.5215C22.1131 31.784 22.6456 32.0315 23.1631 32.2715C23.1791 32.2731 23.1944 32.2782 23.2081 32.2865H23.2156C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494C26.4256 33.6365 26.7856 33.7715 27.1381 33.899C27.4906 34.0265 27.8356 34.1465 28.1806 34.2665C28.2068 34.2695 28.2322 34.2771 28.2556 34.289C28.5931 34.4015 28.9231 34.514 29.2381 34.604C29.5756 34.7165 29.9056 34.814 30.2356 34.904C30.5281 34.9865 30.8131 35.054 31.0906 35.1215C31.3681 35.189 31.6531 35.2565 31.9156 35.309C32.2081 35.369 32.4931 35.429 32.7706 35.474C33.3256 35.564 33.8506 35.6315 34.3306 35.6615C35.2141 35.7338 36.1035 35.6603 36.9631 35.444C37.2573 35.3636 37.5416 35.2504 37.8106 35.1065C38.301 34.8394 38.7084 34.4424 38.9881 33.959C40.1056 32.0315 38.9056 29.324 35.4331 25.904ZM10.3531 21.125H10.3456V21.1175L10.3381 21.11C9.46812 21.7325 8.63562 22.355 7.86312 22.985L7.88561 23C8.65811 23.615 9.46812 24.23 10.3306 24.8525C10.6606 24.605 10.9831 24.35 11.3356 24.1025C11.4481 24.0125 11.5681 23.93 11.6881 23.8475C11.8831 23.705 12.0781 23.5625 12.2806 23.42C12.3781 23.3525 12.4756 23.2775 12.5806 23.21C12.6856 23.1425 12.7756 23.0675 12.8806 22.9925C12.8826 22.9925 12.8845 22.9917 12.8859 22.9903C12.8873 22.9889 12.8881 22.987 12.8881 22.985V22.9775C11.9746 22.3415 11.1331 21.734 10.3531 21.125ZM26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13C25.6981 18.4775 24.6556 17.8475 23.5906 17.2175H23.5831V17.21L23.2006 16.9925C22.8181 16.775 22.4356 16.565 22.0531 16.355C21.8356 16.2275 21.6181 16.1075 21.3931 15.995C20.9731 15.7625 20.5531 15.5375 20.1256 15.3275C20.0814 15.2967 20.0335 15.2715 19.9831 15.2525C19.9831 15.2375 19.9831 15.2375 19.9756 15.245C19.4506 14.9675 18.9331 14.7125 18.4156 14.465C17.8681 14.195 17.3281 13.94 16.7881 13.7H16.7806C16.2931 13.475 15.8206 13.2725 15.3406 13.0625L14.6206 12.77C14.3881 12.6725 14.1556 12.575 13.9231 12.485C13.1956 12.2 12.4831 11.9375 11.7856 11.7125C11.0881 11.4725 10.4056 11.2625 9.75311 11.075C9.46811 11 9.17562 10.925 8.90562 10.865C8.62062 10.7975 8.34311 10.73 8.07311 10.67C7.60812 10.5725 7.16562 10.4975 6.73812 10.4375C6.34812 10.385 5.96562 10.3475 5.61312 10.325C5.31312 10.3025 5.02062 10.3025 4.75062 10.3025C4.48981 10.3046 4.22935 10.3221 3.97062 10.355L3.96312 10.3475C3.63076 10.3889 3.30223 10.4566 2.98062 10.55C2.86812 10.5875 2.75562 10.625 2.65062 10.6625C2.47191 10.7314 2.29888 10.8141 2.13312 10.91C1.89763 11.04 1.68278 11.2043 1.49562 11.3975C1.3031 11.5844 1.1366 11.7963 1.00062 12.0275C-0.116884 13.955 1.08312 16.6625 4.55562 20.0825C5.13312 20.6375 5.74062 21.2075 6.40812 21.77C7.18062 21.1475 7.98312 20.5325 8.83062 19.91C8.83812 19.91 8.83812 19.9025 8.84562 19.9025C5.13312 16.7825 3.39312 14.33 3.59562 13.5275C4.27062 12.875 7.97562 13.3025 13.5481 15.5675C13.9156 15.725 14.2906 15.8825 14.6881 16.055H14.6956C15.2581 16.295 15.8356 16.565 16.4356 16.85C16.5481 16.895 16.6531 16.9475 16.7656 16.9925C16.7697 16.9966 16.7749 16.9992 16.7806 17C17.8081 17.495 18.8756 18.04 19.9831 18.635C20.6131 18.9725 21.2431 19.3325 21.8881 19.7C22.5331 20.0675 23.1631 20.45 23.7706 20.825C24.8506 21.4925 25.8581 22.145 26.7931 22.7825L26.7931 22.775C26.7931 22.3415 26.7856 21.914 26.7781 21.4865L26.7781 21.485ZM32.1106 22.985C31.3381 22.37 30.5131 21.7475 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006L27.1081 23C28.0156 23.6375 28.8631 24.26 29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23L32.1106 22.985Z",
						fill: "#C5EBF5"
					})]
				})
		},
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				A2: function() {
					return c
				},
				He: function() {
					return i
				},
				N$: function() {
					return v
				},
				Qq: function() {
					return s
				},
				ST: function() {
					return p
				},
				wM: function() {
					return o
				}
			});
			var e = t("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				s = "login-apple-jwt",
				p = "cf-test",
				i = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				v = u => [{
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
				c = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return s
				},
				c: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let s = function(i) {
				return i.TEMPLATE_SELECTED = "template selected", i.TEMPLATE_PRODUCT_SELECTED = "template product selected", i.TEMPLATE_SAVE_DRAFT = "template save draft", i.TEMPLATE_CANCEL = "template cancel", i.TEMPLATE_DEPLOY = "template deploy", i
			}({});
			const p = (i, v) => o().sendEvent(i, {
				template_name: v
			})
		},
		"../react/pages/pages/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				A: function() {
					return h
				},
				C1: function() {
					return E
				},
				GF: function() {
					return D
				},
				HD: function() {
					return l
				},
				IK: function() {
					return i
				},
				L7: function() {
					return s
				},
				Li: function() {
					return d
				},
				Ni: function() {
					return k
				},
				OG: function() {
					return W
				},
				QF: function() {
					return ee
				},
				QV: function() {
					return O
				},
				Sx: function() {
					return C
				},
				Ub: function() {
					return ne
				},
				X3: function() {
					return r
				},
				bA: function() {
					return I
				},
				eO: function() {
					return a
				},
				fH: function() {
					return m
				},
				fQ: function() {
					return w
				},
				fR: function() {
					return e
				},
				ff: function() {
					return b
				},
				iS: function() {
					return _
				},
				nY: function() {
					return f
				},
				w3: function() {
					return p
				},
				wJ: function() {
					return u
				},
				wp: function() {
					return g
				},
				yu: function() {
					return n
				},
				zF: function() {
					return P
				},
				zG: function() {
					return A
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-workers-and-pages",
				s = {
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
						configFile: "https://developers.cloudflare.com/pages/functions/wrangler-configuration/",
						workersStaticAssets: "https://developers.cloudflare.com/workers/static-assets/",
						workersMigrationGuide: "https://developers.cloudflare.com/workers/static-assets/migrate-from-pages/",
						workersCompatibilityMatrix: "https://developers.cloudflare.com/workers/static-assets/migrate-from-pages/#compatibility-matrix",
						pagesV2ToV3MigrationGuide: "https://developers.cloudflare.com/pages/configuration/build-image/#v2-to-v3-migration"
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
				p = "Allow Members - Cloudflare Pages",
				i = 58,
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
				c = "production",
				u = 2e3,
				E = 100,
				n = 350,
				r = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				g = 10,
				m = "_headers",
				d = "_redirects",
				h = "_routes.json",
				w = "_worker.js",
				_ = "do-a-barrel-roll",
				l = [m, d, h, w],
				C = 1024 * 1024 * 25,
				f = 1e3,
				O = {
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
				k = 1e5,
				A = 75e3,
				P = 2e5,
				D = 15e4,
				b = 3e3,
				I = 2250,
				S = "workers",
				x = "cloudflare_pages_build_caching",
				$ = 2;
			let ne = function(N) {
				return N[N.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", N[N.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", N[N.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", N[N.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", N[N.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", N[N.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", N
			}({});
			const ee = 1,
				re = 2,
				W = 2
		},
		"../react/pages/pages/routes.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return s
				},
				_j: function() {
					return o
				},
				zE: function() {
					return i
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
				p = v => `${v.subdomain}.pages.dev`,
				i = {
					installation: {
						github: {
							user: (0, e.BC)`https://github.com/settings/installations/${"installation_id"}`,
							organization: (0, e.BC)`https://github.com/organizations/${"organization_name"}/settings/installations/${"installation_id"}`
						},
						gitlab: (0, e.BC)`https://gitlab.com/${"username"}/${"repo"}/-/hooks/`
					}
				}
		},
		"../react/pages/pipelines/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				KO: function() {
					return c
				},
				L9: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(a).filter(function(m) {
						return Object.getOwnPropertyDescriptor(a, m).enumerable
					})), g.forEach(function(m) {
						p(n, m, a[m])
					})
				}
				return n
			}

			function p(n, r, a) {
				return r = i(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function i(n) {
				var r = v(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var g = a.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let c = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				u = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const E = (n, r = {}) => {
				o().sendEvent(n, s({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/profile/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				QV: function() {
					return p
				},
				Xn: function() {
					return o
				},
				iH: function() {
					return e
				},
				xq: function() {
					return s
				}
			});
			const e = "iam-authentication",
				o = "login",
				s = "profile",
				p = {
					[o]: {
						clickTryOther2FAMethodOrBackupCode: "click try another 2fa method or backup code",
						clickTryRecovery: "click try recovery",
						clickLoginFromMobileApp2fa: "click login on mobile-app/backup code 2fa"
					},
					[s]: {
						clickRegenerateBackupCodes: "click regenerate backup codes"
					}
				}
		},
		"../react/pages/r2/routes.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return s
				},
				Jg: function() {
					return v
				},
				_j: function() {
					return o
				},
				vF: function() {
					return i
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
				s = {
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
				p = c => {
					const u = "r2.cloudflarestorage.com";
					switch (c) {
						case "default":
							return u;
						case "eu":
							return `eu.${u}`;
						case "fedramp":
							return `fedramp.${u}`
					}
				},
				i = (c, u) => {
					const E = p(u);
					return `https://${c}.${E}`
				},
				v = (c, u, E) => `${i(c,u)}/${E}`
		},
		"../react/pages/secrets-store/resources/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Hf: function() {
					return k
				},
				JJ: function() {
					return v
				},
				Js: function() {
					return p
				},
				LN: function() {
					return d
				},
				Nm: function() {
					return a
				},
				Oh: function() {
					return w
				},
				Q2: function() {
					return P
				},
				QF: function() {
					return h
				},
				RR: function() {
					return l
				},
				T_: function() {
					return A
				},
				Xm: function() {
					return c
				},
				Zl: function() {
					return D
				},
				dv: function() {
					return i
				},
				fp: function() {
					return r
				},
				jx: function() {
					return O
				},
				nQ: function() {
					return g
				},
				px: function() {
					return _
				},
				tP: function() {
					return s
				},
				vh: function() {
					return m
				},
				wB: function() {
					return I
				},
				z3: function() {
					return b
				},
				zt: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				o = t("../../../../node_modules/yup/es/index.js");
			const s = "secrets-store-account-level",
				p = "https://developers.cloudflare.com/secrets-store/",
				i = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				v = 1,
				c = 10,
				u = 100;
			let E = function(S) {
					return S.NAME = "name", S
				}({}),
				n = function(S) {
					return S.NAME = "name", S
				}({});
			const r = {
				initialPaginationState: {
					page: v,
					perPage: c
				},
				initialSortState: {
					name: E.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: ""
				},
				filters: n,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					queryParamStrategy: "auto-clear"
				}
			};
			let a = function(S) {
					return S.NAME = "name", S.COMMENT = "comment", S.TAGS = "tags", S.SERVICES = "services", S.STATUS = "status", S
				}({}),
				g = function(S) {
					return S.PENDING = "pending", S.ACTIVE = "active", S.DELETED = "deleted", S
				}({}),
				m = function(S) {
					return S.LIST_SECRETS_STORES = "listSecretsStores", S.LIST_SECRETS = "listSecrets", S.GET_SECRET = "getSecret", S.SECRETS_QUOTA = "secretsQuota", S
				}({}),
				d = function(S) {
					return S.CREATE = "create", S.EDIT = "edit", S.DUPLICATE = "duplicate", S
				}({}),
				h = function(S) {
					return S.WORKERS = "workers", S.AI_GATEWAY = "ai_gateway", S
				}({});
			const w = "default_secrets_store";
			let _ = function(S) {
				return S.CREATE = "create", S.EDIT = "edit", S.DUPLICATE = "duplicate", S.VIEW = "view", S
			}({});
			const l = "delete_operation",
				C = /^[a-zA-Z0-9_-]+$/,
				f = (S, x, $, ne, ee) => o.Ry().shape({
					name: o.Z_().required(S("secrets_store.form.create.errors.name.required")).matches(C, S("secrets_store.form.create.errors.name.invalid_characters")).max(255, S("secrets_store.form.create.errors.name.max")),
					value: o.Z_().test("required-if-creating", S("secrets_store.form.create.errors.value.required"), re => x || ee ? !!re : !0).max(1024, S("secrets_store.form.create.errors.value.max")),
					comment: o.Z_().nullable().max(1024, S("secrets_store.form.create.errors.comment.max")),
					scopes: o.IX().of(o.Z_().oneOf(Object.values(h), S("secrets_store.form.create.errors.scopes.invalid"))).required()
				}),
				O = (S, x, $, ne, ee) => o.Ry().shape({
					secrets: o.IX().of(f(S, x, $, ne, ee))
				}),
				k = {
					name: "",
					value: "",
					scopes: [h.WORKERS],
					comment: ""
				},
				A = "secrets-store.store.secret";
			let P = function(S) {
				return S.DUPLICATE = "duplicate", S.DEPLOY = "deploy", S
			}({});
			const D = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let b = function(S) {
					return S.CREATE_SECRET = "create secrets store secret", S.EDIT_SECRET = "edit secrets store secret", S.DUPLICATE_SECRET = "duplicate secrets store secret", S.DELETE_SECRET = "delete secrets store secret", S.BIND_SECRET = "open secrets store binding drawer", S
				}({}),
				I = function(S) {
					return S.SECRETS_STORE = "secrets store main", S.WORKERS_BINDING = "workers binding drawer", S
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Ev: function() {
					return s
				},
				RY: function() {
					return e
				},
				v9: function() {
					return o
				}
			});
			let e = function(p) {
				return p.LOAD_SCAN_INFO = "load url scan information", p.INITIATE_URL_SCAN = "initiate url scan", p
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
			let s = function(p) {
				return p.LOAD_THREAT_EVENTS = "load threat events", p.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", p.THREAT_EVENTS_FILTERS = "threat events filters applied", p.ABUSE_REPORT_BUTTON_CLICK = "clicked abuse report button", p.ABUSE_REPORT_SUBMIT_CLICK = "clicked submit abuse report button", p.ABUSE_REPORT_SUBMIT_FAILED = "abuse report submission failed", p.ABUSE_REPORT_SUBMIT_SUCCESS = "abuse report submitted successfully", p
			}({})
		},
		"../react/pages/security/ai-agent/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				PJ: function() {
					return o
				},
				mG: function() {
					return e
				},
				tP: function() {
					return p
				},
				zf: function() {
					return s
				}
			});
			const e = "Hi there, I\u2019m Cloudy! I can help you identify suspicious activity, analyze traffic patterns, and recommend security rule configurations.",
				o = "open cloudy insight",
				s = "set cloudy tool response",
				p = "set cloudy tool error"
		},
		"../react/pages/security/analytics/resources/labels.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				AU: function() {
					return s
				},
				Bc: function() {
					return o
				},
				Bt: function() {
					return e
				},
				e_: function() {
					return p
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
				s = {
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
				p = {
					[s.ASN]: "firewall.analytics.services.labels.asn",
					[s.COUNTRY]: "firewall.analytics.services.labels.country",
					[s.IP]: "firewall.analytics.services.labels.ip",
					[s.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[s.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[s.VALIDATION]: "firewall.analytics.services.labels.validation",
					[s.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[s.WAF]: "firewall.analytics.services.labels.waf",
					[s.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[s.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[s.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[s.BIC]: "firewall.analytics.services.labels.bic",
					[s.HOT]: "firewall.analytics.services.labels.hot",
					[s.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[s.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[s.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[s.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[s.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[s.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[s.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[s.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[s.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[s.DLP]: "firewall.analytics.services.labels.dlp",
					[s.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				}
		},
		"../react/pages/security/analytics/security-analytics/resources/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				DC: function() {
					return g
				},
				Ff: function() {
					return c
				},
				Lz: function() {
					return a
				},
				RM: function() {
					return E
				},
				Ss: function() {
					return r
				},
				dR: function() {
					return i
				},
				gW: function() {
					return v
				},
				r5: function() {
					return u
				},
				y$: function() {
					return n
				},
				zs: function() {
					return p
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				s = t("../react/pages/security/analytics/resources/labels.ts");
			const p = ["block", "challenge", "jschallenge", "managed_challenge"],
				i = {
					label: "security_analytics.filters.mitigated",
					parse: m => m === "true" || m === !0,
					urlParam: "mitigated",
					type: e.kE.select,
					options: [!0, !1],
					operators: [o.Gn.equals, o.Gn.notEquals],
					rawLogField: "securityAction"
				},
				v = {
					label: "security_analytics.filters.security_action",
					urlParam: "mitigation-action",
					type: e.kE.select,
					options: Object.keys(s.Bt).filter(m => !["challenge_failed", "jschallenge_failed"].includes(m)),
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					rawLogField: "securityAction"
				},
				c = {
					label: "security_analytics.filters.security_source",
					urlParam: "mitigation-service",
					type: e.kE.select,
					options: Object.keys(s.e_).filter(m => m !== "unknown"),
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					rawLogField: "securitySources"
				};
			let u = function(m) {
				return m.MITIGATED_BY_WAF = "mitigatedByWAF", m.SERVED_BY_CLOUDFLARE = "servedByCloudflare", m.SERVED_BY_ORIGIN = "servedByOrigin", m
			}({});
			const E = {
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
				r = {
					suspicious_login_failure: 201326592,
					suspicious_login_attempt: 201326593
				},
				a = "security-analytics-log-explorer";
			let g = function(m) {
				return m.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', m.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', m.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', m.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', m.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', m.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", m.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", m.OPEN_SIDE_DRAWER = "open security analytics side drawer", m.CLOSE_SIDE_DRAWER = "close security analytics side drawer", m
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Fj: function() {
					return u
				},
				kq: function() {
					return c
				},
				xr: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(a).filter(function(m) {
						return Object.getOwnPropertyDescriptor(a, m).enumerable
					})), g.forEach(function(m) {
						p(n, m, a[m])
					})
				}
				return n
			}

			function p(n, r, a) {
				return r = i(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function i(n) {
				var r = v(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var g = a.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const u = {
					[c.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[c.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[c.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[c.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[c.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[c.JWT_VALIDATION]: {
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
					[c.SETTINGS]: {
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
					product: a = c.MAIN,
					productName: g,
					additionalData: m
				}) => {
					o().sendEvent(n, s({
						category: r,
						product: a,
						productName: g
					}, m || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Fm: function() {
					return p
				},
				N3: function() {
					return e
				},
				UN: function() {
					return s
				},
				h1: function() {
					return o
				}
			});
			let e = function(i) {
					return i.INITIAL_FETCH_SCORES = "view bots scores distribution", i.FETCH_CONFIGURATION = "view bots configuration page", i.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", i.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", i.UPDATE_SETTINGS = "update bots settings", i.DELETE_RULE = "delete bots ruleset", i.UPDATE_RULE = "update bots ruleset", i.FETCH_RULES = "view bots ruleset", i.CONFIGURE_BOT_MANAGEMENT = "view bots management", i.WAF_RULES_REDIRECT = "redirect waf rules", i.CHANGED_ZONE_SETTINGS = "change zone setting", i
				}({}),
				o = function(i) {
					return i.PROVIDED_TEMPLATE = "provided template link in detection card", i.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", i.USE_TEMPLATE = "use template", i.CREATE_FIREWALL_RULE = "create firewall rule", i.WAF_RULES = "waf rules", i
				}({});
			const s = "user journey",
				p = "Bots"
		},
		"../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				AL: function() {
					return c
				},
				NC: function() {
					return p
				},
				WZ: function() {
					return v
				},
				YC: function() {
					return i
				},
				aR: function() {
					return s
				},
				nz: function() {
					return o
				}
			});
			var e = t("../react/pages/security/detections/pages/root/components/new-settings/resources/types.ts");
			const o = {
					[e.MQ.WebApplicationExploits]: "settings.tabs.web-application-exploits",
					[e.MQ.DdosAttacks]: "settings.tabs.ddos-attacks",
					[e.MQ.BotTraffic]: "settings.tabs.bot-traffic",
					[e.MQ.ApiAbuse]: "settings.tabs.api-abuse",
					[e.MQ.ClientSideAbuse]: "settings.tabs.client-side-abuse",
					[e.MQ.DomainSettings]: "settings.filters.domain-settings",
					[e.MQ.WebAssetsAndEndpoints]: "settings.filters.web-assets-and-endpoints",
					[e.MQ.RuleTemplates]: "settings.filters.rule-templates",
					[e.MQ.Detections]: "settings.filters.detections",
					[e.MQ.General]: "settings.filters.general"
				},
				s = {
					[e.MQ.WebApplicationExploits]: "security-waf",
					[e.MQ.DdosAttacks]: "retarget",
					[e.MQ.BotTraffic]: "security-bots",
					[e.MQ.ApiAbuse]: "api-security",
					[e.MQ.ClientSideAbuse]: "user-multi"
				},
				p = {
					300: {
						label: "time.num_minutes",
						smartCount: 5
					},
					900: {
						label: "time.num_minutes",
						smartCount: 15
					},
					1800: {
						label: "time.num_minutes",
						smartCount: 30
					},
					2700: {
						label: "time.num_minutes",
						smartCount: 45
					},
					3600: {
						label: "time.num_hours",
						smartCount: 1
					},
					7200: {
						label: "time.num_hours",
						smartCount: 2
					},
					10800: {
						label: "time.num_hours",
						smartCount: 3
					},
					14400: {
						label: "time.num_hours",
						smartCount: 4
					},
					28800: {
						label: "time.num_hours",
						smartCount: 8
					},
					57600: {
						label: "time.num_hours",
						smartCount: 16
					},
					86400: {
						label: "time.num_days",
						smartCount: 1
					},
					604800: {
						label: "time.num_weeks",
						smartCount: 1
					},
					2592e3: {
						label: "time.num_months",
						smartCount: 1
					},
					31536e3: {
						label: "time.num_years",
						smartCount: 1
					}
				};
			let i = function(u) {
				return u.LOAD_SETTINGS = "load setting", u.OPEN_SIDE_MODAL_SETTING = "open side modal setting", u.CLOSE_SIDE_MODAL_SETTING = "close side modal setting", u.CHANGE_SETTING = "change setting", u.FILTER_SETTING = "filter setting", u
			}({});
			const v = {
					id: e.At.ManagedRuleset,
					titleKey: "settings.cards.managed-ruleset.title",
					descriptionKey: "settings.cards.managed-ruleset.description",
					documentationLink: "https://developers.cloudflare.com/waf/managed-rules/",
					oldDescription: ["WAF"],
					tabs: [e.MQ.WebApplicationExploits, e.MQ.DdosAttacks],
					filters: [e.MQ.Detections],
					isGeneral: !1
				},
				c = {
					id: e.At.OwaspCore,
					titleKey: "settings.cards.owasp-core.title",
					descriptionKey: "settings.cards.owasp-core.description",
					oldDescription: ["WAF"],
					documentationLink: "https://developers.cloudflare.com/waf/managed-rules/reference/owasp-core-ruleset/",
					tabs: [e.MQ.WebApplicationExploits],
					filters: [e.MQ.Detections],
					isGeneral: !1
				}
		},
		"../react/pages/security/detections/pages/root/components/new-settings/resources/types.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				At: function() {
					return p
				},
				MQ: function() {
					return e
				},
				fo: function() {
					return s
				}
			});
			let e = function(i) {
					return i.WebApplicationExploits = "web-application-exploits", i.DdosAttacks = "ddos-attacks", i.BotTraffic = "bot-traffic", i.ApiAbuse = "api-abuse", i.ClientSideAbuse = "client-side-abuse", i.DomainSettings = "domain-settings", i.WebAssetsAndEndpoints = "web-assets-and-endpoints", i.RuleTemplates = "rule-templates", i.Detections = "detections", i.General = "general", i
				}({}),
				o = function(i) {
					return i.DomainSettings = "domain-settings", i.WebAssetsAndEndpoints = "web-assets-and-endpoints", i.RuleTemplates = "rule-templates", i.Detections = "detections", i
				}({}),
				s = function(i) {
					return i.Tab = "tabs", i.Filters = "filters", i.Search = "search", i
				}({}),
				p = function(i) {
					return i.OptOut = "opt-out", i.AILabyrinth = "ai-labyrinth", i.BlockAIBots = "block-ai-bots", i.BrowserIntegrity = "browser-integrity", i.ChallengePassage = "challenge-passage", i.ClientCertificates = "client-certificates", i.CloudflareManagedRuleset = "cloudflare-managed-ruleset", i.CreateDeveloperPortal = "create-developer-portal", i.CustomFallthrough = "custom-fallthrough", i.EndpointDiscovery = "endpoint-discovery", i.FirewallAi = "firewall-ai", i.HttpDdos = "http-ddos", i.IpAccessRules = "ip-access-rules", i.IpLists = "ip-lists", i.JwtValidation = "jwt-validation", i.Labels = "labels", i.LeakedCredentialCheck = "leaked-credential-check", i.MaliciousUploadDetection = "malicious-upload-detection", i.ManagedRuleset = "managed-ruleset", i.Mtls = "mtls", i.NetworkDdos = "network-ddos", i.OwaspCore = "owasp-core", i.RateLimitAuthentication = "rate-limit-authentication", i.ReplaceInsecureJavascript = "replace-insecure-javascript", i.RobotsTxt = "robots-txt", i.SequenceDetection = "sequence-detection", i.SchemaDiscovery = "schema-discovery", i.SchemaValidation = "schema-validation", i.SecurityLevel = "security-level", i.SecurityTxt = "security-txt", i.SensitiveDataDetection = "sensitive-data-detection", i.SessionIdentifiers = "session-identifiers", i.SslDdos = "ssl-ddos", i.TokenConfigurations = "token-configurations", i.UserAgentBlocking = "user-agent-blocking", i.VolumetricAbuse = "volumetric-abuse", i.ZoneLockdown = "zone-lockdown", i.ContinuousScriptMonitoring = "continuous-script-monitoring", i.BotManagement = "bot-management", i.SuperBotFightMode = "super-bot-fight-mode", i.BotFightMode = "bot-fight-mode", i
				}({})
		},
		"../react/pages/security/overview/resources/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				AZ: function() {
					return p
				},
				BQ: function() {
					return i
				},
				Ht: function() {
					return s
				},
				Kx: function() {
					return e
				},
				NJ: function() {
					return c
				},
				S: function() {
					return o
				},
				oD: function() {
					return v
				}
			});
			let e = function(u) {
				return u.NAME = "description", u.SOURCE = "source", u.LAST_UPDATE = "lastUpdatedAt", u.ACTIVITY = "activity", u
			}({});
			const o = 5;
			let s = function(u) {
					return u.EXTERNAL_DOCUMENTATION = "external_documentation", u.LINK_TO_MANAGED = "link_to_managed_rules", u.LINK_TO_EVENTS = "link_to_security_events", u.LINK_TO_DDOS = "link_to_ddos", u.LINK_BOT_MGMT = "link_to_bot_mgmt", u.LINK_TO_AI_AUDIT = "link_to_ai_audit", u.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", u.LINK_TO_PAGE_SHIELD = "link_to_page_shield", u.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", u.LINK_TO_SECURITY_EVENTS = "link_to_security_events", u.LINK_TO_IP_RULE = "link_to_ip_rule", u.LINK_TO_CONFIGURATION = "link_to_configuration", u.LINK_TO_UPLOAD_SCHEMAS = "link_to_upload_schemas", u.LINK_TO_WEB_ASSETS = "link_to_web_assets", u.LINK_TO_DOMAINS = "link_to_domains", u
				}({}),
				p = function(u) {
					return u.LOAD_INSIGHTS = "load overview action items", u.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", u.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", u.CLICK_ACTION_INSIGHT = "click overview action item suggestion", u
				}({});
			const i = "security-overview-all-suggestions",
				v = [{
					title: "overview.modules.tab",
					url: "/"
				}, {
					title: "overview.all_suggestions.tab",
					url: "/all"
				}];
			let c = function(u) {
				return u.ARCHIVED = "archived", u.FRAUD_AND_ACCOUNT_ABUSE = "fraud_account_abuse", u
			}({})
		},
		"../react/pages/security/page-shield/resources/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				CP: function() {
					return D
				},
				FV: function() {
					return re
				},
				KH: function() {
					return A
				},
				Ks: function() {
					return G
				},
				Lj: function() {
					return R
				},
				MC: function() {
					return r
				},
				Mq: function() {
					return k
				},
				OV: function() {
					return ee
				},
				Oq: function() {
					return P
				},
				QM: function() {
					return f
				},
				SI: function() {
					return N
				},
				SJ: function() {
					return w
				},
				Sk: function() {
					return S
				},
				Ti: function() {
					return U
				},
				Uc: function() {
					return O
				},
				Uq: function() {
					return u
				},
				Uv: function() {
					return ne
				},
				V0: function() {
					return E
				},
				VT: function() {
					return m
				},
				YC: function() {
					return x
				},
				j$: function() {
					return _
				},
				qc: function() {
					return h
				},
				sV: function() {
					return b
				},
				sW: function() {
					return W
				},
				u8: function() {
					return g
				},
				v5: function() {
					return n
				},
				xg: function() {
					return $
				},
				yd: function() {
					return C
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				s = t("../react/pages/security/page-shield/resources/types.ts");

			function p(z) {
				for (var H = 1; H < arguments.length; H++) {
					var Z = arguments[H] != null ? Object(arguments[H]) : {},
						F = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols(Z).filter(function(q) {
						return Object.getOwnPropertyDescriptor(Z, q).enumerable
					})), F.forEach(function(q) {
						i(z, q, Z[q])
					})
				}
				return z
			}

			function i(z, H, Z) {
				return H = v(H), H in z ? Object.defineProperty(z, H, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[H] = Z, z
			}

			function v(z) {
				var H = c(z, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function c(z, H) {
				if (typeof z != "object" || z === null) return z;
				var Z = z[Symbol.toPrimitive];
				if (Z !== void 0) {
					var F = Z.call(z, H || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(z)
			}
			const u = 50,
				E = 9,
				n = "copy script url page shield",
				r = "disable page shield",
				a = "click documentation link",
				g = "enable page shield",
				m = "filter search page shield",
				d = "filter search view all page shield",
				h = "hover score tooltip page shield",
				w = "open alert modal page shield",
				_ = "change pagination page shield",
				l = "close script modal page shield",
				C = "open script modal page shield",
				f = "select alert type page shield",
				O = "sort column page shield",
				k = {
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
				A = {
					STARTS_WITH: o.Gn.startsWith,
					ENDS_WITH: o.Gn.endsWith,
					EQUALS: o.Gn.equals,
					CONTAINS: o.Gn.contains,
					DOES_NOT_CONTAIN: o.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: o.Gn.in
				},
				P = {
					status: {
						example: "active",
						type: e.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [A.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: e.kE.string,
						options: ["true", "false"],
						operators: [A.CONTAINS, A.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [A.EQUALS],
						type: e.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: e.kE.string,
						operators: [A.INCLUDES, A.ENDS_WITH, A.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				D = p({}, P, {
					urls: p({}, P.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				b = {
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
			let I = function(z) {
				return z.SECURITY_THREATS = "Security Threats", z.C2_BOTNET = "C2 & Botnet", z.CRYPTOMINING = "Cryptomining", z.MALWARE = "Malware", z.PHISHING = "Phishing", z.SPYWARE = "Spyware", z.DGA_DOMAINS = "DGA Domains", z.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", z
			}({});
			const S = "https://www.cloudflare.com/plans/enterprise/contact/",
				x = {
					[s.I1.BASE_URI]: "page_shield.policies.form.base_uri",
					[s.I1.CHILD]: "page_shield.policies.form.child",
					[s.I1.CONNECT]: "page_shield.policies.form.connections",
					[s.I1.DEFAULT]: "page_shield.policies.form.default",
					[s.I1.FONT]: "page_shield.policies.form.font",
					[s.I1.FORM_ACTION]: "page_shield.policies.form.form",
					[s.I1.FRAME]: "page_shield.policies.form.frame",
					[s.I1.FRAME_ANCESTORS]: "page_shield.policies.form.frame_ancestors",
					[s.I1.IMAGE]: "page_shield.policies.form.img",
					[s.I1.MANIFEST]: "page_shield.policies.form.manifest",
					[s.I1.MEDIA]: "page_shield.policies.form.media",
					[s.I1.OBJECT]: "page_shield.policies.form.object",
					[s.I1.SCRIPT]: "page_shield.policies.form.script",
					[s.I1.STYLE]: "page_shield.policies.form.style",
					[s.I1.UPGRADE_INSECURE_REQUESTS]: "page_shield.policies.form.upgrade_insecure_requests",
					[s.I1.WORKER]: "page_shield.policies.form.worker"
				},
				$ = {
					[s.I1.BASE_URI]: "firewall.page_shield.policies.table.base_uri",
					[s.I1.CHILD]: "firewall.page_shield.policies.table.child",
					[s.I1.CONNECT]: "firewall.page_shield.policies.table.connections",
					[s.I1.DEFAULT]: "firewall.page_shield.policies.table.default",
					[s.I1.FONT]: "firewall.page_shield.policies.table.font",
					[s.I1.FORM_ACTION]: "firewall.page_shield.policies.table.form",
					[s.I1.FRAME]: "firewall.page_shield.policies.table.frame",
					[s.I1.FRAME_ANCESTORS]: "firewall.page_shield.policies.table.frame_ancestors",
					[s.I1.IMAGE]: "firewall.page_shield.policies.table.img",
					[s.I1.MANIFEST]: "firewall.page_shield.policies.table.manifest",
					[s.I1.MEDIA]: "firewall.page_shield.policies.table.media",
					[s.I1.OBJECT]: "firewall.page_shield.policies.table.object",
					[s.I1.SCRIPT]: "firewall.page_shield.policies.table.script",
					[s.I1.SCRIPT_ELEM]: "firewall.page_shield.policies.table.script",
					[s.I1.STYLE]: "firewall.page_shield.policies.table.style",
					[s.I1.STYLE_ELEM]: "firewall.page_shield.policies.table.style",
					[s.I1.UPGRADE_INSECURE_REQUESTS]: "firewall.page_shield.policies.table.upgrade_insecure_requests",
					[s.I1.WORKER]: "firewall.page_shield.policies.table.worker"
				},
				ne = {
					[s.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[s.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[s.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[s.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[s.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				ee = {
					[s.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[s.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				re = {
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
				W = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				N = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				R = {
					[s.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[s.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[s.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				G = {
					[s.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[s.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[s.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				U = {
					[s.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[s.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[s.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				CP: function() {
					return p.CP
				},
				Ks: function() {
					return p.Ks
				},
				sV: function() {
					return p.sV
				},
				SI: function() {
					return p.SI
				},
				v5: function() {
					return p.v5
				},
				xg: function() {
					return p.xg
				},
				YC: function() {
					return p.YC
				},
				MC: function() {
					return p.MC
				},
				Xe: function() {
					return f.Xe
				},
				u8: function() {
					return p.u8
				},
				Oq: function() {
					return p.Oq
				},
				VT: function() {
					return p.VT
				},
				qc: function() {
					return p.qc
				},
				V0: function() {
					return p.V0
				},
				Lj: function() {
					return p.Lj
				},
				k2: function() {
					return f.k2
				},
				$g: function() {
					return f.$g
				},
				SJ: function() {
					return p.SJ
				},
				KH: function() {
					return p.KH
				},
				Mq: function() {
					return p.Mq
				},
				FV: function() {
					return p.FV
				},
				j$: function() {
					return p.j$
				},
				I1: function() {
					return f.I1
				},
				Wq: function() {
					return f.Wq
				},
				jf: function() {
					return f.jf
				},
				sW: function() {
					return p.sW
				},
				Uq: function() {
					return p.Uq
				},
				yd: function() {
					return p.yd
				},
				QM: function() {
					return p.QM
				},
				Uc: function() {
					return p.Uc
				},
				R$: function() {
					return f.R$
				},
				Sk: function() {
					return p.Sk
				},
				gY: function() {
					return _
				},
				SE: function() {
					return E
				},
				m: function() {
					return h
				},
				xP: function() {
					return d
				},
				xl: function() {
					return m
				},
				Tb: function() {
					return g
				},
				h3: function() {
					return l
				},
				xq: function() {
					return q
				},
				SQ: function() {
					return G
				},
				C0: function() {
					return U
				},
				av: function() {
					return A
				},
				W3: function() {
					return O
				},
				WO: function() {
					return I
				},
				Dk: function() {
					return $
				},
				we: function() {
					return ee
				},
				Yt: function() {
					return N
				},
				ex: function() {
					return W
				},
				E1: function() {
					return re
				},
				dm: function() {
					return D
				},
				oK: function() {
					return S
				},
				qZ: function() {
					return R
				},
				_4: function() {
					return z
				},
				qo: function() {
					return H
				},
				CB: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(o),
				p = t("../react/pages/security/page-shield/resources/constants.ts");

			function i(L) {
				for (var K = 1; K < arguments.length; K++) {
					var Q = arguments[K] != null ? Object(arguments[K]) : {},
						ie = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(Q).filter(function(V) {
						return Object.getOwnPropertyDescriptor(Q, V).enumerable
					})), ie.forEach(function(V) {
						v(L, V, Q[V])
					})
				}
				return L
			}

			function v(L, K, Q) {
				return K = c(K), K in L ? Object.defineProperty(L, K, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[K] = Q, L
			}

			function c(L) {
				var K = u(L, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function u(L, K) {
				if (typeof L != "object" || L === null) return L;
				var Q = L[Symbol.toPrimitive];
				if (Q !== void 0) {
					var ie = Q.call(L, K || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(L)
			}
			const E = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", L => (s().sendEvent(p.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), L)),
				n = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", L => (s().sendEvent(p.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), L)),
				r = (L, K) => {
					var Q;
					return JSON.stringify(i({}, K == null || (Q = K[0]) === null || Q === void 0 ? void 0 : Q.parameters, L))
				};
			let a = "";
			const g = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("start", (L, K, Q) => (a = r(K, Q), L)).on("success", L => (s().sendEvent(p.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), L)).on("error", (L, K, Q) => r(K, Q) === a ? L : {
					type: "noop"
				}),
				m = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				d = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", L => (s().sendEvent(p.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), L)),
				h = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				w = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", L => (s().sendEvent(p.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), L)),
				_ = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				l = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var C = t("../react/app/redux/normalizer.js"),
				f = t("../react/pages/security/page-shield/resources/types.ts");
			const O = L => L.pageShield.configuration,
				k = L => {
					var K;
					return (K = L.pageShield.configuration.data) === null || K === void 0 ? void 0 : K.enabled
				},
				A = L => {
					var K;
					return (K = O(L)) === null || K === void 0 ? void 0 : K.data
				},
				P = L => L.pageShield.scripts,
				D = L => L.pageShield.script,
				b = L => L.pageShield.connections,
				I = L => L.pageShield.connection,
				S = (0, C.P1)("pageShieldScripts", P),
				x = (0, C.P1)("pageShieldScript", D),
				$ = (0, C.P1)("pageShieldConnections", b),
				ne = (0, C.P1)("pageShieldConnection", I),
				ee = (L, K) => L === f.Wq.SCRIPT_MONITOR ? S(K) || [] : $(K) || [],
				re = (L, K) => L === f.Wq.SCRIPT_MONITOR ? P(K) || [] : b(K) || [],
				W = (L, K) => L === f.Wq.SCRIPT_MONITOR ? x(K) : ne(K),
				N = L => L.pageShield.domainIntel,
				R = L => L.pageShield.whoIsRecord,
				G = (L, K, Q) => {
					var ie;
					const V = Object.values(Q).map(ae => ({
						key: ae,
						label: p.Uv[ae],
						score: L[ae]
					})).filter(ae => ae.score !== void 0 && ae.score <= K);
					return K === p.V0 && V.length === 0 && ((ie = L.js_integrity_score) !== null && ie !== void 0 ? ie : 100) <= K && V.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), V
				},
				U = (L, K) => Object.values(K).filter(Q => L[Q] === !0).map(Q => p.OV[Q]),
				z = L => L === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				H = (L, K) => L[f.$g.MagecartScore] !== void 0 && L[f.$g.MagecartScore] <= K || L[f.$g.MalwareScore] !== void 0 && L[f.$g.MalwareScore] <= K || L[f.$g.CryptominingScore] !== void 0 && L[f.$g.CryptominingScore] <= K || L.js_integrity_score !== void 0 && L.js_integrity_score <= K,
				Z = ["cdn.jsdelivr.net", "unpkg.com"],
				F = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				q = L => {
					if (L.includes("@latest")) {
						const Q = L.split("@latest");
						if (Q.length != 2) return;
						const ie = Q[0].length,
							V = ie + "@latest".length;
						return [ie, V]
					}
					if (!!Z.some(Q => L.includes(Q)))
						for (const Q of F) {
							const ie = L.match(Q);
							if (!ie) continue;
							const V = ie.index;
							if (V === 0) return null;
							const ae = V + ie[0].length;
							return [V, ae]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				$g: function() {
					return E
				},
				I1: function() {
					return i
				},
				R$: function() {
					return n
				},
				Wq: function() {
					return u
				},
				Xe: function() {
					return v
				},
				jf: function() {
					return c
				},
				k2: function() {
					return r
				}
			});

			function e(a) {
				for (var g = 1; g < arguments.length; g++) {
					var m = arguments[g] != null ? Object(arguments[g]) : {},
						d = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(m).filter(function(h) {
						return Object.getOwnPropertyDescriptor(m, h).enumerable
					})), d.forEach(function(h) {
						o(a, h, m[h])
					})
				}
				return a
			}

			function o(a, g, m) {
				return g = s(g), g in a ? Object.defineProperty(a, g, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[g] = m, a
			}

			function s(a) {
				var g = p(a, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function p(a, g) {
				if (typeof a != "object" || a === null) return a;
				var m = a[Symbol.toPrimitive];
				if (m !== void 0) {
					var d = m.call(a, g || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(a)
			}
			let i = function(a) {
				return a.BASE_URI = "base-uri", a.CHILD = "child-src", a.CONNECT = "connect-src", a.DEFAULT = "default-src", a.FONT = "font-src", a.FORM_ACTION = "form-action", a.FRAME = "frame-src", a.FRAME_ANCESTORS = "frame-ancestors", a.IMAGE = "img-src", a.MANIFEST = "manifest-src", a.MEDIA = "media-src", a.OBJECT = "object-src", a.SCRIPT = "script-src", a.SCRIPT_ELEM = "script-src-elem", a.STYLE = "style-src", a.STYLE_ELEM = "style-src-elem", a.WORKER = "worker-src", a.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", a
			}({});
			const v = e({}, i, {
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
			let c = function(a) {
					return a.MONITOR = "monitor", a.POLICIES = "policies", a.SETTINGS = "settings", a
				}({}),
				u = function(a) {
					return a.SCRIPT_MONITOR = "script", a.CONNECTION_MONITOR = "connection", a.COOKIE_MONITOR = "cookie", a
				}({}),
				E = function(a) {
					return a.CryptominingScore = "cryptomining_score", a.MalwareScore = "malware_score", a.MagecartScore = "magecart_score", a
				}({}),
				n = function(a) {
					return a.DataflowScore = "dataflow_score", a.ObfuscationScore = "obfuscation_score", a
				}({}),
				r = function(a) {
					return a.DomainMalicious = "domain_reported_malicious", a.UrlMalicious = "url_reported_malicious", a
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				_C: function() {
					return d
				},
				_R: function() {
					return h
				},
				dY: function() {
					return _
				},
				fy: function() {
					return f
				},
				ji: function() {
					return m
				},
				pR: function() {
					return w
				},
				pV: function() {
					return O
				},
				rj: function() {
					return C
				},
				yR: function() {
					return k
				},
				zf: function() {
					return l
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				o = t("../../../common/util/types/src/api/phases/fields.tsx"),
				s = t("webpack/sharing/consume/default/react/react"),
				p = t.n(s),
				i = t("../react/utils/translator.tsx"),
				v = t("../react/pages/security/resources/types.ts"),
				c = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				E = t("../../../../node_modules/react/jsx-runtime.js");

			function n(A) {
				for (var P = 1; P < arguments.length; P++) {
					var D = arguments[P] != null ? Object(arguments[P]) : {},
						b = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(D).filter(function(I) {
						return Object.getOwnPropertyDescriptor(D, I).enumerable
					})), b.forEach(function(I) {
						r(A, I, D[I])
					})
				}
				return A
			}

			function r(A, P, D) {
				return P = a(P), P in A ? Object.defineProperty(A, P, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[P] = D, A
			}

			function a(A) {
				var P = g(A, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function g(A, P) {
				if (typeof A != "object" || A === null) return A;
				var D = A[Symbol.toPrimitive];
				if (D !== void 0) {
					var b = D.call(A, P || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(A)
			}
			const m = 10;
			let d = function(A) {
					return A.MTLS_ACCESS = "mTLS-enforced authentication", A.ZONE_LOCKDOWN = "Zone lockdown", A.USER_AGENT = "User agent blocking", A.EMAIL_VALIDITY = "Disposable email checks", A.IP_BASED = "IP-based rule", A.GEOGRAPHY_BASE = "Geography-based rule", A
				}({}),
				h = function(A) {
					return A.LEAKED_CREDENTIALS = "Leaked Credentials Checks", A
				}({});
			const w = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				_ = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: d.GEOGRAPHY_BASE,
					trackedEvent: w.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: d.IP_BASED,
					trackedEvent: w.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: d.USER_AGENT,
					trackedEvent: w.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: d.ZONE_LOCKDOWN,
					trackedEvent: w.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				l = {
					[v.X.UI_SECTION]: A => ({
						[d.MTLS_ACCESS]: {
							ruleName: d.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: (0, E.jsx)(i.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: (0, E.jsx)(i.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${A.account.id}/${A.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[d.ZONE_LOCKDOWN]: {
							ruleName: d.ZONE_LOCKDOWN,
							displayName: (0, E.jsx)(i.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: (0, E.jsx)(i.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [u.ZC, e.QV],
								applyMarkdown: !0,
								componentProps: [{
									display: "inline"
								}, {
									to: `/${A.account.id}/configurations/lists`
								}]
							})
						},
						[d.GEOGRAPHY_BASE]: {
							ruleName: d.GEOGRAPHY_BASE,
							displayName: (0, E.jsx)(i.cC, {
								id: "custom-rules.templates.rule.geography_based.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: (0, E.jsx)(i.cC, {
								id: "custom-rules.templates.rule.geography_based.wafRulesOverview"
							})
						},
						[d.IP_BASED]: {
							ruleName: d.IP_BASED,
							displayName: (0, E.jsx)(i.cC, {
								id: "custom-rules.templates.rule.ip_base.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: (0, E.jsx)(i.cC, {
								id: "custom-rules.templates.rule.ip_base.wafRulesOverview",
								applyMarkdown: !0,
								Components: [u.ZC, e.QV],
								componentProps: [{
									display: "inline"
								}, {
									to: `/${A.account.id}/configurations/lists`
								}]
							})
						},
						[d.USER_AGENT]: {
							ruleName: d.USER_AGENT,
							displayName: (0, E.jsx)(i.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: (0, E.jsx)(i.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${A.account.id}/configurations/lists`
								}]
							})
						},
						[d.EMAIL_VALIDITY]: {
							ruleName: d.EMAIL_VALIDITY,
							capability: "security_rules.rules.capability.fraud",
							displayName: (0, E.jsx)(i.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: (0, E.jsx)(i.cC, {
								id: "custom-rules.templates.rule.disposable_email.wafRulesOverview"
							}),
							hasWafPermission: !0
						}
					}),
					[v.X.WAF_RULES]: {
						[d.MTLS_ACCESS]: {
							description: "custom-rules.templates.rule.mtls_access.name",
							expression: '(not cf.tls_client_auth.cert_verified and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.mtls_access.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[d.ZONE_LOCKDOWN]: {
							description: "custom-rules.templates.rule.zone_lockdown.name",
							expression: '(not ip.src in $0 and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.zone_lockdown.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[d.USER_AGENT]: {
							description: "custom-rules.templates.rule.user_agent.name",
							expression: '(http.user_agent eq "BadBot/1.0.2 (+http://bad.bot)")',
							helper: {
								text: "custom-rules.templates.rule.user_agent.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[d.EMAIL_VALIDITY]: {
							description: "custom-rules.templates.rule.disposable_email.name",
							expression: "(cf.fraud_detection.disposable_email)",
							defaultAction: "block",
							emptySelectValue: !0
						},
						[d.GEOGRAPHY_BASE]: {
							description: "custom-rules.templates.rule.geography.name",
							expression: '(ip.src.asnum eq "") or (ip.src.country eq "") or (ip.src.continent eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						},
						[d.IP_BASED]: {
							description: "firewall.tools.toast.ip",
							expression: '(ip.src eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						}
					}
				},
				C = {
					[v.X.WAF_RULES]: {
						[h.LEAKED_CREDENTIALS]: {
							ruleName: h.LEAKED_CREDENTIALS,
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
						[h.LEAKED_CREDENTIALS]: {
							ruleName: h.LEAKED_CREDENTIALS,
							displayName: (0, E.jsx)(i.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: (0, E.jsx)(i.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let f = function(A) {
				return A.DISCOVERY = "discovery", A.SEQUENCES = "sequences", A.SCHEMA_VALIDATION = "schema-validation", A.SETTINGS = "settings", A.API_RULES = "api-rules", A.UPGRADE = "upgrade", A
			}({});
			const O = n({}, c.g, {
				[o.df.HttpRequestFirewallManaged]: n({}, c.g[o.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[o.df.HttpRequestFirewallCustom]: n({}, c.g[o.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[o.df.HttpRateLimit]: n({}, c.g[o.df.HttpRateLimit], {
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
			let k = function(A) {
				return A.APP_SEC_MVP = "app-security-navigation-mvp", A.APP_SEC_DEFAULT_FOR_ALL = "app-security-default-for-all", A
			}({})
		},
		"../react/pages/security/resources/hooks/useUnificationGate.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				D$: function() {
					return C
				},
				Ud: function() {
					return O
				},
				o7: function() {
					return l
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				o = t("webpack/sharing/consume/default/react/react"),
				s = t.n(o),
				p = t("../react/pages/security/resources/constants.tsx"),
				i = t("../react/app/components/Persistence/index.tsx"),
				v = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(v),
				u = t("../react/common/hooks/useActiveState.ts"),
				E = t("../react/app/components/Persistence/api.ts"),
				n = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				r = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				a = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				g = t.n(a),
				m = t("../react/common/components/ExternalLink.tsx"),
				d = t("../react/utils/translator.tsx"),
				h = t("../node_modules/@cloudflare/elements/es/index.js"),
				w = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				_ = t("../../../../node_modules/react/jsx-runtime.js");
			const l = () => !!(0, e.Z)(p.yR.APP_SEC_MVP),
				C = () => {
					const {
						flags: k
					} = (0, i.yZ)();
					return {
						isInDefaultAllGate: !!(0, e.Z)(p.yR.APP_SEC_DEFAULT_FOR_ALL),
						hasDefaultAllFlag: !!k.hasEnabledDefaultUnifiedSecurity
					}
				},
				f = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_9Ktoks1h6dU2W7s",
				O = () => {
					const {
						flags: k,
						actions: A
					} = (0, i.yZ)(), {
						t: P
					} = (0, d.QT)(), {
						hasEnabledDefaultUnifiedSecurity: D,
						hasEnabledSecurityNavigation: b
					} = k, I = (0, e.Z)(p.yR.APP_SEC_DEFAULT_FOR_ALL), [S, x] = (0, u.Z)("securityNavStatus");
					(0, o.useEffect)(() => {
						!S && (D || b) && w.Tb(new Error("AppSec Unification error: User is opted in, but old navigation is showing"), {
							extra: {
								navFlag: S,
								hasEnabledDefaultUnifiedSecurity: D,
								hasEnabledSecurityNavigation: b,
								appsecDefaultGate: I
							}
						})
					}, [k, I, S]);
					const $ = async () => {
						await (0, r.SS)({
							title: (0, _.jsx)(a.Trans, {
								id: "security.opt_in.modal.title"
							}),
							description: (0, _.jsx)(h.ZC, {
								children: (0, _.jsx)(a.Trans, {
									id: "security.opt_in.modal.default_all.description",
									Components: [m.dL],
									componentProps: [{
										to: f,
										target: "_blank",
										rel: "noopener noreferrer",
										display: "inline"
									}]
								})
							}),
							cancelButtonText: P("security.opt_in.modal.confirm"),
							actionButtonText: P("security.opt_in.modal.cancel"),
							destructive: !0
						}) && ne()
					}, ne = () => {
						A.toggleSecurityNavigation(!D, !0);
						const W = (0, n.jB)(D);
						(0, n.yM)(W, {
							value: !D
						})
					}, ee = (0, o.useCallback)(async () => {
						if (I && D) {
							await $();
							return
						}
						if (I) {
							ne();
							return
						}
						A.toggleSecurityNavigation(!b, !1)
					}, [D, b]);
					return {
						setSecurityNav: (0, o.useCallback)(W => {
							if (I && W.flags.hasEnabledDefaultUnifiedSecurity === void 0) {
								x(!0), (0, E.Sp)({
									hasEnabledDefaultUnifiedSecurity: !0,
									hasEnabledSecurityNavigation: !0
								}), c().identify({
									hasEnabledSecurityNavigation: !0,
									hasEnabledDefaultUnifiedSecurity: !0
								});
								const R = (0, n.jB)(W.flags.hasEnabledDefaultUnifiedSecurity);
								(0, n.yM)(R, {
									value: !0
								});
								return
							}
							if (W.flags.hasEnabledDefaultUnifiedSecurity || W.flags.hasEnabledSecurityNavigation) {
								var N;
								x(!0), c().identify({
									hasEnabledSecurityNavigation: W.flags.hasEnabledSecurityNavigation,
									hasEnabledDefaultUnifiedSecurity: (N = W.flags) === null || N === void 0 ? void 0 : N.hasEnabledDefaultUnifiedSecurity
								})
							}
						}, [I, k]),
						toggleSecurityNav: ee,
						navFlag: S,
						feedbackFormLink: f
					}
				}
		},
		"../react/pages/security/resources/types.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				X: function() {
					return e
				}
			});
			let e = function(s) {
					return s.UI_SECTION = "UI_SECTION", s.WAF_RULES = "WAF_RULES", s
				}({}),
				o = function(s) {
					return s.Low = "low", s.Medium = "medium", s.Critical = "critical", s
				}({})
		},
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				jB: function() {
					return E
				},
				yM: function() {
					return u
				},
				yf: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(a).filter(function(m) {
						return Object.getOwnPropertyDescriptor(a, m).enumerable
					})), g.forEach(function(m) {
						p(n, m, a[m])
					})
				}
				return n
			}

			function p(n, r, a) {
				return r = i(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function i(n) {
				var r = v(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var g = a.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CLICK_OPT_IN = "click opt in security navigation", n.CLICK_OPT_IN_BUTTON = "click opt in button", n.CLICK_OPT_OUT_BUTTON = "click opt out button", n.CLICK_NEXT_STEP = "click opt in next step", n.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", n.DISPLAY_MODAL = "display opt in modal", n.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", n.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", n.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", n.DEFAULT_ALL_OPT_OUT = "user in default-all gate opts out", n.DEFAULT_ALL_REENABLES = "user in default-all gate re-enables new UI", n.DEFAULT_ALL_INIT = "user in default-all gate is opted-in be default", n.NEW_DASHBOARD_EXPERIENCE = "click on new dashboard experience button", n
			}({});
			const u = (n, r = {}) => {
					o().sendEvent(n, s({}, r || {}))
				},
				E = n => {
					if (n === !0) return c.DEFAULT_ALL_OPT_OUT;
					if (n === !1) return c.DEFAULT_ALL_REENABLES;
					if (n === void 0) return c.DEFAULT_ALL_INIT
				}
		},
		"../react/pages/security/settings/hooks/api.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				$y: function() {
					return m
				},
				Ai: function() {
					return n
				},
				B: function() {
					return E
				},
				BT: function() {
					return i
				},
				CK: function() {
					return u
				},
				F3: function() {
					return d
				},
				JP: function() {
					return s
				},
				O_: function() {
					return r
				},
				X2: function() {
					return p
				},
				YO: function() {
					return h
				},
				_c: function() {
					return w
				},
				je: function() {
					return g
				},
				ll: function() {
					return v
				},
				qD: function() {
					return c
				},
				tw: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const s = async _ => {
				var l, C;
				const f = await (0, e.get)(`/zones/${_}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((l = f == null ? void 0 : f.body) === null || l === void 0 || (C = l.result) === null || C === void 0 ? void 0 : C.value) === "enabled"
			}, p = async (_, l) => (await (0, e.post)(`/zones/${_}/content-upload-scan/${l?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), l), i = async _ => {
				var l;
				const C = await (0, e.get)(`/zones/${_}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((l = C == null ? void 0 : C.body) === null || l === void 0 ? void 0 : l.result) || []
			}, v = async (_, l) => {
				var C;
				const f = await (0, e.post)(`/zones/${_}/content-upload-scan/payloads`, {
					body: [l]
				});
				return (C = f == null ? void 0 : f.body) === null || C === void 0 ? void 0 : C.result
			}, c = async (_, l) => (await (0, e.del)(`/zones/${_}/content-upload-scan/payloads/${l}`, {
				hideErrorAlert: !0
			}), l), u = async _ => {
				var l;
				const C = await (0, e.get)(`/zones/${_}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((l = C == null ? void 0 : C.body) === null || l === void 0 ? void 0 : l.pii_detection_enabled)
			}, E = async (_, l) => (await (0, e.put)(`/zones/${_}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: l
				}
			}), l), n = async _ => {
				var l, C;
				const f = await (0, e.get)(`/zones/${_}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((l = f == null ? void 0 : f.body) === null || l === void 0 || (C = l.result) === null || C === void 0 ? void 0 : C.enabled)
			}, r = async (_, l) => {
				var C, f;
				const O = await (0, e.post)(`/zones/${_}/leaked-credential-checks`, {
					body: {
						enabled: l
					}
				});
				return !!((C = O == null ? void 0 : O.body) === null || C === void 0 || (f = C.result) === null || f === void 0 ? void 0 : f.enabled)
			}, a = async _ => {
				var l;
				const C = await (0, e.get)(`/zones/${_}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (l = C == null ? void 0 : C.body) === null || l === void 0 ? void 0 : l.result
			}, g = async (_, l) => {
				var C;
				const f = await (0, e.post)(`/zones/${_}/leaked-credential-checks/detections`, {
					body: l
				});
				return (C = f == null ? void 0 : f.body) === null || C === void 0 ? void 0 : C.result
			}, m = async (_, l) => (await (0, e.del)(`/zones/${_}/leaked-credential-checks/detections/${l}`, {
				hideErrorAlert: !0
			}), l), d = async (_, l) => {
				await (0, e.put)(`/zones/${_}/security-center/securitytxt`, {
					body: l
				})
			}, h = async _ => {
				await (0, e.del)(`/zones/${_}/security-center/securitytxt`)
			}, w = async _ => (await (0, e.get)(`/zones/${_}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Xu: function() {
					return m
				},
				Io: function() {
					return f
				},
				FQ: function() {
					return re
				},
				vU: function() {
					return g
				},
				M: function() {
					return h
				},
				d7: function() {
					return d
				},
				Oz: function() {
					return C
				},
				Np: function() {
					return x
				},
				WR: function() {
					return E
				},
				bE: function() {
					return $
				},
				u_: function() {
					return a
				},
				pf: function() {
					return O
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				o = t("../react/pages/security/settings/hooks/api.ts"),
				s = t("webpack/sharing/consume/default/react/react"),
				p = t("webpack/sharing/consume/default/react-redux/react-redux"),
				i = t("../react/pages/security/settings/resources/index.ts"),
				v = t("../react/common/hooks/useZoneEntitlement.ts"),
				c = t("../../../../node_modules/yup/es/index.js"),
				u = t("../react/utils/translator.tsx");
			const E = () => (0, p.useSelector)(i.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				r = () => !!useZoneEntitlement(n),
				a = () => {
					const {
						t: W
					} = (0, u.QT)(), N = c.Z_().required(W("common.field_is_required")).max(24, W("labels.apply.form.name.error.max_characters")).matches(i.DG, W("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", W("labels.apply.form.name.error.cf_forbidden"), U => !i.aW.test(U)), R = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: U => c.Ry().shape({
							[i.n5.NAME]: U ? c.Z_() : N,
							[i.n5.DESCRIPTION]: U ? c.Z_().optional() : c.Z_().max(150, W("labels.apply.form.description.error.max_characters"))
						})
					}, G = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[i.N2.NAME]: "",
							[i.N2.SOURCE]: i.W3,
							[i.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => c.Ry().shape({
							[i.N2.NEW_LABEL_NAME]: N
						})
					};
					return {
						LABELS_APPLY_FORM: R,
						EDIT_LABELS_MODAL_FORM: G
					}
				},
				g = ({
					modalHeaderFixedHeight: W = 62,
					modalDefaultPaddings: N = 16
				} = {}) => {
					const R = (0, s.useRef)(null),
						G = (0, s.useRef)(null),
						[U, z] = (0, s.useState)(0),
						[H, Z] = (0, s.useState)(0),
						F = `calc(100vh - ${U}px - ${H}px - ${N}px)`,
						[q, L] = (0, s.useState)("");
					return (0, s.useEffect)(() => {
						const K = () => {
							var Q, ie, V, ae;
							const ge = R == null || (Q = R.current) === null || Q === void 0 ? void 0 : Q.offsetHeight,
								Ce = G == null || (ie = G.current) === null || ie === void 0 ? void 0 : ie.offsetHeight,
								se = ((V = ge) !== null && V !== void 0 ? V : 0) + W,
								be = (ae = Ce) !== null && ae !== void 0 ? ae : 0;
							z(se), Z(be)
						};
						return K(), window.addEventListener("resize", K), () => window.removeEventListener("resize", K)
					}, []), {
						searchTerm: q,
						setSearchTerm: L,
						scrollableSectionMaxHeight: F,
						topMenuRef: R,
						bottomMenuRef: G
					}
				},
				m = W => {
					const N = E(),
						R = (0, e.useQueryClient)(),
						G = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${W}`,
							queryFn: () => (0, o.JP)(W),
							enabled: N
						}),
						U = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${W}`,
							queryFn: () => (0, o.BT)(W),
							enabled: N && !!(G == null ? void 0 : G.data)
						}),
						z = (0, e.useMutation)({
							mutationFn: async ({
								enabled: F
							}) => await (0, o.X2)(W, F),
							onSuccess: F => {
								R.setQueryData([`content-scanning-enabled-${W}`], F)
							}
						}),
						H = (0, e.useMutation)({
							mutationFn: F => (0, o.ll)(W, F),
							onSuccess: F => {
								R.setQueryData([`content-scanning-detections-${W}`], F)
							}
						}),
						Z = (0, e.useMutation)({
							mutationFn: F => (0, o.qD)(W, F),
							onSuccess: F => {
								var q;
								const L = (q = R.getQueryData(`content-scanning-detections-${W}`)) !== null && q !== void 0 ? q : [];
								R.setQueryData([`content-scanning-detections-${W}`], L.filter(({
									id: K
								}) => K !== F))
							}
						});
					return {
						entitled: N,
						loading: G.isLoading || U.isLoading,
						error: G.isError || U.isError,
						enabled: {
							data: G.data,
							isToggling: z.isLoading,
							toggleEnabled: async F => z.mutateAsync({
								enabled: F
							})
						},
						detections: {
							data: U.data,
							add: H.mutateAsync,
							delete: Z.mutateAsync,
							loading: H.isLoading || Z.isLoading
						}
					}
				},
				d = () => {
					const W = (0, p.useSelector)(i.cN),
						N = (0, p.useSelector)(i.bH),
						R = (0, p.useSelector)(i.P3),
						G = (0, p.useSelector)(i.Ri);
					return {
						hasEditPermission: W,
						isEnabled: R && (N.hasSimilarLeaked || N.hasUsernameAndPasswordLeaked || G)
					}
				},
				h = W => {
					const N = d(),
						R = (0, e.useQueryClient)(),
						G = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${W}`,
							queryFn: () => (0, o.Ai)(W),
							enabled: !!N.isEnabled,
							retry: 1
						}),
						U = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${W}`,
							queryFn: () => (0, o.tw)(W),
							enabled: !!N.isEnabled && !!(G == null ? void 0 : G.data)
						}),
						z = (0, e.useMutation)({
							mutationFn: ({
								enabled: F
							}) => (0, o.O_)(W, F),
							onSuccess: F => {
								R.setQueryData([`leaked-credentials-enabled-${W}`], F)
							}
						}),
						H = (0, e.useMutation)({
							mutationFn: async F => await (0, o.je)(W, F),
							onSuccess: F => {
								var q;
								const L = (q = R.getQueryData(`leaked-credentials-detections-${W}`)) !== null && q !== void 0 ? q : [];
								R.setQueryData([`leaked-credentials-detections-${W}`], [...L, F])
							}
						}),
						Z = (0, e.useMutation)({
							mutationFn: F => (0, o.$y)(W, F),
							onSuccess: F => {
								var q;
								const L = (q = R.getQueryData(`leaked-credentials-detections-${W}`)) !== null && q !== void 0 ? q : [];
								R.setQueryData([`leaked-credentials-detections-${W}`], L.filter(({
									id: K
								}) => K !== F))
							}
						});
					return {
						entitled: N.isEnabled,
						hasEditPermissions: N.hasEditPermission,
						loading: G.isLoading || U.isLoading,
						error: G.isError || G.isError,
						enabled: {
							data: G.data,
							isToggling: z.isLoading,
							toggleEnabled: async F => z.mutateAsync({
								enabled: F
							})
						},
						detections: {
							data: U.data,
							add: H.mutateAsync,
							delete: Z.mutateAsync,
							loading: H.isLoading || Z.isLoading
						}
					}
				};
			var w = t("../react/common/utils/useQueryCache.ts");
			const _ = "security-txt",
				l = {
					securityTxt: ({
						zoneId: W
					}) => [_, W]
				},
				C = W => (0, e.useQuery)({
					queryKey: l.securityTxt({
						zoneId: W
					}),
					queryFn: () => (0, o._c)(W),
					select: N => N.result
				}),
				f = W => {
					const {
						invalidate: N
					} = (0, w.o)(l.securityTxt({
						zoneId: W
					}));
					return (0, e.useMutation)({
						mutationFn: () => (0, o.YO)(W),
						onSuccess: async () => {
							await N(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				O = W => {
					const {
						invalidate: N
					} = (0, w.o)(l.securityTxt({
						zoneId: W
					}));
					return (0, e.useMutation)({
						mutationFn: R => (0, o.F3)(W, R),
						onSuccess: async () => {
							await N(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var k = t("../../../../node_modules/lodash/isEqual.js"),
				A = t.n(k),
				P = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function D(W) {
				for (var N = 1; N < arguments.length; N++) {
					var R = arguments[N] != null ? Object(arguments[N]) : {},
						G = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(R).filter(function(U) {
						return Object.getOwnPropertyDescriptor(R, U).enumerable
					})), G.forEach(function(U) {
						b(W, U, R[U])
					})
				}
				return W
			}

			function b(W, N, R) {
				return N = I(N), N in W ? Object.defineProperty(W, N, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[N] = R, W
			}

			function I(W) {
				var N = S(W, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function S(W, N) {
				if (typeof W != "object" || W === null) return W;
				var R = W[Symbol.toPrimitive];
				if (R !== void 0) {
					var G = R.call(W, N || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(W)
			}
			const x = W => {
					const {
						queryKey: N,
						zoneId: R
					} = (0, P.hL)(W), {
						isLoading: G,
						isError: U,
						isSuccess: z,
						data: H,
						refetch: Z,
						isRefetching: F
					} = (0, e.useQuery)({
						queryKey: N,
						queryFn: () => P.Mi.getLabels(D({
							zoneId: R
						}, W)),
						onSuccess: () => {
							var q;
							const L = W == null || (q = W.filters) === null || q === void 0 ? void 0 : q.source;
							(L === i.LABEL_SOURCES.MANAGED || L === i.LABEL_SOURCES.USER) && (0, i.Tf)({
								name: i.QJ.FILTER_USER_MANAGED_LABELS,
								product: i.Iv.SECURITY_SETTINGS,
								pageName: i.R.LABELS_LIST,
								type: L
							})
						}
					});
					return {
						data: H == null ? void 0 : H.result,
						errors: H == null ? void 0 : H.errors,
						paginationData: H == null ? void 0 : H.result_info,
						isLoading: G,
						isError: U,
						isSuccess: z,
						refetch: Z,
						isRefetching: F
					}
				},
				$ = ({
					labels: W,
					preselectedLabels: N
				}) => {
					const {
						USER: R,
						MANAGED: G
					} = i.LABEL_SOURCES, [U, z] = (0, s.useState)({
						[R]: [],
						[G]: []
					}), [H, Z] = (0, s.useState)(new Set), F = H.size > 0, [q, L] = (0, s.useState)(!1), K = ae => {
						Z(ge => {
							const Ce = new Set(ge);
							return Ce.has(ae.name) ? Ce.delete(ae.name) : Ce.add(ae.name), Ce
						})
					}, Q = ae => H.has(ae.name), ie = (ae, ge) => {
						const Ce = Q(ae) ? 1 : 0;
						return (Q(ge) ? 1 : 0) - Ce
					}, V = ae => {
						z(ge => ({
							[R]: [...ae ? ae[R] : ge[R]].sort(ie),
							[G]: [...ae ? ae[G] : ge[G]].sort(ie)
						}))
					};
					return (0, s.useEffect)(() => {
						if (W && !q) {
							if (N) {
								const ae = new Set;
								W.forEach(ge => {
									N.some(Ce => A()(Ce, ge)) && ae.add(ge.name)
								}), Z(ae)
							}
							L(!0)
						}
					}, [W, N, q]), (0, s.useEffect)(() => {
						if (W && q) {
							const ae = W.reduce((Ce, se) => (se.source === R ? Ce[R].push(se) : se.source === G && Ce[G].push(se), Ce), {
									[R]: [],
									[G]: []
								}),
								ge = {
									[R]: ae[R].sort(ie),
									[G]: ae[G].sort(ie)
								};
							z(ge)
						}
					}, [R, G, W, q]), {
						userAndManagedLabels: U,
						setUserAndManagedLabels: z,
						toggleSelectedLabel: K,
						isLabelSelected: Q,
						sortLabelsBySelectedStatus: V,
						hasLabelsSelected: F
					}
				};
			var ne = t("../react/app/redux/index.ts"),
				ee = t("../react/pages/security/settings/resources/selectors.ts");
			const re = (W = "") => {
				const N = (0, ne.p4)(ee.Xs),
					R = N && (W == null ? void 0 : W.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: N,
					hasDeprecatedParameter: R
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				FQ: function() {
					return E.FQ
				},
				Iv: function() {
					return n.Iv
				},
				M: function() {
					return E.M
				},
				Np: function() {
					return E.Np
				},
				Oz: function() {
					return E.Oz
				},
				Q4: function() {
					return n.Q4
				},
				QJ: function() {
					return n.QJ
				},
				R: function() {
					return n.R
				},
				TG: function() {
					return n.TG
				},
				Tf: function() {
					return n.Tf
				},
				WR: function() {
					return E.WR
				},
				Xs: function() {
					return n.Xs
				},
				Xu: function() {
					return E.Xu
				},
				ZF: function() {
					return n.ZF
				},
				bE: function() {
					return E.bE
				},
				bH: function() {
					return n.bH
				},
				dC: function() {
					return n.dC
				},
				eC: function() {
					return n.eC
				},
				m8: function() {
					return n.m8
				},
				pf: function() {
					return E.pf
				},
				ui: function() {
					return n.ui
				},
				vc: function() {
					return n.vc
				},
				zF: function() {
					return n.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/app/components/Forbidden.jsx"),
				s = t("webpack/sharing/consume/default/react/react"),
				p = t.n(s),
				i = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				v = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(v),
				u = t("../../../../node_modules/react/jsx-runtime.js"),
				E = t("../react/pages/security/settings/hooks/index.ts"),
				n = t("../react/pages/security/settings/resources/index.ts");
			const r = p().lazy(() => Promise.all([t.e(27969), t.e(97842), t.e(16691), t.e(14886), t.e(94012), t.e(60296), t.e(33023), t.e(65676), t.e(68204), t.e(2515), t.e(22038), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(66270), t.e(29271), t.e(30906), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				a = () => {
					const {
						t: g
					} = (0, v.useI18n)(), m = (0, e.xk)("waf");
					return (0, u.jsx)(i.T3, {
						parentPageLabel: g("navigation.zone.security"),
						title: g("navigation.zone.security.settings"),
						type: "narrow",
						children: m.read ? (0, u.jsx)(r, {}) : (0, u.jsx)(o.Z, {})
					})
				};
			y.ZP = a
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Mi: function() {
					return l
				},
				hL: function() {
					return _
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				s = t("../react/common/utils/useQueryCache.ts"),
				p = t("../react/pages/security/settings/resources/constants.ts"),
				i = t("../react/common/hooks/useAccountId.ts"),
				v = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				c = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const u = {
				labels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var E = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				r = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(f, O) {
				if (f == null) return {};
				var k = g(f, O),
					A, P;
				if (Object.getOwnPropertySymbols) {
					var D = Object.getOwnPropertySymbols(f);
					for (P = 0; P < D.length; P++) A = D[P], !(O.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(f, A) || (k[A] = f[A]))
				}
				return k
			}

			function g(f, O) {
				if (f == null) return {};
				var k = {},
					A = Object.keys(f),
					P, D;
				for (D = 0; D < A.length; D++) P = A[D], !(O.indexOf(P) >= 0) && (k[P] = f[P]);
				return k
			}

			function m(f) {
				for (var O = 1; O < arguments.length; O++) {
					var k = arguments[O] != null ? Object(arguments[O]) : {},
						A = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(k).filter(function(P) {
						return Object.getOwnPropertyDescriptor(k, P).enumerable
					})), A.forEach(function(P) {
						d(f, P, k[P])
					})
				}
				return f
			}

			function d(f, O, k) {
				return O = h(O), O in f ? Object.defineProperty(f, O, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[O] = k, f
			}

			function h(f) {
				var O = w(f, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function w(f, O) {
				if (typeof f != "object" || f === null) return f;
				var k = f[Symbol.toPrimitive];
				if (k !== void 0) {
					var A = k.call(f, O || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(f)
			}
			const _ = f => {
					const O = (0, e.p4)(o.Cu),
						k = (0, i.F)(),
						A = C.labels(m({
							accountId: k,
							zoneId: O
						}, f ? m({}, f) : {})),
						P = (0, s.o)(A);
					return m({
						zoneId: O,
						queryKey: A,
						batchInvalidateLabels: async () => {
							await P.batchInvalidate({
								queryKeysToPredicateInvalidate: [p.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, P)
				},
				l = {
					getLabels: async f => {
						var O, k, A, P;
						let {
							zoneId: D,
							hideErrorAlert: b = !0
						} = f, I = a(f, ["zoneId", "hideErrorAlert"]);
						return (await v.get(u.labels.toUrl({
							zoneId: D
						}), {
							parameters: {
								page: I == null ? void 0 : I.page,
								per_page: I == null ? void 0 : I.per_page,
								with_mapped_resource_counts: I == null ? void 0 : I.with_mapped_resource_counts,
								filter: I == null || (O = I.filters) === null || O === void 0 ? void 0 : O.search,
								source: (0, n.sQ)(I == null || (k = I.filters) === null || k === void 0 ? void 0 : k.source),
								order: I == null || (A = I.sort) === null || A === void 0 ? void 0 : A.id,
								direction: (I == null ? void 0 : I.sort) ? (I == null || (P = I.sort) === null || P === void 0 ? void 0 : P.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: b
						})).body
					},
					getLabel: async f => {
						let {
							zoneId: O,
							labelName: k,
							hideErrorAlert: A = !0
						} = f, P = a(f, ["zoneId", "labelName", "hideErrorAlert"]);
						const D = (0, n.mm)(k) ? u.managedLabel.toUrl({
							zoneId: O,
							labelName: k
						}) : u.userLabel.toUrl({
							zoneId: O,
							labelName: k
						});
						return (await v.get(D, {
							parameters: {
								with_mapped_resource_counts: P == null ? void 0 : P.with_mapped_resource_counts
							},
							hideErrorAlert: A
						})).body
					},
					editLabel: async ({
						zoneId: f,
						label: O,
						replace: k
					}) => {
						const {
							name: A
						} = O, P = a(O, ["name"]);
						return (await (k ? v.put : v.patch)(u.userLabel.toUrl({
							zoneId: f,
							labelName: O.name
						}), {
							body: P
						})).body
					},
					deleteLabel: async ({
						zoneId: f,
						labelName: O
					}) => (await v.del(u.userLabel.toUrl({
						zoneId: f,
						labelName: O
					}))).body,
					createLabel: async f => {
						let {
							zoneId: O
						} = f, k = a(f, ["zoneId"]);
						const {
							product: A
						} = k, P = a(k, ["product"]);
						return (await v.post(u.userLabels.toUrl({
							zoneId: O
						}), {
							body: [P]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: f,
						user: O,
						managed: k,
						operationIds: A,
						replace: P
					}) => (await (P ? v.put : v.post)(u.operationsLinkedToLabels.toUrl({
						zoneId: f
					}), {
						body: m({}, O ? {
							user: {
								labels: O
							}
						} : {}, k ? {
							managed: {
								labels: k
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: A
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: f,
						labelName: O,
						operationIds: k
					}) => {
						const A = (0, n.mm)(O) ? u.managedLabelOperations.toUrl({
							zoneId: f,
							labelName: O
						}) : u.userLabelOperations.toUrl({
							zoneId: f,
							labelName: O
						});
						return (await v.put(A, {
							body: {
								selector: {
									include: {
										operation_ids: k
									}
								}
							}
						})).body
					}
				},
				C = {
					labels: f => {
						let {
							accountId: O,
							zoneId: k
						} = f, A = a(f, ["accountId", "zoneId"]);
						return [p.IQ.LABELS, O, k, ...(0, E.isEmpty)(A) ? [] : [A]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return h
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return c
				},
				GE: function() {
					return k
				},
				IQ: function() {
					return p
				},
				KV: function() {
					return v
				},
				LABELS_LIST_TOASTS: function() {
					return g
				},
				LABEL_SOURCES: function() {
					return i
				},
				QH: function() {
					return m
				},
				V: function() {
					return C
				},
				W3: function() {
					return s
				},
				Yn: function() {
					return D
				},
				_8: function() {
					return a
				},
				_c: function() {
					return f
				},
				aW: function() {
					return w
				},
				dC: function() {
					return P
				},
				gY: function() {
					return O
				},
				j8: function() {
					return u
				},
				jz: function() {
					return d
				},
				n5: function() {
					return _
				},
				om: function() {
					return E
				},
				w: function() {
					return o
				},
				zF: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let o = function(b) {
				return b.EXPOSED_CREDENTIALS = "exposed_credentials", b.CONTENT_SCANNING = "content_scanning", b.FIREWALL_AI = "firewall_ai", b
			}({});
			const s = "all";
			let p = function(b) {
					return b.LABELS = "labels", b
				}({}),
				i = function(b) {
					return b.USER = "user", b.MANAGED = "managed", b
				}({}),
				v = function(b) {
					return b.SOURCE = "source", b
				}({}),
				c = function(b) {
					return b.NAME = "name", b.SOURCE = "source", b.NEW_LABEL_NAME = "newLabelName", b
				}({}),
				u = function(b) {
					return b.ENDPOINT = "endpoint", b.METHOD = "method", b.OPERATION_ID = "operationId", b
				}({}),
				E = function(b) {
					return b.NAME = "name", b.MAPPED_RESOURCES = "mapped_resources.operations", b.SOURCE = "source", b.APPLY = "apply", b
				}({});
			const a = {
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
						[v.SOURCE]: s
					}
				},
				filters: v,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					queryParamStrategy: "auto-clear"
				}
			};
			let g = function(b) {
				return b.CREATED_LABEL = "createdLabel", b.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", b.DELETED_LABEL = "deletedLabel", b.APPLIED_LABEL = "appliedLabel", b.EDITED_LABEL = "editedLabel", b.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", b
			}({});
			const m = "650px",
				d = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				h = /^[A-Za-z0-9-]+$/,
				w = /^cf-/;
			let _ = function(b) {
				return b.NAME = "name", b.DESCRIPTION = "description", b
			}({});
			const l = "all";
			let C = function(b) {
				return b.METHOD = "method", b.HOSTNAME = "hostname", b
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
						[C.METHOD]: l,
						[C.HOSTNAME]: l
					}
				},
				filters: C
			};
			let O = function(b) {
				return b.TITLE = "title", b.DESCRIPTION = "description", b.SUBMIT = "submit", b
			}({});
			const k = 1e3,
				A = {
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
				P = "exposed-credentials-module",
				D = "cf-risk"
		},
		"../react/pages/security/settings/resources/index.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return e.DG
				},
				tR: function() {
					return g
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
					return d
				},
				R: function() {
					return n
				},
				LABEL_SOURCES: function() {
					return e.LABEL_SOURCES
				},
				eC: function() {
					return m
				},
				QH: function() {
					return e.QH
				},
				TG: function() {
					return o.T
				},
				QF: function() {
					return s.QF
				},
				vc: function() {
					return s.vc
				},
				ZF: function() {
					return a
				},
				Xs: function() {
					return _.Xs
				},
				wG: function() {
					return s.N2
				},
				Q4: function() {
					return s.Q4
				},
				Wv: function() {
					return s.Wv
				},
				bH: function() {
					return _.bH
				},
				Mb: function() {
					return s.Mb
				},
				ui: function() {
					return _.ui
				},
				P3: function() {
					return _.P3
				},
				Ri: function() {
					return _.Ri
				},
				cN: function() {
					return _.cN
				},
				m8: function() {
					return w
				},
				Tf: function() {
					return h
				},
				$E: function() {
					return s.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				o = t("../react/pages/security/settings/resources/types.ts"),
				s = t("../react/pages/security/settings/resources/utils.ts"),
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(p);

			function v(l) {
				for (var C = 1; C < arguments.length; C++) {
					var f = arguments[C] != null ? Object(arguments[C]) : {},
						O = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(f).filter(function(k) {
						return Object.getOwnPropertyDescriptor(f, k).enumerable
					})), O.forEach(function(k) {
						c(l, k, f[k])
					})
				}
				return l
			}

			function c(l, C, f) {
				return C = u(C), C in l ? Object.defineProperty(l, C, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[C] = f, l
			}

			function u(l) {
				var C = E(l, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function E(l, C) {
				if (typeof l != "object" || l === null) return l;
				var f = l[Symbol.toPrimitive];
				if (f !== void 0) {
					var O = f.call(l, C || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(l)
			}
			let n = function(l) {
					return l.LABELS_LIST = "Labels List page", l.LABELS_APPLY = "Labels Apply page", l.LABELS_SIDE_MODAL = "Labels Side Modal", l.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", l.LABELS_OPERATION_DETAILS = "Operation Details page", l
				}({}),
				r = function(l) {
					return l.API_SHIELD = "API Shield", l.SECURITY_SETTINGS = "Security Settings", l
				}({}),
				a = function(l) {
					return l.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", l.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", l.OPERATIONS_TABLE_ROW = "Operations table row", l.OPERATION_DETAILS_PAGE = "Operation details page", l
				}({}),
				g = function(l) {
					return l.UPSERT = "upsert", l.OVERWRITE = "overwrite", l
				}({}),
				m = function(l) {
					return l.SINGLE = "single", l.MULTIPLE = "multiple", l
				}({}),
				d = function(l) {
					return l.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", l.DELETE_LABEL = "delete a user label in the settings page", l.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", l.CREATE_LABEL_CLICKED = "click create label button in the settings page", l.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", l.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", l.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", l.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", l.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", l.OPEN_LABELS_SIDE_MODAL = "open labels side modal", l.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", l.REMOVE_RISK_LABELS_FROM_OPERATION = "remove risk label(s) from operation(s) in the labels side modal", l.CREATE_NEW_LABEL = "create a new label", l
				}({});
			const h = ({
					name: l,
					product: C,
					category: f = "user journey",
					pageName: O,
					from: k,
					write_strategy: A,
					type: P,
					target: D,
					selected: b
				}) => {
					i().sendEvent(l, v({
						category: f,
						pageName: O,
						product: C
					}, k ? {
						from: k
					} : {}, A ? {
						write_strategy: A
					} : {}, P ? {
						type: P
					} : {}, D ? {
						target: D
					} : {}, b ? {
						selected: b
					} : {}))
				},
				w = () => {
					var l;
					return (l = Object.values(d)) === null || l === void 0 ? void 0 : l.flat()
				};
			var _ = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				P3: function() {
					return c
				},
				Ri: function() {
					return u
				},
				Xs: function() {
					return n
				},
				bH: function() {
					return E
				},
				cN: function() {
					return v
				},
				ui: function() {
					return i
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				o = t("../react/utils/url.ts"),
				s = t("../react/common/selectors/entitlementsSelectors.ts"),
				p = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const i = r => {
					const a = (0, e.RO)(r),
						g = !!(0, s.rV)(r, "rulesets.file_upload_scan_allowed"),
						m = !!(0, s.BF)(r, "rulesets.file_upload_scan_allowed");
					return (0, o.el)(window.location.pathname) ? a && (g || m) : m
				},
				v = r => Number((0, s.rV)(r, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				c = r => (0, s.rV)(r, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				u = r => (0, s.rV)(r, "rulesets.leaked_credential_checks_allowed"),
				E = r => ({
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, s.f)(r, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, s.f)(r, "rulesets.leaked_credential_checks_similar_allowed")
				}),
				n = r => !!(0, p.z1)("deprecate-security-level")(r)
		},
		"../react/pages/security/settings/resources/types.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				T: function() {
					return o
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let o = function(s) {
				return s.ENABLED = "enabled", s.CONTACT = "contact", s.EXPIRES = "expires", s.ENCRYPTION = "encryption", s.ACKNOWLEDGMENTS = "acknowledgments", s.CANONICAL = "canonical", s.HIRING = "hiring", s.POLICY = "policy", s.PREFERRED_LANGUAGES = "preferred_languages", s.MODIFIED_ON = "modified_on", s
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return a
				},
				Mb: function() {
					return g
				},
				N2: function() {
					return C
				},
				Q4: function() {
					return d
				},
				QF: function() {
					return r
				},
				Vy: function() {
					return w
				},
				Wv: function() {
					return m
				},
				mm: function() {
					return l
				},
				sQ: function() {
					return _
				},
				vc: function() {
					return h
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				s = t("../react/pages/security/settings/routes.tsx"),
				p = t("../react/pages/security/settings/resources/constants.ts"),
				i = t("../react/pages/security/settings/resources/types.ts"),
				v = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function c(f) {
				for (var O = 1; O < arguments.length; O++) {
					var k = arguments[O] != null ? Object(arguments[O]) : {},
						A = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(k).filter(function(P) {
						return Object.getOwnPropertyDescriptor(k, P).enumerable
					})), A.forEach(function(P) {
						u(f, P, k[P])
					})
				}
				return f
			}

			function u(f, O, k) {
				return O = E(O), O in f ? Object.defineProperty(f, O, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[O] = k, f
			}

			function E(f) {
				var O = n(f, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function n(f, O) {
				if (typeof f != "object" || f === null) return f;
				var k = f[Symbol.toPrimitive];
				if (k !== void 0) {
					var A = k.call(f, O || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(f)
			}
			const r = {
					[i.T.ENABLED]: !1,
					[i.T.CONTACT]: [""],
					[i.T.EXPIRES]: ""
				},
				a = {
					[i.T.CONTACT]: {
						label: "security_txt.fields.contact",
						tooltip: "security_txt.fields.contact.description",
						placeholder: "security_txt.fields.contact.placeholder"
					},
					[i.T.EXPIRES]: {
						label: "security_txt.fields.expires",
						tooltip: "security_txt.fields.expires.description",
						placeholder: "security_txt.fields.expires.placeholder"
					},
					[i.T.ENCRYPTION]: {
						label: "security_txt.fields.encryption",
						tooltip: "security_txt.fields.encryption.description",
						placeholder: "security_txt.fields.encryption.placeholder"
					},
					[i.T.ACKNOWLEDGMENTS]: {
						label: "security_txt.fields.acknowledgements",
						tooltip: "security_txt.fields.acknowledgements.description",
						placeholder: "security_txt.fields.acknowledgements.placeholder"
					},
					[i.T.CANONICAL]: {
						label: "security_txt.fields.canonical",
						tooltip: "security_txt.fields.canonical.description",
						placeholder: "security_txt.fields.canonical.placeholder"
					},
					[i.T.POLICY]: {
						label: "security_txt.fields.policy",
						tooltip: "security_txt.fields.policy.description",
						placeholder: "security_txt.fields.policy.placeholder"
					},
					[i.T.HIRING]: {
						label: "security_txt.fields.hiring",
						tooltip: "security_txt.fields.hiring.description",
						placeholder: "security_txt.fields.hiring.placeholder"
					},
					[i.T.PREFERRED_LANGUAGES]: {
						label: "security_txt.fields.preferred_languages",
						tooltip: "security_txt.fields.preferred_languages.description",
						placeholder: "security_txt.fields.preferred_languages.placeholder"
					}
				},
				g = f => e.Ry({
					[i.T.CONTACT]: e.IX().of(e.Z_().required(f("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, f("security_txt.fields.contact.format_error"))),
					[i.T.EXPIRES]: e.hT().required(f("common.required")).min(new Date, f("security_txt.fields.expires.min_error"))
				}),
				m = f => {
					const O = {};
					for (const k in f) O[k] = Array.isArray(f[k]) ? f[k].filter(A => !!A) : f[k];
					return c({}, O, {
						expires: (0, v.DZ)(f.expires)
					})
				},
				d = (f, O, k) => {
					const A = [...new Set([i.T.CONTACT, i.T.EXPIRES, ...Object.values(i.T)])],
						P = Object.entries(f).sort(([D], [b]) => A.indexOf(D) - A.indexOf(b)).filter(([D, b]) => !!a[D] && !!b && (!Array.isArray(b) || !!b.length)).map(([D, b]) => Array.isArray(b) ? b.map(I => `${k(a[D].label)}: ${I}`).join(`
`) : `${k(a[D].label)}: ${b}`).join(`
`);
					(0, o.yH)(`Cloudflare_${O}_security.txt`, P, "text/plain;charset=utf-8")
				};
			let h = function(f) {
				return f.CREATED = "created security.txt", f.ENABLED = "enabled security.txt", f.DISABLED = "disabled security.txt", f.DOWNLOADED = "downloaded security.txt", f.UPDATED = "updated security.txt", f.DELETED = "deleted security.txt", f
			}({});
			const w = f => (f == null ? void 0 : f.source) === p.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (f == null ? void 0 : f.source) === p.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				_ = f => f === p.W3 ? void 0 : f,
				l = f => p.aW.test(f),
				C = f => {
					switch (f) {
						case p.w.CONTENT_SCANNING:
							return s.ROUTES.CONTENT_SCANNING;
						case p.w.EXPOSED_CREDENTIALS:
							return s.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(B, y, t) {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Sb: function() {
					return E
				},
				Vj: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(a).filter(function(m) {
						return Object.getOwnPropertyDescriptor(a, m).enumerable
					})), g.forEach(function(m) {
						p(n, m, a[m])
					})
				}
				return n
			}

			function p(n, r, a) {
				return r = i(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function i(n) {
				var r = v(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var g = a.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			const c = {
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
					product: a = "waf",
					productName: g = "Managed Rules",
					additionalData: m
				}) => {
					o().sendEvent(n, s({
						category: r,
						product: a,
						productName: g
					}, m || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(B, y, t) {
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
		"../react/pages/spectrum/tracking.tsx": function(B, y, t) {
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
		"../react/pages/stream/actionTypes.ts": function(B, y, t) {
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
		"../react/pages/stream/reducer.ts": function(B, y, t) {
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
				s = t("../react/pages/stream/util/pager.ts");

			function p(r) {
				for (var a = 1; a < arguments.length; a++) {
					var g = arguments[a] != null ? Object(arguments[a]) : {},
						m = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(g).filter(function(d) {
						return Object.getOwnPropertyDescriptor(g, d).enumerable
					})), m.forEach(function(d) {
						i(r, d, g[d])
					})
				}
				return r
			}

			function i(r, a, g) {
				return a = v(a), a in r ? Object.defineProperty(r, a, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = g, r
			}

			function v(r) {
				var a = c(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function c(r, a) {
				if (typeof r != "object" || r === null) return r;
				var g = r[Symbol.toPrimitive];
				if (g !== void 0) {
					var m = g.call(r, a || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const u = "stream",
				E = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(r = E, a) {
				switch (a.type) {
					case o.U.ResetState:
						return E;
					case o.U.SetStorageLoading:
						const {
							storageLoading: g
						} = a;
						return p({}, r, {
							storageLoading: g
						});
					case o.U.SetStorage:
						return p({}, r, {
							storage: a.payload ? p({}, r.storage, a.payload) : void 0
						});
					case o.U.ReplaceVideos:
						return p({}, r, {
							videos: a.videos
						});
					case o.U.PrependVideo:
						return p({}, r, {
							videos: [a.video, ...r.videos].filter((m, d) => d < s.FJ)
						});
					case o.U.UpdateVideo:
						return p({}, r, {
							videos: r.videos.map(m => m.uid === a.video.uid ? a.video : m)
						});
					case o.U.UpdateVideoPending:
						return p({}, r, {
							videoUpdateStatuses: p({}, r.videoUpdateStatuses, {
								[a.uid]: a.status
							})
						});
					case o.U.RemoveVideos:
						return p({}, r, {
							videos: r.videos.filter(m => !a.ids.includes(m.uid))
						});
					case o.U.SetLoading:
						return p({}, r, {
							loading: a.loading
						});
					case o.U.SetRequestTimestamp:
						return p({}, r, {
							requestTimestamp: a.requestTimestamp
						});
					case o.U.UploadViaUrl:
						return r;
					default:
						return (0, e.h)(a, r)
				}
			}
		},
		"../react/pages/stream/routes.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				C: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/stream`,
				s = (0, e.BC)`${o}/inputs`,
				p = (0, e.BC)`${o}/videos`,
				i = (0, e.BC)`${o}/analytics`,
				v = (0, e.BC)`${p}/${"videoId"}`,
				c = (0, e.BC)`${o}/video-transformations`,
				u = {
					root: o,
					inputs: s,
					configureInputs: (0, e.BC)`${s}/custom-hostnames`,
					videos: p,
					analytics: i,
					videoPage: v,
					videoTransformationsConfigList: c,
					videoTransformationsZoneConfig: (0, e.BC)`${c}/${"zoneId"}/settings`,
					inputPage: (0, e.BC)`${s}/${"inputId"}`,
					inputSettings: (0, e.BC)`${s}/${"inputId"}/settings`,
					inputMetrics: (0, e.BC)`${s}/${"inputId"}/metrics`,
					inputLogs: (0, e.BC)`${s}/${"inputId"}/logs`,
					inputRecordings: (0, e.BC)`${s}/${"inputId"}/recordings`,
					inputEmbed: (0, e.BC)`${s}/${"inputId"}/embed`,
					inputConnectionInfo: (0, e.BC)`${s}/${"inputId"}/connection-info`,
					inputOutputs: (0, e.BC)`${s}/${"inputId"}/outputs`,
					createOutput: (0, e.BC)`${s}/${"inputId"}/createOutput`,
					createInput: (0, e.BC)`${s}/create`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/stream`,
					signUp: (0, e.BC)`/sign-up/stream`,
					checkoutSuccess: (0, e.BC)`${o}/bundle-checkout-success`,
					plans: (0, e.BC)`${o}/plans`,
					managePlan: (0, e.BC)`${o}/manage-plan`
				}
		},
		"../react/pages/stream/selectors.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Id: function() {
					return p
				},
				OU: function() {
					return n
				},
				Pf: function() {
					return i
				},
				QL: function() {
					return u
				},
				_A: function() {
					return d
				},
				_Q: function() {
					return r
				},
				aM: function() {
					return m
				},
				bM: function() {
					return c
				},
				bO: function() {
					return a
				},
				bm: function() {
					return g
				},
				mX: function() {
					return h
				},
				pW: function() {
					return v
				},
				xW: function() {
					return E
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/pages/stream/reducer.ts");
			const p = w => w[s.nY],
				i = w => p(w).videos,
				v = w => p(w).videoUpdateStatuses,
				c = w => p(w).loading,
				u = w => p(w).requestTimestamp,
				E = w => p(w).storageLoading,
				n = w => p(w).storage,
				r = w => (0, o.BF)(w, "stream.enabled") || (0, e.bC)(w),
				a = w => (0, e.Le)(w, "stream", "connect"),
				g = w => (0, e.Le)(w, "stream", "stream-4371"),
				m = w => (0, e.Le)(w, "stream", "public-details-enabled"),
				d = w => !!(0, e.Le)(w, "stream", "llhls"),
				h = w => {
					const _ = n(w);
					return _ !== void 0 && _.limitMins > _.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				FJ: function() {
					return e
				},
				d6: function() {
					return s
				},
				wL: function() {
					return o
				}
			});
			const e = 30;

			function o(p, i, v) {
				const c = {
					search: v,
					limit: e.toString()
				};
				return i !== void 0 && (c.end = i), c
			}

			function s(p, i, v) {
				return {
					limit: e.toString(),
					search: v,
					asc: "true",
					start_comp: "gt",
					start: i
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(B, y, t) {
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
		"../react/pages/traffic/load-balancing/account/resources/tracking.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				QK: function() {
					return u
				},
				WM: function() {
					return m
				},
				Zk: function() {
					return E
				},
				aB: function() {
					return n
				},
				eT: function() {
					return g
				},
				i3: function() {
					return c
				},
				mm: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(d) {
				for (var h = 1; h < arguments.length; h++) {
					var w = arguments[h] != null ? Object(arguments[h]) : {},
						_ = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(w).filter(function(l) {
						return Object.getOwnPropertyDescriptor(w, l).enumerable
					})), _.forEach(function(l) {
						p(d, l, w[l])
					})
				}
				return d
			}

			function p(d, h, w) {
				return h = i(h), h in d ? Object.defineProperty(d, h, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[h] = w, d
			}

			function i(d) {
				var h = v(d, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function v(d, h) {
				if (typeof d != "object" || d === null) return d;
				var w = d[Symbol.toPrimitive];
				if (w !== void 0) {
					var _ = w.call(d, h || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(d)
			}
			let c = function(d) {
					return d.TRY_NEW_DASHBOARD_CTA = "click try new dashboard", d
				}({}),
				u = function(d) {
					return d.CREATE_BUTTON_CLICK = "click create load balancer", d.TOGGLE_STATUS = "load balancer toggle status", d.REVIEW_PAGE_CLICK = "click load balancer table review link", d.EDIT_CLICK = "click load balancer table edit button", d.DELETE_CLICK = "click load balancer table delete button", d
				}({}),
				E = function(d) {
					return d.EDIT_HOSTNAME_CLICK = "click edit load balancer hostname", d.EDIT_IP_CLICK = "click edit load balancer IP", d.EDIT_POOLS_CLICK = "click edit load balancer pools", d.EDIT_MONITORS_CLICK = "click edit load balancer monitors", d.EDIT_CUSTOM_RULES_CLICK = "click edit load balancer custom rules", d.EDIT_TRAFFIC_STEERING_CLICK = "click edit load balancer traffic steering", d
				}({}),
				n = function(d) {
					return d.GO_TO_STEP = "click load balancer step", d.BACK_TO_STEP = "click load balancer back to step", d.SAVE = "save load balancer", d.SAVE_AS_DRAFT = "save load balancer as draft", d.SAVE_AND_DEPLOY = "save and deploy load balancer", d.NAVIGATION_CHANGE = "click load balancer wizard navigation link", d.CLICK_PRIVATE_LB_DOCUMENTATION = "click link to private load balancing documentation", d
				}({}),
				r = function(d) {
					return d.OPEN_SUBSCRIPTION_MODAL = "open load balancing subscription modal", d
				}({});
			const g = Object.values({
					MIGRATION: c,
					LOAD_BALANCERS_TABLE: u,
					REVIEW: E,
					WIZARD: n,
					USAGE: r
				}).flatMap(Object.values),
				m = (d, h) => o().sendEvent(d, s({
					category: "user journey",
					product: "load balancing"
				}, h))
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(B, y, t) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return s
				},
				X: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let s = function(i) {
				return i.CREATE = "create waiting room", i.UPDATE = "update waiting room", i.EVENTS = "view waiting rooms events", i.ANALYTICS = "view waiting room analytics", i.GENERATE_PREVIEW = "generate waiting room preview link", i
			}({});
			const p = async i => {
				await o().sendEvent(i, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(B, y, t) {
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

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var g = arguments[a] != null ? Object(arguments[a]) : {},
						m = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(g).filter(function(d) {
						return Object.getOwnPropertyDescriptor(g, d).enumerable
					})), m.forEach(function(d) {
						p(r, d, g[d])
					})
				}
				return r
			}

			function p(r, a, g) {
				return a = i(a), a in r ? Object.defineProperty(r, a, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = g, r
			}

			function i(r) {
				var a = v(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function v(r, a) {
				if (typeof r != "object" || r === null) return r;
				var g = r[Symbol.toPrimitive];
				if (g !== void 0) {
					var m = g.call(r, a || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const c = "TURNSTILE";
			let u = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const E = ({
					name: r,
					product: a = c,
					category: g = "user journey",
					page: m,
					additionalData: d = {}
				}) => {
					o().sendEvent(r, s({
						category: g,
						page: m,
						product: a
					}, d || {}))
				},
				n = () => {
					var r;
					return (r = Object.values(u)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return u
				},
				Ky: function() {
					return E
				},
				RJ: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						g = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(a).filter(function(m) {
						return Object.getOwnPropertyDescriptor(a, m).enumerable
					})), g.forEach(function(m) {
						p(n, m, a[m])
					})
				}
				return n
			}

			function p(n, r, a) {
				return r = i(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function i(n) {
				var r = v(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function v(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var g = a.call(n, r || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.GROUP_TABLE_ROW_CLICK = "user group table row click", n.GROUP_TABLE_ROW_MEMBERS_CLICK = "user group table row members click", n.GROUP_TABLE_ROW_POLICIES_CLICK = "user group table row policies click", n.GROUP_TABLE_ROW_SETTINGS_CLICK = "user group table row settings click", n.BACK_BUTTON = "clicked back from user group detail", n.MEMBER_ADD = "add user group member", n.MEMBER_DELETE = "delete user group member", n.POLICY_SAVE = "user group policies save", n.POLICY_DELETE = "user group policies delete", n
			}({});
			const u = ({
					name: n,
					additionalData: r = {}
				}) => {
					o().sendEvent(n, s({}, r || {}))
				},
				E = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(B, y, t) {
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
		"../react/pages/zone-versioning/selectors.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				$e: function() {
					return k
				},
				$h: function() {
					return l
				},
				G: function() {
					return O
				},
				M3: function() {
					return P
				},
				Tr: function() {
					return w
				},
				UY: function() {
					return d
				},
				bH: function() {
					return r
				},
				fv: function() {
					return D
				},
				hF: function() {
					return C
				},
				iw: function() {
					return g
				},
				m7: function() {
					return n
				},
				re: function() {
					return f
				},
				tp: function() {
					return m
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				o = t("../../../../node_modules/reselect/lib/index.js"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				p = t("../react/app/components/SidebarNav/permissions.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts");

			function v(b) {
				for (var I = 1; I < arguments.length; I++) {
					var S = arguments[I] != null ? Object(arguments[I]) : {},
						x = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(S).filter(function($) {
						return Object.getOwnPropertyDescriptor(S, $).enumerable
					})), x.forEach(function($) {
						c(b, $, S[$])
					})
				}
				return b
			}

			function c(b, I, S) {
				return I = u(I), I in b ? Object.defineProperty(b, I, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[I] = S, b
			}

			function u(b) {
				var I = E(b, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function E(b, I) {
				if (typeof b != "object" || b === null) return b;
				var S = b[Symbol.toPrimitive];
				if (S !== void 0) {
					var x = S.call(b, I || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(b)
			}
			const n = b => (0, s.nA)(b) ? (0, i.p1)(b) && (0, p.$n)(b, "zone_versioning", "versioning") : !1,
				r = b => b.zoneVersioning.zoneApplications,
				a = (0, e.P1)("zoneApplications", r),
				g = b => b.zoneVersioning.zoneVersions,
				m = (0, e.P1)("zoneVersions", g),
				d = (0, o.P1)(m, b => {
					if (b) return b.filter(I => I.status == "V")
				}),
				h = b => b.zoneVersioning.environments,
				w = b => b.zoneVersioning.environments.isRequesting,
				_ = (0, e.P1)("environments", h),
				l = (0, o.P1)(a, b => {
					if (b) {
						if (b.length === 1) return b[0];
						b.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${b.length}`))
					}
					return null
				}),
				C = (0, o.P1)(_, b => b ? b.environments : []),
				f = b => {
					var I;
					return (I = b.zoneVersioning) === null || I === void 0 ? void 0 : I.zoneVersionSelector
				},
				O = (0, o.P1)(f, m, (b, I) => {
					if (!(b == null ? void 0 : b.isVersion) || !I) return null;
					const S = I.find(x => {
						if (x.version === b.selectedVersion && x.locked) return !0
					});
					return S ? v({}, S, {
						isLocked: !0
					}) : null
				}),
				k = (0, o.P1)(m, C, (b, I) => !I || !b ? [] : b.map(S => {
					const x = [];
					for (const $ in I) I[$].version === S.version && x.push(I[$]);
					return v({}, S, {
						environments: x
					})
				})),
				A = b => b.zoneVersioning.WAFMigrationStatus,
				P = (0, e.P1)("WAFMigrationStatus", A),
				D = b => b.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				$2: function() {
					return A
				},
				CI: function() {
					return O
				},
				IS: function() {
					return c
				},
				L7: function() {
					return i
				},
				Lt: function() {
					return m
				},
				Oj: function() {
					return a
				},
				QV: function() {
					return d
				},
				S6: function() {
					return P
				},
				X$: function() {
					return C
				},
				X6: function() {
					return E
				},
				d4: function() {
					return g
				},
				fE: function() {
					return u
				},
				im: function() {
					return _
				},
				lv: function() {
					return h
				},
				rL: function() {
					return n
				},
				wW: function() {
					return v
				}
			});

			function e(D) {
				for (var b = 1; b < arguments.length; b++) {
					var I = arguments[b] != null ? Object(arguments[b]) : {},
						S = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(I).filter(function(x) {
						return Object.getOwnPropertyDescriptor(I, x).enumerable
					})), S.forEach(function(x) {
						o(D, x, I[x])
					})
				}
				return D
			}

			function o(D, b, I) {
				return b = s(b), b in D ? Object.defineProperty(D, b, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[b] = I, D
			}

			function s(D) {
				var b = p(D, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function p(D, b) {
				if (typeof D != "object" || D === null) return D;
				var I = D[Symbol.toPrimitive];
				if (I !== void 0) {
					var S = I.call(D, b || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(D)
			}
			const i = {
					vsCodeEditor: {
						production: "https://code.captain.cfdata.org",
						staging: "https://code.captain-staging.cfdata.org"
					},
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
						gradualDeployments: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/gradual-deployments",
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
				c = "40rem",
				u = {
					pricing: {
						requests: .15,
						duration: 12.5,
						bytes_stored: .2,
						rows_read: .001,
						rows_written: 1
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
				g = {
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
				m = {
					free: {
						minutes: 3e3
					},
					paid: {
						minutes: 6e3
					}
				},
				d = {
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
					renameKVNamespace: "rename kv namespace",
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
					createResource: "create resource",
					deleteResource: "delete resource",
					updateResource: "update resource",
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
					clickedClonePublicRepositoryFromUrl: "clicked clone public repository from url",
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
				h = {
					insufficientData: "insufficient data to create/update trigger",
					createRepoConnectionError: "error creating repo connection",
					createTokenError: "error creating token",
					createUpdateTriggerError: "error creating/updating trigger",
					updateEnvironmentVariablesError: "error updating trigger environment variables",
					createWorkerError: "error creating worker",
					buildWorkerError: "error building worker",
					refreshWebhookError: "error refreshing gitlab webhook"
				},
				w = "workers.dev",
				_ = "YYYY-MM-DD HH:mm:SS ZZ",
				l = "active",
				C = ["bundled", "unbound", "standard"],
				f = null,
				O = {
					observability: "workers-observability",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let k = function(D) {
				return D[D.NONE = 0] = "NONE", D[D.MISS = 1] = "MISS", D[D.EXPIRED = 2] = "EXPIRED", D[D.UPDATING = 3] = "UPDATING", D[D.STALE = 4] = "STALE", D[D.HIT = 5] = "HIT", D[D.IGNORED = 6] = "IGNORED", D[D.BYPASS = 7] = "BYPASS", D[D.REVALIDATED = 8] = "REVALIDATED", D[D.DYNAMIC = 9] = "DYNAMIC", D[D.STREAM_HIT = 10] = "STREAM_HIT", D[D.DEFERRED = 11] = "DEFERRED", D
			}({});
			const A = [k.HIT, k.STREAM_HIT];
			let P = function(D) {
				return D.SECRETS_STORE_ID = "store_id", D.SECRET_NAME = "secret_name", D
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return c
				},
				L: function() {
					return s
				},
				Q9: function() {
					return p
				},
				_j: function() {
					return i
				},
				ky: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = u => `${u}.workers.dev`,
				s = (u, E, n) => `${n?`${n}.`:""}${u}.${o(E)}`,
				p = (u, E, n) => `https://${s(u,E,n)}`,
				i = {
					workersOverview: (0, e.BC)`/${"accountId"}/workers/overview`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/workers`,
					root: (0, e.BC)`/${"accountId"}/workers`,
					onboarding: (0, e.BC)`/${"accountId"}/workers-and-pages/create`,
					observability: (0, e.BC)`/${"accountId"}/workers-and-pages/observability`,
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
					editServiceScriptContainerBacked: (0, e.BC)`/${"accountId"}/workers/services/edit/${"serviceId"}/${"environmentName"}/vs-code`,
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
					serviceDetailsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/triggers`,
					serviceDetailsTriggersV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#domains`,
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
				v = "https://cron-triggers.cloudflareworkers.com",
				c = {
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
						parameters: {
							post: (0, e.BC)`/accounts/${"accountId"}/workers/observability/parameters`,
							rate: (0, e.BC)`/accounts/${"accountId"}/workers/observability/parameters/${"generationId"}/rate`
						},
						queries: {
							list: (0, e.BC)`/accounts/${"accountId"}/workers/observability/queries`,
							create: (0, e.BC)`/accounts/${"accountId"}/workers/observability/queries`,
							query: (0, e.BC)`/accounts/${"accountId"}/workers/observability/queries/${"queryId"}`
						},
						usage: (0, e.BC)`/accounts/${"accountId"}/workers/observability/usage`,
						usageStatuses: (0, e.BC)`/accounts/${"accountId"}/workers/observability/usage-statuses`,
						liveTail: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/live-tail`,
						issues: {
							list: (0, e.BC)`/accounts/${"accountId"}/workers/observability/issues`,
							get: (0, e.BC)`/accounts/${"accountId"}/workers/observability/issues/${"issueId"}`,
							patch: (0, e.BC)`/accounts/${"accountId"}/workers/observability/issues/${"issueId"}`
						}
					},
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerSecrets: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/secrets`,
					workerSecret: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/secrets/${"secretName"}`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					workflows: (0, e.BC)`/accounts/${"accountId"}/workflows`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				MN: function() {
					return s
				},
				Yg: function() {
					return i
				},
				i$: function() {
					return p
				},
				l3: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const s = async ([c, u]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: c,
					variables: u
				})
			})).body, p = async (...c) => (await e.get(...c)).body, i = c => async (u, E) => {
				const n = await fetch(u, E).then(r => r.json());
				return c.assertDecode(n)
			}, v = async (...c) => (await p(...c)).result;
			y.ZP = {
				fetcher: c => Array.isArray(c) ? v(...c) : v(c)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(B, y) {
				y()
			})(this, function() {
				"use strict";

				function B() {
					var t = !0,
						e = !1,
						o = null,
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

					function p(h) {
						return !!(h && h !== document && h.nodeName !== "HTML" && h.nodeName !== "BODY" && "classList" in h && "contains" in h.classList)
					}

					function i(h) {
						var w = h.type,
							_ = h.tagName;
						return !!(_ == "INPUT" && s[w] && !h.readOnly || _ == "TEXTAREA" && !h.readOnly || h.isContentEditable)
					}

					function v(h) {
						h.getAttribute("is-focus-visible") !== "" && h.setAttribute("is-focus-visible", "")
					}

					function c(h) {
						h.getAttribute("is-focus-visible") === "" && h.removeAttribute("is-focus-visible")
					}

					function u(h) {
						p(document.activeElement) && v(document.activeElement), t = !0
					}

					function E(h) {
						t = !1
					}

					function n(h) {
						!p(h.target) || (t || i(h.target)) && v(h.target)
					}

					function r(h) {
						!p(h.target) || h.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), c(h.target))
					}

					function a(h) {
						document.visibilityState == "hidden" && (e && (t = !0), g())
					}

					function g() {
						document.addEventListener("mousemove", d), document.addEventListener("mousedown", d), document.addEventListener("mouseup", d), document.addEventListener("pointermove", d), document.addEventListener("pointerdown", d), document.addEventListener("pointerup", d), document.addEventListener("touchmove", d), document.addEventListener("touchstart", d), document.addEventListener("touchend", d)
					}

					function m() {
						document.removeEventListener("mousemove", d), document.removeEventListener("mousedown", d), document.removeEventListener("mouseup", d), document.removeEventListener("pointermove", d), document.removeEventListener("pointerdown", d), document.removeEventListener("pointerup", d), document.removeEventListener("touchmove", d), document.removeEventListener("touchstart", d), document.removeEventListener("touchend", d)
					}

					function d(h) {
						h.target.nodeName.toLowerCase() !== "html" && (t = !1, m())
					}
					document.addEventListener("keydown", u, !0), document.addEventListener("mousedown", E, !0), document.addEventListener("pointerdown", E, !0), document.addEventListener("touchstart", E, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", a, !0), g(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function y(t) {
					var e;

					function o() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && y(B)
			})
		},
		"../react/utils/bootstrap.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				$8: function() {
					return o
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
					var i, v, c;
					return (i = window) === null || i === void 0 || (v = i.bootstrap) === null || v === void 0 || (c = v.data) === null || c === void 0 ? void 0 : c.security_token
				},
				o = () => {
					var i, v, c;
					return !!((i = t.g.bootstrap) === null || i === void 0 || (v = i.data) === null || v === void 0 || (c = v.user) === null || c === void 0 ? void 0 : c.id)
				},
				s = () => {
					var i, v;
					return !!((i = t.g.bootstrap) === null || i === void 0 || (v = i.data) === null || v === void 0 ? void 0 : v.is_kendo)
				},
				p = () => {
					var i, v, c, u;
					return (i = window) === null || i === void 0 || (v = i.bootstrap) === null || v === void 0 || (c = v.data) === null || c === void 0 || (u = c.user) === null || u === void 0 ? void 0 : u.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				O5: function() {
					return p
				},
				Xm: function() {
					return s
				},
				kT: function() {
					return c
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
				s = () => (o() || "").indexOf("C0002") !== -1,
				p = () => (o() || "").indexOf("C0003") !== -1,
				i = () => (o() || "").indexOf("C0004") !== -1,
				v = () => (o() || "").indexOf("C0005") !== -1,
				c = n => {
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
		"../react/utils/i18n.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				AI: function() {
					return C
				},
				Kd: function() {
					return r
				},
				S8: function() {
					return l
				},
				ZW: function() {
					return u
				},
				ay: function() {
					return f
				},
				fh: function() {
					return O
				},
				i_: function() {
					return a
				},
				ly: function() {
					return n
				},
				th: function() {
					return c
				},
				ti: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				s = t("../../../common/intl/intl-types/src/index.ts"),
				p = t("../../../common/util/types/src/utils/index.ts"),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				v = t("../../../../node_modules/cookie/index.js");
			const c = "cf-sync-locale-with-cps",
				u = s.Q.en_US,
				E = "en_US",
				n = "cf-locale";

			function r() {
				const P = (0, v.parse)(document.cookie);
				return i.Z.get(n) || P[n] || null
			}

			function a(P) {
				document.cookie = (0, v.serialize)(n, P, {
					path: "/",
					maxAge: 31536e3,
					secure: !0
				}), i.Z.set(n, P)
			}

			function g() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0,
					secure: !0
				}), cache.remove(n)
			}
			const m = P => (0, p.Yd)(s.Q).find(D => s.Q[D] === P) || E,
				d = [],
				h = [],
				w = [s.Q.de_DE, s.Q.en_US, s.Q.es_ES, s.Q.fr_FR, s.Q.it_IT, s.Q.pt_BR, s.Q.ko_KR, s.Q.ja_JP, s.Q.zh_CN, s.Q.zh_TW],
				_ = {
					test: [...w, ...h, ...d],
					development: [...w, ...h, ...d],
					staging: [...w, ...h, ...d],
					production: [...w, ...h]
				},
				l = P => {
					const D = s.Q[P];
					return _.production.includes(D)
				},
				C = () => Object.keys(s.Q).filter(P => l(P)),
				f = P => {
					const D = s.Q[P];
					return h.includes(D)
				},
				O = P => k[P],
				k = {
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
				A = o().locale();
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
			}), o().locale(A)
		},
		"../react/utils/translator.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				QT: function() {
					return m
				},
				Vb: function() {
					return u
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return c
				},
				_m: function() {
					return r
				},
				cC: function() {
					return a
				},
				oc: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = t("../../../common/intl/intl-core/src/Translator.ts"),
				s = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				p = t.n(s),
				i = t("../flags.ts");
			const v = new o.Z({
				pseudoLoc: (0, i.J8)("is_pseudo_loc")
			});

			function c(d, ...h) {
				return v.t(d, ...h)
			}
			const u = v;

			function E(d, ...h) {
				return markdown(c(d, h))
			}

			function n(d) {
				if (Number(d) !== 0) {
					if (d % 86400 == 0) return c("time.num_days", {
						smart_count: d / 86400
					});
					if (d % 3600 == 0) return c("time.num_hours", {
						smart_count: d / 3600
					});
					if (d % 60 == 0) return c("time.num_minutes", {
						smart_count: d / 60
					})
				}
				return c("time.num_seconds", {
					smart_count: d
				})
			}

			function r(d, h) {
				return d in h ? h[d] : void 0
			}
			const a = s.Trans,
				g = s.I18n,
				m = s.useI18n
		},
		"../react/utils/url.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Ae: function() {
					return P
				},
				Ct: function() {
					return b
				},
				Fl: function() {
					return K
				},
				KT: function() {
					return ie
				},
				NF: function() {
					return C
				},
				Nw: function() {
					return A
				},
				Pd: function() {
					return O
				},
				Uh: function() {
					return F
				},
				cm: function() {
					return w
				},
				e1: function() {
					return D
				},
				el: function() {
					return W
				},
				hW: function() {
					return R
				},
				pu: function() {
					return Q
				},
				qF: function() {
					return k
				},
				qR: function() {
					return re
				},
				td: function() {
					return f
				},
				uW: function() {
					return U
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				o = t("../react/pages/abuse/constants.ts"),
				s = t("../react/pages/d1/routes.ts"),
				p = t("../react/pages/images/routes.ts"),
				i = t("../react/pages/pages/routes.ts"),
				v = t("../react/pages/r2/routes.ts"),
				c = t("../react/pages/stream/routes.ts"),
				u = t("../react/pages/zoneless-workers/routes.ts"),
				E = t("../../../../node_modules/query-string/query-string.js"),
				n = t.n(E);

			function r(V) {
				for (var ae = 1; ae < arguments.length; ae++) {
					var ge = arguments[ae] != null ? Object(arguments[ae]) : {},
						Ce = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && Ce.push.apply(Ce, Object.getOwnPropertySymbols(ge).filter(function(se) {
						return Object.getOwnPropertyDescriptor(ge, se).enumerable
					})), Ce.forEach(function(se) {
						a(V, se, ge[se])
					})
				}
				return V
			}

			function a(V, ae, ge) {
				return ae = g(ae), ae in V ? Object.defineProperty(V, ae, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[ae] = ge, V
			}

			function g(V) {
				var ae = m(V, "string");
				return typeof ae == "symbol" ? ae : String(ae)
			}

			function m(V, ae) {
				if (typeof V != "object" || V === null) return V;
				var ge = V[Symbol.toPrimitive];
				if (ge !== void 0) {
					var Ce = ge.call(V, ae || "default");
					if (typeof Ce != "object") return Ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ae === "string" ? String : Number)(V)
			}
			const {
				endsWithSlash: d
			} = e.default, h = new RegExp(/([0-9a-z]{32})/g), w = V => V == null ? void 0 : V.replace(h, ":id"), _ = (V, ae) => {
				const ge = V.replace(d, "").split("/");
				return ge.slice(0, 2).concat([ae]).concat(ge.slice(3)).join("/")
			}, l = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), C = V => `/${V.replace(d,"").replace(/^\//,"")}`, f = V => A("add-site", V), O = V => A("billing", V), k = V => A("registrar/register", V), A = (V, ae) => ae ? `/${ae}${V?`/${V}`:""}` : `/?to=/:account/${V}`, P = () => {
				const V = location ? location.pathname.match(/[0-9a-f]{32}/) || location.pathname.match(/[0-9a-f]{32}/) : null;
				return V ? V[0] : null
			}, D = () => {
				const V = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return V ? V[1] : null
			}, b = (V, ae) => n().stringify(r({}, n().parse(V), ae)), I = (V = "") => V.toString().replace(/([\/]{1,})$/, ""), S = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], x = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, $ = /^\/(\w{32,})(\/[^.]*)?/, ne = V => S.includes(V), ee = V => !ne(V), re = V => !ne(V) && $.test(V), W = V => !ne(V) && x.test(V), N = V => x.exec(V), R = V => {
				if (W(V)) return V.split("/").filter(ae => ae.length > 0)[1]
			}, G = V => $.exec(V), U = V => {
				if (re(V)) {
					const ae = G(V);
					if (ae) return ae[1]
				}
			}, z = V => re(V) && V.split("/")[2] === "register-domain", H = V => z(V) ? V.split("/") : null, Z = V => {
				if (W(V)) {
					const [, , , ae, ge, Ce, se, be] = V.split("/");
					return ae === "traffic" && ge === "load-balancing" && Ce === "pools" && se === "edit" && be
				}
			}, F = V => {
				const ae = H(V);
				if (ae) return ae[3]
			}, q = (V, ae) => {
				var ge, Ce;
				return ((ge = V.pattern.match(/\:/g)) !== null && ge !== void 0 ? ge : []).length - ((Ce = ae.pattern.match(/\:/g)) !== null && Ce !== void 0 ? Ce : []).length
			}, L = [...Object.values(c.C), ...Object.values(p.KJ), ...Object.values(v._j), ...Object.values(u._j), ...Object.values(i._j), ...Object.values(s._)].sort(q);

			function K(V) {
				if (!ee(V)) return V;
				for (const be of L)
					if (be.expression.test(V)) return be.pattern;
				if (o.eM.abuseReportTab.expression.test(V)) {
					const be = V.split("/"),
						Ae = be[be.length - 1];
					return o.eM.abuseReportTab.pattern.replace(":tab", Ae)
				}
				if (o.eM.abuseReport.expression.test(V)) return o.eM.abuseReport.pattern;
				const ae = H(V);
				if (ae) {
					const [, , be, , ...Ae] = ae;
					return `/:accountId/${be}/:domainName/${Ae.join("/")}`
				}
				if (Z(V)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const Ce = N(V);
				if (Ce) {
					const [, , , , be] = Ce;
					return `/:accountId/:zoneName${be||""}`
				}
				const se = G(V);
				if (se) {
					const [, , be] = se;
					return `/:accountId${be||""}`
				}
				return V
			}

			function Q(V) {
				if (!!V) try {
					const ge = V.split(".").pop();
					if (ge && ge.length > 0) return ge
				} catch {}
			}

			function ie(V, ae = document.location.href) {
				try {
					const ge = new URL(V),
						Ce = new URL(ae);
					if (ge.origin === Ce.origin) return `${ge.pathname}${ge.search}${ge.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return c
				},
				y: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				i = t.n(p);
			const v = /^\/domainconnect\/v2\/domaintemplates\//i,
				c = "domain-connect-redirect",
				u = () => {
					const E = (0, p.useLocation)();
					(0, e.useEffect)(() => {
						v.test(E.pathname) && s.Z.set(c, E, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(B, y, t) {
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
		"../react/utils/zoneLevelAccess.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				P: function() {
					return p
				},
				b: function() {
					return i
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				o = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function s() {
				var v, c, u, E, n, r;
				return (v = window) === null || v === void 0 || (c = v.bootstrap) === null || c === void 0 || (u = c.data) === null || u === void 0 || (E = u.user) === null || E === void 0 || (n = E.betas) === null || n === void 0 || (r = n.some) === null || r === void 0 ? void 0 : r.call(n, a => a === "zone_level_access_beta")
			}

			function p() {
				const v = !!(0, e.Z)("zone-level-access");
				return s() || v
			}

			function i(v) {
				const c = !!(0, o.z1)("zone-level-access")(v);
				return s() || c
			}
		},
		"../utils/getDashVersion.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				p: function() {
					return s
				},
				t: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var p, i;
					return (p = window) === null || p === void 0 || (i = p.build) === null || i === void 0 ? void 0 : i.dashVersion
				},
				s = () => {
					var p;
					return ((0, e.parse)((p = document) === null || p === void 0 ? void 0 : p.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Wi: function() {
					return _t
				},
				IM: function() {
					return Pt
				},
				yV: function() {
					return ot
				},
				Ug: function() {
					return ze
				},
				v_: function() {
					return pt
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				s = t("../react/utils/bootstrap.ts"),
				p = t("../react/app/providers/storeContainer.js"),
				i = t("../react/common/selectors/languagePreferenceSelector.ts"),
				v = t("../flags.ts"),
				c = t("../../../../node_modules/cookie/index.js"),
				u = t("../react/utils/url.ts"),
				E = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../../../../node_modules/lodash-es/memoize.js"),
				a = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				g = t("../utils/getDashVersion.ts"),
				m = t("../react/common/selectors/accountSelectors.ts"),
				d = t("../react/common/selectors/entitlementsSelectors.ts"),
				h = t("../react/common/utils/getEnvironment.ts");

			function w(ue) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(we) {
						return Object.getOwnPropertyDescriptor(ve, we).enumerable
					})), _e.forEach(function(we) {
						_(ue, we, ve[we])
					})
				}
				return ue
			}

			function _(ue, le, ve) {
				return le = l(le), le in ue ? Object.defineProperty(ue, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ue[le] = ve, ue
			}

			function l(ue) {
				var le = C(ue, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function C(ue, le) {
				if (typeof ue != "object" || ue === null) return ue;
				var ve = ue[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(ue, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(ue)
			}
			const f = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				O = (0, r.Z)(ue => {
					try {
						return f.assertDecode((0, c.parse)(ue))
					} catch (le) {
						return console.error(le), {}
					}
				}),
				k = ue => (le, ve, _e) => {
					try {
						const Xe = window.location.pathname,
							tt = (0, p.bh)().getState(),
							Dt = O(document.cookie),
							Ut = w({
								page: (0, u.Fl)(_e.page || window.location.pathname),
								dashVersion: (0, g.t)(),
								environment: (0, h.Z)()
							}, Dt);
						if (le === "identify") {
							var we, je;
							const bt = {
								gates: (0, a.T2)(tt) || {},
								country: (we = t.g) === null || we === void 0 || (je = we.bootstrap) === null || je === void 0 ? void 0 : je.ip_country
							};
							return ue(le, ve, w({}, Ut, bt, _e))
						} else {
							const bt = {
								accountId: (0, u.uW)(Xe),
								zoneName: (0, u.hW)(Xe),
								domainName: (0, u.Uh)(Xe)
							};
							if ((0, u.qR)(Xe)) {
								var Ge;
								const st = (0, m.D0)(tt);
								bt.isEntAccount = !!(st == null || (Ge = st.meta) === null || Ge === void 0 ? void 0 : Ge.has_enterprise_zones) || (0, d.p1)(tt)
							}
							if ((0, u.el)(Xe)) {
								var Fe;
								const st = (0, E.nA)(tt);
								bt.zoneId = st == null ? void 0 : st.id, bt.plan = st == null || (Fe = st.plan) === null || Fe === void 0 ? void 0 : Fe.legacy_id
							}
							return ue(le, ve, w({}, Ut, bt, _e))
						}
					} catch (Xe) {
						return console.error(Xe), ue(le, ve, _e)
					}
				},
				A = ue => async (le, ve, _e) => {
					try {
						return await ue(le, ve, _e)
					} catch (we) {
						if (console.error(we), !pt()) throw we;
						return {
							status: "rejected",
							reason: we
						}
					}
				};
			var P = t("../react/app/components/AccountHome/tracking.ts"),
				D = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				b = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				I = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				S = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				x = t("../react/common/middleware/sparrow/errors.ts"),
				$ = t("../react/pages/abuse/constants.ts"),
				ne = t("../react/pages/blocked-content/constants.ts"),
				ee = t("../react/pages/caching/tracking.tsx"),
				re = t("../react/pages/dns/dns-records/tracking.ts"),
				W = t("../react/pages/home/alerts/tracking.ts"),
				N = t("../react/pages/home/audit-log/tracking.ts"),
				R = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				G = t("../react/pages/home/configurations/lists/tracking.ts"),
				U = t("../react/pages/home/domain-registration/tracking.ts"),
				z = t("../react/pages/home/members/sparrowEvents.ts"),
				H = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				Z = t("../react/pages/hyperdrive/tracking.ts"),
				F = t("../react/pages/magic/network-monitoring/constants.ts"),
				q = t("../react/pages/magic/overview/tracking.ts"),
				L = t("../react/pages/magic/packet-captures/constants.ts"),
				K = t("../react/pages/page-rules/tracking.ts"),
				Q = t("../react/pages/pages/constants.ts"),
				ie = t("../react/pages/pipelines/tracking.ts"),
				V = t("../react/pages/profile/tracking.ts"),
				ae = t("../react/pages/secrets-store/resources/constants.ts"),
				ge = t("../react/pages/security-center/tracking.ts"),
				Ce = t("../react/pages/security/analytics/security-analytics/resources/constants.ts"),
				se = t("../react/pages/security/api-shield/tracking.ts"),
				be = t("../react/pages/security/bots/tracking.ts"),
				Ae = t("../react/pages/security/overview/resources/constants.ts"),
				Re = t("../react/pages/security/page-shield/resources/index.ts"),
				We = t("../react/pages/security/resources/constants.tsx"),
				Se = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				at = t("../react/common/components/filter-editor/triplet-fields/SequencesField/constants.tsx"),
				Ve = t("../react/pages/security/settings/index.tsx"),
				et = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				Ke = t("../react/pages/shared-config/sparrowEvents.tsx"),
				Y = t("../react/pages/spectrum/tracking.tsx"),
				ye = t("../react/pages/traffic/argo/tracking.ts"),
				$e = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				Be = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				nt = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				dt = t("../react/pages/turnstile/tracking.ts"),
				mt = t("../react/pages/user-groups/sparrowEvents.ts"),
				Ie = t("../react/pages/zoneless-workers/constants.ts"),
				rt = t("../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts"),
				te = t("../react/pages/analytics/eos/resources/tracking.ts"),
				ce = t("../react/pages/internal-dns/tracking.ts"),
				fe = t("../react/pages/security/ai-agent/constants.ts"),
				Ue = t("../react/common/middleware/sparrow/globalEvents/clickEvents.ts"),
				Ne = t("../react/pages/ai-zone/constants.ts");
			const He = ((ue, le, ...ve) => n.eg.union([n.eg.literal(ue), n.eg.literal(le), ...ve.map(_e => n.eg.literal(_e))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin domain registration flow", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click Hide Support AI Page", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", ...Object.values(te.f), "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "copy table cell", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Click on DNS Firewall feedback link", "Click on DNS Firewall add Cluster", "Hover on DNS Firewall feedback toast", "Click create DNS firewall cluster", "Click edit DNS firewall cluster", "Click on DNS Firewall edit Cluster button", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "global nav shortcut clicked", "global nav shortcut pinned", "global nav shortcut unpinned", "global nav survey clicked", "global nav switch", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove all filters", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "route to custom error rules", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit new support ai feedback", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click support ai issue solved feedback", "click support ai raise ticket", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", P.gX.SPARROW_PROJECTS_TABLE_CLICK, P.gX.SPARROW_EMPTY_STATE_CTA_CLICK, P.gX.SPARROW_PRODUCT_CARD_CLICK, P.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, P.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, P.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, P.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, P.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, P.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, P.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, Ne.A3.BOT_ACTION_CHANGED, Ne.A3.TERMS_DECISION, Ne.A3.STRIPE_CONNECT, Ne.A3.STRIPE_ACCOUNT_VIEWED, Ne.A3.PPC_STATUS_CHANGED, Ne.A3.PPC_PRICE_CHANGED, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ie.QV.clickedDownloadAnalytics, Ie.QV.clickedPrintAnalytics, Ie.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ie.QV.addWCITriggerToExistingWorker, Ie.QV.updateWCITrigger, Ie.QV.deleteWCITrigger, Ie.QV.addWCITriggerToNewWorker, Ie.QV.createWCIBuildForNewWorker, Ie.QV.completedWCIBuildForNewWorker, Ie.QV.changedDefaultConfigurations, Ie.QV.clickElement, Q.QV.toggledPagesSmartPlacement, Q.QV.downloadDemoProject, Ie.QV.clickCreateWorkerFromRepoNextStep, Ie.QV.clickCreateWorkerFromRepoPreviousStep, Ie.QV.clickCreateNewSCMConnection, Ie.QV.redirectFromSCMOAuth, Ie.QV.clickSubmitError, Ie.QV.selectTemplate, Ie.QV.clickedListTemplates, Ie.QV.clickedImportRepository, Ie.QV.clickedClonePublicRepositoryFromUrl, Ie.QV.templateStubWorkerCreated, Ie.QV.templateStubWorkerCreationFailed, Ie.QV.templateRepositoryCreated, Ie.QV.templateRepositoryCreationFailed, Ie.QV.copyTemplateC3Command, Ie.QV.templateDeployClick, Ie.QV.reauthenticateGithubModalShown, Ie.QV.updateGithubPermissionsClicked, Ie.QV.D2W_importRepository, Ie.QV.D2W_stubWorkerCreated, Ie.QV.D2W_stubWorkerCreationFailed, Ie.QV.D2W_repositoryCreated, Ie.QV.D2W_repositoryCreationFailed, Ie.QV.D2W_resourcesProvisioned, Ie.QV.D2W_resourceProvisioningFailed, Ie.QV.D2W_githubAPIRateLimitReached, Ie.QV.createResource, Ie.QV.deleteResource, Ie.QV.updateResource, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", be.N3.INITIAL_FETCH_SCORES, be.N3.FETCH_CONFIGURATION, be.N3.INITIAL_FETCH_TIME_SERIES, be.N3.INITIAL_FETCH_ATTRIBUTES, be.N3.UPDATE_SETTINGS, be.N3.DELETE_RULE, be.N3.UPDATE_RULE, be.N3.FETCH_RULES, be.N3.CONFIGURE_BOT_MANAGEMENT, be.N3.WAF_RULES_REDIRECT, fe.PJ, fe.tP, fe.zf, H.F.TOGGLE_TCP_PROTECTION, H.F.GET_TCP_PROTECTION_PREFIXES, H.F.CREATE_TCP_PROTECTION_PREFIXES, H.F.CREATE_TCP_PROTECTION_PREFIX, H.F.UPDATE_TCP_PROTECTION_PREFIX, H.F.DELETE_TCP_PROTECTION_PREFIX, H.F.DELETE_TCP_PROTECTION_PREFIXES, H.F.GET_TCP_PROTECTION_ALLOWLIST, H.F.CREATE_TCP_PROTECTION_ALLOWLIST, H.F.UPDATE_TCP_PROTECTION_ALLOWLIST, H.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, H.F.DELETE_TCP_PROTECTION_ALLOWLIST, H.F.GET_SYN_PROTECTION_RULES, H.F.GET_SYN_PROTECTION_RULE, H.F.CREATE_SYN_PROTECTION_RULE, H.F.UPDATE_SYN_PROTECTION_RULE, H.F.DELETE_SYN_PROTECTION_RULE, H.F.GET_TCP_FLOW_PROTECTION_RULES, H.F.GET_TCP_FLOW_PROTECTION_RULE, H.F.CREATE_TCP_FLOW_PROTECTION_RULE, H.F.UPDATE_TCP_FLOW_PROTECTION_RULE, H.F.DELETE_TCP_FLOW_PROTECTION_RULE, H.F.GET_SYN_PROTECTION_FILTERS, H.F.GET_SYN_PROTECTION_FILTER, H.F.CREATE_SYN_PROTECTION_FILTER, H.F.UPDATE_SYN_PROTECTION_FILTER, H.F.DELETE_SYN_PROTECTION_FILTER, H.F.GET_TCP_FLOW_PROTECTION_FILTERS, H.F.GET_TCP_FLOW_PROTECTION_FILTER, H.F.CREATE_TCP_FLOW_PROTECTION_FILTER, H.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, H.F.DELETE_TCP_FLOW_PROTECTION_FILTER, H.F.GET_DNS_PROTECTION_RULES, H.F.GET_DNS_PROTECTION_RULE, H.F.CREATE_DNS_PROTECTION_RULE, H.F.UPDATE_DNS_PROTECTION_RULE, H.F.DELETE_DNS_PROTECTION_RULE, Re.FV.MANAGE_PAGE_SHIELD_POLICY, Re.FV.CONFIGURE_PAGE_SHIELD, Re.FV.VIEW_DETECTED_CONNECTIONS, Re.FV.VIEW_DETECTED_SCRIPTS, Re.FV.VIEW_PAGE_SHIELD_POLICIES, Re.FV.VIEW_PAGE_SHIELD_SETTINGS, Re.FV.OPEN_MUTABLE_VERSION_TOOLTIP, Re.FV.SHOW_MUTABLE_VERSION_TOOLTIP, G.y.CREATE_LIST, G.y.DELETE_LIST, G.y.ADD_LIST_ITEM, G.y.DELETE_LIST_ITEM, Z.KO.PURCHASE_WORKERS_PAID, Z.KO.LIST_CONFIGS, Z.KO.SEARCH_CONFIGS, Z.KO.CREATE_HYPERDRIVE_CONFIG, Z.KO.VIEW_CONFIG_DETAILS, Z.KO.UPDATE_CACHING_SETTINGS, Z.KO.UPDATE_ORIGIN_CONN_LIM_SETTINGS, Z.KO.DELETE_HYPERDRIVE_CONFIG, Z.KO.CLICK_HYPERDRIVE_DOCUMENTATION, Z.KO.CLICK_GET_STARTED_GUIDE, Z.KO.CLICK_CONNECTIVITY_GUIDES, Z.KO.CLICK_QUICK_LINK, Z.KO.CLICK_DISCORD, Z.KO.CLICK_COMMUNITY, Y.N.CNAME, Y.N.IP_ADDRESS, Y.N.LB, Y.N.UPDATE_CNAME, Y.N.UPDATE_IP_ADDRESS, Y.N.UPDATE_LB, Y.N.DISABLE, ee.N.TIERED_CACHE, ee.N.CACHE_PURGE, ee.N.CACHE_ANALYTICS, ...(0, dt.P)(), ...(0, S.x4)(), ...(0, Ve.m8)(), ...(0, z.SH)(), ...(0, mt.Ky)(), ...(0, b.Cf)(), nt.N.CREATE, nt.N.EVENTS, nt.N.ANALYTICS, nt.N.UPDATE, nt.N.GENERATE_PREVIEW, ge.RY.INITIATE_URL_SCAN, ge.RY.LOAD_SCAN_INFO, ge.Ev.LOAD_THREAT_EVENTS, ge.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, ge.Ev.THREAT_EVENTS_FILTERS, ge.Ev.ABUSE_REPORT_BUTTON_CLICK, ge.Ev.ABUSE_REPORT_SUBMIT_CLICK, ge.Ev.ABUSE_REPORT_SUBMIT_FAILED, ge.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, ge.v9.EXPAND_INSIGHT_ROW, ge.v9.ONE_CLICK_RESOLVE_BUTTON, ge.v9.FOLLOW_RESOLVE_URL, ge.v9.MANAGE_INSIGHT, ge.v9.CLICK_SCAN_NOW, ge.v9.CLICK_EXPORT_INSIGHTS, ge.v9.BULK_ARCHIVE, ge.v9.CLICK_DETAILS_BUTTON, se.Fj[se.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, se.Fj[se.kq.ENDPOINT_MANAGEMENT].detailedMetrics, se.Fj[se.kq.ENDPOINT_MANAGEMENT].createEndpoint, se.Fj[se.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, se.Fj[se.kq.ENDPOINT_MANAGEMENT].deployRouting, se.Fj[se.kq.ENDPOINT_MANAGEMENT].deleteRouting, se.Fj[se.kq.API_DISCOVERY].viewDiscoveredEndpoints, se.Fj[se.kq.API_DISCOVERY].saveDiscoveredEndpoint, se.Fj[se.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, se.Fj[se.kq.SCHEMA_VALIDATION].viewSchemasList, se.Fj[se.kq.SCHEMA_VALIDATION].uploadSchema, se.Fj[se.kq.SCHEMA_VALIDATION].viewSchemaAdoption, se.Fj[se.kq.SCHEMA_VALIDATION].downloadSchema, se.Fj[se.kq.SCHEMA_VALIDATION].deleteSchema, se.Fj[se.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, se.Fj[se.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, se.Fj[se.kq.SEQUENCE_ANALYTICS].viewSequencesPage, se.Fj[se.kq.JWT_VALIDATION].viewJWTRules, se.Fj[se.kq.JWT_VALIDATION].addJWTRule, se.Fj[se.kq.JWT_VALIDATION].editJWTRule, se.Fj[se.kq.JWT_VALIDATION].deleteJWTRule, se.Fj[se.kq.JWT_VALIDATION].reprioritizeJWTRule, se.Fj[se.kq.JWT_VALIDATION].viewJWTConfigs, se.Fj[se.kq.JWT_VALIDATION].addJWTConfig, se.Fj[se.kq.JWT_VALIDATION].editJWTConfig, se.Fj[se.kq.JWT_VALIDATION].deleteJWTConfig, se.Fj[se.kq.SETTINGS].redirectToFirewallRulesTemplate, se.Fj[se.kq.SETTINGS].redirectToPages, se.Fj[se.kq.SETTINGS].listSessionIdentifiers, se.Fj[se.kq.SETTINGS].listRequestsContainingSessionIdentifiers, se.Fj[se.kq.SETTINGS].addOrRemoveSessionIdentifiers, se.Fj[se.kq.SETTINGS].redirectToCustomRules, se.Fj[se.kq.SETTINGS].listAllFallthroughSchemas, se.Fj[se.kq.SEQUENCE_RULES].listSequenceRules, se.Fj[se.kq.SEQUENCE_RULES].deleteSequenceRule, se.Fj[se.kq.SEQUENCE_RULES].reorderSequenceRule, se.Fj[se.kq.SEQUENCE_RULES].createSequenceRule, se.Fj[se.kq.SEQUENCE_RULES].editSequenceRule, N.Q.TOGGLE_V2, N.Q.FILTER, N.Q.FILTER_COUNTS, N.Q.FEEDBACK, N.Q.API_LATENCY, Be.Z.ANALYTICS, Be.Z.CREATE_AND_DEPLOY, Be.Z.CREATE_MONITOR_LINK, Be.Z.CREATE_MONITOR, Be.Z.CREATE_POOL_LINK, Be.Z.CREATE_POOL, Be.Z.EDIT_MONITOR, Be.Z.EDIT_POOL, Be.Z.LOAD_BALANCING_TABLE, Be.Z.POOL_TABLE, Be.Z.EDIT_MONITOR_LINK, Be.Z.EDIT_POOL_LINK, ...$e.eT, W.y.SECONDARY_DNS_NOTIFICATION_CREATE, W.y.SECONDARY_DNS_NOTIFICATION_UPDATE, W.y.SECONDARY_DNS_NOTIFICATION_DELETE, re.U.ZONE_TRANSFER_SUCCESS, re.U.DNS_RECORD_CREATE, re.U.DNS_RECORD_UPDATE, re.U.DNS_RECORD_DELETE, R.Y.PEER_DNS_CREATE, R.Y.PEER_DNS_UPDATE, R.Y.PEER_DNS_DELETE, R.Y.ZONE_TRANSFER_ENABLE, R.Y.ZONE_TRANSFER_DISABLE, ye.V.ARGO_ENABLEMENT, ye.V.ARGO_GEO_ANALYTICS_FETCH, ye.V.ARGO_GLOBAL_ANALYTICS_FETCH, L.X.VIEW_BUCKETS_LIST, L.X.CREATE_BUCKET, L.X.VALIDATE_BUCKET, L.X.DELETE_BUCKET, L.X.VIEW_CAPTURES_LIST, L.X.CREATE_SIMPLE_CAPTURE, L.X.CREATE_FULL_CAPTURE, L.X.VIEW_FULL_CAPTURE, L.X.DOWNLOAD_SIMPLE_CAPTURE, F.bK.VIEW_RULES, F.bK.CREATE_RULE, F.bK.UPDATE_RULE, F.bK.DELETE_RULE, F.bK.VIEW_CONFIGURATION, F.bK.CREATE_CONFIGURATION, F.bK.UPDATE_CONFIGURATION, F.bK.DELETE_CONFIGURATION, q.r8.VIEW_ALERTS, q.r8.VIEW_ALERTS_HISTORY, q.r8.MAGIC_OVERVIEW_ANALYTICS, q.VZ.CREATE_SITE, q.VZ.CREATE_TUNNEL, q.VZ.CREATE_STATIC_ROUTE, Ce.DC.CLICK_ADAPTIVE_SAMPLING, Ce.DC.CLICK_TO_LOG_EXPLORER_BANNER, Ce.DC.CLICK_TO_LOG_EXPLORER_DESCRIPTION, Ce.DC.CLICK_SWITCH_TO_RAW_LOGS, Ce.DC.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", U.U.REGISTER_DOMAIN_SEARCH_SUBMIT, U.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, U.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, U.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, U.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, U.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, U.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, U.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, U.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, U.U.REGISTER_DOMAIN_CHECKOUT_ERROR, U.U.TRANSFER_DOMAIN_CHANGE_STEP, U.U.RENEW_DOMAIN_COMPLETED, U.U.RESTORE_DOMAIN_INIT, U.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, U.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, U.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, U.U.RESTORE_DOMAIN_FAILURE, U.U.RESTORE_DOMAIN_COMPLETED, U.U.DOMAIN_DELETE_INIT, U.U.DOMAIN_DELETE_COMPLETED, U.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, U.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, U.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, U.U.DOMAIN_DELETE_CONFIRM_DELETE, U.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, U.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, U.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, U.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, U.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, U.U.DOMAIN_MOVE_START_FLOW, U.U.DOMAIN_MOVE_OPEN_DOCS, U.U.DOMAIN_MOVE_CLOSE_FLOW, U.U.DOMAIN_MOVE_PROGRESS_FLOW, U.U.DOMAIN_MOVE_SUBMIT, U.U.DOMAIN_MOVE_INITIATE_SUCCESS, U.U.DOMAIN_MOVE_INITIATE_ERROR, U.U.DOMAIN_MOVE_CANCEL, U.U.DOMAIN_MOVE_CANCEL_SUCCESS, U.U.DOMAIN_MOVE_CANCEL_ERROR, U.U.ACTION_CENTER_NAVIGATE, U.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, U.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, U.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, U.U.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE, U.U.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS, U.U.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR, U.U.TRANSFER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE, ae.z3.CREATE_SECRET, ae.z3.DELETE_SECRET, ae.z3.BIND_SECRET, ae.z3.DUPLICATE_SECRET, ae.z3.EDIT_SECRET, ie.KO.CLICK_GET_STARTED_GUIDE, ie.KO.CLICK_PIPELINE_DOCUMENTATION, ie.KO.CLICK_QUICK_LINK, ie.KO.CREATE_PIPELINE, ie.KO.DELETE_PIPELINE, ie.KO.LIST_PIPELINES, ie.KO.VIEW_PIPELINE, D.S.EXISTING_DOMAIN, D.S.NEW_DOMAIN, D.S.WAF_RULESET, D.S.WORKERS, D.S.PAGES, D.S.R2, D.S.ACCOUNT_MEMBERS, K._.TEMPLATE_PRODUCT_SELECTED, K._.TEMPLATE_SELECTED, K._.TEMPLATE_SAVE_DRAFT, K._.TEMPLATE_CANCEL, K._.TEMPLATE_DEPLOY, Ke.D.CLICK_GO_BACK_SHARE_MODAL, Ke.D.CLICK_MENU_ITEM_SHARE, Ke.D.CLICK_ON_CANCEL_SHARE_MODAL, Ke.D.CLICK_ON_CLOSE_SHARE_MODAL, Ke.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, Ke.D.CLICK_ON_DELETE_RULESET, Ke.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, Ke.D.CLICK_ON_EDIT_SHARE_PERMISSION, Ke.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, Ke.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, Ke.D.CLICK_ON_SHARE_TABLE_ROW, We.pR.CLICK_GEOGRAPHICAL_TEMPLATE, We.pR.CLICK_IP_TEMPLATE, We.pR.CLICK_USER_AGENT_TEMPLATE, We.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, Ve.vc.CREATED, Ve.vc.ENABLED, Ve.vc.DISABLED, Ve.vc.DELETED, Ve.vc.UPDATED, Ve.vc.DOWNLOADED, ne.Gk.REQUEST_REVIEW, ne.Gk.COPY_URL, I.v.FIELD, I.v.OPERATOR, et.Vj.SHOW_LCC_MIGRATION_BANNER, et.Vj.CLICK_LCC_DOCUMENTATION, et.Vj.CLICK_LCC_UPGRADE_GUIDE, et.Vj.SHOW_LCC_MIGRATION_WARNING, Se.yf.CLICK_DISMISS_INELIGIBILITY, Se.yf.CLICK_NEXT_STEP, Se.yf.CLICK_OPT_IN, Se.yf.CLICK_OPT_IN_BUTTON, Se.yf.CLICK_OPT_OUT_BUTTON, Se.yf.DISPLAY_MODAL, Se.yf.DISPLAY_OPT_OUT_MODAL, Se.yf.DISPLAY_TOOLTIP_NOT_AVAILABLE, Se.yf.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, Se.yf.DEFAULT_ALL_INIT, Se.yf.DEFAULT_ALL_OPT_OUT, Se.yf.DEFAULT_ALL_REENABLES, Se.yf.NEW_DASHBOARD_EXPERIENCE, Ae.AZ.LOAD_INSIGHTS, Ae.AZ.OPEN_SIDE_MODAL_INSIGHT, Ae.AZ.CLOSE_SIDE_MODAL_INSIGHT, Ae.AZ.CLICK_ACTION_INSIGHT, rt.YC.CHANGE_SETTING, rt.YC.LOAD_SETTINGS, rt.YC.OPEN_SIDE_MODAL_SETTING, rt.YC.CLOSE_SIDE_MODAL_SETTING, rt.YC.FILTER_SETTING, Ce.DC.ADD_SUSPICIOUS_ACTIVITY_FILTER, Ce.DC.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, Ce.DC.OPEN_SIDE_DRAWER, Ce.DC.CLOSE_SIDE_DRAWER, at.Xc, at.Aq, V.QV[V.Xn].clickLoginFromMobileApp2fa, V.QV[V.Xn].clickTryOther2FAMethodOrBackupCode, V.QV[V.Xn].clickTryRecovery, V.QV[V.xq].clickRegenerateBackupCodes, $.Vq.APPEAL_MITIGATION_SUBMIT, $.Vq.APPEAL_MITIGATION_SUCCESS, $.Vq.APPEAL_MITIGATION_FAILURE, $.Vq.CLICK_ABUSE_REPORT_ID, $.Vq.CLICK_ABUSE_REPORT_MITIGATIONS_LINK, ce.N3.CLICK_GIVE_FEEDBACK, ce.N3.CLICK_NAVIGATION_TAB, ce.N3.CLICK_SEARCH_BY_ZONE_NAME, ce.N3.CLICK_SEARCH_BY_VIEW_NAME, ce.N3.CLICK_CREATE_AN_INTERNAL_ZONE, ce.N3.CLICK_CREATE_A_VIEW, ce.N3.CLICK_SAVE_ZONE, ce.N3.CLICK_SAVE_VIEW, ce.N3.CLICK_SEARCH_BY_RECORD_NAME, ce.N3.CLICK_ZONE_NAME, ce.N3.CLICK_ADD_A_RECORD, ce.N3.CLICK_ADD_RECORD_SAVE, ce.N3.CLICK_RECORD_EDIT, ce.N3.CLICK_EDIT_RECORD_SAVE, ce.N3.CLICK_IMPORT_RECORDS, ce.N3.CLICK_MANAGE_LINKED_VIEWS, ce.N3.CLICK_SAVE_MANAGE_LINKED_VIEWS, ce.N3.CLICK_VIEW_RECORD, Ue.W1),
				Ct = n.eg.exactStrict(n.eg.object({
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
					bot: n.eg.any.optional,
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
					columns: n.eg.array(n.eg.string).optional,
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
					functions: n.eg.any.optional,
					toStreamRatePlanId: n.eg.any.optional,
					gatesDelayed: n.eg.any.optional,
					geo: n.eg.any.optional,
					globalNav: n.eg.any.optional,
					guid: n.eg.any.optional,
					hasData: n.eg.any.optional,
					hasRecords: n.eg.any.optional,
					hasSidebarNav: n.eg.boolean.optional,
					"hasTest2019-06-03": n.eg.any.optional,
					hCaptchaDisplayed: n.eg.any.optional,
					hasEnabledSecurityNavigation: n.eg.any.optional,
					hasEnabledDefaultUnifiedSecurity: n.eg.any.optional,
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
					pinned: n.eg.boolean.optional,
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
					shortcutsExpanded: n.eg.any.optional,
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
					surveyType: n.eg.any.optional,
					switchTo: n.eg.any.optional,
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
					toolCall: n.eg.any.optional,
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
					userGroupId: n.eg.string.optional,
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
					insightId: n.eg.any.optional,
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
					branch: n.eg.string.optional,
					queryMode: n.eg.any.optional,
					clickType: n.eg.string.optional,
					interactionType: n.eg.string.optional
				})),
				ht = (ue, le) => {
					const [ve, _e] = wt(le);
					let we, je;
					return (0, n.nM)(He.decode(ue)) && (we = new x.Uh(ue)), _e && _e.length > 0 && (je = new x.oV(ue, _e)), [ve, we, je]
				},
				wt = ue => {
					const le = Ct.decode(ue);
					if ((0, n.nM)(le)) {
						const ve = le.left.map(({
							context: _e
						}) => _e.map(({
							key: we
						}) => we)).reduce((_e, we) => _e.concat(we), []).filter(_e => _e in ue);
						return [Ft(ve, ue), ve]
					}
					return [ue, []]
				},
				Ft = (ue, le) => Object.entries(le).reduce((ve, [_e, we]) => (ue.includes(_e) || (ve[_e] = we), ve), {}),
				Qe = ue => (le, ve, _e) => {
					const [we, je, Ge] = ht(ve, _e);
					if (je) throw je;
					return Ge && console.error(Ge), ue(le, ve, we)
				};
			var lt = t("../react/utils/zaraz.ts");
			const it = {
					identify: !0
				},
				ut = ue => (le, ve, _e) => (it[ve] || lt.tg === null || lt.tg === void 0 || lt.tg.track(ve, _e), ue(le, ve, _e));
			var ft = t("../react/common/selectors/userSelectors.ts"),
				Me = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function X(ue) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(we) {
						return Object.getOwnPropertyDescriptor(ve, we).enumerable
					})), _e.forEach(function(we) {
						de(ue, we, ve[we])
					})
				}
				return ue
			}

			function de(ue, le, ve) {
				return le = he(le), le in ue ? Object.defineProperty(ue, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ue[le] = ve, ue
			}

			function he(ue) {
				var le = Te(ue, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function Te(ue, le) {
				if (typeof ue != "object" || ue === null) return ue;
				var ve = ue[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(ue, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(ue)
			}
			const ke = new Set(["cf_argo", "load_balancing_basic_plus"]),
				Ye = new Set(["pro", "business"]),
				Pe = ({
					price: ue,
					ratePlanId: le,
					ratePlanName: ve,
					frequency: _e,
					isNewSubscription: we
				}) => ({
					event: "purchase",
					new_subscription: we,
					ecommerce: {
						transaction_id: (0, Me.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: ue
					},
					items: [{
						item_id: le,
						item_name: ve || le,
						frequency: _e,
						price: ue
					}]
				}),
				vt = ue => {
					const {
						price: le,
						frequency: ve,
						plan: _e,
						ratePlanId: we,
						ratePlanName: je
					} = ue;
					return Ye.has(_e) ? X({}, Pe({
						price: le,
						ratePlanId: we,
						ratePlanName: je,
						frequency: ve,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				Wt = ue => {
					const {
						price: le,
						frequency: ve,
						ratePlan: _e,
						ratePlanName: we
					} = ue;
					return ke.has(_e) ? X({}, Pe({
						price: le,
						ratePlanId: _e,
						ratePlanName: we,
						frequency: ve,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				Ot = ue => {
					const {
						price: le,
						frequency: ve,
						plan: _e,
						ratePlanId: we,
						ratePlanName: je,
						label: Ge
					} = ue;
					return Ye.has(_e) ? X({}, Pe({
						price: le,
						frequency: ve,
						ratePlanId: we,
						ratePlanName: je,
						isNewSubscription: !1
					}), {
						label: Ge || _e
					}) : void 0
				},
				zt = ue => {
					const {
						price: le,
						frequency: ve,
						ratePlan: _e,
						ratePlanName: we,
						oldRatePlan: je
					} = ue;
					return ke.has(_e) ? X({}, Pe({
						price: le,
						frequency: ve,
						ratePlanId: _e,
						ratePlanName: we,
						isNewSubscription: !1
					}), {
						label: `${je}->${_e}`
					}) : void 0
				},
				Je = "click_key_interaction",
				kt = ue => {
					const {
						interactionType: le,
						clickType: ve,
						id: _e,
						text: we,
						href: je,
						page: Ge
					} = ue, {
						origin: Fe
					} = window.location, Xe = `${Fe}${Ge}`;
					return {
						event: Je,
						click_text: we,
						click_url: je,
						interaction_type: le,
						link_click_type: ve,
						page_path: Ge,
						page_url: Xe,
						click_target_identifier: _e
					}
				},
				Mt = "pageview",
				Tt = "create zone",
				xt = "create user",
				Rt = "Plan Purchase Success",
				Nt = "Product Purchase Success",
				yt = "Plan Update Success",
				jt = "Product Update Success",
				It = {
					[Mt]: !0,
					[Tt]: !0,
					[xt]: !0,
					[Rt]: !0,
					[Nt]: !0,
					[yt]: !0,
					[jt]: !0,
					[Ue.W1]: !0
				},
				Kt = ue => {
					const le = /\|MCMID\|([0-9]+)\|/,
						ve = ue.match(le);
					return ve ? ve[1] : void 0
				},
				Ht = ue => {
					var le;
					const {
						deviceViewport: ve,
						page: _e,
						previousPage: we,
						pageName: je,
						utm_campaign: Ge,
						_ga: Fe,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Xe
					} = ue, {
						origin: tt
					} = window.location, Dt = (0, ft.PR)((0, p.bh)().getState());
					return {
						event: we !== void 0 && _e !== we ? "virtual_page_view" : "page_load",
						device_type: ve,
						hostname: tt,
						language: navigator.language,
						locale: (0, i.r)((0, p.bh)().getState()),
						page_location: _e ? `${tt}${_e}` : "[redacted]",
						page_path: _e ? `${_e}` : "[redacted]",
						page_referrer: we ? `${tt}/${we}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: je || "[redacted]",
						page_url: _e ? `${tt}${_e}` : "[redacted]",
						query: Ge ? `?utm_campaign=${Ge}` : "[redacted]",
						user_properties: {
							ga_client_id: (le = Fe) !== null && le !== void 0 ? le : void 0,
							ga_client_id_s: Fe ? `s${Fe}` : void 0,
							user_id: _t() ? Dt == null ? void 0 : Dt.id : void 0,
							ecid: Xe ? Kt(Xe) : void 0
						}
					}
				},
				Bt = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				Gt = ue => {
					const {
						status: le
					} = ue;
					return le === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				Vt = (ue, le) => {
					switch (ue) {
						case Mt:
							return Ht(le);
						case Tt:
							return Bt();
						case xt:
							return Gt(le);
						case Rt:
							return vt(le);
						case Nt:
							return Wt(le);
						case yt:
							return Ot(le);
						case jt:
							return zt(le);
						case Ue.W1:
							return kt(le);
						default:
							return
					}
				},
				Yt = ue => (le, ve, _e) => {
					if (It[ve]) {
						var we;
						const je = Vt(ve, _e);
						window.dataLayer = window.dataLayer || [], je && ((we = window.dataLayer) === null || we === void 0 || we.push(je))
					}
					return ue(le, ve, _e)
				};
			var At = t("../react/utils/cookiePreferences.ts");

			function T(ue) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(we) {
						return Object.getOwnPropertyDescriptor(ve, we).enumerable
					})), _e.forEach(function(we) {
						M(ue, we, ve[we])
					})
				}
				return ue
			}

			function M(ue, le, ve) {
				return le = me(le), le in ue ? Object.defineProperty(ue, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ue[le] = ve, ue
			}

			function me(ue) {
				var le = Oe(ue, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function Oe(ue, le) {
				if (typeof ue != "object" || ue === null) return ue;
				var ve = ue[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(ue, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(ue)
			}
			const ze = ue => {
					o().init(T({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: pt() && !(0, s.gm)() && _t(),
						middlewares: [A, Qe, k, ut, Yt]
					}, ue))
				},
				ot = () => {
					o().identify(T({}, (0, e.getAttribution)(), {
						locale: (0, i.r)((0, p.bh)().getState()),
						isCloudflare: !!(0, v.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				pt = () => !0,
				Pt = () => {
					(0, At.kT)("sparrow_id")
				},
				_t = () => (0, At.Xm)()
		},
		"../utils/initStyles.ts": function(B, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = t("../react/app/providers/storeContainer.js");
			const s = "cfBaseStyles",
				p = document.head || document.getElementsByTagName("head")[0],
				i = c => {
					const u = [];
					for (let E in c.colors) {
						const n = c.colors[E];
						if (Array.isArray(n) && E !== "categorical")
							for (let r = 0; r < n.length; ++r) u.push(`--cf-${E}-${r}:${n[r]};`)
					}
					return u.join(`
`)
				},
				v = () => {
					const c = (0, e.Yc)(),
						u = `
    * {
      box-sizing: border-box;
    }

    ::placeholder {
      color: ${e.Rl.colors.gray[5]}
    }

    wf-html, html, body, button {
      font-size: 16px;
    }

    wf-html,
    html {
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: none;
    }

    wf-body,
    body {
      line-height: 1.5;
      color: ${e.Rl.colors.gray[1]};
      background-color: ${e.Rl.colors.background};
      font-family: ${e.Rl.fontFamily};
    }

    text {
      fill: ${e.Rl.colors.gray[1]};
    }

    wf-html, wf-body, body, html, ul, ol, li, p, h1, h2, h3, h4, h5, h6 {
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
      background-color: ${c?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${c?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${c?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${c?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${c?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${c?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
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
      ${i(e.Rl)}
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
					let E = document.getElementById(s);
					E ? E.innerText = "" : (E = document.createElement("style"), E.id = s, p.appendChild(E)), E.appendChild(document.createTextNode(u)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(v), y.Z = v
		},
		"../utils/sentry/lastSentEventId.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let s = "";
				return {
					setEventId: v => (!v || typeof v != "string" || (s = v), s),
					getEventId: () => s
				}
			})()
		},
		"../utils/zaraz.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Ro: function() {
					return r
				},
				bM: function() {
					return u
				},
				tg: function() {
					return c
				},
				yn: function() {
					return n
				}
			});

			function e(a) {
				for (var g = 1; g < arguments.length; g++) {
					var m = arguments[g] != null ? Object(arguments[g]) : {},
						d = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(m).filter(function(h) {
						return Object.getOwnPropertyDescriptor(m, h).enumerable
					})), d.forEach(function(h) {
						o(a, h, m[h])
					})
				}
				return a
			}

			function o(a, g, m) {
				return g = s(g), g in a ? Object.defineProperty(a, g, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[g] = m, a
			}

			function s(a) {
				var g = p(a, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function p(a, g) {
				if (typeof a != "object" || a === null) return a;
				var m = a[Symbol.toPrimitive];
				if (m !== void 0) {
					var d = m.call(a, g || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(a)
			}
			const i = {
					track: (a, g) => null,
					set: (a, g) => console.log(`zaraz.set(${a}, ${g})`)
				},
				v = {
					track: (a, g) => {
						var m;
						(m = window.zaraz) === null || m === void 0 || m.track(a, e({}, g, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (a, g) => {
						var m;
						return (m = window.zaraz) === null || m === void 0 ? void 0 : m.set(a, g)
					}
				};
			let c;
			const u = () => {
					window.zaraz, c = v
				},
				E = ["email", "first_name", "last_name"],
				n = a => {
					E.forEach(g => {
						var m;
						(m = c) === null || m === void 0 || m.set(g, a[g])
					})
				},
				r = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(B, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				p = t.n(s),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				v = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(v),
				u = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				E = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-icon/es/index.js"),
				r = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				a = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-forms/es/index.js"),
				g = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				m = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				d = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				h = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				w = t("../../../common/component/component-filter-bar/src/constants.js"),
				_ = t("../../../common/component/component-filter-bar/src/utils.js"),
				l = t("../../../../node_modules/react/jsx-runtime.js");

			function C(G) {
				for (var U = 1; U < arguments.length; U++) {
					var z = arguments[U] != null ? Object(arguments[U]) : {},
						H = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(z).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(z, Z).enumerable
					})), H.forEach(function(Z) {
						f(G, Z, z[Z])
					})
				}
				return G
			}

			function f(G, U, z) {
				return U = O(U), U in G ? Object.defineProperty(G, U, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[U] = z, G
			}

			function O(G) {
				var U = k(G, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function k(G, U) {
				if (typeof G != "object" || G === null) return G;
				var z = G[Symbol.toPrimitive];
				if (z !== void 0) {
					var H = z.call(G, U || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(G)
			}
			const A = 70,
				P = (0, i.SU)(({
					showOverflow: G
				}) => C({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, G ? {} : {
					maxHeight: A,
					overflow: "hidden"
				})),
				D = (0, i.SU)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				b = (0, i.SU)(({
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
				I = (0, i.SU)(() => ({
					mr: 1
				}), "span"),
				S = (0, i.SU)(({
					theme: G
				}) => ({
					color: G.colors.gray[4],
					mr: 1
				}), "span"),
				x = (0, i.SU)(() => ({
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
				$ = (0, i.SU)(({
					buttonStyle: G
				}) => C({
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
				ne = (0, i.SU)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				ee = (0, i.SU)(({
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
				re = (0, i.SU)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				W = G => G.current ? [...G.current.children].reduce((U, z) => (z.offsetTop >= A && U++, U), 0) : 0;
			let N = 0;
			class R extends e.Component {
				constructor() {
					super();
					f(this, "overflowWrapper", (0, e.createRef)()), f(this, "hasOverflowed", U => {
						const z = W(this.overflowWrapper);
						U.scrollHeight > A && z >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (U.scrollHeight < A || z === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), f(this, "addNewFilter", () => {
						const {
							filterDefinitions: U
						} = this.props, z = (0, _.TE)(U), H = Object.keys(z)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: H,
								operator: (0, _.uv)(H, z),
								value: (0, _.TT)(H, z)
							}
						})
					}), f(this, "handleOpenFilterEdit", U => {
						this.setState({
							openFilter: U,
							filterChanges: C({}, this.props.filters[U])
						})
					}), f(this, "handleRemoveFilterClick", (U, z) => {
						U.stopPropagation(), this.removeFilter(z)
					}), f(this, "removeFilter", U => {
						const {
							handleFiltersChange: z
						} = this.props, H = [...this.props.filters], Z = H[U];
						H.splice(U, 1), z(H), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: Z.key,
							operator: Z.operator,
							value: Z.value
						})
					}), f(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), f(this, "handleFilterSubmit", U => {
						const {
							filterDefinitions: z
						} = this.props;
						U.preventDefault();
						const {
							filterChanges: H
						} = this.state, Z = typeof z[H.key].parse == "function" ? Array.isArray(H.value) ? H.value.map(z[H.key].parse) : z[H.key].parse(H.value) : H.value;
						if (z[H.key].validate && (Array.isArray(Z) ? !Z.every(z[H.key].validate) : !z[H.key].validate(Z))) return this.setState({
							invalid: !0
						});
						const F = [...this.props.filters],
							q = C({}, H, {
								value: Z
							}),
							L = !F[this.state.openFilter];
						L ? F.push(q) : F[this.state.openFilter] = C({}, q), this.props.handleFiltersChange(F, q), (L ? this.props.onAddFilter : this.props.onEditFilter)({
							field: q.key,
							operator: q.operator,
							value: q.value
						}), this.closeOpenFilterChanges()
					}), f(this, "handlePendingKeyChange", ({
						value: U
					}) => {
						const {
							filterDefinitions: z
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: U,
								operator: (0, _.uv)(U, z),
								value: (0, _.TT)(U, z)
							}
						})
					}), f(this, "handlePendingOperatorChange", ({
						value: U
					}) => {
						let z = C({}, this.state.filterChanges, {
							operator: U
						});
						if ((0, _.dr)(U)) {
							var H, Z;
							((H = this.state.filterChanges) === null || H === void 0 ? void 0 : H.value) && !Array.isArray((Z = this.state.filterChanges) === null || Z === void 0 ? void 0 : Z.value) && (z.value = [this.state.filterChanges.value])
						} else {
							var F, q, L;
							((F = this.state.filterChanges) === null || F === void 0 ? void 0 : F.value) && Array.isArray((q = this.state.filterChanges) === null || q === void 0 ? void 0 : q.value) && ((L = this.state.filterChanges) === null || L === void 0 ? void 0 : L.value.length) > 0 && (z.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: z
						})
					}), f(this, "handlePendingValueChange", U => {
						this.setState({
							invalid: !1,
							filterChanges: C({}, this.state.filterChanges, {
								value: U
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
						id: ++N
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(U) {
					U.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(U) {
					const {
						formatLabel: z,
						filterDefinitions: H
					} = this.props, {
						operator: Z
					} = this.state.filterChanges, F = H[this.state.filterChanges.key], q = this.state.filterChanges.value, L = Q => Array.isArray(Q) ? Q.map(ie => ie.value) : (Q == null ? void 0 : Q.value) || null;
					if (F.renderValueComponent) return F.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (F.type) {
						case w.k.custom: {
							var K;
							return (0, l.jsx)(F.CustomComponent, C({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (K = F == null ? void 0 : F.customProps) !== null && K !== void 0 ? K : {}))
						}
						case w.k.select:
							return (0, _.dr)(Z) ? (0, l.jsx)(m.Z, {
								searchable: !0,
								multi: !0,
								creatable: !F.options,
								value: typeof q.split == "function" ? q == null ? void 0 : q.split(",") : Array.isArray(q) ? q : [],
								options: F.options ? F.options.map(Q => ({
									value: Q.value || Q,
									label: Q.label || z(this.state.filterChanges.key, Q, U)
								})) : q ? (Array.isArray(q) ? q : q.split(",")).map(Q => ({
									label: Q,
									value: Q
								})) : [],
								noOptionsMessage: () => null,
								placeholder: (0, l.jsx)(v.Trans, {
									id: F.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: F.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: Q => {
									this.handlePendingValueChange(L(Q))
								},
								isValidNewOption: Q => {
									const ie = F.validate;
									return !ie && Q || Q && ie([Q])
								},
								getNewOptionData: (Q, ie) => ({
									value: Q,
									label: ie
								})
							}) : (0, l.jsx)(a.hQ, {
								hideLabel: !0,
								value: q,
								options: F.options.map(Q => ({
									value: Q,
									label: z(this.state.filterChanges.key, Q, U)
								})),
								onChange: ({
									value: Q
								}) => this.handlePendingValueChange(Q)
							});
						case w.k.string:
						default:
							return (0, _.dr)(Z) ? (0, l.jsx)(m.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof q.split == "function" ? q == null ? void 0 : q.split(",") : Array.isArray(q) ? q : [],
								options: q ? (Array.isArray(q) ? q : q.split(",")).map(Q => ({
									label: Q,
									value: Q
								})) : [],
								noOptionsMessage: () => null,
								placeholder: U.t("analytics.report.filters.labels.placeholder", {
									example: H[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: Q => {
									this.handlePendingValueChange(L(Q))
								},
								isValidNewOption: Q => {
									const ie = F.validate;
									return !ie && Q || Q && ie([Q])
								},
								getNewOptionData: (Q, ie) => ({
									value: Q,
									label: ie
								}),
								formatCreateLabel: Q => U.t("filter_editor.value_create_label", {
									value: Q
								})
							}) : (0, l.jsx)(v.I18n, {
								children: Q => (0, l.jsx)(u.I, {
									value: this.state.filterChanges.value,
									onChange: ie => this.handlePendingValueChange(ie.target.value),
									mb: 0,
									name: "custom-value",
									placeholder: Q.t("analytics.report.filters.labels.placeholder", {
										example: H[this.state.filterChanges.key].example,
										_: ""
									})
								})
							})
					}
				}
				render() {
					const {
						formatLabel: U,
						filterDefinitions: z,
						modalStyles: H,
						filterIconType: Z,
						buttonStyle: F,
						secondaryActionComponent: q
					} = this.props, L = W(this.overflowWrapper), K = `filterPanel${this.state.id}`, Q = this.state.openFilter !== null;
					return (0, l.jsx)(v.I18n, {
						children: ie => (0, l.jsxs)(g.ZC, {
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							mr: "auto",
							width: "100%",
							children: [(0, l.jsxs)(re, {
								children: [(0, l.jsxs)(g.ZC, {
									display: "flex",
									flexDirection: "row",
									children: [(0, l.jsxs)($, {
										type: "primary",
										onClick: this.addNewFilter,
										"aria-expanded": Q,
										"aria-controls": K,
										inverted: !0,
										buttonStyle: F,
										children: [(0, l.jsx)(n.J, {
											type: Z || "add",
											mr: 1,
											label: ie.t("common.add", {
												_: "Add"
											})
										}), (0, l.jsx)(v.Trans, {
											id: "analytics.report.filters.labels.add_filter",
											_: "Add filter"
										})]
									}), !!q && (0, l.jsx)(g.ZC, {
										children: q
									})]
								}), this.props.filters.length > 0 && (0, l.jsx)(ne, {
									children: (0, l.jsx)(v.Trans, {
										id: "analytics.report.filters.labels.filters",
										_: "Filters:"
									})
								}), this.props.children]
							}), (0, l.jsx)(P, {
								innerRef: this.overflowWrapper,
								overflowLimit: A,
								showOverflow: this.state.showOverflow,
								children: this.props.filters.map((V, ae) => {
									const {
										key: ge,
										operator: Ce,
										value: se
									} = V, be = z[ge].ignoreLabelTranslation ? z[ge].label : ie.t(z[ge].label), Ae = ie.t(`analytics.report.filters.operators.${Ce}`), Re = Array.isArray(se) ? se.map(Se => U(ge, Se, ie)).join(", ") : U(ge, se, ie), We = `${be} ${Ae} ${Re}`;
									return (0, l.jsx)(D, {
										title: We,
										children: (0, l.jsx)(b, {
											onClick: () => this.handleOpenFilterEdit(ae),
											children: (0, l.jsxs)(g.ZC, {
												display: "flex",
												children: [(0, l.jsx)(I, {
													children: be
												}), (0, l.jsx)(S, {
													children: Ae
												}), (0, l.jsx)(x, {
													children: Re
												}), (0, _.oN)(V, z) ? (0, l.jsx)(r.OE, {
													startAngle: 90,
													color: "gray.4"
												}) : (0, l.jsx)(ee, {
													onClick: Se => this.handleRemoveFilterClick(Se, ae),
													"aria-label": "remove",
													children: (0, l.jsx)(n.J, {
														type: "remove"
													})
												})]
											})
										})
									}, `${ge}-${Ce}-${se}`)
								})
							}), Q && (0, l.jsx)(h.Z, {
								id: K,
								filterDefinitions: z,
								closeOpenFilterChanges: this.closeOpenFilterChanges,
								handleFilterSubmit: this.handleFilterSubmit,
								handlePendingKeyChange: this.handlePendingKeyChange,
								handlePendingOperatorChange: this.handlePendingOperatorChange,
								renderPendingChangeValue: this.renderPendingChangeValue,
								isNew: this.state.openFilter > this.props.filters.length,
								isPersistent: (0, _.oN)(this.state.filterChanges, z),
								filterChanges: this.state.filterChanges,
								invalid: this.state.invalid,
								formatLabel: U,
								modalStyles: H
							}), this.state.hasOverflowed && (0, l.jsx)(d.Z, {
								count: L,
								showOverflow: this.state.showOverflow,
								onClick: this.handleShowOverflow
							})]
						})
					})
				}
			}
			f(R, "propTypes", {
				filterDefinitions: p().shape({}),
				filters: p().arrayOf(p().shape({
					key: p().string,
					operator: p().string,
					value: p().string
				})),
				handleFiltersChange: p().func.isRequired,
				formatLabel: p().func.isRequired,
				onAddFilter: p().func,
				onEditFilter: p().func,
				onRemoveFilter: p().func,
				children: p().node,
				modalStyles: p().object,
				filterIconType: p().string,
				buttonStyle: p().object,
				secondaryActionComponent: p().node
			}), y.Z = R
		},
		"../../../common/component/component-filter-bar/src/index.js": function(B, y, t) {
			"use strict";
			t.d(y, {
				ME: function() {
					return o.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return s.k
				},
				oN: function() {
					return p.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				s = t("../../../common/component/component-filter-bar/src/constants.js"),
				p = t("../../../common/component/component-filter-bar/src/utils.js"),
				i = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				OZ: function() {
					return i
				},
				YB: function() {
					return p
				}
			});

			function e(c, u, E) {
				return u = o(u), u in c ? Object.defineProperty(c, u, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[u] = E, c
			}

			function o(c) {
				var u = s(c, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function s(c, u) {
				if (typeof c != "object" || c === null) return c;
				var E = c[Symbol.toPrimitive];
				if (E !== void 0) {
					var n = E.call(c, u || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(c)
			}
			class p extends Error {
				constructor(u, E) {
					super(E);
					e(this, "translationKey", void 0), this.translationKey = u, this.name = "TranslatorError"
				}
			}
			class i extends p {
				constructor(u, E) {
					super(u, `Translation key not found: ${u}, locale: ${E}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var v = null
		},
		"../../../common/util/types/src/api/domain.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Aw: function() {
					return k
				},
				Ib: function() {
					return f
				},
				Ks: function() {
					return A
				},
				MS: function() {
					return O
				},
				PN: function() {
					return d
				},
				Pp: function() {
					return p
				},
				Q3: function() {
					return g
				},
				TS: function() {
					return m
				},
				W7: function() {
					return _
				},
				dN: function() {
					return P
				},
				eF: function() {
					return C
				},
				ex: function() {
					return D
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
					zip: e.eg.string,
					extensions: e.eg.object({
						ca_legal_type: e.eg.string.optional
					}).optional
				}),
				i = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				v = e.eg.object({
					registrant: p.optional,
					technical: p.optional,
					administrator: p.optional,
					billing: p.optional
				}),
				c = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: v.optional,
					years: e.eg.number
				}),
				u = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let E = function(b) {
				return b.ONBOARDING_INITIATED = "Onboarding Initiated", b.ONBOARDED = "Onboarded", b.PENDING_REGISTRY_LOCK = "Pending Registry Lock", b.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", b.REGISTRY_UNLOCKED = "Registry Unlocked", b.LOCKED = "Locked", b.FAILED_TO_LOCK = "Failed To Lock", b.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", b.UNLOCKED = "Unlocked", b.OFFBOARDED = "Offboarded", b
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
					transfer_conditions: i.optional,
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
				m = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let d = function(b) {
				return b.PENDING = "pending", b.VERIFIED = "verified", b.REJECTED = "rejected", b.PENDING_DELETE = "pending_delete", b.DELETED = "deleted", b
			}({});
			const h = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(d),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				w = e.eg.object({
					designated_approvers: e.eg.array(h)
				});
			let _ = function(b) {
				return b.PENDING = "pending", b.PENDING_UPDATE = "pending_update", b.ENABLED = "enabled", b.DISABLED = "disabled", b
			}({});
			const l = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(_)
				}),
				C = e.eg.intersection([l, w]),
				f = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let O = function(b) {
				return b.UNLOCK_APPROVAL = "UnlockApprovalRequest", b.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", b.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", b.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", b
			}({});
			const k = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				A = e.eg.object({
					message: e.eg.string
				}),
				P = e.eg.object({
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
				}),
				D = e.eg.object({
					result: v
				})
		},
		"../../../common/util/types/src/api/phases/fields.tsx": function(B, y, t) {
			"use strict";
			t.d(y, {
				df: function() {
					return o
				},
				eX: function() {
					return s
				},
				fG: function() {
					return i
				},
				jI: function() {
					return p
				},
				qu: function() {
					return e
				},
				zc: function() {
					return v
				}
			});
			let e = function(c) {
					return c.Custom = "custom", c.Root = "root", c.Managed = "managed", c.Zone = "zone", c.RateLimit = "ratelimit", c
				}({}),
				o = function(c) {
					return c.Cache = "http_request_cache_settings", c.HttpCustomErrors = "http_custom_errors", c.HttpConfigSettings = "http_config_settings", c.HttpLogCustomFields = "http_log_custom_fields", c.HttpRateLimit = "http_ratelimit", c.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", c.HttpRequestFirewallCustom = "http_request_firewall_custom", c.HttpRequestFirewallManaged = "http_request_firewall_managed", c.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", c.HttpRequestLateTransform = "http_request_late_transform", c.HttpRequestMain = "http_request_main", c.HttpRequestOrigin = "http_request_origin", c.HttpRequestRedirect = "http_request_redirect", c.HttpRequestSanitize = "http_request_sanitize", c.HttpRequestSBFM = "http_request_sbfm", c.HttpRequestsSnippets = "http_request_snippets", c.HttpRequestTransform = "http_request_transform", c.HttpResponseCompression = "http_response_compression", c.HttpResponseFirewallManaged = "http_response_firewall_managed", c.HttpResponseTransform = "http_response_headers_transform", c.L4DDoS = "ddos_l4", c.L7DDoS = "ddos_l7", c.MagicIDS = "magic_transit_ids_managed", c.MagicManaged = "magic_transit_managed", c.MagicTransit = "magic_transit", c.MagicTransitRateLimit = "magic_transit_ratelimit", c
				}({}),
				s = function(c) {
					return c.Execute = "execute", c.All = "all", c.Block = "block", c.JSChallenge = "js_challenge", c.Challenge = "challenge", c.Allow = "allow", c.Bypass = "bypass", c.Log = "log", c.Rewrite = "rewrite", c.Score = "score", c.Skip = "skip", c.Managed_Challenge = "managed_challenge", c.DDoS_Dynamic = "ddos_dynamic", c.Select_Config = "select_config", c.Set_Config = "set_config", c.Reset = "reset", c.Redirect = "redirect", c.Cache = "set_cache_settings", c.WhiteList = "whitelist", c.Error = "serve_error", c
				}({}),
				p = function(c) {
					return c.ZONE_LOCKDOWN = "zoneLockdown", c.UA_BLOCK = "uaBlock", c.BIC = "bic", c.HOT = "hot", c.SECURITY_LEVEL = "securityLevel", c.RATE_LIMIT = "rateLimit", c.WAF = "waf", c
				}({}),
				i = function(c) {
					return c.DEFAULT = "default", c.MEDIUM = "medium", c.LOW = "low", c.EOFF = "eoff", c.HIGH = "high", c.VERY_HIGH = "very_high", c
				}({}),
				v = function(c) {
					return c.DEFAULT = "", c.XML = "text/xml", c.JSON = "application/json", c.TEXT = "text/plain", c.HTML = "text/html", c
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(B, y, t) {
			"use strict";
			t.d(y, {
				Yd: function() {
					return e
				},
				vE: function() {
					return o
				}
			});

			function e(s) {
				return Object.keys(s)
			}
			const o = (s, p) => {
				if (p !== void 0) throw new Error("Unexpected object: " + s);
				return p
			}
		},
		"../react/common/out.css": function(B, y, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[B.id, e, ""]
			]);
			var o, s, p = {
				hmr: !0
			};
			p.transform = o, p.insertInto = void 0;
			var i = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, p);
			e.locals && (B.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../react/common/out.css": function(B, y, t) {
			y = B.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), y.push([B.id, `/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
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
    --color-orange-200: oklch(90.1% 0.076 70.697);
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-600: oklch(64.6% 0.222 41.116);
    --color-orange-800: oklch(47% 0.157 37.304);
    --color-amber-200: oklch(92.4% 0.12 95.746);
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
    --color-green-400: oklch(79.2% 0.209 151.711);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-green-600: oklch(62.7% 0.194 149.214);
    --color-green-700: oklch(52.7% 0.154 150.069);
    --color-green-800: oklch(44.8% 0.119 151.328);
    --color-green-900: oklch(39.3% 0.095 152.535);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-cyan-100: oklch(95.6% 0.045 203.388);
    --color-cyan-800: oklch(45% 0.085 224.283);
    --color-sky-500: oklch(68.5% 0.169 237.323);
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
    --color-blue-950: oklch(28.2% 0.091 267.935);
    --color-indigo-50: oklch(96.2% 0.018 272.314);
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
    --color-indigo-900: oklch(35.9% 0.144 278.697);
    --color-purple-200: oklch(90.2% 0.063 306.703);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-fuchsia-500: oklch(66.7% 0.295 322.15);
    --color-rose-500: oklch(64.5% 0.246 16.439);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-gray-900: oklch(21% 0.034 264.665);
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
    --container-xs: 20rem;
    --container-md: 28rem;
    --container-3xl: 48rem;
    --container-6xl: 72rem;
    --text-xs: 12px;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 13px;
    --text-sm--line-height: calc(1 / 0.85);
    --text-base: 14px;
    --text-base--line-height: calc(1.25 / 0.875);
    --text-lg: 16px;
    --text-lg--line-height: calc(1.25 / 1);
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
    --tracking-normal: 0em;
    --tracking-wide: 0.025em;
    --tracking-widest: 0.1em;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --animate-spin: spin 1s linear infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --blur-md: 12px;
    --default-transition-duration: 100ms /* snappier than default 150ms */;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --color-surface: var(--kumo-surface);
    --color-surface-secondary: var(--kumo-surface-secondary);
    --color-surface-active: var(--kumo-surface-active);
    --color-primary: var(--kumo-primary);
    --color-secondary: var(--kumo-secondary);
    --color-secondary-hover: var(--kumo-secondary-hover);
    --color-accent: var(--kumo-accent);
    --color-destructive: var(--kumo-destructive);
    --color-muted: var(--kumo-muted);
    --color-input: var(--kumo-input);
    --color-active: var(--kumo-border-active);
    --color-border-hover: var(--kumo-border-hover);
    --color-color: var(--kumo-border);
    --text-color-surface: var(--kumo-surface-foreground);
    --text-color-primary: var(--kumo-primary-foreground);
    --text-color-secondary: var(--kumo-secondary-foreground);
    --text-color-destructive: var(--kumo-destructive-foreground);
    --text-color-muted: var(--kumo-muted-foreground);
    --text-color-error: var(--kumo-text-error);
    --animate-refresh: refresh 0.5s ease-in-out infinite;
    --animate-right: right 15s linear infinite;
    --color-neutral-150: oklch(0.96 0 0) /*new */;
    --color-neutral-250: oklch(0.9 0 0) /* new */;
    --color-neutral-450: oklch(0.62 0 0) /* new */;
    --color-neutral-750: oklch(0.31 0 0) /* new */;
    --color-neutral-850: oklch(0.23 0 0) /* new */;
    --color-border: var(--cf-gray-8);
    --color-bg-primary: var(--kumo-surface);
    --color-bg-secondary: var(--kumo-surface-secondary);
    --color-ob-base-1000: var(--color-neutral-900);
    --text-color-ob-inverted: var(--color-white);
    --color-cl1-white: var(--cf-white);
    --color-cl1-gold-7: var(--cf-gold-7);
    --color-cl1-gold-9: var(--cf-gold-9);
    --color-cl1-gray-2: var(--cf-gray-2);
    --color-cl1-gray-4: var(--cf-gray-4);
    --color-cl1-gray-5: var(--cf-gray-5);
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
  .-inset-0\\.5 {
    inset: calc(var(--spacing) * -0.5);
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .-top-10 {
    top: calc(var(--spacing) * -10);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-1\\/2 {
    top: calc(1/2 * 100%);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .top-4 {
    top: calc(var(--spacing) * 4);
  }
  .top-8 {
    top: calc(var(--spacing) * 8);
  }
  .top-32 {
    top: calc(var(--spacing) * 32);
  }
  .top-64 {
    top: calc(var(--spacing) * 64);
  }
  .top-\\[160px\\] {
    top: 160px;
  }
  .top-full {
    top: 100%;
  }
  .top-px {
    top: 1px;
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .right-24 {
    right: calc(var(--spacing) * 24);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-1\\/2 {
    left: calc(1/2 * 100%);
  }
  .left-2 {
    left: calc(var(--spacing) * 2);
  }
  .isolate {
    isolation: isolate;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
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
  .col-span-2 {
    grid-column: span 2 / span 2;
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
  .m-0\\! {
    margin: calc(var(--spacing) * 0) !important;
  }
  .m-1 {
    margin: calc(var(--spacing) * 1);
  }
  .m-4 {
    margin: calc(var(--spacing) * 4);
  }
  .m-auto {
    margin: auto;
  }
  .-mx-1 {
    margin-inline: calc(var(--spacing) * -1);
  }
  .-mx-5 {
    margin-inline: calc(var(--spacing) * -5);
  }
  .mx-1 {
    margin-inline: calc(var(--spacing) * 1);
  }
  .mx-2 {
    margin-inline: calc(var(--spacing) * 2);
  }
  .mx-4 {
    margin-inline: calc(var(--spacing) * 4);
  }
  .mx-auto {
    margin-inline: auto;
  }
  .\\!my-0 {
    margin-block: calc(var(--spacing) * 0) !important;
  }
  .\\!my-4 {
    margin-block: calc(var(--spacing) * 4) !important;
  }
  .my-1 {
    margin-block: calc(var(--spacing) * 1);
  }
  .my-2 {
    margin-block: calc(var(--spacing) * 2);
  }
  .my-4 {
    margin-block: calc(var(--spacing) * 4);
  }
  .my-5 {
    margin-block: calc(var(--spacing) * 5);
  }
  .\\!mt-1 {
    margin-top: calc(var(--spacing) * 1) !important;
  }
  .\\!mt-2 {
    margin-top: calc(var(--spacing) * 2) !important;
  }
  .\\!mt-3 {
    margin-top: calc(var(--spacing) * 3) !important;
  }
  .\\!mt-4 {
    margin-top: calc(var(--spacing) * 4) !important;
  }
  .\\!mt-5 {
    margin-top: calc(var(--spacing) * 5) !important;
  }
  .\\!mt-6 {
    margin-top: calc(var(--spacing) * 6) !important;
  }
  .-mt-2 {
    margin-top: calc(var(--spacing) * -2);
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
  .mt-2\\.5 {
    margin-top: calc(var(--spacing) * 2.5);
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
  .\\!mr-1 {
    margin-right: calc(var(--spacing) * 1) !important;
  }
  .-mr-2 {
    margin-right: calc(var(--spacing) * -2);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-2 {
    margin-right: calc(var(--spacing) * 2);
  }
  .mr-3 {
    margin-right: calc(var(--spacing) * 3);
  }
  .mr-4 {
    margin-right: calc(var(--spacing) * 4);
  }
  .mr-8 {
    margin-right: calc(var(--spacing) * 8);
  }
  .mr-16 {
    margin-right: calc(var(--spacing) * 16);
  }
  .mr-auto {
    margin-right: auto;
  }
  .\\!mb-0 {
    margin-bottom: calc(var(--spacing) * 0) !important;
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
  .-mb-5 {
    margin-bottom: calc(var(--spacing) * -5);
  }
  .mb-0 {
    margin-bottom: calc(var(--spacing) * 0);
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
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-8 {
    margin-bottom: calc(var(--spacing) * 8);
  }
  .\\!ml-0 {
    margin-left: calc(var(--spacing) * 0) !important;
  }
  .-ml-2 {
    margin-left: calc(var(--spacing) * -2);
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
  .ml-4 {
    margin-left: calc(var(--spacing) * 4);
  }
  .ml-6 {
    margin-left: calc(var(--spacing) * 6);
  }
  .ml-7 {
    margin-left: calc(var(--spacing) * 7);
  }
  .ml-11 {
    margin-left: calc(var(--spacing) * 11);
  }
  .ml-auto {
    margin-left: auto;
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
  .size-6\\.5 {
    width: calc(var(--spacing) * 6.5);
    height: calc(var(--spacing) * 6.5);
  }
  .size-9 {
    width: calc(var(--spacing) * 9);
    height: calc(var(--spacing) * 9);
  }
  .size-10 {
    width: calc(var(--spacing) * 10);
    height: calc(var(--spacing) * 10);
  }
  .size-15 {
    width: calc(var(--spacing) * 15);
    height: calc(var(--spacing) * 15);
  }
  .\\!h-full {
    height: 100% !important;
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-2\\.5 {
    height: calc(var(--spacing) * 2.5);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
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
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-16 {
    height: calc(var(--spacing) * 16);
  }
  .h-20 {
    height: calc(var(--spacing) * 20);
  }
  .h-32 {
    height: calc(var(--spacing) * 32);
  }
  .h-64 {
    height: calc(var(--spacing) * 64);
  }
  .h-\\[18px\\] {
    height: 18px;
  }
  .h-\\[22px\\] {
    height: 22px;
  }
  .h-\\[35px\\] {
    height: 35px;
  }
  .h-\\[60px\\] {
    height: 60px;
  }
  .h-\\[80px\\] {
    height: 80px;
  }
  .h-\\[100\\%\\] {
    height: 100%;
  }
  .h-\\[300px\\] {
    height: 300px;
  }
  .h-\\[calc\\(75dvh\\)\\] {
    height: calc(75dvh);
  }
  .h-fit {
    height: fit-content;
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
  .max-h-8\\/10 {
    max-height: calc(8/10 * 100%);
  }
  .max-h-\\[50vh\\] {
    max-height: 50vh;
  }
  .max-h-\\[400px\\] {
    max-height: 400px;
  }
  .max-h-\\[600px\\] {
    max-height: 600px;
  }
  .max-h-\\[calc\\(75dvh\\)\\] {
    max-height: calc(75dvh);
  }
  .max-h-\\[calc\\(100vh-64px\\)\\] {
    max-height: calc(100vh - 64px);
  }
  .max-h-\\[calc\\(var\\(--footer-max-height\\)-150px\\)\\] {
    max-height: calc(var(--footer-max-height) - 150px);
  }
  .max-h-screen {
    max-height: 100vh;
  }
  .min-h-3 {
    min-height: calc(var(--spacing) * 3);
  }
  .min-h-20 {
    min-height: calc(var(--spacing) * 20);
  }
  .min-h-\\[20px\\] {
    min-height: 20px;
  }
  .min-h-\\[32px\\] {
    min-height: 32px;
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
  .\\!w-3xl {
    width: var(--container-3xl) !important;
  }
  .\\!w-auto {
    width: auto !important;
  }
  .\\!w-full {
    width: 100% !important;
  }
  .w-0 {
    width: calc(var(--spacing) * 0);
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\\/2 {
    width: calc(1/2 * 100%);
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-3\\.5 {
    width: calc(var(--spacing) * 3.5);
  }
  .w-3xl {
    width: var(--container-3xl);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-6xl {
    width: var(--container-6xl);
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
  .w-12 {
    width: calc(var(--spacing) * 12);
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
  .w-32 {
    width: calc(var(--spacing) * 32);
  }
  .w-40 {
    width: calc(var(--spacing) * 40);
  }
  .w-45 {
    width: calc(var(--spacing) * 45);
  }
  .w-64 {
    width: calc(var(--spacing) * 64);
  }
  .w-70 {
    width: calc(var(--spacing) * 70);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-120 {
    width: calc(var(--spacing) * 120);
  }
  .w-\\[10px\\] {
    width: 10px;
  }
  .w-\\[15\\%\\] {
    width: 15%;
  }
  .w-\\[20\\%\\] {
    width: 20%;
  }
  .w-\\[30\\%\\] {
    width: 30%;
  }
  .w-\\[380px\\] {
    width: 380px;
  }
  .w-\\[400px\\] {
    width: 400px;
  }
  .w-\\[446px\\] {
    width: 446px;
  }
  .w-\\[var\\(--width\\)\\] {
    width: var(--width);
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
  .w-px {
    width: 1px;
  }
  .\\!max-w-3xl {
    max-width: var(--container-3xl) !important;
  }
  .max-w-3xl {
    max-width: var(--container-3xl);
  }
  .max-w-8\\/10 {
    max-width: calc(8/10 * 100%);
  }
  .max-w-28 {
    max-width: calc(var(--spacing) * 28);
  }
  .max-w-32 {
    max-width: calc(var(--spacing) * 32);
  }
  .max-w-50 {
    max-width: calc(var(--spacing) * 50);
  }
  .max-w-80 {
    max-width: calc(var(--spacing) * 80);
  }
  .max-w-140 {
    max-width: calc(var(--spacing) * 140);
  }
  .max-w-\\[30ch\\] {
    max-width: 30ch;
  }
  .max-w-\\[60ch\\] {
    max-width: 60ch;
  }
  .max-w-\\[90vw\\] {
    max-width: 90vw;
  }
  .max-w-\\[200ch\\] {
    max-width: 200ch;
  }
  .max-w-\\[400px\\] {
    max-width: 400px;
  }
  .max-w-\\[640px\\] {
    max-width: 640px;
  }
  .max-w-\\[800px\\] {
    max-width: 800px;
  }
  .max-w-\\[1000px\\] {
    max-width: 1000px;
  }
  .max-w-\\[1200px\\] {
    max-width: 1200px;
  }
  .max-w-\\[1300px\\] {
    max-width: 1300px;
  }
  .max-w-\\[calc\\(100vw-3rem\\)\\] {
    max-width: calc(100vw - 3rem);
  }
  .max-w-full {
    max-width: 100%;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-3 {
    min-width: calc(var(--spacing) * 3);
  }
  .min-w-30 {
    min-width: calc(var(--spacing) * 30);
  }
  .min-w-32 {
    min-width: calc(var(--spacing) * 32);
  }
  .min-w-40 {
    min-width: calc(var(--spacing) * 40);
  }
  .min-w-50 {
    min-width: calc(var(--spacing) * 50);
  }
  .min-w-52 {
    min-width: calc(var(--spacing) * 52);
  }
  .min-w-60 {
    min-width: calc(var(--spacing) * 60);
  }
  .min-w-80 {
    min-width: calc(var(--spacing) * 80);
  }
  .min-w-96 {
    min-width: calc(var(--spacing) * 96);
  }
  .min-w-\\[8rem\\] {
    min-width: 8rem;
  }
  .min-w-\\[9px\\] {
    min-width: 9px;
  }
  .min-w-\\[170px\\] {
    min-width: 170px;
  }
  .min-w-\\[200px\\] {
    min-width: 200px;
  }
  .min-w-\\[250px\\] {
    min-width: 250px;
  }
  .min-w-\\[280px\\] {
    min-width: 280px;
  }
  .min-w-\\[var\\(--trigger-width\\)\\] {
    min-width: var(--trigger-width);
  }
  .min-w-xs {
    min-width: var(--container-xs);
  }
  .flex-0 {
    flex: 0;
  }
  .flex-1 {
    flex: 1;
  }
  .flex-auto {
    flex: auto;
  }
  .flex-shrink {
    flex-shrink: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
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
  .grow-1 {
    flex-grow: 1;
  }
  .border-collapse {
    border-collapse: collapse;
  }
  .origin-left {
    transform-origin: left;
  }
  .-translate-x-1\\/2 {
    --tw-translate-x: calc(calc(1/2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-x-4 {
    --tw-translate-x: calc(var(--spacing) * -4);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-0 {
    --tw-translate-x: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-4 {
    --tw-translate-x: calc(var(--spacing) * 4);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-16 {
    --tw-translate-x: calc(var(--spacing) * 16);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-full {
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1/2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-16 {
    --tw-translate-y: calc(var(--spacing) * -16);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-px {
    --tw-translate-y: -1px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0\\.5 {
    --tw-translate-y: calc(var(--spacing) * 0.5);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-1\\.5 {
    --tw-translate-y: calc(var(--spacing) * 1.5);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-\\[2px\\] {
    --tw-translate-y: 2px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-\\[calc\\(-50\\%-1px\\)\\] {
    --tw-translate-y: calc(-50% - 1px);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-x-0 {
    --tw-scale-x: 0%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .scale-x-100 {
    --tw-scale-x: 100%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .rotate-45 {
    rotate: 45deg;
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
  .animate-pulse {
    animation: var(--animate-pulse);
  }
  .animate-refresh {
    animation: var(--animate-refresh);
  }
  .animate-right {
    animation: var(--animate-right);
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
  .cursor-not-allowed {
    cursor: not-allowed;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .resize {
    resize: both;
  }
  .resize-none {
    resize: none;
  }
  .\\!list-none {
    list-style-type: none !important;
  }
  .list-disc {
    list-style-type: disc;
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
  .grid-cols-\\[2fr_1\\.5fr_2\\.5fr_1fr_1fr\\] {
    grid-template-columns: 2fr 1.5fr 2.5fr 1fr 1fr;
  }
  .grid-cols-\\[200px_1fr\\] {
    grid-template-columns: 200px 1fr;
  }
  .grid-cols-\\[320px_1fr\\] {
    grid-template-columns: 320px 1fr;
  }
  .grid-cols-\\[max-content_1fr\\] {
    grid-template-columns: max-content 1fr;
  }
  .\\!flex-row {
    flex-direction: row !important;
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
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
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
  .justify-start {
    justify-content: flex-start;
  }
  .justify-stretch {
    justify-content: stretch;
  }
  .gap-0 {
    gap: calc(var(--spacing) * 0);
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
  .gap-2\\.5 {
    gap: calc(var(--spacing) * 2.5);
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
  .gap-8 {
    gap: calc(var(--spacing) * 8);
  }
  .gap-10 {
    gap: calc(var(--spacing) * 10);
  }
  .gap-12 {
    gap: calc(var(--spacing) * 12);
  }
  .space-y-1 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-2 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-3 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-4 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-6 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-\\[var\\(--gap\\)\\] {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(var(--gap) * var(--tw-space-y-reverse));
      margin-block-end: calc(var(--gap) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .gap-x-1\\.5 {
    column-gap: calc(var(--spacing) * 1.5);
  }
  .space-x-1 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 1) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .space-x-2 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .space-x-3 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .space-x-4 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .divide-x {
    :where(& > :not(:last-child)) {
      --tw-divide-x-reverse: 0;
      border-inline-style: var(--tw-border-style);
      border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));
      border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
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
  .divide-border {
    :where(& > :not(:last-child)) {
      border-color: var(--color-border);
    }
  }
  .divide-neutral-200 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-neutral-200);
    }
  }
  .self-center {
    align-self: center;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .\\!overflow-visible {
    overflow: visible !important;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-clip {
    overflow: clip;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }
  .overflow-visible {
    overflow: visible;
  }
  .overflow-visible\\! {
    overflow: visible !important;
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
  .overflow-y-auto {
    overflow-y: auto;
  }
  .overflow-y-scroll {
    overflow-y: scroll;
  }
  .overscroll-contain {
    overscroll-behavior: contain;
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
  .rounded-2xl {
    border-radius: var(--radius-2xl);
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
  .rounded-none {
    border-radius: 0;
  }
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .rounded-xl\\! {
    border-radius: var(--radius-xl) !important;
  }
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-l-none {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .rounded-r {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  .rounded-r-none {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .rounded-b-lg {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
  }
  .\\!border {
    border-style: var(--tw-border-style) !important;
    border-width: 1px !important;
  }
  .\\!border-0 {
    border-style: var(--tw-border-style) !important;
    border-width: 0px !important;
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
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-y {
    border-block-style: var(--tw-border-style);
    border-block-width: 1px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
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
  .\\!border-border {
    border-color: var(--color-border) !important;
  }
  .\\!border-neutral-200 {
    border-color: var(--color-neutral-200) !important;
  }
  .border-blue-100 {
    border-color: var(--color-blue-100);
  }
  .border-blue-200 {
    border-color: var(--color-blue-200);
  }
  .border-blue-300 {
    border-color: var(--color-blue-300);
  }
  .border-blue-400 {
    border-color: var(--color-blue-400);
  }
  .border-blue-500 {
    border-color: var(--color-blue-500);
  }
  .border-blue-600 {
    border-color: var(--color-blue-600);
  }
  .border-border {
    border-color: var(--color-border);
  }
  .border-cl1-gold-7 {
    border-color: var(--color-cl1-gold-7);
  }
  .border-color {
    border-color: var(--color-color);
  }
  .border-destructive {
    border-color: var(--color-destructive);
  }
  .border-gray-200 {
    border-color: var(--color-gray-200);
  }
  .border-gray-300 {
    border-color: var(--color-gray-300);
  }
  .border-green-300 {
    border-color: var(--color-green-300);
  }
  .border-neutral-100\\! {
    border-color: var(--color-neutral-100) !important;
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
  .border-neutral-300 {
    border-color: var(--color-neutral-300);
  }
  .border-neutral-400 {
    border-color: var(--color-neutral-400);
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
  .border-orange-200 {
    border-color: var(--color-orange-200);
  }
  .border-red-200 {
    border-color: var(--color-red-200);
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
  .border-t-transparent {
    border-top-color: transparent;
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
  .\\!bg-neutral-50 {
    background-color: var(--color-neutral-50) !important;
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
  .bg-\\[var\\(--color-accent\\)\\] {
    background-color: var(--color-accent);
  }
  .bg-accent {
    background-color: var(--color-accent);
  }
  .bg-amber-200 {
    background-color: var(--color-amber-200);
  }
  .bg-bg-primary {
    background-color: var(--color-bg-primary);
  }
  .bg-bg-secondary {
    background-color: var(--color-bg-secondary);
  }
  .bg-black {
    background-color: var(--color-black);
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
  .bg-blue-200 {
    background-color: var(--color-blue-200);
  }
  .bg-blue-300 {
    background-color: var(--color-blue-300);
  }
  .bg-blue-500 {
    background-color: var(--color-blue-500);
  }
  .bg-blue-600 {
    background-color: var(--color-blue-600);
  }
  .bg-cl1-gold-9 {
    background-color: var(--color-cl1-gold-9);
  }
  .bg-cl1-white {
    background-color: var(--color-cl1-white);
  }
  .bg-cyan-100 {
    background-color: var(--color-cyan-100);
  }
  .bg-destructive {
    background-color: var(--color-destructive);
  }
  .bg-gray-50 {
    background-color: var(--color-gray-50);
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-gray-300 {
    background-color: var(--color-gray-300);
  }
  .bg-gray-300\\/60 {
    background-color: color-mix(in srgb, oklch(87.2% 0.01 258.338) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-300) 60%, transparent);
    }
  }
  .bg-gray-500 {
    background-color: var(--color-gray-500);
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
  .bg-green-500 {
    background-color: var(--color-green-500);
  }
  .bg-green-600 {
    background-color: var(--color-green-600);
  }
  .bg-inherit {
    background-color: inherit;
  }
  .bg-input {
    background-color: var(--color-input);
  }
  .bg-muted {
    background-color: var(--color-muted);
  }
  .bg-neutral-50 {
    background-color: var(--color-neutral-50);
  }
  .bg-neutral-50\\! {
    background-color: var(--color-neutral-50) !important;
  }
  .bg-neutral-100 {
    background-color: var(--color-neutral-100);
  }
  .bg-neutral-150 {
    background-color: var(--color-neutral-150);
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
  .bg-ob-base-1000 {
    background-color: var(--color-ob-base-1000);
  }
  .bg-orange-200 {
    background-color: var(--color-orange-200);
  }
  .bg-primary {
    background-color: var(--color-primary);
  }
  .bg-purple-200 {
    background-color: var(--color-purple-200);
  }
  .bg-red-50 {
    background-color: var(--color-red-50);
  }
  .bg-red-50\\! {
    background-color: var(--color-red-50) !important;
  }
  .bg-red-100 {
    background-color: var(--color-red-100);
  }
  .bg-red-200 {
    background-color: var(--color-red-200);
  }
  .bg-red-400 {
    background-color: var(--color-red-400);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-secondary {
    background-color: var(--color-secondary);
  }
  .bg-surface {
    background-color: var(--color-surface);
  }
  .bg-surface-active {
    background-color: var(--color-surface-active);
  }
  .bg-surface-secondary {
    background-color: var(--color-surface-secondary);
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
  .bg-yellow-500 {
    background-color: var(--color-yellow-500);
  }
  .bg-gradient-to-b {
    --tw-gradient-position: to bottom in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .bg-gradient-to-br {
    --tw-gradient-position: to bottom right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .bg-gradient-to-r {
    --tw-gradient-position: to right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .from-blue-50 {
    --tw-gradient-from: var(--color-blue-50);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .from-neutral-50 {
    --tw-gradient-from: var(--color-neutral-50);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .from-transparent {
    --tw-gradient-from: transparent;
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-indigo-50 {
    --tw-gradient-to: var(--color-indigo-50);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-neutral-100 {
    --tw-gradient-to: var(--color-neutral-100);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-white {
    --tw-gradient-to: var(--color-white);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-40\\% {
    --tw-gradient-to-position: 40%;
  }
  .stroke-border {
    stroke: var(--color-border);
  }
  .\\!p-0 {
    padding: calc(var(--spacing) * 0) !important;
  }
  .\\!p-3 {
    padding: calc(var(--spacing) * 3) !important;
  }
  .\\!p-4 {
    padding: calc(var(--spacing) * 4) !important;
  }
  .\\!p-5 {
    padding: calc(var(--spacing) * 5) !important;
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
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .p-10 {
    padding: calc(var(--spacing) * 10);
  }
  .p-12 {
    padding: calc(var(--spacing) * 12);
  }
  .\\!px-0 {
    padding-inline: calc(var(--spacing) * 0) !important;
  }
  .\\!px-0\\.5 {
    padding-inline: calc(var(--spacing) * 0.5) !important;
  }
  .\\!px-2 {
    padding-inline: calc(var(--spacing) * 2) !important;
  }
  .\\!px-3 {
    padding-inline: calc(var(--spacing) * 3) !important;
  }
  .\\!px-5 {
    padding-inline: calc(var(--spacing) * 5) !important;
  }
  .px-0 {
    padding-inline: calc(var(--spacing) * 0);
  }
  .px-0\\! {
    padding-inline: calc(var(--spacing) * 0) !important;
  }
  .px-0\\.5 {
    padding-inline: calc(var(--spacing) * 0.5);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
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
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-5 {
    padding-inline: calc(var(--spacing) * 5);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .px-8 {
    padding-inline: calc(var(--spacing) * 8);
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
  .\\!py-3 {
    padding-block: calc(var(--spacing) * 3) !important;
  }
  .py-0 {
    padding-block: calc(var(--spacing) * 0);
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
  .py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-3\\.5 {
    padding-block: calc(var(--spacing) * 3.5);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-4\\! {
    padding-block: calc(var(--spacing) * 4) !important;
  }
  .py-6 {
    padding-block: calc(var(--spacing) * 6);
  }
  .py-8 {
    padding-block: calc(var(--spacing) * 8);
  }
  .py-12 {
    padding-block: calc(var(--spacing) * 12);
  }
  .py-16 {
    padding-block: calc(var(--spacing) * 16);
  }
  .py-\\[11px\\] {
    padding-block: 11px;
  }
  .pt-3 {
    padding-top: calc(var(--spacing) * 3);
  }
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pt-10 {
    padding-top: calc(var(--spacing) * 10);
  }
  .pt-\\[1px\\] {
    padding-top: 1px;
  }
  .\\!pr-1 {
    padding-right: calc(var(--spacing) * 1) !important;
  }
  .pr-1 {
    padding-right: calc(var(--spacing) * 1);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pr-3 {
    padding-right: calc(var(--spacing) * 3);
  }
  .pr-4 {
    padding-right: calc(var(--spacing) * 4);
  }
  .pr-8 {
    padding-right: calc(var(--spacing) * 8);
  }
  .pr-12 {
    padding-right: calc(var(--spacing) * 12);
  }
  .pr-\\[1px\\] {
    padding-right: 1px;
  }
  .pr-\\[14px\\] {
    padding-right: 14px;
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pb-3 {
    padding-bottom: calc(var(--spacing) * 3);
  }
  .pb-4 {
    padding-bottom: calc(var(--spacing) * 4);
  }
  .pb-10 {
    padding-bottom: calc(var(--spacing) * 10);
  }
  .\\!pl-1 {
    padding-left: calc(var(--spacing) * 1) !important;
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-2\\.5 {
    padding-left: calc(var(--spacing) * 2.5);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-5 {
    padding-left: calc(var(--spacing) * 5);
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
  .pl-\\[86px\\] {
    padding-left: 86px;
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
  .\\!font-mono {
    font-family: var(--font-mono) !important;
  }
  .\\!font-sans {
    font-family: var(--font-sans) !important;
  }
  .font-mono {
    font-family: var(--font-mono);
  }
  .font-mono\\! {
    font-family: var(--font-mono) !important;
  }
  .font-sans {
    font-family: var(--font-sans);
  }
  .\\!text-base {
    font-size: var(--text-base) !important;
    line-height: var(--tw-leading, var(--text-base--line-height)) !important;
  }
  .\\!text-lg {
    font-size: var(--text-lg) !important;
    line-height: var(--tw-leading, var(--text-lg--line-height)) !important;
  }
  .\\!text-sm {
    font-size: var(--text-sm) !important;
    line-height: var(--tw-leading, var(--text-sm--line-height)) !important;
  }
  .\\!text-xl {
    font-size: var(--text-xl) !important;
    line-height: var(--tw-leading, var(--text-xl--line-height)) !important;
  }
  .\\!text-xs {
    font-size: var(--text-xs) !important;
    line-height: var(--tw-leading, var(--text-xs--line-height)) !important;
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
  .text-base\\/tight {
    font-size: var(--text-base);
    line-height: var(--leading-tight);
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-sm\\! {
    font-size: var(--text-sm) !important;
    line-height: var(--tw-leading, var(--text-sm--line-height)) !important;
  }
  .text-sm\\/normal {
    font-size: var(--text-sm);
    line-height: var(--leading-normal);
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[0\\.85rem\\] {
    font-size: 0.85rem;
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .text-\\[12px\\] {
    font-size: 12px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .leading-0 {
    --tw-leading: calc(var(--spacing) * 0);
    line-height: calc(var(--spacing) * 0);
  }
  .leading-\\[20px\\] {
    --tw-leading: 20px;
    line-height: 20px;
  }
  .leading-\\[35px\\] {
    --tw-leading: 35px;
    line-height: 35px;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .leading-snug {
    --tw-leading: var(--leading-snug);
    line-height: var(--leading-snug);
  }
  .\\!font-bold {
    --tw-font-weight: var(--font-weight-bold) !important;
    font-weight: var(--font-weight-bold) !important;
  }
  .\\!font-medium {
    --tw-font-weight: var(--font-weight-medium) !important;
    font-weight: var(--font-weight-medium) !important;
  }
  .\\!font-semibold {
    --tw-font-weight: var(--font-weight-semibold) !important;
    font-weight: var(--font-weight-semibold) !important;
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
  .tracking-normal {
    --tw-tracking: var(--tracking-normal);
    letter-spacing: var(--tracking-normal);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .tracking-widest {
    --tw-tracking: var(--tracking-widest);
    letter-spacing: var(--tracking-widest);
  }
  .text-nowrap {
    text-wrap: nowrap;
  }
  .text-wrap {
    text-wrap: wrap;
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
  .\\!text-error {
    color: var(--text-color-error) !important;
  }
  .\\!text-inherit {
    color: inherit !important;
  }
  .text-\\[\\#4a4a4a\\] {
    color: #4a4a4a;
  }
  .text-\\[\\#f6821f\\] {
    color: #f6821f;
  }
  .text-\\[var\\(--light\\)\\] {
    color: var(--light);
  }
  .text-black {
    color: var(--color-black);
  }
  .text-blue-500 {
    color: var(--color-blue-500);
  }
  .text-blue-600 {
    color: var(--color-blue-600);
  }
  .text-blue-700 {
    color: var(--color-blue-700);
  }
  .text-blue-800 {
    color: var(--color-blue-800);
  }
  .text-blue-900 {
    color: var(--color-blue-900);
  }
  .text-border {
    color: var(--color-border);
  }
  .text-cl1-gray-2 {
    color: var(--color-cl1-gray-2);
  }
  .text-cl1-gray-4 {
    color: var(--color-cl1-gray-4);
  }
  .text-cl1-gray-5 {
    color: var(--color-cl1-gray-5);
  }
  .text-cyan-800 {
    color: var(--color-cyan-800);
  }
  .text-destructive {
    color: var(--text-color-destructive);
  }
  .text-emerald-500 {
    color: var(--color-emerald-500);
  }
  .text-error {
    color: var(--text-color-error);
  }
  .text-fuchsia-500 {
    color: var(--color-fuchsia-500);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-gray-600 {
    color: var(--color-gray-600);
  }
  .text-gray-700 {
    color: var(--color-gray-700);
  }
  .text-gray-800 {
    color: var(--color-gray-800);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-green-600 {
    color: var(--color-green-600);
  }
  .text-green-700 {
    color: var(--color-green-700);
  }
  .text-green-800 {
    color: var(--color-green-800);
  }
  .text-indigo-500 {
    color: var(--color-indigo-500);
  }
  .text-inherit {
    color: inherit;
  }
  .text-muted {
    color: var(--text-color-muted);
  }
  .text-neutral-100 {
    color: var(--color-neutral-100);
  }
  .text-neutral-200 {
    color: var(--color-neutral-200);
  }
  .text-neutral-300 {
    color: var(--color-neutral-300);
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
  .text-neutral-800 {
    color: var(--color-neutral-800);
  }
  .text-neutral-900 {
    color: var(--color-neutral-900);
  }
  .text-neutral-900\\! {
    color: var(--color-neutral-900) !important;
  }
  .text-neutral-950 {
    color: var(--color-neutral-950);
  }
  .text-ob-inverted {
    color: var(--text-color-ob-inverted);
  }
  .text-orange-600 {
    color: var(--color-orange-600);
  }
  .text-orange-800 {
    color: var(--color-orange-800);
  }
  .text-primary {
    color: var(--text-color-primary);
  }
  .text-purple-800 {
    color: var(--color-purple-800);
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-red-600 {
    color: var(--color-red-600);
  }
  .text-red-700 {
    color: var(--color-red-700);
  }
  .text-red-800 {
    color: var(--color-red-800);
  }
  .text-rose-500 {
    color: var(--color-rose-500);
  }
  .text-secondary {
    color: var(--text-color-secondary);
  }
  .text-sky-500 {
    color: var(--color-sky-500);
  }
  .text-surface {
    color: var(--text-color-surface);
  }
  .text-white {
    color: var(--color-white);
  }
  .text-yellow-500 {
    color: var(--color-yellow-500);
  }
  .text-yellow-600 {
    color: var(--color-yellow-600);
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
  .antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-25 {
    opacity: 25%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-60 {
    opacity: 60%;
  }
  .opacity-75 {
    opacity: 75%;
  }
  .opacity-80 {
    opacity: 80%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .\\!shadow-none {
    --tw-shadow: 0 0 #0000 !important;
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow) !important;
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
  .shadow-none {
    --tw-shadow: 0 0 #0000;
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
  .ring-neutral-950\\/10 {
    --tw-ring-color: color-mix(in srgb, oklch(0.145 0 0) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);
    }
  }
  .ring-neutral-950\\/15 {
    --tw-ring-color: color-mix(in srgb, oklch(0.145 0 0) 15%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 15%, transparent);
    }
  }
  .ring-offset-0 {
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
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
  .outline-1 {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .-outline-offset-1 {
    outline-offset: calc(1px * -1);
  }
  .outline-color {
    outline-color: var(--color-color);
  }
  .outline-neutral-300 {
    outline-color: var(--color-neutral-300);
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
  .transition-shadow {
    transition-property: box-shadow;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .delay-200 {
    transition-delay: 200ms;
  }
  .duration-100 {
    --tw-duration: 100ms;
    transition-duration: 100ms;
  }
  .duration-150 {
    --tw-duration: 150ms;
    transition-duration: 150ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
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
  .outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }
  .select-all {
    -webkit-user-select: all;
    user-select: all;
  }
  .select-none {
    -webkit-user-select: none;
    user-select: none;
  }
  .not-first\\:rounded-t-none {
    &:not(*:first-child) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  .not-last\\:rounded-b-none {
    &:not(*:last-child) {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  .group-first\\:rounded-l-full {
    &:is(:where(.group):first-child *) {
      border-top-left-radius: calc(infinity * 1px);
      border-bottom-left-radius: calc(infinity * 1px);
    }
  }
  .group-last\\:rounded-r-full {
    &:is(:where(.group):last-child *) {
      border-top-right-radius: calc(infinity * 1px);
      border-bottom-right-radius: calc(infinity * 1px);
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
  .group-hover\\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .group-data-\\[focused\\]\\:bg-secondary-hover {
    &:is(:where(.group)[data-focused] *) {
      background-color: var(--color-secondary-hover);
    }
  }
  .group-data-\\[invalid\\]\\:ring-\\[var\\(--text-color-error\\)\\] {
    &:is(:where(.group)[data-invalid] *) {
      --tw-ring-color: var(--text-color-error);
    }
  }
  .group-data-\\[selected\\]\\:opacity-100 {
    &:is(:where(.group)[data-selected] *) {
      opacity: 100%;
    }
  }
  .placeholder\\:\\!text-neutral-400 {
    &::placeholder {
      color: var(--color-neutral-400) !important;
    }
  }
  .placeholder\\:text-muted {
    &::placeholder {
      color: var(--text-color-muted);
    }
  }
  .placeholder\\:text-neutral-400 {
    &::placeholder {
      color: var(--color-neutral-400);
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
  .first\\:mt-1 {
    &:first-child {
      margin-top: calc(var(--spacing) * 1);
    }
  }
  .first\\:pl-2 {
    &:first-child {
      padding-left: calc(var(--spacing) * 2);
    }
  }
  .last\\:mb-1 {
    &:last-child {
      margin-bottom: calc(var(--spacing) * 1);
    }
  }
  .last\\:pr-2 {
    &:last-child {
      padding-right: calc(var(--spacing) * 2);
    }
  }
  .focus-within\\:border-gray-400 {
    &:focus-within {
      border-color: var(--color-gray-400);
    }
  }
  .focus-within\\:border-primary\\! {
    &:focus-within {
      border-color: var(--color-primary) !important;
    }
  }
  .focus-within\\:shadow-sm {
    &:focus-within {
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-within\\:ring-2 {
    &:focus-within {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-within\\:ring-primary {
    &:focus-within {
      --tw-ring-color: var(--color-primary);
    }
  }
  .focus-within\\:ring-offset-2 {
    &:focus-within {
      --tw-ring-offset-width: 2px;
      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }
  }
  .focus-within\\:ring-offset-input {
    &:focus-within {
      --tw-ring-offset-color: var(--color-input);
    }
  }
  .focus-within\\:outline-2 {
    &:focus-within {
      outline-style: var(--tw-outline-style);
      outline-width: 2px;
    }
  }
  .focus-within\\:-outline-offset-2 {
    &:focus-within {
      outline-offset: calc(2px * -1);
    }
  }
  .focus-within\\:outline-blue-700 {
    &:focus-within {
      outline-color: var(--color-blue-700);
    }
  }
  .focus-within\\:outline-indigo-600 {
    &:focus-within {
      outline-color: var(--color-indigo-600);
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
  .hover\\:cursor-pointer {
    &:hover {
      @media (hover: hover) {
        cursor: pointer;
      }
    }
  }
  .hover\\:border-active {
    &:hover {
      @media (hover: hover) {
        border-color: var(--color-active);
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
  .hover\\:\\!bg-neutral-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-100) !important;
      }
    }
  }
  .hover\\:bg-accent {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-accent);
      }
    }
  }
  .hover\\:bg-blue-300 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-300);
      }
    }
  }
  .hover\\:bg-blue-500 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-500);
      }
    }
  }
  .hover\\:bg-destructive\\/70 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-destructive);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-destructive) 70%, transparent);
        }
      }
    }
  }
  .hover\\:bg-gray-50 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-gray-50);
      }
    }
  }
  .hover\\:bg-gray-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-gray-100);
      }
    }
  }
  .hover\\:bg-neutral-50 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-50);
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
  .hover\\:bg-primary\\/70 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-primary);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-primary) 70%, transparent);
        }
      }
    }
  }
  .hover\\:bg-secondary-hover {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-secondary-hover);
      }
    }
  }
  .hover\\:bg-transparent {
    &:hover {
      @media (hover: hover) {
        background-color: transparent;
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
  .hover\\:text-black {
    &:hover {
      @media (hover: hover) {
        color: var(--color-black);
      }
    }
  }
  .hover\\:text-blue-800 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-blue-800);
      }
    }
  }
  .hover\\:text-red-500 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-red-500);
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
  .hover\\:opacity-100 {
    &:hover {
      @media (hover: hover) {
        opacity: 100%;
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
  .hover\\:shadow-xs {
    &:hover {
      @media (hover: hover) {
        --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      }
    }
  }
  .not-disabled\\:hover\\:border-border-hover\\! {
    &:not(*:disabled) {
      &:hover {
        @media (hover: hover) {
          border-color: var(--color-border-hover) !important;
        }
      }
    }
  }
  .not-disabled\\:hover\\:bg-secondary-hover {
    &:not(*:disabled) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-secondary-hover);
        }
      }
    }
  }
  .focus\\:z-10 {
    &:focus {
      z-index: 10;
    }
  }
  .focus\\:border-active {
    &:focus {
      border-color: var(--color-active);
    }
  }
  .focus\\:border-color {
    &:focus {
      border-color: var(--color-color);
    }
  }
  .focus\\:border-destructive {
    &:focus {
      border-color: var(--color-destructive);
    }
  }
  .focus\\:bg-accent {
    &:focus {
      background-color: var(--color-accent);
    }
  }
  .focus\\:text-secondary {
    &:focus {
      color: var(--text-color-secondary);
    }
  }
  .focus\\:opacity-100 {
    &:focus {
      opacity: 100%;
    }
  }
  .focus\\:ring-2 {
    &:focus {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus\\:ring-blue-400 {
    &:focus {
      --tw-ring-color: var(--color-blue-400);
    }
  }
  .focus\\:ring-neutral-400 {
    &:focus {
      --tw-ring-color: var(--color-neutral-400);
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
  .focus-visible\\:bg-blue-50 {
    &:focus-visible {
      background-color: var(--color-blue-50);
    }
  }
  .focus-visible\\:ring-1 {
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-visible\\:inset-ring-\\[0\\.5\\] {
    &:focus-visible {
      --tw-inset-ring-color: 0.5;
    }
  }
  .focus-visible\\:outline-hidden {
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
      @media (forced-colors: active) {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
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
  .disabled\\:border-neutral-400 {
    &:disabled {
      border-color: var(--color-neutral-400);
    }
  }
  .disabled\\:bg-neutral-100 {
    &:disabled {
      background-color: var(--color-neutral-100);
    }
  }
  .disabled\\:bg-neutral-300 {
    &:disabled {
      background-color: var(--color-neutral-300);
    }
  }
  .disabled\\:\\!text-neutral-400 {
    &:disabled {
      color: var(--color-neutral-400) !important;
    }
  }
  .disabled\\:text-muted {
    &:disabled {
      color: var(--text-color-muted);
    }
  }
  .disabled\\:opacity-50 {
    &:disabled {
      opacity: 50%;
    }
  }
  .disabled\\:hover\\:bg-neutral-100 {
    &:disabled {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-100);
        }
      }
    }
  }
  .\\*\\:in-focus\\:opacity-100 {
    :is(& > *) {
      :where(*:focus) & {
        opacity: 100%;
      }
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
  .data-\\[ending-style\\]\\:scale-90 {
    &[data-ending-style] {
      --tw-scale-x: 90%;
      --tw-scale-y: 90%;
      --tw-scale-z: 90%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }
  }
  .data-\\[ending-style\\]\\:opacity-0 {
    &[data-ending-style] {
      opacity: 0%;
    }
  }
  .data-\\[focused\\]\\:bg-secondary-hover {
    &[data-focused] {
      background-color: var(--color-secondary-hover);
    }
  }
  .data-\\[starting-style\\]\\:scale-90 {
    &[data-starting-style] {
      --tw-scale-x: 90%;
      --tw-scale-y: 90%;
      --tw-scale-z: 90%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }
  }
  .data-\\[starting-style\\]\\:opacity-0 {
    &[data-starting-style] {
      opacity: 0%;
    }
  }
  .data-\\[state\\=open\\]\\:bg-accent {
    &[data-state="open"] {
      background-color: var(--color-accent);
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
  .sm\\:flex {
    @media (width >= 40rem) {
      display: flex;
    }
  }
  .sm\\:inline {
    @media (width >= 40rem) {
      display: inline;
    }
  }
  .sm\\:w-auto {
    @media (width >= 40rem) {
      width: auto;
    }
  }
  .sm\\:max-w-\\[280px\\] {
    @media (width >= 40rem) {
      max-width: 280px;
    }
  }
  .sm\\:grid-cols-4 {
    @media (width >= 40rem) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .sm\\:justify-start {
    @media (width >= 40rem) {
      justify-content: flex-start;
    }
  }
  .sm\\:gap-0 {
    @media (width >= 40rem) {
      gap: calc(var(--spacing) * 0);
    }
  }
  .sm\\:py-1\\.5 {
    @media (width >= 40rem) {
      padding-block: calc(var(--spacing) * 1.5);
    }
  }
  .sm\\:text-base {
    @media (width >= 40rem) {
      font-size: var(--text-base);
      line-height: var(--tw-leading, var(--text-base--line-height));
    }
  }
  .sm\\:text-sm\\/6 {
    @media (width >= 40rem) {
      font-size: var(--text-sm);
      line-height: calc(var(--spacing) * 6);
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
  .md\\:flex {
    @media (width >= 48rem) {
      display: flex;
    }
  }
  .md\\:grid {
    @media (width >= 48rem) {
      display: grid;
    }
  }
  .md\\:max-w-\\[70vw\\] {
    @media (width >= 48rem) {
      max-width: 70vw;
    }
  }
  .md\\:grid-cols-2 {
    @media (width >= 48rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .md\\:grid-cols-4 {
    @media (width >= 48rem) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .md\\:items-center {
    @media (width >= 48rem) {
      align-items: center;
    }
  }
  .md\\:justify-between {
    @media (width >= 48rem) {
      justify-content: space-between;
    }
  }
  .md\\:gap-4 {
    @media (width >= 48rem) {
      gap: calc(var(--spacing) * 4);
    }
  }
  .md\\:space-y-8 {
    @media (width >= 48rem) {
      :where(& > :not(:last-child)) {
        --tw-space-y-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));
        margin-block-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)));
      }
    }
  }
  .md\\:gap-x-4 {
    @media (width >= 48rem) {
      column-gap: calc(var(--spacing) * 4);
    }
  }
  .md\\:p-8 {
    @media (width >= 48rem) {
      padding: calc(var(--spacing) * 8);
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
  .lg\\:max-w-\\[50vw\\] {
    @media (width >= 64rem) {
      max-width: 50vw;
    }
  }
  .lg\\:grid-cols-2 {
    @media (width >= 64rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .lg\\:rounded-xl {
    @media (width >= 64rem) {
      border-radius: var(--radius-xl);
    }
  }
  .lg\\:border {
    @media (width >= 64rem) {
      border-style: var(--tw-border-style);
      border-width: 1px;
    }
  }
  .lg\\:border-neutral-950\\/10 {
    @media (width >= 64rem) {
      border-color: color-mix(in srgb, oklch(0.145 0 0) 10%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        border-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);
      }
    }
  }
  .lg\\:ring {
    @media (width >= 64rem) {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .lg\\:ring-neutral-950\\/10 {
    @media (width >= 64rem) {
      --tw-ring-color: color-mix(in srgb, oklch(0.145 0 0) 10%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);
      }
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
    &:where(.dark-mode, .dark-mode *) {
      :where(& > :not(:last-child)) {
        border-color: var(--color-border);
      }
    }
  }
  .dark\\:divide-neutral-600 {
    &:where(.dark-mode, .dark-mode *) {
      :where(& > :not(:last-child)) {
        border-color: var(--color-neutral-600);
      }
    }
  }
  .dark\\:border-1 {
    &:where(.dark-mode, .dark-mode *) {
      border-style: var(--tw-border-style);
      border-width: 1px;
    }
  }
  .dark\\:\\!border-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-800) !important;
    }
  }
  .dark\\:border-blue-500 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-blue-500);
    }
  }
  .dark\\:border-blue-800 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-blue-800);
    }
  }
  .dark\\:border-gray-600 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-gray-600);
    }
  }
  .dark\\:border-gray-700 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-gray-700);
    }
  }
  .dark\\:border-green-500 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-green-500);
    }
  }
  .dark\\:border-neutral-100 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-100);
    }
  }
  .dark\\:border-neutral-400 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-400);
    }
  }
  .dark\\:border-neutral-500 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-500);
    }
  }
  .dark\\:border-neutral-600 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-600);
    }
  }
  .dark\\:border-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-700);
    }
  }
  .dark\\:border-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-800);
    }
  }
  .dark\\:border-neutral-800\\! {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-800) !important;
    }
  }
  .dark\\:border-neutral-800\\/60 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: color-mix(in srgb, oklch(0.269 0 0) 60%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        border-color: color-mix(in oklab, var(--color-neutral-800) 60%, transparent);
      }
    }
  }
  .dark\\:border-red-500 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-red-500);
    }
  }
  .dark\\:border-red-700 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-red-700);
    }
  }
  .dark\\:border-red-800 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-red-800);
    }
  }
  .dark\\:border-yellow-500 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-yellow-500);
    }
  }
  .dark\\:border-r-neutral-100 {
    &:where(.dark-mode, .dark-mode *) {
      border-right-color: var(--color-neutral-100);
    }
  }
  .dark\\:border-b-neutral-100 {
    &:where(.dark-mode, .dark-mode *) {
      border-bottom-color: var(--color-neutral-100);
    }
  }
  .dark\\:\\!bg-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-900) !important;
    }
  }
  .dark\\:\\!bg-neutral-950 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-950) !important;
    }
  }
  .dark\\:bg-\\[\\#916b20\\] {
    &:where(.dark-mode, .dark-mode *) {
      background-color: #916b20;
    }
  }
  .dark\\:bg-black {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-black);
    }
  }
  .dark\\:bg-blue-700 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-blue-700);
    }
  }
  .dark\\:bg-blue-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-blue-800);
    }
  }
  .dark\\:bg-blue-800\\/30 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(0.424 0.199 265.638) 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-blue-800) 30%, transparent);
      }
    }
  }
  .dark\\:bg-blue-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-blue-900);
    }
  }
  .dark\\:bg-blue-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(37.9% 0.146 265.522) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-blue-900) 20%, transparent);
      }
    }
  }
  .dark\\:bg-gray-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-gray-800);
    }
  }
  .dark\\:bg-gray-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-gray-900);
    }
  }
  .dark\\:bg-green-700 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-green-700);
    }
  }
  .dark\\:bg-green-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-green-800);
    }
  }
  .dark\\:bg-green-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-green-900);
    }
  }
  .dark\\:bg-green-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(39.3% 0.095 152.535) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-green-900) 20%, transparent);
      }
    }
  }
  .dark\\:bg-neutral-100 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-100);
    }
  }
  .dark\\:bg-neutral-500 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-500);
    }
  }
  .dark\\:bg-neutral-600 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-600);
    }
  }
  .dark\\:bg-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-700);
    }
  }
  .dark\\:bg-neutral-700\\/50 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(0.371 0 0) 50%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-neutral-700) 50%, transparent);
      }
    }
  }
  .dark\\:bg-neutral-750 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-750);
    }
  }
  .dark\\:bg-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-800);
    }
  }
  .dark\\:bg-neutral-800\\/50 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(0.269 0 0) 50%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-neutral-800) 50%, transparent);
      }
    }
  }
  .dark\\:bg-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-900);
    }
  }
  .dark\\:bg-neutral-900\\! {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-900) !important;
    }
  }
  .dark\\:bg-neutral-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(0.205 0 0) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-neutral-900) 20%, transparent);
      }
    }
  }
  .dark\\:bg-neutral-950 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-950);
    }
  }
  .dark\\:bg-red-500 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-red-500);
    }
  }
  .dark\\:bg-red-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-red-800);
    }
  }
  .dark\\:bg-red-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-red-900);
    }
  }
  .dark\\:bg-red-900\\/10\\! {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 10%, transparent) !important;
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-red-900) 10%, transparent) !important;
      }
    }
  }
  .dark\\:bg-red-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-red-900) 20%, transparent);
      }
    }
  }
  .dark\\:bg-surface {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-surface);
    }
  }
  .dark\\:bg-surface-secondary {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-surface-secondary);
    }
  }
  .dark\\:bg-white\\/30 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, #fff 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-white) 30%, transparent);
      }
    }
  }
  .dark\\:bg-yellow-600 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-yellow-600);
    }
  }
  .dark\\:bg-yellow-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-yellow-900);
    }
  }
  .dark\\:from-blue-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-from: color-mix(in srgb, oklch(37.9% 0.146 265.522) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-gradient-from: color-mix(in oklab, var(--color-blue-900) 20%, transparent);
      }
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:from-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-from: var(--color-neutral-800);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:to-indigo-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-to: color-mix(in srgb, oklch(35.9% 0.144 278.697) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-gradient-to: color-mix(in oklab, var(--color-indigo-900) 20%, transparent);
      }
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:to-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-to: var(--color-neutral-700);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:to-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-to: var(--color-neutral-900);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:to-neutral-950 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-to: var(--color-neutral-950);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:\\!text-white {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-white) !important;
    }
  }
  .dark\\:text-\\[var\\(--dark\\)\\] {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--dark);
    }
  }
  .dark\\:text-blue-100 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-blue-100);
    }
  }
  .dark\\:text-blue-200 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-blue-200);
    }
  }
  .dark\\:text-blue-300 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-blue-300);
    }
  }
  .dark\\:text-gray-300 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-gray-300);
    }
  }
  .dark\\:text-gray-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-gray-400);
    }
  }
  .dark\\:text-green-200 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-green-200);
    }
  }
  .dark\\:text-green-300 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-green-300);
    }
  }
  .dark\\:text-green-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-green-400);
    }
  }
  .dark\\:text-neutral-50 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-50);
    }
  }
  .dark\\:text-neutral-50\\! {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-50) !important;
    }
  }
  .dark\\:text-neutral-100 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-100);
    }
  }
  .dark\\:text-neutral-200 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-200);
    }
  }
  .dark\\:text-neutral-300 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-300);
    }
  }
  .dark\\:text-neutral-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-400);
    }
  }
  .dark\\:text-neutral-500 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-500);
    }
  }
  .dark\\:text-neutral-600 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-600);
    }
  }
  .dark\\:text-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-800);
    }
  }
  .dark\\:text-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-900);
    }
  }
  .dark\\:text-orange-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-orange-400);
    }
  }
  .dark\\:text-red-200 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-red-200);
    }
  }
  .dark\\:text-red-300 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-red-300);
    }
  }
  .dark\\:text-red-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-red-400);
    }
  }
  .dark\\:text-white {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-white);
    }
  }
  .dark\\:shadow-\\[0_0_0_1px_rgba\\(255\\,255\\,255\\,0\\.5\\)_inset\\] {
    &:where(.dark-mode, .dark-mode *) {
      --tw-shadow: 0 0 0 1px var(--tw-shadow-color, rgba(255,255,255,0.5)) inset;
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .dark\\:ring-border {
    &:where(.dark-mode, .dark-mode *) {
      --tw-ring-color: var(--color-border);
    }
  }
  .dark\\:ring-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-ring-color: var(--color-neutral-800);
    }
  }
  .dark\\:outline-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      outline-color: var(--color-neutral-700);
    }
  }
  .focus-within\\:dark\\:border-neutral-600 {
    &:focus-within {
      &:where(.dark-mode, .dark-mode *) {
        border-color: var(--color-neutral-600);
      }
    }
  }
  .dark\\:hover\\:border-neutral-700\\/80 {
    &:where(.dark-mode, .dark-mode *) {
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
  .dark\\:hover\\:\\!bg-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-800) !important;
        }
      }
    }
  }
  .dark\\:hover\\:\\!bg-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-900) !important;
        }
      }
    }
  }
  .dark\\:hover\\:bg-blue-600 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-blue-600);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-450 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-450);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-700);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-800);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-900);
        }
      }
    }
  }
  .hover\\:dark\\:bg-neutral-800 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark-mode, .dark-mode *) {
          background-color: var(--color-neutral-800);
        }
      }
    }
  }
  .hover\\:dark\\:bg-neutral-900 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark-mode, .dark-mode *) {
          background-color: var(--color-neutral-900);
        }
      }
    }
  }
  .hover\\:dark\\:bg-neutral-950 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark-mode, .dark-mode *) {
          background-color: var(--color-neutral-950);
        }
      }
    }
  }
  .dark\\:hover\\:text-red-300 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-red-300);
        }
      }
    }
  }
  .dark\\:hover\\:text-white {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-white);
        }
      }
    }
  }
  .dark\\:focus\\:ring-blue-500 {
    &:where(.dark-mode, .dark-mode *) {
      &:focus {
        --tw-ring-color: var(--color-blue-500);
      }
    }
  }
  .dark\\:focus\\:ring-neutral-500 {
    &:where(.dark-mode, .dark-mode *) {
      &:focus {
        --tw-ring-color: var(--color-neutral-500);
      }
    }
  }
  .focus-visible\\:dark\\:bg-blue-950 {
    &:focus-visible {
      &:where(.dark-mode, .dark-mode *) {
        background-color: var(--color-blue-950);
      }
    }
  }
  .dark\\:disabled\\:bg-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      &:disabled {
        background-color: var(--color-neutral-800);
      }
    }
  }
  .dark\\:disabled\\:\\!text-neutral-500 {
    &:where(.dark-mode, .dark-mode *) {
      &:disabled {
        color: var(--color-neutral-500) !important;
      }
    }
  }
  .dark\\:disabled\\:hover\\:bg-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      &:disabled {
        &:hover {
          @media (hover: hover) {
            background-color: var(--color-neutral-800);
          }
        }
      }
    }
  }
  .lg\\:dark\\:border-neutral-800 {
    @media (width >= 64rem) {
      &:where(.dark-mode, .dark-mode *) {
        border-color: var(--color-neutral-800);
      }
    }
  }
  .lg\\:dark\\:ring-neutral-800 {
    @media (width >= 64rem) {
      &:where(.dark-mode, .dark-mode *) {
        --tw-ring-color: var(--color-neutral-800);
      }
    }
  }
  .\\[\\&\\:has\\(\\:focus-within\\)\\]\\:border-active {
    &:has(:focus-within) {
      border-color: var(--color-active);
    }
  }
  .\\[\\&\\>pre\\]\\:\\!p-2\\.5 {
    &>pre {
      padding: calc(var(--spacing) * 2.5) !important;
    }
  }
  .\\[\\&\\>span\\]\\:inline-block {
    &>span {
      display: inline-block;
    }
  }
  .\\[\\&\\>span\\]\\:w-full {
    &>span {
      width: 100%;
    }
  }
  .\\[\\&\\>svg\\]\\:hidden {
    &>svg {
      display: none;
    }
  }
}
@layer base {
  :root {
    --kumo-surface: #fff;
    --kumo-surface-foreground: #000;
    --kumo-surface-secondary: var(--color-neutral-50);
    --kumo-surface-active: var(--color-neutral-100);
    --kumo-primary: #056dff;
    --kumo-primary-foreground: var(--color-white);
    --kumo-secondary: var(--color-white);
    --kumo-secondary-foreground: var(--color-neutral-900);
    --kumo-secondary-hover: var(--color-neutral-50);
    --kumo-accent: var(--color-neutral-150);
    --kumo-destructive: var(--color-red-600);
    --kumo-destructive-foreground: var(--color-neutral-50);
    --kumo-muted: var(--color-neutral-100);
    --kumo-muted-foreground: var(--color-neutral-500);
    --kumo-input: var(--color-neutral-50);
    --kumo-border: var(--color-neutral-200);
    --kumo-border-hover: var(--color-neutral-300);
    --kumo-border-active: var(--color-neutral-400);
    --kumo-text-error: var(--color-red-600);
  }
  .dark-mode {
    --kumo-surface: var(--color-black);
    --kumo-surface-foreground: var(--color-neutral-50);
    --kumo-surface-secondary: var(--kumo-surface);
    --kumo-surface-active: var(--color-neutral-800);
    --kumo-primary: #056dff;
    --kumo-primary-foreground: var(--color-white);
    --kumo-secondary: var(--color-neutral-900);
    --kumo-secondary-foreground: var(--color-neutral-50);
    --kumo-secondary-hover: var(--color-neutral-800);
    --kumo-accent: var(--color-neutral-850);
    --kumo-destructive: var(--color-red-600);
    --kumo-destructive-foreground: var(--color-neutral-50);
    --kumo-muted: var(--color-neutral-500);
    --kumo-muted-foreground: var(--color-neutral-50);
    --kumo-input: var(--color-neutral-900);
    --kumo-border: var(--color-neutral-800);
    --kumo-border-hover: var(--color-neutral-750);
    --kumo-border-active: var(--color-neutral-600);
    --kumo-text-error: var(--color-red-600);
  }
}
@layer utilities {
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .no-input-spinner {
    appearance: textfield;
    ::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
      appearance: none;
    }
  }
}
.z-modal {
  z-index: 9999;
}
@keyframes right {
  to {
    transform: translateX(100%);
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
.dark-mode .skeleton-line {
  background-color: rgba(255, 255, 255, 0.06);
}
.dark-mode .skeleton-line::after {
  background: linear-gradient( 90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 100% );
}
.text-shimmer {
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: text-shimmer 2s ease-in-out infinite;
}
@layer theme;
html.dark-mode {
  color-scheme: dark;
}
button.text-base {
  font-size: var(--text-base);
  line-height: var(--tw-leading, var(--text-base--line-height));
}
button.text-xs {
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
}
button.text-lg {
  font-size: var(--text-lg);
  line-height: var(--tw-leading, var(--text-lg--line-height));
}
button.border {
  border-style: var(--tw-border-style);
  border-width: 1px;
  border-color: var(--color-color);
}
#react-app {
  isolation: isolate;
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
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
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
@property --tw-space-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
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
@property --tw-tracking {
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
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-space-x-reverse: 0;
      --tw-divide-x-reverse: 0;
      --tw-border-style: solid;
      --tw-divide-y-reverse: 0;
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
      --tw-tracking: initial;
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
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(B, y, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(s) {
				if (!t.o(e, s)) return Promise.resolve().then(function() {
					var v = new Error("Cannot find module '" + s + "'");
					throw v.code = "MODULE_NOT_FOUND", v
				});
				var p = e[s],
					i = p[0];
				return t.e(p[1]).then(function() {
					return t.t(i, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", B.exports = o
		}
	}
]);

//# debugId=4df99350-2047-5482-be95-dfbba083bb55