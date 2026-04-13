/**
 * Theme module - Cloudflare brand colors and TTY detection.
 *
 * Design principles (Charm.sh inspired):
 * - Semantic colors for meaning, not decoration
 * - Respect NO_COLOR and CI environments
 * - Graceful degradation when colors unavailable
 */

import chalk from 'chalk';

/**
 * Cloudflare brand color palette.
 * Based on official brand guidelines with Charm-style soft variants.
 */
export const colors = {
  // Brand colors
  orange: '#F6821F',
  orangeLight: '#FBAD41',
  orangeDark: '#C45A00',
  shadowLight: '#8B4513',

  // Semantic colors (soft, Charm-style)
  success: '#50FA7B',
  error: '#FF5555',
  warning: '#FFB86C',
  info: '#8BE9FD',

  // Neutral colors
  muted: '#6272A4',
  dim: '#44475A',
  text: '#F8F8F2',
  textDim: '#BFBFBF',
} as const;

/**
 * Check if colors should be enabled.
 * Respects NO_COLOR, FORCE_COLOR, and CI environments.
 */
export function supportsColor(): boolean {
  // NO_COLOR takes precedence (https://no-color.org/)
  if (process.env.NO_COLOR !== undefined) {
    return false;
  }

  // FORCE_COLOR overrides detection
  if (process.env.FORCE_COLOR !== undefined) {
    return process.env.FORCE_COLOR !== '0';
  }

  // Check if stdout is a TTY (not stdin — color depends on output capability)
  return process.stdout.isTTY === true;
}

/**
 * A no-op chalk implementation that returns strings unchanged.
 * Used when colors are disabled.
 *
 * Chalk's API is:
 * - chalk.red('text') → method call that returns colored string
 * - chalk.hex('#FF5555')('text') → method that returns another method
 * - chalk.red.bold('text') → chained properties
 *
 * Our no-op version must handle all these patterns.
 */
function createNoOpChalk(): typeof chalk {
  // The final formatter function - when called with text, returns text unchanged
  const identityFn = (text: unknown): string => String(text ?? '');

  // Create a chainable proxy that acts as both function and object
  const createChainable = (): typeof chalk => {
    const handler: ProxyHandler<typeof identityFn> = {
      // When accessed as property (chalk.red, chalk.bold)
      get: (_target, _prop) => createChainable(),
      // When called as function - this is the key fix:
      // Always return another chainable function (for chalk.hex('#color')),
      // which when called again will return the text
      apply: (_target, _thisArg, args) => {
        // If the first arg looks like text to format (string), return it
        // Otherwise return another chainable for method chaining like hex('#color')
        const firstArg = args[0];
        if (typeof firstArg === 'string' && !firstArg.startsWith('#') && !firstArg.startsWith('rgb')) {
          return firstArg;
        }
        // Return a chainable that will process the next call
        return createChainable();
      },
    };

    return new Proxy(identityFn, handler) as unknown as typeof chalk;
  };

  return createChainable();
}

const noColorChalk = createNoOpChalk();

/**
 * Get a chalk instance configured for current environment.
 * Returns a no-color instance if colors are disabled.
 */
export function getChalk(): typeof chalk {
  if (!supportsColor()) {
    return noColorChalk;
  }
  return chalk;
}

/**
 * Themed chalk functions for consistent styling.
 * Use these instead of raw chalk for brand consistency.
 */
export const theme = {
  // Brand
  brand: (text: string) => getChalk().hex(colors.orange)(text),
  brandBold: (text: string) => getChalk().hex(colors.orange).bold(text),
  brandLight: (text: string) => getChalk().hex(colors.orangeLight)(text),

  // Semantic
  success: (text: string) => getChalk().hex(colors.success)(text),
  error: (text: string) => getChalk().hex(colors.error)(text),
  warning: (text: string) => getChalk().hex(colors.warning)(text),
  info: (text: string) => getChalk().hex(colors.info)(text),

  // Text styles
  bold: (text: string) => getChalk().bold(text),
  dim: (text: string) => getChalk().dim(text),
  muted: (text: string) => getChalk().hex(colors.muted)(text),
  code: (text: string) => getChalk().cyan(text),

  // Combined styles
  successBold: (text: string) => getChalk().hex(colors.success).bold(text),
  errorBold: (text: string) => getChalk().hex(colors.error).bold(text),
  warningBold: (text: string) => getChalk().hex(colors.warning).bold(text),
  infoBold: (text: string) => getChalk().hex(colors.info).bold(text),
} as const;

/**
 * Unicode symbols for CLI output.
 * Uses figures package for cross-platform compatibility.
 */
import figures from 'figures';

export const symbols = {
  success: figures.tick,
  error: figures.cross,
  warning: figures.warning,
  info: figures.info,
  cloud: '☁',
  arrow: figures.arrowRight,
  bullet: figures.bullet,
} as const;
