/**
 * create command
 * @generated from apis/waiting-rooms/schema.ts
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

interface CreateArgs {
  waitingRoomId: string;
  zoneId: string;
  action: string;
  description?: string;
  enabled?: boolean;
  expression: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create <waitingRoomId> [zoneId]',
  describe: 'Only available for the Waiting Room Advanced subscription. Creates a rule for a waiting room.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('waitingRoomId', {
        type: 'string',
        description: 'Waiting room ID',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('action', {
        type: 'string',
        description: 'The action to take when the expression matches.',
        choices: ['bypass_waiting_room'] as const,
      })
      .option('description', {
        type: 'string',
        description: 'The description of the rule.',
        default: undefined,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'When set to true, the rule is enabled.',
        default: false,
      })
      .option('expression', {
        type: 'string',
        description: 'Criteria defining when there is a match for the current rule.',
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
      .choices('action', ['bypass_waiting_room'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.waitingRoomId as string | undefined, 'waitingRoomId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf waiting-rooms rules create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/waiting_rooms/${argv.waitingRoomId ?? '<waitingRoomId>'}/rules`,
          pathParams: { waitingRoomId: String(argv.waitingRoomId ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: {
            action: argv.action,
            description: argv.description,
            enabled: argv.enabled,
            expression: argv.expression,
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
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/zones/${argv.zoneId}/waiting_rooms/${argv.waitingRoomId}/rules`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.action !== undefined) setNestedValue(bodyData, ['action'], argv.action);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.expression !== undefined) setNestedValue(bodyData, ['expression'], argv.expression);
      const result = await client.post<unknown>(`/zones/${argv.zoneId}/waiting_rooms/${argv.waitingRoomId}/rules`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
