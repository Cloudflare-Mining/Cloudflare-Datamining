/**
 * Resource name resolution utilities
 *
 * Allows users to use friendly names instead of UUIDs
 */
import type { Cloudflare } from '@cloudflare/sdk';
import { getCached } from './completion-cache.js';

/**
 * Check if a string is a valid UUID v4
 */
export function isUUID(str: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}

/**
 * Check if a string looks like a Cloudflare ID (32 hex chars)
 */
export function isCloudflareId(str: string): boolean {
  return /^[0-9a-f]{32}$/i.test(str);
}

/**
 * Check if a string is any kind of ID (UUID or Cloudflare ID)
 */
export function isId(str: string): boolean {
  return isUUID(str) || isCloudflareId(str);
}

/**
 * Validate that a string looks like a valid domain name
 * Allows: letters, numbers, hyphens, dots
 * Must start and end with alphanumeric
 */
export function isValidDomainName(str: string): boolean {
  // Basic validation: must be 1-253 chars, contain only valid chars
  if (!str || str.length > 253) {
    return false;
  }

  // Must contain at least one dot (e.g., example.com)
  if (!str.includes('.')) {
    return false;
  }

  // Check each label (part between dots)
  const labels = str.split('.');
  for (const label of labels) {
    // Labels must be 1-63 chars
    if (label.length === 0 || label.length > 63) {
      return false;
    }
    // Must start with alphanumeric
    if (!/^[a-zA-Z0-9]/.test(label)) {
      return false;
    }
    // Must end with alphanumeric
    if (!/[a-zA-Z0-9]$/.test(label)) {
      return false;
    }
    // Can only contain alphanumeric and hyphens
    if (!/^[a-zA-Z0-9-]+$/.test(label)) {
      return false;
    }
  }

  return true;
}

/**
 * Zone information
 */
interface Zone {
  id: string;
  name: string;
  status: string;
  account: {
    id: string;
    name: string;
  };
}

/**
 * Resolve a zone ID or name to a zone ID
 *
 * If the input looks like a UUID/ID, return it as-is.
 * Otherwise, look up the zone by name.
 *
 * @param client - Cloudflare SDK client
 * @param accountId - Account ID to search in
 * @param zoneIdOrName - Zone ID or zone name (e.g., "example.com")
 * @returns Zone ID
 * @throws Error if zone not found
 */
export async function resolveZoneId(client: Cloudflare, accountId: string, zoneIdOrName: string): Promise<string> {
  // If it looks like an ID, return as-is
  if (isId(zoneIdOrName)) {
    return zoneIdOrName;
  }

  // Validate domain name format before making API call
  if (!isValidDomainName(zoneIdOrName)) {
    throw new Error(`Invalid zone identifier: "${zoneIdOrName}". Must be a zone ID or valid domain name.`);
  }

  // Otherwise, look up by name
  const cacheKey = `zones:${accountId}`;
  const zones = await getCached<Zone[]>(cacheKey, async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (client as any).zones.list(accountId) as Promise<Zone[]>;
  });

  const zone = zones.find((z) => z.name === zoneIdOrName || z.name === zoneIdOrName.toLowerCase());

  if (!zone) {
    throw new Error(`Zone not found: ${zoneIdOrName}`);
  }

  return zone.id;
}

/**
 * Resolve a D1 database ID or name to a database ID
 *
 * @param client - Cloudflare SDK client
 * @param accountId - Account ID
 * @param databaseIdOrName - Database ID or name
 * @returns Database ID
 * @throws Error if database not found
 */
export async function resolveDatabaseId(
  client: Cloudflare,
  accountId: string,
  databaseIdOrName: string,
): Promise<string> {
  // If it looks like an ID, return as-is
  if (isId(databaseIdOrName)) {
    return databaseIdOrName;
  }

  // Otherwise, look up by name
  const cacheKey = `d1:${accountId}`;
  interface Database {
    uuid: string;
    name: string;
  }
  const databases = await getCached<Database[]>(cacheKey, async () => {
    return client.d1.list(accountId) as Promise<Database[]>;
  });

  const db = databases.find((d) => d.name === databaseIdOrName);

  if (!db) {
    throw new Error(`Database not found: ${databaseIdOrName}`);
  }

  return db.uuid;
}
