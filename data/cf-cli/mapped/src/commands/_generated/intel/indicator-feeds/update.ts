/**
 * update command
 * @generated from apis/intel/schema.ts
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

interface UpdateArgs {
  feedId: string;
  description?: string;
  'is-attributable'?: boolean;
  'is-downloadable'?: boolean;
  'is-public'?: boolean;
  name?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <feedId>',
  describe: 'Revises details for a specific custom threat indicator feed.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('feedId', {
        type: 'string',
        description: 'Indicator feed ID',
        demandOption: true,
      })
      .option('description', {
        type: 'string',
        description: 'The new description of the feed',
        default: undefined,
      })
      .option('is-attributable', {
        type: 'boolean',
        description: 'The new is_attributable value of the feed',
        default: false,
      })
      .option('is-downloadable', {
        type: 'boolean',
        description: 'The new is_downloadable value of the feed',
        default: false,
      })
      .option('is-public', {
        type: 'boolean',
        description: 'The new is_public value of the feed',
        default: false,
      })
      .option('name', {
        type: 'string',
        description: 'The new name of the feed',
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.feedId as string | undefined, 'feedId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf intel indicator-feeds update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/intel/indicator-feeds/${argv.feedId ?? '<feedId>'}`,
          pathParams: { feedId: String(argv.feedId ?? '') },
          body: {
            description: argv.description,
            isAttributable: argv.isAttributable,
            isDownloadable: argv.isDownloadable,
            isPublic: argv.isPublic,
            name: argv.name,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/intel/indicator-feeds/${argv.feedId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.isAttributable !== undefined) setNestedValue(bodyData, ['is_attributable'], argv.isAttributable);
      if (argv.isDownloadable !== undefined) setNestedValue(bodyData, ['is_downloadable'], argv.isDownloadable);
      if (argv.isPublic !== undefined) setNestedValue(bodyData, ['is_public'], argv.isPublic);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.put<unknown>(`/accounts/${accountId}/intel/indicator-feeds/${argv.feedId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
