import * as React from 'react';
// (A - keys of B)
// In set theory, this would be the set complement A ∖ B (https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement)
// Example:
//      type A = {a: string, b: number, c: boolean}
//      type B = {b: number}
//      type result = Omit<A, keyof B> = {a: string, c: boolean}
export type Omit<A, B> = Pick<A, Exclude<keyof A, B>>;

/**
 *  Get PropTypes of a component.
 *  @example
 *  const OtherComponent: React.FC<{ foo: string }> = () => <div>{foo}</div>
 *  type MyComponentProps = PropTypes<typeof OtherComponent> & { bar: string } // {foo: string, bar: string}
 */
export type PropTypes<C> = C extends React.ComponentType<infer P> ? P : never;

/**
 * ValueOf: similar to keyof, but picks a value.
 *
 * @example
 * type Person = {
 *   name: string,
 *   phone: number | null
 * }
 *
 * type PhoneType = ValueOf<Person>; // string | number | null
 */
export type ValueOf<T> = T[keyof T];

/**
 * Arguments<Fn>: Get type of arguments of a function.
 * @example
 * type Fn = (foo: string, bar: number) => void
 * type FnArguments = Arguments<Fn> // [string, number]
 */
export type Arguments<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never;

/**
 * Get type of array element
 *
 * @example
 * const Names = ["Robert", "Ollie", "John", "Cina", "Millie"] // typeof Names === string[]
 * type Name = ValueOfArray<typeof Names> // string
 *
 * @example
 * // typeof readonlyNames === readonly ["Robert", "Ollie", "John", "Cina", "Millie"]
 * const nameTuple = ["Robert", "Ollie", "John", "Cina", "Millie"] as const
 * // Name === "Robert" | "Ollie" | "John" | "Cina" | "Millie"
 * type Name = ValueOfReadonlyArray<typeof nameTuple>
 */
export type ValueOfArray<
  T extends Array<any> | ReadonlyArray<any>
> = T extends Array<infer U>
  ? U
  : T extends ReadonlyArray<infer RO>
  ? RO
  : never;

/**
 * Overwrite certain keys with new types.
 *
 * @example
 * type A = {a: string, b?: string}
 * type result = Overwrite<A, {b: string}> = {a: string, b: string}
 * (Note that b is no longer optional)
 */
export type Overwrite<T1, T2> = { [P in Exclude<keyof T1, keyof T2>]: T1[P] } &
  T2;

/**
 * Converts union to intersection.
 *
 * @example
 * type A = "hello" | 5
 * type IntersectionA = UnionToIntersection<A> = "hello" & 5
 */
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

/**
 * Doing keyof UnionOfObjects in TypeScript will give you intersection of keys. For example:
 * type UnionOfObjects = {a: string, b: number} | {a: string}
 * type Keys = keyof UnionOfObjects // "a"[]
 *
 * Sometimes, you might want all possible keys, in other words, you want union of keys. You can use this type for it.
 *
 * @example
 * type UnionOfObjects = {a: string, b: number } | {a: string}
 * type AllKeys = KeyOfUnion<UnionOfObjects> // "a" | "b"
 */
export type KeyOfUnion<Union> = keyof UnionToIntersection<Union>;

/**
 * Converts readonly array to non-readonly array.
 *
 * @example
 * const ReadonlyArray = [5, 4] as const;
 *
 * type NonReadonlyArray = NonReadonly<typeof ReadonlyArray>
 */
export type NonReadonly<T extends ReadonlyArray<any>> = T extends ReadonlyArray<
  infer X
>
  ? X[]
  : never;

/**
 * Remove types from T that are assignable to U
 */
export type Diff<T, U> = T extends U ? never : T;

/**
 * Remove types from T that are not assignable to U
 */
export type Filter<T, U> = T extends U ? T : never;

/**
 * Represents Some value, or None
 */
export type Option<T> = T | undefined;

/**
 * Given a tuple, get the type of the head of the tuple
 */
export type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;

/**
 * Given a tuple, return a new tuple without the head
 */
export type Tail<T extends any[]> = ((...args: T) => any) extends (
  arg: any,
  ...args: infer TT
) => any
  ? TT
  : [];

/**
 * Append T to R where R is a tuple
 */
