# update-by-scope
CLI tool for updating multiple packages of the same scope simultaneously

## Usage

```
npx update-by-scope <scope>
```


Tool tries to detect which NPM client you use, for example if it's Yarn, it will find all the packages which name starts with provided `scope` value inside the `package.json` and will run `yarn upgrade @example/foo@latest @example/bar@latest ...`.

If you want to manually specify an NPM client and command it should use, you can write it after scope argument or with `-n` and `-c` flags. 

```
npx update-by-scope @example npm install
```

or

```
npx update-by-scope -n npm -c install @example
```

In this case it will run `npm install @example/foo@latest @example/bar@latest ...`

It's also possible to specify NPM tag with a flag `--tag` or `-t`:

```
npx update-by-scope -t next @example
```

*If you have any ideas on how to improve the tool, feel free to open an issue or a PR.*