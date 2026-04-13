/**
 * cloud-integrations command group
 * @generated from apis/magic-cloud-networking/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import discover from './discover.js';
import discoverall from './discover-all.js';
import edit from './edit.js';
import get from './get.js';
import initialsetup from './initial-setup.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'cloud-integrations',
  describe: 'Cloud provider credentials and integrations for resource discovery and on-ramp provisioning',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(discover)
      .command(discoverall)
      .command(edit)
      .command(get)
      .command(initialsetup)
      .command(list)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
