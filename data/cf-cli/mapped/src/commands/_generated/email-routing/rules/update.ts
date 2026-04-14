/**
 * update command
 * @generated from apis/email-routing/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface UpdateArgs {
  ruleIdentifier: string;
  zoneId: string;
  enabled?: boolean;
  name?: string;
  priority?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <ruleIdentifier> [zoneId]',
  describe:
    'Update actions and matches, or enable/disable specific routing rules. Forward actions require all destination addresses to be verified.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('ruleIdentifier', {
        type: 'string',
        description: 'Routing rule identifier.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Routing rule status.',
        default: false,
      })
      .option('name', {
        type: 'string',
        description: 'Routing rule name.',
        default: undefined,
      })
      .option('priority', {
        type: 'number',
        description: 'Priority of the routing rule.',
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
      validateResourceId(argv.ruleIdentifier as string | undefined, 'ruleIdentifier');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf email-routing rules update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/email/routing/rules/${argv.ruleIdentifier ?? '<ruleIdentifier>'}`,
          pathParams: { ruleIdentifier: String(argv.ruleIdentifier ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: { enabled: argv.enabled, name: argv.name, priority: argv.priority },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(`/zones/${argv.zoneId}/email/routing/rules/${argv.ruleIdentifier}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.priority !== undefined) setNestedValue(bodyData, ['priority'], argv.priority);
      const result = await client.put<unknown>(`/zones/${argv.zoneId}/email/routing/rules/${argv.ruleIdentifier}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
