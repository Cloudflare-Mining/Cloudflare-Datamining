/**
 * events-list command
 * @generated from apis/user/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface EventsListArgs {
  until?: string;
  'pool-name'?: string;
  'origin-healthy'?: string;
  'pool-id'?: string;
  since?: string;
  'origin-name'?: string;
  'pool-healthy'?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, EventsListArgs> = {
  command: 'events-list',
  describe: 'List origin health changes.',

  builder: (yargs: Argv): Argv<EventsListArgs> => {
    return yargs
      .option('until', {
        type: 'string',
        description: 'End date and time of requesting data period in the ISO8601 format.',
        default: undefined,
      })
      .option('pool-name', {
        type: 'string',
        description: 'The name for the pool to filter.',
        default: undefined,
      })
      .option('origin-healthy', {
        type: 'string',
        description:
          'If true, filter events where the origin status is healthy. If false, filter events where the origin status is unhealthy.',
        default: undefined,
      })
      .option('pool-id', {
        type: 'string',
        description: 'Pool ID',
        default: undefined,
      })
      .option('since', {
        type: 'string',
        description: 'Start date and time of requesting data period in the ISO8601 format.',
        default: undefined,
      })
      .option('origin-name', {
        type: 'string',
        description: 'The name for the origin to filter.',
        default: undefined,
      })
      .option('pool-healthy', {
        type: 'boolean',
        description:
          'If true, filter events where the pool status is healthy. If false, filter events where the pool status is unhealthy.',
        default: false,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<EventsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EventsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.until !== undefined) params['until'] = argv.until;
      if (argv.poolName !== undefined) params['pool_name'] = argv.poolName;
      if (argv.originHealthy !== undefined) params['origin_healthy'] = argv.originHealthy;
      if (argv.poolId !== undefined) params['pool_id'] = argv.poolId;
      if (argv.since !== undefined) params['since'] = argv.since;
      if (argv.originName !== undefined) params['origin_name'] = argv.originName;
      if (argv.poolHealthy !== undefined) params['pool_healthy'] = argv.poolHealthy;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.user.loadbalancinganalytics.eventsList(
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
