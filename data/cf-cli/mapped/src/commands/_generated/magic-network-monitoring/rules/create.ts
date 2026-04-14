/**
 * create command
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

interface CreateArgs {
  'automatic-advertisement': boolean;
  'bandwidth-threshold'?: number;
  duration?: string;
  name: string;
  'packet-threshold'?: number;
  'prefix-match'?: string;
  prefixes: string;
  type: string;
  'zscore-sensitivity'?: string;
  'zscore-target'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe:
    'Create network monitoring rules for account. Currently only supports creating a single rule per API request.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('automatic-advertisement', {
        type: 'boolean',
        description:
          'Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit.',
      })
      .option('bandwidth-threshold', {
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
      .option('prefix-match', {
        type: 'string',
        description:
          'Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule.',
        choices: ['exact', 'subnet', 'supernet'] as const,
        default: undefined,
      })
      .option('prefixes', {
        type: 'string',
        description: 'The prefixes field',
      })
      .option('type', {
        type: 'string',
        description: 'MNM rule type.',
        choices: ['threshold', 'zscore', 'advanced_ddos'] as const,
      })
      .option('zscore-sensitivity', {
        type: 'string',
        description: 'Level of sensitivity set for zscore rules.',
        choices: ['low', 'medium', 'high'] as const,
        default: undefined,
      })
      .option('zscore-target', {
        type: 'string',
        description: 'Target of the zscore rule analysis.',
        choices: ['bits', 'packets'] as const,
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
      .choices('duration', ['1m', '5m', '10m', '15m', '20m', '30m', '45m', '60m'] as const)
      .choices('prefix-match', ['exact', 'subnet', 'supernet'] as const)
      .choices('type', ['threshold', 'zscore', 'advanced_ddos'] as const)
      .choices('zscore-sensitivity', ['low', 'medium', 'high'] as const)
      .choices('zscore-target', ['bits', 'packets'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-network-monitoring rules create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/mnm/rules`,
          pathParams: {},
          body: {
            automaticAdvertisement: argv.automaticAdvertisement,
            bandwidthThreshold: argv.bandwidthThreshold,
            duration: argv.duration,
            name: argv.name,
            packetThreshold: argv.packetThreshold,
            prefixMatch: argv.prefixMatch,
            prefixes: argv.prefixes,
            type: argv.type,
            zscoreSensitivity: argv.zscoreSensitivity,
            zscoreTarget: argv.zscoreTarget,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/mnm/rules`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.automaticAdvertisement !== undefined)
        setNestedValue(bodyData, ['automatic_advertisement'], argv.automaticAdvertisement);
      if (argv.bandwidthThreshold !== undefined)
        setNestedValue(bodyData, ['bandwidth_threshold'], argv.bandwidthThreshold);
      if (argv.duration !== undefined) setNestedValue(bodyData, ['duration'], argv.duration);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.packetThreshold !== undefined) setNestedValue(bodyData, ['packet_threshold'], argv.packetThreshold);
      if (argv.prefixMatch !== undefined) setNestedValue(bodyData, ['prefix_match'], argv.prefixMatch);
      if (argv.prefixes !== undefined) setNestedValue(bodyData, ['prefixes'], argv.prefixes);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      if (argv.zscoreSensitivity !== undefined)
        setNestedValue(bodyData, ['zscore_sensitivity'], argv.zscoreSensitivity);
      if (argv.zscoreTarget !== undefined) setNestedValue(bodyData, ['zscore_target'], argv.zscoreTarget);
      const result = await client.post<unknown>(`/accounts/${accountId}/mnm/rules`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
