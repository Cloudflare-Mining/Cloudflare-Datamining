/**
 * ipfs-universal-paths-content-lists-entries-delete command
 * @generated from apis/web3/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody } from '../../../../lib/body-parser.js';

interface IpfsUniversalPathsContentListsEntriesDeleteArgs {
  contentListEntryIdentifier: string;
  identifier: string;
  zoneId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, IpfsUniversalPathsContentListsEntriesDeleteArgs> = {
  command: 'ipfs-universal-paths-content-lists-entries-delete <contentListEntryIdentifier> <identifier> [zoneId]',
  describe: 'Deletes an entry from an IPFS Universal Path Gateway content list.',

  builder: (yargs: Argv): Argv<IpfsUniversalPathsContentListsEntriesDeleteArgs> => {
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<IpfsUniversalPathsContentListsEntriesDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<IpfsUniversalPathsContentListsEntriesDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.contentListEntryIdentifier as string | undefined, 'contentListEntryIdentifier');
      validateResourceId(argv.identifier as string | undefined, 'identifier');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf web3 hostnames ipfs-universal-paths-content-lists-entries-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/web3/hostnames/${argv.identifier ?? '<identifier>'}/ipfs_universal_path/content_list/entries/${argv.contentListEntryIdentifier ?? '<contentListEntryIdentifier>'}`,
          pathParams: {
            contentListEntryIdentifier: String(argv.contentListEntryIdentifier ?? ''),
            identifier: String(argv.identifier ?? ''),
            zoneId: String(argv.zoneId ?? ''),
          },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.delete<unknown>(
          `/zones/${argv.zoneId}/web3/hostnames/${argv.identifier}/ipfs_universal_path/content_list/entries/${argv.contentListEntryIdentifier}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.web3.hostnames.ipfsUniversalPathsContentListsEntriesDelete(
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
