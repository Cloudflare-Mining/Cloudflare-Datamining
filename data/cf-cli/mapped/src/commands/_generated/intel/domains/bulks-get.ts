/**
 * bulks-get command
 * @generated from apis/intel/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface BulksGetArgs {
  domain?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, BulksGetArgs> = {
  command: 'bulks-get',
  describe: 'Same as summary.',

  builder: (yargs: Argv): Argv<BulksGetArgs> => {
    return yargs
      .option('domain', {
        type: 'string',
        description: 'Accepts multiple values like \`?domain=cloudflare.com&domain=example.com\`.',
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
      }) as Argv<BulksGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BulksGetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.domain !== undefined) params['domain'] = argv.domain;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.intel.domains.bulksGet(
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
