/**
 * update command
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

interface UpdateArgs {
  providerId: string;
  'aws-arn'?: string;
  'azure-subscription-id'?: string;
  'azure-tenant-id'?: string;
  description?: string;
  'friendly-name'?: string;
  'gcp-project-id'?: string;
  'gcp-service-account-email'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <providerId>',
  describe: 'Update a Cloud Integration (Closed Beta).',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('providerId', {
        type: 'string',
        description: 'Provider ID',
        demandOption: true,
      })
      .option('aws-arn', {
        type: 'string',
        description: 'The aws_arn field',
        default: undefined,
      })
      .option('azure-subscription-id', {
        type: 'string',
        description: 'The azure_subscription_id field',
        default: undefined,
      })
      .option('azure-tenant-id', {
        type: 'string',
        description: 'The azure_tenant_id field',
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'The description field',
        default: undefined,
      })
      .option('friendly-name', {
        type: 'string',
        description: 'The friendly_name field',
        default: undefined,
      })
      .option('gcp-project-id', {
        type: 'string',
        description: 'The gcp_project_id field',
        default: undefined,
      })
      .option('gcp-service-account-email', {
        type: 'string',
        description: 'The gcp_service_account_email field',
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.providerId as string | undefined, 'providerId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-cloud-networking cloud-integrations update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/cloud/providers/${argv.providerId ?? '<providerId>'}`,
          pathParams: { providerId: String(argv.providerId ?? '') },
          body: {
            awsArn: argv.awsArn,
            azureSubscriptionId: argv.azureSubscriptionId,
            azureTenantId: argv.azureTenantId,
            description: argv.description,
            friendlyName: argv.friendlyName,
            gcpProjectId: argv.gcpProjectId,
            gcpServiceAccountEmail: argv.gcpServiceAccountEmail,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/magic/cloud/providers/${argv.providerId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.awsArn !== undefined) setNestedValue(bodyData, ['aws_arn'], argv.awsArn);
      if (argv.azureSubscriptionId !== undefined)
        setNestedValue(bodyData, ['azure_subscription_id'], argv.azureSubscriptionId);
      if (argv.azureTenantId !== undefined) setNestedValue(bodyData, ['azure_tenant_id'], argv.azureTenantId);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.friendlyName !== undefined) setNestedValue(bodyData, ['friendly_name'], argv.friendlyName);
      if (argv.gcpProjectId !== undefined) setNestedValue(bodyData, ['gcp_project_id'], argv.gcpProjectId);
      if (argv.gcpServiceAccountEmail !== undefined)
        setNestedValue(bodyData, ['gcp_service_account_email'], argv.gcpServiceAccountEmail);
      const result = await client.put<unknown>(`/accounts/${accountId}/magic/cloud/providers/${argv.providerId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
