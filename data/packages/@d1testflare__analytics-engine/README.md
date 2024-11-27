# `@d1testflare/analytics-engine`

Workers Analytics Engine module for [Miniflare](https://github.com/cloudflare/miniflare): a
fun, full-featured, fully-local simulator for Cloudflare Workers. See
[📈 Analytics Engine](https://miniflare.dev/storage/analytics-engine) for more details.

## Example

```js
import { AnalyticsEngine } from "@d1testflare/analytics-engine";
import { createSQLiteDB } from "@d1testflare/shared";

const db = new AnalyticsEngine("DATASET_NAME", await createSQLiteDB(":memory:"));

await db.writeDataPoint({
  indexes: ["a3cd45"], // Sensor ID
  blobs: ["Seattle", "USA", "pro_sensor_9000"], // City, Country, Sensor
  doubles: [25, 0.5], // Temperature, Humidity
});
```
