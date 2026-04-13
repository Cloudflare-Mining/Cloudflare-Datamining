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
  'custom-page-html'?: string;
  description?: string;
  'disable-session-renewal'?: boolean;
  'event-end-time': string;
  'event-start-time': string;
  name: string;
  'new-users-per-minute'?: number;
  'prequeue-start-time'?: string;
  'queueing-method'?: string;
  'session-duration'?: number;
  'shuffle-at-event-start'?: boolean;
  suspended?: boolean;
  'total-active-users'?: number;
  'turnstile-action'?: string;
  'turnstile-mode'?: string;
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
  describe:
    "Only available for the Waiting Room Advanced subscription. Creates an event for a waiting room. An event takes place during a specified period of time, temporarily changing the behavior of a waiting room. While the event is active, some of the properties in the event's configuration may either override or inherit from the waiting room's configuration. Note that events cannot overlap with each other, so only one event can be active at a time.",

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
      .option('custom-page-html', {
        type: 'string',
        description:
          "If set, the event will override the waiting room's \`custom_page_html\` property while it is active. If null, the event will inherit it.",
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'A note that you can use to add more details about the event.',
        default: undefined,
      })
      .option('disable-session-renewal', {
        type: 'boolean',
        description:
          "If set, the event will override the waiting room's \`disable_session_renewal\` property while it is active. If null, the event will inherit it.",
        default: false,
      })
      .option('event-end-time', {
        type: 'string',
        description: 'An ISO 8601 timestamp that marks the end of the event.',
      })
      .option('event-start-time', {
        type: 'string',
        description:
          "An ISO 8601 timestamp that marks the start of the event. At this time, queued users will be processed with the event's configuration. The start time must be at least one minute before \`event_end_time\`.",
      })
      .option('name', {
        type: 'string',
        description:
          'A unique name to identify the event. Only alphanumeric characters, hyphens and underscores are allowed.',
      })
      .option('new-users-per-minute', {
        type: 'number',
        description:
          "If set, the event will override the waiting room's \`new_users_per_minute\` property while it is active. If null, the event will inherit it. This can only be set if the event's \`total_active_users\` property is also set.",
        default: undefined,
      })
      .option('prequeue-start-time', {
        type: 'string',
        description:
          'An ISO 8601 timestamp that marks when to begin queueing all users before the event starts. The prequeue must start at least five minutes before \`event_start_time\`.',
        default: undefined,
      })
      .option('queueing-method', {
        type: 'string',
        description:
          "If set, the event will override the waiting room's \`queueing_method\` property while it is active. If null, the event will inherit it.",
        default: undefined,
      })
      .option('session-duration', {
        type: 'number',
        description:
          "If set, the event will override the waiting room's \`session_duration\` property while it is active. If null, the event will inherit it.",
        default: undefined,
      })
      .option('shuffle-at-event-start', {
        type: 'boolean',
        description:
          'If enabled, users in the prequeue will be shuffled randomly at the \`event_start_time\`. Requires that \`prequeue_start_time\` is not null. This is useful for situations when many users will join the event prequeue at the same time and you want to shuffle them to ensure fairness. Naturally, it makes the most sense to enable this feature when the \`queueing_method\` during the event respects ordering such as **fifo**, or else the shuffling may be unnecessary.',
        default: false,
      })
      .option('suspended', {
        type: 'boolean',
        description:
          'Suspends or allows an event. If set to \`true\`, the event is ignored and traffic will be handled based on the waiting room configuration.',
        default: false,
      })
      .option('total-active-users', {
        type: 'number',
        description:
          "If set, the event will override the waiting room's \`total_active_users\` property while it is active. If null, the event will inherit it. This can only be set if the event's \`new_users_per_minute\` property is also set.",
        default: undefined,
      })
      .option('turnstile-action', {
        type: 'string',
        description:
          "If set, the event will override the waiting room's \`turnstile_action\` property while it is active. If null, the event will inherit it.",
        choices: ['log', 'infinite_queue'] as const,
        default: undefined,
      })
      .option('turnstile-mode', {
        type: 'string',
        description:
          "If set, the event will override the waiting room's \`turnstile_mode\` property while it is active. If null, the event will inherit it.",
        choices: ['off', 'invisible', 'visible_non_interactive', 'visible_managed'] as const,
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
      .choices('turnstile-action', ['log', 'infinite_queue'] as const)
      .choices('turnstile-mode', [
        'off',
        'invisible',
        'visible_non_interactive',
        'visible_managed',
      ] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.waitingRoomId as string | undefined, 'waitingRoomId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf waiting-rooms events create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/waiting_rooms/${argv.waitingRoomId ?? '<waitingRoomId>'}/events`,
          pathParams: { waitingRoomId: String(argv.waitingRoomId ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: {
            customPageHtml: argv.customPageHtml,
            description: argv.description,
            disableSessionRenewal: argv.disableSessionRenewal,
            eventEndTime: argv.eventEndTime,
            eventStartTime: argv.eventStartTime,
            name: argv.name,
            newUsersPerMinute: argv.newUsersPerMinute,
            prequeueStartTime: argv.prequeueStartTime,
            queueingMethod: argv.queueingMethod,
            sessionDuration: argv.sessionDuration,
            shuffleAtEventStart: argv.shuffleAtEventStart,
            suspended: argv.suspended,
            totalActiveUsers: argv.totalActiveUsers,
            turnstileAction: argv.turnstileAction,
            turnstileMode: argv.turnstileMode,
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
        const result = await client.post<unknown>(`/zones/${argv.zoneId}/waiting_rooms/${argv.waitingRoomId}/events`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.customPageHtml !== undefined) setNestedValue(bodyData, ['custom_page_html'], argv.customPageHtml);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.disableSessionRenewal !== undefined)
        setNestedValue(bodyData, ['disable_session_renewal'], argv.disableSessionRenewal);
      if (argv.eventEndTime !== undefined) setNestedValue(bodyData, ['event_end_time'], argv.eventEndTime);
      if (argv.eventStartTime !== undefined) setNestedValue(bodyData, ['event_start_time'], argv.eventStartTime);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.newUsersPerMinute !== undefined)
        setNestedValue(bodyData, ['new_users_per_minute'], argv.newUsersPerMinute);
      if (argv.prequeueStartTime !== undefined)
        setNestedValue(bodyData, ['prequeue_start_time'], argv.prequeueStartTime);
      if (argv.queueingMethod !== undefined) setNestedValue(bodyData, ['queueing_method'], argv.queueingMethod);
      if (argv.sessionDuration !== undefined) setNestedValue(bodyData, ['session_duration'], argv.sessionDuration);
      if (argv.shuffleAtEventStart !== undefined)
        setNestedValue(bodyData, ['shuffle_at_event_start'], argv.shuffleAtEventStart);
      if (argv.suspended !== undefined) setNestedValue(bodyData, ['suspended'], argv.suspended);
      if (argv.totalActiveUsers !== undefined) setNestedValue(bodyData, ['total_active_users'], argv.totalActiveUsers);
      if (argv.turnstileAction !== undefined) setNestedValue(bodyData, ['turnstile_action'], argv.turnstileAction);
      if (argv.turnstileMode !== undefined) setNestedValue(bodyData, ['turnstile_mode'], argv.turnstileMode);
      const result = await client.post<unknown>(`/zones/${argv.zoneId}/waiting_rooms/${argv.waitingRoomId}/events`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
