/**
 * configs-allowlist-create command
 * @generated from apis/magic-transit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface ConfigsAllowlistCreateArgs {
  comment: string;
  enabled: boolean;
  prefix: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ConfigsAllowlistCreateArgs> = {
  command: 'configs-allowlist-create',
  describe: 'Create an allowlist prefix for an account.',

  builder: (yargs: Argv): Argv<ConfigsAllowlistCreateArgs> => {
    return yargs
      .option('comment', {
        type: 'string',
        description: 'An comment describing the allowlist prefix.',
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Whether to enable the allowlist prefix into effect.',
      })
      .option('prefix', {
        type: 'string',
        description: 'The allowlist prefix to add in CIDR format.',
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
      }) as Argv<ConfigsAllowlistCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConfigsAllowlistCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit advanced-tcp-protection configs-allowlist-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/advanced_tcp_protection/configs/allowlist`,
          pathParams: {},
          body: { comment: argv.comment, enabled: argv.enabled, prefix: argv.prefix },
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
        const result = await client.post<unknown>(
          `/accounts/${accountId}/magic/advanced_tcp_protection/configs/allowlist`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.comment !== undefined) setNestedValue(bodyData, ['comment'], argv.comment);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.prefix !== undefined) setNestedValue(bodyData, ['prefix'], argv.prefix);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/magic/advanced_tcp_protection/configs/allowlist`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
