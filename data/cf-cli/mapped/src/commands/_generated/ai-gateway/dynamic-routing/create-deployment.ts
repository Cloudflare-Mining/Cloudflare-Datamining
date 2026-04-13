/**
 * create-deployment command
 * @generated from apis/ai-gateway/schema.ts
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

interface CreateDeploymentArgs {
  gatewayId: string;
  id: string;
  'version-id': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateDeploymentArgs> = {
  command: 'create-deployment <gatewayId> <id>',
  describe: 'Create a new AI Gateway Dynamic Route Deployment.',

  builder: (yargs: Argv): Argv<CreateDeploymentArgs> => {
    return yargs
      .positional('gatewayId', {
        type: 'string',
        description: 'Gateway ID',
        demandOption: true,
      })
      .positional('id', {
        type: 'string',
        description: 'ID',
        demandOption: true,
      })
      .option('version-id', {
        type: 'string',
        description: 'The version_id field',
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
      }) as Argv<CreateDeploymentArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateDeploymentArgs>): Promise<void> => {
    try {
      validateResourceId(argv.gatewayId as string | undefined, 'gatewayId');
      validateResourceId(argv.id as string | undefined, 'id');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai-gateway dynamic-routing create-deployment',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai-gateway/gateways/${argv.gatewayId ?? '<gatewayId>'}/routes/${argv.id ?? '<id>'}/deployments`,
          pathParams: { gatewayId: String(argv.gatewayId ?? ''), id: String(argv.id ?? '') },
          body: { versionId: argv.versionId },
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
          `/accounts/${accountId}/ai-gateway/gateways/${argv.gatewayId}/routes/${argv.id}/deployments`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.versionId !== undefined) setNestedValue(bodyData, ['version_id'], argv.versionId);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/ai-gateway/gateways/${argv.gatewayId}/routes/${argv.id}/deployments`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
