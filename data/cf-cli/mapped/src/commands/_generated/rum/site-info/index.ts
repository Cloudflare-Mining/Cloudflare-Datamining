/**
 * site-info command group
 * @generated from apis/rum/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'site-info',
  describe: 'Web Analytics sites — register domains and get the JavaScript beacon snippet',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(get).command(list).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
