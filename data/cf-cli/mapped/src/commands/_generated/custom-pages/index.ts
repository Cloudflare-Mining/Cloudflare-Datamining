/**
 * custom-pages command
 * @generated from apis/custom-pages/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import getextra from './get-extra.js';
import list from './list.js';
import listextra from './list-extra.js';
import update from './update.js';
import updateextra from './update-extra.js';
import assets from './assets/index.js';

const command: CommandModule = {
  command: 'custom-pages',
  describe: 'Custom error and challenge pages (1000s, WAF blocks, captchas) for zones and accounts',

  builder: (yargs) => {
    return yargs
      .command(get)
      .command(getextra)
      .command(list)
      .command(listextra)
      .command(update)
      .command(updateextra)
      .command(assets)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
