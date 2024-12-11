# Conventional Release Notes
A [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) preset for efficient and descriptive release notes


## Commit Message Format
For generating proper release notes, the commit messages should follow the [conventional commits](https://www.conventionalcommits.org) spec.
A commit message consists of a **header**, **body** and **footer**. The header has a **type**, **scope** and **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types include and are limited to:
| Type | Version Bump | Description and used for |
| :----: | :---: |-----------------------|
| feat | minor | New features |
| fix | patch | Fixing bugs |
| revert | patch | Reverting commits |
| perf | patch | Performance improvements |
| refactor | patch | Refactoring code without changing functionality |
| build | patch | Build-system changes (deps, webpack, etc.) |
| chore | patch | General chores like version bump, merges, etc |
| ci | patch | CI/CD related changes |
| docs | none | Documentation |
| test | none | Adding/improving tests |
| style | none | Code-style, formatting, white-space, etc |


* !: A commit that appends a `!` after the type/scope, introduces a breaking API change. A BREAKING CHANGE can be part of commits of any type and introduces a major version bump.
* A scope of `norelease` with any commit message type will not bump a release version.

The **header** is mandatory and the **scope** of the header is optional.

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

If the prefix is `feat`, `fix`, `perf`, `refactor`, `build` or any of the above types, it will appear in the changelog. However if there is any [BREAKING CHANGE](#footer), the commit will also appear in the release notes with a `Breaking Changes` header.

Other prefixes are up to your discretion. Suggested prefixes are `build`, `ci`, `docs` ,`style`, `refactor`, and `test` for non-changelog related tasks.

Details regarding these types can be found in the official [Angular Contributing Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type).

### Scope

The scope could be anything specifying place or component of the commit change. 

### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document](#commit-message-format).
