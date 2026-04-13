/**
 * rules command group
 * @generated from apis/rulesets/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';

const command: CommandModule = {
  command: 'rules',
  describe: 'Individual rules within a ruleset — each with an expression, action, and priority',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(edit).demandCommand(1);
  },

  handler: () => {},
};

export default command;
