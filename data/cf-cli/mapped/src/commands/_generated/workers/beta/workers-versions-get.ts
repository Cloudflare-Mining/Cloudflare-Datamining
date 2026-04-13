/**
 * workers-versions-get command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface WorkersVersionsGetArgs {
  workerId: string;
  versionId: string;
  include?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, WorkersVersionsGetArgs> = {
  command: 'workers-versions-get <workerId> <versionId>',
  describe: 'Get details about a specific version.',

  builder: (yargs: Argv): Argv<WorkersVersionsGetArgs> => {
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
      .option('include', {
        type: 'string',
        description:
          'Whether to include the \`modules\` property of the version in the response, which contains code and sourcemap content and may add several megabytes to the response size.',
        choices: ['modules'] as const,
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
      }) as Argv<WorkersVersionsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<WorkersVersionsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.workerId as string | undefined, 'workerId');
      validateResourceId(argv.versionId as string | undefined, 'versionId');

      const params: Record<string, unknown> = {};
      if (argv.include !== undefined) params['include'] = argv.include;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.workers.beta.workersVersionsGet(
        accountId,
        argv.workerId,
        argv.versionId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
