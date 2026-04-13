/**
 * credentials-generate command
 * @generated from apis/workers/schema.ts
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

interface CredentialsGenerateArgs {
  domain: string;
  'expiration-minutes': number;
  permissions: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CredentialsGenerateArgs> = {
  command: 'credentials-generate <domain>',
  describe:
    "Generates temporary credentials for accessing Cloudflare's container image registry. Used for pulling and pushing container images.",

  builder: (yargs: Argv): Argv<CredentialsGenerateArgs> => {
    return yargs
      .positional('domain', {
        type: 'string',
        description: 'The domain to get credentials for.',
        demandOption: true,
      })
      .option('expiration-minutes', {
        type: 'number',
        description: 'The number of minutes the credentials will be valid for.',
      })
      .option('permissions', {
        type: 'string',
        description: 'The permissions field',
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
      }) as Argv<CredentialsGenerateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CredentialsGenerateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.domain as string | undefined, 'domain');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers registries credentials-generate',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/containers/registries/${argv.domain ?? '<domain>'}/credentials`,
          pathParams: { domain: String(argv.domain ?? '') },
          body: { expirationMinutes: argv.expirationMinutes, permissions: argv.permissions },
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
          `/accounts/${accountId}/containers/registries/${argv.domain}/credentials`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.expirationMinutes !== undefined)
        setNestedValue(bodyData, ['expiration_minutes'], argv.expirationMinutes);
      if (argv.permissions !== undefined) setNestedValue(bodyData, ['permissions'], argv.permissions);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/containers/registries/${argv.domain}/credentials`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
