/**
 * browser-rendering command
 * @generated from apis/browser-rendering/schema.ts
 */
import type { CommandModule } from 'yargs';
import content from './content/index.js';
import crawl from './crawl/index.js';
import json from './json/index.js';
import links from './links/index.js';
import markdown from './markdown/index.js';
import pdf from './pdf/index.js';
import scrape from './scrape/index.js';
import screenshot from './screenshot/index.js';
import snapshot from './snapshot/index.js';

const command: CommandModule = {
  command: 'browser-rendering',
  describe:
    'Headless browser API — render pages, take screenshots, generate PDFs, scrape content, and extract structured data',

  builder: (yargs) => {
    return yargs
      .command(content)
      .command(crawl)
      .command(json)
      .command(links)
      .command(markdown)
      .command(pdf)
      .command(scrape)
      .command(screenshot)
      .command(snapshot)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
