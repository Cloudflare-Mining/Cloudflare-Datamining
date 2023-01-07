# db-connect

### This is an experimental project, it has not yet been released and may be removed at any time.

Connect your SQL database to [Cloudflare Workers](https://workers.cloudflare.com/). Import this lightweight Javascript library to execute commands or cache queries from a database through an [Argo Tunnel](https://developers.cloudflare.com/argo-tunnel/quickstart/). Although designed for Workers, this library can be used in any environment that has access to the [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax) and [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#Syntax) APIs.

# Installation

```bash
npm i -s @cloudflare/db-connect
```

# Example

```js
import { DbConnect } from '@cloudflare/db-connect'

const db = new DbConnect({
  host: 'sql.mysite.com',
  clientId: 'xxx',
  clientSecret: 'xxx'
})

async function findBirthday(name) {
  const resp = await db.submit({
    statement: 'SELECT * FROM users WHERE name = ? LIMIT 1',
    arguments: [ name ],
    cacheTtl: 60
  })

  if(!resp.ok) {
    return new Error('oops! could not find user.')
  }

  const users = await resp.json()
  // [ { "id": 1111,
  //   "name": "Matthew",
  //   "birthday": "2009-07-01" } ]

  return users[0].birthday
}

findBirthday('Matthew').then(bday => console.log(bday))
```

# Quickstart

`db-connect` requires that you setup Cloudflare Access, Argo Tunnel, and Workers. You can use the quickstart command below or read the [`quickstart`](QUICKSTART.md) file for details on how to set this up yourself.

```
npm i -g @cloudflare/db-connect
db-connect-quickstart
```

# Databases

`db-connect` supports the following database drivers out-of-the-box. If your database is not explicitly on the list it may still be supported. For instance, MariaDB uses the MySQL protocol and CockroachDB uses the PostgreSQL protocol.

* [PostgreSQL](https://github.com/lib/pq)
* [MySQL](https://github.com/go-sql-driver/mysql)
* [MSSQL](https://github.com/denisenkom/go-mssqldb)
* [Clickhouse](https://github.com/kshvakov/clickhouse)
* [SQLite3](https://github.com/mattn/go-sqlite3)

In the future, we may consider adding support for more databases such as Oracle, MongoDB, and Redis. If you want to contribute you can track the code in the [`cloudflared`](https://github.com/cloudflare/cloudflared/tree/master/dbconnect) repository.

# Documentation

## `new DbConnect(options)`

```js
import { DbConnect } from '@cloudflare/db-connect'

const db = new DbConnect({
  host,         // required, hostname of your Argo Tunnel running in db-connect mode.
  clientId,     // recommended, client id from your Access service token.
  clientSecret, // recommended, client secret from your Access service token.
})
```

## `Promise<Response> db.ping()`

```js
import { DbConnect } from '@cloudflare/db-connect'

const db = new DbConnect({...})

async function myPing() {
  const resp = await db.ping()
  if(resp.ok) {
    return true
  }
  throw new Error(await resp.text())
}
```

## `new Command(options)`

```js
import { Command } from '@cloudflare/db-connect'

const cmd = new Command({
  statement, // required, the database statement to submit.
  arguments, // optional, either an array or object of arguments.
  mode,      // optional, type of command as either 'query' or 'exec'.
  isolation, // optional, type of transaction isolation, defaults to 'none' for no transactions.
  timeout,   // optional, number of seconds before a timeout, defaults to infinite.
  cacheTtl,  // optional, number of seconds to cache responses, defaults to -1.
  staleTtl,  // optional, after cacheTtl expires, number of seconds to serve stale, defaults to -1.
})
```

## `Promise<Response> db.submit(command)`

```js
import { DbConnect, Command } from '@cloudflare/db-connect'

const db = new DbConnect({...})

const cmd = new Command({
  statement: 'SELECT COUNT(*) AS n FROM books',
  cacheTtl: 60
})

async function mySubmit() {
  const resp = await db.submit(cmd)
  if(resp.ok) {
    return await resp.json() // [ { "n": 1234 } ]
  }
  throw new Error(await resp.text())
}
```

# Testing

If you want to test `db-connect` without a database you can use the following command to create an in-memory SQLite3 database:
```bash
cloudflared db-connect --playground
```

# Beta Access

We are looking for beta testers who want to create applications using `db-connect` using Cloudflare Workers. If you have a use-case or an idea, [reach out](mailto:ashcon@cloudflare.com) to us and we'll consider giving you with special access!
