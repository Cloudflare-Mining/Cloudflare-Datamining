/**
 * deployment-groups-update command
 * @generated from apis/zero-trust/schema.ts
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

interface DeploymentGroupsUpdateArgs {
  groupId: string;
  name?: string;
  'policy-ids'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DeploymentGroupsUpdateArgs> = {
  command: 'deployment-groups-update <groupId>',
  describe:
    'Updates a deployment group. Returns 409 if any newly added policy IDs already belong to another deployment group. This endpoint is in Beta.',

  builder: (yargs: Argv): Argv<DeploymentGroupsUpdateArgs> => {
    return yargs
      .positional('groupId', {
        type: 'string',
        description: 'Group ID',
        demandOption: true,
      })
      .option('name', {
        type: 'string',
        description: 'A user-friendly name for the deployment group.',
        default: undefined,
      })
      .option('policy-ids', {
        type: 'string',
        description: 'Replaces the entire list of policy IDs.',
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
      }) as Argv<DeploymentGroupsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeploymentGroupsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.groupId as string | undefined, 'groupId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust devices deployment-groups-update',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/devices/deployment-groups/${argv.groupId ?? '<groupId>'}`,
          pathParams: { groupId: String(argv.groupId ?? '') },
          body: { name: argv.name, policyIds: argv.policyIds },
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/devices/deployment-groups/${argv.groupId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.policyIds !== undefined) setNestedValue(bodyData, ['policy_ids'], argv.policyIds);
      const result = await client.patch<unknown>(`/accounts/${accountId}/devices/deployment-groups/${argv.groupId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
