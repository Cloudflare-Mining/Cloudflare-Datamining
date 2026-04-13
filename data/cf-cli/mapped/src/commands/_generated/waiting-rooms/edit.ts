/**
 * edit command
 * @generated from apis/waiting-rooms/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface EditArgs {
  waitingRoomId: string;
  zoneId: string;
  'cookie-attributes-samesite'?: string;
  'cookie-attributes-secure'?: string;
  'cookie-suffix'?: string;
  'custom-page-html'?: string;
  'default-template-language'?: string;
  description?: string;
  'disable-session-renewal'?: boolean;
  'enabled-origin-commands'?: string;
  host: string;
  'json-response-enabled'?: boolean;
  name: string;
  'new-users-per-minute': number;
  path?: string;
  'queue-all'?: boolean;
  'queueing-method'?: string;
  'queueing-status-code'?: number;
  'session-duration'?: number;
  suspended?: boolean;
  'total-active-users': number;
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

const command: CommandModule<object, EditArgs> = {
  command: 'edit <waitingRoomId> [zoneId]',
  describe: 'Patches a configured waiting room.',

  builder: (yargs: Argv): Argv<EditArgs> => {
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
      .option('cookie-attributes-samesite', {
        type: 'string',
        description:
          'Configures the SameSite attribute on the waiting room cookie. Value \`auto\` will be translated to \`lax\` or \`none\` depending if **Always Use HTTPS** is enabled. Note that when using value \`none\`, the secure attribute cannot be set to \`never\`.',
        choices: ['auto', 'lax', 'none', 'strict'] as const,
        default: undefined,
      })
      .option('cookie-attributes-secure', {
        type: 'string',
        description:
          'Configures the Secure attribute on the waiting room cookie. Value \`always\` indicates that the Secure attribute will be set in the Set-Cookie header, \`never\` indicates that the Secure attribute will not be set, and \`auto\` will set the Secure attribute depending if **Always Use HTTPS** is enabled.',
        choices: ['auto', 'always', 'never'] as const,
        default: undefined,
      })
      .option('cookie-suffix', {
        type: 'string',
        description:
          "Appends a '_' + a custom suffix to the end of Cloudflare Waiting Room's cookie name(__cf_waitingroom). If \`cookie_suffix\` is \"abcd\", the cookie name will be \`__cf_waitingroom_abcd\`. This field is required if using \`additional_routes\`.",
        default: undefined,
      })
      .option('custom-page-html', {
        type: 'string',
        description:
          'Only available for the Waiting Room Advanced subscription. This is a template html file that will be rendered at the edge. If no custom_page_html is provided, the default waiting room will be used. The template is based on mustache ( https://mustache.github.io/ ). There are several variables that are evaluated by the Cloudflare edge: 1. {{\`waitTimeKnown\`}} Acts like a boolean value that indicates the behavior to take when wait time is not available, for instance when queue_all is **true**. 2. {{\`waitTimeFormatted\`}} Estimated wait time for the user. For example, five minutes. Alternatively, you can use: 3. {{\`waitTime\`}} Number of minutes of estimated wait for a user. 4. {{\`waitTimeHours\`}} Number of hours of estimated wait for a user (\`Math.floor(waitTime/60)\`). 5. {{\`waitTimeHourMinutes\`}} Number of minutes above the \`waitTimeHours\` value (\`waitTime%60\`). 6. {{\`queueIsFull\`}} Changes to **true** when no more people can be added to the queue.  To view the full list of variables, look at the \`cfWaitingRoom\` object described under the \`json_response_enabled\` property in other Waiting Room API calls.',
        default: undefined,
      })
      .option('default-template-language', {
        type: 'string',
        description:
          'The language of the default page template. If no default_template_language is provided, then \`en-US\` (English) will be used.',
        choices: [
          'en-US',
          'es-ES',
          'de-DE',
          'fr-FR',
          'it-IT',
          'ja-JP',
          'ko-KR',
          'pt-BR',
          'zh-CN',
          'zh-TW',
          'nl-NL',
          'pl-PL',
          'id-ID',
          'tr-TR',
          'ar-EG',
          'ru-RU',
          'fa-IR',
          'bg-BG',
          'hr-HR',
          'cs-CZ',
          'da-DK',
          'fi-FI',
          'lt-LT',
          'ms-MY',
          'nb-NO',
          'ro-RO',
          'el-GR',
          'he-IL',
          'hi-IN',
          'hu-HU',
          'sr-BA',
          'sk-SK',
          'sl-SI',
          'sv-SE',
          'tl-PH',
          'th-TH',
          'uk-UA',
          'vi-VN',
        ] as const,
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'A note that you can use to add more details about the waiting room.',
        default: undefined,
      })
      .option('disable-session-renewal', {
        type: 'boolean',
        description:
          "Only available for the Waiting Room Advanced subscription. Disables automatic renewal of session cookies. If \`true\`, an accepted user will have session_duration minutes to browse the site. After that, they will have to go through the waiting room again. If \`false\`, a user's session cookie will be automatically renewed on every request.",
        default: false,
      })
      .option('enabled-origin-commands', {
        type: 'string',
        description: 'A list of enabled origin commands.',
        default: undefined,
      })
      .option('host', {
        type: 'string',
        description:
          'The host name to which the waiting room will be applied (no wildcards). Please do not include the scheme (http:// or https://). The host and path combination must be unique.',
      })
      .option('json-response-enabled', {
        type: 'boolean',
        description:
          'Only available for the Waiting Room Advanced subscription. If \`true\`, requests to the waiting room with the header \`Accept: application/json\` will receive a JSON response object with information on the user\'s status in the waiting room as opposed to the configured static HTML page. This JSON response object has one property \`cfWaitingRoom\` which is an object containing the following fields: 1. \`inWaitingRoom\`: Boolean indicating if the user is in the waiting room (always **true**). 2. \`waitTimeKnown\`: Boolean indicating if the current estimated wait times are accurate. If **false**, they are not available. 3. \`waitTime\`: Valid only when \`waitTimeKnown\` is **true**. Integer indicating the current estimated time in minutes the user will wait in the waiting room. When \`queueingMethod\` is **random**, this is set to \`waitTime50Percentile\`. 4. \`waitTime25Percentile\`: Valid only when \`queueingMethod\` is **random** and \`waitTimeKnown\` is **true**. Integer indicating the current estimated maximum wait time for the 25% of users that gain entry the fastest (25th percentile). 5. \`waitTime50Percentile\`: Valid only when \`queueingMethod\` is **random** and \`waitTimeKnown\` is **true**. Integer indicating the current estimated maximum wait time for the 50% of users that gain entry the fastest (50th percentile). In other words, half of the queued users are expected to let into the origin website before \`waitTime50Percentile\` and half are expected to be let in after it. 6. \`waitTime75Percentile\`: Valid only when \`queueingMethod\` is **random** and \`waitTimeKnown\` is **true**. Integer indicating the current estimated maximum wait time for the 75% of users that gain entry the fastest (75th percentile). 7. \`waitTimeFormatted\`: String displaying the \`waitTime\` formatted in English for users. If \`waitTimeKnown\` is **false**, \`waitTimeFormatted\` will display **unavailable**. 8. \`queueIsFull\`: Boolean indicating if the waiting room\'s queue is currently full and not accepting new users at the moment. 9. \`queueAll\`: Boolean indicating if all users will be queued in the waiting room and no one will be let into the origin website. 10. \`lastUpdated\`: String displaying the timestamp as an ISO 8601 string of the user\'s last attempt to leave the waiting room and be let into the origin website. The user is able to make another attempt after \`refreshIntervalSeconds\` past this time. If the user makes a request too soon, it will be ignored and \`lastUpdated\` will not change. 11. \`refreshIntervalSeconds\`: Integer indicating the number of seconds after \`lastUpdated\` until the user is able to make another attempt to leave the waiting room and be let into the origin website. When the \`queueingMethod\` is \`reject\`, there is no specified refresh time —\\_it will always be **zero**. 12. \`queueingMethod\`: The queueing method currently used by the waiting room. It is either **fifo**, **random**, **passthrough**, or **reject**. 13. \`isFIFOQueue\`: Boolean indicating if the waiting room uses a FIFO (First-In-First-Out) queue. 14. \`isRandomQueue\`: Boolean indicating if the waiting room uses a Random queue where users gain access randomly. 15. \`isPassthroughQueue\`: Boolean indicating if the waiting room uses a passthrough queue. Keep in mind that when passthrough is enabled, this JSON response will only exist when \`queueAll\` is **true** or \`isEventPrequeueing\` is **true** because in all other cases requests will go directly to the origin. 16. \`isRejectQueue\`: Boolean indicating if the waiting room uses a reject queue. 17. \`isEventActive\`: Boolean indicating if an event is currently occurring. Events are able to change a waiting room\'s behavior during a specified period of time. For additional information, look at the event properties \`prequeue_start_time\`, \`event_start_time\`, and \`event_end_time\` in the documentation for creating waiting room events. Events are considered active between these start and end times, as well as during the prequeueing period if it exists. 18. \`isEventPrequeueing\`: Valid only when \`isEventActive\` is **true**. Boolean indicating if an event is currently prequeueing users before it starts. 19. \`timeUntilEventStart\`: Valid only when \`isEventPrequeueing\` is **true**. Integer indicating the number of minutes until the event starts. 20. \`timeUntilEventStartFormatted\`: String displaying the \`timeUntilEventStart\` formatted in English for users. If \`isEventPrequeueing\` is **false**, \`timeUntilEventStartFormatted\` will display **unavailable**. 21. \`timeUntilEventEnd\`: Valid only when \`isEventActive\` is **true**. Integer indicating the number of minutes until the event ends. 22. \`timeUntilEventEndFormatted\`: String displaying the \`timeUntilEventEnd\` formatted in English for users. If \`isEventActive\` is **false**, \`timeUntilEventEndFormatted\` will display **unavailable**. 23. \`shuffleAtEventStart\`: Valid only when \`isEventActive\` is **true**. Boolean indicating if the users in the prequeue are shuffled randomly when the event starts. 24. \`turnstile\`: Empty when turnstile isn\'t enabled. String displaying an html tag to display the Turnstile widget. Please add the \`{{{turnstile}}}\` tag to the \`custom_html\` template to ensure the Turnstile widget appears. 25. \`infiniteQueue\`: Boolean indicating whether the response is for a user in the infinite queue.  An example cURL to a waiting room could be:  	curl -X GET "https://example.com/waitingroom" \\ 		-H "Accept: application/json"  If \`json_response_enabled\` is **true** and the request hits the waiting room, an example JSON response when \`queueingMethod\` is **fifo** and no event is active could be:  	{ 		"cfWaitingRoom": { 			"inWaitingRoom": true, 			"waitTimeKnown": true, 			"waitTime": 10, 			"waitTime25Percentile": 0, 			"waitTime50Percentile": 0, 			"waitTime75Percentile": 0, 			"waitTimeFormatted": "10 minutes", 			"queueIsFull": false, 			"queueAll": false, 			"lastUpdated": "2020-08-03T23:46:00.000Z", 			"refreshIntervalSeconds": 20, 			"queueingMethod": "fifo", 			"isFIFOQueue": true, 			"isRandomQueue": false, 			"isPassthroughQueue": false, 			"isRejectQueue": false, 			"isEventActive": false, 			"isEventPrequeueing": false, 			"timeUntilEventStart": 0, 			"timeUntilEventStartFormatted": "unavailable", 			"timeUntilEventEnd": 0, 			"timeUntilEventEndFormatted": "unavailable", 			"shuffleAtEventStart": false 		} 	}  If \`json_response_enabled\` is **true** and the request hits the waiting room, an example JSON response when \`queueingMethod\` is **random** and an event is active could be:  	{ 		"cfWaitingRoom": { 			"inWaitingRoom": true, 			"waitTimeKnown": true, 			"waitTime": 10, 			"waitTime25Percentile": 5, 			"waitTime50Percentile": 10, 			"waitTime75Percentile": 15, 			"waitTimeFormatted": "5 minutes to 15 minutes", 			"queueIsFull": false, 			"queueAll": false, 			"lastUpdated": "2020-08-03T23:46:00.000Z", 			"refreshIntervalSeconds": 20, 			"queueingMethod": "random", 			"isFIFOQueue": false, 			"isRandomQueue": true, 			"isPassthroughQueue": false, 			"isRejectQueue": false, 			"isEventActive": true, 			"isEventPrequeueing": false, 			"timeUntilEventStart": 0, 			"timeUntilEventStartFormatted": "unavailable", 			"timeUntilEventEnd": 15, 			"timeUntilEventEndFormatted": "15 minutes", 			"shuffleAtEventStart": true 		} 	}',
        default: false,
      })
      .option('name', {
        type: 'string',
        description:
          'A unique name to identify the waiting room. Only alphanumeric characters, hyphens and underscores are allowed.',
      })
      .option('new-users-per-minute', {
        type: 'number',
        description:
          'Sets the number of new users that will be let into the route every minute. This value is used as baseline for the number of users that are let in per minute. So it is possible that there is a little more or little less traffic coming to the route based on the traffic patterns at that time around the world.',
      })
      .option('path', {
        type: 'string',
        description:
          'Sets the path within the host to enable the waiting room on. The waiting room will be enabled for all subpaths as well. If there are two waiting rooms on the same subpath, the waiting room for the most specific path will be chosen. Wildcards and query parameters are not supported.',
        default: undefined,
      })
      .option('queue-all', {
        type: 'boolean',
        description:
          'If queue_all is \`true\`, all the traffic that is coming to a route will be sent to the waiting room. No new traffic can get to the route once this field is set and estimated time will become unavailable.',
        default: false,
      })
      .option('queueing-method', {
        type: 'string',
        description:
          'Sets the queueing method used by the waiting room. Changing this parameter from the **default** queueing method is only available for the Waiting Room Advanced subscription. Regardless of the queueing method, if \`queue_all\` is enabled or an event is prequeueing, users in the waiting room will not be accepted to the origin. These users will always see a waiting room page that refreshes automatically. The valid queueing methods are: 1. \`fifo\` **(default)**: First-In-First-Out queue where customers gain access in the order they arrived. 2. \`random\`: Random queue where customers gain access randomly, regardless of arrival time. 3. \`passthrough\`: Users will pass directly through the waiting room and into the origin website. As a result, any configured limits will not be respected while this is enabled. This method can be used as an alternative to disabling a waiting room (with \`suspended\`) so that analytics are still reported. This can be used if you wish to allow all traffic normally, but want to restrict traffic during a waiting room event, or vice versa. 4. \`reject\`: Users will be immediately rejected from the waiting room. As a result, no users will reach the origin website while this is enabled. This can be used if you wish to reject all traffic while performing maintenance, block traffic during a specified period of time (an event), or block traffic while events are not occurring. Consider a waiting room used for vaccine distribution that only allows traffic during sign-up events, and otherwise blocks all traffic. For this case, the waiting room uses \`reject\`, and its events override this with \`fifo\`, \`random\`, or \`passthrough\`. When this queueing method is enabled and neither \`queueAll\` is enabled nor an event is prequeueing, the waiting room page **will not refresh automatically**.',
        choices: ['fifo', 'random', 'passthrough', 'reject'] as const,
        default: undefined,
      })
      .option('queueing-status-code', {
        type: 'number',
        description: 'HTTP status code returned to a user while in the queue.',
        default: undefined,
      })
      .option('session-duration', {
        type: 'number',
        description:
          'Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the route. If a user is not seen by Cloudflare again in that time period, they will be treated as a new user that visits the route.',
        default: undefined,
      })
      .option('suspended', {
        type: 'boolean',
        description:
          'Suspends or allows traffic going to the waiting room. If set to \`true\`, the traffic will not go to the waiting room.',
        default: false,
      })
      .option('total-active-users', {
        type: 'number',
        description:
          'Sets the total number of active user sessions on the route at a point in time. A route is a combination of host and path on which a waiting room is available. This value is used as a baseline for the total number of active user sessions on the route. It is possible to have a situation where there are more or less active users sessions on the route based on the traffic patterns at that time around the world.',
      })
      .option('turnstile-action', {
        type: 'string',
        description:
          'Which action to take when a bot is detected using Turnstile. \`log\` will have no impact on queueing behavior, simply keeping track of how many bots are detected in Waiting Room Analytics. \`infinite_queue\` will send bots to a false queueing state, where they will never reach your origin. \`infinite_queue\` requires Advanced Waiting Room. ',
        choices: ['log', 'infinite_queue'] as const,
        default: undefined,
      })
      .option('turnstile-mode', {
        type: 'string',
        description:
          'Which Turnstile widget type to use for detecting bot traffic. See [the Turnstile documentation](https://developers.cloudflare.com/turnstile/concepts/widget/#widget-types) for the definitions of these widget types. Set to \`off\` to disable the Turnstile integration entirely. Setting this to anything other than \`off\` or \`invisible\` requires Advanced Waiting Room. ',
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
      .choices('cookie-attributes-samesite', ['auto', 'lax', 'none', 'strict'] as const)
      .choices('cookie-attributes-secure', ['auto', 'always', 'never'] as const)
      .choices('default-template-language', [
        'en-US',
        'es-ES',
        'de-DE',
        'fr-FR',
        'it-IT',
        'ja-JP',
        'ko-KR',
        'pt-BR',
        'zh-CN',
        'zh-TW',
        'nl-NL',
        'pl-PL',
        'id-ID',
        'tr-TR',
        'ar-EG',
        'ru-RU',
        'fa-IR',
        'bg-BG',
        'hr-HR',
        'cs-CZ',
        'da-DK',
        'fi-FI',
        'lt-LT',
        'ms-MY',
        'nb-NO',
        'ro-RO',
        'el-GR',
        'he-IL',
        'hi-IN',
        'hu-HU',
        'sr-BA',
        'sk-SK',
        'sl-SI',
        'sv-SE',
        'tl-PH',
        'th-TH',
        'uk-UA',
        'vi-VN',
      ] as const)
      .choices('queueing-method', ['fifo', 'random', 'passthrough', 'reject'] as const)
      .choices('turnstile-action', ['log', 'infinite_queue'] as const)
      .choices('turnstile-mode', [
        'off',
        'invisible',
        'visible_non_interactive',
        'visible_managed',
      ] as const) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.waitingRoomId as string | undefined, 'waitingRoomId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf waiting-rooms edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/waiting_rooms/${argv.waitingRoomId ?? '<waitingRoomId>'}`,
          pathParams: { waitingRoomId: String(argv.waitingRoomId ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: {
            cookieAttributesSamesite: argv.cookieAttributesSamesite,
            cookieAttributesSecure: argv.cookieAttributesSecure,
            cookieSuffix: argv.cookieSuffix,
            customPageHtml: argv.customPageHtml,
            defaultTemplateLanguage: argv.defaultTemplateLanguage,
            description: argv.description,
            disableSessionRenewal: argv.disableSessionRenewal,
            enabledOriginCommands: argv.enabledOriginCommands,
            host: argv.host,
            jsonResponseEnabled: argv.jsonResponseEnabled,
            name: argv.name,
            newUsersPerMinute: argv.newUsersPerMinute,
            path: argv.path,
            queueAll: argv.queueAll,
            queueingMethod: argv.queueingMethod,
            queueingStatusCode: argv.queueingStatusCode,
            sessionDuration: argv.sessionDuration,
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
        const result = await client.patch<unknown>(`/zones/${argv.zoneId}/waiting_rooms/${argv.waitingRoomId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.cookieAttributesSamesite !== undefined)
        setNestedValue(bodyData, ['cookie_attributes', 'samesite'], argv.cookieAttributesSamesite);
      if (argv.cookieAttributesSecure !== undefined)
        setNestedValue(bodyData, ['cookie_attributes', 'secure'], argv.cookieAttributesSecure);
      if (argv.cookieSuffix !== undefined) setNestedValue(bodyData, ['cookie_suffix'], argv.cookieSuffix);
      if (argv.customPageHtml !== undefined) setNestedValue(bodyData, ['custom_page_html'], argv.customPageHtml);
      if (argv.defaultTemplateLanguage !== undefined)
        setNestedValue(bodyData, ['default_template_language'], argv.defaultTemplateLanguage);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.disableSessionRenewal !== undefined)
        setNestedValue(bodyData, ['disable_session_renewal'], argv.disableSessionRenewal);
      if (argv.enabledOriginCommands !== undefined)
        setNestedValue(bodyData, ['enabled_origin_commands'], argv.enabledOriginCommands);
      if (argv.host !== undefined) setNestedValue(bodyData, ['host'], argv.host);
      if (argv.jsonResponseEnabled !== undefined)
        setNestedValue(bodyData, ['json_response_enabled'], argv.jsonResponseEnabled);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.newUsersPerMinute !== undefined)
        setNestedValue(bodyData, ['new_users_per_minute'], argv.newUsersPerMinute);
      if (argv.path !== undefined) setNestedValue(bodyData, ['path'], argv.path);
      if (argv.queueAll !== undefined) setNestedValue(bodyData, ['queue_all'], argv.queueAll);
      if (argv.queueingMethod !== undefined) setNestedValue(bodyData, ['queueing_method'], argv.queueingMethod);
      if (argv.queueingStatusCode !== undefined)
        setNestedValue(bodyData, ['queueing_status_code'], argv.queueingStatusCode);
      if (argv.sessionDuration !== undefined) setNestedValue(bodyData, ['session_duration'], argv.sessionDuration);
      if (argv.suspended !== undefined) setNestedValue(bodyData, ['suspended'], argv.suspended);
      if (argv.totalActiveUsers !== undefined) setNestedValue(bodyData, ['total_active_users'], argv.totalActiveUsers);
      if (argv.turnstileAction !== undefined) setNestedValue(bodyData, ['turnstile_action'], argv.turnstileAction);
      if (argv.turnstileMode !== undefined) setNestedValue(bodyData, ['turnstile_mode'], argv.turnstileMode);
      const result = await client.patch<unknown>(`/zones/${argv.zoneId}/waiting_rooms/${argv.waitingRoomId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
