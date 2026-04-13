/**
 * integrations-update command
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

interface IntegrationsUpdateArgs {
  integrationId: string;
  active: boolean;
  'reference-id'?: string;
  'tenant-url': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, IntegrationsUpdateArgs> = {
  command: 'integrations-update <integrationId>',
  describe: 'Overwrite the reference_id, tenant_url, and active values with the ones provided.',

  builder: (yargs: Argv): Argv<IntegrationsUpdateArgs> => {
    return yargs
      .positional('integrationId', {
        type: 'string',
        description: 'Integration ID',
        demandOption: true,
      })
      .option('active', {
        type: 'boolean',
        description:
          'Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party.',
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
      }) as Argv<IntegrationsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<IntegrationsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.integrationId as string | undefined, 'integrationId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust risk-scoring integrations-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/zt_risk_scoring/integrations/${argv.integrationId ?? '<integrationId>'}`,
          pathParams: { integrationId: String(argv.integrationId ?? '') },
          body: { active: argv.active, referenceId: argv.referenceId, tenantUrl: argv.tenantUrl },
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
          `/accounts/${accountId}/zt_risk_scoring/integrations/${argv.integrationId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.active !== undefined) setNestedValue(bodyData, ['active'], argv.active);
      if (argv.referenceId !== undefined) setNestedValue(bodyData, ['reference_id'], argv.referenceId);
      if (argv.tenantUrl !== undefined) setNestedValue(bodyData, ['tenant_url'], argv.tenantUrl);
      const result = await client.put<unknown>(
        `/accounts/${accountId}/zt_risk_scoring/integrations/${argv.integrationId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
