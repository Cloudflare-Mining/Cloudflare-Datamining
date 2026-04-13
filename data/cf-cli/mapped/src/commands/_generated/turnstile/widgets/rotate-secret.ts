/**
 * rotate-secret command
 * @generated from apis/turnstile/schema.ts
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

interface RotateSecretArgs {
  'invalidate-immediately'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, RotateSecretArgs> = {
  command: 'rotate-secret',
  describe:
    'Generate a new secret key for this widget. If \`invalidate_immediately\` is set to \`false\`, the previous secret remains valid for 2 hours. Note that secrets cannot be rotated again during the grace period.',

  builder: (yargs: Argv): Argv<RotateSecretArgs> => {
    return yargs
      .option('invalidate-immediately', {
        type: 'boolean',
        description:
          'If \`invalidate_immediately\` is set to \`false\`, the previous secret will remain valid for two hours. Otherwise, the secret is immediately invalidated, and requests using it will be rejected. ',
        default: false,
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
      }) as Argv<RotateSecretArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RotateSecretArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf turnstile widgets rotate-secret',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/challenges/widgets/${argv.sitekey ?? '<sitekey>'}/rotate_secret`,
          pathParams: { sitekey: String(argv.sitekey ?? '') },
          body: { invalidateImmediately: argv.invalidateImmediately },
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
          `/accounts/${accountId}/challenges/widgets/${argv.sitekey}/rotate_secret`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.invalidateImmediately !== undefined)
        setNestedValue(bodyData, ['invalidate_immediately'], argv.invalidateImmediately);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/challenges/widgets/${argv.sitekey}/rotate_secret`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
