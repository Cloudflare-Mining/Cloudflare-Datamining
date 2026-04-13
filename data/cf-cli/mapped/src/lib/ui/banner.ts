/**
 * Banner module - ASCII logo and startup display.
 *
 * Provides multiple logo styles for different contexts:
 * - Minimal: Single line with cloud emoji (everyday use)
 * - Compact: Small block logo (help screens)
 * - Full: Large ASCII art with gradient (splash screen)
 */

import gradient from 'gradient-string';
import { colors, getChalk, supportsColor, symbols } from './theme.js';

/** Cloudflare orange gradient for the logo */
const cfGradient = gradient([colors.orange, colors.orangeLight]);

/** Dark orange for shadow effect */
const shadowColor = colors.orangeDark;

/**
 * Full ASCII cloud logo - simple Cloudflare cloud shape.
 */
const FULL_LOGO = [
  '              ▄▄▄▄▄▄▄▄▄▄▄',
  '           ▄████████████████▄',
  '         ▄████████████████████',
  '   ▄▄▄  ██████████████████████',
  ' ▄██████████████████████████████',
  '████████████████████████████████',
  '████████████████████████████████',
].join('\n');

/**
 * Compact cloud logo - smaller footprint for help screens.
 */
const COMPACT_LOGO = [
  '            ▄▄▄▄▄▄▄',
  '         ▄██████████▄',
  '   ▄▄   ██████████████▒░',
  '  █████████████████████▓▒░',
  '  ███▓░░         ░░▒▓▒░░',
  ' ██████████████████▓▒░░',
].join('\n');

/**
 * Apply gradient coloring to the full logo.
 * Colors the cloud body orange and shadow darker.
 * Falls back to plain logo if gradient rendering fails.
 */
function colorizeFullLogo(): string {
  if (!supportsColor()) {
    return FULL_LOGO;
  }

  try {
    const chalk = getChalk();
    const lines = FULL_LOGO.split('\n');

    return lines
      .map((line) => {
        let result = '';
        for (const char of line) {
          if (char === '█' || char === '▄') {
            // Cloud body - gradient orange
            result += cfGradient(char);
          } else if (char === '▓') {
            // Mid-tone - slightly darker orange
            result += chalk.hex(colors.orange)(char);
          } else if (char === '▒') {
            // Shadow - dark orange
            result += chalk.hex(shadowColor)(char);
          } else if (char === '░') {
            // Lightest shadow
            result += chalk.hex(colors.shadowLight)(char);
          } else {
            result += char;
          }
        }
        return result;
      })
      .join('\n');
  } catch {
    // Fallback to plain logo if gradient fails
    return FULL_LOGO;
  }
}

/**
 * Apply gradient coloring to the compact logo.
 * Falls back to plain logo if gradient rendering fails.
 */
function colorizeCompactLogo(): string {
  if (!supportsColor()) {
    return COMPACT_LOGO;
  }

  try {
    const chalk = getChalk();
    const lines = COMPACT_LOGO.split('\n');

    return lines
      .map((line) => {
        let result = '';
        for (const char of line) {
          if (char === '█' || char === '▄') {
            result += cfGradient(char);
          } else if (char === '▓') {
            result += chalk.hex(colors.orange)(char);
          } else if (char === '▒') {
            result += chalk.hex(shadowColor)(char);
          } else if (char === '░') {
            result += chalk.hex(colors.shadowLight)(char);
          } else {
            result += char;
          }
        }
        return result;
      })
      .join('\n');
  } catch {
    // Fallback to plain logo if gradient fails
    return COMPACT_LOGO;
  }
}

/**
 * Create a gradient divider line.
 */
function gradientDivider(width: number = 40): string {
  if (!supportsColor()) {
    return '━'.repeat(width);
  }
  return cfGradient('━'.repeat(width));
}

/**
 * Banner style options.
 */
export type BannerStyle = 'minimal' | 'compact' | 'full';

/**
 * Render the CLI banner.
 *
 * @param version - The CLI version string
 * @param style - Banner style: 'minimal', 'compact', or 'full'
 * @returns Formatted banner string
 */
export function renderBanner(version: string, style: BannerStyle = 'full'): string {
  const chalk = getChalk();
  const versionStr = chalk.dim(`v${version}`);

  switch (style) {
    case 'minimal':
      // Single line: ☁  Cloudflare CLI  v0.1.0
      return `  ${symbols.cloud}  ${chalk.bold('Cloudflare CLI')}  ${versionStr}`;

    case 'compact':
      // Small logo with title beside it
      return [colorizeCompactLogo(), `  ${chalk.bold('Cloudflare CLI')}  ${versionStr}`].join('\n');

    case 'full':
    default:
      // Full logo with gradient dividers
      // Note: Don't use trim() as it strips leading spaces from the logo
      return [
        colorizeFullLogo(),
        '',
        gradientDivider(40),
        `        ${chalk.bold('Cloudflare CLI')}  ${versionStr}`,
        gradientDivider(40),
      ].join('\n');
  }
}

/**
 * Print the banner to stdout.
 *
 * @param version - The CLI version string
 * @param style - Banner style
 */
export function printBanner(version: string, style: BannerStyle = 'full'): void {
  console.log(renderBanner(version, style));
  console.log(); // Extra newline for spacing
}

/**
 * Format a command for display in command lists.
 * Shows "cf" in brand color and subcommand(s) in cyan.
 *
 * @param subcommand - The subcommand path (e.g., "dns", "d1 list", "dns records create")
 * @returns Formatted command string
 */
export function formatCommand(subcommand: string): string {
  const chalk = getChalk();
  if (!supportsColor()) {
    return `cf ${subcommand}`;
  }
  return `${chalk.hex(colors.orange)('cf')} ${chalk.cyan(subcommand)}`;
}
