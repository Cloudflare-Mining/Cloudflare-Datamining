/**
 * Body Parser
 *
 * Parses and validates raw JSON input from the --body CLI flag.
 * Also provides utilities for assembling request bodies from individual CLI flags.
 * Applies input hardening to all string values in the parsed object.
 */

import { rejectControlChars } from './input-validation.js';

/** Keys that must never appear in body paths to prevent prototype pollution. */
const FORBIDDEN_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

/**
 * Set a value at a nested path in an object, creating intermediate objects as needed.
 * Used by generated commands to reconstruct the API request body from flat CLI flags.
 *
 * Guards against prototype pollution by rejecting __proto__, constructor, and prototype keys.
 * Validates string values against control character injection (consistent with --body path).
 *
 * @example
 * const body = {};
 * setNestedValue(body, ['origin', 'host'], 'db.example.com');
 * // body = { origin: { host: 'db.example.com' } }
 */
export function setNestedValue(obj: Record<string, unknown>, path: string[], value: unknown): void {
  if (path.length === 0) return;
  let current: Record<string, unknown> = obj;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i] ?? '';
    if (FORBIDDEN_KEYS.has(key)) throw new Error(`Forbidden key in body path: ${key}`);
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key] as Record<string, unknown>;
  }
  const lastKey = path[path.length - 1] ?? '';
  if (FORBIDDEN_KEYS.has(lastKey)) throw new Error(`Forbidden key in body path: ${lastKey}`);
  // Validate string values against control character injection (consistent with --body path)
  if (typeof value === 'string') {
    rejectControlChars(value, lastKey);
  }
  current[lastKey] = value;
}

/**
 * Parse a raw JSON string from the --body flag into a validated value.
 *
 * Accepts any valid JSON: objects, arrays, strings, numbers, booleans, null.
 * Some APIs require non-object bodies (e.g. KV bulk ops need arrays,
 * KV values-update needs a plain string).
 *
 * @param input - Raw JSON string from the CLI
 * @returns Parsed and validated value
 * @throws Error if JSON is invalid or contains control characters
 */
export function parseBody(input: string): unknown {
  let parsed: unknown;
  try {
    parsed = JSON.parse(input);
  } catch {
    throw new Error('Invalid JSON in --body. Expected valid JSON.');
  }

  // Validate strings inside objects and arrays
  if (parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed)) {
    validateStrings(parsed as Record<string, unknown>, 0);
  } else if (Array.isArray(parsed)) {
    validateArray(parsed, 0);
  } else if (typeof parsed === 'string') {
    rejectControlChars(parsed, 'body');
  }

  return parsed;
}

/** Maximum recursion depth for string validation */
const MAX_DEPTH = 5;

/**
 * Recursively validate all string values in an array.
 */
function validateArray(arr: unknown[], depth: number): void {
  if (depth > MAX_DEPTH) {
    throw new Error('--body nesting too deep (max depth 5). Flatten your JSON structure.');
  }
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (typeof item === 'string') {
      rejectControlChars(item, `body[${i}]`);
    } else if (item !== null && typeof item === 'object' && !Array.isArray(item)) {
      validateStrings(item as Record<string, unknown>, depth + 1);
    } else if (Array.isArray(item)) {
      validateArray(item, depth + 1);
    }
  }
}

/**
 * Recursively validate all string values in an object.
 * Rejects control characters at any depth up to MAX_DEPTH.
 */
function validateStrings(obj: Record<string, unknown>, depth: number): void {
  if (depth > MAX_DEPTH) {
    throw new Error('--body nesting too deep (max depth 5). Flatten your JSON structure.');
  }

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      rejectControlChars(value, `body.${key}`);
    } else if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      validateStrings(value as Record<string, unknown>, depth + 1);
    } else if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        if (typeof item === 'string') {
          rejectControlChars(item, `body.${key}[${i}]`);
        } else if (item !== null && typeof item === 'object' && !Array.isArray(item)) {
          validateStrings(item as Record<string, unknown>, depth + 1);
        }
      }
    }
  }
}
