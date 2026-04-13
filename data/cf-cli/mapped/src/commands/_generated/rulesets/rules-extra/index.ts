/**
 * rules-extra command group
 * @generated from apis/rulesets/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import update from './update.js';

const command: CommandModule = {
  command: 'rules-extra',
  describe: 'Rules (additional) operations',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
