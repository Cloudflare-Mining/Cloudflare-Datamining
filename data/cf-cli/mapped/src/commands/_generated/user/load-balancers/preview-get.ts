/**
 * preview-get command
 * @generated from apis/user/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface PreviewGetArgs {
  previewId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, PreviewGetArgs> = {
  command: 'preview-get <previewId>',
  describe: 'Get the result of a previous preview operation using the provided preview_id.',

  builder: (yargs: Argv): Argv<PreviewGetArgs> => {
    return yargs
      .positional('previewId', {
        type: 'string',
        description: 'Preview ID',
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
      }) as Argv<PreviewGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PreviewGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.previewId as string | undefined, 'previewId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.user.loadbalancers.previewGet(argv.previewId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
