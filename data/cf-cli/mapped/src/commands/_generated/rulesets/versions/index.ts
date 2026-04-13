/**
 * versions command group
 * @generated from apis/rulesets/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'versions',
  describe: 'Immutable snapshots of a ruleset, allowing rollback and audit of rule changes',

  builder: (yargs) => {
    return yargs.command(delete_).command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
