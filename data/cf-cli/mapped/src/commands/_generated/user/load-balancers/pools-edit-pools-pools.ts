/**
 * pools-edit-pools-pools command
 * @generated from apis/user/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface PoolsEditPoolsPoolsArgs {
  'notification-email'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, PoolsEditPoolsPoolsArgs> = {
  command: 'pools-edit-pools-pools',
  describe:
    'Apply changes to a number of existing pools, overwriting the supplied properties. Pools are ordered by ascending \`name\`. Returns the list of affected pools. Supports the standard pagination query parameters, either \`limit\`/\`offset\` or \`per_page\`/\`page\`.',

  builder: (yargs: Argv): Argv<PoolsEditPoolsPoolsArgs> => {
    return yargs
      .option('notification-email', {
        type: 'string',
        description:
          'The email address to send health status notifications to. This field is now deprecated in favor of Cloudflare Notifications for Load Balancing, so only resetting this field with an empty string \`""\` is accepted.',
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
      }) as Argv<PoolsEditPoolsPoolsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PoolsEditPoolsPoolsArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf user load-balancers pools-edit-pools-pools',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/user/load_balancers/pools`,
          pathParams: {},
          body: { notificationEmail: argv.notificationEmail },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(`/user/load_balancers/pools`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.notificationEmail !== undefined)
        setNestedValue(bodyData, ['notification_email'], argv.notificationEmail);
      const result = await client.patch<unknown>(`/user/load_balancers/pools`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
