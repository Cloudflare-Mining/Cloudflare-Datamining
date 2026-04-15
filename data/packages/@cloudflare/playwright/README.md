# Playwright for Browser Run

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/playwright/tree/main/packages/playwright-cloudflare/examples/todomvc)

Fork of [Playwright](https://github.com/microsoft/playwright/) that was modified to be compatible with [Cloudflare Workers](https://developers.cloudflare.com/workers/) and [Browser Run](https://developers.cloudflare.com/browser-rendering/) (formerly Browser Rendering).

🏷️ Upstream Playwright version: [1.58.2](https://github.com/microsoft/playwright/releases/tag/v1.58.2)

## Getting Started

Create a [Cloudflare Worker](https://developers.cloudflare.com/workers/get-started/guide/_)

```Shell
npm create cloudflare@latest -- cf-playwright-worker
```

## Installation

This package is released on npmjs.com at [@cloudflare/playwright](https://www.npmjs.com/package/@cloudflare/playwright). To install it in your project:

```Shell
npm i -s @cloudflare/playwright
```

## Configuration

📄 **Place this in `wrangler.toml`**

```toml
compatibility_flags = [ "nodejs_compat" ]
browser = { binding = "MYBROWSER" }
```

## CDP Protocol Support

[Browser Run now has full CDP support](https://developers.cloudflare.com/changelog/post/2026-04-10-browser-rendering-cdp-endpoint/),
so starting with `@cloudflare/playwright` version 1.3.0, the library uses the
standard CDP (Chrome DevTools Protocol) internally to communicate with Browser
Run.

Everything should work the same way, but if you encounter any issues, please
[report them](https://github.com/cloudflare/playwright/issues). You can also
downgrade to a previous playwright version by using `compatibility_date` prior to
`2026-03-17` or by adding the `no_websocket_standard_binary_type` flag:

```toml
compatibility_date = "2026-03-16"
# or
compatibility_flags = ["nodejs_compat", "no_websocket_standard_binary_type", ...]
```

See [cloudflare/puppeteer#193](https://github.com/cloudflare/puppeteer/issues/193)
and [cloudflare/workerd#6442](https://github.com/cloudflare/workerd/issues/6442)
for details.

## Example

You can find a full running example here [Cloudflare Playwright running example](https://github.com/cloudflare/playwright/tree/main/packages/playwright-cloudflare/examples/todomvc)

### Screenshot

```js
import { launch } from '@cloudflare/playwright';

export default {
  async fetch(request, env): Promise<Response> {
    const browser = await launch(env.MYBROWSER);
    const page = await browser.newPage();

    await page.goto('https://demo.playwright.dev/todomvc');

    const TODO_ITEMS = [
        'buy some cheese',
        'feed the cat',
        'book a doctors appointment'
    ];

    const newTodo = page.getByPlaceholder('What needs to be done?');
    for (const item of TODO_ITEMS) {
        await newTodo.fill(item);
        await newTodo.press('Enter');
    }

    const img = await page.screenshot();
    await browser.close();

    return new Response(img, {
        headers: {
            'Content-Type': 'image/png',
        },
    });
  }
} satisfies ExportedHandler<Env>;
```

### Trace

```js
import fs from "fs";

import { launch } from "@cloudflare/playwright";

export default {
  async fetch(request, env): Promise<Response> {
    const browser = await launch(env.MYBROWSER);
    const page = await browser.newPage();

    await page.context().tracing.start({ screenshots: true, snapshots: true });

    // ... do something, screenshot for example

    // For now, fs only supports writing into /tmp
    await page.context().tracing.stop({ path: "/tmp/trace.zip" });
    await browser.close();
    const file = await fs.promises.readFile("/tmp/trace.zip");

    return new Response(file, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
      },
    });
  }
} satisfies ExportedHandler<Env>;
```

### Assertions

```js
import { launch } from "@cloudflare/playwright";
import { expect } from "@cloudflare/playwright/test";

export default {
  async fetch(request, env): Promise<Response> {
    const browser = await launch(env.MYBROWSER);
    const page = await browser.newPage();

    await page.goto("https://demo.playwright.dev/todomvc");

    const TODO_ITEMS = [
      "buy some cheese",
      "feed the cat",
      "book a doctors appointment",
    ];

    const newTodo = page.getByPlaceholder("What needs to be done?");
    for (const item of TODO_ITEMS) {
      await newTodo.fill(item);
      await newTodo.press("Enter");
    }

    await expect(page.getByTestId("todo-title")).toHaveCount(TODO_ITEMS.length);

    await Promise.all(
      TODO_ITEMS.map((value, index) =>
        expect(page.getByTestId("todo-title").nth(index)).toHaveText(value)
      )
    );
  }
} satisfies ExportedHandler<Env>;
```

# Contribute

## Build

To build Playwright for Cloudflare:

```sh
npm ci
git submodule update --init
cd packages/playwright-cloudflare
npm run build
```

## Run

To run the TodoMVC example:

- launch it with `wrangler`:

```sh
cd packages/playwright-cloudflare/examples/todomvc
npm ci
npx wrangler dev --remote
```

- press `b` to open the browser

## 🚧 Currently Unsupported Features

The following capabilities are not fully supported, but we’re actively working on them.

- [Playwright Test](https://playwright.dev/docs/test-configuration) except [Assertions](https://playwright.dev/docs/test-assertions)
- [Components](https://playwright.dev/docs/test-components)
- [Firefox](https://playwright.dev/docs/api/class-playwright#playwright-firefox), [Android](https://playwright.dev/docs/api/class-android) and [Electron](https://playwright.dev/docs/api/class-electron), as well as different versions of Chrome
- [Videos](https://playwright.dev/docs/videos)

This is **not an exhaustive list** — expect rapid changes as we work toward broader parity with the original feature set. You can also check [latest test results](https://playwright-full-test-report.pages.dev/) for a granular up to date list of the features that are fully supported
