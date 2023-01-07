# D1 Client API

The D1 Client API supports:

* Prepared and static statements
* Meta information (query duration, number of changes, LastRowId)
* Multiple batched SQL queries for better performance (avoids HTTP roundtrips)
* Full database dumps
* Prepared statements reusage
* Error handling

D1 is built on [SQLite][5] and uses its [SQL language][6].

## Installation

```Shell
npm install @cloudflare/d1 --save-dev
```

### wrangler.toml

Before you use the API you need to add this to your project's [wrangler.toml][7]:

```
[[unsafe.bindings]]
name = "D1"
type = "cfsql"
database = "testdb"
```

### Import D1

Add this to your worker code:

```JavaScript
import { Database } from "@cloudflare/d1"; // this will be native at some point, see above

const db = new Database(env.D1);
```

You're ready to start using D1

## Prepared statements

Prepared statements are precompiled objects that the database uses to run the SQL

The Client API supports static or prepared statements. Developers are incentivised to use the latter because they lead to overall faster execution and they also prevent SQL injection attacks, but the client API won't force it.

Static statement:

```Javascript
const stmt = db.prepare('SELECT * FROM users WHERE name = "John Doe"')
```

Prepared statement:

```JavaScript
const stmt = db.prepare('SELECT * FROM users WHERE name = ?1').bind('Joe');
```

## Parameter binding

We follow the [SQLite convention][2] for prepared statements parameter binding. Currently we only support Ordered (?NNNN) and Anonymous (?) parameters. In the future we will support named parameters as well.

| Syntax | Type | Description |
| --- | --- | --- |
| ?NNN | Ordered | A question mark followed by a number NNN holds a spot for the NNN-th parameter. NNN must be between 1 and SQLITE_MAX_VARIABLE_NUMBER. |
| ? | Anonymous | A question mark that is not followed by a number creates a parameter with a number one greater than the largest parameter number already assigned. If this means the parameter number is greater than SQLITE_MAX_VARIABLE_NUMBER, it is an error. This parameter format is provided for compatibility with other database engines. But because it is easy to miscount the question marks, the use of this parameter format is discouraged. Programmers are encouraged to use one of the symbolic formats below or the ?NNN format above instead. |

To bind a parameter we use the method **stmt.bind()**

### Order and anonymous examples:

```JavaScript
const stmt = db.prepare('SELECT * FROM users WHERE name = ?').bind( 'John Doe' );
const stmt = db.prepare('SELECT * FROM users WHERE name = ? AND age = ?').bind( 'John Doe', 41 );
const stmt = db.prepare('SELECT * FROM users WHERE name = ?2 AND age = ?1').bind( 41, 'John Doe' );
```

## Type conversion

This is how we convert Javascript inputs to D1 inputs:

| D1 | Javascript |
| --- | --- |
| NULL | null |
| REAL | Number |
| INTEGER | Number [^1] |
| TEXT | String |
| BLOB | ArrayBuffer |

[^1]: D1 supports 64-bit signed INTEGERs internally, however we don't support [BigInts][8] in the API yet. Javascript integer's are safe up to [Number.MAX_SAFE_INTEGER][9].

## Return object

The methods stmt.run(), stmt.all() and db.batch() return an object that contains the results, [lastRowId][10] (if applicable), number of write changes and the internal duration of the operation in milliseconds.

```JSON
{
  results: array, // [] if empty
  lastRowId: integer, // the rowid of the last row inserted or null if it doesn't apply
  changes: integer, // total number of rows that were inserted, updated, or deleted, or 0 if read-only
  duration: integer, // duration of the operation in milliseconds
}
```

Example:

```JavaScript
const { lastRowId } = await db.prepare('INSERT INTO users (name, age) VALUES (?1, ?2)').bind( "John", 42 ).run();
console.log(lastRowId); // 72
```

## Query statement methods

The D1 API supports the following query statement methods.

### await stmt.first( [column] )

Returns the first row of the results.

Get a specific column from the first row:

```JavaScript
const stmt = db.prepare('SELECT COUNT(*) AS total FROM users');
const total = await stmt.first('total');
console.log(total); // 50
```

Get all the the columns from the first row:

```JavaScript
const stmt = db.prepare('SELECT COUNT(*) AS total FROM users');
const values = await stmt.first();
console.log(values); // { total: 50 }
```

### await stmt.all()

Returns all rows and metadata.

```JavaScript
const stmt = db.prepare('SELECT name, age FROM users LIMIT 3');
const { results } = await stmt.all();
console.log(results);
/*
[
  {
     name: "John",
     age: 42,
  },
   {
     name: "Anthony",
     age: 37,
  },
    {
     name: "Dave",
     age: 29,
  },
 ]
*/
```

### await stmt.raw()

Same as stmt.all(), but returns an array of rows instead of objects.

```JavaScript
const stmt = db.prepare('SELECT name, age FROM users LIMIT 3');
const raw = await stmt.raw();
console.log(raw);
/*
[
  [ "John", 42 ],
  [ "Anthony", 37 ],
  [ "Dave", 29 ],
]
*/
console.log(rows.map(row => row.join(',')).join("\n"));
/*
John,42
Anthony,37
Dave,29
*/
```

### await stmt.run()

Runs the query/queries, but returns no results. Instead, run() returns the metrics only.

Useful for write operations like UPDATE, DELETE or INSERT.

```JavaScript
const info = await db.prepare('INSERT INTO users (name, age) VALUES (?1, ?2)')
                    .bind( "John", 42 )
                    .run()

console.log(info);
/*
{
  lastRowId: 56
  changes: 1
  duration: 62
}
*/
```

### await db.dump()

