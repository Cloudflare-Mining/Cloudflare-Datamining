# frontend-config-scope

[![NPM Version](https://img.shields.io/npm/v/frontend-config-scope.svg)](https://npmjs.org/package/frontend-config-scope)
[![Build Status](https://github.com/kibertoad/frontend-config-scope/workflows/ci/badge.svg)](https://github.com/kibertoad/frontend-config-scope/actions)
[![Coverage Status](https://coveralls.io/repos/kibertoad/frontend-config-scope/badge.svg?branch=main)](https://coveralls.io/r/kibertoad/frontend-config-scope?branch=main)

Config management for the frontend

## Basic example

```ts
import { ConfigScope } from 'frontend-config-scope'

const envVars = {
  ...import.meta.env,
}

const config = new ConfigScope(envVars)

export const SOME_API_URL = config.getMandatory('API_URL') // this will throw an error if not set
export const BUGSNAG_API_KEY = config.getOptional('VITE_BUGSNAG_API_KEY', '') // this will use default value if not set
export const ENV = config.getMandatoryOneOf('VITE_ENV', ['local', 'development', 'production']) // this will throw an error if not one of the supported values
```
