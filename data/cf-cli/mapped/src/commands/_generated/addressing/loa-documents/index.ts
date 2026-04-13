/**
 * loa-documents command group
 * @generated from apis/addressing/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import get from './get.js';

const command: CommandModule = {
  command: 'loa-documents',
  describe: 'Letter of Authorization documents required to verify IP prefix ownership',

  builder: (yargs) => {
    return yargs.command(create).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
