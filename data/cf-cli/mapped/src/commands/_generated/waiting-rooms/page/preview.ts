/**
 * preview command
 * @generated from apis/waiting-rooms/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface PreviewArgs {
  zoneId?: string;
  'custom-html': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, PreviewArgs> = {
  command: 'preview [zoneId]',
  describe:
    'Creates a waiting room page preview. Upload a custom waiting room page for preview. You will receive a preview URL in the form \`http://waitingrooms.dev/preview/<uuid>\`. You can use the following query parameters to change the state of the preview: 1. \`force_queue\`: Boolean indicating if all users will be queued in the waiting room and no one will be let into the origin website (also known as queueAll). 2. \`queue_is_full\`: Boolean indicating if the waiting room\'s queue is currently full and not accepting new users at the moment. 3. \`queueing_method\`: The queueing method currently used by the waiting room. - **fifo** indicates a FIFO queue. - **random** indicates a Random queue. - **passthrough** indicates a Passthrough queue. Keep in mind that the waiting room page will only be displayed if \`force_queue=true\` or \`event=prequeueing\` — for other cases the request will pass through to the origin. For our preview, this will be a fake origin website returning \\"Welcome\\". - **reject** indicates a Reject queue. 4. \`event\`: Used to preview a waiting room event. - **none** indicates no event is occurring. - **prequeueing** indicates that an event is prequeueing (between \`prequeue_start_time\` and \`event_start_time\`). - **started** indicates that an event has started (between \`event_start_time\` and \`event_end_time\`). 5. \`shuffle_at_event_start\`: Boolean indicating if the event will shuffle users in the prequeue when it starts. This can only be set to **true** if an event is active (\`event\` is not **none**). For example, you can make a request to \`http://waitingrooms.dev/preview/<uuid>?force_queue=false&queue_is_full=false&queueing_method=random&event=started&shuffle_at_event_start=true\` 6. \`waitTime\`: Non-zero, positive integer indicating the estimated wait time in minutes. The default value is 10 minutes. For example, you can make a request to \`http://waitingrooms.dev/preview/<uuid>?waitTime=50\` to configure the estimated wait time as 50 minutes.',

  builder: (yargs: Argv): Argv<PreviewArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('custom-html', {
        type: 'string',
        description:
          'Only available for the Waiting Room Advanced subscription. This is a template html file that will be rendered at the edge. If no custom_page_html is provided, the default waiting room will be used. The template is based on mustache ( https://mustache.github.io/ ). There are several variables that are evaluated by the Cloudflare edge: 1. {{\`waitTimeKnown\`}} Acts like a boolean value that indicates the behavior to take when wait time is not available, for instance when queue_all is **true**. 2. {{\`waitTimeFormatted\`}} Estimated wait time for the user. For example, five minutes. Alternatively, you can use: 3. {{\`waitTime\`}} Number of minutes of estimated wait for a user. 4. {{\`waitTimeHours\`}} Number of hours of estimated wait for a user (\`Math.floor(waitTime/60)\`). 5. {{\`waitTimeHourMinutes\`}} Number of minutes above the \`waitTimeHours\` value (\`waitTime%60\`). 6. {{\`queueIsFull\`}} Changes to **true** when no more people can be added to the queue.  To view the full list of variables, look at the \`cfWaitingRoom\` object described under the \`json_response_enabled\` property in other Waiting Room API calls.',
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
      }) as Argv<PreviewArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PreviewArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf waiting-rooms page preview',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/waiting_rooms/preview`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: { customHtml: argv.customHtml },
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
        const result = await client.post<unknown>(`/zones/${zoneId}/waiting_rooms/preview`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.customHtml !== undefined) setNestedValue(bodyData, ['custom_html'], argv.customHtml);
      const result = await client.post<unknown>(`/zones/${zoneId}/waiting_rooms/preview`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
