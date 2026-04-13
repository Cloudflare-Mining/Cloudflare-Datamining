/**
 * rules command group
 * @generated from apis/cloud-connector/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'rules',
  describe: 'Routing rules that map request patterns to cloud provider endpoints',

  builder: (yargs) => {
    return yargs.command(list).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
