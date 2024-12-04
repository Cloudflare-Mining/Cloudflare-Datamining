# IBM Telemetry Js Config Generator

Script automation for generating [@ibm/telemetry-js](https://github.com/ibm-telemetry/telemetry-js)
config files according to published schema.

Use this tool to automatically generate an
[@ibm/telemetry-js](https://github.com/ibm-telemetry/telemetry-js) compatible `telemetry.yml` file
with your project-specific configurations.

> **Note**  
> For v1, please see
> [v1 docs](https://github.com/ibm-telemetry/telemetry-js-config-generator/tree/v1.0.3?tab=readme-ov-file#ibm-telemetry-js-config-generator)

## Commands

```
Usage: ibmtelemetry-config [options] [command]

Options:
  -h, --help          display help for command

Commands:
  generate [options]  Generate IBM telemetry config file.
  update [options]    Modify in whole or part an existing telemetry config file
  npm                 Add, update or remove npm scope
  js                  Add, update or remove js scope
  jsx                 Sdd, update or remove jsx scope
  help [command]      display help for command
```

### Generate

From the root of the project that needs to be instrumented with IBM Telemetry, run the `generate`
command:

`npx -y @ibm/telemetry-js-config-generator generate --id sample-id --endpoint https://example.com/v1/metrics --files ./src/components/**/*.(tsx|js|jsx)`

> Note that it is not necessary for your package to directly install this package as a dependency.
> Instead, use `npx` to call the published collection script directly from the
> `@ibm/telemetry-js-config-generator` package.

Alternatively, if you decide to install the package as a dependency (to run it periodically within
your CI environment, for example), you can call the bin like so:

`ibmtelemetry-config generate --id sample-id --endpoint https://example.com/v1/metrics --files ./src/components/**/*.(tsx|js|jsx)`

A `telemetry.yml` file will be generated inside the cwd path, unless a file path is specified (see
[parameters](#parameters)). Verify that the generated output is correct before using the config
file.

```
Usage: ibmtelemetry-config generate [options]

Generate IBM telemetry config file.

Options:
  --id <project-id>            Project Id, should be obtained from the IBM Telemetry team
  --endpoint <endpoint>        URL of an OpenTelemetry-compatible metrics collector API endpoint. Used to post collected telemetry data to.
  -f, --files <files...>       List of files to scan for JSX Scope attributes, can be an array of path(s) or glob(s). Required to generate JSX scope options
  -i, --ignore <files...>      Files to ignore when scanning for JSX Scope attributes, in glob(s) form.
  -p, --file-path <file-path>  Path to create config file at, defaults to `telemetry.yml` (default: "telemetry.yml")
  --no-npm                     Disables config generation for npm scope
  --no-jsx                     Disables config generation for JSX scope
  --no-js                      Disables config generation for JS scope
  -h, --help                   display help for command
```

#### Example Usage

`npx -y @ibm/telemetry-js-config-generator generate --id sample-id --endpoint https://example.com/v1/metrics --files ./src/components/**/*.(tsx|js|jsx) --file-path ./packages/sample/telemetry.yml -i **/DataTable/**/*.tsx **/Copy/** --no-npm --no-js`

`ibmtelemetry-config generate --id sample-id --endpoint https://example.com/v1/metrics --no-jsx`

### Update

To update an existing telemetry config file, run the `update` command. You can use this command to
regenerate entirely a telemetry configuration or only in-part (see available parameters). Remember
to supply the `file path` parameter if your telemetry config is not at the default location.

```
Usage: ibmtelemetry-config update [options]

Modify in whole or part an existing telemetry config file

Options:
  --id <project-id>            Project Id, should be obtained from the IBM Telemetry team
  --endpoint <endpoint>        URL of an OpenTelemetry-compatible metrics collector API endpoint. Used to post collected telemetry data to.
  -f, --files <files...>       List of files to scan for JSX Scope attributes, can be an array of path(s) or glob(s). Required to generate JSX scope options
  -i, --ignore <files...>      Files to ignore when scanning for JSX Scope attributes, in glob(s) form.
  -p, --file-path <file-path>  Path to create config file at, defaults to `telemetry.yml` (default: "telemetry.yml")
  --no-npm                     Disables config generation for npm scope
  --no-jsx                     Disables config generation for JSX scope
  --no-js                      Disables config generation for JS scope
  -h, --help                   display help for command
```

#### Example Usage

`npx -y @ibm/telemetry-js-config-generator update --files ./src/components/**/*.(tsx|js|jsx)`

`ibmtelemetry-config update --no-jsx`

### npm

Use `npm` command along with `add`, `update` or `remove` subcommands. Remember to supply the
`file path` parameter if your telemetry config is not at the default location.

```
Usage: ibmtelemetry-config npm [options] [command]

Add, update or remove npm scope

Options:
  -h, --help        display help for command

Commands:
  add [options]     Add npm scope to current config file
  update [options]  Regenerate the npm scope
  remove [options]  Remove npm scope from current config file
  help [command]    display help for command
```

#### Subcommands

##### Add

```
Usage: ibmtelemetry-config npm add [options]

Add npm scope to current config file

Options:
  -p, --file-path <file-path>  Path to create config file at, defaults to `telemetry.yml` (default: "telemetry.yml")
  -h, --help                   display help for command
```

##### Update

```
Usage: ibmtelemetry-config npm update [options]

Regenerate the npm scope

Options:
  -p, --file-path <file-path>  Path to create config file at, defaults to `telemetry.yml` (default: "telemetry.yml")
  -h, --help                   display help for command
```

##### Remove

```
Usage: ibmtelemetry-config npm remove [options]

Remove npm scope from current config file

Options:
  -p, --file-path <file-path>  Path to create config file at, defaults to `telemetry.yml` (default: "telemetry.yml")
  -h, --help                   display help for command
```

#### Example Usage

`npx -y @ibm/telemetry-js-config-generator npm add`

`ibmtelemetry-config npm update`

`npx -y @ibm/telemetry-js-config-generator npm remove`

### jsx

Use `jsx` command along with `add`, `update` or `remove` subcommands. Remember to supply the
`file path` parameter if your telemetry config is not at the default location.

```
Usage: ibmtelemetry-config jsx [options] [command]

Add, update or remove jsx scope

Options:
  -h, --help        display help for command

Commands:
  add [options]     Add jsx scope to current config file
  update [options]  Regenerate the jsx scope
  remove [options]  Remove jsx scope from current config file
  help [command]    display help for command
```

#### Subcommands

##### Add

```
Usage: ibmtelemetry-config jsx add [options]

Add jsx scope to current config file

Options:
  -f, --files <files...>       List of files to scan for JSX Scope attributes, can be an array of path(s) or glob(s). Required to generate JSX scope options
  -i, --ignore <files...>      Files to ignore when scanning for JSX Scope attributes, in glob(s) form.
  -p, --file-path <file-path>  Path to create config file at, defaults to `telemetry.yml` (default: "telemetry.yml")
  -h, --help                   display help for command
```

##### Update

```
Usage: ibmtelemetry-config jsx update [options]

Regenerate the jsx scope

Options:
  -f, --files <files...>       List of files to scan for JSX Scope attributes, can be an array of path(s) or glob(s). Required to generate JSX scope options
  -i, --ignore <files...>      Files to ignore when scanning for JSX Scope attributes, in glob(s) form.
  -p, --file-path <file-path>  Path to create config file at, defaults to `telemetry.yml` (default: "telemetry.yml")
  -h, --help                   display help for command
```

##### Remove

```
Usage: ibmtelemetry-config jsx remove [options]

Remove jsx scope from current config file

Options:
  -p, --file-path <file-path>  Path to create config file at, defaults to `telemetry.yml` (default: "telemetry.yml")
  -h, --help                   display help for command
```

#### Example Usage

`npx -y @ibm/telemetry-js-config-generator jsx add -f ./src/components/**/*.(tsx|js|jsx) --ignore **/DataTable/**/*.tsx **/Copy/**`

`ibmtelemetry-config jsx update --files ./src/components/**/*.(tsx|js|jsx)`

`npx -y @ibm/telemetry-js-config-generator jsx remove`

### js

Use `js` command along with `add`, `update` or `remove` subcommands. Remember to supply the
`file path` parameter if your telemetry config is not at the default location.

```
Add, update or remove js scope

Options:
  -h, --help        display help for command

Commands:
  add [options]     Add js scope to current config file
  update [options]  Regenerate the js scope
  remove [options]  Remove js scope from current config file
  help [command]    display help for command
```

#### Subcommands

##### Add

```
Usage: ibmtelemetry-config js add [options]

Add js scope to current config file

Options:
  -p, --file-path <file-path>  Path to create config file at, defaults to `telemetry.yml` (default: "telemetry.yml")
  -h, --help                   display help for command
```

##### Update

```
Usage: ibmtelemetry-config js update [options]

Regenerate the js scope

Options:
  -p, --file-path <file-path>  Path to create config file at, defaults to `telemetry.yml` (default: "telemetry.yml")
  -h, --help                   display help for command
```

##### Remove

```
Usage: ibmtelemetry-config js remove [options]

Remove js scope from current config file

Options:
  -p, --file-path <file-path>  Path to create config file at, defaults to `telemetry.yml` (default: "telemetry.yml")
  -h, --help                   display help for command
```

#### Example Usage

`npx -y @ibm/telemetry-js-config-generator js add`

`ibmtelemetry-config js update`

`npx -y @ibm/telemetry-js-config-generator js remove`
