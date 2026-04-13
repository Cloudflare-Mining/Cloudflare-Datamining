/**
 * policies-make-reusable-update command
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

interface PoliciesMakeReusableUpdateArgs {
  appId: string;
  policyId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, PoliciesMakeReusableUpdateArgs> = {
  command: 'policies-make-reusable-update <appId> <policyId>',
  describe:
    'Converts an application-scoped policy to a reusable policy. The policy will no longer be exclusively scoped to the application. Further updates to the policy should go through the /accounts/{account_id}/policies/{uid} endpoint.',

  builder: (yargs: Argv): Argv<PoliciesMakeReusableUpdateArgs> => {
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
      }) as Argv<PoliciesMakeReusableUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PoliciesMakeReusableUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');
      validateResourceId(argv.policyId as string | undefined, 'policyId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust apps policies-make-reusable-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/access/apps/${argv.appId ?? '<appId>'}/policies/${argv.policyId ?? '<policyId>'}/make_reusable`,
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

      const result = await client.zeroTrust.apps.policiesMakeReusableUpdate(argv.appId, argv.policyId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
