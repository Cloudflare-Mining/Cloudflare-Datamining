/**
 * ipfs-universal-paths-content-lists-entries-get command
 * @generated from apis/web3/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface IpfsUniversalPathsContentListsEntriesGetArgs {
  contentListEntryIdentifier: string;
  identifier: string;
  zoneId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, IpfsUniversalPathsContentListsEntriesGetArgs> = {
  command: 'ipfs-universal-paths-content-lists-entries-get <contentListEntryIdentifier> <identifier> [zoneId]',
  describe: 'Retrieves details for a specific IPFS Universal Path Gateway content list entry.',

  builder: (yargs: Argv): Argv<IpfsUniversalPathsContentListsEntriesGetArgs> => {
    return yargs
      .positional('contentListEntryIdentifier', {
        type: 'string',
        description: 'Specify the identifier of the hostname.',
        demandOption: true,
      })
      .positional('identifier', {
        type: 'string',
        description: 'Specify the identifier of the hostname.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Specify the identifier of the hostname. (or use --zone flag)',
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<IpfsUniversalPathsContentListsEntriesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<IpfsUniversalPathsContentListsEntriesGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.contentListEntryIdentifier as string | undefined, 'contentListEntryIdentifier');
      validateResourceId(argv.identifier as string | undefined, 'identifier');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.web3.hostnames.ipfsUniversalPathsContentListsEntriesGet(
        argv.contentListEntryIdentifier,
        argv.identifier,
        zoneId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
