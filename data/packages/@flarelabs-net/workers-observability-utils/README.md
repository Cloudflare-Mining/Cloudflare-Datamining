# Workers Observability Utils

A lightweight, zero-dependency package for capturing and exporting metrics from Cloudflare Workers.

## Features

- Collect and track `COUNT`, `GAUGE`, and `HISTOGRAM` metrics
- Auto-aggregation of metrics based on type
- Tag support for all metrics
- Export metrics to multiple sinks (Datadog, Workers Analytics Engine)
- Separate Tail Worker architecture for efficient metrics exporting

## Basic Usage

### Setting Up Metrics in Your Worker

The main worker will capture metrics and publish them through a diagnostics channel. The `metrics` object provides methods for recording different types of metrics:

```typescript
import { metrics } from '@flarelabs-net/workers-observability-utils';

export default {
  async fetch(request, env, ctx) {
    // Record count metric with tags
    metrics.count('worker.request', 1, {
      method: request.method,
    });

    // Record gauge metric
    metrics.gauge('worker.connections.active', 42);

    // Record histogram metric for response time.
    // Note: Timers are not totally accurate in cloudflare worker environments
    // but this can give an indication of relative performance
    const startTime = Date.now();
    const response = await processRequest();
    const responseTime = Date.now() - startTime;
    metrics.histogram('worker.response_time', responseTime, {
      percentiles: [0.5, 0.95, 0.99],
      aggregates: ['avg', 'max']
    });

    return response;
  },
};
```

### Metric Types

This library supports three types of metrics:

1. **COUNT** - Represents the total number of occurrences. It can be incremented or decremented.  (e.g., request count, error count)
   ```typescript
   metrics.count('worker.request', 1, { status: '200' });
   ```

2. **GAUGE** - Point-in-time measurement (e.g., memory usage, connection count)
   ```typescript
   metrics.gauge('worker.memory_usage', memoryUsage, { region: 'earth' });
   ```

3. **HISTOGRAM** - Distribution of values over time with statistical aggregations
   ```typescript
   metrics.histogram('worker.response_time', responseTimeMs, {
     percentiles: [0.5, 0.95, 0.99],  // p50, p95, and p99 percentiles
     aggregates: ['avg', 'max', 'min', 'sum', 'count']
   }, { endpoint: '/api' });
   ```

   Histogram metrics automatically generate multiple derived metrics:
   - Percentiles (as gauges): `worker.cpu_time.p50`, `worker.cpu_time.p95`, etc.
   - Aggregates: `worker.cpu_time.avg`, `worker.cpu_time.max`, etc.

### Tags

All metrics support tags, which are key-value pairs that help categorize and filter metrics:

```typescript
metrics.count('worker.request', 1, {
  method: 'GET',
  path: '/api',
  status: '200'
});
```

## Setting Up the Tail Worker

To efficiently export metrics to external providers, you should set up a dedicated Tail Worker. This architecture allows your main worker to focus on handling requests, while the Tail Worker handles metric collection and export. For more information, see the [Cloudflare Tail Workers documentation](https://developers.cloudflare.com/workers/observability/logs/tail-workers/).

### Multiple Sinks

With this library, you can send metrics to multiple destinations simultaneously. The TailExporter supports an array of metric sinks, and each sink receives the same metrics data. Currently supported sinks include:

- **Datadog** - Export metrics to Datadog for visualization and alerting
- **Workers Analytics Engine** - Store metrics in Cloudflare's Analytics Engine for custom queries and analysis
- **Otel Metrics** - Send your Metrics to any OpenTelemetry compatible collector

When using multiple sinks, metrics will be sent to all configured sinks in parallel. If one sink fails, the others will still receive the metrics.

### Tail Worker Configuration

1. Create a new Worker for handling tail events:

```typescript
// tail-worker/src/index.ts
import { TailExporter, DatadogMetricSink, WorkersAnalyticsEngineSink, OtelMetricSink} from '@flarelabs-net/workers-observability-utils';

export default new TailExporter({
  metrics: {
    sinks: [
      new DatadogMetricSink({
        site: 'us3.datadoghq.com',
        // API key can be provided here or via environment variables
        // apiKey: 'your-datadog-api-key'
      }),
      new WorkersAnalyticsEngineSink({
        datasetBinding: env.ANALYTICS_ENGINE_DATASET
      }),
      new OtelMetricSink({
				url: 'https://my-otel-exporter.io',
				headers: {
					
				},
			}),
    ],
    // Optional default metrics to collect automatically
    defaultMetrics: {
      cpuTime: true,           // default: true - collects worker.cpu_time as a GAUGE
      wallTime: true,          // default: true - collects worker.wall_time as a GAUGE
      workersInvocation: true, // default: true - collects worker.invocation as a COUNT
    },
    // When using Workers Analytics Engine, a value of 20 or less is recommended due to soft limits
    maxBufferSize: 20,
    // Maximum duration in seconds to buffer before flushing (default: 5, max: 30)
    maxBufferDuration: 5
  }
});
```

2. Set up Datadog API key:

```bash
# Using wrangler secrets
wrangler secret put DD_API_KEY
# Or DATADOG_API_KEY is also supported
```

2. Configure your Worker:

```jsonc
// wrangler.jsonc for the Emitting Worker
{
  "name": "my-worker",
  // Required: Enable the tail_consumers configuration
  "tail_consumers": [
    {
      "service": "name-of-tail-worker",
    }
  ]
}
```

### Environment Variables and Bindings

The Tail Worker supports the following environment variables and bindings:

#### For Datadog
- `DD_API_KEY` or `DATADOG_API_KEY`: Your Datadog API key

#### For Workers Analytics Engine
- Requires an Analytics Engine dataset binding in your wrangler.jsonc:
```jsonc
{
  "analytics_engine_datasets": [
    {
      "binding": "ANALYTICS_ENGINE_DATASET",
      "dataset": "your-dataset-name"
    }
  ]
}
```

**Note**: Workers Analytics Engine has a soft limit of 25 writes per invocation, so it's recommended to keep your maxBufferSize at 20 or lower when using this sink.

### Default Metrics

The Tail Worker can automatically collect the following metrics without any instrumentation in your main worker:

1. **CPU Time** (`worker.cpu_time`) - A GAUGE metric measuring the CPU time used by the worker in milliseconds
2. **Wall Time** (`worker.wall_time`) - A GAUGE metric measuring the total execution time of the worker in milliseconds
3. **Workers Invocation** (`worker.invocation`) - A COUNT metric that increases by 1 for each worker invocation

These metrics are collected with the same global tags that are applied to your custom metrics (scriptName, executionModel, outcome, versionId).

You can enable or disable these default metrics in the TailExporter configuration:

```typescript
export default new TailExporter({
  metrics: {
    sinks: [...],
    defaultMetrics: {
      cpuTime: true,           // default: true
      wallTime: true,          // default: true
      workersInvocation: true, // default: true
    }
  }
});
```
