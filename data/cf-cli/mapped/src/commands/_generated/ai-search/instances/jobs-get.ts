/**
 * jobs-get command
 * @generated from apis/ai-search/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface JobsGetArgs {
  id: string;
  jobId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, JobsGetArgs> = {
  command: 'jobs-get <id> <jobId>',
  describe: 'Retrieves details for a specific AI Search indexing job.',

  builder: (yargs: Argv): Argv<JobsGetArgs> => {
    return yargs
      .positional('id', {
        type: 'string',
        description: 'AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.',
        demandOption: true,
      })
      .positional('jobId', {
        type: 'string',
        description: 'Job ID',
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
      }) as Argv<JobsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<JobsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.id as string | undefined, 'id');
      validateResourceId(argv.jobId as string | undefined, 'jobId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.aiSearch.instances.jobsGet(argv.id, argv.jobId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
