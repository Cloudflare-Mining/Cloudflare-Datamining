/**
 * delete command
 * @generated from apis/rulesets/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface DeleteArgs {
  rulesetVersion: string;
  rulesetId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DeleteArgs> = {
  command: 'delete <rulesetVersion> <rulesetId>',
  describe: 'Deletes an existing version of an account ruleset.',

  builder: (yargs: Argv): Argv<DeleteArgs> => {
    return yargs
      .positional('rulesetVersion', {
        type: 'string',
        description: 'The version of the ruleset.',
        demandOption: true,
      })
      .positional('rulesetId', {
        type: 'string',
        description: 'The unique ID of the ruleset.',
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
      }) as Argv<DeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.rulesetVersion as string | undefined, 'rulesetVersion');
      validateResourceId(argv.rulesetId as string | undefined, 'rulesetId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf rulesets versions-extra delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/rulesets/${argv.rulesetId ?? '<rulesetId>'}/versions/${argv.rulesetVersion ?? '<rulesetVersion>'}`,
          pathParams: { rulesetVersion: String(argv.rulesetVersion ?? ''), rulesetId: String(argv.rulesetId ?? '') },
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

      const result = await client.rulesets.versionsextra.delete(argv.rulesetVersion, argv.rulesetId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
