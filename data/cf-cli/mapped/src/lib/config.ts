/**
 * CLI Configuration Management
 *
 * Stores user preferences in ~/.config/cf/config.json
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

/** Config directory: ~/.config/cf */
const CONFIG_DIR = join(homedir(), '.config', 'cf');

/** Config file path */
const CONFIG_FILE = join(CONFIG_DIR, 'config.json');

/**
 * CLI configuration structure
 */
export interface CLIConfig {
  /** Shell completion settings */
  completions?: {
    /** Whether user has been prompted to install completions */
    prompted?: boolean;
    /** Whether completions are installed */
    installed?: boolean;
    /** Which shell completions are installed for */
    shell?: 'bash' | 'zsh' | 'fish';
    /** Path to installed completion script */
    path?: string;
  };

  /** Default context values */
  defaults?: {
    /** Default Cloudflare account ID */
    accountId?: string;
    /** Default zone (ID or domain name) */
    zone?: string;
  };
}

/**
 * Get the config directory path
 */
export function getConfigDir(): string {
  return CONFIG_DIR;
}

/**
 * Get the config file path
 */
export function getConfigFile(): string {
  return CONFIG_FILE;
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
 * Load configuration from disk
 *
 * @returns Configuration object (empty object if file doesn't exist)
 */
export function loadConfig(): CLIConfig {
  try {
    if (!existsSync(CONFIG_FILE)) {
      return {};
    }
    const content = readFileSync(CONFIG_FILE, 'utf-8');
    return JSON.parse(content) as CLIConfig;
  } catch {
    // If file is corrupted or unreadable, return empty config
    return {};
  }
}

/**
 * Save configuration to disk
 *
 * @param config - Configuration to save
 */
export function saveConfig(config: CLIConfig): void {
  ensureConfigDir();
  const content = JSON.stringify(config, null, 2);
  writeFileSync(CONFIG_FILE, content, { mode: 0o600 });
}

/**
 * Update specific config values (merges with existing)
 *
 * @param updates - Partial config to merge
 */
export function updateConfig(updates: Partial<CLIConfig>): void {
  const current = loadConfig();
  const merged = { ...current, ...updates };

  // Deep merge for nested objects
  if (updates.completions && current.completions) {
    merged.completions = { ...current.completions, ...updates.completions };
  }
  if (updates.defaults && current.defaults) {
    merged.defaults = { ...current.defaults, ...updates.defaults };
  }

  saveConfig(merged);
}

/**
 * Get completions directory path
 */
export function getCompletionsDir(): string {
  return join(CONFIG_DIR, 'completions');
}

/**
 * Ensure completions directory exists
 */
export function ensureCompletionsDir(): void {
  const dir = getCompletionsDir();
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true, mode: 0o700 });
  }
}
