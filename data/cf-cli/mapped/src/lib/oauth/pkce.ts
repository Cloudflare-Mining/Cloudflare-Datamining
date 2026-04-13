/**
 * PKCE (Proof Key for Code Exchange) utilities for OAuth 2.0
 * Based on RFC 7636: https://tools.ietf.org/html/rfc7636
 */
import { createHash, randomBytes } from 'node:crypto';

const PKCE_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
const CODE_VERIFIER_LENGTH = 96;
const STATE_LENGTH = 32;

/**
 * Base64URL encode (RFC 4648 Section 5, no padding)
 */
function base64urlEncode(buffer: Buffer): string {
  return buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

/**
 * Generate a cryptographically random string using the PKCE charset
 */
function generateRandomString(length: number): string {
  const bytes = randomBytes(length);
  let result = '';
  for (let i = 0; i < length; i++) {
    const byte = bytes[i];
    if (byte !== undefined) {
      result += PKCE_CHARSET[byte % PKCE_CHARSET.length];
    }
  }
  return result;
}

/**
 * Generate a PKCE code verifier
 * The verifier is a high-entropy cryptographic random string
 */
export function generateCodeVerifier(): string {
  return generateRandomString(CODE_VERIFIER_LENGTH);
}

/**
 * Generate a PKCE code challenge from a verifier
 * Uses SHA-256 hash and base64url encoding (S256 method)
 */
export function generateCodeChallenge(verifier: string): string {
  const hash = createHash('sha256').update(verifier).digest();
  return base64urlEncode(hash);
}

/**
 * Generate a random state parameter for CSRF protection
 */
export function generateState(): string {
  return generateRandomString(STATE_LENGTH);
}

/**
 * PKCE pair containing verifier and challenge
 */
export interface PKCEPair {
  codeVerifier: string;
  codeChallenge: string;
  state: string;
}

/**
 * Generate a complete PKCE pair for OAuth flow
 */
export function generatePKCE(): PKCEPair {
  const codeVerifier = generateCodeVerifier();
  return {
    codeVerifier,
    codeChallenge: generateCodeChallenge(codeVerifier),
    state: generateState(),
  };
}
