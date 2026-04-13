/**
 * list command
 * @generated from apis/page-shield/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  zoneId?: string;
  'exclude-urls'?: string;
  urls?: string;
  hosts?: string;
  page?: string;
  'per-page'?: number;
  'order-by'?: string;
  direction?: string;
  'prioritize-malicious'?: boolean;
  'exclude-cdn-cgi'?: boolean;
  status?: string;
  'page-url'?: string;
  export?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list [zoneId]',
  describe: 'Lists all connections detected by Page Shield.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier (or use --zone flag)',
      })
      .option('exclude-urls', {
        type: 'string',
        description: 'Excludes connections whose URL contains one of the URL-encoded URLs separated by commas.',
        default: undefined,
      })
      .option('urls', {
        type: 'string',
        description: 'Includes connections whose URL contain one or more URL-encoded URLs separated by commas.',
        default: undefined,
      })
      .option('hosts', {
        type: 'string',
        description:
          'Includes connections that match one or more URL-encoded hostnames separated by commas.  Wildcards are supported at the start and end of each hostname to support starts with, ends with and contains. If no wildcards are used, results will be filtered by exact match',
        default: undefined,
      })
      .option('page', {
        type: 'string',
        description:
          'The current page number of the paginated results.  We additionally support a special value "all". When "all" is used, the API will return all the connections with the applied filters in a single page. This feature is best-effort and it may only work for zones with a low number of connections',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'The number of results per page.',
        default: undefined,
      })
      .option('order-by', {
        type: 'string',
        description: 'The field used to sort returned connections.',
        choices: ['first_seen_at', 'last_seen_at'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'The direction used to sort returned connections.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('prioritize-malicious', {
        type: 'boolean',
        description: 'When true, malicious connections appear first in the returned connections.',
        default: false,
      })
      .option('exclude-cdn-cgi', {
        type: 'boolean',
        description:
          'When true, excludes connections seen in a \`/cdn-cgi\` path from the returned connections. The default value is true.',
        default: false,
      })
      .option('status', {
        type: 'string',
        description:
          'Filters the returned connections using a comma-separated list of connection statuses. Accepted values: \`active\`, \`infrequent\`, and \`inactive\`. The default value is \`active\`.',
        default: undefined,
      })
      .option('page-url', {
        type: 'string',
        description:
          'Includes connections that match one or more page URLs (separated by commas) where they were last seen  Wildcards are supported at the start and end of each page URL to support starts with, ends with and contains. If no wildcards are used, results will be filtered by exact match',
        default: undefined,
      })
      .option('export', {
        type: 'string',
        description: 'Export the list of connections as a file, limited to 50000 entries.',
        choices: ['csv'] as const,
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
      }) as Argv<ListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.excludeUrls !== undefined) params['exclude_urls'] = argv.excludeUrls;
      if (argv.urls !== undefined) params['urls'] = argv.urls;
      if (argv.hosts !== undefined) params['hosts'] = argv.hosts;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.orderBy !== undefined) params['order_by'] = argv.orderBy;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.prioritizeMalicious !== undefined) params['prioritize_malicious'] = argv.prioritizeMalicious;
      if (argv.excludeCdnCgi !== undefined) params['exclude_cdn_cgi'] = argv.excludeCdnCgi;
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.pageUrl !== undefined) params['page_url'] = argv.pageUrl;
      if (argv.export !== undefined) params['export'] = argv.export;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.pageShield.connections.list(
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
