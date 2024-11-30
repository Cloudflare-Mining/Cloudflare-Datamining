# binjumper

A library for creating a jumper file to start an executable with extra arguments - symlinks with arguments

## Install

```
yarn add binjumper
```

## Why

Sometimes you need to create an executable symlink with additional arguments so you create a `.cmd` file that runs the executable with the additional arguments. This works perfectly fine for running the thing, but as soon as you need to cancel the script (ctrl + C) you'll start getting `Terminate batch job (Y/N)?` prompts from cmd. These are impossible to disable so when you have more of these spawning eachother you'll get something like this:

```sh
$ yarn command-using-npm-binaries
^C
Terminate batch job (Y/N)? y
Terminate batch job (Y/N)? y
Terminate batch job (Y/N)? y
Terminate batch job (Y/N)? y
$
```

This library works around that issue using a native executable (`.exe`) to perform the spawn on Windows, Unix doesn't have this problem so there a simple bash script is used.

## Example

See the [`examples`](/examples) directory

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
