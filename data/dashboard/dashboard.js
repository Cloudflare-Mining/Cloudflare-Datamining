! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e4642efd-a3f1-5fb7-9974-9d890e732bbc")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.js": function(G, v, n) {
			"use strict";
			n.d(v, {
				J8: function() {
					return a
				},
				Jd: function() {
					return i
				},
				QY: function() {
					return E
				},
				Qw: function() {
					return l
				},
				ki: function() {
					return p
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/utils/url.ts"),
				s = n("../node_modules/query-string/query-string.js"),
				m = n.n(s),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f;
			const l = () => Object.keys(c.Z).reduce((g, h) => (h.indexOf("cf_beta.") === 0 && c.Z.get(h) === "true" && g.push(h.split(".").slice(1).join(".")), g), []),
				p = () => {
					var g, h, C;
					return ((g = window) === null || g === void 0 || (h = g.bootstrap) === null || h === void 0 || (C = h.data) === null || C === void 0 ? void 0 : C.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((f = window) === null || f === void 0 ? void 0 : f.location) && c.Z) {
				const g = m().parse(window.location.search);
				g.beta_on && c.Z.set(`cf_beta.${g.beta_on}`, !0), g.beta_off && c.Z.set(`cf_beta.${g.beta_off}`, !1)
			}
			const y = {},
				t = g => {
					var h, C, L;
					return Object.prototype.hasOwnProperty.call(y, g) ? y[g] : ((h = window) === null || h === void 0 || (C = h.bootstrap) === null || C === void 0 || (L = C.data) === null || L === void 0 ? void 0 : L.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(H => H === g) ? (y[g] = !0, !0) : (y[g] = !1, !1)
				},
				r = g => c.Z ? c.Z.get(`cf_beta.${g}`) === !0 : !1,
				a = g => r(g) || t(g),
				u = () => !0,
				i = () => {
					var g, h, C;
					return ((g = window) === null || g === void 0 || (h = g.bootstrap) === null || h === void 0 || (C = h.data) === null || C === void 0 ? void 0 : C.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				E = g => {
					const h = (0, e.uF)(g),
						C = (h == null ? void 0 : h.roles) || [];
					return (0, o.qR)(location.pathname) && C.length === 1 && C.some(L => L === "Administrator Read Only")
				}
		},
		"../init.ts": function(G, v, n) {
			"use strict";
			n.a(G, async function(e, o) {
				try {
					let Y = function(R) {
							for (var S = 1; S < arguments.length; S++) {
								var q = arguments[S] != null ? Object(arguments[S]) : {},
									j = Object.keys(q);
								typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(q).filter(function(se) {
									return Object.getOwnPropertyDescriptor(q, se).enumerable
								})), j.forEach(function(se) {
									Z(R, se, q[se])
								})
							}
							return R
						},
						Z = function(R, S, q) {
							return S = V(S), S in R ? Object.defineProperty(R, S, {
								value: q,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : R[S] = q, R
						},
						V = function(R) {
							var S = z(R, "string");
							return typeof S == "symbol" ? S : String(S)
						},
						z = function(R, S) {
							if (typeof R != "object" || R === null) return R;
							var q = R[Symbol.toPrimitive];
							if (q !== void 0) {
								var j = q.call(R, S || "default");
								if (typeof j != "object") return j;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return (S === "string" ? String : Number)(R)
						};
					n.r(v);
					var s = n("../../../../node_modules/regenerator-runtime/runtime.js"),
						m = n.n(s),
						c = n("../../../../node_modules/url-search-params-polyfill/index.js"),
						f = n.n(c),
						l = n("../libs/init/initGlobal.ts"),
						p = n.n(l),
						y = n("../libs/init/initFetch.ts"),
						t = n("../../../../node_modules/@sentry/core/esm/exports.js"),
						r = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
						a = n("../react/app/providers/storeContainer.js"),
						u = n("../libs/init/initHashScroll.ts"),
						i = n("../libs/init/loading.ts"),
						E = n("../utils/initStyles.ts"),
						g = n("../utils/sentry/initSentry.ts"),
						h = n("../utils/sentry/setUserId.ts"),
						C = n("../libs/init/initMfePreviewData.ts"),
						L = n("../utils/initGates.ts"),
						H = n("../utils/getDashVersion.ts"),
						N = n("../libs/init/initBootstrap.ts"),
						P = n("../react/utils/history.ts"),
						J = n("../react/initReact.tsx"),
						Q = n("../utils/initTracking.ts");
					const W = R => {
						t.$e(function(S) {
							S.setTag("init", "global"), t.Tb(R)
						}), (0, i.v)(R)
					};
					try {
						n.g.build = Y({}, {
							branch: "master",
							isReleaseCandidate: "true",
							commit: "04feb91728b3dc2a1686889e689af9840b6c343c",
							dashVersion: "26990512",
							env: "production",
							builtAt: 1725884247607,
							versions: {
								"@cloudflare/app-dash": "25.161.22",
								node: "20.10.0",
								yarn: "3.2.2",
								webpack: "5.88.2"
							}
						}, {
							isPreviewDeploy: (0, H.p)()
						}), (0, g.j)();
						try {
							await n.e(27560).then(n.bind(n, "../react/utils/api.ts"))
						} catch (R) {
							throw t.$e(function(S) {
								S.setTag("init", "utils/api"), t.Tb(R)
							}), R
						}
						try {
							(0, u.d)(P.Z)
						} catch (R) {
							throw t.$e(function(S) {
								S.setTag("init", "hashScroll"), t.Tb(R)
							}), R
						}
						try {
							(0, E.Z)()
						} catch (R) {
							throw t.$e(function(S) {
								S.setTag("init", "styles"), t.Tb(R)
							}), R
						}
						try {
							(0, C.Z)()
						} catch (R) {
							throw t.$e(function(S) {
								S.setTag("init", "mfePreviewData"), t.Tb(R)
							}), R
						}(0, N.k)().then(async R => {
							var S;
							const q = (0, a.bh)(),
								j = (R == null ? void 0 : R.data) || {};
							q.dispatch((0, r.mW)("user", j == null ? void 0 : j.user));
							const se = R == null || (S = R.data) === null || S === void 0 ? void 0 : S.user;
							n.g.bootstrap = R, se && se.id && (0, h.I)(se.id);
							try {
								await (0, L.n)()
							} catch (te) {
								throw t.$e(function(M) {
									M.setTag("init", "gates"), t.Tb(te)
								}), te
							}
							try {
								(0, Q.k)()
							} catch (te) {
								throw t.$e(function(M) {
									M.setTag("init", "tracking"), t.Tb(te)
								}), te
							}
							return (0, J.o)()
						}).catch(R => {
							t.$e(function(S) {
								S.setTag("init", "bootstrap"), t.Tb(R)
							}), (0, i.v)(R)
						})
					} catch (R) {
						W(R)
					}
					o()
				} catch (Y) {
					o(Y)
				}
			}, 1)
		},
		"../libs/init/initBootstrap.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				k: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/@sentry/core/esm/exports.js");
			class o extends Error {
				constructor(f, l) {
					super(l);
					this.name = `${f} ${l}`
				}
			}
			const s = () => {
					document.cookie.split(";").forEach(f => {
						const [l] = f.trim().split("=");
						document.cookie = `${l}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				m = async () => {
					let c = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!c.ok) throw c.headers.get("content-type") === "text/html" && (await c.text()).toLowerCase().includes("cookie too large") && (e.$e(function(y) {
						y.setTag("init", "cookieTooLarge"), e.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), s(), window.location.reload()), new o("Bootstrap API Failure", c == null ? void 0 : c.status);
					return (await c.json()).result.data
				}
		},
		"../libs/init/initFetch.ts": function(G, v, n) {
			"use strict";
			var e = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				o = n.n(e),
				s = n("../../../../node_modules/fetch-intercept/lib/browser.js"),
				m = n.n(s);

			function c(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), u.forEach(function(i) {
						f(t, i, a[i])
					})
				}
				return t
			}

			function f(t, r, a) {
				return r = l(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function l(t) {
				var r = p(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function p(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var u = a.call(t, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			const y = t => {
				const r = t && t.headers || {},
					a = new Headers(r);
				return a.append("X-Cross-Site-Security", "dash"), c({}, t, {
					headers: a
				})
			};
			(0, s.register)({
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
		"../libs/init/initHashScroll.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				d: function() {
					return m
				}
			});
			let e = "";
			const o = 61;

			function s(c) {
				const f = c.substr(1);
				if (f && e !== f) {
					const l = document.getElementById(f);
					if (l) {
						const p = l.getBoundingClientRect().top;
						if (p > 0) {
							const y = p - o;
							document.documentElement.scrollTop = y
						}
					}
				}
				e = f
			}

			function m(c) {
				c.listen(f => s(f.hash))
			}
		},
		"../libs/init/initMfePreviewData.ts": function(G, v, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const o = () => {
				let s;
				try {
					s = decodeURIComponent(window.location.search)
				} catch {
					console.log("Could not decode query string. Using non-decoded value."), s = window.location.search
				}
				if (!s.includes("remote[")) return;
				const m = new URLSearchParams(s),
					c = {};
				for (let [f, l] of m) f.includes("remote") && (c[f.replace(/remote\[|\]/g, "")] = l);
				e.Z.set("mfe-remotes", JSON.stringify(c))
			};
			v.Z = o
		},
		"../libs/init/loading.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				s: function() {
					return u
				},
				v: function() {
					return i
				}
			});
			var e = n("../../../../node_modules/cookie/index.js"),
				o = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const s = "CF_dash_version",
				m = "current",
				c = "hash",
				f = "deploymentPreview",
				l = E => E === m ? p() : y(),
				p = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
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
					var h;
					const C = t(E),
						L = `
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
						H = g ? `
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
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(h=window.build)===null||h===void 0?void 0:h.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return L + H
				},
				a = E => {
					var g;
					const h = document.getElementById(E);
					!h || (g = h.parentNode) === null || g === void 0 || g.removeChild(h)
				};

			function u() {
				const E = document.getElementById("loading-state");
				E == null || E.classList.add("hide"), E == null || E.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(a)
				})
			}

			function i(E) {
				var g;
				const h = document.getElementById("loading-state"),
					C = !!((g = e.parse(document.cookie)) === null || g === void 0 ? void 0 : g[s]);
				!h || (h.innerHTML = r(E == null ? void 0 : E.code, C))
			}
		},
		"../react/app/HoCs/withEntities.tsx": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../react/app/redux/index.ts"),
				m = n("../react/common/selectors/userSelectors.ts"),
				c = n("../react/common/selectors/zoneSelectors.ts"),
				f = n("../react/common/selectors/accountSelectors.ts"),
				l = n("../react/common/utils/isGuards.ts"),
				p = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				y = n.n(p);

			function t() {
				return t = Object.assign ? Object.assign.bind() : function(u) {
					for (var i = 1; i < arguments.length; i++) {
						var E = arguments[i];
						for (var g in E) Object.prototype.hasOwnProperty.call(E, g) && (u[g] = E[g])
					}
					return u
				}, t.apply(this, arguments)
			}
			const r = u => {
				function i(E) {
					const g = (0, s.UM)(),
						h = (0, p.useHistory)(),
						C = (0, p.useLocation)(),
						L = (0, p.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						H = (0, s.p4)(m.PR) || null,
						N = (0, s.p4)(c.nA) || null,
						P = (0, s.p4)(f.uF),
						J = P ? P.account : null;
					if (!L) return null;
					const {
						accountId: Q,
						app: Y,
						tab: Z
					} = L.params, V = L.params.zoneName && ((0, l.v5)(L.params.zoneName) || L.params.zoneName.indexOf(".") > 0) ? L.params.zoneName : void 0;
					return o().createElement(u, t({
						dispatch: g,
						history: h,
						location: C,
						match: L,
						user: H,
						membership: Q ? P : null,
						account: Q ? J : null,
						accountId: Q || null,
						zone: V ? N : null,
						zoneName: V || null,
						app: V ? Y : null,
						tab: V ? Z : null
					}, E))
				}
				return i.displayName = `withEntities(${a(u)})`, i
			};

			function a(u) {
				return u.displayName || u.name || "Component"
			}
			v.Z = r
		},
		"../react/app/components/DeepLink/actions.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				BQ: function() {
					return p
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
					return a
				},
				WF: function() {
					return c
				},
				Wz: function() {
					return t
				},
				bk: function() {
					return l
				},
				fj: function() {
					return r
				},
				r4: function() {
					return m
				},
				zq: function() {
					return s
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
				s = (0, e.R)(o.ADD_SITE, u => ({
					payload: u
				})),
				m = (0, e.R)(o.RESOLVING_START),
				c = (0, e.R)(o.RESOLVING_COMPLETE),
				f = (0, e.R)(o.SELECT_ZONE, u => ({
					payload: u
				})),
				l = (0, e.R)(o.SELECT_ACCOUNT, u => ({
					payload: u
				})),
				p = (0, e.R)(o.SELECT_PAGES_PROJECT, u => ({
					payload: u
				})),
				y = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, u => ({
					payload: u
				})),
				t = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, u => ({
					accountIds: u
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				a = (0, e.R)(o.SELECT_WORKER, u => ({
					payload: u
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				BV: function() {
					return e
				},
				Dz: function() {
					return p
				},
				Fj: function() {
					return m
				},
				Kt: function() {
					return c
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return y
				},
				dB: function() {
					return s
				},
				s$: function() {
					return f
				}
			});
			const e = "to",
				o = "_gl",
				s = "freeTrial",
				m = "deepLinkQueryParams",
				c = "add",
				f = "multiSkuProducts",
				l = "/:account/billing/checkout",
				p = "/:account/:zone/billing/checkout",
				y = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				ZP: function() {
					return Z
				},
				U: function() {
					return l.U
				},
				dd: function() {
					return l.dd
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
				s = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				m = n("../react/app/components/DeepLink/utils.ts"),
				c = n("../react/utils/bootstrap.ts"),
				f = n("../react/app/components/DeepLink/actions.ts"),
				l = n("../react/app/components/DeepLink/selectors.ts"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				y = n.n(p);

			function t(V) {
				for (var z = 1; z < arguments.length; z++) {
					var W = arguments[z] != null ? Object(arguments[z]) : {},
						R = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(W).filter(function(S) {
						return Object.getOwnPropertyDescriptor(W, S).enumerable
					})), R.forEach(function(S) {
						r(V, S, W[S])
					})
				}
				return V
			}

			function r(V, z, W) {
				return z = a(z), z in V ? Object.defineProperty(V, z, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[z] = W, V
			}

			function a(V) {
				var z = u(V, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function u(V, z) {
				if (typeof V != "object" || V === null) return V;
				var W = V[Symbol.toPrimitive];
				if (W !== void 0) {
					var R = W.call(V, z || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(V)
			}
			class i {
				constructor(z, W) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", R => {
						this.resolvers.set(R, {
							name: R,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", R => {
						const S = this.resolvers.get(R);
						S && (S.endTime = Date.now(), this.resolvers.set(R, S))
					}), r(this, "resolverCancel", R => {
						this.resolverDone(R), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", R => {
						const S = "NO_ACTION",
							q = {
								actionType: S,
								startTime: 0
							};
						return {
							start: (j = S) => {
								const se = this.resolvers.get(R);
								q.actionType = j, q.startTime = Date.now(), se && se.userActions.push(q)
							},
							finish: (j = S) => {
								q.actionType = j, q.endTime = Date.now()
							},
							cancel: (j = S) => {
								q.actionType = j, q.endTime = Date.now(), this.resolverCancel(R)
							}
						}
					}), this.deepLink = z, this.legacyDeepLink = W, this.resolvers = new Map
				}
				track(z) {
					try {
						if (this._done) return;
						this._done = !0;
						const W = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: E(this.startTime, this.endTime),
								totalCpuTime: E(this.startTime, this.endTime)
							},
							R = this.resolvers.size === 0 ? W : Array.from(this.resolvers.values()).reduce((S, q) => {
								const j = E(q.startTime, q.endTime),
									se = q.userActions.reduce((M, I) => {
										const k = E(I.startTime, I.endTime);
										return {
											totalTime: M.totalTime + k,
											actions: M.actions.set(I.actionType, k)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									te = j - se.totalTime;
								return t({}, S, {
									totalTime: S.totalTime + j,
									totalUserActionsTime: S.totalUserActionsTime + se.totalTime,
									totalCpuTime: S.totalCpuTime + te,
									[`${q.name}ResolverTotalTime`]: j,
									[`${q.name}ResolverTotalCpuTime`]: te,
									[`${q.name}ResolverTotalUserActionsTime`]: se.totalTime
								}, Array.from(se.actions.keys()).reduce((M, I) => t({}, M, {
									[`${q.name}Resolver/${I}`]: se.actions.get(I)
								}), {}))
							}, t({}, W, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						y().sendEvent(z, R)
					} catch (W) {
						console.error(W)
					}
				}
			}

			function E(V = Date.now(), z = Date.now()) {
				return (z - V) / 1e3
			}
			var g = n("../react/app/components/DeepLink/constants.ts"),
				h = n("../react/common/hooks/useCachedState.ts"),
				C = n("../react/common/hooks/usePrevious.ts");

			function L(V) {
				for (var z = 1; z < arguments.length; z++) {
					var W = arguments[z] != null ? Object(arguments[z]) : {},
						R = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(W).filter(function(S) {
						return Object.getOwnPropertyDescriptor(W, S).enumerable
					})), R.forEach(function(S) {
						H(V, S, W[S])
					})
				}
				return V
			}

			function H(V, z, W) {
				return z = N(z), z in V ? Object.defineProperty(V, z, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[z] = W, V
			}

			function N(V) {
				var z = P(V, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function P(V, z) {
				if (typeof V != "object" || V === null) return V;
				var W = V[Symbol.toPrimitive];
				if (W !== void 0) {
					var R = W.call(V, z || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(V)
			}
			var Q = ({
					children: V
				}) => {
					const z = (0, o.TZ)(),
						W = (0, s.useHistory)(),
						R = (0, C.Z)(W.location.pathname),
						S = (0, o.p4)(l.dd),
						[q, j] = (0, e.useState)(!0),
						[se, te] = (0, h.j)(void 0, {
							key: g.Fj
						}),
						[M, I] = (0, h.j)(void 0, {
							key: g.s$
						}),
						k = (0, c.$8)();
					let b = new URLSearchParams(W.location.search);
					const B = (0, m.mL)(W.location.pathname, b);
					let x = null,
						A = null;
					if (b.has(g.Tc) && b.delete(g.Tc), b.get(g.BV)) x = b.get(g.BV), W.location.hash && (A = W.location.hash);
					else if (se) {
						const D = new URLSearchParams(se);
						D.get(g.BV) && (x = D.get(g.BV), b = D)
					} else B && (b.set(g.BV, B), x = B);
					if (x && g._h.test(x)) {
						const D = b.getAll(g.Kt),
							K = JSON.stringify(D);
						D.length && K !== M && I(K), b.has(g.Tc) && b.delete(g.Tc), b.delete(g.Kt)
					}!k && se === void 0 && x && te(b.toString());
					const w = async () => {
						try {
							if ((0, m.I3)(x) && k && !S) {
								se && te(void 0), z.dispatch((0, f.r4)()), j(!0);
								const D = await (0, m.py)(x, j, z, W, R, new i(x, B ? `${W.location.pathname}${W.location.search}` : void 0));
								b.delete(g.BV);
								const K = b.toString();
								W.replace(L({}, W.location, {
									pathname: D,
									search: K
								}, A ? {
									hash: A
								} : {})), z.dispatch((0, f.WF)())
							}
						} catch (D) {
							z.dispatch((0, f.WF)()), console.error(D)
						} finally {
							j(!1)
						}
					};
					return (0, e.useEffect)(() => {
						w()
					}, [W.location.pathname, W.location.search, S]), (q || (0, m.I3)(x)) && k ? null : V
				},
				Y = n("../react/app/components/DeepLink/reducer.ts"),
				Z = Q
		},
		"../react/app/components/DeepLink/reducer.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				E: function() {
					return m
				},
				r: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				s = n("../react/app/components/DeepLink/actions.ts");
			const m = null,
				c = o().from({
					lastAction: m,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function f(l = c, p) {
				if (p.type === s.MF.RESOLVING_COMPLETE) return c;
				if (p.type === s.MF.RESOLVING_START) return l.set("isResolving", !0);
				if (l.isResolving) {
					if (p.type === s.MF.RESOLVING_COMPLETE) return l.set("isResolving", !1);
					if (p.type === s.MF.SET_FILTERED_ACCOUNT_IDS) return l.set("filteredAccountIds", p.accountIds);
					if (p.type === s.MF.DELETE_FILTERED_ACCOUNT_IDS) return l.set("filteredAccountIds", void 0);
					{
						let y = l;
						try {
							y = l.set("lastAction", p)
						} catch {
							y = l.set("lastAction", {
								type: p.type
							})
						}
						return y
					}
				} else return l
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
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
			const e = m => m.deepLink.lastAction,
				o = m => m.deepLink.isResolving,
				s = m => m.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				I3: function() {
					return u
				},
				X1: function() {
					return r
				},
				mL: function() {
					return C
				},
				py: function() {
					return h
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../react/app/components/DeepLink/reducer.ts"),
				s = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const m = L => L.replace(s.default.endsWithSlash, ""),
				c = L => {
					const H = m(L).split("/").slice(3);
					return H.length ? "/" + H.join("/") : ""
				},
				f = L => {
					const H = m(L).split("/").slice(2);
					return H.length ? `apps/${H.join("/")}` : "apps"
				};
			var l = n("../react/app/components/DeepLink/selectors.ts"),
				p = n("../react/app/components/DeepLink/constants.ts"),
				y = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const r = L => (0, y.Lb)(L) && (L.split(".").length > 1 || (0, t.v5)(L)),
				a = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				u = L => typeof L == "string" && L.startsWith("/"),
				i = (L, H) => N => new Promise((P, J) => {
					H.start();
					const Q = L.subscribe(() => {
						const Y = (0, l.yI)(L.getState());
						Y === o.E ? (H.cancel(), Q(), J("DeepLink: waitForAction out of context.")) : N(Y) && (H.finish(Y.type), Q(), P(Y))
					})
				}),
				E = (L, H, N) => (P, J) => new Promise((Q, Y) => {
					N.start();
					const Z = H.location.pathname;
					P = new URL(P, window.location.href).pathname, Z !== P && (N.cancel(), Y(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${P}", but on "${Z}". You need to redirect to "${P}", and unblockRouter in your Resolver, before you use this function.`));
					const V = L.subscribe(() => {
						const z = (0, l.yI)(L.getState()),
							W = H.location.pathname,
							S = new URLSearchParams(H.location.search).get(p.BV);
						(W !== P || !!S) && (N.cancel(), V(), Y(`DeepLink: waitForPageAction user navigated away from "${P}" to "${W}${S?H.location.search:""}"`)), z === o.E ? (N.cancel(), V(), Y("DeepLink: waitForPageAction out of context.")) : J(z) && (N.finish(z.type), V(), Q(z))
					})
				});

			function g(L) {
				const H = [],
					N = L.split("?")[0].split("/");
				for (let P of N) P.length !== 0 && (P.startsWith(":") ? H.push({
					value: P.substring(1),
					type: "dynamic"
				}) : H.push({
					value: P,
					type: "static"
				}));
				return H
			}
			async function h(L, H, N, P, J, Q) {
				Q.start();
				const Y = g(L),
					V = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(60091), n.e(57505), n.e(72775)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					z = {};
				let W = "";
				for (const [R, S] of Y.entries())
					if (S.type === "static") W = [W, S.value].join("/");
					else if (S.type === "dynamic" && a.is(S.value) && S.value in V) {
					Q.resolverStart(S.value);
					const q = await V[S.value]({
						deepLink: L,
						blockRouter: () => H(!0),
						unblockRouter: () => H(!1),
						routerHistory: P,
						resolvedValues: z,
						store: N,
						referringRoute: J,
						uri: {
							currentPartIdx: R,
							parts: Y
						},
						waitForAction: i(N, Q.createUserActionTracker(S.value)),
						waitForPageAction: E(N, P, Q.createUserActionTracker(S.value))
					});
					Q.resolverDone(S.value), W = [W, q].join("/"), z[S.value] = q
				} else throw Q.cancel(), new Error(`DeepLink: Resolver with name '${S.value}' is not supported.`);
				return Q.done(), W
			}

			function C(L, H) {
				const N = ":account",
					P = ":zone",
					J = H.get("zone");
				if (J) return H.delete("zone"), `/${N}/${P}/${J}`;
				const Q = H.get("account");
				if (Q) return H.delete("account"), `/${N}/${Q}`;
				if (L === "/overview") return `/${N}/${P}`;
				if (L === "/apps") return `/${N}/${P}/${f(L)}`;
				const Y = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const Z of Y) {
					const V = Z.length;
					if (L.startsWith(Z) && (L.length === V || L[V] === "/")) return `/${N}/${P}${L}`
				}
				switch (L) {
					case "/account/billing":
						return `/${N}/billing`;
					case "/account/subscriptions":
						return `/${N}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${N}/dns-firewall`;
					case "/account/audit-log":
						return `/${N}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				m = n("../react/app/components/SomethingWrong.jsx"),
				c = n("../utils/sentry/lastSentEventId.ts"),
				f = n("../react/utils/zaraz.ts"),
				l = n("../react/utils/url.ts");
			const p = ({
				sentryTag: y,
				children: t
			}) => o().createElement(s.SV, {
				beforeCapture: r => {
					y && r.setTag("errorBoundary", y), f.tg === null || f.tg === void 0 || f.tg.track("page-error", {
						page: (0, l.Fl)(window.location.pathname)
					})
				},
				onError: r => {
					({
						REDUX_LOGGER: void 0
					}).TESTING && n.g.logAppError(r)
				},
				fallback: ({
					error: r,
					eventId: a
				}) => {
					const u = c.e.getEventId() || a;
					return o().createElement(m.Z, {
						type: "page",
						error: r,
						eventId: u
					})
				}
			}, t);
			v.Z = p
		},
		"../react/app/components/Footer.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				Z: function() {
					return A
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				m = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				c = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				y = n.n(p),
				t = n("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				r = n("../react/common/components/Apple/utils.tsx"),
				a = n("../react/utils/translator.tsx"),
				u = n("../../../../node_modules/moment/moment.js"),
				i = n.n(u);
			const E = () => {
					const w = i()().format("YYYY"),
						D = K => {
							y().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: K
							})
						};
					return o().createElement(g, {
						marginTop: "auto"
					}, o().createElement(h, null, o().createElement(C, null, o().createElement(L, null, "\xA9 ", w, " Cloudflare, Inc."), o().createElement(L, null, o().createElement(H, null, o().createElement(N, {
						showOnDeskTop: !1
					}, o().createElement(P, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => D("Support")
					}, o().createElement(a.cC, {
						id: "common.support"
					}))), o().createElement(N, null, o().createElement(P, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => D("Privacy Policy")
					}, o().createElement(a.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(N, null, o().createElement(P, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => D("Terms of Use")
					}, o().createElement(a.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(N, null, o().createElement(P, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => D("Cookie Preferences")
					}, o().createElement(a.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(N, null, o().createElement(P, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => D("Trademark")
					}, o().createElement(a.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(H, null, o().createElement(N, null, o().createElement(P, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => D("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(a.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				g = (0, f.createComponent)(({
					theme: w,
					marginTop: D
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: D
				})),
				h = (0, f.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				C = (0, f.createComponent)(({
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
				L = (0, f.createComponent)(({
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
				H = (0, f.createComponent)(({
					theme: w
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: w.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				N = (0, f.createComponent)(({
					showOnDeskTop: w = !0,
					theme: D
				}) => ({
					color: D.colors.white,
					fontSize: D.fontSizes[1],
					height: "20px",
					display: w ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: D.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: D.space[3],
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
				P = (0, f.createStyledComponent)(({
					theme: w
				}) => ({
					textDecoration: "none",
					color: w.colors.white,
					"&:hover": {
						color: w.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var J = E,
				Q = n("../react/common/hooks/useGate.ts"),
				Y = n("../react/pages/welcome/routes.ts"),
				Z = n("../react/utils/cookiePreferences.ts"),
				V = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				W = () => {
					const [w, D] = (0, e.useState)(!1), K = (0, Z.wV)(), ne = () => {
						D(!0)
					}, oe = () => {
						D(!1)
					}, le = K && K === "US" ? (0, a.ZP)("footer.cpra_cta.privacy_choices") : (0, a.ZP)("footer.cpra_cta.cookie_preferences"), Ce = {
						background: "transparent",
						borderRadius: "none",
						color: w ? (0, l.Yc)() ? "#ee730a" : "#003681" : (0, l.Yc)() ? "#4693ff" : "#0051c3",
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
					return o().createElement(c.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: Ce,
						onMouseEnter: ne,
						onMouseLeave: oe
					}, o().createElement(c.Ei, {
						height: 15,
						src: V,
						mr: 2,
						alt: le
					}), le)
				};

			function R() {
				return R = Object.assign ? Object.assign.bind() : function(w) {
					for (var D = 1; D < arguments.length; D++) {
						var K = arguments[D];
						for (var ne in K) Object.prototype.hasOwnProperty.call(K, ne) && (w[ne] = K[ne])
					}
					return w
				}, R.apply(this, arguments)
			}

			function S(w, D) {
				if (w == null) return {};
				var K = q(w, D),
					ne, oe;
				if (Object.getOwnPropertySymbols) {
					var le = Object.getOwnPropertySymbols(w);
					for (oe = 0; oe < le.length; oe++) ne = le[oe], !(D.indexOf(ne) >= 0) && (!Object.prototype.propertyIsEnumerable.call(w, ne) || (K[ne] = w[ne]))
				}
				return K
			}

			function q(w, D) {
				if (w == null) return {};
				var K = {},
					ne = Object.keys(w),
					oe, le;
				for (le = 0; le < ne.length; le++) oe = ne[le], !(D.indexOf(oe) >= 0) && (K[oe] = w[oe]);
				return K
			}
			const j = 24,
				se = (0, f.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,l.Yc)()?l.rS.colors.orange[6]:l.rS.colors.blue[4]}`
					}
				}), c.A),
				te = (0, f.createStyledComponent)(({
					theme: w
				}) => ({
					color: w.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, t.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: w.colors.gray[4]
					}
				}), c.A),
				M = w => {
					let {
						onClick: D
					} = w, K = S(w, ["onClick"]);
					return o().createElement(se, R({
						onClick: ne => {
							y().sendEvent("navigate footer nav", {
								destinationPage: K.href
							}), D && D(ne)
						}
					}, K))
				},
				I = w => {
					let {
						children: D,
						target: K,
						rel: ne
					} = w, oe = S(w, ["children", "target", "rel"]);
					return o().createElement(M, R({
						target: K || "_blank",
						rel: ne || "noopener noreferrer"
					}, oe), D, o().createElement(m.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				},
				k = w => {
					let {
						children: D,
						target: K,
						rel: ne
					} = w, oe = S(w, ["children", "target", "rel"]);
					return o().createElement(te, R({
						target: K || "_blank",
						rel: ne || "noopener noreferrer"
					}, oe), D)
				},
				b = (0, f.createStyledComponent)(({
					theme: w
				}) => ({
					flex: 1,
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					flexWrap: "wrap",
					marginLeft: 0,
					"& > li": {
						fontSize: w.fontSizes[2],
						display: "contents",
						"&:not(:first-child)": {
							"&::before": {
								content: "'|'",
								color: w.colors.gray[4],
								marginTop: (0, t.tq)() ? "8px" : 0,
								paddingLeft: "8px",
								paddingRight: "8px"
							}
						},
						"& > button": {
							marginTop: (0, t.tq)() ? "8px" : 0
						}
					}
				}), c.Ul),
				B = (0, f.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, t.tq)() ? "column" : "row",
					justifyContent: "space-between"
				}), c.ZC);
			var A = () => {
				var w, D;
				const K = [Y.d.root.pattern].some(le => (0, s.matchPath)(location.pathname, {
						path: le
					})),
					ne = (0, Q.Z)("dx-footer-simplify") === "experiment";
				if ((0, r.PP)()) return o().createElement(J, null);
				if (K) return null;
				const oe = new Date().getFullYear();
				return o().createElement(c.$_, {
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: ne ? "19px" : 4,
					px: [4, 3, 3],
					mt: "auto"
				}, ne ? o().createElement(B, null, o().createElement(b, null, o().createElement(c.Li, null, o().createElement(k, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("common.support"))), o().createElement(c.Li, null, o().createElement(k, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(c.Dr, {
					textTransform: "capitalize"
				}, (0, a.ZP)("footer.system_status")))), o().createElement(c.Li, null, o().createElement(k, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, a.ZP)("footer.careers"))), o().createElement(c.Li, null, o().createElement(k, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos_reduced"))), o().createElement(c.Li, null, o().createElement(k, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, a.ZP)("footer.security_issues"))), o().createElement(c.Li, null, o().createElement(k, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))), o().createElement(c.Li, null, o().createElement(W, null))), o().createElement(c.ZC, {
					display: "flex",
					justifyContent: "center",
					mt: (0, t.tq)() ? 2 : 0
				}, o().createElement(c.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", oe, " Cloudflare, Inc."))) : o().createElement(c.ZC, {
					display: "flex",
					flexWrap: "wrap",
					mx: "auto",
					maxWidth: "64rem"
				}, o().createElement(c.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(c.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(c.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.contact")), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.contact_support"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, a.ZP)("footer.contact_sales"))), o().createElement(c.Dd, {
					mt: 3
				}, o().createElement(c.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, o().createElement(M, {
					"aria-label": (0, a.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${j}px`
				}, o().createElement(m.J, {
					type: "twitter",
					size: j
				})), o().createElement(M, {
					"aria-label": (0, a.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${j}px`
				}, o().createElement(m.J, {
					type: "facebook",
					size: j
				})), o().createElement(M, {
					"aria-label": (0, a.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${j}px`
				}, o().createElement(m.J, {
					type: "linkedin",
					size: j
				})))))), o().createElement(c.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(c.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(c.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.what_we_do")), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/plans"
				}, (0, a.ZP)("footer.plans"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/overview"
				}, (0, a.ZP)("footer.about"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/network-map"
				}, (0, a.ZP)("footer.network_map"))))), o().createElement(c.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(c.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(c.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.resources")), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://developers.cloudflare.com"
				}, (0, a.ZP)("footer.product_docs"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://blog.cloudflare.com"
				}, (0, a.ZP)("footer.blog"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, a.ZP)("footer.testimonials"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://partners.cloudflare.com"
				}, (0, a.ZP)("footer.hosting_partners"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://api.cloudflare.com"
				}, (0, a.ZP)("footer.api"))))), o().createElement(c.ZC, {
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
					title: `Current version: ${((w=window)===null||w===void 0||(D=w.build)===null||D===void 0?void 0:D.dashVersion)||"unknown"}`
				}), o().createElement(c.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(c.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.support")), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.help_center"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://community.cloudflare.com"
				}, (0, a.ZP)("footer.community"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflarestatus.com"
				}, (0, a.ZP)("footer.system_status"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/abuse"
				}, (0, a.ZP)("footer.trust_safety"))))), o().createElement(c.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(c.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(c.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.about_us")), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/people"
				}, (0, a.ZP)("footer.team"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/careers"
				}, (0, a.ZP)("footer.careers"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, a.ZP)("footer.press"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, a.ZP)("footer.subs_agreement"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(I, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))))), o().createElement(W, null)))
			}
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				S: function() {
					return r
				},
				Z: function() {
					return k
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				c = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = n("../react/common/components/AccessControl/index.js"),
				p = n("../react/common/components/ButtonWithDropdown.tsx"),
				y = n("../react/common/components/Dropdown/index.tsx"),
				t = n("../react/utils/translator.tsx");
			const r = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				a = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: r.EXISTING_DOMAIN,
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
					trackingEvent: r.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/domains/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: r.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: r.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: r.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: r.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: r.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var u = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				i = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = n.n(i);

			function g(b) {
				for (var B = 1; B < arguments.length; B++) {
					var x = arguments[B] != null ? Object(arguments[B]) : {},
						A = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(x).filter(function(w) {
						return Object.getOwnPropertyDescriptor(x, w).enumerable
					})), A.forEach(function(w) {
						h(b, w, x[w])
					})
				}
				return b
			}

			function h(b, B, x) {
				return B = C(B), B in b ? Object.defineProperty(b, B, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[B] = x, b
			}

			function C(b) {
				var B = L(b, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function L(b, B) {
				if (typeof b != "object" || b === null) return b;
				var x = b[Symbol.toPrimitive];
				if (x !== void 0) {
					var A = x.call(b, B || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(b)
			}

			function H() {
				return H = Object.assign ? Object.assign.bind() : function(b) {
					for (var B = 1; B < arguments.length; B++) {
						var x = arguments[B];
						for (var A in x) Object.prototype.hasOwnProperty.call(x, A) && (b[A] = x[A])
					}
					return b
				}, H.apply(this, arguments)
			}

			function N(b, B) {
				if (b == null) return {};
				var x = P(b, B),
					A, w;
				if (Object.getOwnPropertySymbols) {
					var D = Object.getOwnPropertySymbols(b);
					for (w = 0; w < D.length; w++) A = D[w], !(B.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(b, A) || (x[A] = b[A]))
				}
				return x
			}

			function P(b, B) {
				if (b == null) return {};
				var x = {},
					A = Object.keys(b),
					w, D;
				for (D = 0; D < A.length; D++) w = A[D], !(B.indexOf(w) >= 0) && (x[w] = b[w]);
				return x
			}
			const J = b => {
					let {
						title: B,
						trackingEvent: x,
						icon: A,
						url: w,
						description: D,
						disabled: K
					} = b, ne = N(b, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(Q, H({
						to: !K && w || "#",
						"aria-disabled": K,
						onClick: () => {
							E().sendEvent(x, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, ne), o().createElement(m.ZC, {
						display: "flex"
					}, o().createElement(s.J, {
						type: A,
						size: 24,
						mr: 2
					}), o().createElement(m.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(m.ZC, {
						fontSize: 3
					}, o().createElement(t.cC, B)), o().createElement(m.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(t.cC, D)))))
				},
				Q = (0, f.createStyledComponent)(({
					theme: b
				}) => {
					const B = {
						cursor: "pointer",
						backgroundColor: (0, c.Yc)() ? b.colors.gray[8] : b.colors.gray[9],
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
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': B,
						':focus-within:not([aria-disabled="true"])': g({}, B, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: b.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, u.Link);
			var Y = J;

			function Z() {
				return Z = Object.assign ? Object.assign.bind() : function(b) {
					for (var B = 1; B < arguments.length; B++) {
						var x = arguments[B];
						for (var A in x) Object.prototype.hasOwnProperty.call(x, A) && (b[A] = x[A])
					}
					return b
				}, Z.apply(this, arguments)
			}

			function V(b) {
				for (var B = 1; B < arguments.length; B++) {
					var x = arguments[B] != null ? Object(arguments[B]) : {},
						A = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(x).filter(function(w) {
						return Object.getOwnPropertyDescriptor(x, w).enumerable
					})), A.forEach(function(w) {
						z(b, w, x[w])
					})
				}
				return b
			}

			function z(b, B, x) {
				return B = W(B), B in b ? Object.defineProperty(b, B, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[B] = x, b
			}

			function W(b) {
				var B = R(b, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function R(b, B) {
				if (typeof b != "object" || b === null) return b;
				var x = b[Symbol.toPrimitive];
				if (x !== void 0) {
					var A = x.call(b, B || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(b)
			}

			function S(b, B) {
				if (b == null) return {};
				var x = q(b, B),
					A, w;
				if (Object.getOwnPropertySymbols) {
					var D = Object.getOwnPropertySymbols(b);
					for (w = 0; w < D.length; w++) A = D[w], !(B.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(b, A) || (x[A] = b[A]))
				}
				return x
			}

			function q(b, B) {
				if (b == null) return {};
				var x = {},
					A = Object.keys(b),
					w, D;
				for (D = 0; D < A.length; D++) w = A[D], !(B.indexOf(w) >= 0) && (x[w] = b[w]);
				return x
			}
			const j = "GLOBAL_ADD_DROPDOWN",
				se = ({
					disableProducts: b
				}) => o().createElement(te, {
					role: "group",
					"data-testid": j
				}, o().createElement(y.Lt, {
					trigger: o().createElement(M, null, o().createElement(s.J, {
						label: "plus",
						type: "plus"
					}), " ", o().createElement(t.cC, {
						id: "common.add"
					}), " ", o().createElement(s.J, {
						label: "arrow",
						type: "caret-down"
					})),
					menu: o().createElement(p.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0"
					}, a.map(B => {
						const x = B || {},
							{
								disableOn: A,
								permissionCheck: w
							} = x,
							D = S(x, ["disableOn", "permissionCheck"]),
							K = A && b[A],
							ne = V({}, D, {
								disabled: K
							});
						return w ? o().createElement(l.Z, {
							key: B.title.id,
							edit: w
						}, ({
							isEditable: oe
						}) => oe && o().createElement(Y, ne)) : o().createElement(Y, Z({
							key: B.url
						}, ne))
					}))
				})),
				te = (0, f.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				M = (0, f.createStyledComponent)(({
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
					color: (0, c.Yc)() ? b.colors.gray[1] : b.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, c.Yc)() ? b.colors.gray[8] : b.colors.gray[9]
					}
				}), m.zx);
			var I = se,
				k = I
		},
		"../react/app/components/LoadingSuspense.tsx": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				c = n("../react/utils/translator.tsx"),
				f = n("../react/app/components/ErrorStatus.tsx"),
				l = n("../react/common/components/EmptyPage.jsx"),
				p = n("../react/common/hooks/suspenseHelpers.ts");

			function y(a) {
				const [u, i] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const E = window.setTimeout(() => i(!0), a);
					return () => window.clearTimeout(E)
				}, []), u
			}
			const t = ({
					loadingTimeout: a = 1e3,
					stillLoadingTimeout: u = 9e3
				}) => {
					const i = y(a),
						E = y(u);
					if ((0, p.nW)(), !i && !E) return o().createElement(l.Z, null);
					const g = E ? o().createElement(c.cC, {
						id: "common.still_loading"
					}) : i ? o().createElement(c.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(f.Z, {
						size: 5
					}, o().createElement(m.ZC, {
						mr: 3
					}, o().createElement(s.g, {
						size: "2x"
					})), g)
				},
				r = ({
					children: a
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(t, null)
				}, a);
			v.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				C8: function() {
					return p
				},
				d3: function() {
					return l
				},
				dr: function() {
					return c
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
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const s = "/persistence/user",
				m = async () => {
					try {
						return await (await e.get(s, {
							hideErrorAlert: !0
						})).body
					} catch (r) {
						console.error(r)
					}
				}, c = async r => {
					try {
						return await (await e.get(`/accounts/${r}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, f = async (r, a) => {
					try {
						return await (await e.post(`${s}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: r,
								accountId: a
							}),
							hideErrorAlert: !0
						})).body
					} catch (u) {
						return console.error(u), []
					}
				}, l = async (r, a) => {
					try {
						return await e.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: a
							}),
							hideErrorAlert: !0
						}), !0
					} catch (u) {
						return console.error(u), !1
					}
				}, p = async r => {
					try {
						return await (await e.post(s, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (a) {
						console.error(a)
					}
				}, y = async r => {
					try {
						return await (await e.post(`${s}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, t = async r => {
					try {
						return await (await e.post(`${s}/viewed-changes`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						throw console.error(a), a
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
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
					return V
				},
				Tv: function() {
					return te
				},
				yZ: function() {
					return L
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../react/app/redux/index.ts"),
				m = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = n.n(m),
				f = n("../react/utils/bootstrap.ts"),
				l = n("../react/common/selectors/zoneSelectors.ts"),
				p = n("../react/app/components/Persistence/api.ts");
			const y = 10;

			function t(M) {
				for (var I = 1; I < arguments.length; I++) {
					var k = arguments[I] != null ? Object(arguments[I]) : {},
						b = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(k).filter(function(B) {
						return Object.getOwnPropertyDescriptor(k, B).enumerable
					})), b.forEach(function(B) {
						r(M, B, k[B])
					})
				}
				return M
			}

			function r(M, I, k) {
				return I = a(I), I in M ? Object.defineProperty(M, I, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[I] = k, M
			}

			function a(M) {
				var I = u(M, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function u(M, I) {
				if (typeof M != "object" || M === null) return M;
				var k = M[Symbol.toPrimitive];
				if (k !== void 0) {
					var b = k.call(M, I || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(M)
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
				h = g.Consumer,
				C = ({
					children: M,
					onDarkModeChangeCb: I
				}) => {
					const [k, b] = (0, e.useState)(i), [B, x] = (0, e.useState)(E.isLoading), A = (0, f.$8)(), w = (0, s.p4)(ne => (0, l.wH)(ne));
					(0, e.useEffect)(() => {
						A ? (0, p.yl)().then(ne => {
							ne && (b(ne), I(ne.darkMode))
						}).finally(() => x(!1)) : x(!1)
					}, [A]);
					const D = (ne, oe) => !!k.favorites.find(le => le.type === "zone" && le.name === ne && le.accountId === oe),
						K = ne => k.favorites.filter(le => le.type === "zone" && le.accountId === ne).length < y;
					return o().createElement(g.Provider, {
						value: t({}, k, {
							isLoading: B,
							actions: {
								canAccountStarZone: K,
								isZoneStarred: D,
								starZone: async (ne, oe) => {
									var le;
									const Ce = !D(ne, oe),
										ye = K(oe);
									if (Ce && !ye) {
										console.log("can not star zone - account is at limit");
										return
									}
									const he = await (0, p.lt)(ne, oe);
									c().sendEvent("click star zone", {
										isStarring: Ce,
										totalStarredZones: he.filter($ => $.accountId === oe && $.type === "zone").length,
										totalZones: w == null || (le = w.paginationData) === null || le === void 0 ? void 0 : le.info.total_count
									}), b(t({}, k, {
										favorites: he
									}))
								},
								setDarkMode: async ne => {
									const oe = await (0, p.C8)(ne);
									b(oe), I(oe.darkMode)
								},
								logRouteVisited: async ne => {
									var oe;
									const le = await (0, p.n)(ne);
									b((oe = le) !== null && oe !== void 0 ? oe : t({}, k))
								},
								viewChange: async ne => {
									const oe = await (0, p.m6)(ne);
									b(t({}, k, {
										viewedChanges: oe
									}))
								}
							}
						})
					}, M)
				},
				L = () => (0, e.useContext)(g);
			var H = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				N = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function P() {
				return P = Object.assign ? Object.assign.bind() : function(M) {
					for (var I = 1; I < arguments.length; I++) {
						var k = arguments[I];
						for (var b in k) Object.prototype.hasOwnProperty.call(k, b) && (M[b] = k[b])
					}
					return M
				}, P.apply(this, arguments)
			}

			function J(M, I) {
				if (M == null) return {};
				var k = Q(M, I),
					b, B;
				if (Object.getOwnPropertySymbols) {
					var x = Object.getOwnPropertySymbols(M);
					for (B = 0; B < x.length; B++) b = x[B], !(I.indexOf(b) >= 0) && (!Object.prototype.propertyIsEnumerable.call(M, b) || (k[b] = M[b]))
				}
				return k
			}

			function Q(M, I) {
				if (M == null) return {};
				var k = {},
					b = Object.keys(M),
					B, x;
				for (x = 0; x < b.length; x++) B = b[x], !(I.indexOf(B) >= 0) && (k[B] = M[B]);
				return k
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
			var V = M => {
					let {
						isStarred: I,
						size: k = 16
					} = M, b = J(M, ["isStarred", "size"]);
					const B = Y[(0, H.Yc)() ? "dark" : "light"];
					return o().createElement(N.J, P({
						type: I ? "star" : "star-outline",
						color: I ? B.gold : B.gray,
						size: k
					}, b))
				},
				z = n("../../../../node_modules/@cloudflare/elements/es/index.js");

			function W(M) {
				for (var I = 1; I < arguments.length; I++) {
					var k = arguments[I] != null ? Object(arguments[I]) : {},
						b = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(k).filter(function(B) {
						return Object.getOwnPropertyDescriptor(k, B).enumerable
					})), b.forEach(function(B) {
						R(M, B, k[B])
					})
				}
				return M
			}

			function R(M, I, k) {
				return I = S(I), I in M ? Object.defineProperty(M, I, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[I] = k, M
			}

			function S(M) {
				var I = q(M, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function q(M, I) {
				if (typeof M != "object" || M === null) return M;
				var k = M[Symbol.toPrimitive];
				if (k !== void 0) {
					var b = k.call(M, I || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(M)
			}
			const j = {
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
			var te = (0, e.forwardRef)(({
				featurePreview: M = !1,
				isStarred: I,
				onClickFn: k,
				isDisabled: b,
				testId: B,
				buttonText: x,
				size: A = "large"
			}, w) => {
				const D = j[(0, H.Yc)() ? "dark" : "light"][I && !M ? "active" : "default"],
					K = W({}, A === "large" && {
						starIconSize: 16,
						fontSize: 3,
						height: "auto",
						paddingLeft: "12px",
						paddingRight: 3
					}, A === "small" && {
						starIconSize: 14,
						fontSize: 1,
						height: "1.5rem",
						paddingLeft: "6px",
						paddingRight: 2
					});
				return o().createElement(z.zx, {
					innerRef: w,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: K.paddingRight,
					gap: 1,
					pl: K.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: M || b ? "default" : "pointer",
					backgroundColor: D.bg,
					color: D.text,
					borderColor: D.border,
					onClick: k,
					opacity: b ? .5 : 1,
					disabled: b,
					fontSize: K.fontSize,
					height: K.height,
					"data-testid": B
				}, o().createElement(V, {
					isStarred: M ? !1 : I,
					size: K.starIconSize
				}), x)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/prop-types/index.js"),
				m = n.n(s),
				c = n("../../../common/intl/intl-react/src/index.ts"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = n("../node_modules/@cloudflare/component-button/es/index.js"),
				p = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				y = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				r = n.n(t),
				a = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				u = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				i = n("../react/app/components/Footer.tsx"),
				E = n("../react/utils/url.ts");

			function g(W) {
				for (var R = 1; R < arguments.length; R++) {
					var S = arguments[R] != null ? Object(arguments[R]) : {},
						q = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(S).filter(function(j) {
						return Object.getOwnPropertyDescriptor(S, j).enumerable
					})), q.forEach(function(j) {
						h(W, j, S[j])
					})
				}
				return W
			}

			function h(W, R, S) {
				return R = C(R), R in W ? Object.defineProperty(W, R, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[R] = S, W
			}

			function C(W) {
				var R = L(W, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function L(W, R) {
				if (typeof W != "object" || W === null) return W;
				var S = W[Symbol.toPrimitive];
				if (S !== void 0) {
					var q = S.call(W, R || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(W)
			}
			const H = (0, f.createComponent)(({
					type: W
				}) => ({
					height: W !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				N = (0, f.createComponent)(({
					theme: W,
					margin: R,
					size: S = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: W.colors.gray[3],
					height: R ? "auto" : "100%",
					padding: R ? 0 : W.space[S > 1 ? S - 2 : 0],
					margin: R,
					justifyContent: "center",
					alignItems: "center"
				})),
				P = (0, f.createComponent)(() => ({
					textAlign: "left"
				})),
				J = (0, f.createComponent)(() => ({
					textAlign: "right"
				})),
				Q = (0, f.createComponent)(({
					theme: W
				}) => ({
					fontSize: W.fontSizes[6]
				})),
				Y = (0, f.createComponent)(({
					theme: W
				}) => ({
					fontSize: W.fontSizes[4]
				})),
				Z = (0, f.createComponent)(({
					theme: W
				}) => ({
					fontSize: W.fontSizes[3]
				})),
				V = (0, f.createComponent)(({
					theme: W
				}) => ({
					width: "100%",
					height: 125,
					marginTop: W.space[4],
					padding: W.space[2]
				}), "textarea");
			class z extends o().Component {
				constructor(...R) {
					super(...R);
					h(this, "state", {
						value: "",
						submitted: !1
					}), h(this, "handleTextareaChange", S => {
						this.setState({
							value: S.target.value
						})
					}), h(this, "sendErrToSentry10", async () => {
						try {
							var S, q, j, se;
							const te = ((S = window) === null || S === void 0 || (q = S.bootstrap) === null || q === void 0 || (j = q.data) === null || j === void 0 || (se = j.user) === null || se === void 0 ? void 0 : se.id) || "Unknown",
								M = this.props.eventId || p.eW(),
								I = {
									name: te,
									email: `${te}@userid.com`,
									comments: this.state.value,
									eventId: M,
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
								body: JSON.stringify(I)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (te) {
							console.error(te)
						}
					}), h(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), h(this, "renderContent", S => o().createElement(c.oc, null, q => o().createElement(H, {
						type: S
					}, o().createElement(N, null, o().createElement(P, null, o().createElement(Q, null, q.t("error.internal_issues")), o().createElement(Y, null, q.t("error.help_us")), o().createElement(V, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: j => this.handleTextareaChange(j),
						disabled: this.state.submitted,
						placeholder: q.t("error.give_feedback")
					}), o().createElement(J, null, !this.state.submitted && o().createElement(l.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, q.t("common.submit")), this.state.submitted && o().createElement(Z, null, q.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const R = this.props.error;
					console.error(`SomethingWrong: ${R}`), y.YA("user_feedback_form_displayed", "yes"), y.YA("normalizedPath", (0, E.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: R
					} = this.props;
					return R === "fullscreen" ? o().createElement("div", null, o().createElement(a.h4, null, o().createElement(t.Link, {
						to: "/"
					}, o().createElement(u.TR, null))), this.renderContent(R), o().createElement(i.Z, null)) : this.renderContent(R)
				}
			}
			z.propTypes = {
				type: m().oneOf(["fullscreen", "page"]),
				error: m().oneOfType([m().string, m().object]),
				eventId: m().string
			}, v.Z = z
		},
		"../react/app/redux/index.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				TZ: function() {
					return s
				},
				UM: function() {
					return c
				},
				ZS: function() {
					return m
				},
				p4: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e);
			const s = () => (0, e.useStore)(),
				m = () => s().getState(),
				c = () => (0, e.useDispatch)(),
				f = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(G, v, n) {
			"use strict";
			n.d(v, {
				P1: function() {
					return y
				},
				jQ: function() {
					return l
				},
				qR: function() {
					return t
				},
				uc: function() {
					return p
				}
			});
			var e = n("../react/pages/home/alerts/config.tsx"),
				o = n("../react/pages/workers/entityTypes.ts"),
				s = n("../react/pages/email/types.ts"),
				m = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				c = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				f = n.n(c);
			const l = c.static.from([{
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
				p = r => r.entities,
				y = (...r) => (0, m.P1)(l, p, ...r),
				t = (0, m.QB)(l)
		},
		"../react/app/redux/utils.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				F: function() {
					return s
				},
				_: function() {
					return o
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const o = m => (c, f, l) => (0, e.SC)(c, f, l, {
					hideErrorAlert: !0
				}).catch(m),
				s = m => c => {
					if (c.status === m) return c;
					throw c
				}
		},
		"../react/common/actionTypes.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Cm: function() {
					return f
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return l
				},
				Li: function() {
					return y
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
					return m
				},
				lV: function() {
					return c
				},
				s1: function() {
					return p
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				s = "MODAL_OPEN",
				m = "MODAL_CLOSE",
				c = "TOGGLE_ON",
				f = "TOGGLE_OFF",
				l = "SET_ACTIVE",
				p = "CLEAR_ACTIVE",
				y = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(a) {
				return a.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", a.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", a.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", a.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", a.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", a.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", a.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", a.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", a.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", a
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				AX: function() {
					return a
				},
				YT: function() {
					return y
				},
				ct: function() {
					return l
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

			function s(u) {
				for (var i = 1; i < arguments.length; i++) {
					var E = arguments[i] != null ? Object(arguments[i]) : {},
						g = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(E).filter(function(h) {
						return Object.getOwnPropertyDescriptor(E, h).enumerable
					})), g.forEach(function(h) {
						m(u, h, E[h])
					})
				}
				return u
			}

			function m(u, i, E) {
				return i = c(i), i in u ? Object.defineProperty(u, i, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[i] = E, u
			}

			function c(u) {
				var i = f(u, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function f(u, i) {
				if (typeof u != "object" || u === null) return u;
				var E = u[Symbol.toPrimitive];
				if (E !== void 0) {
					var g = E.call(u, i || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(u)
			}
			const l = u => {
					const i = u.payload.map(E => s({}, E, {
						membershipId: E.id,
						id: E.account.id
					}));
					return s({}, u, {
						payload: i
					})
				},
				p = u => {
					const i = l(u);
					return Array.isArray(i.payload) ? s({}, u, {
						payload: i.payload[0]
					}) : s({}, u, {
						payload: null
					})
				},
				y = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", l),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...u) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: u
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", p)
		},
		"../react/common/actions/modalActions.ts": function(G, v, n) {
			"use strict";
			n.r(v), n.d(v, {
				closeModal: function() {
					return m
				},
				openModal: function() {
					return s
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function s(c, f, l = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: c,
						props: f
					},
					options: l
				}
			}

			function m(c) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: c
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				IH: function() {
					return c
				},
				Vp: function() {
					return f
				},
				ZK: function() {
					return p
				},
				um: function() {
					return l
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

			function s(t) {
				return {
					type: e.Cz,
					notificationId: t
				}
			}
			let m = 0;

			function c(t, r, a = {}) {
				return a = a || {},
					function(u) {
						let i = m++,
							E = {
								id: i,
								type: t,
								message: r,
								delay: a.delay,
								persist: a.persist === void 0 ? !1 : a.persist,
								closable: a.closable === void 0 ? !0 : a.closable,
								onClose() {
									u(s(i)), a.onClose && a.onClose.apply(null, arguments)
								}
							};
						u(o(E))
					}
			}

			function f(t, r) {
				return c("success", t, r)
			}

			function l(t, r) {
				return c("info", t, r)
			}

			function p(t, r) {
				return c("warning", t, r)
			}

			function y(t, r) {
				return c("error", t, r)
			}
		},
		"../react/common/actions/userActions.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				BT: function() {
					return l
				},
				Ut: function() {
					return h
				},
				V_: function() {
					return C
				},
				Y9: function() {
					return E
				},
				Z0: function() {
					return H
				},
				mp: function() {
					return g
				},
				r3: function() {
					return L
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/app/redux/utils.ts");

			function s(N) {
				for (var P = 1; P < arguments.length; P++) {
					var J = arguments[P] != null ? Object(arguments[P]) : {},
						Q = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && Q.push.apply(Q, Object.getOwnPropertySymbols(J).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(J, Y).enumerable
					})), Q.forEach(function(Y) {
						m(N, Y, J[Y])
					})
				}
				return N
			}

			function m(N, P, J) {
				return P = c(P), P in N ? Object.defineProperty(N, P, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[P] = J, N
			}

			function c(N) {
				var P = f(N, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function f(N, P) {
				if (typeof N != "object" || N === null) return N;
				var J = N[Symbol.toPrimitive];
				if (J !== void 0) {
					var Q = J.call(N, P || "default");
					if (typeof Q != "object") return Q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(N)
			}
			const l = (0, e.C)("user").get`/user`,
				p = (0, e.C)("user").patch`/user`,
				y = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				u = (0, e.C)("user").delete`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/email`;

			function E(...N) {
				return i(...N)
			}
			const g = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				h = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(N => s({}, N, {
					body: s({}, N.body, {
						result: {}
					})
				}))),
				C = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				L = (0, e.C)("userDetails").get`/user/details`,
				H = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(G, v, n) {
			"use strict";
			n.d(v, {
				a: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e),
				s = n("../react/common/selectors/accountSelectors.ts");
			const m = f => {
					if (typeof f != "string") throw new Error("invalid Param Type provided");
					const l = f.slice(1).split(":");
					if (l.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: l[0],
						value: l[1]
					}
				},
				c = (f, l) => {
					const {
						resourceId: p,
						accountId: y,
						legacyPermission: t
					} = l;
					let {
						read: r,
						edit: a
					} = l;
					const u = {};
					t && (a = `#${t}:edit`, r = `#${t}:read`);
					const i = p || y;
					if (r) {
						const E = Array.isArray(r) ? r : [r];
						u.isReadable = E.some(g => {
							const h = m(g);
							return (0, s.DT)(f, i, C => !!(C[h.key] && C[h.key][h.value]))
						})
					}
					if (a) {
						const E = Array.isArray(a) ? a : [a];
						u.isEditable = E.some(g => {
							const h = m(g);
							return (0, s.DT)(f, i, C => !!(C[h.key] && C[h.key][h.value]))
						})
					}
					return u
				};
			v.Z = (0, e.connect)(c)
		},
		"../react/common/components/AccessControl/index.js": function(G, v, n) {
			"use strict";
			var e = n("../../../../node_modules/prop-types/index.js"),
				o = n.n(e),
				s = n("../react/app/HoCs/withEntities.tsx"),
				m = n("../react/common/components/AccessControl/SAAConnect.js");

			function c(r) {
				for (var a = 1; a < arguments.length; a++) {
					var u = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(u).filter(function(E) {
						return Object.getOwnPropertyDescriptor(u, E).enumerable
					})), i.forEach(function(E) {
						f(r, E, u[E])
					})
				}
				return r
			}

			function f(r, a, u) {
				return a = l(a), a in r ? Object.defineProperty(r, a, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = u, r
			}

			function l(r) {
				var a = p(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function p(r, a) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var i = u.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}

			function y(r) {
				const u = ["isReadable", "isEditable"].reduce((i, E) => r.hasOwnProperty(E) ? c({}, i, {
					[E]: r[E]
				}) : i, {});
				return r.children(u)
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
			const t = (0, s.Z)((0, m.Z)(y));
			t.displayName = "AccessControl", v.Z = t
		},
		"../react/common/components/Apple/utils.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				PP: function() {
					return r
				},
				RJ: function() {
					return l
				},
				tz: function() {
					return a
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				c = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const f = () => p.test(window.location.pathname) || s.E.has(m.Qq),
				l = () => s.E.get(m.Qq),
				p = /^\/login\/apple(\/)?/,
				t = [p, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let u = !1;
					t.forEach(E => {
						if (E.test(window.location.pathname)) {
							u = !0;
							return
						}
					});
					const i = f() && u;
					return i && (0, c.C8)(c.LF.OFF), i
				},
				a = u => {
					u && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let i = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					u && (i = i + `&jwt=${u}`), window.location.href = i
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				oG: function() {
					return u
				},
				sN: function() {
					return l.sN
				},
				v2: function() {
					return l.v2
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../node_modules/@cloudflare/component-button/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				c = n("../../../common/intl/intl-react/src/index.ts"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = n("../react/common/components/Dropdown/index.tsx"),
				p = n("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function y() {
				return y = Object.assign ? Object.assign.bind() : function(i) {
					for (var E = 1; E < arguments.length; E++) {
						var g = arguments[E];
						for (var h in g) Object.prototype.hasOwnProperty.call(g, h) && (i[h] = g[h])
					}
					return i
				}, y.apply(this, arguments)
			}

			function t(i, E) {
				if (i == null) return {};
				var g = r(i, E),
					h, C;
				if (Object.getOwnPropertySymbols) {
					var L = Object.getOwnPropertySymbols(i);
					for (C = 0; C < L.length; C++) h = L[C], !(E.indexOf(h) >= 0) && (!Object.prototype.propertyIsEnumerable.call(i, h) || (g[h] = i[h]))
				}
				return g
			}

			function r(i, E) {
				if (i == null) return {};
				var g = {},
					h = Object.keys(i),
					C, L;
				for (L = 0; L < h.length; L++) C = h[L], !(E.indexOf(C) >= 0) && (g[C] = i[C]);
				return g
			}
			const a = (0, f.createStyledComponent)(({
				theme: i
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${i.radii[2]}px 0 0 ${i.radii[2]}px`,
					borderRight: `1px solid ${i.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${i.radii[2]}px ${i.radii[2]}px 0`,
					paddingRight: i.space[2],
					paddingLeft: i.space[2]
				},
				"& button": {
					color: (0, p.Yc)() ? i.colors.text : void 0
				},
				"& button:hover": {
					color: (0, p.Yc)() ? i.colors.text : void 0
				}
			}));

			function u(i) {
				let {
					menu: E,
					containerProps: g,
					disabled: h,
					disabledDropdown: C = h
				} = i, L = t(i, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: H
				} = (0, c.QT)();
				return o().createElement(a, y({}, g, {
					role: "group"
				}), o().createElement(s.zx, y({}, L, {
					disabled: h
				})), o().createElement(l.Lt, {
					trigger: o().createElement(s.zx, {
						type: L.type,
						"aria-haspopup": "menu",
						disabled: C
					}, o().createElement(m.J, {
						type: "caret-down",
						label: H("common.more"),
						size: 12
					})),
					menu: E
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/prop-types/index.js"),
				m = n.n(s),
				c = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const f = ({
				children: l
			}) => o().createElement(c.xu, {
				height: 411
			}, l);
			f.propTypes = {
				children: m().node
			}, v.Z = f
		},
		"../react/common/components/ModalManager.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				ZP: function() {
					return i
				},
				dd: function() {
					return a
				},
				vR: function() {
					return r
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("webpack/sharing/consume/default/react-redux/react-redux");
			const m = E => E.application.modals;
			var c = n("../react/common/actions/modalActions.ts"),
				f = n("../../../../node_modules/swr/core/dist/index.mjs"),
				l = n("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function p() {
				return p = Object.assign ? Object.assign.bind() : function(E) {
					for (var g = 1; g < arguments.length; g++) {
						var h = arguments[g];
						for (var C in h) Object.prototype.hasOwnProperty.call(h, C) && (E[C] = h[C])
					}
					return E
				}, p.apply(this, arguments)
			}
			const y = o().createContext(null);
			class t extends o().Component {
				render() {
					const {
						modals: g,
						closeModal: h
					} = this.props;
					return o().createElement(o().Fragment, null, g.map(({
						ModalComponent: C,
						props: L = {},
						id: H
					}) => {
						const N = () => {
							typeof L.onClose == "function" && L.onClose(), h(C)
						};
						return o().createElement(y.Provider, {
							key: H,
							value: {
								closeModal: N
							}
						}, o().createElement(f.J$, {
							value: l.ZP
						}, o().createElement(C, p({}, L, {
							isOpen: !0,
							closeModal: N
						}))))
					}))
				}
			}

			function r() {
				const E = o().useContext(y);
				if (!E) throw new Error("useModalContext must be used within a ModalContext");
				return E
			}

			function a() {
				const E = (0, s.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...g) {
						return E(c.openModal(...g))
					}, [E]),
					closeModal: (0, e.useCallback)(function(...g) {
						return E(c.closeModal(...g))
					}, [E])
				}
			}
			var i = (0, s.connect)(E => ({
				modals: m(E)
			}), c)(t)
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				BQ: function() {
					return t
				},
				Gn: function() {
					return p
				},
				JR: function() {
					return y
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return f
				},
				ZI: function() {
					return c
				},
				if: function() {
					return o
				},
				q6: function() {
					return s
				},
				w_: function() {
					return m
				},
				zl: function() {
					return l
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				s = "date-from",
				m = "date-to",
				c = "from",
				f = "to",
				l = "all",
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
			let y = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				t = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/constants/analytics/botScoreSrc.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				EG: function() {
					return s
				},
				Me: function() {
					return c
				},
				sk: function() {
					return m
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/index.js"),
				o = n("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let s = function(f) {
				return f.NOT_COMPUTED = "not_computed", f.MACHINE_LEARNING = "machine_learning", f.HEURISTICS = "heuristics", f.BEHAVIORAL_ANALYSIS = "behavioral_analysis", f.JS_FINGERPRINTING = "js_fingerprinting", f.VERIFIED_BOT = "verified_bot", f.CLOUDFLARE_SERVICE = "cloudflare_service", f
			}({});
			const m = {
					[s.NOT_COMPUTED]: "Not Computed",
					[s.MACHINE_LEARNING]: "Machine Learning",
					[s.HEURISTICS]: "Heuristics",
					[s.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[s.JS_FINGERPRINTING]: "JS Fingerprinting",
					[s.VERIFIED_BOT]: "Verified Bot",
					[s.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				c = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [s.NOT_COMPUTED, s.MACHINE_LEARNING, s.HEURISTICS, s.BEHAVIORAL_ANALYSIS, s.JS_FINGERPRINTING, s.VERIFIED_BOT, s.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Gq: function() {
					return m
				},
				g$: function() {
					return s
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
					return c
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return u
				},
				hQ: function() {
					return l
				},
				SP: function() {
					return p
				}
			});
			let e = function(i) {
				return i.page_rules = "page_rules", i.automatic_platform_optimization = "automatic_platform_optimization", i
			}({});
			const o = "page_rules",
				s = "automatic_platform_optimization",
				m = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					volume_included: 1,
					ubb_frequency: 1,
					ubb_price: .1,
					ubb_unit: "gigabyte"
				},
				c = {
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
				l = {
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
				a = n("../react/common/constants/billing/workers.ts");
			const u = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				FP: function() {
					return e
				},
				Nl: function() {
					return c
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
				m = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				c = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Dk: function() {
					return u
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
					return c
				},
				UM: function() {
					return t
				},
				Xf: function() {
					return y
				},
				Y1: function() {
					return l
				},
				p6: function() {
					return p
				},
				q0: function() {
					return m
				},
				rg: function() {
					return g
				},
				sJ: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const m = "healthy",
				c = "degraded",
				f = "critical",
				l = "unknown",
				p = "not-monitored",
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
				a = "marketing-pt",
				u = () => {
					const L = s.Z.get(a);
					if (!!L) return r[L]
				},
				i = ["gov"],
				E = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				g = "banner-notification-interactions",
				h = null;
			let C = function(L) {
				return L.SUPER_ADMIN = "Super Administrator - All Privileges", L.ADMIN = "Administrator", L.ADMIN_READ_ONLY = "Administrator Read Only", L
			}({})
		},
		"../react/common/constants/index.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
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
			var e = n("../react/common/constants/constants.ts"),
				o = n("../react/common/constants/billing/index.ts")
		},
		"../react/common/hooks/suspenseHelpers.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				bt: function() {
					return l
				},
				nW: function() {
					return c
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const m = "suspenseComplete";

			function c() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(m))
				}, [])
			}

			function f(p) {
				(0, s.OR)(m, () => {
					window.setTimeout(p, 0)
				}, {
					target: window
				})
			}

			function l(...p) {
				const [y, t] = p;
				o().useLayoutEffect(y, t), f(y)
			}
		},
		"../react/common/hooks/useCachedState.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				j: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function m(c, {
				key: f,
				cache: l = s.E
			} = {}) {
				const p = f !== void 0 && l.get(f),
					[y, t] = (0, e.useState)(p || c);
				return [y, a => {
					t(u => (a instanceof Function && (a = a(u)), f !== void 0 && l.set(f, a), a))
				}]
			}
		},
		"../react/common/hooks/useClickOutside.ts": function(G, v, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");

			function o(s, m) {
				(0, e.OR)("click", c => {
					var f;
					c.target instanceof Node && c.target.isConnected && ((f = s.current) === null || f === void 0 ? void 0 : f.contains(c.target)) === !1 && m(c)
				}, {
					capture: !0
				})
			}
			v.Z = o
		},
		"../react/common/hooks/useGate.ts": function(G, v, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(s) {
				return (0, e.qf)(s)
			}
			v.Z = o
		},
		"../react/common/hooks/usePrevious.ts": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function s(m) {
				const c = (0, e.useRef)(m);
				return (0, e.useEffect)(() => {
					c.current = m
				}, [m]), c.current
			}
			v.Z = s
		},
		"../react/common/middleware/sparrow/errors.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Uh: function() {
					return c
				},
				ez: function() {
					return m
				},
				oV: function() {
					return f
				}
			});

			function e(l, p, y) {
				return p = o(p), p in l ? Object.defineProperty(l, p, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[p] = y, l
			}

			function o(l) {
				var p = s(l, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function s(l, p) {
				if (typeof l != "object" || l === null) return l;
				var y = l[Symbol.toPrimitive];
				if (y !== void 0) {
					var t = y.call(l, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(l)
			}
			class m extends Error {
				constructor(p, y) {
					super(y);
					e(this, "eventName", void 0), this.eventName = p, this.name = "SparrowValidationError"
				}
			}
			class c extends m {
				constructor(p) {
					super(p, `Event not allowed: "${p}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class f extends m {
				constructor(p, y) {
					super(p, `Found invalid properties on event: "${p}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = y
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				AC: function() {
					return Me
				},
				Au: function() {
					return T
				},
				B: function() {
					return Oe
				},
				B3: function() {
					return Se
				},
				BG: function() {
					return Q
				},
				Bp: function() {
					return $e
				},
				D0: function() {
					return H
				},
				DT: function() {
					return D
				},
				EL: function() {
					return B
				},
				GE: function() {
					return Ke
				},
				Ko: function() {
					return w
				},
				Kx: function() {
					return V
				},
				Le: function() {
					return z
				},
				O4: function() {
					return Fe
				},
				Ou: function() {
					return I
				},
				Py: function() {
					return xe
				},
				QI: function() {
					return Pe
				},
				RO: function() {
					return me
				},
				T3: function() {
					return Be
				},
				T8: function() {
					return J
				},
				UX: function() {
					return b
				},
				VP: function() {
					return _e
				},
				Xo: function() {
					return De
				},
				Xu: function() {
					return se
				},
				Yi: function() {
					return He
				},
				Yj: function() {
					return A
				},
				Zu: function() {
					return x
				},
				bC: function() {
					return oe
				},
				f8: function() {
					return S
				},
				hI: function() {
					return Ye
				},
				hN: function() {
					return Z
				},
				hX: function() {
					return Te
				},
				iq: function() {
					return Ie
				},
				nE: function() {
					return Y
				},
				oD: function() {
					return k
				},
				oI: function() {
					return R
				},
				oJ: function() {
					return Ue
				},
				uF: function() {
					return te
				},
				ut: function() {
					return Ne
				},
				vU: function() {
					return Le
				},
				wQ: function() {
					return ye
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				o = n("../../../../node_modules/lodash/get.js"),
				s = n.n(o),
				m = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				c = n.n(m),
				f = n("../../../../node_modules/reselect/lib/index.js"),
				l = n("../../../../node_modules/moment/moment.js"),
				p = n.n(l),
				y = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				r = n("../react/common/selectors/userSelectors.ts"),
				a = n("../react/common/selectors/entitlementsSelectors.ts"),
				u = n("../react/app/components/DeepLink/selectors.ts"),
				i = n("../react/common/constants/index.ts"),
				E = n("../react/common/utils/hasRole.ts");

			function g(_) {
				for (var F = 1; F < arguments.length; F++) {
					var X = arguments[F] != null ? Object(arguments[F]) : {},
						re = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(X).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(X, ue).enumerable
					})), re.forEach(function(ue) {
						h(_, ue, X[ue])
					})
				}
				return _
			}

			function h(_, F, X) {
				return F = C(F), F in _ ? Object.defineProperty(_, F, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[F] = X, _
			}

			function C(_) {
				var F = L(_, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function L(_, F) {
				if (typeof _ != "object" || _ === null) return _;
				var X = _[Symbol.toPrimitive];
				if (X !== void 0) {
					var re = X.call(_, F || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(_)
			}
			const H = _ => {
					const F = te(_);
					return F == null ? void 0 : F.account
				},
				N = _ => {
					const F = (0, r.PR)(_);
					if (F) {
						const X = F.id;
						return _.accountAccess[X] || {}
					}
					return {}
				},
				P = _ => _.accountsDetailed,
				J = (0, t.P1)("accountsDetailed", P),
				Q = _ => _.memberships,
				Y = (0, f.P1)((0, t.P1)("memberships", Q), u.U, (_, F) => !!F && !!_ ? _.filter(X => F.includes(X.id)) : _),
				Z = _ => _.accountFlags && _.accountFlags.data,
				V = _ => _.accountFlags,
				z = (_, F, X) => {
					const re = Z(_);
					return !re || !re[F] ? null : re[F][X]
				},
				W = _ => _.accountFlags.isRequesting,
				R = (_, ...F) => s()(_, ["accountFlagsChanges", "data", ...F]),
				S = _ => _.accountFlagsChanges.isRequesting,
				q = (0, f.P1)(Z, V, (_, F) => ({
					data: _,
					meta: F
				})),
				j = (_, F, X) => !!(isEnterpriseSSEnabledSelector(_) && z(_, F, X)),
				se = _ => _.membership,
				te = (0, t.P1)("membership", se),
				M = (0, f.P1)(te, se, (_, F) => ({
					data: _,
					meta: F
				})),
				I = _ => {
					const {
						roles: F = []
					} = te(_) || {};
					return Boolean(F.find(X => X === "Super Administrator - All Privileges" || X === "Billing"))
				},
				k = _ => {
					const F = N(_),
						X = fe.getMemberships(_) ? c().asMutable(fe.getMemberships(_)) : [];
					if (!!X) return c().from(X.map(re => g({}, re, {
						lastSeen: F[re.account.id] ? F[re.account.id].lastSeen : null
					})).sort((re, ue) => re.lastSeen && ue.lastSeen ? ue.lastSeen - re.lastSeen : 0))
				},
				b = _ => _.filteredMemberships,
				B = (0, t.P1)("filteredMemberships", b),
				x = (0, f.P1)(te, _ => _ == null ? void 0 : _.permissions),
				A = (0, f.P1)(x, _ => (0, e.Z)(F => {
					var X;
					return (X = _ == null ? void 0 : _[F]) !== null && X !== void 0 ? X : {
						read: !1,
						edit: !1
					}
				})),
				w = (0, f.P1)(te, _ => _ == null ? void 0 : _.policies),
				D = (_, F, X) => {
					let re = fe.getMembership(_);
					if (!re) {
						const ue = fe.getMemberships(_);
						if (!ue || !F) return !1;
						re = ue.find(ge => ge.account.id === F)
					}
					if (!re || !X) return !1;
					try {
						return X(re.permissions)
					} catch {
						return !1
					}
				},
				K = _ => {
					var F, X;
					return (F = (X = H(_)) === null || X === void 0 ? void 0 : X.meta.has_pro_zones) !== null && F !== void 0 ? F : !1
				},
				ne = _ => {
					var F, X;
					return (F = (X = H(_)) === null || X === void 0 ? void 0 : X.meta.has_business_zones) !== null && F !== void 0 ? F : !1
				},
				oe = _ => ne(_) || K(_),
				le = (_, F) => {
					const X = Ce(_, F);
					return !!X && !!X.enabled
				},
				Ce = (_, F) => {
					const X = fe.getMembership(_),
						re = X && X.account;
					return re && re.legacy_flags && re.legacy_flags[F]
				},
				ye = _ => le(_, "custom_pages"),
				he = _ => !!_ && _["webhooks.webhooks.enabled"],
				$ = _ => z(_, "bots", "enabled"),
				ie = _ => z(_, "billing", "annual_subscriptions_enable"),
				me = _ => _ ? Boolean(z(_, "ConstellationAI", "v2_ui")) : !1,
				Te = _ => _ ? Boolean(z(_, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Oe = _ => _ ? Boolean(z(_, "AIgateway", "enabled")) : !1,
				ke = _ => Ce(_, "enterprise_zone_quota"),
				ze = _ => {
					const F = ke(_);
					return !F || !F.available ? -1 : F.available
				},
				Ie = _ => _.accountMembers,
				Se = (0, t.P1)("accountMembers", Ie),
				Fe = _ => _.accountMember && _.accountMember.isRequesting,
				Re = _ => _.accountRoles,
				Me = (0, t.P1)("accountRoles", Re),
				xe = (_, F) => {
					const X = fe.getMemberships(_),
						re = X && X.find(ve => ve.account.id === F);
					if (re) return re.account.name.replace(" Account", " account");
					const ue = fe.getMembership(_),
						ge = ue && ue.account;
					return ge && ge.id === F ? ge.name : null
				},
				Ne = (_, F) => {
					const X = fe.getMemberships(_),
						re = X && X.find(ve => ve.account.id === F);
					if (re) return re.account.settings.access_approval_expiry;
					const ue = fe.getMembership(_),
						ge = ue && ue.account;
					return ge && ge.id === F ? ge.settings.access_approval_expiry : null
				},
				De = (_, F) => {
					const X = Ne(_, F);
					return X ? p().utc(X).isAfter() : !1
				},
				Be = (_, F, X) => {
					const re = Ne(_, F);
					let ue = re ? p().utc(re) : null;
					return !ue || !ue.isAfter() ? "" : ue && ue.year() === 3e3 ? X("account.access_approval.card_expiration_forever") : X("account.access_approval.card_expiration_text", {
						expiryTimestamp: ue.local().format(y.U.DateTime)
					})
				},
				Ue = _ => _ && _.member && _.member.edit,
				T = (_, F) => {
					const X = fe.getMembership(_),
						re = X && X.account;
					return re ? re.id !== F : !1
				},
				U = _ => _.dpa,
				ee = (0, t.P1)("dpa", U),
				ce = _ => _.webhook,
				de = _ => _.webhooks,
				Ee = (0, t.P1)("webhook", de),
				_e = _ => _.accountLegoContract,
				je = (0, t.P1)("accountLegoContract", _e),
				Pe = _ => {
					const F = je(_);
					return (F == null ? void 0 : F.lego_state) ? F.lego_state : ""
				},
				Ge = _ => Pe(_) === "signed",
				Ke = _ => _e(_).isRequesting,
				Le = _ => {
					const F = je(_);
					return F && F.subscription_type ? F.subscription_type : ""
				},
				we = _ => Le(_) !== "",
				fe = {
					getMembership: te,
					getMemberships: Y,
					getFilteredMemberships: B,
					getAccountMembers: Se,
					getAccountRoles: Me
				},
				$e = _ => _.accountSingle,
				He = (0, t.P1)("accountSingle", $e),
				Ye = _ => {
					const F = [i.K$.SUPER_ADMIN, i.K$.ADMIN];
					return (0, E.n)(_, F)
				}
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				$f: function() {
					return i
				},
				AD: function() {
					return c
				},
				BF: function() {
					return u
				},
				Bs: function() {
					return H
				},
				Ci: function() {
					return A
				},
				E6: function() {
					return a
				},
				Hq: function() {
					return ye
				},
				Ms: function() {
					return J
				},
				Q2: function() {
					return f
				},
				Td: function() {
					return C
				},
				Z: function() {
					return K
				},
				a: function() {
					return L
				},
				a5: function() {
					return oe
				},
				du: function() {
					return p
				},
				ec: function() {
					return S
				},
				f: function() {
					return Ce
				},
				hL: function() {
					return ne
				},
				ji: function() {
					return w
				},
				jo: function() {
					return Q
				},
				k4: function() {
					return le
				},
				lI: function() {
					return m
				},
				p1: function() {
					return g
				},
				pK: function() {
					return he
				},
				pf: function() {
					return t
				},
				qR: function() {
					return h
				},
				rV: function() {
					return l
				},
				u1: function() {
					return y
				},
				w4: function() {
					return r
				},
				yD: function() {
					return D
				}
			});
			var e = n("../react/utils/url.ts");

			function o($, ie) {
				return $ && $[ie]
			}
			const s = $ => !m($).isRequesting;

			function m($) {
				return $.entitlements.zone
			}

			function c($) {
				return m($).data
			}
			const f = $ => {
				var ie, me;
				return ((ie = m($).paginationData) === null || ie === void 0 || (me = ie.options) === null || me === void 0 ? void 0 : me.editedDate) || {}
			};

			function l($, ie) {
				const me = c($);
				return me ? o(me, ie) : void 0
			}
			const p = ($, ie) => l($, ie) === !0;

			function y($) {
				return $.entitlements.account
			}

			function t($) {
				return y($).data
			}
			const r = $ => {
				var ie, me;
				return ((ie = y($).paginationData) === null || ie === void 0 || (me = ie.options) === null || me === void 0 ? void 0 : me.editedDate) || {}
			};

			function a($) {
				return !y($).isRequesting
			}

			function u($, ie) {
				const me = t($);
				return me ? o(me, ie) : void 0
			}

			function i($, ie) {
				return u($, ie) === !0
			}

			function E($, ie) {
				return ie.every(me => i($, me))
			}

			function g($) {
				return i($, "contract.customer_enabled")
			}

			function h($) {
				return i($, "contract.self_service_allowed")
			}

			function C($) {
				return i($, "billing.partners_managed")
			}
			const L = $ => g($) && h($),
				H = $ => i($, "enterprise.ecp_allowed");

			function N($) {
				return P($) || i($, "argo.allow_smart_routing") || i($, "argo.allow_tiered_caching") || i($, "rate_limiting.enabled") || i($, "ctm.enabled") || i($, "workers.enabled") || i($, "workers.kv_store.enabled") || i($, "stream.enabled")
			}
			const P = $ => p($, "argo.allow_smart_routing") || p($, "argo.allow_tiered_caching"),
				J = $ => i($, "zone.cname_setup_allowed") || i($, "zone.partial_setup_allowed") || p($, "zone.partial_setup_allowed"),
				Q = $ => i($, "argo.allow_smart_routing") || p($, "argo.allow_smart_routing"),
				Y = $ => i($, "argo.allow_tiered_caching") || p($, "argo.allow_tiered_caching"),
				Z = $ => Q($) || Y($),
				V = $ => i($, "ctm.enabled"),
				z = $ => {
					const ie = u($, "ctm.load_balancers");
					return typeof ie == "number" ? ie : 0
				},
				W = $ => {
					const ie = u($, "ctm.pools");
					return typeof ie == "number" ? ie : 0
				},
				R = $ => {
					const ie = u($, "ctm.origins");
					return typeof ie == "number" ? ie : 0
				},
				S = $ => i($, "workers.enabled"),
				q = $ => i($, "stream.enabled"),
				j = $ => {
					const ie = u($, "access.users_allowed");
					return typeof ie == "number" ? ie : 0
				},
				se = $ => j($) > 0,
				te = $ => {
					const ie = l($, "dedicated_certificates");
					return typeof ie == "number" ? ie : 0
				},
				M = $ => te($) > 0,
				I = $ => {
					const ie = l($, "rate_limiting.max_rules");
					return typeof ie == "number" ? ie : 0
				},
				k = $ => i($, "rate_limiting.enabled"),
				b = $ => {
					const ie = l($, "page_rules");
					return typeof ie == "number" ? ie : 0
				},
				B = $ => b($) > 0,
				x = $ => {
					const ie = u($, "dns_firewall.max_clusters_allowed");
					return typeof ie == "number" ? ie : 0
				},
				A = $ => x($) > 0,
				w = $ => p($, "zone.advanced_certificate_manager") || i($, "zone.advanced_certificate_manager"),
				D = $ => l($, "authoritative_dns.proxy_record_allowed") === !1 || u($, "authoritative_dns.proxy_record_allowed") === !1,
				K = $ => i($, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				ne = $ => l($, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				oe = $ => {
					const ie = l($, "authoritative_dns.min_record_ttl_allowed");
					return typeof ie == "number" && ie > 1 ? ie : 60
				},
				le = $ => i($, "foundation_dns.advanced_nameservers_allowed") || p($, "foundation_dns.advanced_nameservers_allowed"),
				Ce = ($, ie) => ((0, e.el)(window.location.pathname) ? l : u)($, ie),
				ye = $ => i($, "authoritative_dns.multi_provider_allowed") || p($, "authoritative_dns.multi_provider_allowed"),
				he = $ => i($, "secondary_dns.secondary_overrides") || p($, "secondary_dns.secondary_overrides")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				r: function() {
					return m
				},
				v: function() {
					return c
				}
			});
			var e = n("../react/utils/i18n.ts"),
				o = n("../../../common/intl/intl-types/src/index.ts"),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const m = f => {
				const l = f.userCommPreferences.data;
				if (l == null ? void 0 : l["language-locale"]) return s.Z.set(e.ly, l["language-locale"]), l["language-locale"];
				{
					s.Z.has(e.ly) || s.Z.set(e.ly, e.ZW);
					const p = s.Z.get(e.ly);
					return c(p) ? p : e.ZW
				}
			};

			function c(f) {
				const l = Object.keys(o.Q).find(p => o.Q[p] === f);
				return !!f && typeof f == "string" && l != null && (0, e.S8)(!1, l)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				$8: function() {
					return c
				},
				BG: function() {
					return y
				},
				BY: function() {
					return L
				},
				GP: function() {
					return i
				},
				GU: function() {
					return H
				},
				PR: function() {
					return s
				},
				h$: function() {
					return h
				},
				h8: function() {
					return t
				},
				kk: function() {
					return g
				},
				l8: function() {
					return l
				},
				mV: function() {
					return E
				},
				vW: function() {
					return f
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const o = N => N.user,
				s = (0, e.P1)("user", o),
				m = N => {
					var P;
					return (P = s(N)) === null || P === void 0 ? void 0 : P.email.endsWith("@cloudflare.com")
				},
				c = N => {
					var P;
					return !!((P = s(N)) === null || P === void 0 ? void 0 : P.id)
				},
				f = N => {
					const P = s(N);
					if (!!P) return P.first_name && P.last_name ? `${P.first_name} ${P.last_name}` : P.email
				},
				l = N => {
					const P = s(N);
					return P && P.has_enterprise_zones
				},
				p = N => N.userCommPreferences,
				y = (0, e.P1)("userCommPreferences", p),
				t = N => {
					const P = s(N);
					return P && P.email_verified
				},
				r = N => {
					const P = y(N);
					return P && P.preferences.marketing_communication
				},
				a = N => N.userDetails,
				u = (0, e.P1)("userDetails", a),
				i = N => {
					const P = u(N);
					return P && P["2FA-RECOVERY"] === "scheduled"
				},
				E = N => {
					const P = u(N);
					return P && P["2FA-RECOVERY"] === "interrupted"
				},
				g = N => {
					const P = u(N);
					return P == null ? void 0 : P["NEW-USER-EMAIL"]
				},
				h = N => N.gates.assignments,
				C = (N, P) => N && N[P];

			function L(N, P) {
				const J = h(N);
				return J ? C(J, P) : void 0
			}
			const H = (N, P) => L(N, P) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				$4: function() {
					return J
				},
				$t: function() {
					return xe
				},
				A4: function() {
					return g
				},
				Cu: function() {
					return h
				},
				DQ: function() {
					return le
				},
				Ej: function() {
					return Y
				},
				FH: function() {
					return L
				},
				ID: function() {
					return k
				},
				Ko: function() {
					return Te
				},
				Le: function() {
					return he
				},
				Ly: function() {
					return x
				},
				M3: function() {
					return Se
				},
				N8: function() {
					return Ie
				},
				NY: function() {
					return K
				},
				Ns: function() {
					return B
				},
				Ox: function() {
					return Be
				},
				P4: function() {
					return Z
				},
				RO: function() {
					return M
				},
				SX: function() {
					return ne
				},
				Tr: function() {
					return me
				},
				U: function() {
					return C
				},
				Ug: function() {
					return N
				},
				V6: function() {
					return Fe
				},
				WR: function() {
					return Ue
				},
				Xg: function() {
					return E
				},
				ZB: function() {
					return ye
				},
				_y: function() {
					return b
				},
				cU: function() {
					return Oe
				},
				cg: function() {
					return oe
				},
				d2: function() {
					return q
				},
				jN: function() {
					return z
				},
				jg: function() {
					return w
				},
				kC: function() {
					return Q
				},
				kf: function() {
					return Re
				},
				ko: function() {
					return te
				},
				mK: function() {
					return Ne
				},
				nA: function() {
					return i
				},
				oY: function() {
					return V
				},
				qM: function() {
					return $
				},
				rq: function() {
					return D
				},
				tS: function() {
					return P
				},
				tU: function() {
					return R
				},
				vB: function() {
					return De
				},
				vM: function() {
					return W
				},
				wH: function() {
					return H
				},
				wn: function() {
					return Ce
				},
				xU: function() {
					return S
				},
				xw: function() {
					return ie
				},
				zO: function() {
					return ke
				},
				zW: function() {
					return Me
				},
				zh: function() {
					return j
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				o = n("../react/app/redux/normalizer.js"),
				s = n("../../../../node_modules/lodash/get.js"),
				m = n.n(s),
				c = n("../../../../node_modules/moment/moment.js"),
				f = n.n(c),
				l = n("../react/common/constants/billing/index.ts");

			function p(T) {
				for (var U = 1; U < arguments.length; U++) {
					var ee = arguments[U] != null ? Object(arguments[U]) : {},
						ce = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && ce.push.apply(ce, Object.getOwnPropertySymbols(ee).filter(function(de) {
						return Object.getOwnPropertyDescriptor(ee, de).enumerable
					})), ce.forEach(function(de) {
						y(T, de, ee[de])
					})
				}
				return T
			}

			function y(T, U, ee) {
				return U = t(U), U in T ? Object.defineProperty(T, U, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[U] = ee, T
			}

			function t(T) {
				var U = r(T, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function r(T, U) {
				if (typeof T != "object" || T === null) return T;
				var ee = T[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ce = ee.call(T, U || "default");
					if (typeof ce != "object") return ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(T)
			}
			const a = (0, o.P1)("zone", T => T.zone),
				u = T => {
					var U;
					return (U = T.zoneVersioning) === null || U === void 0 ? void 0 : U.zoneVersionSelector
				},
				i = (0, e.P1)(a, u, (T, U) => {
					var ee, ce, de;
					let Ee;
					if (Array.isArray(T) && T.length === 1 ? Ee = T[0] : T && !Array.isArray(T) && (Ee = T), !Ee) return;
					const _e = !!(U == null ? void 0 : U.enabled);
					return p({}, Ee, Ee.name && {
						name: _e ? U.rootZoneName : Ee.name
					}, {
						versioning: {
							enabled: _e,
							isRoot: !((ee = Ee.name) === null || ee === void 0 ? void 0 : ee.endsWith(".config.cfdata.org")),
							version: _e ? U.selectedVersion : 0,
							rootZoneId: _e ? U.rootZoneId : (ce = (de = Ee) === null || de === void 0 ? void 0 : de.id) !== null && ce !== void 0 ? ce : ""
						}
					})
				}),
				E = T => T.zone,
				g = (0, e.P1)(i, E, (T, U) => ({
					data: T,
					meta: U
				})),
				h = T => {
					var U, ee;
					return (U = (ee = i(T)) === null || ee === void 0 ? void 0 : ee.id) !== null && U !== void 0 ? U : ""
				},
				C = T => T.zones,
				L = T => T.zonesRoot,
				H = T => T.zonesAccount,
				N = (0, o.P1)("zones", C),
				P = (0, o.P1)("zonesRoot", L),
				J = (0, o.P1)("zonesAccount", H);

			function Q(T) {
				const U = i(T);
				return U ? U.created_on : null
			}

			function Y(T, U, ee) {
				const ce = Q(T);
				if (!ce) return;
				const de = f().duration(U, ee),
					Ee = new Date(ce),
					_e = new Date(new Date().getTime() - de.asMilliseconds());
				return Ee.getTime() > _e.getTime()
			}

			function Z(T) {
				const U = i(T);
				return U ? U.status : null
			}

			function V(T) {
				const U = i(T);
				return U ? U.type : null
			}

			function z(T) {
				return T.plan_pending ? T.plan_pending : T.plan
			}

			function W(T) {
				const U = i(T);
				if (!U) return;
				const ee = z(U);
				return ee && ee.legacy_id
			}

			function R(T, U) {
				const ee = z(T);
				return !!ee && l.Gs.indexOf(ee.legacy_id) >= l.Gs.indexOf(U)
			}

			function S(T) {
				return !!T && T.status === "initializing"
			}

			function q(T) {
				return !!T && T.status === "pending"
			}

			function j(T) {
				return !!T && T.status === "active"
			}

			function se(T, U) {
				if (!T) return !1;
				const ee = z(T);
				return !!ee && ee.legacy_id === U
			}

			function te(T) {
				return se(T, "enterprise")
			}
			const M = T => te(i(T));

			function I(T) {
				return se(T, "business")
			}
			const k = T => I(i(T));

			function b(T) {
				return se(T, "pro")
			}

			function B(T) {
				return se(T, "free")
			}

			function x(T) {
				return !te(T)
			}

			function A(T) {
				return T && T.owner
			}

			function w(T, U) {
				const ee = A(U);
				return !!ee && ee.type === "user" && ee.id === T.id
			}

			function D(T) {
				const U = i(T);
				return !!U && U.type === "partial"
			}

			function K(T) {
				const U = i(T);
				return !!U && U.type === "secondary"
			}

			function ne(T) {
				const U = i(T);
				return U && D(T) && U.host
			}
			const oe = T => {
					var U;
					const ee = i(T);
					return !!(ee == null ? void 0 : ee.host) && !!((U = ee.plan) === null || U === void 0 ? void 0 : U.externally_managed)
				},
				le = T => {
					const U = N(T);
					return U && U.some(te)
				},
				Ce = (T, U) => {
					const ee = i(T);
					return ee && ee.betas ? ee.betas.includes(U) : !1
				},
				ye = (T, ...U) => m()(T, ["zoneFlags", "data", ...U]),
				he = (T, ...U) => m()(T, ["accountFlags", "data", ...U]),
				$ = T => T.accountFlags.isRequesting,
				ie = T => T.zoneFlags.isRequesting,
				me = (T, ...U) => m()(T, ["zoneFlagsChanges", "data", ...U]),
				Te = T => T.zoneFlagsChanges.isRequesting,
				Oe = T => T.zoneFlags && T.zoneFlags.data,
				ke = T => T.zoneFlags,
				ze = (0, e.P1)(Oe, ke, (T, U) => ({
					data: T,
					meta: U
				})),
				Ie = (0, o.P1)("abuseUrls", T => T.overview.abuseUrls),
				Se = T => {
					const U = i(T);
					return U ? `/${U.account.id}/${U.name}` : null
				},
				Fe = T => T.zoneMarketingCampaigns,
				Re = T => T.overview.zoneBlocks.data,
				Me = T => T.overview.zoneBlocks.isRequesting,
				xe = T => T.overview.zoneBlocks.hasData,
				Ne = T => {
					var U, ee;
					return (T == null || (U = T.overview.zoneBlocks) === null || U === void 0 || (ee = U.paginationData) === null || ee === void 0 ? void 0 : ee.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				De = T => T.overview.zoneBlocksReview.isRequesting,
				Be = T => T.overview.zoneHold,
				Ue = (0, o.P1)("zoneHold", Be)
		},
		"../react/common/utils/formatDate.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			v.Z = (o, s, m = !1) => (0, e.p6)(o, s, m)
		},
		"../react/common/utils/hasRole.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				n: function() {
					return o
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts");
			const o = (s, m) => {
				const {
					roles: c = []
				} = (0, e.uF)(s) || {};
				return m.some(f => c.includes(f))
			}
		},
		"../react/common/utils/isGuards.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Q$: function() {
					return s
				},
				t: function() {
					return f
				},
				v5: function() {
					return m
				},
				zE: function() {
					return c
				}
			});
			var e = n("../react/common/constants/index.ts"),
				o = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const s = l => l ? ["page", "per_page", "count", "total_count"].every(y => y in l && l[y]) : !1,
				m = (l = "") => e.Dy.includes(l.toLowerCase()),
				c = l => l !== null && typeof l == "object" && "name" in l && "size" in l && "type" in l && typeof l.slice == "function",
				f = l => (0, o.Z)(l)
		},
		"../react/common/validators/index.js": function(G, v, n) {
			"use strict";
			n.d(v, {
				K2: function() {
					return o
				},
				Lb: function() {
					return s
				},
				XI: function() {
					return m
				},
				bK: function() {
					return p
				},
				jk: function() {
					return l
				},
				wb: function() {
					return c
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = y => /^https?:\/\/(.*)/.test(y),
				s = y => e.default.hostname.test(y),
				m = y => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(y),
				c = y => /^[!-~]+$/.test(y),
				f = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				l = y => f.test(y),
				p = y => !!y && !!y.length && /^[ -~]+$/.test(y)
		},
		"../react/initReact.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				o: function() {
					return Ye
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				m = n("webpack/sharing/consume/default/react-dom/react-dom"),
				c = n("webpack/sharing/consume/default/react-redux/react-redux"),
				f = n("../../../../node_modules/swr/core/dist/index.mjs"),
				l = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				p = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				y = n("../react/shims/focus-visible.js"),
				t = n("../react/app/components/DeepLink/index.ts"),
				r = n("../react/utils/history.ts"),
				a = n("../react/app/providers/storeContainer.js"),
				u = n("../../../../node_modules/prop-types/index.js"),
				i = n.n(u),
				E = n("../react/common/selectors/languagePreferenceSelector.ts"),
				g = n("../react/utils/translator.tsx"),
				h = n("../../../common/intl/intl-react/src/index.ts"),
				C = n("../../../dash/intl/intl-translations/src/index.ts"),
				L = n("../node_modules/query-string/query-string.js"),
				H = n.n(L),
				N = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				P = n("../react/common/actions/userActions.ts"),
				J = n("../react/common/selectors/userSelectors.ts"),
				Q = n("../react/utils/i18n.ts"),
				Y = n("../react/utils/bootstrap.ts");

			function Z(_) {
				for (var F = 1; F < arguments.length; F++) {
					var X = arguments[F] != null ? Object(arguments[F]) : {},
						re = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(X).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(X, ue).enumerable
					})), re.forEach(function(ue) {
						V(_, ue, X[ue])
					})
				}
				return _
			}

			function V(_, F, X) {
				return F = z(F), F in _ ? Object.defineProperty(_, F, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[F] = X, _
			}

			function z(_) {
				var F = W(_, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function W(_, F) {
				if (typeof _ != "object" || _ === null) return _;
				var X = _[Symbol.toPrimitive];
				if (X !== void 0) {
					var re = X.call(_, F || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(_)
			}
			let R = H().parse(location.search);
			const S = _ => {
					const F = (0, Y.$8)() ? [(0, C.Fy)(C.if.changes), (0, C.Fy)(C.if.common), (0, C.Fy)(C.if.navigation), (0, C.Fy)(C.if.overview), (0, C.Fy)(C.if.onboarding), (0, C.Fy)(C.if.invite), (0, C.Fy)(C.if.login), (0, C.Fy)(C.if.dns), (0, C.Fy)(C.n4.ssl_tls), (0, C.Fy)(C.if.message_inbox)] : [(0, C.Fy)(C.if.common), (0, C.Fy)(C.if.invite), (0, C.Fy)(C.if.login), (0, C.Fy)(C.if.onboarding)];
					R.lang ? q(_) : N.Z.get(Q.th) && j(_, N.Z.get(Q.ly));
					const X = async re => (await Promise.all(F.map(ge => ge(re)))).reduce((ge, ve) => Z({}, ge, ve), {});
					return o().createElement(h.RD.Provider, {
						value: _.languagePreference
					}, o().createElement(h.bd, {
						translator: g.Vb,
						locale: _.languagePreference
					}, o().createElement(h.lm, {
						loadPhrases: X
					}, _.children)))
				},
				q = async _ => {
					let F = R.lang.substring(0, R.lang.length - 2) + R.lang.substring(R.lang.length - 2, R.lang.length).toUpperCase();
					if (!(0, E.v)(F)) {
						console.warn(`${F} is not a supported locale.`), delete R.lang, _.history.replace({
							search: H().stringify(R)
						});
						return
					}
					N.Z.set(Q.ly, F), delete R.lang, j(_, F), _.isAuthenticated || _.history.replace({
						search: H().stringify(R)
					})
				}, j = async (_, F) => {
					if (_.isAuthenticated) try {
						await _.setUserCommPreferences({
							"language-locale": F
						}, {
							hideErrorAlert: !0
						}), N.Z.remove(Q.th), _.history.replace({
							search: H().stringify(R)
						})
					} catch (X) {
						N.Z.set(Q.th, !0), console.error(X)
					} else N.Z.set(Q.th, !0)
				}, se = _ => {
					const F = (0, J.PR)(_);
					return {
						isAuthenticated: !!(F && F.id),
						languagePreference: N.Z.get(Q.ly) || (0, E.r)(_)
					}
				}, te = {
					setUserCommPreferences: P.V_
				};
			var M = (0, s.withRouter)((0, c.connect)(se, te)(S));
			S.propTypes = {
				history: i().object,
				languagePreference: i().string.isRequired,
				children: i().node.isRequired,
				isAuthenticated: i().bool,
				setUserCommPreferences: i().func.isRequired
			};
			var I = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				k = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				b = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let B;
			const x = ({
				selectorPrefix: _ = "c_"
			} = {}) => (B || (B = (0, b.Z)({
				dev: !1,
				selectorPrefix: _
			})), B);
			var A = n("../react/common/components/ModalManager.tsx"),
				w = n("../react/app/components/ErrorBoundary.tsx"),
				D = n("../react/common/actions/notificationsActions.ts");
			const ne = (n.g.bootstrap || {}).data || {};
			class oe extends o().Component {
				componentDidMount() {
					ne.messages && this.dispatchNotificationActions(ne.messages)
				}
				dispatchNotificationActions(F) {
					F.forEach(X => {
						const {
							type: re,
							message: ue,
							persist: ge
						} = X;
						["success", "info", "warn", "error"].includes(re) && this.props.notifyAdd(re, (0, g.ZP)(ue), {
							persist: !!ge
						})
					})
				}
				render() {
					return null
				}
			}
			var Ce = (0, s.withRouter)((0, c.connect)(null, {
				notifyAdd: D.IH
			})(oe));
			oe.propTypes = {
				notifyAdd: i().func.isRequired
			};
			var ye = n("../react/app/redux/index.ts"),
				he = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function $() {
				var _;
				const F = (0, ye.p4)(J.PR),
					X = (F == null || (_ = F.email) === null || _ === void 0 ? void 0 : _.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					re = (0, he.Yc)();
				(0, e.useEffect)(() => {
					re({
						userType: X
					})
				}, [X, re])
			}
			var ie = n("../react/common/selectors/entitlementsSelectors.ts"),
				me = n("../react/common/selectors/accountSelectors.ts"),
				Te = n("../react/utils/url.ts");
			const Oe = ["accountId", "is_ent"];

			function ke() {
				const _ = (0, he.f7)(),
					F = (0, s.useHistory)(),
					X = (0, Te.uW)(F.location.pathname),
					re = (0, he.Yc)(),
					ue = (0, he.O$)(),
					ge = (0, ye.p4)(ie.u1),
					ve = !ge.isRequesting && !!ge.data,
					Ze = (0, ye.p4)(ie.p1),
					Qe = (0, ye.p4)(me.Xu),
					Ve = (0, ye.p4)(me.uF),
					Xe = !Qe.isRequesting && !!Qe.data;
				(0, e.useEffect)(() => {
					X && Xe && Ve && ve && X === Ve.account.id ? re({
						accountId: Ve.account.id,
						is_ent: Ze
					}) : (!X || X in _ && _.accountId !== X) && ue(Oe)
				}, [Xe, Ve, re, ue, ve, Ze, X, _])
			}
			var ze = n("../react/common/selectors/zoneSelectors.ts");

			function Ie() {
				const _ = (0, ye.p4)(ze.nA),
					F = (0, he.Yc)();
				(0, e.useEffect)(() => {
					var X;
					F({
						zone_id: _ == null ? void 0 : _.id,
						zone_plan: _ == null || (X = _.plan) === null || X === void 0 ? void 0 : X.legacy_id
					})
				}, [_, F])
			}
			const Se = () => ($(), ke(), Ie(), null);
			var Fe = n("../react/app/components/Persistence/index.tsx"),
				Re = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				Me = n("../react/app/components/LoadingSuspense.tsx");
			const xe = o().lazy(() => Promise.all([n.e(19192), n.e(2480), n.e(10008), n.e(33348), n.e(94012), n.e(84496), n.e(72019), n.e(78765), n.e(5668), n.e(60091), n.e(89263), n.e(39760), n.e(60734), n.e(57505), n.e(40758), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var De = () => o().createElement(Me.Z, null, o().createElement(xe, null)),
				Be = n("../libs/init/loading.ts");
			const Ue = () => (e.useEffect(() => Be.s, []), null);
			var T = n("../../../../node_modules/moment/moment.js"),
				U = n.n(T);
			const ee = _ => {
					switch (_) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return _.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return _.toLowerCase();
						default:
							return "en"
					}
				},
				ce = () => {
					const _ = (0, ye.p4)(E.r);
					(0, e.useEffect)(() => {
						const F = ee(_);
						F !== U().locale() && U().locale(F), document.documentElement.lang = _
					}, [_])
				},
				de = () => {
					(0, e.useEffect)(() => {
						async function _() {
							var F, X;
							let re;
							if (((F = window) === null || F === void 0 || (X = F.build) === null || X === void 0 ? void 0 : X.isPreviewDeploy) && (re = "cookie"), !!re) try {
								const ue = document.head.querySelector("link[rel=icon]");
								ue && (ue.href = (await n("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${re}.ico`)).default)
							} catch {}
						}
						_()
					}, [])
				};
			var Ee = n("../react/common/constants/constants.ts");
			const _e = () => {
					var _;
					const F = (0, s.useLocation)(),
						[X, re] = (0, e.useState)(((_ = window) === null || _ === void 0 ? void 0 : _.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, e.useEffect)(() => {
						const ue = H().parse(F.search);
						if (ue.pt && N.Z.set(Ee.sJ, ue.pt), ue == null ? void 0 : ue.devPanel) {
							var ge, ve;
							(ge = window) === null || ge === void 0 || (ve = ge.localStorage) === null || ve === void 0 || ve.setItem("gates_devtools_ui_gates_controller_enabled", "true"), re(!0)
						}
					}, [F.search]), {
						devPanelEnabled: X
					}
				},
				je = o().lazy(() => Promise.all([n.e(19192), n.e(2480), n.e(10008), n.e(33348), n.e(94012), n.e(84496), n.e(72019), n.e(78765), n.e(14696), n.e(41386), n.e(60091), n.e(89263), n.e(39760), n.e(60734), n.e(57505), n.e(40758), n.e(38950), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				Pe = o().lazy(() => Promise.all([n.e(83741), n.e(65447), n.e(19192), n.e(84496), n.e(14696), n.e(26337), n.e(60091), n.e(60734), n.e(69088), n.e(38950), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var Ke = ({
					userIsAuthed: _
				}) => {
					ce(), de();
					const {
						devPanelEnabled: F
					} = _e();
					return o().createElement(e.Suspense, {
						fallback: o().createElement(Ue, null)
					}, o().createElement(s.Switch, null, !_ && !0 && o().createElement(s.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, o().createElement(Pe, null)), o().createElement(s.Route, {
						render: () => o().createElement(Re.ZC, {
							minHeight: "100vh"
						}, o().createElement(je, null))
					})), F && o().createElement(De, null))
				},
				Le = n("../../../../node_modules/yup/es/index.js"),
				we = n("../../../common/util/types/src/utils/index.ts");
			const fe = {
				cfEmail: () => Le.Z_().email((0, g.ZP)("common.validation.email")).required((0, g.ZP)("common.validation.email"))
			};
			(0, we.Yd)(fe).forEach(_ => {
				Le.kM(Le.Z_, _, fe[_])
			});
			const $e = o().lazy(() => Promise.all([n.e(6368), n.e(10008), n.e(94012), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				He = () => {
					const _ = (0, Y.$8)(),
						[F, X] = (0, e.useState)(_ ? $e : o().Fragment),
						[re, ue] = (0, e.useState)((0, k.Yc)());
					(0, e.useEffect)(() => {
						(0, k.fF)(() => ue((0, k.Yc)()))
					}, []);
					const ge = ve => {
						ue(ve), (0, k.C8)(ve)
					};
					return (0, e.useEffect)(() => {
						X(_ ? $e : o().Fragment)
					}, [_]), (0, e.useEffect)(() => {
						const ve = () => ge(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", ve), () => {
							window.removeEventListener("storage", ve)
						}
					}, []), o().createElement(e.Suspense, {
						fallback: null
					}, o().createElement(c.Provider, {
						store: (0, a.bh)()
					}, o().createElement(s.Router, {
						history: r.Z
					}, o().createElement(F, null, o().createElement(I.Z, {
						renderer: x()
					}, o().createElement(M, null, o().createElement(w.Z, {
						sentryTag: "Root"
					}, o().createElement(f.J$, {
						value: {
							fetcher: ve => fetch(ve).then(Ze => Ze.json())
						}
					}, o().createElement(Se, null), o().createElement(Ce, null), o().createElement(Fe.Z_, {
						onDarkModeChangeCb: ge
					}, o().createElement(t.ZP, null, o().createElement(Ke, {
						userIsAuthed: _
					}))), o().createElement(A.ZP, null), o().createElement(l.F0, null)))))))))
				},
				Ye = () => {
					(0, m.render)(o().createElement(He, null), document.getElementById("react-app"))
				}
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Jz: function() {
					return y
				},
				OK: function() {
					return c
				},
				_Y: function() {
					return l
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
					return t
				}
			});

			function e(i) {
				for (var E = 1; E < arguments.length; E++) {
					var g = arguments[E] != null ? Object(arguments[E]) : {},
						h = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(g).filter(function(C) {
						return Object.getOwnPropertyDescriptor(g, C).enumerable
					})), h.forEach(function(C) {
						o(i, C, g[C])
					})
				}
				return i
			}

			function o(i, E, g) {
				return E = s(E), E in i ? Object.defineProperty(i, E, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[E] = g, i
			}

			function s(i) {
				var E = m(i, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function m(i, E) {
				if (typeof i != "object" || i === null) return i;
				var g = i[Symbol.toPrimitive];
				if (g !== void 0) {
					var h = g.call(i, E || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(i)
			}
			let c = function(i) {
					return i.Sending = "sending", i.Success = "success", i.Failed = "failed", i.Latent = "latent", i
				}({}),
				f = function(i) {
					return i[i.Success = 200] = "Success", i[i.BadRequest = 400] = "BadRequest", i
				}({});
			const l = {
					status: c.Latent,
					statusCode: void 0
				},
				p = {
					status: c.Sending
				},
				y = {
					status: c.Success,
					statusCode: f.Success
				},
				t = {
					status: c.Failed,
					statusCode: f.BadRequest
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
					}, l),
					installsList: e({
						value: []
					}, l),
					categoriesList: e({
						value: []
					}, l),
					recommendedAppsList: e({
						value: []
					}, l),
					metadata: e({
						value: null
					}, l),
					app: e({
						value: null
					}, l),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, l)
				},
				u = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Ux: function() {
					return r
				},
				cz: function() {
					return u
				},
				im: function() {
					return l
				},
				pG: function() {
					return a
				},
				t$: function() {
					return i
				}
			});
			var e = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(g) {
				for (var h = 1; h < arguments.length; h++) {
					var C = arguments[h] != null ? Object(arguments[h]) : {},
						L = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(C).filter(function(H) {
						return Object.getOwnPropertyDescriptor(C, H).enumerable
					})), L.forEach(function(H) {
						s(g, H, C[H])
					})
				}
				return g
			}

			function s(g, h, C) {
				return h = m(h), h in g ? Object.defineProperty(g, h, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[h] = C, g
			}

			function m(g) {
				var h = c(g, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function c(g, h) {
				if (typeof g != "object" || g === null) return g;
				var C = g[Symbol.toPrimitive];
				if (C !== void 0) {
					var L = C.call(g, h || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(g)
			}
			const f = g => g.test(window.location.hostname),
				l = () => f(e.j9),
				p = () => f(MARKETPLACE_LOCAL_URL_REGEXP),
				y = (g, h) => {
					const C = random(0, 1) ? -1 : 1;
					return g.points === h.points || g.points >= APP_POINTS_THRESHOLD && h.points >= APP_POINTS_THRESHOLD ? C : g.points < 0 || h.points < 0 || g.points >= APP_POINTS_THRESHOLD || h.points >= APP_POINTS_THRESHOLD ? h.points - g.points : C
				},
				t = (g, h, C) => {
					const L = get(h, C),
						H = get(g, C);
					return L && !isEqual(L, H)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (g, h) => h.map(C => g.find(L => L.id === C)),
						addAppVersionInfo: (g, h) => o({}, h, {
							currentVersion: h.versions.find(C => C.tag === g.versionTag),
							latestVersion: h.versions.find(C => C.tag === h.infoVersion)
						}),
						addCurrentSiteInstall: (g, h) => o({}, h, {
							currentSiteInstall: g.find(C => C.appId === h.id)
						})
					}
				},
				a = (g, h, C) => o({}, g, h, C ? {
					value: C
				} : {}),
				u = g => g.map(h => h.status),
				i = g => g.apps ? g.apps : g,
				E = g => {
					let h = ["by-cloudflare"];
					return g.filter(C => !h.includes(C.id) && C.visible).sort((C, L) => C.points < L.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(G, v, n) {
			"use strict";
			n.r(v), n.d(v, {
				categorySlugTranslationKey: function() {
					return c
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return m
				},
				translations: function() {
					return s
				}
			});
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: s,
				namespace: m
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

			function c(f) {
				const l = f.replace(/-/g, "_");
				return Object.keys(o).includes(l) ? l : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				L: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/url-join/lib/url-join.js"),
				o = n.n(e),
				s = n("../../../../node_modules/lodash-es/defaults.js"),
				m = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function c(u) {
				for (var i = 1; i < arguments.length; i++) {
					var E = arguments[i] != null ? Object(arguments[i]) : {},
						g = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(E).filter(function(h) {
						return Object.getOwnPropertyDescriptor(E, h).enumerable
					})), g.forEach(function(h) {
						p(u, h, E[h])
					})
				}
				return u
			}

			function f(u, i) {
				if (u == null) return {};
				var E = l(u, i),
					g, h;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(u);
					for (h = 0; h < C.length; h++) g = C[h], !(i.indexOf(g) >= 0) && (!Object.prototype.propertyIsEnumerable.call(u, g) || (E[g] = u[g]))
				}
				return E
			}

			function l(u, i) {
				if (u == null) return {};
				var E = {},
					g = Object.keys(u),
					h, C;
				for (C = 0; C < g.length; C++) h = g[C], !(i.indexOf(h) >= 0) && (E[h] = u[h]);
				return E
			}

			function p(u, i, E) {
				return i = y(i), i in u ? Object.defineProperty(u, i, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[i] = E, u
			}

			function y(u) {
				var i = t(u, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function t(u, i) {
				if (typeof u != "object" || u === null) return u;
				var E = u[Symbol.toPrimitive];
				if (E !== void 0) {
					var g = E.call(u, i || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(u)
			}
			class r {
				constructor(i) {
					p(this, "token", void 0), p(this, "options", void 0), p(this, "setAuthHeader", E => {
						this.token = E
					}), this.token = "", this.options = (0, s.Z)(i, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(i = "GET", E, g = {}) {
					const {
						body: h
					} = g, C = f(g, ["body"]);
					return fetch(o()(this.options.baseUrl, E), c({
						method: i
					}, C, h ? {
						body: JSON.stringify(h)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(c({
							Accept: "application/json, text/plain, */*"
						}, g.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(i, E = {}) {
					const g = await this.request("GET", i, E);
					return this.parseJSONResponse(g)
				}
				async postJSON(i, E = {}) {
					const g = await this.request("POST", i, c({}, E, {
						headers: c({}, E.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(g)
				}
				parseJSONResponse(i) {
					return i.json()
				}
			}
			p(r, "defaults", {
				baseUrl: (0, m.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const a = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				JX: function() {
					return y
				},
				Jb: function() {
					return r
				},
				RX: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/lodash-es/upperFirst.js"),
				o = n("../../../../node_modules/lodash-es/isEmpty.js"),
				s = n("../node_modules/query-string/query-string.js"),
				m = n.n(s),
				c = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				f = n("../react/pages/apps/marketplace/requests/Requester.ts"),
				l = n("../react/pages/apps/marketplace/libraries/resource.ts");

			function* p(i, E, g, h) {
				const C = (0, e.Z)(E),
					[L, H, N] = [`get${C}Sending`, `get${C}Success`, `get${C}Failed`];
				try {
					yield(0, c.gz)(i[L]());
					const P = yield(0, c.RE)(a, g);
					let J = P;
					if (J.error) {
						yield(0, c.gz)(i[N]());
						return
					}
					return h && (J = yield h(P)), yield(0, c.gz)(i[H](J)), J
				} catch {
					yield(0, c.gz)(i[N]())
				}
			}

			function* y(i, E, g, h) {
				const C = (0, e.Z)(E),
					L = `get${C}Sending`,
					H = `get${C}Success`,
					N = `get${C}Failed`;
				try {
					yield(0, c.gz)(i[L]());
					const P = yield(0, c.RE)(u, {
						url: g,
						data: h
					});
					return yield(0, c.gz)(i[H](P)), P
				} catch {
					yield(0, c.gz)(i[N]())
				}
			}
			const t = i => (0, o.Z)(i) ? "" : `?${s.stringify(i)}`,
				r = {
					app: new l.c({
						name: "app",
						url: (i, E) => `apps/${i}${t(E)}`
					}),
					apps: new l.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new l.c({
							name: "installs",
							url: i => `sites/${i}/installs`
						}),
						delete: new l.c({
							name: "installs",
							url: i => `installs/${i}`
						})
					},
					categories: new l.c({
						name: "categories",
						url: (i = {}) => "categories" + t(i)
					}),
					metadata: {
						get: new l.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						}),
						post: new l.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						})
					},
					ratings: {
						default: new l.c({
							name: "ratings",
							url: (i = {}) => "ratings" + t(i)
						}),
						delete: new l.c({
							name: "ratings",
							url: i => `ratings/${i}`
						})
					},
					recommendedApps: new l.c({
						name: "recommendedApps",
						url: (i = {}) => "apps/recommend" + t(i)
					}),
					developedApps: new l.c({
						name: "developedApps",
						url: i => `user/${i}/apps`
					})
				},
				a = async i => f.L.fetchJSON(i), u = async i => {
					const {
						url: E,
						data: g
					} = i;
					return f.L.postJSON(E, {
						body: g
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Nw: function() {
					return p
				},
				U4: function() {
					return l
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
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), u.forEach(function(i) {
						s(t, i, a[i])
					})
				}
				return t
			}

			function s(t, r, a) {
				return r = m(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function m(t) {
				var r = c(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function c(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var u = a.call(t, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let f = function(t) {
					return t.SetCurrentUser = "user.set", t
				}({}),
				l = function(t) {
					return t.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", t.SetZone = "MARKETPLACE/AUTH/SET_ZONE", t.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", t.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", t.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", t.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", t.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", t.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", t.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", t.ResetState = "MARKETPLACE/AUTH/RESET_STATE", t
				}({});
			const p = {
				resetState: () => ({
					type: l.ResetState
				}),
				initSaga: t => ({
					type: l.InitSaga,
					zoneId: t
				}),
				setZone: t => ({
					type: l.SetZone,
					zone: t
				}),
				setToken: t => ({
					type: l.SetToken,
					token: t
				}),
				clearToken: () => ({
					type: l.ClearToken
				}),
				setTokenValid: t => ({
					type: l.SetTokenValid,
					isTokenValid: t
				}),
				getCurrentUserSaga: () => ({
					type: l.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: l.CurrentUserSending
				}),
				getCurrentUserSuccess: t => ({
					type: l.CurrentUserSuccess,
					user: t
				}),
				getCurrentUserFailed: () => ({
					type: l.CurrentUserFailed
				})
			};

			function y(t = e.fD, r) {
				switch (r.type) {
					case l.ResetState:
						return o({}, e.fD);
					case l.CurrentUserSending:
						return o({}, t);
					case l.CurrentUserSuccess:
						const {
							user: a
						} = r;
						return o({}, t, {
							user: a
						});
					case l.CurrentUserFailed:
						return o({}, t);
					case l.SetZone:
						const {
							zone: u
						} = r;
						return o({}, t, {
							zone: u
						});
					case l.SetToken:
						const {
							token: i
						} = r;
						return o({}, t, {
							token: i
						});
					case l.ClearToken:
						return o({}, t, {
							token: null
						});
					case l.SetTokenValid:
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
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Nw: function() {
					return y
				},
				U4: function() {
					return p
				},
				ZP: function() {
					return t
				},
				dg: function() {
					return l
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var u = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(u).filter(function(E) {
						return Object.getOwnPropertyDescriptor(u, E).enumerable
					})), i.forEach(function(E) {
						m(r, E, u[E])
					})
				}
				return r
			}

			function m(r, a, u) {
				return a = c(a), a in r ? Object.defineProperty(r, a, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = u, r
			}

			function c(r) {
				var a = f(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(r, a) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var i = u.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let l = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				p = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const y = {
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
				getAppInfoAssetsSaga: (r, a, u) => ({
					type: p.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: a,
					version: u
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
				getRecommendedAppsSaga: (r, a, u) => ({
					type: p.GetRecommendedAppsSaga,
					appsList: r,
					installsList: a,
					metadata: u
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

			function t(r = e.w6, a) {
				switch (a.type) {
					case p.ResetState:
						return s({}, e.w6);
					case p.ZoneChangedSaga:
						return s({}, r, {
							installsList: s({}, e.w6.installsList),
							recommendedAppsList: s({}, e.w6.recommendedAppsList),
							metadata: s({}, e.w6.metadata)
						});
					case p.GetAppsSending:
						return s({}, r, {
							appsList: s({}, (0, o.pG)(r.appsList, e.h_))
						});
					case p.GetAppsSuccess:
						return s({}, r, {
							appsList: s({}, (0, o.pG)(r.appsList, e.Jz, a.appsList))
						});
					case p.GetAppsFailed:
						return s({}, r, {
							appsList: s({}, (0, o.pG)(r.appsList, e.yc))
						});
					case p.GetInstallsSending:
						return s({}, r, {
							installsList: s({}, (0, o.pG)(r.installsList, e.h_))
						});
					case p.GetInstallsSuccess:
						return s({}, r, {
							installsList: s({}, (0, o.pG)(r.installsList, e.Jz, a.installsList))
						});
					case p.GetInstallsFailed:
						return s({}, r, {
							installsList: s({}, (0, o.pG)(r.installsList, e.yc))
						});
					case p.GetCategoriesSending:
						return s({}, r, {
							categoriesList: s({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case p.GetCategoriesSuccess:
						return s({}, r, {
							categoriesList: s({}, (0, o.pG)(r.categoriesList, e.Jz, a.categoriesList))
						});
					case p.GetCategoriesFailed:
						return s({}, r, {
							categoriesList: s({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case p.GetMetadataSending:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.GetMetadataSuccess:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case p.GetMetadataFailed:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.PostMetadataSending:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.PostMetadataSuccess:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case p.PostMetadataFailed:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.GetRecommendedAppsSending:
						return s({}, r, {
							recommendedAppsList: s({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case p.GetRecommendedAppsSuccess:
						return s({}, r, {
							recommendedAppsList: s({}, (0, o.pG)(r.recommendedAppsList, e.Jz, a.recommendedAppsList))
						});
					case p.GetRecommendedAppsFailed:
						return s({}, r, {
							recommendedAppsList: s({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case p.GetAppSending:
						return s({}, r, {
							app: s({}, (0, o.pG)(r.app, e.h_))
						});
					case p.GetAppSuccess:
						return s({}, r, {
							app: s({}, (0, o.pG)(r.app, e.Jz, a.app))
						});
					case p.GetAppFailed:
						return s({}, r, {
							app: s({}, (0, o.pG)(r.app, e.yc))
						});
					case p.ClearApp:
						return s({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case p.SetUpdatableInstalls:
						return s({}, r, {
							updatableInstallsList: a.updatableInstallsList
						});
					case p.GetDevelopedAppsSending:
						return s({}, r, {
							developedApps: s({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case p.GetDevelopedAppsSuccess:
						return s({}, r, {
							developedApps: s({}, (0, o.pG)(r.developedApps, e.Jz, a.developedApps))
						});
					case p.GetDevelopedAppsFailed:
						return s({}, r, {
							developedApps: s({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/caching/tracking.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o
			}({})
		},
		"../react/pages/dns/dns-records/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
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
		"../react/pages/email/types.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
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
			let e = function(c) {
				return c.ROOT = "root", c.DSTADDRS_CARD = "dstaddrs_card", c.RULES_CARD = "rules_card", c.CATCHALL_CARD = "catchall_card", c.SETTINGS_PAGE = "settings_page", c.WORKERS_PAGE = "workers_page", c
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
			let s = function(c) {
				return c[c.Verified = 0] = "Verified", c[c.Pending = 1] = "Pending", c[c.Missing = 2] = "Missing", c[c.WorkerNotFound = 3] = "WorkerNotFound", c[c.Unknown = 4] = "Unknown", c[c.Loading = 5] = "Loading", c
			}({});
			const m = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/firewall/api-shield/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Fj: function() {
					return p
				},
				kq: function() {
					return l
				},
				xr: function() {
					return y
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function s(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), u.forEach(function(i) {
						m(t, i, a[i])
					})
				}
				return t
			}

			function m(t, r, a) {
				return r = c(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function c(t) {
				var r = f(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function f(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var u = a.call(t, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let l = function(t) {
				return t.MAIN = "API Shield", t.SCHEMA_VALIDATION = "Schema Validation", t.JWT_VALIDATION = "JWT Validation", t.SEQUENCE_ANALYTICS = "Sequence Analytics", t.SEQUENCE_RULES = "Sequence Rules", t.ENDPOINT_MANAGEMENT = "Endpoint Management", t.API_DISCOVERY = "API Discovery", t.SETTINGS = "Settings", t
			}({});
			const p = {
					[l.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[l.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[l.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[l.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[l.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[l.JWT_VALIDATION]: {
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
					[l.SETTINGS]: {
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
					product: a = l.MAIN,
					productName: u,
					additionalData: i
				}) => {
					o().sendEvent(t, s({
						category: r,
						product: a,
						productName: u
					}, i || {}))
				}
		},
		"../react/pages/firewall/bots/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
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
			let e = function(m) {
					return m.INITIAL_FETCH_SCORES = "view bots scores distribution", m.FETCH_CONFIGURATION = "view bots configuration page", m.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", m.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", m.UPDATE_SETTINGS = "update bots settings", m.DELETE_RULE = "delete bots ruleset", m.UPDATE_RULE = "update bots ruleset", m.FETCH_RULES = "view bots ruleset", m.CONFIGURE_BOT_MANAGEMENT = "view bots management", m.WAF_RULES_REDIRECT = "redirect waf rules", m
				}({}),
				o = function(m) {
					return m.PROVIDED_TEMPLATE = "provided template link in detection card", m.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", m.USE_TEMPLATE = "use template", m.CREATE_FIREWALL_RULE = "create firewall rule", m.WAF_RULES = "waf rules", m
				}({});
			const s = "user journey"
		},
		"../react/pages/firewall/page-shield/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
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
		"../react/pages/firewall/rulesets/tracking.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
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
					return m
				}
			});
			let e = function(c) {
				return c.DELETE = "delete", c.CREATE = "create", c.GET = "get", c.UPDATE = "update", c
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
				s = (c, f) => {
					var l;
					return `${f} ${(l=o[c])!==null&&l!==void 0?l:c} rule${f===e.GET?"s":""}`
				},
				m = () => {
					var c, f;
					return (c = Object.keys(o)) === null || c === void 0 || (f = c.map(l => {
						var p;
						return (p = Object.values(e)) === null || p === void 0 ? void 0 : p.map(y => s(l, y))
					})) === null || f === void 0 ? void 0 : f.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				AS: function() {
					return f
				},
				IK: function() {
					return r
				},
				Ki: function() {
					return s
				},
				Lz: function() {
					return a
				},
				nT: function() {
					return p
				},
				o4: function() {
					return u
				},
				oY: function() {
					return m
				},
				qH: function() {
					return t
				},
				x3: function() {
					return l
				}
			});
			var e = n("../react/pages/firewall/analytics/labels.ts"),
				o = n("../react/common/constants/analytics/botScoreSrc.ts");
			const s = ["block", "challenge", "jschallenge", "managedChallenge"],
				m = ["miss", "expired", "bypass", "dynamic"],
				c = i => Object.fromEntries(Object.entries(i).map(([E, g]) => [g, E])),
				f = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				l = c(f),
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
				y = c(p),
				t = c(o.EG);
			let r = function(i) {
				return i.SAMPLED = "sampled", i.RAW = "raw", i
			}({});
			const a = "security-analytics-log-explorer";
			let u = function(i) {
				return i.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', i.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', i.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', i.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', i.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', i
			}({})
		},
		"../react/pages/home/alerts/config.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				jk: function() {
					return h
				},
				w8: function() {
					return C
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				s = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				m = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function c(L) {
				for (var H = 1; H < arguments.length; H++) {
					var N = arguments[H] != null ? Object(arguments[H]) : {},
						P = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(N).filter(function(J) {
						return Object.getOwnPropertyDescriptor(N, J).enumerable
					})), P.forEach(function(J) {
						f(L, J, N[J])
					})
				}
				return L
			}

			function f(L, H, N) {
				return H = l(H), H in L ? Object.defineProperty(L, H, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[H] = N, L
			}

			function l(L) {
				var H = p(L, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function p(L, H) {
				if (typeof L != "object" || L === null) return L;
				var N = L[Symbol.toPrimitive];
				if (N !== void 0) {
					var P = N.call(L, H || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(L)
			}
			const y = "Notifications",
				t = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				u = (0, e.BC)`${a}/destinations`,
				i = (0, e.BC)`${a}/create`,
				E = (0, e.BC)`${i}/${"alertType"}`,
				g = (0, e.BC)`${a}/edit/${"alertId"}`,
				h = c({
					account: r,
					alerts: a,
					destinations: u,
					createAlert: i,
					createAlertWithSelection: E,
					editAlert: g
				}, o._j, s._j),
				C = c({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, m.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				_j: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				s = (0, e.BC)`${o}/pagerduty/connect`,
				m = (0, e.BC)`${o}/pagerduty/register`,
				c = (0, e.BC)`${o}/pagerduty`,
				f = {
					pagerDutyConnect: s,
					pagerDutyRegister: m,
					pagerDutyList: c
				};
			var l = null
		},
		"../react/pages/home/alerts/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_LIST = "create list", o.DELETE_LIST = "delete list", o.ADD_LIST_ITEM = "add list item", o.DELETE_LIST_ITEM = "delete list item", o
			}({})
		},
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				AA: function() {
					return oe
				},
				AN: function() {
					return ge
				},
				AY: function() {
					return Ve
				},
				Am: function() {
					return L
				},
				B2: function() {
					return b
				},
				BB: function() {
					return Z
				},
				BF: function() {
					return Ee
				},
				BQ: function() {
					return X
				},
				E8: function() {
					return Ze
				},
				Fl: function() {
					return ht
				},
				Fu: function() {
					return W
				},
				G_: function() {
					return h
				},
				Gc: function() {
					return $e
				},
				Hc: function() {
					return Lt
				},
				IO: function() {
					return re
				},
				JK: function() {
					return Ie
				},
				K: function() {
					return J
				},
				LI: function() {
					return F
				},
				LX: function() {
					return ce
				},
				L_: function() {
					return Me
				},
				Ly: function() {
					return At
				},
				M9: function() {
					return Ke
				},
				MR: function() {
					return x
				},
				Mj: function() {
					return w
				},
				NB: function() {
					return It
				},
				Or: function() {
					return K
				},
				P5: function() {
					return Ot
				},
				PE: function() {
					return me
				},
				Pd: function() {
					return St
				},
				Pk: function() {
					return Oe
				},
				Pp: function() {
					return De
				},
				Q1: function() {
					return z
				},
				Qr: function() {
					return de
				},
				Qv: function() {
					return Te
				},
				Rp: function() {
					return Pt
				},
				Sh: function() {
					return Ct
				},
				TZ: function() {
					return ne
				},
				Tg: function() {
					return Se
				},
				Tp: function() {
					return fe
				},
				Uy: function() {
					return vt
				},
				Vw: function() {
					return S
				},
				W3: function() {
					return T
				},
				WR: function() {
					return ue
				},
				WX: function() {
					return ye
				},
				XF: function() {
					return ve
				},
				Xc: function() {
					return Ge
				},
				ZB: function() {
					return V
				},
				Zs: function() {
					return Re
				},
				_f: function() {
					return _e
				},
				_k: function() {
					return we
				},
				b4: function() {
					return Ce
				},
				c2: function() {
					return B
				},
				cE: function() {
					return Tt
				},
				dh: function() {
					return Ne
				},
				fE: function() {
					return xe
				},
				g7: function() {
					return ie
				},
				hO: function() {
					return Ue
				},
				hV: function() {
					return Dt
				},
				hk: function() {
					return H
				},
				hr: function() {
					return le
				},
				it: function() {
					return Be
				},
				jG: function() {
					return Pe
				},
				jN: function() {
					return ze
				},
				m8: function() {
					return M
				},
				nm: function() {
					return bt
				},
				oW: function() {
					return Qe
				},
				oc: function() {
					return C
				},
				pH: function() {
					return I
				},
				pi: function() {
					return te
				},
				rI: function() {
					return A
				},
				s7: function() {
					return He
				},
				sO: function() {
					return Le
				},
				sg: function() {
					return Je
				},
				tB: function() {
					return g
				},
				tN: function() {
					return $
				},
				vV: function() {
					return je
				},
				vc: function() {
					return ke
				}
			});
			var e = n("../../../../node_modules/lodash/lodash.js"),
				o = n.n(e),
				s = n("../../../../node_modules/moment/moment.js"),
				m = n.n(s),
				c = n("../../../common/util/types/src/api/domain.ts"),
				f = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				l = n("../react/utils/translator.tsx"),
				p = n("../react/utils/url.ts"),
				y = n("../react/pages/home/domain-registration/config.ts"),
				t = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = n("../react/pages/home/domain-registration/types.ts");

			function a(d) {
				for (var O = 1; O < arguments.length; O++) {
					var ae = arguments[O] != null ? Object(arguments[O]) : {},
						pe = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(ae).filter(function(be) {
						return Object.getOwnPropertyDescriptor(ae, be).enumerable
					})), pe.forEach(function(be) {
						u(d, be, ae[be])
					})
				}
				return d
			}

			function u(d, O, ae) {
				return O = i(O), O in d ? Object.defineProperty(d, O, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[O] = ae, d
			}

			function i(d) {
				var O = E(d, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function E(d, O) {
				if (typeof d != "object" || d === null) return d;
				var ae = d[Symbol.toPrimitive];
				if (ae !== void 0) {
					var pe = ae.call(d, O || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(d)
			}

			function g(d) {
				return d.filter(O => O.isSelected).reduce((O, {
					transferFee: ae,
					isZoneEntitlementPresent: pe
				}) => pe ? O : O + ae, 0)
			}

			function h(d) {
				return (d / 100).toLocaleString("en-US", {
					style: "currency",
					currency: "USD"
				})
			}

			function C(d) {
				return d.filter(O => O.registrar.toLowerCase() === "godaddy")
			}
			const L = "MMM D, YYYY";

			function H(d, O, ae, pe) {
				var be, We, qe, et, tt, nt, ot, rt, at, it, st, ct, lt, ut, dt, pt, mt, gt, ft, Et, yt;
				const wt = (((be = O.fees) === null || be === void 0 ? void 0 : be.registration_fee) !== r.Xp && ((We = O.fees) === null || We === void 0 ? void 0 : We.registration_fee) || 0) * 100,
					kt = (((qe = O.fees) === null || qe === void 0 ? void 0 : qe.transfer_fee) !== r.Xp && ((et = O.fees) === null || et === void 0 ? void 0 : et.transfer_fee) || 0) * 100,
					Rt = (((tt = O.fees) === null || tt === void 0 ? void 0 : tt.registration_fee) !== r.Xp && ((nt = O.fees) === null || nt === void 0 ? void 0 : nt.registration_fee) || 0) * 100,
					Mt = (((ot = O.fees) === null || ot === void 0 ? void 0 : ot.renewal_fee) !== r.Xp && ((rt = O.fees) === null || rt === void 0 ? void 0 : rt.renewal_fee) || 0) * 100,
					Nt = (((at = O.fees) === null || at === void 0 ? void 0 : at.redemption_fee) !== r.Xp && ((it = O.fees) === null || it === void 0 ? void 0 : it.redemption_fee) || 0) * 100,
					Ae = d[O.name];
				return {
					name: O.name,
					zone: Ae,
					entitlements: ae,
					registryCheck: pe,
					nameservers: O.name_servers,
					isAvailable: O.available,
					lastKnownStatus: O.last_known_status,
					authCode: O.auth_code,
					isEnterpriseZone: (Ae == null || (st = Ae.plan) === null || st === void 0 ? void 0 : st.legacy_id) === "enterprise",
					isActiveZone: (Ae == null ? void 0 : Ae.status) === "active",
					corResponsesPending: O.cor_responses_pending,
					isCorLocked: O.cor_locked,
					corLockedUntil: O.cor_locked_until ? m()(O.cor_locked_until).format(L) : null,
					isFullZone: (Ae == null ? void 0 : Ae.type) == r.xd.Full,
					isLocked: O.locked,
					registrar: O.current_registrar || y.JM,
					zoneId: Ae == null ? void 0 : Ae.id,
					currentExpiration: m()(O.expires_at).format(L),
					newExpiration: m()(O.expires_at).add(1, "year").format(L),
					wholesaleCost: wt,
					transferFee: kt,
					registrationFee: Rt,
					renewalFee: Mt,
					redemptionFee: Nt,
					lastEntitledAt: O.last_entitled_at ? new Date(O.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(ae) && !!ae.find(_t => _t.id === y.g5 && _t.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: O.transfer_in && P(O.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: O.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: O.transfer_in,
					transferOut: O.transfer_out,
					autoRenew: O.auto_renew === !0,
					lastTransferredAt: O.last_transferred_at,
					createdAt: O.created_at,
					paymentExpiresAt: m()(O.payment_expires_at).isValid() ? m()(O.payment_expires_at) : m()(O.expires_at).isValid() ? m()(O.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (ct = O.contacts) === null || ct === void 0 || (lt = ct.administrator) === null || lt === void 0 ? void 0 : lt.id,
						[r.l2.Billing]: (ut = O.contacts) === null || ut === void 0 || (dt = ut.billing) === null || dt === void 0 ? void 0 : dt.id,
						[r.l2.Registrant]: (pt = O.contacts) === null || pt === void 0 || (mt = pt.registrant) === null || mt === void 0 ? void 0 : mt.id,
						[r.l2.Technical]: (gt = O.contacts) === null || gt === void 0 || (ft = gt.technical) === null || ft === void 0 ? void 0 : ft.id
					},
					landing: O.landing,
					whois: O.whois,
					emailVerified: O.email_verified,
					materialChanges: Q(O.material_changes),
					corChanges: O.cor_changes ? Z(Object.assign(a({}, N), O.cor_changes)) : {},
					registryStatuses: O.registry_statuses ? O.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Et = O.domain_protection_services) === null || Et === void 0 ? void 0 : Et.status
					},
					deletion: {
						isDeletable: O == null || (yt = O.deletion) === null || yt === void 0 ? void 0 : yt.is_deletable
					},
					premiumType: O == null ? void 0 : O.premium_type,
					fees: O == null ? void 0 : O.fees
				}
			}
			const N = {
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

			function P(d) {
				switch (d.enter_auth_code) {
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

			function J(d) {
				let O = d.extensions;
				(O == null ? void 0 : O.application_purpose) && (O == null ? void 0 : O.nexus_category) && (d.extensions = {
					nexusCategory: O.nexus_category,
					applicationPurpose: O.application_purpose
				});
				let ae = a({}, typeof d.id == "string" ? {
					id: d.id
				} : {}, {
					first_name: d.firstName,
					organization: d.organization,
					address: d.address1,
					city: d.city,
					state: d.state || "N/A",
					zip: d.zip,
					country: d.country,
					phone: d.phone,
					email: d.email,
					fax: "",
					last_name: d.lastName,
					address2: d.address2,
					email_verified: d.emailVerified
				}, d.extensions ? {
					extensions: {
						nexus_category: d.extensions.nexusCategory,
						application_purpose: d.extensions.applicationPurpose
					}
				} : {});
				return Fe(ae)
			}

			function Q(d) {
				let O = [];
				const ae = {
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
				for (const pe in d) {
					const be = d[pe],
						We = ae[be];
					O.push(We)
				}
				return O
			}
			const Y = d => {
				if (!d) return null;
				let O = d;
				return d.includes("C31") && (O = "C31"), d.includes("C32") && (O = "C32"), O
			};

			function Z(d) {
				return a({}, typeof d.id == "string" ? {
					id: d.id
				} : {}, {
					firstName: d.first_name,
					organization: d.organization,
					address1: d.address,
					city: d.city,
					state: d.state,
					zip: d.zip,
					country: d.country,
					phone: d.phone.trim(),
					email: d.email.trim(),
					lastName: d.last_name,
					address2: d.address2,
					emailVerified: d.email_verified
				}, d.extensions ? {
					extensions: {
						nexusCategory: Y(d.extensions.nexus_category),
						applicationPurpose: d.extensions.application_purpose
					}
				} : {})
			}

			function V(d = {}) {
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
						}, d.zone && d.zone.plan || {}),
						type: r.xd.Full
					}, d.zone || {}),
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
					transferConditions: a({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, d.transferConditions || {}),
					transferIn: a({
						unlock_domain: r.lW.UNKNOWN,
						disable_privacy: r.lW.UNKNOWN,
						enter_auth_code: r.lW.UNKNOWN,
						approve_transfer: r.lW.UNKNOWN,
						accept_foa: r.lW.UNKNOWN,
						can_cancel_transfer: !1
					}, d.transferIn || {}),
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
				return Object.assign(O, d)
			}

			function z(d = {}) {
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
				}, d)
			}

			function W(d) {
				const O = y.Py.concat(y.ui).reduce((ae, pe) => a({}, ae, {
					[pe]: []
				}), {});
				return d.forEach(ae => {
					let pe = R(ae.registrar);
					pe in O || (pe = y.ui), Je(ae.name) && (pe = "uk"), O[pe].push(ae)
				}), Object.keys(O).sort((ae, pe) => ae.localeCompare(pe)).map(ae => ({
					registrar: ae,
					domains: O[ae]
				})).filter(ae => ae.domains.length > 0)
			}

			function R(d) {
				return d == null ? void 0 : d.toLowerCase().replace(/\s|,|\./g, "")
			}

			function S(d) {
				if (!d || !d.registrar) return "unknown";
				if (Je(d.name)) return "uk";
				const O = R(d.registrar);
				return O in y.gM ? O : "unknown"
			}
			const q = [];

			function j(d) {
				return q.some(O => d.endsWith("." + O))
			}

			function se(d) {
				return !d.isEnterpriseZone || !Array.isArray(d.entitlements) ? !1 : !!d.entitlements.find(({
					id: O,
					allocation: ae
				}) => O === y.g5 && ae.value === !0)
			}

			function te(d) {
				var O;
				const ae = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let pe = !1,
					be = null;
				return (O = d.registryStatuses) === null || O === void 0 || O.some(We => {
					ae.includes(We) && (be = We, pe = !0)
				}), [pe, be]
			}

			function M(d, O = !1) {
				if (!d) return [!1, t.keys.cannot_transfer_default];
				if (d.zone.status !== "active") return [!1, t.keys.cannot_transfer_zone_not_active];
				if (!d.isFullZone && !se(d)) return [!1, t.keys.cannot_transfer_zone_not_eligible];
				if (d.registrar === "Cloudflare") return [!1, t.keys.cannot_transfer_domain_on_cf];
				if (d.isAvailable) return [!1, t.keys.cannot_transfer_domain_available];
				if (!d.transferConditions) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (!O && vt(d == null ? void 0 : d.premiumType)) return [!1, t.keys.cannot_transfer_domain_premium];
				if (I(d)) return [!1, t.keys.cannot_transfer_domain_transfer_in_progress];
				let ae;
				for (ae in d.transferConditions)
					if (ae !== "not_premium" && !d.transferConditions[ae]) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (j(d.name)) return [!1, t.keys.cannot_transfer_domain_tld_not_supported];
				const [pe, be] = te(d);
				return pe && be ? [!1, t.keys.cannot_transfer_domain_registry_status[be]] : [!0, ""]
			}

			function I(d) {
				var O, ae;
				return !!d.transferIn && !((O = d.transferConditions) === null || O === void 0 ? void 0 : O.not_started) && !!(Je(d.name) || ((ae = d.registryStatuses) === null || ae === void 0 ? void 0 : ae.includes(r.rj.PENDING_TRANSFER)))
			}

			function k(d) {
				return !!d.registrar && !!d.currentExpiration
			}

			function b(d, O = !1) {
				const [ae] = M(d, O);
				return k(d) ? he(d) ? r.M5.InProgressOrOnCF : ae ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function B(d) {
				return d.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(d.transferIn.enter_auth_code) || !1
			}

			function x(d) {
				return d.registrar === "Cloudflare"
			}

			function A(d) {
				return !!(d == null ? void 0 : d.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function w(d) {
				return !!(d == null ? void 0 : d.includes(r.rj.PENDING_TRANSFER))
			}
			const D = "Invalid date";

			function K(d) {
				return d.newExpiration === D ? "Unavailable" : d.newExpiration
			}

			function ne(d) {
				return d.currentExpiration === D ? "Unavailable" : d.currentExpiration
			}

			function oe(d) {
				return d.substring(d.indexOf("."))
			}

			function le(d) {
				return d.map(O => O.name).map(O => oe(O)).filter((O, ae, pe) => !pe.includes(O, ae + 1))
			}

			function Ce(d) {
				if (y.no) return [!0, ""];
				if (!x(d)) return [!1, r.ok.NotOnCF];
				if (d.isCorLocked) return [!1, d.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (d.lastTransferredAt) {
					const O = m()(d.lastTransferredAt),
						ae = m().duration(m()().diff(O)).as("days"),
						pe = Je(d.name);
					if (ae < (pe ? 1 : 60)) return [!1, pe ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (d.createdAt) {
					const O = m()(d.createdAt);
					if (m().duration(m()().diff(O)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function ye(d) {
				return !!(y.Bc || d.transferOut)
			}

			function he(d) {
				return ie(d) || x(d)
			}

			function $(d) {
				return !ie(d) && x(d)
			}

			function ie(d) {
				return !d || d.lastKnownStatus === "pendingTransfer" || d.lastKnownStatus === "transferFOAPending" || !x(d) && d.transferConditions && !d.transferConditions.not_started || !1
			}

			function me(d) {
				return !(j(d.name) || d.transferConditions && !d.transferConditions.supported_tld)
			}

			function Te(d) {
				return (d == null ? void 0 : d.includes("/")) ? !0 : d.split("").some(O => O.charCodeAt(0) > 123)
			}

			function Oe(d) {
				switch (d) {
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

			function ke(d) {
				return m()(d.paymentExpiresAt).isBefore(m()())
			}

			function ze(d) {
				return d.transferIn && d.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function Ie(d) {
				const O = ["CU", "KP", "IR", "SY"];
				return d.filter(ae => !O.includes(ae.code))
			}

			function Se(d) {
				if (!!d) return `${d.charAt(0).toUpperCase()}${d.slice(1)}${d.charAt(d.length-1)==="."?"":"."}`
			}

			function Fe(d) {
				const O = {};
				for (const [ae, pe] of Object.entries(d)) {
					if (pe && typeof pe == "string") {
						Object.assign(O, {
							[ae]: pe.trim()
						});
						continue
					}
					Object.assign(O, {
						[ae]: pe
					})
				}
				return O
			}

			function Re(d) {
				return m()(d).add(40, "days")
			}

			function Me(d) {
				const O = d.paymentExpiresAt || d.payment_expires_at,
					ae = Re(O);
				return m()().isBetween(O, ae)
			}

			function xe(d) {
				var O;
				return !(d == null ? void 0 : d.registryStatuses) || !Array.isArray(d == null ? void 0 : d.registryStatuses) && !(0, e.isString)(d == null ? void 0 : d.registryStatuses) ? !1 : (O = d.registryStatuses) === null || O === void 0 ? void 0 : O.includes(r.rj.REDEMPTION_PERIOD)
			}

			function Ne(d) {
				var O;
				return !(d == null ? void 0 : d.registryStatuses) || !Array.isArray(d == null ? void 0 : d.registryStatuses) && !(0, e.isString)(d == null ? void 0 : d.registryStatuses) ? !1 : (O = d.registryStatuses) === null || O === void 0 ? void 0 : O.includes(r.rj.PENDING_DELETE)
			}

			function De(d) {
				return [".us"].includes(d)
			}

			function Be(d) {
				return [".us"].includes(d)
			}

			function Ue(d) {
				switch (d) {
					case ".us":
						return ee();
					default:
						return []
				}
			}

			function T(d) {
				switch (d) {
					case ".us":
						return U;
					default:
						return {}
				}
			}
			const U = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function ee() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([d, O]) => ({
						value: d,
						label: O
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([d, O]) => ({
						value: d,
						label: O
					}))
				}]
			}

			function ce(d, O, ae) {
				return O[O.length - 1][ae] === d[ae]
			}

			function de(d) {
				return Boolean(Object.keys(d).length === 0)
			}

			function Ee(d) {
				return m()().add(d, "year").format(L)
			}

			function _e({
				accountName: d
			}) {
				var O;
				const ae = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((O = d.toLowerCase().match(ae)) === null || O === void 0 ? void 0 : O[0]) || ""
			}

			function je(d) {
				return !!d.match(f.default.email)
			}

			function Pe(d) {
				return d === "Registration banned zone error"
			}

			function Ge(d) {
				return d == null ? void 0 : d.startsWith("Quote error")
			}

			function Ke(d) {
				return d == null ? void 0 : d.startsWith("Invalid acknowledgement")
			}

			function Le(d) {
				return d === (0, l.ZP)(t.keys.registration_checkout_trademark_notice_error_message)
			}

			function we(d) {
				return d === "DNS conflict"
			}

			function fe(d) {
				return d === c.W7.PENDING_UPDATE
			}

			function $e(d) {
				return d ? Object.values(c.wR).filter(O => O !== c.wR.OFFBOARDED).includes(d) : !1
			}

			function He(d) {
				return d ? [c.wR.LOCKED, c.wR.ONBOARDED, c.wR.ONBOARDING_INITIATED, c.wR.PENDING_REGISTRY_LOCK, c.wR.PENDING_REGISTRY_UNLOCK, c.wR.PENDING_UNLOCK_APPROVAL].includes(d) : !1
			}

			function Ye(d) {
				return d ? c.wR.UNLOCKED === d : !1
			}

			function _(d) {
				return d ? c.wR.LOCKED === d : !1
			}

			function F(d) {
				return d ? c.wR.PENDING_REGISTRY_LOCK === d : !1
			}

			function X(d) {
				return d ? [c.wR.PENDING_REGISTRY_UNLOCK, c.wR.PENDING_UNLOCK_APPROVAL].includes(d) : !1
			}

			function re(d) {
				var O;
				return !1
			}

			function ue(d) {
				var O;
				return !1
			}

			function ge(d) {
				var O;
				return !1
			}

			function ve(d) {
				var O;
				return !1
			}

			function Ze(d) {
				var O;
				return !1
			}

			function Qe(d) {
				return Object.keys(c.wR).find(O => c.wR[O].toLowerCase() === d.toLowerCase())
			}

			function Ve(d) {
				var O;
				const ae = (O = Qe(d)) === null || O === void 0 ? void 0 : O.toLowerCase();
				return ae ? t.keys.protection_status[ae] : t.keys.protection_status.unknown
			}

			function Xe(d) {
				return ["com", "net"].includes(d)
			}

			function ht(d) {
				const O = (0, p.pu)(d);
				return Xe(O) ? c.wR.PENDING_REGISTRY_LOCK : c.wR.LOCKED
			}

			function Ct(d) {
				return (0, p.pu)(d) === "co" ? 5 : 10
			}

			function bt(d, O) {
				return O ? 1 : (0, p.pu)(d) === "co" ? 5 : (0, p.pu)(d) === "org" ? 1 : 10
			}

			function Je(d) {
				return (0, p.pu)(d) === "uk"
			}

			function Tt(d) {
				return (0, p.pu)(d) === "us"
			}

			function Pt(d) {
				return m()(d).isValid()
			}

			function At(d) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(d)
			}

			function Ot(d) {
				return !!(d == null ? void 0 : d.id)
			}

			function It(d) {
				return d ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(d) : !1
			}

			function St(d) {
				return d ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(d) : !1
			}

			function Dt(d) {
				var O;
				return (d == null ? void 0 : d.lastKnownStatus) ? (O = d.lastKnownStatus) === null || O === void 0 ? void 0 : O.includes("deletionIrredeemable") : !1
			}

			function vt(d) {
				switch (d) {
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

			function Lt(d) {
				if (!d || !d.message) return r.OJ.DEFAULT;
				const {
					message: O
				} = d;
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
		},
		"../react/pages/home/domain-registration/config.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Bc: function() {
					return y
				},
				Hv: function() {
					return q
				},
				JM: function() {
					return s
				},
				Py: function() {
					return f
				},
				WK: function() {
					return r
				},
				g5: function() {
					return a
				},
				gM: function() {
					return c
				},
				gf: function() {
					return p
				},
				jk: function() {
					return S
				},
				no: function() {
					return t
				},
				uY: function() {
					return l
				},
				ui: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../flags.js");
			const s = "Unknown",
				m = "unknown",
				c = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				f = Object.keys(c),
				l = !0,
				p = (0, o.J8)("registrar_mock_data") || !1,
				y = (0, o.J8)("registrar_mock_transfer_out") || !1,
				t = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				a = "cf_registrar.enabled",
				u = "@abcABC1234567890123456",
				i = (0, e.BC)`/${"accountId"}`,
				E = (0, e.BC)`${i}/add-site`,
				g = (0, e.BC)`${i}/domains`,
				h = (0, e.BC)`${g}/${"zoneName"}`,
				C = (0, e.BC)`${h}/configuration`,
				L = (0, e.BC)`${h}/contacts`,
				H = (0, e.BC)`${g}/pricing`,
				N = (0, e.BC)`${g}/protection`,
				P = (0, e.BC)`${g}/register`,
				J = (0, e.BC)`${P}/checkout`,
				Q = (0, e.BC)`${P}/success`,
				Y = (0, e.BC)`${g}/tlds`,
				Z = (0, e.BC)`${g}/transfer`,
				V = (0, e.BC)`${g}/transfer/${"zoneName"}`,
				z = (0, e.BC)`/registrar/accounts/verify_email`,
				W = (0, e.BC)`/registrar/domains/verify_email`,
				R = (0, e.BC)`${g}/verify-email`,
				S = {
					addSite: E,
					domains: g,
					domainsDomain: h,
					domainsDomainConfiguration: C,
					domainsDomainContacts: L,
					domainsPricing: H,
					domainsProtection: N,
					domainsRegister: P,
					domainsRegisterCheckout: J,
					domainsRegisterSuccess: Q,
					domainsTlds: Y,
					domainsTransfer: Z,
					domainsTransferZone: V,
					registrarAccountsVerifyEmail: z,
					registrarDomainsVerifyEmail: W,
					verifyEmail: R
				},
				q = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				J: function() {
					return r
				},
				U: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				s = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = n.n(s),
				c = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function f(a) {
				for (var u = 1; u < arguments.length; u++) {
					var i = arguments[u] != null ? Object(arguments[u]) : {},
						E = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(i).filter(function(g) {
						return Object.getOwnPropertyDescriptor(i, g).enumerable
					})), E.forEach(function(g) {
						l(a, g, i[g])
					})
				}
				return a
			}

			function l(a, u, i) {
				return u = p(u), u in a ? Object.defineProperty(a, u, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[u] = i, a
			}

			function p(a) {
				var u = y(a, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function y(a, u) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var E = i.call(a, u || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(a)
			}
			let t = function(a) {
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a
			}({});

			function r(a, u, i) {
				if (!(u == null ? void 0 : u.name)) return null;
				m().sendEvent(a, f({
					domain: {
						name: u.name,
						premium: (0, c.Uy)(u == null ? void 0 : u.premiumType),
						paymentExpiresAt: o()(u == null ? void 0 : u.paymentExpiresAt).format()
					},
					category: "registrar"
				}, i))
			}
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				KO: function() {
					return l
				},
				L9: function() {
					return t
				},
				N3: function() {
					return y
				},
				zE: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var u = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(u).filter(function(E) {
						return Object.getOwnPropertyDescriptor(u, E).enumerable
					})), i.forEach(function(E) {
						m(r, E, u[E])
					})
				}
				return r
			}

			function m(r, a, u) {
				return a = c(a), a in r ? Object.defineProperty(r, a, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = u, r
			}

			function c(r) {
				var a = f(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(r, a) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var i = u.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let l = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r
				}({}),
				p = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				y = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const t = (r, a = {}) => {
				o().sendEvent(r, s({}, a, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/magic/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				GF: function() {
					return a
				},
				H3: function() {
					return l
				},
				H8: function() {
					return c
				},
				J: function() {
					return i
				},
				Nz: function() {
					return p
				},
				UQ: function() {
					return g
				},
				Up: function() {
					return m
				},
				W8: function() {
					return y
				},
				Ws: function() {
					return h
				},
				Xg: function() {
					return r
				},
				_j: function() {
					return s
				},
				a4: function() {
					return u
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
				m = () => [{
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
				c = C => [{
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
				l = C => [{
					value: "unidirectional",
					label: C("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: C("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				p = "magic-transit",
				y = "magic-wan",
				t = "gre_tunnel",
				r = "ipsec_tunnel",
				a = 64,
				u = 1476,
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
				h = C => [{
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
		"../react/pages/magic/network-monitoring/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
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
				s = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				VZ: function() {
					return m
				},
				lC: function() {
					return s
				},
				r8: function() {
					return o
				},
				uB: function() {
					return c
				}
			});
			var e = n("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				s = "user journey",
				m = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				c = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				gb: function() {
					return t
				},
				iP: function() {
					return Q
				},
				xL: function() {
					return C
				},
				rD: function() {
					return Z
				},
				oT: function() {
					return i
				},
				i2: function() {
					return V
				},
				x1: function() {
					return f
				},
				lW: function() {
					return p
				},
				UA: function() {
					return P
				},
				K5: function() {
					return a
				},
				Ii: function() {
					return H
				},
				PJ: function() {
					return Y
				},
				bK: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				c = n("../../../../node_modules/@cloudflare/elements/es/index.js");
			const f = () => o().createElement(l, null, o().createElement("svg", {
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
				l = (0, s.createComponent)(({
					theme: z
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
				p = () => o().createElement(y, null, o().createElement("svg", {
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
				y = (0, s.createComponent)(({
					theme: z
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
				t = () => o().createElement(r, null, o().createElement(c.Ei, {
					alt: "airplane",
					src: m,
					width: "85%"
				})),
				r = (0, s.createComponent)(({
					theme: z
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
				a = () => o().createElement(u, null, o().createElement("svg", {
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
				u = (0, s.createComponent)(({
					theme: z
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
				E = (0, s.createComponent)(({
					theme: z
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
				g = () => o().createElement(h, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				h = (0, s.createComponent)(({
					theme: z
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
				C = () => o().createElement(L, null, o().createElement("svg", {
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
				L = (0, s.createComponent)(({
					theme: z
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
				H = () => o().createElement(N, null, o().createElement("svg", {
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
				N = (0, s.createComponent)(({
					theme: z
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
				P = () => o().createElement(J, null, o().createElement("svg", {
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
				J = (0, s.createComponent)(({
					theme: z
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
				Q = () => o().createElement("svg", {
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
				Y = () => o().createElement("svg", {
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
				Z = () => o().createElement("svg", {
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
				V = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				A2: function() {
					return l
				},
				He: function() {
					return c
				},
				N$: function() {
					return f
				},
				Qq: function() {
					return s
				},
				ST: function() {
					return m
				},
				wM: function() {
					return o
				}
			});
			var e = n("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				s = "login-apple-jwt",
				m = "cf-test",
				c = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				f = p => [{
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
				l = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/pages/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				A: function() {
					return g
				},
				C1: function() {
					return y
				},
				Dp: function() {
					return Z
				},
				HD: function() {
					return L
				},
				IK: function() {
					return c
				},
				L7: function() {
					return s
				},
				Li: function() {
					return E
				},
				Ni: function() {
					return J
				},
				OG: function() {
					return S
				},
				QF: function() {
					return W
				},
				QV: function() {
					return P
				},
				Sx: function() {
					return H
				},
				Ub: function() {
					return z
				},
				X3: function() {
					return r
				},
				aP: function() {
					return l
				},
				eO: function() {
					return a
				},
				fH: function() {
					return i
				},
				fQ: function() {
					return h
				},
				fR: function() {
					return e
				},
				hE: function() {
					return V
				},
				iS: function() {
					return C
				},
				ku: function() {
					return Y
				},
				nY: function() {
					return N
				},
				w3: function() {
					return m
				},
				wJ: function() {
					return p
				},
				wp: function() {
					return u
				},
				yu: function() {
					return t
				},
				zG: function() {
					return Q
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-pages",
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
				m = "Allow Members - Cloudflare Pages",
				c = 58,
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
				l = "production",
				p = 2e3,
				y = 100,
				t = 350,
				r = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				u = 10,
				i = "_headers",
				E = "_redirects",
				g = "_routes.json",
				h = "_worker.js",
				C = "do-a-barrel-roll",
				L = [i, E, g, h],
				H = 1024 * 1024 * 25,
				N = 1e3,
				P = {
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
				J = 1e5,
				Q = 75e3,
				Y = "workers",
				Z = "cloudflare_pages_build_caching",
				V = 2;
			let z = function(q) {
				return q[q.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", q[q.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", q[q.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", q[q.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", q[q.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", q[q.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", q
			}({});
			const W = 1,
				R = 2,
				S = 2
		},
		"../react/pages/pages/routes.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Hv: function() {
					return s
				},
				_j: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
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
				m = c => `${c.subdomain}.pages.dev`
		},
		"../react/pages/pipelines/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				KO: function() {
					return l
				},
				L9: function() {
					return y
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function s(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), u.forEach(function(i) {
						m(t, i, a[i])
					})
				}
				return t
			}

			function m(t, r, a) {
				return r = c(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function c(t) {
				var r = f(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function f(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var u = a.call(t, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let l = function(t) {
					return t.LIST_PIPELINES = "list pipelines", t.CREATE_PIPELINE = "create pipeline", t.VIEW_PIPELINE = "view pipeline details", t.DELETE_PIPELINE = "delete pipeline", t.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", t.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", t.CLICK_QUICK_LINK = "click pipeline quick link", t
				}({}),
				p = function(t) {
					return t[t.success = 0] = "success", t[t.failure = 1] = "failure", t
				}({});
			const y = (t, r = {}) => {
				o().sendEvent(t, s({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Hv: function() {
					return s
				},
				Jg: function() {
					return f
				},
				_j: function() {
					return o
				},
				pZ: function() {
					return l
				},
				vF: function() {
					return c
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
				s = {
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
				m = t => {
					const r = "r2.cloudflarestorage.com";
					switch (t) {
						case "default":
							return r;
						case "eu":
							return `eu.${r}`;
						case "fedramp":
							return `fedramp.${r}`
					}
				},
				c = (t, r) => {
					const a = m(r);
					return `https://${t}.${a}`
				},
				f = (t, r, a) => `${c(t,r)}/${a}`,
				l = () => "r2.dev",
				p = t => {
					const r = l();
					return `https://${t}.${r}`
				},
				y = (t, r) => `${p(t)}/${r}`
		},
		"../react/pages/security-center/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				R: function() {
					return e
				},
				v: function() {
					return o
				}
			});
			let e = function(s) {
				return s.LOAD_SCAN_INFO = "load url scan information", s.INITIATE_URL_SCAN = "initiate url scan", s
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
		"../react/pages/spectrum/tracking.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o
			}({})
		},
		"../react/pages/traffic/argo/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o
			}({})
		},
		"../react/pages/traffic/load-balancing/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE = "create waiting room", o.UPDATE = "update waiting room", o.EVENTS = "view waiting rooms events", o.ANALYTICS = "view waiting room analytics", o.GENERATE_PREVIEW = "generate waiting room preview link", o
			}({})
		},
		"../react/pages/welcome/routes.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				d: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				default: (0, e.BC)`/${"accountId"}/`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`,
				websites: (0, e.BC)`/${"accountId"}/websites`
			}
		},
		"../react/pages/zoneless-workers/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				$2: function() {
					return N
				},
				CI: function() {
					return L
				},
				IS: function() {
					return l
				},
				L7: function() {
					return c
				},
				Oj: function() {
					return a
				},
				QV: function() {
					return u
				},
				X$: function() {
					return h
				},
				X6: function() {
					return y
				},
				fE: function() {
					return p
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

			function e(P) {
				for (var J = 1; J < arguments.length; J++) {
					var Q = arguments[J] != null ? Object(arguments[J]) : {},
						Y = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(Q).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(Q, Z).enumerable
					})), Y.forEach(function(Z) {
						o(P, Z, Q[Z])
					})
				}
				return P
			}

			function o(P, J, Q) {
				return J = s(J), J in P ? Object.defineProperty(P, J, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[J] = Q, P
			}

			function s(P) {
				var J = m(P, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function m(P, J) {
				if (typeof P != "object" || P === null) return P;
				var Q = P[Symbol.toPrimitive];
				if (Q !== void 0) {
					var Y = Q.call(P, J || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)(P)
			}
			const c = {
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
						workersAssets: "https://developers.cloudflare.com/workers"
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
				l = "40rem",
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
				u = {
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
				h = ["bundled", "unbound", "standard"],
				C = null,
				L = {
					bandaWorkersCI: "banda-workers-ui",
					workersAssets: "workers-assets"
				};
			let H = function(P) {
				return P[P.NONE = 0] = "NONE", P[P.MISS = 1] = "MISS", P[P.EXPIRED = 2] = "EXPIRED", P[P.UPDATING = 3] = "UPDATING", P[P.STALE = 4] = "STALE", P[P.HIT = 5] = "HIT", P[P.IGNORED = 6] = "IGNORED", P[P.BYPASS = 7] = "BYPASS", P[P.REVALIDATED = 8] = "REVALIDATED", P[P.DYNAMIC = 9] = "DYNAMIC", P[P.STREAM_HIT = 10] = "STREAM_HIT", P[P.DEFERRED = 11] = "DEFERRED", P
			}({});
			const N = [H.HIT, H.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Hv: function() {
					return l
				},
				L: function() {
					return s
				},
				Q9: function() {
					return m
				},
				_j: function() {
					return c
				},
				ky: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = p => `${p}.workers.dev`,
				s = (p, y, t) => `${t?`${t}.`:""}${p}.${o(y)}`,
				m = (p, y, t) => `https://${s(p,y,t)}`,
				c = {
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
				l = {
					accountMtlsCertificates: (0, e.BC)`/accounts/${"accountId"}/mtls_certificates`,
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/workers/account-settings`,
					builds: {
						build: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}`,
						cancelBuild: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/cancel`,
						latestBuildsByWorkers: (0, e.BC)`/accounts/${"accountId"}/builds/builds/latest`,
						buildLogs: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/logs`,
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				MN: function() {
					return s
				},
				Yg: function() {
					return c
				},
				i$: function() {
					return m
				},
				l3: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const s = async ([l, p]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: l,
					variables: p
				})
			})).body, m = async (...l) => (await e.get(...l)).body, c = l => async (p, y) => {
				const t = await fetch(p, y).then(r => r.json());
				return l.assertDecode(t)
			}, f = async (...l) => (await m(...l)).result;
			v.ZP = {
				fetcher: l => Array.isArray(l) ? f(...l) : f(l)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(G, v) {
				v()
			})(this, function() {
				"use strict";

				function G() {
					var n = !0,
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

					function m(g) {
						return !!(g && g !== document && g.nodeName !== "HTML" && g.nodeName !== "BODY" && "classList" in g && "contains" in g.classList)
					}

					function c(g) {
						var h = g.type,
							C = g.tagName;
						return !!(C == "INPUT" && s[h] && !g.readOnly || C == "TEXTAREA" && !g.readOnly || g.isContentEditable)
					}

					function f(g) {
						g.getAttribute("is-focus-visible") !== "" && g.setAttribute("is-focus-visible", "")
					}

					function l(g) {
						g.getAttribute("is-focus-visible") === "" && g.removeAttribute("is-focus-visible")
					}

					function p(g) {
						m(document.activeElement) && f(document.activeElement), n = !0
					}

					function y(g) {
						n = !1
					}

					function t(g) {
						!m(g.target) || (n || c(g.target)) && f(g.target)
					}

					function r(g) {
						!m(g.target) || g.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), l(g.target))
					}

					function a(g) {
						document.visibilityState == "hidden" && (e && (n = !0), u())
					}

					function u() {
						document.addEventListener("mousemove", E), document.addEventListener("mousedown", E), document.addEventListener("mouseup", E), document.addEventListener("pointermove", E), document.addEventListener("pointerdown", E), document.addEventListener("pointerup", E), document.addEventListener("touchmove", E), document.addEventListener("touchstart", E), document.addEventListener("touchend", E)
					}

					function i() {
						document.removeEventListener("mousemove", E), document.removeEventListener("mousedown", E), document.removeEventListener("mouseup", E), document.removeEventListener("pointermove", E), document.removeEventListener("pointerdown", E), document.removeEventListener("pointerup", E), document.removeEventListener("touchmove", E), document.removeEventListener("touchstart", E), document.removeEventListener("touchend", E)
					}

					function E(g) {
						g.target.nodeName.toLowerCase() !== "html" && (n = !1, i())
					}
					document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", y, !0), document.addEventListener("pointerdown", y, !0), document.addEventListener("touchstart", y, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", a, !0), u(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function v(n) {
					var e;

					function o() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && v(G)
			})
		},
		"../react/utils/bootstrap.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				$8: function() {
					return o
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return m
				},
				gm: function() {
					return s
				}
			});
			const e = () => {
					var c, f, l;
					return (c = window) === null || c === void 0 || (f = c.bootstrap) === null || f === void 0 || (l = f.data) === null || l === void 0 ? void 0 : l.security_token
				},
				o = () => {
					var c, f, l;
					return !!((c = n.g.bootstrap) === null || c === void 0 || (f = c.data) === null || f === void 0 || (l = f.user) === null || l === void 0 ? void 0 : l.id)
				},
				s = () => {
					var c, f;
					return !!((c = n.g.bootstrap) === null || c === void 0 || (f = c.data) === null || f === void 0 ? void 0 : f.is_kendo)
				},
				m = () => {
					var c, f, l, p;
					return (c = window) === null || c === void 0 || (f = c.bootstrap) === null || f === void 0 || (l = f.data) === null || l === void 0 || (p = l.user) === null || p === void 0 ? void 0 : p.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				O5: function() {
					return m
				},
				Xm: function() {
					return s
				},
				kT: function() {
					return l
				},
				wV: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var t;
					return ((t = window) === null || t === void 0 ? void 0 : t.OnetrustActiveGroups) || ""
				},
				s = () => (o() || "").indexOf("C0002") !== -1,
				m = () => (o() || "").indexOf("C0003") !== -1,
				c = () => (o() || "").indexOf("C0004") !== -1,
				f = () => (o() || "").indexOf("C0005") !== -1,
				l = t => {
					const r = ".cloudflare.com";
					document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				p = () => {
					var t;
					const r = (t = window.OneTrust) === null || t === void 0 ? void 0 : t.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				y = () => parse(document.cookie)
		},
		"../react/utils/history.ts": function(G, v, n) {
			"use strict";
			var e = n("../../../../node_modules/history/esm/history.js");
			const o = (0, e.lX)();
			v.Z = o
		},
		"../react/utils/i18n.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				AI: function() {
					return h
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
					return L
				},
				ly: function() {
					return p
				},
				th: function() {
					return c
				},
				ti: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				s = n("../../../common/intl/intl-types/src/index.ts"),
				m = n("../../../common/util/types/src/utils/index.ts");
			const c = "cf-sync-locale-with-cps",
				f = s.Q.en_US,
				l = "en_US",
				p = "cf-locale",
				y = J => (0, m.Yd)(s.Q).find(Q => s.Q[Q] === J) || l,
				t = [],
				r = [],
				a = [s.Q.de_DE, s.Q.en_US, s.Q.es_ES, s.Q.fr_FR, s.Q.it_IT, s.Q.pt_BR, s.Q.ko_KR, s.Q.ja_JP, s.Q.zh_CN, s.Q.zh_TW],
				u = [s.Q.de_DE, s.Q.en_US, s.Q.es_ES, s.Q.es_CL, s.Q.es_EC, s.Q.es_MX, s.Q.es_PE, s.Q.fr_FR, s.Q.it_IT, s.Q.ja_JP, s.Q.ko_KR, s.Q.pt_BR, s.Q.zh_CN, s.Q.zh_TW],
				i = {
					test: [...a, ...r, ...t],
					development: [...a, ...r, ...t],
					staging: [...a, ...r, ...t],
					production: [...a, ...r]
				},
				E = {
					test: [...u, ...r, ...t],
					development: [...u, ...r, ...t],
					staging: [...u, ...r, ...t],
					production: [...u, ...r]
				},
				g = (J, Q) => {
					const Y = s.Q[Q];
					return J ? i.production.includes(Y) : E.production.includes(Y)
				},
				h = J => Object.keys(s.Q).filter(Q => g(J, Q)),
				C = J => {
					const Q = s.Q[J];
					return r.includes(Q)
				},
				L = (J, Q) => J ? H[Q] : N[Q],
				H = {
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
				N = {
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
				P = o().locale();
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
			}), o().locale(P)
		},
		"../react/utils/translator.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				QT: function() {
					return u
				},
				Vb: function() {
					return l
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
					return a
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = n("../../../common/intl/intl-core/src/Translator.ts"),
				s = n("../../../common/intl/intl-react/src/index.ts"),
				m = n("../flags.js");
			const c = new o.Z({
				pseudoLoc: (0, m.J8)("is_pseudo_loc")
			});

			function f(i, ...E) {
				return c.t(i, ...E)
			}
			const l = c;

			function p(i, ...E) {
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
			const r = s.cC,
				a = s.oc,
				u = s.QT
		},
		"../react/utils/url.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Ct: function() {
					return H
				},
				Fl: function() {
					return b
				},
				KT: function() {
					return x
				},
				NF: function() {
					return E
				},
				Nw: function() {
					return C
				},
				Pd: function() {
					return h
				},
				Uh: function() {
					return M
				},
				Y_: function() {
					return i
				},
				e1: function() {
					return L
				},
				el: function() {
					return z
				},
				hW: function() {
					return R
				},
				pu: function() {
					return B
				},
				qR: function() {
					return V
				},
				td: function() {
					return g
				},
				uW: function() {
					return q
				}
			});
			var e = n("../node_modules/query-string/query-string.js"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				m = n("../react/pages/stream/routes.ts"),
				c = n("../react/pages/r2/routes.ts"),
				f = n("../react/pages/zoneless-workers/routes.ts"),
				l = n("../react/pages/pages/routes.ts");

			function p(A) {
				for (var w = 1; w < arguments.length; w++) {
					var D = arguments[w] != null ? Object(arguments[w]) : {},
						K = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && K.push.apply(K, Object.getOwnPropertySymbols(D).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(D, ne).enumerable
					})), K.forEach(function(ne) {
						y(A, ne, D[ne])
					})
				}
				return A
			}

			function y(A, w, D) {
				return w = t(w), w in A ? Object.defineProperty(A, w, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[w] = D, A
			}

			function t(A) {
				var w = r(A, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function r(A, w) {
				if (typeof A != "object" || A === null) return A;
				var D = A[Symbol.toPrimitive];
				if (D !== void 0) {
					var K = D.call(A, w || "default");
					if (typeof K != "object") return K;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(A)
			}
			const {
				endsWithSlash: a
			} = s.default, u = (A, w) => {
				const D = A.replace(a, "").split("/");
				return D.slice(0, 2).concat([w]).concat(D.slice(3)).join("/")
			}, i = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), E = A => `/${A.replace(a,"").replace(/^\//,"")}`, g = A => C("add-site", A), h = A => C("billing", A), C = (A, w) => w ? `/${w}${A?`/${A}`:""}` : `/?to=/:account/${A}`, L = () => {
				const A = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return A ? A[1] : null
			}, H = (A, w) => o().stringify(p({}, o().parse(A), w)), N = (A = "") => A.toString().replace(/([\/]{1,})$/, ""), P = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], J = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, Q = /^\/(\w{32,})(\/[^.]*)?/, Y = A => P.includes(A), Z = A => !Y(A), V = A => !Y(A) && Q.test(A), z = A => !Y(A) && J.test(A), W = A => J.exec(A), R = A => {
				if (z(A)) return A.split("/").filter(w => w.length > 0)[1]
			}, S = A => Q.exec(A), q = A => {
				if (V(A)) {
					const w = S(A);
					if (w) return w[1]
				}
			}, j = A => V(A) && A.split("/")[2] === "register-domain", se = A => j(A) ? A.split("/") : null, te = A => {
				if (z(A)) {
					const [, , , w, D, K, ne, oe] = A.split("/");
					return w === "traffic" && D === "load-balancing" && K === "pools" && ne === "edit" && oe
				}
			}, M = A => {
				const w = se(A);
				if (w) return w[3]
			}, I = (A, w) => {
				var D, K;
				return ((D = A.pattern.match(/\:/g)) !== null && D !== void 0 ? D : []).length - ((K = w.pattern.match(/\:/g)) !== null && K !== void 0 ? K : []).length
			}, k = [...Object.values(m.C), ...Object.values(c._j), ...Object.values(f._j), ...Object.values(l._j)].sort(I);

			function b(A) {
				if (!Z(A)) return A;
				for (const oe of k)
					if (oe.expression.test(A)) return oe.pattern;
				const w = se(A);
				if (w) {
					const [, , oe, , ...le] = w;
					return `/:accountId/${oe}/:domainName/${le.join("/")}`
				}
				if (te(A)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const K = W(A);
				if (K) {
					const [, , , , oe] = K;
					return `/:accountId/:zoneName${oe||""}`
				}
				const ne = S(A);
				if (ne) {
					const [, , oe] = ne;
					return `/:accountId${oe||""}`
				}
				return A
			}

			function B(A) {
				if (!!A) try {
					const D = A.split(".").pop();
					if (D && D.length > 0) return D
				} catch {}
			}

			function x(A, w = document.location.href) {
				try {
					const D = new URL(A),
						K = new URL(w);
					if (D.origin === K.origin) return `${D.pathname}${D.search}${D.hash}`
				} catch {}
			}
		},
		"../react/utils/zaraz.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = n("../utils/zaraz.ts")
		},
		"../utils/getDashVersion.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				p: function() {
					return s
				},
				t: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var m, c;
					return (m = window) === null || m === void 0 || (c = m.build) === null || c === void 0 ? void 0 : c.dashVersion
				},
				s = () => {
					var m;
					return ((0, e.parse)((m = document) === null || m === void 0 ? void 0 : m.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initGates.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				n: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				o = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				s = n("../react/app/providers/storeContainer.js"),
				m = n("../node_modules/uuid/dist/esm-browser/v4.js"),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const f = "ANON_USER_ID";

			function l() {
				var y, t, r, a;
				let u = (y = n.g) === null || y === void 0 || (t = y.bootstrap) === null || t === void 0 || (r = t.data) === null || r === void 0 || (a = r.user) === null || a === void 0 ? void 0 : a.id;
				if (!u) {
					let i = c.Z.get(f);
					if (!i) {
						let E = (0, m.Z)();
						c.Z.set(f, E), i = E
					}
					return i
				}
				return u
			}
			async function p() {
				const y = (0, s.bh)();
				y.dispatch((0, e.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await y.dispatch((0, o.UL)({
					userId: l()
				}))
			}
		},
		"../utils/initSparrow.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Wi: function() {
					return Ue
				},
				IM: function() {
					return Be
				},
				yV: function() {
					return Ne
				},
				Ug: function() {
					return xe
				},
				v_: function() {
					return De
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				s = n("../react/utils/bootstrap.ts"),
				m = n("../react/app/providers/storeContainer.js"),
				c = n("../react/common/selectors/languagePreferenceSelector.ts"),
				f = n("../flags.js"),
				l = n("../../../../node_modules/cookie/index.js"),
				p = n("../react/utils/url.ts"),
				y = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../../../../node_modules/lodash-es/memoize.js"),
				a = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				u = n("../utils/getDashVersion.ts"),
				i = n("../react/common/selectors/accountSelectors.ts");

			function E(T) {
				for (var U = 1; U < arguments.length; U++) {
					var ee = arguments[U] != null ? Object(arguments[U]) : {},
						ce = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && ce.push.apply(ce, Object.getOwnPropertySymbols(ee).filter(function(de) {
						return Object.getOwnPropertyDescriptor(ee, de).enumerable
					})), ce.forEach(function(de) {
						g(T, de, ee[de])
					})
				}
				return T
			}

			function g(T, U, ee) {
				return U = h(U), U in T ? Object.defineProperty(T, U, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[U] = ee, T
			}

			function h(T) {
				var U = C(T, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function C(T, U) {
				if (typeof T != "object" || T === null) return T;
				var ee = T[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ce = ee.call(T, U || "default");
					if (typeof ce != "object") return ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(T)
			}
			const L = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				H = (0, r.Z)(T => {
					try {
						return L.assertDecode((0, l.parse)(T))
					} catch (U) {
						return console.error(U), {}
					}
				}),
				N = T => (U, ee, ce) => {
					try {
						const Pe = window.location.pathname,
							Ge = (0, m.bh)().getState(),
							Ke = H(document.cookie),
							Le = E({
								page: (0, p.Fl)(ce.page || window.location.pathname),
								dashVersion: (0, u.t)()
							}, Ke);
						if (U === "identify") {
							var de, Ee;
							const we = {
								gates: (0, a.T2)(Ge) || {},
								country: (de = n.g) === null || de === void 0 || (Ee = de.bootstrap) === null || Ee === void 0 ? void 0 : Ee.ip_country
							};
							return T(U, ee, E({}, Le, we, ce))
						} else {
							const we = {
								accountId: (0, p.uW)(Pe),
								zoneName: (0, p.hW)(Pe),
								domainName: (0, p.Uh)(Pe)
							};
							if ((0, p.qR)(Pe)) {
								var _e;
								const fe = (0, i.D0)(Ge);
								we.isEntAccount = fe == null || (_e = fe.meta) === null || _e === void 0 ? void 0 : _e.has_enterprise_zones
							}
							if ((0, p.el)(Pe)) {
								var je;
								const fe = (0, y.nA)(Ge);
								we.zoneId = fe == null ? void 0 : fe.id, we.plan = fe == null || (je = fe.plan) === null || je === void 0 ? void 0 : je.legacy_id
							}
							return T(U, ee, E({}, Le, we, ce))
						}
					} catch (Pe) {
						return console.error(Pe), T(U, ee, ce)
					}
				},
				P = T => async (U, ee, ce) => {
					try {
						return await T(U, ee, ce)
					} catch (de) {
						if (console.error(de), !De()) throw de;
						return {
							status: "rejected",
							reason: de
						}
					}
				};
			var J = n("../react/common/middleware/sparrow/errors.ts"),
				Q = n("../react/pages/firewall/bots/tracking.ts"),
				Y = n("../react/pages/caching/tracking.tsx"),
				Z = n("../react/pages/magic/packet-captures/constants.ts"),
				V = n("../react/pages/firewall/page-shield/tracking.ts"),
				z = n("../react/pages/firewall/rulesets/tracking.tsx"),
				W = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				R = n("../react/pages/spectrum/tracking.tsx"),
				S = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				q = n("../react/pages/security-center/tracking.ts"),
				j = n("../react/pages/firewall/api-shield/tracking.ts"),
				se = n("../react/pages/home/configurations/lists/tracking.ts"),
				te = n("../react/pages/traffic/load-balancing/tracking.ts"),
				M = n("../react/pages/home/alerts/tracking.ts"),
				I = n("../react/pages/dns/dns-records/tracking.ts"),
				k = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				b = n("../react/pages/traffic/argo/tracking.ts"),
				B = n("../react/pages/magic/network-monitoring/constants.ts"),
				x = n("../react/pages/firewall/security-analytics/logs/constants.ts"),
				A = n("../react/pages/magic/overview/tracking.ts"),
				w = n("../react/pages/hyperdrive/tracking.ts"),
				D = n("../react/pages/pipelines/tracking.ts"),
				K = n("../react/pages/home/domain-registration/tracking.ts"),
				ne = n("../react/pages/zoneless-workers/constants.ts"),
				oe = n("../react/pages/pages/constants.ts"),
				le = n("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx");
			const ye = ((T, U, ...ee) => t.eg.union([t.eg.literal(T), t.eg.literal(U), ...ee.map(ce => t.eg.literal(ce))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on edit snippet", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "Explore demo button click", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "Request trial button click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", ne.QV.clickedDownloadAnalytics, ne.QV.clickedPrintAnalytics, ne.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", oe.QV.toggledPagesSmartPlacement, oe.QV.downloadDemoProject, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", Q.N3.INITIAL_FETCH_SCORES, Q.N3.FETCH_CONFIGURATION, Q.N3.INITIAL_FETCH_TIME_SERIES, Q.N3.INITIAL_FETCH_ATTRIBUTES, Q.N3.UPDATE_SETTINGS, Q.N3.DELETE_RULE, Q.N3.UPDATE_RULE, Q.N3.FETCH_RULES, Q.N3.CONFIGURE_BOT_MANAGEMENT, Q.N3.WAF_RULES_REDIRECT, S.F.TOGGLE_TCP_PROTECTION, S.F.GET_TCP_PROTECTION_PREFIXES, S.F.CREATE_TCP_PROTECTION_PREFIXES, S.F.CREATE_TCP_PROTECTION_PREFIX, S.F.UPDATE_TCP_PROTECTION_PREFIX, S.F.DELETE_TCP_PROTECTION_PREFIX, S.F.DELETE_TCP_PROTECTION_PREFIXES, S.F.GET_TCP_PROTECTION_ALLOWLIST, S.F.CREATE_TCP_PROTECTION_ALLOWLIST, S.F.UPDATE_TCP_PROTECTION_ALLOWLIST, S.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, S.F.DELETE_TCP_PROTECTION_ALLOWLIST, S.F.GET_SYN_PROTECTION_RULES, S.F.GET_SYN_PROTECTION_RULE, S.F.CREATE_SYN_PROTECTION_RULE, S.F.UPDATE_SYN_PROTECTION_RULE, S.F.DELETE_SYN_PROTECTION_RULE, S.F.GET_TCP_FLOW_PROTECTION_RULES, S.F.GET_TCP_FLOW_PROTECTION_RULE, S.F.CREATE_TCP_FLOW_PROTECTION_RULE, S.F.UPDATE_TCP_FLOW_PROTECTION_RULE, S.F.DELETE_TCP_FLOW_PROTECTION_RULE, S.F.GET_SYN_PROTECTION_FILTERS, S.F.GET_SYN_PROTECTION_FILTER, S.F.CREATE_SYN_PROTECTION_FILTER, S.F.UPDATE_SYN_PROTECTION_FILTER, S.F.DELETE_SYN_PROTECTION_FILTER, S.F.GET_TCP_FLOW_PROTECTION_FILTERS, S.F.GET_TCP_FLOW_PROTECTION_FILTER, S.F.CREATE_TCP_FLOW_PROTECTION_FILTER, S.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, S.F.DELETE_TCP_FLOW_PROTECTION_FILTER, S.F.GET_DNS_PROTECTION_RULES, S.F.GET_DNS_PROTECTION_RULE, S.F.CREATE_DNS_PROTECTION_RULE, S.F.UPDATE_DNS_PROTECTION_RULE, S.F.DELETE_DNS_PROTECTION_RULE, V.F.MANAGE_PAGE_SHIELD_POLICY, V.F.CONFIGURE_PAGE_SHIELD, V.F.VIEW_DETECTED_CONNECTIONS, V.F.VIEW_DETECTED_SCRIPTS, V.F.VIEW_PAGE_SHIELD_POLICIES, V.F.VIEW_PAGE_SHIELD_SETTINGS, se.y.CREATE_LIST, se.y.DELETE_LIST, se.y.ADD_LIST_ITEM, se.y.DELETE_LIST_ITEM, w.KO.PURCHASE_WORKERS_PAID, w.KO.LIST_CONFIGS, w.KO.CREATE_HYPERDRIVE_CONFIG, w.KO.VIEW_CONFIG_DETAILS, w.KO.UPDATE_CACHING_SETTINGS, w.KO.DELETE_HYPERDRIVE_CONFIG, w.KO.CLICK_HYPERDRIVE_DOCUMENTATION, w.KO.CLICK_GET_STARTED_GUIDE, w.KO.CLICK_CONNECTIVITY_GUIDES, w.KO.CLICK_QUICK_LINK, R.N.CNAME, R.N.IP_ADDRESS, R.N.LB, R.N.UPDATE_CNAME, R.N.UPDATE_IP_ADDRESS, R.N.UPDATE_LB, R.N.DISABLE, Y.N.TIERED_CACHE, Y.N.CACHE_PURGE, Y.N.CACHE_ANALYTICS, ...(0, z.x4)(), W.N.CREATE, W.N.EVENTS, W.N.ANALYTICS, W.N.UPDATE, W.N.GENERATE_PREVIEW, q.R.INITIATE_URL_SCAN, q.R.LOAD_SCAN_INFO, q.v.EXPAND_INSIGHT_ROW, q.v.CLICK_RESOLVE_BUTTON, q.v.FOLLOW_RESOLVE_URL, q.v.MANAGE_INSIGHT, q.v.CLICK_SCAN_NOW, q.v.CLICK_EXPORT_INSIGHTS, q.v.BULK_ARCHIVE, j.Fj[j.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, j.Fj[j.kq.ENDPOINT_MANAGEMENT].detailedMetrics, j.Fj[j.kq.ENDPOINT_MANAGEMENT].createEndpoint, j.Fj[j.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, j.Fj[j.kq.ENDPOINT_MANAGEMENT].deployRouting, j.Fj[j.kq.ENDPOINT_MANAGEMENT].deleteRouting, j.Fj[j.kq.API_DISCOVERY].viewDiscoveredEndpoints, j.Fj[j.kq.API_DISCOVERY].saveDiscoveredEndpoint, j.Fj[j.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, j.Fj[j.kq.SCHEMA_VALIDATION].viewSchemasList, j.Fj[j.kq.SCHEMA_VALIDATION].uploadSchema, j.Fj[j.kq.SCHEMA_VALIDATION].viewSchemaAdoption, j.Fj[j.kq.SCHEMA_VALIDATION].downloadSchema, j.Fj[j.kq.SCHEMA_VALIDATION].deleteSchema, j.Fj[j.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, j.Fj[j.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, j.Fj[j.kq.SEQUENCE_ANALYTICS].viewSequencesPage, j.Fj[j.kq.JWT_VALIDATION].viewJWTRules, j.Fj[j.kq.JWT_VALIDATION].addJWTRule, j.Fj[j.kq.JWT_VALIDATION].editJWTRule, j.Fj[j.kq.JWT_VALIDATION].deleteJWTRule, j.Fj[j.kq.JWT_VALIDATION].reprioritizeJWTRule, j.Fj[j.kq.JWT_VALIDATION].viewJWTConfigs, j.Fj[j.kq.JWT_VALIDATION].addJWTConfig, j.Fj[j.kq.JWT_VALIDATION].editJWTConfig, j.Fj[j.kq.JWT_VALIDATION].deleteJWTConfig, j.Fj[j.kq.SETTINGS].redirectToFirewallRulesTemplate, j.Fj[j.kq.SETTINGS].redirectToPages, j.Fj[j.kq.SETTINGS].listSessionIdentifiers, j.Fj[j.kq.SETTINGS].listRequestsContainingSessionIdentifiers, j.Fj[j.kq.SETTINGS].addOrRemoveSessionIdentifiers, j.Fj[j.kq.SEQUENCE_RULES].listSequenceRules, j.Fj[j.kq.SEQUENCE_RULES].deleteSequenceRule, j.Fj[j.kq.SEQUENCE_RULES].reorderSequenceRule, j.Fj[j.kq.SEQUENCE_RULES].createSequenceRule, j.Fj[j.kq.SEQUENCE_RULES].editSequenceRule, te.Z.CREATE_AND_DEPLOY, te.Z.ANALYTICS, M.y.SECONDARY_DNS_NOTIFICATION_CREATE, M.y.SECONDARY_DNS_NOTIFICATION_UPDATE, M.y.SECONDARY_DNS_NOTIFICATION_DELETE, I.U.ZONE_TRANSFER_SUCCESS, I.U.DNS_RECORD_CREATE, I.U.DNS_RECORD_UPDATE, I.U.DNS_RECORD_DELETE, k.Y.PEER_DNS_CREATE, k.Y.PEER_DNS_UPDATE, k.Y.PEER_DNS_DELETE, k.Y.ZONE_TRANSFER_ENABLE, k.Y.ZONE_TRANSFER_DISABLE, b.V.ARGO_ENABLEMENT, b.V.ARGO_GEO_ANALYTICS_FETCH, b.V.ARGO_GLOBAL_ANALYTICS_FETCH, Z.X.VIEW_BUCKETS_LIST, Z.X.CREATE_BUCKET, Z.X.VALIDATE_BUCKET, Z.X.DELETE_BUCKET, Z.X.VIEW_CAPTURES_LIST, Z.X.CREATE_SIMPLE_CAPTURE, Z.X.CREATE_FULL_CAPTURE, Z.X.VIEW_FULL_CAPTURE, Z.X.DOWNLOAD_SIMPLE_CAPTURE, B.bK.VIEW_RULES, B.bK.CREATE_RULE, B.bK.UPDATE_RULE, B.bK.DELETE_RULE, B.bK.VIEW_CONFIGURATION, B.bK.CREATE_CONFIGURATION, B.bK.UPDATE_CONFIGURATION, B.bK.DELETE_CONFIGURATION, A.r8.VIEW_ALERTS, A.r8.VIEW_ALERTS_HISTORY, A.r8.MAGIC_OVERVIEW_ANALYTICS, A.VZ.CREATE_SITE, A.VZ.CREATE_TUNNEL, A.VZ.CREATE_STATIC_ROUTE, x.o4.CLICK_ADAPTIVE_SAMPLING, x.o4.CLICK_TO_LOG_EXPLORER_BANNER, x.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, x.o4.CLICK_SWITCH_TO_RAW_LOGS, x.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", K.U.REGISTER_DOMAIN_SEARCH_SUBMIT, K.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, K.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, K.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, K.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, K.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, K.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, K.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, K.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, K.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, K.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, K.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, K.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, K.U.REGISTER_DOMAIN_CHECKOUT_ERROR, K.U.TRANSFER_DOMAIN_CHANGE_STEP, K.U.RENEW_DOMAIN_COMPLETED, K.U.RESTORE_DOMAIN_INIT, K.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, K.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, K.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, K.U.RESTORE_DOMAIN_FAILURE, K.U.RESTORE_DOMAIN_COMPLETED, K.U.DOMAIN_DELETE_INIT, K.U.DOMAIN_DELETE_COMPLETED, K.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, K.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, K.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, K.U.DOMAIN_DELETE_CONFIRM_DELETE, K.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, K.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, K.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, K.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, K.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, D.KO.CLICK_GET_STARTED_GUIDE, D.KO.CLICK_PIPELINE_DOCUMENTATION, D.KO.CLICK_QUICK_LINK, D.KO.CREATE_PIPELINE, D.KO.DELETE_PIPELINE, D.KO.LIST_PIPELINES, D.KO.VIEW_PIPELINE, le.S.EXISTING_DOMAIN, le.S.NEW_DOMAIN, le.S.WAF_RULESET, le.S.WORKERS, le.S.PAGES, le.S.R2, le.S.ACCOUNT_MEMBERS),
				he = t.eg.exactStrict(t.eg.object({
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
					expressionType: t.eg.any.optional,
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
					registrar: t.eg.any.optional,
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
					trialPlan: t.eg.any.optional,
					trialStart: t.eg.any.optional,
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
				$ = (T, U) => {
					const [ee, ce] = ie(U);
					let de, Ee;
					return (0, t.nM)(ye.decode(T)) && (de = new J.Uh(T)), ce && ce.length > 0 && (Ee = new J.oV(T, ce)), [ee, de, Ee]
				},
				ie = T => {
					const U = he.decode(T);
					if ((0, t.nM)(U)) {
						const ee = U.left.map(({
							context: ce
						}) => ce.map(({
							key: de
						}) => de)).reduce((ce, de) => ce.concat(de), []).filter(ce => ce in T);
						return [me(ee, T), ee]
					}
					return [T, []]
				},
				me = (T, U) => Object.entries(U).reduce((ee, [ce, de]) => (T.includes(ce) || (ee[ce] = de), ee), {}),
				Te = T => (U, ee, ce) => {
					const [de, Ee, _e] = $(ee, ce);
					if (Ee) throw Ee;
					return _e && console.error(_e), T(U, ee, de)
				};
			var Oe = n("../react/utils/zaraz.ts");
			const ke = {
					identify: !0
				},
				ze = T => (U, ee, ce) => (ke[ee] || Oe.tg === null || Oe.tg === void 0 || Oe.tg.track(ee, ce), T(U, ee, ce));
			var Ie = n("../react/utils/cookiePreferences.ts");

			function Se(T) {
				for (var U = 1; U < arguments.length; U++) {
					var ee = arguments[U] != null ? Object(arguments[U]) : {},
						ce = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && ce.push.apply(ce, Object.getOwnPropertySymbols(ee).filter(function(de) {
						return Object.getOwnPropertyDescriptor(ee, de).enumerable
					})), ce.forEach(function(de) {
						Fe(T, de, ee[de])
					})
				}
				return T
			}

			function Fe(T, U, ee) {
				return U = Re(U), U in T ? Object.defineProperty(T, U, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[U] = ee, T
			}

			function Re(T) {
				var U = Me(T, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function Me(T, U) {
				if (typeof T != "object" || T === null) return T;
				var ee = T[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ce = ee.call(T, U || "default");
					if (typeof ce != "object") return ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(T)
			}
			const xe = T => {
					o().init(Se({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: De() && !(0, s.gm)() && Ue(),
						middlewares: [P, Te, N, ze]
					}, T))
				},
				Ne = () => {
					o().identify(Se({}, (0, e.getAttribution)(), {
						locale: (0, c.r)((0, m.bh)().getState()),
						isCloudflare: !!(0, f.Jd)()
					}))
				},
				De = () => !0,
				Be = () => {
					(0, Ie.kT)("sparrow_id")
				},
				Ue = () => (0, Ie.Xm)()
		},
		"../utils/initStyles.ts": function(G, v, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../react/app/providers/storeContainer.js");
			const s = "cfBaseStyles",
				m = document.head || document.getElementsByTagName("head")[0],
				c = l => {
					const p = [];
					for (let y in l.colors) {
						const t = l.colors[y];
						if (Array.isArray(t) && y !== "categorical")
							for (let r = 0; r < t.length; ++r) p.push(`--cf-${y}-${r}:${t[r]};`)
					}
					return p.join(`
`)
				},
				f = () => {
					const l = (0, e.Yc)(),
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
      background-color: ${l?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${l?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${l?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${l?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${l?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${l?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
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
      ${c(e.Rl)}
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
					let y = document.getElementById(s);
					y ? y.innerText = "" : (y = document.createElement("style"), y.id = s, m.appendChild(y)), y.appendChild(document.createTextNode(p)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(f), v.Z = f
		},
		"../utils/initTracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				k: function() {
					return l
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				s = n("../react/app/providers/storeContainer.js"),
				m = n("../react/common/selectors/userSelectors.ts"),
				c = n("../utils/initSparrow.ts"),
				f = n("../utils/zaraz.ts");
			const l = () => {
					const y = (0, m.PR)((0, s.bh)().getState());
					p(), (0, c.Ug)(), (0, f.bM)(), (y == null ? void 0 : y.id) && o().setUserId(y == null ? void 0 : y.id), (0, c.yV)(), !(0, c.Wi)() && (0, c.IM)(), y ? (0, f.yn)(y) : (0, f.Ro)()
				},
				p = () => {
					var y, t;
					(y = window) === null || y === void 0 || (t = y.OneTrust) === null || t === void 0 || t.OnConsentChanged(() => {
						const r = (0, m.PR)((0, s.bh)().getState());
						(0, c.Wi)() ? (o().setEnabled(!0), (r == null ? void 0 : r.id) ? (o().setUserId(r.id), (0, f.yn)(r)) : (0, f.Ro)(), (0, c.yV)()) : (o().setEnabled(!1), (0, c.IM)())
					})
				}
		},
		"../utils/sentry/initSentry.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				j: function() {
					return se
				}
			});
			var e = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				o = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				s = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				m = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				c = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				f = n("../react/utils/history.ts"),
				l = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				p = n("../react/utils/url.ts");
			const y = (0, l.Rf)();
			let t;

			function r(te) {
				return a(te, "react-router-v5")
			}

			function a(te, M) {
				return (I, k = !0, b = !0) => {
					k && y && y.location && (t = I({
						name: (0, p.Fl)(y.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": M
						}
					})), b && te.listen && te.listen((B, x) => {
						if (x && (x === "PUSH" || x === "POP")) {
							t && t.finish();
							const A = {
								"routing.instrumentation": M
							};
							t = I({
								name: (0, p.Fl)(B.pathname),
								op: "navigation",
								tags: A
							})
						}
					})
				}
			}
			var u = n("../react/app/providers/storeContainer.js"),
				i = n("../react/common/selectors/languagePreferenceSelector.ts"),
				E = n("../flags.js"),
				g = n("../utils/getDashVersion.ts"),
				h = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				C = n("../../../common/intl/intl-core/src/errors.ts"),
				L = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				H = n("../react/common/middleware/sparrow/errors.ts");
			const N = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				P = !0,
				J = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				Q = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function Y(te, M, I) {
				return M = Z(M), M in te ? Object.defineProperty(te, M, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : te[M] = I, te
			}

			function Z(te) {
				var M = V(te, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function V(te, M) {
				if (typeof te != "object" || te === null) return te;
				var I = te[Symbol.toPrimitive];
				if (I !== void 0) {
					var k = I.call(te, M || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(te)
			}
			class z {
				constructor() {
					Y(this, "name", z.id)
				}
				setupOnce() {
					n.g.console && (0, L.hl)(n.g.console, "error", M => (...I) => {
						const k = I.find(b => b instanceof Error);
						if (N && k) {
							let b, B = !0;
							if (k instanceof H.ez) {
								const x = k instanceof H.oV ? k.invalidProperties : void 0;
								b = {
									tags: {
										"sparrow.eventName": k.eventName
									},
									extra: {
										sparrow: {
											eventName: k.eventName,
											invalidProperties: x
										}
									},
									fingerprint: [k.name ? k.name : "SparrowValidationError"]
								}, B = !1
							} else if (k instanceof h.SparrowIdCookieError) b = {
								extra: {
									sparrowIdCookie: k.cookie
								},
								fingerprint: [k.name ? k.name : "SparrowIdCookieError"]
							};
							else if (k.name === "ChunkLoadError") {
								b = {
									fingerprint: [k.name]
								};
								try {
									b.tags = {
										chunkId: k.message.split(" ")[2],
										chunkUrl: k.request
									}
								} catch {}
							} else k instanceof C.YB && (b = {
								fingerprint: ["TranslatorError", k.translationKey]
							});
							B && m.Tb(k, b)
						}
						typeof M == "function" && M.apply(n.g.console, I)
					})
				}
			}
			Y(z, "id", "ConsoleErrorIntegration");
			var W = null,
				R = n("../utils/sentry/lastSentEventId.ts"),
				S = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				q = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const j = te => {
					const M = async I => {
						var k, b;
						const B = {
							envelope: I.body,
							url: te.url,
							isPreviewDeploy: (k = window) === null || k === void 0 || (b = k.build) === null || b === void 0 ? void 0 : b.isPreviewDeploy,
							release: (0, g.t)()
						};
						try {
							const x = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(B)
							});
							return {
								statusCode: x.status,
								headers: {
									"x-sentry-rate-limits": x.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": x.headers.get("Retry-After")
								}
							}
						} catch (x) {
							return console.log(x), (0, q.$2)(x)
						}
					};
					return S.q(te, M)
				},
				se = () => {
					if (N && P) {
						var te, M, I, k, b, B, x, A, w, D;
						let K = "production";
						((te = window) === null || te === void 0 || (M = te.build) === null || M === void 0 ? void 0 : M.isPreviewDeploy) && (K += "-preview"), o.S({
							dsn: N,
							release: (0, g.t)(),
							environment: K,
							ignoreErrors: Q,
							allowUrls: J,
							autoSessionTracking: !1,
							integrations: [new s.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new z, new c.jK.BrowserTracing({
								routingInstrumentation: r(f.Z)
							})],
							tracesSampleRate: 0,
							transport: j,
							beforeSend: oe => (R.e.setEventId(oe.event_id), oe)
						});
						const ne = (0, u.bh)().getState();
						m.rJ({
							LOCAL_STORAGE_FLAGS: (0, E.Qw)(),
							USER_BETA_FLAGS: (0, E.ki)(),
							meta: {
								connection: {
									type: (I = window) === null || I === void 0 || (k = I.navigator) === null || k === void 0 || (b = k.connection) === null || b === void 0 ? void 0 : b.effectiveType,
									bandwidth: (B = window) === null || B === void 0 || (x = B.navigator) === null || x === void 0 || (A = x.connection) === null || A === void 0 ? void 0 : A.downlink
								},
								languagePreference: (0, i.r)(ne),
								isPreviewDeploy: (w = window) === null || w === void 0 || (D = w.build) === null || D === void 0 ? void 0 : D.isPreviewDeploy
							},
							utilGates: (0, e.T2)(ne)
						}), window.addEventListener("unhandledrejection", function(oe) {})
					}
				}
		},
		"../utils/sentry/lastSentEventId.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let s = "";
				return {
					setEventId: f => (!f || typeof f != "string" || (s = f), s),
					getEventId: () => s
				}
			})()
		},
		"../utils/sentry/setUserId.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				I: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@sentry/core/esm/exports.js");
			const o = s => {
				s ? e.av({
					id: s
				}) : e.av(null)
			}
		},
		"../utils/zaraz.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Ro: function() {
					return r
				},
				bM: function() {
					return p
				},
				tg: function() {
					return l
				},
				yn: function() {
					return t
				}
			});

			function e(a) {
				for (var u = 1; u < arguments.length; u++) {
					var i = arguments[u] != null ? Object(arguments[u]) : {},
						E = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(i).filter(function(g) {
						return Object.getOwnPropertyDescriptor(i, g).enumerable
					})), E.forEach(function(g) {
						o(a, g, i[g])
					})
				}
				return a
			}

			function o(a, u, i) {
				return u = s(u), u in a ? Object.defineProperty(a, u, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[u] = i, a
			}

			function s(a) {
				var u = m(a, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function m(a, u) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var E = i.call(a, u || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(a)
			}
			const c = {
					track: (a, u) => null,
					set: (a, u) => console.log(`zaraz.set(${a}, ${u})`)
				},
				f = {
					track: (a, u) => {
						var i;
						(i = window.zaraz) === null || i === void 0 || i.track(a, e({}, u, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (a, u) => {
						var i;
						return (i = window.zaraz) === null || i === void 0 ? void 0 : i.set(a, u)
					}
				};
			let l;
			const p = () => {
					window.zaraz, l = f
				},
				y = ["email", "first_name", "last_name"],
				t = a => {
					y.forEach(u => {
						var i;
						(i = l) === null || i === void 0 || i.set(u, a[u])
					})
				},
				r = () => {
					t({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				m = n.n(s),
				c = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = n("../../../common/intl/intl-react/src/index.ts"),
				l = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				p = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				y = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				t = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				r = n("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				a = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/elements/es/index.js"),
				u = n("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				i = n("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				E = n("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				g = n("../../../common/component/component-filter-bar/src/constants.js"),
				h = n("../../../common/component/component-filter-bar/src/utils.js");

			function C(M) {
				for (var I = 1; I < arguments.length; I++) {
					var k = arguments[I] != null ? Object(arguments[I]) : {},
						b = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(k).filter(function(B) {
						return Object.getOwnPropertyDescriptor(k, B).enumerable
					})), b.forEach(function(B) {
						L(M, B, k[B])
					})
				}
				return M
			}

			function L(M, I, k) {
				return I = H(I), I in M ? Object.defineProperty(M, I, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[I] = k, M
			}

			function H(M) {
				var I = N(M, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function N(M, I) {
				if (typeof M != "object" || M === null) return M;
				var k = M[Symbol.toPrimitive];
				if (k !== void 0) {
					var b = k.call(M, I || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(M)
			}
			const P = 70,
				J = (0, c.createStyledComponent)(({
					showOverflow: M
				}) => C({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, M ? {} : {
					maxHeight: P,
					overflow: "hidden"
				})),
				Q = (0, c.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				Y = (0, c.createStyledComponent)(({
					theme: M
				}) => ({
					backgroundColor: M.colors.background,
					py: 1,
					px: 2,
					borderRadius: M.radii[2],
					border: `1px solid ${M.colors.gray[7]}`,
					fontSize: M.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: M.colors.gray[4]
					}
				}), "div"),
				Z = (0, c.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				V = (0, c.createStyledComponent)(({
					theme: M
				}) => ({
					color: M.colors.gray[4],
					mr: 1
				}), "span"),
				z = (0, c.createStyledComponent)(() => ({
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
				W = (0, c.createStyledComponent)(({
					buttonStyle: M
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
				}, M), p.zx),
				R = (0, c.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				S = (0, c.createStyledComponent)(({
					theme: M
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: M.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: M.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: M.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: M.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				q = (0, c.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				j = M => M.current ? [...M.current.children].reduce((I, k) => (k.offsetTop >= P && I++, I), 0) : 0;
			let se = 0;
			class te extends e.Component {
				constructor() {
					super();
					L(this, "overflowWrapper", (0, e.createRef)()), L(this, "hasOverflowed", I => {
						const k = j(this.overflowWrapper);
						I.scrollHeight > P && k >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (I.scrollHeight < P || k === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), L(this, "addNewFilter", () => {
						const {
							filterDefinitions: I
						} = this.props, k = (0, h.TE)(I), b = Object.keys(k)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: b,
								operator: (0, h.uv)(b, k),
								value: (0, h.TT)(b, k)
							}
						})
					}), L(this, "handleOpenFilterEdit", I => {
						this.setState({
							openFilter: I,
							filterChanges: C({}, this.props.filters[I])
						})
					}), L(this, "handleRemoveFilterClick", (I, k) => {
						I.stopPropagation(), this.removeFilter(k)
					}), L(this, "removeFilter", I => {
						const {
							handleFiltersChange: k
						} = this.props, b = [...this.props.filters], B = b[I];
						b.splice(I, 1), k(b), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: B.key,
							operator: B.operator,
							value: B.value
						})
					}), L(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), L(this, "handleFilterSubmit", I => {
						const {
							filterDefinitions: k
						} = this.props;
						I.preventDefault();
						const {
							filterChanges: b
						} = this.state, B = typeof k[b.key].parse == "function" ? Array.isArray(b.value) ? b.value.map(k[b.key].parse) : k[b.key].parse(b.value) : b.value;
						if (k[b.key].validate && (Array.isArray(B) ? !B.every(k[b.key].validate) : !k[b.key].validate(B))) return this.setState({
							invalid: !0
						});
						const x = [...this.props.filters],
							A = C({}, b, {
								value: B
							}),
							w = !x[this.state.openFilter];
						w ? x.push(A) : x[this.state.openFilter] = C({}, b), this.props.handleFiltersChange(x, A), (w ? this.props.onAddFilter : this.props.onEditFilter)({
							field: A.key,
							operator: A.operator,
							value: A.value
						}), this.closeOpenFilterChanges()
					}), L(this, "handlePendingKeyChange", ({
						value: I
					}) => {
						const {
							filterDefinitions: k
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: I,
								operator: (0, h.uv)(I, k),
								value: (0, h.TT)(I, k)
							}
						})
					}), L(this, "handlePendingOperatorChange", ({
						value: I
					}) => {
						let k = C({}, this.state.filterChanges, {
							operator: I
						});
						if ((0, h.dr)(I)) {
							var b, B;
							((b = this.state.filterChanges) === null || b === void 0 ? void 0 : b.value) && !Array.isArray((B = this.state.filterChanges) === null || B === void 0 ? void 0 : B.value) && (k.value = [this.state.filterChanges.value])
						} else {
							var x, A, w;
							((x = this.state.filterChanges) === null || x === void 0 ? void 0 : x.value) && Array.isArray((A = this.state.filterChanges) === null || A === void 0 ? void 0 : A.value) && ((w = this.state.filterChanges) === null || w === void 0 ? void 0 : w.value.length) > 0 && (k.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: k
						})
					}), L(this, "handlePendingValueChange", I => {
						this.setState({
							invalid: !1,
							filterChanges: C({}, this.state.filterChanges, {
								value: I
							})
						})
					}), L(this, "handleShowOverflow", () => {
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
						id: ++se
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(I) {
					I.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(I) {
					const {
						formatLabel: k,
						filterDefinitions: b
					} = this.props, {
						operator: B
					} = this.state.filterChanges, x = b[this.state.filterChanges.key], A = this.state.filterChanges.value, w = D => Array.isArray(D) ? D.map(K => K.value) : (D == null ? void 0 : D.value) || null;
					if (x.renderValueComponent) return x.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (x.type) {
						case g.k.select:
							return (0, h.dr)(B) ? o().createElement(u.Z, {
								searchable: !0,
								multi: !0,
								creatable: !x.options,
								value: typeof A.split == "function" ? A == null ? void 0 : A.split(",") : Array.isArray(A) ? A : [],
								options: x.options ? x.options.map(D => ({
									value: D.value || D,
									label: D.label || k(this.state.filterChanges.key, D, I)
								})) : A ? (Array.isArray(A) ? A : A.split(",")).map(D => ({
									label: D,
									value: D
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(f.cC, {
									id: x.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: x.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: D => {
									this.handlePendingValueChange(w(D))
								},
								isValidNewOption: D => {
									const K = x.validate;
									return !K && D || D && K([D])
								},
								getNewOptionData: (D, K) => ({
									value: D,
									label: K
								})
							}) : o().createElement(r.hQ, {
								hideLabel: !0,
								value: A,
								options: x.options.map(D => ({
									value: D,
									label: k(this.state.filterChanges.key, D, I)
								})),
								onChange: ({
									value: D
								}) => this.handlePendingValueChange(D)
							});
						case g.k.string:
						default:
							return (0, h.dr)(B) ? o().createElement(u.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof A.split == "function" ? A == null ? void 0 : A.split(",") : Array.isArray(A) ? A : [],
								options: A ? (Array.isArray(A) ? A : A.split(",")).map(D => ({
									label: D,
									value: D
								})) : [],
								noOptionsMessage: () => null,
								placeholder: I.t("analytics.report.filters.labels.placeholder", {
									example: b[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: D => {
									this.handlePendingValueChange(w(D))
								},
								isValidNewOption: D => {
									const K = x.validate;
									return !K && D || D && K([D])
								},
								getNewOptionData: (D, K) => ({
									value: D,
									label: K
								}),
								formatCreateLabel: D => I.t("filter_editor.value_create_label", {
									value: D
								})
							}) : o().createElement(f.oc, null, D => o().createElement(l.I, {
								value: this.state.filterChanges.value,
								onChange: K => this.handlePendingValueChange(K.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: D.t("analytics.report.filters.labels.placeholder", {
									example: b[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: I,
						filterDefinitions: k,
						modalStyles: b,
						filterIconType: B,
						buttonStyle: x
					} = this.props, A = j(this.overflowWrapper), w = `filterPanel${this.state.id}`, D = this.state.openFilter !== null;
					return o().createElement(f.oc, null, K => o().createElement(a.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(q, null, o().createElement(W, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": D,
						"aria-controls": w,
						inverted: !0,
						buttonStyle: x
					}, o().createElement(y.J, {
						type: B || "add",
						mr: 1,
						label: K.t("common.add", {
							_: "Add"
						})
					}), o().createElement(f.cC, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(R, null, o().createElement(f.cC, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(J, {
						innerRef: this.overflowWrapper,
						overflowLimit: P,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((ne, oe) => {
						const {
							key: le,
							operator: Ce,
							value: ye
						} = ne, he = k[le].ignoreLabelTranslation ? k[le].label : K.t(k[le].label), $ = K.t(`analytics.report.filters.operators.${Ce}`), ie = Array.isArray(ye) ? ye.map(Te => I(le, Te, K)).join(", ") : I(le, ye, K), me = `${he} ${$} ${ie}`;
						return o().createElement(Q, {
							key: `${le}-${Ce}-${ye}`,
							title: me
						}, o().createElement(Y, {
							onClick: () => this.handleOpenFilterEdit(oe)
						}, o().createElement(a.ZC, {
							display: "flex"
						}, o().createElement(Z, null, he), o().createElement(V, null, $), o().createElement(z, null, ie), (0, h.oN)(ne, k) ? o().createElement(t.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(S, {
							onClick: Te => this.handleRemoveFilterClick(Te, oe),
							"aria-label": "remove"
						}, o().createElement(y.J, {
							type: "remove"
						})))))
					})), D && o().createElement(E.Z, {
						id: w,
						filterDefinitions: k,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, h.oN)(this.state.filterChanges, k),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: I,
						modalStyles: b
					}), this.state.hasOverflowed && o().createElement(i.Z, {
						count: A,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			L(te, "propTypes", {
				filterDefinitions: m().shape({}),
				filters: m().arrayOf(m().shape({
					key: m().string,
					operator: m().string,
					value: m().string
				})),
				handleFiltersChange: m().func.isRequired,
				formatLabel: m().func.isRequired,
				onAddFilter: m().func,
				onEditFilter: m().func,
				onRemoveFilter: m().func,
				children: m().node,
				modalStyles: m().object,
				filterIconType: m().string,
				buttonStyle: m().object
			}), v.Z = te
		},
		"../../../common/component/component-filter-bar/src/index.js": function(G, v, n) {
			"use strict";
			n.d(v, {
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
					return m.oN
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = n("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				s = n("../../../common/component/component-filter-bar/src/constants.js"),
				m = n("../../../common/component/component-filter-bar/src/utils.js")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				OZ: function() {
					return c
				},
				YB: function() {
					return m
				}
			});

			function e(l, p, y) {
				return p = o(p), p in l ? Object.defineProperty(l, p, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[p] = y, l
			}

			function o(l) {
				var p = s(l, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function s(l, p) {
				if (typeof l != "object" || l === null) return l;
				var y = l[Symbol.toPrimitive];
				if (y !== void 0) {
					var t = y.call(l, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(l)
			}
			class m extends Error {
				constructor(p, y) {
					super(y);
					e(this, "translationKey", void 0), this.translationKey = p, this.name = "TranslatorError"
				}
			}
			class c extends m {
				constructor(p) {
					super(p, `Translation key not found: ${p}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var f = null
		},
		"../../../common/intl/intl-react/src/I18nProvider.tsx": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(y) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (y[a] = r[a])
					}
					return y
				}, m.apply(this, arguments)
			}

			function c(y, t) {
				if (y == null) return {};
				var r = f(y, t),
					a, u;
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(y);
					for (u = 0; u < i.length; u++) a = i[u], !(t.indexOf(a) >= 0) && (!Object.prototype.propertyIsEnumerable.call(y, a) || (r[a] = y[a]))
				}
				return r
			}

			function f(y, t) {
				if (y == null) return {};
				var r = {},
					a = Object.keys(y),
					u, i;
				for (i = 0; i < a.length; i++) u = a[i], !(t.indexOf(u) >= 0) && (r[u] = y[u]);
				return r
			}
			class l extends e.Component {
				constructor(t) {
					super(t);
					const {
						locale: r,
						phrases: a,
						translator: u
					} = t;
					r && u.locale(r), a && u.extend(a)
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
			const p = y => {
				let {
					translator: t
				} = y, r = c(y, ["translator"]);
				const a = () => e.createElement(s.oc, null, u => e.createElement(l, m({
					translator: u
				}, r)));
				return t ? (t.locale(r.locale), e.createElement(s.bd, {
					value: t
				}, a())) : a()
			};
			v.Z = p
		},
		"../../../common/intl/intl-react/src/index.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				oc: function() {
					return p.oc
				},
				lm: function() {
					return o.Z
				},
				bd: function() {
					return e.Z
				},
				RD: function() {
					return Q
				},
				cC: function() {
					return H
				},
				QT: function() {
					return P.Q
				}
			});
			var e = n("../../../common/intl/intl-react/src/I18nProvider.tsx"),
				o = n("../../../common/intl/intl-react/src/I18nLoader.tsx"),
				s = n("webpack/sharing/consume/default/react/react"),
				m = n.n(s),
				c = n("../../../../node_modules/lodash/escape.js"),
				f = n.n(c),
				l = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				p = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function y(Y) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var V = arguments[Z] != null ? Object(arguments[Z]) : {},
						z = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(V).filter(function(W) {
						return Object.getOwnPropertyDescriptor(V, W).enumerable
					})), z.forEach(function(W) {
						t(Y, W, V[W])
					})
				}
				return Y
			}

			function t(Y, Z, V) {
				return Z = r(Z), Z in Y ? Object.defineProperty(Y, Z, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[Z] = V, Y
			}

			function r(Y) {
				var Z = a(Y, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function a(Y, Z) {
				if (typeof Y != "object" || Y === null) return Y;
				var V = Y[Symbol.toPrimitive];
				if (V !== void 0) {
					var z = V.call(Y, Z || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(Y)
			}

			function u() {
				return u = Object.assign ? Object.assign.bind() : function(Y) {
					for (var Z = 1; Z < arguments.length; Z++) {
						var V = arguments[Z];
						for (var z in V) Object.prototype.hasOwnProperty.call(V, z) && (Y[z] = V[z])
					}
					return Y
				}, u.apply(this, arguments)
			}
			const i = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				E = /(?:\r\n|\r|\n)/g;

			function g(Y, Z, V) {
				return s.createElement("span", {
					key: Y,
					"data-testid": V,
					dangerouslySetInnerHTML: {
						__html: Z
					}
				})
			}

			function h(Y, Z = [], V = [], z) {
				let W = 0;
				const R = Y.replace(E, "").split(i);
				if (R.length === 1) return [g(W, Y, z)];
				const S = [],
					q = R.shift();
				if (q) {
					const j = g(W, q, z);
					S.push(j), typeof j != "string" && W++
				}
				for (const [j, se, te] of C(R)) {
					Z[j] || window.console && console.warn(`Missing Component for translation key: ${Y}, index: ${j}. Fragment will be used.`);
					const M = Z[j] || s.Fragment,
						I = V[j] || {},
						k = g(0, se);
					if (S.push(s.createElement(M, u({
							key: W
						}, I), k)), W++, te) {
						const b = g(W, te);
						S.push(b), typeof b != "string" && W++
					}
				}
				return S
			}

			function C(Y) {
				if (!Y.length) return [];
				const [Z, V, z, W] = Y.slice(0, 4);
				return [
					[parseInt(Z || z), V || "", W]
				].concat(C(Y.slice(4, Y.length)))
			}

			function L({
				id: Y = "",
				smartCount: Z,
				_: V,
				values: z,
				applyMarkdown: W,
				Components: R,
				componentProps: S,
				testId: q
			}) {
				return s.createElement(p.oc, null, j => {
					z && Object.keys(z).forEach(I => z[I] = f()(z[I])), S && S.forEach(I => {
						Object.keys(I).forEach(k => {
							typeof I[k] == "string" && (I[k] = f()(I[k]))
						})
					});
					const se = y({
							smart_count: Z,
							_: V
						}, z),
						te = W ? (0, l.Z)(j.t(Y.toString(), se), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : j.t(Y.toString(), se),
						M = h(te, R, S, q);
					return M.length > 1 ? s.createElement(s.Fragment, null, M) : M[0]
				})
			}
			var H = L,
				N = n("../../../common/intl/intl-react/src/withTranslator.tsx"),
				P = n("../../../common/intl/intl-react/src/useI18n.tsx"),
				J = n("../../../common/intl/intl-types/src/index.ts"),
				Q = m().createContext(J.Q.en_US)
		},
		"../../../common/util/types/src/api/domain.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Aw: function() {
					return J
				},
				Ib: function() {
					return N
				},
				Ks: function() {
					return Q
				},
				MS: function() {
					return P
				},
				PN: function() {
					return E
				},
				Pp: function() {
					return m
				},
				Q3: function() {
					return u
				},
				TS: function() {
					return i
				},
				W7: function() {
					return C
				},
				dN: function() {
					return Y
				},
				eF: function() {
					return H
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
				s = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				m = e.eg.object({
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
				c = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				f = e.eg.object({
					registrant: m.optional,
					technical: m.optional,
					administrator: m.optional,
					billing: m.optional
				}),
				l = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: f.optional,
					years: e.eg.number
				}),
				p = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let y = function(Z) {
				return Z.ONBOARDING_INITIATED = "Onboarding Initiated", Z.ONBOARDED = "Onboarded", Z.PENDING_REGISTRY_LOCK = "Pending Registry Lock", Z.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", Z.REGISTRY_UNLOCKED = "Registry Unlocked", Z.LOCKED = "Locked", Z.FAILED_TO_LOCK = "Failed To Lock", Z.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", Z.UNLOCKED = "Unlocked", Z.OFFBOARDED = "Offboarded", Z
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
					fees: p.optional,
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
					transfer_conditions: c.optional,
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
				u = e.eg.object({
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
			let E = function(Z) {
				return Z.PENDING = "pending", Z.VERIFIED = "verified", Z.REJECTED = "rejected", Z.PENDING_DELETE = "pending_delete", Z.DELETED = "deleted", Z
			}({});
			const g = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(E),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				h = e.eg.object({
					designated_approvers: e.eg.array(g)
				});
			let C = function(Z) {
				return Z.PENDING = "pending", Z.PENDING_UPDATE = "pending_update", Z.ENABLED = "enabled", Z.DISABLED = "disabled", Z
			}({});
			const L = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(C)
				}),
				H = e.eg.intersection([L, h]),
				N = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let P = function(Z) {
				return Z.UNLOCK_APPROVAL = "UnlockApprovalRequest", Z.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", Z.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", Z.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", Z
			}({});
			const J = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				Q = e.eg.object({
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
		"../../../common/util/types/src/utils/index.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
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
			const o = (s, m) => {
				if (m !== void 0) throw new Error("Unexpected object: " + s);
				return m
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(G, v, n) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(s) {
				if (!n.o(e, s)) return Promise.resolve().then(function() {
					var f = new Error("Cannot find module '" + s + "'");
					throw f.code = "MODULE_NOT_FOUND", f
				});
				var m = e[s],
					c = m[0];
				return n.e(m[1]).then(function() {
					return n.t(c, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", G.exports = o
		}
	}
]);

//# debugId=e4642efd-a3f1-5fb7-9974-9d890e732bbc