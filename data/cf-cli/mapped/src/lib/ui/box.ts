/**
 * Box module - Boxen wrapper for styled message boxes.
 *
 * Provides consistent box styling for errors, warnings, info, and success messages.
 * Uses rounded borders and semantic colors following Charm.sh aesthetic.
 */

import boxen, { type Options as BoxenOptions } from 'boxen';
import { colors, getChalk, supportsColor } from './theme.js';

/**
 * Box style presets.
 */
type BoxStyle = 'error' | 'warning' | 'success' | 'info' | 'brand';

/**
 * Style configurations for each box type.
 */
const boxStyles: Record<BoxStyle, Partial<BoxenOptions>> = {
  error: {
    borderColor: colors.error,
    borderStyle: 'round',
    padding: 1,
    title: 'Error',
    titleAlignment: 'left',
  },
  warning: {
    borderColor: colors.warning,
    borderStyle: 'round',
    padding: 1,
    title: 'Warning',
    titleAlignment: 'left',
  },
  success: {
    borderColor: colors.success,
    borderStyle: 'round',
    padding: 1,
    title: 'Success',
    titleAlignment: 'left',
  },
  info: {
    borderColor: colors.info,
    borderStyle: 'round',
    padding: 1,
    title: 'Info',
    titleAlignment: 'left',
  },
  brand: {
    borderColor: colors.orange,
    borderStyle: 'round',
    padding: 1,
  },
};

/**
 * Create a styled box around text.
 *
 * @param text - The text content
 * @param style - Box style preset
 * @param options - Additional boxen options (override preset)
 * @returns Formatted box string
 *
 * @example
 * console.log(createBox('Something went wrong!', 'error'));
 */
export function createBox(text: string, style: BoxStyle, options?: Partial<BoxenOptions>): string {
  // If no color support, return plain text with simple borders
  if (!supportsColor()) {
    const title = options?.title ?? boxStyles[style].title;
    const titleLine = title ? `--- ${title} ---\n` : '';
    return `${titleLine}${text}\n${'─'.repeat(40)}`;
  }

  return boxen(text, {
    ...boxStyles[style],
    ...options,
  });
}

/**
 * Create an error box.
 *
 * @param message - Error message
 * @param details - Optional additional details
 * @returns Formatted error box
 */
export function errorBox(message: string, details?: string): string {
  const chalk = getChalk();
  let content = chalk.hex(colors.error)(message);

  if (details) {
    content += '\n\n' + chalk.dim(details);
  }

  return createBox(content, 'error');
}

/**
 * Create a warning box.
 *
 * @param message - Warning message
 * @param details - Optional additional details
 * @returns Formatted warning box
 */
export function warningBox(message: string, details?: string): string {
  const chalk = getChalk();
  let content = chalk.hex(colors.warning)(message);

  if (details) {
    content += '\n\n' + chalk.dim(details);
  }

  return createBox(content, 'warning');
}

/**
 * Create a success box.
 *
 * @param message - Success message
 * @param details - Optional additional details
 * @returns Formatted success box
 */
export function successBox(message: string, details?: string): string {
  const chalk = getChalk();
  let content = chalk.hex(colors.success)(message);

  if (details) {
    content += '\n\n' + chalk.dim(details);
  }

  return createBox(content, 'success');
}

/**
 * Create an info box.
 *
 * @param message - Info message
 * @param details - Optional additional details
 * @returns Formatted info box
 */
export function infoBox(message: string, details?: string): string {
  const chalk = getChalk();
  let content = chalk.hex(colors.info)(message);

  if (details) {
    content += '\n\n' + chalk.dim(details);
  }

  return createBox(content, 'info');
}

/**
 * Create a branded box (Cloudflare orange).
 *
 * @param content - Box content
 * @param title - Optional title
 * @returns Formatted branded box
 */
export function brandBox(content: string, title?: string): string {
  return createBox(content, 'brand', title ? { title } : undefined);
}
