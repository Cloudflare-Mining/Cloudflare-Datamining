[![Build Status](https://travis-ci.org/cloudflare/ui-migration-stats.svg?branch=master)](https://travis-ci.org/cloudflare/ui-migration-stats)

# ui-migration-stats

Stats for migration and code base.

Migrating between frameworks can be hard. Having some way to quantify the migration can help with the process.
ui-migration-stats provides the specific dependency feedback and numbers related to each your frameworks.

To contribute look at [Contributing and Development](#contributing-and-development) or https://github.com/cloudflare/ui-migration-stats/blob/master/CONTRIBUTING.md

## Example

Say you were trying to migrate from BackboneJS to ReactJS OR maybe you've already started migrating a few modules/components to ReactJS.
You now want to see how much of your codebase is migrated and how much is still in Backbone. Additionally, you don't know if 
migrating your `super-important-module` will break something. This is where ui-migration-stats comes in, you can use the tool to 
quantify your migration and also look for dependencies in your codebase for your `super-important-module`. 
You can also consume the stats object outputs and make some pretty charts or have a timeline for your migration.

## Installation

```
yarn add ui-migration-stats
```
Or
```
npm install ui-migration-stats
```

## Usage

You can pass command line args to ui-migration-stats
```
stats --help

Usage: stats [options]

Options:

  -h, --help            output usage information
  -V, --version         output the version number
  -s, --subdirectories  Display subdirectories
  -S, --silent          Be silent
  -c, --config <path>   Set config path, defaults to ./stats.conf.json
```

## Configuring ui-migration-stats

The script reads a config file that is named `stats.conf.json` by default.
The example uses a file called `stats-example.conf.json` which is passed in using a --config flag.
You can edit your package.json to use your config file as required.

```
"scripts": {
  "stats": "stats --config='./your-stats.conf.json'",
}
```

It has the following structure

```
const config = {
  framework1: {
    name: 'Backbone',
    src: {
      exclude: /test/,
      filetypes: ['.js', '.handlebars', '.json'],
      path: './example/javascripts/'
    },
    test: {
      filetypes: ['.js', '.handlebars', '.json'],
      path: './example/tests/',
      includeOnly: /overview/
    }
  },
  framework2: {
    name: 'React',
    src: {
      filetypes: ['.js', '.json'],
      path: './example/react/src/'
    },
    test: {
      filetypes: ['.js', '.json'],
      path: './example/react/test/'
    }
  },
  options: {
    modules: ['Cell', 'Header'],
    outputFilename: './out/stats-out.json',
    silent: false,
    sort: true,
    subdirectories: false,
    unconditionalLoc: true,
    webpackStatsFile: './example/webpack-stats-example.json',
    webpackStatsOutputFilename: './out/webpack-stats-out.json'
  }
};

module.exports = config;
```

### `framework1` (Required), `framework2` (Required)

| Key   | Required | Type |Default|Description |
|-------------|----------|----------|----------|-------------|
| `name`    | yes       | string | none | Name of the framework |
| `src`    | yes       | string| none | Object that holds  framework src keys |
| `test`    | no      | string | none| Object that holds  framework src keys |

### `src` (Required), `test` (Optional)

| Key   | Required | Type |Default|Description |
|-------------|----------|----------|----------|-------------|
| `exclude`    | no      | regex | none| Regex that excludes matching files or folders |
| `filetypes`    | no      | array | includes all files |An array of filetypes to include `[".js",".handlebars",".json"]`. Although this is not required, it is better to include file types so that `.DS_Store` and other hidden files are not included. |
| `includeOnly`    | no      | regex | none| Includes only files and folders matching this regex. Useful for complex folder structures. |
| `path`    | yes      | string | none| Path to the src or test directory. **NOTE** Paths are relative to cwd, unless absolute paths are provided |


### `options` (Optional)

| Key   | Required | Type |Default|Description |
|-------------|----------|----------|----------|-------------|
| `modules`    | no       | array | Analyzes all modules present in `webpackStatsFile` | It will analyze any module that contains the substrings present in this array. For example `['some']` will include all modules with some in their name i.e. `some-module` will be included. If not present in config, all modules will be included. |
| `outputFilename`    | no       | string | none | Path and name of output file. If key is not present, it will **NOT** output a stats JSON file. If directory is not present it will create one for you. |
| `silent`    | no       | boolean | false | Don't output to stdout |
| `subdirectories`    | no      | boolean  |false| Flag to include subdirectories in output JSON file/stdout, **NOTE** For accuracy and completeness, this option will not prevent the traversal of the subdirectories. It will only exclude the subdirectories from the final output JSON/stdout. Defaults to `false`   |
| `sort`    | no       | boolean | false | Sorts the output of `webpack-stats` by number of includes if true  |
| `unconditionalLoc`    | no       | boolean | false | This option is useful when you have code written in an unrecognized language or if you have a lot of schema files. You will get a warning about skipped files if there is an unrecognized language. Use this option to add those files as pure source code i.e. ignoring comments and other language constructs. If you're confused, it's best to set this to true. |
| `webpackStatsFile`    | no       | string | none | Path and name of webpack stats input  JSON file. If not present, it will skip webpack analysis |
| `webpackStatsOutputFilename`    | no       | string | none | Path and name of webpack stats output  JSON file. If key is not present, it will **NOTE** output a webpack stats JSON file.If directory is not present it will create one for you. |

**NOTE** All paths are relative to cwd, unless absolute paths are provided.

## Generating webpack-stats.json 

You will need to generate your project's webpack stats file. This can be done using the webpack cli or through your webpack config.

You can use the following command to generate your file

```webpack --progress --json > webpack-stats.json```

**NOTE: If for some reason your file is empty or if you're watching files in webpack, make sure your environment is set to production.** 
Use this to set your environment to production for the json output 

```NODE_ENV=production webpack --progress --json > webpack-stats.json```

webpack stats config: https://webpack.js.org/configuration/stats/

Empty file: http://stackoverflow.com/questions/41520410/webpack-stats-json-file-is-empty


## Output JSON
This is what standard output json file looks like

### Migration Stats
```
{
  "timestamp": "2017-04-10T17:02:25.590Z",
  "framework1": {
    "name": "Backbone",
    "srcPath": "./example/javascripts/",
    "testPath": "./example/tests/",
    "filetypes": [
      ".js",
      ".handlebars",
      ".json"
    ],
    "files": 6,
    "tests": 3,
    "percentage": 53,
    "srcSubdirectories": [
      {
        "Path": "./example/javascripts/",
        "length": 2
      },
      {
        "Path": "example/javascripts/modules/traffic",
        "length": 1
      },
      {
        "Path": "example/javascripts/modules/traffic/lib",
        "length": 1
      }
    ],
    "testsSubdirectories": [
      {
        "Path": "./example/tests/",
        "length": 1
      },
      {
        "Path": "example/tests/modules",
        "length": 1
      }
    ],
    "filesLoc": {
      "total": 465,
      "source": 403,
      "comment": 14,
      "single": 14,
      "block": 0,
      "mixed": 1,
      "empty": 40,
      "todo": 0,
      "unrecognized": 9
    },
    "testsLoc": {
      "total": 240,
      "source": 201,
      "comment": 9,
      "single": 9,
      "block": 0,
      "mixed": 0,
      "empty": 30,
      "todo": 0
    },
    "percentageLoc": 63
  },
  "framework2": {
    "name": "React",
    "srcPath": "./example/react/src/",
    "testPath": "./example/react/test/",
    "filetypes": [
      ".js",
      ".json"
    ],
    "files": 3,
    "tests": 5,
    "percentage": 47,
    "srcSubdirectories": [
      {
        "path": "./example/react/src/",
        "length": 2
      },
      {
        "path": "example/react/src/containers",
        "length": 1
      },
      {
        "path": "example/react/src/components",
        "length": 1
      }
    ],
    "testsSubdirectories": [
      {
        "path": "./example/react/test/",
        "length": 1
      },
      {
        "path": "example/react/test/selectors",
        "length": 1
      }
    ],
    "filesLoc": {
      "total": 72,
      "source": 53,
      "comment": 7,
      "single": 4,
      "block": 3,
      "mixed": 0,
      "empty": 12,
      "todo": 1
    },
    "testsLoc": {
      "total": 341,
      "source": 306,
      "comment": 0,
      "single": 0,
      "block": 0,
      "mixed": 0,
      "empty": 35,
      "todo": 0
    },
    "percentageLoc": 37
  }
}
``` 
### Output keys
| Key   | Description |
|-------------|----------|
| `timestamp`    | Timestamp when the script was run |
| `name`    | Name of the framework |
| `path`     |Path to src directory of framework |
| `testPath`    | Path to test directory of framework |
| `filetypes`    |An array of filetypes to include `[".js",".handlebars",".json"]`|
| `files`    | Number of files found in framework source directory |
| `tests`    | Number of files found in framework source directory |
| `percentage`    | Percentage of total codebase by number of files  |
| `srcSubdirectories`    | Array of source subdirectories and the number of subdirectories they include i.e. `length` |
| `testsSubdirectories`    | Array of test subdirectories and the number of subdirectories they include i.e. `length` |
| `filesLoc`    | The number of lines of code in the source directory. See [Lines of code break down](#lines-of-code-breakdown) for details |
| `percentageLoc`    | Percentage of total codebase by lines of code  |

#### Lines of code breakdown
* total - total lines of code
* source - source lines of code
* comment - comment lines of code
* single - single line comments
* block - block comments
* mixed - mixed comments
* empty - empty lines
* todo - todos found in code
* unrecognized - unconditionally added lines i.e. unrecognized lines

### Module Stats

```
{
  "timestamp": "2017-04-07T16:42:28.531Z",
  "webpackStats": [
    {
      "module": "some-component",
      "entry": "../~/some-component/lib/index.js",
      "exports": [
        "some-sub-component",
        "some-other-sub-component"
      ],
      "count": 3,
      "issuers": [
      "../react/src/issuer1.js",
      "../react/src/issuer2.js",
      "../react/src/issuer3.js"
      ]
    }
  ]
}
```
### Output keys
| Key   | Description |
|-------------|----------|
| `timestamp`    | Timestamp when the script was run |
| `module`    | Name of the module |
| `entry`     |Entry point of module|
| `exports`    | An array of module exports |
| `count`    |Number of times the module was included|
| `issuers`    |  An array of paths where the module was included |


## Contributing and Development

To get started run:

```sh
git clone git@github.com:cloudflare/ui-migration-stats.git
```

or for https
```sh
git clone https://github.com/cloudflare/ui-migration-stats.git
cd ui-migration-stats
yarn install
yarn build
yarn demo
```
The demo task runs the tool on the example app found in `example`. 
Example code is from various random open source libraries.


## Development tasks

```sh
yarn build # Build the lib folder
yarn dev # Watch for changes in src and rebuild
yarn dev-test # Watch for changes in src,test and rebuild
yarn run clean # Delete node_modules and coverage folders
yarn lint # Run the eslint
yarn test # Run the tests
```

### Tests :)
```
yarn test
```

### Linting
```
yarn lint
```
You can also format your code using
```
yarn format
``` 
