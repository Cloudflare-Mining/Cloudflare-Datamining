/**
 * In-memory cache for completion API responses
 *
 * Used to avoid repeated API calls during rapid tab completion
 */

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const cache = new Map<string, CacheEntry<unknown>>();

/** Default TTL: 60 seconds */
const DEFAULT_TTL_MS = 60000;

/**
 * Get cached data or fetch and cache it
 *
 * @param key - Cache key (e.g., "zones:account123" or "d1:account123")
 * @param fetcher - Async function to fetch data if not cached
 * @param ttlMs - Time-to-live in milliseconds (default: 60s)
 * @returns Cached or freshly fetched data
 */
export async function getCached<T>(key: string, fetcher: () => Promise<T>, ttlMs = DEFAULT_TTL_MS): Promise<T> {
  const now = Date.now();
  const entry = cache.get(key) as CacheEntry<T> | undefined;

  // Return cached data if still valid
  if (entry && now - entry.timestamp < ttlMs) {
    return entry.data;
  }

  // Fetch fresh data
  const data = await fetcher();

  // Cache it
  cache.set(key, { data, timestamp: now });

  return data;
}

/**
 * Clear all cached data
 */
export function clearCache(): void {
  cache.clear();
}

/**
 * Clear a specific cache entry
 */
export function clearCacheKey(key: string): void {
  cache.delete(key);
}

/**
 * Get cache statistics (for debugging)
 */
export function getCacheStats(): { size: number; keys: string[] } {
  return {
    size: cache.size,
    keys: Array.from(cache.keys()),
  };
}
