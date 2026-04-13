/**
 * update command
 * @generated from apis/fraud/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface UpdateArgs {
  zoneId?: string;
  'user-profiles'?: string;
  'username-expressions'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update [zoneId]',
  describe:
    'Update Fraud Detection settings for a zone. Notes on \`username_expressions\` behavior: - If omitted or set to null, expressions are not modified. - If provided as an empty array \`[]\`, all expressions will be cleared.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('user-profiles', {
        type: 'string',
        description: 'Whether Fraud User Profiles is enabled for the zone.',
        choices: ['enabled', 'disabled'] as const,
        default: undefined,
      })
      .option('username-expressions', {
        type: 'string',
        description:
          'List of expressions to detect usernames in write HTTP requests.  - Maximum of 10 expressions. - Omit or set to null to leave unchanged on update. - Provide an empty array \`[]\` to clear all expressions on update. - Invalid expressions will result in a 10400 Bad Request with details in the \`messages\` array. ',
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
      .choices('user-profiles', ['enabled', 'disabled'] as const) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf fraud update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/fraud_detection/settings`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: { userProfiles: argv.userProfiles, usernameExpressions: argv.usernameExpressions },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(`/zones/${zoneId}/fraud_detection/settings`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.userProfiles !== undefined) setNestedValue(bodyData, ['user_profiles'], argv.userProfiles);
      if (argv.usernameExpressions !== undefined)
        setNestedValue(bodyData, ['username_expressions'], argv.usernameExpressions);
      const result = await client.put<unknown>(`/zones/${zoneId}/fraud_detection/settings`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
