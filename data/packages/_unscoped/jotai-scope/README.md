# jotai-scope

👻🔭

https://jotai.org/docs/integrations/scope

## Scoped Atom resolution rules

1. Each ScopeProvider creates a new scope pool.
2. If a primitive atom is scoped, its scoped copy will be stored within the scope pool.
3. If a derived atom is scoped, itself and all of its dependencies will be stored within the scope pool.
4. If a derived atom is not scoped, but its dependency is scoped, it will access its scoped dependency.
5. In each scope pool, each atom has at most one scoped copy, so the same scoped atom is shared in the pool.
6. If a derived atom is nested scoped, itself and all of its dependencies will be stored within the scope pool where the atom is marked as scoped.

Taking the following setting in mind:

```javascript
const base = atom(0);
const derived1 = atom((get) => get(base));
const derived2 = atom((get) => get(base));

const Component = () => {
  useAtom(base);
  useAtom(derived1);
  useAtom(derived2);
};
```

### Example1: base and derived1 are scoped

```javascript
const App() {
  return (
    <>
      <Component />
      <ScopeProvider atoms={[base, derived1]}>
        <Component />
      </ScopeProvider>
    </>
  );
}
```

Example 1 illustrates 1, 2, 3, 4, 5.

In unscoped `Component`, `base`, `derived1` and `derived2` are globally shared.

In scoped `Component`, `base` and `derived1` are scoped, so `derived1`'s dependency `base` is also scoped. Since exactly one scoped copy is stored in the scope pool, `base` and `derived1`'s dependency `base` are the same, so `derived1` and `base` are shared.

In scoped `Component`, `derived2` is not scoped, but its dependency `base` is scoped. So `derived2` will access the scoped copy of `base` in the scope pool. Therefore, `derived1`, `derived2` and `base` are scoped and shared.

### Example2: derived1 is scoped, base and derived2 are nested scoped

```javascript
const App() {
  return (
    <>
      <ScopeProvider atoms={[derived1]}>
        <Component />
        <ScopeProvider atoms={[base, derived2]}>
          <Component />
        </ScopeProvider>
      </ScopeProvider>
    </>
  );
}
```

Example 2 illustrates 6.

In the first `ScopeProvider`, `derived1` is scoped, so `derived1`'s dependency `base` is also scoped.

In the second `ScopeProvider`, `base` and `derived2` are scoped, so `base` and `derived2` will access nested scope's atoms.

In the second `ScopeProvider`, `derived1` is scoped in the first `ScopeProvider`, but its dependency `base` is scoped in current `ScopeProvider`. Here, `derived1` will first access its scoped copy in the first `ScopeProvider`, and then access the scoped copy of `base` in the first `ScopeProvider`, too.

Therefore, first `ScopeProvider`'s `base` and `derived2` are globally shared. First `ScopeProvider` and second `ScopeProvider`'s `derived1` are shared. Second `ScopeProvider`'s `base` and `derived2` are shared.

## Pro Tips

1. Within a `ScopeProvider`, although an atom may not be scoped, its `atom.read` function could be called multiple times. **Therefore, do not use `atom.read` to perform side effects.**

   NOTE: Async atoms always have side effects. To handle it, add additional code to prevent extra side effects. You can check this [issue](https://github.com/jotaijs/jotai-scope/issues/25#issuecomment-2014498893) as an example.
