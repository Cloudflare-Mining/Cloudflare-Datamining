/**
 * events-bytimes-get command
 * @generated from apis/spectrum/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface EventsBytimesGetArgs {
  zoneId?: string;
  dimensions?: string;
  sort?: string;
  until?: string;
  metrics?: string;
  filters?: string;
  since?: string;
  'time-delta': string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, EventsBytimesGetArgs> = {
  command: 'events-bytimes-get [zoneId]',
  describe: 'Retrieves a list of aggregate metrics grouped by time interval.',

  builder: (yargs: Argv): Argv<EventsBytimesGetArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('dimensions', {
        type: 'string',
        description:
          'Can be used to break down the data by given attributes. Options are:   Dimension                 | Name                            | Example --------------------------|---------------------------------|-------------------------- event                     | Connection Event                | connect, progress, disconnect, originError, clientFiltered appID                     | Application ID                  | 40d67c87c6cd4b889a4fd57805225e85 coloName                  | Colo Name                       | SFO ipVersion                 | IP version used by the client   | 4, 6.',
        default: undefined,
      })
      .option('sort', {
        type: 'string',
        description:
          'The sort order for the result set; sort fields must be included in \`metrics\` or \`dimensions\`.',
        default: undefined,
      })
      .option('until', {
        type: 'string',
        description: 'Until',
        default: undefined,
      })
      .option('metrics', {
        type: 'string',
        description:
          'One or more metrics to compute. Options are:   Metric                    | Name                                | Example                  | Unit --------------------------|-------------------------------------|--------------------------|-------------------------- count                     | Count of total events               | 1000                     | Count bytesIngress              | Sum of ingress bytes                | 1000                     | Sum bytesEgress               | Sum of egress bytes                 | 1000                     | Sum durationAvg               | Average connection duration         | 1.0                      | Time in milliseconds durationMedian            | Median connection duration          | 1.0                      | Time in milliseconds duration90th              | 90th percentile connection duration | 1.0                      | Time in milliseconds duration99th              | 99th percentile connection duration | 1.0                      | Time in milliseconds.',
        default: undefined,
      })
      .option('filters', {
        type: 'string',
        description:
          'Used to filter rows by one or more dimensions. Filters can be combined using OR and AND boolean logic. AND takes precedence over OR in all the expressions. The OR operator is defined using a comma (,) or OR keyword surrounded by whitespace. The AND operator is defined using a semicolon (;) or AND keyword surrounded by whitespace. Note that the semicolon is a reserved character in URLs (rfc1738) and needs to be percent-encoded as %3B. Comparison options are:  Operator                  | Name                            | URL Encoded --------------------------|---------------------------------|-------------------------- ==                        | Equals                          | %3D%3D !=                        | Does not equals                 | !%3D \\>                        | Greater Than                    | %3E \\<                        | Less Than                       | %3C \\>=                       | Greater than or equal to        | %3E%3D \\<=                       | Less than or equal to           | %3C%3D',
        default: undefined,
      })
      .option('since', {
        type: 'string',
        description: 'Since',
        default: undefined,
      })
      .option('time-delta', {
        type: 'string',
        description: 'Used to select time series resolution.',
        choices: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'dekaminute', 'minute'] as const,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<EventsBytimesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EventsBytimesGetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.dimensions !== undefined) params['dimensions'] = argv.dimensions;
      if (argv.sort !== undefined) params['sort'] = argv.sort;
      if (argv.until !== undefined) params['until'] = argv.until;
      if (argv.metrics !== undefined) params['metrics'] = argv.metrics;
      if (argv.filters !== undefined) params['filters'] = argv.filters;
      if (argv.since !== undefined) params['since'] = argv.since;
      if (argv.timeDelta !== undefined) params['time_delta'] = argv.timeDelta;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.spectrum.analytics.eventsBytimesGet(
        zoneId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
