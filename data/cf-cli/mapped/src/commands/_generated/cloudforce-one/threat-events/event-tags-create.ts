/**
 * event-tags-create command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface EventTagsCreateArgs {
  eventId: string;
  tags: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EventTagsCreateArgs> = {
  command: 'event-tags-create <eventId>',
  describe: 'Adds a tag to a threat event in Cloudforce One for classification and filtering.',

  builder: (yargs: Argv): Argv<EventTagsCreateArgs> => {
    return yargs
      .positional('eventId', {
        type: 'string',
        description: 'Event UUID.',
        demandOption: true,
      })
      .option('tags', {
        type: 'string',
        description: 'The tags field',
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
      }) as Argv<EventTagsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EventTagsCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.eventId as string | undefined, 'eventId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one threat-events event-tags-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/event_tag/${argv.eventId ?? '<eventId>'}/create`,
          pathParams: { eventId: String(argv.eventId ?? '') },
          body: { tags: argv.tags },
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
        const result = await client.post<unknown>(
          `/accounts/${accountId}/cloudforce-one/events/event_tag/${argv.eventId}/create`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.tags !== undefined) setNestedValue(bodyData, ['tags'], argv.tags);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/cloudforce-one/events/event_tag/${argv.eventId}/create`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
