/**
 * create command
 * @generated from apis/custom-hostnames/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface CreateArgs {
  zoneId?: string;
  hostname: string;
  'ssl-bundle-method'?: string;
  'ssl-certificate-authority'?: string;
  'ssl-cloudflare-branding'?: boolean;
  'ssl-custom-certificate'?: string;
  'ssl-custom-csr-id'?: string;
  'ssl-custom-key'?: string;
  'ssl-method'?: string;
  'ssl-settings-ciphers'?: string;
  'ssl-settings-early-hints'?: string;
  'ssl-settings-http2'?: string;
  'ssl-settings-min-tls-version'?: string;
  'ssl-settings-tls-1-3'?: string;
  'ssl-type'?: string;
  'ssl-wildcard'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create [zoneId]',
  describe:
    "Add a new custom hostname and request that an SSL certificate be issued for it. One of three validation methods—http, txt, email—should be used, with 'http' recommended if the CNAME is already in place (or will be soon). Specifying 'email' will send an email to the WHOIS contacts on file for the base domain plus hostmaster, postmaster, webmaster, admin, administrator. If http is used and the domain is not already pointing to the Managed CNAME host, the PATCH method must be used once it is (to complete validation). Enable bundling of certificates using the custom_cert_bundle field. The bundling process requires the following condition One certificate in the bundle must use an RSA, and the other must use an ECDSA.",

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('hostname', {
        type: 'string',
        description: 'The custom hostname that will point to your hostname via CNAME.',
      })
      .option('ssl-bundle-method', {
        type: 'string',
        description:
          'A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.',
        choices: ['ubiquitous', 'optimal', 'force'] as const,
        default: undefined,
      })
      .option('ssl-certificate-authority', {
        type: 'string',
        description: 'The Certificate Authority that will issue the certificate',
        choices: ['digicert', 'google', 'lets_encrypt', 'ssl_com'] as const,
        default: undefined,
      })
      .option('ssl-cloudflare-branding', {
        type: 'boolean',
        description:
          'Whether or not to add Cloudflare Branding for the order.  This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true',
        default: false,
      })
      .option('ssl-custom-certificate', {
        type: 'string',
        description: 'If a custom uploaded certificate is used.',
        default: undefined,
      })
      .option('ssl-custom-csr-id', {
        type: 'string',
        description: 'The identifier for the Custom CSR that was used.',
        default: undefined,
      })
      .option('ssl-custom-key', {
        type: 'string',
        description: 'The key for a custom uploaded certificate.',
        default: undefined,
      })
      .option('ssl-method', {
        type: 'string',
        description: 'Domain control validation (DCV) method used for this hostname.',
        choices: ['http', 'txt', 'email'] as const,
        default: undefined,
      })
      .option('ssl-settings-ciphers', {
        type: 'string',
        description: 'An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format.',
        default: undefined,
      })
      .option('ssl-settings-early-hints', {
        type: 'string',
        description: 'Whether or not Early Hints is enabled.',
        choices: ['on', 'off'] as const,
        default: undefined,
      })
      .option('ssl-settings-http2', {
        type: 'string',
        description: 'Whether or not HTTP2 is enabled.',
        choices: ['on', 'off'] as const,
        default: undefined,
      })
      .option('ssl-settings-min-tls-version', {
        type: 'string',
        description: 'The minimum TLS version supported.',
        choices: ['1.0', '1.1', '1.2', '1.3'] as const,
        default: undefined,
      })
      .option('ssl-settings-tls-1-3', {
        type: 'string',
        description: 'Whether or not TLS 1.3 is enabled.',
        choices: ['on', 'off'] as const,
        default: undefined,
      })
      .option('ssl-type', {
        type: 'string',
        description: 'Level of validation to be used for this hostname. Domain validation (dv) must be used.',
        choices: ['dv'] as const,
        default: undefined,
      })
      .option('ssl-wildcard', {
        type: 'boolean',
        description: 'Indicates whether the certificate covers a wildcard.',
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
      .choices('ssl-bundle-method', ['ubiquitous', 'optimal', 'force'] as const)
      .choices('ssl-certificate-authority', ['digicert', 'google', 'lets_encrypt', 'ssl_com'] as const)
      .choices('ssl-method', ['http', 'txt', 'email'] as const)
      .choices('ssl-settings-early-hints', ['on', 'off'] as const)
      .choices('ssl-settings-http2', ['on', 'off'] as const)
      .choices('ssl-settings-min-tls-version', ['1.0', '1.1', '1.2', '1.3'] as const)
      .choices('ssl-settings-tls-1-3', ['on', 'off'] as const)
      .choices('ssl-type', ['dv'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf custom-hostnames create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/custom_hostnames`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            hostname: argv.hostname,
            sslBundleMethod: argv.sslBundleMethod,
            sslCertificateAuthority: argv.sslCertificateAuthority,
            sslCloudflareBranding: argv.sslCloudflareBranding,
            sslCustomCertificate: argv.sslCustomCertificate,
            sslCustomCsrId: argv.sslCustomCsrId,
            sslCustomKey: argv.sslCustomKey,
            sslMethod: argv.sslMethod,
            sslSettingsCiphers: argv.sslSettingsCiphers,
            sslSettingsEarlyHints: argv.sslSettingsEarlyHints,
            sslSettingsHttp2: argv.sslSettingsHttp2,
            sslSettingsMinTlsVersion: argv.sslSettingsMinTlsVersion,
            sslSettingsTls13: argv.sslSettingsTls13,
            sslType: argv.sslType,
            sslWildcard: argv.sslWildcard,
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
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/zones/${zoneId}/custom_hostnames`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.hostname !== undefined) setNestedValue(bodyData, ['hostname'], argv.hostname);
      if (argv.sslBundleMethod !== undefined) setNestedValue(bodyData, ['ssl', 'bundle_method'], argv.sslBundleMethod);
      if (argv.sslCertificateAuthority !== undefined)
        setNestedValue(bodyData, ['ssl', 'certificate_authority'], argv.sslCertificateAuthority);
      if (argv.sslCloudflareBranding !== undefined)
        setNestedValue(bodyData, ['ssl', 'cloudflare_branding'], argv.sslCloudflareBranding);
      if (argv.sslCustomCertificate !== undefined)
        setNestedValue(bodyData, ['ssl', 'custom_certificate'], argv.sslCustomCertificate);
      if (argv.sslCustomCsrId !== undefined) setNestedValue(bodyData, ['ssl', 'custom_csr_id'], argv.sslCustomCsrId);
      if (argv.sslCustomKey !== undefined) setNestedValue(bodyData, ['ssl', 'custom_key'], argv.sslCustomKey);
      if (argv.sslMethod !== undefined) setNestedValue(bodyData, ['ssl', 'method'], argv.sslMethod);
      if (argv.sslSettingsCiphers !== undefined)
        setNestedValue(bodyData, ['ssl', 'settings', 'ciphers'], argv.sslSettingsCiphers);
      if (argv.sslSettingsEarlyHints !== undefined)
        setNestedValue(bodyData, ['ssl', 'settings', 'early_hints'], argv.sslSettingsEarlyHints);
      if (argv.sslSettingsHttp2 !== undefined)
        setNestedValue(bodyData, ['ssl', 'settings', 'http2'], argv.sslSettingsHttp2);
      if (argv.sslSettingsMinTlsVersion !== undefined)
        setNestedValue(bodyData, ['ssl', 'settings', 'min_tls_version'], argv.sslSettingsMinTlsVersion);
      if (argv.sslSettingsTls13 !== undefined)
        setNestedValue(bodyData, ['ssl', 'settings', 'tls_1_3'], argv.sslSettingsTls13);
      if (argv.sslType !== undefined) setNestedValue(bodyData, ['ssl', 'type'], argv.sslType);
      if (argv.sslWildcard !== undefined) setNestedValue(bodyData, ['ssl', 'wildcard'], argv.sslWildcard);
      const result = await client.post<unknown>(`/zones/${zoneId}/custom_hostnames`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
