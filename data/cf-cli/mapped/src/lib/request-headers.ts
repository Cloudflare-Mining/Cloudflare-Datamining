import { buildUserAgent } from '@cloudflare/sdk';
import { VERSION } from '../version.js';
import { isCI, isInteractive } from './prompt.js';

/**
 * CLI execution mode, sent as the `X-CF-CLI-Mode` header on every request.
 *
 *   interactive     — TTY attached (human at a terminal)
 *   non-interactive — piped / scripted / no TTY
 *   ci              — running inside a CI system (GitHub Actions, GitLab CI, etc.)
 */
export type CLIMode = 'interactive' | 'non-interactive' | 'ci';

/**
 * Detect the current CLI execution mode.
 */
export function detectCLIMode(): CLIMode {
  // CI detection first — a CI environment is always non-interactive,
  // but we want the more specific label
  if (isCI()) {
    return 'ci';
  }

  return isInteractive() ? 'interactive' : 'non-interactive';
}

/**
 * Build the default headers that every outbound Cloudflare request should carry.
 *
 * Returns:
 *   User-Agent:     cf-cli/{version}
 *   X-CF-CLI-Mode:  interactive | non-interactive | ci
 */
export function getDefaultHeaders(): Record<string, string> {
  return {
    'User-Agent': buildUserAgent(VERSION),
    'X-CF-CLI-Mode': detectCLIMode(),
  };
}
