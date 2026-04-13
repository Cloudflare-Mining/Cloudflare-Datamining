/**
 * cloudflared-configurations-update command
 * @generated from apis/zero-trust/schema.ts
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

interface CloudflaredConfigurationsUpdateArgs {
  tunnelId: string;
  'config-origin-request-access-aud-tag': string;
  'config-origin-request-access-required'?: boolean;
  'config-origin-request-access-team-name': string;
  'config-origin-request-ca-pool'?: string;
  'config-origin-request-connect-timeout'?: number;
  'config-origin-request-disable-chunked-encoding'?: boolean;
  'config-origin-request-http2origin'?: boolean;
  'config-origin-request-http-host-header'?: string;
  'config-origin-request-keep-alive-connections'?: number;
  'config-origin-request-keep-alive-timeout'?: number;
  'config-origin-request-match-snito-host'?: boolean;
  'config-origin-request-no-happy-eyeballs'?: boolean;
  'config-origin-request-no-tlsverify'?: boolean;
  'config-origin-request-origin-server-name'?: string;
  'config-origin-request-proxy-type'?: string;
  'config-origin-request-tcp-keep-alive'?: number;
  'config-origin-request-tls-timeout'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CloudflaredConfigurationsUpdateArgs> = {
  command: 'cloudflared-configurations-update <tunnelId>',
  describe: 'Adds or updates the configuration for a remotely-managed tunnel.',

  builder: (yargs: Argv): Argv<CloudflaredConfigurationsUpdateArgs> => {
    return yargs
      .positional('tunnelId', {
        type: 'string',
        description: 'UUID of the tunnel.',
        demandOption: true,
      })
      .option('config-origin-request-access-aud-tag', {
        type: 'string',
        description:
          'Access applications that are allowed to reach this hostname for this Tunnel. Audience tags can be identified in the dashboard or via the List Access policies API.',
      })
      .option('config-origin-request-access-required', {
        type: 'boolean',
        description: 'Deny traffic that has not fulfilled Access authorization.',
        default: false,
      })
      .option('config-origin-request-access-team-name', {
        type: 'string',
        description: 'The config.originRequest.access.teamName field',
      })
      .option('config-origin-request-ca-pool', {
        type: 'string',
        description:
          'Path to the certificate authority (CA) for the certificate of your origin. This option should be used only if your certificate is not signed by Cloudflare.',
        default: undefined,
      })
      .option('config-origin-request-connect-timeout', {
        type: 'number',
        description:
          'Timeout for establishing a new TCP connection to your origin server. This excludes the time taken to establish TLS, which is controlled by tlsTimeout.',
        default: undefined,
      })
      .option('config-origin-request-disable-chunked-encoding', {
        type: 'boolean',
        description: 'Disables chunked transfer encoding. Useful if you are running a WSGI server.',
        default: false,
      })
      .option('config-origin-request-http2origin', {
        type: 'boolean',
        description: 'Attempt to connect to origin using HTTP2. Origin must be configured as https.',
        default: false,
      })
      .option('config-origin-request-http-host-header', {
        type: 'string',
        description: 'Sets the HTTP Host header on requests sent to the local service.',
        default: undefined,
      })
      .option('config-origin-request-keep-alive-connections', {
        type: 'number',
        description:
          'Maximum number of idle keepalive connections between Tunnel and your origin. This does not restrict the total number of concurrent connections.',
        default: undefined,
      })
      .option('config-origin-request-keep-alive-timeout', {
        type: 'number',
        description: 'Timeout after which an idle keepalive connection can be discarded.',
        default: undefined,
      })
      .option('config-origin-request-match-snito-host', {
        type: 'boolean',
        description: 'Auto configure the Hostname on the origin server certificate.',
        default: false,
      })
      .option('config-origin-request-no-happy-eyeballs', {
        type: 'boolean',
        description:
          'Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.',
        default: false,
      })
      .option('config-origin-request-no-tlsverify', {
        type: 'boolean',
        description:
          'Disables TLS verification of the certificate presented by your origin. Will allow any certificate from the origin to be accepted.',
        default: false,
      })
      .option('config-origin-request-origin-server-name', {
        type: 'string',
        description: 'Hostname that cloudflared should expect from your origin server certificate.',
        default: undefined,
      })
      .option('config-origin-request-proxy-type', {
        type: 'string',
        description:
          'cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures what type of proxy will be started. Valid options are: "" for the regular proxy and "socks" for a SOCKS5 proxy. ',
        default: undefined,
      })
      .option('config-origin-request-tcp-keep-alive', {
        type: 'number',
        description:
          'The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.',
        default: undefined,
      })
      .option('config-origin-request-tls-timeout', {
        type: 'number',
        description:
          'Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.',
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
      }) as Argv<CloudflaredConfigurationsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CloudflaredConfigurationsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.tunnelId as string | undefined, 'tunnelId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust tunnels cloudflared-configurations-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cfd_tunnel/${argv.tunnelId ?? '<tunnelId>'}/configurations`,
          pathParams: { tunnelId: String(argv.tunnelId ?? '') },
          body: {
            configOriginRequestAccessAudTag: argv.configOriginRequestAccessAudTag,
            configOriginRequestAccessRequired: argv.configOriginRequestAccessRequired,
            configOriginRequestAccessTeamName: argv.configOriginRequestAccessTeamName,
            configOriginRequestCaPool: argv.configOriginRequestCaPool,
            configOriginRequestConnectTimeout: argv.configOriginRequestConnectTimeout,
            configOriginRequestDisableChunkedEncoding: argv.configOriginRequestDisableChunkedEncoding,
            configOriginRequestHttp2origin: argv.configOriginRequestHttp2origin,
            configOriginRequestHttpHostHeader: argv.configOriginRequestHttpHostHeader,
            configOriginRequestKeepAliveConnections: argv.configOriginRequestKeepAliveConnections,
            configOriginRequestKeepAliveTimeout: argv.configOriginRequestKeepAliveTimeout,
            configOriginRequestMatchSnitoHost: argv.configOriginRequestMatchSnitoHost,
            configOriginRequestNoHappyEyeballs: argv.configOriginRequestNoHappyEyeballs,
            configOriginRequestNoTlsverify: argv.configOriginRequestNoTlsverify,
            configOriginRequestOriginServerName: argv.configOriginRequestOriginServerName,
            configOriginRequestProxyType: argv.configOriginRequestProxyType,
            configOriginRequestTcpKeepAlive: argv.configOriginRequestTcpKeepAlive,
            configOriginRequestTlsTimeout: argv.configOriginRequestTlsTimeout,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/cfd_tunnel/${argv.tunnelId}/configurations`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.configOriginRequestAccessAudTag !== undefined)
        setNestedValue(bodyData, ['config', 'originRequest', 'access', 'audTag'], argv.configOriginRequestAccessAudTag);
      if (argv.configOriginRequestAccessRequired !== undefined)
        setNestedValue(
          bodyData,
          ['config', 'originRequest', 'access', 'required'],
          argv.configOriginRequestAccessRequired,
        );
      if (argv.configOriginRequestAccessTeamName !== undefined)
        setNestedValue(
          bodyData,
          ['config', 'originRequest', 'access', 'teamName'],
          argv.configOriginRequestAccessTeamName,
        );
      if (argv.configOriginRequestCaPool !== undefined)
        setNestedValue(bodyData, ['config', 'originRequest', 'caPool'], argv.configOriginRequestCaPool);
      if (argv.configOriginRequestConnectTimeout !== undefined)
        setNestedValue(bodyData, ['config', 'originRequest', 'connectTimeout'], argv.configOriginRequestConnectTimeout);
      if (argv.configOriginRequestDisableChunkedEncoding !== undefined)
        setNestedValue(
          bodyData,
          ['config', 'originRequest', 'disableChunkedEncoding'],
          argv.configOriginRequestDisableChunkedEncoding,
        );
      if (argv.configOriginRequestHttp2origin !== undefined)
        setNestedValue(bodyData, ['config', 'originRequest', 'http2Origin'], argv.configOriginRequestHttp2origin);
      if (argv.configOriginRequestHttpHostHeader !== undefined)
        setNestedValue(bodyData, ['config', 'originRequest', 'httpHostHeader'], argv.configOriginRequestHttpHostHeader);
      if (argv.configOriginRequestKeepAliveConnections !== undefined)
        setNestedValue(
          bodyData,
          ['config', 'originRequest', 'keepAliveConnections'],
          argv.configOriginRequestKeepAliveConnections,
        );
      if (argv.configOriginRequestKeepAliveTimeout !== undefined)
        setNestedValue(
          bodyData,
          ['config', 'originRequest', 'keepAliveTimeout'],
          argv.configOriginRequestKeepAliveTimeout,
        );
      if (argv.configOriginRequestMatchSnitoHost !== undefined)
        setNestedValue(bodyData, ['config', 'originRequest', 'matchSNItoHost'], argv.configOriginRequestMatchSnitoHost);
      if (argv.configOriginRequestNoHappyEyeballs !== undefined)
        setNestedValue(
          bodyData,
          ['config', 'originRequest', 'noHappyEyeballs'],
          argv.configOriginRequestNoHappyEyeballs,
        );
      if (argv.configOriginRequestNoTlsverify !== undefined)
        setNestedValue(bodyData, ['config', 'originRequest', 'noTLSVerify'], argv.configOriginRequestNoTlsverify);
      if (argv.configOriginRequestOriginServerName !== undefined)
        setNestedValue(
          bodyData,
          ['config', 'originRequest', 'originServerName'],
          argv.configOriginRequestOriginServerName,
        );
      if (argv.configOriginRequestProxyType !== undefined)
        setNestedValue(bodyData, ['config', 'originRequest', 'proxyType'], argv.configOriginRequestProxyType);
      if (argv.configOriginRequestTcpKeepAlive !== undefined)
        setNestedValue(bodyData, ['config', 'originRequest', 'tcpKeepAlive'], argv.configOriginRequestTcpKeepAlive);
      if (argv.configOriginRequestTlsTimeout !== undefined)
        setNestedValue(bodyData, ['config', 'originRequest', 'tlsTimeout'], argv.configOriginRequestTlsTimeout);
      const result = await client.put<unknown>(`/accounts/${accountId}/cfd_tunnel/${argv.tunnelId}/configurations`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
