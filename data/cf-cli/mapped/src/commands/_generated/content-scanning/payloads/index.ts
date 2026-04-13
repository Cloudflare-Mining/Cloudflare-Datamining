/**
 * payloads command group
 * @generated from apis/content-scanning/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import list from './list.js';

const command: CommandModule = {
  command: 'payloads',
  describe: 'Scanned payload logs showing detection results for uploaded content',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
