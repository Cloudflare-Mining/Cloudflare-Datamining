/**
 * connections-delete command
 * @generated from apis/builds/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface ConnectionsDeleteArgs {
  repoConnectionUuid: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ConnectionsDeleteArgs> = {
  command: 'connections-delete <repoConnectionUuid>',
  describe: 'Remove a repository connection',

  builder: (yargs: Argv): Argv<ConnectionsDeleteArgs> => {
    return yargs
      .positional('repoConnectionUuid', {
        type: 'string',
        description: 'Repository connection UUID.',
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
      }) as Argv<ConnectionsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConnectionsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.repoConnectionUuid as string | undefined, 'repoConnectionUuid');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf builds repos connections-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/builds/repos/connections/${argv.repoConnectionUuid ?? '<repoConnectionUuid>'}`,
          pathParams: { repoConnectionUuid: String(argv.repoConnectionUuid ?? '') },
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

      const result = await client.builds.repos.connectionsDelete(accountId, argv.repoConnectionUuid);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
