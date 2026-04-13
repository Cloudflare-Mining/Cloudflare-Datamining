/**
 * edit command
 * @generated from apis/magic-cloud-networking/schema.ts
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

interface EditArgs {
  onrampId: string;
  'attached-hubs'?: string;
  'attached-vpcs'?: string;
  description?: string;
  'install-routes-in-cloud'?: boolean;
  'install-routes-in-magic-wan'?: boolean;
  'manage-hub-to-hub-attachments'?: boolean;
  'manage-vpc-to-hub-attachments'?: boolean;
  name?: string;
  vpc?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <onrampId>',
  describe: 'Update an On-ramp (Closed Beta).',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('onrampId', {
        type: 'string',
        description: 'Onramp ID',
        demandOption: true,
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
      .option('description', {
        type: 'string',
        description: 'The description field',
        default: undefined,
      })
      .option('install-routes-in-cloud', {
        type: 'boolean',
        description: 'The install_routes_in_cloud field',
        default: false,
      })
      .option('install-routes-in-magic-wan', {
        type: 'boolean',
        description: 'The install_routes_in_magic_wan field',
        default: false,
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
        default: undefined,
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
      }) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.onrampId as string | undefined, 'onrampId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-cloud-networking on-ramps edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/cloud/onramps/${argv.onrampId ?? '<onrampId>'}`,
          pathParams: { onrampId: String(argv.onrampId ?? '') },
          body: {
            attachedHubs: argv.attachedHubs,
            attachedVpcs: argv.attachedVpcs,
            description: argv.description,
            installRoutesInCloud: argv.installRoutesInCloud,
            installRoutesInMagicWan: argv.installRoutesInMagicWan,
            manageHubToHubAttachments: argv.manageHubToHubAttachments,
            manageVpcToHubAttachments: argv.manageVpcToHubAttachments,
            name: argv.name,
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/magic/cloud/onramps/${argv.onrampId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.attachedHubs !== undefined) setNestedValue(bodyData, ['attached_hubs'], argv.attachedHubs);
      if (argv.attachedVpcs !== undefined) setNestedValue(bodyData, ['attached_vpcs'], argv.attachedVpcs);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.installRoutesInCloud !== undefined)
        setNestedValue(bodyData, ['install_routes_in_cloud'], argv.installRoutesInCloud);
      if (argv.installRoutesInMagicWan !== undefined)
        setNestedValue(bodyData, ['install_routes_in_magic_wan'], argv.installRoutesInMagicWan);
      if (argv.manageHubToHubAttachments !== undefined)
        setNestedValue(bodyData, ['manage_hub_to_hub_attachments'], argv.manageHubToHubAttachments);
      if (argv.manageVpcToHubAttachments !== undefined)
        setNestedValue(bodyData, ['manage_vpc_to_hub_attachments'], argv.manageVpcToHubAttachments);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.vpc !== undefined) setNestedValue(bodyData, ['vpc'], argv.vpc);
      const result = await client.patch<unknown>(`/accounts/${accountId}/magic/cloud/onramps/${argv.onrampId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
