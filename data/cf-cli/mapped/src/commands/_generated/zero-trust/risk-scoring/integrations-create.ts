/**
 * integrations-create command
 * @generated from apis/zero-trust/schema.ts
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

interface IntegrationsCreateArgs {
  'integration-type': string;
  'reference-id'?: string;
  'tenant-url': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, IntegrationsCreateArgs> = {
  command: 'integrations-create',
  describe:
    "Creates a new Zero Trust risk score integration, connecting external risk signals to Cloudflare's risk scoring system.",

  builder: (yargs: Argv): Argv<IntegrationsCreateArgs> => {
    return yargs
      .option('integration-type', {
        type: 'string',
        description: 'The integration_type field',
        choices: ['Okta'] as const,
      })
      .option('reference-id', {
        type: 'string',
        description:
          'A reference id that can be supplied by the client. Currently this should be set to the Access-Okta IDP ID (a UUIDv4). https://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider',
        default: undefined,
      })
      .option('tenant-url', {
        type: 'string',
        description: 'The base url of the tenant, e.g. "https://tenant.okta.com".',
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
      .choices('integration-type', ['Okta'] as const) as Argv<IntegrationsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<IntegrationsCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust risk-scoring integrations-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/zt_risk_scoring/integrations`,
          pathParams: {},
          body: { integrationType: argv.integrationType, referenceId: argv.referenceId, tenantUrl: argv.tenantUrl },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/zt_risk_scoring/integrations`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.integrationType !== undefined) setNestedValue(bodyData, ['integration_type'], argv.integrationType);
      if (argv.referenceId !== undefined) setNestedValue(bodyData, ['reference_id'], argv.referenceId);
      if (argv.tenantUrl !== undefined) setNestedValue(bodyData, ['tenant_url'], argv.tenantUrl);
      const result = await client.post<unknown>(`/accounts/${accountId}/zt_risk_scoring/integrations`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
