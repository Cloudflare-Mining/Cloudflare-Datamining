/**
 * configs-tcp-flow-protection-filters-delete-protection-filter command
 * @generated from apis/magic-transit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface ConfigsTCPFlowProtectionFiltersDeleteProtectionFilterArgs {
  filterId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ConfigsTCPFlowProtectionFiltersDeleteProtectionFilterArgs> = {
  command: 'configs-tcp-flow-protection-filters-delete-protection-filter <filterId>',
  describe: 'Delete a TCP Flow Protection filter specified by the given UUID.',

  builder: (yargs: Argv): Argv<ConfigsTCPFlowProtectionFiltersDeleteProtectionFilterArgs> => {
    return yargs
      .positional('filterId', {
        type: 'string',
        description: 'The UUID of the filter to delete.',
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
      }) as Argv<ConfigsTCPFlowProtectionFiltersDeleteProtectionFilterArgs>;
  },

  handler: async (
    argv: ArgumentsCamelCase<ConfigsTCPFlowProtectionFiltersDeleteProtectionFilterArgs>,
  ): Promise<void> => {
    try {
      validateResourceId(argv.filterId as string | undefined, 'filterId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command:
            'cf magic-transit advanced-tcp-protection configs-tcp-flow-protection-filters-delete-protection-filter',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/${argv.filterId ?? '<filterId>'}`,
          pathParams: { filterId: String(argv.filterId ?? '') },
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

      const result =
        await client.magicTransit.advancedtcpprotection.configsTcpFlowProtectionFiltersDeleteProtectionFilter(
          accountId,
          argv.filterId,
        );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
