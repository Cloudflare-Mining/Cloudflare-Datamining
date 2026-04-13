/**
 * raw-create command
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

interface RawCreateArgs {
  eventId: string;
  rawId: string;
  source?: string;
  tlp?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, RawCreateArgs> = {
  command: 'raw-create <eventId> <rawId>',
  describe: 'Updates a raw event',

  builder: (yargs: Argv): Argv<RawCreateArgs> => {
    return yargs
      .positional('eventId', {
        type: 'string',
        description: 'Event UUID.',
        demandOption: true,
      })
      .positional('rawId', {
        type: 'string',
        description: 'Raw Event UUID.',
        demandOption: true,
      })
      .option('source', {
        type: 'string',
        description: 'The source field',
        default: undefined,
      })
      .option('tlp', {
        type: 'string',
        description: 'The tlp field',
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
      }) as Argv<RawCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RawCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.eventId as string | undefined, 'eventId');
      validateResourceId(argv.rawId as string | undefined, 'rawId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events raw-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/${argv.eventId ?? '<eventId>'}/raw/${argv.rawId ?? '<rawId>'}`,
          pathParams: { eventId: String(argv.eventId ?? ''), rawId: String(argv.rawId ?? '') },
          body: { source: argv.source, tlp: argv.tlp },
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
          `/accounts/${accountId}/cloudforce-one/events/${argv.eventId}/raw/${argv.rawId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.source !== undefined) setNestedValue(bodyData, ['source'], argv.source);
      if (argv.tlp !== undefined) setNestedValue(bodyData, ['tlp'], argv.tlp);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/cloudforce-one/events/${argv.eventId}/raw/${argv.rawId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
