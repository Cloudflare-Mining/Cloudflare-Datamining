/**
 * asns-as-set command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface AsnsAsSetArgs {
  asn: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AsnsAsSetArgs> = {
  command: 'asns-as-set <asn>',
  describe: 'Retrieves Internet Routing Registry AS-SETs that an AS is a member of.',

  builder: (yargs: Argv): Argv<AsnsAsSetArgs> => {
    return yargs
      .positional('asn', {
        type: 'string',
        description: 'Retrieves all AS-SETs that the given AS is a member of.',
        demandOption: true,
      })
      .option('format', {
        type: 'string',
        description: 'Format in which results will be returned.',
        choices: ['JSON', 'CSV'] as const,
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
      }) as Argv<AsnsAsSetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AsnsAsSetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.asn as string | undefined, 'asn');

      const params: Record<string, unknown> = {};
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.entities.asnsAsSet(
        argv.asn,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
