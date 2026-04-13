/**
 * update command
 * @generated from apis/accounts/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface UpdateArgs {
  id: string;
  name: string;
  'settings-abuse-contact-email'?: string;
  'settings-enforce-twofactor'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update',
  describe: 'Update an existing account.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .option('id', {
        type: 'string',
        description: 'Identifier',
      })
      .option('name', {
        type: 'string',
        description: 'Account name',
      })
      .option('settings-abuse-contact-email', {
        type: 'string',
        description: 'Sets an abuse contact email to notify for abuse reports.',
        default: undefined,
      })
      .option('settings-enforce-twofactor', {
        type: 'boolean',
        description: 'Indicates whether membership in this account requires that Two-Factor Authentication is enabled',
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
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf accounts update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}`,
          pathParams: {},
          body: {
            id: argv.id,
            name: argv.name,
            settingsAbuseContactEmail: argv.settingsAbuseContactEmail,
            settingsEnforceTwofactor: argv.settingsEnforceTwofactor,
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
        const result = await client.put<unknown>(`/accounts/${accountId}`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.id !== undefined) setNestedValue(bodyData, ['id'], argv.id);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.settingsAbuseContactEmail !== undefined)
        setNestedValue(bodyData, ['settings', 'abuse_contact_email'], argv.settingsAbuseContactEmail);
      if (argv.settingsEnforceTwofactor !== undefined)
        setNestedValue(bodyData, ['settings', 'enforce_twofactor'], argv.settingsEnforceTwofactor);
      const result = await client.put<unknown>(`/accounts/${accountId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
