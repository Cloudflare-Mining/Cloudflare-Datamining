/**
 * Context Management System
 *
 * Provides resolution of default values for account-id and zone with priority:
 * 1. CLI flags (--account-id, --zone/-z)
 * 2. Environment variables (CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_ZONE_ID)
 * 3. Project file (.cfrc walked up from cwd)
 * 4. User config (~/.config/cf/config.json)
 */
import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import type { Cloudflare } from '@cloudflare/sdk';
import { getConfigFile, loadConfig, saveConfig } from './config.js';
import { type AccountOption, isInteractive, selectAccount } from './prompt.js';
import { isId, isValidDomainName } from './resolve.js';

/**
 * Source of a context value
 */
export type ContextSourceType = 'flag' | 'env' | 'project' | 'config';

/**
 * A resolved context value with its source
 */
export interface ContextSource {
  /** The resolved value */
  value: string;
  /** Where the value came from */
  source: ContextSourceType;
  /** File path for project/config sources */
  path?: string;
  /** Human-readable name (account name, zone domain) */
  name?: string;
}

/**
 * Full resolved context
 */
export interface ResolvedContext {
  accountId?: ContextSource;
  zone?: ContextSource;
}

/**
 * Project config file structure (.cfrc)
 */
export interface ProjectConfig {
  accountId?: string;
  zone?: string;
}

/** Project config filename */
const PROJECT_CONFIG_NAME = '.cfrc';

/**
 * Find and load .cfrc by walking up from startDir
 *
 * @param startDir - Directory to start searching from (defaults to cwd)
 * @returns Config and path, or null if not found
 */
export function findProjectConfig(startDir?: string): { config: ProjectConfig; path: string } | null {
  let dir = startDir || process.cwd();
  const root = dirname(dir);

  // Walk up directory tree
  while (dir !== root) {
    const configPath = join(dir, PROJECT_CONFIG_NAME);
    if (existsSync(configPath)) {
      try {
        const content = readFileSync(configPath, 'utf-8');
        // Strip comments for JSONC support (simple implementation)
        const jsonContent = content.replace(/^\s*\/\/.*$/gm, '');
        const config = JSON.parse(jsonContent) as ProjectConfig;
        return { config, path: configPath };
      } catch {
        // Invalid JSON, skip this file
      }
    }
    dir = dirname(dir);
  }

  // Check root directory too
  const rootConfigPath = join(dir, PROJECT_CONFIG_NAME);
  if (existsSync(rootConfigPath)) {
    try {
      const content = readFileSync(rootConfigPath, 'utf-8');
      const jsonContent = content.replace(/^\s*\/\/.*$/gm, '');
      const config = JSON.parse(jsonContent) as ProjectConfig;
      return { config, path: rootConfigPath };
    } catch {
      // Invalid JSON
    }
  }

  return null;
}

/**
 * Save project config to .cfrc
 *
 * @param config - Config to save
 * @param dir - Directory to save in (defaults to cwd)
 */
export function saveProjectConfig(config: ProjectConfig, dir?: string): void {
  const configPath = join(dir || process.cwd(), PROJECT_CONFIG_NAME);
  const content = JSON.stringify(config, null, 2);
  writeFileSync(configPath, content + '\n', { mode: 0o600 });
}

/**
 * Delete project config file
 *
 * @param dir - Directory containing .cfrc (defaults to cwd)
 */
export function deleteProjectConfig(dir?: string): boolean {
  const configPath = join(dir || process.cwd(), PROJECT_CONFIG_NAME);
  if (existsSync(configPath)) {
    unlinkSync(configPath);
    return true;
  }
  return false;
}

/**
 * Get full context with all resolved values and their sources
 *
 * @param argv - CLI arguments (accountId, zone)
 * @returns Resolved context with sources
 */
export async function getContext(argv?: { accountId?: string; zone?: string }): Promise<ResolvedContext> {
  const context: ResolvedContext = {};

  // Resolve account ID
  const accountIdResult = resolveValue('accountId', argv?.accountId, 'CLOUDFLARE_ACCOUNT_ID');
  if (accountIdResult) {
    context.accountId = accountIdResult;
  }

  // Resolve zone
  const zoneResult = resolveValue('zone', argv?.zone, 'CLOUDFLARE_ZONE_ID');
  if (zoneResult) {
    context.zone = zoneResult;
  }

  return context;
}

/**
 * Resolve a value from multiple sources with priority
 */
function resolveValue(
  key: 'accountId' | 'zone',
  flagValue: string | undefined,
  envVar: string,
): ContextSource | undefined {
  // 1. CLI flag (highest priority)
  if (flagValue) {
    return { value: flagValue, source: 'flag' };
  }

  // 2. Environment variable
  const envValue = process.env[envVar];
  if (envValue) {
    return { value: envValue, source: 'env' };
  }

  // 3. Project config (.cfrc)
  const projectConfig = findProjectConfig();
  if (projectConfig?.config[key]) {
    return {
      value: projectConfig.config[key]!,
      source: 'project',
      path: projectConfig.path,
    };
  }

  // 4. User config
  const userConfig = loadConfig();
  if (userConfig.defaults?.[key]) {
    return {
      value: userConfig.defaults[key]!,
      source: 'config',
      path: getConfigFile(),
    };
  }

  return undefined;
}

