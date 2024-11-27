# is-cloudflare-ip

little module to validate ip come from Cloudflare

# Usage
```typescript
import { CloudflareIP } from '@cylution/is-cloudflare-ip'
// js
// const { CloudflareIP } = require('@cylution/ip-cloudflare-ip')

/**
 * Cloudflare ip list
 * IPv4: https://www.cloudflare.com/ips-v4
 * IPv6: https://www.cloudflare.com/ips-v6
 */

const cloudflareIP = new CloudflareIP({
  v4: [], // initial cidr ipv4 list
  v6: [], // initial cidr ipv6 list
})
await cloudflareIP.update() // update latest list from Cloudflare
/**
 * use cached list Sep, 06 2021
 * const cloudflareIP = new CloudflareIP()
 */

// P/S: list demo stolen from https://www.npmjs.com/package/cloudflare-ip

// validate should detect ip v4 or v6
cloudflareIP.validate('103.21.244.0') // true
cloudflareIP.validate('2400:cb00:0000::0000') // true
cloudflareIP.validate('noop') // false
cloudflareIP.validate('127.0.0.1') // false

// v4 only
cloudflareIP.validateV4('103.21.244.0') // true
cloudflareIP.validateV4('2400:cb00:0000::0000') // false

// v6 only
cloudflareIP.validateV6('103.21.244.0') // false
cloudflareIP.validateV6('2400:cb00:0000::0000') // true
```

# Methods

**update(interval?: number, onError?: Function)** - Update subnet list
* `interval: number` do fetch list after a specified number of `milliseconds` (using setTimeout). Must greater than 0
* `onError: (error) => void` call if update list failed

**destroyInterval()** - destroy interval update

**validate(ip: string)** check if IP (both v4/v6) is valid and come from Cloudflare

**validateV4(ipV4: string)** check if IP is V4 and come from Cloudflare

**validateV6(ipV6: string)** check if IP is V6 and come from Cloudflare
