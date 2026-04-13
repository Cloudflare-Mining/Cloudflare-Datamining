/**
 * refresh command
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

interface RefreshArgs {
  syncId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RefreshArgs> = {
  command: 'refresh <syncId>',
  describe:
    "Refresh a Catalog Sync's destination by running the sync policy against latest resource catalog (Closed Beta).",

  builder: (yargs: Argv): Argv<RefreshArgs> => {
    return yargs
      .positional('syncId', {
        type: 'string',
        description: 'Sync ID',
        demandOption: true,
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
      }) as Argv<RefreshArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RefreshArgs>): Promise<void> => {
    try {
      validateResourceId(argv.syncId as string | undefined, 'syncId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-cloud-networking catalog-syncs refresh',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/cloud/catalog-syncs/${argv.syncId ?? '<syncId>'}/refresh`,
          pathParams: { syncId: String(argv.syncId ?? '') },
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

      const result = await client.magicCloudNetworking.catalogsyncs.refresh(accountId, argv.syncId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
