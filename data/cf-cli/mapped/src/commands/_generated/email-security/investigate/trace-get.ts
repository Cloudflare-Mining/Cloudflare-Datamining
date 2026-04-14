/**
 * trace-get command
 * @generated from apis/email-security/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface TraceGetArgs {
  postfixId: string;
  submission?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TraceGetArgs> = {
  command: 'trace-get <postfixId>',
  describe: 'Gets the delivery trace for an email message, showing its path through email security processing.',

  builder: (yargs: Argv): Argv<TraceGetArgs> => {
    return yargs
      .positional('postfixId', {
        type: 'string',
        description: 'The identifier of the message.',
        demandOption: true,
      })
      .option('submission', {
        type: 'boolean',
        description:
          'When true, search the submissions datastore only. When false or omitted, search the regular datastore only.',
        default: false,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<TraceGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TraceGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.postfixId as string | undefined, 'postfixId');

      const params: Record<string, unknown> = {};
      if (argv.submission !== undefined) params['submission'] = argv.submission;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.emailSecurity.investigate.traceGet(
        accountId,
        argv.postfixId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
