/**
 * discover command
 * @generated from apis/magic-cloud-networking/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface DiscoverArgs {
  providerId: string;
  v2?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DiscoverArgs> = {
  command: 'discover <providerId>',
  describe: 'Run discovery for a Cloud Integration (Closed Beta).',

  builder: (yargs: Argv): Argv<DiscoverArgs> => {
    return yargs
      .positional('providerId', {
        type: 'string',
        description: 'Provider ID',
        demandOption: true,
      })
      .option('v2', {
        type: 'boolean',
        description: 'V2',
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
      }) as Argv<DiscoverArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DiscoverArgs>): Promise<void> => {
    try {
      validateResourceId(argv.providerId as string | undefined, 'providerId');

      const params: Record<string, unknown> = {};
      if (argv.v2 !== undefined) params['v2'] = argv.v2;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-cloud-networking cloud-integrations discover',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/cloud/providers/${argv.providerId ?? '<providerId>'}/discover`,
          pathParams: { providerId: String(argv.providerId ?? '') },
          body: { ...params },
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

      const result = await client.magicCloudNetworking.cloudintegrations.discover(
        accountId,
        argv.providerId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
