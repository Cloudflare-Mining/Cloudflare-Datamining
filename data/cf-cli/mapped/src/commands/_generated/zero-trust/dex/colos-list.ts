/**
 * colos-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ColosListArgs {
  from: string;
  to: string;
  'sort-by'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ColosListArgs> = {
  command: 'colos-list',
  describe:
    "List Cloudflare colos that account's devices were connected to during a time period, sorted by usage starting from the most used colo. Colos without traffic are also returned and sorted alphabetically.",

  builder: (yargs: Argv): Argv<ColosListArgs> => {
    return yargs
      .option('from', {
        type: 'string',
        description: 'Start time for connection period in ISO (RFC3339 - ISO 8601) format',
      })
      .option('to', {
        type: 'string',
        description: 'End time for connection period in ISO (RFC3339 - ISO 8601) format',
      })
      .option('sort-by', {
        type: 'string',
        description:
          'Type of usage that colos should be sorted by. If unspecified, returns all Cloudflare colos sorted alphabetically.',
        choices: ['fleet-status-usage', 'application-tests-usage'] as const,
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
      }) as Argv<ColosListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ColosListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.from !== undefined) params['from'] = argv.from;
      if (argv.to !== undefined) params['to'] = argv.to;
      if (argv.sortBy !== undefined) params['sortBy'] = argv.sortBy;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dex.colosList(
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
