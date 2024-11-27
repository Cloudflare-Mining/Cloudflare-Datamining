# ts-miniflare

[![npm](https://img.shields.io/npm/v/ts-miniflare)](https://npmjs.com/package/ts-miniflare)
[![npm](https://img.shields.io/npm/dt/ts-miniflare)](https://npmjs.com/package/ts-miniflare)


> Run TypeScript Cloudflare Workers with Miniflare

## Prerequisites

This project requires Node.js LTS (currently version 20.1.0 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

## Table of contents

- [Project Name](#ts-miniflare)
    - [Prerequisites](#prerequisites)
    - [Table of contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
        - [Use inline script](#use-inline-script)
        - [Use script file](#use-script-file)
    - [Versioning](#versioning)
    - [Authors](#authors)
    - [License](#license)

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To install and set up the library, run:

```sh
$ npm install -S ts-miniflare
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev ts-miniflare
```

Or if you prefer using Pnpm:

```sh
$ pnpm add -D ts-miniflare
```

## Usage

> [!NOTE]
> We currently only supports ES module format Cloudflare Worker.

### Use inline script

```typescript
import {Miniflare} from "ts-miniflare";

const mf = new Miniflare({
  module: true,
  script: `
  export default {
    async fetch(request, env, ctx) {
      return new Response("Hello Miniflare!");
    }
  }
  `
})
```

### Use script file

```typescript title="index.ts"
export default {
  async fetch(request, env, ctx) {
    return new Response("Hello Miniflare!");
  }
}
```

```typescript title="index.test.ts"
import {Miniflare} from "ts-miniflare";

const mf = new Miniflare({
  module: true,
  scriptPath: "index.ts"
})
```

### Running the tests

```sh
$ npm test
```

### Building a distribution version

```sh
$ npm run build
```

This task will create a distribution version of the project
inside your local `dist/` folder

### Serving the distribution version

```sh
$ npm run serve:dist
```

This will use `lite-server` for servign your already
generated distribution version of the project.

*Note* this requires
[Building a distribution version](#building-a-distribution-version) first.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ZhaoTzuHsien/ts-miniflare/tags).

## Authors

* **Chao Tzu-Hsien** - *Initial work* - [ZhaoTzuHsien](https://github.com/ZhaoTzuHsien)

See also the list of [contributors](https://github.com/ZhaoTzuHsien/ts-miniflare/contributors) who participated in this project.

## License

[MPL-2.0](https://www.mozilla.org/en-US/MPL/2.0/) © Chao Tzu-Hsien
