/**
 * deployments-rollback command
 * @generated from apis/pages/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface DeploymentsRollbackArgs {
  deploymentId: string;
  projectName: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DeploymentsRollbackArgs> = {
  command: 'deployments-rollback <deploymentId> <projectName>',
  describe:
    'Rollback the production deployment to a previous deployment. You can only rollback to succesful builds on production.',

  builder: (yargs: Argv): Argv<DeploymentsRollbackArgs> => {
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      }) as Argv<DeploymentsRollbackArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeploymentsRollbackArgs>): Promise<void> => {
    try {
      validateResourceId(argv.deploymentId as string | undefined, 'deploymentId');
      validateResourceId(argv.projectName as string | undefined, 'projectName');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf pages projects deployments-rollback',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/pages/projects/${argv.projectName ?? '<projectName>'}/deployments/${argv.deploymentId ?? '<deploymentId>'}/rollback`,
          pathParams: { deploymentId: String(argv.deploymentId ?? ''), projectName: String(argv.projectName ?? '') },
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

      const result = await client.pages.projects.deploymentsRollback(argv.deploymentId, argv.projectName, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
