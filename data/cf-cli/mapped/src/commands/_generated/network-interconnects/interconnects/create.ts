/**
 * create command
 * @generated from apis/network-interconnects/schema.ts
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
  account: string;
  type: string;
  'slot-id'?: string;
  speed?: string;
  bandwidth?: string;
  'pairing-key'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe:
    "Creates a new network interconnect for connecting Cloudflare's network to external networks. Interconnects provide dedicated bandwidth and reduced latency for traffic exchange.",

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('account', {
        type: 'string',
        description: 'The account field',
      })
      .option('type', {
        type: 'string',
        description: 'The type field',
      })
      .option('slot-id', {
        type: 'string',
        description: 'The slot_id field',
        default: undefined,
      })
      .option('speed', {
        type: 'string',
        description: 'The speed field',
        default: undefined,
      })
      .option('bandwidth', {
        type: 'string',
        description: 'Bandwidth structure as visible through the customer-facing API.',
        choices: ['50M', '100M', '200M', '300M', '400M', '500M', '1G', '2G', '5G', '10G', '20G', '50G'] as const,
        default: undefined,
      })
      .option('pairing-key', {
        type: 'string',
        description: 'Pairing key provided by GCP',
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
      .conflicts('slot-id', ['bandwidth', 'pairingKey'])
      .conflicts('speed', ['bandwidth', 'pairingKey'])
      .conflicts('bandwidth', ['slotId', 'speed'])
      .implies('bandwidth', ['pairingKey'])
      .conflicts('pairing-key', ['slotId', 'speed'])
      .implies('pairing-key', ['bandwidth'])
      .choices('bandwidth', [
        '50M',
        '100M',
        '200M',
        '300M',
        '400M',
        '500M',
        '1G',
        '2G',
        '5G',
        '10G',
        '20G',
        '50G',
      ] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf network-interconnects interconnects create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cni/interconnects`,
          pathParams: {},
          body: {
            account: argv.account,
            type: argv.type,
            slotId: argv.slotId,
            speed: argv.speed,
            bandwidth: argv.bandwidth,
            pairingKey: argv.pairingKey,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/cni/interconnects`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.account !== undefined) setNestedValue(bodyData, ['account'], argv.account);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      if (argv.slotId !== undefined) setNestedValue(bodyData, ['slot_id'], argv.slotId);
      if (argv.speed !== undefined) setNestedValue(bodyData, ['speed'], argv.speed);
      if (argv.bandwidth !== undefined) setNestedValue(bodyData, ['bandwidth'], argv.bandwidth);
      if (argv.pairingKey !== undefined) setNestedValue(bodyData, ['pairing_key'], argv.pairingKey);
      const result = await client.post<unknown>(`/accounts/${accountId}/cni/interconnects`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
