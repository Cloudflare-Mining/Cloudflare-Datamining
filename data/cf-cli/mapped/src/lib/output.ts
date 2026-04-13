import { getChalk, supportsColor } from './ui/theme.js';

/** Maximum JSON size (in characters) for syntax highlighting - prevents performance issues */
const MAX_HIGHLIGHTED_JSON_SIZE = 50_000;

export interface OutputOptions {
  quiet?: boolean;
  /** Field names to include in output. Accepts a comma-separated string or string[]. Supports one level of dot-path (e.g. "meta.created_on"). */
  fields?: string | string[];
  /** Output as newline-delimited JSON (one object per line). */
  ndjson?: boolean;
}

/**
 * Format and output data as JSON.
 *
 * - If options.quiet is true, outputs nothing
 * - If options.ndjson is true, outputs one JSON object per line
 * - Otherwise outputs pretty-printed JSON (with syntax highlighting on TTYs)
 */
export function formatOutput(data: unknown, options: OutputOptions = {}): void {
  if (options.quiet) {
    return;
  }

  // Apply field filtering before any output formatting
  if (options.fields) {
    const fieldList =
      typeof options.fields === 'string'
        ? options.fields
            .split(',')
            .map((f) => f.trim())
            .filter(Boolean)
        : options.fields;
    if (fieldList.length > 0) {
      data = filterFields(data, fieldList);
    }
  }

  // NDJSON: one JSON object per line, for streaming/piping
  if (options.ndjson) {
    if (Array.isArray(data)) {
      for (const item of data as unknown[]) {
        console.log(JSON.stringify(item));
      }
    } else {
      console.log(JSON.stringify(data));
    }
    return;
  }

  // JSON output (default)
  console.log(formatJson(data));
}

/**
 * Format JSON with syntax highlighting.
 * Colors: keys in cyan, strings in green, numbers in yellow, booleans in magenta, null in dim.
 * Skips highlighting for large outputs to prevent performance issues.
 */
function formatJson(data: unknown): string {
  const json = JSON.stringify(data, null, 2);

  // Skip syntax highlighting if colors disabled or JSON is too large
  if (!supportsColor() || json.length > MAX_HIGHLIGHTED_JSON_SIZE) {
    return json;
  }

  const chalk = getChalk();

  return json
    .replace(/"([^"]+)":/g, (_match, key) => `${chalk.cyan(`"${key}"`)}:`)
    .replace(/: "([^"]*)"/g, (_match, value) => `: ${chalk.green(`"${value}"`)}`)
    .replace(/: (-?\d+\.?\d*)/g, (_match, num) => `: ${chalk.yellow(num)}`)
    .replace(/: (true|false)/g, (_match, bool) => `: ${chalk.magenta(bool)}`)
    .replace(/: (null)/g, (_match, n) => `: ${chalk.dim(n)}`);
}

/**
 * Filter an object or array of objects to include only the specified fields.
 * Supports one level of dot-path notation (e.g. "meta.created_on").
 */
function filterFields(data: unknown, fields: string[]): unknown {
  if (data === null || data === undefined || typeof data !== 'object') {
    return data;
  }

  const pickFields = (obj: Record<string, unknown>): Record<string, unknown> => {
    const result: Record<string, unknown> = {};
    for (const field of fields) {
      if (field.includes('.')) {
        const dotIndex = field.indexOf('.');
        const parent = field.slice(0, dotIndex);
        const child = field.slice(dotIndex + 1);
        const parentValue = obj[parent];
        if (parentValue !== null && typeof parentValue === 'object' && !Array.isArray(parentValue)) {
          result[field] = (parentValue as Record<string, unknown>)[child];
        }
      } else if (field in obj) {
        result[field] = obj[field];
      }
    }
    return result;
  };

  if (Array.isArray(data)) {
    return data.map((item) => {
      if (item !== null && typeof item === 'object' && !Array.isArray(item)) {
        return pickFields(item as Record<string, unknown>);
      }
      return item;
    });
  }

  return pickFields(data as Record<string, unknown>);
}
