<!----- BEGIN GHOST DOCS HEADER ----->

# d1-driver

<!----- BEGIN GHOST DOCS BADGES ----->

<a href="https://npmjs.com/package/d1-driver"><img src="https://img.shields.io/npm/v/d1-driver" alt="npm-version" /></a> <a href="https://npmjs.com/package/d1-driver"><img src="https://img.shields.io/npm/l/d1-driver" alt="npm-license" /></a> <a href="https://npmjs.com/package/d1-driver"><img src="https://img.shields.io/npm/dm/d1-driver" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/d1-driver"><img src="https://img.shields.io/bundlephobia/min/d1-driver" alt="npm-min-size" /></a> <a href="https://github.com/jill64/d1-driver/actions/workflows/ci.yml"><img src="https://github.com/jill64/d1-driver/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a>

<!----- END GHOST DOCS BADGES ----->

🌤️ Cloudflare D1 External Fetch Compatible Driver

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i d1-driver
```

## Usage

```js
import { D1 } from 'd1-driver'

// Create a new instance of D1
const d1 = new D1('YOUR_CLOUDFLARE_ACCOUNT_ID', 'YOUR_CLOUDFLARE_API_KEY')

// List all databases
const db_list = await d1.list()

const db_uuid = db_list[0].uuid

// Get a database by UUID
await d1.get(db_uuid)

// Create a new database
await d1.create('new_database_name')

// Delete a database by UUID
await d1.delete(db_uuid)

// Query a database
await d1.query(db_uuid, 'SELECT * FROM table_name')
```

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

[MIT](LICENSE)

<!----- END GHOST DOCS FOOTER ----->
