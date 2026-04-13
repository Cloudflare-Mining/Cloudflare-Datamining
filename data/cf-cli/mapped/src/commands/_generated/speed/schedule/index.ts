/**
 * schedule command group
 * @generated from apis/speed/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';

const command: CommandModule = {
  command: 'schedule',
  describe: 'Scheduled recurring speed tests that automatically run at regular intervals',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
