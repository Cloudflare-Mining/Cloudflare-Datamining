/**
 * delete command
 * @generated from apis/ai-gateway/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface DeleteArgs {
  gatewayId: string;
  id: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DeleteArgs> = {
  command: 'delete <gatewayId> <id>',
  describe: 'Deletes an AI Gateway dataset.',

  builder: (yargs: Argv): Argv<DeleteArgs> => {
    return yargs
      .positional('gatewayId', {
        type: 'string',
        description: 'gateway id',
        demandOption: true,
      })
      .positional('id', {
        type: 'string',
        description: 'ID',
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
      }) as Argv<DeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.gatewayId as string | undefined, 'gatewayId');
      validateResourceId(argv.id as string | undefined, 'id');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai-gateway provider-configs delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai-gateway/gateways/${argv.gatewayId ?? '<gatewayId>'}/provider_configs/${argv.id ?? '<id>'}`,
          pathParams: { gatewayId: String(argv.gatewayId ?? ''), id: String(argv.id ?? '') },
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

      const result = await client.aiGateway.providerconfigs.delete(accountId, argv.gatewayId, argv.id);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
