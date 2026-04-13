/**
 * keyless-certificates command
 * @generated from apis/keyless-certificates/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'keyless-certificates',
  describe: 'Use your own SSL certificates without exposing private keys — keys stay on your infrastructure',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(edit).command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
