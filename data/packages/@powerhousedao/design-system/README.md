# design-system

This repository contains base and scoped (project) components, utilities, and hooks for the powerhouse org.

### How to run this project:

-   Clone this repo: `git clone https://github.com/powerhouse-inc/design-system.git`
-   Install dependencies: `yarn install`
-   Run Storybook: `yarn storybook`

### Project structure:

-   `src`: Contains all the code related to the library.
-   `src/assets`: Contains various assets such as icons, images, etc.
-   `src/powerhouse`: Base components, hooks, and utilities.
-   `src/connect`: Components, hooks, and utilities specific to the `connect` app.
-   `.github/workflows`: CI/CD configuration (github actions).
-   `.storybook`: Storybook configuration.

### Adding new code:

The first step is to determine where to place your new component. Consider whether you are building a base component or a scoped component:

-   For base components, place your new files inside `src/powerhouse/<components | hooks>`
-   For scoped components, place your new files in the corresponding scope, e.g., `src/connect`, `src/any-other-scope-or-app`, etc.

Once you are clear about where to place your component files, you can start coding. You should follow this basic structure for your components:

-   `your-component.tsx`: Component base code.
-   `your-component.stories.tsx`: Stories for your component.
-   `your-component.test.tsx`: Tests for your component.

After creating your component, ensure that it looks good in Storybook and that all its tests pass.

### How to commit changes:

This project is configured to used [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), which means you have to follow this specification in your commit messages.

CI uses commit information to generate new releases and publish them on npm.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>
```

where **type** can be any of the following options:

-   `feat`: (new feature for the user, not a new feature for build script). _Correlates with `PATCH` in Semantic Versioning_
-   `fix`: (bug fix for the user, not a fix to a build script). _Correlates with `MINOR` in Semantic Versioning_
-   `docs`: (changes to the documentation)
-   `style`: (formatting, missing semi colons, etc; no production code change)
-   `refactor`: (refactoring production code)
-   `test`: (adding missing tests, refactoring tests; no production code change)
-   `chore`: (updating project related code (scripts, build, etc.); no production code change)
-   `BREAKING CHANGE` or appends a `!` after the type/scope: Introduces a breaking API change. _Correlating with `MAJOR` in Semantic Versioning_

**scope** is used to link your commit to a specific section of the codebase (FeatureA, FeatureB, etc.). Keep in mind that this is not required.

Here is an example of valid commit messages:

```
chore(project-setup): added CI workflow
feat(user-navigation): added Navigation component
fix: prevent racing of requests
chore!: drop support for Node 6
```

> Keep in mind that every time you create a new commit, a pre-commit process is executed to validate that your commit message is valid.

You can find more info about this topic here: https://www.conventionalcommits.org/en/v1.0.0/
