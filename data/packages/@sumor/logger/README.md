# logger

A [Sumor Cloud](https://sumor.cloud) Tool.  
[More Documentation](https://sumor.cloud/logger)

This is a lightweight logger for Node.JS.
It can output logs in different levels, and you can customize the scope, id, and timezone.

[![CI](https://github.com/sumor-cloud/logger/actions/workflows/ci.yml/badge.svg)](https://github.com/sumor-cloud/logger/actions/workflows/ci.yml)
[![Test](https://github.com/sumor-cloud/logger/actions/workflows/ut.yml/badge.svg)](https://github.com/sumor-cloud/logger/actions/workflows/ut.yml)
[![Coverage](https://github.com/sumor-cloud/logger/actions/workflows/coverage.yml/badge.svg)](https://github.com/sumor-cloud/logger/actions/workflows/coverage.yml)
[![Audit](https://github.com/sumor-cloud/logger/actions/workflows/audit.yml/badge.svg)](https://github.com/sumor-cloud/logger/actions/workflows/audit.yml)

## Installation

```bash
npm i @sumor/logger --save
```

## Prerequisites

### Node.JS version

Require Node.JS version 18.x or above

### require Node.JS ES module

As this package is written in ES module,
please change the following code in your `package.json` file:

```json
{
  "type": "module"
}
```

## Usage

### General Usage

```js
import Logger from '@sumor/logger'
const logger = new Logger()

logger.trace('Hello World!')
// You will see the following output:
// 2020-01-01 00:00:00.000 TRACE MAIN - Hello World!
```

### Change Scope

For some case, we need categorize logs. `scope` is used for this purpose.

```js
import Logger from '@sumor/logger'
const logger = new Logger({
  scope: 'DEMO'
})
logger.trace('Hello World!')
// You will see the following output:
// 2020-01-01 00:00:00.000 TRACE DEMO - Hello World!
```

### Identifier User

For some case, we need identifier user. `id` is used for this purpose.

```js
import Logger from '@sumor/logger'
const logger = new Logger({
  id: 'USER001'
})
logger.trace('Hello World!')
// You will see the following output:
// 2020-01-01 00:00:00.000 TRACE MAIN USER001 - Hello World!
```

### Change Level

Most of the time, we only need to output logs of a certain level. Then we can decide if store and display it or not.

```js
import Logger from '@sumor/logger'
const logger = new Logger()
logger.trace('Hello World!') // trace is the lowest level, all logs will be output
logger.debug('Hello World!')
logger.info('Hello World!')
logger.warn('Hello World!')
logger.error('Hello World!')
logger.fatal('Hello World!') // fatal is the highest level, only critical error will be output
```

### Change Timezone

```js
import Logger from '@sumor/logger'
const logger1 = new Logger({
  offset: 2 * 60 // UTC+2 offset is 2 hours
})
logger1.info('Hello World!')
// You will see the following output:
// 2020-01-01 02:00:00.000 INFO MAIN - Hello World!

const logger2 = new Logger({
  offset: 8 * 60 // UTC+8 offset is 8 hours
})
logger2.info('Hello World!')
// You will see the following output:
// 2020-01-01 08:00:00.000 INFO MAIN - Hello World!
```

### Predefined Code

```js
import Logger from '@sumor/logger'
const code = {
  trace: {
    HTTP_ACCESS: 'The user accesses via HTTP and the IP address is {ip}'
  },
  debug: {
    USER_TOKEN_LOADED: 'The user login information is read and the user ID is {id}'
  },
  info: {
    USER_LOGIN: 'The user logs in and the user ID is {id}'
  },
  warn: {
    USER_LOGOUT: 'The user logs out and the user ID is {id}'
  },
  error: {
    USER_LOGIN_FAILED: 'The user login failed and the user ID is {id}'
  },
  fatal: {
    USER_LOGIN_BLOCKED: 'The user login is blocked and the user ID is {id}'
  }
}
const i18n = {
  zh: {
    USER_LOGIN: '用户登录，用户ID为{id}'
  }
}
const logger1 = new Logger({
  code,
  i18n
})

logger1.code('USER_LOGIN', { id: 'USER001' })
// You will see the following output:
// 2020-01-01 00:00:00.000 INFO MAIN - The user logs in and the user ID is USER001

const logger2 = new Logger({
  code,
  i18n,
  language: 'zh-US'
})

logger2.code('USER_LOGIN', { id: 'USER001' })
// You will see the following output:
// 2020-01-01 00:00:00.000 INFO MAIN - The user logs in and the user ID is USER001

const logger3 = new Logger({
  code,
  i18n,
  language: 'zh-CN'
})

logger3.code('USER_LOGIN', { id: 'USER001' })
// You will see the following output:
// 2020-01-01 00:00:00.000 INFO MAIN - 用户登录，用户ID为USER001
```

### Global Language Setting

```js
process.env.LANGUAGE = 'zh-CN'
import Logger from '@sumor/logger'

const code = {
  info: {
    USER_LOGIN: 'The user logs in and the user ID is {id}'
  }
}
const i18n = {
  zh: {
    USER_LOGIN: '用户登录，用户ID为{id}'
  }
}
const logger = new Logger({
  code,
  i18n
})

logger.code('USER_LOGIN', { id: 'USER001' })
// You will see the following output:
// 2020-01-01 00:00:00.000 INFO MAIN - 用户登录，用户ID为USER001
```

### Filter Level

When you want to filter logs by level, you can use the following code:

```js
import Logger from '@sumor/logger'
const logger = new Logger({
  level: 'info'
})
logger.trace('Hello World!') // trace is the lowest level, will not be output
logger.debug('Hello World!') // debug is lower than info, will not be output
logger.info('Hello World!') // info is the same as info, will be output
logger.warn('Hello World!') // warn is higher than info, will be output
logger.error('Hello World!') // error is higher than info, will be output
logger.fatal('Hello World!') // fatal is the highest level, will be output
```

When you use this library cross multiple libraries, you can use the following code:

```js
import Logger from '@sumor/logger'
const logger = new Logger()
process.env.LOG_LEVEL = 'info'

logger.trace('Hello World!') // trace is the lowest level, will not be output
logger.debug('Hello World!') // debug is lower than info, will not be output
logger.info('Hello World!') // info is the same as info, will be output
logger.warn('Hello World!') // warn is higher than info, will be output
logger.error('Hello World!') // error is higher than info, will be output

process.env.LOG_LEVEL = 'warn' // real-time change log level
logger.info('Hello World!') // info is lower than warn, will not be output
```
