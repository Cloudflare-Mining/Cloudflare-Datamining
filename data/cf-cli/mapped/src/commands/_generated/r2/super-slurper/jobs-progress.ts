/**
 * jobs-progress command
 * @generated from apis/r2/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface JobsProgressArgs {
  jobId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, JobsProgressArgs> = {
  command: 'jobs-progress <jobId>',
  describe: 'Retrieves current progress metrics for an R2 Super Slurper migration job',

  builder: (yargs: Argv): Argv<JobsProgressArgs> => {
    return yargs
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
      }) as Argv<JobsProgressArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<JobsProgressArgs>): Promise<void> => {
    try {
      validateResourceId(argv.jobId as string | undefined, 'jobId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.r2.superslurper.jobsProgress(accountId, argv.jobId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
