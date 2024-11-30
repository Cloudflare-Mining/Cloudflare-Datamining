# conventional-changelog-beemo

[![npm version](https://badge.fury.io/js/conventional-changelog-beemo.svg)](https://www.npmjs.com/package/conventional-changelog-beemo)
[![npm deps](https://david-dm.org/beemojs/conventional-changelog-beemo.svg)](https://www.npmjs.com/package/conventional-changelog-beemo)

> [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) >
> [beemo preset](https://github.com/beemojs/beemo)

Beemo's commit message guidelines and changelog structure. _Now with more emojis!_

## Commit Message Format

The commit message format consists of a **type**, optional **scope** in parens, and a required
**message**:

```
<type>: <message>
<type>(<scope>): <message>
<type>!: <breaking message>
<type>(<scope>)!: <breaking message>
```

### Type

The type is a way to group commits and flag semver changes. The following types must be used when
prefixing your commit message.

#### Major

- `break`, `breaking` - A _major_ breaking change.
- `release` - Not a breaking change but bumps the _major_ version.

#### Minor

- `new` - Introduces a new feature.
- `update` - Updates an existing feature.
- `feature` - A large feature that consist of multiple types of changes.

#### Patch

- `fix` - Fixes existing functionality.
- `deps` - Bumps, adds, or updates dependencies.
- `docs` - Updates documentation, changelogs, or readmes.
- `perf` - Performance improvements.
- `revert` - Reverts previous or broken code.
- `style`, `styles` - Updates visual styles, like CSS, or code formatting.
- `security` - Improves security.
- `type`, `types` - Updates type system related syntax (TS/Flow).
- `chore`, `misc` - Catch all for commits that don't align with other types.

#### Skip

- `ci`, `cd` - Changes to the CI/CD pipeline.
- `build` - Changes to the build system.
- `test`, `tests` - Changes to tests or the testing framework.
- `internal` - Internal changes not critical for the consumer.

### Scope

The scope is optional but useful in defining granularity in a commit message. Scope is ideally used
to target a specific feature or module within the project, for example:
`new(Button): Add a new Button component`.

Scopes will appear in the changelog before each line item and accept the following characters:
`a-z`, `0-9`, `-`, `.`, `,`, and spaces.

### Message

The message contains a succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes".
- Capitalize first letter of message.
- Trailing punctuation (period) is not required, but is subjective.

## Example

Given the following commit messages:

```
new(Button): Add new Button component
update(Modal,Tooltip): Refactor accessibility support
ci: Add DangerJS to pipeline
test: Add missing tests for a handful of files
fix(auth): Fixed a bug with the authentication flow
```

Would generate the following changelog:

---

## 1.2.3 - 2019-01-01

#### 🚀 Updates

- **[Button]** Add new Button component ([a1b2c3d][fake-commit])
- **[Modal,Tooltip]** Refactor accessibility support ([a1b2c3d][fake-commit])

#### 🐞 Fixes

- **[auth]** Fixed a bug with the authentication flow ([a1b2c3d][fake-commit])

#### 🛠 Internals

- Add DangerJS to pipeline ([a1b2c3d][fake-commit])
- Add missing tests for a handful of files ([a1b2c3d][fake-commit])

[fake-commit]: #example
