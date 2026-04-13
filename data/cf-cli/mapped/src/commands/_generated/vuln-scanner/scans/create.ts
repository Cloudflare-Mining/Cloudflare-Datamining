/**
 * create command
 * @generated from apis/vuln-scanner/schema.ts
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
  'credential-sets-attacker': string;
  'credential-sets-owner': string;
  'open-api': string;
  'scan-type': string;
  'target-environment-id': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe:
    'Creates and starts a new vulnerability scan. The response may include non-fatal warnings in the \`messages\` array.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('credential-sets-attacker', {
        type: 'string',
        description: 'Credential set ID for the attacker.',
      })
      .option('credential-sets-owner', {
        type: 'string',
        description: 'Credential set ID for the resource owner.',
      })
      .option('open-api', {
        type: 'string',
        description:
          'OpenAPI schema definition for the API under test. The scanner uses this to discover endpoints and construct requests. ',
      })
      .option('scan-type', {
        type: 'string',
        description: 'The scan_type field',
        choices: ['bola'] as const,
      })
      .option('target-environment-id', {
        type: 'string',
        description: 'The target environment to scan.',
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
      .choices('scan-type', ['bola'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf vuln-scanner scans create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/vuln_scanner/scans`,
          pathParams: {},
          body: {
            credentialSetsAttacker: argv.credentialSetsAttacker,
            credentialSetsOwner: argv.credentialSetsOwner,
            openApi: argv.openApi,
            scanType: argv.scanType,
            targetEnvironmentId: argv.targetEnvironmentId,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/vuln_scanner/scans`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.credentialSetsAttacker !== undefined)
        setNestedValue(bodyData, ['credential_sets', 'attacker'], argv.credentialSetsAttacker);
      if (argv.credentialSetsOwner !== undefined)
        setNestedValue(bodyData, ['credential_sets', 'owner'], argv.credentialSetsOwner);
      if (argv.openApi !== undefined) setNestedValue(bodyData, ['open_api'], argv.openApi);
      if (argv.scanType !== undefined) setNestedValue(bodyData, ['scan_type'], argv.scanType);
      if (argv.targetEnvironmentId !== undefined)
        setNestedValue(bodyData, ['target_environment_id'], argv.targetEnvironmentId);
      const result = await client.post<unknown>(`/accounts/${accountId}/vuln_scanner/scans`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