/**
 * Get account ID with priority resolution
 *
 * @param argv - Optional argv containing accountId from --account-id flag
 * @param client - Optional Cloudflare client for account discovery fallback
 * @throws Error if no account ID is found
 */
export async function getAccountId(argv?: { accountId?: string }, client?: Cloudflare): Promise<string> {
  const result = resolveValue('accountId', argv?.accountId, 'CLOUDFLARE_ACCOUNT_ID');

  if (result) {
    return result.value;
  }

  // Fall through to account discovery if we have an authenticated client
  if (client) {
    const selected = await discoverAndSelectAccount(client);
    if (selected) {
      return selected;
    }
  }

  throw new Error(
    `No account ID found.

Please provide one of the following:
  1. --account-id flag (or -a)
  2. CLOUDFLARE_ACCOUNT_ID environment variable
  3. Run 'cf context set account-id <id>' to set a default
  4. Create a .cfrc file in your project

You can find your account ID in the Cloudflare dashboard URL:
  https://dash.cloudflare.com/<account-id>/...`,
  );
}

/**
 * Fetch available accounts for the current auth token, then auto-select or
 * prompt the user to pick one. Persists the selection to user config.
 *
 * @returns The selected account ID, or undefined if selection was not possible
 */
async function discoverAndSelectAccount(client: Cloudflare): Promise<string | undefined> {
  let accounts: AccountOption[];
  try {
    accounts = await fetchAccounts(client);
  } catch {
    return undefined;
  }

  if (accounts.length === 0) {
    return undefined;
  }

  if (accounts.length === 1) {
    const account = accounts[0]!;
    const { displayName } = await setDefault('accountId', account.id, 'user', client);
    console.error(`Using account: ${displayName}`);
    return account.id;
  }

  if (!isInteractive()) {
    // Show full account IDs so agents can self-remediate by passing --account-id
    // without needing a separate `cf accounts list` round-trip.
    const accountList = accounts.map((a) => `  ${a.id}  ${a.name}`).join('\n');
    throw new Error(
      `Multiple accounts available but running non-interactively.

Available accounts:
${accountList}

Set one with --account-id, CLOUDFLARE_ACCOUNT_ID, or 'cf context set account-id'.`,
    );
  }

  const selected = await selectAccount(accounts);
  if (!selected) {
    // User cancelled (ctrl+c)
    process.exit(130);
  }

  const { displayName } = await setDefault('accountId', selected.id, 'user', client);
  console.error(`Using account: ${displayName}`);
  return selected.id;
}

/**
 * Get zone ID, resolving name to ID if needed
 *
 * @param argv - CLI arguments (zone from --zone flag, zoneId from positional)
 * @param client - Cloudflare SDK client (required if zone is a name)
 * @param options - Options (quiet suppresses "Using zone" message)
 * @throws Error if no zone is found
 */
export async function getZoneId(
  argv?: { zone?: string; zoneId?: string },
  client?: Cloudflare,
  options?: { quiet?: boolean },
): Promise<string> {
  // Explicit positional argument takes precedence
  if (argv?.zoneId) {
    return resolveZoneValue(argv.zoneId, client);
  }

  // Then check context sources
  const result = resolveValue('zone', argv?.zone, 'CLOUDFLARE_ZONE_ID');

  if (result) {
    // Show feedback when using context (not explicit arg)
    if (!options?.quiet && result.source !== 'flag') {
      const sourceDesc = getSourceDescription(result);
      console.error(`Using zone: ${result.value} (from ${sourceDesc})`);
    }
    return resolveZoneValue(result.value, client);
  }

  throw new Error(
    `No zone specified.

Please provide one of the following:
  1. Zone as a positional argument: cf dns records list <zone>
  2. --zone flag (or -z): cf dns records list --zone example.com
  3. CLOUDFLARE_ZONE_ID environment variable
  4. Run 'cf context set zone <zone>' to set a default
  5. Create a .cfrc file in your project with {"zone": "example.com"}`,
  );
}

/**
 * Resolve a zone value (name or ID) to an ID
 */
async function resolveZoneValue(value: string, client?: Cloudflare): Promise<string> {
  // If it looks like an ID, return as-is
  if (isId(value)) {
    return value;
  }

  // Otherwise it's a domain name, need to look up
  if (!client) {
    // Can't resolve without client, assume it's valid
    return value;
  }

  // Import dynamically to avoid circular dependency
  const { resolveZoneId } = await import('./resolve.js');
  const accountId = await getAccountId();
  return resolveZoneId(client, accountId, value);
}

/**
 * Get human-readable description of source
 */
