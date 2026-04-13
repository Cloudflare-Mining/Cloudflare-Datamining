/**
 * configs-syn-protection-filters-get command
 * @generated from apis/magic-transit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ConfigsSynProtectionFiltersGetArgs {
  filterId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ConfigsSynProtectionFiltersGetArgs> = {
  command: 'configs-syn-protection-filters-get <filterId>',
  describe: 'Get a SYN Protection filter specified by the given UUID.',

  builder: (yargs: Argv): Argv<ConfigsSynProtectionFiltersGetArgs> => {
    return yargs
      .positional('filterId', {
        type: 'string',
        description: 'The UUID of the filter to retrieve.',
        demandOption: true,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<ConfigsSynProtectionFiltersGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConfigsSynProtectionFiltersGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.filterId as string | undefined, 'filterId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.magicTransit.advancedtcpprotection.configsSynProtectionFiltersGet(
        accountId,
        argv.filterId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
