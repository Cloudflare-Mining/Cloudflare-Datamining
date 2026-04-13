/**
 * Input Validation for Generated CLI Commands
 *
 * Provides input hardening functions called by generated command handlers.
 * Prevents path traversal, control character injection, and embedded URL parameters.
 */

/**
 * Reject strings containing ASCII control characters (below 0x20),
 * except newline (0x0A) and tab (0x09) which are harmless.
 *
 * @throws Error with field name and hex codepoint of the offending character
 */
export function rejectControlChars(value: string, fieldName: string): void {
  for (let i = 0; i < value.length; i++) {
    const code = value.charCodeAt(i);
    if (code < 0x20 && code !== 0x0a && code !== 0x09) {
      throw new Error(
        `Invalid character in ${fieldName}: control character U+${code.toString(16).padStart(4, '0')} at position ${i}`,
      );
    }
  }
}

/**
 * Reject strings containing path traversal patterns.
 * Blocks `..` segments, absolute paths starting with `/`, and home directory `~`.
 *
 * @throws Error describing the path traversal attempt
 */
export function rejectPathTraversal(value: string, fieldName: string): void {
  // Normalize backslashes to forward slashes for Windows-style traversal prevention
  const normalized = value.replace(/\\/g, '/');
  if (normalized.includes('..')) {
    throw new Error(`Path traversal detected in ${fieldName}: value must not contain '..'`);
  }
  if (normalized.startsWith('/') || normalized.startsWith('~')) {
    throw new Error(`Path traversal detected in ${fieldName}: value must not start with '/' or '~'`);
  }
}

/**
 * Reject strings containing URL query parameters or encoding.
 * Blocks `?`, `#`, and `%` characters that could alter API request semantics.
 *
 * @throws Error describing the embedded parameter
 */
export function rejectEmbeddedParams(value: string, fieldName: string): void {
  if (value.includes('?') || value.includes('#') || value.includes('%')) {
    throw new Error(`${fieldName} must not contain query parameters or URL encoding ('?', '#', '%')`);
  }
}

/**
 * Validate a resource ID argument (maps to an OpenAPI path parameter).
 * Applies all three checks: control characters, path traversal, and embedded params.
 * No-op for undefined, null, or empty strings.
 */
export function validateResourceId(value: string | undefined | null, fieldName: string): void {
  if (!value) return;
  rejectControlChars(value, fieldName);
  rejectPathTraversal(value, fieldName);
  rejectEmbeddedParams(value, fieldName);
}

/**
 * Validate a general string input argument.
 * Applies only control character rejection (less strict than resource IDs).
 * No-op for undefined, null, or empty strings.
 */
export function validateStringInput(value: string | undefined | null, fieldName: string): void {
  if (!value) return;
  rejectControlChars(value, fieldName);
}
