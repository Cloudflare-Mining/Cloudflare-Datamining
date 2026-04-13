/**
 * event-notifications-get command
 * @generated from apis/r2/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface EventNotificationsGetArgs {
  queueId: string;
  bucketName: string;
  'cf-r2-jurisdiction'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, EventNotificationsGetArgs> = {
  command: 'event-notifications-get <queueId> <bucketName>',
  describe: 'Get a single event notification rule.',

  builder: (yargs: Argv): Argv<EventNotificationsGetArgs> => {
    return yargs
      .positional('queueId', {
        type: 'string',
        description: 'Queue ID.',
        demandOption: true,
      })
      .positional('bucketName', {
        type: 'string',
        description: 'Name of the bucket.',
        demandOption: true,
      })
      .option('cf-r2-jurisdiction', {
        type: 'string',
        description: 'The bucket jurisdiction.',
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
      }) as Argv<EventNotificationsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EventNotificationsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.queueId as string | undefined, 'queueId');
      validateResourceId(argv.bucketName as string | undefined, 'bucketName');

      const headers: Record<string, string> = {};
      if (argv.cfR2Jurisdiction !== undefined) headers['cf-r2-jurisdiction'] = String(argv.cfR2Jurisdiction);
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.get<unknown>(
        `/accounts/${accountId}/event_notifications/r2/${argv.bucketName}/configuration/queues/${argv.queueId}`,
        { headers: Object.keys(headers).length > 0 ? headers : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
