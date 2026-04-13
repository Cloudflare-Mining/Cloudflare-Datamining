/**
 * app-configs-create command
 * @generated from apis/magic-transit/schema.ts
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

interface AppConfigsCreateArgs {
  siteId: string;
  breakout?: boolean;
  'preferred-wans'?: string;
  priority?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, AppConfigsCreateArgs> = {
  command: 'app-configs-create <siteId>',
  describe: 'Creates a new App Config for a site',

  builder: (yargs: Argv): Argv<AppConfigsCreateArgs> => {
    return yargs
      .positional('siteId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .option('breakout', {
        type: 'boolean',
        description: "Whether to breakout traffic to the app's endpoints directly. Null preserves default behavior.",
        default: false,
      })
      .option('preferred-wans', {
        type: 'string',
        description:
          'WAN interfaces to prefer over default WANs, highest-priority first. Can only be specified for breakout rules (breakout must be true).',
        default: undefined,
      })
      .option('priority', {
        type: 'number',
        description:
          'Priority of traffic. 0 is default, anything greater is prioritized. (Currently only 0 and 1 are supported)',
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
      }) as Argv<AppConfigsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AppConfigsCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.siteId as string | undefined, 'siteId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit sites-extra app-configs-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/sites/${argv.siteId ?? '<siteId>'}/app_configs`,
          pathParams: { siteId: String(argv.siteId ?? '') },
          body: { breakout: argv.breakout, preferredWans: argv.preferredWans, priority: argv.priority },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/magic/sites/${argv.siteId}/app_configs`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.breakout !== undefined) setNestedValue(bodyData, ['breakout'], argv.breakout);
      if (argv.preferredWans !== undefined) setNestedValue(bodyData, ['preferred_wans'], argv.preferredWans);
      if (argv.priority !== undefined) setNestedValue(bodyData, ['priority'], argv.priority);
      const result = await client.post<unknown>(`/accounts/${accountId}/magic/sites/${argv.siteId}/app_configs`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
