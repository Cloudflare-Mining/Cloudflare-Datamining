/**
 * workers-versions-delete command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface WorkersVersionsDeleteArgs {
  workerId: string;
  versionId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, WorkersVersionsDeleteArgs> = {
  command: 'workers-versions-delete <workerId> <versionId>',
  describe: 'Delete a version.',

  builder: (yargs: Argv): Argv<WorkersVersionsDeleteArgs> => {
    return yargs
      .positional('workerId', {
        type: 'string',
        description: 'Identifier for the Worker, which can be ID or name.',
        demandOption: true,
      })
      .positional('versionId', {
        type: 'string',
        description:
          'Identifier for the version, which can be a UUID, a UUID prefix (minimum length 8), or the literal "latest" to operate on the most recently created version.',
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
      }) as Argv<WorkersVersionsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<WorkersVersionsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.workerId as string | undefined, 'workerId');
      validateResourceId(argv.versionId as string | undefined, 'versionId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers beta workers-versions-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/workers/${argv.workerId ?? '<workerId>'}/versions/${argv.versionId ?? '<versionId>'}`,
          pathParams: { workerId: String(argv.workerId ?? ''), versionId: String(argv.versionId ?? '') },
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

      const result = await client.workers.beta.workersVersionsDelete(accountId, argv.workerId, argv.versionId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
