/**
 * rayid-get command
 * @generated from apis/logpush/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface RayidGetArgs {
  zoneId?: string;
  rayId: string;
  fields?: string;
  timestamps?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, RayidGetArgs> = {
  command: 'rayid-get [zoneId] <rayId>',
  describe:
    'The \`/rayids\` api route allows lookups by specific rayid. The rayids route will return zero, one, or more records (ray ids are not unique).',

  builder: (yargs: Argv): Argv<RayidGetArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .positional('rayId', {
        type: 'string',
        description: 'Ray identifier.',
        demandOption: true,
      })
      .option('fields', {
        type: 'string',
        description:
          'The \`/received\` route by default returns a limited set of fields, and allows customers to override the default field set by specifying individual fields. The reasons for this are: 1. Most customers require only a small subset of fields, but that subset varies from customer to customer; 2. Flat schema is much easier to work with downstream (importing into BigTable etc); 3. Performance (time to process, file size). If \`?fields=\` is not specified, default field set is returned. This default field set may change at any time. When \`?fields=\` is provided, each record is returned with the specified fields. \`fields\` must be specified as a comma separated list without any whitespaces, and all fields must exist. The order in which fields are specified does not matter, and the order of fields in the response is not specified.',
        default: undefined,
      })
      .option('timestamps', {
        type: 'string',
        description:
          'By default, timestamps in responses are returned as Unix nanosecond integers. The \`?timestamps=\` argument can be set to change the format in which response timestamps are returned. Possible values are: \`unix\`, \`unixnano\`, \`rfc3339\`. Note that \`unix\` and \`unixnano\` return timestamps as integers; \`rfc3339\` returns timestamps as strings.',
        choices: ['unix', 'unixnano', 'rfc3339'] as const,
        default: undefined,
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<RayidGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RayidGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.rayId as string | undefined, 'rayId');

      const params: Record<string, unknown> = {};
      if (argv.timestamps !== undefined) params['timestamps'] = argv.timestamps;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.logpush.logsreceived.rayidGet(
        zoneId,
        argv.rayId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
