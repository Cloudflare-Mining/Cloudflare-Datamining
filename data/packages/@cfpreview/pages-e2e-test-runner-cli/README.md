# Pages e2e tests

## Fixtures vs. Features

A fixture is the skeleton of a Pages project. You'll usually want a fixture to be the source code of a framework starter/template. However, you can create more dynamic fixtures which are mostly empty, and automatically run a command (e.g. `npx create-react-app@latest`) to bootstrap it instead. Together, this functionality allows you to create fixtures which test historic versions of frameworks, as well as current and upcoming versions.

A feature, on the other hand, is some sort of transformation you do to a fixture. For example, you can add a new page to your fixture which would demonstrates a particular feature of the framework in use. Features are broken out of fixtures so that they can be applied easily across multiple fixtures without copy-pasting, and so updating them is made much easier.

Fixtures and features can each have their own tests.

## Adding a new fixture

1.  Create a `/fixtures/<name-of-fixture>/` directory. Populate it with your fixture. You may want to remove any tests and testing config if any came with the project when bootstrapping with something like `create-react-app`.

1.  Add any test files to this directory that you want to run against the fixture. More on how to write the tests [below](#writing-a-test).

1.  Create a `/fixtures/<name-of-test>/main.fixture` file:

    ```jsonc
    {
    	"features": ["list-of-features", "you-want-to-apply", "to-this-fixture"],
    	// Any bootstrapping command you want to run before triggering a build on the fixture
    	"setup": "npx create-react-app@latest",
    	"buildConfig": {
    		"buildCommand": "echo \"hi\"",
    		"buildOutputDirectory": "public"
    	}
    }
    ```

## Adding a new feature

Features are given the following environment variables:

- `WORKSPACE_DIR`, the fixture directory that is being used in this test run.

1.  Create a `/features/<name-of-feature>/main.feature` file:

    ```jsonc
    {
    	// Any bootstrapping command you want to run in order to apply this feature to the fixture
    	"setup": "mkdir -p ${WORKSPACE_DIR}/functions && cp assets/functions-date.ts ${WORKSPACE_DIR}/functions/date.ts"
    }
    ```

An example of running TypeScript in a setup command can be found in the [next-pages-experimental-edge-api-route](./features/next-pages-experimental-edge-api-route/) feature.

## Writing a test

Any `**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}` files in the fixture or applied feature directories will be run with [Vitest](https://vitest.dev/). Tests are given the following environment variables:

- `DEPLOYMENT_URL`, the URL of the deployed site. We've already validated that this is live, so you're free to immediately start hitting it. It does not have a trailing slash.

Here's a simple test which asserts the deployment contains the string "Hello, world!":

```typescript
import { describe, it } from "vitest";

describe("Simple HTML project", () => {
	it("should say 'Hello, world!' at the root", async ({ expect }) => {
		const response = await fetch(`${DEPLOYMENT_URL}/`);
		expect(await response.text()).toContain("Hello, world!");
	});
});
```

Additionally, tests in the `/__tests__/` directory are run globally on every fixture.

## How does this work?

1. Creates a Git repo locally, checks out a new orphan branch, with the fixture contents.
1. Runs `make setup`.
1. Runs `make setup` for each of the `features` defined in the fixture `Makefile`.
1. Git commits and pushes to a repo which is connected to a Pages Project which has auto deployments disabled.
1. Creates a Deploy Hook for that branch and triggers it.
1. Waits the Deployment to be live.
1. Runs the fixture and feature tests.
1. Uploads the test report as another Deployment.
1. Deletes the Deploy Hook and Git branch.

## Roadmap

- [x] Apply Cloudflare_CA.pem
- [x] Pretty results
- [x] Allow custom build output directories
- [x] Matrix mode

  - [x] Matrix reporting
  - [x] Matrix running
  - [x] Lock service

- [ ] Local mode using Wrangler
- [ ] Staging mode
- [ ] Direct Upload mode
- [x] Decent logging
- [x] Allow customizable deployment config per fixture
- [ ] Migrate security test
- [ ] Populate with a selection of framework fixtures
- [ ] Move to TeamCity and configure cron
- [ ] Alert failures
- [ ] Make it easier to add new types of bindings
- [ ] Error when there's a conflict on binding names

### Optional nice-to-haves

- [ ] Extend vitest matchers when using Playwright
