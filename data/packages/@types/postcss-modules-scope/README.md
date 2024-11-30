# Installation
> `npm install --save @types/postcss-modules-scope`

# Summary
This package contains type definitions for postcss-modules-scope (https://github.com/css-modules/postcss-modules-scope).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/postcss-modules-scope.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/postcss-modules-scope/index.d.ts)
````ts
import { PluginCreator } from "postcss";

declare namespace scope {
    interface Options {
        generateScopedName?:
            | ((
                name: string,
                path: string,
                css: string,
            ) => string)
            | undefined;

        generateExportEntry?:
            | ((
                name: string,
                scopedName: string,
                path: string,
                css: string,
            ) => { key: string; value: string })
            | undefined;

        exportGlobals?: boolean | undefined;
    }
}

declare const creator: PluginCreator<scope.Options>;
export = creator;

````

### Additional Details
 * Last updated: Tue, 07 Nov 2023 09:09:39 GMT
 * Dependencies: [postcss](https://npmjs.com/package/postcss)

# Credits
These definitions were written by [Jeow Li Huan](https://github.com/huan086).
