# serverless-cloudflare-workers

Serverless plugin for [Cloudflare Workers](https://developers.cloudflare.com/workers/)

## Documentation

https://serverless.com/framework/docs/providers/cloudflare/guide/quick-start/

### Bundling with Webpack

You can have the plugin automatically bundle your code into one file using [webpack](https://webpack.js.org/). This is a great solution if you are fine with a no frills bundling.

You can use a single global webpack config to bundle your assets. And this webpack config will be built during the packaging time, before individual functions are prepared. To use this, add `webpackConfig` to your service section in serverless config, with value as the path to the webpack config.

```yaml
service:
  name: service-name
  webpackConfig: webpack.config #webpack config path without js extension from root folder.
  config:
    accountId: ${env:CLOUDFLARE_ACCOUNT_ID}
    zoneId: ${env:CLOUDFLARE_ZONE_ID}

```

You can also add a function level webpack configuration in addition to a global webpack configuration. This helps you to process bundling different for an individual function than the global webpack config explained earlier. To use this, set the webpack config path to the function level `webpack` variable. Setting function level `webpack` variable to `true` will force webpack to bundle the function script with a default web pack configuration. Setting `webpack` key to `false` will turn off webpack for the function. (i.e the function script will not be fetched from dist folder)

Simply add `webpack: true | <config path>` to your config block.

```yaml
functions:
  myfunction:
    name: myfunction
    webpack: true #or the web pack config path for this function
    script: handlers/myfunctionhandler
    events:
      - http:
          url: example.com/myfunction
          method: GET
  
```

### Environment Variables

While Cloudflare Workers doesn't exactly offer environment vairables, we can bind global variables to values, essentially giving the same capabilities. In your function configuration, add key value pairs in `environment`

```yaml
functions:
  myFunction:
    environment:
      MYKEY: value_of_my_key
      ANOTHER_KEY_OF_MINE: sweet_child_o_mine

```

Then in your script, you can reference `MYKEY` to access the value.

You can also add an environment block under `provider`. These will get added to every function. If a function defines the same variable, the function defintion will overwrite the provider block definition.

```yaml
provider:
  name: cloudflare
  environment:
    MYKEY: value_of_my_key
    ANOTHER_KEY_OF_MINE: sweet_child_o_mine

```

### Using Cloudflare KV Storage

The plugin can create and bind a [KV Storage](https://developers.cloudflare.com/workers/kv/) namespace for your function by simpling adding a resources section.

The following will create a namespace called `BEST_NAMESPACE` and bind the variable `TEST` to that namespace inside `myfunction`.

```yaml
functions:
  myfunction:
    name: myfunction
    webpack: true
    script: handlers/myfunctionhandler
    resources:
      kv:
        - variable: TEST
          namespace: BEST_NAMESPACE
    events:
      - http:
          url: example.com/myfunction
          method: GET
```

### Web Assembly

The plugin can upload and bind WASM to execute in your worker. The easiest way to do this is to use the --template cloudflare-workers-rust when generating a project. The template includes a Rust create folder setup with wasm-pack, a webpack script for adding the generated javascript into your project, and the yml file settings to upload the wasm file itself.

```yaml
functions:
  myfunction:
    name: myfunction
    webpack: true
    script: handlers/myfunctionhandler
    resources:
      wasm:
        - variable: WASM
          filename: rust/pkg/wasm_bg.wasm
    events:
      - http:
          url: example.com/myfunction
          method: GET
```