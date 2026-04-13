/**
 * asns-rel command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface AsnsRelArgs {
  asn: string;
  asn2?: number;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AsnsRelArgs> = {
  command: 'asns-rel <asn>',
  describe: 'Retrieves AS-level relationship for given networks.',

  builder: (yargs: Argv): Argv<AsnsRelArgs> => {
    return yargs
      .positional('asn', {
        type: 'string',
        description: 'Retrieves all ASNs with provider-customer or peering relationships with the given ASN.',
        demandOption: true,
      })
      .option('asn2', {
        type: 'number',
        description: 'Retrieves the AS relationship of ASN2 with respect to the given ASN.',
        default: undefined,
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
      }) as Argv<AsnsRelArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AsnsRelArgs>): Promise<void> => {
    try {
      validateResourceId(argv.asn as string | undefined, 'asn');

      const params: Record<string, unknown> = {};
      if (argv.asn2 !== undefined) params['asn2'] = argv.asn2;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.entities.asnsRel(argv.asn, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
