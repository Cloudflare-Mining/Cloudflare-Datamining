/**
 * Base error class for Cloudflare SDK errors
 */
export class CloudflareError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CloudflareError';
    Object.setPrototypeOf(this, CloudflareError.prototype);
  }
}

/**
 * Error thrown when an API request fails
 */
export class APIError extends CloudflareError {
  readonly status: number;
  readonly error: unknown;

  constructor(message: string, status: number, error?: unknown) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.error = error;
    Object.setPrototypeOf(this, APIError.prototype);
  }

  /**
   * Get Cloudflare-specific error codes from the response
   */
  get codes(): number[] {
    if (this.error && typeof this.error === 'object' && 'errors' in this.error) {
      const errors = (this.error as { errors: Array<{ code: number }> }).errors;
      return errors.map((e) => e.code);
    }
    return [];
  }

  /**
   * Get Cloudflare-specific error messages from the response
   */
  get messages(): string[] {
    if (this.error && typeof this.error === 'object' && 'errors' in this.error) {
      const errors = (this.error as { errors: Array<{ message: string }> }).errors;
      return errors.map((e) => e.message);
    }
    return [this.message];
  }
}

/**
 * Error thrown when authentication fails (401)
 */
export class AuthenticationError extends APIError {
  constructor(message: string, status = 401, error?: unknown) {
    super(message, status, error);
    this.name = 'AuthenticationError';
    Object.setPrototypeOf(this, AuthenticationError.prototype);
  }
}

/**
 * Error thrown when rate limit is exceeded (429)
 */
export class RateLimitError extends APIError {
  constructor(message: string, status = 429, error?: unknown) {
    super(message, status, error);
    this.name = 'RateLimitError';
    Object.setPrototypeOf(this, RateLimitError.prototype);
  }
}

/**
 * Error thrown when a resource is not found (404)
 */
export class NotFoundError extends APIError {
  constructor(message: string, error?: unknown) {
    super(message, 404, error);
    this.name = 'NotFoundError';
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

/**
 * Error thrown for validation errors (400)
 */
export class BadRequestError extends APIError {
  constructor(message: string, error?: unknown) {
    super(message, 400, error);
    this.name = 'BadRequestError';
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

/**
 * Error thrown for permission errors (403)
 */
export class PermissionDeniedError extends APIError {
  constructor(message: string, error?: unknown) {
    super(message, 403, error);
    this.name = 'PermissionDeniedError';
    Object.setPrototypeOf(this, PermissionDeniedError.prototype);
  }
}
