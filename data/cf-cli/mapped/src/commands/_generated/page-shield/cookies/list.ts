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
  hosts?: string;
  page?: string;
  'per-page'?: number;
  'order-by'?: string;
  direction?: string;
  'page-url'?: string;
  export?: string;
  name?: string;
  secure?: boolean;
  'http-only'?: boolean;
  'same-site'?: string;
  type?: string;
  path?: string;
  domain?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list [zoneId]',
  describe: 'Lists all cookies collected by Page Shield.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier (or use --zone flag)',
      })
      .option('hosts', {
        type: 'string',
        description:
          'Includes cookies that match one or more URL-encoded hostnames separated by commas.  Wildcards are supported at the start and end of each hostname to support starts with, ends with and contains. If no wildcards are used, results will be filtered by exact match',
        default: undefined,
      })
      .option('page', {
        type: 'string',
        description:
          'The current page number of the paginated results.  We additionally support a special value "all". When "all" is used, the API will return all the cookies with the applied filters in a single page. This feature is best-effort and it may only work for zones with a low number of cookies',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'The number of results per page.',
        default: undefined,
      })
      .option('order-by', {
        type: 'string',
        description: 'The field used to sort returned cookies.',
        choices: ['first_seen_at', 'last_seen_at'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: "The direction used to sort returned cookies.'",
        choices: ['asc', 'desc'] as const,
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
        description: 'Export the list of cookies as a file, limited to 50000 entries.',
        choices: ['csv'] as const,
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description:
          'Filters the returned cookies that match the specified name. Wildcards are supported at the start and end to support starts with, ends with and contains. e.g. session*',
        default: undefined,
      })
      .option('secure', {
        type: 'boolean',
        description: 'Filters the returned cookies that are set with Secure',
        default: false,
      })
      .option('http-only', {
        type: 'boolean',
        description: 'Filters the returned cookies that are set with HttpOnly',
        default: false,
      })
      .option('same-site', {
        type: 'string',
        description: 'Filters the returned cookies that match the specified same_site attribute',
        choices: ['lax', 'strict', 'none'] as const,
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description: 'Filters the returned cookies that match the specified type attribute',
        choices: ['first_party', 'unknown'] as const,
        default: undefined,
      })
      .option('path', {
        type: 'string',
        description: 'Filters the returned cookies that match the specified path attribute',
        default: undefined,
      })
      .option('domain', {
        type: 'string',
        description: 'Filters the returned cookies that match the specified domain attribute',
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
      if (argv.hosts !== undefined) params['hosts'] = argv.hosts;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.orderBy !== undefined) params['order_by'] = argv.orderBy;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.pageUrl !== undefined) params['page_url'] = argv.pageUrl;
      if (argv.export !== undefined) params['export'] = argv.export;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.secure !== undefined) params['secure'] = argv.secure;
      if (argv.httpOnly !== undefined) params['http_only'] = argv.httpOnly;
      if (argv.sameSite !== undefined) params['same_site'] = argv.sameSite;
      if (argv.type !== undefined) params['type'] = argv.type;
      if (argv.path !== undefined) params['path'] = argv.path;
      if (argv.domain !== undefined) params['domain'] = argv.domain;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.pageShield.cookies.list(zoneId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
