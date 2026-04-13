/**
 * credentials-edit command
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

interface CredentialsEditArgs {
  location?: string;
  'location-name'?: string;
  name?: string;
  value?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CredentialsEditArgs> = {
  command: 'credentials-edit',
  describe: 'Updates a credential with only the provided fields; omitted fields remain unchanged.',

  builder: (yargs: Argv): Argv<CredentialsEditArgs> => {
    return yargs
      .option('location', {
        type: 'string',
        description: 'Where the credential is attached in outgoing requests.',
        choices: ['header', 'cookie'] as const,
        default: undefined,
      })
      .option('location-name', {
        type: 'string',
        description: 'Name of the header or cookie where the credential is attached. ',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Human-readable name.',
        default: undefined,
      })
      .option('value', {
        type: 'string',
        description: 'The credential value. Write-only. Never returned in responses. ',
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
      .choices('location', ['header', 'cookie'] as const) as Argv<CredentialsEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CredentialsEditArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf vuln-scanner credential-sets credentials-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/vuln_scanner/credential_sets/${argv.credentialSetId ?? '<credentialSetId>'}/credentials/${argv.credentialId ?? '<credentialId>'}`,
          pathParams: {
            credentialSetId: String(argv.credentialSetId ?? ''),
            credentialId: String(argv.credentialId ?? ''),
          },
          body: { location: argv.location, locationName: argv.locationName, name: argv.name, value: argv.value },
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
          `/accounts/${accountId}/vuln_scanner/credential_sets/${argv.credentialSetId}/credentials/${argv.credentialId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.location !== undefined) setNestedValue(bodyData, ['location'], argv.location);
      if (argv.locationName !== undefined) setNestedValue(bodyData, ['location_name'], argv.locationName);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.value !== undefined) setNestedValue(bodyData, ['value'], argv.value);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/vuln_scanner/credential_sets/${argv.credentialSetId}/credentials/${argv.credentialId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
