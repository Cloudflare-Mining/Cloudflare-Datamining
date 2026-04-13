/**
 * language-delete command
 * @generated from apis/stream/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface LanguageDeleteArgs {
  language: string;
  identifier: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, LanguageDeleteArgs> = {
  command: 'language-delete <language> <identifier>',
  describe: 'Removes the captions or subtitles from a video.',

  builder: (yargs: Argv): Argv<LanguageDeleteArgs> => {
    return yargs
      .positional('language', {
        type: 'string',
        description: 'The language tag in BCP 47 format.',
        demandOption: true,
      })
      .positional('identifier', {
        type: 'string',
        description: 'A Cloudflare-generated unique identifier for a media item.',
        demandOption: true,
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
      }) as Argv<LanguageDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LanguageDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.language as string | undefined, 'language');
      validateResourceId(argv.identifier as string | undefined, 'identifier');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf stream captions language-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/stream/${argv.identifier ?? '<identifier>'}/captions/${argv.language ?? '<language>'}`,
          pathParams: { language: String(argv.language ?? ''), identifier: String(argv.identifier ?? '') },
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

      const result = await client.stream.captions.languageDelete(argv.language, argv.identifier, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