function getSourceDescription(source: ContextSource): string {
  switch (source.source) {
    case 'flag':
      return '--zone flag';
    case 'env':
      return 'CLOUDFLARE_ZONE_ID';
    case 'project':
      return `.cfrc`;
    case 'config':
      return '~/.config/cf/config.json';
  }
}

/**
 * Set a default value in config
 *
 * @param key - Which default to set
 * @param value - Value to set
 * @param scope - 'user' for ~/.config/cf/config.json, 'project' for .cfrc
 * @param client - Cloudflare client for validation
 * @returns Resolved value and display name
 */
export async function setDefault(
  key: 'accountId' | 'zone',
  value: string,
  scope: 'user' | 'project',
  client: Cloudflare,
): Promise<{ resolvedValue: string; displayName: string }> {
  let resolvedValue = value;
  let displayName = value;

  if (key === 'accountId') {
    // Validate and potentially resolve account
    const { id, name } = await validateAndResolveAccount(value, client);
    resolvedValue = id;
    displayName = name ? `${id.slice(0, 12)}... (${name})` : id;
  } else if (key === 'zone') {
    // Validate zone exists
    const zone = await validateZone(value, client);
    resolvedValue = value; // Store as provided (ID or name)
    displayName = zone.name;
  }

  if (scope === 'project') {
    // Save to .cfrc
    const existing = findProjectConfig();
    const config: ProjectConfig = existing?.config || {};
    config[key] = resolvedValue;
    saveProjectConfig(config);
  } else {
    // Save to user config
    const config = loadConfig();
    if (!config.defaults) {
      config.defaults = {};
    }
    config.defaults[key] = resolvedValue;
    saveConfig(config);
  }

  return { resolvedValue, displayName };
}

/**
 * Clear a default value
 *
 * @param key - Which default to clear (or 'all' for everything)
 * @param scope - 'user' or 'project'
 */
export function clearDefault(key: 'accountId' | 'zone' | 'all', scope: 'user' | 'project'): void {
  if (scope === 'project') {
    if (key === 'all') {
      deleteProjectConfig();
    } else {
      const existing = findProjectConfig();
      if (existing) {
        delete existing.config[key];
        if (Object.keys(existing.config).length === 0) {
          deleteProjectConfig(dirname(existing.path));
        } else {
          saveProjectConfig(existing.config, dirname(existing.path));
        }
      }
    }
  } else {
    const config = loadConfig();
    if (config.defaults) {
      if (key === 'all') {
        delete config.defaults;
      } else {
        delete config.defaults[key];
        if (Object.keys(config.defaults).length === 0) {
          delete config.defaults;
        }
      }
      saveConfig(config);
    }
  }
}

interface Account {
  id: string;
  name: string;
}

/**
 * Fetch accounts using direct API call (no accounts resource in SDK yet)
 */
export async function fetchAccounts(client: Cloudflare): Promise<AccountOption[]> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (await (client as any).get('/accounts')) as Account[];
}

/**
 * Validate account exists and resolve name to ID if needed
 */
async function validateAndResolveAccount(value: string, client: Cloudflare): Promise<{ id: string; name?: string }> {
  const accounts = await fetchAccounts(client);

  // Try to find by ID first
  const byId = accounts.find((a: Account) => a.id === value);
  if (byId) {
    return { id: byId.id, name: byId.name };
  }

  // Try to find by name
  const byName = accounts.find((a: Account) => a.name.toLowerCase() === value.toLowerCase());
  if (byName) {
    return { id: byName.id, name: byName.name };
  }

  // If value looks like an ID but wasn't found, it might be valid but not in list
  if (isId(value)) {
    return { id: value };
  }

  throw new Error(
    `Account not found: "${value}"

Available accounts:
${accounts.map((a: Account) => `  ${a.id.slice(0, 12)}...  ${a.name}`).join('\n')}`,
  );
}

/**
 * Validate zone exists
 */
async function validateZone(value: string, client: Cloudflare): Promise<{ id: string; name: string }> {
  interface Zone {
    id: string;
    name: string;
  }

  // Fetch zones
  const zones = (await client.zones.list()) as Zone[];

  // Try to find by ID
  const byId = zones.find((z: Zone) => z.id === value);
  if (byId) {
    return { id: byId.id, name: byId.name };
  }

  // Try to find by name
  const byName = zones.find((z: Zone) => z.name.toLowerCase() === value.toLowerCase());
  if (byName) {
    return { id: byName.id, name: byName.name };
  }

  // If value looks like a valid domain but wasn't found
  if (isValidDomainName(value)) {
    throw new Error(
      `Zone not found: "${value}"

This zone either doesn't exist or you don't have access to it.
Run 'cf zones list' to see available zones.`,
    );
  }

  throw new Error(
    `Invalid zone: "${value}"

Please provide a zone ID or domain name.
Run 'cf zones list' to see available zones.`,
  );
}

/**
 * Get the path where project config would be saved
 */
export function getProjectConfigPath(): string {
  return join(process.cwd(), PROJECT_CONFIG_NAME);
}
