/**
 * get-urlscanner-scans command
 * @generated from apis/url-scanner/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface GetUrlscannerScansArgs {
  'scan-id'?: string;
  limit?: number;
  'next-cursor'?: string;
  'date-start'?: string;
  'date-end'?: string;
  url?: string;
  hostname?: string;
  path?: string;
  ip?: string;
  hash?: string;
  'page-url'?: string;
  'page-hostname'?: string;
  'page-path'?: string;
  'page-asn'?: string;
  'page-ip'?: string;
  'account-scans'?: boolean;
  'is-malicious'?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetUrlscannerScansArgs> = {
  command: 'get-urlscanner-scans',
  describe:
    "Search scans by date and webpages' requests, including full URL (after redirects), hostname, and path. <br/> A successful scan will appear in search results a few minutes after finishing but may take much longer if the system in under load. By default, only successfully completed scans will appear in search results, unless searching by \`scanId\`. Please take into account that older scans may be removed from the search index at an unspecified time.",

  builder: (yargs: Argv): Argv<GetUrlscannerScansArgs> => {
    return yargs
      .option('scan-id', {
        type: 'string',
        description: 'Scan UUID.',
        default: undefined,
      })
      .option('limit', {
        type: 'number',
        description: 'Limit the number of objects in the response.',
        default: undefined,
      })
      .option('next-cursor', {
        type: 'string',
        description: 'Pagination cursor to get the next set of results.',
        default: undefined,
      })
      .option('date-start', {
        type: 'string',
        description: 'Filter scans requested after date (inclusive).',
        default: undefined,
      })
      .option('date-end', {
        type: 'string',
        description: 'Filter scans requested before date (inclusive).',
        default: undefined,
      })
      .option('url', {
        type: 'string',
        description: 'Filter scans by URL of _any_ request made by the webpage',
        default: undefined,
      })
      .option('hostname', {
        type: 'string',
        description: 'Filter scans by hostname of _any_ request made by the webpage.',
        default: undefined,
      })
      .option('path', {
        type: 'string',
        description: 'Filter scans by url path of _any_ request made by the webpage.',
        default: undefined,
      })
      .option('ip', {
        type: 'string',
        description: 'Filter scans by IP address (IPv4 or IPv6) of _any_ request made by the webpage.',
        default: undefined,
      })
      .option('hash', {
        type: 'string',
        description: 'Filter scans by hash of any html/js/css request made by the webpage.',
        default: undefined,
      })
      .option('page-url', {
        type: 'string',
        description: 'Filter scans by submitted or scanned URL',
        default: undefined,
      })
      .option('page-hostname', {
        type: 'string',
        description: 'Filter scans by main page hostname (domain of effective URL).',
        default: undefined,
      })
      .option('page-path', {
        type: 'string',
        description: 'Filter scans by exact match of effective URL path (also supports suffix search).',
        default: undefined,
      })
      .option('page-asn', {
        type: 'string',
        description: 'Filter scans by main page Autonomous System Number (ASN).',
        default: undefined,
      })
      .option('page-ip', {
        type: 'string',
        description: 'Filter scans by  main page IP address (IPv4 or IPv6).',
        default: undefined,
      })
      .option('account-scans', {
        type: 'boolean',
        description: 'Return only scans created by account.',
        default: false,
      })
      .option('is-malicious', {
        type: 'boolean',
        description: 'Filter scans by malicious verdict.',
        default: false,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<GetUrlscannerScansArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetUrlscannerScansArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.scanId !== undefined) params['scan_id'] = argv.scanId;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.nextCursor !== undefined) params['next_cursor'] = argv.nextCursor;
      if (argv.dateStart !== undefined) params['date_start'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['date_end'] = argv.dateEnd;
      if (argv.url !== undefined) params['url'] = argv.url;
      if (argv.hostname !== undefined) params['hostname'] = argv.hostname;
      if (argv.path !== undefined) params['path'] = argv.path;
      if (argv.ip !== undefined) params['ip'] = argv.ip;
      if (argv.hash !== undefined) params['hash'] = argv.hash;
      if (argv.pageUrl !== undefined) params['page_url'] = argv.pageUrl;
      if (argv.pageHostname !== undefined) params['page_hostname'] = argv.pageHostname;
      if (argv.pagePath !== undefined) params['page_path'] = argv.pagePath;
      if (argv.pageAsn !== undefined) params['page_asn'] = argv.pageAsn;
      if (argv.pageIp !== undefined) params['page_ip'] = argv.pageIp;
      if (argv.accountScans !== undefined) params['account_scans'] = argv.accountScans;
      if (argv.isMalicious !== undefined) params['is_malicious'] = argv.isMalicious;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.urlScanner.scan.getUrlscannerScans(
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
