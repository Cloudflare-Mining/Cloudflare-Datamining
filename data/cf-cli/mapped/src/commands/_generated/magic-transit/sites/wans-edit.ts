/**
 * wans-edit command
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

interface WansEditArgs {
  siteId: string;
  wanId: string;
  name?: string;
  physport?: number;
  priority?: number;
  'static-addressing-address': string;
  'static-addressing-gateway-address': string;
  'static-addressing-secondary-address'?: string;
  'vlan-tag'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, WansEditArgs> = {
  command: 'wans-edit <siteId> <wanId>',
  describe: 'Patch a specific Site WAN.',

  builder: (yargs: Argv): Argv<WansEditArgs> => {
    return yargs
      .positional('siteId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .positional('wanId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
        default: undefined,
      })
      .option('physport', {
        type: 'number',
        description: 'The physport field',
        default: undefined,
      })
      .option('priority', {
        type: 'number',
        description: 'The priority field',
        default: undefined,
      })
      .option('static-addressing-address', {
        type: 'string',
        description: 'A valid CIDR notation representing an IP range.',
      })
      .option('static-addressing-gateway-address', {
        type: 'string',
        description: 'A valid IPv4 address.',
      })
      .option('static-addressing-secondary-address', {
        type: 'string',
        description: 'A valid CIDR notation representing an IP range.',
        default: undefined,
      })
      .option('vlan-tag', {
        type: 'number',
        description: 'VLAN ID. Use zero for untagged.',
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
      }) as Argv<WansEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<WansEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.siteId as string | undefined, 'siteId');
      validateResourceId(argv.wanId as string | undefined, 'wanId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit sites wans-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/sites/${argv.siteId ?? '<siteId>'}/wans/${argv.wanId ?? '<wanId>'}`,
          pathParams: { siteId: String(argv.siteId ?? ''), wanId: String(argv.wanId ?? '') },
          body: {
            name: argv.name,
            physport: argv.physport,
            priority: argv.priority,
            staticAddressingAddress: argv.staticAddressingAddress,
            staticAddressingGatewayAddress: argv.staticAddressingGatewayAddress,
            staticAddressingSecondaryAddress: argv.staticAddressingSecondaryAddress,
            vlanTag: argv.vlanTag,
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
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/magic/sites/${argv.siteId}/wans/${argv.wanId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.physport !== undefined) setNestedValue(bodyData, ['physport'], argv.physport);
      if (argv.priority !== undefined) setNestedValue(bodyData, ['priority'], argv.priority);
      if (argv.staticAddressingAddress !== undefined)
        setNestedValue(bodyData, ['static_addressing', 'address'], argv.staticAddressingAddress);
      if (argv.staticAddressingGatewayAddress !== undefined)
        setNestedValue(bodyData, ['static_addressing', 'gateway_address'], argv.staticAddressingGatewayAddress);
      if (argv.staticAddressingSecondaryAddress !== undefined)
        setNestedValue(bodyData, ['static_addressing', 'secondary_address'], argv.staticAddressingSecondaryAddress);
      if (argv.vlanTag !== undefined) setNestedValue(bodyData, ['vlan_tag'], argv.vlanTag);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/magic/sites/${argv.siteId}/wans/${argv.wanId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
