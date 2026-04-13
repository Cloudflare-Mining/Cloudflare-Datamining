/**
 * scrape command group
 * @generated from apis/browser-rendering/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';

const command: CommandModule = {
  command: 'scrape',
  describe: 'Scrape structured data from web pages using CSS selectors',

  builder: (yargs) => {
    return yargs.command(create).demandCommand(1);
  },

  handler: () => {},
};

export default command;
