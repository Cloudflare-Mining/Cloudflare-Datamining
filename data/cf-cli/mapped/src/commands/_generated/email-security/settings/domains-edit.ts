/**
 * domains-edit command
 * @generated from apis/email-security/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface DomainsEditArgs {
  domainId: string;
  'allowed-delivery-modes'?: string;
  domain?: string;
  'drop-dispositions'?: string;
  'integration-id'?: string;
  'ip-restrictions': string;
  'lookback-hops'?: number;
  regions?: string;
  'require-tls-inbound'?: boolean;
  'require-tls-outbound'?: boolean;
  transport?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DomainsEditArgs> = {
  command: 'domains-edit <domainId>',
  describe: 'Updates configuration for a domain in email security.',

  builder: (yargs: Argv): Argv<DomainsEditArgs> => {
    return yargs
      .positional('domainId', {
        type: 'string',
        description: 'The unique identifier for the domain.',
        demandOption: true,
      })
      .option('allowed-delivery-modes', {
        type: 'string',
        description: 'The allowed_delivery_modes field',
        default: undefined,
      })
      .option('domain', {
        type: 'string',
        description: 'The domain field',
        default: undefined,
      })
      .option('drop-dispositions', {
        type: 'string',
        description: 'The drop_dispositions field',
        default: undefined,
      })
      .option('integration-id', {
        type: 'string',
        description: 'The integration_id field',
        default: undefined,
      })
      .option('ip-restrictions', {
        type: 'string',
        description: 'The ip_restrictions field',
      })
      .option('lookback-hops', {
        type: 'number',
        description: 'The lookback_hops field',
        default: undefined,
      })
      .option('regions', {
        type: 'string',
        description: 'The regions field',
        default: undefined,
      })
      .option('require-tls-inbound', {
        type: 'boolean',
        description: 'The require_tls_inbound field',
        default: false,
      })
      .option('require-tls-outbound', {
        type: 'boolean',
        description: 'The require_tls_outbound field',
        default: false,
      })
      .option('transport', {
        type: 'string',
        description: 'The transport field',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<DomainsEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DomainsEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.domainId as string | undefined, 'domainId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf email-security settings domains-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/email-security/settings/domains/${argv.domainId ?? '<domainId>'}`,
          pathParams: { domainId: String(argv.domainId ?? '') },
          body: {
            allowedDeliveryModes: argv.allowedDeliveryModes,
            domain: argv.domain,
            dropDispositions: argv.dropDispositions,
            integrationId: argv.integrationId,
            ipRestrictions: argv.ipRestrictions,
            lookbackHops: argv.lookbackHops,
            regions: argv.regions,
            requireTlsInbound: argv.requireTlsInbound,
            requireTlsOutbound: argv.requireTlsOutbound,
            transport: argv.transport,
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
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/email-security/settings/domains/${argv.domainId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.allowedDeliveryModes !== undefined)
        setNestedValue(bodyData, ['allowed_delivery_modes'], argv.allowedDeliveryModes);
      if (argv.domain !== undefined) setNestedValue(bodyData, ['domain'], argv.domain);
      if (argv.dropDispositions !== undefined) setNestedValue(bodyData, ['drop_dispositions'], argv.dropDispositions);
      if (argv.integrationId !== undefined) setNestedValue(bodyData, ['integration_id'], argv.integrationId);
      if (argv.ipRestrictions !== undefined) setNestedValue(bodyData, ['ip_restrictions'], argv.ipRestrictions);
      if (argv.lookbackHops !== undefined) setNestedValue(bodyData, ['lookback_hops'], argv.lookbackHops);
      if (argv.regions !== undefined) setNestedValue(bodyData, ['regions'], argv.regions);
      if (argv.requireTlsInbound !== undefined)
        setNestedValue(bodyData, ['require_tls_inbound'], argv.requireTlsInbound);
      if (argv.requireTlsOutbound !== undefined)
        setNestedValue(bodyData, ['require_tls_outbound'], argv.requireTlsOutbound);
      if (argv.transport !== undefined) setNestedValue(bodyData, ['transport'], argv.transport);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/email-security/settings/domains/${argv.domainId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
