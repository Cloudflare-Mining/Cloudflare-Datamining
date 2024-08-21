! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "af4cba9e-37f4-58e6-9c87-d1388800312b")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.js": function(F, _, n) {
			"use strict";
			n.d(_, {
				J8: function() {
					return s
				},
				Jd: function() {
					return i
				},
				QY: function() {
					return E
				},
				Qw: function() {
					return u
				},
				ki: function() {
					return d
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/utils/url.ts"),
				a = n("../node_modules/query-string/query-string.js"),
				l = n.n(a),
				m = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f;
			const u = () => Object.keys(m.Z).reduce((g, v) => (v.indexOf("cf_beta.") === 0 && m.Z.get(v) === "true" && g.push(v.split(".").slice(1).join(".")), g), []),
				d = () => {
					var g, v, C;
					return ((g = window) === null || g === void 0 || (v = g.bootstrap) === null || v === void 0 || (C = v.data) === null || C === void 0 ? void 0 : C.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((f = window) === null || f === void 0 ? void 0 : f.location) && m.Z) {
				const g = l().parse(window.location.search);
				g.beta_on && m.Z.set(`cf_beta.${g.beta_on}`, !0), g.beta_off && m.Z.set(`cf_beta.${g.beta_off}`, !1)
			}
			const y = {},
				t = g => {
					var v, C, I;
					return Object.prototype.hasOwnProperty.call(y, g) ? y[g] : ((v = window) === null || v === void 0 || (C = v.bootstrap) === null || C === void 0 || (I = C.data) === null || I === void 0 ? void 0 : I.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(R => R === g) ? (y[g] = !0, !0) : (y[g] = !1, !1)
				},
				r = g => m.Z ? m.Z.get(`cf_beta.${g}`) === !0 : !1,
				s = g => r(g) || t(g),
				c = () => !0,
				i = () => {
					var g, v, C;
					return ((g = window) === null || g === void 0 || (v = g.bootstrap) === null || v === void 0 || (C = v.data) === null || C === void 0 ? void 0 : C.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				E = g => {
					const v = (0, e.uF)(g),
						C = (v == null ? void 0 : v.roles) || [];
					return (0, o.qR)(location.pathname) && C.length === 1 && C.some(I => I === "Administrator Read Only")
				}
		},
		"../init.ts": function(F, _, n) {
			"use strict";
			n.a(F, async function(e, o) {
				try {
					let Z = function(L) {
							for (var b = 1; b < arguments.length; b++) {
								var N = arguments[b] != null ? Object(arguments[b]) : {},
									O = Object.keys(N);
								typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(N).filter(function(V) {
									return Object.getOwnPropertyDescriptor(N, V).enumerable
								})), O.forEach(function(V) {
									W(L, V, N[V])
								})
							}
							return L
						},
						W = function(L, b, N) {
							return b = z(b), b in L ? Object.defineProperty(L, b, {
								value: N,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : L[b] = N, L
						},
						z = function(L) {
							var b = B(L, "string");
							return typeof b == "symbol" ? b : String(b)
						},
						B = function(L, b) {
							if (typeof L != "object" || L === null) return L;
							var N = L[Symbol.toPrimitive];
							if (N !== void 0) {
								var O = N.call(L, b || "default");
								if (typeof O != "object") return O;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return (b === "string" ? String : Number)(L)
						};
					n.r(_);
					var a = n("../../../../node_modules/regenerator-runtime/runtime.js"),
						l = n.n(a),
						m = n("../../../../node_modules/url-search-params-polyfill/index.js"),
						f = n.n(m),
						u = n("../libs/init/initGlobal.ts"),
						d = n.n(u),
						y = n("../libs/init/initFetch.ts"),
						t = n("../../../../node_modules/@sentry/core/esm/exports.js"),
						r = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
						s = n("../react/app/providers/storeContainer.js"),
						c = n("../libs/init/initHashScroll.ts"),
						i = n("../libs/init/loading.ts"),
						E = n("../utils/initStyles.ts"),
						g = n("../utils/sentry/initSentry.ts"),
						v = n("../utils/sentry/setUserId.ts"),
						C = n("../libs/init/initMfePreviewData.ts"),
						I = n("../utils/initGates.ts"),
						R = n("../utils/getDashVersion.ts"),
						S = n("../libs/init/initBootstrap.ts"),
						A = n("../react/utils/history.ts"),
						H = n("../react/initReact.tsx"),
						K = n("../utils/initTracking.ts");
					const j = L => {
						t.$e(function(b) {
							b.setTag("init", "global"), t.Tb(L)
						}), (0, i.v)(L)
					};
					try {
						n.g.build = Z({}, {
							branch: "master",
							isReleaseCandidate: "true",
							commit: "636bb5375a776dd3ef0626a292951397d40743b9",
							dashVersion: "26437001",
							env: "production",
							builtAt: 1724233608630,
							versions: {
								"@cloudflare/app-dash": "25.161.22",
								node: "20.10.0",
								yarn: "3.2.2",
								webpack: "5.88.2"
							}
						}, {
							isPreviewDeploy: (0, R.p)()
						}), (0, g.j)();
						try {
							await n.e(27560).then(n.bind(n, "../react/utils/api.ts"))
						} catch (L) {
							throw t.$e(function(b) {
								b.setTag("init", "utils/api"), t.Tb(L)
							}), L
						}
						try {
							(0, c.d)(A.Z)
						} catch (L) {
							throw t.$e(function(b) {
								b.setTag("init", "hashScroll"), t.Tb(L)
							}), L
						}
						try {
							(0, E.Z)()
						} catch (L) {
							throw t.$e(function(b) {
								b.setTag("init", "styles"), t.Tb(L)
							}), L
						}
						try {
							(0, C.Z)()
						} catch (L) {
							throw t.$e(function(b) {
								b.setTag("init", "mfePreviewData"), t.Tb(L)
							}), L
						}(0, S.k)().then(async L => {
							var b;
							const N = (0, s.bh)(),
								O = (L == null ? void 0 : L.data) || {};
							N.dispatch((0, r.mW)("user", O == null ? void 0 : O.user));
							const V = L == null || (b = L.data) === null || b === void 0 ? void 0 : b.user;
							n.g.bootstrap = L, V && V.id && (0, v.I)(V.id);
							try {
								await (0, I.n)()
							} catch (J) {
								throw t.$e(function($) {
									$.setTag("init", "gates"), t.Tb(J)
								}), J
							}
							try {
								(0, K.k)()
							} catch (J) {
								throw t.$e(function($) {
									$.setTag("init", "tracking"), t.Tb(J)
								}), J
							}
							return (0, H.o)()
						}).catch(L => {
							t.$e(function(b) {
								b.setTag("init", "bootstrap"), t.Tb(L)
							}), (0, i.v)(L)
						})
					} catch (L) {
						j(L)
					}
					o()
				} catch (Z) {
					o(Z)
				}
			}, 1)
		},
		"../libs/init/initBootstrap.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				k: function() {
					return a
				}
			});
			class e extends Error {
				constructor(m, f) {
					super(f);
					this.name = `${m} ${f}`
				}
			}
			const o = () => {
					document.cookie.split(";").forEach(m => {
						const [f] = m.trim().split("=");
						document.cookie = `${f}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				a = async () => {
					let l = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!l.ok) throw l.headers.get("content-type") === "text/html" && (await l.text()).toLowerCase().includes("cookie too large") && (o(), window.location.reload()), new e("Bootstrap API Failure", l == null ? void 0 : l.status);
					return (await l.json()).result.data
				}
		},
		"../libs/init/initFetch.ts": function(F, _, n) {
			"use strict";
			var e = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				o = n.n(e),
				a = n("../../../../node_modules/fetch-intercept/lib/browser.js"),
				l = n.n(a);

			function m(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						c = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(s).filter(function(i) {
						return Object.getOwnPropertyDescriptor(s, i).enumerable
					})), c.forEach(function(i) {
						f(t, i, s[i])
					})
				}
				return t
			}

			function f(t, r, s) {
				return r = u(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function u(t) {
				var r = d(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function d(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var c = s.call(t, r || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			const y = t => {
				const r = t && t.headers || {},
					s = new Headers(r);
				return s.append("X-Cross-Site-Security", "dash"), m({}, t, {
					headers: s
				})
			};
			(0, a.register)({
				request: (t, r) => {
					try {
						return new URL(t), t === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", r] : [t, r]
					} catch {
						return [t, y(r)]
					}
				}
			})
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../libs/init/initHashScroll.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				d: function() {
					return l
				}
			});
			let e = "";
			const o = 61;

			function a(m) {
				const f = m.substr(1);
				if (f && e !== f) {
					const u = document.getElementById(f);
					if (u) {
						const d = u.getBoundingClientRect().top;
						if (d > 0) {
							const y = d - o;
							document.documentElement.scrollTop = y
						}
					}
				}
				e = f
			}

			function l(m) {
				m.listen(f => a(f.hash))
			}
		},
		"../libs/init/initMfePreviewData.ts": function(F, _, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const o = () => {
				let a;
				try {
					a = decodeURIComponent(window.location.search)
				} catch {
					console.log("Could not decode query string. Using non-decoded value."), a = window.location.search
				}
				if (!a.includes("remote[")) return;
				const l = new URLSearchParams(a),
					m = {};
				for (let [f, u] of l) f.includes("remote") && (m[f.replace(/remote\[|\]/g, "")] = u);
				e.Z.set("mfe-remotes", JSON.stringify(m))
			};
			_.Z = o
		},
		"../libs/init/loading.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				s: function() {
					return c
				},
				v: function() {
					return i
				}
			});
			var e = n("../../../../node_modules/cookie/index.js"),
				o = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const a = "CF_dash_version",
				l = "current",
				m = "hash",
				f = "deploymentPreview",
				u = E => E === l ? d() : y(),
				d = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				y = (E = 72) => {
					const g = 36e5;
					return new Date(Date.now() + E * g)
				},
				t = E => {
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
				r = (E, g = !1) => {
					var v;
					const C = t(E),
						I = `
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
    <h1 id="error-title">${C.title}</h1>
    <p id="error-description">${C.description}</p>
  </div>
  `,
						R = g ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${o.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(v=window.build)===null||v===void 0?void 0:v.branch}</span>.</p>
      <a href="/version?hash=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return I + R
				},
				s = E => {
					var g;
					const v = document.getElementById(E);
					!v || (g = v.parentNode) === null || g === void 0 || g.removeChild(v)
				};

			function c() {
				const E = document.getElementById("loading-state");
				E == null || E.classList.add("hide"), E == null || E.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(s)
				})
			}

			function i(E) {
				var g;
				const v = document.getElementById("loading-state"),
					C = !!((g = e.parse(document.cookie)) === null || g === void 0 ? void 0 : g[a]);
				!v || (v.innerHTML = r(E == null ? void 0 : E.code, C))
			}
		},
		"../react/app/HoCs/withEntities.tsx": function(F, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../react/app/redux/index.ts"),
				l = n("../react/common/selectors/userSelectors.ts"),
				m = n("../react/common/selectors/zoneSelectors.ts"),
				f = n("../react/common/selectors/accountSelectors.ts"),
				u = n("../react/common/utils/isGuards.ts"),
				d = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				y = n.n(d);

			function t() {
				return t = Object.assign ? Object.assign.bind() : function(c) {
					for (var i = 1; i < arguments.length; i++) {
						var E = arguments[i];
						for (var g in E) Object.prototype.hasOwnProperty.call(E, g) && (c[g] = E[g])
					}
					return c
				}, t.apply(this, arguments)
			}
			const r = c => {
				function i(E) {
					const g = (0, a.UM)(),
						v = (0, d.useHistory)(),
						C = (0, d.useLocation)(),
						I = (0, d.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						R = (0, a.p4)(l.PR) || null,
						S = (0, a.p4)(m.nA) || null,
						A = (0, a.p4)(f.uF),
						H = A ? A.account : null;
					if (!I) return null;
					const {
						accountId: K,
						app: Z,
						tab: W
					} = I.params, z = I.params.zoneName && ((0, u.v5)(I.params.zoneName) || I.params.zoneName.indexOf(".") > 0) ? I.params.zoneName : void 0;
					return o().createElement(c, t({
						dispatch: g,
						history: v,
						location: C,
						match: I,
						user: R,
						membership: K ? A : null,
						account: K ? H : null,
						accountId: K || null,
						zone: z ? S : null,
						zoneName: z || null,
						app: z ? Z : null,
						tab: z ? W : null
					}, E))
				}
				return i.displayName = `withEntities(${s(c)})`, i
			};

			function s(c) {
				return c.displayName || c.name || "Component"
			}
			_.Z = r
		},
		"../react/app/components/DeepLink/actions.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				BQ: function() {
					return d
				},
				Bh: function() {
					return f
				},
				CM: function() {
					return y
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
					return u
				},
				fj: function() {
					return r
				},
				r4: function() {
					return l
				},
				zq: function() {
					return a
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
				a = (0, e.R)(o.ADD_SITE, c => ({
					payload: c
				})),
				l = (0, e.R)(o.RESOLVING_START),
				m = (0, e.R)(o.RESOLVING_COMPLETE),
				f = (0, e.R)(o.SELECT_ZONE, c => ({
					payload: c
				})),
				u = (0, e.R)(o.SELECT_ACCOUNT, c => ({
					payload: c
				})),
				d = (0, e.R)(o.SELECT_PAGES_PROJECT, c => ({
					payload: c
				})),
				y = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, c => ({
					payload: c
				})),
				t = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, c => ({
					accountIds: c
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				s = (0, e.R)(o.SELECT_WORKER, c => ({
					payload: c
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				BV: function() {
					return e
				},
				Dz: function() {
					return d
				},
				Fj: function() {
					return l
				},
				Kt: function() {
					return m
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return y
				},
				dB: function() {
					return a
				},
				s$: function() {
					return f
				}
			});
			const e = "to",
				o = "_gl",
				a = "freeTrial",
				l = "deepLinkQueryParams",
				m = "add",
				f = "multiSkuProducts",
				u = "/:account/billing/checkout",
				d = "/:account/:zone/billing/checkout",
				y = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				ZP: function() {
					return W
				},
				U: function() {
					return u.U
				},
				dd: function() {
					return u.dd
				},
				bk: function() {
					return f.bk
				},
				Bh: function() {
					return f.Bh
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n("../react/app/redux/index.ts"),
				a = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = n("../react/app/components/DeepLink/utils.ts"),
				m = n("../react/utils/bootstrap.ts"),
				f = n("../react/app/components/DeepLink/actions.ts"),
				u = n("../react/app/components/DeepLink/selectors.ts"),
				d = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				y = n.n(d);

			function t(z) {
				for (var B = 1; B < arguments.length; B++) {
					var j = arguments[B] != null ? Object(arguments[B]) : {},
						L = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(j).filter(function(b) {
						return Object.getOwnPropertyDescriptor(j, b).enumerable
					})), L.forEach(function(b) {
						r(z, b, j[b])
					})
				}
				return z
			}

			function r(z, B, j) {
				return B = s(B), B in z ? Object.defineProperty(z, B, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[B] = j, z
			}

			function s(z) {
				var B = c(z, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function c(z, B) {
				if (typeof z != "object" || z === null) return z;
				var j = z[Symbol.toPrimitive];
				if (j !== void 0) {
					var L = j.call(z, B || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(z)
			}
			class i {
				constructor(B, j) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", L => {
						this.resolvers.set(L, {
							name: L,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", L => {
						const b = this.resolvers.get(L);
						b && (b.endTime = Date.now(), this.resolvers.set(L, b))
					}), r(this, "resolverCancel", L => {
						this.resolverDone(L), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", L => {
						const b = "NO_ACTION",
							N = {
								actionType: b,
								startTime: 0
							};
						return {
							start: (O = b) => {
								const V = this.resolvers.get(L);
								N.actionType = O, N.startTime = Date.now(), V && V.userActions.push(N)
							},
							finish: (O = b) => {
								N.actionType = O, N.endTime = Date.now()
							},
							cancel: (O = b) => {
								N.actionType = O, N.endTime = Date.now(), this.resolverCancel(L)
							}
						}
					}), this.deepLink = B, this.legacyDeepLink = j, this.resolvers = new Map
				}
				track(B) {
					try {
						if (this._done) return;
						this._done = !0;
						const j = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: E(this.startTime, this.endTime),
								totalCpuTime: E(this.startTime, this.endTime)
							},
							L = this.resolvers.size === 0 ? j : Array.from(this.resolvers.values()).reduce((b, N) => {
								const O = E(N.startTime, N.endTime),
									V = N.userActions.reduce(($, D) => {
										const k = E(D.startTime, D.endTime);
										return {
											totalTime: $.totalTime + k,
											actions: $.actions.set(D.actionType, k)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									J = O - V.totalTime;
								return t({}, b, {
									totalTime: b.totalTime + O,
									totalUserActionsTime: b.totalUserActionsTime + V.totalTime,
									totalCpuTime: b.totalCpuTime + J,
									[`${N.name}ResolverTotalTime`]: O,
									[`${N.name}ResolverTotalCpuTime`]: J,
									[`${N.name}ResolverTotalUserActionsTime`]: V.totalTime
								}, Array.from(V.actions.keys()).reduce(($, D) => t({}, $, {
									[`${N.name}Resolver/${D}`]: V.actions.get(D)
								}), {}))
							}, t({}, j, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						y().sendEvent(B, L)
					} catch (j) {
						console.error(j)
					}
				}
			}

			function E(z = Date.now(), B = Date.now()) {
				return (B - z) / 1e3
			}
			var g = n("../react/app/components/DeepLink/constants.ts"),
				v = n("../react/common/hooks/useCachedState.ts"),
				C = n("../react/common/hooks/usePrevious.ts");

			function I(z) {
				for (var B = 1; B < arguments.length; B++) {
					var j = arguments[B] != null ? Object(arguments[B]) : {},
						L = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(j).filter(function(b) {
						return Object.getOwnPropertyDescriptor(j, b).enumerable
					})), L.forEach(function(b) {
						R(z, b, j[b])
					})
				}
				return z
			}

			function R(z, B, j) {
				return B = S(B), B in z ? Object.defineProperty(z, B, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[B] = j, z
			}

			function S(z) {
				var B = A(z, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function A(z, B) {
				if (typeof z != "object" || z === null) return z;
				var j = z[Symbol.toPrimitive];
				if (j !== void 0) {
					var L = j.call(z, B || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(z)
			}
			var K = ({
					children: z
				}) => {
					const B = (0, o.TZ)(),
						j = (0, a.useHistory)(),
						L = (0, C.Z)(j.location.pathname),
						b = (0, o.p4)(u.dd),
						[N, O] = (0, e.useState)(!0),
						[V, J] = (0, v.j)(void 0, {
							key: g.Fj
						}),
						[$, D] = (0, v.j)(void 0, {
							key: g.s$
						}),
						k = (0, m.$8)();
					let G = new URLSearchParams(j.location.search);
					const q = (0, l.mL)(j.location.pathname, G);
					let ee = null,
						x = null;
					if (G.has(g.Tc) && G.delete(g.Tc), G.get(g.BV)) ee = G.get(g.BV), j.location.hash && (x = j.location.hash);
					else if (V) {
						const Q = new URLSearchParams(V);
						Q.get(g.BV) && (ee = Q.get(g.BV), G = Q)
					} else q && (G.set(g.BV, q), ee = q);
					if (ee && g._h.test(ee)) {
						const Q = G.getAll(g.Kt),
							ce = JSON.stringify(Q);
						Q.length && ce !== $ && D(ce), G.has(g.Tc) && G.delete(g.Tc), G.delete(g.Kt)
					}!k && V === void 0 && ee && J(G.toString());
					const te = async () => {
						try {
							if ((0, l.I3)(ee) && k && !b) {
								V && J(void 0), B.dispatch((0, f.r4)()), O(!0);
								const Q = await (0, l.py)(ee, O, B, j, L, new i(ee, q ? `${j.location.pathname}${j.location.search}` : void 0));
								G.delete(g.BV);
								const ce = G.toString();
								j.replace(I({}, j.location, {
									pathname: Q,
									search: ce
								}, x ? {
									hash: x
								} : {})), B.dispatch((0, f.WF)())
							}
						} catch (Q) {
							B.dispatch((0, f.WF)()), console.error(Q)
						} finally {
							O(!1)
						}
					};
					return (0, e.useEffect)(() => {
						te()
					}, [j.location.pathname, j.location.search, b]), (N || (0, l.I3)(ee)) && k ? null : z
				},
				Z = n("../react/app/components/DeepLink/reducer.ts"),
				W = K
		},
		"../react/app/components/DeepLink/reducer.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				E: function() {
					return l
				},
				r: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				a = n("../react/app/components/DeepLink/actions.ts");
			const l = null,
				m = o().from({
					lastAction: l,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function f(u = m, d) {
				if (d.type === a.MF.RESOLVING_COMPLETE) return m;
				if (d.type === a.MF.RESOLVING_START) return u.set("isResolving", !0);
				if (u.isResolving) {
					if (d.type === a.MF.RESOLVING_COMPLETE) return u.set("isResolving", !1);
					if (d.type === a.MF.SET_FILTERED_ACCOUNT_IDS) return u.set("filteredAccountIds", d.accountIds);
					if (d.type === a.MF.DELETE_FILTERED_ACCOUNT_IDS) return u.set("filteredAccountIds", void 0);
					{
						let y = u;
						try {
							y = u.set("lastAction", d)
						} catch {
							y = u.set("lastAction", {
								type: d.type
							})
						}
						return y
					}
				} else return u
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
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
			const e = l => l.deepLink.lastAction,
				o = l => l.deepLink.isResolving,
				a = l => l.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				I3: function() {
					return c
				},
				X1: function() {
					return r
				},
				mL: function() {
					return C
				},
				py: function() {
					return v
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../react/app/components/DeepLink/reducer.ts"),
				a = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const l = I => I.replace(a.default.endsWithSlash, ""),
				m = I => {
					const R = l(I).split("/").slice(3);
					return R.length ? "/" + R.join("/") : ""
				},
				f = I => {
					const R = l(I).split("/").slice(2);
					return R.length ? `apps/${R.join("/")}` : "apps"
				};
			var u = n("../react/app/components/DeepLink/selectors.ts"),
				d = n("../react/app/components/DeepLink/constants.ts"),
				y = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const r = I => (0, y.Lb)(I) && (I.split(".").length > 1 || (0, t.v5)(I)),
				s = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				c = I => typeof I == "string" && I.startsWith("/"),
				i = (I, R) => S => new Promise((A, H) => {
					R.start();
					const K = I.subscribe(() => {
						const Z = (0, u.yI)(I.getState());
						Z === o.E ? (R.cancel(), K(), H("DeepLink: waitForAction out of context.")) : S(Z) && (R.finish(Z.type), K(), A(Z))
					})
				}),
				E = (I, R, S) => (A, H) => new Promise((K, Z) => {
					S.start();
					const W = R.location.pathname;
					A = new URL(A, window.location.href).pathname, W !== A && (S.cancel(), Z(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${A}", but on "${W}". You need to redirect to "${A}", and unblockRouter in your Resolver, before you use this function.`));
					const z = I.subscribe(() => {
						const B = (0, u.yI)(I.getState()),
							j = R.location.pathname,
							b = new URLSearchParams(R.location.search).get(d.BV);
						(j !== A || !!b) && (S.cancel(), z(), Z(`DeepLink: waitForPageAction user navigated away from "${A}" to "${j}${b?R.location.search:""}"`)), B === o.E ? (S.cancel(), z(), Z("DeepLink: waitForPageAction out of context.")) : H(B) && (S.finish(B.type), z(), K(B))
					})
				});

			function g(I) {
				const R = [],
					S = I.split("?")[0].split("/");
				for (let A of S) A.length !== 0 && (A.startsWith(":") ? R.push({
					value: A.substring(1),
					type: "dynamic"
				}) : R.push({
					value: A,
					type: "static"
				}));
				return R
			}
			async function v(I, R, S, A, H, K) {
				K.start();
				const Z = g(I),
					z = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(7484), n.e(72775)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					B = {};
				let j = "";
				for (const [L, b] of Z.entries())
					if (b.type === "static") j = [j, b.value].join("/");
					else if (b.type === "dynamic" && s.is(b.value) && b.value in z) {
					K.resolverStart(b.value);
					const N = await z[b.value]({
						deepLink: I,
						blockRouter: () => R(!0),
						unblockRouter: () => R(!1),
						routerHistory: A,
						resolvedValues: B,
						store: S,
						referringRoute: H,
						uri: {
							currentPartIdx: L,
							parts: Z
						},
						waitForAction: i(S, K.createUserActionTracker(b.value)),
						waitForPageAction: E(S, A, K.createUserActionTracker(b.value))
					});
					K.resolverDone(b.value), j = [j, N].join("/"), B[b.value] = N
				} else throw K.cancel(), new Error(`DeepLink: Resolver with name '${b.value}' is not supported.`);
				return K.done(), j
			}

			function C(I, R) {
				const S = ":account",
					A = ":zone",
					H = R.get("zone");
				if (H) return R.delete("zone"), `/${S}/${A}/${H}`;
				const K = R.get("account");
				if (K) return R.delete("account"), `/${S}/${K}`;
				if (I === "/overview") return `/${S}/${A}`;
				if (I === "/apps") return `/${S}/${A}/${f(I)}`;
				const Z = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const W of Z) {
					const z = W.length;
					if (I.startsWith(W) && (I.length === z || I[z] === "/")) return `/${S}/${A}${I}`
				}
				switch (I) {
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
		"../react/app/components/ErrorBoundary.tsx": function(F, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				l = n("../react/app/components/SomethingWrong.jsx"),
				m = n("../utils/sentry/lastSentEventId.ts"),
				f = n("../react/utils/zaraz.ts"),
				u = n("../react/utils/url.ts");
			const d = ({
				sentryTag: y,
				children: t
			}) => o().createElement(a.SV, {
				beforeCapture: r => {
					y && r.setTag("errorBoundary", y), f.tg === null || f.tg === void 0 || f.tg.track("page-error", {
						page: (0, u.Fl)(window.location.pathname)
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
					const c = m.e.getEventId() || s;
					return o().createElement(l.Z, {
						type: "page",
						error: r,
						eventId: c
					})
				}
			}, t);
			_.Z = d
		},
		"../react/app/components/Footer.tsx": function(F, _, n) {
			"use strict";
			n.d(_, {
				Z: function() {
					return $
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				d = n.n(u),
				y = n("../react/common/components/Apple/utils.tsx"),
				t = n("../react/utils/translator.tsx"),
				r = n("../../../../node_modules/moment/moment.js"),
				s = n.n(r);
			const c = () => {
					const D = s()().format("YYYY"),
						k = G => {
							d().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: G
							})
						};
					return o().createElement(i, {
						marginTop: "auto"
					}, o().createElement(E, null, o().createElement(g, null, o().createElement(v, null, "\xA9 ", D, " Cloudflare, Inc."), o().createElement(v, null, o().createElement(C, null, o().createElement(I, {
						showOnDeskTop: !1
					}, o().createElement(R, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => k("Support")
					}, o().createElement(t.cC, {
						id: "common.support"
					}))), o().createElement(I, null, o().createElement(R, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => k("Privacy Policy")
					}, o().createElement(t.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(I, null, o().createElement(R, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => k("Terms of Use")
					}, o().createElement(t.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(I, null, o().createElement(R, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => k("Cookie Preferences")
					}, o().createElement(t.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(I, null, o().createElement(R, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => k("Trademark")
					}, o().createElement(t.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(C, null, o().createElement(I, null, o().createElement(R, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => k("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(t.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				i = (0, f.createComponent)(({
					theme: D,
					marginTop: k
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: k
				})),
				E = (0, f.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				g = (0, f.createComponent)(({
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
				v = (0, f.createComponent)(({
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
				C = (0, f.createComponent)(({
					theme: D
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: D.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				I = (0, f.createComponent)(({
					showOnDeskTop: D = !0,
					theme: k
				}) => ({
					color: k.colors.white,
					fontSize: k.fontSizes[1],
					height: "20px",
					display: D ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: k.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: k.space[3],
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
				R = (0, f.createStyledComponent)(({
					theme: D
				}) => ({
					textDecoration: "none",
					color: D.colors.white,
					"&:hover": {
						color: D.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var S = c,
				A = n("../react/pages/welcome/routes.ts"),
				H = n("../react/utils/cookiePreferences.ts"),
				K = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				Z = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				z = () => {
					const [D, k] = (0, e.useState)(!1), G = (0, H.wV)(), q = () => {
						k(!0)
					}, ee = () => {
						k(!1)
					}, x = G && G === "US" ? (0, t.ZP)("footer.cpra_cta.privacy_choices") : (0, t.ZP)("footer.cpra_cta.cookie_preferences"), te = {
						background: "transparent",
						borderRadius: "none",
						color: D ? (0, K.Yc)() ? "#ee730a" : "#003681" : (0, K.Yc)() ? "#4693ff" : "#0051c3",
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
					return o().createElement(l.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: te,
						onMouseEnter: q,
						onMouseLeave: ee
					}, o().createElement(l.Ei, {
						height: 15,
						src: Z,
						mr: 2,
						alt: x
					}), x)
				};

			function B() {
				return B = Object.assign ? Object.assign.bind() : function(D) {
					for (var k = 1; k < arguments.length; k++) {
						var G = arguments[k];
						for (var q in G) Object.prototype.hasOwnProperty.call(G, q) && (D[q] = G[q])
					}
					return D
				}, B.apply(this, arguments)
			}

			function j(D, k) {
				if (D == null) return {};
				var G = L(D, k),
					q, ee;
				if (Object.getOwnPropertySymbols) {
					var x = Object.getOwnPropertySymbols(D);
					for (ee = 0; ee < x.length; ee++) q = x[ee], !(k.indexOf(q) >= 0) && (!Object.prototype.propertyIsEnumerable.call(D, q) || (G[q] = D[q]))
				}
				return G
			}

			function L(D, k) {
				if (D == null) return {};
				var G = {},
					q = Object.keys(D),
					ee, x;
				for (x = 0; x < q.length; x++) ee = q[x], !(k.indexOf(ee) >= 0) && (G[ee] = D[ee]);
				return G
			}
			const b = 24,
				N = (0, f.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,K.Yc)()?K.rS.colors.orange[6]:K.rS.colors.blue[4]}`
					}
				}), l.A),
				O = D => {
					let {
						onClick: k
					} = D, G = j(D, ["onClick"]);
					return o().createElement(N, B({
						onClick: q => {
							d().sendEvent("navigate footer nav", {
								destinationPage: G.href
							}), k && k(q)
						}
					}, G))
				},
				V = D => {
					let {
						children: k,
						target: G,
						rel: q
					} = D, ee = j(D, ["children", "target", "rel"]);
					return o().createElement(O, B({
						target: G || "_blank",
						rel: q || "noopener noreferrer"
					}, ee), k, o().createElement(m.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				};
			var $ = () => {
				var D, k;
				const G = [A.d.root.pattern].some(q => (0, a.matchPath)(location.pathname, {
					path: q
				}));
				return (0, y.PP)() ? o().createElement(S, null) : G ? null : o().createElement(l.$_, {
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: 4,
					px: 3,
					mt: "auto"
				}, o().createElement(l.ZC, {
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
				}, (0, t.ZP)("footer.contact")), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.contact_support"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, t.ZP)("footer.contact_sales"))), o().createElement(l.Dd, {
					mt: 3
				}, o().createElement(l.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, o().createElement(O, {
					"aria-label": (0, t.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${b}px`
				}, o().createElement(m.J, {
					type: "twitter",
					size: b
				})), o().createElement(O, {
					"aria-label": (0, t.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${b}px`
				}, o().createElement(m.J, {
					type: "facebook",
					size: b
				})), o().createElement(O, {
					"aria-label": (0, t.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${b}px`
				}, o().createElement(m.J, {
					type: "linkedin",
					size: b
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
				}, (0, t.ZP)("footer.what_we_do")), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://www.cloudflare.com/plans"
				}, (0, t.ZP)("footer.plans"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://www.cloudflare.com/overview"
				}, (0, t.ZP)("footer.about"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://www.cloudflare.com/network-map"
				}, (0, t.ZP)("footer.network_map"))))), o().createElement(l.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(l.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(l.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.resources")), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://developers.cloudflare.com"
				}, (0, t.ZP)("footer.product_docs"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://blog.cloudflare.com"
				}, (0, t.ZP)("footer.blog"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, t.ZP)("footer.testimonials"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://partners.cloudflare.com"
				}, (0, t.ZP)("footer.hosting_partners"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://api.cloudflare.com"
				}, (0, t.ZP)("footer.api"))))), o().createElement(l.ZC, {
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
					title: `Current version: ${((D=window)===null||D===void 0||(k=D.build)===null||k===void 0?void 0:k.dashVersion)||"unknown"}`
				}), o().createElement(l.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(l.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.support")), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.help_center"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://community.cloudflare.com"
				}, (0, t.ZP)("footer.community"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://www.cloudflarestatus.com"
				}, (0, t.ZP)("footer.system_status"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://www.cloudflare.com/abuse"
				}, (0, t.ZP)("footer.trust_safety"))))), o().createElement(l.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(l.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(l.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.about_us")), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://www.cloudflare.com/people"
				}, (0, t.ZP)("footer.team"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://www.cloudflare.com/careers"
				}, (0, t.ZP)("footer.careers"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, t.ZP)("footer.press"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, t.ZP)("footer.tos"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, t.ZP)("footer.subs_agreement"))), o().createElement(l.Dd, {
					mb: 2
				}, o().createElement(V, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, t.ZP)("footer.privacy_policy"))))), o().createElement(z, null)))
			}
		},
		"../react/app/components/GlobalHeader/AddProductDropdown.tsx": function(F, _, n) {
			"use strict";
			n.d(_, {
				S: function() {
					return H
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = n.n(a),
				m = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				f = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				d = n.n(u),
				y = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				t = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = n("../react/utils/translator.tsx"),
				s = n("../react/common/components/ButtonWithDropdown.tsx"),
				c = n("../react/common/components/Dropdown/index.tsx"),
				i = n("../react/common/components/AccessControl/index.js");

			function E() {
				return E = Object.assign ? Object.assign.bind() : function(b) {
					for (var N = 1; N < arguments.length; N++) {
						var O = arguments[N];
						for (var V in O) Object.prototype.hasOwnProperty.call(O, V) && (b[V] = O[V])
					}
					return b
				}, E.apply(this, arguments)
			}

			function g(b, N) {
				if (b == null) return {};
				var O = v(b, N),
					V, J;
				if (Object.getOwnPropertySymbols) {
					var $ = Object.getOwnPropertySymbols(b);
					for (J = 0; J < $.length; J++) V = $[J], !(N.indexOf(V) >= 0) && (!Object.prototype.propertyIsEnumerable.call(b, V) || (O[V] = b[V]))
				}
				return O
			}

			function v(b, N) {
				if (b == null) return {};
				var O = {},
					V = Object.keys(b),
					J, $;
				for ($ = 0; $ < V.length; $++) J = V[$], !(N.indexOf(J) >= 0) && (O[J] = b[J]);
				return O
			}

			function C(b) {
				for (var N = 1; N < arguments.length; N++) {
					var O = arguments[N] != null ? Object(arguments[N]) : {},
						V = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && V.push.apply(V, Object.getOwnPropertySymbols(O).filter(function(J) {
						return Object.getOwnPropertyDescriptor(O, J).enumerable
					})), V.forEach(function(J) {
						I(b, J, O[J])
					})
				}
				return b
			}

			function I(b, N, O) {
				return N = R(N), N in b ? Object.defineProperty(b, N, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[N] = O, b
			}

			function R(b) {
				var N = S(b, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function S(b, N) {
				if (typeof b != "object" || b === null) return b;
				var O = b[Symbol.toPrimitive];
				if (O !== void 0) {
					var V = O.call(b, N || "default");
					if (typeof V != "object") return V;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(b)
			}
			const A = "GLOBAL_ADD_DROPDOWN",
				H = {
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers",
					PAGES: "add pages",
					R2: "add r2 storage",
					ACCOUNT_MEMBERS: "add account members"
				},
				K = [{
					title: o().createElement(r.cC, {
						_: "Existing domain",
						id: "onboarding.add_product.existing_domain.title"
					}),
					trackingEvent: H.EXISTING_DOMAIN,
					icon: "internet-browser",
					url: "?to=/:account/add-site",
					description: o().createElement(r.cC, {
						_: "Optimize web traffic speed and security",
						id: "onboarding.add_product.existing_domain.description"
					}),
					disableOn: "isZoneVersionLocked"
				}, {
					title: o().createElement(r.cC, {
						_: "New domain",
						id: "onboarding.add_product.new_domain.title"
					}),
					trackingEvent: H.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/domains/register",
					description: o().createElement(r.cC, {
						_: "Register domains with zero markup",
						id: "onboarding.add_product.new_domain.description"
					})
				}, {
					title: o().createElement(r.cC, {
						_: "WAF ruleset",
						id: "onboarding.add_product.waf_ruleset.title"
					}),
					trackingEvent: H.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: o().createElement(r.cC, {
						_: "Deploy custom Web App Firewall rulesets",
						id: "onboarding.add_product.waf_ruleset.description"
					})
				}, {
					title: o().createElement(r.cC, {
						_: "Workers",
						id: "common.apps.pages"
					}),
					trackingEvent: H.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: o().createElement(r.cC, {
						_: "Build serverless functions, sites, and apps",
						id: "onboarding.add_product.workers.description"
					})
				}, {
					title: o().createElement(r.cC, {
						_: "Pages",
						id: "common.apps.pages"
					}),
					trackingEvent: H.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: o().createElement(r.cC, {
						_: "Deploy websites and full-stack apps instantly",
						id: "onboarding.add_product.pages.description"
					})
				}, {
					title: o().createElement(r.cC, {
						_: "R2 storage bucket",
						id: "onboarding.add_product.r2.title"
					}),
					trackingEvent: H.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: o().createElement(r.cC, {
						_: "Store files and objects with zero egress fees",
						id: "onboarding.add_product.r2.description"
					})
				}, {
					title: o().createElement(r.cC, {
						_: "Account member",
						id: "onboarding.add_product.account_member.title"
					}),
					trackingEvent: H.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: o().createElement(r.cC, {
						_: "Invite teammates",
						id: "onboarding.add_product.account_member.description"
					}),
					permissionCheck: "#member:edit"
				}],
				Z = (0, y.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					tabletWide: {
						display: "inline-block"
					}
				})),
				W = (0, y.createStyledComponent)(({
					theme: b
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: b.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, t.Yc)() ? b.colors.gray[1] : b.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mt: 3,
					mb: 1,
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, t.Yc)() ? b.colors.gray[8] : b.colors.gray[9]
					}
				}), m.zx),
				z = (0, y.createStyledComponent)(({
					theme: b
				}) => {
					const N = {
						cursor: "pointer",
						backgroundColor: (0, t.Yc)() ? b.colors.gray[8] : b.colors.gray[9],
						color: b.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: 16,
						py: 8,
						background: b.colors.background,
						color: b.colors.gray[2],
						fontSize: b.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not(:disabled, [aria-disabled="true"])': N,
						':focus-within:not(:disabled, [aria-disabled="true"])': C({}, N, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is(:disabled, [aria-disabled="true"])': {
							color: b.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				}, a.Link),
				B = (0, y.createStyledComponent)(({
					theme: b
				}) => ({
					color: b.colors.gray[4],
					fontSize: b.fontSize[2]
				}), m.Dr),
				j = b => {
					let {
						url: N,
						icon: O,
						title: V,
						trackingEvent: J,
						description: $
					} = b, D = g(b, ["url", "icon", "title", "trackingEvent", "description"]);
					return o().createElement(z, E({
						to: N,
						onClick: () => {
							d().sendEvent(J, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, D), o().createElement(m.ZC, {
						display: "flex"
					}, o().createElement(f.J, {
						type: O,
						size: 24,
						mr: 2
					}), o().createElement(m.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(m.Dr, {
						fontSize: 3
					}, V), o().createElement(B, null, $))))
				},
				L = ({
					disableProducts: b
				}) => o().createElement(Z, {
					role: "group",
					"data-testid": A
				}, o().createElement(c.Lt, {
					trigger: o().createElement(W, null, o().createElement(f.J, {
						label: "plus",
						type: "plus"
					}), " ", o().createElement(r.cC, {
						_: "Add",
						id: ""
					}), " ", o().createElement(f.J, {
						label: "arrow",
						type: "caret-down"
					})),
					menu: o().createElement(s.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0"
					}, K.map((N, O) => N.permissionCheck ? o().createElement(i.Z, {
						edit: N.permissionCheck
					}, ({
						isEditable: V
					}) => V && o().createElement(j, E({
						disable: N.disableOn && b.includes({
							id: N.disableOn,
							value: !0
						}),
						key: O
					}, N))) : o().createElement(j, E({
						key: O
					}, N))))
				}));
			_.Z = L
		},
		"../react/app/components/LoadingSuspense.tsx": function(F, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				l = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				m = n("../react/utils/translator.tsx"),
				f = n("../react/app/components/ErrorStatus.tsx"),
				u = n("../react/common/components/EmptyPage.jsx"),
				d = n("../react/common/hooks/suspenseHelpers.ts");

			function y(s) {
				const [c, i] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const E = window.setTimeout(() => i(!0), s);
					return () => window.clearTimeout(E)
				}, []), c
			}
			const t = ({
					loadingTimeout: s = 1e3,
					stillLoadingTimeout: c = 9e3
				}) => {
					const i = y(s),
						E = y(c);
					if ((0, d.nW)(), !i && !E) return o().createElement(u.Z, null);
					const g = E ? o().createElement(m.cC, {
						id: "common.still_loading"
					}) : i ? o().createElement(m.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(f.Z, {
						size: 5
					}, o().createElement(l.ZC, {
						mr: 3
					}, o().createElement(a.g, {
						size: "2x"
					})), g)
				},
				r = ({
					children: s
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(t, null)
				}, s);
			_.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				C8: function() {
					return d
				},
				d3: function() {
					return u
				},
				dr: function() {
					return m
				},
				lt: function() {
					return f
				},
				m6: function() {
					return t
				},
				n: function() {
					return y
				},
				yl: function() {
					return l
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const a = "/persistence/user",
				l = async () => {
					try {
						return await (await e.get(a, {
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
				}, f = async (r, s) => {
					try {
						return await (await e.post(`${a}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: r,
								accountId: s
							}),
							hideErrorAlert: !0
						})).body
					} catch (c) {
						return console.error(c), []
					}
				}, u = async (r, s) => {
					try {
						return await e.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: s
							}),
							hideErrorAlert: !0
						}), !0
					} catch (c) {
						return console.error(c), !1
					}
				}, d = async r => {
					try {
						return await (await e.post(a, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (s) {
						console.error(s)
					}
				}, y = async r => {
					try {
						return await (await e.post(`${a}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (s) {
						console.error(s)
					}
				}, t = async r => {
					try {
						return await (await e.post(`${a}/viewed-changes`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (s) {
						throw console.error(s), s
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(F, _, n) {
			"use strict";
			n.d(_, {
				Wl: function() {
					return y
				},
				lp: function() {
					return g
				},
				Z_: function() {
					return C
				},
				r7: function() {
					return z
				},
				Tv: function() {
					return J
				},
				yZ: function() {
					return I
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../react/app/redux/index.ts"),
				l = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = n.n(l),
				f = n("../react/utils/bootstrap.ts"),
				u = n("../react/common/selectors/zoneSelectors.ts"),
				d = n("../react/app/components/Persistence/api.ts");
			const y = 10;

			function t($) {
				for (var D = 1; D < arguments.length; D++) {
					var k = arguments[D] != null ? Object(arguments[D]) : {},
						G = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(k).filter(function(q) {
						return Object.getOwnPropertyDescriptor(k, q).enumerable
					})), G.forEach(function(q) {
						r($, q, k[q])
					})
				}
				return $
			}

			function r($, D, k) {
				return D = s(D), D in $ ? Object.defineProperty($, D, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[D] = k, $
			}

			function s($) {
				var D = c($, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function c($, D) {
				if (typeof $ != "object" || $ === null) return $;
				var k = $[Symbol.toPrimitive];
				if (k !== void 0) {
					var G = k.call($, D || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)($)
			}
			const i = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				E = t({}, i, {
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
				g = (0, e.createContext)(E),
				v = g.Consumer,
				C = ({
					children: $,
					onDarkModeChangeCb: D
				}) => {
					const [k, G] = (0, e.useState)(i), [q, ee] = (0, e.useState)(E.isLoading), x = (0, f.$8)(), te = (0, a.p4)(ue => (0, u.wH)(ue));
					(0, e.useEffect)(() => {
						x ? (0, d.yl)().then(ue => {
							ue && (G(ue), D(ue.darkMode))
						}).finally(() => ee(!1)) : ee(!1)
					}, [x]);
					const Q = (ue, ie) => !!k.favorites.find(fe => fe.type === "zone" && fe.name === ue && fe.accountId === ie),
						ce = ue => k.favorites.filter(fe => fe.type === "zone" && fe.accountId === ue).length < y;
					return o().createElement(g.Provider, {
						value: t({}, k, {
							isLoading: q,
							actions: {
								canAccountStarZone: ce,
								isZoneStarred: Q,
								starZone: async (ue, ie) => {
									var fe;
									const Te = !Q(ue, ie),
										_e = ce(ie);
									if (Te && !_e) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Ce = await (0, d.lt)(ue, ie);
									m().sendEvent("click star zone", {
										isStarring: Te,
										totalStarredZones: Ce.filter(U => U.accountId === ie && U.type === "zone").length,
										totalZones: te == null || (fe = te.paginationData) === null || fe === void 0 ? void 0 : fe.info.total_count
									}), G(t({}, k, {
										favorites: Ce
									}))
								},
								setDarkMode: async ue => {
									const ie = await (0, d.C8)(ue);
									G(ie), D(ie.darkMode)
								},
								logRouteVisited: async ue => {
									var ie;
									const fe = await (0, d.n)(ue);
									G((ie = fe) !== null && ie !== void 0 ? ie : t({}, k))
								},
								viewChange: async ue => {
									const ie = await (0, d.m6)(ue);
									G(t({}, k, {
										viewedChanges: ie
									}))
								}
							}
						})
					}, $)
				},
				I = () => (0, e.useContext)(g);
			var R = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				S = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function A() {
				return A = Object.assign ? Object.assign.bind() : function($) {
					for (var D = 1; D < arguments.length; D++) {
						var k = arguments[D];
						for (var G in k) Object.prototype.hasOwnProperty.call(k, G) && ($[G] = k[G])
					}
					return $
				}, A.apply(this, arguments)
			}

			function H($, D) {
				if ($ == null) return {};
				var k = K($, D),
					G, q;
				if (Object.getOwnPropertySymbols) {
					var ee = Object.getOwnPropertySymbols($);
					for (q = 0; q < ee.length; q++) G = ee[q], !(D.indexOf(G) >= 0) && (!Object.prototype.propertyIsEnumerable.call($, G) || (k[G] = $[G]))
				}
				return k
			}

			function K($, D) {
				if ($ == null) return {};
				var k = {},
					G = Object.keys($),
					q, ee;
				for (ee = 0; ee < G.length; ee++) q = G[ee], !(D.indexOf(q) >= 0) && (k[q] = $[q]);
				return k
			}
			const Z = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var z = $ => {
					let {
						isStarred: D,
						size: k = 16
					} = $, G = H($, ["isStarred", "size"]);
					const q = Z[(0, R.Yc)() ? "dark" : "light"];
					return o().createElement(S.J, A({
						type: D ? "star" : "star-outline",
						color: D ? q.gold : q.gray,
						size: k
					}, G))
				},
				B = n("../../../../node_modules/@cloudflare/elements/es/index.js");

			function j($) {
				for (var D = 1; D < arguments.length; D++) {
					var k = arguments[D] != null ? Object(arguments[D]) : {},
						G = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(k).filter(function(q) {
						return Object.getOwnPropertyDescriptor(k, q).enumerable
					})), G.forEach(function(q) {
						L($, q, k[q])
					})
				}
				return $
			}

			function L($, D, k) {
				return D = b(D), D in $ ? Object.defineProperty($, D, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[D] = k, $
			}

			function b($) {
				var D = N($, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function N($, D) {
				if (typeof $ != "object" || $ === null) return $;
				var k = $[Symbol.toPrimitive];
				if (k !== void 0) {
					var G = k.call($, D || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)($)
			}
			const O = {
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
			var J = (0, e.forwardRef)(({
				featurePreview: $ = !1,
				isStarred: D,
				onClickFn: k,
				isDisabled: G,
				testId: q,
				buttonText: ee,
				size: x = "large"
			}, te) => {
				const Q = O[(0, R.Yc)() ? "dark" : "light"][D && !$ ? "active" : "default"],
					ce = j({}, x === "large" && {
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
				return o().createElement(B.zx, {
					innerRef: te,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: ce.paddingRight,
					gap: 1,
					pl: ce.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: $ || G ? "default" : "pointer",
					backgroundColor: Q.bg,
					color: Q.text,
					borderColor: Q.border,
					onClick: k,
					opacity: G ? .5 : 1,
					disabled: G,
					fontSize: ce.fontSize,
					height: ce.height,
					"data-testid": q
				}, o().createElement(z, {
					isStarred: $ ? !1 : D,
					size: ce.starIconSize
				}), ee)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(F, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/prop-types/index.js"),
				l = n.n(a),
				m = n("../../../common/intl/intl-react/src/index.ts"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = n("../node_modules/@cloudflare/component-button/es/index.js"),
				d = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				y = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				r = n.n(t),
				s = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				c = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				i = n("../react/app/components/Footer.tsx"),
				E = n("../react/utils/url.ts");

			function g(j) {
				for (var L = 1; L < arguments.length; L++) {
					var b = arguments[L] != null ? Object(arguments[L]) : {},
						N = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && N.push.apply(N, Object.getOwnPropertySymbols(b).filter(function(O) {
						return Object.getOwnPropertyDescriptor(b, O).enumerable
					})), N.forEach(function(O) {
						v(j, O, b[O])
					})
				}
				return j
			}

			function v(j, L, b) {
				return L = C(L), L in j ? Object.defineProperty(j, L, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[L] = b, j
			}

			function C(j) {
				var L = I(j, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function I(j, L) {
				if (typeof j != "object" || j === null) return j;
				var b = j[Symbol.toPrimitive];
				if (b !== void 0) {
					var N = b.call(j, L || "default");
					if (typeof N != "object") return N;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(j)
			}
			const R = (0, f.createComponent)(({
					type: j
				}) => ({
					height: j !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				S = (0, f.createComponent)(({
					theme: j,
					margin: L,
					size: b = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: j.colors.gray[3],
					height: L ? "auto" : "100%",
					padding: L ? 0 : j.space[b > 1 ? b - 2 : 0],
					margin: L,
					justifyContent: "center",
					alignItems: "center"
				})),
				A = (0, f.createComponent)(() => ({
					textAlign: "left"
				})),
				H = (0, f.createComponent)(() => ({
					textAlign: "right"
				})),
				K = (0, f.createComponent)(({
					theme: j
				}) => ({
					fontSize: j.fontSizes[6]
				})),
				Z = (0, f.createComponent)(({
					theme: j
				}) => ({
					fontSize: j.fontSizes[4]
				})),
				W = (0, f.createComponent)(({
					theme: j
				}) => ({
					fontSize: j.fontSizes[3]
				})),
				z = (0, f.createComponent)(({
					theme: j
				}) => ({
					width: "100%",
					height: 125,
					marginTop: j.space[4],
					padding: j.space[2]
				}), "textarea");
			class B extends o().Component {
				constructor(...L) {
					super(...L);
					v(this, "state", {
						value: "",
						submitted: !1
					}), v(this, "handleTextareaChange", b => {
						this.setState({
							value: b.target.value
						})
					}), v(this, "sendErrToSentry10", async () => {
						try {
							var b, N, O, V;
							const J = ((b = window) === null || b === void 0 || (N = b.bootstrap) === null || N === void 0 || (O = N.data) === null || O === void 0 || (V = O.user) === null || V === void 0 ? void 0 : V.id) || "Unknown",
								$ = this.props.eventId || d.eW(),
								D = {
									name: J,
									email: `${J}@userid.com`,
									comments: this.state.value,
									eventId: $,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: g({}, window.build)
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
						} catch (J) {
							console.error(J)
						}
					}), v(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), v(this, "renderContent", b => o().createElement(m.oc, null, N => o().createElement(R, {
						type: b
					}, o().createElement(S, null, o().createElement(A, null, o().createElement(K, null, N.t("error.internal_issues")), o().createElement(Z, null, N.t("error.help_us")), o().createElement(z, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: O => this.handleTextareaChange(O),
						disabled: this.state.submitted,
						placeholder: N.t("error.give_feedback")
					}), o().createElement(H, null, !this.state.submitted && o().createElement(u.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, N.t("common.submit")), this.state.submitted && o().createElement(W, null, N.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const L = this.props.error;
					console.error(`SomethingWrong: ${L}`), y.YA("user_feedback_form_displayed", "yes"), y.YA("normalizedPath", (0, E.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: L
					} = this.props;
					return L === "fullscreen" ? o().createElement("div", null, o().createElement(s.h4, null, o().createElement(t.Link, {
						to: "/"
					}, o().createElement(c.TR, null))), this.renderContent(L), o().createElement(i.Z, null)) : this.renderContent(L)
				}
			}
			B.propTypes = {
				type: l().oneOf(["fullscreen", "page"]),
				error: l().oneOfType([l().string, l().object]),
				eventId: l().string
			}, _.Z = B
		},
		"../react/app/redux/index.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				TZ: function() {
					return a
				},
				UM: function() {
					return m
				},
				ZS: function() {
					return l
				},
				p4: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e);
			const a = () => (0, e.useStore)(),
				l = () => a().getState(),
				m = () => (0, e.useDispatch)(),
				f = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(F, _, n) {
			"use strict";
			n.d(_, {
				P1: function() {
					return y
				},
				jQ: function() {
					return u
				},
				qR: function() {
					return t
				},
				uc: function() {
					return d
				}
			});
			var e = n("../react/pages/home/alerts/config.tsx"),
				o = n("../react/pages/workers/entityTypes.ts"),
				a = n("../react/pages/email/types.ts"),
				l = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				m = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				f = n.n(m);
			const u = m.static.from([{
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
					entityType: "speculation"
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
				d = r => r.entities,
				y = (...r) => (0, l.P1)(u, d, ...r),
				t = (0, l.QB)(u)
		},
		"../react/app/redux/utils.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				F: function() {
					return a
				},
				_: function() {
					return o
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const o = l => (m, f, u) => (0, e.SC)(m, f, u, {
					hideErrorAlert: !0
				}).catch(l),
				a = l => m => {
					if (m.status === l) return m;
					throw m
				}
		},
		"../react/common/actionTypes.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Cm: function() {
					return f
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return u
				},
				Li: function() {
					return y
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
					return l
				},
				lV: function() {
					return m
				},
				s1: function() {
					return d
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				a = "MODAL_OPEN",
				l = "MODAL_CLOSE",
				m = "TOGGLE_ON",
				f = "TOGGLE_OFF",
				u = "SET_ACTIVE",
				d = "CLEAR_ACTIVE",
				y = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(s) {
				return s.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", s.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", s.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", s.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", s.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", s.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", s.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", s.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", s.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", s
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				AX: function() {
					return s
				},
				YT: function() {
					return y
				},
				ct: function() {
					return u
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

			function a(c) {
				for (var i = 1; i < arguments.length; i++) {
					var E = arguments[i] != null ? Object(arguments[i]) : {},
						g = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(E).filter(function(v) {
						return Object.getOwnPropertyDescriptor(E, v).enumerable
					})), g.forEach(function(v) {
						l(c, v, E[v])
					})
				}
				return c
			}

			function l(c, i, E) {
				return i = m(i), i in c ? Object.defineProperty(c, i, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = E, c
			}

			function m(c) {
				var i = f(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function f(c, i) {
				if (typeof c != "object" || c === null) return c;
				var E = c[Symbol.toPrimitive];
				if (E !== void 0) {
					var g = E.call(c, i || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}
			const u = c => {
					const i = c.payload.map(E => a({}, E, {
						membershipId: E.id,
						id: E.account.id
					}));
					return a({}, c, {
						payload: i
					})
				},
				d = c => {
					const i = u(c);
					return Array.isArray(i.payload) ? a({}, c, {
						payload: i.payload[0]
					}) : a({}, c, {
						payload: null
					})
				},
				y = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", u),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...c) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: c
				}),
				s = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", d)
		},
		"../react/common/actions/modalActions.ts": function(F, _, n) {
			"use strict";
			n.r(_), n.d(_, {
				closeModal: function() {
					return l
				},
				openModal: function() {
					return a
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function a(m, f, u = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: m,
						props: f
					},
					options: u
				}
			}

			function l(m) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: m
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				IH: function() {
					return m
				},
				Vp: function() {
					return f
				},
				ZK: function() {
					return d
				},
				um: function() {
					return u
				},
				vU: function() {
					return y
				}
			});
			var e = n("../react/common/actionTypes.ts");

			function o(t) {
				return {
					type: e.Ng,
					notification: t
				}
			}

			function a(t) {
				return {
					type: e.Cz,
					notificationId: t
				}
			}
			let l = 0;

			function m(t, r, s = {}) {
				return s = s || {},
					function(c) {
						let i = l++,
							E = {
								id: i,
								type: t,
								message: r,
								delay: s.delay,
								persist: s.persist === void 0 ? !1 : s.persist,
								closable: s.closable === void 0 ? !0 : s.closable,
								onClose() {
									c(a(i)), s.onClose && s.onClose.apply(null, arguments)
								}
							};
						c(o(E))
					}
			}

			function f(t, r) {
				return m("success", t, r)
			}

			function u(t, r) {
				return m("info", t, r)
			}

			function d(t, r) {
				return m("warning", t, r)
			}

			function y(t, r) {
				return m("error", t, r)
			}
		},
		"../react/common/actions/userActions.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				BT: function() {
					return u
				},
				Ut: function() {
					return v
				},
				V_: function() {
					return C
				},
				Y9: function() {
					return E
				},
				Z0: function() {
					return R
				},
				mp: function() {
					return g
				},
				r3: function() {
					return I
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/app/redux/utils.ts");

			function a(S) {
				for (var A = 1; A < arguments.length; A++) {
					var H = arguments[A] != null ? Object(arguments[A]) : {},
						K = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && K.push.apply(K, Object.getOwnPropertySymbols(H).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(H, Z).enumerable
					})), K.forEach(function(Z) {
						l(S, Z, H[Z])
					})
				}
				return S
			}

			function l(S, A, H) {
				return A = m(A), A in S ? Object.defineProperty(S, A, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[A] = H, S
			}

			function m(S) {
				var A = f(S, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function f(S, A) {
				if (typeof S != "object" || S === null) return S;
				var H = S[Symbol.toPrimitive];
				if (H !== void 0) {
					var K = H.call(S, A || "default");
					if (typeof K != "object") return K;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(S)
			}
			const u = (0, e.C)("user").get`/user`,
				d = (0, e.C)("user").patch`/user`,
				y = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				s = (0, e.C)("user").put`/user/two_factor_authentication`,
				c = (0, e.C)("user").delete`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/email`;

			function E(...S) {
				return i(...S)
			}
			const g = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				v = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(S => a({}, S, {
					body: a({}, S.body, {
						result: {}
					})
				}))),
				C = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				I = (0, e.C)("userDetails").get`/user/details`,
				R = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(F, _, n) {
			"use strict";
			n.d(_, {
				a: function() {
					return l
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e),
				a = n("../react/common/selectors/accountSelectors.ts");
			const l = f => {
					if (typeof f != "string") throw new Error("invalid Param Type provided");
					const u = f.slice(1).split(":");
					if (u.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: u[0],
						value: u[1]
					}
				},
				m = (f, u) => {
					const {
						resourceId: d,
						accountId: y,
						legacyPermission: t
					} = u;
					let {
						read: r,
						edit: s
					} = u;
					const c = {};
					t && (s = `#${t}:edit`, r = `#${t}:read`);
					const i = d || y;
					if (r) {
						const E = Array.isArray(r) ? r : [r];
						c.isReadable = E.some(g => {
							const v = l(g);
							return (0, a.DT)(f, i, C => !!(C[v.key] && C[v.key][v.value]))
						})
					}
					if (s) {
						const E = Array.isArray(s) ? s : [s];
						c.isEditable = E.some(g => {
							const v = l(g);
							return (0, a.DT)(f, i, C => !!(C[v.key] && C[v.key][v.value]))
						})
					}
					return c
				};
			_.Z = (0, e.connect)(m)
		},
		"../react/common/components/AccessControl/index.js": function(F, _, n) {
			"use strict";
			var e = n("../../../../node_modules/prop-types/index.js"),
				o = n.n(e),
				a = n("../react/app/HoCs/withEntities.tsx"),
				l = n("../react/common/components/AccessControl/SAAConnect.js");

			function m(r) {
				for (var s = 1; s < arguments.length; s++) {
					var c = arguments[s] != null ? Object(arguments[s]) : {},
						i = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(c).filter(function(E) {
						return Object.getOwnPropertyDescriptor(c, E).enumerable
					})), i.forEach(function(E) {
						f(r, E, c[E])
					})
				}
				return r
			}

			function f(r, s, c) {
				return s = u(s), s in r ? Object.defineProperty(r, s, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = c, r
			}

			function u(r) {
				var s = d(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function d(r, s) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var i = c.call(r, s || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}

			function y(r) {
				const c = ["isReadable", "isEditable"].reduce((i, E) => r.hasOwnProperty(E) ? m({}, i, {
					[E]: r[E]
				}) : i, {});
				return r.children(c)
			}
			y.propTypes = {
				resourceType: o().string,
				resourceId: o().string,
				read: o().oneOfType([o().string, o().array]),
				edit: o().oneOfType([o().string, o().array]),
				accountId: o().string,
				isReadable: o().bool,
				isEditable: o().bool,
				children: o().func
			};
			const t = (0, a.Z)((0, l.Z)(y));
			t.displayName = "AccessControl", _.Z = t
		},
		"../react/common/components/Apple/utils.tsx": function(F, _, n) {
			"use strict";
			n.d(_, {
				PP: function() {
					return r
				},
				RJ: function() {
					return u
				},
				tz: function() {
					return s
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				l = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				m = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const f = () => d.test(window.location.pathname) || a.E.has(l.Qq),
				u = () => a.E.get(l.Qq),
				d = /^\/login\/apple(\/)?/,
				t = [d, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let c = !1;
					t.forEach(E => {
						if (E.test(window.location.pathname)) {
							c = !0;
							return
						}
					});
					const i = f() && c;
					return i && (0, m.C8)(m.LF.OFF), i
				},
				s = c => {
					c && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let i = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					c && (i = i + `&jwt=${c}`), window.location.href = i
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(F, _, n) {
			"use strict";
			n.d(_, {
				oG: function() {
					return s
				},
				v2: function() {
					return u.v2
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../node_modules/@cloudflare/component-button/es/index.js"),
				l = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				m = n("../../../common/intl/intl-react/src/index.ts"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = n("../react/common/components/Dropdown/index.tsx");

			function d() {
				return d = Object.assign ? Object.assign.bind() : function(c) {
					for (var i = 1; i < arguments.length; i++) {
						var E = arguments[i];
						for (var g in E) Object.prototype.hasOwnProperty.call(E, g) && (c[g] = E[g])
					}
					return c
				}, d.apply(this, arguments)
			}

			function y(c, i) {
				if (c == null) return {};
				var E = t(c, i),
					g, v;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(c);
					for (v = 0; v < C.length; v++) g = C[v], !(i.indexOf(g) >= 0) && (!Object.prototype.propertyIsEnumerable.call(c, g) || (E[g] = c[g]))
				}
				return E
			}

			function t(c, i) {
				if (c == null) return {};
				var E = {},
					g = Object.keys(c),
					v, C;
				for (C = 0; C < g.length; C++) v = g[C], !(i.indexOf(v) >= 0) && (E[v] = c[v]);
				return E
			}
			const r = (0, f.createStyledComponent)(({
				theme: c
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${c.radii[2]}px 0 0 ${c.radii[2]}px`,
					borderRight: `1px solid ${c.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${c.radii[2]}px ${c.radii[2]}px 0`,
					paddingRight: c.space[2],
					paddingLeft: c.space[2]
				}
			}));

			function s(c) {
				let {
					menu: i,
					containerProps: E,
					disabled: g,
					disabledDropdown: v = g
				} = c, C = y(c, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: I
				} = (0, m.QT)();
				return o().createElement(r, d({}, E, {
					role: "group"
				}), o().createElement(a.zx, d({}, C, {
					disabled: g
				})), o().createElement(u.Lt, {
					trigger: o().createElement(a.zx, {
						type: C.type,
						"aria-haspopup": "menu",
						disabled: v
					}, o().createElement(l.J, {
						type: "caret-down",
						label: I("common.more"),
						size: 12
					})),
					menu: i
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(F, _, n) {
			"use strict";
			n.d(_, {
				v: function() {
					return u
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				l = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				m = n("../react/common/hooks/useIntersectionObserver.ts");

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(d) {
					for (var y = 1; y < arguments.length; y++) {
						var t = arguments[y];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (d[r] = t[r])
					}
					return d
				}, f.apply(this, arguments)
			}

			function u(d) {
				const y = (0, e.useRef)(null),
					[t, r] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const c = y.current;
					if (c) {
						const {
							bottom: i
						} = c.getBoundingClientRect();
						i > window.innerHeight && r(!0)
					}
				}, []);
				const s = (0, m.S)(c => {
					for (const i of c) i.intersectionRatio < 1 && r(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const c = y.current;
					if (c && s) return s.observe(c), () => {
						s.unobserve(c)
					}
				}, [s]), o().createElement(a.ZC, f({
					role: "menu",
					innerRef: y,
					position: "absolute",
					right: "0",
					backgroundColor: l.rS.colors.background,
					p: 1,
					color: "gray.4",
					border: "1px solid",
					borderColor: "gray.8",
					boxShadow: "rgba(0, 0, 0, 0.025) -1px 2px 1px 1px, rgba(0, 0, 0, 0.05) -3px 3px 7px 0px",
					borderRadius: 2,
					textAlign: "left",
					whiteSpace: "nowrap",
					overflow: "hidden"
				}, t ? {
					bottom: "100%",
					mb: "2px"
				} : {
					top: "100%",
					mt: "2px"
				}, {
					zIndex: 1e3,
					minWidth: 170
				}, d))
			}
		},
		"../react/common/components/Dropdown/MenuItem.tsx": function(F, _, n) {
			"use strict";
			n.d(_, {
				s: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				m = n.n(l);

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(v) {
					for (var C = 1; C < arguments.length; C++) {
						var I = arguments[C];
						for (var R in I) Object.prototype.hasOwnProperty.call(I, R) && (v[R] = I[R])
					}
					return v
				}, f.apply(this, arguments)
			}

			function u(v, C) {
				if (v == null) return {};
				var I = d(v, C),
					R, S;
				if (Object.getOwnPropertySymbols) {
					var A = Object.getOwnPropertySymbols(v);
					for (S = 0; S < A.length; S++) R = A[S], !(C.indexOf(R) >= 0) && (!Object.prototype.propertyIsEnumerable.call(v, R) || (I[R] = v[R]))
				}
				return I
			}

			function d(v, C) {
				if (v == null) return {};
				var I = {},
					R = Object.keys(v),
					S, A;
				for (A = 0; A < R.length; A++) S = R[A], !(C.indexOf(S) >= 0) && (I[S] = v[S]);
				return I
			}

			function y(v) {
				for (var C = 1; C < arguments.length; C++) {
					var I = arguments[C] != null ? Object(arguments[C]) : {},
						R = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(I).filter(function(S) {
						return Object.getOwnPropertyDescriptor(I, S).enumerable
					})), R.forEach(function(S) {
						t(v, S, I[S])
					})
				}
				return v
			}

			function t(v, C, I) {
				return C = r(C), C in v ? Object.defineProperty(v, C, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[C] = I, v
			}

			function r(v) {
				var C = s(v, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function s(v, C) {
				if (typeof v != "object" || v === null) return v;
				var I = v[Symbol.toPrimitive];
				if (I !== void 0) {
					var R = I.call(v, C || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(v)
			}
			const c = ({
					theme: v
				}) => {
					const C = {
						cursor: "pointer",
						background: v.colors.gray[9],
						color: v.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: v.space[2],
						background: v.colors.background,
						color: v.colors.gray[3],
						fontSize: v.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						'&:hover:not(:disabled, [aria-disabled="true"])': C,
						'&:focus-within:not(:disabled, [aria-disabled="true"])': y({}, C, {
							boxShadow: "none",
							borderRadius: 0
						}),
						'&:is(:disabled, [aria-disabled="true"])': {
							color: v.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				i = (0, a.createComponent)(c, "a"),
				E = (0, a.createComponent)(c, "button");

			function g(v) {
				let {
					disabled: C = !1
				} = v, I = u(v, ["disabled"]);
				const R = (0, l.useHistory)(),
					S = {
						role: "menuitem"
					};
				if ("href" in I && typeof I.href == "string") return o().createElement(i, f({
					"aria-disabled": C
				}, S, I, {
					href: C ? void 0 : I.href,
					onClick: H => {
						var K;
						if (C) return H.stopPropagation();
						H.preventDefault(), (K = I.onClick) === null || K === void 0 || K.call(I, H), R.push(I.href)
					}
				}));
				var A;
				return o().createElement(E, f({
					type: (A = I.type) !== null && A !== void 0 ? A : "button"
				}, S, I, {
					disabled: C
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(F, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/prop-types/index.js"),
				l = n.n(a),
				m = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const f = ({
				children: u
			}) => o().createElement(m.xu, {
				height: 411
			}, u);
			f.propTypes = {
				children: l().node
			}, _.Z = f
		},
		"../react/common/components/ModalManager.tsx": function(F, _, n) {
			"use strict";
			n.d(_, {
				ZP: function() {
					return i
				},
				dd: function() {
					return s
				},
				vR: function() {
					return r
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("webpack/sharing/consume/default/react-redux/react-redux");
			const l = E => E.application.modals;
			var m = n("../react/common/actions/modalActions.ts"),
				f = n("../../../../node_modules/swr/core/dist/index.mjs"),
				u = n("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function d() {
				return d = Object.assign ? Object.assign.bind() : function(E) {
					for (var g = 1; g < arguments.length; g++) {
						var v = arguments[g];
						for (var C in v) Object.prototype.hasOwnProperty.call(v, C) && (E[C] = v[C])
					}
					return E
				}, d.apply(this, arguments)
			}
			const y = o().createContext(null);
			class t extends o().Component {
				render() {
					const {
						modals: g,
						closeModal: v
					} = this.props;
					return o().createElement(o().Fragment, null, g.map(({
						ModalComponent: C,
						props: I = {},
						id: R
					}) => {
						const S = () => {
							typeof I.onClose == "function" && I.onClose(), v(C)
						};
						return o().createElement(y.Provider, {
							key: R,
							value: {
								closeModal: S
							}
						}, o().createElement(f.J$, {
							value: u.ZP
						}, o().createElement(C, d({}, I, {
							isOpen: !0,
							closeModal: S
						}))))
					}))
				}
			}

			function r() {
				const E = o().useContext(y);
				if (!E) throw new Error("useModalContext must be used within a ModalContext");
				return E
			}

			function s() {
				const E = (0, a.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...g) {
						return E(m.openModal(...g))
					}, [E]),
					closeModal: (0, e.useCallback)(function(...g) {
						return E(m.closeModal(...g))
					}, [E])
				}
			}
			var i = (0, a.connect)(E => ({
				modals: l(E)
			}), m)(t)
		},
		"../react/common/constants/billing/index.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Gq: function() {
					return l
				},
				g$: function() {
					return a
				},
				WX: function() {
					return e
				},
				E0: function() {
					return y
				},
				Hw: function() {
					return f
				},
				Ed: function() {
					return m
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return c
				},
				hQ: function() {
					return u
				},
				SP: function() {
					return d
				}
			});
			let e = function(i) {
				return i.page_rules = "page_rules", i.automatic_platform_optimization = "automatic_platform_optimization", i
			}({});
			const o = "page_rules",
				a = "automatic_platform_optimization",
				l = {
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
				f = {
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
				d = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					ubb_frequency: 1e3,
					ubb_storage_price: 5,
					ubb_streaming_price: 1,
					ubb_unit: "minute"
				},
				y = {
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
			const c = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				FP: function() {
					return e
				},
				Nl: function() {
					return m
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
				l = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				m = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Dk: function() {
					return c
				},
				Dy: function() {
					return i
				},
				E_: function() {
					return f
				},
				K$: function() {
					return C
				},
				Lv: function() {
					return E
				},
				S4: function() {
					return m
				},
				UM: function() {
					return t
				},
				Xf: function() {
					return y
				},
				Y1: function() {
					return u
				},
				p6: function() {
					return d
				},
				q0: function() {
					return l
				},
				rg: function() {
					return g
				},
				sJ: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const l = "healthy",
				m = "degraded",
				f = "critical",
				u = "unknown",
				d = "not-monitored",
				y = o().from({
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
					f: y.FREE,
					p: y.PRO,
					b: y.BIZ
				},
				s = "marketing-pt",
				c = () => {
					const I = a.Z.get(s);
					if (!!I) return r[I]
				},
				i = ["gov"],
				E = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				g = "banner-notification-interactions",
				v = null;
			let C = function(I) {
				return I.SUPER_ADMIN = "Super Administrator - All Privileges", I.ADMIN = "Administrator", I.ADMIN_READ_ONLY = "Administrator Read Only", I
			}({})
		},
		"../react/common/constants/index.ts": function(F, _, n) {
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
		"../react/common/hooks/suspenseHelpers.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				bt: function() {
					return u
				},
				nW: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const l = "suspenseComplete";

			function m() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(l))
				}, [])
			}

			function f(d) {
				(0, a.OR)(l, () => {
					window.setTimeout(d, 0)
				}, {
					target: window
				})
			}

			function u(...d) {
				const [y, t] = d;
				o().useLayoutEffect(y, t), f(y)
			}
		},
		"../react/common/hooks/useCachedState.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				j: function() {
					return l
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function l(m, {
				key: f,
				cache: u = a.E
			} = {}) {
				const d = f !== void 0 && u.get(f),
					[y, t] = (0, e.useState)(d || m);
				return [y, s => {
					t(c => (s instanceof Function && (s = s(c)), f !== void 0 && u.set(f, s), s))
				}]
			}
		},
		"../react/common/hooks/useClickOutside.ts": function(F, _, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");

			function o(a, l) {
				(0, e.OR)("click", m => {
					var f;
					m.target instanceof Node && m.target.isConnected && ((f = a.current) === null || f === void 0 ? void 0 : f.contains(m.target)) === !1 && l(m)
				}, {
					capture: !0
				})
			}
			_.Z = o
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				S: function() {
					return a
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function a(l, {
				root: m,
				rootMargin: f,
				threshold: u
			} = {}) {
				const d = (0, e.useRef)(null);

				function y() {
					return d.current === null && (d.current = new IntersectionObserver(l, {
						root: m,
						rootMargin: f,
						threshold: u
					})), d.current
				}
				return (0, e.useEffect)(() => (d.current = new IntersectionObserver(l, {
					root: m,
					rootMargin: f,
					threshold: u
				}), () => {
					var t;
					(t = d.current) === null || t === void 0 || t.disconnect()
				}), [l, m, f, u]), y()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(F, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function a(l) {
				const m = (0, e.useRef)(l);
				return (0, e.useEffect)(() => {
					m.current = l
				}, [l]), m.current
			}
			_.Z = a
		},
		"../react/common/middleware/sparrow/errors.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Uh: function() {
					return m
				},
				ez: function() {
					return l
				},
				oV: function() {
					return f
				}
			});

			function e(u, d, y) {
				return d = o(d), d in u ? Object.defineProperty(u, d, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[d] = y, u
			}

			function o(u) {
				var d = a(u, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function a(u, d) {
				if (typeof u != "object" || u === null) return u;
				var y = u[Symbol.toPrimitive];
				if (y !== void 0) {
					var t = y.call(u, d || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(u)
			}
			class l extends Error {
				constructor(d, y) {
					super(y);
					e(this, "eventName", void 0), this.eventName = d, this.name = "SparrowValidationError"
				}
			}
			class m extends l {
				constructor(d) {
					super(d, `Event not allowed: "${d}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class f extends l {
				constructor(d, y) {
					super(d, `Found invalid properties on event: "${d}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = y
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				AC: function() {
					return Be
				},
				Au: function() {
					return T
				},
				B: function() {
					return Re
				},
				B3: function() {
					return Me
				},
				BG: function() {
					return K
				},
				Bp: function() {
					return ze
				},
				D0: function() {
					return R
				},
				DT: function() {
					return Q
				},
				EL: function() {
					return q
				},
				GE: function() {
					return We
				},
				Ko: function() {
					return te
				},
				Kx: function() {
					return z
				},
				Le: function() {
					return B
				},
				O4: function() {
					return je
				},
				Ou: function() {
					return D
				},
				Py: function() {
					return Fe
				},
				QI: function() {
					return Ue
				},
				RO: function() {
					return pe
				},
				T3: function() {
					return we
				},
				T8: function() {
					return H
				},
				UX: function() {
					return G
				},
				VP: function() {
					return ve
				},
				Xo: function() {
					return $e
				},
				Xu: function() {
					return V
				},
				Yi: function() {
					return Ve
				},
				Yj: function() {
					return x
				},
				Zu: function() {
					return ee
				},
				bC: function() {
					return ie
				},
				f8: function() {
					return b
				},
				hN: function() {
					return W
				},
				hX: function() {
					return Se
				},
				iq: function() {
					return De
				},
				nE: function() {
					return Z
				},
				oD: function() {
					return k
				},
				oI: function() {
					return L
				},
				oJ: function() {
					return ne
				},
				uF: function() {
					return J
				},
				ut: function() {
					return Le
				},
				vU: function() {
					return Ae
				},
				wQ: function() {
					return _e
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				o = n("../../../../node_modules/lodash/get.js"),
				a = n.n(o),
				l = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				m = n.n(l),
				f = n("../../../../node_modules/reselect/lib/index.js"),
				u = n("../../../../node_modules/moment/moment.js"),
				d = n.n(u),
				y = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				r = n("../react/common/selectors/userSelectors.ts"),
				s = n("../react/common/selectors/entitlementsSelectors.ts"),
				c = n("../react/app/components/DeepLink/selectors.ts"),
				i = n("../react/common/constants/index.ts"),
				E = n("../react/common/utils/hasRole.ts");

			function g(h) {
				for (var w = 1; w < arguments.length; w++) {
					var Y = arguments[w] != null ? Object(arguments[w]) : {},
						oe = Object.keys(Y);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(Y).filter(function(se) {
						return Object.getOwnPropertyDescriptor(Y, se).enumerable
					})), oe.forEach(function(se) {
						v(h, se, Y[se])
					})
				}
				return h
			}

			function v(h, w, Y) {
				return w = C(w), w in h ? Object.defineProperty(h, w, {
					value: Y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[w] = Y, h
			}

			function C(h) {
				var w = I(h, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function I(h, w) {
				if (typeof h != "object" || h === null) return h;
				var Y = h[Symbol.toPrimitive];
				if (Y !== void 0) {
					var oe = Y.call(h, w || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(h)
			}
			const R = h => {
					const w = J(h);
					return w == null ? void 0 : w.account
				},
				S = h => {
					const w = (0, r.PR)(h);
					if (w) {
						const Y = w.id;
						return h.accountAccess[Y] || {}
					}
					return {}
				},
				A = h => h.accountsDetailed,
				H = (0, t.P1)("accountsDetailed", A),
				K = h => h.memberships,
				Z = (0, f.P1)((0, t.P1)("memberships", K), c.U, (h, w) => !!w && !!h ? h.filter(Y => w.includes(Y.id)) : h),
				W = h => h.accountFlags && h.accountFlags.data,
				z = h => h.accountFlags,
				B = (h, w, Y) => {
					const oe = W(h);
					return !oe || !oe[w] ? null : oe[w][Y]
				},
				j = h => h.accountFlags.isRequesting,
				L = (h, ...w) => a()(h, ["accountFlagsChanges", "data", ...w]),
				b = h => h.accountFlagsChanges.isRequesting,
				N = (0, f.P1)(W, z, (h, w) => ({
					data: h,
					meta: w
				})),
				O = (h, w, Y) => !!(isEnterpriseSSEnabledSelector(h) && B(h, w, Y)),
				V = h => h.membership,
				J = (0, t.P1)("membership", V),
				$ = (0, f.P1)(J, V, (h, w) => ({
					data: h,
					meta: w
				})),
				D = h => {
					const {
						roles: w = []
					} = J(h) || {};
					return Boolean(w.find(Y => Y === "Super Administrator - All Privileges" || Y === "Billing"))
				},
				k = h => {
					const w = S(h),
						Y = be.getMemberships(h) ? m().asMutable(be.getMemberships(h)) : [];
					if (!!Y) return m().from(Y.map(oe => g({}, oe, {
						lastSeen: w[oe.account.id] ? w[oe.account.id].lastSeen : null
					})).sort((oe, se) => oe.lastSeen && se.lastSeen ? se.lastSeen - oe.lastSeen : 0))
				},
				G = h => h.filteredMemberships,
				q = (0, t.P1)("filteredMemberships", G),
				ee = (0, f.P1)(J, h => h == null ? void 0 : h.permissions),
				x = (0, f.P1)(ee, h => (0, e.Z)(w => {
					var Y;
					return (Y = h == null ? void 0 : h[w]) !== null && Y !== void 0 ? Y : {
						read: !1,
						edit: !1
					}
				})),
				te = (0, f.P1)(J, h => h == null ? void 0 : h.policies),
				Q = (h, w, Y) => {
					let oe = be.getMembership(h);
					if (!oe) {
						const se = be.getMemberships(h);
						if (!se || !w) return !1;
						oe = se.find(me => me.account.id === w)
					}
					if (!oe || !Y) return !1;
					try {
						return Y(oe.permissions)
					} catch {
						return !1
					}
				},
				ce = h => {
					var w, Y;
					return (w = (Y = R(h)) === null || Y === void 0 ? void 0 : Y.meta.has_pro_zones) !== null && w !== void 0 ? w : !1
				},
				ue = h => {
					var w, Y;
					return (w = (Y = R(h)) === null || Y === void 0 ? void 0 : Y.meta.has_business_zones) !== null && w !== void 0 ? w : !1
				},
				ie = h => ue(h) || ce(h),
				fe = (h, w) => {
					const Y = Te(h, w);
					return !!Y && !!Y.enabled
				},
				Te = (h, w) => {
					const Y = be.getMembership(h),
						oe = Y && Y.account;
					return oe && oe.legacy_flags && oe.legacy_flags[w]
				},
				_e = h => fe(h, "custom_pages"),
				Ce = h => !!h && h["webhooks.webhooks.enabled"],
				U = h => B(h, "bots", "enabled"),
				ae = h => B(h, "billing", "annual_subscriptions_enable"),
				pe = h => h ? Boolean(B(h, "ConstellationAI", "v2_ui")) : !1,
				Se = h => h ? Boolean(B(h, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Re = h => h ? Boolean(B(h, "AIgateway", "enabled")) : !1,
				ke = h => Te(h, "enterprise_zone_quota"),
				xe = h => {
					const w = ke(h);
					return !w || !w.available ? -1 : w.available
				},
				De = h => h.accountMembers,
				Me = (0, t.P1)("accountMembers", De),
				je = h => h.accountMember && h.accountMember.isRequesting,
				Ne = h => h.accountRoles,
				Be = (0, t.P1)("accountRoles", Ne),
				Fe = (h, w) => {
					const Y = be.getMemberships(h),
						oe = Y && Y.find(ye => ye.account.id === w);
					if (oe) return oe.account.name.replace(" Account", " account");
					const se = be.getMembership(h),
						me = se && se.account;
					return me && me.id === w ? me.name : null
				},
				Le = (h, w) => {
					const Y = be.getMemberships(h),
						oe = Y && Y.find(ye => ye.account.id === w);
					if (oe) return oe.account.settings.access_approval_expiry;
					const se = be.getMembership(h),
						me = se && se.account;
					return me && me.id === w ? me.settings.access_approval_expiry : null
				},
				$e = (h, w) => {
					const Y = Le(h, w);
					return Y ? d().utc(Y).isAfter() : !1
				},
				we = (h, w, Y) => {
					const oe = Le(h, w);
					let se = oe ? d().utc(oe) : null;
					return !se || !se.isAfter() ? "" : se && se.year() === 3e3 ? Y("account.access_approval.card_expiration_forever") : Y("account.access_approval.card_expiration_text", {
						expiryTimestamp: se.local().format(y.U.DateTime)
					})
				},
				ne = h => h && h.member && h.member.edit,
				T = (h, w) => {
					const Y = be.getMembership(h),
						oe = Y && Y.account;
					return oe ? oe.id !== w : !1
				},
				M = h => h.dpa,
				X = (0, t.P1)("dpa", M),
				le = h => h.webhook,
				ge = h => h.webhooks,
				Ee = (0, t.P1)("webhook", ge),
				ve = h => h.accountLegoContract,
				Ie = (0, t.P1)("accountLegoContract", ve),
				Ue = h => {
					const w = Ie(h);
					return (w == null ? void 0 : w.lego_state) ? w.lego_state : ""
				},
				Ze = h => Ue(h) === "signed",
				We = h => ve(h).isRequesting,
				Ae = h => {
					const w = Ie(h);
					return w && w.subscription_type ? w.subscription_type : ""
				},
				Pe = h => Ae(h) !== "",
				be = {
					getMembership: J,
					getMemberships: Z,
					getFilteredMemberships: q,
					getAccountMembers: Me,
					getAccountRoles: Be
				},
				ze = h => h.accountSingle,
				Ve = (0, t.P1)("accountSingle", ze),
				Qe = h => {
					const w = [ROLES.SUPER_ADMIN, ROLES.ADMIN];
					return hasRole(h, w)
				}
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				$f: function() {
					return i
				},
				AD: function() {
					return m
				},
				BF: function() {
					return c
				},
				Bs: function() {
					return R
				},
				Ci: function() {
					return x
				},
				E6: function() {
					return s
				},
				Hq: function() {
					return _e
				},
				Ms: function() {
					return H
				},
				Q2: function() {
					return f
				},
				Td: function() {
					return C
				},
				Z: function() {
					return ce
				},
				a: function() {
					return I
				},
				a5: function() {
					return ie
				},
				du: function() {
					return d
				},
				ec: function() {
					return b
				},
				f: function() {
					return Te
				},
				hL: function() {
					return ue
				},
				ji: function() {
					return te
				},
				jo: function() {
					return K
				},
				k4: function() {
					return fe
				},
				lI: function() {
					return l
				},
				p1: function() {
					return g
				},
				pK: function() {
					return Ce
				},
				pf: function() {
					return t
				},
				qR: function() {
					return v
				},
				rV: function() {
					return u
				},
				u1: function() {
					return y
				},
				w4: function() {
					return r
				},
				yD: function() {
					return Q
				}
			});
			var e = n("../react/utils/url.ts");

			function o(U, ae) {
				return U && U[ae]
			}
			const a = U => !l(U).isRequesting;

			function l(U) {
				return U.entitlements.zone
			}

			function m(U) {
				return l(U).data
			}
			const f = U => {
				var ae, pe;
				return ((ae = l(U).paginationData) === null || ae === void 0 || (pe = ae.options) === null || pe === void 0 ? void 0 : pe.editedDate) || {}
			};

			function u(U, ae) {
				const pe = m(U);
				return pe ? o(pe, ae) : void 0
			}
			const d = (U, ae) => u(U, ae) === !0;

			function y(U) {
				return U.entitlements.account
			}

			function t(U) {
				return y(U).data
			}
			const r = U => {
				var ae, pe;
				return ((ae = y(U).paginationData) === null || ae === void 0 || (pe = ae.options) === null || pe === void 0 ? void 0 : pe.editedDate) || {}
			};

			function s(U) {
				return !y(U).isRequesting
			}

			function c(U, ae) {
				const pe = t(U);
				return pe ? o(pe, ae) : void 0
			}

			function i(U, ae) {
				return c(U, ae) === !0
			}

			function E(U, ae) {
				return ae.every(pe => i(U, pe))
			}

			function g(U) {
				return i(U, "contract.customer_enabled")
			}

			function v(U) {
				return i(U, "contract.self_service_allowed")
			}

			function C(U) {
				return i(U, "billing.partners_managed")
			}
			const I = U => g(U) && v(U),
				R = U => i(U, "enterprise.ecp_allowed");

			function S(U) {
				return A(U) || i(U, "argo.allow_smart_routing") || i(U, "argo.allow_tiered_caching") || i(U, "rate_limiting.enabled") || i(U, "ctm.enabled") || i(U, "workers.enabled") || i(U, "workers.kv_store.enabled") || i(U, "stream.enabled")
			}
			const A = U => d(U, "argo.allow_smart_routing") || d(U, "argo.allow_tiered_caching"),
				H = U => i(U, "zone.cname_setup_allowed") || i(U, "zone.partial_setup_allowed") || d(U, "zone.partial_setup_allowed"),
				K = U => i(U, "argo.allow_smart_routing") || d(U, "argo.allow_smart_routing"),
				Z = U => i(U, "argo.allow_tiered_caching") || d(U, "argo.allow_tiered_caching"),
				W = U => K(U) || Z(U),
				z = U => i(U, "ctm.enabled"),
				B = U => {
					const ae = c(U, "ctm.load_balancers");
					return typeof ae == "number" ? ae : 0
				},
				j = U => {
					const ae = c(U, "ctm.pools");
					return typeof ae == "number" ? ae : 0
				},
				L = U => {
					const ae = c(U, "ctm.origins");
					return typeof ae == "number" ? ae : 0
				},
				b = U => i(U, "workers.enabled"),
				N = U => i(U, "stream.enabled"),
				O = U => {
					const ae = c(U, "access.users_allowed");
					return typeof ae == "number" ? ae : 0
				},
				V = U => O(U) > 0,
				J = U => {
					const ae = u(U, "dedicated_certificates");
					return typeof ae == "number" ? ae : 0
				},
				$ = U => J(U) > 0,
				D = U => {
					const ae = u(U, "rate_limiting.max_rules");
					return typeof ae == "number" ? ae : 0
				},
				k = U => i(U, "rate_limiting.enabled"),
				G = U => {
					const ae = u(U, "page_rules");
					return typeof ae == "number" ? ae : 0
				},
				q = U => G(U) > 0,
				ee = U => {
					const ae = c(U, "dns_firewall.max_clusters_allowed");
					return typeof ae == "number" ? ae : 0
				},
				x = U => ee(U) > 0,
				te = U => d(U, "zone.advanced_certificate_manager") || i(U, "zone.advanced_certificate_manager"),
				Q = U => u(U, "authoritative_dns.proxy_record_allowed") === !1 || c(U, "authoritative_dns.proxy_record_allowed") === !1,
				ce = U => i(U, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				ue = U => u(U, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				ie = U => {
					const ae = u(U, "authoritative_dns.min_record_ttl_allowed");
					return typeof ae == "number" && ae > 1 ? ae : 60
				},
				fe = U => i(U, "foundation_dns.advanced_nameservers_allowed") || d(U, "foundation_dns.advanced_nameservers_allowed"),
				Te = (U, ae) => ((0, e.el)(window.location.pathname) ? u : c)(U, ae),
				_e = U => i(U, "authoritative_dns.multi_provider_allowed") || d(U, "authoritative_dns.multi_provider_allowed"),
				Ce = U => i(U, "secondary_dns.secondary_overrides") || d(U, "secondary_dns.secondary_overrides")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				r: function() {
					return l
				},
				v: function() {
					return m
				}
			});
			var e = n("../react/utils/i18n.ts"),
				o = n("../../../common/intl/intl-types/src/index.ts"),
				a = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const l = f => {
				const u = f.userCommPreferences.data;
				if (u == null ? void 0 : u["language-locale"]) return a.Z.set(e.ly, u["language-locale"]), u["language-locale"];
				{
					a.Z.has(e.ly) || a.Z.set(e.ly, e.ZW);
					const d = a.Z.get(e.ly);
					return m(d) ? d : e.ZW
				}
			};

			function m(f) {
				const u = Object.keys(o.Q).find(d => o.Q[d] === f);
				return !!f && typeof f == "string" && u != null && (0, e.S8)(!1, u)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				$8: function() {
					return m
				},
				BG: function() {
					return y
				},
				BY: function() {
					return I
				},
				GP: function() {
					return i
				},
				GU: function() {
					return R
				},
				PR: function() {
					return a
				},
				h$: function() {
					return v
				},
				h8: function() {
					return t
				},
				kk: function() {
					return g
				},
				l8: function() {
					return u
				},
				mV: function() {
					return E
				},
				vW: function() {
					return f
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const o = S => S.user,
				a = (0, e.P1)("user", o),
				l = S => {
					var A;
					return (A = a(S)) === null || A === void 0 ? void 0 : A.email.endsWith("@cloudflare.com")
				},
				m = S => {
					var A;
					return !!((A = a(S)) === null || A === void 0 ? void 0 : A.id)
				},
				f = S => {
					const A = a(S);
					if (!!A) return A.first_name && A.last_name ? `${A.first_name} ${A.last_name}` : A.email
				},
				u = S => {
					const A = a(S);
					return A && A.has_enterprise_zones
				},
				d = S => S.userCommPreferences,
				y = (0, e.P1)("userCommPreferences", d),
				t = S => {
					const A = a(S);
					return A && A.email_verified
				},
				r = S => {
					const A = y(S);
					return A && A.preferences.marketing_communication
				},
				s = S => S.userDetails,
				c = (0, e.P1)("userDetails", s),
				i = S => {
					const A = c(S);
					return A && A["2FA-RECOVERY"] === "scheduled"
				},
				E = S => {
					const A = c(S);
					return A && A["2FA-RECOVERY"] === "interrupted"
				},
				g = S => {
					const A = c(S);
					return A == null ? void 0 : A["NEW-USER-EMAIL"]
				},
				v = S => S.gates.assignments,
				C = (S, A) => S && S[A];

			function I(S, A) {
				const H = v(S);
				return H ? C(H, A) : void 0
			}
			const R = (S, A) => I(S, A) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				$4: function() {
					return H
				},
				$t: function() {
					return Fe
				},
				A4: function() {
					return g
				},
				Cu: function() {
					return v
				},
				DQ: function() {
					return fe
				},
				Ej: function() {
					return Z
				},
				FH: function() {
					return I
				},
				ID: function() {
					return k
				},
				Ko: function() {
					return Se
				},
				Le: function() {
					return Ce
				},
				Ly: function() {
					return ee
				},
				M3: function() {
					return Me
				},
				N8: function() {
					return De
				},
				NY: function() {
					return ce
				},
				Ns: function() {
					return q
				},
				Ox: function() {
					return we
				},
				P4: function() {
					return W
				},
				RO: function() {
					return $
				},
				SX: function() {
					return ue
				},
				Tr: function() {
					return pe
				},
				U: function() {
					return C
				},
				Ug: function() {
					return S
				},
				V6: function() {
					return je
				},
				WR: function() {
					return ne
				},
				Xg: function() {
					return E
				},
				ZB: function() {
					return _e
				},
				_y: function() {
					return G
				},
				cU: function() {
					return Re
				},
				cg: function() {
					return ie
				},
				d2: function() {
					return N
				},
				jN: function() {
					return B
				},
				jg: function() {
					return te
				},
				kC: function() {
					return K
				},
				kf: function() {
					return Ne
				},
				ko: function() {
					return J
				},
				mK: function() {
					return Le
				},
				nA: function() {
					return i
				},
				oY: function() {
					return z
				},
				qM: function() {
					return U
				},
				rq: function() {
					return Q
				},
				tS: function() {
					return A
				},
				tU: function() {
					return L
				},
				vB: function() {
					return $e
				},
				vM: function() {
					return j
				},
				wH: function() {
					return R
				},
				wn: function() {
					return Te
				},
				xU: function() {
					return b
				},
				xw: function() {
					return ae
				},
				z5: function() {
					return D
				},
				zO: function() {
					return ke
				},
				zW: function() {
					return Be
				},
				zh: function() {
					return O
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				o = n("../react/app/redux/normalizer.js"),
				a = n("../../../../node_modules/lodash/get.js"),
				l = n.n(a),
				m = n("../../../../node_modules/moment/moment.js"),
				f = n.n(m),
				u = n("../react/common/constants/billing/index.ts");

			function d(T) {
				for (var M = 1; M < arguments.length; M++) {
					var X = arguments[M] != null ? Object(arguments[M]) : {},
						le = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(X).filter(function(ge) {
						return Object.getOwnPropertyDescriptor(X, ge).enumerable
					})), le.forEach(function(ge) {
						y(T, ge, X[ge])
					})
				}
				return T
			}

			function y(T, M, X) {
				return M = t(M), M in T ? Object.defineProperty(T, M, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[M] = X, T
			}

			function t(T) {
				var M = r(T, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function r(T, M) {
				if (typeof T != "object" || T === null) return T;
				var X = T[Symbol.toPrimitive];
				if (X !== void 0) {
					var le = X.call(T, M || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(T)
			}
			const s = (0, o.P1)("zone", T => T.zone),
				c = T => {
					var M;
					return (M = T.zoneVersioning) === null || M === void 0 ? void 0 : M.zoneVersionSelector
				},
				i = (0, e.P1)(s, c, (T, M) => {
					var X, le, ge;
					let Ee;
					if (Array.isArray(T) && T.length === 1 ? Ee = T[0] : T && !Array.isArray(T) && (Ee = T), !Ee) return;
					const ve = !!(M == null ? void 0 : M.enabled);
					return d({}, Ee, Ee.name && {
						name: ve ? M.rootZoneName : Ee.name
					}, {
						versioning: {
							enabled: ve,
							isRoot: !((X = Ee.name) === null || X === void 0 ? void 0 : X.endsWith(".config.cfdata.org")),
							version: ve ? M.selectedVersion : 0,
							rootZoneId: ve ? M.rootZoneId : (le = (ge = Ee) === null || ge === void 0 ? void 0 : ge.id) !== null && le !== void 0 ? le : ""
						}
					})
				}),
				E = T => T.zone,
				g = (0, e.P1)(i, E, (T, M) => ({
					data: T,
					meta: M
				})),
				v = T => {
					var M, X;
					return (M = (X = i(T)) === null || X === void 0 ? void 0 : X.id) !== null && M !== void 0 ? M : ""
				},
				C = T => T.zones,
				I = T => T.zonesRoot,
				R = T => T.zonesAccount,
				S = (0, o.P1)("zones", C),
				A = (0, o.P1)("zonesRoot", I),
				H = (0, o.P1)("zonesAccount", R);

			function K(T) {
				const M = i(T);
				return M ? M.created_on : null
			}

			function Z(T, M, X) {
				const le = K(T);
				if (!le) return;
				const ge = f().duration(M, X),
					Ee = new Date(le),
					ve = new Date(new Date().getTime() - ge.asMilliseconds());
				return Ee.getTime() > ve.getTime()
			}

			function W(T) {
				const M = i(T);
				return M ? M.status : null
			}

			function z(T) {
				const M = i(T);
				return M ? M.type : null
			}

			function B(T) {
				return T.plan_pending ? T.plan_pending : T.plan
			}

			function j(T) {
				const M = i(T);
				if (!M) return;
				const X = B(M);
				return X && X.legacy_id
			}

			function L(T, M) {
				const X = B(T);
				return !!X && u.Gs.indexOf(X.legacy_id) >= u.Gs.indexOf(M)
			}

			function b(T) {
				return !!T && T.status === "initializing"
			}

			function N(T) {
				return !!T && T.status === "pending"
			}

			function O(T) {
				return !!T && T.status === "active"
			}

			function V(T, M) {
				if (!T) return !1;
				const X = B(T);
				return !!X && X.legacy_id === M
			}

			function J(T) {
				return V(T, "enterprise")
			}
			const $ = T => J(i(T));

			function D(T) {
				return V(T, "business")
			}
			const k = T => D(i(T));

			function G(T) {
				return V(T, "pro")
			}

			function q(T) {
				return V(T, "free")
			}

			function ee(T) {
				return !J(T)
			}

			function x(T) {
				return T && T.owner
			}

			function te(T, M) {
				const X = x(M);
				return !!X && X.type === "user" && X.id === T.id
			}

			function Q(T) {
				const M = i(T);
				return !!M && M.type === "partial"
			}

			function ce(T) {
				const M = i(T);
				return !!M && M.type === "secondary"
			}

			function ue(T) {
				const M = i(T);
				return M && Q(T) && M.host
			}
			const ie = T => {
					var M;
					const X = i(T);
					return !!(X == null ? void 0 : X.host) && !!((M = X.plan) === null || M === void 0 ? void 0 : M.externally_managed)
				},
				fe = T => {
					const M = S(T);
					return M && M.some(J)
				},
				Te = (T, M) => {
					const X = i(T);
					return X && X.betas ? X.betas.includes(M) : !1
				},
				_e = (T, ...M) => l()(T, ["zoneFlags", "data", ...M]),
				Ce = (T, ...M) => l()(T, ["accountFlags", "data", ...M]),
				U = T => T.accountFlags.isRequesting,
				ae = T => T.zoneFlags.isRequesting,
				pe = (T, ...M) => l()(T, ["zoneFlagsChanges", "data", ...M]),
				Se = T => T.zoneFlagsChanges.isRequesting,
				Re = T => T.zoneFlags && T.zoneFlags.data,
				ke = T => T.zoneFlags,
				xe = (0, e.P1)(Re, ke, (T, M) => ({
					data: T,
					meta: M
				})),
				De = (0, o.P1)("abuseUrls", T => T.overview.abuseUrls),
				Me = T => {
					const M = i(T);
					return M ? `/${M.account.id}/${M.name}` : null
				},
				je = T => T.zoneMarketingCampaigns,
				Ne = T => T.overview.zoneBlocks.data,
				Be = T => T.overview.zoneBlocks.isRequesting,
				Fe = T => T.overview.zoneBlocks.hasData,
				Le = T => {
					var M, X;
					return (T == null || (M = T.overview.zoneBlocks) === null || M === void 0 || (X = M.paginationData) === null || X === void 0 ? void 0 : X.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				$e = T => T.overview.zoneBlocksReview.isRequesting,
				we = T => T.overview.zoneHold,
				ne = (0, o.P1)("zoneHold", we)
		},
		"../react/common/utils/formatDate.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			_.Z = (o, a, l = !1) => (0, e.p6)(o, a, l)
		},
		"../react/common/utils/hasRole.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				n: function() {
					return o
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts");
			const o = (a, l) => {
				const {
					roles: m = []
				} = (0, e.uF)(a) || {};
				return l.some(f => m.includes(f))
			}
		},
		"../react/common/utils/isGuards.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Q$: function() {
					return a
				},
				t: function() {
					return f
				},
				v5: function() {
					return l
				},
				zE: function() {
					return m
				}
			});
			var e = n("../react/common/constants/index.ts"),
				o = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const a = u => u ? ["page", "per_page", "count", "total_count"].every(y => y in u && u[y]) : !1,
				l = (u = "") => e.Dy.includes(u.toLowerCase()),
				m = u => u !== null && typeof u == "object" && "name" in u && "size" in u && "type" in u && typeof u.slice == "function",
				f = u => (0, o.Z)(u)
		},
		"../react/common/validators/index.js": function(F, _, n) {
			"use strict";
			n.d(_, {
				K2: function() {
					return o
				},
				Lb: function() {
					return a
				},
				XI: function() {
					return l
				},
				bK: function() {
					return d
				},
				jk: function() {
					return u
				},
				wb: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = y => /^https?:\/\/(.*)/.test(y),
				a = y => e.default.hostname.test(y),
				l = y => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(y),
				m = y => /^[!-~]+$/.test(y),
				f = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				u = y => f.test(y),
				d = y => !!y && !!y.length && /^[ -~]+$/.test(y)
		},
		"../react/initReact.tsx": function(F, _, n) {
			"use strict";
			n.d(_, {
				o: function() {
					return Qe
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = n("webpack/sharing/consume/default/react-dom/react-dom"),
				m = n("webpack/sharing/consume/default/react-redux/react-redux"),
				f = n("../../../../node_modules/swr/core/dist/index.mjs"),
				u = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				d = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				y = n("../react/shims/focus-visible.js"),
				t = n("../react/app/components/DeepLink/index.ts"),
				r = n("../react/utils/history.ts"),
				s = n("../react/app/providers/storeContainer.js"),
				c = n("../../../../node_modules/prop-types/index.js"),
				i = n.n(c),
				E = n("../react/common/selectors/languagePreferenceSelector.ts"),
				g = n("../react/utils/translator.tsx"),
				v = n("../../../common/intl/intl-react/src/index.ts"),
				C = n("../../../dash/intl/intl-translations/src/index.ts"),
				I = n("../node_modules/query-string/query-string.js"),
				R = n.n(I),
				S = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				A = n("../react/common/actions/userActions.ts"),
				H = n("../react/common/selectors/userSelectors.ts"),
				K = n("../react/utils/i18n.ts"),
				Z = n("../react/utils/bootstrap.ts");

			function W(h) {
				for (var w = 1; w < arguments.length; w++) {
					var Y = arguments[w] != null ? Object(arguments[w]) : {},
						oe = Object.keys(Y);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(Y).filter(function(se) {
						return Object.getOwnPropertyDescriptor(Y, se).enumerable
					})), oe.forEach(function(se) {
						z(h, se, Y[se])
					})
				}
				return h
			}

			function z(h, w, Y) {
				return w = B(w), w in h ? Object.defineProperty(h, w, {
					value: Y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[w] = Y, h
			}

			function B(h) {
				var w = j(h, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function j(h, w) {
				if (typeof h != "object" || h === null) return h;
				var Y = h[Symbol.toPrimitive];
				if (Y !== void 0) {
					var oe = Y.call(h, w || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(h)
			}
			let L = R().parse(location.search);
			const b = h => {
					const w = (0, Z.$8)() ? [(0, C.Fy)(C.if.changes), (0, C.Fy)(C.if.common), (0, C.Fy)(C.if.navigation), (0, C.Fy)(C.if.overview), (0, C.Fy)(C.if.onboarding), (0, C.Fy)(C.if.invite), (0, C.Fy)(C.if.login), (0, C.Fy)(C.if.dns), (0, C.Fy)(C.n4.ssl_tls), (0, C.Fy)(C.if.message_inbox)] : [(0, C.Fy)(C.if.common), (0, C.Fy)(C.if.invite), (0, C.Fy)(C.if.login), (0, C.Fy)(C.if.onboarding)];
					L.lang ? N(h) : S.Z.get(K.th) && O(h, S.Z.get(K.ly));
					const Y = async oe => (await Promise.all(w.map(me => me(oe)))).reduce((me, ye) => W({}, me, ye), {});
					return o().createElement(v.RD.Provider, {
						value: h.languagePreference
					}, o().createElement(v.bd, {
						translator: g.Vb,
						locale: h.languagePreference
					}, o().createElement(v.lm, {
						loadPhrases: Y
					}, h.children)))
				},
				N = async h => {
					let w = L.lang.substring(0, L.lang.length - 2) + L.lang.substring(L.lang.length - 2, L.lang.length).toUpperCase();
					if (!(0, E.v)(w)) {
						console.warn(`${w} is not a supported locale.`), delete L.lang, h.history.replace({
							search: R().stringify(L)
						});
						return
					}
					S.Z.set(K.ly, w), delete L.lang, O(h, w), h.isAuthenticated || h.history.replace({
						search: R().stringify(L)
					})
				}, O = async (h, w) => {
					if (h.isAuthenticated) try {
						await h.setUserCommPreferences({
							"language-locale": w
						}, {
							hideErrorAlert: !0
						}), S.Z.remove(K.th), h.history.replace({
							search: R().stringify(L)
						})
					} catch (Y) {
						S.Z.set(K.th, !0), console.error(Y)
					} else S.Z.set(K.th, !0)
				}, V = h => {
					const w = (0, H.PR)(h);
					return {
						isAuthenticated: !!(w && w.id),
						languagePreference: S.Z.get(K.ly) || (0, E.r)(h)
					}
				}, J = {
					setUserCommPreferences: A.V_
				};
			var $ = (0, a.withRouter)((0, m.connect)(V, J)(b));
			b.propTypes = {
				history: i().object,
				languagePreference: i().string.isRequired,
				children: i().node.isRequired,
				isAuthenticated: i().bool,
				setUserCommPreferences: i().func.isRequired
			};
			var D = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				k = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				G = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let q;
			const ee = ({
				selectorPrefix: h = "c_"
			} = {}) => (q || (q = (0, G.Z)({
				dev: !1,
				selectorPrefix: h
			})), q);
			var x = n("../react/common/components/ModalManager.tsx"),
				te = n("../react/app/components/ErrorBoundary.tsx"),
				Q = n("../react/common/actions/notificationsActions.ts");
			const ue = (n.g.bootstrap || {}).data || {};
			class ie extends o().Component {
				componentDidMount() {
					ue.messages && this.dispatchNotificationActions(ue.messages)
				}
				dispatchNotificationActions(w) {
					w.forEach(Y => {
						const {
							type: oe,
							message: se,
							persist: me
						} = Y;
						["success", "info", "warn", "error"].includes(oe) && this.props.notifyAdd(oe, (0, g.ZP)(se), {
							persist: !!me
						})
					})
				}
				render() {
					return null
				}
			}
			var Te = (0, a.withRouter)((0, m.connect)(null, {
				notifyAdd: Q.IH
			})(ie));
			ie.propTypes = {
				notifyAdd: i().func.isRequired
			};
			var _e = n("../react/app/redux/index.ts"),
				Ce = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function U() {
				var h;
				const w = (0, _e.p4)(H.PR),
					Y = (w == null || (h = w.email) === null || h === void 0 ? void 0 : h.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					oe = (0, Ce.Yc)();
				(0, e.useEffect)(() => {
					oe({
						userType: Y
					})
				}, [Y, oe])
			}
			var ae = n("../react/common/selectors/entitlementsSelectors.ts"),
				pe = n("../react/common/selectors/accountSelectors.ts"),
				Se = n("../react/utils/url.ts");
			const Re = ["accountId", "is_ent"];

			function ke() {
				const h = (0, Ce.f7)(),
					w = (0, a.useHistory)(),
					Y = (0, Se.uW)(w.location.pathname),
					oe = (0, Ce.Yc)(),
					se = (0, Ce.O$)(),
					me = (0, _e.p4)(ae.u1),
					ye = !me.isRequesting && !!me.data,
					Ke = (0, _e.p4)(ae.p1),
					Je = (0, _e.p4)(pe.Xu),
					He = (0, _e.p4)(pe.uF),
					Xe = !Je.isRequesting && !!Je.data;
				(0, e.useEffect)(() => {
					Y && Xe && He && ye && Y === He.account.id ? oe({
						accountId: He.account.id,
						is_ent: Ke
					}) : (!Y || Y in h && h.accountId !== Y) && se(Re)
				}, [Xe, He, oe, se, ye, Ke, Y, h])
			}
			var xe = n("../react/common/selectors/zoneSelectors.ts");

			function De() {
				const h = (0, _e.p4)(xe.nA),
					w = (0, Ce.Yc)();
				(0, e.useEffect)(() => {
					var Y;
					w({
						zone_id: h == null ? void 0 : h.id,
						zone_plan: h == null || (Y = h.plan) === null || Y === void 0 ? void 0 : Y.legacy_id
					})
				}, [h, w])
			}
			const Me = () => (U(), ke(), De(), null);
			var je = n("../react/app/components/Persistence/index.tsx"),
				Ne = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				Be = n("../react/app/components/LoadingSuspense.tsx");
			const Fe = o().lazy(() => Promise.all([n.e(78042), n.e(2480), n.e(10008), n.e(56310), n.e(80496), n.e(48155), n.e(94012), n.e(72019), n.e(6464), n.e(5668), n.e(35650), n.e(7484), n.e(39760), n.e(94684), n.e(82465), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var $e = () => o().createElement(Be.Z, null, o().createElement(Fe, null)),
				we = n("../libs/init/loading.ts");
			const ne = () => (e.useEffect(() => we.s, []), null);
			var T = n("../../../../node_modules/moment/moment.js"),
				M = n.n(T);
			const X = h => {
					switch (h) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return h.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return h.toLowerCase();
						default:
							return "en"
					}
				},
				le = () => {
					const h = (0, _e.p4)(E.r);
					(0, e.useEffect)(() => {
						const w = X(h);
						w !== M().locale() && M().locale(w), document.documentElement.lang = h
					}, [h])
				},
				ge = () => {
					(0, e.useEffect)(() => {
						async function h() {
							var w, Y;
							let oe;
							if (((w = window) === null || w === void 0 || (Y = w.build) === null || Y === void 0 ? void 0 : Y.isPreviewDeploy) && (oe = "cookie"), !!oe) try {
								const se = document.head.querySelector("link[rel=icon]");
								se && (se.href = (await n("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${oe}.ico`)).default)
							} catch {}
						}
						h()
					}, [])
				};
			var Ee = n("../react/common/constants/constants.ts");
			const ve = () => {
					var h;
					const w = (0, a.useLocation)(),
						[Y, oe] = (0, e.useState)(((h = window) === null || h === void 0 ? void 0 : h.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, e.useEffect)(() => {
						const se = R().parse(w.search);
						if (se.pt && S.Z.set(Ee.sJ, se.pt), se == null ? void 0 : se.devPanel) {
							var me, ye;
							(me = window) === null || me === void 0 || (ye = me.localStorage) === null || ye === void 0 || ye.setItem("gates_devtools_ui_gates_controller_enabled", "true"), oe(!0)
						}
					}, [w.search]), {
						devPanelEnabled: Y
					}
				},
				Ie = o().lazy(() => Promise.all([n.e(78042), n.e(2480), n.e(10008), n.e(56310), n.e(80496), n.e(48155), n.e(94012), n.e(72019), n.e(6464), n.e(14696), n.e(88650), n.e(35650), n.e(7484), n.e(39760), n.e(94684), n.e(82465), n.e(32209), n.e(91984), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				Ue = o().lazy(() => Promise.all([n.e(83741), n.e(65447), n.e(78042), n.e(48155), n.e(14696), n.e(26337), n.e(94684), n.e(69088), n.e(91984), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var We = ({
					userIsAuthed: h
				}) => {
					le(), ge();
					const {
						devPanelEnabled: w
					} = ve();
					return o().createElement(e.Suspense, {
						fallback: o().createElement(ne, null)
					}, o().createElement(a.Switch, null, !h && !0 && o().createElement(a.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, o().createElement(Ue, null)), o().createElement(a.Route, {
						render: () => o().createElement(Ne.ZC, {
							minHeight: "100vh"
						}, o().createElement(Ie, null))
					})), w && o().createElement($e, null))
				},
				Ae = n("../../../../node_modules/yup/es/index.js"),
				Pe = n("../../../common/util/types/src/utils/index.ts");
			const be = {
				cfEmail: () => Ae.Z_().email((0, g.ZP)("common.validation.email")).required((0, g.ZP)("common.validation.email"))
			};
			(0, Pe.Yd)(be).forEach(h => {
				Ae.kM(Ae.Z_, h, be[h])
			});
			const ze = o().lazy(() => Promise.all([n.e(6368), n.e(10008), n.e(94012), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				Ve = () => {
					const h = (0, Z.$8)(),
						[w, Y] = (0, e.useState)(h ? ze : o().Fragment),
						[oe, se] = (0, e.useState)((0, k.Yc)());
					(0, e.useEffect)(() => {
						(0, k.fF)(() => se((0, k.Yc)()))
					}, []);
					const me = ye => {
						se(ye), (0, k.C8)(ye)
					};
					return (0, e.useEffect)(() => {
						Y(h ? ze : o().Fragment)
					}, [h]), (0, e.useEffect)(() => {
						const ye = () => me(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", ye), () => {
							window.removeEventListener("storage", ye)
						}
					}, []), o().createElement(e.Suspense, {
						fallback: null
					}, o().createElement(m.Provider, {
						store: (0, s.bh)()
					}, o().createElement(a.Router, {
						history: r.Z
					}, o().createElement(w, null, o().createElement(D.Z, {
						renderer: ee()
					}, o().createElement($, null, o().createElement(te.Z, {
						sentryTag: "Root"
					}, o().createElement(f.J$, {
						value: {
							fetcher: ye => fetch(ye).then(Ke => Ke.json())
						}
					}, o().createElement(Me, null), o().createElement(Te, null), o().createElement(je.Z_, {
						onDarkModeChangeCb: me
					}, o().createElement(t.ZP, null, o().createElement(We, {
						userIsAuthed: h
					}))), o().createElement(x.ZP, null), o().createElement(u.F0, null)))))))))
				},
				Qe = () => {
					(0, l.render)(o().createElement(Ve, null), document.getElementById("react-app"))
				}
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Jz: function() {
					return y
				},
				OK: function() {
					return m
				},
				_Y: function() {
					return u
				},
				fD: function() {
					return r
				},
				h_: function() {
					return d
				},
				w6: function() {
					return s
				},
				yc: function() {
					return t
				}
			});

			function e(i) {
				for (var E = 1; E < arguments.length; E++) {
					var g = arguments[E] != null ? Object(arguments[E]) : {},
						v = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(g).filter(function(C) {
						return Object.getOwnPropertyDescriptor(g, C).enumerable
					})), v.forEach(function(C) {
						o(i, C, g[C])
					})
				}
				return i
			}

			function o(i, E, g) {
				return E = a(E), E in i ? Object.defineProperty(i, E, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[E] = g, i
			}

			function a(i) {
				var E = l(i, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function l(i, E) {
				if (typeof i != "object" || i === null) return i;
				var g = i[Symbol.toPrimitive];
				if (g !== void 0) {
					var v = g.call(i, E || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(i)
			}
			let m = function(i) {
					return i.Sending = "sending", i.Success = "success", i.Failed = "failed", i.Latent = "latent", i
				}({}),
				f = function(i) {
					return i[i.Success = 200] = "Success", i[i.BadRequest = 400] = "BadRequest", i
				}({});
			const u = {
					status: m.Latent,
					statusCode: void 0
				},
				d = {
					status: m.Sending
				},
				y = {
					status: m.Success,
					statusCode: f.Success
				},
				t = {
					status: m.Failed,
					statusCode: f.BadRequest
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
				c = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Ux: function() {
					return r
				},
				cz: function() {
					return c
				},
				im: function() {
					return u
				},
				pG: function() {
					return s
				},
				t$: function() {
					return i
				}
			});
			var e = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(g) {
				for (var v = 1; v < arguments.length; v++) {
					var C = arguments[v] != null ? Object(arguments[v]) : {},
						I = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(C).filter(function(R) {
						return Object.getOwnPropertyDescriptor(C, R).enumerable
					})), I.forEach(function(R) {
						a(g, R, C[R])
					})
				}
				return g
			}

			function a(g, v, C) {
				return v = l(v), v in g ? Object.defineProperty(g, v, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[v] = C, g
			}

			function l(g) {
				var v = m(g, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function m(g, v) {
				if (typeof g != "object" || g === null) return g;
				var C = g[Symbol.toPrimitive];
				if (C !== void 0) {
					var I = C.call(g, v || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(g)
			}
			const f = g => g.test(window.location.hostname),
				u = () => f(e.j9),
				d = () => f(MARKETPLACE_LOCAL_URL_REGEXP),
				y = (g, v) => {
					const C = random(0, 1) ? -1 : 1;
					return g.points === v.points || g.points >= APP_POINTS_THRESHOLD && v.points >= APP_POINTS_THRESHOLD ? C : g.points < 0 || v.points < 0 || g.points >= APP_POINTS_THRESHOLD || v.points >= APP_POINTS_THRESHOLD ? v.points - g.points : C
				},
				t = (g, v, C) => {
					const I = get(v, C),
						R = get(g, C);
					return I && !isEqual(I, R)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (g, v) => v.map(C => g.find(I => I.id === C)),
						addAppVersionInfo: (g, v) => o({}, v, {
							currentVersion: v.versions.find(C => C.tag === g.versionTag),
							latestVersion: v.versions.find(C => C.tag === v.infoVersion)
						}),
						addCurrentSiteInstall: (g, v) => o({}, v, {
							currentSiteInstall: g.find(C => C.appId === v.id)
						})
					}
				},
				s = (g, v, C) => o({}, g, v, C ? {
					value: C
				} : {}),
				c = g => g.map(v => v.status),
				i = g => g.apps ? g.apps : g,
				E = g => {
					let v = ["by-cloudflare"];
					return g.filter(C => !v.includes(C.id) && C.visible).sort((C, I) => C.points < I.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(F, _, n) {
			"use strict";
			n.r(_), n.d(_, {
				categorySlugTranslationKey: function() {
					return m
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return l
				},
				translations: function() {
					return a
				}
			});
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: a,
				namespace: l
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

			function m(f) {
				const u = f.replace(/-/g, "_");
				return Object.keys(o).includes(u) ? u : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				L: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/url-join/lib/url-join.js"),
				o = n.n(e),
				a = n("../../../../node_modules/lodash-es/defaults.js"),
				l = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function m(c) {
				for (var i = 1; i < arguments.length; i++) {
					var E = arguments[i] != null ? Object(arguments[i]) : {},
						g = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(E).filter(function(v) {
						return Object.getOwnPropertyDescriptor(E, v).enumerable
					})), g.forEach(function(v) {
						d(c, v, E[v])
					})
				}
				return c
			}

			function f(c, i) {
				if (c == null) return {};
				var E = u(c, i),
					g, v;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(c);
					for (v = 0; v < C.length; v++) g = C[v], !(i.indexOf(g) >= 0) && (!Object.prototype.propertyIsEnumerable.call(c, g) || (E[g] = c[g]))
				}
				return E
			}

			function u(c, i) {
				if (c == null) return {};
				var E = {},
					g = Object.keys(c),
					v, C;
				for (C = 0; C < g.length; C++) v = g[C], !(i.indexOf(v) >= 0) && (E[v] = c[v]);
				return E
			}

			function d(c, i, E) {
				return i = y(i), i in c ? Object.defineProperty(c, i, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = E, c
			}

			function y(c) {
				var i = t(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function t(c, i) {
				if (typeof c != "object" || c === null) return c;
				var E = c[Symbol.toPrimitive];
				if (E !== void 0) {
					var g = E.call(c, i || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}
			class r {
				constructor(i) {
					d(this, "token", void 0), d(this, "options", void 0), d(this, "setAuthHeader", E => {
						this.token = E
					}), this.token = "", this.options = (0, a.Z)(i, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(i = "GET", E, g = {}) {
					const {
						body: v
					} = g, C = f(g, ["body"]);
					return fetch(o()(this.options.baseUrl, E), m({
						method: i
					}, C, v ? {
						body: JSON.stringify(v)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(m({
							Accept: "application/json, text/plain, */*"
						}, g.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(i, E = {}) {
					const g = await this.request("GET", i, E);
					return this.parseJSONResponse(g)
				}
				async postJSON(i, E = {}) {
					const g = await this.request("POST", i, m({}, E, {
						headers: m({}, E.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(g)
				}
				parseJSONResponse(i) {
					return i.json()
				}
			}
			d(r, "defaults", {
				baseUrl: (0, l.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const s = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				JX: function() {
					return y
				},
				Jb: function() {
					return r
				},
				RX: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/lodash-es/upperFirst.js"),
				o = n("../../../../node_modules/lodash-es/isEmpty.js"),
				a = n("../node_modules/query-string/query-string.js"),
				l = n.n(a),
				m = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				f = n("../react/pages/apps/marketplace/requests/Requester.ts"),
				u = n("../react/pages/apps/marketplace/libraries/resource.ts");

			function* d(i, E, g, v) {
				const C = (0, e.Z)(E),
					[I, R, S] = [`get${C}Sending`, `get${C}Success`, `get${C}Failed`];
				try {
					yield(0, m.gz)(i[I]());
					const A = yield(0, m.RE)(s, g);
					let H = A;
					if (H.error) {
						yield(0, m.gz)(i[S]());
						return
					}
					return v && (H = yield v(A)), yield(0, m.gz)(i[R](H)), H
				} catch {
					yield(0, m.gz)(i[S]())
				}
			}

			function* y(i, E, g, v) {
				const C = (0, e.Z)(E),
					I = `get${C}Sending`,
					R = `get${C}Success`,
					S = `get${C}Failed`;
				try {
					yield(0, m.gz)(i[I]());
					const A = yield(0, m.RE)(c, {
						url: g,
						data: v
					});
					return yield(0, m.gz)(i[R](A)), A
				} catch {
					yield(0, m.gz)(i[S]())
				}
			}
			const t = i => (0, o.Z)(i) ? "" : `?${a.stringify(i)}`,
				r = {
					app: new u.c({
						name: "app",
						url: (i, E) => `apps/${i}${t(E)}`
					}),
					apps: new u.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new u.c({
							name: "installs",
							url: i => `sites/${i}/installs`
						}),
						delete: new u.c({
							name: "installs",
							url: i => `installs/${i}`
						})
					},
					categories: new u.c({
						name: "categories",
						url: (i = {}) => "categories" + t(i)
					}),
					metadata: {
						get: new u.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						}),
						post: new u.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						})
					},
					ratings: {
						default: new u.c({
							name: "ratings",
							url: (i = {}) => "ratings" + t(i)
						}),
						delete: new u.c({
							name: "ratings",
							url: i => `ratings/${i}`
						})
					},
					recommendedApps: new u.c({
						name: "recommendedApps",
						url: (i = {}) => "apps/recommend" + t(i)
					}),
					developedApps: new u.c({
						name: "developedApps",
						url: i => `user/${i}/apps`
					})
				},
				s = async i => f.L.fetchJSON(i), c = async i => {
					const {
						url: E,
						data: g
					} = i;
					return f.L.postJSON(E, {
						body: g
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Nw: function() {
					return d
				},
				U4: function() {
					return u
				},
				XO: function() {
					return f
				},
				ZP: function() {
					return y
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts");

			function o(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						c = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(s).filter(function(i) {
						return Object.getOwnPropertyDescriptor(s, i).enumerable
					})), c.forEach(function(i) {
						a(t, i, s[i])
					})
				}
				return t
			}

			function a(t, r, s) {
				return r = l(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function l(t) {
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var c = s.call(t, r || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let f = function(t) {
					return t.SetCurrentUser = "user.set", t
				}({}),
				u = function(t) {
					return t.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", t.SetZone = "MARKETPLACE/AUTH/SET_ZONE", t.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", t.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", t.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", t.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", t.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", t.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", t.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", t.ResetState = "MARKETPLACE/AUTH/RESET_STATE", t
				}({});
			const d = {
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

			function y(t = e.fD, r) {
				switch (r.type) {
					case u.ResetState:
						return o({}, e.fD);
					case u.CurrentUserSending:
						return o({}, t);
					case u.CurrentUserSuccess:
						const {
							user: s
						} = r;
						return o({}, t, {
							user: s
						});
					case u.CurrentUserFailed:
						return o({}, t);
					case u.SetZone:
						const {
							zone: c
						} = r;
						return o({}, t, {
							zone: c
						});
					case u.SetToken:
						const {
							token: i
						} = r;
						return o({}, t, {
							token: i
						});
					case u.ClearToken:
						return o({}, t, {
							token: null
						});
					case u.SetTokenValid:
						const {
							isTokenValid: E
						} = r;
						return o({}, t, {
							isTokenValid: E
						});
					default:
						return t
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Nw: function() {
					return y
				},
				U4: function() {
					return d
				},
				ZP: function() {
					return t
				},
				dg: function() {
					return u
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function a(r) {
				for (var s = 1; s < arguments.length; s++) {
					var c = arguments[s] != null ? Object(arguments[s]) : {},
						i = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(c).filter(function(E) {
						return Object.getOwnPropertyDescriptor(c, E).enumerable
					})), i.forEach(function(E) {
						l(r, E, c[E])
					})
				}
				return r
			}

			function l(r, s, c) {
				return s = m(s), s in r ? Object.defineProperty(r, s, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = c, r
			}

			function m(r) {
				var s = f(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(r, s) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var i = c.call(r, s || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}
			let u = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				d = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const y = {
				resetState: () => ({
					type: d.ResetState
				}),
				zoneChangedSaga: () => ({
					type: d.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (r, s) => ({
					type: d.GetHomePageAssetsSaga,
					zoneId: r,
					currentResources: s
				}),
				getInstalledAppsAssetsSaga: r => ({
					type: d.GetInstalledAppsAssetsSaga,
					zoneId: r
				}),
				getDevelopedAppsAssetsSaga: (r, s) => ({
					type: d.GetDevelopedAppsAssetsSaga,
					userId: r,
					zoneId: s
				}),
				getDevelopedAppsSending: () => ({
					type: d.GetDevelopedAppsSending
				}),
				getDevelopedAppsSuccess: r => ({
					type: d.GetDevelopedAppsSuccess,
					developedApps: r
				}),
				getDevelopedAppsFailed: () => ({
					type: d.GetDevelopedAppsFailed
				}),
				getAppInfoAssetsSaga: (r, s, c) => ({
					type: d.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: s,
					version: c
				}),
				setUpdatableInstalls: r => ({
					type: d.SetUpdatableInstalls,
					updatableInstallsList: r
				}),
				getAppSaga: r => ({
					type: d.GetAppSaga,
					appIdentifier: r
				}),
				getAppSending: () => ({
					type: d.GetAppSending
				}),
				getAppSuccess: r => ({
					type: d.GetAppSuccess,
					app: r
				}),
				getAppFailed: () => ({
					type: d.GetAppFailed
				}),
				clearApp: () => ({
					type: d.ClearApp
				}),
				getAppsSaga: () => ({
					type: d.GetAppsSaga
				}),
				getAppsSending: () => ({
					type: d.GetAppsSending
				}),
				getAppsSuccess: r => ({
					type: d.GetAppsSuccess,
					appsList: r
				}),
				getAppsFailed: () => ({
					type: d.GetAppsFailed
				}),
				getInstallsSaga: r => ({
					type: d.GetInstallsSaga,
					zoneId: r
				}),
				getInstallsSending: () => ({
					type: d.GetInstallsSending
				}),
				getInstallsSuccess: r => ({
					type: d.GetInstallsSuccess,
					installsList: r
				}),
				getInstallsFailed: () => ({
					type: d.GetInstallsFailed
				}),
				getCategoriesSaga: r => ({
					type: d.GetCategoriesSaga,
					queryParams: r
				}),
				getCategoriesSending: () => ({
					type: d.GetCategoriesSending
				}),
				getCategoriesSuccess: r => ({
					type: d.GetCategoriesSuccess,
					categoriesList: r
				}),
				getCategoriesFailed: () => ({
					type: d.GetCategoriesFailed
				}),
				getMetadataSaga: r => ({
					type: d.GetMetadataSaga,
					zoneId: r
				}),
				getMetadataSending: () => ({
					type: d.GetMetadataSending
				}),
				getMetadataSuccess: r => ({
					type: d.GetMetadataSuccess,
					metadata: r
				}),
				getMetadataFailed: () => ({
					type: d.GetMetadataFailed
				}),
				postMetadataSaga: (r, s) => ({
					type: d.PostMetadataSaga,
					zoneId: r,
					data: s
				}),
				postMetadataSending: () => ({
					type: d.PostMetadataSending
				}),
				postMetadataSuccess: r => ({
					type: d.PostMetadataSuccess,
					metadata: r
				}),
				postMetadataFailed: () => ({
					type: d.PostMetadataFailed
				}),
				getRecommendedAppsSaga: (r, s, c) => ({
					type: d.GetRecommendedAppsSaga,
					appsList: r,
					installsList: s,
					metadata: c
				}),
				getRecommendedAppsSending: () => ({
					type: d.GetRecommendedAppsSending
				}),
				getRecommendedAppsSuccess: r => ({
					type: d.GetRecommendedAppsSuccess,
					recommendedAppsList: r
				}),
				getRecommendedAppsFailed: () => ({
					type: d.GetRecommendedAppsFailed
				})
			};

			function t(r = e.w6, s) {
				switch (s.type) {
					case d.ResetState:
						return a({}, e.w6);
					case d.ZoneChangedSaga:
						return a({}, r, {
							installsList: a({}, e.w6.installsList),
							recommendedAppsList: a({}, e.w6.recommendedAppsList),
							metadata: a({}, e.w6.metadata)
						});
					case d.GetAppsSending:
						return a({}, r, {
							appsList: a({}, (0, o.pG)(r.appsList, e.h_))
						});
					case d.GetAppsSuccess:
						return a({}, r, {
							appsList: a({}, (0, o.pG)(r.appsList, e.Jz, s.appsList))
						});
					case d.GetAppsFailed:
						return a({}, r, {
							appsList: a({}, (0, o.pG)(r.appsList, e.yc))
						});
					case d.GetInstallsSending:
						return a({}, r, {
							installsList: a({}, (0, o.pG)(r.installsList, e.h_))
						});
					case d.GetInstallsSuccess:
						return a({}, r, {
							installsList: a({}, (0, o.pG)(r.installsList, e.Jz, s.installsList))
						});
					case d.GetInstallsFailed:
						return a({}, r, {
							installsList: a({}, (0, o.pG)(r.installsList, e.yc))
						});
					case d.GetCategoriesSending:
						return a({}, r, {
							categoriesList: a({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case d.GetCategoriesSuccess:
						return a({}, r, {
							categoriesList: a({}, (0, o.pG)(r.categoriesList, e.Jz, s.categoriesList))
						});
					case d.GetCategoriesFailed:
						return a({}, r, {
							categoriesList: a({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case d.GetMetadataSending:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.h_))
						});
					case d.GetMetadataSuccess:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.Jz, s.metadata))
						});
					case d.GetMetadataFailed:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.yc))
						});
					case d.PostMetadataSending:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.h_))
						});
					case d.PostMetadataSuccess:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.Jz, s.metadata))
						});
					case d.PostMetadataFailed:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.yc))
						});
					case d.GetRecommendedAppsSending:
						return a({}, r, {
							recommendedAppsList: a({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case d.GetRecommendedAppsSuccess:
						return a({}, r, {
							recommendedAppsList: a({}, (0, o.pG)(r.recommendedAppsList, e.Jz, s.recommendedAppsList))
						});
					case d.GetRecommendedAppsFailed:
						return a({}, r, {
							recommendedAppsList: a({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case d.GetAppSending:
						return a({}, r, {
							app: a({}, (0, o.pG)(r.app, e.h_))
						});
					case d.GetAppSuccess:
						return a({}, r, {
							app: a({}, (0, o.pG)(r.app, e.Jz, s.app))
						});
					case d.GetAppFailed:
						return a({}, r, {
							app: a({}, (0, o.pG)(r.app, e.yc))
						});
					case d.ClearApp:
						return a({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case d.SetUpdatableInstalls:
						return a({}, r, {
							updatableInstallsList: s.updatableInstallsList
						});
					case d.GetDevelopedAppsSending:
						return a({}, r, {
							developedApps: a({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case d.GetDevelopedAppsSuccess:
						return a({}, r, {
							developedApps: a({}, (0, o.pG)(r.developedApps, e.Jz, s.developedApps))
						});
					case d.GetDevelopedAppsFailed:
						return a({}, r, {
							developedApps: a({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/caching/tracking.tsx": function(F, _, n) {
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
		"../react/pages/dns/dns-records/tracking.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
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
		"../react/pages/email/types.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
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
			let a = function(m) {
				return m[m.Verified = 0] = "Verified", m[m.Pending = 1] = "Pending", m[m.Missing = 2] = "Missing", m[m.WorkerNotFound = 3] = "WorkerNotFound", m[m.Unknown = 4] = "Unknown", m[m.Loading = 5] = "Loading", m
			}({});
			const l = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/firewall/analytics/labels.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
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
					return l
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
				l = {
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
		"../react/pages/firewall/api-shield/tracking.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Fj: function() {
					return d
				},
				kq: function() {
					return u
				},
				xr: function() {
					return y
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function a(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						c = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(s).filter(function(i) {
						return Object.getOwnPropertyDescriptor(s, i).enumerable
					})), c.forEach(function(i) {
						l(t, i, s[i])
					})
				}
				return t
			}

			function l(t, r, s) {
				return r = m(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function m(t) {
				var r = f(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function f(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var c = s.call(t, r || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let u = function(t) {
				return t.MAIN = "API Shield", t.SCHEMA_VALIDATION = "Schema Validation", t.JWT_VALIDATION = "JWT Validation", t.SEQUENCE_ANALYTICS = "Sequence Analytics", t.SEQUENCE_RULES = "Sequence Rules", t.ENDPOINT_MANAGEMENT = "Endpoint Management", t.API_DISCOVERY = "API Discovery", t.SETTINGS = "Settings", t
			}({});
			const d = {
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
				y = ({
					name: t,
					category: r = "user journey",
					product: s = u.MAIN,
					productName: c,
					additionalData: i
				}) => {
					o().sendEvent(t, a({
						category: r,
						product: s,
						productName: c
					}, i || {}))
				}
		},
		"../react/pages/firewall/bots/tracking.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
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
					return l.INITIAL_FETCH_SCORES = "view bots scores distribution", l.FETCH_CONFIGURATION = "view bots configuration page", l.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", l.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", l.UPDATE_SETTINGS = "update bots settings", l.DELETE_RULE = "delete bots ruleset", l.UPDATE_RULE = "update bots ruleset", l.FETCH_RULES = "view bots ruleset", l.CONFIGURE_BOT_MANAGEMENT = "view bots management", l.WAF_RULES_REDIRECT = "redirect waf rules", l
				}({}),
				o = function(l) {
					return l.PROVIDED_TEMPLATE = "provided template link in detection card", l.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", l.USE_TEMPLATE = "use template", l.CREATE_FIREWALL_RULE = "create firewall rule", l.WAF_RULES = "waf rules", l
				}({});
			const a = "user journey"
		},
		"../react/pages/firewall/page-shield/tracking.ts": function(F, _, n) {
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
		"../react/pages/firewall/rulesets/tracking.tsx": function(F, _, n) {
			"use strict";
			n.d(_, {
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
					return l
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
				a = (m, f) => {
					var u;
					return `${f} ${(u=o[m])!==null&&u!==void 0?u:m} rule${f===e.GET?"s":""}`
				},
				l = () => {
					var m, f;
					return (m = Object.keys(o)) === null || m === void 0 || (f = m.map(u => {
						var d;
						return (d = Object.values(e)) === null || d === void 0 ? void 0 : d.map(y => a(u, y))
					})) === null || f === void 0 ? void 0 : f.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
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
					return u
				},
				o4: function() {
					return c
				},
				oY: function() {
					return a
				},
				qH: function() {
					return y
				},
				x3: function() {
					return f
				}
			});
			var e = n("../react/pages/firewall/analytics/labels.ts");
			const o = ["block", "challenge", "jschallenge", "managedChallenge"],
				a = ["miss", "expired", "bypass", "dynamic"],
				l = i => Object.fromEntries(Object.entries(i).map(([E, g]) => [g, E])),
				m = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				f = l(m),
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
				d = l(u),
				y = {
					"Not Computed": "not_computed",
					"Machine Learning": "machine_learning",
					Heuristics: "heuristics",
					"Behavioral Analysis": "behavioral_analysis",
					"JS Fingerprinting": "js_fingerprinting",
					"Verified Bot": "verified_bot",
					"Cloudflare Service": "cloudflare_service"
				},
				t = l(y);
			let r = function(i) {
				return i.SAMPLED = "sampled", i.RAW = "raw", i
			}({});
			const s = "security-analytics-log-explorer";
			let c = function(i) {
				return i.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', i.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', i.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', i.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', i.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', i
			}({})
		},
		"../react/pages/home/alerts/config.tsx": function(F, _, n) {
			"use strict";
			n.d(_, {
				jk: function() {
					return v
				},
				w8: function() {
					return C
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				a = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				l = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function m(I) {
				for (var R = 1; R < arguments.length; R++) {
					var S = arguments[R] != null ? Object(arguments[R]) : {},
						A = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(S).filter(function(H) {
						return Object.getOwnPropertyDescriptor(S, H).enumerable
					})), A.forEach(function(H) {
						f(I, H, S[H])
					})
				}
				return I
			}

			function f(I, R, S) {
				return R = u(R), R in I ? Object.defineProperty(I, R, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[R] = S, I
			}

			function u(I) {
				var R = d(I, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function d(I, R) {
				if (typeof I != "object" || I === null) return I;
				var S = I[Symbol.toPrimitive];
				if (S !== void 0) {
					var A = S.call(I, R || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(I)
			}
			const y = "Notifications",
				t = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${r}/notifications`,
				c = (0, e.BC)`${s}/destinations`,
				i = (0, e.BC)`${s}/create`,
				E = (0, e.BC)`${i}/${"alertType"}`,
				g = (0, e.BC)`${s}/edit/${"alertId"}`,
				v = m({
					account: r,
					alerts: s,
					destinations: c,
					createAlert: i,
					createAlertWithSelection: E,
					editAlert: g
				}, o._j, a._j),
				C = m({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, l.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				_j: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				a = (0, e.BC)`${o}/pagerduty/connect`,
				l = (0, e.BC)`${o}/pagerduty/register`,
				m = (0, e.BC)`${o}/pagerduty`,
				f = {
					pagerDutyConnect: a,
					pagerDutyRegister: l,
					pagerDutyList: m
				};
			var u = null
		},
		"../react/pages/home/alerts/tracking.ts": function(F, _, n) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(F, _, n) {
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
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(F, _, n) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				AA: function() {
					return ie
				},
				AN: function() {
					return se
				},
				AY: function() {
					return Je
				},
				Am: function() {
					return I
				},
				B2: function() {
					return G
				},
				BB: function() {
					return W
				},
				BF: function() {
					return Ee
				},
				BQ: function() {
					return w
				},
				E8: function() {
					return ye
				},
				Fl: function() {
					return Xe
				},
				Fu: function() {
					return j
				},
				G_: function() {
					return v
				},
				Gc: function() {
					return be
				},
				Hc: function() {
					return Lt
				},
				IO: function() {
					return Y
				},
				JK: function() {
					return De
				},
				K: function() {
					return H
				},
				LI: function() {
					return h
				},
				LX: function() {
					return le
				},
				L_: function() {
					return Be
				},
				Ly: function() {
					return At
				},
				MR: function() {
					return ee
				},
				Mj: function() {
					return te
				},
				NB: function() {
					return It
				},
				Or: function() {
					return ce
				},
				P5: function() {
					return Pt
				},
				PE: function() {
					return pe
				},
				Pd: function() {
					return Ot
				},
				Pk: function() {
					return Re
				},
				Pp: function() {
					return $e
				},
				Q1: function() {
					return B
				},
				Qr: function() {
					return ge
				},
				Qv: function() {
					return Se
				},
				Rp: function() {
					return Tt
				},
				Sh: function() {
					return Ct
				},
				TZ: function() {
					return ue
				},
				Tg: function() {
					return Me
				},
				Tp: function() {
					return Pe
				},
				Uy: function() {
					return _t
				},
				Vw: function() {
					return b
				},
				W3: function() {
					return T
				},
				WR: function() {
					return oe
				},
				WX: function() {
					return _e
				},
				XF: function() {
					return me
				},
				Xc: function() {
					return Ze
				},
				ZB: function() {
					return z
				},
				Zs: function() {
					return Ne
				},
				_f: function() {
					return ve
				},
				_k: function() {
					return Ae
				},
				b4: function() {
					return Te
				},
				c2: function() {
					return q
				},
				cE: function() {
					return bt
				},
				dh: function() {
					return Le
				},
				fE: function() {
					return Fe
				},
				g7: function() {
					return ae
				},
				hO: function() {
					return ne
				},
				hV: function() {
					return St
				},
				hk: function() {
					return R
				},
				hr: function() {
					return fe
				},
				it: function() {
					return we
				},
				jG: function() {
					return Ue
				},
				jN: function() {
					return xe
				},
				m8: function() {
					return $
				},
				nm: function() {
					return ht
				},
				oW: function() {
					return Ke
				},
				oc: function() {
					return C
				},
				pH: function() {
					return D
				},
				pi: function() {
					return J
				},
				rI: function() {
					return x
				},
				s7: function() {
					return ze
				},
				sO: function() {
					return We
				},
				sg: function() {
					return Ye
				},
				tB: function() {
					return g
				},
				tN: function() {
					return U
				},
				vV: function() {
					return Ie
				},
				vc: function() {
					return ke
				}
			});
			var e = n("../../../../node_modules/lodash/lodash.js"),
				o = n.n(e),
				a = n("../../../../node_modules/moment/moment.js"),
				l = n.n(a),
				m = n("../../../common/util/types/src/api/domain.ts"),
				f = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				u = n("../react/utils/translator.tsx"),
				d = n("../react/utils/url.ts"),
				y = n("../react/pages/home/domain-registration/config.ts"),
				t = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = n("../react/pages/home/domain-registration/types.ts");

			function s(p) {
				for (var P = 1; P < arguments.length; P++) {
					var re = arguments[P] != null ? Object(arguments[P]) : {},
						de = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(re).filter(function(he) {
						return Object.getOwnPropertyDescriptor(re, he).enumerable
					})), de.forEach(function(he) {
						c(p, he, re[he])
					})
				}
				return p
			}

			function c(p, P, re) {
				return P = i(P), P in p ? Object.defineProperty(p, P, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[P] = re, p
			}

			function i(p) {
				var P = E(p, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function E(p, P) {
				if (typeof p != "object" || p === null) return p;
				var re = p[Symbol.toPrimitive];
				if (re !== void 0) {
					var de = re.call(p, P || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(p)
			}

			function g(p) {
				return p.filter(P => P.isSelected).reduce((P, {
					transferFee: re,
					isZoneEntitlementPresent: de
				}) => de ? P : P + re, 0)
			}

			function v(p) {
				return (p / 100).toLocaleString("en-US", {
					style: "currency",
					currency: "USD"
				})
			}

			function C(p) {
				return p.filter(P => P.registrar.toLowerCase() === "godaddy")
			}
			const I = "MMM D, YYYY";

			function R(p, P, re, de) {
				var he, Ge, qe, et, tt, nt, ot, rt, at, it, st, ct, lt, ut, dt, pt, mt, gt, ft, Et, yt;
				const Dt = (((he = P.fees) === null || he === void 0 ? void 0 : he.registration_fee) !== r.Xp && ((Ge = P.fees) === null || Ge === void 0 ? void 0 : Ge.registration_fee) || 0) * 100,
					wt = (((qe = P.fees) === null || qe === void 0 ? void 0 : qe.transfer_fee) !== r.Xp && ((et = P.fees) === null || et === void 0 ? void 0 : et.transfer_fee) || 0) * 100,
					Rt = (((tt = P.fees) === null || tt === void 0 ? void 0 : tt.registration_fee) !== r.Xp && ((nt = P.fees) === null || nt === void 0 ? void 0 : nt.registration_fee) || 0) * 100,
					kt = (((ot = P.fees) === null || ot === void 0 ? void 0 : ot.renewal_fee) !== r.Xp && ((rt = P.fees) === null || rt === void 0 ? void 0 : rt.renewal_fee) || 0) * 100,
					Mt = (((at = P.fees) === null || at === void 0 ? void 0 : at.redemption_fee) !== r.Xp && ((it = P.fees) === null || it === void 0 ? void 0 : it.redemption_fee) || 0) * 100,
					Oe = p[P.name];
				return {
					name: P.name,
					zone: Oe,
					entitlements: re,
					registryCheck: de,
					nameservers: P.name_servers,
					isAvailable: P.available,
					lastKnownStatus: P.last_known_status,
					authCode: P.auth_code,
					isEnterpriseZone: (Oe == null || (st = Oe.plan) === null || st === void 0 ? void 0 : st.legacy_id) === "enterprise",
					isActiveZone: (Oe == null ? void 0 : Oe.status) === "active",
					corResponsesPending: P.cor_responses_pending,
					isCorLocked: P.cor_locked,
					corLockedUntil: P.cor_locked_until ? l()(P.cor_locked_until).format(I) : null,
					isFullZone: (Oe == null ? void 0 : Oe.type) == r.xd.Full,
					isLocked: P.locked,
					registrar: P.current_registrar || y.JM,
					zoneId: Oe == null ? void 0 : Oe.id,
					currentExpiration: l()(P.expires_at).format(I),
					newExpiration: l()(P.expires_at).add(1, "year").format(I),
					wholesaleCost: Dt,
					transferFee: wt,
					registrationFee: Rt,
					renewalFee: kt,
					redemptionFee: Mt,
					lastEntitledAt: P.last_entitled_at ? new Date(P.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(re) && !!re.find(vt => vt.id === y.g5 && vt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: P.transfer_in && A(P.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: P.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: P.transfer_in,
					transferOut: P.transfer_out,
					autoRenew: P.auto_renew === !0,
					lastTransferredAt: P.last_transferred_at,
					createdAt: P.created_at,
					paymentExpiresAt: l()(P.payment_expires_at).isValid() ? l()(P.payment_expires_at) : l()(P.expires_at).isValid() ? l()(P.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (ct = P.contacts) === null || ct === void 0 || (lt = ct.administrator) === null || lt === void 0 ? void 0 : lt.id,
						[r.l2.Billing]: (ut = P.contacts) === null || ut === void 0 || (dt = ut.billing) === null || dt === void 0 ? void 0 : dt.id,
						[r.l2.Registrant]: (pt = P.contacts) === null || pt === void 0 || (mt = pt.registrant) === null || mt === void 0 ? void 0 : mt.id,
						[r.l2.Technical]: (gt = P.contacts) === null || gt === void 0 || (ft = gt.technical) === null || ft === void 0 ? void 0 : ft.id
					},
					landing: P.landing,
					whois: P.whois,
					emailVerified: P.email_verified,
					materialChanges: K(P.material_changes),
					corChanges: P.cor_changes ? W(Object.assign(s({}, S), P.cor_changes)) : {},
					registryStatuses: P.registry_statuses ? P.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Et = P.domain_protection_services) === null || Et === void 0 ? void 0 : Et.status
					},
					deletion: {
						isDeletable: P == null || (yt = P.deletion) === null || yt === void 0 ? void 0 : yt.is_deletable
					},
					premiumType: P == null ? void 0 : P.premium_type,
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

			function A(p) {
				switch (p.enter_auth_code) {
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

			function H(p) {
				let P = p.extensions;
				(P == null ? void 0 : P.application_purpose) && (P == null ? void 0 : P.nexus_category) && (p.extensions = {
					nexusCategory: P.nexus_category,
					applicationPurpose: P.application_purpose
				});
				let re = s({}, typeof p.id == "string" ? {
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
				return je(re)
			}

			function K(p) {
				let P = [];
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
				for (const de in p) {
					const he = p[de],
						Ge = re[he];
					P.push(Ge)
				}
				return P
			}
			const Z = p => {
				if (!p) return null;
				let P = p;
				return p.includes("C31") && (P = "C31"), p.includes("C32") && (P = "C32"), P
			};

			function W(p) {
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
						nexusCategory: Z(p.extensions.nexus_category),
						applicationPurpose: p.extensions.application_purpose
					}
				} : {})
			}

			function z(p = {}) {
				const P = {
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
						type: r.xd.Full
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
					autoTransferStatus: r._n.Pending,
					transferAuthCode: "",
					authCodeStatus: r.BJ.Pending,
					transferApiCallStatus: r.Yh.Pending,
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
						unlock_domain: r.lW.UNKNOWN,
						disable_privacy: r.lW.UNKNOWN,
						enter_auth_code: r.lW.UNKNOWN,
						approve_transfer: r.lW.UNKNOWN,
						accept_foa: r.lW.UNKNOWN,
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
					premiumType: r.Vs.Not_Premium,
					fees: null
				};
				return Object.assign(P, p)
			}

			function B(p = {}) {
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

			function j(p) {
				const P = y.Py.concat(y.ui).reduce((re, de) => s({}, re, {
					[de]: []
				}), {});
				return p.forEach(re => {
					let de = L(re.registrar);
					de in P || (de = y.ui), Ye(re.name) && (de = "uk"), P[de].push(re)
				}), Object.keys(P).sort((re, de) => re.localeCompare(de)).map(re => ({
					registrar: re,
					domains: P[re]
				})).filter(re => re.domains.length > 0)
			}

			function L(p) {
				return p == null ? void 0 : p.toLowerCase().replace(/\s|,|\./g, "")
			}

			function b(p) {
				if (!p || !p.registrar) return "unknown";
				if (Ye(p.name)) return "uk";
				const P = L(p.registrar);
				return P in y.gM ? P : "unknown"
			}
			const N = [];

			function O(p) {
				return N.some(P => p.endsWith("." + P))
			}

			function V(p) {
				return !p.isEnterpriseZone || !Array.isArray(p.entitlements) ? !1 : !!p.entitlements.find(({
					id: P,
					allocation: re
				}) => P === y.g5 && re.value === !0)
			}

			function J(p) {
				var P;
				const re = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let de = !1,
					he = null;
				return (P = p.registryStatuses) === null || P === void 0 || P.some(Ge => {
					re.includes(Ge) && (he = Ge, de = !0)
				}), [de, he]
			}

			function $(p, P = !1) {
				if (!p) return [!1, t.keys.cannot_transfer_default];
				if (p.zone.status !== "active") return [!1, t.keys.cannot_transfer_zone_not_active];
				if (!p.isFullZone && !V(p)) return [!1, t.keys.cannot_transfer_zone_not_eligible];
				if (p.registrar === "Cloudflare") return [!1, t.keys.cannot_transfer_domain_on_cf];
				if (p.isAvailable) return [!1, t.keys.cannot_transfer_domain_available];
				if (!p.transferConditions) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (!P && _t(p == null ? void 0 : p.premiumType)) return [!1, t.keys.cannot_transfer_domain_premium];
				if (D(p)) return [!1, t.keys.cannot_transfer_domain_transfer_in_progress];
				let re;
				for (re in p.transferConditions)
					if (re !== "not_premium" && !p.transferConditions[re]) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (O(p.name)) return [!1, t.keys.cannot_transfer_domain_tld_not_supported];
				const [de, he] = J(p);
				return de && he ? [!1, t.keys.cannot_transfer_domain_registry_status[he]] : [!0, ""]
			}

			function D(p) {
				var P, re;
				return !!p.transferIn && !((P = p.transferConditions) === null || P === void 0 ? void 0 : P.not_started) && !!(Ye(p.name) || ((re = p.registryStatuses) === null || re === void 0 ? void 0 : re.includes(r.rj.PENDING_TRANSFER)))
			}

			function k(p) {
				return !!p.registrar && !!p.currentExpiration
			}

			function G(p, P = !1) {
				const [re] = $(p, P);
				return k(p) ? Ce(p) ? r.M5.InProgressOrOnCF : re ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function q(p) {
				return p.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(p.transferIn.enter_auth_code) || !1
			}

			function ee(p) {
				return p.registrar === "Cloudflare"
			}

			function x(p) {
				return !!(p == null ? void 0 : p.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function te(p) {
				return !!(p == null ? void 0 : p.includes(r.rj.PENDING_TRANSFER))
			}
			const Q = "Invalid date";

			function ce(p) {
				return p.newExpiration === Q ? "Unavailable" : p.newExpiration
			}

			function ue(p) {
				return p.currentExpiration === Q ? "Unavailable" : p.currentExpiration
			}

			function ie(p) {
				return p.substring(p.indexOf("."))
			}

			function fe(p) {
				return p.map(P => P.name).map(P => ie(P)).filter((P, re, de) => !de.includes(P, re + 1))
			}

			function Te(p) {
				if (y.no) return [!0, ""];
				if (!ee(p)) return [!1, r.ok.NotOnCF];
				if (p.isCorLocked) return [!1, p.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (p.lastTransferredAt) {
					const P = l()(p.lastTransferredAt),
						re = l().duration(l()().diff(P)).as("days"),
						de = Ye(p.name);
					if (re < (de ? 1 : 60)) return [!1, de ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (p.createdAt) {
					const P = l()(p.createdAt);
					if (l().duration(l()().diff(P)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function _e(p) {
				return !!(y.Bc || p.transferOut)
			}

			function Ce(p) {
				return ae(p) || ee(p)
			}

			function U(p) {
				return !ae(p) && ee(p)
			}

			function ae(p) {
				return !p || p.lastKnownStatus === "pendingTransfer" || p.lastKnownStatus === "transferFOAPending" || !ee(p) && p.transferConditions && !p.transferConditions.not_started || !1
			}

			function pe(p) {
				return !(O(p.name) || p.transferConditions && !p.transferConditions.supported_tld)
			}

			function Se(p) {
				return (p == null ? void 0 : p.includes("/")) ? !0 : p.split("").some(P => P.charCodeAt(0) > 123)
			}

			function Re(p) {
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

			function ke(p) {
				return l()(p.paymentExpiresAt).isBefore(l()())
			}

			function xe(p) {
				return p.transferIn && p.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function De(p) {
				const P = ["CU", "KP", "IR", "SY"];
				return p.filter(re => !P.includes(re.code))
			}

			function Me(p) {
				if (!!p) return `${p.charAt(0).toUpperCase()}${p.slice(1)}${p.charAt(p.length-1)==="."?"":"."}`
			}

			function je(p) {
				const P = {};
				for (const [re, de] of Object.entries(p)) {
					if (de && typeof de == "string") {
						Object.assign(P, {
							[re]: de.trim()
						});
						continue
					}
					Object.assign(P, {
						[re]: de
					})
				}
				return P
			}

			function Ne(p) {
				return l()(p).add(40, "days")
			}

			function Be(p) {
				const P = p.paymentExpiresAt || p.payment_expires_at,
					re = Ne(P);
				return l()().isBetween(P, re)
			}

			function Fe(p) {
				var P;
				return !(p == null ? void 0 : p.registryStatuses) || !Array.isArray(p == null ? void 0 : p.registryStatuses) && !(0, e.isString)(p == null ? void 0 : p.registryStatuses) ? !1 : (P = p.registryStatuses) === null || P === void 0 ? void 0 : P.includes(r.rj.REDEMPTION_PERIOD)
			}

			function Le(p) {
				var P;
				return !(p == null ? void 0 : p.registryStatuses) || !Array.isArray(p == null ? void 0 : p.registryStatuses) && !(0, e.isString)(p == null ? void 0 : p.registryStatuses) ? !1 : (P = p.registryStatuses) === null || P === void 0 ? void 0 : P.includes(r.rj.PENDING_DELETE)
			}

			function $e(p) {
				return [".us"].includes(p)
			}

			function we(p) {
				return [".us"].includes(p)
			}

			function ne(p) {
				switch (p) {
					case ".us":
						return X();
					default:
						return []
				}
			}

			function T(p) {
				switch (p) {
					case ".us":
						return M;
					default:
						return {}
				}
			}
			const M = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function X() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([p, P]) => ({
						value: p,
						label: P
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([p, P]) => ({
						value: p,
						label: P
					}))
				}]
			}

			function le(p, P, re) {
				return P[P.length - 1][re] === p[re]
			}

			function ge(p) {
				return Boolean(Object.keys(p).length === 0)
			}

			function Ee(p) {
				return l()().add(p, "year").format(I)
			}

			function ve({
				accountName: p
			}) {
				var P;
				const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((P = p.toLowerCase().match(re)) === null || P === void 0 ? void 0 : P[0]) || ""
			}

			function Ie(p) {
				return !!p.match(f.default.email)
			}

			function Ue(p) {
				return p === "Registration banned zone error"
			}

			function Ze(p) {
				return p == null ? void 0 : p.startsWith("Quote error")
			}

			function We(p) {
				return p === (0, u.ZP)(t.keys.registration_checkout_trademark_notice_error_message)
			}

			function Ae(p) {
				return p === "DNS conflict"
			}

			function Pe(p) {
				return p === m.W7.PENDING_UPDATE
			}

			function be(p) {
				return p ? Object.values(m.wR).filter(P => P !== m.wR.OFFBOARDED).includes(p) : !1
			}

			function ze(p) {
				return p ? [m.wR.LOCKED, m.wR.ONBOARDED, m.wR.ONBOARDING_INITIATED, m.wR.PENDING_REGISTRY_LOCK, m.wR.PENDING_REGISTRY_UNLOCK, m.wR.PENDING_UNLOCK_APPROVAL].includes(p) : !1
			}

			function Ve(p) {
				return p ? m.wR.UNLOCKED === p : !1
			}

			function Qe(p) {
				return p ? m.wR.LOCKED === p : !1
			}

			function h(p) {
				return p ? m.wR.PENDING_REGISTRY_LOCK === p : !1
			}

			function w(p) {
				return p ? [m.wR.PENDING_REGISTRY_UNLOCK, m.wR.PENDING_UNLOCK_APPROVAL].includes(p) : !1
			}

			function Y(p) {
				var P;
				return !1
			}

			function oe(p) {
				var P;
				return !1
			}

			function se(p) {
				var P;
				return !1
			}

			function me(p) {
				var P;
				return !1
			}

			function ye(p) {
				var P;
				return !1
			}

			function Ke(p) {
				return Object.keys(m.wR).find(P => m.wR[P].toLowerCase() === p.toLowerCase())
			}

			function Je(p) {
				var P;
				const re = (P = Ke(p)) === null || P === void 0 ? void 0 : P.toLowerCase();
				return re ? t.keys.protection_status[re] : t.keys.protection_status.unknown
			}

			function He(p) {
				return ["com", "net"].includes(p)
			}

			function Xe(p) {
				const P = (0, d.pu)(p);
				return He(P) ? m.wR.PENDING_REGISTRY_LOCK : m.wR.LOCKED
			}

			function Ct(p) {
				return (0, d.pu)(p) === "co" ? 5 : 10
			}

			function ht(p, P) {
				return P ? 1 : (0, d.pu)(p) === "co" ? 5 : (0, d.pu)(p) === "org" ? 1 : 10
			}

			function Ye(p) {
				return (0, d.pu)(p) === "uk"
			}

			function bt(p) {
				return (0, d.pu)(p) === "us"
			}

			function Tt(p) {
				return l()(p).isValid()
			}

			function At(p) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(p)
			}

			function Pt(p) {
				return !!(p == null ? void 0 : p.id)
			}

			function It(p) {
				return p ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(p) : !1
			}

			function Ot(p) {
				return p ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(p) : !1
			}

			function St(p) {
				var P;
				return (p == null ? void 0 : p.lastKnownStatus) ? (P = p.lastKnownStatus) === null || P === void 0 ? void 0 : P.includes("deletionIrredeemable") : !1
			}

			function _t(p) {
				switch (p) {
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

			function Lt(p) {
				if (!p || !p.message) return r.OJ.DEFAULT;
				const {
					message: P
				} = p;
				switch (!0) {
					case P.includes("feature disabled"):
						return r.OJ.FEATURE_DISABLED;
					case P.includes("email unverified"):
						return r.OJ.EMAIL_UNVERIFIED;
					case P.includes("account blocked"):
						return r.OJ.ACCOUNT_BLOCKED;
					default:
						return r.OJ.DEFAULT
				}
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Bc: function() {
					return y
				},
				Hv: function() {
					return N
				},
				JM: function() {
					return a
				},
				Py: function() {
					return f
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
					return d
				},
				jk: function() {
					return b
				},
				no: function() {
					return t
				},
				uY: function() {
					return u
				},
				ui: function() {
					return l
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../flags.js");
			const a = "Unknown",
				l = "unknown",
				m = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				f = Object.keys(m),
				u = !0,
				d = (0, o.J8)("registrar_mock_data") || !1,
				y = (0, o.J8)("registrar_mock_transfer_out") || !1,
				t = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				s = "cf_registrar.enabled",
				c = "@abcABC1234567890123456",
				i = (0, e.BC)`/${"accountId"}`,
				E = (0, e.BC)`${i}/add-site`,
				g = (0, e.BC)`${i}/domains`,
				v = (0, e.BC)`${g}/${"zoneName"}`,
				C = (0, e.BC)`${v}/configuration`,
				I = (0, e.BC)`${v}/contacts`,
				R = (0, e.BC)`${g}/pricing`,
				S = (0, e.BC)`${g}/protection`,
				A = (0, e.BC)`${g}/register`,
				H = (0, e.BC)`${A}/checkout`,
				K = (0, e.BC)`${A}/success`,
				Z = (0, e.BC)`${g}/tlds`,
				W = (0, e.BC)`${g}/transfer`,
				z = (0, e.BC)`${g}/transfer/${"zoneName"}`,
				B = (0, e.BC)`/registrar/accounts/verify_email`,
				j = (0, e.BC)`/registrar/domains/verify_email`,
				L = (0, e.BC)`${g}/verify-email`,
				b = {
					addSite: E,
					domains: g,
					domainsDomain: v,
					domainsDomainConfiguration: C,
					domainsDomainContacts: I,
					domainsPricing: R,
					domainsProtection: S,
					domainsRegister: A,
					domainsRegisterCheckout: H,
					domainsRegisterSuccess: K,
					domainsTlds: Z,
					domainsTransfer: W,
					domainsTransferZone: z,
					registrarAccountsVerifyEmail: B,
					registrarDomainsVerifyEmail: j,
					verifyEmail: L
				},
				N = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				J: function() {
					return r
				},
				U: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				a = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = n.n(a),
				m = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function f(s) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						E = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(i).filter(function(g) {
						return Object.getOwnPropertyDescriptor(i, g).enumerable
					})), E.forEach(function(g) {
						u(s, g, i[g])
					})
				}
				return s
			}

			function u(s, c, i) {
				return c = d(c), c in s ? Object.defineProperty(s, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[c] = i, s
			}

			function d(s) {
				var c = y(s, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function y(s, c) {
				if (typeof s != "object" || s === null) return s;
				var i = s[Symbol.toPrimitive];
				if (i !== void 0) {
					var E = i.call(s, c || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(s)
			}
			let t = function(s) {
				return s.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", s.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", s.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", s.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", s.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", s.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", s.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", s.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", s.RENEW_DOMAIN_COMPLETED = "domain renewal completed", s.RESTORE_DOMAIN_INIT = "click to open domain restore modal", s.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", s.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", s.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", s.RESTORE_DOMAIN_FAILURE = "domain restore failed", s.RESTORE_DOMAIN_COMPLETED = "domain restore completed", s.DOMAIN_DELETE_INIT = "click to begin domain delete", s.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", s.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", s.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", s.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", s.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", s.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", s.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", s.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", s.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", s.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", s
			}({});

			function r(s, c, i) {
				if (!(c == null ? void 0 : c.name)) return null;
				l().sendEvent(s, f({
					domain: {
						name: c.name,
						premium: (0, m.Uy)(c == null ? void 0 : c.premiumType),
						paymentExpiresAt: o()(c == null ? void 0 : c.paymentExpiresAt).format()
					},
					category: "registrar"
				}, i))
			}
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				KO: function() {
					return u
				},
				L9: function() {
					return t
				},
				N3: function() {
					return y
				},
				zE: function() {
					return d
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function a(r) {
				for (var s = 1; s < arguments.length; s++) {
					var c = arguments[s] != null ? Object(arguments[s]) : {},
						i = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(c).filter(function(E) {
						return Object.getOwnPropertyDescriptor(c, E).enumerable
					})), i.forEach(function(E) {
						l(r, E, c[E])
					})
				}
				return r
			}

			function l(r, s, c) {
				return s = m(s), s in r ? Object.defineProperty(r, s, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = c, r
			}

			function m(r) {
				var s = f(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(r, s) {
				if (typeof r != "object" || r === null) return r;
				var c = r[Symbol.toPrimitive];
				if (c !== void 0) {
					var i = c.call(r, s || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}
			let u = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r
				}({}),
				d = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				y = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const t = (r, s = {}) => {
				o().sendEvent(r, a({}, s, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/magic/constants.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				GF: function() {
					return s
				},
				H3: function() {
					return u
				},
				H8: function() {
					return m
				},
				J: function() {
					return i
				},
				Nz: function() {
					return d
				},
				UQ: function() {
					return g
				},
				Up: function() {
					return l
				},
				W8: function() {
					return y
				},
				Ws: function() {
					return v
				},
				Xg: function() {
					return r
				},
				_j: function() {
					return a
				},
				a4: function() {
					return c
				},
				jS: function() {
					return E
				},
				rF: function() {
					return f
				},
				rG: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/utils/translator.tsx");
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
					magicFirewallRules: (0, e.BC)`/${"accountId"}/network-security/magic_firewall`,
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
				l = () => [{
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
				m = C => [{
					value: "low",
					label: C("setting.low")
				}, {
					value: "mid",
					label: C("setting.medium")
				}, {
					value: "high",
					label: C("setting.high")
				}],
				f = C => [{
					value: "request",
					label: C("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: C("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				u = C => [{
					value: "unidirectional",
					label: C("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: C("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				d = "magic-transit",
				y = "magic-wan",
				t = "gre_tunnel",
				r = "ipsec_tunnel",
				s = 64,
				c = 1476,
				i = "mid",
				E = "reply",
				g = C => [{
					value: void 0,
					label: C("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: C("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: C("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				v = C => [{
					value: "all",
					label: C("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: C("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: C("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
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
		"../react/pages/magic/overview/tracking.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				VZ: function() {
					return l
				},
				lC: function() {
					return a
				},
				r8: function() {
					return o
				},
				uB: function() {
					return m
				}
			});
			var e = n("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				a = "user journey",
				l = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				m = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(F, _, n) {
			"use strict";
			n.d(_, {
				gb: function() {
					return t
				},
				iP: function() {
					return K
				},
				xL: function() {
					return C
				},
				rD: function() {
					return W
				},
				oT: function() {
					return i
				},
				i2: function() {
					return z
				},
				x1: function() {
					return f
				},
				lW: function() {
					return d
				},
				UA: function() {
					return A
				},
				K5: function() {
					return s
				},
				Ii: function() {
					return R
				},
				PJ: function() {
					return Z
				},
				bK: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				m = n("../../../../node_modules/@cloudflare/elements/es/index.js");
			const f = () => o().createElement(u, null, o().createElement("svg", {
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
				u = (0, a.createComponent)(({
					theme: B
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
				d = () => o().createElement(y, null, o().createElement("svg", {
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
				y = (0, a.createComponent)(({
					theme: B
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
					src: l,
					width: "85%"
				})),
				r = (0, a.createComponent)(({
					theme: B
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
				s = () => o().createElement(c, null, o().createElement("svg", {
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
				c = (0, a.createComponent)(({
					theme: B
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
				i = () => o().createElement(E, null, o().createElement("svg", {
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
				E = (0, a.createComponent)(({
					theme: B
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
				g = () => o().createElement(v, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				v = (0, a.createComponent)(({
					theme: B
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
				C = () => o().createElement(I, null, o().createElement("svg", {
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
				I = (0, a.createComponent)(({
					theme: B
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
				R = () => o().createElement(S, null, o().createElement("svg", {
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
				S = (0, a.createComponent)(({
					theme: B
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
				A = () => o().createElement(H, null, o().createElement("svg", {
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
				H = (0, a.createComponent)(({
					theme: B
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
				K = () => o().createElement("svg", {
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
				Z = () => o().createElement("svg", {
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
				z = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				A2: function() {
					return u
				},
				He: function() {
					return m
				},
				N$: function() {
					return f
				},
				Qq: function() {
					return a
				},
				ST: function() {
					return l
				},
				wM: function() {
					return o
				}
			});
			var e = n("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				a = "login-apple-jwt",
				l = "cf-test",
				m = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				f = d => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: d ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: d ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: d ? e.rD : e.PJ
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
		"../react/pages/pages/constants.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				A: function() {
					return g
				},
				C1: function() {
					return y
				},
				Dp: function() {
					return W
				},
				HD: function() {
					return I
				},
				IK: function() {
					return m
				},
				L7: function() {
					return a
				},
				Li: function() {
					return E
				},
				Ni: function() {
					return H
				},
				OG: function() {
					return b
				},
				QF: function() {
					return j
				},
				QV: function() {
					return A
				},
				Sx: function() {
					return R
				},
				Ub: function() {
					return B
				},
				X3: function() {
					return r
				},
				aP: function() {
					return u
				},
				eO: function() {
					return s
				},
				fH: function() {
					return i
				},
				fQ: function() {
					return v
				},
				fR: function() {
					return e
				},
				hE: function() {
					return z
				},
				iS: function() {
					return C
				},
				ku: function() {
					return Z
				},
				nY: function() {
					return S
				},
				w3: function() {
					return l
				},
				wJ: function() {
					return d
				},
				wp: function() {
					return c
				},
				yu: function() {
					return t
				},
				zG: function() {
					return K
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-pages",
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
				l = "Allow Members - Cloudflare Pages",
				m = 58,
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
				u = "production",
				d = 2e3,
				y = 100,
				t = 350,
				r = 1e7,
				s = ["Success:", "Error:", "Failed:"],
				c = 10,
				i = "_headers",
				E = "_redirects",
				g = "_routes.json",
				v = "_worker.js",
				C = "do-a-barrel-roll",
				I = [i, E, g, v],
				R = 1024 * 1024 * 25,
				S = 1e3,
				A = {
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
				H = 1e5,
				K = 75e3,
				Z = "workers",
				W = "cloudflare_pages_build_caching",
				z = 2;
			let B = function(N) {
				return N[N.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", N[N.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", N[N.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", N[N.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", N[N.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", N[N.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", N
			}({});
			const j = 1,
				L = 2,
				b = 2
		},
		"../react/pages/pages/routes.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Hv: function() {
					return a
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
				l = m => `${m.subdomain}.pages.dev`
		},
		"../react/pages/r2/routes.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Hv: function() {
					return a
				},
				Jg: function() {
					return f
				},
				_j: function() {
					return o
				},
				pZ: function() {
					return u
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
				a = {
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
				l = t => {
					const r = "r2.cloudflarestorage.com";
					switch (t) {
						case "default":
							return r;
						case "eu":
							return `eu.${r}`
					}
				},
				m = (t, r) => {
					const s = l(r);
					return `https://${t}.${s}`
				},
				f = (t, r, s) => `${m(t,r)}/${s}`,
				u = () => "r2.dev",
				d = t => {
					const r = u();
					return `https://${t}.${r}`
				},
				y = (t, r) => `${d(t)}/${r}`
		},
		"../react/pages/security-center/tracking.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				R: function() {
					return e
				},
				v: function() {
					return o
				}
			});
			let e = function(a) {
				return a.LOAD_SCAN_INFO = "load url scan information", a.INITIATE_URL_SCAN = "initiate url scan", a
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
		"../react/pages/spectrum/tracking.tsx": function(F, _, n) {
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
		"../react/pages/traffic/argo/tracking.ts": function(F, _, n) {
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
		"../react/pages/traffic/load-balancing/tracking.ts": function(F, _, n) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(F, _, n) {
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
		"../react/pages/welcome/routes.ts": function(F, _, n) {
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
		"../react/pages/zoneless-workers/constants.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				$2: function() {
					return S
				},
				CI: function() {
					return I
				},
				IS: function() {
					return u
				},
				L7: function() {
					return m
				},
				Oj: function() {
					return s
				},
				QV: function() {
					return c
				},
				X$: function() {
					return v
				},
				X6: function() {
					return y
				},
				fE: function() {
					return d
				},
				im: function() {
					return E
				},
				rL: function() {
					return t
				},
				wW: function() {
					return f
				}
			});

			function e(A) {
				for (var H = 1; H < arguments.length; H++) {
					var K = arguments[H] != null ? Object(arguments[H]) : {},
						Z = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(K).filter(function(W) {
						return Object.getOwnPropertyDescriptor(K, W).enumerable
					})), Z.forEach(function(W) {
						o(A, W, K[W])
					})
				}
				return A
			}

			function o(A, H, K) {
				return H = a(H), H in A ? Object.defineProperty(A, H, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[H] = K, A
			}

			function a(A) {
				var H = l(A, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function l(A, H) {
				if (typeof A != "object" || A === null) return A;
				var K = A[Symbol.toPrimitive];
				if (K !== void 0) {
					var Z = K.call(A, H || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(A)
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
				f = 800,
				u = "40rem",
				d = {
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
				y = {
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
				c = {
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
				i = "workers.dev",
				E = "YYYY-MM-DD HH:mm:SS ZZ",
				g = "active",
				v = ["bundled", "unbound", "standard"],
				C = null,
				I = {
					bandaWorkersCI: "banda-workers-ui"
				};
			let R = function(A) {
				return A[A.NONE = 0] = "NONE", A[A.MISS = 1] = "MISS", A[A.EXPIRED = 2] = "EXPIRED", A[A.UPDATING = 3] = "UPDATING", A[A.STALE = 4] = "STALE", A[A.HIT = 5] = "HIT", A[A.IGNORED = 6] = "IGNORED", A[A.BYPASS = 7] = "BYPASS", A[A.REVALIDATED = 8] = "REVALIDATED", A[A.DYNAMIC = 9] = "DYNAMIC", A[A.STREAM_HIT = 10] = "STREAM_HIT", A[A.DEFERRED = 11] = "DEFERRED", A
			}({});
			const S = [R.HIT, R.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Hv: function() {
					return u
				},
				L: function() {
					return a
				},
				Q9: function() {
					return l
				},
				_j: function() {
					return m
				},
				ky: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = d => `${d}.workers.dev`,
				a = (d, y, t) => `${t?`${t}.`:""}${d}.${o(y)}`,
				l = (d, y, t) => `https://${a(d,y,t)}`,
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
					serviceDetailsLogsSearch: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/search`,
					serviceDetailsLogsLive: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/live`,
					serviceDetailsLogpush: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/logpush`,
					serviceDetailsLogsCron: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/cron`,
					serviceDetailsManage: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					serviceDetailsRename: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/rename`,
					createDeployment: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deploy-version`,
					deploymentHistory: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deployment-history`,
					buildHistory: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/builds`,
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
				f = "https://cron-triggers.cloudflareworkers.com",
				u = {
					accountMtlsCertificates: (0, e.BC)`/accounts/${"accountId"}/mtls_certificates`,
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/workers/account-settings`,
					builds: {
						build: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}`,
						latestBuildsByWorkers: (0, e.BC)`/accounts/${"accountId"}/builds/builds/latest`,
						buildLogLines: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/logs`,
						buildsByScriptId: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/builds`,
						buildsByVersionIds: (0, e.BC)`/accounts/${"accountId"}/builds/builds`,
						buildTokens: (0, e.BC)`/accounts/${"accountId"}/builds/tokens`,
						repoConnections: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections`,
						repoConnection: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections/${"repo_connection_uuid"}`,
						triggers: (0, e.BC)`/accounts/${"accountId"}/builds/triggers`,
						trigger: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}`,
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
						ruok: (0, e.BC)`/accounts/${"accountId"}/workers/observability/ruok`,
						queryRun: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/query-run`,
						keys: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/keys`,
						values: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/values`
					},
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				MN: function() {
					return a
				},
				Yg: function() {
					return m
				},
				i$: function() {
					return l
				},
				l3: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const a = async ([u, d]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: u,
					variables: d
				})
			})).body, l = async (...u) => (await e.get(...u)).body, m = u => async (d, y) => {
				const t = await fetch(d, y).then(r => r.json());
				return u.assertDecode(t)
			}, f = async (...u) => (await l(...u)).result;
			_.ZP = {
				fetcher: u => Array.isArray(u) ? f(...u) : f(u)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(F, _) {
				_()
			})(this, function() {
				"use strict";

				function F() {
					var n = !0,
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

					function l(g) {
						return !!(g && g !== document && g.nodeName !== "HTML" && g.nodeName !== "BODY" && "classList" in g && "contains" in g.classList)
					}

					function m(g) {
						var v = g.type,
							C = g.tagName;
						return !!(C == "INPUT" && a[v] && !g.readOnly || C == "TEXTAREA" && !g.readOnly || g.isContentEditable)
					}

					function f(g) {
						g.getAttribute("is-focus-visible") !== "" && g.setAttribute("is-focus-visible", "")
					}

					function u(g) {
						g.getAttribute("is-focus-visible") === "" && g.removeAttribute("is-focus-visible")
					}

					function d(g) {
						l(document.activeElement) && f(document.activeElement), n = !0
					}

					function y(g) {
						n = !1
					}

					function t(g) {
						!l(g.target) || (n || m(g.target)) && f(g.target)
					}

					function r(g) {
						!l(g.target) || g.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), u(g.target))
					}

					function s(g) {
						document.visibilityState == "hidden" && (e && (n = !0), c())
					}

					function c() {
						document.addEventListener("mousemove", E), document.addEventListener("mousedown", E), document.addEventListener("mouseup", E), document.addEventListener("pointermove", E), document.addEventListener("pointerdown", E), document.addEventListener("pointerup", E), document.addEventListener("touchmove", E), document.addEventListener("touchstart", E), document.addEventListener("touchend", E)
					}

					function i() {
						document.removeEventListener("mousemove", E), document.removeEventListener("mousedown", E), document.removeEventListener("mouseup", E), document.removeEventListener("pointermove", E), document.removeEventListener("pointerdown", E), document.removeEventListener("pointerup", E), document.removeEventListener("touchmove", E), document.removeEventListener("touchstart", E), document.removeEventListener("touchend", E)
					}

					function E(g) {
						g.target.nodeName.toLowerCase() !== "html" && (n = !1, i())
					}
					document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", y, !0), document.addEventListener("pointerdown", y, !0), document.addEventListener("touchstart", y, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", s, !0), c(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function _(n) {
					var e;

					function o() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && _(F)
			})
		},
		"../react/utils/bootstrap.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				$8: function() {
					return o
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return l
				},
				gm: function() {
					return a
				}
			});
			const e = () => {
					var m, f, u;
					return (m = window) === null || m === void 0 || (f = m.bootstrap) === null || f === void 0 || (u = f.data) === null || u === void 0 ? void 0 : u.security_token
				},
				o = () => {
					var m, f, u;
					return !!((m = n.g.bootstrap) === null || m === void 0 || (f = m.data) === null || f === void 0 || (u = f.user) === null || u === void 0 ? void 0 : u.id)
				},
				a = () => {
					var m, f;
					return !!((m = n.g.bootstrap) === null || m === void 0 || (f = m.data) === null || f === void 0 ? void 0 : f.is_kendo)
				},
				l = () => {
					var m, f, u, d;
					return (m = window) === null || m === void 0 || (f = m.bootstrap) === null || f === void 0 || (u = f.data) === null || u === void 0 || (d = u.user) === null || d === void 0 ? void 0 : d.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				O5: function() {
					return l
				},
				Xm: function() {
					return a
				},
				kT: function() {
					return u
				},
				wV: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var t;
					return ((t = window) === null || t === void 0 ? void 0 : t.OnetrustActiveGroups) || ""
				},
				a = () => (o() || "").indexOf("C0002") !== -1,
				l = () => (o() || "").indexOf("C0003") !== -1,
				m = () => (o() || "").indexOf("C0004") !== -1,
				f = () => (o() || "").indexOf("C0005") !== -1,
				u = t => {
					const r = ".cloudflare.com";
					document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				d = () => {
					var t;
					const r = (t = window.OneTrust) === null || t === void 0 ? void 0 : t.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				y = () => parse(document.cookie)
		},
		"../react/utils/history.ts": function(F, _, n) {
			"use strict";
			var e = n("../../../../node_modules/history/esm/history.js");
			const o = (0, e.lX)();
			_.Z = o
		},
		"../react/utils/i18n.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				AI: function() {
					return v
				},
				S8: function() {
					return g
				},
				ZW: function() {
					return f
				},
				ay: function() {
					return C
				},
				fh: function() {
					return I
				},
				ly: function() {
					return d
				},
				th: function() {
					return m
				},
				ti: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				a = n("../../../common/intl/intl-types/src/index.ts"),
				l = n("../../../common/util/types/src/utils/index.ts");
			const m = "cf-sync-locale-with-cps",
				f = a.Q.en_US,
				u = "en_US",
				d = "cf-locale",
				y = H => (0, l.Yd)(a.Q).find(K => a.Q[K] === H) || u,
				t = [],
				r = [],
				s = [a.Q.de_DE, a.Q.en_US, a.Q.es_ES, a.Q.fr_FR, a.Q.it_IT, a.Q.pt_BR, a.Q.ko_KR, a.Q.ja_JP, a.Q.zh_CN, a.Q.zh_TW],
				c = [a.Q.de_DE, a.Q.en_US, a.Q.es_ES, a.Q.es_CL, a.Q.es_EC, a.Q.es_MX, a.Q.es_PE, a.Q.fr_FR, a.Q.it_IT, a.Q.ja_JP, a.Q.ko_KR, a.Q.pt_BR, a.Q.zh_CN, a.Q.zh_TW],
				i = {
					test: [...s, ...r, ...t],
					development: [...s, ...r, ...t],
					staging: [...s, ...r, ...t],
					production: [...s, ...r]
				},
				E = {
					test: [...c, ...r, ...t],
					development: [...c, ...r, ...t],
					staging: [...c, ...r, ...t],
					production: [...c, ...r]
				},
				g = (H, K) => {
					const Z = a.Q[K];
					return H ? i.production.includes(Z) : E.production.includes(Z)
				},
				v = H => Object.keys(a.Q).filter(K => g(H, K)),
				C = H => {
					const K = a.Q[H];
					return r.includes(K)
				},
				I = (H, K) => H ? R[K] : S[K],
				R = {
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
		"../react/utils/translator.tsx": function(F, _, n) {
			"use strict";
			n.d(_, {
				QT: function() {
					return c
				},
				Vb: function() {
					return u
				},
				Yi: function() {
					return y
				},
				ZP: function() {
					return f
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
				a = n("../../../common/intl/intl-react/src/index.ts"),
				l = n("../flags.js");
			const m = new o.Z({
				pseudoLoc: (0, l.J8)("is_pseudo_loc")
			});

			function f(i, ...E) {
				return m.t(i, ...E)
			}
			const u = m;

			function d(i, ...E) {
				return markdown(f(i, E))
			}

			function y(i) {
				if (Number(i) !== 0) {
					if (i % 86400 == 0) return f("time.num_days", {
						smart_count: i / 86400
					});
					if (i % 3600 == 0) return f("time.num_hours", {
						smart_count: i / 3600
					});
					if (i % 60 == 0) return f("time.num_minutes", {
						smart_count: i / 60
					})
				}
				return f("time.num_seconds", {
					smart_count: i
				})
			}

			function t(i, E) {
				return i in E ? E[i] : void 0
			}
			const r = a.cC,
				s = a.oc,
				c = a.QT
		},
		"../react/utils/url.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Ct: function() {
					return R
				},
				Fl: function() {
					return G
				},
				KT: function() {
					return ee
				},
				NF: function() {
					return E
				},
				Nw: function() {
					return C
				},
				Pd: function() {
					return v
				},
				Uh: function() {
					return $
				},
				Y_: function() {
					return i
				},
				e1: function() {
					return I
				},
				el: function() {
					return B
				},
				hW: function() {
					return L
				},
				pu: function() {
					return q
				},
				qR: function() {
					return z
				},
				td: function() {
					return g
				},
				uW: function() {
					return N
				}
			});
			var e = n("../node_modules/query-string/query-string.js"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				l = n("../react/pages/stream/routes.ts"),
				m = n("../react/pages/r2/routes.ts"),
				f = n("../react/pages/zoneless-workers/routes.ts"),
				u = n("../react/pages/pages/routes.ts");

			function d(x) {
				for (var te = 1; te < arguments.length; te++) {
					var Q = arguments[te] != null ? Object(arguments[te]) : {},
						ce = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && ce.push.apply(ce, Object.getOwnPropertySymbols(Q).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(Q, ue).enumerable
					})), ce.forEach(function(ue) {
						y(x, ue, Q[ue])
					})
				}
				return x
			}

			function y(x, te, Q) {
				return te = t(te), te in x ? Object.defineProperty(x, te, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[te] = Q, x
			}

			function t(x) {
				var te = r(x, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function r(x, te) {
				if (typeof x != "object" || x === null) return x;
				var Q = x[Symbol.toPrimitive];
				if (Q !== void 0) {
					var ce = Q.call(x, te || "default");
					if (typeof ce != "object") return ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(x)
			}
			const {
				endsWithSlash: s
			} = a.default, c = (x, te) => {
				const Q = x.replace(s, "").split("/");
				return Q.slice(0, 2).concat([te]).concat(Q.slice(3)).join("/")
			}, i = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), E = x => `/${x.replace(s,"").replace(/^\//,"")}`, g = x => C("add-site", x), v = x => C("billing", x), C = (x, te) => te ? `/${te}${x?`/${x}`:""}` : `/?to=/:account/${x}`, I = () => {
				const x = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return x ? x[1] : null
			}, R = (x, te) => o().stringify(d({}, o().parse(x), te)), S = (x = "") => x.toString().replace(/([\/]{1,})$/, ""), A = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], H = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, K = /^\/(\w{32,})(\/[^.]*)?/, Z = x => A.includes(x), W = x => !Z(x), z = x => !Z(x) && K.test(x), B = x => !Z(x) && H.test(x), j = x => H.exec(x), L = x => {
				if (B(x)) return x.split("/").filter(te => te.length > 0)[1]
			}, b = x => K.exec(x), N = x => {
				if (z(x)) {
					const te = b(x);
					if (te) return te[1]
				}
			}, O = x => z(x) && x.split("/")[2] === "register-domain", V = x => O(x) ? x.split("/") : null, J = x => {
				if (B(x)) {
					const [, , , te, Q, ce, ue, ie] = x.split("/");
					return te === "traffic" && Q === "load-balancing" && ce === "pools" && ue === "edit" && ie
				}
			}, $ = x => {
				const te = V(x);
				if (te) return te[3]
			}, D = (x, te) => {
				var Q, ce;
				return ((Q = x.pattern.match(/\:/g)) !== null && Q !== void 0 ? Q : []).length - ((ce = te.pattern.match(/\:/g)) !== null && ce !== void 0 ? ce : []).length
			}, k = [...Object.values(l.C), ...Object.values(m._j), ...Object.values(f._j), ...Object.values(u._j)].sort(D);

			function G(x) {
				if (!W(x)) return x;
				for (const ie of k)
					if (ie.expression.test(x)) return ie.pattern;
				const te = V(x);
				if (te) {
					const [, , ie, , ...fe] = te;
					return `/:accountId/${ie}/:domainName/${fe.join("/")}`
				}
				if (J(x)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const ce = j(x);
				if (ce) {
					const [, , , , ie] = ce;
					return `/:accountId/:zoneName${ie||""}`
				}
				const ue = b(x);
				if (ue) {
					const [, , ie] = ue;
					return `/:accountId${ie||""}`
				}
				return x
			}

			function q(x) {
				if (!!x) try {
					const Q = x.split(".").pop();
					if (Q && Q.length > 0) return Q
				} catch {}
			}

			function ee(x, te = document.location.href) {
				try {
					const Q = new URL(x),
						ce = new URL(te);
					if (Q.origin === ce.origin) return `${Q.pathname}${Q.search}${Q.hash}`
				} catch {}
			}
		},
		"../react/utils/zaraz.ts": function(F, _, n) {
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
		"../utils/getDashVersion.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				p: function() {
					return a
				},
				t: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var l, m;
					return (l = window) === null || l === void 0 || (m = l.build) === null || m === void 0 ? void 0 : m.dashVersion
				},
				a = () => {
					var l;
					return ((0, e.parse)((l = document) === null || l === void 0 ? void 0 : l.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initGates.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				n: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				o = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				a = n("../react/app/providers/storeContainer.js"),
				l = n("../node_modules/uuid/dist/esm-browser/v4.js"),
				m = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const f = "ANON_USER_ID";

			function u() {
				var y, t, r, s;
				let c = (y = n.g) === null || y === void 0 || (t = y.bootstrap) === null || t === void 0 || (r = t.data) === null || r === void 0 || (s = r.user) === null || s === void 0 ? void 0 : s.id;
				if (!c) {
					let i = m.Z.get(f);
					if (!i) {
						let E = (0, l.Z)();
						m.Z.set(f, E), i = E
					}
					return i
				}
				return c
			}
			async function d() {
				const y = (0, a.bh)();
				y.dispatch((0, e.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await y.dispatch((0, o.UL)({
					userId: u()
				}))
			}
		},
		"../utils/initSparrow.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Wi: function() {
					return we
				},
				IM: function() {
					return $e
				},
				yV: function() {
					return Fe
				},
				Ug: function() {
					return Be
				},
				v_: function() {
					return Le
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				a = n("../react/utils/bootstrap.ts"),
				l = n("../react/app/providers/storeContainer.js"),
				m = n("../react/common/selectors/languagePreferenceSelector.ts"),
				f = n("../flags.js"),
				u = n("../../../../node_modules/cookie/index.js"),
				d = n("../react/utils/url.ts"),
				y = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../../../../node_modules/lodash-es/memoize.js"),
				s = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				c = n("../utils/getDashVersion.ts"),
				i = n("../react/common/selectors/accountSelectors.ts");

			function E(ne) {
				for (var T = 1; T < arguments.length; T++) {
					var M = arguments[T] != null ? Object(arguments[T]) : {},
						X = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(M).filter(function(le) {
						return Object.getOwnPropertyDescriptor(M, le).enumerable
					})), X.forEach(function(le) {
						g(ne, le, M[le])
					})
				}
				return ne
			}

			function g(ne, T, M) {
				return T = v(T), T in ne ? Object.defineProperty(ne, T, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[T] = M, ne
			}

			function v(ne) {
				var T = C(ne, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function C(ne, T) {
				if (typeof ne != "object" || ne === null) return ne;
				var M = ne[Symbol.toPrimitive];
				if (M !== void 0) {
					var X = M.call(ne, T || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(ne)
			}
			const I = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				R = (0, r.Z)(ne => {
					try {
						return I.assertDecode((0, u.parse)(ne))
					} catch (T) {
						return console.error(T), {}
					}
				}),
				S = ne => (T, M, X) => {
					try {
						const Ie = window.location.pathname,
							Ue = (0, l.bh)().getState(),
							Ze = R(document.cookie),
							We = E({
								page: (0, d.Fl)(X.page || window.location.pathname),
								dashVersion: (0, c.t)()
							}, Ze);
						if (T === "identify") {
							var le, ge;
							const Ae = {
								gates: (0, s.T2)(Ue) || {},
								country: (le = n.g) === null || le === void 0 || (ge = le.bootstrap) === null || ge === void 0 ? void 0 : ge.ip_country
							};
							return ne(T, M, E({}, We, Ae, X))
						} else {
							const Ae = {
								accountId: (0, d.uW)(Ie),
								zoneName: (0, d.hW)(Ie),
								domainName: (0, d.Uh)(Ie)
							};
							if ((0, d.qR)(Ie)) {
								var Ee;
								const Pe = (0, i.D0)(Ue);
								Ae.isEntAccount = Pe == null || (Ee = Pe.meta) === null || Ee === void 0 ? void 0 : Ee.has_enterprise_zones
							}
							if ((0, d.el)(Ie)) {
								var ve;
								const Pe = (0, y.nA)(Ue);
								Ae.zoneId = Pe == null ? void 0 : Pe.id, Ae.plan = Pe == null || (ve = Pe.plan) === null || ve === void 0 ? void 0 : ve.legacy_id
							}
							return ne(T, M, E({}, We, Ae, X))
						}
					} catch (Ie) {
						return console.error(Ie), ne(T, M, X)
					}
				},
				A = ne => async (T, M, X) => {
					try {
						return await ne(T, M, X)
					} catch (le) {
						if (console.error(le), !Le()) throw le;
						return {
							status: "rejected",
							reason: le
						}
					}
				};
			var H = n("../react/common/middleware/sparrow/errors.ts"),
				K = n("../react/pages/firewall/bots/tracking.ts"),
				Z = n("../react/pages/caching/tracking.tsx"),
				W = n("../react/pages/magic/packet-captures/constants.ts"),
				z = n("../react/pages/firewall/page-shield/tracking.ts"),
				B = n("../react/pages/firewall/rulesets/tracking.tsx"),
				j = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				L = n("../react/pages/spectrum/tracking.tsx"),
				b = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				N = n("../react/pages/security-center/tracking.ts"),
				O = n("../react/pages/firewall/api-shield/tracking.ts"),
				V = n("../react/pages/home/configurations/lists/tracking.ts"),
				J = n("../react/pages/traffic/load-balancing/tracking.ts"),
				$ = n("../react/pages/home/alerts/tracking.ts"),
				D = n("../react/pages/dns/dns-records/tracking.ts"),
				k = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				G = n("../react/pages/traffic/argo/tracking.ts"),
				q = n("../react/pages/magic/network-monitoring/constants.ts"),
				ee = n("../react/pages/firewall/security-analytics/logs/constants.ts"),
				x = n("../react/pages/magic/overview/tracking.ts"),
				te = n("../react/pages/hyperdrive/tracking.ts"),
				Q = n("../react/pages/home/domain-registration/tracking.ts"),
				ce = n("../react/pages/zoneless-workers/constants.ts"),
				ue = n("../react/pages/pages/constants.ts"),
				ie = n("../react/app/components/GlobalHeader/AddProductDropdown.tsx");
			const Te = ((ne, T, ...M) => t.eg.union([t.eg.literal(ne), t.eg.literal(T), ...M.map(X => t.eg.literal(X))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on edit snippet", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "Explore demo button click", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open configuration switcher sidemodal", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "Request trial button click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", ce.QV.clickedDownloadAnalytics, ce.QV.clickedPrintAnalytics, ce.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", ue.QV.toggledPagesSmartPlacement, ue.QV.downloadDemoProject, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", K.N3.INITIAL_FETCH_SCORES, K.N3.FETCH_CONFIGURATION, K.N3.INITIAL_FETCH_TIME_SERIES, K.N3.INITIAL_FETCH_ATTRIBUTES, K.N3.UPDATE_SETTINGS, K.N3.DELETE_RULE, K.N3.UPDATE_RULE, K.N3.FETCH_RULES, K.N3.CONFIGURE_BOT_MANAGEMENT, K.N3.WAF_RULES_REDIRECT, b.F.TOGGLE_TCP_PROTECTION, b.F.GET_TCP_PROTECTION_PREFIXES, b.F.CREATE_TCP_PROTECTION_PREFIXES, b.F.CREATE_TCP_PROTECTION_PREFIX, b.F.UPDATE_TCP_PROTECTION_PREFIX, b.F.DELETE_TCP_PROTECTION_PREFIX, b.F.DELETE_TCP_PROTECTION_PREFIXES, b.F.GET_TCP_PROTECTION_ALLOWLIST, b.F.CREATE_TCP_PROTECTION_ALLOWLIST, b.F.UPDATE_TCP_PROTECTION_ALLOWLIST, b.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, b.F.DELETE_TCP_PROTECTION_ALLOWLIST, b.F.GET_SYN_PROTECTION_RULES, b.F.GET_SYN_PROTECTION_RULE, b.F.CREATE_SYN_PROTECTION_RULE, b.F.UPDATE_SYN_PROTECTION_RULE, b.F.DELETE_SYN_PROTECTION_RULE, b.F.GET_TCP_FLOW_PROTECTION_RULES, b.F.GET_TCP_FLOW_PROTECTION_RULE, b.F.CREATE_TCP_FLOW_PROTECTION_RULE, b.F.UPDATE_TCP_FLOW_PROTECTION_RULE, b.F.DELETE_TCP_FLOW_PROTECTION_RULE, b.F.GET_SYN_PROTECTION_FILTERS, b.F.GET_SYN_PROTECTION_FILTER, b.F.CREATE_SYN_PROTECTION_FILTER, b.F.UPDATE_SYN_PROTECTION_FILTER, b.F.DELETE_SYN_PROTECTION_FILTER, b.F.GET_TCP_FLOW_PROTECTION_FILTERS, b.F.GET_TCP_FLOW_PROTECTION_FILTER, b.F.CREATE_TCP_FLOW_PROTECTION_FILTER, b.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, b.F.DELETE_TCP_FLOW_PROTECTION_FILTER, b.F.GET_DNS_PROTECTION_RULES, b.F.GET_DNS_PROTECTION_RULE, b.F.CREATE_DNS_PROTECTION_RULE, b.F.UPDATE_DNS_PROTECTION_RULE, b.F.DELETE_DNS_PROTECTION_RULE, z.F.MANAGE_PAGE_SHIELD_POLICY, z.F.CONFIGURE_PAGE_SHIELD, z.F.VIEW_DETECTED_CONNECTIONS, z.F.VIEW_DETECTED_SCRIPTS, z.F.VIEW_PAGE_SHIELD_POLICIES, z.F.VIEW_PAGE_SHIELD_SETTINGS, V.y.CREATE_LIST, V.y.DELETE_LIST, V.y.ADD_LIST_ITEM, V.y.DELETE_LIST_ITEM, te.KO.PURCHASE_WORKERS_PAID, te.KO.LIST_CONFIGS, te.KO.CREATE_HYPERDRIVE_CONFIG, te.KO.VIEW_CONFIG_DETAILS, te.KO.UPDATE_CACHING_SETTINGS, te.KO.DELETE_HYPERDRIVE_CONFIG, te.KO.CLICK_HYPERDRIVE_DOCUMENTATION, te.KO.CLICK_GET_STARTED_GUIDE, te.KO.CLICK_CONNECTIVITY_GUIDES, te.KO.CLICK_QUICK_LINK, L.N.CNAME, L.N.IP_ADDRESS, L.N.LB, L.N.UPDATE_CNAME, L.N.UPDATE_IP_ADDRESS, L.N.UPDATE_LB, L.N.DISABLE, Z.N.TIERED_CACHE, Z.N.CACHE_PURGE, Z.N.CACHE_ANALYTICS, ...(0, B.x4)(), j.N.CREATE, j.N.EVENTS, j.N.ANALYTICS, j.N.UPDATE, j.N.GENERATE_PREVIEW, N.R.INITIATE_URL_SCAN, N.R.LOAD_SCAN_INFO, N.v.EXPAND_INSIGHT_ROW, N.v.CLICK_RESOLVE_BUTTON, N.v.FOLLOW_RESOLVE_URL, N.v.MANAGE_INSIGHT, N.v.CLICK_SCAN_NOW, N.v.CLICK_EXPORT_INSIGHTS, N.v.BULK_ARCHIVE, O.Fj[O.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, O.Fj[O.kq.ENDPOINT_MANAGEMENT].detailedMetrics, O.Fj[O.kq.ENDPOINT_MANAGEMENT].createEndpoint, O.Fj[O.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, O.Fj[O.kq.ENDPOINT_MANAGEMENT].deployRouting, O.Fj[O.kq.ENDPOINT_MANAGEMENT].deleteRouting, O.Fj[O.kq.API_DISCOVERY].viewDiscoveredEndpoints, O.Fj[O.kq.API_DISCOVERY].saveDiscoveredEndpoint, O.Fj[O.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, O.Fj[O.kq.SCHEMA_VALIDATION].viewSchemasList, O.Fj[O.kq.SCHEMA_VALIDATION].uploadSchema, O.Fj[O.kq.SCHEMA_VALIDATION].viewSchemaAdoption, O.Fj[O.kq.SCHEMA_VALIDATION].downloadSchema, O.Fj[O.kq.SCHEMA_VALIDATION].deleteSchema, O.Fj[O.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, O.Fj[O.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, O.Fj[O.kq.SEQUENCE_ANALYTICS].viewSequencesPage, O.Fj[O.kq.JWT_VALIDATION].viewJWTRules, O.Fj[O.kq.JWT_VALIDATION].addJWTRule, O.Fj[O.kq.JWT_VALIDATION].editJWTRule, O.Fj[O.kq.JWT_VALIDATION].deleteJWTRule, O.Fj[O.kq.JWT_VALIDATION].reprioritizeJWTRule, O.Fj[O.kq.JWT_VALIDATION].viewJWTConfigs, O.Fj[O.kq.JWT_VALIDATION].addJWTConfig, O.Fj[O.kq.JWT_VALIDATION].editJWTConfig, O.Fj[O.kq.JWT_VALIDATION].deleteJWTConfig, O.Fj[O.kq.SETTINGS].redirectToFirewallRulesTemplate, O.Fj[O.kq.SETTINGS].redirectToPages, O.Fj[O.kq.SETTINGS].listSessionIdentifiers, O.Fj[O.kq.SETTINGS].listRequestsContainingSessionIdentifiers, O.Fj[O.kq.SETTINGS].addOrRemoveSessionIdentifiers, O.Fj[O.kq.SEQUENCE_RULES].listSequenceRules, O.Fj[O.kq.SEQUENCE_RULES].deleteSequenceRule, O.Fj[O.kq.SEQUENCE_RULES].reorderSequenceRule, O.Fj[O.kq.SEQUENCE_RULES].createSequenceRule, O.Fj[O.kq.SEQUENCE_RULES].editSequenceRule, J.Z.CREATE_AND_DEPLOY, J.Z.ANALYTICS, $.y.SECONDARY_DNS_NOTIFICATION_CREATE, $.y.SECONDARY_DNS_NOTIFICATION_UPDATE, $.y.SECONDARY_DNS_NOTIFICATION_DELETE, D.U.ZONE_TRANSFER_SUCCESS, D.U.DNS_RECORD_CREATE, D.U.DNS_RECORD_UPDATE, D.U.DNS_RECORD_DELETE, k.Y.PEER_DNS_CREATE, k.Y.PEER_DNS_UPDATE, k.Y.PEER_DNS_DELETE, k.Y.ZONE_TRANSFER_ENABLE, k.Y.ZONE_TRANSFER_DISABLE, G.V.ARGO_ENABLEMENT, G.V.ARGO_GEO_ANALYTICS_FETCH, G.V.ARGO_GLOBAL_ANALYTICS_FETCH, W.X.VIEW_BUCKETS_LIST, W.X.CREATE_BUCKET, W.X.VALIDATE_BUCKET, W.X.DELETE_BUCKET, W.X.VIEW_CAPTURES_LIST, W.X.CREATE_SIMPLE_CAPTURE, W.X.CREATE_FULL_CAPTURE, W.X.VIEW_FULL_CAPTURE, W.X.DOWNLOAD_SIMPLE_CAPTURE, q.bK.VIEW_RULES, q.bK.CREATE_RULE, q.bK.UPDATE_RULE, q.bK.DELETE_RULE, q.bK.VIEW_CONFIGURATION, q.bK.CREATE_CONFIGURATION, q.bK.UPDATE_CONFIGURATION, q.bK.DELETE_CONFIGURATION, x.r8.VIEW_ALERTS, x.r8.VIEW_ALERTS_HISTORY, x.r8.MAGIC_OVERVIEW_ANALYTICS, x.VZ.CREATE_SITE, x.VZ.CREATE_TUNNEL, x.VZ.CREATE_STATIC_ROUTE, ee.o4.CLICK_ADAPTIVE_SAMPLING, ee.o4.CLICK_TO_LOG_EXPLORER_BANNER, ee.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, ee.o4.CLICK_SWITCH_TO_RAW_LOGS, ee.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", Q.U.REGISTER_DOMAIN_SEARCH_SUBMIT, Q.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, Q.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, Q.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, Q.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, Q.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, Q.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, Q.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, Q.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, Q.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, Q.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, Q.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, Q.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, Q.U.REGISTER_DOMAIN_CHECKOUT_ERROR, Q.U.TRANSFER_DOMAIN_CHANGE_STEP, Q.U.RENEW_DOMAIN_COMPLETED, Q.U.RESTORE_DOMAIN_INIT, Q.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, Q.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, Q.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, Q.U.RESTORE_DOMAIN_FAILURE, Q.U.RESTORE_DOMAIN_COMPLETED, Q.U.DOMAIN_DELETE_INIT, Q.U.DOMAIN_DELETE_COMPLETED, Q.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, Q.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, Q.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, Q.U.DOMAIN_DELETE_CONFIRM_DELETE, Q.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, Q.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, Q.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, Q.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, Q.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, ie.S.EXISTING_DOMAIN, ie.S.NEW_DOMAIN, ie.S.WAF_RULESET, ie.S.WORKERS, ie.S.PAGES, ie.S.R2, ie.S.ACCOUNT_MEMBERS),
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
					_ga: t.eg.any.optional,
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
					apiUrl: t.eg.any.optional,
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
					dashVersion: t.eg.any.optional,
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
					uploading: t.eg.any.optional,
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
				Ce = (ne, T) => {
					const [M, X] = U(T);
					let le, ge;
					return (0, t.nM)(Te.decode(ne)) && (le = new H.Uh(ne)), X && X.length > 0 && (ge = new H.oV(ne, X)), [M, le, ge]
				},
				U = ne => {
					const T = _e.decode(ne);
					if ((0, t.nM)(T)) {
						const M = T.left.map(({
							context: X
						}) => X.map(({
							key: le
						}) => le)).reduce((X, le) => X.concat(le), []).filter(X => X in ne);
						return [ae(M, ne), M]
					}
					return [ne, []]
				},
				ae = (ne, T) => Object.entries(T).reduce((M, [X, le]) => (ne.includes(X) || (M[X] = le), M), {}),
				pe = ne => (T, M, X) => {
					const [le, ge, Ee] = Ce(M, X);
					if (ge) throw ge;
					return Ee && console.error(Ee), ne(T, M, le)
				};
			var Se = n("../react/utils/zaraz.ts");
			const Re = {
					identify: !0
				},
				ke = ne => (T, M, X) => (Re[M] || Se.tg === null || Se.tg === void 0 || Se.tg.track(M, X), ne(T, M, X));
			var xe = n("../react/utils/cookiePreferences.ts");

			function De(ne) {
				for (var T = 1; T < arguments.length; T++) {
					var M = arguments[T] != null ? Object(arguments[T]) : {},
						X = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(M).filter(function(le) {
						return Object.getOwnPropertyDescriptor(M, le).enumerable
					})), X.forEach(function(le) {
						Me(ne, le, M[le])
					})
				}
				return ne
			}

			function Me(ne, T, M) {
				return T = je(T), T in ne ? Object.defineProperty(ne, T, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[T] = M, ne
			}

			function je(ne) {
				var T = Ne(ne, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function Ne(ne, T) {
				if (typeof ne != "object" || ne === null) return ne;
				var M = ne[Symbol.toPrimitive];
				if (M !== void 0) {
					var X = M.call(ne, T || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(ne)
			}
			const Be = ne => {
					o().init(De({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Le() && !(0, a.gm)() && we(),
						middlewares: [A, pe, S, ke]
					}, ne))
				},
				Fe = () => {
					o().identify(De({}, (0, e.getAttribution)(), {
						locale: (0, m.r)((0, l.bh)().getState()),
						isCloudflare: !!(0, f.Jd)()
					}))
				},
				Le = () => !0,
				$e = () => {
					(0, xe.kT)("sparrow_id")
				},
				we = () => (0, xe.Xm)()
		},
		"../utils/initStyles.ts": function(F, _, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../react/app/providers/storeContainer.js");
			const a = "cfBaseStyles",
				l = document.head || document.getElementsByTagName("head")[0],
				m = u => {
					const d = [];
					for (let y in u.colors) {
						const t = u.colors[y];
						if (Array.isArray(t) && y !== "categorical")
							for (let r = 0; r < t.length; ++r) d.push(`--cf-${y}-${r}:${t[r]};`)
					}
					return d.join(`
`)
				},
				f = () => {
					const u = (0, e.Yc)(),
						d = `
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
					let y = document.getElementById(a);
					y ? y.innerText = "" : (y = document.createElement("style"), y.id = a, l.appendChild(y)), y.appendChild(document.createTextNode(d)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(f), _.Z = f
		},
		"../utils/initTracking.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				k: function() {
					return u
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				a = n("../react/app/providers/storeContainer.js"),
				l = n("../react/common/selectors/userSelectors.ts"),
				m = n("../utils/initSparrow.ts"),
				f = n("../utils/zaraz.ts");
			const u = () => {
					const y = (0, l.PR)((0, a.bh)().getState());
					d(), (0, m.Ug)(), (0, f.bM)(), (y == null ? void 0 : y.id) && o().setUserId(y == null ? void 0 : y.id), (0, m.yV)(), !(0, m.Wi)() && (0, m.IM)(), y ? (0, f.yn)(y) : (0, f.Ro)()
				},
				d = () => {
					var y, t;
					(y = window) === null || y === void 0 || (t = y.OneTrust) === null || t === void 0 || t.OnConsentChanged(() => {
						const r = (0, l.PR)((0, a.bh)().getState());
						(0, m.Wi)() ? (o().setEnabled(!0), (r == null ? void 0 : r.id) ? (o().setUserId(r.id), (0, f.yn)(r)) : (0, f.Ro)(), (0, m.yV)()) : (o().setEnabled(!1), (0, m.IM)())
					})
				}
		},
		"../utils/sentry/initSentry.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				j: function() {
					return V
				}
			});
			var e = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				o = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				a = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				l = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				m = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				f = n("../react/utils/history.ts"),
				u = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				d = n("../react/utils/url.ts");
			const y = (0, u.Rf)();
			let t;

			function r(J) {
				return s(J, "react-router-v5")
			}

			function s(J, $) {
				return (D, k = !0, G = !0) => {
					k && y && y.location && (t = D({
						name: (0, d.Fl)(y.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": $
						}
					})), G && J.listen && J.listen((q, ee) => {
						if (ee && (ee === "PUSH" || ee === "POP")) {
							t && t.finish();
							const x = {
								"routing.instrumentation": $
							};
							t = D({
								name: (0, d.Fl)(q.pathname),
								op: "navigation",
								tags: x
							})
						}
					})
				}
			}
			var c = n("../react/app/providers/storeContainer.js"),
				i = n("../react/common/selectors/languagePreferenceSelector.ts"),
				E = n("../flags.js"),
				g = n("../utils/getDashVersion.ts"),
				v = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				C = n("../../../common/intl/intl-core/src/errors.ts"),
				I = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				R = n("../react/common/middleware/sparrow/errors.ts");
			const S = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				A = !0,
				H = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				K = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function Z(J, $, D) {
				return $ = W($), $ in J ? Object.defineProperty(J, $, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : J[$] = D, J
			}

			function W(J) {
				var $ = z(J, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function z(J, $) {
				if (typeof J != "object" || J === null) return J;
				var D = J[Symbol.toPrimitive];
				if (D !== void 0) {
					var k = D.call(J, $ || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(J)
			}
			class B {
				constructor() {
					Z(this, "name", B.id)
				}
				setupOnce() {
					n.g.console && (0, I.hl)(n.g.console, "error", $ => (...D) => {
						const k = D.find(G => G instanceof Error);
						if (S && k) {
							let G, q = !0;
							if (k instanceof R.ez) {
								const ee = k instanceof R.oV ? k.invalidProperties : void 0;
								G = {
									tags: {
										"sparrow.eventName": k.eventName
									},
									extra: {
										sparrow: {
											eventName: k.eventName,
											invalidProperties: ee
										}
									},
									fingerprint: [k.name ? k.name : "SparrowValidationError"]
								}, q = !1
							} else if (k instanceof v.SparrowIdCookieError) G = {
								extra: {
									sparrowIdCookie: k.cookie
								},
								fingerprint: [k.name ? k.name : "SparrowIdCookieError"]
							};
							else if (k.name === "ChunkLoadError") {
								G = {
									fingerprint: [k.name]
								};
								try {
									G.tags = {
										chunkId: k.message.split(" ")[2],
										chunkUrl: k.request
									}
								} catch {}
							} else k instanceof C.YB && (G = {
								fingerprint: ["TranslatorError", k.translationKey]
							});
							q && l.Tb(k, G)
						}
						typeof $ == "function" && $.apply(n.g.console, D)
					})
				}
			}
			Z(B, "id", "ConsoleErrorIntegration");
			var j = null,
				L = n("../utils/sentry/lastSentEventId.ts"),
				b = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				N = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const O = J => {
					const $ = async D => {
						var k, G;
						const q = {
							envelope: D.body,
							url: J.url,
							isPreviewDeploy: (k = window) === null || k === void 0 || (G = k.build) === null || G === void 0 ? void 0 : G.isPreviewDeploy,
							release: (0, g.t)()
						};
						try {
							const ee = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(q)
							});
							return {
								statusCode: ee.status,
								headers: {
									"x-sentry-rate-limits": ee.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": ee.headers.get("Retry-After")
								}
							}
						} catch (ee) {
							return console.log(ee), (0, N.$2)(ee)
						}
					};
					return b.q(J, $)
				},
				V = () => {
					if (S && A) {
						var J, $, D, k, G, q, ee, x, te, Q;
						let ce = "production";
						((J = window) === null || J === void 0 || ($ = J.build) === null || $ === void 0 ? void 0 : $.isPreviewDeploy) && (ce += "-preview"), o.S({
							dsn: S,
							release: (0, g.t)(),
							environment: ce,
							ignoreErrors: K,
							allowUrls: H,
							autoSessionTracking: !1,
							integrations: [new a.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new B, new m.jK.BrowserTracing({
								routingInstrumentation: r(f.Z)
							})],
							tracesSampleRate: 0,
							transport: O,
							beforeSend: ie => (L.e.setEventId(ie.event_id), ie)
						});
						const ue = (0, c.bh)().getState();
						l.rJ({
							LOCAL_STORAGE_FLAGS: (0, E.Qw)(),
							USER_BETA_FLAGS: (0, E.ki)(),
							meta: {
								connection: {
									type: (D = window) === null || D === void 0 || (k = D.navigator) === null || k === void 0 || (G = k.connection) === null || G === void 0 ? void 0 : G.effectiveType,
									bandwidth: (q = window) === null || q === void 0 || (ee = q.navigator) === null || ee === void 0 || (x = ee.connection) === null || x === void 0 ? void 0 : x.downlink
								},
								languagePreference: (0, i.r)(ue),
								isPreviewDeploy: (te = window) === null || te === void 0 || (Q = te.build) === null || Q === void 0 ? void 0 : Q.isPreviewDeploy
							},
							utilGates: (0, e.T2)(ue)
						}), window.addEventListener("unhandledrejection", function(ie) {})
					}
				}
		},
		"../utils/sentry/lastSentEventId.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let a = "";
				return {
					setEventId: f => (!f || typeof f != "string" || (a = f), a),
					getEventId: () => a
				}
			})()
		},
		"../utils/sentry/setUserId.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				I: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@sentry/core/esm/exports.js");
			const o = a => {
				a ? e.av({
					id: a
				}) : e.av(null)
			}
		},
		"../utils/zaraz.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Ro: function() {
					return r
				},
				bM: function() {
					return d
				},
				tg: function() {
					return u
				},
				yn: function() {
					return t
				}
			});

			function e(s) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						E = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(i).filter(function(g) {
						return Object.getOwnPropertyDescriptor(i, g).enumerable
					})), E.forEach(function(g) {
						o(s, g, i[g])
					})
				}
				return s
			}

			function o(s, c, i) {
				return c = a(c), c in s ? Object.defineProperty(s, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[c] = i, s
			}

			function a(s) {
				var c = l(s, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function l(s, c) {
				if (typeof s != "object" || s === null) return s;
				var i = s[Symbol.toPrimitive];
				if (i !== void 0) {
					var E = i.call(s, c || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(s)
			}
			const m = {
					track: (s, c) => null,
					set: (s, c) => console.log(`zaraz.set(${s}, ${c})`)
				},
				f = {
					track: (s, c) => {
						var i;
						(i = window.zaraz) === null || i === void 0 || i.track(s, e({}, c, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (s, c) => {
						var i;
						return (i = window.zaraz) === null || i === void 0 ? void 0 : i.set(s, c)
					}
				};
			let u;
			const d = () => {
					window.zaraz, u = f
				},
				y = ["email", "first_name", "last_name"],
				t = s => {
					y.forEach(c => {
						var i;
						(i = u) === null || i === void 0 || i.set(c, s[c])
					})
				},
				r = () => {
					t({})
				}
		},
		"../../../common/intl/intl-core/src/errors.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				OZ: function() {
					return m
				},
				YB: function() {
					return l
				}
			});

			function e(u, d, y) {
				return d = o(d), d in u ? Object.defineProperty(u, d, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[d] = y, u
			}

			function o(u) {
				var d = a(u, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function a(u, d) {
				if (typeof u != "object" || u === null) return u;
				var y = u[Symbol.toPrimitive];
				if (y !== void 0) {
					var t = y.call(u, d || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(u)
			}
			class l extends Error {
				constructor(d, y) {
					super(y);
					e(this, "translationKey", void 0), this.translationKey = d, this.name = "TranslatorError"
				}
			}
			class m extends l {
				constructor(d) {
					super(d, `Translation key not found: ${d}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var f = null
		},
		"../../../common/intl/intl-react/src/I18nProvider.tsx": function(F, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function l() {
				return l = Object.assign ? Object.assign.bind() : function(y) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (y[s] = r[s])
					}
					return y
				}, l.apply(this, arguments)
			}

			function m(y, t) {
				if (y == null) return {};
				var r = f(y, t),
					s, c;
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(y);
					for (c = 0; c < i.length; c++) s = i[c], !(t.indexOf(s) >= 0) && (!Object.prototype.propertyIsEnumerable.call(y, s) || (r[s] = y[s]))
				}
				return r
			}

			function f(y, t) {
				if (y == null) return {};
				var r = {},
					s = Object.keys(y),
					c, i;
				for (i = 0; i < s.length; i++) c = s[i], !(t.indexOf(c) >= 0) && (r[c] = y[c]);
				return r
			}
			class u extends e.Component {
				constructor(t) {
					super(t);
					const {
						locale: r,
						phrases: s,
						translator: c
					} = t;
					r && c.locale(r), s && c.extend(s)
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
			const d = y => {
				let {
					translator: t
				} = y, r = m(y, ["translator"]);
				const s = () => e.createElement(a.oc, null, c => e.createElement(u, l({
					translator: c
				}, r)));
				return t ? (t.locale(r.locale), e.createElement(a.bd, {
					value: t
				}, s())) : s()
			};
			_.Z = d
		},
		"../../../common/intl/intl-react/src/index.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				oc: function() {
					return d.oc
				},
				lm: function() {
					return o.Z
				},
				bd: function() {
					return e.Z
				},
				RD: function() {
					return K
				},
				cC: function() {
					return R
				},
				QT: function() {
					return A.Q
				}
			});
			var e = n("../../../common/intl/intl-react/src/I18nProvider.tsx"),
				o = n("../../../common/intl/intl-react/src/I18nLoader.tsx"),
				a = n("webpack/sharing/consume/default/react/react"),
				l = n.n(a),
				m = n("../../../../node_modules/lodash/escape.js"),
				f = n.n(m),
				u = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				d = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function y(Z) {
				for (var W = 1; W < arguments.length; W++) {
					var z = arguments[W] != null ? Object(arguments[W]) : {},
						B = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(z).filter(function(j) {
						return Object.getOwnPropertyDescriptor(z, j).enumerable
					})), B.forEach(function(j) {
						t(Z, j, z[j])
					})
				}
				return Z
			}

			function t(Z, W, z) {
				return W = r(W), W in Z ? Object.defineProperty(Z, W, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[W] = z, Z
			}

			function r(Z) {
				var W = s(Z, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function s(Z, W) {
				if (typeof Z != "object" || Z === null) return Z;
				var z = Z[Symbol.toPrimitive];
				if (z !== void 0) {
					var B = z.call(Z, W || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)(Z)
			}

			function c() {
				return c = Object.assign ? Object.assign.bind() : function(Z) {
					for (var W = 1; W < arguments.length; W++) {
						var z = arguments[W];
						for (var B in z) Object.prototype.hasOwnProperty.call(z, B) && (Z[B] = z[B])
					}
					return Z
				}, c.apply(this, arguments)
			}
			const i = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				E = /(?:\r\n|\r|\n)/g;

			function g(Z, W, z) {
				return a.createElement("span", {
					key: Z,
					"data-testid": z,
					dangerouslySetInnerHTML: {
						__html: W
					}
				})
			}

			function v(Z, W = [], z = [], B) {
				let j = 0;
				const L = Z.replace(E, "").split(i);
				if (L.length === 1) return [g(j, Z, B)];
				const b = [],
					N = L.shift();
				if (N) {
					const O = g(j, N, B);
					b.push(O), typeof O != "string" && j++
				}
				for (const [O, V, J] of C(L)) {
					W[O] || window.console && console.warn(`Missing Component for translation key: ${Z}, index: ${O}. Fragment will be used.`);
					const $ = W[O] || a.Fragment,
						D = z[O] || {},
						k = g(0, V);
					if (b.push(a.createElement($, c({
							key: j
						}, D), k)), j++, J) {
						const G = g(j, J);
						b.push(G), typeof G != "string" && j++
					}
				}
				return b
			}

			function C(Z) {
				if (!Z.length) return [];
				const [W, z, B, j] = Z.slice(0, 4);
				return [
					[parseInt(W || B), z || "", j]
				].concat(C(Z.slice(4, Z.length)))
			}

			function I({
				id: Z = "",
				smartCount: W,
				_: z,
				values: B,
				applyMarkdown: j,
				Components: L,
				componentProps: b,
				testId: N
			}) {
				return a.createElement(d.oc, null, O => {
					B && Object.keys(B).forEach(D => B[D] = f()(B[D])), b && b.forEach(D => {
						Object.keys(D).forEach(k => {
							typeof D[k] == "string" && (D[k] = f()(D[k]))
						})
					});
					const V = y({
							smart_count: W,
							_: z
						}, B),
						J = j ? (0, u.Z)(O.t(Z.toString(), V), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : O.t(Z.toString(), V),
						$ = v(J, L, b, N);
					return $.length > 1 ? a.createElement(a.Fragment, null, $) : $[0]
				})
			}
			var R = I,
				S = n("../../../common/intl/intl-react/src/withTranslator.tsx"),
				A = n("../../../common/intl/intl-react/src/useI18n.tsx"),
				H = n("../../../common/intl/intl-types/src/index.ts"),
				K = l().createContext(H.Q.en_US)
		},
		"../../../common/util/types/src/api/domain.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
				Aw: function() {
					return H
				},
				Ib: function() {
					return S
				},
				Ks: function() {
					return K
				},
				MS: function() {
					return A
				},
				PN: function() {
					return E
				},
				Pp: function() {
					return l
				},
				Q3: function() {
					return c
				},
				TS: function() {
					return i
				},
				W7: function() {
					return C
				},
				dN: function() {
					return Z
				},
				eF: function() {
					return R
				},
				qp: function() {
					return t
				},
				wR: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				a = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				l = e.eg.object({
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
				f = e.eg.object({
					registrant: l.optional,
					technical: l.optional,
					administrator: l.optional,
					billing: l.optional
				}),
				u = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: f.optional,
					years: e.eg.number
				}),
				d = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let y = function(W) {
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
						status: e.eg.enum(y).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: d.optional,
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
				i = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let E = function(W) {
				return W.PENDING = "pending", W.VERIFIED = "verified", W.REJECTED = "rejected", W.PENDING_DELETE = "pending_delete", W.DELETED = "deleted", W
			}({});
			const g = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(E),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				v = e.eg.object({
					designated_approvers: e.eg.array(g)
				});
			let C = function(W) {
				return W.PENDING = "pending", W.PENDING_UPDATE = "pending_update", W.ENABLED = "enabled", W.DISABLED = "disabled", W
			}({});
			const I = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(C)
				}),
				R = e.eg.intersection([I, v]),
				S = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let A = function(W) {
				return W.UNLOCK_APPROVAL = "UnlockApprovalRequest", W.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", W.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", W.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", W
			}({});
			const H = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				K = e.eg.object({
					message: e.eg.string
				}),
				Z = e.eg.object({
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
		"../../../common/util/types/src/utils/index.ts": function(F, _, n) {
			"use strict";
			n.d(_, {
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
			const o = (a, l) => {
				if (l !== void 0) throw new Error("Unexpected object: " + a);
				return l
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(F, _, n) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(a) {
				if (!n.o(e, a)) return Promise.resolve().then(function() {
					var f = new Error("Cannot find module '" + a + "'");
					throw f.code = "MODULE_NOT_FOUND", f
				});
				var l = e[a],
					m = l[0];
				return n.e(l[1]).then(function() {
					return n.t(m, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", F.exports = o
		}
	}
]);

//# debugId=af4cba9e-37f4-58e6-9c87-d1388800312b