/**
 * deployments-list command
 * @generated from apis/pages/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface DeploymentsListArgs {
  projectName: string;
  env?: string;
  page?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DeploymentsListArgs> = {
  command: 'deployments-list <projectName>',
  describe: 'Fetch a list of project deployments.',

  builder: (yargs: Argv): Argv<DeploymentsListArgs> => {
    return yargs
      .positional('projectName', {
        type: 'string',
        description: 'Name of the project.',
        demandOption: true,
      })
      .option('env', {
        type: 'string',
        description: 'What type of deployments to fetch.',
        choices: ['production', 'preview'] as const,
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Which page of deployments to fetch.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'How many deployments to return per page.',
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
      }) as Argv<DeploymentsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeploymentsListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.projectName as string | undefined, 'projectName');

      const params: Record<string, unknown> = {};
      if (argv.env !== undefined) params['env'] = argv.env;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.pages.projects.deploymentsList(
        argv.projectName,
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
