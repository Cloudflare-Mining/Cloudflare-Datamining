/**
 * OAuth configuration for Cloudflare
 */

/** OAuth client ID for the CF CLI */
export const CLIENT_ID = 'cbca97e7-c331-4cdd-8fd8-e25a451b98bf';

/** OAuth endpoints */
export const OAUTH_ENDPOINTS = {
  authorize: 'https://dash.cloudflare.com/oauth2/auth',
  token: 'https://dash.cloudflare.com/oauth2/token',
  revoke: 'https://dash.cloudflare.com/oauth2/revoke',
} as const;

/** Local callback server configuration */
export const CALLBACK_CONFIG = {
  /** Bind to IPv4 loopback — keeps the callback server off the network. Used by both
   *  isPortAvailable() and server.listen() to ensure consistent behaviour. */
  bindHost: '127.0.0.1',
  /** Use localhost for OAuth redirect URL (required by most OAuth providers) */
  urlHost: 'localhost',
  /** Starting port - will try sequential ports if in use */
  startPort: 8877,
  /** Maximum number of ports to try */
  maxPortAttempts: 10,
  path: '/oauth/callback',
} as const;

/** Build callback URL for a given port */
export function getCallbackUrl(port: number): string {
  return `http://${CALLBACK_CONFIG.urlHost}:${port}${CALLBACK_CONFIG.path}`;
}

/** Success redirect after OAuth */
export const SUCCESS_URL = 'https://welcome.developers.workers.dev/cf-oauth-consent-granted';

/** Failure redirect after OAuth (user denied consent or error) */
export const DENIED_URL = 'https://welcome.developers.workers.dev/cf-oauth-consent-denied';

/** OAuth scopes requested by the CLI */
export const SCOPES = [
  'openid',
  'offline', // Non-standard alias required by the Cloudflare OAuth server alongside offline_access
  'offline_access', // Standard OIDC scope for refresh tokens — both are required
  'user:read',
  'account:read',
  'access:read',
  'access:write',
  'agw:read',
  'agw:run',
  'agw:write',
  'ai:read',
  'ai:write',
  'ai-search:read',
  'ai-search:run',
  'ai-search:write',
  'aiaudit:read',
  'aiaudit:write',
  'aig:read',
  'aig:write',
  'auditlogs:read',
  'browser:read',
  'browser:write',
  'cfone:read',
  'cfone:write',
  'cloudchamber:write',
  'connectivity:admin',
  'connectivity:bind',
  'connectivity:read',
  'constellation:write',
  'containers:write',
  'd1:write',
  'dex:read',
  'dex:write',
  'dns_analytics:read',
  'dns_records:edit',
  'dns_records:read',
  'dns_settings:read',
  'firstpartytags:write',
  'images:read',
  'images:write',
  'lb:edit',
  'lb:read',
  'logpush:read',
  'logpush:write',
  'mcp_portals:read',
  'mcp_portals:write',
  'notebook-examples:read',
  'notification:read',
  'notification:write',
  'pages:read',
  'pages:write',
  'pipelines:read',
  'pipelines:setup',
  'pipelines:write',
  'query_cache:write',
  'queues:write',
  'r2_catalog:write',
  'radar:read',
  'rag:read',
  'rag:write',
  'registrar:read',
  'registrar:write',
  'secrets_store:read',
  'secrets_store:write',
  'sso-connector:read',
  'sso-connector:write',
  'ssl_certs:write',
  'teams:pii',
  'teams:read',
  'teams:secure_location',
  'teams:write',
  'url_scanner:read',
  'url_scanner:write',
  'vectorize:write',
  'workers:read',
  'workers:write',
  'workers_builds:read',
  'workers_builds:write',
  'workers_deployments:read',
  'workers_kv:write',
  'workers_observability:read',
  'workers_observability:write',
  'workers_observability_telemetry:write',
  'workers_routes:write',
  'workers_scripts:write',
  'workers_tail:read',
  'zone:read',
] as const;

/** Timeout for OAuth flow (2 minutes) */
export const LOGIN_TIMEOUT_MS = 120000;
