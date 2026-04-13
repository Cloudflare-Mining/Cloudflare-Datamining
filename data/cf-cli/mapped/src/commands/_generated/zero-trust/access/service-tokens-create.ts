/**
 * service-tokens-create command
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

interface ServiceTokensCreateArgs {
  'client-secret-version'?: number;
  duration?: string;
  name: string;
  'previous-client-secret-expires-at'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ServiceTokensCreateArgs> = {
  command: 'service-tokens-create',
  describe:
    'Generates a new service token. **Note:** This is the only time you can get the Client Secret. If you lose the Client Secret, you will have to rotate the Client Secret or create a new service token.',

  builder: (yargs: Argv): Argv<ServiceTokensCreateArgs> => {
    return yargs
      .option('client-secret-version', {
        type: 'number',
        description:
          'A version number identifying the current \`client_secret\` associated with the service token. Incrementing it triggers a rotation; the previous secret will still be accepted until the time indicated by \`previous_client_secret_expires_at\`.',
        default: undefined,
      })
      .option('duration', {
        type: 'string',
        description:
          'The duration for how long the service token will be valid. Must be in the format \`300ms\` or \`2h45m\`. Valid time units are: ns, us (or µs), ms, s, m, h. The default is 1 year in hours (8760h).',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'The name of the service token.',
      })
      .option('previous-client-secret-expires-at', {
        type: 'string',
        description:
          'The expiration of the previous \`client_secret\`. This can be modified at any point after a rotation. For example, you may extend it further into the future if you need more time to update services with the new secret; or move it into the past to immediately invalidate the previous token in case of compromise.',
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
      }) as Argv<ServiceTokensCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ServiceTokensCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust access service-tokens-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/access/service_tokens`,
          pathParams: {},
          body: {
            clientSecretVersion: argv.clientSecretVersion,
            duration: argv.duration,
            name: argv.name,
            previousClientSecretExpiresAt: argv.previousClientSecretExpiresAt,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/access/service_tokens`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.clientSecretVersion !== undefined)
        setNestedValue(bodyData, ['client_secret_version'], argv.clientSecretVersion);
      if (argv.duration !== undefined) setNestedValue(bodyData, ['duration'], argv.duration);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.previousClientSecretExpiresAt !== undefined)
        setNestedValue(bodyData, ['previous_client_secret_expires_at'], argv.previousClientSecretExpiresAt);
      const result = await client.post<unknown>(`/accounts/${accountId}/access/service_tokens`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
