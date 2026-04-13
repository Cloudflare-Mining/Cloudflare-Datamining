/**
 * import-create command
 * @generated from apis/d1/schema.ts
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

interface ImportCreateArgs {
  databaseId: string;
  action: string;
  etag?: string;
  filename?: string;
  'current-bookmark'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ImportCreateArgs> = {
  command: 'import-create <databaseId>',
  describe:
    'Generates a temporary URL for uploading an SQL file to, then instructing the D1 to import it and polling it for status updates. Imports block the D1 for their duration.',

  builder: (yargs: Argv): Argv<ImportCreateArgs> => {
    return yargs
      .positional('databaseId', {
        type: 'string',
        description: 'D1 database identifier (UUID).',
        demandOption: true,
      })
      .option('action', {
        type: 'string',
        description: 'Indicates you have a new SQL file to upload.',
        choices: ['init'] as const,
      })
      .option('etag', {
        type: 'string',
        description:
          "Required when action is 'init' or 'ingest'. An md5 hash of the file you're uploading. Used to check if it already exists, and validate its contents before ingesting.",
        default: undefined,
      })
      .option('filename', {
        type: 'string',
        description: 'The filename you have successfully uploaded.',
        default: undefined,
      })
      .option('current-bookmark', {
        type: 'string',
        description: 'This identifies the currently-running import, checking its status.',
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
      })
      .conflicts('etag', ['currentBookmark'])
      .implies('etag', ['filename'])
      .conflicts('filename', ['currentBookmark'])
      .implies('filename', ['etag'])
      .conflicts('current-bookmark', ['etag', 'filename'])
      .choices('action', ['init'] as const) as Argv<ImportCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ImportCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.databaseId as string | undefined, 'databaseId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf d1 database import-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/d1/database/${argv.databaseId ?? '<databaseId>'}/import`,
          pathParams: { databaseId: String(argv.databaseId ?? '') },
          body: {
            action: argv.action,
            etag: argv.etag,
            filename: argv.filename,
            currentBookmark: argv.currentBookmark,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/d1/database/${argv.databaseId}/import`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.action !== undefined) setNestedValue(bodyData, ['action'], argv.action);
      if (argv.etag !== undefined) setNestedValue(bodyData, ['etag'], argv.etag);
      if (argv.filename !== undefined) setNestedValue(bodyData, ['filename'], argv.filename);
      if (argv.currentBookmark !== undefined) setNestedValue(bodyData, ['current_bookmark'], argv.currentBookmark);
      const result = await client.post<unknown>(`/accounts/${accountId}/d1/database/${argv.databaseId}/import`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