Dumps the entire D1 database to an SQLite compatibile file inside an ArrayBuffer.

```JavaScript
const dump = await db.dump()
return ( new Response(dump, {
    status: 200,
    headers: {
        'Content-Type': 'application/octet-stream'
    }
} );
```

### await db.exec()

Executes one or more queries directly without prepared statements or parameters binding. This method can have poorer performance (prepared statements can be reused in some cases) and, more importantly, is less safe. Only use this method for maintenance and one-shot tasks (example: migration jobs). The input can be one or multiple queries separated by \n.

If an error occurs, an exception is thrown with the query and error messages (see below for Errors), execution stops and further statements are not executed.

```JavaScript
const migration = await fetch('/migration.sql');
const out = await db.exec(migration.text());
console.log(out);
/*
{
  count: 80,
  duration: 7655
}
*/
```

## Reusing prepared statements

Prepared statements can be reused with new bindings:

```JavaScript
const stmt =  db.prepare('SELECT name, age FROM users WHERE age < ?1');
const young = await stmt.bind(20).all();
console.log(young);
/*
{
  results: [...],
  lastRowId: 0
  changes: 0
  duration: 31
}
*/
 const old = await stmt.bind(80).all();
console.log(old);
/*
{
  results: [...],
  lastRowId: 0
  changes: 0
  duration: 29
}
*/
```

## Batch statements

Batching sends multiple SQL statements inside a single call to the database. This can have a huge performance impact as it reduces latency from network roundtrips to D1. Please note that batched statements are not true SQL transactions. D1 operates in auto-commit. Our implementation guarantees that each statement in the list will execute and commit, sequentially, non-concurrently.

Batched statements are not [SQL transactions][3]. If a statement in the sequence fails then an error is returned for that specific statement, it doesn't abort or roll-backs the entire sequence.

### db.batch()

To send batch statements, we feed batch() with a list of prepared statements and get the results in the same order.

```JavaScript
await db.batch([
    db.prepare("UPDATE users SET name = ?1 WHERE id = ?2").bind( "John", 17 ),
    db.prepare("UPDATE users SET age = ?1 WHERE id = ?2").bind( 35, 19 ),
]);
```

You can construct batches reusing the same prepared statement:

```JavaScript
const stmt = db.prepare("SELECT * FROM users WHERE name = ?1");

const rows = await db.batch([
    stmt.bind("John"),
    stmt.bind("Anthony"),
]);

console.log(rows[0].results);
/*
[
  {
     name: "John Clemente",
     age: 42,
  },
   {
     name: "John Davis",
     age: 37,
  },
 ]
*/
console.log(rows[1].results);
/*
[
  {
     name: "Anthony Hopkins",
     age: 66,
  },
 ]
*/
```

## PRAGMA statements

D1 supports the following [SQLite PRAGMA][13] statements:

| PRAGMA | Description |
| --- | --- |
| [table_list][16] | Returns information about the tables and views in the schema, one table per row of output. |
| [table_info][15] | This pragma returns one row for each column in the named table. Columns in the result set include the column name, data type, whether or not the column can be NULL, and the default value for the column. |
| [foreign_keys][14] | Query, set, or clear the enforcement of foreign key constraints. |

Other PRAGMAs are disabled because of D1 implementation specifics.

Example:

```Javascript
const r = await db.batch([
    db.prepare("PRAGMA table_list"),
    db.prepare("PRAGMA table_info(my_table)"),
]);
console.log(r);
/*
[
  {
    "results": [
      {
      "schema": "main",
      "name": "my_table",
      "type": "table",
      "ncol": 3,
      "wr": 0,
      "strict": 0
      },
      ...
    ]
  },
  {
    "results": [
      {
        "cid": 0,
        "name": "cid",
        "type": "INTEGER",
        "notnull": 0,
        "dflt_value": null,
        "pk": 1
      },
      ...
    ]
  }
]
*/
```

## Errors

The stmt. and db. methods will throw a [Error object][11] whenever an error occurs.

D1 Javascript Errors use [cause property][12] for details.

```Javascript
new Error("D1_ERROR", { cause: new Error("Error detail") })
```

To capture exceptions:

```JavaScript
try {
    await db.exec("INSERTZ INTO my_table (name, employees) VALUES ()");
} catch (e: any) {
    console.log({
        message: e.message,
        cause: e.cause.message,
    });
}
/*
{
  "message": "D1_EXEC_ERROR",
  "cause": "Error in line 1: INSERTZ INTO my_table (name, employees) VALUES (): sql error: near \"INSERTZ\": syntax error in INSERTZ INTO my_table (name, employees) VALUES () at offset 0"
}
*/
```

### Error list

| message | cause |
| --- | --- |
| D1_ERROR | Generic error |
| D1_NORESULTS | No results |
| D1_COLUMN_NOTFOUND | Column not found |
| D1_DUMP_ERROR | Database dump error |
| D1_EXEC_ERROR | Exec error in line x: y error |

## Examples

You can find a D1 "Hello World" example [here][4].

[2]: https://www.sqlite.org/lang_expr.html#varparam
[3]: https://www.sqlite.org/lang_transaction.html
[4]: example/
[5]: https://sqlite.com/index.html
[6]: https://sqlite.com/lang.html
[7]: https://developers.cloudflare.com/workers/wrangler/configuration/
[8]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[9]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
[10]: https://www.sqlite.org/c3ref/last_insert_rowid.html
[11]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[12]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause
[13]: https://www.sqlite.org/pragma.html
[14]: https://www.sqlite.org/pragma.html#pragma_foreign_keys
[15]: https://www.sqlite.org/pragma.html#pragma_table_info
[16]: https://www.sqlite.org/pragma.html#pragma_table_list
