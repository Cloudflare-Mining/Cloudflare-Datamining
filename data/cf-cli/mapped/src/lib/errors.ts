import { APIError } from '@cloudflare/sdk';
import { errorBox } from './ui/box.js';
import { error as formatError, hint } from './ui/format.js';
import { supportsColor } from './ui/theme.js';

/**
 * Handle and format errors, then exit the process.
 *
 * - Formats Cloudflare API errors with status code and message
 * - Formats generic errors nicely
 * - Always exits with code 1
 */
export function handleError(error: unknown): never {
  const useBoxes = supportsColor();

  // Handle Cloudflare API errors
  if (error instanceof APIError) {
    const statusText = getStatusText(error.status);
    const title = `API Error: ${error.status} ${statusText}`;

    // Build details string
    let details = '';
    if (error.error) {
      const errorDetails = error.error as Record<string, unknown>;
      if (errorDetails.errors && Array.isArray(errorDetails.errors)) {
        const errorMessages = (errorDetails.errors as Array<{ code?: number; message?: string }>)
          .map((err) => {
            if (err.code && err.message) {
              return `[${err.code}] ${err.message}`;
            }
            return err.message ?? '';
          })
          .filter(Boolean);
        if (errorMessages.length > 0) {
          details = errorMessages.join('\n');
        }
      }
    }

    if (useBoxes) {
      console.error('\n' + errorBox(title, details || undefined));
    } else {
      console.error(`\n${formatError(title)}`);
      if (error.message) {
        console.error(`Message: ${error.message}`);
      }
      if (details) {
        console.error('\nDetails:');
        for (const line of details.split('\n')) {
          console.error(`  - ${line}`);
        }
      }
    }

    // Add helpful hints for common errors
    if (error.status === 401) {
      console.error('\n' + hint('Try running: cf auth login'));
    } else if (error.status === 403) {
      console.error('\n' + hint('Check your API token permissions'));
    }

    process.exit(1);
  }

  // Handle standard Error objects
  if (error instanceof Error) {
    if (useBoxes) {
      const details = process.env.DEBUG && error.stack ? sanitize(error.stack) : undefined;
      console.error('\n' + errorBox(error.message, details));
    } else {
      console.error(`\n${formatError(error.message)}`);
      if (process.env.DEBUG && error.stack) {
        console.error('\nStack trace:');
        console.error(sanitize(error.stack));
      }
    }

    process.exit(1);
  }

  // Handle unknown error types
  if (useBoxes) {
    console.error('\n' + errorBox('An unexpected error occurred', String(error)));
  } else {
    console.error(`\n${formatError('An unexpected error occurred')}`);
    console.error(String(error));
  }
  process.exit(1);
}

/**
 * Sanitize potential tokens from error output.
 * Redacts anything that looks like a token (40+ char alphanumeric strings).
 */
function sanitize(text: string): string {
  return text.replace(/[A-Za-z0-9_-]{40,}/g, '[REDACTED]');
}

/**
 * Get a human-readable status text for HTTP status codes.
 */
function getStatusText(status: number): string {
  const statusTexts: Record<number, string> = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    409: 'Conflict',
    422: 'Unprocessable Entity',
    429: 'Too Many Requests',
    500: 'Internal Server Error',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
  };

  return statusTexts[status] ?? '';
}
