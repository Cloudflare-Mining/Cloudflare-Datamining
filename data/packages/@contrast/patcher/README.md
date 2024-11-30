# `@contrast/patcher`

Monkey patching.

# Notes on v5 Parity

This was ported directly from the `node-agent` but code with every dependency commented out. As a result there are differences in parity.

1. Removed dependency on `AsyncStorage`.

    **Old Behavior**

    Pre and post hooks only run when async storage context indicates an active request scope.

    **New Behavior**

    Hooks always run, independent of request scope.

1. Removed dependency on `agent` and `perf-logger`.

    **Old Behavior**

    A configuration setting would allow for logging of perf data of hooks and original function calls.

    **New Behavior**

    Performance logging of hooks is non-funcitonal.

1. Removed the dependency on `scopes`.

   **Old Behavior**

   One could specify a `scope` in the hook options and the original function would be run in that scope. This allowed control over when to run instrumentaion based on current scope value.

   Also, the `alwaysRun` option forced hooks to run independent of scope state.

   **New Behavior**

   There are no notions of scopes yet in v5. Patcher instrumentation always runs.

   The `scope` and `alwaysRun` options are effectively ignored.

1. Removed the dependency on `tracker`.

    **Old Behavior**
    
    We used to short-circuit `__add` function if tracker showed all arguments to be untracked.
    
    **New Behavior**
    
    We do not make this check; no short-circuiting.
