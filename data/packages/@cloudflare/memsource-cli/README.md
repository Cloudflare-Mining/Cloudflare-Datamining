# memsource-cli

> This is a tool for communicating with the `memsource` api to push and pull translation files.

## Upload
To upload files use:
```sh
$ memsource up -c
```

This command will combine all files matching `@cloudflare/intl-translations/src/locale/en-US/*.json` into `@cloudflare/intl-translations/src/locale/en-US-combined/combined.json` and upload it to the project specified in the closest `memsource.config.js` files, as new jobs.

Example combined.json:

```
{
  "access.json": {"hello":"world"},
  "workers.json": {"hello":"back"}
}
```


## Download
To download files use:
```sh
$ memsource down
```

This command will downalod and split the combined.json file into it's corresponding file chunks from jobs matching from the project specified in the closest `memsource.config.js` file. The split files will be put into `@cloudflare/intl-translations/src/locale/${target-lang}/`. Only files that are `Accepted`, `Completed` or `Delivered` are downloaded.

## Installation

```sh
$ npm install @cloudflare/memsource-cli
```
