<p style="text-align: center;">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://pub-2030b241eb284b5291e3e59724e55a66.r2.dev/nx-cloudflare.svg">
    <img alt="nx-cloudflare - Nx plugin for Cloudflare, in particular Cloudflare workers." src="https://pub-2030b241eb284b5291e3e59724e55a66.r2.dev/nx-cloudflare.svg" width="100%">
  </picture>
</p>

<div style="text-align: center;">

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

</div>

<hr>

Nx plugin for Cloudflare.

## Features

- ✅ Generate Cloudflare Worker Application
  - ✅ Include Fetch Handler template
  - ✅ Include Scheduled Handler template
  - ✅ Vitest tests support
  - ✅ Serve and Deploy executors for workers.
- ✅ Generate Cloudflare Worker Library
- ✅ [Experimental] Cloudflare Pages builder for Next.JS projects.

## Installation

Nx Cloudflare is published as the `@naxodev/nx-cloudflare` package.

| Toolchain | Command                              |
| --------- | ------------------------------------ |
| NPM CLI   | `npm install @naxodev/nx-cloudflare` |
| PNPM CLI  | `pnpm add @naxodev/nx-cloudflare`    |
| Yarn CLI  | `yarn add @naxodev/nx-cloudflare`    |

## Compatibility

Nx Cloudflare is compatible with the following versions of Nx:

| Nx Version | Nx Cloudflare Version |
| ---------- | --------------------- |
| 17.x       | 1.x                   |
| 18.x       | 2.x                   |
| 19.x       | 3.x                   |

## Usage

### Cloudflare Worker Application

#### Generating a new Cloudflare Worker Application

```bash
nx g @naxodev/nx-cloudflare:application my-worker-app
```

Available options:

| Option                   | Type                                         | Default       | Description                                                                                                                                                                            |
| ------------------------ | -------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                     | string                                       | \*required    | What name would you like to use?                                                                                                                                                       |
| template                 | fetch-handler, scheduled-handler, hono, none | fetch-handler | Which worker template do you want to use?                                                                                                                                              |
| projectNameAndRootFormat | as-provided, derived                         | as-provided   | Whether to generate the project name and root directory as provided (`as-provided`) or generate them composing their values and taking the configured layout into account (`derived`). |
| port                     | number                                       | 8787          | The port in which the worker will be run on development mode                                                                                                                           |
| accountId                | string                                       | null          | The Cloudflare account identifier where the worker will be deployed                                                                                                                    |
| js                       | boolean                                      | false         | Use JavaScript instead of TypeScript                                                                                                                                                   |
| tags                     | string                                       | null          | Add tags to the application (used for linting).                                                                                                                                        |
| frontendProject          | string                                       | null          | Frontend project that needs to access this application. This sets up proxy configuration.                                                                                              |
| unitTestRunner           | vitest, none                                 | vitest        | Test runner to use for unit tests.                                                                                                                                                     |
| directory                | string                                       | null          | The directory of the new application.                                                                                                                                                  |
| rootProject              | boolean                                      | false         | Create worker application at the root of the workspace                                                                                                                                 |
| skipFormat               | boolean                                      | false         | Skip formatting files.                                                                                                                                                                 |

#### Serve worker on dev mode

```bash
nx serve <my-app>
```

The available options are the following:

