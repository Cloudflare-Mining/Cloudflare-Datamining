/**
 * entries-predefined-delete command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface EntriesPredefinedDeleteArgs {
  entryId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, EntriesPredefinedDeleteArgs> = {
  command: 'entries-predefined-delete <entryId>',
  describe: "This is a no-op as predefined entires can't be deleted but is needed for our generated terraform API.",

  builder: (yargs: Argv): Argv<EntriesPredefinedDeleteArgs> => {
    return yargs
      .positional('entryId', {
        type: 'string',
        description: 'Entry ID',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      }) as Argv<EntriesPredefinedDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EntriesPredefinedDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.entryId as string | undefined, 'entryId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust dlp entries-predefined-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dlp/entries/predefined/${argv.entryId ?? '<entryId>'}`,
          pathParams: { entryId: String(argv.entryId ?? '') },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dlp.entriesPredefinedDelete(accountId, argv.entryId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
