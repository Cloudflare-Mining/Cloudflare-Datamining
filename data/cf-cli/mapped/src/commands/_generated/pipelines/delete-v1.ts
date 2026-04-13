/**
 * delete-v1 command
 * @generated from apis/pipelines/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';

interface DeleteV1Args {
  pipelineId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DeleteV1Args> = {
  command: 'delete-v1 <pipelineId>',
  describe: 'Delete Pipeline in Account.',

  builder: (yargs: Argv): Argv<DeleteV1Args> => {
    return yargs
      .positional('pipelineId', {
        type: 'string',
        description: 'Specifies the public ID of the pipeline.',
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
      }) as Argv<DeleteV1Args>;
  },

  handler: async (argv: ArgumentsCamelCase<DeleteV1Args>): Promise<void> => {
    try {
      validateResourceId(argv.pipelineId as string | undefined, 'pipelineId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf pipelines delete-v1',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/pipelines/v1/pipelines/${argv.pipelineId ?? '<pipelineId>'}`,
          pathParams: { pipelineId: String(argv.pipelineId ?? '') },
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

      const result = await client.pipelines.deleteV1(accountId, argv.pipelineId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
