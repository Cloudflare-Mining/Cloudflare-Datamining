/**
 * resource-tagging command
 * @generated from apis/resource-tagging/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';
import accounttags from './account-tags/index.js';
import keys from './keys/index.js';
import summary from './summary/index.js';
import values from './values/index.js';
import zonetags from './zone-tags/index.js';

const command: CommandModule = {
  command: 'resource-tagging',
  describe: 'Tag accounts and zones with key-value metadata for organization, filtering, and policy targeting',

  builder: (yargs) => {
    return yargs
      .command(list)
      .command(accounttags)
      .command(keys)
      .command(summary)
      .command(values)
      .command(zonetags)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