| Option                                | Type                                            | Default | Description                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------- | ----------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| script                                | string                                          | -       | The path to an entry point for your Worker.                                                                                                                                                                                                                                                                                                                                                  |
| name                                  | string                                          | -       | Name of the Worker.                                                                                                                                                                                                                                                                                                                                                                          |
| noBundle                              | boolean                                         | false   | Skip Wrangler’s build steps and show a preview of the script without modification. Particularly useful when using custom builds.                                                                                                                                                                                                                                                             |
| env                                   | string                                          | -       | Perform on a specific environment.                                                                                                                                                                                                                                                                                                                                                           |
| compatibilityDate                     | string                                          | -       | A date in the form yyyy-mm-dd, which will be used to determine which version of the Workers runtime is used.                                                                                                                                                                                                                                                                                 |
| compatibilityFlags, compatibilityFlag | string[]                                        | -       | Flags to use for compatibility checks.                                                                                                                                                                                                                                                                                                                                                       |
| latest                                | boolean                                         | true    | Use the latest version of the Workers runtime.                                                                                                                                                                                                                                                                                                                                               |
| ip                                    | string                                          | -       | IP address to listen on, defaults to "localhost."                                                                                                                                                                                                                                                                                                                                            |
| port                                  | number                                          | -       | Port to listen on.                                                                                                                                                                                                                                                                                                                                                                           |
| inspectorPort                         | number                                          | -       | Port for devtools to connect to.                                                                                                                                                                                                                                                                                                                                                             |
| routes, route                         | string[]                                        | -       | Routes to upload. For example: --route example.com/\*.                                                                                                                                                                                                                                                                                                                                       |
| host                                  | string                                          | -       | Host to forward requests to, defaults to the zone of the project.                                                                                                                                                                                                                                                                                                                            |
| localProtocol                         | "http" or "https"                               | "http"  | Protocol to listen to requests on.                                                                                                                                                                                                                                                                                                                                                           |
| localUpstream                         | string                                          | -       | Host to act as origin in local mode, defaults to dev.host or route.                                                                                                                                                                                                                                                                                                                          |
| assets                                | string                                          | -       | Root folder of static assets to be served. Unlike --site, --assets does not require a Worker script to serve your assets. Use in combination with --name and --latest for basic static file hosting. For example: wrangler dev --name personal_blog --assets dist/ --latest.                                                                                                                 |
| site                                  | string                                          | -       | Root folder of static assets for Workers Sites.                                                                                                                                                                                                                                                                                                                                              |
| siteInclude                           | string[]                                        | -       | Array of .gitignore-style patterns that match file or directory names from the sites directory. Only matched items will be uploaded.                                                                                                                                                                                                                                                         |
| siteExclude                           | string[]                                        | -       | Array of .gitignore-style patterns that match file or directory names from the sites directory. Matched items will not be uploaded.                                                                                                                                                                                                                                                          |
| upstreamProtocol                      | "http" or "https"                               | "https" | Protocol to forward requests to host on.                                                                                                                                                                                                                                                                                                                                                     |
| var                                   | key:value[]                                     | -       | Array of key:value pairs to inject as variables into your code. The value will always be passed as a string to your Worker. For example, --var git_hash:$(git rev-parse HEAD) test:123 makes the git_hash and test variables available in your Worker’s env. This flag is an alternative to defining vars in your wrangler.toml. If defined in both places, this flag’s values will be used. |
| define                                | key:value[]                                     | -       | Array of key:value pairs to replace global identifiers in your code. For example, --define GIT_HASH:$(git rev-parse HEAD) will replace all uses of GIT_HASH with the actual value at build time. This flag is an alternative to defining define in your wrangler.toml. If defined in both places, this flag’s values will be used.                                                           |
| tsconfig                              | string                                          | -       | Path to a custom tsconfig.json file.                                                                                                                                                                                                                                                                                                                                                         |
| minify                                | boolean                                         | -       | Minify the script.                                                                                                                                                                                                                                                                                                                                                                           |
| nodeCompat                            | boolean                                         | -       | Enable node.js compatibility.                                                                                                                                                                                                                                                                                                                                                                |
| persistTo                             | string                                          | -       | Specify directory to use for local persistence.                                                                                                                                                                                                                                                                                                                                              |
| remote                                | boolean                                         | false   | Develop against remote resources and data stored on Cloudflare’s network.                                                                                                                                                                                                                                                                                                                    |
| testScheduled                         | boolean                                         | false   | Exposes a /**scheduled fetch route which will trigger a scheduled event (cron trigger) for testing during development. To simulate different cron patterns, a cron query parameter can be passed in: /**scheduled?cron=\*+\*+\*+\*+\*.                                                                                                                                                       |
| logLevel                              | "debug," "info," "log," "warn," "error," "none" | "log"   | Specify Wrangler’s logging level.                                                                                                                                                                                                                                                                                                                                                            |

#### Deploy worker to Cloudflare

```bash
nx deploy <my-app>
```

The available options are the following:

| Option             | Type     | Default | Description                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name               | string   | -       | Name of the Worker.                                                                                                                                                                                                                                                                                                                                                                        |
| noBundle           | boolean  | false   | Skip Wrangler’s build steps and directly deploy script without modification. Particularly useful when using custom builds.                                                                                                                                                                                                                                                                 |
| env                | string   | -       | Perform on a specific environment.                                                                                                                                                                                                                                                                                                                                                         |
| outdir             | string   | -       | Path to directory where Wrangler will write the bundled Worker files.                                                                                                                                                                                                                                                                                                                      |
| compatibilityDate  | string   | -       | A date in the form yyyy-mm-dd, which will be used to determine which version of the Workers runtime is used.                                                                                                                                                                                                                                                                               |
| compatibilityFlags | string[] | -       | Flags to use for compatibility checks.                                                                                                                                                                                                                                                                                                                                                     |
| latest             | boolean  | true    | Use the latest version of the Workers runtime.                                                                                                                                                                                                                                                                                                                                             |
| assets             | string   | -       | Root folder of static assets to be served. Unlike --site, --assets does not require a Worker script to serve your assets.                                                                                                                                                                                                                                                                  |
| site               | string   | -       | Root folder of static assets for Workers Sites.                                                                                                                                                                                                                                                                                                                                            |
| siteInclude        | string[] | -       | Array of .gitignore-style patterns that match file or directory names from the sites directory. Only matched items will be uploaded.                                                                                                                                                                                                                                                       |
| siteExclude        | string[] | -       | Array of .gitignore-style patterns that match file or directory names from the sites directory. Matched items will not be uploaded.                                                                                                                                                                                                                                                        |
| var                | string[] | -       | Array of key:value pairs to inject as variables into your code. The value will always be passed as a string to your Worker.                                                                                                                                                                                                                                                                |
| define             | string[] | -       | Array of key:value pairs to replace global identifiers in your code.                                                                                                                                                                                                                                                                                                                       |
| triggers           | string[] | -       | Cron schedules to attach to the deployed Worker. Refer to Cron Trigger Examples.                                                                                                                                                                                                                                                                                                           |
| routes             | string[] | -       | Routes where this Worker will be deployed.                                                                                                                                                                                                                                                                                                                                                 |
| tsconfig           | string   | -       | Path to a custom tsconfig.json file.                                                                                                                                                                                                                                                                                                                                                       |
| minify             | boolean  | -       | Minify the bundled script before deploying.                                                                                                                                                                                                                                                                                                                                                |
| nodeCompat         | boolean  | -       | Enable node.js compatibility.                                                                                                                                                                                                                                                                                                                                                              |
| dryRun             | boolean  | false   | Compile a project without actually deploying to live servers. Combined with --outdir, this is also useful for testing the output of npx wrangler deploy. It also gives developers a chance to upload our generated sourcemap to a service like Sentry, so that errors from the Worker can be mapped against source code, but before the service goes live.                                 |
| keepVars           | boolean  | false   | It is recommended best practice to treat your Wrangler developer environment as a source of truth for your Worker configuration, and avoid making changes via the Cloudflare dashboard. If you change your environment variables or bindings in the Cloudflare dashboard, Wrangler will override them the next time you deploy. If you want to disable this behavior set keepVars to true. |

### Cloudflare Worker Library

#### Generating a new Cloudflare Worker Library

```bash
nx g @naxodev/nx-cloudflare:library my-worker-lib
```

Available options:

| Option                   | Type                          | Default     | Description                                                                                                                                                                            |
| ------------------------ | ----------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                     | string                        | \*required  | What name would you like to use?                                                                                                                                                       |
| directory                | string                        | null        | The directory of the new application.                                                                                                                                                  |
| projectNameAndRootFormat | as-provided, derived          | as-provided | Whether to generate the project name and root directory as provided (`as-provided`) or generate them composing their values and taking the configured layout into account (`derived`). |
| linter                   | eslint, none                  | eslint      | The tool to use for running lint checks.                                                                                                                                               |
| unitTestRunner           | vitest, none                  | vitest      | Test runner to use for unit tests.                                                                                                                                                     |
| tags                     | string                        | null        | Add tags to the application (used for linting).                                                                                                                                        |
| skipFormat               | boolean                       | false       | Skip formatting files.                                                                                                                                                                 |
| js                       | boolean                       | false       | Use JavaScript instead of TypeScript                                                                                                                                                   |
| strict                   | boolean                       | true        | Whether to enable tsconfig strict mode or not.                                                                                                                                         |
| publishable              | boolean                       | false       | Generate a publishable library.                                                                                                                                                        |
| importPath               | string                        | null        | The library name used to import it, like @myorg/my-awesome-lib. Required for publishable library.                                                                                      |
| bundler                  | swc, tsc, vite, esbuild, none | tsc         | Which bundler would you like to use to build the library? Choose 'none' to skip build setup.                                                                                           |
| minimal                  | boolean                       | false       | Generate a library with a minimal setup. No README.md generated.                                                                                                                       |
| simpleName               | boolean                       | false       | Don't include the directory in the generated file name.                                                                                                                                |

### NextJS on Cloudflare

#### Build Next application

> This feature is ⚠️ **experimental**. We appreciate that you let us know of any issues that you find.

To start using the Cloudflare Pages Next builder, start by replacing the builder executor in your application `project.json`.

```json
  ...
  "targets": {
    ...
    "build": {
      "executor": "@naxodev/nx-cloudflare:next-build",
      ...
    },
    ...
```

Notice that you can use the same configurations as in the `@nx/next:build` executor.

Now you can run the build command.

```sh
nx build <app-name>
```

And upload the content of the folder `.vercel/output/static` contained in the folder matching your configured output path.

## Acknowledgement

This project is heavily inspired in the work done by other Nx Champions, check out their projects.

- <https://github.com/nxext/nx-extensions/tree/main>
- <https://github.com/klaascuvelier/nx-additions>

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%">
  <a href="https://github.com/NachoVazquez"><img src="https://avatars3.githubusercontent.com/u/9338604?v=4?s=100" width="100px;" alt="Nacho Vazquez"/><br /><sub><b>Nacho Vazquez</b></sub></a><br /><a href="https://github.com/ngworker/lumberjack/issues?q=author%3ANachoVazquez" title="Bug reports">🐛</a> <a href="https://github.com/ngworker/lumberjack/commits?author=NachoVazquez" title="Code">💻</a> <a href="https://github.com/ngworker/lumberjack/commits?author=NachoVazquez" title="Documentation">📖</a> <a href="#example-NachoVazquez" title="Examples">💡</a> <a href="#ideas-NachoVazquez" title="Ideas, Planning, & Feedback">🤔</a> <a href="#mentoring-NachoVazquez" title="Mentoring">🧑‍🏫</a> <a href="#maintenance-NachoVazquez" title="Maintenance">🚧</a> <a href="#projectManagement-NachoVazquez" title="Project Management">📆</a> <a href="https://github.com/ngworker/lumberjack/pulls?q=is%3Apr+reviewed-by%3ANachoVazquez" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/ngworker/lumberjack/commits?author=NachoVazquez" title="Tests">⚠️</a> <a href="#tool-NachoVazquez" title="Tools">🔧</a> <a href="#userTesting-NachoVazquez" title="User Testing">📓</a></td></tr></tbody></table>
