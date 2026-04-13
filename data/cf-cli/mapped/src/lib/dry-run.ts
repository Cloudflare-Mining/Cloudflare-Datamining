/**
 * Dry-Run Output Formatter
 *
 * Formats dry-run output for mutating CLI commands.
 * Shows what the command would do without actually executing.
 */
import { formatOutput } from './output.js';

/**
 * Structured dry-run output data.
 * All fields are populated by the generated command handler.
 */
export interface DryRunOutput {
  /** Full CLI command path, e.g. "cf dns records create" */
  command: string;
  /** HTTP method, e.g. "POST" */
  method: string;
  /** Full API URL with resolved path parameters */
  url: string;
  /** Resolved path parameters */
  pathParams: Record<string, string>;
  /** Request body (for POST/PUT/PATCH) */
  body?: Record<string, unknown>;
  /** Validation status */
  validation: 'passed' | 'failed' | 'skipped';
}

/**
 * Format and print dry-run output as JSON (with syntax highlighting on TTYs).
 */
export function formatDryRun(output: DryRunOutput): void {
  formatOutput(output);
}
