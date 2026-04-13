/**
 * entries-create command
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

interface EntriesCreateArgs {
  description?: string;
  enabled: boolean;
  name: string;
  'pattern-regex': string;
  'profile-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EntriesCreateArgs> = {
  command: 'entries-create',
  describe: 'Creates a DLP custom entry.',

  builder: (yargs: Argv): Argv<EntriesCreateArgs> => {
    return yargs
      .option('description', {
        type: 'string',
        description: 'The description field',
        default: undefined,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'The enabled field',
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
      })
      .option('pattern-regex', {
        type: 'string',
        description: 'The pattern.regex field',
      })
      .option('profile-id', {
        type: 'string',
        description: 'The profile_id field',
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
      }) as Argv<EntriesCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EntriesCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust dlp entries-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dlp/entries`,
          pathParams: {},
          body: {
            description: argv.description,
            enabled: argv.enabled,
            name: argv.name,
            patternRegex: argv.patternRegex,
            profileId: argv.profileId,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/dlp/entries`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.patternRegex !== undefined) setNestedValue(bodyData, ['pattern', 'regex'], argv.patternRegex);
      if (argv.profileId !== undefined) setNestedValue(bodyData, ['profile_id'], argv.profileId);
      const result = await client.post<unknown>(`/accounts/${accountId}/dlp/entries`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
