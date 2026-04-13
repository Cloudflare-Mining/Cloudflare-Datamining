/**
 * entries-predefined-create command
 * @generated from apis/zero-trust/schema.ts
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

interface EntriesPredefinedCreateArgs {
  enabled: boolean;
  'entry-id': string;
  'profile-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EntriesPredefinedCreateArgs> = {
  command: 'entries-predefined-create',
  describe:
    "Predefined entries can't be created, this will update an existing predefined entry. This is needed for our generated terraform API.",

  builder: (yargs: Argv): Argv<EntriesPredefinedCreateArgs> => {
    return yargs
      .option('enabled', {
        type: 'boolean',
        description: 'The enabled field',
      })
      .option('entry-id', {
        type: 'string',
        description: 'The entry_id field',
      })
      .option('profile-id', {
        type: 'string',
        description:
          'This field is not used as the owning profile. For predefined entries it is already set to a predefined profile.',
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
      }) as Argv<EntriesPredefinedCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EntriesPredefinedCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust dlp entries-predefined-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dlp/entries/predefined`,
          pathParams: {},
          body: { enabled: argv.enabled, entryId: argv.entryId, profileId: argv.profileId },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/dlp/entries/predefined`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.entryId !== undefined) setNestedValue(bodyData, ['entry_id'], argv.entryId);
      if (argv.profileId !== undefined) setNestedValue(bodyData, ['profile_id'], argv.profileId);
      const result = await client.post<unknown>(`/accounts/${accountId}/dlp/entries/predefined`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
