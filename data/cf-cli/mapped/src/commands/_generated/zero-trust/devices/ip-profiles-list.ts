/**
 * ip-profiles-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface IPProfilesListArgs {
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, IPProfilesListArgs> = {
  command: 'ip-profiles-list',
  describe: 'Lists WARP Device IP profiles.',

  builder: (yargs: Argv): Argv<IPProfilesListArgs> => {
    return yargs
      .option('per-page', {
        type: 'number',
        description: 'The number of IP profiles to return per page.',
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
      }) as Argv<IPProfilesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<IPProfilesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.devices.ipProfilesList(
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
