# cross-cf


Cross-environment Cloudflare [DO](https://developers.cloudflare.com/workers/runtime-apis/durable-objects/) and [KV](https://developers.cloudflare.com/workers/runtime-apis/kv) access.

I kept needing to inject things into my local (miniflare) or remote KV, or interact with my DO, in scripts or unit-tests that run in node. This lets you mess with them directly, and it keeps the same API in all environments.

You can chack out the [example](https://github.com/konsumer/cross-cf/blob/main/example) for an idea of how to use it in your own thing. Basically, I have a graphql endpoint worker that I want to be able to migrate data to/from and run unit-tests on it locally.


## installation

```
npm i -D cross-cf
```

## usage

### CLI

Included is a CLI you can use to migrate KV, since it's such a useful task. Get help like this:

```sh
npx cross-cf
```

### KV

KV can be used remotely (if you have an API key and the ID of the KV) or locally (using miniflare filesystem, directly.)

#### basic setup

```js
import { CrossKV } from 'cross-cf'

const MYDB = new CrossKV('MYDB')

await MYDB.put('coolA', JSON.stringify({ cool: true }))
await MYDB.put('coolB', JSON.stringify({ cool: true }))
await MYDB.put('coolB', JSON.stringify({ cool: true }))

console.log(await MYDB.list())

```

#### local

This is the default `target`. It uses local miniflare perisitant file-system-based KV, so you can set things up for unit-tests, or mock-scripts, or whatever. You could also just use it as a general purpose, local JSON-based KV.

You can also set the path where your database is:

```js
const MYDB = new CrossKV('MYDB', {filepath: './some/other/place/where/I/keep/my/db'})
```

#### remote

This lets you use a KV id and API creds to interact with a remote KV.

Set these environment variables to get auth working automatically:

```sh
CF_TOKEN      # your auth-token
CF_ACCOUNTID  # your worker's accountID
```

```js
const MYDB = new CrossKV('MYDB', { target: 'remote', kvID: 'XXX' })
```

You can also setup auth, directly:

```js
const MYDB = new CrossKV('MYDB', {
  target: 'remote',
  kvID: 'XXX',
  accountToken: 'XXX',
  accountID: 'XXX'
})
```

#### memory

This can be handy for unit-tests, where you don't want to persist anything, but you want the same API.

```js
const MYDB = new CrossKV('MYDB', { target: 'memory' })
```

#### cf

This `target` means that you want to use KV from actual cloudflare (or inside miniflare.) I'm not totally sure what the usecase is, but this will let you keep your code more similar in different environments, which is the overall goal of this library.

```js
// this will use the global KV MYDB
const MYDB = new CrossKV('MYDB', { target: 'cf' })

// this will use MYDB in env from esm worker request-handler
const MYDB2 = new CrossKV('MYDB', { target: 'cf', env})
```

#### bulk

> **WARNING** These are not part of the original KV API

2 common needs when hitting remote data are bulk `put` and `delete`, so I added that to the API for all `target`s, too. If you use it on non-remote, it will just call the corresponding single function on each record. Your `key` and `value` must both be strings.

```js
await MYDB.bulkput([
  { key: '0', value: 'A' },
  { key: '1', value: 'B' },
  { key: '2', value: 'C' },
  { key: '3', value: 'D' },
  { key: '4', value: 'E' },
  { key: '5', value: 'F' },
  { key: '6', value: 'G' },
  { key: '7', value: 'H' },
  { key: '8', value: 'I' },
  { key: '9', value: 'J' },
  { key: '10', value: 'J' },
  { key: '11', value: 'K' },
  { key: '12', value: 'L' },
  { key: '13', value: 'M' },
  { key: '14', value: 'N' },
  { key: '15', value: 'O' },
  { key: '16', value: 'P' },
  { key: '17', value: 'Q' },
  { key: '18', value: 'R' },
  { key: '19', value: 'S' },
  { key: '20', value: 'T' },
  { key: '21', value: 'U' },
  { key: '22', value: 'V' },
  { key: '23', value: 'W' },
  { key: '24', value: 'X' },
  { key: '25', value: 'Y' },
  { key: '26', value: 'Z' }
])

await MYDB.bulkdelete(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'])
```


#### examples

Here is an example migration script. I'm not paging in this example, so this will be limited to 1000 records, but you can page records too, if you want.


```js
import { CrossKV } from 'cross-cf'
// or const { CrossKV } = require('cross-cf')

// I also setup CF_TOKEN, CF_ACCOUNTID for auth creds
const { CF_MYDB_ID } = process.env

const db = {
  local: new CrossKV('MYDB'),
  remote: new CrossKV('MYDB', { kvID: CF_MYDB_ID, target: 'remote' })
}

async function main() {
  const { keys } = await db.remote.list()
  for (const r of await keys) {
    db.local.put(r.name, await db.remote.get(r.name))
  }
}
main()
```

To go the other way, `bulkput` is probly a better choice for performance. Since it works the same locally, but is better remote, we could write a more general migrator that works in both directions, with any KVs, like this:

```js
import { CrossKV } from 'cross-cf'

const [, progname, name, from, to] = process.argv
if (!name || !from || !to) {
  console.error(`Usage: ${progname} NAME FROM:LOCATION TO:LOCATION`)
  console.error('')
  console.error('\tWhere targets look like "local:dir" or "remote:kvID"')
  console.error('')
  console.error('\tExamples:')
  console.error(`\t\t${progname} MYDB 'local:.mf/kv' 'remote:XXX'   # copy local miniflare KV "MYDB" to remote kvID XXX`)
  process.exit(1)
}

const [fromTarget, fromPath] = from.split(':')
const [toTarget, toPath] = to.split(':')

const db = {
  local: toTarget === 'local' ? new CrossKV(name, { filepath: toPath }) : new CrossKV(name, { target: 'remote', kvID: toPath }),
  remote: fromTarget === 'local' ? new CrossKV(name, { filepath: fromPath }) : new CrossKV(name, { target: 'remote', kvID: fromPath })
}

async function main () {
  const { keys } = await db.remote.list()
  const records = await Promise.all(keys.map(async ({ name }) => {
    const value = await db.remote.get(name)
    return { key: name, value }
  }))
  await db.local.bulkput(records)
}
main()
```

This is very similar to the CLI I include.

### DO

#### remote

Durable Objects are not exposed in any way to external access by default, so you will need to mount the fetch of your DO onto a worker, to make it work. Here is example client code:

```js
import { CrossDO } from 'cross-cf'
// or const { CrossDO } = require('cross-cf')

const POKEMON = new CrossDO('https://mine.workers.dev')

const DEMO_QUERY = `
{
  pokemon {
    id
    name
  }
}
`

async function main() {
  // works just like CF DOs
  const pokemon = POKEMON.get(POKEMON.idFromName('test'))
  
  // on real DO, first arg should be user-request or new Request(new URL('YOUR_URL')) if you are in a cron-job or whatever. It will be ignored here, but I use same format as I would use in a cron-job.
  const pokemon = await pokemon.fetch(new Request(new URL('https://pokemon.name.workers.dev')), { headers: { 'content-type': 'application/json', body: JSON.stringify({ query: DEMO_QUERY }) } })
}
main()
```

Your worker DO proxy will look something like this:

```js
export default {
  async fetch (request, env) {
    // only service application/json requests, like graphql
    if (request.headers.get('content-type') === 'application/json') {
      // get an instance of the DO for this region, and run the user's graphql query on it
      if (!env?.POKEMON) {
        console.error('DurableObject bindings have broken.')
      }
      const pokemon = env.POKEMON.get(env.POKEMON.idFromName(request.cf.colo))
      return pokemon.fetch(request)
    }

    return new Response('<h1>Nothing to see here.</h1>', {
      headers: {
        'content-type': 'text/html',
      }
    })
  }
}
```

This is a simple API example that will pass user-requests on to the DO, if the content-type is JSON. You will of course need to bind `POKEMON` to your DO in your worker, [in the regular way](https://developers.cloudflare.com/workers/learning/using-durable-objects/). You can do anything else you want in your worker, like check for auth-tokens in headers, or throttle requests, etc.

### why?

You may ask yourself "Why should I do this instead of just using a regular `fetch` or a nice graphql client directly with my worker?" That is a fair question. That would totally work, and this library is designed around workers that are setup to accomodate that. Main thing I like about this style is I can swap out the DO and it works in both environments seemlessly, which is good for library-code (like if you wanted to wrap your DO/remote in a client-library that works in browser, node, other CF-workers, DOs, cron-jobs, etc.)


### testing

One handy side-effect of this stuff is you will get an interface that works the same as the real thing, but can do remote requests, that you can mock (like with [jest](https://jestjs.io/docs/mock-functions)) and then make your code do stuff. You can mock `cross-fetch` module or global fetch for remote requests (and make them local calls you can look at), or just mock the interface directly. For my stuff, I like unit-tests that could run on the real DO if I set it up (for instant integration tests.) It's also handy if you are copy/pasting text from some worker-code. See [test.js](https://github.com/konsumer/cross-cf/blob/main/test.js) for some examples. You can look at [example/](https://github.com/konsumer/cross-cf/blob/main/example) for an example worker project.


## todo

- read wrangler.toml for named KV, and use less config (ids, etc)
- allow lookup (from remote) of KV by name (not ID)
- put throttling limits and fail-recovery into API stuff
