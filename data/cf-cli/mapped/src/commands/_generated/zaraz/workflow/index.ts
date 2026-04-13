/**
 * workflow command group
 * @generated from apis/zaraz/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'workflow',
  describe: 'Workflow state for Zaraz configuration changes (draft vs. published)',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
