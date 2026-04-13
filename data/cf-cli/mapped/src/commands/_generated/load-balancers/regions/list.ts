/**
 * list command
 * @generated from apis/load-balancers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  'subdivision-code'?: string;
  'subdivision-code-a2'?: string;
  'country-code-a2'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'List all region mappings.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('subdivision-code', {
        type: 'string',
        description: 'Two-letter subdivision code followed in ISO 3166-2.',
        default: undefined,
      })
      .option('subdivision-code-a2', {
        type: 'string',
        description: 'Two-letter subdivision code followed in ISO 3166-2.',
        default: undefined,
      })
      .option('country-code-a2', {
        type: 'string',
        description: 'Two-letter alpha-2 country code followed in ISO 3166-1.',
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
      if (argv.subdivisionCode !== undefined) params['subdivision_code'] = argv.subdivisionCode;
      if (argv.subdivisionCodeA2 !== undefined) params['subdivision_code_a2'] = argv.subdivisionCodeA2;
      if (argv.countryCodeA2 !== undefined) params['country_code_a2'] = argv.countryCodeA2;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.loadBalancers.regions.list(
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
