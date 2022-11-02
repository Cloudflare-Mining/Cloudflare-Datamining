/**
 * Creates an object whose keys and values are equal, populated
 * from the list of keys provided
 * @param keys Keys to populate enumerable
 */
export function enumerable<T extends string>(
  keys: ReadonlyArray<T>
): Enumerable<typeof keys[number]> {
  const result: Enumerable<typeof keys[number]> = keys.reduce((result, key) => {
    result[key] = key;
    return result;
  }, {} as any);

  result.is = (k): k is T => k in result;

  return result;
}

export type Enumerable<T extends string> = {
  [K in T]: K;
} & { is: (data: any) => data is T };

export type TypeFromEnumerable<
  T extends Enumerable<any>
> = T extends Enumerable<infer P> ? P : never;
