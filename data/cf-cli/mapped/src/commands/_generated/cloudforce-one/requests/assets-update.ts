/**
 * assets-update command
 * @generated from apis/cloudforce-one/schema.ts
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

interface AssetsUpdateArgs {
  requestId: string;
  assetId: string;
  source?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, AssetsUpdateArgs> = {
  command: 'assets-update <requestId> <assetId>',
  describe: 'Updates an asset in a Cloudforce One intelligence request.',

  builder: (yargs: Argv): Argv<AssetsUpdateArgs> => {
    return yargs
      .positional('requestId', {
        type: 'string',
        description: 'UUID.',
        demandOption: true,
      })
      .positional('assetId', {
        type: 'string',
        description: 'UUID.',
        demandOption: true,
      })
      .option('source', {
        type: 'string',
        description: 'Asset file to upload.',
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
      }) as Argv<AssetsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AssetsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.requestId as string | undefined, 'requestId');
      validateResourceId(argv.assetId as string | undefined, 'assetId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one requests assets-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/requests/${argv.requestId ?? '<requestId>'}/asset/${argv.assetId ?? '<assetId>'}`,
          pathParams: { requestId: String(argv.requestId ?? ''), assetId: String(argv.assetId ?? '') },
          body: { source: argv.source },
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
        const result = await client.put<unknown>(
          `/accounts/${accountId}/cloudforce-one/requests/${argv.requestId}/asset/${argv.assetId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.source !== undefined) setNestedValue(bodyData, ['source'], argv.source);
      const result = await client.put<unknown>(
        `/accounts/${accountId}/cloudforce-one/requests/${argv.requestId}/asset/${argv.assetId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
