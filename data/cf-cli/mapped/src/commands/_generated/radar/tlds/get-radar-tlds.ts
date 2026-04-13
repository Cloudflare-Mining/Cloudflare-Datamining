/**
 * get-radar-tlds command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface GetRadarTldsArgs {
  limit?: number;
  offset?: number;
  'tld-manager'?: string;
  'tld-type'?: string;
  tld?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetRadarTldsArgs> = {
  command: 'get-radar-tlds',
  describe: 'Retrieves a list of TLDs.',

  builder: (yargs: Argv): Argv<GetRadarTldsArgs> => {
    return yargs
      .option('limit', {
        type: 'number',
        description: 'Limits the number of objects returned in the response.',
        default: undefined,
      })
      .option('offset', {
        type: 'number',
        description: 'Skips the specified number of objects before fetching the results.',
        default: undefined,
      })
      .option('tld-manager', {
        type: 'string',
        description: 'Filters results by TLD manager.',
        default: undefined,
      })
      .option('tld-type', {
        type: 'string',
        description: 'Filters results by TLD type.',
        choices: ['GENERIC', 'COUNTRY_CODE', 'GENERIC_RESTRICTED', 'INFRASTRUCTURE', 'SPONSORED'] as const,
        default: undefined,
      })
      .option('tld', {
        type: 'string',
        description: 'Filters results by top-level domain. Specify a comma-separated list of TLDs.',
        default: undefined,
      })
      .option('format', {
        type: 'string',
        description: 'Format in which results will be returned.',
        choices: ['JSON', 'CSV'] as const,
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
      }) as Argv<GetRadarTldsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetRadarTldsArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.offset !== undefined) params['offset'] = argv.offset;
      if (argv.tldManager !== undefined) params['tldManager'] = argv.tldManager;
      if (argv.tldType !== undefined) params['tldType'] = argv.tldType;
      if (argv.tld !== undefined) params['tld'] = argv.tld;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.tlds.getRadarTlds(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
