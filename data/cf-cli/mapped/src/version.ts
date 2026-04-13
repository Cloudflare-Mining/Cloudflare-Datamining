/**
 * Single source of truth for the CLI version at runtime.
 *
 * At build time (tsup/esbuild), `__CLI_VERSION__` is replaced with the
 * literal version string from package.json via the `define` option in
 * tsup.config.ts. No manual syncing required.
 *
 * During development (`tsx src/index.ts`), the sentinel is never replaced,
 * so we detect that and fall back to reading package.json at runtime.
 */

import { createRequire } from 'node:module';

declare const __CLI_VERSION__: string;

function resolveVersion(): string {
  // tsup/esbuild replaces __CLI_VERSION__ with a string literal at build time.
  // In dev mode (tsx), it remains a ReferenceError, so we catch and fall back.
  try {
    if (typeof __CLI_VERSION__ === 'string') {
      return __CLI_VERSION__;
    }
  } catch {
    // not defined — dev mode
  }

  // Dev fallback: read from package.json via createRequire
  try {
    const require = createRequire(import.meta.url);
    const pkg: unknown = require('../package.json');
    const v =
      typeof pkg === 'object' && pkg !== null && 'version' in pkg
        ? (pkg as Record<string, unknown>).version
        : undefined;
    return typeof v === 'string' ? v : '0.0.0-dev';
  } catch {
    return '0.0.0-dev';
  }
}

export const VERSION = resolveVersion();
