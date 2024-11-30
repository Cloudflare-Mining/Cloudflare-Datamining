# npm-cli-adduser

A script to perform `npm adduser` without having to interact with the shell.

### Installation

    npm install -g npm-cli-adduser

### Usage

##### CLI

`npm-cli-adduser` supports the following environment variables:

- `NPM_REGISTRY`: (optional) Private NPM registry to log in to (Default: https://registry.npmjs.org)
- `NPM_SCOPE`: NPM Scope
- `NPM_USER`: NPM username
- `NPM_PASS`: NPM password
- `NPM_EMAIL`: NPM email

These command line arguments are also supported:

- `-r --registry`: NPM Registry
- `-s --scope`: NPM Scope
- `-a --always-auth`
- `-t --auth-type`: The authentication type
- `-u --username`: NPM Username
- `-p --password`: NPM Password
- `-e --email`: NPM Email

Note that the command line arguments override the environment variables.

##### Example

Logging in to a private NPM registry:

```
npm-cli-adduser --registry https://example.com --username testUser --password testPass --email test@example.com
```