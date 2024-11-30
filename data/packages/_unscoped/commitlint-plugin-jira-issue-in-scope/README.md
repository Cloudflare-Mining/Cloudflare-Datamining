# JIRA Issue in Scope

JIRA Issue in Scope is a plugin extension for [commitlint](https://github.com/conventional-changelog/commitlint), which is a tool for linting commit messages.

If you want to learn more about structured and convention-driven commit messages, see [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Rules

This plugin adds the following rule:
+ `jira-issue-in-scope`:
  + This rule ensures that the `scope` is defined, and is formatted as a JIRA issue number (such as JIR-XXX)

## Sample Configuration
```js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    plugins: ['jira-issue-in-scope'],
    rules: {
        'jira-issue-in-scope': [2, 'always']
    }
};
```
