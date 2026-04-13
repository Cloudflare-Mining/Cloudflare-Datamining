/**
 * deployments-get command
 * @generated from apis/pages/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface DeploymentsGetArgs {
  deploymentId: string;
  projectName: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DeploymentsGetArgs> = {
  command: 'deployments-get <deploymentId> <projectName>',
  describe: 'Fetch information about a deployment.',

  builder: (yargs: Argv): Argv<DeploymentsGetArgs> => {
    return yargs
      .positional('deploymentId', {
        type: 'string',
        description: 'Identifier.',
        demandOption: true,
      })
      .positional('projectName', {
        type: 'string',
        description: 'Name of the project.',
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
      }) as Argv<DeploymentsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeploymentsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.deploymentId as string | undefined, 'deploymentId');
      validateResourceId(argv.projectName as string | undefined, 'projectName');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.pages.projects.deploymentsGet(argv.deploymentId, argv.projectName, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
