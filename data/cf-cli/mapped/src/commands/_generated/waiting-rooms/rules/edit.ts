/**
 * edit command
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

interface EditArgs {
  ruleId: string;
  waitingRoomId: string;
  zoneId: string;
  action: string;
  description?: string;
  enabled?: boolean;
  expression: string;
  'position-index'?: number;
  'position-before'?: string;
  'position-after'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <ruleId> <waitingRoomId> [zoneId]',
  describe: 'Patches a rule for a waiting room.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('ruleId', {
        type: 'string',
        description: 'The ID of the rule.',
        demandOption: true,
      })
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
      .option('position-index', {
        type: 'number',
        description:
          'Places the rule in the exact position specified by the integer number <POSITION_NUMBER>. Position numbers start with 1. Existing rules in the ruleset from the specified position number onward are shifted one position (no rule is overwritten).',
        default: undefined,
      })
      .option('position-before', {
        type: 'string',
        description:
          'Places the rule before rule <RULE_ID>. Use this argument with an empty rule ID value ("") to set the rule as the first rule in the ruleset.',
        default: undefined,
      })
      .option('position-after', {
        type: 'string',
        description:
          'Places the rule after rule <RULE_ID>. Use this argument with an empty rule ID value ("") to set the rule as the last rule in the ruleset.',
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
      .conflicts('position-index', ['positionBefore', 'positionAfter'])
      .conflicts('position-before', ['positionIndex', 'positionAfter'])
      .conflicts('position-after', ['positionIndex', 'positionBefore'])
      .choices('action', ['bypass_waiting_room'] as const) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ruleId as string | undefined, 'ruleId');
      validateResourceId(argv.waitingRoomId as string | undefined, 'waitingRoomId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf waiting-rooms rules edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/waiting_rooms/${argv.waitingRoomId ?? '<waitingRoomId>'}/rules/${argv.ruleId ?? '<ruleId>'}`,
          pathParams: {
            ruleId: String(argv.ruleId ?? ''),
            waitingRoomId: String(argv.waitingRoomId ?? ''),
            zoneId: String(argv.zoneId ?? ''),
          },
          body: {
            action: argv.action,
            description: argv.description,
            enabled: argv.enabled,
            expression: argv.expression,
            positionIndex: argv.positionIndex,
            positionBefore: argv.positionBefore,
            positionAfter: argv.positionAfter,
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
        const result = await client.patch<unknown>(
          `/zones/${argv.zoneId}/waiting_rooms/${argv.waitingRoomId}/rules/${argv.ruleId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.action !== undefined) setNestedValue(bodyData, ['action'], argv.action);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.expression !== undefined) setNestedValue(bodyData, ['expression'], argv.expression);
      if (argv.positionIndex !== undefined) setNestedValue(bodyData, ['position', 'index'], argv.positionIndex);
      if (argv.positionBefore !== undefined) setNestedValue(bodyData, ['position', 'before'], argv.positionBefore);
      if (argv.positionAfter !== undefined) setNestedValue(bodyData, ['position', 'after'], argv.positionAfter);
      const result = await client.patch<unknown>(
        `/zones/${argv.zoneId}/waiting_rooms/${argv.waitingRoomId}/rules/${argv.ruleId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
