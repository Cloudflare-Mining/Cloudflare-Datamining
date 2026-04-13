/**
 * create command
 * @generated from apis/magic-cloud-networking/schema.ts
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
  forwarded?: string;
  'adopted-hub-id'?: string;
  'attached-hubs'?: string;
  'attached-vpcs'?: string;
  'cloud-asn'?: number;
  'cloud-type': string;
  description?: string;
  'dynamic-routing': boolean;
  'hub-provider-id'?: string;
  'install-routes-in-cloud': boolean;
  'install-routes-in-magic-wan': boolean;
  'manage-hub-to-hub-attachments'?: boolean;
  'manage-vpc-to-hub-attachments'?: boolean;
  name: string;
  region?: string;
  type: string;
  vpc?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Create a new On-ramp (Closed Beta).',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('forwarded', {
        type: 'string',
        description: 'The forwarded header',
        default: undefined,
      })
      .option('adopted-hub-id', {
        type: 'string',
        description: 'The adopted_hub_id field',
        default: undefined,
      })
      .option('attached-hubs', {
        type: 'string',
        description: 'The attached_hubs field',
        default: undefined,
      })
      .option('attached-vpcs', {
        type: 'string',
        description: 'The attached_vpcs field',
        default: undefined,
      })
      .option('cloud-asn', {
        type: 'number',
        description: "Sets the cloud-side ASN. If unset or zero, the cloud's default ASN takes effect.",
        default: undefined,
      })
      .option('cloud-type', {
        type: 'string',
        description: 'The cloud_type field',
        choices: ['AWS', 'AZURE', 'GOOGLE'] as const,
      })
      .option('description', {
        type: 'string',
        description: 'The description field',
        default: undefined,
      })
      .option('dynamic-routing', {
        type: 'boolean',
        description:
          'Enables BGP routing. When enabling this feature, set both install_routes_in_cloud and install_routes_in_magic_wan to false.',
      })
      .option('hub-provider-id', {
        type: 'string',
        description: 'The hub_provider_id field',
        default: undefined,
      })
      .option('install-routes-in-cloud', {
        type: 'boolean',
        description: 'The install_routes_in_cloud field',
      })
      .option('install-routes-in-magic-wan', {
        type: 'boolean',
        description: 'The install_routes_in_magic_wan field',
      })
      .option('manage-hub-to-hub-attachments', {
        type: 'boolean',
        description: 'The manage_hub_to_hub_attachments field',
        default: false,
      })
      .option('manage-vpc-to-hub-attachments', {
        type: 'boolean',
        description: 'The manage_vpc_to_hub_attachments field',
        default: false,
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
      })
      .option('region', {
        type: 'string',
        description: 'The region field',
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description: 'The type field',
        choices: ['OnrampTypeSingle', 'OnrampTypeHub'] as const,
      })
      .option('vpc', {
        type: 'string',
        description: 'The vpc field',
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
      .choices('cloud-type', ['AWS', 'AZURE', 'GOOGLE'] as const)
      .choices('type', ['OnrampTypeSingle', 'OnrampTypeHub'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      const headers: Record<string, string> = {};
      if (argv.forwarded !== undefined) headers['forwarded'] = String(argv.forwarded);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-cloud-networking on-ramps create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/cloud/onramps`,
          pathParams: {},
          body: {
            adoptedHubId: argv.adoptedHubId,
            attachedHubs: argv.attachedHubs,
            attachedVpcs: argv.attachedVpcs,
            cloudAsn: argv.cloudAsn,
            cloudType: argv.cloudType,
            description: argv.description,
            dynamicRouting: argv.dynamicRouting,
            hubProviderId: argv.hubProviderId,
            installRoutesInCloud: argv.installRoutesInCloud,
            installRoutesInMagicWan: argv.installRoutesInMagicWan,
            manageHubToHubAttachments: argv.manageHubToHubAttachments,
            manageVpcToHubAttachments: argv.manageVpcToHubAttachments,
            name: argv.name,
            region: argv.region,
            type: argv.type,
            vpc: argv.vpc,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/magic/cloud/onramps`, {
          body: bodyData,
          headers: Object.keys(headers).length > 0 ? headers : undefined,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.adoptedHubId !== undefined) setNestedValue(bodyData, ['adopted_hub_id'], argv.adoptedHubId);
      if (argv.attachedHubs !== undefined) setNestedValue(bodyData, ['attached_hubs'], argv.attachedHubs);
      if (argv.attachedVpcs !== undefined) setNestedValue(bodyData, ['attached_vpcs'], argv.attachedVpcs);
      if (argv.cloudAsn !== undefined) setNestedValue(bodyData, ['cloud_asn'], argv.cloudAsn);
      if (argv.cloudType !== undefined) setNestedValue(bodyData, ['cloud_type'], argv.cloudType);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.dynamicRouting !== undefined) setNestedValue(bodyData, ['dynamic_routing'], argv.dynamicRouting);
      if (argv.hubProviderId !== undefined) setNestedValue(bodyData, ['hub_provider_id'], argv.hubProviderId);
      if (argv.installRoutesInCloud !== undefined)
        setNestedValue(bodyData, ['install_routes_in_cloud'], argv.installRoutesInCloud);
      if (argv.installRoutesInMagicWan !== undefined)
        setNestedValue(bodyData, ['install_routes_in_magic_wan'], argv.installRoutesInMagicWan);
      if (argv.manageHubToHubAttachments !== undefined)
        setNestedValue(bodyData, ['manage_hub_to_hub_attachments'], argv.manageHubToHubAttachments);
      if (argv.manageVpcToHubAttachments !== undefined)
        setNestedValue(bodyData, ['manage_vpc_to_hub_attachments'], argv.manageVpcToHubAttachments);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.region !== undefined) setNestedValue(bodyData, ['region'], argv.region);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      if (argv.vpc !== undefined) setNestedValue(bodyData, ['vpc'], argv.vpc);
      const result = await client.post<unknown>(`/accounts/${accountId}/magic/cloud/onramps`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
        headers: Object.keys(headers).length > 0 ? headers : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
