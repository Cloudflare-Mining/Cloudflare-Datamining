/**
 * OAuth authentication for CF CLI
 *
 * Implements OAuth 2.0 Authorization Code flow with PKCE
 */
import { exec } from 'node:child_process';
import { platform } from 'node:os';
import { getDefaultHeaders } from '../request-headers.js';
import { CLIENT_ID, getCallbackUrl, LOGIN_TIMEOUT_MS, OAUTH_ENDPOINTS, SCOPES } from './config.js';
import { generatePKCE } from './pkce.js';
import { findAvailablePort, startCallbackServer } from './server.js';
import {
  acquireLock,
  deleteTokens,
  getConfigPath,
  isTokenExpired,
  loadApiToken,
  loadTokens,
  type StoredTokens,
  saveApiToken,
  saveTokens,
  type TokenResponse,
  tokenResponseToStored,
} from './tokens.js';

export { getConfigPath, loadApiToken, loadTokens, saveApiToken, type StoredTokens };

/**
 * Open a URL in the default browser
 */
function openBrowser(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const os = platform();
    let command: string;

    switch (os) {
      case 'darwin':
        command = `open "${url}"`;
        break;
      case 'win32':
        command = `start "" "${url}"`;
        break;
      default:
        command = `xdg-open "${url}"`;
    }

    exec(command, (error) => {
      if (error) {
        reject(new Error(`Failed to open browser: ${error.message}`));
      } else {
        resolve();
      }
    });
  });
}

/**
 * Build the authorization URL
 */
function buildAuthUrl(codeChallenge: string, state: string, callbackUrl: string): string {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: callbackUrl,
    scope: SCOPES.join(' '),
    state,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
  });

  return `${OAUTH_ENDPOINTS.authorize}?${params.toString()}`;
}

/**
 * Exchange authorization code for tokens
 */
async function exchangeCodeForTokens(code: string, codeVerifier: string, callbackUrl: string): Promise<TokenResponse> {
  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: callbackUrl,
    client_id: CLIENT_ID,
    code_verifier: codeVerifier,
  });

  const response = await fetch(OAUTH_ENDPOINTS.token, {
    method: 'POST',
    body: params.toString(),
    headers: {
      ...getDefaultHeaders(),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    signal: AbortSignal.timeout(10000), // 10 second timeout
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to exchange code for tokens: ${error}`);
  }

  return response.json() as Promise<TokenResponse>;
}

/**
 * Refresh an access token using a refresh token
 */
async function refreshAccessToken(refreshToken: string): Promise<TokenResponse> {
  const params = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: CLIENT_ID,
  });

  const response = await fetch(OAUTH_ENDPOINTS.token, {
    method: 'POST',
    body: params.toString(),
    headers: {
      ...getDefaultHeaders(),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    signal: AbortSignal.timeout(10000), // 10 second timeout
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to refresh token: ${error}`);
  }

  return response.json() as Promise<TokenResponse>;
}

/**
 * Revoke a refresh token on the server.
 * Returns true if revocation succeeded, false otherwise.
 * Always resolves (never throws) so local cleanup can proceed.
 */
async function revokeToken(refreshToken: string): Promise<boolean> {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    token_type_hint: 'refresh_token',
    token: refreshToken,
  });

  try {
    const response = await fetch(OAUTH_ENDPOINTS.revoke, {
      method: 'POST',
      body: params.toString(),
      headers: {
        ...getDefaultHeaders(),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Perform OAuth login flow
 *
 * Opens browser for user to authenticate, then exchanges code for tokens
 */
export async function login(): Promise<StoredTokens> {
  // Find an available port for the callback server
  const port = await findAvailablePort();
  const callbackUrl = getCallbackUrl(port);

  // Generate PKCE codes
  const { codeVerifier, codeChallenge, state } = generatePKCE();

  // Build authorization URL
  const authUrl = buildAuthUrl(codeChallenge, state, callbackUrl);

  // Start callback server before opening browser
  const serverPromise = startCallbackServer(state, port, LOGIN_TIMEOUT_MS);

  // Open browser
  console.log('Opening browser for authentication...');
  console.log(`If the browser doesn't open, visit: ${authUrl}\n`);

  try {
    await openBrowser(authUrl);
  } catch (error) {
    console.log('Could not open browser automatically.');
    console.log(`Please visit: ${authUrl}\n`);
  }

  // Wait for callback
  console.log('Waiting for authentication...');
  const { code } = await serverPromise;

  // Exchange code for tokens
  console.log('Exchanging code for tokens...');
  const tokenResponse = await exchangeCodeForTokens(code, codeVerifier, callbackUrl);

  // Store tokens
  const tokens = tokenResponseToStored(tokenResponse);
  saveTokens(tokens);

  return tokens;
}

/**
 * Logout - revoke tokens and delete local storage.
 * Returns true if server-side revocation succeeded, false if it failed or was skipped.
 * Local tokens are always deleted regardless of revocation result.
 */
export async function logout(): Promise<boolean> {
  const tokens = loadTokens();
  let revoked = false;

  if (tokens) {
    // Revoke refresh token on server
    revoked = await revokeToken(tokens.refreshToken);
  }

  // Always delete local tokens regardless of revocation result
  deleteTokens();
  return revoked;
}

/**
 * Get a valid access token, refreshing if necessary
 *
 * Uses file locking to prevent race conditions when multiple
 * CLI processes try to refresh tokens simultaneously.
 *
 * @returns Access token or null if not logged in
 */
export async function getValidToken(): Promise<string | null> {
  const tokens = loadTokens();

  if (!tokens) {
    return null;
  }

  // Check if token needs refresh
  if (isTokenExpired(tokens)) {
    // Acquire lock before refreshing to prevent race conditions
    let releaseLock: (() => void) | null = null;
    try {
      releaseLock = await acquireLock();

      // Re-check tokens after acquiring lock - another process may have refreshed
      const currentTokens = loadTokens();
      if (currentTokens && !isTokenExpired(currentTokens)) {
        return currentTokens.accessToken;
      }

      const newTokens = await refreshAccessToken(tokens.refreshToken);
      const stored = tokenResponseToStored(newTokens);
      saveTokens(stored);
      return stored.accessToken;
    } catch (error) {
      // Only delete tokens for authentication errors (invalid_grant, etc.)
      // Don't delete on transient network errors
      const errorMessage = error instanceof Error ? error.message : String(error);
      const isAuthError =
        errorMessage.includes('invalid_grant') ||
        errorMessage.includes('invalid_token') ||
        errorMessage.includes('unauthorized') ||
        errorMessage.includes('401');

      if (isAuthError) {
        deleteTokens();
      }
      return null;
    } finally {
      if (releaseLock) {
        releaseLock();
      }
    }
  }

  return tokens.accessToken;
}

/**
 * Check if user is logged in via OAuth tokens
 */
export function isOAuthLoggedIn(): boolean {
  return loadTokens() !== null;
}

/**
 * Check if user has any stored credentials (OAuth or API token)
 */
export function isLoggedIn(): boolean {
  return loadTokens() !== null || loadApiToken() !== null;
}
