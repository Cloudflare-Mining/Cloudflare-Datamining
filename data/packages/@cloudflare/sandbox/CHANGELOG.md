# @cloudflare/sandbox

## 0.3.7

### Patch Changes

- [#98](https://github.com/cloudflare/sandbox-sdk/pull/98) [`d951819`](https://github.com/cloudflare/sandbox-sdk/commit/d951819b18e9cff9ce09851c6855f05039973b65) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Bake wrangler, vite & opencode in base image

## 0.3.6

### Patch Changes

- [#90](https://github.com/cloudflare/sandbox-sdk/pull/90) [`66cc85b`](https://github.com/cloudflare/sandbox-sdk/commit/66cc85b679b466b3ffb1f00fbd697670fc186f06) Thanks [@eastlondoner](https://github.com/eastlondoner)! - set bun idletimeout

## 0.3.5

### Patch Changes

- [#88](https://github.com/cloudflare/sandbox-sdk/pull/88) [`46eb4e6`](https://github.com/cloudflare/sandbox-sdk/commit/46eb4e6b6c671b682fc74f83563ccf5f316011cb) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Add binary file support with automatic MIME detection and streaming

## 0.3.4

### Patch Changes

- [#86](https://github.com/cloudflare/sandbox-sdk/pull/86) [`feafd32`](https://github.com/cloudflare/sandbox-sdk/commit/feafd32a51f50dfaf4994bddcbfb56d46cada622) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Fix session reuse to reuse existing healthy session

## 0.3.3

### Patch Changes

- [#83](https://github.com/cloudflare/sandbox-sdk/pull/83) [`eec5bb6`](https://github.com/cloudflare/sandbox-sdk/commit/eec5bb6203dd5d775b4b54e91c26de25eeb767ce) Thanks [@mikenomitch](https://github.com/mikenomitch)! - Bump containers package version

## 0.3.2

### Patch Changes

- [#76](https://github.com/cloudflare/sandbox-sdk/pull/76) [`ef9e320`](https://github.com/cloudflare/sandbox-sdk/commit/ef9e320dcef30e57797fef6ebd9a9383fa9720d9) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Replace Jupyter with lightweight interpreters for >90% faster cold starts for `.runCode` calls, while maintaining full code execution capabilities and rich output support.

## 0.3.1

### Patch Changes

- [#71](https://github.com/cloudflare/sandbox-sdk/pull/71) [`fb3c9c2`](https://github.com/cloudflare/sandbox-sdk/commit/fb3c9c22242d9d4f157c26f547f1e697ef7875f9) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Bump containers package version

- [#70](https://github.com/cloudflare/sandbox-sdk/pull/70) [`e1fa354`](https://github.com/cloudflare/sandbox-sdk/commit/e1fa354ab1bc7b0e89db4901b67028ebf1a93d0a) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Fix escaped quotes in file write operations

- [#68](https://github.com/cloudflare/sandbox-sdk/pull/68) [`69b91d1`](https://github.com/cloudflare/sandbox-sdk/commit/69b91d1a8f6afb63262cc381ea93e94a033ed5e8) Thanks [@CyrusNuevoDia](https://github.com/CyrusNuevoDia)! - Configurable timeouts via environment variables in isolation.ts

- [#66](https://github.com/cloudflare/sandbox-sdk/pull/66) [`eca93b9`](https://github.com/cloudflare/sandbox-sdk/commit/eca93b97e40fa0d3bd9dc27af2cc214ec355b696) Thanks [@peterp](https://github.com/peterp)! - Determine if the port is specified in the URL.

## 0.3.0

### Minor Changes

- [#59](https://github.com/cloudflare/sandbox-sdk/pull/59) [`b6757f7`](https://github.com/cloudflare/sandbox-sdk/commit/b6757f730c34381d5a70d513944bbf9840f598ab) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Add process isolation for sandbox commands

  Implements PID namespace isolation to protect control plane processes (Jupyter, Bun) from sandboxed code. Commands executed via `exec()` now run in isolated namespaces that cannot see or interact with system processes.

  **Key security improvements:**

  - Control plane processes are hidden from sandboxed commands
  - Platform secrets in `/proc/1/environ` are inaccessible
  - Ports 8888 (Jupyter) and 3000 (Bun) are protected from hijacking

  **Breaking changes:**

  1. **Removed `sessionId` parameter**: The `sessionId` parameter has been removed from all methods (`exec()`, `execStream()`, `startProcess()`, etc.). Each sandbox now maintains its own persistent session automatically.

     ```javascript
     // Before: manual session management
     await sandbox.exec("cd /app", { sessionId: "my-session" });

     // After: automatic session per sandbox
     await sandbox.exec("cd /app");
     ```

  2. **Commands now maintain state**: Commands within the same sandbox now share state (working directory, environment variables, background processes). Previously each command was stateless.

     ```javascript
     // Before: each exec was independent
     await sandbox.exec("cd /app");
     await sandbox.exec("pwd"); // Output: /workspace

     // After: state persists in session
     await sandbox.exec("cd /app");
     await sandbox.exec("pwd"); // Output: /app
     ```

  **Migration guide:**

  - Remove `sessionId` from all method calls - each sandbox maintains its own session
  - If you need isolated execution contexts within the same sandbox, use `sandbox.createSession()`:
    ```javascript
    // Create independent sessions with different environments
    const buildSession = await sandbox.createSession({
      name: "build",
      env: { NODE_ENV: "production" },
      cwd: "/build",
    });
    const testSession = await sandbox.createSession({
      name: "test",
      env: { NODE_ENV: "test" },
      cwd: "/test",
    });
    ```
  - Environment variables set in one command persist to the next
  - Background processes remain active until explicitly killed
  - Requires CAP_SYS_ADMIN (available in production, falls back gracefully in dev)

### Patch Changes

- [#62](https://github.com/cloudflare/sandbox-sdk/pull/62) [`4bedc3a`](https://github.com/cloudflare/sandbox-sdk/commit/4bedc3aba347f3d4090a6efe2c9778bac00ce74a) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Fix broken build due to bun lockfile not being used

## 0.2.4

### Patch Changes

- [#57](https://github.com/cloudflare/sandbox-sdk/pull/57) [`12bbd12`](https://github.com/cloudflare/sandbox-sdk/commit/12bbd1229c07ef8c1c0bf58a4235a27938155b08) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Add listFiles method

## 0.2.3

### Patch Changes

- [#53](https://github.com/cloudflare/sandbox-sdk/pull/53) [`c87db11`](https://github.com/cloudflare/sandbox-sdk/commit/c87db117693a86cfb667bf09fb7720d6a6e0524d) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Improve jupyterlab config to speed up startup

## 0.2.2

### Patch Changes

- [#51](https://github.com/cloudflare/sandbox-sdk/pull/51) [`4aceb32`](https://github.com/cloudflare/sandbox-sdk/commit/4aceb3215c836f59afcb88b2b325016b3f623f46) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Handle intermittent interpreter failures and decouple jupyter startup

## 0.2.1

### Patch Changes

- [#49](https://github.com/cloudflare/sandbox-sdk/pull/49) [`d81d2a5`](https://github.com/cloudflare/sandbox-sdk/commit/d81d2a563c9af8947d5444019ed4d6156db563e3) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Implement code interpreter API

## 0.2.0

### Minor Changes

- [#47](https://github.com/cloudflare/sandbox-sdk/pull/47) [`8a93d0c`](https://github.com/cloudflare/sandbox-sdk/commit/8a93d0cae18a25bda6506b8b0a08d9e9eb3bb290) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Change default directory to a clean /workspace

## 0.1.4

### Patch Changes

- [#46](https://github.com/cloudflare/sandbox-sdk/pull/46) [`7de28be`](https://github.com/cloudflare/sandbox-sdk/commit/7de28be482d9634551572d548c7c4b5842df812d) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Update README

- [#44](https://github.com/cloudflare/sandbox-sdk/pull/44) [`215ab49`](https://github.com/cloudflare/sandbox-sdk/commit/215ab494427d7e2a92bb9a25384cb493a221c200) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Update example to use env & cwd

- [#42](https://github.com/cloudflare/sandbox-sdk/pull/42) [`bb72193`](https://github.com/cloudflare/sandbox-sdk/commit/bb72193ad75695979bd1132206f481e91fe37325) Thanks [@jonasnobile](https://github.com/jonasnobile)! - Propagate `cwd` and `env` options in `executeCommand`

- [#27](https://github.com/cloudflare/sandbox-sdk/pull/27) [`fd5ec7f`](https://github.com/cloudflare/sandbox-sdk/commit/fd5ec7f34bc12b06320a89356c4af07801f52d64) Thanks [@threepointone](https://github.com/threepointone)! - remove yarn and pnpm from the image

## 0.1.3

### Patch Changes

- [#32](https://github.com/cloudflare/sandbox-sdk/pull/32) [`1a42464`](https://github.com/cloudflare/sandbox-sdk/commit/1a4246479369c5d0160705caf192aa1816540d52) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Bring back package README

## 0.1.2

### Patch Changes

- [#30](https://github.com/cloudflare/sandbox-sdk/pull/30) [`30e5c25`](https://github.com/cloudflare/sandbox-sdk/commit/30e5c25cf7d4b07f9049724206c531e2d5d29d5c) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Remove actions timeout

- [#29](https://github.com/cloudflare/sandbox-sdk/pull/29) [`d78508f`](https://github.com/cloudflare/sandbox-sdk/commit/d78508f7287a59e0423edd2999c2c83e9e34ccfd) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Create multi-platform Docker image and switch to Cloudflare official repo

## 0.1.1

### Patch Changes

- [`157dde9`](https://github.com/cloudflare/sandbox-sdk/commit/157dde9b1f23e9bb6f3e9c3f0514b639a8813897) Thanks [@threepointone](https://github.com/threepointone)! - update deps

- [`a04f6b6`](https://github.com/cloudflare/sandbox-sdk/commit/a04f6b6c0b2ef9e3ce0851b53769f1c10d8c6de6) Thanks [@threepointone](https://github.com/threepointone)! - trigger a build with updated deps

## 0.1.0

### Minor Changes

- [#24](https://github.com/cloudflare/sandbox-sdk/pull/24) [`cecde0a`](https://github.com/cloudflare/sandbox-sdk/commit/cecde0a7530a87deffd8562fb8b01d66ee80ee19) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Redesign command execution API

### Patch Changes

- [#22](https://github.com/cloudflare/sandbox-sdk/pull/22) [`f5fcd52`](https://github.com/cloudflare/sandbox-sdk/commit/f5fcd52025d1f7958a374e69d75e3fc590275f3f) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Allow setting env variables dynamically and remove command restrictions

## 0.0.9

### Patch Changes

- [#20](https://github.com/cloudflare/sandbox-sdk/pull/20) [`f106fda`](https://github.com/cloudflare/sandbox-sdk/commit/f106fdac98e7ef35677326290d45cbf3af88982c) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - add preview URLs and dynamic port forwarding

## 0.0.8

### Patch Changes

- [`60af265`](https://github.com/cloudflare/sandbox-sdk/commit/60af265d834e83fd30a921a3e1be232f13fe24da) Thanks [@threepointone](https://github.com/threepointone)! - update dependencies

## 0.0.7

### Patch Changes

- [`d1c7c99`](https://github.com/cloudflare/sandbox-sdk/commit/d1c7c99df6555eff71bcd59852e4b8eed2ad8cb6) Thanks [@threepointone](https://github.com/threepointone)! - fix file operations

## 0.0.6

### Patch Changes

- [#9](https://github.com/cloudflare/sandbox-sdk/pull/9) [`24f5470`](https://github.com/cloudflare/sandbox-sdk/commit/24f547048d5a26137de4656cea13d83ad2cc0b43) Thanks [@ItsWendell](https://github.com/ItsWendell)! - fix baseUrl for stub and stub forwarding

## 0.0.5

### Patch Changes

- [#5](https://github.com/cloudflare/sandbox-sdk/pull/5) [`7c15b81`](https://github.com/cloudflare/sandbox-sdk/commit/7c15b817899e4d9e1f25747aaf439e5e9e880d15) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Make package ready for deployment

## 0.0.4

### Patch Changes

- [`c0d9d33`](https://github.com/cloudflare/sandbox-sdk/commit/c0d9d3396badee1eab45e6b4a73d48957f31409b) Thanks [@threepointone](https://github.com/threepointone)! - actually work

- [`444d2da`](https://github.com/cloudflare/sandbox-sdk/commit/444d2dafde9a0f190e50c879b0e768da1b289b51) Thanks [@threepointone](https://github.com/threepointone)! - add experimental label

## 0.0.3

### Patch Changes

- [`2b087c4`](https://github.com/cloudflare/sandbox-sdk/commit/2b087c40a29697c20dad19b4e3b8512f5d404bd3) Thanks [@ghostwriternr](https://github.com/ghostwriternr)! - Fix worker unable to find container port

## 0.0.2

### Patch Changes

- [`52f02f0`](https://github.com/cloudflare/sandbox-sdk/commit/52f02f0625ef9f8eac695e51f93fa79651c0206d) Thanks [@threepointone](https://github.com/threepointone)! - readFile

## 0.0.1

### Patch Changes

- [`f786c3c`](https://github.com/cloudflare/sandbox-sdk/commit/f786c3cee6bd9777bd74918ae9fdf381aa99f913) Thanks [@threepointone](https://github.com/threepointone)! - Release!
