/**
 * authorities-get command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface AuthoritiesGetArgs {
  caSlug: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AuthoritiesGetArgs> = {
  command: 'authorities-get <caSlug>',
  describe: 'Retrieves the requested CA information.',

  builder: (yargs: Argv): Argv<AuthoritiesGetArgs> => {
    return yargs
      .positional('caSlug', {
        type: 'string',
        description: 'Certificate authority SHA256 fingerprint.',
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
      }) as Argv<AuthoritiesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AuthoritiesGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.caSlug as string | undefined, 'caSlug');

      const params: Record<string, unknown> = {};
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.ct.authoritiesGet(
        argv.caSlug,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
