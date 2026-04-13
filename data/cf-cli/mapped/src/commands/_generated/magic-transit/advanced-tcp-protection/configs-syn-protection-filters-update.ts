/**
 * configs-syn-protection-filters-update command
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
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface ConfigsSynProtectionFiltersUpdateArgs {
  filterId: string;
  expression?: string;
  mode?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ConfigsSynProtectionFiltersUpdateArgs> = {
  command: 'configs-syn-protection-filters-update <filterId>',
  describe: 'Update a SYN Protection filter specified by the given UUID.',

  builder: (yargs: Argv): Argv<ConfigsSynProtectionFiltersUpdateArgs> => {
    return yargs
      .positional('filterId', {
        type: 'string',
        description: 'The UUID of the filter to update.',
        demandOption: true,
      })
      .option('expression', {
        type: 'string',
        description: 'The new filter expression. Optional.',
        default: undefined,
      })
      .option('mode', {
        type: 'string',
        description: "The new mode for the filter. Optional. Must be one of 'enabled', 'disabled', 'monitoring'.",
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<ConfigsSynProtectionFiltersUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConfigsSynProtectionFiltersUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.filterId as string | undefined, 'filterId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit advanced-tcp-protection configs-syn-protection-filters-update',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/advanced_tcp_protection/configs/syn_protection/filters/${argv.filterId ?? '<filterId>'}`,
          pathParams: { filterId: String(argv.filterId ?? '') },
          body: { expression: argv.expression, mode: argv.mode },
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/magic/advanced_tcp_protection/configs/syn_protection/filters/${argv.filterId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.expression !== undefined) setNestedValue(bodyData, ['expression'], argv.expression);
      if (argv.mode !== undefined) setNestedValue(bodyData, ['mode'], argv.mode);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/magic/advanced_tcp_protection/configs/syn_protection/filters/${argv.filterId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
