/**
 * edit-domain-registration command
 * @generated from apis/registrar/schema.ts
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

interface EditDomainRegistrationArgs {
  domainName: string;
  'idempotency-key': string;
  prefer?: string;
  'auto-renew'?: boolean;
  'dns-settings-nameservers'?: string;
  'dns-settings-type': string;
  locked?: boolean;
  'privacy-enabled'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditDomainRegistrationArgs> = {
  command: 'edit-domain-registration <domainName>',
  describe:
    'Updates an existing domain registration. By default, the server holds the connection for up to 10 seconds while the update completes. Most updates finish within this window and return \`200 OK\` with a completed workflow status. If the update is still processing after 10 seconds, the server returns \`202 Accepted\`. Poll the URL in \`links.self\` to track progress. To skip the wait and receive an immediate \`202\`, send \`Prefer: respond-async\`. Supports updating: - \`auto_renew\` — Enable/disable automatic renewal - \`privacy_enabled\` — Enable/disable WHOIS privacy - \`locked\` — Lock/unlock domain for transfer - \`dns_settings\` — Change nameservers or DNS type All updates are atomic — if any field fails, the entire update is rolled back.',

  builder: (yargs: Argv): Argv<EditDomainRegistrationArgs> => {
    return yargs
      .positional('domainName', {
        type: 'string',
        description: 'Domain name to update.',
        demandOption: true,
      })
      .option('idempotency-key', {
        type: 'string',
        description: 'Client-generated idempotency key to dedupe retries.',
      })
      .option('prefer', {
        type: 'string',
        description:
          'Set to \`respond-async\` to receive an immediate \`202 Accepted\` without waiting for the operation to complete (RFC 7240).',
        default: undefined,
      })
      .option('auto-renew', {
        type: 'boolean',
        description:
          'Enable or disable automatic renewal. When enabled, the domain will be automatically renewed before expiration. ',
        default: false,
      })
      .option('dns-settings-nameservers', {
        type: 'string',
        description:
          'Custom nameservers for the domain. Required when \`type\` is \`custom\`. Ignored when \`type\` is \`cloudflare\`. Must provide between 2 and 5 nameservers. ',
        default: undefined,
      })
      .option('dns-settings-type', {
        type: 'string',
        description:
          "DNS type for the domain. - \`cloudflare\`: Use Cloudflare's nameservers (managed DNS) - \`custom\`: Use custom nameservers ",
        choices: ['cloudflare', 'custom'] as const,
      })
      .option('locked', {
        type: 'boolean',
        description:
          'Lock or unlock the domain for transfer. When locked, the domain cannot be transferred to another registrar. Unlock the domain before initiating a transfer away. ',
        default: false,
      })
      .option('privacy-enabled', {
        type: 'boolean',
        description:
          'Enable or disable WHOIS privacy protection. When enabled, registrant contact information is hidden from public WHOIS. Note: Some TLDs do not support WHOIS privacy. ',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      })
      .choices('dns-settings-type', ['cloudflare', 'custom'] as const) as Argv<EditDomainRegistrationArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditDomainRegistrationArgs>): Promise<void> => {
    try {
      validateResourceId(argv.domainName as string | undefined, 'domainName');

      const headers: Record<string, string> = {};
      if (argv.idempotencyKey !== undefined) headers['Idempotency-Key'] = String(argv.idempotencyKey);
      if (argv.prefer !== undefined) headers['Prefer'] = String(argv.prefer);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf registrar registrations edit-domain-registration',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/registrar/registrations/${argv.domainName ?? '<domainName>'}`,
          pathParams: { domainName: String(argv.domainName ?? '') },
          body: {
            autoRenew: argv.autoRenew,
            dnsSettingsNameservers: argv.dnsSettingsNameservers,
            dnsSettingsType: argv.dnsSettingsType,
            locked: argv.locked,
            privacyEnabled: argv.privacyEnabled,
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
          `/accounts/${accountId}/registrar/registrations/${argv.domainName}`,
          { body: bodyData, headers: Object.keys(headers).length > 0 ? headers : undefined },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.autoRenew !== undefined) setNestedValue(bodyData, ['auto_renew'], argv.autoRenew);
      if (argv.dnsSettingsNameservers !== undefined)
        setNestedValue(bodyData, ['dns_settings', 'nameservers'], argv.dnsSettingsNameservers);
      if (argv.dnsSettingsType !== undefined) setNestedValue(bodyData, ['dns_settings', 'type'], argv.dnsSettingsType);
      if (argv.locked !== undefined) setNestedValue(bodyData, ['locked'], argv.locked);
      if (argv.privacyEnabled !== undefined) setNestedValue(bodyData, ['privacy_enabled'], argv.privacyEnabled);
      if (argv.idempotencyKey !== undefined) bodyData['idempotency_key'] = argv.idempotencyKey;
      const result = await client.patch<unknown>(`/accounts/${accountId}/registrar/registrations/${argv.domainName}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
        headers: Object.keys(headers).length > 0 ? headers : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
