/**
 * config-edit command
 * @generated from apis/cloudforce-one/schema.ts
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

interface ConfigEditArgs {
  configId: string;
  frequency?: number;
  ips?: string;
  ports?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ConfigEditArgs> = {
  command: 'config-edit <configId>',
  describe: 'Update a scan configuration',

  builder: (yargs: Argv): Argv<ConfigEditArgs> => {
    return yargs
      .positional('configId', {
        type: 'string',
        description: 'Defines the Config ID.',
        demandOption: true,
      })
      .option('frequency', {
        type: 'number',
        description: 'Defines the number of days between each scan (0 = One-off scan).',
        default: undefined,
      })
      .option('ips', {
        type: 'string',
        description:
          'Defines a list of IP addresses or CIDR blocks to scan. The maximum number of total IP addresses allowed is 5000.',
        default: undefined,
      })
      .option('ports', {
        type: 'string',
        description:
          'Defines a list of ports to scan. Valid values are:"default", "all", or a comma-separated list of ports or range of ports (e.g. ["1-80", "443"]). "default" scans the 100 most commonly open ports.',
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
      }) as Argv<ConfigEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConfigEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.configId as string | undefined, 'configId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one scans config-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/scans/config/${argv.configId ?? '<configId>'}`,
          pathParams: { configId: String(argv.configId ?? '') },
          body: { frequency: argv.frequency, ips: argv.ips, ports: argv.ports },
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
          `/accounts/${accountId}/cloudforce-one/scans/config/${argv.configId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.frequency !== undefined) setNestedValue(bodyData, ['frequency'], argv.frequency);
      if (argv.ips !== undefined) setNestedValue(bodyData, ['ips'], argv.ips);
      if (argv.ports !== undefined) setNestedValue(bodyData, ['ports'], argv.ports);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/cloudforce-one/scans/config/${argv.configId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
