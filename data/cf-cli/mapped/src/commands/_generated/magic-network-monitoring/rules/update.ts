/**
 * update command
 * @generated from apis/magic-network-monitoring/schema.ts
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

interface UpdateArgs {
  'automatic-advertisement'?: boolean;
  bandwidth?: number;
  duration: string;
  id?: string;
  name: string;
  'packet-threshold'?: number;
  prefixes?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update',
  describe: 'Update network monitoring rules for account.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .option('automatic-advertisement', {
        type: 'boolean',
        description:
          'Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit.',
        default: false,
      })
      .option('bandwidth', {
        type: 'number',
        description:
          'The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.',
        default: undefined,
      })
      .option('duration', {
        type: 'string',
        description:
          'The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m","60m"].',
        choices: ['1m', '5m', '10m', '15m', '20m', '30m', '45m', '60m'] as const,
      })
      .option('id', {
        type: 'string',
        description: 'The id of the rule. Must be unique.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description:
          'The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters.',
      })
      .option('packet-threshold', {
        type: 'number',
        description:
          'The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.',
        default: undefined,
      })
      .option('prefixes', {
        type: 'string',
        description: 'The prefixes field',
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
      })
      .choices('duration', ['1m', '5m', '10m', '15m', '20m', '30m', '45m', '60m'] as const) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-network-monitoring rules update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/mnm/rules`,
          pathParams: {},
          body: {
            automaticAdvertisement: argv.automaticAdvertisement,
            bandwidth: argv.bandwidth,
            duration: argv.duration,
            id: argv.id,
            name: argv.name,
            packetThreshold: argv.packetThreshold,
            prefixes: argv.prefixes,
          },
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
        const result = await client.put<unknown>(`/accounts/${accountId}/mnm/rules`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.automaticAdvertisement !== undefined)
        setNestedValue(bodyData, ['automatic_advertisement'], argv.automaticAdvertisement);
      if (argv.bandwidth !== undefined) setNestedValue(bodyData, ['bandwidth'], argv.bandwidth);
      if (argv.duration !== undefined) setNestedValue(bodyData, ['duration'], argv.duration);
      if (argv.id !== undefined) setNestedValue(bodyData, ['id'], argv.id);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.packetThreshold !== undefined) setNestedValue(bodyData, ['packet_threshold'], argv.packetThreshold);
      if (argv.prefixes !== undefined) setNestedValue(bodyData, ['prefixes'], argv.prefixes);
      const result = await client.put<unknown>(`/accounts/${accountId}/mnm/rules`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
