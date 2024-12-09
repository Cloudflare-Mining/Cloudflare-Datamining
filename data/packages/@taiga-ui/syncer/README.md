# @taiga-ui/syncer

`package.json`

```json
{
  "name": "root-project",
  "scripts": {},
  "workspaces": ["./projects/*"],
  "syncer": {
    "includePaths": ["./projects", "./package-lock.json"],
    "matchPackageNames": ["@my-scope-ui/*", "root-project"],
    "ignorePackageNames": ["@my-scope-ui/ignore-my-package"]
  }
}
```

Then try update

```bash
$ npx syncer
```
