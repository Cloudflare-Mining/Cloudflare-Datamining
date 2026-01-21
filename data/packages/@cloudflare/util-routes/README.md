# Routes utility

> Wraps path-to-regexp with a convenient, type-safe tagged template function

## Installation

```sh
$ npm install @cloudflare/util-workers
```

## Examples

```typescript
import { route } from '@cloudflare/util-routes'

const apiRoute = route`/api/v4/accounts/${'accountId'}`

// toUrl requires `accountId` to be passed in according to the route pattern
apiRoute.toUrl()
//       ^^^^^^^ Type Error: { accountId: string } is required

apiRoute.toUrl({ accountId: '123' }) // => /api/v4/accounts/123

// Routes can be composed
const domainsRoute = route`${apiRoute}/domains`
domainsRoute.toUrl({ accountId: '123' }) // => /api/v4/accounts/123

const domainRoute = route`${domainsRoute}/${'domainName'}`
// Now accountId and domainName are required
// => /api/v4/accounts/123/domains/abc.com
domainRoute.toUrl({ accountId: '123', domainName: 'abc.com' })
```
