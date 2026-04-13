/**
 * doh-update command
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

interface DohUpdateArgs {
  'doh-jwt-duration'?: string;
  'service-token-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DohUpdateArgs> = {
  command: 'doh-update',
  describe: 'Updates the DoH settings for your Zero Trust organization.',

  builder: (yargs: Argv): Argv<DohUpdateArgs> => {
    return yargs
      .option('doh-jwt-duration', {
        type: 'string',
        description:
          'The duration the DoH JWT is valid for. Must be in the format \`300ms\` or \`2h45m\`. Valid time units are: ns, us (or µs), ms, s, m, h.  Note that the maximum duration for this setting is the same as the key rotation period on the account. Default expiration is 24h',
        default: undefined,
      })
      .option('service-token-id', {
        type: 'string',
        description: 'The uuid of the service token you want to use for DoH authentication',
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
      }) as Argv<DohUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DohUpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust organizations doh-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/access/organizations/doh`,
          pathParams: {},
          body: { dohJwtDuration: argv.dohJwtDuration, serviceTokenId: argv.serviceTokenId },
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
        const result = await client.put<unknown>(`/accounts/${accountId}/access/organizations/doh`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.dohJwtDuration !== undefined) setNestedValue(bodyData, ['doh_jwt_duration'], argv.dohJwtDuration);
      if (argv.serviceTokenId !== undefined) setNestedValue(bodyData, ['service_token_id'], argv.serviceTokenId);
      const result = await client.put<unknown>(`/accounts/${accountId}/access/organizations/doh`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
