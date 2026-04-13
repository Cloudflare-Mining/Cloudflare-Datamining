/**
 * mfa-authenticators-delete command
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

interface MfaAuthenticatorsDeleteArgs {
  userId: string;
  authenticatorId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, MfaAuthenticatorsDeleteArgs> = {
  command: 'mfa-authenticators-delete <userId> <authenticatorId>',
  describe:
    'Deletes a specific MFA device for a user. This action is only available if MFA is turned on for the organization.',

  builder: (yargs: Argv): Argv<MfaAuthenticatorsDeleteArgs> => {
    return yargs
      .positional('userId', {
        type: 'string',
        description: 'UUID.',
        demandOption: true,
      })
      .positional('authenticatorId', {
        type: 'string',
        description: 'The unique identifier for the MFA device.',
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
      }) as Argv<MfaAuthenticatorsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MfaAuthenticatorsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.userId as string | undefined, 'userId');
      validateResourceId(argv.authenticatorId as string | undefined, 'authenticatorId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust users mfa-authenticators-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/access/users/${argv.userId ?? '<userId>'}/mfa_authenticators/${argv.authenticatorId ?? '<authenticatorId>'}`,
          pathParams: { userId: String(argv.userId ?? ''), authenticatorId: String(argv.authenticatorId ?? '') },
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

      const result = await client.zeroTrust.users.mfaAuthenticatorsDelete(argv.userId, accountId, argv.authenticatorId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
