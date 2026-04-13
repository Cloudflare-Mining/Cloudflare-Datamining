/**
 * deployments-get command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface DeploymentsGetArgs {
  scriptName: string;
  deploymentId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DeploymentsGetArgs> = {
  command: 'deployments-get <scriptName> <deploymentId>',
  describe: 'Get information about a Worker Deployment.',

  builder: (yargs: Argv): Argv<DeploymentsGetArgs> => {
    return yargs
      .positional('scriptName', {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
        demandOption: true,
      })
      .positional('deploymentId', {
        type: 'string',
        description: 'Deployment ID',
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
      validateResourceId(argv.scriptName as string | undefined, 'scriptName');
      validateResourceId(argv.deploymentId as string | undefined, 'deploymentId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.workers.scripts.deploymentsGet(accountId, argv.scriptName, argv.deploymentId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
