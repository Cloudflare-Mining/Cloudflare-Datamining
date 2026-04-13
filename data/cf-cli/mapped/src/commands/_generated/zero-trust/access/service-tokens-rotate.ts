/**
 * service-tokens-rotate command
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

interface ServiceTokensRotateArgs {
  serviceTokenId: string;
  'previous-client-secret-expires-at'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ServiceTokensRotateArgs> = {
  command: 'service-tokens-rotate <serviceTokenId>',
  describe: 'Generates a new Client Secret for a service token and revokes the old one.',

  builder: (yargs: Argv): Argv<ServiceTokensRotateArgs> => {
    return yargs
      .positional('serviceTokenId', {
        type: 'string',
        description: 'UUID.',
        demandOption: true,
      })
      .option('previous-client-secret-expires-at', {
        type: 'string',
        description:
          'The expiration of the previous \`client_secret\`. If not provided, it defaults to the current timestamp in order to immediately expire the previous secret.',
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
      }) as Argv<ServiceTokensRotateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ServiceTokensRotateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.serviceTokenId as string | undefined, 'serviceTokenId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust access service-tokens-rotate',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/access/service_tokens/${argv.serviceTokenId ?? '<serviceTokenId>'}/rotate`,
          pathParams: { serviceTokenId: String(argv.serviceTokenId ?? '') },
          body: { previousClientSecretExpiresAt: argv.previousClientSecretExpiresAt },
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
          `/accounts/${accountId}/access/service_tokens/${argv.serviceTokenId}/rotate`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.previousClientSecretExpiresAt !== undefined)
        setNestedValue(bodyData, ['previous_client_secret_expires_at'], argv.previousClientSecretExpiresAt);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/access/service_tokens/${argv.serviceTokenId}/rotate`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
