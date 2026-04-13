/**
 * create command
 * @generated from apis/organizations/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CreateArgs {
  organizationId: string;
  'member-status'?: string;
  'member-user-email': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create <organizationId>',
  describe:
    'Create a membership that grants access to a specific Organization. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('organizationId', {
        type: 'string',
        description: 'Organization ID',
        demandOption: true,
      })
      .option('member-status', {
        type: 'string',
        description: 'The member.status field',
        choices: ['active', 'canceled'] as const,
        default: undefined,
      })
      .option('member-user-email', {
        type: 'string',
        description: 'The member.user.email field',
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
      .choices('member-status', ['active', 'canceled'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.organizationId as string | undefined, 'organizationId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf organizations members create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/organizations/${argv.organizationId ?? '<organizationId>'}/members`,
          pathParams: { organizationId: String(argv.organizationId ?? '') },
          body: { memberStatus: argv.memberStatus, memberUserEmail: argv.memberUserEmail },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/organizations/${argv.organizationId}/members`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.memberStatus !== undefined) setNestedValue(bodyData, ['member', 'status'], argv.memberStatus);
      if (argv.memberUserEmail !== undefined)
        setNestedValue(bodyData, ['member', 'user', 'email'], argv.memberUserEmail);
      const result = await client.post<unknown>(`/organizations/${argv.organizationId}/members`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
