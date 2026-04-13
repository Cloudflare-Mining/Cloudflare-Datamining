/**
 * applications-policies-delete command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface ApplicationsPoliciesDeleteArgs {
  appId: string;
  policyId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ApplicationsPoliciesDeleteArgs> = {
  command: 'applications-policies-delete <appId> <policyId>',
  describe:
    'Deletes an Access policy specific to an application. To delete a reusable policy, use the /accounts/{account_id}/policies/{uid} endpoint.',

  builder: (yargs: Argv): Argv<ApplicationsPoliciesDeleteArgs> => {
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      }) as Argv<ApplicationsPoliciesDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ApplicationsPoliciesDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');
      validateResourceId(argv.policyId as string | undefined, 'policyId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust access applications-policies-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/access/apps/${argv.appId ?? '<appId>'}/policies/${argv.policyId ?? '<policyId>'}`,
          pathParams: { appId: String(argv.appId ?? ''), policyId: String(argv.policyId ?? '') },
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

      const result = await client.zeroTrust.access.applicationsPoliciesDelete(argv.appId, argv.policyId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
