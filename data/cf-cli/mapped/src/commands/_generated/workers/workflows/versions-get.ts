/**
 * versions-get command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface VersionsGetArgs {
  workflowName: string;
  versionId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, VersionsGetArgs> = {
  command: 'versions-get <workflowName> <versionId>',
  describe: 'Retrieves details for a specific deployed workflow version.',

  builder: (yargs: Argv): Argv<VersionsGetArgs> => {
    return yargs
      .positional('workflowName', {
        type: 'string',
        description: 'Workflow name',
        demandOption: true,
      })
      .positional('versionId', {
        type: 'string',
        description: 'Version ID',
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
      }) as Argv<VersionsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<VersionsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.workflowName as string | undefined, 'workflowName');
      validateResourceId(argv.versionId as string | undefined, 'versionId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.workers.workflows.versionsGet(argv.workflowName, argv.versionId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
