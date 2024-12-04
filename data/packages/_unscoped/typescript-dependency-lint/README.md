[![typescript-dependency-lint on npm](https://img.shields.io/npm/v/typescript-dependency-lint)](https://www.npmjs.com/package/typescript-dependency-lint)

# typescript-dependency-lint

Dependency linter for typescript. So far it supports graph analysis

## Cli

```bash
$ typescript-dependency-lint
Usage: typescript-dependency-lint [options] [command]

Options:
  --version              output the version number
  --config [json]        Config in escaped JSON format. See README for reference
  -h, --help             display help for command

Commands:
  analyze [globPattern]
  help [command]         display help for command
```

```typescript
interface Config {
  ignore: string[] // glob pattern array
  tsconfigPath: string
}
```

### Example

```bash
$ ts-node src/index.ts \
  --config "{\"tsconfigPath\": \"./tsconfig.json\",\"ignore\": [\"**/*.spec.ts\"]}" \
  analyze \
  "src/**/*.@(ts|vue)"

```

## TODO

1. Add lint command
