/**
 * applications-policies-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ApplicationsPoliciesGetArgs {
  appId: string;
  policyId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ApplicationsPoliciesGetArgs> = {
  command: 'applications-policies-get <appId> <policyId>',
  describe:
    'Fetches a single Access policy configured for an application. Returns both exclusively owned and reusable policies used by the application.',

  builder: (yargs: Argv): Argv<ApplicationsPoliciesGetArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'The application ID.',
        demandOption: true,
      })
      .positional('policyId', {
        type: 'string',
        description: 'The policy ID.',
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
      }) as Argv<ApplicationsPoliciesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ApplicationsPoliciesGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');
      validateResourceId(argv.policyId as string | undefined, 'policyId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.access.applicationsPoliciesGet(argv.appId, argv.policyId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
