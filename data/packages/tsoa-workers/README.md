# tsoa-workers

This is a lib is to make it possible to run the fantastic [TSOA](https://tsoa-community.github.io/)-library in Cloudflare workers.

To avoid any node dependencies ensure that you import `@tsoa/runtime` in your routes rather than `tsoa`

After a bit of misunderstanding the only thing needed to add is to a new handlebars-template.

## Examples

Check out the examples folder for how to set up a project using tsoa-workers. The only change needed compared to vanilla tsoa is just a single line in the `tsoa.json`-file to switch the middleware template:

```
{
  "entryFile": "src/app.ts",
  "noImplicitAdditionalProperties": "throw-on-extras",
  "controllerPathGlobs": ["src/**/*Controller.ts"],
  "spec": {
    "outputDirectory": "build",
    "specVersion": 3,
  },
  "routes": {
    "routesDir": "build",
    "middlewareTemplate": "node_modules/tsoa-workers/cloudworker-router.hbs"

  }
}
```
