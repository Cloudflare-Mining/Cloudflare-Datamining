/**
 * rules command group
 * @generated from apis/cloudforce-one/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import deleteallrules from './delete-all-rules.js';
import deleteonerule from './delete-one-rule.js';
import get from './get.js';
import list from './list.js';
import statsget from './stats-get.js';
import treeget from './tree-get.js';
import update from './update.js';
import validatecreate from './validate-create.js';

const command: CommandModule = {
  command: 'rules',
  describe: 'Rules operations',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(deleteallrules)
      .command(deleteonerule)
      .command(get)
      .command(list)
      .command(statsget)
      .command(treeget)
      .command(update)
      .command(validatecreate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
