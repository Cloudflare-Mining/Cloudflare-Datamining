/**
 * blobs-get command
 * @generated from apis/images/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface BlobsGetArgs {
  imageId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, BlobsGetArgs> = {
  command: 'blobs-get <imageId>',
  describe:
    'Fetch base image. For most images this will be the originally uploaded file. For larger images it can be a near-lossless version of the original.',

  builder: (yargs: Argv): Argv<BlobsGetArgs> => {
    return yargs
      .positional('imageId', {
        type: 'string',
        description: 'Image unique identifier.',
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
      }) as Argv<BlobsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BlobsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.imageId as string | undefined, 'imageId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.images.v1.blobsGet(argv.imageId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
