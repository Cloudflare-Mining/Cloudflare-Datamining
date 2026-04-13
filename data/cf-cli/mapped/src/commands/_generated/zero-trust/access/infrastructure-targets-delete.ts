/**
 * infrastructure-targets-delete command
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

interface InfrastructureTargetsDeleteArgs {
  targetId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, InfrastructureTargetsDeleteArgs> = {
  command: 'infrastructure-targets-delete <targetId>',
  describe:
    'Removes an infrastructure access target. The target will no longer be accessible through Cloudflare Access.',

  builder: (yargs: Argv): Argv<InfrastructureTargetsDeleteArgs> => {
    return yargs
      .positional('targetId', {
        type: 'string',
        description: 'Target identifier',
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
      }) as Argv<InfrastructureTargetsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InfrastructureTargetsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.targetId as string | undefined, 'targetId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust access infrastructure-targets-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/infrastructure/targets/${argv.targetId ?? '<targetId>'}`,
          pathParams: { targetId: String(argv.targetId ?? '') },
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

      const result = await client.zeroTrust.access.infrastructureTargetsDelete(accountId, argv.targetId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
