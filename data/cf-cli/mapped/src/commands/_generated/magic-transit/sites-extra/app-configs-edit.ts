/**
 * app-configs-edit command
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

interface AppConfigsEditArgs {
  siteId: string;
  appConfigId: string;
  'account-app-id'?: string;
  breakout?: boolean;
  'managed-app-id'?: string;
  'preferred-wans'?: string;
  priority?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, AppConfigsEditArgs> = {
  command: 'app-configs-edit <siteId> <appConfigId>',
  describe: 'Updates an App Config for a site',

  builder: (yargs: Argv): Argv<AppConfigsEditArgs> => {
    return yargs
      .positional('siteId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .positional('appConfigId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .option('account-app-id', {
        type: 'string',
        description: 'Magic account app ID.',
        default: undefined,
      })
      .option('breakout', {
        type: 'boolean',
        description: "Whether to breakout traffic to the app's endpoints directly. Null preserves default behavior.",
        default: false,
      })
      .option('managed-app-id', {
        type: 'string',
        description: 'Managed app ID.',
        default: undefined,
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
      }) as Argv<AppConfigsEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AppConfigsEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.siteId as string | undefined, 'siteId');
      validateResourceId(argv.appConfigId as string | undefined, 'appConfigId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit sites-extra app-configs-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/sites/${argv.siteId ?? '<siteId>'}/app_configs/${argv.appConfigId ?? '<appConfigId>'}`,
          pathParams: { siteId: String(argv.siteId ?? ''), appConfigId: String(argv.appConfigId ?? '') },
          body: {
            accountAppId: argv.accountAppId,
            breakout: argv.breakout,
            managedAppId: argv.managedAppId,
            preferredWans: argv.preferredWans,
            priority: argv.priority,
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
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/magic/sites/${argv.siteId}/app_configs/${argv.appConfigId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.accountAppId !== undefined) setNestedValue(bodyData, ['account_app_id'], argv.accountAppId);
      if (argv.breakout !== undefined) setNestedValue(bodyData, ['breakout'], argv.breakout);
      if (argv.managedAppId !== undefined) setNestedValue(bodyData, ['managed_app_id'], argv.managedAppId);
      if (argv.preferredWans !== undefined) setNestedValue(bodyData, ['preferred_wans'], argv.preferredWans);
      if (argv.priority !== undefined) setNestedValue(bodyData, ['priority'], argv.priority);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/magic/sites/${argv.siteId}/app_configs/${argv.appConfigId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
