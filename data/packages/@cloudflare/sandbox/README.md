## @cloudflare/sandbox

A library to spin up a sandboxed environment.

First, setup your wrangler.json to use the sandbox:

```jsonc
{
  // ...
  "containers": [
    {
      "class_name": "Sandbox",
      "image": "./node_modules/@cloudflare/sandbox/Dockerfile",
      "name": "sandbox"
    }
  ],
  "durable_objects": {
    "bindings": [
      {
        "class_name": "Sandbox",
        "name": "Sandbox"
      }
    ]
  },
  "migrations": [
    {
      "new_sqlite_classes": ["Sandbox"],
      "tag": "v1"
    }
  ]
}
```

Then, export the Sandbox class in your worker:

```ts
export { Sandbox } from "@cloudflare/sandbox";
```

You can then use the Sandbox class in your worker:

```ts
import { getSandbox } from "@cloudflare/sandbox";

export default {
  async fetch(request: Request, env: Env) {
    const sandbox = getSandbox(env.Sandbox, "my-sandbox");
    return sandbox.exec("ls", ["-la"]);
  },
};
```

### Methods:

- `exec(command: string, args: string[], options?: { stream?: boolean })`: Execute a command in the sandbox.
- `gitCheckout(repoUrl: string, options: { branch?: string; targetDir?: string; stream?: boolean })`: Checkout a git repository in the sandbox.
- `mkdir(path: string, options: { recursive?: boolean; stream?: boolean })`: Create a directory in the sandbox.
- `writeFile(path: string, content: string, options: { encoding?: string; stream?: boolean })`: Write content to a file in the sandbox.
- `deleteFile(path: string, options?: { stream?: boolean })`: Delete a file from the sandbox.
- `renameFile(oldPath: string, newPath: string, options?: { stream?: boolean })`: Rename a file in the sandbox.
- `moveFile(sourcePath: string, destinationPath: string, options?: { stream?: boolean })`: Move a file from one location to another in the sandbox.
- `ping()`: Ping the sandbox.