export type Prepend<T, R extends any[]> = ((t: T, ...rest: R) => any) extends (
  ...tt: infer TT
) => any
  ? TT
  : never;

/**
 * Reverses the given tuple type.
 */
export type Reverse<Tuple extends any[], Result extends any[] = []> = {
  return: Result;
  recurse: Reverse<Tail<Tuple>, Prepend<Head<Tuple>, Result>>;
}[Tuple extends [] ? 'return' : 'recurse'];

/**
 * Force TS to load a type that has not been computed
 * (to resolve composed types that TS hasn't resolved).
 * https://pirix-gh.github.io/ts-toolbelt/modules/_any_compute_.html
 *
 * @example
 * // becomes {foo: string, baz: boolean}
 * type Foo = Compute<{bar: string} & {baz: boolean}>
 */
export type Compute<A extends any> = A extends Function
  ? A
  : { [K in keyof A]: A[K] } & {};

/**
 * Same as Partial, but recursively.
 *
 * @example
 * type A = {
 *   foo: {
 *     bar: string
 *   }
 * }
 *
 * type B = PartialDeep<A>
 * // Becomes { foo?: {bar?: string | undefined} | undefined }
 */
export type PartialDeep<T> = T extends object
  ? { [K in keyof T]?: PartialDeep<T[K]> | undefined }
  : T;

/**
 * Selectively apply Partial to certain properties.
 *
 * @example
 * type T = {
 *   foo: string;
 *   bar: string;
 *   baz?: string | undefined;
 * }
 *
 * type OptionalBar = PartialKeys<T, "bar"> // { foo: string; bar?: string | undefined; baz?: string | undefined; }
 */
export type PartialKeys<T, K extends keyof T = keyof T> = Omit<T, K> &
  {
    [P in K]?: T[P];
  };

/**
 * Selectively apply Required to certain properties.
 *
 * @example
 * type T = {
 *   foo: string;
 *   bar?: string | undefined;
 *   baz?: string | undefined;
 * }
 *
 * type RequiredBar = RequiredKeys<T, "bar"> // { foo: string; bar: string; baz?: string | undefined; }
 */
export type RequiredKeys<T, K extends keyof T = keyof T> = Omit<T, K> &
  {
    [P in K]-?: T[P];
  };

/**
 * Selectively apply Readonly to certain properties.
 *
 * @example
 * type T = {
 *   foo: string;
 *   bar: string;
 *   readonly baz: string;
 * }
 *
 * type ReadonlyBar = ReadonlyKeys<T, "bar"> // { foo: string; readonly bar: string; readonly baz: string; }
 */
export type ReadonlyKeys<T, K extends keyof T = keyof T> = Omit<T, K> &
  {
    readonly [P in K]: T[P];
  };

/**
 * Generates the typings for usage with Object.keys
 *
 *  @example
 *  const Locations = { "Cina": "Austin", "John": "Austin", "Kevin": "Austin", "Nicky": "San Francisco", "Robert": "San Francisco" }
 *  const KeysFromLocations = objectKeys(Locations)
 */
export function objectKeys<T>(t: T) {
  return Object.keys(t) as (keyof T)[];
}

/*
 * Get a type of awaited Promise value.
 *
 * @example
 * type StringPromise = Promise<string>
 *
 * type Value = PromiseType<StringPromise> // string
 */
export type PromiseType<P> = P extends Promise<infer T> ? T : never;

/**
 * Should be used in the `default:` case of a switch.
 * Will cause a compilation-time type error if the switch is not exhaustive.
 * See https://www.typescriptlang.org/docs/handbook/advanced-types.html
 *
 * @param x
 * @param returnValue If provided, doesn't throw at runtime, but returns this value.
 *
 * @example
 * type Type = "error" | "success" | "info" | "warning"
 *
 * const getIcon = (type: Type) => {
 *   switch (type) {
 *     case 'success':
 *       return 'ok';
 *     case 'error':
 *       return 'sad';
 *     case 'info':
 *       return 'info-sign';
 *     default:
 *       return assertNever(type); // Shows error, because 'warning' is not handled.
 *   }
 * };
 */
export const assertNever = (x: never, returnValue?: any): never => {
  if (returnValue !== undefined) {
    throw new Error('Unexpected object: ' + x);
  } else {
    return returnValue as never;
  }
};
