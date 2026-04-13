/**
 * purge command
 * @generated from apis/cache/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody } from '../../../lib/body-parser.js';

interface PurgeArgs {
  zoneId?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, PurgeArgs> = {
  command: 'purge [zoneId]',
  describe:
    '### Purge All Cached Content Removes ALL files from Cloudflare\'s cache. All tiers can purge everything. \`\`\` {"purge_everything": true} \`\`\` ### Purge Cached Content by URL Granularly removes one or more files from Cloudflare\'s cache by specifying URLs. All tiers can purge by URL. To purge files with custom cache keys, include the headers used to compute the cache key as in the example. If you have a device type or geo in your cache key, you will need to include the CF-Device-Type or CF-IPCountry headers. If you have lang in your cache key, you will need to include the Accept-Language header. **NB:** When including the Origin header, be sure to include the **scheme** and **hostname**. The port number can be omitted if it is the default port (80 for http, 443 for https), but must be included otherwise. Single file purge example with files: \`\`\` {"files": ["http://www.example.com/css/styles.css", "http://www.example.com/js/index.js"]} \`\`\` Single file purge example with url and header pairs: \`\`\` {"files": [{url: "http://www.example.com/cat_picture.jpg", headers: { "CF-IPCountry": "US", "CF-Device-Type": "desktop", "Accept-Language": "zh-CN" }}, {url: "http://www.example.com/dog_picture.jpg", headers: { "CF-IPCountry": "EU", "CF-Device-Type": "mobile", "Accept-Language": "en-US" }}]} \`\`\` ### Purge Cached Content by Tag, Host or Prefix Granularly removes one or more files from Cloudflare\'s cache either by specifying the host, the associated Cache-Tag, or a Prefix. Flex purge with tags: \`\`\` {"tags": ["a-cache-tag", "another-cache-tag"]} \`\`\` Flex purge with hosts: \`\`\` {"hosts": ["www.example.com", "images.example.com"]} \`\`\` Flex purge with prefixes: \`\`\` {"prefixes": ["www.example.com/foo", "images.example.com/bar/baz"]} \`\`\` ### Availability and limits please refer to [purge cache availability and limits documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/#availability-and-limits).',

  builder: (yargs: Argv): Argv<PurgeArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Zone ID (or use --zone flag)',
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
      }) as Argv<PurgeArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PurgeArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf cache purge',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/purge_cache`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/zones/${zoneId}/purge_cache`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.cache.purge(zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
