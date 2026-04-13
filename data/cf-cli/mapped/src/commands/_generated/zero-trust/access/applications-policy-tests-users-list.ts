/**
 * applications-policy-tests-users-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ApplicationsPolicyTestsUsersListArgs {
  policyTestId: string;
  page?: number;
  'per-page'?: number;
  status?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ApplicationsPolicyTestsUsersListArgs> = {
  command: 'applications-policy-tests-users-list <policyTestId>',
  describe: 'Fetches a single page of user results from an Access policy test.',

  builder: (yargs: Argv): Argv<ApplicationsPolicyTestsUsersListArgs> => {
    return yargs
      .positional('policyTestId', {
        type: 'string',
        description: 'The UUID of the policy test.',
        demandOption: true,
      })
      .option('page', {
        type: 'number',
        description: 'Page number of results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Per page',
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'Filter users by their policy evaluation status.',
        choices: ['success', 'fail', 'error'] as const,
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
      }) as Argv<ApplicationsPolicyTestsUsersListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ApplicationsPolicyTestsUsersListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.policyTestId as string | undefined, 'policyTestId');

      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.status !== undefined) params['status'] = argv.status;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.access.applicationsPolicyTestsUsersList(
        accountId,
        argv.policyTestId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
