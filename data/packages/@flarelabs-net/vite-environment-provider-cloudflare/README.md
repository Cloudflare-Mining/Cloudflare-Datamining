# Vite Environment Provider Cloudflare

Package that exports a `cloudflare` function that can be used to set a Vite Environment to run code inside the [`workerd`](https://github.com/cloudflare/workerd) runtime (via [`Miniflare`](https://github.com/cloudflare/workers-sdk/tree/main/packages/miniflare)).

> [!NOTE]
> Based on the [vite@6.0.0-alpha.18](https://www.npmjs.com/package/vite/v/6.0.0-alpha.18) Environment API implementation.

## Package Usage

The package exposes the `cloudflare` function that can be used to create new environments that run code inside the workerd runtime:

```ts
environments: {
  myEnvironment: cloudflare(),
}
```

this sets both a `dev` and a `build` environments (of course users can also process the `cloudflare` returned value to tweak the returned environments and/or use only one of them).

In the case of the dev environment, the environment instance is enhanced with an `api` field that contains a `getHandler` method, this is what can then be used to handle incoming requests (making sure that they are run inside workerd):

```ts
const handler = await devEnv.api.getHandler({
  entrypoint: workerEntrypoint,
});
```

You can see usage examples [here](../../examples/dummy-framework/frameworkPlugin.ts) and [here](https://github.com/dario-piotrowicz/remix/blob/2.9.1-vite-env-4/packages/remix-dev/vite/plugin.ts).

## Package Structure

The package's code is structured in the following way:

```
src
├── debug-dumps
│   ├── ...
│   └── ...
├── worker
│   └── index.ts
├── codeTransformation.ts
├── index.ts
└── workerd-custom-import.cts
```

- `debug-dumps`\
  can be ignored, it contains logic that we've used to dump logs and files that the
  environment encounters which we've used for debugging (this is off by default and can be enabled by setting the `DEBUG_DUMPS` env variable)

- `worker/index.ts`\
  the actual entrypoint worker code that we run inside workerd, this includes the Vite Module Runner. It runs code by importing the `getHandler`'s `entrypoint` argument.

- `codeTransformation.ts`\
  logic that we needed to include to make workerd correctly handles esm modules importing cjs ones, this will soon become unnecessary since changes in workerd are being worked on to fix the cjs issues

- `index.ts`\
  the package's index file, it exposes the `workerdEnvironmentProvider` function which creates the Vite Environments. In the case of the dev one, it creates one that spins up a miniflare instance that uses the `worker/index.ts` transpiled code as is main module.

- `workerd-custom-import.cts`\
  this is a file that we use to implement interoperability between ems and cjs (external) code.

## Important points

### The module fallback service

In the `index.ts` code you can see a `unsafeModuleFallbackService` this is a relatively new feature of workerd and miniflare that is instrumental here to enable the module runner's `runExternalModule` method to function in workerd.

How this works is that when workerd tries to import a module and it can't find it in its module graph then it sends a request to the module fallback service providing the import details.

The module fallback service can then fetch and return the code for the module from the filesystem (in our case using `DevEnvironment#pluginContainer#resolveId` to allow Vite to perform the correct module resolution).

Allowing the import inside workerd to them be resolved (and the workerd module graph updated).

### `workerd-custom-imports.cts`

Workerd supports cjs code but not as part of it's main/entrypoint module. So with a standard setup with a single esm module we wouldn't be able to import cjs modules. The way we workaround this limitation is by creating an additional `CommonJS` module which exports a custom import function (which is actually implement by a plain dynamic import) such import can then import both cjs and esm modules, allowing us to have interoperability between the two.
