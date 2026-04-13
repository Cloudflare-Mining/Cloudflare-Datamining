/**
 * reports-get command
 * @generated from apis/dns-firewall/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ReportsGetArgs {
  dnsFirewallId: string;
  metrics?: string;
  dimensions?: string;
  since?: string;
  until?: string;
  limit?: string;
  sort?: string;
  filters?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ReportsGetArgs> = {
  command: 'reports-get <dnsFirewallId>',
  describe:
    'Retrieves a list of summarised aggregate metrics over a given time period. See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.',

  builder: (yargs: Argv): Argv<ReportsGetArgs> => {
    return yargs
      .positional('dnsFirewallId', {
        type: 'string',
        description: 'Identifier.',
        demandOption: true,
      })
      .option('metrics', {
        type: 'string',
        description: 'A comma-separated list of metrics to query.',
        default: undefined,
      })
      .option('dimensions', {
        type: 'string',
        description: 'A comma-separated list of dimensions to group results by.',
        default: undefined,
      })
      .option('since', {
        type: 'string',
        description: 'Start date and time of requesting data period in ISO 8601 format.',
        default: undefined,
      })
      .option('until', {
        type: 'string',
        description: 'End date and time of requesting data period in ISO 8601 format.',
        default: undefined,
      })
      .option('limit', {
        type: 'string',
        description: 'Limit number of returned metrics.',
        default: undefined,
      })
      .option('sort', {
        type: 'string',
        description:
          'A comma-separated list of dimensions to sort by, where each dimension may be prefixed by - (descending) or + (ascending).',
        default: undefined,
      })
      .option('filters', {
        type: 'string',
        description: "Segmentation filter in 'attribute operator value' format.",
        default: undefined,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<ReportsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ReportsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.dnsFirewallId as string | undefined, 'dnsFirewallId');

      const params: Record<string, unknown> = {};
      if (argv.metrics !== undefined) params['metrics'] = argv.metrics;
      if (argv.dimensions !== undefined) params['dimensions'] = argv.dimensions;
      if (argv.since !== undefined) params['since'] = argv.since;
      if (argv.until !== undefined) params['until'] = argv.until;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.sort !== undefined) params['sort'] = argv.sort;
      if (argv.filters !== undefined) params['filters'] = argv.filters;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.dnsFirewall.analytics.reportsGet(
        argv.dnsFirewallId,
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
