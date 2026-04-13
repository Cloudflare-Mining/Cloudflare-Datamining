/**
 * Token storage and management
 *
 * Stores OAuth tokens in a TOML file at ~/.cf/config.toml
 * (separate from wrangler to avoid conflicts)
 */
import {
  chmodSync,
  closeSync,
  existsSync,
  mkdirSync,
  openSync,
  readFileSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

/** Token storage location */
const CONFIG_DIR = join(homedir(), '.cf');
const CONFIG_FILE = join(CONFIG_DIR, 'config.toml');
const LOCK_FILE = join(CONFIG_DIR, 'config.lock');

/** Lock timeout in milliseconds */
const LOCK_TIMEOUT_MS = 10000;
/** Lock retry interval in milliseconds */
const LOCK_RETRY_MS = 100;

/**
 * Stored token data
 */
export interface StoredTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: string; // ISO 8601 date string
  scopes: string[];
}

/**
 * Token response from OAuth server
 */
export interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number; // seconds
  scope: string;
  token_type: string;
}

/**
 * Ensure config directory exists
 */
function ensureConfigDir(): void {
  if (!existsSync(CONFIG_DIR)) {
    mkdirSync(CONFIG_DIR, { recursive: true, mode: 0o700 });
  }
}

/**
 * Acquire a file lock for token operations
 * Uses a simple lock file approach with timeout
 */
export async function acquireLock(): Promise<() => void> {
  ensureConfigDir();
  const startTime = Date.now();

  while (Date.now() - startTime < LOCK_TIMEOUT_MS) {
    try {
      // Try to create lock file exclusively (wx flag = write + exclusive)
      const fd = openSync(LOCK_FILE, 'wx');
      closeSync(fd);

      // Return release function
      return () => {
        try {
          if (existsSync(LOCK_FILE)) {
            unlinkSync(LOCK_FILE);
          }
        } catch {
          // Ignore errors when releasing lock
        }
      };
    } catch (error) {
      // Lock file exists, check if it's stale (older than timeout)
      if ((error as NodeJS.ErrnoException).code === 'EEXIST') {
        try {
          const lockStat = statSync(LOCK_FILE);
          // If lock is very old, it might be stale - try to remove it
          if (Date.now() - lockStat.mtimeMs > LOCK_TIMEOUT_MS * 2) {
            unlinkSync(LOCK_FILE);
            continue; // Try again immediately
          }
        } catch {
          // Lock file may have been removed by another process - try again
          continue;
        }
      }
      // Wait before retrying
      await new Promise((resolve) => setTimeout(resolve, LOCK_RETRY_MS));
    }
  }

  throw new Error('Failed to acquire token lock - another process may be refreshing tokens');
}

/**
 * Parse stored TOML config
 */
function parseConfig(content: string): StoredTokens | null {
  try {
    const accessToken = content.match(/access_token\s*=\s*"([^"]+)"/)?.[1];
    const refreshToken = content.match(/refresh_token\s*=\s*"([^"]+)"/)?.[1];
    const expiresAt = content.match(/expires_at\s*=\s*"([^"]+)"/)?.[1];
    const scopesMatch = content.match(/scopes\s*=\s*\[([^\]]+)\]/)?.[1];

    if (!accessToken || !refreshToken || !expiresAt) {
      return null;
    }

    const scopes = scopesMatch ? scopesMatch.split(',').map((s) => s.trim().replace(/"/g, '')) : [];

    return { accessToken, refreshToken, expiresAt, scopes };
  } catch {
    return null;
  }
}

/**
 * Format tokens as TOML
 */
function formatConfig(tokens: StoredTokens): string {
  const scopes = tokens.scopes.map((s) => `"${s}"`).join(', ');
  return `# CF CLI OAuth Configuration
# This file is auto-generated. Do not edit manually.

access_token = "${tokens.accessToken}"
refresh_token = "${tokens.refreshToken}"
expires_at = "${tokens.expiresAt}"
scopes = [${scopes}]
`;
}

/**
 * Load stored tokens from config file
 */
export function loadTokens(): StoredTokens | null {
  try {
    if (!existsSync(CONFIG_FILE)) {
      return null;
    }
    const content = readFileSync(CONFIG_FILE, 'utf-8');
    return parseConfig(content);
  } catch {
    return null;
  }
}

/**
 * Save tokens to config file
 */
export function saveTokens(tokens: StoredTokens): void {
  ensureConfigDir();
  const content = formatConfig(tokens);
  writeFileSync(CONFIG_FILE, content, { mode: 0o600 });
  // Explicitly set permissions to handle existing files (mode only applies to new files)
  chmodSync(CONFIG_FILE, 0o600);
}

/**
 * Delete stored tokens
 */
export function deleteTokens(): void {
  try {
    if (existsSync(CONFIG_FILE)) {
      unlinkSync(CONFIG_FILE);
    }
  } catch {
    // Ignore errors
  }
}

/**
 * Convert token response to stored format
 */
export function tokenResponseToStored(response: TokenResponse): StoredTokens {
  const expiresAt = new Date(Date.now() + response.expires_in * 1000).toISOString();
  const scopes = response.scope ? response.scope.split(' ') : [];

  return {
    accessToken: response.access_token,
    refreshToken: response.refresh_token,
    expiresAt,
    scopes,
  };
}

/**
 * Check if access token is expired (with 5 minute buffer)
 */
export function isTokenExpired(tokens: StoredTokens): boolean {
  const expiresAt = new Date(tokens.expiresAt);
  const bufferMs = 5 * 60 * 1000; // 5 minutes
  return Date.now() >= expiresAt.getTime() - bufferMs;
}

/**
 * Get the config file path (for display purposes)
 */
export function getConfigPath(): string {
  return CONFIG_FILE;
}

/**
 * Save a simple API token (not OAuth)
 * This creates a minimal config that getValidToken can use
 */
export function saveApiToken(token: string): void {
  ensureConfigDir();
  // Store as an "API token" with far-future expiry so it's always considered valid
  const content = `# CF CLI API Token Configuration
# This file is auto-generated. Do not edit manually.

api_token = "${token}"
`;
  writeFileSync(CONFIG_FILE, content, { mode: 0o600 });
  chmodSync(CONFIG_FILE, 0o600);
}

/**
 * Load API token from config file (if stored as api_token)
 */
export function loadApiToken(): string | null {
  try {
    if (!existsSync(CONFIG_FILE)) {
      return null;
    }
    const content = readFileSync(CONFIG_FILE, 'utf-8');
    const match = content.match(/api_token\s*=\s*"([^"]+)"/);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}
