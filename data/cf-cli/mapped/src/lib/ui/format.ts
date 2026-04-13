/**
 * Format module - Consistent message formatting utilities.
 *
 * Provides simple one-line formatters for success, error, warning, and info messages.
 * For boxed messages, use the box module instead.
 */

import { getChalk, symbols, theme } from './theme.js';

/**
 * Format a success message with checkmark.
 *
 * @param message - The success message
 * @returns Formatted string: "✔ message"
 *
 * @example
 * console.log(success('Zone created successfully'));
 * // ✔ Zone created successfully
 */
export function success(message: string): string {
  return `${theme.success(symbols.success)} ${message}`;
}

/**
 * Format an error message with X mark.
 *
 * @param message - The error message
 * @returns Formatted string: "✖ message"
 *
 * @example
 * console.log(error('Failed to create zone'));
 * // ✖ Failed to create zone
 */
export function error(message: string): string {
  return `${theme.error(symbols.error)} ${message}`;
}

/**
 * Format a warning message with warning symbol.
 *
 * @param message - The warning message
 * @returns Formatted string: "⚠ message"
 *
 * @example
 * console.log(warning('Zone will be deleted'));
 * // ⚠ Zone will be deleted
 */
export function warning(message: string): string {
  return `${theme.warning(symbols.warning)} ${message}`;
}

/**
 * Format an info message with info symbol.
 *
 * @param message - The info message
 * @returns Formatted string: "ℹ message"
 *
 * @example
 * console.log(info('Use --help for more options'));
 * // ℹ Use --help for more options
 */
export function info(message: string): string {
  return `${theme.info(symbols.info)} ${message}`;
}

/**
 * Format a label-value pair.
 *
 * @param label - The label
 * @param value - The value
 * @returns Formatted string: "label: value"
 *
 * @example
 * console.log(labelValue('Zone ID', 'abc123'));
 * // Zone ID: abc123
 */
export function labelValue(label: string, value: string): string {
  const chalk = getChalk();
  return `${chalk.bold(label)}: ${value}`;
}

/**
 * Format a command for display.
 *
 * @param cmd - The command string
 * @returns Formatted command with code styling
 *
 * @example
 * console.log(command('cf dns records list'));
 * // cf dns records list (in cyan)
 */
export function command(cmd: string): string {
  return theme.code(cmd);
}

/**
 * Format a hint/tip message.
 *
 * @param message - The hint message
 * @returns Formatted hint with arrow prefix
 *
 * @example
 * console.log(hint('Run cf dns --help for more options'));
 * // → Run cf dns --help for more options
 */
export function hint(message: string): string {
  return `${theme.muted(symbols.arrow)} ${theme.muted(message)}`;
}

/**
 * Format a list item with bullet.
 *
 * @param text - The list item text
 * @param indent - Number of spaces to indent (default: 2)
 * @returns Formatted list item
 *
 * @example
 * console.log(listItem('First item'));
 * //   • First item
 */
export function listItem(text: string, indent: number = 2): string {
  return `${' '.repeat(indent)}${symbols.bullet} ${text}`;
}

/**
 * Format a section header.
 *
 * @param title - Section title
 * @returns Formatted section header
 *
 * @example
 * console.log(sectionHeader('Available Commands'));
 * // Available Commands:
 */
export function sectionHeader(title: string): string {
  return theme.bold(`${title}:`);
}

/**
 * Format dimmed/muted text for secondary information.
 *
 * @param text - Text to dim
 * @returns Dimmed text
 */
export function dim(text: string): string {
  return theme.dim(text);
}

/**
 * Format bold text for emphasis.
 *
 * @param text - Text to bold
 * @returns Bold text
 */
export function bold(text: string): string {
  return theme.bold(text);
}

/**
 * Format text with brand color.
 *
 * @param text - Text to color
 * @returns Orange branded text
 */
export function brand(text: string): string {
  return theme.brand(text);
}
