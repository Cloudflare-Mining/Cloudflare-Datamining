/**
 * resource-sharing command
 * @generated from apis/resource-sharing/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';
import recipients from './recipients/index.js';
import recipientsextra from './recipients-extra/index.js';
import resources from './resources/index.js';

const command: CommandModule = {
  command: 'resource-sharing',
  describe: 'Share Cloudflare resources (zones, accounts) across organizations with granular access controls',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(update)
      .command(recipients)
      .command(recipientsextra)
      .command(resources)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
