import { readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { Cloudflare } from '@cloudflare/sdk';
import { getValidToken as getOAuthToken, loadApiToken as loadStoredApiToken } from './oauth/index.js';
import { getDefaultHeaders } from './request-headers.js';

// Re-export getAccountId from context (it now handles all resolution)
export { getAccountId, getZoneId } from './context.js';
// Re-export OAuth functions for auth commands
export {
  getConfigPath,
  getValidToken,
  isLoggedIn,
  isOAuthLoggedIn,
  loadApiToken,
  loadTokens,
  login,
  logout,
  type StoredTokens,
  saveApiToken,
} from './oauth/index.js';

/** Default timeout for API calls (30 seconds) */
const API_TIMEOUT = 30000;

const WRANGLER_CONFIG_PATH = join(homedir(), '.wrangler', 'config', 'default.toml');

/** Regex to match wrangler's oauth_token in TOML config */
const WRANGLER_TOKEN_RE = /oauth_token\s*=\s*["']([^"']+)["']/;

/**
 * Check if wrangler has a stored OAuth token.
 */
export function hasWranglerToken(): boolean {
  try {
    const content = readFileSync(WRANGLER_CONFIG_PATH, 'utf-8');
    return WRANGLER_TOKEN_RE.test(content);
  } catch {
    return false;
  }
}

/**
 * Get the authentication token for Cloudflare API.
 *
 * Checks in order:
 * 1. --api-token CLI flag (passed via resolvedApiToken)
 * 2. CLOUDFLARE_API_TOKEN environment variable
 * 3. CF CLI's API token from ~/.cf/config.toml (via cf auth login --token)
 * 4. CF CLI's OAuth token from ~/.cf/config.toml
 * 5. Wrangler's OAuth token from ~/.wrangler/config/default.toml
 *
 * @throws Error if no authentication token is found
 */

/** Token resolved from --api-token flag. Set by command handlers before calling getAuthToken(). */
let resolvedApiToken: string | undefined;

/** Set the API token from a --api-token CLI flag. Called by the yargs middleware. */
export function setApiTokenFromFlag(token: string | undefined): void {
  resolvedApiToken = token;
}

export async function getAuthToken(): Promise<string> {
  // Check --api-token flag first (highest priority)
  if (resolvedApiToken) {
    return resolvedApiToken;
  }

  // Check environment variable
  const envToken = process.env.CLOUDFLARE_API_TOKEN;
  if (envToken) {
    return envToken;
  }

  // Check CF CLI's stored API token (from --token flag)
  const apiToken = loadStoredApiToken();
  if (apiToken) {
    return apiToken;
  }

  // Check CF CLI's own OAuth tokens
  const cfToken = await getOAuthToken();
  if (cfToken) {
    return cfToken;
  }

  // Fall back to wrangler's OAuth token
  try {
    const content = readFileSync(WRANGLER_CONFIG_PATH, 'utf-8');
    const match = content.match(WRANGLER_TOKEN_RE);
    if (match?.[1]) {
      return match[1];
    }
  } catch {
    // File doesn't exist or isn't readable - fall through to error
  }

  throw new Error(
    `No authentication token found.

Please set one of the following:
  1. Pass --api-token <token> to any command
  2. Set the CLOUDFLARE_API_TOKEN environment variable
  3. Run 'cf auth login --token <token>' to save an API token
  4. Run 'cf auth login' to authenticate via OAuth
  5. Run 'wrangler login' to authenticate via Wrangler

For API tokens, visit: https://dash.cloudflare.com/profile/api-tokens`,
  );
}

/**
 * Create a Cloudflare API client with standard configuration.
 *
 * @returns Configured Cloudflare client with timeout
 */
export async function createClient(): Promise<Cloudflare> {
  return new Cloudflare({
    apiToken: await getAuthToken(),
    timeout: API_TIMEOUT,
    defaultHeaders: getDefaultHeaders(),
  });
}
