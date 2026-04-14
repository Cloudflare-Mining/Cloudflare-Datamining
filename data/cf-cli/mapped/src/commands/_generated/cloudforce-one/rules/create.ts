/**
 * create command
 * @generated from apis/cloudforce-one/schema.ts
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

interface CreateArgs {
  content: string;
  description?: string;
  enabled?: boolean;
  'is-public'?: boolean;
  name: string;
  namespaces: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Create a new detection rule.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('content', {
        type: 'string',
        description: 'The content field',
      })
      .option('description', {
        type: 'string',
        description: 'Human-readable description of the rule. Auto-extracted from YARA meta if present.',
        default: undefined,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Whether this rule is active for dice consumers.',
        default: false,
      })
      .option('is-public', {
        type: 'boolean',
        description: 'Whether this rule is visible to other internal accounts.',
        default: false,
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
      })
      .option('namespaces', {
        type: 'string',
        description: 'The namespaces field',
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
      }) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one rules create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/rules`,
          pathParams: {},
          body: {
            content: argv.content,
            description: argv.description,
            enabled: argv.enabled,
            isPublic: argv.isPublic,
            name: argv.name,
            namespaces: argv.namespaces,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/rules`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.content !== undefined) setNestedValue(bodyData, ['content'], argv.content);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.isPublic !== undefined) setNestedValue(bodyData, ['is_public'], argv.isPublic);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.namespaces !== undefined) setNestedValue(bodyData, ['namespaces'], argv.namespaces);
      const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/rules`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
