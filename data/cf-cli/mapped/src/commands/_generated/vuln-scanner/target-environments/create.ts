/**
 * create command
 * @generated from apis/vuln-scanner/schema.ts
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
  description?: string;
  name: string;
  'target-type': string;
  'target-zone-tag': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Creates a new target environment for the account.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('description', {
        type: 'string',
        description: 'Optional description.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Human-readable name.',
      })
      .option('target-type', {
        type: 'string',
        description: 'The target.type field',
        choices: ['zone'] as const,
      })
      .option('target-zone-tag', {
        type: 'string',
        description: 'Cloudflare zone tag. The zone must belong to the account. ',
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
      .choices('target-type', ['zone'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf vuln-scanner target-environments create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/vuln_scanner/target_environments`,
          pathParams: {},
          body: {
            description: argv.description,
            name: argv.name,
            targetType: argv.targetType,
            targetZoneTag: argv.targetZoneTag,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/vuln_scanner/target_environments`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.targetType !== undefined) setNestedValue(bodyData, ['target', 'type'], argv.targetType);
      if (argv.targetZoneTag !== undefined) setNestedValue(bodyData, ['target', 'zone_tag'], argv.targetZoneTag);
      const result = await client.post<unknown>(`/accounts/${accountId}/vuln_scanner/target_environments`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
