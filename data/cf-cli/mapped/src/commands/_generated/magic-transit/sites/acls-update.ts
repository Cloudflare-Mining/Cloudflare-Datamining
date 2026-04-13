/**
 * acls-update command
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

interface AclsUpdateArgs {
  siteId: string;
  aclId: string;
  description?: string;
  'forward-locally'?: boolean;
  'lan-1-lan-id': string;
  'lan-1-lan-name'?: string;
  'lan-1-port-ranges'?: string;
  'lan-1-ports'?: string;
  'lan-2-lan-id': string;
  'lan-2-lan-name'?: string;
  'lan-2-port-ranges'?: string;
  'lan-2-ports'?: string;
  name?: string;
  protocols?: string;
  unidirectional?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, AclsUpdateArgs> = {
  command: 'acls-update <siteId> <aclId>',
  describe: 'Update a specific Site ACL.',

  builder: (yargs: Argv): Argv<AclsUpdateArgs> => {
    return yargs
      .positional('siteId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .positional('aclId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .option('description', {
        type: 'string',
        description: 'Description for the ACL.',
        default: undefined,
      })
      .option('forward-locally', {
        type: 'boolean',
        description:
          'The desired forwarding action for this ACL policy. If set to "false", the policy will forward traffic to Cloudflare. If set to "true", the policy will forward traffic locally on the Magic Connector. If not included in request, will default to false.',
        default: false,
      })
      .option('lan-1-lan-id', {
        type: 'string',
        description: 'The identifier for the LAN you want to create an ACL policy with.',
      })
      .option('lan-1-lan-name', {
        type: 'string',
        description: 'The name of the LAN based on the provided lan_id.',
        default: undefined,
      })
      .option('lan-1-port-ranges', {
        type: 'string',
        description:
          'Array of port ranges on the provided LAN that will be included in the ACL. If no ports or port rangess are provided, communication on any port on this LAN is allowed.',
        default: undefined,
      })
      .option('lan-1-ports', {
        type: 'string',
        description:
          'Array of ports on the provided LAN that will be included in the ACL. If no ports or port ranges are provided, communication on any port on this LAN is allowed.',
        default: undefined,
      })
      .option('lan-2-lan-id', {
        type: 'string',
        description: 'The identifier for the LAN you want to create an ACL policy with.',
      })
      .option('lan-2-lan-name', {
        type: 'string',
        description: 'The name of the LAN based on the provided lan_id.',
        default: undefined,
      })
      .option('lan-2-port-ranges', {
        type: 'string',
        description:
          'Array of port ranges on the provided LAN that will be included in the ACL. If no ports or port rangess are provided, communication on any port on this LAN is allowed.',
        default: undefined,
      })
      .option('lan-2-ports', {
        type: 'string',
        description:
          'Array of ports on the provided LAN that will be included in the ACL. If no ports or port ranges are provided, communication on any port on this LAN is allowed.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'The name of the ACL.',
        default: undefined,
      })
      .option('protocols', {
        type: 'string',
        description: 'The protocols field',
        default: undefined,
      })
      .option('unidirectional', {
        type: 'boolean',
        description:
          'The desired traffic direction for this ACL policy. If set to "false", the policy will allow bidirectional traffic. If set to "true", the policy will only allow traffic in one direction. If not included in request, will default to false.',
        default: false,
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
      }) as Argv<AclsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AclsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.siteId as string | undefined, 'siteId');
      validateResourceId(argv.aclId as string | undefined, 'aclId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit sites acls-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/sites/${argv.siteId ?? '<siteId>'}/acls/${argv.aclId ?? '<aclId>'}`,
          pathParams: { siteId: String(argv.siteId ?? ''), aclId: String(argv.aclId ?? '') },
          body: {
            description: argv.description,
            forwardLocally: argv.forwardLocally,
            lan1LanId: argv.lan1LanId,
            lan1LanName: argv.lan1LanName,
            lan1PortRanges: argv.lan1PortRanges,
            lan1Ports: argv.lan1Ports,
            lan2LanId: argv.lan2LanId,
            lan2LanName: argv.lan2LanName,
            lan2PortRanges: argv.lan2PortRanges,
            lan2Ports: argv.lan2Ports,
            name: argv.name,
            protocols: argv.protocols,
            unidirectional: argv.unidirectional,
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
        const result = await client.put<unknown>(
          `/accounts/${accountId}/magic/sites/${argv.siteId}/acls/${argv.aclId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.forwardLocally !== undefined) setNestedValue(bodyData, ['forward_locally'], argv.forwardLocally);
      if (argv.lan1LanId !== undefined) setNestedValue(bodyData, ['lan_1', 'lan_id'], argv.lan1LanId);
      if (argv.lan1LanName !== undefined) setNestedValue(bodyData, ['lan_1', 'lan_name'], argv.lan1LanName);
      if (argv.lan1PortRanges !== undefined) setNestedValue(bodyData, ['lan_1', 'port_ranges'], argv.lan1PortRanges);
      if (argv.lan1Ports !== undefined) setNestedValue(bodyData, ['lan_1', 'ports'], argv.lan1Ports);
      if (argv.lan2LanId !== undefined) setNestedValue(bodyData, ['lan_2', 'lan_id'], argv.lan2LanId);
      if (argv.lan2LanName !== undefined) setNestedValue(bodyData, ['lan_2', 'lan_name'], argv.lan2LanName);
      if (argv.lan2PortRanges !== undefined) setNestedValue(bodyData, ['lan_2', 'port_ranges'], argv.lan2PortRanges);
      if (argv.lan2Ports !== undefined) setNestedValue(bodyData, ['lan_2', 'ports'], argv.lan2Ports);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.protocols !== undefined) setNestedValue(bodyData, ['protocols'], argv.protocols);
      if (argv.unidirectional !== undefined) setNestedValue(bodyData, ['unidirectional'], argv.unidirectional);
      const result = await client.put<unknown>(`/accounts/${accountId}/magic/sites/${argv.siteId}/acls/${argv.aclId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
